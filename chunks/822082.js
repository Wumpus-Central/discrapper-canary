n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(615300),
    o = n(837381),
    d = n(397927),
    c = n(442433);
n(687599);
var u = n(58826);
let A = function (e) {
    let {
            index: t,
            children: l,
            user: A,
            channel: h,
            onClick: _,
            isFocused: m,
            isActive: p,
            onOtherHover: g,
            className: E,
        } = e,
        [I, f] = r.useState(!1),
        [C, T] = r.useState(!1),
        N = () => {
            f(!0), !m || p || C || g?.();
        },
        S = () => {
            f(!1);
        };
    return (0, i.jsx)(o.tG, {
        id: h.id,
        children: (e) =>
            (0, i.jsx)(d.vN3, {
                offset: { left: -8, right: -8 },
                children: (0, i.jsx)(s.A.div, {
                    className: a()(u.Cf, E, { [u.vu]: p || C, [u.CJ]: 0 === t }),
                    onContextMenu: (e) => {
                        null != A &&
                            (T(!0),
                            (0, c.L3)(
                                e,
                                async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("97262"),
                                        n.e("32418"),
                                        n.e("45689"),
                                    ]).then(n.bind(n, 668569));
                                    return (t) => (0, i.jsx)(e, { ...t, user: A });
                                },
                                {
                                    onClose: () => {
                                        T(!1);
                                    },
                                },
                            ));
                    },
                    onMouseEnter: N,
                    onMouseLeave: S,
                    onClick: _ ?? void 0,
                    style: { LIST_ROW_HEIGHT: 73, opacity: 1 },
                    ...e,
                    children: l(I || p || C),
                }),
            }),
    });
};
