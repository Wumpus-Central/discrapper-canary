"use strict";
n.d(t, { A: () => l });
var r = n(177068),
    i = n(409037),
    a = n(768570),
    s = n(652215);
class o extends i.c {
    createRequestPayload(e) {
        let { searchQuery: t, searchTabs: n, getLimit: r, pagination: i, trackExactTotalHits: s } = e,
            { include_nsfw: o, channel_id: l, ...u } = t,
            c = { include_nsfw: o, channel_ids: l, tabs: {}, track_exact_total_hits: s };
        return (
            n.forEach((e) => {
                let t = r(e),
                    n = a.B7[e],
                    s = null != n ? a.su[n] : {};
                c.tabs[e] = { ...a.us, ...s, ...u, ...i, limit: t };
            }),
            c
        );
    }
    createWithPayload(e) {
        let { searchContext: t, searchQuery: n, searchTabs: i, getLimit: a, pagination: o, trackExactTotalHits: l } = e,
            u = this.createRequestPayload({
                searchQuery: n,
                searchTabs: i,
                getLimit: a,
                pagination: o,
                trackExactTotalHits: l,
            });
        switch (t.type) {
            case s.I4_.GUILD:
            case s.I4_.GUILD_CHANNEL:
            case s.I4_.THREAD:
                return new r.DX(t.guildId, t.type, n, u);
            case s.I4_.CHANNEL:
                return new r.DX(t.channelId, t.type, n, u);
            case s.I4_.DMS:
                return new r.DX(t.type, t.type, n, u);
            default:
                throw Error(`[SearchFetchManager] Unsupported search context type: ${t.type}`);
        }
    }
    create(e) {
        let {
            id: t,
            searchContext: n,
            searchQuery: r,
            searchTabs: i,
            getLimit: a,
            pagination: s,
            trackExactTotalHits: o,
        } = e;
        this.cancel(t);
        let l = this.createWithPayload({
            searchContext: n,
            searchQuery: r,
            searchTabs: i,
            getLimit: a,
            pagination: s,
            trackExactTotalHits: o,
        });
        return this.set(t, l), l;
    }
}
let l = new o();
