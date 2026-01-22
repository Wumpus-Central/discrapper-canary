n.r(t), n.d(t, { default: () => eG }), n(896048), n(321073);
var r,
    i = n(311907),
    a = n(499979),
    s = n(73153),
    o = n(684013),
    l = n(56562),
    c = n(635731),
    u = n(626584),
    d = n(49463),
    f = n(15285),
    p = n(961350),
    _ = n(760751),
    h = n(723702),
    m = n(9302),
    g = n(211753),
    E = n(41984),
    b = n(181435),
    y = n(318739),
    O = n(515183),
    A = n(592598),
    v = n(682763),
    S = n(680243),
    I = n(672396);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = P(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let D = new u.A("OverlayRenderStore"),
    x = E.V6.UNSET,
    L = !1,
    j = !1,
    M = (0, h.isWindows)() && h.isPlatformEmbedded && !__OVERLAY__,
    k = null,
    U = {},
    G = {},
    V = null,
    F = null,
    B = new Set([l.aI.FULLSCREEN, l.aI.BORDERLESS_FULLSCREEN, l.aI.UNKNOWN, l.aI.MINIMIZED]),
    H = new Set([l.aI.MINIMIZED, l.aI.UNKNOWN]),
    Y = !1,
    W = new c.A(10000);
function K(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b.QJ.Info;
    (0, v.aS)({
        pid: e,
        name: t,
        type: b.ON.Renderer,
        data: n,
        logType: r,
    });
}
function z() {
    return L;
}
function q() {
    return S.A.isOverlayEnabled;
}
function X() {
    return q() || z();
}
function Z(e) {
    var t;
    return null != (t = U[e]) ? t : null;
}
function Q() {
    return Object.keys(U).map(Number);
}
function $(e, t, n) {
    var r;
    let i = null == (r = U[e]) ? void 0 : r.state;
    (U = R(C({}, U), { [e]: C({}, t) })), i !== t.state && o.A.trackOverlayStateChanged(e, i, t.state, n);
}
function J(e) {
    null != U[e] && ((G[e] = R(C({}, U[e]), { state: E.AR.GAME_UNTRACKED })), delete U[e]);
}
function ee(e) {
    return e in U;
}
function et(e, t, n, r) {
    let i = Z(e);
    if (null == i)
        return void D.error("Tried to set property ".concat(t, " to ").concat(n, " for untracked pid ").concat(e));
    let a = C({}, i);
    (a[t] = n), $(e, a, r);
}
function en() {
    return { startTrackingTimestamp: Date.now() };
}
function er(e, t) {
    let n = Z(e);
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
    et(e, "timer", r, "timeOverlayEvent"), eU.emitChange();
}
async function ei(e) {
    var t, n, r, i;
    let a = Z(e);
    if (null != a) return a;
    let s = f.Ay.getGameOrTransformedSubgameForPID(e),
        o = Date.now();
    if (null == s) return D.error("Tried to track game ".concat(e, " but it was not found in RunningGameStore")), null;
    let l = (0, f.hw)(s),
        { enabledOOP: c, enabledLegacy: u } = l,
        d = w(l, ["enabledOOP", "enabledLegacy"]),
        p = _.A.getGameByName(s.name),
        h = null != (t = await (0, O.E1)(e, 0)) ? t : s.fullscreenType,
        m = Date.now();
    D.verbose("Tracking game ".concat(e, " for overlay"));
    let g = R(C({}, d), {
        pid: e,
        oopEnabled: c,
        legacyEnabled: u,
        applicationId: null != (n = null == p ? void 0 : p.id) ? n : null,
        gameName: null != (r = s.name) ? r : null,
        state: E.AR.INITIALIZING,
        timer: en(),
        fullscreenType: h,
        fullscreenHistory: { [m]: h },
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null == (i = null == p ? void 0 : p.supportsOutOfProcessOverlay) || i,
        successfullyShown: !1,
    });
    return (
        h !== s.fullscreenType && (g.fullscreenHistory[o] = s.fullscreenType),
        $(e, g, "initializeTrackedGame"),
        eU.emitChange(),
        g
    );
}
function ea(e, t) {
    var n, r;
    switch (x) {
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
    if (!X())
        return {
            source: E.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: E.Ue.Disabled,
            reason: "Overlay globally disabled",
        };
    let i = f.Ay.getGameOrTransformedSubgameForPID(e.pid);
    if (null == i)
        return {
            source: E.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: E.Ue.Disabled,
            reason: "No running game found for tracked game",
        };
    let a = (0, f.hw)(i);
    if (!(a.enabledLegacy || a.enabledOOP))
        return {
            source: a.source,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: E.Ue.Disabled,
            reason: a.reason,
        };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: E.yp.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: E.Ue.Disabled,
            reason: "Overlay disabled for specific game",
        };
    if (!q() && z()) {
        let e = (0, O.O4)(i);
        return R(C({}, e), {
            overlayMethod: e.enabledLegacy ? e.overlayMethod : E.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
        });
    }
    if (!(0, m.supportsOutOfProcess)())
        return R(C({}, (0, O.O4)(i)), {
            source: E.yp.NO_OUT_OF_PROCESS_SUPPORT,
            reason: "supportsOutOfProcess failed",
        });
    if (!a.enabledOOP && a.enabledLegacy)
        return z()
            ? R(C({}, (0, O.O4)(i)), {
                  source: E.yp.LEGACY_ENABLED,
                  reason: "Legacy overlay enabled only",
              })
            : R(C({}, a), {
                  overlayMethod: E.Ue.Disabled,
                  source: E.yp.LEGACY_ENABLED,
                  reason: "Legacy overlay disabled",
              });
    let s = null == (r = _.A.getGameByName(i.name)) ? void 0 : r.id,
        o = (0, O.zi)(i) || A.A.isLimitedInteractionOverrideEnabled(null != (n = i.id) ? n : s);
    switch (t) {
        case l.aI.MINIMIZED:
        case l.aI.WINDOWED:
        case l.aI.MAXIMIZED:
        case l.aI.BORDERLESS_FULLSCREEN: {
            let e = a.enabledOOP && q(),
                n = a.enabledLegacy && z(),
                r = o ? E.Ue.OutOfProcessLimitedInteraction : E.Ue.OutOfProcess;
            return R(C({}, a), {
                overlayMethod: e ? r : n ? (0, O.O4)(i).overlayMethod : E.Ue.Disabled,
                reason: "Normal case - overlayOOPEnabled: "
                    .concat(e, ", overlayLegacyEnabled: ")
                    .concat(n, ", runningGameFullscreenType: ")
                    .concat(t),
            });
        }
        case l.aI.FULLSCREEN: {
            let e = (0, O.O4)(i),
                t = e.enabledLegacy && z(),
                n = t ? e.overlayMethod : E.Ue.Disabled;
            return R(C({}, e), {
                overlayMethod: n,
                reason: "Fullscreen - legacyEnabled: ".concat(t, ", newOverlayMethod: ").concat(n),
            });
        }
        case l.aI.UNKNOWN:
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
                reason: "Missing runningFullscreenType case: ".concat(t),
            };
    }
}
async function es(e) {
    if (ee(e)) {
        D.verbose("Skipping track for pid ".concat(e, " - already tracked. Determining overlay method.")),
            await eh(new Set([e]));
        return;
    }
    if (!X()) return void D.verbose("Skipping track for pid ".concat(e, " - overlay is disabled"));
    let t = await ei(e);
    if (null == t) return void D.error("Failed to track game ".concat(e));
    K(e, "game_tracking_starting", {
        game_name: t.gameName,
        fullscreen_type: t.fullscreenType,
    }),
        et(e, "state", E.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        eU.emitChange(),
        D.verbose("Determining initial overlay method for pid ".concat(e));
    let n = await ec(e);
    D.verbose("Overlay method for pid ".concat(e, ": ").concat((0, O.gK)(n.overlayMethod))),
        er(e, E.sf.SCREEN_TYPE_RESOLUTION),
        await eu(e, n, "maybeTrackGame - 2"),
        em(O.T$),
        (F = n.overlayMethod),
        eU.emitChange(),
        await o.A.updateTrackedGame(e, t);
}
async function eo(e) {
    var t, n, r;
    if (!ee(e)) return void D.verbose("Skipping untrack for pid ".concat(e, " - not tracked"));
    D.verbose("Untracking game ".concat(e));
    let i = Z(e),
        a = {
            source: null != (t = null == i ? void 0 : i.source) ? t : E.yp.DEFAULT,
            enabledOOP: null != (n = null == i ? void 0 : i.oopEnabled) && n,
            enabledLegacy: null != (r = null == i ? void 0 : i.legacyEnabled) && r,
            overlayMethod: E.Ue.Disabled,
            reason: "Untracking game",
        };
    await eu(e, a, "maybeUntrackGame", !0), J(e), eU.emitChange(), await o.A.updateTrackedGame(e, null);
}
async function el(e) {
    var t;
    let n = f.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == n)
        return D.error("Tried to determine first fullscreen type for untracked pid ".concat(e)), l.aI.UNKNOWN;
    let r = null != (t = null == n ? void 0 : n.fullscreenType) ? t : l.aI.UNKNOWN;
    if (B.has(r)) {
        let t = await (0, O.E1)(e, (0, O.Ag)("first_fullscreen"));
        D.verbose("Resolved fullscreen type for pid ".concat(e, ": ").concat(t)), null != t && (r = t);
    }
    return r;
}
async function ec(e) {
    let t = await el(e);
    if (H.has(t)) {
        let n = await (0, O.E1)(e, (0, O.mk)("initial_status"));
        null != n && (t = n);
    }
    if (t === l.aI.UNKNOWN) {
        let n = await (0, O.E1)(e, (0, O.mk)("initial_status"));
        null != n && (t = n);
    }
    let n = Z(e);
    return null == n
        ? (D.error("Tried to determine initial overlay method for untracked pid ".concat(e)),
          {
              source: E.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: E.Ue.Disabled,
              reason: "No tracked game found",
          })
        : ea(n, t);
}
async function eu(e, t, n) {
    var r;
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = t.overlayMethod,
        s =
            a === E.Ue.Disabled
                ? i
                    ? E.AR.OVERLAY_TEARING_DOWN
                    : E.AR.OVERLAY_DISABLED
                : E.AR.WAITING_FOR_MODULE_TRACKING,
        l = "".concat(n, ": ").concat(t.reason);
    et(e, "state", s, l),
        et(e, "overlayMethod", a, l),
        et(e, "source", t.source, l),
        et(e, "oopEnabled", t.enabledOOP, l),
        et(e, "legacyEnabled", t.enabledLegacy, l),
        D.verbose(
            "Updating overlay method for pid "
                .concat(e, ' "')
                .concat(null == (r = Z(e)) ? void 0 : r.gameName, '" to ')
                .concat((0, O.gK)(a)),
        ),
        eU.emitChange();
    let c = Z(e);
    return null != c && (await o.A.updateTrackedGame(e, c)), o.A.updateOverlayMethod(e, a);
}
async function ed() {
    let e = new Set(
            f.Ay.getRunningGames()
                .filter((e) => f.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set(Q()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await eo(e), await (0, a.yy)(16);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await es(e), await (0, a.yy)(16);
    let i = new Set([...t].filter((t) => e.has(t)));
    await eh(i),
        (n.size > 0 || r.size > 0) &&
            D.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: i,
            });
}
async function ef(e) {
    let t = !1,
        n = Z(e);
    if (null == n) return D.error("Tried to determine overlay method swap for untracked pid ".concat(e)), !1;
    if (y.Q.has(n.state))
        return D.verbose("Skipping overlay method swap for pid ".concat(e, " - state is ").concat(n.state)), !1;
    let r = await (0, O.E1)(e, 0);
    if (null == r) return D.error("Failed to get revised fullscreen type for pid ".concat(e)), !1;
    n.fullscreenType !== r &&
        D.verbose("Fullscreen type different in swap for pid ".concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        });
    let i = ea(n, r);
    if (
        (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy) ||
        ((k === m.UNSET_PID || null === k) && n.state === E.AR.OVERLAY_RENDERING)
    )
        return t;
    let a = x === E.V6.OUT_OF_PROCESS_V3 || x === E.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        s = x === E.V6.IN_PROCESS_V2,
        o = (0, O.e3)(r, q()),
        l = (0, O.Zj)(n, r, q());
    D.verbose("Overlay method different for pid ".concat(e), {
        oldOverlayMethod: n.overlayMethod,
        revisedFullscreenType: r,
        fullscreenHistory: n.fullscreenHistory,
        newOverlayGameStatus: i,
        shouldSwitchToHook: l,
        shouldSwitchToOutOfProcess: o,
        isForcedInProcess: s,
        isForcedOutOfProcess: a,
        legacyEnabled: z(),
        overlayEnabled: q(),
    });
    let c = () => {
        D.verbose("Updating fullscreen type for pid ".concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        }),
            et(e, "fullscreenHistory", R(C({}, n.fullscreenHistory), { [Date.now()]: r }), "updateFullscreenType"),
            et(e, "fullscreenType", r, "updateFullscreenType"),
            eU.emitChange(),
            (t = !0);
    };
    switch (i.overlayMethod) {
        case E.Ue.OutOfProcess:
        case E.Ue.OutOfProcessLimitedInteraction:
            ((o && !s) || a) && (c(), await e_(e, i));
            break;
        case E.Ue.Hook:
            ((l && !a) || s || z()) && (c(), await ep(e, i));
            break;
        case E.Ue.Disabled:
            c(), eu(e, i, "determineOverlayMethodSwap - disabled");
    }
    return t;
}
function ep(e, t) {
    var n;
    return ee(e)
        ? (null == (n = Z(e)) ? void 0 : n.overlayMethod) === E.Ue.Hook
            ? (D.verbose("Hook requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (D.verbose("Enabling hook for pid ".concat(e)),
              et(e, "hasChangedRenderMode", !0, "enableHook"),
              eu(e, t, "enableHook"))
        : (D.verbose("Hook requested for untracked pid ".concat(e)), Promise.resolve());
}
function e_(e, t) {
    var n;
    return ee(e)
        ? (null == (n = Z(e)) ? void 0 : n.overlayMethod) === t.overlayMethod
            ? (D.verbose("OOP requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (D.verbose("Enabling OOP for pid ".concat(e)),
              et(e, "hasChangedRenderMode", !0, "enableOutOfProcess"),
              eu(e, t, "enableOutOfProcess"))
        : (D.verbose("OOP requested for untracked pid ".concat(e)), Promise.resolve());
}
async function eh(e) {
    let t = !1;
    for (let n of e) (t = (await ef(n)) || t), await (0, a.yy)(16);
    t &&
        (D.info("determineFullscreenOverlayMethodSwaps has changes"),
        eU.emitChange(),
        K(null, "fullscreen_overlay_method_swap_changes", { tracked_game_pids: Array.from(e) }));
}
function em(e) {
    null == V &&
        (__OVERLAY__ && D.error("Running Polling While in Overlay Context!"),
        (V = setTimeout(async () => {
            V = null;
            let e = Q();
            e.length > 0 && (em(O.T$), await eh(new Set(e)));
        }, e)));
}
async function eg(e, t) {
    if (!I.OX) return void D.verbose("setOverlayEnabled: not supported");
    if (
        (D.info("setOverlayEnabled: supported", {
            newLegacyEnabled: e,
            newOopEnabled: t,
        }),
        (L = e),
        g.x.update({
            legacyEnabled: e,
            oopEnabled: t,
        }),
        D.info("setOverlayEnabled", {
            newOopEnabled: t,
            newLegacyEnabled: e,
        }),
        e || t)
    )
        return void ev();
    for (let e of Q()) await eo(e), await (0, a.yy)(16);
}
function eE() {
    ed(), (j = !1), (F = null), eL();
}
function eb(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return (
        D.info("handleOverlaySetEnabled", {
            legacyEnabled: t,
            oopEnabled: n,
        }),
        eg(t, n),
        !0
    );
}
function ey(e) {
    if (null != e.pids) for (let t of e.pids) es(t);
}
function eO(e) {
    for (let t of (__OVERLAY__ && D.error("Running handleRunningGamesChange While in Overlay Context!"), e.added))
        es(t.pid);
    for (let t of e.removed) eo(t.pid);
}
function eA(e) {
    if (
        (__OVERLAY__ && D.error("Running handleGameToggleOverlay While in Overlay Context!"),
        D.verbose("handleGameToggleOverlay", { action: e }),
        !X())
    ) {
        if ((D.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
            let t = e.game.pid,
                n = Z(t);
            if (null != n) return eu(t, ea(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
        }
        return !1;
    }
    if (!("pid" in e.game)) return D.verbose("handleGameToggleOverlay: game is not a PersistGame"), ed(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (ee(t)) {
        let e = Z(t);
        (null == e ? void 0 : e.legacyEnabled) !== n && et(t, "legacyEnabled", n, "handleGameToggleOverlay"),
            (null == e ? void 0 : e.oopEnabled) !== r && et(t, "oopEnabled", null != r && r, "handleGameToggleOverlay");
    }
    let i = n && z(),
        a = null != r && r && q();
    return (
        i || a
            ? (D.verbose("handleGameToggleOverlay: game enabled changed", {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: a,
              }),
              ee(t) ? ev() : es(t))
            : eo(t),
        !0
    );
}
async function ev() {
    await eS(), await (0, a.yy)(2000);
    let e = Q(),
        t = new Set([
            ...f.Ay.getRunningGames()
                .filter((e) => f.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (D.info("Retracking ".concat(t.size, " games (").concat(e.length, " already tracked)")), t))
        await es(n), await (0, a.yy)(16);
    D.info("Retracked ".concat(e.length, " games"));
}
async function eS() {
    for (let e of Q()) await eo(e), await (0, a.yy)(16);
}
function eI(e) {
    return D.error("Overlay reload for pid", { pid: e.pid }), ev(), !0;
}
function eT(e) {
    return (
        D.error("Overlay crashed for pid ".concat(e.pid)),
        !!ee(e.pid) && (et(e.pid, "state", E.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
    );
}
function eC(e) {
    return (x = e.mode), ev(), !0;
}
function eN(e) {
    if (null != Z(e.pid))
        return (
            et(e.pid, "state", e.overlayState, e.reason),
            D.verbose("Updating overlay state for pid ".concat(e.pid, " to ").concat(e.overlayState)),
            e.overlayState === E.AR.WAITING_FOR_POPOUT_OPEN || e.overlayState === E.AR.WAITING_FOR_OVERLAY_OPEN
                ? er(e.pid, E.sf.MODULE_TRACKING)
                : e.overlayState === E.AR.OVERLAY_RENDERING && er(e.pid, E.sf.OVERLAY_RENDERING),
            !0
        );
}
function eR() {
    return ev(), !0;
}
function ew(e) {
    return e.mode === E.x7.TrackFocusPIDs && (Y = e.enabled), !0;
}
function eP() {
    return (W = new c.A(10000)), !0;
}
function eD(e) {
    if (((k = e.pid), Y)) {
        var t;
        let n = [performance.timeOrigin + performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
        W.push(n);
    }
    return !(0, m.isValidGamePID)(e.pid) || ((0, m.setPID)(e.pid), !0);
}
function ex(e) {
    o.A.updateOverlayState(e.pid, E.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
        ee(e.pid) && et(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
        K(e.pid, "overlay_successfully_shown", { pid: e.pid });
    let t = Z(e.pid);
    null != t && o.A.updateTrackedGame(e.pid, t);
}
function eL() {
    d.A.hasLoadedExperiments && !j && ((j = !0), eg(g.x.legacyEnabled, g.x.oopEnabled));
}
function ej() {
    (j = !1), (F = null);
}
function eM() {
    (j = !1), (F = null), eS();
}
class ek extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(p.default, d.A, _.A, A.A, f.Ay, S.A), this.syncWith([d.A], eL);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return W;
    }
    getHasLoadedExperiments() {
        return j;
    }
    getForcedRenderMode() {
        return x;
    }
    isAnyOverlayRendering() {
        return this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        var t, n;
        return __OVERLAY__
            ? E.Ue.Hook
            : null != (t = null == (n = Z(e)) ? void 0 : n.overlayMethod)
              ? t
              : E.Ue.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === E.Ue.OutOfProcess || t === E.Ue.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null != (t = null == (n = Z(e)) ? void 0 : n.hasChangedRenderMode) && t;
    }
    getTrackedGameByPid(e) {
        return Z(e);
    }
    getTrackedGames() {
        return U;
    }
    getClosedTrackedGamesHistory() {
        return G;
    }
    getGameOverlayStatus(e) {
        let t = Z(e.pid);
        return null == t
            ? null
            : C(
                  {
                      enabledOOP: t.oopEnabled,
                      enabledLegacy: t.legacyEnabled,
                  },
                  t,
              );
    }
    getGlobalEnabledStatus() {
        return {
            oopEnabled: q(),
            legacyEnabled: z(),
        };
    }
    getAnyGlobalEnabledOverlay() {
        return q() || z();
    }
    getPerGameEnabledStatus(e) {
        if (null == e)
            return {
                oopEnabled: !1,
                legacyEnabled: !1,
            };
        let t = Z(e.pid);
        return null == t
            ? {
                  oopEnabled: !1,
                  legacyEnabled: !1,
              }
            : {
                  oopEnabled: t.oopEnabled,
                  legacyEnabled: t.legacyEnabled,
              };
    }
    getRenderMethod(e) {
        var t, n;
        if (null != e) return null != (t = null == (n = Z(e)) ? void 0 : n.overlayMethod) ? t : void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return F;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(U).filter((e) => e.overlayMethod !== E.Ue.Disabled && e.state === E.AR.OVERLAY_RENDERING);
    }
}
T(ek, "displayName", "OverlayRenderStore");
let eU = new ek(
        s.h,
        !M
            ? {}
            : {
                  CONNECTION_OPEN: eE,
                  LOGIN: ej,
                  LOGOUT: eM,
                  EXPERIMENT_OVERRIDE_BUCKET: eE,
                  OVERLAY_SET_ENABLED: eb,
                  GAME_LAUNCH_SUCCESS: ey,
                  RUNNING_GAMES_CHANGE: eO,
                  RUNNING_GAME_TOGGLE_OVERLAY: eA,
                  OVERLAY_FORCE_RENDER_MODE: eC,
                  OVERLAY_UPDATE_OVERLAY_STATE: eN,
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eR,
                  OVERLAY_CRASHED: eT,
                  OVERLAY_RELOAD: eI,
                  OVERLAY_FOCUSED: eD,
                  OVERLAY_SUCCESSFULLY_SHOWN: ex,
                  OVERLAY_RENDER_DEBUG_MODE: ew,
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eP,
              },
    ),
    eG = eU;
