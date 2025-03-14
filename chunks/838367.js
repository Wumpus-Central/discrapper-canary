n.d(t, { Z: () => g });
var r,
    i = n(442837),
    o = n(570140),
    a = n(314897),
    s = n(900849);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = {};
function _(e) {
    let { guildId: t } = e;
    f[t] = d(c({}, f[t]), { fetchState: 'fetching' });
}
function p(e) {
    let { guildId: t, guild: n } = e,
        r = (0, s.PP)(n);
    f[t] = d(c({}, f[t]), {
        guild: r,
        fetchState: 'succeeded'
    });
}
function h(e) {
    let { guildId: t } = e;
    f[t] = d(c({}, f[t]), { fetchState: 'failed' });
}
class m extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(a.default);
    }
    isFetchingGuild(e) {
        let t = f[e];
        return null != t && 'fetching' === t.fetchState;
    }
    getGuild(e) {
        let t = f[e];
        return null != t ? t.guild : null;
    }
    hasFetchFailed(e) {
        let t = f[e];
        return null != t && 'failed' === t.fetchState;
    }
}
l(m, 'displayName', 'GuildPopoutStore');
let g = new m(o.Z, {
    GUILD_POPOUT_FETCH_START: _,
    GUILD_POPOUT_FETCH_SUCCESS: p,
    GUILD_POPOUT_FETCH_FAILURE: h
});
