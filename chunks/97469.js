n.d(t, {
    $i: () => f,
    NC: () => _,
    qo: () => p,
});
var r = n(311907),
    i = n(582754),
    a = n(467135),
    s = n(47671),
    o = n(544028),
    l = n(964404),
    c = n(253932),
    u = n(652215);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A,
        { darkSidebar: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Ay,
        { gradientPreset: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.A,
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0,
        c = null != r.customUserThemeSettings || a;
    return (0, i.qB)(e.theme) && t && null == n && !c;
}
function f() {
    let e = c.eh.getSetting(),
        t = a.ko.getState().isEditorActive();
    return d(o.A, l.Ay, s.A, e, t);
}
function p() {
    let e = c.eh.useSetting(),
        t = (0, a.ko)((e) => e.isEditorActive());
    return (0, r.bG)([o.A, l.Ay, s.A], () => d(o.A, l.Ay, s.A, e, t));
}
function _() {
    return p() ? u.NJ8.DARK : void 0;
}
