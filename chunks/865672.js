n.d(t, { N: () => d });
var r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(607070),
    l = n(981631),
    c = n(183375);
function u(e, t, n, r) {
    var i, a;
    let s = {
        '--custom-gradient-color-1': null != e ? e : l.p6O,
        '--custom-gradient-color-2': null != (i = null != t ? t : e) ? i : l.p6O,
        '--custom-gradient-color-3': null != (a = null != n ? n : e) ? a : l.p6O
    };
    return {
        text: {
            gradientClassName: c.gradientText,
            gradientStyle: s
        },
        gradient: { gradientClassName: o()(null != n ? c.threeColorGradient : c.twoColorGradient, { [c.gradient]: !r }) }
    };
}
function d(e, t, n) {
    let i = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
    return r.useMemo(() => u(e, t, n, i), [e, t, n, i]);
}
