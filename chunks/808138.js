n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(284009),
    s = n.n(l),
    r = n(311907),
    a = n(696986),
    o = n(209812),
    d = n(501592),
    c = n(623529),
    u = n(71393),
    m = n(985018);
function g(e) {
    let { guildId: t } = e,
        n = (0, r.bG)([u.A], () => u.A.getGuild(t));
    return (
        s()(null != n, "Guild not found"),
        (0, i.jsxs)(o.ZV, {
            guildId: t,
            children: [
                (0, i.jsx)(d.A, { children: m.intl.string(m.t["WMyX2+"]) }),
                (0, i.jsx)(a.h, { size: 32 }),
                (0, i.jsx)(c.A, { guild: n, isGuildProducts: !0 }),
            ],
        })
    );
}
