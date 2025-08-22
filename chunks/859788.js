n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    s = n(442837),
    i = n(607070),
    o = n(70097),
    c = n(451478),
    u = n(410572);
let d = (e) => {
    let { bannerStatic: t, bannerAnimated: n, isResponsive: l = !1 } = e,
        d = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
        g = (0, s.e7)([c.Z], () => c.Z.isFocused());
    return null != n && !d && g
        ? (0, r.jsx)(o.Z, {
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
