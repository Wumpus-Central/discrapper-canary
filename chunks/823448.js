n.d(t, { A: () => c });
var i = n(311907),
    r = n(73153),
    a = n(198982);
let l = new Map();
class s {
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
        (this.error = new a.LG(e)), (this.isFetching = !1);
    }
}
function o(e) {
    let t = l.get(e) ?? new s();
    return l.set(e, t), t;
}
function d(e, t) {
    let n = l.get(e);
    return null != n ? t(n) : null;
}
class u extends i.Ay.Store {
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
let c = new u(r.h, {
    CONNECTION_OPEN: function () {
        l.clear();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function (e) {
        let { query: t } = e;
        o(t).handleSearchCountStart();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
        let { query: t, categoryCounts: n } = e;
        o(t).handleSearchCountSuccess(n);
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function (e) {
        let { query: t, error: n } = e;
        o(t).handleSearchCountFailure(n);
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
        let { ignoreQueries: t } = e,
            n = new Set(t);
        l.forEach((e, t) => {
            n.has(t) || l.delete(t);
        });
    },
});
