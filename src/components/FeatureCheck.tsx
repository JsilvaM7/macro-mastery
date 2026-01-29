import { Check, X } from "lucide-react";

interface FeatureCheckProps {
  text: string;
  included?: boolean;
}

const FeatureCheck = ({ text, included = true }: FeatureCheckProps) => {
  return (
    <div className="flex items-start gap-3">
      {included ? (
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success-light flex items-center justify-center mt-0.5">
          <Check className="w-4 h-4 text-primary" />
        </div>
      ) : (
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
          <X className="w-4 h-4 text-destructive" />
        </div>
      )}
      <span className={`text-base ${included ? "text-foreground" : "text-muted-foreground"}`}>
        {text}
      </span>
    </div>
  );
};

export default FeatureCheck;
