import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const dynamic = "force-static";
export const alt = `${site.name} | ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Card social no tema Catppuccin Mocha com acento Mauve.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#1e1e2e",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(203,166,247,0.25), transparent 45%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              borderRadius: 9999,
              backgroundColor: "#cba6f7",
              color: "#1e1e2e",
              fontSize: 48,
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ color: "#cba6f7", fontSize: 28, fontWeight: 600 }}>
            {site.shortName}
          </div>
        </div>

        <div
          style={{
            color: "#cdd6f4",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {site.role}
        </div>

        <div
          style={{
            color: "#a6adc8",
            fontSize: 34,
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          Full-stack web apps, from database to deploy.
        </div>

        <div
          style={{
            color: "#7f849c",
            fontSize: 26,
            marginTop: 56,
          }}
        >
          {`Next.js · NestJS · Prisma · ${site.location}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
