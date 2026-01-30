import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "xl";
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "default", children, type = "button", onClick, disabled, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase.functions.invoke("create-payment");
        
        if (error) {
          console.error("Payment error:", error);
          toast.error("Erro ao processar pagamento. Tente novamente.");
          return;
        }

        if (data?.url) {
          window.location.href = data.url;
        }
      } catch (err) {
        console.error("Error:", err);
        toast.error("Erro ao conectar com o servidor.");
      } finally {
        setIsLoading(false);
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type={type}
        onClick={handleClick}
        disabled={disabled || isLoading}
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
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        {...props}
      >
        {isLoading ? "Processando..." : children}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export default CTAButton;
