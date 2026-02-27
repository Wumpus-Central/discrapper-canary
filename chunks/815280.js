"use strict";
n.d(t, { A: () => g });
var s = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(311907),
    i = n(653887),
    o = n(775602),
    c = n(607470),
    d = n(531685),
    u = n(402314);
let g = (e) => {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: l, isResponsive: g = !1, eventTargetRef: _ } = e,
        m = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        h = (0, a.bG)([d.A], () => d.A.isFocused()),
        p = null != n && !m && h;
    return null != l
        ? (0, s.jsx)(i._, { src: l, fit: "fit-width", eventTargetRef: _ })
        : p
          ? (0, s.jsx)(c.A, { className: r()({ [u.no]: g }, u.BW, u.ud), src: n, autoPlay: !0, loop: !0 })
          : (0, s.jsx)("div", { className: r()({ [u.no]: g }, u.BW, u._e), style: { backgroundImage: `url(${t})` } });
};
