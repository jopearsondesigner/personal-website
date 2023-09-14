<script lang="ts">
	import '../../app.css';
	import Carousel from '$lib/components/carousels/Carousel.svelte';

	export const images = [
		{
			id: 0,
			name: 'Evident Stack Prototype',
			description: 'Prototype for our SAAS product Evident Stack.',
			imgurl: 'src/lib/assets/images/design-prototype.png',
			attribution: 'Jo Pearson',
			figma: true,
			button: true,
			href: 'https://www.figma.com/proto/5tW99kYwyM9ujR5c9IN1vN/Evident-Stack?type=design&node-id=2-13304&t=MQFndVuvnmnvWAen-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A13304&mode=design'
		},
		{
			id: 1,
			name: 'Evident Data Prototype',
			description: 'Prototype for our Evident Data layer.',
			imgurl: 'src/lib/assets/images/data-prototype.png',
			attribution: 'Jo Pearson',
			figma: true,
			button: true,
			href: 'https://www.figma.com/proto/5tW99kYwyM9ujR5c9IN1vN/Evident-Stack?type=design&node-id=2-17118&t=cKPTu1QG5QGGaVwZ-1&scaling=min-zoom&page-id=2%3A10673&starting-point-node-id=2%3A17118&mode=design'
		},
		{
			id: 2,
			name: 'Collaboration Feature Prototype',
			description: 'Prototype for upcoming new feature for Evident Stack.',
			imgurl: 'src/lib/assets/images/collaboration-prototype.png',
			attribution: 'Jo Pearson',
			figma: true,
			button: true,
			href: 'https://www.figma.com/proto/5tW99kYwyM9ujR5c9IN1vN/Evident-Stack?type=design&node-id=128-14339&t=z64P4288FnPTGk2o-1&scaling=min-zoom&page-id=2%3A6634&starting-point-node-id=128%3A14339&mode=design'
		}
	];
</script>

<div id="prototypes">
	<div class="bg-zinc-950">
		<Carousel {images} showCaptions={true} />
	</div>
</div>
