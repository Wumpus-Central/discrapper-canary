n.d(t, { Z: () => h });
var r,
    l = n(442837),
    s = n(570140),
    a = n(314897),
    i = n(900849);
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = {};
class m extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(a.default);
    }
    isFetchingGuild(e) {
        let t = u[e];
        return null != t && 'fetching' === t.fetchState;
    }
    getGuild(e) {
        let t = u[e];
        return null != t ? t.guild : null;
    }
    hasFetchFailed(e) {
        let t = u[e];
        return null != t && 'failed' === t.fetchState;
    }
}
c(m, 'displayName', 'GuildPopoutStore');
let h = new m(s.Z, {
    GUILD_POPOUT_FETCH_START: function (e) {
        let { guildId: t } = e;
        u[t] = d(o({}, u[t]), { fetchState: 'fetching' });
    },
    GUILD_POPOUT_FETCH_SUCCESS: function (e) {
        let { guildId: t, guild: n } = e,
            r = (0, i.PP)(n);
        u[t] = d(o({}, u[t]), {
            guild: r,
            fetchState: 'succeeded'
        });
    },
    GUILD_POPOUT_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        u[t] = d(o({}, u[t]), { fetchState: 'failed' });
    }
});
