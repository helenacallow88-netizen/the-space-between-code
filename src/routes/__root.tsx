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
      { title: "The Space Between — People-Centred Change Facilitation" },
      {
        name: "description",
        content:
          "Helping mission-led organisations move through change without leaving their people behind. People-centred change facilitation, listening spaces and coaching.",
      },
      { property: "og:title", content: "The Space Between — People-Centred Change Facilitation" },
      {
        property: "og:description",
        content:
          "Bridging the gap between leadership intention and employee experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Space Between — People-Centred Change Facilitation" },
      { name: "description", content: "Helping mission-led organisations move through change without leaving their people behind. People-centred change facilitation, listening spaces and coaching." },
      { property: "og:description", content: "Helping mission-led organisations move through change without leaving their people behind. People-centred change facilitation, listening spaces and coaching." },
      { name: "twitter:description", content: "Helping mission-led organisations move through change without leaving their people behind. People-centred change facilitation, listening spaces and coaching." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9e2b2915-6e07-4968-ba3c-4d496f9df252/id-preview-f78cd0cc--9c1249b2-1d49-48b7-aa2c-8e99cf70a117.lovable.app-1783266273976.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9e2b2915-6e07-4968-ba3c-4d496f9df252/id-preview-f78cd0cc--9c1249b2-1d49-48b7-aa2c-8e99cf70a117.lovable.app-1783266273976.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
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
    { to: "/organisations", label: "For Organisations" },
    { to: "/individuals", label: "For Individuals" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
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
            Book a conversation
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
              Book a conversation
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
          <p className="font-serif text-xl text-foreground">The Space Between</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            People-centred change facilitation for mission-led organisations.
            Coaching for people navigating identity, belonging and transition.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/organisations" className="text-foreground hover:text-terracotta">For Organisations</Link></li>
            <li><Link to="/individuals" className="text-foreground hover:text-terracotta">For Individuals</Link></li>
            <li><Link to="/about" className="text-foreground hover:text-terracotta">About</Link></li>
            <li><Link to="/contact" className="text-foreground hover:text-terracotta">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Begin</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Every engagement starts with a landscape conversation — a grounded
            first step to understand where you are and what may be needed.
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex rounded-full border border-foreground/30 px-4 py-2 text-xs text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Book a landscape conversation
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-prose flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} The Space Between. All rights reserved.</p>
          <p className="font-serif italic">Between what was, and what comes next.</p>
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
