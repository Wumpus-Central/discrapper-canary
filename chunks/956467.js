s.d(t, { A: () => c });
var r = s(177068),
    a = s(409037),
    n = s(768570),
    i = s(652215);
class _ extends a.c {
    createRequestPayload(e) {
        let { searchQuery: t, searchTabs: s, getLimit: r, pagination: a, trackExactTotalHits: i } = e,
            { include_nsfw: _, channel_id: c, search_session_id: l, search_query_id: h, ...d } = t,
            u = {
                include_nsfw: _,
                channel_ids: c,
                tabs: {},
                track_exact_total_hits: i,
                search_session_id: l,
                search_query_id: h,
            };
        return (
            s.forEach((e) => {
                let t = r(e),
                    s = n.B7[e],
                    i = null != s ? n.su[s] : {};
                u.tabs[e] = { ...n.us, ...i, ...d, ...a, limit: t };
            }),
            u
        );
    }
    createWithPayload(e) {
        let { searchContext: t, searchQuery: s, searchTabs: a, getLimit: n, pagination: _, trackExactTotalHits: c } = e,
            l = this.createRequestPayload({
                searchQuery: s,
                searchTabs: a,
                getLimit: n,
                pagination: _,
                trackExactTotalHits: c,
            });
        switch (t.type) {
            case i.I4_.GUILD:
            case i.I4_.GUILD_CHANNEL:
            case i.I4_.THREAD:
                return new r.DX(t.guildId, t.type, s, l);
            case i.I4_.CHANNEL:
                return new r.DX(t.channelId, t.type, s, l);
            case i.I4_.DMS:
                return new r.DX(t.type, t.type, s, l);
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
            trackExactTotalHits: _,
        } = e;
        this.cancel(t);
        let c = this.createWithPayload({
            searchContext: s,
            searchQuery: r,
            searchTabs: a,
            getLimit: n,
            pagination: i,
            trackExactTotalHits: _,
        });
        return (this.set(t, c), c);
    }
}
let c = new _();
