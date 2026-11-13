var a = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(282802),
    o = n.n(i),
    d = n(646514),
    c = n(866665),
    u = n(140735),
    m = n(707554),
    f = n(534514),
    g = n(834730),
    p = n(915089),
    E = n(94343),
    h = n(716804),
    b = n(161185);
let x = Object.fromEntries(Object.keys(d.A.colors).map((e) => [o()(e), e]));
function A(e) {
    let { icon: t, size: n = "xxs", tooltip: l } = e,
        r = (0, a.jsx)(t, { size: n, color: "currentColor", className: b.yK, "aria-hidden": !0 });
    return null == l ? r : (0, a.jsx)(c.m, { text: l, asContainer: !0, children: r });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    children: t,
                    heading: n,
                    headingClassName: r,
                    headingVariant: i = "body-xs/semibold",
                    headingColor: o = "text-default",
                    headingIcon: c,
                    hideHeading: _ = !1,
                    introText: R,
                    className: N,
                    scrollTargetId: v,
                } = e,
                j = (0, p.GV)(),
                y = l.useRef(null),
                I = (0, h.g)(),
                T = null != v && I === v;
            (0, E.A)(y, T);
            let C = "function" == typeof c ? { icon: c } : c;
            return (0, a.jsxs)("section", {
                ref: T ? y : void 0,
                className: s()(b.uW, N),
                "aria-labelledby": j,
                children: [
                    _
                        ? (0, a.jsx)(u.A, { children: (0, a.jsx)(m.H, { id: j, children: n }) })
                        : (0, a.jsxs)("div", {
                              className: b.so,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: b.wx,
                                      style: { color: d.A.colors[x[o]]?.css },
                                      children: [
                                          (0, a.jsx)(f.D, {
                                              variant: i,
                                              color: "currentColor",
                                              className: r,
                                              id: j,
                                              children: n,
                                          }),
                                          null != C && (0, a.jsx)(A, { ...C }),
                                      ],
                                  }),
                                  null != R && (0, a.jsx)(g.E, { variant: "body-xs/normal", children: R }),
                              ],
                          }),
                    (0, a.jsx)(m.F, { children: t }),
                ],
            });
        },
    },
);
