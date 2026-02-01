n.r(t),
    n.d(t, {
        default: () => eF,
    }),
    n(896048),
    n(321073);
var r,
    i = n(311907),
    a = n(499979),
    o = n(73153),
    s = n(684013),
    l = n(56562),
    c = n(635731),
    u = n(626584),
    d = n(49463),
    f = n(15285),
    p = n(87001),
    _ = n(961350),
    h = n(760751),
    m = n(723702),
    g = n(9302),
    E = n(211753),
    y = n(41984),
    b = n(181435),
    O = n(318739),
    v = n(515183),
    A = n(592598),
    I = n(682763),
    S = n(680243),
    T = n(672396),
    C = n(392164);

function N(e, t, n) {
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

function w(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}

function R(e, t) {
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

function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function D(e, t) {
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
    if (((a = L(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let x = new u.A("OverlayRenderStore"),
    M = y.V6.UNSET,
    j = !1,
    k = !1,
    U = (0, m.isWindows)() && m.isPlatformEmbedded && !__OVERLAY__,
    G = null,
    V = {},
    F = {},
    B = null,
    H = null,
    Y = new Set([l.aI.FULLSCREEN, l.aI.BORDERLESS_FULLSCREEN, l.aI.UNKNOWN, l.aI.MINIMIZED]),
    W = new Set([l.aI.MINIMIZED, l.aI.UNKNOWN]),
    K = !1,
    z = new c.A(1e4);

function q(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b.QJ.Info;
    (0, I.aS)({
        pid: e,
        name: t,
        type: b.ON.Renderer,
        data: n,
        logType: r,
    });
}

function Z() {
    return j;
}

function Q() {
    return S.A.isOverlayEnabled;
}

function X() {
    return Q() || Z();
}

function J(e) {
    var t;
    return null != (t = V[e]) ? t : null;
}

function $() {
    return Object.keys(V).map(Number);
}

function ee(e, t, n) {
    var r;
    let i = null == (r = V[e]) ? void 0 : r.state;
    (V = P(w({}, V), {
        [e]: w({}, t),
    })),
        i !== t.state && s.A.trackOverlayStateChanged(e, i, t.state, n);
}

function et(e) {
    null != V[e] &&
        ((F[e] = P(w({}, V[e]), {
            state: y.AR.GAME_UNTRACKED,
        })),
        delete V[e]);
}

function en(e) {
    return e in V;
}

function er(e, t, n, r) {
    let i = J(e);
    if (null == i)
        return void x.error("Tried to set property ".concat(t, " to ").concat(n, " for untracked pid ").concat(e));
    let a = w({}, i);
    (a[t] = n), ee(e, a, r);
}

function ei() {
    return {
        startTrackingTimestamp: Date.now(),
    };
}

function ea(e, t) {
    let n = J(e);
    if (null == n) return;
    let r = n.timer;
    switch (t) {
        case y.sf.SCREEN_TYPE_RESOLUTION:
            r.screenTypeResolutionTimestamp = Date.now();
            break;
        case y.sf.MODULE_TRACKING:
            r.moduleTrackingTimestamp = Date.now();
            break;
        case y.sf.OVERLAY_RENDERING:
            r.overlayRenderingTimestamp = Date.now();
    }
    er(e, "timer", r, "timeOverlayEvent"), eV.emitChange();
}
async function eo(e) {
    var t, n, r, i;
    let a = J(e);
    if (null != a) return a;
    let o = f.Ay.getGameOrTransformedSubgameForPID(e),
        s = Date.now();
    if (null == o) return x.error("Tried to track game ".concat(e, " but it was not found in RunningGameStore")), null;
    let l = (0, f.hw)(o),
        { enabledOOP: c, enabledLegacy: u } = l,
        d = D(l, ["enabledOOP", "enabledLegacy"]),
        p = h.A.getGameByName(o.name),
        _ = null != (t = await (0, v.E1)(e, 0)) ? t : o.fullscreenType,
        m = Date.now();
    x.verbose("Tracking game ".concat(e, " for overlay"));
    let g = P(w({}, d), {
        pid: e,
        oopEnabled: c,
        legacyEnabled: u,
        applicationId: null != (n = null == p ? void 0 : p.id) ? n : null,
        gameName: null != (r = o.name) ? r : null,
        state: y.AR.INITIALIZING,
        timer: ei(),
        fullscreenType: _,
        fullscreenHistory: {
            [m]: _,
        },
        hasChangedRenderMode: !1,
        supportsOutOfProcess: null == (i = null == p ? void 0 : p.supportsOutOfProcessOverlay) || i,
        successfullyShown: !1,
    });
    return (
        _ !== o.fullscreenType && (g.fullscreenHistory[s] = o.fullscreenType),
        ee(e, g, "initializeTrackedGame"),
        eV.emitChange(),
        g
    );
}

function es(e, t) {
    var n, r;
    switch (M) {
        case y.V6.UNSET:
            break;
        case y.V6.IN_PROCESS_V2:
            return {
                source: y.yp.DEV_OVERRIDE,
                enabledOOP: !1,
                enabledLegacy: !0,
                overlayMethod: y.Ue.Hook,
                reason: "Forced in-process overlay rendering",
            };
        case y.V6.OUT_OF_PROCESS_V3:
            return {
                source: y.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: y.Ue.OutOfProcess,
                reason: "Forced out-of-process overlay rendering",
            };
        case y.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION:
            return {
                source: y.yp.DEV_OVERRIDE,
                enabledOOP: !0,
                enabledLegacy: !1,
                overlayMethod: y.Ue.OutOfProcessLimitedInteraction,
                reason: "Forced out-of-process limited interaction overlay rendering",
            };
    }
    if (!X())
        return {
            source: y.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: y.Ue.Disabled,
            reason: "Overlay globally disabled",
        };
    let i = f.Ay.getGameOrTransformedSubgameForPID(e.pid);
    if (null == i)
        return {
            source: y.yp.DEFAULT,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: y.Ue.Disabled,
            reason: "No running game found for tracked game",
        };
    let a = (0, f.hw)(i);
    if (!(a.enabledLegacy || a.enabledOOP))
        return {
            source: a.source,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: y.Ue.Disabled,
            reason: a.reason,
        };
    if (!(e.oopEnabled || e.legacyEnabled))
        return {
            source: y.yp.USER_OVERRIDE,
            enabledOOP: !1,
            enabledLegacy: !1,
            overlayMethod: y.Ue.Disabled,
            reason: "Overlay disabled for specific game",
        };
    if (!Q() && Z()) {
        let e = (0, v.O4)(i);
        return P(w({}, e), {
            overlayMethod: e.enabledLegacy ? e.overlayMethod : y.Ue.Disabled,
            reason: "isOverlayV3Enabled failed",
        });
    }
    if (!(0, g.supportsOutOfProcess)())
        return P(w({}, (0, v.O4)(i)), {
            source: y.yp.NO_OUT_OF_PROCESS_SUPPORT,
            reason: "supportsOutOfProcess failed",
        });
    if (!a.enabledOOP && a.enabledLegacy)
        return Z()
            ? P(w({}, (0, v.O4)(i)), {
                  source: y.yp.LEGACY_ENABLED,
                  reason: "Legacy overlay enabled only",
              })
            : P(w({}, a), {
                  overlayMethod: y.Ue.Disabled,
                  source: y.yp.LEGACY_ENABLED,
                  reason: "Legacy overlay disabled",
              });
    let o = null == (r = h.A.getGameByName(i.name)) ? void 0 : r.id,
        s = (0, v.zi)(i) || A.A.isLimitedInteractionOverrideEnabled(null != (n = i.id) ? n : o);
    switch (t) {
        case l.aI.MINIMIZED:
        case l.aI.WINDOWED:
        case l.aI.MAXIMIZED:
        case l.aI.BORDERLESS_FULLSCREEN: {
            let e = a.enabledOOP && Q(),
                n = a.enabledLegacy && Z(),
                r = s ? y.Ue.OutOfProcessLimitedInteraction : y.Ue.OutOfProcess;
            return P(w({}, a), {
                overlayMethod: e ? r : n ? (0, v.O4)(i).overlayMethod : y.Ue.Disabled,
                reason: "Normal case - overlayOOPEnabled: "
                    .concat(e, ", overlayLegacyEnabled: ")
                    .concat(n, ", runningGameFullscreenType: ")
                    .concat(t),
            });
        }
        case l.aI.FULLSCREEN: {
            let e = (0, v.O4)(i),
                t = e.enabledLegacy && Z(),
                n = t ? e.overlayMethod : y.Ue.Disabled;
            return P(w({}, e), {
                overlayMethod: n,
                reason: "Fullscreen - legacyEnabled: ".concat(t, ", newOverlayMethod: ").concat(n),
            });
        }
        case l.aI.UNKNOWN:
            return {
                source: y.yp.FULL_SCREEN_TYPE,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: y.Ue.Disabled,
                reason: "Unknown fullscreen type",
            };
        default:
            return {
                source: y.yp.DEFAULT,
                enabledOOP: !1,
                enabledLegacy: !1,
                overlayMethod: y.Ue.Disabled,
                reason: "Missing runningFullscreenType case: ".concat(t),
            };
    }
}
async function el(e) {
    if (en(e)) {
        x.verbose("Skipping track for pid ".concat(e, " - already tracked. Determining overlay method.")),
            await eg(new Set([e]));
        return;
    }
    if (!X()) return void x.verbose("Skipping track for pid ".concat(e, " - overlay is disabled"));
    let t = await eo(e);
    if (null == t) return void x.error("Failed to track game ".concat(e));
    q(e, "game_tracking_starting", {
        game_name: t.gameName,
        fullscreen_type: t.fullscreenType,
    }),
        er(e, "state", y.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION, "maybeTrackGame - 1"),
        eV.emitChange(),
        x.verbose("Determining initial overlay method for pid ".concat(e));
    let n = await ed(e);
    x.verbose("Overlay method for pid ".concat(e, ": ").concat((0, v.gK)(n.overlayMethod))),
        ea(e, y.sf.SCREEN_TYPE_RESOLUTION),
        await ef(e, n, "maybeTrackGame - 2"),
        eE(v.T$),
        (H = n.overlayMethod),
        eV.emitChange(),
        await s.A.updateTrackedGame(e, t);
}
async function ec(e) {
    var t, n, r;
    if (!en(e)) return void x.verbose("Skipping untrack for pid ".concat(e, " - not tracked"));
    x.verbose("Untracking game ".concat(e));
    let i = J(e),
        a = {
            source: null != (t = null == i ? void 0 : i.source) ? t : y.yp.DEFAULT,
            enabledOOP: null != (n = null == i ? void 0 : i.oopEnabled) && n,
            enabledLegacy: null != (r = null == i ? void 0 : i.legacyEnabled) && r,
            overlayMethod: y.Ue.Disabled,
            reason: "Untracking game",
        };
    await ef(e, a, "maybeUntrackGame", !0), et(e), eV.emitChange(), await s.A.updateTrackedGame(e, null);
}
async function eu(e) {
    var t;
    let n = f.Ay.getGameOrTransformedSubgameForPID(e);
    if (null == n)
        return x.error("Tried to determine first fullscreen type for untracked pid ".concat(e)), l.aI.UNKNOWN;
    let r = null != (t = null == n ? void 0 : n.fullscreenType) ? t : l.aI.UNKNOWN;
    if (Y.has(r)) {
        let t = await (0, v.E1)(e, (0, v.Ag)("first_fullscreen"));
        x.verbose("Resolved fullscreen type for pid ".concat(e, ": ").concat(t)), null != t && (r = t);
    }
    return r;
}
async function ed(e) {
    let t = await eu(e);
    if (W.has(t)) {
        let n = await (0, v.E1)(e, (0, v.mk)("initial_status"));
        null != n && (t = n);
    }
    if (t === l.aI.UNKNOWN) {
        let n = await (0, v.E1)(e, (0, v.mk)("initial_status"));
        null != n && (t = n);
    }
    let n = J(e);
    return null == n
        ? (x.error("Tried to determine initial overlay method for untracked pid ".concat(e)),
          {
              source: y.yp.NO_TRACKED_GAME,
              enabledOOP: !1,
              enabledLegacy: !1,
              overlayMethod: y.Ue.Disabled,
              reason: "No tracked game found",
          })
        : es(n, t);
}
async function ef(e, t, n) {
    var r;
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = t.overlayMethod,
        o =
            a === y.Ue.Disabled
                ? i
                    ? y.AR.OVERLAY_TEARING_DOWN
                    : y.AR.OVERLAY_DISABLED
                : y.AR.WAITING_FOR_MODULE_TRACKING,
        l = "".concat(n, ": ").concat(t.reason);
    er(e, "state", o, l),
        er(e, "overlayMethod", a, l),
        er(e, "source", t.source, l),
        er(e, "oopEnabled", t.enabledOOP, l),
        er(e, "legacyEnabled", t.enabledLegacy, l),
        x.verbose(
            "Updating overlay method for pid "
                .concat(e, ' "')
                .concat(null == (r = J(e)) ? void 0 : r.gameName, '" to ')
                .concat((0, v.gK)(a)),
        ),
        eV.emitChange();
    let c = J(e);
    return null != c && (await s.A.updateTrackedGame(e, c)), s.A.updateOverlayMethod(e, a);
}
async function ep() {
    let e = new Set(
            f.Ay.getRunningGames()
                .filter((e) => f.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
        ),
        t = new Set($()),
        n = new Set([...t].filter((t) => !e.has(t)));
    for (let e of n) await ec(e), await (0, a.yy)(16);
    let r = new Set([...e].filter((e) => !t.has(e)));
    for (let e of r) await el(e), await (0, a.yy)(16);
    let i = new Set([...t].filter((t) => e.has(t)));
    await eg(i),
        (n.size > 0 || r.size > 0) &&
            x.verbose("Tracked games have changes", {
                trackedPIDsNoLongerValid: n,
                validPIDsNotAlreadyTracked: r,
                pidsAlreadyTracked: i,
            });
}
async function e_(e) {
    let t = !1,
        n = J(e);
    if (null == n) return x.error("Tried to determine overlay method swap for untracked pid ".concat(e)), !1;
    if (O.Q.has(n.state))
        return x.verbose("Skipping overlay method swap for pid ".concat(e, " - state is ").concat(n.state)), !1;
    let r = await (0, v.E1)(e, 0);
    if (null == r) return x.error("Failed to get revised fullscreen type for pid ".concat(e)), !1;
    n.fullscreenType !== r &&
        x.verbose("Fullscreen type different in swap for pid ".concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        });
    let i = es(n, r);
    if (
        (n.overlayMethod === i.overlayMethod && n.oopEnabled === i.enabledOOP && n.legacyEnabled === i.enabledLegacy) ||
        ((G === g.UNSET_PID || null === G) && n.state === y.AR.OVERLAY_RENDERING)
    )
        return t;
    let a = M === y.V6.OUT_OF_PROCESS_V3 || M === y.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
        o = M === y.V6.IN_PROCESS_V2,
        s = (0, v.e3)(r, Q()),
        l = (0, v.Zj)(n, r, Q());
    x.verbose("Overlay method different for pid ".concat(e), {
        oldOverlayMethod: n.overlayMethod,
        revisedFullscreenType: r,
        fullscreenHistory: n.fullscreenHistory,
        newOverlayGameStatus: i,
        shouldSwitchToHook: l,
        shouldSwitchToOutOfProcess: s,
        isForcedInProcess: o,
        isForcedOutOfProcess: a,
        legacyEnabled: Z(),
        overlayEnabled: Q(),
    });
    let c = () => {
        x.verbose("Updating fullscreen type for pid ".concat(e), {
            oldFullscreenType: n.fullscreenType,
            newFullscreenType: r,
        }),
            er(
                e,
                "fullscreenHistory",
                P(w({}, n.fullscreenHistory), {
                    [Date.now()]: r,
                }),
                "updateFullscreenType",
            ),
            er(e, "fullscreenType", r, "updateFullscreenType"),
            eV.emitChange(),
            (t = !0);
    };
    switch (i.overlayMethod) {
        case y.Ue.OutOfProcess:
        case y.Ue.OutOfProcessLimitedInteraction:
            ((s && !o) || a) && (c(), await em(e, i));
            break;
        case y.Ue.Hook:
            ((l && !a) || o || Z()) && (c(), await eh(e, i));
            break;
        case y.Ue.Disabled:
            c(), ef(e, i, "determineOverlayMethodSwap - disabled");
    }
    return t;
}

function eh(e, t) {
    var n;
    return en(e)
        ? (null == (n = J(e)) ? void 0 : n.overlayMethod) === y.Ue.Hook
            ? (x.verbose("Hook requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (x.verbose("Enabling hook for pid ".concat(e)),
              er(e, "hasChangedRenderMode", !0, "enableHook"),
              ef(e, t, "enableHook"))
        : (x.verbose("Hook requested for untracked pid ".concat(e)), Promise.resolve());
}

function em(e, t) {
    var n;
    return en(e)
        ? (null == (n = J(e)) ? void 0 : n.overlayMethod) === t.overlayMethod
            ? (x.verbose("OOP requested for pid ".concat(e, " but already enabled")), Promise.resolve())
            : (x.verbose("Enabling OOP for pid ".concat(e)),
              er(e, "hasChangedRenderMode", !0, "enableOutOfProcess"),
              ef(e, t, "enableOutOfProcess"))
        : (x.verbose("OOP requested for untracked pid ".concat(e)), Promise.resolve());
}
async function eg(e) {
    let t = !1;
    for (let n of e) (t = (await e_(n)) || t), await (0, a.yy)(16);
    t &&
        (x.info("determineFullscreenOverlayMethodSwaps has changes"),
        eV.emitChange(),
        q(null, "fullscreen_overlay_method_swap_changes", {
            tracked_game_pids: Array.from(e),
        }));
}

function eE(e) {
    null == B &&
        (__OVERLAY__ && x.error("Running Polling While in Overlay Context!"),
        (B = setTimeout(async () => {
            B = null;
            let e = $();
            e.length > 0 && (eE(v.T$), await eg(new Set(e)));
        }, e)));
}
async function ey(e, t) {
    if (!T.OX) return void x.verbose("setOverlayEnabled: not supported");
    if (
        (x.info("setOverlayEnabled: supported", {
            newLegacyEnabled: e,
            newOopEnabled: t,
        }),
        (j = e),
        E.x.update({
            legacyEnabled: e,
            oopEnabled: t,
        }),
        x.info("setOverlayEnabled", {
            newOopEnabled: t,
            newLegacyEnabled: e,
        }),
        e || t)
    )
        return void eS();
    for (let e of $()) await ec(e), await (0, a.yy)(16);
}

function eb() {
    ep(), (k = !1), (H = null), ej();
}

function eO(e) {
    let { legacyEnabled: t, oopEnabled: n } = e;
    return (
        x.info("handleOverlaySetEnabled", {
            legacyEnabled: t,
            oopEnabled: n,
        }),
        ey(t, n),
        !0
    );
}

function ev(e) {
    if (null != e.pids) for (let t of e.pids) el(t);
}

function eA(e) {
    for (let t of (__OVERLAY__ && x.error("Running handleRunningGamesChange While in Overlay Context!"), e.added))
        el(t.pid);
    for (let t of e.removed) ec(t.pid);
}

function eI(e) {
    if (
        (__OVERLAY__ && x.error("Running handleGameToggleOverlay While in Overlay Context!"),
        x.verbose("handleGameToggleOverlay", {
            action: e,
        }),
        !X())
    ) {
        if ((x.verbose("handleGameToggleOverlay: overlay not enabled"), "pid" in e.game)) {
            let t = e.game.pid,
                n = J(t);
            if (null != n) return ef(t, es(n, n.fullscreenType), "handleGameToggleOverlay - global disabled"), !0;
        }
        return !1;
    }
    if (!("pid" in e.game)) return x.verbose("handleGameToggleOverlay: game is not a PersistGame"), ep(), !0;
    let t = e.game.pid,
        { newLegacyOverlayEnabledValue: n, newOverlayV3EnabledValue: r } = e;
    if (en(t)) {
        let e = J(t);
        (null == e ? void 0 : e.legacyEnabled) !== n && er(t, "legacyEnabled", n, "handleGameToggleOverlay"),
            (null == e ? void 0 : e.oopEnabled) !== r && er(t, "oopEnabled", null != r && r, "handleGameToggleOverlay");
    }
    let i = n && Z(),
        a = null != r && r && Q();
    return (
        i || a
            ? (x.verbose("handleGameToggleOverlay: game enabled changed", {
                  pid: t,
                  legacyEnabled: i,
                  overlayV3Enabled: a,
              }),
              en(t) ? eS() : el(t))
            : ec(t),
        !0
    );
}
async function eS() {
    await eT(), await (0, a.yy)(2e3);
    let e = $(),
        t = new Set([
            ...f.Ay.getRunningGames()
                .filter((e) => f.Ay.getOverlayEnabledForGame(e))
                .map((e) => e.pid),
            ...e,
        ]);
    for (let n of (x.info("Retracking ".concat(t.size, " games (").concat(e.length, " already tracked)")), t))
        await el(n), await (0, a.yy)(16);
    x.info("Retracked ".concat(e.length, " games"));
}
async function eT() {
    for (let e of $()) await ec(e), await (0, a.yy)(16);
}

function eC(e) {
    return (
        x.error("Overlay reload for pid", {
            pid: e.pid,
        }),
        eS(),
        !0
    );
}

function eN(e) {
    return (
        x.error("Overlay crashed for pid ".concat(e.pid)),
        !!en(e.pid) && (er(e.pid, "state", y.AR.OVERLAY_CRASHED, "handleOverlayCrashed"), !0)
    );
}

function ew(e) {
    return (M = e.mode), eS(), !0;
}

function eR(e) {
    if (null != J(e.pid))
        return (
            er(e.pid, "state", e.overlayState, e.reason),
            x.verbose("Updating overlay state for pid ".concat(e.pid, " to ").concat(e.overlayState)),
            e.overlayState === y.AR.WAITING_FOR_POPOUT_OPEN || e.overlayState === y.AR.WAITING_FOR_OVERLAY_OPEN
                ? ea(e.pid, y.sf.MODULE_TRACKING)
                : e.overlayState === y.AR.OVERLAY_RENDERING && ea(e.pid, y.sf.OVERLAY_RENDERING),
            !0
        );
}

function eP() {
    return eS(), !0;
}

function eD(e) {
    return e.mode === y.x7.TrackFocusPIDs && (K = e.enabled), !0;
}

function eL() {
    return (z = new c.A(1e4)), !0;
}

function ex(e) {
    if (((G = e.pid), K)) {
        var t;
        let n = [performance.timeOrigin + performance.now(), null != (t = e.pid) ? t : null, e.trackMode];
        z.push(n);
    }
    return !(0, g.isValidGamePID)(e.pid) || ((0, g.setPID)(e.pid), !0);
}

function eM(e) {
    s.A.updateOverlayState(e.pid, y.AR.OVERLAY_RENDERING, "handleOverlaySuccessfullyShown"),
        en(e.pid) && er(e.pid, "successfullyShown", !0, "handleOverlaySuccessfullyShown"),
        q(e.pid, "overlay_successfully_shown", {
            pid: e.pid,
        });
    let t = J(e.pid);
    null != t && s.A.updateTrackedGame(e.pid, t);
}

function ej() {
    d.A.hasLoadedExperiments && !k && ((k = !0), ey(E.x.legacyEnabled, E.x.oopEnabled));
}

function ek() {
    (k = !1), (H = null);
}

function eU() {
    (k = !1), (H = null), eT();
}
class eG extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(_.default, d.A, h.A, A.A, f.Ay, S.A, p.A), this.syncWith([d.A], ej);
    }
    getDevToolsFocusedPidsWithTimestamp() {
        return z;
    }
    getHasLoadedExperiments() {
        return k;
    }
    getForcedRenderMode() {
        return M;
    }
    isAnyOverlayRendering() {
        return T.ed ? p.A.getWindowOpen(C.f) : this.getOverlayRenderingTrackedGames().length > 0;
    }
    getOverlayMethod(e) {
        var t, n;
        return __OVERLAY__
            ? y.Ue.Hook
            : null != (t = null == (n = J(e)) ? void 0 : n.overlayMethod)
              ? t
              : y.Ue.Disabled;
    }
    isOverlayOOPEnabledForPid(e) {
        let t = this.getOverlayMethod(e);
        return t === y.Ue.OutOfProcess || t === y.Ue.OutOfProcessLimitedInteraction;
    }
    hasChangedRenderMode(e) {
        var t, n;
        return null != (t = null == (n = J(e)) ? void 0 : n.hasChangedRenderMode) && t;
    }
    getTrackedGameByPid(e) {
        return J(e);
    }
    getTrackedGames() {
        return V;
    }
    getClosedTrackedGamesHistory() {
        return F;
    }
    getGameOverlayStatus(e) {
        let t = J(e.pid);
        return null == t
            ? null
            : w(
                  {
                      enabledOOP: t.oopEnabled,
                      enabledLegacy: t.legacyEnabled,
                  },
                  t,
              );
    }
    getGlobalEnabledStatus() {
        return {
            oopEnabled: Q(),
            legacyEnabled: Z(),
        };
    }
    getAnyGlobalEnabledOverlay() {
        return Q() || Z();
    }
    getPerGameEnabledStatus(e) {
        if (null == e)
            return {
                oopEnabled: !1,
                legacyEnabled: !1,
            };
        let t = J(e.pid);
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
        if (null != e) return null != (t = null == (n = J(e)) ? void 0 : n.overlayMethod) ? t : void 0;
    }
    getMostRecentOverlayRenderMethod() {
        return H;
    }
    getOverlayRenderingTrackedGames() {
        return Object.values(V).filter((e) => e.overlayMethod !== y.Ue.Disabled && e.state === y.AR.OVERLAY_RENDERING);
    }
}
N(eG, "displayName", "OverlayRenderStore");
let eV = new eG(
        o.h,
        !U
            ? {}
            : {
                  CONNECTION_OPEN: eb,
                  LOGIN: ek,
                  LOGOUT: eU,
                  EXPERIMENT_OVERRIDE_BUCKET: eb,
                  OVERLAY_SET_ENABLED: eO,
                  GAME_LAUNCH_SUCCESS: ev,
                  RUNNING_GAMES_CHANGE: eA,
                  RUNNING_GAME_TOGGLE_OVERLAY: eI,
                  OVERLAY_FORCE_RENDER_MODE: ew,
                  OVERLAY_UPDATE_OVERLAY_STATE: eR,
                  OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: eP,
                  OVERLAY_CRASHED: eN,
                  OVERLAY_RELOAD: eC,
                  OVERLAY_FOCUSED: ex,
                  OVERLAY_SUCCESSFULLY_SHOWN: eM,
                  OVERLAY_RENDER_DEBUG_MODE: eD,
                  OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: eL,
              },
    ),
    eF = eV;
