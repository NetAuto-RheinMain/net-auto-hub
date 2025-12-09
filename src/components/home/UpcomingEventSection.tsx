import { Calendar, MapPin, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useState } from "react";
import { RegisterInterestDialog } from "@/components/forms/RegisterInterestDialog";

const upcomingEvent = {
  name: "NetAuto Episode 4",
  date: "March 15, 2025",
  time: "09:00 - 18:00 CET",
  location: "Munich, Germany",
  description: "Join us for the next chapter of NetAuto featuring cutting-edge presentations on infrastructure as code, intent-based networking, and the future of network observability.",
  image: "/placeholder.svg",
  agenda: [
    "Keynote: The Future of Network Automation",
    "Workshop: GitOps for Network Engineers",
    "Panel: AI/ML in Network Operations",
    "Demo: Zero-Touch Provisioning at Scale",
    "Networking & Community Mixer",
  ],
};

export function UpcomingEventSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Upcoming Event
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't miss our next gathering of network automation enthusiasts.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-transparent to-glow-cyan/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            
            <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden group-hover:border-foreground/20 transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto">
                  <img
                    src={upcomingEvent.image}
                    alt={upcomingEvent.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold tracking-tight mb-6">
                    {upcomingEvent.name}
                  </h3>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-accent" />
                      {upcomingEvent.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-accent" />
                      {upcomingEvent.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-accent" />
                      {upcomingEvent.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {upcomingEvent.description}
                  </p>

                  {/* Agenda Preview */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <FileText size={14} className="text-accent" />
                      Agenda Highlights
                    </h4>
                    <ul className="space-y-2">
                      {upcomingEvent.agenda.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      className="border-foreground/30 hover:bg-foreground/10"
                    >
                      Download Full Agenda
                    </Button>
                    <Button 
                      onClick={() => setIsDialogOpen(true)}
                      className="bg-foreground text-background hover:bg-foreground/90"
                    >
                      Register Interest
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <RegisterInterestDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
        eventName={upcomingEvent.name}
      />
    </section>
  );
}
