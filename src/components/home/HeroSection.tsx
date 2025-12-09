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
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-foreground/30 to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-foreground/30 to-transparent" />
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

        <AnimatedSection delay={100}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            Net<span className="text-accent">Auto</span>
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
              className="min-w-[180px] bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300 glow-border-hover"
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
