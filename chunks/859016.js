"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(262828),
    r = n(327427),
    a = n(857802),
    o = n(705751);
let d = (e) => {
    let { guild: t } = e,
        { application: n, loading: d } = (0, l.A)(t.id, o.S7.GUILD_ROLE_SUBSCRIPTIONS);
    return d
        ? (0, i.jsx)(s.y$y, {})
        : null != n
          ? (0, i.jsx)(r.A, { guildId: t.id, application: n })
          : (0, i.jsx)(a.A, { guild: t });
};
