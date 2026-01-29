import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PhotoGallery } from "@/components/ui/PhotoGallery";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Github, Image } from "lucide-react";

const events = [
  {
    id: 1,
    name: "NetAuto Episode 1",
    date: "September 4 2024",
    location: "Neu-Isenberg, Hesse, Germany",
    description:
      "Our inaugural event brought together network automation enthusiasts for an intensive evening of knowledge sharing. From fundamentals to advanced topics, Episode 1 set the foundation for the NetAuto community.",
    image: "/epi-1/cover.jpeg",
    photos: [
      "/epi-1/2.jpeg",
      "/epi-1/3.jpeg",
      "/epi-1/4.jpeg",
      "/epi-1/5.jpeg",
    ],
    agenda: [
      "Networking with drinks and pizza",
      "Introduction to the group",
      "Introduction to network automation by Florian Löhden",
      "Discussion: What does network automation mean to you?",
      "Custom Ansible library for Nokia SR Linux by Uzma Saman Chanderki",
      "Networking",
    ],
    githubLink: "https://github.com/NetAuto-RheinMain/event-slides/tree/main/episode1",
    photosLink: "#",
  },
  {
    id: 2,
    name: "NetAutoberfest 2025",
    date: "October 2 2025",
    location: "Neu-Isenberg, Hesse, Germany",
    description:
      "A special halloween-Hachtoberfest edition focusing on Network Automation open source toolinh. Attendees participated in open discussions, unconference-style sessions, and collaborative problem-solving workshops.",
    image: "/epi-2/cover.jpeg",
    photos: [
      "/epi-2/1.jpeg",
      "/epi-2/2.jpeg",
      "/epi-2/3.jpeg",
      "/epi-2/4.jpeg",
      "/epi-2/6.jpeg",
    ],
    agenda: [
      "Arrival, networking, and food (17:00 CEST)",
      "Opening remarks and hackathon introduction (18:00 CEST)",
      "Hackathon kickoff and technical talks (around 18:15 CEST)",
      "Scheduled breaks and informal networking",
      "Event conclusion around 21:00 CEST",
    ],

    githubLink: "https://github.com/NetAuto-RheinMain/event-slides/tree/main/episode2-netautoberfest",
    photosLink: "#",
  },
  {
    id: 3,
    name: "NetAuto Episode 3",
    date: "November 6 2025",
    location: "Neu-Isenberg, Hesse, Germany",
    description:
      "Episode 3 pushed boundaries with advanced topics including Hachkathon discussion, teaching and learning from previous event and some a talk Red hat ansible platform.",
    image: "/epi-3/cover.jpeg",
    photos: [
      "/epi-3/1.jpeg",
      "/epi-3/3.jpeg",
      "/epi-3/4.jpeg",
    ],
    agenda: [
      "Hackathon recap covering ideas, learnings, and challenges",
      "Live demo of the Red Hat Ansible Automation Platform by Ralph John",
      "Engaging conversations, networking, and a welcoming atmosphere",
    ],
    githubLink: "https://github.com/NetAuto-RheinMain/event-slides/tree/main/episode4",
    photosLink: "#",
  },
  {
    id: 4,
    name: "NetAuto Episode 4",
    date: "December 11 2025",
    location: "Neu-Isenberg, Hesse, Germany",
    description:
      "Episode 4 focused on scaling network automation in production environments, observability, and real-world NetDevOps operating models.",
    image: "/epi-4/cover.jpeg",
    photos: [
      "/epi-4/1.jpeg",
      "/epi-4/2.jpeg",
      "/epi-4/3.jpeg",
    ],
    agenda: [
      "Get together and pizza (18:30)",
      "Talk 1: Open discussion on IPv6 (19:00)",
      "Short break",
      "Talk 2: NetDevOps with GNS3 driven by Terraform",
    ],
    githubLink: "#",
    photosLink: "#",
  },
  {
    id: 5,
    name: "NetAuto Episode 5",
    date: "February 6 2025",
    location: "Neu-Isenberg, Hesse, Germany",
    description:
      "Episode 5 delivered deep dives into platform engineering for networks, Terraform-driven automation, and multi-domain orchestration.",
    image: "/placeholder.svg",
    photos: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    agenda: [
      "Keynote: The Rise of Network Platform Engineering",
      "Terraform for Network Automation",
      "Multi-Domain Orchestration Strategies",
      "Workshop: Building Internal Network Platforms",
      "Panel: NetDevOps Maturity Models",
      "Closing & Community Reception",
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
        <div className="max-w-6xl mx-auto space-y-32">
          {[...events]
          .sort((a, b) => b.id - a.id)
          .map((event, index) => (
            <AnimatedSection key={event.id} delay={index * 100}>
              <article className="group">
                {/* Event Header Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-border/50 hover-lift">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Event badge */}
                  <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-sm font-medium">
                    Episode {event.id}
                  </div>
                </div>

                {/* Event Content */}
                <div className="grid lg:grid-cols-2 gap-8 mb-10">
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
                        className="border-foreground/30 hover:bg-foreground/10 hover:scale-105 transition-all duration-300"
                        asChild
                      >
                        <a href={event.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Presentations
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Right: Agenda */}
                  <div className="p-6 rounded-xl border border-border/50 bg-card card-shine">
                    <h3 className="font-semibold mb-4 text-lg">Agenda</h3>
                    <ul className="space-y-3">
                      {event.agenda.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground group/item">
                          <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-xs font-medium group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-colors">
                            {i + 1}
                          </span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Photo Gallery */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Event Gallery</h3>
                  <PhotoGallery photos={event.photos} eventName={event.name} />
                </div>

                {/* Divider */}
                {index < events.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-16" />
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
