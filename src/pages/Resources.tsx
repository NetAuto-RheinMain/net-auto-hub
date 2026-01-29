import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, GraduationCap, Github, Code, Terminal, GitBranch } from "lucide-react";

const blogs = [
  {
    title: "Network to Code Blog",
    description: "Deep dives into network automation tools, best practices, and real-world implementation guides.",
    url: "https://networktocode.com/blog/",
    image: "/placeholder.svg",
  },
  {
    title: "Packet Pushers",
    description: "Industry insights, podcast episodes, and technical articles on networking and automation.",
    url: "https://packetpushers.net/blog/",
    image: "/placeholder.svg",
  },
  {
    title: "IPSpace.net",
    description: "Ivan Pepelnjak's comprehensive resources on network design and automation.",
    url: "https://blog.ipspace.net/",
    image: "/placeholder.svg",
  },
  {
    title: "CBT Nuggets Networking Blog",
    description: "Official developer resources and tutorials for network programmability.",
    url: "https://www.cbtnuggets.com/networking/blog",
    image: "/placeholder.svg",
  },
];

const courses = [
  {
    title: "100-days-of-nautobot",
    provider: "Network to Code",
    description: " This is a self-directed, guided journey for anybody who wants to build a strong and consistent network automation skills using Nautobot",
    url: "https://github.com/nautobot/100-days-of-nautobot",
    image: "/placeholder.svg",
  },
  {
    title: "Introduction to Juniper Platform Automation and NetDevOps",
    provider: "Juniper Networking",
    description: "This introductory three-day course provides students with the foundational knowledge required to automate Junos using NetDevOps automation tools, protocols, and technologies.",
    url: "https://learningportal.juniper.net/juniper/user_activity_info.aspx?id=EDU-JUN-ILT-IJAUT",
    image: "/placeholder.svg",
  },
  {
    title: "The Isovalent/cilium labs",
    provider: "Isovalent",
    description: "The Isovalent labs are the best set of resources to learn about the leading cloud networking platform Cilium.",
    url: "https://isovalent.com/learning-tracks/",
    image: "/placeholder.svg",
  },
];

const bootcampSkills = [
  { icon: Terminal, name: "Linux & Shell" },
  { icon: GitBranch, name: "Git & Version Control" },

  { icon: Code, name: "Networking Fundamentals" },
  { icon: Code, name: "IP Addressing & Subnetting" },
  { icon: Code, name: "Switching & Topologies" },

  { icon: Code, name: "VLANs & STP" },
  { icon: Code, name: "OSPF & BGP" },
  { icon: Code, name: "IPv4 Connectivity" },

  { icon: Code, name: "Python for Network Engineers" },
  { icon: Code, name: "Go Basics" },

  { icon: Terminal, name: "Virtualization & Lab Environments" },
  { icon: Terminal, name: "Containerization with Docker" },

  { icon: Code, name: "Cloud Networking" },

  { icon: Terminal, name: "Ansible Configuration Management" },
  { icon: Terminal, name: "Terraform / OpenTofu" },

  { icon: GitBranch, name: "CI/CD Pipelines" },

  { icon: Code, name: "Monitoring & Observability" },
  { icon: Code, name: "Prometheus & Grafana" },
];


const Resources = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              Resources
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore curated blogs, courses, and our dedicated Network Automation Bootcamp.
            </p>
          </AnimatedSection>
        </div>
      </section>
      {/* Bootcamp Section */}
      <section className="py-24 section-padding">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="relative group">
              {/* Animated glow border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-glow-cyan/20 to-accent/30 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Left: Image */}
{/* Left: Image */}
<div className="relative aspect-video lg:aspect-auto min-h-[300px] overflow-hidden">
  {/* Optional overlay for contrast */}
  <div className="absolute inset-0 bg-black/30 z-10" />

  <img
    src="bootcamp.png"
    alt="Network Automation Bootcamp"
    className="absolute inset-0 w-full h-full object-cover grayscale"
  />
</div>


                  {/* Right: Content */}
                  <div className="p-8 lg:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                      Network Automation Bootcamp
                    </h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Our comprehensive bootcamp takes you from networking fundamentals 
                      to advanced automation. Learn Python, Git, Ansible, and modern APIs 
                      through hands-on labs and real-world scenarios.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {bootcampSkills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 bg-secondary/30"
                        >
                          <skill.icon size={16} className="text-accent" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      size="lg"
                      className="bg-foreground text-background hover:bg-foreground/90"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Bootcamp GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Blogs Section */}
      <section className="pb-24 section-padding">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight">Blogs We Recommend</h2>
            </div>
            <p className="text-muted-foreground">
              Stay updated with the latest in network automation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map((blog, index) => (
              <AnimatedSection key={blog.title} delay={index * 50}>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="h-full p-6 rounded-xl border border-border/50 bg-card hover:border-foreground/20 transition-all duration-300 hover-lift">
                    <div className="aspect-square w-16 mb-4 rounded-lg bg-secondary/50 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {blog.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Blog <ExternalLink size={14} />
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 section-padding bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight">Courses We Endorse</h2>
            </div>
            <p className="text-muted-foreground">
              Level up your skills with these recommended learning paths.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <AnimatedSection key={course.title} delay={index * 50}>
                <div className="group h-full p-6 rounded-xl border border-border/50 bg-card hover:border-foreground/20 transition-all duration-300">
                  <div className="aspect-video mb-4 rounded-lg bg-secondary/50 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent font-medium">{course.provider}</span>
                  <h3 className="font-semibold mt-1 mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-foreground/30 hover:bg-foreground/10"
                    asChild
                  >
                    <a href={course.url} target="_blank" rel="noopener noreferrer">
                      View Course <ExternalLink size={14} className="ml-2" />
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
