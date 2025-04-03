n.d(t, { Z: () => f }), n(653041);
var r,
    i = n(442837),
    l = n(570140),
    o = n(975984);
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
    p = {};
class h extends (r = i.ZP.Store) {
    getSearchState(e) {
        var t;
        return null != (t = d[e])
            ? t
            : {
                  mostRecentQuery: '',
                  fetching: !1
              };
    }
    getSearchResults(e, t) {
        var n, r, i;
        return null != (i = null == (r = p[e]) || null == (n = r[t]) ? void 0 : n.results) ? i : u;
    }
    shouldFetch(e, t) {
        var n, r;
        let i = null == (r = p[e]) || null == (n = r[t]) ? void 0 : n.lastSearchedAt;
        return null == i || Date.now() - i > 120000;
    }
}
a(h, 'displayName', 'GuildDirectorySearchStore');
let f = new h(l.Z, {
    GUILD_DIRECTORY_SEARCH_START: function (e) {
        let { channelId: t, query: n } = e;
        d[t] = {
            fetching: !0,
            mostRecentQuery: n
        };
    },
    GUILD_DIRECTORY_SEARCH_SUCCESS: function (e) {
        let { channelId: t, query: n, results: r } = e;
        d[t] = c(s({}, d[t]), { fetching: !1 });
        let i = [];
        r.forEach((e) => {
            let t = (0, o.MQ)(e);
            i.push(t);
        }),
            (p[t] = c(s({}, p[t]), {
                [n]: {
                    results: (0, o.Th)(i),
                    lastSearchedAt: Date.now()
                }
            }));
    },
    GUILD_DIRECTORY_SEARCH_FAILURE: function (e) {
        let { channelId: t } = e;
        d[t] = c(s({}, d[t]), { fetching: !1 });
    },
    GUILD_DIRECTORY_SEARCH_CLEAR: function (e) {
        let { channelId: t } = e;
        d[t] = {
            fetching: !1,
            mostRecentQuery: ''
        };
    },
    GUILD_DIRECTORY_CACHED_SEARCH: function (e) {
        let { channelId: t, query: n } = e;
        d[t] = {
            fetching: !1,
            mostRecentQuery: n
        };
    },
    GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
        var t;
        let { channelId: n, guildId: r } = e,
            i = null == (t = d[n]) ? void 0 : t.mostRecentQuery;
        if (null == i) return;
        let l = p[n][i];
        if (null == l) return;
        let o = l.results.filter((e) => e.guildId !== r);
        p[n] = c(s({}, p[n]), { [d[n].mostRecentQuery]: c(s({}, l), { results: o }) });
    }
});
