n.d(t, {
    A: () => u,
    g: () => c,
}),
    n(997841);
var r = n(73800),
    i = n(783097),
    o = n(630388),
    a = n(28881),
    s = n(981631);
function l(e) {
    var t;
    if (!(0, i.BQ)(e)) return !1;
    let n = null != (t = e.flags) ? t : 0,
        r = (0, o.yE)(n, s.udG.EMBEDDED),
        a = (0, o.yE)(n, s.udG.CONTEXTLESS_ACTIVITY);
    return r && a;
}
function c(e) {
    return !!l(e) && (0, a.QK)("canLaunchFrame").enabled;
}
function u(e) {
    let { enabled: t } = (0, a.u$)("canLaunchFrame");
    return r.useMemo(() => null != e && l(e) && t, [e, t]);
}
