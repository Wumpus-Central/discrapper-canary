"use strict";
n.d(t, { $P: () => v, An: () => O, xZ: () => C, Di: () => N, bW: () => y, eP: () => S, wD: () => R });
var i,
    r = n(158390),
    s = n(724002),
    a = (((i = {})[(i.IOS = 1)] = "IOS"), (i[(i.ANDROID = 2)] = "ANDROID"), (i[(i.WEB = 4)] = "WEB"), i),
    o = n(287174),
    l = n(994369),
    u = n(636537),
    c = n(228366);
n(865116);
var d = n(773669),
    _ = n(111162),
    f = n(723702),
    h = n(212534),
    p = n(38181),
    E = n(111042),
    m = n(651753),
    g = n(82293),
    A = n(680646),
    I = n(652215);
let T = new Map();
async function S(e) {
    let t = Date.now(),
        n = T.get(e) ?? 0;
    if (h.A.getApplicationFetchState(e) === h.e.FETCHING || h.A.isInvalidApplication(e) || t < n + 6e5) return;
    T.set(e, t), c.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: e });
    let i = new r.A(1e3, 5e3),
        s = (e, t) =>
            429 === e.status &&
            i.fails < 10 &&
            (i.fail(() => {
                t(void 0, s);
            }),
            !0);
    try {
        let t = (
            await u.Bo.get({
                url: I.Rsh.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: i,
                retries: 10,
                interceptResponse: s,
                rejectWithError: !1,
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
        i = h.A.getApplicationFetchState(e),
        r = h.A.getApplicationLastFetchTime(e),
        { dontRefetchMs: s, noCache: a } = t;
    if (i !== h.e.FETCHING && !(null != r && r + (s ?? 6e5) > n)) {
        c.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_APPLICATION", applicationId: e });
        try {
            let t = await u.Bo.get({
                url: I.Rsh.APPLICATION_DIRECTORY_APPLICATION(e),
                query: { locale: d.default.locale, nocache: a },
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
async function y() {
    let e = Date.now(),
        t = p.A.getLastFetchTimeMs();
    if (null != t && t + 6e5 > e) return;
    let n = await u.Bo.get({
        url: I.Rsh.APPLICATION_DIRECTORY_CATEGORIES,
        query: { locale: d.default.locale },
        rejectWithError: !1,
    });
    c.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS", categories: n.body });
}
async function C(e) {
    let { applicationId: t, guildId: n, options: i } = e,
        { page: r } = i ?? {},
        s = Date.now(),
        a = g.A.getFetchState({ applicationId: t, guildId: n }),
        { lastFetchTimeMs: o } = g.A.getSimilarApplications({ applicationId: t, guildId: n }) ?? {};
    if (a !== g.e.FETCHING && (null == o || !(o + 6e5 > s))) {
        c.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
            applicationId: t,
            guildId: n,
            page: r,
        });
        try {
            let e = await u.Bo.get({
                url: I.Rsh.APPLICATION_DIRECTORY_SIMILAR(t),
                query: { guild_id: n, page: r, locale: d.default.locale },
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
async function v(e) {
    let { query: t, guildId: n, options: i, onSuccessCallback: r } = e,
        {
            page: s,
            pageSize: a,
            categoryId: o,
            integrationType: _,
            minUserInstallCommandCount: f,
            excludeAppsWithCustomInstallUrl: h,
            excludeNonEmbeddedApps: p,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
            source: g = l.V.APP_DIRECTORY,
        } = i ?? {},
        A = Date.now(),
        T = m.A.getFetchState({ query: t, guildId: n, page: s, pageSize: a, categoryId: o, integrationType: _ }),
        { lastFetchTimeMs: S } =
            m.A.getSearchResults({ query: t, guildId: n, page: s, pageSize: a, categoryId: o, integrationType: _ }) ??
            {};
    if (T !== m.e.FETCHING && (null == S || !(S + 6e5 > A))) {
        c.h.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
            query: t,
            guildId: n,
            page: s,
            pageSize: a,
            categoryId: o,
            integrationType: _,
            minUserInstallCommandCount: f,
            excludeAppsWithCustomInstallUrl: h,
            excludeNonEmbeddedApps: p,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
            source: g,
        });
        try {
            let e = await u.Bo.get({
                url: I.Rsh.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: t,
                    guild_id: n,
                    page: s,
                    page_size: a,
                    category_id: o,
                    locale: d.default.locale,
                    integration_type: _,
                    min_user_install_command_count: f,
                    exclude_apps_with_custom_install_url: h,
                    exclude_non_embedded_apps: p,
                    exclude_embedded_apps_without_primary_entry_point_app_command: E,
                    source: g,
                },
                rejectWithError: !0,
            });
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                query: t,
                guildId: n,
                page: s,
                pageSize: a,
                categoryId: o,
                integrationType: _,
                result: {
                    results: e.body.results,
                    countsByCategory: e.body.counts_by_category,
                    totalCount: e.body.result_count,
                    totalPages: e.body.num_pages,
                    type: e.body.type,
                    loadId: e.body.load_id,
                },
                minUserInstallCommandCount: f,
                excludeAppsWithCustomInstallUrl: h,
                excludeNonEmbeddedApps: p,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
                source: g,
            }),
                r?.(e.body.result_count);
        } catch (e) {
            c.h.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                query: t,
                guildId: n,
                page: s,
                pageSize: a,
                categoryId: o,
                integrationType: _,
                minUserInstallCommandCount: f,
                excludeAppsWithCustomInstallUrl: h,
                excludeNonEmbeddedApps: p,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: E,
                source: g,
            });
        }
    }
}
async function O() {
    let { surface: e = o.K.APPLICATION_DIRECTORY, activeState: t = s.W.ACTIVE } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = _.default.disableAppCollectionsCache,
        i = Date.now(),
        r = E.A.getFetchState({ surface: e, activeState: t }),
        l = E.A.getLastFetchTimeMs({ surface: e, activeState: t });
    if (r === E.e.FETCHING) return;
    let h = !n && t === s.W.ACTIVE;
    if (!h || null == l || !(l + 6e5 > i)) {
        c.h.dispatch({ type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS", surface: e, activeState: t });
        try {
            let n = await u.Bo.get({
                url: I.Rsh.APPLICATION_DIRECTORY_COLLECTIONS,
                query: {
                    surface: e,
                    active_state: t,
                    platform: (0, f.isAndroid)() ? a.ANDROID : (0, f.isIOS)() ? a.IOS : a.WEB,
                    locale: d.default.locale,
                    cache: h,
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
async function R() {
    let e = Date.now(),
        t = A.A.getFetchState(),
        n = A.A.getLastFetchTimeMs(),
        i = A.A.getNextFetchRetryTimeMs();
    if (t !== A.e.FETCHING && (null == n || !(n + 864e5 > e)) && (null == i || !(e < i))) {
        c.h.dispatch({ type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS" });
        try {
            let e = await u.Bo.get({ url: I.Rsh.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS, rejectWithError: !1 });
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
