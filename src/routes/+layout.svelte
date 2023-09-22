<script lang="ts">
	import '../app.css';
	import {
		Dropdown,
		DropdownItem,
		DropdownDivider,
		Button,
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon,
		ImagePlaceholder,
		// Modal,
		ListPlaceholder,
		Label,
		Input,
		InputAddon,
		ButtonGroup,
		Textarea
	} from 'flowbite-svelte';

	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import Player from '$lib/components/Player.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import NavBrand from '$lib/components/navbar/NavBrand.svelte';
	import NavLi from '$lib/components/navbar/NavLi.svelte';
	import NavUl from '$lib/components/navbar/NavUl.svelte';
	import NavHamburger from '$lib/components/navbar/NavHamburger.svelte';

	let carousel: { goToNext: () => void }; // for calling methods of the carousel instance

	const handleNextClick = () => {
		carousel.goToNext();
	};

	import { Icon } from 'flowbite-svelte-icons';
	// import { EnvelopeSolid } from 'flowbite-svelte-icons';
	$: activeUrl = $page.url.pathname;

	let formModal = false;

	// import { images } from './imageData/+server.js';
	let showThumbs = false;
	let showCaptions = false;

	import { Tabs, TabItem } from 'flowbite-svelte';

	export const images = [
		{
			id: 0,
			name: 'Jo Pearson Designer',
			imgurl: 'images/slide-logo.svg',
			attribution: 'Jo Pearson'
		},
		{
			id: 1,
			name: 'Evident Stack Code',
			imgurl: 'images/slide-evident-stack.png',
			attribution: 'Jo Pearson'
		},
		{
			id: 2,
			name: 'Evident Database Animation',
			imgurl: 'images/DatabaseAnimation-1600x1064.gif',
			attribution: 'Jo Pearson'
		}
	];

	import { page } from '$app/stores';
	let path: string;

	$: path = $page.url.pathname;

	// let textareaprops = {
	// 	id: 'message',
	// 	name: 'message',
	// 	label: 'Your message',
	// 	rows: 4,
	// 	placeholder: 'Leave a comment...'
	// };

	let open = false;
</script>

<Navbar
	class="!bg-zinc-950 sticky w-full z-50 top-0 left-0 border-b border-zinc-700"
	let:hidden
	let:toggle
>
	<NavBrand href="/" class="ml-4">
		<img src="images/icon-logo.svg" class="mr-4 h-6 sm:h-9" alt="Jo Pearson Designer Logo" />
		<span
			class="self-center whitespace-nowrap lg:text-4xl text-xl font-bold tracking-widest font-header text-zinc-400 uppercase"
			>Jo<span class="text-zinc-600">Pearson</span><span class="text-zinc-800">Designer</span></span
		>
	</NavBrand>
	<div class="flex md:order-2">
		<Button
			size="sm"
			class="hidden lg:block !ring-1 !ring-[#ffebb1] !bg-gradient-to-t !from-[#ffebb1] !via-[#ffebb1] !via-20% !to-[#fff] hover:!bg-gradient-to-t hover:!from-[#ffebb1] hover:!via-[#ffebb1] hover:!via-80% hover:!to-[#fff] !text-zinc-600 !text-xs uppercase !rounded"
			on:click={() => (formModal = true)}>Contact me</Button
		>
		<NavHamburger on:click={toggle} class="hover:bg-zinc-900 focus-visible:ring-0" />
	</div>
	<NavUl
		class="order-1"
		classUl="bg-zinc-950 md:border-transparent border-zinc-500"
		{hidden}
		{activeUrl}
	>
		<NavLi
			id="nav-menu1"
			class="cursor-pointer text-zinc-500 hover:text-zinc-400 hover:bg-zinc-900  md:mt-0 mt-3 md:mx-0 mx-2"
		>
			Portfolio<Icon name="chevron-down-outline" class="w-2 h-2 ml-2 text-zinc-600 inline" />
		</NavLi>
		<Dropdown triggeredBy="#nav-menu1" class="w-auto z-20 !bg-zinc-950 border border-zinc-600 p-2">
			{#if path === '/branding'}
				<DropdownItem class="text-zinc-400 bg-zinc-500/20 pointer-events-none"
					>Branding & Design</DropdownItem
				>
			{:else}
				<DropdownItem class="text-zinc-400 hover:bg-zinc-500/20" href="/branding#portfolio"
					>Branding & Design</DropdownItem
				>
			{/if}
			{#if path === '/prototypes'}
				<DropdownItem class="text-zinc-400 bg-zinc-500/20 pointer-events-none"
					>Wireframes & Prototypes</DropdownItem
				>
			{:else}
				<DropdownItem class="text-zinc-400 hover:bg-zinc-500/20" href="/prototypes#portfolio"
					>Wireframes & Prototypes</DropdownItem
				>
			{/if}
			{#if path === '/websites'}
				<DropdownItem class="text-zinc-400 bg-zinc-500/20 pointer-events-none"
					>Website Projects</DropdownItem
				>
			{:else}
				<DropdownItem class="text-zinc-400 hover:bg-zinc-500/20" href="/websites#portfolio"
					>Website Projects</DropdownItem
				>
			{/if}
			{#if path === '/apps'}
				<DropdownItem class="text-zinc-400 bg-zinc-500/20 pointer-events-none"
					>App Projects</DropdownItem
				>
			{:else}
				<DropdownItem class="text-zinc-400 hover:bg-zinc-500/20" href="/apps#portfolio"
					>App Projects</DropdownItem
				>
			{/if}
			<!-- <DropdownDivider class="!bg-zinc-700" /> -->
		</Dropdown>
		<NavLi href="#about-me" class="text-zinc-500 hover:text-zinc-400 hover:bg-zinc-900 md:mx-0 mx-2"
			>About me</NavLi
		>
		<!-- <NavLi href="#skills" class="text-zinc-500 hover:text-zinc-400 hover:bg-zinc-900">Skills</NavLi> -->
		<NavLi
			href="#resume"
			class="text-zinc-500 hover:text-zinc-400 hover:bg-zinc-900 md:mx-0 mx-2"
			on:click={() => (open = true)}>Résumé</NavLi
		>
		<NavLi class="flex items-center justify-center px-4 pt-4 pb-2">
			<Button
				size="sm"
				class="md:hidden block !ring-1 !ring-[#ffebb1] !bg-gradient-to-t !from-[#ffebb1] !via-[#ffebb1] !via-20% !to-[#fff] hover:!bg-gradient-to-t hover:!from-[#ffebb1] hover:!via-[#ffebb1] hover:!via-80% hover:!to-[#fff] !text-zinc-600 !text-xs uppercase !rounded"
				on:click={() => (formModal = true)}>Contact me</Button
			>
		</NavLi>
		<NavLi
			class="block md:hidden flex items-center justify-center px-4 pb-4 pt-4 space-x-6 justify-center items-center"
		>
			<a href="https://www.linkedin.com/in/jopearsondesigner/" target="_blank"
				><Icon
					name="linkedin-solid"
					class="w-[20px] h-[20px] text-zinc-500 hover:text-zinc-400"
				/></a
			>
			<a href="https://github.com/jopearsondesigner" target="_blank"
				><Icon name="github-solid" class="w-[20px] h-[20px] text-zinc-500 hover:text-zinc-400" /></a
			>
		</NavLi>
	</NavUl>
</Navbar>

<div class="w-full relative" />

{#if browser}
	<Carousel
		bind:this={carousel}
		autoplay
		autoplayDuration={1000000}
		let:showPrevPage
		let:showNextPage
	>
		<div
			slot="prev"
			on:click={showPrevPage}
			on:keydown
			class="absolute h-full left-0 z-20 flex items-center justify-center custom-arrow custom-arrow-prev"
		>
			<div
				class="lg:ml-3 ml-1 group rounded-full h-auto w-auto p-2 bg-transparent hover:bg-zinc-700/20 transition duration-200 ease-in"
			>
				<Icon
					name="angle-left-solid"
					class="lg:h-6 h-3 text-zinc-700 group-hover:text-zinc-500 transition duration-200 ease-in focus:outline-none"
				/>
			</div>
		</div>
		<div
			class="xl:h-[420px] lg:h-[300px] h-[175.5px] py-4 bg-gradient-to-t from-zinc-950 via-zinc-950 to-zinc-800 w-full flex justify-center items-center border-b border-zinc-700 overflow-hidden"
		>
			<div class="flex flex-col">
				<img
					src="images/icon-logo.svg"
					alt="Jo Pearson logo"
					class="h-[102px] h-[102px] hidden xl:block mb-7"
				/>
				<h1
					class="self-center whitespace-nowrap lg:text-5xl text-3xl font-bold tracking-widest font-header text-zinc-400 uppercase"
				>
					Jo<span class="text-zinc-600">Pearson</span>
				</h1>
				<h2
					class="self-center whitespace-nowrap lg:text-3xl text-xl font-medium tracking-widest font-header text-zinc-400 uppercase mt-3"
				>
					UI<span class="text-zinc-700">Design</span><span class="text-zinc-800">—</span>UX<span
						class="text-zinc-700">Design</span
					><span class="text-zinc-800">—</span>Frontend<span
						class="text-zinc-700 hidden md:inline-block">Development</span
					><span class="text-zinc-700 inline-block md:hidden">Dev</span>
				</h2>
				<span class="flex flex-row justify-center lg:mt-10 mt-4">
					<Button
						size="sm"
						class="flex-none !ring-1 !ring-[#ffebb1] !bg-gradient-to-t !from-[#ffebb1] !via-[#ffebb1] !via-20% !to-[#fff] hover:!bg-gradient-to-t hover:!from-[#ffebb1] hover:!via-[#ffebb1] hover:!via-80% hover:!to-[#fff] !text-zinc-600 !text-xs uppercase !rounded"
						on:click={() => (formModal = true)}>Contact me</Button
					>
				</span>
			</div>
		</div>
		<div
			class="xl:h-[420px] lg:h-[300px] h-[175.5px] py-4 bg-gradient-to-t from-zinc-950 via-zinc-950 to-zinc-900 w-full flex items-start justify-center border-b border-zinc-800 overflow-hidden"
		>
			<img
				src="images/slide-evident-stack.png"
				alt="Evident Stack product & code"
				class="w-[1400px]"
			/>
		</div>
		<div
			class="xl:h-[420px] lg:h-[300px] h-[175.5px] py-0 bg-gradient-to-t from-white via-white via-60% to-[#97CCFF] w-full border-b border-zinc-800 overflow-hidden"
		>
			<div class="grid grid-cols-4 h-full sm:container mx-auto">
				<div class="flex h-auto justify-center items-center">
					<span
						class="xl:max-w-[400px] lg:max-w-[400px] md:max-w-[400px] sm:max-w-[400px] max-w-[250px] w-auto"
					>
						<Player src="lottie/DataAnimation.json" />
					</span>
				</div>
				<div
					class="flex h-auto justify-center items-end col-span-2 border-x-4 border-zinc-200 bg-gradient-to-t from-white via-white via-[52%] to-[#97CCFF]"
				>
					<span
						class="xl:max-w-[740px] lg:min-w-[530px] md:max-w-[400px] sm:max-w-[400px] min-w-[300px] w-auto overflow-hidden flex justify-center lg:-mr-0 -mr-[20px]"
					>
						<Player src="lottie/DatabaseAnimation.json" />
					</span>
				</div>
				<div class="flex h-auto justify-center items-center">
					<span
						class="xl:max-w-[500px] lg:max-w-[400px] md:max-w-[400px] sm:max-w-[400px] max-w-[250px] w-auto"
					>
						<Player src="lottie/DeployAnimation.json" />
					</span>
				</div>
			</div>
		</div>
		<div
			slot="next"
			on:click={showNextPage}
			on:keydown
			class="absolute h-full right-0 z-20 flex items-center justify-center custom-arrow custom-arrow-next"
		>
			<div
				class="lg:mr-3 mr-1 group rounded-full h-auto w-auto p-2 bg-transparent hover:bg-zinc-700/20 transition duration-200 ease-in"
			>
				<Icon
					name="angle-right-solid"
					class="lg:h-6 h-3 text-zinc-700 group-hover:text-zinc-500 transition duration-200 ease-in focus:outline-none"
				/>
			</div>
		</div>
	</Carousel>
	<div class="-mt-[19px] w-full" />
{/if}

<div class="bg-white/[.06]">
	<div class="pb-2 pt-8 px-4">
		<div class="w-full flex justify-center">
			<span class="flex items-center">
				<p class="lg:text-sm text-xs text-zinc-600 mr-0">Site built with</p>
				<a href="https://kit.svelte.dev/"
					><img src="images/svelte-kit.svg" alt="Svelte-kit logo" class="lg:h-16 h-12" /></a
				>
				<p class="text-lg text-white">+</p>
				<a href="https://tailwindcss.com/"
					><img
						src="images/Tailwind_CSS_logo.svg"
						alt="Tailwind CSS logo"
						class="lg:h-5 h-4 ml-4"
					/></a
				>
			</span>
		</div>
	</div>

	<div id="portfolio" class="grid grid-cols-4 gap-4 sm:container mx-auto lg:pt-24 pt-24 px-4">
		<div class="col-span-1 flex flex-col items-center justify-center">
			{#if path === '/branding'}
				<a
					class="flex items-center justify-center rounded-full lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] bg-white/[.0666] pointer-events-none"
					href="/branding"
				>
					<img src="images/icon-branding-active.svg" alt="Branding Icon" class="h-20 w-auto" />
				</a>
				<h2
					class="xl:text-3xl lg:text-2xl text-xs mt-3 font-header uppercase tracking-widest text-[#ffebb1] mt-1 pb-4 border-b-4 border-[#ff05bd] whitespace-nowrap text-center transition duration-200 ease-in"
				>
					Branding & Design
				</h2>
			{:else}
				<a
					class="flex items-center justify-center rounded-full lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] hover:bg-white/[.0666] transition duration-200 ease-in"
					href="/branding#portfolio"
				>
					<img src="images/icon-branding.svg" alt="Prototypes Icon" class="h-20 w-auto" />
				</a>
				<a href="/branding#portfolio"
					><h2
						class="invisible md:visible xl:text-3xl lg:text-2xl text-xs mt-3 font-header uppercase tracking-widest text-zinc-600 mt-1 pb-4 border-b-4 border-zinc-800 whitespace-nowrap text-center transition duration-200 ease-in"
					>
						Branding & Design
					</h2></a
				>
			{/if}
		</div>
		<div class="col-span-1 flex flex-col items-center justify-center">
			{#if path === '/prototypes'}
				<a
					class="flex items-center justify-center rounded-full lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] bg-white/[.0666] pointer-events-none"
					href="/prototypes"
				>
					<img src="images/icon-prototypes-active.svg" alt="Prototypes Icon" class="h-20 w-auto" />
				</a>
				<h2
					class="xl:text-3xl lg:text-2xl text-xs mt-3 font-header uppercase tracking-widest text-[#ffebb1] mt-1 pb-4 border-b-4 border-[#ff05bd] whitespace-nowrap text-center transition duration-200 ease-in"
				>
					Wireframes & Prototypes
				</h2>
			{:else}
				<a
					class="flex items-center justify-center rounded-full lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] hover:bg-white/[.0666] transition duration-200 ease-in"
					href="/prototypes#portfolio"
				>
					<img src="images/icon-prototypes.svg" alt="Prototypes Icon" class="h-20 w-auto" />
				</a>
				<a href="/prototypes#portfolio">
					<h2
						class="invisible md:visible xl:text-3xl lg:text-2xl text-xs mt-3 font-header uppercase tracking-widest text-zinc-600 mt-1 pb-4 border-b-4 border-zinc-800 whitespace-nowrap text-center transition duration-200 ease-in"
					>
						Wireframes & Prototypes
					</h2></a
				>
			{/if}
		</div>

		<div class="col-span-1 flex flex-col items-center justify-center">
			{#if path === '/websites'}
				<a
					class="flex items-center justify-center rounded-full lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] bg-white/[.0666] pointer-events-none"
					href="/websites"
				>
					<img src="images/icon-websites-active.svg" alt="Websites Icon" class="h-20 w-auto" />
				</a>
				<h2
					class="xl:text-3xl lg:text-2xl text-xs mt-3 font-header uppercase tracking-widest text-[#ffebb1] mt-1 pb-4 border-b-4 border-[#ff05bd] whitespace-nowrap text-center transition duration-200 ease-in"
				>
					Website Projects
				</h2>
			{:else}
				<a
					class="flex items-center justify-center rounded-full lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] hover:bg-white/[.0666] transition duration-200 ease-in"
					href="/websites#portfolio"
				>
					<img src="images/icon-websites.svg" alt="Websites Icon" class="h-20 w-auto" />
				</a>
				<a href="/websites#portfolio"
					><h2
						class="invisible md:visible xl:text-3xl lg:text-2xl text-xs mt-3 font-header uppercase tracking-widest text-zinc-600 mt-1 pb-4 border-b-4 border-zinc-800 whitespace-nowrap text-center transition duration-200 ease-in"
					>
						Website Projects
					</h2></a
				>
			{/if}
		</div>
		<div class="col-span-1 flex flex-col items-center justify-center">
			{#if path === '/apps'}
				<a
					class="flex items-center justify-center rounded-full lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] bg-white/[0.0666] pointer-events-none"
					href="/apps"
				>
					<img src="images/icon-apps-active.svg" alt="Apps Icon" class="h-20 w-auto" />
				</a>
				<h2
					class="xl:text-3xl lg:text-2xl text-xs mt-3 font-header uppercase tracking-widest text-[#ffebb1] mt-1 pb-4 border-b-4 border-[#ff05bd] whitespace-nowrap text-center transition duration-200 ease-in"
				>
					App Projects
				</h2>
			{:else}
				<a
					class="flex items-center justify-center rounded-full lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] hover:bg-white/[.0666] transition duration-200 ease-in"
					href="/apps#portfolio"
				>
					<img src="images/icon-apps.svg" alt="Apps Icon" class="h-20 w-auto" />
				</a>
				<a href="/apps#portfolio"
					><h2
						class="invisible md:visible xl:text-3xl lg:text-2xl text-xs mt-3 font-header uppercase tracking-widest text-zinc-600 mt-1 pb-4 border-b-4 border-zinc-800 whitespace-nowrap text-center transition duration-200 ease-in"
					>
						App Projects
					</h2></a
				>
			{/if}
		</div>
	</div>
</div>

<div class="h-[4px] bg-zinc-800 w-full -mt-[4px]" />
<main class="bg-transparent border-b border-zinc-700">
	<slot />
</main>

<div
	id="about-me"
	class="bg-white/[.03] my-[0px] xl:pt-[120px] lg:py-[64px] pt-[100px] lg:pb-0 pb-0 border-b border-zinc-800"
>
	<div class="lg:container mx-auto">
		<div class="grid grid-cols-12">
			<div
				class="xl:col-start-2 xl:col-span-3 lg:col-start-1 lg:col-span-5 md:col-start-4 md:col-span-6 col-start-2 col-span-10 flex items-center justify-center"
			>
				<div class="rounded-full border-[32px] border-white/[.02]">
					<div
						class="rounded-full border-[32px] border-white/[.06] w-auto h-auto overflow-hidden aspect-square"
					>
						<img src="images/jo-photo-2.png" alt="Jo Pearson" />
					</div>
				</div>
			</div>
			<div
				class="xl:col-start-6 xl:col-span-6 lg:col-start-6 lg:col-span-6 col-start-1 col-span-12 flex flex-col items-start justify-center lg:py-16 py-0 lg:px-24 lg:px-4 px-10 pt-1 pb-16 space-y-4 text-zinc-400 lg:text-lg leading-normal"
			>
				<p>Hi. I'm Jo,</p>
				<p>
					I live in Salt Lake City and have been doing graphic design, web design and web
					development for ten years, and UI design and UX design for over 5 years, and am passionate
					about it. I'm currently open for new employment opportunities or freelance jobs, please
					feel free to reach out to me.
				</p>
				<p>Thanks! <span class="text-2xl ml-3">😎</span></p>
				<span class="pt-4 px-[24px] flex lg:justify-start justify-center items-center w-full">
					<Button
						size="sm"
						class="flex-none !ring-1 !ring-[#ffebb1] !bg-gradient-to-t !from-[#ffebb1] !via-[#ffebb1] !via-20% !to-[#fff] hover:!bg-gradient-to-t hover:!from-[#ffebb1] hover:!via-[#ffebb1] hover:!via-80% hover:!to-[#fff] !text-zinc-600 !text-xs uppercase !rounded"
						on:click={() => (formModal = true)}>Contact me</Button
					></span
				>
			</div>
		</div>

		<div id="skills" class="hidden grid grid-cols-6 gap-6 py-12">
			<div class="col-start-2 col-span-1">
				<ListPlaceholder />
			</div>
			<div id="skills" class="col-start-3 col-span-1">
				<ListPlaceholder />
			</div>
			<div id="skills" class="col-start-4 col-span-1">
				<ListPlaceholder />
			</div>
			<div id="skills" class="col-start-5 col-span-1">
				<ListPlaceholder />
			</div>
		</div>

		<div id="resume" class="pt-12">
			<details bind:open>
				<summary
					class="w-fit mx-auto lg:py-3 lg:px-9 py-2 px-4 mb-8 bg-zinc-950 hover:bg-zinc-800 group text-zinc-500 hover:text-zinc-400 border border-zinc-600 rounded-lg flex items-center justify-center lg:space-x-6 space-x-4 transition duration-200 ease-in"
					on:click
				>
					{#if open}
						<Icon
							name="chevron-up-outline"
							class="lg:w-3 lg:h-3 w-2 h-2 text-zinc-500 group-hover:text-zinc-500 inline "
						/>
					{:else}
						<Icon
							name="chevron-down-outline"
							class="lg:w-3 lg:h-3 w-2 h-2 text-zinc-500 group-hover:text-zinc-500 inline "
						/>
					{/if}
					<h3 class="lg:text-3xl text-2xl font-header uppercase tracking-widest text-center">
						Résumé
					</h3></summary
				>
				<div class="bg-zinc-100 p-4">
					<article id="resume-print">
						<div id="header-print">
							<div class="rowp">
								<div class="colp-1">
									<div id="title">
										<h1>Jo Pearson</h1>
										<p>DESIGNER & DEVELOPER</p>
									</div>
								</div>
								<div class="colp-2">
									<div id="info">
										<p>jopearsondesigner.com</p>
										<p>jopearsondesigner@gmail.com</p>
										<p>(385) 461-7921</p>
									</div>
								</div>
								<div class="colp-3">
									<p class="pb-4 font-bold">Creative professional specializing in UI/UX design.</p>
									<p class="font-bold">
										A unique enthusiasm and blend of talent with experience in both product designer
										and frontend developer roles.
									</p>
								</div>
							</div>
						</div>
						<div class="m-bottom" />
						<div id="experience-print">
							<div class="rowp">
								<div class="colp-1">
									<h2 class="subhead-grey">Experience</h2>
								</div>
								<div class="colp-2">
									<h2>LEAD DESIGNER</h2>
									<h3>Evident Systems</h3>
									<p>2021-2023</p>
								</div>
								<div class="colp-3">
									<ul>
										<li>Produced all UI design for our SAAS products and websites</li>
										<li>
											Produced all UX design for company e.g. wireframes, interactive prototypes
										</li>
										<li>
											Built the UI for our products and websites, responsible for all frontend
											development
										</li>
										<li>
											Created all the company branding e.g. product logos, animations, and web
											graphics
										</li>
									</ul>
								</div>
							</div>
							<div class="rowp">
								<div class="colp-1">
									<div class="colp-1">&nbsp;</div>
								</div>
								<div class="colp-2">
									<h2>DESIGNER AND DEVELOPER</h2>
									<h3>Freelance Work</h3>
									<p>2019-2020</p>
								</div>
								<div class="colp-3">
									<ul>
										<li>
											Designed high-quality web banners for WGU (Western Governors University) for
											marketing channels across the Internet
										</li>
										<li>Created professional animated versions of WGU web banners</li>
									</ul>
								</div>
							</div>
							<div class="rowp">
								<div class="colp-1">&nbsp;</div>
								<div class="colp-2">
									<h2>USER EXPERIENCE DESIGNER</h2>
									<h3>Younique</h3>
									<p>2016-2019</p>
								</div>
								<div class="colp-3">
									<ul>
										<li>
											Collaborated with UX strategists, managers and stakeholders on achieving
											quarterly business goals
										</li>
										<li>
											Produced high-quality prototypes and low fidelity/high fidelity wireframes for
											all website applications
										</li>
										<li>Designed marketing landing pages and digital assets for dev</li>
										<li>
											In role of <em>User Experience Prototyper</em> produced fully functional HTML prototypes
											for the Executive Team
										</li>
									</ul>
								</div>
							</div>
							<div class="rowp">
								<div class="colp-1">&nbsp;</div>
								<div class="colp-2">
									<h2>UX DESIGNER</h2>
									<h3>CR England</h3>
									<p>2016</p>
								</div>
								<div class="colp-3">
									<ul>
										<li>
											Produced wireframes and prototypes for development of new internal
											applications
										</li>
										<li>
											Conducted user interviews and user observation for new application design
										</li>
									</ul>
								</div>
							</div>
							<div class="rowp">
								<div class="colp-1">&nbsp;</div>
								<div class="colp-2">
									<h2>UX DESIGNER</h2>
									<h3>Children's Miracle Network Hospitals</h3>
									<p>2015-2016</p>
								</div>
								<div class="colp-3">
									<ul>
										<li>Designed new UI for internal applications</li>
										<li>Coded new UI for internal applications</li>
									</ul>
								</div>
							</div>
							<div class="rowp">
								<div class="colp-1">&nbsp;</div>
								<div class="colp-2">
									<h2>WEB DESIGNER</h2>
									<h3>AdvancedMD</h3>
									<p>2014-2015</p>
								</div>
								<div class="colp-3">
									<ul>
										<li>
											Created digital assets for new website and designed all marketing collateral
										</li>
										<li>Designed and coded all marketing email campaigns</li>
									</ul>
								</div>
							</div>
							<div class="rowp">
								<div class="colp-1">&nbsp;</div>
								<div class="colp-2">
									<h2>GRAPHIC DESIGN INTERN</h2>
									<h3>Red Olive</h3>
									<p>2013</p>
								</div>
								<div class="colp-3">
									<ul>
										<li>Interned with one of the best, award-winning creative agencies in Utah</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="m-bottom" />
						<div id="education-print">
							<div class="rowp">
								<div class="colp-1">
									<h2 class="subhead-grey">Education</h2>
								</div>
								<div class="colp-2">
									<h2>Bachelor's of Science Graphic Design</h2>
									<h3>Art Institute of Salt Lake City</h3>
									<!--                <p>2013</p>-->
								</div>
								<div class="colp-3">
									<p>&nbsp;</p>
								</div>
							</div>
						</div>
						<div class="m-bottom" />
						<div id="skills-print">
							<div class="rowp">
								<div class="colp-1">
									<h2 class="subhead-grey">Skills</h2>
								</div>
								<div class="colp-1">
									<p>Figma</p>
									<p>Adobe XD</p>
									<p>Sketch</p>
								</div>
								<div class="colp-1">
									<p>Photoshop</p>
									<p>Illustrator</p>
									<p>InDesign</p>
									<p>After Effects</p>
								</div>
								<div class="colp-1">
									<p>Wireframes</p>
									<p>Prototyping</p>
									<p>Branding</p>
									<p>Illustration</p>
								</div>
								<div class="colp-1">
									<p>HTML</p>
									<p>CSS</p>
									<p>Javascript</p>
									<p>Git</p>
								</div>
								<div class="colp-1" />
							</div>
						</div>
						<div class="m-bottom" />
					</article>
				</div>
			</details>
		</div>
	</div>
</div>

<Modal
	bind:open={formModal}
	size="md"
	autoclose={false}
	class="w-full bg-zinc-950 border border-zinc-600"
>
	<div class="lg:p-4 p-0 rounded">
		<h3 class="text-2xl text-center font-header tracking-widest uppercase mb-4 text-zinc-500">
			Contact Me
		</h3>
		<address class="m-3 lg:p-6 p-0">
			<span class="flex items-center mb-3">
				<Icon
					name="phone-solid"
					class="mr-3 h-4 text-zinc-600 group-hover:text-zinc-500 transition duration-200 ease-in focus:outline-none"
				/>
				<a href="tel:3854617921" class="text-[#ffebb1] hover:text-[#fff6e1]">385-461-7921</a>
			</span>
			<span class="flex items-center">
				<Icon
					name="envelope-solid"
					class="mr-3 h-3 text-zinc-600 group-hover:text-zinc-500 transition duration-200 ease-in focus:outline-none"
				/>
				<a href="mailto:jopearsondesigner@gmail.com" class="text-[#ffebb1] hover:text-[#fff6e1]"
					>jopearsondesigner@gmail.com</a
				>
			</span>
		</address>
		<div class="border border-zinc-800 rounded m-3 p-6">
			<form action="https://api.web3forms.com/submit" method="POST">
				<input type="hidden" name="access_key" value="da63253b-f414-4a8f-9bca-7f83c4d546d1" />
				<Label for="input-group-1" class="block mb-1 text-xs text-zinc-400">Name</Label>
				<Input
					required
					id="name"
					type="text"
					name="name"
					placeholder="Your first and last name"
					class="mb-4 lg:p-[10px] px-[10px] py-2 bg-white/[.08] placeholder-text-zinc-800 border-zinc-500 text-white"
				/>
				<Label for="input-group-1" class="block mb-1 text-xs text-zinc-400">Email</Label>
				<Input
					required
					id="email"
					type="email"
					name="email"
					placeholder="Your email"
					class="mb-4 lg:p-[10px] px-[10px] py-2  bg-white/[.08] placeholder-text-zinc-800 border-zinc-500 text-white"
				/>
				<Label for="input-group-1" class="block mb-1 text-xs text-zinc-400">Message</Label>
				<Textarea
					required
					id="message"
					name="message"
					label="Your message"
					rows={2}
					placeholder="Leave a comment..."
					class="mb-4 lg:p-[10px] px-[10px] py-2 bg-white/[.08] placeholder-text-zinc-800 border-zinc-500 text-white"
				/>
				<div class="h-captcha" data-captcha="true" />
				<div class="w-full flex justify-start">
					<Button
						type="submit"
						size="sm"
						class="!ring-1 !ring-[#ffebb1] !bg-gradient-to-t !from-[#ffebb1] !via-[#ffebb1] !via-20% !to-[#fff] hover:!bg-gradient-to-t hover:!from-[#ffebb1] hover:!via-[#ffebb1] hover:!via-80% hover:!to-[#fff] !text-zinc-600 !text-xs uppercase !rounded lg:mt-4 mx-[24px]"
						on:click>Send Message</Button
					>
				</div>
			</form>
		</div>
	</div>
	<script src="https://web3forms.com/client/script.js" async defer></script>
</Modal>

<Footer footerType="socialmedia" class="sm:container mx-auto !p-12 bg-zinc-950">
	<div class="flex ml-6 space-x-6 justify-start items-center sm:mt-0">
		<a href="https://www.linkedin.com/in/jopearsondesigner/" target="_blank"
			><Icon name="linkedin-solid" class="w-6 h-6 text-zinc-500 hover:text-zinc-400" /></a
		>
		<a href="https://github.com/jopearsondesigner" target="_blank"
			><Icon name="github-solid" class="w-6 h-6 text-zinc-500 hover:text-zinc-400" /></a
		>
	</div>
	<hr class="border-zinc-900 sm:mx-auto my-4" />
	<div class="sm:flex sm:items-center sm:justify-between sm:container mx-auto px-4">
		<FooterCopyright href="/" by="Jo Pearson" />
	</div>
</Footer>

<style>
	@media (min-width: 1024px) {
		#resume article {
			max-width: 51pc;
		}
		.rowp {
			width: 100%;
			display: block;
			margin-bottom: 9pt;
			float: left;
		}
		.colp-1 {
			width: 16.667%;
			display: block;
			float: left;
			height: auto;
			padding-right: 1pc;
		}
		.colp-2 {
			width: 33.333%;
			display: block;
			float: left;
			height: auto;
			padding-right: 1pc;
		}
		.colp-3 {
			width: 50%;
			display: block;
			float: left;
			height: auto;
			padding-right: 1pc;
		}
		.colp-4 {
			width: 66.667%;
			display: block;
			float: left;
			height: auto;
			padding-right: 1pc;
		}
		.colp-5 {
			width: 83.333%;
			display: block;
			float: left;
			height: auto;
			padding-right: 1pc;
		}
		.colp-6 {
			width: 100%;
			display: block;
			float: left;
			height: auto;
			padding-right: 0;
		}
		.gutter-print {
			padding-right: 1pc;
		}
	}
	@media (max-width: 1023px) {
		#resume article {
			max-width: 512px;
		}
	}

	article#resume-print {
		margin: 36pt auto;
		position: relative;
		width: 51pc;
		height: 66pc;
		padding: 4pc;
		background: #ffffff;
	}
	article#resume-print #header-print #title {
		padding: 4.5pt;
		background: #141414;
		border: 0.5px solid #141414;
		box-sizing: border-box;
		color: #ffffff;
	}
	article#resume-print #header-print #title h1 {
		letter-spacing: 0.54pt;
	}
	article#resume-print #header-print #title h1 img {
		margin-right: 9pt;
		margin-top: -2px;
	}

	#resume article {
		margin: 36pt auto;
		position: relative;
		width: auto;
		min-height: 66pc;
		height: auto;
		background: #ffffff;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	details > summary {
		list-style: none;
	}
	details[open] > summary {
	}
	#resume-print {
		padding: 4pc;
		box-sizing: border-box;
	}
	#resume-print h2 {
		font-family: 'PT Sans', sans-serif;
		font-size: 9pt;
		font-weight: 700;
		margin-bottom: 2px;
		color: #000000;
		margin-top: 0;
		text-transform: uppercase;
	}
	#resume-print h3 {
		font-family: 'PT Sans', sans-serif;
		font-size: 9pt;
		font-weight: 700;
		color: #9c9c9c;
		margin-bottom: 9pt;
		margin-top: 0;
	}
	#resume-print p {
		font-family: 'PT Sans', sans-serif;
		font-size: 9pt;
		font-weight: 300;
		margin: 0;
	}
	#resume-print p.font-bold {
		font-weight: bold;
	}
	#resume-print ul {
		list-style-type: circle;
	}
	#resume-print ul li {
		font-family: 'PT Sans', sans-serif;
		font-size: 9pt;
		font-weight: 300;
		margin: 0;
	}

	.p-pc {
		padding-right: 1pc;
	}
	#title {
		padding: 4.5pt;
		background: #141414;
		border: 0.5px solid #141414;
		box-sizing: border-box;
		color: #ffffff;
	}
	#title h1 {
		letter-spacing: 0.54pt;
		font-family: 'PT Sans', sans-serif;
		font-size: 10.8pt;
		font-weight: 700;
		margin-bottom: 4.5pt;
		margin-top: 0;
	}
	#title p {
		font-family: 'PT Sans', sans-serif;
		font-size: 9pt;
		font-weight: 300;
		margin: 0;
	}
	#info {
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		font-size: 15px;
	}
	#info p {
		font-family: 'PT Sans', sans-serif;
		font-size: 9pt;
		font-weight: 300;
		margin: 0;
	}
	.m-bottom {
		height: 27pt;
		width: 100%;
		display: block;
	}
	#resume-print .subhead-grey {
		color: #9c9c9c;
	}
	#experience-print p {
		margin-bottom: 9pt;
	}
</style>
