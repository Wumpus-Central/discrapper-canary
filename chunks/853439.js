n.d(t, { Z: () => f });
var i,
    r,
    l,
    o = n(442837),
    s = n(570140),
    a = n(131704),
    u = n(592125);
let d = {},
    c = {};
class h extends (l = o.ZP.Store) {
    getTemplates(e) {
        return d[e];
    }
    getTemplateWithCategory(e, t) {
        var n;
        return null === (n = d[e]) || void 0 === n ? void 0 : n.find((e) => e.category === t);
    }
    getChannel(e) {
        return c[e];
    }
}
(r = 'GuildRoleSubscriptionTierTemplatesStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = r);
let f = new h(s.Z, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: n } = e,
            i = Object.values(u.Z.getMutableGuildChannelsForGuild(n));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = i.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in c)) {
                    let t = (0, a.kt)(e);
                    c[e.id] = t;
                }
            });
        });
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
        let { templates: t, guildId: n } = e;
        d[n] = t;
    }
});
