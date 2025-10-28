n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(677850),
    a = n(607070),
    c = n(70097),
    u = n(451478),
    d = n(410572);
let g = (e) => {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: l, isResponsive: g = !1, eventTargetRef: p } = e,
        f = (0, o.e7)([a.Z], () => a.Z.useReducedMotion),
        C = (0, o.e7)([u.Z], () => u.Z.isFocused()),
        h = null != n && !f && C;
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
