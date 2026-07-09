import { createFileRoute, Link } from "@tanstack/react-router";
import expImg from "@/assets/experiences-visual.jpg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Retreats, Workshops & Community — The Space Between" },
      {
        name: "description",
        content:
          "Retreats, workshops, listening circles and community experiences that make space for reflection, reconnection and honest conversation.",
      },
      { property: "og:title", content: "Experiences — The Space Between" },
      {
        property: "og:description",
        content:
          "Gatherings, workshops and rituals for people who want to slow down and think together.",
      },
    ],
  }),
  component: Experiences,
});

const offerings = [
  { title: "Retreats", body: "Immersive gatherings designed to help people step out of their usual rhythm and reconnect — with themselves, others and what matters." },
  { title: "Workshops", body: "Considered spaces for reflection, honest conversation and shared inquiry — for teams, communities or curated groups." },
  { title: "Community Events", body: "Intimate gatherings for people navigating similar thresholds — identity, transition, leadership, belonging." },
  { title: "Panel Hosting & MC", body: "Warm, thoughtful hosting for events, panels and public conversations that need depth as well as ease." },
  { title: "Circle Facilitation", body: "Held, structured spaces for groups to speak and listen with more care than everyday conversation allows." },
  { title: "Movement Experiences", body: "Body-based sessions that let people process, reflect and reconnect through movement rather than words alone." },
  { title: "Listening Spaces", body: "Facilitated conversations where people can share what they're actually carrying — and be met, not fixed." },
  { title: "Future Festivals", body: "Larger, seasonal gatherings in development — bringing together the many strands of The Space Between community." },
];

function Experiences() {
  return (
    <>
      {/* HERO */}
      <section className="surface-warm">
        <div className="container-prose grid gap-10 pb-24 pt-20 md:grid-cols-12 md:pb-32 md:pt-28">
          <div className="md:col-span-7">
            <p className="eyebrow">Experiences</p>
            <h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-6xl">
              Gatherings, workshops and{" "}
              <span className="italic text-terracotta">rituals of reflection.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Curated spaces to slow down, think together and reconnect —
              designed for people and communities who want conversation with
              more depth, and change with more care.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enquire about an experience
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img
                src={expImg}
                alt="Soft watercolour horizon in warm cream, terracotta and dusty rose"
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
            Some of the most meaningful change happens in rooms where people
            feel able to be honest, and quiet enough to actually think.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Experiences under The Space Between are designed with that in
            mind — held with care, paced with intention, and shaped around the
            people in the room.
          </p>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="surface-sage py-24 md:py-28">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">Ways to gather</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Formats and offerings
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-foreground/15 bg-foreground/10 md:grid-cols-2">
            {offerings.map((o) => (
              <article key={o.title} className="bg-cream/85 p-8 md:p-10">
                <h3 className="font-serif text-2xl text-foreground">{o.title}</h3>
                <p className="mt-3 text-muted-foreground">{o.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-prose flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-border p-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Curating something? Let's talk.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Whether you're planning a retreat, a leadership offsite, a
              community event or a public conversation — I'd love to hear what
              you're imagining.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground"
            >
              Begin a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
