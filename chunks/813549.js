n.d(t, {
    J: () => o.Hb,
    Z: () => u
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(385499),
    o = n(674563),
    l = n(814842);
let u = (e) => {
    let { name: t, discriminator: n, invertBotTagColor: r, nameColor: o, className: u, botType: c, usernameClass: d, discriminatorClass: f, botClass: _, botVerified: p = !1, style: h, useRemSizes: m = !1, usernameIcon: g } = e;
    return (0, i.jsxs)('div', {
        className: a()(u, l.nameTag),
        style: h,
        children: [
            (0, i.jsxs)('span', {
                className: a()(l.username, d),
                style: null != o ? { color: o } : void 0,
                children: [g, t]
            }),
            null != n
                ? (0, i.jsxs)('span', {
                      className: null != f ? f : void 0,
                      children: ['#', n]
                  })
                : null,
            null != c
                ? (0, i.jsx)(s.Z, {
                      type: c,
                      invertColor: r,
                      className: a()(_, l.bot),
                      verified: p,
                      useRemSizes: m
                  })
                : null
        ]
    });
};
