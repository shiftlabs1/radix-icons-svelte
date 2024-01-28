/** @typedef {typeof __propDef.props}  ShadowProps */
/** @typedef {typeof __propDef.events}  ShadowEvents */
/** @typedef {typeof __propDef.slots}  ShadowSlots */
export default class Shadow extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ShadowProps = typeof __propDef.props;
export type ShadowEvents = typeof __propDef.events;
export type ShadowSlots = typeof __propDef.slots;
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
