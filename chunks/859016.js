n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(262828),
    s = n(327427),
    a = n(857802),
    c = n(705751);
let o = (e) => {
    let { guild: t } = e,
        { application: n, loading: o } = (0, l.A)(t.id, c.S7.GUILD_ROLE_SUBSCRIPTIONS);
    return o
        ? (0, r.jsx)(i.y$y, {})
        : null != n
          ? (0, r.jsx)(s.A, {
                guildId: t.id,
                application: n,
            })
          : (0, r.jsx)(a.A, { guild: t });
};
