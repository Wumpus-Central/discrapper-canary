var r = s(177068),
    a = s(409037),
    n = s(768570),
    i = s(652215);
class c extends a.c {
    createRequestPayload(e) {
        let { searchQuery: t, searchTabs: s, getLimit: r, pagination: a, trackExactTotalHits: i } = e,
            { include_nsfw: c, channel_id: l, search_session_id: _, search_query_id: u, ...d } = t,
            h = {
                include_nsfw: c,
                channel_ids: l,
                tabs: {},
                track_exact_total_hits: i,
                search_session_id: _,
                search_query_id: u,
            };
        return (
            s.forEach((e) => {
                let t = r(e),
                    s = n.B7[e],
                    i = null != s ? n.su[s] : {};
                h.tabs[e] = { ...n.us, ...i, ...d, ...a, limit: t };
            }),
            h
        );
    }
    createWithPayload(e) {
        let { searchContext: t, searchQuery: s, searchTabs: a, getLimit: n, pagination: c, trackExactTotalHits: l } = e,
            _ = this.createRequestPayload({
                searchQuery: s,
                searchTabs: a,
                getLimit: n,
                pagination: c,
                trackExactTotalHits: l,
            });
        switch (t.type) {
            case i.I4_.GUILD:
            case i.I4_.GUILD_CHANNEL:
            case i.I4_.THREAD:
                return new r.DX(t.guildId, t.type, s, _);
            case i.I4_.CHANNEL:
                return new r.DX(t.channelId, t.type, s, _);
            case i.I4_.DMS:
                return new r.DX(t.type, t.type, s, _);
            default:
                throw Error(`[SearchFetchManager] Unsupported search context type: ${t.type}`);
        }
    }
    create(e) {
        let {
            id: t,
            searchContext: s,
            searchQuery: r,
            searchTabs: a,
            getLimit: n,
            pagination: i,
            trackExactTotalHits: c,
        } = e;
        this.cancel(t);
        let l = this.createWithPayload({
            searchContext: s,
            searchQuery: r,
            searchTabs: a,
            getLimit: n,
            pagination: i,
            trackExactTotalHits: c,
        });
        return (this.set(t, l), l);
    }
}
let l = new c();
s.d(t, {}, { A: l });
