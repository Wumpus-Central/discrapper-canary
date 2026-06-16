"use strict";
n.d(t, { A: () => h, O: () => f });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(278416),
    o = n(834730),
    l = n(459192),
    u = n(990078),
    c = n(262427),
    d = n(240248),
    _ = n(82199);
function h(e) {
    let {
            className: t,
            Icon: n = a.g,
            customGraphic: r,
            gradientColor: d = "green",
            text: h,
            trailing: f,
            tooltip: p,
            ...E
        } = e,
        m = () =>
            (0, i.jsx)(c.A, {
                className: s()(_.Xx, t),
                gradientColor: d,
                ...(null != r ? { customGraphic: r } : { Icon: n }),
                ...E,
                children: (0, i.jsxs)("div", {
                    className: _.Yu,
                    children: [(0, i.jsx)(o.E, { variant: "text-xs/semibold", color: "currentColor", children: h }), f],
                }),
            });
    return null != p && "object" == typeof p
        ? (0, i.jsx)(l.u, { assetSize: 48, ...p, children: m() })
        : null != p && "string" == typeof p
          ? (0, i.jsx)(u.m, { text: p, children: m() })
          : m();
}
function f(e) {
    let { timeRemaining: t, ...n } = e;
    return (0, i.jsx)(h, {
        ...n,
        trailing: (0, d.uJ)(t)
            ? null
            : (0, i.jsx)(o.E, { className: _.cR, variant: "text-xs/medium", color: "currentColor", children: t }),
    });
}
