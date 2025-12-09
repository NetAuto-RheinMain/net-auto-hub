import { AnimatedSection } from "@/components/ui/AnimatedSection";

const sponsors = {
  platinum: [
    { name: "TechCorp", logo: "/placeholder.svg", description: "Leading provider of enterprise networking solutions." },
  ],
  gold: [
    { name: "NetSolutions", logo: "/placeholder.svg", description: "Cloud-native networking and security." },
    { name: "AutoScale", logo: "/placeholder.svg", description: "Intelligent infrastructure automation platform." },
  ],
  community: [
    { name: "DevNet", logo: "/placeholder.svg", description: "Developer tools for network engineers." },
    { name: "OpenNMS", logo: "/placeholder.svg", description: "Open-source network management." },
    { name: "NetCode", logo: "/placeholder.svg", description: "Network automation training and certification." },
  ],
};

const tierStyles = {
  platinum: "col-span-full",
  gold: "md:col-span-1",
  community: "md:col-span-1",
};

const tierLabels = {
  platinum: { label: "Platinum", color: "text-foreground" },
  gold: { label: "Gold", color: "text-yellow-400" },
  community: { label: "Community", color: "text-muted-foreground" },
};

export function SponsorsSection() {
  return (
    <section className="py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our Sponsors
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're grateful to our sponsors who make NetAuto events possible.
          </p>
        </AnimatedSection>

        {/* Sponsors Grid */}
        {Object.entries(sponsors).map(([tier, tierSponsors], tierIndex) => (
          <div key={tier} className="mb-12 last:mb-0">
            <AnimatedSection delay={tierIndex * 100}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                <span className={`text-sm font-medium tracking-wider uppercase ${tierLabels[tier as keyof typeof tierLabels].color}`}>
                  {tierLabels[tier as keyof typeof tierLabels].label}
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
              </div>
            </AnimatedSection>

            <div className={`grid gap-6 ${tier === "platinum" ? "grid-cols-1 max-w-md mx-auto" : tier === "gold" ? "grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto" : "grid-cols-1 md:grid-cols-3"}`}>
              {tierSponsors.map((sponsor, index) => (
                <AnimatedSection key={sponsor.name} delay={tierIndex * 100 + index * 50}>
                  <div className="group p-6 rounded-lg border border-border/50 bg-card hover:border-foreground/20 transition-all duration-300 hover-lift text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-secondary/50 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h4 className="font-semibold mb-2">{sponsor.name}</h4>
                    <p className="text-muted-foreground text-sm">{sponsor.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}

        {/* Become a Sponsor CTA */}
        <AnimatedSection delay={400} className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Interested in sponsoring NetAuto?
          </p>
          <a
            href="mailto:sponsors@netauto.community"
            className="text-accent hover:text-foreground transition-colors underline underline-offset-4"
          >
            Get in touch →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
