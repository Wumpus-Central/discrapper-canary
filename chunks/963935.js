"use strict";
n.d(t, { Iu: () => o, Px: () => u, Z6: () => i, bJ: () => l, nW: () => s, zY: () => a }), n(64700);
var r,
    i =
        (((r = {})[(r.ROOT = 0)] = "ROOT"),
        (r[(r.SECTION = 1)] = "SECTION"),
        (r[(r.SIDEBAR_ITEM = 2)] = "SIDEBAR_ITEM"),
        (r[(r.PANEL = 3)] = "PANEL"),
        (r[(r.SPLIT = 4)] = "SPLIT"),
        (r[(r.CATEGORY = 5)] = "CATEGORY"),
        (r[(r.ACCORDION = 6)] = "ACCORDION"),
        (r[(r.LIST = 7)] = "LIST"),
        (r[(r.RELATED = 8)] = "RELATED"),
        (r[(r.FIELD_SET = 9)] = "FIELD_SET"),
        (r[(r.TAB_ITEM = 10)] = "TAB_ITEM"),
        (r[(r.NESTED_PANEL_NAVIGATOR = 11)] = "NESTED_PANEL_NAVIGATOR"),
        (r[(r.STATIC = 12)] = "STATIC"),
        (r[(r.BUTTON = 13)] = "BUTTON"),
        (r[(r.TOGGLE = 14)] = "TOGGLE"),
        (r[(r.SLIDER = 15)] = "SLIDER"),
        (r[(r.SELECT = 16)] = "SELECT"),
        (r[(r.RADIO = 17)] = "RADIO"),
        (r[(r.NAVIGATOR = 18)] = "NAVIGATOR"),
        (r[(r.CUSTOM = 19)] = "CUSTOM"),
        r);
function s(e) {
    return "layout" in e;
}
function a(e) {
    return e.every((e) => 10 === e.type) && e.length > 0;
}
function o(e) {
    return e.every((e) => 5 === e.type) && e.length > 0;
}
function l(e) {
    return null != e.useTitle || null != e.useSubnavLabel;
}
function u(e) {
    return e.parent?.type === 11;
}
