(n.d(t, { Z: () => g }), n(388685));
var r = n(179360),
    i = n(147913),
    a = n(430824),
    o = n(496675),
    s = n(914010),
    l = n(713081),
    c = n(905128),
    u = n(50101),
    d = n(158638),
    f = n(639777),
    _ = n(981631),
    p = n(647086);
function h(e, t, n) {
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
class m extends i.Z {
    handleSelectedGuildChange() {
        let e = s.Z.getGuildId();
        if (null == e || e === p._ || e === _.I_8) return;
        let t = a.Z.getGuild(e);
        if (null == t) return;
        (d.s.trackExposure({
            guildId: t.id,
            location: 'GuildPowerupsManager'
        }),
            u.ZP.trackExposure({
                guildId: t.id,
                location: 'GuildPowerupsManager'
            }));
        let n = (0, u.gV)(t.id, 'GuildPowerupsManager'),
            r = (0, f.D)(o.Z, t);
        n && r && (c.Z.shouldFetchCatalogForGuild(e) && (0, l.Sn)(e), c.Z.shouldFetchPowerupsForGuild(e) && (0, l.Fm)(e));
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
        let t = (0, u.gV)(e, 'GuildPowerupsManager'),
            n = (0, f.D)(o.Z, a.Z.getGuild(e));
        t && !0 === n && ((0, l.Fm)(e), (0, r.C0)(e));
    }
    constructor(...e) {
        (super(...e),
            h(this, 'stores', new Map().set(s.Z, this.handleSelectedGuildChange)),
            h(this, 'actions', {
                GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
                GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
                GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this)
            }));
    }
}
let g = new m();
