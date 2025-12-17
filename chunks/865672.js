n.d(t, {
    De: () => _,
    EJ: () => m,
    Ic: () => p,
    JU: () => f,
}),
    n(413496),
    n(433524),
    n(35282),
    n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(607070),
    c = n(981631),
    u = n(789023);
let d = RegExp("\\p{Extended_Pictographic}", "gu");
function f(e) {
    var t, n, r;
    let { colorStrings: i, useReducedMotion: a, roleStyle: s, includeConvenienceGlow: l, animateGradient: d } = e,
        f = "username" === s,
        p = "dot" === s,
        _ = f && l,
        m = null != (t = null == i ? void 0 : i.primaryColor) ? t : c.Pbq,
        h = {
            "--custom-gradient-color-1": m,
            "--custom-gradient-color-2": null != (n = null == i ? void 0 : i.secondaryColor) ? n : m,
            "--custom-gradient-color-3": null != (r = null == i ? void 0 : i.tertiaryColor) ? r : m,
        },
        g = (null == i ? void 0 : i.tertiaryColor) != null ? u.threeColorGradient : u.twoColorGradient;
    return {
        gradientStyle: h,
        gradientClassname: o()(g, {
            [u.usernameGradient]: f,
            [u.convenienceGlowGradient]: _,
            [u.convenienceGlowGradientActive]: _ && d,
            [u.gradientDotAnimation]: !a && p,
            [u.animateGradient]: d && f,
        }),
        gradientGlowClassname: o()(g, u.usernameGlow, {
            [u.usernameGradient]: f,
            [u.animateGradient]: d && f,
            [u.usernameGlowActive]: f && d,
        }),
    };
}
function p(e) {
    let { colorStrings: t, roleStyle: n, includeConvenienceGlow: r, animateGradient: a } = e,
        o = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
    return i.useMemo(
        () =>
            f({
                colorStrings: t,
                useReducedMotion: o,
                roleStyle: n,
                includeConvenienceGlow: r,
                animateGradient: a,
            }),
        [t, n, r, o, a],
    );
}
function _(e, t, n) {
    return i.useMemo(() => {
        let i = [e, t, n].filter((e) => null != e),
            a = i.length >= 2,
            o = i.length > 1 ? 100 / (i.length - 1) : 0,
            s = i.map((e, t) =>
                (0, r.jsx)(
                    "stop",
                    {
                        offset: "".concat(t * o, "%"),
                        style: { stopColor: e },
                    },
                    t,
                ),
            ),
            l = i.join("");
        return {
            hasGradient: a,
            stops: s,
            gradientId: "dotGradient-".concat(l),
            animatedGradientId: "dotAnimatedGradient-".concat(l),
        };
    }, [e, t, n]);
}
function m(e, t) {
    return i.useMemo(() => {
        let n;
        if (null == e) return e;
        let i = new RegExp(d),
            a = [],
            s = 0;
        for (; null !== (n = i.exec(e)); )
            n.index > s && a.push(e.slice(s, n.index)),
                a.push(
                    (0, r.jsx)(
                        "span",
                        {
                            className: o()(u.emoji, t),
                            children: n[0],
                        },
                        "emoji".concat(n.index),
                    ),
                ),
                (s = i.lastIndex);
        return s < e.length && a.push(e.slice(s)), a;
    }, [e, t]);
}
