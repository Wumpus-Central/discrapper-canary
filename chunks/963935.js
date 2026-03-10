"use strict";
n.d(t, { Iu: () => a, Z6: () => r, bJ: () => o, nW: () => i, zY: () => s }), n(64700);
var r = (function (e) {
    return (
        (e[(e.ROOT = 0)] = "ROOT"),
        (e[(e.SECTION = 1)] = "SECTION"),
        (e[(e.SIDEBAR_ITEM = 2)] = "SIDEBAR_ITEM"),
        (e[(e.PANEL = 3)] = "PANEL"),
        (e[(e.SPLIT = 4)] = "SPLIT"),
        (e[(e.CATEGORY = 5)] = "CATEGORY"),
        (e[(e.ACCORDION = 6)] = "ACCORDION"),
        (e[(e.LIST = 7)] = "LIST"),
        (e[(e.RELATED = 8)] = "RELATED"),
        (e[(e.FIELD_SET = 9)] = "FIELD_SET"),
        (e[(e.TAB_ITEM = 10)] = "TAB_ITEM"),
        (e[(e.NESTED_PANEL = 11)] = "NESTED_PANEL"),
        (e[(e.STATIC = 12)] = "STATIC"),
        (e[(e.BUTTON = 13)] = "BUTTON"),
        (e[(e.TOGGLE = 14)] = "TOGGLE"),
        (e[(e.SLIDER = 15)] = "SLIDER"),
        (e[(e.SELECT = 16)] = "SELECT"),
        (e[(e.RADIO = 17)] = "RADIO"),
        (e[(e.NAVIGATOR = 18)] = "NAVIGATOR"),
        (e[(e.CUSTOM = 19)] = "CUSTOM"),
        e
    );
})({});
function i(e) {
    return "layout" in e;
}
function s(e) {
    return e.every((e) => 10 === e.type) && e.length > 0;
}
function a(e) {
    return e.every((e) => 5 === e.type) && e.length > 0;
}
function o(e) {
    return null != e.useTitle || null != e.useSubnavLabel;
}
