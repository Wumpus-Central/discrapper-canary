"use strict";
n.r(t), n.d(t, { default: () => eM }), n(321073);
var r = n(311907),
    i = n(499979),
    s = n(73153),
    a = n(684013),
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
    E = n(211753),
    g = n(206885),
    A = n(41984),
    I = n(181435),
    T = n(318739),
    S = n(515183),
    y = n(592598),
    v = n(682763),
    N = n(680243),
    C = n(392164);
let b = new u.A("OverlayRenderStore"),
    R = A.V6.UNSET,
    O = !1,
    D = !1,
    L = (0, h.isWindows)() && h.isPlatformEmbedded && !__OVERLAY__,
    w = null,
    x = {},
    M = {},
    P = null,
    k = null,
    U = new Set([o.aI.FULLSCREEN, o.aI.BORDERLESS_FULLSCREEN, o.aI.UNKNOWN, o.aI.MINIMIZED]),
    G = new Set([o.aI.MINIMIZED, o.aI.UNKNOWN]),
    F = !1,
    V = new l.A(1e4);
function B(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : I.QJ.Info;
    (0, v.aS)({ pid: e, name: t, type: I.ON.Renderer, data: n, logType: r });
}
function H() {
    return O;
}
function j() {
    return N.A.isOverlayEnabled;
}
function Y() {
    return j() || H();
}
function W(e) {
    return x[e] ?? null;
}
function K() {
    return Object.keys(x).map(Number);
}
function z(e, t, n) {
    let r = x[e]?.state;
    (x = { ...x, [e]: { ...t } }), r !== t.state && a.A.trackOverlayStateChanged(e, r, t.state, n);
}
function $(e) {
    null != x[e] && ((M[e] = { ...x[e], state: A.AR.GAME_UNTRACKED }), delete x[e]);
}
function q(e) {
    return e in x;
}
function Z(e, t, n, r) {
    let i = W(e);
    if (null == i) return void b.error(`Tried to set property ${t} to ${n} for untracked pid ${e}`);
    let s = { ...i };
    (s[t] = n), z(e, s, r);
}
function X() {
    return { startTrackingTimestamp: Date.now() };
}
function Q(e, t) {
    let n = W(e);
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
    Z(e, "timer", r, "timeOverlayEvent"), ex.emitChange();
}
async function J(e) {
    let t = W(e);
    if (null != t) return t;
    let n = d.Ay.getGameOrTransformedSubgameForPID(e),
        r = Date.now();
    if (null == n) return b.error(`Tried to track game ${e} but it was not found in RunningGameStore`), null;
    let { enabledOOP: i, enabledLegacy: s, ...a } = (0, d.hw)(n),
        o = p.A.findGame(n),
        l = (await (0, S.E1)(e, 0)) ?? n.fullscreenType,
        u = Date.now();
    b.verbose(`Tracking game ${e} for overlay`);
    let c = {
        ...a,
        pid: e,
        oopEnabled: i,
        legacyEnabled: s,
        applicationId: o?.id ?? null,
        gameName: n.name ?? null,
        state: A.AR.INITIALIZING,
        timer: X(),
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
    if (!Y())
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
    if (!j() && H()) {
        let e = (0, S.O4)(n);
        return {
            ...e,
            overlayMethod: e.enabledLegacy ? e.overlayMethod : A.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
        };
    }
    if (!(0, m.supportsOutOfProcess)())
        return { ...(0, S.O4)(n), source: A.yp.NO_OUT_OF_PROCESS_SUPPORT, reason: "supportsOutOfProcess failed" };
    if (!r.enabledOOP && r.enabledLegacy)
        return H()
            ? { ...(0, S.O4)(n), source: A.yp.LEGACY_ENABLED, reason: "Legacy overlay enabled only" }
            : { ...r, overlayMethod: A.Ue.Disabled, source: A.yp.LEGACY_ENABLED, reason: "Legacy overlay disabled" };
    let i = p.A.findGame(n)?.id,
        s = (0, S.zi)(n) || y.A.isLimitedInteractionOverrideEnabled(n.id ?? i);
    switch (t) {
        case o.aI.MINIMIZED:
        case o.aI.WINDOWED:
        case o.aI.MAXIMIZED:
        case o.aI.BORDERLESS_FULLSCREEN: {
            let e = r.enabledOOP && j(),
                i = r.enabledLegacy && H(),
                a = s ? A.Ue.OutOfProcessLimitedInteraction : A.Ue.OutOfProcess;
            return {
                ...r,
                overlayMethod: e ? a : i ? (0, S.O4)(n).overlayMethod : A.Ue.Disabled,
                reason: `Normal case - overlayOOPEnabled: ${e}, overlayLegacyEnabled: ${i}, runningGameFullscreenType: ${t}`,
            };
        }
        case o.aI.FULLSCREEN: {
            let e = (0, S.O4)(n),
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
async function et(e) {
    if (q(e)) {
        b.verbose(`Skipping track for pid ${e} - already tracked. Determining overlay method.`), await ec(new Set([e]));
        return;
    }
    if (!Y()) return void b.verbose(`Skipping track for pid ${e} - overlay is disabled`);
    let t = await J(e);
    if (null == t) return void b.error(`Failed to track game ${e}`);
    B(e, "game_tracking_starting", { game_name: t.gameName, fullscreen_type: t.fullscreenType }),
        Z(e, "state", A.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        ex.emitChange(),
        b.verbose(`Determining initial overlay method for pid ${e}`);
    let n = await ei(e);
    b.verbose(`Overlay method for pid ${e}: ${(0, S.gK)(n.overlayMethod)}`),
        Q(e, A.sf.SCREEN_TYPE_RESOLUTION),
        await es(e, n, "maybeTrackGame - 2"),
        ed(S.T$),
        (k = n.overlayMethod),
        ex.emitChange(),
        await a.A.updateTrackedGame(e, t);
}
async function en(e) {
    if (!q(e)) return void b.verbose(`Skipping untrack for pid ${e} - not tracked`);
    b.verbose(`Untracking game ${e}`);
    let t = W(e),
        n = {
            source: t?.source ?? A.yp.DEFAULT,
            enabledOOP: t?.oopEnabled ?? !1,
            enabledLegacy: t?.legacyEnabled ?? !1,
            overlayMethod: A.Ue.Disabled,
            reason: "Untracking game",
        };
    await es(e, n, "maybeUntrackGame", !0), $(e), ex.emitChange(), await a.A.updateTrackedGame(e, null);
}
async function er(e) {
    let t = d.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == t) return b.error(`Tried to determine first fullscreen type for untracked pid ${e}`), o.aI.UNKNOWN;
    let n = t?.fullscreenType ?? o.aI.UNKNOWN;
    if (U.has(n)) {
        let t = await (0, S.E1)(e, 2e3);
        b.verbose(`Resolved fullscreen type for pid ${e}: ${t}`), null != t && (n = t);
    }
    return n;
}
async function ei(e) {
    let t = await er(e);
    if (G.has(t)) {
        let n = await (0, S.E1)(e, 3e3);
        null != n && (t = n);
    }
    if (t === o.aI.UNKNOWN) {
        let n = await (0, S.E1)(e, 3e3);
        null != n && (t = n);
    }
    let n = W(e);
    return null == n
        ? (b.error(`Tried to determine initial overlay method for untracked pid ${e}`),
          {
              source: A.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: A.Ue.Disabled,
              reason: "No tracked game found",
          })
        : ee(n, t);
}
async function es(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = t.overlayMethod,
        s =
            i === A.Ue.Disabled
                ? r
                    ? A.AR.OVERLAY_TEARING_DOWN
                    : A.AR.OVERLAY_DISABLED
                : A.AR.WAITING_FOR_MODULE_TRACKING,
        o = `${n}: ${t.reason}`;
    Z(e, "state", s, o),
        Z(e, "overlayMethod", i, o),
        Z(e, "source", t.source, o),
        Z(e, "oopEnabled", t.enabledOOP, o),
        Z(e, "legacyEnabled", t.enabledLegacy, o),
        b.verbose(`Updating overlay method for pid ${e} "${W(e)?.gameName}" to ${(0, S.gK)(i)}`),
        ex.emitChange();
    let l = W(e);
    return null != l && (await a.A.updateTrackedGame(e, l)), a.A.updateOverlayMethod(e, i);
}
async function ea() {
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
    let s = new Set([...t].filter((t) => e.has(t)));
    await ec(s),
        (n.size > 0 || r.size > 0) &&
            b.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: s,
            });
}
async function eo(e) {
    let t = !1,
        n = W(e);
    if (null == n) return b.error(`Tried to determine overlay method swap for untracked pid ${e}`), !1;
    if (T.Q.has(n.state)) return b.verbose(`Skipping overlay method swap for pid ${e} - state is ${n.state}`), !1;
    let r = await (0, S.E1)(e, 0);
    if (null == r) return b.error(`Failed to get revised fullscreen type for pid ${e}`), !1;
    n.fullscreenType !== r &&
        b.verbose(`Fullscreen type different in swap for pid ${e}`, {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        });
    let i = ee(n, r);
    if (
        (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy) ||
        ((w === m.UNSET_PID || null === w) && n.state === A.AR.OVERLAY_RENDERING)
    )
        return t;
    let s = R === A.V6.OUT_OF_PROCESS_V3 || R === A.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        a = R === A.V6.IN_PROCESS_V2,
        o = (0, S.e3)(r, j()),
        l = (0, S.Zj)(n, r, j());
    b.verbose(`Overlay method different for pid ${e}`, {
        oldOverlayMethod: n.overlayMethod,
        revisedFullscreenType: r,
        fullscreenHistory: n.fullscreenHistory,
        newOverlayGameStatus: i,
        shouldSwitchToHook: l,
        shouldSwitchToOutOfProcess: o,
        isForcedInProcess: a,
        isForcedOutOfProcess: s,
        legacyEnabled: H(),
        overlayEnabled: j(),
    });
    let u = () => {
        b.verbose(`Updating fullscreen type for pid ${e}`, {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        }),
            Z(e, "fullscreenHistory", { ...n.fullscreenHistory, [Date.now()]: r }, "updateFullscreenType"),
            Z(e, "fullscreenType", r, "updateFullscreenType"),
            ex.emitChange(),
            (t = !0);
    };
    switch (i.overlayMethod) {
        case A.Ue.OutOfProcess:
        case A.Ue.OutOfProcessLimitedInteraction:
            ((o && !a) || s) && (u(), await eu(e, i));
            break;
        case A.Ue.Hook:
            ((l && !s) || a || H()) && (u(), await el(e, i));
            break;
        case A.Ue.Disabled:
            u(), es(e, i, "determineOverlayMethodSwap - disabled");
    }
    return t;
}
function el(e, t) {
    return q(e)
        ? W(e)?.overlayMethod === A.Ue.Hook
            ? (b.verbose(`Hook requested for pid ${e} but already enabled`), Promise.resolve())
            : (b.verbose(`Enabling hook for pid ${e}`),
              Z(e, "hasChangedRenderMode", !0, "enableHook"),
              es(e, t, "enableHook"))
        : (b.verbose(`Hook requested for untracked pid ${e}`), Promise.resolve());
}
function eu(e, t) {
    return q(e)
        ? W(e)?.overlayMethod === t.overlayMethod
            ? (b.verbose(`OOP requested for pid ${e} but already enabled`), Promise.resolve())
            : (b.verbose(`Enabling OOP for pid ${e}`),
              Z(e, "hasChangedRenderMode", !0, "enableOutOfProcess"),
              es(e, t, "enableOutOfProcess"))
        : (b.verbose(`OOP requested for untracked pid ${e}`), Promise.resolve());
}
async function ec(e) {
    let t = !1;
    for (let n of e) (t = (await eo(n)) || t), await (0, i.yy)(16);
    t &&
        (b.info("determineFullscreenOverlayMethodSwaps has changes"),
        ex.emitChange(),
        B(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
function ed(e) {
    null == P &&
        (__OVERLAY__ && b.error("Running Polling While in Overlay Context!"),
        (P = setTimeout(async () => {
            P = null;
            let e = K();
            e.length > 0 && (ed(S.T$), await ec(new Set(e)));
        }, e)));
}
async function e_(e, t) {
    if (!g.O) return void b.verbose("setOverlayEnabled: not supported");
    if (
        (b.info("setOverlayEnabled: supported", { newLegacyEnabled: e, newOopEnabled: t }),
        (O = e),
        E.x.update({ legacyEnabled: e, oopEnabled: t }),
        b.info("setOverlayEnabled", { newOopEnabled: t, newLegacyEnabled: e }),
        e || t)
    )
        return void eg();
    for (let e of K()) await en(e), await (0, i.yy)(16);
}
function ef() {
    ea(), (D = !1), (k = null), eO();
}
function ep(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return b.info("handleOverlaySetEnabled", { legacyEnabled: t, oopEnabled: n }), e_(t, n), !0;
}
function eh(e) {
    if (null != e.pids) for (let t of e.pids) et(t);
}
function em(e) {
    for (let t of (__OVERLAY__ && b.error("Running handleRunningGamesChange While in Overlay Context!"), e.added))
        et(t.pid);
    for (let t of e.removed) en(t.pid);
}
function eE(e) {
    if (
        (__OVERLAY__ && b.error("Running handleGameToggleOverlay While in Overlay Context!"),
        b.verbose("handleGameToggleOverlay", { action: e }),
        !Y())
    ) {
        if ((b.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
            let t = e.game.pid,
                n = W(t);
            if (null != n) return es(t, ee(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
        }
        return !1;
    }
    if (!("pid" in e.game)) return b.verbose("handleGameToggleOverlay: game is not a PersistGame"), ea(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (q(t)) {
        let e = W(t);
        e?.legacyEnabled !== n && Z(t, "legacyEnabled", n, "handleGameToggleOverlay"),
            e?.oopEnabled !== r && Z(t, "oopEnabled", r ?? !1, "handleGameToggleOverlay");
    }
    let i = n && H(),
        s = (r ?? !1) && j();
    return (
        i || s
            ? (b.verbose("handleGameToggleOverlay: game enabled changed", {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: s,
              }),
              q(t) ? eg() : et(t))
            : en(t),
        !0
    );
}
async function eg() {
    await eA(), await (0, i.yy)(2e3);
    let e = K(),
        t = new Set([
            ...d.Ay.getRunningGames()
                .filter((e) => d.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (b.info(`Retracking ${t.size} games (${e.length} already tracked)`), t))
        await et(n), await (0, i.yy)(16);
    b.info(`Retracked ${e.length} games`);
}
async function eA() {
    for (let e of K()) await en(e), await (0, i.yy)(16);
}
function eI(e) {
    return b.error("Overlay reload for pid", { pid: e.pid }), eg(), !0;
}
function eT(e) {
    return (
        b.error(`Overlay crashed for pid ${e.pid}`),
        !!q(e.pid) && (Z(e.pid, "state", A.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
    );
}
function eS(e) {
    return (R = e.mode), eg(), !0;
}
function ey(e) {
    if (null != W(e.pid))
        return (
            Z(e.pid, "state", e.overlayState, e.reason),
            b.verbose(`Updating overlay state for pid ${e.pid} to ${e.overlayState}`),
            e.overlayState === A.AR.WAITING_FOR_POPOUT_OPEN || e.overlayState === A.AR.WAITING_FOR_OVERLAY_OPEN
                ? Q(e.pid, A.sf.MODULE_TRACKING)
                : e.overlayState === A.AR.OVERLAY_RENDERING && Q(e.pid, A.sf.OVERLAY_RENDERING),
            !0
        );
}
function ev() {
    return eg(), !0;
}
function eN(e) {
    return e.mode === A.x7.TrackFocusPIDs && (F = e.enabled), !0;
}
function eC() {
    return (V = new l.A(1e4)), !0;
}
function eb(e) {
    if (((w = e.pid), F)) {
        let t = [performance.timeOrigin + performance.now(), e.pid ?? null, e.trackMode];
        V.push(t);
    }
    return !(0, m.isValidGamePID)(e.pid) || ((0, m.setPID)(e.pid), !0);
}
function eR(e) {
    a.A.updateOverlayState(e.pid, A.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
        q(e.pid) && Z(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
        B(e.pid, "overlay_successfully_shown", { pid: e.pid });
    let t = W(e.pid);
    null != t && a.A.updateTrackedGame(e.pid, t);
}
function eO() {
    c.A.hasLoadedExperiments && !D && ((D = !0), e_(E.x.legacyEnabled, E.x.oopEnabled));
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
        this.waitFor(f.default, c.A, p.A, y.A, d.Ay, N.A, _.A), this.syncWith([c.A], eO);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return V;
    }
    getHasLoadedExperiments() {
        return D;
    }
    getForcedRenderMode() {
        return R;
    }
    isAnyOverlayRendering() {
        return g.e ? _.A.getWindowOpen(C.f) : this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        return __OVERLAY__ ? A.Ue.Hook : (W(e)?.overlayMethod ?? A.Ue.Disabled);
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === A.Ue.OutOfProcess || t === A.Ue.OutOfProcessLimitedInteraction;
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
        return M;
    }
    getGameOverlayStatus(e) {
        let t = W(e.pid);
        return null == t ? null : { enabledOOP: t.oopEnabled, enabledLegacy: t.legacyEnabled, ...t };
    }
    getGlobalEnabledStatus() {
        return { oopEnabled: j(), legacyEnabled: H() };
    }
    getAnyGlobalEnabledOverlay() {
        return j() || H();
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
        return Object.values(x).filter((e) => e.overlayMethod !== A.Ue.Disabled && e.state === A.AR.OVERLAY_RENDERING);
    }
}
let ex = new ew(
        s.h,
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
                  RUNNING_GAME_TOGGLE_OVERLAY: eE,
                  OVERLAY_FORCE_RENDER_MODE: eS,
                  OVERLAY_UPDATE_OVERLAY_STATE: ey,
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: ev,
                  OVERLAY_CRASHED: eT,
                  OVERLAY_RELOAD: eI,
                  OVERLAY_FOCUSED: eb,
                  OVERLAY_SUCCESSFULLY_SHOWN: eR,
                  OVERLAY_RENDER_DEBUG_MODE: eN,
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eC,
              },
    ),
    eM = ex;
