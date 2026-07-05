# Publishing the website

## How updates reach the website

The normal publishing flow is:

1. Helena edits and publishes the project in Lovable.
2. Lovable syncs the update to the `helenacallow88-netizen/the-space-between-code` repository on GitHub.
3. Netlify notices the GitHub update, runs `npm run build`, and publishes `dist/client`.
4. The latest version appears on the custom domain.

In Lovable, check **Settings → Connectors → GitHub** and confirm that this project is connected to the repository above. In Netlify, confirm that the production branch is the same branch Lovable updates (normally `main`).

## First Netlify setup

1. In Netlify, choose **Add new project → Import an existing project**.
2. Connect GitHub and select `helenacallow88-netizen/the-space-between-code`.
3. Select the branch Lovable updates, normally `main`.
4. Netlify reads the build settings from `netlify.toml`: build command `npm run build`, publish directory `dist/client`, and Node.js 22.
5. Deploy the project.

Every later push to that GitHub branch triggers a new Netlify deployment automatically.

## Custom domain

In Netlify, open **Domain management → Add a domain** and enter Helena’s domain. Follow Netlify’s DNS instructions at the domain registrar.

Netlify DNS is the simplest option for a new setup. If the domain already has email or other important DNS records, keep the current DNS provider and add only the records Netlify requests so those services are not disturbed.

## Contact form and email notifications

The contact page submits directly to Netlify Forms. It does not use an email provider or store any API keys.

After the first deployment:

1. Open the live Netlify URL and send a test message from the contact page.
2. In Netlify, open **Forms** and confirm that the `contact` form and test submission appear.
3. Open the form notification settings and add an email notification for Helena’s email address.
4. Send a second test message and confirm that Helena receives it.

Netlify controls form notification email; changing the email recipient does not require a code change.

## If Lovable stops syncing

First confirm that Lovable is still connected to the correct GitHub repository and that Netlify watches the same branch. If the current Lovable plan does not support GitHub sync, export the code from Lovable, commit and push it to the watched GitHub branch manually. Netlify will still deploy each GitHub update.

Do not force-push or rewrite published Git history. Lovable relies on that history to keep the project in sync.
