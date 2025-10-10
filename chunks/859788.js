n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var l = n(120356),
    s = n.n(l),
    a = n(442837),
    i = n(677850),
    o = n(607070),
    c = n(70097),
    u = n(451478),
    d = n(410572);
let g = (e) => {
    let { bannerStatic: t, bannerAnimated: n, isResponsive: l = !1, eventTargetRef: g } = e,
        p = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        f = (0, a.e7)([u.Z], () => u.Z.isFocused()),
        C = null != n && !p && f;
    return null != n && n.endsWith(".riv")
        ? (0, r.jsx)(i.B, {
              src: n,
              fit: "fit-width",
              eventTargetRef: g,
          })
        : C
          ? (0, r.jsx)(c.Z, {
                className: s()({ [d.responsive]: l }, d.bannerAsset, d.bannerVideoBackground),
                src: n,
                autoPlay: !0,
                loop: !0,
            })
          : (0, r.jsx)("div", {
                className: s()({ [d.responsive]: l }, d.bannerAsset, d.bannerImage),
                style: { backgroundImage: "url(".concat(t, ")") },
            });
};
