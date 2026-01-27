n.d(t, {
    Iu: () => a,
    Z6: () => i,
    nW: () => l,
    zY: () => s,
}),
    n(64700);
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
        (r[(r.STATIC = 11)] = "STATIC"),
        (r[(r.BUTTON = 12)] = "BUTTON"),
        (r[(r.TOGGLE = 13)] = "TOGGLE"),
        (r[(r.SLIDER = 14)] = "SLIDER"),
        (r[(r.SELECT = 15)] = "SELECT"),
        (r[(r.RADIO = 16)] = "RADIO"),
        (r[(r.NAVIGATOR = 17)] = "NAVIGATOR"),
        (r[(r.CUSTOM = 18)] = "CUSTOM"),
        r);

function l(e) {
    return "layout" in e;
}

function s(e) {
    return e.every((e) => 10 === e.type) && e.length > 0;
}

function a(e) {
    return e.every((e) => 5 === e.type) && e.length > 0;
}
