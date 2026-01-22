l.d(t, { A: () => f });
var n = l(627968);
l(64700);
var r = l(503698),
    s = l.n(r),
    a = l(311907),
    i = l(653887),
    o = l(775602),
    c = l(607470),
    u = l(531685),
    d = l(402314);
let f = (e) => {
    let { bannerStatic: t, bannerAnimated: l, bannerRive: r, isResponsive: f = !1, eventTargetRef: b } = e,
        g = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        p = (0, a.bG)([u.A], () => u.A.isFocused()),
        m = null != l && !g && p;
    return null != r
        ? (0, n.jsx)(i._, {
              src: r,
              fit: "fit-width",
              eventTargetRef: b,
          })
        : m
          ? (0, n.jsx)(c.A, {
                className: s()({ [d.no]: f }, d.BW, d.ud),
                src: l,
                autoPlay: !0,
                loop: !0,
            })
          : (0, n.jsx)("div", {
                className: s()({ [d.no]: f }, d.BW, d._e),
                style: { backgroundImage: "url(".concat(t, ")") },
            });
};
