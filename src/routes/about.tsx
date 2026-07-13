import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/helena-about.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A Bridge Between Worlds — The Space Between" },
      {
        name: "description",
        content:
          "Over a decade coaching, leading and supporting organisations through change. The founder of The Space Between on the work, the roots and the way she moves through it.",
      },
      { property: "og:title", content: "About — The Space Between" },
      {
        property: "og:description",
        content: "A bridge between corporate and human, strategic and emotional.",
      },
    ],
  }),
  component: About,
});

const credentials = [
  "Over 10 years in people development",
  "Coaching, managing and leading teams",
  "Supporting teams through organisational change",
  "Experience with redundancy processes",
  "Employee representative during a major redundancy",
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
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Corporate and human. Strategic and emotional. Professional and
              personal. Grounded and creative.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden rounded-[2rem]">
              <img
                src={aboutImg}
                alt="Warm layered horizon lines in clay and sand"
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
              My work sits at the meeting point between the professional and
              the deeply human. I am often the person people open up to. Not
              because I force it, but because I create spaces where people feel
              seen, heard and understood.
            </p>
            <p>
              Over time, I realised I was not only teaching leadership or
              supporting change. I was helping people come home to themselves —
              to the parts they had adapted or quietened in order to belong.
            </p>
            <p>
              As someone who is mixed race and has often lived between
              different worlds, I understand the complexity of belonging. I know
              what it can feel like to sit between cultures, identities,
              expectations and versions of yourself, wondering where you truly
              fit.
            </p>
            <p>
              What I have learned is that belonging does not always come from
              choosing one side or becoming easier for others to understand. It
              can come from honouring the whole of who you are — the strength
              and the softness, the clarity and the uncertainty, the joy and the
              weight.
            </p>
            <p>
              The Space Between was created from that place. It is a home for
              the conversations, coaching, movement, reflection and human
              connection that help people feel less fragmented and more fully
              themselves.
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
              I work in an emergent way. I am curious about people, places,
              organisations and systems. I bring creativity, playfulness and
              body-based awareness into the work where it helps.
            </p>
            <p>
              I do not believe transformation only happens through talking. It
              can happen through movement, laughter, quiet, creativity, honest
              reflection and the moment someone feels able to say what is true.
            </p>
            <p>
              I can speak with senior leaders, professionals, junior employees
              and people from all walks of life. Trust tends to form quickly —
              because I meet people as they are, not as I think they should be.
            </p>
            <p>
              This is the heart of The Space Between: a space where you do not
              have to perform, shrink yourself or choose between different parts
              of who you are. A space to explore, reconnect, move, reflect and
              belong — exactly as you are.
            </p>
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
