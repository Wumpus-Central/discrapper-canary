"use strict";
n.d(t, { O: () => E });
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
    f = n(82199);
function p(e) {
    let {
            className: t,
            Icon: n = o.g,
            iconSize: r,
            customGraphic: s,
            gradientColor: l = "green",
            tooltip: _,
            ...h
        } = e,
        p = () =>
            (0, i.jsx)(d.A, {
                className: a()(f.Xx, t),
                gradientColor: l,
                ...(null != s ? { customGraphic: s } : { Icon: n, iconSize: r }),
                ...h,
            });
    return null != _ && "object" == typeof _
        ? (0, i.jsx)(u.u, { assetSize: 48, asContainer: !0, element: "div", ..._, children: p() })
        : null != _ && "string" == typeof _
          ? (0, i.jsx)(c.m, { text: _, asContainer: !0, tag: "div", children: p() })
          : p();
}
function E(e) {
    let { text: t, endDatetime: n, ...s } = e,
        [a, o] = r.useState(() => (0, h.u)(n));
    return (
        (0, _.A)(() => {
            o((0, h.u)(n));
        }, 1e3),
        (0, i.jsx)(p, {
            ...s,
            children: (0, i.jsxs)("div", {
                className: f.Yu,
                children: [
                    (0, i.jsx)(l.E, { variant: "text-xs/semibold", color: "currentColor", children: t }),
                    null != a
                        ? (0, i.jsx)(l.E, {
                              className: f.cR,
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
