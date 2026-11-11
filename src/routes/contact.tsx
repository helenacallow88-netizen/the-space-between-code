import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const CONTACT_EMAIL = "thespacebetween.dev@gmail.com";
const encode = (data: Record<string, string>) =>
  Object.keys(data).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join("&");

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — The Space Between" },
    { name: "description", content: "Enquire about coaching, consulting, wellbeing treatments, pamper gatherings and The Space to Lead. Connect with Helena Callow." },
    { property: "og:title", content: "Contact — The Space Between" },
  ] }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [service, setService] = useState("Coaching");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    const formData = Object.fromEntries(Array.from(new FormData(event.currentTarget).entries(), ([key, value]) => [key, String(value)]));
    try {
      const response = await fetch("/netlify-form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);
      event.currentTarget.reset();
      setSent(true);
    } catch {
      setSubmitError("Your message could not be sent. Please try again, or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return <><section className="surface-warm"><div className="container-prose pb-16 pt-16 md:pb-20 md:pt-24">
    <p className="eyebrow">Contact</p><h1 className="mt-6 max-w-3xl text-4xl md:text-6xl">Let's start a <span className="italic text-terracotta">conversation.</span></h1>
    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Looking for coaching, a leadership thought partner, a wellbeing experience or something bespoke? Tell me a little about what you're looking for, and we can explore the next step.</p>
    <p className="mt-5 text-muted-foreground">Prefer email? <a className="font-medium text-foreground underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
  </div></section>
  <section className="py-14 md:py-20"><div className="container-prose grid gap-9 md:grid-cols-12">
    <div className="md:col-span-5"><h2 className="text-3xl">What can I help with?</h2><p className="mt-5 leading-relaxed text-muted-foreground">I work with individuals, groups and workplaces, online and in person depending on the service. You don't need to choose a perfect package before reaching out.</p><div className="mt-7 space-y-4"><p><strong>Coaching:</strong> personal, leadership and group coaching.</p><p><strong>Consulting:</strong> founders, leaders, people challenges and teams.</p><p><strong>Wellbeing:</strong> massage, pamper gatherings, movement and workplace sessions.</p><p><strong>The Space to Lead:</strong> a bespoke leadership experience.</p></div></div>
    <div className="rounded-[1.5rem] border border-border bg-card p-6 md:col-span-7 md:p-9">
      {sent ? <div className="py-12 text-center"><p className="eyebrow">Message received</p><h2 className="mt-4 text-3xl">Thank you.</h2><p className="mt-4 text-muted-foreground">I'll be in touch as soon as I can.</p></div> :
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="grid gap-5">
        <input type="hidden" name="form-name" value="contact" /><p hidden><label>Leave this blank: <input name="bot-field" /></label></p>
        <div className="grid gap-5 sm:grid-cols-2"><Field label="Your name" name="name" required /><Field label="Email address" name="email" type="email" required /></div>
        <Field label="Organisation (if relevant)" name="organization" />
        <div className="grid gap-2"><label htmlFor="service" className="text-sm">I'm interested in</label><select id="service" name="service" value={service} onChange={e => setService(e.target.value)} className="rounded-xl border border-input bg-background px-4 py-3 text-foreground"><option>Coaching</option><option>Consulting</option><option>Wellbeing / Massage</option><option>Pamper gathering</option><option>The Space to Lead</option><option>Something else</option></select></div>
        <div className="grid gap-2"><label htmlFor="message" className="text-sm">Tell me a little about what you're looking for</label><textarea id="message" name="message" rows={6} required placeholder="A little context is plenty to get us started." className="rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-foreground/60" /></div>
        <button type="submit" disabled={submitting} className="mt-2 inline-flex w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground disabled:opacity-60">{submitting ? "Sending…" : "Send enquiry"}</button>
        {submitError ? <p role="alert" className="text-sm text-destructive">{submitError} <a href={`mailto:${CONTACT_EMAIL}`} className="underline">Email me instead</a>.</p> : null}
        <p className="text-xs leading-relaxed text-muted-foreground">Your details will only be used to respond to your enquiry.</p>
      </form>}
    </div>
  </div></section></>;
}
function Field({label,name,type="text",required}:{label:string;name:string;type?:string;required?:boolean}) {
  return <div className="grid gap-2"><label htmlFor={name} className="text-sm">{label}</label><input id={name} name={name} type={type} required={required} className="rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-foreground/60" /></div>;
}
