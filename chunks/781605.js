"use strict";
n.d(t, { A: () => f }), n(321073);
var r = n(627968);
n(64700);
var i = n(735438),
    s = n.n(i),
    a = n(397927),
    o = n(707606),
    l = n(403362),
    u = n(676864);
let c = 99,
    d = (e) => {
        let { member: t, empty: n, guildId: i } = e;
        return n || null == t
            ? (0, r.jsx)("div", { className: u.pO })
            : (0, r.jsx)("div", {
                  className: u.pO,
                  children: (0, r.jsx)(a.euF, {
                      src: t.getAvatarURL(i, 16),
                      "aria-label": t.username,
                      size: a._3J.SIZE_16,
                      className: u.pO,
                  }),
              });
    },
    _ = (0, o.A)(d),
    f = (e) => {
        let { partySize: t, members: n, minAvatarsShown: i = 1, maxAvatarsShown: a = 2, guildId: o } = e,
            { totalSize: d, knownSize: f } = t;
        if (d < i) return null;
        let p = s()(n)
                .filter(l.Vq)
                .take(a)
                .map((e) => (0, r.jsx)(_, { member: e, guildId: o }, e.id))
                .value(),
            h = d - f;
        for (let e = 0; e < h && p.length < a; e++)
            p.push((0, r.jsx)(_, { empty: !0, guildId: o }, `empty-member-${e}`));
        let m = Math.max(Math.min(d - p.length, c), 0);
        if (1 === m) {
            let e = n[a];
            p.push((0, r.jsx)(_, { member: e, guildId: o }, e.id));
        }
        return (0, r.jsx)("div", {
            className: u.iE,
            children: (0, r.jsxs)("div", {
                className: u.S3,
                children: [p, m > 1 ? (0, r.jsxs)("div", { className: u.Hi, children: ["+", m] }) : null],
            }),
        });
    };
