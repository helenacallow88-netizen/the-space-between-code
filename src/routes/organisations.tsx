import { createFileRoute, Link } from "@tanstack/react-router";
import orgImg from "@/assets/organizations-visual.jpg";

export const Route = createFileRoute("/organisations")({
  head: () => ({
    meta: [
      { title: "People-Centred Change Facilitation for Organisations — The Space Between" },
      {
        name: "description",
        content:
          "Support for mission-led organisations navigating restructuring, redundancy, cultural shifts and transition. Landscape conversations, listening spaces, facilitation and communication support.",
      },
      { property: "og:title", content: "For Organisations — The Space Between" },
      {
        property: "og:description",
        content:
          "Bridging the gap between leadership intention and employee experience during periods of change.",
      },
    ],
  }),
  component: Organisations,
});

const situations = [
  "Redundancy processes",
  "Restructuring",
  "Department mergers",
  "Leadership and employee disconnect",
  "Low morale during change",
  "Fear, anger or uncertainty in teams",
  "Values and culture feeling misaligned",
  "Communication breakdown",
  "Teams needing a safe space to process change",
  "Public sector or mission-led organisations managing complex people dynamics",
];

const services = [
  {
    n: "01",
    title: "Landscape conversation",
    body: "Every engagement begins here. A space to understand where the organisation is now, what has led to this moment, what people are experiencing on the ground, what leadership is hoping for, and what kind of culture the organisation wants to protect, repair or rebuild through the change.",
  },
  {
    n: "02",
    title: "Listening spaces",
    body: "Structured group spaces for employees to share concerns, questions, fears, frustrations and hopes in a safe and constructive way.",
  },
  {
    n: "03",
    title: "Leadership feedback and reflection",
    body: "Bringing employee experience back to leadership in a clear, useful and constructive way, so leaders can respond with greater awareness and care.",
  },
  {
    n: "04",
    title: "Communication support",
    body: "Helping leadership communicate in language people can actually hear, understand and trust.",
  },
  {
    n: "05",
    title: "Group workshops",
    body: "Facilitated workshops to support reflection, reconnection, trust, motivation, values and next steps.",
  },
  {
    n: "06",
    title: "One-to-one support",
    body: "Optional individual sessions for employees or leaders who need deeper support during transition.",
  },
];

const steps = [
  "Understand the context",
  "Listen to the people",
  "Translate between leadership and employees",
  "Support clearer communication",
  "Facilitate movement forward",
  "Offer follow-up support where needed",
];

function Organisations() {
  return (
    <>
      {/* HERO */}
      <section className="surface-warm">
        <div className="container-prose grid gap-10 pb-20 pt-16 md:grid-cols-12 md:pb-28 md:pt-24">
          <div className="md:col-span-7">
            <p className="eyebrow">For organisations</p>
            <h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-6xl">
              People-Centred Change Facilitation
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              For organisations navigating the space between what was and what
              comes next.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a discovery call
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img
                src={orgImg}
                alt="An abstract archway opening onto a warm horizon"
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
        <div className="container-prose max-w-3xl">
          <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
            I help mission-led organisations move through change in a way that
            keeps people, values and trust at the centre.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Through discovery calls, listening spaces, facilitation and
            one-to-one support, I bridge the gap between leadership intention
            and employee experience.
          </p>
        </div>
      </section>

      {/* WHEN TO BRING ME IN */}
      <section className="surface-sage py-24">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Situations</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              When to bring me in
            </h2>
          </div>
          <ul className="md:col-span-8 md:columns-2 md:gap-10">
            {situations.map((s) => (
              <li key={s} className="mb-4 break-inside-avoid border-t border-foreground/15 pt-3 font-serif text-lg text-foreground">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">Support</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              How I support organisations
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border md:grid-cols-2">
            {services.map((s) => (
              <article key={s.n} className="bg-card p-8 md:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-sm text-terracotta">{s.n}</span>
                  <h3 className="font-serif text-2xl text-foreground">{s.title}</h3>
                </div>
                <p className="mt-4 text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="surface-clay py-24 md:py-28">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow">Process</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              A bespoke process shaped around your organisation
            </h2>
          </div>
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s} className="rounded-2xl bg-cream/70 p-6">
                <span className="font-serif text-xs text-terracotta">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-serif text-xl text-foreground">{s}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-3xl text-muted-foreground">
            All organisational work is bespoke. Packages are designed following
            an initial discovery call, based on the size, context and
            needs of the organisation.
          </p>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-24 md:py-32">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Case study</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Experience from the inside
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              In a previous organisation, I acted as an employee representative
              during a major redundancy process.
            </p>
            <p>
              I supported people who were at risk, including members of my own
              team, through a period of fear, anger, uncertainty and
              frustration. I held regular spaces for employees to share what
              they were experiencing, gathered their questions and concerns,
              and brought these back to senior leadership in a constructive
              and useful way.
            </p>
            <p>
              I met with leadership weekly, helped them understand the
              emotional reality on the ground, and translated their responses
              back to employees in language that felt clearer, calmer and more
              human.
            </p>
            <p className="font-serif text-2xl text-foreground">
              This experience shaped the work I do now: bridging the gap
              between leadership intention and employee experience during
              moments of change.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-ink py-24 md:py-32">
        <div className="container-prose max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl">
            Start with a discovery call.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/75">
            If your organisation is moving through change and you want to
            understand the people impact more clearly, book a discovery
            call.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-cream px-6 py-3 text-sm text-ink transition-opacity hover:opacity-90"
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
