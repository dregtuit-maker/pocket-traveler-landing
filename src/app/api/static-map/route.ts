import { type NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// ─── Amsterdam defaults ───────────────────────────────────────────────────────
// Four iconic stops that form a natural walking loop through the canal district.
const DEFAULT_CENTER  = "52.3716,4.8958";
const DEFAULT_ZOOM    = "14";
const DEFAULT_SIZE    = "400x400";
const DEFAULT_SCALE   = "2";          // retina / high-DPI
const DEFAULT_MAPTYPE = "roadmap";

// markers: first stop in coral (#E07850), remaining in navy (#1E3A5F)
const DEFAULT_MARKERS = [
  "color:0xE07850|label:1|52.3791,4.9003",   // Amsterdam Centraal
  "color:0x1E3A5F|label:2|52.3731,4.8926",   // Dam Square
  "color:0x1E3A5F|label:3|52.3600,4.8852",   // Rijksmuseum
  "color:0x1E3A5F|label:4|52.3579,4.8686",   // Vondelpark
];

// Dashed-style path connecting the stops (semi-transparent coral)
const DEFAULT_PATH =
  "color:0xE0785099|weight:3" +
  "|52.3791,4.9003|52.3731,4.8926|52.3600,4.8852|52.3579,4.8686";

// Minimal map style: muted POI and transit, keeps landmarks visible
const MAP_STYLES = [
  "feature:poi.business|visibility:off",
  "feature:transit|visibility:off",
  "feature:road|element:labels.icon|visibility:off",
];

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "GOOGLE_MAPS_API_KEY is not configured" },
      { status: 500 }
    );
  }

  const qs = req.nextUrl.searchParams;

  // Build params – caller may override any default via query string
  const params = new URLSearchParams({
    center:  qs.get("center")  ?? DEFAULT_CENTER,
    zoom:    qs.get("zoom")    ?? DEFAULT_ZOOM,
    size:    qs.get("size")    ?? DEFAULT_SIZE,
    scale:   qs.get("scale")   ?? DEFAULT_SCALE,
    maptype: qs.get("maptype") ?? DEFAULT_MAPTYPE,
    key,
  });

  // markers – caller can pass multiple; fallback to defaults
  const callerMarkers = qs.getAll("markers");
  const markers = callerMarkers.length ? callerMarkers : DEFAULT_MARKERS;
  for (const m of markers) params.append("markers", m);

  // path
  const path = qs.get("path") ?? DEFAULT_PATH;
  params.append("path", path);

  // style params (appended individually)
  for (const s of MAP_STYLES) params.append("style", s);

  const upstream = `https://maps.googleapis.com/maps/api/staticmap?${params}`;

  let res: Response;
  try {
    res = await fetch(upstream);
  } catch {
    return NextResponse.json({ error: "upstream_fetch_failed" }, { status: 502 });
  }

  if (!res.ok) {
    return NextResponse.json(
      { error: "upstream_error", upstream_status: res.status },
      { status: 502 }
    );
  }

  const image = await res.arrayBuffer();

  return new NextResponse(image, {
    status: 200,
    headers: {
      "Content-Type":  res.headers.get("Content-Type") ?? "image/png",
      // CDN caches for 24 h; stale-while-revalidate allows background refresh
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
