n.d(t, { A: () => E });
var s = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    a = n(17928),
    i = n(653887),
    o = n(775602),
    u = n(607470),
    c = n(531685),
    d = n(296344);
let E = function (e) {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: l, isResponsive: E = !1, eventTargetRef: g } = e,
        _ = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
        A = (0, a.bG)([c.A], () => c.A.isFocused()),
        p = null != n && !_ && A;
    return null != l
        ? (0, s.jsx)(i._, { src: l, fit: "fit-width", eventTargetRef: g })
        : p
          ? (0, s.jsx)(u.A, { className: r()({ [d.no]: E }, d.BW, d.ud), src: n, autoPlay: !0, loop: !0 })
          : (0, s.jsx)("div", { className: r()({ [d.no]: E }, d.BW, d._e), style: { backgroundImage: `url(${t})` } });
};
