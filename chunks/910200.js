"use strict";
n.d(t, { O: () => m });
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
            gradientColor: l = "green",
            tooltip: _,
            ...h
        } = e,
        f = () =>
            (0, i.jsx)(d.A, {
                className: a()(p.Xx, t),
                gradientColor: l,
                ...(null != s ? { customGraphic: s } : { Icon: n, iconSize: r }),
                ...h,
            });
    return null != _ && "object" == typeof _
        ? (0, i.jsx)(u.u, { assetSize: 48, asContainer: !0, element: "div", ..._, children: f() })
        : null != _ && "string" == typeof _
          ? (0, i.jsx)(c.m, { text: _, asContainer: !0, tag: "div", children: f() })
          : f();
}
function m(e) {
    let { text: t, endDatetime: n, ...s } = e,
        [a, o] = r.useState(() => (0, h.u)(n));
    return (
        (0, _.A)(() => {
            o((0, h.u)(n));
        }, 1e3),
        (0, i.jsx)(E, {
            ...s,
            children: (0, i.jsxs)("div", {
                className: p.Yu,
                children: [
                    (0, i.jsx)(l.E, {
                        variant: "text-xs/semibold",
                        color: "currentColor",
                        children: "string" == typeof t ? (0, f.U)(t) : t,
                    }),
                    null != a
                        ? (0, i.jsx)(l.E, {
                              className: p.cR,
                              variant: "text-xs/medium",
                              color: "currentColor",
                              children: a,
                          })
                        : null,
                ],
            }),
        })
    );
}
