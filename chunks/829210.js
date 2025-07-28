(n.d(t, { Z: () => m }), n(361932), n(187205), n(388685));
var a = n(255367),
    i = n(73800),
    o = n(120356),
    s = n.n(o),
    r = n(652141),
    l = n(481060),
    c = n(59662),
    d = n(281215),
    u = n(854014),
    f = n(610844);
function m(e) {
    let { node: t } = e,
        { history: n, activeIndex: i, pushPanel: o } = (0, c.t)(),
        { icon: s } = t.data,
        r = t.data.useTitle(),
        l = t.data.layout.flatMap((e) => (e.isDataOfType(d.Jq.CATEGORY) ? [e] : e.isDataOfType(d.Jq.PANE) ? e.data.layout : [])),
        f = n[i] === t;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.Z, {
                icon: s,
                title: r,
                active: f,
                onClick: () => o(t)
            }),
            f && l.length > 1 && (0, a.jsx)(h, { categories: l })
        ]
    });
}
function h(e) {
    let { categories: t } = e,
        [n, o] = i.useState(0),
        [c, d] = (0, l.q_F)(() => ({
            y: 0,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300
            }
        })),
        u = i.useMemo(
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
    return (0, a.jsxs)('div', {
        className: f.subnav,
        children: [
            (0, a.jsx)('div', {
                className: f.track,
                children: (0, a.jsx)(r.animated.div, {
                    className: f.thumb,
                    style: c
                })
            }),
            (0, a.jsx)('ul', {
                children: u.map((e, t) => {
                    let { title: i, key: r } = e;
                    return (0, a.jsx)(
                        l.P3F,
                        {
                            onClick: () => {
                                (o(t), d({ y: 40 * t }));
                            },
                            tag: 'li',
                            className: s()({ [f.active]: t === n }),
                            children: i
                        },
                        r
                    );
                })
            })
        ]
    });
}
