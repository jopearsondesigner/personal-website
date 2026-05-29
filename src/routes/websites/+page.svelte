<!--src/routes/websites/+page.svelte-->
<script lang="ts">
	import '../../app.css';
	import Carousel from '$lib/components/carousels/Carousel.svelte';

	export const images = [
		{
			id: 0,
			name: 'Wanderlust Travel Adventures',
			description:
				'Redesigned and developed a luxury-focused travel agency website centered on trust, visual storytelling, and inquiry conversion. Created a responsive front-end experience using HTML, CSS, GitHub, and Netlify, with an emphasis on premium branding, immersive imagery, and emotionally engaging user experience.',
			imgurl: '/images/wanderlust-travel-adventures.png',
			attribution: 'Jo Pearson',
			button: true,
			href: 'https://wanderlust-travel-adventures.netlify.app/'
		},
		{
			id: 1,
			name: 'The Validation Movement',
			description:
				'Designed and built a compassion-centered mental health landing page focused on reducing stigma around Borderline Personality Disorder through emotionally intelligent messaging, editorial visual direction, painterly atmosphere, responsive layout, and front-end implementation using SvelteKit, CSS, and Netlify.',
			imgurl: '/images/the-validation-movement-website.png',
			attribution: 'Jo Pearson',
			button: true,
			href: 'https://the-validation-movement.netlify.app/'
		},
		{
			id: 2,
			name: 'Evident Stack Website',
			description:
				'Designed and built the marketing website for Evident Stack, translating a complex SaaS product into a clear, polished web experience. Improved how the product was communicated publicly, making it easier for users and stakeholders to understand the platform’s value.',
			imgurl: '/images/evident-stack-website.svg',
			attribution: 'Jo Pearson',
			button: true,
			href: 'https://evident-stack.netlify.app/'
		},
		{
			id: 3,
			name: 'Evident Systems Website',
			description:
				'Designed and developed the company website for Evident Systems, delivering a complete build in under two days. Quickly established a professional online presence and enabled the company to present itself credibly to clients and partners.',
			imgurl: '/images/evident-systems-website.svg',
			attribution: 'Jo Pearson',
			button: true,
			href: 'https://evidentsystems.com/'
		}
	];
</script>

<div id="websites">
	<div class="bg-zinc-950">
		<div
			class="flex flex-wrap gap-2 mt-6 mb-4 justify-center text-[10px] md:text-xs uppercase tracking-widest"
		>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">Web Design</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">Front-End</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">Responsive</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">Marketing</span>
		</div>

		<Carousel {images} showCaptions={true} />
	</div>
</div>
