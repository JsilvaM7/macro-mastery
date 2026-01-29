import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

const CHECKOUT_URL = "https://gumroad.com/checkout?_gl=1*1r4fl13*_ga*NzAwMjUzOTguMTc2OTcyNTE4MA..*_ga_6LJN6D94N6*czE3Njk3MjgwNzkkbzIkZzEkdDE3Njk3MzA4MDckajYwJGwwJGgw";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "xl";
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "default", children, type = "button", onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type={type}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          {
            "gradient-cta text-primary-foreground shadow-cta hover:opacity-90 active:scale-[0.98]":
              variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80":
              variant === "secondary",
            "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground":
              variant === "outline",
          },
          {
            "px-6 py-3 text-base": size === "default",
            "px-8 py-4 text-lg": size === "lg",
            "px-10 py-5 text-xl": size === "xl",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export default CTAButton;
