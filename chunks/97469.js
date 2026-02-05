"use strict";
n.d(t, { $i: () => _, NC: () => p, qo: () => f });
var r = n(311907),
    i = n(582754),
    a = n(467135),
    s = n(47671),
    o = n(544028),
    l = n(964404),
    u = n(253932),
    c = n(652215);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A,
        { darkSidebar: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Ay,
        { gradientPreset: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.A,
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0,
        u = null != r.customUserThemeSettings || a;
    return (0, i.qB)(e.theme) && t && null == n && !u;
}
function _() {
    let e = u.eh.getSetting(),
        t = a.ko.getState().isEditorActive();
    return d(o.A, l.Ay, s.A, e, t);
}
function f() {
    let e = u.eh.useSetting(),
        t = (0, a.ko)((e) => e.isEditorActive());
    return (0, r.bG)([o.A, l.Ay, s.A], () => d(o.A, l.Ay, s.A, e, t));
}
function p() {
    return f() ? c.NJ8.DARK : void 0;
}
