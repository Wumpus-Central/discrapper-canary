"use strict";
n.r(t), n.d(t, { default: () => ek }), n(321073);
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
    A = n(206885),
    I = n(41984),
    T = n(181435),
    y = n(318739),
    S = n(515183),
    v = n(592598),
    C = n(682763),
    b = n(680243),
    N = n(672396),
    R = n(392164);
let O = new u.A("OverlayRenderStore"),
    D = I.V6.UNSET,
    L = !1,
    w = !1,
    x = (0, p.isWindows)() && p.isPlatformEmbedded && !__OVERLAY__,
    P = null,
    M = {},
    k = {},
    U = null,
    G = null,
    F = new Set([o.aI.FULLSCREEN, o.aI.BORDERLESS_FULLSCREEN, o.aI.UNKNOWN, o.aI.MINIMIZED]),
    V = new Set([o.aI.MINIMIZED, o.aI.UNKNOWN]),
    B = !1,
    j = new l.A(1e4);
function H(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : T.QJ.Info;
    (0, C.aS)({ pid: e, name: t, type: T.ON.Renderer, data: n, logType: r });
}
function Y() {
    return L;
}
function W() {
    return b.A.isOverlayEnabled;
}
function K() {
    return W() || Y();
}
function $(e) {
    return M[e] ?? null;
}
function z() {
    return Object.keys(M).map(Number);
}
function q(e, t, n) {
    let r = M[e]?.state;
    (M = { ...M, [e]: { ...t } }), r !== t.state && s.A.trackOverlayStateChanged(e, r, t.state, n);
}
function X(e) {
    null != M[e] && ((k[e] = { ...M[e], state: I.AR.GAME_UNTRACKED }), delete M[e]);
}
function Z(e) {
    return e in M;
}
function Q(e, t, n, r) {
    let i = $(e);
    if (null == i) return void O.error(`Tried to set property ${t} to ${n} for untracked pid ${e}`);
    let a = { ...i };
    (a[t] = n), q(e, a, r);
}
function J() {
    return { startTrackingTimestamp: Date.now() };
}
function ee(e, t) {
    let n = $(e);
    if (null == n) return;
    let r = n.timer;
    switch (t) {
        case I.sf.SCREEN_TYPE_RESOLUTION:
            r.screenTypeResolutionTimestamp = Date.now();
            break;
        case I.sf.MODULE_TRACKING:
            r.moduleTrackingTimestamp = Date.now();
            break;
        case I.sf.OVERLAY_RENDERING:
            r.overlayRenderingTimestamp = Date.now();
    }
    Q(e, "timer", r, "timeOverlayEvent"), eM.emitChange();
}
async function et(e) {
    let t = $(e);
    if (null != t) return t;
    let n = d.Ay.getGameOrTransformedSubgameForPID(e),
        r = Date.now();
    if (null == n) return O.error(`Tried to track game ${e} but it was not found in RunningGameStore`), null;
    let { enabledOOP: i, enabledLegacy: a, ...s } = (0, d.hw)(n),
        o = h.A.getGameByName(n.name),
        l = (await (0, S.E1)(e, 0)) ?? n.fullscreenType,
        u = Date.now();
    O.verbose(`Tracking game ${e} for overlay`);
    let c = {
        ...s,
        pid: e,
        oopEnabled: i,
        legacyEnabled: a,
        applicationId: o?.id ?? null,
        gameName: n.name ?? null,
        state: I.AR.INITIALIZING,
        timer: J(),
        fullscreenType: l,
        fullscreenHistory: { [u]: l },
        hasChangedRenderMode: !1,
        supportsOutOfProcess: o?.supportsOutOfProcessOverlay ?? !0,
        successfullyShown: !1,
    };
    return (
        l !== n.fullscreenType && (c.fullscreenHistory[r] = n.fullscreenType),
        q(e, c, "initializeTrackedGame"),
        eM.emitChange(),
        c
    );
}
function en(e, t) {
    switch (D) {
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
    if (!K())
        return {
            source: I.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Overlay globally disabled",
        };
    let n = d.Ay.getGameOrTransformedSubgameForPID(e.pid);
    if (null == n)
        return {
            source: I.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "No running game found for tracked game",
        };
    let r = (0, d.hw)(n);
    if (!(r.enabledLegacy || r.enabledOOP))
        return { source: r.source, enabledOOP: !1, enabledLegacy: !1, overlayMethod: I.Ue.Disabled, reason: r.reason };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: I.yp.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Overlay disabled for specific game",
        };
    if (!W() && Y()) {
        let e = (0, S.O4)(n);
        return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : I.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
        };
    }
    if (!(0, g.supportsOutOfProcess)())
        return { ...(0, S.O4)(n), source: I.yp.NO_OUT_OF_PROCESS_SUPPORT, reason: "supportsOutOfProcess failed" };
    if (!r.enabledOOP && r.enabledLegacy)
        return Y()
            ? { ...(0, S.O4)(n), source: I.yp.LEGACY_ENABLED, reason: "Legacy overlay enabled only" }
            : { ...r, overlayMethod: I.Ue.Disabled, source: I.yp.LEGACY_ENABLED, reason: "Legacy overlay disabled" };
    let i = h.A.getGameByName(n.name)?.id,
        a = (0, S.zi)(n) || v.A.isLimitedInteractionOverrideEnabled(n.id ?? i);
    switch (t) {
        case o.aI.MINIMIZED:
        case o.aI.WINDOWED:
        case o.aI.MAXIMIZED:
        case o.aI.BORDERLESS_FULLSCREEN: {
            let e = r.enabledOOP && W(),
                i = r.enabledLegacy && Y(),
                s = a ? I.Ue.OutOfProcessLimitedInteraction : I.Ue.OutOfProcess;
            return {
                ...r,
                overlayMethod: e ? s : i ? (0, S.O4)(n).overlayMethod : I.Ue.Disabled,
                reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${i}, runningGameFullscreenType: ${t}`,
            };
        }
        case o.aI.FULLSCREEN: {
            let e = (0, S.O4)(n),
                t = e.enabledLegacy && Y(),
                r = t ? e.overlayMethod : I.Ue.Disabled;
            return { ...e, overlayMethod: r, reason: `Fullscreen - legacyEnabled: ${t}, newOverlayMethod: ${r}` };
        }
        case o.aI.UNKNOWN:
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
async function er(e) {
    if (Z(e)) {
        O.verbose(`Skipping track for pid ${e} - already tracked. Determining overlay method.`), await e_(new Set([e]));
        return;
    }
    if (!K()) return void O.verbose(`Skipping track for pid ${e} - overlay is disabled`);
    let t = await et(e);
    if (null == t) return void O.error(`Failed to track game ${e}`);
    H(e, "game_tracking_starting", { game_name: t.gameName, fullscreen_type: t.fullscreenType }),
        Q(e, "state", I.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        eM.emitChange(),
        O.verbose(`Determining initial overlay method for pid ${e}`);
    let n = await es(e);
    O.verbose(`Overlay method for pid ${e}: ${(0, S.gK)(n.overlayMethod)}`),
        ee(e, I.sf.SCREEN_TYPE_RESOLUTION),
        await eo(e, n, "maybeTrackGame - 2"),
        ef(S.T$),
        (G = n.overlayMethod),
        eM.emitChange(),
        await s.A.updateTrackedGame(e, t);
}
async function ei(e) {
    if (!Z(e)) return void O.verbose(`Skipping untrack for pid ${e} - not tracked`);
    O.verbose(`Untracking game ${e}`);
    let t = $(e),
        n = {
            source: t?.source ?? I.yp.DEFAULT,
            enabledOOP: t?.oopEnabled ?? !1,
            enabledLegacy: t?.legacyEnabled ?? !1,
            overlayMethod: I.Ue.Disabled,
            reason: "Untracking game",
        };
    await eo(e, n, "maybeUntrackGame", !0), X(e), eM.emitChange(), await s.A.updateTrackedGame(e, null);
}
async function ea(e) {
    let t = d.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == t) return O.error(`Tried to determine first fullscreen type for untracked pid ${e}`), o.aI.UNKNOWN;
    let n = t?.fullscreenType ?? o.aI.UNKNOWN;
    if (F.has(n)) {
        let t = await (0, S.E1)(e, 2e3);
        O.verbose(`Resolved fullscreen type for pid ${e}: ${t}`), null != t && (n = t);
    }
    return n;
}
async function es(e) {
    let t = await ea(e);
    if (V.has(t)) {
        let n = await (0, S.E1)(e, 3e3);
        null != n && (t = n);
    }
    if (t === o.aI.UNKNOWN) {
        let n = await (0, S.E1)(e, 3e3);
        null != n && (t = n);
    }
    let n = $(e);
    return null == n
        ? (O.error(`Tried to determine initial overlay method for untracked pid ${e}`),
          {
              source: I.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: I.Ue.Disabled,
              reason: "No tracked game found",
          })
        : en(n, t);
}
async function eo(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = t.overlayMethod,
        a =
            i === I.Ue.Disabled
                ? r
                    ? I.AR.OVERLAY_TEARING_DOWN
                    : I.AR.OVERLAY_DISABLED
                : I.AR.WAITING_FOR_MODULE_TRACKING,
        o = `${n}: ${t.reason}`;
    Q(e, "state", a, o),
        Q(e, "overlayMethod", i, o),
        Q(e, "source", t.source, o),
        Q(e, "oopEnabled", t.enabledOOP, o),
        Q(e, "legacyEnabled", t.enabledLegacy, o),
        O.verbose(`Updating overlay method for pid ${e} "${$(e)?.gameName}" to ${(0, S.gK)(i)}`),
        eM.emitChange();
    let l = $(e);
    return null != l && (await s.A.updateTrackedGame(e, l)), s.A.updateOverlayMethod(e, i);
}
async function el() {
    let e = new Set(
            d.Ay.getRunningGames()
                .filter((e) => d.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(z()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await ei(e), await (0, i.yy)(16);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await er(e), await (0, i.yy)(16);
    let a = new Set([...t].filter((t) => e.has(t)));
    await e_(a),
        (n.size > 0 || r.size > 0) &&
            O.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: a,
            });
}
async function eu(e) {
    let t = !1,
        n = $(e);
    if (null == n) return O.error(`Tried to determine overlay method swap for untracked pid ${e}`), !1;
    if (y.Q.has(n.state)) return O.verbose(`Skipping overlay method swap for pid ${e} - state is ${n.state}`), !1;
    let r = await (0, S.E1)(e, 0);
    if (null == r) return O.error(`Failed to get revised fullscreen type for pid ${e}`), !1;
    n.fullscreenType !== r &&
        O.verbose(`Fullscreen type different in swap for pid ${e}`, {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        });
    let i = en(n, r);
    if (
        (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy) ||
        ((P === g.UNSET_PID || null === P) && n.state === I.AR.OVERLAY_RENDERING)
    )
        return t;
    let a = D === I.V6.OUT_OF_PROCESS_V3 || D === I.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        s = D === I.V6.IN_PROCESS_V2,
        o = (0, S.e3)(r, W()),
        l = (0, S.Zj)(n, r, W());
    O.verbose(`Overlay method different for pid ${e}`, {
        oldOverlayMethod: n.overlayMethod,
        revisedFullscreenType: r,
        fullscreenHistory: n.fullscreenHistory,
        newOverlayGameStatus: i,
        shouldSwitchToHook: l,
        shouldSwitchToOutOfProcess: o,
        isForcedInProcess: s,
        isForcedOutOfProcess: a,
        legacyEnabled: Y(),
        overlayEnabled: W(),
    });
    let u = () => {
        O.verbose(`Updating fullscreen type for pid ${e}`, {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        }),
            Q(e, "fullscreenHistory", { ...n.fullscreenHistory, [Date.now()]: r }, "updateFullscreenType"),
            Q(e, "fullscreenType", r, "updateFullscreenType"),
            eM.emitChange(),
            (t = !0);
    };
    switch (i.overlayMethod) {
        case I.Ue.OutOfProcess:
        case I.Ue.OutOfProcessLimitedInteraction:
            ((o && !s) || a) && (u(), await ed(e, i));
            break;
        case I.Ue.Hook:
            ((l && !a) || s || Y()) && (u(), await ec(e, i));
            break;
        case I.Ue.Disabled:
            u(), eo(e, i, "determineOverlayMethodSwap - disabled");
    }
    return t;
}
function ec(e, t) {
    return Z(e)
        ? $(e)?.overlayMethod === I.Ue.Hook
            ? (O.verbose(`Hook requested for pid ${e} but already enabled`), Promise.resolve())
            : (O.verbose(`Enabling hook for pid ${e}`),
              Q(e, "hasChangedRenderMode", !0, "enableHook"),
              eo(e, t, "enableHook"))
        : (O.verbose(`Hook requested for untracked pid ${e}`), Promise.resolve());
}
function ed(e, t) {
    return Z(e)
        ? $(e)?.overlayMethod === t.overlayMethod
            ? (O.verbose(`OOP requested for pid ${e} but already enabled`), Promise.resolve())
            : (O.verbose(`Enabling OOP for pid ${e}`),
              Q(e, "hasChangedRenderMode", !0, "enableOutOfProcess"),
              eo(e, t, "enableOutOfProcess"))
        : (O.verbose(`OOP requested for untracked pid ${e}`), Promise.resolve());
}
async function e_(e) {
    let t = !1;
    for (let n of e) (t = (await eu(n)) || t), await (0, i.yy)(16);
    t &&
        (O.info("determineFullscreenOverlayMethodSwaps has changes"),
        eM.emitChange(),
        H(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
function ef(e) {
    null == U &&
        (__OVERLAY__ && O.error("Running Polling While in Overlay Context!"),
        (U = setTimeout(async () => {
            U = null;
            let e = z();
            e.length > 0 && (ef(S.T$), await e_(new Set(e)));
        }, e)));
}
async function eh(e, t) {
    if (!A.O) return void O.verbose("setOverlayEnabled: not supported");
    if (
        (O.info("setOverlayEnabled: supported", { newLegacyEnabled: e, newOopEnabled: t }),
        (L = e),
        E.x.update({ legacyEnabled: e, oopEnabled: t }),
        O.info("setOverlayEnabled", { newOopEnabled: t, newLegacyEnabled: e }),
        e || t)
    )
        return void eI();
    for (let e of z()) await ei(e), await (0, i.yy)(16);
}
function ep() {
    el(), (w = !1), (G = null), eL();
}
function em(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return O.info("handleOverlaySetEnabled", { legacyEnabled: t, oopEnabled: n }), eh(t, n), !0;
}
function eg(e) {
    if (null != e.pids) for (let t of e.pids) er(t);
}
function eE(e) {
    for (let t of (__OVERLAY__ && O.error("Running handleRunningGamesChange While in Overlay Context!"), e.added))
        er(t.pid);
    for (let t of e.removed) ei(t.pid);
}
function eA(e) {
    if (
        (__OVERLAY__ && O.error("Running handleGameToggleOverlay While in Overlay Context!"),
        O.verbose("handleGameToggleOverlay", { action: e }),
        !K())
    ) {
        if ((O.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
            let t = e.game.pid,
                n = $(t);
            if (null != n) return eo(t, en(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
        }
        return !1;
    }
    if (!("pid" in e.game)) return O.verbose("handleGameToggleOverlay: game is not a PersistGame"), el(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (Z(t)) {
        let e = $(t);
        e?.legacyEnabled !== n && Q(t, "legacyEnabled", n, "handleGameToggleOverlay"),
            e?.oopEnabled !== r && Q(t, "oopEnabled", r ?? !1, "handleGameToggleOverlay");
    }
    let i = n && Y(),
        a = (r ?? !1) && W();
    return (
        i || a
            ? (O.verbose("handleGameToggleOverlay: game enabled changed", {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: a,
              }),
              Z(t) ? eI() : er(t))
            : ei(t),
        !0
    );
}
async function eI() {
    await eT(), await (0, i.yy)(2e3);
    let e = z(),
        t = new Set([
            ...d.Ay.getRunningGames()
                .filter((e) => d.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (O.info(`Retracking ${t.size} games (${e.length} already tracked)`), t))
        await er(n), await (0, i.yy)(16);
    O.info(`Retracked ${e.length} games`);
}
async function eT() {
    for (let e of z()) await ei(e), await (0, i.yy)(16);
}
function ey(e) {
    return O.error("Overlay reload for pid", { pid: e.pid }), eI(), !0;
}
function eS(e) {
    return (
        O.error(`Overlay crashed for pid ${e.pid}`),
        !!Z(e.pid) && (Q(e.pid, "state", I.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
    );
}
function ev(e) {
    return (D = e.mode), eI(), !0;
}
function eC(e) {
    if (null != $(e.pid))
        return (
            Q(e.pid, "state", e.overlayState, e.reason),
            O.verbose(`Updating overlay state for pid ${e.pid} to ${e.overlayState}`),
            e.overlayState === I.AR.WAITING_FOR_POPOUT_OPEN || e.overlayState === I.AR.WAITING_FOR_OVERLAY_OPEN
                ? ee(e.pid, I.sf.MODULE_TRACKING)
                : e.overlayState === I.AR.OVERLAY_RENDERING && ee(e.pid, I.sf.OVERLAY_RENDERING),
            !0
        );
}
function eb() {
    return eI(), !0;
}
function eN(e) {
    return e.mode === I.x7.TrackFocusPIDs && (B = e.enabled), !0;
}
function eR() {
    return (j = new l.A(1e4)), !0;
}
function eO(e) {
    if (((P = e.pid), B)) {
        let t = [performance.timeOrigin + performance.now(), e.pid ?? null, e.trackMode];
        j.push(t);
    }
    return !(0, g.isValidGamePID)(e.pid) || ((0, g.setPID)(e.pid), !0);
}
function eD(e) {
    s.A.updateOverlayState(e.pid, I.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
        Z(e.pid) && Q(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
        H(e.pid, "overlay_successfully_shown", { pid: e.pid });
    let t = $(e.pid);
    null != t && s.A.updateTrackedGame(e.pid, t);
}
function eL() {
    c.A.hasLoadedExperiments && !w && ((w = !0), eh(E.x.legacyEnabled, E.x.oopEnabled));
}
function ew() {
    (w = !1), (G = null);
}
function ex() {
    (w = !1), (G = null), eT();
}
class eP extends r.Ay.Store {
    static displayName = "OverlayRenderStore";
    initialize() {
        this.waitFor(f.default, c.A, h.A, v.A, d.Ay, b.A, _.A), this.syncWith([c.A], eL);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return j;
    }
    getHasLoadedExperiments() {
        return w;
    }
    getForcedRenderMode() {
        return D;
    }
    isAnyOverlayRendering() {
        return N.ed ? _.A.getWindowOpen(R.f) : this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        return __OVERLAY__ ? I.Ue.Hook : ($(e)?.overlayMethod ?? I.Ue.Disabled);
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === I.Ue.OutOfProcess || t === I.Ue.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        return $(e)?.hasChangedRenderMode ?? !1;
    }
    getTrackedGameByPid(e) {
        return $(e);
    }
    getTrackedGames() {
        return M;
    }
    getClosedTrackedGamesHistory() {
        return k;
    }
    getGameOverlayStatus(e) {
        let t = $(e.pid);
        return null == t ? null : { enabledOOP: t.oopEnabled, enabledLegacy: t.legacyEnabled, ...t };
    }
    getGlobalEnabledStatus() {
        return { oopEnabled: W(), legacyEnabled: Y() };
    }
    getAnyGlobalEnabledOverlay() {
        return W() || Y();
    }
    getPerGameEnabledStatus(e) {
        if (null == e) return { oopEnabled: !1, legacyEnabled: !1 };
        let t = $(e.pid);
        return null == t
            ? { oopEnabled: !1, legacyEnabled: !1 }
            : { oopEnabled: t.oopEnabled, legacyEnabled: t.legacyEnabled };
    }
    getRenderMethod(e) {
        if (null != e) return $(e)?.overlayMethod ?? void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return G;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(M).filter((e) => e.overlayMethod !== I.Ue.Disabled && e.state === I.AR.OVERLAY_RENDERING);
    }
}
let eM = new eP(
        a.h,
        !x
            ? {}
            : {
                  CONNECTION_OPEN: ep,
                  LOGIN: ew,
                  LOGOUT: ex,
                  EXPERIMENT_OVERRIDE_BUCKET: ep,
                  OVERLAY_SET_ENABLED: em,
                  GAME_LAUNCH_SUCCESS: eg,
                  RUNNING_GAMES_CHANGE: eE,
                  RUNNING_GAME_TOGGLE_OVERLAY: eA,
                  OVERLAY_FORCE_RENDER_MODE: ev,
                  OVERLAY_UPDATE_OVERLAY_STATE: eC,
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eb,
                  OVERLAY_CRASHED: eS,
                  OVERLAY_RELOAD: ey,
                  OVERLAY_FOCUSED: eO,
                  OVERLAY_SUCCESSFULLY_SHOWN: eD,
                  OVERLAY_RENDER_DEBUG_MODE: eN,
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eR,
              },
    ),
    ek = eM;
