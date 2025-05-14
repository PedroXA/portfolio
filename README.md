# PORTFÓLIO

This is the latest version of my portfolio, built with **React**, **TypeScript**, **Vite**, and **TailwindCSS**.  
The project is still a work in progress — features and content will be added over time.

The purpose of this portfolio is to gather my journey as a developer in one place, including projects, experiences, and experiments. 🚀

---

## 🧠 Tech Stack

This project is based on the [React + TypeScript + Vite](https://vitejs.dev) template, with a minimal setup including:

- ✅ **React** (modern UI library)
- ⚡ **Vite** (lightning-fast bundler with HMR)
- 🎨 **TailwindCSS** (utility-first styling)
- 🔎 **ESLint** with recommended rules and optional TypeScript-aware config

---

## 📦 ESLint Configuration (optional for prod apps)

If you’re building a production-level application, here’s how you can enable type-aware linting with `@typescript-eslint`:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
