<!--apps/+page.svelte-->
<script lang="ts">
	import '../../app.css';
	import Carousel from '$lib/components/carousels/Carousel.svelte';

	export const images = [
		{
			id: 0,
			name: 'Evident Stack App',
			description:
				'Led the design and front-end development of Evident Stack, a SaaS platform for building event-driven systems. Owned the UI from concept through implementation, creating a scalable interface that simplified complex domain modeling and system workflows. Helped translate highly technical architecture into a usable product experience.',
			imgurl: '/images/evident-stack-link.png',
			attribution: 'Jo Pearson',
			product: true,
			button: true,
			href: 'https://app.evidentstack.com/'
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
