<script lang="ts">
	import '../../app.css';
	import Carousel from '$lib/components/carousels/Carousel.svelte';

	export const images = [
		{
			id: 0,
			name: 'Evident Stack App',
			description:
				'A SAAS product a small team of us have been building, I worked on it for the last three years and was responsible for all the UI design, UX design, and frontend development. Evident Stack is a tool for designing, implementing, and operating event-based information systems (based on event sourcing and domain driven design). Our product features different “layers” or sub-products, the first layer—Evident Design—is based on the concept of “Event Modeling” developed by Adam Dymitruk. Evident Stack is now an open source project.',
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
