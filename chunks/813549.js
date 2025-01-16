r.d(n, {
    J: function () {
        return l.Hb;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(385499),
    l = r(674563),
    u = r(485453);
let c = (e) => {
    let { name: n, discriminator: r, invertBotTagColor: a, nameColor: l, className: c, botType: d, usernameClass: f, discriminatorClass: _, botClass: h, botVerified: p = !1, style: m, useRemSizes: g = !1, usernameIcon: E } = e;
    return (0, i.jsxs)('div', {
        className: s()(c, u.nameTag),
        style: m,
        children: [
            (0, i.jsxs)('span', {
                className: s()(u.username, f),
                style: null != l ? { color: l } : void 0,
                children: [E, n]
            }),
            null != r
                ? (0, i.jsxs)('span', {
                      className: null != _ ? _ : void 0,
                      children: ['#', r]
                  })
                : null,
            null != d
                ? (0, i.jsx)(o.Z, {
                      type: d,
                      invertColor: a,
                      className: s()(h, u.bot),
                      verified: p,
                      useRemSizes: g
                  })
                : null
        ]
    });
};
n.Z = c;
