n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    i = n(442837),
    s = n(677850),
    o = n(607070),
    c = n(70097),
    u = n(451478),
    d = n(410572);
let g = (e) => {
    let { bannerStatic: t, bannerAnimated: n, isResponsive: l = !1, eventTargetRef: g } = e,
        p = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        f = (0, i.e7)([u.Z], () => u.Z.isFocused()),
        h = null != n && !p && f;
    return null != n && n.endsWith(".riv")
        ? (0, r.jsx)(s.B, {
              src: n,
              fit: "fit-width",
              eventTargetRef: g,
          })
        : h
          ? (0, r.jsx)(c.Z, {
                className: a()({ [d.responsive]: l }, d.bannerAsset, d.bannerVideoBackground),
                src: n,
                autoPlay: !0,
                loop: !0,
            })
          : (0, r.jsx)("div", {
                className: a()({ [d.responsive]: l }, d.bannerAsset, d.bannerImage),
                style: { backgroundImage: "url(".concat(t, ")") },
            });
};
