import { Header } from "@/components/layout/Header";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Custom header for light page */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="px-6 md:px-10 lg:px-20">
          <nav className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl font-bold tracking-tight text-black hover:opacity-80 transition-opacity">
              NetAuto
            </Link>
            <Link 
              to="/" 
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              ← Back to Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="px-6 md:px-10 lg:px-20 py-24">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
              Impressum
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Information according to § 5 TMG
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p>NetAuto Community Initiative</p>
                <p>c/o Alex Reiter & Jordan Chen</p>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Founders
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Alex Reiter</p>
                  <p className="text-gray-600">Co-Founder</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Jordan Chen</p>
                  <p className="text-gray-600">Co-Founder</p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Address
              </h2>
              <div className="text-gray-600 leading-relaxed">
                <p>Example Street 123</p>
                <p>12345 Munich</p>
                <p>Germany</p>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Contact
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-1">
                <p>
                  Email:{" "}
                  <a 
                    href="mailto:hello@netauto.community" 
                    className="text-black underline underline-offset-4 hover:no-underline"
                  >
                    hello@netauto.community
                  </a>
                </p>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Disclaimer
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  <strong className="text-gray-900">Liability for Content:</strong>{" "}
                  The content of our pages was created with the greatest care. However, 
                  we cannot guarantee that the content is correct, complete, or up-to-date.
                </p>
                <p>
                  <strong className="text-gray-900">Liability for Links:</strong>{" "}
                  Our offer contains links to external websites of third parties, 
                  the content of which we have no influence on. Therefore, we cannot 
                  assume any liability for this external content.
                </p>
                <p>
                  <strong className="text-gray-900">Copyright:</strong>{" "}
                  The content and works created by the site operators on these pages 
                  are subject to German copyright law.
                </p>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={350}>
            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} NetAuto. All rights reserved.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
};

export default Impressum;
