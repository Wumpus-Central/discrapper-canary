n.d(t, { Z: () => m }), n(361932), n(187205), n(388685);
var i = n(255367),
    o = n(73800),
    l = n(120356),
    r = n.n(l),
    a = n(717976),
    s = n(481060),
    c = n(59662),
    u = n(28682),
    d = n(854014),
    f = n(610844);
function m(e) {
    let { node: t } = e,
        { history: n, activeIndex: l, pushPanel: r } = (0, c.t)(),
        a = t.useTitle(),
        s = o.useMemo(
            () => t.layout.flatMap((e) => (e.type === u.J.CATEGORY ? [e] : e.type === u.J.PANE ? e.layout : [])),
            [t],
        ),
        f = n[l] === t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Z, {
                icon: t.icon,
                title: a,
                active: f,
                onClick: () => r(t),
            }),
            f && s.length > 1 && (0, i.jsx)(x, { categories: s }),
        ],
    });
}
function x(e) {
    let { categories: t } = e,
        [n, l] = o.useState(0),
        [c, u] = (0, s.q_F)(() => ({
            y: 0,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300,
            },
        })),
        d = o.useMemo(
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
        className: f.subnav,
        children: [
            (0, i.jsx)("div", {
                className: f.track,
                children: (0, i.jsx)(a.animated.div, {
                    className: f.thumb,
                    style: c,
                }),
            }),
            (0, i.jsx)("ul", {
                children: d.map((e, t) => {
                    let { title: o, key: a } = e;
                    return (0, i.jsx)(
                        s.P3F,
                        {
                            onClick: () => {
                                l(t), u({ y: 40 * t });
                            },
                            tag: "li",
                            className: r()({ [f.active]: t === n }),
                            children: o,
                        },
                        a,
                    );
                }),
            }),
        ],
    });
}
