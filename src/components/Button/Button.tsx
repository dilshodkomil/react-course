import "./Button.css";

export interface ButtonProps {
  children: React.ReactNode;
  type: "primary" | "secondary" | "danger";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type, children, leftIcon, rightIcon }) => {
  return (
    <button className={`btn btn--${type}`}>
      {leftIcon && <div className="btn__icon">{leftIcon}</div>}
      <span>{children}</span>
      {rightIcon && <div className="btn__icon">{rightIcon}</div>}
    </button>
  );
};
