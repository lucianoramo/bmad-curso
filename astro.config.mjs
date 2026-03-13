import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'BMAD Curso',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Português (Brasil)', lang: 'pt-BR' },
      },
      sidebar: [
        {
          label: 'Introdução',
          items: [
            { label: 'Tutorial — BMAD na Prática', slug: 'tutorial' },
          ],
        },
      ],
    }),
  ],
});
