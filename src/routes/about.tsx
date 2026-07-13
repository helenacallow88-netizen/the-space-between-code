import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImage from "@/assets/helena-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Helena — The Space Between" },
      {
        name: "description",
        content:
          "Meet Helena, founder of The Space Between: a trusted thought partner, facilitator and one-to-one coach helping people and organisations navigate change, identity and belonging.",
      },
      { property: "og:title", content: "About Helena — The Space Between" },
      {
        property: "og:description",
        content:
          "A calm presence, thoughtful challenger and trusted guide through uncertainty — for people and organisations navigating change.",
      },
    ],
  }),
  component: About,
});

const credentials = [
  "Over 10 years in people development",
  "Years of one-to-one coaching and reflective support",
  "Coaching, managing and leading teams",
  "Supporting teams through organisational change",
  "Experience with redundancy processes",
  "Employee representative during a major redundancy",
  "EDI champion and founder of a people of colour network",
  "Trusted by senior leaders and frontline employees alike",
];

function About() {
  return (
    <>
      {/* HERO */}
      <section className="surface-warm">
        <div className="container-prose grid gap-10 pb-20 pt-16 md:grid-cols-12 md:pb-28 md:pt-24">
          <div className="md:col-span-7">
            <p className="eyebrow">About</p>
            <h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-6xl">
              A bridge between{" "}
              <span className="italic text-terracotta">worlds.</span>
            </h1>
            <div className="mt-6 max-w-xl space-y-1.5 font-serif text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>A calm presence.</p>
              <p>A thoughtful challenger.</p>
              <p>A trusted guide through uncertainty.</p>
              <p>Helping people feel seen, heard and able to move forward.</p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden rounded-[2rem]">
              <img
                src={aboutAsset.url}
                alt="Portrait of Helena, founder of The Space Between"
                width={1200}
                height={1400}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-24 md:py-32">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              I have spent more than 10 years working with people — coaching,
              managing, leading teams and supporting organisations through
              change.
            </p>
            <p>
              My work sits at the meeting point between the professional and the
              deeply human. I am often the person people open up to. Not because I
              force it, but because I create spaces where people feel seen, heard
              and understood.
            </p>
            <p>
              In organisations, that might mean becoming a trusted thought partner
              to a CEO, helping a leadership team hear what employees are really
              experiencing, or holding honest conversations during a difficult
              period of change.
            </p>
            <p>
              One-to-one, it means offering a reflective space for someone
              navigating a career transition, questioning who they are becoming,
              rebuilding confidence or trying to understand what they need next.
              I do not arrive with all the answers. I listen closely, reflect what
              I notice and help people hear themselves more clearly.
            </p>
            <p>
              Over time, I realised I was not only teaching leadership or
              supporting change. I was helping people come home to themselves — to
              the parts they had adapted, hidden or quietened in order to belong.
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-[1.5rem] border border-border bg-card p-8">
              <p className="eyebrow">Experience</p>
              <ul className="mt-6 space-y-4">
                {credentials.map((c) => (
                  <li key={c} className="flex gap-3 text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* LIVED EXPERIENCE */}
      <section className="surface-clay py-24 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Belonging</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              The roots of this work are personal.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              As a mixed-race woman, I have spent much of my life navigating the
              space between cultures, identities and expectations. I understand
              what it can feel like to be difficult to place, to move between
              different worlds, or to wonder which parts of yourself are welcome
              in a room.
            </p>
            <p>
              That lived experience shapes how I work with everyone, and it gives
              me a particular commitment to people of colour and others from
              underrepresented groups who have felt unseen, underestimated or
              required to fragment themselves in order to belong.
            </p>
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
              I believe belonging does not ask us to choose one side. It makes room
              for the whole of who we are.
            </p>
            <p>
              The Space Between was created from that place: a home for the
              conversations, coaching, reflection, movement and human connection
              that help people feel less fragmented and more fully themselves.
            </p>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="surface-sage py-24">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">How I work</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              Emergent, curious, real.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Whether I am working with an individual, a CEO or a whole team, I
              begin with listening. I am curious about people, places,
              organisations and systems, and I bring creativity, playfulness and
              body-based awareness into the work where it helps.
            </p>
            <p>
              I do not believe transformation only happens through talking. It can
              happen through movement, laughter, quiet, creativity, honest
              reflection and the moment someone feels able to say what is true.
            </p>
            <p>
              I can speak with senior leaders, professionals, junior employees and
              people from all walks of life. Trust tends to form quickly because I
              meet people as they are, not as I think they should be.
            </p>
            <p>
              This is the heart of The Space Between: a space where you do not have
              to perform, shrink yourself or choose between different parts of who
              you are. A space to explore, reconnect, move, reflect and belong —
              exactly as you are.
            </p>
          </div>
        </div>
      </section>

      {/* WAYS TO WORK TOGETHER */}
      <section className="py-24 md:py-28">
        <div className="container-prose">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow">Ways to work together</p>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">
              The same approach, shaped for different contexts.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="/organisations"
              className="group rounded-[1.5rem] border border-border bg-card p-8 transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(60,30,15,0.25)]"
            >
              <p className="eyebrow">For leaders & organisations</p>
              <h3 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
                People-centred change, leadership and thought partnership.
              </h3>
              <p className="mt-4 text-muted-foreground">
                Support for leaders and teams navigating change, culture,
                belonging and complex people dynamics.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-foreground">
                Explore organisational work <span aria-hidden>→</span>
              </span>
            </Link>
            <Link
              to="/individuals"
              className="group rounded-[1.5rem] border border-border bg-card p-8 transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(60,30,15,0.25)]"
            >
              <p className="eyebrow">For individuals</p>
              <h3 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
                One-to-one space for change, identity and becoming.
              </h3>
              <p className="mt-4 text-muted-foreground">
                Reflective support for people navigating transitions, confidence,
                purpose, belonging or the question of what comes next.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm text-foreground">
                Explore one-to-one work <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="container-prose flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-border p-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Let's find the shape of what you need.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every conversation starts simply — with listening.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground"
            >
              Book a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
