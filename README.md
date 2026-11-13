# LAGAIL CONTRACTORS - HTML/CSS/JS + Sanity + Netlify

site/    the website (plain HTML, CSS, JavaScript)
studio/  the Sanity admin where staff log in and add photos

## 1. Try the site
Open site/index.html (or use VS Code "Live Server"). It shows sample content until Sanity is connected.

## 2. Set up Sanity (the admin)
1. Create a free account and project at https://www.sanity.io/manage. Copy the **Project ID**.
2. Paste it in 3 places: `studio/sanity.config.js`, `studio/sanity.cli.js` and `site/js/main.js` (sanityProjectId).
3. In a terminal: `cd studio` then `npm install`, `npx sanity login`, `npx sanity deploy`.
   It gives you an admin address like https://lagail-admin.sanity.studio - put it in `site/js/main.js` (studioUrl).
4. In manage.sanity.io > your project > API > CORS origins, add your Netlify address (and http://localhost:5500 for testing).
5. Log in to the studio and fill **Website Settings** (name, phones, email, address, WhatsApp).

## 3. Put the site on Netlify
Upload this folder to GitHub, then in Netlify choose "Add new site > Import from Git" (publish folder `site` is already set in netlify.toml).
Or drag the `site` folder onto https://app.netlify.com/drop.

## 4. Add pictures of your work
Open the admin address > **Projects (Gallery)** > Create > add title, description, category and photo > **Publish**.
It appears on the website automatically (no redeploy needed). Services work the same way.

## Enquiries
The contact form uses Netlify Forms. See messages in Netlify > your site > Forms. Turn on email alerts there.
