import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SpaceBetweenMark } from "../components/space-between-mark";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-5xl text-foreground">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for isn't here. Let's find your way back.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl text-foreground">Something didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          A quiet pause — you can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Space Between — Coaching • Consulting • Wellbeing" },
      {
        name: "description",
        content:
          "Coaching, people-centred consulting and restorative wellbeing experiences. For the whole person, and everything in between.",
      },
      { property: "og:site_name", content: "The Space Between" },
      { property: "og:title", content: "The Space Between — Coaching • Consulting • Wellbeing" },
      { property: "og:description", content: "Space to pause. Perspective to move forward." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:url", content: "https://thespacebetween.dev/" },
      { property: "og:image", content: "https://thespacebetween.dev/Golden-Hour%20Coastal%20Wellbeing.png?v=2" },
      { property: "og:image:secure_url", content: "https://thespacebetween.dev/Golden-Hour%20Coastal%20Wellbeing.png?v=2" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "The Space Between coastal wellbeing branding at golden hour" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Space Between — Coaching • Consulting • Wellbeing" },
      { name: "twitter:description", content: "Space to pause. Perspective to move forward." },
      { name: "twitter:image", content: "https://thespacebetween.dev/Golden-Hour%20Coastal%20Wellbeing.png?v=2" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "icon", href: "/space-between-icon.svg?v=2", type: "image/svg+xml" },
      { rel: "shortcut icon", href: "/space-between-icon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/space-between-icon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/individuals", label: "Coaching" },
    { to: "/organisations", label: "Consulting" },
    { to: "/experiences", label: "Wellbeing" },
    { to: "/gift-vouchers", label: "Gift Vouchers" },
    { to: "/space-to-lead", label: "The Space to Lead" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <SpaceBetweenMark className="h-9 w-9 shrink-0" />
          <span className="font-serif text-lg tracking-tight text-foreground">
            The Space Between
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start a conversation
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
          </div>
        </button>
      </div>
      {open ? (
        <div className="border-t border-border md:hidden">
          <nav className="container-prose flex flex-col gap-3 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground"
            >
              Start a conversation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3"><SpaceBetweenMark className="h-11 w-11 shrink-0" /><p className="font-serif text-xl text-foreground">The Space Between</p></div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            For the whole person, and everything in between.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/organisations" className="text-foreground hover:text-terracotta">Consulting</Link></li>
            <li><Link to="/individuals" className="text-foreground hover:text-terracotta">Coaching</Link></li>
            <li><Link to="/experiences" className="text-foreground hover:text-terracotta">Wellbeing</Link></li>
            <li><Link to="/gift-vouchers" className="text-foreground hover:text-terracotta">Gift Vouchers</Link></li>
            <li><Link to="/space-to-lead" className="text-foreground hover:text-terracotta">The Space to Lead</Link></li>
            <li><Link to="/about" className="text-foreground hover:text-terracotta">About</Link></li>
            <li><Link to="/contact" className="text-foreground hover:text-terracotta">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Begin</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Not sure which offer fits? Start with a conversation and we can work out what would be most useful.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex rounded-full border border-foreground/30 px-4 py-2 text-xs text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Start a conversation
          </Link>
          <p className="mt-4 text-xs text-muted-foreground"><a href="mailto:thespacebetween.dev@gmail.com" className="underline underline-offset-4">thespacebetween.dev@gmail.com</a></p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-prose flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} The Space Between. All rights reserved.</p>
          <p className="font-serif italic">Clarity, courage and connection — in the moments that matter.</p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
