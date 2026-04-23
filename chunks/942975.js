n.d(t, { AK: () => u, Qh: () => A, Xd: () => I, Zm: () => d, pz: () => T, qM: () => c }), n(321073);
var i = n(636537),
    r = n(228366),
    a = n(403362),
    s = n(371794),
    _ = n(299308),
    l = n(337545),
    o = n(568065),
    E = n(652215);
function d(e) {
    r.h.dispatch({ type: "GUILD_POWERUPS_ACK_NOTIFICATION", guildId: e });
}
function c() {
    r.h.dispatch({ type: "GUILD_POWERUPS_RESET_NOTIFICATIONS" });
}
function u(e, t) {
    if (!0 === t) {
        let t = _.Z.concat(_.D),
            n = {};
        (n[o.o9.LEVEL] = _.Z),
            (n[o.o9.PERK] = _.D),
            r.h.dispatch({
                type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
                guildId: e,
                allPowerups: t
                    .sort((e, t) => (e.skuId >= t.skuId ? 1 : -1))
                    .reduce((e, t) => ((e[t.skuId] = t), e), {}),
                powerupCatalog: n,
            });
        return;
    }
    let n = { application_id: o.Wb, guild_id: e };
    return (0, s.aP)({
        url: E.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: n,
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then((t) => {
        let { allPowerups: n, powerupCatalog: i } = t.body
            .map((e) => (0, l.A)(t.body, e))
            .filter(a.Vq)
            .sort((e, t) => (e.skuId >= t.skuId ? 1 : -1))
            .reduce(
                (e, t) => {
                    let { allPowerups: n, powerupCatalog: i } = e;
                    return (n[t.skuId] = t), null == i[t.type] && (i[t.type] = []), i[t.type]?.push?.(t), e;
                },
                { allPowerups: {}, powerupCatalog: {} },
            );
        return (
            r.h.dispatch({
                type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
                guildId: e,
                allPowerups: n,
                powerupCatalog: i,
            }),
            t.body
        );
    });
}
function I(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, s.aP)({
        url: E.Rsh.GUILD_POWERUPS(e),
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
            r.h.dispatch({
                type: "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS",
                guildId: e,
                unlockedPowerups: n,
                unlockedGameServers: i,
            });
    });
}
function A(e, t) {
    return i.Bo.post({ url: E.Rsh.GUILD_POWERUP_TOGGLE(e, t), rejectWithError: !0 });
}
function T(e, t) {
    return i.Bo.del({ url: E.Rsh.GUILD_POWERUP_TOGGLE(e, t), rejectWithError: !0 });
}
