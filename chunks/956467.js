"use strict";
n.d(t, { A: () => l });
var i = n(177068),
    r = n(409037),
    s = n(768570),
    a = n(652215);
class o extends r.c {
    createRequestPayload(e) {
        let { searchQuery: t, searchTabs: n, getLimit: i, pagination: r, trackExactTotalHits: a } = e,
            { include_nsfw: o, channel_id: l, ...u } = t,
            c = { include_nsfw: o, channel_ids: l, tabs: {}, track_exact_total_hits: a };
        return (
            n.forEach((e) => {
                let t = i(e),
                    n = s.B7[e],
                    { has: a, ...o } = null != n ? s.su[n] : {},
                    { has: l, ...d } = u,
                    _ = [...new Set([...(a ?? []), ...(l ?? [])])];
                c.tabs[e] = { ...s.us, ...o, ...d, ...(_.length > 0 ? { has: _ } : {}), ...r, limit: t };
            }),
            c
        );
    }
    createWithPayload(e) {
        let { searchContext: t, searchQuery: n, searchTabs: r, getLimit: s, pagination: o, trackExactTotalHits: l } = e,
            u = this.createRequestPayload({
                searchQuery: n,
                searchTabs: r,
                getLimit: s,
                pagination: o,
                trackExactTotalHits: l,
            });
        switch (t.type) {
            case a.I4_.GUILD:
            case a.I4_.GUILD_CHANNEL:
            case a.I4_.THREAD:
                return new i.DX(t.guildId, t.type, n, u);
            case a.I4_.CHANNEL:
                return new i.DX(t.channelId, t.type, n, u);
            case a.I4_.DMS:
                return new i.DX(t.type, t.type, n, u);
            default:
                throw Error(`[SearchFetchManager] Unsupported search context type: ${t.type}`);
        }
    }
    create(e) {
        let {
            id: t,
            searchContext: n,
            searchQuery: i,
            searchTabs: r,
            getLimit: s,
            pagination: a,
            trackExactTotalHits: o,
        } = e;
        this.cancel(t);
        let l = this.createWithPayload({
            searchContext: n,
            searchQuery: i,
            searchTabs: r,
            getLimit: s,
            pagination: a,
            trackExactTotalHits: o,
        });
        return this.set(t, l), l;
    }
}
let l = new o();
