n.d(t, { Z: () => f }), n(361932), n(187205), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(120356),
    o = n.n(r),
    s = n(202841),
    a = n(481060),
    u = n(59662),
    c = n(854014),
    d = n(643153);
function f(e) {
    let { node: t } = e,
        { currentPanel: n, setCurrentPanel: r, setShowNavigationMobile: o } = (0, u.t)(),
        s = t.useTitle(),
        a = l.useMemo(() => t.layout.flatMap((e) => e.layout), [t]),
        d = (null == n ? void 0 : n.key) === t.key;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {
                icon: t.icon,
                title: s,
                active: d,
                onClick: () => {
                    r(t), o(!1);
                },
            }),
            d && a.length > 1 && (0, i.jsx)(g, { categories: a }),
        ],
    });
}
function g(e) {
    let { categories: t } = e,
        [n, r] = l.useState(0),
        { setShowNavigationMobile: c } = (0, u.t)(),
        [f, g] = (0, a.q_F)(() => ({
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
                        };
                    })
                    .filter((e) => {
                        let { title: t } = e;
                        return null != t;
                    }),
            [t],
        );
    return (0, i.jsxs)("div", {
        className: d.subnav,
        children: [
            (0, i.jsx)("div", {
                className: d.track,
                children: (0, i.jsx)(s.animated.div, {
                    className: d.thumb,
                    style: f,
                }),
            }),
            (0, i.jsx)("ul", {
                children: v.map((e, t) => {
                    let { title: l, key: s } = e;
                    return (0, i.jsx)(
                        a.P3F,
                        {
                            onClick: () => {
                                r(t), g({ y: 40 * t }), c(!1);
                            },
                            tag: "li",
                            className: o()({ [d.active]: t === n }),
                            children: l,
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
