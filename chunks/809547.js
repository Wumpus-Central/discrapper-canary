n.d(t, {
    M: () => d,
    Z: () => v
});
var i,
    r = n(31775),
    a = n.n(r),
    s = n(288385),
    o = n(442837),
    l = n(570140);
function u(e, t, n) {
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
let c = 20;
var d = (function (e) {
    return (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR'), e;
})({});
function f(e) {
    let { query: t, guildId: n, page: i, pageSize: r, categoryId: a, integrationType: o, minUserInstallCommandCount: l, excludeAppsWithCustomInstallUrl: u, excludeNonEmbeddedApps: c, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d, source: f = s.F.APP_DIRECTORY } = e;
    return "query:'".concat(t, "' guildId:").concat(n, ' page:').concat(i, ' pageSize:').concat(r, ' categoryId:').concat(a, ' integrationType:').concat(o, ' minUserInstallCommandCount:').concat(l, ' excludeAppsWithCustomInstallUrl:').concat(u, ' excludeNonEmbeddedApps:').concat(c, ' excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:').concat(d, ' source:').concat(f);
}
let _ = new (a())({ max: c }),
    p = {};
function h(e) {
    let { query: t, guildId: n, page: i, pageSize: r, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e,
        _ = f({
            query: t,
            guildId: n,
            page: i,
            pageSize: r,
            categoryId: a,
            integrationType: s,
            minUserInstallCommandCount: o,
            excludeAppsWithCustomInstallUrl: l,
            excludeNonEmbeddedApps: u,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
            source: d
        });
    p = {
        ...p,
        [_]: 0
    };
}
function m(e) {
    let { query: t, guildId: n, page: i, pageSize: r, categoryId: a, result: s, integrationType: o, minUserInstallCommandCount: l, excludeAppsWithCustomInstallUrl: u, excludeNonEmbeddedApps: c, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d, source: h } = e,
        m = f({
            query: t,
            guildId: n,
            page: i,
            pageSize: r,
            categoryId: a,
            integrationType: o,
            minUserInstallCommandCount: l,
            excludeAppsWithCustomInstallUrl: u,
            excludeNonEmbeddedApps: c,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
            source: h
        });
    _.set(m, {
        lastFetchTimeMs: Date.now(),
        ...s
    }),
        (p = {
            ...p,
            [m]: 1
        });
}
function g(e) {
    let { query: t, guildId: n, page: i, pageSize: r, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e,
        _ = f({
            query: t,
            guildId: n,
            page: i,
            pageSize: r,
            categoryId: a,
            integrationType: s,
            minUserInstallCommandCount: o,
            excludeAppsWithCustomInstallUrl: l,
            excludeNonEmbeddedApps: u,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
            source: d
        });
    p = {
        ...p,
        [_]: 2
    };
}
class E extends (i = o.ZP.Store) {
    getSearchResults(e) {
        let { query: t, guildId: n, page: i, pageSize: r, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e,
            p = f({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: d
            });
        return _.get(p);
    }
    getFetchState(e) {
        let { query: t, guildId: n, page: i, pageSize: r, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e;
        return p[
            f({
                query: t,
                guildId: n,
                page: i,
                pageSize: r,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: d
            })
        ];
    }
}
u(E, 'displayName', 'ApplicationDirectorySearchStore');
let v = new E(l.Z, {
    APPLICATION_DIRECTORY_FETCH_SEARCH: h,
    APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: m,
    APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: g
});
