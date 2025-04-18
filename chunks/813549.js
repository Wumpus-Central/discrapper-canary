n.d(t, {
    J: () => s.Hb,
    Z: () => c
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(385499),
    s = n(674563),
    l = n(367564);
let c = (e) => {
    let { name: t, discriminator: n, invertBotTagColor: i, nameColor: s, className: c, botType: u, usernameClass: d, discriminatorClass: f, botClass: _, botVerified: p = !1, style: h, useRemSizes: m = !1, usernameIcon: g } = e;
    return (0, r.jsxs)('div', {
        className: a()(c, l.nameTag),
        style: h,
        children: [
            (0, r.jsxs)('span', {
                className: a()(l.username, d),
                style: null != s ? { color: s } : void 0,
                children: [g, t]
            }),
            null != n
                ? (0, r.jsxs)('span', {
                      className: null != f ? f : void 0,
                      children: ['#', n]
                  })
                : null,
            null != u
                ? (0, r.jsx)(o.Z, {
                      type: u,
                      invertColor: i,
                      className: a()(_, l.bot),
                      verified: p,
                      useRemSizes: m
                  })
                : null
        ]
    });
};
