n.d(t, { Z: () => g });
var i,
    l,
    r,
    s = n(442837),
    a = n(570140),
    o = n(131704),
    d = n(592125);
let u = {},
    c = {};
class h extends (r = s.ZP.Store) {
    getTemplates(e) {
        return u[e];
    }
    getTemplateWithCategory(e, t) {
        var n;
        return null === (n = u[e]) || void 0 === n ? void 0 : n.find((e) => e.category === t);
    }
    getChannel(e) {
        return c[e];
    }
}
(l = 'GuildRoleSubscriptionTierTemplatesStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = l);
let g = new h(a.Z, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
        let { selectedTemplate: t, guildId: n } = e,
            i = Object.values(d.Z.getMutableGuildChannelsForGuild(n));
        t.listings.forEach((e) => {
            e.channels.forEach((e) => {
                let t = i.find((t) => t.name === e.name);
                if (void 0 !== t) e.id = t.id;
                else if (!(e.id in c)) {
                    let t = (0, o.kt)(e);
                    c[e.id] = t;
                }
            });
        });
    },
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
        let { templates: t, guildId: n } = e;
        u[n] = t;
    }
});
