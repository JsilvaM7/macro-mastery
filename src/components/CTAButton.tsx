import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, useState, useCallback } from "react";
import { Loader2 } from "lucide-react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "xl";
  onClickAsync?: () => Promise<void>;
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "default", children, onClick, onClickAsync, disabled, type = "button", ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
      // Prevent default form submission if inside a form
      if (type !== "submit") {
        e.preventDefault();
      }

      // Prevent multiple clicks
      if (isLoading || disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      setIsLoading(true);

      try {
        if (onClickAsync) {
          await onClickAsync();
        } else if (onClick) {
          onClick(e);
        }
      } finally {
        setIsLoading(false);
      }
    }, [isLoading, disabled, onClick, onClickAsync, type]);

    const isDisabled = isLoading || disabled;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          "disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none",
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
        {isLoading ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export default CTAButton;
