/** @typedef {typeof __propDef.props}  DrawingPinProps */
/** @typedef {typeof __propDef.events}  DrawingPinEvents */
/** @typedef {typeof __propDef.slots}  DrawingPinSlots */
export default class DrawingPin extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DrawingPinProps = typeof __propDef.props;
export type DrawingPinEvents = typeof __propDef.events;
export type DrawingPinSlots = typeof __propDef.slots;
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
