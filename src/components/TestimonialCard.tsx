import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  result: string;
}

const TestimonialCard = ({ quote, author, result }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-6 rounded-2xl shadow-soft border border-border">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground mb-4 text-base leading-relaxed">"{quote}"</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-foreground">{author}</span>
        <span className="text-sm text-primary font-medium">{result}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
