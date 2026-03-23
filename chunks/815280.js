"use strict";
s.d(t, { A: () => _ });
var n = s(627968);
s(64700);
var r = s(503698),
    l = s.n(r),
    a = s(311907),
    i = s(653887),
    o = s(775602),
    c = s(607470),
    d = s(531685),
    u = s(402314);
let _ = (e) => {
    let { bannerStatic: t, bannerAnimated: s, bannerRive: r, isResponsive: _ = !1, eventTargetRef: g } = e,
        m = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        h = (0, a.bG)([d.A], () => d.A.isFocused()),
        p = null != s && !m && h;
    return null != r
        ? (0, n.jsx)(i._, { src: r, fit: "fit-width", eventTargetRef: g })
        : p
          ? (0, n.jsx)(c.A, { className: l()({ [u.no]: _ }, u.BW, u.ud), src: s, autoPlay: !0, loop: !0 })
          : (0, n.jsx)("div", { className: l()({ [u.no]: _ }, u.BW, u._e), style: { backgroundImage: `url(${t})` } });
};
