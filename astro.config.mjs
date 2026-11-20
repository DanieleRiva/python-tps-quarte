import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import remarkGfm from 'remark-gfm';

export default defineConfig({
	// Il sito è pubblicato su GitHub Pages come "project site", quindi vive
	// sotto /python-tps-quarte/ e non alla radice del dominio.
	site: 'https://danieleriva.github.io',
	base: '/python-tps-quarte',
	markdown: {
		remarkPlugins: [remarkGfm],
	},
	integrations: [
		starlight({
			title: 'Python · Guida quarta',
			customCss: [
				'./src/custom.css',
			],
			defaultLocale: 'root',
			locales: {
				root: { label: 'Italiano', lang: 'it' },
			},
			description: 'Guida completa a Python per gli studenti di quarta informatica: teoria, esempi, librerie UI e progetto finale.',
			plugins: [
				starlightThemeNova(),
			],
			head: [
				{
					tag: 'script',
					content: `
                        function initProgressBar() {
                            let bar = document.getElementById('scroll-progress');
                            if (!bar) {
                                bar = document.createElement('div');
                                bar.id = 'scroll-progress';
                                bar.style.position = 'fixed';
                                bar.style.top = '0';
                                bar.style.left = '0';
                                bar.style.height = '4px';
                                bar.style.backgroundColor = 'var(--sl-color-accent)';
                                bar.style.zIndex = '9999';
                                bar.style.width = '0%';
                                bar.style.transition = 'width 0.1s ease-out';
                                document.body.appendChild(bar);
                            }
                            window.addEventListener('scroll', () => {
                                const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
                                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                                if (height > 0) {
                                    const scrolled = (winScroll / height) * 100;
                                    bar.style.width = scrolled + '%';
                                } else {
                                    bar.style.width = '0%';
                                }
                            });
                        }
                        document.addEventListener('DOMContentLoaded', initProgressBar);
                    `
				}
			],
			sidebar: [
				{
					label: '🏁 Introduzione',
					items: [
						{ label: 'Introduzione a Python', link: '/' },
					],
				},
				{
					label: '📘 Fondamenti',
					items: [
						{ label: 'Variabili e tipi di dato', link: '/variabili/' },
						{ label: 'Operatori', link: '/operatori/' },
						{ label: 'Controllo di flusso', link: '/controllo/' },
						{ label: 'Cicli', link: '/cicli/' },
						{ label: 'Funzioni', link: '/funzioni/' },
					],
				},
				{
					label: '🧰 Strumenti del linguaggio',
					items: [
						{ label: 'Strutture dati', link: '/strutture/' },
						{ label: 'Moduli e librerie standard', link: '/moduli/' },
						{ label: 'File ed eccezioni', link: '/file/' },
					],
				},
				{
					label: '🖼️ Interfacce grafiche',
					items: [
						{ label: 'tkinter (introduzione)', link: '/tkinter/' },
						{
							label: 'Widget',
							collapsed: true,
							items: [
								{ label: 'Label', link: '/tkinter/label/' },
								{ label: 'Button', link: '/tkinter/button/' },
								{ label: 'Entry', link: '/tkinter/entry/' },
								{ label: 'Frame', link: '/tkinter/frame/' },
								{ label: 'Canvas', link: '/tkinter/canvas/' },
								{ label: 'Text', link: '/tkinter/text/' },
								{ label: 'Checkbutton', link: '/tkinter/checkbutton/' },
								{ label: 'Radiobutton', link: '/tkinter/radiobutton/' },
								{ label: 'Listbox', link: '/tkinter/listbox/' },
								{ label: 'Menu', link: '/tkinter/menu/' },
								{ label: 'Scrollbar', link: '/tkinter/scrollbar/' },
								{ label: 'Scale', link: '/tkinter/scale/' },
								{ label: 'Spinbox', link: '/tkinter/spinbox/' },
							],
						},
						{
							label: 'Layout manager',
							collapsed: true,
							items: [
								{ label: 'pack', link: '/tkinter/pack/' },
								{ label: 'grid', link: '/tkinter/grid/' },
								{ label: 'place', link: '/tkinter/place/' },
							],
						},
						{ label: 'Immagini e asset', link: '/tkinter/immagini/' },
					],
				},
				{
					label: '⚙️ Ambiente di sviluppo',
					items: [
						{ label: 'Ambienti virtuali (venv)', link: '/venv/' },
						{ label: 'pip e requirements.txt', link: '/pip/' },
					],
				},
				{
					label: '🎯 Progetto finale',
					items: [
						{ label: 'Consegna e valutazione', link: '/progetto/' },
					],
				},
			],
		}),
	],
});
