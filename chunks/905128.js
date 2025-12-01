n.d(t, { Z: () => N }), n(388685), n(467055);
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
let p = 86400000,
    _ = 3600000,
    m = {};
function h() {
    return {
        allPowerups: {},
        powerupCatalog: {},
        unlockedPowerups: {},
    };
}
function g(e) {
    let {
        guild: { id: t },
    } = e;
    m[t] = f(u({}, y(t)), { appliedBoosts: b(t) });
}
function E(e) {
    let { guildId: t } = e;
    m[t] = f(u({}, y(t)), { appliedBoosts: b(t) });
}
function b(e) {
    var t, n, r, i;
    let a = o.Z.getGuild(e),
        c =
            (null == a ? void 0 : a.features.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === !0
                ? 0
                : l.oCV[null != (t = null == a ? void 0 : a.premiumTier) ? t : l.Eu4.NONE];
    for (let [t, o] of Object.entries(s.Hk)) {
        let s = t;
        (null == a || null == (n = a.premiumFeatures) ? void 0 : n.features.includes(s)) &&
            (null == (i = null == (r = o.isEnabled) ? void 0 : r.call(o, e)) || i) &&
            (null == o.includedInLevel || a.premiumTier < o.includedInLevel) &&
            (c += o.boostPrice);
    }
    return c;
}
function y(e) {
    if (null == m[e]) {
        let t = b(e);
        m[e] = f(u({}, h()), { appliedBoosts: t });
    }
    return m[e];
}
function O(e) {
    let { guildId: t, allPowerups: n, powerupCatalog: r } = e,
        i = y(t);
    m = f(u({}, m), {
        [t]: f(u({}, i), {
            allPowerups: n,
            powerupCatalog: r,
            catalogFetchCooldown: Date.now(),
            hasFetchedPowerupCatalog: !0,
        }),
    });
}
function v(e) {
    let { guildId: t, unlockedPowerups: n } = e,
        r = y(t),
        i = b(t);
    m = f(u({}, m), {
        [t]: f(u({}, r), {
            unlockedPowerups: n,
            appliedBoosts: i,
            unlockedPowerupsFetchCooldown: Date.now(),
            hasFetchedUnlockedPowerups: !0,
        }),
    });
}
function S(e, t) {
    let { guildId: n, entitlements: r } = e,
        i = y(n);
    r.forEach((e) => {
        t ? (i.unlockedPowerups[e.sku_id] = e) : delete i.unlockedPowerups[e.sku_id];
    }),
        (m = f(u({}, m), { [n]: f(u({}, i), { appliedBoosts: b(n) }) }));
}
function I(e) {
    S(e, !0);
}
function T(e) {
    S(e, !1);
}
function A() {
    m = {};
}
class C extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(o.Z), null != e && (m = e);
    }
    getState() {
        return m;
    }
    getStateForGuild(e) {
        return null != e ? m[e] : void 0;
    }
    shouldFetchCatalogForGuild(e) {
        var t;
        let n = null == (t = m[e]) ? void 0 : t.catalogFetchCooldown;
        return null == n || n + p < Date.now();
    }
    shouldFetchPowerupsForGuild(e) {
        var t;
        let n = null == (t = m[e]) ? void 0 : t.unlockedPowerupsFetchCooldown;
        return null == n || n + _ < Date.now();
    }
    hasFetchedPowerupCatalog(e) {
        var t;
        return null != e && (null == (t = m[e]) ? void 0 : t.hasFetchedPowerupCatalog) === !0;
    }
    hasFetchedUnlockedPowerups(e) {
        var t;
        return null != e && (null == (t = m[e]) ? void 0 : t.hasFetchedUnlockedPowerups) === !0;
    }
}
c(C, "displayName", "GuildPowerupsStore"),
    c(C, "persistKey", "GuildPowerupsStore"),
    c(C, "migrations", [
        (e) =>
            null == e
                ? e
                : Object.fromEntries(
                      Object.entries(e)
                          .filter((e) => {
                              let [t, n] = e;
                              return null != n && "object" == typeof n;
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
                                      unlockedPowerups: null != (r = o.unlockedPowerups) ? r : {},
                                  }),
                              ];
                          }),
                  ),
    ]);
let N = new C(a.Z, {
    LOGOUT: A,
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: O,
    GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: v,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: I,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: T,
    GUILD_UPDATE: g,
    GAME_SERVER_FETCH_INSTANCES_SUCCESS: E,
});
