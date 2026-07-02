import "./Button.css";

/**
 * Reusable pill-shaped link/button. Renders as an <a> since every button
 * in this portfolio is actually a link (to a section, a file, or a URL).
 *
 * variant: "primary" | "secondary"
 */
function Button({ href, children, variant = "primary", target, className = "" }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`btn-creative btn-${variant} ${className}`.trim()}
    >
      {children}
    </a>
  );
}

export default Button;
