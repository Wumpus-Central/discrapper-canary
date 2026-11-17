(n.d(t, { default: () => e_ }), n(321073));
var i = n(855986),
    r = n(499979),
    a = n(73153),
    s = n(684013),
    l = n(56562),
    o = n(635731),
    d = n(626584),
    c = n(343446),
    u = n(644727),
    _ = n(311043),
    E = n(293432),
    A = n(46653),
    f = n(760751),
    h = n(723702),
    I = n(9302),
    p = n(211753),
    m = n(206885),
    g = n(41984),
    T = n(181435);
let S = new Set([g.AR.INITIALIZING, g.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION]);
var N = n(515183),
    C = n(592598),
    O = n(682763),
    R = n(244055),
    L = n(394072);
n(672396);
var y = n(392164);
let D = new d.A("OverlayRenderStore"),
    b = g.V6.UNSET,
    v = !1,
    P = !1,
    M = (0, h.uF)() && h.isPlatformEmbedded && !__OVERLAY__,
    U = null,
    w = {},
    G = {},
    x = null,
    k = null,
    F = new Set([l.aI.FULLSCREEN, l.aI.BORDERLESS_FULLSCREEN, l.aI.UNKNOWN, l.aI.MINIMIZED]),
    B = new Set([l.aI.MINIMIZED, l.aI.UNKNOWN]),
    V = !1,
    H = new o.A(1e4);
function j(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : T.QJ.Info;
    (0, O.aS)({ pid: e, name: t, type: T.ON.Renderer, data: n, logType: i });
}
function W() {
    return R.A.isOverlayEnabled;
}
function Y(e) {
    return w[e] ?? null;
}
function K() {
    return Object.keys(w).map(Number);
}
function $(e, t, n) {
    let i = w[e]?.state;
    ((w = { ...w, [e]: { ...t } }), i !== t.state && s.A.trackOverlayStateChanged(e, i, t.state, n));
}
function X(e) {
    return e in w;
}
function z(e, t, n, i) {
    let r = Y(e);
    if (null == r) return void D.error(`Tried to set property ${t} to ${n} for untracked pid ${e}`);
    let a = { ...r };
    ((a[t] = n), $(e, a, i));
}
function q(e, t) {
    let n = Y(e);
    if (null == n) return;
    let i = n.timer;
    switch (t) {
        case g.sf.SCREEN_TYPE_RESOLUTION:
            i.screenTypeResolutionTimestamp = Date.now();
            break;
        case g.sf.MODULE_TRACKING:
            i.moduleTrackingTimestamp = Date.now();
            break;
        case g.sf.OVERLAY_RENDERING:
            i.overlayRenderingTimestamp = Date.now();
    }
    (z(e, "timer", i, "timeOverlayEvent"), eu.emitChange());
}
function Q(e, t) {
    switch (b) {
        case g.V6.UNSET:
            break;
        case g.V6.IN_PROCESS_V2:
            return {
                source: g.yp.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: g.Ue.Hook,
                reason: "Forced in-process overlay rendering",
            };
        case g.V6.OUT_OF_PROCESS_V3:
            return {
                source: g.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: g.Ue.OutOfProcess,
                reason: "Forced out-of-process overlay rendering",
            };
        case g.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: g.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: g.Ue.OutOfProcessLimitedInteraction,
                reason: "Forced out-of-process limited interaction overlay rendering",
            };
    }
    if (!(W() || v))
        return {
            source: g.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: g.Ue.Disabled,
            reason: "Overlay globally disabled",
        };
    let n = u.Ay.getGameOrTransformedSubgameForPID(e.pid);
    if (null == n)
        return {
            source: g.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: g.Ue.Disabled,
            reason: "No running game found for tracked game",
        };
    let i = (0, u.hw)(n);
    if (!(i.enabledLegacy || i.enabledOOP))
        return { source: i.source, enabledOOP: !1, enabledLegacy: !1, overlayMethod: g.Ue.Disabled, reason: i.reason };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: g.yp.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: g.Ue.Disabled,
            reason: "Overlay disabled for specific game",
        };
    if (!W() && v) {
        let e = (0, N.O4)(n);
        return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : g.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
        };
    }
    if (!(0, I.T6)())
        return { ...(0, N.O4)(n), source: g.yp.NO_OUT_OF_PROCESS_SUPPORT, reason: "supportsOutOfProcess failed" };
    if (!i.enabledOOP && i.enabledLegacy)
        return v
            ? { ...(0, N.O4)(n), source: g.yp.LEGACY_ENABLED, reason: "Legacy overlay enabled only" }
            : { ...i, overlayMethod: g.Ue.Disabled, source: g.yp.LEGACY_ENABLED, reason: "Legacy overlay disabled" };
    let r = f.A.findGame(n)?.id,
        a = (0, N.zi)(n) || C.A.isLimitedInteractionOverrideEnabled(n.id ?? r);
    switch (t) {
        case l.aI.MINIMIZED:
        case l.aI.WINDOWED:
        case l.aI.MAXIMIZED:
        case l.aI.BORDERLESS_FULLSCREEN: {
            let e = i.enabledOOP && W(),
                r = i.enabledLegacy && v,
                s = a ? g.Ue.OutOfProcessLimitedInteraction : g.Ue.OutOfProcess;
            return {
                ...i,
                overlayMethod: e ? s : r ? (0, N.O4)(n).overlayMethod : g.Ue.Disabled,
                reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${r}, runningGameFullscreenType: ${t}`,
            };
        }
        case l.aI.FULLSCREEN: {
            let e = (0, N.O4)(n),
                t = e.enabledLegacy && v,
                i = t ? e.overlayMethod : g.Ue.Disabled;
            return { ...e, overlayMethod: i, reason: `Fullscreen - legacyEnabled: ${t}, newOverlayMethod: ${i}` };
        }
        case l.aI.UNKNOWN:
            return {
                source: g.yp.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: g.Ue.Disabled,
                reason: "Unknown fullscreen type",
            };
        default:
            return {
                source: g.yp.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: g.Ue.Disabled,
                reason: `Missing runningFullscreenType case: ${t}`,
            };
    }
}
async function J(e) {
    if (X(e)) {
        (D.verbose(`Skipping track for pid ${e} - already tracked. Determining overlay method.`),
            await er(new Set([e])));
        return;
    }
    if (!(W() || v)) return void D.verbose(`Skipping track for pid ${e} - overlay is disabled`);
    if (!A.default.isAuthenticated()) return void D.verbose(`Skipping track for pid ${e} - not authenticated`);
    let t = await (async function (e) {
        let t = Y(e);
        if (null != t) return t;
        let n = u.Ay.getGameOrTransformedSubgameForPID(e),
            i = Date.now();
        if (null == n) return (D.error(`Tried to track game ${e} but it was not found in RunningGameStore`), null);
        let { enabledOOP: r, enabledLegacy: a, ...s } = (0, u.hw)(n),
            l = f.A.findGame(n),
            o = (await (0, N.E1)(e, 0)) ?? n.fullscreenType,
            d = Date.now();
        D.verbose(`Tracking game ${e} for overlay`);
        let c = {
            ...s,
            pid: e,
            oopEnabled: r,
            legacyEnabled: a,
            gameId: l?.id ?? null,
            gameName: n.name ?? null,
            state: g.AR.INITIALIZING,
            timer: { startTrackingTimestamp: Date.now() },
            fullscreenType: o,
            fullscreenHistory: { [d]: o },
            hasChangedRenderMode: !1,
            successfullyShown: !1,
        };
        return (
            o !== n.fullscreenType && (c.fullscreenHistory[i] = n.fullscreenType),
            $(e, c, "initializeTrackedGame"),
            eu.emitChange(),
            c
        );
    })(e);
    if (null == t) return void D.error(`Failed to track game ${e}`);
    (j(e, "game_tracking_starting", { game_name: t.gameName, fullscreen_type: t.fullscreenType }),
        z(e, "state", g.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        eu.emitChange(),
        D.verbose(`Determining initial overlay method for pid ${e}`));
    let n = await (async function (e) {
        let t = await (async function (e) {
            let t = u.Ay.getGameOrTransformedSubgameForPID(e);
            if (null == t)
                return (D.error(`Tried to determine first fullscreen type for untracked pid ${e}`), l.aI.UNKNOWN);
            let n = t?.fullscreenType ?? l.aI.UNKNOWN;
            if (F.has(n)) {
                let t = await (0, N.E1)(e, 2e3);
                (D.verbose(`Resolved fullscreen type for pid ${e}: ${t}`), null != t && (n = t));
            }
            return n;
        })(e);
        if (B.has(t)) {
            let n = await (0, N.E1)(e, 3e3);
            null != n && (t = n);
        }
        if (t === l.aI.UNKNOWN) {
            let n = await (0, N.E1)(e, 3e3);
            null != n && (t = n);
        }
        let n = Y(e);
        return null == n
            ? (D.error(`Tried to determine initial overlay method for untracked pid ${e}`),
              {
                  source: g.yp.NO_TRACKED_GAME,
                  enabledOOP: !1,
                  enabledLegacy: !1,
                  overlayMethod: g.Ue.Disabled,
                  reason: "No tracked game found",
              })
            : Q(n, t);
    })(e);
    (D.verbose(`Overlay method for pid ${e}: ${(0, N.gK)(n.overlayMethod)}`),
        q(e, g.sf.SCREEN_TYPE_RESOLUTION),
        await ee(e, n, "maybeTrackGame - 2"),
        (function e(t) {
            null == x &&
                (__OVERLAY__ && D.error("Running Polling While in Overlay Context!"),
                (x = setTimeout(async () => {
                    x = null;
                    let t = K();
                    t.length > 0 && (e(5e3), await er(new Set(t)));
                }, t)));
        })(5e3),
        (k = n.overlayMethod),
        eu.emitChange(),
        await s.A.updateTrackedGame(e, t));
}
async function Z(e) {
    if (!X(e)) return void D.verbose(`Skipping untrack for pid ${e} - not tracked`);
    D.verbose(`Untracking game ${e}`);
    let t = Y(e),
        n = {
            source: t?.source ?? g.yp.DEFAULT,
            enabledOOP: t?.oopEnabled ?? !1,
            enabledLegacy: t?.legacyEnabled ?? !1,
            overlayMethod: g.Ue.Disabled,
            reason: "Untracking game",
        };
    (await ee(e, n, "maybeUntrackGame", !0),
        null != w[e] && ((G[e] = { ...w[e], state: g.AR.GAME_UNTRACKED }), delete w[e]),
        eu.emitChange(),
        await s.A.updateTrackedGame(e, null));
}
async function ee(e, t, n) {
    let i,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a =
            t.overlayMethod !== g.Ue.Hook ||
            null == (i = u.Ay.getGameOrTransformedSubgameForPID(e)?.id) ||
            null != _.A.getGame(i) ||
            _.A.hasNoData(i) ||
            _.A.didFetchingFail(i)
                ? t.overlayMethod
                : g.Ue.Disabled,
        l =
            a === g.Ue.Disabled
                ? r
                    ? g.AR.OVERLAY_TEARING_DOWN
                    : g.AR.OVERLAY_DISABLED
                : g.AR.WAITING_FOR_MODULE_TRACKING,
        o = `${n}: ${t.reason}`;
    (z(e, "state", l, o),
        z(e, "overlayMethod", a, o),
        z(e, "source", t.source, o),
        z(e, "oopEnabled", t.enabledOOP, o),
        z(e, "legacyEnabled", t.enabledLegacy, o),
        D.verbose(`Updating overlay method for pid ${e} "${Y(e)?.gameName}" to ${(0, N.gK)(a)}`),
        eu.emitChange());
    let d = Y(e);
    return (null != d && (await s.A.updateTrackedGame(e, d)), s.A.updateOverlayMethod(e, a));
}
async function et() {
    let e = new Set(
            u.Ay.getRunningGames()
                .filter((e) => u.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(K()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) (await Z(e), await (0, r.yy)(16));
    let i = new Set([...e].filter((e) => !t.has(e)));
    for (let e of i) (await J(e), await (0, r.yy)(16));
    let a = new Set([...t].filter((t) => e.has(t)));
    (await er(a),
        (n.size > 0 || i.size > 0) &&
            D.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: i,
                pidsAlreadyTracked: a,
            }));
}
let en = new Set();
function ei() {
    let e = new Set(
            u.Ay.getRunningGames()
                .map((e) => e.id)
                .filter((e) => null != e && null != _.A.getGame(e)),
        ),
        t = e.size !== en.size || [...e].some((e) => !en.has(e));
    return ((en = e), t && e.size > 0 && et(), !1);
}
async function er(e) {
    let t = !1;
    for (let n of e)
        ((t =
            (await (async function (e) {
                var t, n, i, r;
                let a = !1,
                    s = Y(e);
                if (null == s) return (D.error(`Tried to determine overlay method swap for untracked pid ${e}`), !1);
                if (S.has(s.state))
                    return (D.verbose(`Skipping overlay method swap for pid ${e} - state is ${s.state}`), !1);
                let l = await (0, N.E1)(e, 0);
                if (null == l) return (D.error(`Failed to get revised fullscreen type for pid ${e}`), !1);
                s.fullscreenType !== l &&
                    D.verbose(`Fullscreen type different in swap for pid ${e}`, {
                        oldFullscreenType: s.fullscreenType,
                        newFullscreenType: l,
                    });
                let o = Q(s, l);
                if (
                    (s.overlayMethod === o.overlayMethod &&
                        s.oopEnabled === o.enabledOOP &&
                        s.legacyEnabled === o.enabledLegacy) ||
                    ((-1 === U || null === U) && s.state === g.AR.OVERLAY_RENDERING)
                )
                    return a;
                let d = b === g.V6.OUT_OF_PROCESS_V3 || b === g.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    c = b === g.V6.IN_PROCESS_V2,
                    u = (0, N.e3)(l, W()),
                    _ = (0, N.Zj)(s, l, W());
                function E() {
                    null == s ||
                        null == l ||
                        (D.verbose(`Updating fullscreen type for pid ${e}`, {
                            oldFullscreenType: s.fullscreenType,
                            newFullscreenType: l,
                        }),
                        z(e, "fullscreenHistory", { ...s.fullscreenHistory, [Date.now()]: l }, "updateFullscreenType"),
                        z(e, "fullscreenType", l, "updateFullscreenType"),
                        eu.emitChange(),
                        (a = !0));
                }
                switch (
                    (D.verbose(`Overlay method different for pid ${e}`, {
                        oldOverlayMethod: s.overlayMethod,
                        revisedFullscreenType: l,
                        fullscreenHistory: s.fullscreenHistory,
                        newOverlayGameStatus: o,
                        shouldSwitchToHook: _,
                        shouldSwitchToOutOfProcess: u,
                        isForcedInProcess: c,
                        isForcedOutOfProcess: d,
                        legacyEnabled: v,
                        overlayEnabled: W(),
                    }),
                    o.overlayMethod)
                ) {
                    case g.Ue.OutOfProcess:
                    case g.Ue.OutOfProcessLimitedInteraction:
                        ((u && !c) || d) &&
                            (E(),
                            await ((t = e),
                            (n = o),
                            X(t)
                                ? Y(t)?.overlayMethod === n.overlayMethod
                                    ? (D.verbose(`OOP requested for pid ${t} but already enabled`), Promise.resolve())
                                    : (D.verbose(`Enabling OOP for pid ${t}`),
                                      z(t, "hasChangedRenderMode", !0, "enableOutOfProcess"),
                                      ee(t, n, "enableOutOfProcess"))
                                : (D.verbose(`OOP requested for untracked pid ${t}`), Promise.resolve())));
                        break;
                    case g.Ue.Hook:
                        ((_ && !d) || c || v) &&
                            (E(),
                            await ((i = e),
                            (r = o),
                            X(i)
                                ? Y(i)?.overlayMethod === g.Ue.Hook
                                    ? (D.verbose(`Hook requested for pid ${i} but already enabled`), Promise.resolve())
                                    : (D.verbose(`Enabling hook for pid ${i}`),
                                      z(i, "hasChangedRenderMode", !0, "enableHook"),
                                      ee(i, r, "enableHook"))
                                : (D.verbose(`Hook requested for untracked pid ${i}`), Promise.resolve())));
                        break;
                    case g.Ue.Disabled:
                        (E(), ee(e, o, "determineOverlayMethodSwap - disabled"));
                }
                return a;
            })(n)) || t),
            await (0, r.yy)(16));
    t &&
        (D.info("determineFullscreenOverlayMethodSwaps has changes"),
        eu.emitChange(),
        j(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
async function ea(e, t) {
    if (!m.O) return void D.verbose("setOverlayEnabled: not supported");
    if (
        (D.info("setOverlayEnabled: supported", { newLegacyEnabled: e, newOopEnabled: t }),
        (v = e),
        p.x.update({ legacyEnabled: e, oopEnabled: t }),
        D.info("setOverlayEnabled", { newOopEnabled: t, newLegacyEnabled: e }),
        e || t)
    )
        return void el();
    for (let e of K()) (await Z(e), await (0, r.yy)(16));
}
function es() {
    (et(), (P = !1), (k = null), ed());
}
async function el() {
    (await eo(), await (0, r.yy)(2e3));
    let e = K(),
        t = new Set([
            ...u.Ay.getRunningGames()
                .filter((e) => u.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (D.info(`Retracking ${t.size} games (${e.length} already tracked)`), t))
        (await J(n), await (0, r.yy)(16));
    D.info(`Retracked ${e.length} games`);
}
async function eo() {
    for (let e of K()) (await Z(e), await (0, r.yy)(16));
}
function ed() {
    c.A.hasLoadedExperiments && !P && ((P = !0), ea(p.x.legacyEnabled, p.x.oopEnabled));
}
class ec extends i.Ay.Store {
    static displayName = "OverlayRenderStore";
    initialize() {
        (this.waitFor(A.default, f.A, c.A, _.A, C.A, R.A, E.A, u.Ay),
            this.syncWith([c.A], ed),
            this.syncWith([_.A], ei));
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return H;
    }
    getHasLoadedExperiments() {
        return P;
    }
    getForcedRenderMode() {
        return b;
    }
    isAnyOverlayRendering() {
        return (0, L.LK)() ? E.A.getWindowOpen(y.f) : this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        return __OVERLAY__ ? g.Ue.Hook : (Y(e)?.overlayMethod ?? g.Ue.Disabled);
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === g.Ue.OutOfProcess || t === g.Ue.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        return Y(e)?.hasChangedRenderMode ?? !1;
    }
    getTrackedGameByPid(e) {
        return Y(e);
    }
    getTrackedGames() {
        return w;
    }
    getClosedTrackedGamesHistory() {
        return G;
    }
    getGameOverlayStatus(e) {
        let t = Y(e.pid);
        return null == t ? null : { enabledOOP: t.oopEnabled, enabledLegacy: t.legacyEnabled, ...t };
    }
    getGlobalEnabledStatus() {
        return { oopEnabled: W(), legacyEnabled: v };
    }
    getAnyGlobalEnabledOverlay() {
        return W() || v;
    }
    getPerGameEnabledStatus(e) {
        if (null == e) return { oopEnabled: !1, legacyEnabled: !1 };
        let t = Y(e.pid);
        return null == t
            ? { oopEnabled: !1, legacyEnabled: !1 }
            : { oopEnabled: t.oopEnabled, legacyEnabled: t.legacyEnabled };
    }
    getRenderMethod(e) {
        if (null != e) return Y(e)?.overlayMethod ?? void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return k;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(w).filter((e) => e.overlayMethod !== g.Ue.Disabled && e.state === g.AR.OVERLAY_RENDERING);
    }
}
let eu = new ec(
        a.h,
        !M
            ? {}
            : {
                  CONNECTION_OPEN: es,
                  LOGIN: function () {
                      ((P = !1), (k = null));
                  },
                  LOGOUT: function () {
                      ((P = !1), (k = null), eo());
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: es,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { legacyEnabled: t, oopEnabled: n } = e;
                      return (D.info("handleOverlaySetEnabled", { legacyEnabled: t, oopEnabled: n }), ea(t, n), !0);
                  },
                  GAME_LAUNCH_SUCCESS: function (e) {
                      if (null != e.pids) for (let t of e.pids) J(t);
                  },
                  RUNNING_GAMES_CHANGE: function (e) {
                      for (let t of (__OVERLAY__ &&
                          D.error("Running handleRunningGamesChange While in Overlay Context!"),
                      e.added))
                          J(t.pid);
                      for (let t of e.removed) Z(t.pid);
                  },
                  RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                      if (
                          (__OVERLAY__ && D.error("Running handleGameToggleOverlay While in Overlay Context!"),
                          D.verbose("handleGameToggleOverlay", { action: e }),
                          !(W() || v))
                      ) {
                          if ((D.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
                              let t = e.game.pid,
                                  n = Y(t);
                              if (null != n)
                                  return (
                                      ee(t, Q(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0
                                  );
                          }
                          return !1;
                      }
                      if (!("pid" in e.game))
                          return (D.verbose("handleGameToggleOverlay: game is not a PersistGame"), et(), !0);
                      let t = e.game.pid,
                          { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e;
                      if (X(t)) {
                          let e = Y(t);
                          (e?.legacyEnabled !== n && z(t, "legacyEnabled", n, "handleGameToggleOverlay"),
                              e?.oopEnabled !== i && z(t, "oopEnabled", i ?? !1, "handleGameToggleOverlay"));
                      }
                      let r = n && v,
                          a = (i ?? !1) && W();
                      return (
                          r || a
                              ? (D.verbose("handleGameToggleOverlay: game enabled changed", {
                                    pid: t,
                                    legacyEnabled: r,
                                    overlayV3Enabled: a,
                                }),
                                X(t) ? el() : J(t))
                              : Z(t),
                          !0
                      );
                  },
                  OVERLAY_FORCE_RENDER_MODE: function (e) {
                      return ((b = e.mode), el(), !0);
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      if (null != Y(e.pid))
                          return (
                              z(e.pid, "state", e.overlayState, e.reason),
                              D.verbose(`Updating overlay state for pid ${e.pid} to ${e.overlayState}`),
                              e.overlayState === g.AR.WAITING_FOR_POPOUT_OPEN ||
                              e.overlayState === g.AR.WAITING_FOR_OVERLAY_OPEN
                                  ? q(e.pid, g.sf.MODULE_TRACKING)
                                  : e.overlayState === g.AR.OVERLAY_RENDERING && q(e.pid, g.sf.OVERLAY_RENDERING),
                              !0
                          );
                  },
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: function () {
                      return (el(), !0);
                  },
                  OVERLAY_CRASHED: function (e) {
                      return (
                          D.error(`Overlay crashed for pid ${e.pid}`),
                          !!X(e.pid) && (z(e.pid, "state", g.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
                      );
                  },
                  OVERLAY_RELOAD: function (e) {
                      return (D.error("Overlay reload for pid", { pid: e.pid }), el(), !0);
                  },
                  OVERLAY_FOCUSED: function (e) {
                      if (((U = e.pid), V)) {
                          let t = [performance.timeOrigin + performance.now(), e.pid ?? null, e.trackMode];
                          H.push(t);
                      }
                      return !(0, I.sN)(e.pid) || ((0, I.is)(e.pid), !0);
                  },
                  OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                      (s.A.updateOverlayState(e.pid, g.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
                          X(e.pid) && z(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
                          j(e.pid, "overlay_successfully_shown", { pid: e.pid }));
                      let t = Y(e.pid);
                      null != t && s.A.updateTrackedGame(e.pid, t);
                  },
                  OVERLAY_RENDER_DEBUG_MODE: function (e) {
                      return (e.mode === g.x7.TrackFocusPIDs && (V = e.enabled), !0);
                  },
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: function () {
                      return ((H = new o.A(1e4)), !0);
                  },
              },
    ),
    e_ = eu;
