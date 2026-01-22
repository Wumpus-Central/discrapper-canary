n.d(t, { A: () => f }), n(896048);
var r,
    i = n(311907),
    l = n(73153),
    a = n(198982);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = new Map();
class c {
    handleSearchCountStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchCountSuccess(e) {
        (this.counts = e), (this.isFetching = !1), (this.isInitialFetchComplete = !0);
    }
    handleSearchCountFailure(e) {
        (this.error = new a.LG(e)), (this.isFetching = !1);
    }
    constructor() {
        s(this, "isInitialFetchComplete", !1),
            s(this, "isFetching", !1),
            s(this, "error", null),
            s(this, "counts", null);
    }
}
function u(e) {
    var t;
    let n = null != (t = o.get(e)) ? t : new c();
    return o.set(e, n), n;
}
function d(e, t) {
    let n = o.get(e);
    return null != n ? t(n) : null;
}
class p extends (r = i.Ay.Store) {
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
s(p, "displayName", "GlobalDiscoveryServersSearchCountStore");
let f = new p(l.h, {
    CONNECTION_OPEN: function () {
        o.clear();
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
        o.forEach((e, t) => {
            n.has(t) || o.delete(t);
        });
    },
});
