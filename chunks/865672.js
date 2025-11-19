n.d(t, {
    De: () => p,
    EJ: () => h,
    Ic: () => _,
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
    u = n(842926);
let d = RegExp("\\p{Extended_Pictographic}", "gu");
function f(e) {
    var t, n, r;
    let { colorStrings: i, useReducedMotion: a, roleStyle: s, includeConvenienceGlow: l, animateGradient: d } = e,
        f = "username" === s,
        _ = "dot" === s,
        p = f && l,
        h = null != (t = null == i ? void 0 : i.primaryColor) ? t : c.Pbq,
        m = {
            "--custom-gradient-color-1": h,
            "--custom-gradient-color-2": null != (n = null == i ? void 0 : i.secondaryColor) ? n : h,
            "--custom-gradient-color-3": null != (r = null == i ? void 0 : i.tertiaryColor) ? r : h,
        },
        g = (null == i ? void 0 : i.tertiaryColor) != null ? u.threeColorGradient : u.twoColorGradient;
    return {
        gradientStyle: m,
        gradientClassname: o()(g, {
            [u.usernameGradient]: f,
            [u.convenienceGlowGradient]: p,
            [u.convenienceGlowGradientActive]: p && d,
            [u.gradientDotAnimation]: !a && _,
            [u.animateGradient]: d && f,
        }),
        gradientGlowClassname: o()(g, u.usernameGlow, {
            [u.usernameGradient]: f,
            [u.animateGradient]: d && f,
            [u.usernameGlowActive]: f && d,
        }),
    };
}
function _(e) {
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
function p(e, t, n) {
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
function h(e, t) {
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
