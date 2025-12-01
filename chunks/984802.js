n.d(t, {
    A6: () => p,
    Ll: () => _,
    Zp: () => f,
});
var r = n(442837),
    i = n(780384),
    a = n(233398),
    o = n(514361),
    s = n(210887),
    l = n(740492),
    c = n(695346),
    u = n(981631);
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.Z,
        { darkSidebar: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.ZP,
        { gradientPreset: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0,
        c = null != r.customUserThemeSettings || a;
    return (0, i.ap)(e.theme) && t && null == n && !c;
}
function f() {
    let e = c.L1.getSetting(),
        t = a.Ig.getState().isEditorActive();
    return d(s.Z, l.ZP, o.Z, e, t);
}
function p() {
    let e = c.L1.useSetting(),
        t = (0, a.Ig)((e) => e.isEditorActive());
    return (0, r.e7)([s.Z, l.ZP, o.Z], () => d(s.Z, l.ZP, o.Z, e, t));
}
function _() {
    return p() ? u.BRd.DARK : void 0;
}
