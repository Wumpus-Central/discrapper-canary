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
    _ = s(993408),
    g = s(203312),
    m = s(212407),
    h = s(985018),
    p = s(473464);
function f(e) {
    let { category: t } = e,
        s = (0, i.bG)([c.A], () => c.A.useReducedMotion),
        l = (0, i.bG)([u.A], () => u.A.isFocused()),
        { catalogBannerStatic: _, catalogBannerAnimated: f, catalogBannerRive: x } = (0, m.MV)(t),
        E = r.useRef(null),
        b = null != x;
    return (0, n.jsxs)("div", {
        ref: E,
        className: a()(p.sW, { [p.by]: b }),
        children: [
            b
                ? (0, n.jsx)(o._, {
                      src: x,
                      fit: "cover",
                      alignment: "center-left",
                      style: { width: "100%", height: "100%" },
                      eventTargetRef: E,
                      autoplay: !0,
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("img", { className: p.ze, src: _, alt: t.name }),
                          null != f && !s && l && (0, n.jsx)(d.A, { src: f, className: p.tr, autoPlay: !0, loop: !0 }),
                      ],
                  }),
            (0, n.jsx)(g.A, { category: t, className: p.v0, daysRemainingText: h.t["8gsP5M"] }),
        ],
    });
}
(0, _.$b)(90);
