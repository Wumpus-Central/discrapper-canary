n.d(t, {
    I: () => d,
    J: () => u
});
var r = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(607070),
    l = n(981631),
    c = n(183375);
function u(e) {
    var t, n;
    let { primaryColor: r, secondaryColor: i, tertiaryColor: o, useReducedMotion: s, roleStyle: u, includeConvenienceGlow: d } = e,
        f = 'username' === u,
        _ = 'dot' === u;
    return {
        gradientStyle: {
            '--custom-gradient-color-1': null != r ? r : l.p6O,
            '--custom-gradient-color-2': null != (t = null != i ? i : r) ? t : l.p6O,
            '--custom-gradient-color-3': null != (n = null != o ? o : r) ? n : l.p6O
        },
        gradientClassname: a()(null != o ? c.threeColorGradient : c.twoColorGradient, {
            [c.usernameGradient]: f,
            [c.convenienceGradient]: f && d,
            [c.gradientUsernameAnimation]: !s && f,
            [c.gradientDotAnimation]: !s && _
        }),
        gradientGlowClassname: a()(null != o ? c.threeColorGradient : c.twoColorGradient, c.usernameGlow, {
            [c.usernameGradient]: f,
            [c.gradientUsernameAnimation]: !s && f
        })
    };
}
function d(e) {
    let { primaryColor: t, secondaryColor: n, tertiaryColor: i, roleStyle: a, includeConvenienceGlow: l } = e,
        c = (0, o.e7)([s.Z], () => s.Z.useReducedMotion);
    return r.useMemo(
        () =>
            u({
                primaryColor: t,
                secondaryColor: n,
                tertiaryColor: i,
                useReducedMotion: c,
                roleStyle: a,
                includeConvenienceGlow: l
            }),
        [t, n, i, a, l, c]
    );
}
