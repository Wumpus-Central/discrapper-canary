"use strict";
n.r(t), n.d(t, { default: () => eM }), n(321073);
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
    h = n(760751),
    p = n(723702),
    g = n(9302),
    E = n(211753),
    A = n(41984),
    I = n(181435),
    T = n(318739),
    y = n(515183),
    S = n(592598),
    v = n(682763),
    C = n(680243),
    b = n(672396),
    N = n(392164);
let R = new u.A("OverlayRenderStore"),
    O = A.V6.UNSET,
    D = !1,
    L = !1,
    w = (0, p.isWindows)() && p.isPlatformEmbedded && !__OVERLAY__,
    x = null,
    P = {},
    M = {},
    k = null,
    U = null,
    G = new Set([o.aI.FULLSCREEN, o.aI.BORDERLESS_FULLSCREEN, o.aI.UNKNOWN, o.aI.MINIMIZED]),
    F = new Set([o.aI.MINIMIZED, o.aI.UNKNOWN]),
    V = !1,
    B = new l.A(1e4);
function j(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : I.QJ.Info;
    (0, v.aS)({ pid: e, name: t, type: I.ON.Renderer, data: n, logType: r });
}
function H() {
    return D;
}
function Y() {
    return C.A.isOverlayEnabled;
}
function W() {
    return Y() || H();
}
function K(e) {
    return P[e] ?? null;
}
function $() {
    return Object.keys(P).map(Number);
}
function z(e, t, n) {
    let r = P[e]?.state;
    (P = { ...P, [e]: { ...t } }), r !== t.state && s.A.trackOverlayStateChanged(e, r, t.state, n);
}
function q(e) {
    null != P[e] && ((M[e] = { ...P[e], state: A.AR.GAME_UNTRACKED }), delete P[e]);
}
function X(e) {
    return e in P;
}
function Z(e, t, n, r) {
    let i = K(e);
    if (null == i) return void R.error(`Tried to set property ${t} to ${n} for untracked pid ${e}`);
    let a = { ...i };
    (a[t] = n), z(e, a, r);
}
function Q() {
    return { startTrackingTimestamp: Date.now() };
}
function J(e, t) {
    let n = K(e);
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
    Z(e, "timer", r, "timeOverlayEvent"), eP.emitChange();
}
async function ee(e) {
    let t = K(e);
    if (null != t) return t;
    let n = d.Ay.getGameOrTransformedSubgameForPID(e),
        r = Date.now();
    if (null == n) return R.error(`Tried to track game ${e} but it was not found in RunningGameStore`), null;
    let { enabledOOP: i, enabledLegacy: a, ...s } = (0, d.hw)(n),
        o = h.A.getGameByName(n.name),
        l = (await (0, y.E1)(e, 0)) ?? n.fullscreenType,
        u = Date.now();
    R.verbose(`Tracking game ${e} for overlay`);
    let c = {
        ...s,
        pid: e,
        oopEnabled: i,
        legacyEnabled: a,
        applicationId: o?.id ?? null,
        gameName: n.name ?? null,
        state: A.AR.INITIALIZING,
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
        eP.emitChange(),
        c
    );
}
function et(e, t) {
    switch (O) {
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
    if (!W())
        return {
            source: A.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: A.Ue.Disabled,
            reason: "Overlay globally disabled",
        };
    let n = d.Ay.getGameOrTransformedSubgameForPID(e.pid);
    if (null == n)
        return {
            source: A.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: A.Ue.Disabled,
            reason: "No running game found for tracked game",
        };
    let r = (0, d.hw)(n);
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
    if (!Y() && H()) {
        let e = (0, y.O4)(n);
        return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : A.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
        };
    }
    if (!(0, g.supportsOutOfProcess)())
        return { ...(0, y.O4)(n), source: A.yp.NO_OUT_OF_PROCESS_SUPPORT, reason: "supportsOutOfProcess failed" };
    if (!r.enabledOOP && r.enabledLegacy)
        return H()
            ? { ...(0, y.O4)(n), source: A.yp.LEGACY_ENABLED, reason: "Legacy overlay enabled only" }
            : { ...r, overlayMethod: A.Ue.Disabled, source: A.yp.LEGACY_ENABLED, reason: "Legacy overlay disabled" };
    let i = h.A.getGameByName(n.name)?.id,
        a = (0, y.zi)(n) || S.A.isLimitedInteractionOverrideEnabled(n.id ?? i);
    switch (t) {
        case o.aI.MINIMIZED:
        case o.aI.WINDOWED:
        case o.aI.MAXIMIZED:
        case o.aI.BORDERLESS_FULLSCREEN: {
            let e = r.enabledOOP && Y(),
                i = r.enabledLegacy && H(),
                s = a ? A.Ue.OutOfProcessLimitedInteraction : A.Ue.OutOfProcess;
            return {
                ...r,
                overlayMethod: e ? s : i ? (0, y.O4)(n).overlayMethod : A.Ue.Disabled,
                reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${i}, runningGameFullscreenType: ${t}`,
            };
        }
        case o.aI.FULLSCREEN: {
            let e = (0, y.O4)(n),
                t = e.enabledLegacy && H(),
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
async function en(e) {
    if (X(e)) {
        R.verbose(`Skipping track for pid ${e} - already tracked. Determining overlay method.`), await ed(new Set([e]));
        return;
    }
    if (!W()) return void R.verbose(`Skipping track for pid ${e} - overlay is disabled`);
    let t = await ee(e);
    if (null == t) return void R.error(`Failed to track game ${e}`);
    j(e, "game_tracking_starting", { game_name: t.gameName, fullscreen_type: t.fullscreenType }),
        Z(e, "state", A.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        eP.emitChange(),
        R.verbose(`Determining initial overlay method for pid ${e}`);
    let n = await ea(e);
    R.verbose(`Overlay method for pid ${e}: ${(0, y.gK)(n.overlayMethod)}`),
        J(e, A.sf.SCREEN_TYPE_RESOLUTION),
        await es(e, n, "maybeTrackGame - 2"),
        e_(y.T$),
        (U = n.overlayMethod),
        eP.emitChange(),
        await s.A.updateTrackedGame(e, t);
}
async function er(e) {
    if (!X(e)) return void R.verbose(`Skipping untrack for pid ${e} - not tracked`);
    R.verbose(`Untracking game ${e}`);
    let t = K(e),
        n = {
            source: t?.source ?? A.yp.DEFAULT,
            enabledOOP: t?.oopEnabled ?? !1,
            enabledLegacy: t?.legacyEnabled ?? !1,
            overlayMethod: A.Ue.Disabled,
            reason: "Untracking game",
        };
    await es(e, n, "maybeUntrackGame", !0), q(e), eP.emitChange(), await s.A.updateTrackedGame(e, null);
}
async function ei(e) {
    let t = d.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == t) return R.error(`Tried to determine first fullscreen type for untracked pid ${e}`), o.aI.UNKNOWN;
    let n = t?.fullscreenType ?? o.aI.UNKNOWN;
    if (G.has(n)) {
        let t = await (0, y.E1)(e, 2e3);
        R.verbose(`Resolved fullscreen type for pid ${e}: ${t}`), null != t && (n = t);
    }
    return n;
}
async function ea(e) {
    let t = await ei(e);
    if (F.has(t)) {
        let n = await (0, y.E1)(e, 3e3);
        null != n && (t = n);
    }
    if (t === o.aI.UNKNOWN) {
        let n = await (0, y.E1)(e, 3e3);
        null != n && (t = n);
    }
    let n = K(e);
    return null == n
        ? (R.error(`Tried to determine initial overlay method for untracked pid ${e}`),
          {
              source: A.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: A.Ue.Disabled,
              reason: "No tracked game found",
          })
        : et(n, t);
}
async function es(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = t.overlayMethod,
        a =
            i === A.Ue.Disabled
                ? r
                    ? A.AR.OVERLAY_TEARING_DOWN
                    : A.AR.OVERLAY_DISABLED
                : A.AR.WAITING_FOR_MODULE_TRACKING,
        o = `${n}: ${t.reason}`;
    Z(e, "state", a, o),
        Z(e, "overlayMethod", i, o),
        Z(e, "source", t.source, o),
        Z(e, "oopEnabled", t.enabledOOP, o),
        Z(e, "legacyEnabled", t.enabledLegacy, o),
        R.verbose(`Updating overlay method for pid ${e} "${K(e)?.gameName}" to ${(0, y.gK)(i)}`),
        eP.emitChange();
    let l = K(e);
    return null != l && (await s.A.updateTrackedGame(e, l)), s.A.updateOverlayMethod(e, i);
}
async function eo() {
    let e = new Set(
            d.Ay.getRunningGames()
                .filter((e) => d.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set($()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await er(e), await (0, i.yy)(16);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await en(e), await (0, i.yy)(16);
    let a = new Set([...t].filter((t) => e.has(t)));
    await ed(a),
        (n.size > 0 || r.size > 0) &&
            R.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: a,
            });
}
async function el(e) {
    let t = !1,
        n = K(e);
    if (null == n) return R.error(`Tried to determine overlay method swap for untracked pid ${e}`), !1;
    if (T.Q.has(n.state)) return R.verbose(`Skipping overlay method swap for pid ${e} - state is ${n.state}`), !1;
    let r = await (0, y.E1)(e, 0);
    if (null == r) return R.error(`Failed to get revised fullscreen type for pid ${e}`), !1;
    n.fullscreenType !== r &&
        R.verbose(`Fullscreen type different in swap for pid ${e}`, {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        });
    let i = et(n, r);
    if (
        (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy) ||
        ((x === g.UNSET_PID || null === x) && n.state === A.AR.OVERLAY_RENDERING)
    )
        return t;
    let a = O === A.V6.OUT_OF_PROCESS_V3 || O === A.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        s = O === A.V6.IN_PROCESS_V2,
        o = (0, y.e3)(r, Y()),
        l = (0, y.Zj)(n, r, Y());
    R.verbose(`Overlay method different for pid ${e}`, {
        oldOverlayMethod: n.overlayMethod,
        revisedFullscreenType: r,
        fullscreenHistory: n.fullscreenHistory,
        newOverlayGameStatus: i,
        shouldSwitchToHook: l,
        shouldSwitchToOutOfProcess: o,
        isForcedInProcess: s,
        isForcedOutOfProcess: a,
        legacyEnabled: H(),
        overlayEnabled: Y(),
    });
    let u = () => {
        R.verbose(`Updating fullscreen type for pid ${e}`, {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        }),
            Z(e, "fullscreenHistory", { ...n.fullscreenHistory, [Date.now()]: r }, "updateFullscreenType"),
            Z(e, "fullscreenType", r, "updateFullscreenType"),
            eP.emitChange(),
            (t = !0);
    };
    switch (i.overlayMethod) {
        case A.Ue.OutOfProcess:
        case A.Ue.OutOfProcessLimitedInteraction:
            ((o && !s) || a) && (u(), await ec(e, i));
            break;
        case A.Ue.Hook:
            ((l && !a) || s || H()) && (u(), await eu(e, i));
            break;
        case A.Ue.Disabled:
            u(), es(e, i, "determineOverlayMethodSwap - disabled");
    }
    return t;
}
function eu(e, t) {
    return X(e)
        ? K(e)?.overlayMethod === A.Ue.Hook
            ? (R.verbose(`Hook requested for pid ${e} but already enabled`), Promise.resolve())
            : (R.verbose(`Enabling hook for pid ${e}`),
              Z(e, "hasChangedRenderMode", !0, "enableHook"),
              es(e, t, "enableHook"))
        : (R.verbose(`Hook requested for untracked pid ${e}`), Promise.resolve());
}
function ec(e, t) {
    return X(e)
        ? K(e)?.overlayMethod === t.overlayMethod
            ? (R.verbose(`OOP requested for pid ${e} but already enabled`), Promise.resolve())
            : (R.verbose(`Enabling OOP for pid ${e}`),
              Z(e, "hasChangedRenderMode", !0, "enableOutOfProcess"),
              es(e, t, "enableOutOfProcess"))
        : (R.verbose(`OOP requested for untracked pid ${e}`), Promise.resolve());
}
async function ed(e) {
    let t = !1;
    for (let n of e) (t = (await el(n)) || t), await (0, i.yy)(16);
    t &&
        (R.info("determineFullscreenOverlayMethodSwaps has changes"),
        eP.emitChange(),
        j(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
function e_(e) {
    null == k &&
        (__OVERLAY__ && R.error("Running Polling While in Overlay Context!"),
        (k = setTimeout(async () => {
            k = null;
            let e = $();
            e.length > 0 && (e_(y.T$), await ed(new Set(e)));
        }, e)));
}
async function ef(e, t) {
    if (!b.OX) return void R.verbose("setOverlayEnabled: not supported");
    if (
        (R.info("setOverlayEnabled: supported", { newLegacyEnabled: e, newOopEnabled: t }),
        (D = e),
        E.x.update({ legacyEnabled: e, oopEnabled: t }),
        R.info("setOverlayEnabled", { newOopEnabled: t, newLegacyEnabled: e }),
        e || t)
    )
        return void eA();
    for (let e of $()) await er(e), await (0, i.yy)(16);
}
function eh() {
    eo(), (L = !1), (U = null), eD();
}
function ep(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return R.info("handleOverlaySetEnabled", { legacyEnabled: t, oopEnabled: n }), ef(t, n), !0;
}
function em(e) {
    if (null != e.pids) for (let t of e.pids) en(t);
}
function eg(e) {
    for (let t of (__OVERLAY__ && R.error("Running handleRunningGamesChange While in Overlay Context!"), e.added))
        en(t.pid);
    for (let t of e.removed) er(t.pid);
}
function eE(e) {
    if (
        (__OVERLAY__ && R.error("Running handleGameToggleOverlay While in Overlay Context!"),
        R.verbose("handleGameToggleOverlay", { action: e }),
        !W())
    ) {
        if ((R.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
            let t = e.game.pid,
                n = K(t);
            if (null != n) return es(t, et(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
        }
        return !1;
    }
    if (!("pid" in e.game)) return R.verbose("handleGameToggleOverlay: game is not a PersistGame"), eo(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (X(t)) {
        let e = K(t);
        e?.legacyEnabled !== n && Z(t, "legacyEnabled", n, "handleGameToggleOverlay"),
            e?.oopEnabled !== r && Z(t, "oopEnabled", r ?? !1, "handleGameToggleOverlay");
    }
    let i = n && H(),
        a = (r ?? !1) && Y();
    return (
        i || a
            ? (R.verbose("handleGameToggleOverlay: game enabled changed", {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: a,
              }),
              X(t) ? eA() : en(t))
            : er(t),
        !0
    );
}
async function eA() {
    await eI(), await (0, i.yy)(2e3);
    let e = $(),
        t = new Set([
            ...d.Ay.getRunningGames()
                .filter((e) => d.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (R.info(`Retracking ${t.size} games (${e.length} already tracked)`), t))
        await en(n), await (0, i.yy)(16);
    R.info(`Retracked ${e.length} games`);
}
async function eI() {
    for (let e of $()) await er(e), await (0, i.yy)(16);
}
function eT(e) {
    return R.error("Overlay reload for pid", { pid: e.pid }), eA(), !0;
}
function ey(e) {
    return (
        R.error(`Overlay crashed for pid ${e.pid}`),
        !!X(e.pid) && (Z(e.pid, "state", A.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
    );
}
function eS(e) {
    return (O = e.mode), eA(), !0;
}
function ev(e) {
    if (null != K(e.pid))
        return (
            Z(e.pid, "state", e.overlayState, e.reason),
            R.verbose(`Updating overlay state for pid ${e.pid} to ${e.overlayState}`),
            e.overlayState === A.AR.WAITING_FOR_POPOUT_OPEN || e.overlayState === A.AR.WAITING_FOR_OVERLAY_OPEN
                ? J(e.pid, A.sf.MODULE_TRACKING)
                : e.overlayState === A.AR.OVERLAY_RENDERING && J(e.pid, A.sf.OVERLAY_RENDERING),
            !0
        );
}
function eC() {
    return eA(), !0;
}
function eb(e) {
    return e.mode === A.x7.TrackFocusPIDs && (V = e.enabled), !0;
}
function eN() {
    return (B = new l.A(1e4)), !0;
}
function eR(e) {
    if (((x = e.pid), V)) {
        let t = [performance.timeOrigin + performance.now(), e.pid ?? null, e.trackMode];
        B.push(t);
    }
    return !(0, g.isValidGamePID)(e.pid) || ((0, g.setPID)(e.pid), !0);
}
function eO(e) {
    s.A.updateOverlayState(e.pid, A.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
        X(e.pid) && Z(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
        j(e.pid, "overlay_successfully_shown", { pid: e.pid });
    let t = K(e.pid);
    null != t && s.A.updateTrackedGame(e.pid, t);
}
function eD() {
    c.A.hasLoadedExperiments && !L && ((L = !0), ef(E.x.legacyEnabled, E.x.oopEnabled));
}
function eL() {
    (L = !1), (U = null);
}
function ew() {
    (L = !1), (U = null), eI();
}
class ex extends r.Ay.Store {
    static displayName = "OverlayRenderStore";
    initialize() {
        this.waitFor(f.default, c.A, h.A, S.A, d.Ay, C.A, _.A), this.syncWith([c.A], eD);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return B;
    }
    getHasLoadedExperiments() {
        return L;
    }
    getForcedRenderMode() {
        return O;
    }
    isAnyOverlayRendering() {
        return b.ed ? _.A.getWindowOpen(N.f) : this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        return __OVERLAY__ ? A.Ue.Hook : (K(e)?.overlayMethod ?? A.Ue.Disabled);
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === A.Ue.OutOfProcess || t === A.Ue.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        return K(e)?.hasChangedRenderMode ?? !1;
    }
    getTrackedGameByPid(e) {
        return K(e);
    }
    getTrackedGames() {
        return P;
    }
    getClosedTrackedGamesHistory() {
        return M;
    }
    getGameOverlayStatus(e) {
        let t = K(e.pid);
        return null == t ? null : { enabledOOP: t.oopEnabled, enabledLegacy: t.legacyEnabled, ...t };
    }
    getGlobalEnabledStatus() {
        return { oopEnabled: Y(), legacyEnabled: H() };
    }
    getAnyGlobalEnabledOverlay() {
        return Y() || H();
    }
    getPerGameEnabledStatus(e) {
        if (null == e) return { oopEnabled: !1, legacyEnabled: !1 };
        let t = K(e.pid);
        return null == t
            ? { oopEnabled: !1, legacyEnabled: !1 }
            : { oopEnabled: t.oopEnabled, legacyEnabled: t.legacyEnabled };
    }
    getRenderMethod(e) {
        if (null != e) return K(e)?.overlayMethod ?? void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return U;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(P).filter((e) => e.overlayMethod !== A.Ue.Disabled && e.state === A.AR.OVERLAY_RENDERING);
    }
}
let eP = new ex(
        a.h,
        !w
            ? {}
            : {
                  CONNECTION_OPEN: eh,
                  LOGIN: eL,
                  LOGOUT: ew,
                  EXPERIMENT_OVERRIDE_BUCKET: eh,
                  OVERLAY_SET_ENABLED: ep,
                  GAME_LAUNCH_SUCCESS: em,
                  RUNNING_GAMES_CHANGE: eg,
                  RUNNING_GAME_TOGGLE_OVERLAY: eE,
                  OVERLAY_FORCE_RENDER_MODE: eS,
                  OVERLAY_UPDATE_OVERLAY_STATE: ev,
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eC,
                  OVERLAY_CRASHED: ey,
                  OVERLAY_RELOAD: eT,
                  OVERLAY_FOCUSED: eR,
                  OVERLAY_SUCCESSFULLY_SHOWN: eO,
                  OVERLAY_RENDER_DEBUG_MODE: eb,
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eN,
              },
    ),
    eM = eP;
