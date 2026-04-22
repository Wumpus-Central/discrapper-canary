"use strict";
n.d(t, { A: () => h }), n(321073);
var i = n(627968);
n(64700);
var l = n(735438),
    s = n.n(l),
    r = n(97808),
    a = n(778712),
    o = n(707606),
    c = n(403362),
    u = n(922704);
let d = (0, o.A)((e) => {
        let { member: t, empty: n, guildId: l } = e;
        return n || null == t
            ? (0, i.jsx)("div", { className: u.pO })
            : (0, i.jsx)("div", {
                  className: u.pO,
                  children: (0, i.jsx)(r.eu, {
                      src: t.getAvatarURL(l, 16),
                      "aria-label": t.username,
                      size: a._3.SIZE_16,
                      className: u.pO,
                  }),
              });
    }),
    h = (e) => {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: r = 2, guildId: a } = e,
            { totalSize: o, knownSize: h } = t;
        if (o < l) return null;
        let m = s()(n)
                .filter(c.Vq)
                .take(r)
                .map((e) => (0, i.jsx)(d, { member: e, guildId: a }, e.id))
                .value(),
            p = o - h;
        for (let e = 0; e < p && m.length < r; e++)
            m.push((0, i.jsx)(d, { empty: !0, guildId: a }, `empty-member-${e}`));
        let f = Math.max(Math.min(o - m.length, 99), 0);
        if (1 === f) {
            let e = n[r];
            m.push((0, i.jsx)(d, { member: e, guildId: a }, e.id));
        }
        return (0, i.jsx)("div", {
            className: u.iE,
            children: (0, i.jsxs)("div", {
                className: u.S3,
                children: [m, f > 1 ? (0, i.jsxs)("div", { className: u.Hi, children: ["+", f] }) : null],
            }),
        });
    };
