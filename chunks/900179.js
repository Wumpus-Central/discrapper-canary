n.d(t, { A: () => _ });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(282802),
    o = n.n(i),
    d = n(661531),
    c = n(866665),
    u = n(140735),
    f = n(707554),
    m = n(297264),
    g = n(834730),
    p = n(915089),
    E = n(94343),
    h = n(716804),
    x = n(161185);
let b = Object.fromEntries(Object.keys(d.A.colors).map((e) => [o()(e), e]));
function A(e) {
    let { icon: t, size: n = "xxs", tooltip: l } = e,
        r = (0, a.jsx)(t, { size: n, color: "currentColor", className: x.yK, "aria-hidden": !0 });
    return null == l ? r : (0, a.jsx)(c.m, { text: l, asContainer: !0, children: r });
}
function _(e) {
    let {
            children: t,
            heading: n,
            headingClassName: r,
            headingVariant: i = "text-xs/semibold",
            headingColor: o = "text-default",
            headingIcon: c,
            hideHeading: _ = !1,
            introText: N,
            className: R,
            scrollTargetId: v,
        } = e,
        j = (0, p.GV)(),
        I = l.useRef(null),
        T = (0, h.g)(),
        y = null != v && T === v;
    (0, E.A)(I, y);
    let C = "function" == typeof c ? { icon: c } : c;
    return (0, a.jsxs)("section", {
        ref: y ? I : void 0,
        className: s()(x.uW, R),
        "aria-labelledby": j,
        children: [
            _
                ? (0, a.jsx)(u.A, { children: (0, a.jsx)(f.H, { id: j, children: n }) })
                : (0, a.jsxs)("div", {
                      className: x.so,
                      children: [
                          (0, a.jsxs)("div", {
                              className: x.wx,
                              style: { color: d.A.colors[b[o]]?.css },
                              children: [
                                  (0, a.jsx)(m.D, {
                                      variant: i,
                                      color: "currentColor",
                                      className: r,
                                      id: j,
                                      children: n,
                                  }),
                                  null != C && (0, a.jsx)(A, { ...C }),
                              ],
                          }),
                          null != N && (0, a.jsx)(g.E, { variant: "text-xs/normal", children: N }),
                      ],
                  }),
            (0, a.jsx)(f.F, { children: t }),
        ],
    });
}
