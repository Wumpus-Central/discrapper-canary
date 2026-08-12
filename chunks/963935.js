"use strict";
n.d(t, { Px: () => o, Z6: () => r, bJ: () => l, nW: () => a, zS: () => s }), n(582128);
var i,
    r =
        (((i = {})[(i.ROOT = 0)] = "ROOT"),
        (i[(i.SECTION = 1)] = "SECTION"),
        (i[(i.SIDEBAR_ITEM = 2)] = "SIDEBAR_ITEM"),
        (i[(i.PANEL = 3)] = "PANEL"),
        (i[(i.SPLIT = 4)] = "SPLIT"),
        (i[(i.CATEGORY = 5)] = "CATEGORY"),
        (i[(i.ACCORDION = 6)] = "ACCORDION"),
        (i[(i.LIST = 7)] = "LIST"),
        (i[(i.RELATED = 8)] = "RELATED"),
        (i[(i.CARD = 9)] = "CARD"),
        (i[(i.FIELD_SET = 10)] = "FIELD_SET"),
        (i[(i.NESTED_PANEL_NAVIGATOR = 11)] = "NESTED_PANEL_NAVIGATOR"),
        (i[(i.STATIC = 12)] = "STATIC"),
        (i[(i.BUTTON = 13)] = "BUTTON"),
        (i[(i.TOGGLE = 14)] = "TOGGLE"),
        (i[(i.SLIDER = 15)] = "SLIDER"),
        (i[(i.SELECT = 16)] = "SELECT"),
        (i[(i.RADIO = 17)] = "RADIO"),
        (i[(i.NAVIGATOR = 18)] = "NAVIGATOR"),
        (i[(i.CUSTOM = 19)] = "CUSTOM"),
        i);
function a(e) {
    return "layout" in e;
}
function s(e) {
    return e.length > 0;
}
function l(e) {
    return e.parent?.parent?.type === 2 && (null != e.useTitle || null != e.useSubnavLabel);
}
function o(e) {
    return e.parent?.type === 11;
}
