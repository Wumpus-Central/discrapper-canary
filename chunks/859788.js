n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    s = n(442837),
    i = n(677850),
    o = n(607070),
    c = n(70097),
    u = n(451478),
    d = n(410572);
let g = (e) => {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: l, isResponsive: g = !1, eventTargetRef: p } = e,
        f = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
        C = (0, s.e7)([u.Z], () => u.Z.isFocused()),
        h = null != n && !f && C;
    return null != l
        ? (0, r.jsx)(i.B, {
              src: l,
              fit: "fit-width",
              eventTargetRef: p,
          })
        : h
          ? (0, r.jsx)(c.Z, {
                className: a()({ [d.responsive]: g }, d.bannerAsset, d.bannerVideoBackground),
                src: n,
                autoPlay: !0,
                loop: !0,
            })
          : (0, r.jsx)("div", {
                className: a()({ [d.responsive]: g }, d.bannerAsset, d.bannerImage),
                style: { backgroundImage: "url(".concat(t, ")") },
            });
};
