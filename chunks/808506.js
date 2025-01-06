let i, a;
r.d(n, {
    Y: function () {
        return eR;
    }
});
var s,
    o,
    l = r(47120);
var u = r(411104);
var c = r(518263);
var d = r(970173);
var f = r(520712);
var _ = r(268111);
var h = r(941497);
var p = r(32026);
var m = r(480839);
var g = r(744285);
var E = r(492257);
var v = r(873817);
var I = r(642549);
var T = r(610138);
var b = r(216116);
var y = r(78328);
var S = r(815648);
var A = r(177593);
var N = r(807864),
    C = r(442837),
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
    (e.ATTACHING = 'ATTACHING'), (e.CONNECTING = 'CONNECTING'), (e.CONNECTED = 'CONNECTED'), (e.READY = 'READY'), (e.CRASHED = 'CRASHED'), (e.CONNECT_FAILED = 'CONNECT_FAILED'), (e.HOOK_FAILED = 'HOOK_FAILED');
})(s || (s = {}));
let er = {},
    ei = new Map(),
    ea = !1,
    es = new Set(),
    eo = !1,
    el = !1,
    eu = !1,
    ec = null,
    ed = new Set(),
    ef = '',
    e_ = new Set(),
    eh = !1,
    ep = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_MFA_FAILURE', 'LOGIN_MFA_SMS', 'LOGIN_MFA_SMS_REQUEST_SUCCESS', 'LOGIN_MFA_SMS_FAILURE', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'REGISTER_FAILURE', 'VERIFY_FAILURE', 'VERIFY_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'MENTION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'MENTION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
    em = new Set(),
    eg = !1,
    eE = new B.Z('OverlayBridgeStore'),
    ev = 'none',
    eI = (0, N.H)({
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
function eT(e, n) {
    return function () {
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        eI(() => n(...i), e);
    };
}
function eb(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = ei.get(e);
    if ((null === r || i === r) && i !== n) {
        if ((null == n ? ei.delete(e) : ei.set(e, n), null == n || 'CRASHED' === n)) {
            var a;
            ec = null;
            let e = null === M.Z || void 0 === M.Z ? void 0 : null === (a = M.Z.fileManager) || void 0 === a ? void 0 : a.uploadDiscordHookCrashes;
            null != e &&
                e().then((e) => {
                    if (!!Array.isArray(e) && 0 !== e.length)
                        for (let u of (eE.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                            var n, r, i, a, s, o, l;
                            if (null == u) continue;
                            let e = null != u.processName ? K.Z.getGameByExecutable(u.processName) : null;
                            q.default.track(ee.rMx.OVERLAY_HOOK_CRASHED, {
                                process_name: null == u ? void 0 : u.processName,
                                game_name: null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : null,
                                game_id: null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : null,
                                minidump_exception_type: null !== (i = u.exceptionString) && void 0 !== i ? i : null,
                                minidump_exception_module_name: null !== (a = u.exceptionModuleName) && void 0 !== a ? a : null,
                                minidump_relative_crash_address: null !== (s = u.relativeCrashAddress) && void 0 !== s ? s : null,
                                minidump_exception_module_version: null !== (o = u.exceptionModuleVersion) && void 0 !== o ? o : null,
                                minidump_exception_module_code_id: null !== (l = u.exceptionModuleCodeId) && void 0 !== l ? l : null
                            });
                        }
                });
        }
        e_.delete(e),
            eE.info(
                'pid='
                    .concat(e, ' status transition ')
                    .concat(null != i ? i : 'DISCONNECTED', ' -> ')
                    .concat(null != n ? n : 'DISCONNECTED'),
                ei
            ),
            (ea = Array.from(ei.values()).some((e) => 'READY' === e));
    }
}
async function ey(e) {
    if (J.ZP.supportsFeature(ee.eRX.CREATE_HOST_ON_ATTACH)) {
        if (ei.size > 0) {
            ev = 'reconcile.getOverlayURL';
            let n = await eR();
            (ev = 'reconcile.createHostProcess'), e.createHostProcess(n, ex, eL);
        } else (ev = 'reconcile.destroyHostProcess'), e.destroyHostProcess();
    } else if (eo) {
        let n = await eR();
        e.createHostProcess(n, ex, eL);
    } else e.destroyHostProcess();
}
async function eS(e) {
    !eI.isMutexHeld() && eE.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let n = ei.get(e);
    if (null != n) {
        eE.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(n));
        return;
    }
    await x.Z.updateOverlayState(e, P.mM.WAITING_FOR_OVERLAY_OPEN), (ev = 'attach.getOverlayModule');
    let r = await eO();
    (ev = 'attach.transitionOverlayPIDStatus'), eb(e, 'ATTACHING'), (ev = 'attach.attachToProcess');
    let i = await k.YT(e);
    null == i ? ((ev = 'attach.transitionOverlayPIDStatus (CONNECTING)'), eb(e, 'CONNECTING', 'ATTACHING'), (ev = 'attach.reconcileHostProcess'), await ey(r), r.connectProcess(e)) : ((ev = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), eb(e, 'HOOK_FAILED', 'ATTACHING'), eE.warn('Could not hook to pid='.concat(e, ', error=').concat(i)));
}
async function eA(e) {
    if ((!eI.isMutexHeld() && eE.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !ei.has(e))) {
        eE.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    ev = 'detach.getOverlayModule';
    let n = await eO();
    (ev = 'detach.transitionOverlayPIDStatus'), eb(e, null), e !== $.Js && ((ev = 'detach.cancelAttachToProcess'), k.pn(e), (ev = 'detach.disconnectProcess'), n.disconnectProcess(e)), (ev = 'detach.reconcileHostProcess'), await ey(n);
}
async function eN(e) {
    var n, r;
    if (
        (eE.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: eu,
            action: e
        }),
        !eI.isMutexHeld() && eE.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !eu && null != e)
    ) {
        eE.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
        return;
    }
    async function i(e) {
        if (!(e in er)) return;
        let n = er[e];
        delete er[e];
        try {
            await n.deconstructor(), ed.delete(e);
        } catch (r) {
            eE.error('Failed to deconstruct tracked game '.concat(e), r), (er[e] = n), ed.add(e);
        }
    }
    let a = !1;
    if (null == e || !eo) {
        for (let n of (eE.verbose('updateIntendedOverlayPIDs: Removing all.', er, e), Object.keys(er))) await i(Number(n)), (a = !0);
        return;
    }
    for (let r of ed) {
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
                    !ei.has(r.pid) && (await eS(r.pid)),
                        (er[r.pid] = {
                            method: r.overlayMethod,
                            deconstructor: async () => {
                                await eA(r.pid);
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
    a && e6.emitChange();
}
let eC = eT('updateIntendedOverlayPIDs', (e) => eN(e));
function eR() {
    return new Promise((e) => {
        e6.addConditionalChangeListener(() => {
            if (null != i) return e(i), !1;
        });
    });
}
let eO = (() => {
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
    eD = eT('setOverlayEnabled', async (e, n, r) => {
        if (!et.iP) return;
        let i = Z.v.global;
        if (eo === e && el === n && i === r) {
            eE.verbose('setOverlayEnabled: no change', {
                newOverlayEnabled: e,
                newLegacyEnabled: n,
                newGlobal: r
            });
            return;
        }
        (eo = e),
            (el = n),
            Z.v.update({
                enabled: e,
                legacyEnabled: n,
                global: r
            }),
            e6.emitChange();
        let a = await eO();
        !eo && (await eN(void 0)), await ey(a);
    });
function eL(e) {
    x.Z.setFocusedPID(0 === e ? null : e);
}
function ex(e, n, r) {
    var i;
    let a = null === (i = G.ZP.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
        s = K.Z.getGameByName(a),
        o = {
            game_name: a,
            game_id: null == s ? null : s.id,
            success: n,
            overlay_method: P.gl[P.gl.Hook],
            ...r
        };
    (0, L.te)($.qU, z.Z.getDefaultLayout($.qU), 0, {
        width: r.graphics_width,
        height: r.graphics_height
    }),
        x.Z.updateOverlayState(e, P.mM.OVERLAY_RENDERING),
        q.default.track(ee.rMx.OVERLAY_HOOK_RESULT, o),
        eE.info('Overlay connection to '.concat(e, ' ').concat(n ? 'succeeded' : 'failed'), o),
        n ? eb(e, 'CONNECTED', 'CONNECTING') : eb(e, 'CONNECT_FAILED', 'CONNECTING');
}
function ew() {
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
function eP(e) {
    (eh = !0), e.forEach((e) => R.Z.dispatch(e)), (eh = !1);
}
function eM(e) {
    return (
        !(eh || !ea || ep.has(e.type)) &&
        ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
            (e = {
                ...e,
                settings: {
                    type: e.settings.type,
                    proto: (0, Y.cv)(e.settings.type, e.settings.proto)
                }
            }),
        es.add(e),
        null == a && (a = setTimeout(ek, 1)),
        !1)
    );
}
function ek() {
    if ((null != a && (clearTimeout(a), (a = null)), !ea)) {
        es.clear();
        return;
    }
    es.size > 0 &&
        (U.lW({
            type: ee.BmY.DISPATCH,
            pid: null,
            token: null,
            payloads: Array.from(es)
        }),
        es.clear());
}
function eU(e) {
    return null != e && (0, Q.y)(e, ef);
}
function eB(e) {
    switch ((eg && eE.info('[app data received]', e), e.type)) {
        case ee.BmY.CONNECT:
            let n = W.default.getToken();
            if (null == n) break;
            (0, L.te)($.qU, z.Z.getDefaultLayout($.qU), 0),
                Promise.all([(0, F.Z)(n, e.pid), C.ZP.PersistedStore.getAllStates()]).then((n) => {
                    let [r, i] = n,
                        { pid: a, token: s } = e;
                    U.lW({
                        type: ee.BmY.STORAGE_SYNC,
                        pid: a,
                        token: s,
                        states: i
                    }),
                        U.lW({
                            type: ee.BmY.DISPATCH,
                            pid: a,
                            token: s,
                            payloads: [r]
                        }),
                        eb(a, 'READY'),
                        x.Z.overlayReady(a);
                });
            break;
        case ee.BmY.DISPATCH:
            null != e.payloads && eP(e.payloads);
            break;
        case ee.BmY.LOG_MESSAGES:
            eE.info('[overlay data received]', e.payload);
    }
}
async function eG(e) {
    let n = await eO();
    null != ec &&
        ec !== $.Js &&
        n.sendCommand(ec, {
            message: 'intercept_input',
            intercept: !e
        });
}
function eZ(e) {
    e ? setTimeout(() => eG(e), 200) : eG(e);
}
let eF = null;
function eV(e) {
    let { locked: n, pid: r } = e,
        i = ei.get(r);
    if ((ed.has(r) && eC(void 0), !n && !('READY' === i || 'CRASHED' === i))) return;
    if ((n ? e_.delete(r) : e_.add(r), em.clear(), null == eF || (clearTimeout(eF), (eF = null), !n)))
        n
            ? eZ(n)
            : (eF = setTimeout(() => {
                  eZ(n), (eF = null);
              }, 100));
}
function ej(e) {
    let { region: n } = e;
    em.add(n), eZ(!1);
}
function eH() {
    em.clear(), eZ(!0);
}
function eY(e) {
    let { port: n } = e;
    ef = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let r = new URLSearchParams();
    r.append('build_id', '128e3b1b57a8e2bbd7f6d7ad9d9e79a1c34fe0de'), r.append('rpc', String(n)), r.append('rpc_auth_token', ef), (i = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(r.toString()));
}
function eW(e) {
    let { channelId: n, ring: r } = e;
    setImmediate(() => {
        w.default.selectPrivateChannel(n), O.Z.call(n, !1, !!r);
    });
}
function eK(e) {
    let { pid: n } = e;
    ec = n;
}
function ez(e) {
    let { pid: n } = e;
    eb(n, 'CRASHED'), eE.verbose('OverlayBridgeStore: handleOverlayCrashed: '.concat(n));
}
function eq() {
    eu = !0;
}
function eQ() {
    (eu = !1), (ec = null), eC(void 0), eE.verbose('OverlayBridgeStore: handleConnectionClosed');
}
function eX() {
    return !0;
}
function eJ(e) {
    let { enabled: n, legacyEnabled: r, global: i } = e;
    return eD(n, r, i), !1;
}
function e$(e) {
    let { userId: n, sessionId: r, applicationId: i, channelId: a, messageId: s } = e;
    setImmediate(() => {
        D.Z.join({
            userId: n,
            sessionId: r,
            applicationId: i,
            channelId: a,
            messageId: s
        }),
            null != ec && x.Z.setInputLocked(!0, ec);
    });
}
function e0(e) {
    let { normalizedMouseX: n, normalizedMouseY: r } = e;
    setTimeout(() => {
        let e = Math.ceil(n * window.innerWidth),
            i = Math.ceil(r * window.innerHeight),
            a = (0, X.B)('click', e, i);
        (0, X.J)(a, e, i);
    }, 50);
}
function e1(e) {
    return (
        eC({
            added: [],
            removed: []
        }),
        !0
    );
}
function e2(e) {
    return (
        eC({
            added: [],
            removed: []
        }),
        !0
    );
}
function e3(e) {
    eE.verbose('Updating OverlayMethod', {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, j.P_)(e.overlayMethod)
    }),
        e.overlayMethod === P.gl.Hook
            ? eC({
                  added: [e.pid],
                  removed: []
              })
            : eC({
                  added: [],
                  removed: [e.pid]
              });
}
class e4 extends (o = C.ZP.Store) {
    initialize() {
        if (!(!et.iP || __OVERLAY__)) this.waitFor(G.ZP, W.default, H.Z, V.Z), U.sr(eB, eU), W.default.addChangeListener(ew), eD(Z.v.enabled, Z.v.legacyEnabled, Z.v.global), R.Z.addInterceptor(eM);
    }
    isInputLocked(e) {
        return H.Z.isOverlayV3EnabledForPID(e) ? H.Z.isInputLocked(e) : !e_.has(e);
    }
    isSupported() {
        return !!H.Z.isOverlayV3Enabled() || et.iP;
    }
    get enabled() {
        return H.Z.isOverlayV3Enabled() ? H.Z.enabled : eo;
    }
    get legacyEnabled() {
        return !H.Z.isOverlayV3Enabled() && el;
    }
    getFocusedPID() {
        let e = H.Z.getFocusedPID();
        return null != e ? (H.Z.isOverlayV3EnabledForPID(e) ? e : ec) : ec;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && V.Z.isOverlayOOPEnabledForPid(e);
    }
    isReady(e) {
        return H.Z.isOverlayV3EnabledForPID(e) ? H.Z.isReady(e) : 'READY' === ei.get(e);
    }
    isCrashed(e) {
        return !H.Z.isOverlayV3EnabledForPID(e) && 'CRASHED' === ei.get(e);
    }
    getOverlayPIDStatuses() {
        return ei;
    }
}
en(e4, 'displayName', 'OverlayBridgeStore');
let e6 = new e4(
    R.Z,
    __OVERLAY__
        ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: e0 }
        : {
              CONNECTION_OPEN: eq,
              CONNECTION_CLOSED: eQ,
              EXPERIMENT_OVERRIDE_BUCKET: eX,
              RUNNING_GAME_TOGGLE_OVERLAY: e2,
              RUNNING_GAMES_CHANGE: e1,
              OVERLAY_SET_ENABLED: eJ,
              OVERLAY_FOCUSED: eK,
              OVERLAY_SET_INPUT_LOCKED: eV,
              OVERLAY_ACTIVATE_REGION: ej,
              OVERLAY_DEACTIVATE_ALL_REGIONS: eH,
              RPC_SERVER_READY: eY,
              OVERLAY_CALL_PRIVATE_CHANNEL: eW,
              OVERLAY_JOIN_GAME: e$,
              OVERLAY_CRASHED: ez,
              OVERLAY_UPDATE_OVERLAY_METHOD: e3
          }
);
n.Z = e6;
