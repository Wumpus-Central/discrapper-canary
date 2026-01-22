n.d(t, {
    AK: () => p,
    Qh: () => h,
    Xd: () => _,
    Zm: () => d,
    pz: () => m,
    qM: () => f,
}),
    n(638769),
    n(321073);
var r = n(562465),
    i = n(73153),
    a = n(403362),
    s = n(371794),
    o = n(299308),
    l = n(337545),
    c = n(568065),
    u = n(652215);
function d(e) {
    i.h.dispatch({
        type: "GUILD_POWERUPS_ACK_NOTIFICATION",
        guildId: e,
    });
}
function f() {
    i.h.dispatch({ type: "GUILD_POWERUPS_RESET_NOTIFICATIONS" });
}
function p(e, t) {
    if (!0 === t) {
        let t = o.Z.concat(o.D),
            n = {};
        (n[c.o9.LEVEL] = o.Z),
            (n[c.o9.PERK] = o.D),
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
    let n = {
        application_id: c.Wb,
        guild_id: e,
    };
    return (0, s.aP)({
        url: u.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
        query: n,
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then((t) => {
        let { allPowerups: n, powerupCatalog: r } = t.body
            .map((e) => (0, l.A)(t.body, e))
            .filter(a.Vq)
            .sort((e, t) => (e.skuId >= t.skuId ? 1 : -1))
            .reduce(
                (e, t) => {
                    var n, r;
                    let { allPowerups: i, powerupCatalog: a } = e;
                    return (
                        (i[t.skuId] = t),
                        null == a[t.type] && (a[t.type] = []),
                        null == (r = a[t.type]) || null == (n = r.push) || n.call(r, t),
                        e
                    );
                },
                {
                    allPowerups: {},
                    powerupCatalog: {},
                },
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
function _(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, s.aP)({
        url: u.Rsh.GUILD_POWERUPS(e),
        query: { include_ends_at: t },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then((t) => {
        let n = {},
            r = {};
        t.body.forEach((e) => {
            var t, i, a, s, o, l, c;
            (null == (a = e.sku) || null == (i = a.tenant_metadata) || null == (t = i.guild_monetization)
                ? void 0
                : t.powerup) != null || (null == e || null == (s = e.sku) ? void 0 : s.powerup_metadata) != null
                ? (n[e.sku_id] = e)
                : (null == (c = e.sku) || null == (l = c.tenant_metadata) || null == (o = l.guild_monetization)
                      ? void 0
                      : o.game_server) != null && (r[e.id] = e);
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
    return r.Bo.post({
        url: u.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        rejectWithError: !0,
    });
}
function m(e, t) {
    return r.Bo.del({
        url: u.Rsh.GUILD_POWERUP_TOGGLE(e, t),
        rejectWithError: !0,
    });
}
