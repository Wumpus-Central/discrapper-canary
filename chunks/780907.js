n.d(t, { Ay: () => Y, xt: () => W });
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
    f = n(966563),
    I = n(25451),
    p = n(953384),
    T = n(952818),
    m = n(773669),
    g = n(134861),
    S = n(760751),
    N = n(189081),
    C = n(290863),
    O = n(340829),
    R = n(174459),
    L = n(339586),
    y = n(723702),
    D = n(499785),
    v = n(308368),
    b = n(59636),
    P = n(912851),
    M = n(652215),
    U = n(818023),
    w = n(165610);
let G = (0, n(403362).iT)() ? void 0 : window.GLOBAL_ENV.CDN_HOST;
function x(e, t) {
    return null != G ? `https://${G}${e}` : t;
}
let k = x("/detectables/games.json", M.Rsh.GAMES_DETECTABLE),
    F = x("/detectables/non-games.json", M.Rsh.NON_GAMES_DETECTABLE);
var B = n(105292);
let V = new A.A("GamesActionCreators");
function H(e) {
    let {
        applicationId: t,
        secret: n,
        joinUrl: i,
        channelId: r,
        intent: a = U.W9.PLAY,
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
            (V.warn("Failed to open join URL", { applicationId: t, error: e.message }),
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
                        (V.warn("Deep link popup was blocked by browser, trying location.href", { applicationId: t }),
                        (window.location.href = r));
                } else window.location.href = r;
                return Promise.resolve();
            } catch (e) {
                V.warn("Failed to open deep link, falling back to desktop launch", {
                    applicationId: t,
                    error: e.message,
                });
            }
        }
    }
    j({ applicationId: t, channelId: r, embedded: s, source: l, locationObject: o, analyticsLocations: c })
        .then(async (e) => {
            if (0 === e) return null;
            null == _.A.getApplication(t) && (await (0, u.TA)(t));
            let i = _.A.getApplication(t)?.parentId;
            return (
                null != i &&
                    L.A.waitParentConnected(i)
                        .then(() => L.A.waitParentSubscribed(i, M.ZE4.ACTIVITY_JOIN))
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
                L.A.waitConnected(t).then(
                    () => (
                        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: t }),
                        L.A.waitSubscribed(t, M.ZE4.ACTIVITY_JOIN)
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
async function j(e) {
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
            ? (await h.A.launchFrame({ applicationId: t, surface: w.sd }), 0)
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
    if (O.A.isLaunchable(t, n)) {
        let e = O.A.getState(t, n),
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
            .then((t) => L.A.launchDispatchApplication(e, t, m.default.locale, s.getBranchName(), r));
    } else {
        let e = _.A.getApplication(t);
        if (null != e) {
            A = L.A.launch(e);
            let n = S.A.getOfficialGame(e);
            null != n && n.id !== t && (A = A.catch(() => L.A.launch(n)));
        } else A = L.A.launchGame(t);
    }
    let f = Error("game not found");
    return null != A
        ? (d.h.dispatch({ type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE", applicationId: t, branchId: n }),
          d.h.dispatch({ type: "GAME_LAUNCH_START", applicationId: t }),
          A.then((e) => {
              d.h.dispatch({ type: "GAME_LAUNCH_SUCCESS", applicationId: t, pids: e });
          }).catch((e) => {
              (P.A.show(M.kqX.LAUNCH_GAME_FAILURE, B.intl.string(B.t.YZEBdj)),
                  d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: f }));
          }))
        : (d.h.dispatch({ type: "GAME_LAUNCH_FAIL", applicationId: t, error: f }), Promise.reject(f));
}
function W(e) {
    d.h.dispatch({ type: "RUNNING_GAME_SET_DEBUG_GAME", game: e });
}
let Y = {
    addGame(e, t) {
        (d.h.dispatch({ type: "RUNNING_GAME_ADD_OVERRIDE", pid: e }),
            R.default.track(M.HAw.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t }));
    },
    toggleOverlay(e, t, n) {
        let i = (0, T.Zh)(e),
            r = S.A.findGame(i);
        if (null != r) {
            let e = N.A.getActiveLibraryApplication(r.id);
            if (null != e) {
                let i = e.getFlags(),
                    r = s.Lt(i, M.hM6.OVERLAY_DISABLED);
                t && r !== t && (i = s.PQ(i, M.hM6.OVERLAY_DISABLED));
                let a = s.Lt(i, M.hM6.OVERLAY_V3_DISABLED);
                (null != n && n !== a && (i = s.PQ(i, M.hM6.OVERLAY_V3_DISABLED)), b.V(e.id, e.branchId, i));
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
                              (V.log("Identified game: ", {
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
        (d.h.dispatch({ type: "GAMES_DATABASE_FETCH" }),
            D.A.get({
                url: null != G ? `https://${G}/detectables/games-v1.json` : k,
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
                        : (V.error("Failed to fetch games blocklist"),
                          d.h.dispatch({ type: "GAMES_BLOCKLIST_FETCH_FAIL" }));
                },
            ));
    },
    getDetectableNonGames() {
        if (!p.A.canFetch()) return;
        let e = p.A.etag;
        (d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH" }),
            D.A.get({
                url: null != G ? `https://${G}/detectables/non-games-v1.json` : F,
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
                        ? d.h.dispatch({ type: "NON_GAMES_DATABASE_UPDATE", nonGames: [], etag: p.A.etag })
                        : d.h.dispatch({ type: "NON_GAMES_DATABASE_FETCH_FAIL" });
                },
            ));
    },
    reportUnverifiedGame(e) {
        let { name: t, iconHash: n, publisher: i, distributor: r, sku: a, executableName: s } = e,
            o = (0, E.v)(s);
        (V.log("Reporting unverified game: ", {
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
                    os: (0, y.getPlatformName)(),
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
    launch: j,
    async join(e) {
        let {
            userId: t,
            sessionId: n,
            applicationId: i,
            channelId: r,
            messageId: a,
            intent: s = U.W9.PLAY,
            embedded: l = !1,
            source: o,
            locationObject: c,
            analyticsLocations: E,
            remotePartyId: A,
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
        l && !_.A.isHydrated(i) && (await (0, u.TA)(i).catch(() => {}));
        let h = _.A.getApplication(i);
        if (l && null != h && (0, I.X)(h)) {
            let e = C.A.getApplicationActivity(t, i);
            return (0, f.A)({
                application: h,
                userId: t,
                activity: e,
                sessionId: n,
                channelId: r,
                messageId: a,
                intent: s,
            });
        }
        d.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: i, remotePartyId: A });
        try {
            let e = (0, y.platformPrefersDeepLink)(),
                { secret: d, joinUrl: u } = await v.A.getJoinSecret(t, n, i, r, a);
            return (
                null == A &&
                    H({
                        applicationId: i,
                        secret: d,
                        joinUrl: u,
                        channelId: r,
                        intent: s,
                        embedded: l,
                        source: o,
                        locationObject: c,
                        analyticsLocations: E,
                        preferDeepLink: e,
                    }),
                !0
            );
        } catch (e) {
            return (d.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: i }), !1);
        }
    },
    joinWithSecret: H,
};
