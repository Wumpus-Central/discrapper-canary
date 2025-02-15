let i;
n.d(t, {
    Y: () => eg,
    Z: () => ez
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
    n(642549),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(177593),
    n(411104);
var r,
    a = n(807864),
    s = n(442837),
    o = n(379649),
    l = n(570140),
    u = n(26151),
    c = n(224706),
    d = n(765250),
    f = n(13245),
    _ = n(287734),
    p = n(615287),
    h = n(579806),
    m = n(887278),
    g = n(490029),
    E = n(710845),
    v = n(353926),
    y = n(594190),
    I = n(454991),
    T = n(633565),
    b = n(371651),
    S = n(829907),
    A = n(610394),
    N = n(48481),
    C = n(314897),
    R = n(77498),
    O = n(355863),
    D = n(626135),
    L = n(866119),
    x = n(671999),
    P = n(998502),
    w = n(145597),
    M = n(372679),
    k = n(981631),
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
let B = {},
    Z = !1,
    F = new Map(),
    V = () => Array.from(F.values()).some((e) => 'READY' === e),
    j = !1,
    H = !1,
    Y = !1,
    W = null,
    K = new Set(),
    z = '',
    q = new Set();
class Q {
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
                if ((null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)), null != this.requestIdleCallback && (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)), !V())) {
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
            G(this, 'dispatchPayloads', (e) => {
                (this.isDispatching = !0), e.forEach((e) => l.Z.dispatch(e)), (this.isDispatching = !1);
            }),
            G(
                this,
                'queueDispatch',
                (e) =>
                    !(!V() || J.has(e.type)) &&
                    (this.isDispatching
                        ? this.waitingActionsToFlush.add(e)
                        : ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
                              (e = {
                                  ...e,
                                  settings: {
                                      type: e.settings.type,
                                      proto: (0, N.cv)(e.settings.type, e.settings.proto)
                                  }
                              }),
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
let X = new Q(),
    J = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
    $ = new Set(),
    ee = !1,
    et = new E.Z('OverlayBridgeStore'),
    en = {};
function ei(e) {
    var t;
    return null !== (t = en[e]) && void 0 !== t ? t : {};
}
function er(e, t) {
    var n, i;
    let r = null === (n = en[e]) || void 0 === n ? void 0 : n.error,
        a = null === (i = en[e]) || void 0 === i ? void 0 : i.error_description;
    (en[e] = {
        ...en[e],
        ...t
    }),
        null != r && (en[e].error = r),
        null != a && (en[e].error_description = a);
}
function ea(e) {
    var t, n;
    if (null != en[e]) return;
    let i = y.ZP.getGameForPID(e);
    en[e] = {
        overlay_method: p.gl[p.gl.Hook],
        success: !1,
        game_name: null !== (t = null == i ? void 0 : i.name) && void 0 !== t ? t : null,
        game_id: null !== (n = null == i ? void 0 : i.id) && void 0 !== n ? n : null,
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
let es = 'none',
    eo = (0, a.H)({
        onContention: (e, t) => et.verbose('overlayLock contention: lastMutexCall '.concat(es)),
        onContentionResolved: () => et.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, t) => {
            let n = 'overlayLock: lastMutexCall '.concat(es, '}');
            et.error(n);
            let i = ei((0, w.QF)());
            er((0, w.QF)(), {
                ...i,
                error_description: n,
                success: !1
            }),
                D.default.track(k.rMx.OVERLAY_HOOK_RESULT, ei((0, w.QF)()));
        },
        timeoutMs: 180000
    });
function el(e, t) {
    return function () {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        eo(() => t(...i), e);
    };
}
function eu() {
    try {
        var e;
        let t = null === h.Z || void 0 === h.Z ? void 0 : null === (e = h.Z.fileManager) || void 0 === e ? void 0 : e.uploadDiscordHookCrashes;
        if (null == t) return;
        t().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let l of (et.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                    var t, n, i, r, a, s, o;
                    if (null == l) continue;
                    let e = null != l.processName ? R.Z.getGameByExecutable(l.processName) : null;
                    D.default.track(k.rMx.OVERLAY_HOOK_CRASHED, {
                        process_name: null == l ? void 0 : l.processName,
                        game_name: null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : null,
                        game_id: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : null,
                        minidump_exception_type: null !== (i = l.exceptionString) && void 0 !== i ? i : null,
                        minidump_exception_module_name: null !== (r = l.exceptionModuleName) && void 0 !== r ? r : null,
                        minidump_relative_crash_address: null !== (a = l.relativeCrashAddress) && void 0 !== a ? a : null,
                        minidump_exception_module_version: null !== (s = l.exceptionModuleVersion) && void 0 !== s ? s : null,
                        minidump_exception_module_code_id: null !== (o = l.exceptionModuleCodeId) && void 0 !== o ? o : null
                    });
                }
        });
    } catch (e) {
        et.error('tryUploadDiscordHookCrashes', e);
    }
}
function ec(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = F.get(e);
    (null === n || i === n) &&
        i !== t &&
        (null == t ? F.delete(e) : F.set(e, t),
        (null == t || 'CRASHED' === t) && ((W = null), eu()),
        q.delete(e),
        et.info(
            'pid='
                .concat(e, ' status transition ')
                .concat(null != i ? i : 'DISCONNECTED', ' -> ')
                .concat(null != t ? t : 'DISCONNECTED'),
            F
        ));
}
async function ed(e) {
    try {
        if (P.ZP.supportsFeature(k.eRX.CREATE_HOST_ON_ATTACH)) {
            if (F.size > 0) {
                es = 'reconcile.getOverlayURL';
                let t = await eg();
                (es = 'reconcile.createHostProcess'), e.createHostProcess(t, ey, ev);
            } else (es = 'reconcile.destroyHostProcess'), e.destroyHostProcess(), em((0, w.QF)());
        } else if (j) {
            let t = await eg();
            e.createHostProcess(t, ey, ev);
        } else e.destroyHostProcess(), em((0, w.QF)());
    } catch (t) {
        et.error('reconcileHostProcess', t), em((0, w.QF)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            et.error('reconcileHostProcess: destroyHostProcess', e);
        }
    }
}
async function ef(e) {
    var t;
    eo.isMutexHeld() || et.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let n = null !== (t = ei(e).mounting_started_at) && void 0 !== t ? t : new Date().getTime();
    er(e, { mounting_started_at: n });
    let i = F.get(e);
    if (null != i) {
        et.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(i));
        return;
    }
    await f.Z.updateOverlayState(e, p.mM.WAITING_FOR_OVERLAY_OPEN), (es = 'attach.getOverlayModule');
    let r = await (0, M.K)();
    if (null == r) {
        et.error('Trying to attach to pid='.concat(e, ', but overlay module failed loaded'));
        return;
    }
    (es = 'attach.transitionOverlayPIDStatus'), ec(e, 'ATTACHING'), (es = 'attach.attachToProcess');
    let a = await m.YT(e);
    null == a ? ((es = 'attach.transitionOverlayPIDStatus (CONNECTING)'), ec(e, 'CONNECTING', 'ATTACHING'), (es = 'attach.reconcileHostProcess'), await ed(r), r.connectProcess(e)) : ((es = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), ec(e, 'HOOK_FAILED', 'ATTACHING'), et.warn('Could not hook to pid='.concat(e, ', error=').concat(a)));
}
async function e_(e) {
    if ((eo.isMutexHeld() || et.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !F.has(e))) {
        et.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    ec(e, 'DISCONNECTING');
    try {
        es = 'detach.getOverlayModule';
        let t = await (0, M.K)();
        if (null == t) {
            et.error('Trying to detach from pid='.concat(e, ', but overlay module failed loaded'));
            return;
        }
        e !== w.Js && ((es = 'detach.cancelAttachToProcess'), await m.pn(e), await (0, o._v)(16), (es = 'detach.disconnectProcess'), await t.disconnectProcess(e)), (es = 'detach.transitionOverlayPIDStatus'), ec(e, null), (es = 'detach.reconcileHostProcess'), await ed(t);
    } catch (t) {
        et.error('Error during overlay detachment for pid '.concat(e, ':'), t), ec(e, null);
    }
}
async function ep(e) {
    var t, n;
    if (
        (et.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: Y,
            action: e
        }),
        eo.isMutexHeld() || et.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !Y && null != e)
    ) {
        et.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
        return;
    }
    async function i(e) {
        if (!(e in B)) return;
        let t = B[e];
        delete B[e];
        try {
            await t.deconstructor(), K.delete(e);
        } catch (n) {
            et.error('Failed to deconstruct tracked game '.concat(e), n), (B[e] = t), K.add(e);
        }
    }
    let r = !1;
    if (null == e || !j) {
        for (let t of (et.verbose('updateIntendedOverlayPIDs: Removing all.', B, e), Object.keys(B))) await i(Number(t)), (r = !0);
        return;
    }
    for (let n of K) {
        if (null === (t = e.added) || void 0 === t ? void 0 : t.includes(n)) {
            et.warn('updateIntendedOverlayPIDs: Failed PID was re-added?');
            continue;
        }
        et.verbose('updateIntendedOverlayPIDs: retrying failed overlay pid '.concat(n)), await i(n), (r = !0);
    }
    for (let t of null !== (n = e.added) && void 0 !== n ? n : []) {
        let n = b.default.getTrackedGameByPid(t);
        if (null == n) {
            et.error('updateIntendedOverlayPIDs: Tracked game not found for pid='.concat(t));
            continue;
        }
        if ((et.verbose('updateIntendedOverlayPIDs: newGame', n), n.legacyEnabled))
            switch ((n.pid in B ? et.error('Unexpected. '.concat(n.pid, ' is being added twice?'), B, e) : ea(n.pid), n.overlayMethod)) {
                case p.gl.Hook:
                    let i = new Date().getTime();
                    er(n.pid, {
                        mounting_started_at: i,
                        fullscreen_type: await (0, S.hj)(n.pid, 0)
                    }),
                        F.has(n.pid) || (await ef(n.pid)),
                        (B[n.pid] = {
                            method: n.overlayMethod,
                            deconstructor: async () => {
                                await e_(n.pid);
                            }
                        }),
                        (r = !0);
                    break;
                case p.gl.OutOfProcess:
                case p.gl.OutOfProcessLimitedInteraction:
                    et.error('updateIntendedOverlayPIDs: out of process called for hook overlay', n);
                    break;
                case p.gl.Disabled:
                    et.verbose('updateIntendedOverlayPIDs: disabled', n);
                    break;
                default:
                    et.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(n.overlayMethod), n);
            }
    }
    for (let t of e.removed) et.verbose('updateIntendedOverlayPIDs: removedGame', t), await i(t), (r = !0);
    r && eK.emitChange();
}
let eh = el('updateIntendedOverlayPIDs', (e) => (et.info('updateIntendedOverlayPIDs', e), ep(e))),
    em = el('clearPID', (e) => {
        if (null == e) return (0, w.tB)(w.R2);
        !A.ZP.isOverlayV3EnabledForPID(e) && (0, w.tB)(w.R2);
    });
function eg() {
    return new Promise((e) => {
        eK.addConditionalChangeListener(() => {
            if (null != i) return e(i), !1;
        });
    });
}
let eE = el('setOverlayEnabled', async (e) => {
    if (!U.iP) return;
    if (j === e) {
        et.verbose('setOverlayEnabled: no change', { newOverlayEnabled: e });
        return;
    }
    (j = e), eK.emitChange();
    let t = await (0, M.K)();
    if (null == t) {
        et.error('setOverlayEnabled: overlay module failed loaded');
        return;
    }
    j || (await ep(void 0)), await ed(t);
});
function ev(e) {
    f.Z.setFocusedPID(0 === e ? null : e);
}
function ey(e, t, n) {
    var i;
    let r = null === (i = y.ZP.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
        a = R.Z.getGameByName(r);
    er(e, {
        ...{
            game_name: r,
            game_id: null == a ? null : a.id,
            success: t,
            overlay_method: p.gl[p.gl.Hook],
            ...n
        }
    }),
        (0, d.te)(w.qU, O.Z.getDefaultLayout(w.qU), 0, {
            width: n.graphics_width,
            height: n.graphics_height
        }),
        f.Z.updateOverlayState(e, p.mM.OVERLAY_RENDERING);
    let s = ei(e);
    D.default.track(k.rMx.OVERLAY_HOOK_RESULT, s), et.info('Overlay connection to '.concat(e, ' ').concat(t ? 'succeeded' : 'failed'), s), t ? ec(e, 'CONNECTED', 'CONNECTING') : ec(e, 'CONNECT_FAILED', 'CONNECTING');
}
function eI() {
    let e = C.default.getToken(),
        t = C.default.getId();
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
    return null != e && (0, L.y)(e, z);
}
function eb(e) {
    switch ((ee && et.info('[app data received]', e), e.type)) {
        case k.BmY.CONNECT:
            let t = C.default.getToken();
            if (null == t) break;
            (0, d.te)(w.qU, O.Z.getDefaultLayout(w.qU), 0),
                Promise.all([(0, T.Z)(t, e.pid), s.ZP.PersistedStore.getAllStates()]).then((t) => {
                    let [n, i] = t,
                        { pid: r, token: a } = e;
                    g.lW({
                        type: k.BmY.STORAGE_SYNC,
                        pid: r,
                        token: a,
                        states: i
                    }),
                        g.lW({
                            type: k.BmY.DISPATCH,
                            pid: r,
                            token: a,
                            payloads: [n]
                        }),
                        ec(r, 'READY'),
                        (0, w.tB)(r),
                        f.Z.overlayReady(r);
                    let s = ei(r);
                    er(r, {
                        ...s,
                        total_mount_time_ms: null != s.mounting_started_at ? new Date().getTime() - s.mounting_started_at : void 0
                    });
                });
            break;
        case k.BmY.DISPATCH:
            null != e.payloads && X.dispatchPayloads(e.payloads);
            break;
        case k.BmY.LOG_MESSAGES:
            et.info('[overlay data received]', e.payload);
    }
}
async function eS(e, t) {
    let n = await (0, M.K)();
    if (null == n) {
        et.error('setInputLocked: overlay module failed loaded');
        return;
    }
    let i = null != t ? t : W;
    if (null != i && 'DISCONNECTING' === F.get(i)) {
        et.warn('Overlay module is no longer valid during input lock');
        return;
    }
    try {
        null != i &&
            i !== w.Js &&
            n.sendCommand(i, {
                message: 'intercept_input',
                intercept: !e
            });
    } catch (e) {
        et.error('Error during input lock', e);
    }
}
function eA(e, t) {
    e ? setTimeout(() => eS(e, t), 200) : eS(e, t);
}
let eN = null;
function eC(e) {
    let { locked: t, pid: n } = e,
        i = F.get(n);
    if ((K.has(n) && eh(void 0), null != i && null != B[n] && (t || 'READY' === i || 'CRASHED' === i)))
        t ? q.delete(n) : q.add(n),
            $.clear(),
            (null == eN || (clearTimeout(eN), (eN = null), !t)) &&
                (t
                    ? eA(t, n)
                    : (eN = setTimeout(() => {
                          eA(t, n), (eN = null);
                      }, 100)));
}
function eR(e) {
    let { region: t } = e;
    $.add(t), eA(!1, W);
}
function eO() {
    $.clear(), eA(!0, W);
}
function eD(e) {
    let { port: t } = e;
    z = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append('build_id', '93e7acefc712d9b53651dd2783ce5095d75a2fc1'), n.append('rpc', String(t)), n.append('rpc_auth_token', z), (i = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(n.toString()));
}
function eL(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        _.default.selectPrivateChannel(t), u.Z.call(t, !1, !!n);
    });
}
function ex(e) {
    let { pid: t } = e;
    W = t;
}
function eP(e) {
    var t;
    let { pid: n, error: i } = e;
    ec(n, 'CRASHED'),
        er(n, {
            renderer_crash_count: (null !== (t = ei(n).renderer_crash_count) && void 0 !== t ? t : 0) + 1,
            error: i instanceof Error ? i.message : i,
            error_description: i instanceof Error ? i.stack : void 0
        }),
        et.verbose('OverlayBridgeStore: handleOverlayCrashed: '.concat(n));
}
function ew() {
    (Y = !0), (Z = !1);
}
function eM() {
    (Y = !1), (W = null), eh(void 0), et.verbose('OverlayBridgeStore: handleConnectionClosed');
}
function ek() {
    return !0;
}
function eU(e) {
    let { legacyEnabled: t } = e;
    return eE(t), !1;
}
function eG(e) {
    let { userId: t, sessionId: n, applicationId: i, channelId: r, messageId: a } = e;
    setImmediate(() => {
        c.Z.join({
            userId: t,
            sessionId: n,
            applicationId: i,
            channelId: r,
            messageId: a
        }),
            null != W && f.Z.setInputLocked(!0, W);
    });
}
function eB(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            i = Math.ceil(n * window.innerHeight),
            r = (0, x.B)('click', e, i);
        (0, x.J)(r, e, i);
    }, 50);
}
function eZ(e) {
    return (
        eh({
            added: [],
            removed: []
        }),
        !0
    );
}
function eF(e) {
    return (
        eh({
            added: [],
            removed: []
        }),
        !0
    );
}
function eV(e) {
    et.verbose('Updating OverlayMethod', {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, S.P_)(e.overlayMethod)
    }),
        e.overlayMethod === p.gl.Hook
            ? eh({
                  added: [e.pid],
                  removed: []
              })
            : eh({
                  added: [],
                  removed: [e.pid]
              });
}
function ej() {
    v.Z.hasLoadedExperiments && !Z && ((Z = !0), eE(I.v.legacyEnabled));
}
function eH() {
    Z = !1;
}
function eY() {
    Z = !1;
}
class eW extends (r = s.ZP.Store) {
    initialize() {
        !(!U.iP || __OVERLAY__) && (this.waitFor(y.ZP, v.Z, C.default, A.ZP, b.default), this.syncWith([v.Z], ej), g.sr(eb, eT), C.default.addChangeListener(eI), l.Z.addInterceptor(X.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return b.default.isOverlayOOPEnabledForPid(e) ? A.ZP.isInputLocked(e) : !q.has(e);
    }
    DEV_isInputLockedV3(e) {
        return A.ZP.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !q.has(e);
    }
    isSupported() {
        return U.iP || !1;
    }
    get enabled() {
        return A.ZP.isOverlayV3Enabled() ? A.ZP.enabled : j;
    }
    get legacyEnabled() {
        return !A.ZP.isOverlayV3Enabled() && H;
    }
    getAnyGlobalEnabledOverlay() {
        return b.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = A.ZP.getFocusedPID();
        return null != e && A.ZP.isOverlayV3EnabledForPID(e) ? e : W;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && b.default.isOverlayOOPEnabledForPid(e);
    }
    isReady(e) {
        return A.ZP.isOverlayV3EnabledForPID(e) ? A.ZP.isReady(e) : 'READY' === F.get(e);
    }
    isCrashed(e) {
        return !A.ZP.isOverlayV3EnabledForPID(e) && 'CRASHED' === F.get(e);
    }
    getOverlayPIDStatuses() {
        return F;
    }
}
G(eW, 'displayName', 'OverlayBridgeStore');
let eK = new eW(
        l.Z,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eB }
            : {
                  LOGIN: eH,
                  LOGOUT: eY,
                  CONNECTION_OPEN: ew,
                  CONNECTION_CLOSED: eM,
                  EXPERIMENT_OVERRIDE_BUCKET: ek,
                  RUNNING_GAME_TOGGLE_OVERLAY: eF,
                  RUNNING_GAMES_CHANGE: eZ,
                  OVERLAY_SET_ENABLED: eU,
                  OVERLAY_FOCUSED: ex,
                  OVERLAY_SET_INPUT_LOCKED: eC,
                  OVERLAY_ACTIVATE_REGION: eR,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eO,
                  RPC_SERVER_READY: eD,
                  OVERLAY_CALL_PRIVATE_CHANNEL: eL,
                  OVERLAY_JOIN_GAME: eG,
                  OVERLAY_CRASHED: eP,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eV
              }
    ),
    ez = eK;
