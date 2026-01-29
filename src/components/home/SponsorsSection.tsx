import { AnimatedSection } from "@/components/ui/AnimatedSection";

const sponsor = {
  name: "Logicalis GmbH",
  logo: "/logicalis.svg",
  description: "We are Architects of Change.",
};

export function SponsorsSection() {
  return (
    <section className="py-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our Sponsor
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're grateful to our sponsor who makes NetAuto events possible.
          </p>
        </AnimatedSection>

        {/* Single Sponsor - Centered */}
        <AnimatedSection delay={100}>
          <div className="max-w-md mx-auto">
            <div className="group p-10 rounded-2xl border border-border/50 bg-card hover:border-foreground/30 transition-all duration-500 text-center card-shine hover-lift">
              {/* Logo Container */}
              <div className="w-28 h-28 mx-auto mb-6 rounded-xl bg-secondary/50 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:shadow-[0_0_40px_hsl(var(--glow)/0.3)]">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              {/* Sponsor Name */}
              <h3 className="text-2xl font-semibold mb-3">{sponsor.name}</h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {sponsor.description}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Become a Sponsor CTA */}
        <AnimatedSection delay={200} className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Interested in sponsoring NetAuto?
          </p>
          <a
            href="mailto:sponsors@netauto.community"
            className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors underline underline-offset-4 hover-scale"
          >
            Get in touch →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
