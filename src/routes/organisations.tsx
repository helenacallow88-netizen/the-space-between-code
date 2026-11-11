import { createFileRoute, Link } from "@tanstack/react-router";
import image from "@/assets/organizations-visual.jpg";

export const Route = createFileRoute("/organisations")({
  head: () => ({ meta: [
    { title: "Consulting — The Space Between" },
    { name: "description", content: "People-centred leadership consulting and thought partnership for founders, business owners and growing teams. Practical support with communication, feedback, relationships and change." },
    { property: "og:title", content: "Consulting — The Space Between" },
  ] }),
  component: Consulting,
});

const support = [
  { title: "A trusted thinking partner", body: "A confidential space for leaders to think out loud, test ideas, understand their blind spots and work through real decisions with constructive challenge." },
  { title: "The people side of management", body: "Practical guidance on relationships, communication, expectations, feedback, boundaries and conversations that feel difficult to have." },
  { title: "Bringing people with you", body: "Balance leadership priorities and business realities with the experiences of your team — especially when things are growing or changing." },
  { title: "Team connection & facilitation", body: "Thoughtful workshops and facilitated conversations that build understanding, trust and clearer ways of working together." },
];

const formats = [
  { title: "Leadership clarity session", detail: "One-off • Focused", body: "A dedicated conversation when you need to untangle a particular leadership or people challenge and leave with fresh perspective and practical next steps." },
  { title: "Ongoing leadership partnership", detail: "Monthly or bespoke", body: "Regular, trusted support as your people, business and leadership evolve. More continuity, accountability and room to turn insight into action." },
  { title: "The Space to Lead", detail: "Immersive • In person or online", body: "Step away from the day-to-day for an experience blending leadership reflection, problem-solving and optional wellbeing practices, created around you." },
];

function Consulting() {
  return (
    <>
      <section className="surface-warm"><div className="container-prose grid gap-12 pb-20 pt-16 md:grid-cols-12 md:items-center md:pb-28 md:pt-24">
        <div className="md:col-span-7"><p className="eyebrow">Consulting</p><h1 className="mt-6 text-4xl md:text-6xl">The people side <span className="italic text-terracotta">of business.</span></h1>
          <p className="mt-7 font-serif text-xl leading-relaxed md:text-2xl">Practical support, fresh perspectives and honest conversations for people who lead people.</p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Running a business and leading people are two different things. I work alongside founders, business owners and leaders as a trusted thought partner — helping you navigate people challenges, develop your leadership and make decisions that work for both the business and the people behind it.</p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Talk about your challenge</Link></div>
        <div className="md:col-span-5"><img src={image} alt="" className="aspect-[4/5] w-full rounded-[2rem] object-cover" /></div>
      </div></section>

      <section className="py-20 md:py-28"><div className="container-prose max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p className="font-serif text-2xl text-foreground md:text-3xl">You might be brilliant at what you do and still feel unsure when it comes to managing people.</p>
        <p>Perhaps you've grown a business from something you love. Now you're managing staff, navigating relationships, giving feedback, setting boundaries and making decisions that affect others. You don't need to figure it all out alone.</p>
        <p>I've led teams and worked closely with senior leaders, while also being the person who speaks up for employees. I understand delivery pressures and the importance of how decisions land with people. My role is to help you see the whole picture, ask useful questions and find a way forward.</p>
      </div></section>

      <section className="surface-sage py-20 md:py-28"><div className="container-prose">
        <p className="eyebrow">Where I can help</p><h2 className="mt-4 text-3xl md:text-4xl">Real people challenges. Practical support.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">{support.map(s => <article key={s.title} className="rounded-[1.5rem] border border-border bg-card p-8"><h3 className="text-2xl">{s.title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p></article>)}</div>
      </div></section>

      <section className="py-20 md:py-28"><div className="container-prose">
        <p className="eyebrow">Ways to work together</p><h2 className="mt-4 text-3xl md:text-4xl">A one-off conversation or a partner alongside you.</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Ongoing work creates space to reflect, try things out and keep learning. We can also begin with one focused session if there's something immediate you want to explore.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">{formats.map(f => <article key={f.title} className="rounded-[1.5rem] border border-border p-7"><p className="eyebrow">{f.detail}</p><h3 className="mt-4 text-2xl">{f.title}</h3><p className="mt-4 text-muted-foreground">{f.body}</p>{f.title === "The Space to Lead" ? <Link to="/space-to-lead" className="mt-6 inline-flex text-sm underline underline-offset-4">Explore the experience →</Link> : null}</article>)}</div>
      </div></section>

      <section className="surface-clay py-20 md:py-24"><div className="container-prose grid gap-8 md:grid-cols-12"><div className="md:col-span-4"><p className="eyebrow">My approach</p><h2 className="mt-4 text-3xl md:text-4xl">Human, not fluffy.</h2></div><div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-8"><p>I'm warm, supportive and honest. I care about how people feel, and I care about what actually changes. We'll explore the situation from different angles, challenge assumptions and agree realistic steps you can take.</p><p>My particular strength is the human side of leadership. If a project also needs specialist HR policies, systems or operational processes, I can discuss involving an appropriate specialist rather than pretending to cover everything myself.</p><p className="font-serif text-2xl text-foreground">Good leadership isn't just what you achieve. It's how you bring people with you.</p></div></div></section>
      <section className="py-20 md:py-28"><div className="container-prose">
        <p className="eyebrow">From people I've worked with</p>
        <h2 className="mt-4 text-3xl md:text-4xl">Leadership is personal. So is the feedback.</h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">These reflections come from former colleagues and leaders I've worked alongside, rather than clients of The Space Between.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <blockquote className="rounded-[1.5rem] border border-border bg-card p-8">
            <p className="font-serif text-xl leading-relaxed">“Helena leads people equally well from in front (directing), alongside (collaborating) and behind (supporting).”</p>
            <p className="mt-5 font-serif text-xl leading-relaxed">“She's a magician at bringing people together to deliver against our core objectives.”</p>
            <footer className="mt-7 text-sm text-muted-foreground">— Mark, former team member and Performance & Development Coach</footer>
          </blockquote>
          <blockquote className="rounded-[1.5rem] border border-border bg-card p-8">
            <p className="font-serif text-xl leading-relaxed">“An accomplished coach, Helena is adept at asking the right questions…”</p>
            <p className="mt-5 font-serif text-xl leading-relaxed">“Above all, Helena is brave. She’ll speak truth to power. And speak truth to peers, as well.”</p>
            <footer className="mt-7 text-sm text-muted-foreground">— Kurtis, former CEO</footer>
          </blockquote>
          <blockquote className="rounded-[1.5rem] border border-border bg-card p-8">
            <p className="font-serif text-xl leading-relaxed">“She has a rare ability to lead people through periods of uncertainty with confidence, empathy and authenticity.”</p>
            <p className="mt-5 font-serif text-xl leading-relaxed">“Rather than simply managing performance, she invested in people, challenged them to grow, and gave them the confidence to achieve more than they thought possible.”</p>
            <footer className="mt-7 text-sm text-muted-foreground">— John, former Performance &amp; Development Coach · Edited excerpts</footer>
          </blockquote>
          <blockquote className="rounded-[1.5rem] border border-border bg-card p-8">
            <p className="font-serif text-xl leading-relaxed">“H is an exceptional presenter and facilitator, able to bring complex ideas to life with clarity, warmth and purpose. As a manager, she leads with trust, creating the space and psychological safety for people to flourish rather than micromanaging them.”</p>
            <p className="mt-5 font-serif text-xl leading-relaxed">“That combination of self-awareness, generosity and high standards is rare and hugely impactful.”</p>
            <footer className="mt-7 text-sm text-muted-foreground">— Rab Macleod, Leadership Coach &amp; Facilitator, former direct report · Edited excerpts</footer>
          </blockquote>
          <blockquote className="rounded-[1.5rem] border border-border bg-card p-8 md:col-span-2">
            <p className="font-serif text-xl leading-relaxed">“You have had a profound impact on so many, given people the space, your care, your time and so importantly, given them a voice.”</p>
            <footer className="mt-7 text-sm text-muted-foreground">— Julie, former Director</footer>
          </blockquote>
        </div>
      </div></section>

      <section className="surface-ink py-20"><div className="container-prose max-w-3xl"><h2 className="text-4xl text-cream">Let's talk about your people challenge.</h2><p className="mt-5 text-lg text-cream/80">You don't need to know which format is right yet. Tell me what's happening and what you'd like to change.</p><Link to="/contact" className="mt-8 inline-flex rounded-full bg-cream px-6 py-3 text-sm text-ink">Start a conversation</Link></div></section>
    </>
  );
}
