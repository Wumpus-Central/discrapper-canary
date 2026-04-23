"use strict";
n.d(t, { $i: () => c, NC: () => h, qo: () => E });
var i = n(17928),
    r = n(462887),
    s = n(467135),
    a = n(47671),
    o = n(363195),
    l = n(964404),
    d = n(253932),
    _ = n(652215);
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A,
        { darkSidebar: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Ay,
        { gradientPreset: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.A,
        i = arguments.length > 3 ? arguments[3] : void 0,
        s = arguments.length > 4 ? arguments[4] : void 0,
        d = null != i.customUserThemeSettings;
    return (0, r.q)(e.theme) && t && null == n && !(d || s);
}
function c() {
    let e = d.eh.getSetting(),
        t = s.ko.getState().isEditorActive();
    return u(o.A, l.Ay, a.A, e, t);
}
function E() {
    let e = d.eh.useSetting(),
        t = (0, s.ko)((e) => e.isEditorActive());
    return (0, i.bG)([o.A, l.Ay, a.A], () => u(o.A, l.Ay, a.A, e, t));
}
function h() {
    return E() ? _.NJ8.DARK : void 0;
}
