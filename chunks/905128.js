n.d(t, { Z: () => p });
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
let c = {};
function u(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t
        ? t
        : {
              powerups: {},
              unlocked: {},
              appliedBoosts: 0
          };
}
function d(e) {
    let { guildId: t, powerups: n } = e,
        r = u(t);
    c = l(a({}, c), { [t]: l(a({}, r), { powerups: n }) });
}
function f(e) {
    let { guildId: t, unlocked: n } = e,
        r = u(t),
        i = Object.values(n).reduce((e, t) => {
            var n, r, i;
            return e + (null !== (i = null === (r = t.sku) || void 0 === r ? void 0 : null === (n = r.powerup_metadata) || void 0 === n ? void 0 : n.boost_price) && void 0 !== i ? i : 0);
        }, 0);
    c = l(a({}, c), {
        [t]: l(a({}, r), {
            unlocked: n,
            appliedBoosts: i
        })
    });
}
class _ extends r.ZP.Store {
    getStateForGuild(e) {
        return c[e];
    }
}
let p = new _(i.Z, {
    GUILD_POWERUP_CATALOG_FETCH_SUCCESS: d,
    GUILD_UNLOCKED_POWERUPS_FETCH_SUCCESS: f
});
