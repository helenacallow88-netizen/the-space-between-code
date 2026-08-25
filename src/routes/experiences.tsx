import { createFileRoute, Link } from "@tanstack/react-router";
import expImg from "@/assets/experiences-visual.jpg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Hosting, Facilitation & Experiences — The Space Between" },
      { name: "description", content: "Conference and panel hosting, facilitation, workshops, workplace wellbeing, retreats and movement-based experiences." },
      { property: "og:title", content: "Hosting, Facilitation & Experiences — The Space Between" },
      { property: "og:description", content: "Bring the room to life — with warmth, energy, structure and meaningful connection." },
    ],
  }),
  component: Experiences,
});

const offerings = [
  { title: "Conference & Event Hosting", body: "Confident, warm MC work that keeps the energy moving, makes speakers feel supported and helps an audience feel part of the experience rather than talked at." },
  { title: "Panel Hosting", body: "Thoughtful moderation that draws out the interesting conversation, makes space for different voices and keeps the discussion clear, human and engaging." },
  { title: "Workshop Facilitation", body: "Purposeful sessions for teams and communities — from trust, strengths and communication to confidence, resilience, change and belonging." },
  { title: "Playful Embodiment Workshops", body: "Experiential development using movement, body awareness and play to explore communication, trust, creativity, confidence and emotional regulation." },
  { title: "Workplace Wellbeing", body: "Practical nervous-system resets, embodied wellbeing sessions and Indian Head Massage options for organisations that want to offer something people can genuinely feel." },
  { title: "Retreats & Community Experiences", body: "Spaces that blend reflection, connection, coaching, movement and honest conversation — designed around the people and purpose of the gathering." },
  { title: "Listening Circles", body: "Held, structured conversations where groups can say what they are actually experiencing, listen differently and leave with greater understanding." },
  { title: "Movement & Acro Experiences", body: "Playful partner movement and acro-inspired experiences that build trust, communication and connection — with performance possibilities for selected events." },
];

function Experiences() {
  return (
    <>
      <section className="surface-warm"><div className="container-prose grid gap-10 pb-24 pt-20 md:grid-cols-12 md:pb-32 md:pt-28"><div className="md:col-span-7"><p className="eyebrow">Hosting, facilitation & experiences</p><h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-6xl">Bring the room <span className="italic text-terracotta">to life.</span></h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">I host, facilitate and create experiences that combine warmth, energy and substance — so people feel comfortable enough to participate and engaged enough to remember what happened.</p><div className="mt-10"><Link to="/contact" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90">Enquire about an event</Link></div></div><div className="md:col-span-5"><div className="aspect-[4/5] overflow-hidden rounded-[2rem]"><img src={expImg} alt="Soft watercolour horizon in warm cream, terracotta and dusty rose" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" /></div></div></div></section>

      <section className="py-28 md:py-32"><div className="container-prose max-w-3xl space-y-6"><p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">A good room has a feeling to it. People know when they are being managed through an agenda — and they know when somebody is genuinely holding the experience.</p><p className="text-lg leading-relaxed text-muted-foreground">I have facilitated development sessions, chaired difficult conversations and hosted large-scale events for audiences of more than 500. I love the live element: reading a room, adapting in the moment, making people feel at ease and creating enough structure for something meaningful to happen.</p></div></section>

      <section className="surface-sage py-24 md:py-28"><div className="container-prose"><div className="mb-14 max-w-2xl"><p className="eyebrow">Ways to work together</p><h2 className="mt-4 text-3xl text-foreground md:text-4xl">From conference stage to workshop floor</h2></div><div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-foreground/15 bg-foreground/10 md:grid-cols-2">{offerings.map((o) => <article key={o.title} className="bg-cream/85 p-8 md:p-10"><h3 className="font-serif text-2xl text-foreground">{o.title}</h3><p className="mt-3 text-muted-foreground">{o.body}</p></article>)}</div></div></section>

      <section className="py-24 md:py-32"><div className="container-prose grid gap-12 md:grid-cols-12"><div className="md:col-span-4"><p className="eyebrow">The feel</p><h2 className="mt-4 text-3xl text-foreground md:text-4xl">Professional does not have to mean stiff.</h2></div><div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground"><p>I bring energy and playfulness without losing the purpose of the room. I am comfortable improvising, speaking to large groups, handling sensitive conversations and moving between lightness and depth.</p><p>That makes this work particularly suited to organisations, conferences and communities that want people to participate rather than passively consume.</p><p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">People learn and connect differently when they feel safe enough to loosen up.</p></div></div></section>

      <section className="py-24 md:py-32"><div className="container-prose flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-border p-10 md:flex-row md:items-center"><div className="max-w-xl"><h2 className="font-serif text-3xl text-foreground md:text-4xl">Planning something?</h2><p className="mt-3 text-muted-foreground">Tell me about the room, the people in it and how you want them to feel when they leave. We can build from there.</p></div><div className="flex flex-wrap gap-3"><Link to="/contact" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Start a conversation</Link></div></div></section>
    </>
  );
}
