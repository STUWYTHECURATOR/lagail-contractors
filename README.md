# LAGAIL CONTRACTORS

The `site/` folder contains the public website. The `studio/` folder contains the Sanity admin project.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the contents of `site/` whenever a commit is pushed to `main`.

1. In the GitHub repository, open **Settings > Pages** and select **GitHub Actions** as the source.
2. Push changes to `main`. Check the **Actions** tab for deployment progress and the Pages URL.

## Local preview

Open `site/index.html` in a browser or use VS Code Live Server. Sample content is shown until Sanity is configured.

## Set up Sanity

1. Create a project at https://www.sanity.io/manage and copy its Project ID.
2. Set the project ID in `studio/sanity.config.js`, `studio/sanity.cli.js`, and `site/js/main.js`.
3. From `studio/`, run `npm install`, `npx sanity login`, and `npx sanity deploy`.
4. Add the website URL to the project's CORS origins in Sanity Manage.
5. In the deployed Studio, configure Website Settings and publish services and projects.

## Contact form

GitHub Pages is static hosting and does not process form submissions. The current contact form uses Netlify Forms, so it will need a separate form service to receive submissions when hosted on GitHub Pages. Phone, email, and WhatsApp contact links remain available.
