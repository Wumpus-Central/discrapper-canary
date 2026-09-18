r.d(t, { A: () => g });
var n = r(477900);
r(582128);
var l = r(503698),
    s = r.n(l),
    a = r(17928),
    i = r(653887),
    o = r(775602),
    u = r(607470),
    c = r(531685),
    d = r(296344);
let g = function (e) {
    let { bannerStatic: t, bannerAnimated: r, bannerRive: l, isResponsive: g = !1, eventTargetRef: p } = e,
        m = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
        _ = (0, a.bG)([c.A], () => c.A.isFocused()),
        E = null != r && !m && _;
    return null != l
        ? (0, n.jsx)(i._, { src: l, fit: "fit-width", eventTargetRef: p })
        : E
          ? (0, n.jsx)(u.A, { className: s()({ [d.no]: g }, d.BW, d.ud), src: r, autoPlay: !0, loop: !0 })
          : (0, n.jsx)("div", { className: s()({ [d.no]: g }, d.BW, d._e), style: { backgroundImage: `url(${t})` } });
};
