import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<Monogram />, { ...size });
}

function Monogram() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#141a29",
        color: "#e0fdff",
        borderRadius: 12,
        border: "2px solid rgba(0, 242, 254, 0.45)",
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: -0.5,
      }}
    >
      SZ
    </div>
  );
}
