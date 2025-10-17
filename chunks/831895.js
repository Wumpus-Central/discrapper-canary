n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    s = n(481060),
    o = n(347896),
    d = n(699758),
    c = n(913338),
    C = n(388032),
    u = n(807276);
function p(e) {
    var t, n, a, p;
    let { defaultCategory: h, onCategoryChange: _, className: m } = e,
        [f, x] = i.useState(h),
        [g, j] = i.useState(null),
        b = (0, o.Z)(),
        v = i.useMemo(
            () => [
                {
                    name: C.intl.string(C.t["6Zuiv7"]),
                    value: d.KN.Trick,
                    key: "Trick",
                    icon: (0, r.jsx)(s.yDF, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => j(d.KN.Trick),
                    onMouseLeave: () => j(null),
                },
                {
                    name: C.intl.string(C.t["2UeOlZ"]),
                    value: d.KN.Treat,
                    key: "Treat",
                    icon: (0, r.jsx)(s.sq, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => j(d.KN.Treat),
                    onMouseLeave: () => j(null),
                },
            ],
            [],
        ),
        S = i.useCallback(
            (e) => {
                x(e.value), _(e.value);
            },
            [_],
        ),
        L =
            null == b || null == (n = b.segmentedControlAnimations) || null == (t = n.trick)
                ? void 0
                : t.getAnimationData,
        y =
            null == b || null == (p = b.segmentedControlAnimations) || null == (a = p.treat)
                ? void 0
                : a.getAnimationData;
    return (0, r.jsxs)("div", {
        className: l()(u.container, m),
        children: [
            (0, r.jsx)(c.w, {
                options: v,
                value: f,
                onChange: S,
            }),
            g === d.KN.Trick &&
                null != L &&
                (0, r.jsx)("div", {
                    className: l()(u.animationOverlay, u.trickAnimation),
                    children: (0, r.jsx)(s.Fmz, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: u.lottieAnimation,
                        importData: L,
                        renderer: s.Fmz.Renderers.SVG,
                        versionKey: +(g === d.KN.Trick),
                    }),
                }),
            g === d.KN.Treat &&
                null != y &&
                (0, r.jsx)("div", {
                    className: l()(u.animationOverlay, u.treatAnimation),
                    children: (0, r.jsx)(s.Fmz, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: u.lottieAnimation,
                        importData: y,
                        renderer: s.Fmz.Renderers.SVG,
                        versionKey: +(g === d.KN.Treat),
                    }),
                }),
        ],
    });
}
