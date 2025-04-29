n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(725803),
    s = n(546221),
    a = n(489028),
    o = n(674563);
let c = (e) => {
    let { guild: t } = e,
        { application: n, loading: c } = (0, l.Z)(t.id, o.wW.GUILD_ROLE_SUBSCRIPTIONS);
    return c
        ? (0, r.jsx)(i.$jN, {})
        : null != n
          ? (0, r.jsx)(s.Z, {
                guildId: t.id,
                application: n
            })
          : (0, r.jsx)(a.Z, { guild: t });
};
