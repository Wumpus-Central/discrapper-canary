n.d(t, {
    De: () => _,
    Ic: () => f,
    JU: () => d
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(607070),
    c = n(981631),
    u = n(183375);
function d(e) {
    var t, n;
    let { primaryColor: r, secondaryColor: i, tertiaryColor: a, useReducedMotion: s, roleStyle: l, includeConvenienceGlow: d } = e,
        f = 'username' === l,
        _ = 'dot' === l;
    return {
        gradientStyle: {
            '--custom-gradient-color-1': null != r ? r : c.p6O,
            '--custom-gradient-color-2': null != (t = null != i ? i : r) ? t : c.p6O,
            '--custom-gradient-color-3': null != (n = null != a ? a : r) ? n : c.p6O
        },
        gradientClassname: o()(null != a ? u.threeColorGradient : u.twoColorGradient, {
            [u.usernameGradient]: f,
            [u.convenienceGradient]: f && d,
            [u.gradientUsernameAnimation]: !s && f,
            [u.gradientDotAnimation]: !s && _
        }),
        gradientGlowClassname: o()(null != a ? u.threeColorGradient : u.twoColorGradient, u.usernameGlow, {
            [u.usernameGradient]: f,
            [u.gradientUsernameAnimation]: !s && f
        })
    };
}
function f(e) {
    let { primaryColor: t, secondaryColor: n, tertiaryColor: r, roleStyle: a, includeConvenienceGlow: o } = e,
        c = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
    return i.useMemo(
        () =>
            d({
                primaryColor: t,
                secondaryColor: n,
                tertiaryColor: r,
                useReducedMotion: c,
                roleStyle: a,
                includeConvenienceGlow: o
            }),
        [t, n, r, a, o, c]
    );
}
function _(e, t, n) {
    return i.useMemo(() => {
        let i = [e, t, n].filter((e) => null != e),
            a = i.length >= 2,
            o = i.length > 1 ? 100 / (i.length - 1) : 0,
            s = i.map((e, t) =>
                (0, r.jsx)(
                    'stop',
                    {
                        offset: ''.concat(t * o, '%'),
                        style: { stopColor: e }
                    },
                    t
                )
            ),
            l = i.join('');
        return {
            hasGradient: a,
            stops: s,
            gradientId: 'dotGradient-'.concat(l),
            animatedGradientId: 'dotAnimatedGradient-'.concat(l)
        };
    }, [e, t, n]);
}
