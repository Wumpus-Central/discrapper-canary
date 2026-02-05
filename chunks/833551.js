"use strict";
n.r(t), n.d(t, { default: () => eP }), n(321073);
var r = n(311907),
    i = n(499979),
    a = n(73153),
    s = n(684013),
    o = n(56562),
    l = n(635731),
    u = n(626584),
    c = n(49463),
    d = n(15285),
    _ = n(87001),
    f = n(961350),
    p = n(760751),
    h = n(723702),
    m = n(9302),
    g = n(211753),
    E = n(41984),
    A = n(181435),
    I = n(318739),
    T = n(515183),
    y = n(592598),
    S = n(682763),
    v = n(680243),
    C = n(672396),
    b = n(392164);
let N = new u.A("OverlayRenderStore"),
    R = E.V6.UNSET,
    O = !1,
    D = !1,
    L = (0, h.isWindows)() && h.isPlatformEmbedded && !__OVERLAY__,
    w = null,
    x = {},
    P = {},
    M = null,
    k = null,
    U = new Set([o.aI.FULLSCREEN, o.aI.BORDERLESS_FULLSCREEN, o.aI.UNKNOWN, o.aI.MINIMIZED]),
    G = new Set([o.aI.MINIMIZED, o.aI.UNKNOWN]),
    V = !1,
    F = new l.A(1e4);
function B(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : A.QJ.Info;
    (0, S.aS)({ pid: e, name: t, type: A.ON.Renderer, data: n, logType: r });
}
function j() {
    return O;
}
function H() {
    return v.A.isOverlayEnabled;
}
function Y() {
    return H() || j();
}
function W(e) {
    return x[e] ?? null;
}
function K() {
    return Object.keys(x).map(Number);
}
function z(e, t, n) {
    let r = x[e]?.state;
    (x = { ...x, [e]: { ...t } }), r !== t.state && s.A.trackOverlayStateChanged(e, r, t.state, n);
}
function $(e) {
    null != x[e] && ((P[e] = { ...x[e], state: E.AR.GAME_UNTRACKED }), delete x[e]);
}
function q(e) {
    return e in x;
}
function Z(e, t, n, r) {
    let i = W(e);
    if (null == i) return void N.error(`Tried to set property ${t} to ${n} for untracked pid ${e}`);
    let a = { ...i };
    (a[t] = n), z(e, a, r);
}
function Q() {
    return { startTrackingTimestamp: Date.now() };
}
function X(e, t) {
    let n = W(e);
    if (null == n) return;
    let r = n.timer;
    switch (t) {
        case E.sf.SCREEN_TYPE_RESOLUTION:
            r.screenTypeResolutionTimestamp = Date.now();
            break;
        case E.sf.MODULE_TRACKING:
            r.moduleTrackingTimestamp = Date.now();
            break;
        case E.sf.OVERLAY_RENDERING:
            r.overlayRenderingTimestamp = Date.now();
    }
    Z(e, "timer", r, "timeOverlayEvent"), ex.emitChange();
}
async function J(e) {
    let t = W(e);
    if (null != t) return t;
    let n = d.Ay.getGameOrTransformedSubgameForPID(e),
        r = Date.now();
    if (null == n) return N.error(`Tried to track game ${e} but it was not found in RunningGameStore`), null;
    let { enabledOOP: i, enabledLegacy: a, ...s } = (0, d.hw)(n),
        o = p.A.getGameByName(n.name),
        l = (await (0, T.E1)(e, 0)) ?? n.fullscreenType,
        u = Date.now();
    N.verbose(`Tracking game ${e} for overlay`);
    let c = {
        ...s,
        pid: e,
        oopEnabled: i,
        legacyEnabled: a,
        applicationId: o?.id ?? null,
        gameName: n.name ?? null,
        state: E.AR.INITIALIZING,
        timer: Q(),
        fullscreenType: l,
        fullscreenHistory: { [u]: l },
        hasChangedRenderMode: !1,
        supportsOutOfProcess: o?.supportsOutOfProcessOverlay ?? !0,
        successfullyShown: !1,
    };
    return (
        l !== n.fullscreenType && (c.fullscreenHistory[r] = n.fullscreenType),
        z(e, c, "initializeTrackedGame"),
        ex.emitChange(),
        c
    );
}
function ee(e, t) {
    switch (R) {
        case E.V6.UNSET:
            break;
        case E.V6.IN_PROCESS_V2:
            return {
                source: E.yp.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: E.Ue.Hook,
                reason: "Forced in-process overlay rendering",
            };
        case E.V6.OUT_OF_PROCESS_V3:
            return {
                source: E.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: E.Ue.OutOfProcess,
                reason: "Forced out-of-process overlay rendering",
            };
        case E.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: E.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: E.Ue.OutOfProcessLimitedInteraction,
                reason: "Forced out-of-process limited interaction overlay rendering",
            };
    }
    if (!Y())
        return {
            source: E.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: E.Ue.Disabled,
            reason: "Overlay globally disabled",
        };
    let n = d.Ay.getGameOrTransformedSubgameForPID(e.pid);
    if (null == n)
        return {
            source: E.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: E.Ue.Disabled,
            reason: "No running game found for tracked game",
        };
    let r = (0, d.hw)(n);
    if (!(r.enabledLegacy || r.enabledOOP))
        return { source: r.source, enabledOOP: !1, enabledLegacy: !1, overlayMethod: E.Ue.Disabled, reason: r.reason };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: E.yp.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: E.Ue.Disabled,
            reason: "Overlay disabled for specific game",
        };
    if (!H() && j()) {
        let e = (0, T.O4)(n);
        return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : E.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
        };
    }
    if (!(0, m.supportsOutOfProcess)())
        return { ...(0, T.O4)(n), source: E.yp.NO_OUT_OF_PROCESS_SUPPORT, reason: "supportsOutOfProcess failed" };
    if (!r.enabledOOP && r.enabledLegacy)
        return j()
            ? { ...(0, T.O4)(n), source: E.yp.LEGACY_ENABLED, reason: "Legacy overlay enabled only" }
            : { ...r, overlayMethod: E.Ue.Disabled, source: E.yp.LEGACY_ENABLED, reason: "Legacy overlay disabled" };
    let i = p.A.getGameByName(n.name)?.id,
        a = (0, T.zi)(n) || y.A.isLimitedInteractionOverrideEnabled(n.id ?? i);
    switch (t) {
        case o.aI.MINIMIZED:
        case o.aI.WINDOWED:
        case o.aI.MAXIMIZED:
        case o.aI.BORDERLESS_FULLSCREEN: {
            let e = r.enabledOOP && H(),
                i = r.enabledLegacy && j(),
                s = a ? E.Ue.OutOfProcessLimitedInteraction : E.Ue.OutOfProcess;
            return {
                ...r,
                overlayMethod: e ? s : i ? (0, T.O4)(n).overlayMethod : E.Ue.Disabled,
                reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${i}, runningGameFullscreenType: ${t}`,
            };
        }
        case o.aI.FULLSCREEN: {
            let e = (0, T.O4)(n),
                t = e.enabledLegacy && j(),
                r = t ? e.overlayMethod : E.Ue.Disabled;
            return { ...e, overlayMethod: r, reason: `Fullscreen - legacyEnabled: ${t}, newOverlayMethod: ${r}` };
        }
        case o.aI.UNKNOWN:
            return {
                source: E.yp.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: E.Ue.Disabled,
                reason: "Unknown fullscreen type",
            };
        default:
            return {
                source: E.yp.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: E.Ue.Disabled,
                reason: `Missing runningFullscreenType case: ${t}`,
            };
    }
}
async function et(e) {
    if (q(e)) {
        N.verbose(`Skipping track for pid ${e} - already tracked. Determining overlay method.`), await ec(new Set([e]));
        return;
    }
    if (!Y()) return void N.verbose(`Skipping track for pid ${e} - overlay is disabled`);
    let t = await J(e);
    if (null == t) return void N.error(`Failed to track game ${e}`);
    B(e, "game_tracking_starting", { game_name: t.gameName, fullscreen_type: t.fullscreenType }),
        Z(e, "state", E.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        ex.emitChange(),
        N.verbose(`Determining initial overlay method for pid ${e}`);
    let n = await ei(e);
    N.verbose(`Overlay method for pid ${e}: ${(0, T.gK)(n.overlayMethod)}`),
        X(e, E.sf.SCREEN_TYPE_RESOLUTION),
        await ea(e, n, "maybeTrackGame - 2"),
        ed(T.T$),
        (k = n.overlayMethod),
        ex.emitChange(),
        await s.A.updateTrackedGame(e, t);
}
async function en(e) {
    if (!q(e)) return void N.verbose(`Skipping untrack for pid ${e} - not tracked`);
    N.verbose(`Untracking game ${e}`);
    let t = W(e),
        n = {
            source: t?.source ?? E.yp.DEFAULT,
            enabledOOP: t?.oopEnabled ?? !1,
            enabledLegacy: t?.legacyEnabled ?? !1,
            overlayMethod: E.Ue.Disabled,
            reason: "Untracking game",
        };
    await ea(e, n, "maybeUntrackGame", !0), $(e), ex.emitChange(), await s.A.updateTrackedGame(e, null);
}
async function er(e) {
    let t = d.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == t) return N.error(`Tried to determine first fullscreen type for untracked pid ${e}`), o.aI.UNKNOWN;
    let n = t?.fullscreenType ?? o.aI.UNKNOWN;
    if (U.has(n)) {
        let t = await (0, T.E1)(e, (0, T.Ag)("first_fullscreen"));
        N.verbose(`Resolved fullscreen type for pid ${e}: ${t}`), null != t && (n = t);
    }
    return n;
}
async function ei(e) {
    let t = await er(e);
    if (G.has(t)) {
        let n = await (0, T.E1)(e, (0, T.mk)("initial_status"));
        null != n && (t = n);
    }
    if (t === o.aI.UNKNOWN) {
        let n = await (0, T.E1)(e, (0, T.mk)("initial_status"));
        null != n && (t = n);
    }
    let n = W(e);
    return null == n
        ? (N.error(`Tried to determine initial overlay method for untracked pid ${e}`),
          {
              source: E.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: E.Ue.Disabled,
              reason: "No tracked game found",
          })
        : ee(n, t);
}
async function ea(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = t.overlayMethod,
        a =
            i === E.Ue.Disabled
                ? r
                    ? E.AR.OVERLAY_TEARING_DOWN
                    : E.AR.OVERLAY_DISABLED
                : E.AR.WAITING_FOR_MODULE_TRACKING,
        o = `${n}: ${t.reason}`;
    Z(e, "state", a, o),
        Z(e, "overlayMethod", i, o),
        Z(e, "source", t.source, o),
        Z(e, "oopEnabled", t.enabledOOP, o),
        Z(e, "legacyEnabled", t.enabledLegacy, o),
        N.verbose(`Updating overlay method for pid ${e} "${W(e)?.gameName}" to ${(0, T.gK)(i)}`),
        ex.emitChange();
    let l = W(e);
    return null != l && (await s.A.updateTrackedGame(e, l)), s.A.updateOverlayMethod(e, i);
}
async function es() {
    let e = new Set(
            d.Ay.getRunningGames()
                .filter((e) => d.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(K()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await en(e), await (0, i.yy)(16);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await et(e), await (0, i.yy)(16);
    let a = new Set([...t].filter((t) => e.has(t)));
    await ec(a),
        (n.size > 0 || r.size > 0) &&
            N.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: a,
            });
}
async function eo(e) {
    let t = !1,
        n = W(e);
    if (null == n) return N.error(`Tried to determine overlay method swap for untracked pid ${e}`), !1;
    if (I.Q.has(n.state)) return N.verbose(`Skipping overlay method swap for pid ${e} - state is ${n.state}`), !1;
    let r = await (0, T.E1)(e, 0);
    if (null == r) return N.error(`Failed to get revised fullscreen type for pid ${e}`), !1;
    n.fullscreenType !== r &&
        N.verbose(`Fullscreen type different in swap for pid ${e}`, {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        });
    let i = ee(n, r);
    if (
        (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy) ||
        ((w === m.UNSET_PID || null === w) && n.state === E.AR.OVERLAY_RENDERING)
    )
        return t;
    let a = R === E.V6.OUT_OF_PROCESS_V3 || R === E.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        s = R === E.V6.IN_PROCESS_V2,
        o = (0, T.e3)(r, H()),
        l = (0, T.Zj)(n, r, H());
    N.verbose(`Overlay method different for pid ${e}`, {
        oldOverlayMethod: n.overlayMethod,
        revisedFullscreenType: r,
        fullscreenHistory: n.fullscreenHistory,
        newOverlayGameStatus: i,
        shouldSwitchToHook: l,
        shouldSwitchToOutOfProcess: o,
        isForcedInProcess: s,
        isForcedOutOfProcess: a,
        legacyEnabled: j(),
        overlayEnabled: H(),
    });
    let u = () => {
        N.verbose(`Updating fullscreen type for pid ${e}`, {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        }),
            Z(e, "fullscreenHistory", { ...n.fullscreenHistory, [Date.now()]: r }, "updateFullscreenType"),
            Z(e, "fullscreenType", r, "updateFullscreenType"),
            ex.emitChange(),
            (t = !0);
    };
    switch (i.overlayMethod) {
        case E.Ue.OutOfProcess:
        case E.Ue.OutOfProcessLimitedInteraction:
            ((o && !s) || a) && (u(), await eu(e, i));
            break;
        case E.Ue.Hook:
            ((l && !a) || s || j()) && (u(), await el(e, i));
            break;
        case E.Ue.Disabled:
            u(), ea(e, i, "determineOverlayMethodSwap - disabled");
    }
    return t;
}
function el(e, t) {
    return q(e)
        ? W(e)?.overlayMethod === E.Ue.Hook
            ? (N.verbose(`Hook requested for pid ${e} but already enabled`), Promise.resolve())
            : (N.verbose(`Enabling hook for pid ${e}`),
              Z(e, "hasChangedRenderMode", !0, "enableHook"),
              ea(e, t, "enableHook"))
        : (N.verbose(`Hook requested for untracked pid ${e}`), Promise.resolve());
}
function eu(e, t) {
    return q(e)
        ? W(e)?.overlayMethod === t.overlayMethod
            ? (N.verbose(`OOP requested for pid ${e} but already enabled`), Promise.resolve())
            : (N.verbose(`Enabling OOP for pid ${e}`),
              Z(e, "hasChangedRenderMode", !0, "enableOutOfProcess"),
              ea(e, t, "enableOutOfProcess"))
        : (N.verbose(`OOP requested for untracked pid ${e}`), Promise.resolve());
}
async function ec(e) {
    let t = !1;
    for (let n of e) (t = (await eo(n)) || t), await (0, i.yy)(16);
    t &&
        (N.info("determineFullscreenOverlayMethodSwaps has changes"),
        ex.emitChange(),
        B(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
function ed(e) {
    null == M &&
        (__OVERLAY__ && N.error("Running Polling While in Overlay Context!"),
        (M = setTimeout(async () => {
            M = null;
            let e = K();
            e.length > 0 && (ed(T.T$), await ec(new Set(e)));
        }, e)));
}
async function e_(e, t) {
    if (!C.OX) return void N.verbose("setOverlayEnabled: not supported");
    if (
        (N.info("setOverlayEnabled: supported", { newLegacyEnabled: e, newOopEnabled: t }),
        (O = e),
        g.x.update({ legacyEnabled: e, oopEnabled: t }),
        N.info("setOverlayEnabled", { newOopEnabled: t, newLegacyEnabled: e }),
        e || t)
    )
        return void eE();
    for (let e of K()) await en(e), await (0, i.yy)(16);
}
function ef() {
    es(), (D = !1), (k = null), eO();
}
function ep(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return N.info("handleOverlaySetEnabled", { legacyEnabled: t, oopEnabled: n }), e_(t, n), !0;
}
function eh(e) {
    if (null != e.pids) for (let t of e.pids) et(t);
}
function em(e) {
    for (let t of (__OVERLAY__ && N.error("Running handleRunningGamesChange While in Overlay Context!"), e.added))
        et(t.pid);
    for (let t of e.removed) en(t.pid);
}
function eg(e) {
    if (
        (__OVERLAY__ && N.error("Running handleGameToggleOverlay While in Overlay Context!"),
        N.verbose("handleGameToggleOverlay", { action: e }),
        !Y())
    ) {
        if ((N.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
            let t = e.game.pid,
                n = W(t);
            if (null != n) return ea(t, ee(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
        }
        return !1;
    }
    if (!("pid" in e.game)) return N.verbose("handleGameToggleOverlay: game is not a PersistGame"), es(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (q(t)) {
        let e = W(t);
        e?.legacyEnabled !== n && Z(t, "legacyEnabled", n, "handleGameToggleOverlay"),
            e?.oopEnabled !== r && Z(t, "oopEnabled", r ?? !1, "handleGameToggleOverlay");
    }
    let i = n && j(),
        a = (r ?? !1) && H();
    return (
        i || a
            ? (N.verbose("handleGameToggleOverlay: game enabled changed", {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: a,
              }),
              q(t) ? eE() : et(t))
            : en(t),
        !0
    );
}
async function eE() {
    await eA(), await (0, i.yy)(2e3);
    let e = K(),
        t = new Set([
            ...d.Ay.getRunningGames()
                .filter((e) => d.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (N.info(`Retracking ${t.size} games (${e.length} already tracked)`), t))
        await et(n), await (0, i.yy)(16);
    N.info(`Retracked ${e.length} games`);
}
async function eA() {
    for (let e of K()) await en(e), await (0, i.yy)(16);
}
function eI(e) {
    return N.error("Overlay reload for pid", { pid: e.pid }), eE(), !0;
}
function eT(e) {
    return (
        N.error(`Overlay crashed for pid ${e.pid}`),
        !!q(e.pid) && (Z(e.pid, "state", E.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
    );
}
function ey(e) {
    return (R = e.mode), eE(), !0;
}
function eS(e) {
    if (null != W(e.pid))
        return (
            Z(e.pid, "state", e.overlayState, e.reason),
            N.verbose(`Updating overlay state for pid ${e.pid} to ${e.overlayState}`),
            e.overlayState === E.AR.WAITING_FOR_POPOUT_OPEN || e.overlayState === E.AR.WAITING_FOR_OVERLAY_OPEN
                ? X(e.pid, E.sf.MODULE_TRACKING)
                : e.overlayState === E.AR.OVERLAY_RENDERING && X(e.pid, E.sf.OVERLAY_RENDERING),
            !0
        );
}
function ev() {
    return eE(), !0;
}
function eC(e) {
    return e.mode === E.x7.TrackFocusPIDs && (V = e.enabled), !0;
}
function eb() {
    return (F = new l.A(1e4)), !0;
}
function eN(e) {
    if (((w = e.pid), V)) {
        let t = [performance.timeOrigin + performance.now(), e.pid ?? null, e.trackMode];
        F.push(t);
    }
    return !(0, m.isValidGamePID)(e.pid) || ((0, m.setPID)(e.pid), !0);
}
function eR(e) {
    s.A.updateOverlayState(e.pid, E.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
        q(e.pid) && Z(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
        B(e.pid, "overlay_successfully_shown", { pid: e.pid });
    let t = W(e.pid);
    null != t && s.A.updateTrackedGame(e.pid, t);
}
function eO() {
    c.A.hasLoadedExperiments && !D && ((D = !0), e_(g.x.legacyEnabled, g.x.oopEnabled));
}
function eD() {
    (D = !1), (k = null);
}
function eL() {
    (D = !1), (k = null), eA();
}
class ew extends r.Ay.Store {
    static displayName = "OverlayRenderStore";
    initialize() {
        this.waitFor(f.default, c.A, p.A, y.A, d.Ay, v.A, _.A), this.syncWith([c.A], eO);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return F;
    }
    getHasLoadedExperiments() {
        return D;
    }
    getForcedRenderMode() {
        return R;
    }
    isAnyOverlayRendering() {
        return C.ed ? _.A.getWindowOpen(b.f) : this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        return __OVERLAY__ ? E.Ue.Hook : (W(e)?.overlayMethod ?? E.Ue.Disabled);
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === E.Ue.OutOfProcess || t === E.Ue.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        return W(e)?.hasChangedRenderMode ?? !1;
    }
    getTrackedGameByPid(e) {
        return W(e);
    }
    getTrackedGames() {
        return x;
    }
    getClosedTrackedGamesHistory() {
        return P;
    }
    getGameOverlayStatus(e) {
        let t = W(e.pid);
        return null == t ? null : { enabledOOP: t.oopEnabled, enabledLegacy: t.legacyEnabled, ...t };
    }
    getGlobalEnabledStatus() {
        return { oopEnabled: H(), legacyEnabled: j() };
    }
    getAnyGlobalEnabledOverlay() {
        return H() || j();
    }
    getPerGameEnabledStatus(e) {
        if (null == e) return { oopEnabled: !1, legacyEnabled: !1 };
        let t = W(e.pid);
        return null == t
            ? { oopEnabled: !1, legacyEnabled: !1 }
            : { oopEnabled: t.oopEnabled, legacyEnabled: t.legacyEnabled };
    }
    getRenderMethod(e) {
        if (null != e) return W(e)?.overlayMethod ?? void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return k;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(x).filter((e) => e.overlayMethod !== E.Ue.Disabled && e.state === E.AR.OVERLAY_RENDERING);
    }
}
let ex = new ew(
        a.h,
        !L
            ? {}
            : {
                  CONNECTION_OPEN: ef,
                  LOGIN: eD,
                  LOGOUT: eL,
                  EXPERIMENT_OVERRIDE_BUCKET: ef,
                  OVERLAY_SET_ENABLED: ep,
                  GAME_LAUNCH_SUCCESS: eh,
                  RUNNING_GAMES_CHANGE: em,
                  RUNNING_GAME_TOGGLE_OVERLAY: eg,
                  OVERLAY_FORCE_RENDER_MODE: ey,
                  OVERLAY_UPDATE_OVERLAY_STATE: eS,
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: ev,
                  OVERLAY_CRASHED: eT,
                  OVERLAY_RELOAD: eI,
                  OVERLAY_FOCUSED: eN,
                  OVERLAY_SUCCESSFULLY_SHOWN: eR,
                  OVERLAY_RENDER_DEBUG_MODE: eC,
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eb,
              },
    ),
    eP = ex;
