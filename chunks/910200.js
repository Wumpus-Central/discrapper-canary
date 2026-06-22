"use strict";
n.d(t, { A: () => m, O: () => g });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(989349),
    l = n.n(o),
    u = n(278416),
    c = n(834730),
    d = n(459192),
    _ = n(990078),
    h = n(262427),
    f = n(396583),
    p = n(375708),
    E = n(82199);
function m(e) {
    let {
            className: t,
            Icon: n = u.g,
            iconSize: r,
            customGraphic: s,
            gradientColor: o = "green",
            tooltip: l,
            ...c
        } = e,
        f = () =>
            (0, i.jsx)(h.A, {
                className: a()(E.Xx, t),
                gradientColor: o,
                ...(null != s ? { customGraphic: s } : { Icon: n, iconSize: r }),
                ...c,
            });
    return null != l && "object" == typeof l
        ? (0, i.jsx)(d.u, { assetSize: 48, ...l, children: f() })
        : null != l && "string" == typeof l
          ? (0, i.jsx)(_.m, { text: l, children: f() })
          : f();
}
function g(e) {
    let { text: t, endDatetime: n, ...s } = e,
        [a, o] = r.useState(() => A(n));
    return (
        (0, f.A)(() => {
            o(A(n));
        }, 1e3),
        (0, i.jsx)(m, {
            ...s,
            children: (0, i.jsxs)("div", {
                className: E.Yu,
                children: [
                    (0, i.jsx)(c.E, { variant: "text-xs/semibold", color: "currentColor", children: t }),
                    null != a
                        ? (0, i.jsx)(c.E, {
                              className: E.cR,
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
function A(e) {
    if (null == e) return null;
    let t = l()(),
        n = l()(new Date(e)).diff(t, "days");
    return n <= 0 ? null : p.intl.formatToPlainString(p.t.BXpdIg, { days: Math.max(n, 1) });
}
