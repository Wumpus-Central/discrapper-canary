var i = n(200651);
n(192379);
var r = n(481060),
    l = n(725803),
    s = n(546221),
    a = n(489028),
    o = n(674563);
t.Z = (e) => {
    let { guild: t } = e,
        { application: n, loading: c } = (0, l.Z)(t.id, o.wW.GUILD_ROLE_SUBSCRIPTIONS);
    return c
        ? (0, i.jsx)(r.Spinner, {})
        : null != n
          ? (0, i.jsx)(s.Z, {
                guildId: t.id,
                application: n
            })
          : (0, i.jsx)(a.Z, { guild: t });
};
