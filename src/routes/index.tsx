import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-threshold.jpg";
import coachingImg from "@/assets/individuals-visual.jpg";
import consultingImg from "@/assets/organizations-visual.jpg";
import wellbeingImg from "@/assets/experiences-visual.jpg";
import helenaImg from "@/assets/About me leopard print.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Space Between | Coaching • Consulting • Wellbeing" },
      { name: "description", content: "Space to pause. Perspective to move forward. Coaching, consulting and wellbeing for individuals, leaders and organisations." },
      { property: "og:title", content: "The Space Between — Coaching • Consulting • Wellbeing" },
      { property: "og:description", content: "Space to pause. Perspective to move forward." },
    ],
  }),
  component: Home,
});

const offers = [
  {
    title: "Coaching",
    image: coachingImg,
    eyebrow: "Individuals • Leaders • Groups",
    description: "A space to come as you are, without judgement or expectation. To pause, explore, be curious and connect more deeply with yourself. Through conversation, reflection and listening to the whole of you, we make room for new perspectives, possibilities and whatever might emerge along the way.",
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
            <h1 className="mt-7 text-balance text-4xl leading-[1.08] md:text-6xl lg:text-7xl">Space to pause. <span className="italic text-terracotta">Perspective to move forward.</span></h1>
            <p className="mt-8 max-w-xl font-serif text-xl leading-relaxed md:text-2xl">Through coaching, consulting and wellbeing, I help individuals, leaders and organisations step out of the everyday noise, better understand themselves and others, and reconnect with what matters.</p>
            <p className="mt-5 max-w-xl text-lg italic leading-relaxed text-muted-foreground">Because sometimes, seeing things differently changes everything.</p>
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

      <section className="surface-clay py-16 md:py-20"><div className="container-prose grid items-center gap-8 md:grid-cols-12"><div className="md:col-span-8"><p className="eyebrow">Massage gift vouchers</p><h2 className="mt-4 text-3xl md:text-4xl">Give someone a moment to pause.</h2><p className="mt-4 text-lg text-muted-foreground">A thoughtful gift of relaxation: Indian Head Massage or Head &amp; Hand Massage, with e-vouchers delivered by email.</p></div><div className="md:col-span-4 md:text-right"><Link to="/gift-vouchers" className="inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Explore gift vouchers</Link></div></div></section>

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
          <div className="md:col-span-4"><p className="eyebrow">My approach</p><h2 className="mt-4 text-3xl md:text-4xl">Pause. Reflect. Reconnect.</h2></div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-8">
            <p>You can arrive exactly as you are — with energy or stillness, clarity or uncertainty, questions or no particular agenda. Our thoughts, emotions, bodies and relationships all have something to tell us, if we make room to listen.</p>
            <p>Together, we explore what's present with curiosity, care and, when helpful, an honest challenge. There may be reflection, movement, laughter or quiet. Sometimes the experience is valuable in itself; sometimes it brings clarity or inspires change. There's no prescribed pace. Coaching is a space for exploration and development, not therapy.</p>
            <p className="font-serif text-2xl text-foreground">A little space can open up a different perspective.</p>
          </div>
        </div>
      </section>

      <section className="surface-sage py-20 md:py-24">
        <div className="container-prose grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-4"><img src={helenaImg} alt="Helena, founder of The Space Between" className="aspect-[4/5] w-full rounded-[1.75rem] object-cover" loading="lazy" /></div>
          <div className="md:col-span-8">
            <p className="eyebrow">Meet Helena</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Come as you are. Discover what's possible.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">I'm a coach, consultant and wellbeing practitioner with over 15 years' experience developing people and supporting leaders. I've led national teams, worked with senior executives, facilitated difficult conversations and supported individuals to find their own way forward.</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">I bring warmth, curiosity and care, alongside a willingness to explore questions that aren't always easy to ask. I value the experience itself — feeling heard, finding stillness, discovering something unexpected or simply having room to be. Sometimes that opens up a new perspective or a way forward; sometimes its meaning unfolds over time.</p>
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
