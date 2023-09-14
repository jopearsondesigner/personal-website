<script lang="ts">
	import classNames from 'classnames';
	export let image = '';
	export let altTag = '';
	export let attr = '';
	export let slideClass = '';
	export let imgClass = '';
</script>

<div class={classNames(slideClass, 'flex items-center justify-center relative')}>
	{#key image}
		<img src={image} alt={altTag} title={attr} class={imgClass} />
		<slot />
	{/key}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let image: string = '';
@prop export let altTag: string = '';
@prop export let attr: string = '';
@prop export let slideClass: string = '';
@prop export let imgClass: string = '';
-->
