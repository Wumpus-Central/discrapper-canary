(n.d(t, {
    De: () => p,
    EJ: () => h,
    Ic: () => _,
    JU: () => f
}),
    n(413496),
    n(433524),
    n(35282),
    n(539854));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(607070),
    c = n(981631),
    u = n(183375);
let d = RegExp('\\p{Emoji_Presentation}', 'gu');
function f(e) {
    var t, n, r;
    let { colorStrings: i, useReducedMotion: o, roleStyle: s, includeConvenienceGlow: l, animateGradient: d } = e,
        f = 'username' === s,
        _ = 'dot' === s,
        p = f && l,
        h = null != (t = null == i ? void 0 : i.primaryColor) ? t : c.Pbq,
        m = {
            '--custom-gradient-color-1': h,
            '--custom-gradient-color-2': null != (n = null == i ? void 0 : i.secondaryColor) ? n : h,
            '--custom-gradient-color-3': null != (r = null == i ? void 0 : i.tertiaryColor) ? r : h
        },
        g = (null == i ? void 0 : i.tertiaryColor) != null ? u.threeColorGradient : u.twoColorGradient;
    return {
        gradientStyle: m,
        gradientClassname: a()(g, {
            [u.usernameGradient]: f,
            [u.convenienceGlowGradient]: p,
            [u.convenienceGlowGradientActive]: p && d,
            [u.gradientDotAnimation]: !o && _,
            [u.animateGradient]: d && f
        }),
        gradientGlowClassname: a()(g, u.usernameGlow, {
            [u.usernameGradient]: f,
            [u.animateGradient]: d && f,
            [u.usernameGlowActive]: f && d
        })
    };
}
function _(e) {
    let { colorStrings: t, roleStyle: n, includeConvenienceGlow: r, animateGradient: o } = e,
        a = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
    return i.useMemo(
        () =>
            f({
                colorStrings: t,
                useReducedMotion: a,
                roleStyle: n,
                includeConvenienceGlow: r,
                animateGradient: o
            }),
        [t, n, r, a, o]
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
        if (null == e) return e;
        let n = new RegExp(d),
            i = [],
            o = 0;
        for (; null !== (t = n.exec(e)); )
            (t.index > o && i.push(e.slice(o, t.index)),
                i.push(
                    (0, r.jsx)('span', {
                        className: u.emoji,
                        children: t[0]
                    })
                ),
                (o = n.lastIndex));
        return (o < e.length && i.push(e.slice(o)), i);
    }, [e]);
}
