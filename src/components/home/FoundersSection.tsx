import { Github, Linkedin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const founders = [
  {
    name: "Alex Reiter",
    role: "Co-Founder",
    bio: "Network automation specialist with 10+ years of experience in enterprise infrastructure and open-source contributions.",
    image: "/placeholder.svg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Jordan Chen",
    role: "Co-Founder",
    bio: "Software engineer passionate about bridging the gap between traditional networking and modern DevOps practices.",
    image: "/placeholder.svg",
    github: "#",
    linkedin: "#",
  },
];

export function FoundersSection() {
  return (
    <section id="founders" className="py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Meet the Founders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The minds behind NetAuto's mission to revolutionize network automation community.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <AnimatedSection key={founder.name} delay={index * 150}>
              <div className="group relative p-8 rounded-lg border border-border/50 bg-card hover:border-foreground/20 transition-all duration-500 hover-lift card-shine">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-border pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 mx-auto border-2 border-border group-hover:border-foreground/30 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:shadow-[0_0_30px_hsl(var(--glow)/0.3)]">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                    <p className="text-accent text-sm mb-4">{founder.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {founder.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3">
                      <a
                        href={founder.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 border border-border rounded-md hover:bg-secondary hover:border-foreground/20 transition-all duration-300 icon-bounce"
                        aria-label={`${founder.name}'s GitHub`}
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 border border-border rounded-md hover:bg-secondary hover:border-foreground/20 transition-all duration-300 icon-bounce"
                        aria-label={`${founder.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
