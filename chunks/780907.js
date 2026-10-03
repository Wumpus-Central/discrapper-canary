n.d(t, { Ay: () => W, xt: () => j });
var i = n(488428),
    r = n(562708),
    a = n(179771),
    s = n(665260),
    l = n(636537),
    o = n(933681),
    d = n(73153),
    c = n(62583),
    u = n(627363),
    _ = n(587895),
    E = n(306044),
    A = n(626584),
    h = n(625180),
    I = n(25451),
    f = n(953384),
    p = n(952818),
    T = n(773669),
    m = n(796306),
    g = n(134861),
    S = n(760751),
    N = n(189081),
    C = n(340829),
    O = n(174459),
    R = n(738533),
    L = n(723702),
    y = n(499785),
    D = n(308368),
    v = n(59636),
    b = n(912851),
    M = n(652215),
    P = n(818023),
    U = n(165610);
let w = window.GLOBAL_ENV.CDN_HOST;
function G(e, t) {
    return null != w ? `https://${w}${e}` : t;
}
let x = G("/detectables/games.json", M.Rsh.GAMES_DETECTABLE),
    k = G("/detectables/non-games.json", M.Rsh.NON_GAMES_DETECTABLE);
var F = n(375708);
let B = new A.A("GamesActionCreators");
function V(e) {
    let {
        applicationId: t,
        secret: n,
        joinUrl: i,
        channelId: r,
        intent: a = P.W9.PLAY,
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
            (B.warn("Failed to open join URL", { applicationId: t, error: e.message }),
                d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: t }));
        }
        return Promise.resolve();
    }
    if (E) {
        let e = _.A.getApplication(t);
        if (e?.deepLinkUri != null) {
            let i = e.deepLinkUri.replace(/\/+$/, ""),
                r = `${i}${M.O3O.GAME_INVITE_FRAGMENT}${n}`;
            try {
                if (r.startsWith("http")) {
                    let e = window.open(r, "_blank");
                    (null == e || e.closed || void 0 === e.closed) &&
                        (B.warn("Deep link popup was blocked by browser, trying location.href", { applicationId: t }),
                        (window.location.href = r));
                } else window.location.href = r;
                return Promise.resolve();
            } catch (e) {
                B.warn("Failed to open deep link, falling back to desktop launch", {
                    applicationId: t,
                    error: e.message,
                });
            }
        }
    }
    H({ applicationId: t, channelId: r, embedded: s, source: l, locationObject: o, analyticsLocations: c })
        .then(async (e) => {
            if (0 === e) return null;
            null == _.A.getApplication(t) && (await (0, u.TA)(t));
            let i = _.A.getApplication(t)?.parentId;
            return (
                null != i &&
                    R.A.waitParentConnected(i)
                        .then(() => R.A.waitParentSubscribed(i, M.ZE4.ACTIVITY_JOIN))
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
                        R.A.waitSubscribed(t, M.ZE4.ACTIVITY_JOIN)
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
async function H(e) {
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
        return null != e && (0, I.X)(e)
            ? (await h.A.launchFrame({ applicationId: t, surface: U.sd }), 0)
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
    if (g.A.isConnected(t)) return Promise.resolve();
    let A = null;
    if (null == n) {
        let e = N.A.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (C.A.isLaunchable(t, n)) {
        let e = C.A.getState(t, n),
            r = N.A.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error("Missing dispatch game when launching");
        let s = N.A.getLibraryApplication(t, n);
        if (null == s) throw Error("Missing library application when launching");
        A = l.Bo.post({
            url: M.Rsh.OAUTH2_AUTHORIZE,
            query: { client_id: t, response_type: "token", scope: [a.F.IDENTIFY].join(" ") },
            retries: 3,
            body: { authorize: !0 },
            oldFormErrors: !0,
            rejectWithError: (0, l.fT)(),
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
        if (null != e) {
            A = R.A.launch(e);
            let n = S.A.getOfficialGame(e);
            null != n && n.id !== t && (A = A.catch(() => R.A.launch(n)));
        } else A = R.A.launchGame(t);
    }
    let f = Error("game not found");
    return null != A
        ? (d.h.dispatch({ type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE", applicationId: t, branchId: n }),
          d.h.dispatch({ type: "GAME_LAUNCH_START", applicationId: t }),
          A.then((e) => {
              d.h.dispatch({ type: "GAME_LAUNCH_SUCCESS", applicationId: t, pids: e });
          }).catch((e) => {
              (b.A.show(M.kqX.LAUNCH_GAME_FAILURE, F.intl.string(F.t.YZEBdj)),
                  d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: f }));
          }))
        : (d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: f }), Promise.reject(f));
}
function j(e) {
    d.h.dispatch({ type: "RUNNING_GAME_SET_DEBUG_GAME", game: e });
}
let W = {
    addGame(e, t) {
        (d.h.dispatch({ type: "RUNNING_GAME_ADD_OVERRIDE", pid: e }),
            O.default.track(M.HAw.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t }));
    },
    toggleOverlay(e, t, n) {
        let i = (0, p.Zh)(e),
            r = S.A.findGame(i);
        if (null != r) {
            let e = N.A.getActiveLibraryApplication(r.id);
            if (null != e) {
                let i = e.getFlags(),
                    r = s.Lt(i, M.hM6.OVERLAY_DISABLED);
                t && r !== t && (i = s.PQ(i, M.hM6.OVERLAY_DISABLED));
                let a = s.Lt(i, M.hM6.OVERLAY_V3_DISABLED);
                (null != n && n !== a && (i = s.PQ(i, M.hM6.OVERLAY_V3_DISABLED)), v.V(e.id, e.branchId, i));
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
                              (B.log("Identified game: ", {
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
        if (!S.A.canFetchDetectableGames()) return;
        let e = S.A.detectableGamesEtag;
        d.h.wait(() => {
            (d.h.dispatch({ type: "GAMES_DATABASE_FETCH" }),
                y.A.get({
                    url: null != w ? `https://${w}/detectables/games-v1.json` : x,
                    headers: { "If-None-Match": e },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: r.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (t) => (0, o.e0)({ sent_etag: e, received_etag: t?.headers?.etag }),
                    },
                    rejectWithError: (0, l.fT)(),
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
                            ? d.h.dispatch({ type: "GAMES_DATABASE_UPDATE", games: [], etag: S.A.detectableGamesEtag })
                            : d.h.dispatch({ type: "GAMES_DATABASE_FETCH_FAIL" });
                    },
                ));
        });
    },
    getDetectableBlocklist() {
        if (!S.A.canFetchExecutableBlocklist()) return;
        let e = S.A.blocklistEtag;
        (d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH" }),
            l.Bo.get({
                url: M.Rsh.GAMES_BLOCKLIST,
                headers: { "If-None-Match": e },
                oldFormErrors: !0,
                rejectWithError: (0, l.fT)(),
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
                              etag: S.A.blocklistEtag,
                          })
                        : (B.error("Failed to fetch games blocklist"),
                          d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" }));
                },
            ));
    },
    getDetectableNonGames() {
        if (!f.A.canFetch()) return;
        let e = f.A.etag;
        d.h.wait(() => {
            (d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
                y.A.get({
                    url: null != w ? `https://${w}/detectables/non-games-v1.json` : k,
                    headers: { "If-None-Match": e },
                    retries: 1,
                    trackedActionData: {
                        event: r.NetworkActionNames.DETECTABLE_NON_GAMES_FETCH,
                        properties: (t) => (0, o.e0)({ sent_etag: e, received_etag: t?.headers?.etag }),
                    },
                    rejectWithError: (0, l.fT)(),
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
                ));
        });
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: i, distributor: r, sku: a, executableName: s } = e,
            o = (0, E.v)(s);
        (B.log("Reporting unverified game: ", {
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
                url: M.Rsh.UNVERIFIED_APPLICATIONS,
                body: {
                    name: t,
                    os: (0, L.getPlatformName)(),
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
            url: M.Rsh.UNVERIFIED_APPLICATIONS_ICONS,
            body: { application_name: e, application_hash: t, icon: n },
            retries: 1,
            oldFormErrors: !0,
            rejectWithError: !0,
        });
    },
    deleteEntry(e) {
        d.h.dispatch({ type: "RUNNING_GAME_DELETE_ENTRY", game: e });
    },
    launch: H,
    async join(e) {
        let {
            userId: t,
            sessionId: n,
            applicationId: i,
            channelId: r,
            messageId: a,
            intent: s = P.W9.PLAY,
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
        let E = await (0, m.vX)(i, t, l);
        if (null != E) return E;
        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: i, remotePartyId: _ });
        try {
            let e = (0, L.platformPrefersDeepLink)(),
                { secret: d, joinUrl: E } = await D.A.getJoinSecret(t, n, i, r, a);
            return (
                null == _ &&
                    V({
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
            return (d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: i }), !1);
        }
    },
    joinWithSecret: V,
};
