// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import Icons from 'unplugin-icons/vite';
import starlightVersions from 'starlight-versions';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: "https://scilus.github.io",
	base: "/sf-tractomics",
	integrations: [
		starlight({
			title: 'sf-tractomics',
			plugins: [
				// starlightVersions({
				// 	versions: [ ],
				// }),
			],
			logo: {
				light: './src/assets/logo_white.png',
				dark: './src/assets/logo_dark.png',
				replacesTitle: false,
			},
			social: [{ icon: 'github', label: 'sf-tractomics', href: 'https://github.com/scilus/sf-tractomics' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'How to run the pipeline?', slug: 'guides/installation' },
						{ label: 'Inputs', slug: 'guides/inputs' },
						{ label: 'Running the pipeline', slug: 'guides/usage' },
						{ label: 'Running with no internet access', slug: 'guides/nointernet' },
						{ label: "Parameters", slug: 'guides/parameters' },
						{ label: 'Outputs', slug: 'guides/outputs' },
						{ label: 'Frequently Asked Questions', slug: 'guides/faq' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
            customCss: [
                './src/styles/custom.css',
                './src/styles/global.css'
            ],
		}),
	],
	vite: {
		plugins: [Icons({ compiler: 'astro' }), tailwindcss()],
		server: {
			watch: {
				ignored: [
					"**/.pnpm-store/**/*",
					"**/node_modules/**/*"
				],
			},
		},
	},
});
