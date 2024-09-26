import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.flightschoolcrm.com/",
  integrations: [
    starlight({
      title: "FSCRM Docs",
      customCss: ["./src/styles/custom.css"],
      logo: { src: "./src/assets/rightruddermarketinglogosolo.png" },
      //social: {
      //	github: 'https://github.com/withastro/starlight',
      //},
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "How to get Flight School CRM",
              link: "/getting-started/how-to-get-fscrm",
            },
            {
              label: "Setup Onboarding",
              link: "https://rightruddermarketing.com/contact-us",
            }, //link to main site for calendly
            {
              label: "Quick Start Guide",
              link: "/getting-started/quick-start/",
            },
            { label: "FAQs", link: "/getting-started/faq/" },
            {
              label: "Support Ticket",
              link: "https://rightruddermarketing.com/contact-us",
            }, //link to main site for support ticket
          ],
        },
        {
          label: "How To Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Features",
          autogenerate: { directory: "features" },
        },
        {
          label: "Integrations",
          autogenerate: { directory: "integrations" },
        },
      ],
      head: [
        // Facebook Pixel script tag
        {
          tag: "script",
          content: `
						!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window, document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '270139129390160');
						fbq('track', 'PageView');
					`,
        },
        // Facebook Pixel noscript tag
        {
          tag: "noscript",
          content: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=270139129390160&ev=PageView&noscript=1" />`,
        },
        // Google Analytics script tag
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-TMQCYK3TE3",
          },
        },
        // Google Analytics script tag
        {
          tag: "script",
          content: `window.dataLayer = window.dataLayer || [];
  					function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-TMQCYK3TE3');`,
        },
      ],
    }),
  ],
});
