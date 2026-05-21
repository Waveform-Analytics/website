import { ImageResponse } from "next/og";

export const alt = "Waveform Analytics — Michelle Weirathmueller, PhD";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8f6f1",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px 90px",
        }}
      >
        {/* Terracotta accent bar */}
        <div
          style={{
            width: "56px",
            height: "4px",
            background: "#b85c2a",
            marginBottom: "48px",
            display: "flex",
          }}
        />

        {/* Name label */}
        <div
          style={{
            fontSize: "20px",
            color: "#b85c2a",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "28px",
            display: "flex",
          }}
        >
          Michelle Weirathmueller, PhD
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "58px",
            fontWeight: 500,
            color: "#1c1917",
            lineHeight: 1.15,
            maxWidth: "860px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          Oceanographer building software for science, communities, and the
          spaces in between.
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              color: "#6b6560",
              display: "flex",
            }}
          >
            waveformanalytics.com
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#b85c2a",
              display: "flex",
            }}
          >
            Waveform Analytics
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
