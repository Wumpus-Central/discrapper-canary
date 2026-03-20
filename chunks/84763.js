"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(397927),
    r = n(262828),
    a = n(555337),
    o = n(440293),
    d = n(831806),
    c = n(652215),
    u = n(705751);
function m() {
    let e = (0, s.bG)([a.A], () => a.A.getGuild()),
        t = (0, o.w)(e?.id),
        { application: n, loading: m } = (0, r.A)(e?.id, u.S7.GUILD_ROLE_SUBSCRIPTIONS),
        g = null != n && e?.features.has(c.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0;
    return (0, i.jsx)("main", {
        children:
            null == e || !t || m ? (0, i.jsx)(l.y$y, {}) : (0, i.jsx)(d.o, { guildId: e.id, hasValidApplication: g }),
    });
}
