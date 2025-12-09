import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Previous Events" },
  { href: "/resources", label: "Resources" },
  { href: "/impressum", label: "Impressum" },
];

const socialLinks = [
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              NetAuto
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A community-driven initiative bridging engineers, developers, researchers, 
              and enthusiasts in the future of automated networking.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold tracking-wide">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold tracking-wide">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border rounded-md hover:bg-secondary hover:border-foreground/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-muted-foreground hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} NetAuto. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with passion for network automation
          </p>
        </div>
      </div>
    </footer>
  );
}
