let i;
n.d(t, {
    Y: () => e_,
    Z: () => eH
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
    n(177593);
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
    en = 'none',
    ei = (0, a.H)({
        onContention: (e, t) => et.verbose('overlayLock contention: lastMutexCall '.concat(en)),
        onContentionResolved: () => et.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, t) => {
            let n = 'overlayLock: lastMutexCall '.concat(en, '}');
            et.error(n),
                D.default.track(k.rMx.OVERLAY_HOOK_RESULT, {
                    success: !1,
                    error_description: n,
                    overlay_method: p.gl[p.gl.Hook]
                });
        },
        timeoutMs: 180000
    });
function er(e, t) {
    return function () {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        ei(() => t(...i), e);
    };
}
function ea() {
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
function es(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = F.get(e);
    (null === n || i === n) &&
        i !== t &&
        (null == t ? F.delete(e) : F.set(e, t),
        (null == t || 'CRASHED' === t) && ((W = null), ea()),
        q.delete(e),
        et.info(
            'pid='
                .concat(e, ' status transition ')
                .concat(null != i ? i : 'DISCONNECTED', ' -> ')
                .concat(null != t ? t : 'DISCONNECTED'),
            F
        ));
}
async function eo(e) {
    try {
        if (P.ZP.supportsFeature(k.eRX.CREATE_HOST_ON_ATTACH)) {
            if (F.size > 0) {
                en = 'reconcile.getOverlayURL';
                let t = await e_();
                (en = 'reconcile.createHostProcess'), e.createHostProcess(t, em, eh);
            } else (en = 'reconcile.destroyHostProcess'), e.destroyHostProcess(), ef((0, w.QF)());
        } else if (j) {
            let t = await e_();
            e.createHostProcess(t, em, eh);
        } else e.destroyHostProcess(), ef((0, w.QF)());
    } catch (t) {
        et.error('reconcileHostProcess', t), ef((0, w.QF)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            et.error('reconcileHostProcess: destroyHostProcess', e);
        }
    }
}
async function el(e) {
    ei.isMutexHeld() || et.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let t = F.get(e);
    if (null != t) {
        et.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(t));
        return;
    }
    await f.Z.updateOverlayState(e, p.mM.WAITING_FOR_OVERLAY_OPEN), (en = 'attach.getOverlayModule');
    let n = await (0, M.K)();
    if (null == n) {
        et.error('Trying to attach to pid='.concat(e, ', but overlay module failed loaded'));
        return;
    }
    (en = 'attach.transitionOverlayPIDStatus'), es(e, 'ATTACHING'), (en = 'attach.attachToProcess');
    let i = await m.YT(e);
    null == i ? ((en = 'attach.transitionOverlayPIDStatus (CONNECTING)'), es(e, 'CONNECTING', 'ATTACHING'), (en = 'attach.reconcileHostProcess'), await eo(n), n.connectProcess(e)) : ((en = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), es(e, 'HOOK_FAILED', 'ATTACHING'), et.warn('Could not hook to pid='.concat(e, ', error=').concat(i)));
}
async function eu(e) {
    if ((ei.isMutexHeld() || et.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !F.has(e))) {
        et.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    es(e, 'DISCONNECTING');
    try {
        en = 'detach.getOverlayModule';
        let t = await (0, M.K)();
        if (null == t) {
            et.error('Trying to detach from pid='.concat(e, ', but overlay module failed loaded'));
            return;
        }
        e !== w.Js && ((en = 'detach.cancelAttachToProcess'), await m.pn(e), await (0, o._v)(16), (en = 'detach.disconnectProcess'), await t.disconnectProcess(e)), (en = 'detach.transitionOverlayPIDStatus'), es(e, null), (en = 'detach.reconcileHostProcess'), await eo(t);
    } catch (t) {
        et.error('Error during overlay detachment for pid '.concat(e, ':'), t), es(e, null);
    }
}
async function ec(e) {
    var t, n;
    if (
        (et.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: Y,
            action: e
        }),
        ei.isMutexHeld() || et.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
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
        let n = b.Z.getTrackedGameByPid(t);
        if (null == n) {
            et.error('updateIntendedOverlayPIDs: Tracked game not found for pid='.concat(t));
            continue;
        }
        if ((et.verbose('updateIntendedOverlayPIDs: newGame', n), n.legacyEnabled))
            switch ((n.pid in B && et.error('Unexpected. '.concat(n.pid, ' is being added twice?'), B, e), n.overlayMethod)) {
                case p.gl.Hook:
                    F.has(n.pid) || (await el(n.pid)),
                        (B[n.pid] = {
                            method: n.overlayMethod,
                            deconstructor: async () => {
                                await eu(n.pid);
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
    r && ej.emitChange();
}
let ed = er('updateIntendedOverlayPIDs', (e) => (et.info('updateIntendedOverlayPIDs', e), ec(e))),
    ef = er('clearPID', (e) => {
        if (null == e) return (0, w.tB)(w.R2);
        !A.ZP.isOverlayV3EnabledForPID(e) && (0, w.tB)(w.R2);
    });
function e_() {
    return new Promise((e) => {
        ej.addConditionalChangeListener(() => {
            if (null != i) return e(i), !1;
        });
    });
}
let ep = er('setOverlayEnabled', async (e) => {
    if (!U.iP) return;
    if (j === e) {
        et.verbose('setOverlayEnabled: no change', { newOverlayEnabled: e });
        return;
    }
    (j = e), ej.emitChange();
    let t = await (0, M.K)();
    if (null == t) {
        et.error('setOverlayEnabled: overlay module failed loaded');
        return;
    }
    j || (await ec(void 0)), await eo(t);
});
function eh(e) {
    f.Z.setFocusedPID(0 === e ? null : e);
}
function em(e, t, n) {
    var i;
    let r = null === (i = y.ZP.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
        a = R.Z.getGameByName(r),
        s = {
            game_name: r,
            game_id: null == a ? null : a.id,
            success: t,
            overlay_method: p.gl[p.gl.Hook],
            ...n
        };
    (0, d.te)(w.qU, O.Z.getDefaultLayout(w.qU), 0, {
        width: n.graphics_width,
        height: n.graphics_height
    }),
        f.Z.updateOverlayState(e, p.mM.OVERLAY_RENDERING),
        D.default.track(k.rMx.OVERLAY_HOOK_RESULT, s),
        et.info('Overlay connection to '.concat(e, ' ').concat(t ? 'succeeded' : 'failed'), s),
        t ? es(e, 'CONNECTED', 'CONNECTING') : es(e, 'CONNECT_FAILED', 'CONNECTING');
}
function eg() {
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
function eE(e) {
    return null != e && (0, L.y)(e, z);
}
function ev(e) {
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
                        es(r, 'READY'),
                        (0, w.tB)(r),
                        f.Z.overlayReady(r);
                });
            break;
        case k.BmY.DISPATCH:
            null != e.payloads && X.dispatchPayloads(e.payloads);
            break;
        case k.BmY.LOG_MESSAGES:
            et.info('[overlay data received]', e.payload);
    }
}
async function ey(e, t) {
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
function eI(e, t) {
    e ? setTimeout(() => ey(e, t), 200) : ey(e, t);
}
let eT = null;
function eb(e) {
    let { locked: t, pid: n } = e,
        i = F.get(n);
    if ((K.has(n) && ed(void 0), null != i && null != B[n] && (t || 'READY' === i || 'CRASHED' === i)))
        t ? q.delete(n) : q.add(n),
            $.clear(),
            (null == eT || (clearTimeout(eT), (eT = null), !t)) &&
                (t
                    ? eI(t, n)
                    : (eT = setTimeout(() => {
                          eI(t, n), (eT = null);
                      }, 100)));
}
function eS(e) {
    let { region: t } = e;
    $.add(t), eI(!1, W);
}
function eA() {
    $.clear(), eI(!0, W);
}
function eN(e) {
    let { port: t } = e;
    z = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append('build_id', 'e5215d77b9fa3f8aee0d85655235a8d6c10a5a67'), n.append('rpc', String(t)), n.append('rpc_auth_token', z), (i = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(n.toString()));
}
function eC(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        _.default.selectPrivateChannel(t), u.Z.call(t, !1, !!n);
    });
}
function eR(e) {
    let { pid: t } = e;
    W = t;
}
function eO(e) {
    let { pid: t } = e;
    es(t, 'CRASHED'), et.verbose('OverlayBridgeStore: handleOverlayCrashed: '.concat(t));
}
function eD() {
    (Y = !0), (Z = !1);
}
function eL() {
    (Y = !1), (W = null), ed(void 0), et.verbose('OverlayBridgeStore: handleConnectionClosed');
}
function ex() {
    return !0;
}
function eP(e) {
    let { legacyEnabled: t } = e;
    return ep(t), !1;
}
function ew(e) {
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
function eM(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            i = Math.ceil(n * window.innerHeight),
            r = (0, x.B)('click', e, i);
        (0, x.J)(r, e, i);
    }, 50);
}
function ek(e) {
    return (
        ed({
            added: [],
            removed: []
        }),
        !0
    );
}
function eU(e) {
    return (
        ed({
            added: [],
            removed: []
        }),
        !0
    );
}
function eG(e) {
    et.verbose('Updating OverlayMethod', {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, S.P_)(e.overlayMethod)
    }),
        e.overlayMethod === p.gl.Hook
            ? ed({
                  added: [e.pid],
                  removed: []
              })
            : ed({
                  added: [],
                  removed: [e.pid]
              });
}
function eB() {
    v.Z.hasLoadedExperiments && !Z && ((Z = !0), ep(I.v.legacyEnabled));
}
function eZ() {
    Z = !1;
}
function eF() {
    Z = !1;
}
class eV extends (r = s.ZP.Store) {
    initialize() {
        !(!U.iP || __OVERLAY__) && (this.waitFor(y.ZP, v.Z, C.default, A.ZP, b.Z), this.syncWith([v.Z], eB), g.sr(ev, eE), C.default.addChangeListener(eg), l.Z.addInterceptor(X.queueDispatch));
    }
    isInputLocked(e) {
        return b.Z.isOverlayOOPEnabledForPid(e) ? A.ZP.isInputLocked(e) : !q.has(e);
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
        return b.Z.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = A.ZP.getFocusedPID();
        return null != e && A.ZP.isOverlayV3EnabledForPID(e) ? e : W;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && b.Z.isOverlayOOPEnabledForPid(e);
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
G(eV, 'displayName', 'OverlayBridgeStore');
let ej = new eV(
        l.Z,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eM }
            : {
                  LOGIN: eZ,
                  LOGOUT: eF,
                  CONNECTION_OPEN: eD,
                  CONNECTION_CLOSED: eL,
                  EXPERIMENT_OVERRIDE_BUCKET: ex,
                  RUNNING_GAME_TOGGLE_OVERLAY: eU,
                  RUNNING_GAMES_CHANGE: ek,
                  OVERLAY_SET_ENABLED: eP,
                  OVERLAY_FOCUSED: eR,
                  OVERLAY_SET_INPUT_LOCKED: eb,
                  OVERLAY_ACTIVATE_REGION: eS,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eA,
                  RPC_SERVER_READY: eN,
                  OVERLAY_CALL_PRIVATE_CHANNEL: eC,
                  OVERLAY_JOIN_GAME: ew,
                  OVERLAY_CRASHED: eO,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eG
              }
    ),
    eH = ej;
