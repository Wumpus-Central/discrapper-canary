let i;
r.d(n, {
    Y: function () {
        return eD;
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
    N = r(379649),
    R = r(570140),
    O = r(26151),
    D = r(224706),
    L = r(765250),
    x = r(13245),
    w = r(287734),
    P = r(615287),
    M = r(579806),
    k = r(887278),
    U = r(490029),
    B = r(710845),
    G = r(594190),
    Z = r(454991),
    F = r(633565),
    V = r(371651),
    j = r(829907),
    H = r(610394),
    Y = r(48481),
    W = r(314897),
    K = r(77498),
    z = r(355863),
    q = r(626135),
    Q = r(866119),
    X = r(671999),
    J = r(998502),
    $ = r(145597),
    ee = r(981631),
    et = r(987650);
function en(e, n, r) {
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
    (e.ATTACHING = 'ATTACHING'), (e.CONNECTING = 'CONNECTING'), (e.CONNECTED = 'CONNECTED'), (e.READY = 'READY'), (e.CRASHED = 'CRASHED'), (e.CONNECT_FAILED = 'CONNECT_FAILED'), (e.HOOK_FAILED = 'HOOK_FAILED'), (e.DISCONNECTING = 'DISCONNECTING');
})(a || (a = {}));
let er = {},
    ei = new Map(),
    ea = () => Array.from(ei.values()).some((e) => 'READY' === e),
    eo = !1,
    es = !1,
    el = !1,
    eu = null,
    ec = new Set(),
    ed = '',
    ef = new Set();
class ep {
    reset() {
        this.actionsToFlush.clear(), this.waitingActionsToFlush.clear(), (this.isDispatching = !1), (this.timeout = null), null != this.timeout && clearTimeout(this.timeout), (this.requestIdleCallback = null), null != this.requestIdleCallback && cancelIdleCallback(this.requestIdleCallback);
    }
    enqueueWaitingActions() {
        let e = new Set([...this.waitingActionsToFlush]);
        for (let n of (this.waitingActionsToFlush.clear(), e)) this.queueDispatch(n);
    }
    constructor() {
        en(this, 'isDispatching', !1),
            en(this, 'timeout', void 0),
            en(this, 'requestIdleCallback', void 0),
            en(this, 'actionsToFlush', new Set()),
            en(this, 'waitingActionsToFlush', new Set()),
            en(this, 'flush', () => {
                if ((null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)), null != this.requestIdleCallback && (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)), !ea())) {
                    this.actionsToFlush.clear();
                    return;
                }
                this.actionsToFlush.size > 0 &&
                    (U.lW({
                        type: ee.BmY.DISPATCH,
                        pid: null,
                        token: null,
                        payloads: Array.from(this.actionsToFlush)
                    }),
                    this.actionsToFlush.clear()),
                    this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions();
            }),
            en(this, 'dispatchPayloads', (e) => {
                (this.isDispatching = !0), e.forEach((e) => R.Z.dispatch(e)), (this.isDispatching = !1);
            }),
            en(
                this,
                'queueDispatch',
                (e) =>
                    !(!ea() || e_.has(e.type)) &&
                    (this.isDispatching
                        ? (this.waitingActionsToFlush.add(e), !1)
                        : ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
                              (e = {
                                  ...e,
                                  settings: {
                                      type: e.settings.type,
                                      proto: (0, Y.cv)(e.settings.type, e.settings.proto)
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
let eh = new ep(),
    e_ = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_MFA_FAILURE', 'LOGIN_MFA_SMS', 'LOGIN_MFA_SMS_REQUEST_SUCCESS', 'LOGIN_MFA_SMS_FAILURE', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'REGISTER_FAILURE', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
    em = new Set(),
    eg = !1,
    eE = new B.Z('OverlayBridgeStore'),
    ev = 'none',
    ey = (0, A.H)({
        onContention: (e, n) => eE.verbose('overlayLock contention: lastMutexCall '.concat(ev)),
        onContentionResolved: () => eE.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, n) => {
            let r = 'overlayLock: lastMutexCall '.concat(ev, '}');
            eE.error(r),
                q.default.track(ee.rMx.OVERLAY_HOOK_RESULT, {
                    success: !1,
                    error_description: r,
                    overlay_method: P.gl[P.gl.Hook]
                });
        },
        timeoutMs: 180000
    });
function eb(e, n) {
    return function () {
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        ey(() => n(...i), e);
    };
}
function eI() {
    try {
        var e;
        let n = null === M.Z || void 0 === M.Z ? void 0 : null === (e = M.Z.fileManager) || void 0 === e ? void 0 : e.uploadDiscordHookCrashes;
        if (null == n) return;
        n().then((e) => {
            if (!!Array.isArray(e) && 0 !== e.length)
                for (let u of (eE.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                    var n, r, i, a, o, s, l;
                    if (null == u) continue;
                    let e = null != u.processName ? K.Z.getGameByExecutable(u.processName) : null;
                    q.default.track(ee.rMx.OVERLAY_HOOK_CRASHED, {
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
        eE.error('tryUploadDiscordHookCrashes', e);
    }
}
function eT(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = ei.get(e);
    if ((null === r || i === r) && i !== n) {
        null == n ? ei.delete(e) : ei.set(e, n), (null == n || 'CRASHED' === n) && ((eu = null), eI());
        ef.delete(e),
            eE.info(
                'pid='
                    .concat(e, ' status transition ')
                    .concat(null != i ? i : 'DISCONNECTED', ' -> ')
                    .concat(null != n ? n : 'DISCONNECTED'),
                ei
            );
    }
}
async function eS(e) {
    try {
        if (J.ZP.supportsFeature(ee.eRX.CREATE_HOST_ON_ATTACH)) {
            if (ei.size > 0) {
                ev = 'reconcile.getOverlayURL';
                let n = await eD();
                (ev = 'reconcile.createHostProcess'), e.createHostProcess(n, eP, ew);
            } else (ev = 'reconcile.destroyHostProcess'), e.destroyHostProcess(), eO((0, $.QF)());
        } else if (eo) {
            let n = await eD();
            e.createHostProcess(n, eP, ew);
        } else e.destroyHostProcess(), eO((0, $.QF)());
    } catch (n) {
        eE.error('reconcileHostProcess', n), eO((0, $.QF)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            eE.error('reconcileHostProcess: destroyHostProcess', e);
        }
    }
}
async function eA(e) {
    !ey.isMutexHeld() && eE.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let n = ei.get(e);
    if (null != n) {
        eE.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(n));
        return;
    }
    await x.Z.updateOverlayState(e, P.mM.WAITING_FOR_OVERLAY_OPEN), (ev = 'attach.getOverlayModule');
    let r = await eL();
    (ev = 'attach.transitionOverlayPIDStatus'), eT(e, 'ATTACHING'), (ev = 'attach.attachToProcess');
    let i = await k.YT(e);
    null == i ? ((ev = 'attach.transitionOverlayPIDStatus (CONNECTING)'), eT(e, 'CONNECTING', 'ATTACHING'), (ev = 'attach.reconcileHostProcess'), await eS(r), r.connectProcess(e)) : ((ev = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), eT(e, 'HOOK_FAILED', 'ATTACHING'), eE.warn('Could not hook to pid='.concat(e, ', error=').concat(i)));
}
async function eC(e) {
    if ((!ey.isMutexHeld() && eE.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !ei.has(e))) {
        eE.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    eT(e, 'DISCONNECTING');
    try {
        ev = 'detach.getOverlayModule';
        let n = await eL();
        e !== $.Js && ((ev = 'detach.cancelAttachToProcess'), await k.pn(e), await (0, N._v)(16), (ev = 'detach.disconnectProcess'), await n.disconnectProcess(e)), (ev = 'detach.transitionOverlayPIDStatus'), eT(e, null), (ev = 'detach.reconcileHostProcess'), await eS(n);
    } catch (n) {
        eE.error('Error during overlay detachment for pid '.concat(e, ':'), n), eT(e, null);
    }
}
async function eN(e) {
    var n, r;
    if (
        (eE.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: el,
            action: e
        }),
        !ey.isMutexHeld() && eE.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !el && null != e)
    ) {
        eE.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
        return;
    }
    async function i(e) {
        if (!(e in er)) return;
        let n = er[e];
        delete er[e];
        try {
            await n.deconstructor(), ec.delete(e);
        } catch (r) {
            eE.error('Failed to deconstruct tracked game '.concat(e), r), (er[e] = n), ec.add(e);
        }
    }
    let a = !1;
    if (null == e || !eo) {
        for (let n of (eE.verbose('updateIntendedOverlayPIDs: Removing all.', er, e), Object.keys(er))) await i(Number(n)), (a = !0);
        return;
    }
    for (let r of ec) {
        if (null === (n = e.added) || void 0 === n ? void 0 : n.includes(r)) {
            eE.warn('updateIntendedOverlayPIDs: Failed PID was re-added?');
            continue;
        }
        eE.verbose('updateIntendedOverlayPIDs: retrying failed overlay pid '.concat(r)), await i(r), (a = !0);
    }
    for (let n of null !== (r = e.added) && void 0 !== r ? r : []) {
        let r = V.Z.getTrackedGameByPid(n);
        if (null == r) {
            eE.error('updateIntendedOverlayPIDs: Tracked game not found for pid='.concat(n));
            continue;
        }
        if ((eE.verbose('updateIntendedOverlayPIDs: newGame', r), r.enabled))
            switch ((r.pid in er && eE.error('Unexpected. '.concat(r.pid, ' is being added twice?'), er, e), r.overlayMethod)) {
                case P.gl.Hook:
                    !ei.has(r.pid) && (await eA(r.pid)),
                        (er[r.pid] = {
                            method: r.overlayMethod,
                            deconstructor: async () => {
                                await eC(r.pid);
                            }
                        }),
                        (a = !0);
                    break;
                case P.gl.OutOfProcess:
                    eE.error('updateIntendedOverlayPIDs: out of process called for hook overlay', r);
                    break;
                case P.gl.Disabled:
                    eE.verbose('updateIntendedOverlayPIDs: disabled', r);
                    break;
                default:
                    eE.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(r.overlayMethod), r);
            }
    }
    for (let n of e.removed) eE.verbose('updateIntendedOverlayPIDs: removedGame', n), await i(n), (a = !0);
    a && e4.emitChange();
}
let eR = eb('updateIntendedOverlayPIDs', (e) => (eE.info('updateIntendedOverlayPIDs', e), eN(e))),
    eO = eb('clearPID', (e) => {
        if (null == e) return (0, $.tB)($.R2);
        if (!H.ZP.isOverlayV3EnabledForPID(e)) (0, $.tB)($.R2);
    });
function eD() {
    return new Promise((e) => {
        e4.addConditionalChangeListener(() => {
            if (null != i) return e(i), !1;
        });
    });
}
let eL = (() => {
        let e = null;
        function n(e) {
            for (let n of ['createHostProcess', 'connectProcess', 'disconnectProcess', 'destroyHostProcess']) null == e[n] && (eE.info('polyfilling OverlayModule.'.concat(n, '(); Overlay module is probably out of date.')), (e[n] = () => void 0));
            return e;
        }
        async function r() {
            if (!et.iP) throw (eE.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay is not supported on this platform.'));
            try {
                return await J.ZP.ensureModule('discord_overlay2'), n(J.ZP.requireModule('discord_overlay2'));
            } catch (e) {
                throw (eE.error('failed ensuring discord_overlay2', e), e);
            }
        }
        return () => (null == e && (e = r()), e);
    })(),
    ex = eb('setOverlayEnabled', async (e, n, r) => {
        if (!et.iP) return;
        let i = Z.v.global;
        if (eo === e && es === n && i === r) {
            eE.verbose('setOverlayEnabled: no change', {
                newOverlayEnabled: e,
                newLegacyEnabled: n,
                newGlobal: r
            });
            return;
        }
        (eo = e), (es = n), e4.emitChange();
        let a = await eL();
        !eo && (await eN(void 0)), await eS(a);
    });
function ew(e) {
    x.Z.setFocusedPID(0 === e ? null : e);
}
function eP(e, n, r) {
    var i;
    let a = null === (i = G.ZP.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
        o = K.Z.getGameByName(a),
        s = {
            game_name: a,
            game_id: null == o ? null : o.id,
            success: n,
            overlay_method: P.gl[P.gl.Hook],
            ...r
        };
    (0, L.te)($.qU, z.Z.getDefaultLayout($.qU), 0, {
        width: r.graphics_width,
        height: r.graphics_height
    }),
        x.Z.updateOverlayState(e, P.mM.OVERLAY_RENDERING),
        q.default.track(ee.rMx.OVERLAY_HOOK_RESULT, s),
        eE.info('Overlay connection to '.concat(e, ' ').concat(n ? 'succeeded' : 'failed'), s),
        n ? eT(e, 'CONNECTED', 'CONNECTING') : eT(e, 'CONNECT_FAILED', 'CONNECTING');
}
function eM() {
    let e = W.default.getToken(),
        n = W.default.getId();
    if (null != e)
        U.lW({
            type: ee.BmY.DISPATCH,
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
function ek(e) {
    return null != e && (0, Q.y)(e, ed);
}
function eU(e) {
    switch ((eg && eE.info('[app data received]', e), e.type)) {
        case ee.BmY.CONNECT:
            let n = W.default.getToken();
            if (null == n) break;
            (0, L.te)($.qU, z.Z.getDefaultLayout($.qU), 0),
                Promise.all([(0, F.Z)(n, e.pid), C.ZP.PersistedStore.getAllStates()]).then((n) => {
                    let [r, i] = n,
                        { pid: a, token: o } = e;
                    U.lW({
                        type: ee.BmY.STORAGE_SYNC,
                        pid: a,
                        token: o,
                        states: i
                    }),
                        U.lW({
                            type: ee.BmY.DISPATCH,
                            pid: a,
                            token: o,
                            payloads: [r]
                        }),
                        eT(a, 'READY'),
                        (0, $.tB)(a),
                        x.Z.overlayReady(a);
                });
            break;
        case ee.BmY.DISPATCH:
            null != e.payloads && eh.dispatchPayloads(e.payloads);
            break;
        case ee.BmY.LOG_MESSAGES:
            eE.info('[overlay data received]', e.payload);
    }
}
async function eB(e, n) {
    let r = await eL(),
        i = null != n ? n : eu;
    if (null != i && 'DISCONNECTING' === ei.get(i)) {
        eE.warn('Overlay module is no longer valid during input lock');
        return;
    }
    try {
        null != i &&
            i !== $.Js &&
            r.sendCommand(i, {
                message: 'intercept_input',
                intercept: !e
            });
    } catch (e) {
        eE.error('Error during input lock', e);
    }
}
function eG(e, n) {
    e ? setTimeout(() => eB(e, n), 200) : eB(e, n);
}
let eZ = null;
function eF(e) {
    let { locked: n, pid: r } = e,
        i = ei.get(r);
    if ((ec.has(r) && eR(void 0), !n && !('READY' === i || 'CRASHED' === i))) return;
    if ((n ? ef.delete(r) : ef.add(r), em.clear(), null == eZ || (clearTimeout(eZ), (eZ = null), !n)))
        n
            ? eG(n, r)
            : (eZ = setTimeout(() => {
                  eG(n, r), (eZ = null);
              }, 100));
}
function eV(e) {
    let { region: n } = e;
    em.add(n), eG(!1, eu);
}
function ej() {
    em.clear(), eG(!0, eu);
}
function eH(e) {
    let { port: n } = e;
    ed = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let r = new URLSearchParams();
    r.append('build_id', '066ddba1b1c641a906c4a180a1ec7cb8e971456a'), r.append('rpc', String(n)), r.append('rpc_auth_token', ed), (i = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(r.toString()));
}
function eY(e) {
    let { channelId: n, ring: r } = e;
    setImmediate(() => {
        w.default.selectPrivateChannel(n), O.Z.call(n, !1, !!r);
    });
}
function eW(e) {
    let { pid: n } = e;
    eu = n;
}
function eK(e) {
    let { pid: n } = e;
    eT(n, 'CRASHED'), eE.verbose('OverlayBridgeStore: handleOverlayCrashed: '.concat(n));
}
function ez() {
    el = !0;
}
function eq() {
    (el = !1), (eu = null), eR(void 0), eE.verbose('OverlayBridgeStore: handleConnectionClosed');
}
function eQ() {
    return !0;
}
function eX(e) {
    let { enabled: n, legacyEnabled: r, global: i } = e;
    return ex(n, r, i), !1;
}
function eJ(e) {
    let { userId: n, sessionId: r, applicationId: i, channelId: a, messageId: o } = e;
    setImmediate(() => {
        D.Z.join({
            userId: n,
            sessionId: r,
            applicationId: i,
            channelId: a,
            messageId: o
        }),
            null != eu && x.Z.setInputLocked(!0, eu);
    });
}
function e$(e) {
    let { normalizedMouseX: n, normalizedMouseY: r } = e;
    setTimeout(() => {
        let e = Math.ceil(n * window.innerWidth),
            i = Math.ceil(r * window.innerHeight),
            a = (0, X.B)('click', e, i);
        (0, X.J)(a, e, i);
    }, 50);
}
function e0(e) {
    return (
        eR({
            added: [],
            removed: []
        }),
        !0
    );
}
function e1(e) {
    return (
        eR({
            added: [],
            removed: []
        }),
        !0
    );
}
function e2(e) {
    eE.verbose('Updating OverlayMethod', {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, j.P_)(e.overlayMethod)
    }),
        e.overlayMethod === P.gl.Hook
            ? eR({
                  added: [e.pid],
                  removed: []
              })
            : eR({
                  added: [],
                  removed: [e.pid]
              });
}
class e3 extends (o = C.ZP.Store) {
    initialize() {
        if (!(!et.iP || __OVERLAY__)) this.waitFor(G.ZP, W.default, H.ZP, V.Z), U.sr(eU, ek), W.default.addChangeListener(eM), ex(Z.v.enabled, Z.v.legacyEnabled, Z.v.global), R.Z.addInterceptor(eh.queueDispatch);
    }
    isInputLocked(e) {
        return V.Z.isOverlayOOPEnabledForPid(e) ? H.ZP.isInputLocked(e) : !ef.has(e);
    }
    DEV_isInputLockedV3(e) {
        return H.ZP.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !ef.has(e);
    }
    isSupported() {
        return !!H.ZP.isOverlayV3Enabled() || et.iP;
    }
    get enabled() {
        return H.ZP.isOverlayV3Enabled() ? H.ZP.enabled : eo;
    }
    get legacyEnabled() {
        return !H.ZP.isOverlayV3Enabled() && es;
    }
    getFocusedPID() {
        let e = H.ZP.getFocusedPID();
        return null != e ? (H.ZP.isOverlayV3EnabledForPID(e) ? e : eu) : eu;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && V.Z.isOverlayOOPEnabledForPid(e);
    }
    isReady(e) {
        return H.ZP.isOverlayV3EnabledForPID(e) ? H.ZP.isReady(e) : 'READY' === ei.get(e);
    }
    isCrashed(e) {
        return !H.ZP.isOverlayV3EnabledForPID(e) && 'CRASHED' === ei.get(e);
    }
    getOverlayPIDStatuses() {
        return ei;
    }
}
en(e3, 'displayName', 'OverlayBridgeStore');
let e4 = new e3(
    R.Z,
    __OVERLAY__
        ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: e$ }
        : {
              CONNECTION_OPEN: ez,
              CONNECTION_CLOSED: eq,
              EXPERIMENT_OVERRIDE_BUCKET: eQ,
              RUNNING_GAME_TOGGLE_OVERLAY: e1,
              RUNNING_GAMES_CHANGE: e0,
              OVERLAY_SET_ENABLED: eX,
              OVERLAY_FOCUSED: eW,
              OVERLAY_SET_INPUT_LOCKED: eF,
              OVERLAY_ACTIVATE_REGION: eV,
              OVERLAY_DEACTIVATE_ALL_REGIONS: ej,
              RPC_SERVER_READY: eH,
              OVERLAY_CALL_PRIVATE_CHANNEL: eY,
              OVERLAY_JOIN_GAME: eJ,
              OVERLAY_CRASHED: eK,
              OVERLAY_UPDATE_OVERLAY_METHOD: e2
          }
);
n.Z = e4;
