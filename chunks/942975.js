n.d(t, { AK: () => u, Qh: () => I, Xd: () => A, Zm: () => _, pz: () => T, qM: () => E }), n(321073);
var i = n(636537),
    a = n(228366),
    r = n(403362),
    s = n(371794),
    l = n(299308),
    o = n(337545),
    d = n(568065),
    c = n(652215);
function _(e) {
    a.h.dispatch({ type: "GUILD_POWERUPS_ACK_NOTIFICATION", guildId: e });
}
function E() {
    a.h.dispatch({ type: "GUILD_POWERUPS_RESET_NOTIFICATIONS" });
}
function u(e, t) {
    if (!0 === t) {
        let t = l.Z.concat(l.D),
            n = {};
        (n[d.o9.LEVEL] = l.Z),
            (n[d.o9.PERK] = l.D),
            a.h.dispatch({
                type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
                guildId: e,
                allPowerups: t
                    .sort((e, t) => (e.skuId >= t.skuId ? 1 : -1))
                    .reduce((e, t) => ((e[t.skuId] = t), e), {}),
                powerupCatalog: n,
            });
        return;
    }
    let n = { application_id: d.Wb, guild_id: e };
    return (0, s.aP)({
        url: c.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: n,
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then((t) => {
        let { allPowerups: n, powerupCatalog: i } = t.body
            .map((e) => (0, o.A)(t.body, e))
            .filter(r.Vq)
            .sort((e, t) => (e.skuId >= t.skuId ? 1 : -1))
            .reduce(
                (e, t) => {
                    let { allPowerups: n, powerupCatalog: i } = e;
                    return (n[t.skuId] = t), null == i[t.type] && (i[t.type] = []), i[t.type]?.push?.(t), e;
                },
                { allPowerups: {}, powerupCatalog: {} },
            );
        return (
            a.h.dispatch({
                type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
                guildId: e,
                allPowerups: n,
                powerupCatalog: i,
            }),
            t.body
        );
    });
}
function A(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, s.aP)({
        url: c.Rsh.GUILD_POWERUPS(e),
        query: { include_ends_at: t },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then((t) => {
        let n = {},
            i = {};
        t.body.forEach((e) => {
            e.sku?.tenant_metadata?.guild_monetization?.powerup != null || e?.sku?.powerup_metadata != null
                ? (n[e.sku_id] = e)
                : e.sku?.tenant_metadata?.guild_monetization?.game_server != null && (i[e.id] = e);
        }),
            a.h.dispatch({
                type: "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS",
                guildId: e,
                unlockedPowerups: n,
                unlockedGameServers: i,
            });
    });
}
function I(e, t) {
    return i.Bo.post({ url: c.Rsh.GUILD_POWERUP_TOGGLE(e, t), rejectWithError: !0 });
}
function T(e, t) {
    return i.Bo.del({ url: c.Rsh.GUILD_POWERUP_TOGGLE(e, t), rejectWithError: !0 });
}
