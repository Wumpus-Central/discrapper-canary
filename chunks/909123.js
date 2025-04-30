n.d(t, { Z: () => p }), n(388685);
var r = n(179360),
    i = n(147913),
    o = n(430824),
    a = n(496675),
    s = n(914010),
    l = n(713081),
    c = n(905128),
    u = n(50101),
    d = n(639777);
function f(e, t, n) {
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
class _ extends i.Z {
    handleSelectedGuildChange() {
        let e = s.Z.getGuildId();
        if (null == e) return;
        let t = o.Z.getGuild(e);
        null != t &&
            (u.ZP.trackExposure({
                guildId: t.id,
                location: 'GuildPowerupsManager'
            }),
            (0, u.gV)(t.id, 'GuildPowerupsManager') && (c.Z.shouldFetchCatalogForGuild(e) && (0, l.Sn)(e), c.Z.shouldFetchPowerupsForGuild(e) && (0, l.Fm)(e)));
    }
    handleEntitlementUpdate(e) {
        let { guildId: t } = e;
        this.refreshGuildPowerups(t);
    }
    handleAppliedBoostUpdate(e) {
        let { guildId: t } = e;
        !0 === (0, d.D)(a.Z, o.Z.getGuild(t)) && this.refreshGuildPowerups(t);
    }
    refreshGuildPowerups(e) {
        (0, u.gV)(e, 'GuildPowerupsManager') && ((0, l.Fm)(e), (0, r.C0)(e));
    }
    constructor(...e) {
        super(...e),
            f(this, 'stores', new Map().set(s.Z, this.handleSelectedGuildChange)),
            f(this, 'actions', {
                GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate,
                GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate,
                GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate
            });
    }
}
let p = new _();
