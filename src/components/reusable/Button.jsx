const Button = ({
  children,
  onClick,
  variant = "default",
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
