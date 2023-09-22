<script lang="ts">
	import '../../app.css';
	import Carousel from '$lib/components/carousels/Carousel.svelte';

	export const images = [
		{
			id: 0,
			name: 'Evident Stack Logo',
			description: 'Logo I created for our SAAS product, Evident Stack.',
			imgurl: 'images/evident-stack-logo.svg',
			attribution: 'Jo Pearson'
		},
		{
			id: 1,
			name: 'Evident Design Logo',
			description: 'Logo I created for the Evident Design layer of our product.',
			imgurl: 'images/evident-design-logo.svg',
			attribution: 'Jo Pearson'
		},
		{
			id: 2,
			name: 'Brand Guide',
			description: 'Example from the brand guide I put together for our product.',
			imgurl: 'images/evident-design-brand-guide.svg',
			attribution: 'Jo Pearson'
		},
		{
			id: 3,
			name: 'Team Collaboration Animation',
			description: 'Animation I made for marketing our product.',
			imgurl: 'images/collaboration-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: 'lottie/teamCollaborationHero.json'
		},
		{
			id: 4,
			name: 'Data Animation',
			description: 'Marketing animation I made for the Evident Data layer.',
			imgurl: 'images/data-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: 'lottie/DataAnimation.json'
		},
		{
			id: 5,
			name: 'Domain Functions Animation',
			description: 'Marketing animation I made for the Evident Domain Functions layer.',
			imgurl: 'images/domain-functions-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: 'lottie/DomainFunctionsAnimation.json'
		},
		{
			id: 6,
			name: 'Deploy Animation',
			description: 'Marketing animation I made for the Evident Deploy layer.',
			imgurl: 'images/deploy-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: 'lottie/DeployAnimation.json'
		},
		{
			id: 7,
			name: 'Database Animation',
			description: 'Marketing animation I made for the Evident Database layer.',
			imgurl: 'images/database-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: 'lottie/DatabaseAnimation.json'
		}
	];
</script>

<div id="branding">
	<div class="bg-zinc-950">
		<Carousel {images} showCaptions={true} />
	</div>
</div>
