"use strict";
s.d(t, { A: () => f });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(417597),
    o = s(653887),
    c = s(775602),
    d = s(607470),
    u = s(531685),
    g = s(993408),
    m = s(203312),
    _ = s(212407),
    h = s(985018),
    p = s(68763);
function f(e) {
    let { category: t } = e,
        s = (0, i.bG)([c.A], () => c.A.useReducedMotion),
        l = (0, i.bG)([u.A], () => u.A.isFocused()),
        { catalogBannerStatic: g, catalogBannerAnimated: f, catalogBannerRive: E } = (0, _.MV)(t),
        C = r.useRef(null),
        b = null != E;
    return (0, n.jsxs)("div", {
        ref: C,
        className: a()(p.sW, { [p.by]: b }),
        children: [
            b
                ? (0, n.jsx)(o._, {
                      src: E,
                      fit: "cover",
                      alignment: "center-left",
                      style: { width: "100%", height: "100%" },
                      eventTargetRef: C,
                      autoplay: !0,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("img", { className: p.ze, src: g, alt: t.name }),
                          null != f && !s && l && (0, n.jsx)(d.A, { src: f, className: p.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, n.jsx)(m.A, { category: t, className: p.v0, daysRemainingText: h.t["8gsP5M"] }),
        ],
    });
}
(0, g.$b)(90);
