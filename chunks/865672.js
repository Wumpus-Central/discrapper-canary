n.d(t, {
    De: () => p,
    EJ: () => h,
    Ic: () => _,
    JU: () => f
}),
    n(413496),
    n(433524),
    n(35282),
    n(539854);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(607070),
    c = n(981631),
    u = n(183375);
let d = RegExp('\\p{Emoji_Presentation}', 'gu');
function f(e) {
    var t, n;
    let { primaryColor: r, secondaryColor: i, tertiaryColor: a, useReducedMotion: s, roleStyle: l, includeConvenienceGlow: d, animateGradient: f } = e,
        _ = 'username' === l,
        p = 'dot' === l;
    return {
        gradientStyle: {
            '--custom-gradient-color-1': null != r ? r : c.p6O,
            '--custom-gradient-color-2': null != (t = null != i ? i : r) ? t : c.p6O,
            '--custom-gradient-color-3': null != (n = null != a ? a : r) ? n : c.p6O
        },
        gradientClassname: o()(null != a ? u.threeColorGradient : u.twoColorGradient, {
            [u.usernameGradient]: _,
            [u.convenienceGradient]: _ && d,
            [u.gradientUsernameAnimation]: !s && _,
            [u.gradientDotAnimation]: !s && p,
            [u.animateGradient]: f
        }),
        gradientGlowClassname: o()(null != a ? u.threeColorGradient : u.twoColorGradient, u.usernameGlow, {
            [u.usernameGradient]: _,
            [u.gradientUsernameAnimation]: !s && _
        })
    };
}
function _(e) {
    let { primaryColor: t, secondaryColor: n, tertiaryColor: r, roleStyle: a, includeConvenienceGlow: o, animateGradient: c } = e,
        u = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
    return i.useMemo(
        () =>
            f({
                primaryColor: t,
                secondaryColor: n,
                tertiaryColor: r,
                useReducedMotion: u,
                roleStyle: a,
                includeConvenienceGlow: o,
                animateGradient: c
            }),
        [t, n, r, a, o, u, c]
    );
}
function p(e, t, n) {
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
function h(e) {
    return i.useMemo(() => {
        let t;
        if ('string' != typeof e) return e;
        let n = new RegExp(d),
            i = [],
            a = 0;
        for (; null !== (t = n.exec(e)); )
            t.index > a && i.push(e.slice(a, t.index)),
                i.push(
                    (0, r.jsx)('span', {
                        className: u.emoji,
                        children: t[0]
                    })
                ),
                (a = n.lastIndex);
        return a < e.length && i.push(e.slice(a)), i;
    }, [e]);
}
