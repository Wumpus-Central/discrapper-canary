n.d(t, { A: () => A });
var i,
    r = n(488428),
    a =
        (((i = {})[(i.FEATURED_DEFAULT_LIMIT = 30)] = "FEATURED_DEFAULT_LIMIT"),
        (i[(i.SEARCH_RESULTS_DEFAULT_LIMIT = 24)] = "SEARCH_RESULTS_DEFAULT_LIMIT"),
        i),
    s = n(620632),
    l = n(73153),
    o = n(439372),
    d = n(449054),
    c = n(351022),
    u = n(965660);
n(324580);
var _ = n(652215);
class E extends o.A {
    actions = { POST_CONNECTION_OPEN: () => this.handleConnectionOpen() };
    queue = new Set();
    isFetchEnabled = !1;
    handleConnectionOpen = () => {
        ((this.isFetchEnabled = !0),
            this.queue.forEach((e) => {
                -1 === e ? this.fetchFeaturedGuilds() : this.fetchCategoryFeaturedGuilds({ categoryId: e });
            }));
    };
    fetchFeaturedGuilds = async (e) => {
        if (!this.isFetchEnabled) return void this.queue.add(-1);
        let t = e?.forceRefresh ?? !1,
            n = c.A.getLastFetchTimestamp({ categoryId: -1 });
        if (t || (0, u.M9)(n)) {
            l.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId: -1, reset: !0 });
            try {
                let e = await s.Bo.get({
                        url: _.Rsh.GUILD_DISCOVERY,
                        query: r.As({ offset: 0, limit: a.FEATURED_DEFAULT_LIMIT }),
                        oldFormErrors: !0,
                        rejectWithError: (0, s.fT)(),
                    }),
                    t = e.body.total,
                    n = e.body.guilds.map(u.MC);
                l.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS", categoryId: -1, guilds: n, total: t });
            } catch (e) {
                (l.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId: -1, error: e }),
                    d.uf({ categoryId: -1 }));
            }
        }
    };
    fetchCategoryFeaturedGuilds = async (e) => {
        let { categoryId: t, forceRefresh: n = !1 } = e;
        if (!this.isFetchEnabled) return void this.queue.add(t);
        let i = c.A.getLastFetchTimestamp({ categoryId: t });
        if (n || (0, u.M9)(i)) {
            l.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId: t, reset: !0 });
            try {
                let e = await s.Bo.get({
                        url: _.Rsh.GUILD_DISCOVERY,
                        query: r.As({ categories: [t] }),
                        oldFormErrors: !0,
                        rejectWithError: (0, s.fT)(),
                    }),
                    n = e.body.total,
                    i = e.body.guilds.map(u.MC);
                l.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS", categoryId: t, guilds: i, total: n });
            } catch (e) {
                (l.h.dispatch({ type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId: t, error: e }),
                    d.uf({ categoryId: t }));
            }
        }
    };
}
let A = new E();
