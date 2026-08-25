import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-threshold.jpg";
import orgImg from "@/assets/organizations-visual.jpg";
import indImg from "@/assets/individuals-visual.jpg";
import expImg from "@/assets/experiences-visual.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Space Between — Leadership & People Development" },
      {
        name: "description",
        content:
          "Coaching, facilitation, consultancy, hosting and wellbeing experiences that help people and organisations develop, connect and thrive.",
      },
      { property: "og:title", content: "The Space Between" },
      {
        property: "og:description",
        content:
          "Developing people. Strengthening teams. Bringing rooms to life.",
      },
    ],
  }),
  component: Home,
});

const ways = [
  {
    image: orgImg,
    eyebrow: "Organisations & teams",
    title: "Develop your people and strengthen how they work together.",
    body: "Leadership development, facilitation, people consultancy, team development and workplace wellbeing — practical support shaped around the people challenge in front of you.",
    cta: "Explore organisational support",
    to: "/organisations" as const,
    tone: "clay" as const,
  },
  {
    image: indImg,
    eyebrow: "Coaching",
    title: "Think clearly. Understand yourself. Move forward.",
    body: "Human, reflective coaching for leaders, founders and individuals — from leadership and confidence to career, identity, relationships and life's bigger transitions.",
    cta: "Explore coaching",
    to: "/individuals" as const,
    tone: "rose" as const,
  },
  {
    image: expImg,
    eyebrow: "Hosting & experiences",
    title: "Bring the room to life.",
    body: "Facilitation, MC and event hosting, workshops, retreats and movement-based experiences that create energy, connection and conversations people remember.",
    cta: "Explore hosting & experiences",
    to: "/experiences" as const,
    tone: "sage" as const,
  },
];

function Home() {
  return (
    <>
      <section className="surface-warm relative overflow-hidden">
        <div className="container-prose grid gap-12 pb-24 pt-20 md:grid-cols-12 md:gap-10 md:pb-36 md:pt-32">
          <div className="md:col-span-7 md:pr-6">
            <p className="eyebrow">Leadership & people development</p>
            <h1 className="mt-8 text-balance text-4xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              Developing people. Strengthening teams.{" "}
              <span className="italic text-terracotta">Bringing rooms to life.</span>
            </h1>
            <p className="mt-10 max-w-xl font-serif text-xl leading-relaxed text-foreground md:text-2xl">
              I help people think more clearly, lead more humanly and connect more honestly — through coaching, facilitation, consultancy and experiences that people actually want to be part of.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
              The Space Between brings together over a decade of people development and leadership experience with coaching, somatic practice, facilitation, wellbeing and a genuine belief that development works best when people can be fully human.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/organisations" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90">
                Work with me
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded-full border border-foreground/20 bg-transparent px-6 py-3 text-sm text-foreground transition-colors hover:bg-foreground/5">
                Start a conversation
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(60,30,15,0.35)]">
              <img src={heroImg} alt="A soft threshold between two spaces, light spilling through" width={1600} height={1200} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">What I do</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              People development, without losing the people.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I work with leaders, teams, organisations and individuals when something needs to develop, shift or come alive — a leader finding their style, a team needing to reconnect, a founder trying to understand their people, or a room that needs skilled facilitation and energy.
            </p>
            <p>
              My background is in leadership and people development. Coaching is one of the tools I use, alongside facilitation, thoughtful challenge, organisational listening, experiential learning and practical delivery.
            </p>
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              I am not interested in development that stays on a slide deck. I want people to feel it, understand it and do something differently because of it.
            </p>
          </div>
        </div>
      </section>

      <section className="surface-clay py-24 md:py-32">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">What you can bring me in for</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Clear offers. Flexible ways of working.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <OutcomeCard eyebrow="Lead & develop" title="Leadership, teams and people" outcomes={[
              "Leadership development and manager support",
              "Executive and founder coaching / thought partnership",
              "Team development, trust and ways of working",
              "People consultancy for growing or changing organisations",
              "Organisational listening and culture work",
            ]} />
            <OutcomeCard eyebrow="Facilitate & energise" title="Rooms, events and wellbeing" outcomes={[
              "Workshop design and facilitation",
              "Conference, panel and event hosting / MC work",
              "Workplace wellbeing and nervous-system reset sessions",
              "Embodied and playful development experiences",
              "Retreats, community events and movement experiences",
            ]} />
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">How I work</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Warmth, challenge, playfulness — and delivery.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I build trust quickly and work comfortably across a room — from founders and executives to managers, early-career professionals and frontline teams. I listen for what is really going on, ask the question that needs asking and help people turn insight into action.
            </p>
            <p>
              I am collaborative and practical. Once we understand what needs to happen, I help make it real: shaping the experience, bringing people with us and delivering to a high standard without stripping the humanity out of the process.
            </p>
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              Serious about the outcome. Human in the way we get there.
            </p>
          </div>
        </div>
      </section>

      <section className="surface-sage py-24 md:py-28">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">Ways we can work together</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Choose the doorway that best fits what you need.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ways.map((w) => <PathwayCard key={w.eyebrow} {...w} />)}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">The Space Between</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              The name still matters.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Development often happens in the space between what we already know and what we have not quite figured out yet — between intention and impact, confidence and uncertainty, the old way of working and the one we are trying to create.
            </p>
            <p>
              My role is to make that space useful: somewhere people can think, experiment, be challenged, reconnect and move forward with more clarity and confidence.
            </p>
            <div className="pt-2">
              <Link to="/about" className="inline-flex items-center gap-2 text-sm text-foreground">
                Read more about Helena and the work <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-ink py-24 md:py-32">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow" style={{ color: "var(--rose)" }}>Let's work together</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl">
            Need a coach, facilitator, people partner or host?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/75">
            Tell me what is happening, what you are trying to create and where you are getting stuck. We can work out the right shape of support from there.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center rounded-full bg-cream px-6 py-3 text-sm text-ink transition-opacity hover:opacity-90">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function OutcomeCard({ eyebrow, title, outcomes }: { eyebrow: string; title: string; outcomes: string[] }) {
  return (
    <div className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
      <p className="eyebrow text-terracotta">{eyebrow}</p>
      <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground md:text-3xl">{title}</h3>
      <ul className="mt-6 space-y-4 text-muted-foreground">
        {outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-3"><span className="mt-1 text-terracotta" aria-hidden>✓</span><span>{outcome}</span></li>
        ))}
      </ul>
    </div>
  );
}

function PathwayCard({ image, eyebrow, title, body, cta, to, tone }: { image: string; eyebrow: string; title: string; body: string; cta: string; to: "/organisations" | "/individuals" | "/experiences"; tone: "clay" | "rose" | "sage" }) {
  const toneColor = tone === "clay" ? "var(--terracotta)" : tone === "rose" ? "var(--rose)" : "var(--sage)";
  return (
    <Link to={to} className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(60,30,15,0.25)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={image} alt="" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p className="eyebrow" style={{ color: toneColor }}>{eyebrow}</p>
        <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground md:text-3xl">{title}</h3>
        <p className="mt-4 text-muted-foreground">{body}</p>
        <span className="mt-8 inline-flex items-center gap-2 text-sm text-foreground">{cta} <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span></span>
      </div>
    </Link>
  );
}
