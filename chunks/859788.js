n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(677850),
    a = n(607070),
    c = n(70097),
    u = n(451478),
    d = n(410572);
let g = (e) => {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: l, isResponsive: g = !1, eventTargetRef: f } = e,
        p = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
        m = (0, s.e7)([u.Z], () => u.Z.isFocused()),
        C = null != n && !p && m;
    return null != l
        ? (0, r.jsx)(o.B, {
              src: l,
              fit: "fit-width",
              eventTargetRef: f,
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
