<script>
	export let caption = '';
	export let description = '';
	export let hClass =
		'lg:text-[38px] text-2xl text-zinc-500 font-header font-medium uppercase tracking-widest leading-normal mb-1 leading-normal lg:text-left text-center';
	export let captionClass = '';
	export let textClass =
		'lg:col-start-2 lg:col-span-11 col-start-1 col-span-12 lg:text-base text-sm lg:pt-12 pt-10 lg:pb-6 pb-10 px-4';
	export let pClass = 'lg:max-w-[553px] text-zinc-200 leading-normal lg:text-left text-center';
</script>

<div class={captionClass}>
	<span class={textClass}>
		<h3 class={hClass}>
			{caption}
		</h3>
		<p id="caption" class={pClass}>{description}</p>
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
