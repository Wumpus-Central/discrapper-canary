"use strict";
n.d(t, { $i: () => _, NC: () => E, qo: () => f });
var r = n(311907),
    i = n(462887),
    s = n(467135),
    a = n(47671),
    o = n(544028),
    l = n(964404),
    u = n(253932),
    d = n(652215);
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A,
        { darkSidebar: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Ay,
        { gradientPreset: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.A,
        r = arguments.length > 3 ? arguments[3] : void 0,
        s = arguments.length > 4 ? arguments[4] : void 0,
        u = null != r.customUserThemeSettings;
    return (0, i.q)(e.theme) && t && null == n && !(u || s);
}
function _() {
    let e = u.eh.getSetting(),
        t = s.ko.getState().isEditorActive();
    return c(o.A, l.Ay, a.A, e, t);
}
function f() {
    let e = u.eh.useSetting(),
        t = (0, s.ko)((e) => e.isEditorActive());
    return (0, r.bG)([o.A, l.Ay, a.A], () => c(o.A, l.Ay, a.A, e, t));
}
function E() {
    return f() ? d.NJ8.DARK : void 0;
}
