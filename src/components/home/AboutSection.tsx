import { Network, Users, Lightbulb, Code } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: Users,
    title: "Community Focus",
    description: "Building bridges between engineers, developers, and researchers worldwide.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible in network automation.",
  },
  {
    icon: Network,
    title: "Knowledge Sharing",
    description: "Open discussions, workshops, and collaborative learning experiences.",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Contributing to and promoting open-source automation tools.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 section-padding bg-secondary/20 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-glow/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-glow-cyan/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <AnimatedSection>
  <div className="relative aspect-square max-w-md mx-auto">
    <div className="absolute inset-0 rounded-2xl border border-border/50 overflow-hidden bg-secondary/20">

      <img
        src="/netauto.png"
        alt="NetAuto Group Logo"
        className="absolute inset-0 w-full h-full object-contain"
      />

    </div>
  </div>
</AnimatedSection>


          {/* Right: Content */}
          <div>
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                About NetAuto
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                NetAuto Group RheinMain brings together network automation enthusiasts and professionals to share knowledge, explore tools, and solve real-world challenges. Our events are interactive forums to connect, collaborate, and learn from each other's experience.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Through our events, resources, and community initiatives, we bridge the gap 
                between theory and practice, fostering innovation and contributing to the 
                open-source ecosystem that powers modern network infrastructure.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={300 + index * 100}>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-foreground/20 transition-all duration-300 hover-lift card-shine group">
                    <feature.icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-xs">{feature.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
