n.d(t, { Ay: () => C, O0: () => f });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(278416),
    s = n(834730),
    o = n(459192),
    u = n(866665),
    c = n(262427),
    d = n(812095),
    p = n(421108),
    m = n(547055);
function C(e) {
    let {
        className: t,
        Icon: n = a.g,
        iconSize: i,
        customGraphic: p,
        gradientColor: C = "green",
        tooltip: h,
        text: f,
        trailing: E,
        ...S
    } = e;
    function A() {
        return (0, l.jsx)(c.A, {
            className: r()(m.Xx, t),
            gradientColor: C,
            ...(null != p ? { customGraphic: p } : { Icon: n, iconSize: i }),
            ...S,
            children: (0, l.jsxs)("div", {
                className: m.Yu,
                children: [
                    (0, l.jsx)(s.E, {
                        variant: "text-xs/semibold",
                        color: "currentColor",
                        children: "string" == typeof f ? (0, d.U)(f) : f,
                    }),
                    (0, l.jsx)("div", { className: m.HF, children: E }),
                ],
            }),
        });
    }
    return null != h && "object" == typeof h
        ? (0, l.jsx)(o.u, { assetSize: 48, asContainer: !0, element: "div", ...h, children: A() })
        : null != h && "string" == typeof h
          ? (0, l.jsx)(u.m, { text: h, asContainer: !0, tag: "div", children: A() })
          : A();
}
function h(e) {
    let { trailingText: t, ...n } = e;
    return (0, l.jsx)(C, {
        trailing:
            null != t
                ? (0, l.jsx)(s.E, {
                      variant: "text-xs/medium",
                      color: "currentColor",
                      children: "string" == typeof t ? (0, d.U)(t) : t,
                  })
                : null,
        ...n,
    });
}
function f(e) {
    let { text: t, endDatetime: n, ...i } = e,
        r = (0, p.dA)(n);
    return null != n && null == r ? null : (0, l.jsx)(h, { text: t, trailingText: null != r ? r : void 0, ...i });
}
