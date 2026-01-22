n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(284009),
    l = n.n(i),
    s = n(311907),
    a = n(397927),
    c = n(209812),
    o = n(501592),
    d = n(623529),
    u = n(71393),
    f = n(985018);
function g(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([u.A], () => u.A.getGuild(t));
    return (
        l()(null != n, "Guild not found"),
        (0, r.jsxs)(c.ZV, {
            guildId: t,
            children: [
                (0, r.jsx)(o.A, { children: f.intl.string(f.t["WMyX2+"]) }),
                (0, r.jsx)(a.hKd, { size: 32 }),
                (0, r.jsx)(d.A, {
                    guild: n,
                    isGuildProducts: !0,
                }),
            ],
        })
    );
}
