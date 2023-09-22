<script lang="ts">
	import '../../app.css';
	import Carousel from '$lib/components/carousels/Carousel.svelte';

	export const images = [
		{
			id: 0,
			name: 'Evident Stack Website',
			description:
				'Website that I built for our SAAS product, Evident Stack. I did all of the design and development for it, including wireframes, custom icons, graphics, and animations.',
			imgurl: 'images/evident-stack-website.svg',
			attribution: 'Jo Pearson',
			button: true,
			href: 'https://evidentstack.com/'
		},
		{
			id: 1,
			name: 'Evident Systems Website',
			description: 'Website for Evident Systems LLC, I built it within two days.',
			imgurl: 'images/evident-systems-website.svg',
			attribution: 'Jo Pearson',
			button: true,
			href: 'https://evidentsystems.com/'
		}
	];
</script>

<div id="websites">
	<div class="bg-zinc-950">
		<Carousel {images} showCaptions={true} />
	</div>
</div>
