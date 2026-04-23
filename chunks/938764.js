n.d(t, { A: () => c }), n(321073);
var i = n(17928),
    l = n(228366),
    s = n(370876);
let r = [],
    a = {},
    o = {};
class d extends i.Ay.Store {
    static displayName = "GuildDirectorySearchStore";
    getSearchState(e) {
        return a[e] ?? { mostRecentQuery: "", fetching: !1 };
    }
    getSearchResults(e, t) {
        return o[e]?.[t]?.results ?? r;
    }
    shouldFetch(e, t) {
        let n = o[e]?.[t]?.lastSearchedAt;
        return null == n || Date.now() - n > 12e4;
    }
}
let c = new d(l.h, {
    GUILD_DIRECTORY_SEARCH_START: function (e) {
        let { channelId: t, query: n } = e;
        a[t] = { fetching: !0, mostRecentQuery: n };
    },
    GUILD_DIRECTORY_SEARCH_SUCCESS: function (e) {
        let { channelId: t, query: n, results: i } = e;
        a[t] = { ...a[t], fetching: !1 };
        let l = [];
        i.forEach((e) => {
            let t = (0, s.mR)(e);
            l.push(t);
        }),
            (o[t] = { ...o[t], [n]: { results: (0, s.DN)(l), lastSearchedAt: Date.now() } });
    },
    GUILD_DIRECTORY_SEARCH_FAILURE: function (e) {
        let { channelId: t } = e;
        a[t] = { ...a[t], fetching: !1 };
    },
    GUILD_DIRECTORY_SEARCH_CLEAR: function (e) {
        let { channelId: t } = e;
        a[t] = { fetching: !1, mostRecentQuery: "" };
    },
    GUILD_DIRECTORY_CACHED_SEARCH: function (e) {
        let { channelId: t, query: n } = e;
        a[t] = { fetching: !1, mostRecentQuery: n };
    },
    GUILD_DIRECTORY_ENTRY_DELETE: function (e) {
        let { channelId: t, guildId: n } = e,
            i = a[t]?.mostRecentQuery;
        if (null == i) return;
        let l = o[t][i];
        if (null == l) return;
        let s = l.results.filter((e) => e.guildId !== n);
        o[t] = { ...o[t], [a[t].mostRecentQuery]: { ...l, results: s } };
    },
});
