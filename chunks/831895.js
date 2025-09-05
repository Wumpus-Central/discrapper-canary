n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(226690),
    o = n(481060),
    C = n(347896),
    d = n(699758),
    c = n(913338),
    u = n(388032),
    p = n(807276);
function x(e) {
    var t, n, l, x;
    let { defaultCategory: _, onCategoryChange: h, className: f } = e,
        [m, j] = i.useState(_),
        [L, g] = i.useState(null),
        b = (0, C.Z)(),
        y = i.useMemo(
            () => [
                {
                    name: u.intl.string(u.t["6Zuiv7"]),
                    value: d.KN.Trick,
                    key: "Trick",
                    icon: (0, r.jsx)(o.yDF, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => g(d.KN.Trick),
                    onMouseLeave: () => g(null),
                },
                {
                    name: u.intl.string(u.t["2UeOlZ"]),
                    value: d.KN.Treat,
                    key: "Treat",
                    icon: (0, r.jsx)(o.sq, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => g(d.KN.Treat),
                    onMouseLeave: () => g(null),
                },
            ],
            [],
        ),
        S = i.useCallback(
            (e) => {
                j(e.value), h(e.value);
            },
            [h],
        ),
        v =
            null == b || null == (n = b.segmentedControlAnimations) || null == (t = n.trick)
                ? void 0
                : t.getAnimationData,
        E =
            null == b || null == (x = b.segmentedControlAnimations) || null == (l = x.treat)
                ? void 0
                : l.getAnimationData;
    return (0, r.jsxs)("div", {
        className: a()(p.container, f),
        children: [
            (0, r.jsx)(c.w, {
                options: y,
                value: m,
                onChange: S,
            }),
            L === d.KN.Trick &&
                null != v &&
                (0, r.jsx)("div", {
                    className: a()(p.animationOverlay, p.trickAnimation),
                    children: (0, r.jsx)(s.F, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: p.lottieAnimation,
                        importData: v,
                        renderer: s.F.Renderers.SVG,
                        versionKey: +(L === d.KN.Trick),
                    }),
                }),
            L === d.KN.Treat &&
                null != E &&
                (0, r.jsx)("div", {
                    className: a()(p.animationOverlay, p.treatAnimation),
                    children: (0, r.jsx)(s.F, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: p.lottieAnimation,
                        importData: E,
                        renderer: s.F.Renderers.SVG,
                        versionKey: +(L === d.KN.Treat),
                    }),
                }),
        ],
    });
}
