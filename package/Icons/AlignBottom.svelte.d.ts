/** @typedef {typeof __propDef.props}  AlignBottomProps */
/** @typedef {typeof __propDef.events}  AlignBottomEvents */
/** @typedef {typeof __propDef.slots}  AlignBottomSlots */
export default class AlignBottom extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AlignBottomProps = typeof __propDef.props;
export type AlignBottomEvents = typeof __propDef.events;
export type AlignBottomSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string;
        size?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
