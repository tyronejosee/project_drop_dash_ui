import React, { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  icon?: React.ReactElement;
  children: ReactNode;
};

export function Button({
  variant,
  onClick,
  children,
  icon,
  ...props
}: ButtonProps): JSX.Element {
  let buttonClass =
    "h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

  switch (variant) {
    case "primary":
      buttonClass += " bg-neutral-800 hover:bg-neutral-950 text-neutral-200 ";
      break;
    case "secondary":
      buttonClass +=
        " bg-neutral-50 hover:bg-neutral-200 text-neutral-800 border border-neutral-200";
      break;
    default:
      break;
  }

  return (
    <button onClick={onClick} className={buttonClass} {...props}>
      {icon && React.cloneElement(icon, { className: "h-4 w-4 mr-2" })}
      {children}
    </button>
  );
}
