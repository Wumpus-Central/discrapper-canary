n.d(t, { A: () => _ });
var r = n(477900);
n(582128);
var s = n(503698),
    l = n.n(s),
    i = n(17928),
    a = n(653887),
    o = n(775602),
    u = n(607470),
    c = n(531685),
    d = n(296344);
let _ = function (e) {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: s, isResponsive: _ = !1, eventTargetRef: g } = e,
        E = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion),
        S = (0, i.bG)([c.A], () => c.A.isFocused()),
        p = null != n && !E && S;
    return null != s
        ? (0, r.jsx)(a._, { src: s, fit: "fit-width", eventTargetRef: g })
        : p
          ? (0, r.jsx)(u.A, { className: l()({ [d.no]: _ }, d.BW, d.ud), src: n, autoPlay: !0, loop: !0 })
          : (0, r.jsx)("div", { className: l()({ [d.no]: _ }, d.BW, d._e), style: { backgroundImage: `url(${t})` } });
};
