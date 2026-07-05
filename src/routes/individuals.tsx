import { createFileRoute, Link } from "@tanstack/react-router";
import indImg from "@/assets/individuals-visual.jpg";

export const Route = createFileRoute("/individuals")({
  head: () => ({
    meta: [
      { title: "Coaching for People Between Worlds — The Space Between" },
      {
        name: "description",
        content:
          "Coaching and reflective support for people navigating identity, belonging, mixed heritage, neurodivergence, career change and the feeling of being between worlds.",
      },
      { property: "og:title", content: "For Individuals — The Space Between" },
      {
        property: "og:description",
        content:
          "For people finding their way home to themselves.",
      },
    ],
  }),
  component: Individuals,
});

const themes = [
  "Identity",
  "Belonging",
  "Mixed heritage",
  "Neurodivergence",
  "Career and life transition",
  "Confidence",
  "Self-trust",
  "Feeling between worlds",
  "Coming home to yourself",
  "Body-based and somatic reflection",
  "Playfulness, creativity and curiosity",
];

function Individuals() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "color-mix(in oklab, var(--rose) 22%, var(--cream))" }}>
        <div className="container-prose grid gap-10 pb-20 pt-16 md:grid-cols-12 md:pb-28 md:pt-24">
          <div className="md:col-span-7">
            <p className="eyebrow" style={{ color: "var(--terracotta)" }}>For individuals</p>
            <h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-6xl">
              For people finding their way{" "}
              <span className="italic">home to themselves.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Coaching and reflective support for people navigating identity,
              belonging, transition and the feeling of being between worlds.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enquire about coaching
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img
                src={indImg}
                alt="Soft rolling hills at dawn in warm rose and clay tones"
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
      <section className="py-24 md:py-32">
        <div className="container-prose max-w-3xl space-y-6">
          <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
            This work is for people who feel they are living between different
            identities, cultures, roles, expectations or versions of themselves.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            It may speak to people who are mixed race, neurodivergent,
            navigating career change, moving between corporate and spiritual
            worlds, questioning where they belong, or trying to reconnect with
            their own voice.
          </p>
        </div>
      </section>

      {/* THEMES */}
      <section className="py-16 md:py-20" style={{ background: "color-mix(in oklab, var(--sage) 14%, var(--cream))" }}>
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
      <section className="py-24 md:py-32">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Approach</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Emergent, honest, human.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              My coaching style is emergent, honest and human. I do not arrive
              with a rigid formula or tell you who to become. I listen deeply,
              reflect what I notice, help you understand what is alive in you,
              and support you to find your own next step.
            </p>
            <p>
              The work can include conversation, reflection, creative
              exercises, body-based awareness, and playful exploration —
              whatever helps you meet yourself more clearly.
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
            You don't need a clear question to begin. Just a sense that
            something wants to shift.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Enquire about coaching
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
