<!--prototypes/+page.svelte-->
<script lang="ts">
	import '../../app.css';
	import Carousel from '$lib/components/carousels/Carousel.svelte';

	export const images = [
		{
			id: 0,
			name: 'Evident Stack Prototype',
			description:
				'Interactive product prototype for Evident Stack, used to explore core workflows and communicate UI direction before development. Helped align stakeholders early and reduce uncertainty before engineering began.',
			imgurl: '/images/design-prototype.png',
			attribution: 'Jo Pearson',
			figma: true,
			button: true,
			href: 'https://www.figma.com/proto/5tW99kYwyM9ujR5c9IN1vN/Evident-Stack?type=design&node-id=2-13304&t=MQFndVuvnmnvWAen-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A13304&mode=design'
		},
		{
			id: 1,
			name: 'Evident Data Prototype',
			description:
				'Prototype for the data layer experience, designed to make complex system interactions easier to understand and navigate. Improved usability of abstract workflows by translating technical concepts into clear UI patterns.',
			imgurl: '/images/data-prototype.png',
			attribution: 'Jo Pearson',
			figma: true,
			button: true,
			href: 'https://www.figma.com/proto/5tW99kYwyM9ujR5c9IN1vN/Evident-Stack?type=design&node-id=2-17118&t=cKPTu1QG5QGGaVwZ-1&scaling=min-zoom&page-id=2%3A10673&starting-point-node-id=2%3A17118&mode=design'
		},
		{
			id: 2,
			name: 'Collaboration Feature Prototype',
			description:
				'Feature prototype focused on team collaboration, created to validate workflow ideas and improve cross-user interaction patterns. Helped identify usability gaps early and refine interaction flows before implementation.',
			imgurl: '/images/collaboration-prototype.png',
			attribution: 'Jo Pearson',
			figma: true,
			button: true,
			href: 'https://www.figma.com/proto/5tW99kYwyM9ujR5c9IN1vN/Evident-Stack?type=design&node-id=128-14339&t=z64P4288FnPTGk2o-1&scaling=min-zoom&page-id=2%3A6634&starting-point-node-id=128%3A14339&mode=design'
		}
	];
</script>

<div id="prototypes">
	<div class="bg-zinc-950">
		<div
			class="flex flex-wrap gap-2 mt-6 mb-4 justify-center text-[10px] md:text-xs uppercase tracking-widest"
		>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">UI/UX</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">Figma</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">Interaction Design</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">Product Thinking</span>
		</div>

		<Carousel {images} showCaptions={true} />
	</div>
</div>
