n.d(t, { A: () => g });
var s = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(17928),
    i = n(653887),
    o = n(775602),
    u = n(607470),
    c = n(531685),
    d = n(929955);
let g = function (e) {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: l, isResponsive: g = !1, eventTargetRef: E } = e,
        _ = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
        m = (0, a.bG)([c.A], () => c.A.isFocused()),
        S = null != n && !_ && m;
    return null != l
        ? (0, s.jsx)(i._, { src: l, fit: "fit-width", eventTargetRef: E })
        : S
          ? (0, s.jsx)(u.A, { className: r()({ [d.no]: g }, d.BW, d.ud), src: n, autoPlay: !0, loop: !0 })
          : (0, s.jsx)("div", { className: r()({ [d.no]: g }, d.BW, d._e), style: { backgroundImage: `url(${t})` } });
};
