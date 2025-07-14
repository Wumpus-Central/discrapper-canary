(n.d(t, { Z: () => N }), n(388685), n(467055));
var r,
    i = n(442837),
    a = n(570140),
    o = n(430824),
    s = n(535396),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
function m() {
    return {
        allPowerups: {},
        powerupCatalog: {},
        unlockedPowerups: {}
    };
}
function g(e) {
    let {
        guild: { id: t }
    } = e;
    h[t] = f(u({}, b(t)), { appliedBoosts: E(t) });
}
function E(e) {
    var t;
    let n = o.Z.getGuild(e),
        r = (null == n ? void 0 : n.features.has(l.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0 ? 0 : l.oCV[null != (t = null == n ? void 0 : n.premiumTier) ? t : l.Eu4.NONE];
    for (let [e, t] of Object.entries(s.Hk)) (null == n ? void 0 : n.features.has(e)) && (null == t.includedInLevel || n.premiumTier < t.includedInLevel) && (r += t.boostPrice);
    return r;
}
function b(e) {
    if (null == h[e]) {
        let t = E(e);
        h[e] = f(u({}, m()), { appliedBoosts: t });
    }
    return h[e];
}
function y(e) {
    let { guildId: t, allPowerups: n, powerupCatalog: r } = e,
        i = b(t);
    h = f(u({}, h), {
        [t]: f(u({}, i), {
            allPowerups: n,
            powerupCatalog: r,
            catalogFetchCooldown: Date.now(),
            hasFetchedPowerupCatalog: !0
        })
    });
}
function O(e) {
    let { guildId: t, unlockedPowerups: n } = e,
        r = b(t),
        i = E(t);
    h = f(u({}, h), {
        [t]: f(u({}, r), {
            unlockedPowerups: n,
            appliedBoosts: i,
            unlockedPowerupsFetchCooldown: Date.now(),
            hasFetchedUnlockedPowerups: !0
        })
    });
}
function v(e, t) {
    let { guildId: n, entitlements: r } = e,
        i = b(n);
    (r.forEach((e) => {
        t ? (i.unlockedPowerups[e.sku_id] = e) : delete i.unlockedPowerups[e.sku_id];
    }),
        (h = f(u({}, h), { [n]: f(u({}, i), { appliedBoosts: E(n) }) })));
}
function I(e) {
    v(e, !0);
}
function T(e) {
    v(e, !1);
}
function S() {
    h = {};
}
class A extends (r = i.ZP.PersistedStore) {
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
(c(A, 'displayName', 'GuildPowerupsStore'),
    c(A, 'persistKey', 'GuildPowerupsStore'),
    c(A, 'migrations', [
        (e) =>
            null == e
                ? e
                : Object.fromEntries(
                      Object.entries(e)
                          .filter((e) => {
                              let [t, n] = e;
                              return null != n && 'object' == typeof n;
                          })
                          .map((e) => {
                              var t, n, r;
                              let [i, a] = e,
                                  o = a;
                              return [
                                  i,
                                  f(u({}, o), {
                                      allPowerups: null != (t = o.allPowerups) ? t : {},
                                      powerupCatalog: null != (n = o.powerupCatalog) ? n : {},
                                      unlockedPowerups: null != (r = o.unlockedPowerups) ? r : {}
                                  })
                              ];
                          })
                  )
    ]));
let N = new A(a.Z, {
    LOGOUT: S,
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: y,
    GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS: O,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: I,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: T,
    GUILD_UPDATE: g
});
