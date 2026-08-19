"use strict";
n.d(t, { A: () => o });
var i = n(177068),
    r = n(409037),
    a = n(768570),
    s = n(652215);
class l extends r.c {
    createRequestPayload(e) {
        let { searchQuery: t, searchTabs: n, getLimit: i, pagination: r, trackExactTotalHits: s } = e,
            { include_nsfw: l, channel_id: o, ...d } = t,
            c = { include_nsfw: l, channel_ids: o, tabs: {}, track_exact_total_hits: s };
        return (
            n.forEach((e) => {
                let t = i(e),
                    n = a.B7[e],
                    s = null != n ? a.su[n] : {};
                c.tabs[e] = { ...a.us, ...s, ...d, ...r, limit: t };
            }),
            c
        );
    }
    createWithPayload(e) {
        let { searchContext: t, searchQuery: n, searchTabs: r, getLimit: a, pagination: l, trackExactTotalHits: o } = e,
            d = this.createRequestPayload({
                searchQuery: n,
                searchTabs: r,
                getLimit: a,
                pagination: l,
                trackExactTotalHits: o,
            });
        switch (t.type) {
            case s.I4_.GUILD:
            case s.I4_.GUILD_CHANNEL:
            case s.I4_.THREAD:
                return new i.DX(t.guildId, t.type, n, d);
            case s.I4_.CHANNEL:
                return new i.DX(t.channelId, t.type, n, d);
            case s.I4_.DMS:
                return new i.DX(t.type, t.type, n, d);
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
            getLimit: a,
            pagination: s,
            trackExactTotalHits: l,
        } = e;
        this.cancel(t);
        let o = this.createWithPayload({
            searchContext: n,
            searchQuery: i,
            searchTabs: r,
            getLimit: a,
            pagination: s,
            trackExactTotalHits: l,
        });
        return this.set(t, o), o;
    }
}
let o = new l();
