n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(417597),
    l = n(397927),
    s = n(262828),
    a = n(555337),
    c = n(130978),
    o = n(831806),
    d = n(652215),
    u = n(705751);
function f() {
    let e = (0, i.bG)([a.A], () => a.A.getGuild()),
        t = (0, c.w)(null == e ? void 0 : e.id, "guild_product_settings"),
        { application: n, loading: f } = (0, s.A)(null == e ? void 0 : e.id, u.S7.GUILD_ROLE_SUBSCRIPTIONS),
        g = null != n && (null == e ? void 0 : e.features.has(d.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === !0;
    return (0, r.jsx)("main", {
        children:
            null == e || !t || f
                ? (0, r.jsx)(l.y$y, {})
                : (0, r.jsx)(o.o, {
                      guildId: e.id,
                      hasValidApplication: g,
                  }),
    });
}
