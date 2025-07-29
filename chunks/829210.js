(n.d(t, { Z: () => m }), n(361932), n(187205), n(388685));
var i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(564854),
    r = n(481060),
    c = n(59662),
    u = n(281215),
    d = n(854014),
    f = n(610844);
function m(e) {
    let { node: t } = e,
        { history: n, activeIndex: a, pushPanel: o } = (0, c.t)(),
        { icon: s } = t.data,
        l = t.data.useTitle(),
        r = t.data.layout.flatMap((e) => (e.isDataOfType(u.Jq.CATEGORY) ? [e] : e.isDataOfType(u.Jq.PANE) ? e.data.layout : [])),
        f = n[a] === t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Z, {
                icon: s,
                title: l,
                active: f,
                onClick: () => o(t)
            }),
            f && r.length > 1 && (0, i.jsx)(v, { categories: r })
        ]
    });
}
function v(e) {
    let { categories: t } = e,
        [n, o] = a.useState(0),
        [c, u] = (0, r.q_F)(() => ({
            y: 0,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300
            }
        })),
        d = a.useMemo(
            () =>
                t
                    .map((e) => {
                        var t, n;
                        return {
                            title: null == (t = (n = e.data).useTitle) ? void 0 : t.call(n),
                            key: e.key
                        };
                    })
                    .filter((e) => {
                        let { title: t } = e;
                        return null != t;
                    }),
            [t]
        );
    return (0, i.jsxs)('div', {
        className: f.subnav,
        children: [
            (0, i.jsx)('div', {
                className: f.track,
                children: (0, i.jsx)(l.animated.div, {
                    className: f.thumb,
                    style: c
                })
            }),
            (0, i.jsx)('ul', {
                children: d.map((e, t) => {
                    let { title: a, key: l } = e;
                    return (0, i.jsx)(
                        r.P3F,
                        {
                            onClick: () => {
                                (o(t), u({ y: 40 * t }));
                            },
                            tag: 'li',
                            className: s()({ [f.active]: t === n }),
                            children: a
                        },
                        l
                    );
                })
            })
        ]
    });
}
