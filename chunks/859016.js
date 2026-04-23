n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(289873),
    s = n(262828),
    r = n(327427),
    a = n(857802),
    o = n(705751);
let d = (e) => {
    let { guild: t } = e,
        { application: n, loading: d } = (0, s.A)(t.id, o.S7.GUILD_ROLE_SUBSCRIPTIONS);
    return d
        ? (0, i.jsx)(l.y, {})
        : null != n
          ? (0, i.jsx)(r.A, { guildId: t.id, application: n })
          : (0, i.jsx)(a.A, { guild: t });
};
