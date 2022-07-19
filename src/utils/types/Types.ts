// function
export function clsx(...args: string[]) {
  return args.join(" ");
}

// Costants
export const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};

export const variants = {
  basic: clsx("text-white hover:text-slate-700", "focus:ring-4", "border-none"),
  primary: clsx(
    "bg-slate-700 hover:bg-white",
    "text-white hover:text-slate-700",
    "border-slate-700 hover:border-slate-700",
    "focus:ring-4 focus:ring-slate-700/50",
    "shadow-sm"
  ),
  secondary: clsx(
    "bg-secondary hover:bg-white",
    "text-white hover:text-secondary",
    "border-secondary hover:border-secondary",
    "focus:ring-4 focus:ring-secondary/50",
    "shadow-sm"
  ),
  white: clsx(
    "bg-white hover:bg-slate-700",
    "text-slate-700",
    "hover:text-white",
    "outline-none border-none",
    "shadow-sm"
  ),
  transparent: clsx(
    "bg-white hover:bg-transparent",
    "text-slate-700",
    "hover:text-white",
    "outline-none border-none",
    "shadow-sm"
  ),
  success: clsx(
    "bg-green-600 hover:bg-white",
    "text-white hover:text-green-600",
    "border-green-600 hover:border-green-600",
    "focus:ring-4 focus:ring-green-600/50",
    "shadow-sm"
  ),
  warning: clsx(
    "bg-yellow-600 hover:bg-white",
    "text-white hover:text-yellow-600",
    "border-yellow-600 hover:border-yellow-600",
    "focus:ring-4 focus:ring-yellow-600/50",
    "shadow-sm"
  ),
  danger: clsx(
    "bg-red-600 hover:bg-white",
    "text-white hover:text-red-600",
    "border-red-600 hover:border-red-600",
    "focus:ring-4 focus:ring-red-600/50",
    "shadow-sm"
  ),
  "outline-slate-700": clsx(
    "hover:bg-slate-700",
    "text-slate-700 hover:text-white",
    "border-slate-700 border-2 hover:border-slate-700",
    "focus:ring-4 focus:ring-slate-700/50",
    "shadow-sm"
  ),
  "outline-secondary": clsx(
    "hover:bg-secondary",
    "text-secondary hover:text-white",
    "border-secondary hover:border-secondary",
    "focus:ring-4 focus:ring-secondary/50",
    "shadow-sm"
  ),

  "outline-danger": clsx(
    "hover:bg-red-600",
    "text-red-600 hover:text-white",
    "border-red-600 hover:border-red-600",
    "focus:ring-4 focus:ring-red-600/50",
    "shadow-sm"
  ),
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export type Route = {
  route: string;
  component: Function;
  childs?: Array<{ route: string; component: Function }>;
};

