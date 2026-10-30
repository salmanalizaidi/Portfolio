import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141a29",
          color: "#e0fdff",
          borderRadius: 36,
          border: "6px solid rgba(0, 242, 254, 0.45)",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        SZ
      </div>
    ),
    { ...size },
  );
}
