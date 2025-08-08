n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var l = n(120356),
    a = n.n(l),
    i = n(442837),
    o = n(607070),
    s = n(70097),
    c = n(451478),
    u = n(506510);
let d = (e) => {
    let { bannerStatic: t, bannerAnimated: n, isResponsive: l = !1 } = e,
        d = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        p = (0, i.e7)([c.Z], () => c.Z.isFocused());
    return null != n && !d && p
        ? (0, r.jsx)(s.Z, {
              className: a()({ [u.responsive]: l }, u.bannerAsset, u.bannerVideoBackground),
              src: n,
              autoPlay: !0,
              loop: !0,
          })
        : (0, r.jsx)("div", {
              className: a()({ [u.responsive]: l }, u.bannerAsset, u.bannerImage),
              style: { backgroundImage: "url(".concat(t, ")") },
          });
};
