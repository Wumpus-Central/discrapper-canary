"use strict";
n.d(t, { AK: () => f, Qh: () => h, Xd: () => p, Zm: () => d, pz: () => E, qM: () => _ }), n(321073);
var r = n(562465),
    i = n(73153),
    s = n(403362),
    a = n(371794),
    o = n(299308),
    l = n(337545),
    u = n(568065),
    c = n(652215);
function d(e) {
    i.h.dispatch({ type: "GUILD_POWERUPS_ACK_NOTIFICATION", guildId: e });
}
function _() {
    i.h.dispatch({ type: "GUILD_POWERUPS_RESET_NOTIFICATIONS" });
}
function f(e, t) {
    if (!0 === t) {
        let t = o.Z.concat(o.D),
            n = {};
        (n[u.o9.LEVEL] = o.Z),
            (n[u.o9.PERK] = o.D),
            i.h.dispatch({
                type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
                guildId: e,
                allPowerups: t
                    .sort((e, t) => (e.skuId >= t.skuId ? 1 : -1))
                    .reduce((e, t) => ((e[t.skuId] = t), e), {}),
                powerupCatalog: n,
            });
        return;
    }
    let n = { application_id: u.Wb, guild_id: e };
    return (0, a.aP)({
        url: c.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: n,
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then((t) => {
        let { allPowerups: n, powerupCatalog: r } = t.body
            .map((e) => (0, l.A)(t.body, e))
            .filter(s.Vq)
            .sort((e, t) => (e.skuId >= t.skuId ? 1 : -1))
            .reduce(
                (e, t) => {
                    let { allPowerups: n, powerupCatalog: r } = e;
                    return (n[t.skuId] = t), null == r[t.type] && (r[t.type] = []), r[t.type]?.push?.(t), e;
                },
                { allPowerups: {}, powerupCatalog: {} },
            );
        return (
            i.h.dispatch({
                type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
                guildId: e,
                allPowerups: n,
                powerupCatalog: r,
            }),
            t.body
        );
    });
}
function p(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, a.aP)({
        url: c.Rsh.GUILD_POWERUPS(e),
        query: { include_ends_at: t },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then((t) => {
        let n = {},
            r = {};
        t.body.forEach((e) => {
            e.sku?.tenant_metadata?.guild_monetization?.powerup != null || e?.sku?.powerup_metadata != null
                ? (n[e.sku_id] = e)
                : e.sku?.tenant_metadata?.guild_monetization?.game_server != null && (r[e.id] = e);
        }),
            i.h.dispatch({
                type: "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS",
                guildId: e,
                unlockedPowerups: n,
                unlockedGameServers: r,
            });
    });
}
function h(e, t) {
    return r.Bo.post({ url: c.Rsh.GUILD_POWERUP_TOGGLE(e, t), rejectWithError: !0 });
}
function E(e, t) {
    return r.Bo.del({ url: c.Rsh.GUILD_POWERUP_TOGGLE(e, t), rejectWithError: !0 });
}
