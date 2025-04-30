n.d(t, { Z: () => f }), n(388685);
var r = n(179360),
    i = n(147913),
    o = n(430824),
    a = n(914010),
    s = n(713081),
    l = n(905128),
    c = n(50101);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class d extends i.Z {
    handleSelectedGuildChange() {
        let e = a.Z.getGuildId();
        if (null == e) return;
        let t = o.Z.getGuild(e);
        null != t &&
            (c.ZP.trackExposure({
                guildId: t.id,
                location: 'GuildPowerupsManager'
            }),
            (0, c.gV)(t.id, 'GuildPowerupsManager') && (l.Z.shouldFetchCatalogForGuild(e) && (0, s.Sn)(e), l.Z.shouldFetchPowerupsForGuild(e) && (0, s.Fm)(e)));
    }
    handleEntitlementUpdate(e) {
        let { guildId: t } = e;
        (0, c.gV)(t, 'GuildPowerupsManager') && ((0, s.Fm)(t), (0, r.C0)(t));
    }
    constructor(...e) {
        super(...e),
            u(this, 'stores', new Map().set(a.Z, this.handleSelectedGuildChange)),
            u(this, 'actions', {
                GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate,
                GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate
            });
    }
}
let f = new d();
