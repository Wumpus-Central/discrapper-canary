let r;
n.d(t, {
    Y: () => eb,
    Z: () => eX
}),
    n(47120),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(610885),
    n(126298),
    n(866573),
    n(642549),
    n(787622),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(177593),
    n(411104);
var i,
    o = n(807864),
    a = n(442837),
    s = n(379649),
    l = n(570140),
    c = n(26151),
    u = n(224706),
    d = n(765250),
    f = n(13245),
    p = n(287734),
    _ = n(615287),
    h = n(579806),
    m = n(887278),
    g = n(490029),
    E = n(710845),
    v = n(353926),
    b = n(594190),
    y = n(454991),
    O = n(633565),
    S = n(371651),
    I = n(829907),
    T = n(610394),
    N = n(48481),
    A = n(314897),
    C = n(77498),
    R = n(355863),
    P = n(626135),
    w = n(866119),
    D = n(671999),
    x = n(998502),
    L = n(145597),
    M = n(372679),
    k = n(981631),
    j = n(987650);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function Z(e, t) {
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
let F = {},
    V = !1,
    H = new Map(),
    W = () => Array.from(H.values()).some((e) => 'READY' === e),
    Y = !1,
    K = !1,
    z = !1,
    q = null,
    Q = new Set(),
    X = '',
    J = new Set();
class $ {
    reset() {
        this.actionsToFlush.clear(), this.waitingActionsToFlush.clear(), (this.isDispatching = !1), (this.timeout = null), null != this.timeout && clearTimeout(this.timeout), (this.requestIdleCallback = null), null != this.requestIdleCallback && cancelIdleCallback(this.requestIdleCallback);
    }
    enqueueWaitingActions() {
        let e = new Set([...this.waitingActionsToFlush]);
        for (let t of (this.waitingActionsToFlush.clear(), e)) this.queueDispatch(t);
    }
    constructor() {
        U(this, 'isDispatching', !1),
            U(this, 'timeout', void 0),
            U(this, 'requestIdleCallback', void 0),
            U(this, 'actionsToFlush', new Set()),
            U(this, 'waitingActionsToFlush', new Set()),
            U(this, 'flush', () => {
                if ((null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)), null != this.requestIdleCallback && (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)), !W())) {
                    this.actionsToFlush.clear();
                    return;
                }
                this.actionsToFlush.size > 0 &&
                    (g.lW({
                        type: k.BmY.DISPATCH,
                        pid: null,
                        token: null,
                        payloads: Array.from(this.actionsToFlush)
                    }),
                    this.actionsToFlush.clear()),
                    this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions();
            }),
            U(this, 'dispatchPayloads', (e) => {
                (this.isDispatching = !0), e.forEach((e) => l.Z.dispatch(e)), (this.isDispatching = !1);
            }),
            U(
                this,
                'queueDispatch',
                (e) =>
                    !(!W() || et.has(e.type)) &&
                    (this.isDispatching
                        ? this.waitingActionsToFlush.add(e)
                        : ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
                              (e = Z(G({}, e), {
                                  settings: {
                                      type: e.settings.type,
                                      proto: (0, N.cv)(e.settings.type, e.settings.proto)
                                  }
                              })),
                          this.actionsToFlush.add(e),
                          null == this.timeout &&
                              null == this.requestIdleCallback &&
                              (this.timeout = setTimeout(() => {
                                  this.requestIdleCallback = requestIdleCallback(this.flush, { timeout: 100 });
                              }, 100))),
                    !1)
            );
    }
}
let ee = new $(),
    et = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
    en = new Set(),
    er = !1,
    ei = new E.Z('OverlayBridgeStore'),
    eo = {};
function ea(e) {
    var t;
    return null !== (t = eo[e]) && void 0 !== t ? t : {};
}
function es(e, t) {
    var n, r;
    let i = null === (n = eo[e]) || void 0 === n ? void 0 : n.error,
        o = null === (r = eo[e]) || void 0 === r ? void 0 : r.error_description;
    (eo[e] = G({}, eo[e], t)), null != i && (eo[e].error = i), null != o && (eo[e].error_description = o);
}
function el(e) {
    var t, n;
    if (null != eo[e]) return;
    let r = b.ZP.getGameForPID(e);
    eo[e] = {
        overlay_method: _.gl[_.gl.Hook],
        success: !1,
        game_name: null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : null,
        game_id: null !== (n = null == r ? void 0 : r.id) && void 0 !== n ? n : null,
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
let ec = 'none',
    eu = (0, o.H)({
        onContention: (e, t) => ei.verbose('overlayLock contention: lastMutexCall '.concat(ec)),
        onContentionResolved: () => ei.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, t) => {
            let n = 'overlayLock: lastMutexCall '.concat(ec, '}');
            ei.error(n);
            let r = ea((0, L.QF)());
            es(
                (0, L.QF)(),
                Z(G({}, r), {
                    error_description: n,
                    success: !1
                })
            ),
                P.default.track(k.rMx.OVERLAY_HOOK_RESULT, ea((0, L.QF)()));
        },
        timeoutMs: 180000
    });
function ed(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        eu(() => t(...r), e);
    };
}
function ef() {
    try {
        var e;
        let t = null === h.Z || void 0 === h.Z ? void 0 : null === (e = h.Z.fileManager) || void 0 === e ? void 0 : e.uploadDiscordHookCrashes;
        if (null == t) return;
        t().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let l of (ei.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                    var t, n, r, i, o, a, s;
                    if (null == l) continue;
                    let e = null != l.processName ? C.Z.getGameByExecutable(l.processName) : null;
                    P.default.track(k.rMx.OVERLAY_HOOK_CRASHED, {
                        process_name: null == l ? void 0 : l.processName,
                        game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                        game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
                        minidump_exception_type: null !== (r = l.exceptionString) && void 0 !== r ? r : null,
                        minidump_exception_module_name: null !== (i = l.exceptionModuleName) && void 0 !== i ? i : null,
                        minidump_relative_crash_address: null !== (o = l.relativeCrashAddress) && void 0 !== o ? o : null,
                        minidump_exception_module_version: null !== (a = l.exceptionModuleVersion) && void 0 !== a ? a : null,
                        minidump_exception_module_code_id: null !== (s = l.exceptionModuleCodeId) && void 0 !== s ? s : null
                    });
                }
        });
    } catch (e) {
        ei.error('tryUploadDiscordHookCrashes', e);
    }
}
function ep(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = H.get(e);
    (null === n || r === n) &&
        r !== t &&
        (null == t ? H.delete(e) : H.set(e, t),
        (null == t || 'CRASHED' === t) && ((q = null), ef()),
        J.delete(e),
        ei.info(
            'pid='
                .concat(e, ' status transition ')
                .concat(null != r ? r : 'DISCONNECTED', ' -> ')
                .concat(null != t ? t : 'DISCONNECTED'),
            H
        ));
}
async function e_(e) {
    try {
        if (x.ZP.supportsFeature(k.eRX.CREATE_HOST_ON_ATTACH)) {
            if (H.size > 0) {
                ec = 'reconcile.getOverlayURL';
                let t = await eb();
                (ec = 'reconcile.createHostProcess'), e.createHostProcess(t, eS, eO);
            } else (ec = 'reconcile.destroyHostProcess'), e.destroyHostProcess(), ev((0, L.QF)());
        } else if (Y) {
            let t = await eb();
            e.createHostProcess(t, eS, eO);
        } else e.destroyHostProcess(), ev((0, L.QF)());
    } catch (t) {
        ei.error('reconcileHostProcess', t), ev((0, L.QF)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            ei.error('reconcileHostProcess: destroyHostProcess', e);
        }
    }
}
async function eh(e) {
    var t;
    eu.isMutexHeld() || ei.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let n = null !== (t = ea(e).mounting_started_at) && void 0 !== t ? t : new Date().getTime();
    es(e, { mounting_started_at: n });
    let r = H.get(e);
    if (null != r) {
        ei.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(r));
        return;
    }
    await f.Z.updateOverlayState(e, _.mM.WAITING_FOR_OVERLAY_OPEN), (ec = 'attach.getOverlayModule');
    let i = await (0, M.K)();
    if (null == i) {
        ei.error('Trying to attach to pid='.concat(e, ', but overlay module failed loaded'));
        return;
    }
    (ec = 'attach.transitionOverlayPIDStatus'), ep(e, 'ATTACHING'), (ec = 'attach.attachToProcess');
    let o = await m.YT(e);
    null == o ? ((ec = 'attach.transitionOverlayPIDStatus (CONNECTING)'), ep(e, 'CONNECTING', 'ATTACHING'), (ec = 'attach.reconcileHostProcess'), await e_(i), i.connectProcess(e)) : ((ec = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), ep(e, 'HOOK_FAILED', 'ATTACHING'), ei.warn('Could not hook to pid='.concat(e, ', error=').concat(o)));
}
async function em(e) {
    if ((eu.isMutexHeld() || ei.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !H.has(e))) {
        ei.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    ep(e, 'DISCONNECTING');
    try {
        ec = 'detach.getOverlayModule';
        let t = await (0, M.K)();
        if (null == t) {
            ei.error('Trying to detach from pid='.concat(e, ', but overlay module failed loaded'));
            return;
        }
        e !== L.Js && ((ec = 'detach.cancelAttachToProcess'), await m.pn(e), await (0, s._v)(16), (ec = 'detach.disconnectProcess'), await t.disconnectProcess(e)), (ec = 'detach.transitionOverlayPIDStatus'), ep(e, null), (ec = 'detach.reconcileHostProcess'), await e_(t);
    } catch (t) {
        ei.error('Error during overlay detachment for pid '.concat(e, ':'), t), ep(e, null);
    }
}
async function eg(e) {
    var t, n;
    if (
        (ei.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: z,
            action: e
        }),
        eu.isMutexHeld() || ei.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !z && null != e)
    ) {
        ei.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
        return;
    }
    async function r(e) {
        if (!(e in F)) return;
        let t = F[e];
        delete F[e];
        try {
            await t.deconstructor(), Q.delete(e);
        } catch (n) {
            ei.error('Failed to deconstruct tracked game '.concat(e), n), (F[e] = t), Q.add(e);
        }
    }
    let i = !1;
    if (null == e || !Y) {
        for (let t of (ei.verbose('updateIntendedOverlayPIDs: Removing all.', F, e), Object.keys(F))) await r(Number(t)), (i = !0);
        return;
    }
    for (let n of Q) {
        if (null === (t = e.added) || void 0 === t ? void 0 : t.includes(n)) {
            ei.warn('updateIntendedOverlayPIDs: Failed PID was re-added?');
            continue;
        }
        ei.verbose('updateIntendedOverlayPIDs: retrying failed overlay pid '.concat(n)), await r(n), (i = !0);
    }
    for (let t of null !== (n = e.added) && void 0 !== n ? n : []) {
        let n = S.default.getTrackedGameByPid(t);
        if (null == n) {
            ei.error('updateIntendedOverlayPIDs: Tracked game not found for pid='.concat(t));
            continue;
        }
        if ((ei.verbose('updateIntendedOverlayPIDs: newGame', n), n.legacyEnabled))
            switch ((n.pid in F ? ei.error('Unexpected. '.concat(n.pid, ' is being added twice?'), F, e) : el(n.pid), n.overlayMethod)) {
                case _.gl.Hook:
                    let r = new Date().getTime();
                    es(n.pid, {
                        mounting_started_at: r,
                        fullscreen_type: await (0, I.hj)(n.pid, 0)
                    }),
                        H.has(n.pid) || (await eh(n.pid)),
                        (F[n.pid] = {
                            method: n.overlayMethod,
                            deconstructor: async () => {
                                await em(n.pid);
                            }
                        }),
                        (i = !0);
                    break;
                case _.gl.OutOfProcess:
                case _.gl.OutOfProcessLimitedInteraction:
                    ei.error('updateIntendedOverlayPIDs: out of process called for hook overlay', n);
                    break;
                case _.gl.Disabled:
                    ei.verbose('updateIntendedOverlayPIDs: disabled', n);
                    break;
                default:
                    ei.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(n.overlayMethod), n);
            }
    }
    for (let t of e.removed) ei.verbose('updateIntendedOverlayPIDs: removedGame', t), await r(t), (i = !0);
    i && eQ.emitChange();
}
let eE = ed('updateIntendedOverlayPIDs', (e) => (ei.info('updateIntendedOverlayPIDs', e), eg(e))),
    ev = ed('clearPID', (e) => {
        if (null == e) return (0, L.tB)(L.R2);
        !T.ZP.isOverlayV3EnabledForPID(e) && (0, L.tB)(L.R2);
    });
function eb() {
    return new Promise((e) => {
        eQ.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let ey = ed('setOverlayEnabled', async (e) => {
    if (!j.iP) return;
    if (Y === e) {
        ei.verbose('setOverlayEnabled: no change', { newOverlayEnabled: e });
        return;
    }
    (Y = e), eQ.emitChange();
    let t = await (0, M.K)();
    if (null == t) {
        ei.error('setOverlayEnabled: overlay module failed loaded');
        return;
    }
    Y || (await eg(void 0)), await e_(t);
});
function eO(e) {
    f.Z.setFocusedPID(0 === e ? null : e);
}
function eS(e, t, n) {
    var r;
    let i = null === (r = b.ZP.getGameForPID(e)) || void 0 === r ? void 0 : r.name,
        o = C.Z.getGameByName(i),
        a = G(
            {
                game_name: i,
                game_id: null == o ? null : o.id,
                success: t,
                overlay_method: _.gl[_.gl.Hook]
            },
            n
        );
    es(e, G({}, a)),
        (0, d.te)(L.qU, R.Z.getDefaultLayout(L.qU), 0, {
            width: n.graphics_width,
            height: n.graphics_height
        }),
        f.Z.updateOverlayState(e, _.mM.OVERLAY_RENDERING);
    let s = ea(e);
    P.default.track(k.rMx.OVERLAY_HOOK_RESULT, s), ei.info('Overlay connection to '.concat(e, ' ').concat(t ? 'succeeded' : 'failed'), s), t ? ep(e, 'CONNECTED', 'CONNECTING') : ep(e, 'CONNECT_FAILED', 'CONNECTING');
}
function eI() {
    let e = A.default.getToken(),
        t = A.default.getId();
    null != e &&
        g.lW({
            type: k.BmY.DISPATCH,
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
function eT(e) {
    return null != e && (0, w.y)(e, X);
}
function eN(e) {
    switch ((er && ei.info('[app data received]', e), e.type)) {
        case k.BmY.CONNECT:
            let t = A.default.getToken();
            if (null == t) break;
            (0, d.te)(L.qU, R.Z.getDefaultLayout(L.qU), 0),
                Promise.all([(0, O.Z)(t, e.pid), a.ZP.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: o } = e;
                    g.lW({
                        type: k.BmY.STORAGE_SYNC,
                        pid: i,
                        token: o,
                        states: r
                    }),
                        g.lW({
                            type: k.BmY.DISPATCH,
                            pid: i,
                            token: o,
                            payloads: [n]
                        }),
                        ep(i, 'READY'),
                        (0, L.tB)(i),
                        f.Z.overlayReady(i);
                    let a = ea(i);
                    es(i, Z(G({}, a), { total_mount_time_ms: null != a.mounting_started_at ? new Date().getTime() - a.mounting_started_at : void 0 }));
                });
            break;
        case k.BmY.DISPATCH:
            null != e.payloads && ee.dispatchPayloads(e.payloads);
            break;
        case k.BmY.LOG_MESSAGES:
            ei.info('[overlay data received]', e.payload);
    }
}
async function eA(e, t) {
    let n = await (0, M.K)();
    if (null == n) {
        ei.error('setInputLocked: overlay module failed loaded');
        return;
    }
    let r = null != t ? t : q;
    if (null != r && 'DISCONNECTING' === H.get(r)) {
        ei.warn('Overlay module is no longer valid during input lock');
        return;
    }
    try {
        null != r &&
            r !== L.Js &&
            n.sendCommand(r, {
                message: 'intercept_input',
                intercept: !e
            });
    } catch (e) {
        ei.error('Error during input lock', e);
    }
}
function eC(e, t) {
    e ? setTimeout(() => eA(e, t), 200) : eA(e, t);
}
let eR = null;
function eP(e) {
    let { locked: t, pid: n } = e,
        r = H.get(n);
    if ((Q.has(n) && eE(void 0), null != r && null != F[n] && (t || 'READY' === r || 'CRASHED' === r)))
        t ? J.delete(n) : J.add(n),
            en.clear(),
            (null == eR || (clearTimeout(eR), (eR = null), !t)) &&
                (t
                    ? eC(t, n)
                    : (eR = setTimeout(() => {
                          eC(t, n), (eR = null);
                      }, 100)));
}
function ew(e) {
    let { region: t } = e;
    en.add(t), eC(!1, q);
}
function eD() {
    en.clear(), eC(!0, q);
}
function ex(e) {
    let { port: t } = e;
    X = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append('build_id', '7a9377ff0d2d5723d1645b57caf0963b0b1a4f0e'), n.append('rpc', String(t)), n.append('rpc_auth_token', X), (r = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(n.toString()));
}
function eL(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        p.default.selectPrivateChannel(t), c.Z.call(t, !1, !!n);
    });
}
function eM(e) {
    let { pid: t } = e;
    q = t;
}
function ek(e) {
    var t;
    let { pid: n, error: r } = e;
    ep(n, 'CRASHED'),
        es(n, {
            renderer_crash_count: (null !== (t = ea(n).renderer_crash_count) && void 0 !== t ? t : 0) + 1,
            error: r instanceof Error ? r.message : r,
            error_description: r instanceof Error ? r.stack : void 0
        }),
        ei.verbose('OverlayBridgeStore: handleOverlayCrashed: '.concat(n));
}
function ej() {
    (z = !0), (V = !1);
}
function eU() {
    (z = !1), (q = null), eE(void 0), ei.verbose('OverlayBridgeStore: handleConnectionClosed');
}
function eG() {
    return !0;
}
function eB(e) {
    let { legacyEnabled: t } = e;
    return ey(t), !1;
}
function eZ(e) {
    let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: o } = e;
    setImmediate(() => {
        u.Z.join({
            userId: t,
            sessionId: n,
            applicationId: r,
            channelId: i,
            messageId: o
        }),
            null != q && f.Z.setInputLocked(!0, q);
    });
}
function eF(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            r = Math.ceil(n * window.innerHeight),
            i = (0, D.B)('click', e, r);
        (0, D.J)(i, e, r);
    }, 50);
}
function eV(e) {
    return (
        eE({
            added: [],
            removed: []
        }),
        !0
    );
}
function eH(e) {
    return (
        eE({
            added: [],
            removed: []
        }),
        !0
    );
}
function eW(e) {
    ei.verbose('Updating OverlayMethod', {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, I.P_)(e.overlayMethod)
    }),
        e.overlayMethod === _.gl.Hook
            ? eE({
                  added: [e.pid],
                  removed: []
              })
            : eE({
                  added: [],
                  removed: [e.pid]
              });
}
function eY() {
    v.Z.hasLoadedExperiments && !V && ((V = !0), ey(y.v.legacyEnabled));
}
function eK() {
    V = !1;
}
function ez() {
    V = !1;
}
class eq extends (i = a.ZP.Store) {
    initialize() {
        !(!j.iP || __OVERLAY__) && (this.waitFor(b.ZP, v.Z, A.default, T.ZP, S.default), this.syncWith([v.Z], eY), g.sr(eN, eT), A.default.addChangeListener(eI), l.Z.addInterceptor(ee.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return S.default.isOverlayOOPEnabledForPid(e) ? T.ZP.isInputLocked(e) : !J.has(e);
    }
    DEV_isInputLockedV3(e) {
        return T.ZP.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !J.has(e);
    }
    isSupported() {
        return j.iP || !1;
    }
    get enabled() {
        return T.ZP.isOverlayV3Enabled() ? T.ZP.enabled : Y;
    }
    get legacyEnabled() {
        return !T.ZP.isOverlayV3Enabled() && K;
    }
    getAnyGlobalEnabledOverlay() {
        return S.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = T.ZP.getFocusedPID();
        return null != e && T.ZP.isOverlayV3EnabledForPID(e) ? e : q;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && S.default.isOverlayOOPEnabledForPid(e);
    }
    isReady(e) {
        return T.ZP.isOverlayV3EnabledForPID(e) ? T.ZP.isReady(e) : 'READY' === H.get(e);
    }
    isCrashed(e) {
        return !T.ZP.isOverlayV3EnabledForPID(e) && 'CRASHED' === H.get(e);
    }
    getOverlayPIDStatuses() {
        return H;
    }
}
U(eq, 'displayName', 'OverlayBridgeStore');
let eQ = new eq(
        l.Z,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eF }
            : {
                  LOGIN: eK,
                  LOGOUT: ez,
                  CONNECTION_OPEN: ej,
                  CONNECTION_CLOSED: eU,
                  EXPERIMENT_OVERRIDE_BUCKET: eG,
                  RUNNING_GAME_TOGGLE_OVERLAY: eH,
                  RUNNING_GAMES_CHANGE: eV,
                  OVERLAY_SET_ENABLED: eB,
                  OVERLAY_FOCUSED: eM,
                  OVERLAY_SET_INPUT_LOCKED: eP,
                  OVERLAY_ACTIVATE_REGION: ew,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eD,
                  RPC_SERVER_READY: ex,
                  OVERLAY_CALL_PRIVATE_CHANNEL: eL,
                  OVERLAY_JOIN_GAME: eZ,
                  OVERLAY_CRASHED: ek,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eW
              }
    ),
    eX = eQ;
