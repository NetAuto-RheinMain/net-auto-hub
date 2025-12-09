import { FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CallForPapersSection() {
  return (
    <section className="py-32 section-padding bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="relative group">
            {/* Animated border */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-accent/50 via-foreground/20 to-glow-cyan/50 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative rounded-2xl bg-background p-12 md:p-16 text-center border border-transparent">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-border bg-secondary/50 mb-8">
                <FileText className="w-7 h-7 text-accent" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Call for Papers
              </h2>

              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Share your research, innovation, and breakthroughs with the NetAuto community. 
                We welcome submissions on all aspects of network automation.
              </p>

              {/* Topics */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {["Infrastructure as Code", "Intent-Based Networking", "AI/ML Ops", "GitOps", "Network Observability"].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 text-sm border border-border/50 rounded-full text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Send className="w-4 h-4 mr-2" />
                  Submit via Google Form
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
