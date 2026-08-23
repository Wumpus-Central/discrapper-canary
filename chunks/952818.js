"use strict";
let i;
n.d(t, { Xr: () => ex, Ay: () => ez, hw: () => eG, Es: () => ev, Zh: () => eC, xU: () => eV }), n(321073), n(667532);
var r = n(435558),
    a = n.n(r),
    s = n(989349),
    l = n.n(s),
    o = n(167789),
    d = n(17928),
    c = n(506774),
    u = n(228366),
    _ = n(56562),
    E = n(573648),
    A = n(306044),
    h = n(626584),
    I = n(736056),
    f = n(108822),
    p = n(311043),
    T = n(830012),
    m = n(810412),
    g = n(211753),
    S = n(206885),
    N = n(41984),
    C = n(439372),
    R = n(19575);
class O extends C.A {
    ownedLocks = new Set();
    acquireLock = (e) => {
        if (this.ownedLocks.has(e)) return !0;
        let t = `discord-overlay-global-owner-lock-${e}`;
        return !1 !== R.Ay.AcquireGlobalLock(t) && (this.ownedLocks.add(e), !0);
    };
}
let L = new O();
var y = n(871633),
    D = n(760751),
    v = n(189081),
    b = n(287809),
    M = n(340829),
    P = n(174459),
    U = n(927813),
    w = n(738533),
    G = n(403362),
    x = n(723702),
    k = n(9302),
    F = n(953384),
    V = n(973522),
    B = n(652215);
let H = new h.A("RunningGameStore"),
    j = "RunningGameStore",
    W = !__OVERLAY__ && ((0, x.isDesktop)() || S.O),
    Y = [],
    K = [
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
            name: E.A.get(B.fg2.SPOTIFY).name,
        },
    ],
    $ = [],
    z = !0,
    Z = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    q = new Set(),
    X = [],
    Q = [],
    J = [],
    ee = null,
    et = [],
    en = null,
    ei = null,
    er = null,
    ea = [],
    es = {},
    el = {},
    eo = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    ed = function () {},
    ec = null,
    eu = 0,
    e_ = null,
    eE = null,
    eA = {},
    eh = {},
    eI = new Set(),
    ef = new Set(),
    ep = null,
    eT = null,
    em = null,
    eg = new Map(),
    eS = new Map();
function eN(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function eC(e) {
    return e;
}
function eR(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eO(e) {
    let t = eS.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        i = eg.get(n.toLowerCase());
    if (null != i) return i;
    for (let [t, n] of eg) {
        let i = e.exePath.toLowerCase(),
            r = t.toLowerCase();
        if (i.endsWith(r)) {
            let e = i.length - r.length;
            if (0 === e || "/" === i[e - 1] || "\\" === i[e - 1]) return n;
        }
    }
    return null;
}
function eL(e) {
    let t = eO(e);
    return t?.streamerTool === !0;
}
function ey() {
    let e = ei;
    null != (ei = J.find(ek) ?? null) && (ei.start = null != e && e.pid === ei.pid ? e.start : Date.now());
}
function eD() {
    if (J.length > 0) {
        let e = en;
        (en = J[0]), null != e && en.pid === e.pid ? (en.start = e.start) : (en.start = Date.now());
    } else en = null;
    ey();
    let e = [];
    for (let t of J) t.pid in eA || ((eA[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(eA)) J.some((t) => t.pid === e.pid) || (t.push(e), delete eA[e.pid]);
    H.info("Running Games Changed", { runningGames: J, added: e, removed: t, previousGames: eA }),
        u.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: J, added: e, removed: t });
}
function ev(e) {
    if ((0, y.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
K.forEach((e) => {
    eS.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            eg.set(t.name.toLowerCase(), e);
        });
});
let eb = new Set(["1314395942253756416"]);
function eM(e) {
    return null != e && eb.has(e);
}
function eP(e) {
    var t;
    let n,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.A;
    if (null == e) return;
    let r = i.getGame(e);
    return null != r
        ? ((t = (0, k.supportsOutOfProcess)()),
          (n = eM(r.id)),
          {
              compatibilityHook: r.overlayCompatibilityHook ?? _.gH.compatibilityHook,
              warn: r.overlayWarn ?? _.gH.warn,
              enabled: r.overlay ?? _.gH.enabled,
              enabledOOP: (t && !n) || _.gH.enabledOOP,
              allowHook: r.hook ?? _.gH.allowHook,
              supportsOutOfProcessOverlay: r.supportsOutOfProcessOverlay ?? _.gH.supportsOutOfProcessOverlay,
          })
        : void 0;
}
let eU = new Set();
function ew() {
    let e = new Set(J.map((e) => e.id).filter((e) => null != e && null != p.A.getGame(e))),
        t = e.size !== eU.size || [...e].some((e) => !eU.has(e));
    return (eU = e), t;
}
function eG(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [i, r, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [D.A, v.A, p.A];
    if (e.isLauncher)
        return {
            source: N.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: N.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in e && !L.acquireLock(e.pid))
        return {
            source: N.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: N.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let s = i.findGame(e);
    if (null != s) {
        let e = r.getActiveLibraryApplication(s.id);
        if (null != e)
            return {
                source: N.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: N.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let l = (0, k.supportsOutOfProcess)() && !n,
        o = eM("id" in (t = s ?? e) ? (t.id ?? null) : (D.A.findGame(t)?.id ?? null)),
        d = g.x.legacyEnabled,
        c = l && !o,
        u = eo.enableOverlay[ev(e)],
        _ = eo.enableOverlayV3[ev(e)];
    if (null != u || null != _) {
        let e = null != _ ? _ : c,
            t = e ? N.Ue.OutOfProcess : N.Ue.Hook;
        return {
            source: e && !o ? N.yp.OOP_DEFAULT : N.yp.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: null != u ? u : d,
            overlayMethod: c ? t : N.Ue.Hook,
            reason: "Enabled from persistent",
        };
    }
    let E = eP(e.id, a);
    if (null != E) {
        let e = E.enabledOOP,
            t = E.enabled,
            n = e ? N.Ue.OutOfProcess : N.Ue.Hook;
        return {
            source: e && !o ? N.yp.OOP_DEFAULT_DATABASE : N.yp.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: c ? n : N.Ue.Hook,
            reason: "Enabled from game record",
        };
    }
    return {
        source: N.yp.DEFAULT,
        enabledOOP: c,
        enabledLegacy: !1,
        overlayMethod: c ? N.Ue.OutOfProcess : N.Ue.Disabled,
        reason: "Default enablement",
    };
}
function ex(e) {
    let t = eo.enableDetection[ev(e)];
    return null == t || t;
}
function ek(e) {
    return !e.hidden && ex(e);
}
function eF() {
    c.w.set(j, eo);
}
function eV(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : p.A,
        a = {
            ...e,
            played:
                null != e.lastFocused && 0 !== e.lastFocused
                    ? l()(new Date(e.lastFocused * U.A.Millis.SECOND)).fromNow()
                    : " ",
            overlay: (function (e) {
                let t = eo.enableOverlay[ev(e)],
                    n = eo.enableOverlayV3[ev(e)];
                if (null != t || null != n) return t ?? n;
                let i = eG(e);
                return i.enabledLegacy || i.enabledOOP;
            })(e),
            verified: n.isGameInDatabase(e),
            detectable: ex(e),
        },
        s = eP(e.id, r);
    return null != s && (a.overlayWarn = s.warn), a;
}
function eB() {
    let e = !1;
    return (
        (X = a()
            .values(v.A.libraryApplications)
            .reduce((t, n) => {
                let i = D.A.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of M.A.getLaunchOptions(n.id, n.branchId)) {
                    let a = `${n.id}:${n.branchId}`;
                    q.has(a) || ((e = !0), q.add(a));
                    let { fullExecutablePath: s } = r,
                        l = s.replace(/\\/g, "/").toLowerCase();
                    (es[l] = i.id),
                        t.push({ id: i.id, name: i.name, exePath: l, cmdLine: "", lastFocused: 0, add: !0 });
                }
                return t;
            }, [])),
        e && eH(),
        e
    );
}
function eH() {
    if (!__OVERLAY__ && x.isPlatformEmbedded) {
        let e = [...X, ...a().values(eo.gameOverrides)];
        R.Ay.setGameCandidateOverrides(e);
    }
}
function ej(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                eo.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = eo.gameOverrides[ev(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        if (
                            (t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && ev(t) !== ev(e))
                        ) {
                            var n, i;
                            let r, a, s, l;
                            (n = ev(t)),
                                (i = ev(e)),
                                null != (r = eo.gameOverrides[n]) &&
                                    ((eo.gameOverrides[i] = r), delete eo.gameOverrides[n]),
                                null != (a = eo.enableOverlay[n]) &&
                                    ((eo.enableOverlay[i] = a), delete eo.enableOverlay[n]),
                                null != (s = eo.enableOverlayV3[n]) &&
                                    ((eo.enableOverlayV3[i] = s), delete eo.enableOverlayV3[n]),
                                null != (l = eo.enableDetection[n]) &&
                                    ((eo.enableDetection[i] = l), delete eo.enableDetection[n]),
                                (t.exePath = e.exePath);
                        }
                        return eR(t, e), !0;
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
                    eR(t, e),
                    t),
                );
            }
        }),
        eo.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eF(),
        w.A.setRecentGames(eW().map((e) => eV(e, e$, D.A, v.A))));
}
function eW() {
    let e = a().values(eo.gameOverrides);
    return eo.gamesSeen.filter((e) => void 0 === eo.gameOverrides[ev(e)]).concat(e);
}
if (W) {
    let e = function () {
        let e = [],
            t = new Set();
        i = {};
        let n = D.A.games,
            r = F.A.nonGames,
            a = new Set();
        K.forEach((e) => {
            (e.executables ?? []).forEach((e) => {
                a.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...r].filter((e) => !(e.executables ?? []).some((e) => eg.has(e.name.toLowerCase()))),
                ...K,
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
            R.Ay.setObservedGamesCallback(
                e,
                !0,
                (e) => {
                    let n = [],
                        r = {},
                        a = [],
                        s = [],
                        l = e.length,
                        o = [];
                    for (let i of e) {
                        if (null != i.id && null != F.A.getById(i.id)) {
                            a.push(i), s.push({ game: i, outcome: { kind: "non_game" } });
                            continue;
                        }
                        (i.isLauncher = i.isLauncher || t.has(i.exeName)),
                            i.isLauncher && null != i.id && (r[i.id] = i),
                            (i.windowHandle = (function (e, t) {
                                if (void 0 === t) {
                                    let t = R.Ay.getDiscordUtils();
                                    if (null != t && null != t.getWindowHandleFromPid) {
                                        let n = t.getWindowHandleFromPid(e);
                                        return null != n && "0" !== n ? n : null;
                                    }
                                    return null;
                                }
                                return "0" === t ? null : t;
                            })(i.pid, i.windowHandle));
                        let e = eO(i);
                        if (null != e) {
                            n.push(i),
                                s.push({
                                    game: i,
                                    outcome: {
                                        kind: "observed_app",
                                        appName: e.name,
                                        streamerTool: e.streamerTool ?? !1,
                                    },
                                });
                            continue;
                        }
                        if (D.A.shouldBlock(i)) {
                            let e = D.A.getBlockReason(i);
                            s.push({
                                game: i,
                                outcome: {
                                    kind: "blocked",
                                    matchedExe: e?.matchedExe ?? null,
                                    matchedPattern: e?.matchedPattern ?? null,
                                },
                            });
                            continue;
                        }
                        o.push(i), s.push({ game: i, outcome: { kind: "passed" } });
                    }
                    (em = { timestamp: Date.now(), totalFromNative: l, entries: s }), (e = o);
                    let d = n.filter(eL).length;
                    for (let t of (d !== eu &&
                        ((eu = d), u.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: eu })),
                    (J = null != ee ? [ee, ...e] : e))) {
                        let e = eo.gameOverrides[ev(t)];
                        e?.add === !0 && t.hidden && ((el[ev(t)] = !0), (t.hidden = !1));
                    }
                    (et = a), (ea = n), (i = r), eD(), (er = et.length > 0 ? et[0] : null);
                    let c = [];
                    for (let e of et) e.pid in eh || ((eh[e.pid] = e), c.push(e));
                    let _ = [];
                    for (let e of Object.values(eh)) et.some((t) => t.pid === e.pid) || (_.push(e), delete eh[e.pid]);
                    H.info("Running Non-Games Changed", {
                        runningNonGames: et,
                        added: c,
                        removed: _,
                        previousNonGames: eh,
                    }),
                        u.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: et, added: c, removed: _ });
                },
                b.default.getCurrentUser()?.id,
            ),
            eH(),
            R.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, i] of e.entries()) {
                        let e = t[n],
                            r = D.A.findGame(i),
                            a = D.A.findGame(e),
                            s = (e?.id !== "4294967293" ? e?.id : a?.id) ?? "";
                        P.default.track(B.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: B.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: i.name,
                            orig_game_name_v1: i.origGameName,
                            game_id_v1: r?.id,
                            distributor_v1: i.distributor,
                            verified_v1: (0, V.PQ)(i.exePath, r?.executables ?? []),
                            is_launcher_v1: i.isLauncher,
                            game_detection_enabled_v1: ex(i),
                            executable_path_v1: (0, V.Ic)(i.exePath),
                            distributor_game_id_v1: i.sku,
                            hidden_by_distributor_v1: i.hidden,
                            game_metadata_v1: (0, y.MT)(i),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: s,
                            distributor_v2: e.distributor,
                            verified_v2: (0, V.PQ)(e.exePath, a?.executables ?? []),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: ex(e),
                            executable_path_v2: (0, V.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, y.MT)(e),
                        });
                    }
            }),
            R.Ay.setGameDetectionErrorCallback((e, t, n, i, r) => {});
    };
    ed = function () {
        return (
            !!D.A.hasAttemptedFetch &&
            !!F.A.hasAttemptedFetch &&
            (null != ec && ec(),
            (ec = (0, o.O)(
                () => {
                    (ec = null), e(), e$.emitChange();
                },
                { timeout: 2e3 },
            )),
            !1)
        );
    };
}
function eY() {
    I.A.hasLoadedExperiments && Y.length > 0 && (ej(Y), (Y = []));
}
class eK extends d.Ay.Store {
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
            (a()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = ev(e);
                    (0, y.n1)(e) || (eo.gameOverrides[t] = e);
                }),
            (eo.enableOverlay = e.enableOverlay ?? {}),
            (eo.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (eo.enableDetection = e.enableDetection ?? {}),
            eH(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        this.waitFor(D.A, F.A, M.A, I.A, f.A, p.A, v.A, b.default),
            (Y = e.gamesSeen.filter((e) => !(0, y.n1)(e))),
            this.syncWith([f.A], eY),
            this.syncWith([v.A, D.A, M.A], a().throttle(eB, 1e3)),
            this.syncWith([p.A], ew),
            t && eF();
    }
    getVisibleGame() {
        return ei;
    }
    getCurrentGameForAnalytics() {
        return en;
    }
    getCurrentNonGameForAnalytics() {
        return er;
    }
    getVisibleRunningGames() {
        return J.filter(ek);
    }
    getRunningGames() {
        return J;
    }
    getDebugRunningGame() {
        return ee;
    }
    getDetectionDebug() {
        return em;
    }
    getRunningNonGames() {
        return et;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of J) null != es[t.exePath] && e.push(es[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => D.A.findGame(e))
            .filter(G.Vq)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        return J.find((t) => t.pid === e) ?? null;
    }
    getGameForName(e) {
        return J.find((t) => t.name?.toLowerCase() === e.toLowerCase()) ?? null;
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
        if (null == t || t.isLauncher || null == t.id) return null;
        let n = eP(t.id);
        return null != n ? { ...n } : null;
    }
    shouldElevateProcessForPID(e) {
        return null != e_ && e_ === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eE && eE === e;
    }
    canCollectExecutableFingerprintsForRunningGames() {
        return W;
    }
    getCandidateGames() {
        return Q.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === eo.gameOverrides[ev(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === Y.length;
    }
    isGameSeen(e) {
        return eW().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eW();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = ev(e);
                n = n.filter((e) => ev(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return eo.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return ea.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(eo.gameOverrides);
    }
    getOverrideForGame(e) {
        return eo.gameOverrides[ev(e)];
    }
    getOverlayEnabledForGame(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return H.verbose("getOverlayEnabledForGame: Overlay not supported.", e), !1;
        let t = eG(e);
        return t.enabledLegacy || t.enabledOOP;
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed)
            return H.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
        let t = eG(e);
        return t.enabledLegacy || t.enabledOOP ? t : null;
    }
    getObservedAppNameForWindow(e) {
        return ea.find((t) => (0, T.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return z && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return ex(e);
    }
    addExecutableTrackedByAnalytics(e) {
        ef.add((0, A.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return Z[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return Z[e]?.state === "running";
    }
}
let e$ = new eK(u.h, {
        RUNNING_GAMES_CHANGE: function (e) {
            ej(J);
        },
        RUNNING_NON_GAMES_CHANGE: function () {},
        CANDIDATE_GAMES_CHANGE: function (e) {
            Q = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            z = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (e_ = t), (eE = null);
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            e_ = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (eE = t), (e_ = null);
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t,
                n = e.pid,
                i = J.find((e) => e.pid === n);
            if (null == i) {
                let e = Q.find((e) => e.pid === n);
                if (null == e) return;
                ((i = { ...e }).hidden = !1), J.push(i), (el[(t = ev(i))] = !0);
            } else (t = ev(i)), i.hidden && (el[t] = !0), (i.hidden = !1);
            (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)),
                (eo.gameOverrides[t] = { ...i, add: !0 }),
                ej(J),
                eH(),
                eF(),
                eD();
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e,
                r = n !== eo.enableOverlay[ev(t)],
                a = i !== eo.enableOverlayV3[ev(t)];
            r && (eo.enableOverlay[ev(t)] = n),
                a && null != i && (eo.enableOverlayV3[ev(t)] = i),
                eF(),
                !__OVERLAY__ &&
                    null != (null != t.id ? D.A.getDetectableGame(t.id) : null) &&
                    (r && (0, m.Q3)(n, m.OverlayToggledClientSettingType.LEGACY_GAME, t.id ?? null),
                    a && null != i && (0, m.Q3)(i, m.OverlayToggledClientSettingType.OOP_GAME, t.id ?? null));
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = ex(t);
            (eo.enableDetection[ev(t)] = !n),
                eF(),
                ey(),
                P.default.track(B.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            let t = ev(e.game),
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
            let r = ev(n);
            delete eo.gameOverrides[t],
                (eo.gameOverrides[r] = n),
                eN(eo.enableOverlay, t, r),
                eN(eo.enableDetection, t, r),
                eN(el, t, r),
                eo.gamesSeen.forEach((n) => {
                    ev(n) === t && (n.name = e.newName);
                });
            let a = !1;
            J.forEach((n) => {
                ev(n) === t && ((n.name = e.newName), (a = !0));
            }),
                eH(),
                eF(),
                a && eD();
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = ev(e.game);
            delete eo.gameOverrides[t],
                delete eo.enableOverlay[t],
                delete eo.enableDetection[t],
                (eo.gamesSeen = eo.gamesSeen.filter((e) => ev(e) !== t)),
                el[t] &&
                    (J.forEach((e) => {
                        t === ev(e) && (e.hidden = !0);
                    }),
                    delete el[t]),
                J.some((e) => ev(e) === t) && eD(),
                eH(),
                eF();
        },
        GAMES_DATABASE_UPDATE: ed,
        GAMES_DATABASE_FETCH_FAIL: ed,
        NON_GAMES_DATABASE_UPDATE: ed,
        NON_GAMES_DATABASE_FETCH_FAIL: ed,
        GAME_LAUNCH_SUCCESS: function (e) {
            if (__OVERLAY__ || !x.isPlatformEmbedded) return;
            let t = R.Ay.getDiscordUtils().notifyGameLaunched;
            if (null == t) return;
            let n = D.A.getDetectableGame(e.applicationId);
            null != n && t(n.id, n.name, e.pids ?? []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            eH();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            (ep = e.level), (eT = e.intervalSeconds);
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            (ep = null), (eT = null), eI.clear();
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => ({ pid: e.pid, cleanedExePath: (0, A.v)(e.exePath) ?? e.exePath }))
                .filter((e) => {
                    if (eI.has(e.pid) || ef.has(e.cleanedExePath)) return !1;
                    let t = $.some((t) => e.cleanedExePath.includes(t));
                    return t && eI.add(e.pid), t;
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                P.default.track(B.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: $,
                    paths: t,
                    debugging_level: ep,
                    interval_seconds: eT,
                });
        },
        SYSTEM_SERVICE_INITIALIZE: function (e) {
            let { status: t, modules: n } = e;
            for (let e of n) Z[e] = t;
        },
        RUNNING_GAME_SET_DEBUG_GAME: function (e) {
            null != ee && (J = J.filter((e) => e !== ee)), null != (ee = e.game) && (J = [ee, ...J]), eD();
        },
    }),
    ez = e$;
