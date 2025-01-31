n.d(t, { Z: () => p }), n(653041);
var i,
    l,
    a,
    r = n(442837),
    s = n(570140),
    o = n(975984);
let c = [],
    d = {},
    u = {};
class h extends (i = r.ZP.Store) {
    getSearchState(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t
            ? t
            : {
                  mostRecentQuery: '',
                  fetching: !1
              };
    }
    getSearchResults(e, t) {
        var n, i, l;
        return null !== (l = null === (i = u[e]) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.results) && void 0 !== l ? l : c;
    }
    shouldFetch(e, t) {
        var n, i;
        let l = null === (i = u[e]) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.lastSearchedAt;
        return null == l || Date.now() - l > 120000;
    }
}
(a = 'GuildDirectorySearchStore'),
    (l = 'displayName') in h
        ? Object.defineProperty(h, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[l] = a);
let p = new h(s.Z, {
    GUILD_DIRECTORY_SEARCH_START: function (e) {
        let { channelId: t, query: n } = e;
        d[t] = {
            fetching: !0,
            mostRecentQuery: n
        };
    },
    GUILD_DIRECTORY_SEARCH_SUCCESS: function (e) {
        let { channelId: t, query: n, results: i } = e;
        d[t] = {
            ...d[t],
            fetching: !1
        };
        let l = [];
        i.forEach((e) => {
            let t = (0, o.MQ)(e);
            l.push(t);
        }),
            (u[t] = {
                ...u[t],
                [n]: {
                    results: (0, o.Th)(l),
                    lastSearchedAt: Date.now()
                }
            });
    },
    GUILD_DIRECTORY_SEARCH_FAILURE: function (e) {
        let { channelId: t } = e;
        d[t] = {
            ...d[t],
            fetching: !1
        };
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
        let { channelId: n, guildId: i } = e,
            l = null === (t = d[n]) || void 0 === t ? void 0 : t.mostRecentQuery;
        if (null == l) return;
        let a = u[n][l];
        if (null == a) return;
        let r = a.results.filter((e) => e.guildId !== i);
        u[n] = {
            ...u[n],
            [d[n].mostRecentQuery]: {
                ...a,
                results: r
            }
        };
    }
});
