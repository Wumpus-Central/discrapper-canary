"use strict";
s.d(t, { A: () => f });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(417597),
    o = s(653887),
    c = s(775602),
    d = s(607470),
    u = s(531685),
    g = s(993408),
    h = s(203312),
    _ = s(212407),
    m = s(985018),
    p = s(215688);
function f(e) {
    let { category: t } = e,
        s = (0, i.bG)([c.A], () => c.A.useReducedMotion),
        r = (0, i.bG)([u.A], () => u.A.isFocused()),
        { catalogBannerStatic: g, catalogBannerAnimated: f, catalogBannerRive: E } = (0, _.MV)(t),
        x = l.useRef(null),
        A = null != E;
    return (0, n.jsxs)("div", {
        ref: x,
        className: a()(p.sW, { [p.by]: A }),
        children: [
            A
                ? (0, n.jsx)(o._, {
                      src: E,
                      fit: "cover",
                      alignment: "center-left",
                      style: { width: "100%", height: "100%" },
                      eventTargetRef: x,
                      autoplay: !0,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("img", { className: p.ze, src: g, alt: t.name }),
                          null != f && !s && r && (0, n.jsx)(d.A, { src: f, className: p.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, n.jsx)(h.A, { category: t, className: p.v0, daysRemainingText: m.t["8gsP5M"] }),
        ],
    });
}
(0, g.$b)(90);
