let r;
n.d(t, {
    Y4: () => ey,
    ZP: () => eJ
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
    P = n(158776),
    D = n(626135),
    w = n(866119),
    L = n(671999),
    x = n(998502),
    M = n(145597),
    j = n(372679),
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
function F(e, t) {
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
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = {},
    H = !1,
    W = new Map(),
    Y = () => Array.from(W.values()).some((e) => 'READY' === e),
    K = !1,
    z = !1,
    q = !1,
    Q = null,
    X = new Set(),
    J = '',
    $ = new Set();
class ee {
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
                if ((null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)), null != this.requestIdleCallback && (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)), !Y())) {
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
                    !(!Y() || en.has(e.type)) &&
                    (this.isDispatching
                        ? this.waitingActionsToFlush.add(e)
                        : ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
                              (e = V(B({}, e), {
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
let et = new ee(),
    en = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
    er = new Set(),
    ei = !1,
    eo = new E.Z('OverlayBridgeStore'),
    ea = {};
function es(e) {
    var t;
    return null !== (t = ea[e]) && void 0 !== t ? t : {};
}
function el(e, t) {
    var n, r;
    let i = null === (n = ea[e]) || void 0 === n ? void 0 : n.error,
        o = null === (r = ea[e]) || void 0 === r ? void 0 : r.error_description;
    (ea[e] = B({}, ea[e], t)), null != i && (ea[e].error = i), null != o && (ea[e].error_description = o);
}
function ec(e) {
    var t, n;
    if (null != ea[e]) return;
    let r = b.ZP.getGameForPID(e);
    ea[e] = {
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
let eu = 'none',
    ed = (0, o.H)({
        onContention: (e, t) => eo.verbose('overlayLock contention: lastMutexCall '.concat(eu)),
        onContentionResolved: () => eo.verbose('overlayLock contention: resolved.'),
        onTimeout: (e, t) => {
            let n = 'overlayLock: lastMutexCall '.concat(eu, '}');
            eo.error(n);
            let r = es((0, M.QF)());
            el(
                (0, M.QF)(),
                V(B({}, r), {
                    error_description: n,
                    success: !1
                })
            ),
                D.default.track(k.rMx.OVERLAY_HOOK_RESULT, es((0, M.QF)()));
        },
        timeoutMs: 180000
    });
function ef(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        ed(() => t(...r), e);
    };
}
function ep() {
    try {
        var e;
        let t = null === h.Z || void 0 === h.Z ? void 0 : null === (e = h.Z.fileManager) || void 0 === e ? void 0 : e.uploadDiscordHookCrashes;
        if (null == t) return;
        t().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let l of (eo.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
                    var t, n, r, i, o, a, s;
                    if (null == l) continue;
                    let e = null != l.processName ? C.Z.getGameByExecutable(l.processName) : null;
                    D.default.track(k.rMx.OVERLAY_HOOK_CRASHED, {
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
        eo.error('tryUploadDiscordHookCrashes', e);
    }
}
function e_(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = W.get(e);
    (null === n || r === n) &&
        r !== t &&
        (null == t ? W.delete(e) : W.set(e, t),
        (null == t || 'CRASHED' === t) && ((Q = null), ep()),
        $.delete(e),
        eo.info(
            'pid='
                .concat(e, ' status transition ')
                .concat(null != r ? r : 'DISCONNECTED', ' -> ')
                .concat(null != t ? t : 'DISCONNECTED'),
            W
        ));
}
async function eh(e) {
    try {
        if (x.ZP.supportsFeature(k.eRX.CREATE_HOST_ON_ATTACH)) {
            if (W.size > 0) {
                eu = 'reconcile.getOverlayURL';
                let t = await ey();
                (eu = 'reconcile.createHostProcess'), e.createHostProcess(t, eI, eS);
            } else (eu = 'reconcile.destroyHostProcess'), e.destroyHostProcess(), eb((0, M.QF)());
        } else if (K) {
            let t = await ey();
            e.createHostProcess(t, eI, eS);
        } else e.destroyHostProcess(), eb((0, M.QF)());
    } catch (t) {
        eo.error('reconcileHostProcess', t), eb((0, M.QF)());
        try {
            e.destroyHostProcess();
        } catch (e) {
            eo.error('reconcileHostProcess: destroyHostProcess', e);
        }
    }
}
async function em(e) {
    var t;
    ed.isMutexHeld() || eo.error('_attachPIDMustBeLocked: overlayMutex is not held.', e);
    let n = null !== (t = es(e).mounting_started_at) && void 0 !== t ? t : new Date().getTime();
    el(e, { mounting_started_at: n });
    let r = W.get(e);
    if (null != r) {
        eo.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(r));
        return;
    }
    await f.Z.updateOverlayState(e, _.mM.WAITING_FOR_OVERLAY_OPEN), (eu = 'attach.getOverlayModule');
    let i = await (0, j.K)();
    if (null == i) {
        eo.error('Trying to attach to pid='.concat(e, ', but overlay module failed loaded'));
        return;
    }
    (eu = 'attach.transitionOverlayPIDStatus'), e_(e, 'ATTACHING'), (eu = 'attach.attachToProcess');
    let o = await m.YT(e);
    null == o ? ((eu = 'attach.transitionOverlayPIDStatus (CONNECTING)'), e_(e, 'CONNECTING', 'ATTACHING'), (eu = 'attach.reconcileHostProcess'), await eh(i), i.connectProcess(e)) : ((eu = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), e_(e, 'HOOK_FAILED', 'ATTACHING'), eo.warn('Could not hook to pid='.concat(e, ', error=').concat(o)));
}
async function eg(e) {
    if ((ed.isMutexHeld() || eo.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !W.has(e))) {
        eo.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    e_(e, 'DISCONNECTING');
    try {
        eu = 'detach.getOverlayModule';
        let t = await (0, j.K)();
        if (null == t) {
            eo.error('Trying to detach from pid='.concat(e, ', but overlay module failed loaded'));
            return;
        }
        e !== M.Js && ((eu = 'detach.cancelAttachToProcess'), await m.pn(e), await (0, s._v)(16), (eu = 'detach.disconnectProcess'), await t.disconnectProcess(e)), (eu = 'detach.transitionOverlayPIDStatus'), e_(e, null), (eu = 'detach.reconcileHostProcess'), await eh(t);
    } catch (t) {
        eo.error('Error during overlay detachment for pid '.concat(e, ':'), t), e_(e, null);
    }
}
async function eE(e) {
    var t, n;
    if (
        (eo.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: q,
            action: e
        }),
        ed.isMutexHeld() || eo.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !q && null != e)
    ) {
        eo.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
        return;
    }
    async function r(e) {
        if (!(e in Z)) return;
        let t = Z[e];
        delete Z[e];
        try {
            await t.deconstructor(), X.delete(e);
        } catch (n) {
            eo.error('Failed to deconstruct tracked game '.concat(e), n), (Z[e] = t), X.add(e);
        }
    }
    let i = !1;
    if (null == e || !K) {
        for (let t of (eo.verbose('updateIntendedOverlayPIDs: Removing all.', Z, e), Object.keys(Z))) await r(Number(t)), (i = !0);
        return;
    }
    for (let n of X) {
        if (null === (t = e.added) || void 0 === t ? void 0 : t.includes(n)) {
            eo.warn('updateIntendedOverlayPIDs: Failed PID was re-added?');
            continue;
        }
        eo.verbose('updateIntendedOverlayPIDs: retrying failed overlay pid '.concat(n)), await r(n), (i = !0);
    }
    for (let t of null !== (n = e.added) && void 0 !== n ? n : []) {
        let n = S.default.getTrackedGameByPid(t);
        if (null == n) {
            eo.error('updateIntendedOverlayPIDs: Tracked game not found for pid='.concat(t));
            continue;
        }
        if ((eo.verbose('updateIntendedOverlayPIDs: newGame', n), n.legacyEnabled))
            switch ((n.pid in Z ? eo.error('Unexpected. '.concat(n.pid, ' is being added twice?'), Z, e) : ec(n.pid), n.overlayMethod)) {
                case _.gl.Hook:
                    let r = new Date().getTime();
                    el(n.pid, {
                        mounting_started_at: r,
                        fullscreen_type: await (0, I.hj)(n.pid, 0)
                    }),
                        W.has(n.pid) || (await em(n.pid)),
                        (Z[n.pid] = {
                            method: n.overlayMethod,
                            deconstructor: async () => {
                                await eg(n.pid);
                            }
                        }),
                        (i = !0);
                    break;
                case _.gl.OutOfProcess:
                case _.gl.OutOfProcessLimitedInteraction:
                    eo.error('updateIntendedOverlayPIDs: out of process called for hook overlay', n);
                    break;
                case _.gl.Disabled:
                    eo.verbose('updateIntendedOverlayPIDs: disabled', n);
                    break;
                default:
                    eo.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(n.overlayMethod), n);
            }
    }
    for (let t of e.removed) eo.verbose('updateIntendedOverlayPIDs: removedGame', t), await r(t), (i = !0);
    i && eX.emitChange();
}
let ev = ef('updateIntendedOverlayPIDs', (e) => (eo.info('updateIntendedOverlayPIDs', e), eE(e))),
    eb = ef('clearPID', (e) => {
        if (null == e) return (0, M.tB)(M.R2);
        !T.ZP.isOverlayV3EnabledForPID(e) && (0, M.tB)(M.R2);
    });
function ey() {
    return new Promise((e) => {
        eX.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let eO = ef('setOverlayEnabled', async (e) => {
    if (!U.iP) return;
    if (K === e) {
        eo.verbose('setOverlayEnabled: no change', { newOverlayEnabled: e });
        return;
    }
    (K = e), eX.emitChange();
    let t = await (0, j.K)();
    if (null == t) {
        eo.error('setOverlayEnabled: overlay module failed loaded');
        return;
    }
    K || (await eE(void 0)), await eh(t);
});
function eS(e) {
    f.Z.setFocusedPID(0 === e ? null : e);
}
function eI(e, t, n) {
    var r;
    let i = null === (r = b.ZP.getGameForPID(e)) || void 0 === r ? void 0 : r.name,
        o = C.Z.getGameByName(i),
        a = B(
            {
                game_name: i,
                game_id: null == o ? null : o.id,
                success: t,
                overlay_method: _.gl[_.gl.Hook]
            },
            n
        );
    el(e, B({}, a)),
        (0, d.te)(M.qU, R.Z.getDefaultLayout(M.qU), 0, {
            width: n.graphics_width,
            height: n.graphics_height
        }),
        f.Z.updateOverlayState(e, _.mM.OVERLAY_RENDERING);
    let s = es(e);
    D.default.track(k.rMx.OVERLAY_HOOK_RESULT, s), eo.info('Overlay connection to '.concat(e, ' ').concat(t ? 'succeeded' : 'failed'), s), t ? e_(e, 'CONNECTED', 'CONNECTING') : e_(e, 'CONNECT_FAILED', 'CONNECTING');
}
function eT() {
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
function eN(e) {
    return null != e && (0, w.y)(e, J);
}
function eA(e) {
    switch ((ei && eo.info('[app data received]', e), e.type)) {
        case k.BmY.CONNECT:
            let t = A.default.getToken();
            if (null == t) break;
            (0, d.te)(M.qU, R.Z.getDefaultLayout(M.qU), 0),
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
                        e_(i, 'READY'),
                        (0, M.tB)(i),
                        f.Z.overlayReady(i);
                    let a = es(i);
                    el(i, V(B({}, a), { total_mount_time_ms: null != a.mounting_started_at ? new Date().getTime() - a.mounting_started_at : void 0 }));
                });
            break;
        case k.BmY.DISPATCH:
            null != e.payloads && et.dispatchPayloads(e.payloads);
            break;
        case k.BmY.LOG_MESSAGES:
            eo.info('[overlay data received]', e.payload);
    }
}
async function eC(e, t) {
    let n = await (0, j.K)();
    if (null == n) {
        eo.error('setInputLocked: overlay module failed loaded');
        return;
    }
    let r = null != t ? t : Q;
    if (null != r && 'DISCONNECTING' === W.get(r)) {
        eo.warn('Overlay module is no longer valid during input lock');
        return;
    }
    try {
        null != r &&
            r !== M.Js &&
            n.sendCommand(r, {
                message: 'intercept_input',
                intercept: !e
            });
    } catch (e) {
        eo.error('Error during input lock', e);
    }
}
function eR(e, t) {
    e ? setTimeout(() => eC(e, t), 200) : eC(e, t);
}
let eP = null;
function eD(e) {
    let { locked: t, pid: n } = e,
        r = W.get(n);
    if ((X.has(n) && ev(void 0), null != r && null != Z[n] && (t || 'READY' === r || 'CRASHED' === r)))
        t ? $.delete(n) : $.add(n),
            er.clear(),
            (null == eP || (clearTimeout(eP), (eP = null), !t)) &&
                (t
                    ? eR(t, n)
                    : (eP = setTimeout(() => {
                          eR(t, n), (eP = null);
                      }, 100)));
}
function ew(e) {
    let { region: t } = e;
    er.add(t), eR(!1, Q);
}
function eL() {
    er.clear(), eR(!0, Q);
}
function ex(e) {
    let { port: t } = e;
    J = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
    let n = new URLSearchParams();
    n.append('build_id', 'd9ec9057b1c2ecb3b6d8a801a57d178acdf1573f'), n.append('rpc', String(t)), n.append('rpc_auth_token', J), (r = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(n.toString()));
}
function eM(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        p.default.selectPrivateChannel(t), c.Z.call(t, !1, !!n);
    });
}
function ej(e) {
    let { pid: t } = e;
    Q = t;
}
function ek(e) {
    var t;
    let { pid: n, error: r } = e;
    e_(n, 'CRASHED'),
        el(n, {
            renderer_crash_count: (null !== (t = es(n).renderer_crash_count) && void 0 !== t ? t : 0) + 1,
            error: r instanceof Error ? r.message : r,
            error_description: r instanceof Error ? r.stack : void 0
        }),
        eo.verbose('OverlayBridgeStore: handleOverlayCrashed: '.concat(n));
}
function eU() {
    (q = !0), (H = !1), eK();
}
function eG() {
    (q = !1), (Q = null), ev(void 0), eo.verbose('OverlayBridgeStore: handleConnectionClosed');
}
function eB() {
    return !0;
}
function eF(e) {
    let { legacyEnabled: t } = e;
    return eO(t), !1;
}
function eV(e) {
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
            null != Q && f.Z.setInputLocked(!0, Q);
    });
}
function eZ(e) {
    let { normalizedMouseX: t, normalizedMouseY: n } = e;
    setTimeout(() => {
        let e = Math.ceil(t * window.innerWidth),
            r = Math.ceil(n * window.innerHeight),
            i = (0, L.B)('click', e, r);
        (0, L.J)(i, e, r);
    }, 50);
}
function eH(e) {
    return (
        ev({
            added: [],
            removed: []
        }),
        !0
    );
}
function eW(e) {
    return (
        ev({
            added: [],
            removed: []
        }),
        !0
    );
}
function eY(e) {
    eo.verbose('Updating OverlayMethod', {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, I.P_)(e.overlayMethod)
    }),
        e.overlayMethod === _.gl.Hook
            ? ev({
                  added: [e.pid],
                  removed: []
              })
            : ev({
                  added: [],
                  removed: [e.pid]
              });
}
function eK() {
    v.Z.hasLoadedExperiments && !H && ((H = !0), eO(y.v.legacyEnabled));
}
function ez() {
    H = !1;
}
function eq() {
    H = !1;
}
class eQ extends (i = a.ZP.Store) {
    initialize() {
        !(!U.iP || __OVERLAY__) && (this.waitFor(b.ZP, v.Z, A.default, T.ZP, S.default), this.syncWith([v.Z], eK), g.sr(eA, eN), A.default.addChangeListener(eT), l.Z.addInterceptor(et.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return S.default.isOverlayOOPEnabledForPid(e) ? T.ZP.isInputLocked(e) : !$.has(e);
    }
    DEV_isInputLockedV3(e) {
        return T.ZP.isInputLocked(e);
    }
    DEV_isInputLocked(e) {
        return !$.has(e);
    }
    isSupported() {
        return U.iP || !1;
    }
    get enabled() {
        return T.ZP.isOverlayV3Enabled() ? T.ZP.enabled : K;
    }
    get legacyEnabled() {
        return !T.ZP.isOverlayV3Enabled() && z;
    }
    getAnyGlobalEnabledOverlay() {
        return S.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = T.ZP.getFocusedPID();
        return null != e && T.ZP.isOverlayV3EnabledForPID(e) ? e : Q;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && S.default.isOverlayOOPEnabledForPid(e);
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
G(eQ, 'displayName', 'OverlayBridgeStore');
let eX = new eQ(
        l.Z,
        __OVERLAY__
            ? { OVERLAY_RELAY_CLICK_ZONE_CLICKED: eZ }
            : {
                  LOGIN: ez,
                  LOGOUT: eq,
                  CONNECTION_OPEN: eU,
                  CONNECTION_CLOSED: eG,
                  EXPERIMENT_OVERRIDE_BUCKET: eB,
                  RUNNING_GAME_TOGGLE_OVERLAY: eW,
                  RUNNING_GAMES_CHANGE: eH,
                  OVERLAY_SET_ENABLED: eF,
                  OVERLAY_FOCUSED: ej,
                  OVERLAY_SET_INPUT_LOCKED: eD,
                  OVERLAY_ACTIVATE_REGION: ew,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: eL,
                  RPC_SERVER_READY: ex,
                  OVERLAY_CALL_PRIVATE_CHANNEL: eM,
                  OVERLAY_JOIN_GAME: eV,
                  OVERLAY_CRASHED: ek,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eY
              }
    ),
    eJ = eX;
