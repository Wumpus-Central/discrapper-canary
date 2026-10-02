let i;
(n.d(t, { Xr: () => eV, Ay: () => eQ, hw: () => eB, Es: () => eU, Zh: () => eL, xU: () => eW }), n(321073), n(667532));
var r = n(435558),
    a = n.n(r),
    s = n(536637),
    l = n.n(s),
    o = n(167789),
    d = n(17928),
    c = n(506774),
    u = n(73153),
    _ = n(56562),
    E = n(573648),
    A = n(306044),
    h = n(626584),
    I = n(736056),
    f = n(108822),
    p = n(311043),
    T = n(830012),
    g = n(810412),
    m = n(211753),
    S = n(206885),
    N = n(41984),
    C = n(439372),
    O = n(19575);
class R extends C.A {
    ownedLocks = new Set();
    acquireLock = (e) => {
        if (this.ownedLocks.has(e)) return !0;
        let t = `discord-overlay-global-owner-lock-${e}`;
        return !1 !== O.Ay.AcquireGlobalLock(t) && (this.ownedLocks.add(e), !0);
    };
}
let L = new R();
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
    B = n(973522),
    V = n(863160),
    H = n(652215);
let j = new h.A("RunningGameStore"),
    W = "RunningGameStore",
    Y = !__OVERLAY__ && ((0, x.isDesktop)() || S.O),
    K = [],
    $ = [
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
            name: E.A.get(H.fg2.SPOTIFY).name,
        },
    ],
    z = [],
    X = !0,
    Z = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    q = new Set(),
    Q = [],
    J = [],
    ee = [],
    et = null,
    en = [],
    ei = null,
    er = null,
    ea = new V.Ig(),
    es = new Map(),
    el = null,
    eo = [],
    ed = {},
    ec = {},
    eu = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    e_ = function () {},
    eE = null,
    eA = 0,
    eh = null,
    eI = null,
    ef = {},
    ep = {},
    eT = new Set(),
    eg = new Set(),
    em = null,
    eS = null,
    eN = null,
    eC = new Map(),
    eO = new Map();
function eR(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function eL(e) {
    return e;
}
function ey(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eD(e) {
    let t = eO.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        i = eC.get(n.toLowerCase());
    if (null != i) return i;
    for (let [t, n] of eC) {
        let i = e.exePath.toLowerCase(),
            r = t.toLowerCase();
        if (i.endsWith(r)) {
            let e = i.length - r.length;
            if (0 === e || "/" === i[e - 1] || "\\" === i[e - 1]) return n;
        }
    }
    return null;
}
function ev(e) {
    let t = eD(e);
    return t?.streamerTool === !0;
}
function eb() {
    let e = er;
    null != (er = ee.find(eH) ?? null) && (er.start = null != e && e.pid === er.pid ? e.start : Date.now());
}
function eM() {
    let { games: e, changed: t } = ea.resolve(ee);
    return (e !== ee && ((ee = e), eP()), t);
}
function eP() {
    if ((ee = ea.resolve(ee).games).length > 0) {
        let e = ei;
        ((ei = ee[0]), null != e && ei.pid === e.pid ? (ei.start = e.start) : (ei.start = Date.now()));
    } else ei = null;
    eb();
    let e = [];
    for (let t of ee) t.pid in ef || ((ef[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ef)) ee.some((t) => t.pid === e.pid) || (t.push(e), delete ef[e.pid], es.delete(e.pid));
    (j.info("Running Games Changed", { runningGames: ee, added: e, removed: t, previousGames: ef }),
        u.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: ee, added: e, removed: t }));
}
function eU(e) {
    if ((0, y.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
$.forEach((e) => {
    (eO.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            eC.set(t.name.toLowerCase(), e);
        }));
});
let ew = new Set(["1314395942253756416"]);
function eG(e) {
    return null != e && ew.has(e);
}
function ex(e) {
    var t;
    let n,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.A;
    if (null == e) return;
    let r = i.getGame(e);
    return null != r
        ? ((t = (0, k.supportsOutOfProcess)()),
          (n = eG(r.id)),
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
let ek = new Set();
function eF() {
    let e = new Set(ee.map((e) => (0, V.Un)(e).id).filter((e) => null != e && null != p.A.getGame(e))),
        t = e.size !== ek.size || [...e].some((e) => !ek.has(e));
    return ((ek = e), t);
}
function eB(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [i, r, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [D.A, v.A, p.A],
        s = (0, V.Un)(e);
    if (s.isLauncher)
        return {
            source: N.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: N.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in s && !L.acquireLock(s.pid))
        return {
            source: N.yp.GLOBAL_OVERLAY_LOCK_FAILED,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: N.Ue.Disabled,
            reason: "Another Discord instance running overlay for this pid",
        };
    let l = i.findGame(s);
    if (null != l) {
        let e = r.getActiveLibraryApplication(l.id);
        if (null != e)
            return {
                source: N.yp.LIBRARY_APPLICATION,
                enabledOOP: e.isOverlayV3Enabled(),
                enabledLegacy: e.isLegacyOverlayEnabled(),
                overlayMethod: N.Ue.Disabled,
                reason: "Some library application thing?",
            };
    }
    let o = (0, k.supportsOutOfProcess)() && !n,
        d = eG("id" in (t = l ?? s) ? (t.id ?? null) : (D.A.findGame(t)?.id ?? null)),
        c = m.x.legacyEnabled,
        u = o && !d,
        _ = eu.enableOverlay[eU(s)],
        E = eu.enableOverlayV3[eU(s)];
    if (null != _ || null != E) {
        let e = null != E ? E : u,
            t = e ? N.Ue.OutOfProcess : N.Ue.Hook;
        return {
            source: e && !d ? N.yp.OOP_DEFAULT : N.yp.USER_OVERRIDE,
            enabledOOP: e,
            enabledLegacy: null != _ ? _ : c,
            overlayMethod: u ? t : N.Ue.Hook,
            reason: "Enabled from persistent",
        };
    }
    let A = ex(s.id, a);
    if (null != A) {
        let e = A.enabledOOP,
            t = A.enabled,
            n = e ? N.Ue.OutOfProcess : N.Ue.Hook;
        return {
            source: e && !d ? N.yp.OOP_DEFAULT_DATABASE : N.yp.DATABASE,
            enabledOOP: e,
            enabledLegacy: t,
            overlayMethod: u ? n : N.Ue.Hook,
            reason: "Enabled from game record",
        };
    }
    return {
        source: N.yp.DEFAULT,
        enabledOOP: u,
        enabledLegacy: !1,
        overlayMethod: u ? N.Ue.OutOfProcess : N.Ue.Disabled,
        reason: "Default enablement",
    };
}
function eV(e) {
    let t = eu.enableDetection[eU(e)] ?? (null != e.processGame ? eu.enableDetection[eU((0, V.Un)(e))] : void 0);
    return null == t || t;
}
function eH(e) {
    return !e.hidden && eV(e);
}
function ej() {
    c.w.set(W, eu);
}
function eW(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : p.A,
        a = {
            ...e,
            played:
                null != e.lastFocused && 0 !== e.lastFocused
                    ? l()(new Date(e.lastFocused * U.A.Millis.SECOND)).fromNow()
                    : " ",
            overlay: (function (e) {
                let t = (0, V.Un)(e),
                    n = eu.enableOverlay[eU(t)],
                    i = eu.enableOverlayV3[eU(t)];
                if (null != n || null != i) return n ?? i;
                let r = eB(t);
                return r.enabledLegacy || r.enabledOOP;
            })(e),
            verified: n.isGameInDatabase(e),
            detectable: eV(e),
        },
        s = ex(e.id, r);
    return (null != s && (a.overlayWarn = s.warn), a);
}
function eY() {
    let e = !1;
    return (
        (Q = a()
            .values(v.A.libraryApplications)
            .reduce((t, n) => {
                let i = D.A.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of M.A.getLaunchOptions(n.id, n.branchId)) {
                    let a = `${n.id}:${n.branchId}`;
                    q.has(a) || ((e = !0), q.add(a));
                    let { fullExecutablePath: s } = r,
                        l = s.replace(/\\/g, "/").toLowerCase();
                    ((ed[l] = i.id),
                        t.push({ id: i.id, name: i.name, exePath: l, cmdLine: "", lastFocused: 0, add: !0 }));
                }
                return t;
            }, [])),
        e && eK(),
        e
    );
}
function eK() {
    if (!__OVERLAY__ && x.isPlatformEmbedded) {
        let e = [...Q, ...a().values(eu.gameOverrides)];
        O.Ay.setGameCandidateOverrides(e);
    }
}
function e$(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                (!(function (e) {
                    if (null == e.processGame || !("pid" in e) || "number" != typeof e.pid) return;
                    let t = es.get(e.pid);
                    null != t &&
                        (es.delete(e.pid),
                        (eu.gamesSeen = eu.gamesSeen.filter((e) => null != e.processGame || eU(e) !== t)));
                })(e),
                eu.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = null == e.processGame ? eu.gameOverrides[eU(e)] : null;
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        if (
                            (t.processGame !== e.processGame && (t.processGame = e.processGame),
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && eU(t) !== eU(e))
                        ) {
                            var n, i;
                            let r, a, s, l;
                            ((n = eU(t)),
                                (i = eU(e)),
                                null != (r = eu.gameOverrides[n]) &&
                                    ((eu.gameOverrides[i] = r), delete eu.gameOverrides[n]),
                                null != (a = eu.enableOverlay[n]) &&
                                    ((eu.enableOverlay[i] = a), delete eu.enableOverlay[n]),
                                null != (s = eu.enableOverlayV3[n]) &&
                                    ((eu.enableOverlayV3[i] = s), delete eu.enableOverlayV3[n]),
                                null != (l = eu.enableDetection[n]) &&
                                    ((eu.enableDetection[i] = l), delete eu.enableDetection[n]),
                                (t.exePath = e.exePath));
                        }
                        return (ey(t, e), !0);
                    }
                    return !1;
                }))
            );
            else {
                let t;
                if (e.hidden) return;
                (eu.gamesSeen.unshift(
                    ((t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused }),
                    null != e.id && (t.id = e.id),
                    null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId),
                    null != e.name && (t.name = e.name),
                    e.add && (t.add = !0),
                    e.block && (t.block = !0),
                    null != e.distributor && (t.distributor = e.distributor),
                    null != e.gameName && (t.gameName = e.gameName),
                    null != e.processGame && (t.processGame = e.processGame),
                    ey(t, e),
                    t),
                ),
                    "number" == typeof e.pid && null == e.processGame && es.set(e.pid, eU(e)));
            }
        }),
        eu.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        ej(),
        w.A.setRecentGames(ez().map((e) => eW(e, eq, D.A, v.A))));
}
function ez() {
    let e = a().values(eu.gameOverrides);
    return eu.gamesSeen.filter((e) => void 0 === eu.gameOverrides[eU(e)]).concat(e);
}
if (Y) {
    let e = function () {
        let e = [],
            t = new Set();
        i = {};
        let n = D.A.games,
            r = F.A.nonGames,
            a = new Set();
        ($.forEach((e) => {
            (e.executables ?? []).forEach((e) => {
                a.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...r].filter((e) => !(e.executables ?? []).some((e) => eC.has(e.name.toLowerCase()))),
                ...$,
            ].forEach((n) => {
                let i = null != n.executables ? n.executables : [],
                    r = {};
                if (
                    (i.forEach((e) => {
                        let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
                        (null == r[n] && (r[n] = []), r[n].push(e.name), e.isLauncher && t.add(e.name));
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
            O.Ay.setObservedGamesCallback(
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
                            (a.push(i), s.push({ game: i, outcome: { kind: "non_game" } }));
                            continue;
                        }
                        ((i.isLauncher = i.isLauncher || t.has(i.exeName)),
                            i.isLauncher && null != i.id && (r[i.id] = i),
                            (i.windowHandle = (function (e, t) {
                                if (void 0 === t) {
                                    let t = O.Ay.getDiscordUtils();
                                    if (null != t && null != t.getWindowHandleFromPid) {
                                        let n = t.getWindowHandleFromPid(e);
                                        return null != n && "0" !== n ? n : null;
                                    }
                                    return null;
                                }
                                return "0" === t ? null : t;
                            })(i.pid, i.windowHandle)));
                        let e = eD(i);
                        if (null != e) {
                            (n.push(i),
                                s.push({
                                    game: i,
                                    outcome: {
                                        kind: "observed_app",
                                        appName: e.name,
                                        streamerTool: e.streamerTool ?? !1,
                                    },
                                }));
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
                        (o.push(i), s.push({ game: i, outcome: { kind: "passed" } }));
                    }
                    ((eN = { timestamp: Date.now(), totalFromNative: l, entries: s }), (e = o));
                    let d = n.filter(ev).length;
                    for (let t of (d !== eA &&
                        ((eA = d), u.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: eA })),
                    (ee = null != et ? [et, ...e] : e))) {
                        let e = eu.gameOverrides[eU(t)];
                        e?.add === !0 && t.hidden && ((ec[eU(t)] = !0), (t.hidden = !1));
                    }
                    ((en = a), (eo = n), (i = r), eP(), (el = en.length > 0 ? en[0] : null));
                    let c = [];
                    for (let e of en) e.pid in ep || ((ep[e.pid] = e), c.push(e));
                    let _ = [];
                    for (let e of Object.values(ep)) en.some((t) => t.pid === e.pid) || (_.push(e), delete ep[e.pid]);
                    (j.info("Running Non-Games Changed", {
                        runningNonGames: en,
                        added: c,
                        removed: _,
                        previousNonGames: ep,
                    }),
                        u.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: en, added: c, removed: _ }));
                },
                b.default.getCurrentUser()?.id,
            ),
            eK(),
            O.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, i] of e.entries()) {
                        let e = t[n],
                            r = D.A.findGame(i),
                            a = D.A.findGame(e),
                            s = (e?.id !== "4294967293" ? e?.id : a?.id) ?? "";
                        P.default.track(H.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: H.yTV.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: i.name,
                            orig_game_name_v1: i.origGameName,
                            game_id_v1: r?.id,
                            distributor_v1: i.distributor,
                            verified_v1: (0, B.PQ)(i.exePath, r?.executables ?? []),
                            is_launcher_v1: i.isLauncher,
                            game_detection_enabled_v1: eV(i),
                            executable_path_v1: (0, B.Ic)(i.exePath),
                            distributor_game_id_v1: i.sku,
                            hidden_by_distributor_v1: i.hidden,
                            game_metadata_v1: (0, y.MT)(i),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: s,
                            distributor_v2: e.distributor,
                            verified_v2: (0, B.PQ)(e.exePath, a?.executables ?? []),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eV(e),
                            executable_path_v2: (0, B.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, y.MT)(e),
                        });
                    }
            }),
            O.Ay.setGameDetectionErrorCallback((e, t, n, i, r) => {}));
    };
    e_ = function () {
        return (
            !!D.A.hasAttemptedFetch &&
            !!F.A.hasAttemptedFetch &&
            (null != eE && eE(),
            (eE = (0, o.O)(
                () => {
                    ((eE = null), e(), eq.emitChange());
                },
                { timeout: 2e3 },
            )),
            !1)
        );
    };
}
function eX() {
    I.A.hasLoadedExperiments && K.length > 0 && (e$(K), (K = []));
}
class eZ extends d.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = c.w.get(W) ?? {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableOverlayV3: {},
            enableDetection: {},
        };
        eu.gameOverrides = {};
        let t = !1;
        if (
            (a()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = eU(e);
                    (0, y.n1)(e) || (eu.gameOverrides[t] = e);
                }),
            (eu.enableOverlay = e.enableOverlay ?? {}),
            (eu.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (eu.enableDetection = e.enableDetection ?? {}),
            eK(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        (this.waitFor(D.A, F.A, M.A, I.A, f.A, p.A, v.A, b.default),
            (K = e.gamesSeen.filter((e) => !(0, y.n1)(e))),
            this.syncWith([f.A], eX),
            this.syncWith([v.A, D.A, M.A], a().throttle(eY, 1e3)),
            this.syncWith([p.A], eF),
            t && ej());
    }
    getVisibleGame() {
        return er;
    }
    getCurrentGameForAnalytics() {
        return ei;
    }
    getCurrentNonGameForAnalytics() {
        return el;
    }
    getVisibleRunningGames() {
        return ee.filter(eH);
    }
    getRunningGames() {
        return ee;
    }
    getDebugRunningGame() {
        return et;
    }
    getDetectionDebug() {
        return eN;
    }
    getRunningNonGames() {
        return en;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of ee) null != ed[t.exePath] && e.push(ed[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => D.A.findGame(e))
            .filter(G.Vq)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        return ee.find((t) => t.pid === e) ?? null;
    }
    getSdkResolutionForPID(e) {
        return ea.getResolution(e);
    }
    getGameForName(e) {
        return ee.find((t) => t.name?.toLowerCase() === e.toLowerCase()) ?? null;
    }
    getGameOrTransformedSubgameForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? (0, V.Un)(t) : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        if (null != t) {
            let { id: e } = (0, V.Un)(t);
            return null != e ? i[e] : null;
        }
        return null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e),
            n = null != t ? (0, V.Un)(t) : null;
        if (null == n || n.isLauncher || null == n.id) return null;
        let i = ex(n.id);
        return null != i ? { ...i } : null;
    }
    shouldElevateProcessForPID(e) {
        return null != eh && eh === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eI && eI === e;
    }
    canCollectExecutableFingerprintsForRunningGames() {
        return Y;
    }
    getCandidateGames() {
        return J.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === eu.gameOverrides[eU(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === K.length;
    }
    isGameSeen(e) {
        return ez().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = ez();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eU(e);
                n = n.filter((e) => eU(e) !== t);
            }
        }
        return (t && n.sort((e, t) => t.lastFocused - e.lastFocused), n);
    }
    getSeenGameByName(e) {
        return eu.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return eo.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(eu.gameOverrides);
    }
    getOverrideForGame(e) {
        return null == e.processGame ? eu.gameOverrides[eU(e)] : void 0;
    }
    getOverlayEnabledForGame(e) {
        let t = (0, V.Un)(e);
        if (t.isLauncher || t.elevated || t.sandboxed)
            return (j.verbose("getOverlayEnabledForGame: Overlay not supported.", t), !1);
        let n = eB(t);
        return n.enabledLegacy || n.enabledOOP;
    }
    getGameOverlayStatus(e) {
        let t = (0, V.Un)(e);
        if (t.isLauncher || t.elevated || t.sandboxed)
            return (j.verbose("getGameOverlayStatus: Overlay not supported.", t), null);
        let n = eB(t);
        return n.enabledLegacy || n.enabledOOP ? n : null;
    }
    getObservedAppNameForWindow(e) {
        return eo.find((t) => (0, T.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return X && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eV(e);
    }
    addExecutableTrackedByAnalytics(e) {
        eg.add((0, A.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return Z[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return Z[e]?.state === "running";
    }
}
let eq = new eZ(u.h, {
        RUNNING_GAMES_CHANGE: function (e) {
            e$(ee);
        },
        RUNNING_NON_GAMES_CHANGE: function () {},
        CANDIDATE_GAMES_CHANGE: function (e) {
            J = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            X = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ((eh = t), (eI = null));
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            eh = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ((eI = t), (eh = null));
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t,
                n = e.pid,
                i = ee.find((e) => e.pid === n);
            if (i?.processGame != null) return !1;
            if (null == i) {
                let e = J.find((e) => e.pid === n);
                if (null == e) return;
                (((i = { ...e }).hidden = !1), ee.push(i), (ec[(t = eU(i))] = !0));
            } else ((t = eU(i)), i.hidden && (ec[t] = !0), (i.hidden = !1));
            ((null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)),
                (eu.gameOverrides[t] = { ...i, add: !0 }),
                e$(ee),
                eK(),
                ej(),
                eP());
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e,
                r = (0, V.Un)(t),
                a = n !== eu.enableOverlay[eU(r)],
                s = i !== eu.enableOverlayV3[eU(r)];
            (a && (eu.enableOverlay[eU(r)] = n),
                s && null != i && (eu.enableOverlayV3[eU(r)] = i),
                ej(),
                !__OVERLAY__ &&
                    null != (null != r.id ? D.A.getDetectableGame(r.id) : null) &&
                    (a && (0, g.Q3)(n, g.OverlayToggledClientSettingType.LEGACY_GAME, r.id ?? null),
                    s && null != i && (0, g.Q3)(i, g.OverlayToggledClientSettingType.OOP_GAME, r.id ?? null)));
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = eV(t);
            ((eu.enableDetection[eU(t)] = !n),
                ej(),
                eb(),
                P.default.track(H.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n }));
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            if (null != e.game.processGame) return !1;
            let t = eU(e.game),
                n = eu.gameOverrides[t];
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
            let r = eU(n);
            (delete eu.gameOverrides[t],
                (eu.gameOverrides[r] = n),
                eR(eu.enableOverlay, t, r),
                eR(eu.enableDetection, t, r),
                eR(ec, t, r),
                eu.gamesSeen.forEach((n) => {
                    eU(n) === t && (n.name = e.newName);
                }));
            let a = !1;
            (ee.forEach((n) => {
                eU(n) === t && ((n.name = e.newName), (a = !0));
            }),
                eK(),
                ej(),
                a && eP());
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = eU(e.game);
            (delete eu.gameOverrides[t],
                delete eu.enableOverlay[t],
                delete eu.enableDetection[t],
                (eu.gamesSeen = eu.gamesSeen.filter((e) => eU(e) !== t)),
                ec[t] &&
                    (ee.forEach((e) => {
                        t === eU(e) && (e.hidden = !0);
                    }),
                    delete ec[t]),
                ee.some((e) => eU(e) === t) && eP(),
                eK(),
                ej());
        },
        GAMES_DATABASE_UPDATE: function () {
            return (e_(), eM());
        },
        GAMES_DATABASE_FETCH_FAIL: e_,
        NON_GAMES_DATABASE_UPDATE: e_,
        NON_GAMES_DATABASE_FETCH_FAIL: e_,
        GAME_LAUNCH_SUCCESS: function (e) {
            if (__OVERLAY__ || !x.isPlatformEmbedded) return;
            let t = O.Ay.getDiscordUtils().notifyGameLaunched;
            if (null == t) return;
            let n = D.A.getDetectableGame(e.applicationId);
            null != n && t(n.id, n.name, e.pids ?? []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            eK();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            ((em = e.level), (eS = e.intervalSeconds));
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            ((em = null), (eS = null), eT.clear());
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => ({ pid: e.pid, cleanedExePath: (0, A.v)(e.exePath) ?? e.exePath }))
                .filter((e) => {
                    if (eT.has(e.pid) || eg.has(e.cleanedExePath)) return !1;
                    let t = z.some((t) => e.cleanedExePath.includes(t));
                    return (t && eT.add(e.pid), t);
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                P.default.track(H.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: z,
                    paths: t,
                    debugging_level: em,
                    interval_seconds: eS,
                });
        },
        SYSTEM_SERVICE_INITIALIZE: function (e) {
            let { status: t, modules: n } = e;
            for (let e of n) Z[e] = t;
        },
        RUNNING_GAME_SET_DEBUG_GAME: function (e) {
            (null != et && (ee = ee.filter((e) => e !== et)), null != (et = e.game) && (ee = [et, ...ee]), eP());
        },
        SOCIAL_SDK_GAMES_UPDATE: function (e) {
            let { canonicalGameIdByPid: t } = e;
            return (ea.setCanonicalGameIds(t), eM());
        },
    }),
    eQ = eq;
