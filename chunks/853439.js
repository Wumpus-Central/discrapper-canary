n.d(t, { Z: () => m });
var r,
    i,
    l,
    a = n(442837),
    o = n(570140),
    s = n(131704),
    c = n(592125);
let u = {},
    d = {};
class p extends (l = a.ZP.Store) {
    getTemplates(e) {
        return u[e];
    }
    getTemplateWithCategory(e, t) {
        var n;
        return null == (n = u[e]) ? void 0 : n.find((e) => e.category === t);
    }
    getChannel(e) {
        return d[e];
    }
}
((i = 'GuildRoleSubscriptionTierTemplatesStore'),
    (r = 'displayName') in p
        ? Object.defineProperty(p, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[r] = i));
let m = new p(o.Z, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: n } = e,
            r = Object.values(c.Z.getMutableGuildChannelsForGuild(n));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = r.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in d)) {
                    let t = (0, s.kt)(e);
                    d[e.id] = t;
                }
            });
        });
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
        let { templates: t, guildId: n } = e;
        u[n] = t;
    }
});
