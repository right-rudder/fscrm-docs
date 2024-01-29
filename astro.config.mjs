import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Flight School CRM Documentation',
			//social: {
			//	github: 'https://github.com/withastro/starlight',
			//},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'How to get Flight School CRM', link: './getting-started/how-to-get-fscrm' },
            { label: 'Setup Onboarding', link: 'https://flightschoolcrm.com/contact' }, //link to main site for calendly
            { label: 'Quick Start Guide', link: './getting-started/quick-start/' },
            { label: 'FAQs', link: './getting-started/faq/' },
            { label: 'Support Ticket', link: 'https://flightschoolcrm.com/contact' }, //link to main site for support ticket
					],
				},
        {
					label: 'How To Guides',
					autogenerate: { directory: 'guides' },
				},
        {
					label: 'Features',
					autogenerate: { directory: 'features' },
				},
        {
					label: 'Integrations',
					autogenerate: { directory: 'integrations' },
				},
			],
		}),
	],
});
