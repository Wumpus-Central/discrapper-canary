n.d(t, { A: () => E });
var r = n(477900);
n(582128);
var s = n(503698),
    l = n.n(s),
    a = n(17928),
    i = n(653887),
    o = n(775602),
    u = n(607470),
    c = n(531685),
    d = n(296344);
let E = function (e) {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: s, isResponsive: E = !1, eventTargetRef: _ } = e,
        S = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
        L = (0, a.bG)([c.A], () => c.A.isFocused()),
        g = null != n && !S && L;
    return null != s
        ? (0, r.jsx)(i._, { src: s, fit: "fit-width", eventTargetRef: _ })
        : g
          ? (0, r.jsx)(u.A, { className: l()({ [d.no]: E }, d.BW, d.ud), src: n, autoPlay: !0, loop: !0 })
          : (0, r.jsx)("div", { className: l()({ [d.no]: E }, d.BW, d._e), style: { backgroundImage: `url(${t})` } });
};
