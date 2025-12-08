n.d(t, { Z: () => p }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(347896),
    u = n(699758),
    c = n(913338),
    d = n(388032),
    m = n(807276);
function p(e) {
    var t, n, i, p;
    let { defaultCategory: h, onCategoryChange: f, className: g } = e,
        [v, j] = r.useState(h),
        [y, b] = r.useState(null),
        S = (0, o.Z)(),
        x = r.useMemo(
            () => [
                {
                    name: d.intl.string(d.t["6Zuivx"]),
                    value: u.KN.Trick,
                    key: "Trick",
                    icon: (0, l.jsx)(s.yDF, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => b(u.KN.Trick),
                    onMouseLeave: () => b(null),
                },
                {
                    name: d.intl.string(d.t["2UeOlY"]),
                    value: u.KN.Treat,
                    key: "Treat",
                    icon: (0, l.jsx)(s.sq, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => b(u.KN.Treat),
                    onMouseLeave: () => b(null),
                },
            ],
            [],
        ),
        P = r.useCallback(
            (e) => {
                j(e.value), f(e.value);
            },
            [f],
        ),
        O =
            null == S || null == (n = S.segmentedControlAnimations) || null == (t = n.trick)
                ? void 0
                : t.getAnimationData,
        E =
            null == S || null == (p = S.segmentedControlAnimations) || null == (i = p.treat)
                ? void 0
                : i.getAnimationData;
    return (0, l.jsxs)("div", {
        className: a()(m.container, g),
        children: [
            (0, l.jsx)(c.w, {
                options: x,
                value: v,
                onChange: P,
            }),
            y === u.KN.Trick &&
                null != O &&
                (0, l.jsx)("div", {
                    className: a()(m.animationOverlay, m.trickAnimation),
                    children: (0, l.jsx)(s.Fmz, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: m.lottieAnimation,
                        importData: O,
                        renderer: s.Fmz.Renderers.SVG,
                        versionKey: +(y === u.KN.Trick),
                    }),
                }),
            y === u.KN.Treat &&
                null != E &&
                (0, l.jsx)("div", {
                    className: a()(m.animationOverlay, m.treatAnimation),
                    children: (0, l.jsx)(s.Fmz, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: m.lottieAnimation,
                        importData: E,
                        renderer: s.Fmz.Renderers.SVG,
                        versionKey: +(y === u.KN.Treat),
                    }),
                }),
        ],
    });
}
