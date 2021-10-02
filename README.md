# React Bricks starter vanilla React

This starter is aimed at users of [React Bricks](https://reactbricks.com) who need a vanilla React starter to integrate React Bricks into an existing React project, instead of starting from a Next.js or Gatsby starter.

It's useful to understand how React Bricks works in a simple environment.

## 🚀 Quick start

We suggest that you use the CLI and choose this starter.  
In this way you will have the credentials already set up in a `.env.local` file:

```bash
npx create-reactbricks-app
# or
yarn create reactbricks-app
```

Otherwise you can directly clone this repo:

```bash
git clone https://github.com/reactbricks/vanilla-starter-reactbricks your-project
```

## 📦 What's inside

This app is bootstrapped with create-react-app, with TypeScript and just two dependencies added:

- `@reach/router`
- `react-bricks`

The `admin` directory contains the Admin dashboard components (they are just a thin wrapper around React Bricks' exported components).

In the root directory you find two `Viewer` components to show content in your front-end:

- `ViewerHook` uses React Bricks' `usePage` hook to load the page content
- `ViewerFetch` uses React Bricks `fetchPage` function to load the page content

## 📖 Documentation

Please, read our documentation at [Reactbricks.com](https://reactbricks.com).
