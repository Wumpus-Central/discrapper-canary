n.d(t, { Z: () => g }), n(361932), n(187205), n(388685);
var l = n(951288),
    i = n(647438),
    r = n(120356),
    s = n.n(r),
    u = n(202841),
    o = n(481060),
    a = n(59662),
    c = n(854014),
    d = n(388032),
    f = n(643153);
function g(e) {
    var t, n, r, s, u;
    let { node: f, visibleContent: g } = e,
        { currentPanel: m, setCurrentPanel: j, setShowNavigationMobile: b } = (0, a.t)(),
        { useTitle: y, trailing: x } = f,
        p = y(),
        h = null != (s = null == x || null == (t = x.useDecoration) ? void 0 : t.call(x)) ? s : null,
        O = null != (u = null == x || null == (n = x.useBadgeCount) ? void 0 : n.call(x)) ? u : null,
        T = i.useMemo(() => f.layout.flatMap((e) => e.layout), [f]),
        C = null != g && (null == x || null == (r = x.newIndicatorDismissibleContentTypes) ? void 0 : r.includes(g)),
        N = (null == m ? void 0 : m.key) === f.key;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(c.Z, {
                icon: f.icon,
                title: p,
                active: N,
                trailing: (0, l.jsx)(() => {
                    if (C) {
                        var e;
                        return null != (e = null == x ? void 0 : x.newIndicatorBadgeOverride)
                            ? e
                            : (0, l.jsx)(o.IGR, { text: d.intl.string(d.t.y2b7CA) });
                    }
                    return null != O && O > 0 ? (0, l.jsx)(o.mAB, { count: O }) : null != h ? h : null;
                }, {}),
                onClick: () => {
                    j(f), b(!1);
                },
            }),
            N && T.length > 1 && (0, l.jsx)(v, { categories: T }),
        ],
    });
}
function v(e) {
    let { categories: t } = e,
        [n, r] = i.useState(0),
        { setShowNavigationMobile: c } = (0, a.t)(),
        [d, g] = (0, o.q_F)(() => ({
            y: 0,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300,
            },
        })),
        v = i.useMemo(
            () =>
                t
                    .map((e) => {
                        var t;
                        return {
                            title: null == (t = e.useTitle) ? void 0 : t.call(e),
                            key: e.key,
                        };
                    })
                    .filter((e) => {
                        let { title: t } = e;
                        return null != t;
                    }),
            [t],
        );
    return (0, l.jsxs)("div", {
        className: f.subnav,
        children: [
            (0, l.jsx)("div", {
                className: f.track,
                children: (0, l.jsx)(u.animated.div, {
                    className: f.thumb,
                    style: d,
                }),
            }),
            (0, l.jsx)("ul", {
                children: v.map((e, t) => {
                    let { title: i, key: u } = e;
                    return (0, l.jsx)(
                        o.P3F,
                        {
                            onClick: () => {
                                r(t), g({ y: 40 * t }), c(!1);
                            },
                            tag: "li",
                            className: s()({ [f.active]: t === n }),
                            children: i,
                        },
                        u,
                    );
                }),
            }),
        ],
    });
}
