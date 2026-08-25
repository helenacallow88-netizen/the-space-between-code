import { createFileRoute, Link } from "@tanstack/react-router";
import orgImg from "@/assets/organizations-visual.jpg";

export const Route = createFileRoute("/organisations")({
  head: () => ({
    meta: [
      { title: "Organisations & Teams — The Space Between" },
      { name: "description", content: "Leadership development, team development, facilitation, people consultancy, organisational listening and workplace wellbeing." },
      { property: "og:title", content: "Organisations & Teams — The Space Between" },
      { property: "og:description", content: "Practical, human people development for leaders, teams and organisations." },
    ],
  }),
  component: Organisations,
});

const situations = [
  "A leadership team needs to reconnect or have a conversation they keep avoiding",
  "Managers need practical development, confidence or coaching",
  "A founder or CEO needs a trusted outside perspective on people and culture",
  "Your organisation is changing and you want to protect trust and engagement",
  "A team needs stronger communication, psychological safety or ways of working",
  "You need an engaging facilitator for an away day, workshop or development session",
  "Employee voice is not reaching leadership clearly",
  "Your people need a genuine wellbeing reset rather than another presentation",
];

const services = [
  { n: "01", title: "Leadership Development", body: "Practical development for managers and leaders who want to lead people with more confidence, self-awareness, clarity and humanity." },
  { n: "02", title: "Executive & Founder Coaching", body: "A confidential thinking space for CEOs, founders and senior leaders — part coaching, part challenge, part trusted human sounding board." },
  { n: "03", title: "Team Development", body: "Facilitated work that strengthens trust, communication, self-awareness and the way people actually work together." },
  { n: "04", title: "Facilitation", body: "Engaging facilitation for leadership offsites, away days, difficult conversations, strategy-to-action sessions and whole-team gatherings." },
  { n: "05", title: "People Consultancy", body: "Flexible people-development support for organisations that need an experienced pair of hands and a human lens — particularly during growth, change or culture work." },
  { n: "06", title: "Organisational Listening", body: "Structured listening that surfaces what people are really experiencing and translates insight back to leaders in a useful, constructive way." },
  { n: "07", title: "Workshops", body: "Bespoke sessions on trust, strengths, communication, confidence, resilience, change, belonging and other people-development priorities." },
  { n: "08", title: "Workplace Wellbeing", body: "Nervous-system resets, embodiment, movement and Indian Head Massage options that give people a tangible pause from stress and cognitive overload." },
  { n: "09", title: "Event Hosting & MC", body: "Warm, confident hosting for conferences, panels, internal events and celebrations — keeping the room connected, energised and moving." },
];

function Organisations() {
  return (
    <>
      <section className="surface-warm">
        <div className="container-prose grid gap-10 pb-24 pt-20 md:grid-cols-12 md:pb-32 md:pt-28">
          <div className="md:col-span-7">
            <p className="eyebrow">Organisations & teams</p>
            <h1 className="mt-6 text-4xl leading-[1.05] text-foreground md:text-6xl">
              Better people development. <span className="italic text-terracotta">More human workplaces.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I work with leaders, teams and organisations to turn people challenges into practical development — through coaching, facilitation, consultancy, listening, workshops and wellbeing experiences.
            </p>
            <div className="mt-10"><Link to="/contact" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90">Start a conversation</Link></div>
          </div>
          <div className="md:col-span-5"><div className="aspect-[4/5] overflow-hidden rounded-[2rem]"><img src={orgImg} alt="An abstract archway opening onto a warm horizon" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover" /></div></div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container-prose max-w-3xl space-y-6">
          <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
            Sometimes you do not need a huge transformation programme. You need the right person in the room to listen, challenge, connect the dots and help people move.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            My background spans leadership development, coaching, early careers, culture, organisational change, safeguarding, EDI and large-scale programme delivery. I have led national teams, coached people at different career stages, worked closely with senior leaders and hosted rooms of more than 500 people.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            That means I can move between the human conversation and the practical delivery. I am comfortable holding complexity, but I also care about what actually happens next.
          </p>
        </div>
      </section>

      <section className="surface-sage py-24">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4"><p className="eyebrow">Bring me in when</p><h2 className="mt-4 text-3xl text-foreground md:text-4xl">There is a people challenge that needs movement.</h2></div>
          <ul className="md:col-span-8 md:columns-2 md:gap-10">{situations.map((s) => <li key={s} className="mb-4 break-inside-avoid border-t border-foreground/15 pt-3 font-serif text-lg text-foreground">{s}</li>)}</ul>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-prose">
          <div className="mb-14 max-w-2xl"><p className="eyebrow">Services</p><h2 className="mt-4 text-3xl text-foreground md:text-4xl">Ways I can support your people</h2></div>
          <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <article key={s.n} className="bg-card p-8 md:p-10"><div className="flex items-baseline gap-4"><span className="font-serif text-sm text-terracotta">{s.n}</span><h3 className="font-serif text-2xl text-foreground">{s.title}</h3></div><p className="mt-4 text-muted-foreground">{s.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="surface-clay py-24 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4"><p className="eyebrow">My style</p><h2 className="mt-4 text-3xl text-foreground md:text-4xl">Credible enough for the boardroom. Human enough for the real conversation.</h2></div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>I have worked inside organisations, managed people and influenced both upwards and downwards. I understand delivery pressures, competing priorities and the reality that leaders sometimes have to make difficult decisions.</p>
            <p>I also know that people notice how those decisions are made. My work helps organisations keep performance and humanity in the same conversation — without turning either into corporate wallpaper.</p>
            <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">Warmth does not mean avoiding challenge. People often hear the difficult thing more clearly when they feel respected enough to stay in the conversation.</p>
          </div>
        </div>
      </section>

      <section className="surface-ink py-24 md:py-32">
        <div className="container-prose max-w-3xl"><h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl">Tell me what is happening in your organisation.</h2><p className="mt-6 text-lg leading-relaxed text-cream/75">You do not need to know which service you need. Start with the challenge, the people involved and the outcome you want. I can help shape the right intervention.</p><div className="mt-10"><Link to="/contact" className="inline-flex items-center rounded-full bg-cream px-6 py-3 text-sm text-ink transition-opacity hover:opacity-90">Start a conversation</Link></div></div>
      </section>
    </>
  );
}
