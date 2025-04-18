n.d(t, { Z: () => T }), n(388685);
var r = n(442837),
    i = n(570140);
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
function o(e) {
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
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = 86400000,
    u = 3600000,
    d = new Map(),
    f = {},
    _ = {},
    p = {},
    h = {};
function m(e) {
    return Array.from(e.values()).reduce((e, t) => {
        var n, r, i;
        return e + (null != (i = null == (r = t.sku) || null == (n = r.powerup_metadata) ? void 0 : n.boost_price) ? i : 0);
    }, 0);
}
function g(e) {
    return (
        d.has(e) ||
            d.set(e, {
                powerups: new Map(),
                unlocked: new Map(),
                catalog: new Map(),
                appliedBoosts: 0
            }),
        d.get(e)
    );
}
function E(e) {
    let { guildId: t, powerups: n, catalog: r } = e,
        i = g(t),
        a = new Map(d);
    a.set(
        t,
        l(o({}, i), {
            powerups: n,
            catalog: r
        })
    ),
        (d = a),
        (f[t] = Date.now()),
        (p[t] = !0);
}
function b(e) {
    let { guildId: t, unlocked: n } = e,
        r = g(t),
        i = m(n),
        a = new Map(d);
    a.set(
        t,
        l(o({}, r), {
            unlocked: n,
            appliedBoosts: i
        })
    ),
        (d = a),
        (_[t] = Date.now()),
        (h[t] = !0);
}
function y(e, t) {
    let { guildId: n, entitlements: r } = e,
        i = g(n);
    r.forEach((e) => {
        t ? i.unlocked.set(e.sku_id, e) : i.unlocked.delete(e.sku_id);
    });
    let a = m(i.unlocked),
        s = new Map(d);
    s.set(n, l(o({}, i), { appliedBoosts: a })), (d = s);
}
function v(e) {
    y(e, !0);
}
function O(e) {
    y(e, !1);
}
function I() {
    (d = new Map()), (f = {}), (_ = {});
}
class S extends r.ZP.Store {
    getStateForGuild(e) {
        return null != e ? d.get(e) : void 0;
    }
    shouldFetchCatalogForGuild(e) {
        let t = f[e];
        return null == t || t + c < Date.now();
    }
    shouldFetchPowerupsForGuild(e) {
        let t = _[e];
        return null == t || t + u < Date.now();
    }
    hasFetchedPowerupCatalog(e) {
        return null != e && !0 === p[e];
    }
    hasFetchedUnlockedPowerups(e) {
        return null != e && !0 === h[e];
    }
}
let T = new S(i.Z, {
    LOGOUT: I,
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: E,
    GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS: b,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: v,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: O
});
