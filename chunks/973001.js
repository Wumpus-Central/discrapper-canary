n.d(t, {
    M: () => l,
    Z: () => v
}),
    n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(70956);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var l = (function (e) {
    return (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.ERROR = 3)] = 'ERROR'), e;
})({});
let u = {
    applicationIdToGuildIds: {},
    lastFetchTimeMs: null,
    nextFetchRetryTimeMs: null,
    fetchState: 0
};
function c() {
    (u.applicationIdToGuildIds = {}), (u.lastFetchTimeMs = null), (u.nextFetchRetryTimeMs = null), (u.fetchState = 0);
}
function d() {
    u.fetchState = 1;
}
function f(e) {
    let { applicationId: t, guildId: n } = e;
    null == u.applicationIdToGuildIds[t] && (u.applicationIdToGuildIds[t] = new Set()), u.applicationIdToGuildIds[t].add(n), (u.applicationIdToGuildIds[t] = new Set(u.applicationIdToGuildIds[t]));
}
function _(e) {
    let { applicationId: t, guildId: n } = e;
    null != u.applicationIdToGuildIds[t] && (u.applicationIdToGuildIds[t].delete(n), (u.applicationIdToGuildIds[t] = new Set(u.applicationIdToGuildIds[t])));
}
function p(e) {
    let { guildIdToApplicationIds: t } = e;
    for (let e in ((u.fetchState = 2), (u.lastFetchTimeMs = Date.now()), (u.applicationIdToGuildIds = {}), (u.nextFetchRetryTimeMs = null), t))
        for (let n of t[e])
            f({
                applicationId: n,
                guildId: e
            });
}
function h(e) {
    let { retryAfterSeconds: t } = e;
    if (((u.fetchState = 3), null != t)) {
        let e = t * s.Z.Millis.SECOND;
        u.nextFetchRetryTimeMs = Date.now() + e;
    }
}
function m(e) {
    let { application: t, guildId: n } = e;
    null != t &&
        f({
            applicationId: t.id,
            guildId: n
        });
}
function g(e) {
    let { applicationId: t, guildId: n } = e;
    null != t &&
        _({
            applicationId: t,
            guildId: n
        });
}
class E extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) for (let t in ((u.lastFetchTimeMs = e.lastFetchTimeMs), (u.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs), (u.fetchState = e.fetchState), e.applicationIdToGuildIds)) u.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t]);
    }
    getState() {
        return u;
    }
    getGuildIdsForApplication(e) {
        if (null != e) return u.applicationIdToGuildIds[e];
    }
    getLastFetchTimeMs() {
        return u.lastFetchTimeMs;
    }
    getNextFetchRetryTimeMs() {
        return u.nextFetchRetryTimeMs;
    }
    getFetchState() {
        return u.fetchState;
    }
}
o(E, 'displayName', 'MyGuildApplicationsStore'), o(E, 'persistKey', 'MyGuildApplicationsStore');
let v = new E(a.Z, {
    LOGOUT: c,
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: d,
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: p,
    FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: h,
    INTEGRATION_CREATE: m,
    INTEGRATION_DELETE: g
});
