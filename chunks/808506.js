let i;
r.d(n, {
    Y: function () {
        return eR;
    }
});
var a,
    o,
    s = r(47120);
var l = r(411104);
var u = r(518263);
var c = r(970173);
var d = r(520712);
var f = r(268111);
var p = r(941497);
var h = r(32026);
var _ = r(480839);
var m = r(744285);
var g = r(492257);
var E = r(873817);
var v = r(642549);
var y = r(610138);
var b = r(216116);
var I = r(78328);
var T = r(815648);
var S = r(177593);
var A = r(807864),
    C = r(442837),
    N = r(570140),
    R = r(26151),
    O = r(224706),
    D = r(765250),
    L = r(13245),
    x = r(287734),
    w = r(615287),
    P = r(579806),
    M = r(887278),
    k = r(490029),
    U = r(710845),
    B = r(594190),
    G = r(454991),
    Z = r(633565),
    F = r(371651),
    V = r(829907),
    j = r(610394),
    H = r(48481),
    Y = r(314897),
    W = r(77498),
    K = r(355863),
    z = r(626135),
    q = r(866119),
    Q = r(671999),
    X = r(998502),
    J = r(145597),
    $ = r(981631),
    ee = r(987650);
function et(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.ATTACHING = 'ATTACHING'), (e.CONNECTING = 'CONNECTING'), (e.CONNECTED = 'CONNECTED'), (e.READY = 'READY'), (e.CRASHED = 'CRASHED'), (e.CONNECT_FAILED = 'CONNECT_FAILED'), (e.HOOK_FAILED = 'HOOK_FAILED');
})(a || (a = {}));
let en = {},
    er = new Map(),
    ei = () => Array.from(er.values()).some((e) => 'READY' === e),
    ea = !1,
    eo = !1,
    es = !1,
    el = null,
    eu = new Set(),
    ec = '',
    ed = new Set();
class ef {
    reset() {
        this.actionsToFlush.clear(), this.waitingActionsToFlush.clear(), (this.isDispatching = !1), (this.timeout = null), null != this.timeout && clearTimeout(this.timeout), (this.requestIdleCallback = null), null != this.requestIdleCallback && cancelIdleCallback(this.requestIdleCallback);
    }
    enqueueWaitingActions() {
        let e = new Set([...this.waitingActionsToFlush]);
        for (let n of (this.waitingActionsToFlush.clear(), e)) this.queueDispatch(n);
    }
    constructor() {
        et(this, 'isDispatching', !1),
            et(this, 'timeout', void 0),
            et(this, 'requestIdleCallback', void 0),
            et(this, 'actionsToFlush', new Set()),
            et(this, 'waitingActionsToFlush', new Set()),
            et(this, 'flush', () => {
                if ((null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)), null != this.requestIdleCallback && (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)), !ei())) {
                    this.actionsToFlush.clear();
                    return;
                }
                this.actionsToFlush.size > 0 &&
                    (k.lW({
                        type: $.BmY.DISPATCH,
                        pid: null,
                        token: null,
                        payloads: Array.from(this.actionsToFlush)
                    }),
                    this.actionsToFlush.clear()),
                    this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions();
            }),
            et(this, 'dispatchPayloads', (e) => {
                (this.isDispatching = !0), e.forEach((e) => N.Z.dispatch(e)), (this.isDispatching = !1);
            }),
            et(
                this,
                'queueDispatch',
                (e) =>
                    !(!ei() || eh.has(e.type)) &&
                    (this.isDispatching
                        ? (this.waitingActionsToFlush.add(e), !1)
                        : ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
                              (e = {
                                  ...e,
                                  settings: {
                                      type: e.settings.type,
                                      proto: (0, H.cv)(e.settings.type, e.settings.proto)
                                  }
                              }),
                          this.actionsToFlush.add(e),
                          null == this.timeout &&
                              null == this.requestIdleCallback &&
                              (this.timeout = setTimeout(() => {
                                  this.requestIdleCallback = requestIdleCallback(this.flush, { timeout: 100 });
                              }, 100)),
                          !1))
            );
    }
}
let ep = new ef(),
    eh = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_MFA_FAILURE', 'LOGIN_MFA_SMS', 'LOGIN_MFA_SMS_REQUEST_SUCCESS', 'LOGIN_MFA_SMS_FAILURE', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'REGISTER_FAILURE', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
    e_ = new Set(),
    em = !1,
    eg = new U.Z('OverlayBridgeStore'),
    eE = 'none',
    ev = (0, A.H)({
        onContention: (e, n) => eg.verbose('overlayLock contention: lastMutexCall '.concat(eE)),
        onContentionResolved: () => eg.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, n) => {
            let r = 'overlayLock: lastMutexCall '.concat(eE, '}');
            eg.error(r),
                z.default.track($.rMx.OVERLAY_HOOK_RESULT, {
                    success: !1,
                    error_description: r,
                    overlay_method: w.gl[w.gl.Hook]
                });
        },
        timeoutMs: 180000
    });
function ey(e, n) {
    return function () {
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        ev(() => n(...i), e);
    };
}
function eb() {
    try {
        var e;
        let n = null === P.Z || void 0 === P.Z ? void 0 : null === (e = P.Z.fileManager) || void 0 === e ? void 0 : e.uploadDiscordHookCrashes;
        if (null == n) return;
        n().then((e) => {
            if (!!Array.isArray(e) && 0 !== e.length)
                for (let u of (eg.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                    var n, r, i, a, o, s, l;
                    if (null == u) continue;
                    let e = null != u.processName ? W.Z.getGameByExecutable(u.processName) : null;
                    z.default.track($.rMx.OVERLAY_HOOK_CRASHED, {
                        process_name: null == u ? void 0 : u.processName,
                        game_name: null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : null,
                        game_id: null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : null,
                        minidump_exception_type: null !== (i = u.exceptionString) && void 0 !== i ? i : null,
                        minidump_exception_module_name: null !== (a = u.exceptionModuleName) && void 0 !== a ? a : null,
                        minidump_relative_crash_address: null !== (o = u.relativeCrashAddress) && void 0 !== o ? o : null,
                        minidump_exception_module_version: null !== (s = u.exceptionModuleVersion) && void 0 !== s ? s : null,
                        minidump_exception_module_code_id: null !== (l = u.exceptionModuleCodeId) && void 0 !== l ? l : null
                    });
                }
        });
    } catch (e) {
        eg.error('tryUploadDiscordHookCrashes', e);
    }
}
function eI(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = er.get(e);
    if ((null === r || i === r) && i !== n) {
        null == n ? er.delete(e) : er.set(e, n), (null == n || 'CRASHED' === n) && ((el = null), eb());
        ed.delete(e),
            eg.info(
                'pid='
                    .concat(e, ' status transition ')
                    .concat(null != i ? i : 'DISCONNECTED', ' -> ')
                    .concat(null != n ? n : 'DISCONNECTED'),
                er
            );
    }
}
async function eT(e) {
    if (X.ZP.supportsFeature($.eRX.CREATE_HOST_ON_ATTACH)) {
        if (er.size > 0) {
            eE = 'reconcile.getOverlayURL';
            let n = await eR();
            (eE = 'reconcile.createHostProcess'), e.createHostProcess(n, ex, eL);
        } else (eE = 'reconcile.destroyHostProcess'), e.destroyHostProcess(), (0, J.tB)(J.R2);
    } else if (ea) {
        let n = await eR();
        e.createHostProcess(n, ex, eL);
    } else e.destroyHostProcess(), (0, J.tB)(J.R2);
}
async function eS(e) {
    !ev.isMutexHeld() && eg.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let n = er.get(e);
    if (null != n) {
        eg.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(n));
        return;
    }
    await L.Z.updateOverlayState(e, w.mM.WAITING_FOR_OVERLAY_OPEN), (eE = 'attach.getOverlayModule');
    let r = await eO();
    (eE = 'attach.transitionOverlayPIDStatus'), eI(e, 'ATTACHING'), (eE = 'attach.attachToProcess');
    let i = await M.YT(e);
    null == i ? ((eE = 'attach.transitionOverlayPIDStatus (CONNECTING)'), eI(e, 'CONNECTING', 'ATTACHING'), (eE = 'attach.reconcileHostProcess'), await eT(r), r.connectProcess(e)) : ((eE = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), eI(e, 'HOOK_FAILED', 'ATTACHING'), eg.warn('Could not hook to pid='.concat(e, ', error=').concat(i)));
}
async function eA(e) {
    if ((!ev.isMutexHeld() && eg.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !er.has(e))) {
        eg.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    eE = 'detach.getOverlayModule';
    let n = await eO();
    (eE = 'detach.transitionOverlayPIDStatus'), eI(e, null), e !== J.Js && ((eE = 'detach.cancelAttachToProcess'), M.pn(e), (eE = 'detach.disconnectProcess'), n.disconnectProcess(e)), (eE = 'detach.reconcileHostProcess'), await eT(n);
}
async function eC(e) {
    var n, r;
    if (
        (eg.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: es,
            action: e
        }),
        !ev.isMutexHeld() && eg.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !es && null != e)
    ) {
        eg.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
        return;
    }
    async function i(e) {
        if (!(e in en)) return;
        let n = en[e];
        delete en[e];
        try {
            await n.deconstructor(), eu.delete(e);
        } catch (r) {
            eg.error('Failed to deconstruct tracked game '.concat(e), r), (en[e] = n), eu.add(e);
        }
    }
    let a = !1;
    if (null == e || !ea) {
        for (let n of (eg.verbose('updateIntendedOverlayPIDs: Removing all.', en, e), Object.keys(en))) await i(Number(n)), (a = !0);
        return;
    }
    for (let r of eu) {
        if (null === (n = e.added) || void 0 === n ? void 0 : n.includes(r)) {
            eg.warn('updateIntendedOverlayPIDs: Failed PID was re-added?');
            continue;
        }
        eg.verbose('updateIntendedOverlayPIDs: retrying failed overlay pid '.concat(r)), await i(r), (a = !0);
    }
    for (let n of null !== (r = e.added) && void 0 !== r ? r : []) {
        let r = F.Z.getTrackedGameByPid(n);
        if (null == r) {
            eg.error('updateIntendedOverlayPIDs: Tracked game not found for pid='.concat(n));
            continue;
        }
        if ((eg.verbose('updateIntendedOverlayPIDs: newGame', r), r.enabled))
            switch ((r.pid in en && eg.error('Unexpected. '.concat(r.pid, ' is being added twice?'), en, e), r.overlayMethod)) {
                case w.gl.Hook:
                    !er.has(r.pid) && (await eS(r.pid)),
                        (en[r.pid] = {
                            method: r.overlayMethod,
                            deconstructor: async () => {
                                await eA(r.pid);
                            }
                        }),
                        (a = !0);
                    break;
                case w.gl.OutOfProcess:
                    eg.error('updateIntendedOverlayPIDs: out of process called for hook overlay', r);
                    break;
                case w.gl.Disabled:
                    eg.verbose('updateIntendedOverlayPIDs: disabled', r);
                    break;
                default:
                    eg.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(r.overlayMethod), r);
            }
    }
    for (let n of e.removed) eg.verbose('updateIntendedOverlayPIDs: removedGame', n), await i(n), (a = !0);
    a && e2.emitChange();
}
let eN = ey('updateIntendedOverlayPIDs', (e) => (eg.trace('updateIntendedOverlayPIDs', e), eC(e)));
function eR() {
    return new Promise((e) => {
        e2.addConditionalChangeListener(() => {
            if (null != i) return e(i), !1;
        });
    });
}
let eO = (() => {
        let e = null;
        function n(e) {
            for (let n of ['createHostProcess', 'connectProcess', 'disconnectProcess', 'destroyHostProcess']) null == e[n] && (eg.info('polyfilling OverlayModule.'.concat(n, '(); Overlay module is probably out of date.')), (e[n] = () => void 0));
            return e;
        }
        async function r() {
            if (!ee.iP) throw (eg.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay is not supported on this platform.'));
            try {
                return await X.ZP.ensureModule('discord_overlay2'), n(X.ZP.requireModule('discord_overlay2'));
            } catch (e) {
                throw (eg.error('failed ensuring discord_overlay2', e), e);
            }
        }
        return () => (null == e && (e = r()), e);
    })(),
    eD = ey('setOverlayEnabled', async (e, n, r) => {
        if (!ee.iP) return;
        let i = G.v.global;
        if (ea === e && eo === n && i === r) {
            eg.verbose('setOverlayEnabled: no change', {
                newOverlayEnabled: e,
                newLegacyEnabled: n,
                newGlobal: r
            });
            return;
        }
        (ea = e), (eo = n), e2.emitChange();
        let a = await eO();
        !ea && (await eC(void 0)), await eT(a);
    });
function eL(e) {
    L.Z.setFocusedPID(0 === e ? null : e);
}
function ex(e, n, r) {
    var i;
    let a = null === (i = B.ZP.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
        o = W.Z.getGameByName(a),
        s = {
            game_name: a,
            game_id: null == o ? null : o.id,
            success: n,
            overlay_method: w.gl[w.gl.Hook],
            ...r
        };
    (0, D.te)(J.qU, K.Z.getDefaultLayout(J.qU), 0, {
        width: r.graphics_width,
        height: r.graphics_height
    }),
        L.Z.updateOverlayState(e, w.mM.OVERLAY_RENDERING),
        z.default.track($.rMx.OVERLAY_HOOK_RESULT, s),
        eg.info('Overlay connection to '.concat(e, ' ').concat(n ? 'succeeded' : 'failed'), s),
        n ? eI(e, 'CONNECTED', 'CONNECTING') : eI(e, 'CONNECT_FAILED', 'CONNECTING');
}
function ew() {
    let e = Y.default.getToken(),
        n = Y.default.getId();
    if (null != e)
        k.lW({
            type: $.BmY.DISPATCH,
            pid: null,
            token: null,
            payloads: [
                {
                    type: 'UPDATE_TOKEN',
                    token: e,
                    userId: n
                }
            ]
        });
}
function eP(e) {
    return null != e && (0, q.y)(e, ec);
}
function eM(e) {
    switch ((em && eg.info('[app data received]', e), e.type)) {
        case $.BmY.CONNECT:
            let n = Y.default.getToken();
            if (null == n) break;
            (0, D.te)(J.qU, K.Z.getDefaultLayout(J.qU), 0),
                Promise.all([(0, Z.Z)(n, e.pid), C.ZP.PersistedStore.getAllStates()]).then((n) => {
                    let [r, i] = n,
                        { pid: a, token: o } = e;
                    k.lW({
                        type: $.BmY.STORAGE_SYNC,
                        pid: a,
                        token: o,
                        states: i
                    }),
                        k.lW({
                            type: $.BmY.DISPATCH,
                            pid: a,
                            token: o,
                            payloads: [r]
                        }),
                        eI(a, 'READY'),
                        (0, J.tB)(a),
                        L.Z.overlayReady(a);
                });
            break;
        case $.BmY.DISPATCH:
            null != e.payloads && ep.dispatchPayloads(e.payloads);
            break;
        case $.BmY.LOG_MESSAGES:
            eg.info('[overlay data received]', e.payload);
    }
}
async function ek(e, n) {
    let r = await eO(),
        i = null != n ? n : el;
    null != i &&
        i !== J.Js &&
        r.sendCommand(i, {
            message: 'intercept_input',
            intercept: !e
        });
}
function eU(e, n) {
    e ? setTimeout(() => ek(e, n), 200) : ek(e, n);
}
let eB = null;
function eG(e) {
    let { locked: n, pid: r } = e,
        i = er.get(r);
    if ((eu.has(r) && eN(void 0), !n && !('READY' === i || 'CRASHED' === i))) return;
    if ((n ? ed.delete(r) : ed.add(r), e_.clear(), null == eB || (clearTimeout(eB), (eB = null), !n)))
        n
            ? eU(n, r)
            : (eB = setTimeout(() => {
                  eU(n, r), (eB = null);
              }, 100));
}
function eZ(e) {
    let { region: n } = e;
    e_.add(n), eU(!1, el);
}
function eF() {
    e_.clear(), eU(!0, el);
}
function eV(e) {
    let { port: n } = e;
    ec = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let r = new URLSearchParams();
    r.append('build_id', '853b3812af045caf33711b1a89870fac807fb345'), r.append('rpc', String(n)), r.append('rpc_auth_token', ec), (i = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(r.toString()));
}
function ej(e) {
    let { channelId: n, ring: r } = e;
    setImmediate(() => {
        x.default.selectPrivateChannel(n), R.Z.call(n, !1, !!r);
    });
}
function eH(e) {
    let { pid: n } = e;
    el = n;
}
function eY(e) {
    let { pid: n } = e;
    eI(n, 'CRASHED'), eg.verbose('OverlayBridgeStore: handleOverlayCrashed: '.concat(n));
}
function eW() {
    es = !0;
}
function eK() {
    (es = !1), (el = null), eN(void 0), eg.verbose('OverlayBridgeStore: handleConnectionClosed');
}
function ez() {
    return !0;
}
function eq(e) {
    let { enabled: n, legacyEnabled: r, global: i } = e;
    return eD(n, r, i), !1;
}
function eQ(e) {
    let { userId: n, sessionId: r, applicationId: i, channelId: a, messageId: o } = e;
    setImmediate(() => {
        O.Z.join({
            userId: n,
            sessionId: r,
            applicationId: i,
            channelId: a,
            messageId: o
        }),
            null != el && L.Z.setInputLocked(!0, el);
    });
}
function eX(e) {
    let { normalizedMouseX: n, normalizedMouseY: r } = e;
    setTimeout(() => {
        let e = Math.ceil(n * window.innerWidth),
            i = Math.ceil(r * window.innerHeight),
            a = (0, Q.B)('click', e, i);
        (0, Q.J)(a, e, i);
    }, 50);
}
function eJ(e) {
    return (
        eN({
            added: [],
            removed: []
        }),
        !0
    );
}
function e$(e) {
    return (
        eN({
            added: [],
            removed: []
        }),
        !0
    );
}
function e0(e) {
    eg.verbose('Updating OverlayMethod', {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, V.P_)(e.overlayMethod)
    }),
        e.overlayMethod === w.gl.Hook
            ? eN({
                  added: [e.pid],
                  removed: []
              })
            : eN({
                  added: [],
                  removed: [e.pid]
              });
}
class e1 extends (o = C.ZP.Store) {
    initialize() {
        if (!(!ee.iP || __OVERLAY__)) this.waitFor(B.ZP, Y.default, j.ZP, F.Z), k.sr(eM, eP), Y.default.addChangeListener(ew), eD(G.v.enabled, G.v.legacyEnabled, G.v.global), N.Z.addInterceptor(ep.queueDispatch);
    }
    isInputLocked(e) {
        return j.ZP.isOverlayV3EnabledForPID(e) ? j.ZP.isInputLocked(e) : !ed.has(e);
    }
    isSupported() {
        return !!j.ZP.isOverlayV3Enabled() || ee.iP;
    }
    get enabled() {
        return j.ZP.isOverlayV3Enabled() ? j.ZP.enabled : ea;
    }
    get legacyEnabled() {
        return !j.ZP.isOverlayV3Enabled() && eo;
    }
    getFocusedPID() {
        let e = j.ZP.getFocusedPID();
        return null != e ? (j.ZP.isOverlayV3EnabledForPID(e) ? e : el) : el;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && F.Z.isOverlayOOPEnabledForPid(e);
    }
    isReady(e) {
        return j.ZP.isOverlayV3EnabledForPID(e) ? j.ZP.isReady(e) : 'READY' === er.get(e);
    }
    isCrashed(e) {
        return !j.ZP.isOverlayV3EnabledForPID(e) && 'CRASHED' === er.get(e);
    }
    getOverlayPIDStatuses() {
        return er;
    }
}
et(e1, 'displayName', 'OverlayBridgeStore');
let e2 = new e1(
    N.Z,
    __OVERLAY__
        ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eX }
        : {
              CONNECTION_OPEN: eW,
              CONNECTION_CLOSED: eK,
              EXPERIMENT_OVERRIDE_BUCKET: ez,
              RUNNING_GAME_TOGGLE_OVERLAY: e$,
              RUNNING_GAMES_CHANGE: eJ,
              OVERLAY_SET_ENABLED: eq,
              OVERLAY_FOCUSED: eH,
              OVERLAY_SET_INPUT_LOCKED: eG,
              OVERLAY_ACTIVATE_REGION: eZ,
              OVERLAY_DEACTIVATE_ALL_REGIONS: eF,
              RPC_SERVER_READY: eV,
              OVERLAY_CALL_PRIVATE_CHANNEL: ej,
              OVERLAY_JOIN_GAME: eQ,
              OVERLAY_CRASHED: eY,
              OVERLAY_UPDATE_OVERLAY_METHOD: e0
          }
);
n.Z = e2;
