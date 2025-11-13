n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    o = n(677850),
    s = n(607070),
    c = n(70097),
    u = n(451478),
    d = n(410572);
let g = (e) => {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: l, isResponsive: g = !1, eventTargetRef: p } = e,
        f = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        h = (0, a.e7)([u.Z], () => u.Z.isFocused()),
        C = null != n && !f && h;
    return null != l
        ? (0, r.jsx)(o.B, {
              src: l,
              fit: "fit-width",
              eventTargetRef: p,
          })
        : C
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
