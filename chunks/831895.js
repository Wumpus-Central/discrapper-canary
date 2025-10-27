n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(347896),
    d = n(699758),
    C = n(913338),
    c = n(388032),
    u = n(807276);
function p(e) {
    var t, n, a, p;
    let { defaultCategory: _, onCategoryChange: h, className: m } = e,
        [f, x] = i.useState(_),
        [g, j] = i.useState(null),
        b = (0, s.Z)(),
        y = i.useMemo(
            () => [
                {
                    name: c.intl.string(c.t["6Zuivx"]),
                    value: d.KN.Trick,
                    key: "Trick",
                    icon: (0, r.jsx)(o.yDF, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => j(d.KN.Trick),
                    onMouseLeave: () => j(null),
                },
                {
                    name: c.intl.string(c.t["2UeOlY"]),
                    value: d.KN.Treat,
                    key: "Treat",
                    icon: (0, r.jsx)(o.sq, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => j(d.KN.Treat),
                    onMouseLeave: () => j(null),
                },
            ],
            [],
        ),
        L = i.useCallback(
            (e) => {
                x(e.value), h(e.value);
            },
            [h],
        ),
        v =
            null == b || null == (n = b.segmentedControlAnimations) || null == (t = n.trick)
                ? void 0
                : t.getAnimationData,
        S =
            null == b || null == (p = b.segmentedControlAnimations) || null == (a = p.treat)
                ? void 0
                : a.getAnimationData;
    return (0, r.jsxs)("div", {
        className: l()(u.container, m),
        children: [
            (0, r.jsx)(C.w, {
                options: y,
                value: f,
                onChange: L,
            }),
            g === d.KN.Trick &&
                null != v &&
                (0, r.jsx)("div", {
                    className: l()(u.animationOverlay, u.trickAnimation),
                    children: (0, r.jsx)(o.Fmz, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: u.lottieAnimation,
                        importData: v,
                        renderer: o.Fmz.Renderers.SVG,
                        versionKey: +(g === d.KN.Trick),
                    }),
                }),
            g === d.KN.Treat &&
                null != S &&
                (0, r.jsx)("div", {
                    className: l()(u.animationOverlay, u.treatAnimation),
                    children: (0, r.jsx)(o.Fmz, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: u.lottieAnimation,
                        importData: S,
                        renderer: o.Fmz.Renderers.SVG,
                        versionKey: +(g === d.KN.Treat),
                    }),
                }),
        ],
    });
}
