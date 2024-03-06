import type { Config } from "tailwindcss";

// const config: Config = {
  // content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  // theme: {
    // extend: {
      // backgroundImage: theme => ({
        // 'img-tarefas': "url('/imagens/background.png')"
      // })
    // },
  // },
  // plugins: [],
// };
// export default config;

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        'img-tarefas': "url('/images/background.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

