<!--branding/+page.svelte-->
<script lang="ts">
	import '../../app.css';
	import Carousel from '$lib/components/carousels/Carousel.svelte';

	export const images = [
		{
			id: 0,
			name: 'Evident Stack Logo',
			description:
				'Brand identity for Evident Stack, a SaaS platform. Designed to communicate modular architecture, clarity, and scalability across product layers. Helped establish a clear product identity that made the system easier to understand and present to stakeholders.',
			imgurl: '/images/evident-stack-logo.svg',
			attribution: 'Jo Pearson'
		},
		{
			id: 1,
			name: 'Evident Design Logo',
			description:
				'Sub-brand identity for the design layer of Evident Stack. Built to visually distinguish creative tooling within a larger technical ecosystem. Helped separate product layers visually, improving clarity for both users and internal teams.',
			imgurl: '/images/evident-design-logo.svg',
			attribution: 'Jo Pearson'
		},
		{
			id: 2,
			name: 'Brand Guide',
			description:
				'Comprehensive brand system defining typography, color, and visual rules to ensure consistency across product, marketing, and engineering teams. Reduced visual inconsistency and enabled faster, more aligned design and development workflows.',
			imgurl: '/images/evident-design-brand-guide.svg',
			attribution: 'Jo Pearson'
		},
		{
			id: 3,
			name: 'Team Collaboration Animation',
			description:
				'Marketing animation illustrating real-time team collaboration. Created to simplify complex workflows for prospective users and stakeholders. Helped communicate product value quickly in demos and marketing contexts.',
			imgurl: '/images/collaboration-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: '/lottie/teamCollaborationHero.json'
		},
		{
			id: 4,
			name: 'Data Animation',
			description:
				'Explainer animation for the data layer of the platform, designed to make abstract system behavior more accessible and engaging. Made complex backend concepts easier to understand for non-technical audiences.',
			imgurl: '/images/data-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: '/lottie/DataAnimation.json'
		},
		{
			id: 5,
			name: 'Domain Functions Animation',
			description:
				'Visual explanation of domain-level functionality, helping communicate how business logic operates within the platform architecture. Improved clarity around system behavior during presentations and onboarding.',
			imgurl: '/images/domain-functions-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: '/lottie/DomainFunctionsAnimation.json'
		},
		{
			id: 6,
			name: 'Deploy Animation',
			description:
				'Animation highlighting deployment workflows, created to clarify technical processes for non-technical audiences. Helped bridge the gap between engineering and product understanding.',
			imgurl: '/images/deploy-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: '/lottie/DeployAnimation.json'
		},
		{
			id: 7,
			name: 'Database Animation',
			description:
				'Visual storytelling of database interactions, designed to make backend systems more intuitive for product and marketing use. Improved communication of technical concepts across teams.',
			imgurl: '/images/database-animation.svg',
			attribution: 'Jo Pearson',
			lottie: true,
			src: '/lottie/DatabaseAnimation.json'
		}
	];
</script>

<div id="branding">
	<div class="bg-zinc-950">
		<div
			class="flex flex-wrap gap-2 mt-6 mb-4 justify-center text-[10px] md:text-xs uppercase tracking-widest"
		>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">Branding</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">Identity</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">Motion</span>
			<span class="px-2 py-1 bg-zinc-800 text-zinc-300 rounded">Illustration</span>
		</div>

		<Carousel {images} showCaptions={true} />
	</div>
</div>
