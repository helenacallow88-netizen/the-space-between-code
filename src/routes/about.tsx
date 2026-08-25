import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImage from "@/assets/helena-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Helena — The Space Between" },
      { name: "description", content: "Meet Helena Callow — people development leader, ICF-aligned coach, facilitator and host behind The Space Between." },
      { property: "og:title", content: "About Helena — The Space Between" },
      { property: "og:description", content: "People development leader, coach, facilitator and host — serious about the outcome, human in the way she gets there." },
    ],
  }),
  component: About,
});

const credentials = [
  "10+ years in leadership and people development",
  "Led national coaching teams and developed early-career professionals",
  "Level 5 Diploma in Personal Performance Coaching & NLP — ICF aligned",
  "Accredited Level 2 Body-Oriented Coaching — The Somatic School",
  "Facilitated and hosted events for audiences of 500+",
  "Leadership, culture, organisational change and team development experience",
  "EDI champion and founder of a People of Colour network",
  "Designated safeguarding and youth-development experience",
];

function About() {
  return (
    <>
      <section className="surface-warm"><div className="container-prose grid gap-10 pb-20 pt-16 md:grid-cols-12 md:pb-28 md:pt-24"><div className="md:col-span-7"><p className="eyebrow">About Helena</p><h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-6xl">People development is the thread <span className="italic text-terracotta">through everything I do.</span></h1><div className="mt-6 max-w-xl space-y-1.5 font-serif text-lg leading-relaxed text-muted-foreground md:text-xl"><p>Leader.</p><p>Coach.</p><p>Facilitator.</p><p>Host.</p><p>Human first.</p></div></div><div className="md:col-span-5"><div className="aspect-[3/4] overflow-hidden rounded-[2rem]"><img src={aboutImage} alt="Portrait of Helena, founder of The Space Between" width={1200} height={1400} loading="lazy" className="h-full w-full object-cover" /></div></div></div></section>

      <section className="py-24 md:py-32"><div className="container-prose grid gap-12 md:grid-cols-12"><div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground"><p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">For more than a decade, I have been helping people develop — as a manager, coach, facilitator, programme leader, trusted challenger and the person who can usually get a room talking.</p><p>I spent six years at Police Now leading a national team of Personal Development Coaches and sitting within the management team, with influence both upwards into senior leadership and downwards into the day-to-day experience of employees and programme participants.</p><p>One of my strengths is acting as a bridge — between leadership intention and employee experience, between organisational need and human reality. During a major redundancy process, I also served as an Employee Representative, bringing colleagues' concerns and lived experience into Executive conversations while helping people make sense of difficult decisions and uncertainty.</p><p>My work has included leadership development, coaching, early careers, culture, organisational change, EDI, safeguarding, large-scale programme delivery and events. I have coached leaders and early-career professionals, facilitated difficult conversations and hosted audiences of more than 500 people.</p><p>What ties it together is not a job title. It is an ability to build trust, understand people, create a compelling direction and then make things happen with others.</p><p>I am a doer. I like ideas, but I like them even more when they become something useful in the real world.</p></div><aside className="md:col-span-5"><div className="rounded-[1.5rem] border border-border bg-card p-8"><p className="eyebrow">Experience & training</p><ul className="mt-6 space-y-4">{credentials.map((c) => <li key={c} className="flex gap-3 text-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" /><span>{c}</span></li>)}</ul></div></aside></div></section>

      <section className="surface-clay py-24 md:py-28"><div className="container-prose grid gap-12 md:grid-cols-12"><div className="md:col-span-4"><p className="eyebrow">What people get from me</p><h2 className="mt-4 text-3xl text-foreground md:text-4xl">Steadiness and spark.</h2></div><div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground"><p>I can hold a serious conversation without making it heavy. I can challenge somebody without making them defensive. I can bring energy to a room without needing to dominate it.</p><p>People tend to open up to me quickly. I think that is partly because I am genuinely curious and partly because I am willing to be human myself. I do not believe professionalism requires us to become less real.</p><p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">My job is often to help people feel safe enough to be honest — and confident enough to do something with that honesty.</p></div></div></section>

      <section className="surface-sage py-24"><div className="container-prose grid gap-12 md:grid-cols-12"><div className="md:col-span-4"><p className="eyebrow">The wider lens</p><h2 className="mt-4 text-3xl text-foreground md:text-4xl">Work is human. So is life.</h2></div><div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground"><p>My approach has also been shaped by coaching, somatic practice, movement, travel and my own experiences of identity and belonging as a mixed-race woman. Those parts of my life have made me more interested in the whole person — not just the version of them that arrives at work.</p><p>That is why The Space Between can hold leadership coaching and a workplace workshop alongside personal coaching, embodiment, community experiences and movement. They are different formats, but the underlying question is similar: what helps people feel more connected to themselves, each other and what they are trying to create?</p></div></div></section>

      <section className="py-24 md:py-28"><div className="container-prose"><div className="mb-12 max-w-2xl"><p className="eyebrow">Ways to work together</p><h2 className="mt-4 text-3xl text-foreground md:text-4xl">Different contexts. Same human approach.</h2></div><div className="grid gap-6 md:grid-cols-3"><WorkLink to="/organisations" eyebrow="Organisations & teams" title="Leadership, people development and facilitation." body="For organisations that want practical support with leaders, teams, culture, change and wellbeing." /><WorkLink to="/individuals" eyebrow="Coaching" title="One-to-one space for thinking and growth." body="For leaders, founders and individuals navigating decisions, confidence, identity, relationships or change." /><WorkLink to="/experiences" eyebrow="Hosting & experiences" title="Rooms with energy, purpose and connection." body="For conferences, panels, workshops, retreats, communities and embodied experiences." /></div></div></section>

      <section className="py-20 md:py-24"><div className="container-prose flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-border p-10 md:flex-row md:items-center"><div className="max-w-xl"><h2 className="font-serif text-3xl text-foreground md:text-4xl">Got something in mind?</h2><p className="mt-3 text-muted-foreground">You do not need to squeeze it into a neat service category. Tell me what you are trying to create.</p></div><Link to="/contact" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Start a conversation</Link></div></section>
    </>
  );
}

function WorkLink({ to, eyebrow, title, body }: { to: "/organisations" | "/individuals" | "/experiences"; eyebrow: string; title: string; body: string }) {
  return <Link to={to} className="group rounded-[1.5rem] border border-border bg-card p-8 transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(60,30,15,0.25)]"><p className="eyebrow">{eyebrow}</p><h3 className="mt-4 font-serif text-2xl text-foreground">{title}</h3><p className="mt-4 text-muted-foreground">{body}</p><span className="mt-8 inline-flex items-center gap-2 text-sm text-foreground">Explore <span aria-hidden>→</span></span></Link>;
}
