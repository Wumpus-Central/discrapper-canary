n.d(t, { A: () => A });
var a = n(477900),
    l = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(282802),
    o = n.n(s),
    d = n(661531),
    c = n(866665),
    u = n(140735),
    f = n(707554),
    m = n(297264),
    g = n(834730),
    p = n(915089),
    E = n(94343),
    h = n(716804),
    b = n(161185);
let x = Object.fromEntries(Object.keys(d.A.colors).map((e) => [o()(e), e]));
function _(e) {
    let { icon: t, size: n = "xxs", tooltip: l } = e,
        r = (0, a.jsx)(t, { size: n, color: "currentColor", className: b.yK, "aria-hidden": !0 });
    return null == l ? r : (0, a.jsx)(c.m, { text: l, asContainer: !0, children: r });
}
function A(e) {
    let {
            children: t,
            heading: n,
            headingClassName: r,
            headingVariant: s = "text-xs/semibold",
            headingColor: o = "text-default",
            headingIcon: c,
            hideHeading: A = !1,
            introText: N,
            className: v,
            scrollTargetId: R,
        } = e,
        I = (0, p.GV)(),
        j = l.useRef(null),
        y = (0, h.g)(),
        T = null != R && y === R;
    (0, E.A)(j, T);
    let C = "function" == typeof c ? { icon: c } : c;
    return (0, a.jsxs)("section", {
        ref: T ? j : void 0,
        className: i()(b.uW, v),
        "aria-labelledby": I,
        children: [
            A
                ? (0, a.jsx)(u.A, { children: (0, a.jsx)(f.H, { id: I, children: n }) })
                : (0, a.jsxs)("div", {
                      className: b.so,
                      children: [
                          (0, a.jsxs)("div", {
                              className: b.wx,
                              style: { color: d.A.colors[x[o]]?.css },
                              children: [
                                  (0, a.jsx)(m.D, {
                                      variant: s,
                                      color: "currentColor",
                                      className: r,
                                      id: I,
                                      children: n,
                                  }),
                                  null != C && (0, a.jsx)(_, { ...C }),
                              ],
                          }),
                          null != N && (0, a.jsx)(g.E, { variant: "text-xs/normal", children: N }),
                      ],
                  }),
            (0, a.jsx)(f.F, { children: t }),
        ],
    });
}
