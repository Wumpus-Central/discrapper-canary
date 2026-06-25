"use strict";
n.d(t, { A: () => E, O: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(278416),
    l = n(834730),
    u = n(459192),
    c = n(990078),
    d = n(262427),
    _ = n(396583),
    h = n(421108),
    f = n(920948),
    p = n(719831);
function E(e) {
    let {
            className: t,
            Icon: n = o.g,
            iconSize: r,
            customGraphic: s,
            gradientColor: _ = "green",
            tooltip: h,
            text: E,
            trailingText: m,
            ...g
        } = e,
        A = () =>
            (0, i.jsx)(d.A, {
                className: a()(p.Xx, t),
                gradientColor: _,
                ...(null != s ? { customGraphic: s } : { Icon: n, iconSize: r }),
                ...g,
                children: (0, i.jsxs)("div", {
                    className: p.Yu,
                    children: [
                        (0, i.jsx)(l.E, {
                            variant: "text-xs/semibold",
                            color: "currentColor",
                            children: "string" == typeof E ? (0, f.U)(E) : E,
                        }),
                        null != m
                            ? (0, i.jsx)(l.E, {
                                  className: p.a9,
                                  variant: "text-xs/medium",
                                  color: "currentColor",
                                  children: "string" == typeof m ? (0, f.U)(m) : m,
                              })
                            : null,
                    ],
                }),
            });
    return null != h && "object" == typeof h
        ? (0, i.jsx)(u.u, { assetSize: 48, asContainer: !0, element: "div", ...h, children: A() })
        : null != h && "string" == typeof h
          ? (0, i.jsx)(c.m, { text: h, asContainer: !0, tag: "div", children: A() })
          : A();
}
function m(e) {
    let { text: t, endDatetime: n, ...s } = e,
        [a, o] = r.useState(() => (0, h.u)(n));
    return ((0, _.A)(() => {
        o((0, h.u)(n));
    }, 1e3),
    null != n && null == a)
        ? null
        : (0, i.jsx)(E, { text: t, trailingText: null != a ? a : void 0, ...s });
}
