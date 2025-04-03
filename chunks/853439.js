n.d(t, { Z: () => f });
var r,
    i,
    l,
    o = n(442837),
    a = n(570140),
    u = n(131704),
    s = n(592125);
let c = {},
    d = {};
class p extends (l = o.ZP.Store) {
    getTemplates(e) {
        return c[e];
    }
    getTemplateWithCategory(e, t) {
        var n;
        return null == (n = c[e]) ? void 0 : n.find((e) => e.category === t);
    }
    getChannel(e) {
        return d[e];
    }
}
(i = 'GuildRoleSubscriptionTierTemplatesStore'),
    (r = 'displayName') in p
        ? Object.defineProperty(p, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[r] = i);
let f = new p(a.Z, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: n } = e,
            r = Object.values(s.Z.getMutableGuildChannelsForGuild(n));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = r.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in d)) {
                    let t = (0, u.kt)(e);
                    d[e.id] = t;
                }
            });
        });
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
        let { templates: t, guildId: n } = e;
        c[n] = t;
    }
});
