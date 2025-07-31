(n.d(t, { Z: () => m }), n(388685));
var r = n(179360),
    i = n(147913),
    a = n(430824),
    o = n(496675),
    s = n(914010),
    l = n(713081),
    c = n(905128),
    u = n(158638),
    d = n(639777),
    _ = n(981631),
    f = n(647086);
function p(e, t, n) {
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
class h extends i.Z {
    handleSelectedGuildChange() {
        let e = s.Z.getGuildId();
        if (null == e || e === f._ || e === _.I_8) return;
        let t = a.Z.getGuild(e);
        null != t &&
            (u.sT.trackExposure({
                guildId: t.id,
                location: 'GuildPowerupsManager'
            }),
            (0, d.D)(o.Z, t) && (c.Z.shouldFetchCatalogForGuild(e) && (0, l.Sn)(e), c.Z.shouldFetchPowerupsForGuild(e) && (0, l.Fm)(e)));
    }
    handleEntitlementUpdate(e) {
        let { guildId: t } = e;
        this.refreshGuildPowerups(t);
    }
    handleAppliedBoostUpdate(e) {
        let { guildId: t } = e;
        this.refreshGuildPowerups(t);
    }
    refreshGuildPowerups(e) {
        !0 === (0, d.D)(o.Z, a.Z.getGuild(e)) && ((0, l.Fm)(e), (0, r.C0)(e));
    }
    constructor(...e) {
        (super(...e),
            p(this, 'stores', new Map().set(s.Z, this.handleSelectedGuildChange)),
            p(this, 'actions', {
                GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
                GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
                GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this)
            }));
    }
}
let m = new h();
