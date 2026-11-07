import { ImageResponse } from "next/og";
import { ogImage } from "@/lib/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Social preview image, rendered once at build time. Served as a real `.png`
 * file so static hosts like GitHub Pages send the right Content-Type.
 */
export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#09090b",
        color: "#f4f4f5",
      }}
    >
      <div style={{ fontSize: 32, color: "#60a5fa", fontFamily: "monospace" }}>
        nicolascardenass.github.io
      </div>
      <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24 }}>{site.name}</div>
      <div style={{ fontSize: 40, color: "#a1a1aa", marginTop: 16 }}>{site.role}</div>
    </div>,
    { width: ogImage.width, height: ogImage.height },
  );
}
