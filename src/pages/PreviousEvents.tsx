import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Github, Image } from "lucide-react";

const events = [
  {
    id: 1,
    name: "NetAuto Episode 1",
    date: "September 2024",
    location: "Berlin, Germany",
    description: "Our inaugural event brought together network automation pioneers for an intensive day of knowledge sharing. From fundamentals to advanced topics, Episode 1 set the foundation for the NetAuto community.",
    image: "/placeholder.svg",
    agenda: [
      "Welcome & Community Introduction",
      "Network Automation 101: Getting Started",
      "Ansible for Network Engineers",
      "Python Scripting Best Practices",
      "Live Demo: Automating VLAN Configuration",
      "Networking Reception",
    ],
    githubLink: "#",
    photosLink: "#",
  },
  {
    id: 2,
    name: "NetAutoBofest 2025",
    date: "January 2025",
    location: "Vienna, Austria",
    description: "A special winter edition focusing on Birds of a Feather sessions. Attendees participated in open discussions, unconference-style sessions, and collaborative problem-solving workshops.",
    image: "/placeholder.svg",
    agenda: [
      "Opening Keynote: State of Network Automation",
      "BoF Session: Infrastructure as Code Challenges",
      "BoF Session: Multi-vendor Automation Strategies",
      "Workshop: Nornir Deep Dive",
      "Panel: The Future of NetDevOps",
      "Community Dinner & Awards",
    ],
    githubLink: "#",
    photosLink: "#",
  },
  {
    id: 3,
    name: "NetAuto Episode 3",
    date: "February 2025",
    location: "Zurich, Switzerland",
    description: "Episode 3 pushed boundaries with advanced topics including AI-assisted network operations, intent-based networking, and zero-trust automation patterns.",
    image: "/placeholder.svg",
    agenda: [
      "AI/ML in Network Operations",
      "Intent-Based Networking Deep Dive",
      "Zero-Trust Architecture Automation",
      "Workshop: Building Custom NAPALM Drivers",
      "Case Study: Enterprise-Scale Automation",
      "Lightning Talks & Closing",
    ],
    githubLink: "#",
    photosLink: "#",
  },
];

const PreviousEvents = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Previous Events
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse the highlights, agendas, presentations, and memories from past NetAuto sessions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Events List */}
      <section className="pb-32 section-padding">
        <div className="max-w-5xl mx-auto space-y-24">
          {events.map((event, index) => (
            <AnimatedSection key={event.id} delay={index * 100}>
              <article className="group">
                {/* Event Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-border/50">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Event badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-sm font-medium">
                    Episode {event.id}
                  </div>
                </div>

                {/* Event Content */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left: Info */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                      {event.name}
                    </h2>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-accent" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-accent" />
                        {event.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        className="border-foreground/30 hover:bg-foreground/10"
                        asChild
                      >
                        <a href={event.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Presentations
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-foreground/30 hover:bg-foreground/10"
                        asChild
                      >
                        <a href={event.photosLink} target="_blank" rel="noopener noreferrer">
                          <Image className="w-4 h-4 mr-2" />
                          Event Photos
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Right: Agenda */}
                  <div className="p-6 rounded-xl border border-border/50 bg-card">
                    <h3 className="font-semibold mb-4 text-lg">Agenda</h3>
                    <ul className="space-y-3">
                      {event.agenda.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-xs font-medium">
                            {i + 1}
                          </span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Divider */}
                {index < events.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-24" />
                )}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default PreviousEvents;
