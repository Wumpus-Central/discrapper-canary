let r;
n.r(t),
    n.d(t, {
        OverlayPIDStatus: () => H,
        default: () => e0,
        getOverlayURL: () => eI,
    }),
    n(388685),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(853839),
    n(570086),
    n(479048),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(358797),
    n(415506),
    n(49124);
var i,
    a = n(807864),
    o = n(442837),
    s = n(379649),
    l = n(570140),
    c = n(26151),
    u = n(224706),
    d = n(765250),
    f = n(13245),
    _ = n(287734),
    p = n(579806),
    h = n(887278),
    m = n(490029),
    g = n(710845),
    E = n(353926),
    b = n(594190),
    y = n(40766),
    O = n(41534),
    v = n(454991),
    I = n(837268),
    T = n(633565),
    S = n(371651),
    A = n(829907),
    C = n(610394),
    N = n(48481),
    R = n(314897),
    P = n(77498),
    w = n(355863),
    D = n(626135),
    L = n(866119),
    x = n(671999),
    M = n(998502),
    j = n(145597),
    k = n(372679),
    U = n(981631),
    G = n(757744);
function B(e, t, n) {
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
function Z(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var H = (function (e) {
    return (
        (e.ATTACHING = "ATTACHING"),
        (e.CONNECTING = "CONNECTING"),
        (e.CONNECTED = "CONNECTED"),
        (e.READY = "READY"),
        (e.CRASHED = "CRASHED"),
        (e.CONNECT_FAILED = "CONNECT_FAILED"),
        (e.HOOK_FAILED = "HOOK_FAILED"),
        (e.DISCONNECTING = "DISCONNECTING"),
        e
    );
})({});
let Y = {},
    W = !1,
    K = new Map(),
    z = () => Array.from(K.values()).some((e) => "READY" === e),
    q = !1,
    X = !1,
    Q = !1,
    J = null,
    $ = new Set(),
    ee = "",
    et = new Set();
class en {
    reset() {
        this.actionsToFlush.clear(),
            this.waitingActionsToFlush.clear(),
            (this.isDispatching = !1),
            (this.timeout = null),
            null != this.timeout && clearTimeout(this.timeout),
            (this.requestIdleCallback = null),
            null != this.requestIdleCallback && cancelIdleCallback(this.requestIdleCallback);
    }
    enqueueWaitingActions() {
        let e = new Set([...this.waitingActionsToFlush]);
        for (let t of (this.waitingActionsToFlush.clear(), e)) this.queueDispatch(t);
    }
    constructor() {
        B(this, "isDispatching", !1),
            B(this, "timeout", void 0),
            B(this, "requestIdleCallback", void 0),
            B(this, "actionsToFlush", new Set()),
            B(this, "waitingActionsToFlush", new Set()),
            B(this, "flush", () => {
                if (
                    (null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)),
                    null != this.requestIdleCallback &&
                        (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)),
                    !z())
                )
                    return void this.actionsToFlush.clear();
                this.actionsToFlush.size > 0 &&
                    (m.lW({
                        type: U.BmY.DISPATCH,
                        pid: null,
                        token: null,
                        payloads: Array.from(this.actionsToFlush),
                    }),
                    this.actionsToFlush.clear()),
                    this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions();
            }),
            B(this, "dispatchPayloads", (e) => {
                (this.isDispatching = !0), e.forEach((e) => l.Z.dispatch(e)), (this.isDispatching = !1);
            }),
            B(
                this,
                "queueDispatch",
                (e) =>
                    !(!z() || ei.has(e.type)) &&
                    (this.isDispatching
                        ? this.waitingActionsToFlush.add(e)
                        : ("USER_SETTINGS_PROTO_UPDATE" === e.type &&
                              (e = V(Z({}, e), {
                                  settings: {
                                      type: e.settings.type,
                                      proto: (0, N.cv)(e.settings.type, e.settings.proto),
                                  },
                              })),
                          this.actionsToFlush.add(e),
                          null == this.timeout &&
                              null == this.requestIdleCallback &&
                              (this.timeout = setTimeout(() => {
                                  this.requestIdleCallback = requestIdleCallback(this.flush, { timeout: 100 });
                              }, 100))),
                    !1),
            );
    }
}
let er = new en(),
    ei = new Set([
        "CONNECTION_OPEN",
        "CONNECTION_RESUMED",
        "CONNECTION_CLOSED",
        "WINDOW_INIT",
        "WINDOW_FULLSCREEN_CHANGE",
        "WINDOW_FOCUS",
        "WINDOW_RESIZED",
        "WINDOW_HIDDEN",
        "CHANNEL_SELECT",
        "DELAYED_CHANNEL_SELECT",
        "DELAYED_SELECT_FLUSH",
        "LOAD_MESSAGES_SUCCESS",
        "LOAD_MESSAGES_FAILURE",
        "LOAD_MESSAGES",
        "MESSAGE_START_EDIT",
        "MESSAGE_UPDATE_EDIT",
        "MESSAGE_END_EDIT",
        "APP_VIEW_SET_HOME_LINK",
        "APPLICATION_STORE_LOCATION_CHANGE",
        "LOGIN",
        "LOGIN_SUCCESS",
        "LOGIN_FAILURE",
        "LOGIN_MFA_STEP",
        "LOGIN_MFA",
        "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
        "LOGIN_ACCOUNT_DISABLED",
        "LOGIN_RESET",
        "FINGERPRINT",
        "REGISTER",
        "REGISTER_SUCCESS",
        "START_SESSION",
        "FORGOT_PASSWORD_SENT",
        "UPDATE_TOKEN",
        "SET_CONSENT_REQUIRED",
        "PASSWORDLESS_START",
        "PASSWORDLESS_FAILURE",
        "CONTEXT_MENU_OPEN",
        "CONTEXT_MENU_CLOSE",
        "MODAL_PUSH",
        "MODAL_POP",
        "MODAL_UPDATE",
        "MODAL_POP_ALL",
        "GUILD_SETTINGS_OPEN",
        "USER_SETTINGS_MODAL_OPEN",
        "NOTIFICATION_SETTINGS_MODAL_OPEN",
        "EMAIL_VERIFICATION_MODAL_OPEN",
        "QUICKSWITCHER_SHOW",
        "IFE_EXPERIMENT_SEARCH_MODAL_OPEN",
        "SHOW_KEYBOARD_SHORTCUTS",
        "DM_SETTINGS_UPSELL_SHOW",
        "USER_PROFILE_MODAL_OPEN",
        "INTERACTION_MODAL_CREATE",
        "INTERACTION_IFRAME_MODAL_CREATE",
        "GUILD_SETTINGS_CLOSE",
        "USER_SETTINGS_MODAL_CLOSE",
        "CHANNEL_SETTINGS_CLOSE",
        "NOTIFICATION_SETTINGS_MODAL_CLOSE",
        "EMAIL_VERIFICATION_MODAL_CLOSE",
        "QUICKSWITCHER_HIDE",
        "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE",
        "HIDE_KEYBOARD_SHORTCUTS",
        "USER_PROFILE_MODAL_CLOSE",
        "QUICKSWITCHER_SHOW",
        "QUICKSWITCHER_HIDE",
        "QUICKSWITCHER_SWITCH_TO",
        "QUICKSWITCHER_SEARCH",
        "QUICKSWITCHER_SELECT",
        "UPDATE_CHANNEL_DIMENSIONS",
        "UPDATE_CHANNEL_LIST_DIMENSIONS",
        "UPDATE_GUILD_LIST_DIMENSIONS",
        "TRACK",
        "CHANNEL_SETTINGS_INIT",
        "CHANNEL_SETTINGS_CLOSE",
        "GUILD_SETTINGS_INIT",
        "GUILD_SETTINGS_OPEN",
        "GUILD_SETTINGS_CLOSE",
        "TUTORIAL_INDICATOR_SHOW",
        "TUTORIAL_INDICATOR_HIDE",
        "TUTORIAL_INDICATOR_SUPPRESS_ALL",
        "USER_SETTINGS_ACCOUNT_INIT",
        "USER_SETTINGS_ACCOUNT_CLOSE",
        "NOTICE_SHOW",
        "NOTICE_DISMISS",
        "NOTICE_DISABLE",
        "SEARCH_EDITOR_STATE_CHANGE",
        "SEARCH_EDITOR_STATE_CLEAR",
        "SEARCH_MESSAGES_SUCCESS",
        "MOD_VIEW_SEARCH_MESSAGES_SUCCESS",
        "SEARCH_ENSURE_SEARCH_STATE",
        "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
        "SEARCH_HISTORY_WEB_CLEAR_ITEMS",
        "SEARCH_SET_SHOW_BLOCKED_RESULTS",
        "LAYOUT_CREATE",
        "POPOUT_WINDOW_OPEN",
        "POPOUT_WINDOW_CLOSE",
        "POPOUT_WINDOW_SET_ALWAYS_ON_TOP",
        "TYPING_START_LOCAL",
        "TYPING_STOP_LOCAL",
        "SPOTIFY_SET_ACTIVE_DEVICE",
        "LOAD_INVITE_SUGGESTIONS",
        "INVITE_SUGGESTIONS_SEARCH",
        "IMPERSONATE_UPDATE",
        "IMPERSONATE_STOP",
        "CREATE_PENDING_REPLY",
        "CREATE_SHALLOW_PENDING_REPLY",
        "DELETE_PENDING_REPLY",
        "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO",
        "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
        "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
        "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
        "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
        "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
        "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
        "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
        "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
        "APPLICATION_COMMAND_UPDATE_OPTIONS",
        "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE",
        "APPLICATION_COMMAND_USED",
        "DCF_HANDLE_DC_SHOWN",
        "DCF_HANDLE_DC_DISMISSED",
        "MEDIA_ENGINE_CONNECTION_STATS",
        "RTC_CONNECTION_UPDATE_ID",
        "ACTIVE_AV_ERRORS_CHANGED",
        "BURST_REACTION_ANIMATION_ADD",
        "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS",
    ]),
    ea = new Set(),
    eo = !1,
    es = new g.Z("OverlayBridgeStore"),
    el = {};
function ec(e) {
    var t;
    return null != (t = el[e]) ? t : {};
}
function eu(e, t) {
    var n, r;
    let i = null == (n = el[e]) ? void 0 : n.error,
        a = null == (r = el[e]) ? void 0 : r.error_description;
    (el[e] = Z({}, el[e], t)), null != i && (el[e].error = i), null != a && (el[e].error_description = a);
}
function ed(e) {
    var t, n;
    if (null != el[e]) return;
    let r = b.ZP.getGameOrTransformedSubgameForPID(e);
    el[e] = {
        overlay_method: I.gl[I.gl.Hook],
        success: !1,
        game_name: null != (t = null == r ? void 0 : r.name) ? t : null,
        game_id: null != (n = null == r ? void 0 : r.id) ? n : null,
        error: null,
        error_description: null,
        renderer_started: !1,
        renderer_started_after: null,
        renderer_ready_after: null,
        renderer_load_succeeded_after: null,
        renderer_crash_count: 0,
        renderer_load_failures: 0,
        renderer_ignored_paints: 0,
        host_crash_count: 0,
    };
}
let ef = "none",
    e_ = (0, a.H)({
        onContention: (e, t) => es.verbose("overlayLock contention: lastMutexCall ".concat(ef)),
        onContentionResolved: () => es.verbose("overlayLock contention: resolved."),
        onTimeout: (e, t) => {
            let n = "overlayLock: lastMutexCall ".concat(ef, "}");
            es.error(n);
            let r = ec((0, j.getPID)());
            eu(
                (0, j.getPID)(),
                V(Z({}, r), {
                    error_description: n,
                    success: !1,
                }),
            ),
                D.default.track(U.rMx.OVERLAY_HOOK_RESULT, ec((0, j.getPID)()));
        },
        timeoutMs: 180000,
    });
function ep(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        e_(() => t(...r), e);
    };
}
function eh() {
    try {
        var e;
        let t = null === p.Z || void 0 === p.Z || null == (e = p.Z.fileManager) ? void 0 : e.uploadDiscordHookCrashes;
        if (null == t) return;
        t().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let l of (es.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                    var t, n, r, i, a, o, s;
                    if (null == l) continue;
                    let e = null != l.processName ? P.Z.getGameByExecutable(l.processName) : null;
                    D.default.track(U.rMx.OVERLAY_HOOK_CRASHED, {
                        process_name: null == l ? void 0 : l.processName,
                        game_name: null != (t = null == e ? void 0 : e.name) ? t : null,
                        game_id: null != (n = null == e ? void 0 : e.id) ? n : null,
                        minidump_exception_type: null != (r = l.exceptionString) ? r : null,
                        minidump_exception_module_name: null != (i = l.exceptionModuleName) ? i : null,
                        minidump_relative_crash_address: null != (a = l.relativeCrashAddress) ? a : null,
                        minidump_exception_module_version: null != (o = l.exceptionModuleVersion) ? o : null,
                        minidump_exception_module_code_id: null != (s = l.exceptionModuleCodeId) ? s : null,
                    });
                }
        });
    } catch (e) {
        es.error("tryUploadDiscordHookCrashes", e), (0, O.D1)(e);
    }
}
function em(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = K.get(e);
    (null === n || r === n) &&
        r !== t &&
        (null == t ? K.delete(e) : K.set(e, t),
        (null == t || "CRASHED" === t) && (f.Z.setFocusedPID(null, null), eh()),
        et.delete(e),
        es.info(
            "pid="
                .concat(e, " status transition ")
                .concat(null != r ? r : "DISCONNECTED", " -> ")
                .concat(null != t ? t : "DISCONNECTED"),
            K,
        ));
}
async function eg(e) {
    try {
        if (M.ZP.supportsFeature(U.eRX.CREATE_HOST_ON_ATTACH))
            if (K.size > 0) {
                ef = "reconcile.getOverlayURL";
                let t = await eI();
                (ef = "reconcile.createHostProcess"), e.createHostProcess(t, eA, eS);
            } else (ef = "reconcile.destroyHostProcess"), e.destroyHostProcess(), ev((0, j.getPID)());
        else if (q) {
            let t = await eI();
            e.createHostProcess(t, eA, eS);
        } else e.destroyHostProcess(), ev((0, j.getPID)());
    } catch (t) {
        es.error("reconcileHostProcess", t), (0, O.D1)(t), ev((0, j.getPID)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            es.error("reconcileHostProcess: destroyHostProcess", e), (0, O.D1)(e);
        }
    }
}
async function eE(e) {
    var t;
    e_.isMutexHeld() || es.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
    let n = null != (t = ec(e).mounting_started_at) ? t : new Date().getTime();
    eu(e, { mounting_started_at: n });
    let r = K.get(e);
    if (null != r) return void es.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(r));
    await f.Z.updateOverlayState(e, I.mM.WAITING_FOR_OVERLAY_OPEN), (ef = "attach.getOverlayModule");
    let i = await (0, k.K)();
    if (null == i) return void es.error("Trying to attach to pid=".concat(e, ", but overlay module failed loaded"));
    (ef = "attach.transitionOverlayPIDStatus"), em(e, "ATTACHING"), (ef = "attach.attachToProcess");
    let a = await h.YT(e);
    null == a
        ? ((ef = "attach.transitionOverlayPIDStatus (CONNECTING)"),
          em(e, "CONNECTING", "ATTACHING"),
          (ef = "attach.reconcileHostProcess"),
          await eg(i),
          i.connectProcess(e))
        : ((ef = "attach.transitionOverlayPIDStatus (HOOK_FAILED)"),
          em(e, "HOOK_FAILED", "ATTACHING"),
          es.warn("Could not hook to pid=".concat(e, ", error=").concat(a)));
}
async function eb(e) {
    if ((e_.isMutexHeld() || es.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !K.has(e)))
        return void es.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
    em(e, "DISCONNECTING");
    try {
        ef = "detach.getOverlayModule";
        let t = await (0, k.K)();
        if (null == t)
            return void es.error("Trying to detach from pid=".concat(e, ", but overlay module failed loaded"));
        e !== j.DEV_PID &&
            ((ef = "detach.cancelAttachToProcess"),
            await h.pn(e),
            await (0, s._v)(16),
            (ef = "detach.disconnectProcess"),
            await t.disconnectProcess(e)),
            (ef = "detach.transitionOverlayPIDStatus"),
            em(e, null),
            (ef = "detach.reconcileHostProcess"),
            await eg(t);
    } catch (t) {
        (0, O.D1)(t, I.gl.Hook), es.error("Error during overlay detachment for pid ".concat(e, ":"), t), em(e, null);
    }
}
async function ey(e) {
    var t, n;
    if (
        (es.verbose("updateIntendedOverlayPIDs", {
            isConnectionOpened: Q,
            action: e,
        }),
        e_.isMutexHeld() || es.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e),
        !Q && null != e)
    )
        return void es.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
    async function r(e) {
        if (!(e in Y)) return;
        let t = Y[e];
        delete Y[e];
        try {
            await t.deconstructor(), $.delete(e);
        } catch (n) {
            (0, O.D1)(n, I.gl.Hook), es.error("Failed to deconstruct tracked game ".concat(e), n), (Y[e] = t), $.add(e);
        }
    }
    let i = !1;
    if (null == e || !q) {
        for (let t of (es.verbose("updateIntendedOverlayPIDs: Removing all.", Y, e), Object.keys(Y)))
            await r(Number(t)), (i = !0);
        return;
    }
    for (let n of $) {
        if (null == (t = e.added) ? void 0 : t.includes(n)) {
            es.warn("updateIntendedOverlayPIDs: Failed PID was re-added?");
            continue;
        }
        es.verbose("updateIntendedOverlayPIDs: retrying failed overlay pid ".concat(n)), await r(n), (i = !0);
    }
    for (let t of null != (n = e.added) ? n : []) {
        let n = S.default.getTrackedGameByPid(t);
        if (null == n) {
            es.error("updateIntendedOverlayPIDs: Tracked game not found for pid=".concat(t));
            continue;
        }
        if ((es.verbose("updateIntendedOverlayPIDs: newGame", n), n.legacyEnabled))
            switch (
                (n.pid in Y ? es.error("Unexpected. ".concat(n.pid, " is being added twice?"), Y, e) : ed(n.pid),
                n.overlayMethod)
            ) {
                case I.gl.Hook:
                    let r = new Date().getTime();
                    eu(n.pid, {
                        mounting_started_at: r,
                        fullscreen_type: await (0, A.hj)(n.pid, 0),
                    }),
                        K.has(n.pid) || (await eE(n.pid)),
                        (Y[n.pid] = {
                            method: n.overlayMethod,
                            deconstructor: async () => {
                                await eb(n.pid);
                            },
                        }),
                        (i = !0);
                    break;
                case I.gl.OutOfProcess:
                case I.gl.OutOfProcessLimitedInteraction:
                    es.error("updateIntendedOverlayPIDs: out of process called for hook overlay", n);
                    break;
                case I.gl.Disabled:
                    es.verbose("updateIntendedOverlayPIDs: disabled", n);
                    break;
                default:
                    es.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(n.overlayMethod), n);
            }
    }
    for (let t of e.removed) es.verbose("updateIntendedOverlayPIDs: removedGame", t), await r(t), (i = !0);
    i && e$.emitChange();
}
let eO = ep("updateIntendedOverlayPIDs", (e) => (es.info("updateIntendedOverlayPIDs", e), ey(e))),
    ev = ep("clearPID", (e) => {
        if (null == e) return (0, j.setPID)(j.UNSET_PID);
        C.ZP.isOverlayV3EnabledForPID(e) || (0, j.setPID)(j.UNSET_PID);
    });
function eI() {
    return new Promise((e) => {
        e$.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let eT = ep("setOverlayEnabled", async (e) => {
    if (!(0, j.supportsLegacy)()) return;
    if (q === e) return void es.verbose("setOverlayEnabled: no change", { newOverlayEnabled: e });
    (q = e), e$.emitChange();
    let t = await (0, k.K)();
    if (null == t) return void es.error("setOverlayEnabled: overlay module failed loaded");
    q || (await ey(void 0)), K.size > 0 && (await eg(t));
});
function eS(e) {
    f.Z.setFocusedPID(0 === e ? null : e, null);
}
function eA(e, t, n) {
    var r;
    let i = null == (r = b.ZP.getGameForPID(e)) ? void 0 : r.name,
        a = P.Z.getGameByName(i),
        o = Z(
            {
                game_name: i,
                game_id: null == a ? null : a.id,
                success: t,
                overlay_method: I.gl[I.gl.Hook],
            },
            n,
        );
    eu(e, Z({}, o)),
        (0, d.te)(j.OVERLAY_LAYOUT_ID, w.Z.getDefaultLayout(j.OVERLAY_LAYOUT_ID), G.bv, {
            width: n.graphics_width,
            height: n.graphics_height,
        });
    let s = ec(e);
    D.default.track(U.rMx.OVERLAY_HOOK_RESULT, s),
        es.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), s),
        t
            ? (f.Z.updateOverlayState(e, I.mM.OVERLAY_RENDERING), em(e, "CONNECTED", "CONNECTING"))
            : (f.Z.updateOverlayState(e, I.mM.OVERLAY_CRASHED), em(e, "CONNECT_FAILED", "CONNECTING"));
}
function eC() {
    let e = R.default.getToken(),
        t = R.default.getId();
    null != e &&
        m.lW({
            type: U.BmY.DISPATCH,
            pid: null,
            token: null,
            payloads: [
                {
                    type: "UPDATE_TOKEN",
                    token: e,
                    userId: t,
                },
            ],
        });
}
function eN(e) {
    return null != e && (0, L.y)(e, ee);
}
function eR(e) {
    switch ((eo && es.info("[app data received]", e), e.type)) {
        case U.BmY.CONNECT:
            let t = R.default.getToken();
            if (null == t) break;
            (0, d.te)(j.OVERLAY_LAYOUT_ID, w.Z.getDefaultLayout(j.OVERLAY_LAYOUT_ID), G.bv),
                Promise.all([(0, T.Z)(t, e.pid), o.ZP.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: a } = e;
                    m.lW({
                        type: U.BmY.STORAGE_SYNC,
                        pid: i,
                        token: a,
                        states: r,
                    }),
                        m.lW({
                            type: U.BmY.DISPATCH,
                            pid: i,
                            token: a,
                            payloads: [n],
                        }),
                        em(i, "READY"),
                        (0, j.setPID)(i),
                        f.Z.overlayReady(i);
                    let o = ec(i);
                    eu(
                        i,
                        V(Z({}, o), {
                            total_mount_time_ms:
                                null != o.mounting_started_at ? new Date().getTime() - o.mounting_started_at : void 0,
                        }),
                    );
                });
            break;
        case U.BmY.DISPATCH:
            null != e.payloads && er.dispatchPayloads(e.payloads);
            break;
        case U.BmY.LOG_MESSAGES:
            (0, y.K)(e.payload);
    }
}
async function eP(e, t) {
    let n = await (0, k.K)();
    if (null == n) return void es.error("setInputLocked: overlay module failed loaded");
    let r = null != t ? t : J;
    if (null != r && "DISCONNECTING" === K.get(r))
        return void es.warn("Overlay module is no longer valid during input lock");
    try {
        null != r &&
            r !== j.DEV_PID &&
            n.sendCommand(r, {
                message: "intercept_input",
                intercept: !e,
            });
    } catch (e) {
        (0, O.D1)(e, I.gl.Hook), es.error("Error during input lock", e);
    }
}
function ew(e, t) {
    e ? setTimeout(() => eP(e, t), 200) : eP(e, t);
}
let eD = null;
function eL(e) {
    let { locked: t, pid: n } = e,
        r = K.get(n);
    if (($.has(n) && eO(void 0), null != r && null != Y[n]) && (t || "READY" === r || "CRASHED" === r)) {
        if ((t ? et.delete(n) : et.add(n), ea.clear(), null != eD && (clearTimeout(eD), (eD = null), t))) return;
        t
            ? ew(t, n)
            : (eD = setTimeout(() => {
                  ew(t, n), (eD = null);
              }, 100));
    }
}
function ex(e) {
    let { region: t } = e;
    ea.add(t), ew(!1, J);
}
function eM() {
    ea.clear(), ew(!0, J);
}
function ej(e) {
    let { port: t } = e;
    ee = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append("build_id", "7506395904797542296d172146be362f24bd4f8a"),
        n.append("rpc", String(t)),
        n.append("rpc_auth_token", ee),
        (r = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(n.toString()));
}
function ek(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        _.default.selectPrivateChannel(t), c.Z.call(t, !1, !!n);
    });
}
function eU(e) {
    let { pid: t } = e;
    J = t;
}
function eG(e) {
    var t;
    let { pid: n, error: r } = e;
    if (null == Y[n]) return;
    let i = r instanceof Error ? r : Error(null != r ? r : "Unknown error");
    em(n, "CRASHED"),
        eu(n, {
            renderer_crash_count: (null != (t = ec(n).renderer_crash_count) ? t : 0) + 1,
            error: r instanceof Error ? r.message : r,
            error_description: r instanceof Error ? r.stack : void 0,
        }),
        es.verbose("OverlayBridgeStore: handleOverlayCrashed: ".concat(n)),
        (0, O.V6)(i, I.gl.Hook);
}
function eB() {
    (Q = !0), (W = !1), eq();
}
function eZ() {
    (Q = !1), f.Z.setFocusedPID(null, null), eO(void 0), es.verbose("OverlayBridgeStore: handleConnectionClosed");
}
function eF() {
    return !0;
}
function eV(e) {
    let { legacyEnabled: t } = e;
    return eT(t), !1;
}
function eH(e) {
    let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a } = e;
    setImmediate(() => {
        u.Z.join({
            userId: t,
            sessionId: n,
            applicationId: r,
            channelId: i,
            messageId: a,
        }),
            null != J && f.Z.setInputLocked(!0, J);
    });
}
function eY(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            r = Math.ceil(n * window.innerHeight),
            i = (0, x.B)("click", e, r);
        (0, x.J)(i, e, r);
    }, 50);
}
function eW(e) {
    return (
        eO({
            added: [],
            removed: [],
        }),
        !0
    );
}
function eK(e) {
    return (
        eO({
            added: [],
            removed: [],
        }),
        !0
    );
}
function ez(e) {
    es.verbose("Updating OverlayMethod", {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, A.P_)(e.overlayMethod),
    }),
        e.overlayMethod === I.gl.Hook
            ? eO({
                  added: [e.pid],
                  removed: [],
              })
            : eO({
                  added: [],
                  removed: [e.pid],
              });
}
function eq() {
    E.Z.hasLoadedExperiments && !W && ((W = !0), eT(v.v.legacyEnabled));
}
function eX() {
    W = !1;
}
function eQ() {
    W = !1;
}
class eJ extends (i = o.ZP.Store) {
    initialize() {
        !(0, j.supportsLegacy)() ||
            __OVERLAY__ ||
            (this.waitFor(b.ZP, E.Z, R.default, C.ZP, S.default),
            this.syncWith([E.Z], eq),
            m.sr(eR, eN),
            R.default.addChangeListener(eC),
            l.Z.addInterceptor(er.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return S.default.isOverlayOOPEnabledForPid(e) ? C.ZP.isInputLocked(e) : !et.has(e);
    }
    DEV_isInputLockedV3(e) {
        return C.ZP.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !et.has(e);
    }
    isSupported() {
        return (0, j.supportsLegacy)() || !1;
    }
    get enabled() {
        return C.ZP.isOverlayV3Enabled() ? C.ZP.enabled : q;
    }
    get legacyEnabled() {
        return !C.ZP.isOverlayV3Enabled() && X;
    }
    getAnyGlobalEnabledOverlay() {
        return S.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = C.ZP.getFocusedPID();
        return null != e && C.ZP.isOverlayV3EnabledForPID(e) ? e : J;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && S.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return S.default.isOverlayOOPEnabledForPid((0, j.getPID)());
    }
    isReady(e) {
        return C.ZP.isOverlayV3EnabledForPID(e) ? C.ZP.isReady(e) : "READY" === K.get(e);
    }
    isCrashed(e) {
        return !C.ZP.isOverlayV3EnabledForPID(e) && "CRASHED" === K.get(e);
    }
    getOverlayPIDStatuses() {
        return K;
    }
}
B(eJ, "displayName", "OverlayBridgeStore");
let e$ = new eJ(
        l.Z,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eY }
            : {
                  LOGIN: eX,
                  LOGOUT: eQ,
                  CONNECTION_OPEN: eB,
                  CONNECTION_CLOSED: eZ,
                  EXPERIMENT_OVERRIDE_BUCKET: eF,
                  RUNNING_GAME_TOGGLE_OVERLAY: eK,
                  RUNNING_GAMES_CHANGE: eW,
                  OVERLAY_SET_ENABLED: eV,
                  OVERLAY_FOCUSED: eU,
                  OVERLAY_SET_INPUT_LOCKED: eL,
                  OVERLAY_ACTIVATE_REGION: ex,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eM,
                  RPC_SERVER_READY: ej,
                  OVERLAY_CALL_PRIVATE_CHANNEL: ek,
                  OVERLAY_JOIN_GAME: eH,
                  OVERLAY_CRASHED: eG,
                  OVERLAY_UPDATE_OVERLAY_METHOD: ez,
              },
    ),
    e0 = e$;
