let i;
(n.d(t, { Xr: () => eH, Ay: () => eJ, hw: () => eV, Es: () => ew, Zh: () => ey, xU: () => eY }), n(321073), n(667532));
var r = n(435558),
    a = n.n(r),
    s = n(536637),
    l = n.n(s),
    o = n(570138),
    d = n(167789),
    c = n(17928),
    u = n(506774),
    _ = n(73153),
    E = n(56562),
    A = n(573648),
    h = n(306044),
    f = n(626584),
    I = n(736056),
    p = n(108822),
    T = n(311043),
    m = n(830012),
    g = n(211753),
    S = n(206885),
    N = n(41984),
    C = n(918825),
    O = n(439372),
    R = n(19575);
class L extends O.A {
    ownedLocks = new Set();
    acquireLock = (e) => {
        if (this.ownedLocks.has(e)) return !0;
        let t = `discord-overlay-global-owner-lock-${e}`;
        return !1 !== R.Ay.AcquireGlobalLock(t) && (this.ownedLocks.add(e), !0);
    };
}
let y = new L();
var D = n(871633),
    v = n(760751),
    b = n(189081),
    M = n(287809),
    P = n(340829),
    U = n(174459),
    w = n(927813),
    G = n(339586),
    x = n(403362),
    k = n(723702),
    F = n(9302),
    B = n(953384),
    V = n(973522),
    H = n(863160),
    j = n(652215);
let W = new f.A("RunningGameStore"),
    Y = "RunningGameStore",
    K = !__OVERLAY__ && ((0, k.isDesktop)() || S.O),
    $ = [],
    z = [
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
            name: A.A.get(j.fg2.SPOTIFY).name,
        },
    ],
    X = [],
    q = !0,
    Z = { "input-service": { state: "unknown" }, "tool-service": { state: "unknown" } },
    Q = new Set(),
    J = [],
    ee = [],
    et = [],
    en = null,
    ei = [],
    er = null,
    ea = null,
    es = new H.Ig(),
    el = new Map(),
    eo = null,
    ed = [],
    ec = {},
    eu = {},
    e_ = { gamesSeen: [], gameOverrides: {}, enableOverlay: {}, enableOverlayV3: {}, enableDetection: {} },
    eE = function () {},
    eA = null,
    eh = 0,
    ef = null,
    eI = null,
    ep = {},
    eT = {},
    em = new Set(),
    eg = new Set(),
    eS = null,
    eN = null,
    eC = null,
    eO = new Map(),
    eR = new Map();
function eL(e, t, n) {
    let i = e[t];
    void 0 !== i && (delete e[t], (e[n] = i));
}
function ey(e) {
    return e;
}
function eD(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function ev(e) {
    let t = eR.get(e.name?.toLowerCase() ?? "");
    if (null != t) return t;
    let n = null != e.exeName && "" !== e.exeName ? e.exeName : (e.exePath.split("/").pop()?.split("\\").pop() ?? ""),
        i = eO.get(n.toLowerCase());
    if (null != i) return i;
    for (let [t, n] of eO) {
        let i = e.exePath.toLowerCase(),
            r = t.toLowerCase();
        if (i.endsWith(r)) {
            let e = i.length - r.length;
            if (0 === e || "/" === i[e - 1] || "\\" === i[e - 1]) return n;
        }
    }
    return null;
}
function eb(e) {
    let t = ev(e);
    return t?.streamerTool === !0;
}
function eM() {
    let e = ea;
    null != (ea = et.find(ej) ?? null) && (ea.start = null != e && e.pid === ea.pid ? e.start : Date.now());
}
function eP() {
    let { games: e, changed: t } = es.resolve(et);
    return (e !== et && ((et = e), eU()), t);
}
function eU() {
    if ((et = es.resolve(et).games).length > 0) {
        let e = er;
        ((er = et[0]), null != e && er.pid === e.pid ? (er.start = e.start) : (er.start = Date.now()));
    } else er = null;
    eM();
    let e = [];
    for (let t of et) t.pid in ep || ((ep[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ep)) et.some((t) => t.pid === e.pid) || (t.push(e), delete ep[e.pid], el.delete(e.pid));
    (W.info("Running Games Changed", { runningGames: et, added: e, removed: t, previousGames: ep }),
        _.h.dispatch({ type: "RUNNING_GAMES_CHANGE", games: et, added: e, removed: t }));
}
function ew(e) {
    if ((0, D.n1)(e)) return `${e.exePath}:${e.id}`;
    let t = null != e.name ? e.name : "";
    return `${e.exePath}:${t}`;
}
z.forEach((e) => {
    (eR.set(e.name.toLowerCase(), e),
        (e.executables ?? []).forEach((t) => {
            eO.set(t.name.toLowerCase(), e);
        }));
});
let eG = new Set(["1314395942253756416"]);
function ex(e) {
    return null != e && eG.has(e);
}
function ek(e) {
    var t;
    let n,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.A;
    if (null == e) return;
    let r = i.getGame(e);
    return null != r
        ? ((t = (0, F.supportsOutOfProcess)()),
          (n = ex(r.id)),
          {
              compatibilityHook: r.overlayCompatibilityHook ?? E.gH.compatibilityHook,
              warn: r.overlayWarn ?? E.gH.warn,
              enabled: r.overlay ?? E.gH.enabled,
              enabledOOP: (t && !n) || E.gH.enabledOOP,
              allowHook: r.hook ?? E.gH.allowHook,
              supportsOutOfProcessOverlay: r.supportsOutOfProcessOverlay ?? E.gH.supportsOutOfProcessOverlay,
          })
        : void 0;
}
let eF = new Set();
function eB() {
    let e = new Set(et.map((e) => (0, H.Un)(e).id).filter((e) => null != e && null != T.A.getGame(e))),
        t = e.size !== eF.size || [...e].some((e) => !eF.has(e));
    return ((eF = e), t);
}
function eV(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [i, r, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [v.A, b.A, T.A],
        s = (0, H.Un)(e);
    if (s.isLauncher)
        return {
            source: N.yp.LAUNCHER,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: N.Ue.Disabled,
            reason: "Game is launcher",
        };
    if ("pid" in s && !y.acquireLock(s.pid))
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
    let o = (0, F.supportsOutOfProcess)() && !n,
        d = ex("id" in (t = l ?? s) ? (t.id ?? null) : (v.A.findGame(t)?.id ?? null)),
        c = g.x.legacyEnabled,
        u = o && !d,
        _ = e_.enableOverlay[ew(s)],
        E = e_.enableOverlayV3[ew(s)];
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
    let A = ek(s.id, a);
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
function eH(e) {
    let t = e_.enableDetection[ew(e)] ?? (null != e.processGame ? e_.enableDetection[ew((0, H.Un)(e))] : void 0);
    return null == t || t;
}
function ej(e) {
    return !e.hidden && eH(e);
}
function eW() {
    u.w.set(Y, e_);
}
function eY(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : T.A,
        a = {
            ...e,
            played:
                null != e.lastFocused && 0 !== e.lastFocused
                    ? l()(new Date(e.lastFocused * w.A.Millis.SECOND)).fromNow()
                    : " ",
            overlay: (function (e) {
                let t = (0, H.Un)(e),
                    n = e_.enableOverlay[ew(t)],
                    i = e_.enableOverlayV3[ew(t)];
                if (null != n || null != i) return n ?? i;
                let r = eV(t);
                return r.enabledLegacy || r.enabledOOP;
            })(e),
            verified: n.isGameInDatabase(e),
            detectable: eH(e),
        },
        s = ek(e.id, r);
    return (null != s && (a.overlayWarn = s.warn), a);
}
function eK() {
    let e = !1;
    return (
        (J = a()
            .values(b.A.libraryApplications)
            .reduce((t, n) => {
                let i = v.A.getDetectableGame(n.id);
                if (null == i) return t;
                for (let r of P.A.getLaunchOptions(n.id, n.branchId)) {
                    let a = `${n.id}:${n.branchId}`;
                    Q.has(a) || ((e = !0), Q.add(a));
                    let { fullExecutablePath: s } = r,
                        l = s.replace(/\\/g, "/").toLowerCase();
                    ((ec[l] = i.id),
                        t.push({ id: i.id, name: i.name, exePath: l, cmdLine: "", lastFocused: 0, add: !0 }));
                }
                return t;
            }, [])),
        e && e$(),
        e
    );
}
function e$() {
    if (!__OVERLAY__ && k.isPlatformEmbedded) {
        let e = [...J, ...a().values(e_.gameOverrides)];
        R.Ay.setGameCandidateOverrides(e);
    }
}
function ez(e) {
    null != e &&
        0 !== e.length &&
        (e.forEach((e) => {
            if (
                (!(function (e) {
                    if (null == e.processGame || !("pid" in e) || "number" != typeof e.pid) return;
                    let t = el.get(e.pid);
                    null != t &&
                        (el.delete(e.pid),
                        (e_.gamesSeen = e_.gamesSeen.filter((e) => null != e.processGame || ew(e) !== t)));
                })(e),
                e_.gamesSeen.some((t) => {
                    if (t.name === e.name || (null != t.id && t.id === e.id)) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = null == e.processGame ? e_.gameOverrides[ew(e)] : null;
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        if (
                            (t.processGame !== e.processGame && (t.processGame = e.processGame),
                            t.distributor !== e.distributor && (t.distributor = e.distributor),
                            t.gameName !== e.gameName && (t.gameName = e.gameName),
                            t.id === e.id && ew(t) !== ew(e))
                        ) {
                            var n, i;
                            let r, a, s, l;
                            ((n = ew(t)),
                                (i = ew(e)),
                                null != (r = e_.gameOverrides[n]) &&
                                    ((e_.gameOverrides[i] = r), delete e_.gameOverrides[n]),
                                null != (a = e_.enableOverlay[n]) &&
                                    ((e_.enableOverlay[i] = a), delete e_.enableOverlay[n]),
                                null != (s = e_.enableOverlayV3[n]) &&
                                    ((e_.enableOverlayV3[i] = s), delete e_.enableOverlayV3[n]),
                                null != (l = e_.enableDetection[n]) &&
                                    ((e_.enableDetection[i] = l), delete e_.enableDetection[n]),
                                (t.exePath = e.exePath));
                        }
                        return (eD(t, e), !0);
                    }
                    return !1;
                }))
            );
            else {
                let t;
                if (e.hidden) return;
                (e_.gamesSeen.unshift(
                    ((t = { exePath: e.exePath, cmdLine: e.cmdLine, lastFocused: e.lastFocused }),
                    null != e.id && (t.id = e.id),
                    null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId),
                    null != e.name && (t.name = e.name),
                    e.add && (t.add = !0),
                    e.block && (t.block = !0),
                    null != e.distributor && (t.distributor = e.distributor),
                    null != e.gameName && (t.gameName = e.gameName),
                    null != e.processGame && (t.processGame = e.processGame),
                    eD(t, e),
                    t),
                ),
                    "number" == typeof e.pid && null == e.processGame && el.set(e.pid, ew(e)));
            }
        }),
        e_.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
        eW(),
        G.A.setRecentGames(eX().map((e) => eY(e, eQ, v.A, b.A))));
}
function eX() {
    let e = a().values(e_.gameOverrides);
    return e_.gamesSeen.filter((e) => void 0 === e_.gameOverrides[ew(e)]).concat(e);
}
if (K) {
    let e = function () {
        let e = [],
            t = new Set();
        i = {};
        let n = v.A.games,
            r = B.A.nonGames,
            a = new Set();
        (z.forEach((e) => {
            (e.executables ?? []).forEach((e) => {
                a.add(e.name.toLowerCase());
            });
        }),
            [
                ...[...n, ...r].filter((e) => !(e.executables ?? []).some((e) => eO.has(e.name.toLowerCase()))),
                ...z,
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
                        if (null != i.id && null != B.A.getById(i.id)) {
                            (a.push(i), s.push({ game: i, outcome: { kind: "non_game" } }));
                            continue;
                        }
                        ((i.isLauncher = i.isLauncher || t.has(i.exeName)),
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
                            })(i.pid, i.windowHandle)));
                        let e = ev(i);
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
                        if (v.A.shouldBlock(i)) {
                            let e = v.A.getBlockReason(i);
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
                    ((eC = { timestamp: Date.now(), totalFromNative: l, entries: s }), (e = o));
                    let d = n.filter(eb).length;
                    for (let t of (d !== eh &&
                        ((eh = d), _.h.dispatch({ type: "RUNNING_STREAMER_TOOLS_CHANGE", count: eh })),
                    (et = null != en ? [en, ...e] : e))) {
                        let e = e_.gameOverrides[ew(t)];
                        e?.add === !0 && t.hidden && ((eu[ew(t)] = !0), (t.hidden = !1));
                    }
                    ((ei = a), (ed = n), (i = r), eU(), (eo = ei.length > 0 ? ei[0] : null));
                    let c = [];
                    for (let e of ei) e.pid in eT || ((eT[e.pid] = e), c.push(e));
                    let u = [];
                    for (let e of Object.values(eT)) ei.some((t) => t.pid === e.pid) || (u.push(e), delete eT[e.pid]);
                    (W.info("Running Non-Games Changed", {
                        runningNonGames: ei,
                        added: c,
                        removed: u,
                        previousNonGames: eT,
                    }),
                        _.h.dispatch({ type: "RUNNING_NON_GAMES_CHANGE", nonGames: ei, added: c, removed: u }));
                },
                M.default.getCurrentUser()?.id,
            ),
            e$(),
            R.Ay.setGameDetectionCallback((e, t) => {
                if (e.length === t.length)
                    for (let [n, i] of e.entries()) {
                        let e = t[n],
                            r = v.A.findGame(i),
                            a = v.A.findGame(e),
                            s = (e?.id !== "4294967293" ? e?.id : a?.id) ?? "";
                        U.default.track(j.HAw.GAME_DETECTION_COMPARISON, {
                            game_platform: o.y.DESKTOP,
                            detection_method: "process_observer_v2",
                            game_v1: i.name,
                            orig_game_name_v1: i.origGameName,
                            game_id_v1: r?.id,
                            distributor_v1: i.distributor,
                            verified_v1: (0, V.PQ)(i.exePath, r?.executables ?? []),
                            is_launcher_v1: i.isLauncher,
                            game_detection_enabled_v1: eH(i),
                            executable_path_v1: (0, V.Ic)(i.exePath),
                            distributor_game_id_v1: i.sku,
                            hidden_by_distributor_v1: i.hidden,
                            game_metadata_v1: (0, D.MT)(i),
                            game_v2: e.name,
                            orig_game_name_v2: e.origGameName,
                            game_id_v2: s,
                            distributor_v2: e.distributor,
                            verified_v2: (0, V.PQ)(e.exePath, a?.executables ?? []),
                            is_launcher_v2: e.isLauncher,
                            game_detection_enabled_v2: eH(e),
                            executable_path_v2: (0, V.Ic)(e.exePath),
                            distributor_game_id_v2: e.sku,
                            hidden_by_distributor_v2: e.hidden,
                            game_metadata_v2: (0, D.MT)(e),
                        });
                    }
            }),
            R.Ay.setGameDetectionErrorCallback((e, t, n, i, r) => {}));
    };
    eE = function () {
        return (
            !!v.A.hasAttemptedFetch &&
            !!B.A.hasAttemptedFetch &&
            (null != eA && eA(),
            (eA = (0, d.O)(
                () => {
                    ((eA = null), e(), eQ.emitChange());
                },
                { timeout: 2e3 },
            )),
            !1)
        );
    };
}
function eq() {
    I.A.hasLoadedExperiments && $.length > 0 && (ez($), ($ = []));
}
class eZ extends c.Ay.Store {
    static displayName = "RunningGameStore";
    initialize() {
        let e = u.w.get(Y) ?? {
            gamesSeen: [],
            gameOverrides: {},
            enableOverlay: {},
            enableOverlayV3: {},
            enableDetection: {},
        };
        e_.gameOverrides = {};
        let t = !1;
        if (
            (a()
                .values(e.gameOverrides ?? {})
                .forEach((e) => {
                    let t = ew(e);
                    (0, D.n1)(e) || (e_.gameOverrides[t] = e);
                }),
            (e_.enableOverlay = e.enableOverlay ?? {}),
            (e_.enableOverlayV3 = e.enableOverlayV3 ?? {}),
            (e_.enableDetection = e.enableDetection ?? {}),
            e$(),
            Array.isArray(e.gamesSeen))
        )
            for (let n of e.gamesSeen)
                "number" == typeof n.id && ((n.nativeProcessObserverId = n.id), delete n.id, (t = !0));
        (this.waitFor(v.A, B.A, P.A, I.A, p.A, T.A, b.A, M.default),
            ($ = e.gamesSeen.filter((e) => !(0, D.n1)(e))),
            this.syncWith([p.A], eq),
            this.syncWith([b.A, v.A, P.A], a().throttle(eK, 1e3)),
            this.syncWith([T.A], eB),
            t && eW());
    }
    getVisibleGame() {
        return ea;
    }
    getCurrentGameForAnalytics() {
        return er;
    }
    getCurrentNonGameForAnalytics() {
        return eo;
    }
    getVisibleRunningGames() {
        return et.filter(ej);
    }
    getRunningGames() {
        return et;
    }
    getDebugRunningGame() {
        return en;
    }
    getDetectionDebug() {
        return eC;
    }
    getRunningNonGames() {
        return ei;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of et) null != ec[t.exePath] && e.push(ec[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => v.A.findGame(e))
            .filter(x.Vq)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        return et.find((t) => t.pid === e) ?? null;
    }
    getSdkResolutionForPID(e) {
        return es.getResolution(e);
    }
    getGameForName(e) {
        return et.find((t) => t.name?.toLowerCase() === e.toLowerCase()) ?? null;
    }
    getGameOrTransformedSubgameForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? (0, H.Un)(t) : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        if (null != t) {
            let { id: e } = (0, H.Un)(t);
            return null != e ? i[e] : null;
        }
        return null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e),
            n = null != t ? (0, H.Un)(t) : null;
        if (null == n || n.isLauncher || null == n.id) return null;
        let i = ek(n.id);
        return null != i ? { ...i } : null;
    }
    shouldElevateProcessForPID(e) {
        return null != ef && ef === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != eI && eI === e;
    }
    canCollectExecutableFingerprintsForRunningGames() {
        return K;
    }
    getCandidateGames() {
        return ee.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === e_.gameOverrides[ew(e)]);
    }
    isGamesSeenLoaded() {
        return 0 === $.length;
    }
    isGameSeen(e) {
        return eX().some((t) => t.id === e);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eX();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = ew(e);
                n = n.filter((e) => ew(e) !== t);
            }
        }
        return (t && n.sort((e, t) => t.lastFocused - e.lastFocused), n);
    }
    getSeenGameByName(e) {
        return e_.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return ed.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(e_.gameOverrides);
    }
    getOverrideForGame(e) {
        return null == e.processGame ? e_.gameOverrides[ew(e)] : void 0;
    }
    getOverlayEnabledForGame(e) {
        let t = (0, H.Un)(e);
        if (t.isLauncher || t.elevated || t.sandboxed)
            return (W.verbose("getOverlayEnabledForGame: Overlay not supported.", t), !1);
        let n = eV(t);
        return n.enabledLegacy || n.enabledOOP;
    }
    getGameOverlayStatus(e) {
        let t = (0, H.Un)(e);
        if (t.isLauncher || t.elevated || t.sandboxed)
            return (W.verbose("getGameOverlayStatus: Overlay not supported.", t), null);
        let n = eV(t);
        return n.enabledLegacy || n.enabledOOP ? n : null;
    }
    getObservedAppNameForWindow(e) {
        return ed.find((t) => (0, m.A)(e, t.windowHandle))?.name ?? null;
    }
    get canShowAdminWarning() {
        return q && !this.isSystemServiceInitialized("input-service");
    }
    isDetectionEnabled(e) {
        return eH(e);
    }
    addExecutableTrackedByAnalytics(e) {
        eg.add((0, h.v)(e) ?? e);
    }
    getSystemServiceStatus(e) {
        return Z[e] ?? { state: "unknown" };
    }
    isSystemServiceInitialized(e) {
        return Z[e]?.state === "running";
    }
}
let eQ = new eZ(_.h, {
        RUNNING_GAMES_CHANGE: function (e) {
            ez(et);
        },
        RUNNING_NON_GAMES_CHANGE: function () {},
        CANDIDATE_GAMES_CHANGE: function (e) {
            ee = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            q = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ((ef = t), (eI = null));
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            ef = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ((eI = t), (ef = null));
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t,
                n = e.pid,
                i = et.find((e) => e.pid === n);
            if (i?.processGame != null) return !1;
            if (null == i) {
                let e = ee.find((e) => e.pid === n);
                if (null == e) return;
                (((i = { ...e }).hidden = !1), et.push(i), (eu[(t = ew(i))] = !0));
            } else ((t = ew(i)), i.hidden && (eu[t] = !0), (i.hidden = !1));
            ((null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)),
                (e_.gameOverrides[t] = { ...i, add: !0 }),
                ez(et),
                e$(),
                eW(),
                eU());
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            let { game: t, newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e,
                r = (0, H.Un)(t),
                a = n !== e_.enableOverlay[ew(r)],
                s = i !== e_.enableOverlayV3[ew(r)];
            (a && (e_.enableOverlay[ew(r)] = n),
                s && null != i && (e_.enableOverlayV3[ew(r)] = i),
                eW(),
                !__OVERLAY__ &&
                    null != (null != r.id ? v.A.getDetectableGame(r.id) : null) &&
                    (a && (0, C.Q)(n, C.OverlayToggledClientSettingType.LEGACY_GAME, r.id ?? null),
                    s && null != i && (0, C.Q)(i, C.OverlayToggledClientSettingType.OOP_GAME, r.id ?? null)));
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = eH(t);
            ((e_.enableDetection[ew(t)] = !n),
                eW(),
                eM(),
                U.default.track(j.HAw.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n }));
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            if (null != e.game.processGame) return !1;
            let t = ew(e.game),
                n = e_.gameOverrides[t];
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
            let r = ew(n);
            (delete e_.gameOverrides[t],
                (e_.gameOverrides[r] = n),
                eL(e_.enableOverlay, t, r),
                eL(e_.enableDetection, t, r),
                eL(eu, t, r),
                e_.gamesSeen.forEach((n) => {
                    ew(n) === t && (n.name = e.newName);
                }));
            let a = !1;
            (et.forEach((n) => {
                ew(n) === t && ((n.name = e.newName), (a = !0));
            }),
                e$(),
                eW(),
                a && eU());
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = ew(e.game);
            (delete e_.gameOverrides[t],
                delete e_.enableOverlay[t],
                delete e_.enableDetection[t],
                (e_.gamesSeen = e_.gamesSeen.filter((e) => ew(e) !== t)),
                eu[t] &&
                    (et.forEach((e) => {
                        t === ew(e) && (e.hidden = !0);
                    }),
                    delete eu[t]),
                et.some((e) => ew(e) === t) && eU(),
                e$(),
                eW());
        },
        GAMES_DATABASE_UPDATE: function () {
            return (eE(), eP());
        },
        GAMES_DATABASE_FETCH_FAIL: eE,
        NON_GAMES_DATABASE_UPDATE: eE,
        NON_GAMES_DATABASE_FETCH_FAIL: eE,
        GAME_LAUNCH_SUCCESS: function (e) {
            if (__OVERLAY__ || !k.isPlatformEmbedded) return;
            let t = R.Ay.getDiscordUtils().notifyGameLaunched;
            if (null == t) return;
            let n = v.A.getDetectableGame(e.applicationId);
            null != n && t(n.id, n.name, e.pids ?? []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            e$();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            ((eS = e.level), (eN = e.intervalSeconds));
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            ((eS = null), (eN = null), em.clear());
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => ({ pid: e.pid, cleanedExePath: (0, h.v)(e.exePath) ?? e.exePath }))
                .filter((e) => {
                    if (em.has(e.pid) || eg.has(e.cleanedExePath)) return !1;
                    let t = X.some((t) => e.cleanedExePath.includes(t));
                    return (t && em.add(e.pid), t);
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                U.default.track(j.HAw.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: X,
                    paths: t,
                    debugging_level: eS,
                    interval_seconds: eN,
                });
        },
        SYSTEM_SERVICE_INITIALIZE: function (e) {
            let { status: t, modules: n } = e;
            for (let e of n) Z[e] = t;
        },
        RUNNING_GAME_SET_DEBUG_GAME: function (e) {
            (null != en && (et = et.filter((e) => e !== en)), null != (en = e.game) && (et = [en, ...et]), eU());
        },
        SOCIAL_SDK_GAMES_UPDATE: function (e) {
            let { canonicalGameIdByPid: t } = e;
            return (es.setCanonicalGameIds(t), eP());
        },
    }),
    eJ = eQ;
