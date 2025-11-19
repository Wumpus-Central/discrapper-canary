n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    s = n(677850),
    o = n(607070),
    c = n(70097),
    u = n(451478),
    d = n(986783);
let g = (e) => {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: l, isResponsive: g = !1, eventTargetRef: p } = e,
        f = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        m = (0, a.e7)([u.Z], () => u.Z.isFocused()),
        h = null != n && !f && m;
    return null != l
        ? (0, r.jsx)(s.B, {
              src: l,
              fit: "fit-width",
              eventTargetRef: p,
          })
        : h
          ? (0, r.jsx)(c.Z, {
                className: i()({ [d.responsive]: g }, d.bannerAsset, d.bannerVideoBackground),
                src: n,
                autoPlay: !0,
                loop: !0,
            })
          : (0, r.jsx)("div", {
                className: i()({ [d.responsive]: g }, d.bannerAsset, d.bannerImage),
                style: { backgroundImage: "url(".concat(t, ")") },
            });
};
