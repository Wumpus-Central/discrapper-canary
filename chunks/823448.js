n.d(t, { A: () => c });
var i = n(17928),
    l = n(228366),
    s = n(845584);
let a = new Map();
class r {
    isInitialFetchComplete = !1;
    isFetching = !1;
    error = null;
    counts = null;
    handleSearchCountStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchCountSuccess(e) {
        (this.counts = e), (this.isFetching = !1), (this.isInitialFetchComplete = !0);
    }
    handleSearchCountFailure(e) {
        (this.error = new s.LG(e)), (this.isFetching = !1);
    }
}
function u(e) {
    let t = a.get(e) ?? new r();
    return a.set(e, t), t;
}
function d(e, t) {
    let n = a.get(e);
    return null != n ? t(n) : null;
}
class o extends i.Ay.Store {
    static displayName = "GlobalDiscoveryServersSearchCountStore";
    getIsInitialFetchComplete(e) {
        return d(e, (e) => e.isInitialFetchComplete);
    }
    getIsFetchingCounts(e) {
        return d(e, (e) => e.isFetching);
    }
    getCounts(e) {
        return d(e, (e) => e.counts);
    }
}
let c = new o(l.h, {
    CONNECTION_OPEN: function () {
        a.clear();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function (e) {
        let { query: t } = e;
        u(t).handleSearchCountStart();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
        let { query: t, categoryCounts: n } = e;
        u(t).handleSearchCountSuccess(n);
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function (e) {
        let { query: t, error: n } = e;
        u(t).handleSearchCountFailure(n);
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
        let { ignoreQueries: t } = e,
            n = new Set(t);
        a.forEach((e, t) => {
            n.has(t) || a.delete(t);
        });
    },
});
