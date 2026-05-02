<!-- Carousel.svelte -->
<script lang="ts">
	import classNames from 'classnames';
	import { twMerge } from 'tailwind-merge';
	import Slide from './Slide.svelte';
	import Thumbnail from './Thumbnail.svelte';
	import Caption from './Caption.svelte';
	import Indicator from './Indicator.svelte';
	import { Button } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import Player from '$lib/components/Player.svelte';
	export let id = 'default-carousel';
	export let showIndicators = true;
	export let showCaptions = true;
	export let showThumbs = true;
	export let images: any;
	export let slideControls = true;
	export let loop = false;
	export let duration = 2000;
	// export let imgHeight = 500;
	// Carousel
	export let divClass = `lg:h-[600px] h-[370px]`;
	let divCls = twMerge(divClass, $$props.classDiv);
	export let indicatorDivClass = 'flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2';
	let indicatorDivCls = twMerge(indicatorDivClass, $$props.classIndicatorDiv);
	// Caption
	export let captionClass = 'grid grid-cols-12 min-h-10 bg-transparent border-b border-zinc-700';
	let captionCls = twMerge(captionClass, $$props.classCaption);
	// Indicator
	export let indicatorClass = 'w-2 h-2 rounded-full bg-gray-500 hover:bg-gray-300 opacity-60';
	let indicatorCls = twMerge(indicatorClass, $$props.classIndicator);
	// Slide
	export let slideClass = 'flex h-full w-full items-center justify-center';
	let slideCls = twMerge(slideClass, $$props.classSlide);
	// Img
	export let imgFit = 'cover';
	export let imgClass = `h-full w-full object-contain object-center contrast-110 saturate-110 brightness-95`;
	let imgCls = twMerge(imgClass, $$props.classImg);
	// Thumbnail
	export let thumbClass = 'object-cover object-center p-0 h-full rounded-lg';
	let thumbCls = twMerge(thumbClass, $$props.classThumb);
	// Thumbnail Container
	export let thumbDivClass =
		'lg:h-[600px] h-[370px] overflow-y-auto justify-start bg-white/[0%] grid grid-cols-1 p-2 self-start';
	let thumbDivCls = twMerge(thumbDivClass, $$props.classThumbDiv);
	// Thumbnail Img Btn Div
	export let thumbBtnClass =
		'm-2 aspect-square opacity-40 hover:ring-2 hover:ring-[#ff05bd] rounded-lg';
	let thumbBtnCls = twMerge(thumbBtnClass, $$props.classBtnThumb);
	let imageShowingIndex = 0;
	$: image = images[imageShowingIndex];
	const nextSlide = () => {
		if (imageShowingIndex === images.length - 1) {
			imageShowingIndex = 0;
		} else {
			imageShowingIndex += 1;
		}
	};
	const prevSlide = () => {
		if (imageShowingIndex === 0) {
			imageShowingIndex = images.length - 1;
		} else {
			imageShowingIndex -= 1;
		}
	};
	const goToSlide = (number: number) => (imageShowingIndex = number);
	if (loop) {
		setInterval(() => {
			nextSlide();
		}, duration);
	}

	let h: number;
</script>

<div class="relative">
	{#if showCaptions}
		<Caption
			caption={images[imageShowingIndex].name}
			description={images[imageShowingIndex].description}
			captionClass={captionCls}
			bind:clientHeight={h}
		/>
	{/if}

	<div class={classNames(divCls, 'grid grid-cols-12')}>
		{#if showThumbs}
			<div class={classNames(thumbDivCls, 'col-span-1 hidden lg:block')}>
				<span class="h-auto">
					{#each images as { id, imgurl, name, attribution }}
						<Thumbnail
							thumbClass={thumbCls}
							thumbBtnClass={thumbBtnCls}
							thumbImg={imgurl}
							altTag={name}
							titleLink={name}
							{id}
							selected={imageShowingIndex === id}
							on:click={() => goToSlide(id)}
						/>
					{/each}
				</span>
			</div>
		{/if}

		<div {id} class="lg:col-span-11 col-span-12 relative">
			<div
				class="overflow-hidden lg:h-[600px] h-[370px] rounded-xl ring-1 ring-white/10 bg-black/40"
			>
				<Slide
					image={image.imgurl}
					altTag={image.name}
					attr={image.name}
					slideClass={slideCls}
					imgClass={imgCls}
				>
					{#if image.button === true}
						<a
							href={image.href}
							target="_blank"
							rel="noopener noreferrer"
							class="absolute inset-0 z-20 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 ease-out hover:bg-black/30 hover:opacity-100"
							aria-label={`View ${image.name}`}
						>
							<span
								class="rounded border border-[#ffebb1] bg-gradient-to-t from-[#ffebb1] via-[#ffebb1] to-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-700 shadow-lg transition duration-200 hover:scale-[1.03]"
							>
								View Project
							</span>
						</a>
					{/if}
					{#if image.lottie === true}
						<div class="absolute grid grid-rows-3 w-full bg-white px-4 py-4">
							<div class="row-start-2 flex items-center justify-center">
								<span
									class="xl:max-w-[600px] lg:max-w-[600px] md:max-w-[400px] sm:max-w-[400px] max-w-[250px] w-auto"
								>
									<Player src={image.src} />
								</span>
							</div>
							<div class="row-start-3 lg:pb-2 pb-2 pt-8 px-4 lg:mt-0 -mt-[0px]">
								<div class="flex items-end justify-center">
									<span class="flex items-center">
										<p class="text-sm text-zinc-400 mr-2">Made with</p>
										<a href="https://www.adobe.com/products/aftereffects.html"
											><img
												src="images/after-effects-logo.svg"
												alt="Adobe After Effects logo"
												class="lg:h-10 h-6"
											/></a
										>
										<p class="text-lg text-zinc-400 mx-2">+</p>
										<a href="https://lottiefiles.com/"
											><img
												src="images/lottie-logo.svg"
												alt="Lottie Files logo"
												class="lg:h-8 h-6"
											/></a
										>
									</span>
								</div>
							</div>
						</div>
					{/if}
				</Slide>
			</div>
			{#if showIndicators}
				<!-- Slider indicators -->
				<div class={indicatorDivCls}>
					{#each images as { id, imgurl, name, attribution }}
						<Indicator
							{name}
							selected={imageShowingIndex === id}
							on:click={() => goToSlide(id)}
							indicatorClass={indicatorCls}
						/>
					{/each}
				</div>
			{/if}
			{#if slideControls}
				<!-- Slider controls -->
				<button
					on:click={prevSlide}
					type="button"
					class="flex absolute top-0 left-0 z-30 justify-center items-center lg:px-3 px-1 h-full cursor-pointer group focus:outline-none"
					data-carousel-prev
				>
					<!-- <span
						class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
					> -->
					{#if $$slots.previous}
						<slot name="previous" />
					{:else}
						<div
							class="group rounded-full lg:h-[36px] lg:w-[36px] h-[28px] w-[28px] flex items-center justify-center bg-transparent hover:bg-zinc-700/20 transition duration-200 ease-in"
						>
							<Icon
								name="angle-left-solid"
								class="mr-0.5 lg:h-[16px] h-[12px] text-zinc-700 group-hover:text-zinc-500 transition duration-200 ease-in focus:outline-none"
							/>
						</div>
					{/if}
					<span class="hidden">Previous</span>
					<!-- </span> -->
				</button>
				<button
					on:click={nextSlide}
					type="button"
					class="flex absolute top-0 right-0 z-30 justify-center items-center lg:px-3 px-1 h-full cursor-pointer group focus:outline-none"
					data-carousel-next
				>
					<!-- <span
						class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
					> -->
					{#if $$slots.next}
						<slot name="next" />
					{:else}
						<div
							class="group rounded-full lg:h-[36px] lg:w-[36px] h-[28px] w-[28px] flex items-center justify-center bg-transparent hover:bg-zinc-700/20 transition duration-200 ease-in"
						>
							<Icon
								name="angle-right-solid"
								class="ml-0.5 lg:h-[16px] h-[12px] text-zinc-700 group-hover:text-zinc-500 transition duration-200 ease-in focus:outline-none"
							/>
						</div>
					{/if}
					<span class="hidden">Next</span>
					<!-- </span> -->
				</button>
			{/if}
		</div>
	</div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let id: string = 'default-carousel';
@prop export let showIndicators: boolean = true;
@prop export let showCaptions: boolean = true;
@prop export let showThumbs: boolean = true;
@prop export let images: any[];
@prop export let slideControls: boolean = true;
@prop export let loop: boolean = false;
@prop export let duration: number = 2000;
@prop export let divClass: string = 'overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96';
@prop export let indicatorDivClass: string = 'flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2';
@prop export let captionClass: string = 'h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center';
@prop export let indicatorClass: string = 'w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60';
@prop export let slideClass: string = 'flex items-center justify-center h-full w-full';
@prop export let imgFit: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' = 'cover';
@prop export let imgClass: string = `object-${imgFit} ${imgFit === 'cover' && 'w-full'} h-full`;
@prop export let thumbClass: string = 'opacity-40';
@prop export let thumbDivClass: string = 'flex flex-row justify-center bg-gray-100 w-full';
@prop export let thumbBtnClass: string = '';
-->
