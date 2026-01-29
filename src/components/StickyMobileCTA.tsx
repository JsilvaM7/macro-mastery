import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (roughly 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card/95 backdrop-blur-sm border-t border-border shadow-medium md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">Get the Ebook</span>
          <div className="flex items-center gap-2">
            <span className="text-xs price-strike">$47</span>
            <span className="text-lg font-bold text-primary">$19.99</span>
          </div>
        </div>
        <CTAButton size="default" className="flex-shrink-0">
          Get Instant Access
        </CTAButton>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
