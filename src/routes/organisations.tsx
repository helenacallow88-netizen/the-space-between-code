import { createFileRoute, Link } from "@tanstack/react-router";
import orgImg from "@/assets/organizations-visual.jpg";

export const Route = createFileRoute("/organisations")({
  head: () => ({
    meta: [
      { title: "For Leaders & Organisations — People-Centred Change — The Space Between" },
      {
        name: "description",
        content:
          "Executive thought partnership, leadership development, facilitation and listening spaces for leaders and mission-led organisations navigating change.",
      },
      { property: "og:title", content: "For Leaders & Organisations — The Space Between" },
      {
        property: "og:description",
        content:
          "Helping organisations move through change without losing the trust of their people.",
      },
    ],
  }),
  component: Organisations,
});

const situations = [
  "Restructuring and redundancy",
  "Department mergers and reorganisation",
  "Cultural or values misalignment",
  "Leadership and employee disconnect",
  "Low morale during periods of change",
  "Fear, anger or uncertainty in teams",
  "Communication breakdown",
  "Teams needing a safe space to process change",
  "Public sector and mission-led organisations navigating complex people dynamics",
];

const people = [
  "CEOs and founders",
  "Executive teams",
  "Senior leaders",
  "People & Culture teams",
  "Mission-led organisations",
  "Public sector organisations",
  "Social enterprises",
  "Growing start-ups",
];

const services = [
  { n: "01", title: "Executive Thought Partnership", body: "A confidential space for founders, CEOs and senior leaders to think more clearly through complexity, challenge assumptions and stay connected to the human experience of leading others." },
  { n: "02", title: "Leadership Development", body: "Building the reflective, human capabilities leaders need to lead through complexity rather than around it." },
  { n: "03", title: "People Strategy for Start-ups", body: "Helping early-stage organisations build the culture, clarity and people practices they'll want to be proud of later." },
  { n: "04", title: "Facilitation", body: "Structured spaces for honest conversation, alignment and decision-making — from leadership offsites to whole-team gatherings." },
  { n: "05", title: "Discovery Conversations", body: "The starting point of every engagement. A grounded space to understand context, needs and what may truly help." },
  { n: "06", title: "Organisational Listening", body: "Structured listening spaces that surface what people are experiencing — and translate it back to leadership with care." },
  { n: "07", title: "Speaking", body: "Talks on people-centred change, leadership, belonging and the human experience of transformation." },
  { n: "08", title: "Workshop Design & Delivery", body: "Bespoke workshops for reflection, reconnection, trust, values and clearer next steps." },
  { n: "09", title: "Team Development", body: "Supporting teams to strengthen trust, understanding and the way they work together — especially through change." },
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
        <div className="container-prose grid gap-10 pb-24 pt-20 md:grid-cols-12 md:pb-32 md:pt-28">
          <div className="md:col-span-7">
            <p className="eyebrow">For leaders & organisations</p>
            <h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-6xl">
              Helping organisations move through change{" "}
              <span className="italic text-terracotta">without losing the trust of their people.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              People-centred change and trusted thought partnership for leaders
              and mission-led organisations navigating the space between what
              was and what comes next.
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
      <section className="py-28 md:py-36">
        <div className="container-prose max-w-3xl">
          <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
            I partner with leaders and mission-led organisations to navigate
            change in a way that keeps people, values and trust at the centre.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Through executive thought partnership, listening spaces,
            facilitation, leadership development and one-to-one support, I help
            leaders understand the human experience of change — bridging the gap
            between leadership intention and employee experience.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Whether I'm working alongside a founder, CEO, executive team, line
            manager or the people experiencing change day to day, my role is the
            same: to create the conditions for clearer thinking, more honest
            conversations and change that people can genuinely move through
            together.
          </p>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section className="surface-clay py-24 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Who I work with</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Support for the people holding change.
            </h2>
          </div>
          <ul className="md:col-span-8 grid gap-px overflow-hidden rounded-[1.5rem] border border-foreground/15 bg-foreground/10 sm:grid-cols-2">
            {people.map((p) => (
              <li key={p} className="bg-cream/80 p-6 font-serif text-lg text-foreground">
                {p}
              </li>
            ))}
          </ul>
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
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              How I support leaders and organisations
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
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

      {/* EXPERIENCE */}
      <section className="surface-warm py-24 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Experience</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Experience from inside change
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              This work is grounded in lived experience.
            </p>
            <p>
              As an employee representative during a major organisational
              redundancy process, Helena supported colleagues through
              uncertainty, gathered employee concerns, and worked closely with
              senior leaders to bridge the gap between what people were
              experiencing and how change was being led.
            </p>
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              This experience continues to shape her approach today.
            </p>
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
            All organisational work is bespoke. Packages are designed
            following an initial discovery call, based on the size, context
            and needs of the organisation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-ink py-24 md:py-32">
        <div className="container-prose max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl">
            Start with a discovery call.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/75">
            If you're leading through change and want to understand the people
            impact more clearly, book a discovery call.
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
