n.d(t, { Z: () => g }), n(47120);
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
let c = new Map();
function u(e) {
    return e.values().reduce((e, t) => {
        var n, r, i;
        return e + (null !== (i = null === (r = t.sku) || void 0 === r ? void 0 : null === (n = r.powerup_metadata) || void 0 === n ? void 0 : n.boost_price) && void 0 !== i ? i : 0);
    }, 0);
}
function d(e) {
    return (
        c.has(e) ||
            c.set(e, {
                powerups: new Map(),
                unlocked: new Map(),
                catalog: new Map(),
                appliedBoosts: 0
            }),
        c.get(e)
    );
}
function f(e) {
    let { guildId: t, powerups: n, catalog: r } = e,
        i = d(t),
        o = new Map(c);
    o.set(
        t,
        l(a({}, i), {
            powerups: n,
            catalog: r
        })
    ),
        (c = o);
}
function _(e) {
    let { guildId: t, unlocked: n } = e,
        r = d(t),
        i = u(n),
        o = new Map(c);
    o.set(
        t,
        l(a({}, r), {
            unlocked: n,
            appliedBoosts: i
        })
    ),
        (c = o);
}
function p(e) {
    let { guildId: t, entitlements: n } = e,
        r = d(t);
    n.forEach((e) => {
        r.unlocked.set(e.sku_id, e);
    });
    let i = u(r.unlocked),
        o = new Map(c);
    o.set(t, l(a({}, r), { appliedBoosts: i })), (c = o);
}
function h(e) {
    let { guildId: t, entitlements: n } = e,
        r = d(t);
    n.forEach((e) => {
        r.unlocked.delete(e.sku_id);
    });
    let i = u(r.unlocked),
        o = new Map(c);
    o.set(t, l(a({}, r), { appliedBoosts: i })), (c = o);
}
class m extends r.ZP.Store {
    getStateForGuild(e) {
        return c.get(e);
    }
}
let g = new m(i.Z, {
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: f,
    GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS: _,
    GUILD_POWERUP_ENTITLEMENTS_CREATE: p,
    GUILD_POWERUP_ENTITLEMENTS_DELETE: h
});
