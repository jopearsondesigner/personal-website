import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ToolbarGroupProps = typeof __propDef.props;
export type ToolbarGroupEvents = typeof __propDef.events;
export type ToolbarGroupSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte.com/)
 * ## Props
 * @prop export let divClass: string = 'flex items-center space-x-1 sm:pr-4 sm:pl-4 first:sm:pl-0 last:sm:pr-0';
 */
export default class ToolbarGroup extends SvelteComponentTyped<ToolbarGroupProps, ToolbarGroupEvents, ToolbarGroupSlots> {
}
export {};
//# sourceMappingURL=ToolbarGroup.svelte.d.ts.map