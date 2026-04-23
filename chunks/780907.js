"use strict";
n.d(t, { Ay: () => H, xt: () => B });
var i = n(488428),
    r = n(110259),
    s = n(179771),
    a = n(665260),
    o = n(636537),
    l = n(933681),
    d = n(228366),
    _ = n(62583),
    u = n(627363),
    c = n(587895),
    E = n(306044),
    h = n(626584),
    m = n(625180),
    f = n(375802),
    g = n(953384),
    p = n(328153),
    A = n(773669),
    I = n(134861),
    T = n(760751),
    S = n(189081),
    N = n(340829),
    C = n(954571),
    R = n(738533),
    O = n(723702),
    y = n(499785),
    v = n(308368),
    D = n(59636),
    L = n(912851),
    b = n(652215),
    w = n(360469);
let P = window.GLOBAL_ENV.CDN_HOST;
function k(e, t) {
    return null != P ? `https://${P}${e}` : t;
}
let M = k("/detectables/games.json", b.Rsh.GAMES_DETECTABLE),
    U = k("/detectables/non-games.json", b.Rsh.NON_GAMES_DETECTABLE);
var x = n(985018);
let G = new h.A("GamesActionCreators");
function V(e) {
    let {
        applicationId: t,
        secret: n,
        channelId: i,
        intent: r = w.W9.PLAY,
        embedded: s = !1,
        source: a,
        locationObject: o,
        analyticsLocations: l,
        preferDeepLink: _ = !1,
    } = e;
    if (_) {
        let e = c.A.getApplication(t);
        if (e?.deepLinkUri != null) {
            let i = e.deepLinkUri.replace(/\/+$/, ""),
                r = `${i}${b.O3O.GAME_INVITE_FRAGMENT}${n}`;
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
    F({ applicationId: t, channelId: i, embedded: s, source: a, locationObject: o, analyticsLocations: l })
        .then(async (e) => {
            if (0 === e) return null;
            null == c.A.getApplication(t) && (await (0, u.TA)(t));
            let i = c.A.getApplication(t)?.parentId;
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
                                intent: r,
                                embedded: s,
                            });
                        })
                        .catch(() => {}),
                R.A.waitConnected(t).then(() => R.A.waitSubscribed(t, b.ZE4.ACTIVITY_JOIN))
            );
        })
        .then(() => {
            d.h.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                parentApplicationId: null,
                secret: n,
                intent: r,
                embedded: s,
            });
        })
        .catch(() => d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t }));
}
async function F(e) {
    let {
        applicationId: t,
        branchId: n,
        channelId: r,
        embedded: a = !1,
        source: l,
        locationObject: u = {},
        analyticsLocations: E = [],
    } = e;
    if (a) {
        let e = c.A.getApplication(t);
        return null != e && (0, f.x)(e)
            ? (await m.A.launchFrame({ applicationId: t }), 0)
            : (await (0, _.A)({
                    applicationId: t,
                    activityChannelId: r ?? void 0,
                    source: l,
                    locationObject: u,
                    analyticsLocations: E,
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
            url: b.Rsh.OAUTH2_AUTHORIZE,
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
            .then((t) => R.A.launchDispatchApplication(e, t, A.default.locale, a.getBranchName(), r));
    } else {
        let e = c.A.getApplication(t);
        h = null != e ? R.A.launch(e) : R.A.launchGame(t);
    }
    let g = Error("game not found");
    return null != h
        ? (d.h.dispatch({ type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE", applicationId: t, branchId: n }),
          d.h.dispatch({ type: "GAME_LAUNCH_START", applicationId: t }),
          h
              .then((e) => {
                  d.h.dispatch({ type: "GAME_LAUNCH_SUCCESS", applicationId: t, pids: e });
              })
              .catch((e) => {
                  L.A.show(b.kqX.LAUNCH_GAME_FAILURE, x.intl.string(x.t.YZEBdj)),
                      d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: g });
              }))
        : (d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: g }), Promise.reject(g));
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
            r = T.A.findGame(i);
        if (null != r) {
            let e = S.A.getActiveLibraryApplication(r.id);
            if (null != e) {
                let i = e.getFlags(),
                    r = a.Lt(i, b.hM6.OVERLAY_DISABLED);
                t && r !== t && (i = a.PQ(i, b.hM6.OVERLAY_DISABLED));
                let s = a.Lt(i, b.hM6.OVERLAY_V3_DISABLED);
                null != n && n !== s && (i = a.PQ(i, b.hM6.OVERLAY_V3_DISABLED)), D.V(e.id, e.branchId, i);
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
        if (!T.A.canFetchDetectableGames()) return;
        let e = T.A.detectableGamesEtag;
        d.h.wait(() => {
            d.h.dispatch({ type: "GAMES_DATABASE_FETCH" }),
                y.A.get({
                    url: M,
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
                        d.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: t, etag: n });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? d.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: [], etag: T.A.detectableGamesEtag })
                            : d.h.dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    getDetectableBlocklist() {
        if (!T.A.canFetchExecutableBlocklist()) return;
        let e = T.A.blocklistEtag;
        d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH" }),
            o.Bo.get({
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
                              etag: T.A.blocklistEtag,
                          })
                        : (G.error("Failed to fetch games blocklist"),
                          d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" }));
                },
            );
    },
    getDetectableNonGames() {
        if (!g.A.canFetch()) return;
        let e = g.A.etag;
        d.h.wait(() => {
            d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
                y.A.get({
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
                        d.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: t, etag: n });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? d.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: [], etag: g.A.etag })
                            : d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH_FAIL" });
                    },
                );
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: i, distributor: r, sku: s, executableName: a } = e,
            l = (0, E.v)(a);
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
                url: b.Rsh.UNVERIFIED_APPLICATIONS,
                body: {
                    name: t,
                    os: (0, O.getPlatformName)(),
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
                d.h.dispatch({ type: "UNVERIFIED_GAME_UPDATE", name: t, hash: n, missingData: i });
            });
    },
    uploadIcon(e, t, n) {
        o.Bo.post({
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
    launch: F,
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
            locationObject: _,
            analyticsLocations: u,
            remotePartyId: c,
        } = e;
        if (__OVERLAY__)
            return (
                d.h.dispatch({
                    type: "OVERLAY_JOIN_GAME",
                    userId: t,
                    sessionId: n,
                    applicationId: i,
                    channelId: r,
                    messageId: s,
                }),
                Promise.resolve(!0)
            );
        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: i, remotePartyId: c });
        try {
            let e = (0, O.platformPrefersDeepLink)(),
                d = await v.A.getJoinSecret(t, n, i, r, s);
            return (
                null == c &&
                    V({
                        applicationId: i,
                        secret: d,
                        channelId: r,
                        intent: a,
                        embedded: o,
                        source: l,
                        locationObject: _,
                        analyticsLocations: u,
                        preferDeepLink: e,
                    }),
                !0
            );
        } catch (e) {
            return d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: i }), !1;
        }
    },
    joinWithSecret: V,
};
