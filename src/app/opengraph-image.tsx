import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pocket Traveler – AI-Powered City Walking Tours";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1E3A5F 0%, #2B5280 55%, #1E3A5F 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Pocket{" "}
          <span style={{ color: "#E07850" }}>Traveler</span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          AI-powered walking tours for every city
        </div>
        <div
          style={{
            marginTop: 40,
            background: "#E07850",
            color: "#fff",
            fontSize: 22,
            fontWeight: 600,
            padding: "12px 32px",
            borderRadius: 8,
          }}
        >
          Join the waitlist
        </div>
      </div>
    ),
    { ...size }
  );
}
