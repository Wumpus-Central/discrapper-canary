n.d(t, { Z: () => f }), n(361932), n(187205), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(202841),
    a = n(481060),
    u = n(59662),
    c = n(854014),
    d = n(388032),
    g = n(643153);
function f(e) {
    var t, n, i, o, s;
    let { node: g, visibleContent: f } = e,
        { currentPanel: v, navigateTo: E, setShowNavigationMobile: O } = (0, u.t)(),
        { useTitle: N, trailing: b } = g,
        T = N(),
        _ = null != (o = null == b || null == (t = b.useDecoration) ? void 0 : t.call(b)) ? o : null,
        I = null != (s = null == b || null == (n = b.useBadgeCount) ? void 0 : n.call(b)) ? s : null,
        p = l.useMemo(() => g.layout.flatMap((e) => e.layout), [g]),
        m = null != f && (null == b || null == (i = b.newIndicatorDismissibleContentTypes) ? void 0 : i.includes(f)),
        S = (null == v ? void 0 : v.key) === g.key;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Z, {
                icon: g.icon,
                title: T,
                active: S,
                trailing: (0, r.jsx)(() => {
                    if (m) {
                        var e;
                        return null != (e = null == b ? void 0 : b.newIndicatorBadgeOverride)
                            ? e
                            : (0, r.jsx)(a.IGR, { text: d.intl.string(d.t.y2b7CA) });
                    }
                    return null != I && I > 0 ? (0, r.jsx)(a.mAB, { count: I }) : null != _ ? _ : null;
                }, {}),
                onClick: () => {
                    E(g), O(!1);
                },
            }),
            S && p.length > 1 && (0, r.jsx)(y, { categories: p }),
        ],
    });
}
function y(e) {
    let { categories: t } = e,
        [n, i] = l.useState(0),
        { setShowNavigationMobile: c, navigateTo: d } = (0, u.t)(),
        [f, y] = (0, a.q_F)(() => ({
            y: 0,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300,
            },
        })),
        v = l.useMemo(
            () =>
                t
                    .map((e) => {
                        var t;
                        return {
                            title: null == (t = e.useTitle) ? void 0 : t.call(e),
                            key: e.key,
                            type: e.type,
                        };
                    })
                    .filter((e) => {
                        let { title: t } = e;
                        return null != t;
                    }),
            [t],
        );
    return (0, r.jsxs)("div", {
        className: g.subnav,
        children: [
            (0, r.jsx)("div", {
                className: g.track,
                children: (0, r.jsx)(s.animated.div, {
                    className: g.thumb,
                    style: f,
                }),
            }),
            (0, r.jsx)("ul", {
                children: v.map((e, t) => {
                    let { title: l, key: s, type: u } = e;
                    return (0, r.jsx)(
                        a.P3F,
                        {
                            onClick: () => {
                                var e;
                                return (
                                    (e = {
                                        key: s,
                                        type: u,
                                    }),
                                    void (i(t), y({ y: 36 * t }), c(!1), d(e))
                                );
                            },
                            tag: "li",
                            className: o()({ [g.active]: t === n }),
                            children: l,
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
