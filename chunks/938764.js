"use strict";
n.d(t, { A: () => d }), n(321073);
var i = n(311907),
    s = n(73153),
    l = n(370876);
let r = [],
    a = {},
    o = {};
class c extends i.Ay.Store {
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
let d = new c(s.h, {
    GUILD_DIRECTORY_SEARCH_START: function (e) {
        let { channelId: t, query: n } = e;
        a[t] = { fetching: !0, mostRecentQuery: n };
    },
    GUILD_DIRECTORY_SEARCH_SUCCESS: function (e) {
        let { channelId: t, query: n, results: i } = e;
        a[t] = { ...a[t], fetching: !1 };
        let s = [];
        i.forEach((e) => {
            let t = (0, l.mR)(e);
            s.push(t);
        }),
            (o[t] = { ...o[t], [n]: { results: (0, l.DN)(s), lastSearchedAt: Date.now() } });
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
        let s = o[t][i];
        if (null == s) return;
        let l = s.results.filter((e) => e.guildId !== n);
        o[t] = { ...o[t], [a[t].mostRecentQuery]: { ...s, results: l } };
    },
});
