import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-threshold.jpg";
import orgImg from "@/assets/organizations-visual.jpg";
import indImg from "@/assets/individuals-visual.jpg";
import expImg from "@/assets/experiences-visual.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Space Between — Clarity, Courage and Connection Through Change" },
      {
        name: "description",
        content:
          "Helping people and organisations move through life's in-between moments with greater clarity, courage and connection.",
      },
      { property: "og:title", content: "The Space Between" },
      {
        property: "og:description",
        content:
          "When people feel genuinely seen, heard and understood, they think more clearly, communicate more honestly and move forward with greater confidence.",
      },
    ],
  }),
  component: Home,
});

const ways = [
  {
    image: orgImg,
    eyebrow: "Organisations",
    title: "Navigate change while protecting trust, culture and performance.",
    body: "People-centred support that helps leaders understand what their people are experiencing, communicate with clarity and treat people with fairness and respect — even when decisions are difficult.",
    cta: "Explore organisational support",
    to: "/organisations" as const,
    tone: "clay" as const,
  },
  {
    image: indImg,
    eyebrow: "Individuals",
    title: "Find clarity when life feels uncertain.",
    body: "A thoughtful, supportive space to untangle what is happening, understand yourself more deeply and take your next step with greater confidence and self-trust.",
    cta: "Explore individual support",
    to: "/individuals" as const,
    tone: "rose" as const,
  },
  {
    image: expImg,
    eyebrow: "Experiences",
    title: "Create honest conversation and meaningful connection.",
    body: "Facilitation, speaking, workshops, retreats and community experiences that help people slow down, engage openly and connect more deeply with themselves and each other.",
    cta: "Explore experiences",
    to: "/experiences" as const,
    tone: "sage" as const,
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="surface-warm relative overflow-hidden">
        <div className="container-prose grid gap-12 pb-24 pt-20 md:grid-cols-12 md:gap-10 md:pb-36 md:pt-32">
          <div className="md:col-span-7 md:pr-6">
            <p className="eyebrow">The Space Between</p>
            <h1 className="mt-8 text-balance text-4xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              Helping people move through life's in-between moments with greater{" "}
              <span className="italic text-terracotta">
                clarity, courage and connection.
              </span>
            </h1>
            <p className="mt-10 max-w-xl font-serif text-xl leading-relaxed text-foreground md:text-2xl">
              When people feel genuinely seen, heard and understood, they think
              more clearly, communicate more honestly and move forward with
              greater confidence. That's the environment I create.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
              Whether you're leading an organisation through change or facing a
              significant transition in your own life, this is a place to make
              sense of what is happening and find a constructive way forward.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/organisations"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                For organisations
              </Link>
              <Link
                to="/individuals"
                className="inline-flex items-center rounded-full border border-foreground/20 bg-transparent px-6 py-3 text-sm text-foreground transition-colors hover:bg-foreground/5"
              >
                For individuals
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(60,30,15,0.35)]">
              <img
                src={heroImg}
                alt="A soft threshold between two spaces, light spilling through"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-28 md:py-36">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Why this matters</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Change affects more than plans and processes. It affects people.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              When people don't feel heard, trust begins to erode. Communication
              becomes harder, relationships become strained and uncertainty can
              quickly turn into resistance, stress or disengagement.
            </p>
            <p>
              The same is true in our personal lives. When everything feels
              tangled or unclear, it is difficult to make decisions, trust our
              judgement or know what to do next.
            </p>
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              Feeling properly listened to creates room for something to shift.
            </p>
            <p>
              Thinking becomes clearer. Conversations become more honest. People
              feel respected and better able to understand themselves, each
              other and the situation they are facing. That is where meaningful
              progress begins.
            </p>
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="surface-clay py-24 md:py-32">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">The difference this work makes</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Practical outcomes, centred around people.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <OutcomeCard
              eyebrow="For individuals"
              title="Feel clearer, calmer and more able to trust yourself."
              outcomes={[
                "Untangle what is really going on and understand yourself more deeply.",
                "Make decisions you can stand behind and take your next step with confidence.",
                "Reduce stress and overthinking by creating space for clearer perspective.",
                "Communicate more honestly and build healthier relationships.",
                "Feel more comfortable with who you are and more hopeful about what comes next.",
              ]}
            />
            <OutcomeCard
              eyebrow="For organisations"
              title="Move through change without losing the trust of your people."
              outcomes={[
                "Help people feel heard, respected and treated fairly throughout change.",
                "Give leaders a clearer understanding of the employee experience.",
                "Improve communication, engagement and motivation across teams.",
                "Strengthen trust and culture, even when difficult decisions must be made.",
                "Protect relationships and reputation by helping people leave with dignity rather than resentment.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="py-28 md:py-36">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">How I work</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Space to think clearly, speak honestly and move forward.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I don't arrive with a fixed answer or assume that people need
              fixing. I listen carefully, ask thoughtful questions and create
              the conditions for honest conversation.
            </p>
            <p>
              That environment helps individuals see themselves and their
              choices more clearly. In organisations, it helps leaders
              understand what is happening beneath the surface and gives people
              a constructive way to say what needs to be said.
            </p>
            <p>
              My approach is warm, direct and people-centred. It combines deep
              listening with compassionate challenge, so insight does not remain
              an idea — it can lead to stronger relationships, better decisions
              and meaningful progress.
            </p>
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              I create the environment. You discover what becomes possible
              within it.
            </p>
          </div>
        </div>
      </section>

      {/* WAYS TO WORK TOGETHER */}
      <section className="surface-sage py-24 md:py-28">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">Ways we can work together</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Support shaped around the outcome you need.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ways.map((w) => (
              <PathwayCard key={w.eyebrow} {...w} />
            ))}
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <section className="py-28 md:py-36">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">The story behind The Space Between</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              It is not simply about transition. It is about what becomes
              possible within the space.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              The Space Between grew from my own experience of navigating
              identity, belonging, change and the tension between different
              worlds. Over time, I realised that the quality of the environment
              around us can change how we experience uncertainty.
            </p>
            <p>
              When a space is held with care, people do not have to rush,
              perform or leave parts of themselves behind. They can be honest,
              examine what is difficult and see themselves and the situation
              more clearly.
            </p>
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              The value is not the in-between moment itself. It is the clarity,
              trust, connection and movement that can emerge when that space is
              held well.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-foreground"
              >
                Read more about Helena and the work <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="surface-ink py-24 md:py-32">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow" style={{ color: "var(--rose)" }}>Begin</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl">
            Start with a conversation.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/75">
            Whether you're leading an organisation through change or trying to
            understand what comes next in your own life, we can begin by talking
            about where you are, what feels difficult and what you need.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-cream px-6 py-3 text-sm text-ink transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function OutcomeCard({
  eyebrow,
  title,
  outcomes,
}: {
  eyebrow: string;
  title: string;
  outcomes: string[];
}) {
  return (
    <div className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
      <p className="eyebrow text-terracotta">{eyebrow}</p>
      <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground md:text-3xl">
        {title}
      </h3>
      <ul className="mt-6 space-y-4 text-muted-foreground">
        {outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-3">
            <span className="mt-1 text-terracotta" aria-hidden>✓</span>
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PathwayCard({
  image,
  eyebrow,
  title,
  body,
  cta,
  to,
  tone,
}: {
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  to: "/organisations" | "/individuals" | "/experiences";
  tone: "clay" | "rose" | "sage";
}) {
  const toneColor = tone === "clay" ? "var(--terracotta)" : tone === "rose" ? "var(--rose)" : "var(--sage)";

  return (
    <Link
      to={to}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(60,30,15,0.25)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt=""
          width={1400}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p className="eyebrow" style={{ color: toneColor }}>
          {eyebrow}
        </p>
        <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground md:text-3xl">
          {title}
        </h3>
        <p className="mt-4 text-muted-foreground">{body}</p>
        <span className="mt-8 inline-flex items-center gap-2 text-sm text-foreground">
          {cta} <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
