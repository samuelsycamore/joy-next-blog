# Minimalist Joy UI Blog

## Features

✓ Built with TypeScript

✓ Designed with Joy UI's default styles

✓ Ready to publish with Next.js Markdown blog

✓ Light and dark modes, with dark by default

✓ Includes Prettier for code formatting

Created with 💙 by MUI.

## Getting started

Clone the repo, then run:

```
npm install
```

## Customizing

### Personalizing

Your blog's metadata lives in `/lib/siteMetaData.ts`.
Your personal contact info is in `/pages/contact.tsx`.
Edit these two files to make the site your own.

The blog's favicon is located in `/public/`.
Your avatar (for the Contact page) is in `/public/images/`.
This directory also contains generic Open Graph cards.
Replace these three images with your own.

### Publishing

Blog posts are written in Markdown (`.md`) and kept in the `/blog/` folder.
The demo blog posts contain common Frontmatter keys (`title`, `date`, `summary`, etc.), but you can add or remove as many as you like—just be sure to update `/pages/blog.tsx` and `/pages/blog/[id].tsx` to reflect any changes.

### Styling

This blog uses [Joy UI](https://mui.com/joy-ui/getting-started/overview/), a React component library maintained by [MUI](https://mui.com), the creators of [Material UI](https://mui.com/material-ui/getting-started-overview/).
