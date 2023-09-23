<script lang="ts">
	import '../../app.css';
	import Carousel from '$lib/components/carousels/Carousel.svelte';

	export const images = [
		{
			id: 0,
			name: 'Evident Stack App',
			description:
				"Over a dedicated three-year period, I spearheaded the comprehensive development of Evident Stack, a cutting-edge SAAS product. My responsibilities encompassed UI/UX design, frontend development, and driving the product's evolution. Evident Stack, an open-source endeavor, empowers the design, implementation, and operation of event-based information systems based on event sourcing and domain-driven design. The product comprises distinct 'layers,' with the inaugural layer, Evident Design, inspired by Adam Dymitruk's 'Event Modeling' concept.",
			imgurl: 'images/evident-stack-link.png',
			attribution: 'Jo Pearson',
			product: true,
			button: true,
			href: 'https://app.evidentstack.com/'
		}
	];
</script>

<div id="apps">
	<div class="bg-zinc-950">
		<Carousel {images} showCaptions={true} />
	</div>
</div>
