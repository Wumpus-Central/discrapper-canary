"use strict";
n.d(t, { A: () => _ }), n(321073);
var r = n(627968);
n(64700);
var i = n(735438),
    s = n.n(i),
    a = n(97808),
    o = n(778712),
    l = n(707606),
    u = n(403362),
    c = n(922704);
let d = (0, l.A)((e) => {
        let { member: t, empty: n, guildId: i } = e;
        return n || null == t
            ? (0, r.jsx)("div", { className: c.pO })
            : (0, r.jsx)("div", {
                  className: c.pO,
                  children: (0, r.jsx)(a.eu, {
                      src: t.getAvatarURL(i, 16),
                      "aria-label": t.username,
                      size: o._3.SIZE_16,
                      className: c.pO,
                  }),
              });
    }),
    _ = (e) => {
        let { partySize: t, members: n, minAvatarsShown: i = 1, maxAvatarsShown: a = 2, guildId: o } = e,
            { totalSize: l, knownSize: _ } = t;
        if (l < i) return null;
        let f = s()(n)
                .filter(u.Vq)
                .take(a)
                .map((e) => (0, r.jsx)(d, { member: e, guildId: o }, e.id))
                .value(),
            p = l - _;
        for (let e = 0; e < p && f.length < a; e++)
            f.push((0, r.jsx)(d, { empty: !0, guildId: o }, `empty-member-${e}`));
        let h = Math.max(Math.min(l - f.length, 99), 0);
        if (1 === h) {
            let e = n[a];
            f.push((0, r.jsx)(d, { member: e, guildId: o }, e.id));
        }
        return (0, r.jsx)("div", {
            className: c.iE,
            children: (0, r.jsxs)("div", {
                className: c.S3,
                children: [f, h > 1 ? (0, r.jsxs)("div", { className: c.Hi, children: ["+", h] }) : null],
            }),
        });
    };
