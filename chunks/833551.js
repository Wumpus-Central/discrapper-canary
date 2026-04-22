"use strict";
n.r(t), n.d(t, { default: () => e_ }), n(321073);
var r = n(311907),
    i = n(499979),
    s = n(73153),
    a = n(684013),
    o = n(56562),
    l = n(635731),
    u = n(626584),
    d = n(49463),
    c = n(15285),
    _ = n(87001),
    f = n(961350),
    E = n(760751),
    h = n(723702),
    p = n(9302),
    m = n(211753),
    g = n(206885),
    A = n(41984),
    I = n(181435),
    T = n(318739),
    S = n(515183),
    y = n(592598),
    N = n(682763),
    O = n(680243),
    R = n(392164);
let v = new u.A("OverlayRenderStore"),
    C = A.V6.UNSET,
    b = !1,
    D = !1,
    L = (0, h.isWindows)() && h.isPlatformEmbedded && !__OVERLAY__,
    w = null,
    M = {},
    P = {},
    U = null,
    k = null,
    x = new Set([o.aI.FULLSCREEN, o.aI.BORDERLESS_FULLSCREEN, o.aI.UNKNOWN, o.aI.MINIMIZED]),
    G = new Set([o.aI.MINIMIZED, o.aI.UNKNOWN]),
    V = !1,
    F = new l.A(1e4);
function B(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : I.QJ.Info;
    (0, N.aS)({ pid: e, name: t, type: I.ON.Renderer, data: n, logType: r });
}
function H() {
    return O.A.isOverlayEnabled;
}
function Y(e) {
    return M[e] ?? null;
}
function W() {
    return Object.keys(M).map(Number);
}
function j(e, t, n) {
    let r = M[e]?.state;
    (M = { ...M, [e]: { ...t } }), r !== t.state && a.A.trackOverlayStateChanged(e, r, t.state, n);
}
function K(e) {
    return e in M;
}
function $(e, t, n, r) {
    let i = Y(e);
    if (null == i) return void v.error(`Tried to set property ${t} to ${n} for untracked pid ${e}`);
    let s = { ...i };
    (s[t] = n), j(e, s, r);
}
function z(e, t) {
    let n = Y(e);
    if (null == n) return;
    let r = n.timer;
    switch (t) {
        case A.sf.SCREEN_TYPE_RESOLUTION:
            r.screenTypeResolutionTimestamp = Date.now();
            break;
        case A.sf.MODULE_TRACKING:
            r.moduleTrackingTimestamp = Date.now();
            break;
        case A.sf.OVERLAY_RENDERING:
            r.overlayRenderingTimestamp = Date.now();
    }
    $(e, "timer", r, "timeOverlayEvent"), ec.emitChange();
}
async function q(e) {
    let t = Y(e);
    if (null != t) return t;
    let n = c.Ay.getGameOrTransformedSubgameForPID(e),
        r = Date.now();
    if (null == n) return v.error(`Tried to track game ${e} but it was not found in RunningGameStore`), null;
    let { enabledOOP: i, enabledLegacy: s, ...a } = (0, c.hw)(n),
        o = E.A.findGame(n),
        l = (await (0, S.E1)(e, 0)) ?? n.fullscreenType,
        u = Date.now();
    v.verbose(`Tracking game ${e} for overlay`);
    let d = {
        ...a,
        pid: e,
        oopEnabled: i,
        legacyEnabled: s,
        applicationId: o?.id ?? null,
        gameName: n.name ?? null,
        state: A.AR.INITIALIZING,
        timer: { startTrackingTimestamp: Date.now() },
        fullscreenType: l,
        fullscreenHistory: { [u]: l },
        hasChangedRenderMode: !1,
        supportsOutOfProcess: o?.supportsOutOfProcessOverlay ?? !0,
        successfullyShown: !1,
    };
    return (
        l !== n.fullscreenType && (d.fullscreenHistory[r] = n.fullscreenType),
        j(e, d, "initializeTrackedGame"),
        ec.emitChange(),
        d
    );
}
function X(e, t) {
    switch (C) {
        case A.V6.UNSET:
            break;
        case A.V6.IN_PROCESS_V2:
            return {
                source: A.yp.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: A.Ue.Hook,
                reason: "Forced in-process overlay rendering",
            };
        case A.V6.OUT_OF_PROCESS_V3:
            return {
                source: A.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: A.Ue.OutOfProcess,
                reason: "Forced out-of-process overlay rendering",
            };
        case A.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: A.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: A.Ue.OutOfProcessLimitedInteraction,
                reason: "Forced out-of-process limited interaction overlay rendering",
            };
    }
    if (!(H() || b))
        return {
            source: A.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: A.Ue.Disabled,
            reason: "Overlay globally disabled",
        };
    let n = c.Ay.getGameOrTransformedSubgameForPID(e.pid);
    if (null == n)
        return {
            source: A.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: A.Ue.Disabled,
            reason: "No running game found for tracked game",
        };
    let r = (0, c.hw)(n);
    if (!(r.enabledLegacy || r.enabledOOP))
        return { source: r.source, enabledOOP: !1, enabledLegacy: !1, overlayMethod: A.Ue.Disabled, reason: r.reason };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: A.yp.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: A.Ue.Disabled,
            reason: "Overlay disabled for specific game",
        };
    if (!H() && b) {
        let e = (0, S.O4)(n);
        return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : A.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
        };
    }
    if (!(0, p.supportsOutOfProcess)())
        return { ...(0, S.O4)(n), source: A.yp.NO_OUT_OF_PROCESS_SUPPORT, reason: "supportsOutOfProcess failed" };
    if (!r.enabledOOP && r.enabledLegacy)
        return b
            ? { ...(0, S.O4)(n), source: A.yp.LEGACY_ENABLED, reason: "Legacy overlay enabled only" }
            : { ...r, overlayMethod: A.Ue.Disabled, source: A.yp.LEGACY_ENABLED, reason: "Legacy overlay disabled" };
    let i = E.A.findGame(n)?.id,
        s = (0, S.zi)(n) || y.A.isLimitedInteractionOverrideEnabled(n.id ?? i);
    switch (t) {
        case o.aI.MINIMIZED:
        case o.aI.WINDOWED:
        case o.aI.MAXIMIZED:
        case o.aI.BORDERLESS_FULLSCREEN: {
            let e = r.enabledOOP && H(),
                i = r.enabledLegacy && b,
                a = s ? A.Ue.OutOfProcessLimitedInteraction : A.Ue.OutOfProcess;
            return {
                ...r,
                overlayMethod: e ? a : i ? (0, S.O4)(n).overlayMethod : A.Ue.Disabled,
                reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${i}, runningGameFullscreenType: ${t}`,
            };
        }
        case o.aI.FULLSCREEN: {
            let e = (0, S.O4)(n),
                t = e.enabledLegacy && b,
                r = t ? e.overlayMethod : A.Ue.Disabled;
            return { ...e, overlayMethod: r, reason: `Fullscreen - legacyEnabled: ${t}, newOverlayMethod: ${r}` };
        }
        case o.aI.UNKNOWN:
            return {
                source: A.yp.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: A.Ue.Disabled,
                reason: "Unknown fullscreen type",
            };
        default:
            return {
                source: A.yp.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: A.Ue.Disabled,
                reason: `Missing runningFullscreenType case: ${t}`,
            };
    }
}
async function Q(e) {
    if (K(e)) {
        v.verbose(`Skipping track for pid ${e} - already tracked. Determining overlay method.`), await ei(new Set([e]));
        return;
    }
    if (!(H() || b)) return void v.verbose(`Skipping track for pid ${e} - overlay is disabled`);
    let t = await q(e);
    if (null == t) return void v.error(`Failed to track game ${e}`);
    B(e, "game_tracking_starting", { game_name: t.gameName, fullscreen_type: t.fullscreenType }),
        $(e, "state", A.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        ec.emitChange(),
        v.verbose(`Determining initial overlay method for pid ${e}`);
    let n = await ee(e);
    v.verbose(`Overlay method for pid ${e}: ${(0, S.gK)(n.overlayMethod)}`),
        z(e, A.sf.SCREEN_TYPE_RESOLUTION),
        await et(e, n, "maybeTrackGame - 2"),
        (function e(t) {
            null == U &&
                (__OVERLAY__ && v.error("Running Polling While in Overlay Context!"),
                (U = setTimeout(async () => {
                    U = null;
                    let t = W();
                    t.length > 0 && (e(S.T$), await ei(new Set(t)));
                }, t)));
        })(S.T$),
        (k = n.overlayMethod),
        ec.emitChange(),
        await a.A.updateTrackedGame(e, t);
}
async function J(e) {
    if (!K(e)) return void v.verbose(`Skipping untrack for pid ${e} - not tracked`);
    v.verbose(`Untracking game ${e}`);
    let t = Y(e),
        n = {
            source: t?.source ?? A.yp.DEFAULT,
            enabledOOP: t?.oopEnabled ?? !1,
            enabledLegacy: t?.legacyEnabled ?? !1,
            overlayMethod: A.Ue.Disabled,
            reason: "Untracking game",
        };
    await et(e, n, "maybeUntrackGame", !0),
        null != M[e] && ((P[e] = { ...M[e], state: A.AR.GAME_UNTRACKED }), delete M[e]),
        ec.emitChange(),
        await a.A.updateTrackedGame(e, null);
}
async function Z(e) {
    let t = c.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == t) return v.error(`Tried to determine first fullscreen type for untracked pid ${e}`), o.aI.UNKNOWN;
    let n = t?.fullscreenType ?? o.aI.UNKNOWN;
    if (x.has(n)) {
        let t = await (0, S.E1)(e, 2e3);
        v.verbose(`Resolved fullscreen type for pid ${e}: ${t}`), null != t && (n = t);
    }
    return n;
}
async function ee(e) {
    let t = await Z(e);
    if (G.has(t)) {
        let n = await (0, S.E1)(e, 3e3);
        null != n && (t = n);
    }
    if (t === o.aI.UNKNOWN) {
        let n = await (0, S.E1)(e, 3e3);
        null != n && (t = n);
    }
    let n = Y(e);
    return null == n
        ? (v.error(`Tried to determine initial overlay method for untracked pid ${e}`),
          {
              source: A.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: A.Ue.Disabled,
              reason: "No tracked game found",
          })
        : X(n, t);
}
async function et(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = t.overlayMethod,
        s =
            i === A.Ue.Disabled
                ? r
                    ? A.AR.OVERLAY_TEARING_DOWN
                    : A.AR.OVERLAY_DISABLED
                : A.AR.WAITING_FOR_MODULE_TRACKING,
        o = `${n}: ${t.reason}`;
    $(e, "state", s, o),
        $(e, "overlayMethod", i, o),
        $(e, "source", t.source, o),
        $(e, "oopEnabled", t.enabledOOP, o),
        $(e, "legacyEnabled", t.enabledLegacy, o),
        v.verbose(`Updating overlay method for pid ${e} "${Y(e)?.gameName}" to ${(0, S.gK)(i)}`),
        ec.emitChange();
    let l = Y(e);
    return null != l && (await a.A.updateTrackedGame(e, l)), a.A.updateOverlayMethod(e, i);
}
async function en() {
    let e = new Set(
            c.Ay.getRunningGames()
                .filter((e) => c.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(W()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await J(e), await (0, i.yy)(16);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await Q(e), await (0, i.yy)(16);
    let s = new Set([...t].filter((t) => e.has(t)));
    await ei(s),
        (n.size > 0 || r.size > 0) &&
            v.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: s,
            });
}
async function er(e) {
    var t, n, r, i;
    let s = !1,
        a = Y(e);
    if (null == a) return v.error(`Tried to determine overlay method swap for untracked pid ${e}`), !1;
    if (T.Q.has(a.state)) return v.verbose(`Skipping overlay method swap for pid ${e} - state is ${a.state}`), !1;
    let o = await (0, S.E1)(e, 0);
    if (null == o) return v.error(`Failed to get revised fullscreen type for pid ${e}`), !1;
    a.fullscreenType !== o &&
        v.verbose(`Fullscreen type different in swap for pid ${e}`, {
            oldFullscreenType: a.fullscreenType,
            newFullscreenType: o,
        });
    let l = X(a, o);
    if (
        (a.overlayMethod === l.overlayMethod && a.oopEnabled === l.enabledOOP && a.legacyEnabled === l.enabledLegacy) ||
        ((w === p.UNSET_PID || null === w) && a.state === A.AR.OVERLAY_RENDERING)
    )
        return s;
    let u = C === A.V6.OUT_OF_PROCESS_V3 || C === A.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        d = C === A.V6.IN_PROCESS_V2,
        c = (0, S.e3)(o, H()),
        _ = (0, S.Zj)(a, o, H());
    v.verbose(`Overlay method different for pid ${e}`, {
        oldOverlayMethod: a.overlayMethod,
        revisedFullscreenType: o,
        fullscreenHistory: a.fullscreenHistory,
        newOverlayGameStatus: l,
        shouldSwitchToHook: _,
        shouldSwitchToOutOfProcess: c,
        isForcedInProcess: d,
        isForcedOutOfProcess: u,
        legacyEnabled: b,
        overlayEnabled: H(),
    });
    let f = () => {
        v.verbose(`Updating fullscreen type for pid ${e}`, {
            oldFullscreenType: a.fullscreenType,
            newFullscreenType: o,
        }),
            $(e, "fullscreenHistory", { ...a.fullscreenHistory, [Date.now()]: o }, "updateFullscreenType"),
            $(e, "fullscreenType", o, "updateFullscreenType"),
            ec.emitChange(),
            (s = !0);
    };
    switch (l.overlayMethod) {
        case A.Ue.OutOfProcess:
        case A.Ue.OutOfProcessLimitedInteraction:
            ((c && !d) || u) &&
                (f(),
                await ((t = e),
                (n = l),
                K(t)
                    ? Y(t)?.overlayMethod === n.overlayMethod
                        ? (v.verbose(`OOP requested for pid ${t} but already enabled`), Promise.resolve())
                        : (v.verbose(`Enabling OOP for pid ${t}`),
                          $(t, "hasChangedRenderMode", !0, "enableOutOfProcess"),
                          et(t, n, "enableOutOfProcess"))
                    : (v.verbose(`OOP requested for untracked pid ${t}`), Promise.resolve())));
            break;
        case A.Ue.Hook:
            ((_ && !u) || d || b) &&
                (f(),
                await ((r = e),
                (i = l),
                K(r)
                    ? Y(r)?.overlayMethod === A.Ue.Hook
                        ? (v.verbose(`Hook requested for pid ${r} but already enabled`), Promise.resolve())
                        : (v.verbose(`Enabling hook for pid ${r}`),
                          $(r, "hasChangedRenderMode", !0, "enableHook"),
                          et(r, i, "enableHook"))
                    : (v.verbose(`Hook requested for untracked pid ${r}`), Promise.resolve())));
            break;
        case A.Ue.Disabled:
            f(), et(e, l, "determineOverlayMethodSwap - disabled");
    }
    return s;
}
async function ei(e) {
    let t = !1;
    for (let n of e) (t = (await er(n)) || t), await (0, i.yy)(16);
    t &&
        (v.info("determineFullscreenOverlayMethodSwaps has changes"),
        ec.emitChange(),
        B(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
async function es(e, t) {
    if (!g.O) return void v.verbose("setOverlayEnabled: not supported");
    if (
        (v.info("setOverlayEnabled: supported", { newLegacyEnabled: e, newOopEnabled: t }),
        (b = e),
        m.x.update({ legacyEnabled: e, oopEnabled: t }),
        v.info("setOverlayEnabled", { newOopEnabled: t, newLegacyEnabled: e }),
        e || t)
    )
        return void eo();
    for (let e of W()) await J(e), await (0, i.yy)(16);
}
function ea() {
    en(), (D = !1), (k = null), eu();
}
async function eo() {
    await el(), await (0, i.yy)(2e3);
    let e = W(),
        t = new Set([
            ...c.Ay.getRunningGames()
                .filter((e) => c.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (v.info(`Retracking ${t.size} games (${e.length} already tracked)`), t))
        await Q(n), await (0, i.yy)(16);
    v.info(`Retracked ${e.length} games`);
}
async function el() {
    for (let e of W()) await J(e), await (0, i.yy)(16);
}
function eu() {
    d.A.hasLoadedExperiments && !D && ((D = !0), es(m.x.legacyEnabled, m.x.oopEnabled));
}
class ed extends r.Ay.Store {
    static displayName = "OverlayRenderStore";
    initialize() {
        this.waitFor(f.default, d.A, E.A, y.A, c.Ay, O.A, _.A), this.syncWith([d.A], eu);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return F;
    }
    getHasLoadedExperiments() {
        return D;
    }
    getForcedRenderMode() {
        return C;
    }
    isAnyOverlayRendering() {
        return g.e ? _.A.getWindowOpen(R.f) : this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        return __OVERLAY__ ? A.Ue.Hook : (Y(e)?.overlayMethod ?? A.Ue.Disabled);
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === A.Ue.OutOfProcess || t === A.Ue.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        return Y(e)?.hasChangedRenderMode ?? !1;
    }
    getTrackedGameByPid(e) {
        return Y(e);
    }
    getTrackedGames() {
        return M;
    }
    getClosedTrackedGamesHistory() {
        return P;
    }
    getGameOverlayStatus(e) {
        let t = Y(e.pid);
        return null == t ? null : { enabledOOP: t.oopEnabled, enabledLegacy: t.legacyEnabled, ...t };
    }
    getGlobalEnabledStatus() {
        return { oopEnabled: H(), legacyEnabled: b };
    }
    getAnyGlobalEnabledOverlay() {
        return H() || b;
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
        return Object.values(M).filter((e) => e.overlayMethod !== A.Ue.Disabled && e.state === A.AR.OVERLAY_RENDERING);
    }
}
let ec = new ed(
        s.h,
        !L
            ? {}
            : {
                  CONNECTION_OPEN: ea,
                  LOGIN: function () {
                      (D = !1), (k = null);
                  },
                  LOGOUT: function () {
                      (D = !1), (k = null), el();
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: ea,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { legacyEnabled: t, oopEnabled: n } = e;
                      return v.info("handleOverlaySetEnabled", { legacyEnabled: t, oopEnabled: n }), es(t, n), !0;
                  },
                  GAME_LAUNCH_SUCCESS: function (e) {
                      if (null != e.pids) for (let t of e.pids) Q(t);
                  },
                  RUNNING_GAMES_CHANGE: function (e) {
                      for (let t of (__OVERLAY__ &&
                          v.error("Running handleRunningGamesChange While in Overlay Context!"),
                      e.added))
                          Q(t.pid);
                      for (let t of e.removed) J(t.pid);
                  },
                  RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                      if (
                          (__OVERLAY__ && v.error("Running handleGameToggleOverlay While in Overlay Context!"),
                          v.verbose("handleGameToggleOverlay", { action: e }),
                          !(H() || b))
                      ) {
                          if ((v.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
                              let t = e.game.pid,
                                  n = Y(t);
                              if (null != n)
                                  return et(t, X(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
                          }
                          return !1;
                      }
                      if (!("pid" in e.game))
                          return v.verbose("handleGameToggleOverlay: game is not a PersistGame"), en(), !0;
                      let t = e.game.pid,
                          { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
                      if (K(t)) {
                          let e = Y(t);
                          e?.legacyEnabled !== n && $(t, "legacyEnabled", n, "handleGameToggleOverlay"),
                              e?.oopEnabled !== r && $(t, "oopEnabled", r ?? !1, "handleGameToggleOverlay");
                      }
                      let i = n && b,
                          s = (r ?? !1) && H();
                      return (
                          i || s
                              ? (v.verbose("handleGameToggleOverlay: game enabled changed", {
                                    pid: t,
                                    legacyEnabled: i,
                                    overlayV3Enabled: s,
                                }),
                                K(t) ? eo() : Q(t))
                              : J(t),
                          !0
                      );
                  },
                  OVERLAY_FORCE_RENDER_MODE: function (e) {
                      return (C = e.mode), eo(), !0;
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      if (null != Y(e.pid))
                          return (
                              $(e.pid, "state", e.overlayState, e.reason),
                              v.verbose(`Updating overlay state for pid ${e.pid} to ${e.overlayState}`),
                              e.overlayState === A.AR.WAITING_FOR_POPOUT_OPEN ||
                              e.overlayState === A.AR.WAITING_FOR_OVERLAY_OPEN
                                  ? z(e.pid, A.sf.MODULE_TRACKING)
                                  : e.overlayState === A.AR.OVERLAY_RENDERING && z(e.pid, A.sf.OVERLAY_RENDERING),
                              !0
                          );
                  },
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: function () {
                      return eo(), !0;
                  },
                  OVERLAY_CRASHED: function (e) {
                      return (
                          v.error(`Overlay crashed for pid ${e.pid}`),
                          !!K(e.pid) && ($(e.pid, "state", A.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
                      );
                  },
                  OVERLAY_RELOAD: function (e) {
                      return v.error("Overlay reload for pid", { pid: e.pid }), eo(), !0;
                  },
                  OVERLAY_FOCUSED: function (e) {
                      if (((w = e.pid), V)) {
                          let t = [performance.timeOrigin + performance.now(), e.pid ?? null, e.trackMode];
                          F.push(t);
                      }
                      return !(0, p.isValidGamePID)(e.pid) || ((0, p.setPID)(e.pid), !0);
                  },
                  OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                      a.A.updateOverlayState(e.pid, A.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
                          K(e.pid) && $(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
                          B(e.pid, "overlay_successfully_shown", { pid: e.pid });
                      let t = Y(e.pid);
                      null != t && a.A.updateTrackedGame(e.pid, t);
                  },
                  OVERLAY_RENDER_DEBUG_MODE: function (e) {
                      return e.mode === A.x7.TrackFocusPIDs && (V = e.enabled), !0;
                  },
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: function () {
                      return (F = new l.A(1e4)), !0;
                  },
              },
    ),
    e_ = ec;
