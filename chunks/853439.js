n.d(t, { Z: () => p });
var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(131704),
    s = n(592125);
let c = {},
    u = {};
class d extends (i = l.ZP.Store) {
    getTemplates(e) {
        return c[e];
    }
    getTemplateWithCategory(e, t) {
        var n;
        return null == (n = c[e]) ? void 0 : n.find((e) => e.category === t);
    }
    getChannel(e) {
        return u[e];
    }
}
(r = "displayName") in d
    ? Object.defineProperty(d, r, {
          value: "GuildRoleSubscriptionTierTemplatesStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[r] = "GuildRoleSubscriptionTierTemplatesStore");
let p = new d(a.Z, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: n } = e,
            r = Object.values(s.Z.getMutableGuildChannelsForGuild(n));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = r.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in u)) {
                    let t = (0, o.kt)(e);
                    u[e.id] = t;
                }
            });
        });
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
        let { templates: t, guildId: n } = e;
        c[n] = t;
    },
});
