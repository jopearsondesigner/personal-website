<!--src/routes/apps/+page.svelte-->
<script lang="ts">
	import '../../app.css';
	import Carousel from '$lib/components/carousels/Carousel.svelte';

	export const images = [
		{
			id: 0,
			name: 'InnerAnchor',
			description:
				'A mobile-first emotional regulation micro-tool designed to reduce cognitive load during moments of overwhelm, rejection sensitivity, and nervous-system activation. Designed the UX flow, interaction pacing, interface copy, visual direction, and front-end implementation using SvelteKit and CSS.',
			imgurl: '/images/the-validation-movement-inner-anchor.png',
			attribution: 'Jo Pearson',
			product: true,
			button: true,
			href: 'https://the-validation-movement.netlify.app/inner-anchor'
		},
		{
			id: 1,
			name: 'Evident Stack SaaS Demo',
			description:
				'A portfolio-safe SaaS product demo based on my Evident Stack interface work. Designed and implemented product UI for event-driven system modeling, including complex workflows, domain entities, timeline logic, and visual system interactions. Built with SvelteKit and deployed as a live demo to show design-to-front-end execution.',
			imgurl: '/images/evident-stack-link.png',
			attribution: 'Jo Pearson',
			product: true,
			button: true,
			href: 'https://evident-stack-demo.netlify.app/'
		}
	];
</script>

<div id="apps">
	<div class="bg-zinc-950">
		<div
			class="flex flex-wrap gap-2 mt-6 mb-4 justify-center text-[10px] md:text-xs uppercase tracking-widest"
		>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">UI/UX</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">Front-End</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">SvelteKit</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">SaaS</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">System Design</span>
		</div>

		<Carousel {images} showCaptions={true} />
	</div>
</div>
