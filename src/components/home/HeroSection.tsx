import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function HeroSection() {
  const scrollToFounders = () => {
    document.getElementById("founders")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Animated geometric lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Horizontal lines with animation */}
        <div className="absolute top-1/4 left-0 w-full h-px opacity-20">
          <div className="h-full bg-gradient-to-r from-transparent via-foreground/50 to-transparent animate-shimmer" />
        </div>
        <div className="absolute top-1/2 left-0 w-full h-px opacity-10">
          <div className="h-full bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
        </div>
        <div className="absolute top-3/4 left-0 w-full h-px opacity-20">
          <div className="h-full bg-gradient-to-r from-transparent via-foreground/50 to-transparent animate-shimmer" style={{ animationDelay: "1s" }} />
        </div>
        
        {/* Vertical lines */}
        <div className="absolute left-1/4 top-0 h-full w-px opacity-10">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-foreground/30 to-transparent" />
        </div>
        <div className="absolute left-1/2 top-0 h-full w-px opacity-15">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />
        </div>
        <div className="absolute left-3/4 top-0 h-full w-px opacity-10">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-foreground/30 to-transparent" />
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-accent/50 animate-float" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-glow-cyan/30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 rounded-full bg-accent/40 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />

      <div className="relative z-10 section-padding text-center max-w-5xl mx-auto">
        <AnimatedSection delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/30 mb-8">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm text-muted-foreground tracking-wide">
              Community-Driven Innovation
            </span>
          </div>
        </AnimatedSection>

{/* Logo */}
<AnimatedSection delay={50}>
  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
    <img
      src="/netauto.png"
      alt="NetAuto Group Logo"
      className="w-full h-full object-contain"
    />
  </div>
</AnimatedSection>

        <AnimatedSection delay={100}>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
  Net<span className="text-accent">Auto</span>{" "}
  <span>Group</span>
</h1>

        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mb-4 tracking-wide">
            Where Network Automation Innovators Converge
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            A community-driven initiative bridging engineers, developers, researchers, 
            and enthusiasts in the future of automated networking.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="min-w-[180px] bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300 hover-glow"
            >
              Explore NetAuto
            </Button>
            <Button
              onClick={scrollToFounders}
              variant="outline"
              size="lg"
              className="min-w-[180px] border-foreground/30 hover:bg-foreground/10 hover:border-foreground/50 hover:scale-105 transition-all duration-300"
            >
              Meet the Founders
            </Button>
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection delay={600} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={scrollToFounders}
            className="animate-float text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
