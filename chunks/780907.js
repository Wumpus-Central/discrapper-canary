"use strict";
n.d(t, { Ay: () => H, xt: () => B });
var i = n(488428),
    r = n(562708),
    s = n(179771),
    a = n(665260),
    o = n(636537),
    l = n(933681),
    u = n(228366),
    c = n(62583),
    d = n(627363),
    _ = n(587895),
    f = n(306044),
    h = n(626584),
    p = n(113854),
    E = n(375802),
    m = n(953384),
    g = n(952818),
    A = n(773669),
    I = n(134861),
    T = n(760751),
    S = n(189081),
    N = n(340829),
    y = n(174459),
    C = n(738533),
    v = n(723702),
    O = n(499785),
    R = n(308368),
    b = n(59636),
    D = n(912851),
    L = n(652215),
    w = n(360469);
let M = window.GLOBAL_ENV.CDN_HOST;
function P(e, t) {
    return null != M ? `https://${M}${e}` : t;
}
let x = P("/detectables/games.json", L.Rsh.GAMES_DETECTABLE),
    U = P("/detectables/non-games.json", L.Rsh.NON_GAMES_DETECTABLE);
var k = n(375708);
let G = new h.A("GamesActionCreators");
function F(e) {
    let {
        applicationId: t,
        secret: n,
        joinUrl: i,
        channelId: r,
        intent: s = w.W9.PLAY,
        embedded: a = !1,
        source: o,
        locationObject: l,
        analyticsLocations: c,
        preferDeepLink: f = !1,
    } = e;
    if (null != i) {
        try {
            if (i.startsWith("http")) {
                let e = window.open(i, "_blank");
                (null == e || e.closed || void 0 === e.closed) && (window.location.href = i);
            } else window.location.href = i;
        } catch (e) {
            G.warn("Failed to open join URL", { applicationId: t, error: e.message }),
                u.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t });
        }
        return Promise.resolve();
    }
    if (f) {
        let e = _.A.getApplication(t);
        if (e?.deepLinkUri != null) {
            let i = e.deepLinkUri.replace(/\/+$/, ""),
                r = `${i}${L.O3O.GAME_INVITE_FRAGMENT}${n}`;
            try {
                if (r.startsWith("http")) {
                    let e = window.open(r, "_blank");
                    (null == e || e.closed || void 0 === e.closed) &&
                        (G.warn("Deep link popup was blocked by browser, trying location.href", { applicationId: t }),
                        (window.location.href = r));
                } else window.location.href = r;
                return Promise.resolve();
            } catch (e) {
                G.warn("Failed to open deep link, falling back to desktop launch", {
                    applicationId: t,
                    error: e.message,
                });
            }
        }
    }
    V({ applicationId: t, channelId: r, embedded: a, source: o, locationObject: l, analyticsLocations: c })
        .then(async (e) => {
            if (0 === e) return null;
            null == _.A.getApplication(t) && (await (0, d.TA)(t));
            let i = _.A.getApplication(t)?.parentId;
            return (
                null != i &&
                    C.A.waitParentConnected(i)
                        .then(() => C.A.waitParentSubscribed(i, L.ZE4.ACTIVITY_JOIN))
                        .then(() => {
                            u.h.dispatch({
                                type: "ACTIVITY_JOIN",
                                applicationId: t,
                                parentApplicationId: i,
                                secret: n,
                                intent: s,
                                embedded: a,
                            });
                        })
                        .catch(() => {}),
                u.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: t }),
                C.A.waitConnected(t).then(
                    () => (
                        u.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: t }),
                        C.A.waitSubscribed(t, L.ZE4.ACTIVITY_JOIN)
                    ),
                )
            );
        })
        .then(() => {
            u.h.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                parentApplicationId: null,
                secret: n,
                intent: s,
                embedded: a,
            });
        })
        .catch(() => u.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t }));
}
async function V(e) {
    let {
        applicationId: t,
        branchId: n,
        channelId: r,
        embedded: a = !1,
        source: l,
        locationObject: d = {},
        analyticsLocations: f = [],
    } = e;
    if (a) {
        let e = _.A.getApplication(t);
        return null != e && (0, E.x)(e)
            ? (await p.A.launchFrame({ applicationId: t }), 0)
            : (await (0, c.A)({
                    applicationId: t,
                    activityChannelId: r ?? void 0,
                    source: l,
                    locationObject: d,
                    analyticsLocations: f,
                }))
              ? 0
              : Promise.resolve();
    }
    if (I.A.isConnected(t)) return Promise.resolve();
    let h = null;
    if (null == n) {
        let e = S.A.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (N.A.isLaunchable(t, n)) {
        let e = N.A.getState(t, n),
            r = S.A.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error("Missing dispatch game when launching");
        let a = S.A.getLibraryApplication(t, n);
        if (null == a) throw Error("Missing library application when launching");
        h = o.Bo.post({
            url: L.Rsh.OAUTH2_AUTHORIZE,
            query: { client_id: t, response_type: "token", scope: [s.F.IDENTIFY].join(" ") },
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
            .then((t) => C.A.launchDispatchApplication(e, t, A.default.locale, a.getBranchName(), r));
    } else {
        let e = _.A.getApplication(t);
        h = null != e ? C.A.launch(e) : C.A.launchGame(t);
    }
    let m = Error("game not found");
    return null != h
        ? (u.h.dispatch({ type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE", applicationId: t, branchId: n }),
          u.h.dispatch({ type: "GAME_LAUNCH_START", applicationId: t }),
          h
              .then((e) => {
                  u.h.dispatch({ type: "GAME_LAUNCH_SUCCESS", applicationId: t, pids: e });
              })
              .catch((e) => {
                  D.A.show(L.kqX.LAUNCH_GAME_FAILURE, k.intl.string(k.t.YZEBdj)),
                      u.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: m });
              }))
        : (u.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: m }), Promise.reject(m));
}
function B(e) {
    u.h.dispatch({ type: "RUNNING_GAME_SET_DEBUG_GAME", game: e });
}
let H = {
    addGame(e, t) {
        u.h.dispatch({ type: "RUNNING_GAME_ADD_OVERRIDE", pid: e }),
            y.default.track(L.HAw.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t, n) {
        let i = (0, g.Zh)(e),
            r = T.A.findGame(i);
        if (null != r) {
            let e = S.A.getActiveLibraryApplication(r.id);
            if (null != e) {
                let i = e.getFlags(),
                    r = a.Lt(i, L.hM6.OVERLAY_DISABLED);
                t && r !== t && (i = a.PQ(i, L.hM6.OVERLAY_DISABLED));
                let s = a.Lt(i, L.hM6.OVERLAY_V3_DISABLED);
                null != n && n !== s && (i = a.PQ(i, L.hM6.OVERLAY_V3_DISABLED)), b.V(e.id, e.branchId, i);
                return;
            }
        }
        u.h.dispatch({
            type: "RUNNING_GAME_TOGGLE_OVERLAY",
            game: i,
            newLegacyOverlayEnabledValue: t,
            newOverlayV3EnabledValue: n,
        });
    },
    toggleDetection(e) {
        u.h.dispatch({ type: "RUNNING_GAME_TOGGLE_DETECTION", game: e });
    },
    editName(e, t) {
        u.h.dispatch({ type: "RUNNING_GAME_EDIT_NAME", game: e, newName: t });
    },
    identifyGame: (e, t) =>
        (0, f.A)().then(
            (t) =>
                new Promise((n, i) => {
                    null == t
                        ? i(Error("Game utils module not loaded"))
                        : t.identifyGame(e, (t, r) => {
                              (G.log("Identified game: ", {
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
                                    : (u.h.dispatch({
                                          type: "GAME_ICON_UPDATE",
                                          gameName: r.name,
                                          icon: `data:image/png;base64,${r.icon}`,
                                      }),
                                      n(r));
                          });
                }),
        ),
    getDetectableGames() {
        if (!T.A.canFetchDetectableGames()) return;
        let e = T.A.detectableGamesEtag;
        u.h.wait(() => {
            u.h.dispatch({ type: "GAMES_DATABASE_FETCH" }),
                O.A.get({
                    url: x,
                    headers: { "If-None-Match": e },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: r.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (t) => (0, l.e0)({ sent_etag: e, received_etag: t?.headers?.etag }),
                    },
                    rejectWithError: !1,
                }).then(
                    (e) => {
                        let {
                            body: t,
                            headers: { etag: n },
                        } = e;
                        u.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: t, etag: n });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? u.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: [], etag: T.A.detectableGamesEtag })
                            : u.h.dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    getDetectableBlocklist() {
        if (!T.A.canFetchExecutableBlocklist()) return;
        let e = T.A.blocklistEtag;
        u.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH" }),
            o.Bo.get({
                url: L.Rsh.GAMES_BLOCKLIST,
                headers: { "If-None-Match": e },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(
                (e) => {
                    let {
                        body: t,
                        headers: { etag: n },
                    } = e;
                    u.h.dispatch({
                        type: "GAMES_BLOCKLIST_UPDATE",
                        executables: t.executables ?? [],
                        patterns: t.patterns ?? [],
                        etag: n,
                    });
                },
                (e) => {
                    let { status: t } = e;
                    304 === t
                        ? u.h.dispatch({
                              type: "GAMES_BLOCKLIST_UPDATE",
                              executables: [],
                              patterns: [],
                              etag: T.A.blocklistEtag,
                          })
                        : (G.error("Failed to fetch games blocklist"),
                          u.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" }));
                },
            );
    },
    getDetectableNonGames() {
        if (!m.A.canFetch()) return;
        let e = m.A.etag;
        u.h.wait(() => {
            u.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
                O.A.get({
                    url: U,
                    headers: { "If-None-Match": e },
                    retries: 1,
                    trackedActionData: {
                        event: r.NetworkActionNames.DETECTABLE_NON_GAMES_FETCH,
                        properties: (t) => (0, l.e0)({ sent_etag: e, received_etag: t?.headers?.etag }),
                    },
                    rejectWithError: !1,
                }).then(
                    (e) => {
                        let {
                            body: t,
                            headers: { etag: n },
                        } = e;
                        u.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: t, etag: n });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? u.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: [], etag: m.A.etag })
                            : u.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: i, distributor: r, sku: s, executableName: a } = e,
            l = (0, f.v)(a);
        (G.log("Reporting unverified game: ", {
            name: t,
            executableName: a,
            iconHash: n,
            publisher: i,
            distributor: r,
            sku: s,
            cleanedExecutable: l,
        }),
        null != l) &&
            o.Bo.post({
                url: L.Rsh.UNVERIFIED_APPLICATIONS,
                body: {
                    name: t,
                    os: (0, v.getPlatformName)(),
                    icon: n,
                    distributor_application: null == r || "" === r ? null : { distributor: r, sku: s },
                    executable: l,
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
                u.h.dispatch({ type: "UNVERIFIED_GAME_UPDATE", name: t, hash: n, missingData: i });
            });
    },
    uploadIcon(e, t, n) {
        o.Bo.post({
            url: L.Rsh.UNVERIFIED_APPLICATIONS_ICONS,
            body: { application_name: e, application_hash: t, icon: n },
            retries: 1,
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    },
    deleteEntry(e) {
        u.h.dispatch({ type: "RUNNING_GAME_DELETE_ENTRY", game: e });
    },
    launch: V,
    async join(e) {
        let {
            userId: t,
            sessionId: n,
            applicationId: i,
            channelId: r,
            messageId: s,
            intent: a = w.W9.PLAY,
            embedded: o = !1,
            source: l,
            locationObject: c,
            analyticsLocations: d,
            remotePartyId: _,
        } = e;
        if (__OVERLAY__)
            return (
                u.h.dispatch({
                    type: "OVERLAY_JOIN_GAME",
                    userId: t,
                    sessionId: n,
                    applicationId: i,
                    channelId: r,
                    messageId: s,
                }),
                Promise.resolve(!0)
            );
        u.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: i, remotePartyId: _ });
        try {
            let e = (0, v.platformPrefersDeepLink)(),
                { secret: u, joinUrl: f } = await R.A.getJoinSecret(t, n, i, r, s);
            return (
                null == _ &&
                    F({
                        applicationId: i,
                        secret: u,
                        joinUrl: f,
                        channelId: r,
                        intent: a,
                        embedded: o,
                        source: l,
                        locationObject: c,
                        analyticsLocations: d,
                        preferDeepLink: e,
                    }),
                !0
            );
        } catch (e) {
            return u.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: i }), !1;
        }
    },
    joinWithSecret: F,
};
