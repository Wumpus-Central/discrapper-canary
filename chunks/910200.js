n.d(t, { Ay: () => h, O0: () => f });
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
    m = n(898744);
function h(e) {
    let {
        className: t,
        Icon: n = a.TagIcon,
        iconSize: i,
        customGraphic: p,
        gradientColor: h = "green",
        tooltip: C,
        text: f,
        trailing: E,
        ...S
    } = e;
    function y() {
        return (0, l.jsx)(c.A, {
            className: r()(m.Xx, t),
            gradientColor: h,
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
    return null != C && "object" == typeof C
        ? (0, l.jsx)(o.u, { assetSize: 48, asContainer: !0, element: "div", ...C, children: y() })
        : null != C && "string" == typeof C
          ? (0, l.jsx)(u.m, { text: C, asContainer: !0, tag: "div", children: y() })
          : y();
}
function C(e) {
    let { trailingText: t, ...n } = e;
    return (0, l.jsx)(h, {
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
    return null != n && null == r ? null : (0, l.jsx)(C, { text: t, trailingText: null != r ? r : void 0, ...i });
}
