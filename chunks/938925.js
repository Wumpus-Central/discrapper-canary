n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(419354),
    o = n(827734),
    d = n(834730),
    c = n(628284),
    u = n(717421),
    m = n(939249),
    g = n(534514),
    h = n(404778),
    x = n(452027),
    _ = n(821609),
    p = n(147925),
    A = n(261384);
function E(e) {
    let { checked: t, children: n } = e;
    return (0, i.jsxs)("div", {
        className: A.nM,
        children: [
            (0, i.jsx)(d.E, {
                variant: "text-md/normal",
                color: "interactive-text-active",
                className: A.qg,
                children: n,
            }),
            t
                ? (0, i.jsx)(c.y, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                      className: r()(A.aL, A.xp),
                  })
                : (0, i.jsx)("div", { className: r()(A.aL, A.VL) }),
        ],
    });
}
function f(e) {
    let { title: t, children: n, buttonLabel: s, buttonCallback: r, disabled: o } = e,
        [d, c] = l.useState(!1),
        f = n.flatMap((e) => e.items.map((e) => e.completed)),
        j = f.filter((e) => e).length / f.length,
        N = (0, u.z)({ width: `${100 * j}%` });
    return (0, i.jsxs)("div", {
        className: A.kL,
        children: [
            (0, i.jsxs)(m.D, {
                className: A.jr,
                onClick: () => c((e) => !e),
                children: [
                    (0, i.jsx)(g.D, { variant: "heading-md/semibold", className: A.TK, children: t }),
                    (0, i.jsx)(p.A, { direction: d ? p.A.Directions.DOWN : p.A.Directions.UP, className: A.D }),
                ],
            }),
            (0, i.jsx)("div", { className: A.ux, children: (0, i.jsx)(a.animated.div, { className: A.zZ, style: N }) }),
            !d &&
                n.map((e, t) => {
                    let { title: n, items: s } = e;
                    return (0, i.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                t > 0 && (0, i.jsx)(h.c, { className: A.yF }),
                                (0, i.jsx)("div", {
                                    className: A.p8,
                                    children: (0, i.jsx)(x.D, {
                                        label: n,
                                        children: s.map((e, t) =>
                                            (0, i.jsx)(E, { children: e.description, checked: e.completed }, t),
                                        ),
                                    }),
                                }),
                            ],
                        },
                        t,
                    );
                }),
            null !== s &&
                "" !== s &&
                null !== r &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(h.c, { className: A.yF }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: A.x6,
                            children: (0, i.jsx)(_.$, {
                                variant: "primary",
                                size: "sm",
                                text: s,
                                onClick: r,
                                disabled: 1 !== j || o,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
