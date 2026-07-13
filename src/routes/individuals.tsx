import { createFileRoute, Link } from "@tanstack/react-router";
import individualsImage from "@/assets/individuals-hero.jpg";

export const Route = createFileRoute("/individuals")({
  head: () => ({
    meta: [
      { title: "For Individuals — Navigating Life's Transitions — The Space Between" },
      {
        name: "description",
        content:
          "Reflective coaching and one-to-one support for people navigating career transitions, identity, belonging, relationships, purpose and change.",
      },
      { property: "og:title", content: "For Individuals — The Space Between" },
      {
        property: "og:description",
        content:
          "Helping people navigate the moments that shape us.",
      },
    ],
  }),
  component: Individuals,
});

const themes = [
  "Career transitions",
  "Identity",
  "Belonging",
  "Relationships",
  "Purpose",
  "Confidence",
  "Change",
];

function Individuals() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "color-mix(in oklab, var(--rose) 22%, var(--cream))" }}>
        <div className="container-prose grid gap-10 pb-24 pt-20 md:grid-cols-12 md:pb-32 md:pt-28">
          <div className="md:col-span-7">
            <p className="eyebrow" style={{ color: "var(--terracotta)" }}>For individuals</p>
            <h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-6xl">
              Helping people navigate the{" "}
              <span className="italic">moments that shape us.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              For anyone standing at a threshold — questioning what's next,
              who they are becoming, or what they need to move forward.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Begin a conversation
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img
                src={indImgAsset.url}
                alt="Portrait of a woman seated in quiet reflection among rocks"
                width={1400}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OPENING */}
      <section className="py-28 md:py-32">
        <div className="container-prose max-w-3xl space-y-6">
          <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
            Together we'll explore what's happening beneath the surface — so you
            can move forward feeling more connected to yourself.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            This isn't a formula or a fix. It's a considered, reflective space
            for the questions that matter — the ones that shape how you live,
            lead, love and choose what comes next.
          </p>
        </div>
      </section>

      {/* THEMES */}
      <section className="py-20 md:py-24" style={{ background: "color-mix(in oklab, var(--sage) 14%, var(--cream))" }}>
        <div className="container-prose">
          <p className="eyebrow">What we might explore</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {themes.map((t) => (
              <li
                key={t}
                className="rounded-full border border-foreground/15 bg-cream/60 px-5 py-2 font-serif text-base text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-28 md:py-32">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Approach</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Emergent, honest, deeply human.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I don't arrive with a rigid method or tell you who to become. I
              listen closely, reflect what I notice, and help you make sense of
              what's alive in you right now.
            </p>
            <p>
              The work can include conversation, reflection, creative
              exercises, body-based awareness and playful exploration — whatever
              helps you meet yourself more clearly.
            </p>
            <p className="font-serif text-xl leading-snug text-foreground md:text-2xl">
              You don't need a clear question to begin. Just a sense that
              something wants to shift.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24" style={{ background: "color-mix(in oklab, var(--rose) 30%, var(--cream))" }}>
        <div className="container-prose max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
            Curious?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            The first conversation is a place to simply be met — with warmth,
            attention and no expectation of where it might lead.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Begin a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
