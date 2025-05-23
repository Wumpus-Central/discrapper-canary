n.d(t, { Z: () => v });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = 86400000,
    d = 3600000,
    f = {};
function _(e) {
    return Object.values(e).reduce((e, t) => {
        var n, r, i;
        return e + (null != (i = null == (r = t.sku) || null == (n = r.powerup_metadata) ? void 0 : n.boost_price) ? i : 0);
    }, 0);
}
function p(e) {
    return (
        null == f[e] &&
            (f[e] = {
                allPowerups: {},
                unlockedPowerups: {},
                powerupCatalog: {},
                appliedBoosts: 0
            }),
        f[e]
    );
}
function h(e) {
    let { guildId: t, allPowerups: n, powerupCatalog: r } = e,
        i = p(t);
    f = c(s({}, f), {
        [t]: c(s({}, i), {
            allPowerups: n,
            powerupCatalog: r,
            catalogFetchCooldown: Date.now(),
            hasFetchedPowerupCatalog: !0
        })
    });
}
function m(e) {
    let { guildId: t, unlockedPowerups: n } = e,
        r = p(t),
        i = _(n);
    f = c(s({}, f), {
        [t]: c(s({}, r), {
            unlockedPowerups: n,
            appliedBoosts: i,
            unlockedPowerupsFetchCooldown: Date.now(),
            hasFetchedUnlockedPowerups: !0
        })
    });
}
function g(e, t) {
    let { guildId: n, entitlements: r } = e,
        i = p(n);
    r.forEach((e) => {
        t ? (i.unlockedPowerups[e.sku_id] = e) : delete i.unlockedPowerups[e.sku_id];
    });
    let o = _(i.unlockedPowerups);
    f = c(s({}, f), { [n]: c(s({}, i), { appliedBoosts: o }) });
}
function E(e) {
    g(e, !0);
}
function b(e) {
    g(e, !1);
}
function y() {
    f = {};
}
class O extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (f = e);
    }
    getState() {
        return f;
    }
    getStateForGuild(e) {
        return null != e ? f[e] : void 0;
    }
    shouldFetchCatalogForGuild(e) {
        var t;
        let n = null == (t = f[e]) ? void 0 : t.catalogFetchCooldown;
        return null == n || n + u < Date.now();
    }
    shouldFetchPowerupsForGuild(e) {
        var t;
        let n = null == (t = f[e]) ? void 0 : t.unlockedPowerupsFetchCooldown;
        return null == n || n + d < Date.now();
    }
    hasFetchedPowerupCatalog(e) {
        var t;
        return null != e && (null == (t = f[e]) ? void 0 : t.hasFetchedPowerupCatalog) === !0;
    }
    hasFetchedUnlockedPowerups(e) {
        var t;
        return null != e && (null == (t = f[e]) ? void 0 : t.hasFetchedUnlockedPowerups) === !0;
    }
}
a(O, 'displayName', 'GuildPowerupsStore'), a(O, 'persistKey', 'GuildPowerupsStore');
let v = new O(o.Z, {
    LOGOUT: y,
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: h,
    GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS: m,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: E,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: b
});
