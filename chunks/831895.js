n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    i = n.n(a),
    o = n(481060),
    s = n(347896),
    d = n(699758),
    c = n(913338),
    u = n(388032),
    p = n(807276);
function m(e) {
    var t, n, a, m;
    let { defaultCategory: h, onCategoryChange: f, className: b } = e,
        [g, v] = l.useState(h),
        [P, x] = l.useState(null),
        y = (0, s.Z)(),
        j = l.useMemo(
            () => [
                {
                    name: u.intl.string(u.t["6Zuivx"]),
                    value: d.KN.Trick,
                    key: "Trick",
                    icon: (0, r.jsx)(o.yDF, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => x(d.KN.Trick),
                    onMouseLeave: () => x(null),
                },
                {
                    name: u.intl.string(u.t["2UeOlY"]),
                    value: d.KN.Treat,
                    key: "Treat",
                    icon: (0, r.jsx)(o.sq, {
                        size: "sm",
                        color: "currentColor",
                    }),
                    onMouseEnter: () => x(d.KN.Treat),
                    onMouseLeave: () => x(null),
                },
            ],
            [],
        ),
        S = l.useCallback(
            (e) => {
                v(e.value), f(e.value);
            },
            [f],
        ),
        _ =
            null == y || null == (n = y.segmentedControlAnimations) || null == (t = n.trick)
                ? void 0
                : t.getAnimationData,
        O =
            null == y || null == (m = y.segmentedControlAnimations) || null == (a = m.treat)
                ? void 0
                : a.getAnimationData;
    return (0, r.jsxs)("div", {
        className: i()(p.container, b),
        children: [
            (0, r.jsx)(c.w, {
                options: j,
                value: g,
                onChange: S,
            }),
            P === d.KN.Trick &&
                null != _ &&
                (0, r.jsx)("div", {
                    className: i()(p.animationOverlay, p.trickAnimation),
                    children: (0, r.jsx)(o.Fmz, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: p.lottieAnimation,
                        importData: _,
                        renderer: o.Fmz.Renderers.SVG,
                        versionKey: +(P === d.KN.Trick),
                    }),
                }),
            P === d.KN.Treat &&
                null != O &&
                (0, r.jsx)("div", {
                    className: i()(p.animationOverlay, p.treatAnimation),
                    children: (0, r.jsx)(o.Fmz, {
                        shouldAnimate: !0,
                        loop: !0,
                        autoplay: !0,
                        className: p.lottieAnimation,
                        importData: O,
                        renderer: o.Fmz.Renderers.SVG,
                        versionKey: +(P === d.KN.Treat),
                    }),
                }),
        ],
    });
}
