n.d(t, { Z: () => E }), n(388685);
var r = n(179360),
    i = n(147913),
    a = n(430824),
    o = n(496675),
    s = n(914010),
    l = n(634952),
    c = n(713081),
    u = n(905128),
    d = n(901005),
    f = n(158638),
    _ = n(639777),
    p = n(981631),
    h = n(647086);
function m(e, t, n) {
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
class g extends i.Z {
    handleSelectedGuildChange() {
        let e = s.Z.getGuildId();
        if (null == e || e === h._ || e === p.I_8) return;
        let t = a.Z.getGuild(e);
        null != t &&
            (f.sT.trackExposure({
                guildId: t.id,
                location: "GuildPowerupsManager",
            }),
            l.Lz.trackExposure({
                guildId: t.id,
                location: "GuildPowerupsManager",
            }),
            d.G.trackExposure({
                guildId: t.id,
                location: "GuildPowerupsManager",
            }),
            (0, _.D)(o.Z, t) &&
                (u.Z.shouldFetchCatalogForGuild(e) && (0, c.Sn)(e),
                u.Z.shouldFetchPowerupsForGuild(e) && (0, c.Fm)(e)));
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
        !0 === (0, _.D)(o.Z, a.Z.getGuild(e)) && ((0, c.Fm)(e), (0, r.C0)(e));
    }
    constructor(...e) {
        super(...e),
            m(this, "stores", new Map().set(s.Z, this.handleSelectedGuildChange)),
            m(this, "actions", {
                GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate.bind(this),
                GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate.bind(this),
                GUILD_APPLIED_BOOSTS_UPDATE: this.handleAppliedBoostUpdate.bind(this),
            });
    }
}
let E = new g();
