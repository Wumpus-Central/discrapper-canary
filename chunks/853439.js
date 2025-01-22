var i,
    r,
    l,
    o,
    s = n(442837),
    a = n(570140),
    u = n(131704),
    d = n(592125);
let c = {},
    h = {};
class f extends (o = s.ZP.Store) {
    getTemplates(e) {
        return c[e];
    }
    getTemplateWithCategory(e, t) {
        var n;
        return null === (n = c[e]) || void 0 === n ? void 0 : n.find((e) => e.category === t);
    }
    getChannel(e) {
        return h[e];
    }
}
(l = 'GuildRoleSubscriptionTierTemplatesStore'),
    (r = 'displayName') in (i = f)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new f(a.Z, {
        GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
            let { selectedTemplate: t, guildId: n } = e,
                i = Object.values(d.Z.getMutableGuildChannelsForGuild(n));
            t.listings.forEach((e) => {
                e.channels.forEach((e) => {
                    let t = i.find((t) => t.name === e.name);
                    if (void 0 !== t) e.id = t.id;
                    else if (!(e.id in h)) {
                        let t = (0, u.kt)(e);
                        h[e.id] = t;
                    }
                });
            });
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
            let { templates: t, guildId: n } = e;
            c[n] = t;
        }
    }));
