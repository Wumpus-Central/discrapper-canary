n.d(t, { Z: () => R }), n(388685), n(467055);
var r,
    i = n(442837),
    a = n(570140),
    o = n(430824),
    s = n(693587),
    l = n(535396),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = 86400000,
    h = 3600000,
    m = {};
function g() {
    return {
        allPowerups: {},
        powerupCatalog: {},
        unlockedPowerups: {},
    };
}
function E(e) {
    let {
        guild: { id: t },
    } = e;
    m[t] = _(d({}, O(t)), { appliedBoosts: y(t) });
}
function b(e) {
    let { guildId: t } = e;
    m[t] = _(d({}, O(t)), { appliedBoosts: y(t) });
}
function y(e) {
    var t, n;
    let r = o.Z.getGuild(e),
        i =
            (null == r ? void 0 : r.features.has(c.oNc.PREMIUM_TIER_3_OVERRIDE)) === !0
                ? 0
                : c.oCV[null != (t = null == r ? void 0 : r.premiumTier) ? t : c.Eu4.NONE];
    for (let [e, t] of Object.entries(l.Hk)) {
        let a = e;
        (null == r || null == (n = r.premiumFeatures) ? void 0 : n.features.includes(a)) &&
            (null == t.includedInLevel || r.premiumTier < t.includedInLevel) &&
            (i += t.boostPrice);
    }
    let a = s.Z.getStateForGuild(e);
    if ((null == a ? void 0 : a.instances) != null && Object.keys(a.instances).length > 0)
        for (let e of Object.values(a.instances)) i += e.plan.cost;
    return i;
}
function O(e) {
    if (null == m[e]) {
        let t = y(e);
        m[e] = _(d({}, g()), { appliedBoosts: t });
    }
    return m[e];
}
function v(e) {
    let { guildId: t, allPowerups: n, powerupCatalog: r } = e,
        i = O(t);
    m = _(d({}, m), {
        [t]: _(d({}, i), {
            allPowerups: n,
            powerupCatalog: r,
            catalogFetchCooldown: Date.now(),
            hasFetchedPowerupCatalog: !0,
        }),
    });
}
function I(e) {
    let { guildId: t, unlockedPowerups: n } = e,
        r = O(t),
        i = y(t);
    m = _(d({}, m), {
        [t]: _(d({}, r), {
            unlockedPowerups: n,
            appliedBoosts: i,
            unlockedPowerupsFetchCooldown: Date.now(),
            hasFetchedUnlockedPowerups: !0,
        }),
    });
}
function T(e, t) {
    let { guildId: n, entitlements: r } = e,
        i = O(n);
    r.forEach((e) => {
        t ? (i.unlockedPowerups[e.sku_id] = e) : delete i.unlockedPowerups[e.sku_id];
    }),
        (m = _(d({}, m), { [n]: _(d({}, i), { appliedBoosts: y(n) }) }));
}
function S(e) {
    T(e, !0);
}
function A(e) {
    T(e, !1);
}
function C() {
    m = {};
}
class N extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (m = e);
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
        return null == n || n + h < Date.now();
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
u(N, "displayName", "GuildPowerupsStore"),
    u(N, "persistKey", "GuildPowerupsStore"),
    u(N, "migrations", [
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
                                  _(d({}, o), {
                                      allPowerups: null != (t = o.allPowerups) ? t : {},
                                      powerupCatalog: null != (n = o.powerupCatalog) ? n : {},
                                      unlockedPowerups: null != (r = o.unlockedPowerups) ? r : {},
                                  }),
                              ];
                          }),
                  ),
    ]);
let R = new N(a.Z, {
    LOGOUT: C,
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: v,
    GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS: I,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: S,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: A,
    GUILD_UPDATE: E,
    PORTKEY_FETCH_INSTANCES_SUCCESS: b,
});
