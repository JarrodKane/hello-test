This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

Built out the basic webpage.
The data.json holds all of the data and it's called on the one page.
I wanted to keep using the app router, even though I'm only using one page.
I made some assumptions for the data that some data would always be there, in improvements I would add in some type safety to make sure that the data is there.

The data is then mapped over, and put through a render component, that then will grab either special components or create a generic one by using compound components.
Not all of the dynamic data and styles have been applied yet from the design. Weighting of texts, etc...

One of the main things I like to do is keep it consistent and resuse components. With the designs since bits were just a little different here and there. I tried to keep it consistent as I could while also allowing for custom designs. Adding in the custom brand colors and sizes helped get closer to what were in the designs.

## What I would do next

- Clean up of components
- Add in the rest of the dynamic data and styles
- reduce complexity with some of the components
- Consistency between styling and components - To reduce down on arbitrary values from a user
- Improve types
- Improve type safety
- tests

## Issues

I had issues trying to make dynamic tailwind classes that would take in the input from the data. I overcomplicated it at first, so took a step back to just create the MVP first before delving into what's going on when I have time.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
