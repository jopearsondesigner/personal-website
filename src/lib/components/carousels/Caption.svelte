<!-- Caption.svelte -->
<script>
	export let caption = '';
	export let description = '';

	export let hClass =
		'lg:text-[32px] text-2xl text-[#ffebb1] font-header font-medium uppercase tracking-widest leading-tight mb-4 lg:text-left text-center';

	export let captionClass = '';

	export let textClass =
		'lg:col-start-2 lg:col-span-7 col-start-1 col-span-12 lg:text-base text-sm lg:pt-10 pt-8 lg:pb-8 pb-8 px-4';

	export let pClass = 'lg:max-w-[620px] text-zinc-200 leading-relaxed lg:text-left text-center';
</script>

<div class={captionClass}>
	<span class={textClass}>
		<h3 class={hClass}>
			{caption}
		</h3>
		<p id="caption" class={pClass}>
			{description}
		</p>
	</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let caption: string = '';
@prop export let captionClass: string = '';
@prop export let pClass: string = 'text-gray-900 dark:text-white';
-->
