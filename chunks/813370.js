(n.d(t, {
    A: () => u,
    g: () => c
}),
    n(997841));
var r = n(73800),
    i = n(783097),
    a = n(630388),
    o = n(28881),
    s = n(981631);
function l(e) {
    var t;
    if (!(0, i.BQ)(e)) return !1;
    let n = null != (t = e.flags) ? t : 0,
        r = (0, a.yE)(n, s.udG.EMBEDDED),
        o = (0, a.yE)(n, s.udG.CONTEXTLESS_ACTIVITY);
    return r && o;
}
function c(e) {
    return !!l(e) && (0, o.QK)('canLaunchFrame').enabled;
}
function u(e) {
    let { enabled: t } = (0, o.u$)('canLaunchFrame');
    return r.useMemo(() => null != e && l(e) && t, [e, t]);
}
