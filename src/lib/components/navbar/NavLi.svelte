<script>
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	export let href = '';
	export let activeClass = undefined;
	export let nonActiveClass = undefined;
	const context = getContext('navbarContext') ?? {};
	const activeUrlStore = getContext('activeUrl');
	let navUrl = '';
	activeUrlStore.subscribe((value) => {
		navUrl = value;
	});
	$: active = navUrl ? href === navUrl : false;
	$: liClass = twMerge(
		'block py-2 px-4 lg:pl-2 rounded md:border-0',
		active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
		$$props.class
	);
	// $: console.log()
</script>

<li>
	<svelte:element
		this={href ? 'a' : 'div'}
		role={href ? undefined : 'link'}
		{href}
		{...$$restProps}
		on:blur
		on:change
		on:click
		on:focus
		on:keydown
		on:keypress
		on:keyup
		on:mouseenter
		on:mouseleave
		on:mouseover
		class={liClass}
	>
		<slot />
	</svelte:element>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let href: string = '';
@prop export let activeClass: string | undefined = undefined;
@prop export let nonActiveClass: string | undefined = undefined;
-->
