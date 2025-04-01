n.d(t, { Z: () => d }), n(47120);
var r = n(147913),
    i = n(430824),
    o = n(914010),
    a = n(713081),
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
        let e = o.Z.getGuildId();
        if (null == e) return;
        let t = i.Z.getGuild(e),
            n = (0, l.gV)(null == t ? void 0 : t.id, 'GuildPowerupsManager');
        null != t && n && (s.Z.shouldFetchCatalogForGuild(e) && (0, a.Sn)(e), s.Z.shouldFetchPowerupsForGuild(e) && (0, a.Fm)(e));
    }
    handleEntitlementUpdate(e) {
        let { guildId: t } = e;
        (0, a.Fm)(t);
    }
    constructor(...e) {
        super(...e),
            c(this, 'stores', new Map().set(o.Z, this.handleSelectedGuildChange)),
            c(this, 'actions', {
                GUILD_POWERUP_ENTITLEMENTS_CREATE: this.handleEntitlementUpdate,
                GUILD_POWERUP_ENTITLEMENTS_DELETE: this.handleEntitlementUpdate
            });
    }
}
let d = new u();
