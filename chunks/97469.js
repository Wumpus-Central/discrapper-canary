"use strict";
n.d(t, { $i: () => d, NC: () => h, qo: () => _ });
var i = n(17928),
    r = n(462887),
    s = n(467135),
    a = n(47671),
    o = n(363195),
    l = n(885386),
    u = n(652215);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A,
        t = arguments.length > 1 ? arguments[1] : void 0,
        { gradientPreset: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.A,
        i = arguments.length > 3 ? arguments[3] : void 0,
        s = arguments.length > 4 ? arguments[4] : void 0,
        l = null != i.customUserThemeSettings;
    return (0, r.q)(e.theme) && t && null == n && !(l || s);
}
function d() {
    let e = l.eh.getSetting(),
        t = s.ko.getState().isEditorActive();
    return c(o.A, l.l$.getSetting(), a.A, e, t);
}
function _() {
    let e = l.eh.useSetting(),
        t = l.l$.useSetting(),
        n = (0, s.ko)((e) => e.isEditorActive());
    return (0, i.bG)([o.A, a.A], () => c(o.A, t, a.A, e, n));
}
function h() {
    return _() ? u.NJ8.DARK : void 0;
}
