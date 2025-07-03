let r;
(n.r(t),
    n.d(t, {
        OverlayPIDStatus: () => F,
        default: () => eJ,
        getOverlayURL: () => eO
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
    n(49124));
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
    p = n(615287),
    h = n(579806),
    m = n(887278),
    g = n(490029),
    E = n(710845),
    b = n(353926),
    y = n(594190),
    O = n(454991),
    v = n(633565),
    I = n(371651),
    T = n(829907),
    S = n(610394),
    A = n(48481),
    N = n(314897),
    C = n(77498),
    R = n(355863),
    P = n(626135),
    w = n(866119),
    D = n(671999),
    L = n(998502),
    x = n(145597),
    k = n(372679),
    M = n(981631),
    j = n(757744);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            }));
    }
    return e;
}
function B(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var F = (function (e) {
    return ((e.ATTACHING = 'ATTACHING'), (e.CONNECTING = 'CONNECTING'), (e.CONNECTED = 'CONNECTED'), (e.READY = 'READY'), (e.CRASHED = 'CRASHED'), (e.CONNECT_FAILED = 'CONNECT_FAILED'), (e.HOOK_FAILED = 'HOOK_FAILED'), (e.DISCONNECTING = 'DISCONNECTING'), e);
})({});
let Z = {},
    H = !1,
    Y = new Map(),
    W = () => Array.from(Y.values()).some((e) => 'READY' === e),
    K = !1,
    z = !1,
    q = !1,
    X = null,
    Q = new Set(),
    J = '',
    $ = new Set();
class ee {
    reset() {
        (this.actionsToFlush.clear(), this.waitingActionsToFlush.clear(), (this.isDispatching = !1), (this.timeout = null), null != this.timeout && clearTimeout(this.timeout), (this.requestIdleCallback = null), null != this.requestIdleCallback && cancelIdleCallback(this.requestIdleCallback));
    }
    enqueueWaitingActions() {
        let e = new Set([...this.waitingActionsToFlush]);
        for (let t of (this.waitingActionsToFlush.clear(), e)) this.queueDispatch(t);
    }
    constructor() {
        (U(this, 'isDispatching', !1),
            U(this, 'timeout', void 0),
            U(this, 'requestIdleCallback', void 0),
            U(this, 'actionsToFlush', new Set()),
            U(this, 'waitingActionsToFlush', new Set()),
            U(this, 'flush', () => {
                if ((null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)), null != this.requestIdleCallback && (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)), !W())) return void this.actionsToFlush.clear();
                (this.actionsToFlush.size > 0 &&
                    (g.lW({
                        type: M.BmY.DISPATCH,
                        pid: null,
                        token: null,
                        payloads: Array.from(this.actionsToFlush)
                    }),
                    this.actionsToFlush.clear()),
                    this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions());
            }),
            U(this, 'dispatchPayloads', (e) => {
                ((this.isDispatching = !0), e.forEach((e) => l.Z.dispatch(e)), (this.isDispatching = !1));
            }),
            U(
                this,
                'queueDispatch',
                (e) =>
                    !(!W() || en.has(e.type)) &&
                    (this.isDispatching
                        ? this.waitingActionsToFlush.add(e)
                        : ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
                              (e = V(G({}, e), {
                                  settings: {
                                      type: e.settings.type,
                                      proto: (0, A.cv)(e.settings.type, e.settings.proto)
                                  }
                              })),
                          this.actionsToFlush.add(e),
                          null == this.timeout &&
                              null == this.requestIdleCallback &&
                              (this.timeout = setTimeout(() => {
                                  this.requestIdleCallback = requestIdleCallback(this.flush, { timeout: 100 });
                              }, 100))),
                    !1)
            ));
    }
}
let et = new ee(),
    en = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED', 'MEDIA_ENGINE_CONNECTION_STATS', 'RTC_CONNECTION_UPDATE_ID', 'ACTIVE_AV_ERRORS_CHANGED', 'BURST_REACTION_ANIMATION_ADD', 'ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS']),
    er = new Set(),
    ei = !1,
    ea = new E.Z('OverlayBridgeStore'),
    eo = {};
function es(e) {
    var t;
    return null != (t = eo[e]) ? t : {};
}
function el(e, t) {
    var n, r;
    let i = null == (n = eo[e]) ? void 0 : n.error,
        a = null == (r = eo[e]) ? void 0 : r.error_description;
    ((eo[e] = G({}, eo[e], t)), null != i && (eo[e].error = i), null != a && (eo[e].error_description = a));
}
function ec(e) {
    var t, n;
    if (null != eo[e]) return;
    let r = y.ZP.getGameForPID(e);
    eo[e] = {
        overlay_method: p.gl[p.gl.Hook],
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
        host_crash_count: 0
    };
}
let eu = 'none',
    ed = (0, a.H)({
        onContention: (e, t) => ea.verbose('overlayLock contention: lastMutexCall '.concat(eu)),
        onContentionResolved: () => ea.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, t) => {
            let n = 'overlayLock: lastMutexCall '.concat(eu, '}');
            ea.error(n);
            let r = es((0, x.getPID)());
            (el(
                (0, x.getPID)(),
                V(G({}, r), {
                    error_description: n,
                    success: !1
                })
            ),
                P.default.track(M.rMx.OVERLAY_HOOK_RESULT, es((0, x.getPID)())));
        },
        timeoutMs: 180000
    });
function ef(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        ed(() => t(...r), e);
    };
}
function e_() {
    try {
        var e;
        let t = null === h.Z || void 0 === h.Z || null == (e = h.Z.fileManager) ? void 0 : e.uploadDiscordHookCrashes;
        if (null == t) return;
        t().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let l of (ea.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                    var t, n, r, i, a, o, s;
                    if (null == l) continue;
                    let e = null != l.processName ? C.Z.getGameByExecutable(l.processName) : null;
                    P.default.track(M.rMx.OVERLAY_HOOK_CRASHED, {
                        process_name: null == l ? void 0 : l.processName,
                        game_name: null != (t = null == e ? void 0 : e.name) ? t : null,
                        game_id: null != (n = null == e ? void 0 : e.id) ? n : null,
                        minidump_exception_type: null != (r = l.exceptionString) ? r : null,
                        minidump_exception_module_name: null != (i = l.exceptionModuleName) ? i : null,
                        minidump_relative_crash_address: null != (a = l.relativeCrashAddress) ? a : null,
                        minidump_exception_module_version: null != (o = l.exceptionModuleVersion) ? o : null,
                        minidump_exception_module_code_id: null != (s = l.exceptionModuleCodeId) ? s : null
                    });
                }
        });
    } catch (e) {
        ea.error('tryUploadDiscordHookCrashes', e);
    }
}
function ep(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = Y.get(e);
    (null === n || r === n) &&
        r !== t &&
        (null == t ? Y.delete(e) : Y.set(e, t),
        (null == t || 'CRASHED' === t) && (f.Z.setFocusedPID(null), e_()),
        $.delete(e),
        ea.info(
            'pid='
                .concat(e, ' status transition ')
                .concat(null != r ? r : 'DISCONNECTED', ' -> ')
                .concat(null != t ? t : 'DISCONNECTED'),
            Y
        ));
}
async function eh(e) {
    try {
        if (L.ZP.supportsFeature(M.eRX.CREATE_HOST_ON_ATTACH))
            if (Y.size > 0) {
                eu = 'reconcile.getOverlayURL';
                let t = await eO();
                ((eu = 'reconcile.createHostProcess'), e.createHostProcess(t, eT, eI));
            } else ((eu = 'reconcile.destroyHostProcess'), e.destroyHostProcess(), ey((0, x.getPID)()));
        else if (K) {
            let t = await eO();
            e.createHostProcess(t, eT, eI);
        } else (e.destroyHostProcess(), ey((0, x.getPID)()));
    } catch (t) {
        (ea.error('reconcileHostProcess', t), ey((0, x.getPID)()));
        try {
            e.destroyHostProcess();
        } catch (e) {
            ea.error('reconcileHostProcess: destroyHostProcess', e);
        }
    }
}
async function em(e) {
    var t;
    ed.isMutexHeld() || ea.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let n = null != (t = es(e).mounting_started_at) ? t : new Date().getTime();
    el(e, { mounting_started_at: n });
    let r = Y.get(e);
    if (null != r) return void ea.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(r));
    (await f.Z.updateOverlayState(e, p.mM.WAITING_FOR_OVERLAY_OPEN), (eu = 'attach.getOverlayModule'));
    let i = await (0, k.K)();
    if (null == i) return void ea.error('Trying to attach to pid='.concat(e, ', but overlay module failed loaded'));
    ((eu = 'attach.transitionOverlayPIDStatus'), ep(e, 'ATTACHING'), (eu = 'attach.attachToProcess'));
    let a = await m.YT(e);
    null == a ? ((eu = 'attach.transitionOverlayPIDStatus (CONNECTING)'), ep(e, 'CONNECTING', 'ATTACHING'), (eu = 'attach.reconcileHostProcess'), await eh(i), i.connectProcess(e)) : ((eu = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), ep(e, 'HOOK_FAILED', 'ATTACHING'), ea.warn('Could not hook to pid='.concat(e, ', error=').concat(a)));
}
async function eg(e) {
    if ((ed.isMutexHeld() || ea.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !Y.has(e))) return void ea.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
    ep(e, 'DISCONNECTING');
    try {
        eu = 'detach.getOverlayModule';
        let t = await (0, k.K)();
        if (null == t) return void ea.error('Trying to detach from pid='.concat(e, ', but overlay module failed loaded'));
        (e !== x.DEV_PID && ((eu = 'detach.cancelAttachToProcess'), await m.pn(e), await (0, s._v)(16), (eu = 'detach.disconnectProcess'), await t.disconnectProcess(e)), (eu = 'detach.transitionOverlayPIDStatus'), ep(e, null), (eu = 'detach.reconcileHostProcess'), await eh(t));
    } catch (t) {
        (ea.error('Error during overlay detachment for pid '.concat(e, ':'), t), ep(e, null));
    }
}
async function eE(e) {
    var t, n;
    if (
        (ea.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: q,
            action: e
        }),
        ed.isMutexHeld() || ea.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !q && null != e)
    )
        return void ea.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
    async function r(e) {
        if (!(e in Z)) return;
        let t = Z[e];
        delete Z[e];
        try {
            (await t.deconstructor(), Q.delete(e));
        } catch (n) {
            (ea.error('Failed to deconstruct tracked game '.concat(e), n), (Z[e] = t), Q.add(e));
        }
    }
    let i = !1;
    if (null == e || !K) {
        for (let t of (ea.verbose('updateIntendedOverlayPIDs: Removing all.', Z, e), Object.keys(Z))) (await r(Number(t)), (i = !0));
        return;
    }
    for (let n of Q) {
        if (null == (t = e.added) ? void 0 : t.includes(n)) {
            ea.warn('updateIntendedOverlayPIDs: Failed PID was re-added?');
            continue;
        }
        (ea.verbose('updateIntendedOverlayPIDs: retrying failed overlay pid '.concat(n)), await r(n), (i = !0));
    }
    for (let t of null != (n = e.added) ? n : []) {
        let n = I.default.getTrackedGameByPid(t);
        if (null == n) {
            ea.error('updateIntendedOverlayPIDs: Tracked game not found for pid='.concat(t));
            continue;
        }
        if ((ea.verbose('updateIntendedOverlayPIDs: newGame', n), n.legacyEnabled))
            switch ((n.pid in Z ? ea.error('Unexpected. '.concat(n.pid, ' is being added twice?'), Z, e) : ec(n.pid), n.overlayMethod)) {
                case p.gl.Hook:
                    let r = new Date().getTime();
                    (el(n.pid, {
                        mounting_started_at: r,
                        fullscreen_type: await (0, T.hj)(n.pid, 0)
                    }),
                        Y.has(n.pid) || (await em(n.pid)),
                        (Z[n.pid] = {
                            method: n.overlayMethod,
                            deconstructor: async () => {
                                await eg(n.pid);
                            }
                        }),
                        (i = !0));
                    break;
                case p.gl.OutOfProcess:
                case p.gl.OutOfProcessLimitedInteraction:
                    ea.error('updateIntendedOverlayPIDs: out of process called for hook overlay', n);
                    break;
                case p.gl.Disabled:
                    ea.verbose('updateIntendedOverlayPIDs: disabled', n);
                    break;
                default:
                    ea.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(n.overlayMethod), n);
            }
    }
    for (let t of e.removed) (ea.verbose('updateIntendedOverlayPIDs: removedGame', t), await r(t), (i = !0));
    i && eQ.emitChange();
}
let eb = ef('updateIntendedOverlayPIDs', (e) => (ea.info('updateIntendedOverlayPIDs', e), eE(e))),
    ey = ef('clearPID', (e) => {
        if (null == e) return (0, x.setPID)(x.UNSET_PID);
        S.ZP.isOverlayV3EnabledForPID(e) || (0, x.setPID)(x.UNSET_PID);
    });
function eO() {
    return new Promise((e) => {
        eQ.addConditionalChangeListener(() => {
            if (null != r) return (e(r), !1);
        });
    });
}
let ev = ef('setOverlayEnabled', async (e) => {
    if (!(0, x.supportsLegacy)()) return;
    if (K === e) return void ea.verbose('setOverlayEnabled: no change', { newOverlayEnabled: e });
    ((K = e), eQ.emitChange());
    let t = await (0, k.K)();
    if (null == t) return void ea.error('setOverlayEnabled: overlay module failed loaded');
    (K || (await eE(void 0)), Y.size > 0 && (await eh(t)));
});
function eI(e) {
    f.Z.setFocusedPID(0 === e ? null : e);
}
function eT(e, t, n) {
    var r;
    let i = null == (r = y.ZP.getGameForPID(e)) ? void 0 : r.name,
        a = C.Z.getGameByName(i),
        o = G(
            {
                game_name: i,
                game_id: null == a ? null : a.id,
                success: t,
                overlay_method: p.gl[p.gl.Hook]
            },
            n
        );
    (el(e, G({}, o)),
        (0, d.te)(x.OVERLAY_LAYOUT_ID, R.Z.getDefaultLayout(x.OVERLAY_LAYOUT_ID), j.bv, {
            width: n.graphics_width,
            height: n.graphics_height
        }),
        f.Z.updateOverlayState(e, p.mM.OVERLAY_RENDERING));
    let s = es(e);
    (P.default.track(M.rMx.OVERLAY_HOOK_RESULT, s), ea.info('Overlay connection to '.concat(e, ' ').concat(t ? 'succeeded' : 'failed'), s), t ? ep(e, 'CONNECTED', 'CONNECTING') : ep(e, 'CONNECT_FAILED', 'CONNECTING'));
}
function eS() {
    let e = N.default.getToken(),
        t = N.default.getId();
    null != e &&
        g.lW({
            type: M.BmY.DISPATCH,
            pid: null,
            token: null,
            payloads: [
                {
                    type: 'UPDATE_TOKEN',
                    token: e,
                    userId: t
                }
            ]
        });
}
function eA(e) {
    return null != e && (0, w.y)(e, J);
}
function eN(e) {
    switch ((ei && ea.info('[app data received]', e), e.type)) {
        case M.BmY.CONNECT:
            let t = N.default.getToken();
            if (null == t) break;
            ((0, d.te)(x.OVERLAY_LAYOUT_ID, R.Z.getDefaultLayout(x.OVERLAY_LAYOUT_ID), j.bv),
                Promise.all([(0, v.Z)(t, e.pid), o.ZP.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: a } = e;
                    (g.lW({
                        type: M.BmY.STORAGE_SYNC,
                        pid: i,
                        token: a,
                        states: r
                    }),
                        g.lW({
                            type: M.BmY.DISPATCH,
                            pid: i,
                            token: a,
                            payloads: [n]
                        }),
                        ep(i, 'READY'),
                        (0, x.setPID)(i),
                        f.Z.overlayReady(i));
                    let o = es(i);
                    el(i, V(G({}, o), { total_mount_time_ms: null != o.mounting_started_at ? new Date().getTime() - o.mounting_started_at : void 0 }));
                }));
            break;
        case M.BmY.DISPATCH:
            null != e.payloads && et.dispatchPayloads(e.payloads);
            break;
        case M.BmY.LOG_MESSAGES:
            ea.info('[overlay data received]', e.payload);
    }
}
async function eC(e, t) {
    let n = await (0, k.K)();
    if (null == n) return void ea.error('setInputLocked: overlay module failed loaded');
    let r = null != t ? t : X;
    if (null != r && 'DISCONNECTING' === Y.get(r)) return void ea.warn('Overlay module is no longer valid during input lock');
    try {
        null != r &&
            r !== x.DEV_PID &&
            n.sendCommand(r, {
                message: 'intercept_input',
                intercept: !e
            });
    } catch (e) {
        ea.error('Error during input lock', e);
    }
}
function eR(e, t) {
    e ? setTimeout(() => eC(e, t), 200) : eC(e, t);
}
let eP = null;
function ew(e) {
    let { locked: t, pid: n } = e,
        r = Y.get(n);
    if ((Q.has(n) && eb(void 0), null != r && null != Z[n]) && (t || 'READY' === r || 'CRASHED' === r)) {
        if ((t ? $.delete(n) : $.add(n), er.clear(), null != eP && (clearTimeout(eP), (eP = null), t))) return;
        t
            ? eR(t, n)
            : (eP = setTimeout(() => {
                  (eR(t, n), (eP = null));
              }, 100));
    }
}
function eD(e) {
    let { region: t } = e;
    (er.add(t), eR(!1, X));
}
function eL() {
    (er.clear(), eR(!0, X));
}
function ex(e) {
    let { port: t } = e;
    J = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    (n.append('build_id', 'bae19b6d97c6d666434a54f058fdd6af437c6344'), n.append('rpc', String(t)), n.append('rpc_auth_token', J), (r = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(n.toString())));
}
function ek(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        (_.default.selectPrivateChannel(t), c.Z.call(t, !1, !!n));
    });
}
function eM(e) {
    let { pid: t } = e;
    X = t;
}
function ej(e) {
    var t;
    let { pid: n, error: r } = e;
    (ep(n, 'CRASHED'),
        el(n, {
            renderer_crash_count: (null != (t = es(n).renderer_crash_count) ? t : 0) + 1,
            error: r instanceof Error ? r.message : r,
            error_description: r instanceof Error ? r.stack : void 0
        }),
        ea.verbose('OverlayBridgeStore: handleOverlayCrashed: '.concat(n)));
}
function eU() {
    ((q = !0), (H = !1), eK());
}
function eG() {
    ((q = !1), f.Z.setFocusedPID(null), eb(void 0), ea.verbose('OverlayBridgeStore: handleConnectionClosed'));
}
function eB() {
    return !0;
}
function eV(e) {
    let { legacyEnabled: t } = e;
    return (ev(t), !1);
}
function eF(e) {
    let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a } = e;
    setImmediate(() => {
        (u.Z.join({
            userId: t,
            sessionId: n,
            applicationId: r,
            channelId: i,
            messageId: a
        }),
            null != X && f.Z.setInputLocked(!0, X));
    });
}
function eZ(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            r = Math.ceil(n * window.innerHeight),
            i = (0, D.B)('click', e, r);
        (0, D.J)(i, e, r);
    }, 50);
}
function eH(e) {
    return (
        eb({
            added: [],
            removed: []
        }),
        !0
    );
}
function eY(e) {
    return (
        eb({
            added: [],
            removed: []
        }),
        !0
    );
}
function eW(e) {
    (ea.verbose('Updating OverlayMethod', {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, T.P_)(e.overlayMethod)
    }),
        e.overlayMethod === p.gl.Hook
            ? eb({
                  added: [e.pid],
                  removed: []
              })
            : eb({
                  added: [],
                  removed: [e.pid]
              }));
}
function eK() {
    b.Z.hasLoadedExperiments && !H && ((H = !0), ev(O.v.legacyEnabled));
}
function ez() {
    H = !1;
}
function eq() {
    H = !1;
}
class eX extends (i = o.ZP.Store) {
    initialize() {
        !(0, x.supportsLegacy)() || __OVERLAY__ || (this.waitFor(y.ZP, b.Z, N.default, S.ZP, I.default), this.syncWith([b.Z], eK), g.sr(eN, eA), N.default.addChangeListener(eS), l.Z.addInterceptor(et.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return I.default.isOverlayOOPEnabledForPid(e) ? S.ZP.isInputLocked(e) : !$.has(e);
    }
    DEV_isInputLockedV3(e) {
        return S.ZP.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !$.has(e);
    }
    isSupported() {
        return (0, x.supportsLegacy)() || !1;
    }
    get enabled() {
        return S.ZP.isOverlayV3Enabled() ? S.ZP.enabled : K;
    }
    get legacyEnabled() {
        return !S.ZP.isOverlayV3Enabled() && z;
    }
    getAnyGlobalEnabledOverlay() {
        return I.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = S.ZP.getFocusedPID();
        return null != e && S.ZP.isOverlayV3EnabledForPID(e) ? e : X;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && I.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return I.default.isOverlayOOPEnabledForPid((0, x.getPID)());
    }
    isReady(e) {
        return S.ZP.isOverlayV3EnabledForPID(e) ? S.ZP.isReady(e) : 'READY' === Y.get(e);
    }
    isCrashed(e) {
        return !S.ZP.isOverlayV3EnabledForPID(e) && 'CRASHED' === Y.get(e);
    }
    getOverlayPIDStatuses() {
        return Y;
    }
}
U(eX, 'displayName', 'OverlayBridgeStore');
let eQ = new eX(
        l.Z,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eZ }
            : {
                  LOGIN: ez,
                  LOGOUT: eq,
                  CONNECTION_OPEN: eU,
                  CONNECTION_CLOSED: eG,
                  EXPERIMENT_OVERRIDE_BUCKET: eB,
                  RUNNING_GAME_TOGGLE_OVERLAY: eY,
                  RUNNING_GAMES_CHANGE: eH,
                  OVERLAY_SET_ENABLED: eV,
                  OVERLAY_FOCUSED: eM,
                  OVERLAY_SET_INPUT_LOCKED: ew,
                  OVERLAY_ACTIVATE_REGION: eD,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eL,
                  RPC_SERVER_READY: ex,
                  OVERLAY_CALL_PRIVATE_CHANNEL: ek,
                  OVERLAY_JOIN_GAME: eF,
                  OVERLAY_CRASHED: ej,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eW
              }
    ),
    eJ = eQ;
