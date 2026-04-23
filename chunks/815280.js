"use strict";
s.d(t, { A: () => g });
var n = s(627968);
s(64700);
var l = s(503698),
    r = s.n(l),
    a = s(311907),
    i = s(653887),
    o = s(775602),
    c = s(607470),
    d = s(531685),
    u = s(929955);
let g = (e) => {
    let { bannerStatic: t, bannerAnimated: s, bannerRive: l, isResponsive: g = !1, eventTargetRef: h } = e,
        _ = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        m = (0, a.bG)([d.A], () => d.A.isFocused()),
        p = null != s && !_ && m;
    return null != l
        ? (0, n.jsx)(i._, { src: l, fit: "fit-width", eventTargetRef: h })
        : p
          ? (0, n.jsx)(c.A, { className: r()({ [u.no]: g }, u.BW, u.ud), src: s, autoPlay: !0, loop: !0 })
          : (0, n.jsx)("div", { className: r()({ [u.no]: g }, u.BW, u._e), style: { backgroundImage: `url(${t})` } });
};
