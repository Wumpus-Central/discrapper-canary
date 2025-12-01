n.d(t, { Z: () => _ });
var r,
    i = n(442837),
    a = n(570140),
    o = n(131704),
    s = n(592125);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = {},
    u = {};
function d(e) {
    let { templates: t, guildId: n } = e;
    c[n] = t;
}
function f(e) {
    let { selectedTemplate: t, guildId: n } = e,
        r = Object.values(s.Z.getMutableGuildChannelsForGuild(n));
    t.listings.forEach((e) => {
        e.channels.forEach((e) => {
            let t = r.find((t) => t.name === e.name);
            if (void 0 !== t) e.id = t.id;
            else if (!(e.id in u)) {
                let t = (0, o.createChannelRecord)(e);
                u[e.id] = t;
            }
        });
    });
}
class p extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
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
l(p, "displayName", "GuildRoleSubscriptionTierTemplatesStore");
let _ = new p(a.Z, {
    GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: f,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: d,
});
