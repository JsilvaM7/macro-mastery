import { 
  TrendingDown, 
  Dumbbell, 
  Utensils, 
  Heart, 
  Shield, 
  BookOpen,
  Download,
  ArrowRight,
  AlertCircle,
  Target,
  Calculator,
  Flame
} from "lucide-react";
import heroImage from "@/assets/hero-macros.jpg";
import CTAButton from "@/components/CTAButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCheck from "@/components/FeatureCheck";
import BenefitCard from "@/components/BenefitCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-success-light rounded-full">
              🔬 Science-Based Method
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              Calculate Your Macros, Control Your Calories, and{" "}
              <span className="text-primary">Lose Weight with Science</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A simple, proven system to lose fat without extreme diets or food restrictions.
            </p>

            <div className="relative w-full max-w-md mx-auto mb-8">
              <img 
                src={heroImage} 
                alt="Macronutrients - proteins, carbs, and fats" 
                className="w-full rounded-2xl shadow-medium"
              />
            </div>

            <div className="flex flex-col items-center gap-3">
              <CTAButton size="xl" className="w-full sm:w-auto animate-pulse-gentle">
                Get Instant Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </CTAButton>
              
              <div className="flex items-center gap-3 text-sm">
                <span className="price-strike text-lg">$47</span>
                <span className="text-2xl font-bold text-primary">$19.99</span>
              </div>
              <p className="text-sm text-accent font-medium">Today Only: Save 57%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Most People Fail to Lose Weight
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              If you've tried losing weight before without success, it's not your fault.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-background rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Guessing Calories</h3>
              <p className="text-sm text-muted-foreground">
                Without knowing your exact calorie needs, you're flying blind. Too few and you crash. Too many and you gain weight.
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Following Generic Diets</h3>
              <p className="text-sm text-muted-foreground">
                Cookie-cutter meal plans don't account for your body, preferences, or lifestyle. They're designed to fail.
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Cutting Foods Randomly</h3>
              <p className="text-sm text-muted-foreground">
                Eliminating entire food groups leaves you feeling deprived, hungry, and more likely to binge later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-success-light rounded-full">
              The Solution
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              A Science-Based System That Actually Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This ebook gives you the exact formulas and step-by-step process to calculate your personal macros and lose weight efficiently.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-success-light flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Personalized Calculation</h3>
              <p className="text-sm text-muted-foreground">
                Calculate macros tailored to your body, goals, and activity level.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-success-light flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Smart Calorie Deficit</h3>
              <p className="text-sm text-muted-foreground">
                Create the right deficit—not too aggressive, not too small.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-success-light flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Evidence-Based</h3>
              <p className="text-sm text-muted-foreground">
                Every recommendation is backed by peer-reviewed research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What You'll Learn
            </h2>
            <p className="text-muted-foreground">
              Everything you need to start losing weight the right way.
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-4">
            <FeatureCheck text="How to calculate your exact daily calorie needs" />
            <FeatureCheck text="How to determine your optimal protein, carbs, and fats" />
            <FeatureCheck text="How to adjust macros as you progress and lose fat" />
            <FeatureCheck text="How to eat the foods you enjoy and still lose weight" />
            <FeatureCheck text="How to track without becoming obsessive" />
            <FeatureCheck text="How to handle weekends, social events, and travel" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Results You Can Expect
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto">
            <BenefitCard 
              icon={TrendingDown}
              title="Lose Fat Consistently"
              description="Week after week progress, not frustrating plateaus."
            />
            <BenefitCard 
              icon={Dumbbell}
              title="Keep Your Muscle"
              description="Lose fat, not the muscle you worked hard to build."
            />
            <BenefitCard 
              icon={Utensils}
              title="No Starvation Required"
              description="Eat satisfying meals while still being in a deficit."
            />
            <BenefitCard 
              icon={Heart}
              title="Sustainable Lifestyle"
              description="Build habits that last a lifetime, not just weeks."
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Others Are Saying
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard 
              quote="Finally understood why my previous diets failed. Lost 18 lbs in 3 months following these calculations."
              author="Sarah M."
              result="Lost 18 lbs"
            />
            <TestimonialCard 
              quote="Simple and straight to the point. No fluff, just science. This is what I needed."
              author="Michael R."
              result="Lost 25 lbs"
            />
            <TestimonialCard 
              quote="I still eat pizza and burgers. The difference is now I know how to fit them into my macros."
              author="Jennifer K."
              result="Lost 12 lbs"
            />
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-xl mx-auto bg-card rounded-2xl shadow-medium border border-border overflow-hidden">
            <div className="bg-primary p-6 text-center">
              <h2 className="text-2xl font-bold text-primary-foreground">
                Get the Complete Ebook
              </h2>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="price-strike text-2xl">$47</span>
                  <span className="text-4xl font-bold text-primary">$19.99</span>
                </div>
                <p className="text-accent font-medium">Limited Time: Save 57%</p>
              </div>

              <div className="space-y-3 mb-8">
                <FeatureCheck text="Complete macro calculation system" />
                <FeatureCheck text="Step-by-step calorie guide" />
                <FeatureCheck text="Adjustment protocols for fat loss phases" />
                <FeatureCheck text="Bonus: Food flexibility framework" />
                <FeatureCheck text="Instant digital download (PDF)" />
                <FeatureCheck text="Lifetime access to updates" />
              </div>

              <CTAButton size="lg" className="w-full mb-4">
                <Download className="mr-2 w-5 h-5" />
                Get Instant Access Now
              </CTAButton>

              <p className="text-center text-sm text-muted-foreground">
                One-time payment • Instant download • No subscription
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-success-light flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              7-Day Money-Back Guarantee
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Try the ebook risk-free. If you don't feel more confident about calculating your macros within 7 days, 
              simply email us and we'll refund 100% of your purchase. No questions asked.
            </p>
            
            <p className="text-sm text-muted-foreground">
              Your satisfaction is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 gradient-hero">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Start Losing Weight Using Science Today
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Stop guessing. Start calculating. Get the results you deserve.
            </p>

            <CTAButton size="xl" className="w-full sm:w-auto">
              <Download className="mr-2 w-5 h-5" />
              Download the Ebook Now
            </CTAButton>

            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="price-strike text-lg">$47</span>
              <span className="text-2xl font-bold text-primary">$19.99</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground">
        <div className="section-container text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Macro Science Ebook. All rights reserved.
          </p>
          <p className="text-xs text-background/40 mt-2">
            Results may vary. This ebook provides educational information only.
          </p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
