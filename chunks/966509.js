let i, r, a, l, s;
n.r(t), n.d(t, { default: () => I$ });
var o,
    d,
    u,
    c,
    _,
    A,
    h,
    E,
    p = n(627968),
    m = n(64700),
    I = n(492462),
    g = n(873263),
    C = n(156828),
    T = n(17928),
    f = n(192308),
    N = n(830215),
    S = n(258057),
    O = n(869038),
    L = n(686956),
    y = n(956793),
    b = n(271866),
    v = n(607399),
    D = n(197111),
    R = n(10088),
    M = n(495544),
    P = n(652215);
let w = v.Fr || v.v1;
function x(e) {
    let { children: t, deepLinkType: n, path: i, paramsBuilder: r, search: a } = e,
        l = (0, T.bG)([M.default], () => M.default.getFingerprint() ?? M.default.getId()),
        s = (0, T.bG)([M.default], () => M.default.getInstallationForTracking()),
        o = (0, T.bG)([R.A], () => R.A.getState(i), [i]),
        d = m.useMemo(
            () =>
                null == r
                    ? { path: i, fingerprint: l, installationId: s, search: a }
                    : r({ path: i, fingerprint: l, search: a, installationId: s }),
            [i, r, l, s, a],
        );
    return (
        m.useEffect(() => {
            w || (null == o && D.A.openNativeAppModal(i, P.e$_.DEEP_LINK, { type: n, params: d }));
        }, [o, i, d, n]),
        t
    );
}
var U = n(854378),
    G = n(723702),
    k = n(985018),
    j = n(370227);
let V = n(843020);
function H(e) {
    let { children: t } = e,
        n = (0, T.bG)([R.A], () => R.A.getHighestState());
    return (0, G.isDesktop)() || n !== P.fAW.OPENING
        ? (0, G.isDesktop)() || n !== P.fAW.OPEN
            ? t
            : (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)("img", { className: j.Lq, src: V, alt: "" }),
                      (0, p.jsx)("div", {
                          className: j.kL,
                          children: (0, p.jsxs)(U.Ay, {
                              children: [
                                  (0, p.jsx)(U.hE, { className: j.Ns, children: k.intl.string(k.t.csrAMJ) }),
                                  (0, p.jsx)(U.tK, { children: k.intl.string(k.t.ghBJz9) }),
                              ],
                          }),
                      }),
                  ],
              })
        : (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsx)("img", { className: j.Lq, src: V, alt: "" }),
                  (0, p.jsx)("div", {
                      className: j.kL,
                      children: (0, p.jsxs)(U.Ay, {
                          children: [
                              (0, p.jsx)(U.hE, { children: k.intl.string(k.t["Z+hCVU"]) }),
                              (0, p.jsx)(U.CK, {}),
                          ],
                      }),
                  }),
              ],
          });
}
function B(e) {
    function t(t) {
        return (0, p.jsx)(H, { children: (0, p.jsx)(e, { ...t }, "deeplink-wrapper") });
    }
    return (t.displayName = `Deeplink(${e.displayName ?? e.name ?? "<Unknown>"})`), t;
}
var F = n(775602),
    Y = n(502229),
    K = n(836753),
    W = n(196492),
    z = n(869003),
    q = n(315206),
    $ = n(892491),
    X = n(228366),
    Z = n(272355),
    Q = n(36149),
    J = n(381689),
    ee = n(260509),
    et = n(309010),
    en = n(967198),
    ei = n(323073),
    er = n(329972),
    ea = n(784578),
    el = n(204925),
    es = n(835002);
class eo extends Z.A {
    _initialize() {
        X.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            X.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect),
            X.h.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            X.h.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            X.h.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            X.h.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            X.h.subscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    _terminate() {
        X.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            X.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect),
            X.h.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            X.h.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            X.h.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            X.h.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            X.h.unsubscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        (0, ei.kK)(t, n);
    }
    handleConnectionOpen() {
        let e = en.A.getGuildId(),
            t = et.A.getChannelId();
        (0, ei.kK)(e, t);
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, f.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("10136"), n.e("75714")]).then(n.bind(n, 776971));
                return (n) => (0, p.jsx)(e, { source: t, ...n });
            },
            { modalKey: el.Uy, onCloseRequest: P.tEg, backdropStyle: (0, Q.lU)(t) ? $.F.LIGHTBOX : void 0 },
        );
    }
    handleAgeGateSuccess() {
        J.A.showSuccessToast(es.OB.EXISTING_USER_AGE_GATE_SUCCESS), (0, f.closeModal)(el.Uy);
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, f.updateModal)(el.Uy, (e) => (0, p.jsx)(ea.default, { underageMessage: t, ...e }));
    }
    handleAgeGateModalClose() {
        (0, f.closeModal)(el.Uy);
    }
    handleGuildUpdate(e) {
        let { guild: t } = e,
            n = en.A.getGuildId();
        if (
            null != n &&
            t.id === n &&
            (t.owner_configured_content_level === P.ftr.AGE_RESTRICTED ||
                ((0, er.v)("age_gate_manager") && ee.uA.has(t.nsfw_level)))
        )
            return void (0, ei.kK)(t.id, null);
    }
}
let ed = new eo();
var eu = n(451988),
    ec = n(954571),
    e_ = n(927813),
    eA = n(38405),
    eh = n(881615),
    eE = n(789999);
let ep = M.default.getToken();
class em extends Z.A {
    focusedOrForegrounded = (0, eE.R)();
    heartbeatInterval = new eu.IX();
    schedulerStarted = !1;
    lastHeartbeatTimestamp = 0;
    _initialize() {
        (this.focusedOrForegrounded = (0, eE.R)()),
            M.default.addChangeListener(this.handleAuthenticationChange),
            X.h.subscribe("WINDOW_FOCUS", this.handleWindowFocus),
            X.h.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            X.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            X.h.subscribe("LOGIN_SUCCESS", this.handleLogin),
            X.h.subscribe("LOGOUT", this.handleLogout),
            this.scheduleHeartbeatTracking();
    }
    _terminate() {
        this.stopAnalyticHeartbeat(),
            M.default.removeChangeListener(this.handleAuthenticationChange),
            X.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus),
            X.h.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            X.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            X.h.unsubscribe("LOGIN_SUCCESS", this.handleLogin),
            X.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    maybeStartHeartbeat = () => {
        this.heartbeatInterval.isStarted() ||
            (this.trackHeartbeat(), this.heartbeatInterval.start(5 * e_.A.Millis.MINUTE, this.trackHeartbeat));
    };
    startAnalyticHeartbeat = () => {
        this.schedulerStarted ||
            ((this.schedulerStarted = !0),
            eA.A.addBreadcrumb({ category: "ad", message: "Starting ad session heartbeat" }),
            this.maybeStartHeartbeat());
    };
    trackHeartbeat = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!e.schedulerStarted && !t) {
                eA.A.addBreadcrumb({ category: "ad", message: "Ad heartbeat called but scheduler not started" }),
                    e.heartbeatInterval.stop();
                return;
            }
            let n = performance.now(),
                i = n - e.lastHeartbeatTimestamp,
                r = 5 * e_.A.Millis.MINUTE;
            if (!t && e.lastHeartbeatTimestamp > 0 && i < r) return;
            let a = (0, eh.sN)();
            ec.default.track(P.HAw.CLIENT_AD_HEARTBEAT, {
                client_ad_session_id: a.uuid,
                client_heartbeat_initialization_timestamp: a.createdAtTimestamp,
                client_heartbeat_version: 3,
            }),
                (e.lastHeartbeatTimestamp = n);
        };
    })();
    stopAnalyticHeartbeat = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DEFAULT";
            e.schedulerStarted &&
                ((e.schedulerStarted = !1),
                (e.lastHeartbeatTimestamp = 0),
                eA.A.addBreadcrumb({ category: "ad", message: `Stopping ad session heartbeat: ${t}` }),
                e.heartbeatInterval.stop());
        };
    })();
    scheduleHeartbeatTracking = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DEFAULT";
            if (e.focusedOrForegrounded && null != ep)
                try {
                    e.startAnalyticHeartbeat();
                } catch (e) {
                    eA.A.captureException(e);
                }
            else e.stopAnalyticHeartbeat(t);
        };
    })();
    handleLogin = () => {
        this.scheduleHeartbeatTracking(), this.trackHeartbeat(!0);
    };
    handleLogout = () => {
        this.stopAnalyticHeartbeat("USER_LOGOUT"), (0, eh.Db)();
    };
    handleEnrollmentSuccess = () => {
        (0, eh.sN)(!0);
    };
    handleWindowFocus = (e) => {
        let { focused: t } = e;
        (this.focusedOrForegrounded = t), this.scheduleHeartbeatTracking("WINDOW_FOCUS");
    };
    handleAppStateUpdate = (e) => {
        let { state: t } = e;
        (this.focusedOrForegrounded = t === P.g6G.ACTIVE), this.scheduleHeartbeatTracking("APP_STATE_UPDATE");
    };
    handleAuthenticationChange = () => {
        let e = M.default.getToken();
        ep !== e && ((ep = e), (0, eh.Db)(), this.stopAnalyticHeartbeat()), this.scheduleHeartbeatTracking();
    };
}
let eI = new em();
var eg = n(861638),
    eC = n(793574),
    eT = n(114716),
    ef = n(827343),
    eN = n(328153),
    eS = n(869146),
    eO = n(969341),
    eL = n(531685),
    ey = n(731854);
let eb = new Set(),
    ev = new Set(),
    eD = null;
function eR() {
    for (let e of eb) ef.A.setDisableLocalVideo(e, P.bb8.MANUAL_ENABLED, ey.x.DEFAULT, !1);
    ev.clear(), eb.clear();
}
class eM extends Z.A {
    _initialize() {
        X.h.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            X.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            X.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            X.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            eS.A.addChangeListener(this.handlePopoutChange);
    }
    _terminate() {
        X.h.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            X.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            X.h.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            X.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            eS.A.removeChangeListener(this.handlePopoutChange),
            eR(),
            (eD = null);
    }
    handleIncomingVideo(e) {
        let { userId: t, context: n, streamId: i } = e;
        if (n !== ey.x.DEFAULT || null == i) return;
        let r = null != eN.Ay.getVisibleGame(),
            a = eL.A.isVisible(),
            l = eS.A.getWindowVisible(P.MLl.CHANNEL_CALL_POPOUT),
            s = eO.Ay.isLocalVideoDisabled(t, n),
            o = ev.has(t);
        !r || a || l || s || o || (eb.add(t), ef.A.setDisableLocalVideo(t, P.bb8.DISABLED, n, !1));
    }
    handleManualLocalVideoToggle(e) {
        let { userId: t, persist: n } = e;
        n && (ev.add(t), eb.delete(t));
    }
    handleWindowVisibilityChange = (e) => {
        let { visible: t } = e;
        t && eR();
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t } = e;
        t !== eD && (eR(), (eD = t));
    };
    handlePopoutChange = () => {
        eS.A.getWindowVisible(P.MLl.CHANNEL_CALL_POPOUT) && eR();
    };
}
let eP = new eM();
var ew = n(284009),
    ex = n.n(ew),
    eU = n(735438),
    eG = n.n(eU);
class ek extends m.Component {
    animProps;
    _animationFrame;
    ref = m.createRef();
    constructor(e) {
        super(e), (this.state = { shaking: !1 });
    }
    getDefaultAnimProps(e, t) {
        return {
            duration: e ?? 300,
            progress: 0,
            last: Date.now(),
            intensity: t ?? 5,
            lastDirection: -1,
            frameCount: 0,
        };
    }
    componentWillUnmount() {
        this._animationCleanup();
    }
    shake(e, t) {
        (this.animProps = this.getDefaultAnimProps(e, t)),
            this.state.shaking || this.setState({ shaking: !0 }, this._animate);
    }
    stop() {
        this.state.shaking && this.setState({ shaking: !1 });
    }
    _animate = () => {
        let { animProps: e } = this;
        if (!this.state.shaking || e.progress > e.duration || null == this.ref.current)
            return void this._animationComplete();
        let t = Date.now();
        if (((e.progress += t - e.last), (e.last = t), e.frameCount % 2 != 0)) {
            let t = e.lastDirection * e.intensity,
                n = eG().random(-e.intensity, e.intensity, !0),
                i = Math.max(0, Math.cbrt(e.duration - e.progress / 1e3));
            (e.intensity *= Math.min(1, i)),
                (e.lastDirection *= -1),
                ex()(null != this.ref.current, "Shakeable style set when not mounted"),
                (this.ref.current.style.transform = `translate3d(${t}px,${n}px,0px)`);
        }
        (e.frameCount += 1), (this._animationFrame = requestAnimationFrame(this._animate));
    };
    _animationComplete() {
        this.setState({ shaking: !1 }, this._animationCleanup);
    }
    _animationCleanup = () => {
        null != this.ref.current && (this.ref.current.style.transform = ""), cancelAnimationFrame(this._animationFrame);
    };
    render() {
        let { children: e, ...t } = this.props;
        return (0, p.jsx)("div", { ...t, ref: this.ref, children: e });
    }
}
var ej = n(447453),
    eV = n(143991),
    eH = n(942857),
    eB = n(337371),
    eF = n(775121),
    eY = n(498419),
    eK = n.n(eY),
    eW = n(481613),
    ez = n.n(eW),
    eq = n(800828),
    e$ = n(912309),
    eX = n(458294),
    eZ = n(803224),
    eQ = n(994500),
    eJ = n(503509),
    e0 = n(19575),
    e1 = n(726249);
let e2 = new Set(["Blink", "Gecko", "WebKit"]),
    e6 = P.tEg;
if (G.isPlatformEmbedded) e6 = (e) => e0.Ay.setBadge(e);
else if (e2.has(ez().layout)) {
    let e = new (eK())({ animation: "none" });
    e6 = (t) => {
        try {
            (0, e1.sF)(t), e.badge(-1 === t ? "•" : t);
        } catch (e) {}
    };
}
var e5 = n(780964),
    e4 = n(858897),
    e3 = n(763827),
    e8 = n(485296);
let e7 = (0, G.isMac)() ? null : "DEFAULT";
class e9 extends m.PureComponent {
    getIcon = () => {
        let { deafened: e, muted: t, speaking: n, connected: i, unread: r } = this.props,
            a = e7;
        return (0, G.isMac)() && !i
            ? a
            : (0, G.isLinux)() || !i
              ? (r && (a = "UNREAD"), a)
              : (a = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED");
    };
    componentDidMount() {
        e0.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentDidUpdate() {
        e0.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentWillUnmount() {
        e0.Ay.setSystemTrayIcon(e7);
    }
    render() {
        return null;
    }
}
let te = () => null;
G.isPlatformEmbedded &&
    (e0.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () => ef.A.toggleSelfMute({ location: "System Tray" })),
    e0.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => ef.A.toggleSelfDeaf()),
    e0.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
        (0, e4.openUserSettings)(e5.X.VOICE_CATEGORY);
    }),
    (te = T.Ay.connectStores([e3.A, eO.Ay, e8.A, eX.default, eQ.A, eZ.A, eq.A], () => {
        let e = eX.default.getTotalMentionCount(),
            t = eX.default.hasAnyUnread(),
            n = (0, e$.dH)([eQ.A, eq.A]),
            i = !eZ.A.getDisableUnreadBadge() && !!(t || e + n > 0);
        return {
            connected: e3.A.isConnected(),
            speaking: e8.A.isCurrentUserSpeaking(),
            muted: eO.Ay.isSelfMute() || eO.Ay.isSelfMutedTemporarily(),
            deafened: eO.Ay.isSelfDeaf(),
            unread: i,
        };
    })(e9)));
let tt = te;
var tn = n(503698),
    ti = n.n(tn),
    tr = n(110259),
    ta = n(506774),
    tl = n(289873),
    ts = n(43990),
    to = n(939249),
    td = n(720149);
function tu(e) {
    return (0, p.jsx)("div", {
        style: { display: "flex", justifyContent: "center", alignItems: "center", height: "100%" },
        children: k.intl.string(k.t["2Tx+db"]),
    });
}
var tc = n(183994),
    t_ = n(268218),
    tA = n(335180);
let th = (0, t_.Fe)({
    createPromise: () =>
        Promise.all([n.e("86546"), n.e("14875"), n.e("23324"), n.e("61555"), n.e("3177")]).then(n.bind(n, 338249)),
    webpackId: 338249,
    renderLoader: tA.IA,
});
var tE = n(761929),
    tp = n(458518),
    tm = n(107361),
    tI = n(132500),
    tg = n(821609),
    tC = n(534514),
    tT = n(834730);
n(323874), n(14289), n(35956);
var tf = n(157559),
    tN = n(308528),
    tS = n(688810),
    tO = n(429913),
    tL = n(976860),
    ty = n(287809),
    tb = n(956549),
    tv = n(257269);
function tD(e) {
    let { match: t } = e,
        n = (0, tL.UC)() ?? [],
        { analyticsLocations: i } = (0, tS.Ay)([...n, eC.A.ACTIVITY_DETAIL_PAGE]),
        { applicationId: r } = t.params,
        [a] = (0, tO.A)([r]),
        l = a?.bot?.id,
        s = (0, T.bG)([ty.default], () => ty.default.getCurrentUser());
    return (
        m.useEffect(() => {
            null != l &&
                null != s &&
                (async () => {
                    try {
                        let e = new URL(location.href),
                            t = await tN.A.openPrivateChannel({ recipientIds: l }),
                            n = e.searchParams.get("referrer_id") ?? void 0,
                            { customId: a } = await (0, tv.d9)(
                                r,
                                e.searchParams.get("link_id"),
                                e.searchParams.get("custom_id"),
                            );
                        await (0, tb.A)({
                            targetApplicationId: r,
                            channelId: t,
                            analyticsLocations: i,
                            customId: a,
                            referrerId: n,
                        });
                    } catch (e) {}
                })();
        }, [i, r, l, s]),
        m.useEffect(() => {
            let e = setTimeout(() => {
                null == l && tf.A.show({ title: k.intl.string(k.t.PtobXW), body: k.intl.string(k.t["IOy+I5"]) });
            }, 5e3);
            return () => {
                clearTimeout(e);
            };
        }, [l]),
        null
    );
}
var tR = n(613057),
    tM = n(897152);
function tP(e) {
    let { applicationId: t } = e.match.params,
        [i, r] = m.useState(!1),
        a = m.useRef(!1),
        [l, s] = m.useState(null),
        o = !G.isPlatformEmbedded && !v.Fr && !i,
        d = m.useMemo(() => (0, tI.A)(), []);
    return (m.useEffect(() => {
        o &&
            !0 !== a.current &&
            (Promise.resolve()
                .then(n.bind(n, 129014))
                .then((e) => {
                    let { default: n } = e;
                    n.request(P.e$_.DEEP_LINK, {
                        type: tR.XK.ACTIVITIES,
                        params: { applicationId: t, url: location.href, attemptId: d },
                    })
                        .then((e) => {
                            let n = e ?? !1;
                            s(n),
                                ec.default.track(P.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: t,
                                    source_url: location.href,
                                    attempt_id: d,
                                    rpc_success: n,
                                });
                        })
                        .catch(() => {
                            s(!1),
                                ec.default.track(P.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
                                    application_id: t,
                                    source_url: location.href,
                                    attempt_id: d,
                                    rpc_success: !1,
                                });
                        })
                        .then(() => n.disconnect());
                }),
            (a.current = !0));
    }, [t, o, d]),
    o && !1 !== l)
        ? !0 === l
            ? (0, p.jsxs)("div", {
                  className: tM.k,
                  children: [
                      (0, p.jsx)(tC.D, { variant: "heading-xxl/bold", children: k.intl.string(k.t.csrAMJ) }),
                      (0, p.jsx)(tT.E, { variant: "text-xs/semibold", children: k.intl.string(k.t["m1+IBn"]) }),
                      (0, p.jsx)(tg.$, { variant: "primary", text: k.intl.string(k.t.fIv16B), onClick: () => r(!0) }),
                  ],
              })
            : (0, p.jsxs)("div", {
                  className: tM.k,
                  children: [
                      (0, p.jsx)(tC.D, { variant: "heading-xxl/bold", children: k.intl.string(k.t["Z+hCVU"]) }),
                      (0, p.jsx)(tl.y, {}),
                  ],
              })
        : (0, p.jsx)(tD, { ...e });
}
var tw = n(549711),
    tx = n(313961),
    tU = n(878431),
    tG = n(702841),
    tk = n(932001),
    tj = n(533550),
    tV = n(49999),
    tH = n(46275);
let tB = m.memo(function (e) {
    let { state: t, markAsDismissed: n } = e,
        { name: i, guildId: r, boundingRect: a } = t,
        l = m.useMemo(() => null, [i, r, n]);
    return null == l
        ? null
        : (0, p.jsx)("div", {
              className: ti()(tH.UX, (null == a || a.y < 0) && tH.R),
              style: null == a ? {} : { top: a.top, left: a.right - a.x },
              children: l,
          });
});
function tF() {
    let e = (0, tG.bG)([en.A], () => en.A.getGuildId()),
        t = (0, tj.RX)(e),
        [n, i] = (0, tk.kn)(
            Object.values(t)
                .filter((e) => {
                    let { disabled: t } = e;
                    return !t;
                })
                .map((e) => {
                    let { name: t } = e;
                    return t;
                }),
            tV.m.SIDEBAR,
        );
    if (null == n) return null;
    let r = t[n];
    return null == r
        ? null
        : (0, p.jsx)("div", { className: tH.kL, children: (0, p.jsx)(tB, { state: r, markAsDismissed: i }) });
}
let tY = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([n.e("52803"), n.e("92630"), n.e("69059"), n.e("14708"), n.e("9073"), n.e("72570")]).then(
                n.bind(n, 887073),
            ),
        webpackId: 887073,
    }),
    tK = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("52803"),
                n.e("92630"),
                n.e("69059"),
                n.e("14708"),
                n.e("9073"),
                n.e("49287"),
                n.e("59275"),
            ]).then(n.bind(n, 703571)),
        webpackId: 703571,
    }),
    tW = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([n.e("52803"), n.e("92630"), n.e("69059"), n.e("14708"), n.e("9073"), n.e("82583")]).then(
                n.bind(n, 479808),
            ),
        webpackId: 479808,
    });
var tz = n(601117),
    tq = n(920814),
    t$ = n(287344),
    tX = n(969043),
    tZ = n(91242),
    tQ = n(661531),
    tJ = n(862482),
    t0 = n(602853),
    t1 = n(623646),
    t2 = n(446576),
    t6 = n(70688),
    t5 = n(795816),
    t4 = n(216418),
    t3 = n(47294),
    t8 = n(16961),
    t7 = n(58149),
    t9 = n(982484),
    ne = n(964404),
    nt = n(709562),
    nn = n(520006),
    ni = n(128286),
    nr = n(625180),
    na = n(31728),
    nl = n(625494),
    ns = n(165610);
let no = (e, t) => {
    X.h.wait(() => {
        (0, na.I_)(e, t);
    });
};
function nd(e) {
    let { embedId: t, className: n, style: i, currentWindow: r } = e,
        a = (0, T.bG)([tZ.A], () => tZ.A.getConnectedFrame()),
        l = (0, T.bG)([tZ.A], () => tZ.A.getFrameLayoutMode()),
        s = null != a && l === ns.y.FOCUSED ? window : (r ?? window),
        o = m.useRef(null),
        d = m.useCallback(() => {
            null == o.current || no(t, o.current.getBoundingClientRect());
        }, [t]);
    m.useLayoutEffect(() => {
        d();
    });
    let u = m.useMemo(
        () =>
            new ResizeObserver(() => {
                d();
            }),
        [d],
    );
    return (
        m.useLayoutEffect(() => {
            let e = o.current;
            if (null != e) return u.observe(e), () => u.unobserve(e);
        }, [u]),
        m.useLayoutEffect(() => {
            let e = () => d(),
                t = () => d();
            return (
                s.addEventListener("scroll", e, !0),
                s.addEventListener("resize", t),
                () => {
                    s.removeEventListener("scroll", e, !0), s.removeEventListener("resize", t);
                }
            );
        }, [d, s]),
        m.useLayoutEffect(
            () => (
                nl._.subscribe(P.jej.MANUAL_IFRAME_RESIZING, d),
                () => {
                    nl._.unsubscribe(P.jej.MANUAL_IFRAME_RESIZING, d);
                }
            ),
            [d],
        ),
        m.useLayoutEffect(
            () => () => {
                no(t, null);
            },
            [t],
        ),
        (0, p.jsx)("div", { ref: o, className: n, style: i })
    );
}
var nu = n(227042),
    nc = n(186111),
    n_ = n(334463);
let nA = null;
function nh(e) {
    return `framepip:${e.applicationId}`;
}
function nE() {
    let e = tZ.A.getConnectedFrame();
    if (null == e) {
        let e;
        return void (null != (e = nA) && n_.A.isOpen(e) && (X.h.wait(() => na.VN(e)), (nA = null)));
    }
    var t = nh(e);
    if (n_.A.isOpen(t)) return !1;
    if (null != nA) {
        let e = nA;
        X.h.wait(() => na.VN(e));
    }
    return X.h.wait(() => na.ho(t, P.o1q.FRAME, {})), void (nA = t);
}
function np() {
    let e;
    if ((0, nu.A)({ LayerStore: nc.A, PopoutWindowStore: eS.A })) {
        let e;
        return void (null != (e = void 0 ?? nA) && n_.A.isOpen(e) && X.h.wait(() => na.jD(e)));
    }
    null != (e = void 0 ?? nA) && n_.A.isOpen(e) && X.h.wait(() => na.WU(e));
}
class nm extends Z.A {
    _initialize() {
        tZ.A.addChangeListener(nE), nc.A.addChangeListener(np);
    }
    _terminate() {
        tZ.A.removeChangeListener(nE), nc.A.removeChangeListener(np);
    }
}
let nI = new nm();
var ng = n(5867),
    nC = n(492466);
let nT = { [ng.E8.NO_CHAT]: nC.Oo, [ng.E8.RESIZABLE]: nC.Ig };
function nf(e) {
    let { frame: t } = e,
        n = (0, tO.h)(t.applicationId),
        i = (0, eH.A)(),
        { selectedChannelId: r, selectedVoiceChannelId: a } = (0, T.cf)([et.A], () => ({
            selectedChannelId: et.A.getChannelId(),
            selectedVoiceChannelId: et.A.getVoiceChannelId(),
        })),
        l = (0, T.bG)([tx.A], () => null != a && r === a && tx.A.getChatOpen(a), [r, a]),
        s = (0, T.bG)([ne.Ay], () => ne.Ay.callChatSidebarWidth),
        o = (0, t0.r)(tQ.A.modules.chat.RESIZE_HANDLE_WIDTH),
        d = m.useRef(null),
        u = m.useRef(null),
        [c, _] = m.useState({ width: 0, height: 0 }),
        A = m.useCallback(() => {
            nr.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: ns.y.PIP });
        }, [t.applicationId]),
        h = m.useCallback(() => {
            nr.A.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    m.useLayoutEffect(() => {
        if (null == u.current) return;
        let e = new ResizeObserver(() => {
            _({ width: u.current?.clientWidth ?? 0, height: u.current?.clientHeight ?? 0 });
        });
        return e.observe(u.current), () => e.disconnect();
    }, []),
        m.useEffect(() => {
            let e = (e) => {
                null == d.current ||
                    (0, t1.H)(d.current, e.target) ||
                    i ||
                    nr.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: ns.y.PIP });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, i]);
    let E = c.width / Math.max(c.height, 1) < ng.B5,
        I = 0,
        g = 0,
        C = (0, t4.A)(n?.id);
    if (!C) {
        let e = c.width,
            t = c.height;
        E
            ? ((t = c.width / ng.B5) > c.height && (e = (t = c.height) * ng.B5), (g = (c.height - t) / 2))
            : ((e = Math.min(c.height * ng.B5, c.width)) > c.width && (t = (e = c.width) / ng.B5),
              (I = (c.width - e) / 2));
    }
    let f = ng.E8.NO_CHAT,
        N = (0, t8.G)();
    if (null == n) return null;
    let S = (s ?? P.da6) + o,
        O = nh(t);
    return (0, p.jsx)(ts.N, {
        theme: P.NJ8.DARK,
        children: (e) =>
            (0, p.jsxs)("div", {
                className: ti()(nC.iE, nT[f], e),
                ref: d,
                style: { right: l && !Number.isNaN(S) ? S : 0 },
                children: [
                    (0, p.jsx)(t9.A, { applicationId: t.applicationId }),
                    (0, p.jsx)("div", {
                        className: nC.lq,
                        children: (0, p.jsx)("div", {
                            className: ti()(nC.ht, { [nC.kK]: C }),
                            style: { paddingLeft: I, paddingRight: I, paddingTop: g, paddingBottom: g },
                            ref: u,
                            children: (0, p.jsx)(nd, { className: nC.pU, embedId: O }),
                        }),
                    }),
                    (0, p.jsxs)("div", {
                        className: nC.qr,
                        children: [
                            (0, p.jsx)(nn.A, {
                                appContext: P.BRT.APP,
                                applicationId: n.id,
                                shouldPrioritizeGroupPlusIcon: !0,
                                isRichPresenceInvite: !0,
                                iconClassName: nC.NS,
                                size: tJ.$n.Sizes.MEDIUM,
                                look: tJ.$n.Looks.FILLED,
                                buttonText: k.intl.string(k.t["6F9ivu"]),
                                color: tJ.$n.Colors.TRANSPARENT,
                            }),
                            (0, p.jsxs)("div", {
                                className: nC.Hq,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: nC.qi,
                                        children: (0, p.jsx)(nt.l, {
                                            isTrayButton: !0,
                                            label: k.intl.string(k.t.brPQ5U),
                                            onClick: A,
                                            iconComponent: t2.g,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, p.jsx)(nt.l, {
                                        isTrayButton: !1,
                                        label: k.intl.string(k.t["R/FK4A"]),
                                        onClick: h,
                                        iconComponent: t6.o,
                                        color: "disconnect",
                                    }),
                                ],
                            }),
                            N
                                ? (0, p.jsx)(ni.A, {
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, t7.zV)(P.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                              (0, t3.A)({
                                                  onConfirm: async () => {
                                                      n?.id != null &&
                                                          (await nr.A.refreshProxyTicket({ applicationId: n.id })),
                                                          (0, t5.jp)();
                                                  },
                                              });
                                      },
                                      onClosePopout: () => {},
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
    });
}
function nN() {
    let e = (0, T.bG)([tZ.A], () => tZ.A.getConnectedFrame()),
        t = (0, T.bG)([tZ.A], () => tZ.A.getFrameLayoutMode()),
        n = (0, T.bG)([eS.A], () => eS.A.getWindowOpen(P.MLl.ACTIVITY_POPOUT));
    return t !== ns.y.FOCUSED || null == e || n ? null : (0, p.jsx)(nf, { frame: e });
}
var nS = n(696292),
    nO = n(664121),
    nL = n(323384),
    ny = n(577473),
    nb = n(416730),
    nv = n(310419),
    nD = n(282026),
    nR = n(601193),
    nM = n(631001),
    nP = n(726845),
    nw = n(285395),
    nx = n(837057),
    nU = n(488995),
    nG = n(654487),
    nk = n(525748);
function nj(e) {
    let { tab: t } = e,
        n = nP.A.useField("selectedTab"),
        i = m.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case nU.GlobalDiscoveryTab.SERVERS:
                            return (0, p.jsx)(nO.R, { color: "currentColor" });
                        case nU.GlobalDiscoveryTab.APPS:
                            return (0, p.jsx)(nL.k, { color: "currentColor" });
                        case nU.GlobalDiscoveryTab.QUESTS:
                            return (0, p.jsx)(ny.r, { color: "currentColor" });
                    }
                })(t),
            [t],
        ),
        r = m.useMemo(() => (0, nw.t)(t), [t]),
        a = n === t,
        l = m.useCallback(() => {
            switch (t) {
                case nU.GlobalDiscoveryTab.QUESTS:
                    return (
                        a && nM.A.resetState(),
                        ec.default.track(P.HAw.DISCOVERY_QUEST_TAB_CLICKED, {
                            client_ad_session_id: (0, eh.sN)().uuid,
                        }),
                        (0, nx.transitionToGlobalDiscovery)({
                            tab: nU.GlobalDiscoveryTab.QUESTS,
                            location: nG.rE.DISCOVERY_SIDEBAR,
                            questContent: nS.u.DISCOVERY_SIDEBAR,
                        })
                    );
                case nU.GlobalDiscoveryTab.APPS:
                    if (!a)
                        return (0, nx.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: nv.sW.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0,
                            },
                        });
                    nb.A.resetState(), (0, nx.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case nU.GlobalDiscoveryTab.SERVERS:
                    if (!a) return (0, nx.transitionToGlobalDiscovery)({ tab: t });
                    nD.A.resetState(), nR.A.resetState();
                    return;
                default:
                    return (0, nx.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, a]);
    return (0, p.jsxs)(to.D, {
        onClick: l,
        className: ti()(nk.pc, { [nk.wH]: a }),
        children: [
            (0, p.jsx)("div", { className: nk.wz, children: i }),
            (0, p.jsx)(tT.E, { variant: "text-md/medium", color: "none", children: r }),
        ],
    });
}
let nV = function () {
    return (0, p.jsxs)("div", {
        className: nk.kL,
        children: [
            (0, p.jsx)("div", {
                className: nk.wx,
                children: (0, p.jsx)(tC.D, { variant: "text-lg/semibold", children: k.intl.string(k.t["1KqYnl"]) }),
            }),
            (0, p.jsx)("nav", {
                className: nk.C$,
                children: nU.GLOBAL_DISCOVERY_TABS.map((e) => (0, p.jsx)(nj, { tab: e }, e)),
            }),
        ],
    });
};
var nH = n(386467),
    nB = n(314116),
    nF = n(765671),
    nY = n(4616),
    nK = n(743674),
    nW = n(71393),
    nz = n(486020),
    nq = n(998304),
    n$ = n(624458),
    nX = n(202384),
    nZ = n(513461),
    nQ = n(212455),
    nJ = n(115723),
    n0 = n(146983);
function n1(e) {
    let { onDiscardApplication: t, onContinueApplication: n, guild: i } = e;
    return (0, p.jsxs)("div", {
        className: n0.EL,
        children: [
            (0, p.jsx)("div", {
                className: n0.P0,
                children: (0, p.jsx)(nJ.p, { size: "md", color: tQ.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, p.jsx)(tC.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children:
                    null != i
                        ? k.intl.formatToPlainString(k.t.f5Jaw7, { guildName: i.name })
                        : k.intl.string(k.t["0sTyEb"]),
            }),
            (0, p.jsxs)("div", {
                className: n0.rn,
                children: [
                    (0, p.jsx)(tg.$, {
                        fullWidth: !0,
                        onClick: n,
                        variant: "secondary",
                        size: "md",
                        text: k.intl.string(k.t.h3aGmv),
                    }),
                    (0, p.jsx)(tg.$, {
                        fullWidth: !0,
                        onClick: t,
                        variant: "critical-primary",
                        size: "md",
                        text: k.intl.string(k.t.OQFlFD),
                    }),
                ],
            }),
        ],
    });
}
var n2 = n(990078),
    n6 = n(401432),
    n5 = n(299091),
    n4 = n(408213);
let n3 = (e) => {
    let {
            headerId: t,
            reapplyText: n,
            onReapply: i,
            confirmText: r,
            onWithdrawApplication: a,
            rejectionReason: l = null,
            guild: s = null,
        } = e,
        o = (0, T.bG)([nQ.A], () => nQ.A.getCooldown(s?.id ?? "0")),
        { canReapply: d, isLoading: u } = (function (e) {
            let [t, n] = m.useState(!0),
                i = (0, T.bG)([nQ.A], () => (null != e ? nQ.A.getJoinRequestGuild(e) : void 0)),
                r = m.useCallback(async (e) => {
                    try {
                        let t = n5.A.getInviteKeyForGuildId(e);
                        null != t && (await n4.Ay.fetchVerificationForm(e, t));
                    } finally {
                        n(!1);
                    }
                }, []);
            return (
                m.useEffect(() => {
                    null == e ? n(!1) : (n(!0), r(e));
                }, [e, r]),
                {
                    canReapply: null != i && i.features.has(P.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                    isLoading: t,
                }
            );
        })(s?.id);
    m.useEffect(() => {
        null == o && null != s && n$.A.fetchJoinRequestCooldown(s.id);
    }, [o, s]);
    let c = (o ?? 0) > 0,
        _ = c && null != o ? Math.ceil((1e3 * o - Date.now()) / 864e5) : 0;
    return (0, p.jsxs)("div", {
        className: n0.EL,
        children: [
            (0, p.jsx)("div", {
                className: n0.P0,
                children: (0, p.jsx)(n6.a, { size: "md", color: tQ.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, p.jsxs)("div", {
                className: n0.bc,
                children: [
                    (0, p.jsx)(tC.D, {
                        id: t,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children:
                            s?.name != null
                                ? k.intl.formatToPlainString(k.t["P+/gzA"], { guildName: s.name })
                                : k.intl.string(k.t.gBPcuP),
                    }),
                    null != l && "" !== l
                        ? (0, p.jsxs)(tT.E, {
                              variant: "text-md/medium",
                              color: "text-default",
                              children: [
                                  (0, p.jsx)("span", { className: n0.Wj, children: k.intl.string(k.t.cf1psW) }),
                                  (0, p.jsx)("span", { children: l }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, p.jsxs)("div", {
                className: n0.Ow,
                children: [
                    d || u
                        ? (0, p.jsx)(n2.m, {
                              asContainer: !0,
                              text: c ? k.intl.formatToPlainString(k.t.A0f0P7, { days: _ }) : null,
                              "aria-label": c ? k.intl.formatToPlainString(k.t.A0f0P7, { days: _ }) : void 0,
                              children: (0, p.jsx)(tg.$, {
                                  onClick: i,
                                  variant: "secondary",
                                  size: "md",
                                  loading: null == o || u,
                                  disabled: c || u,
                                  text: n,
                                  fullWidth: !0,
                              }),
                          })
                        : null,
                    (0, p.jsx)(tg.$, {
                        onClick: () => a(d || u),
                        variant: "critical-primary",
                        size: "md",
                        text: r,
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
};
var n8 = n(339350),
    n7 = n(51271);
let n9 = function (e) {
    let { onWithdrawApplication: t, guild: n = null } = e,
        i = n?.id;
    return (
        m.useEffect(() => {
            null != i && (0, n7.NC)(i);
        }, [i]),
        (0, p.jsxs)("div", {
            className: n0.EL,
            children: [
                (0, p.jsx)("div", {
                    className: n0.P0,
                    children: (0, p.jsx)(n8.Q, { size: "md", color: tQ.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                }),
                (0, p.jsxs)("div", {
                    className: n0.bc,
                    children: [
                        (0, p.jsx)(tC.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children:
                                n?.name != null
                                    ? k.intl.formatToPlainString(k.t["0Qlu/6"], { guildName: n.name })
                                    : k.intl.string(k.t["5iLvSx"]),
                        }),
                        (0, p.jsx)(tT.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: k.intl.string(k.t.FdsK4h),
                        }),
                    ],
                }),
                (0, p.jsx)(tg.$, {
                    fullWidth: !0,
                    onClick: t,
                    variant: "critical-primary",
                    size: "md",
                    text: k.intl.string(k.t.g9tK0o),
                }),
            ],
        })
    );
};
var ie = n(665819);
function it(e) {
    let { guild: t, width: n, height: i } = e,
        r = m.useMemo(
            () => (t?.splash != null ? nz.Ay.getGuildSplashURL({ id: t?.id, splash: t?.splash }) : null),
            [t?.splash, t?.id],
        ),
        a = (0, nK.S)(r);
    return null == r
        ? (0, p.jsx)("div", { className: ie.Eq })
        : (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsx)(nY.A, { className: ie.Yi, src: r, imageClassName: ie.Iv, width: n, height: i }),
                  null != a &&
                      (0, p.jsx)("div", {
                          className: ie.qj,
                          style: {
                              background: `linear-gradient(180deg, ${(0, nq.cb)(a, 0.16)} 0%, ${(0, nq.cb)(a, 1)} 100%)`,
                          },
                      }),
                  (0, p.jsx)("div", { className: ie.qj }),
              ],
          });
}
let ii = (e) => {
    let { guildId: t } = e,
        { ref: n, width: i, height: r } = (0, nF.Ay)(),
        a = (0, T.bG)([nQ.A], () => nQ.A.getRequest(t)),
        l = (0, T.bG)([nW.A], () => nW.A.getGuild(t)),
        { hasFetchedRequestToJoinGuilds: s, guildPreviewDisabled: o } = (0, T.cf)([nQ.A], () => ({
            hasFetchedRequestToJoinGuilds: nQ.A.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: nQ.A.getJoinRequestGuild(t),
        }));
    m.useEffect(() => {
        null != l && (0, tL.pX)(P.BVt.CHANNEL(t));
    }, [l, t]),
        m.useEffect(() => {
            s || n$.A.fetchRequestToJoinGuilds();
        }, [s]);
    let d = m.useCallback(() => {
            n$.A.removeGuildJoinRequest(t), (0, tL.pX)(P.BVt.ME);
        }, [t]),
        u = (e, t) => () => {
            (0, nB.A)({
                title: k.intl.string(k.t.y0CVes),
                subtitle: e,
                cancelText: k.intl.string(k.t.oEAioF),
                onConfirm: t,
                confirmText: k.intl.string(k.t.p89ACt),
            });
        },
        c = async () => {
            await n$.A.resetGuildJoinRequest(t), (0, nX.Ze)(t);
        },
        _ = (e) => {
            e ? u(k.intl.format(k.t["9ZezpN"], { name: o?.name }), d)() : d();
        },
        A = u(k.intl.format(k.t.fJwWVt, { name: o?.name }), d);
    return (0, p.jsxs)("div", {
        className: ie.MY,
        ref: n,
        children: [
            (0, p.jsx)(it, { guild: o, height: r, width: i }),
            (0, p.jsx)("div", {
                className: ie.FG,
                children: (() => {
                    if (null == a) return null;
                    switch (a.applicationStatus) {
                        case nZ.B5.SUBMITTED:
                            return (0, p.jsx)(n9, { onWithdrawApplication: () => _(!0), guild: o });
                        case nZ.B5.REJECTED:
                            return (0, p.jsx)(n3, {
                                reapplyText: k.intl.string(k.t.I1LYVk),
                                onReapply: c,
                                confirmText: k.intl.string(k.t.g9tK0o),
                                onWithdrawApplication: _,
                                rejectionReason: a.rejectionReason,
                                guild: o,
                            });
                        default:
                            return (0, p.jsx)(n1, {
                                onDiscardApplication: A,
                                onContinueApplication: () => (0, nX.Ze)(t),
                                guild: o,
                            });
                    }
                })(),
            }),
            (0, p.jsx)("div", { className: ie.T_ }),
        ],
    });
};
var ir = n(961973),
    ia = n(426660),
    il = n(817818),
    is = n(608401),
    io = n(342501),
    id = n(339875);
function iu(e) {
    let { guildId: t, channelId: n } = e,
        { ref: i, width: r, height: a } = (0, nF.Ay)(),
        l = m.useCallback(() => {
            null != t && null != n && ((0, il.sy)(t), (0, is.default)({ guildId: t, returnChannelId: n }));
        }, [t, n]),
        s = (0, T.bG)([nW.A], () => nW.A.getGuild(t)),
        o = m.useMemo(() => (null == s ? null : nz.Ay.getGuildSplashURL({ id: s.id, splash: s.splash })), [s]),
        d = (0, nK.S)(o);
    return (0, p.jsxs)("div", {
        className: ti()(io.kf, id.iW, { [id.Me]: null == o }),
        ref: i,
        children: [
            null != o
                ? (0, p.jsx)(nY.A, { className: id.xX, src: o, width: r, height: a, imageClassName: id.Iv })
                : (0, p.jsx)(ia.A, {}),
            null != d &&
                null != o &&
                (0, p.jsx)("div", {
                    className: id.D7,
                    style: {
                        background: `linear-gradient(180deg, ${(0, nq.cb)(d, 0.16)} 0%, ${(0, nq.cb)(d, 1)} 100%)`,
                    },
                }),
            null != o && (0, p.jsx)("div", { className: id.D7 }),
            (0, p.jsxs)("div", {
                className: ti()(io.Cj, io.Vw),
                children: [
                    (0, p.jsxs)("div", {
                        className: io.wx,
                        children: [
                            (0, p.jsx)(tC.D, {
                                variant: "heading-xxl/normal",
                                color: "always-white",
                                children: k.intl.string(k.t.CCmhpF),
                            }),
                            (0, p.jsx)(tT.E, {
                                variant: "text-lg/normal",
                                color: "always-white",
                                children: k.intl.string(k.t.gRAHcZ),
                            }),
                        ],
                    }),
                    (0, p.jsx)(tg.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: k.intl.string(k.t.VVFjAC),
                        onClick: l,
                    }),
                ],
            }),
        ],
    });
}
var ic = n(440293),
    i_ = n(565787),
    iA = n(364522),
    ih = n(323082),
    iE = n(9113),
    ip = n(683271),
    im = n(936555),
    iI = n(465932),
    ig = n(366853),
    iC = n(742589),
    iT = n(615405),
    iN = n(300233),
    iS = n(217976),
    iO = n(514179),
    iL = n(707554),
    iy = n(599941),
    ib = n(915869),
    iv = n(700206),
    iD = n(950344),
    iR = n(815332),
    iM = n(456540),
    iP = n(217530),
    iw = n(817649),
    ix = n(548118),
    iU = n(253932),
    iG = n(218394),
    ik = n(258335),
    ij = n(556545);
function iV(e) {
    let { coverImageAsset: t, title: n, guild: i, description: r, children: a } = e,
        l = iU.kt.useSetting(),
        s = (0, iG.j)(),
        [o, d] = (0, ik.A)(t, s && l);
    return (0, p.jsxs)("div", {
        className: ij.kL,
        children: [
            (0, p.jsx)("div", {
                ref: o,
                className: ij.El,
                children: null != d && (0, p.jsx)("img", { src: d, alt: "", className: ij.N4 }),
            }),
            (0, p.jsx)("div", {
                className: ij._C,
                children: (0, p.jsx)(ix.Ay, { guild: i, size: ix.Ay.Sizes.XLARGE }),
            }),
            (0, p.jsx)(tC.D, { variant: "heading-xl/semibold", className: ij.H1, children: n }),
            (0, p.jsx)(tT.E, { className: ij.jr, variant: "text-md/normal", color: "text-default", children: r }),
            a,
        ],
    });
}
var iH = n(607876);
let iB = (e) => {
    let { guild: t } = e,
        n = (0, iy.uk)(t.id)[0];
    (0, iD.A)({
        guildId: t.id,
        groupListingId: n?.id,
        location: P.ThZ.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: n?.subscription_listings_ids,
    });
    let { activeSubscription: i } = (0, iv.A)(n?.id),
        r = (0, iy.Tq)(t.id),
        a = r?.description,
        { editStateIds: l } = ib.d0(n?.id ?? null, t.id);
    return (0, p.jsxs)(p.Fragment, {
        children: [
            (0, p.jsxs)(iV, {
                title: k.intl.format(k.t["rm+ojA"], { serverName: t.name }),
                description: a ?? null,
                coverImageAsset: r?.cover_image_asset ?? null,
                guild: t,
                children: [
                    null != n ? (0, p.jsx)(iR.A, { className: iH.Ds, groupListingId: n.id, subscription: i }) : null,
                    (0, p.jsx)(iM.A, { subscription: i }),
                ],
            }),
            (0, p.jsx)(iL.F, {
                children: (0, p.jsx)(iP.A, {
                    children: l.map((e) =>
                        (0, p.jsx)(
                            iw.A,
                            {
                                guildId: t.id,
                                groupListingId: n?.id ?? "",
                                listingId: e,
                                analyticsLocation: P.ThZ.ROLE_SUBSCRIPTIONS_TAB,
                            },
                            e,
                        ),
                    ),
                }),
            }),
        ],
    });
};
var iF = n(139286),
    iY = n(640509),
    iK = (((o = {}).GUILD_NOT_ELIGIBLE = "guild_not_eligible"), (o.NOT_GUILD_MEMBER = "not_guild_member"), o);
let iW = (e) => {
    let { errorType: t } = e;
    return (
        (0, iF.A)({
            type: tr.ImpressionTypes.PAGE,
            name: tr.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
            properties: { error_page_type: t },
        }),
        (0, p.jsx)("div", {
            className: iY.Xd,
            children: (0, p.jsxs)("div", {
                className: iY.lr,
                children: [
                    (0, p.jsx)("img", { src: "/assets/6b450d698584e501.svg", alt: "", className: iY.W9 }),
                    (0, p.jsx)(tC.D, {
                        variant: "heading-xl/extrabold",
                        className: iY.mW,
                        children: "guild_not_eligible" === t ? k.intl.string(k.t.atZQVZ) : k.intl.string(k.t.gAdWBl),
                    }),
                    (0, p.jsx)(tT.E, {
                        variant: "text-md/normal",
                        className: iY.LS,
                        children: "guild_not_eligible" === t ? k.intl.string(k.t.teWe5G) : k.intl.string(k.t["X/yMrK"]),
                    }),
                ],
            }),
        })
    );
};
var iz = n(696986),
    iq = n(109335);
let i$ = "/assets/c4cc60770e7dcef2.svg";
function iX() {
    return (0, p.jsx)("div", {
        className: iq.kL,
        children: (0, p.jsxs)("div", {
            className: iq.Qs,
            children: [
                (0, p.jsx)("img", { src: i$, alt: k.intl.string(k.t.MvLOqp) }),
                (0, p.jsx)(iz.h, { size: 12 }),
                (0, p.jsx)(tC.D, {
                    className: iq.wx,
                    variant: "heading-lg/semibold",
                    children: k.intl.string(k.t.t18lFj),
                }),
                (0, p.jsx)(iz.h, { size: 8 }),
                (0, p.jsx)(tT.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: k.intl.string(k.t.TvGJgk),
                }),
            ],
        }),
    });
}
var iZ = n(746080),
    iQ = n(832933);
function iJ(e) {
    let { guildId: t } = e,
        n = (0, T.bG)([nW.A], () => nW.A.getGuild(t), [t]),
        i = (0, T.bG)([ig.A], () => ig.A.isConnected()),
        r = (0, im.A)(t),
        a = (0, iS.A)(t),
        l = (0, T.bG)([iT.A], () => iT.A.isSubscriptionFetching),
        s = (0, iN.X)(),
        { shouldHideGuildPurchaseEntryPoints: o, restrictionsLoading: d } = (0, iI.MH)(t),
        u = null == n || !s || l || d;
    (0, e1.HU)({ subsection: k.intl.string(k.t["KzCF/6"]), location: n?.name }),
        (0, iE.A)(v.Fr ? "role-subscriptions-overview" : void 0);
    let c = i && (null == n || !(r || a) || (o && !d));
    if (
        (m.useEffect(() => {
            ih.hP();
        }, []),
        m.useEffect(() => {
            c && !v.Fr && (0, ip.B)(t, iZ.VV.ROLE_SUBSCRIPTIONS);
        }, [t, c]),
        v.Fr && c)
    ) {
        let e = null == n ? iK.NOT_GUILD_MEMBER : iK.GUILD_NOT_ELIGIBLE;
        return (0, p.jsx)(iW, { errorType: e });
    }
    return (0, p.jsxs)("div", {
        className: iQ.kL,
        children: [
            (0, p.jsxs)(iC.A, {
                toolbar: (0, p.jsx)(m.Fragment, {}),
                className: iQ.jr,
                children: [
                    (0, p.jsx)(iC.A.Icon, { icon: (0, i_.k)(iO.A), "aria-hidden": !0 }),
                    (0, p.jsx)(iC.A.Title, { children: k.intl.string(k.t["KzCF/6"]) }),
                ],
            }),
            (0, p.jsx)("div", { id: "guild-role-subscription-overview-notice" }),
            (0, p.jsx)("div", {
                className: iQ.Qs,
                children: r
                    ? (0, p.jsx)(iA.d_, {
                          className: iQ.XG,
                          children: (0, p.jsx)("div", {
                              className: iQ.gT,
                              children: u ? (0, p.jsx)(tl.y, {}) : (0, p.jsx)(iB, { guild: n }),
                          }),
                      })
                    : (0, p.jsx)(iX, {}),
            }),
        ],
    });
}
function i0(e) {
    let { guildId: t } = e;
    return (0, p.jsx)(iN.H, { guildId: t, refetchOnMount: !0, children: (0, p.jsx)(iJ, { guildId: t }) });
}
n(321073);
var i1 = n(419354),
    i2 = n(942381),
    i6 = n(554146),
    i5 = n(43105),
    i4 = n(900797),
    i3 = n(847374),
    i8 = n(922016),
    i7 = n(442433),
    i9 = n(475743),
    re = n(285059),
    rt = n(63995);
n(113783);
var rn = n(69407),
    ri = n(446600),
    rr = n(624265),
    ra = n(616356),
    rl = n(734057),
    rs = n(576705),
    ro = n(607567),
    rd = n(988794);
let ru = { hiddenEventsAndStages: [] };
class rc extends T.Ay.PersistedStore {
    static displayName = "LiveChannelNoticesStore";
    static persistKey = "liveChannelNotices_v2";
    initialize(e) {
        null != e && null != e.hiddenEventsAndStages && (ru = e);
    }
    isLiveChannelNoticeHidden(e) {
        let { eventId: t, stageId: n } = e;
        return (
            !!(null != n && ru.hiddenEventsAndStages.includes(`stage-${n}`)) ||
            (null != t && ru.hiddenEventsAndStages.includes(`event-${t}`))
        );
    }
    getState() {
        return ru;
    }
}
let r_ = new rc(X.h, {
    LIVE_CHANNEL_NOTICE_HIDE: function (e) {
        let { eventId: t, stageId: n } = e;
        null != t
            ? ru.hiddenEventsAndStages.push(`event-${t}`)
            : null != n && ru.hiddenEventsAndStages.push(`stage-${n}`);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        ru.hiddenEventsAndStages.includes(n) &&
            (t.status === rd.XG.CANCELED || t.status === rd.XG.COMPLETED) &&
            (ru.hiddenEventsAndStages = ru.hiddenEventsAndStages.filter((e) => e !== n));
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let { guildScheduledEvent: t } = e,
            n = `event-${t.id}`;
        ru.hiddenEventsAndStages.includes(n) &&
            (ru.hiddenEventsAndStages = ru.hiddenEventsAndStages.filter((e) => e !== n));
    },
    STAGE_INSTANCE_DELETE: function (e) {
        let { instance: t } = e,
            n = `stage-${t.id}`;
        ru.hiddenEventsAndStages.includes(n) &&
            (ru.hiddenEventsAndStages = ru.hiddenEventsAndStages.filter((e) => e !== n));
    },
});
var rA = n(508654),
    rh = n(818348),
    rE = n(600975);
let rp = (0, rE.C)({
        kind: "guild",
        id: "2021-10_study_group",
        label: "Student hub study group",
        defaultConfig: { enableStudyGroup: !1 },
        treatments: [{ id: 1, label: "Enables study group sidebar", config: { enableStudyGroup: !0 } }],
    }),
    rm = (e) => (
        m.useEffect(() => {
            null != e &&
                e.features.has(P.GuildFeatures.HUB) &&
                rp.trackExposure({ guildId: e.id, location: "467c32_1" });
        }, [e]),
        rp.useExperiment(
            { guildId: e?.id ?? P.dJq, location: "467c32_2" },
            { autoTrackExposure: !1, disable: null == e || !e.features.has(P.GuildFeatures.HUB) },
        )
    );
var rI = n(320426),
    rg = n(169820),
    rC = n(498642),
    rT = n(124759);
let rf = "publicUpsellChannelNoticeGuilds",
    rN = new Set();
class rS extends T.Ay.Store {
    static displayName = "EnablePublicGuildUpsellNoticeStore";
    initialize() {
        this.waitFor(rs.A, nW.A, rC.A),
            this.syncWith([rs.A, nW.A, rC.A], P.tEg),
            (rN = new Set(ta.w.get(rf)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return;
        let t = rC.A.getMemberCount(e.id);
        return (
            !rN.has(e.id) &&
            null != t &&
            t >= rT.dH &&
            rs.A.can(P.xBc.ADMINISTRATOR, e) &&
            !e.features.has(P.GuildFeatures.COMMUNITY)
        );
    }
}
let rO = new rS(X.h, {
    PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!rN.has(t)) return rN.add(t), ta.w.set(rf, rN), !0;
    },
});
var rL = n(992250);
let ry = { MAX_MEMBER_COUNT: new Set() };
class rb extends T.Ay.Store {
    static displayName = "MaxMemberCountChannelNoticeStore";
    initialize() {
        this.waitFor(rs.A, nW.A, rC.A),
            this.syncWith([rs.A, nW.A, rC.A], P.tEg),
            ta.w.remove(P.n5X.MAX_MEMBER_COUNT_100),
            ta.w.remove(P.n5X.MAX_MEMBER_COUNT_250),
            (ry[P.n5X.MAX_MEMBER_COUNT] = new Set(ta.w.get(P.n5X.MAX_MEMBER_COUNT)) ?? new Set());
    }
    isVisible(e) {
        if (null == e) return !1;
        let t = rC.A.getMemberCount(e.id) ?? 0,
            n = rs.A.can(P.xBc.ADMINISTRATOR, e);
        return !ry[P.n5X.MAX_MEMBER_COUNT].has(e.id) && n && e.maxMembers > 0 && e.maxMembers - t <= 1e4;
    }
}
let rv = new rb(X.h, {
    MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        if (!ry[P.n5X.MAX_MEMBER_COUNT].has(t))
            return ry[P.n5X.MAX_MEMBER_COUNT].add(t), ta.w.set(P.n5X.MAX_MEMBER_COUNT, ry[P.n5X.MAX_MEMBER_COUNT]), !0;
    },
});
var rD =
    (((d = {})[(d.ENABLE_PUBLIC_GUILD = 0)] = "ENABLE_PUBLIC_GUILD"),
    (d[(d.MAX_MEMBER_COUNT = 1)] = "MAX_MEMBER_COUNT"),
    (d[(d.GUILD_LIVE_CHANNEL = 2)] = "GUILD_LIVE_CHANNEL"),
    (d[(d.GUILD_MFA_WARNING = 3)] = "GUILD_MFA_WARNING"),
    (d[(d.COMMANDS_MIGRATION = 4)] = "COMMANDS_MIGRATION"),
    (d[(d.APPLICATION_SUBSCRIPTION_EXPIRATION = 5)] = "APPLICATION_SUBSCRIPTION_EXPIRATION"),
    (d[(d.HUB_STUDY_ROOM = 6)] = "HUB_STUDY_ROOM"),
    (d[(d.CLAN_UPSELL = 7)] = "CLAN_UPSELL"),
    d);
function rR(e) {
    let t = e?.id ?? P.dJq,
        n = (0, T.bG)([rO], () => rO.isVisible(e)),
        i = (0, T.bG)([rv], () => rv.isVisible(e)),
        r = (function (e) {
            let t = (0, rr.Ay)(e),
                n = rl.A.getChannel(t[0]?.id),
                i = (0, T.bG)([ri.A], () => ri.A.getStageInstanceByChannel(n?.id), [n]),
                r = (0, rA.BP)(e),
                { isStageNoticeHidden: a, isEventNoticeHidden: l } = (0, T.cf)(
                    [r_],
                    () => ({
                        isStageNoticeHidden: r_.isLiveChannelNoticeHidden({ stageId: i?.id }),
                        isEventNoticeHidden: r_.isLiveChannelNoticeHidden({ eventId: r?.id }),
                    }),
                    [i, r],
                );
            if (null != r)
                if (null != i) return !a;
                else return !l;
            return null != i && !a;
        })(t),
        a = (0, T.bG)([rL.A], () => rL.A.isVisible(e)),
        l = rI.A.useShouldShowChannelNotice(t),
        s = (0, rg.$s)(e),
        { enableStudyGroup: o } = rm(e),
        d = s.length > 0,
        u = o && !e?.features.has(P.GuildFeatures.HUB),
        c = (0, rA.WG)(t);
    if (
        (m.useEffect(() => {
            re.A.getGuildEventsForCurrentUser(t);
        }, [t]),
        n)
    )
        return 0;
    if (i) return 1;
    if (r || null != c) return 2;
    if (a) return 3;
    if (l) return 4;
    else if (d) return 5;
    else if (u) return 6;
    return null;
}
var rM = n(771781),
    rP = n(826673),
    rw = n(313281),
    rx = n(5180),
    rU = n(250719),
    rG = n(780645),
    rk = n(72152),
    rj = n(15073),
    rV = n(488926),
    rH = n(45780),
    rB = n(567305),
    rF = n(555325),
    rY = n(469993),
    rK = n(568185);
let rW = "hasSeenGuildTemplatePromotionTooltip",
    rz = {},
    rq = !0 === ta.w.get(rW);
function r$(e) {
    let { guildId: t } = e;
    rz = { ...rz, [t]: !1 };
}
class rX extends T.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return rz[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !rq;
    }
}
let rZ = new rX(X.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        rz = { ...rz, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        ta.w.set(rW, !0), (rq = !0);
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        rz = { ...rz, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: r$,
    GUILD_TEMPLATE_DELETE_SUCCESS: r$,
});
var rQ = n(285406),
    rJ = n(361158),
    r0 = n(488803),
    r1 = n(764322),
    r2 = n(969983),
    r6 = n(379229),
    r5 = n(139032),
    r4 = n(52260),
    r3 = n(363487),
    r8 = n(342220),
    r7 = n(320989),
    r9 = n(728321),
    ae = n(79858),
    at = n(72314),
    an = n(919638),
    ai = n(808728),
    ar = n(584569),
    aa = n(927578),
    al = n(885631),
    as = n(849380),
    ao = n(420344),
    ad = n(997509);
function au(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e,
        r = (0, tG.bG)([nW.A, ty.default], () => {
            let e = ty.default.getCurrentUser(),
                n = nW.A.getGuild(t);
            return null != n && (0, ee.bM)(n, e);
        });
    return (
        (0, iF.A)({
            type: tr.ImpressionTypes.POPOUT,
            name: tr.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
            properties: { guild_id: t, is_owner: r },
        }),
        (0, p.jsx)(i5.A, {
            targetElementRef: i,
            title: k.intl.string(k.t.C0m4rQ),
            body: k.intl.string(k.t.zOHfEX),
            graphic: { type: "image", src: i$ },
            actions: [
                {
                    text: k.intl.string(k.t.OgQQbG),
                    variant: "primary",
                    onClick: () => {
                        ad.A.open(t, P.BEX.ROLE_SUBSCRIPTIONS);
                    },
                },
            ],
            onRequestClose: () => n(tV.i.USER_DISMISS),
            position: "bottom",
            caretConfig: { align: "center" },
        })
    );
}
var ac = n(338854);
function a_(e) {
    let { guildId: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, p.jsx)(ac.H, {
        targetElementRef: i,
        title: k.intl.string(k.t.gCgirr),
        body: k.intl.string(k.t.fLMZFw),
        assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        action: {
            text: k.intl.string(k.t.BQq86h),
            variant: "primary",
            onClick: () => {
                ad.A.open(t, P.BEX.ROLE_SUBSCRIPTIONS, void 0, P.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
            },
        },
        onRequestClose: () => n(tV.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
var aA = n(383470);
function ah(e) {
    let { markAsDismissed: t } = e;
    return (0, p.jsxs)("div", {
        className: aA.kL,
        children: [
            (0, p.jsx)("div", { className: aA.Wn }),
            (0, p.jsx)(tT.E, { variant: "text-sm/normal", className: aA.Qs, children: k.intl.string(k.t.rdzeVP) }),
            (0, p.jsx)(tg.$, {
                variant: "overlay-primary",
                text: k.intl.string(k.t["NX+WJN"]),
                fullWidth: !0,
                onClick: () => {
                    t(tV.i.AUTO);
                },
            }),
        ],
    });
}
var aE = n(166978);
function ap(e) {
    let { guild: t, markAsDismissed: n, targetElementRef: i } = e;
    return (0, p.jsx)(i5.A, {
        targetElementRef: i,
        title: k.intl.string(k.t.Hgd22r),
        body: k.intl.string(k.t.SorTPA),
        graphic: { type: "image", src: "/assets/d611c6cf03ca4eff.svg" },
        actions: [
            {
                text: k.intl.string(k.t["9l+df7"]),
                variant: "primary",
                onClick: (e) => {
                    ad.A.open(t.id, P.BEX.DISCOVERY_LANDING_PAGE);
                },
            },
        ],
        onRequestClose: () => n(tV.i.USER_DISMISS),
        position: "bottom",
        caretConfig: { align: "center" },
    });
}
function am(e) {
    let { renderPopout: t, renderGuildHeaderDropdownButton: n } = e,
        i = m.useRef(null);
    return (0, p.jsx)(i8.Y, {
        targetElementRef: i,
        renderPopout: () =>
            (0, p.jsx)("div", { onClick: (e) => e.stopPropagation(), children: "function" == typeof t ? t(i) : t }),
        position: "bottom",
        align: "center",
        animation: i8.Y.Animation.TRANSLATE,
        shouldShow: !0,
        children: () => (0, p.jsx)("div", { ref: i, children: n() }),
    });
}
let aI = m.memo(function (e) {
    let { contentDescriptor: t, guild: n, renderGuildHeaderDropdownButton: i } = e,
        { contentType: r, data: a, markAsDismissed: l } = t,
        s = { position: "bottom", align: "center", caretConfig: { align: "center" } };
    return (0, p.jsx)(p.Fragment, {
        children: (() => {
            switch (r) {
                case i6.M.GUILD_POWERUP_PERKS_COACHMARK:
                    return (0, p.jsx)(am, {
                        renderPopout: (e) =>
                            (0, p.jsx)(aE.UB, { guildId: n.id, markAsDismissed: l, channelRowRef: e, ...s }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case i6.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK:
                    return (0, p.jsx)(am, {
                        renderPopout: (e) =>
                            (0, p.jsx)(aE.YX, { guildId: n.id, markAsDismissed: l, channelRowRef: e, ...s }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case i6.M.GAME_SERVER_PRICING_CHANGE_COACHMARK:
                    return (0, p.jsx)(am, {
                        renderPopout: (e) =>
                            (0, p.jsx)(aE.Ns, { guildId: n.id, markAsDismissed: l, channelRowRef: e, ...s }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case i6.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK:
                    return (0, p.jsx)(am, {
                        renderPopout: (e) => (0, p.jsx)(aE.K8, { guildId: n.id, markAsDismissed: l, channelRowRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case i6.M.BOOST_TO_UNLOCK_COACHMARK: {
                    let e = a?.featuredPowerup;
                    if (null == e) return i();
                    return (0, p.jsx)(am, {
                        renderPopout: (t) =>
                            (0, p.jsx)(aE.Gw, {
                                type: r6.o.BOOST_TO_UNLOCK,
                                guildId: n.id,
                                powerup: e,
                                markAsDismissed: l,
                                channelRowRef: t,
                                ...s,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case i6.M.EXPIRING_POWERUP_COACHMARK: {
                    let e = a?.featuredExpiringPowerup;
                    if (null == e) return i();
                    return (0, p.jsx)(am, {
                        renderPopout: (t) =>
                            (0, p.jsx)(aE.Mr, {
                                type: r6.o.EXPIRING_PERK,
                                guildId: n.id,
                                featuredExpiringPowerup: e,
                                markAsDismissed: l,
                                channelRowRef: t,
                                ...s,
                            }),
                        renderGuildHeaderDropdownButton: i,
                    });
                }
                case i6.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
                    return (0, p.jsx)(am, {
                        renderPopout: (e) => (0, p.jsx)(au, { guildId: n.id, markAsDismissed: l, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case i6.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
                    return (0, p.jsx)(am, {
                        renderPopout: (e) => (0, p.jsx)(ap, { guild: n, markAsDismissed: l, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case i6.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
                    return (0, p.jsx)(am, {
                        renderPopout: (0, p.jsx)(ah, { markAsDismissed: l }),
                        renderGuildHeaderDropdownButton: i,
                    });
                case i6.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
                    return (0, p.jsx)(am, {
                        renderPopout: (e) => (0, p.jsx)(a_, { guildId: n.id, markAsDismissed: l, targetElementRef: e }),
                        renderGuildHeaderDropdownButton: i,
                    });
                default:
                    return i();
            }
        })(),
    });
});
var ag = n(789645),
    aC = n(284245);
let aT = eG().debounce(t7.Ay.trackWithMetadata, 500),
    af = (e) => {
        let {
            guild: t,
            title: n,
            message: i,
            image: r,
            type: a,
            imageMarginX: l,
            imageMarginTop: s,
            trackingSource: o,
            undismissable: d,
            onDismissed: u,
            onClick: c,
            cta: _,
            ctaColor: A,
        } = e;
        m.useEffect(() => {
            aT(P.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: a, guild_id: t.id });
        }, [t.id, a]);
        let h = null;
        "function" == typeof _
            ? (h = _())
            : null != _ &&
              (h = (0, p.jsx)(tJ.$n, {
                  "data-migration-pending": !0,
                  className: aC.HM,
                  size: tJ.$n.Sizes.SMALL,
                  onClick: () => {
                      null != a &&
                          ec.default.track(P.HAw.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: o,
                              guild_id: t.id,
                              notice_type: a,
                          }),
                          c?.();
                  },
                  fullWidth: !0,
                  color: A,
                  children: _,
              }));
        let E = null != l ? `${l}px` : "16px";
        return (0, p.jsxs)("div", {
            className: aC.kX,
            children: [
                !0 === d
                    ? null
                    : (0, p.jsx)(to.D, {
                          onClick: () => {
                              t7.Ay.trackWithMetadata(P.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: a }), u?.();
                          },
                          className: aC.VN,
                          "aria-label": k.intl.string(k.t.WAI6xu),
                          children: (0, p.jsx)(ag.P, { size: "md", color: "currentColor", className: aC.ut }),
                      }),
                null != r &&
                    (0, p.jsx)("div", {
                        className: aC.ZS,
                        style: { marginTop: `${s}px`, marginLeft: E, marginRight: E },
                        children: "string" == typeof r ? (0, p.jsx)("img", { className: aC.Sl, src: r, alt: "" }) : r,
                    }),
                (0, p.jsxs)("div", {
                    className: aC.iU,
                    children: [
                        null != n
                            ? (0, p.jsx)(tC.D, { variant: "heading-md/semibold", className: aC.DD, children: n })
                            : null,
                        (0, p.jsx)(tT.E, { variant: "text-sm/normal", children: i }),
                        h,
                    ],
                }),
            ],
        });
    };
var aN = n(975571);
function aS(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, p.jsx)(af, {
        image: "/assets/061504eb3d226883.png",
        guild: t,
        onDismissed: () => n(tV.i.UNKNOWN),
        onClick: () => {
            open(aN.A.getArticleURL(P.MVz.CONNECTION_DETAILS)), n(tV.i.UNKNOWN);
        },
        title: k.intl.string(k.t.YMgaJt),
        message: k.intl.string(k.t["AV/9eW"]),
        cta: k.intl.string(k.t.hvVgAZ),
        trackingSource: P.kZU.LINKED_ROLES_ADMIN_NUX,
        type: P.n5X.LINKED_ROLES_ADMIN,
    });
}
var aO = n(636537);
let aL = {
        fetch() {
            X.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH" }),
                aO.Bo.get({ url: P.Rsh.UNCLAIMED_GAMES, oldFormErrors: !0, rejectWithError: !1 }).then(
                    (e) => {
                        let { body: t } = e;
                        X.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: t });
                    },
                    () => {
                        X.h.dispatch({ type: "UNCLAIMED_GAMES_FETCH_FAIL" });
                    },
                );
        },
    },
    ay = e_.A.Millis.DAY,
    ab = 5 * e_.A.Millis.MINUTE,
    av = {},
    aD = !1,
    aR = null,
    aM = null;
function aP() {
    !(aD || (null != aM && Date.now() < aM + ab)) && (null == aR || Date.now() >= aR + ay) && aL.fetch();
}
class aw extends T.Ay.Store {
    static displayName = "UnclaimedGamesStore";
    getUnclaimedGameIdsForGuild(e) {
        return aP(), av[e] ?? [];
    }
    hasUnclaimedGames(e) {
        aP();
        let t = av[e];
        return null != t && t.length > 0;
    }
    getGuildIdsWithUnclaimedGames() {
        return aP(), Object.keys(av).filter((e) => av[e].length > 0);
    }
    get fetching() {
        return aD;
    }
    get lastFetchedAt() {
        return aR;
    }
}
let ax = new aw(X.h, {
        LOGOUT: function () {
            (av = {}), (aD = !1), (aR = null), (aM = null);
        },
        UNCLAIMED_GAMES_FETCH: function () {
            aD = !0;
        },
        UNCLAIMED_GAMES_FETCH_SUCCESS: function (e) {
            let { guildIdToGameIds: t } = e;
            (av = t), (aD = !1), (aR = Date.now()), (aM = null);
        },
        UNCLAIMED_GAMES_FETCH_FAIL: function () {
            (aD = !1), (aM = Date.now());
        },
    }),
    aU = (0, rE.C)({
        kind: "guild",
        id: "2026-02_game_claim_coachmark",
        label: "Game Claim Coachmark",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enable Game Claim Coachmark", config: { enabled: !0 } }],
    });
var aG = n(509434),
    ak = n(975807),
    aj = n(201438),
    aV = n(194362),
    aH = n(307301),
    aB = n(841352);
function aF(e) {
    let { imageSrc: t } = e;
    return (0, p.jsxs)("div", {
        className: aB.kL,
        children: [
            (0, p.jsx)("div", { className: aB.j3, children: (0, p.jsx)("img", { className: aB.Su, src: t, alt: "" }) }),
            (0, p.jsx)("div", {
                className: aB.gm,
                children: (0, p.jsx)("div", {
                    className: aB.WA,
                    children: (0, p.jsx)(aH.j, { size: "sm", color: tQ.A.colors.TEXT_BRAND }),
                }),
            }),
        ],
    });
}
var aY = n(140461);
function aK(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = ((0, T.bG)([ax], () => ax.getUnclaimedGameIdsForGuild(t.id), [t.id]) ?? [])[0] ?? null,
        { coverImageUrl: r, gameName: a } = (0, aj.A)(i, k.intl.string(k.t.VQq92a));
    if (null == r) return null;
    let l = t.features.has(P.GuildFeatures.VERIFIED) ? k.intl.string(k.t.uUARXe) : k.intl.string(k.t["0Dx29f"]);
    return (0, p.jsx)(af, {
        guild: t,
        onDismissed: () => n(tV.i.USER_DISMISS),
        title: k.intl.format(k.t.Q11WTQ, { gameName: a }),
        message: l,
        cta: (0, p.jsxs)("span", {
            className: aY.m,
            children: [k.intl.string(k.t["2u6ZlY"]), (0, p.jsx)(aG.I, { size: "xs", color: "currentColor" })],
        }),
        type: P.n5X.GAME_CLAIM,
        image: (0, p.jsx)(aF, { imageSrc: r }),
        imageMarginX: 60,
        onClick: async () => {
            n(tV.i.TAKE_ACTION);
            let e = await (0, aV.a)(P.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, ak.A)(e);
        },
    });
}
var aW = n(631305),
    az = n(473145),
    aq = n(874864);
function a$(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (0, az.Os)(t, P.TVA.TIER_2),
        { analyticsLocations: r } = (0, tS.Ay)(eC.A.GUILD_BANNER_NOTICE);
    return (0, p.jsx)(af, {
        guild: t,
        onDismissed: () => n(tV.i.UNKNOWN),
        cta: k.intl.string(k.t.oPAx73),
        message: k.intl.format(k.t.AcaNYw, { boostsNeeded: i }),
        type: P.n5X.GUILD_BANNER,
        image: "/assets/f7ead7c3a969ed19.png",
        onClick: () =>
            (0, aW.A)({
                analyticsLocations: r,
                analyticsSourceLocation: { section: P.JJy.CHANNEL_NOTICE, object: P.ZSU.SERVER_BANNER_TOOLTIP },
                guild: t,
                perks: (0, aq.QR)(),
            }),
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var aX = n(509536);
class aZ extends m.PureComponent {
    handleButtonClick = () => {
        let { guild: e } = this.props;
        (0, aX.K4)({ guildId: e.id, location: { section: P.JJy.CHANNEL_NOTICE, object: P.ZSU.SERVER_STATUS_CTA } });
    };
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, p.jsx)(af, {
            guild: e,
            onDismissed: () => n(tV.i.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? k.intl.string(k.t.hlitVQ) : k.intl.string(k.t.XHtaDD),
            cta: k.intl.string(k.t["vqb+H1"]),
            trackingSource: P.kZU.GUILD_SUBSCRIPTION_NOTICE,
            type: P.n5X.GUILD_BOOSTING,
            image: "/assets/9b7fadd75ade640d.svg",
            imageMarginX: 26,
        });
    }
}
let aQ = T.Ay.connectStores([rC.A], (e) => {
    let { guild: t } = e;
    return { memberCount: rC.A.getMemberCount(t.id) };
})(aZ);
var aJ = n(933832),
    a0 = n(782603),
    a1 = n(81466),
    a2 = n(116085),
    a6 = n(597601),
    a5 = n(451394),
    a4 = n(104171),
    a3 = n(47167),
    a8 = n(713654),
    a7 = n(790535),
    a9 = n(110618),
    le = n(312006),
    lt = n(403362),
    ln = n(707592),
    li = n(698441),
    lr = n(935159),
    la = n(11550),
    ll = n(435328),
    ls = n(563312),
    lo = n(9448),
    ld = n(974930),
    lu = n(666394),
    lc = n(28164);
let l_ = m.memo(function (e) {
    let {
        heading: t,
        location: n,
        locationIcon: i,
        details: r,
        detailsIcon: a,
        topic: l,
        onClickCloseIcon: s,
        children: o,
    } = e;
    return (0, p.jsxs)("div", {
        className: lc.kX,
        children: [
            (0, p.jsxs)("div", {
                className: ti()(lc.fI, lc.pF),
                children: [
                    (0, p.jsx)("div", { className: lc.Ok }),
                    (0, p.jsx)(tT.E, {
                        color: "text-feedback-positive",
                        variant: "text-xs/semibold",
                        className: lc.U4,
                        children: t,
                    }),
                    null != s &&
                        (0, p.jsx)(to.D, {
                            onClick: s,
                            className: lc.ut,
                            "aria-label": k.intl.string(k.t.cpT0Cq),
                            children: (0, p.jsx)(ag.P, { size: "xs", color: "currentColor" }),
                        }),
                ],
            }),
            (0, p.jsx)(tC.D, { color: "text-strong", variant: "heading-md/semibold", className: lc.eq, children: l }),
            (0, p.jsxs)("div", {
                className: ti()(lc.fI, lc.pF),
                children: [
                    i,
                    (0, p.jsx)(tT.E, { color: "none", variant: "text-xs/normal", className: lc.HA, children: n }),
                    null != r &&
                        null != a &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)(tT.E, {
                                    className: lc.hY,
                                    color: "none",
                                    variant: "text-xs/normal",
                                    children: "•",
                                }),
                                a,
                                (0, p.jsx)(tT.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: lc.zH,
                                    children: r,
                                }),
                            ],
                        }),
                ],
            }),
            o,
        ],
    });
});
function lA(e) {
    let { guildEvent: t, channel: n } = e,
        i = (0, a3.Ay)(n),
        r = (0, T.yK)(
            [ro.Ay],
            () =>
                ro.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        a = (0, a8.gU)(n);
    return (0, p.jsx)(l_, {
        onClickCloseIcon: () => (0, lr.iF)({ eventId: t?.id }),
        heading: k.intl.string(k.t["X2K3/4"]),
        topic: t.name,
        location: i,
        locationIcon: null != a ? (0, p.jsx)(a, { size: "xs", color: "currentColor", className: lc.uE }) : null,
        children: (0, p.jsx)(lT, { channel: n, speakers: r, voiceType: 1 }),
    });
}
function lh(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, ld.G3)(t),
        r = (0, T.bG)([li.Ay], () => li.Ay.isInterestedInEventRecurrence(t.id, i), [t.id, i]),
        a = (0, T.bG)([la.A], () => la.A.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return (
        r || null != a || (0, lr.pE)(t.id),
        (0, p.jsx)(tg.$, {
            onClick: function () {
                (0, lu.A)(t.id, null, t.guild_id, () => setTimeout(() => (0, lr.Lx)(t.id), 1e3)),
                    ec.default.track(P.HAw.CHANNEL_NOTICE_CTA_CLICKED, { guild_id: t.guild_id, notice_type: n });
            },
            text: k.intl.string(k.t.DlcqlU),
            icon: r ? aJ.A : a0.X,
            variant: r ? "secondary" : "primary",
            size: "sm",
            fullWidth: !0,
        })
    );
}
function lE(e) {
    let { guildEvent: t, noticeType: n } = e,
        i = (0, lo.oF)(t),
        r = null != i ? (0, ll.l)(i, !0) : null,
        a = (0, lo.WN)(t),
        l = (0, a3.Ay)(a),
        s = (0, a8.gU)(a),
        { startTime: o, endTime: d } = (0, ls.Ay)(t),
        { startDateTimeString: u, upcomingEvent: c, diffMinutes: _ } = (0, ld.CC)(o.toISOString(), d?.toISOString()),
        A = c
            ? _ > 0
                ? k.intl.formatToPlainString(k.t.PQlCWk, { minutes: _ })
                : k.intl.string(k.t.WINqKV)
            : k.intl.formatToPlainString(k.t.DC6h3G, { date: u });
    return (
        m.useEffect(() => {
            ec.default.track(P.HAw.CHANNEL_NOTICE_VIEWED, { notice_type: n, guild_id: t.guild_id });
        }, [t, n]),
        (0, p.jsxs)("div", {
            className: lc.kX,
            children: [
                (0, p.jsxs)("div", {
                    className: lc.fI,
                    children: [
                        (0, p.jsx)(to.D, {
                            onClick: () => (0, ln.uR)({ eventId: t.id }),
                            className: lc.oP,
                            children: (0, p.jsx)(tT.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                className: lc.eq,
                                children: t.name,
                            }),
                        }),
                        (0, p.jsx)(to.D, {
                            onClick: () => {
                                ec.default.track(P.HAw.CHANNEL_NOTICE_CLOSED, { notice_type: n, guild_id: t.guild_id }),
                                    (0, lr.Lx)(t.id);
                            },
                            className: lc.ut,
                            "aria-label": k.intl.string(k.t.cpT0Cq),
                            children: (0, p.jsx)(ag.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                }),
                (0, p.jsxs)("div", {
                    className: ti()(lc.fI, lc.pF),
                    children: [
                        (0, p.jsx)(a1.C, {
                            size: "custom",
                            color: "currentColor",
                            className: lc.uE,
                            width: 16,
                            height: 16,
                        }),
                        (0, p.jsx)(tT.E, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            className: lc.Sv,
                            children: A,
                        }),
                    ],
                }),
                (0, p.jsxs)("div", {
                    className: ti()(lc.fI, lc.pF),
                    children: [
                        null != s
                            ? (0, p.jsx)(s, { size: "xs", color: "currentColor", className: lc.uE })
                            : (0, p.jsx)(a2.B, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 16,
                                  height: 16,
                                  className: lc.uE,
                              }),
                        (0, p.jsx)(tT.E, {
                            color: "none",
                            variant: "text-xs/normal",
                            className: lc.HA,
                            children: l ?? r,
                        }),
                    ],
                }),
                (0, p.jsx)(lh, { guildEvent: t, noticeType: n }),
            ],
        })
    );
}
function lp(e) {
    let { guildEvent: t } = e,
        n = (0, lo.oF)(t);
    return null == n
        ? null
        : (0, p.jsx)(l_, {
              onClickCloseIcon: () => (0, lr.iF)({ eventId: t?.id }),
              heading: k.intl.string(k.t["1+boPi"]),
              topic: t.name,
              location: (0, ll.l)(n, !0),
              locationIcon: (0, p.jsx)(a2.B, {
                  size: "custom",
                  color: "currentColor",
                  width: 16,
                  height: 16,
                  className: lc.uE,
              }),
              children: (0, p.jsx)(lm, { guildEvent: t }),
          });
}
function lm(e) {
    let { guildEvent: t } = e,
        n = m.useCallback(() => {
            (0, ln.uR)({ eventId: t.id });
        }, [t]);
    return (0, p.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: lc.PD,
        children: (0, p.jsx)(tg.$, {
            variant: "active",
            size: "sm",
            text: k.intl.string(k.t.z4FcDs),
            fullWidth: !0,
            onClick: n,
        }),
    });
}
function lI(e) {
    let { channel: t, label: n } = e;
    return (0, p.jsx)("div", {
        "data-button-hoisted-classname-wrapper": !0,
        className: lc.PD,
        children: (0, p.jsx)(tg.$, {
            variant: "active",
            size: "sm",
            text: n,
            fullWidth: !0,
            onClick: () => {
                null != t && null != t.getGuildId() && ((0, a7.av)(t), (0, tL.uh)(t.getGuildId(), t.id));
            },
        }),
    });
}
function lg(e) {
    let { stageInstance: t, channel: n } = e,
        i = (0, a3.Ay)(n),
        r = (0, T.yK)([rt.A], () => [...new Set(rt.A.getMutableParticipants(n.id, rn.ip.SPEAKER).map((e) => e.user))], [
            n.id,
        ]),
        a = (0, T.bG)([rt.A], () => rt.A.getParticipantCount(n.id, rn.ip.AUDIENCE), [n.id]),
        l = k.intl.formatToPlainString(k.t["+v2pN2"], { count: `${a}` });
    return (0, p.jsx)(l_, {
        onClickCloseIcon: () => (0, lr.iF)({ stageId: t?.id }),
        heading: k.intl.string(k.t["X2K3/4"]),
        location: i,
        details: l,
        detailsIcon: (0, p.jsx)(a6.L, {
            size: "custom",
            color: "currentColor",
            width: 14,
            height: 14,
            className: lc.uE,
        }),
        locationIcon: (0, p.jsx)(a5.q, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: lc.uE,
        }),
        topic: t.topic,
        children: (0, p.jsx)(lT, { channel: n, speakers: r, voiceType: 2 }),
    });
}
var lC = (((u = {})[(u.VOICE = 1)] = "VOICE"), (u[(u.STAGE = 2)] = "STAGE"), (u[(u.STUDY_ROOM = 3)] = "STUDY_ROOM"), u);
function lT(e) {
    var t;
    let { channel: n, speakers: i, voiceType: r } = e,
        a = n.getGuildId(),
        l = m.useMemo(() => i.slice(0, 3), [i]),
        s = (0, T.bG)([rs.A], () => rs.A.can(P.xBc.CONNECT, n)),
        o =
            ((t = n.id),
            (0, T.bG)([M.default, et.A, le.Ay], () => {
                let e = M.default.getId();
                return et.A.getVoiceChannelId() === t ? le.Ay.getPermissionsForUser(e, t) : null;
            }, [t])),
        d = k.intl.string(k.t.VJlc0S);
    switch (r) {
        case 1:
            d = k.intl.string(k.t.VJlc0S);
            break;
        case 2:
            (d = k.intl.string(k.t.ZYO5OK)),
                o?.speaker ? (d = k.intl.string(k.t["/cnSFc"])) : null != o && (d = k.intl.string(k.t.btSGOj));
            break;
        case 3:
            d = k.intl.string(k.t.wBoE6L);
            break;
        default:
            (0, lt.xb)(r);
    }
    return null == a
        ? null
        : (0, p.jsxs)(p.Fragment, {
              children: [
                  l.length > 0
                      ? (0, p.jsxs)("div", {
                            className: ti()(lc.fI, lc.pF),
                            children: [
                                (0, p.jsx)(a4.Ay, { guildId: a, users: l, showUserPopout: !0, size: a4.DN.SIZE_16 }),
                                (0, p.jsx)(tT.E, {
                                    color: "none",
                                    variant: "text-xs/normal",
                                    className: lc.c8,
                                    children: (0, a9.c)(a, l, n?.id, i.length),
                                }),
                            ],
                        })
                      : null,
                  s && null == o && (0, p.jsx)(lI, { channel: n, label: d }),
              ],
          });
}
let lf = m.memo(function (e) {
    var t;
    let n,
        i,
        r,
        { guild: a } = e,
        l = ((t = a.id), (n = (0, rA.r2)(t)), (i = (0, rr.Ay)(t)), (r = rl.A.getChannel(i[0]?.id)), n ?? r),
        s = (0, rA.BP)(a.id),
        o = (0, rA.WG)(a.id),
        d = (0, T.bG)([ri.A], () => ri.A.getStageInstanceByChannel(l?.id), [l]),
        { isStageNoticeHidden: u, isEventNoticeHidden: c } = (0, T.cf)(
            [r_],
            () => ({
                isStageNoticeHidden: r_.isLiveChannelNoticeHidden({ stageId: d?.id }),
                isEventNoticeHidden: r_.isLiveChannelNoticeHidden({ eventId: s?.id }),
            }),
            [d, s],
        ),
        _ = null,
        A = null != d && null != l && !u;
    null == s || c
        ? A && (_ = (0, p.jsx)(lg, { stageInstance: d, channel: l }))
        : s.entity_type === rd.Ps.STAGE_INSTANCE && A
          ? (_ = (0, p.jsx)(lg, { stageInstance: d, channel: l }))
          : s.entity_type === rd.Ps.EXTERNAL
            ? (_ = (0, p.jsx)(lp, { guildEvent: s }))
            : s.entity_type === rd.Ps.VOICE && null != l && (_ = (0, p.jsx)(lA, { guildEvent: s, channel: l }));
    let h = a.features.has(P.GuildFeatures.COMMUNITY);
    if (null == _ && null != o && !h) {
        let { upcomingEvent: e, noticeType: t } = o;
        _ = (0, p.jsx)(lE, { guildEvent: e, noticeType: t });
    }
    return _;
});
function lN(e) {
    let { guild: t, markAsDismissed: i } = e;
    return (0, p.jsx)(af, {
        guild: t,
        onDismissed: () => i(tV.i.UNKNOWN),
        onClick: function () {
            (0, f.openModalLazy)(async () => {
                let { default: e } = await n.e("90496").then(n.bind(n, 401155));
                return (t) => (0, p.jsx)(e, { ...t });
            });
        },
        message: k.intl.string(k.t["1+hiP6"]),
        cta: k.intl.string(k.t.hvVgAZ),
        trackingSource: P.kZU.HUB_LINK_NOTICE,
        type: P.n5X.HUB_LINK,
        image: "/assets/fe7f670e6ffe6cf6.svg",
    });
}
var lS = n(717421),
    lO = n(450510);
let lL = (e) => {
    let { channel: t, guild: n } = e;
    return (0, p.jsx)(af, {
        guild: n,
        onDismissed: () => {
            (0, lO.sF)(lO._2.HUB_STUDY_ROOM_NOTICE);
        },
        onClick: () => {
            (0, lO.sF)(lO._2.HUB_STUDY_ROOM_NOTICE),
                null != t && null != t.getGuildId() && ((0, a7.av)(t), (0, tL.uh)(t.getGuildId(), t.id));
        },
        title: k.intl.string(k.t["4Y2AS7"]),
        message: k.intl.string(k.t.wTsxTS),
        cta: k.intl.string(k.t.wBoE6L),
        image: "/assets/0b9061ca8185c832.svg",
        type: P.n5X.HUB_STUDY_ROOM,
    });
};
var ly = n(994190);
let lb = function (e) {
    let { name: t, channel: n } = e,
        i = (0, T.yK)(
            [ro.Ay],
            () =>
                ro.Ay.getVoiceStatesForChannel(n).map((e) => {
                    let { user: t } = e;
                    return t;
                }),
            [n],
        ),
        r = (0, a8.gU)(n);
    return (0, p.jsx)(l_, {
        heading: k.intl.string(k.t["X2K3/4"]),
        topic: t,
        location: k.intl.string(k.t.LZA6Na),
        locationIcon: null != r ? (0, p.jsx)(r, { size: "xs", color: "currentColor", className: ly.K }) : null,
        children: (0, p.jsx)(lT, { channel: n, speakers: i, voiceType: lC.STUDY_ROOM }),
    });
};
var lv = n(48686);
function lD(e) {
    let { channel: t, guild: n } = e,
        i = (0, T.bG)([lO.HP], () => lO.HP.hasHotspot(lO._2.HUB_STUDY_ROOM_NOTICE)),
        r = (0, lv.Q)(t.guild_id),
        a = (0, a3.Ay)(t),
        l = (0, lS.z)({ maxHeight: 300 * !r, overflow: "hidden", delay: 400 });
    return (0, p.jsx)(i1.animated.div, {
        style: l,
        children: i ? (0, p.jsx)(lL, { channel: t, guild: n }) : (0, p.jsx)(lb, { name: `📚☕ ${a}`, channel: t }),
    });
}
let lR = function (e) {
    let { guild: t } = e,
        n = (0, T.bG)([ai.Ay], () => ai.Ay.getChannels(t.id)[ai.vM][0]),
        i = (0, T.bG)([rs.A], () => null != n && rs.A.can(P.xBc.CONNECT, n.channel));
    return t.features.has(P.GuildFeatures.HUB) && null != n && i
        ? (0, p.jsx)(lD, { channel: n.channel, guild: t })
        : null;
};
function lM(e) {
    let { guild: t } = e,
        n = () => rI.A.dismissNotice(t.id);
    return (0, p.jsx)(af, {
        guild: t,
        onDismissed: n,
        cta: k.intl.string(k.t.RzWDqY),
        message: k.intl.format(k.t["kQ/MDl"], {}),
        type: P.n5X.COMMANDS_MIGRATION,
        image: "/assets/ab63b30e9bc8855c.svg",
        onClick: () => {
            n(), ad.A.open(t.id, P.BEX.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22,
    });
}
var lP = n(587895),
    lw = n(143582);
function lx(e) {
    let t,
        { guild: n } = e,
        i = (0, rg.$s)(n),
        r = () => (0, lw.Hc)(n.id),
        a = m.useMemo(() => new Set(i.map((e) => e.applicationId)), [i]),
        l = (0, T.yK)([lP.A], () => {
            let e = [];
            for (let t of a) {
                let n = lP.A.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [a]);
    return 0 === l.length
        ? null
        : ((t =
              1 === l.length
                  ? k.intl.formatToPlainString(k.t["Egq+G/"], { a: l[0].name })
                  : 2 === l.length
                    ? k.intl.formatToPlainString(k.t.LxU9R3, { a: l[0].name, b: l[1].name })
                    : 3 === l.length
                      ? k.intl.formatToPlainString(k.t.crKXMC, { a: l[0].name, b: l[1].name, c: l[2].name })
                      : k.intl.string(k.t.MvfowF)),
          (0, p.jsx)(af, {
              guild: n,
              onDismissed: r,
              message: t,
              type: P.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: "/assets/eaaec668caed688e.svg",
              onClick: () => {
                  r(), ad.A.open(n.id, P.BEX.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: k.intl.string(k.t.Rr3MAe),
          }));
}
var lU = n(628287);
let lG = (e) => {
    let { guild: t } = e,
        n = m.useCallback(() => {
            var e;
            (e = t.id), X.h.dispatch({ type: "PUBLIC_UPSELL_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, p.jsx)(af, {
        guild: t,
        onDismissed: n,
        onClick: () => ad.A.open(t.id, P.BEX.COMMUNITY),
        message: k.intl.string(k.t["2klD0Z"]),
        trackingSource: P.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: P.n5X.PUBLIC_UPSELL,
        image: lU,
        cta: k.intl.string(k.t.hvVgAZ),
    });
};
var lk = n(536194);
class lj extends m.PureComponent {
    render() {
        return (0, p.jsx)(af, {
            guild: this.props.guild,
            onClick: () => (0, e4.openUserSettings)(e5.X.ACCOUNT_PANEL),
            message: k.intl.format(k.t["oCd+at"], {}),
            cta: k.intl.string(k.t["8dCrV9"]),
            trackingSource: P.kZU.GUILD_MFA_WARNING,
            type: P.n5X.MFA_WARNING,
            image: "/assets/74690dbe995fcda0.svg",
            imageMarginX: 54,
            undismissable: !0,
        });
    }
}
class lV extends m.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, f.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e("28136"), n.e("22547"), n.e("42738")]).then(n.bind(n, 1310));
            return (n) => (0, p.jsx)(t, { ...n, guild: e, source: P.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = et.A.getChannelId(),
            t = k.intl.formatToPlainString(k.t.DEn7nu, { invitePeople: k.intl.string(k.t.Sd8Ixw) });
        this.props.markAsDismissed(tV.i.UNKNOWN), null != e && td.A.sendBotMessage(e, t);
    };
    render() {
        let e = `${k.intl.string(k.t.VWqWZQ)}
${k.intl.string(k.t["0Lgb/K"])}`;
        return (0, p.jsx)(af, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: k.intl.string(k.t.Sd8Ixw),
            trackingSource: P.kZU.INVITE_NOTICE,
            type: P.n5X.INVITE,
            image: "/assets/f59ed15bef9f5c18.svg",
            imageMarginX: 46,
        });
    }
}
let lH = (e) => {
    let { guild: t } = e,
        n = m.useCallback(() => {
            var e;
            (e = t.id), X.h.dispatch({ type: "MAX_MEMBER_COUNT_NOTICE_DISMISS", guildId: e });
        }, [t.id]);
    return (0, p.jsx)(af, {
        guild: t,
        onDismissed: n,
        message: k.intl.format(k.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: aN.A.getArticleURL(P.MVz.MAX_MEMBERS),
        }),
        type: P.n5X.MAX_MEMBER_COUNT,
        image: "/assets/5cc728db4badfc0e.svg",
        imageMarginX: 61,
    });
};
var lB = n(475358),
    lF = n(675704),
    lY = n(793322);
let lK = (e) => {
    let t = (0, p.jsx)(lB.e, { shortcut: lF.R.binds["0"], keyClassName: aC.Eb });
    return (0, p.jsx)(af, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(tV.i.UNKNOWN),
        onClick: () => (0, lY.WU)("CHANNEL_NOTICE"),
        message: k.intl.string(k.t.Qhk8cs),
        cta: t,
        trackingSource: P.kZU.QUICK_SWITCHER_NOTICE,
        type: P.n5X.QUICKSWITCHER,
        image: "/assets/1b763dab67be227b.svg",
        imageMarginX: 50,
    });
};
var lW = n(174768);
class lz extends T.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(nW.A), this.syncWith([nW.A], P.tEg);
    }
    channelNoticePredicate(e, t) {
        return !e.features.has(P.GuildFeatures.BANNER) && Date.now() - t >= P.D2K;
    }
}
let lq = new lz(X.h);
class l$ extends T.Ay.Store {
    static displayName = "GuildBoostingNoticeStore";
    initialize() {
        this.waitFor(rs.A), this.syncWith([rs.A], P.tEg);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= P.D2K && rs.A.can(P.xBc.MANAGE_GUILD, e);
    }
}
let lX = new l$(X.h);
var lZ = n(731667);
function lQ() {
    return !0;
}
class lJ extends T.Ay.Store {
    static displayName = "InviteNoticeStore";
    initialize() {
        this.waitFor(rs.A), this.syncWith([rs.A], lQ);
    }
    channelNoticePredicate(e, t) {
        return Date.now() - t >= P.D2K && rs.A.can(P.xBc.ADMINISTRATOR, e);
    }
}
let l0 = new lJ(X.h),
    l1 = "lastHiddenChannelNotice",
    l2 = [
        { type: P.n5X.CLAN_ADMIN_UPSELL, dismissibleContentType: i6.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL },
        {
            type: P.n5X.GUILD_BOOSTING,
            store: lX,
            dismissibleContentType: i6.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
        },
        { type: P.n5X.GUILD_BANNER, store: lq, dismissibleContentType: i6.M.CHANNEL_NOTICE_GUILD_BANNER },
        { type: P.n5X.INVITE, store: l0, dismissibleContentType: i6.M.CHANNEL_NOTICE_INVITE },
        { type: P.n5X.HUB_LINK, store: lZ.A, dismissibleContentType: i6.M.CHANNEL_NOTICE_HUBLINK },
        { type: P.n5X.QUICKSWITCHER, store: lW.A, dismissibleContentType: i6.M.CHANNEL_NOTICE_QUICKSWITCHER },
        { type: P.n5X.LINKED_ROLES_ADMIN, dismissibleContentType: i6.M.LINKED_ROLE_ADMIN_GUILD },
        { type: P.n5X.GAME_CLAIM, dismissibleContentType: i6.M.GAME_CLAIM_COACHMARK },
    ],
    l6 = l2.map((e) => e.store).filter(lt.Vq),
    l5 = new Set([i6.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, i6.M.CHANNEL_NOTICE_GUILD_BANNER]);
function l4(e) {
    e.stopPropagation();
}
let l3 = [];
function l8(e) {
    var t, n;
    let i,
        r,
        { guild: a } = e,
        [l, s] = m.useState(ta.w.get(l1) ?? 0),
        o =
            ((n = t = a.id),
            (i = aU.useExperiment(
                { guildId: n, location: "useCanShowGameClaimCoachmark" },
                { autoTrackExposure: !1 },
            ).enabled),
            (r = (0, T.bG)(
                [rs.A, ax],
                () =>
                    !!i && !!rs.A.canWithPartialContext(P.xBc.ADMINISTRATOR, { guildId: t }) && ax.hasUnclaimedGames(t),
                [t, i],
            )),
            m.useMemo(() => {
                let e = [];
                return r && e.push(i6.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : l3;
            }, [r])),
        [d, u] = (0, tk.ww)(o, a.id, tV.m.CHANNEL_NOTICES, !0),
        c = null != d,
        _ = (0, T.yK)(
            l6,
            () =>
                c
                    ? []
                    : l2
                          .filter((e) => {
                              let { dismissibleContentType: t, store: n } = e;
                              return !0 === n?.channelNoticePredicate(a, l) && !l5.has(t);
                          })
                          .map((e) => e.dismissibleContentType),
            [a, l, c],
        ),
        [A, h] = (0, tk.kn)(_, tV.m.CHANNEL_NOTICES),
        E = d ?? A,
        I = null != d ? u : h,
        g = m.useCallback(() => {
            var e;
            (e = Date.now()), ta.w.set(l1, e), s(e), I(tV.i.UNKNOWN);
        }, [I]),
        C = (() => {
            switch (E) {
                case i6.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, p.jsx)(lN, { guild: a, markAsDismissed: g });
                case i6.M.CHANNEL_NOTICE_INVITE:
                    return (0, p.jsx)(lV, { guild: a, markAsDismissed: g });
                case i6.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, p.jsx)(aQ, { guild: a, markAsDismissed: g });
                case i6.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, p.jsx)(lK, { guild: a, markAsDismissed: g });
                case i6.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, p.jsx)(a$, { guild: a, markAsDismissed: g });
                case i6.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, p.jsx)(aS, { guild: a, markAsDismissed: () => I(tV.i.UNKNOWN) });
                case i6.M.GAME_CLAIM_COACHMARK:
                    return (0, p.jsx)(aK, { guild: a, markAsDismissed: I });
                default:
                    return null;
            }
        })();
    return null == C ? null : (0, p.jsx)("div", { onContextMenu: l4, children: C });
}
let l7 = (e) => {
    let { guild: t } = e;
    switch (rR(t)) {
        case rD.ENABLE_PUBLIC_GUILD:
            return (0, p.jsx)(lG, { guild: t });
        case rD.MAX_MEMBER_COUNT:
            return (0, p.jsx)(lH, { guild: t });
        case rD.GUILD_LIVE_CHANNEL:
            return (0, p.jsx)(lf, { guild: t });
        case rD.GUILD_MFA_WARNING:
            return (0, p.jsx)(lj, { guild: t });
        case rD.COMMANDS_MIGRATION:
            return (0, p.jsx)(lM, { guild: t });
        case rD.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, p.jsx)(lx, { guild: t });
        case rD.HUB_STUDY_ROOM:
            return (0, p.jsx)(lR, { guild: t });
    }
    return lk.P.isDisallowPopupsSet() ? null : (0, p.jsx)(l8, { guild: e.guild });
};
var l9 = n(532233);
function se(e) {
    let { guild: t, setHasSubheader: n } = e,
        i = m.useRef(null);
    return (
        m.useLayoutEffect(() => {
            let e = i.current;
            null != e && n(e.childNodes.length > 0);
        }),
        (0, p.jsx)("div", { className: l9.k, ref: i, children: (0, p.jsx)(l7, { guild: t }) })
    );
}
var st = n(66933),
    sn = n(846930),
    si = n(153822);
let sr = "server-settings",
    sa = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class sl extends m.PureComponent {
    historyUnlisten = () => {};
    guildHeaderRef = m.createRef();
    guildHeaderDropdownButtonRef = m.createRef();
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    showTimeout = new eu.Ep();
    state = {
        controller: new i1.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: 88,
        hasGuildSubheader: !1,
    };
    componentDidMount() {
        this.setAnimatedValue(0),
            X.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = r7.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = r7.A.getHistory();
        e.state?.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            X.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
    }
    getGuildBannerHash() {
        let { guild: e, hasChannelNotice: t } = this.props;
        return null == e || t ? null : e.banner;
    }
    handleHistoryChange = (e) => {
        null != e.state &&
            e.state.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    };
    handleHeaderMenuToggle = (e) => {
        let { isHeaderPopoutOpen: t } = this.props;
        e.stopPropagation(), (0, rk.Z)(!t), this.closeAllHeaderNotices();
    };
    handleContextMenu = (e) => {
        let { guild: t, hasFavoritesAccess: i } = this.props;
        if (null != t) {
            if ((0, rx.ai)(t.id)) {
                if (!i) return;
                (0, i7.L3)(e, async () => {
                    let { default: e } = await n.e("60497").then(n.bind(n, 908424));
                    return (t) => (0, p.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
                return;
            }
            (0, i7.L3)(e, async () => {
                let { default: e } = await n.e("10758").then(n.bind(n, 455557));
                return (n) => (0, p.jsx)(e, { ...n, guild: t });
            });
        }
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, rx.ai)(t.id)) return void this.props.onFavoriteGuildContextMenu(e);
            (0, i7.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("49681"),
                    n.e("96382"),
                    n.e("20044"),
                    n.e("28136"),
                    n.e("82486"),
                    n.e("77602"),
                    n.e("68587"),
                    n.e("22547"),
                    n.e("86546"),
                    n.e("15373"),
                    n.e("42749"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("30501"),
                    n.e("25961"),
                    n.e("2736"),
                    n.e("13848"),
                    n.e("47810"),
                    n.e("46291"),
                    n.e("41068"),
                    n.e("32347"),
                    n.e("8458"),
                    n.e("15666"),
                    n.e("11810"),
                    n.e("95765"),
                    n.e("13337"),
                    n.e("65338"),
                    n.e("4788"),
                    n.e("16603"),
                ]).then(n.bind(n, 860417));
                return (n) => (0, p.jsx)(e, { ...n, guild: t });
            });
        }
    };
    closeAllHeaderNotices = () => {
        this.handleCloseSubscribeTooltip(),
            this.handleCloseTemplateDirtyTooltip(),
            this.handleCloseStudentHubPrivacySettingsTooltip();
    };
    handleCloseStudentHubPrivacySettingsTooltip = () => {
        let e = (0, rP.k8)(i6.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
            t = this.props.guild?.features.has(P.GuildFeatures.HUB);
        !e && t && (0, rP.Dr)(i6.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: tV.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && rK.A.hideGuildTemplateDirtyTooltip(e.id);
    };
    renderMenuPopout = async () => {
        let { default: e } = await Promise.all([n.e("13337"), n.e("39817")]).then(n.bind(n, 587664));
        return (t) => {
            let { closePopout: n } = t,
                { guild: i } = this.props;
            return null != i && (0, p.jsx)(e, { onClose: n, guild: i });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, p.jsx)(aI, {
                  contentDescriptor: n,
                  guild: t,
                  renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
              });
    };
    renderGuildHeaderDropdownButton = (e) => {
        let t = e ? i4.t : i3.a;
        return (0, p.jsx)(t, { ref: this.guildHeaderDropdownButtonRef, size: "xs", color: "currentColor" });
    };
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: i } = this.props,
            { shouldShowSubscribeTooltip: r } = this.state;
        return n
            ? (0, p.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, p.jsx)(r9.A, {
                      tutorialId: sr,
                      position: "bottom",
                      inlineSpecs: sa,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, p.jsxs)(p.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !i &&
                            (0, p.jsx)(i5.A, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: k.intl.string(k.t.Rk2RJk),
                                body: k.intl.string(k.t.sFSrFH),
                                onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                    ],
                })
              : i || e
                ? this.renderGuildHeaderDropdownButton(e)
                : r
                  ? (0, p.jsxs)(p.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, p.jsx)(i5.A, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: k.intl.string(k.t.Q3qa4x),
                                body: k.intl.string(k.t.UyHD4O),
                                onRequestClose: this.handleCloseSubscribeTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                        ],
                    })
                  : this.renderGuildHeaderUpsellPopout(e);
    }
    renderGuildHeader(e) {
        let {
                guild: t,
                isHeaderPopoutOpen: n,
                showGuildHeaderTutorial: i,
                showGuildTemplateDirtyTooltip: r,
                isGuildHeaderDismissibleTooltipShown: a,
                headerAnalyticsLocations: l,
            } = this.props,
            {
                controller: s,
                renderBanner: o,
                bannerVisible: d,
                bannerVisibleHeight: u,
                communityInfoVisible: c,
            } = this.state,
            _ = i || r || a;
        return null == t
            ? null
            : (0, p.jsx)(tS.f5, {
                  value: l,
                  children: (0, p.jsx)(i8.Q, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: i8.Y.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, rk.Z)(!1);
                      },
                      spacing: 4,
                      children: (i) => {
                          let { onClick: r, ...a } = i;
                          return (0, p.jsx)(ao.Ay, {
                              ref: this.guildHeaderRef,
                              guild: t,
                              controller: s,
                              renderBanner: o,
                              hasSubheader: e,
                              bannerVisible: d,
                              communityInfoVisible: c,
                              guildBanner: this.getGuildBannerHash(),
                              onClick: this.handleHeaderMenuToggle,
                              onContextMenu: this.handleHeaderContextMenu,
                              disableBannerAnimation: _,
                              animationOverlayHeight: u,
                              ...a,
                              children: this.renderGuildHeaderNotices(n),
                          });
                      },
                  }),
              });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            i = null != t && (0, al.A)(t);
        null != t && (n || i) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e));
    }
    setAnimatedValueForBanner = (e) => {
        let {
            renderBanner: t,
            communityInfoVisible: n,
            bannerVisible: i,
            bannerVisibleHeight: r,
            controller: a,
        } = this.state;
        ((e >= 88 && i) || (e < 88 && !i)) && (i = !i),
            ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
            (r = Math.max(88 - e, 0)),
            (n = i),
            (t !== this.state.renderBanner ||
                i !== this.state.bannerVisible ||
                r !== this.state.bannerVisibleHeight ||
                n !== this.state.communityInfoVisible) &&
                this.setState({ renderBanner: t, bannerVisible: i, bannerVisibleHeight: r, communityInfoVisible: n }),
            a.update({ value: Math.min(1, Math.max(0, 1 - e / 88)), immediate: !0 }).start();
    };
    setAnimatedValueForGuildInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && (t = !t),
            t !== this.state.communityInfoVisible && this.setState({ communityInfoVisible: t }),
            n.update({ value: Math.min(1, Math.max(0, 1 - e / 20)), immediate: !0 }).start();
    }
    pinBannerOrGuildInfo = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    renderChannelList() {
        let { isUnavailable: e, guild: t, selectedChannel: n, enableStudyGroup: i, ...r } = this.props;
        if (e || null == t)
            return (0, p.jsx)(sn.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(P.GuildFeatures.HUB) && !i)
                return (0, p.jsx)("div", {
                    className: si.r0,
                    children: (0, p.jsx)(rQ.A, { guild: t, channel: n ?? ai.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, rx.ai)(t.id) ? as.T : as.B;
            return (0, p.jsx)(e, {
                guild: t,
                ...r,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, al.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, rx.YC)(e);
        return (0, p.jsxs)("nav", {
            className: si.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": k.intl.formatToPlainString(k.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, p.jsx)(se, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function ss(e) {
    let t,
        i,
        r,
        a,
        l,
        s,
        o,
        d,
        u,
        c,
        _,
        A,
        h,
        E,
        I,
        { guildId: g, hideSelectedChannel: C, selectedChannelId: N } = e,
        S = (0, rG.$)("favorite-guild-header-context"),
        { hasAccess: O } = (0, rw.TW)("ConnectedGuildSidebar"),
        L = (0, T.bG)([nW.A], () => nW.A.getGuild(g)),
        y = (0, rU.A)(g),
        b = (0, T.bG)([at.A], () => at.A.getGuildDimensions(g).scrollTo),
        v = (0, T.bG)([e3.A], () => e3.A.getChannelId()),
        D = (0, T.bG)([rs.A], () => rs.A.can(P.xBc.MANAGE_GUILD, L)),
        R = (0, T.bG)([an.A], () => an.A.isUnavailable(g)),
        M = (0, T.bG)([ty.default], () => ty.default.getCurrentUser()),
        { enableStudyGroup: w } = rm(L),
        x = (0, rM.Ay)((e) => e.currentlyShown.has(i6.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [U, G] = m.useState(!x),
        k = (0, i9.A)(g),
        { analyticsLocations: j } = (0, tS.Ay)(eC.A.GUILD_HEADER);
    m.useEffect(() => {
        g !== k && G(!x);
    }, [g, k, x]);
    let [V, H] = (0, rM.Ay)(
            (e) => [
                l2.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(tV.m.GUILD_HEADER_TOOLTIPS),
            ],
            i2.x,
        ),
        B = rR(L),
        F = (0, f.useModalsStore)(f.hasAnyModalOpenSelector),
        Y = (0, T.bG)([nc.A], () => nc.A.hasLayers()),
        K = (0, rJ.xr)((e) => e.fullScreenLayers.length > 0),
        W = (0, T.bG)([ae.A], () => ae.A.shouldShow(sr)),
        z =
            ((t = (0, T.bG)([nW.A], () => nW.A.getGuild(g))),
            (i = (0, T.bG)([ty.default], () => ty.default.getCurrentUser())),
            (r = null != t && (0, ee.bM)(t, i)),
            (a = (0, rY.oS)()),
            r &&
                (t?.features.has(P.GuildFeatures.COMMUNITY) ?? !1) &&
                a &&
                !(
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE) ||
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL) ||
                    t?.features.has(P.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
                )),
        q = L?.features.has(P.GuildFeatures.HUB) === !0,
        $ = D && L?.features.has(P.GuildFeatures.DISCOVERABLE) === !0,
        X = (0, T.bG)(
            [rZ, nc.A],
            () => null != L && null != M && D && !nc.A.hasLayers() && rZ.shouldShowGuildTemplateDirtyTooltip(g),
        ),
        Z = (0, T.bG)([rl.A], () => rl.A.getChannel(N)),
        { isPopoutOpen: Q } = (0, rk.S)(),
        J = L?.features.has(P.GuildFeatures.COMMUNITY) ?? !1,
        et = aa.Ay.isNewUser(M),
        en = U && !et;
    (l = (0, rj.TZ)(L)),
        (s = rT.dR.some((e) => !(0, rx.ai)(L?.id) && rV.Ib(e, L))),
        (o = L?.defaultMessageNotifications === P.orn.ALL_MESSAGES),
        (d = (0, rH.G$)(i6.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, L?.id ?? P.dJq)),
        (u = l && (s || o) && !d),
        (c = m.useCallback(() => {
            (0, rH._$)(i6.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, L?.id ?? P.dJq, !0, tV.i.DISMISS);
        }, [L])),
        (_ = m.useRef(!1)),
        m.useEffect(() => {
            u &&
                !_.current &&
                ((0, f.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("42446").then(n.bind(n, 653981));
                        return (t) =>
                            (0, p.jsx)(e, {
                                guild: L,
                                canEveryoneModerate: s,
                                isDefaultNotificationsAllMessages: o,
                                ...t,
                            });
                    },
                    { onCloseCallback: c },
                ),
                ec.default.track(P.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                    type: i6.V[i6.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: L?.id ?? P.dJq,
                }),
                (_.current = !0));
        }, [s, L, c, o, u]);
    let ei = (0, rP.JZ)(i6.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        er =
            ((A = (0, T.bG)([nW.A], () => nW.A.getGuild(g))),
            (h = (0, rB._Y)(g)),
            (E =
                A?.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0 &&
                A?.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) === !1),
            (I = (0, rF.X9)(A)),
            E && I && h),
        ea = (0, T.bG)([e3.A], () => e3.A.getChannelId()),
        el = (0, T.bG)([ar.A], () => ar.A.desyncedVoiceStatesCount),
        es = (0, r3.A)(g);
    st.A.useConfig({ guildId: g, location: "guild_sidebar" });
    let eo = (0, r0.C$)(g, "GuildSidebar"),
        ed = (0, T.bG)([nW.A], () => nW.A.getGuild(g)?.features.has(P.GuildFeatures.GAME_SERVERS) ?? !1, [g]),
        eu = (0, r2.J)("GuildSidebar"),
        e_ = (0, r1.S)(g, "GuildSidebar"),
        eA = (0, r8.A)(),
        eh = (0, r5.A)(g),
        eE = !1 === es && eA && null != eh,
        ep = (0, r4.A)(g),
        em = !1 === es && eA && null != ep,
        eI = [];
    q && eI.push(i6.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        z && eI.push(i6.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        $ && eI.push(i6.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === es && eI.push(i6.M.GUILD_POWERUP_PERKS_COACHMARK),
        eo && !ed && !1 === es && eI.push(i6.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eo && eu && !1 === es && eI.push(i6.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK),
        eo && !ed && e_ && !1 === es && eI.push(i6.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        er && eI.push(i6.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [eg, eT] = (0, tk.kn)(eI, tV.m.GUILD_HEADER_TOOLTIPS),
        ef = null == eg,
        [eN, eS] = (0, tk.D8)(
            ef && eE ? i6.M.BOOST_TO_UNLOCK_COACHMARK : null,
            g,
            { cooldownDurationMs: r6.bW, numTimesToRecur: 5 },
            tV.m.GUILD_HEADER_TOOLTIPS,
        ),
        [eO, eL] = (0, tk.D8)(
            ef && eN !== i6.M.BOOST_TO_UNLOCK_COACHMARK && em ? i6.M.EXPIRING_POWERUP_COACHMARK : null,
            g,
            { cooldownDurationMs: r6.mD },
            tV.m.GUILD_HEADER_TOOLTIPS,
        ),
        ey = m.useMemo(
            () =>
                null != eg
                    ? { contentType: eg, data: null, markAsDismissed: eT }
                    : eN === i6.M.BOOST_TO_UNLOCK_COACHMARK && null != eh
                      ? { contentType: eN, data: { featuredPowerup: eh }, markAsDismissed: eS }
                      : eO === i6.M.EXPIRING_POWERUP_COACHMARK && null != ep
                        ? { contentType: eO, data: { featuredExpiringPowerup: ep }, markAsDismissed: eL }
                        : null,
            [eg, eN, eO, eh, ep, eT, eS, eL],
        );
    return (0, p.jsx)(sl, {
        guildId: g,
        hideSelectedChannel: C,
        guild: L,
        scrollToChannel: b,
        selectedChannelId: C ? null : N,
        selectedChannel: Z,
        selectedVoiceChannelId: v,
        voiceStates: y,
        rtcConnectedChannelId: ea,
        rtcDesyncedVoiceStatesCount: el,
        isUnavailable: R,
        user: M,
        hasChannelNotice: null != B || V,
        anyLayerOpen: F || Y || K,
        showGuildHeaderTutorial: W,
        showGuildTemplateDirtyTooltip: X,
        showNewUnreadsBar: J,
        isHeaderPopoutOpen: Q,
        enableStudyGroup: w,
        isGuildHeaderDismissibleTooltipShown: H,
        canShowCoachMarkAtBottom: U,
        headerAnalyticsLocations: j,
        isTutorialHighlightDismissed: ei,
        shouldRenderBurstCoachmark: en,
        guildHeaderContentDescriptor: ey,
        onFavoriteGuildContextMenu: S,
        hasFavoritesAccess: O,
    });
}
var so = n(43201),
    sd = n(379610),
    su = n(164956),
    sc = n(209700),
    s_ = n(9588);
let sA = {
        closeSidebar() {
            X.h.dispatch({ type: "MOBILE_WEB_SIDEBAR_CLOSE" });
        },
        openSidebar() {
            X.h.dispatch({ type: "MOBILE_WEB_SIDEBAR_OPEN" });
        },
    },
    sh = !1;
class sE extends T.Ay.Store {
    static displayName = "MobileWebSidebarStore";
    getIsOpen() {
        return !v.Fr || sh;
    }
}
let sp = new sE(X.h, {
    MOBILE_WEB_SIDEBAR_OPEN: function () {
        sh = !0;
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function () {
        sh = !1;
    },
});
var sm = n(601623),
    sI = n(851109),
    sg = n(331322),
    sC = n(756195),
    sT = n(669150);
function sf() {
    return (0, p.jsx)("div", {
        className: sT.iE,
        children: (0, p.jsxs)(sg.B, {
            className: sT.FS,
            gap: 16,
            padding: 32,
            children: [
                (0, p.jsx)(tC.D, {
                    variant: "heading-xxl/normal",
                    color: "text-strong",
                    className: sT.R_,
                    children: k.intl.string(sC.default["VAK+h9"]),
                }),
                (0, p.jsx)(tT.E, {
                    variant: "text-lg/normal",
                    color: "text-muted",
                    className: sT.Qq,
                    children: k.intl.string(sC.default.dcpdhC),
                }),
            ],
        }),
    });
}
var sN = n(276523),
    sS = n(969117),
    sO = n(710969),
    sL = n(376708),
    sy = n(272720),
    sb = n(366811),
    sv = n(463347),
    sD = n(334465),
    sR = n(97469),
    sM = n(718446),
    sP = n(650048),
    sw = n(696451),
    sx = n(519057),
    sU = n(935208),
    sG = n(187322),
    sk = n(521502),
    sj = n(380610),
    sV = n(828184),
    sH = n(932553);
let sB = "isHideDevBanner",
    sF = () => {
        let [e, t] = (0, m.useState)(ta.w.get(sB, "false")?.toString() === "true"),
            n = (0, T.bG)([sk.A], () => ((0, sj.kK)() ? sk.A.getCurrentBuildOverride().overrides?.discord_web : null));
        if (e) return null;
        let i = () => {
                ta.w.set(sB, !0), t(!0);
            },
            r = () =>
                (0, p.jsx)(to.D, {
                    onClick: i,
                    className: sH.b,
                    "aria-label": k.intl.string(k.t.WAI6xu),
                    children: (0, p.jsx)(ag.P, { size: "md", color: "currentColor", className: sH.ut }),
                });
        return null != n
            ? (0, p.jsxs)("div", {
                  className: ti()(sH.Wz, sH.DM),
                  children: [(0, p.jsx)(sV.A, { className: sH.Kk }), k.intl.string(k.t.Wj3LW4), (0, p.jsx)(r, {})],
              })
            : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, p.jsxs)("div", {
                    className: ti()(sH.Wz, sH.mr),
                    children: [
                        (0, p.jsx)(sV.A, { className: sH.Kk }),
                        k.intl.format(k.t.uyrfYF, { buildNumber: "534838" }),
                        (0, p.jsx)(r, {}),
                    ],
                })
              : null;
    };
var sY = n(820284),
    sK = n(757780),
    sW = n(216894),
    sz = n(985668),
    sq = n(504337),
    s$ = n(655116),
    sX = n(629016),
    sZ = n(97808),
    sQ = n(778712),
    sJ = n(885574),
    s0 = n(235986),
    s1 = n(342296),
    s2 = n(636585),
    s6 = n(42473),
    s5 = n(994314),
    s4 = n(485599),
    s3 = n(246568);
class s8 extends m.PureComponent {
    partyMemberAvatarRef = m.createRef();
    partyMemberOverflowRef = m.createRef();
    isHost() {
        let { currentUser: e, host: t } = this.props;
        return e.id === t?.id;
    }
    renderTitle() {
        return (0, p.jsxs)("div", {
            children: [
                (0, p.jsx)(s4.A, {
                    children: this.isHost()
                        ? k.intl.formatToPlainString(k.t["6UJ7mh"], { count: this.props.party.length })
                        : k.intl.string(k.t.RZufbH),
                }),
                (0, p.jsx)(s5.A, { children: k.intl.string(k.t["0ZHLIi"]) }),
            ],
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, p.jsx)(s6.A, { tooltipText: k.intl.string(k.t.LeZSpz), onClick: e, icon: ag.P });
    }
    renderPartyMember = (e, t) => {
        let n;
        if (null == e) return null;
        let { host: i, onUserContextMenu: r } = this.props;
        return (
            (n = i?.id === e.id ? k.intl.string(k.t["N9bqD+"]) : k.intl.string(k.t.Z2Y4c9)),
            (0, p.jsx)(
                s1.A,
                {
                    targetElementRef: this.partyMemberAvatarRef,
                    user: e,
                    newAnalyticsLocations: [eC.A.AVATAR],
                    position: "top",
                    align: "center",
                    clickTrap: !0,
                    children: (i) =>
                        (0, p.jsx)(n2.m, {
                            text: n,
                            children: (0, m.createElement)(sZ.eu, {
                                ...i,
                                key: e.id,
                                src: e.getAvatarURL(void 0, 24),
                                size: sQ._3.SIZE_24,
                                className: ti()(s3.my, t),
                                "aria-label": e.username,
                                onContextMenu: (t) => void (null != e && r?.(t, e)),
                                avatarContentRef: this.partyMemberAvatarRef,
                            }),
                        }),
                },
                e.id,
            )
        );
    };
    renderPartyMemberOverflow = (e, t, n) => {
        let { renderOverflowPopout: i } = this.props;
        return (0, p.jsx)(
            i8.Y,
            {
                renderPopout: i,
                targetElementRef: this.partyMemberOverflowRef,
                children: (n) =>
                    (0, p.jsx)(n2.m, {
                        text: k.intl.string(k.t.Zf4NPe),
                        children: (0, p.jsx)("div", {
                            ...n,
                            ref: this.partyMemberOverflowRef,
                            className: ti()(s3.ju, t),
                            children: e,
                        }),
                    }),
            },
            n,
        );
    };
    renderHelpIcon() {
        return this.isHost()
            ? (0, p.jsx)(s6.A, {
                  tooltipText: k.intl.string(k.t.U7N2Hs),
                  onClick: () => {
                      window.open(aN.A.getArticleURL(P.MVz.SPOTIFY_CONNECTION), "_blank");
                  },
                  icon: sJ.m,
              })
            : null;
    }
    render() {
        return (0, p.jsxs)("div", {
            className: s3.Jh,
            children: [
                this.renderTitle(),
                (0, p.jsx)(s0.A, {
                    justify: s0.A.Justify.END,
                    className: s3.Hg,
                    children: (0, p.jsx)(s2.A, {
                        users: this.props.party,
                        max: this.isHost() ? 5 : 4,
                        renderUser: this.renderPartyMember,
                        renderMoreUsers: this.renderPartyMemberOverflow,
                    }),
                }),
                (0, p.jsxs)("div", {
                    className: s3.Pt,
                    children: [this.renderHelpIcon(), this.renderStopListeningButton()],
                }),
            ],
        });
    }
}
var s7 = n(297413),
    s9 = n(883202);
class oe extends m.PureComponent {
    handleContextMenu(e, t) {
        (0, i7.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22880")]).then(n.bind(n, 668569));
            return (n) => (0, p.jsx)(e, { ...n, user: t });
        });
    }
    renderUser(e) {
        return null == e
            ? null
            : (0, p.jsxs)(
                  s0.A,
                  {
                      className: s9.kQ,
                      align: s0.A.Align.CENTER,
                      onContextMenu: (t) => {
                          null != e && this.handleContextMenu(t, e);
                      },
                      children: [
                          (0, p.jsx)(sZ.eu, {
                              src: e.getAvatarURL(void 0, 24),
                              "aria-label": e.username,
                              size: sQ._3.SIZE_24,
                              className: s9.my,
                          }),
                          (0, p.jsx)(s7.A, {
                              user: e,
                              className: s9.Tc,
                              usernameClass: s9.Xh,
                              discriminatorClass: s9.D2,
                          }),
                      ],
                  },
                  e.id,
              );
    }
    render() {
        let { party: e, header: t } = this.props,
            n = e.map((e) => this.renderUser(e));
        return (0, p.jsxs)("div", {
            className: s9.Gh,
            children: [
                (0, p.jsx)("div", { className: s9.wx, children: t }),
                (0, p.jsx)(iA.Ip, { className: s9.Qs, fade: !0, children: n }),
            ],
        });
    }
}
class ot extends m.PureComponent {
    hasParty(e) {
        return e.length > 1;
    }
    handleStopListening() {
        (0, sq.A)();
    }
    handleUserContextMenu = (e, t) => {
        (0, i7.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22880")]).then(n.bind(n, 668569));
            return (n) => (0, p.jsx)(e, { ...n, user: t });
        });
    };
    renderOverflowPopout = () => {
        let { party: e } = this.props;
        return (0, p.jsx)(oe, { party: e, header: k.intl.formatToPlainString(k.t.I9et1z, { count: e.length }) });
    };
    render() {
        let { currentUser: e, host: t, party: n } = this.props;
        return this.hasParty(n) && null != e
            ? (0, p.jsx)(s8, {
                  currentUser: e,
                  host: t,
                  party: n,
                  renderOverflowPopout: this.renderOverflowPopout,
                  onStopListening: this.handleStopListening,
                  onUserContextMenu: this.handleUserContextMenu,
              })
            : null;
    }
}
let on = T.Ay.connectStores([s$.A, ty.default, eQ.A, sX.A], () => {
    let e,
        t,
        n = s$.A.getSyncingWith(),
        i = s$.A.getActivity(),
        r = ty.default.getCurrentUser(),
        a = [];
    return (
        null != n
            ? ((e = ty.default.getUser(n.userId)), (t = n.partyId))
            : null != i && null != i.party && null != i.party.id && ((e = r), (t = i.party.id)),
        null != t &&
            (a = eG()(Array.from(sX.A.getParty(t) ?? []))
                .map((e) => ty.default.getUser(e))
                .filter(lt.Vq)
                .orderBy([(t) => null == e || e.id === t.id, (e) => eQ.A.isFriend(e.id)], ["desc", "desc"])
                .value()),
        { currentUser: r, host: e, party: a }
    );
})(ot);
var oi = n(936504),
    or = n(697744),
    oa = n(416696),
    ol = n(446080),
    os = n(744682);
let oo = {
    disable: { name: "disable", start: 0, duration: 70 },
    enable: { name: "enable", start: 100, duration: 70 },
    hover_enabled: { name: "hover_enabled", start: 200, duration: 70 },
    hover_disabled: { name: "hover_disabled", start: 300, duration: 70 },
};
var od = n(315710),
    ou = n(243721),
    oc = n(452027),
    o_ = n(349288),
    oA = n(532676),
    oh = n(432017),
    oE = n(125628),
    op = n(951001),
    om = n(707606),
    oI = n(155718),
    og = n(933958),
    oC = n(967812),
    oT = n(404522),
    of = n(782091),
    oN = n(641703),
    oS = n(521588),
    oO = n(975412),
    oL = n(152567),
    oy = n(329072),
    ob = n(384059),
    ov = n(480890),
    oD = n(379848),
    oR = n(643501),
    oM = n(857253),
    oP = n(528767),
    ow = n(790381),
    ox = n(266080),
    oU = n(30529),
    oG = n(544105),
    ok = n(674586);
function oj(e) {
    let { platform: t } = e;
    return t === oG.f$.XBOX
        ? (0, p.jsx)(ox.A, { className: ok.Kk })
        : t === oG.f$.PLAYSTATION
          ? (0, p.jsx)(ow.A, { className: ok.Kk })
          : null;
}
function oV(e) {
    let { voiceState: t, awaitingRemoteSessionInfo: n } = e,
        i = null != n ? (0, oU.X)(n.type) : null,
        r = (0, T.bG)([oP.A], () => oP.A.getSessionById(t?.sessionId ?? "")?.clientInfo.os),
        a = i ?? r;
    if (null == a || !oG.hv.has(a)) return null;
    let l = null != n,
        s = l
            ? a === oG.f$.XBOX
                ? k.intl.string(k.t.UjA4HX)
                : k.intl.string(k.t.QCw1oW)
            : a === oG.f$.XBOX
              ? k.intl.format(k.t["ynEs/Y"], {})
              : k.intl.format(k.t.TZ17Bg, {});
    return (0, p.jsxs)("div", {
        className: ti()(ok.zr, l ? ok.jI : ok.aW),
        children: [
            (0, p.jsx)(oj, { platform: a }),
            (0, p.jsx)(tT.E, { color: l ? "text-strong" : "always-white", variant: "text-xs/medium", children: s }),
        ],
    });
}
var oH = n(880144),
    oB = n(338771),
    oF = n(421838),
    oY = n(891540),
    oK = n(267102),
    oW = n(205106),
    oz = n(999751),
    oq = n(123973),
    o$ = n(621956),
    oX = n(160761),
    oZ = n(173660),
    oQ = n(234320),
    oJ = n(536432),
    o0 = n(674168),
    o1 = n(126970),
    o2 = n(395766);
function o6(e) {
    let { channel: t, ...i } = e,
        r = m.useRef(null),
        { mute: a, suppress: l } = (0, oZ.A)(t),
        s = (0, tG.bG)([eO.Ay], () => eO.Ay.isDeaf()),
        o = a || l || s,
        [d, u] = m.useState(!1),
        c = t.getGuildId(),
        _ = (0, oJ.VE)({ isSoundboardButtonDisabled: o }),
        [A, h] = (0, oX.DP)(_),
        { analyticsLocations: E, parentAnalyticsLocation: I } = (0, tS.Ay)(eC.A.SOUNDBOARD_BUTTON);
    function g(e) {
        null != c &&
            (0, i7.L3)(e, async () => {
                let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                return (t) =>
                    (0, p.jsx)(e, {
                        guildId: c,
                        sourceAnalyticsLocations: E,
                        ...t,
                        onInteraction: (0, ov.s)("SoundboardContextMenu", eC.A.RTC_PANEL),
                    });
            });
    }
    let {
            Component: C,
            play: T,
            events: { onMouseEnter: f, onMouseLeave: N },
        } = (0, o$.E)(),
        S = m.useCallback(() => {
            o || u(!d);
        }, [o, d]);
    return (
        (0, oQ.Vo)({ event: P.jej.TOGGLE_SOUNDBOARD, handler: S }),
        (0, p.jsx)(tS.f5, {
            value: E,
            children: (0, p.jsx)(n2.m, {
                targetElementRef: r,
                text: a
                    ? k.intl.string(k.t["Ox4/zU"])
                    : l
                      ? k.intl.string(k.t["+YBKYI"])
                      : s
                        ? k.intl.string(k.t.X1lQli)
                        : k.intl.string(k.t["6EJvHt"]),
                asContainer: !0,
                shouldShow: !d,
                children: (0, p.jsx)(i8.Y, {
                    targetElementRef: r,
                    animation: i8.Y.Animation.FADE,
                    shouldShow: d,
                    position: "top",
                    onRequestClose: () => u(!1),
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, p.jsx)(o1.A, {
                            guildId: c,
                            channel: t,
                            onClose: n,
                            gridNotice:
                                A === i6.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                (0, p.jsx)(o0.m, { onClose: n, markAsDismissed: h }),
                            analyticsSource: "rtc panel",
                        });
                    },
                    children: (e) =>
                        (0, p.jsx)("div", {
                            ref: r,
                            children: (0, p.jsx)(tJ.$n, {
                                "data-migration-pending": !0,
                                ...e,
                                className: ti()(o2.x6, o2.Sq, { [o2.W4]: d, [o2.r9]: o }),
                                wrapperClassName: o2.x6,
                                innerClassName: o2.bk,
                                disabled: o,
                                onClick: () => {
                                    null != A && A !== i6.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && h(tV.i.UNKNOWN),
                                        u(!d),
                                        T(),
                                        (0, ob.X)(I, ob.O.SOUNDBOARD);
                                },
                                onMouseEnter: (e) => {
                                    i.onMouseEnter?.(e), f();
                                },
                                onMouseLeave: (e) => {
                                    i.onMouseLeave?.(e), N();
                                },
                                onContextMenu: g,
                                fullWidth: !0,
                                size: tJ.$n.Sizes.MEDIUM,
                                ...i,
                                children: (0, p.jsx)(C, { className: o2.iA, size: "sm", color: "currentColor" }),
                            }),
                        }),
                }),
            }),
        })
    );
}
var o5 = n(96566),
    o4 = n(302884),
    o3 = n(30108),
    o8 = n(39938),
    o7 = n(105530),
    o9 = n(151476),
    de = n(405018),
    dt = n(704877),
    dn = n(848362),
    di = n(222692),
    dr = n(702904),
    da = n(471993),
    dl = n(442353),
    ds = n(970636),
    dd = n(977997),
    du = n(427262),
    dc = n(377802),
    d_ = n(132860),
    dA = n(993838),
    dh = n(106044);
function dE(e) {
    let { tooltipText: t, onClick: n } = e,
        { parentAnalyticsLocation: i } = (0, tS.Ay)(),
        { events: r, Component: a } = (0, dc.O)();
    return (0, p.jsx)(s6.A, {
        tooltipText: t,
        onClick: () => {
            (0, ob.X)(i, ob.O.DISCONNECT), n();
        },
        ...r,
        icon: (0, p.jsx)(a, { size: "refresh_sm" }),
    });
}
function dp(e) {
    let { channel: t } = e;
    return (0, p.jsx)(dE, {
        tooltipText: k.intl.string(k.t.SMKyih),
        onClick: () => {
            (0, dh.A)(t) ? (0, dA.j3)(t) : y.default.disconnect();
        },
    });
}
function dm(e) {
    let { channel: t } = e;
    return (0, p.jsx)(dE, {
        tooltipText: k.intl.string(k.t["6vrfgt"]),
        onClick: () => {
            (0, d_.A)(t) ? (0, ln.Py)(t) : y.default.disconnect();
        },
    });
}
function dI(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, p.jsx)(dp, { channel: t }) : (0, p.jsx)(dm, { channel: t });
}
var dg = n(615675),
    dC = n(666654),
    dT = n(990836),
    df = n(83107),
    dN = n(834040),
    dS = n(408278),
    dO = n(717558),
    dL = n(770178),
    dy = n(765548),
    db = n(556525),
    dv = n(551826),
    dD = n(31408),
    dR = n(595811);
let dM = { offset: 2 },
    dP = {
        serverDeaf: { icon: dg.T, colorize: !0, getStatus: () => k.intl.string(k.t.btxSdB) },
        serverMute: { icon: dC.O, colorize: !0, getStatus: () => k.intl.string(k.t.uLddbQ) },
        deaf: { icon: dT.c, colorize: !1, getStatus: () => k.intl.string(k.t.NjmiOL) },
        mute: { icon: df.z, colorize: !1, getStatus: () => k.intl.string(k.t.tjtv3P) },
        localMute: { icon: dC.O, colorize: !1, getStatus: () => k.intl.string(k.t["9F+xJU"]) },
    };
function dw(e) {
    let t = m.useRef(null),
        { parentAnalyticsLocation: i } = (0, tS.Ay)(),
        { channel: r, user: a, nick: l, mute: s, deaf: o, serverMute: d, serverDeaf: u } = e,
        c = (0, T.bG)([eO.Ay], () => eO.Ay.isLocalMute(a.id)),
        _ = (0, dO.A)({ userId: a.id, checkSoundSharing: !0 }),
        A = r.getGuildId() ?? void 0,
        h = a.getAvatarURL(r.guild_id, 24),
        E = l ?? du.Ay.getName(a),
        {
            icon: I,
            colorize: g,
            getStatus: C,
        } = (function (e) {
            let { serverDeaf: t, deaf: n, serverMute: i, mute: r, localMute: a } = e;
            if (t) return dP.serverDeaf;
            if (n) return dP.deaf;
            if (i) return dP.serverMute;
            if (a) return dP.localMute;
            if (r) return dP.mute;
        })({ serverDeaf: u, deaf: o, serverMute: d, mute: s, localMute: c }) ?? {},
        f = null != C ? k.intl.formatToPlainString(k.t["1+MVBP"], { userName: E, status: C() }) : E;
    function N(e) {
        null != A
            ? (0, i7.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("84442"), n.e("84841"), n.e("13253")]).then(
                      n.bind(n, 107632),
                  );
                  return (t) =>
                      (0, p.jsx)(e, {
                          ...t,
                          user: a,
                          guildId: A,
                          channel: r,
                          showMediaItems: !0,
                          onInteraction: (0, ov.s)("GuildChannelUserContextMenu", eC.A.RTC_PANEL, {
                              targetUserId: a.id,
                          }),
                      });
              })
            : (0, i7.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22880")]).then(
                      n.bind(n, 668569),
                  );
                  return (t) =>
                      (0, p.jsx)(e, {
                          ...t,
                          user: a,
                          showMediaItems: !0,
                          onInteraction: (0, ov.s)("UserGenericContextMenu", eC.A.RTC_PANEL, { targetUserId: a.id }),
                      });
              });
    }
    let S = (0, T.bG)([e8.A], () => e8.A.getVoiceVolume(a.id)),
        O = (0, db.v)({ isSpeaking: _, voiceDb: S, spreadDirection: db.O.INSET_ONLY, maxInnerSpreadRadius: 3 });
    return (0, p.jsx)(s1.A, {
        targetElementRef: t,
        user: a,
        guildId: A,
        channelId: r.id,
        position: "top",
        clickTrap: !0,
        children: (e) =>
            (0, p.jsx)(n2.m, {
                text: f,
                children: (0, p.jsx)(to.D, {
                    innerRef: t,
                    onClick: (t) => {
                        e.onClick(t), (0, ob.X)(i, ob.O.VOICE_USER);
                    },
                    className: dR.H,
                    onContextMenu: N,
                    focusProps: dM,
                    children: (0, p.jsx)(dv.A, {
                        shakeLocation: dD.uD.VOICE_USER,
                        isShaking: _,
                        children: (0, p.jsx)("div", {
                            className: dR.my,
                            style: { backgroundImage: `url(${h})`, ...O },
                            children:
                                null != I
                                    ? (0, p.jsx)(I, {
                                          className: ti()(dR.tr, { [dR.qE]: g }),
                                          color: "currentColor",
                                          size: "xs",
                                      })
                                    : null,
                        }),
                    }),
                }),
            }),
    });
}
function dx(e) {
    let { voiceStates: t, channel: n, className: i } = e,
        [r, a] = m.useState(!1),
        l = (0, T.bG)([M.default], () => M.default.getId()),
        { containerRef: s, maxVisibleAvatars: o } = (function (e) {
            let [t, n] = m.useState(7),
                i = (0, dy.A)(() => {
                    let t = r?.current;
                    if (null == t) return;
                    let i = Math.floor((t.offsetWidth + 4) / 28);
                    n(Math.max(1, e > i ? i - 1 : i));
                }),
                r = (0, dL.w)(i, [e], { fireOnMount: !0, fireOnDepsChange: !0 });
            return { containerRef: r, maxVisibleAvatars: t };
        })(t.length - 1),
        [d, u] = (function (e, t, n) {
            let i = [];
            for (let r of e)
                if (r.user.id !== t && !i.some((e) => e.user.id === r.user.id)) {
                    if (i.length >= n) return [i, !0];
                    i.push(r);
                }
            return [i, !1];
        })(t, l, o),
        c = r ? dN.Q : aH.j,
        _ = r ? k.intl.string(k.t["Z/Tya5"]) : k.intl.string(k.t.XR5BAc),
        A = (0, p.jsx)(n2.m, {
            text: _,
            ariaHidden: !0,
            children: (0, p.jsx)(dS.K, {
                "aria-label": _,
                onClick: () => a(!r),
                icon: () => (0, p.jsx)(c, { size: "md" }),
                variant: "icon-only",
                size: "sm",
            }),
        }),
        h = u && r ? t : d;
    return h.length <= 0
        ? null
        : (0, p.jsx)(iA.Ip, {
              className: ti()(dR.XG, i),
              fade: !0,
              children: (0, p.jsxs)("div", {
                  ref: s,
                  className: ti()(dR.Xk, !r && dR.yZ),
                  role: "group",
                  "aria-label": k.intl.string(k.t["/ZgaVU"]),
                  children: [
                      h.map((e) => {
                          let { user: t, nick: i, voiceState: r } = e;
                          return t.id !== l
                              ? (0, p.jsx)(
                                    dw,
                                    {
                                        channel: n,
                                        user: t,
                                        nick: i,
                                        mute: r.isVoiceMuted(),
                                        deaf: r.isVoiceDeafened(),
                                        video: r.selfVideo,
                                        serverMute: r.mute,
                                        serverDeaf: r.deaf,
                                    },
                                    t.id,
                                )
                              : null;
                      }),
                      u ? A : null,
                  ],
              }),
          });
}
var dU = n(806931),
    dG = n(897513),
    dk = n(509381);
let dj = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function dV(e) {
    let t = e.currentTarget;
    ec.default.track(P.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: P.JJy.NOISE_CANCELLATION_POPOUT },
    });
}
function dH() {
    let e = m.useRef(null);
    (0, od.t)(e),
        m.useEffect(() => {
            ec.default.track(P.HAw.OPEN_POPOUT, { type: P.JJy.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, T.bG)([eO.Ay], () => eO.Ay.getNoiseCancellation()),
        n = (0, T.bG)([eO.Ay], () =>
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Ay,
                    t = e.getSystemMicrophoneMode();
                return !(0, oW.A)(!0, t);
            })(eO.Ay),
        ),
        i = (0, T.bG)([eO.Ay], () => eO.Ay.getActiveInputProfile()),
        r = null != i && i !== dk.m.CUSTOM,
        a = k.intl.string(k.t.uKdWn6),
        l = k.intl.string(k.t.uKdWn6);
    return (
        n
            ? ((a = k.intl.string(k.t.mXZgC9)),
              (l = k.intl.format(k.t.F6lrb4, {
                  onSettingsClick: () => {
                      eO.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : r && (a = k.intl.formatToPlainString(k.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: i })),
        (0, p.jsxs)("div", {
            ref: e,
            className: o2.dD,
            children: [
                (0, p.jsx)(n2.m, {
                    text: a,
                    shouldShow: r || n,
                    align: "right",
                    children: (0, p.jsx)("div", {
                        children: (0, p.jsx)(ou.d, {
                            label: k.intl.string(k.t["WGWHv/"]),
                            checked: t && !n,
                            disabled: r || n,
                            onChange: () => ef.A.setNoiseCancellation(!t, { section: P.JJy.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, p.jsx)(tT.E, { variant: "text-sm/normal", children: l }),
                (0, p.jsx)(oL.A, {
                    title: k.intl.string(k.t.JdUas1),
                    notchBackground: oL.V.BLACK,
                    buttonTest: k.intl.string(k.t["sG+MGg"]),
                    buttonStop: k.intl.string(k.t.Yp3SbJ),
                    location: { section: P.JJy.NOISE_CANCELLATION_POPOUT },
                }),
                (0, p.jsx)(oc.D, {
                    label: k.intl.string(k.t.k6h1F4),
                    children: (0, p.jsxs)(s0.A, {
                        justify: s0.A.Justify.BETWEEN,
                        className: o2.__invalid_footer,
                        children: [
                            (0, p.jsx)(o_.Anchor, {
                                href: P.X7G.KRISP,
                                onClick: (e) => dV(e),
                                children: (0, p.jsx)("div", { className: o2.zQ }),
                            }),
                            (0, p.jsx)(o_.Anchor, {
                                href: aN.A.getArticleURL(P.MVz.NOISE_SUPPRESSION),
                                className: o2.W,
                                onClick: (e) => dV(e),
                                children: k.intl.string(k.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function dB() {
    let { parentAnalyticsLocation: e } = (0, tS.Ay)(),
        t = (0, T.bG)([o8.A], () => o8.A.isMuted()),
        n = t ? k.intl.string(k.t.ScHlfl) : k.intl.string(k.t.zqxfrf);
    return (0, p.jsx)(s6.A, {
        tooltipText: n,
        icon: t ? oA.C : oh.T,
        onClick: () => {
            (0, ob.X)(e, ob.O.STAGE_MUSIC, t), (0, o4.k)(!t);
        },
    });
}
function dF(e) {
    let { channel: t, enableActivities: n, disabled: i } = e,
        r = m.useRef(null),
        { parentAnalyticsLocation: a } = (0, tS.Ay)(),
        l = (0, o9.A)(),
        s = (0, dt.A)(t),
        o = (0, T.bG)(
            [og.Ay],
            () => null != og.Ay.getSelfEmbeddedActivityForLocation(og.Ay.getConnectedActivityLocation()),
        ),
        d = (0, oq.Ay)(t),
        { reachedLimit: u, limit: c } = (0, de.A)(t),
        _ = m.useCallback(() => {
            (0, di.A)();
        }, []),
        A = (0, oK.Us)(),
        h = m.useCallback(
            (e) => {
                if (eO.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    ef.A.setVideoEnabled(e), e && (0, tL.pX)(P.BVt.CHANNEL(t.getGuildId() ?? P.ME, t.id));
                };
                (0, ob.X)(a, ob.O.CAMERA, e), e ? (0, dl.A)(n, A) : n();
            },
            [t, A, a],
        ),
        E = o || n || d,
        { Component: I, play: g, events: C } = (0, ol.K)(l.enabled ? "disable" : "enable");
    return (
        m.useEffect(() => () => g(), [l.enabled, g]),
        (0, p.jsx)(ds.r, {
            onChange: h,
            onCameraUnavailable: _,
            hasPermission: s,
            channelLimit: c,
            channelLimitReached: u,
            ...l,
            enabled: !i && l.enabled,
            children: (e) => {
                let { unavailable: t, isActive: n, label: i, iconComponent: l, iconColor: s, ...o } = e,
                    d = (0, p.jsx)(I, { size: "md", className: ti()(o2.iA, { [o2.ij]: !E }), color: "currentColor" });
                return (0, p.jsx)(i8.Y, {
                    targetElementRef: r,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsx)(oy.A, {
                            onClose: t,
                            minimal: !0,
                            onInteraction: (0, ov.s)("VideoDeviceMenu", a),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: i8.Y.Animation.FADE,
                    children: (e, a) => {
                        let { onClick: l, ...s } = e,
                            { isShown: u } = a;
                        return (0, p.jsx)(n2.m, {
                            text: i,
                            children: (0, p.jsx)(tJ.$n, {
                                "data-migration-pending": !0,
                                buttonRef: r,
                                ...o,
                                ...s,
                                onClick: (e) => {
                                    o.onClick(e), u && l(e);
                                },
                                onMouseEnter: () => {
                                    s.onMouseEnter?.(), C.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    C.onMouseLeave();
                                },
                                onContextMenu: (e) => {
                                    l(e);
                                },
                                size: tJ.$n.Sizes.MEDIUM,
                                className: ti()(o2.x6, o2.Sq, { [o2.rK]: n, [o2.tU]: t, [o2.r9]: o.disabled }),
                                innerClassName: o2.bk,
                                wrapperClassName: o2.x6,
                                fullWidth: !0,
                                focusProps: dj,
                                children: E
                                    ? d
                                    : (0, p.jsxs)(s0.A, {
                                          align: s0.A.Align.CENTER,
                                          children: [d, k.intl.string(k.t.FlNoSV)],
                                      }),
                            }),
                        });
                    },
                });
            },
        })
    );
}
function dY(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, oK.Us)(),
        { parentAnalyticsLocation: r, newestAnalyticsLocation: a } = (0, tS.Ay)(),
        l = i === P.BRT.POPOUT,
        s = (0, of.et)(t.id),
        o = (0, of.dL)(s),
        { userInActivity: d } = (0, T.cf)([og.Ay], () => ({
            userInActivity: null != og.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        u = (0, oT.b)({ surface: oI.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        c = s !== of.xy.CAN_LAUNCH,
        { Component: _, events: A, play: h } = (0, or.c)();
    return n
        ? (0, p.jsx)(oD.GY, {
              contentType: i6.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
              latestVersion: u,
              children: (e) => {
                  let { visibleContent: n, markAsDismissed: i } = e;
                  return (0, p.jsx)(n2.m, {
                      text: o,
                      children: (0, p.jsxs)(tJ.$n, {
                          "data-migration-pending": !0,
                          fullWidth: !0,
                          size: tJ.$n.Sizes.MEDIUM,
                          ...A,
                          onClick: () => {
                              h(),
                                  (0, oO.A)({
                                      context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                      openInPopout: l,
                                      analyticsLocation: a,
                                  }),
                                  (0, ob.X)(r, ob.O.ACTIVITY),
                                  n === i6.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && i(tV.i.TAKE_ACTION);
                          },
                          onMouseEnter: () => {
                              A.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              A.onMouseLeave();
                          },
                          disabled: c,
                          className: ti()(o2.x6, o2.Sq, { [o2.rK]: d, [o2.r9]: c }),
                          innerClassName: o2.bk,
                          wrapperClassName: o2.x6,
                          focusProps: dj,
                          children: [
                              n === i6.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, p.jsx)(oS.a, { top: -1, right: -1 }),
                              (0, p.jsx)(_, { size: "md", color: "currentColor", className: o2.iA }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
function dK(e) {
    let t,
        { channel: n, canGoLive: i, enableActivities: r, disabled: a } = e,
        l = m.useRef(null),
        { parentAnalyticsLocation: s, analyticsLocations: o } = (0, tS.Ay)(),
        d = (0, T.bG)([ty.default], () => ty.default.getCurrentUser()),
        u = (0, T.yK)([ra.A], () => ra.A.getAllActiveStreams()),
        c = (0, dt.A)(n),
        _ = n.getGuildId(),
        A = (0, T.cf)([og.Ay], () => null != og.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        h = (0, oq.Ay)(n),
        E = m.useCallback(() => {
            (0, da.A)(_, n.id, o);
        }, [_, n.id, o]),
        I = u.find((e) => e.ownerId === d?.id),
        g = (0, dn.T)(n, d, u);
    t = null == I ? (i ? E : dr.A) : () => (0, oB.A)(I);
    let C = null != I || g.length > 0,
        f = c ? k.intl.string(k.t.fjBNo1) : k.intl.string(k.t.uQn9B8),
        N = A || r || h,
        S = null != I,
        { Component: O, events: L, play: y } = (0, oa.c)(S ? "disable" : "enable");
    m.useEffect(() => () => y(), [y, S]);
    let b = (0, p.jsx)(O, { size: "md", color: "currentColor", className: ti()(o2.iA, { [o2.ij]: !N }) });
    return (0, p.jsx)(i8.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, p.jsx)(dn.A, {
                channel: n,
                currentUser: d,
                activeStreams: u,
                onClose: t,
                handleGoLive: i ? E : dr.A,
                onInteraction: (0, ov.s)("ManageStreamsMenu", s, { entrypoint: dU.GK.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: i8.Y.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: i, ...r } = e;
            return (0, p.jsx)(n2.m, {
                text: f,
                children: (0, p.jsx)(tJ.$n, {
                    "data-migration-pending": !0,
                    buttonRef: l,
                    size: tJ.$n.Sizes.MEDIUM,
                    onClick: (e) => {
                        (0, ob.X)(s, ob.O.STREAM, null == I), C ? n(e) : t();
                    },
                    disabled: !c || a,
                    className: ti()(o2.x6, o2.Sq, { [o2.rK]: null != I, [o2.r9]: !c || a }),
                    ...(C ? r : null),
                    onMouseEnter: () => {
                        i?.(), L.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        L.onMouseLeave();
                    },
                    innerClassName: o2.bk,
                    wrapperClassName: o2.x6,
                    focusProps: dj,
                    children: N
                        ? b
                        : (0, p.jsxs)(s0.A, { align: s0.A.Align.CENTER, children: [b, k.intl.string(k.t["r0/+v7"])] }),
                }),
            });
        },
    });
}
class dW extends m.PureComponent {
    ref = m.createRef();
    krispButtonRef = m.createRef();
    handleChannelLinkClick = (e) => {
        let { guild: t, channel: n } = this.props;
        ex()(null != n, "Channel is null during navigation click"),
            e.stopPropagation(),
            op.A.channelListScrollTo(t?.id ?? P.ME, n.id),
            (0, ob.X)(eC.A.RTC_PANEL, ob.O.CHANNEL_LINK);
    };
    handleChannelLinkContextMenu = (e) => {
        let { channel: t, analyticsLocations: i } = this.props;
        (0, i7.L3)(e, async () => {
            let { default: e } = await n.e("57550").then(n.bind(n, 576701));
            return (n) =>
                (0, p.jsx)(tS.f5, {
                    value: i,
                    children: (0, p.jsx)(e, {
                        ...n,
                        channel: t,
                        onInteraction: (0, ov.s)("RTCConnectionMenu", eC.A.RTC_PANEL),
                    }),
                });
        });
    };
    handleCloseVoicePanelIntroduction = () => {
        oF.sF(dG._.VOICE_PANEL_INTRODUCTION);
    };
    renderConnectionStatus() {
        let e,
            {
                channel: t,
                guild: n,
                rtcConnectionQuality: i,
                rtcConnectionState: r,
                rtcConnectionLastPing: a,
                hasVideo: l,
            } = this.props;
        if (null == t) return null;
        let s = (0, a3.m1)(t, ty.default, eQ.A);
        return (
            null != n ? ((e = P.BVt.CHANNEL(n.id, t.id)), (s = `${s} / ${n.name}`)) : (e = P.BVt.CHANNEL(P.ME, t.id)),
            (0, p.jsx)(oz.A, {
                channelId: t.id,
                quality: i,
                state: r,
                lastPing: a,
                hasVideo: l,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, p.jsx)(sG.vN, {
                    children: (0, p.jsx)(oi.N_, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, p.jsx)(s5.A, {
                            className: o2.Ix,
                            children: (0, p.jsx)(tT.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: s,
                            }),
                        }),
                    }),
                }),
            })
        );
    }
    renderNoiseCancellation() {
        let {
            noiseCancellationActive: e,
            noiseCancellationError: t,
            hasLayers: n,
            remoteVoiceState: i,
            channel: r,
            voiceStates: a,
        } = this.props;
        return null != i
            ? null
            : r?.isGuildStageVoice() &&
                null == a.find((e) => e.user.id === M.default.getId() && (0, o7.eY)(e.voiceState) === o7.zF.ON_STAGE) &&
                (0, o3.Zl)(r.id)
              ? (0, p.jsx)(dB, {})
              : !n && t
                ? (0, p.jsx)(n2.m, {
                      text: k.intl.string(k.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, p.jsx)(s6.A, {
                          tooltipText: null,
                          disabled: !0,
                          icon: oE.m,
                          "aria-label": k.intl.string(k.t["i+SO/U"]),
                      }),
                  })
                : (0, p.jsx)(
                      i8.Y,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, p.jsx)(dH, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, p.jsx)(dz, {
                                  popoutProps: t,
                                  isShown: i,
                                  noiseCancellationActive: e,
                                  ref: this.krispButtonRef,
                              });
                          },
                      },
                      "krisp-popout",
                  );
    }
    renderVoiceStates() {
        let { channel: e, voiceStates: t, showVoiceStates: n } = this.props;
        return null != e && n && 0 !== t.length
            ? (0, p.jsx)(dx, { voiceStates: t, channel: e, className: o2.Xk })
            : null;
    }
    renderChannelButtons() {
        let {
            channel: e,
            canGoLive: t,
            remoteVoiceState: n,
            enableActivities: i,
            voiceStates: r,
            selfStream: a,
            isPrivateChannelWithEnabledActivities: l,
        } = this.props;
        if (null == e || null != n) return null;
        let s = M.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, o5.Bw)(e.guild_id) || !t) return null;
            let n = r.find((e) => e.user.id === s);
            if (null == n || n.voiceState.suppress) return null;
        }
        let o = (e.isGuildVoice() || l) && i,
            { reachedLimit: d } = (0, de.M)(e),
            u = (0, o5.xn)(e.id);
        return (0, p.jsxs)("div", {
            className: o2.uu,
            children: [
                (0, p.jsx)(dF, { channel: e, enableActivities: o, disabled: !u && d }),
                (0, p.jsx)(dK, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: o,
                    disabled: e.isGuildStageVoice() && ((u && null == a) || (!u && d)),
                }),
                o ? (0, p.jsx)(dY, { channel: e, enableActivities: i }) : null,
                (0, oq.Ay)(e) ? (0, p.jsx)(o6, { channel: e, focusProps: dj }) : null,
            ],
        });
    }
    renderVoicePanelIntroduction = () =>
        (0, p.jsxs)("div", {
            className: ti()(o2.SC, "theme-light"),
            children: [
                (0, p.jsx)(tC.D, {
                    className: o2.oN,
                    variant: "heading-md/semibold",
                    children: k.intl.string(k.t["ba/rL2"]),
                }),
                (0, p.jsx)(tT.E, { className: o2.uf, variant: "text-sm/normal", children: k.intl.string(k.t.Ne1Eew) }),
                (0, p.jsx)(tg.$, {
                    fullWidth: !0,
                    onClick: this.handleCloseVoicePanelIntroduction,
                    text: k.intl.string(k.t.shaBeH),
                    focusProps: dj,
                }),
            ],
        });
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, p.jsx)(i8.Y, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: "top",
                  align: "center",
                  animation: i8.Y.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, p.jsxs)("div", {
                          ref: this.ref,
                          className: o2.kL,
                          children: [
                              (0, p.jsxs)(s0.A, {
                                  className: o2.FI,
                                  align: s0.A.Align.CENTER,
                                  children: [
                                      (0, p.jsx)("div", { className: o2.vW, children: this.renderConnectionStatus() }),
                                      (0, p.jsxs)(s0.A, {
                                          grow: 0,
                                          shrink: 0,
                                          className: o2.nL,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, p.jsx)(dI, { channel: e }),
                                          ],
                                      }),
                                  ],
                              }),
                              this.renderVoiceStates(),
                              this.renderChannelButtons(),
                          ],
                      }),
              });
    }
}
function dz(e) {
    var t;
    let i,
        r,
        a,
        l,
        s,
        o,
        { popoutProps: d, isShown: u, noiseCancellationActive: c, ref: _ } = e,
        { parentAnalyticsLocation: A } = (0, tS.Ay)(),
        {
            play: h,
            Component: E,
            events: I,
        } = ((t = c ? "disable" : "enable"),
        (i = m.useRef(null)),
        ((r = m.useRef(t)).current = t),
        (a = m.useMemo(
            () => () => {
                null != i.current && i.current.play(t);
            },
            [t],
        )),
        (l = m.useCallback(() => {
            if (null == i.current) return;
            let e = "enable" === t ? "hover_disabled" : "hover_enabled";
            i.current.play(e);
        }, [t])),
        (s = m.useCallback(() => {
            if (null == i.current) return;
            let e = "enable" === t ? "hover_disabled" : "hover_enabled";
            i.current.stopIfPlaying(e);
        }, [t])),
        (o = m.useCallback(
            (e) =>
                (0, p.jsx)(os.P, {
                    ...e,
                    src: () => n.e("24596").then(n.t.bind(n, 941983, 19)),
                    ref: i,
                    initialAnimation: r.current,
                    markers: oo,
                }),
            [],
        )),
        {
            events: { onClick: a, onMouseEnter: l, onMouseLeave: s },
            play: a,
            getDuration: m.useCallback(() => i.current?.getDuration(), []),
            getCurrentFrame: m.useCallback(() => i.current?.getCurrentFrame() ?? null, []),
            Component: o,
        });
    return (
        m.useEffect(() => () => h(), [c, h]),
        (0, p.jsx)(s6.A, {
            ...d,
            ref: _,
            onClick: (e) => {
                (0, ob.X)(A, ob.O.KRISP, !c), d.onClick(e);
            },
            onMouseEnter: () => {
                d.onMouseEnter?.(), I.onMouseEnter();
            },
            onMouseLeave: () => {
                I.onMouseLeave();
            },
            tooltipText: u ? null : k.intl.string(k.t.vFiCSx),
            icon: (0, p.jsx)(E, { size: "refresh_sm" }),
        })
    );
}
let dq = (0, om.A)(function (e) {
    let t = (0, oM.A)(),
        n = (0, T.bG)([oR.default], () => oR.default.getAwaitingRemoteSessionInfo()),
        i = (0, T.bG)([ty.default], () => ty.default.getCurrentUser()),
        { channelId: r, ...a } = (0, T.cf)([e3.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: P.bFR.FINE,
                      rtcConnectionState: P.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: e3.A.getChannelId(),
                      rtcConnectionQuality: e3.A.getQuality(),
                      rtcConnectionState: e3.A.getState(),
                      rtcConnectionLastPing: e3.A.getLastPing(),
                  },
        ),
        l = (0, T.bG)([rl.A], () => rl.A.getChannel(r), [r]),
        s = l?.getGuildId(),
        o = (0, T.bG)([nW.A], () => nW.A.getGuild(s), [s]),
        d = (0, T.cf)([eO.Ay], () => ({
            noiseCancellationSupported: eO.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, oW.A)(eO.Ay.getNoiseCancellation(), eO.Ay.getSystemMicrophoneMode()),
            noiseCancellationError: eO.Ay.isNoiseCancellationError(),
            canGoLive: (0, oH.A)(eO.Ay),
        })),
        u = (0, T.bG)(
            [eO.Ay, oY.A],
            () =>
                oY.A.hasHotspot(dG._.VOICE_PANEL_INTRODUCTION) &&
                (0, du.mv)(i) &&
                !eO.Ay.isInteractionRequired() &&
                !l?.isGuildStageVoice(),
        ),
        c = (0, T.bG)([dd.A], () => null != r && dd.A.hasVideo(r), [r]),
        _ = (0, T.bG)([ra.A], () => ra.A.getCurrentUserActiveStream()),
        A = (0, T.bG)([nc.A], () => nc.A.hasLayers()),
        h = (0, T.bG)([su.A], () => su.A.isViewingRoles(s)),
        E = (0, T.bG)([rs.A], () => h && !rs.A.can(P.xBc.VIEW_CHANNEL, l), [h, l]),
        I = iU.vL.useSetting(),
        [g, C, f] = (0, T.yK)(
            [ro.Ay, rt.A],
            () =>
                l?.isGuildStageVoice()
                    ? [rt.A.getMutableParticipants(l.id, rn.ip.SPEAKER), rt.A.getParticipantsVersion(l.id), null]
                    : [null, null, null != l ? ro.Ay.getVoiceStatesForChannel(l) : null],
            [l],
        ),
        N = m.useMemo(
            () =>
                g?.map((e) => {
                    let { user: t, userNick: n, voiceState: i } = e;
                    return { user: t, nick: n, voiceState: i };
                }) ??
                f ??
                [],
            [g, C, f],
        ),
        [S, O] = m.useState(!1);
    m.useEffect(() => {
        (h || E) && O(!1);
    }, [h, E, O]);
    let { analyticsLocations: L } = (0, tS.Ay)(eC.A.RTC_PANEL),
        y = (0, oC.A)(s ?? P.dJq, l?.id),
        b = (0, oN.A)(l?.id);
    return (0, p.jsx)(tS.f5, {
        value: L,
        children: (0, p.jsxs)("div", {
            className: o2.iE,
            children: [
                null != t || null != n ? (0, p.jsx)(oV, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, p.jsx)(dW, {
                    ...e,
                    ...d,
                    ...a,
                    enableActivities: y,
                    remoteVoiceState: t,
                    guild: o,
                    channel: l,
                    hasVideo: c,
                    selfStream: _,
                    hasLayers: A,
                    voiceStates: N,
                    showVoiceStates: I,
                    shouldShowVoicePanelIntroduction: u,
                    isPrivateChannelWithEnabledActivities: b,
                    analyticsLocations: L,
                }),
                !S && h && null != s
                    ? (0, p.jsxs)("div", {
                          className: o2.BT,
                          children: [
                              (0, p.jsx)(tT.E, {
                                  variant: "text-sm/normal",
                                  className: o2.u0,
                                  children: E ? k.intl.string(k.t.efjuQJ) : k.intl.string(k.t.br8H2N),
                              }),
                              (0, p.jsx)(tg.$, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      O(!0);
                                  },
                                  text: k.intl.string(k.t.WAI6xu),
                                  focusProps: dj,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
var d$ = n(28082),
    dX = n(111113);
function dZ(e) {
    let { analyticsLocations: t } = (0, tS.Ay)(eC.A.ACTIVITY_PANEL),
        n = (0, sb.A)((e) => {
            let { guildId: t } = e;
            return t;
        });
    return (0, p.jsx)(tS.f5, { value: t, children: (0, p.jsx)(sz.A, { ...e, guildId: n }) });
}
let dQ = m.memo(function () {
    let e = m.useRef(null);
    (0, nF.i4)(
        e,
        (e) => {
            let { height: t } = e;
            document.body.style.setProperty("--custom-app-panels-height", `${t}px`);
        },
        [],
    );
    let { isSorting: t } = (0, sK.A)();
    return (0, p.jsx)("section", {
        ref: e,
        className: ti()(dX.C3, { [dX.aB]: t }),
        "aria-label": k.intl.string(k.t.vTl6Lk),
        children: (0, p.jsxs)(sG.xp, {
            containerRef: e,
            children: [
                (0, p.jsx)(sF, {}),
                (0, p.jsx)(d$.A, {}),
                (0, p.jsx)(on, {}),
                (0, p.jsx)(sY.A, { section: P.JJy.ACTIVITY_PANEL, children: (0, p.jsx)(dZ, { className: dX.iz }) }),
                (0, p.jsx)(sY.A, { section: P.JJy.RTC_CONNECTION_PANEL, children: (0, p.jsx)(dq, {}) }),
                (0, p.jsx)(sY.A, { section: P.JJy.ACCOUNT_PANEL, children: (0, p.jsx)(sW.A, {}) }),
            ],
        }),
    });
});
var dJ = n(758836),
    d0 = n(539916),
    d1 = n(355097);
let d2 = (0, C.Fe)({ createPromise: () => Promise.resolve().then(n.bind(n, 601117)), webpackId: 601117 }),
    d6 = () => (0, p.jsx)("div", { className: dX.wG, children: (0, p.jsx)(tl.y, {}) }),
    d5 = (0, C.Fe)({
        createPromise: () => n.e("78870").then(n.bind(n, 480178)),
        webpackId: 480178,
        name: "GuildShopPage",
        renderLoader: tA.uW,
    }),
    d4 = (0, C.Fe)({
        createPromise: () => n.e("14078").then(n.bind(n, 148980)),
        webpackId: 148980,
        name: "SocialLayerStorefront",
        renderLoader: d6,
    }),
    d3 = (0, C.Fe)({
        createPromise: () => n.e("8497").then(n.bind(n, 254316)),
        webpackId: 254316,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: d6,
    }),
    d8 = (0, C.Fe)({
        createPromise: () => n.e("33957").then(n.bind(n, 578839)),
        webpackId: 578839,
        name: "GuildHomePage",
        renderLoader: tA.tV,
    }),
    d7 = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("49681"),
                n.e("28136"),
                n.e("15373"),
                n.e("30501"),
                n.e("13848"),
                n.e("47810"),
                n.e("41068"),
                n.e("99583"),
            ]).then(n.bind(n, 28988)),
        webpackId: 28988,
        name: "MemberSafetyPage",
        renderLoader: tA.NU,
    }),
    d9 = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("96382"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("32347"),
                n.e("36320"),
                n.e("72165"),
            ]).then(n.bind(n, 807780)),
        webpackId: 807780,
        name: "ChannelsAndRolesPage",
        renderLoader: tA.n,
    }),
    ue = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("96382"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("36320"),
                n.e("39579"),
            ]).then(n.bind(n, 123071)),
        webpackId: 123071,
        name: "GuildOnboardingPage",
        renderLoader: d6,
    }),
    ut = (0, C.Fe)({
        createPromise: () => Promise.all([n.e("42749"), n.e("35016"), n.e("88615")]).then(n.bind(n, 242269)),
        webpackId: 242269,
        name: "GuildPowerupsPage",
        renderLoader: tA.Ru,
    }),
    un = (0, C.Fe)({
        createPromise: () => Promise.all([n.e("63562"), n.e("19750")]).then(n.bind(n, 717959)),
        webpackId: 717959,
        name: "GameServerPage",
        renderLoader: tA.Ub,
    }),
    ui = (0, C.Fe)({
        createPromise: () => Promise.all([n.e("40976"), n.e("72970")]).then(n.bind(n, 590114)),
        webpackId: 590114,
        name: "ApplicationLibraryPage",
        renderLoader: tA.cL,
    }),
    ur = (0, C.Fe)({
        createPromise: () => n.e("23316").then(n.bind(n, 830443)),
        webpackId: 830443,
        name: "PeoplePage",
        renderLoader: tA.w8,
    }),
    ua = (0, C.Fe)({
        createPromise: () =>
            Promise.all([n.e("83438"), n.e("21595"), n.e("62609"), n.e("41343"), n.e("49287"), n.e("51357")]).then(
                n.bind(n, 442850),
            ),
        webpackId: 442850,
        name: "PrivateChannels",
        renderLoader: tA.bM,
    }),
    ul = (0, C.Fe)({
        createPromise: () =>
            Promise.all([n.e("52803"), n.e("85384"), n.e("96975"), n.e("43498"), n.e("1184"), n.e("14289")]).then(
                n.bind(n, 942262),
            ),
        webpackId: 942262,
        name: "GlobalDiscovery",
        renderLoader: tA.Bj,
    }),
    us = (0, C.Fe)({
        createPromise: () => Promise.all([n.e("33098"), n.e("39967"), n.e("25252")]).then(n.bind(n, 767060)),
        webpackId: 767060,
        name: "FamilyCenterRouter",
        renderLoader: tA.c5,
    }),
    uo = (0, C.Fe)({
        createPromise: () =>
            Promise.all([n.e("52803"), n.e("96975"), n.e("1184"), n.e("5468")]).then(n.bind(n, 133276)),
        webpackId: 133276,
        name: "QuestHomePage",
        renderLoader: tA.g4,
    }),
    ud = (0, C.Fe)({
        createPromise: () => n.e("38652").then(n.bind(n, 461007)),
        webpackId: 461007,
        name: "ICYMIPage",
        renderLoader: tA.so,
    }),
    uu = (0, C.Fe)({
        createPromise: () => n.e("11015").then(n.bind(n, 515766)),
        webpackId: 515766,
        name: "MessageRequestPage",
        renderLoader: tA.rt,
    }),
    uc = (e) => {
        let { match: t } = e,
            n = (0, tp.o)(),
            i = (0, T.bG)([rl.A, et.A], () => {
                let e = et.A.getChannelId();
                return rl.A.getChannel(e);
            }),
            { guildId: r, channelId: a, messageId: l, threadId: s } = t.params,
            o = a ?? void 0;
        null == o && null != t.params.gameShopPageIndex && (o = iZ.VV.GAME_SHOP);
        let d = (0, T.bG)([nW.A], () => nW.A.getGuild(r)),
            u = (0, T.bG)([sw.Ay], () => (null == r ? null : sw.Ay.getSelfMember(r))),
            c = (0, r0.C$)(r, "ChannelRenderer"),
            _ = (0, sS.N)("ChannelRenderer"),
            A = d?.features.has(P.GuildFeatures.GAME_SERVERS) ?? !1,
            h = (0, T.bG)([su.A], () => {
                if (null == r) return;
                let e = su.A.getData(r);
                if (e?.type === sc._.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return tq.B.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return tq.B.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            E = (0, T.bG)([tX.A], () => (0, sL.C$)(o) && (0, sL.C$)(s), [o, s]);
        m.useEffect(() => {
            E || (null != d && (0, tL.pX)(P.BVt.CHANNEL(d.id, (0, sy.A)(d))), (0, s_.E)());
        }, [E, d]);
        let I = null != d,
            C = m.useRef(null);
        m.useEffect(() => {
            I ||
                null == r ||
                C.current === r ||
                ((C.current = r), L.A.joinGuild(r, { lurker: !0, autoNavigate: !1 }).catch(() => {}));
        }, [I, r]);
        let f = (0, ic.$)(r);
        if (null != r && null != o && (0, iZ.jq)(o))
            switch (o) {
                case iZ.VV.ROLE_SUBSCRIPTIONS:
                    return f
                        ? (0, p.jsx)(d5, { guildId: r, initialTab: tq.B.GUILD_ROLE_SUBSCRIPTIONS })
                        : (0, p.jsx)(i0, { guildId: r });
                case iZ.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, p.jsx)(d3, { guildId: r });
                case iZ.VV.GAME_SHOP:
                    return (0, p.jsx)(d4, { ...e });
                case iZ.VV.GUILD_SHOP:
                    return (0, p.jsx)(d5, { guildId: r, productId: l, initialTab: h });
                case iZ.VV.MEMBER_APPLICATIONS:
                    return (0, p.jsx)(g.rd, { to: P.BVt.CHANNEL(r, iZ.VV.MEMBER_SAFETY) });
                case iZ.VV.GUILD_HOME:
                    return (0, p.jsx)(d8, { guildId: r });
                case iZ.VV.CHANNEL_BROWSER:
                    return (0, p.jsx)(d9, { guildId: r, selectedSection: d0.qC.BROWSE });
                case iZ.VV.GUILD_ONBOARDING:
                    return (0, p.jsx)(ue, { guildId: r });
                case iZ.VV.CUSTOMIZE_COMMUNITY:
                    return (0, p.jsx)(d9, { guildId: r, selectedSection: d0.qC.CUSTOMIZE });
                case iZ.VV.MEMBER_SAFETY:
                    return (0, p.jsx)(d7, { guildId: r });
                case iZ.VV.GUILD_BOOSTS:
                    return (0, p.jsx)(ut, {
                        guildId: r,
                        powerupListingId: n.get("powerupId") ?? n.get("powerupSkuId"),
                    });
                case iZ.VV.GAME_SERVERS:
                    if (!c || (!A && !_)) return (0, p.jsx)(g.rd, { to: P.BVt.CHANNEL(r) });
                    return (0, p.jsx)(un, { guildId: r });
                case iZ.VV.REPORT_TO_MOD:
                    return (0, p.jsx)(tU.A, {});
                default:
                    (0, lt.xb)(o);
            }
        if ((0, ir.$Y)(d, u)) return (0, p.jsx)(iu, { guildId: r, channelId: o });
        if (i?.type === P.rbe.GUILD_STORE) {
            let e = sU.default.cast(t.params.messageId);
            return (0, p.jsx)(tu, { channel: i, inputSkuId: e }, i.id);
        }
        return (0, p.jsx)(tU.A, {});
    },
    u_ = m.memo(function () {
        let { guildId: e, channelId: t } = (0, sb.A)(),
            { notificationCenterVariant: n } = (0, sI.X8)({ location: "Sidebar" }),
            i = (0, T.bG)([et.A], () => t ?? et.A.getChannelId(e));
        return window.location.pathname.startsWith(P.BVt.CHANNEL(P.gNP))
            ? ("sidebar" !== n && (0, tL.bG)(sP.A.defaultRoute), (0, p.jsx)(sN.A, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(P.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(P.BVt.GUILD_DISCOVERY) ||
                (0, sO.r$)()
              ? (0, p.jsx)(nV, {})
              : null != e
                ? (0, p.jsx)(ss, { selectedChannelId: i, guildId: e }, e)
                : (0, p.jsx)(ua, {});
    }),
    uA = (e) => (0, p.jsx)(uc, { ...e }),
    uh = () => (0, p.jsx)(ul, {}),
    uE = (e) => (0, p.jsx)(up, { ...e }),
    up = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (m.useEffect(() => {
            null != t &&
                null != n &&
                td.A.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                    context: "notification_center_navigation",
                });
        }, [t, n]),
        null == t)
            ? (0, p.jsx)(sf, {})
            : uA(e);
    },
    um = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, p.jsx)(ii, { guildId: t.params.guildId }) : null;
    },
    uI = (e) => {
        let { match: t } = e;
        return (0, tL.pX)(P.BVt.ME), (0, sd.A)(t.params.inviteCode), null;
    },
    ug = () => (0, p.jsx)(ui, {}),
    uC = () => (0, p.jsx)(th, {}),
    uT = () =>
        function (e) {
            let { tab: t } = (0, I.parse)(e.location.search);
            return Object.values(dJ.G2).includes(t) ? (0, p.jsx)(tK, { tab: t, ...e }) : (0, p.jsx)(tK, { ...e });
        };
function uf() {
    return (0, p.jsx)(uo, { topLevelRoute: !0 });
}
let uN = (e) => (0, p.jsx)(tP, { ...e }),
    uS = () => (0, p.jsx)(ur, {}),
    uO = () => (0, p.jsx)(ud, {}),
    uL = () => (0, p.jsx)(uu, {}),
    uy = () => (0, p.jsx)(us, {}),
    ub = (e) => {
        let t = e.location.pathname;
        return (0, p.jsx)(x, {
            deepLinkType: tR.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, p.jsx)(ur, { initialSection: P.m3P.ONLINE });
                    case "addFriends":
                        return (0, p.jsx)(ur, { initialSection: P.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, p.jsx)(ur, { initialSection: P.m3P.PENDING });
                    case "sessionManagement":
                        return (0, p.jsx)(g.rd, { to: (0, sM.settingsPathToRoute)(d1.od.SESSIONS) });
                    case "connections":
                        return (0, p.jsx)(g.rd, {
                            to: { pathname: (0, sM.settingsPathToRoute)(d1.od.CONNECTIONS), search: e.location.search },
                        });
                    case "family-center":
                        return (0, p.jsx)(g.rd, { to: P.BVt.FAMILY_CENTER });
                    case "account-standing":
                        return (0, p.jsx)(g.rd, { to: (0, sM.settingsPathToRoute)(d1.od.ACCOUNT_ACCOUNT_STANDING) });
                    case "authorized-apps":
                        return (0, p.jsx)(g.rd, { to: (0, sM.settingsPathToRoute)(d1.od.AUTHORIZED_APPS) });
                    case "open-shop":
                        let { tab: n } = (0, I.parse)(e.location.search);
                        if (Object.values(dJ.G2).includes(n))
                            return (0, p.jsx)(g.rd, { to: P.BVt.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, p.jsx)(g.rd, { to: P.BVt.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, p.jsx)(g.rd, {
                            to: { pathname: (0, sM.settingsPathToRoute)(d1.od.PROFILE_CUSTOMIZATION) },
                        });
                    case "gift":
                    case "store":
                        return (0, p.jsx)(g.rd, { to: { pathname: P.BVt.NITRO_HOME } });
                    case "connected-games":
                        return (0, p.jsx)(g.rd, {
                            to: (0, sM.settingsPathToRoute)(d1.od.CONTENT_AND_SOCIAL_CONNECTED_GAMES),
                        });
                    case "boost":
                        let i = t.params.guildId;
                        return (0, p.jsx)(g.rd, { to: P.BVt.POWERUP_STORE(i) });
                    case "boost-settings":
                        return (0, p.jsx)(g.rd, { to: (0, sM.settingsPathToRoute)(d1.od.GUILD_BOOSTING) });
                    default:
                        return (0, p.jsx)(g.rd, { to: P.BVt.ME });
                }
            })(e),
        });
    };
function uv(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", `${e}px`);
}
function uD(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: i, hideChannelList: r, isSidebarOpen: a } = e,
        l = (0, T.bG)([tx.A], () => tx.A.isFullscreenInContext()),
        s = (0, tz.useAppSidebarState)((e) => !e.isOpen) && !1;
    m.useLayoutEffect(() => {}, [!1]),
        m.useLayoutEffect(() => {
            if (s) uv(76);
            else {
                let e = parseInt(ta.w.get(tc.o) ?? "");
                Number.isNaN(e) && (e = 375), uv(e);
            }
        }, [s]);
    let o = m.useRef(null),
        d = m.useCallback(
            (e, t) => {
                uv(e);
                t <= 264 ? document.body.classList.add(dX._A) : document.body.classList.remove(dX._A),
                    t >= 432 ? document.body.classList.add(dX.uN) : document.body.classList.remove(dX.uN);
                let n = t - e;
                o.current?.style.setProperty("--custom-overdrag", `${1 + Math.min(Math.abs(n / 76), 0.25)}`);
            },
            [!1],
        ),
        u = m.useCallback(() => {
            document.body.classList.add(dX.cB);
        }, []),
        c = m.useCallback((e) => {
            document.body.classList.remove(dX.cB),
                document.body.classList.remove(dX._A),
                document.body.classList.remove(dX.uN),
                document.body.classList.remove(dX.l4),
                o.current?.style.setProperty("--custom-overdrag", "0px"),
                ta.w.set(tc.o, e),
                ec.default.track(P.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        _ = (0, tE.A)({
            minDimension: 264,
            maxDimension: 432,
            resizableDomNodeRef: o,
            onElementResize: d,
            onElementResizeStart: u,
            onElementResizeEnd: c,
            orientation: tE.R.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        A = m.useCallback(() => {
            tz.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (m.useLayoutEffect(() => {
            s && uv(76);
        }, [s]),
        i)
    )
        return null;
    let h = { className: ti()(dX.th, { [dX.Qd]: !t }) };
    return (0, p.jsx)(ts.N, {
        theme: n,
        children: (e) =>
            (0, p.jsxs)("div", {
                ref: o,
                "data-collapsed": s,
                className: ti()(dX.pz, e, { [dX.Ij]: v.Fr, [dX.R]: l, [dX.WG]: r }),
                children: [
                    a && (0, p.jsx)(so.A, { className: dX.Pl, themeOverride: n }),
                    !r &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)("div", { ...h, children: (0, p.jsx)(u_, {}) }),
                                (0, p.jsx)(to.D, {
                                    onClick: A,
                                    "aria-label": "Resize Sidebar",
                                    className: dX.tq,
                                    onMouseDown: _,
                                }),
                                (0, p.jsx)(dQ, {}),
                            ],
                        }),
                ],
            }),
    });
}
function uR() {
    let e,
        t = (0, T.bG)([sx.Ay], () => sx.Ay.hasNotice()),
        n = (0, sR.NC)(),
        i = (function () {
            let [e, t] = m.useState(() => window.location.pathname.startsWith(P.BVt.GUILD_MEMBER_VERIFICATION("")));
            return (
                m.useEffect(
                    () =>
                        r7.A.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(P.BVt.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        r = ((e = (0, g.zy)()), (0, sD.B)(e.pathname, P.BVt.GUILD_BOOSTING_MARKETING(sv.pv.guildId()))?.isExact === !0),
        a = (0, T.bG)([sp], () => sp.getIsOpen()),
        { notificationCenterVariant: l } = (0, sI.X8)({ location: "Sidebar" }),
        s = (0, t$.f)("AppView"),
        o = (0, g.W5)([
            P.BVt.CHANNEL(P.ME, sv.pv.channelId()),
            P.BVt.CHANNEL(sv.pv.guildId(), sv.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        d = o?.params?.channelId === iZ.VV.GUILD_ONBOARDING,
        u = m.useCallback(() => sA.openSidebar(), []),
        c = ((0, tz.useAppSidebarState)((e) => !e.isOpen), (0, T.bG)([tx.A], () => tx.A.isFullscreenInContext())),
        _ = (0, T.bG)([tZ.A], () => tZ.A.isFrameActive());
    return (0, p.jsx)("div", {
        className: dX.kL,
        children: (0, p.jsx)(nH.A.Provider, {
            value: o?.params.guildId === P.ME ? void 0 : o?.params.guildId,
            children: (0, p.jsxs)("div", {
                className: dX.E3,
                "data-fullscreen": c,
                children: [
                    !c && (0, p.jsx)(d2, {}),
                    v.Fr ? null : (0, p.jsx)(sm.A, {}),
                    (0, p.jsxs)("div", {
                        className: dX.Qs,
                        children: [
                            (0, p.jsx)(tF, {}),
                            (0, p.jsx)(uD, {
                                isSidebarOpen: a,
                                hasNotice: t,
                                sidebarTheme: n,
                                hideChannelList: i || r || d,
                                hideSidebar: !a,
                            }),
                            (0, p.jsx)("div", {
                                className: dX.MY,
                                "data-collapsed": !1,
                                children: (0, p.jsxs)(tm.A.Provider, {
                                    value: u,
                                    children: [
                                        (0, p.jsxs)(g.dO, {
                                            children: [
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.ACTIVITY,
                                                    disableTrack: !0,
                                                    children: (0, p.jsx)(g.rd, { to: P.BVt.ME }),
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                    render: uN,
                                                    impressionName: tr.ImpressionNames.ACTIVITY_DETAILS,
                                                    impressionProperties: (e) => {
                                                        let { match: t } = e;
                                                        return { application_id: t?.params.applicationId };
                                                    },
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.APPLICATION_LIBRARY,
                                                    render: ug,
                                                    impressionName: tr.ImpressionNames.APPLICATION_LIBRARY,
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.APPLICATION_STORE,
                                                    render: uC,
                                                    impressionName: tr.ImpressionNames.APPLICATION_STORE,
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                    render: uT(),
                                                    disableTrack: !0,
                                                }),
                                                s &&
                                                    (0, p.jsx)(tw.A, {
                                                        path: P.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { layoutId: i } = t.params;
                                                            return null == i || "" === i
                                                                ? (0, p.jsx)(tK, { ...n })
                                                                : (0, p.jsx)(tW, { layoutId: i, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                s &&
                                                    (0, p.jsx)(tw.A, {
                                                        path: P.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(
                                                            ":collectionId",
                                                        ),
                                                        render: function (e) {
                                                            let { match: t, ...n } = e,
                                                                { collectionId: i } = t.params;
                                                            return null == i || "" === i
                                                                ? (0, p.jsx)(tK, { ...n })
                                                                : (0, p.jsx)(tY, { collectionId: i, ...n });
                                                        },
                                                        disableTrack: !0,
                                                    }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.COLLECTIBLES_SHOP,
                                                    render: uT(),
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                    render: uT(),
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, { path: P.BVt.ICYMI, render: uO, disableTrack: !0 }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.MESSAGE_REQUESTS,
                                                    render: uL,
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.FAMILY_CENTER,
                                                    render: uy,
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.ME,
                                                    exact: !0,
                                                    render: uS,
                                                    impressionName: tr.ImpressionNames.FRIENDS,
                                                    disableTrack: !0,
                                                }),
                                                l === sI.U5.SIDEBAR &&
                                                    (0, p.jsx)(tw.A, {
                                                        path: P.BVt.CHANNEL(
                                                            P.gNP,
                                                            sv.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                        render: uE,
                                                        disableTrack: !0,
                                                    }),
                                                (0, p.jsx)(tw.A, {
                                                    path: [
                                                        P.BVt.CHANNEL_THREAD_VIEW(
                                                            sv.pv.guildId(),
                                                            sv.pv.channelId(),
                                                            ":threadId",
                                                            ":messageId?",
                                                        ),
                                                        P.BVt.CHANNELS_GAME_SHOP(
                                                            sv.pv.guildId(),
                                                            ":gameShopPageIndex",
                                                            ":gameShopSkuId?",
                                                            ":gameShopSlug?",
                                                        ),
                                                        P.BVt.CHANNEL(P.ME, sv.pv.channelId()),
                                                        P.BVt.CHANNEL(
                                                            sv.pv.guildId(),
                                                            sv.pv.channelId({ optional: !0 }),
                                                            ":messageId?",
                                                        ),
                                                    ],
                                                    render: uA,
                                                    impressionName: tr.ImpressionNames.GUILD_CHANNEL,
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.GLOBAL_DISCOVERY,
                                                    render: uh,
                                                    impressionName: tr.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                    exact: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                    render: uh,
                                                    impressionName: tr.ImpressionNames.GLOBAL_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.GLOBAL_DISCOVERY_APPS,
                                                    render: uh,
                                                    impressionName: tr.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.QUEST_HOME_DEPRECATED,
                                                    render: uh,
                                                    impressionName: tr.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.QUEST_HOME,
                                                    render: uf,
                                                    impressionName: tr.ImpressionNames.QUEST_HOME,
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.GUILD_DISCOVERY,
                                                    render: uh,
                                                    impressionName: tr.ImpressionNames.GUILD_DISCOVERY,
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.GUILD_MEMBER_VERIFICATION(sv.pv.guildId()),
                                                    render: um,
                                                    impressionName: tr.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                        sv.pv.guildId(),
                                                        ":inviteCode?",
                                                    ),
                                                    render: uI,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.GUILD_FEATURE(":feature", sv.pv.guildId()),
                                                    exact: !0,
                                                    render: ub,
                                                    disableTrack: !0,
                                                }),
                                                (0, p.jsx)(tw.A, {
                                                    path: P.BVt.FEATURE(":feature"),
                                                    exact: !0,
                                                    render: ub,
                                                    disableTrack: !0,
                                                }),
                                            ],
                                        }),
                                        _ && (0, p.jsx)(nN, {}),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var uM = n(575486);
n(938796);
var uP = n(665260),
    uw = n(780907),
    ux = n(56562),
    uU = n(77729),
    uG = n(855511),
    uk = n(237774),
    uj = n(885437),
    uV = n(973854),
    uH = n(862927),
    uB = n(815706),
    uF = n(134047),
    uY = n(626584),
    uK = n(181079),
    uW = n(668267),
    uz = n(379587),
    uq = n(953384),
    u$ = n(973522),
    uX = n(136722),
    uZ = n(960755),
    uQ = n(380335),
    uJ = n(211753),
    u0 = n(41984),
    u1 = n(833551),
    u2 = n(515183),
    u6 = n(871633),
    u5 = n(760751),
    u4 = n(232835),
    u3 = n(461213),
    u8 = n(543465),
    u7 = n(619921),
    u9 = n(595623),
    ce = n(256415),
    ct = n(474090),
    cn = n(705751),
    ci = n(788868);
async function cr(e) {
    let {
            runningGame: t,
            game: n,
            detectionMethod: i,
            overlayStatus: r,
            overlayMethod: a,
            sharedGuildIds: l,
            voiceChannelId: s,
            voiceChannelType: o,
            voiceChannelBitrate: d,
            voiceChannelGuildId: u,
        } = e,
        [c, _] = await Promise.all([
            (0, u2.E1)(t.pid),
            eN.Ay.canCollectExecutableFingerprintsForRunningGames()
                ? e0.Ay.getExecutableFingerprintForProcess(t.pid)
                : Promise.resolve(null),
        ]),
        { gameName: A, gameId: h, exe: E, distributor: p, rawExePath: m } = (0, u$.wH)(t),
        I = r.enabledLegacy || r.enabledOOP,
        g = uJ.x.legacyEnabled || uJ.x.oopEnabled,
        C = r.source;
    ec.default.track(P.HAw.LAUNCH_GAME, {
        game: A,
        game_id: h,
        verified: null != n && (0, u$.PQ)(m, n?.executables),
        elevated: t.elevated,
        is_launcher: t?.isLauncher ?? !1,
        game_platform: P.yTV.DESKTOP,
        detection_method: i,
        distributor: p,
        is_overlay_enabled: g,
        is_overlay_game_enabled: I,
        is_overlay_game_source: C,
        fullscreen_type: null != c ? ux.aI[c] : ux.aI.UNKNOWN.toString(),
        hardware_display_count: (await uU.A?.hardware?.getDisplayCount?.()) ?? null,
        overlay_method: u0.Ue[a] ?? (__OVERLAY__ ? u0.Ue[u0.Ue.Hook] : null),
        activity_status_enabled: iU.tz.getSetting(),
        activity_status_shared_guilds: l,
        current_user_status: u3.A.getStatus(),
        game_detection_enabled: (0, eN.Xr)(t),
        executable_path: E,
        voice_channel_id: s,
        voice_channel_type: o,
        voice_channel_bitrate: d,
        voice_channel_guild_id: u,
        distributor_game_id: t.sku,
        hidden_by_distributor: t.hidden,
        game_metadata: (0, u6.MT)(t),
        executable_fingerprint: _ ?? t.executableFingerprint,
    }),
        null != E && eN.Ay.addExecutableTrackedByAnalytics(E);
}
async function ca(e) {
    let {
            runningNonGame: t,
            nonGameApplication: n,
            voiceChannelId: i,
            voiceChannelType: r,
            voiceChannelBitrate: a,
            voiceChannelGuildId: l,
        } = e,
        s = eN.Ay.canCollectExecutableFingerprintsForRunningGames()
            ? await e0.Ay.getExecutableFingerprintForProcess(t.pid)
            : null;
    ec.default.track(P.HAw.LAUNCH_NON_GAME_APPLICATION, {
        name: n.name,
        application_id: n.id,
        application_type: cn.S7.NON_GAME_DETECTABLE,
        elevated: t.elevated,
        game_platform: P.yTV.DESKTOP,
        distributor: t.distributor,
        detection_method: "verified_non_game_application",
        current_user_status: u3.A.getStatus(),
        executable_path: (0, u$.Ic)(t.exePath),
        voice_channel_id: i,
        voice_channel_type: r,
        voice_channel_bitrate: a,
        voice_channel_guild_id: l,
        executable_fingerprint: s ?? t.executableFingerprint,
    });
}
class cl extends m.PureComponent {
    isMessageRequestsInitialized = !1;
    debouncedRobloxAnalytics = eG().debounce(cr, 5e3);
    componentDidUpdate(e) {
        let {
            voiceChannelId: t,
            voiceChannelGuildId: n,
            voiceChannelType: i,
            voiceChannelBitrate: r,
            videoEnabled: a,
            isScreenSharing: l,
            runningGame: s,
            runningGamePid: o,
            runningNonGame: d,
            selectedChannelId: u,
            selectedGuildId: c,
            connected: _,
        } = this.props;
        if (e.voiceChannelId !== t && null != e.voiceChannelId) {
            let t = eN.Ay.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                i = ri.A.getStageInstanceByChannel(e.voiceChannelId),
                r = li.Ay.getActiveEventByChannel(e.voiceChannelId),
                a = e3.A.getLastRTCConnectionState();
            a?.channelId !== e.voiceChannelId && (a = null),
                ec.default.track(P.HAw.LEAVE_VOICE_CHANNEL, {
                    channel_id: e.voiceChannelId,
                    channel_type: e.voiceChannelType,
                    channel_bitrate: e.voiceChannelBitrate,
                    guild_id: e.voiceChannelGuildId,
                    rtc_connection_id: a?.rtcConnectionId,
                    game_name: n,
                    duration: a?.duration,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    media_session_id: a?.mediaSessionId,
                    stage_instance_id: i?.id,
                    guild_scheduled_event_id: r?.id,
                    ...(0, t7.JK)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    ...a?.voiceStateAnalytics?.getStats(),
                    ...tx.A.getSelectedParticipantStats(e.voiceChannelId),
                });
        }
        if (e.voiceChannelId !== t && null != t) {
            let e = eN.Ay.getCurrentGameForAnalytics(),
                l = null != e ? e.name : "",
                s = ri.A.getStageInstanceByChannel(t),
                o = li.Ay.getActiveEventByChannel(t);
            (0, t7.zV)(P.HAw.CHANNEL_OPENED, { ...(0, t7.qL)(t) }), (0, uV.A)({ channelId: t });
            let d = null,
                u = ce.default.getFocusedPID();
            null != u &&
                u1.default.getOverlayMethod(u) !== u0.Ue.Disabled &&
                (ce.default.isInstanceLocked()
                    ? (d = P.Xmn.OVERLAY_LOCKED_ACTIVATED)
                    : ce.default.isInstanceLocked() ||
                      (d = ce.default.isPinned(P.uss.TEXT) ? P.Xmn.OVERLAY_UNLOCKED_PINNED : P.Xmn.OVERLAY_UNLOCKED)),
                ec.default.track(P.HAw.JOIN_VOICE_CHANNEL, {
                    location: d,
                    channel_id: t,
                    channel_type: i,
                    channel_bitrate: r,
                    guild_id: n,
                    game_name: l,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    stage_instance_id: s?.id,
                    guild_scheduled_event_id: o?.id,
                    was_moved: e3.A.getWasMoved(),
                    join_voice_id: e3.A.getJoinVoiceId(),
                    ...(0, t7.dL)(n, t),
                    ...(0, t7.JK)(n, t, a),
                });
        }
        let A =
                s?.distributor === e.runningGame?.distributor &&
                s?.sku === e.runningGame?.sku &&
                s?.name === e.runningGame?.name,
            h = null != e.runningGame && null != s && e.runningGame.isLauncher !== s.isLauncher;
        if (e.runningGame !== s && null != s && !s.isLauncher && (!A || h)) {
            let { gameId: e } = (0, u$.wH)(s),
                a = void 0 !== e ? u5.A.getDetectableGame(e) : null,
                l = eN.Ay.getOverrideForGame(s),
                d = nW.A.getGuildIds(),
                u = iU.JG.getSetting(),
                c = d.filter((e) => !u.includes(e)).slice(0, 200),
                _ = null;
            _ = null != l ? "custom_override" : null != a ? "verified_game" : "launcher";
            let A = u1.default.getTrackedGameByPid(s.pid),
                h = (0, eN.hw)(s),
                E = {
                    enabledOOP: A?.oopEnabled ?? h.enabledOOP,
                    enabledLegacy: A?.legacyEnabled ?? h.enabledLegacy,
                    overlayMethod: A?.overlayMethod ?? h.overlayMethod,
                    source: A?.source ?? h.source,
                    reason: "ChatAutoAnalytics",
                },
                p = u1.default.getOverlayMethod(s.pid) ?? E.overlayMethod;
            if (
                (setTimeout(() => {
                    (s.distributor === P.d3x.ROBLOX ? this.debouncedRobloxAnalytics : cr)({
                        runningGame: s,
                        game: a,
                        detectionMethod: _,
                        overlayStatus: E,
                        overlayMethod: p,
                        sharedGuildIds: c,
                        voiceChannelId: t,
                        voiceChannelType: i,
                        voiceChannelBitrate: r,
                        voiceChannelGuildId: n,
                    });
                }, 1e4),
                null != s.name && null != o && u5.A.shouldReport(s))
            ) {
                let e = s.name;
                uw.Ay.identifyGame(o, e)
                    .then((e) => uw.Ay.reportUnverifiedGame(e))
                    .catch((e) => new uY.A("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if (e.runningNonGame !== d && d?.id != null && e.runningNonGame?.id !== d.id) {
            let e = uq.A.getById(d.id);
            null != e &&
                ca({
                    runningNonGame: d,
                    nonGameApplication: e,
                    voiceChannelId: t,
                    voiceChannelType: i,
                    voiceChannelBitrate: r,
                    voiceChannelGuildId: n,
                });
        }
        if ((e.videoEnabled !== a || e.isScreenSharing !== l) && null != t) {
            let e = "none",
                n = [l ? "screen" : null, a ? "camera" : null].filter(lt.Vq),
                i = null;
            l ? ((e = "screen"), (i = (0, uB.p)())) : a && (e = "camera"),
                ec.default.track(P.HAw.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                    enabled_inputs: n,
                    preview_enabled: iU.bm.getSetting(),
                    ...i,
                    ...this.getGameMetadata(),
                    ...(0, t7.QS)(t),
                });
        }
        if (_ && null != u && (!e.connected || u !== e.selectedChannelId || c !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = rl.A.getChannel(t),
                i = nW.A.getGuild(n?.getGuildId());
            if (null != t && null != n && null != i && i.publicUpdatesChannelId === t) {
                let e = u4.A.getMessages(t),
                    r = e
                        .toArray()
                        .reverse()
                        .find(
                            (e) =>
                                (0, uP.Lt)(e.flags, P.pr7.IS_CROSSPOST) &&
                                e.messageReference?.guild_id === "667560445975986187",
                        );
                ec.default.track(P.HAw.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: r?.id,
                    last_message_reference_message_id: r?.messageReference?.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, t7.dI)(n),
                    ...(0, t7.H$)(i.id),
                });
            }
            e.isTextInVoice &&
                !this.props.isTextInVoice &&
                uF.M.getConfig({ location: "ChatAutoAnalytics" }).collectAnalytics &&
                ec.default.track(P.HAw.TEXT_IN_VOICE_CLOSED, {
                    reason: "switched away",
                    channel_id: t,
                    guild_id: n?.getGuildId(),
                });
        }
    }
    getGameMetadata() {
        return {
            game_platform: this.props.gamePlatform,
            game_name: this.props.gameName,
            game_exe_name: this.props.gameExeName,
            game_id: this.props.gameId,
        };
    }
    render() {
        return null;
    }
}
function cs() {
    let e,
        [t, n] = (0, T.yK)([et.A], () => [et.A.getVoiceChannelId(), et.A.getChannelId()], []),
        i = (0, T.bG)([rl.A], () => rl.A.getChannel(n), [n]),
        r = (0, T.bG)([tx.A], () => i?.id != null && tx.A.getChatOpen(i.id), [i]),
        a = i?.nsfw,
        l = (0, T.bG)([rl.A], () => rl.A.getChannel(t), [t]),
        s = (0, T.bG)([en.A], () => en.A.getGuildId(), []),
        o = (0, T.bG)([nW.A], () => nW.A.getGuild(s), [s]),
        d = (0, T.bG)([ty.default], () => ty.default.getCurrentUser(), []),
        u = (0, T.bG)([sw.Ay], () => null != d && null != s && (sw.Ay.getMember(s, d.id)?.isPending ?? !1), [d, s]),
        c = (0, T.bG)([u9.Ay], () => u9.Ay.getState().section, []),
        _ = (0, T.bG)([u7.A], () => u7.A.getHomeLink(), []),
        A = (0, T.bG)([ig.A], () => ig.A.isConnected(), []),
        [h, E] = (0, T.yK)([eO.Ay], () => [eO.Ay.isVideoEnabled(), eO.Ay.isScreenSharing()], []),
        I = (0, T.bG)([u3.A], () => u3.A.getPrimaryActivity(), []),
        { currentGame: g, currentNonGame: C } = (0, T.cf)(
            [eN.Ay],
            () => ({
                currentGame: eN.Ay.getCurrentGameForAnalytics(),
                currentNonGame: eN.Ay.getCurrentNonGameForAnalytics(),
            }),
            [],
        ),
        f =
            0 === (e = (0, T.bG)([ai.Ay], () => ai.Ay.getChannels(s)[ai.I6] ?? [], [s])).length
                ? 0
                : e.filter((e) => {
                      let { channel: t } = e;
                      return rs.A.can(uX.kg(P.xBc.SEND_MESSAGES, P.xBc.VIEW_CHANNEL), t);
                  }).length,
        N = (0, T.bG)([uQ.A], () => uQ.A.getMessageRequestsCount(), []),
        S = {
            selectedChannelId: n,
            isNSFWChannel: a,
            selectedGuildId: s,
            friendsTabSection: c,
            homeLink: _,
            connected: A,
            videoEnabled: h,
            isScreenSharing: E,
            voiceChannelId: l?.id,
            voiceChannelGuildId: l?.getGuildId(),
            voiceChannelType: l?.type,
            voiceChannelBitrate: l?.bitrate,
            runningGame: g,
            runningGamePid: null != g ? g.pid : null,
            runningNonGame: C,
            gamePlatform: (0, uG.A)(I),
            gameName: null != I ? I.name : null,
            gameId: null != I ? I.application_id : null,
            gameExeName: null != g ? g.exeName : null,
            hasPreviewEnabled: o?.features.has(P.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: u,
            postableChannelCount: f,
            isTextInVoice: r,
            numMessageRequests: N,
        };
    return (
        !(function (e) {
            let t = m.useRef(e);
            m.useEffect(() => {
                t.current = e;
            }, [e]);
            let {
                connected: n,
                friendsTabSection: i,
                homeLink: r,
                isMemberPending: a,
                selectedChannelId: l,
                selectedGuildId: s,
            } = e;
            m.useEffect(() => {
                n &&
                    null != l &&
                    ((0, t7.zV)(P.HAw.CHANNEL_OPENED, { ...(0, uj.p)(l), ...(0, t7.qL)(l), selected_guild_id: s }),
                    (0, uV.A)({ channelId: l }),
                    t.current.isTextInVoice &&
                        (0, t7.zV)(P.HAw.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: t.current.isNSFWChannel }));
            }, [n, l, s]),
                m.useEffect(() => {
                    n &&
                        null == s &&
                        r === P.BVt.FRIENDS &&
                        (function (e) {
                            let { tab_opened: t, source: n } = e,
                                i = (0, uH.A)();
                            ec.default.track(P.HAw.FRIENDS_LIST_VIEWED, { tab_opened: t, source: n, ...i }),
                                (0, uk.k)(P.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
                                    tab_opened: t ?? "tabless",
                                    num_friends: i.num_friends ?? 0,
                                    now_playing_visible: i.now_playing_visible ?? !1,
                                    now_playing_num_cards: i.now_playing_num_cards ?? 0,
                                });
                        })({ tab_opened: i });
                }, [n, i, r, s]),
                m.useEffect(() => {
                    if (n && null != s) {
                        let e = a ? { is_pending: a, preview_enabled: t.current.hasPreviewEnabled } : {},
                            n = nW.A.getGuild(en.A.getGuildId()),
                            i = {
                                ...e,
                                postable_channels: t.current.postableChannelCount,
                                premium_progress_bar_enabled: n?.premiumProgressBarEnabled ?? !1,
                                viewing_all_channels: !u8.Ay.isOptInEnabled(s),
                                num_recent_channels: uZ.A.recentsChannelCount(s),
                            };
                        if (
                            ((0, t7.zV)(P.HAw.GUILD_VIEWED, i),
                            (0, uk.k)(P.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: s }),
                            (0, rx.ai)(s))
                        ) {
                            let e = uz.o.getConfig({ location: "ChatAutoAnalytics" }).enabled,
                                t = ct.Ay.isPremiumExactly(ty.default.getCurrentUser(), ci.PremiumTypes.TIER_2),
                                n = (0, uW.Kg)();
                            (0, uW.U5)(n, uK.A.getFavoritesCount(), e, t);
                        }
                    }
                }, [n, s, a]);
            let o = m.useRef(!1);
            m.useEffect(() => {
                n &&
                    null == s &&
                    r === P.BVt.MESSAGE_REQUESTS &&
                    !o.current &&
                    ((o.current = !0),
                    ec.default.track(P.HAw.MESSAGE_REQUESTS_INITIALIZED, {
                        num_message_requests: t.current.numMessageRequests,
                    }));
            }, [n, s, r]);
        })(S),
        (0, p.jsx)(cl, { ...S })
    );
}
var co = n(615300),
    cd = n(73939),
    cu = n(844222),
    cc = n(398590),
    c_ = n(390435),
    cA = n(6156);
let ch = (0, t_.Fe)({
        createPromise: () => Promise.resolve().then(n.bind(n, 944771)),
        webpackId: 944771,
        name: "ComponentPlayground",
    }),
    cE = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("28136"),
                n.e("77602"),
                n.e("68587"),
                n.e("22547"),
                n.e("15373"),
                n.e("46291"),
                n.e("78888"),
            ]).then(n.bind(n, 608087)),
        webpackId: 608087,
        name: "ChannelSettings",
    }),
    cp = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("52803"),
                n.e("92630"),
                n.e("69059"),
                n.e("14708"),
                n.e("9073"),
                n.e("49287"),
                n.e("59275"),
            ]).then(n.bind(n, 703571)),
        webpackId: 703571,
        name: "CollectiblesShop",
    }),
    cm = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("49681"),
                n.e("96382"),
                n.e("20044"),
                n.e("28136"),
                n.e("82486"),
                n.e("77602"),
                n.e("68587"),
                n.e("22547"),
                n.e("86546"),
                n.e("15373"),
                n.e("42749"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("30501"),
                n.e("25961"),
                n.e("2736"),
                n.e("13848"),
                n.e("47810"),
                n.e("46291"),
                n.e("41068"),
                n.e("32347"),
                n.e("8458"),
                n.e("15666"),
                n.e("11810"),
                n.e("95765"),
                n.e("4788"),
                n.e("98700"),
            ]).then(n.bind(n, 422559)),
        webpackId: 422559,
        name: "GuildSettings",
    }),
    cI = {
        [P.zgK.CHANNEL_SETTINGS]: () => (0, p.jsx)(cE, {}),
        [P.zgK.GUILD_SETTINGS]: () => (0, p.jsx)(cm, {}),
        [P.zgK.COLLECTIBLES_SHOP]: () => (0, p.jsx)(cp, {}),
        [P.zgK.COMPONENT_PLAYGROUND]: () => (0, p.jsx)(ch, {}),
    },
    cg = "SHOWN",
    cC = "HIDDEN",
    cT = { friction: 10, tension: 100 };
function cf() {
    return m.useEffect(() => (eF.A.enable(), eF.A.enableTemp(c_.w), () => eF.A.disableTemp()), []), null;
}
class cN extends m.PureComponent {
    containerRef = m.createRef();
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.mode ? { animating: !0, mode: e.mode } : null;
    }
    static defaultProps = { baseLayer: !1 };
    static contextType = cu.C;
    constructor(e) {
        super(e);
        let t = 1,
            n = 1;
        e.mode === cC && ((t = 0.93), (n = 0)),
            (this.state = { animating: !1, scale: new co.A.Value(t), opacity: new co.A.Value(n), mode: e.mode });
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        if (t !== n) {
            if (t === cg && n === cC) return this.animateIn();
            if (t === cC && n === cg) return this.animateUnder();
        }
    }
    componentWillEnter(e) {
        let { opacity: t, scale: n } = this.state;
        n.setValue(1.1), t.setValue(0), e(), this.setState({ animating: !0 }, () => this.animateIn());
    }
    componentWillLeave(e) {
        this.setState({ animating: !0 }, () => this.animateOut(e));
    }
    animateIn(e) {
        T.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        co.A.parallel([co.A.spring(t, { toValue: 1, ...cT }), co.A.spring(n, { toValue: 1, ...cT })]).start(() =>
            this.animateComplete(e),
        );
    }
    animateOut(e) {
        T.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        co.A.parallel([co.A.spring(t, { toValue: 0, ...cT }), co.A.spring(n, { toValue: 1.1, ...cT })]).start(() => {
            e(), nl._.dispatch(P.jej.LAYER_POP_COMPLETE);
        });
    }
    animateUnder() {
        T.Ay.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        co.A.parallel([co.A.spring(e, { toValue: 0, ...cT }), co.A.spring(t, { toValue: 0.93, ...cT })]).start(() =>
            this.animateComplete(),
        );
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let { animating: e } = this.state,
            { name: t, mode: n, children: i, baseLayer: r, ...a } = this.props,
            l = n === cC,
            s = e || l ? this.getAnimatedStyle() : null,
            o = !l && !r,
            d = (0, p.jsx)(co.A.div, {
                ref: (e) => (this.containerRef.current = null != e ? e.componentRef : void 0),
                "data-layer": t ?? "base",
                "aria-hidden": l,
                "aria-modal": o,
                "aria-label": o
                    ? (function (e) {
                          switch (e) {
                              case P.zgK.CHANNEL_SETTINGS:
                                  return k.intl.string(k.t.XPDhcc);
                              case P.zgK.COLLECTIBLES_SHOP:
                                  return k.intl.string(k.t.pWG4ze);
                              case P.zgK.COMPONENT_PLAYGROUND:
                                  return "Component Playground";
                              default:
                                  return "";
                          }
                      })(t)
                    : void 0,
                role: o ? "dialog" : void 0,
                className: ti()(cA.qd, { [cA.n3]: r, [cA.bW]: e, "stop-animations": n === cC }),
                style: s,
                ...a,
                children: i,
            });
        return r ? d : (0, p.jsx)(od.O, { containerRef: this.containerRef, children: d });
    }
    getAnimatedStyle() {
        let { baseLayer: e } = this.props,
            { opacity: t, scale: n } = this.state,
            { reducedMotion: i } = this.context;
        return { opacity: t, transform: i.enabled || e ? void 0 : [{ scale: n }, { translateZ: 0 }] };
    }
}
class cS extends m.PureComponent {
    componentDidMount() {
        nl._.subscribe(P.jej.LAYER_POP_ESCAPE_KEY, cc.jH);
    }
    componentWillUnmount() {
        nl._.unsubscribe(P.jej.LAYER_POP_ESCAPE_KEY, cc.jH);
    }
    renderLayers() {
        let { children: e, layers: t, hasFullScreenLayer: n } = this.props,
            { length: i } = t,
            r = [];
        return (
            r.push((0, p.jsx)(cN, { mode: 0 !== i || n ? cC : cg, baseLayer: !0, children: e }, "layer-base")),
            t.forEach((e, t) => r.push(this.renderComponent(e, t, i))),
            r
        );
    }
    renderComponent(e, t, n) {
        let i;
        return (
            (i = "string" == typeof e ? cI[e]() : (0, p.jsx)(e, {})),
            (0, p.jsxs)(
                cN,
                {
                    name: "string" == typeof e ? e : void 0,
                    mode: t === n - 1 ? cg : cC,
                    children: [(0, p.jsx)(cf, {}), i],
                },
                `layer-${t}`,
            )
        );
    }
    renderArtisanalHack() {
        return (0, p.jsx)(ts.N, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, p.jsx)("div", { className: ti()(cA.bg, e) }),
        });
    }
    render() {
        return (0, p.jsxs)(p.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, p.jsx)(cd.F, {
                    component: "div",
                    className: ti()(cA.ZF, this.props.className),
                    children: this.renderLayers(),
                }),
            ],
        });
    }
}
function cO(e) {
    let t = (0, sR.NC)(),
        n = (0, T.bG)([nc.A], () => nc.A.getLayers()),
        i = (0, rJ.xr)(
            (e) => e.fullScreenLayers.length > 0 && !e.fullScreenLayers.some((e) => e.options.showAppUnderLayer),
        );
    return (0, p.jsx)(cS, { ...e, sidebarTheme: t, layers: n, hasFullScreenLayer: i });
}
var cL = n(107715);
let cy = m.memo(function () {
    let e,
        t,
        n = (0, eH.A)(),
        i = m.useRef(null),
        r = m.useCallback((e) => {
            let { duration: t, intensity: n } = e;
            if (F.A.useReducedMotion || !eL.A.isFocused()) return;
            let { current: r } = i;
            ex()(null != r, "Shakeable is shaken when not mounted"), r.shake(t, n);
        }, []);
    return (
        m.useEffect(() => (eF.A.setLayout(eB.Ay), eF.A.enable(), () => eF.A.disable()), []),
        m.useEffect(
            () => (
                nl._.subscribe(P.jej.SHAKE_APP, r),
                () => {
                    nl._.unsubscribe(P.jej.SHAKE_APP, r);
                }
            ),
            [r],
        ),
        (e = (0, T.bG)([eJ.A], () => eJ.A.hasIncomingCalls())),
        (t = (0, T.bG)([eX.default, eQ.A, eZ.A, eq.A], () => {
            let e = eX.default.getTotalMentionCount(),
                t = (0, e$.dH)([eQ.A, eq.A]),
                n = eX.default.hasAnyUnread(),
                i = eZ.A.getDisableUnreadBadge(),
                r = e + t;
            return 0 === r && n && !i && (r = -1), r;
        })),
        m.useEffect(() => {
            if (!e) return;
            let t = e0.Ay.bounceDock("critical"),
                n = (0, e1.iA)({ messages: [k.intl.string(k.t["fk1/bX"])], count: 50 });
            return () => {
                t?.(), n();
            };
        }, [e]),
        m.useEffect(() => {
            e6(t);
        }, [t]),
        m.useEffect(() => () => e6(0), []),
        (0, p.jsxs)(ek, {
            ref: i,
            className: cL.y,
            children: [
                (0, p.jsx)(cO, { className: cL.Z, children: (0, p.jsx)(uR, {}) }),
                (0, p.jsx)(tt, {}),
                (0, p.jsx)(eV.A, {}),
                (0, p.jsx)(cs, {}),
                (0, p.jsx)(uM.A, {}),
                !n && (0, p.jsx)(ej.S, {}),
            ],
        })
    );
});
var cb = n(148803),
    cv = n(29292);
{
    let e = n(154323).A;
    i = () => e.get("shop_include_unpublished");
}
class cD extends Z.A {
    _initialize() {
        X.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        X.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        let e = i();
        (0, cv.LX)({ release: e ? cb.P.BETA : cb.P.PROD });
    }
}
let cR = new cD();
var cM = n(347481),
    cP = n(617617),
    cw = n(792205);
let cx = { ignoredDevices: {} },
    cU = cx,
    cG = !1,
    ck = {},
    cj = {},
    cV = {},
    cH = { id: null, justChanged: !1 },
    cB = { id: null, justChanged: !1 },
    cF = /\((.+)\)\s*$/;
function cY(e) {
    if ((0, G.getPlatform)() === G.PlatformTypes.WINDOWS) {
        let t = e.name.match(cF);
        if (null != t) return t[1];
    }
    return e.name;
}
function cK(e, t, n) {
    return null == e || e.displayName !== t
        ? { displayName: t, type: n }
        : (e.type === cw.E.INPUT && n === cw.E.OUTPUT) || (e.type === cw.E.OUTPUT && n === cw.E.INPUT)
          ? { displayName: t, type: cw.E.INPUT_AND_OUTPUT }
          : e;
}
class cW extends T.Ay.DeviceSettingsStore {
    static displayName = "ConnectedDeviceStore";
    static persistKey = "ConnectedDeviceStore";
    static migrations = [(e) => (null == e.ignoredDevices ? { ...e, ignoredDevices: {} } : e)];
    initialize(e) {
        this.waitFor(eO.Ay, cP.A), (cU = e ?? cx);
    }
    getUserAgnosticState() {
        return cU;
    }
    get initialized() {
        return cG;
    }
    get lastDeviceConnected() {
        return cV;
    }
    get inputDevices() {
        return ck;
    }
    get lastInputSystemDevice() {
        return cH;
    }
    get outputDevices() {
        return cj;
    }
    get lastOutputSystemDevice() {
        return cB;
    }
}
let cz = new cW(X.h, {
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n } = e,
                i = {};
            (cH.justChanged = !1),
                t.forEach((e) => {
                    if (((i[cY(e)] = e.id), e.id === ey.dx)) {
                        let t = e.originalId ?? e.originalName;
                        t !== cH.id && (cH.justChanged = !0), (cH.id = t);
                    }
                });
            let r = {};
            if (
                ((cB.justChanged = !1),
                n.forEach((e) => {
                    if (((r[cY(e)] = e.id), e.id === ey.dx)) {
                        let t = e.originalId ?? e.originalName;
                        t !== cB.id && (cB.justChanged = !0), (cB.id = t);
                    }
                }),
                !cG)
            ) {
                (ck = i), (cj = r), (cG = !0);
                return;
            }
            let a = Object.keys(ck),
                l = Object.keys(i),
                s = Object.keys(cj),
                o = Object.keys(r),
                d = eG().difference(a, l),
                u = eG().difference(s, o);
            return (
                d.length > 0 || u.length > 0
                    ? (cV = {})
                    : (eG()
                          .difference(l, a)
                          .forEach((e) => {
                              cV[e] = cK(cV[e], e, cw.E.INPUT);
                          }),
                      eG()
                          .difference(o, s)
                          .forEach((e) => {
                              cV[e] = cK(cV[e], e, cw.E.OUTPUT);
                          })),
                !(eG().isEqual(a, l) && eG().isEqual(s, o)) && ((ck = i), (cj = r), !0)
            );
        },
        CONNECTED_DEVICE_SWITCH: function (e) {
            let { displayName: t, connectedDevicePreference: n, location: i } = e;
            if (n === cw.f.INPUT || n === cw.f.INPUT_AND_OUTPUT) {
                let e = ck[t];
                null != e && X.h.wait(() => ef.A.setInputDevice(e, { location: i }));
            }
            if (n === cw.f.OUTPUT || n === cw.f.INPUT_AND_OUTPUT) {
                let e = cj[t];
                X.h.wait(() => ef.A.setOutputDevice(e, { location: i }));
            }
            delete cV[t];
        },
        CONNECTED_DEVICE_DONT_SWITCH: function (e) {
            let { displayName: t } = e;
            delete cV[t];
        },
        CONNECTED_DEVICE_IGNORE: function (e) {
            let { displayName: t } = e;
            (cU.ignoredDevices[t] = !0), delete cV[t];
        },
        CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
            (cV = {}), (cU.neverShowModal = !0);
        },
    }),
    cq = new Set(["DisplayPort"]),
    c$ = "connected-device-modal";
function cX() {
    let e;
    if ((0, f.hasModalOpen)(c$)) return;
    let t = eO.Ay.getInputDeviceId(),
        i = eO.Ay.getOutputDeviceId();
    if (cz.getState().neverShowModal || eG().isEmpty(cz.lastDeviceConnected)) return;
    let r = cY(eO.Ay.getInputDevices()[t]),
        a = cY(eO.Ay.getOutputDevices()[i]);
    if (eG().some(cz.lastDeviceConnected, (e) => cq.has(e.displayName) || e.displayName === r || e.displayName === a))
        return;
    let l = eG().some(
        cz.lastDeviceConnected,
        (e) => cM.A.isCertified(cz.inputDevices[e.displayName]) || cM.A.isCertified(cz.outputDevices[e.displayName]),
    );
    if (
        ((t === ey.dx && cz.lastInputSystemDevice.justChanged) ||
            (i === ey.dx && cz.lastOutputSystemDevice.justChanged)) &&
        !l
    )
        return;
    let s = eG().first(Object.keys(cz.lastDeviceConnected)),
        o = null != s && "" !== s ? cz.lastDeviceConnected[s] : null;
    null == o ||
        cz.getState().ignoredDevices[o.displayName] ||
        (cz.initialized &&
            null != s &&
            (cM.A.isCertified(cz.inputDevices[s])
                ? (e = cM.A.getCertifiedDevice(cz.inputDevices[s]))
                : cM.A.isCertified(cz.outputDevices[s]) && (e = cM.A.getCertifiedDevice(cz.outputDevices[s]))),
        (0, f.openModalLazy)(
            async () => {
                let { default: t } = await n.e("65573").then(n.bind(n, 442468));
                return (n) => {
                    let { transitionState: i, onClose: r } = n;
                    return (0, p.jsx)(t, { device: o, certifiedDeviceMetadata: e, transitionState: i, onClose: r });
                };
            },
            { modalKey: c$ },
        ));
}
let cZ = {
        init() {
            cz.addChangeListener(cX);
        },
    },
    cQ = "CONNECTIONS_GRID_MODAL_KEY";
class cJ extends Z.A {
    _initialize() {
        X.h.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow),
            X.h.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide);
    }
    _terminate() {
        X.h.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow),
            X.h.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide);
    }
    handleShow(e) {
        let {
            onComplete: t,
            excludedPlatformTypes: i,
            includedPlatformTypes: r,
            integrations: a,
            onCompleteApplication: l,
            includeApplicationConnections: s,
        } = e;
        (0, f.hasModalOpen)(cQ) ||
            (0, f.openModalLazy)(async () => {
                let { default: e } = await n.e("95198").then(n.bind(n, 58829));
                return (n) =>
                    (0, p.jsx)(e, {
                        onComplete: t,
                        excludedPlatformTypes: i,
                        includedPlatformTypes: r,
                        integrations: a,
                        onCompleteApplication: l,
                        includeApplicationConnections: s,
                        ...n,
                    });
            });
    }
    handleHide() {
        (0, f.closeModal)(cQ);
    }
}
let c0 = new cJ();
var c1 = n(480900),
    c2 = n(293260);
class c6 extends Z.A {
    _initialize() {
        X.h.subscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow);
    }
    _terminate() {
        X.h.unsubscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow);
    }
    handleShow(e) {
        let { role: t, guildId: n } = e;
        (0, f.hasModalOpen)("GUILD_ROLE_CONNECTIONS_MODAL_KEY") ||
            (null != t && t.tags?.guild_connections === null ? (0, c1.b)(t, n) : (0, c2.c0)(n));
    }
}
let c5 = new c6();
var c4 = n(793943),
    c3 = n(746793),
    c8 = n(272613);
class c7 extends Z.A {
    _initialize() {
        X.h.subscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            X.h.subscribe("BILLING_STANDALONE_INITIALIZED", this._maybeStartDevSession),
            X.h.subscribe("LOGOUT", this._maybeStopDevSession);
    }
    _terminate() {
        X.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            X.h.unsubscribe("BILLING_STANDALONE_INITIALIZED", this._maybeStartDevSession),
            X.h.unsubscribe("LOGOUT", this._maybeStopDevSession);
    }
    _maybeStartDevSession() {
        if (null == window.DiscordDevSession || !0 !== window.__METICULOUS_ENABLED) return;
        let e = "production" === window.GLOBAL_ENV.PROJECT_ENV,
            t = ty.default.getCurrentUser();
        t?.email == null ||
            (e && t.isStaff()) ||
            (t.username.startsWith("mtcls") || !e ? window.DiscordDevSession.start() : window.DiscordDevSession.stop());
    }
    _maybeStopDevSession() {
        null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop();
    }
}
let c9 = new c7();
var _e = n(963169),
    _t = n(422258);
function _n(e) {
    let {
        channel: { id: t },
    } = e;
    (0, _t.i_)(t, { trackAnalytics: !1 });
}
class _i extends Z.A {
    _initialize() {
        X.h.subscribe("CHANNEL_DELETE", _n);
    }
    _terminate() {
        X.h.unsubscribe("CHANNEL_DELETE", _n);
    }
}
let _r = new _i();
var _a = n(367727),
    _l = n(853742);
class _s extends Z.A {
    _initialize() {
        X.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect);
    }
    _terminate() {
        X.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect);
    }
    handleChannelSelect(e) {
        let t,
            i,
            r,
            a,
            l,
            { guildId: s } = e;
        if (
            null == s ||
            ((t = nW.A.getGuild(s)),
            (i = !!t?.features.has(P.GuildFeatures.COMMUNITY)),
            (r = rs.A.can(P.xBc.MANAGE_CHANNELS, t)),
            (a = (0, rP.k8)(i6.M.FORUM_CHANNEL_UPSELL_MODAL)),
            (l = rC.A.getMemberCount(s) ?? 0),
            !i || !r || a || !(l >= 200))
        )
            return;
        (0, _l.zd)(), (0, _a.Vh)(i6.M.FORUM_CHANNEL_UPSELL_MODAL);
        let o = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tV.i.DISMISS;
            (0, rP.Dr)(i6.M.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: e });
        };
        (0, f.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("90052"), n.e("43051")]).then(n.bind(n, 653682));
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        onClose: (e) => {
                            o(e), t.onClose();
                        },
                        guildId: s,
                        shouldUpsellCreation: !0,
                    });
            },
            {
                onCloseCallback: () => (0, rP.Dr)(i6.M.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: tV.i.DISMISS }),
                onCloseRequest: P.FXj,
            },
        );
    }
}
let _o = new _s();
var _d = n(208207),
    _u = n(627363);
class _c extends Z.A {
    _initialize() {
        X.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        X.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen = () => {
        let e = eq.A.getGameRelationships(),
            t = new Set();
        e.values().forEach((e) => {
            e.type === P.eA$.PENDING_INCOMING && t.add(e.applicationId);
        }),
            _u.Ay.fetchApplications(Array.from(t));
    };
    destroy() {
        X.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
}
let __ = new _c(),
    _A = {};
function _h(e) {
    let { name: t, hash: n, missingData: i } = e;
    for (let e of (u5.A.markGameReported(t), i))
        if ("icon" === e) {
            let e = _A[t];
            null != e && uw.Ay.uploadIcon(t, n, e);
            return;
        } else new uY.A("GameStoreIconManager").log(`Could not find missing data key: ${e}`);
}
function _E(e) {
    let { gameName: t, icon: n } = e;
    _A[t] = n;
}
let _p = {
    initialize() {
        X.h.subscribe("UNVERIFIED_GAME_UPDATE", _h), X.h.subscribe("GAME_ICON_UPDATE", _E);
    },
};
var _m = n(738533),
    _I = n(651743);
function _g(e) {
    let t,
        n,
        { gameId: i } = e;
    (t = _I.A.launchableGames[i]),
        (null != (n = lP.A.getApplication(i)) ? _m.A.isLaunchable(n) : _m.A.isGameLaunchable(i)).then((e) => {
            e !== t && X.h.dispatch({ type: "GAME_LAUNCHABLE_UPDATE", gameId: i, isLaunchable: e });
        });
}
let _C = {
    initialize() {
        X.h.subscribe("CHECK_LAUNCHABLE_GAME", _g);
    },
};
var _T = n(189081),
    _f = n(147964);
let _N = {
    init() {
        _T.A.whenInitialized(() => {
            null != _f.A.testModeApplicationId && (0, b.q1)(_f.A.testModeApplicationId, _f.A.testModeOriginURL);
        });
    },
};
var _S = n(92077),
    _O = n(144914);
function _L() {
    if (!(0, _O.S)()) return;
    let e = M.default.getToken(),
        t = M.default.getId();
    if (null == e) throw Error("missing user token");
    _S.Ts(e, t);
}
function _y() {
    _S.zr();
}
let _b = {
    init() {
        X.h.subscribe("CONNECTION_OPEN", _L), X.h.subscribe("LOGOUT", _y);
    },
};
var _v = n(507263),
    _D = n(376728),
    _R = n(970163);
async function _M(e) {
    let { code: t } = e,
        i = (await (0, _R.A)(t)).invite;
    if (null == i || null == i.guild) return;
    let r = i.guild.id,
        a = sw.Ay.getMember(r, M.default.getId()),
        l = !1;
    if (null != a && null != i.roles && i.roles.length > 0) {
        let e = new Set(a.roles ?? []);
        l = i.roles.some((t) => !e.has(t.id));
    }
    if (null == a || l) return void X.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: i, code: t, context: P.BRT.APP });
    let { default: s } = await Promise.resolve().then(n.bind(n, 608401));
    await s({ guildId: r }), _D.Ay.transitionToInvite(i, void 0, !0);
}
var _P = n(268313),
    _w = n(567249),
    _x = n(998740);
function _U(e) {
    return `haven:${e}`;
}
function _G() {
    let e = r;
    if (null == e) return !1;
    let t = _U(e);
    if (!n_.A.isOpen(t)) return !1;
    let n = n_.A.pipHavenWindow;
    if (null == n || n.id !== t) return (r = null), !1;
    X.h.wait(() => na.VN(t)), (r = null);
}
function _k() {
    return nc.A.hasLayers();
}
function _j() {
    let e,
        t,
        n = e3.A.getChannelId(),
        i = null != n ? rl.A.getChannel(n) : null;
    if (
        ((e = e3.A.getChannelId()),
        (t = et.A.getChannelId()),
        null == e || !_x.A.isUserConnected(e) || e === t || _w.A.getWindowOpen(P.MLl.CHANNEL_CALL_POPOUT) || 0)
    )
        return _G();
    if (null != i && _x.A.isUserConnected(i.id)) {
        if (r !== i.id) {
            let e = _U(i.id);
            if (n_.A.isOpen(e)) return !1;
            if (null != r) {
                let e = r;
                X.h.wait(() => na.VN(e));
            }
            return (
                X.h.wait(() => {
                    na.ho(e, P.o1q.HAVEN, { channel: i }), _k() && na.jD(e);
                }),
                (r = i.id),
                !0
            );
        }
        return !1;
    }
    return _G();
}
function _V() {
    if (_k()) {
        let e = void 0 ?? r;
        if (null == e) return;
        let t = _U(e);
        n_.A.isOpen(t) && X.h.wait(() => na.jD(t));
        return;
    }
    let e = void 0 ?? r;
    if (null == e) return;
    let t = _U(e);
    n_.A.isOpen(t) && X.h.wait(() => na.WU(t));
}
class _H extends Z.A {
    _initialize() {
        et.A.addChangeListener(_j),
            en.A.addChangeListener(_j),
            e3.A.addChangeListener(_j),
            dd.A.addChangeListener(_j),
            nc.A.addChangeListener(_V),
            _x.A.addChangeListener(_j),
            _w.A.addChangeListener(_j);
    }
    _terminate() {
        et.A.removeChangeListener(_j),
            en.A.removeChangeListener(_j),
            e3.A.removeChangeListener(_j),
            dd.A.removeChangeListener(_j),
            nc.A.removeChangeListener(_V),
            _x.A.removeChangeListener(_j),
            _w.A.removeChangeListener(_j);
    }
}
let _B = new _H(),
    _F = {
        init() {
            X.h.subscribe("VOICE_CHANNEL_SELECT", (e) => {
                let { channelId: t } = e;
                null == t && oF.sF(dG._.VOICE_PANEL_INTRODUCTION);
            });
        },
    };
var _Y = n(4106),
    _K = n(875448);
let _W = null;
class _z extends Z.A {
    _initialize() {
        X.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        X.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        (0, _K.HF)("ICYMIManager") &&
            (!(function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                _Y.A.fetchDehydrated({ isInitialLoad: t }),
                    null != _W && clearTimeout(_W),
                    (_W = setTimeout(() => e(), 15 * e_.A.Millis.MINUTE));
            })(!0),
            _Y.A.getGuildChannelScores(),
            _Y.A.getRecommendedGuilds());
    }
}
let _q = new _z();
var _$ = n(684013),
    _X = n(401843),
    _Z = n(55619),
    _Q = n(734066),
    _J = n(572164),
    _0 = n(399925),
    _1 = n(652896),
    _2 = n(299855),
    _6 = n.n(_2),
    _5 = n(157257),
    _4 = n(279250),
    _3 = n(997630),
    _8 = n(905552),
    _7 = n(325278),
    _9 = n(140175),
    Ae = n(528772),
    At = n(944775),
    An = n(351906),
    Ai = n(532624),
    Ar = n(773371),
    Aa = n(427603);
let Al = new Map();
function As(e, t, n, i) {
    if (!e3.A.isConnected()) return;
    let r = i.context ?? ey.x.DEFAULT,
        a = Al.get(r);
    null == a && ((a = { held: new Set(), priorityHeld: new Set() }), Al.set(r, a)),
        n || (e ? a.held.add(i.id) : a.held.delete(i.id)),
        t && (e ? a.priorityHeld.add(i.id) : a.priorityHeld.delete(i.id));
    let l = a.held.size > 0,
        s = a.priorityHeld.size > 0;
    (0, _9.N)(l, s);
}
let Ao = {
    [P.hCu.TOGGLE_PRIORITY_SPEAKER]: { onTrigger() {}, keyEvents: {} },
    [P.hCu.UNASSIGNED]: { onTrigger() {}, keyEvents: {} },
    [P.hCu.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            eO.Ay.getMode(t.context) === P.TBI.PUSH_TO_TALK &&
                ((Ao[P.hCu.PUSH_TO_TALK].isPressed = e), As(e, !1, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [P.hCu.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e, t) {
            eO.Ay.getMode() === P.TBI.PUSH_TO_TALK &&
                ((Ao[P.hCu.PUSH_TO_TALK_PRIORITY].isPressed = e), As(e, !0, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [P.hCu.VAD_PRIORITY]: {
        onTrigger(e, t) {
            eO.Ay.getMode() === P.TBI.VOICE_ACTIVITY && ((Ao[P.hCu.VAD_PRIORITY].isPressed = e), As(e, !0, !0, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [P.hCu.PUSH_TO_MUTE]: {
        onTrigger(e) {
            eO.Ay.getMode() === P.TBI.VOICE_ACTIVITY &&
                ((Ao[P.hCu.PUSH_TO_MUTE].isPressed = e), ef.A.setTemporarySelfMute(e));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [P.hCu.TOGGLE_MUTE]: {
        onTrigger: () => ef.A.toggleSelfMute({ usedKeybind: !0, location: "Custom Keybind" }),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [P.hCu.TOGGLE_DEAFEN]: {
        onTrigger: () => ef.A.toggleSelfDeaf({ usedKeybind: !0, location: "Custom Keybind" }),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [P.hCu.TOGGLE_CAMERA]: {
        onTrigger: () =>
            (function () {
                let e = eO.Ay.isVideoEnabled(),
                    t = Object.values(eO.Ay.getVideoDevices())[0],
                    n = t?.disabled ?? !0,
                    i = eO.Ay.supportsInApp(ey.O5.VIDEO) && eO.Ay.supportsInApp(ey.O5.DESKTOP_CAPTURE),
                    r = rl.A.getChannel(e3.A.getChannelId()),
                    a = ty.default.getCurrentUser()?.id;
                if (null == r || null == a) return;
                let { reachedLimit: l } = (0, de.M)(r);
                if (!l) {
                    if (r.isGuildStageVoice()) {
                        let e = rt.A.getMutableParticipants(r.id, rn.ip.SPEAKER),
                            t = e?.find((e) => {
                                let { user: t } = e;
                                return t.id === a;
                            });
                        if (!(0, o5.Bw)(r.guild_id) || !i || null == t || t.voiceState.suppress) return;
                    }
                    return (
                        e
                            ? ef.A.setVideoEnabled(!1)
                            : !1 === n
                              ? (0, dl.A)(
                                    () => {
                                        ef.A.setVideoEnabled(!0);
                                    },
                                    P.BRT.APP,
                                    !0,
                                )
                              : (0, di.A)(),
                        !1
                    );
                }
            })(),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [P.hCu.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = eO.Ay.getMode() === P.TBI.PUSH_TO_TALK ? P.TBI.VOICE_ACTIVITY : P.TBI.PUSH_TO_TALK;
            ef.A.setMode(e);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [P.hCu.TOGGLE_OVERLAY]: { onTrigger() {}, keyEvents: { keyup: !0, keydown: !1 } },
    [P.hCu.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger(e, t) {
            if (!(0, Ai.DV)(t.shortcut)) return;
            let n = (0, Aa.A)();
            null != n && _$.A.setInputLocked(!ce.default.isLocked(n), n);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [P.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = Ar.default.getFocusedPID(),
                t = null != e;
            null != e &&
                t &&
                ce.default.isPinned(P.uss.TEXT) &&
                ce.default.isLocked(e) &&
                Ar.default.isReady(e) &&
                _$.A.activateRegion(P.ajI.TEXT_WIDGET);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [P.hCu.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = ra.A.getCurrentUserActiveStream();
            if (null != e) return (0, _X.vN)((0, _1._z)(e));
            !(function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                if (!(0, oH.A)(eO.Ay) || null != ra.A.getCurrentUserActiveStream()) return;
                let n = et.A.getVoiceChannelId(),
                    i = rl.A.getChannel(n);
                if (null == i) return;
                let r = i.getGuildId();
                if ((0, _4.vz)(i, nW.A, rs.A, !1))
                    if (eO.Ay.getUseSystemScreensharePicker())
                        (0, G.isMac)() && _6().satisfies(uU.A?.os.release, _7.WZ) ? (0, _3.a)() : (0, _3.a)("window");
                    else {
                        let n = (0, _8.A)(eN.Ay, _5.A);
                        if (null == n || (n.isLauncher && !e)) return;
                        (0, _X.XI)(r, i.id, { pid: n.pid, analyticsLocations: t });
                    }
            })(!0, [eC.A.GO_LIVE_KEYBIND]);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [P.hCu.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            _Z.A.setEnabled(!An.A.enabled);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [P.hCu.NAVIGATE_BACK]: {
        onTrigger: () => (0, _e.OE)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [P.hCu.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, _e.Qb)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [P.hCu.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, Aa.A)();
            if (null != e)
                if (Ae.A.enabled) (0, At.Lk)(e);
                else {
                    if (!(0, oq.lI)()) return;
                    (0, At.hK)(!0, e);
                }
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [P.hCu.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, Aa.A)();
            if (null != t) {
                if (e) {
                    if (!(0, oq.lI)()) return;
                    (0, At.hK)(!1, t);
                } else (0, At.Lk)(t);
                return;
            }
        },
        keyEvents: { keyup: !0, keydown: !0 },
    },
    [P.hCu.SAVE_CLIP]: {
        onTrigger: () => {
            (0, _J.TD)() && (ec.default.track(P.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _0.l0)());
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [P.hCu.SAVE_SCREENSHOT]: {
        onTrigger: () => {
            !(0, _J.TD)() || ((0, _Q.cx)() && (ec.default.track(P.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _0.yT)()));
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [P.hCu.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: { channelId: n },
            } = t;
            null != n && y.default.selectVoiceChannel(n);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
    [P.hCu.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            y.default.selectVoiceChannel(null);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
};
function Ad() {
    Al.clear(), (0, _9.N)(!1, !1);
}
class Au extends Z.A {
    _initialize() {
        X.h.wait(() => X.h.dispatch({ type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS", keybinds: Ao })),
            X.h.subscribe("AUDIO_SET_MODE", Ad),
            X.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    _terminate() {
        X.h.unsubscribe("AUDIO_SET_MODE", Ad), X.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    handleVoiceChannelSelect(e) {
        let { currentVoiceChannelId: t, channelId: n } = e;
        t !== n && Ad();
    }
}
let Ac = new Au();
var A_ = n(913765),
    AA = n(942614),
    Ah = n(315982),
    AE = n(709977),
    Ap = n(14509),
    Am = n(894778),
    AI = n(447696),
    Ag = n(684407),
    AC = n(426620),
    AT = n(771016),
    Af = n(994277);
n(436317);
var AN = n(315290);
function AS() {
    null != a && (0, f.closeModal)(a);
}
class AO extends Z.A {
    _initialize() {
        X.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), X.h.subscribe("LOGOUT", AS);
    }
    _terminate() {
        X.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), X.h.unsubscribe("LOGOUT", AS);
    }
    handleConnectionOpen() {
        var e;
        let t,
            i = AC.A.getType();
        if (null == i) return;
        switch (i) {
            case AT.zY.INVITE_UNCLAIMED:
                Am.A.flowStart(AN.do.INVITE, AN.ju.NUF_STARTED);
                break;
            case AT.zY.ORGANIC_REGISTERED:
                Am.A.flowStart(AN.do.ORGANIC, AN.ju.NUF_STARTED);
                break;
            case AT.zY.MARKETING_UNCLAIMED:
                Am.A.flowStart(AN.do.ORGANIC_MARKETING, AN.ju.NUF_STARTED);
        }
        let r = !1,
            l = en.A.getGuildId();
        if (i === AT.zY.INVITE_UNCLAIMED) {
            let e = nW.A.getGuild(l);
            null != e && (0, AE.Qd)(e) && ((r = !0), (0, AI.Fy)(e.id));
        }
        let s = () => 0 === an.A.totalGuilds && !G.isPlatformEmbedded,
            o = ei.xq();
        (e = [
            {
                key: "Unified NUF Modal",
                open: async function (e) {
                    let { default: t } = await n.e("74082").then(n.bind(n, 491380));
                    if (t.getConfig({ location: "nuf_manager" }).enabled) {
                        a = await (0, f.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e("46881"), n.e("19183"), n.e("51647")]).then(
                                    n.bind(n, 923314),
                                );
                                return (t) => (0, p.jsx)(e, { ...t });
                            },
                            { onCloseRequest: P.tEg, onCloseCallback: e, modalKey: a },
                        );
                        return;
                    }
                    let i = (e) => {
                        switch (e) {
                            case Af.i.AGE_GATE:
                                Am.A.flowStep(AN.do.ANY, AN.ju.AGE_GATE);
                                break;
                            case Af.i.CHOOSE_TEMPLATE:
                                Am.A.flowStep(AN.do.ANY, AN.jC.GUILD_TEMPLATES);
                                break;
                            case Af.i.CUSTOMIZE_GUILD:
                                Am.A.flowStep(AN.do.ANY, AN.jC.GUILD_CREATE);
                                break;
                            case Af.i.CHANNEL_PROMPT:
                                Am.A.flowStep(AN.do.ANY, AN.jC.CHANNEL_PROMPT);
                                break;
                            case Af.i.JOIN_GUILD:
                                Am.A.flowStep(AN.do.ANY, AN.jC.JOIN_GUILD);
                                break;
                            case Af.i.CREATION_INTENT:
                                Am.A.flowStep(AN.do.ANY, AN.jC.CREATION_INTENT);
                                break;
                            case Af.i.COMPLETE:
                                Am.A.flowStep(AN.do.ANY, AN.jC.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                lt.xb(e);
                        }
                    };
                    a = await (0, f.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("46881"), n.e("30811")]).then(
                                n.bind(n, 111185),
                            );
                            return (t) => (0, p.jsx)(e, { ...t, onSlideChange: i });
                        },
                        { onCloseRequest: P.tEg, onCloseCallback: e, modalKey: a },
                    );
                },
                predicate: () => s() && !0,
            },
            { key: "New User Age Gate", open: Ah.v, predicate: () => o && !s() && !0 },
            {
                key: "Claim Account Modal",
                open: (e) => Ah.R(G.isPlatformEmbedded, e),
                predicate: () =>
                    !r &&
                    null != ty.default.getCurrentUser() &&
                    !ty.default.getCurrentUser()?.isClaimed() &&
                    !(0, Ap._9)(),
            },
            {
                key: "Verification Gate with Claim Account",
                open: (e) => (0, nX.Ze)(l, e ?? void 0),
                predicate: () => r && !ty.default.getCurrentUser()?.isClaimed() && !0,
            },
            {
                key: "Guild Welcome Modal",
                open: (e) =>
                    (0, f.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("10585").then(n.bind(n, 954784));
                            return (t) => (0, p.jsx)(e, { ...t, guildId: l });
                        },
                        { onCloseCallback: e },
                    ),
                predicate: () => null != l && null != Ag.A.get(l) && Ag.A.get(l) !== Ag.E,
            },
        ]),
            (t = () => {
                AA.D(), Am.A.flowStep(AN.do.ANY, AN.ju.NUF_COMPLETE, !0);
            }),
            [...e].reverse().forEach((e) => {
                let n = t;
                t = () => {
                    e.predicate() ? e.open(n) : n();
                };
            }),
            t();
    }
}
let AL = new AO();
var Ay = n(682492),
    Ab = n(414736),
    Av = n(874486),
    AD = n(927018),
    AR = n(3137),
    AM = n(559908);
let AP = new Set();
class Aw extends Z.A {
    _initialize() {
        X.h.subscribe("MESSAGE_CREATE", this.handleMessageCreate),
            X.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate);
    }
    _terminate() {
        X.h.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate),
            X.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate);
    }
    handleSettingsUpdate = (e) => {
        let { settings: t } = e;
        t.enabled ? (0, Ab._)(AD.sn.ENABLE_POGGERMODE) : !1 === t.enabled && (0, Ab._)(AD.sn.DISABLE_POGGERMODE),
            Object.keys(t).some((e) => e.startsWith("confetti")) && (0, Ab._)(AD.sn.CUSTOMIZE_CONFETTI);
    };
    handleMessageCreate = (e) => {
        let {
            channelId: t,
            message: { author: n, nonce: i, mentions: r },
        } = e;
        if (!AR.A.isEnabled()) return !1;
        let a = M.default.getId();
        if (
            (r?.find((e) => e.id === a) != null
                ? (0, Ab._)(AD.sn.PING_ME)
                : (r?.length ?? 0) > 0 && n?.id === a && (0, Ab._)(AD.sn.PING_SOMEONE),
            !(0, AM.gN)(n?.id, a, i, AP))
        )
            return !1;
        let { combo: l } = AM.Ay.getMostRecentMessageCombo(t) ?? {};
        if (null == l) return !1;
        Object.values(AD.sn).forEach((e) => {
            if (null != Av.A.getUnlocked(e)) return;
            let t = (0, AD.vM)(e),
                n = t?.checkUnlock;
            null == n || (!1 !== n(l) && (0, Ab._)(e));
        });
    };
}
let Ax = new Aw();
var AU = n(64585),
    AG = n(139033);
class Ak extends Z.A {
    _initialize() {
        X.h.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        X.h.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, AG.A)({ title: k.intl.string(k.t.wDQgnX), subtitle: k.intl.string(k.t.OJklbS) });
    }
}
let Aj = new Ak();
var AV = n(958005),
    AH = n(574172);
n(41604);
let AB = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("40393"),
                n.e("77602"),
                n.e("33773"),
                n.e("53668"),
                n.e("84114"),
                n.e("41054"),
                n.e("52125"),
                n.e("21485"),
                n.e("63139"),
                n.e("71138"),
            ]).then(n.bind(n, 140539)),
        webpackId: 140539,
        name: "PopoutWindowChannelCall",
    }),
    AF = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([n.e("40393"), n.e("33773"), n.e("53668"), n.e("84114"), n.e("36133")]).then(n.bind(n, 418838)),
        webpackId: 418838,
        name: "PopoutWindowCallTile",
    }),
    AY = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("40393"),
                n.e("33773"),
                n.e("53668"),
                n.e("84114"),
                n.e("41054"),
                n.e("52125"),
                n.e("66308"),
                n.e("36308"),
            ]).then(n.bind(n, 911315)),
        webpackId: 911315,
        name: "PopoutWindowStageChannelCall",
    }),
    AK = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("40393"),
                n.e("77602"),
                n.e("33773"),
                n.e("53668"),
                n.e("84114"),
                n.e("41054"),
                n.e("52125"),
                n.e("21485"),
                n.e("63139"),
                n.e("71138"),
            ]).then(n.bind(n, 767675)),
        webpackId: 767675,
        name: "PopoutWindowRTCDebug",
    }),
    AW = (0, t_.Fe)({
        createPromise: () => n.e("13492").then(n.bind(n, 481477)),
        webpackId: 481477,
        name: "PopoutWindowActivity",
    });
class Az extends Z.A {
    _observer = null;
    _initialize() {
        X.h.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            X.h.subscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            X.h.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            X.h.subscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.initializeStyleSheetObserver();
    }
    _terminate() {
        X.h.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            X.h.unsubscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            X.h.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            X.h.unsubscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.terminateStyleSheetObserver();
    }
    handleOpenChannelCallPopout(e) {
        let { channel: t } = e;
        AH.open(
            P.MLl.CHANNEL_CALL_POPOUT,
            (e) =>
                t.isGuildStageVoice()
                    ? (0, p.jsx)(AY, { windowKey: e, channelId: t.id })
                    : (0, p.jsx)(AB, { windowKey: e, channelId: t.id }),
            { defaultWidth: 854, defaultHeight: 480 },
        );
    }
    handleOpenCallTilePopout = (e) => {
        let { channelId: t, participantId: n } = e,
            i = (0, AV.A)(t, n);
        AH.open(i, (e) => (0, p.jsx)(AF, { windowKey: e, channelId: t, participantId: n }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    };
    initializeStyleSheetObserver() {
        (this._observer = new MutationObserver(function (e) {
            for (let t of e)
                if ("childList" === t.type) {
                    for (let e of t.addedNodes)
                        if (e.nodeType === Node.ELEMENT_NODE && "LINK" === e.tagName && "stylesheet" === e.rel) {
                            let t = e.href,
                                n = e.integrity;
                            AH.addStylesheet(t, n);
                        }
                }
        })),
            this._observer.observe(document.head, { childList: !0 });
    }
    terminateStyleSheetObserver() {
        null != this._observer && (this._observer.disconnect(), (this._observer = null));
    }
    handleOpenRTCDebugPopout() {
        AH.open(P.MLl.RTC_DEBUG_POPOUT, (e) => (0, p.jsx)(AK, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    }
    handleOpenActivityPopout() {
        AH.open(P.MLl.ACTIVITY_POPOUT, (e) => (0, p.jsx)(AW, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    }
}
let Aq = new Az();
class A$ extends i1.FrameLoop {
    _requestAnimationFrame = (e) => requestAnimationFrame(e);
    _cancelAnimationFrame = (e) => cancelAnimationFrame(e);
    writing = !1;
    id = 0;
    lastTime = 0;
    animations = [];
    priority = 0;
    startQueue = new Set();
    frameQueue = new Set();
    writeQueue = new Set();
    timeoutQueue = [];
    addAnimation = (e) => {
        let t = this.animations.indexOf(e);
        t < 0 &&
            ((t = this.animations.findIndex((t) => t.priority > e.priority)),
            this.animations.splice(0 != ~t ? t : this.animations.length, 0, e));
    };
    loop = () => {
        if (0 !== this.lastTime)
            try {
                this.advance();
            } catch (e) {
                console.error(e);
            } finally {
                this.animations.length > 0 ||
                this.startQueue.size > 0 ||
                this.frameQueue.size > 0 ||
                this.writeQueue.size > 0 ||
                this.timeoutQueue.length > 0
                    ? (this.id = this._requestAnimationFrame(this.loop))
                    : ((this.lastTime = 0), (this.id = 0));
            }
    };
    startLoop = () => {
        this.lastTime > 0 || ((this.lastTime = i1.Globals.now()), (this.id = this._requestAnimationFrame(this.loop)));
    };
    advance = () => {
        let e = i1.Globals.now();
        if (
            (this.startQueue.size > 0 && (this.startQueue.forEach(this.addAnimation), this.startQueue.clear()),
            this.timeoutQueue.length > 0 &&
                i1.Globals.batchedUpdates(() => {
                    let t = AX(this.timeoutQueue, (t) => t.time > e);
                    this.timeoutQueue.splice(0, t).forEach((e) => e.handler());
                }),
            e > this.lastTime)
        ) {
            let t = Math.min(64, e - this.lastTime);
            (this.lastTime = e),
                i1.Globals.batchedUpdates(() => {
                    this.animations.length > 0 &&
                        (i1.Globals.willAdvance(this.animations),
                        (this.animations = this.animations.filter(
                            (e) => ((this.priority = e.priority), e.idle || e.advance(t), !e.idle),
                        )),
                        (this.priority = 0)),
                        this.frameQueue.size > 0 && (this.frameQueue.forEach((t) => t(e)), this.frameQueue.clear()),
                        this.writeQueue.size > 0 &&
                            ((this.writing = !0),
                            this.writeQueue.forEach((t) => t(e)),
                            this.writeQueue.clear(),
                            (this.writing = !1));
                });
        }
    };
    start = (e) => {
        this.priority > e.priority ? this.startQueue.add(e) : (this.addAnimation(e), this.startLoop());
    };
    setTimeout = (e, t) => {
        let n = i1.Globals.now() + t,
            i = () => {
                let e = this.timeoutQueue.findIndex((e) => e.cancel === i);
                e >= 0 && this.timeoutQueue.splice(e, 1);
            },
            r = AX(this.timeoutQueue, (e) => e.time > n),
            a = { time: n, handler: e, cancel: i };
        return this.timeoutQueue.splice(r, 0, a), this.startLoop(), a;
    };
    onFrame = (e) => {
        this.frameQueue.add(e), this.startLoop();
    };
    onWrite = (e) => {
        this.writing ? e(this.lastTime) : this.writeQueue.add(e);
    };
    setRAF(e, t) {
        0 !== this.id && (this._cancelAnimationFrame(this.id), (this.id = 0)),
            (this._requestAnimationFrame = e),
            (this._cancelAnimationFrame = t),
            this.loop();
    }
}
function AX(e, t) {
    let n = e.findIndex(t);
    return n < 0 ? e.length : n;
}
let AZ = new A$();
i1.Globals.assign({ frameLoop: AZ });
class AQ extends Z.A {
    _initialize() {
        eS.A.addChangeListener(this.handlePopoutWindowChange),
            X.h.subscribe("WINDOW_FOCUS", this.handleMainWindowFocus);
    }
    _terminate() {
        eS.A.removeChangeListener(this.handlePopoutWindowChange),
            X.h.unsubscribe("WINDOW_FOCUS", this.handleMainWindowFocus),
            this.injectWindowAnimationFrame(window);
    }
    handleMainWindowFocus = (e) => {
        e.focused && e.windowId === window.__DISCORD_WINDOW_ID && this.injectWindowAnimationFrame(window);
    };
    handlePopoutWindowChange = () => {
        let e = eS.A.getWindowKeys().find((e) => eS.A.getWindowFocused(e));
        if (null == e) return this.injectWindowAnimationFrame(window);
        let t = eS.A.getWindow(e);
        if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
        this.injectWindowAnimationFrame(t);
    };
    injectWindowAnimationFrame(e) {
        let t = (t) => e.requestAnimationFrame(t),
            n = (t) => e.cancelAnimationFrame(t);
        co.A.inject.RequestAnimationFrame(t), co.A.inject.CancelAnimationFrame(n), AZ.setRAF(t, n);
    }
}
let AJ = new AQ();
var A0 = n(877624),
    A1 = n(835095),
    A2 = n(354670),
    A6 = n(40185),
    A5 = n(881489),
    A4 = n(374200),
    A3 = n(852218),
    A8 = n(231265),
    A7 = n(635980);
let A9 = "PremiumServerDriveAnnouncementModal";
class he extends Z.A {
    _initialize() {
        X.h.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            X.h.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            X.h.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            X.h.subscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess),
            X.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
    }
    _terminate() {
        X.h.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            X.h.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            X.h.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            X.h.unsubscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess),
            X.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
    }
    maybeShowAnnouncementModalFromPromotions = (e) => {
        for (let t of e)
            if (null != t.marketingComponents) {
                if (null != t.trialId) {
                    let e = A2.A.getUserTrialOffer(t.trialId);
                    if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) continue;
                }
                for (let e of t.marketingComponents)
                    if (e.component_type === A0.C.ANNOUNCEMENT_MODAL)
                        return void this.maybeOpenServerDriveAnnouncementModal(e.id, e.promotion_id, e.properties, !1);
            }
        (0, A5.al)(), (0, A5.QM)();
    };
    handleActivePromotionsFetchSuccess = (e) => {
        let { promotions: t } = e;
        this.maybeShowAnnouncementModalFromPromotions(t.map((e) => A1.A.createFromServer(e)));
    };
    handleUserOfferFetchSuccess = (e) => {
        let { userTrialOffer: t } = e;
        null != t &&
            this.maybeShowAnnouncementModalFromPromotions(Object.values(A4.A.promotionsByType[A3.pt.MARKETING_MOMENT]));
    };
    handleEntitlementCreate = (e) => {
        let { entitlement: t } = e;
        lk.P.isDisallowPopupsSet() || t.source_type !== P.GD.REVERSE_TRIAL || (0, A5.al)();
    };
    maybeOpenServerDriveAnnouncementModal = async (e, t, i, r) => {
        if ((0, f.hasModalOpen)(A9)) return !1;
        let a = (0, A7.H)({ promotionId: t, content: i, isPreview: r });
        if (null != a)
            return (
                (!1 !== r || a?.contentIdentifier !== "summer_bogo_content" || !!(await (0, A8.C)())) &&
                ((0, f.openModalLazy)(
                    async () => {
                        let { default: i } = await Promise.resolve().then(n.bind(n, 635980));
                        return (n) =>
                            (0, p.jsx)(i, { renderModalProps: n, componentId: e, promotionId: t, properties: a });
                    },
                    { modalKey: A9 },
                ),
                !0)
            );
    };
    handlePreview = (e) => {
        let { data: t } = e;
        this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, !0);
    };
    mayShowAnnouncementModal = async () => {
        if ((await (0, A6.hb)(), lk.P.isDisallowPopupsSet())) return;
        let e = ty.default.getCurrentUser();
        if (null != e && !e.verified) return;
    };
}
let ht = new he();
var hn = n(499454),
    hi = n(17159),
    hr = n(688796),
    ha = n(207803),
    hl = n(84540),
    hs = n(919395),
    ho = n(339984);
class hd extends Z.A {
    _initialize() {
        X.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        X.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === ho.HL.AVATAR
            ? ((e) => {
                  let { image: t, file: n, guildId: i, isTryItOut: r } = e;
                  if (r) return void (0, ha.e$)(t);
                  let a = ty.default.getCurrentUser();
                  if (aa.Ay.canUseAnimatedAvatar(a) || "image/gif" !== n.type) {
                      (0, hl.p)({ guildId: i, avatar: t }), (0, hs.WU)("set");
                      return;
                  }
                  null != a && (0, hr.G)({ uploadType: ho.HL.AVATAR });
              })(e)
            : e.uploadType === ho.HL.BANNER
              ? ((e) => {
                    let { image: t, guildId: n, isTryItOut: i } = e,
                        r = t.imageUri;
                    if (i) return void (0, ha.xe)(r);
                    let a = ty.default.getCurrentUser(),
                        l = aa.Ay.canUsePremiumProfileCustomization(a);
                    aa.Ay.canUsePremiumProfileCustomization(a)
                        ? (0, hl.p)({ guildId: n, banner: r })
                        : null == a || l || (0, hr.G)({ uploadType: ho.HL.BANNER });
                })(e)
              : void 0;
    }
}
let hu = new hd();
var hc = n(453314),
    h_ = n(302495),
    hA = n(901123);
let hh = new Set([
    hA.BV.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode"),
    hA.BV.APP_WITH_GIFT_CODE(":giftCode"),
    hA.BV.APP,
    hA.BV.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
    hA.BV.SETTINGS(":section", ":subsection?"),
    hA.BV.USER_GUILD_NOTIFICATION_SETTINGS(h_.p.guildId()),
    hA.BV.APPLICATION_LIBRARY_INVENTORY,
    hA.BV.WELCOME(h_.p.guildId({ optional: !0 }), h_.p.channelId({ optional: !0 })),
    hA.BV.GUILD_EVENT_DETAILS(h_.p.guildId({ optional: !0 }), ":guildEventId"),
    hA.BV.GUILD_SETTINGS(h_.p.guildId(), ":section?", ":subsection?"),
    hA.BV.CHANNEL_THREAD_VIEW(h_.p.guildId(), h_.p.channelId(), ":threadId", ":messageId?"),
    hA.BV.CHANNEL(h_.p.guildId(), h_.p.channelId({ optional: !0 }), ":messageId?"),
    hA.BV.ACTIVITY,
    hA.BV.ACTIVITIES,
    hA.BV.ACTIVITIES_HAPPENING_NOW,
    hA.BV.ACTIVITY_DETAILS(":applicationId"),
    hA.BV.APPLICATION_LIBRARY,
    hA.BV.APPLICATION_STORE,
    hA.BV.MESSAGE_REQUESTS,
    hA.BV.COLLECTIBLES_SHOP,
    hA.BV.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
    hA.BV.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
    hA.BV.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
    hA.BV.GUILD_DISCOVERY,
    hA.BV.QUEST_HOME_DEPRECATED,
    hA.BV.QUEST_HOME,
    hA.BV.ICYMI,
    hA.BV.GLOBAL_DISCOVERY,
    hA.BV.GUILD_MEMBER_VERIFICATION(h_.p.guildId()),
    hA.BV.GUILD_MEMBER_VERIFICATION_FOR_HUB(h_.p.guildId(), ":inviteCode?"),
    hA.BV.GUILD_BOOSTING_MARKETING(h_.p.guildId()),
    hA.BV.GUILD_FEATURE(":feature", h_.p.guildId()),
    hA.BV.FEATURE(":feature"),
    hA.BV.FAMILY_CENTER,
    hA.BV.APPLICATION_DIRECTORY,
    hA.BV.GAME_SHOP(h_.p.guildId(), ":shopSkuId?", ":shopSlug?"),
]);
var hE = n(655087),
    hp =
        (((c = {})[(c.UNHANDLED = -1)] = "UNHANDLED"),
        (c[(c.NOMINAL = 0)] = "NOMINAL"),
        (c[(c.FAIR = 1)] = "FAIR"),
        (c[(c.SERIOUS = 2)] = "SERIOUS"),
        (c[(c.CRITICAL = 3)] = "CRITICAL"),
        c);
function hm() {
    var e = hE.A.getRawThermalState();
    if (null == e) return -1;
    if ((0, G.isIOS)()) return e;
    if (!(0, G.isAndroid)()) return -1;
    switch (e) {
        case 0:
            return 0;
        case 1:
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
        case 5:
        case 6:
            return 3;
        default:
            return -1;
    }
}
var hI = n(859703),
    hg = n(792620),
    hC = n(290863),
    hT = n(90924),
    hf = n(969151),
    hN = n(562153),
    hS = n(639621);
function hO() {
    let e = og.Ay.getCurrentEmbeddedActivity();
    if (null == e) return { participants: [] };
    let t = (0, hf.D)(e.location),
        n = (0, hf.H)(e.location);
    return {
        participants: Array.from(e.userIds, (e) => {
            let i = ty.default.getUser(e);
            if (null == i) return;
            let r = (0, hN.tJ)(t, n, i);
            return { ...(0, hS.A)(i), nickname: r ?? void 0 };
        }).filter(lt.Vq),
    };
}
let hL = { [tR.sm.ANY]: [tR.VH] };
var hy = n(360469),
    hb = n(179771);
let hv = {
        [rh.e$.INITIATE_IMAGE_UPLOAD]: { request: void 0, response: (e) => ({ image_url: e.string().required() }) },
        [rh.e$.OPEN_SHARE_MOMENT_DIALOG]: {
            response: void 0,
            request: (e) => ({ mediaUrl: e.string().required().max(1024) }),
        },
        [rh.e$.AUTHENTICATE]: {
            request: (e) => ({ access_token: e.string().allow(null).optional() }),
            response: (e) => ({
                access_token: e.string().required(),
                user: e
                    .object({
                        username: e.string().required(),
                        discriminator: e.string().required(),
                        id: e.string().required(),
                        avatar: e.string().allow(null),
                        public_flags: e.number().required(),
                        global_name: e.string().allow(null),
                    })
                    .required(),
                scopes: e
                    .array()
                    .items(e.string().valid(...Object.values(hb.F)))
                    .required(),
                expires: e.string().required(),
                application: e
                    .object({
                        description: e.string().required(),
                        icon: e.string().allow(null),
                        id: e.string().required(),
                        rpc_origins: e.array().items(e.string()).optional(),
                        name: e.string().required(),
                    })
                    .required(),
            }),
        },
        [rh.e$.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
            request: void 0,
            response: (e) => ({
                participants: e
                    .array()
                    .items(
                        hR(e)
                            .keys({ nickname: e.string().description("Server nickname. Not unique.") })
                            .required(),
                    )
                    .required(),
            }),
        },
        [rh.e$.SHARE_INTERACTION]: {
            request: (e) => ({
                command: e.string().required(),
                options: e.array().items(e.object({ name: e.string().required(), value: e.string().required() })),
                content: e.string().max(2e3),
                require_launch_channel: e.boolean(),
                preview_image: e.object({
                    height: e.number().required(),
                    url: e.string().required(),
                    width: e.number().required(),
                }),
                components: e.array().items(hM(e)),
                pid: e.number(),
            }),
            response: (e) => ({ success: e.boolean().required() }),
        },
        [rh.e$.SHARE_LINK]: {
            request: (e) => ({
                custom_id: e.string().max(64),
                message: e.string().max(1e3).required(),
                link_id: e.string().max(64),
            }),
            response: (e) => ({
                success: e.boolean().required(),
                didCopyLink: e.boolean().required(),
                didSendMessage: e.boolean().required(),
            }),
        },
        [rh.e$.GET_RELATIONSHIPS]: {
            request: void 0,
            response: (e) => ({
                relationships: e
                    .array()
                    .required()
                    .items(
                        e.object({
                            type: e.number().required(),
                            user: hR(e).required(),
                            presence: e.object({ status: e.string().required(), activity: hD(e).allow(null) }),
                        }),
                    ),
            }),
        },
        [rh.e$.INVITE_USER_EMBEDDED]: {
            request: (e) => ({ user_id: e.string().required(), content: e.string().min(0).max(1024) }),
            response: void 0,
        },
        [rh.e$.GET_USER]: {
            request: (e) => ({ id: e.string().max(64).required() }),
            response: (e) => hR(e).allow(null),
        },
        [rh.e$.GET_QUEST_ENROLLMENT_STATUS]: {
            request: (e) => ({ quest_id: e.string().required() }),
            response: (e) => ({
                quest_id: e.string().required(),
                is_enrolled: e.boolean().required(),
                enrolled_at: e.string().allow(null).optional(),
            }),
        },
        [rh.e$.QUEST_START_TIMER]: {
            request: (e) => ({ quest_id: e.string().required() }),
            response: (e) => ({ success: e.boolean().required() }),
        },
        [rh.e$.GET_QUESTS]: {
            request: void 0,
            response: (e) => ({
                quests: e
                    .array()
                    .items(
                        e.object({
                            quest_id: e.string().required(),
                            enrolled_at: e.string().allow(null).optional(),
                            external_cta_url: e.string().required(),
                        }),
                    )
                    .required(),
            }),
        },
        [rh.e$.REQUEST_PROXY_TICKET_REFRESH]: { request: void 0, response: (e) => ({ ticket: e.string().required() }) },
    },
    hD = (e) =>
        e.object({
            session_id: e.string().optional(),
            type: e.number().optional(),
            name: e.string().required(),
            url: e.string().allow(null).optional(),
            application_id: e.string().optional(),
            status_display_type: e.number().optional(),
            state: e.string().optional(),
            state_url: e.string().optional(),
            details: e.string().optional(),
            details_url: e.string().optional(),
            emoji: e
                .object({
                    name: e.string().required(),
                    id: e.string().allow(null).optional(),
                    animated: e.bool().optional().allow(null),
                })
                .allow(null)
                .optional(),
            assets: e
                .object({
                    large_image: e.string().optional(),
                    large_text: e.string().optional(),
                    large_url: e.string().optional(),
                    small_image: e.string().optional(),
                    small_text: e.string().optional(),
                    small_url: e.string().optional(),
                })
                .optional(),
            timestamps: e.object({ start: e.number().optional(), end: e.number().optional() }).optional(),
            party: e
                .object({
                    id: e.string().optional(),
                    size: e.array().items(e.number()).length(2).optional(),
                    privacy: e.number().optional(),
                })
                .optional(),
            secrets: e.object({ match: e.string().optional(), join: e.string().optional() }).optional(),
            sync_id: e.string().optional(),
            created_at: e.number().optional(),
            instance: e.bool().optional(),
            flags: e.number().optional(),
            metadata: e.object().optional(),
            platform: e.string().optional(),
            supported_platforms: e.array().items(e.string()).optional(),
            buttons: e.array().items(e.string()).optional(),
            hangStatus: e.string().optional(),
        }),
    hR = (e) =>
        e
            .object({
                id: e.string().required().description("User ID"),
                username: e.string().required(),
                global_name: e.string().allow(null).description("Global Discord name. Not unique."),
                discriminator: e
                    .string()
                    .required()
                    .description("Global name discriminator. Will be 0 if a unique username"),
                avatar: e.string().allow(null).description("User Avatar ID"),
                flags: e.number().required().description("Public user flags"),
                bot: e.bool().required().description("If a bot user."),
                avatar_decoration_data: e
                    .object({ asset: e.string().allow(null), skuId: e.string(), expiresAt: e.number() })
                    .allow(null)
                    .description("Details about avatar decoration"),
                premium_type: e.number().allow(null).description("Nitro premium type"),
            })
            .description("Discord User"),
    hM = (e) => e.object({ type: e.number().valid(1).required(), components: e.array().max(5).items(hP(e)) }),
    hP = (e) =>
        e.object({
            type: e.number().valid(2).required(),
            style: e.number().min(1).max(5).required(),
            label: e.string().max(80).description("Text that appears on the button"),
            custom_id: e
                .string()
                .max(100)
                .description("Developer-defined identifier for the button; max 100 characters"),
        });
function hw(e, t) {
    let { scope: n, handler: i } = t,
        r = { scope: n, handler: i },
        a = hv[e]?.request,
        l = null;
    return (
        null != a &&
            (r.validation = function (e) {
                return null == l && (l = e.object(a(e)).required().unknown(!0)), l;
            }),
        r
    );
}
var hx = n(20015),
    hU = n(636401);
function hG() {
    let e = og.Ay.getConnectedActivityChannelId();
    return rl.A.getChannel(e);
}
let hk = {
    [P.e$_.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: hw(P.e$_.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
        scope: hL,
        handler(e) {
            let { socket: t } = e;
            return (0, hT.lG)(t.transport), hO();
        },
    }),
    [P.e$_.REQUEST_PROXY_TICKET_REFRESH]: hw(P.e$_.REQUEST_PROXY_TICKET_REFRESH, {
        scope: hL,
        async handler(e) {
            let { socket: t } = e;
            (0, hT.lG)(t.transport);
            let n = (0, hT.D2)(t.application);
            if (!(0, hx.n)(t.application, P.gfo.EMBEDDED))
                throw new hU.A(
                    { errorCode: P.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                    "This application cannot access this API",
                );
            let i = hG();
            try {
                return { ticket: await (0, t5.D2)(n, i?.id) };
            } catch (e) {
                throw new hU.A({ errorCode: P.Lw6.UNKNOWN_ERROR }, "Failed to create proxy ticket");
            }
        },
    }),
};
var hj = n(458664),
    hV = n(977445);
function hH(e) {
    return e.object().unknown(!0);
}
let hB = {
        [P.e$_.SEND_ANALYTICS_EVENT]: {
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({ event_name: e.string().required(), event_properties: hH(e).required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { event_name: n, event_properties: i },
                } = e;
                (0, hT.lG)(t.transport), (0, hT.D2)(t.application);
                let r = t.application.id,
                    a = hG(),
                    l = a?.getGuildId(),
                    s = lP.A.getApplication(r);
                if (!(0, hx.n)(s, P.gfo.EMBEDDED_FIRST_PARTY))
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "This application cannot access this API");
                let o = (0, hj.D)(r),
                    d = {
                        activity_application_id: r,
                        activity_channel_type: a?.type,
                        activity_guild_id: l,
                        activity_user_session_id: o?.activityUserSessionId,
                    };
                ec.default.track(n, { ...d, ...i });
            },
        },
        [P.e$_.GET_APPLICATION_TICKET]: {
            scope: tR.hj,
            handler(e) {
                let { socket: t } = e,
                    n = t.application.id;
                if (null == n) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
                return aO.Bo.post({
                    url: P.Rsh.APPLICATION_TICKET(n),
                    body: { test_mode: (0, hV.F)(n) },
                    retries: 3,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then((e) => {
                    let { body: t } = e;
                    return t;
                });
            },
        },
    },
    hF = {
        [P.e$_.SET_CERTIFIED_DEVICES]: {
            scope: { [tR.sm.ANY]: [hb.F.RPC, tR.hj] },
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({
                        devices: e.array().items(
                            hH(e).keys({
                                type: e
                                    .string()
                                    .required()
                                    .valid([ey.oh.AUDIO_INPUT, ey.oh.AUDIO_OUTPUT, ey.oh.VIDEO_INPUT]),
                                id: e.string().required().min(1),
                                vendor: hH(e)
                                    .required()
                                    .keys({ name: e.string().min(1), url: e.string().min(1) }),
                                model: hH(e)
                                    .required()
                                    .keys({ name: e.string().min(1), url: e.string().min(1) }),
                                related: e.array().items(e.string().min(1)),
                                echo_cancellation: e.boolean(),
                                noise_suppression: e.boolean(),
                                automatic_gain_control: e.boolean(),
                                hardware_mute: e.boolean(),
                            }),
                        ),
                    }),
            handler(e) {
                var t, n;
                let {
                    socket: i,
                    args: { devices: r },
                } = e;
                if (null == i.application.id) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
                (t = i.application.id),
                    (n = r.map((e) => ({
                        type: e.type,
                        id: e.id,
                        vendor: e.vendor,
                        model: e.model,
                        related: e.related.filter((e) => r.some((t) => t.id === e)),
                        echoCancellation: e.echo_cancellation,
                        noiseSuppression: e.noise_suppression,
                        automaticGainControl: e.automatic_gain_control,
                        hardwareMute: e.hardware_mute,
                    }))),
                    X.h.dispatch({ type: "CERTIFIED_DEVICES_SET", applicationId: t, devices: n });
            },
        },
    };
var hY = n(95701),
    hK = n(147036);
let hW = {
        [P.e$_.GET_CHANNEL]: {
            scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.GUILDS, hb.F.GUILDS_CHANNELS_READ] },
            handler(e) {
                let {
                        args: { channel_id: t },
                        socket: n,
                    } = e,
                    i = rl.A.getChannel(t);
                if (null == i) throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
                if (i.isPrivate()) {
                    let e = n.authorization.scopes;
                    if (!e.includes(hb.F.RPC) && !e.includes(hb.F.DM_CHANNELS_READ))
                        throw new hU.A({ errorCode: P.Lw6.INVALID_PERMISSIONS }, "Invalid scope");
                }
                return (0, hT.SN)(i, (0, hT.B_)(i, n.application.id, n.authorization.scopes));
            },
        },
        [P.e$_.GET_CHANNELS]: {
            scope: hb.F.RPC,
            handler(e) {
                let {
                        args: { guild_id: t },
                    } = e,
                    n = eG().values(rl.A.loadAllGuildAndPrivateChannelsFromDisk());
                if (t) {
                    let e = nW.A.getGuild(t);
                    if (null == e) throw new hU.A({ errorCode: P.Lw6.INVALID_GUILD }, `Invalid guild id: ${t}`);
                    n = n.filter((t) => {
                        let { guild_id: n } = t;
                        return n === e.id;
                    });
                }
                return {
                    channels: n
                        .filter((e) => rs.A.can(P.xBc.VIEW_CHANNEL, e))
                        .map((e) => {
                            let { id: t, name: n, type: i } = e;
                            return { id: t, name: n, type: i };
                        }),
                };
            },
        },
        [P.e$_.GET_CHANNEL_PERMISSIONS]: {
            scope: { [tR.sm.ANY]: [hb.F.GUILDS_MEMBERS_READ, hb.F.GUILDS_CHANNELS_READ] },
            handler(e) {
                let t = hG();
                if (null == t) throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, "Invalid channel");
                return { permissions: rs.A.computePermissions(t) };
            },
        },
        [P.e$_.SELECT_VOICE_CHANNEL]: {
            scope: hb.F.RPC,
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({
                        channel_id: e.string().allow(null),
                        timeout: e.number().min(0).max(60),
                        force: e.boolean(),
                        navigate: e.boolean(),
                    }),
            handler(e) {
                let {
                    server: t,
                    socket: n,
                    args: { channel_id: i, timeout: r = 0, force: a = !1, navigate: l = !1 },
                } = e;
                if (!i) return y.default.selectVoiceChannel(null), null;
                let s = et.A.getVoiceChannelId();
                if (null != s && s !== i && !1 === a)
                    throw new hU.A(
                        { errorCode: P.Lw6.SELECT_VOICE_FORCE_REQUIRED },
                        "User is already joined to a voice channel.",
                    );
                return t
                    .storeWait(n, () => rl.A.getChannel(i), r)
                    .catch(() => {
                        throw new hU.A(
                            { errorCode: P.Lw6.SELECT_CHANNEL_TIMED_OUT },
                            "Request to select voice channel timed out.",
                        );
                    })
                    .then((e) => {
                        if (null == e) throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${i}`);
                        if (!(0, hY.gV)(e.type))
                            throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, "Channel is not a voice channel");
                        return Promise.all([
                            Promise.resolve(e),
                            (0, hT.SN)(e, (0, hT.B_)(e, n.application.id, n.authorization.scopes)),
                        ]);
                    })
                    .then((e) => {
                        let [t, n] = e;
                        if (n.guild_id) {
                            if ((0, hK.Pd)(t, dd.A, nW.A))
                                throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, "Channel is full");
                            if (!rs.A.can(P.xBc.CONNECT, t))
                                throw new hU.A(
                                    { errorCode: P.Lw6.INVALID_PERMISSIONS },
                                    "Connect permission required to join channel",
                                );
                        }
                        return y.default.selectVoiceChannel(t.id), l && (0, tL.bG)(P.BVt.CHANNEL(t.guild_id, t.id)), n;
                    });
            },
        },
        [P.e$_.GET_SELECTED_VOICE_CHANNEL]: {
            scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.RPC_VOICE_READ] },
            handler(e) {
                let { socket: t } = e,
                    n = et.A.getVoiceChannelId(),
                    i = null != n ? rl.A.getChannel(n) : null;
                return null != i ? (0, hT.SN)(i, (0, hT.B_)(i, t.application.id, t.authorization.scopes)) : null;
            },
        },
        [P.e$_.SELECT_TEXT_CHANNEL]: {
            scope: hb.F.RPC,
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({ channel_id: e.string().allow(null), timeout: e.number().min(0).max(60) }),
            handler(e) {
                let {
                    server: t,
                    socket: n,
                    args: { channel_id: i, timeout: r = 0 },
                } = e;
                return i
                    ? t
                          .storeWait(n, () => rl.A.getChannel(i), r)
                          .catch(() => {
                              throw new hU.A(
                                  { errorCode: P.Lw6.SELECT_CHANNEL_TIMED_OUT },
                                  "Request to select text channel timed out.",
                              );
                          })
                          .then((e) => {
                              if (null == e)
                                  throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${i}`);
                              if (!(0, hY.pQ)(e.type))
                                  throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, "Channel is not a text channel");
                              return Promise.all([
                                  Promise.resolve(e),
                                  (0, hT.SN)(e, (0, hT.B_)(e, n.application.id, n.authorization.scopes)),
                              ]);
                          })
                          .then((e) => {
                              let [t, n] = e;
                              if (n.guild_id && !rs.A.can(P.xBc.VIEW_CHANNEL, t))
                                  throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, "No permission to see channel");
                              return (
                                  n.guild_id
                                      ? (0, tL.bG)(P.BVt.CHANNEL(n.guild_id, t.id))
                                      : y.default.selectPrivateChannel(t.id),
                                  n
                              );
                          })
                    : ((0, tL.pX)(P.BVt.ME), null);
            },
        },
        [P.e$_.CREATE_CHANNEL_INVITE]: {
            scope: hb.F.RPC,
            handler(e) {
                let {
                    args: { channel_id: t, ...n },
                } = e;
                return _D.Ay.createInvite(t, n, "RPC").catch(() => {
                    throw new hU.A(
                        { errorCode: P.Lw6.INVALID_PERMISSIONS },
                        `Unable to generate an invite for ${t}. Does this user have permissions?`,
                    );
                });
            },
        },
    },
    hz = {
        [P.e$_.SET_CONFIG]: {
            scope: tR.VH,
            validation: (e) => hH(e).required().keys({ use_interactive_pip: e.boolean() }),
            handler(e) {
                let {
                    socket: t,
                    args: { use_interactive_pip: n },
                } = e;
                if (t.transport !== tR.z4.POST_MESSAGE)
                    throw new hU.A(
                        { errorCode: P.Lw6.INVALID_COMMAND },
                        `command not available from "${t.transport} transport`,
                    );
                if (null == t.application.id)
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "invalid application");
                return (
                    X.h.dispatch({
                        type: "EMBEDDED_ACTIVITY_SET_CONFIG",
                        applicationId: t.application.id,
                        config: { useInteractivePIP: n },
                    }),
                    Promise.resolve({ use_interactive_pip: n })
                );
            },
        },
    },
    hq = {
        [P.e$_.GET_GUILD]: {
            scope: hb.F.RPC,
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({ guild_id: e.string(), timeout: e.number().min(0).max(60) }),
            handler(e) {
                let {
                    socket: t,
                    server: n,
                    args: { guild_id: i, timeout: r = 0 },
                } = e;
                return n
                    .storeWait(t, () => nW.A.getGuild(i), r)
                    .catch(() => {
                        throw new hU.A({ errorCode: P.Lw6.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
                    })
                    .then((e) => {
                        if (null == e) throw new hU.A({ errorCode: P.Lw6.INVALID_GUILD }, `Invalid guild id: ${i}`);
                        return {
                            id: e.id,
                            name: e.name,
                            icon_url: (0, ee.Iv)(e, 128) ?? null,
                            members: [],
                            vanity_url_code: e.vanityURLCode,
                        };
                    });
            },
        },
        [P.e$_.GET_GUILDS]: {
            scope: hb.F.RPC,
            handler: () => ({
                guilds: nW.A.getGuildsArray().map((e) => ({
                    id: e.id,
                    name: e.name,
                    icon_url: (0, ee.Iv)(e, 128) ?? null,
                })),
            }),
        },
    };
var h$ = n(515718);
let hX = {
    [P.e$_.GET_IMAGE]: {
        scope: tR.hj,
        validation: (e) =>
            hH(e)
                .required()
                .keys({
                    type: e.string().required().valid(["user"]),
                    id: e.string().required(),
                    format: e.string().required().valid(["png", "webp", "jpg"]),
                    size: e.number().required().valid([16, 32, 64, 128, 256, 512, 1024]),
                }),
        handler(e) {
            let t,
                {
                    args: { type: n, id: i, format: r = "png", size: a = 128 },
                } = e;
            if ("user" === n) {
                let e = ty.default.getUser(i);
                if (null != e) {
                    t = nz.Ay.getUserAvatarURL(e, !1, a, r);
                    let n = window.GLOBAL_ENV.CDN_HOST;
                    null != n && -1 !== t.indexOf(n) && (t += "&_=");
                } else throw new hU.A({ errorCode: P.Lw6.INVALID_USER }, `Invalid user id: ${i}`);
            }
            if (null == t) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No valid type.");
            return fetch(t)
                .then((e) => e.blob())
                .then((e) => (0, h$.We)(e))
                .then((e) => ({ data_url: e }));
        },
    },
};
var hZ = n(119966),
    hQ = n(478437),
    hJ = n(344351),
    h0 = n(855687);
function h1() {
    let e = tZ.A.getConnectedFrame();
    if (null != e) return { frame: e, channel: void 0, guild: void 0 };
    let t = hG();
    if (null == t) throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, "Invalid channel");
    let n = nW.A.getGuild(t.getGuildId());
    if (null == n) throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, `Invalid guild ${t.getGuildId()}`);
    if (!(0, h0.K)(rs.A, n, t))
        throw new hU.A({ errorCode: P.Lw6.INVALID_PERMISSIONS }, `No invite permissions for ${t.id}`);
    return { frame: void 0, channel: t, guild: n };
}
let h2 = {
    [rh.e$.INVITE_USER_EMBEDDED]: hw(rh.e$.INVITE_USER_EMBEDDED, {
        scope: { [tR.sm.ANY]: [hb.F.DM_CHANNELS_MESSAGES_WRITE, hb.F.ACTIVITIES_INVITES_WRITE] },
        async handler(e) {
            let t,
                {
                    socket: n,
                    args: { user_id: i, content: r },
                } = e,
                a = n.application.id;
            if (null == a) throw new hZ.G({ errorCode: rh.Lw.INVALID_COMMAND }, "No application.");
            let l = og.Ay.getConnectedActivityLocation();
            if (null == l)
                throw new hZ.G(
                    { errorCode: rh.Lw.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure an activity was set using setActivity.",
                );
            switch (l.kind) {
                case hJ.T.GUILD_CHANNEL:
                case hJ.T.GUILD_CHANNEL_MESSAGE:
                    t = h1().channel;
                    break;
                case hJ.T.PRIVATE_CHANNEL:
                case hJ.T.PRIVATE_CHANNEL_MESSAGE:
                    let s = rl.A.getChannel(l.channel_id);
                    if (null == s) throw new hZ.G({ errorCode: rh.Lw.INVALID_CHANNEL }, "Invalid channel");
                    if (s.type === hQ.r.DM)
                        throw new hZ.G({ errorCode: rh.Lw.INVALID_CHANNEL }, "Cannot send invite to a DM");
                    t = s;
                    break;
                default:
                    throw new hZ.G({ errorCode: rh.Lw.NO_ELIGIBLE_ACTIVITY }, "Unsupported activity location");
            }
            try {
                await (0, t5.Ue)({
                    channelId: t.id,
                    applicationId: a,
                    userId: i,
                    prefixedContent: r,
                    location: "RPC_ACTIVITY_INVITE_USER",
                    inviteAnalyticsMetadata: { source: P.PE1.ACTIVITY_INVITE },
                });
            } catch {
                throw new hZ.G({ errorCode: rh.Lw.UNKNOWN_ERROR }, "Failed to invite user");
            }
        },
    }),
};
var h6 = n(646865),
    h5 = n(231723),
    h4 = n(851907);
async function h3(e, t) {
    if (void 0 === e) return !1;
    try {
        let { body: n } = await aO.Bo.get({
            url: P.Rsh.ACTIVITIES_TRUSTED_LINKS(e),
            rejectWithError: !1,
            query: { url: t },
            timeout: 500,
        });
        return !!n.trusted;
    } catch {
        return !1;
    }
}
var h8 = n(353835),
    h7 = n(76843);
let h9 = new Set([hy.AM, hy.eK]),
    Ee = {
        [P.e$_.OPEN_EXTERNAL_LINK]: {
            scope: { [tR.sm.ANY]: [tR.VH, tR.W_] },
            validation: (e) => hH(e).required().keys({ url: e.string().required() }),
            async handler(e) {
                let {
                    socket: t,
                    args: { url: n },
                } = e;
                (0, hT.lG)(t.transport);
                let i = og.Ay.getCurrentEmbeddedActivity();
                try {
                    let e = new URL(n).toString();
                    if (G.isPlatformEmbedded) {
                        let e = (0, h6.f)() ? P.MLl.ACTIVITY_POPOUT : null;
                        h8.A.focus(e, !0);
                    }
                    let r = lP.A.getApplication(t.application?.id),
                        a = (0, hf.H)(i?.location);
                    if (await h3(r?.id, e))
                        return (
                            (0, ak.A)(e),
                            ec.default.track(P.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                application_id: t.application?.id,
                                url: e,
                                opened: !0,
                            }),
                            Promise.resolve({ opened: !0 })
                        );
                    return new Promise((n) =>
                        (0, h7.h)(
                            {
                                href: e,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    (0, ak.A)(e),
                                        ec.default.track(P.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                            application_id: t.application?.id,
                                            url: e,
                                            opened: !0,
                                        }),
                                        n({ opened: !0 });
                                },
                                onCancel: () => {
                                    ec.default.track(P.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                        application_id: t.application?.id,
                                        url: e,
                                        opened: !1,
                                    }),
                                        n({ opened: !1 });
                                },
                            },
                            void 0,
                            void 0,
                            (function (e) {
                                let { application: t, channelId: n } = e;
                                return null != (0, h4.Ay)({ application: t, channelId: n }) ? h5.KX : h5.SY;
                            })({ application: r, channelId: a }),
                        ),
                    );
                } catch (e) {
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, `Invalid URL: ${n}`);
                }
            },
        },
        [P.e$_.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => hH(e),
            scope: { [tR.sm.ANY]: [tR.VH] },
            handler(e) {
                let { socket: t } = e;
                (0, hT.lG)(t.transport);
                let i = (0, hT.D2)(t.application);
                if (!h9.has(i))
                    throw new hU.A(
                        { errorCode: P.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                {
                    let { openUserSettings: e } = n(858897);
                    e(e5.X.CONNECTIONS_PANEL);
                }
            },
        },
        [P.e$_.SHARE_LINK]: hw(P.e$_.SHARE_LINK, {
            scope: { [tR.sm.ANY]: [tR.VH] },
            handler(e) {
                let {
                    socket: t,
                    args: { custom_id: i, message: r, link_id: a },
                } = e;
                (0, hT.lG)(t.transport);
                let l = (0, hT.D2)(t.application);
                if (null == l) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
                if (!(0, hx.n)(t.application, P.gfo.EMBEDDED))
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "This application cannot access this API");
                return new Promise((e) => {
                    !(function (e) {
                        let { applicationId: t, customId: i, linkId: r, message: a, onShare: l } = e,
                            s = lP.A.getApplication(t);
                        if (null == s) return l(!1, !1);
                        let o = null != (0, h4.LU)({ applicationId: s.id }) ? h5.KX : h5.SY,
                            d = !1;
                        function u(e) {
                            l(e, d);
                        }
                        function c() {
                            d = !0;
                        }
                        (0, f.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("19666").then(n.bind(n, 803977));
                                return (n) =>
                                    (0, p.jsx)(e, {
                                        applicationId: t,
                                        customId: i,
                                        linkId: r,
                                        message: a,
                                        onCopyLink: c,
                                        onShare: u,
                                        ...n,
                                    });
                            },
                            {
                                modalKey: "activity-share-moment-modal",
                                contextKey: o,
                                onCloseCallback: () => {
                                    l(!1, d);
                                },
                            },
                        );
                    })({
                        applicationId: l,
                        customId: i,
                        linkId: a,
                        message: r,
                        onShare: (t, n) => {
                            e({ success: n || t, didCopyLink: n, didSendMessage: t });
                        },
                    });
                });
            },
        }),
    },
    Et = new uY.A(P.meB),
    En = {
        [P.e$_.CAPTURE_LOG]: {
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({ level: e.string().max(10).required(), message: e.string().max(1e3).required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { level: n, message: i },
                } = e;
                (0, hT.lG)(t.transport);
                let r = t.application.id,
                    a = `${r} - ${i}`;
                switch (n) {
                    case "log":
                        Et.log(a);
                        break;
                    case "warn":
                        Et.warn(a);
                        break;
                    case "debug":
                        Et.verbose(a);
                        break;
                    case "info":
                        Et.info(a);
                        break;
                    case "error":
                        Et.error(a);
                }
            },
        },
    },
    Ei = {
        [P.e$_.GET_NETWORKING_CONFIG]: {
            scope: tR.hj,
            handler: () =>
                Promise.all([
                    aO.Bo.get({
                        url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
                        retries: 3,
                        rejectWithError: !1,
                    }).then((e) => {
                        let {
                            body: { address: t },
                        } = e;
                        return t;
                    }),
                    aO.Bo.post({
                        url: P.Rsh.NETWORKING_TOKEN,
                        retries: 3,
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    }).then((e) => {
                        let {
                            body: { token: t },
                        } = e;
                        return t;
                    }),
                ]).then((e) => {
                    let [t, n] = e;
                    return { address: t, token: n };
                }),
        },
        [P.e$_.NETWORKING_SYSTEM_METRICS]: {
            scope: tR.hj,
            handler(e) {
                let { socket: t, args: n } = e;
                (n.application_id = t.application.id), ec.default.track(P.HAw.NETWORKING_SYSTEM_METRICS, n);
            },
        },
        [P.e$_.NETWORKING_PEER_METRICS]: {
            scope: tR.hj,
            handler(e) {
                let { socket: t, args: n } = e;
                (n.application_id = t.application.id), ec.default.track(P.HAw.NETWORKING_PEER_METRICS, n);
            },
        },
        [P.e$_.NETWORKING_CREATE_TOKEN]: {
            scope: tR.hj,
            handler: () =>
                aO.Bo.post({ url: P.Rsh.NETWORKING_TOKEN, retries: 1, oldFormErrors: !0, rejectWithError: !1 }).then(
                    (e) => e.body,
                ),
        },
    },
    Er = { [rh.e$.GET_PLATFORM_BEHAVIORS]: { handler: () => ({ iosKeyboardResizesView: !0 }) } };
var Ea = n(77468),
    El = n(573648),
    Es = n(773952),
    Eo = n(30370);
let Ed = new Set([hy.AM, hy.eK]),
    Eu = {
        [rh.e$.GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [tR.sm.ANY]: [tR.VH] },
            validation: (e) =>
                hH(e).required().keys({ provider: e.string().required(), connection_redirect: e.string() }),
            handler: (e) => {
                let {
                    socket: t,
                    args: { provider: n, connection_redirect: i },
                } = e;
                (0, hT.lG)(t.transport);
                let r = (0, hT.D2)(t.application),
                    a = El.A.get(n);
                if (null == a)
                    throw new hU.A({ errorCode: rh.Lw.INVALID_PROVIDER }, `Platform not found for provider "${n}"`);
                if (n === P.fg2.AMAZON_MUSIC) {
                    if (!Ed.has(r))
                        throw new hU.A(
                            { errorCode: rh.Lw.UNAUTHORIZED_FOR_APPLICATION },
                            "Command not available for this application",
                        );
                } else
                    throw new hU.A(
                        { errorCode: rh.Lw.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                return new Promise(async (e, t) => {
                    let r = Eo.A.getAccount(null, n);
                    if (null == r) {
                        function l(t) {
                            if (null == a) return;
                            let n = (t.accounts ?? []).find((e) => e.type === a.type);
                            null != n && (e({ access_token: n.access_token }), o());
                        }
                        function s() {
                            t(new hU.A({ errorCode: rh.Lw.OAUTH2_ERROR }, `OAuth2 setup for "${n}" failed`)), o();
                        }
                        function o() {
                            X.h.unsubscribe("USER_CONNECTIONS_UPDATE", l),
                                nl._.unsubscribe(P.jej.CONNECTIONS_CALLBACK_ERROR, s);
                        }
                        X.h.subscribe("USER_CONNECTIONS_UPDATE", l),
                            nl._.subscribe(P.jej.CONNECTIONS_CALLBACK_ERROR, s),
                            (0, Es.A)({ platformType: a.type, location: P.ThZ.ACTIVITY_RPC, successRedirect: i });
                    } else
                        try {
                            let t = await Ea.A.refreshAccessToken(a.type, r.id);
                            if (null == t)
                                throw new hU.A(
                                    { errorCode: rh.Lw.OAUTH2_ERROR },
                                    "Refreshing access token did not return a new access token",
                                );
                            e({ access_token: t });
                        } catch (e) {
                            t(e);
                        }
                });
            },
        },
        [rh.e$.MAYBE_GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [tR.sm.ANY]: [tR.VH] },
            validation: (e) => hH(e).required().keys({ provider: e.string().required() }),
            handler: async (e) => {
                let {
                    socket: t,
                    args: { provider: n },
                } = e;
                (0, hT.lG)(t.transport);
                let i = (0, hT.D2)(t.application),
                    r = El.A.get(n);
                if (null == r)
                    throw new hU.A({ errorCode: rh.Lw.INVALID_PROVIDER }, `Platform not found for provider "${n}"`);
                if (n === P.fg2.AMAZON_MUSIC) {
                    if (!Ed.has(i))
                        throw new hU.A(
                            { errorCode: rh.Lw.UNAUTHORIZED_FOR_APPLICATION },
                            "Command not available for this application",
                        );
                } else
                    throw new hU.A(
                        { errorCode: rh.Lw.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                let a = Eo.A.getAccount(null, n);
                if (null == a) throw new hU.A({ errorCode: rh.Lw.NO_CONNECTION_FOUND }, "No connection found");
                let l = await Ea.A.refreshAccessToken(r.type, a.id);
                if (null == l)
                    throw new hU.A(
                        { errorCode: rh.Lw.OAUTH2_ERROR },
                        "Refreshing access token did not return a new access token",
                    );
                return { access_token: l };
            },
        },
    };
var Ec = n(639214);
let E_ = {
        [P.e$_.GET_QUEST_ENROLLMENT_STATUS]: {
            scope: hb.F.IDENTIFY,
            handler(e) {
                let {
                    socket: t,
                    args: { quest_id: n },
                } = e;
                (0, hT.lG)(t.transport);
                let i = (0, hT.D2)(t.application),
                    r = hI.A.getQuest(n),
                    a = (0, hg.TP)(r);
                if (null == r || null == a || a !== i)
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, `Quest not found: ${n}`);
                return {
                    quest_id: n,
                    is_enrolled: r.userStatus?.enrolledAt != null,
                    enrolled_at: r.userStatus?.enrolledAt ?? null,
                };
            },
        },
        [P.e$_.QUEST_START_TIMER]: {
            scope: hb.F.IDENTIFY,
            handler(e) {
                let {
                    socket: t,
                    args: { quest_id: n },
                } = e;
                (0, hT.lG)(t.transport);
                let i = (0, hT.D2)(t.application),
                    r = hI.A.getQuest(n),
                    a = (0, hg.vS)(r);
                if (null == r || null == a || a !== i)
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, `Quest not found: ${n}`);
                if (r.userStatus?.enrolledAt == null)
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "User is not enrolled in quest");
                return (
                    ec.default.track(P.HAw.RPC_QUEST_START_TIMER_CALLED, { application_id: i, quest_id: n }),
                    X.h.dispatch({ type: "QUEST_APPLICATION_START_TIMER", questId: n, applicationId: i }),
                    { success: !0 }
                );
            },
        },
        [P.e$_.GET_QUESTS]: {
            scope: hb.F.IDENTIFY,
            handler(e) {
                let { socket: t } = e;
                (0, hT.lG)(t.transport);
                let n = (0, hT.D2)(t.application);
                return {
                    quests: (0, Ec.jm)(hI.A.quests, n, !0)
                        .map((e) => ({
                            quest_id: e.id,
                            enrolled_at: e.userStatus?.enrolledAt ?? null,
                            external_cta_url: e.config.ctaConfig.link,
                        }))
                        .sort((e, t) =>
                            null == e.enrolled_at && null == t.enrolled_at
                                ? 0
                                : null == e.enrolled_at
                                  ? 1
                                  : null == t.enrolled_at
                                    ? -1
                                    : new Date(e.enrolled_at).getTime() - new Date(t.enrolled_at).getTime(),
                        ),
                };
            },
        },
    },
    EA = {
        [P.e$_.GET_RELATIONSHIPS]: hw(P.e$_.GET_RELATIONSHIPS, {
            scope: { [tR.sm.ANY]: [hb.F.RELATIONSHIPS_READ] },
            handler(e) {
                if (uX.zy(uX.iu(e.socket.application.flags ?? 0), uX.iu(P.gfo.DISABLE_RELATIONSHIPS_ACCESS)))
                    throw new hU.A({ errorCode: P.Lw6.INVALID_PERMISSIONS }, "Missing Permissions");
                let t = [];
                for (let [n, i] of eQ.A.getMutableRelationships().entries()) {
                    if (i === P.eA$.NONE) continue;
                    let r = ty.default.getUser(n);
                    if (null == r) continue;
                    let a = (0, hT.Gc)(i, r);
                    t.push((0, hT.LP)(a, e.socket.application.id));
                }
                return { relationships: t };
            },
        }),
    };
var Eh = n(599026),
    EE = n(182892),
    Ep = n(375802),
    Em = n(970928);
let EI = ["1402418171662569542"],
    Eg = {
        [P.e$_.SET_ACTIVITY]: {
            scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.RPC_ACTIVITIES_WRITE, tR.hj] },
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({
                        pid: e.number().min(0),
                        activity: hH(e)
                            .keys({
                                name: e.string().min(1).max(128),
                                state: e.string().min(2).max(128),
                                state_url: e.string().uri().min(1).max(256),
                                details: e.string().min(2).max(128),
                                details_url: e.string().uri().min(1).max(256),
                                timestamps: hH(e).keys({ start: e.number().min(1), end: e.number().min(1) }),
                                assets: hH(e).keys({
                                    large_image: e.string().min(1).max(300),
                                    large_text: e.string().min(2).max(128),
                                    large_url: e.string().uri().min(1).max(256),
                                    small_image: e.string().min(1).max(300),
                                    small_text: e.string().min(2).max(128),
                                    small_url: e.string().uri().min(1).max(256),
                                    invite_cover_image: e.string().min(1).max(300),
                                }),
                                party: hH(e).keys({
                                    id: e.string().min(2).max(128),
                                    size: e.array().items(e.number().min(0)).length(2),
                                    privacy: e.number().default(P.KIY.PRIVATE).valid([P.KIY.PRIVATE, P.KIY.PUBLIC]),
                                }),
                                secrets: hH(e).keys({
                                    match: e.string().min(2).max(128),
                                    join: e.string().min(2).max(128),
                                    spectate: e.string().min(2).max(128),
                                }),
                                buttons: e
                                    .array()
                                    .items(
                                        hH(e).keys({
                                            label: e.string().min(1).max(32).required(),
                                            url: e.string().uri().min(1).max(512).required(),
                                        }),
                                    )
                                    .min(1)
                                    .max(2),
                                instance: e.boolean(),
                                supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(10),
                                type: e
                                    .number()
                                    .default(P.$pd.PLAYING)
                                    .valid(P.$pd.PLAYING, P.$pd.LISTENING, P.$pd.WATCHING, P.$pd.COMPETING),
                                status_display_type: e.number().optional().valid(Eh.A.NAME, Eh.A.STATE, Eh.A.DETAILS),
                            })
                            .allow(null),
                    }),
            handler(e) {
                let t,
                    {
                        socket: n,
                        args: { pid: i, activity: r },
                        isSocketConnected: a,
                    } = e;
                if (![tR.z4.IPC, tR.z4.WEBSOCKET, tR.z4.POST_MESSAGE].includes(n.transport))
                    throw new hU.A(
                        { errorCode: P.Lw6.INVALID_COMMAND },
                        `command not available from "${n.transport}" transport`,
                    );
                if (null == i && tR.z4.IPC === n.transport)
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "nonzero pid required");
                if (null == r)
                    return (
                        X.h.dispatch({ type: "LOCAL_ACTIVITY_UPDATE", socketId: n.id, pid: i, activity: r }),
                        Promise.resolve(r)
                    );
                let l = {};
                r.name || (r.name = n.application.name);
                let s = n.application.id;
                r.application_id = s;
                let o = n.transport === tR.z4.POST_MESSAGE;
                r.platform = o ? P.yTV.EMBEDDED : P.yTV.DESKTOP;
                let d = lP.A.getApplication(s ?? void 0),
                    u = r.instance ?? !1,
                    c = r.party?.privacy;
                delete r.instance, delete r.party?.privacy;
                let _ = (0, EE.E)(r, u, o, null != d && (0, Ep.x)(d) && o, c);
                _ > 0 && (r.flags = _);
                let { assets: A, party: h, secrets: E, timestamps: p, buttons: m, type: I } = r;
                if ((null == I && (r.type = P.$pd.PLAYING), null != E)) {
                    let e = eG()
                        .values(E)
                        .filter((e) => !!e);
                    if (null != h && eG().intersection(e, [h.id]).length > 0 && !EI.includes(n.application.id))
                        throw new hU.A(
                            { errorCode: P.Lw6.INVALID_ACTIVITY_SECRET },
                            "secrets cannot match the party id",
                        );
                    if (eG().uniq(e).length < e.length)
                        throw new hU.A({ errorCode: P.Lw6.INVALID_ACTIVITY_SECRET }, "secrets must be unique");
                    if (null != m)
                        throw new hU.A(
                            { errorCode: P.Lw6.INVALID_ACTIVITY_SECRET },
                            "secrets cannot currently be sent with buttons",
                        );
                }
                if (
                    (null != m && ((l.button_urls = m.map((e) => e.url)), (r.buttons = m.map((e) => e.label))),
                    (r.metadata = l),
                    null != p)
                )
                    for (let e of Object.keys(p))
                        Date.now().toString().length - p[e].toString().length > 2 &&
                            (p[e] = Math.floor(p[e] * e_.A.Millis.SECOND));
                if (null == A) t = Promise.resolve([]);
                else {
                    if (null == n.application || null == n.application.id) throw Error();
                    t = (0, Em.RG)(n.application.id, [A.large_image, A.small_image, A.invite_cover_image]);
                }
                return t.then((e) => {
                    let [t, l, s] = e;
                    if (
                        (null != A &&
                            (null != t ? (A.large_image = t) : delete A.large_image,
                            null != l ? (A.small_image = l) : delete A.small_image,
                            null != s ? (A.invite_cover_image = s) : delete A.invite_cover_image),
                        !a())
                    )
                        return;
                    X.h.dispatch({
                        type: "LOCAL_ACTIVITY_UPDATE",
                        socketId: n.id,
                        pid: i,
                        activity: r,
                        partyPrivacy: c,
                    });
                    let { secrets: o, party: d } = r,
                        u = {
                            application_id: n.application.id,
                            type: r.type,
                            name: r.name,
                            status_display_type: r.status_display_type,
                            details: r.details ?? "",
                            state: r.state ?? "",
                            has_urls:
                                null != r.state_url ||
                                null != r.details_url ||
                                r.assets?.large_url != null ||
                                r.assets?.small_url != null,
                        };
                    return (
                        null != o && ((u.has_match_secret = !!o.match), (u.has_join_secret = !!o.join)),
                        null != A && (u.has_images = !!(A.large_image || A.small_image || A.invite_cover_image)),
                        null != d &&
                            ((u.party_max = null != d.size && d.size[1] > 0 ? d.size[1] : void 0), (u.party_id = d.id)),
                        ec.default.track(P.HAw.ACTIVITY_UPDATED, u),
                        r
                    );
                });
            },
        },
    },
    EC = {
        [rh.e$.SET_ORIENTATION_LOCK_STATE]: {
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({
                        lock_state: e.number().valid(hy.N7.UNLOCKED, hy.N7.PORTRAIT, hy.N7.LANDSCAPE).required(),
                        picture_in_picture_lock_state: e
                            .number()
                            .valid(hy.N7.UNLOCKED, hy.N7.PORTRAIT, hy.N7.LANDSCAPE)
                            .allow(null)
                            .optional(),
                        grid_lock_state: e
                            .number()
                            .valid(hy.N7.UNLOCKED, hy.N7.PORTRAIT, hy.N7.LANDSCAPE)
                            .allow(null)
                            .optional(),
                    }),
            handler(e) {
                let {
                        socket: t,
                        args: { lock_state: n, picture_in_picture_lock_state: i, grid_lock_state: r },
                    } = e,
                    a = t.application.id;
                if (null != a)
                    X.h.dispatch({
                        type: "FRAME_SET_ORIENTATION_LOCK_STATE",
                        applicationId: a,
                        lockState: n,
                        pictureInPictureLockState: i,
                    }),
                        X.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
                            applicationId: a,
                            lockState: n,
                            pictureInPictureLockState: i,
                            gridLockState: r,
                        });
                else throw new hU.A({ errorCode: rh.Lw.INVALID_COMMAND }, "No application.");
            },
        },
    };
var ET = n(796774),
    Ef = n(209932),
    EN = n(807348),
    ES = n(693806);
let EO = {
    [rh.e$.GET_SOUNDBOARD_SOUNDS]: {
        scope: { [tR.sm.ANY]: [hb.F.RPC, tR.hj] },
        async handler() {
            await (0, ET.E7)();
            let e = Ef.A.getSounds(),
                t = [];
            return e.forEach((e) => e.forEach((e) => t.push((0, EN.A2)(e)))), t;
        },
    },
    [rh.e$.PLAY_SOUNDBOARD_SOUND]: {
        scope: { [tR.sm.ALL]: [hb.F.RPC, hb.F.RPC_VOICE_WRITE] },
        validation: (e) => hH(e).required().keys({ guild_id: e.string(), sound_id: e.string() }),
        async handler(e) {
            let {
                args: { guild_id: t, sound_id: n },
            } = e;
            await (0, ET.E7)();
            let i = ty.default.getCurrentUser(),
                r = Ef.A.getSound(t, n),
                a = (0, ES.A)(),
                l = null != r && null != i && (0, oJ.Ir)(i, r, a);
            if (null == a) throw new hU.A({ errorCode: rh.Lw.INVALID_CHANNEL }, "Invalid Channel.");
            if (l)
                if ((0, oq.Ay)(a)) null != r && (0, oJ.Ak)(r, a.id, [eC.A.RPC]);
                else throw new hU.A({ errorCode: rh.Lw.INVALID_PERMISSIONS }, "Invalid Permissions.");
            else throw new hU.A({ errorCode: rh.Lw.INVALID_SOUND }, "Invalid Sound.");
        },
    },
};
var EL = n(339048),
    Ey = n(830382),
    Eb = n(800342);
function Ev(e) {
    if (tR.z4.IPC !== e && tR.z4.POST_MESSAGE !== e)
        throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "Invalid transport.");
}
async function ED(e, t) {
    let n = t.filter((e) => e.type === P.Puh.SUBSCRIPTION_GROUP),
        i = await Promise.all(n.map(async (t) => await (0, lw.vz)(e, t.id))),
        r = [];
    return (
        i.forEach((e) => {
            if (null == e) return null;
            let n = e.subscription_listings;
            if (null == n) return null;
            let i = [];
            n.forEach((e) => {
                e.subscription_plans.forEach((n) => {
                    let r = n?.price,
                        a = t.find((e) => e.id === n.sku_id);
                    if (null == a) return;
                    let l = {
                        id: n.sku_id,
                        name: a.name,
                        type: a.type,
                        price: { amount: r, currency: P.Yri.USD },
                        application_id: e.application_id,
                        flags: e.sku_flags,
                        release_date: a.release_date ?? null,
                    };
                    i.push(l);
                });
            }),
                i.filter((e) => e?.price != null).forEach((e) => r.push(e));
        }),
        r
    );
}
async function ER(e) {
    let { socket: t } = e;
    Ev(t.transport);
    let n = t.application.id;
    if (null == n) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
    if ((0, hV.F)(n)) {
        let e = await Ey.O1(n, !1),
            t = await ED(n, e);
        return [...e.filter((e) => null != e.price), ...t];
    }
    let i = await Eb.JI(n);
    return [
        ...i
            .filter((e) => e.sku.type !== P.Puh.SUBSCRIPTION_GROUP)
            .map((e) => e.sku)
            .filter((e) => null != e.price),
        ...(await ED(
            n,
            i.map((e) => e.sku),
        )),
    ];
}
function EM(e) {
    let { socket: t } = e;
    Ev(t.transport);
    let n = t.application.id;
    if (null == n) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
    return EL.LM(n);
}
let EP = {
    [P.e$_.GET_SKUS]: { [tR.sm.ANY]: [tR.VH, tR.hj], handler: ER },
    [P.e$_.GET_ENTITLEMENTS]: { [tR.sm.ANY]: [tR.VH, tR.hj], handler: EM },
    [P.e$_.GET_SKUS_EMBEDDED]: { [tR.sm.ANY]: [tR.VH, tR.hj], handler: async (e) => ({ skus: await ER(e) }) },
    [P.e$_.GET_ENTITLEMENTS_EMBEDDED]: {
        [tR.sm.ANY]: [tR.VH, tR.hj],
        handler: async (e) => ({ entitlements: await EM(e) }),
    },
};
n(142703);
var Ew = n(722306);
let Ex = {
    [P.e$_.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: i, args: r } = e,
                a = t.events[i];
            if (null == a) throw new hU.A({ errorCode: P.Lw6.INVALID_EVENT }, `Invalid event: ${i}`);
            if (!(0, Ew.A)(n.authorization.scopes, a.scope))
                throw new hU.A({ errorCode: P.Lw6.INVALID_PERMISSIONS }, "Not authenticated or invalid scope");
            if (
                (ec.default.track(P.HAw.RPC_SUBSCRIPTION_REQUESTED, {
                    event: i,
                    scope: "object" == typeof a.scope ? JSON.stringify(a.scope) : a.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString(),
                }),
                null != a.validation)
            ) {
                let e = await t.getJoi();
                if (null != e.validate(r, a.validation(e), { convert: !1 }).error)
                    throw new hU.A({ errorCode: P.Lw6.INVALID_PAYLOAD }, "Invalid subscription parameters provided");
            }
            let l = a.handler({ args: r, socket: n }),
                s = (function (e, t, n) {
                    switch (t) {
                        case P.ZE4.ACTIVITY_PIP_MODE_UPDATE: {
                            let t = e.application?.id,
                                n = null != t ? og.Ay.getLayoutModeForApp(t) : null;
                            return null != n ? { is_pip_mode: n !== hy.bN.FOCUSED } : null;
                        }
                        case P.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE: {
                            let t = e.application?.id,
                                n = null != t ? og.Ay.getLayoutModeForApp(t) : null;
                            return null != n ? { layout_mode: n } : null;
                        }
                        case P.ZE4.FRAME_LAYOUT_MODE_UPDATE: {
                            let t = null != e.application?.id ? tZ.A.getConnectedFrame()?.layoutMode : null;
                            return null != t ? { layout_mode: t } : null;
                        }
                        case P.ZE4.THERMAL_STATE_UPDATE: {
                            let e = hm();
                            if (e === hp.UNHANDLED) return null;
                            return { thermal_state: e };
                        }
                        case P.ZE4.ORIENTATION_UPDATE:
                            return null;
                        case P.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
                            return hO();
                        case P.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE: {
                            let { quest_id: t } = n;
                            if (!t) return null;
                            let i = hI.A.getQuest(t),
                                r = (0, hg.TP)(i);
                            if (null == i || null == r || r !== e.application?.id) return null;
                            return {
                                quest_id: t,
                                is_enrolled: i.userStatus?.enrolledAt != null,
                                enrolled_at: i.userStatus?.enrolledAt ?? null,
                            };
                        }
                        default:
                            return null;
                    }
                })(n, i, r);
            return new Promise((e) => {
                setImmediate(() => {
                    t.addSubscription(n, i, r, l),
                        null != s && t.dispatchToSubscriptions(i, (e) => e.socket.id === n.id, s);
                }),
                    e({ evt: i });
            });
        },
    },
    [P.e$_.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: i, args: r } = e;
            if (null == t.events[i]) throw new hU.A({ errorCode: P.Lw6.INVALID_EVENT }, `Invalid event: ${i}`);
            return t.removeSubscription(n, i, r), { evt: i };
        },
    },
};
var EU = n(773669);
let EG = { [P.e$_.USER_SETTINGS_GET_LOCALE]: { scope: hb.F.IDENTIFY, handler: () => ({ locale: EU.default.locale }) } },
    Ek = {
        [P.e$_.GET_USER]: hw(P.e$_.GET_USER, {
            scope: { [tR.sm.ANY]: [tR.W_, tR.hj] },
            handler(e) {
                let {
                        args: { id: t },
                    } = e,
                    n = ty.default.getUser(t);
                return null == n ? null : (0, hS.A)(n);
            },
        }),
    },
    Ej = {
        ...hB,
        ...hF,
        ...hW,
        ...hz,
        ...hq,
        ...hX,
        ...h2,
        ...Ee,
        ...En,
        ...Ei,
        ...Eu,
        ...EA,
        ...Eg,
        ...EC,
        ...EP,
        ...Ex,
        ...Ek,
        ...EG,
        ...Er,
        ...EO,
        ...hk,
        ...E_,
    };
var EV = n(52133),
    EH = n(821956);
let EB = (e) => hH(e).required().keys({ channel_id: e.string().required() });
function EF(e) {
    let {
            args: { channel_id: t },
            socket: n,
        } = e,
        i = rl.A.getChannel(t);
    if (null == i || !(0, hT.B_)(i, n.application.id, n.authorization.scopes))
        throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
    if ((0, ei.$v)(i)) throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, `Invalid nsfw channel id: ${i.id}`);
}
let EY = (e) => hH(e).keys({ channel_id: e.string().allow(null) });
function EK(e) {
    let {
        args: { channel_id: t },
    } = e;
    if (null != t && null == rl.A.getChannel(t))
        throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
}
let EW = {
    [P.ZE4.GUILD_STATUS]: {
        scope: hb.F.RPC,
        validation: (e) => hH(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            if (null == nW.A.getGuild(t)) throw new hU.A({ errorCode: P.Lw6.INVALID_GUILD }, `Invalid guild id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = nW.A.getGuild(t);
                if (null == r) return;
                let a = { guild: { id: r.id, name: r.name, icon_url: (0, ee.Iv)(r, 128) ?? null }, online: 0 };
                return eG().isEqual(n, a) || i(a), a;
            };
        },
    },
    [P.ZE4.VOICE_STATE_CREATE]: {
        scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.RPC_VOICE_READ] },
        validation: (e) => hH(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == rl.A.getChannel(t))
                throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = rl.A.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    l = Object.values(dd.A.getVoiceStatesForChannel(r.id));
                return (
                    n &&
                        eG()
                            .differenceBy(l, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => i((0, hT.qG)(a, r.id, e))),
                    l
                );
            };
        },
    },
    [P.ZE4.VOICE_STATE_DELETE]: {
        scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.RPC_VOICE_READ] },
        validation: (e) => hH(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == rl.A.getChannel(t))
                throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = rl.A.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    l = Object.values(dd.A.getVoiceStatesForChannel(r.id));
                return (
                    eG()
                        .differenceBy(n, l, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => i((0, hT.qG)(a, r.id, e))),
                    l
                );
            };
        },
    },
    [P.ZE4.VOICE_STATE_UPDATE]: {
        scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.RPC_VOICE_READ] },
        validation: (e) => hH(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == rl.A.getChannel(t))
                throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = rl.A.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    l = Object.values(dd.A.getVoiceStatesForChannel(r.id)).map((e) => (0, hT.qG)(a, r.id, e));
                return (
                    eG()
                        .differenceWith(l, n, eG().isEqual)
                        .forEach((e) => i(e)),
                    l
                );
            };
        },
    },
    [P.ZE4.VOICE_CONNECTION_STATUS]: {
        scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.RPC_VOICE_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = {
                    state: (0, hT.SK)(e3.A.getState()),
                    hostname: e3.A.getHostname(),
                    pings: e3.A.getPings(),
                    average_ping: e3.A.getAveragePing(),
                    last_ping: e3.A.getLastPing(),
                };
            return eG().isEqual(i, t) || n(i), i;
        },
    },
    [P.ZE4.MESSAGE_CREATE]: { scope: hb.F.RPC, validation: EB, handler: EF },
    [P.ZE4.MESSAGE_UPDATE]: { scope: hb.F.RPC, validation: EB, handler: EF },
    [P.ZE4.MESSAGE_DELETE]: { scope: hb.F.RPC, validation: EB, handler: EF },
    [P.ZE4.SPEAKING_START]: {
        scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.RPC_VOICE_READ, tR.hj] },
        validation: EY,
        handler: EK,
    },
    [P.ZE4.SPEAKING_STOP]: {
        scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.RPC_VOICE_READ, tR.hj] },
        validation: EY,
        handler: EK,
    },
    [P.ZE4.GUILD_CREATE]: { scope: hb.F.RPC, handler() {} },
    [P.ZE4.CHANNEL_CREATE]: { scope: hb.F.RPC, handler() {} },
    [P.ZE4.GAME_JOIN]: { scope: { [tR.sm.ANY]: [hb.F.RPC, tR.hj] }, handler() {} },
    [P.ZE4.GAME_SPECTATE]: { scope: { [tR.sm.ANY]: [hb.F.RPC, tR.hj] }, handler() {} },
    [P.ZE4.ACTIVITY_JOIN]: { scope: { [tR.sm.ANY]: [hb.F.RPC, tR.VH, tR.hj] }, handler() {} },
    [P.ZE4.ACTIVITY_JOIN_REQUEST]: { scope: { [tR.sm.ANY]: [hb.F.RPC, tR.hj] }, handler() {} },
    [P.ZE4.ACTIVITY_SPECTATE]: { scope: { [tR.sm.ANY]: [hb.F.RPC, tR.VH, tR.hj] }, handler() {} },
    [P.ZE4.ACTIVITY_INVITE]: { scope: { [tR.sm.ANY]: [hb.F.RPC, tR.hj] }, handler() {} },
    [P.ZE4.ACTIVITY_PIP_MODE_UPDATE]: { scope: void 0, handler() {} },
    [P.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE]: { scope: void 0, handler() {} },
    [P.ZE4.FRAME_LAYOUT_MODE_UPDATE]: { scope: void 0, handler() {} },
    [P.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        scope: hL,
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = hO();
            return eG().isEqual(i, t) || n(i), i;
        },
    },
    [P.ZE4.THERMAL_STATE_UPDATE]: { scope: { [tR.sm.ANY]: [tR.VH] }, handler() {} },
    [P.ZE4.ORIENTATION_UPDATE]: { scope: { [tR.sm.ANY]: [tR.VH] }, handler() {} },
    [P.ZE4.VOICE_CHANNEL_SELECT]: { scope: hb.F.RPC, handler() {} },
    [P.ZE4.NOTIFICATION_CREATE]: { scope: { [tR.sm.ALL]: [hb.F.RPC, hb.F.RPC_NOTIFICATIONS_READ] }, handler() {} },
    [P.ZE4.RELATIONSHIP_UPDATE]: {
        scope: hb.F.RELATIONSHIPS_READ,
        handler(e) {
            let { socket: t } = e;
            if (uX.zy(uX.iu(t.application.flags ?? 0), uX.iu(P.gfo.DISABLE_RELATIONSHIPS_ACCESS)))
                throw new hU.A({ errorCode: P.Lw6.INVALID_PERMISSIONS }, "Missing Permissions");
        },
    },
    [P.ZE4.CURRENT_USER_UPDATE]: {
        scope: { [tR.sm.ANY]: [tR.hj, hb.F.IDENTIFY] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { currentUser: ty.default.getCurrentUser() };
            return null == i.currentUser || (null != t && (0, EV.A)(i, t)) || n((0, hS.A)(i.currentUser)), i;
        },
    },
    [P.ZE4.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: { [tR.sm.ALL]: [hb.F.IDENTIFY, hb.F.GUILDS_MEMBERS_READ] },
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = { currentGuildMember: sw.Ay.getSelfMember(t) };
                return (
                    null == r.currentGuildMember ||
                        (null != n && (0, EV.A)(r, n)) ||
                        i(
                            (function (e) {
                                let {
                                    userId: t,
                                    nick: n,
                                    guildId: i,
                                    avatar: r,
                                    avatarDecoration: a,
                                    banner: l,
                                    bio: s,
                                    pronouns: o,
                                    colorString: d,
                                } = e;
                                return {
                                    user_id: t,
                                    nick: n,
                                    guild_id: i,
                                    avatar: r,
                                    avatar_decoration_data: (0, EH.Xq)(a),
                                    banner: l,
                                    bio: s,
                                    pronouns: o,
                                    color_string: d,
                                };
                            })(r.currentGuildMember),
                        ),
                    r
                );
            };
        },
    },
    [P.ZE4.ENTITLEMENT_CREATE]: { scope: { [tR.sm.ANY]: [tR.hj, tR.VH] }, handler() {} },
    [P.ZE4.ENTITLEMENT_DELETE]: { scope: { [tR.sm.ANY]: [tR.hj, tR.VH] }, handler() {} },
    [P.ZE4.SCREENSHARE_STATE_UPDATE]: {
        scope: { [tR.sm.ALL]: [tR.hj, hb.F.RPC_SCREENSHARE_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = ra.A.getStreamerActiveStreamMetadata(),
                r = i?.pid != null ? eN.Ay.getGameForPID(i.pid) : null,
                a = r?.id != null ? lP.A.getApplication(r.id) : null,
                l =
                    null != a
                        ? { name: a.name, id: a.id, icon: a.icon, cover_image: a.coverImage, type: a.type }
                        : null,
                s = i?.sourceName,
                o = {
                    active: null != i,
                    pid: i?.pid ?? null,
                    application: (null != l ?? null != s) ? { name: s } : null,
                };
            return eG().isEqual(o, t) || n(o), o;
        },
    },
    [P.ZE4.VIDEO_STATE_UPDATE]: {
        scope: { [tR.sm.ALL]: [tR.hj, hb.F.RPC_VIDEO_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { active: eO.Ay.isVideoEnabled() };
            return eG().isEqual(i, t) || n(i), i;
        },
    },
    [P.ZE4.AUTHORIZE_REQUEST]: { scope: void 0, handler() {} },
};
var Ez = n(289919);
let Eq = {
        [P.ZE4.OVERLAY_UPDATE]: {
            scope: tR.hj,
            handler(e) {
                let {
                    args: { pid: t },
                    socket: n,
                } = e;
                if ("number" != typeof t || t < 10) throw new hU.A({ errorCode: P.Lw6.INVALID_EVENT }, "Invalid pid");
                return (e) => {
                    let { prevState: i, dispatch: r } = e,
                        a = Ar.default.enabled,
                        l = !0,
                        s = n.application.id;
                    if (null != s) {
                        let e = _T.A.getActiveLibraryApplication(s);
                        null != e && (a = a && e.isOverlayEnabled()), (l = ce.default.isLocked(t));
                    }
                    let o = { enabled: a, locked: l };
                    return eG().isEqual(o, i) || r(o), o;
                };
            },
        },
    },
    E$ = {
        [P.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE]: {
            scope: hb.F.IDENTIFY,
            validation: (e) => hH(e).required().keys({ quest_id: e.string().required() }),
            handler: function (e) {
                let {
                        args: { quest_id: t },
                        socket: n,
                    } = e,
                    i = hI.A.getQuest(t),
                    r = (0, hg.TP)(i);
                if (null == i || null == r || r !== n.application.id)
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, `Quest not found: ${t}`);
            },
        },
    };
var EX = n(546983);
let EZ =
    ((_ = EX.l6),
    (A = EX.Au),
    {
        [P.ZE4.VOICE_SETTINGS_UPDATE]: {
            scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.RPC_VOICE_READ] },
            handler: () => (e) => {
                let { prevState: t, dispatch: n } = e,
                    i = _();
                return eG().isEqual(i, t) || n(i), i;
            },
        },
        [P.ZE4.VOICE_SETTINGS_UPDATE_2]: {
            scope: tR.hj,
            handler(e) {
                let { socket: t } = e;
                return (e) => {
                    let { prevState: n, dispatch: i } = e;
                    if (null == t.application.id) return n;
                    let r = A(t.application.id);
                    return eG().isEqual(r, n) || i(r), r;
                };
            },
        },
    });
var EQ = n(308368),
    EJ = n(298990),
    E0 = n(334738),
    E1 = n(181658);
function E2(e, t) {
    return null != e.application_id && null == t.getApplicationActivity(e.application_id, !1);
}
var E6 = n(293588),
    E5 = n(383233),
    E4 = n(375492),
    E3 = n(998218),
    E8 = n(475815);
async function E7(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        a = E4.A.getApplicationActivity(t);
    if (null == a || null == a.secrets || !(0, hT.px)(i, a.party, a.secrets))
        throw new hU.A(
            { errorCode: P.Lw6.NO_ELIGIBLE_ACTIVITY },
            "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
        );
    let l = E2(a, u3.A);
    if (l) {
        let { lock: t } = (0, EX.d5)(e);
        return (0, EJ.qf)(a, l).then(() => {
            throw (
                (t(),
                new hU.A(
                    { errorCode: P.Lw6.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure user does have have privacy enabled.",
                ))
            );
        });
    }
    await EQ.A.sendActivityInviteUser({ userId: n, type: i, activity: a, content: r, location: "In-Game Invite" });
}
let E9 = {
    [P.e$_.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: { [tR.sm.ANY]: [hb.F.RPC, tR.hj] },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: i },
                } = e,
                r = t.application.id;
            if (null == r) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
            return E7(i, r, n, P.xL.JOIN);
        },
    },
    [P.e$_.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: { [tR.sm.ANY]: [hb.F.RPC, tR.hj] },
        handler(e) {
            let {
                    args: { user_id: t },
                } = e,
                n = rl.A.getDMFromUserId(t);
            null != n &&
                (0, E0.ack)(
                    n,
                    {
                        section: P.JJy.CLOSE_ACTIVITY_JOIN_REQUEST_RPC_COMMAND,
                        object: P.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                        objectType: P.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                );
        },
    },
    [P.e$_.ACTIVITY_INVITE_USER]: {
        scope: { [tR.sm.ANY]: [hb.F.RPC, tR.hj] },
        validation: (e) =>
            hH(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([P.xL.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, content: r, pid: a },
                } = e,
                l = t.application.id;
            if (null == l) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
            return E7(a, l, i, n, r);
        },
    },
    [P.e$_.ACCEPT_ACTIVITY_INVITE]: {
        scope: { [tR.sm.ANY]: [hb.F.RPC, tR.hj] },
        validation: (e) =>
            hH(e)
                .required()
                .keys({
                    type: e.number().required().valid([P.xL.JOIN]),
                    user_id: e.string().required(),
                    session_id: e.string().required(),
                    channel_id: e.string().required(),
                    message_id: e.string().required(),
                    application_id: e.string().optional(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, session_id: r, channel_id: a, message_id: l, application_id: s },
                } = e,
                o = t.transport === tR.z4.IPC ? (s ?? t.application.id) : t.application.id;
            if (null == o) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
            let d = Promise.resolve(!1);
            return (
                n === P.xL.JOIN &&
                    (d = uw.Ay.join({ userId: i, sessionId: r, applicationId: o, channelId: a, messageId: l })),
                d.then((e) => {
                    if (!e) throw new hU.A({ errorCode: P.Lw6.INVALID_INVITE }, "Invite is expired or invalid.");
                })
            );
        },
    },
    [P.e$_.OPEN_INVITE_DIALOG]: {
        scope: { [tR.sm.ANY]: [hb.F.RPC, tR.hj, tR.VH] },
        handler(e) {
            let { socket: t } = e,
                i = t.application;
            if (null == i.id) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
            let { channel: r, guild: a, frame: l } = h1(),
                s = (0, h4.Ay)({ application: t.application, channelId: r?.id }),
                o = null != s ? eS.A.getWindow(s) : void 0;
            o?.closed && (o = void 0);
            let d = null != o ? P.BRT.POPOUT : P.BRT.APP;
            if (((0, E8.sP)({}, o?.document), null != l)) {
                if (l.applicationId !== i.id)
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "Application is not currently mounted.");
                let e = E4.A.getApplicationActivity(i.id);
                if (null != e) (0, EJ.qf)(e, !1, d);
                else
                    throw new hU.A(
                        { errorCode: P.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity was set using setActivity.",
                    );
            } else
                (0, f.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("28136"), n.e("22547"), n.e("42738")]).then(
                            n.bind(n, 1310),
                        );
                        return (t) =>
                            (0, p.jsx)(e, {
                                ...t,
                                guild: a,
                                channel: r,
                                applicationId: i.id,
                                analyticsLocation: P.ThZ.ACTIVITY_RPC,
                                source: P.PE1.ACTIVITY_INVITE,
                            });
                    },
                    { contextKey: d === P.BRT.POPOUT ? h5.KX : h5.SY },
                );
        },
    },
    [P.e$_.INITIATE_IMAGE_UPLOAD]: hw(P.e$_.INITIATE_IMAGE_UPLOAD, {
        scope: { [tR.sm.ANY]: [hb.F.RPC, tR.hj, tR.VH] },
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
            let i = hG()?.id;
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n;
                    if ((0, h6.f)()) n = eS.A.getWindow(P.MLl.ACTIVITY_POPOUT);
                    else {
                        let e = eL.A.getLastFocusedWindowId();
                        n = null == e ? null : (0, oK.Iy)(e)?.renderWindow;
                    }
                    if (null == n) throw new hU.A({ errorCode: P.Lw6.UNKNOWN_ERROR }, "No valid window found");
                    let i = n.document.createElement("input");
                    (i.style.display = "none"),
                        (i.type = "file"),
                        (i.accept = "image/jpeg, image/jpg, image/png, image/gif");
                    let r = () => {
                        (null == i.files || 0 === i.files.length) && t(),
                            n.document.body.removeEventListener("focus", r, !0),
                            setTimeout(() => {
                                n.document.body.removeChild(i);
                            }, 1e3);
                    };
                    i.addEventListener("change", () => {
                        (0, lt.Vq)(i.files) && e(i.files[0]), r();
                    }),
                        i.addEventListener("cancel", () => {
                            r();
                        }),
                        n.document.body.addEventListener("focus", r, !0),
                        n.document.body.appendChild(i),
                        i.click();
                })(
                    async (r) => {
                        let a = await (0, t5.CS)(n, i, r);
                        (0, lt.Vq)(a) && (0, lt.Vq)(a.url) && !(a instanceof E1.A) ? e({ image_url: a.url }) : t(a);
                    },
                    () => t(Error("Upload canceled")),
                );
            }).catch((e) => {
                throw new hU.A({ errorCode: P.Lw6.UNKNOWN_ERROR }, e?.message ?? "Failed to upload image");
            });
        },
    }),
    [P.e$_.OPEN_SHARE_MOMENT_DIALOG]: hw(P.e$_.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [tR.sm.ANY]: [tR.VH] },
        handler(e) {
            let {
                socket: t,
                args: { mediaUrl: i },
            } = e;
            (0, hT.lG)(t.transport);
            let r = t.application.id;
            if (null == r) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
            if (!(0, hx.n)(t.application, P.gfo.EMBEDDED))
                throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let a = hG();
            if (!E3.A.isDiscordCdnUrl(i))
                throw new hU.A({ errorCode: P.Lw6.INVALID_PAYLOAD }, "mediaUrl must be a Discord CDN url");
            !(function (e) {
                let { applicationId: t, channelId: i, mediaUrl: r } = e,
                    a = lP.A.getApplication(t),
                    l = null != (0, h4.Ay)({ application: a, channelId: i }) ? h5.KX : h5.SY;
                (0, f.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("96758"), n.e("50178")]).then(n.bind(n, 190930));
                        return (n) => (0, p.jsx)(e, { applicationId: t, mediaUrl: r, ...n });
                    },
                    { modalKey: "activity-share-moment-modal", contextKey: l },
                );
            })({ applicationId: r, channelId: a?.id, mediaUrl: i });
        },
    }),
    [P.e$_.SHARE_INTERACTION]: hw(P.e$_.SHARE_INTERACTION, {
        scope: { [tR.sm.ANY]: [tR.VH, tR.hj] },
        handler(e) {
            let t,
                {
                    socket: n,
                    args: {
                        command: i,
                        preview_image: r,
                        components: a,
                        require_launch_channel: l,
                        content: s,
                        options: o,
                        pid: d,
                    },
                } = e,
                u = n.application.id;
            if (null == u) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
            if (!hy.mO.includes(u)) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "Unsupported application.");
            if (!(0, hx.n)(n.application, P.gfo.EMBEDDED))
                throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let c = hG();
            if (null == c && l) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No channel found");
            if (null !== r || null !== a || null !== s) {
                let e = [];
                void 0 !== r &&
                    (e = [
                        {
                            id: sU.default.cast(sU.default.fromTimestamp(Date.now())),
                            size: 0,
                            proxy_url: r.url,
                            filename: "preview",
                            url: r.url,
                            height: r.height,
                            width: r.width,
                        },
                    ]),
                    (t = new E5.Ay({
                        id: sU.default.cast(sU.default.fromTimestamp(Date.now())),
                        applicationId: u,
                        content: s,
                        components: a,
                        attachments: e,
                    }));
            }
            return new Promise((e) => {
                let n = !1,
                    r = (0, EX.d5)(d),
                    a = h5.SY;
                (eS.A.getWindowOpen(P.MLl.ACTIVITY_POPOUT) || r.context === P.BRT.POPOUT) && (a = h5.KX),
                    (0, E6.m)({
                        applicationId: u,
                        channel: c,
                        command: { name: i, options: o },
                        requireLaunchChannel: !0 === l,
                        onShareResult: (t) => {
                            n || (n = t), r.lock(), e({ success: n });
                        },
                        previewMessage: t,
                        contextKey: a,
                    });
            });
        },
    }),
};
var pe = n(469778);
let pt = 10 * e_.A.Millis.SECOND,
    pn = {
        [P.e$_.VALIDATE_APPLICATION]: {
            scope: tR.hj,
            handler(e) {
                let { socket: t } = e,
                    i = t.application.id;
                try {
                    var r;
                    let e;
                    if (null == i) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
                    let t = lP.A.getApplication(i);
                    if (null == t) throw new hU.A({ errorCode: P.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    let n = t.primarySkuId;
                    if (null == n) throw new hU.A({ errorCode: P.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    return Promise.race([
                        ((r = t.id),
                        (e = pe.A.isEntitledToSku(ty.default.getCurrentUser(), n, r)),
                        null != e
                            ? Promise.resolve(e)
                            : (0, EL.LM)(r).then(
                                  () => !0 === pe.A.isEntitledToSku(ty.default.getCurrentUser(), n, r),
                              )).then((e) => {
                            if (!e)
                                throw new hU.A(
                                    { errorCode: P.Lw6.INVALID_ENTITLEMENT },
                                    "User does not have entitlement.",
                                );
                        }),
                        (0, eu.BK)(pt).then(() => {
                            throw new hU.A({ errorCode: P.Lw6.INVALID_ENTITLEMENT }, "Timed out fetching entitlement.");
                        }),
                    ]);
                } catch (e) {
                    throw (
                        (e.code === P.Lw6.INVALID_ENTITLEMENT &&
                            (e0.Ay.focus(null, !0),
                            (0, f.openModalLazy)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, p.jsx)(e, { ...t, applicationId: i });
                            })),
                        e)
                    );
                }
            },
        },
        [P.e$_.GET_ENTITLEMENT_TICKET]: {
            scope: tR.hj,
            handler(e) {
                let { socket: t } = e,
                    i = t.application.id;
                if (null == i) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
                return aO.Bo.post({
                    url: P.Rsh.ENTITLEMENT_TICKET(i),
                    body: { test_mode: (0, hV.F)(i) },
                    retries: 3,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                    .then((e) => {
                        let { body: t } = e;
                        return t;
                    })
                    .catch((e) => {
                        throw (
                            (e0.Ay.focus(null, !0),
                            (0, f.openModalLazy)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, p.jsx)(e, { ...t, applicationId: i });
                            }),
                            e)
                        );
                    });
            },
        },
    };
var pi = n(200330),
    pr = n(321987),
    pa = n(595244),
    pl = n(488428),
    ps = n(485845),
    po = n(898467),
    pd = n(224750),
    pu = n(716965),
    pc = n(671523),
    p_ = n(337095),
    pA = n(395671);
let ph = "CachedTokens",
    pE = { "1273616940451102832": new po.A(2, +e_.A.Millis.MINUTE) };
async function pp(e, t, n) {
    let i,
        r,
        a,
        l,
        s,
        {
            client_id: o,
            response_type: d = "code",
            redirect_uri: u,
            code_challenge: c,
            code_challenge_method: _,
            state: A,
            nonce: h,
            scope: E,
            permissions: p,
            guild_id: m,
            channel_id: I,
            prompt: g,
            disable_guild_select: C,
            integration_type: T,
            pid: f,
            signal: N,
            isSocketRpcPrivateScope: S,
        } = e;
    if (N?.aborted) throw new hU.A({ errorCode: P.Lw6.UNKNOWN_ERROR }, "Request aborted");
    if (null == o) throw new hU.A({ errorCode: P.Lw6.OAUTH2_ERROR }, "No Client ID provided");
    if (!S && null != u)
        throw new hU.A(
            { errorCode: P.Lw6.OAUTH2_ERROR },
            "Redirect URI cannot be used in the RPC OAuth2 Authorization flow",
        );
    let O = [];
    if (
        ("string" == typeof E ? (O = E.split(" ").filter((e) => e.length > 0)) : Array.isArray(E) && (O = E),
        null == ty.default.getCurrentUser())
    )
        throw new hU.A({ errorCode: P.Lw6.OAUTH2_ERROR }, "Client is not logged in");
    if (null != T) r = Number(T);
    else {
        let e = (e) => (0, hx.n)(e, P.gfo.EMBEDDED) && e?.integrationTypesConfig?.[ps.b.USER_INSTALL] != null,
            t = lP.A.getApplication(o);
        r = e(t) || e((t = pA.Ay.createFromServer(await (0, p_.TA)(o, N)))) ? ps.b.USER_INSTALL : ps.b.GUILD_INSTALL;
    }
    try {
        [a, { disclosures: l, allAcked: s }] = await Promise.all([
            (0, pu.qY)({
                clientId: o,
                scopes: O,
                responseType: d,
                redirectUri: u,
                codeChallenge: c,
                codeChallengeMethod: _,
                state: A,
                integrationType: r,
                signal: N,
            }),
            (0, pd.vG)(o),
        ]);
    } catch (t) {
        let { body: e } = t;
        throw new hU.A(
            { errorCode: P.Lw6.OAUTH2_ERROR },
            `OAuth2 Authorization Error: ${e?.message || "Unknown Error"}`,
        );
    }
    if (g === pc.l.NONE && null != a && a.authorized && s)
        try {
            return (
                await (0, pu.Gq)({
                    authorize: !0,
                    clientId: o,
                    scopes: O,
                    responseType: d,
                    redirectUri: u,
                    codeChallenge: c,
                    codeChallengeMethod: _,
                    state: A,
                    nonce: h,
                    integrationType: r,
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new hU.A(
                { errorCode: P.Lw6.OAUTH2_ERROR },
                `OAuth2 Authorize Error: ${e?.message || "Unknown Error"}`,
            );
        }
    n?.(a.application, I, f);
    let L = rV.x3;
    try {
        L = uX.iu(p ?? 0);
    } catch (e) {}
    if (
        (null != a.integration_type &&
            Object.values(ps.b).includes(a.integration_type) &&
            (i = new Map()).set(a.integration_type, a),
        null != pE[a.application.id] && (await pE[a.application.id].process(), N?.aborted))
    )
        throw new hU.A({ errorCode: P.Lw6.UNKNOWN_ERROR }, "Request aborted");
    return t({
        clientId: o,
        authorizations: i,
        scopes: O,
        parsedPermissions: L,
        responseType: d,
        redirectUri: u,
        codeChallenge: c,
        codeChallengeMethod: _,
        state: A,
        guildId: m,
        channelId: I,
        prompt: g,
        disableGuildSelect: C,
        disclosures: l,
        integrationType: r,
        pid: f,
        signal: N,
    });
}
function pm(e, t) {
    if (e.authorization.accessToken) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "Already authenticated");
    if (e.authorization.authing) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "Already authenticating");
    return (
        (e.authorization.authing = !0),
        aO.Bo.get({
            url: P.Rsh.OAUTH2_CURRENT_AUTH,
            headers: { Authorization: `Bearer ${t}` },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(
                (n) => {
                    e.authorization.authing = !1;
                    let { application: i, user: r, scopes: a, expires: l } = n.body;
                    if (e.application.id !== i.id)
                        throw new hU.A(
                            { errorCode: P.Lw6.INVALID_CLIENTID },
                            "Application does not match the connection's",
                        );
                    let s = ty.default.getCurrentUser();
                    if (null == s || !r || s.id !== r.id)
                        throw new hU.A({ errorCode: P.Lw6.INVALID_TOKEN }, "Token does not match current user");
                    return (
                        (e.authorization.scopes = [...e.authorization.scopes, ...a, tR.VH]),
                        (e.authorization.accessToken = t),
                        (e.authorization.expires = new Date(l)),
                        X.h.dispatch({ type: "RPC_APP_AUTHENTICATED", socketId: e.id, application: e.application }),
                        { ...n.body, access_token: t }
                    );
                },
                () => {
                    throw new hU.A({ errorCode: P.Lw6.INVALID_TOKEN }, `Invalid access token: ${t}`);
                },
            )
            .catch((t) => {
                throw ((e.authorization.authing = !1), t);
            })
    );
}
let pI =
    ((h = (e) => {
        let {
                clientId: t,
                authorizations: n,
                scopes: i,
                parsedPermissions: r,
                responseType: a,
                redirectUri: l,
                codeChallenge: s,
                codeChallengeMethod: o,
                state: d,
                guildId: u,
                channelId: c,
                prompt: _,
                disableGuildSelect: A,
                disclosures: h,
                integrationType: E,
                pid: m,
                signal: I,
            } = e,
            g = `OAuth2Authorize_${t}_${u}_${c}`,
            C = null != E ? n?.get(E) : void 0,
            T = C?.application ?? lP.A.getApplication(t);
        return new Promise((e, C) => {
            let N = (0, EX.d5)(m),
                S = h5.SY;
            null != T && null != (0, h4.Ay)({ application: T, channelId: c })
                ? (S = h5.KX)
                : N.context === P.BRT.POPOUT && (S = h5.KX);
            let O = !1,
                L = (n) => {
                    let { clientId: i, location: r } = n;
                    if (null == i || i === t) {
                        if (((O = !0), null == r)) {
                            C(new hU.A({ errorCode: P.Lw6.OAUTH2_ERROR }, "OAuth2 Error: No location provided")),
                                N.lock();
                            return;
                        }
                        (e(r), null == l || null == T)
                            ? N.lock()
                            : null == new URL(r).searchParams.get("error")
                              ? (0, f.openModal)(
                                    (e) => (0, p.jsx)(pa.Sm, { application: T, ...e }),
                                    {
                                        onCloseCallback: () => {
                                            N.lock();
                                        },
                                    },
                                    S,
                                )
                              : (0, f.openModal)(
                                    (e) => (0, p.jsx)(pa.xb, { ...e }),
                                    {
                                        onCloseCallback: () => {
                                            N.lock();
                                        },
                                    },
                                    S,
                                );
                    }
                },
                { cleanup: y } = (function (e, t) {
                    function n() {
                        (0, f.closeModal)(e) &&
                            (0, f.openModal)((e) =>
                                (0, p.jsx)(pr.f, {
                                    ...e,
                                    title: k.intl.string(k.t.j2d6Km),
                                    subtitle: k.intl.string(k.t["4LKmN5"]),
                                    actions: [{ text: k.intl.string(k.t.cpT0Cq), onClick: e.onClose }],
                                }),
                            );
                    }
                    return (
                        t?.addEventListener("abort", n),
                        {
                            cleanup: function () {
                                t?.removeEventListener("abort", n);
                            },
                        }
                    );
                })(g, I);
            (0, f.openModal)(
                (e) =>
                    (0, p.jsx)(pi.OAuth2AuthorizeModal, {
                        ...e,
                        authorizations: n,
                        clientId: t,
                        scopes: i ?? [],
                        disclosures: h ?? [],
                        callback: L,
                        responseType: a,
                        redirectUri: l,
                        codeChallenge: s,
                        codeChallengeMethod: o,
                        state: d,
                        permissions: r,
                        guildId: u,
                        channelId: c,
                        prompt: _,
                        disableGuildSelect: "boolean" == typeof A ? A : "true" === A,
                        integrationType: E,
                        cancelCompletesFlow: !0,
                    }),
                {
                    modalKey: g,
                    onCloseCallback: () => {
                        y(),
                            O ||
                                (C(new hU.A({ errorCode: P.Lw6.OAUTH2_ERROR }, "User cancelled authorization")),
                                N.lock());
                    },
                },
                S,
            );
        });
    }),
    (E = function (e, t, n) {
        if ((0, EX.kS)(n) || !G.isPlatformEmbedded) return;
        let i = (0, h4.Ay)({ application: e, channelId: t });
        (0, G.isWindows)() ? e0.Ay.minimize(i) : e0.Ay.restore(i), e0.Ay.focus(i);
    }),
    {
        [P.e$_.AUTHENTICATE]: hw(P.e$_.AUTHENTICATE, {
            handler(e) {
                let {
                    socket: t,
                    signal: n,
                    args: { access_token: i },
                } = e;
                if (null == i && t.transport === tR.z4.IPC) {
                    let e = t.application.id;
                    if (null == e) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
                    let r = hb.F.IDENTIFY,
                        a = () =>
                            pp(
                                {
                                    client_id: e,
                                    scope: r,
                                    response_type: "token",
                                    signal: n,
                                    isSocketRpcPrivateScope: !1,
                                },
                                h,
                                E,
                            ).then((n) => {
                                var i, r, a;
                                let l;
                                if (null == n)
                                    throw new hU.A({ errorCode: P.Lw6.UNKNOWN_ERROR }, "Unknown error occurred");
                                let s = n.split(/#|\?/),
                                    o = pl.parse(s[s.length - 1]);
                                if (null != o.error)
                                    throw new hU.A(
                                        { errorCode: P.Lw6.OAUTH2_ERROR },
                                        `OAuth2 Error: ${o.error}: ${o.error_description ?? "unknown error"}`,
                                    );
                                return (
                                    (i = o.access_token),
                                    (r = o.scope),
                                    (a = o.expires_in),
                                    ((l = ta.w.get(ph) ?? {})[e] = {
                                        accessToken: i,
                                        scope: r,
                                        expires: Date.now() + a,
                                    }),
                                    ta.w.set(ph, l),
                                    pm(t, o.access_token)
                                );
                            });
                    return null !=
                        (i = (function (e, t) {
                            let n = ta.w.get(ph);
                            if (null != n && null != n[e]) {
                                let i = n[e];
                                if (!(i.scope !== t || i.expires <= Date.now())) return i.accessToken;
                                delete n[e], ta.w.set(ph, n);
                            }
                        })(e, r))
                        ? pm(t, i).catch(() => {
                              let t;
                              return (t = ta.w.get(ph) ?? {}), delete t[e], ta.w.set(ph, t), a();
                          })
                        : a();
                }
                if (null == i) throw new hU.A({ errorCode: P.Lw6.INVALID_TOKEN }, "No access token provided");
                return pm(t, i);
            },
        }),
        [P.e$_.AUTHORIZE]: {
            handler(e) {
                let { socket: t, signal: n, args: i } = e,
                    r = i.client_id;
                if (!r) throw new hU.A({ errorCode: P.Lw6.INVALID_CLIENTID }, "No client id provided");
                if (null != t.authorization.accessToken)
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "Already authenticated");
                if (t.authorization.authing) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "Already authing");
                if (((t.authorization.authing = !0), "token" === i.response_type))
                    throw (
                        ((t.authorization.authing = !1),
                        new hU.A(
                            { errorCode: P.Lw6.INVALID_COMMAND },
                            'Authorization response_type "token" is not supported',
                        ))
                    );
                let a = t.authorization.scopes.includes(tR.LQ);
                if (!a && t.application.id !== r)
                    throw (
                        ((t.authorization.authing = !1),
                        new hU.A({ errorCode: P.Lw6.INVALID_CLIENTID }, "Application does not match the connection's"))
                    );
                let l = i.scopes || i.scope;
                return (
                    delete i.scopes,
                    pp({ ...i, scope: l, signal: n, isSocketRpcPrivateScope: a }, h, E)
                        .then((e) => {
                            if (((t.authorization.authing = !1), null == e))
                                throw new hU.A({ errorCode: P.Lw6.UNKNOWN_ERROR }, "Unknown error occurred");
                            let n = new URL(e),
                                i = n.searchParams.get("code");
                            if (a) return { code: i, location: e };
                            let r = n.searchParams.get("error");
                            if (null != r && "" !== r) {
                                let e = n.searchParams.get("error_description") ?? "unknown error";
                                throw new hU.A({ errorCode: P.Lw6.OAUTH2_ERROR }, `OAuth2 Error: ${r}: ${e}`);
                            }
                            if (null == i)
                                throw new hU.A(
                                    { errorCode: P.Lw6.OAUTH2_ERROR },
                                    "OAuth2 Error: Unable to find auth code",
                                );
                            return { code: i };
                        })
                        .catch((e) => {
                            throw ((t.authorization.authing = !1), e);
                        })
                );
            },
        },
    });
var pg = n(845187);
let pC = "activity-hardware-acceleration-modal",
    pT = {
        [P.e$_.ENCOURAGE_HW_ACCELERATION]: {
            validation: (e) => hH(e),
            handler(e) {
                let { socket: t } = e;
                (0, hT.lG)(t.transport);
                let i = t.application.id;
                if (null != i)
                    return (
                        ne.Ay.disableActivityHardwareAccelerationPrompt ||
                            !G.isPlatformEmbedded ||
                            e0.Ay.getEnableHardwareAcceleration() ||
                            (0, f.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.resolve().then(n.bind(n, 845187));
                                    return (t) => (0, p.jsx)(e, { applicationId: i, ...t });
                                },
                                {
                                    modalKey: pC,
                                    onCloseRequest: () => {
                                        ec.default.track(P.HAw.MODAL_DISMISSED, { type: pg.a }), (0, f.closeModal)(pC);
                                    },
                                },
                            ),
                        { enabled: e0.Ay.getEnableHardwareAcceleration() }
                    );
            },
        },
    };
var pf = n(43203);
let pN = {
        [P.e$_.OPEN_MESSAGE]: {
            scope: tR.hj,
            handler(e) {
                let {
                    args: { guild_id: t, channel_id: n, message_id: i, pid: r },
                } = e;
                (0, EX.d5)(r).context === P.BRT.OVERLAY
                    ? X.h.dispatch({ type: "OVERLAY_OPEN_MESSAGE", guildId: t, channelId: n, messageId: i })
                    : ((0, tL.bG)({ pathname: P.BVt.CHANNEL(t, n, i) }), e0.Ay.focus());
            },
        },
    },
    pS = new uY.A("RPCCommandsOverlay"),
    pO = {
        [P.e$_.SET_OVERLAY_LOCKED]: {
            scope: tR.hj,
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({ locked: e.boolean().required(), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                    args: { locked: t, pid: n },
                    socket: { application: i },
                } = e;
                if ((pS.verbose("RPCCommands.SET_OVERLAY_LOCKED", { locked: t, pid: n }), null == i.id))
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
                _$.A.setInputLocked(t, n);
            },
        },
        [P.e$_.OPEN_OVERLAY_ACTIVITY_INVITE]: {
            scope: tR.hj,
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({ type: e.number().required().valid([P.xL.JOIN]), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        socket: t,
                        args: { type: n, pid: i },
                    } = e,
                    r = t.application.id;
                if (null == r) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
                let a = E4.A.getApplicationActivity(r);
                if (null == a || null == a.secrets || !(0, hT.px)(n, a.party, a.secrets))
                    throw new hU.A(
                        { errorCode: P.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
                    );
                let { lock: l, context: s } = (0, EX.d5)(i),
                    o = E2(a, u3.A);
                return (0, EJ.qf)(a, o, s).then(() => {
                    if ((l(), o))
                        throw new hU.A(
                            { errorCode: P.Lw6.NO_ELIGIBLE_ACTIVITY },
                            "No eligible activity for application. Ensure user does have have privacy enabled.",
                        );
                });
            },
        },
        [P.e$_.OPEN_OVERLAY_GUILD_INVITE]: {
            scope: tR.hj,
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({ code: e.string().required(), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                    args: { code: t, pid: n },
                    socket: i,
                } = e;
                if (null == i.application.id) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
                return _D.Ay.resolveInvite(t, "Game SDK").then((e) => {
                    let { invite: t, code: i } = e;
                    if (null == t) throw new hU.A({ errorCode: P.Lw6.INVALID_INVITE }, `Invalid invite id: ${i}`);
                    let { context: r, lock: a } = (0, EX.d5)(n);
                    return new Promise((e) => {
                        X.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: i, context: r, resolve: e });
                    }).then(a);
                });
            },
        },
        [P.e$_.OPEN_OVERLAY_VOICE_SETTINGS]: {
            scope: tR.hj,
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({ pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        args: { pid: t },
                        socket: i,
                    } = e,
                    r = i.application.id;
                if (null == r) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: a, context: l } = (0, EX.d5)(t);
                return new Promise((e) => {
                    (0, f.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("18912").then(n.bind(n, 880510));
                            return (t) =>
                                (0, p.jsx)(e, { ...t, mediaEngineContext: r, subtitle: i.application.name ?? void 0 });
                        },
                        {
                            contextKey: l === P.BRT.POPOUT ? h5.KX : h5.SY,
                            onCloseCallback: () => {
                                a(), e();
                            },
                        },
                    );
                });
            },
        },
    };
var pL = n(80703),
    py = n(6981),
    pb = n(121623),
    pv = n(708281),
    pD = n(890687);
function pR(e, t) {
    let { fingerprint: n, installationId: i } = e;
    (null != n || null != i) &&
        ec.default.track(P.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: null != n ? (0, pL.d)(n) : null,
            received_installation_id: i,
            link_type: t,
        });
}
let pM = {
        [P.e$_.INVITE_BROWSER]: {
            scope: tR.LQ,
            async handler(e) {
                let {
                    args: { code: t, ...n },
                } = e;
                return await (0, pf.$)(t, "Desktop Modal", n);
            },
        },
        [P.e$_.GUILD_TEMPLATE_BROWSER]: {
            scope: tR.LQ,
            async handler(e) {
                let {
                    args: { code: t },
                } = e;
                if (null == ty.default.getCurrentUser()) return;
                let { guildTemplate: i } = await pb.A.resolveGuildTemplate(t);
                if (null == i)
                    throw new hU.A({ errorCode: P.Lw6.INVALID_GUILD_TEMPLATE }, `Invalid guild template id: ${t}`);
                return (
                    e0.Ay.focus(),
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("82486"), n.e("16198"), n.e("43264")]).then(
                            n.bind(n, 72715),
                        );
                        return (t) => (0, p.jsx)(e, { ...t, guildTemplate: i });
                    }),
                    { guildTemplate: i, code: t }
                );
            },
        },
        [P.e$_.GIFT_CODE_BROWSER]: {
            scope: tR.LQ,
            handler(e) {
                let {
                    args: { code: t },
                } = e;
                return new Promise((e, i) => {
                    X.h.wait(() => {
                        O.A.resolveGiftCode(t, !0, !0)
                            .then((i) => {
                                let { giftCode: r } = i;
                                e0.Ay.focus(),
                                    ec.default.track(P.HAw.OPEN_MODAL, { type: "gift_accept", location: P.$OG }),
                                    (0, f.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("7200"), n.e("73646")]).then(
                                            n.bind(n, 361845),
                                        );
                                        return (n) => (0, p.jsx)(e, { code: t, ...n });
                                    }),
                                    e({ giftCode: r });
                            })
                            .catch(() =>
                                i(new hU.A({ errorCode: P.Lw6.INVALID_GIFT_CODE }, `Invalid gift code: ${t}`)),
                            );
                    });
                });
            },
        },
        [P.e$_.DEEP_LINK]: {
            scope: { [tR.sm.ANY]: [tR.LQ, tR.hj] },
            handler(e) {
                let {
                    args: { type: t, params: i },
                } = e;
                switch ((e0.Ay.focus(), t)) {
                    case tR.XK.USER_SETTINGS:
                        null != i &&
                            (0, _v.B)(() => {
                                let e = P.BVt.SETTINGS(i.section, i.subsection),
                                    n = (0, sM.parseSettingsUrl)({ path: e, search: i.search });
                                (0, sM.trackParseSettingsUrl)(n, "deeplink"),
                                    (0, e4.openUserSettings)(n.target, { path: n.path, searchParams: n.params }),
                                    pR(i, (0, tR.OE)(t));
                            });
                        break;
                    case tR.XK.CHANGELOG:
                        null != i &&
                            ((0, tL.pX)(E3.A.formatPathWithQuery(P.BVt.CHANGELOGS(i.date), i.query)),
                            pR(i, (0, tR.OE)(t)));
                        break;
                    case tR.XK.LIBRARY:
                        (0, tL.pX)(P.BVt.APPLICATION_LIBRARY), null != i && pR(i, (0, tR.OE)(t));
                        break;
                    case tR.XK.STORE_HOME:
                        (0, tL.pX)(P.BVt.APPLICATION_STORE), null != i && pR(i, (0, tR.OE)(t));
                        break;
                    case tR.XK.STORE_LISTING:
                        null != i &&
                            ((0, tL.pX)(P.BVt.APPLICATION_STORE_LISTING_SKU(i.skuId, i.slug)), pR(i, (0, tR.OE)(t)));
                        break;
                    case tR.XK.PICK_GUILD_SETTINGS:
                        null != i &&
                            ((0, tL.pX)(P.BVt.PICK_GUILD_SETTINGS(i.section, i.subsection), { search: i.search }),
                            pR(i, (0, tR.OE)(t)));
                        break;
                    case tR.XK.CHANNEL:
                        null != i &&
                            ((0, tL.pX)(P.BVt.CHANNEL(i.guildId, i.channelId, i.messageId), { search: i.search }),
                            pR(i, (0, tR.OE)(t)));
                        break;
                    case tR.XK.GAME_SHOP:
                        null != i &&
                            ((0, tL.pX)(P.BVt.CHANNELS_GAME_SHOP(i.guildId, i.pageIndex, i.skuId, i.slug)),
                            pR(i, (0, tR.OE)(t)));
                        break;
                    case tR.XK.QUEST_HOME:
                        if (null != i) {
                            let e = new URLSearchParams();
                            null != i.sort && e.set(pD.L1.SORT, i.sort),
                                null != i.filter && e.set(pD.L1.FILTER, i.filter),
                                null != i.tab && e.set(pD.L1.TAB, i.tab),
                                (0, tL.pX)(P.BVt.QUEST_HOME, { hash: i.questId, search: `?${e.toString()}` }),
                                pR(i, (0, tR.OE)(t));
                        } else (0, tL.pX)(P.BVt.QUEST_HOME);
                        break;
                    case tR.XK.QUEST_PREVIEW_TOOL:
                        if (null != i) {
                            let e = new URLSearchParams();
                            e.set(pD.L1.TAB, pD.NC.PREVIEW_TOOL),
                                null != i.questId && e.set(pD.L1.QUEST_ID, i.questId),
                                (0, tL.pX)(P.BVt.QUEST_HOME, { search: `?${e.toString()}` }),
                                pR(i, (0, tR.OE)(t));
                        }
                        break;
                    case tR.XK.DISCOVERY_GAME_RESULTS:
                        null != i &&
                            ((0, tL.pX)(P.BVt.GLOBAL_DISCOVERY_SERVERS, { search: `?game=${i.gameId}` }),
                            pR(i, (0, tR.OE)(t)));
                        break;
                    case tR.XK.OAUTH2:
                        let r = new URL(P.BVt.OAUTH2_AUTHORIZE, window.location.origin);
                        r.search = i.search;
                        let a = (0, pi.getOAuth2AuthorizeProps)(r.toString());
                        if (null != a) return (0, pi.openOAuth2ModalWithCreateGuildModal)(a), !0;
                        return !1;
                    case tR.XK.ONE_TIME_LOGIN:
                        if (null != i) return (0, pv.N)({ token: i.token }), pR(i, (0, tR.OE)(t)), !0;
                        return !1;
                    case tR.XK.SHOP:
                        null != i && ((0, tL.pX)(P.BVt.COLLECTIBLES_SHOP, { search: i.search }), pR(i, (0, tR.OE)(t)));
                        break;
                    case tR.XK.FEATURES:
                        i?.path != null && ((0, tL.pX)(i.path), pR(i, (0, tR.OE)(t)));
                        break;
                    case tR.XK.ACTIVITIES:
                        if (null != i) {
                            let e = i.attemptId || (0, tI.A)();
                            return (
                                (async function (e, t, n) {
                                    try {
                                        let i = og.Ay.getCurrentEmbeddedActivity();
                                        if (i?.applicationId === e)
                                            return void ec.default.track(P.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                                application_id: e,
                                                success: !1,
                                                failure_reason: "activity_already_running",
                                                attempt_id: n,
                                            });
                                        let r = await _u.Ay.fetchApplication(e),
                                            a = r?.bot?.id;
                                        if (null == a)
                                            return void ec.default.track(P.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                                application_id: e,
                                                success: !1,
                                                failure_reason: "no_bot_user",
                                                attempt_id: n,
                                            });
                                        let l = await tN.A.openPrivateChannel({ recipientIds: a }),
                                            s = new URL(t),
                                            o = s.searchParams.get("referrer_id") ?? void 0,
                                            { customId: d } = await (0, tv.d9)(
                                                e,
                                                s.searchParams.get("link_id"),
                                                s.searchParams.get("custom_id"),
                                            );
                                        await (0, tb.A)({
                                            targetApplicationId: e,
                                            channelId: l,
                                            analyticsLocations: [eC.A.DEEPLINK],
                                            customId: d,
                                            referrerId: o,
                                        }),
                                            ec.default.track(P.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                                application_id: e,
                                                success: !0,
                                                failure_reason: null,
                                                attempt_id: n,
                                            });
                                    } catch (t) {
                                        ec.default.track(P.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "launch_failed",
                                            attempt_id: n,
                                        });
                                    }
                                })(i.applicationId, i.url, e),
                                pR(i, (0, tR.OE)(t)),
                                !0
                            );
                        }
                        return !1;
                    case tR.XK.PLAYGROUND:
                        if (null != i) {
                            let { openPlayground: e } = n(965042);
                            e(i.collection, i.story), pR(i, (0, tR.OE)(t));
                        }
                }
            },
        },
        [P.e$_.BROWSER_HANDOFF]: {
            scope: tR.kw,
            handler(e) {
                let {
                    args: { handoffToken: t, fingerprint: n },
                } = e;
                e0.Ay.focus(null, !0), (0, py.mZ)(t, n);
            },
        },
        [P.e$_.CONNECTIONS_CALLBACK]: {
            scope: tR.LQ,
            handler: async (e) => {
                let {
                    args: { providerType: t, code: n, openid_params: i, iss: r, state: a },
                } = e;
                if (!Eo.A.hasPendingAuthorizedState(a))
                    throw new hU.A(
                        { errorCode: P.Lw6.INVALID_CONNECTION_CALLBACK_STATE },
                        "Provider authorization did not originate from this discord client",
                    );
                try {
                    return (
                        Eo.A.deletePendingAuthorizedState(a),
                        await Ea.A.callback(t, { code: n, openid_params: i, iss: r, state: a })
                    );
                } catch (e) {
                    if (e?.status === 400)
                        throw new hU.A({ errorCode: P.Lw6.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                    throw (nl._.dispatch(P.jej.CONNECTIONS_CALLBACK_ERROR), e);
                }
            },
        },
        [P.e$_.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
            scope: tR.LQ,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i },
                } = e;
                return (0, ih.re)({ paymentSourceType: P.hes.PAYPAL, state: t, path: n, query: i });
            },
        },
        [P.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
            scope: tR.LQ,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i, payment_source_type: r },
                } = e;
                return (0, ih.re)({ paymentSourceType: r, state: t, path: n, query: i });
            },
        },
    },
    pP = {
        [P.e$_.SET_SUPPRESS_NOTIFICATIONS]: {
            scope: tR.hj,
            handler(e) {
                let {
                    socket: t,
                    args: { suppress_notifications: n, target_user_id: i },
                } = e;
                X.h.dispatch({
                    type: "SET_RPC_NOTIFICATION_SETTINGS",
                    socketId: t.id,
                    suppressNotifications: n,
                    targetUserId: i,
                });
            },
        },
    };
var pw = n(4630);
let px = [eC.A.RPC];
function pU(e, t) {
    let n = { subscriptionTier: ci.pe.TIER_2, analyticsLocations: px, analyticsObject: t };
    switch (e) {
        case P.BRT.APP:
            return hi.A.openPremiumPaymentModalInApp(n);
        case P.BRT.OVERLAY:
            return hi.A.openPremiumPaymentModalInOverlay(n);
        default:
            throw Error(`Unexpected app context: ${e}`);
    }
}
let pG = {
        [P.e$_.START_PURCHASE]: {
            [tR.sm.ANY]: [tR.VH, tR.hj],
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({ sku_id: e.string().required(), pid: e.number().min(0) }),
            handler(e) {
                let {
                    socket: t,
                    args: { sku_id: n, pid: i },
                } = e;
                Ev(t.transport);
                let r = t.application.id;
                if (null == r) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: a, context: l } = (0, EX.d5)(t.transport !== tR.z4.POST_MESSAGE ? i : null);
                if (null == hG()) throw new hU.A({ errorCode: P.Lw6.INVALID_CHANNEL }, "Invalid channel");
                let s = { page: P.liQ.IN_APP };
                return (async () => {
                    try {
                        let e = await (0, pw.j)({
                            applicationId: r,
                            skuId: n,
                            openPremiumPaymentModal: () => pU(l, s),
                            analyticsLocations: px,
                            analyticsLocationObject: s,
                            context: l,
                        });
                        return a(), e;
                    } catch (e) {
                        if ((a(), null != e)) {
                            let t = "";
                            throw (
                                ((t =
                                    "object" == typeof e && "message" in e && "string" == typeof e.message
                                        ? e.message
                                        : "string" == typeof e
                                          ? e
                                          : JSON.stringify(e)),
                                new hU.A({ errorCode: P.Lw6.PURCHASE_ERROR }, t))
                            );
                        }
                        throw new hU.A({ errorCode: P.Lw6.PURCHASE_CANCELED }, "Purchase was canceled by the user.");
                    }
                })();
            },
        },
        [P.e$_.START_PREMIUM_PURCHASE]: {
            [tR.sm.ANY]: [tR.VH, tR.hj],
            validation: (e) => hH(e).keys({ pid: e.number().min(0) }),
            handler(e) {
                let {
                    socket: t,
                    args: { pid: n },
                } = e;
                if ((Ev(t.transport), null == t.application.id))
                    throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: i, context: r } = (0, EX.d5)(t.transport !== tR.z4.POST_MESSAGE ? n : null);
                return pU(r, { page: P.liQ.IN_APP }).then(
                    () => {
                        i();
                    },
                    (e) => {
                        if ((i(), null != e)) throw new hU.A({ errorCode: P.Lw6.PURCHASE_ERROR }, e);
                        throw new hU.A({ errorCode: P.Lw6.PURCHASE_CANCELED }, "Purchase was canceled by the user.");
                    },
                );
            },
        },
    },
    pk = {
        [P.e$_.SEND_GENERIC_EVENT]: {
            handler(e) {
                throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, `Deprecated command: ${e.cmd}`);
            },
        },
    },
    pj = {
        [P.e$_.TOGGLE_VIDEO]: {
            scope: { [tR.sm.ALL]: [hb.F.RPC, hb.F.RPC_VIDEO_WRITE] },
            handler() {
                let e = eO.Ay.isVideoEnabled();
                null != (0, ES.A)() &&
                    (e ? ef.A.setVideoEnabled(!1) : (0, dl.A)(() => ef.A.setVideoEnabled(!0), P.BRT.APP));
            },
        },
        [P.e$_.TOGGLE_SCREENSHARE]: {
            scope: { [tR.sm.ALL]: [hb.F.RPC, hb.F.RPC_SCREENSHARE_WRITE] },
            validation: (e) =>
                hH(e)
                    .optional()
                    .keys({ pid: e.number().optional().min(0) }),
            handler(e) {
                let {
                        args: { pid: t },
                    } = e,
                    i = ra.A.getCurrentUserActiveStream(),
                    r = ra.A.getStreamerActiveStreamMetadata(),
                    a = (0, _8.A)(eN.Ay, _5.A),
                    l = (0, ES.A)();
                null != l &&
                    (null != t && null != r && r.pid !== t && (0, G.isWindows)()
                        ? (0, _X.XI)(l.guild_id, l.id, { pid: t })
                        : null != i
                          ? (0, _X.nO)(!1)
                          : null != t && (0, G.isWindows)()
                            ? (0, _X.XI)(l.guild_id, l.id, { pid: t })
                            : null != a
                              ? (0, _X.XI)(l.guild_id, l.id, { pid: a.pid })
                              : (0, f.openModalLazy)(async () => {
                                    let { default: e } = await n.e("27713").then(n.bind(n, 301400));
                                    return (t) => (0, p.jsx)(e, { ...t, analyticsLocations: [eC.A.RPC] });
                                }));
            },
        },
    };
var pV = n(350535);
function pH(e) {
    let t = e.application.id;
    if (null == t) throw new hU.A({ errorCode: P.Lw6.INVALID_COMMAND }, "No application.");
    return t;
}
let pB = {
        [P.e$_.SET_VOICE_SETTINGS_2]: {
            scope: tR.hj,
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({
                        input_mode: hH(e).keys({
                            type: e.string().valid(Object.keys(P.TBI)),
                            shortcut: e.string().required(),
                        }),
                        self_mute: e.boolean(),
                        self_deaf: e.boolean(),
                    }),
            handler(e) {
                let {
                        socket: t,
                        args: { input_mode: n, self_mute: i, self_deaf: r },
                    } = e,
                    a = pH(t);
                null != n && ef.A.setMode(n.type, { shortcut: (0, pV.OH)(n.shortcut) }, a),
                    null != i && i !== eO.Ay.isSelfMute(a) && ef.A.toggleSelfMute({ context: a }),
                    null != r && r !== eO.Ay.isSelfDeaf(a) && ef.A.toggleSelfDeaf({ context: a });
            },
        },
        [P.e$_.SET_USER_VOICE_SETTINGS_2]: {
            scope: tR.hj,
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({ user_id: e.string().required(), volume: e.number().min(0).max(200), mute: e.boolean() }),
            handler(e) {
                let {
                        socket: t,
                        args: { user_id: n, mute: i, volume: r },
                    } = e,
                    a = pH(t);
                null != i && i !== eO.Ay.isLocalMute(n, a) && ef.A.toggleLocalMute(n, a),
                    null != r && ef.A.setLocalVolume(n, r, a);
            },
        },
        [P.e$_.PUSH_TO_TALK]: {
            scope: { [tR.sm.ALL]: [hb.F.RPC, hb.F.RPC_VOICE_WRITE] },
            validation: (e) => hH(e).required().keys({ active: e.boolean() }),
            handler(e) {
                let {
                    args: { active: t },
                } = e;
                eO.Ay.getMode(ey.x.DEFAULT) === P.TBI.PUSH_TO_TALK && (0, _9.N)(t);
            },
        },
    },
    pF = {
        [P.e$_.SET_USER_VOICE_SETTINGS]: {
            scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.RPC_VOICE_WRITE] },
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({
                        user_id: e.string().required(),
                        pan: hH(e).keys({
                            left: e.number().min(0).max(1).required(),
                            right: e.number().min(0).max(1).required(),
                        }),
                        volume: e.number().min(0).max(200),
                        mute: e.boolean(),
                    }),
            handler(e) {
                let {
                        args: { user_id: t, pan: n, volume: i, mute: r },
                    } = e,
                    a = ty.default.getCurrentUser();
                if (null == ty.default.getUser(t) || a?.id === t)
                    throw new hU.A({ errorCode: P.Lw6.INVALID_USER }, `Invalid user id: ${t}`);
                if (
                    (null != n && ef.A.setLocalPan(t, n.left, n.right),
                    null != i && ef.A.setLocalVolume(t, i),
                    null != r)
                ) {
                    let e = eO.Ay.isLocalMute(t);
                    ((e && !r) || (!e && r)) && ef.A.toggleLocalMute(t);
                }
                return {
                    user_id: t,
                    pan: eO.Ay.getLocalPan(t),
                    volume: eO.Ay.getLocalVolume(t),
                    mute: eO.Ay.isLocalMute(t),
                };
            },
        },
        [P.e$_.GET_VOICE_SETTINGS]: {
            scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.RPC_VOICE_READ] },
            handler: () => (0, EX.l6)(),
        },
        [P.e$_.SET_VOICE_SETTINGS]: {
            scope: { [tR.sm.ANY]: [hb.F.RPC, hb.F.RPC_VOICE_WRITE] },
            validation: (e) =>
                hH(e)
                    .required()
                    .keys({
                        input: hH(e).keys({
                            device_id: e.string().valid(Object.keys(eO.Ay.getInputDevices())),
                            volume: e.number().min(0).max(100),
                        }),
                        output: hH(e).keys({
                            device_id: e.string().valid(Object.keys(eO.Ay.getOutputDevices())),
                            volume: e.number().min(0).max(200),
                        }),
                        mode: hH(e).keys({
                            type: e.string().valid(Object.keys(P.TBI)),
                            auto_threshold: e.boolean(),
                            threshold: e.number().min(-100).max(0),
                            shortcut: e
                                .array()
                                .items(
                                    hH(e).keys({
                                        type: e.number().min(0).max(3).required(),
                                        code: e.number().required(),
                                        name: e.string(),
                                    }),
                                ),
                            delay: e.number().min(0).max(2e3),
                        }),
                        automatic_gain_control: e.boolean(),
                        echo_cancellation: e.boolean(),
                        noise_suppression: e.boolean(),
                        qos: e.boolean(),
                        silence_warning: e.boolean(),
                        deaf: e.boolean(),
                        mute: e.boolean(),
                    }),
            handler(e) {
                let {
                    args: {
                        input: t,
                        output: n,
                        mode: i,
                        automatic_gain_control: r,
                        echo_cancellation: a,
                        noise_suppression: l,
                        qos: s,
                        silence_warning: o,
                        deaf: d,
                        mute: u,
                    },
                } = e;
                if (
                    (t &&
                        (null != t.device_id && ef.A.setInputDevice(t.device_id),
                        null != t.volume && ef.A.setInputVolume(t.volume)),
                    n &&
                        (null != n.device_id && ef.A.setOutputDevice(n.device_id),
                        null != n.volume && ef.A.setOutputVolume(n.volume)),
                    i)
                ) {
                    let e = eO.Ay.getMode(),
                        t = eO.Ay.getModeOptions();
                    null != i.type && (e = i.type),
                        null != i.auto_threshold && (t.autoThreshold = i.auto_threshold),
                        null != i.threshold && (t.threshold = i.threshold),
                        null != i.shortcut && (t.shortcut = i.shortcut.map((e) => [e.type, e.code])),
                        null != i.delay && (t.delay = i.delay),
                        ef.A.setMode(e, t);
                }
                if (
                    (null != r && ef.A.setAutomaticGainControl(r),
                    null != a && ef.A.setEchoCancellation(a),
                    null != l && ef.A.setNoiseSuppression(l),
                    null != s && ef.A.setQoS(s),
                    null != o && ef.A.setSilenceWarning(o),
                    null != d)
                ) {
                    let e = eO.Ay.isSelfDeaf();
                    ((e && !d) || (!e && d)) && ef.A.toggleSelfDeaf();
                }
                if (null != u) {
                    let e = eO.Ay.isSelfMute();
                    ((e && !u) || (!e && u)) && ef.A.toggleSelfMute();
                }
                return (0, EX.l6)();
            },
        },
    };
var pY = n(111162),
    pK = n(861621),
    pW = n(143236),
    pz = n(440454);
let pq = 10 * e_.A.Millis.SECOND,
    p$ = new Map(),
    pX = new Set(),
    pZ = (e, t, n) => {
        n([pz.A.CLOSE, t], e);
    };
class pQ extends pW.EventEmitter {
    validateSocketClient;
    logger;
    createPostMessageProxySocket;
    onFrameHandled;
    handshakeFailureTimeoutId;
    constructor(e, t, n, i) {
        super(),
            nl._.subscribe(P.jej.IFRAME_MOUNT, this.handleIFrameMount),
            nl._.subscribe(P.jej.IFRAME_UNMOUNT, this.handleIFrameUnmount),
            (this.validateSocketClient = e),
            (this.logger = t),
            (this.createPostMessageProxySocket = n),
            (this.onFrameHandled = i);
    }
    disconnectSocket = (() => {
        var e = this;
        return function (t, n) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e.emit("disconnect", t, i ? void 0 : n), t.close(n.code, n.message ?? "Unknown");
            let [r] = Array.from(p$.entries()).find((e) => {
                let [n, i] = e;
                return i === t;
            }) ?? [null, null];
            null != r && p$.delete(r);
        };
    })();
    handleIFrameMount = (e) => {
        let { id: t } = e;
        pX.add(t),
            (this.handshakeFailureTimeoutId = setTimeout(() => {
                Array.from(og.Ay.getSelfEmbeddedActivities().entries()).forEach((e) => {
                    let [t, n] = e;
                    ec.default.track(P.HAw.ACTIVITY_HANDSHAKE_TIMED_OUT, {
                        application_id: t,
                        channel_id: (0, hf.H)(n.location),
                        guild_id: (0, hf.D)(n.location),
                        timeout_ms: pq,
                    });
                });
            }, pq));
    };
    handleIFrameUnmount = (e) => {
        let { id: t } = e;
        pX.delete(t);
        let [n, i] = Array.from(p$.entries()).find((e) => {
            let [n, i] = e;
            return i.frameId === t;
        }) ?? [null, null];
        null != i &&
            null != n &&
            (this.disconnectSocket(i, { code: P.YI$.CLOSE_NORMAL, message: "iFrame gone" }, !0), p$.delete(n));
    };
    handleMessage = (e, t, n) => {
        let i = p$.get(t);
        try {
            this.routeEvent(i, t, e, n);
        } catch (e) {
            if (e instanceof hU.A && e.errorCode === P.Lw6.INVALID_PAYLOAD) throw e;
            null != i
                ? this.disconnectSocket(i, { code: e.code, message: e.message }, !0)
                : pZ(t, { code: e.code, message: e.message }, n);
        }
    };
    routeEvent(e, t, n, i) {
        if (!Array.isArray(n))
            return void console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
        let [r, a] = n;
        switch (r) {
            case pz.A.HANDSHAKE:
                if (null != e) throw new hU.A({ closeCode: P.YI$.CLOSE_UNSUPPORTED }, "Already connected");
                return this.handleHandshake(t, a, i);
            case pz.A.FRAME:
                if (null == e) throw new hU.A({ closeCode: P.YI$.CLOSE_UNSUPPORTED }, "Not connected");
                return this.handleFrame(t, e, a);
            case pz.A.CLOSE:
                if (null == e) throw new hU.A({ closeCode: P.YI$.CLOSE_UNSUPPORTED }, "Not connected");
                return this.handleClose(e, a);
            default:
                throw new hU.A({ closeCode: P.YI$.CLOSE_UNSUPPORTED }, "Invalid opcode");
        }
    }
    handleFrame = (e, t, n) => {
        let i;
        if (e !== t.origin) throw new hU.A({ closeCode: P.YI$.INVALID_ORIGIN }, "Origin has changed");
        try {
            i = "string" == typeof n ? JSON.parse(n) : n;
        } catch (e) {
            throw new hU.A({ closeCode: P.YI$.CLOSE_UNSUPPORTED }, "Payload not recognized encoding");
        }
        this.onFrameHandled?.(i, this.logger, t), this.emit("request", t, i);
    };
    handleHandshake = async (e, t, i) => {
        let r;
        null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
        let a = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default;
        try {
            a.assert(
                t,
                hH(a)
                    .required()
                    .keys({
                        v: a.number().min(1).max(1).required(),
                        encoding: a.string().equal("json").optional(),
                        client_id: a.string().required(),
                        frame_id: a.string().required(),
                        sdk_version: a.string().optional(),
                    }),
            );
        } catch (e) {
            throw new hU.A({ closeCode: P.YI$.CLOSE_UNSUPPORTED }, e.message);
        }
        let l = t.frame_id;
        if (!pX.has(l))
            throw (
                (this.logger.error(`Unrecognized frame ID ${l}`),
                new hU.A({ closeCode: P.YI$.CLOSE_UNSUPPORTED }, `Unrecognized frame ID ${l}`))
            );
        null != t.sdk_version &&
            ec.default.track(P.HAw.ACTIVITY_HANDSHAKE, { application_id: t.client_id, sdk_version: t.sdk_version });
        try {
            r = this.createPostMessageProxySocket({
                origin: e,
                postMessageToRPCClient: i,
                frameId: l,
                version: Number(t.v),
                logger: this.logger,
                postClose: pZ,
                encoding: t.encoding ?? "json",
            });
        } catch (e) {
            throw (this.logger.error(`Error opening window socket ${e}`), e);
        }
        this.logger.info(`Socket Opened: ${r.id}`);
        try {
            if ((await this.validateSocketClient(r, e, t.client_id), !pX.has(l)))
                throw (
                    (this.logger.error(`Frame ID ${l} no longer exists`),
                    new hU.A({ closeCode: P.YI$.CLOSE_UNSUPPORTED }, `Unrecognized frame ID ${l}`))
                );
            p$.set(e, r),
                pX.delete(l),
                r.authorization.scopes.push(tR.W_),
                this.emit("connect", r),
                this.logger.info(`Socket Validated: ${r.id}`);
        } catch (e) {
            throw (this.logger.info(`Socket Closed: ${r.id}, ${e.message}`), e);
        }
    };
    handleClose = async (e, t) => {
        let i = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default;
        try {
            i.assert(
                t,
                hH(i)
                    .required()
                    .keys({ code: i.number().valid(Object.values(P.YI$)).required(), message: i.string().optional() }),
            );
        } catch (e) {
            throw new hU.A({ closeCode: P.YI$.CLOSE_UNSUPPORTED }, e.message);
        }
        this.disconnectSocket(e, t);
    };
}
var pJ = n(313731);
class p0 extends pJ.A {
    origin;
    frameId;
    postMessageToRPCClient;
    logger;
    postClose;
    onSendingToRPCClient;
    closed;
    constructor({
        origin: e,
        postMessageToRPCClient: t,
        frameId: n,
        version: i,
        encoding: r,
        logger: a,
        postClose: l,
        onSendingToRPCClient: s,
    }) {
        if ((super(tR.z4.POST_MESSAGE, i, r), -1 === ["etf", "json"].indexOf(r)))
            throw new hU.A({ closeCode: P.YI$.INVALID_ENCODING }, `Invalid Encoding: ${r}`);
        if ("etf" === r) throw new hU.A({ closeCode: P.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        (this.origin = e),
            (this.postMessageToRPCClient = t),
            (this.frameId = n),
            (this.logger = a),
            (this.postClose = l),
            (this.onSendingToRPCClient = s),
            (this.closed = !1);
    }
    send(e) {
        this.onSendingToRPCClient?.(e, this.id), this.postMessageToRPCClient([pz.A.FRAME, e], this.origin);
    }
    close(e, t) {
        this.closed || this.postClose(this.origin, { code: e, message: t }, this.postMessageToRPCClient),
            (this.closed = !0);
    }
}
let p1 = new uY.A("RPCServer:PostMessage"),
    p2 =
        ((s = new pQ(
            EX.j7,
            p1,
            (e) => {
                let {
                    origin: t,
                    postMessageToRPCClient: n,
                    frameId: i,
                    version: r,
                    encoding: a,
                    logger: l,
                    postClose: s,
                } = e;
                return new p0({
                    origin: t,
                    postMessageToRPCClient: n,
                    frameId: i,
                    version: r,
                    encoding: a,
                    logger: l,
                    postClose: s,
                    onSendingToRPCClient: (e, t) => {
                        (pY.default.isLoggingOverlayEvents || (e.cmd !== P.e$_.OVERLAY && e.evt !== P.ZE4.OVERLAY)) &&
                            l.info(`Socket Emit: ${t}`, (0, pK.A)(e));
                    },
                });
            },
            (e, t, n) => {
                (pY.default.isLoggingOverlayEvents || e.cmd !== P.e$_.OVERLAY) &&
                    t.info(`Socket Message: ${n.id}`, (0, pK.A)(e));
            },
        )),
        window.addEventListener("message", (e) => {
            if (window === e.source) return;
            if (null == e.source || null == e.source.postMessage) return void p1.error("Unknown event source");
            let t = e.source,
                n = e.data,
                i = e.origin;
            s.handleMessage(n, i, (e, n) => {
                !(function (e) {
                    try {
                        return e.closed;
                    } catch {
                        return !1;
                    }
                })(t) && t.postMessage(e, n);
            });
        }),
        s),
    p6 = { ...Ej, ...E9, ...pn, ...pT, ...pN, ...pf.A, ...pO, ...pM, ...pP, ...pG, ...pj, ...pF, ...pB, ...pI, ...pk },
    p5 = { ...EW, ...Eq, ...E$, ...EZ },
    p4 = {
        server: Ez.A,
        commands: p6,
        events: p5,
        stores: [ce.default],
        transports: [p2],
        registerTransportsForEmbeddedPlatform: function () {
            e0.Ay.ensureModule("discord_rpc").then(() => {
                for (let e of [n(33006).A, n(998921).A]) Ez.A.registerTransport(e);
            });
        },
    },
    p3 = new (class {
        rpcServer;
        transports;
        rpcCommandHandlers;
        rpcEventHandlers;
        stores;
        registerTransportsForEmbeddedPlatform;
        constructor(e) {
            (this.rpcServer = e.server),
                (this.transports = e.transports),
                (this.rpcCommandHandlers = e.commands),
                (this.rpcEventHandlers = e.events),
                (this.stores = e.stores),
                (this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform);
        }
        loadServer() {
            for (let e of (G.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports))
                this.rpcServer.registerTransport(e);
            for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
            for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
        }
        init() {
            (this.rpcServer.getCurrentUser = () => ty.default.getCurrentUser()),
                (this.rpcServer.onConnect = (e) => {
                    X.h.dispatch({ type: "RPC_APP_CONNECTED", socketId: e.id, application: e.application }),
                        ec.default.track(P.HAw.AUTHORIZED_APP_CONNECTED, {
                            app_id: e.application.id,
                            transport: e.transport,
                        });
                }),
                (this.rpcServer.onDisconnect = (e, t) => {
                    X.h.dispatch({
                        type: "RPC_APP_DISCONNECTED",
                        socketId: e.id,
                        application: e.application,
                        reason: t,
                    });
                });
            let e = [rl.A, sw.Ay, hC.A, dd.A, eO.Ay, e3.A];
            new T.ru(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"),
                X.h.subscribe("MESSAGE_CREATE", this.handleMessage),
                X.h.subscribe("MESSAGE_UPDATE", this.handleMessage),
                X.h.subscribe("MESSAGE_DELETE", this.handleMessage),
                X.h.subscribe("SPEAKING", this.handleSpeaking),
                X.h.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
                X.h.subscribe("GUILD_CREATE", this.handleGuildCreate),
                X.h.subscribe("CHANNEL_CREATE", this.handleChannelCreate),
                X.h.subscribe("LOGOUT", this.handleLogout),
                X.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
                X.h.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
                X.h.subscribe("ACTIVITY_JOIN", this.handleActivityJoin),
                X.h.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
                X.h.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
                X.h.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
                X.h.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
                X.h.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
                X.h.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
                X.h.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
                X.h.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
                X.h.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
                X.h.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
                X.h.subscribe("USER_UPDATE", this.handleUserUpdate),
                X.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
                X.h.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
                X.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
        }
        terminate() {
            X.h.unsubscribe("MESSAGE_CREATE", this.handleMessage),
                X.h.unsubscribe("MESSAGE_UPDATE", this.handleMessage),
                X.h.unsubscribe("MESSAGE_DELETE", this.handleMessage),
                X.h.unsubscribe("SPEAKING", this.handleSpeaking),
                X.h.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
                X.h.unsubscribe("GUILD_CREATE", this.handleGuildCreate),
                X.h.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate),
                X.h.unsubscribe("LOGOUT", this.handleLogout),
                X.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
                X.h.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
                X.h.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin),
                X.h.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
                X.h.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
                X.h.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
                X.h.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
                X.h.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
                X.h.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
                X.h.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
                X.h.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
                X.h.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
                X.h.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
                X.h.unsubscribe("USER_UPDATE", this.handleUserUpdate),
                X.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
                X.h.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
                X.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
        }
        handleMessage = (e) => {
            let t, n, i;
            if (0 === this.rpcServer.subscriptions.length) return;
            "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
            let r = null;
            switch (e.type) {
                case "MESSAGE_CREATE":
                    if ("SENDING" === e.message.state) return;
                    (t = P.ZE4.MESSAGE_CREATE), (n = e.channelId), (i = e.message), (r = `${t}${e.message.id}`);
                    break;
                case "MESSAGE_UPDATE":
                    (t = P.ZE4.MESSAGE_UPDATE), (n = e.message.channel_id), (i = e.message);
                    break;
                case "MESSAGE_DELETE":
                    (t = P.ZE4.MESSAGE_DELETE), (n = e.channelId), (i = { id: e.id }), (r = `${t}${e.id}`);
                    break;
                default:
                    return (0, lt.xb)(e);
            }
            null != n &&
                this.rpcServer.dispatchToSubscriptions(
                    t,
                    { channel_id: n },
                    { channel_id: n, message: (0, hT.Yj)(i) },
                    r,
                );
        };
        handleSpeaking = (e) => {
            if (0 === this.rpcServer.subscriptions.length) return;
            let t = 0 !== e.speakingFlags ? P.ZE4.SPEAKING_START : P.ZE4.SPEAKING_STOP;
            if (e.context === ey.x.DEFAULT) {
                let n = et.A.getVoiceChannelId();
                if (null != n) {
                    let i = rl.A.getChannel(n);
                    if (null == i) return;
                    let r = dd.A.getVoiceState(i.getGuildId(), e.userId);
                    if (null == r) return;
                    this.rpcServer.dispatchToSubscriptions(
                        t,
                        { channel_id: r.channelId },
                        { channel_id: r.channelId, user_id: e.userId },
                    );
                }
            }
        };
        handleVoiceChannelSelect = (e) => {
            let { guildId: t, channelId: n } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(P.ZE4.VOICE_CHANNEL_SELECT, {}, { channel_id: n, guild_id: t });
        };
        handleNotificationCreate = (e) => {
            let { channelId: t, message: n, icon: i, title: r, body: a } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(
                    P.ZE4.NOTIFICATION_CREATE,
                    {},
                    {
                        channel_id: t,
                        message: (0, hT.Yj)(n),
                        icon_url: null != i ? (0, hT.hk)(i) : null,
                        title: r,
                        body: a,
                    },
                );
        };
        handleActivityJoin = (e) => {
            let { applicationId: t, parentApplicationId: n, secret: i, intent: r, embedded: a } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let l = { application_id: t, secret: i };
            a && (l.intent = r),
                this.rpcServer.dispatchToSubscriptions(
                    P.ZE4.ACTIVITY_JOIN,
                    (e) => e.socket.application.id === t || (null != n && e.socket.application.parentId === n),
                    l,
                ),
                this.rpcServer.dispatchToSubscriptions(P.ZE4.GAME_JOIN, (e) => e.socket.application.id === t, l);
        };
        handleActivityLayoutModeUpdate = (e) => {
            let { applicationId: t, layoutMode: n } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = n !== hy.bN.FOCUSED;
            this.rpcServer.dispatchToSubscriptions(
                P.ZE4.ACTIVITY_PIP_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                { is_pip_mode: i },
            );
            let r = { layout_mode: n };
            this.rpcServer.dispatchToSubscriptions(
                P.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                r,
            ),
                this.rpcServer.dispatchToSubscriptions(
                    P.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    r,
                );
        };
        handleFrameUpdateLayoutMode = (e) => {
            let { applicationId: t, layoutMode: n } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = n === ns.y.PIP ? hy.bN.PIP : hy.bN.FOCUSED,
                r = i !== hy.bN.FOCUSED;
            this.rpcServer.dispatchToSubscriptions(
                P.ZE4.ACTIVITY_PIP_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                { is_pip_mode: r },
            );
            let a = { layout_mode: i };
            this.rpcServer.dispatchToSubscriptions(
                P.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                a,
            ),
                this.rpcServer.dispatchToSubscriptions(
                    P.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    a,
                );
        };
        handleThermalStateChange = (e) => {
            let { applicationId: t } = e;
            if (0 === this.rpcServer.subscriptions.length || null == t) return;
            let n = { thermal_state: hm() };
            this.rpcServer.dispatchToSubscriptions(P.ZE4.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, n);
        };
        handleScreenOrientationUpdate = (e) => {
            let { screenOrientation: t } = e;
            0 === this.rpcServer.subscriptions.length ||
                this.rpcServer.dispatchToSubscriptions(P.ZE4.ORIENTATION_UPDATE, {}, { screen_orientation: t });
        };
        handleEmbeddedActivityUpdate = () => {
            if (0 === this.rpcServer.subscriptions.length) return;
            let e = hO();
            this.rpcServer.dispatchToSubscriptions(P.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
        };
        handleActivityMessage = (e) => {
            let { channelId: t, message: n } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let { application: i, activity: r } = n;
            if (null == i || null == r || null == r.party_id) return;
            let a = ty.default.getUser(n.author?.id);
            if (null == a) return;
            let l = ty.default.getCurrentUser();
            if (null == l || a.id === l.id) return;
            let s =
                r.type === P.xL.JOIN_REQUEST
                    ? hC.A.getApplicationActivity(l.id, i.id)
                    : hC.A.getApplicationActivity(a.id, i.id);
            if (null == s || null == s.party || s.party.id !== r.party_id) return;
            let o = s.application_id;
            switch (r.type) {
                case P.xL.JOIN:
                    this.rpcServer.dispatchToSubscriptions(
                        P.ZE4.ACTIVITY_INVITE,
                        (e) => e.socket.application.id === o,
                        { user: (0, hS.A)(a), activity: s, type: r.type, channel_id: t, message_id: n.id },
                    );
                    break;
                case P.xL.JOIN_REQUEST:
                    this.rpcServer.dispatchToSubscriptions(
                        P.ZE4.ACTIVITY_JOIN_REQUEST,
                        (e) => e.socket.application.id === o,
                        { user: (0, hS.A)(a), activity: s, type: r.type, channel_id: t, message_id: n.id },
                    );
            }
        };
        handleOAuth2TokenRevoke = (e) => {
            let { accessToken: t } = e;
            this.rpcServer.sockets.forEach((e) => {
                e.authorization.accessToken === t && e.close(P.YI$.TOKEN_REVOKED, "Token revoked");
            });
        };
        handleGuildCreate = (e) => {
            let {
                    guild: { id: t },
                } = e,
                n = nW.A.getGuild(t);
            0 !== this.rpcServer.subscriptions.length &&
                null != n &&
                this.rpcServer.dispatchToSubscriptions(P.ZE4.GUILD_CREATE, {}, { id: t, name: n.name });
        };
        handleChannelCreate = (e) => {
            let {
                channel: { id: t, name: n, type: i },
            } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(P.ZE4.CHANNEL_CREATE, {}, { id: t, name: n, type: i });
        };
        handleLogout = () => {
            this.rpcServer.sockets.forEach((e) => e.close(P.YI$.CLOSE_NORMAL, "User logout"));
        };
        handleRelationshipAdd = (e) => {
            let {
                relationship: { id: t, type: n },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = ty.default.getUser(t);
            if (null == i) return;
            let r = (0, hT.Gc)(n, i);
            this.rpcServer.dispatchToSubscriptions(P.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, hT.LP)(r, e.socket.application.id),
            );
        };
        handleRelationshipUpdate = (e) => {
            let {
                relationship: { id: t, type: n },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = ty.default.getUser(t);
            if (null == i) return;
            let r = (0, hT.Gc)(n, i);
            this.rpcServer.dispatchToSubscriptions(P.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, hT.LP)(r, e.socket.application.id),
            );
        };
        handleRelationshipRemove = (e) => {
            let {
                relationship: { id: t },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let n = ty.default.getUser(t);
            if (null == n) return;
            let i = (0, hT.Gc)(P.eA$.NONE, n);
            this.rpcServer.dispatchToSubscriptions(P.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, hT.LP)(i, e.socket.application.id),
            );
        };
        handlePresenceUpdates = (e) => {
            let { updates: t } = e;
            if (0 !== this.rpcServer.subscriptions.length)
                for (let e of new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ).values()) {
                    let t = eQ.A.getRelationshipType(e);
                    if (t === P.eA$.NONE) continue;
                    let n = ty.default.getUser(e);
                    if (null == n) continue;
                    let i = (0, hT.Gc)(t, n);
                    this.rpcServer.dispatchToSubscriptions(P.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                        (0, hT.LP)(i, e.socket.application.id),
                    );
                }
        };
        handlePresencesReplace = () => {
            if (0 !== this.rpcServer.subscriptions.length)
                for (let [e, t] of eQ.A.getMutableRelationships().entries()) {
                    if (t === P.eA$.NONE) continue;
                    let n = ty.default.getUser(e);
                    if (null == n) continue;
                    let i = (0, hT.Gc)(t, n);
                    this.rpcServer.dispatchToSubscriptions(P.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                        (0, hT.LP)(i, e.socket.application.id),
                    );
                }
        };
        handleUserUpdate = (e) => {
            let {
                user: { id: t },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let n = eQ.A.getRelationshipType(t);
            if (n === P.eA$.NONE) return;
            let i = ty.default.getUser(t);
            if (null == i) return;
            let r = (0, hT.Gc)(n, i);
            this.rpcServer.dispatchToSubscriptions(P.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, hT.LP)(r, e.socket.application.id),
            );
        };
        handleEntitlementCreate = (e) => {
            let { entitlement: t } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(
                    P.ZE4.ENTITLEMENT_CREATE,
                    (e) => e.socket.application.id === t.application_id,
                    { entitlement: t },
                );
        };
        handleEntitlementDelete = (e) => {
            let { entitlement: t } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(
                    P.ZE4.ENTITLEMENT_DELETE,
                    (e) => e.socket.application.id === t.application_id,
                    { entitlement: t },
                );
        };
        handleQuestEnrollSuccess = (e) => {
            let { enrolledQuestUserStatus: t } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let n = t.questId,
                i = hI.A.getQuest(n);
            if (null == i) return;
            let r = (0, hg.TP)(i);
            null != r &&
                this.rpcServer.dispatchToSubscriptions(
                    P.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE,
                    (e) => e.socket.application.id === r && e.args?.quest_id === n,
                    { quest_id: n, is_enrolled: null != t.enrolledAt, enrolled_at: t.enrolledAt },
                );
        };
    })(p4);
var p8 = n(138298),
    p7 = n(940382),
    p9 = n(594061);
class me extends Z.A {
    _initialize() {
        __OVERLAY__ ||
            (X.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived),
            X.h.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally),
            X.h.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect),
            X.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened));
    }
    _terminate() {
        __OVERLAY__ ||
            (X.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived),
            X.h.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally),
            X.h.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect),
            X.h.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened));
    }
    _playSound = function (e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            arguments.length > 2 && arguments[2],
            arguments.length > 3 && arguments[3];
    };
    _stopAndClearSounds = () => {};
    _handleToggleSelfDeafened = () => {
        eO.Ay.isDeaf() && this._stopAndClearSounds();
    };
    _handleSoundboardSoundReceived = (e) => {
        let { soundId: t, soundVolume: n, userId: i, channelId: r } = e;
        if (null != t && i !== M.default.getId()) return this._playSound(t, n, i, r);
    };
    _handleSoundboardSoundPlayLocally = (e) => {
        let { sound: t, channelId: n } = e,
            i = M.default.getId();
        return this._playSound(t.soundId, t.volume, i, n);
    };
    _handleVoiceChannelSelect = () => {
        this._stopAndClearSounds();
    };
}
var mt = n(102597),
    mn = n(904054),
    mi = n(205693),
    mr = n(602674),
    ma = n(76788),
    ml = n(738011),
    ms = n(536184);
let mo = new Map();
async function md(e) {
    let t = mo.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        i = (0, mr.v)(),
        r = await i?.decodeAudioData(n);
    return null != r && mo.set(e, r), r;
}
let mu = new uY.A("SoundboardManager");
class mc extends me {
    playingSoundsWeb = new Map();
    _initialize() {
        super._initialize(),
            __OVERLAY__ ||
                (X.h.subscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                ),
                X.h.subscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState));
    }
    _terminate() {
        super._terminate(),
            __OVERLAY__ ||
                (X.h.unsubscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                ),
                X.h.unsubscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState));
    }
    _stopAndClearSounds = () => {
        eO.Ay.supports(ey.O5.SAMPLE_PLAYBACK) &&
            eO.Ay.getMediaEngine().eachConnection((e) => {
                e.stopAllSamplesLocalPlayback();
            }),
            this.playingSoundsWeb.forEach((e) => {
                e.pause(), (e.src = "");
            }),
            (this.playingSoundsWeb = new Map());
    };
    _playSound = (() => {
        var e = this;
        return async function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                i = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0,
                a = null != r && et.A.getVoiceChannelId() === r;
            if ((null == r || a) && !eO.Ay.isDeaf() && !Ef.A.isLocalSoundboardMuted(i))
                try {
                    let r = {
                        soundKey: `${i}-${t}`,
                        soundURL: (0, mt.A)(t),
                        soundVolume: (0, mn.A)(n),
                        reportSoundStartedPlaying: () => (0, ET.dZ)(t, i),
                    };
                    eO.Ay.supports(ey.O5.SAMPLE_PLAYBACK)
                        ? await (function (e) {
                              let { soundKey: t, soundURL: n, soundVolume: i, reportSoundStartedPlaying: r } = e;
                              return new Promise(async (e, a) => {
                                  let l = await md(n);
                                  null == l && e(),
                                      eO.Ay.getMediaEngine().eachConnection((n) => {
                                          n.context === mi.x.DEFAULT &&
                                              (r(),
                                              ex()(null != l, "audioBuffer cannot be null here"),
                                              n.startSamplesLocalPlayback(t, l, i, (t, n) => {
                                                  0 !== t ? a(Error(`${n}`)) : e();
                                              }));
                                      });
                              });
                          })(r)
                        : await (function (e, t) {
                              let { soundKey: n, soundURL: i, soundVolume: r, reportSoundStartedPlaying: a } = e,
                                  l = t.get(n);
                              if (null != l) {
                                  l.currentTime = 0;
                                  return;
                              }
                              return new Promise(async (e) => {
                                  let l = new (await (0, ms.A)(i))();
                                  (l.src = i),
                                      (l.volume = (0, mn.A)(r)),
                                      l.addEventListener(
                                          l instanceof ma.A.OGVPlayer ? "loadedmetadata" : "canplaythrough",
                                          () => {
                                              a(),
                                                  t.set(n, l),
                                                  l.play()?.catch((i) => {
                                                      if ((0, ml.u)(i)) {
                                                          eA.A.captureException(i, {
                                                              tags: { errorType: "autoplay_policy", expected: "true" },
                                                          }),
                                                              t.delete(n),
                                                              (l.src = ""),
                                                              e();
                                                          return;
                                                      }
                                                      throw i;
                                                  });
                                          },
                                      ),
                                      l.addEventListener("ended", () => {
                                          t.delete(n), (l.src = ""), e();
                                      });
                              });
                          })(r, e.playingSoundsWeb);
                } catch (e) {
                    mu.warn(`Error playing soundboard sound: ${e.message}`);
                } finally {
                    (0, ET.g0)(t, i);
                }
        };
    })();
    _handleRTCConnectionState = (e) => {
        let { state: t } = e;
        t === P.S7L.RTC_CONNECTED && (p9.bW.loadIfNecessary(), (0, ET.E7)({ disableAnalytics: !0 }));
    };
    _handleOverlaySoundboardSoundsFetchRequest = () => {
        (0, ET.E7)();
    };
    _handleOpenEducationModal = (e, t) => {
        if (null == e) return;
        let i = rl.A.getChannel(t),
            r = Ai.Ay.getKeybindForAction(P.hCu.SOUNDBOARD_HOLD);
        null != i &&
            (0, oq.Ay)(i) &&
            null != r &&
            oY.A.hasHotspot(lO._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
            (0, f.openModalLazy)(async () => {
                let { default: t } = await n.e("51143").then(n.bind(n, 888762));
                return (n) => (0, p.jsx)(t, { ...n, guildId: e, keybind: r, channel: i });
            });
    };
}
let m_ = new mc();
class mA extends Z.A {
    _initialize() {
        X.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        X.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e,
            n = M.default.getId();
        t.forEach((e) => {
            e.userId === n &&
                rl.A.getChannel(e.channelId)?.isGuildStageVoice() &&
                (0, o7.eY)(e) !== o7.zF.ON_STAGE &&
                (this.handleStopStream(e), this.handleStopUserVideo());
        });
    };
    handleStopStream = (e) => {
        let t = ra.A.getActiveStreamForUser(e.userId, e.guildId);
        null != t && (0, _X.vN)((0, _1._z)(t), !1);
    };
    handleStopUserVideo = () => {
        eO.Ay.isVideoEnabled() && ef.A.setVideoEnabled(!1);
    };
}
let mh = new mA(),
    mE = "STAGE_INVITED_TO_SPEAK_MODAL";
class mp extends Z.A {
    _initialize() {
        X.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        X.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e,
            i = M.default.getId(),
            r = oP.A.getSession()?.sessionId,
            a = t.find((e) => e.userId === i && e.sessionId === r);
        if (null == a) return;
        let l = a.channelId;
        if (null == l) {
            (0, f.hasModalOpen)(mE) && (0, f.closeModal)(mE);
            return;
        }
        let s = rl.A.getChannel(l);
        if (!s?.isGuildStageVoice()) return;
        let o = (0, o7.eY)(a) === o7.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        if (null != s && o) {
            if ((0, f.hasModalOpen)(mE)) return;
            (0, f.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("90037").then(n.bind(n, 427412));
                    return (t) => (0, p.jsx)(e, { ...t, channel: s });
                },
                { modalKey: mE, onCloseRequest: P.FXj },
            );
        }
    };
}
let mm = new mp();
var mI = n(863922),
    mg = n(353202);
n(667532);
var mC = n(989349),
    mT = n.n(mC),
    mf = n(724066),
    mN = n(100767),
    mS = n(379418),
    mO = n(9842),
    mL = n(761640),
    my = n(317525),
    mb = n(54570),
    mv = n(8880);
n(75804);
let mD = [],
    mR = null,
    mM = null,
    mP = null,
    mw = /\|\|([\s\S]+?)\|\|/g;
function mx(e, t, n, i) {
    let r = nW.A.getGuild(n),
        a = e
            .replace(mw, k.intl.string(k.t["F+x38C"]))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                let i = ty.default.getUser(t);
                return null == i ? k.intl.string(k.t.sKdZ6U) : (sw.Ay.getNick(n, i.id) ?? du.Ay.getName(i));
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != r ? my.A.getRole(r.id, t) : null;
                return null != n && null != n.name ? n.name : k.intl.string(k.t["YV4F/n"]);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = rl.A.getChannel(t);
                return null == n ? k.intl.string(k.t.J90oLW) : (0, a3.m1)(n, ty.default, eQ.A);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => `${k.intl.string(k.t.sMOuuS)} ${t}`)
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => `/${t}`)
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let i = mS.kx[n],
                    r = 1e3 * parseInt(t, 10),
                    a = mT()(r);
                return null != i ? i(a) : a.format();
            });
    return null == i
        ? k.intl.formatToPlainString(k.t["uIj77/"], { username: t, body: a })
        : k.intl.formatToPlainString(k.t["Ix4H+j"], { username: t, body: a, replyUsername: i });
}
function mU() {
    if (!mN.$j) return !1;
    let e = EU.default.locale;
    null == mP && (mP = window.speechSynthesis?.getVoices());
    let t = mP.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    mM = t.length > 0 ? t[0] : null;
}
async function mG(e, t, n, i, r) {
    let a = mN.aW(e, n);
    null !== a &&
        (null == mM && mU(),
        t ? await (0, mb.pr)() : mR?.removeEventListener("end", mb.pr),
        a.addEventListener("end", mb.pr),
        null != i && a.addEventListener("start", i),
        null != r && a.addEventListener("end", r),
        (mR = a),
        mN.wz(a, mM));
}
function mk(e, t, n, i, r) {
    mG(e, t, r, () => {
        (0, mb.kC)(n, i);
    });
}
function mj(e) {
    let { text: t, interrupt: n, maxLength: i, onStart: r, onEnd: a } = e;
    mG(t, n, i, r, a);
}
function mV() {
    return null !== mR && mR.removeEventListener("end", mb.pr), mN._X(), (mR = null), !0;
}
function mH(e) {
    let { message: t, channel: n } = e,
        i = t.type === P.lAJ.REPLY ? mO.A.getMessageByReference(t.messageReference) : null,
        r = i?.state === mO.a.LOADED ? i?.message?.author : null,
        a = null != r ? (sw.Ay.getNick(n.guild_id, r?.id) ?? du.Ay.getName(r)) : null,
        l = n.getGuildId(),
        s = sw.Ay.getNick(l, t.author.id) ?? du.Ay.getName(t.author);
    return mk(mx(t.content, s, l, a), !0, n.id, t.id), !0;
}
function mB(e) {
    let { channelId: t, message: n, optimistic: i } = e;
    if (i || eO.Ay.isSelfDeaf()) return !1;
    let r = rl.A.getChannel(t);
    if (null == r) return !1;
    let a = et.A.getChannelId(),
        l = mL.Ay.getCurrentSidebarChannelId(a),
        s = t === a || t === l,
        o = iU.on.getSetting() && n.tts && s,
        d = eZ.A.getTTSType(),
        u = n.author?.id !== M.default.getId() && (d === P.aVn.ALL_CHANNELS || (d === P.aVn.SELECTED_CHANNEL && s));
    if ((o || u) && !eQ.A.isBlockedOrIgnoredForMessage(n)) {
        if (mD.indexOf(n.id) >= 0) return !1;
        mD.unshift(n.id) > 10 && mD.pop();
        let e = r.getGuildId();
        if (null != e && u8.Ay.getMutedChannels(e).has(t)) return !1;
        let i = sw.Ay.getNick(e, n.author?.id) ?? du.Ay.getName(n.author) ?? "",
            a = n.type === P.lAJ.REPLY ? n.referenced_message?.author : null,
            l = null != a ? (sw.Ay.getNick(e, a?.id) ?? du.Ay.getName(a)) : null;
        mk(mx(n.content, i, e, l), !1, r.id, n.id, 200);
    }
    return !1;
}
function mF(e) {
    let { id: t, channelId: n } = e,
        i = mv.A.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, mb.pr)(), !0);
}
function mY() {
    eO.Ay.isSelfDeaf() && mN._X();
}
function mK(e) {
    let { channelId: t } = e,
        n = mv.A.currentMessage;
    null != n && n.channelId !== t && (0, mb.pr)();
}
let mW = {
    init() {
        X.h.subscribe("SPEAK_TEXT", mj),
            X.h.subscribe("SPEAK_MESSAGE", mH),
            X.h.subscribe("STOP_SPEAKING", mV),
            X.h.subscribe("MESSAGE_CREATE", mB),
            X.h.subscribe("MESSAGE_DELETE", mF),
            X.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", mY),
            X.h.subscribe("CHANNEL_SELECT", mK),
            X.h.subscribe("USER_SETTINGS_PROTO_UPDATE", mU),
            (0, mf.I)(mU);
    },
};
var mz = n(975732),
    mq = n(403777),
    m$ = n(80556);
let mX = (0, n(250105).Ay)({
    name: "2026-04-safety-flows",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var mZ = n(907135),
    mQ = n(446868),
    mJ = n(665095),
    m0 = n(639719),
    m1 = n(53516),
    m2 = n(87404);
let m6 = {
    init() {
        X.h.subscribe("CONNECTION_OPEN", this.handleRequiredAction),
            X.h.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction),
            X.h.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate),
            M.default.addChangeListener(this.handleAuthenticationStoreChanged);
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        !lk.P.isDisallowPopupsSet() &&
            null != ty.default.getCurrentUser() &&
            (t === P.a3B.REQUIRE_CAPTCHA ||
            t === P.a3B.REQUIRE_VERIFIED_EMAIL ||
            t === P.a3B.REQUIRE_VERIFIED_PHONE ||
            t === P.a3B.REQUIRE_REVERIFIED_PHONE ||
            t === P.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE ||
            t === P.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            t === P.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            mQ.A.isEmailReverification(t)
                ? (function (e) {
                      let { location: t } = e;
                      return mX.getConfig({ location: t }).enabled;
                  })({ location: "verification-legacy" })
                    ? (0, rJ.B8)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, p.jsx)(mZ.A, { onClose: t });
                          },
                          { layerKey: m2._s, Layer: m$.Ay },
                      )
                    : (0, rJ.B8)(() => (0, p.jsx)(mJ.A, {}), { layerKey: m2._s, Layer: m$.Ay })
                : t === P.a3B.AGREEMENTS
                  ? (0, f.openModal)((e) => (0, p.jsx)(m0.default, { ...e }), {
                        modalKey: m2.i$,
                        onCloseRequest: rh.FX,
                        dismissable: !1,
                    })
                  : t === P.a3B.REQUIRE_SAFETY_FLOWS
                    ? (0, rJ.B8)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, p.jsx)(mZ.A, { onClose: t });
                          },
                          { layerKey: m2._s, Layer: m$.Ay },
                      )
                    : null == t && ((0, rJ.dF)(m2._s), (0, f.hasModalOpen)(m2.i$) && (0, f.closeModal)(m2.i$)));
    },
    handleAuthenticationStoreChanged() {
        null == M.default.getId() &&
            ((0, rJ.dF)(m2._s),
            (0, f.closeModal)(m2.i$),
            (0, f.closeModal)(m2.Pr),
            (0, f.closeModal)(m2.H1),
            (0, f.closeModal)(m1.V));
    },
    handleCurrentUserUpdate(e) {
        let { user: t } = e;
        t.verified && (0, f.closeModal)(m2.H1);
    },
};
var m5 = n(803805),
    m4 = n(761821);
let m3 = "selectedChannelGuildFrecency";
function m8(e) {
    let { state: t } = T.Ay.PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", [
        (e) =>
            null == e
                ? { favorites: [], timesFavorited: 0 }
                : Array.isArray(e)
                  ? { favorites: e, timesFavorited: 0 }
                  : e,
        (e) => (Array.isArray(e.favorites) ? e : { favorites: [], timesFavorited: 0 }),
    ]);
    return null == t || 0 === t.favorites.length
        ? []
        : t.favorites.map((n, i) => {
              let r = m5.tC.create();
              return (
                  (r.format = "IMAGE" === n.format ? m5.TL.IMAGE : "VIDEO" === n.format ? m5.TL.VIDEO : m5.TL.NONE),
                  (r.src = n.src),
                  (r.width = n.width),
                  (r.height = n.height),
                  (r.order = t.favorites.length - i + e),
                  { url: n.url, favorite: r }
              );
          });
}
let m7 = [
    {
        version: 2,
        run(e) {
            let t = m8(1);
            if (0 === t.length) return !1;
            for (let { url: n, favorite: i } of (null == e.favoriteGifs && (e.favoriteGifs = m5.uz.create()),
            (e.favoriteGifs.gifs = {}),
            t))
                e.favoriteGifs.gifs[n] = i;
            return (e.favoriteGifs.hideTooltip = t.length > 2), !0;
        },
        cleanup() {},
    },
    {
        version: 3,
        run(e) {
            function t() {
                return { usageHistory: {}, favorites: [] };
            }
            let { state: n } = T.Ay.PersistedStore.migrateAndReadStoreState("StickersPersistedStore", [
                (e) => (null == e || 0 === Object.keys(e).length ? t() : e),
                (e) =>
                    null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e),
            ]);
            if (null == n) return !1;
            let i = !1;
            return (
                n.favorites.length > 0 &&
                    ((e.favoriteStickers = m5.tQ.create()),
                    (e.favoriteStickers.stickerIds = eG().uniq(n.favorites).slice(0, 250)),
                    (i = !0)),
                eG().size(n.usageHistory) > 0 &&
                    ((e.stickerFrecency = m5.Do.create()),
                    (e.stickerFrecency.stickers = (0, m4.Mr)(n.usageHistory, 100)),
                    (i = !0)),
                i
            );
        },
        cleanup() {
            ta.w.remove("StickersPersistedStore");
        },
    },
    {
        version: 4,
        run(e) {
            let { state: t } = T.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ usageHistory: ta.w.get("EmojiUsageHistory") || {} }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.favorites &&
                    t.favorites.length > 0 &&
                    ((e.favoriteEmojis = m5.gW.create()),
                    (e.favoriteEmojis.emojis = eG().uniq(t.favorites).slice(0, 250)),
                    (n = !0)),
                eG().size(t.usageHistory) > 0 &&
                    ((e.emojiFrecency = m5.Q8.create()),
                    (e.emojiFrecency.emojis = (0, m4.Mr)(t.usageHistory, 100)),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            ta.w.remove("EmojiStore"), ta.w.remove("EmojiUsageHistory"), ta.w.remove("EmojiDiversitySurrogate");
        },
    },
    {
        version: 6,
        run(e) {
            null == e.favoriteGifs && (e.favoriteGifs = m5.uz.create()),
                null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
            let t = m8(1);
            if (0 === t.length) return !1;
            eG()(e.favoriteGifs.gifs)
                .values()
                .sortBy("order")
                .forEach((e, n) => (e.order = t.length + 1 + n));
            let n = m5.uz.toBinary(e.favoriteGifs).length,
                i = 0;
            for (let { url: r, favorite: a } of t) {
                if (((a.order = t.length - i), i++, r in e.favoriteGifs.gifs)) {
                    e.favoriteGifs.gifs[r].order = a.order;
                    continue;
                }
                let l = m5.tC.toBinary(a).length + r.length + 7;
                n + l > 762880 || ((n += l), (e.favoriteGifs.gifs[r] = a));
            }
            for (n = m5.uz.toBinary(e.favoriteGifs).length; n > 762880; ) {
                let t = 0;
                for (let n in e.favoriteGifs.gifs) if ((delete e.favoriteGifs.gifs[n], ++t >= 10)) break;
                n = m5.uz.toBinary(e.favoriteGifs).length;
            }
            return !0;
        },
        cleanup() {},
    },
    {
        version: 7,
        run(e) {
            let { state: t } = T.Ay.PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []);
            if (null == t) return !1;
            let n = !1;
            return (
                eG().size(t.usageHistory) > 0 &&
                    ((e.applicationCommandFrecency = m5.Zc.create()),
                    (e.applicationCommandFrecency.applicationCommands = (0, m4.Mr)(t.usageHistory, 500)),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            ta.w.remove("ApplicationCommandFrecency");
        },
    },
    {
        version: 8,
        run(e) {
            let { state: t } = T.Ay.PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []);
            if (null == t) return !1;
            let n = !1;
            return (
                eG().size(t.favoriteSounds) > 0 &&
                    ((e.favoriteSoundboardSounds = m5.Qn.create()),
                    sU.default.keys(t.favoriteSounds).forEach((n) => {
                        new Set(t.favoriteSounds[n]).forEach((t) => {
                            e.favoriteSoundboardSounds?.soundIds.push(t);
                        });
                    }),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            ta.w.remove("SoundboardFavoriteStore");
        },
    },
    {
        version: 9,
        run(e) {
            let t = ta.w.get(m3);
            if (null == t) return !1;
            for (let e in t) P.Ut1.test(e) || delete t[e];
            return (
                (e.guildAndChannelFrecency = m5.F1.create()),
                (e.guildAndChannelFrecency.guildAndChannels = (0, m4.Mr)(t, 100)),
                !0
            );
        },
        cleanup() {
            ta.w.remove(m3);
        },
    },
    {
        version: 10,
        run(e) {
            if (null == e.emojiFrecency) return !1;
            let t = e.emojiFrecency.emojis ?? {},
                n = !1;
            if (eG().size(t) > 0) {
                let t = m5.Q8.create();
                m5.Q8.mergePartial(t, e.emojiFrecency),
                    null != e.emojiReactionFrecency && m5.Q8.mergePartial(t, e.emojiReactionFrecency),
                    (e.emojiReactionFrecency = t),
                    (n = !0);
            }
            return n;
        },
        cleanup() {},
    },
];
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var m9 = n(873298),
    Ie = n(406935),
    It = n(168186),
    In = n(460288),
    Ii = n(573879);
function Ir(e, t) {
    let n = !1;
    return (
        null == e.userContent &&
            (e.userContent = {
                dismissedContents: new Uint8Array(),
                lastReceivedChangelogId: "0",
                recurringDismissibleContentStates: {},
            }),
        null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array()),
        (0, In.c0)(e.userContent.dismissedContents, t) ||
            ((e.userContent.dismissedContents = (0, In.Vf)(e.userContent.dismissedContents, t)), (n = !0)),
        n
    );
}
function Ia(e, t, n) {
    return !!lO.HP.hasHiddenHotspot(t) && Ir(e, n);
}
let Il = [
    {
        version: 2,
        run(e) {
            if (null != e.inbox) return !1;
            let t = !1,
                n = m9.Q0.create();
            (e.inbox = n), ta.w.get("seenInboxTutorial", !1) && ((n.viewedTutorial = !0), (t = !0));
            let i = ta.w.get("recentsButtonTab2");
            null != i && ((n.currentTab = "Recent Mentions" === i ? m9.Y2.MENTIONS : m9.Y2.UNREADS), (t = !0));
            let r = ta.w.get("unread-messages-collapsed-channels") ?? {};
            for (let n in r) {
                if (!r[n]) continue;
                let i = rl.A.getChannel(n);
                null != i &&
                    ((t = !0),
                    (0, m4.gc)(e, i.guild_id ?? "0", i.id, (e) => {
                        e.collapsedInInbox = !0;
                    }));
            }
            return t;
        },
        cleanup() {
            ta.w.remove("seenInboxTutorial"),
                ta.w.remove("recentsButtonTab2"),
                ta.w.remove("unread-messages-collapsed-channels");
        },
    },
    {
        version: 3,
        run(e) {
            let { state: t } = T.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ diversitySurrogate: ta.w.get("EmojiDiversitySurrogate") || "" }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.diversitySurrogate &&
                    "" !== t.diversitySurrogate &&
                    (null == e.textAndImages && (e.textAndImages = m9.oJ.create()),
                    null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = Ie.hU.create()),
                    (e.textAndImages.diversitySurrogate.value = t.diversitySurrogate),
                    (n = !0)),
                n
            );
        },
        cleanup() {},
    },
    {
        version: 4,
        run(e) {
            let t = !1;
            return (
                (!0 === ta.w.get("HAS_SEEN_HUB_UPSELL") ||
                    lO.HP.hasHiddenHotspot(lO._2.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) &&
                    (t = Ir(e, i6.M.HUB_WAITLIST_UPSELL)),
                t
            );
        },
        cleanup() {
            ta.w.remove("HAS_SEEN_HUB_UPSELL");
        },
    },
    {
        version: 5,
        run(e) {
            let t = !1;
            (e.textAndImages = e.textAndImages ?? m9.oJ.create()),
                (e.notifications = e.notifications ?? m9.TY.create()),
                (e.privacy = e.privacy ?? m9.E.create()),
                (e.voiceAndVideo = e.voiceAndVideo ?? m9.GY.create()),
                (e.gameLibrary = e.gameLibrary ?? m9.F1.create()),
                (e.debug = e.debug ?? m9.X9.create());
            let n = ta.w.get("UserSettingsStore") ?? {};
            return (
                "boolean" == typeof n.useRichChatTextBox &&
                    ((e.textAndImages.useRichChatInput = Ie._t.create({ value: n.useRichChatTextBox })), (t = !0)),
                "string" == typeof n.renderSpoilers &&
                    ((e.textAndImages.renderSpoilers = Ie.hU.create({ value: n.renderSpoilers })), (t = !0)),
                "boolean" == typeof n.useThreadSidebar &&
                    ((e.textAndImages.useThreadSidebar = Ie._t.create({ value: n.useThreadSidebar })), (t = !0)),
                "boolean" == typeof n.showInAppNotifications &&
                    ((e.notifications.showInAppNotifications = Ie._t.create({ value: n.showInAppNotifications })),
                    (t = !0)),
                n.emojiPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.emojiPickerCollapsedSections = n.emojiPickerCollapsedSections), (t = !0)),
                n.stickerPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.stickerPickerCollapsedSections = n.stickerPickerCollapsedSections), (t = !0)),
                "boolean" == typeof n.viewImageDescriptions &&
                    ((e.textAndImages.viewImageDescriptions = Ie._t.create({ value: n.viewImageDescriptions })),
                    (t = !0)),
                "boolean" == typeof n.showCommandSuggestions &&
                    ((e.textAndImages.showCommandSuggestions = Ie._t.create({ value: n.showCommandSuggestions })),
                    (t = !0)),
                "boolean" == typeof n.alwaysPreviewVideo &&
                    ((e.voiceAndVideo.alwaysPreviewVideo = Ie._t.create({ value: n.alwaysPreviewVideo })), (t = !0)),
                "boolean" == typeof n.notifyFriendsOnGoLive &&
                    ((e.notifications.notifyFriendsOnGoLive = Ie._t.create({ value: n.notifyFriendsOnGoLive })),
                    (t = !0)),
                "boolean" == typeof n.installShortcutDesktop &&
                    ((e.gameLibrary.installShortcutDesktop = Ie._t.create({ value: n.installShortcutDesktop })),
                    (t = !0)),
                "boolean" == typeof n.installShortcutStartMenu &&
                    ((e.gameLibrary.installShortcutStartMenu = Ie._t.create({ value: n.installShortcutStartMenu })),
                    (t = !0)),
                "boolean" == typeof n.allowActivityPartyPrivacyFriends &&
                    ((e.privacy.allowActivityPartyPrivacyFriends = Ie._t.create({
                        value: n.allowActivityPartyPrivacyFriends,
                    })),
                    (t = !0)),
                "boolean" == typeof n.allowActivityPartyPrivacyVoiceChannel &&
                    ((e.privacy.allowActivityPartyPrivacyVoiceChannel = Ie._t.create({
                        value: n.allowActivityPartyPrivacyVoiceChannel,
                    })),
                    (t = !0)),
                "boolean" == typeof n.rtcPanelShowVoiceStates &&
                    ((e.debug.rtcPanelShowVoiceStates = Ie._t.create({ value: n.rtcPanelShowVoiceStates })), (t = !0)),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 7,
        run: (e) => Ia(e, lO._2.APPLICATION_COMMAND_TOOLTIP, i6.M.APPLICATION_COMMAND_TOOLTIP),
        cleanup() {},
    },
    {
        version: 8,
        run: (e) => Ia(e, lO._2.CHANNEL_BANNER_MEMBER_LIST_NOTICE, i6.M.CHANNELINFO_CHANNELBANNER_NOTICE),
        cleanup() {},
    },
    {
        version: 9,
        run: (e) => (
            lO.HP.hasHiddenHotspot(lO._2.MULTI_ACCOUNT_TOOLTIP) && ta.w.set(Ii.JE, "true"),
            Ia(e, lO._2.MULTI_ACCOUNT_TOOLTIP, i6.M.ACCOUNT_MULTIACCOUNT_TOOLTIP)
        ),
        cleanup() {},
    },
    {
        version: 10,
        run(e) {
            let t = Ia(e, lO._2.HUB_LINK_CHANNEL_NOTICE, i6.M.CHANNEL_NOTICE_HUBLINK),
                n = ta.w.get("channelNotices") ?? {};
            return (
                !1 === n[P.n5X.INVITE] && Ir(e, i6.M.CHANNEL_NOTICE_INVITE) && (t = !0),
                !1 === n[P.n5X.QUICKSWITCHER] && Ir(e, i6.M.CHANNEL_NOTICE_QUICKSWITCHER) && (t = !0),
                !1 === n[P.n5X.GUILD_BOOSTING] && Ir(e, i6.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (t = !0),
                t
            );
        },
        cleanup() {
            ta.w.remove("channelNotices");
        },
    },
    {
        version: 11,
        run(e) {
            let t = !1;
            return (
                Ia(e, lO._2.GUILD_EVENT_UPSELL, i6.M.GUILD_HEADER_EVENT_UPSELL) && (t = !0),
                Ia(e, lO._2.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, i6.M.GUILD_HEADER_ANIMATED_GUILD_BANNER) &&
                    (t = !0),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 12,
        run(e) {
            let t = !1;
            return (
                ta.w.get("hideNag") && Ir(e, i6.M.NAGBAR_NOTICE_DOWNLOAD) && (t = !0),
                ta.w.get("hideConnectSpotify") && Ir(e, i6.M.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0),
                ta.w.get("hideConnectPlayStation") && Ir(e, i6.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0),
                t
            );
        },
        cleanup() {
            ta.w.remove("hideNag"), ta.w.remove("hideConnectSpotify"), ta.w.remove("hideConnectPlayStation");
        },
    },
    {
        version: 13,
        run(e) {
            let t = !1;
            return (
                ta.w.get("hidePremiumPromo") && Ir(e, i6.M.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0),
                ta.w.get("hidePremiumTier2TrialEnding") &&
                    Ir(e, i6.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (t = !0),
                ta.w.get("hidePremiumReactivateNotice") && Ir(e, i6.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0),
                t
            );
        },
        cleanup() {
            ta.w.remove("hidePremiumPromo"),
                ta.w.remove("hidePremiumTier2TrialEnding"),
                ta.w.remove("hidePremiumReactivateNotice");
        },
    },
    { version: 14, run: (e) => Ia(e, lO._2.ACTIVITY_BEB_TUTORIAL, i6.M.ACTIVITIES_TUTORIAL_COACH_MARK), cleanup() {} },
    { version: 15, run: (e) => Ia(e, lO._2.NOW_PLAYING_CONSENT_CARD, i6.M.NOW_PLAYING_CONSENT_CARD), cleanup() {} },
    {
        version: 16,
        run(e) {
            let t = ta.w.get("PromotionsPersistedStore");
            if (null == t) return !1;
            let n = t._state.lastDismissedOutboundPromotionStartDate;
            return (
                null != n &&
                (null == e.userContent && (e.userContent = m9.YW.create()),
                null == e.userContent.lastDismissedOutboundPromotionStartDate) &&
                ((e.userContent.lastDismissedOutboundPromotionStartDate = Ie.hU.create({ value: n })), !0)
            );
        },
        cleanup() {},
    },
    {
        version: 17,
        run(e) {
            let { state: t } = T.Ay.PersistedStore.migrateAndReadStoreState(
                "ExpressionSuggestionsPersistedStore",
                null,
            );
            if (null == t) return !1;
            let n = t.expressionSuggestionsEnabled;
            return (
                null != n &&
                (null == e.textAndImages && (e.textAndImages = m9.oJ.create()),
                null == e.textAndImages.expressionSuggestionsEnabled) &&
                ((e.textAndImages.expressionSuggestionsEnabled = Ie._t.create({ value: n })), !0)
            );
        },
        cleanup() {
            ta.w.remove("ExpressionSuggestionsPersistedStore");
        },
    },
    {
        version: 18,
        run(e) {
            let t = !1;
            return (
                Ia(e, lO._2.GUILD_DELETE_FEEDBACK, i6.M.GUILD_DELETE_FEEDBACK) && (t = !0),
                Ia(e, lO._2.GUILD_LEAVE_FEEDBACK, i6.M.GUILD_LEAVE_FEEDBACK) && (t = !0),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 19,
        run(e) {
            let t = !1;
            return ta.w.get("forumHelperCardStorageKey") && (t = Ir(e, i6.M.FORUM_CHANNEL_HELPER_CARD)), t;
        },
        cleanup() {
            ta.w.remove("forumHelperCardStorageKey");
        },
    },
    {
        version: 20,
        run(e) {
            let t = ta.w.get("lastChangeLogId");
            if (null == t) return !1;
            if (!(0, It.hT)(t)) return ta.w.remove("lastChangeLogId"), !1;
            if (null == e.userContent) e.userContent = m9.YW.create();
            else if (
                null != e.userContent &&
                null != e.userContent.lastReceivedChangelogId &&
                "0" !== e.userContent.lastReceivedChangelogId
            )
                return ta.w.remove("lastChangeLogId"), !1;
            return (e.userContent.lastReceivedChangelogId = t), !0;
        },
        cleanup() {
            ta.w.remove("lastChangeLogId");
        },
    },
    {
        version: 21,
        run: (e) => e.appearance?.uiDensity === m9.NS.COMPACT && ((e.appearance.uiDensity = m9.NS.DEFAULT), !0),
        cleanup() {},
    },
];
var Is = n(405892);
let Io = {
    init() {
        (Is.A[d1.oD.PRELOADED_USER_SETTINGS] = Il),
            (Is.A[d1.oD.FRECENCY_AND_FAVORITES_SETTINGS] = m7),
            X.h.subscribe("CONNECTION_OPEN", Id),
            X.h.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", Iu),
            X.h.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", Ic),
            X.h.subscribe("APP_STATE_UPDATE", I_);
    },
};
function Id() {
    let e = cP.A.getFullState(),
        t = e[d1.oD.PRELOADED_USER_SETTINGS];
    t.editInfo.triggeredMigrations && p9.wc.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs),
        eG().forEach(p9.Df, (t, n) => {
            let i = e[Number(n)];
            null != i.editInfo.offlineEditDataVersion &&
                null != i.editInfo.protoToSave &&
                t.scheduleSaveFromOfflineEdit();
        });
}
function Iu(e) {
    let {
        settings: { proto: t, type: n },
        delaySeconds: i,
        jitter: r,
    } = e;
    p9.Df[n].markDirty(t, { delaySeconds: i, jitter: r });
}
function Ic(e) {
    let { settingsType: t } = e;
    p9.Df[t].loadIfNecessary();
}
function I_(e) {
    let { state: t } = e;
    ("inactive" === t || "background" === t) &&
        eG().forEach(p9.Df, (e, t) => {
            null != cP.A.getFullState()[Number(t)].editInfo.timeout &&
                (e.logger.log("Triggering persistChanges due to AppStateUpdate"), e.persistChanges());
        });
}
function IA() {
    let e = l;
    if (null == e || !n_.A.isOpen(e)) return !1;
    X.h.wait(() => na.VN(e)), e3.A.getRTCConnection()?.setPipOpen(!1), (l = null);
}
function Ih() {
    let e = e3.A.getChannelId(),
        t = l === e;
    if (
        (function () {
            let e = e3.A.getChannelId(),
                t = et.A.getChannelId();
            if (!eO.Ay.supports(ey.O5.VIDEO) || eS.A.getWindowOpen(P.MLl.CHANNEL_CALL_POPOUT)) return !0;
            let n = null != e && ra.A.getAllActiveStreams().some((t) => !tx.A.isParticipantPoppedOut(e, (0, _1._z)(t)));
            if (
                !(
                    (null != e &&
                        Object.values(dd.A.getVideoVoiceStatesForChannel(e)).some((t) => {
                            let { userId: n } = t;
                            return !eO.Ay.isLocalVideoDisabled(n) && !tx.A.isParticipantPoppedOut(e, n);
                        })) ||
                    n
                )
            )
                return !0;
            let i = nc.A.hasLayers();
            return !(i && nc.A.getLayers().includes(P.zgK.RTC_DEBUG)) && (!!i || e === t);
        })()
    )
        return IA();
    if ((t || IA(), null == e)) return !1;
    let n = rl.A.getChannel(e);
    return (
        !(null == n || n_.A.isOpen(e)) &&
        (X.h.wait(() => na.ho(n.id, P.o1q.VIDEO, { channel: n })),
        e3.A.getRTCConnection()?.setPipOpen(!0),
        void (l = e))
    );
}
class IE extends Z.A {
    _initialize() {
        et.A.addChangeListener(Ih),
            en.A.addChangeListener(Ih),
            e3.A.addChangeListener(Ih),
            dd.A.addChangeListener(Ih),
            nc.A.addChangeListener(Ih),
            ra.A.addChangeListener(Ih),
            eS.A.addChangeListener(Ih),
            eO.Ay.addChangeListener(Ih),
            og.Ay.addChangeListener(Ih),
            tx.A.addChangeListener(Ih);
    }
    _terminate() {
        et.A.removeChangeListener(Ih),
            en.A.removeChangeListener(Ih),
            e3.A.removeChangeListener(Ih),
            dd.A.removeChangeListener(Ih),
            nc.A.removeChangeListener(Ih),
            ra.A.removeChangeListener(Ih),
            eS.A.removeChangeListener(Ih),
            eO.Ay.removeChangeListener(Ih),
            og.Ay.removeChangeListener(Ih),
            tx.A.removeChangeListener(Ih);
    }
}
let Ip = new IE();
var Im = n(885576);
let II = new eu.Ep(),
    Ig = new eu.Ep();
class IC extends Z.A {
    _initialize() {
        X.h.subscribe("IDLE", this.handleIdleUpdate);
    }
    _terminate() {
        II.stop(), Ig.stop(), X.h.unsubscribe("IDLE", this.handleIdleUpdate);
    }
    handleIdleUpdate() {
        let e = Im.A.getIdleSince();
        if (!G.isPlatformEmbedded) return;
        for (let e of (II.stop(), Ig.stop(), ra.A.getAllActiveStreams())) if (e.state !== P.XYD.ENDED) return;
        if (null == e) return;
        let t = e3.A.getChannelId();
        if (null == t) return;
        Ig.start(18e6, () => {
            y.default.selectVoiceChannel(null);
        });
        let n = nW.A.getGuild(e3.A.getGuildId());
        if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
        let i = rl.A.getChannel(t);
        null == i ||
            i.isGuildStageVoice() ||
            II.start(e + n.afkTimeout * e_.A.Millis.SECOND - Date.now(), () => {
                null != (n = nW.A.getGuild(e3.A.getGuildId())) &&
                    null != n.afkChannelId &&
                    y.default.selectVoiceChannel(n.afkChannelId, !1, !1, { bypassIdleUpdate: !0 });
            });
    }
}
let IT = new IC();
var If = n(565058),
    IN = n(340829);
let IS = !1,
    IO = null,
    IL = {
        init() {
            X.h.subscribe("CONNECTION_OPEN", (e) => {
                let { pendingPayments: t } = e;
                if (null != t && t.length > 0) {
                    var i;
                    if (IO === t[0] || null == (IO = t[0])) return;
                    (i = IO),
                        IS ||
                            ((IS = !0),
                            (0, f.openModalLazy)(async () => {
                                let { default: e } = await n.e("56999").then(n.bind(n, 302810));
                                return (t) => {
                                    let { transitionState: n, onClose: r } = t;
                                    return (0, p.jsx)(e, {
                                        pendingPayment: i,
                                        transitionState: n,
                                        onClose: () => ((IS = !1), r()),
                                    });
                                };
                            }));
                }
            });
        },
    };
var Iy = n(612181);
n(115036), n(943577), n(131319), n(794383), n(530789), n(712687), n(328968), n(67480), n(116956), n(304296), n(628965);
let Ib = P.XlH.CLOSED,
    Iv = {},
    ID = null;
function IR() {
    let e = ty.default.getCurrentUser();
    if (null == e) return IM();
    (Ib = P.XlH.OPEN),
        (Iv = {}),
        (ID = {
            ...{
                userId: e.id,
                username: e.username,
                discriminator: e.discriminator,
                email: e.email,
                avatar: e.avatar,
                password: "",
                newPassword: null,
                claimed: e.isClaimed(),
            },
        });
}
function IM() {
    (Ib = P.XlH.CLOSED), (ID = null), (Iv = {});
}
function IP() {
    (Ib = P.XlH.OPEN), (Iv = {});
}
class Iw extends T.Ay.Store {
    static displayName = "UserSettingsAccountStore";
    initialize() {
        this.waitFor(ty.default);
    }
    getErrors() {
        return Iv;
    }
    getSubmitting() {
        return Ib === P.XlH.SUBMITTING;
    }
    getSettings() {
        return ID;
    }
}
new Iw(X.h, {
    USER_SETTINGS_MODAL_OPEN: function () {
        IR();
    },
    USER_SETTINGS_MODAL_INIT: IR,
    USER_SETTINGS_MODAL_CLOSE: IM,
    LOGOUT: IM,
    USER_SETTINGS_MODAL_SUBMIT: function () {
        Ib = P.XlH.SUBMITTING;
    },
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: function (e) {
        if (Ib !== P.XlH.SUBMITTING) return !1;
        (Ib = P.XlH.OPEN), (Iv = e.errors ?? {});
    },
    USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function (e) {
        let { settings: t } = e;
        null == ID && (ID = {}), (ID = { ...ID, ...t });
    },
    USER_SETTINGS_MODAL_SUBMIT_COMPLETE: IP,
    USER_SETTINGS_MODAL_RESET: function () {
        let e = ty.default.getCurrentUser();
        IP(),
            null != e &&
                (ID = {
                    ...{
                        userId: e.id,
                        username: e.username,
                        discriminator: e.discriminator,
                        email: e.email,
                        avatar: e.avatar,
                        password: "",
                        newPassword: null,
                        claimed: e.isClaimed(),
                    },
                });
    },
}),
    n(836602),
    n(555337),
    n(863036),
    n(291731),
    n(176360),
    n(439119),
    n(279061),
    n(750128),
    n(921955);
let Ix = !1;
(0, eg.as)(), T.Ay.initialize(), p3.loadServer();
let IU = (0, C.Fe)({
        createPromise: () => n.e("11415").then(n.bind(n, 844358)),
        webpackId: 844358,
        name: "UnauthenticatedDeepLinkActivity",
        renderLoader: d6,
    }),
    IG = (0, C.Fe)({
        createPromise: () => n.e("15243").then(n.bind(n, 190662)),
        webpackId: 190662,
        name: "ApplicationDirectoryRoutes",
        renderLoader: d6,
    });
G.isPlatformEmbedded &&
    (e0.Ay.on("USER_SETTINGS_OPEN", (e, t) => {
        (0, e4.openUserSettings)();
    }),
    e0.Ay.on("LAUNCH_APPLICATION", async (e, t) => {
        let i = _T.A.getActiveLibraryApplication(t);
        (await Promise.resolve().then(n.bind(n, 715671))).playApplication(t, i, {
            analyticsParams: { location: { page: P.liQ.DIRECT, object: P.ZSU.WEB_URL } },
        });
    }));
let Ik = B((e) => {
        let { location: t } = e;
        return (
            (0, _v.B)(() => {
                let e = R.A.getHighestState();
                if (e === P.fAW.OPEN || e === P.fAW.OPENING) return;
                let n = (0, sM.parseSettingsUrl)({ path: t.pathname, search: t.search });
                (0, sM.trackParseSettingsUrl)(n, "deeplink"),
                    (0, e4.openUserSettings)(n.target, { path: n.path, searchParams: n.params });
            }),
            (0, p.jsx)(x, {
                deepLinkType: tR.XK.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, search: i, installationId: r } = e,
                        [, , a, l] = t.split("/");
                    return { path: t, section: a, subsection: l, fingerprint: n, installationId: r, search: i };
                },
                children: (0, p.jsx)(g.rd, { to: sP.A.defaultRoute }),
            })
        );
    }),
    Ij = B((e) => {
        let { location: t } = e,
            i = (0, Ay.parsePlaygroundUrl)(t.pathname);
        return (
            (0, _v.B)(() => {
                let { openPlaygroundFromParsedUrl: e } = n(965042);
                e({ match: i });
            }),
            (0, p.jsx)(x, {
                deepLinkType: tR.XK.PLAYGROUND,
                path: t.pathname,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, installationId: i } = e,
                        { collection: r, story: a } = (0, Ay.parsePlaygroundUrl)(t);
                    return { path: t, collection: r, story: a, fingerprint: n, installationId: i };
                },
                children: (0, p.jsx)(g.rd, { to: sP.A.defaultRoute }),
            })
        );
    }),
    IV = T.Ay.connectStores([ig.A, sP.A, M.default], () => ({
        isConnected: ig.A.isConnected(),
        defaultRoute: sP.A.defaultRoute,
        defaultRouteFallback: sP.A.fallbackRoute,
        token: M.default.getToken(),
    }))(
        class extends m.Component {
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, p.jsx)(g.rd, { to: P.BVt.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = IW(t);
                    return null == e ||
                        ((e.params.guildId === P.ME || null != nW.A.getGuild(e.params.guildId)) &&
                            null != rl.A.getChannel(e.params.channelId))
                        ? (0, p.jsx)(g.rd, { to: t })
                        : (0, p.jsx)(g.rd, { to: i });
                }
                return null;
            }
        },
    ),
    IH = B((0, eT.C)(cy, null, { passProps: !1 })),
    IB = (0, eT.C)(IG, null, { passProps: !1 }),
    IF = [
        P.BVt.GUILD_BOOSTING_MARKETING(sv.pv.guildId()),
        ...Array.from(iZ.qW).map((e) => P.BVt.CHANNEL(sv.pv.guildId(), e)),
    ];
function IY(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: r = null } = e.params;
    return { guildId: t ?? P.ME, channelId: n, messageId: i, threadId: r };
}
let IK = [
    {
        path: [P.BVt.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, Iy.wR)() || M.default.getLoginStatus() === P.aUe.LOGGING_IN || !M.default.allowLogoutRedirect()
                ? IH(e)
                : (0, p.jsx)(IU, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [P.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render: function (e) {
            let { match: t } = e,
                { inviteCode: n } = t.params;
            return (
                (0, _v.B)(() => {
                    _M({ code: n });
                }),
                (0, p.jsx)(g.rd, { to: sP.A.defaultRoute })
            );
        },
    },
    {
        path: [P.BVt.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, _v.B)(() => {
                    (0, O.G)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, hn.h)({ processedCode: t.code });
                    });
                }),
                (0, p.jsx)(g.rd, { to: sP.A.defaultRoute })
            );
        },
    },
    { path: [P.BVt.APP], render: () => (0, p.jsx)(IV, {}) },
    {
        path: [P.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, _v.B)(() =>
                    (0, mz.openUserProfileModal)({ userId: n, sourceAnalyticsLocations: [eC.A.URI_SCHEME] }),
                ),
                (0, p.jsx)(g.rd, { to: sP.A.defaultRoute })
            );
        },
    },
    {
        path: [P.BVt.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: i, action: r } = t.params;
            return (
                IN.A.whenInitialized(() => {
                    _T.A.whenInitialized(() => {
                        switch (r) {
                            case "launch": {
                                let e = _T.A.getActiveLibraryApplication(i);
                                if (null == e) return;
                                Promise.resolve()
                                    .then(n.bind(n, 715671))
                                    .then((t) => {
                                        t.playApplication(e.id, e, {
                                            analyticsParams: {
                                                location: { page: P.liQ.DIRECT, object: P.ZSU.WEB_URL },
                                            },
                                        });
                                    });
                                break;
                            }
                            case "test-mode":
                                _f.A.whenInitialized(() => b.q1(i));
                                break;
                            case "uninstall": {
                                let e = _T.A.getActiveLibraryApplication(i);
                                if (null == e) return;
                                (0, S.z)(e.id, e.branchId, P.ThZ.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, p.jsx)(g.rd, { to: P.BVt.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [P.BVt.GUILD_CREATE],
        render: function () {
            return (
                (0, _v.B)(() => c8.A.openCreateGuildModal({ location: "External link" })),
                (0, p.jsx)(g.rd, { to: sP.A.defaultRoute })
            );
        },
    },
    {
        path: [P.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: i, subsection: r } = t.params,
                a = (0, I.parse)(location.search).feature;
            return (
                (0, _v.B)(() => {
                    var e;
                    return (
                        (e = { section: (0, _P.A)(P.BEX, i), subsection: (0, _P.A)(P.nd0, r), feature: a }),
                        void (0, f.openModalLazy)(
                            async () => {
                                let { default: t } = await n.e("66460").then(n.bind(n, 980791));
                                return (n) => (0, p.jsx)(t, { ...n, ...e });
                            },
                            { modalKey: "Guild Settings Picker Modal" },
                        )
                    );
                }),
                (0, p.jsx)(g.rd, { to: sP.A.defaultRoute })
            );
        },
    },
    {
        path: [P.BVt.DEVELOPER_ACTIVATE_APPLICATION_TEST_MODE],
        render: function (e) {
            let { location: t } = e,
                n = (0, I.parse)(t.search),
                i = "string" == typeof n.applicationId ? n.applicationId : null,
                r = "true" === n.openGameProfile;
            return (
                (0, _v.B)(() => {
                    null != i &&
                        b.q1(i).then((e) => {
                            null != e &&
                                (0, c4.nf)(c4.HP.APPLICATION_TEST_MODE_DEBUG, { shouldAutoOpenGameProfile: r });
                        });
                }),
                (0, p.jsx)(g.rd, { to: sP.A.defaultRoute })
            );
        },
    },
    { path: [P.BVt.SETTINGS(":section", ":subsection?")], render: Ik },
    { path: [P.BVt.PLAYGROUND(":collection?", ":story?")], render: Ij },
    {
        path: [P.BVt.USER_GUILD_NOTIFICATION_SETTINGS(sv.pv.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, _v.B)(() => {
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("30282"), n.e("50893")]).then(n.bind(n, 893605));
                        return (t) => (0, p.jsx)(e, { ...t, guildId: i });
                    });
                }),
                (0, p.jsx)(g.rd, { to: P.BVt.CHANNEL(i) })
            );
        },
    },
    {
        path: [P.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, _v.B)(() => (0, e4.openUserSettings)(e5.X.GIFT_PANEL)), (0, p.jsx)(g.rd, { to: sP.A.defaultRoute })
            );
        },
    },
    {
        path: [P.BVt.WELCOME(sv.pv.guildId({ optional: !0 }), sv.pv.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, AA.C)(AT.zY.MARKETING_UNCLAIMED);
            let r = P.BVt.CHANNEL(n, i);
            return (0, p.jsx)(g.rd, { to: r });
        },
    },
    {
        path: [P.BVt.GUILD_EVENT_DETAILS(sv.pv.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, _v.B)(() => {
                    (0, ln.uR)({ eventId: i });
                }),
                (0, p.jsx)(g.rd, { to: P.BVt.CHANNEL(n) })
            );
        },
    },
    {
        path: [P.BVt.GUILD_SETTINGS(sv.pv.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: r } = t.params;
            return (
                (0, _v.B)(() => {
                    ad.A.open(n, (0, _P.A)(P.BEX, i), void 0, (0, _P.A)(P.nd0, r));
                }),
                (0, p.jsx)(g.rd, { to: P.BVt.CHANNEL(n) })
            );
        },
        isChatRoute: !0,
    },
    {
        path: [
            P.BVt.CHANNEL_THREAD_VIEW(sv.pv.guildId(), sv.pv.channelId(), ":threadId", ":messageId?"),
            P.BVt.CHANNEL(sv.pv.guildId(), sv.pv.channelId({ optional: !0 }), ":messageId?"),
            P.BVt.ACTIVITY,
            P.BVt.ACTIVITIES,
            P.BVt.ACTIVITIES_HAPPENING_NOW,
            P.BVt.APPLICATION_LIBRARY,
            P.BVt.APPLICATION_STORE,
            P.BVt.MESSAGE_REQUESTS,
            P.BVt.COLLECTIBLES_SHOP,
            P.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
            P.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            P.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
            P.BVt.GUILD_DISCOVERY,
            P.BVt.QUEST_HOME_DEPRECATED,
            P.BVt.QUEST_HOME,
            P.BVt.ICYMI,
            P.BVt.GLOBAL_DISCOVERY,
            P.BVt.GUILD_MEMBER_VERIFICATION(sv.pv.guildId()),
            P.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(sv.pv.guildId(), ":inviteCode?"),
            P.BVt.GUILD_BOOSTING_MARKETING(sv.pv.guildId()),
            P.BVt.GUILD_FEATURE(":feature", sv.pv.guildId()),
            P.BVt.FEATURE(":feature"),
            P.BVt.FAMILY_CENTER,
        ],
        render: IH,
        isChatRoute: !0,
    },
    { path: [P.BVt.APPLICATION_DIRECTORY], render: IB },
    {
        path: [P.BVt.GAME_SHOP(sv.pv.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: i, shopSlug: r } = t.params;
            return (0, p.jsx)(g.rd, { to: P.BVt.CHANNELS_GAME_SHOP(n, 0, i, r) });
        },
    },
];
function IW(e) {
    for (let { path: t, isChatRoute: n } of IK) {
        if (!n) continue;
        let i = (0, sD.B)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function Iz(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!ig.A.isConnected()) return;
    let { location: r } = (0, tL.JK)();
    r.pathname === i && (null == rl.A.getChannel(t) ? (0, tL.bG)(P.BVt.CHANNEL(n)) : (0, tL.bG)(i));
}
class Iq extends m.PureComponent {
    historyUnlisten = () => {};
    rewriterUnlisten = () => {};
    componentDidMount() {
        e0.Ay.setZoomFactor(F.A.zoom),
            p3.init(),
            eP.initialize(),
            AJ.initialize(),
            _p.initialize(),
            IT.initialize(),
            _C.initialize(),
            hi.A.initialize(),
            c9.initialize(),
            Ac.initialize(),
            Y.A.init(),
            _b.init(),
            _N.init(),
            AL.initialize(),
            ed.initialize(),
            _o.initialize(),
            hu.initialize(),
            q.Ay.initialize(),
            nI.initialize(),
            Ip.initialize(),
            _B.initialize(),
            Aq.initialize(),
            z.A.initialize(),
            _F.init(),
            cZ.init(),
            IL.init(),
            W.A.initialize(),
            mW.init(),
            If.A.init(),
            m6.init(),
            mh.initialize(),
            mm.initialize(),
            mq.A.initialize(),
            Io.init(),
            _r.initialize(),
            K.A.initialize(),
            m_.initialize(),
            AU.A.initialize(),
            Ax.initialize(),
            Aj.initialize(),
            c0.initialize(),
            c5.initialize(),
            __.initialize(),
            _q.initialize(),
            A_.A.initialize(),
            hc.A.initialize(),
            ht.initialize(),
            cR.initialize(),
            eI.initialize(),
            (this.rewriterUnlisten = r7.A.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = r7.A.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        p3.terminate(),
            IT.terminate(),
            hi.A.terminate(),
            AJ.terminate(),
            eP.terminate(),
            q.Ay.terminate(),
            nI.terminate(),
            Ip.terminate(),
            z.A.terminate(),
            hu.terminate(),
            Aq.terminate(),
            mq.A.terminate(),
            W.A.terminate(),
            _r.terminate(),
            A_.A.terminate(),
            K.A.terminate(),
            hc.A.terminate(),
            m_.terminate(),
            AU.A.terminate(),
            Ax.terminate(),
            Aj.terminate(),
            c0.terminate(),
            c5.terminate(),
            ht.terminate(),
            _d.A.terminate(),
            cR.terminate(),
            eI.terminate(),
            __.terminate(),
            _q.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (ig.A.isConnected() || ig.A.isTryingToConnect()) return;
            let t = M.default.getToken();
            null == t ||
                ((function (e) {
                    for (let t of hh) if (null != (0, sD.B)(e, { path: t })) return !0;
                    return !1;
                })(e) &&
                    N.A.startSession(t));
        })(t),
            (function (e, t) {
                let n = IW(e);
                if (null == n) return;
                let { guildId: i, channelId: r, messageId: a, threadId: l } = IY(n),
                    s = (0, sv.nn)(i),
                    o = (0, sv.ts)(r),
                    d = (0, sv.ts)(l),
                    u = en.A.getGuildId(),
                    c = u !== i;
                if ((s && c && L.A.selectGuild(i), s && o)) {
                    let n = et.A.getChannelId(u),
                        s = n !== r,
                        o = null != mL.Ay.getGuildSidebarState(i);
                    if (!Ix || c || s || null != a) {
                        (Ix = !0), y.default.selectChannel({ guildId: i, channelId: r, messageId: a });
                        let { summaryId: e } = (0, I.parse)(t);
                        null != e && mI.Ay.setSelectedSummary(r, e);
                    }
                    if (
                        (o &&
                            s &&
                            null != r &&
                            null != mL.Ay.getCurrentSidebarChannelId(r) &&
                            p8.A.closeChannelSidebar(r),
                        null != l && d)
                    ) {
                        let e = mL.Ay.getCurrentSidebarChannelId(n),
                            t = e !== l;
                        if (null != r && null != l && t)
                            if (o) (0, tL.bG)(P.BVt.CHANNEL(i, l, a));
                            else {
                                let e = { type: p7.LU.THREAD };
                                null != a && (e.initialMessageId = a),
                                    p8.A.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: r,
                                        channelId: l,
                                        details: e,
                                    });
                            }
                        else o && null != e && null != r && p8.A.closeChannelSidebar(r);
                    } else null == r || s || p8.A.closeChannelSidebar(r);
                    let _ = sp.getIsOpen();
                    if (r === iZ.VV.ROLE_SUBSCRIPTIONS) sA.closeSidebar();
                    else if (c && _) {
                        let t = null == u && i === P.ME,
                            n = e === P.BVt.GUILD_DISCOVERY;
                        t || n ? sA.closeSidebar() : sA.openSidebar();
                    } else ((s && _) || (!c && !s)) && sA.closeSidebar();
                } else IF.some((t) => (0, sD.B)(e, t)?.isExact === !0) || (0, tL.bG)(sP.A.fallbackRoute);
            })(t, n),
            (0, _e.MS)();
    }
    ensureChannelMatchesGuild(e) {
        if (!ig.A.isConnected()) return null;
        let { pathname: t } = e,
            n = IW(t);
        if (null == n) return null;
        let { guildId: i, channelId: r, threadId: a } = IY(n),
            l = (0, sv.nn)(i) && i !== P.ME && i !== P.YYv;
        if (null != r && (0, sv.ts)(r) && !(0, iZ.jq)(r) && l) {
            let n = rl.A.getChannel(r);
            if (null == n) mg.A.loadThread(r).then(() => Iz({ channelId: r, guildId: i, pathname: t }));
            else if (n.guild_id !== i && i !== P.gNP) return { path: P.BVt.CHANNEL(i), state: e.state };
            if (null != a) {
                if (!((0, sv.ts)(a) && !(0, iZ.jq)(r))) return null;
                let n = rl.A.getChannel(a);
                if (null == n) mg.A.loadThread(a).then(() => Iz({ channelId: a, guildId: i, pathname: t }));
                else if (n?.parent_id !== r)
                    return p8.A.closeChannelSidebar(r), { path: P.BVt.CHANNEL(i, r), state: e.state };
            }
        }
        return null;
    }
    render() {
        return (0, p.jsxs)(m.Fragment, {
            children: [
                (0, p.jsxs)(g.dO, {
                    children: [
                        (0, p.jsx)(g.rd, { exact: !0, from: "/channels", to: "/" }),
                        IK.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, p.jsx)(g.qh, { path: t, render: n }, t[0]);
                        }),
                        (0, p.jsx)(g.rd, { to: "/" }),
                    ],
                }),
                (0, p.jsx)(c3.A, {}),
            ],
        });
    }
}
let I$ = Iq;
