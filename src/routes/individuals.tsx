import { createFileRoute, Link } from "@tanstack/react-router";
import image from "@/assets/individuals-hero.jpg";

export const Route = createFileRoute("/individuals")({
  head: () => ({ meta: [
    { title: "Coaching — The Space Between" },
    { name: "description", content: "Personal, leadership and group coaching with Helena Callow. Reflective, practical and body-oriented coaching focused on present experience, meaningful choices and action." },
    { property: "og:title", content: "Coaching — The Space Between" },
  ] }),
  component: Coaching,
});

const themes = ["Confidence & self-awareness", "Career & life transitions", "Leadership", "Decision-making", "Relationships & communication", "Purpose & direction", "Boundaries", "Change"];
function Coaching() {
  return (
    <>
      <section className="surface-warm"><div className="container-prose grid gap-10 pb-20 pt-16 md:grid-cols-12 md:items-center md:pb-28 md:pt-24"><div className="md:col-span-7">
        <p className="eyebrow">Coaching</p><h1 className="mt-6 text-4xl md:text-6xl">Beyond the <span className="italic text-terracotta">conversation.</span></h1>
        <p className="mt-6 font-serif text-xl leading-relaxed md:text-2xl">Space to understand yourself, explore what's possible and move forward in a way that feels genuinely yours.</p>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">I offer one-to-one and group coaching for individuals, founders and leaders. My approach is thoughtful and practical, combining conversation, self-awareness and, where helpful, body-oriented coaching so you can work with your whole self — not just from the neck up.</p>
        <Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Enquire about coaching</Link>
      </div><div className="md:col-span-5"><img src={image} alt="Woman in peaceful reflection in nature" className="aspect-[4/5] w-full rounded-[2rem] object-cover" /></div></div></section>

      <section className="py-20 md:py-28"><div className="container-prose grid gap-10 md:grid-cols-12"><div className="md:col-span-4"><p className="eyebrow">Working with the whole person</p><h2 className="mt-4 text-3xl md:text-4xl">More than thinking it through.</h2></div><div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-8"><p>Sometimes you can understand something logically and still feel stuck. We can explore your thoughts, emotions and what you notice in your body to better understand how you're responding to a situation right now.</p><p>Through gentle attention, reflective questions and optional grounding or movement exercises, you may discover new perspectives and possibilities. We stay focused on the present and what you want to do next; coaching isn't therapy or trauma treatment.</p><p className="font-serif text-2xl text-foreground">Greater awareness is useful when it leads to meaningful choices.</p></div></div></section>

      <section className="surface-sage py-20 md:py-24"><div className="container-prose"><p className="eyebrow">What we can explore</p><h2 className="mt-4 text-3xl md:text-4xl">Start wherever you are.</h2><div className="mt-8 flex flex-wrap gap-3">{themes.map(t => <span key={t} className="rounded-full border border-border bg-cream/70 px-5 py-3 font-serif">{t}</span>)}</div></div></section>
      <section className="py-20 md:py-28"><div className="container-prose grid gap-6 md:grid-cols-3">
        <article className="rounded-[1.5rem] border border-border p-8"><p className="eyebrow">One to one</p><h2 className="mt-4 text-2xl">Personal coaching</h2><p className="mt-4 text-muted-foreground">An individual space for clarity, confidence, choices and personal growth.</p></article>
        <article className="rounded-[1.5rem] border border-border p-8"><p className="eyebrow">Professionals</p><h2 className="mt-4 text-2xl">Leadership coaching</h2><p className="mt-4 text-muted-foreground">Explore your impact, communication, habits and the leader you want to be.</p></article>
        <article className="rounded-[1.5rem] border border-border p-8"><p className="eyebrow">Shared learning</p><h2 className="mt-4 text-2xl">Group coaching</h2><p className="mt-4 text-muted-foreground">Thoughtful spaces for people to learn with and from each other.</p></article>
      </div></section>

      <section className="py-20 md:py-24"><div className="container-prose max-w-3xl">
        <p className="eyebrow">From a coaching client</p>
        <blockquote className="mt-6 rounded-[1.5rem] border border-border bg-card p-8 md:p-10">
          <p className="font-serif text-xl leading-relaxed md:text-2xl">“Helena is an excellent coach - she is compassionate and sensitive - able to adapt to client needs with flexibility and a range of approaches and tools.</p>
          <p className="mt-5 font-serif text-xl leading-relaxed md:text-2xl">I come away from sessions with her feeling inspired and energised.</p>
          <p className="mt-5 font-serif text-xl leading-relaxed md:text-2xl">I would truly recommend to anyone looking for guidance and support through any of life's challenges or changes.</p>
          <p className="mt-5 font-serif text-xl leading-relaxed md:text-2xl">Thank you so much Helena!”</p>
          <footer className="mt-7 text-sm text-muted-foreground">— Coaching client</footer>
        </blockquote>
      </div></section>
      <section className="surface-clay py-20"><div className="container-prose max-w-3xl"><p className="eyebrow">Training & approach</p><h2 className="mt-4 text-3xl md:text-4xl">Qualified, curious and practical.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">My training includes a Level 5 Diploma in Personal Performance Coaching, ICF ACC accreditation and Level 2 Body-Oriented Coaching training with The Somatic School. I tailor sessions to you, always making space for choice and consent.</p></div></section>
      <section className="py-20"><div className="container-prose max-w-3xl text-center"><h2 className="text-3xl md:text-5xl">Ready to explore?</h2><p className="mt-5 text-lg text-muted-foreground">We can start with a conversation about what matters to you and whether my approach is a good fit.</p><Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Start a conversation</Link></div></section>
    </>
  );
}
