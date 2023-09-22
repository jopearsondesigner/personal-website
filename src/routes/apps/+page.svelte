<script lang="ts">
	import '../../app.css';
	import Carousel from '$lib/components/carousels/Carousel.svelte';

	export const images = [
		{
			id: 0,
			name: 'Evident Stack App',
			description: 'Evident Stack',
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
