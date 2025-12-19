n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(347896),
    u = n(699758),
    c = n(913338),
    d = n(388032),
    p = n(761768);
function m(e) {
    var t, n, i, m;
    let { defaultCategory: h, onCategoryChange: f, className: g } = e,
        [y, j] = l.useState(h),
        [v, b] = l.useState(null),
        O = (0, o.Z)(),
        S = l.useMemo(
            () => [
                {
                    name: d.intl.string(d.t["6Zuivx"]),
                    value: u.KN.Trick,
                    key: "Trick",
                    icon: (0, r.jsx)(s.yDF, {
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
                    icon: (0, r.jsx)(s.sq, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => b(u.KN.Treat),
                    onMouseLeave: () => b(null),
                },
            ],
            [],
        ),
        x = l.useCallback(
            (e) => {
                j(e.value), f(e.value);
            },
            [f],
        ),
        P =
            null == O || null == (n = O.segmentedControlAnimations) || null == (t = n.trick)
                ? void 0
                : t.getAnimationData,
        E =
            null == O || null == (m = O.segmentedControlAnimations) || null == (i = m.treat)
                ? void 0
                : i.getAnimationData;
    return (0, r.jsxs)("div", {
        className: a()(p.container, g),
        children: [
            (0, r.jsx)(c.w, {
                options: S,
                value: y,
                onChange: x,
            }),
            v === u.KN.Trick &&
                null != P &&
                (0, r.jsx)("div", {
                    className: a()(p.animationOverlay, p.trickAnimation),
                    children: (0, r.jsx)(s.Fmz, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: p.lottieAnimation,
                        importData: P,
                        renderer: s.Fmz.Renderers.SVG,
                        versionKey: +(v === u.KN.Trick),
                    }),
                }),
            v === u.KN.Treat &&
                null != E &&
                (0, r.jsx)("div", {
                    className: a()(p.animationOverlay, p.treatAnimation),
                    children: (0, r.jsx)(s.Fmz, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: p.lottieAnimation,
                        importData: E,
                        renderer: s.Fmz.Renderers.SVG,
                        versionKey: +(v === u.KN.Treat),
                    }),
                }),
        ],
    });
}
