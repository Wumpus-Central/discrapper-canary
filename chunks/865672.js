n.d(t, {
    I: () => d,
    J: () => u
});
var r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(607070),
    l = n(981631),
    c = n(183375);
function u(e, t, n, r, i) {
    var a, s;
    let u = 'username' === i,
        d = 'dot' === i,
        f = {
            '--custom-gradient-color-1': null != e ? e : l.p6O,
            '--custom-gradient-color-2': null != (a = null != t ? t : e) ? a : l.p6O,
            '--custom-gradient-color-3': null != (s = null != n ? n : e) ? s : l.p6O
        };
    return {
        text: {
            gradientClassName: c.gradientText,
            gradientStyle: f
        },
        gradient: {
            gradientClassName: o()(null != n ? c.threeColorGradient : c.twoColorGradient, {
                [c.username]: u,
                [c.gradient]: !r && u,
                [c.gradientDot]: !r && d
            })
        }
    };
}
function d(e, t, n, i) {
    let o = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
    return r.useMemo(() => u(e, t, n, o, i), [e, t, n, i, o]);
}
