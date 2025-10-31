n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(347896),
    d = n(699758),
    c = n(913338),
    C = n(388032),
    u = n(807276);
function p(e) {
    var t, n, l, p;
    let { defaultCategory: h, onCategoryChange: m, className: _ } = e,
        [f, x] = i.useState(h),
        [j, g] = i.useState(null),
        b = (0, o.Z)(),
        L = i.useMemo(
            () => [
                {
                    name: C.intl.string(C.t["6Zuivx"]),
                    value: d.KN.Trick,
                    key: "Trick",
                    icon: (0, r.jsx)(s.yDF, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => g(d.KN.Trick),
                    onMouseLeave: () => g(null),
                },
                {
                    name: C.intl.string(C.t["2UeOlY"]),
                    value: d.KN.Treat,
                    key: "Treat",
                    icon: (0, r.jsx)(s.sq, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => g(d.KN.Treat),
                    onMouseLeave: () => g(null),
                },
            ],
            [],
        ),
        v = i.useCallback(
            (e) => {
                x(e.value), m(e.value);
            },
            [m],
        ),
        y =
            null == b || null == (n = b.segmentedControlAnimations) || null == (t = n.trick)
                ? void 0
                : t.getAnimationData,
        S =
            null == b || null == (p = b.segmentedControlAnimations) || null == (l = p.treat)
                ? void 0
                : l.getAnimationData;
    return (0, r.jsxs)("div", {
        className: a()(u.container, _),
        children: [
            (0, r.jsx)(c.w, {
                options: L,
                value: f,
                onChange: v,
            }),
            j === d.KN.Trick &&
                null != y &&
                (0, r.jsx)("div", {
                    className: a()(u.animationOverlay, u.trickAnimation),
                    children: (0, r.jsx)(s.Fmz, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: u.lottieAnimation,
                        importData: y,
                        renderer: s.Fmz.Renderers.SVG,
                        versionKey: +(j === d.KN.Trick),
                    }),
                }),
            j === d.KN.Treat &&
                null != S &&
                (0, r.jsx)("div", {
                    className: a()(u.animationOverlay, u.treatAnimation),
                    children: (0, r.jsx)(s.Fmz, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: u.lottieAnimation,
                        importData: S,
                        renderer: s.Fmz.Renderers.SVG,
                        versionKey: +(j === d.KN.Treat),
                    }),
                }),
        ],
    });
}
