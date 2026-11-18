import { createFileRoute, Link } from "@tanstack/react-router";
import image from "@/assets/individuals-hero.jpg";

export const Route = createFileRoute("/individuals")({
  head: () => ({ meta: [
    { title: "Coaching — The Space Between" },
    { name: "description", content: "Personal, leadership and group coaching with Helena Callow. A welcoming space to pause, reflect, connect with yourself and explore what's possible." },
    { property: "og:title", content: "Coaching — The Space Between" },
  ] }),
  component: Coaching,
});

const themes = ["Confidence & self-awareness", "Career & life transitions", "Leadership", "Decision-making", "Relationships & communication", "Purpose & direction", "Identity & belonging", "Boundaries", "Change"];
function Coaching() {
  return (
    <>
      <section className="surface-warm"><div className="container-prose grid gap-10 pb-20 pt-16 md:grid-cols-12 md:items-center md:pb-28 md:pt-24"><div className="md:col-span-7">
        <p className="eyebrow">Coaching</p><h1 className="mt-6 text-4xl md:text-6xl">A space to be. <span className="italic text-terracotta">A space to explore.</span></h1>
        <p className="mt-6 font-serif text-xl leading-relaxed md:text-2xl">Come as you are. There's no need to have all the answers, know exactly what you want or be anyone other than yourself.</p>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Through coaching, we create space to pause, listen more deeply to yourself and explore whatever feels important. Sometimes that brings clarity, a new perspective or a way forward. Sometimes the value is simply in being heard, understood and having room to discover something unexpected. I offer personal, leadership and group coaching, drawing on conversation, reflection and, where helpful, body-oriented approaches.</p><p className="mt-4 font-medium">Coaching available in person or online, by arrangement.</p>
        <Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Enquire about coaching</Link>
      </div><div className="md:col-span-5"><img src={image} alt="Woman in peaceful reflection in nature" className="aspect-[4/5] w-full rounded-[2rem] object-cover" /></div></div></section>

      <section className="py-20 md:py-28"><div className="container-prose grid gap-10 md:grid-cols-12"><div className="md:col-span-4"><p className="eyebrow">Working with the whole person</p><h2 className="mt-4 text-3xl md:text-4xl">More than thinking it through.</h2></div><div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-8"><p>Sometimes you can understand something logically and still sense there's more to discover. We can gently explore your thoughts, feelings and what you notice in your body, making room to listen to the whole of you.</p><p>There might be conversation, stillness, reflective questions or, if you choose, grounding and movement. We follow what feels useful to you, without forcing an answer or rushing towards a particular outcome. Coaching is present-focused and isn't therapy or trauma treatment.</p><p className="font-serif text-2xl text-foreground">There's wisdom in the whole of you — your thoughts, feelings, body and everything in between.</p></div></div></section>

      <section className="surface-sage py-20 md:py-24"><div className="container-prose"><p className="eyebrow">What we can explore</p><h2 className="mt-4 text-3xl md:text-4xl">Start wherever you are.</h2><div className="mt-8 flex flex-wrap gap-3">{themes.map(t => <span key={t} className="rounded-full border border-border bg-cream/70 px-5 py-3 font-serif">{t}</span>)}</div></div></section>
      <section className="py-20 md:py-28"><div className="container-prose grid gap-6 md:grid-cols-3">
        <article className="rounded-[1.5rem] border border-border p-8"><p className="eyebrow">One to one</p><h2 className="mt-4 text-2xl">Personal coaching</h2><p className="mt-4 text-muted-foreground">A space that's entirely yours. To reflect, reconnect with yourself, explore life's questions or simply discover what emerges when you give yourself room to be.</p></article>
        <article className="rounded-[1.5rem] border border-border p-8"><p className="eyebrow">Professionals</p><h2 className="mt-4 text-2xl">Leadership coaching</h2><p className="mt-4 text-muted-foreground">Space to explore who you are as a leader, how you relate to others and what matters to you. With curiosity, honesty and room for your whole self.</p></article>
        <article className="rounded-[1.5rem] border border-border p-8"><p className="eyebrow">Shared learning</p><h2 className="mt-4 text-2xl">Group coaching</h2><p className="mt-4 text-muted-foreground">A welcoming space to share perspectives, learn from one another and discover what becomes possible through connection.</p></article>
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
      <section className="pb-20"><div className="container-prose max-w-3xl"><blockquote className="rounded-[1.5rem] border border-border bg-card p-8"><p className="font-serif text-xl leading-relaxed">“you were always a listening ear who would provide a non-judgemental sounding board and always listen to worries and concerns with an incredibly open mind.”</p><footer className="mt-6 text-sm text-muted-foreground">— Anonymous individual supported through coaching and development</footer></blockquote></div></section>
      <section className="surface-clay py-20"><div className="container-prose max-w-3xl"><p className="eyebrow">Training & approach</p><h2 className="mt-4 text-3xl md:text-4xl">Qualified, curious and responsive to you.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">My training includes a Level 5 Diploma in Personal Performance Coaching, ICF ACC accreditation, Neuro-Linguistic Programming (NLP) and Level 2 Body-Oriented Coaching training with The Somatic School. I tailor sessions to you, always making space for choice and consent.</p></div></section>
      <section className="py-20"><div className="container-prose max-w-3xl text-center"><h2 className="text-3xl md:text-5xl">There's room for you here.</h2><p className="mt-5 text-lg text-muted-foreground">Whether you're navigating a change, exploring something important or simply curious about what coaching might offer, you're welcome to start with a conversation. No pressure to have it all figured out.</p><Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Start a conversation</Link></div></section>
    </>
  );
}
