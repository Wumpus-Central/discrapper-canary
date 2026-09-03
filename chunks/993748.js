n.d(t, { $P: () => R, An: () => L, xZ: () => O, Di: () => N, bW: () => C, eP: () => S, wD: () => y });
var i,
    r = n(158390),
    a = n(724002),
    s = (((i = {})[(i.IOS = 1)] = "IOS"), (i[(i.ANDROID = 2)] = "ANDROID"), (i[(i.WEB = 4)] = "WEB"), i),
    l = n(287174),
    o = n(994369),
    d = n(636537),
    c = n(228366);
n(865116);
var u = n(773669),
    _ = n(111162),
    E = n(723702),
    A = n(212534),
    h = n(38181),
    I = n(111042),
    f = n(651753),
    p = n(82293),
    T = n(680646),
    m = n(652215);
let g = new Map();
async function S(e) {
    let t = Date.now(),
        n = g.get(e) ?? 0;
    if (A.A.getApplicationFetchState(e) === A.e.FETCHING || A.A.isInvalidApplication(e) || t < n + 6e5) return;
    g.set(e, t), c.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: e });
    let i = new r.A(1e3, 5e3),
        a = (e, t) =>
            429 === e.status &&
            i.fails < 10 &&
            (i.fail(() => {
                t(void 0, a);
            }),
            !0);
    try {
        let t = (
            await d.Bo.get({
                url: m.Rsh.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: i,
                retries: 10,
                interceptResponse: a,
                rejectWithError: (0, d.fT)(),
            })
        ).body;
        c.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: t });
    } catch (t) {
        c.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
            applicationId: e,
            isInvalidApplication: !0,
        });
    }
}
async function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = Date.now(),
        i = A.A.getApplicationFetchState(e),
        r = A.A.getApplicationLastFetchTime(e),
        { dontRefetchMs: a, noCache: s } = t;
    if (i !== A.e.FETCHING && !(null != r && r + (a ?? 6e5) > n)) {
        c.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: e });
        try {
            let t = await d.Bo.get({
                url: m.Rsh.APPLICATION_DIRECTORY_APPLICATION(e),
                query: { locale: u.default.locale, nocache: s },
                rejectWithError: !0,
            });
            c.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS", application: t.body });
        } catch (t) {
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                applicationId: e,
                isInvalidApplication: !0,
            });
        }
    }
}
async function C() {
    let e = Date.now(),
        t = h.A.getLastFetchTimeMs();
    if (null != t && t + 6e5 > e) return;
    let n = await d.Bo.get({
        url: m.Rsh.APPLICATION_DIRECTORY_CATEGORIES,
        query: { locale: u.default.locale },
        rejectWithError: (0, d.fT)(),
    });
    c.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS", categories: n.body });
}
async function O(e) {
    let { applicationId: t, guildId: n, options: i } = e,
        { page: r } = i ?? {},
        a = Date.now(),
        s = p.A.getFetchState({ applicationId: t, guildId: n }),
        { lastFetchTimeMs: l } = p.A.getSimilarApplications({ applicationId: t, guildId: n }) ?? {};
    if (s !== p.e.FETCHING && (null == l || !(l + 6e5 > a))) {
        c.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
            applicationId: t,
            guildId: n,
            page: r,
        });
        try {
            let e = await d.Bo.get({
                url: m.Rsh.APPLICATION_DIRECTORY_SIMILAR(t),
                query: { guild_id: n, page: r, locale: u.default.locale },
                rejectWithError: !0,
            });
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                applicationId: t,
                guildId: n,
                similarApplications: e.body.applications,
                loadId: e.body.load_id,
                page: r,
                totalPages: e.body.num_pages,
            });
        } catch (e) {
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                applicationId: t,
                guildId: n,
                page: r,
            });
        }
    }
}
async function R(e) {
    let { query: t, guildId: n, options: i, onSuccessCallback: r } = e,
        {
            page: a,
            pageSize: s,
            categoryId: l,
            integrationType: _,
            minUserInstallCommandCount: E,
            excludeAppsWithCustomInstallUrl: A,
            excludeNonEmbeddedApps: h,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
            source: p = o.V.APP_DIRECTORY,
        } = i ?? {},
        T = Date.now(),
        g = f.A.getFetchState({ query: t, guildId: n, page: a, pageSize: s, categoryId: l, integrationType: _ }),
        { lastFetchTimeMs: S } =
            f.A.getSearchResults({ query: t, guildId: n, page: a, pageSize: s, categoryId: l, integrationType: _ }) ??
            {};
    if (g !== f.e.FETCHING && (null == S || !(S + 6e5 > T))) {
        c.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
            query: t,
            guildId: n,
            page: a,
            pageSize: s,
            categoryId: l,
            integrationType: _,
            minUserInstallCommandCount: E,
            excludeAppsWithCustomInstallUrl: A,
            excludeNonEmbeddedApps: h,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
            source: p,
        });
        try {
            let e = await d.Bo.get({
                url: m.Rsh.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: t,
                    guild_id: n,
                    page: a,
                    page_size: s,
                    category_id: l,
                    locale: u.default.locale,
                    integration_type: _,
                    min_user_install_command_count: E,
                    exclude_apps_with_custom_install_url: A,
                    exclude_non_embedded_apps: h,
                    exclude_embedded_apps_without_primary_entry_point_app_command: I,
                    source: p,
                },
                rejectWithError: !0,
            });
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                query: t,
                guildId: n,
                page: a,
                pageSize: s,
                categoryId: l,
                integrationType: _,
                result: {
                    results: e.body.results,
                    countsByCategory: e.body.counts_by_category,
                    totalCount: e.body.result_count,
                    totalPages: e.body.num_pages,
                    type: e.body.type,
                    loadId: e.body.load_id,
                },
                minUserInstallCommandCount: E,
                excludeAppsWithCustomInstallUrl: A,
                excludeNonEmbeddedApps: h,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
                source: p,
            }),
                r?.(e.body.result_count);
        } catch (e) {
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                query: t,
                guildId: n,
                page: a,
                pageSize: s,
                categoryId: l,
                integrationType: _,
                minUserInstallCommandCount: E,
                excludeAppsWithCustomInstallUrl: A,
                excludeNonEmbeddedApps: h,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
                source: p,
            });
        }
    }
}
async function L() {
    let { surface: e = l.K.APPLICATION_DIRECTORY, activeState: t = a.W.ACTIVE } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = _.default.disableAppCollectionsCache,
        i = Date.now(),
        r = I.A.getFetchState({ surface: e, activeState: t }),
        o = I.A.getLastFetchTimeMs({ surface: e, activeState: t });
    if (r === I.e.FETCHING) return;
    let A = !n && t === a.W.ACTIVE;
    if (!A || null == o || !(o + 6e5 > i)) {
        c.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS", surface: e, activeState: t });
        try {
            let n = await d.Bo.get({
                url: m.Rsh.APPLICATION_DIRECTORY_COLLECTIONS,
                query: {
                    surface: e,
                    active_state: t,
                    platform: (0, E.isAndroid)() ? s.ANDROID : (0, E.isIOS)() ? s.IOS : s.WEB,
                    locale: u.default.locale,
                    cache: A,
                },
                rejectWithError: !0,
            });
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
                collections: n.body,
                surface: e,
                activeState: t,
            });
        } catch (n) {
            c.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE", surface: e, activeState: t });
        }
    }
}
async function y() {
    let e = Date.now(),
        t = T.A.getFetchState(),
        n = T.A.getLastFetchTimeMs(),
        i = T.A.getNextFetchRetryTimeMs();
    if (t !== T.e.FETCHING && (null == n || !(n + 864e5 > e)) && (null == i || !(e < i))) {
        c.h.dispatch({ type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS" });
        try {
            let e = await d.Bo.get({
                url: m.Rsh.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS,
                rejectWithError: (0, d.fT)(),
            });
            c.h.dispatch({
                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
                guildIdToApplicationIds: e.body,
            });
        } catch (t) {
            let e = t?.status === 429;
            c.h.dispatch({
                type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
                retryAfterSeconds: e ? t?.body?.retry_after : void 0,
            });
        }
    }
}
