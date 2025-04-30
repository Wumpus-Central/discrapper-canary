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
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(607070),
    c = n(981631),
    u = n(183375);
let d = RegExp('\\p{Emoji_Presentation}', 'gu');
function f(e) {
    var t, n;
    let { primaryColor: r, secondaryColor: i, tertiaryColor: o, useReducedMotion: s, roleStyle: l, includeConvenienceGlow: d, animateGradient: f } = e,
        _ = 'username' === l,
        p = 'dot' === l;
    return {
        gradientStyle: {
            '--custom-gradient-color-1': null != r ? r : c.p6O,
            '--custom-gradient-color-2': null != (t = null != i ? i : r) ? t : c.p6O,
            '--custom-gradient-color-3': null != (n = null != o ? o : r) ? n : c.p6O
        },
        gradientClassname: a()(null != o ? u.threeColorGradient : u.twoColorGradient, {
            [u.usernameGradient]: _,
            [u.convenienceGradient]: _ && d,
            [u.gradientUsernameAnimation]: !s && _,
            [u.gradientDotAnimation]: !s && p,
            [u.animateGradient]: f
        }),
        gradientGlowClassname: a()(null != o ? u.threeColorGradient : u.twoColorGradient, u.usernameGlow, {
            [u.usernameGradient]: _,
            [u.gradientUsernameAnimation]: !s && _
        })
    };
}
function _(e) {
    let { primaryColor: t, secondaryColor: n, tertiaryColor: r, roleStyle: o, includeConvenienceGlow: a, animateGradient: c } = e,
        u = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
    return i.useMemo(
        () =>
            f({
                primaryColor: t,
                secondaryColor: n,
                tertiaryColor: r,
                useReducedMotion: u,
                roleStyle: o,
                includeConvenienceGlow: a,
                animateGradient: c
            }),
        [t, n, r, o, a, u, c]
    );
}
function p(e, t, n) {
    return i.useMemo(() => {
        let i = [e, t, n].filter((e) => null != e),
            o = i.length >= 2,
            a = i.length > 1 ? 100 / (i.length - 1) : 0,
            s = i.map((e, t) =>
                (0, r.jsx)(
                    'stop',
                    {
                        offset: ''.concat(t * a, '%'),
                        style: { stopColor: e }
                    },
                    t
                )
            ),
            l = i.join('');
        return {
            hasGradient: o,
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
            o = 0;
        for (; null !== (t = n.exec(e)); )
            t.index > o && i.push(e.slice(o, t.index)),
                i.push(
                    (0, r.jsx)('span', {
                        className: u.emoji,
                        children: t[0]
                    })
                ),
                (o = n.lastIndex);
        return o < e.length && i.push(e.slice(o)), i;
    }, [e]);
}
