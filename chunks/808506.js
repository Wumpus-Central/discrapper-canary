let r;
n.r(t),
    n.d(t, {
        OverlayPIDStatus: () => Z,
        default: () => e$,
        getOverlayURL: () => eO
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
    W = !1,
    Y = new Map(),
    K = () => Array.from(Y.values()).some((e) => 'READY' === e),
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
                if ((null != this.timeout && (clearTimeout(this.timeout), (this.timeout = null)), null != this.requestIdleCallback && (cancelIdleCallback(this.requestIdleCallback), (this.requestIdleCallback = null)), !K())) {
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
                    !(!K() || er.has(e.type)) &&
                    (this.isDispatching
                        ? this.waitingActionsToFlush.add(e)
                        : ('USER_SETTINGS_PROTO_UPDATE' === e.type &&
                              (e = F(B({}, e), {
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
let en = new et(),
    er = new Set(['CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'WINDOW_INIT', 'WINDOW_FULLSCREEN_CHANGE', 'WINDOW_FOCUS', 'WINDOW_RESIZED', 'WINDOW_HIDDEN', 'CHANNEL_SELECT', 'DELAYED_CHANNEL_SELECT', 'DELAYED_SELECT_FLUSH', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES', 'MESSAGE_START_EDIT', 'MESSAGE_UPDATE_EDIT', 'MESSAGE_END_EDIT', 'APP_VIEW_SET_HOME_LINK', 'APPLICATION_STORE_LOCATION_CHANGE', 'LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGIN_MFA_STEP', 'LOGIN_MFA', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_RESET', 'FINGERPRINT', 'REGISTER', 'REGISTER_SUCCESS', 'START_SESSION', 'FORGOT_PASSWORD_SENT', 'UPDATE_TOKEN', 'SET_CONSENT_REQUIRED', 'PASSWORDLESS_START', 'PASSWORDLESS_FAILURE', 'CONTEXT_MENU_OPEN', 'CONTEXT_MENU_CLOSE', 'MODAL_PUSH', 'MODAL_POP', 'MODAL_UPDATE', 'MODAL_POP_ALL', 'GUILD_SETTINGS_OPEN', 'USER_SETTINGS_MODAL_OPEN', 'CHANNEL_SETTINGS_OPEN', 'NOTIFICATION_SETTINGS_MODAL_OPEN', 'EMAIL_VERIFICATION_MODAL_OPEN', 'QUICKSWITCHER_SHOW', 'IFE_EXPERIMENT_SEARCH_MODAL_OPEN', 'SHOW_KEYBOARD_SHORTCUTS', 'DM_SETTINGS_UPSELL_SHOW', 'USER_PROFILE_MODAL_OPEN', 'INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'GUILD_SETTINGS_CLOSE', 'USER_SETTINGS_MODAL_CLOSE', 'CHANNEL_SETTINGS_CLOSE', 'NOTIFICATION_SETTINGS_MODAL_CLOSE', 'EMAIL_VERIFICATION_MODAL_CLOSE', 'QUICKSWITCHER_HIDE', 'IFE_EXPERIMENT_SEARCH_MODAL_CLOSE', 'HIDE_KEYBOARD_SHORTCUTS', 'USER_PROFILE_MODAL_CLOSE', 'QUICKSWITCHER_SHOW', 'QUICKSWITCHER_HIDE', 'QUICKSWITCHER_SWITCH_TO', 'QUICKSWITCHER_SEARCH', 'QUICKSWITCHER_SELECT', 'UPDATE_CHANNEL_DIMENSIONS', 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'UPDATE_GUILD_LIST_DIMENSIONS', 'TRACK', 'CHANNEL_SETTINGS_OPEN', 'CHANNEL_SETTINGS_INIT', 'CHANNEL_SETTINGS_CLOSE', 'GUILD_SETTINGS_INIT', 'GUILD_SETTINGS_OPEN', 'GUILD_SETTINGS_CLOSE', 'TUTORIAL_INDICATOR_SHOW', 'TUTORIAL_INDICATOR_HIDE', 'TUTORIAL_INDICATOR_SUPPRESS_ALL', 'USER_SETTINGS_ACCOUNT_INIT', 'USER_SETTINGS_ACCOUNT_CLOSE', 'NOTICE_SHOW', 'NOTICE_DISMISS', 'NOTICE_DISABLE', 'SEARCH_EDITOR_STATE_CHANGE', 'SEARCH_EDITOR_STATE_CLEAR', 'SEARCH_START', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'SEARCH_INDEXING', 'SEARCH_CLEAR', 'SEARCH_ENSURE_SEARCH_STATE', 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE', 'SEARCH_CLEAR_HISTORY', 'SEARCH_SET_SHOW_BLOCKED_RESULTS', 'LAYOUT_CREATE', 'POPOUT_WINDOW_OPEN', 'POPOUT_WINDOW_CLOSE', 'POPOUT_WINDOW_SET_ALWAYS_ON_TOP', 'TYPING_START_LOCAL', 'TYPING_STOP_LOCAL', 'SPOTIFY_SET_ACTIVE_DEVICE', 'LOAD_INVITE_SUGGESTIONS', 'INVITE_SUGGESTIONS_SEARCH', 'IMPERSONATE_UPDATE', 'IMPERSONATE_STOP', 'CREATE_PENDING_REPLY', 'CREATE_SHALLOW_PENDING_REPLY', 'DELETE_PENDING_REPLY', 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO', 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST', 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS', 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE', 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION', 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST', 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND', 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND', 'APPLICATION_COMMAND_UPDATE_OPTIONS', 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE', 'APPLICATION_COMMAND_USED', 'DCF_HANDLE_DC_SHOWN', 'DCF_HANDLE_DC_DISMISSED']),
    ei = new Set(),
    eo = !1,
    ea = new E.Z('OverlayBridgeStore'),
    es = {};
function el(e) {
    var t;
    return null !== (t = es[e]) && void 0 !== t ? t : {};
}
function ec(e, t) {
    var n, r;
    let i = null === (n = es[e]) || void 0 === n ? void 0 : n.error,
        o = null === (r = es[e]) || void 0 === r ? void 0 : r.error_description;
    (es[e] = B({}, es[e], t)), null != i && (es[e].error = i), null != o && (es[e].error_description = o);
}
function eu(e) {
    var t, n;
    if (null != es[e]) return;
    let r = b.ZP.getGameForPID(e);
    es[e] = {
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
                D.default.track(k.rMx.OVERLAY_HOOK_RESULT, el((0, M.getPID)()));
        },
        timeoutMs: 180000
    });
function ep(e, t) {
    return function () {
        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        ef(() => t(...r), e);
    };
}
function e_() {
    try {
        var e;
        let t = null === h.Z || void 0 === h.Z ? void 0 : null === (e = h.Z.fileManager) || void 0 === e ? void 0 : e.uploadDiscordHookCrashes;
        if (null == t) return;
        t().then((e) => {
            if (Array.isArray(e) && 0 !== e.length)
                for (let l of (ea.log('transitionOverlayPIDStatus: Uploaded minidumps', e), e)) {
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
        ea.error('tryUploadDiscordHookCrashes', e);
    }
}
function eh(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = Y.get(e);
    (null === n || r === n) &&
        r !== t &&
        (null == t ? Y.delete(e) : Y.set(e, t),
        (null == t || 'CRASHED' === t) && ((X = null), e_()),
        ee.delete(e),
        ea.info(
            'pid='
                .concat(e, ' status transition ')
                .concat(null != r ? r : 'DISCONNECTED', ' -> ')
                .concat(null != t ? t : 'DISCONNECTED'),
            Y
        ));
}
async function em(e) {
    try {
        if (x.ZP.supportsFeature(k.eRX.CREATE_HOST_ON_ATTACH)) {
            if (Y.size > 0) {
                ed = 'reconcile.getOverlayURL';
                let t = await eO();
                (ed = 'reconcile.createHostProcess'), e.createHostProcess(t, eT, eI);
            } else (ed = 'reconcile.destroyHostProcess'), e.destroyHostProcess(), ey((0, M.getPID)());
        } else if (z) {
            let t = await eO();
            e.createHostProcess(t, eT, eI);
        } else e.destroyHostProcess(), ey((0, M.getPID)());
    } catch (t) {
        ea.error('reconcileHostProcess', t), ey((0, M.getPID)());
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
    let n = null !== (t = el(e).mounting_started_at) && void 0 !== t ? t : new Date().getTime();
    ec(e, { mounting_started_at: n });
    let r = Y.get(e);
    if (null != r) {
        ea.warn('Trying to attach to pid='.concat(e, ', that is already in status: ').concat(r));
        return;
    }
    await f.Z.updateOverlayState(e, _.mM.WAITING_FOR_OVERLAY_OPEN), (ed = 'attach.getOverlayModule');
    let i = await (0, j.K)();
    if (null == i) {
        ea.error('Trying to attach to pid='.concat(e, ', but overlay module failed loaded'));
        return;
    }
    (ed = 'attach.transitionOverlayPIDStatus'), eh(e, 'ATTACHING'), (ed = 'attach.attachToProcess');
    let o = await m.YT(e);
    null == o ? ((ed = 'attach.transitionOverlayPIDStatus (CONNECTING)'), eh(e, 'CONNECTING', 'ATTACHING'), (ed = 'attach.reconcileHostProcess'), await em(i), i.connectProcess(e)) : ((ed = 'attach.transitionOverlayPIDStatus (HOOK_FAILED)'), eh(e, 'HOOK_FAILED', 'ATTACHING'), ea.warn('Could not hook to pid='.concat(e, ', error=').concat(o)));
}
async function eE(e) {
    if ((ef.isMutexHeld() || ea.error('_detachPIDMustBeLocked: overlayMutex is not held.', e), !Y.has(e))) {
        ea.warn('Trying to detach from pid '.concat(e, ', which is in an unknown state'));
        return;
    }
    eh(e, 'DISCONNECTING');
    try {
        ed = 'detach.getOverlayModule';
        let t = await (0, j.K)();
        if (null == t) {
            ea.error('Trying to detach from pid='.concat(e, ', but overlay module failed loaded'));
            return;
        }
        e !== M.DEV_PID && ((ed = 'detach.cancelAttachToProcess'), await m.pn(e), await (0, s._v)(16), (ed = 'detach.disconnectProcess'), await t.disconnectProcess(e)), (ed = 'detach.transitionOverlayPIDStatus'), eh(e, null), (ed = 'detach.reconcileHostProcess'), await em(t);
    } catch (t) {
        ea.error('Error during overlay detachment for pid '.concat(e, ':'), t), eh(e, null);
    }
}
async function ev(e) {
    var t, n;
    if (
        (ea.verbose('updateIntendedOverlayPIDs', {
            isConnectionOpened: Q,
            action: e
        }),
        ef.isMutexHeld() || ea.error('updateIntendedOverlayPIDs: overlayMutex is not held.', e),
        !Q && null != e)
    ) {
        ea.verbose('updateIntendedOverlayPIDs: Connection is not opened while updating applications.', e);
        return;
    }
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
        if (null === (t = e.added) || void 0 === t ? void 0 : t.includes(n)) {
            ea.warn('updateIntendedOverlayPIDs: Failed PID was re-added?');
            continue;
        }
        ea.verbose('updateIntendedOverlayPIDs: retrying failed overlay pid '.concat(n)), await r(n), (i = !0);
    }
    for (let t of null !== (n = e.added) && void 0 !== n ? n : []) {
        let n = S.default.getTrackedGameByPid(t);
        if (null == n) {
            ea.error('updateIntendedOverlayPIDs: Tracked game not found for pid='.concat(t));
            continue;
        }
        if ((ea.verbose('updateIntendedOverlayPIDs: newGame', n), n.legacyEnabled))
            switch ((n.pid in H ? ea.error('Unexpected. '.concat(n.pid, ' is being added twice?'), H, e) : eu(n.pid), n.overlayMethod)) {
                case _.gl.Hook:
                    let r = new Date().getTime();
                    ec(n.pid, {
                        mounting_started_at: r,
                        fullscreen_type: await (0, I.hj)(n.pid, 0)
                    }),
                        Y.has(n.pid) || (await eg(n.pid)),
                        (H[n.pid] = {
                            method: n.overlayMethod,
                            deconstructor: async () => {
                                await eE(n.pid);
                            }
                        }),
                        (i = !0);
                    break;
                case _.gl.OutOfProcess:
                case _.gl.OutOfProcessLimitedInteraction:
                    ea.error('updateIntendedOverlayPIDs: out of process called for hook overlay', n);
                    break;
                case _.gl.Disabled:
                    ea.verbose('updateIntendedOverlayPIDs: disabled', n);
                    break;
                default:
                    ea.error('updateIntendedOverlayPIDs: Unknown overlay method: '.concat(n.overlayMethod), n);
            }
    }
    for (let t of e.removed) ea.verbose('updateIntendedOverlayPIDs: removedGame', t), await r(t), (i = !0);
    i && eJ.emitChange();
}
let eb = ep('updateIntendedOverlayPIDs', (e) => (ea.info('updateIntendedOverlayPIDs', e), ev(e))),
    ey = ep('clearPID', (e) => {
        if (null == e) return (0, M.setPID)(M.UNSET_PID);
        !T.ZP.isOverlayV3EnabledForPID(e) && (0, M.setPID)(M.UNSET_PID);
    });
function eO() {
    return new Promise((e) => {
        eJ.addConditionalChangeListener(() => {
            if (null != r) return e(r), !1;
        });
    });
}
let eS = ep('setOverlayEnabled', async (e) => {
    if (!U.iP) return;
    if (z === e) {
        ea.verbose('setOverlayEnabled: no change', { newOverlayEnabled: e });
        return;
    }
    (z = e), eJ.emitChange();
    let t = await (0, j.K)();
    if (null == t) {
        ea.error('setOverlayEnabled: overlay module failed loaded');
        return;
    }
    z || (await ev(void 0)), await em(t);
});
function eI(e) {
    f.Z.setFocusedPID(0 === e ? null : e);
}
function eT(e, t, n) {
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
    ec(e, B({}, a)),
        (0, d.te)(M.OVERLAY_LAYOUT_ID, R.Z.getDefaultLayout(M.OVERLAY_LAYOUT_ID), 0, {
            width: n.graphics_width,
            height: n.graphics_height
        }),
        f.Z.updateOverlayState(e, _.mM.OVERLAY_RENDERING);
    let s = el(e);
    D.default.track(k.rMx.OVERLAY_HOOK_RESULT, s), ea.info('Overlay connection to '.concat(e, ' ').concat(t ? 'succeeded' : 'failed'), s), t ? eh(e, 'CONNECTED', 'CONNECTING') : eh(e, 'CONNECT_FAILED', 'CONNECTING');
}
function eN() {
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
function eA(e) {
    return null != e && (0, w.y)(e, $);
}
function eC(e) {
    switch ((eo && ea.info('[app data received]', e), e.type)) {
        case k.BmY.CONNECT:
            let t = A.default.getToken();
            if (null == t) break;
            (0, d.te)(M.OVERLAY_LAYOUT_ID, R.Z.getDefaultLayout(M.OVERLAY_LAYOUT_ID), 0),
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
                        eh(i, 'READY'),
                        (0, M.setPID)(i),
                        f.Z.overlayReady(i);
                    let a = el(i);
                    ec(i, F(B({}, a), { total_mount_time_ms: null != a.mounting_started_at ? new Date().getTime() - a.mounting_started_at : void 0 }));
                });
            break;
        case k.BmY.DISPATCH:
            null != e.payloads && en.dispatchPayloads(e.payloads);
            break;
        case k.BmY.LOG_MESSAGES:
            ea.info('[overlay data received]', e.payload);
    }
}
async function eR(e, t) {
    let n = await (0, j.K)();
    if (null == n) {
        ea.error('setInputLocked: overlay module failed loaded');
        return;
    }
    let r = null != t ? t : X;
    if (null != r && 'DISCONNECTING' === Y.get(r)) {
        ea.warn('Overlay module is no longer valid during input lock');
        return;
    }
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
let eD = null;
function ew(e) {
    let { locked: t, pid: n } = e,
        r = Y.get(n);
    if ((J.has(n) && eb(void 0), null != r && null != H[n] && (t || 'READY' === r || 'CRASHED' === r)))
        t ? ee.delete(n) : ee.add(n),
            ei.clear(),
            (null == eD || (clearTimeout(eD), (eD = null), !t)) &&
                (t
                    ? eP(t, n)
                    : (eD = setTimeout(() => {
                          eP(t, n), (eD = null);
                      }, 100)));
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
    n.append('build_id', '5ff0a6524155221016126bf9da2d94c42e65668f'), n.append('rpc', String(t)), n.append('rpc_auth_token', $), (r = ''.concat(location.protocol, '//').concat(location.host, '/overlay?').concat(n.toString()));
}
function ej(e) {
    let { channelId: t, ring: n } = e;
    setImmediate(() => {
        p.default.selectPrivateChannel(t), c.Z.call(t, !1, !!n);
    });
}
function ek(e) {
    let { pid: t } = e;
    X = t;
}
function eU(e) {
    var t;
    let { pid: n, error: r } = e;
    eh(n, 'CRASHED'),
        ec(n, {
            renderer_crash_count: (null !== (t = el(n).renderer_crash_count) && void 0 !== t ? t : 0) + 1,
            error: r instanceof Error ? r.message : r,
            error_description: r instanceof Error ? r.stack : void 0
        }),
        ea.verbose('OverlayBridgeStore: handleOverlayCrashed: '.concat(n));
}
function eG() {
    (Q = !0), (W = !1), ez();
}
function eB() {
    (Q = !1), (X = null), eb(void 0), ea.verbose('OverlayBridgeStore: handleConnectionClosed');
}
function eV() {
    return !0;
}
function eF(e) {
    let { legacyEnabled: t } = e;
    return eS(t), !1;
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
function eW(e) {
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
function eK(e) {
    ea.verbose('Updating OverlayMethod', {
        pid: e.pid,
        overlayMethod: e.overlayMethod,
        overlayLabel: (0, I.P_)(e.overlayMethod)
    }),
        e.overlayMethod === _.gl.Hook
            ? eb({
                  added: [e.pid],
                  removed: []
              })
            : eb({
                  added: [],
                  removed: [e.pid]
              });
}
function ez() {
    v.Z.hasLoadedExperiments && !W && ((W = !0), eS(y.v.legacyEnabled));
}
function eq() {
    W = !1;
}
function eQ() {
    W = !1;
}
class eX extends (i = a.ZP.Store) {
    initialize() {
        !(!U.iP || __OVERLAY__) && (this.waitFor(b.ZP, v.Z, A.default, T.ZP, S.default), this.syncWith([v.Z], ez), g.sr(eC, eA), A.default.addChangeListener(eN), l.Z.addInterceptor(en.queueDispatch));
    }
    isFocusedPidInputLocked() {
        let e = this.getFocusedPID();
        return null != e && this.isInputLocked(e);
    }
    isInputLocked(e) {
        return S.default.isOverlayOOPEnabledForPid(e) ? T.ZP.isInputLocked(e) : !ee.has(e);
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
        return S.default.getAnyGlobalEnabledOverlay();
    }
    getFocusedPID() {
        let e = T.ZP.getFocusedPID();
        return null != e && T.ZP.isOverlayV3EnabledForPID(e) ? e : X;
    }
    isFocusedPidOutOfProcess() {
        let e = this.getFocusedPID();
        return null != e && S.default.isOverlayOOPEnabledForPid(e);
    }
    isReady(e) {
        return T.ZP.isOverlayV3EnabledForPID(e) ? T.ZP.isReady(e) : 'READY' === Y.get(e);
    }
    isCrashed(e) {
        return !T.ZP.isOverlayV3EnabledForPID(e) && 'CRASHED' === Y.get(e);
    }
    getOverlayPIDStatuses() {
        return Y;
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
                  RUNNING_GAME_TOGGLE_OVERLAY: eY,
                  RUNNING_GAMES_CHANGE: eW,
                  OVERLAY_SET_ENABLED: eF,
                  OVERLAY_FOCUSED: ek,
                  OVERLAY_SET_INPUT_LOCKED: ew,
                  OVERLAY_ACTIVATE_REGION: eL,
                  OVERLAY_DEACTIVATE_ALL_REGIONS: ex,
                  RPC_SERVER_READY: eM,
                  OVERLAY_CALL_PRIVATE_CHANNEL: ej,
                  OVERLAY_JOIN_GAME: eZ,
                  OVERLAY_CRASHED: eU,
                  OVERLAY_UPDATE_OVERLAY_METHOD: eK
              }
    ),
    e$ = eJ;
