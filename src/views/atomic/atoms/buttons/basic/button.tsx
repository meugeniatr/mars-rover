import buttonProps from "./buttonProps";

const Button: React.FC<buttonProps> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
