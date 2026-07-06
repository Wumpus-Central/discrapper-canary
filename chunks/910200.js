n.d(t, { Ay: () => E, O0: () => f });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(278416),
    o = n(834730),
    u = n(459192),
    c = n(990078),
    d = n(262427),
    p = n(396583),
    m = n(421108),
    h = n(920948),
    C = n(82199);
function E(e) {
    let {
            className: t,
            Icon: n = s.g,
            iconSize: i,
            customGraphic: r,
            gradientColor: p = "green",
            tooltip: m,
            text: E,
            trailing: A,
            ...f
        } = e,
        S = () =>
            (0, l.jsx)(d.A, {
                className: a()(C.Xx, t),
                gradientColor: p,
                ...(null != r ? { customGraphic: r } : { Icon: n, iconSize: i }),
                ...f,
                children: (0, l.jsxs)("div", {
                    className: C.Yu,
                    children: [
                        (0, l.jsx)(o.E, {
                            variant: "text-xs/semibold",
                            color: "currentColor",
                            children: "string" == typeof E ? (0, h.U)(E) : E,
                        }),
                        (0, l.jsx)("div", { className: C.HF, children: A }),
                    ],
                }),
            });
    return null != m && "object" == typeof m
        ? (0, l.jsx)(u.u, { assetSize: 48, asContainer: !0, element: "div", ...m, children: S() })
        : null != m && "string" == typeof m
          ? (0, l.jsx)(c.m, { text: m, asContainer: !0, tag: "div", children: S() })
          : S();
}
function A(e) {
    let { trailingText: t, ...n } = e;
    return (0, l.jsx)(E, {
        trailing:
            null != t
                ? (0, l.jsx)(o.E, {
                      variant: "text-xs/medium",
                      color: "currentColor",
                      children: "string" == typeof t ? (0, h.U)(t) : t,
                  })
                : null,
        ...n,
    });
}
function f(e) {
    let { text: t, endDatetime: n, ...r } = e,
        [a, s] = i.useState(() => (0, m.u)(n));
    return ((0, p.A)(() => {
        s((0, m.u)(n));
    }, 1e3),
    null != n && null == a)
        ? null
        : (0, l.jsx)(A, { text: t, trailingText: null != a ? a : void 0, ...r });
}
