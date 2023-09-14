<script>
	export let thumbImg = '';
	export let altTag = '';
	export let titleLink = '';
	export let id;
	export let thumbWidth = 100;
	export let selected = false;
	export let thumbClass = '';
	export let thumbBtnClass = '';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<button
	on:click
	aria-label="Click to view image"
	class={thumbBtnClass}
	class:active={selected}
	id={id.toString()}
>
	<img class={thumbClass} src={thumbImg} alt={altTag} title={titleLink} width="{thumbWidth}%" />
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let thumbImg: string = '';
@prop export let altTag: string = '';
@prop export let titleLink: string = '';
@prop export let id: number;
@prop export let thumbWidth: number = 100;
@prop export let selected: boolean = false;
@prop export let thumbClass: string = '';
@prop export let thumbBtnClass: string = '';
-->

<style>
	.active {
		opacity: 1;
		box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width))
			var(--tw-ring-color);
		--tw-ring-color: rgb(255 5 189);
		/* --tw-ring-offset-width: 4px; */
		/* box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow); */
		pointer-events: none;
	}
</style>
