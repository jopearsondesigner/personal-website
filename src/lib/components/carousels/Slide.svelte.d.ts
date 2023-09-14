import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
	props: {
		image?: string | undefined;
		altTag?: string | undefined;
		attr?: string | undefined;
		slideClass?: string | undefined;
		imgClass?: string | undefined;
	};
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type SlideProps = typeof __propDef.props;
export type SlideEvents = typeof __propDef.events;
export type SlideSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte.com/)
 * ## Props
 * @prop export let image: string = '';
 * @prop export let altTag: string = '';
 * @prop export let attr: string = '';
 * @prop export let slideClass: string = '';
 * @prop export let imgClass: string = '';
 */
export default class Slide extends SvelteComponentTyped<SlideProps, SlideEvents, SlideSlots> {}
export {};
//# sourceMappingURL=Slide.svelte.d.ts.map
