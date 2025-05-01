let r;
n.r(t),
    n.d(t, {
        OverlayPIDStatus: () => Z,
        default: () => e$,
        getOverlayURL: () => ev
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
    o = n(807864),
    a = n(442837),
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
    S = n(829907),
    T = n(610394),
    A = n(48481),
    N = n(314897),
    C = n(77498),
    R = n(355863),
    P = n(158776),
    w = n(626135),
    D = n(866119),
    L = n(671999),
    x = n(998502),
    M = n(145597),
    k = n(372679),
    j = n(981631),
    U = n(987650);
function G(e, t, n) {
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
function B(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var Z = (function (e) {
    return (e.ATTACHING = 'ATTACHING'), (e.CONNECTING = 'CONNECTING'), (e.CONNECTED = 'CONNECTED'), (e.READY = 'READY'), (e.CRASHED = 'CRASHED'), (e.CONNECT_FAILED = 'CONNECT_FAILED'), (e.HOOK_FAILED = 'HOOK_FAILED'), (e.DISCONNECTING = 'DISCONNECTING'), e;
})({});
let H = {},
    Y = !1,
    W = new Map(),
    K = () => Array.from(W.values()).some((e) => 'READY' === e),
    z = !1,
    q = !1,
    Q = !1,
    X = null,
    J = new Set(),
    $ = '',
    ee = new Set();
class et {
    reset() {
        this.actionsToFlush.clear(), this.waitingActionsToFlush.clear(), (this.isDispatching = !1), (this.timeout = null), null != this.timeout && clearTimeout(this.timeout), (this.requestIdleCallback = null), null != this.requestIdleCallback && cancelIdleCallback(this.requestIdleCallback);
    }
    enqueueWaitingActions() {
        let e = new Set([...this.waitingActionsToFlush]);
        for (let t of (this.waitingActionsToFlush.clear(), e)) this.queueDispatch(t);
    }
    constructor() {
        G(this, 'isDispatching', !1),
            G(this, 'timeout', void 0),
            G(this, 'requestIdleCallback', void 0),
            G(this, 'actionsToFlush', new Set()),
            G(this, 'waitingActionsToFlush', new Set()),
            G(this, 'flush', () => {
                if ((null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)), null != this.requestIdleCallback && (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)), !K())) return void this.actionsToFlush.clear();
                this.actionsToFlush.size > 0 &&
                    (g.lW({
                        type: j.BmY.DISPATCH,
                        pid: null,
                        token: null,
                        payloads: Array.from(this.actionsToFlush)
                    }),
                    this.actionsToFlush.clear()),
                    this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions();
            }),
            G(this, 'dispatchPayloads', (e) => {
                (this.isDispatching = !0), e.forEach((e) => l.Z.dispatch(e)), (this.isDispatching = !1);
            }),
            G(
                this,
                'queueDispatch',
                (e) =>
                    !(!K() || er.has(e.type)) &&
                    (this.isDispatching
                        ? this.waitingActionsToFlush.add(e)
                        : ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
                              (e = F(B({}, e), {
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
            );
    }
}
let en = new et(),
    er = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED', 'MEDIA_ENGINE_CONNECTION_STATS', 'RTC_CONNECTION_UPDATE_ID', 'ACTIVE_AV_ERRORS_CHANGED', 'BURST_REACTION_ANIMATION_ADD', 'ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS']),
    ei = new Set(),
    eo = !1,
    ea = new E.Z('OverlayBridgeStore'),
    es = {};
function el(e) {
    var t;
    return null != (t = es[e]) ? t : {};
}
function ec(e, t) {
    var n, r;
    let i = null == (n = es[e]) ? void 0 : n.error,
        o = null == (r = es[e]) ? void 0 : r.error_description;
    (es[e] = B({}, es[e], t)), null != i && (es[e].error = i), null != o && (es[e].error_description = o);
}
function eu(e) {
    var t, n;
    if (null != es[e]) return;
    let r = y.ZP.getGameForPID(e);
    es[e] = {
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
let ed = 'none',
    ef = (0, o.H)({
        onContention: (e, t) => ea.verbose('overlayLock contention: lastMutexCall '.concat(ed)),
        onContentionResolved: () => ea.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, t) => {
            let n = 'overlayLock: lastMutexCall '.concat(ed, '}');
            ea.error(n);
            let r = el((0, M.getPID)());
            ec(
                (0, M.getPID)(),
                F(B({}, r), {
                    error_description: n,
                    success: !1
                })
            ),
                w.default.track(j.rMx.OVERLAY_HOOK_RESULT, el((0, M.getPID)()));
        },
        timeoutMs: 180000
    });
function e_(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        ef(() => t(...r), e);
    };
}
function ep() {
    try {
        var e;
        let t = null === h.Z || void 0 === h.Z || null == (e = h.Z.fileManager) ? void 0 : e.uploadDiscordHookCrashes;
        if (null == t) return;
        t().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let l of (ea.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                    var t, n, r, i, o, a, s;
                    if (null == l) continue;
                    let e = null != l.processName ? C.Z.getGameByExecutable(l.processName) : null;
                    w.default.track(j.rMx.OVERLAY_HOOK_CRASHED, {
                        process_name: null == l ? void 0 : l.processName,
                        game_name: null != (t = null == e ? void 0 : e.name) ? t : null,
                        game_id: null != (n = null == e ? void 0 : e.id) ? n : null,
                        minidump_exception_type: null != (r = l.exceptionString) ? r : null,
                        minidump_exception_module_name: null != (i = l.exceptionModuleName) ? i : null,
                        minidump_relative_crash_address: null != (o = l.relativeCrashAddress) ? o : null,
                        minidump_exception_module_version: null != (a = l.exceptionModuleVersion) ? a : null,
                        minidump_exception_module_code_id: null != (s = l.exceptionModuleCodeId) ? s : null
                    });
                }
        });
    } catch (e) {
        ea.error('tryUploadDiscordHookCrashes', e);
    }
}
function eh(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = W.get(e);
    (null === n || r === n) &&
        r !== t &&
        (null == t ? W.delete(e) : W.set(e, t),
        (null == t || 'CRASHED' === t) && (f.Z.setFocusedPID(null), ep()),
        ee.delete(e),
        ea.info(
            'pid='
                .concat(e, ' status transition ')
                .concat(null != r ? r : 'DISCONNECTED', ' -> ')
                .concat(null != t ? t : 'DISCONNECTED'),
            W
        ));
}
async function em(e) {
    try {
        if (x.ZP.supportsFeature(j.eRX.CREATE_HOST_ON_ATTACH))
            if (W.size > 0) {
                ed = 'reconcile.getOverlayURL';
                let t = await ev();
                (ed = 'reconcile.createHostProcess'), e.createHostProcess(t, eT, eS);
            } else (ed = 'reconcile.destroyHostProcess'), e.destroyHostProcess(), eO((0, M.getPID)());
        else if (z) {
            let t = await ev();
            e.createHostProcess(t, eT, eS);
        } else e.destroyHostProcess(), eO((0, M.getPID)());
    } catch (t) {
        ea.error('reconcileHostProcess', t), eO((0, M.getPID)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            ea.error('reconcileHostProcess: destroyHostProcess', e);
        }
    }
}
async function eg(e) {
    var t;
    ef.isMutexHeld() || ea.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let n = null != (t = el(e).mounting_started_at) ? t : new Date().getTime();
    ec(e, { mounting_started_at: n });
    let r = W.get(e);
    if (null != r) return void ea.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(r));
    await f.Z.updateOverlayState(e, p.mM.WAITING_FOR_OVERLAY_OPEN), (ed = 'attach.getOverlayModule');
    let i = await (0, k.K)();
    if (null == i) return void ea.error('Trying to attach to pid='.concat(e, ', but overlay module failed loaded'));
    (ed = 'attach.transitionOverlayPIDStatus'), eh(e, 'ATTACHING'), (ed = 'attach.attachToProcess');
    let o = await m.YT(e);
    null == o ? ((ed = 'attach.transitionOverlayPIDStatus (CONNECTING)'), eh(e, 'CONNECTING', 'ATTACHING'), (ed = 'attach.reconcileHostProcess'), await em(i), i.connectProcess(e)) : ((ed = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), eh(e, 'HOOK_FAILED', 'ATTACHING'), ea.warn('Could not hook to pid='.concat(e, ', error=').concat(o)));
}
async function eE(e) {
    if ((ef.isMutexHeld() || ea.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !W.has(e))) return void ea.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
    eh(e, 'DISCONNECTING');
    try {
        ed = 'detach.getOverlayModule';
        let t = await (0, k.K)();
        if (null == t) return void ea.error('Trying to detach from pid='.concat(e, ', but overlay module failed loaded'));
        e !== M.DEV_PID && ((ed = 'detach.cancelAttachToProcess'), await m.pn(e), await (0, s._v)(16), (ed = 'detach.disconnectProcess'), await t.disconnectProcess(e)), (ed = 'detach.transitionOverlayPIDStatus'), eh(e, null), (ed = 'detach.reconcileHostProcess'), await em(t);
    } catch (t) {
        ea.error('Error during overlay detachment for pid '.concat(e, ':'), t), eh(e, null);
    }
}
async function eb(e) {
    var t, n;
    if (
        (ea.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: Q,
            action: e
        }),
        ef.isMutexHeld() || ea.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !Q && null != e)
    )
        return void ea.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
    async function r(e) {
        if (!(e in H)) return;
        let t = H[e];
        delete H[e];
        try {
            await t.deconstructor(), J.delete(e);
        } catch (n) {
            ea.error('Failed to deconstruct tracked game '.concat(e), n), (H[e] = t), J.add(e);
        }
    }
    let i = !1;
    if (null == e || !z) {
        for (let t of (ea.verbose('updateIntendedOverlayPIDs: Removing all.', H, e), Object.keys(H))) await r(Number(t)), (i = !0);
        return;
    }
    for (let n of J) {
        if (null == (t = e.added) ? void 0 : t.includes(n)) {
            ea.warn('updateIntendedOverlayPIDs: Failed PID was re-added?');
            continue;
        }
        ea.verbose('updateIntendedOverlayPIDs: retrying failed overlay pid '.concat(n)), await r(n), (i = !0);
    }
    for (let t of null != (n = e.added) ? n : []) {
        let n = I.default.getTrackedGameByPid(t);
        if (null == n) {
            ea.error('updateIntendedOverlayPIDs: Tracked game not found for pid='.concat(t));
            continue;
        }
        if ((ea.verbose('updateIntendedOverlayPIDs: newGame', n), n.legacyEnabled))
            switch ((n.pid in H ? ea.error('Unexpected. '.concat(n.pid, ' is being added twice?'), H, e) : eu(n.pid), n.overlayMethod)) {
                case p.gl.Hook:
                    let r = new Date().getTime();
                    ec(n.pid, {
                        mounting_started_at: r,
                        fullscreen_type: await (0, S.hj)(n.pid, 0)
                    }),
                        W.has(n.pid) || (await eg(n.pid)),
                        (H[n.pid] = {
                            method: n.overlayMethod,
                            deconstructor: async () => {
                                await eE(n.pid);
                            }
                        }),
                        (i = !0);
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
    for (let t of e.removed) ea.verbose('updateIntendedOverlayPIDs: removedGame', t), await r(t), (i = !0);
    i && eJ.emitChange();
}
let ey = e_('updateIntendedOverlayPIDs', (e) => (ea.info('updateIntendedOverlayPIDs', e), eb(e))),
    eO = e_('clearPID', (e) => {
        if (null == e) return (0, M.setPID)(M.UNSET_PID);
        T.ZP.isOverlayV3EnabledForPID(e) || (0, M.setPID)(M.UNSET_PID);
    });
function ev() {
    return new Promise((e) => {
        eJ.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let eI = e_('setOverlayEnabled', async (e) => {
    if (!U.iP) return;
    if (z === e) return void ea.verbose('setOverlayEnabled: no change', { newOverlayEnabled: e });
    (z = e), eJ.emitChange();
    let t = await (0, k.K)();
    if (null == t) return void ea.error('setOverlayEnabled: overlay module failed loaded');
    z || (await eb(void 0)), W.size > 0 && (await em(t));
});
function eS(e) {
    f.Z.setFocusedPID(0 === e ? null : e);
}
function eT(e, t, n) {
    var r;
    let i = null == (r = y.ZP.getGameForPID(e)) ? void 0 : r.name,
        o = C.Z.getGameByName(i),
        a = B(
            {
                game_name: i,
                game_id: null == o ? null : o.id,
                success: t,
                overlay_method: p.gl[p.gl.Hook]
            },
            n
        );
    ec(e, B({}, a)),
        (0, d.te)(M.OVERLAY_LAYOUT_ID, R.Z.getDefaultLayout(M.OVERLAY_LAYOUT_ID), 0, {
            width: n.graphics_width,
            height: n.graphics_height
        }),
        f.Z.updateOverlayState(e, p.mM.OVERLAY_RENDERING);
    let s = el(e);
    w.default.track(j.rMx.OVERLAY_HOOK_RESULT, s), ea.info('Overlay connection to '.concat(e, ' ').concat(t ? 'succeeded' : 'failed'), s), t ? eh(e, 'CONNECTED', 'CONNECTING') : eh(e, 'CONNECT_FAILED', 'CONNECTING');
}
function eA() {
    let e = N.default.getToken(),
        t = N.default.getId();
    null != e &&
        g.lW({
            type: j.BmY.DISPATCH,
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
function eN(e) {
    return null != e && (0, D.y)(e, $);
}
function eC(e) {
    switch ((eo && ea.info('[app data received]', e), e.type)) {
        case j.BmY.CONNECT:
            let t = N.default.getToken();
            if (null == t) break;
            (0, d.te)(M.OVERLAY_LAYOUT_ID, R.Z.getDefaultLayout(M.OVERLAY_LAYOUT_ID), 0),
                Promise.all([(0, v.Z)(t, e.pid), a.ZP.PersistedStore.getAllStates()]).then((t) => {
                    let [n, r] = t,
                        { pid: i, token: o } = e;
                    g.lW({
                        type: j.BmY.STORAGE_SYNC,
                        pid: i,
                        token: o,
                        states: r
                    }),
                        g.lW({
                            type: j.BmY.DISPATCH,
                            pid: i,
                            token: o,
                            payloads: [n]
                        }),
                        eh(i, 'READY'),
                        (0, M.setPID)(i),
                        f.Z.overlayReady(i);
                    let a = el(i);
                    ec(i, F(B({}, a), { total_mount_time_ms: null != a.mounting_started_at ? new Date().getTime() - a.mounting_started_at : void 0 }));
                });
            break;
        case j.BmY.DISPATCH:
            null != e.payloads && en.dispatchPayloads(e.payloads);
            break;
        case j.BmY.LOG_MESSAGES:
            ea.info('[overlay data received]', e.payload);
    }
}
async function eR(e, t) {
    let n = await (0, k.K)();
    if (null == n) return void ea.error('setInputLocked: overlay module failed loaded');
    let r = null != t ? t : X;
    if (null != r && 'DISCONNECTING' === W.get(r)) return void ea.warn('Overlay module is no longer valid during input lock');
    try {
        null != r &&
            r !== M.DEV_PID &&
            n.sendCommand(r, {
                message: 'intercept_input',
                intercept: !e
            });
    } catch (e) {
        ea.error('Error during input lock', e);
    }
}
function eP(e, t) {
    e ? setTimeout(() => eR(e, t), 200) : eR(e, t);
}
let ew = null;
function eD(e) {
    let { locked: t, pid: n } = e,
        r = W.get(n);
    if ((J.has(n) && ey(void 0), null != r && null != H[n]) && (t || 'READY' === r || 'CRASHED' === r)) {
        if ((t ? ee.delete(n) : ee.add(n), ei.clear(), null != ew && (clearTimeout(ew), (ew = null), t))) return;
        t
            ? eP(t, n)
            : (ew = setTimeout(() => {
                  eP(t, n), (ew = null);
              }, 100));
    }
}
function eL(e) {
    let { region: t } = e;
    ei.add(t), eP(!1, X);
}
function ex() {
    ei.clear(), eP(!0, X);
}
function eM(e) {
    let { port: t } = e;
    $ = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append('build_id', '61d9cd00ceb4e15bcd0d9ee1682fefdbcfbd5391'), n.append('rpc', String(t)), n.append('rpc_auth_token', $), (r = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(n.toString()));
}
function ek(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        _.default.selectPrivateChannel(t), c.Z.call(t, !1, !!n);
    });
}
function ej(e) {
    let { pid: t } = e;
    X = t;
}
function eU(e) {
    var t;
    let { pid: n, error: r } = e;
    eh(n, 'CRASHED'),
        ec(n, {
            renderer_crash_count: (null != (t = el(n).renderer_crash_count) ? t : 0) + 1,
            error: r instanceof Error ? r.message : r,
            error_description: r instanceof Error ? r.stack : void 0
        }),
        ea.verbose('OverlayBridgeStore: handleOverlayCrashed: '.concat(n));
}
function eG() {
    (Q = !0), (Y = !1), ez();
}
function eB() {
    (Q = !1), f.Z.setFocusedPID(null), ey(void 0), ea.verbose('OverlayBridgeStore: handleConnectionClosed');
}
function eV() {
    return !0;
}
function eF(e) {
    let { legacyEnabled: t } = e;
    return eI(t), !1;
}
function eZ(e) {
    let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: o } = e;
    setImmediate(() => {
        let e = P.Z.findActivity(t, (e) => e.application_id === r && e.session_id === n, null, !0);
        u.Z.join({
            userId: t,
            sessionId: n,
            applicationId: r,
            channelId: i,
            messageId: o,
            activity: null != e ? e : void 0
        }),
            null != X && f.Z.setInputLocked(!0, X);
    });
}
function eH(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            r = Math.ceil(n * window.innerHeight),
            i = (0, L.B)('click', e, r);
        (0, L.J)(i, e, r);
    }, 50);
}
function eY(e) {
    return (
        ey({
            added: [],
            removed: []
        }),
        !0
    );
}
function eW(e) {
    return (
        ey({
            added: [],
            removed: []
        }),
        !0
    );
}
function eK(e) {
    ea.verbose('Updating OverlayMethod', {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, S.P_)(e.overlayMethod)
    }),
        e.overlayMethod === p.gl.Hook
            ? ey({
                  added: [e.pid],
                  removed: []
              })
            : ey({
                  added: [],
                  removed: [e.pid]
              });
}
function ez() {
    b.Z.hasLoadedExperiments && !Y && ((Y = !0), eI(O.v.legacyEnabled));
}
function eq() {
    Y = !1;
}
function eQ() {
    Y = !1;
}
class eX extends (i = a.ZP.Store) {
    initialize() {
        !U.iP || __OVERLAY__ || (this.waitFor(y.ZP, b.Z, N.default, T.ZP, I.default), this.syncWith([b.Z], ez), g.sr(eC, eN), N.default.addChangeListener(eA), l.Z.addInterceptor(en.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return I.default.isOverlayOOPEnabledForPid(e) ? T.ZP.isInputLocked(e) : !ee.has(e);
    }
    DEV_isInputLockedV3(e) {
        return T.ZP.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !ee.has(e);
    }
    isSupported() {
        return U.iP || !1;
    }
    get enabled() {
        return T.ZP.isOverlayV3Enabled() ? T.ZP.enabled : z;
    }
    get legacyEnabled() {
        return !T.ZP.isOverlayV3Enabled() && q;
    }
    getAnyGlobalEnabledOverlay() {
        return I.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = T.ZP.getFocusedPID();
        return null != e && T.ZP.isOverlayV3EnabledForPID(e) ? e : X;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && I.default.isOverlayOOPEnabledForPid(e);
    }
    isCurrentPidOutOfProcess() {
        return I.default.isOverlayOOPEnabledForPid((0, M.getPID)());
    }
    isReady(e) {
        return T.ZP.isOverlayV3EnabledForPID(e) ? T.ZP.isReady(e) : 'READY' === W.get(e);
    }
    isCrashed(e) {
        return !T.ZP.isOverlayV3EnabledForPID(e) && 'CRASHED' === W.get(e);
    }
    getOverlayPIDStatuses() {
        return W;
    }
}
G(eX, 'displayName', 'OverlayBridgeStore');
let eJ = new eX(
        l.Z,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eH }
            : {
                  LOGIN: eq,
                  LOGOUT: eQ,
                  CONNECTION_OPEN: eG,
                  CONNECTION_CLOSED: eB,
                  EXPERIMENT_OVERRIDE_BUCKET: eV,
                  RUNNING_GAME_TOGGLE_OVERLAY: eW,
                  RUNNING_GAMES_CHANGE: eY,
                  OVERLAY_SET_ENABLED: eF,
                  OVERLAY_FOCUSED: ej,
                  OVERLAY_SET_INPUT_LOCKED: eD,
                  OVERLAY_ACTIVATE_REGION: eL,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: ex,
                  RPC_SERVER_READY: eM,
                  OVERLAY_CALL_PRIVATE_CHANNEL: ek,
                  OVERLAY_JOIN_GAME: eZ,
                  OVERLAY_CRASHED: eU,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eK
              }
    ),
    e$ = eJ;
