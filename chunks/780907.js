"use strict";
n.d(t, { Ay: () => H, xt: () => B });
var i = n(488428),
    r = n(562708),
    a = n(179771),
    s = n(665260),
    l = n(636537),
    o = n(933681),
    d = n(228366),
    c = n(62583),
    u = n(627363),
    _ = n(587895),
    E = n(306044),
    A = n(626584),
    h = n(113854),
    I = n(207371),
    f = n(953384),
    p = n(952818),
    T = n(773669),
    m = n(134861),
    g = n(760751),
    S = n(189081),
    N = n(340829),
    C = n(174459),
    R = n(738533),
    O = n(723702),
    L = n(499785),
    D = n(308368),
    y = n(59636),
    v = n(912851),
    b = n(652215),
    M = n(360469);
let P = window.GLOBAL_ENV.CDN_HOST;
function U(e, t) {
    return null != P ? `https://${P}${e}` : t;
}
let w = U("/detectables/games.json", b.Rsh.GAMES_DETECTABLE),
    G = U("/detectables/non-games.json", b.Rsh.NON_GAMES_DETECTABLE);
var x = n(375708);
let k = new A.A("GamesActionCreators");
function F(e) {
    let {
        applicationId: t,
        secret: n,
        joinUrl: i,
        channelId: r,
        intent: a = M.W9.PLAY,
        embedded: s = !1,
        source: l,
        locationObject: o,
        analyticsLocations: c,
        preferDeepLink: E = !1,
    } = e;
    if (null != i) {
        try {
            if (i.startsWith("http")) {
                let e = window.open(i, "_blank");
                (null == e || e.closed || void 0 === e.closed) && (window.location.href = i);
            } else window.location.href = i;
        } catch (e) {
            k.warn("Failed to open join URL", { applicationId: t, error: e.message }),
                d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t });
        }
        return Promise.resolve();
    }
    if (E) {
        let e = _.A.getApplication(t);
        if (e?.deepLinkUri != null) {
            let i = e.deepLinkUri.replace(/\/+$/, ""),
                r = `${i}${b.O3O.GAME_INVITE_FRAGMENT}${n}`;
            try {
                if (r.startsWith("http")) {
                    let e = window.open(r, "_blank");
                    (null == e || e.closed || void 0 === e.closed) &&
                        (k.warn("Deep link popup was blocked by browser, trying location.href", { applicationId: t }),
                        (window.location.href = r));
                } else window.location.href = r;
                return Promise.resolve();
            } catch (e) {
                k.warn("Failed to open deep link, falling back to desktop launch", {
                    applicationId: t,
                    error: e.message,
                });
            }
        }
    }
    V({ applicationId: t, channelId: r, embedded: s, source: l, locationObject: o, analyticsLocations: c })
        .then(async (e) => {
            if (0 === e) return null;
            null == _.A.getApplication(t) && (await (0, u.TA)(t));
            let i = _.A.getApplication(t)?.parentId;
            return (
                null != i &&
                    R.A.waitParentConnected(i)
                        .then(() => R.A.waitParentSubscribed(i, b.ZE4.ACTIVITY_JOIN))
                        .then(() => {
                            d.h.dispatch({
                                type: "ACTIVITY_JOIN",
                                applicationId: t,
                                parentApplicationId: i,
                                secret: n,
                                intent: a,
                                embedded: s,
                            });
                        })
                        .catch(() => {}),
                d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: t }),
                R.A.waitConnected(t).then(
                    () => (
                        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: t }),
                        R.A.waitSubscribed(t, b.ZE4.ACTIVITY_JOIN)
                    ),
                )
            );
        })
        .then(() => {
            d.h.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                parentApplicationId: null,
                secret: n,
                intent: a,
                embedded: s,
            });
        })
        .catch(() => d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t }));
}
async function V(e) {
    let {
        applicationId: t,
        branchId: n,
        channelId: r,
        embedded: s = !1,
        source: o,
        locationObject: u = {},
        analyticsLocations: E = [],
    } = e;
    if (s) {
        let e = _.A.getApplication(t);
        return null != e && (0, I.x)(e)
            ? (await h.A.launchFrame({ applicationId: t }), 0)
            : (await (0, c.A)({
                    applicationId: t,
                    activityChannelId: r ?? void 0,
                    source: o,
                    locationObject: u,
                    analyticsLocations: E,
                }))
              ? 0
              : Promise.resolve();
    }
    if (m.A.isConnected(t)) return Promise.resolve();
    let A = null;
    if (null == n) {
        let e = S.A.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (N.A.isLaunchable(t, n)) {
        let e = N.A.getState(t, n),
            r = S.A.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error("Missing dispatch game when launching");
        let s = S.A.getLibraryApplication(t, n);
        if (null == s) throw Error("Missing library application when launching");
        A = l.Bo.post({
            url: b.Rsh.OAUTH2_AUTHORIZE,
            query: { client_id: t, response_type: "token", scope: [a.F.IDENTIFY].join(" ") },
            retries: 3,
            body: { authorize: !0 },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(
                (e) => {
                    let t = e.body.location.split(/#|\?/),
                        n = i.parse(t[t.length - 1]);
                    if ("invalid_request" === n.error) return null;
                    if (null != n.error)
                        throw Error(`OAuth2 Error: ${n.error}: ${n.error_description ?? "unknown error"}`);
                    return n.access_token;
                },
                (e) => {
                    if (404 === e.status) return null;
                    throw e;
                },
            )
            .then((t) => R.A.launchDispatchApplication(e, t, T.default.locale, s.getBranchName(), r));
    } else {
        let e = _.A.getApplication(t);
        A = null != e ? R.A.launch(e) : R.A.launchGame(t);
    }
    let f = Error("game not found");
    return null != A
        ? (d.h.dispatch({ type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE", applicationId: t, branchId: n }),
          d.h.dispatch({ type: "GAME_LAUNCH_START", applicationId: t }),
          A.then((e) => {
              d.h.dispatch({ type: "GAME_LAUNCH_SUCCESS", applicationId: t, pids: e });
          }).catch((e) => {
              v.A.show(b.kqX.LAUNCH_GAME_FAILURE, x.intl.string(x.t.YZEBdj)),
                  d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: f });
          }))
        : (d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: f }), Promise.reject(f));
}
function B(e) {
    d.h.dispatch({ type: "RUNNING_GAME_SET_DEBUG_GAME", game: e });
}
let H = {
    addGame(e, t) {
        d.h.dispatch({ type: "RUNNING_GAME_ADD_OVERRIDE", pid: e }),
            C.default.track(b.HAw.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t, n) {
        let i = (0, p.Zh)(e),
            r = g.A.findGame(i);
        if (null != r) {
            let e = S.A.getActiveLibraryApplication(r.id);
            if (null != e) {
                let i = e.getFlags(),
                    r = s.Lt(i, b.hM6.OVERLAY_DISABLED);
                t && r !== t && (i = s.PQ(i, b.hM6.OVERLAY_DISABLED));
                let a = s.Lt(i, b.hM6.OVERLAY_V3_DISABLED);
                null != n && n !== a && (i = s.PQ(i, b.hM6.OVERLAY_V3_DISABLED)), y.V(e.id, e.branchId, i);
                return;
            }
        }
        d.h.dispatch({
            type: "RUNNING_GAME_TOGGLE_OVERLAY",
            game: i,
            newLegacyOverlayEnabledValue: t,
            newOverlayV3EnabledValue: n,
        });
    },
    toggleDetection(e) {
        d.h.dispatch({ type: "RUNNING_GAME_TOGGLE_DETECTION", game: e });
    },
    editName(e, t) {
        d.h.dispatch({ type: "RUNNING_GAME_EDIT_NAME", game: e, newName: t });
    },
    identifyGame: (e, t) =>
        (0, E.A)().then(
            (t) =>
                new Promise((n, i) => {
                    null == t
                        ? i(Error("Game utils module not loaded"))
                        : t.identifyGame(e, (t, r) => {
                              (k.log("Identified game: ", {
                                  status: t,
                                  name: r.name,
                                  iconHash: r.iconHash,
                                  sku: r.sku,
                                  executableName: r.executableName,
                                  distributor: r.distributor,
                                  publisher: r.publisher,
                              }),
                              0 !== t)
                                  ? i(Error(`Error ${t} when fetching info on ${e}`))
                                  : null == r.icon || "" === r.icon || null == r.name || "" === r.name
                                    ? i(Error(`Did not find data on ${e}`))
                                    : (d.h.dispatch({
                                          type: "GAME_ICON_UPDATE",
                                          gameName: r.name,
                                          icon: `data:image/png;base64,${r.icon}`,
                                      }),
                                      n(r));
                          });
                }),
        ),
    getDetectableGames() {
        if (!g.A.canFetchDetectableGames()) return;
        let e = g.A.detectableGamesEtag;
        d.h.wait(() => {
            d.h.dispatch({ type: "GAMES_DATABASE_FETCH" }),
                L.A.get({
                    url: w,
                    headers: { "If-None-Match": e },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: r.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (t) => (0, o.e0)({ sent_etag: e, received_etag: t?.headers?.etag }),
                    },
                    rejectWithError: !1,
                }).then(
                    (e) => {
                        let {
                            body: t,
                            headers: { etag: n },
                        } = e;
                        d.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: t, etag: n });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? d.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: [], etag: g.A.detectableGamesEtag })
                            : d.h.dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    getDetectableBlocklist() {
        if (!g.A.canFetchExecutableBlocklist()) return;
        let e = g.A.blocklistEtag;
        d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH" }),
            l.Bo.get({
                url: b.Rsh.GAMES_BLOCKLIST,
                headers: { "If-None-Match": e },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(
                (e) => {
                    let {
                        body: t,
                        headers: { etag: n },
                    } = e;
                    d.h.dispatch({
                        type: "GAMES_BLOCKLIST_UPDATE",
                        executables: t.executables ?? [],
                        patterns: t.patterns ?? [],
                        etag: n,
                    });
                },
                (e) => {
                    let { status: t } = e;
                    304 === t
                        ? d.h.dispatch({
                              type: "GAMES_BLOCKLIST_UPDATE",
                              executables: [],
                              patterns: [],
                              etag: g.A.blocklistEtag,
                          })
                        : (k.error("Failed to fetch games blocklist"),
                          d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" }));
                },
            );
    },
    getDetectableNonGames() {
        if (!f.A.canFetch()) return;
        let e = f.A.etag;
        d.h.wait(() => {
            d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
                L.A.get({
                    url: G,
                    headers: { "If-None-Match": e },
                    retries: 1,
                    trackedActionData: {
                        event: r.NetworkActionNames.DETECTABLE_NON_GAMES_FETCH,
                        properties: (t) => (0, o.e0)({ sent_etag: e, received_etag: t?.headers?.etag }),
                    },
                    rejectWithError: !1,
                }).then(
                    (e) => {
                        let {
                            body: t,
                            headers: { etag: n },
                        } = e;
                        d.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: t, etag: n });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? d.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: [], etag: f.A.etag })
                            : d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: i, distributor: r, sku: a, executableName: s } = e,
            o = (0, E.v)(s);
        (k.log("Reporting unverified game: ", {
            name: t,
            executableName: s,
            iconHash: n,
            publisher: i,
            distributor: r,
            sku: a,
            cleanedExecutable: o,
        }),
        null != o) &&
            l.Bo.post({
                url: b.Rsh.UNVERIFIED_APPLICATIONS,
                body: {
                    name: t,
                    os: (0, O.getPlatformName)(),
                    icon: n,
                    distributor_application: null == r || "" === r ? null : { distributor: r, sku: a },
                    executable: o,
                    publisher: i,
                    report_version: 3,
                },
                retries: 1,
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then((e) => {
                let {
                    body: { name: t, hash: n, missing_data: i },
                } = e;
                d.h.dispatch({ type: "UNVERIFIED_GAME_UPDATE", name: t, hash: n, missingData: i });
            });
    },
    uploadIcon(e, t, n) {
        l.Bo.post({
            url: b.Rsh.UNVERIFIED_APPLICATIONS_ICONS,
            body: { application_name: e, application_hash: t, icon: n },
            retries: 1,
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    },
    deleteEntry(e) {
        d.h.dispatch({ type: "RUNNING_GAME_DELETE_ENTRY", game: e });
    },
    launch: V,
    async join(e) {
        let {
            userId: t,
            sessionId: n,
            applicationId: i,
            channelId: r,
            messageId: a,
            intent: s = M.W9.PLAY,
            embedded: l = !1,
            source: o,
            locationObject: c,
            analyticsLocations: u,
            remotePartyId: _,
        } = e;
        if (__OVERLAY__)
            return (
                d.h.dispatch({
                    type: "OVERLAY_JOIN_GAME",
                    userId: t,
                    sessionId: n,
                    applicationId: i,
                    channelId: r,
                    messageId: a,
                }),
                Promise.resolve(!0)
            );
        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: i, remotePartyId: _ });
        try {
            let e = (0, O.platformPrefersDeepLink)(),
                { secret: d, joinUrl: E } = await D.A.getJoinSecret(t, n, i, r, a);
            return (
                null == _ &&
                    F({
                        applicationId: i,
                        secret: d,
                        joinUrl: E,
                        channelId: r,
                        intent: s,
                        embedded: l,
                        source: o,
                        locationObject: c,
                        analyticsLocations: u,
                        preferDeepLink: e,
                    }),
                !0
            );
        } catch (e) {
            return d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: i }), !1;
        }
    },
    joinWithSecret: F,
};
