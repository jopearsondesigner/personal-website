import { SvelteComponentTyped } from "svelte";
import type { ToolbarButtonType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: ToolbarButtonType | undefined;
        name?: string | undefined;
        ariaLabel?: string | undefined;
        size?: "xs" | "sm" | "lg" | "md" | undefined;
        href?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            svgSize: string;
        };
    };
};
export type ToolbarButtonProps = typeof __propDef.props;
export type ToolbarButtonEvents = typeof __propDef.events;
export type ToolbarButtonSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte.com/)
 * ## Props
 * @prop export let color: ToolbarButtonType = 'default';
 * @prop export let name: string | undefined = undefined;
 * @prop export let ariaLabel: string | undefined = undefined;
 * @prop export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
 * @prop export let href: string | undefined = undefined;
 */
export default class ToolbarButton extends SvelteComponentTyped<ToolbarButtonProps, ToolbarButtonEvents, ToolbarButtonSlots> {
}
export {};
//# sourceMappingURL=ToolbarButton.svelte.d.ts.map