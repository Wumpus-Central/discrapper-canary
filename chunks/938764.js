n.d(t, { A: () => h }), n(321073);
var r,
    l = n(311907),
    i = n(73153),
    a = n(370876);
function s(e, t, n) {
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
function o(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
let u = [],
    d = {},
    f = {};
class p extends (r = l.Ay.Store) {
    getSearchState(e) {
        var t;
        return null != (t = d[e])
            ? t
            : {
                  mostRecentQuery: "",
                  fetching: !1,
              };
    }
    getSearchResults(e, t) {
        var n, r, l;
        return null != (n = null == (l = f[e]) || null == (r = l[t]) ? void 0 : r.results) ? n : u;
    }
    shouldFetch(e, t) {
        var n, r;
        let l = null == (r = f[e]) || null == (n = r[t]) ? void 0 : n.lastSearchedAt;
        return null == l || Date.now() - l > 120000;
    }
}
s(p, "displayName", "GuildDirectorySearchStore");
let h = new p(i.h, {
    GUILD_DIRECTORY_SEARCH_START: function (e) {
        let { channelId: t, query: n } = e;
        d[t] = {
            fetching: !0,
            mostRecentQuery: n,
        };
    },
    GUILD_DIRECTORY_SEARCH_SUCCESS: function (e) {
        let { channelId: t, query: n, results: r } = e;
        d[t] = c(o({}, d[t]), { fetching: !1 });
        let l = [];
        r.forEach((e) => {
            let t = (0, a.mR)(e);
            l.push(t);
        }),
            (f[t] = c(o({}, f[t]), {
                [n]: {
                    results: (0, a.DN)(l),
                    lastSearchedAt: Date.now(),
                },
            }));
    },
    GUILD_DIRECTORY_SEARCH_FAILURE: function (e) {
        let { channelId: t } = e;
        d[t] = c(o({}, d[t]), { fetching: !1 });
    },
    GUILD_DIRECTORY_SEARCH_CLEAR: function (e) {
        let { channelId: t } = e;
        d[t] = {
            fetching: !1,
            mostRecentQuery: "",
        };
    },
    GUILD_DIRECTORY_CACHED_SEARCH: function (e) {
        let { channelId: t, query: n } = e;
        d[t] = {
            fetching: !1,
            mostRecentQuery: n,
        };
    },
    GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
        var t;
        let { channelId: n, guildId: r } = e,
            l = null == (t = d[n]) ? void 0 : t.mostRecentQuery;
        if (null == l) return;
        let i = f[n][l];
        if (null == i) return;
        let a = i.results.filter((e) => e.guildId !== r);
        f[n] = c(o({}, f[n]), { [d[n].mostRecentQuery]: c(o({}, i), { results: a }) });
    },
});
