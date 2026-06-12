n.d(e, { A: () => R }), n(321073);
var r = n(17928),
    i = n(228366),
    c = n(370876);
let a = [],
    l = {},
    o = {};
class E extends r.Ay.Store {
    static displayName = "GuildDirectorySearchStore";
    getSearchState(t) {
        return l[t] ?? { mostRecentQuery: "", fetching: !1 };
    }
    getSearchResults(t, e) {
        return o[t]?.[e]?.results ?? a;
    }
    shouldFetch(t, e) {
        let n = o[t]?.[e]?.lastSearchedAt;
        return null == n || Date.now() - n > 12e4;
    }
}
let R = new E(i.h, {
    GUILD_DIRECTORY_SEARCH_START: function (t) {
        let { channelId: e, query: n } = t;
        l[e] = { fetching: !0, mostRecentQuery: n };
    },
    GUILD_DIRECTORY_SEARCH_SUCCESS: function (t) {
        let { channelId: e, query: n, results: r } = t;
        l[e] = { ...l[e], fetching: !1 };
        let i = [];
        r.forEach((t) => {
            let e = (0, c.mR)(t);
            i.push(e);
        }),
            (o[e] = { ...o[e], [n]: { results: (0, c.DN)(i), lastSearchedAt: Date.now() } });
    },
    GUILD_DIRECTORY_SEARCH_FAILURE: function (t) {
        let { channelId: e } = t;
        l[e] = { ...l[e], fetching: !1 };
    },
    GUILD_DIRECTORY_SEARCH_CLEAR: function (t) {
        let { channelId: e } = t;
        l[e] = { fetching: !1, mostRecentQuery: "" };
    },
    GUILD_DIRECTORY_CACHED_SEARCH: function (t) {
        let { channelId: e, query: n } = t;
        l[e] = { fetching: !1, mostRecentQuery: n };
    },
    GUILD_DIRECTORY_ENTRY_DELETE: function (t) {
        let { channelId: e, guildId: n } = t,
            r = l[e]?.mostRecentQuery;
        if (null == r) return;
        let i = o[e][r];
        if (null == i) return;
        let c = i.results.filter((t) => t.guildId !== n);
        o[e] = { ...o[e], [l[e].mostRecentQuery]: { ...i, results: c } };
    },
});
