<script lang="ts">
	import '../../app.css';
	import Carousel from '$lib/components/carousels/Carousel.svelte';

	export const images = [
		{
			id: 0,
			name: 'Evident Stack Logo',
			description: 'Logo I created for our SAAS product, Evident Stack.',
			imgurl: 'src/lib/assets/images/evident-stack-logo.svg',
			attribution: 'Jo Pearson'
			// button: true,
			// href: 'https://evidentstack.com/'
		},
		{
			id: 1,
			name: 'Evident Design Logo',
			description: 'Logo I created for the Evident Design layer of our product.',
			imgurl: 'src/lib/assets/images/evident-design-logo.svg',
			attribution: 'Jo Pearson'
		},
		{
			id: 2,
			name: 'Brand Guide',
			description: 'Example from the brand guide I put together for our product.',
			imgurl: 'src/lib/assets/images/evident-design-brand-guide.svg',
			attribution: 'Jo Pearson'
		},
		{
			id: 3,
			name: 'Team Collaboration Animation',
			description: 'Animation I made for marketing our product.',
			imgurl: 'src/lib/assets/images/collaboration-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: 'src/lib/assets/lottie/teamCollaborationHero.json'
		},
		{
			id: 4,
			name: 'Data Animation',
			description: 'Marketing animation I made for the Evident Data layer.',
			imgurl: 'src/lib/assets/images/data-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: 'src/lib/assets/lottie/DataAnimation.json'
		},
		{
			id: 5,
			name: 'Domain Functions Animation',
			description: 'Marketing animation I made for the Evident Domain Functions layer.',
			imgurl: 'src/lib/assets/images/domain-functions-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: 'src/lib/assets/lottie/DomainFunctionsAnimation.json'
		},
		{
			id: 6,
			name: 'Deploy Animation',
			description: 'Marketing animation I made for the Evident Deploy layer.',
			imgurl: 'src/lib/assets/images/deploy-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: 'src/lib/assets/lottie/DeployAnimation.json'
		},
		{
			id: 7,
			name: 'Database Animation',
			description: 'Marketing animation I made for the Evident Database layer.',
			imgurl: 'src/lib/assets/images/database-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: 'src/lib/assets/lottie/DatabaseAnimation.json'
		}
	];
</script>

<div id="branding">
	<div class="bg-zinc-950">
		<Carousel {images} showCaptions={true} />
	</div>
</div>

<!-- classSlide="flex items-center justify-center h-full w-full !rounded-none !bg-transparent"
classDiv="w-full  !h-auto sm:!h-[500px] !rounded-none !bg-transparent"
imgFit="cover"
classImg="!bg-none !rounded-md animate-[fadeIn_.5s_ease-in-out_1] h-full"
classThumb="p-0 rounded-md shadow-xl hover:outline hover:outline-primary-500"
classThumbDiv="bg-transparent"
thumbBtnClass="m-2"
captionClass="bg-transparent absolute -mt-10 w-full top-0 h-10 !text-zinc-900 p-2 mb-2 text-left" -->
