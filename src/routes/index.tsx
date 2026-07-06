import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-threshold.jpg";
import orgImg from "@/assets/organizations-visual.jpg";
import indImg from "@/assets/individuals-visual.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Space Between — People-Centred Change Facilitation" },
      {
        name: "description",
        content:
          "Helping mission-led organisations move through change without leaving their people behind. People-centred change facilitation, listening spaces and coaching.",
      },
      { property: "og:title", content: "The Space Between" },
      {
        property: "og:description",
        content:
          "Bridging the gap between leadership intention and employee experience.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="surface-warm relative overflow-hidden">
        <div className="container-prose grid gap-12 pb-20 pt-16 md:grid-cols-12 md:gap-10 md:pb-28 md:pt-24">
          <div className="md:col-span-7 md:pr-6">
            <p className="eyebrow">The Space Between</p>
            <h1 className="mt-6 text-balance text-4xl leading-[1.05] text-foreground md:text-6xl">
              Helping organisations move through change{" "}
              <span className="italic text-terracotta">without leaving their people behind.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              People-centred change facilitation for mission-led organisations
              navigating restructuring, redundancy, cultural shifts and
              transition.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a landscape conversation
              </Link>
              <Link
                to="/individuals"
                className="inline-flex items-center rounded-full border border-foreground/25 px-6 py-3 text-sm text-foreground transition-colors hover:border-foreground/60"
              >
                Explore individual support
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

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container-prose grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">The concept</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              The Space Between
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              The Space Between is the place between what was and what comes next.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              It is where people and organisations can feel uncertain,
              disconnected, or unsure how to move forward. It is also where
              reconnection becomes possible — to values, trust, motivation,
              voice, and direction.
            </p>
          </div>
        </div>
      </section>

      {/* KEY MESSAGE */}
      <section className="surface-clay py-20 md:py-24">
        <div className="container-prose text-center">
          <p className="eyebrow">The work</p>
          <p className="mx-auto mt-6 max-w-3xl font-serif text-3xl leading-tight text-foreground md:text-5xl">
            Bridging the gap between{" "}
            <span className="italic">leadership intention</span> and{" "}
            <span className="italic">employee experience.</span>
          </p>
        </div>
      </section>

      {/* TWO PATHWAYS */}
      <section className="py-24 md:py-32">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">Two pathways</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Where would you like to begin?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <PathwayCard
              image={orgImg}
              eyebrow="For organisations"
              title="Move through change without losing the people at the centre of it."
              body="For organisations navigating restructuring, redundancy, department changes, cultural tension, communication breakdown, or uncertainty."
              cta="Organisational support"
              to="/organisations"
              tone="clay"
            />
            <PathwayCard
              image={indImg}
              eyebrow="For individuals"
              title="Find your way home to yourself."
              body="For individuals navigating identity, belonging, transition, mixed heritage, neurodivergence, career change, or the feeling of being between worlds."
              cta="Individual coaching"
              to="/individuals"
              tone="rose"
            />
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="surface-sage py-24 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Approach</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Space for what is actually happening.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              My work creates space for people to be heard, for leaders to
              understand what is really happening beneath the surface, and for
              change to happen with more clarity, trust and care.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
              {[
                "People-centred",
                "Grounded",
                "Emotionally intelligent",
                "Practical",
                "Emergent",
                "Honest",
                "Reflective",
                "Creative",
                "Values-led",
              ].map((v) => (
                <li key={v} className="border-t border-foreground/15 pt-3">
                  <span className="font-serif text-lg text-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CASE STUDY PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-prose grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Experience</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              From inside a redundancy process.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              In a previous organisation, I acted as an employee representative
              during a major redundancy process, supporting people at risk,
              gathering concerns from employees, and meeting weekly with senior
              leadership to help bridge the gap between what people were
              experiencing and how leadership responded.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm text-terracotta hover:underline"
            >
              Read more about my approach
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="surface-ink py-24 md:py-32">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow" style={{ color: "var(--rose)" }}>Begin</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl">
            Navigating change in your organisation?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/75">
            Start with a landscape conversation — a grounded first step to
            understand where your organisation is now, what people are
            experiencing, and what kind of support may be needed.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-cream px-6 py-3 text-sm text-ink transition-opacity hover:opacity-90"
            >
              Book a landscape conversation
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
