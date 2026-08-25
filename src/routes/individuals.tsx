import { createFileRoute, Link } from "@tanstack/react-router";
import individualsImage from "@/assets/individuals-hero.jpg";

export const Route = createFileRoute("/individuals")({
  head: () => ({
    meta: [
      { title: "Coaching — The Space Between" },
      { name: "description", content: "ICF-aligned personal performance coaching and body-oriented coaching for leaders, founders and individuals navigating growth, confidence, career, identity and change." },
      { property: "og:title", content: "Coaching — The Space Between" },
      { property: "og:description", content: "Coaching for the human behind the role, decision or transition." },
    ],
  }),
  component: Individuals,
});

const themes = ["Leadership", "Confidence", "Career", "Identity", "Belonging", "Relationships", "Purpose", "Change"];

function Individuals() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "color-mix(in oklab, var(--rose) 22%, var(--cream))" }}>
        <div className="container-prose grid gap-10 pb-24 pt-20 md:grid-cols-12 md:pb-32 md:pt-28">
          <div className="md:col-span-7">
            <p className="eyebrow" style={{ color: "var(--terracotta)" }}>Coaching</p>
            <h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-6xl">
              Coaching for the human <span className="italic">behind the role, decision or transition.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I coach leaders, founders and individuals who want space to think, understand themselves more deeply and make choices that actually feel like their own.
            </p>
            <div className="mt-10"><Link to="/contact" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90">Explore coaching</Link></div>
          </div>
          <div className="md:col-span-5"><div className="aspect-[4/5] overflow-hidden rounded-[2rem]"><img src={individualsImage} alt="Portrait of a woman seated in quiet reflection among rocks" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" /></div></div>
        </div>
      </section>

      <section className="py-28 md:py-32"><div className="container-prose max-w-3xl space-y-6"><p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">You do not have to arrive with a perfectly formed goal. Sometimes the work starts with: “Something is not quite right, and I want to understand it.”</p><p className="text-lg leading-relaxed text-muted-foreground">My coaching is reflective, practical and embodied. We can work with the thinking mind, but we can also notice patterns, emotions and what your body is telling you — particularly when you already know the sensible answer and it still does not feel resolved.</p></div></section>

      <section className="py-20 md:py-24" style={{ background: "color-mix(in oklab, var(--sage) 14%, var(--cream))" }}><div className="container-prose"><p className="eyebrow">What we might work on</p><ul className="mt-8 flex flex-wrap gap-3">{themes.map((t) => <li key={t} className="rounded-full border border-foreground/15 bg-cream/60 px-5 py-2 font-serif text-base text-foreground">{t}</li>)}</ul></div></section>

      <section className="py-28 md:py-32"><div className="container-prose grid gap-12 md:grid-cols-12"><div className="md:col-span-4"><p className="eyebrow">For leaders & founders</p><h2 className="mt-4 text-3xl text-foreground md:text-4xl">You can be capable and still need somewhere to think.</h2></div><div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground"><p>Leadership can make it surprisingly easy to become disconnected from the human side of what is happening. I offer a confidential space to slow the situation down, challenge your assumptions, understand your impact and make clearer choices.</p><p>This is not about turning you into a textbook leader. It is about helping you lead in a way that is effective, self-aware and genuinely yours.</p></div></div></section>

      <section className="surface-clay py-24 md:py-28"><div className="container-prose grid gap-12 md:grid-cols-12"><div className="md:col-span-4"><p className="eyebrow">Training</p><h2 className="mt-4 text-3xl text-foreground md:text-4xl">Qualified, but never formulaic.</h2></div><div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground"><p>I hold a Level 5 Diploma in Personal Performance Coaching & NLP aligned with ICF standards, alongside accredited Level 2 Body-Oriented Coaching training with The Somatic School.</p><p>Those frameworks support the work, but the relationship comes first. I listen closely, reflect what I notice, use compassionate challenge and adapt the session to the person in front of me.</p></div></div></section>

      <section className="py-20 md:py-24" style={{ background: "color-mix(in oklab, var(--rose) 30%, var(--cream))" }}><div className="container-prose max-w-2xl text-center"><h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">Want to see if we click?</h2><p className="mt-6 text-lg text-muted-foreground">Start with a conversation. We can talk about what is happening, what you want from coaching and whether my style feels right for you.</p><div className="mt-8"><Link to="/contact" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90">Start a conversation</Link></div></div></section>
    </>
  );
}
