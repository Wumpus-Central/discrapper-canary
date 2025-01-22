var i,
    r,
    l,
    u,
    o = e(442837),
    a = e(570140),
    s = e(131704),
    c = e(592125);
let d = {},
    f = {};
class _ extends (u = o.ZP.Store) {
    getTemplates(t) {
        return d[t];
    }
    getTemplateWithCategory(t, n) {
        var e;
        return null === (e = d[t]) || void 0 === e ? void 0 : e.find((t) => t.category === n);
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
    (n.Z = new _(a.Z, {
        GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (t) {
            let { selectedTemplate: n, guildId: e } = t,
                i = Object.values(c.Z.getMutableGuildChannelsForGuild(e));
            n.listings.forEach((t) => {
                t.channels.forEach((t) => {
                    let n = i.find((n) => n.name === t.name);
                    if (void 0 !== n) t.id = n.id;
                    else if (!(t.id in f)) {
                        let n = (0, s.kt)(t);
                        f[t.id] = n;
                    }
                });
            });
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (t) {
            let { templates: n, guildId: e } = t;
            d[e] = n;
        }
    }));
