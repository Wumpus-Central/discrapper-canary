n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(677850),
    i = n(607070),
    c = n(70097),
    u = n(451478),
    d = n(527275);
let f = (e) => {
    let { bannerStatic: t, bannerAnimated: n, bannerRive: l, isResponsive: f = !1, eventTargetRef: g } = e,
        b = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
        p = (0, s.e7)([u.Z], () => u.Z.isFocused()),
        m = null != n && !b && p;
    return null != l
        ? (0, r.jsx)(o.B, {
              src: l,
              fit: "fit-width",
              eventTargetRef: g,
          })
        : m
          ? (0, r.jsx)(c.Z, {
                className: a()({ [d.responsive]: f }, d.bannerAsset, d.bannerVideoBackground),
                src: n,
                autoPlay: !0,
                loop: !0,
            })
          : (0, r.jsx)("div", {
                className: a()({ [d.responsive]: f }, d.bannerAsset, d.bannerImage),
                style: { backgroundImage: "url(".concat(t, ")") },
            });
};
