let r;
n.r(t),
    n.d(t, {
        OverlayPIDStatus: () => W,
        default: () => e1,
        getOverlayURL: () => eT,
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
    N = n(322155),
    R = n(509140),
    P = n(48481),
    D = n(314897),
    w = n(77498),
    L = n(355863),
    x = n(626135),
    M = n(866119),
    k = n(671999),
    j = n(998502),
    U = n(145597),
    G = n(372679),
    B = n(981631),
    Z = n(757744);
function F(e, t, n) {
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
function V(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var W = (function (e) {
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
let K = {},
    z = !1,
    q = new Map(),
    X = () => Array.from(q.values()).some((e) => "READY" === e),
    Q = !1,
    J = !1,
    $ = null,
    ee = new Set(),
    et = "",
    en = new Set();
class er {
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
        F(this, "isDispatching", !1),
            F(this, "timeout", void 0),
            F(this, "requestIdleCallback", void 0),
            F(this, "actionsToFlush", new Set()),
            F(this, "waitingActionsToFlush", new Set()),
            F(this, "flush", () => {
                if (
                    (null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)),
                    null != this.requestIdleCallback &&
                        (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)),
                    !X())
                )
                    return void this.actionsToFlush.clear();
                this.actionsToFlush.size > 0 &&
                    (m.lW({
                        type: B.BmY.DISPATCH,
                        pid: null,
                        token: null,
                        payloads: Array.from(this.actionsToFlush),
                    }),
                    this.actionsToFlush.clear()),
                    this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions();
            }),
            F(this, "dispatchPayloads", (e) => {
                (this.isDispatching = !0), e.forEach((e) => l.Z.dispatch(e)), (this.isDispatching = !1);
            }),
            F(
                this,
                "queueDispatch",
                (e) =>
                    !(!X() || ea.has(e.type)) &&
                    (this.isDispatching
                        ? this.waitingActionsToFlush.add(e)
                        : ("USER_SETTINGS_PROTO_UPDATE" === e.type &&
                              (e = Y(V({}, e), {
                                  settings: {
                                      type: e.settings.type,
                                      proto: (0, P.cv)(e.settings.type, e.settings.proto),
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
let ei = new er(),
    ea = new Set([
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
    eo = new Set(),
    es = !1,
    el = new g.Z("OverlayBridgeStore"),
    ec = {};
function eu(e) {
    var t;
    return null != (t = ec[e]) ? t : {};
}
function ed(e, t) {
    var n, r;
    let i = null == (n = ec[e]) ? void 0 : n.error,
        a = null == (r = ec[e]) ? void 0 : r.error_description;
    (ec[e] = V({}, ec[e], t)), null != i && (ec[e].error = i), null != a && (ec[e].error_description = a);
}
function ef(e) {
    var t, n;
    if (null != ec[e]) return;
    let r = b.ZP.getGameOrTransformedSubgameForPID(e);
    ec[e] = {
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
let e_ = "none",
    ep = (0, a.H)({
        onContention: (e, t) => el.verbose("overlayLock contention: lastMutexCall ".concat(e_)),
        onContentionResolved: () => el.verbose("overlayLock contention: resolved."),
        onTimeout: (e, t) => {
            let n = "overlayLock: lastMutexCall ".concat(e_, "}");
            el.error(n);
            let r = eu((0, U.getPID)());
            ed(
                (0, U.getPID)(),
                Y(V({}, r), {
                    error_description: n,
                    success: !1,
                }),
            ),
                x.default.track(B.rMx.OVERLAY_HOOK_RESULT, eu((0, U.getPID)()));
        },
        timeoutMs: 180000,
    });
function eh(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        ep(() => t(...r), e);
    };
}
function em() {
    try {
        var e;
        let t = null === p.Z || void 0 === p.Z || null == (e = p.Z.fileManager) ? void 0 : e.uploadDiscordHookCrashes;
        if (null == t) return;
        t().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let l of (el.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                    var t, n, r, i, a, o, s;
                    if (null == l) continue;
                    let e = null != l.processName ? w.Z.getGameByExecutable(l.processName) : null;
                    x.default.track(B.rMx.OVERLAY_HOOK_CRASHED, {
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
        el.error("tryUploadDiscordHookCrashes", e), (0, O.D1)(e);
    }
}
function eg(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = q.get(e);
    (null === n || r === n) &&
        r !== t &&
        (null == t ? q.delete(e) : q.set(e, t),
        (null == t || "CRASHED" === t) && (f.Z.setFocusedPID(null, null), em()),
        en.delete(e),
        el.info(
            "pid="
                .concat(e, " status transition ")
                .concat(null != r ? r : "DISCONNECTED", " -> ")
                .concat(null != t ? t : "DISCONNECTED"),
            q,
        ));
}
async function eE(e) {
    try {
        if (j.ZP.supportsFeature(B.eRX.CREATE_HOST_ON_ATTACH))
            if (q.size > 0) {
                e_ = "reconcile.getOverlayURL";
                let t = await eT();
                (e_ = "reconcile.createHostProcess"), e.createHostProcess(t, eC, eA);
            } else (e_ = "reconcile.destroyHostProcess"), e.destroyHostProcess(), eI((0, U.getPID)());
        else if (Q) {
            let t = await eT();
            e.createHostProcess(t, eC, eA);
        } else e.destroyHostProcess(), eI((0, U.getPID)());
    } catch (t) {
        el.error("reconcileHostProcess", t), (0, O.D1)(t), eI((0, U.getPID)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            el.error("reconcileHostProcess: destroyHostProcess", e), (0, O.D1)(e);
        }
    }
}
async function eb(e) {
    var t;
    ep.isMutexHeld() || el.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
    let n = null != (t = eu(e).mounting_started_at) ? t : new Date().getTime();
    ed(e, { mounting_started_at: n });
    let r = q.get(e);
    if (null != r) return void el.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(r));
    await f.Z.updateOverlayState(e, I.mM.WAITING_FOR_OVERLAY_OPEN, "attachPID"), (e_ = "attach.getOverlayModule");
    let i = await (0, G.K)();
    if (null == i) return void el.error("Trying to attach to pid=".concat(e, ", but overlay module failed loaded"));
    (e_ = "attach.transitionOverlayPIDStatus"), eg(e, "ATTACHING"), (e_ = "attach.attachToProcess");
    let a = await h.YT(e);
    null == a
        ? ((e_ = "attach.transitionOverlayPIDStatus (CONNECTING)"),
          eg(e, "CONNECTING", "ATTACHING"),
          (e_ = "attach.reconcileHostProcess"),
          await eE(i),
          i.connectProcess(e))
        : ((e_ = "attach.transitionOverlayPIDStatus (HOOK_FAILED)"),
          eg(e, "HOOK_FAILED", "ATTACHING"),
          el.warn("Could not hook to pid=".concat(e, ", error=").concat(a)));
}
async function ey(e) {
    if ((ep.isMutexHeld() || el.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !q.has(e)))
        return void el.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
    eg(e, "DISCONNECTING");
    try {
        e_ = "detach.getOverlayModule";
        let t = await (0, G.K)();
        if (null == t)
            return void el.error("Trying to detach from pid=".concat(e, ", but overlay module failed loaded"));
        e !== U.DEV_PID &&
            ((e_ = "detach.cancelAttachToProcess"),
            await h.pn(e),
            await (0, s._v)(16),
            (e_ = "detach.disconnectProcess"),
            await t.disconnectProcess(e)),
            (e_ = "detach.transitionOverlayPIDStatus"),
            eg(e, null),
            (e_ = "detach.reconcileHostProcess"),
            await eE(t);
    } catch (t) {
        (0, O.D1)(t, I.gl.Hook), el.error("Error during overlay detachment for pid ".concat(e, ":"), t), eg(e, null);
    }
}
async function eO(e) {
    var t, n;
    if (
        (el.verbose("updateIntendedOverlayPIDs", {
            isConnectionOpened: J,
            action: e,
        }),
        ep.isMutexHeld() || el.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e),
        !J && null != e)
    )
        return void el.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
    async function r(e) {
        if (!(e in K)) return;
        let t = K[e];
        delete K[e];
        try {
            await t.deconstructor(), ee.delete(e);
        } catch (n) {
            (0, O.D1)(n, I.gl.Hook),
                el.error("Failed to deconstruct tracked game ".concat(e), n),
                (K[e] = t),
                ee.add(e);
        }
    }
    let i = !1;
    if (null == e || !Q) {
        for (let t of (el.verbose("updateIntendedOverlayPIDs: Removing all.", K, e), Object.keys(K)))
            await r(Number(t)), (i = !0);
        return;
    }
    for (let n of ee) {
        if (null == (t = e.added) ? void 0 : t.includes(n)) {
            el.warn("updateIntendedOverlayPIDs: Failed PID was re-added?");
            continue;
        }
        el.verbose("updateIntendedOverlayPIDs: retrying failed overlay pid ".concat(n)), await r(n), (i = !0);
    }
    for (let t of null != (n = e.added) ? n : []) {
        let n = S.default.getTrackedGameByPid(t);
        if (null == n) {
            el.error("updateIntendedOverlayPIDs: Tracked game not found for pid=".concat(t));
            continue;
        }
        if ((el.verbose("updateIntendedOverlayPIDs: newGame", n), n.legacyEnabled))
            switch (
                (n.pid in K ? el.error("Unexpected. ".concat(n.pid, " is being added twice?"), K, e) : ef(n.pid),
                n.overlayMethod)
            ) {
                case I.gl.Hook:
                    let r = new Date().getTime();
                    ed(n.pid, {
                        mounting_started_at: r,
                        fullscreen_type: await (0, A.hj)(n.pid, 0),
                    }),
                        q.has(n.pid) || (await eb(n.pid)),
                        (K[n.pid] = {
                            method: n.overlayMethod,
                            deconstructor: async () => {
                                await ey(n.pid);
                            },
                        }),
                        (i = !0);
                    break;
                case I.gl.OutOfProcess:
                case I.gl.OutOfProcessLimitedInteraction:
                    el.error("updateIntendedOverlayPIDs: out of process called for hook overlay", n);
                    break;
                case I.gl.Disabled:
                    el.verbose("updateIntendedOverlayPIDs: disabled", n);
                    break;
                default:
                    el.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(n.overlayMethod), n);
            }
    }
    for (let t of e.removed) el.verbose("updateIntendedOverlayPIDs: removedGame", t), await r(t), (i = !0);
    i && e0.emitChange();
}
let ev = eh("updateIntendedOverlayPIDs", (e) => (el.info("updateIntendedOverlayPIDs", e), eO(e))),
    eI = eh("clearPID", (e) => {
        if (null == e) return (0, U.setPID)(U.UNSET_PID);
        C.Z.isOverlayV3EnabledForPID(e) || (0, U.setPID)(U.UNSET_PID);
    });
function eT() {
    return new Promise((e) => {
        e0.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let eS = eh("setOverlayEnabled", async (e) => {
    if (!(0, U.supportsLegacy)()) return;
    if (Q === e) return void el.verbose("setOverlayEnabled: no change", { newOverlayEnabled: e });
    (Q = e), e0.emitChange();
    let t = await (0, G.K)();
    if (null == t) return void el.error("setOverlayEnabled: overlay module failed loaded");
    Q || (await eO(void 0)), q.size > 0 && (await eE(t));
});
function eA(e) {
    f.Z.setFocusedPID(0 === e ? null : e, null);
}
function eC(e, t, n) {
    var r;
    let i = null == (r = b.ZP.getGameForPID(e)) ? void 0 : r.name,
        a = w.Z.getGameByName(i),
        o = V(
            {
                game_name: i,
                game_id: null == a ? null : a.id,
                success: t,
                overlay_method: I.gl[I.gl.Hook],
            },
            n,
        );
    ed(e, V({}, o)),
        (0, d.te)(U.OVERLAY_LAYOUT_ID, L.Z.getDefaultLayout(U.OVERLAY_LAYOUT_ID), Z.bv, {
            width: n.graphics_width,
            height: n.graphics_height,
        });
    let s = eu(e);
    x.default.track(B.rMx.OVERLAY_HOOK_RESULT, s),
        el.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), s),
        t
            ? (f.Z.updateOverlayState(e, I.mM.OVERLAY_RENDERING, "onConnectComplete"), eg(e, "CONNECTED", "CONNECTING"))
            : (f.Z.updateOverlayState(e, I.mM.OVERLAY_CRASHED, "onConnectComplete"),
              eg(e, "CONNECT_FAILED", "CONNECTING"));
}
function eN() {
    let e = D.default.getToken(),
        t = D.default.getId();
    null != e &&
        m.lW({
            type: B.BmY.DISPATCH,
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
function eR(e) {
    return null != e && (0, M.y)(e, et);
}
function eP(e) {
    switch ((es && el.info("[app data received]", e), e.type)) {
        case B.BmY.CONNECT:
            let t = D.default.getToken();
            if (null == t) break;
            (0, d.te)(U.OVERLAY_LAYOUT_ID, L.Z.getDefaultLayout(U.OVERLAY_LAYOUT_ID), Z.bv),
                Promise.all([(0, T.Z)(t, e.pid), o.ZP.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: a } = e;
                    m.lW({
                        type: B.BmY.STORAGE_SYNC,
                        pid: i,
                        token: a,
                        states: r,
                    }),
                        m.lW({
                            type: B.BmY.DISPATCH,
                            pid: i,
                            token: a,
                            payloads: [n],
                        }),
                        eg(i, "READY"),
                        (0, U.setPID)(i),
                        f.Z.overlayReady(i);
                    let o = eu(i);
                    ed(
                        i,
                        Y(V({}, o), {
                            total_mount_time_ms:
                                null != o.mounting_started_at ? new Date().getTime() - o.mounting_started_at : void 0,
                        }),
                    );
                });
            break;
        case B.BmY.DISPATCH:
            null != e.payloads && ei.dispatchPayloads(e.payloads);
            break;
        case B.BmY.LOG_MESSAGES:
            (0, y.K)(e.payload);
    }
}
async function eD(e, t) {
    let n = await (0, G.K)();
    if (null == n) return void el.error("setInputLocked: overlay module failed loaded");
    let r = null != t ? t : $;
    if (null != r && "DISCONNECTING" === q.get(r))
        return void el.warn("Overlay module is no longer valid during input lock");
    try {
        null != r &&
            r !== U.DEV_PID &&
            n.sendCommand(r, {
                message: "intercept_input",
                intercept: !e,
            });
    } catch (e) {
        (0, O.D1)(e, I.gl.Hook), el.error("Error during input lock", e);
    }
}
function ew(e, t) {
    e ? setTimeout(() => eD(e, t), 200) : eD(e, t);
}
let eL = null;
function ex(e) {
    let { locked: t, pid: n } = e,
        r = q.get(n);
    if ((ee.has(n) && ev(void 0), null != r && null != K[n]) && (t || "READY" === r || "CRASHED" === r)) {
        if ((t ? en.delete(n) : en.add(n), eo.clear(), null != eL && (clearTimeout(eL), (eL = null), t))) return;
        t
            ? ew(t, n)
            : (eL = setTimeout(() => {
                  ew(t, n), (eL = null);
              }, 100));
    }
}
function eM(e) {
    let { region: t } = e;
    eo.add(t), ew(!1, $);
}
function ek() {
    eo.clear(), ew(!0, $);
}
function ej(e) {
    let { port: t } = e;
    et = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append("build_id", "7a261b32ab1b02e768a3cf352b486f4a55e8dcea"),
        n.append("rpc", String(t)),
        n.append("rpc_auth_token", et),
        (r = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(n.toString()));
}
function eU(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        _.default.selectPrivateChannel(t), c.Z.call(t, !1, !!n);
    });
}
function eG(e) {
    let { pid: t } = e;
    $ = t;
}
function eB(e) {
    var t;
    let { pid: n, error: r } = e;
    if (null == K[n]) return;
    let i = r instanceof Error ? r : Error(null != r ? r : "Unknown error");
    eg(n, "CRASHED"),
        ed(n, {
            renderer_crash_count: (null != (t = eu(n).renderer_crash_count) ? t : 0) + 1,
            error: r instanceof Error ? r.message : r,
            error_description: r instanceof Error ? r.stack : void 0,
        }),
        el.verbose("OverlayBridgeStore: handleOverlayCrashed: ".concat(n)),
        (0, O.V6)(i, I.gl.Hook);
}
function eZ() {
    (J = !0), (z = !1), eX();
}
function eF() {
    (J = !1), f.Z.setFocusedPID(null, null), ev(void 0), el.verbose("OverlayBridgeStore: handleConnectionClosed");
}
function eV() {
    return !0;
}
function eH(e) {
    let { legacyEnabled: t } = e;
    return eS(t), !1;
}
function eY(e) {
    let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a } = e;
    setImmediate(() => {
        u.Z.join({
            userId: t,
            sessionId: n,
            applicationId: r,
            channelId: i,
            messageId: a,
        }),
            null != $ && f.Z.setInputLocked(!0, $);
    });
}
function eW(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            r = Math.ceil(n * window.innerHeight),
            i = (0, k.B)("click", e, r);
        (0, k.J)(i, e, r);
    }, 50);
}
function eK(e) {
    return (
        ev({
            added: [],
            removed: [],
        }),
        !0
    );
}
function ez(e) {
    return (
        ev({
            added: [],
            removed: [],
        }),
        !0
    );
}
function eq(e) {
    el.verbose("Updating OverlayMethod", {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, A.P_)(e.overlayMethod),
    }),
        e.overlayMethod === I.gl.Hook
            ? ev({
                  added: [e.pid],
                  removed: [],
              })
            : ev({
                  added: [],
                  removed: [e.pid],
              });
}
function eX() {
    E.Z.hasLoadedExperiments && !z && ((z = !0), eS(v.v.legacyEnabled));
}
function eQ() {
    z = !1;
}
function eJ() {
    z = !1;
}
class e$ extends (i = o.ZP.Store) {
    initialize() {
        !(0, U.supportsLegacy)() ||
            __OVERLAY__ ||
            (this.waitFor(D.default, E.Z, w.Z, L.Z, S.default, N.Z, R.Z, C.Z, b.ZP),
            this.syncWith([E.Z], eX),
            m.sr(eP, eR),
            D.default.addChangeListener(eN),
            l.Z.addInterceptor(ei.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return S.default.isOverlayOOPEnabledForPid(e) ? N.Z.isInputLocked(e) : !en.has(e);
    }
    DEV_isInputLockedV3(e) {
        return N.Z.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !en.has(e);
    }
    isSupported() {
        return (0, U.supportsLegacy)() || !1;
    }
    get enabled() {
        let e = C.Z.getFocusedPID();
        return null != e ? (C.Z.isOverlayV3EnabledForPID(e) ? R.Z.isOverlayEnabled : Q) : R.Z.isOverlayEnabled || Q;
    }
    getAnyGlobalEnabledOverlay() {
        return S.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = C.Z.getFocusedPID();
        return null != e && C.Z.isOverlayV3EnabledForPID(e) ? e : $;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && S.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return S.default.isOverlayOOPEnabledForPid((0, U.getPID)());
    }
    isReady(e) {
        return C.Z.isOverlayV3EnabledForPID(e) ? C.Z.isReady(e) : "READY" === q.get(e);
    }
    isCrashed(e) {
        return !C.Z.isOverlayV3EnabledForPID(e) && "CRASHED" === q.get(e);
    }
    getOverlayPIDStatuses() {
        return q;
    }
}
F(e$, "displayName", "OverlayBridgeStore");
let e0 = new e$(
        l.Z,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eW }
            : {
                  LOGIN: eQ,
                  LOGOUT: eJ,
                  CONNECTION_OPEN: eZ,
                  CONNECTION_CLOSED: eF,
                  EXPERIMENT_OVERRIDE_BUCKET: eV,
                  RUNNING_GAME_TOGGLE_OVERLAY: ez,
                  RUNNING_GAMES_CHANGE: eK,
                  OVERLAY_SET_ENABLED: eH,
                  OVERLAY_FOCUSED: eG,
                  OVERLAY_SET_INPUT_LOCKED: ex,
                  OVERLAY_ACTIVATE_REGION: eM,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: ek,
                  RPC_SERVER_READY: ej,
                  OVERLAY_CALL_PRIVATE_CHANNEL: eU,
                  OVERLAY_JOIN_GAME: eY,
                  OVERLAY_CRASHED: eB,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eq,
              },
    ),
    e1 = e0;
