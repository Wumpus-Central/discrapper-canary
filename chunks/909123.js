n.d(t, { Z: () => d }), n(388685);
var r = n(147913),
    i = n(430824),
    a = n(914010),
    o = n(713081),
    s = n(905128),
    l = n(50101);
function c(e, t, n) {
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
class u extends r.Z {
    handleSelectedGuildChange() {
        let e = a.Z.getGuildId();
        if (null == e) return;
        let t = i.Z.getGuild(e);
        null != t &&
            (l.ZP.trackExposure({
                guildId: t.id,
                location: 'GuildPowerupsManager'
            }),
            (0, l.gV)(t.id, 'GuildPowerupsManager') && (s.Z.shouldFetchCatalogForGuild(e) && (0, o.Sn)(e), s.Z.shouldFetchPowerupsForGuild(e) && (0, o.Fm)(e)));
    }
    handleEntitlementUpdate(e) {
        let { guildId: t } = e;
        (0, l.gV)(t, 'GuildPowerupsManager') && (0, o.Fm)(t);
    }
    constructor(...e) {
        super(...e),
            c(this, 'stores', new Map().set(a.Z, this.handleSelectedGuildChange)),
            c(this, 'actions', {
                GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate,
                GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate
            });
    }
}
let d = new u();
