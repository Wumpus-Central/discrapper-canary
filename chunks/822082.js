n.d(t, { A: () => A });
var s = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(615300),
    c = n(837381),
    d = n(187322),
    o = n(442433);
n(687599);
var u = n(249611);
let A = function (e) {
    let {
            index: t,
            children: a,
            user: A,
            channel: h,
            onClick: m,
            isFocused: g,
            isActive: x,
            onOtherHover: S,
            className: E,
        } = e,
        [f, _] = l.useState(!1),
        [b, j] = l.useState(!1),
        p = () => {
            _(!0), !g || x || b || S?.();
        },
        v = () => {
            _(!1);
        };
    return (0, s.jsx)(c.tG, {
        id: h.id,
        children: (e) =>
            (0, s.jsx)(d.vN, {
                offset: { left: -8, right: -8 },
                children: (0, s.jsx)(r.A.div, {
                    className: i()(u.Cf, E, { [u.vu]: x || b, [u.CJ]: 0 === t }),
                    onContextMenu: (e) => {
                        null != A &&
                            (j(!0),
                            (0, o.L3)(
                                e,
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("97262"),
                                        n.e("32418"),
                                        n.e("22880"),
                                    ]).then(n.bind(n, 668569));
                                    return (t) => (0, s.jsx)(e, { ...t, user: A });
                                },
                                {
                                    onClose: () => {
                                        j(!1);
                                    },
                                },
                            ));
                    },
                    onMouseEnter: p,
                    onMouseLeave: v,
                    onClick: m ?? void 0,
                    style: { LIST_ROW_HEIGHT: 73, opacity: 1 },
                    ...e,
                    children: a(f || x || b),
                }),
            }),
    });
};
