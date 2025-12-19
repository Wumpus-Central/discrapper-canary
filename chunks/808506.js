let r;
n.r(t),
    n.d(t, {
        OverlayPIDStatus: () => W,
        default: () => e1,
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
    p = n(287734),
    _ = n(579806),
    m = n(887278),
    h = n(490029),
    g = n(710845),
    E = n(353926),
    b = n(594190),
    y = n(40766),
    O = n(338388),
    v = n(454991),
    S = n(837268),
    I = n(633565),
    T = n(371651),
    C = n(829907),
    A = n(610394),
    N = n(322155),
    P = n(509140),
    R = n(48481),
    w = n(314897),
    D = n(77498),
    x = n(355863),
    L = n(626135),
    j = n(866119),
    M = n(671999),
    k = n(998502),
    U = n(145597),
    G = n(372679),
    Z = n(981631),
    F = n(757744);
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
                B(e, t, n[t]);
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
    Q = () => Array.from(q.values()).some((e) => "READY" === e),
    X = !1,
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
                    !Q())
                )
                    return void this.actionsToFlush.clear();
                this.actionsToFlush.size > 0 &&
                    (h.lW({
                        type: Z.BmY.DISPATCH,
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
                    !(!Q() || ea.has(e.type)) &&
                    (this.isDispatching
                        ? this.waitingActionsToFlush.add(e)
                        : ("USER_SETTINGS_PROTO_UPDATE" === e.type &&
                              (e = Y(V({}, e), {
                                  settings: {
                                      type: e.settings.type,
                                      proto: (0, R.cv)(e.settings.type, e.settings.proto),
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
        overlay_method: S.gl[S.gl.Hook],
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
let ep = "none",
    e_ = (0, a.H)({
        onContention: (e, t) => el.verbose("overlayLock contention: lastMutexCall ".concat(ep)),
        onContentionResolved: () => el.verbose("overlayLock contention: resolved."),
        onTimeout: (e, t) => {
            let n = "overlayLock: lastMutexCall ".concat(ep, "}");
            el.error(n);
            let r = eu((0, U.getPID)());
            ed(
                (0, U.getPID)(),
                Y(V({}, r), {
                    error_description: n,
                    success: !1,
                }),
            ),
                L.default.track(Z.rMx.OVERLAY_HOOK_RESULT, eu((0, U.getPID)()));
        },
        timeoutMs: 180000,
    });
function em(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        e_(() => t(...r), e);
    };
}
function eh() {
    try {
        var e;
        let t = null === _.Z || void 0 === _.Z || null == (e = _.Z.fileManager) ? void 0 : e.uploadDiscordHookCrashes;
        if (null == t) return;
        t().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let l of (el.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
                    var t, n, r, i, a, o, s;
                    if (null == l) continue;
                    let e = null != l.processName ? D.Z.getGameByExecutable(l.processName) : null;
                    L.default.track(Z.rMx.OVERLAY_HOOK_CRASHED, {
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
        (null == t || "CRASHED" === t) && (f.Z.setFocusedPID(null, null), eh()),
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
        if (k.ZP.supportsFeature(Z.eRX.CREATE_HOST_ON_ATTACH))
            if (q.size > 0) {
                ep = "reconcile.getOverlayURL";
                let t = await eI();
                (ep = "reconcile.createHostProcess"), e.createHostProcess(t, eA, eC);
            } else (ep = "reconcile.destroyHostProcess"), e.destroyHostProcess(), eS((0, U.getPID)());
        else if (X) {
            let t = await eI();
            e.createHostProcess(t, eA, eC);
        } else e.destroyHostProcess(), eS((0, U.getPID)());
    } catch (t) {
        el.error("reconcileHostProcess", t), (0, O.D1)(t), eS((0, U.getPID)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            el.error("reconcileHostProcess: destroyHostProcess", e), (0, O.D1)(e);
        }
    }
}
async function eb(e) {
    var t;
    e_.isMutexHeld() || el.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
    let n = null != (t = eu(e).mounting_started_at) ? t : new Date().getTime();
    ed(e, { mounting_started_at: n });
    let r = q.get(e);
    if (null != r) return void el.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(r));
    await f.Z.updateOverlayState(e, S.mM.WAITING_FOR_OVERLAY_OPEN, "attachPID"), (ep = "attach.getOverlayModule");
    let i = await (0, G.K)();
    if (null == i) return void el.error("Trying to attach to pid=".concat(e, ", but overlay module failed loaded"));
    (ep = "attach.transitionOverlayPIDStatus"), eg(e, "ATTACHING"), (ep = "attach.attachToProcess");
    let a = await m.YT(e);
    null == a
        ? ((ep = "attach.transitionOverlayPIDStatus (CONNECTING)"),
          eg(e, "CONNECTING", "ATTACHING"),
          (ep = "attach.reconcileHostProcess"),
          await eE(i),
          i.connectProcess(e))
        : ((ep = "attach.transitionOverlayPIDStatus (HOOK_FAILED)"),
          eg(e, "HOOK_FAILED", "ATTACHING"),
          el.warn("Could not hook to pid=".concat(e, ", error=").concat(a)));
}
async function ey(e) {
    if ((e_.isMutexHeld() || el.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !q.has(e)))
        return void el.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
    eg(e, "DISCONNECTING");
    try {
        ep = "detach.getOverlayModule";
        let t = await (0, G.K)();
        if (null == t)
            return void el.error("Trying to detach from pid=".concat(e, ", but overlay module failed loaded"));
        e !== U.DEV_PID &&
            ((ep = "detach.cancelAttachToProcess"),
            await m.pn(e),
            await (0, s._v)(16),
            (ep = "detach.disconnectProcess"),
            await t.disconnectProcess(e)),
            (ep = "detach.transitionOverlayPIDStatus"),
            eg(e, null),
            (ep = "detach.reconcileHostProcess"),
            await eE(t);
    } catch (t) {
        (0, O.D1)(t, S.gl.Hook), el.error("Error during overlay detachment for pid ".concat(e, ":"), t), eg(e, null);
    }
}
async function eO(e) {
    var t, n;
    if (
        (el.verbose("updateIntendedOverlayPIDs", {
            isConnectionOpened: J,
            action: e,
        }),
        e_.isMutexHeld() || el.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e),
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
            (0, O.D1)(n, S.gl.Hook),
                el.error("Failed to deconstruct tracked game ".concat(e), n),
                (K[e] = t),
                ee.add(e);
        }
    }
    let i = !1;
    if (null == e || !X) {
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
        let n = T.default.getTrackedGameByPid(t);
        if (null == n) {
            el.error("updateIntendedOverlayPIDs: Tracked game not found for pid=".concat(t));
            continue;
        }
        if ((el.verbose("updateIntendedOverlayPIDs: newGame", n), n.legacyEnabled))
            switch (
                (n.pid in K ? el.error("Unexpected. ".concat(n.pid, " is being added twice?"), K, e) : ef(n.pid),
                n.overlayMethod)
            ) {
                case S.gl.Hook:
                    let r = new Date().getTime();
                    ed(n.pid, {
                        mounting_started_at: r,
                        fullscreen_type: await (0, C.hj)(n.pid, 0),
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
                case S.gl.OutOfProcess:
                case S.gl.OutOfProcessLimitedInteraction:
                    el.error("updateIntendedOverlayPIDs: out of process called for hook overlay", n);
                    break;
                case S.gl.Disabled:
                    el.verbose("updateIntendedOverlayPIDs: disabled", n);
                    break;
                default:
                    el.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(n.overlayMethod), n);
            }
    }
    for (let t of e.removed) el.verbose("updateIntendedOverlayPIDs: removedGame", t), await r(t), (i = !0);
    i && e0.emitChange();
}
let ev = em("updateIntendedOverlayPIDs", (e) => (el.info("updateIntendedOverlayPIDs", e), eO(e))),
    eS = em("clearPID", (e) => {
        if (null == e) return (0, U.setPID)(U.UNSET_PID);
        A.Z.isOverlayV3EnabledForPID(e) || (0, U.setPID)(U.UNSET_PID);
    });
function eI() {
    return new Promise((e) => {
        e0.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let eT = em("setOverlayEnabled", async (e) => {
    if (!(0, U.supportsLegacy)()) return;
    if (X === e) return void el.verbose("setOverlayEnabled: no change", { newOverlayEnabled: e });
    (X = e), e0.emitChange();
    let t = await (0, G.K)();
    if (null == t) return void el.error("setOverlayEnabled: overlay module failed loaded");
    X || (await eO(void 0)), q.size > 0 && (await eE(t));
});
function eC(e) {
    f.Z.setFocusedPID(0 === e ? null : e, null);
}
function eA(e, t, n) {
    var r;
    let i = null == (r = b.ZP.getGameForPID(e)) ? void 0 : r.name,
        a = D.Z.getGameByName(i),
        o = V(
            {
                game_name: i,
                game_id: null == a ? null : a.id,
                success: t,
                overlay_method: S.gl[S.gl.Hook],
            },
            n,
        );
    ed(e, V({}, o)),
        (0, d.te)(U.OVERLAY_LAYOUT_ID, x.Z.getDefaultLayout(U.OVERLAY_LAYOUT_ID), F.bv, {
            width: n.graphics_width,
            height: n.graphics_height,
        });
    let s = eu(e);
    L.default.track(Z.rMx.OVERLAY_HOOK_RESULT, s),
        el.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), s),
        t
            ? (f.Z.updateOverlayState(e, S.mM.OVERLAY_RENDERING, "onConnectComplete"), eg(e, "CONNECTED", "CONNECTING"))
            : (f.Z.updateOverlayState(e, S.mM.OVERLAY_CRASHED, "onConnectComplete"),
              eg(e, "CONNECT_FAILED", "CONNECTING"));
}
function eN() {
    let e = w.default.getToken(),
        t = w.default.getId();
    null != e &&
        h.lW({
            type: Z.BmY.DISPATCH,
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
function eP(e) {
    return null != e && (0, j.y)(e, et);
}
function eR(e) {
    switch ((es && el.info("[app data received]", e), e.type)) {
        case Z.BmY.CONNECT:
            let t = w.default.getToken();
            if (null == t) break;
            (0, d.te)(U.OVERLAY_LAYOUT_ID, x.Z.getDefaultLayout(U.OVERLAY_LAYOUT_ID), F.bv),
                Promise.all([(0, I.Z)(t, e.pid), o.ZP.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: a } = e;
                    h.lW({
                        type: Z.BmY.STORAGE_SYNC,
                        pid: i,
                        token: a,
                        states: r,
                    }),
                        h.lW({
                            type: Z.BmY.DISPATCH,
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
        case Z.BmY.DISPATCH:
            null != e.payloads && ei.dispatchPayloads(e.payloads);
            break;
        case Z.BmY.LOG_MESSAGES:
            (0, y.K)(e.payload);
    }
}
async function ew(e, t) {
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
        (0, O.D1)(e, S.gl.Hook), el.error("Error during input lock", e);
    }
}
function eD(e, t) {
    e ? setTimeout(() => ew(e, t), 200) : ew(e, t);
}
let ex = null;
function eL(e) {
    let { locked: t, pid: n } = e,
        r = q.get(n);
    if ((ee.has(n) && ev(void 0), null != r && null != K[n]) && (t || "READY" === r || "CRASHED" === r)) {
        if ((t ? en.delete(n) : en.add(n), eo.clear(), null != ex && (clearTimeout(ex), (ex = null), t))) return;
        t
            ? eD(t, n)
            : (ex = setTimeout(() => {
                  eD(t, n), (ex = null);
              }, 100));
    }
}
function ej(e) {
    let { region: t } = e;
    eo.add(t), eD(!1, $);
}
function eM() {
    eo.clear(), eD(!0, $);
}
function ek(e) {
    let { port: t } = e;
    et = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append("build_id", "9a0a1d9a0dc117ea9a99d5ed104bb8648c333f2b"),
        n.append("rpc", String(t)),
        n.append("rpc_auth_token", et),
        (r = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(n.toString()));
}
function eU(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        p.default.selectPrivateChannel(t), c.Z.call(t, !1, !!n);
    });
}
function eG(e) {
    let { pid: t } = e;
    $ = t;
}
function eZ(e) {
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
        (0, O.V6)(i, S.gl.Hook);
}
function eF() {
    (J = !0), (z = !1), eQ();
}
function eB() {
    (J = !1), f.Z.setFocusedPID(null, null), ev(void 0), el.verbose("OverlayBridgeStore: handleConnectionClosed");
}
function eV() {
    return !0;
}
function eH(e) {
    let { legacyEnabled: t } = e;
    return eT(t), !1;
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
            i = (0, M.B)("click", e, r);
        (0, M.J)(i, e, r);
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
        overlayLabel: (0, C.P_)(e.overlayMethod),
    }),
        e.overlayMethod === S.gl.Hook
            ? ev({
                  added: [e.pid],
                  removed: [],
              })
            : ev({
                  added: [],
                  removed: [e.pid],
              });
}
function eQ() {
    E.Z.hasLoadedExperiments && !z && ((z = !0), eT(v.v.legacyEnabled));
}
function eX() {
    z = !1;
}
function eJ() {
    z = !1;
}
class e$ extends (i = o.ZP.Store) {
    initialize() {
        !(0, U.supportsLegacy)() ||
            __OVERLAY__ ||
            (this.waitFor(w.default, E.Z, D.Z, x.Z, T.default, N.Z, P.Z, A.Z, b.ZP),
            this.syncWith([E.Z], eQ),
            h.sr(eR, eP),
            w.default.addChangeListener(eN),
            l.Z.addInterceptor(ei.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return T.default.isOverlayOOPEnabledForPid(e) ? N.Z.isInputLocked(e) : !en.has(e);
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
        let e = A.Z.getFocusedPID();
        return null != e ? (A.Z.isOverlayV3EnabledForPID(e) ? P.Z.isOverlayEnabled : X) : P.Z.isOverlayEnabled || X;
    }
    getAnyGlobalEnabledOverlay() {
        return T.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = A.Z.getFocusedPID();
        return null != e && A.Z.isOverlayV3EnabledForPID(e) ? e : $;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && T.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return T.default.isOverlayOOPEnabledForPid((0, U.getPID)());
    }
    isReady(e) {
        return A.Z.isOverlayV3EnabledForPID(e) ? A.Z.isReady(e) : "READY" === q.get(e);
    }
    isCrashed(e) {
        return !A.Z.isOverlayV3EnabledForPID(e) && "CRASHED" === q.get(e);
    }
    getOverlayPIDStatuses() {
        return q;
    }
}
B(e$, "displayName", "OverlayBridgeStore");
let e0 = new e$(
        l.Z,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eW }
            : {
                  LOGIN: eX,
                  LOGOUT: eJ,
                  CONNECTION_OPEN: eF,
                  CONNECTION_CLOSED: eB,
                  EXPERIMENT_OVERRIDE_BUCKET: eV,
                  RUNNING_GAME_TOGGLE_OVERLAY: ez,
                  RUNNING_GAMES_CHANGE: eK,
                  OVERLAY_SET_ENABLED: eH,
                  OVERLAY_FOCUSED: eG,
                  OVERLAY_SET_INPUT_LOCKED: eL,
                  OVERLAY_ACTIVATE_REGION: ej,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eM,
                  RPC_SERVER_READY: ek,
                  OVERLAY_CALL_PRIVATE_CHANNEL: eU,
                  OVERLAY_JOIN_GAME: eY,
                  OVERLAY_CRASHED: eZ,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eq,
              },
    ),
    e1 = e0;
