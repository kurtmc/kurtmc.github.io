import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kurt McAlpine",
  description: "My personal website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Cheat Sheets',
        items: [
          { text: 'Vim', link: '/vim-cheat-sheet' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'curriculum vitae',
        items: [
          { text: 'cv', link: '/cv' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kurtmc' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/kurt-mcalpine' },
    ]
  }
})
