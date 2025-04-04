n.d(t, { Z: () => I }), n(47120);
var r = n(442837),
    i = n(570140);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
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
    _ = {};
function p(e) {
    return Array.from(e.values()).reduce((e, t) => {
        var n, r, i;
        return e + (null != (i = null == (r = t.sku) || null == (n = r.powerup_metadata) ? void 0 : n.boost_price) ? i : 0);
    }, 0);
}
function h(e) {
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
function m(e) {
    let { guildId: t, powerups: n, catalog: r } = e,
        i = h(t),
        o = new Map(d);
    o.set(
        t,
        l(a({}, i), {
            powerups: n,
            catalog: r
        })
    ),
        (d = o),
        (f[t] = Date.now());
}
function g(e) {
    let { guildId: t, unlocked: n } = e,
        r = h(t),
        i = p(n),
        o = new Map(d);
    o.set(
        t,
        l(a({}, r), {
            unlocked: n,
            appliedBoosts: i
        })
    ),
        (d = o),
        (_[t] = Date.now());
}
function E(e, t) {
    let { guildId: n, entitlements: r } = e,
        i = h(n);
    r.forEach((e) => {
        t ? i.unlocked.set(e.sku_id, e) : i.unlocked.delete(e.sku_id);
    });
    let o = p(i.unlocked),
        s = new Map(d);
    s.set(n, l(a({}, i), { appliedBoosts: o })), (d = s);
}
function b(e) {
    E(e, !0);
}
function y(e) {
    E(e, !1);
}
function v() {
    (d = new Map()), (f = {}), (_ = {});
}
class O extends r.ZP.Store {
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
}
let I = new O(i.Z, {
    LOGOUT: v,
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: m,
    GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS: g,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: b,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: y
});
