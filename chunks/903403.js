l.d(t, { A: () => h });
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(417597),
    o = l(653887),
    c = l(775602),
    u = l(607470),
    d = l(531685),
    f = l(993408),
    b = l(203312),
    g = l(212407),
    p = l(985018),
    m = l(68763);
function h(e) {
    let { category: t } = e,
        l = (0, i.bG)([c.A], () => c.A.useReducedMotion),
        s = (0, i.bG)([d.A], () => d.A.isFocused()),
        { catalogBannerStatic: f, catalogBannerAnimated: h, catalogBannerRive: E } = (0, g.MV)(t),
        v = r.useRef(null),
        A = null != E;
    return (0, n.jsxs)("div", {
        ref: v,
        className: a()(m.sW, { [m.by]: A }),
        children: [
            A
                ? (0, n.jsx)(o._, {
                      src: E,
                      fit: "cover",
                      alignment: "center-left",
                      style: {
                          width: "100%",
                          height: "100%",
                      },
                      eventTargetRef: v,
                      autoplay: !0,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("img", {
                              className: m.ze,
                              src: f,
                              alt: t.name,
                          }),
                          null != h &&
                              !l &&
                              s &&
                              (0, n.jsx)(u.A, {
                                  src: h,
                                  className: m.tr,
                                  autoPlay: !0,
                                  loop: !0,
                              }),
                      ],
                  }),
            (0, n.jsx)(b.A, {
                category: t,
                className: m.v0,
                daysRemainingText: p.t["8gsP5M"],
            }),
        ],
    });
}
(0, f.$b)(90);
