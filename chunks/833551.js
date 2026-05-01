n.r(t), n.d(t, { default: () => eh }), n(321073);
var i = n(17928),
    l = n(499979),
    a = n(228366),
    r = n(684013),
    s = n(56562),
    o = n(635731),
    d = n(626584),
    u = n(736056),
    c = n(328153),
    h = n(567249),
    E = n(495544),
    A = n(760751),
    _ = n(723702),
    p = n(9302),
    g = n(211753),
    f = n(206885),
    I = n(41984),
    S = n(181435),
    T = n(318739),
    m = n(515183),
    C = n(592598),
    O = n(682763),
    N = n(680243),
    y = n(392164);
let R = new d.A("OverlayRenderStore"),
    L = I.V6.UNSET,
    v = !1,
    D = !1,
    U = (0, _.isWindows)() && _.isPlatformEmbedded && !__OVERLAY__,
    P = null,
    b = {},
    M = {},
    w = null,
    G = null,
    F = new Set([s.aI.FULLSCREEN, s.aI.BORDERLESS_FULLSCREEN, s.aI.UNKNOWN, s.aI.MINIMIZED]),
    V = new Set([s.aI.MINIMIZED, s.aI.UNKNOWN]),
    k = !1,
    H = new o.A(1e4);
function x(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : S.QJ.Info;
    (0, O.aS)({ pid: e, name: t, type: S.ON.Renderer, data: n, logType: i });
}
function B() {
    return N.A.isOverlayEnabled;
}
function Y(e) {
    return b[e] ?? null;
}
function j() {
    return Object.keys(b).map(Number);
}
function $(e, t, n) {
    let i = b[e]?.state;
    (b = { ...b, [e]: { ...t } }), i !== t.state && r.A.trackOverlayStateChanged(e, i, t.state, n);
}
function z(e) {
    return e in b;
}
function W(e, t, n, i) {
    let l = Y(e);
    if (null == l) return void R.error(`Tried to set property ${t} to ${n} for untracked pid ${e}`);
    let a = { ...l };
    (a[t] = n), $(e, a, i);
}
function K(e, t) {
    let n = Y(e);
    if (null == n) return;
    let i = n.timer;
    switch (t) {
        case I.sf.SCREEN_TYPE_RESOLUTION:
            i.screenTypeResolutionTimestamp = Date.now();
            break;
        case I.sf.MODULE_TRACKING:
            i.moduleTrackingTimestamp = Date.now();
            break;
        case I.sf.OVERLAY_RENDERING:
            i.overlayRenderingTimestamp = Date.now();
    }
    W(e, "timer", i, "timeOverlayEvent"), ec.emitChange();
}
async function Z(e) {
    let t = Y(e);
    if (null != t) return t;
    let n = c.Ay.getGameOrTransformedSubgameForPID(e),
        i = Date.now();
    if (null == n) return R.error(`Tried to track game ${e} but it was not found in RunningGameStore`), null;
    let { enabledOOP: l, enabledLegacy: a, ...r } = (0, c.hw)(n),
        s = A.A.findGame(n),
        o = (await (0, m.E1)(e, 0)) ?? n.fullscreenType,
        d = Date.now();
    R.verbose(`Tracking game ${e} for overlay`);
    let u = {
        ...r,
        pid: e,
        oopEnabled: l,
        legacyEnabled: a,
        applicationId: s?.id ?? null,
        gameName: n.name ?? null,
        state: I.AR.INITIALIZING,
        timer: { startTrackingTimestamp: Date.now() },
        fullscreenType: o,
        fullscreenHistory: { [d]: o },
        hasChangedRenderMode: !1,
        supportsOutOfProcess: s?.supportsOutOfProcessOverlay ?? !0,
        successfullyShown: !1,
    };
    return (
        o !== n.fullscreenType && (u.fullscreenHistory[i] = n.fullscreenType),
        $(e, u, "initializeTrackedGame"),
        ec.emitChange(),
        u
    );
}
function q(e, t) {
    switch (L) {
        case I.V6.UNSET:
            break;
        case I.V6.IN_PROCESS_V2:
            return {
                source: I.yp.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: I.Ue.Hook,
                reason: "Forced in-process overlay rendering",
            };
        case I.V6.OUT_OF_PROCESS_V3:
            return {
                source: I.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: I.Ue.OutOfProcess,
                reason: "Forced out-of-process overlay rendering",
            };
        case I.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: I.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: I.Ue.OutOfProcessLimitedInteraction,
                reason: "Forced out-of-process limited interaction overlay rendering",
            };
    }
    if (!(B() || v))
        return {
            source: I.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Overlay globally disabled",
        };
    let n = c.Ay.getGameOrTransformedSubgameForPID(e.pid);
    if (null == n)
        return {
            source: I.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "No running game found for tracked game",
        };
    let i = (0, c.hw)(n);
    if (!(i.enabledLegacy || i.enabledOOP))
        return { source: i.source, enabledOOP: !1, enabledLegacy: !1, overlayMethod: I.Ue.Disabled, reason: i.reason };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: I.yp.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Overlay disabled for specific game",
        };
    if (!B() && v) {
        let e = (0, m.O4)(n);
        return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : I.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
        };
    }
    if (!(0, p.supportsOutOfProcess)())
        return { ...(0, m.O4)(n), source: I.yp.NO_OUT_OF_PROCESS_SUPPORT, reason: "supportsOutOfProcess failed" };
    if (!i.enabledOOP && i.enabledLegacy)
        return v
            ? { ...(0, m.O4)(n), source: I.yp.LEGACY_ENABLED, reason: "Legacy overlay enabled only" }
            : { ...i, overlayMethod: I.Ue.Disabled, source: I.yp.LEGACY_ENABLED, reason: "Legacy overlay disabled" };
    let l = A.A.findGame(n)?.id,
        a = (0, m.zi)(n) || C.A.isLimitedInteractionOverrideEnabled(n.id ?? l);
    switch (t) {
        case s.aI.MINIMIZED:
        case s.aI.WINDOWED:
        case s.aI.MAXIMIZED:
        case s.aI.BORDERLESS_FULLSCREEN: {
            let e = i.enabledOOP && B(),
                l = i.enabledLegacy && v,
                r = a ? I.Ue.OutOfProcessLimitedInteraction : I.Ue.OutOfProcess;
            return {
                ...i,
                overlayMethod: e ? r : l ? (0, m.O4)(n).overlayMethod : I.Ue.Disabled,
                reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${l}, runningGameFullscreenType: ${t}`,
            };
        }
        case s.aI.FULLSCREEN: {
            let e = (0, m.O4)(n),
                t = e.enabledLegacy && v,
                i = t ? e.overlayMethod : I.Ue.Disabled;
            return { ...e, overlayMethod: i, reason: `Fullscreen - legacyEnabled: ${t}, newOverlayMethod: ${i}` };
        }
        case s.aI.UNKNOWN:
            return {
                source: I.yp.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: I.Ue.Disabled,
                reason: "Unknown fullscreen type",
            };
        default:
            return {
                source: I.yp.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: I.Ue.Disabled,
                reason: `Missing runningFullscreenType case: ${t}`,
            };
    }
}
async function Q(e) {
    if (z(e)) {
        R.verbose(`Skipping track for pid ${e} - already tracked. Determining overlay method.`), await el(new Set([e]));
        return;
    }
    if (!(B() || v)) return void R.verbose(`Skipping track for pid ${e} - overlay is disabled`);
    let t = await Z(e);
    if (null == t) return void R.error(`Failed to track game ${e}`);
    x(e, "game_tracking_starting", { game_name: t.gameName, fullscreen_type: t.fullscreenType }),
        W(e, "state", I.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        ec.emitChange(),
        R.verbose(`Determining initial overlay method for pid ${e}`);
    let n = await ee(e);
    R.verbose(`Overlay method for pid ${e}: ${(0, m.gK)(n.overlayMethod)}`),
        K(e, I.sf.SCREEN_TYPE_RESOLUTION),
        await et(e, n, "maybeTrackGame - 2"),
        (function e(t) {
            null == w &&
                (__OVERLAY__ && R.error("Running Polling While in Overlay Context!"),
                (w = setTimeout(async () => {
                    w = null;
                    let t = j();
                    t.length > 0 && (e(m.T$), await el(new Set(t)));
                }, t)));
        })(m.T$),
        (G = n.overlayMethod),
        ec.emitChange(),
        await r.A.updateTrackedGame(e, t);
}
async function X(e) {
    if (!z(e)) return void R.verbose(`Skipping untrack for pid ${e} - not tracked`);
    R.verbose(`Untracking game ${e}`);
    let t = Y(e),
        n = {
            source: t?.source ?? I.yp.DEFAULT,
            enabledOOP: t?.oopEnabled ?? !1,
            enabledLegacy: t?.legacyEnabled ?? !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Untracking game",
        };
    await et(e, n, "maybeUntrackGame", !0),
        null != b[e] && ((M[e] = { ...b[e], state: I.AR.GAME_UNTRACKED }), delete b[e]),
        ec.emitChange(),
        await r.A.updateTrackedGame(e, null);
}
async function J(e) {
    let t = c.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == t) return R.error(`Tried to determine first fullscreen type for untracked pid ${e}`), s.aI.UNKNOWN;
    let n = t?.fullscreenType ?? s.aI.UNKNOWN;
    if (F.has(n)) {
        let t = await (0, m.E1)(e, 2e3);
        R.verbose(`Resolved fullscreen type for pid ${e}: ${t}`), null != t && (n = t);
    }
    return n;
}
async function ee(e) {
    let t = await J(e);
    if (V.has(t)) {
        let n = await (0, m.E1)(e, 3e3);
        null != n && (t = n);
    }
    if (t === s.aI.UNKNOWN) {
        let n = await (0, m.E1)(e, 3e3);
        null != n && (t = n);
    }
    let n = Y(e);
    return null == n
        ? (R.error(`Tried to determine initial overlay method for untracked pid ${e}`),
          {
              source: I.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: I.Ue.Disabled,
              reason: "No tracked game found",
          })
        : q(n, t);
}
async function et(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = t.overlayMethod,
        a =
            l === I.Ue.Disabled
                ? i
                    ? I.AR.OVERLAY_TEARING_DOWN
                    : I.AR.OVERLAY_DISABLED
                : I.AR.WAITING_FOR_MODULE_TRACKING,
        s = `${n}: ${t.reason}`;
    W(e, "state", a, s),
        W(e, "overlayMethod", l, s),
        W(e, "source", t.source, s),
        W(e, "oopEnabled", t.enabledOOP, s),
        W(e, "legacyEnabled", t.enabledLegacy, s),
        R.verbose(`Updating overlay method for pid ${e} "${Y(e)?.gameName}" to ${(0, m.gK)(l)}`),
        ec.emitChange();
    let o = Y(e);
    return null != o && (await r.A.updateTrackedGame(e, o)), r.A.updateOverlayMethod(e, l);
}
async function en() {
    let e = new Set(
            c.Ay.getRunningGames()
                .filter((e) => c.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(j()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await X(e), await (0, l.yy)(16);
    let i = new Set([...e].filter((e) => !t.has(e)));
    for (let e of i) await Q(e), await (0, l.yy)(16);
    let a = new Set([...t].filter((t) => e.has(t)));
    await el(a),
        (n.size > 0 || i.size > 0) &&
            R.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: i,
                pidsAlreadyTracked: a,
            });
}
async function ei(e) {
    var t, n, i, l;
    let a = !1,
        r = Y(e);
    if (null == r) return R.error(`Tried to determine overlay method swap for untracked pid ${e}`), !1;
    if (T.Q.has(r.state)) return R.verbose(`Skipping overlay method swap for pid ${e} - state is ${r.state}`), !1;
    let s = await (0, m.E1)(e, 0);
    if (null == s) return R.error(`Failed to get revised fullscreen type for pid ${e}`), !1;
    r.fullscreenType !== s &&
        R.verbose(`Fullscreen type different in swap for pid ${e}`, {
            oldFullscreenType: r.fullscreenType,
            newFullscreenType: s,
        });
    let o = q(r, s);
    if (
        (r.overlayMethod === o.overlayMethod && r.oopEnabled === o.enabledOOP && r.legacyEnabled === o.enabledLegacy) ||
        ((P === p.UNSET_PID || null === P) && r.state === I.AR.OVERLAY_RENDERING)
    )
        return a;
    let d = L === I.V6.OUT_OF_PROCESS_V3 || L === I.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        u = L === I.V6.IN_PROCESS_V2,
        c = (0, m.e3)(s, B()),
        h = (0, m.Zj)(r, s, B());
    R.verbose(`Overlay method different for pid ${e}`, {
        oldOverlayMethod: r.overlayMethod,
        revisedFullscreenType: s,
        fullscreenHistory: r.fullscreenHistory,
        newOverlayGameStatus: o,
        shouldSwitchToHook: h,
        shouldSwitchToOutOfProcess: c,
        isForcedInProcess: u,
        isForcedOutOfProcess: d,
        legacyEnabled: v,
        overlayEnabled: B(),
    });
    let E = () => {
        R.verbose(`Updating fullscreen type for pid ${e}`, {
            oldFullscreenType: r.fullscreenType,
            newFullscreenType: s,
        }),
            W(e, "fullscreenHistory", { ...r.fullscreenHistory, [Date.now()]: s }, "updateFullscreenType"),
            W(e, "fullscreenType", s, "updateFullscreenType"),
            ec.emitChange(),
            (a = !0);
    };
    switch (o.overlayMethod) {
        case I.Ue.OutOfProcess:
        case I.Ue.OutOfProcessLimitedInteraction:
            ((c && !u) || d) &&
                (E(),
                await ((t = e),
                (n = o),
                z(t)
                    ? Y(t)?.overlayMethod === n.overlayMethod
                        ? (R.verbose(`OOP requested for pid ${t} but already enabled`), Promise.resolve())
                        : (R.verbose(`Enabling OOP for pid ${t}`),
                          W(t, "hasChangedRenderMode", !0, "enableOutOfProcess"),
                          et(t, n, "enableOutOfProcess"))
                    : (R.verbose(`OOP requested for untracked pid ${t}`), Promise.resolve())));
            break;
        case I.Ue.Hook:
            ((h && !d) || u || v) &&
                (E(),
                await ((i = e),
                (l = o),
                z(i)
                    ? Y(i)?.overlayMethod === I.Ue.Hook
                        ? (R.verbose(`Hook requested for pid ${i} but already enabled`), Promise.resolve())
                        : (R.verbose(`Enabling hook for pid ${i}`),
                          W(i, "hasChangedRenderMode", !0, "enableHook"),
                          et(i, l, "enableHook"))
                    : (R.verbose(`Hook requested for untracked pid ${i}`), Promise.resolve())));
            break;
        case I.Ue.Disabled:
            E(), et(e, o, "determineOverlayMethodSwap - disabled");
    }
    return a;
}
async function el(e) {
    let t = !1;
    for (let n of e) (t = (await ei(n)) || t), await (0, l.yy)(16);
    t &&
        (R.info("determineFullscreenOverlayMethodSwaps has changes"),
        ec.emitChange(),
        x(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
async function ea(e, t) {
    if (!f.O) return void R.verbose("setOverlayEnabled: not supported");
    if (
        (R.info("setOverlayEnabled: supported", { newLegacyEnabled: e, newOopEnabled: t }),
        (v = e),
        g.x.update({ legacyEnabled: e, oopEnabled: t }),
        R.info("setOverlayEnabled", { newOopEnabled: t, newLegacyEnabled: e }),
        e || t)
    )
        return void es();
    for (let e of j()) await X(e), await (0, l.yy)(16);
}
function er() {
    en(), (D = !1), (G = null), ed();
}
async function es() {
    await eo(), await (0, l.yy)(2e3);
    let e = j(),
        t = new Set([
            ...c.Ay.getRunningGames()
                .filter((e) => c.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (R.info(`Retracking ${t.size} games (${e.length} already tracked)`), t))
        await Q(n), await (0, l.yy)(16);
    R.info(`Retracked ${e.length} games`);
}
async function eo() {
    for (let e of j()) await X(e), await (0, l.yy)(16);
}
function ed() {
    u.A.hasLoadedExperiments && !D && ((D = !0), ea(g.x.legacyEnabled, g.x.oopEnabled));
}
class eu extends i.Ay.Store {
    static displayName = "OverlayRenderStore";
    initialize() {
        this.waitFor(E.default, u.A, A.A, C.A, c.Ay, N.A, h.A), this.syncWith([u.A], ed);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return H;
    }
    getHasLoadedExperiments() {
        return D;
    }
    getForcedRenderMode() {
        return L;
    }
    isAnyOverlayRendering() {
        return f.e ? h.A.getWindowOpen(y.f) : this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        return __OVERLAY__ ? I.Ue.Hook : (Y(e)?.overlayMethod ?? I.Ue.Disabled);
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === I.Ue.OutOfProcess || t === I.Ue.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        return Y(e)?.hasChangedRenderMode ?? !1;
    }
    getTrackedGameByPid(e) {
        return Y(e);
    }
    getTrackedGames() {
        return b;
    }
    getClosedTrackedGamesHistory() {
        return M;
    }
    getGameOverlayStatus(e) {
        let t = Y(e.pid);
        return null == t ? null : { enabledOOP: t.oopEnabled, enabledLegacy: t.legacyEnabled, ...t };
    }
    getGlobalEnabledStatus() {
        return { oopEnabled: B(), legacyEnabled: v };
    }
    getAnyGlobalEnabledOverlay() {
        return B() || v;
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
        return G;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(b).filter((e) => e.overlayMethod !== I.Ue.Disabled && e.state === I.AR.OVERLAY_RENDERING);
    }
}
let ec = new eu(
        a.h,
        !U
            ? {}
            : {
                  CONNECTION_OPEN: er,
                  LOGIN: function () {
                      (D = !1), (G = null);
                  },
                  LOGOUT: function () {
                      (D = !1), (G = null), eo();
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: er,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { legacyEnabled: t, oopEnabled: n } = e;
                      return R.info("handleOverlaySetEnabled", { legacyEnabled: t, oopEnabled: n }), ea(t, n), !0;
                  },
                  GAME_LAUNCH_SUCCESS: function (e) {
                      if (null != e.pids) for (let t of e.pids) Q(t);
                  },
                  RUNNING_GAMES_CHANGE: function (e) {
                      for (let t of (__OVERLAY__ &&
                          R.error("Running handleRunningGamesChange While in Overlay Context!"),
                      e.added))
                          Q(t.pid);
                      for (let t of e.removed) X(t.pid);
                  },
                  RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
                      if (
                          (__OVERLAY__ && R.error("Running handleGameToggleOverlay While in Overlay Context!"),
                          R.verbose("handleGameToggleOverlay", { action: e }),
                          !(B() || v))
                      ) {
                          if ((R.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
                              let t = e.game.pid,
                                  n = Y(t);
                              if (null != n)
                                  return et(t, q(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
                          }
                          return !1;
                      }
                      if (!("pid" in e.game))
                          return R.verbose("handleGameToggleOverlay: game is not a PersistGame"), en(), !0;
                      let t = e.game.pid,
                          { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: i } = e;
                      if (z(t)) {
                          let e = Y(t);
                          e?.legacyEnabled !== n && W(t, "legacyEnabled", n, "handleGameToggleOverlay"),
                              e?.oopEnabled !== i && W(t, "oopEnabled", i ?? !1, "handleGameToggleOverlay");
                      }
                      let l = n && v,
                          a = (i ?? !1) && B();
                      return (
                          l || a
                              ? (R.verbose("handleGameToggleOverlay: game enabled changed", {
                                    pid: t,
                                    legacyEnabled: l,
                                    overlayV3Enabled: a,
                                }),
                                z(t) ? es() : Q(t))
                              : X(t),
                          !0
                      );
                  },
                  OVERLAY_FORCE_RENDER_MODE: function (e) {
                      return (L = e.mode), es(), !0;
                  },
                  OVERLAY_UPDATE_OVERLAY_STATE: function (e) {
                      if (null != Y(e.pid))
                          return (
                              W(e.pid, "state", e.overlayState, e.reason),
                              R.verbose(`Updating overlay state for pid ${e.pid} to ${e.overlayState}`),
                              e.overlayState === I.AR.WAITING_FOR_POPOUT_OPEN ||
                              e.overlayState === I.AR.WAITING_FOR_OVERLAY_OPEN
                                  ? K(e.pid, I.sf.MODULE_TRACKING)
                                  : e.overlayState === I.AR.OVERLAY_RENDERING && K(e.pid, I.sf.OVERLAY_RENDERING),
                              !0
                          );
                  },
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: function () {
                      return es(), !0;
                  },
                  OVERLAY_CRASHED: function (e) {
                      return (
                          R.error(`Overlay crashed for pid ${e.pid}`),
                          !!z(e.pid) && (W(e.pid, "state", I.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
                      );
                  },
                  OVERLAY_RELOAD: function (e) {
                      return R.error("Overlay reload for pid", { pid: e.pid }), es(), !0;
                  },
                  OVERLAY_FOCUSED: function (e) {
                      if (((P = e.pid), k)) {
                          let t = [performance.timeOrigin + performance.now(), e.pid ?? null, e.trackMode];
                          H.push(t);
                      }
                      return !(0, p.isValidGamePID)(e.pid) || ((0, p.setPID)(e.pid), !0);
                  },
                  OVERLAY_SUCCESSFULLY_SHOWN: function (e) {
                      r.A.updateOverlayState(e.pid, I.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
                          z(e.pid) && W(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
                          x(e.pid, "overlay_successfully_shown", { pid: e.pid });
                      let t = Y(e.pid);
                      null != t && r.A.updateTrackedGame(e.pid, t);
                  },
                  OVERLAY_RENDER_DEBUG_MODE: function (e) {
                      return e.mode === I.x7.TrackFocusPIDs && (k = e.enabled), !0;
                  },
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: function () {
                      return (H = new o.A(1e4)), !0;
                  },
              },
    ),
    eh = ec;
