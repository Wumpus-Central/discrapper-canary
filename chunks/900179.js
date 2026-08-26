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
    f = n(707554),
    m = n(297264),
    E = n(834730),
    g = n(915089),
    p = n(94343),
    b = n(716804),
    h = n(161185);
let _ = Object.fromEntries(Object.keys(d.A.colors).map((e) => [o()(e), e]));
function x(e) {
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
            introText: R,
            className: v,
            scrollTargetId: N,
        } = e,
        I = (0, g.GV)(),
        T = l.useRef(null),
        j = (0, b.g)(),
        C = null != N && j === N;
    (0, p.A)(T, C);
    let S = "function" == typeof c ? { icon: c } : c;
    return (0, a.jsxs)("section", {
        ref: C ? T : void 0,
        className: s()(h.uW, v),
        "aria-labelledby": I,
        children: [
            A
                ? (0, a.jsx)(u.A, { children: (0, a.jsx)(f.H, { id: I, children: n }) })
                : (0, a.jsxs)("div", {
                      className: h.so,
                      children: [
                          (0, a.jsxs)("div", {
                              className: h.wx,
                              style: { color: d.A.colors[_[o]]?.css },
                              children: [
                                  (0, a.jsx)(m.D, {
                                      variant: i,
                                      color: "currentColor",
                                      className: r,
                                      id: I,
                                      children: n,
                                  }),
                                  null != S && (0, a.jsx)(x, { ...S }),
                              ],
                          }),
                          null != R && (0, a.jsx)(E.E, { variant: "text-xs/normal", children: R }),
                      ],
                  }),
            (0, a.jsx)(f.F, { children: t }),
        ],
    });
}
