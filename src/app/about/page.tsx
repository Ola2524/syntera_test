import { FooterSection } from "@/components/FooterSection";

export const metadata = {
  title: "About | Apex GT",
  description: "Learn about Apex GT - our heritage, mission, and commitment to automotive excellence.",
};

export default function AboutPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Our Story
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              About Apex GT
            </h1>
            <p className="text-lg text-white/60">
              Pioneering the future of automotive excellence since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Our Mission
              </h2>
              <p className="mb-4 text-white/60">
                At Apex GT, we believe that driving should be an experience that stirs the soul. 
                Our mission is to create vehicles that combine cutting-edge technology with 
                timeless design, delivering unparalleled performance and luxury.
              </p>
              <p className="text-white/60">
                Every Apex GT is crafted with precision engineering and an unwavering 
                commitment to excellence, pushing the boundaries of what&apos;s possible 
                in automotive design.
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Our Heritage
              </h2>
              <p className="mb-4 text-white/60">
                Founded in 2015 by a team of visionary engineers and designers, Apex GT 
                emerged from a shared passion for creating the ultimate driving machine. 
                Our headquarters in Beverly Hills, California serves as the creative hub 
                where innovation meets artistry.
              </p>
              <p className="text-white/60">
                From our first concept to the latest Apex GT model, we&apos;ve remained 
                dedicated to our founding principle: excellence without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-white/60">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries with cutting-edge technology and forward-thinking design.",
              },
              {
                title: "Craftsmanship",
                description: "Meticulous attention to detail in every component we create.",
              },
              {
                title: "Performance",
                description: "Delivering exhilarating power and precision handling in every vehicle.",
              },
              {
                title: "Sustainability",
                description: "Committed to reducing our environmental impact through innovation.",
              },
              {
                title: "Excellence",
                description: "Never settling for anything less than perfection in all we do.",
              },
              {
                title: "Passion",
                description: "Driven by a love for automotive artistry and the joy of driving.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="border border-white/10 p-6 transition-colors hover:border-white/20"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "10+", label: "Years of Excellence" },
              { value: "50K+", label: "Vehicles Delivered" },
              { value: "25", label: "Design Awards" },
              { value: "15", label: "Global Showrooms" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

