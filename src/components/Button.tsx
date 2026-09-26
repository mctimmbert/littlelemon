type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "cta";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className,
}: ButtonProps) {
  return (
    <button type={type} className={`button button-${variant} ${className ?? ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
