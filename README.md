# Portfolio

Next.js (App Router, JavaScript) + Tailwind CSS 3.4 (latest 3.x).

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build

Requires Node.js 20.9 or newer.

## Edit content
All personal content is in `data/profile.js`. Replace every [PLACEHOLDER].
Put your CV at `public/resume.pdf`.

## Colors
Roles are defined once in `app/globals.css` and mapped to semantic names in `tailwind.config.js`.
Use names like `bg-surface`, `text-muted`, `text-accent`, `border-border`. Never use raw hex or default Tailwind colors.
To change the accent, edit only the `--accent-*` scale in `app/globals.css`.
