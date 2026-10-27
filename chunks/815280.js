n.d(t, { A: () => p });
var r = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    a = n(17928),
    o = n(653887),
    i = n(775602),
    c = n(607470),
    u = n(531685),
    d = n(296344);
let p = function (e) {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: l, isResponsive: p = !1, eventTargetRef: m } = e,
        g = (0, a.bG)([i.Ay], () => i.Ay.useReducedMotion),
        h = (0, a.bG)([u.A], () => u.A.isFocused()),
        E = null != n && !g && h;
    return null != l
        ? (0, r.jsx)(o._, { src: l, fit: "fit-width", eventTargetRef: m })
        : E
          ? (0, r.jsx)(c.A, { className: s()({ [d.no]: p }, d.BW, d.ud), src: n, autoPlay: !0, loop: !0 })
          : (0, r.jsx)("div", { className: s()({ [d.no]: p }, d.BW, d._e), style: { backgroundImage: `url(${t})` } });
};
