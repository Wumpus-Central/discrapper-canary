"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    a = n(913122);
let s = new Map();
class l {
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
    let t = s.get(e) ?? new l();
    return s.set(e, t), t;
}
function d(e, t) {
    let n = s.get(e);
    return null != n ? t(n) : null;
}
class c extends i.Ay.Store {
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
let u = new c(r.h, {
    CONNECTION_OPEN: function () {
        s.clear();
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
        s.forEach((e, t) => {
            n.has(t) || s.delete(t);
        });
    },
});
