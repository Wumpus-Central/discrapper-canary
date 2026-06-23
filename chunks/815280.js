s.d(t, { A: () => g });
var l = s(627968);
s(64700);
var r = s(503698),
    n = s.n(r),
    a = s(17928),
    i = s(653887),
    o = s(775602),
    u = s(607470),
    c = s(531685),
    d = s(929955);
let g = (e) => {
    let { bannerStatic: t, bannerAnimated: s, bannerRive: r, isResponsive: g = !1, eventTargetRef: E } = e,
        _ = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
        m = (0, a.bG)([c.A], () => c.A.isFocused()),
        S = null != s && !_ && m;
    return null != r
        ? (0, l.jsx)(i._, { src: r, fit: "fit-width", eventTargetRef: E })
        : S
          ? (0, l.jsx)(u.A, { className: n()({ [d.no]: g }, d.BW, d.ud), src: s, autoPlay: !0, loop: !0 })
          : (0, l.jsx)("div", { className: n()({ [d.no]: g }, d.BW, d._e), style: { backgroundImage: `url(${t})` } });
};
