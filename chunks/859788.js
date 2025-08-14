r.d(t, { Z: () => d });
var n = r(255367);
r(73800);
var l = r(120356),
    a = r.n(l),
    i = r(442837),
    o = r(607070),
    s = r(70097),
    c = r(451478),
    u = r(410572);
let d = (e) => {
    let { bannerStatic: t, bannerAnimated: r, isResponsive: l = !1 } = e,
        d = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        p = (0, i.e7)([c.Z], () => c.Z.isFocused());
    return null != r && !d && p
        ? (0, n.jsx)(s.Z, {
              className: a()({ [u.responsive]: l }, u.bannerAsset, u.bannerVideoBackground),
              src: r,
              autoPlay: !0,
              loop: !0,
          })
        : (0, n.jsx)("div", {
              className: a()({ [u.responsive]: l }, u.bannerAsset, u.bannerImage),
              style: { backgroundImage: "url(".concat(t, ")") },
          });
};
