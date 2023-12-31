import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
	props: {
		caption?: string | undefined;
		captionClass?: string | undefined;
		description?: string | undefined;
		descriptionClass?: string | undefined;
		pClass?: string | undefined;
	};
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type CaptionProps = typeof __propDef.props;
export type CaptionEvents = typeof __propDef.events;
export type CaptionSlots = typeof __propDef.slots;
export type DescriptionProps = typeof __propDef.props;
export type DescriptionEvents = typeof __propDef.events;
export type DescriptionSlots = typeof __propDef.slots;

/**
 * [Go to docs](https://flowbite-svelte.com/)
 * ## Props
 * @prop export let caption: string = '';
 * @prop export let captionClass: string = '';
 * @prop export let description: string = '';
 * @prop export let descriptionClass: string = '';
 * @prop export let pClass: string = 'text-gray-900 dark:text-white';
 */
export default class Caption extends SvelteComponentTyped<
	CaptionProps,
	CaptionEvents,
	CaptionSlots,
	DescriptionProps,
	DescriptionEvents,
	DescriptionSlots
> {}
export {};
//# sourceMappingURL=Caption.svelte.d.ts.map
