"use strict";
n.d(t, { A: () => f });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(417597),
    o = n(653887),
    c = n(775602),
    d = n(607470),
    u = n(531685),
    g = n(993408),
    _ = n(203312),
    m = n(212407),
    h = n(985018),
    p = n(906357);
function f(e) {
    let { category: t } = e,
        n = (0, i.bG)([c.A], () => c.A.useReducedMotion),
        r = (0, i.bG)([u.A], () => u.A.isFocused()),
        { catalogBannerStatic: g, catalogBannerAnimated: f, catalogBannerRive: x } = (0, m.MV)(t),
        E = l.useRef(null),
        C = null != x;
    return (0, s.jsxs)("div", {
        ref: E,
        className: a()(p.sW, { [p.by]: C }),
        children: [
            C
                ? (0, s.jsx)(o._, {
                      src: x,
                      fit: "cover",
                      alignment: "center-left",
                      style: { width: "100%", height: "100%" },
                      eventTargetRef: E,
                      autoplay: !0,
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)("img", { className: p.ze, src: g, alt: t.name }),
                          null != f && !n && r && (0, s.jsx)(d.A, { src: f, className: p.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, s.jsx)(_.A, { category: t, className: p.v0, daysRemainingText: h.t["8gsP5M"] }),
        ],
    });
}
(0, g.$b)(90);
