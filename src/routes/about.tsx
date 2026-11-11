import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImage from "@/assets/helena-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Helena — The Space Between" },
    { name: "description", content: "Meet Helena, the person behind The Space Between. A warm, practical approach to coaching, people-centred consulting and wellbeing, shaped by connection, curiosity and experience." },
    { property: "og:title", content: "About Helena — The Space Between" },
  ] }),
  component: About,
});

const experience = [
  "15+ years in people development, leadership and programme delivery",
  "Led national coaching teams and supported leaders and early-career professionals",
  "ICF accredited Level 5 Diploma in Personal Performance Coaching",
  "Neuro-linguistic Programming (NLP)",
  "Level 2 Body-Oriented Coaching training with The Somatic School",
  "Experienced facilitator, event host and constructive leadership thought partner",
  "Founded and led a People of Colour network",
];

function About() {
  return (
    <>
      <section className="surface-warm"><div className="container-prose grid gap-10 pb-20 pt-16 md:grid-cols-12 md:items-center md:pb-28 md:pt-24">
        <div className="md:col-span-7">
          <p className="eyebrow">About me</p>
          <h1 className="mt-6 text-4xl leading-[1.08] md:text-6xl">Hello, I'm Helena. <span className="italic text-terracotta">Human first, always.</span></h1>
          <p className="mt-7 max-w-xl font-serif text-xl leading-relaxed md:text-2xl">I'm a coach, consultant and wellbeing practitioner who believes people are far more interesting than the boxes we put them in.</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">I love meaningful conversations, bringing people together and creating the conditions for someone to see things differently. I'm warm and curious, but I'm also practical. I care about what happens after the conversation.</p>
        </div>
        <div className="md:col-span-5"><div className="aspect-[3/4] overflow-hidden rounded-[2rem]"><img src={aboutImage} alt="Portrait of Helena, founder of The Space Between" width={1200} height={1400} loading="lazy" className="h-full w-full object-cover" /></div></div>
      </div></section>

      <section className="py-20 md:py-28"><div className="container-prose grid gap-12 md:grid-cols-12">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7">
          <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">I've spent much of my working life helping people find their feet, grow in confidence, navigate challenges and lead others.</p>
          <p>Over the past 15 years, I've worked as a people leader, coach, facilitator and programme manager. I've led national teams, supported hundreds of people through development programmes, worked alongside senior leaders and helped teams navigate change.</p>
          <p>What I've loved most hasn't been the job titles. It's been earning people's trust, asking the question that opens something up, helping someone have a difficult conversation or seeing a group find its way forward together.</p>
          <p>I know that people and organisations need more than a listening ear. Sometimes they need a fresh perspective, an honest challenge and a plan. I bring all three, with care.</p>
          <p>Outside traditional workplaces, you'll also find me exploring movement, teaching acro, enjoying good conversation and creating spaces where people can slow down and connect. Those experiences aren't separate from my professional life — they remind me how much we bring of ourselves into everything we do.</p>
        </div>
        <aside className="md:col-span-5"><div className="rounded-[1.5rem] border border-border bg-card p-8">
          <p className="eyebrow">A little about my experience</p>
          <h2 className="mt-4 text-2xl">Care backed by experience.</h2>
          <ul className="mt-6 space-y-4">{experience.map(item => <li key={item} className="flex gap-3 text-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" /><span>{item}</span></li>)}</ul>
        </div></aside>
      </div></section>

      <section className="surface-clay py-20 md:py-28"><div className="container-prose grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4"><p className="eyebrow">Behind the name</p><h2 className="mt-4 text-3xl md:text-4xl">Why The Space Between?</h2></div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-8">
          <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">The space between isn't somewhere we get stuck. It's somewhere we get to explore.</p>
          <p>Between who we are and who we're becoming. Between different perspectives, experiences and possibilities. It's a space for curiosity, connection and discovering our own way forward.</p>
          <p>As a mixed-race woman, I've often felt myself between two worlds — not entirely in one place or the other. Over time, I've come to see that in-between space differently. Rather than needing to fit neatly into a category, there's freedom to move, to wonder and to be myself.</p>
          <p>That idea lives in the name and in the logo: two forms with space between them, and a dot that sits within it. For me, the dot represents a person — including me — free to explore what might be found there. It can also represent anyone who comes to this space, finding their own possibilities.</p>
          <p className="font-serif text-2xl text-foreground">You don't have to fit into a box to belong.</p>
        </div>
      </div></section>

      <section className="surface-sage py-20 md:py-28"><div className="container-prose grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4"><p className="eyebrow">How I work</p><h2 className="mt-4 text-3xl md:text-4xl">Warmth and honesty. Reflection and action.</h2></div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-8">
          <p>I want people to feel comfortable enough to show up as themselves. That might mean laughter, a challenging question, a moment of stillness or a conversation that finally gets to the heart of something.</p>
          <p>I draw on coaching, leadership experience, somatic awareness and practical facilitation. We work with what's happening now, not by digging into past trauma, and we keep sight of what you want to change, understand or experience.</p>
          <p>Sometimes the result is a clearer decision or a better conversation. Sometimes it's a more confident leader, a team working better together or simply the chance to rest. Each matters in its own way.</p>
          <p className="font-serif text-2xl text-foreground">For the whole person, and everything in between.</p>
        </div>
      </div></section>

      <section className="py-20 md:py-28"><div className="container-prose">
        <p className="eyebrow">Ways to work together</p><h2 className="mt-4 text-3xl md:text-4xl">What would you like to make space for?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <WorkLink to="/individuals" eyebrow="Coaching" title="Clarity and growth." body="Space to reflect, understand yourself and take meaningful steps forward." />
          <WorkLink to="/organisations" eyebrow="Consulting" title="The people side of business." body="A trusted thinking partner for leaders navigating real people challenges." />
          <WorkLink to="/experiences" eyebrow="Wellbeing" title="Rest and connection." body="Massage, pamper gatherings, movement and workplace experiences." />
        </div>
      </div></section>

      <section className="pb-20 md:pb-24"><div className="container-prose flex flex-col items-start justify-between gap-6 rounded-[1.5rem] border border-border p-10 md:flex-row md:items-center"><div className="max-w-xl"><h2 className="font-serif text-3xl md:text-4xl">Shall we have a conversation?</h2><p className="mt-3 text-muted-foreground">Tell me what you're looking for. We can explore what feels right together.</p></div><Link to="/contact" className="inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Get in touch</Link></div></section>
    </>
  );
}

function WorkLink({ to, eyebrow, title, body }: { to: "/organisations" | "/individuals" | "/experiences"; eyebrow: string; title: string; body: string }) {
  return <Link to={to} className="group rounded-[1.5rem] border border-border bg-card p-8 transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(60,30,15,0.25)]"><p className="eyebrow">{eyebrow}</p><h3 className="mt-4 font-serif text-2xl text-foreground">{title}</h3><p className="mt-4 text-muted-foreground">{body}</p><span className="mt-8 inline-flex text-sm text-foreground">Explore →</span></Link>;
}
