"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    r = n(311907),
    a = n(397927),
    o = n(209812),
    d = n(501592),
    c = n(623529),
    u = n(71393),
    m = n(985018);
function g(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([u.A], () => u.A.getGuild(t));
    return (
        l()(null != n, "Guild not found"),
        (0, i.jsxs)(o.ZV, {
            guildId: t,
            children: [
                (0, i.jsx)(d.A, { children: m.intl.string(m.t["WMyX2+"]) }),
                (0, i.jsx)(a.hKd, { size: 32 }),
                (0, i.jsx)(c.A, { guild: n, isGuildProducts: !0 }),
            ],
        })
    );
}
