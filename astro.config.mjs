// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import Icons from 'unplugin-icons/vite';
import starlightVersions from 'starlight-versions';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: "https://scilus.github.io",
	base: "/sf-tractomics",
	integrations: [
		starlight({
			title: 'sf-tractomics',
			plugins: [
				starlightThemeGalaxy()
			],
			logo: {
				light: './src/assets/logo_white.png',
				dark: './src/assets/logo_dark.png',
				replacesTitle: false,
			},
			social: [{ icon: 'github', label: 'sf-tractomics', href: 'https://github.com/scilus/sf-tractomics' }],
			sidebar: [
				{
					label: 'User Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', slug: 'user_guides/installation' },
						{ label: 'Prepare your input data', slug: 'user_guides/inputs' },
						{ label: 'Running the pipeline', slug: 'user_guides/usage' },
						{ label: "Parameters reference", slug: 'user_guides/parameters' },
						{ label: 'Understand the outputs', slug: 'user_guides/outputs' },
						{ label: 'Troubleshooting', slug: 'user_guides/troubleshooting' },
						{ label: 'Frequently Asked Questions', slug: 'user_guides/faq' },
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
