n.d(t, { Iu: () => l, Z6: () => s, nW: () => r, zY: () => a }), n(64700);
var i,
    s =
        (((i = {})[(i.ROOT = 0)] = "ROOT"),
        (i[(i.SECTION = 1)] = "SECTION"),
        (i[(i.SIDEBAR_ITEM = 2)] = "SIDEBAR_ITEM"),
        (i[(i.PANEL = 3)] = "PANEL"),
        (i[(i.SPLIT = 4)] = "SPLIT"),
        (i[(i.CATEGORY = 5)] = "CATEGORY"),
        (i[(i.ACCORDION = 6)] = "ACCORDION"),
        (i[(i.LIST = 7)] = "LIST"),
        (i[(i.RELATED = 8)] = "RELATED"),
        (i[(i.FIELD_SET = 9)] = "FIELD_SET"),
        (i[(i.TAB_ITEM = 10)] = "TAB_ITEM"),
        (i[(i.STATIC = 11)] = "STATIC"),
        (i[(i.BUTTON = 12)] = "BUTTON"),
        (i[(i.TOGGLE = 13)] = "TOGGLE"),
        (i[(i.SLIDER = 14)] = "SLIDER"),
        (i[(i.SELECT = 15)] = "SELECT"),
        (i[(i.RADIO = 16)] = "RADIO"),
        (i[(i.NAVIGATOR = 17)] = "NAVIGATOR"),
        (i[(i.CUSTOM = 18)] = "CUSTOM"),
        i);
function r(e) {
    return "layout" in e;
}
function a(e) {
    return e.every((e) => 10 === e.type) && e.length > 0;
}
function l(e) {
    return e.every((e) => 5 === e.type) && e.length > 0;
}
