import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SpaceBetweenMark } from "@/components/space-between-mark";

const checkoutUrl = "https://checkout.yourgift.cards/caf93502-1862-448a-b32a-81006ea05752";

export const Route = createFileRoute("/gift-vouchers")({
  head: () => ({ meta: [
    { title: "Gift Vouchers — The Space Between" },
    { name: "description", content: "Give the gift of massage or a private pamper gathering in West Hove with The Space Between." },
    { property: "og:title", content: "Gift Vouchers — The Space Between" },
  ] }),
  component: GiftVouchers,
});

function GiftVouchers() {
  const [promo, setPromo] = useState(false);
  useEffect(() => {
    const start = Date.parse("2026-11-27T00:00:00Z");
    const end = Date.parse("2026-11-30T00:00:00Z");
    let timer: ReturnType<typeof setTimeout> | undefined;
    const refresh = () => {
      if (timer !== undefined) clearTimeout(timer);
      const now = Date.now();
      setPromo(now >= start && now < end);
      const next = now < start ? start : now < end ? end : null;
      if (next !== null) timer = setTimeout(refresh, Math.min(next - now, 2147483647));
    };
    refresh();
    window.addEventListener("focus", refresh);
    return () => { if (timer !== undefined) clearTimeout(timer); window.removeEventListener("focus", refresh); };
  }, []);
  const allOffers = checkoutUrl + "?productId=c3345933-3d42-431a-7d36-08df4aeda3a8,cf1f00d3-64e6-4099-7d37-08df4aeda3a8,e076eafb-59a1-4c22-7d3b-08df4aeda3a8,f8b581a1-cb67-4b0e-55e4-08df4af4958b,9f9d8c68-1e4d-4c92-7d3e-08df4aeda3a8&language=en-GB";
  const massageOffers = checkoutUrl + "?productId=c3345933-3d42-431a-7d36-08df4aeda3a8,cf1f00d3-64e6-4099-7d37-08df4aeda3a8&language=en-GB";
  const gatheringOffers = checkoutUrl + "?productId=e076eafb-59a1-4c22-7d3b-08df4aeda3a8,f8b581a1-cb67-4b0e-55e4-08df4af4958b,9f9d8c68-1e4d-4c92-7d3e-08df4aeda3a8&language=en-GB";
  return (
    <>
      <section className="surface-warm py-20 md:py-28">
        <div className="container-prose grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">The Space Between • Gift vouchers</p>
            {promo && <p className="mt-4 text-sm font-medium text-terracotta">Black Friday gift voucher offers • 27–29 November</p>}
            <h1 className="mt-5 text-4xl md:text-6xl">{promo ? <>Give a little space <span className="italic text-terracotta">this Christmas.</span></> : <>Give someone <span className="italic text-terracotta">a moment to pause.</span></>}</h1>
            <p className="mt-6 font-serif text-xl leading-relaxed md:text-2xl">A thoughtful gift of time, care and relaxation.</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">Treat someone special to a restorative massage or give friends and loved ones a private pamper gathering. Choose an experience, add a personal message and send a gift voucher by email.</p>
            <a href={promo ? allOffers : checkoutUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground hover:opacity-90">Buy a gift voucher</a>
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
          <h2 className="mt-4 text-3xl md:text-4xl">A little space for yourself.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="flex flex-col rounded-[1.75rem] border border-border bg-card p-8">
              <img src="/Warm%20Spa%20Neck%20Massage%20Retreat%20(1).png" alt="Seated Indian Head Massage focusing on shoulders and upper back" className="mb-6 aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
              <p className="eyebrow">45 minutes • {promo ? <><s>£45</s> £40</> : "£45"}</p>
              <h3 className="mt-4 text-2xl">Indian Head Massage</h3>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">A nurturing seated treatment for the upper back, shoulders, neck, head and face. Aromatic oils are used on the skin, with oil-free techniques for the hair and head.</p>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Choose this gift</a>
            </article>
            <article className="flex flex-col rounded-[1.75rem] border border-border bg-card p-8">
              <img src="/hand_massage_website%20(1).png" alt="Seated hand massage with supported forearms" className="mb-6 aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
              <p className="eyebrow">75 minutes • {promo ? <><s>£60</s> £55</> : "£60"}</p>
              <h3 className="mt-4 text-2xl">Indian Head &amp; Hand Massage</h3>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">A little extra time to relax, combining the seated Indian Head Massage with a soothing hand treatment — from head to fingertips.</p>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Choose this gift</a>
            </article>
          </div>
        </div>
      </section>
      <section className="surface-clay py-16 md:py-24">
        <div className="container-prose">
          <p className="eyebrow">Private pamper gathering • West Hove</p>
          <h2 className="mt-4 text-3xl md:text-5xl">A Little Space <span className="italic text-terracotta">Together.</span></h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">Give the gift of time together. A cosy, alcohol-free gathering for friends and loved ones, with a 30-minute Indian Head or Hand Massage for each guest, welcome smoothies, herbal teas and homemade treats.</p>
          <img src="/a_little_space_together_stripe.jpg" alt="Candlelit pamper gathering setting with refreshments and towels" className="mx-auto mt-8 w-full max-w-3xl rounded-[1.75rem]" loading="lazy" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[4, 5, 6].map(count => <article key={count} className="rounded-[1.5rem] border border-border bg-card p-6">
              <p className="eyebrow">{count} guests • One private gathering</p>
              <p className="mt-3 font-serif text-3xl text-terracotta">{promo ? <><s className="mr-2 text-lg text-muted-foreground">£{count * 45}</s>£{count * 40}</> : <>£{count * 45}</>}</p>
            </article>)}
          </div>
          <p className="mt-5 text-muted-foreground">Your voucher covers the whole group. Get in touch after purchase to arrange a mutually convenient date. My resident cat Rey lives at the sanctuary; please consider any guest allergies.</p>
          <a href={promo ? gatheringOffers : checkoutUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Choose a gathering gift voucher</a>
          <Link to="/experiences" className="ml-4 mt-5 inline-flex text-sm underline underline-offset-4">Explore wellbeing experiences</Link>
        </div>
      </section>
      <section className="surface-sage py-16 md:py-20">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow">Good to know</p>
          <h2 className="mt-4 text-3xl">A gift that's easy to give.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Gift vouchers are delivered by email, with the option to add a personal message. The recipient can get in touch to arrange a suitable appointment. Treatments take place at my welcoming home sanctuary in West Hove; mobile appointments may be available by arrangement, with any travel charges agreed in advance.</p>
          <p className="mt-4 text-muted-foreground">Gift vouchers are valid for 12 months from purchase. Appointments and gathering dates are subject to availability. Full terms are shown at checkout.</p>
          <p className="mt-6 text-sm text-muted-foreground">Questions about booking or gifting? <a className="underline underline-offset-4" href="mailto:thespacebetween.dev@gmail.com">Get in touch</a>.</p>
          <Link to="/experiences" className="mt-7 inline-flex text-sm font-medium underline underline-offset-4">Explore all wellbeing experiences →</Link>
        </div>
      </section>
    </>
  );
}
