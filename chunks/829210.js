n.d(t, { Z: () => f }), n(361932), n(187205), n(388685);
var i = n(951288),
    l = n(647438),
    o = n(120356),
    r = n.n(o),
    s = n(803948),
    a = n(481060),
    u = n(59662),
    c = n(854014),
    d = n(643153);
function f(e) {
    let { node: t } = e,
        { currentPanel: n, setCurrentPanel: o } = (0, u.t)(),
        r = t.useTitle(),
        s = l.useMemo(() => t.layout.flatMap((e) => e.layout), [t]),
        a = (null == n ? void 0 : n.key) === t.key;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, {
                icon: t.icon,
                title: r,
                active: a,
                onClick: () => o(t),
            }),
            a && s.length > 1 && (0, i.jsx)(g, { categories: s }),
        ],
    });
}
function g(e) {
    let { categories: t } = e,
        [n, o] = l.useState(0),
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
                children: (0, i.jsx)(s.animated.div, {
                    className: d.thumb,
                    style: u,
                }),
            }),
            (0, i.jsx)("ul", {
                children: f.map((e, t) => {
                    let { title: l, key: s } = e;
                    return (0, i.jsx)(
                        a.P3F,
                        {
                            onClick: () => {
                                o(t), c({ y: 40 * t });
                            },
                            tag: "li",
                            className: r()({ [d.active]: t === n }),
                            children: l,
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
