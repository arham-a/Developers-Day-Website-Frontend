"use client";

export default function RotatingIcon() {
  return (
    <div
      style={{
        animation: "spin 3s linear infinite",
      }}
    >
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <mask id="mask0_169_1300" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="37" height="37">
            <circle cx="18.1876" cy="18.1876" r="18.1876" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_169_1300)">
            <rect x="18.1875" y="18.1875" width="25.9822" height="25.9822" fill="#191111" />
            <rect x="-7.79492" y="18.1875" width="25.9822" height="25.9822" fill="#D41111" />
            <rect x="18.1875" y="-7.79395" width="25.9822" height="25.9822" fill="#D41111" />
            <rect x="-7.79492" y="-7.79395" width="25.9822" height="25.9822" fill="#191111" />
            <circle cx="18.1876" cy="18.1876" r="15.1876" stroke="#D41111" strokeWidth="6" />
          </g>
        </g>
      </svg>
    </div>
  );
}
