"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(497766),
    o = n(827734),
    d = n(397927),
    c = n(147925),
    u = n(68131);
function m(e) {
    let { checked: t, children: n } = e;
    return (0, i.jsxs)("div", {
        className: u.nM,
        children: [
            (0, i.jsx)(d.Text, {
                variant: "text-md/normal",
                color: "interactive-text-active",
                className: u.qg,
                children: n,
            }),
            t
                ? (0, i.jsx)(d.yr3, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: o.A.unsafe_rawColors.WHITE.css,
                      className: r()(u.aL, u.xp),
                  })
                : (0, i.jsx)("div", { className: r()(u.aL, u.VL) }),
        ],
    });
}
function g(e) {
    let { title: t, children: n, buttonLabel: l, buttonCallback: r, disabled: o } = e,
        [g, x] = s.useState(!1),
        h = n.flatMap((e) => e.items.map((e) => e.completed)),
        _ = h.filter((e) => e).length / h.length,
        p = (0, d.zhh)({ width: `${100 * _}%` });
    return (0, i.jsxs)("div", {
        className: u.kL,
        children: [
            (0, i.jsxs)(d.DUT, {
                className: u.jr,
                onClick: () => x((e) => !e),
                children: [
                    (0, i.jsx)(d.Heading, { variant: "heading-md/semibold", className: u.TK, children: t }),
                    (0, i.jsx)(c.A, { direction: g ? c.A.Directions.DOWN : c.A.Directions.UP, className: u.D }),
                ],
            }),
            (0, i.jsx)("div", { className: u.ux, children: (0, i.jsx)(a.animated.div, { className: u.zZ, style: p }) }),
            !g &&
                n.map((e, t) => {
                    let { title: n, items: l } = e;
                    return (0, i.jsxs)(
                        s.Fragment,
                        {
                            children: [
                                t > 0 && (0, i.jsx)(d.cGx, { className: u.yF }),
                                (0, i.jsx)("div", {
                                    className: u.p8,
                                    children: (0, i.jsx)(d.D0$, {
                                        label: n,
                                        children: l.map((e, t) =>
                                            (0, i.jsx)(m, { children: e.description, checked: e.completed }, t),
                                        ),
                                    }),
                                }),
                            ],
                        },
                        t,
                    );
                }),
            null !== l &&
                "" !== l &&
                null !== r &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(d.cGx, { className: u.yF }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: u.x6,
                            children: (0, i.jsx)(d.Button, {
                                variant: "primary",
                                size: "sm",
                                text: l,
                                onClick: r,
                                disabled: 1 !== _ || o,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
