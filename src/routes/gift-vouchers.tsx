import { createFileRoute, Link } from "@tanstack/react-router";
import { SpaceBetweenMark } from "@/components/space-between-mark";

const checkoutUrl = "https://checkout.yourgift.cards/caf93502-1862-448a-b32a-81006ea05752";

export const Route = createFileRoute("/gift-vouchers")({
  head: () => ({ meta: [
    { title: "Massage Gift Vouchers — The Space Between" },
    { name: "description", content: "Give the gift of relaxation with an Indian Head Massage gift voucher in West Hove. Choose a 45-minute or 75-minute treatment and send an e-voucher." },
    { property: "og:title", content: "Massage Gift Vouchers — The Space Between" },
  ] }),
  component: GiftVouchers,
});

function GiftVouchers() {
  return (
    <>
      <section className="surface-warm py-20 md:py-28">
        <div className="container-prose grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">The Space Between • Gift vouchers</p>
            <h1 className="mt-5 text-4xl md:text-6xl">Give someone <span className="italic text-terracotta">a moment to pause.</span></h1>
            <p className="mt-6 font-serif text-xl leading-relaxed md:text-2xl">A thoughtful gift of time, care and relaxation.</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">Treat someone special to a restorative Indian Head Massage or a longer Head & Hand Massage. Choose a treatment, add a personal message and send a gift voucher by email.</p>
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground hover:opacity-90">Buy a gift voucher</a>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-[2rem] border border-foreground/10 bg-cream/80 px-8 py-14 text-center shadow-sm">
              <SpaceBetweenMark className="mx-auto h-20 w-20" />
              <p className="mt-6 font-serif text-2xl">The Space Between</p>
              <p className="mt-2 text-xs tracking-widest text-muted-foreground">COACHING • CONSULTING • WELLBEING</p>
              <div className="my-8 h-px bg-foreground/15" />
              <p className="font-serif text-4xl italic text-terracotta">Gift Voucher</p>
              <p className="mt-6 font-serif text-lg">Space to pause.<br />Perspective to move forward.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <p className="eyebrow">Choose their moment</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Two ways to unwind.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="flex flex-col rounded-[1.75rem] border border-border bg-card p-8">
              <p className="eyebrow">45 minutes • £45</p>
              <h3 className="mt-4 text-2xl">Indian Head Massage</h3>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">A nurturing seated treatment for the upper back, shoulders, neck, head and face. Aromatic oils are used on the skin, with oil-free techniques for the hair and head.</p>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Choose this gift</a>
            </article>
            <article className="flex flex-col rounded-[1.75rem] border border-border bg-card p-8">
              <p className="eyebrow">75 minutes • £60</p>
              <h3 className="mt-4 text-2xl">Indian Head &amp; Hand Massage</h3>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">A little extra time to relax, combining the seated Indian Head Massage with a soothing hand treatment — from head to fingertips.</p>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Choose this gift</a>
            </article>
          </div>
        </div>
      </section>
      <section className="surface-sage py-16 md:py-20">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-4 text-3xl">A gift that's easy to give.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Gift vouchers are delivered by email, with the option to add a personal message. The recipient can get in touch to arrange a suitable appointment. Treatments take place at my welcoming home sanctuary in West Hove; mobile appointments may be available by arrangement, with any travel charges agreed in advance.</p>
          <p className="mt-4 text-muted-foreground">Appointments are subject to availability. Voucher validity and full terms are shown at checkout.</p>
          <p className="mt-6 text-sm text-muted-foreground">Questions about booking or gifting? <a className="underline underline-offset-4" href="mailto:thespacebetween.dev@gmail.com">Get in touch</a>.</p>
          <Link to="/experiences" className="mt-7 inline-flex text-sm font-medium underline underline-offset-4">Explore all wellbeing experiences →</Link>
        </div>
      </section>
    </>
  );
}
