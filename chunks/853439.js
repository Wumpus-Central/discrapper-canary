var i,
    r,
    l,
    o,
    u = n(442837),
    a = n(570140),
    s = n(131704),
    c = n(592125);
let d = {},
    f = {};
class _ extends (o = u.ZP.Store) {
    getTemplates(t) {
        return d[t];
    }
    getTemplateWithCategory(t, e) {
        var n;
        return null === (n = d[t]) || void 0 === n ? void 0 : n.find((t) => t.category === e);
    }
    getChannel(t) {
        return f[t];
    }
}
(l = 'GuildRoleSubscriptionTierTemplatesStore'),
    (r = 'displayName') in (i = _)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (e.Z = new _(a.Z, {
        GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (t) {
            let { selectedTemplate: e, guildId: n } = t,
                i = Object.values(c.Z.getMutableGuildChannelsForGuild(n));
            e.listings.forEach((t) => {
                t.channels.forEach((t) => {
                    let e = i.find((e) => e.name === t.name);
                    if (void 0 !== e) t.id = e.id;
                    else if (!(t.id in f)) {
                        let e = (0, s.kt)(t);
                        f[t.id] = e;
                    }
                });
            });
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (t) {
            let { templates: e, guildId: n } = t;
            d[n] = e;
        }
    }));
