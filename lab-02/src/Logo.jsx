export default function Logo({ withWordmark = true, className = "" }) {
  return (
    <svg
      className={`logo ${className}`}
      viewBox={withWordmark ? "0 0 330 96" : "0 0 96 96"}
      role="img"
      aria-label="Focusly"
    >
      <circle
        className="logo-ring"
        cx="48"
        cy="48"
        r="34"
        fill="none"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="160 54"
        transform="rotate(-60 48 48)"
      />
      <circle className="logo-dot" cx="48" cy="48" r="12" />
      {withWordmark && (
        <text
          className="logo-word"
          x="102"
          y="64"
          fontSize="46"
          fontWeight="700"
          letterSpacing="-1"
        >
          Focusly
        </text>
      )}
    </svg>
  );
}
