import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-threshold.jpg";
import orgImg from "@/assets/organizations-visual.jpg";
import indImg from "@/assets/individuals-visual.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Space Between — Navigating Change with Clarity, Compassion and Courage" },
      {
        name: "description",
        content:
          "The Space Between helps people and organisations navigate the moments between where they have been and where they are becoming — with clarity, compassion and courage.",
      },
      { property: "og:title", content: "The Space Between" },
      {
        property: "og:description",
        content:
          "A place for the honest conversations, thoughtful leadership and human connection that make meaningful change possible.",
      },
    ],
  }),
  component: Home,
});

const betweens = [
  "Between certainty and uncertainty.",
  "Between who we've been and who we're becoming.",
  "Between endings and beginnings.",
  "Between leadership intention and employee experience.",
  "Between identities.",
  "Between cultures.",
  "Between possibility and action.",
];

const experiences = [
  "Executive Coaching",
  "Leadership Development",
  "Organisational Change",
  "People Strategy for Start-ups",
  "Facilitation",
  "Speaking",
  "Workshops",
  "Retreats",
  "Community Experiences",
  "Listening Spaces",
  "Discovery Conversations",
  "Event Hosting & MC",
  "Panel Moderation",
  "Circle Facilitation",
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
              We all find ourselves in the{" "}
              <span className="italic text-terracotta">space between.</span>
            </h1>
            <div className="mt-10 max-w-xl space-y-1.5 font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
              {betweens.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </div>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              The Space Between exists to help people and organisations navigate
              these moments with clarity, compassion and courage.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore how we work
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

      {/* PHILOSOPHY */}
      <section className="py-28 md:py-36">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Philosophy</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              The Space Between is often uncomfortable.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              It's where identities shift. Where organisations evolve. Where
              careers change. Where relationships transform. Where leadership
              is tested.
            </p>
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              Yet it is also where growth happens.
            </p>
            <p>
              This isn't a place to rush through. It's a place to understand.
            </p>
            <p>
              Because when we make space for honest conversations, thoughtful
              leadership and genuine human connection, change becomes something
              people move through together — rather than something that happens
              to them.
            </p>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR PATH */}
      <section className="surface-clay py-24 md:py-32">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">Choose your path</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Where would you like to begin?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <PathwayCard
              image={orgImg}
              eyebrow="For organisations"
              title="Helping organisations move through change without leaving their people behind."
              body="I partner with mission-led organisations to navigate change while keeping people, values and trust at the centre. Through executive coaching, leadership development, facilitation and listening spaces, I bridge the gap between leadership intention and employee experience."
              cta="Explore organisational work"
              to="/organisations"
              tone="clay"
            />
            <PathwayCard
              image={indImg}
              eyebrow="For individuals"
              title="Helping people navigate life's transitions with greater clarity and confidence."
              body="Whether you're questioning your career, identity, relationships or next chapter, I create reflective spaces that help you reconnect with yourself and move forward with intention."
              cta="Explore individual work"
              to="/individuals"
              tone="rose"
            />
          </div>
        </div>
      </section>

      {/* WHY HELENA */}
      <section className="py-28 md:py-36">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Why Helena</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              A rare ability to help people feel deeply seen.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Helena combines over a decade of leadership development
              experience with a rare ability to help people feel deeply seen.
            </p>
            <p>
              She creates environments where people think more clearly, have
              braver conversations and discover perspectives they couldn't
              reach alone.
            </p>
            <p>
              Whether working with a CEO, a leadership team or someone
              navigating a personal crossroads, her work is grounded in
              curiosity, compassion and meaningful challenge.
            </p>
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              The Space Between isn't about having the answers. It's about
              creating the conditions where better questions, deeper
              conversations and meaningful change can emerge.
            </p>
          </div>
        </div>
      </section>

      {/* WAYS TO EXPERIENCE */}
      <section className="surface-sage py-24 md:py-28">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">Ways to experience The Space Between</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Many shapes. One intention.
            </h2>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-[1.5rem] border border-foreground/15 bg-foreground/10 sm:grid-cols-2 md:grid-cols-3">
            {experiences.map((e) => (
              <li key={e} className="bg-cream/80 p-6 font-serif text-lg text-foreground">
                {e}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-terracotta"
            >
              Explore experiences <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="surface-ink py-24 md:py-32">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow" style={{ color: "var(--rose)" }}>Begin</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl">
            Start with a discovery conversation.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/75">
            Whether you're leading an organisation through change or navigating
            your own transition, the first step is simple — a quiet conversation
            to understand where you are and what may be needed.
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
  to: "/organisations" | "/individuals";
  tone: "clay" | "rose";
}) {
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
        <p className="eyebrow" style={{ color: tone === "clay" ? "var(--terracotta)" : "var(--rose)" }}>
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
