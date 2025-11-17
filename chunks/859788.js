n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    o = n(677850),
    s = n(607070),
    c = n(70097),
    u = n(451478),
    d = n(410572);
let p = (e) => {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: l, isResponsive: p = !1, eventTargetRef: g } = e,
        f = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        h = (0, a.e7)([u.Z], () => u.Z.isFocused()),
        C = null != n && !f && h;
    return null != l
        ? (0, r.jsx)(o.B, {
              src: l,
              fit: "fit-width",
              eventTargetRef: g,
          })
        : C
          ? (0, r.jsx)(c.Z, {
                className: i()({ [d.responsive]: p }, d.bannerAsset, d.bannerVideoBackground),
                src: n,
                autoPlay: !0,
                loop: !0,
            })
          : (0, r.jsx)("div", {
                className: i()({ [d.responsive]: p }, d.bannerAsset, d.bannerImage),
                style: { backgroundImage: "url(".concat(t, ")") },
            });
};
