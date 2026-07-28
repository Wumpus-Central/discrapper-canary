n.d(t, { Ay: () => E, O0: () => A });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(278416),
    o = n(834730),
    u = n(459192),
    c = n(866665),
    d = n(262427),
    p = n(396583),
    m = n(812095),
    C = n(421108),
    h = n(547055);
function E(e) {
    let {
        className: t,
        Icon: n = s.g,
        iconSize: i,
        customGraphic: r,
        gradientColor: p = "green",
        tooltip: C,
        text: E,
        trailing: f,
        ...A
    } = e;
    function S() {
        return (0, l.jsx)(d.A, {
            className: a()(h.Xx, t),
            gradientColor: p,
            ...(null != r ? { customGraphic: r } : { Icon: n, iconSize: i }),
            ...A,
            children: (0, l.jsxs)("div", {
                className: h.Yu,
                children: [
                    (0, l.jsx)(o.E, {
                        variant: "text-xs/semibold",
                        color: "currentColor",
                        children: "string" == typeof E ? (0, m.U)(E) : E,
                    }),
                    (0, l.jsx)("div", { className: h.HF, children: f }),
                ],
            }),
        });
    }
    return null != C && "object" == typeof C
        ? (0, l.jsx)(u.u, { assetSize: 48, asContainer: !0, element: "div", ...C, children: S() })
        : null != C && "string" == typeof C
          ? (0, l.jsx)(c.m, { text: C, asContainer: !0, tag: "div", children: S() })
          : S();
}
function f(e) {
    let { trailingText: t, ...n } = e;
    return (0, l.jsx)(E, {
        trailing:
            null != t
                ? (0, l.jsx)(o.E, {
                      variant: "text-xs/medium",
                      color: "currentColor",
                      children: "string" == typeof t ? (0, m.U)(t) : t,
                  })
                : null,
        ...n,
    });
}
function A(e) {
    let { text: t, endDatetime: n, ...r } = e,
        [a, s] = i.useState(() => (0, C.u)(n));
    return ((0, p.A)(() => {
        s((0, C.u)(n));
    }, 1e3),
    null != n && null == a)
        ? null
        : (0, l.jsx)(f, { text: t, trailingText: null != a ? a : void 0, ...r });
}
