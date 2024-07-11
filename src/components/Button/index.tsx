import "./button.style.scss";

interface ButtonProps {
  children?: React.ReactNode | string;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};
