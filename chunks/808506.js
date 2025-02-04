let i;
n.d(t, {
    Y: () => ed,
    Z: () => eB
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
    v = n(594190),
    y = n(454991),
    I = n(633565),
    b = n(371651),
    T = n(829907),
    S = n(610394),
    A = n(48481),
    N = n(314897),
    C = n(77498),
    R = n(355863),
    O = n(626135),
    D = n(866119),
    x = n(671999),
    L = n(998502),
    P = n(145597),
    w = n(372679),
    M = n(981631),
    k = n(987650);
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
let G = {},
    B = new Map(),
    Z = () => Array.from(B.values()).some((e) => 'READY' === e),
    F = !1,
    V = !1,
    j = !1,
    H = null,
    Y = new Set(),
    W = '',
    K = new Set();
class z {
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
                if ((null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)), null != this.requestIdleCallback && (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)), !Z())) {
                    this.actionsToFlush.clear();
                    return;
                }
                this.actionsToFlush.size > 0 &&
                    (g.lW({
                        type: M.BmY.DISPATCH,
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
                    !(!Z() || Q.has(e.type)) &&
                    (this.isDispatching
                        ? this.waitingActionsToFlush.add(e)
                        : ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
                              (e = {
                                  ...e,
                                  settings: {
                                      type: e.settings.type,
                                      proto: (0, A.cv)(e.settings.type, e.settings.proto)
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
let q = new z(),
    Q = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
    X = new Set(),
    J = !1,
    $ = new E.Z('OverlayBridgeStore'),
    ee = 'none',
    et = (0, a.H)({
        onContention: (e, t) => $.verbose('overlayLock contention: lastMutexCall '.concat(ee)),
        onContentionResolved: () => $.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, t) => {
            let n = 'overlayLock: lastMutexCall '.concat(ee, '}');
            $.error(n),
                O.default.track(M.rMx.OVERLAY_HOOK_RESULT, {
                    success: !1,
                    error_description: n,
                    overlay_method: p.gl[p.gl.Hook]
                });
        },
        timeoutMs: 180000
    });
function en(e, t) {
    return function () {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        et(() => t(...i), e);
    };
}
function ei() {
    try {
        var e;
        let t = null === h.Z || void 0 === h.Z ? void 0 : null === (e = h.Z.fileManager) || void 0 === e ? void 0 : e.uploadDiscordHookCrashes;
        if (null == t) return;
        t().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let l of ($.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                    var t, n, i, r, a, s, o;
                    if (null == l) continue;
                    let e = null != l.processName ? C.Z.getGameByExecutable(l.processName) : null;
                    O.default.track(M.rMx.OVERLAY_HOOK_CRASHED, {
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
        $.error('tryUploadDiscordHookCrashes', e);
    }
}
function er(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = B.get(e);
    (null === n || i === n) &&
        i !== t &&
        (null == t ? B.delete(e) : B.set(e, t),
        (null == t || 'CRASHED' === t) && ((H = null), ei()),
        K.delete(e),
        $.info(
            'pid='
                .concat(e, ' status transition ')
                .concat(null != i ? i : 'DISCONNECTED', ' -> ')
                .concat(null != t ? t : 'DISCONNECTED'),
            B
        ));
}
async function ea(e) {
    try {
        if (L.ZP.supportsFeature(M.eRX.CREATE_HOST_ON_ATTACH)) {
            if (B.size > 0) {
                ee = 'reconcile.getOverlayURL';
                let t = await ed();
                (ee = 'reconcile.createHostProcess'), e.createHostProcess(t, ep, e_);
            } else (ee = 'reconcile.destroyHostProcess'), e.destroyHostProcess(), ec((0, P.QF)());
        } else if (F) {
            let t = await ed();
            e.createHostProcess(t, ep, e_);
        } else e.destroyHostProcess(), ec((0, P.QF)());
    } catch (t) {
        $.error('reconcileHostProcess', t), ec((0, P.QF)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            $.error('reconcileHostProcess: destroyHostProcess', e);
        }
    }
}
async function es(e) {
    et.isMutexHeld() || $.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let t = B.get(e);
    if (null != t) {
        $.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(t));
        return;
    }
    await f.Z.updateOverlayState(e, p.mM.WAITING_FOR_OVERLAY_OPEN), (ee = 'attach.getOverlayModule');
    let n = await (0, w.K)();
    if (null == n) {
        $.error('Trying to attach to pid='.concat(e, ', but overlay module failed loaded'));
        return;
    }
    (ee = 'attach.transitionOverlayPIDStatus'), er(e, 'ATTACHING'), (ee = 'attach.attachToProcess');
    let i = await m.YT(e);
    null == i ? ((ee = 'attach.transitionOverlayPIDStatus (CONNECTING)'), er(e, 'CONNECTING', 'ATTACHING'), (ee = 'attach.reconcileHostProcess'), await ea(n), n.connectProcess(e)) : ((ee = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), er(e, 'HOOK_FAILED', 'ATTACHING'), $.warn('Could not hook to pid='.concat(e, ', error=').concat(i)));
}
async function eo(e) {
    if ((et.isMutexHeld() || $.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !B.has(e))) {
        $.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    er(e, 'DISCONNECTING');
    try {
        ee = 'detach.getOverlayModule';
        let t = await (0, w.K)();
        if (null == t) {
            $.error('Trying to detach from pid='.concat(e, ', but overlay module failed loaded'));
            return;
        }
        e !== P.Js && ((ee = 'detach.cancelAttachToProcess'), await m.pn(e), await (0, o._v)(16), (ee = 'detach.disconnectProcess'), await t.disconnectProcess(e)), (ee = 'detach.transitionOverlayPIDStatus'), er(e, null), (ee = 'detach.reconcileHostProcess'), await ea(t);
    } catch (t) {
        $.error('Error during overlay detachment for pid '.concat(e, ':'), t), er(e, null);
    }
}
async function el(e) {
    var t, n;
    if (
        ($.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: j,
            action: e
        }),
        et.isMutexHeld() || $.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !j && null != e)
    ) {
        $.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
        return;
    }
    async function i(e) {
        if (!(e in G)) return;
        let t = G[e];
        delete G[e];
        try {
            await t.deconstructor(), Y.delete(e);
        } catch (n) {
            $.error('Failed to deconstruct tracked game '.concat(e), n), (G[e] = t), Y.add(e);
        }
    }
    let r = !1;
    if (null == e || !F) {
        for (let t of ($.verbose('updateIntendedOverlayPIDs: Removing all.', G, e), Object.keys(G))) await i(Number(t)), (r = !0);
        return;
    }
    for (let n of Y) {
        if (null === (t = e.added) || void 0 === t ? void 0 : t.includes(n)) {
            $.warn('updateIntendedOverlayPIDs: Failed PID was re-added?');
            continue;
        }
        $.verbose('updateIntendedOverlayPIDs: retrying failed overlay pid '.concat(n)), await i(n), (r = !0);
    }
    for (let t of null !== (n = e.added) && void 0 !== n ? n : []) {
        let n = b.Z.getTrackedGameByPid(t);
        if (null == n) {
            $.error('updateIntendedOverlayPIDs: Tracked game not found for pid='.concat(t));
            continue;
        }
        if (($.verbose('updateIntendedOverlayPIDs: newGame', n), n.enabled))
            switch ((n.pid in G && $.error('Unexpected. '.concat(n.pid, ' is being added twice?'), G, e), n.overlayMethod)) {
                case p.gl.Hook:
                    B.has(n.pid) || (await es(n.pid)),
                        (G[n.pid] = {
                            method: n.overlayMethod,
                            deconstructor: async () => {
                                await eo(n.pid);
                            }
                        }),
                        (r = !0);
                    break;
                case p.gl.OutOfProcess:
                    $.error('updateIntendedOverlayPIDs: out of process called for hook overlay', n);
                    break;
                case p.gl.Disabled:
                    $.verbose('updateIntendedOverlayPIDs: disabled', n);
                    break;
                default:
                    $.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(n.overlayMethod), n);
            }
    }
    for (let t of e.removed) $.verbose('updateIntendedOverlayPIDs: removedGame', t), await i(t), (r = !0);
    r && eG.emitChange();
}
let eu = en('updateIntendedOverlayPIDs', (e) => ($.info('updateIntendedOverlayPIDs', e), el(e))),
    ec = en('clearPID', (e) => {
        if (null == e) return (0, P.tB)(P.R2);
        !S.ZP.isOverlayV3EnabledForPID(e) && (0, P.tB)(P.R2);
    });
function ed() {
    return new Promise((e) => {
        eG.addConditionalChangeListener(() => {
            if (null != i) return e(i), !1;
        });
    });
}
let ef = en('setOverlayEnabled', async (e, t, n) => {
    if (!k.iP) return;
    let i = y.v.global;
    if (F === e && V === t && i === n) {
        $.verbose('setOverlayEnabled: no change', {
            newOverlayEnabled: e,
            newLegacyEnabled: t,
            newGlobal: n
        });
        return;
    }
    (F = e), (V = t), eG.emitChange();
    let r = await (0, w.K)();
    if (null == r) {
        $.error('setOverlayEnabled: overlay module failed loaded');
        return;
    }
    F || (await el(void 0)), await ea(r);
});
function e_(e) {
    f.Z.setFocusedPID(0 === e ? null : e);
}
function ep(e, t, n) {
    var i;
    let r = null === (i = v.ZP.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
        a = C.Z.getGameByName(r),
        s = {
            game_name: r,
            game_id: null == a ? null : a.id,
            success: t,
            overlay_method: p.gl[p.gl.Hook],
            ...n
        };
    (0, d.te)(P.qU, R.Z.getDefaultLayout(P.qU), 0, {
        width: n.graphics_width,
        height: n.graphics_height
    }),
        f.Z.updateOverlayState(e, p.mM.OVERLAY_RENDERING),
        O.default.track(M.rMx.OVERLAY_HOOK_RESULT, s),
        $.info('Overlay connection to '.concat(e, ' ').concat(t ? 'succeeded' : 'failed'), s),
        t ? er(e, 'CONNECTED', 'CONNECTING') : er(e, 'CONNECT_FAILED', 'CONNECTING');
}
function eh() {
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
function em(e) {
    return null != e && (0, D.y)(e, W);
}
function eg(e) {
    switch ((J && $.info('[app data received]', e), e.type)) {
        case M.BmY.CONNECT:
            let t = N.default.getToken();
            if (null == t) break;
            (0, d.te)(P.qU, R.Z.getDefaultLayout(P.qU), 0),
                Promise.all([(0, I.Z)(t, e.pid), s.ZP.PersistedStore.getAllStates()]).then((t) => {
                    let [n, i] = t,
                        { pid: r, token: a } = e;
                    g.lW({
                        type: M.BmY.STORAGE_SYNC,
                        pid: r,
                        token: a,
                        states: i
                    }),
                        g.lW({
                            type: M.BmY.DISPATCH,
                            pid: r,
                            token: a,
                            payloads: [n]
                        }),
                        er(r, 'READY'),
                        (0, P.tB)(r),
                        f.Z.overlayReady(r);
                });
            break;
        case M.BmY.DISPATCH:
            null != e.payloads && q.dispatchPayloads(e.payloads);
            break;
        case M.BmY.LOG_MESSAGES:
            $.info('[overlay data received]', e.payload);
    }
}
async function eE(e, t) {
    let n = await (0, w.K)();
    if (null == n) {
        $.error('setInputLocked: overlay module failed loaded');
        return;
    }
    let i = null != t ? t : H;
    if (null != i && 'DISCONNECTING' === B.get(i)) {
        $.warn('Overlay module is no longer valid during input lock');
        return;
    }
    try {
        null != i &&
            i !== P.Js &&
            n.sendCommand(i, {
                message: 'intercept_input',
                intercept: !e
            });
    } catch (e) {
        $.error('Error during input lock', e);
    }
}
function ev(e, t) {
    e ? setTimeout(() => eE(e, t), 200) : eE(e, t);
}
let ey = null;
function eI(e) {
    let { locked: t, pid: n } = e,
        i = B.get(n);
    if ((Y.has(n) && eu(void 0), t || 'READY' === i || 'CRASHED' === i))
        t ? K.delete(n) : K.add(n),
            X.clear(),
            (null == ey || (clearTimeout(ey), (ey = null), !t)) &&
                (t
                    ? ev(t, n)
                    : (ey = setTimeout(() => {
                          ev(t, n), (ey = null);
                      }, 100)));
}
function eb(e) {
    let { region: t } = e;
    X.add(t), ev(!1, H);
}
function eT() {
    X.clear(), ev(!0, H);
}
function eS(e) {
    let { port: t } = e;
    W = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append('build_id', '8d699084a92f2c971dbb77c0cac2d9c55ffe3f98'), n.append('rpc', String(t)), n.append('rpc_auth_token', W), (i = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(n.toString()));
}
function eA(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        _.default.selectPrivateChannel(t), u.Z.call(t, !1, !!n);
    });
}
function eN(e) {
    let { pid: t } = e;
    H = t;
}
function eC(e) {
    let { pid: t } = e;
    er(t, 'CRASHED'), $.verbose('OverlayBridgeStore: handleOverlayCrashed: '.concat(t));
}
function eR() {
    j = !0;
}
function eO() {
    (j = !1), (H = null), eu(void 0), $.verbose('OverlayBridgeStore: handleConnectionClosed');
}
function eD() {
    return !0;
}
function ex(e) {
    let { enabled: t, legacyEnabled: n, global: i } = e;
    return ef(t, n, i), !1;
}
function eL(e) {
    let { userId: t, sessionId: n, applicationId: i, channelId: r, messageId: a } = e;
    setImmediate(() => {
        c.Z.join({
            userId: t,
            sessionId: n,
            applicationId: i,
            channelId: r,
            messageId: a
        }),
            null != H && f.Z.setInputLocked(!0, H);
    });
}
function eP(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            i = Math.ceil(n * window.innerHeight),
            r = (0, x.B)('click', e, i);
        (0, x.J)(r, e, i);
    }, 50);
}
function ew(e) {
    return (
        eu({
            added: [],
            removed: []
        }),
        !0
    );
}
function eM(e) {
    return (
        eu({
            added: [],
            removed: []
        }),
        !0
    );
}
function ek(e) {
    $.verbose('Updating OverlayMethod', {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, T.P_)(e.overlayMethod)
    }),
        e.overlayMethod === p.gl.Hook
            ? eu({
                  added: [e.pid],
                  removed: []
              })
            : eu({
                  added: [],
                  removed: [e.pid]
              });
}
class eU extends (r = s.ZP.Store) {
    initialize() {
        !(!k.iP || __OVERLAY__) && (this.waitFor(v.ZP, N.default, S.ZP, b.Z), g.sr(eg, em), N.default.addChangeListener(eh), ef(y.v.enabled, y.v.legacyEnabled, y.v.global), l.Z.addInterceptor(q.queueDispatch));
    }
    isInputLocked(e) {
        return b.Z.isOverlayOOPEnabledForPid(e) ? S.ZP.isInputLocked(e) : !K.has(e);
    }
    DEV_isInputLockedV3(e) {
        return S.ZP.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !K.has(e);
    }
    isSupported() {
        return !!S.ZP.isOverlayV3Enabled() || k.iP;
    }
    get enabled() {
        return S.ZP.isOverlayV3Enabled() ? S.ZP.enabled : F;
    }
    get legacyEnabled() {
        return !S.ZP.isOverlayV3Enabled() && V;
    }
    getFocusedPID() {
        let e = S.ZP.getFocusedPID();
        return null != e && S.ZP.isOverlayV3EnabledForPID(e) ? e : H;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && b.Z.isOverlayOOPEnabledForPid(e);
    }
    isReady(e) {
        return S.ZP.isOverlayV3EnabledForPID(e) ? S.ZP.isReady(e) : 'READY' === B.get(e);
    }
    isCrashed(e) {
        return !S.ZP.isOverlayV3EnabledForPID(e) && 'CRASHED' === B.get(e);
    }
    getOverlayPIDStatuses() {
        return B;
    }
}
U(eU, 'displayName', 'OverlayBridgeStore');
let eG = new eU(
        l.Z,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eP }
            : {
                  CONNECTION_OPEN: eR,
                  CONNECTION_CLOSED: eO,
                  EXPERIMENT_OVERRIDE_BUCKET: eD,
                  RUNNING_GAME_TOGGLE_OVERLAY: eM,
                  RUNNING_GAMES_CHANGE: ew,
                  OVERLAY_SET_ENABLED: ex,
                  OVERLAY_FOCUSED: eN,
                  OVERLAY_SET_INPUT_LOCKED: eI,
                  OVERLAY_ACTIVATE_REGION: eb,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eT,
                  RPC_SERVER_READY: eS,
                  OVERLAY_CALL_PRIVATE_CHANNEL: eA,
                  OVERLAY_JOIN_GAME: eL,
                  OVERLAY_CRASHED: eC,
                  OVERLAY_UPDATE_OVERLAY_METHOD: ek
              }
    ),
    eB = eG;
