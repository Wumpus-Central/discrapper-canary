n.d(t, { Z: () => f }), n(361932), n(187205), n(388685);
var i = n(255367),
    l = n(73800),
    s = n(120356),
    o = n.n(s),
    r = n(717976),
    a = n(481060),
    u = n(59662),
    c = n(854014),
    d = n(643153);
function f(e) {
    let { node: t } = e,
        { history: n, activeIndex: s, pushPanel: o } = (0, u.t)(),
        r = t.useTitle(),
        a = l.useMemo(() => t.layout.flatMap((e) => e.layout), [t]),
        d = n[s] === t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {
                icon: t.icon,
                title: r,
                active: d,
                onClick: () => o(t),
            }),
            d && a.length > 1 && (0, i.jsx)(g, { categories: a }),
        ],
    });
}
function g(e) {
    let { categories: t } = e,
        [n, s] = l.useState(0),
        [u, c] = (0, a.q_F)(() => ({
            y: 0,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300,
            },
        })),
        f = l.useMemo(
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
                children: (0, i.jsx)(r.animated.div, {
                    className: d.thumb,
                    style: u,
                }),
            }),
            (0, i.jsx)("ul", {
                children: f.map((e, t) => {
                    let { title: l, key: r } = e;
                    return (0, i.jsx)(
                        a.P3F,
                        {
                            onClick: () => {
                                s(t), c({ y: 40 * t });
                            },
                            tag: "li",
                            className: o()({ [d.active]: t === n }),
                            children: l,
                        },
                        r,
                    );
                }),
            }),
        ],
    });
}
