import { Zap, Target, Calculator, RefreshCw, CheckCircle, ArrowRight } from "lucide-react";
import CTAButton from "./CTAButton";

const ProductExplanation = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="section-container">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            More Than Aesthetics. A New Way to Transform Your Body and Confidence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            This isn't just about losing weight. It's about gaining confidence, unlocking sustainable energy, 
            and building the foundation for lifelong health—all through a proven, science-backed system.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="space-y-12 md:space-y-16">
          {/* Pillar 1 */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-success-light flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Pillar 1</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              The Science of the Calorie Deficit
            </h3>
            <p className="text-muted-foreground mb-6">
              Every successful fat loss journey starts with one fundamental truth: you must burn more calories than you consume. 
              But here's what the fad diets won't tell you—<strong className="text-foreground">how much</strong> of a deficit matters just as much as being in one.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Learn why extreme deficits sabotage your metabolism and lead to rebounds</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Discover your personal "sweet spot" deficit for maximum fat loss with minimum muscle loss</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Understand the science of TDEE and how to calculate yours accurately</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-success-light flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Pillar 2</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Mastering Your Macronutrients
            </h3>
            <p className="text-muted-foreground mb-6">
              Calories tell you <em>how much</em> to eat. Macros tell you <em>what</em> to eat. 
              The right balance of protein, carbohydrates, and fats is the difference between losing fat and losing muscle—between 
              feeling energized and feeling drained.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Why protein is non-negotiable for preserving lean muscle during a cut</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">How to set carbs and fats based on your lifestyle and preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">The flexibility framework: eat foods you love while hitting your targets</span>
              </li>
            </ul>
          </div>

          {/* Precision Calculation Guide */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-success-light flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">The System</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              The Precision Calculation Guide
            </h3>
            <p className="text-muted-foreground mb-6">
              No more guessing. No more generic online calculators that spit out the same numbers for everyone. 
              This guide gives you the exact formulas and step-by-step process to calculate <strong className="text-foreground">your</strong> personalized numbers.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-background rounded-xl p-4 border border-border">
                <h4 className="font-semibold text-foreground mb-2">What You'll Calculate</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Your Basal Metabolic Rate (BMR)</li>
                  <li>• Your Total Daily Energy Expenditure</li>
                  <li>• Your optimal calorie deficit</li>
                  <li>• Your protein, carb, and fat targets</li>
                </ul>
              </div>
              <div className="bg-background rounded-xl p-4 border border-border">
                <h4 className="font-semibold text-foreground mb-2">How It Works</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clear, easy-to-follow formulas</li>
                  <li>• Real examples with calculations</li>
                  <li>• Adjustments for activity level</li>
                  <li>• Special considerations for your goals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Adjustment System */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-success-light flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Long-Term Success</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              The Adjustment System
            </h3>
            <p className="text-muted-foreground mb-6">
              Your body adapts. Your life changes. Your macros should too. This system shows you exactly 
              <strong className="text-foreground"> when</strong> and <strong className="text-foreground">how</strong> to adjust your numbers 
              as you progress—so you never hit a plateau that stops your momentum.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Signs that it's time to recalculate your targets</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">How to break through weight loss plateaus strategically</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Transitioning from fat loss to maintenance without regaining</span>
              </li>
            </ul>
          </div>

          {/* Final Word */}
          <div className="text-center bg-success-light rounded-2xl p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Final Word: Trust The Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Transformation doesn't happen overnight. But with the right knowledge and a proven system, 
              it <em>does</em> happen. This ebook gives you everything you need to stop spinning your wheels 
              and start making real, measurable progress—week after week, pound after pound.
            </p>
            <p className="text-foreground font-semibold mb-8">
              The science is clear. The method is proven. The only question is: are you ready to start?
            </p>
            
            <CTAButton size="xl">
              Get Instant Access Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
            
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="price-strike text-lg">$47</span>
              <span className="text-2xl font-bold text-primary">$19.99</span>
            </div>
            <p className="text-sm text-accent font-medium mt-2">Limited Time: Save 57%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductExplanation;
