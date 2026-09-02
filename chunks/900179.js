n.d(t, { A: () => A });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(282802),
    o = n.n(i),
    d = n(661531),
    c = n(866665),
    u = n(140735),
    m = n(707554),
    f = n(297264),
    g = n(834730),
    E = n(915089),
    p = n(94343),
    b = n(716804),
    h = n(161185);
let x = Object.fromEntries(Object.keys(d.A.colors).map((e) => [o()(e), e]));
function _(e) {
    let { icon: t, size: n = "xxs", tooltip: l } = e,
        r = (0, a.jsx)(t, { size: n, color: "currentColor", className: h.yK, "aria-hidden": !0 });
    return null == l ? r : (0, a.jsx)(c.m, { text: l, asContainer: !0, children: r });
}
function A(e) {
    let {
            children: t,
            heading: n,
            headingClassName: r,
            headingVariant: i = "text-xs/semibold",
            headingColor: o = "text-default",
            headingIcon: c,
            hideHeading: A = !1,
            introText: v,
            className: N,
            scrollTargetId: R,
        } = e,
        I = (0, E.GV)(),
        j = l.useRef(null),
        T = (0, b.g)(),
        C = null != R && T === R;
    (0, p.A)(j, C);
    let y = "function" == typeof c ? { icon: c } : c;
    return (0, a.jsxs)("section", {
        ref: C ? j : void 0,
        className: s()(h.uW, N),
        "aria-labelledby": I,
        children: [
            A
                ? (0, a.jsx)(u.A, { children: (0, a.jsx)(m.H, { id: I, children: n }) })
                : (0, a.jsxs)("div", {
                      className: h.so,
                      children: [
                          (0, a.jsxs)("div", {
                              className: h.wx,
                              style: { color: d.A.colors[x[o]]?.css },
                              children: [
                                  (0, a.jsx)(f.D, {
                                      variant: i,
                                      color: "currentColor",
                                      className: r,
                                      id: I,
                                      children: n,
                                  }),
                                  null != y && (0, a.jsx)(_, { ...y }),
                              ],
                          }),
                          null != v && (0, a.jsx)(g.E, { variant: "text-xs/normal", children: v }),
                      ],
                  }),
            (0, a.jsx)(m.F, { children: t }),
        ],
    });
}
