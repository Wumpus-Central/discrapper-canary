"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(845584);
let a = new Map();
class o {
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
function l(e) {
    let t = a.get(e) ?? new o();
    return a.set(e, t), t;
}
function u(e, t) {
    let n = a.get(e);
    return null != n ? t(n) : null;
}
class c extends i.Ay.Store {
    static displayName = "GlobalDiscoveryServersSearchCountStore";
    getIsInitialFetchComplete(e) {
        return u(e, (e) => e.isInitialFetchComplete);
    }
    getIsFetchingCounts(e) {
        return u(e, (e) => e.isFetching);
    }
    getCounts(e) {
        return u(e, (e) => e.counts);
    }
}
let d = new c(r.h, {
    CONNECTION_OPEN: function () {
        a.clear();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function (e) {
        let { query: t } = e;
        l(t).handleSearchCountStart();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
        let { query: t, categoryCounts: n } = e;
        l(t).handleSearchCountSuccess(n);
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function (e) {
        let { query: t, error: n } = e;
        l(t).handleSearchCountFailure(n);
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
        let { ignoreQueries: t } = e,
            n = new Set(t);
        a.forEach((e, t) => {
            n.has(t) || a.delete(t);
        });
    },
});
