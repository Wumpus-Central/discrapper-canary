r.d(n, {
    M: function () {
        return i;
    }
});
var i,
    a,
    o = r(47120);
var s = r(442837),
    l = r(570140),
    u = r(70956);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.ERROR = 3)] = 'ERROR');
})(i || (i = {}));
let d = {
    applicationIdToGuildIds: {},
    lastFetchTimeMs: null,
    nextFetchRetryTimeMs: null,
    fetchState: 0
};
function f() {
    (d.applicationIdToGuildIds = {}), (d.lastFetchTimeMs = null), (d.nextFetchRetryTimeMs = null), (d.fetchState = 0);
}
function p() {
    d.fetchState = 1;
}
function h(e) {
    let { applicationId: n, guildId: r } = e;
    null == d.applicationIdToGuildIds[n] && (d.applicationIdToGuildIds[n] = new Set()), d.applicationIdToGuildIds[n].add(r), (d.applicationIdToGuildIds[n] = new Set(d.applicationIdToGuildIds[n]));
}
function _(e) {
    let { applicationId: n, guildId: r } = e;
    if (null != d.applicationIdToGuildIds[n]) d.applicationIdToGuildIds[n].delete(r), (d.applicationIdToGuildIds[n] = new Set(d.applicationIdToGuildIds[n]));
}
function m(e) {
    let { guildIdToApplicationIds: n } = e;
    for (let e in ((d.fetchState = 2), (d.lastFetchTimeMs = Date.now()), (d.applicationIdToGuildIds = {}), (d.nextFetchRetryTimeMs = null), n))
        for (let r of n[e])
            h({
                applicationId: r,
                guildId: e
            });
}
function g(e) {
    let { retryAfterSeconds: n } = e;
    if (((d.fetchState = 3), null != n)) {
        let e = n * u.Z.Millis.SECOND;
        d.nextFetchRetryTimeMs = Date.now() + e;
    }
}
function E(e) {
    let { application: n, guildId: r } = e;
    if (null != n)
        h({
            applicationId: n.id,
            guildId: r
        });
}
function v(e) {
    let { applicationId: n, guildId: r } = e;
    if (null != n)
        _({
            applicationId: n,
            guildId: r
        });
}
class y extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) for (let n in ((d.lastFetchTimeMs = e.lastFetchTimeMs), (d.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs), (d.fetchState = e.fetchState), e.applicationIdToGuildIds)) d.applicationIdToGuildIds[n] = new Set(e.applicationIdToGuildIds[n]);
    }
    getState() {
        return d;
    }
    getGuildIdsForApplication(e) {
        if (null != e) return d.applicationIdToGuildIds[e];
    }
    getLastFetchTimeMs() {
        return d.lastFetchTimeMs;
    }
    getNextFetchRetryTimeMs() {
        return d.nextFetchRetryTimeMs;
    }
    getFetchState() {
        return d.fetchState;
    }
}
c(y, 'displayName', 'MyGuildApplicationsStore'),
    c(y, 'persistKey', 'MyGuildApplicationsStore'),
    (n.Z = new y(l.Z, {
        LOGOUT: f,
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: p,
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: m,
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: g,
        INTEGRATION_CREATE: E,
        INTEGRATION_DELETE: v
    }));
