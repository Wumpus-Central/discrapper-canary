n.d(t, { Z: () => A }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(430824),
    s = n(474936),
    l = n(981631);
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 86400000,
    p = 3600000,
    h = {};
function m(e) {
    let {
        guild: { id: t }
    } = e;
    h[t] = f(u({}, E(t)), { appliedBoosts: g(t) });
}
function g(e) {
    var t;
    let n = o.Z.getGuild(e),
        r = (null == n ? void 0 : n.hasFeature(l.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0 ? 0 : l.oCV[null != (t = null == n ? void 0 : n.premiumTier) ? t : l.Eu4.NONE];
    for (let [e, t] of Object.entries(s.jn)) (null == n ? void 0 : n.hasFeature(e)) && (r += t);
    return r;
}
function E(e) {
    if (null == h[e]) {
        let t = g(e);
        h[e] = {
            allPowerups: {},
            unlockedPowerups: {},
            powerupCatalog: {},
            appliedBoosts: t
        };
    }
    return h[e];
}
function b(e) {
    let { guildId: t, allPowerups: n, powerupCatalog: r } = e,
        i = E(t);
    h = f(u({}, h), {
        [t]: f(u({}, i), {
            allPowerups: n,
            powerupCatalog: r,
            catalogFetchCooldown: Date.now(),
            hasFetchedPowerupCatalog: !0
        })
    });
}
function y(e) {
    let { guildId: t, unlockedPowerups: n } = e,
        r = E(t),
        i = g(t);
    h = f(u({}, h), {
        [t]: f(u({}, r), {
            unlockedPowerups: n,
            appliedBoosts: i,
            unlockedPowerupsFetchCooldown: Date.now(),
            hasFetchedUnlockedPowerups: !0
        })
    });
}
function O(e, t) {
    let { guildId: n, entitlements: r } = e,
        i = E(n);
    r.forEach((e) => {
        t ? (i.unlockedPowerups[e.sku_id] = e) : delete i.unlockedPowerups[e.sku_id];
    }),
        (h = f(u({}, h), { [n]: f(u({}, i), { appliedBoosts: g(n) }) }));
}
function v(e) {
    O(e, !0);
}
function I(e) {
    O(e, !1);
}
function S() {
    h = {};
}
class T extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (h = e);
    }
    getState() {
        return h;
    }
    getStateForGuild(e) {
        return null != e ? h[e] : void 0;
    }
    shouldFetchCatalogForGuild(e) {
        var t;
        let n = null == (t = h[e]) ? void 0 : t.catalogFetchCooldown;
        return null == n || n + _ < Date.now();
    }
    shouldFetchPowerupsForGuild(e) {
        var t;
        let n = null == (t = h[e]) ? void 0 : t.unlockedPowerupsFetchCooldown;
        return null == n || n + p < Date.now();
    }
    hasFetchedPowerupCatalog(e) {
        var t;
        return null != e && (null == (t = h[e]) ? void 0 : t.hasFetchedPowerupCatalog) === !0;
    }
    hasFetchedUnlockedPowerups(e) {
        var t;
        return null != e && (null == (t = h[e]) ? void 0 : t.hasFetchedUnlockedPowerups) === !0;
    }
}
c(T, 'displayName', 'GuildPowerupsStore'), c(T, 'persistKey', 'GuildPowerupsStore');
let A = new T(a.Z, {
    LOGOUT: S,
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: b,
    GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS: y,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: v,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: I,
    GUILD_UPDATE: m
});
