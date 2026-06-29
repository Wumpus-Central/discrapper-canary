"use strict";
let i;
n.d(t, { Xr: () => eP, Ay: () => eW, hw: () => eM, Es: () => eD, Zh: () => eC, xU: () => eU }), n(321073), n(667532);
var r = n(735438),
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    l = n(167789),
    u = n(17928),
    c = n(506774),
    d = n(228366),
    _ = n(56562),
    h = n(573648),
    f = n(306044),
    p = n(626584),
    E = n(736056),
    m = n(108822),
    g = n(830012),
    A = n(810412),
    I = n(211753),
    T = n(206885),
    S = n(41984),
    y = n(439372),
    C = n(19575);
class N extends y.A {
    ownedLocks = new Set();
    acquireLock = (e) => {
        if (this.ownedLocks.has(e)) return !0;
        let t = `discord-overlay-global-owner-lock-${e}`;
        return !1 !== C.Ay.AcquireGlobalLock(t) && (this.ownedLocks.add(e), !0);
    };
}
let v = new N();
var R = n(871633),
    O = n(760751),
    b = n(189081),
    D = n(287809),
    L = n(340829),
    w = n(174459),
    M = n(927813),
    P = n(738533),
    x = n(403362),
    k = n(723702),
    U = n(9302),
    G = n(953384),
    F = n(973522),
    V = n(652215);
let B = new p.A("RunningGameStore"),
    j = "RunningGameStore",
    H = !__OVERLAY__ && ((0, k.isDesktop)() || T.O),
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
            name: h.A.get(V.fg2.SPOTIFY).name,
        },
    ],
    K = [],
    $ = !0,
    z = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    q = new Set(),
    Z = [],
    X = [],
    Q = [],
    J = null,
    ee = [],
    et = null,
    en = null,
    ei = null,
    er = [],
    es = {},
    ea = {},
    eo = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    el = function () {},
    eu = null,
    ec = {},
    ed = 0,
    e_ = null,
    eh = null,
    ef = {},
    ep = {},
    eE = new Set(),
    em = new Set(),
    eg = null,
    eA = null,
    eI = null,
    eT = new Map(),
    eS = new Map();
function ey(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function eC(e) {
    return e;
}
function eN(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function ev(e) {
    let t = eS.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        i = eT.get(n.toLowerCase());
    if (null != i) return i;
    for (let [t, n] of eT) {
        let i = e.exePath.toLowerCase(),
            r = t.toLowerCase();
        if (i.endsWith(r)) {
            let e = i.length - r.length;
            if (0 === e || "/" === i[e - 1] || "\\" === i[e - 1]) return n;
        }
    }
    return null;
}
function eR(e) {
    let t = ev(e);
    return t?.streamerTool === !0;
}
function eO() {
    let e = en;
    null != (en = Q.find(ex) ?? null) && (en.start = null != e && e.pid === en.pid ? e.start : Date.now());
}
function eb() {
    if (Q.length > 0) {
        let e = et;
        (et = Q[0]), null != e && et.pid === e.pid ? (et.start = e.start) : (et.start = Date.now());
    } else et = null;
    eO();
    let e = [];
    for (let t of Q) t.pid in ef || ((ef[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ef)) Q.some((t) => t.pid === e.pid) || (t.push(e), delete ef[e.pid]);
    B.info("Running Games Changed", { runningGames: Q, added: e, removed: t, previousGames: ef }),
        d.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: Q, added: e, removed: t });
}
function eD(e) {
    if ((0, R.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
W.forEach((e) => {
    eS.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            eT.set(t.name.toLowerCase(), e);
        });
});
let eL = new Set(["1314395942253756416"]);
function ew(e) {
    let t = null;
    if ("id" in e) t = e.id ?? null;
    else {
        let n = O.A.findGame(e);
        if (null == n) return !1;
        t = n.id;
    }
    return null != t && eL.has(t);
}
function eM(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [O.A, b.A];
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
    let s = (0, U.supportsOutOfProcess)() && !t,
        a = ew(r ?? e),
        o = I.x.legacyEnabled,
        l = s && !a,
        u = eo.enableOverlay[eD(e)],
        c = eo.enableOverlayV3[eD(e)];
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
    let d = null == e.id ? null : ec[e.id];
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
function eP(e) {
    let t = eo.enableDetection[eD(e)];
    return null == t || t;
}
function ex(e) {
    return !e.hidden && eP(e);
}
function ek() {
    c.w.set(j, eo);
}
function eU(e, t, n, i) {
    let r = {
        ...e,
        played:
            null != e.lastFocused && 0 !== e.lastFocused
                ? o()(new Date(e.lastFocused * M.A.Millis.SECOND)).fromNow()
                : " ",
        overlay: (function (e) {
            let t = eo.enableOverlay[eD(e)],
                n = eo.enableOverlayV3[eD(e)];
            if (null != t || null != n) return t ?? n;
            let i = eM(e);
            return i.enabledLegacy || i.enabledOOP;
        })(e),
        verified: n.isGameInDatabase(e),
        detectable: eP(e),
    };
    return null != e.id && null != ec[e.id] && (r.overlayWarn = ec[e.id].warn), r;
}
function eG() {
    let e = !1;
    return (
        (Z = s()
            .values(b.A.libraryApplications)
            .reduce((t, n) => {
                let i = O.A.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of L.A.getLaunchOptions(n.id, n.branchId)) {
                    let s = `${n.id}:${n.branchId}`;
                    q.has(s) || ((e = !0), q.add(s));
                    let { fullExecutablePath: a } = r,
                        o = a.replace(/\\/g, "/").toLowerCase();
                    (es[o] = i.id),
                        t.push({ id: i.id, name: i.name, exePath: o, cmdLine: "", lastFocused: 0, add: !0 });
                }
                return t;
            }, [])),
        e && eF(),
        e
    );
}
function eF() {
    if (!__OVERLAY__ && k.isPlatformEmbedded) {
        let e = [...Z, ...s().values(eo.gameOverrides)];
        C.Ay.setGameCandidateOverrides(e);
    }
}
function eV(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                eo.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = eo.gameOverrides[eD(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        if (
                            (t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eD(t) !== eD(e))
                        ) {
                            var n, i;
                            let r, s, a, o;
                            (n = eD(t)),
                                (i = eD(e)),
                                null != (r = eo.gameOverrides[n]) &&
                                    ((eo.gameOverrides[i] = r), delete eo.gameOverrides[n]),
                                null != (s = eo.enableOverlay[n]) &&
                                    ((eo.enableOverlay[i] = s), delete eo.enableOverlay[n]),
                                null != (a = eo.enableOverlayV3[n]) &&
                                    ((eo.enableOverlayV3[i] = a), delete eo.enableOverlayV3[n]),
                                null != (o = eo.enableDetection[n]) &&
                                    ((eo.enableDetection[i] = o), delete eo.enableDetection[n]),
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
                eo.gamesSeen.unshift(
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
        eo.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ek(),
        P.A.setRecentGames(eB().map((e) => eU(e, eY, O.A, b.A))));
}
function eB() {
    let e = s().values(eo.gameOverrides);
    return eo.gamesSeen.filter((e) => void 0 === eo.gameOverrides[eD(e)]).concat(e);
}
if (H) {
    let e = function () {
        let e = [],
            t = new Set();
        i = {};
        let n = O.A.games,
            r = G.A.nonGames,
            s = (0, U.supportsOutOfProcess)();
        for (let e of n) {
            let t = ew(e),
                n = (s && !t) || _.gH.enabledOOP,
                i = e.overlay ?? _.gH.enabled;
            ec[e.id] = {
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
                ...[...n, ...r].filter((e) => !(e.executables ?? []).some((e) => eT.has(e.name.toLowerCase()))),
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
            C.Ay.setObservedGamesCallback(
                e,
                !0,
                (e) => {
                    let n = [],
                        r = {},
                        s = [],
                        a = [],
                        o = e.length,
                        l = [];
                    for (let i of e) {
                        if (null != i.id && null != G.A.getById(i.id)) {
                            s.push(i), a.push({ game: i, outcome: { kind: "non_game" } });
                            continue;
                        }
                        (i.isLauncher = i.isLauncher || t.has(i.exeName)),
                            i.isLauncher && null != i.id && (r[i.id] = i),
                            (i.windowHandle = (function (e, t) {
                                if (void 0 === t) {
                                    let t = C.Ay.getDiscordUtils();
                                    if (null != t && null != t.getWindowHandleFromPid) {
                                        let n = t.getWindowHandleFromPid(e);
                                        return null != n && "0" !== n ? n : null;
                                    }
                                    return null;
                                }
                                return "0" === t ? null : t;
                            })(i.pid, i.windowHandle));
                        let e = ev(i);
                        if (null != e) {
                            n.push(i),
                                a.push({
                                    game: i,
                                    outcome: {
                                        kind: "observed_app",
                                        appName: e.name,
                                        streamerTool: e.streamerTool ?? !1,
                                    },
                                });
                            continue;
                        }
                        if (O.A.shouldBlock(i)) {
                            let e = O.A.getBlockReason(i);
                            a.push({
                                game: i,
                                outcome: {
                                    kind: "blocked",
                                    matchedExe: e?.matchedExe ?? null,
                                    matchedPattern: e?.matchedPattern ?? null,
                                },
                            });
                            continue;
                        }
                        l.push(i), a.push({ game: i, outcome: { kind: "passed" } });
                    }
                    (eI = { timestamp: Date.now(), totalFromNative: o, entries: a }), (e = l);
                    let u = n.filter(eR).length;
                    for (let t of (u !== ed &&
                        ((ed = u), d.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: ed })),
                    (Q = null != J ? [J, ...e] : e))) {
                        let e = eo.gameOverrides[eD(t)];
                        e?.add === !0 && t.hidden && ((ea[eD(t)] = !0), (t.hidden = !1));
                    }
                    (ee = s), (er = n), (i = r), eb(), (ei = ee.length > 0 ? ee[0] : null);
                    let c = [];
                    for (let e of ee) e.pid in ep || ((ep[e.pid] = e), c.push(e));
                    let _ = [];
                    for (let e of Object.values(ep)) ee.some((t) => t.pid === e.pid) || (_.push(e), delete ep[e.pid]);
                    B.info("Running Non-Games Changed", {
                        runningNonGames: ee,
                        added: c,
                        removed: _,
                        previousNonGames: ep,
                    }),
                        d.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: ee, added: c, removed: _ });
                },
                D.default.getCurrentUser()?.id,
            ),
            eF(),
            C.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, i] of e.entries()) {
                        let e = t[n],
                            r = O.A.findGame(i),
                            s = O.A.findGame(e),
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
                            game_detection_enabled_v1: eP(i),
                            executable_path_v1: (0, F.Ic)(i.exePath),
                            distributor_game_id_v1: i.sku,
                            hidden_by_distributor_v1: i.hidden,
                            game_metadata_v1: (0, R.MT)(i),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: a,
                            distributor_v2: e.distributor,
                            verified_v2: (0, F.PQ)(e.exePath, s?.executables ?? []),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eP(e),
                            executable_path_v2: (0, F.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, R.MT)(e),
                        });
                    }
            }),
            C.Ay.setGameDetectionErrorCallback((e, t, n, i, r) => {});
    };
    el = function () {
        return (
            !!O.A.hasAttemptedFetch &&
            !!G.A.hasAttemptedFetch &&
            (null != eu && eu(),
            (eu = (0, l.O)(
                () => {
                    (eu = null), e(), eY.emitChange();
                },
                { timeout: 2e3 },
            )),
            !1)
        );
    };
}
function ej() {
    E.A.hasLoadedExperiments && Y.length > 0 && (eV(Y), (Y = []));
}
class eH extends u.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = c.w.get(j) ?? {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableOverlayV3: {},
            enableDetection: {},
        };
        eo.gameOverrides = {};
        let t = !1;
        if (
            (s()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = eD(e);
                    (0, R.n1)(e) || (eo.gameOverrides[t] = e);
                }),
            (eo.enableOverlay = e.enableOverlay ?? {}),
            (eo.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (eo.enableDetection = e.enableDetection ?? {}),
            eF(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        this.waitFor(O.A, G.A, L.A, E.A, m.A, b.A, D.default),
            (Y = e.gamesSeen.filter((e) => !(0, R.n1)(e))),
            this.syncWith([m.A], ej),
            this.syncWith([b.A, O.A, L.A], s().throttle(eG, 1e3)),
            t && ek();
    }
    getVisibleGame() {
        return en;
    }
    getCurrentGameForAnalytics() {
        return et;
    }
    getCurrentNonGameForAnalytics() {
        return ei;
    }
    getVisibleRunningGames() {
        return Q.filter(ex);
    }
    getRunningGames() {
        return Q;
    }
    getDebugRunningGame() {
        return J;
    }
    getDetectionDebug() {
        return eI;
    }
    getRunningNonGames() {
        return ee;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of Q) null != es[t.exePath] && e.push(es[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => O.A.findGame(e))
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
        return null == t || t.isLauncher || null == t.id ? null : { ...ec[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != e_ && e_ === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eh && eh === e;
    }
    canCollectExecutableFingerprintsForRunningGames() {
        return H;
    }
    getCandidateGames() {
        return X.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === eo.gameOverrides[eD(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === Y.length;
    }
    isGameSeen(e) {
        return eB().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eB();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eD(e);
                n = n.filter((e) => eD(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return eo.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return er.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(eo.gameOverrides);
    }
    getOverrideForGame(e) {
        return eo.gameOverrides[eD(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return B.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eM(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return B.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eM(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        return er.find((t) => (0, g.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return $ && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eP(e);
    }
    addExecutableTrackedByAnalytics(e) {
        em.add((0, f.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return z[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return z[e]?.state === "running";
    }
}
let eY = new eH(d.h, {
        RUNNING_GAMES_CHANGE: function (e) {
            eV(Q);
        },
        RUNNING_NON_GAMES_CHANGE: function () {},
        CANDIDATE_GAMES_CHANGE: function (e) {
            X = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            $ = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (e_ = t), (eh = null);
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            e_ = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (eh = t), (e_ = null);
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t,
                n = e.pid,
                i = Q.find((e) => e.pid === n);
            if (null == i) {
                let e = X.find((e) => e.pid === n);
                if (null == e) return;
                ((i = { ...e }).hidden = !1), Q.push(i), (ea[(t = eD(i))] = !0);
            } else (t = eD(i)), i.hidden && (ea[t] = !0), (i.hidden = !1);
            (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)),
                (eo.gameOverrides[t] = { ...i, add: !0 }),
                eV(Q),
                eF(),
                ek(),
                eb();
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e,
                r = n !== eo.enableOverlay[eD(t)],
                s = i !== eo.enableOverlayV3[eD(t)];
            r && (eo.enableOverlay[eD(t)] = n),
                s && null != i && (eo.enableOverlayV3[eD(t)] = i),
                ek(),
                !__OVERLAY__ &&
                    null != (null != t.id ? O.A.getDetectableGame(t.id) : null) &&
                    (r && (0, A.Q3)(n, A.OverlayToggledClientSettingType.LEGACY_GAME, t.id ?? null),
                    s && null != i && (0, A.Q3)(i, A.OverlayToggledClientSettingType.OOP_GAME, t.id ?? null));
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = eP(t);
            (eo.enableDetection[eD(t)] = !n),
                ek(),
                eO(),
                w.default.track(V.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            let t = eD(e.game),
                n = eo.gameOverrides[t];
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
            let r = eD(n);
            delete eo.gameOverrides[t],
                (eo.gameOverrides[r] = n),
                ey(eo.enableOverlay, t, r),
                ey(eo.enableDetection, t, r),
                ey(ea, t, r),
                eo.gamesSeen.forEach((n) => {
                    eD(n) === t && (n.name = e.newName);
                });
            let s = !1;
            Q.forEach((n) => {
                eD(n) === t && ((n.name = e.newName), (s = !0));
            }),
                eF(),
                ek(),
                s && eb();
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = eD(e.game);
            delete eo.gameOverrides[t],
                delete eo.enableOverlay[t],
                delete eo.enableDetection[t],
                (eo.gamesSeen = eo.gamesSeen.filter((e) => eD(e) !== t)),
                ea[t] &&
                    (Q.forEach((e) => {
                        t === eD(e) && (e.hidden = !0);
                    }),
                    delete ea[t]),
                Q.some((e) => eD(e) === t) && eb(),
                eF(),
                ek();
        },
        GAMES_DATABASE_UPDATE: el,
        GAMES_DATABASE_FETCH_FAIL: el,
        NON_GAMES_DATABASE_UPDATE: el,
        NON_GAMES_DATABASE_FETCH_FAIL: el,
        GAME_LAUNCH_SUCCESS: function (e) {
            if (__OVERLAY__ || !k.isPlatformEmbedded) return;
            let t = C.Ay.getDiscordUtils().notifyGameLaunched;
            if (null == t) return;
            let n = O.A.getDetectableGame(e.applicationId);
            null != n && t(n.id, n.name, e.pids ?? []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            eF();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            (eg = e.level), (eA = e.intervalSeconds);
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            (eg = null), (eA = null), eE.clear();
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => ({ pid: e.pid, cleanedExePath: (0, f.v)(e.exePath) ?? e.exePath }))
                .filter((e) => {
                    if (eE.has(e.pid) || em.has(e.cleanedExePath)) return !1;
                    let t = K.some((t) => e.cleanedExePath.includes(t));
                    return t && eE.add(e.pid), t;
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                w.default.track(V.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: K,
                    paths: t,
                    debugging_level: eg,
                    interval_seconds: eA,
                });
        },
        SYSTEM_SERVICE_INITIALIZE: function (e) {
            let { status: t, modules: n } = e;
            for (let e of n) z[e] = t;
        },
        RUNNING_GAME_SET_DEBUG_GAME: function (e) {
            null != J && (Q = Q.filter((e) => e !== J)), null != (J = e.game) && (Q = [J, ...Q]), eb();
        },
    }),
    eW = eY;
