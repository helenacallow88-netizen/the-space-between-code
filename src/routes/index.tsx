import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-threshold.jpg";
import coachingImg from "@/assets/individuals-visual.jpg";
import consultingImg from "@/assets/organizations-visual.jpg";
import wellbeingImg from "@/assets/experiences-visual.jpg";
import helenaImg from "@/assets/helena-about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Space Between | Coaching • Consulting • Wellbeing" },
      { name: "description", content: "For the whole person, and everything in between. Thoughtful coaching, people-centred leadership consulting and restorative wellbeing experiences with Helena Callow." },
      { property: "og:title", content: "The Space Between — Coaching • Consulting • Wellbeing" },
      { property: "og:description", content: "For the whole person, and everything in between." },
    ],
  }),
  component: Home,
});

const offers = [
  {
    title: "Coaching",
    image: coachingImg,
    eyebrow: "Individuals • Leaders • Groups",
    description: "A space to explore what matters, develop self-awareness and move forward with clarity. Reflective, practical coaching that works with your thoughts, emotions and body — not just what is happening in your head.",
    to: "/individuals" as const,
    action: "Explore coaching",
  },
  {
    title: "Consulting",
    image: consultingImg,
    eyebrow: "Founders • Leaders • Teams",
    description: "A trusted thought partner for the people side of running a business. Navigate relationships, communication, feedback, boundaries and change — balancing what the business needs with how people experience it.",
    to: "/organisations" as const,
    action: "Explore consulting",
  },
  {
    title: "Wellbeing",
    image: wellbeingImg,
    eyebrow: "Individuals • Groups • Workplaces",
    description: "Restore, reconnect and make space for yourself. Indian Head and Hand Massage, cosy pamper gatherings, grounding, mindful movement and bespoke workplace wellbeing sessions.",
    to: "/experiences" as const,
    action: "Explore wellbeing",
  },
];

function Home() {
  return (
    <>
      <section className="surface-warm">
        <div className="container-prose grid gap-12 pb-20 pt-16 md:grid-cols-12 md:items-center md:pb-28 md:pt-24">
          <div className="md:col-span-7">
            <p className="eyebrow">Coaching • Consulting • Wellbeing</p>
            <h1 className="mt-7 text-balance text-4xl leading-[1.08] md:text-6xl lg:text-7xl">For the whole person, <span className="italic text-terracotta">and everything in between.</span></h1>
            <p className="mt-8 max-w-xl font-serif text-xl leading-relaxed md:text-2xl">Space to think clearly, connect more deeply and move forward with confidence.</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">I'm Helena. Through coaching, people-centred consulting and restorative wellbeing experiences, I work with individuals, groups and workplaces to create meaningful change, connection and moments of rest.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#services" className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90">Explore my services</a>
              <Link to="/contact" className="rounded-full border border-foreground/25 px-6 py-3 text-sm text-foreground hover:bg-foreground/5">Let's talk</Link>
            </div>
          </div>
          <div className="md:col-span-5"><img src={heroImg} alt="Warm light spilling through an open doorway" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_28px_60px_-32px_rgba(60,30,15,.35)]" /></div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-prose">
          <p className="eyebrow">How we can work together</p>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">Three ways to make space for what matters.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Each service has its own purpose. Together, they reflect my belief that we're more than our job titles, our thoughts or a single part of our lives.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offers.map((offer) => (
              <Link key={offer.title} to={offer.to} className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition-shadow hover:shadow-xl">
                <img src={offer.image} alt="" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" loading="lazy" />
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow text-xs">{offer.eyebrow}</p>
                  <h3 className="mt-4 text-3xl">{offer.title}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{offer.description}</p>
                  <span className="mt-8 text-sm font-medium">{offer.action} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-clay py-20 md:py-28">
        <div className="container-prose grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Signature experience</p>
            <h2 className="mt-5 text-4xl md:text-5xl">The Space <span className="italic text-terracotta">to Lead.</span></h2>
            <p className="mt-5 font-serif text-xl leading-relaxed">Step away from the everyday. Make space for the leader and the person behind it.</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">An experience created around you, combining thoughtful coaching, practical leadership support and restorative wellbeing. We might walk and talk by the sea, explore a challenging people situation, reflect on your leadership patterns, share lunch and include an optional massage.</p>
            <p className="mt-4 text-muted-foreground">Half-day, full-day or bespoke. In person at a peaceful location or online, with grounding and self-led practices adapted to the format.</p>
            <Link to="/space-to-lead" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90">Discover The Space to Lead</Link>
          </div>
          <div className="md:col-span-5 rounded-[1.75rem] border border-foreground/10 bg-cream/70 p-8 md:p-10">
            <p className="eyebrow">What you'll take away</p>
            <ul className="mt-6 space-y-5 font-serif text-xl leading-snug">
              <li>More clarity about what is really going on.</li>
              <li>Fresh perspectives on leadership and relationships.</li>
              <li>Practical next steps to put into action.</li>
              <li>Space to feel grounded and restored.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4"><p className="eyebrow">My approach</p><h2 className="mt-4 text-3xl md:text-4xl">Warmth in the experience. Depth in the work. Clarity in the outcomes.</h2></div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-8">
            <p>Working with the whole person doesn't mean losing sight of the outcome. It means recognising that our thoughts, emotions, physical responses and relationships all shape how we show up and what we do next.</p>
            <p>We work with what's happening for you now — with curiosity, respect and constructive challenge. There may be grounding, reflection or movement, alongside clear thinking, honest conversations and practical action. This is coaching and development, not therapy.</p>
            <p className="font-serif text-2xl text-foreground">Thoughtful support. Meaningful outcomes.</p>
          </div>
        </div>
      </section>

      <section className="surface-sage py-20 md:py-24">
        <div className="container-prose grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-4"><img src={helenaImg} alt="Helena, founder of The Space Between" className="aspect-[4/5] w-full rounded-[1.75rem] object-cover" loading="lazy" /></div>
          <div className="md:col-span-8">
            <p className="eyebrow">Meet Helena</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Human first. Practical always.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">I'm a coach, consultant and wellbeing practitioner with over 15 years' experience developing people and supporting leaders. I've led national teams, worked with senior executives, facilitated difficult conversations and supported individuals to find their own way forward.</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">I bring warmth, curiosity and care — but I won't shy away from the question that needs asking. I'm interested in what changes after our work together, not just how good a session feels in the moment.</p>
            <Link to="/about" className="mt-7 inline-flex text-sm font-medium underline underline-offset-4">More about me →</Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-prose">
          <p className="eyebrow">Kind words</p>
          <h2 className="mt-4 text-3xl md:text-4xl">What people say.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">A few reflections from people I've coached and worked alongside.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <blockquote className="rounded-[1.5rem] border border-border bg-card p-7">
              <p className="font-serif text-lg leading-relaxed">“I come away from sessions with her feeling inspired and energised.”</p>
              <footer className="mt-6 text-sm text-muted-foreground">— Coaching client</footer>
            </blockquote>
            <blockquote className="rounded-[1.5rem] border border-border bg-card p-7">
              <p className="font-serif text-lg leading-relaxed">“Helena really, and very genuinely, cares about people. She is good at building lasting relationships. She is kind. She is honest and trustworthy.”</p>
              <footer className="mt-6 text-sm text-muted-foreground">— Kurtis, former CEO</footer>
            </blockquote>
            <blockquote className="rounded-[1.5rem] border border-border bg-card p-7">
              <p className="font-serif text-lg leading-relaxed">“Helena leads people equally well from in front (directing), alongside (collaborating) and behind (supporting).”</p>
              <footer className="mt-6 text-sm text-muted-foreground">— Mark, former team member</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="surface-ink py-20 md:py-28">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow" style={{ color: "var(--rose)" }}>Let's connect</p>
          <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">What would you like to make space for?</h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">Whether you have a clear idea or just know something needs to shift, we can explore the right support for you.</p>
          <Link to="/contact" className="mt-9 inline-flex rounded-full bg-cream px-6 py-3 text-sm text-ink hover:opacity-90">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}
