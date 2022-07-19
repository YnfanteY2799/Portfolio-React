import { forwardRef } from "react";
import clsx from "../../utils/functions/clsx";
import { ButtonProps, variants, sizes } from "../../utils/types/Types";
import { Spinner } from "./Spinner";

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={isLoading}
      type={type}
      className={clsx(
        "flex justify-center items-center border",
        "disabled:opacity-70 disabled:cursor-not-allowed",
        "focus:outline-none",
        "transition-all duration-200",
        "rounded-full",
        variants[variant],
        sizes[size],
        "active:scale-90 ease-in-out",
        className
      )}
      {...props}
    >
      {isLoading && (
        <Spinner size="sm" variant="light" className="text-current" />
      )}
      {!isLoading && startIcon}
      <span className={clsx(props.children ? "mx-2" : "")}>
        {props.children}
      </span>
      {!isLoading && endIcon}
    </button>
  )
);

export default function Button({
  title = "",
  isLoading = false,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      isLoading={isLoading}
      className={className}
      variant={variant}
      size={size}
      {...props}
    >
      {title}
    </BaseButton>
  );
}
