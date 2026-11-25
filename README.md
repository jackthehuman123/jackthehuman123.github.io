# Blog

A static Astro blog, hosted for free on GitHub Pages.

## Write a post

Add a Markdown file to `src/content/posts/`:

```md
---
title: My post
description: One line for the post list and link previews.
date: 2026-11-25
draft: false   # true hides it from the site
---

Your writing here.
```

Commit and push to `main`. GitHub Actions builds and deploys it in about a minute.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Change the name or links

Edit `src/site.ts`.
