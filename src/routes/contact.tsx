import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Landscape Conversation — The Space Between" },
      {
        name: "description",
        content:
          "Book a landscape conversation or enquire about individual coaching. The first conversation is simply a place to understand the landscape.",
      },
      { property: "og:title", content: "Contact — The Space Between" },
      {
        property: "og:description",
        content: "You do not need to have everything figured out before getting in touch.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [enquiryType, setEnquiryType] = useState<"organization" | "individual">("organization");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const form = event.currentTarget;
    const formData = Object.fromEntries(
      Array.from(new FormData(form).entries(), ([key, value]) => [key, String(value)]),
    );

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      form.reset();
      setSent(true);
    } catch {
      setSubmitError("Your message could not be sent. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="surface-warm">
        <div className="container-prose pb-16 pt-16 md:pb-20 md:pt-24">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] text-foreground md:text-6xl">
            Begin with a <span className="italic text-terracotta">conversation.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            You do not need to have everything figured out before getting in touch. The first
            conversation is simply a place to understand the landscape.
          </p>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="py-16">
        <div className="container-prose grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-border bg-card p-8">
            <p className="eyebrow">For organizations</p>
            <h2 className="mt-3 font-serif text-2xl text-foreground">
              Book a landscape conversation
            </h2>
            <p className="mt-3 text-muted-foreground">
              A grounded first step to understand where your organization is now and what may be
              needed.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-card p-8">
            <p className="eyebrow" style={{ color: "var(--rose)" }}>
              For individuals
            </p>
            <h2 className="mt-3 font-serif text-2xl text-foreground">
              Enquire about individual coaching
            </h2>
            <p className="mt-3 text-muted-foreground">
              A quiet space to share where you are and what you're curious about exploring.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="pb-24 md:pb-32">
        <div className="container-prose max-w-3xl">
          <div className="rounded-[1.5rem] border border-border bg-card p-6 md:p-10">
            {sent ? (
              <div className="py-12 text-center">
                <p className="eyebrow">Received</p>
                <h2 className="mt-4 font-serif text-3xl text-foreground">Thank you.</h2>
                <p className="mt-4 text-muted-foreground">
                  Your message has landed. I'll be in touch soon.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="grid gap-6"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out:
                    <input name="bot-field" />
                  </label>
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Organization (optional)" name="organization" />

                <fieldset className="grid gap-3">
                  <legend className="text-sm text-foreground">
                    Are you enquiring as an organization or an individual?
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {(["organization", "individual"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setEnquiryType(t)}
                        className={
                          "rounded-full border px-4 py-2 text-sm capitalize transition-colors " +
                          (enquiryType === t
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-foreground hover:border-foreground/50")
                        }
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="enquiryType" value={enquiryType} />
                </fieldset>

                <Field label="What kind of support are you looking for?" name="support" />

                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/60"
                    placeholder="Share as much or as little as feels right."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 inline-flex w-fit items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send message"}
                </button>
                {submitError ? (
                  <p role="alert" className="text-sm text-destructive">
                    {submitError}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-foreground/60"
      />
    </div>
  );
}
