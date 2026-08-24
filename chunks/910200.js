n.d(t, { Ay: () => C, O0: () => f });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(278416),
    s = n(834730),
    o = n(683063),
    u = n(866665),
    c = n(262427),
    d = n(812095),
    m = n(421108),
    p = n(898744);
function C(e) {
    let {
        className: t,
        Icon: n = a.TagIcon,
        iconSize: i,
        customGraphic: m,
        gradientColor: C = "green",
        tooltip: h,
        text: f,
        trailing: E,
        ...S
    } = e;
    function y() {
        return (0, l.jsx)(c.A, {
            className: r()(p.Xx, t),
            gradientColor: C,
            ...(null != m ? { customGraphic: m } : { Icon: n, iconSize: i }),
            ...S,
            children: (0, l.jsxs)("div", {
                className: p.Yu,
                children: [
                    (0, l.jsx)(s.E, {
                        variant: "text-xs/semibold",
                        color: "currentColor",
                        children: "string" == typeof f ? (0, d.U)(f) : f,
                    }),
                    (0, l.jsx)("div", { className: p.HF, children: E }),
                ],
            }),
        });
    }
    return null != h && "object" == typeof h
        ? (0, l.jsx)(o.u, { assetSize: 48, asContainer: !0, element: "div", ...h, children: y() })
        : null != h && "string" == typeof h
          ? (0, l.jsx)(u.m, { text: h, asContainer: !0, tag: "div", children: y() })
          : y();
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
        r = (0, m.dA)(n);
    return null != n && null == r ? null : (0, l.jsx)(h, { text: t, trailingText: null != r ? r : void 0, ...i });
}
