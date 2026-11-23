var r = s(177068),
    n = s(409037),
    a = s(768570),
    i = s(652215);
class c extends n.c {
    createRequestPayload(e) {
        let { searchQuery: t, searchTabs: s, getLimit: r, pagination: n, trackExactTotalHits: i } = e,
            { include_nsfw: c, channel_id: l, search_session_id: u, search_query_id: _, ...h } = t,
            d = {
                include_nsfw: c,
                channel_ids: l,
                tabs: {},
                track_exact_total_hits: i,
                search_session_id: u,
                search_query_id: _,
            };
        return (
            s.forEach((e) => {
                let t = r(e),
                    s = a.B7[e],
                    i = null != s ? a.su[s] : {};
                d.tabs[e] = { ...a.us, ...i, ...h, ...n, limit: t };
            }),
            d
        );
    }
    createWithPayload(e) {
        let { searchContext: t, searchQuery: s, searchTabs: n, getLimit: a, pagination: c, trackExactTotalHits: l } = e,
            u = this.createRequestPayload({
                searchQuery: s,
                searchTabs: n,
                getLimit: a,
                pagination: c,
                trackExactTotalHits: l,
            });
        switch (t.type) {
            case i.I4_.GUILD:
            case i.I4_.GUILD_CHANNEL:
            case i.I4_.THREAD:
                return new r.DX(t.guildId, t.type, s, u);
            case i.I4_.CHANNEL:
                return new r.DX(t.channelId, t.type, s, u);
            case i.I4_.DMS:
                return new r.DX(t.type, t.type, s, u);
            default:
                throw Error(`[SearchFetchManager] Unsupported search context type: ${t.type}`);
        }
    }
    create(e) {
        let {
            id: t,
            searchContext: s,
            searchQuery: r,
            searchTabs: n,
            getLimit: a,
            pagination: i,
            trackExactTotalHits: c,
        } = e;
        this.cancel(t);
        let l = this.createWithPayload({
            searchContext: s,
            searchQuery: r,
            searchTabs: n,
            getLimit: a,
            pagination: i,
            trackExactTotalHits: c,
        });
        return (this.set(t, l), l);
    }
}
let l = new c();
s.d(t, {}, { A: l });
