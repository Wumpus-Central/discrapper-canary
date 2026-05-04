"use strict";
let i;
n.d(t, { Xr: () => eL, Ay: () => eH, hw: () => eD, Es: () => eO, Zh: () => eS, xU: () => eP }), n(321073), n(667532);
var r = n(735438),
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    l = n(167789),
    u = n(17928),
    c = n(506774),
    d = n(228366),
    _ = n(56562),
    f = n(573648),
    h = n(306044),
    p = n(626584),
    E = n(736056),
    m = n(924655),
    g = n(830012),
    A = n(810412),
    I = n(211753),
    T = n(206885),
    S = n(41984),
    N = n(439372),
    y = n(19575);
class C extends N.A {
    ownedLocks = new Set();
    acquireLock = (e) => {
        if (this.ownedLocks.has(e)) return !0;
        let t = `discord-overlay-global-owner-lock-${e}`;
        return !1 !== y.Ay.AcquireGlobalLock(t) && (this.ownedLocks.add(e), !0);
    };
}
let v = new C();
var O = n(871633),
    R = n(760751),
    b = n(189081),
    D = n(287809),
    L = n(340829),
    w = n(174459),
    M = n(927813),
    P = n(738533),
    x = n(403362),
    U = n(723702),
    k = n(9302),
    G = n(953384),
    F = n(973522),
    V = n(652215);
let B = new p.A("RunningGameStore"),
    H = "RunningGameStore",
    j = !__OVERLAY__ && ((0, U.isDesktop)() || T.O),
    Y = [],
    W = [
        {
            executables: [
                { os: "win32", name: "obs/obs.exe" },
                { os: "win32", name: "obs32.exe" },
                { os: "win32", name: "obs64.exe" },
                { os: "darwin", name: "OBS.app" },
                { os: "linux", name: "obs" },
            ],
            name: "OBS",
            streamerTool: !0,
        },
        {
            executables: [
                { os: "win32", name: "XSplit.Gamecaster.exe" },
                { os: "win32", name: "XSplit.Core.exe" },
                { os: "win32", name: "Gamecaster.exe" },
            ],
            name: "XSplit",
            streamerTool: !0,
        },
        { executables: [{ os: "win32", name: "bebo.exe" }], name: "Bebo", streamerTool: !0 },
        {
            executables: [
                { os: "win32", name: "Streamlabs OBS.exe" },
                { os: "win32", name: "Streamlabs Desktop.exe" },
                { os: "darwin", name: "Streamlabs Desktop.app" },
            ],
            name: "Streamlabs Desktop",
            streamerTool: !0,
        },
        {
            executables: [
                { os: "win32", name: "TwitchStudio.exe" },
                { os: "darwin", name: "Twitch Studio.app" },
            ],
            name: "Twitch Studio",
            streamerTool: !0,
        },
        {
            executables: [
                { os: "win32", name: "Spotify.exe" },
                { os: "darwin", name: "Spotify.app" },
                { os: "linux", name: "spotify" },
            ],
            name: f.A.get(V.fg2.SPOTIFY).name,
        },
    ],
    K = [],
    z = !0,
    $ = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    q = new Set(),
    Z = [],
    X = [],
    Q = [],
    J = null,
    ee = [],
    et = null,
    en = null,
    ei = [],
    er = {},
    es = {},
    ea = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    eo = function () {},
    el = null,
    eu = {},
    ec = 0,
    ed = null,
    e_ = null,
    ef = {},
    eh = {},
    ep = new Set(),
    eE = new Set(),
    em = null,
    eg = null,
    eA = new Map(),
    eI = new Map();
function eT(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function eS(e) {
    return e;
}
function eN(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function ey(e) {
    let t = eI.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        i = eA.get(n.toLowerCase());
    if (null != i) return i;
    for (let [t, n] of eA) {
        let i = e.exePath.toLowerCase(),
            r = t.toLowerCase();
        if (i.endsWith(r)) {
            let e = i.length - r.length;
            if (0 === e || "/" === i[e - 1] || "\\" === i[e - 1]) return n;
        }
    }
    return null;
}
function eC(e) {
    let t = ey(e);
    return t?.streamerTool === !0;
}
function ev() {
    if (Q.length > 0) {
        let e = et;
        (et = Q[0]), null != e && et.pid === e.pid ? (et.start = e.start) : (et.start = Date.now());
    } else et = null;
    let e = [];
    for (let t of Q) t.pid in ef || ((ef[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ef)) Q.some((t) => t.pid === e.pid) || (t.push(e), delete ef[e.pid]);
    B.info("Running Games Changed", { runningGames: Q, added: e, removed: t, previousGames: ef }),
        d.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: Q, added: e, removed: t });
}
function eO(e) {
    if ((0, O.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
W.forEach((e) => {
    eI.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            eA.set(t.name.toLowerCase(), e);
        });
});
let eR = new Set(["1314395942253756416"]);
function eb(e) {
    let t = null;
    if ("id" in e) t = e.id ?? null;
    else {
        let n = R.A.findGame(e);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && eR.has(t);
}
function eD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [R.A, b.A];
    if (e.isLauncher)
        return {
            source: S.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: S.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in e && !v.acquireLock(e.pid))
        return {
            source: S.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: S.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let r = n.findGame(e);
    if (null != r) {
        let e = i.getActiveLibraryApplication(r.id);
        if (null != e)
            return {
                source: S.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: S.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let s = (0, k.supportsOutOfProcess)() && !t,
        a = eb(r ?? e),
        o = I.x.legacyEnabled,
        l = s && !a,
        u = ea.enableOverlay[eO(e)],
        c = ea.enableOverlayV3[eO(e)];
    if (null != u || null != c) {
        let e = null != c ? c : l,
            t = e ? S.Ue.OutOfProcess : S.Ue.Hook;
        return {
            source: e && !a ? S.yp.OOP_DEFAULT : S.yp.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: null != u ? u : o,
            overlayMethod: l ? t : S.Ue.Hook,
            reason: "Enabled from persistent",
        };
    }
    let d = null == e.id ? null : eu[e.id];
    if (null != d) {
        let e = d.enabledOOP ?? l,
            t = d.enabled ?? o,
            n = e ? S.Ue.OutOfProcess : S.Ue.Hook;
        return {
            source: e && !a ? S.yp.OOP_DEFAULT_DATABASE : S.yp.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: l ? n : S.Ue.Hook,
            reason: "Enabled from overlayOptions",
        };
    }
    return {
        source: S.yp.DEFAULT,
        enabledOOP: l,
        enabledLegacy: !1,
        overlayMethod: l ? S.Ue.OutOfProcess : S.Ue.Disabled,
        reason: "Default enablement",
    };
}
function eL(e) {
    let t = ea.enableDetection[eO(e)];
    return null == t || t;
}
function ew(e) {
    return !e.hidden && eL(e);
}
function eM() {
    c.w.set(H, ea);
}
function eP(e, t, n, i) {
    let r = {
        ...e,
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? o()(new Date(e.lastFocused * M.A.Millis.SECOND)).fromNow()
                : " ",
        overlay: (function (e) {
            let t = ea.enableOverlay[eO(e)],
                n = ea.enableOverlayV3[eO(e)];
            if (null != t || null != n) return t ?? n;
            let i = eD(e);
            return i.enabledLegacy || i.enabledOOP;
        })(e),
        verified: n.isGameInDatabase(e),
        detectable: eL(e),
    };
    return null != e.id && null != eu[e.id] && (r.overlayWarn = eu[e.id].warn), r;
}
function ex() {
    let e = !1;
    return (
        (Z = s()
            .values(b.A.libraryApplications)
            .reduce((t, n) => {
                let i = R.A.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of L.A.getLaunchOptions(n.id, n.branchId)) {
                    let s = `${n.id}:${n.branchId}`;
                    q.has(s) || ((e = !0), q.add(s));
                    let { fullExecutablePath: a } = r,
                        o = a.replace(/\\/g, "/").toLowerCase();
                    (er[o] = i.id),
                        t.push({ id: i.id, name: i.name, exePath: o, cmdLine: "", lastFocused: 0, add: !0 });
                }
                return t;
            }, [])),
        e && eU(),
        e
    );
}
function eU() {
    if (!__OVERLAY__ && U.isPlatformEmbedded) {
        let e = [...Z, ...s().values(ea.gameOverrides)];
        y.Ay.setGameCandidateOverrides(e);
    }
}
function ek(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                ea.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = ea.gameOverrides[eO(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        if (
                            (t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eO(t) !== eO(e))
                        ) {
                            var n, i;
                            let r, s, a, o;
                            (n = eO(t)),
                                (i = eO(e)),
                                null != (r = ea.gameOverrides[n]) &&
                                    ((ea.gameOverrides[i] = r), delete ea.gameOverrides[n]),
                                null != (s = ea.enableOverlay[n]) &&
                                    ((ea.enableOverlay[i] = s), delete ea.enableOverlay[n]),
                                null != (a = ea.enableOverlayV3[n]) &&
                                    ((ea.enableOverlayV3[i] = a), delete ea.enableOverlayV3[n]),
                                null != (o = ea.enableDetection[n]) &&
                                    ((ea.enableDetection[i] = o), delete ea.enableDetection[n]),
                                (t.exePath = e.exePath);
                        }
                        return eN(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                let t;
                if (e.hidden) return;
                ea.gamesSeen.unshift(
                    ((t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused }),
                    null != e.id && (t.id = e.id),
                    null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId),
                    null != e.name && (t.name = e.name),
                    e.add && (t.add = !0),
                    e.block && (t.block = !0),
                    null != e.distributor && (t.distributor = e.distributor),
                    null != e.gameName && (t.gameName = e.gameName),
                    eN(t, e),
                    t),
                );
            }
        }),
        ea.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eM(),
        P.A.setRecentGames(eG().map((e) => eP(e, eB, R.A, b.A))));
}
function eG() {
    let e = s().values(ea.gameOverrides);
    return ea.gamesSeen.filter((e) => void 0 === ea.gameOverrides[eO(e)]).concat(e);
}
if (j) {
    let e = function () {
        let e = [],
            t = new Set();
        i = {};
        let n = R.A.games,
            r = G.A.nonGames,
            s = (0, k.supportsOutOfProcess)();
        for (let e of n) {
            let t = eb(e),
                n = (s && !t) || _.gH.enabledOOP,
                i = e.overlay ?? _.gH.enabled;
            eu[e.id] = {
                compatibilityHook: e.overlayCompatibilityHook ?? _.gH.compatibilityHook,
                warn: e.overlayWarn ?? _.gH.warn,
                enabled: i,
                enabledOOP: n,
                allowHook: e.hook ?? _.gH.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay,
            };
        }
        let a = new Set();
        W.forEach((e) => {
            (e.executables ?? []).forEach((e) => {
                a.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...r].filter((e) => !(e.executables ?? []).some((e) => eA.has(e.name.toLowerCase()))),
                ...W,
            ].forEach((n) => {
                let i = null != n.executables ? n.executables : [],
                    r = {};
                if (
                    (i.forEach((e) => {
                        let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
                        null == r[n] && (r[n] = []), r[n].push(e.name), e.isLauncher && t.add(e.name);
                    }),
                    Object.keys(r).length > 0)
                )
                    Object.keys(r).forEach((t) =>
                        e.push({
                            name: n.name,
                            id: n.id,
                            executables: r[t],
                            cmdLine: "null" !== t ? t : null,
                            thirdPartySkus: n.thirdPartySkus ?? [],
                        }),
                    );
                else {
                    let t = n.thirdPartySkus ?? [];
                    t.length > 0 &&
                        e.push({ name: n.name, id: n.id, executables: [], cmdLine: null, thirdPartySkus: t });
                }
            }),
            (e = e.filter(
                (e) =>
                    (null != e.executables && e.executables.length > 0) ||
                    (null != e.thirdPartySkus && e.thirdPartySkus.length > 0),
            )),
            y.Ay.setObservedGamesCallback(
                e,
                !0,
                (e) => {
                    let n = [],
                        r = {},
                        s = [];
                    e = e.filter((e) =>
                        null != e.id && null != G.A.getById(e.id)
                            ? (s.push(e), !1)
                            : ((e.isLauncher = e.isLauncher || t.has(e.exeName)),
                                e.isLauncher && null != e.id && (r[e.id] = e),
                                (e.windowHandle = (function (e, t) {
                                    if (void 0 === t) {
                                        let t = y.Ay.getDiscordUtils();
                                        if (null != t && null != t.getWindowHandleFromPid) {
                                            let n = t.getWindowHandleFromPid(e);
                                            return null != n && "0" !== n ? n : null;
                                        }
                                        return null;
                                    }
                                    return "0" === t ? null : t;
                                })(e.pid, e.windowHandle)),
                                null != ey(e))
                              ? (n.push(e), !1)
                              : !R.A.shouldBlock(e),
                    );
                    let a = n.filter(eC).length;
                    a !== ec && ((ec = a), d.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: ec })),
                        (Q = null != J ? [J, ...e] : e),
                        (ee = s),
                        (ei = n),
                        (i = r),
                        ev(),
                        (en = ee.length > 0 ? ee[0] : null);
                    let o = [];
                    for (let e of ee) e.pid in eh || ((eh[e.pid] = e), o.push(e));
                    let l = [];
                    for (let e of Object.values(eh)) ee.some((t) => t.pid === e.pid) || (l.push(e), delete eh[e.pid]);
                    B.info("Running Non-Games Changed", {
                        runningNonGames: ee,
                        added: o,
                        removed: l,
                        previousNonGames: eh,
                    }),
                        d.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: ee, added: o, removed: l });
                },
                D.default.getCurrentUser()?.id,
            ),
            eU(),
            y.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, i] of e.entries()) {
                        let e = t[n],
                            r = R.A.findGame(i),
                            s = R.A.findGame(e),
                            a = (e?.id !== "4294967293" ? e?.id : s?.id) ?? "";
                        w.default.track(V.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: V.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: i.name,
                            orig_game_name_v1: i.origGameName,
                            game_id_v1: r?.id,
                            distributor_v1: i.distributor,
                            verified_v1: (0, F.PQ)(i.exePath, r?.executables ?? []),
                            is_launcher_v1: i.isLauncher,
                            game_detection_enabled_v1: eL(i),
                            executable_path_v1: (0, F.Ic)(i.exePath),
                            distributor_game_id_v1: i.sku,
                            hidden_by_distributor_v1: i.hidden,
                            game_metadata_v1: (0, O.MT)(i),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: a,
                            distributor_v2: e.distributor,
                            verified_v2: (0, F.PQ)(e.exePath, s?.executables ?? []),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eL(e),
                            executable_path_v2: (0, F.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, O.MT)(e),
                        });
                    }
            }),
            y.Ay.setGameDetectionErrorCallback((e, t, n, i, r) => {});
    };
    eo = function () {
        return (
            !!R.A.hasAttemptedFetch &&
            !!G.A.hasAttemptedFetch &&
            (null != el && el(),
            (el = (0, l.O)(
                () => {
                    (el = null), e(), eB.emitChange();
                },
                { timeout: 2e3 },
            )),
            !1)
        );
    };
}
function eF() {
    E.A.hasLoadedExperiments && Y.length > 0 && (ek(Y), (Y = []));
}
class eV extends u.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = c.w.get(H) ?? {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableOverlayV3: {},
            enableDetection: {},
        };
        ea.gameOverrides = {};
        let t = !1;
        if (
            (s()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = eO(e);
                    (0, O.n1)(e) || (ea.gameOverrides[t] = e);
                }),
            (ea.enableOverlay = e.enableOverlay ?? {}),
            (ea.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (ea.enableDetection = e.enableDetection ?? {}),
            eU(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        this.waitFor(R.A, G.A, L.A, E.A, m.A, b.A, D.default),
            (Y = e.gamesSeen.filter((e) => !(0, O.n1)(e))),
            this.syncWith([m.A], eF),
            this.syncWith([b.A, R.A, L.A], s().throttle(ex, 1e3)),
            t && eM();
    }
    getVisibleGame() {
        return null == et || ew(et) ? et : null;
    }
    getCurrentGameForAnalytics() {
        return et;
    }
    getCurrentNonGameForAnalytics() {
        return en;
    }
    getVisibleRunningGames() {
        return Q.filter(ew);
    }
    getRunningGames() {
        return Q;
    }
    getDebugRunningGame() {
        return J;
    }
    getRunningNonGames() {
        return ee;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of Q) null != er[t.exePath] && e.push(er[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => R.A.findGame(e))
            .filter(x.Vq)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        return Q.find((t) => t.pid === e) ?? null;
    }
    getGameForName(e) {
        return Q.find((t) => t.name?.toLowerCase() === e.toLowerCase()) ?? null;
    }
    getGameOrTransformedSubgameForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t && null != t.id ? i[t.id] : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...eu[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != ed && ed === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != e_ && e_ === e;
    }
    canCollectExecutableFingerprintsForRunningGames() {
        return j;
    }
    getCandidateGames() {
        return X.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === ea.gameOverrides[eO(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === Y.length;
    }
    isGameSeen(e) {
        return eG().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eG();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eO(e);
                n = n.filter((e) => eO(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return ea.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return ei.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(ea.gameOverrides);
    }
    getOverrideForGame(e) {
        return ea.gameOverrides[eO(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return B.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eD(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return B.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eD(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        return ei.find((t) => (0, g.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return z && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eL(e);
    }
    addExecutableTrackedByAnalytics(e) {
        eE.add((0, h.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return $[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return $[e]?.state === "running";
    }
}
let eB = new eV(d.h, {
        RUNNING_GAMES_CHANGE: function (e) {
            ek(Q);
        },
        RUNNING_NON_GAMES_CHANGE: function () {},
        CANDIDATE_GAMES_CHANGE: function (e) {
            X = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            z = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (ed = t), (e_ = null);
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            ed = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (e_ = t), (ed = null);
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t,
                n = e.pid,
                i = Q.find((e) => e.pid === n);
            if (null == i) {
                let e = X.find((e) => e.pid === n);
                if (null == e) return;
                ((i = { ...e }).hidden = !1), Q.push(i), (es[(t = eO(i))] = !0);
            } else (t = eO(i)), i.hidden && (es[t] = !0), (i.hidden = !1);
            (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)),
                (ea.gameOverrides[t] = { ...i, add: !0 }),
                ek(Q),
                eU(),
                eM(),
                ev();
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e,
                r = n !== ea.enableOverlay[eO(t)],
                s = i !== ea.enableOverlayV3[eO(t)];
            r && (ea.enableOverlay[eO(t)] = n),
                s && null != i && (ea.enableOverlayV3[eO(t)] = i),
                eM(),
                !__OVERLAY__ &&
                    null != (null != t.id ? R.A.getDetectableGame(t.id) : null) &&
                    (r && (0, A.Q3)(n, A.OverlayToggledClientSettingType.LEGACY_GAME, t.id ?? null),
                    s && null != i && (0, A.Q3)(i, A.OverlayToggledClientSettingType.OOP_GAME, t.id ?? null));
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = eL(t);
            (ea.enableDetection[eO(t)] = !n),
                eM(),
                w.default.track(V.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            let t = eO(e.game),
                n = ea.gameOverrides[t];
            if (null == n) {
                var i;
                (n = {
                    name: (i = e.game).name,
                    exePath: i.exePath,
                    cmdLine: i.cmdLine,
                    lastFocused: i.lastFocused,
                }).add = !0;
            }
            n.name = e.newName;
            let r = eO(n);
            delete ea.gameOverrides[t],
                (ea.gameOverrides[r] = n),
                eT(ea.enableOverlay, t, r),
                eT(ea.enableDetection, t, r),
                eT(es, t, r),
                ea.gamesSeen.forEach((n) => {
                    eO(n) === t && (n.name = e.newName);
                });
            let s = !1;
            Q.forEach((n) => {
                eO(n) === t && ((n.name = e.newName), (s = !0));
            }),
                eU(),
                eM(),
                s && ev();
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = eO(e.game);
            delete ea.gameOverrides[t],
                delete ea.enableOverlay[t],
                delete ea.enableDetection[t],
                (ea.gamesSeen = ea.gamesSeen.filter((e) => eO(e) !== t)),
                es[t] &&
                    (Q.forEach((e) => {
                        t === eO(e) && (e.hidden = !0);
                    }),
                    delete es[t]),
                Q.some((e) => eO(e) === t) && ev(),
                eU(),
                eM();
        },
        GAMES_DATABASE_UPDATE: eo,
        GAMES_DATABASE_FETCH_FAIL: eo,
        NON_GAMES_DATABASE_UPDATE: eo,
        NON_GAMES_DATABASE_FETCH_FAIL: eo,
        GAME_LAUNCH_SUCCESS: function (e) {
            if (__OVERLAY__ || !U.isPlatformEmbedded) return;
            let t = y.Ay.getDiscordUtils().notifyGameLaunched;
            if (null == t) return;
            let n = R.A.getDetectableGame(e.applicationId);
            null != n && t(n.id, n.name, e.pids ?? []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            eU();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            (em = e.level), (eg = e.intervalSeconds);
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            (em = null), (eg = null), ep.clear();
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => ({ pid: e.pid, cleanedExePath: (0, h.v)(e.exePath) ?? e.exePath }))
                .filter((e) => {
                    if (ep.has(e.pid) || eE.has(e.cleanedExePath)) return !1;
                    let t = K.some((t) => e.cleanedExePath.includes(t));
                    return t && ep.add(e.pid), t;
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                w.default.track(V.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: K,
                    paths: t,
                    debugging_level: em,
                    interval_seconds: eg,
                });
        },
        SYSTEM_SERVICE_INITIALIZE: function (e) {
            let { status: t, modules: n } = e;
            for (let e of n) $[e] = t;
        },
        RUNNING_GAME_SET_DEBUG_GAME: function (e) {
            null != J && (Q = Q.filter((e) => e !== J)), null != (J = e.game) && (Q = [J, ...Q]), ev();
        },
    }),
    eH = eB;
