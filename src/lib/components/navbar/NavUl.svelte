<script context="module">
	export {};
</script>

<script>
	import { twMerge } from 'tailwind-merge';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Frame from '../utils/Frame.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	const activeUrlStore = writable('');
	export let activeUrl = '';
	export let divClass = 'w-full md:block md:w-auto';
	export let ulClass = 'flex flex-col md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium';
	export let hidden = true;
	export let slideParams = { delay: 250, duration: 500, easing: quintOut };
	export let activeClass =
		'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent';
	export let nonActiveClass =
		'text-zinc-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
	setContext('navbarContext', { activeClass, nonActiveClass });
	$: {
		activeUrlStore.set(activeUrl);
	}
	setContext('activeUrl', activeUrlStore);
	let _divClass;
	$: _divClass = twMerge(divClass, $$props.class);
	let _ulClass;
	$: _ulClass = twMerge(
		ulClass,
		// 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
		$$props.classUl
	);
</script>

{#if !hidden}
	<div
		{...$$restProps}
		class={_divClass}
		transition:slide={slideParams}
		on:click
		role="button"
		tabindex="0"
	>
		<Frame tag="ul" border rounded color="navbarUl" class={_ulClass}>
			<slot />
		</Frame>
	</div>
{:else}
	<div {...$$restProps} class={_divClass} {hidden}>
		<ul class={_ulClass}>
			<slot />
		</ul>
	</div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let activeUrl: string = '';
@prop export let divClass: string = 'w-full md:block md:w-auto';
@prop export let ulClass: string = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium';
@prop export let hidden: boolean = true;
@prop export let slideParams: SlideParams = { delay: 250, duration: 500, easing: quintOut };
@prop export let activeClass: string = 'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent';
@prop export let nonActiveClass: string = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
-->
