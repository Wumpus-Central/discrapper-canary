let i, r, a, l;
n.r(t), n.d(t, { default: () => IA });
var s,
    o,
    d,
    c,
    u,
    _,
    A,
    h,
    E = n(627968),
    p = n(64700),
    m = n(492462),
    I = n(873263),
    g = n(156828),
    C = n(17928),
    f = n(192308),
    T = n(830215),
    N = n(258057),
    S = n(869038),
    L = n(686956),
    O = n(956793),
    y = n(271866),
    b = n(607399),
    v = n(197111),
    R = n(10088),
    P = n(495544),
    D = n(652215);
let x = b.Fr || b.v1;
function w(e) {
    let { children: t, deepLinkType: n, path: i, paramsBuilder: r, search: a } = e,
        l = (0, C.bG)([P.default], () => P.default.getFingerprint() ?? P.default.getId()),
        s = (0, C.bG)([P.default], () => P.default.getInstallationForTracking()),
        o = (0, C.bG)([R.A], () => R.A.getState(i), [i]),
        d = p.useMemo(
            () =>
                null == r
                    ? { path: i, fingerprint: l, installationId: s, search: a }
                    : r({ path: i, fingerprint: l, search: a, installationId: s }),
            [i, r, l, s, a],
        );
    return (
        p.useEffect(() => {
            x || (null == o && v.A.openNativeAppModal(i, D.e$_.DEEP_LINK, { type: n, params: d }));
        }, [o, i, d, n]),
        t
    );
}
var M = n(854378),
    U = n(723702),
    G = n(985018),
    j = n(370227);
let k = n(843020);
function V(e) {
    let { children: t } = e,
        n = (0, C.bG)([R.A], () => R.A.getHighestState());
    return (0, U.isDesktop)() || n !== D.fAW.OPENING
        ? (0, U.isDesktop)() || n !== D.fAW.OPEN
            ? t
            : (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsx)("img", { className: j.Lq, src: k, alt: "" }),
                      (0, E.jsx)("div", {
                          className: j.kL,
                          children: (0, E.jsxs)(M.Ay, {
                              children: [
                                  (0, E.jsx)(M.hE, { className: j.Ns, children: G.intl.string(G.t.csrAMJ) }),
                                  (0, E.jsx)(M.tK, { children: G.intl.string(G.t.ghBJz9) }),
                              ],
                          }),
                      }),
                  ],
              })
        : (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsx)("img", { className: j.Lq, src: k, alt: "" }),
                  (0, E.jsx)("div", {
                      className: j.kL,
                      children: (0, E.jsxs)(M.Ay, {
                          children: [
                              (0, E.jsx)(M.hE, { children: G.intl.string(G.t["Z+hCVU"]) }),
                              (0, E.jsx)(M.CK, {}),
                          ],
                      }),
                  }),
              ],
          });
}
function F(e) {
    function t(t) {
        return (0, E.jsx)(V, { children: (0, E.jsx)(e, { ...t }, "deeplink-wrapper") });
    }
    return (t.displayName = `Deeplink(${e.displayName ?? e.name ?? "<Unknown>"})`), t;
}
var H = n(775602),
    B = n(502229),
    Y = n(836753),
    $ = n(196492),
    z = n(869003),
    W = n(315206),
    K = n(892491),
    q = n(228366),
    X = n(272355),
    Z = n(36149),
    Q = n(381689),
    J = n(260509),
    ee = n(309010),
    et = n(967198),
    en = n(323073),
    ei = n(329972),
    er = n(784578),
    ea = n(204925),
    el = n(835002);
class es extends X.A {
    _initialize() {
        q.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            q.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect),
            q.h.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            q.h.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            q.h.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            q.h.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            q.h.subscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    _terminate() {
        q.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            q.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect),
            q.h.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            q.h.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            q.h.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            q.h.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            q.h.unsubscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        (0, en.kK)(t, n);
    }
    handleConnectionOpen() {
        let e = et.A.getGuildId(),
            t = ee.A.getChannelId();
        (0, en.kK)(e, t);
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, f.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("28367"), n.e("10136"), n.e("7579")]).then(
                    n.bind(n, 776971),
                );
                return (n) => (0, E.jsx)(e, { source: t, ...n });
            },
            { modalKey: ea.Uy, onCloseRequest: D.tEg, backdropStyle: (0, Z.lU)(t) ? K.F.LIGHTBOX : void 0 },
        );
    }
    handleAgeGateSuccess() {
        Q.A.showSuccessToast(el.OB.EXISTING_USER_AGE_GATE_SUCCESS), (0, f.closeModal)(ea.Uy);
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, f.updateModal)(ea.Uy, (e) => (0, E.jsx)(er.default, { underageMessage: t, ...e }));
    }
    handleAgeGateModalClose() {
        (0, f.closeModal)(ea.Uy);
    }
    handleGuildUpdate(e) {
        let { guild: t } = e,
            n = et.A.getGuildId();
        if (
            null != n &&
            t.id === n &&
            (t.owner_configured_content_level === D.ftr.AGE_RESTRICTED ||
                ((0, ei.v)("age_gate_manager") && J.uA.has(t.nsfw_level)))
        )
            return void (0, en.kK)(t.id, null);
    }
}
let eo = new es();
var ed = n(451988),
    ec = n(954571),
    eu = n(927813),
    e_ = n(38405),
    eA = n(881615),
    eh = n(789999);
let eE = P.default.getToken();
class ep extends X.A {
    focusedOrForegrounded = (0, eh.R)();
    heartbeatInterval = new ed.IX();
    schedulerStarted = !1;
    lastHeartbeatTimestamp = 0;
    _initialize() {
        (this.focusedOrForegrounded = (0, eh.R)()),
            P.default.addChangeListener(this.handleAuthenticationChange),
            q.h.subscribe("WINDOW_FOCUS", this.handleWindowFocus),
            q.h.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            q.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            q.h.subscribe("LOGIN_SUCCESS", this.handleLogin),
            q.h.subscribe("LOGOUT", this.handleLogout),
            this.scheduleHeartbeatTracking();
    }
    _terminate() {
        this.stopAnalyticHeartbeat(),
            P.default.removeChangeListener(this.handleAuthenticationChange),
            q.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus),
            q.h.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            q.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            q.h.unsubscribe("LOGIN_SUCCESS", this.handleLogin),
            q.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    maybeStartHeartbeat = () => {
        this.heartbeatInterval.isStarted() ||
            (this.trackHeartbeat(), this.heartbeatInterval.start(5 * eu.A.Millis.MINUTE, this.trackHeartbeat));
    };
    startAnalyticHeartbeat = () => {
        this.schedulerStarted ||
            ((this.schedulerStarted = !0),
            e_.A.addBreadcrumb({ category: "ad", message: "Starting ad session heartbeat" }),
            this.maybeStartHeartbeat());
    };
    trackHeartbeat = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!e.schedulerStarted && !t) {
                e_.A.addBreadcrumb({ category: "ad", message: "Ad heartbeat called but scheduler not started" }),
                    e.heartbeatInterval.stop();
                return;
            }
            let n = performance.now(),
                i = n - e.lastHeartbeatTimestamp,
                r = 5 * eu.A.Millis.MINUTE;
            if (!t && e.lastHeartbeatTimestamp > 0 && i < r) return;
            let a = (0, eA.sN)();
            ec.default.track(D.HAw.CLIENT_AD_HEARTBEAT, {
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
                e_.A.addBreadcrumb({ category: "ad", message: `Stopping ad session heartbeat: ${t}` }),
                e.heartbeatInterval.stop());
        };
    })();
    scheduleHeartbeatTracking = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DEFAULT";
            if (e.focusedOrForegrounded && null != eE)
                try {
                    e.startAnalyticHeartbeat();
                } catch (e) {
                    e_.A.captureException(e);
                }
            else e.stopAnalyticHeartbeat(t);
        };
    })();
    handleLogin = () => {
        this.scheduleHeartbeatTracking(), this.trackHeartbeat(!0);
    };
    handleLogout = () => {
        this.stopAnalyticHeartbeat("USER_LOGOUT"), (0, eA.Db)();
    };
    handleEnrollmentSuccess = () => {
        (0, eA.sN)(!0);
    };
    handleWindowFocus = (e) => {
        let { focused: t } = e;
        (this.focusedOrForegrounded = t), this.scheduleHeartbeatTracking("WINDOW_FOCUS");
    };
    handleAppStateUpdate = (e) => {
        let { state: t } = e;
        (this.focusedOrForegrounded = t === D.g6G.ACTIVE), this.scheduleHeartbeatTracking("APP_STATE_UPDATE");
    };
    handleAuthenticationChange = () => {
        let e = P.default.getToken();
        eE !== e && ((eE = e), (0, eA.Db)(), this.stopAnalyticHeartbeat()), this.scheduleHeartbeatTracking();
    };
}
let em = new ep();
var eI = n(861638),
    eg = n(793574),
    eC = n(114716),
    ef = n(827343),
    eT = n(328153),
    eN = n(869146),
    eS = n(969341),
    eL = n(531685),
    eO = n(731854);
let ey = new Set(),
    eb = new Set(),
    ev = null;
function eR() {
    for (let e of ey) ef.A.setDisableLocalVideo(e, D.bb8.MANUAL_ENABLED, eO.x.DEFAULT, !1);
    eb.clear(), ey.clear();
}
class eP extends X.A {
    _initialize() {
        q.h.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            q.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            q.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            q.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            eN.A.addChangeListener(this.handlePopoutChange);
    }
    _terminate() {
        q.h.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            q.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            q.h.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            q.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            eN.A.removeChangeListener(this.handlePopoutChange),
            eR(),
            (ev = null);
    }
    handleIncomingVideo(e) {
        let { userId: t, context: n, streamId: i } = e;
        if (n !== eO.x.DEFAULT || null == i) return;
        let r = null != eT.Ay.getVisibleGame(),
            a = eL.A.isVisible(),
            l = eN.A.getWindowVisible(D.MLl.CHANNEL_CALL_POPOUT),
            s = eS.Ay.isLocalVideoDisabled(t, n),
            o = eb.has(t);
        !r || a || l || s || o || (ey.add(t), ef.A.setDisableLocalVideo(t, D.bb8.DISABLED, n, !1));
    }
    handleManualLocalVideoToggle(e) {
        let { userId: t, persist: n } = e;
        n && (eb.add(t), ey.delete(t));
    }
    handleWindowVisibilityChange = (e) => {
        let { visible: t } = e;
        t && eR();
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t } = e;
        t !== ev && (eR(), (ev = t));
    };
    handlePopoutChange = () => {
        eN.A.getWindowVisible(D.MLl.CHANNEL_CALL_POPOUT) && eR();
    };
}
let eD = new eP();
var ex = n(284009),
    ew = n.n(ex),
    eM = n(735438),
    eU = n.n(eM);
class eG extends p.Component {
    animProps;
    _animationFrame;
    ref = p.createRef();
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
                n = eU().random(-e.intensity, e.intensity, !0),
                i = Math.max(0, Math.cbrt(e.duration - e.progress / 1e3));
            (e.intensity *= Math.min(1, i)),
                (e.lastDirection *= -1),
                ew()(null != this.ref.current, "Shakeable style set when not mounted"),
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
        return (0, E.jsx)("div", { ...t, ref: this.ref, children: e });
    }
}
var ej = n(447453),
    ek = n(143991),
    eV = n(942857),
    eF = n(337371),
    eH = n(775121),
    eB = n(498419),
    eY = n.n(eB),
    e$ = n(481613),
    ez = n.n(e$),
    eW = n(800828),
    eK = n(912309),
    eq = n(458294),
    eX = n(803224),
    eZ = n(994500),
    eQ = n(503509),
    eJ = n(19575),
    e0 = n(726249);
let e1 = new Set(["Blink", "Gecko", "WebKit"]),
    e2 = D.tEg;
if (U.isPlatformEmbedded) e2 = (e) => eJ.Ay.setBadge(e);
else if (e1.has(ez().layout)) {
    let e = new (eY())({ animation: "none" });
    e2 = (t) => {
        try {
            (0, e0.sF)(t), e.badge(-1 === t ? "•" : t);
        } catch (e) {}
    };
}
var e6 = n(780964),
    e5 = n(858897),
    e3 = n(763827),
    e4 = n(485296);
let e8 = (0, U.isMac)() ? null : "DEFAULT";
class e7 extends p.PureComponent {
    getIcon = () => {
        let { deafened: e, muted: t, speaking: n, connected: i, unread: r } = this.props,
            a = e8;
        return (0, U.isMac)() && !i
            ? a
            : (0, U.isLinux)() || !i
              ? (r && (a = "UNREAD"), a)
              : (a = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED");
    };
    componentDidMount() {
        eJ.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentDidUpdate() {
        eJ.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentWillUnmount() {
        eJ.Ay.setSystemTrayIcon(e8);
    }
    render() {
        return null;
    }
}
let e9 = () => null;
U.isPlatformEmbedded &&
    (eJ.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () => ef.A.toggleSelfMute({ location: "System Tray" })),
    eJ.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => ef.A.toggleSelfDeaf()),
    eJ.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
        (0, e5.openUserSettings)(e6.X.VOICE_CATEGORY);
    }),
    (e9 = C.Ay.connectStores([e3.A, eS.Ay, e4.A, eq.default, eZ.A, eX.A, eW.A], () => {
        let e = eq.default.getTotalMentionCount(),
            t = eq.default.hasAnyUnread(),
            n = (0, eK.dH)([eZ.A, eW.A]),
            i = !eX.A.getDisableUnreadBadge() && !!(t || e + n > 0);
        return {
            connected: e3.A.isConnected(),
            speaking: e4.A.isCurrentUserSpeaking(),
            muted: eS.Ay.isSelfMute() || eS.Ay.isSelfMutedTemporarily(),
            deafened: eS.Ay.isSelfDeaf(),
            unread: i,
        };
    })(e7)));
let te = e9;
var tt = n(503698),
    tn = n.n(tt),
    ti = n(110259),
    tr = n(167789),
    ta = n(506774),
    tl = n(289873),
    ts = n(43990),
    to = n(939249),
    td = n(720149),
    tc = n(183994),
    tu = n(268218),
    t_ = n(335180);
let tA = (0, tu.Fe)({
    createPromise: () =>
        Promise.all([n.e("86546"), n.e("14875"), n.e("23324"), n.e("51050"), n.e("3177")]).then(n.bind(n, 338249)),
    webpackId: 338249,
    renderLoader: t_.IA,
});
var th = n(761929),
    tE = n(458518),
    tp = n(107361),
    tm = n(549711),
    tI = n(313961),
    tg = n(702841),
    tC = n(932001),
    tf = n(533550),
    tT = n(49999),
    tN = n(46275);
let tS = p.memo(function (e) {
    let { state: t, markAsDismissed: n } = e,
        { name: i, guildId: r, boundingRect: a } = t,
        l = p.useMemo(() => null, [i, r, n]);
    return null == l
        ? null
        : (0, E.jsx)("div", {
              className: tn()(tN.UX, (null == a || a.y < 0) && tN.R),
              style: null == a ? {} : { top: a.top, left: a.right - a.x },
              children: l,
          });
});
function tL() {
    let e = (0, tg.bG)([et.A], () => et.A.getGuildId()),
        t = (0, tf.RX)(e),
        [n, i] = (0, tC.kn)(
            Object.values(t)
                .filter((e) => {
                    let { disabled: t } = e;
                    return !t;
                })
                .map((e) => {
                    let { name: t } = e;
                    return t;
                }),
            tT.m.SIDEBAR,
        );
    if (null == n) return null;
    let r = t[n];
    return null == r
        ? null
        : (0, E.jsx)("div", { className: tN.kL, children: (0, E.jsx)(tS, { state: r, markAsDismissed: i }) });
}
let tO = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("62597"),
                n.e("72822"),
                n.e("52803"),
                n.e("29890"),
                n.e("37440"),
                n.e("72570"),
            ]).then(n.bind(n, 887073)),
        webpackId: 887073,
    }),
    ty = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("34983"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("62597"),
                n.e("72822"),
                n.e("52803"),
                n.e("29890"),
                n.e("37440"),
                n.e("34735"),
                n.e("54350"),
                n.e("59275"),
            ]).then(n.bind(n, 507013)),
        webpackId: 507013,
    }),
    tb = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("62597"),
                n.e("72822"),
                n.e("52803"),
                n.e("29890"),
                n.e("37440"),
                n.e("82583"),
            ]).then(n.bind(n, 479808)),
        webpackId: 479808,
    });
var tv = n(201313),
    tR = n(920814),
    tP = n(287344),
    tD = n(969043),
    tx = n(91242),
    tw = n(661531),
    tM = n(862482),
    tU = n(602853),
    tG = n(623646),
    tj = n(446576),
    tk = n(70688),
    tV = n(795816),
    tF = n(216418),
    tH = n(47294),
    tB = n(16961),
    tY = n(58149),
    t$ = n(429913),
    tz = n(982484),
    tW = n(964404),
    tK = n(709562),
    tq = n(520006),
    tX = n(128286),
    tZ = n(625180),
    tQ = n(31728),
    tJ = n(625494),
    t0 = n(165610);
let t1 = (e, t) => {
    q.h.wait(() => {
        (0, tQ.I_)(e, t);
    });
};
function t2(e) {
    let { embedId: t, className: n, style: i, currentWindow: r } = e,
        a = (0, C.bG)([tx.A], () => tx.A.getConnectedFrame()),
        l = (0, C.bG)([tx.A], () => tx.A.getFrameLayoutMode()),
        s = null != a && l === t0.y.FOCUSED ? window : (r ?? window),
        o = p.useRef(null),
        d = p.useCallback(() => {
            null == o.current || t1(t, o.current.getBoundingClientRect());
        }, [t]);
    p.useLayoutEffect(() => {
        d();
    });
    let c = p.useMemo(
        () =>
            new ResizeObserver(() => {
                d();
            }),
        [d],
    );
    return (
        p.useLayoutEffect(() => {
            let e = o.current;
            if (null != e) return c.observe(e), () => c.unobserve(e);
        }, [c]),
        p.useLayoutEffect(() => {
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
        p.useLayoutEffect(
            () => (
                tJ._.subscribe(D.jej.MANUAL_IFRAME_RESIZING, d),
                () => {
                    tJ._.unsubscribe(D.jej.MANUAL_IFRAME_RESIZING, d);
                }
            ),
            [d],
        ),
        p.useLayoutEffect(
            () => () => {
                t1(t, null);
            },
            [t],
        ),
        (0, E.jsx)("div", { ref: o, className: n, style: i })
    );
}
var t6 = n(227042),
    t5 = n(186111),
    t3 = n(334463);
let t4 = null;
function t8(e) {
    return `framepip:${e.applicationId}`;
}
function t7() {
    let e = tx.A.getConnectedFrame();
    if (null == e) {
        let e;
        return void (null != (e = t4) && t3.A.isOpen(e) && (q.h.wait(() => tQ.VN(e)), (t4 = null)));
    }
    var t = t8(e);
    if (t3.A.isOpen(t)) return !1;
    if (null != t4) {
        let e = t4;
        q.h.wait(() => tQ.VN(e));
    }
    return q.h.wait(() => tQ.ho(t, D.o1q.FRAME, {})), void (t4 = t);
}
function t9() {
    let e;
    if ((0, t6.A)({ LayerStore: t5.A, PopoutWindowStore: eN.A })) {
        let e;
        return void (null != (e = void 0 ?? t4) && t3.A.isOpen(e) && q.h.wait(() => tQ.jD(e)));
    }
    null != (e = void 0 ?? t4) && t3.A.isOpen(e) && q.h.wait(() => tQ.WU(e));
}
class ne extends X.A {
    _initialize() {
        tx.A.addChangeListener(t7), t5.A.addChangeListener(t9);
    }
    _terminate() {
        tx.A.removeChangeListener(t7), t5.A.removeChangeListener(t9);
    }
}
let nt = new ne();
var nn = n(5867),
    ni = n(492466);
let nr = { [nn.E8.NO_CHAT]: ni.Oo, [nn.E8.RESIZABLE]: ni.Ig };
function na(e) {
    let { frame: t } = e,
        n = (0, t$.h)(t.applicationId),
        i = (0, eV.A)(),
        { selectedChannelId: r, selectedVoiceChannelId: a } = (0, C.cf)([ee.A], () => ({
            selectedChannelId: ee.A.getChannelId(),
            selectedVoiceChannelId: ee.A.getVoiceChannelId(),
        })),
        l = (0, C.bG)([tI.A], () => null != a && r === a && tI.A.getChatOpen(a), [r, a]),
        s = (0, C.bG)([tW.Ay], () => tW.Ay.callChatSidebarWidth),
        o = (0, tU.r)(tw.A.modules.chat.RESIZE_HANDLE_WIDTH),
        d = p.useRef(null),
        c = p.useRef(null),
        [u, _] = p.useState({ width: 0, height: 0 }),
        A = p.useCallback(() => {
            tZ.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: t0.y.PIP });
        }, [t.applicationId]),
        h = p.useCallback(() => {
            tZ.A.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    p.useLayoutEffect(() => {
        if (null == c.current) return;
        let e = new ResizeObserver(() => {
            _({ width: c.current?.clientWidth ?? 0, height: c.current?.clientHeight ?? 0 });
        });
        return e.observe(c.current), () => e.disconnect();
    }, []),
        p.useEffect(() => {
            let e = (e) => {
                null == d.current ||
                    (0, tG.H)(d.current, e.target) ||
                    i ||
                    tZ.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: t0.y.PIP });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, i]);
    let m = u.width / Math.max(u.height, 1) < nn.B5,
        I = 0,
        g = 0,
        f = (0, tF.A)(n?.id);
    if (!f) {
        let e = u.width,
            t = u.height;
        m
            ? ((t = u.width / nn.B5) > u.height && (e = (t = u.height) * nn.B5), (g = (u.height - t) / 2))
            : ((e = Math.min(u.height * nn.B5, u.width)) > u.width && (t = (e = u.width) / nn.B5),
              (I = (u.width - e) / 2));
    }
    let T = nn.E8.NO_CHAT,
        N = (0, tB.G)();
    if (null == n) return null;
    let S = (s ?? D.da6) + o,
        L = t8(t);
    return (0, E.jsx)(ts.N, {
        theme: D.NJ8.DARK,
        children: (e) =>
            (0, E.jsxs)("div", {
                className: tn()(ni.iE, nr[T], e),
                ref: d,
                style: { right: l && !Number.isNaN(S) ? S : 0 },
                children: [
                    (0, E.jsx)(tz.A, { applicationId: t.applicationId }),
                    (0, E.jsx)("div", {
                        className: ni.lq,
                        children: (0, E.jsx)("div", {
                            className: tn()(ni.ht, { [ni.kK]: f }),
                            style: { paddingLeft: I, paddingRight: I, paddingTop: g, paddingBottom: g },
                            ref: c,
                            children: (0, E.jsx)(t2, { className: ni.pU, embedId: L }),
                        }),
                    }),
                    (0, E.jsxs)("div", {
                        className: ni.qr,
                        children: [
                            (0, E.jsx)(tq.A, {
                                appContext: D.BRT.APP,
                                applicationId: n.id,
                                shouldPrioritizeGroupPlusIcon: !0,
                                isRichPresenceInvite: !0,
                                iconClassName: ni.NS,
                                size: tM.$n.Sizes.MEDIUM,
                                look: tM.$n.Looks.FILLED,
                                buttonText: G.intl.string(G.t["6F9ivu"]),
                                color: tM.$n.Colors.TRANSPARENT,
                            }),
                            (0, E.jsxs)("div", {
                                className: ni.Hq,
                                children: [
                                    (0, E.jsx)("div", {
                                        className: ni.qi,
                                        children: (0, E.jsx)(tK.l, {
                                            isTrayButton: !0,
                                            label: G.intl.string(G.t.brPQ5U),
                                            onClick: A,
                                            iconComponent: tj.g,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, E.jsx)(tK.l, {
                                        isTrayButton: !1,
                                        label: G.intl.string(G.t["R/FK4A"]),
                                        onClick: h,
                                        iconComponent: tk.o,
                                        color: "disconnect",
                                    }),
                                ],
                            }),
                            N
                                ? (0, E.jsx)(tX.A, {
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, tY.zV)(D.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                              (0, tH.A)({
                                                  onConfirm: async () => {
                                                      n?.id != null &&
                                                          (await tZ.A.refreshProxyTicket({ applicationId: n.id })),
                                                          (0, tV.jp)();
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
function nl() {
    let e = (0, C.bG)([tx.A], () => tx.A.getConnectedFrame()),
        t = (0, C.bG)([tx.A], () => tx.A.getFrameLayoutMode()),
        n = (0, C.bG)([eN.A], () => eN.A.getWindowOpen(D.MLl.ACTIVITY_POPOUT));
    return t !== t0.y.FOCUSED || null == e || n ? null : (0, E.jsx)(na, { frame: e });
}
var ns = n(696292),
    no = n(664121),
    nd = n(323384),
    nc = n(577473),
    nu = n(834730),
    n_ = n(534514),
    nA = n(416730),
    nh = n(310419),
    nE = n(282026),
    np = n(601193),
    nm = n(631001),
    nI = n(726845),
    ng = n(285395),
    nC = n(837057),
    nf = n(488995),
    nT = n(654487),
    nN = n(525748);
function nS(e) {
    let { tab: t } = e,
        n = nI.A.useField("selectedTab"),
        i = p.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case nf.GlobalDiscoveryTab.SERVERS:
                            return (0, E.jsx)(no.R, { color: "currentColor" });
                        case nf.GlobalDiscoveryTab.APPS:
                            return (0, E.jsx)(nd.k, { color: "currentColor" });
                        case nf.GlobalDiscoveryTab.QUESTS:
                            return (0, E.jsx)(nc.r, { color: "currentColor" });
                    }
                })(t),
            [t],
        ),
        r = p.useMemo(() => (0, ng.t)(t), [t]),
        a = n === t,
        l = p.useCallback(() => {
            switch (t) {
                case nf.GlobalDiscoveryTab.QUESTS:
                    return (
                        a && nm.A.resetState(),
                        ec.default.track(D.HAw.DISCOVERY_QUEST_TAB_CLICKED, {
                            client_ad_session_id: (0, eA.sN)().uuid,
                        }),
                        (0, nC.transitionToGlobalDiscovery)({
                            tab: nf.GlobalDiscoveryTab.QUESTS,
                            location: nT.rE.DISCOVERY_SIDEBAR,
                            questContent: ns.u.DISCOVERY_SIDEBAR,
                        })
                    );
                case nf.GlobalDiscoveryTab.APPS:
                    if (!a)
                        return (0, nC.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: nh.sW.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0,
                            },
                        });
                    nA.A.resetState(), (0, nC.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case nf.GlobalDiscoveryTab.SERVERS:
                    if (!a) return (0, nC.transitionToGlobalDiscovery)({ tab: t });
                    nE.A.resetState(), np.A.resetState();
                    return;
                default:
                    return (0, nC.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, a]);
    return (0, E.jsxs)(to.D, {
        onClick: l,
        className: tn()(nN.pc, { [nN.wH]: a }),
        children: [
            (0, E.jsx)("div", { className: nN.wz, children: i }),
            (0, E.jsx)(nu.E, { variant: "text-md/medium", color: "none", children: r }),
        ],
    });
}
let nL = function () {
    return (0, E.jsxs)("div", {
        className: nN.kL,
        children: [
            (0, E.jsx)("div", {
                className: nN.wx,
                children: (0, E.jsx)(n_.D, { variant: "text-lg/semibold", children: G.intl.string(G.t["1KqYnl"]) }),
            }),
            (0, E.jsx)("nav", {
                className: nN.C$,
                children: nf.GLOBAL_DISCOVERY_TABS.map((e) => (0, E.jsx)(nS, { tab: e }, e)),
            }),
        ],
    });
};
var nO = n(386467),
    ny = n(961973),
    nb = n(440293),
    nv = n(253363),
    nR = n(379610),
    nP = n(164956),
    nD = n(209700),
    nx = n(9588);
let nw = {
        closeSidebar() {
            q.h.dispatch({ type: "MOBILE_WEB_SIDEBAR_CLOSE" });
        },
        openSidebar() {
            q.h.dispatch({ type: "MOBILE_WEB_SIDEBAR_OPEN" });
        },
    },
    nM = !1;
class nU extends C.Ay.Store {
    static displayName = "MobileWebSidebarStore";
    getIsOpen() {
        return !b.Fr || nM;
    }
}
let nG = new nU(q.h, {
    MOBILE_WEB_SIDEBAR_OPEN: function () {
        nM = !0;
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function () {
        nM = !1;
    },
});
var nj = n(601623),
    nk = n(851109);
n(323874), n(14289), n(35956);
var nV = n(777666),
    nF = n(214947),
    nH = n(761508),
    nB = n(944791),
    nY = n(711950),
    n$ = n(915089),
    nz = n(586774),
    nW = n(742589),
    nK = n(95550),
    nq = n(554146),
    nX = n(364522),
    nZ = n(820284),
    nQ = n(688810),
    nJ = n(379848),
    n0 = n(821609),
    n1 = n(290595),
    n2 = n(516746);
function n6(e) {
    let {
        padded: t = !0,
        inset: n = !1,
        active: i = !1,
        className: r,
        children: a,
        onClick: l,
        ref: s,
        noBackground: o = !1,
        ...d
    } = e;
    return null != l
        ? (0, E.jsx)(to.D, {
              innerRef: s,
              onClick: l,
              tabIndex: null != l ? 0 : -1,
              className: tn()(r, { [n2.A7]: !n, [n2.C5]: n, [n2.jC]: t, [n2.vu]: i, [n2.bG]: null != l, [n2._$]: o }),
              ...d,
              children: a,
          })
        : (0, E.jsx)("div", {
              ref: s,
              className: tn()(r, { [n2.A7]: !n, [n2.C5]: n, [n2.jC]: t, [n2.vu]: i, [n2._$]: o }),
              ...d,
              children: a,
          });
}
var n5 = n(362288);
function n3(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, E.jsxs)(n6, {
        className: tn()(n5.Nr, t),
        children: [
            (0, E.jsx)(n_.D, { variant: "heading-md/semibold", className: n5.wx, children: G.intl.string(G.t.HcbnMM) }),
            (0, E.jsx)(nu.E, {
                variant: "text-sm/normal",
                children: G.intl.format(G.t.NkFrzN, {
                    onPrivacyClick: () => {
                        (0, e5.openUserSettings)(e6.X.DATA_AND_PRIVACY_PANEL);
                    },
                }),
            }),
            (0, E.jsxs)("div", {
                className: n5.UD,
                children: [
                    (0, E.jsx)(n0.$, {
                        variant: "primary",
                        size: "sm",
                        fullWidth: !0,
                        text: G.intl.string(G.t.ebojgD),
                        onClick: () => (0, n1.U)([D.YAq.PERSONALIZATION], []),
                    }),
                    (0, E.jsx)(n0.$, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: G.intl.string(G.t.f3Pet9),
                        onClick: () => n(tT.i.DISMISS),
                    }),
                ],
            }),
        ],
    });
}
var n4 = n(153488),
    n8 = n(111956),
    n7 = n.n(n8),
    n9 = n(922016),
    ie = n(829219),
    it = n(859703),
    ii = n(507107),
    ir = n(945810);
let ia = (0, ir.mj)({
    name: "2026-01-now-playing-api-call-experiment",
    kind: "user",
    defaultConfig: { use_api_call: !1 },
    variations: {
        0: { use_api_call: !1 },
        1: { use_api_call: !1 },
        2: { use_api_call: !0 },
        3: { use_api_call: !0 },
        4: { use_api_call: !0 },
        5: { use_api_call: !0 },
        6: { use_api_call: !0 },
    },
});
var il = n(890687),
    is = n(710969),
    io = n(639214),
    id = n(814793),
    ic = n(219271),
    iu = n(427358),
    i_ = n(287809),
    iA = n(943577),
    ih = n(279877);
n(321073);
var iE = n(401843),
    ip = n(682261),
    im = n(765379),
    iI = n(90644),
    ig = n(61330),
    iC = n(960076),
    iT = n(834615),
    iN = n(970928),
    iS = n(516085),
    iL = n(141628),
    iO = n(990078),
    iy = n(414499),
    ib = n(687966),
    iv = n(97808),
    iR = n(778712),
    iP = n(983851),
    iD = n(187322),
    ix = n(492684),
    iw = n(212245),
    iM = n(573648),
    iU = n(62583),
    iG = n(908289),
    ij = n(672979),
    ik = n(440594);
function iV(e, t) {
    if (null != e && e.type === D.$pd.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== D.$pd.PLAYING ? G.intl.string(G.t.eXan7B) : e.name;
    if (null == e || null == e.name) return null;
    if ((0, iC.A)(e)) return null != e.details && "" !== e.details ? e.details : e.name;
    if ((0, im.A)(e)) return (0, ik.A)(e.name);
    var n = e.type,
        i = e.name;
    switch (n) {
        case D.$pd.LISTENING:
        case D.$pd.WATCHING:
        case D.$pd.COMPETING:
        case D.$pd.STREAMING:
            return i;
        case D.$pd.CUSTOM_STATUS:
        case D.$pd.HANG_STATUS:
            return null;
        case D.$pd.PLAYING:
        default:
            return i;
    }
}
var iF = n(737393),
    iH = n(139286),
    iB = n(46225),
    iY = n(627363),
    i$ = n(587895),
    iz = n(47167),
    iW = n(402216),
    iK = n(939341),
    iq = n(681827),
    iX = n(826673),
    iZ = n(609425),
    iQ = n(73392),
    iJ = n(137177),
    i0 = n(279250),
    i1 = n(607407),
    i2 = n(290987),
    i6 = n(928550),
    i5 = n(594262),
    i3 = n(378570),
    i4 = n(345942),
    i8 = n(804980),
    i7 = n(734057),
    i9 = n(879945),
    re = n(266080),
    rt = n(403362),
    rn = n(427262),
    ri = n(336787),
    rr = n(492213);
let ra = [14, 14, 12, 12, 10, 8, 6],
    rl = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, E.jsx)(nu.E, { className: tn()(rr.P_, t), variant: "text-sm/semibold", children: e });
    },
    rs = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, E.jsx)(nu.E, {
            className: tn()(rr.P_, t),
            variant: "text-xs/normal",
            color: "text-muted",
            children: e,
        });
    },
    ro = (0, ix.A)((e) => {
        let { message: t } = e;
        return (0, E.jsx)("div", { className: rr.__invalid_timestamp, children: t });
    }),
    rd = (e) => {
        let { children: t } = e;
        return (0, E.jsx)("section", { className: rr.uW, children: t });
    },
    rc = (e) => {
        let { inset: t, className: n } = e;
        return (0, E.jsx)("div", { className: tn()(rr.me, { [rr.C5]: t }, n) });
    },
    ru = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, iH.A)({
                name: ti.ImpressionNames.CLOUD_PLAY_CTA,
                type: ti.ImpressionTypes.VIEW,
                properties: { location_stack: n },
            }),
            (0, E.jsx)(iO.m, {
                text: G.intl.string(G.t.JVwWva),
                children: (0, E.jsx)(n0.$, {
                    size: "sm",
                    variant: "primary",
                    icon: iy.h,
                    text: G.intl.string(G.t.YsIsPU),
                    onClick: t,
                }),
            })
        );
    },
    r_ = (e) => {
        let { activity: t, user: n } = e,
            i = (0, i5.l)({ activity: t, user: n, supportsAskToJoin: !1 }),
            r = null != i,
            { data: a } = (0, iY.YY)(t.application_id),
            { fetched: l, hasAlreadyLinked: s, canStartAuthorization: o, startAuthorization: d } = (0, iB.RD)(a),
            c = !r && l && o && !s;
        return {
            isJoinActivityButtonShown: r,
            joinActivityButtonAction: i,
            isLinkAccountButtonShown: c,
            startAuthorization: d,
            hasButton: r || c,
        };
    },
    rA = (e) => {
        let { activity: t, user: n } = e,
            {
                joinActivityButtonAction: i,
                isJoinActivityButtonShown: r,
                isLinkAccountButtonShown: a,
                startAuthorization: l,
            } = r_({ activity: t, user: n }),
            { newestAnalyticsLocation: s } = (0, nQ.Ay)();
        if (r && null != i) {
            let { isJoining: e, handleJoinRequest: t, buttonCTA: n, tooltip: r, isEnabled: a } = i;
            return (0, E.jsx)(iO.m, {
                text: r,
                asContainer: !a,
                children: (0, E.jsx)(n0.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: ib._,
                    text: n,
                    disabled: !a,
                    loading: e,
                    onClick: (e) => {
                        e.stopPropagation(), t();
                    },
                }),
            });
        }
        return a
            ? (0, E.jsx)(n0.$, {
                  size: "sm",
                  variant: "secondary",
                  icon: iL.A,
                  text: G.intl.string(G.t.sbdnpw),
                  onClick: (e) => {
                      e.stopPropagation(), l({ analyticsLocations: [s] });
                  },
              })
            : null;
    },
    rh = (e) => {
        let { activity: t, analyticsLocations: n } = e,
            { application_id: i, name: r } = t,
            { data: a } = (0, iY.YY)(i),
            l = (0, iF.A)({ application: a, analyticsLocations: n }),
            s = (0, iX.JZ)(nq.M.CLOUD_PLAY_NEW_BADGE),
            o = (0, i6.L)(i);
        return null == l || o
            ? null
            : (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsx)(rc, { className: rr.gi }),
                      (0, E.jsxs)("div", {
                          className: rr.DK,
                          children: [
                              (0, E.jsxs)("div", {
                                  className: rr.tJ,
                                  children: [
                                      s
                                          ? null
                                          : (0, E.jsx)(nV.Lp, {
                                                text: G.intl.string(G.t.y2b7CA),
                                                color: tw.A.colors.BACKGROUND_BRAND.css,
                                            }),
                                      (0, E.jsx)(nu.E, {
                                          variant: "text-xs/medium",
                                          children: G.intl.formatToPlainString(G.t.RmiYF3, { gameName: r }),
                                      }),
                                  ],
                              }),
                              (0, E.jsx)(ru, { onCloudPlayClick: l, analyticsLocations: n }),
                          ],
                      }),
                  ],
              });
    };
var rE = (((s = rE || {}).XBOX = "XBOX"), (s.SPOTIFY = "SPOTIFY"), (s.MULTIPLE = "MULTIPLE"), s);
let rp = (e) => {
    let t,
        { src: n, onClick: i, onContextMenu: r } = e;
    switch (n) {
        case "XBOX":
            t = (0, E.jsx)(re.A, { className: rr.nr, color: tw.A.unsafe_rawColors.PRIMARY_300.css });
            break;
        case "SPOTIFY":
            t = (0, E.jsx)(i9.A, { className: rr.nr, color: tw.A.unsafe_rawColors.PLATFORM_SPOTIFY.css });
            break;
        case "MULTIPLE":
            t = (0, E.jsx)("div", {
                className: rr.XQ,
                children: (0, E.jsx)(ib._, {
                    size: "md",
                    className: tn()(rr.nr, rr.iY),
                    color: tw.A.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, E.jsx)("img", { src: n ?? void 0, alt: "", className: rr.nr });
    }
    return null != i || null != r
        ? (0, E.jsx)(to.D, { onClick: i, className: tn()(null != i ? rr.vk : ""), onContextMenu: r, children: t })
        : t;
};
rp.Src = rE;
let rm = (e) => {
    let {
            priorityUser: t,
            title: n,
            subtitle: i,
            icon: r,
            onSubtitleClick: a,
            onIconClick: l,
            onContextMenu: s,
            guildId: o,
            displayNameFont: d,
        } = e,
        c = (0, E.jsx)(nu.E, { className: rr.P_, variant: "text-sm/normal", color: "text-muted", children: i });
    return (0, E.jsxs)("header", {
        className: null != r ? rr.dI : rr.sk,
        children: [
            (0, E.jsx)(iv.eu, {
                src: t.user.getAvatarURL(o, 32),
                "aria-label": t.user.username,
                size: iR._3.SIZE_32,
                className: rr.Nw,
                status: t.status,
                onContextMenu: s,
            }),
            (0, E.jsxs)("div", {
                className: rr.__invalid_headerDetails,
                children: [
                    (0, E.jsx)(nu.E, { className: tn()(rr.P_, d), variant: "text-md/semibold", children: n }),
                    null != a ? (0, E.jsx)(to.D, { className: rr.vk, onClick: a, children: c }) : c,
                ],
            }),
            null != r && null != l ? (0, E.jsx)(to.D, { className: rr.vk, onClick: l, children: r }) : r,
        ],
    });
};
rm.Icon = rp;
let rI = (e) => {
    let { children: t, className: n, ...i } = e;
    return (0, E.jsx)(iD.vN, {
        children: (0, E.jsx)(n6, { noBackground: !0, className: tn()(n, rr.iE), padded: !1, ...i, children: t }),
    });
};
(rI.Header = rm),
    (rI.Body = (e) => {
        let { children: t } = e;
        return (0, E.jsx)(n6, { inset: !0, padded: !1, className: rr.rf, children: t });
    }),
    (rI.Separator = rc),
    (rI.VoiceSection = (e) => {
        let { guild: t, channel: n, partySize: i, members: r, onChannelContextMenu: a } = e,
            l = p.useRef(null),
            s = (0, iz.Ay)(n, !0),
            o = (0, J.Iv)(t, 32),
            d = (0, J.Rb)(t);
        return (0, E.jsx)(rd, {
            children: (0, E.jsxs)("div", {
                className: rr.iO,
                ref: l,
                onContextMenu: (e) => a(e, n),
                children: [
                    (0, E.jsx)(to.D, {
                        onClick: () => (0, i4.u)(t.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, E.jsxs)("div", {
                            className: rr.J4,
                            children: [
                                null != o
                                    ? (0, E.jsx)("img", { alt: "", src: o, className: tn()(rr.y8, rr.p8) })
                                    : (0, E.jsx)("div", {
                                          className: rr.I,
                                          children: (0, E.jsx)("div", {
                                              className: rr.lB,
                                              style: { fontSize: ra[d.length] ?? ra[ra.length - 1] },
                                              children: d,
                                          }),
                                      }),
                                (0, E.jsx)("div", {
                                    className: rr._s,
                                    children: (0, E.jsx)(iP.H, { size: "md", color: "currentColor", className: rr.ZS }),
                                }),
                            ],
                        }),
                    }),
                    (0, E.jsx)(to.D, {
                        onClick: () => {
                            O.default.selectVoiceChannel(n.id), (0, i3.iN)(n.id);
                        },
                        focusProps: { ringTarget: l },
                        children: (0, E.jsxs)("div", { className: rr.U6, children: [rl(t.name, rr.BJ), rs(s, rr.BJ)] }),
                    }),
                    (0, E.jsx)(ri.A, { partySize: i, members: r, guildId: t.id }),
                ],
            }),
        });
    }),
    (rI.GameSection = (e) => {
        let { icon: t, name: n, partySize: i, members: r, activity: a } = e,
            { analyticsLocations: l } = (0, nQ.Ay)(eg.A.NOW_PLAYING_ITEM_GAME_SECTION);
        return (0, E.jsxs)(rd, {
            children: [
                (0, E.jsxs)("div", {
                    className: rr.yn,
                    children: [
                        null != t ? (0, E.jsx)("img", { alt: "", src: t, className: rr.RZ }) : null,
                        (0, E.jsxs)("div", {
                            children: [rl(n), rs(G.intl.formatToPlainString(G.t.C4WXvc, { memberCount: i.totalSize }))],
                        }),
                        (0, E.jsx)(ri.A, { partySize: i, members: r }),
                    ],
                }),
                (0, E.jsx)(rh, { activity: a, analyticsLocations: l }),
            ],
        });
    }),
    (rI.RichPresenceSection = (e) => {
        let { activity: t, getAssetImage: i, user: r } = e,
            { analyticsLocations: a } = (0, nQ.Ay)(eg.A.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { data: l } = (0, iY.YY)(t.application_id),
            { assets: s, details: o, state: d, application_id: c } = t,
            { hasButton: u } = r_({ activity: t, user: r }),
            _ = (0, iK.C4)(l)?.src ?? n(960648),
            A = (0, iF.A)({ application: l, analyticsLocations: a });
        return null != t.assets || (0, ip.A)(t) || null != A
            ? (0, E.jsxs)(rd, {
                  children: [
                      (0, E.jsxs)("div", {
                          className: tn()(rr.tL, { [rr._2]: u }),
                          children: [
                              null != s && 0 !== Object.keys(s).length
                                  ? (0, E.jsxs)("div", {
                                        className: rr.YY,
                                        children: [
                                            (0, E.jsx)("img", {
                                                alt: s.large_text ?? "",
                                                src: i(c, s.large_image, [160, 160]) ?? _,
                                                className: tn()(rr.nX, { [rr.p8]: null != s.small_image }),
                                            }),
                                            null != s.small_image
                                                ? (0, E.jsx)("img", {
                                                      alt: s.small_text ?? "",
                                                      src: i(c, s.small_image, [64, 64]),
                                                      className: rr.rp,
                                                  })
                                                : null,
                                        ],
                                    })
                                  : (0, E.jsx)("div", {
                                        className: rr.YY,
                                        children: (0, E.jsx)("img", { alt: "", src: _, className: rr.nX }),
                                    }),
                              (0, E.jsxs)("div", {
                                  className: rr.JD,
                                  children: [
                                      rl(null != o && "" !== o ? o : t.name),
                                      null != d ? rs(d) : null,
                                      (() => {
                                          let { timestamps: e } = t;
                                          return null == e || !(0, ij.A)(t) || (0, iI.A)(t)
                                              ? null
                                              : rs(
                                                    (0, ip.A)(t)
                                                        ? (0, E.jsx)(ro, { timestamps: e })
                                                        : (0, E.jsx)(i2.Ay, {
                                                              start: e.start,
                                                              end: e.end,
                                                              location: i2.Ay.Locations.USER_ACTIVITY,
                                                              className: rr.__invalid_playTime,
                                                          }),
                                                );
                                      })(),
                                  ],
                              }),
                              (0, E.jsx)(rA, { activity: t, user: r }),
                          ],
                      }),
                      (0, E.jsx)(rh, { activity: t, analyticsLocations: a }),
                  ],
              })
            : null;
    }),
    (rI.XboxSection = (e) => {
        let { title: t } = e;
        return (0, E.jsx)(rd, {
            children: (0, E.jsxs)("div", {
                className: rr.oc,
                children: [
                    (0, E.jsx)(re.A, { className: rr.Ai }),
                    (0, E.jsxs)("div", {
                        className: rr.__invalid_xboxSectionDetails,
                        children: [rl(t), rs(G.intl.string(G.t["JG9r+9"]))],
                    }),
                ],
            }),
        });
    }),
    (rI.SpotifySection = (e) => {
        let {
            activity: { assets: t, details: n, state: i, application_id: r },
            partySize: a,
            members: l,
            isSolo: s,
            getAssetImage: o,
        } = e;
        return (0, E.jsx)(rd, {
            children: (0, E.jsxs)("div", {
                className: rr.uy,
                children: [
                    null != t
                        ? (0, E.jsxs)("div", {
                              className: rr.YY,
                              children: [
                                  (0, E.jsx)("img", {
                                      alt: t.large_text ?? "",
                                      src: o(r, t.large_image, [160, 160]),
                                      className: tn()(rr.nX, rr.Dy, { [rr.p8]: null != t.small_image }),
                                  }),
                                  s
                                      ? null
                                      : (0, E.jsx)(i9.A, {
                                            className: rr.rp,
                                            color: tw.A.unsafe_rawColors.PLATFORM_SPOTIFY.css,
                                        }),
                              ],
                          })
                        : (0, E.jsx)("div", {}),
                    (0, E.jsxs)("div", {
                        children: [null != n ? rl(n) : null, null != i ? rs(i.replace(/; /g, ", ")) : null],
                    }),
                    (0, E.jsx)(ri.A, { minAvatarsShown: s ? 2 : 1, partySize: a, members: l }),
                ],
            }),
        });
    }),
    (rI.TwitchSection = (e) => {
        let t,
            { activity: i, user: r, getAssetImage: a, guildId: l } = e,
            { name: s, details: o, assets: d, application_id: c } = i;
        return (
            null != d &&
                (0, iC.A)(i) &&
                (t = (0, E.jsx)(iq.A, {
                    className: rr.E6,
                    aspectRatio: 16 / 9,
                    children: (0, E.jsxs)(to.D, {
                        href: (0, iG.A)(i),
                        tag: "a",
                        target: "_blank",
                        children: [
                            (0, E.jsx)("img", {
                                alt: d.large_text ?? "",
                                src: a(c, d.large_image, [900, 500]),
                                className: rr.ZB,
                            }),
                            (0, E.jsx)("img", { src: n(606621), className: rr.vc, alt: "" }),
                        ],
                    }),
                })),
            (0, E.jsxs)(rd, {
                children: [
                    (0, E.jsxs)("div", {
                        className: tn()({ [rr.x5]: null == r, [rr.Qh]: null != r }),
                        children: [
                            (0, E.jsx)("img", { alt: "", src: iM.A.get(D.fg2.TWITCH).icon.lightSVG, className: rr.Gq }),
                            (0, E.jsxs)("div", { children: [rl(s), null != o ? rs(o) : null] }),
                            null != r
                                ? (0, E.jsx)(iv.eu, {
                                      src: r.getAvatarURL(l, 24),
                                      "aria-label": r.username,
                                      className: rr.AZ,
                                      size: iR._3.SIZE_24,
                                  })
                                : null,
                        ],
                    }),
                    t,
                ],
            })
        );
    }),
    (rI.ApplicationStreamingSection = (e) => {
        let { activity: t, user: n, applicationStream: i, onPreviewClick: r, guildId: a } = e,
            l = (0, C.bG)([i7.A], () => i7.A.getChannel(i.channelId)),
            [s, o] = (0, i0.zP)(l),
            d = (0, E.jsxs)(to.D, {
                onClick: s ? r : void 0,
                className: rr.q_,
                children: [
                    (0, E.jsx)(i1.A, { stream: i, className: rr.IN }),
                    (0, E.jsx)(nu.E, {
                        className: rr.Er,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, i0.CT)(o),
                    }),
                ],
            }),
            c =
                (function (e, t) {
                    if (Array.isArray(e)) {
                        let n = e;
                        null != t && !1 !== t.discoverable && (n = [...n, null]);
                        let i = null;
                        for (let e of n) {
                            let n = iV(e, t);
                            if (null != n) return { activity: e, activityText: n };
                            e?.type === D.$pd.CUSTOM_STATUS && null != e.emoji && (i = e);
                        }
                        return i?.emoji != null ? { activity: i, activityText: null } : null;
                    }
                    return iV(e, t);
                })(t, i)?.activityText ?? G.intl.string(G.t.eXan7B),
            u = (0, iZ.A)({ userId: n.id, guildId: a }),
            _ = (0, iQ.a)({ displayNameStyles: u });
        return (0, E.jsxs)(rd, {
            children: [
                (0, E.jsxs)("div", {
                    className: rr.ME,
                    children: [
                        (0, E.jsx)(iv.eu, {
                            size: iR._3.SIZE_32,
                            src: n.getAvatarURL(a, 32),
                            "aria-label": n.username,
                            className: rr.OL,
                        }),
                        (0, E.jsxs)("div", { children: [rl(rn.Ay.getName(n), _), rs(c)] }),
                        (0, E.jsx)(iW.Ay, { size: iW.Ay.Sizes.SMALL }),
                    ],
                }),
                d,
            ],
        });
    }),
    (rI.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: i, participants: r } = e,
            [a, l] = p.useState(null),
            s = t.application_id;
        p.useEffect(() => {
            null != s &&
                (0, iN.RG)(s, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return l(t);
                });
        }, [s]);
        let o = (0, C.yK)([i_.default, P.default], () =>
                Array.from(r)
                    .map((e) => (P.default.getId() === e ? null : i_.default.getUser(e)))
                    .filter(rt.Vq),
            ),
            d = (0, iw.p)(),
            { analyticsLocations: c } = (0, nQ.Ay)();
        if (null == s) return null;
        let u = i$.A.getApplication(s);
        if (null == u) return null;
        let _ = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            A = (0, iN.uD)(u.id, a, 300);
        return (0, E.jsxs)(rd, {
            children: [
                (0, E.jsxs)("div", {
                    className: rr.h1,
                    children: [
                        (0, E.jsx)(iJ.A, { game: u, size: iJ.M.XSMALL, className: rr.VZ }),
                        (0, E.jsx)("div", {
                            className: rr.F0,
                            children: (0, E.jsx)(nu.E, { variant: "text-sm/semibold", children: u.name }),
                        }),
                        null != _
                            ? (0, E.jsx)("div", {
                                  className: rr.T$,
                                  children: (0, E.jsx)(nu.E, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, E.jsx)(ro, { timestamps: _ }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, E.jsxs)("div", {
                    className: rr.Kt,
                    children: [
                        null != A ? (0, E.jsx)("img", { src: A, alt: u.name, className: rr.pV }) : null,
                        (0, E.jsxs)("div", {
                            className: rr.d4,
                            children: [
                                (0, E.jsx)(i8.LN, { users: o, guildId: i, channelId: n.id }),
                                (0, E.jsx)("div", {
                                    className: rr.ZE,
                                    children: (0, E.jsx)(n0.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: G.intl.string(G.t.VJlc0S),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, iU.A)({
                                                    applicationId: s,
                                                    activityChannelId: n.id,
                                                    locationObject: d.location,
                                                    analyticsLocations: c,
                                                });
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    });
var rg = n(812808);
function rC(e) {
    let { party: t, onChannelContextMenu: n, quest: i } = e,
        r = (0, rg.G)(),
        { voiceChannels: a, currentActivities: l, partiedMembers: s, applicationStreams: o, guildContext: d } = t,
        c = (0, il.sb)(i),
        u = [],
        _ = (e) => {
            let { length: t } = u;
            u.push(e);
        };
    for (let { activity: e } of (a.length > 0 &&
        a.forEach((e) => {
            let { members: t, channel: i, guild: r } = e;
            _(
                (0, E.jsx)(
                    rI.VoiceSection,
                    {
                        guild: r,
                        channel: i,
                        members: t,
                        partySize: (function (e) {
                            let t = e.length;
                            return { knownSize: t, unknownSize: 0, totalSize: t + 0 };
                        })(t),
                        onChannelContextMenu: n,
                    },
                    `voice-${i.id}`,
                ),
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = iS.Fm(e);
            if (null != t) {
                _(t);
                break;
            }
        }
    return (
        o.length > 0 &&
            r &&
            o.forEach((e) => {
                let { stream: t, streamUser: n, activity: i } = e;
                _(
                    (0, E.jsx)(
                        rI.ApplicationStreamingSection,
                        {
                            guildId: d?.id,
                            user: n,
                            activity: i,
                            applicationStream: t,
                            onPreviewClick: () => {
                                O.default.selectVoiceChannel(t.channelId), (0, iE.Nl)(t);
                            },
                        },
                        `application-stream-${t.ownerId}`,
                    ),
                );
            }),
        l.forEach((e, t) => {
            let { activity: n, game: r, playingMembers: o, activityUser: u } = e;
            if (null == n || null == n.type) return null;
            if (n.type === D.$pd.PLAYING)
                if (l.length > 1 && !(0, ip.A)(n) && null != r)
                    _(
                        (0, E.jsx)(
                            rI.GameSection,
                            {
                                icon: r.getIconURL(64),
                                name: r.name,
                                partySize: { knownSize: o.length, unknownSize: 0, totalSize: o.length },
                                members: o,
                                activity: n,
                            },
                            `game-${n.session_id ?? t}-${n.application_id ?? t}`,
                        ),
                    );
                else if ((0, im.A)(n)) {
                    let e = new Set(o.map((e) => e.id)),
                        t = a.find((e) => null != e)?.channel;
                    null != t &&
                        _(
                            (0, E.jsx)(
                                rI.EmbeddedActivitySection,
                                { activity: n, participants: e, channel: t, guildId: t.guild_id },
                                `embedded-activity-${n.application_id}`,
                            ),
                        );
                } else
                    (0, ig.A)(n)
                        ? _((0, E.jsx)(rI.XboxSection, { title: r.name }, `xbox-${n.session_id ?? t}`))
                        : _(
                              (0, E.jsx)(
                                  rI.RichPresenceSection,
                                  { activity: n, getAssetImage: iN.uD, user: u },
                                  `rich-presence-${n.session_id ?? t}-${u.id}`,
                              ),
                          );
            else if ((0, iC.A)(n)) {
                let e = a.length > 0 && a[0].members.length > 1,
                    i = o.length > 1;
                _(
                    (0, E.jsx)(
                        rI.TwitchSection,
                        { guildId: d?.id, activity: n, user: e || i ? u : null, getAssetImage: iN.uD },
                        `streaming-${n.session_id ?? t}`,
                    ),
                );
            } else
                n.type === D.$pd.LISTENING &&
                    ((0, iI.A)(n)
                        ? _(
                              (0, E.jsx)(
                                  rI.SpotifySection,
                                  {
                                      activity: n,
                                      isSolo: 1 === s.length,
                                      partySize: { knownSize: o.length, unknownSize: 0, totalSize: o.length },
                                      getAssetImage: iN.uD,
                                      members: o,
                                  },
                                  `spotify-${n.session_id ?? t}-${u.id}`,
                              ),
                          )
                        : (null != n.assets || (0, ip.A)(n)) &&
                          _(
                              (0, E.jsx)(
                                  rI.RichPresenceSection,
                                  { activity: n, getAssetImage: iN.uD, user: u },
                                  `rich-presence-${n.session_id ?? t}-${u.id}`,
                              ),
                          ));
            c &&
                null != i &&
                null != r &&
                (0, io.zS)(n, i) &&
                (null == i.userStatus || !(0, is.gO)(i.userStatus, ii.uF.ACTIVITY_PANEL)) &&
                _((0, E.jsx)(iT.A, { quest: i }, `quest-${i.id}-${n.session_id ?? t}`));
        }),
        u.length > 0 ? (0, E.jsx)(rI.Body, { children: u }) : null
    );
}
n(595);
var rf = n(409626),
    rT = n(692969);
function rN(e) {
    let { party: t, onUserContextMenu: i } = e,
        { priorityMembers: r, partiedMembers: a, guildContext: l } = t,
        s = r[0],
        o = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                i = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
                r = n.filter((e) => !i.has(e.id)),
                a = rn.Ay.getName(t[0].user),
                l = null != t[1] ? rn.Ay.getName(t[1].user) : null != r[0] ? rn.Ay.getName(r[0]) : null;
            switch (n.length) {
                case 1:
                    return a;
                case 2:
                    return G.intl.format(G.t.t1DyC1, { user1: a, user2: l });
                default:
                    return G.intl.format(G.t["5CSEcJ"], { user1: a, user2: l, extras: n.length - 2 });
            }
        })(t),
        { subtitle: d, icon: c } = (function (e) {
            let { priorityMembers: t, partiedMembers: i, voiceChannels: r, currentActivities: a } = e,
                l = t.length,
                s = i.length - l,
                o = a[0],
                d = o?.activity,
                c = o?.startedPlayingTime,
                u = { name: d?.name ?? "" };
            if ((0, im.A)(d) && null != d)
                return {
                    subtitle: (0, E.jsx)(i2.Ay, {
                        start: c,
                        location: i2.Ay.Locations.ACTIVITY_FEED_NEW,
                        messageProps: u,
                    }),
                    icon: null,
                };
            if (l + s === 1 && null != o) {
                let { game: e } = o;
                if (null == d) return { subtitle: null, icon: null };
                let t = iS.Ij(d);
                if (null != t) return t;
                switch (d.type) {
                    case D.$pd.PLAYING:
                        if ((0, ig.A)(d))
                            return {
                                subtitle: G.intl.string(G.t.tO8wOx),
                                icon: (0, E.jsx)(rI.Header.Icon, { src: rI.Header.Icon.Src.XBOX }),
                            };
                        return {
                            subtitle: (0, E.jsx)(i2.Ay, {
                                start: c,
                                location: i2.Ay.Locations.ACTIVITY_FEED_NEW,
                                messageProps: u,
                            }),
                            icon:
                                null != e
                                    ? (0, E.jsx)(rI.Header.Icon, {
                                          src: null != e.getIconURL(64) ? e.getIconURL(64) : n(960648),
                                      })
                                    : null,
                        };
                    case D.$pd.STREAMING:
                        return {
                            subtitle: G.intl.string(G.t.HyGHj7),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, E.jsx)(rI.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    case D.$pd.LISTENING:
                        let i;
                        return (
                            (i = (0, iI.A)(d)
                                ? (0, E.jsx)(rI.Header.Icon, { src: rI.Header.Icon.Src.SPOTIFY })
                                : null != e.getIconURL(64)
                                  ? (0, E.jsx)(rI.Header.Icon, { src: e.getIconURL(64) })
                                  : (0, E.jsx)(rI.Header.Icon, { src: n(960648) })),
                            { subtitle: G.intl.formatToPlainString(G.t.NF5xop, { name: d.name }), icon: i }
                        );
                    case D.$pd.WATCHING:
                        return {
                            subtitle: G.intl.formatToPlainString(G.t.pW3Ip3, { name: d.name }),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, E.jsx)(rI.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    default:
                        return { subtitle: G.intl.string(G.t.grGyaf), icon: null };
                }
            }
            if (0 === a.length) {
                if (r.length > 0) return { subtitle: G.intl.string(G.t.grGyaf), icon: null };
                let e = a[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = iS.Ij(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === D.$pd.LISTENING)
                        return {
                            subtitle: G.intl.string(G.t.rmnkz4),
                            icon: (0, E.jsx)(rI.Header.Icon, { src: rI.Header.Icon.Src.SPOTIFY }),
                        };
                }
            } else if (1 === a.length) {
                let e = a.find((e) => null != e.activity);
                if (null == e) return { subtitle: null, icon: null };
                let { activity: t, game: n, startedPlayingTime: i } = e;
                return (
                    ew()(null != t, "Activity was null somehow"),
                    {
                        subtitle: (0, E.jsx)(i2.Ay, {
                            start: i,
                            location: i2.Ay.Locations.ACTIVITY_FEED_NEW,
                            messageProps: u,
                        }),
                        icon:
                            null != n && null != n.getIconURL(64)
                                ? (0, E.jsx)(rI.Header.Icon, { src: n.getIconURL(64) })
                                : null,
                    }
                );
            }
            return {
                subtitle: G.intl.string(G.t.sau5tt),
                icon: (0, E.jsx)(rI.Header.Icon, { src: rI.Header.Icon.Src.MULTIPLE }),
            };
        })(t),
        u = (0, rT.A)({
            applicationId: t.currentActivities[0]?.activity?.application_id,
            location: "FriendsActivityFeed",
            source: rf.Ob.FriendsActivityFeed,
        }),
        _ = (0, iZ.A)({ userId: s.user.id, guildId: l?.id }),
        A = (0, iQ.a)({ displayNameStyles: _ });
    return (0, E.jsx)(rI.Header, {
        priorityUser: s,
        guildId: l?.id,
        title: o,
        subtitle: d,
        icon: c,
        onSubtitleClick: u,
        onIconClick: u,
        onContextMenu: (e) => i(e, s.user),
        displayNameFont: 1 === a.length ? A : void 0,
    });
}
var rS = n(550079),
    rL = n(477782),
    rO = n(964486),
    ry = n(308368),
    rb = n(780907),
    rv = n(933958),
    rR = n(776677),
    rP = n(874546),
    rD = n(651743),
    rx = n(30370),
    rw = n(134861),
    rM = n(498642),
    rU = n(71393),
    rG = n(189081),
    rj = n(375492),
    rk = n(576705),
    rV = n(461213),
    rF = n(977997),
    rH = n(689168),
    rB = n(340829),
    rY = n(144914),
    r$ = n(715671);
let rz = iM.A.get(D.fg2.XBOX).name;
var rW = n(975732),
    rK = n(297413),
    rq = n(564450);
function rX(e) {
    let { user: t, status: n, guildId: i } = e;
    return (0, E.jsxs)("div", {
        className: rq.Ku,
        children: [
            (0, E.jsx)(iv.eu, {
                src: t.getAvatarURL(i, 24),
                className: rq.my,
                "aria-label": t.username,
                size: iR._3.SIZE_24,
                status: n,
            }),
            (0, E.jsx)(rK.A, { user: t, hideDiscriminator: !0 }),
        ],
    });
}
function rZ(e) {
    let { label: t } = e;
    return (0, E.jsxs)("div", {
        className: rq.Ku,
        children: [(0, E.jsx)("div", { className: tn()(rq.my, rq.L5) }), (0, E.jsx)("div", { children: t })],
    });
}
function rQ(e) {
    let {
            priorityMembers: t,
            otherMembers: n,
            totalMembers: i,
            activity: r,
            guildId: a,
            sourceAnalyticsLocations: l,
        } = e,
        s = [];
    for (let { user: e, status: n } of t)
        s.push(
            (0, E.jsx)(rL.Dr, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) => (0, E.jsx)(rX, { ...t, user: e, status: n, guildId: a }),
                action: () => (0, rW.openUserProfileModal)({ userId: e.id, guildId: a, sourceAnalyticsLocations: l }),
            }),
        );
    for (let e of n)
        s.push(
            (0, E.jsx)(rL.Dr, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) => (0, E.jsx)(rX, { ...t, user: e, guildId: a }),
                action: () => (0, rW.openUserProfileModal)({ userId: e.id, guildId: a, sourceAnalyticsLocations: l }),
            }),
        );
    let o = i - s.length;
    return (
        o > 0 &&
            s.push(
                (0, E.jsx)(rL.Dr, {
                    id: `unknown-members-${r?.session_id}`,
                    render: (e) =>
                        (0, E.jsx)(rZ, { ...e, label: G.intl.formatToPlainString(G.t["6Kqn9M"], { count: o }) }),
                }),
            ),
        s
    );
}
var rJ = n(308528),
    r0 = n(855511);
function r1(e) {
    return {
        af_voice_chat: e.voiceChannels.length > 0,
        af_people_count: e.partiedMembers.length,
        af_rich_presence: e.currentActivities.some((e) => {
            let { activity: t } = e;
            return (0, ip.A)(t);
        }),
        game_platform: e.currentActivities.length > 0 ? (0, r0.A)(e.currentActivities[0].activity) : null,
    };
}
var r2 = n(655116),
    r6 = n(341335),
    r5 = n(286617),
    r3 = n(533207),
    r4 = n(881335),
    r8 = n(272984);
function r7(e) {
    let t,
        n,
        i,
        { party: r, close: a, onSelect: l } = e,
        s = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                { priorityMembers: n, partiedMembers: i } = e,
                r = p.useContext(ec.AnalyticsContext),
                a = n.map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
                l = 1 === i.length && 1 === n.length,
                s = n.length - i.length > 0;
            return (l || t) && !s && 0 !== a.length
                ? (0, E.jsx)(rL.Dr, {
                      id: "message",
                      action: function () {
                          rJ.A.openPrivateChannel({ recipientIds: a }).then((t) =>
                              tY.Ay.trackWithMetadata(D.HAw.ACTIVITY_FEED_DM_VISITED, {
                                  source: { ...r.location, object: D.ZSU.LIST_ITEM },
                                  channel_id: t,
                                  recipient_id: "string" == typeof a ? a : a[0],
                                  af_recently_played: !1,
                                  ...r1(e),
                              }),
                          );
                      },
                      label: G.intl.string(G.t["g33r/P"]),
                  })
                : null;
        })(r),
        o =
            ((t = p.useContext(ec.AnalyticsContext)),
            (n = r.voiceChannels[0]),
            (i = (0, C.bG)([rk.A], () => null != n && rk.A.can(D.xBc.CONNECT, n.channel))),
            null == n
                ? null
                : [
                      (0, E.jsx)(
                          rL.Dr,
                          {
                              id: "join-voice",
                              action: function () {
                                  (0, i3.iN)(n.channel.id),
                                      O.default.selectVoiceChannel(n.channel.id),
                                      tY.Ay.trackWithMetadata(D.HAw.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
                                          source: { ...t.location, object: D.ZSU.LIST_ITEM },
                                          guild_id: n.guild.id,
                                          channel_id: n.channel.id,
                                          ...r1(r),
                                      });
                              },
                              label: G.intl.string(G.t["8yOlh9"]),
                              disabled: !i,
                          },
                          "join-voice",
                      ),
                      (0, E.jsx)(
                          rL.Dr,
                          {
                              id: "goto-server",
                              action: function () {
                                  (0, i4.u)(n.guild.id),
                                      tY.Ay.trackWithMetadata(D.HAw.ACTIVITY_FEED_GUILD_VISITED, {
                                          source: { ...t.location, object: D.ZSU.LIST_ITEM },
                                          guild_id: n.guild.id,
                                          af_recently_played: !1,
                                          ...r1(r),
                                      });
                              },
                              label: G.intl.string(G.t.RGgqm1),
                          },
                          "goto-server",
                      ),
                  ]),
        d = (function (e) {
            let { applicationStreams: t } = e;
            return t.map((e) => {
                let { stream: t, streamUser: n } = e;
                return (0, E.jsx)(
                    rL.Dr,
                    {
                        id: `spectate-${t.ownerId}`,
                        action: () => {
                            O.default.selectVoiceChannel(t.channelId), (0, iE.Nl)(t);
                        },
                        label: G.intl.formatToPlainString(G.t.m09d0T, { streamerName: rn.Ay.getName(n) }),
                    },
                    `spectate-${t.ownerId}`,
                );
            });
        })(r),
        c = (function (e) {
            let { currentActivities: t, isSpotifyActivity: n } = e,
                i = t[0],
                r = (function (e, t) {
                    let n = (0, C.bG)(
                        [r2.A, P.default],
                        () => (null != t ? (0, r5.A)(r2.A, P.default, t, e) : void 0),
                        [e, t],
                    );
                    if (null == n || null == e || null == t) return null;
                    let i = n.isCurrentUser || n.notPlayable || n.playingSameTrack,
                        r = n.isCurrentUser || n.syncingWithUser || n.syncingWithParty;
                    return [
                        (0, E.jsx)(
                            rL.Dr,
                            {
                                id: `spotify-play-${e.session_id}`,
                                action: () => (0, r4.A)(n, r8.Qp.USER_ACTIVITY_PLAY, void 0),
                                label: G.intl.string(G.t.rRffNz),
                                subtext: i ? (0, r6.A)(n, r8.Qp.USER_ACTIVITY_PLAY) : void 0,
                                disabled: i,
                            },
                            `spotify-play-${e.session_id}`,
                        ),
                        n.canPlaySpotify
                            ? (0, E.jsx)(
                                  rL.Dr,
                                  {
                                      id: `spotify-sync-${e.session_id}`,
                                      action: () => (0, r3.A)(n, r8.Qp.USER_ACTIVITY_SYNC, void 0),
                                      label: G.intl.string(G.t.eU3inB),
                                      subtext: r ? (0, r6.A)(n, r8.Qp.USER_ACTIVITY_SYNC) : void 0,
                                      disabled: r,
                                  },
                                  `spotify-sync-${e.session_id}`,
                              )
                            : null,
                    ];
                })(i?.activity, i?.activityUser);
            return n ? r : null;
        })(r),
        u = (function (e) {
            let { currentActivities: t } = e,
                n = t.length > 1,
                i = (function (e) {
                    let { currentActivities: t } = e,
                        n = t.some((e) => {
                            let { activity: t } = e;
                            return (0, ip.A)(t);
                        }),
                        i = (0, C.bG)([rx.A], () =>
                            rx.A.getAccounts().some((e) => e.type === iM.A.get(D.fg2.XBOX).type),
                        ),
                        r = t.filter((e) => {
                            let { activity: t } = e;
                            return (0, ig.A)(t);
                        }),
                        a = r.length > 0,
                        l = r.some((e) => {
                            let { activity: t } = e;
                            return (0, rP.Ay)(t);
                        });
                    return n || i || !a || l
                        ? null
                        : (0, E.jsx)(rL.Dr, {
                              id: "xbox-connect",
                              action: () => (0, e5.openUserSettings)(e6.X.CONNECTIONS_PANEL),
                              label: G.intl.formatToPlainString(G.t.XWSHTb, { platform: rz }),
                          });
                })(e),
                r = (function (e) {
                    let { currentActivities: t } = e,
                        n = p.useContext(ec.AnalyticsContext);
                    return (0, C.yK)([
                        i_.default,
                        rG.A,
                        i7.A,
                        rU.A,
                        rM.A,
                        eZ.A,
                        ee.A,
                        rF.A,
                        rk.A,
                        rj.A,
                        rV.A,
                        rv.Ay,
                        rD.A,
                        rB.A,
                        rw.A,
                        eT.Ay,
                        rH.A,
                    ], () => {
                        let e = i_.default.getCurrentUser();
                        return t
                            .filter((e) => !(0, im.A)(e.activity))
                            .map((t) => {
                                let { activity: i, game: r, activityUser: a } = t,
                                    l = rG.A.getActiveLibraryApplication(r.id);
                                return {
                                    ...t,
                                    libraryApplication: l,
                                    activityJoinability: (0, rR.A)({
                                        user: a,
                                        activity: i,
                                        application: r,
                                        channelId: null,
                                        currentUser: e,
                                        isEmbedded: !1,
                                        ChannelStore: i7.A,
                                        GuildStore: rU.A,
                                        GuildMemberCountStore: rM.A,
                                        RelationshipStore: eZ.A,
                                        SelectedChannelStore: ee.A,
                                        VoiceStateStore: rF.A,
                                        PermissionStore: rk.A,
                                        LocalActivityStore: rj.A,
                                        SelfPresenceStore: rV.A,
                                        EmbeddedActivitiesStore: rv.Ay,
                                    }),
                                    canPlay: (0, rY.A)({
                                        LibraryApplicationStore: rG.A,
                                        LaunchableGameStore: rD.A,
                                        DispatchApplicationStore: rB.A,
                                        ConnectedAppsStore: rw.A,
                                        applicationId: r.id,
                                        branchId: null != l ? l.branchId : null,
                                    }),
                                    isJoining: rH.A.getState(r.id, D.xL.JOIN) === D.eAD.LOADING,
                                    isLaunching: rD.A.launchingGames.has(r.id),
                                    isRunning: eT.Ay.getRunningVerifiedApplicationIds().includes(r.id),
                                    location: n.location,
                                };
                            });
                    }, [n.location, t]);
                })(e),
                a = [];
            for (let e of r) {
                let { activity: t } = e;
                null != t &&
                    null != t.type &&
                    a.push(
                        (function (e, t) {
                            let { activity: n, activityUser: i, game: r, activityJoinability: a, isJoining: l } = e;
                            if (null == n) return null;
                            if (a === rR.o.JOINED)
                                return (0, E.jsx)(rL.Dr, {
                                    id: `joined-game-${n.session_id}`,
                                    label: G.intl.string(G.t.KC26NR),
                                    subtext: n.name,
                                    disabled: !0,
                                });
                            if (a === rR.o.CAN_JOIN)
                                return (0, E.jsx)(rL.Dr, {
                                    id: `join-game-${n.session_id}`,
                                    label: l ? G.intl.string(G.t.bf6Ci7) : G.intl.string(G.t.VJlc0S),
                                    subtext: n.name,
                                    disabled: l,
                                    action: () => {
                                        rb.Ay.join({
                                            userId: i.id,
                                            sessionId: n.session_id,
                                            applicationId: r.id,
                                            channelId: null,
                                            messageId: null,
                                            source: D.ThZ.USER_ACTIVITY_ACTIONS,
                                        });
                                    },
                                });
                            if ((0, rP._C)(n)) {
                                async function s() {
                                    if (null == n) return;
                                    let e = await ry.A.sendActivityInviteUser({
                                        type: D.xL.JOIN_REQUEST,
                                        userId: i.id,
                                        activity: n,
                                        location: D.ThZ.USER_ACTIVITY_ACTIONS,
                                    });
                                    null != e && O.default.selectPrivateChannel(e.id);
                                }
                                return (0, E.jsx)(rL.Dr, {
                                    id: `join-${n.session_id}`,
                                    label: t
                                        ? G.intl.formatToPlainString(G.t.wFAvxM, { name: i.toString() })
                                        : G.intl.string(G.t.OKsSCR),
                                    subtext: n.name,
                                    action: s,
                                });
                            }
                            return null;
                        })(e, n),
                        (function (e, t) {
                            let {
                                activity: n,
                                game: i,
                                libraryApplication: r,
                                location: a,
                                canPlay: l,
                                isRunning: s,
                                isLaunching: o,
                            } = e;
                            if (!l || null == n) return null;
                            let d = s
                                ? G.intl.formatToPlainString(G.t["gBme/4"], { name: i.name })
                                : o
                                  ? G.intl.formatToPlainString(G.t.WtSQwG, { name: i.name })
                                  : void 0;
                            return (0, E.jsx)(rL.Dr, {
                                id: `play-${n.session_id}`,
                                action: function () {
                                    (0, r$.playApplication)(i.id, r, {
                                        analyticsParams: { location: { ...a, object: D.ZSU.LIST_ITEM } },
                                    });
                                },
                                label: t
                                    ? G.intl.formatToPlainString(G.t.ZDZEJN, { name: i.name })
                                    : G.intl.string(G.t.XKUw8m),
                                disabled: s || o,
                                subtext: d,
                            });
                        })(e, n),
                    );
            }
            return [...a, i];
        })(r),
        _ = (function (e) {
            let { priorityMembers: t, partiedMembers: n, currentActivities: i, guildContext: r } = e,
                a = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
                l = n.filter((e) => !a.has(e.id)),
                { analyticsLocations: s } = (0, nQ.Ay)(),
                o = p.useMemo(() => {
                    let e = i
                        .flatMap((e) => {
                            let { playingMembers: t } = e;
                            return t;
                        })
                        .map((e) => e.id);
                    return n.filter((t) => !e.includes(t.id));
                }, [n, i]);
            if (i.length <= 1 && 0 === o.length)
                return (0, E.jsx)(rL.rX, {
                    label: n.length > 1 ? G.intl.formatToPlainString(G.t.C4WXvc, { memberCount: n.length }) : void 0,
                    children: rQ({
                        priorityMembers: t,
                        otherMembers: l,
                        totalMembers: n.length,
                        activity: i[0]?.activity ?? void 0,
                        guildId: r?.id,
                        sourceAnalyticsLocations: s,
                    }),
                });
            let d = i.map((e, n) => {
                    let { playingMembers: i, game: l, activity: o } = e,
                        d = new Set(i.map((e) => e.id));
                    return (0, E.jsx)(
                        rL.rX,
                        {
                            label: `${l.name} - ${i.length}`,
                            children: rQ({
                                priorityMembers: t.filter((e) => {
                                    let { user: t } = e;
                                    return d.has(t.id);
                                }),
                                otherMembers: i.filter((e) => !a.has(e.id)),
                                totalMembers: i.length,
                                activity: o ?? void 0,
                                guildId: r?.id,
                                sourceAnalyticsLocations: s,
                            }),
                        },
                        n,
                    );
                }),
                c = o.map((e) => e.id);
            return [
                ...d,
                (0, E.jsx)(rL.rX, {
                    label: `${G.intl.string(G.t["mIx+gG"])} - ${o.length}`,
                    children: rQ({
                        priorityMembers: t.filter((e) => {
                            let { user: t } = e;
                            return c.includes(t.id);
                        }),
                        otherMembers: o.filter((e) => !a.has(e.id)),
                        totalMembers: o.length,
                        guildId: r?.id,
                        sourceAnalyticsLocations: s,
                    }),
                }),
            ];
        })(r);
    return (
        (0, rO.Ay)(() => {
            let e = r.currentActivities
                .filter((e) => e.game?.name != null && (0, ec.isGameApplicationType)(e.game?.type))
                .map((e) => e.game.name);
            ec.default.track(D.HAw.OPEN_POPOUT, { type: "Now Playing Card Popout", games_detected: e });
        }),
        (0, E.jsxs)(rS.W, {
            "data-menu-migrated": !0,
            navId: "now-playing-menu",
            onClose: a,
            "aria-label": G.intl.string(G.t.ogxXGq),
            onSelect: l,
            children: [
                s,
                (0, E.jsxs)(rL.rX, { children: [o, d] }),
                (0, E.jsx)(rL.rX, { children: c }),
                (0, E.jsx)(rL.rX, { children: u }),
                _,
            ],
        })
    );
}
var r9 = n(442433),
    ae = n(707606),
    at = n(522986);
let an = 15 * eu.A.Millis.MINUTE,
    ai =
        ((o = function (e) {
            let { party: t, onUserContextMenu: n, onChannelContextMenu: i, quest: r } = e,
                a = p.useRef(null),
                l = (0, E.jsx)(rN, { party: t, onUserContextMenu: n }),
                s = (0, E.jsx)(rC, { party: t, onChannelContextMenu: i, quest: r }),
                { partiedMembers: o, applicationStreams: d, currentActivities: c, voiceChannels: u } = t,
                _ = o.length,
                A = d.length,
                h = c.length,
                m = u.length > 0,
                I = p.useCallback(() => {
                    let e = c
                        .filter((e) => e.game?.name != null && (0, ec.isGameApplicationType)(e.game?.type))
                        .map((e) => e.game.name);
                    ec.default.track(D.HAw.NOW_PLAYING_CARD_HOVERED, {
                        num_users: _,
                        num_streams: A,
                        num_activities: h,
                        in_voice_channel: m,
                        games_detected: e,
                    });
                }, [_, A, h, m, c]),
                g = p.useMemo(() => n7()(I, an), [I]);
            return null != l || null != s
                ? (0, E.jsx)(n9.Y, {
                      targetElementRef: a,
                      position: "left",
                      renderPopout: (e) => {
                          let { closePopout: n } = e;
                          return (0, E.jsx)(r7, { party: t, close: n });
                      },
                      spacing: 8,
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, E.jsx)(rI, {
                              ...e,
                              ref: a,
                              onMouseEnter: g,
                              "aria-haspopup": "menu",
                              className: at.MP,
                              active: n,
                              children: (0, E.jsxs)("div", { children: [l, s] }),
                          });
                      },
                  })
                : null;
        }),
        (0, ae.A)(
            class extends p.Component {
                render() {
                    return (0, E.jsx)(o, {
                        ...this.props,
                        onMessageUser: this.handleMessageUser,
                        onUserContextMenu: this.handleUserContextMenu,
                        onGuildContextMenu: this.handleGuildContextMenu,
                        onChannelContextMenu: this.handleChannelContextMenu,
                    });
                }
                handleMessageUser(e, t) {
                    return rJ.A.openPrivateChannel({ recipientIds: t.id });
                }
                handleUserContextMenu(e, t, i) {
                    (0, r9.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("61657")]).then(
                                n.bind(n, 668569),
                            );
                            return (n) => (0, E.jsx)(e, { ...n, user: t });
                        },
                        { onClose: i },
                    );
                }
                handleGuildContextMenu(e, t) {
                    (0, r9.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("32292"),
                            n.e("49681"),
                            n.e("96382"),
                            n.e("20044"),
                            n.e("28367"),
                            n.e("45174"),
                            n.e("85519"),
                            n.e("11871"),
                            n.e("37266"),
                            n.e("55057"),
                            n.e("14976"),
                            n.e("63229"),
                            n.e("31988"),
                            n.e("55343"),
                            n.e("93103"),
                            n.e("88342"),
                            n.e("8555"),
                            n.e("40142"),
                            n.e("60161"),
                            n.e("98765"),
                            n.e("65437"),
                            n.e("34983"),
                            n.e("92414"),
                            n.e("95208"),
                            n.e("72401"),
                            n.e("47417"),
                            n.e("19558"),
                            n.e("58946"),
                            n.e("76390"),
                            n.e("93312"),
                            n.e("95752"),
                            n.e("87046"),
                            n.e("90161"),
                            n.e("31538"),
                            n.e("34828"),
                            n.e("99717"),
                            n.e("6698"),
                            n.e("98954"),
                            n.e("227"),
                            n.e("90184"),
                            n.e("62718"),
                            n.e("29594"),
                            n.e("52286"),
                            n.e("8018"),
                            n.e("7637"),
                            n.e("28136"),
                            n.e("3025"),
                            n.e("86674"),
                            n.e("4009"),
                            n.e("49862"),
                            n.e("80093"),
                            n.e("22547"),
                            n.e("60989"),
                            n.e("82486"),
                            n.e("77602"),
                            n.e("68587"),
                            n.e("86546"),
                            n.e("15373"),
                            n.e("42749"),
                            n.e("56026"),
                            n.e("16301"),
                            n.e("22191"),
                            n.e("46411"),
                            n.e("25961"),
                            n.e("44935"),
                            n.e("13848"),
                            n.e("62890"),
                            n.e("46291"),
                            n.e("41068"),
                            n.e("32347"),
                            n.e("8458"),
                            n.e("15666"),
                            n.e("11810"),
                            n.e("95765"),
                            n.e("31742"),
                            n.e("13337"),
                            n.e("65338"),
                            n.e("49036"),
                            n.e("49594"),
                        ]).then(n.bind(n, 860417));
                        return (n) => (0, E.jsx)(e, { ...n, guild: t });
                    });
                }
                handleChannelContextMenu(e, t) {
                    let i = rU.A.getGuild(t.getGuildId());
                    if (null == i) return null;
                    (0, r9.L3)(e, async () => {
                        let { default: e } = await n.e("67596").then(n.bind(n, 113255));
                        return (n) => (0, E.jsx)(e, { ...n, channel: t, guild: i });
                    });
                }
            },
        )),
    ar = eU().throttle(() => ic.u(), 3e5);
function aa() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: i,
            currentUser: r,
        } = (0, C.cf)([iA.A, iu.A, i_.default], () => ({
            nowPlayingCards: iA.A.nowPlayingCards,
            loaded: iA.A.loaded,
            needsRefresh: iu.A.shouldFetch(),
            fetching: iu.A.isFetching(),
            currentUser: i_.default.getCurrentUser(),
        })),
        a = (0, C.bG)([it.A], () => it.A.quests),
        l = (0, il.oH)(Array.from(a.values()));
    p.useEffect(
        () => (
            q.h.wait(() => ih.O()),
            () => {
                q.h.wait(() => ih.v());
            }
        ),
        [r?.id],
    ),
        p.useEffect(() => {
            n && !i && ar();
        }, [n, i]);
    let { use_api_call: s } = ia.getConfig({ location: "NowPlaying" }),
        { questsByPartyId: o, questIdsByPartyId: d } = p.useMemo(() => {
            let t = new Map(),
                n = new Map(),
                i = new Set(),
                r = (0, id.$e)(a, nT.B3);
            for (let a of e)
                a.party.currentActivities.forEach((e) => {
                    let { activity: l } = e;
                    if (null == l) return;
                    let s = (0, io.nq)(r, l);
                    null == s || i.has(s.id) || (t.set(a.party.id, s), i.add(s.id), n.set(a.party.id, s.id));
                });
            return { questsByPartyId: t, questIdsByPartyId: n };
        }, [e, a, l]),
        c = (0, C.bG)([it.A], () => it.A.earnedQuestForPlacement.get(ii.uF.ACTIVITY_PANEL), []),
        u = p.useRef([]),
        _ = p.useMemo(() => {
            let e = Array.from(d.values()),
                t = u.current;
            return t.length === e.length && e.every((e, n) => e === t[n]) ? t : ((u.current = e), e);
        }, [d]);
    p.useEffect(() => {
        s && 0 !== _.length && (0, ie.yO)(_, ii.uF.ACTIVITY_PANEL, "NowPlaying");
    }, [_, s, c]);
    let A = p.useMemo(() => {
            if (!s) return o;
            if (null == c) return new Map();
            let e = new Map();
            for (let [t, n] of d.entries()) {
                let i = c.earnedDecisionByQuestId.get(n),
                    r = a.get(n);
                (0, is.Oh)(i) && i.shouldDeliver && null != r && e.set(t, r);
            }
            return e;
        }, [c, d, o, s, a]),
        h = null;
    return t
        ? (h =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, E.jsx)(ai, { party: t, quest: A.get(t.id) }, t.id);
                    })
                  : (0, E.jsxs)("div", {
                        className: at.aM,
                        children: [
                            (0, E.jsx)(n_.D, {
                                variant: "heading-md/semibold",
                                className: at.jU,
                                children: G.intl.string(G.t["ngJ/5u"]),
                            }),
                            (0, E.jsx)(nu.E, {
                                color: "none",
                                className: at.BI,
                                variant: "text-sm/normal",
                                children: G.intl.string(G.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, E.jsx)("div", { className: at.aM, children: (0, E.jsx)(tl.y, {}) });
}
var al = n(678428);
function as() {
    let { analyticsLocations: e } = (0, nQ.Ay)(eg.A.ACTIVE_NOW_COLUMN),
        t = (0, C.bG)([n4.A], () => n4.A.hasConsented(D.YAq.PERSONALIZATION)) ? [] : [nq.M.NOW_PLAYING_CONSENT_CARD],
        n = (0, n$.GV)();
    return (0, E.jsx)(nQ.f5, {
        value: e,
        children: (0, E.jsx)(nZ.A, {
            section: D.JJy.ACTIVE_NOW_COLUMN,
            children: (0, E.jsx)("aside", {
                className: tn()(al.kL, "refresh-active-now"),
                "aria-labelledby": n,
                children: (0, E.jsx)(nX.Ip, {
                    className: al.XG,
                    children: (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)(n_.D, {
                                variant: "heading-lg/semibold",
                                className: al.wx,
                                id: n,
                                children: G.intl.string(G.t.F4Zggw),
                            }),
                            (0, E.jsx)(nJ.Ay, {
                                contentTypes: t,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === nq.M.NOW_PLAYING_CONSENT_CARD)
                                        return (0, E.jsx)(n3, {
                                            className: al.__invalid_consentCard,
                                            markAsDismissed: n,
                                        });
                                },
                            }),
                            (0, E.jsx)(aa, {}),
                        ],
                    }),
                }),
            }),
        }),
    });
}
var ao = n(210714),
    ad = n(363195),
    ac = n(595623),
    au = n(573725),
    a_ = n(49229),
    aA = n(953051),
    ah = n(395422),
    aE = n(650583),
    ap = n(235351),
    am = n(818050);
let aI = n(892799),
    ag = { canSend: !1, hint: null, success: null, error: null },
    aC = (0, n$.Ld)(),
    af = `${aC}-decription`,
    aT = `${aC}-error`;
function aN(e, t) {
    switch (t.type) {
        case "RESET":
            return ag;
        case "SUCCESS":
            return { ...ag, success: t.text };
        case "HINT":
            return { ...ag, canSend: !0, hint: t.text };
        case "ERROR":
            return { ...e, canSend: !0, error: t.text };
    }
}
function aS(e) {
    let { placeholder: t = G.intl.string(G.t["Rn/sLl"]) } = e,
        n = p.useRef(null),
        i = p.useRef(null),
        [r, a] = p.useReducer(aN, ag),
        { canSend: l, hint: s, error: o, success: d } = r;
    return (
        p.useEffect(() => {
            null != d &&
                (ew()(null != n.current, "Input is submitting when not mounted"),
                (n.current.value = ""),
                n.current.focus());
        }, [d, n]),
        (0, E.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(), ew()(null != n.current, "Input is submitted when not mounted");
                let t = n.current.value.trim();
                !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
                let i = (0, ah.Ty)(t);
                null != i
                    ? a({ type: "ERROR", text: i })
                    : a_.A.sendRequest({ discordTag: t, context: { location: "Add Friend" } }).then(
                          () => a({ type: "SUCCESS", text: G.intl.format(G.t.Rtl1Ep, { discordTag: t }) }),
                          (e) => a({ type: "ERROR", text: (0, ah.vU)(e.body?.code, t) }),
                      );
            },
            autoComplete: "off",
            children: [
                (0, E.jsxs)("div", {
                    className: ap.QR,
                    children: [
                        (0, E.jsx)(nu.E, {
                            tag: "div",
                            variant: "heading-md/normal",
                            children: G.intl.string(G.t["Rn/sLl"]),
                        }),
                        (0, E.jsx)("img", { src: aI, alt: "Wumpus Waving" }),
                    ],
                }),
                (0, E.jsx)(iD.vN, {
                    focusTarget: n,
                    ringTarget: i,
                    ringClassName: ap.hN,
                    children: (0, E.jsxs)("div", {
                        ref: i,
                        className: tn()(ap.fc, { [ap.kX]: d, [ap.z3]: o }),
                        children: [
                            (0, E.jsx)(au.p, {
                                id: aC,
                                inputRef: n,
                                className: ap.QP,
                                inputClassName: ap.hF,
                                onKeyPress: (e) => {
                                    let t = e.currentTarget.value;
                                    if (e.key !== aE.N$.Enter && t.includes("#")) {
                                        ew()(null != n.current, "Input is handling keypress when not mounted");
                                        let i = t.indexOf("#"),
                                            r = n.current.selectionStart,
                                            a =
                                                e.key === aE.N$.Backspace ||
                                                e.key === aE.N$.ArrowRight ||
                                                e.key === aE.N$.ArrowLeft,
                                            l = (0, aA.A)(e.key);
                                        null != r && r > i && /^(.+?#\d{4})$/.test(t) && !a
                                            ? e.preventDefault()
                                            : null == r || !(r > i) || l || a || e.preventDefault();
                                    }
                                },
                                onChange: (e) => {
                                    if (e.length <= 0) return void a({ type: "RESET" });
                                    let t = "",
                                        [, n] = e.split("#");
                                    null != n && (t = e + D.RoK.slice(null != n ? n.length + 1 : 0)),
                                        a({ type: "HINT", text: t });
                                },
                                maxLength: 37,
                                autoFocus: !0,
                                autoComplete: "off",
                                name: "add-friend",
                                "data-form-type": "other",
                                "data-lpignore": !0,
                                "data-1p-ignore": !0,
                                placeholder: t,
                                "aria-label": t,
                                "aria-invalid": null != o || void 0,
                                "aria-describedby": null != o ? aT : af,
                            }),
                            null != s && (0, E.jsx)("div", { className: ap.dQ, "aria-hidden": !0, children: s }),
                            (0, E.jsx)(n0.$, {
                                variant: "primary",
                                size: "sm",
                                text: G.intl.string(G.t["PMsq/b"]),
                                disabled: !l,
                                type: "submit",
                            }),
                        ],
                    }),
                }),
                null != o &&
                    (0, E.jsx)("div", {
                        role: "alert",
                        children: (0, E.jsx)(nu.E, {
                            id: aT,
                            variant: "text-sm/normal",
                            className: am.Ot,
                            color: "text-feedback-critical",
                            children: o,
                        }),
                    }),
                null != d &&
                    (0, E.jsx)("div", {
                        role: "status",
                        children: (0, E.jsx)(nu.E, {
                            variant: "text-sm/normal",
                            className: am.Ot,
                            color: "text-feedback-positive",
                            children: d,
                        }),
                    }),
            ],
        })
    );
}
var aL = n(836480),
    aO = n(976860);
function ay(e) {
    let { color: t = "currentColor", ...n } = e;
    return (0, E.jsx)("svg", {
        ...n,
        fill: "none",
        height: "20",
        viewBox: "0 0 20 20",
        width: "20",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, E.jsx)("path", {
            clipRule: "evenodd",
            d: "m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 1.74426 1.7625 7.42237-7.5-7.42237-7.5z",
            fill: t,
            fillRule: "evenodd",
        }),
    });
}
var ab = n(505973);
function av() {
    var e, t, n;
    return (0, E.jsxs)(p.Fragment, {
        children: [
            (0, E.jsxs)("header", {
                className: ab.wx,
                children: [
                    (0, E.jsx)(n_.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: G.intl.string(G.t.IuMx1Y),
                    }),
                    (0, E.jsx)(nu.E, { tag: "div", variant: "heading-md/normal", children: G.intl.string(G.t.DwevPs) }),
                ],
            }),
            (0, E.jsx)("div", {
                className: ab.Vg,
                children:
                    ((e = aL.Q),
                    (t = G.intl.string(G.t.AhKnz4)),
                    (n = () => {
                        ec.default.track(D.HAw.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED),
                            (0, aO.pX)(D.BVt.GUILD_DISCOVERY);
                    }),
                    (0, E.jsxs)(
                        "button",
                        {
                            className: ab.kL,
                            onClick: n,
                            children: [
                                "function" == typeof e
                                    ? (0, E.jsx)("div", {
                                          className: ab.Kk,
                                          children: (0, E.jsx)(e, {
                                              className: ab.__invalid_iconInner,
                                              color: tw.A.colors.WHITE.css,
                                          }),
                                      })
                                    : (0, E.jsx)("img", { className: ab.Kk, alt: "", src: e }),
                                (0, E.jsx)(nu.E, { className: ab.Qq, variant: "text-md/medium", children: t }),
                                (0, E.jsx)(ay, { className: ab.UE }),
                            ],
                        },
                        t,
                    )),
            }),
        ],
    });
}
var aR = n(739175);
function aP() {
    return (0, E.jsxs)("header", {
        className: aR.wx,
        children: [
            (0, E.jsx)(n_.D, { variant: "heading-lg/semibold", className: aR.DD, children: G.intl.string(G.t.w5uwoI) }),
            (0, E.jsx)(aS, {}),
        ],
    });
}
let aD = function () {
    return (0, E.jsxs)(p.Fragment, { children: [(0, E.jsx)(aP, {}), (0, E.jsx)(av, {})] });
};
var ax = n(123292),
    aw = n(900797),
    aM = n(847374),
    aU = n(892547),
    aG = n(70730),
    aj = n(45787),
    ak = n(275759);
let aV = (0, ir.mj)({
    kind: "user",
    name: "2026-03-post-friend-accept-cta",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var aF = n(534890),
    aH = n(530005),
    aB = n(157559),
    aY = n(3203),
    a$ = n(408278),
    az = n(597770),
    aW = n(414711),
    aK = n(397244),
    aq = n(714114),
    aX = n(729551),
    aZ = n(501859);
let aQ = function (e) {
    let { hovered: t, activities: n, applicationStream: i, status: r, user: a, userIgnored: l } = e,
        { voiceChannel: s } = (0, aq.A)({ userId: a?.id });
    return l
        ? (0, E.jsx)("div", { className: aZ.Q, children: G.intl.string(G.t.tFY5Zb) })
        : (0, aK.A)({ activities: n, status: r, applicationStream: i, voiceChannel: s })
          ? (0, E.jsx)(aX.A, {
                textClassName: aZ.q,
                activities: n,
                applicationStream: i,
                voiceChannel: s,
                animateEmoji: t,
                user: a,
                textSize: "sm",
            })
          : (0, E.jsx)("div", { className: aZ.Q, children: (0, rn.MU)(r) });
};
var aJ = n(723690),
    a0 = n(751188);
n(646363);
var a1 = n(728552);
function a2(e) {
    let {
            ref: t,
            isFocused: i,
            isActive: r,
            status: a,
            activities: l,
            applicationStream: s,
            isGameRelationship: o,
            isMobile: d,
            isVR: c,
            onOtherHover: u,
            onClick: _,
            recipientUser: A,
            analyticsLocations: h,
            giftIntentType: m,
        } = e,
        { analyticsLocations: I } = (0, nQ.Ay)(eg.A.PREMIUM_GIFT_INTENT_FRIEND_ROW),
        { Component: g } = (0, aY.V)(),
        T = (0, C.bG)([ak.Ay], () => ak.Ay.getFriendAnniversaryYears(A.id)),
        { openGiftModal: N } = (0, a0.$)({
            giftRecipient: A,
            analyticsLocations: I,
            analyticsLocation: D.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
            analyticsObject: {
                page: D.liQ.FRIENDS_LIST,
                section: D.JJy.FRIENDS_LIST_FRIEND_ROW,
                object: D.ZSU.BUTTON_CTA,
                objectType: D.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-intent-friend-row",
        });
    p.useEffect(() => {
        let e = iu.A.getUserAffinity(A.id);
        (0, iH.x)({
            name: ti.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: ti.ImpressionTypes.VIEW,
            properties: { gift_intent_type: m, affinity: e?.communicationProbability },
        });
    }, [A, m]);
    let S = (e) => {
        e.stopPropagation();
        let t = iu.A.getUserAffinity(A.id);
        ec.default.track(D.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
            gift_intent_type: m,
            affinity: t?.dmProbability,
            location_stack: I,
        }),
            N();
    };
    return (0, E.jsx)(aW.A, {
        ref: t,
        isFocused: i,
        isActive: r,
        user: A,
        analyticsLocations: h,
        onOtherHover: u,
        onClick: _,
        height: 72,
        children: (e) =>
            (0, E.jsxs)("div", {
                className: tn()(a1.a4, a1.Z$),
                children: [
                    (0, E.jsx)(aJ.A, {
                        className: a1.Cv,
                        user: A,
                        status: a,
                        isMobile: d,
                        isVR: c,
                        subText: (0, E.jsxs)(E.Fragment, {
                            children: [
                                (0, E.jsx)(aQ, {
                                    hovered: e,
                                    activities: l,
                                    applicationStream: s,
                                    status: a,
                                    user: A,
                                    userIgnored: eZ.A.isIgnored(A.id),
                                }),
                                (0, E.jsxs)("div", {
                                    className: a1.K3,
                                    children: [
                                        (0, E.jsx)(nF.$, { size: "xxs", color: "currentColor" }),
                                        (0, E.jsx)(nu.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: G.intl.formatToPlainString(G.t.S3fdq7, { numberOfYears: T }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        hovered: e,
                        showAccountIdentifier: !o && !A.isProvisional,
                    }),
                    (0, E.jsxs)("div", {
                        className: a1.o1,
                        children: [
                            (0, E.jsx)(a$.K, {
                                size: "sm",
                                variant: "secondary",
                                icon: g,
                                "aria-label": G.intl.string(G.t.I61IsE),
                                onClick: () => {
                                    ec.default.track(D.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: m,
                                        cta_type: "send_message",
                                        location_stack: I,
                                    }),
                                        (0, aj.xs)(A.id),
                                        (0, f.openModalLazy)(async () => {
                                            let { default: e } = await n.e("17882").then(n.bind(n, 367516));
                                            return (t) =>
                                                (0, E.jsx)(e, {
                                                    ...t,
                                                    giftIntentType: m ?? void 0,
                                                    analyticsLocationHistory: I,
                                                });
                                        });
                                },
                            }),
                            (0, E.jsx)(n0.$, {
                                size: "sm",
                                text: G.intl.string(G.t.PEjaCx),
                                icon: az.o,
                                "aria-label": G.intl.string(G.t.PEjaCx),
                                onClick: S,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
var a6 = n(22212),
    a5 = n(430159),
    a3 = n(513297),
    a4 = n(788868);
function a8(e) {
    let { user: t, applicationId: n, isGameRelationship: i, onSelect: r } = e,
        a = p.useCallback(() => {
            (0, a6.X9)({ targetUserId: t.id, tab: ac.Ay.getState().section }),
                rJ.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0 });
        }, [t.id]),
        l = p.useCallback(() => {
            (0, a6.Cf)({ targetUserId: t.id, tab: ac.Ay.getState().section }),
                rJ.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0, joinCallVideo: !0 });
        }, [t.id]),
        s = p.useCallback(() => {
            a5.A.removeFriend({ userId: t.id, applicationId: i ? n : null, location: "Friends" });
        }, [n, i, t.id]),
        o = p.useCallback(() => {
            let e = i ? G.intl.string(G.t.RLcE6x) : G.intl.string(G.t.cvSt1J);
            (0, a6.lP)({ targetUserId: t.id, tab: ac.Ay.getState().section }),
                aB.A.show({
                    title: G.intl.formatToPlainString(G.t.fPLvZd, { name: rn.Ay.getName(t) }),
                    body: G.intl.formatToPlainString(G.t.l5FFq6, { name: rn.Ay.getName(t) }),
                    confirmText: e,
                    confirmVariant: "critical-primary",
                    cancelText: G.intl.string(G.t["ETE/oC"]),
                    onConfirm: s,
                });
        }, [s, i, t]),
        d = (0, C.bG)([eS.Ay], () => eS.Ay.supports(eO.O5.VIDEO)),
        c = t.isProvisional,
        u = i ? G.intl.string(G.t.RLcE6x) : G.intl.string(G.t.cvSt1J);
    return (0, E.jsxs)(rS.W, {
        "data-menu-migrated-auto": !0,
        navId: "friend-row",
        "aria-label": G.intl.string(G.t.liqwPJ),
        onClose: r9.Z_,
        onSelect: r,
        children: [
            !c && d ? (0, E.jsx)(rL.Dr, { id: "start-video-call", label: G.intl.string(G.t.oCqlGG), action: l }) : null,
            !c && (0, E.jsx)(rL.Dr, { id: "start-voice-call", label: G.intl.string(G.t.focH1t), action: a }),
            (0, E.jsx)(rL.Dr, { id: "remove-friend", label: u, action: o, color: "danger" }),
        ],
    });
}
class a7 extends p.PureComponent {
    peopleListItemRef = p.createRef();
    state = { isActiveRow: !1 };
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    openPrivateChannel = () => {
        let { user: e } = this.props,
            t = eU().find(i7.A.getMutablePrivateChannels(), (t) => t.type === D.rbe.DM && t.getRecipientId() === e.id);
        null != t ? (0, aO.pX)(D.BVt.CHANNEL(D.ME, t.id)) : rJ.A.openPrivateChannel({ recipientIds: e.id });
    };
    handleRowClick = (e) => {
        e.stopPropagation(),
            (0, a6.xF)({ targetUserId: this.props.user.id, tab: ac.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleMessageClick = (e) => {
        e.stopPropagation(),
            (0, a6.WD)({ targetUserId: this.props.user.id, tab: ac.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleOpenActionsMenu = (e) => {
        let { user: t, isGameRelationship: n, applicationId: i } = this.props;
        (0, r9.jA)(e, (e) => (0, E.jsx)(a8, { ...e, user: t, applicationId: i, isGameRelationship: n }), {
            onClose: () => {
                this.setState({ isActiveRow: !1 });
            },
        }),
            this.setState({ isActiveRow: !0 });
    };
    render() {
        let {
                user: e,
                isFocused: t,
                analyticsLocations: n,
                activities: i,
                applicationStream: r,
                status: a,
                isMobile: l,
                isVR: s,
                isGameRelationship: o,
                giftIntentType: d,
                hasFriendAnniversarySection: c,
                sectionIndex: u,
            } = this.props,
            { isActiveRow: _ } = this.state;
        return (0, aG.p)(eg.A.FRIENDS_LIST) && d === a4.np.FRIEND_ANNIVERSARY && c && 0 === u
            ? (0, E.jsx)(a2, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: _,
                  recipientUser: e,
                  analyticsLocations: n,
                  onOtherHover: () => (_ ? null : (0, r9.Z_)()),
                  onClick: this.handleRowClick,
                  giftIntentType: d,
                  status: a,
                  activities: i,
                  applicationStream: r,
                  isMobile: l,
                  isVR: s,
                  isGameRelationship: o,
              })
            : (0, E.jsx)(aW.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: _,
                  user: e,
                  analyticsLocations: n,
                  onOtherHover: () => (_ ? null : (0, r9.Z_)()),
                  onClick: this.handleRowClick,
                  children: (t) =>
                      (0, E.jsxs)("div", {
                          className: a1.a4,
                          children: [
                              (0, E.jsx)(aJ.A, {
                                  user: e,
                                  status: a,
                                  isMobile: l,
                                  isVR: s,
                                  subText: (0, E.jsx)(aQ, {
                                      hovered: t,
                                      activities: i,
                                      applicationStream: r,
                                      status: a,
                                      user: e,
                                      userIgnored: eZ.A.isIgnored(e.id),
                                  }),
                                  hovered: t,
                                  showAccountIdentifier: !o && !e.isProvisional,
                              }),
                              (0, E.jsxs)("div", {
                                  className: a1.o1,
                                  children: [
                                      (0, E.jsx)(a3.A, {
                                          icon: aF.o,
                                          tooltip: G.intl.string(G.t["g33r/P"]),
                                          onClick: this.handleMessageClick,
                                          shouldHighlight: t,
                                      }),
                                      (0, E.jsx)(a3.A, {
                                          icon: aH.F,
                                          tooltip: G.intl.string(G.t["UKOtz+"]),
                                          onClick: this.handleOpenActionsMenu,
                                          shouldHighlight: t,
                                      }),
                                  ],
                              }),
                          ],
                      }),
              });
    }
}
var a9 = n(615300),
    le = n(396478),
    lt = n(34275),
    ln = (((d = {}).SECTION_NO_RESULTS = "SECTION_NO_RESULTS"), d);
let li = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(445451),
            darkSrc: n(642269),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, E.jsxs)(p.Fragment, {
                    children: [
                        (0, E.jsx)(le.SG, { note: G.intl.string(G.t.Y4vMY8) }),
                        (0, E.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: lt.x6,
                            children: (0, E.jsx)(n0.$, {
                                variant: "primary",
                                text: G.intl.string(G.t.w5uwoI),
                                onClick: e,
                            }),
                        }),
                    ],
                }),
        },
        SECTION_ONLINE: {
            lightSrc: n(939333),
            darkSrc: n(492055),
            width: 421,
            height: 218,
            renderContent: () => (0, E.jsx)(le.SG, { note: G.intl.string(G.t.v7HbiQ) }),
        },
        SECTION_BLOCKED: {
            lightSrc: n(751906),
            darkSrc: n(689818),
            width: 433,
            height: 232,
            renderContent: () => (0, E.jsx)(le.SG, { note: G.intl.string(G.t["9xdyWB"]) }),
        },
        SECTION_PENDING: {
            lightSrc: n(826223),
            darkSrc: n(317017),
            width: 415,
            height: 200,
            renderContent: (e, t) =>
                (0, E.jsxs)("div", {
                    className: lt.y7,
                    children: [
                        (0, E.jsx)(le.SG, { note: G.intl.string(G.t["aCYQ+P"]) }),
                        null != e &&
                            (0, E.jsx)(n0.$, {
                                variant: "secondary",
                                text: t ? G.intl.string(G.t.R40bU2) : G.intl.string(G.t.rXl8fj),
                                onClick: e,
                                size: "sm",
                            }),
                    ],
                }),
        },
        SECTION_SUGGESTIONS: {
            lightSrc: n(826223),
            darkSrc: n(317017),
            width: 415,
            height: 200,
            renderContent: () => (0, E.jsx)(le.SG, { note: G.intl.string(G.t["vgI/EF"]) }),
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(939333),
            darkSrc: n(492055),
            width: 421,
            height: 218,
            renderContent: () => (0, E.jsx)(le.SG, { note: G.intl.string(G.t["7sW4h1"]) }),
        },
    }),
    lr = (e) => {
        let { theme: t } = e,
            n = G.intl.string(G.t["oi+B4p"]);
        return (0, E.jsx)(le.pp, { theme: t, children: (0, E.jsx)(le.SG, { note: n }) });
    };
class la extends p.PureComponent {
    state = { opacity: new a9.A.Value(1) };
    componentWillEnter = (e) => {
        this.state.opacity.setValue(0), a9.A.timing(this.state.opacity, { toValue: 1, duration: 250 }).start(e);
    };
    componentWillLeave = (e) => {
        a9.A.timing(this.state.opacity, { toValue: 0, duration: 250 }).start(e);
    };
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            i = { opacity: this.state.opacity },
            r = (function (e) {
                switch (e) {
                    case D.m3P.ADD_FRIEND:
                    case D.m3P.ALL:
                        return li.SECTION_ALL;
                    case D.m3P.ONLINE:
                        return li.SECTION_ONLINE;
                    case D.m3P.PENDING:
                        return li.SECTION_PENDING;
                    case D.m3P.SUGGESTIONS:
                        return li.SECTION_SUGGESTIONS;
                    case "SECTION_NO_RESULTS":
                        return li.SECTION_NO_RESULTS;
                    default:
                        throw Error("FriendsEmptyState: Invalid empty state");
                }
            })(e);
        return e === D.m3P.ADD_FRIEND
            ? (0, E.jsx)(a9.A.div, { className: lt.VD, style: i, children: (0, E.jsx)(lr, { theme: n }) })
            : (0, E.jsx)(a9.A.div, {
                  className: lt.VD,
                  style: i,
                  children: (0, E.jsx)(le.pp, { theme: n, children: r.renderContent(t) }),
              });
    }
}
let ll = C.Ay.connectStores([ad.A], () => ({ theme: ad.A.theme }), { forwardRef: !0 })(la);
var ls = n(933832),
    lo = n(789645),
    ld = n(478016),
    lc = n(640708),
    lu = n(390848),
    l_ = n(525075);
function lA(e) {
    let { user: t, applicationId: n, isGameRelationship: i, active: r, onAcceptFriendRequest: a } = e,
        [l, s] = p.useState(!1),
        o = i_.default.getCurrentUser()?.isStaff() && t?.isStaff(),
        { acceptFriendRequest: d, cancelFriendRequest: c } = (0, lu.I)({
            userId: t.id,
            applicationId: n,
            isGameRelationship: i,
            location: "Friends",
            onFinally: () => {
                s(!1);
            },
        }),
        u = p.useCallback(
            (e) => {
                s(!0), e.stopPropagation(), a(), d();
            },
            [d, a],
        ),
        _ = p.useCallback(
            (e) => {
                e.stopPropagation(), c();
            },
            [c],
        );
    return (0, E.jsxs)(E.Fragment, {
        children: [
            o &&
                (0, E.jsx)("div", {
                    className: l_.ou,
                    children: (0, E.jsx)(nV.Lp, {
                        color: tw.A.unsafe_rawColors.BRAND_500.css,
                        text: G.intl.string(G.t.oMx98L),
                    }),
                }),
            (0, E.jsx)(a3.A, {
                icon: ls.A,
                actionType: a3.A.ActionTypes.ACCEPT,
                tooltip: G.intl.string(G.t.Zcibdf),
                onClick: u,
                shouldHighlight: r,
                loading: l,
            }),
            (0, E.jsx)(a3.A, {
                icon: lo.P,
                actionType: a3.A.ActionTypes.DENY,
                tooltip: G.intl.string(G.t.xuio0C),
                onClick: _,
                shouldHighlight: r,
            }),
        ],
    });
}
function lh(e) {
    let { userId: t, applicationId: n, isGameRelationship: i, active: r } = e,
        { cancelFriendRequest: a } = (0, lu.I)({
            userId: t,
            applicationId: n,
            isGameRelationship: i,
            location: "Friends",
        }),
        l = p.useCallback(
            (e) => {
                e.stopPropagation(), a();
            },
            [a],
        );
    return (0, E.jsx)(a3.A, {
        icon: lo.P,
        actionType: a3.A.ActionTypes.DENY,
        tooltip: G.intl.string(G.t.eaq81S),
        onClick: l,
        shouldHighlight: r,
    });
}
function lE(e) {
    let { isGameRelationship: t, applicationId: n, userTag: i, isProvisional: r } = e,
        a = p.useMemo(() => (t ? G.intl.string(G.t["Uv/eTx"]) : i), [t, i]),
        l = (0, C.bG)([i$.A], () => (null != n ? i$.A.getApplication(n) : null));
    return (0, E.jsxs)("div", {
        className: l_.P9,
        children: [
            !r && (0, E.jsx)(nu.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
            null != l &&
                (0, E.jsxs)(E.Fragment, {
                    children: [
                        !r && (0, E.jsx)(lc.A, { height: 2, width: 2 }),
                        (0, E.jsx)(iJ.A, { game: l, size: iJ.M.XXSMALL }),
                        (0, E.jsx)(nu.E, { variant: "text-sm/medium", color: "text-subtle", children: l.name }),
                    ],
                }),
        ],
    });
}
function lp(e) {
    let { user: t, hovered: n, status: i, isGameRelationship: r, applicationId: a, isFriend: l } = e,
        s = rn.Ay.useUserTag(t);
    return (0, E.jsx)(aJ.A, {
        user: t,
        hovered: n,
        status: i,
        showAccountIdentifier: !1,
        subText: l
            ? (0, E.jsxs)("div", {
                  className: l_.Tl,
                  children: [
                      (0, E.jsx)(ld.U, { size: "sm", color: tw.A.colors.ICON_FEEDBACK_POSITIVE }),
                      (0, E.jsx)(nu.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          children: G.intl.string(G.t.bgL68y),
                      }),
                  ],
              })
            : (0, E.jsx)(lE, { isGameRelationship: r, isProvisional: t.isProvisional, applicationId: a, userTag: s }),
    });
}
function lm(e) {
    let {
            user: t,
            type: n,
            status: i,
            isFocused: r,
            applicationId: a,
            isGameRelationship: l,
            onAcceptFriendRequest: s,
        } = e,
        { analyticsLocations: o } = (0, nQ.Ay)(),
        d = i === D.clD.OFFLINE ? D.clD.UNKNOWN : i,
        c = (0, C.bG)([eZ.A], () => eZ.A.getRelationshipType(t.id)),
        u = p.useCallback(() => (0, rW.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: o }), [o, t.id]),
        _ = (e) => {
            e.stopPropagation(),
                ec.default.track(D.HAw.FRIEND_REQUEST_ACCEPT_MESSAGE_CLICKED),
                rJ.A.openPrivateChannel({ recipientIds: [t.id] });
        };
    return [D.eA$.PENDING_INCOMING, D.eA$.PENDING_OUTGOING, D.eA$.FRIEND].includes(c)
        ? (0, E.jsx)(aW.A, {
              isFocused: r,
              user: t,
              analyticsLocations: o,
              onClick: u,
              children: (e) =>
                  (0, E.jsxs)("div", {
                      className: l_.a4,
                      children: [
                          (0, E.jsx)(lp, {
                              user: t,
                              hovered: e,
                              status: d,
                              isGameRelationship: l,
                              applicationId: a,
                              isFriend: c === D.eA$.FRIEND,
                          }),
                          (0, E.jsx)("div", {
                              className: l_.o1,
                              children:
                                  c === D.eA$.FRIEND
                                      ? (0, E.jsx)(n0.$, {
                                            text: "Message",
                                            variant: "secondary",
                                            icon: aF.o,
                                            onClick: _,
                                        })
                                      : n === D.eA$.PENDING_INCOMING
                                        ? (0, E.jsx)(lA, {
                                              user: t,
                                              applicationId: a,
                                              isGameRelationship: l,
                                              active: e,
                                              onAcceptFriendRequest: s,
                                          })
                                        : (0, E.jsx)(lh, {
                                              userId: t.id,
                                              applicationId: a,
                                              isGameRelationship: l,
                                              active: e,
                                          }),
                          }),
                      ],
                  }),
          })
        : null;
}
var lI = n(887129),
    lg = n(837381),
    lC = n(475825),
    lf = n(795733);
let lT = function (e) {
    let { rows: t, renderRow: n, renderSection: i, footer: r, sectionFilter: a, renderSectionFooter: l } = e,
        s = (e) => {
            let { section: i, row: r } = e,
                a = t[i];
            if (null == a || null == r) return null;
            let l = a[r];
            return null == l ? null : n(l, i);
        },
        o = p.useCallback(
            (e, n) => {
                let i = t[e]?.[n];
                return a === D.m3P.ALL && i?.giftIntentType === a4.np.FRIEND_ANNIVERSARY && 0 === e ? 72 : 61;
            },
            [t, a],
        ),
        d = p.useCallback(
            (e) => {
                let { section: t } = e;
                return i(t);
            },
            [i],
        ),
        c = p.useCallback((e) => (null == l ? null : l(e.section)), [l]),
        u = p.useCallback((e) => (null == l ? 0 : 48 * (null != l(e))), [l]),
        _ = (0, C.bG)([H.A], () => H.A.keyboardModeEnabled),
        A = p.useRef(null),
        h = p.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        m = p.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        I = p.useCallback((e) => {
            let t = document.querySelector(e),
                n = A.current;
            null != t && null != n && n.scrollIntoViewNode({ node: t, padding: 8, callback: () => t?.focus() });
        }, []),
        g = (0, lI.Ay)({ id: "people-list", isEnabled: _, scrollToStart: h, scrollToEnd: m, setFocus: I }),
        f = p.useMemo(() => t.map((e) => e.length), [t]);
    return (0, E.jsx)(lg.hD, {
        navigator: g,
        children: (0, E.jsx)(lg.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, E.jsxs)(E.Fragment, {
                    children: [
                        (0, E.jsx)(lC.Ei, {
                            ref: (e) => {
                                (A.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            renderRow: s,
                            rowHeight: o,
                            renderSection: d,
                            sectionHeight: 50,
                            renderFooter: c,
                            footerHeight: u,
                            sections: f,
                            className: lf.e3,
                            ...n,
                        }),
                        r,
                    ],
                });
            },
        }),
    });
};
var lN = n(73939);
let lS = function (e) {
    let {
            rows: t,
            renderRow: n,
            renderSection: i,
            hasSearchQuery: r,
            sectionFilter: a,
            footer: l,
            renderSectionFooter: s,
        } = e,
        o = (0, C.bG)([H.A], () => H.A.keyboardModeEnabled),
        d = (0, C.bG)([H.A], () => H.A.useReducedMotion),
        c = (0, lI.Ay)({ id: "people", isEnabled: o, async scrollToStart() {}, async scrollToEnd() {} }),
        u = a !== D.m3P.ONLINE && a !== D.m3P.ALL,
        _ = d || r || u,
        A = p.useMemo(
            () =>
                t.map((e, t) =>
                    0 === e.length
                        ? null
                        : _
                          ? (0, E.jsxs)("div", { children: [i(t), e.map((e) => n(e, t)), s?.(t)] }, t)
                          : (0, E.jsxs)(
                                lN.F,
                                {
                                    transitionAppear: !1,
                                    component: "div",
                                    children: [i(t), e.map((e) => n(e, t)), s?.(t)],
                                },
                                t,
                            ),
                ),
            [n, i, s, t, _],
        );
    return (0, E.jsx)(lg.hD, {
        navigator: c,
        children: (0, E.jsx)(lg.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, E.jsxs)(nX.Ar, { ref: t, className: lf.e3, ...n, children: [A, l] });
            },
        }),
    });
};
function lL(e) {
    let {
        rows: t,
        renderRow: n,
        renderSection: i,
        isVirtualizedList: r,
        hasSearchQuery: a,
        sectionFilter: l,
        footer: s,
        renderSectionFooter: o,
    } = e;
    return r
        ? (0, E.jsx)(lT, {
              rows: t,
              renderRow: n,
              renderSection: i,
              footer: s,
              sectionFilter: l,
              renderSectionFooter: o,
          })
        : (0, E.jsx)(lS, {
              rows: t,
              renderRow: n,
              renderSection: i,
              sectionFilter: l,
              hasSearchQuery: a,
              footer: s,
              renderSectionFooter: o,
          });
}
var lO = n(866945),
    ly = n(613755);
function lb() {
    let [e, t] = (0, tC.kn)([nq.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return p.useMemo(() => e === nq.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e])
        ? (0, E.jsx)(lO.e, {
              label: G.t.zqv4nV,
              labelHook: () => {
                  (0, e5.openUserSettings)(e6.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY);
              },
              dismissNotice: () => t(tT.i.USER_DISMISS),
              className: ly._,
              noticeType: el.YA.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
          })
        : null;
}
var lv = n(485947),
    lR = n(490277);
function lP(e) {
    let { title: t, id: n } = e;
    return (0, E.jsx)(lv.A, { className: lR.D, id: n, children: t });
}
var lD = n(38910),
    lx = n(648356);
function lw(e) {
    let { user: t, nickname: n, status: i, isFocused: r } = e,
        { analyticsLocations: a } = (0, nQ.Ay)(),
        l = (e) => {
            e?.stopPropagation(),
                a_.A.addRelationship({
                    userId: t.id,
                    context: { location: "Friends" },
                    type: void 0,
                    fromFriendSuggestion: !0,
                });
        },
        s = (e) => {
            e?.stopPropagation(), lD.A.ignore(t.id);
        },
        o = i === D.clD.OFFLINE ? D.clD.UNKNOWN : i;
    return (0, E.jsx)(aW.A, {
        isFocused: r,
        user: t,
        analyticsLocations: a,
        onClick: () => (0, rW.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: a }),
        children: (e) => {
            let i = (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(a3.A, {
                        icon: ls.A,
                        actionType: a3.A.ActionTypes.ACCEPT,
                        tooltip: G.intl.string(G.t.Zcibdf),
                        onClick: l,
                        shouldHighlight: e,
                    }),
                    (0, E.jsx)(a3.A, {
                        icon: lo.P,
                        actionType: a3.A.ActionTypes.DENY,
                        tooltip: G.intl.string(G.t.xuio0C),
                        onClick: s,
                        shouldHighlight: e,
                    }),
                ],
            });
            return (0, E.jsxs)("div", {
                className: lx.a,
                children: [
                    (0, E.jsx)(aJ.A, { user: t, hovered: e, status: o, subText: n, className: lx.__invalid_userInfo }),
                    (0, E.jsx)("div", { className: lx.o, children: i }),
                ],
            });
        },
    });
}
let lM = [];
function lU() {
    nY.A.transitionToSection(D.m3P.ADD_FRIEND, { explicit: !0 });
}
function lG() {
    (0, f.openModalLazy)(async () => {
        let { default: e } = await n.e("50771").then(n.bind(n, 516259));
        return (t) => (0, E.jsx)(e, { ...t });
    });
}
function lj(e) {
    let { section: t, showSpamCta: n } = e,
        i = p.useMemo(() => (n ? lG : t !== D.m3P.PENDING ? lU : void 0), [n, t]);
    return (0, E.jsx)("div", { className: lf.y7, children: (0, E.jsx)(ll, { type: t, onClick: i }, t) });
}
let lk = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, nQ.Ay)(eg.A.FRIENDS_LIST),
        { rows: i, section: r } = (0, C.cf)([ac.Ay], () => ac.Ay.getState()),
        a = (0, C.bG)([eL.A], () => eL.A.isFocused()),
        { relationshipCount: l, hasBlockedOrIgnored: s } = (0, C.cf)([eZ.A], () => ({
            relationshipCount: eZ.A.getRelationshipCount(),
            hasBlockedOrIgnored: eZ.A.getBlockedOrIgnoredIDs().length > 0,
        })),
        { enabled: o } = aV.useConfig({ location: "PeopleList" }),
        [d, c] = p.useState([]),
        u = p.useCallback((e) => {
            let { enabled: t } = aV.getConfig({ location: "Friend Request Accept" });
            t && c((t) => [...t, e]);
        }, []);
    r !== D.m3P.PENDING && d.length > 0 && c([]);
    let [_, A] = p.useState(() => {
            let e = {};
            for (let t of Object.values(D.m3P)) e[t] = "";
            return e;
        }),
        h = (0, aG.p)(eg.A.FRIENDS_LIST),
        [m, I] = p.useState(!1),
        g = p.useCallback(
            (e, t) => {
                let { key: i, ...l } = e;
                switch (r) {
                    case D.m3P.PENDING:
                        return (0, E.jsx)(lm, { ...l, isFocused: a, onAcceptFriendRequest: () => u(e) }, i);
                    case D.m3P.SUGGESTIONS:
                        return (0, E.jsx)(lw, { ...l, isFocused: a }, i);
                    case D.m3P.ALL:
                        return (0, E.jsx)(
                            a7,
                            {
                                ...l,
                                isFocused: a,
                                analyticsLocations: n,
                                sectionIndex: t,
                                hasFriendAnniversarySection: h,
                            },
                            `${t}-${i}`,
                        );
                    case D.m3P.ONLINE:
                    default:
                        return (0, E.jsx)(a7, { ...l, isFocused: a, analyticsLocations: n }, i);
                }
            },
            [r, a, n, h, u],
        ),
        f = p.useCallback(
            (e) => {
                A({ ..._, [r]: e });
            },
            [_, r],
        ),
        T = p.useCallback(() => {
            A({ ..._, [r]: "" });
        }, [_, r]),
        N = p.useMemo(
            () =>
                r === D.m3P.PENDING && (i.filter(D.m3P.SPAM).length > 0 || i.filter(D.m3P.PENDING_IGNORED).length > 0),
            [i, r],
        ),
        S = p.useMemo(() => {
            let e = i.filter(r, _[r]);
            return (
                o &&
                    r === D.m3P.PENDING &&
                    "" === _[r] &&
                    (e = eU()([...e, ...d])
                        .uniqBy("key")
                        .sortBy(
                            (e) => e.nickname?.toLowerCase() ?? e.user?.globalName?.toLowerCase() ?? e.usernameLower,
                        )
                        .value()),
                e
            );
        }, [d, o, i, _, r]),
        L = r === D.m3P.PENDING,
        O = p.useMemo(() => {
            if (!L) return lM;
            let e = [];
            return (
                S.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [L, S]);
    (0, t$.A)(O, L);
    let y = p.useMemo(
            () =>
                r === D.m3P.ALL && h && S.some((e) => e.giftIntentType === a4.np.FRIEND_ANNIVERSARY)
                    ? S.filter((e) => e.giftIntentType === a4.np.FRIEND_ANNIVERSARY).length
                    : 0,
            [S, r, h],
        ),
        b = p.useMemo(() => {
            switch (r) {
                case D.m3P.PENDING:
                    let e = [],
                        t = [];
                    return (
                        S.forEach((n) => {
                            n.type === D.eA$.PENDING_INCOMING
                                ? e.push(n)
                                : n.type === D.eA$.PENDING_OUTGOING && t.push(n);
                        }),
                        [e, t]
                    );
                case D.m3P.ALL:
                    if (!(h && S.some((e) => e.giftIntentType === a4.np.FRIEND_ANNIVERSARY))) return [S];
                    {
                        let e = [];
                        return (
                            S.forEach((t) => {
                                t.giftIntentType === a4.np.FRIEND_ANNIVERSARY && e.push(t);
                            }),
                            e.sort((e, t) => iu.A.compareByDmProbability(e.userId, t.userId)),
                            [m ? e : e.slice(0, ak.ZD), S]
                        );
                    }
                default:
                    return [S];
            }
        }, [S, r, m, h]),
        v = p.useMemo(() => S.filter((e) => e.type === D.eA$.PENDING_INCOMING).length, [S]),
        R = r === D.m3P.PENDING && v > 0 && v >= 5,
        P = p.useCallback(
            (e) => {
                e.stopPropagation(), a_.A.confirmClearPendingRelationships(v);
            },
            [v],
        ),
        x = p.useCallback(() => {
            I((e) => !e);
        }, []),
        w = p.useCallback(
            (e) => {
                let n = b[e],
                    i = (function (e, t, n, i) {
                        switch (e) {
                            case D.m3P.ONLINE:
                                return G.intl.formatToPlainString(G.t.BagU2U, { online: t.toString() });
                            case D.m3P.PENDING:
                                if (0 === n) return G.intl.formatToPlainString(G.t["g+3FIa"], { count: t.toString() });
                                if (1 === n) return G.intl.formatToPlainString(G.t.npJsRl, { count: t.toString() });
                                throw Error(`Unexpected pending friend requests section index: ${n}`);
                            case D.m3P.SUGGESTIONS:
                                return G.intl.formatToPlainString(G.t["DYMZ/p"], { count: t.toString() });
                            default:
                                if ((0, aG.p)(eg.A.FRIENDS_LIST) && i)
                                    if (0 === n) return G.intl.formatToPlainString(G.t.rrZTqK, { count: t.toString() });
                                    else if (1 === n);
                                    else throw Error(`Unexpected friends all section index: ${n}`);
                                return G.intl.formatToPlainString(G.t.rHRrhC, { count: t.toString() });
                        }
                    })(
                        r,
                        n.length,
                        e,
                        n.some((e) => e.giftIntentType === a4.np.FRIEND_ANNIVERSARY),
                    );
                return r === D.m3P.PENDING && 0 === e
                    ? (0, E.jsxs)(
                          "div",
                          {
                              className: lf.Gf,
                              children: [
                                  (0, E.jsx)(lP, { id: t, title: i }),
                                  R &&
                                      (0, E.jsx)("div", {
                                          className: lf.mt,
                                          children: (0, E.jsx)(ax.Q, {
                                              text: G.intl.string(G.t.O8k7O4),
                                              onClick: P,
                                              "aria-label": G.intl.string(G.t.O8k7O4),
                                              textVariant: "text-sm/medium",
                                          }),
                                      }),
                              ],
                          },
                          i,
                      )
                    : (0, E.jsx)("div", { className: lf.Gf, children: (0, E.jsx)(lP, { id: t, title: i }) }, i);
            },
            [b, r, t, R, P],
        ),
        M = p.useCallback(
            (e) =>
                r === D.m3P.ALL && 0 === e && h && y > ak.ZD
                    ? (0, E.jsx)("div", {
                          className: lf.Nf,
                          children: (0, E.jsx)(n0.$, {
                              icon: m ? aw.t : aM.a,
                              variant: "secondary",
                              size: "sm",
                              text: G.intl.string(m ? G.t["6MwJo/"] : G.t["37C26f"]),
                              onClick: x,
                              "aria-label": G.intl.string(m ? G.t["6MwJo/"] : G.t["37C26f"]),
                          }),
                      })
                    : null,
            [r, y, m, x, h],
        );
    if (
        (p.useEffect(() => {
            r === D.m3P.ALL && (0, aj.Ad)();
        }, [r]),
        p.useEffect(() => {
            I(!1);
        }, [r, y]),
        0 === S.length && "" === _[r])
    )
        return (0, E.jsx)(lj, { section: r, showSpamCta: N });
    let U = "" !== _[r],
        j = 0 === S.length && U;
    return (0, E.jsx)(nQ.f5, {
        value: n,
        children: (0, E.jsxs)(nZ.A, {
            section: D.JJy.FRIENDS_LIST,
            children: [
                s && (0, E.jsx)(lb, {}),
                (0, E.jsx)("div", {
                    className: lf.ON,
                    children: (0, E.jsx)(aU.I, { query: _[r], onChange: f, onClear: T }),
                }),
                (0, E.jsx)(lL, {
                    rows: b,
                    renderRow: g,
                    renderSection: w,
                    sectionFilter: r,
                    isVirtualizedList: l >= 64,
                    hasSearchQuery: U,
                    renderSectionFooter: M,
                    footer:
                        N && !j
                            ? (0, E.jsx)("div", {
                                  className: lf.RE,
                                  children: (0, E.jsx)(ax.Q, {
                                      text: G.intl.string(G.t.R40bU2),
                                      onClick: lG,
                                      textVariant: "text-xs/medium",
                                      variant: "secondary",
                                  }),
                              })
                            : null,
                }),
                j &&
                    (0, E.jsx)("div", {
                        className: lf.y7,
                        children: (0, E.jsx)(ll, { type: ln.SECTION_NO_RESULTS }, r),
                    }),
            ],
        }),
    });
};
var lV = n(465158);
function lF() {
    return (0, E.jsx)("div", {
        className: lV.N3,
        children: (0, E.jsx)(nK.Ay, { tooltip: G.intl.string(G.t["HfOgA/"]) }),
    });
}
let lH = function (e) {
    let { initialSection: t } = e,
        n = (0, I.zy)(),
        i = (0, I.W6)();
    p.useEffect(() => {
        "true" === new URLSearchParams(n.search).get("confirm-age") &&
            q.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: ea.w_.DEEP_LINK_PROMPT }).then(() => {
                i.replace(D.BVt.ME);
            });
    }, [i, n]),
        p.useEffect(() => {
            nB.I(D.BVt.FRIENDS), (0, ao.d)("friends");
        }, []);
    let r = (0, C.bG)([ad.A], () => ad.A.theme),
        a = (0, eK.kX)(),
        { section: l, rows: s } = (0, C.cf)([ac.Ay], () => ac.Ay.getState()),
        o = (0, C.bG)([nz.A], () => nz.A.getSuggestionCount()),
        d = p.useMemo(() => s.getRelationshipCounts(), [s]);
    p.useEffect(() => {
        null != t && nY.A.setInitialSection(t),
            0 === d[D.eA$.FRIEND] &&
                0 === d[D.eA$.PENDING_INCOMING] &&
                0 === d[D.eA$.PENDING_OUTGOING] &&
                0 === d[D.eA$.BLOCKED] &&
                nY.A.transitionToSection(D.m3P.ADD_FRIEND);
    }, [t, d]);
    let c = (e) => {
            nY.A.transitionToSection(e, { explicit: !0 });
        },
        u = (0, n$.GV)(),
        _ = (0, n$.GV)(),
        A = [
            {
                id: D.m3P.ONLINE,
                show: s.filter(D.m3P.ONLINE).length > 0,
                content: G.intl.string(G.t.b9w3bO),
                className: lV.AS,
            },
            { id: D.m3P.ALL, show: d[D.eA$.FRIEND] > 0, content: G.intl.string(G.t.PfjFjR), className: lV.AS },
            {
                id: D.m3P.PENDING,
                show: s.filter(D.m3P.PENDING).length > 0,
                content: (0, E.jsxs)(E.Fragment, {
                    children: [G.intl.string(G.t.p6IHGE), a > 0 && (0, E.jsx)(nV.hV, { count: a, className: lV.qS })],
                }),
                ariaLabel: G.intl.formatToPlainString(G.t.OAC0Z4, { count: a.toString() }),
                className: lV.AS,
            },
            {
                id: D.m3P.SUGGESTIONS,
                show: o > 0,
                content: (0, E.jsxs)(E.Fragment, {
                    children: [G.intl.string(G.t["8rSi1/"]), (0, E.jsx)(nV.hV, { count: o, className: lV.qS })],
                }),
                ariaLabel: G.intl.formatToPlainString(G.t.AbMQp7, { count: o.toString() }),
                className: lV.AS,
            },
            {
                id: D.m3P.ADD_FRIEND,
                show: !0,
                content: (0, E.jsx)("span", { children: G.intl.string(G.t.j0wbE5) }),
                ariaLabel: G.intl.string(G.t.j0wbE5),
                className: tn()(lV.AS, lV.GU),
            },
        ],
        h = null,
        m = (0, E.jsx)("div", { className: lV.Xl, children: (0, E.jsx)(as, {}) });
    return (
        (h = l === D.m3P.ADD_FRIEND ? (0, E.jsx)(aD, {}) : (0, E.jsx)(lk, { titleId: _ })),
        (0, E.jsxs)("main", {
            className: lV.kL,
            "aria-label": G.intl.string(G.t.TdEu5X),
            children: [
                (0, E.jsx)(e0.HI, { location: G.intl.string(G.t.TdEu5X) }),
                (0, E.jsx)(ts.N, {
                    theme: r,
                    children: (e) =>
                        (0, E.jsxs)(nW.A, {
                            className: e,
                            toolbar: (0, E.jsx)(lF, {}),
                            role: "navigation",
                            "aria-labelledby": u,
                            scrollable: !0,
                            children: [
                                (0, E.jsx)(nW.A.Icon, { icon: nF.$, "aria-hidden": !0 }),
                                (0, E.jsx)(nW.A.Title, { id: u, children: G.intl.string(G.t.TdEu5X) }),
                                (0, E.jsx)(nW.A.Divider, {}),
                                (0, E.jsx)(nH.V, {
                                    "aria-label": G.intl.string(G.t.TdEu5X),
                                    selectedItem: l,
                                    type: "top-pill",
                                    onItemSelect: c,
                                    className: lV.$H,
                                    children: A.filter((e) => e.show).map((e) =>
                                        (0, E.jsx)(
                                            nH.V.Item,
                                            {
                                                id: e.id,
                                                className: e.className,
                                                "aria-label": e.ariaLabel,
                                                children: e.content,
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                }),
                (0, E.jsxs)("div", {
                    className: lV.MJ,
                    children: [
                        (0, E.jsx)(nH.V.Panel, { id: l, className: lV.UL, "aria-labelledby": _, children: h }),
                        m,
                    ],
                }),
            ],
        })
    );
};
var lB = n(488803),
    lY = n(969117),
    l$ = n(376708),
    lz = n(272720),
    lW = n(366811),
    lK = n(320989),
    lq = n(463347),
    lX = n(334465),
    lZ = n(97469),
    lQ = n(718446),
    lJ = n(650048),
    l0 = n(696451),
    l1 = n(519057),
    l2 = n(935208),
    l6 = n(521502),
    l5 = n(380610),
    l3 = n(828184),
    l4 = n(932553);
let l8 = "isHideDevBanner",
    l7 = () => {
        let [e, t] = (0, p.useState)(ta.w.get(l8, "false")?.toString() === "true"),
            n = (0, C.bG)([l6.A], () => ((0, l5.kK)() ? l6.A.getCurrentBuildOverride().overrides?.discord_web : null));
        if (e) return null;
        let i = () => {
                ta.w.set(l8, !0), t(!0);
            },
            r = () =>
                (0, E.jsx)(to.D, {
                    onClick: i,
                    className: l4.b,
                    "aria-label": G.intl.string(G.t.WAI6xu),
                    children: (0, E.jsx)(lo.P, { size: "md", color: "currentColor", className: l4.ut }),
                });
        return null != n
            ? (0, E.jsxs)("div", {
                  className: tn()(l4.Wz, l4.DM),
                  children: [(0, E.jsx)(l3.A, { className: l4.Kk }), G.intl.string(G.t.Wj3LW4), (0, E.jsx)(r, {})],
              })
            : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, E.jsxs)("div", {
                    className: tn()(l4.Wz, l4.mr),
                    children: [
                        (0, E.jsx)(l3.A, { className: l4.Kk }),
                        G.intl.format(G.t.uyrfYF, { buildNumber: "536102" }),
                        (0, E.jsx)(r, {}),
                    ],
                })
              : null;
    };
var l9 = n(765671),
    se = n(757780),
    st = n(216894),
    sn = n(985668),
    si = n(504337),
    sr = n(629016),
    sa = n(885574),
    sl = n(235986),
    ss = n(342296),
    so = n(636585),
    sd = n(975571),
    sc = n(42473),
    su = n(994314),
    s_ = n(485599),
    sA = n(246568);
class sh extends p.PureComponent {
    partyMemberAvatarRef = p.createRef();
    partyMemberOverflowRef = p.createRef();
    isHost() {
        let { currentUser: e, host: t } = this.props;
        return e.id === t?.id;
    }
    renderTitle() {
        return (0, E.jsxs)("div", {
            children: [
                (0, E.jsx)(s_.A, {
                    children: this.isHost()
                        ? G.intl.formatToPlainString(G.t["6UJ7mh"], { count: this.props.party.length })
                        : G.intl.string(G.t.RZufbH),
                }),
                (0, E.jsx)(su.A, { children: G.intl.string(G.t["0ZHLIi"]) }),
            ],
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, E.jsx)(sc.A, { tooltipText: G.intl.string(G.t.LeZSpz), onClick: e, icon: lo.P });
    }
    renderPartyMember = (e, t) => {
        let n;
        if (null == e) return null;
        let { host: i, onUserContextMenu: r } = this.props;
        return (
            (n = i?.id === e.id ? G.intl.string(G.t["N9bqD+"]) : G.intl.string(G.t.Z2Y4c9)),
            (0, E.jsx)(
                ss.A,
                {
                    targetElementRef: this.partyMemberAvatarRef,
                    user: e,
                    newAnalyticsLocations: [eg.A.AVATAR],
                    position: "top",
                    align: "center",
                    clickTrap: !0,
                    children: (i) =>
                        (0, E.jsx)(iO.m, {
                            text: n,
                            children: (0, p.createElement)(iv.eu, {
                                ...i,
                                key: e.id,
                                src: e.getAvatarURL(void 0, 24),
                                size: iR._3.SIZE_24,
                                className: tn()(sA.my, t),
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
        return (0, E.jsx)(
            n9.Y,
            {
                renderPopout: i,
                targetElementRef: this.partyMemberOverflowRef,
                children: (n) =>
                    (0, E.jsx)(iO.m, {
                        text: G.intl.string(G.t.Zf4NPe),
                        children: (0, E.jsx)("div", {
                            ...n,
                            ref: this.partyMemberOverflowRef,
                            className: tn()(sA.ju, t),
                            children: e,
                        }),
                    }),
            },
            n,
        );
    };
    renderHelpIcon() {
        return this.isHost()
            ? (0, E.jsx)(sc.A, {
                  tooltipText: G.intl.string(G.t.U7N2Hs),
                  onClick: () => {
                      window.open(sd.A.getArticleURL(D.MVz.SPOTIFY_CONNECTION), "_blank");
                  },
                  icon: sa.m,
              })
            : null;
    }
    render() {
        return (0, E.jsxs)("div", {
            className: sA.Jh,
            children: [
                this.renderTitle(),
                (0, E.jsx)(sl.A, {
                    justify: sl.A.Justify.END,
                    className: sA.Hg,
                    children: (0, E.jsx)(so.A, {
                        users: this.props.party,
                        max: this.isHost() ? 5 : 4,
                        renderUser: this.renderPartyMember,
                        renderMoreUsers: this.renderPartyMemberOverflow,
                    }),
                }),
                (0, E.jsxs)("div", {
                    className: sA.Pt,
                    children: [this.renderHelpIcon(), this.renderStopListeningButton()],
                }),
            ],
        });
    }
}
var sE = n(883202);
class sp extends p.PureComponent {
    handleContextMenu(e, t) {
        (0, r9.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("61657")]).then(n.bind(n, 668569));
            return (n) => (0, E.jsx)(e, { ...n, user: t });
        });
    }
    renderUser(e) {
        return null == e
            ? null
            : (0, E.jsxs)(
                  sl.A,
                  {
                      className: sE.kQ,
                      align: sl.A.Align.CENTER,
                      onContextMenu: (t) => {
                          null != e && this.handleContextMenu(t, e);
                      },
                      children: [
                          (0, E.jsx)(iv.eu, {
                              src: e.getAvatarURL(void 0, 24),
                              "aria-label": e.username,
                              size: iR._3.SIZE_24,
                              className: sE.my,
                          }),
                          (0, E.jsx)(rK.A, {
                              user: e,
                              className: sE.Tc,
                              usernameClass: sE.Xh,
                              discriminatorClass: sE.D2,
                          }),
                      ],
                  },
                  e.id,
              );
    }
    render() {
        let { party: e, header: t } = this.props,
            n = e.map((e) => this.renderUser(e));
        return (0, E.jsxs)("div", {
            className: sE.Gh,
            children: [
                (0, E.jsx)("div", { className: sE.wx, children: t }),
                (0, E.jsx)(nX.Ip, { className: sE.Qs, fade: !0, children: n }),
            ],
        });
    }
}
class sm extends p.PureComponent {
    hasParty(e) {
        return e.length > 1;
    }
    handleStopListening() {
        (0, si.A)();
    }
    handleUserContextMenu = (e, t) => {
        (0, r9.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("61657")]).then(n.bind(n, 668569));
            return (n) => (0, E.jsx)(e, { ...n, user: t });
        });
    };
    renderOverflowPopout = () => {
        let { party: e } = this.props;
        return (0, E.jsx)(sp, { party: e, header: G.intl.formatToPlainString(G.t.I9et1z, { count: e.length }) });
    };
    render() {
        let { currentUser: e, host: t, party: n } = this.props;
        return this.hasParty(n) && null != e
            ? (0, E.jsx)(sh, {
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
let sI = C.Ay.connectStores([r2.A, i_.default, eZ.A, sr.A], () => {
    let e,
        t,
        n = r2.A.getSyncingWith(),
        i = r2.A.getActivity(),
        r = i_.default.getCurrentUser(),
        a = [];
    return (
        null != n
            ? ((e = i_.default.getUser(n.userId)), (t = n.partyId))
            : null != i && null != i.party && null != i.party.id && ((e = r), (t = i.party.id)),
        null != t &&
            (a = eU()(Array.from(sr.A.getParty(t) ?? []))
                .map((e) => i_.default.getUser(e))
                .filter(rt.Vq)
                .orderBy([(t) => null == e || e.id === t.id, (e) => eZ.A.isFriend(e.id)], ["desc", "desc"])
                .value()),
        { currentUser: r, host: e, party: a }
    );
})(sm);
var sg = n(936504),
    sC = n(697744),
    sf = n(416696),
    sT = n(446080),
    sN = n(744682);
let sS = {
    disable: { name: "disable", start: 0, duration: 70 },
    enable: { name: "enable", start: 100, duration: 70 },
    hover_enabled: { name: "hover_enabled", start: 200, duration: 70 },
    hover_disabled: { name: "hover_disabled", start: 300, duration: 70 },
};
var sL = n(315710),
    sO = n(243721),
    sy = n(452027),
    sb = n(349288),
    sv = n(532676),
    sR = n(432017),
    sP = n(125628),
    sD = n(951001),
    sx = n(155718),
    sw = n(967812),
    sM = n(404522),
    sU = n(782091),
    sG = n(641703),
    sj = n(521588),
    sk = n(975412),
    sV = n(152567),
    sF = n(329072),
    sH = n(384059),
    sB = n(480890),
    sY = n(643501),
    s$ = n(857253),
    sz = n(528767),
    sW = n(790381),
    sK = n(30529),
    sq = n(544105),
    sX = n(674586);
function sZ(e) {
    let { platform: t } = e;
    return t === sq.f$.XBOX
        ? (0, E.jsx)(re.A, { className: sX.Kk })
        : t === sq.f$.PLAYSTATION
          ? (0, E.jsx)(sW.A, { className: sX.Kk })
          : null;
}
function sQ(e) {
    let { voiceState: t, awaitingRemoteSessionInfo: n } = e,
        i = null != n ? (0, sK.X)(n.type) : null,
        r = (0, C.bG)([sz.A], () => sz.A.getSessionById(t?.sessionId ?? "")?.clientInfo.os),
        a = i ?? r;
    if (null == a || !sq.hv.has(a)) return null;
    let l = null != n,
        s = l
            ? a === sq.f$.XBOX
                ? G.intl.string(G.t.UjA4HX)
                : G.intl.string(G.t.QCw1oW)
            : a === sq.f$.XBOX
              ? G.intl.format(G.t["ynEs/Y"], {})
              : G.intl.format(G.t.TZ17Bg, {});
    return (0, E.jsxs)("div", {
        className: tn()(sX.zr, l ? sX.jI : sX.aW),
        children: [
            (0, E.jsx)(sZ, { platform: a }),
            (0, E.jsx)(nu.E, { color: l ? "text-strong" : "always-white", variant: "text-xs/medium", children: s }),
        ],
    });
}
var sJ = n(880144),
    s0 = n(338771),
    s1 = n(421838),
    s2 = n(891540),
    s6 = n(267102),
    s5 = n(205106),
    s3 = n(999751),
    s4 = n(123973),
    s8 = n(621956),
    s7 = n(160761),
    s9 = n(173660),
    oe = n(234320),
    ot = n(536432),
    on = n(674168),
    oi = n(126970),
    or = n(395766);
function oa(e) {
    let { channel: t, ...i } = e,
        r = p.useRef(null),
        { mute: a, suppress: l } = (0, s9.A)(t),
        s = (0, tg.bG)([eS.Ay], () => eS.Ay.isDeaf()),
        o = a || l || s,
        [d, c] = p.useState(!1),
        u = t.getGuildId(),
        _ = (0, ot.VE)({ isSoundboardButtonDisabled: o }),
        [A, h] = (0, s7.DP)(_),
        { analyticsLocations: m, parentAnalyticsLocation: I } = (0, nQ.Ay)(eg.A.SOUNDBOARD_BUTTON);
    function g(e) {
        null != u &&
            (0, r9.L3)(e, async () => {
                let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                return (t) =>
                    (0, E.jsx)(e, {
                        guildId: u,
                        sourceAnalyticsLocations: m,
                        ...t,
                        onInteraction: (0, sB.s)("SoundboardContextMenu", eg.A.RTC_PANEL),
                    });
            });
    }
    let {
            Component: C,
            play: f,
            events: { onMouseEnter: T, onMouseLeave: N },
        } = (0, s8.E)(),
        S = p.useCallback(() => {
            o || c(!d);
        }, [o, d]);
    return (
        (0, oe.Vo)({ event: D.jej.TOGGLE_SOUNDBOARD, handler: S }),
        (0, E.jsx)(nQ.f5, {
            value: m,
            children: (0, E.jsx)(iO.m, {
                targetElementRef: r,
                text: a
                    ? G.intl.string(G.t["Ox4/zU"])
                    : l
                      ? G.intl.string(G.t["+YBKYI"])
                      : s
                        ? G.intl.string(G.t.X1lQli)
                        : G.intl.string(G.t["6EJvHt"]),
                asContainer: !0,
                shouldShow: !d,
                children: (0, E.jsx)(n9.Y, {
                    targetElementRef: r,
                    animation: n9.Y.Animation.FADE,
                    shouldShow: d,
                    position: "top",
                    onRequestClose: () => c(!1),
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, E.jsx)(oi.A, {
                            guildId: u,
                            channel: t,
                            onClose: n,
                            gridNotice:
                                A === nq.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                (0, E.jsx)(on.m, { onClose: n, markAsDismissed: h }),
                            analyticsSource: "rtc panel",
                        });
                    },
                    children: (e) =>
                        (0, E.jsx)("div", {
                            ref: r,
                            children: (0, E.jsx)(tM.$n, {
                                "data-migration-pending": !0,
                                ...e,
                                className: tn()(or.x6, or.Sq, { [or.W4]: d, [or.r9]: o }),
                                wrapperClassName: or.x6,
                                innerClassName: or.bk,
                                disabled: o,
                                onClick: () => {
                                    null != A && A !== nq.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && h(tT.i.UNKNOWN),
                                        c(!d),
                                        f(),
                                        (0, sH.X)(I, sH.O.SOUNDBOARD);
                                },
                                onMouseEnter: (e) => {
                                    i.onMouseEnter?.(e), T();
                                },
                                onMouseLeave: (e) => {
                                    i.onMouseLeave?.(e), N();
                                },
                                onContextMenu: g,
                                fullWidth: !0,
                                size: tM.$n.Sizes.MEDIUM,
                                ...i,
                                children: (0, E.jsx)(C, { className: or.iA, size: "sm", color: "currentColor" }),
                            }),
                        }),
                }),
            }),
        })
    );
}
var ol = n(63995),
    os = n(69407),
    oo = n(96566),
    od = n(302884),
    oc = n(30108),
    ou = n(39938),
    o_ = n(105530),
    oA = n(253932),
    oh = n(151476),
    oE = n(405018),
    op = n(704877),
    om = n(848362),
    oI = n(222692),
    og = n(702904),
    oC = n(471993),
    of = n(442353),
    oT = n(970636),
    oN = n(616356),
    oS = n(607567),
    oL = n(377802),
    oO = n(707592),
    oy = n(132860),
    ob = n(993838),
    ov = n(106044);
function oR(e) {
    let { tooltipText: t, onClick: n } = e,
        { parentAnalyticsLocation: i } = (0, nQ.Ay)(),
        { events: r, Component: a } = (0, oL.O)();
    return (0, E.jsx)(sc.A, {
        tooltipText: t,
        onClick: () => {
            (0, sH.X)(i, sH.O.DISCONNECT), n();
        },
        ...r,
        icon: (0, E.jsx)(a, { size: "refresh_sm" }),
    });
}
function oP(e) {
    let { channel: t } = e;
    return (0, E.jsx)(oR, {
        tooltipText: G.intl.string(G.t.SMKyih),
        onClick: () => {
            (0, ov.A)(t) ? (0, ob.j3)(t) : O.default.disconnect();
        },
    });
}
function oD(e) {
    let { channel: t } = e;
    return (0, E.jsx)(oR, {
        tooltipText: G.intl.string(G.t["6vrfgt"]),
        onClick: () => {
            (0, oy.A)(t) ? (0, oO.Py)(t) : O.default.disconnect();
        },
    });
}
function ox(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, E.jsx)(oP, { channel: t }) : (0, E.jsx)(oD, { channel: t });
}
var ow = n(615675),
    oM = n(666654),
    oU = n(990836),
    oG = n(83107),
    oj = n(834040),
    ok = n(307301),
    oV = n(717558),
    oF = n(770178),
    oH = n(765548),
    oB = n(556525),
    oY = n(551826),
    o$ = n(31408),
    oz = n(595811);
let oW = { offset: 2 },
    oK = {
        serverDeaf: { icon: ow.T, colorize: !0, getStatus: () => G.intl.string(G.t.btxSdB) },
        serverMute: { icon: oM.O, colorize: !0, getStatus: () => G.intl.string(G.t.uLddbQ) },
        deaf: { icon: oU.c, colorize: !1, getStatus: () => G.intl.string(G.t.NjmiOL) },
        mute: { icon: oG.z, colorize: !1, getStatus: () => G.intl.string(G.t.tjtv3P) },
        localMute: { icon: oM.O, colorize: !1, getStatus: () => G.intl.string(G.t["9F+xJU"]) },
    };
function oq(e) {
    let t = p.useRef(null),
        { parentAnalyticsLocation: i } = (0, nQ.Ay)(),
        { channel: r, user: a, nick: l, mute: s, deaf: o, serverMute: d, serverDeaf: c } = e,
        u = (0, C.bG)([eS.Ay], () => eS.Ay.isLocalMute(a.id)),
        _ = (0, oV.A)({ userId: a.id, checkSoundSharing: !0 }),
        A = r.getGuildId() ?? void 0,
        h = a.getAvatarURL(r.guild_id, 24),
        m = l ?? rn.Ay.getName(a),
        {
            icon: I,
            colorize: g,
            getStatus: f,
        } = (function (e) {
            let { serverDeaf: t, deaf: n, serverMute: i, mute: r, localMute: a } = e;
            if (t) return oK.serverDeaf;
            if (n) return oK.deaf;
            if (i) return oK.serverMute;
            if (a) return oK.localMute;
            if (r) return oK.mute;
        })({ serverDeaf: c, deaf: o, serverMute: d, mute: s, localMute: u }) ?? {},
        T = null != f ? G.intl.formatToPlainString(G.t["1+MVBP"], { userName: m, status: f() }) : m;
    function N(e) {
        null != A
            ? (0, r9.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("97262"),
                      n.e("93103"),
                      n.e("88342"),
                      n.e("35313"),
                      n.e("84442"),
                      n.e("78178"),
                      n.e("92456"),
                      n.e("20352"),
                  ]).then(n.bind(n, 107632));
                  return (t) =>
                      (0, E.jsx)(e, {
                          ...t,
                          user: a,
                          guildId: A,
                          channel: r,
                          showMediaItems: !0,
                          onInteraction: (0, sB.s)("GuildChannelUserContextMenu", eg.A.RTC_PANEL, {
                              targetUserId: a.id,
                          }),
                      });
              })
            : (0, r9.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("61657")]).then(
                      n.bind(n, 668569),
                  );
                  return (t) =>
                      (0, E.jsx)(e, {
                          ...t,
                          user: a,
                          showMediaItems: !0,
                          onInteraction: (0, sB.s)("UserGenericContextMenu", eg.A.RTC_PANEL, { targetUserId: a.id }),
                      });
              });
    }
    let S = (0, C.bG)([e4.A], () => e4.A.getVoiceVolume(a.id)),
        L = (0, oB.v)({ isSpeaking: _, voiceDb: S, spreadDirection: oB.O.INSET_ONLY, maxInnerSpreadRadius: 3 });
    return (0, E.jsx)(ss.A, {
        targetElementRef: t,
        user: a,
        guildId: A,
        channelId: r.id,
        position: "top",
        clickTrap: !0,
        children: (e) =>
            (0, E.jsx)(iO.m, {
                text: T,
                children: (0, E.jsx)(to.D, {
                    innerRef: t,
                    onClick: (t) => {
                        e.onClick(t), (0, sH.X)(i, sH.O.VOICE_USER);
                    },
                    className: oz.H,
                    onContextMenu: N,
                    focusProps: oW,
                    children: (0, E.jsx)(oY.A, {
                        shakeLocation: o$.uD.VOICE_USER,
                        isShaking: _,
                        children: (0, E.jsx)("div", {
                            className: oz.my,
                            style: { backgroundImage: `url(${h})`, ...L },
                            children:
                                null != I
                                    ? (0, E.jsx)(I, {
                                          className: tn()(oz.tr, { [oz.qE]: g }),
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
function oX(e) {
    let { voiceStates: t, channel: n, className: i } = e,
        [r, a] = p.useState(!1),
        l = (0, C.bG)([P.default], () => P.default.getId()),
        { containerRef: s, maxVisibleAvatars: o } = (function (e) {
            let [t, n] = p.useState(7),
                i = (0, oH.A)(() => {
                    let t = r?.current;
                    if (null == t) return;
                    let i = Math.floor((t.offsetWidth + 4) / 28);
                    n(Math.max(1, e > i ? i - 1 : i));
                }),
                r = (0, oF.w)(i, [e], { fireOnMount: !0, fireOnDepsChange: !0 });
            return { containerRef: r, maxVisibleAvatars: t };
        })(t.length - 1),
        [d, c] = (function (e, t, n) {
            let i = [];
            for (let r of e)
                if (r.user.id !== t && !i.some((e) => e.user.id === r.user.id)) {
                    if (i.length >= n) return [i, !0];
                    i.push(r);
                }
            return [i, !1];
        })(t, l, o),
        u = r ? oj.Q : ok.j,
        _ = r ? G.intl.string(G.t["Z/Tya5"]) : G.intl.string(G.t.XR5BAc),
        A = (0, E.jsx)(iO.m, {
            text: _,
            ariaHidden: !0,
            children: (0, E.jsx)(a$.K, {
                "aria-label": _,
                onClick: () => a(!r),
                icon: () => (0, E.jsx)(u, { size: "md" }),
                variant: "icon-only",
                size: "sm",
            }),
        }),
        h = c && r ? t : d;
    return h.length <= 0
        ? null
        : (0, E.jsx)(nX.Ip, {
              className: tn()(oz.XG, i),
              fade: !0,
              children: (0, E.jsxs)("div", {
                  ref: s,
                  className: tn()(oz.Xk, !r && oz.yZ),
                  role: "group",
                  "aria-label": G.intl.string(G.t["/ZgaVU"]),
                  children: [
                      h.map((e) => {
                          let { user: t, nick: i, voiceState: r } = e;
                          return t.id !== l
                              ? (0, E.jsx)(
                                    oq,
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
                      c ? A : null,
                  ],
              }),
          });
}
var oZ = n(806931),
    oQ = n(897513),
    oJ = n(509381);
let o0 = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function o1(e) {
    let t = e.currentTarget;
    ec.default.track(D.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: D.JJy.NOISE_CANCELLATION_POPOUT },
    });
}
function o2() {
    let e = p.useRef(null);
    (0, sL.t)(e),
        p.useEffect(() => {
            ec.default.track(D.HAw.OPEN_POPOUT, { type: D.JJy.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, C.bG)([eS.Ay], () => eS.Ay.getNoiseCancellation()),
        n = (0, C.bG)([eS.Ay], () =>
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Ay,
                    t = e.getSystemMicrophoneMode();
                return !(0, s5.A)(!0, t);
            })(eS.Ay),
        ),
        i = (0, C.bG)([eS.Ay], () => eS.Ay.getActiveInputProfile()),
        r = null != i && i !== oJ.m.CUSTOM,
        a = G.intl.string(G.t.uKdWn6),
        l = G.intl.string(G.t.uKdWn6);
    return (
        n
            ? ((a = G.intl.string(G.t.mXZgC9)),
              (l = G.intl.format(G.t.F6lrb4, {
                  onSettingsClick: () => {
                      eS.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : r && (a = G.intl.formatToPlainString(G.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: i })),
        (0, E.jsxs)("div", {
            ref: e,
            className: or.dD,
            children: [
                (0, E.jsx)(iO.m, {
                    text: a,
                    shouldShow: r || n,
                    align: "right",
                    children: (0, E.jsx)("div", {
                        children: (0, E.jsx)(sO.d, {
                            label: G.intl.string(G.t["WGWHv/"]),
                            checked: t && !n,
                            disabled: r || n,
                            onChange: () => ef.A.setNoiseCancellation(!t, { section: D.JJy.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, E.jsx)(nu.E, { variant: "text-sm/normal", children: l }),
                (0, E.jsx)(sV.A, {
                    title: G.intl.string(G.t.JdUas1),
                    notchBackground: sV.V.BLACK,
                    buttonTest: G.intl.string(G.t["sG+MGg"]),
                    buttonStop: G.intl.string(G.t.Yp3SbJ),
                    location: { section: D.JJy.NOISE_CANCELLATION_POPOUT },
                }),
                (0, E.jsx)(sy.D, {
                    label: G.intl.string(G.t.k6h1F4),
                    children: (0, E.jsxs)(sl.A, {
                        justify: sl.A.Justify.BETWEEN,
                        className: or.__invalid_footer,
                        children: [
                            (0, E.jsx)(sb.Anchor, {
                                href: D.X7G.KRISP,
                                onClick: (e) => o1(e),
                                children: (0, E.jsx)("div", { className: or.zQ }),
                            }),
                            (0, E.jsx)(sb.Anchor, {
                                href: sd.A.getArticleURL(D.MVz.NOISE_SUPPRESSION),
                                className: or.W,
                                onClick: (e) => o1(e),
                                children: G.intl.string(G.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function o6() {
    let { parentAnalyticsLocation: e } = (0, nQ.Ay)(),
        t = (0, C.bG)([ou.A], () => ou.A.isMuted()),
        n = t ? G.intl.string(G.t.ScHlfl) : G.intl.string(G.t.zqxfrf);
    return (0, E.jsx)(sc.A, {
        tooltipText: n,
        icon: t ? sv.C : sR.T,
        onClick: () => {
            (0, sH.X)(e, sH.O.STAGE_MUSIC, t), (0, od.k)(!t);
        },
    });
}
function o5(e) {
    let { channel: t, enableActivities: n, disabled: i } = e,
        r = p.useRef(null),
        { parentAnalyticsLocation: a } = (0, nQ.Ay)(),
        l = (0, oh.A)(),
        s = (0, op.A)(t),
        o = (0, C.bG)(
            [rv.Ay],
            () => null != rv.Ay.getSelfEmbeddedActivityForLocation(rv.Ay.getConnectedActivityLocation()),
        ),
        d = (0, s4.Ay)(t),
        { reachedLimit: c, limit: u } = (0, oE.A)(t),
        _ = p.useCallback(() => {
            (0, oI.A)();
        }, []),
        A = (0, s6.Us)(),
        h = p.useCallback(
            (e) => {
                if (eS.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    ef.A.setVideoEnabled(e), e && (0, aO.pX)(D.BVt.CHANNEL(t.getGuildId() ?? D.ME, t.id));
                };
                (0, sH.X)(a, sH.O.CAMERA, e), e ? (0, of.A)(n, A) : n();
            },
            [t, A, a],
        ),
        m = o || n || d,
        { Component: I, play: g, events: f } = (0, sT.K)(l.enabled ? "disable" : "enable");
    return (
        p.useEffect(() => () => g(), [l.enabled, g]),
        (0, E.jsx)(oT.r, {
            onChange: h,
            onCameraUnavailable: _,
            hasPermission: s,
            channelLimit: u,
            channelLimitReached: c,
            ...l,
            enabled: !i && l.enabled,
            children: (e) => {
                let { unavailable: t, isActive: n, label: i, iconComponent: l, iconColor: s, ...o } = e,
                    d = (0, E.jsx)(I, { size: "md", className: tn()(or.iA, { [or.ij]: !m }), color: "currentColor" });
                return (0, E.jsx)(n9.Y, {
                    targetElementRef: r,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsx)(sF.A, {
                            onClose: t,
                            minimal: !0,
                            onInteraction: (0, sB.s)("VideoDeviceMenu", a),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: n9.Y.Animation.FADE,
                    children: (e, a) => {
                        let { onClick: l, ...s } = e,
                            { isShown: c } = a;
                        return (0, E.jsx)(iO.m, {
                            text: i,
                            children: (0, E.jsx)(tM.$n, {
                                "data-migration-pending": !0,
                                buttonRef: r,
                                ...o,
                                ...s,
                                onClick: (e) => {
                                    o.onClick(e), c && l(e);
                                },
                                onMouseEnter: () => {
                                    s.onMouseEnter?.(), f.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    f.onMouseLeave();
                                },
                                onContextMenu: (e) => {
                                    l(e);
                                },
                                size: tM.$n.Sizes.MEDIUM,
                                className: tn()(or.x6, or.Sq, { [or.rK]: n, [or.tU]: t, [or.r9]: o.disabled }),
                                innerClassName: or.bk,
                                wrapperClassName: or.x6,
                                fullWidth: !0,
                                focusProps: o0,
                                children: m
                                    ? d
                                    : (0, E.jsxs)(sl.A, {
                                          align: sl.A.Align.CENTER,
                                          children: [d, G.intl.string(G.t.FlNoSV)],
                                      }),
                            }),
                        });
                    },
                });
            },
        })
    );
}
function o3(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, s6.Us)(),
        { parentAnalyticsLocation: r, newestAnalyticsLocation: a } = (0, nQ.Ay)(),
        l = i === D.BRT.POPOUT,
        s = (0, sU.et)(t.id),
        o = (0, sU.dL)(s),
        { userInActivity: d } = (0, C.cf)([rv.Ay], () => ({
            userInActivity: null != rv.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        c = (0, sM.b)({ surface: sx.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        u = s !== sU.xy.CAN_LAUNCH,
        { Component: _, events: A, play: h } = (0, sC.c)();
    return n
        ? (0, E.jsx)(nJ.GY, {
              contentType: nq.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
              latestVersion: c,
              children: (e) => {
                  let { visibleContent: n, markAsDismissed: i } = e;
                  return (0, E.jsx)(iO.m, {
                      text: o,
                      children: (0, E.jsxs)(tM.$n, {
                          "data-migration-pending": !0,
                          fullWidth: !0,
                          size: tM.$n.Sizes.MEDIUM,
                          ...A,
                          onClick: () => {
                              h(),
                                  (0, sk.A)({
                                      context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                      openInPopout: l,
                                      analyticsLocation: a,
                                  }),
                                  (0, sH.X)(r, sH.O.ACTIVITY),
                                  n === nq.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && i(tT.i.TAKE_ACTION);
                          },
                          onMouseEnter: () => {
                              A.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              A.onMouseLeave();
                          },
                          disabled: u,
                          className: tn()(or.x6, or.Sq, { [or.rK]: d, [or.r9]: u }),
                          innerClassName: or.bk,
                          wrapperClassName: or.x6,
                          focusProps: o0,
                          children: [
                              n === nq.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, E.jsx)(sj.a, { top: -1, right: -1 }),
                              (0, E.jsx)(_, { size: "md", color: "currentColor", className: or.iA }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
function o4(e) {
    let t,
        { channel: n, canGoLive: i, enableActivities: r, disabled: a } = e,
        l = p.useRef(null),
        { parentAnalyticsLocation: s, analyticsLocations: o } = (0, nQ.Ay)(),
        d = (0, C.bG)([i_.default], () => i_.default.getCurrentUser()),
        c = (0, C.yK)([oN.A], () => oN.A.getAllActiveStreams()),
        u = (0, op.A)(n),
        _ = n.getGuildId(),
        A = (0, C.cf)([rv.Ay], () => null != rv.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        h = (0, s4.Ay)(n),
        m = p.useCallback(() => {
            (0, oC.A)(_, n.id, o);
        }, [_, n.id, o]),
        I = c.find((e) => e.ownerId === d?.id),
        g = (0, om.T)(n, d, c);
    t = null == I ? (i ? m : og.A) : () => (0, s0.A)(I);
    let f = null != I || g.length > 0,
        T = u ? G.intl.string(G.t.fjBNo1) : G.intl.string(G.t.uQn9B8),
        N = A || r || h,
        S = null != I,
        { Component: L, events: O, play: y } = (0, sf.c)(S ? "disable" : "enable");
    p.useEffect(() => () => y(), [y, S]);
    let b = (0, E.jsx)(L, { size: "md", color: "currentColor", className: tn()(or.iA, { [or.ij]: !N }) });
    return (0, E.jsx)(n9.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, E.jsx)(om.A, {
                channel: n,
                currentUser: d,
                activeStreams: c,
                onClose: t,
                handleGoLive: i ? m : og.A,
                onInteraction: (0, sB.s)("ManageStreamsMenu", s, { entrypoint: oZ.GK.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: n9.Y.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: i, ...r } = e;
            return (0, E.jsx)(iO.m, {
                text: T,
                children: (0, E.jsx)(tM.$n, {
                    "data-migration-pending": !0,
                    buttonRef: l,
                    size: tM.$n.Sizes.MEDIUM,
                    onClick: (e) => {
                        (0, sH.X)(s, sH.O.STREAM, null == I), f ? n(e) : t();
                    },
                    disabled: !u || a,
                    className: tn()(or.x6, or.Sq, { [or.rK]: null != I, [or.r9]: !u || a }),
                    ...(f ? r : null),
                    onMouseEnter: () => {
                        i?.(), O.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        O.onMouseLeave();
                    },
                    innerClassName: or.bk,
                    wrapperClassName: or.x6,
                    focusProps: o0,
                    children: N
                        ? b
                        : (0, E.jsxs)(sl.A, { align: sl.A.Align.CENTER, children: [b, G.intl.string(G.t["r0/+v7"])] }),
                }),
            });
        },
    });
}
class o8 extends p.PureComponent {
    ref = p.createRef();
    krispButtonRef = p.createRef();
    handleChannelLinkClick = (e) => {
        let { guild: t, channel: n } = this.props;
        ew()(null != n, "Channel is null during navigation click"),
            e.stopPropagation(),
            sD.A.channelListScrollTo(t?.id ?? D.ME, n.id),
            (0, sH.X)(eg.A.RTC_PANEL, sH.O.CHANNEL_LINK);
    };
    handleChannelLinkContextMenu = (e) => {
        let { channel: t, analyticsLocations: i } = this.props;
        (0, r9.L3)(e, async () => {
            let { default: e } = await n.e("57550").then(n.bind(n, 576701));
            return (n) =>
                (0, E.jsx)(nQ.f5, {
                    value: i,
                    children: (0, E.jsx)(e, {
                        ...n,
                        channel: t,
                        onInteraction: (0, sB.s)("RTCConnectionMenu", eg.A.RTC_PANEL),
                    }),
                });
        });
    };
    handleCloseVoicePanelIntroduction = () => {
        s1.sF(oQ._.VOICE_PANEL_INTRODUCTION);
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
        let s = (0, iz.m1)(t, i_.default, eZ.A);
        return (
            null != n ? ((e = D.BVt.CHANNEL(n.id, t.id)), (s = `${s} / ${n.name}`)) : (e = D.BVt.CHANNEL(D.ME, t.id)),
            (0, E.jsx)(s3.A, {
                channelId: t.id,
                quality: i,
                state: r,
                lastPing: a,
                hasVideo: l,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, E.jsx)(iD.vN, {
                    children: (0, E.jsx)(sg.N_, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, E.jsx)(su.A, {
                            className: or.Ix,
                            children: (0, E.jsx)(nu.E, {
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
                null == a.find((e) => e.user.id === P.default.getId() && (0, o_.eY)(e.voiceState) === o_.zF.ON_STAGE) &&
                (0, oc.Zl)(r.id)
              ? (0, E.jsx)(o6, {})
              : !n && t
                ? (0, E.jsx)(iO.m, {
                      text: G.intl.string(G.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, E.jsx)(sc.A, {
                          tooltipText: null,
                          disabled: !0,
                          icon: sP.m,
                          "aria-label": G.intl.string(G.t["i+SO/U"]),
                      }),
                  })
                : (0, E.jsx)(
                      n9.Y,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, E.jsx)(o2, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, E.jsx)(o7, {
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
            ? (0, E.jsx)(oX, { voiceStates: t, channel: e, className: or.Xk })
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
        let s = P.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, oo.Bw)(e.guild_id) || !t) return null;
            let n = r.find((e) => e.user.id === s);
            if (null == n || n.voiceState.suppress) return null;
        }
        let o = (e.isGuildVoice() || l) && i,
            { reachedLimit: d } = (0, oE.M)(e),
            c = (0, oo.xn)(e.id);
        return (0, E.jsxs)("div", {
            className: or.uu,
            children: [
                (0, E.jsx)(o5, { channel: e, enableActivities: o, disabled: !c && d }),
                (0, E.jsx)(o4, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: o,
                    disabled: e.isGuildStageVoice() && ((c && null == a) || (!c && d)),
                }),
                o ? (0, E.jsx)(o3, { channel: e, enableActivities: i }) : null,
                (0, s4.Ay)(e) ? (0, E.jsx)(oa, { channel: e, focusProps: o0 }) : null,
            ],
        });
    }
    renderVoicePanelIntroduction = () =>
        (0, E.jsxs)("div", {
            className: tn()(or.SC, "theme-light"),
            children: [
                (0, E.jsx)(n_.D, {
                    className: or.oN,
                    variant: "heading-md/semibold",
                    children: G.intl.string(G.t["ba/rL2"]),
                }),
                (0, E.jsx)(nu.E, { className: or.uf, variant: "text-sm/normal", children: G.intl.string(G.t.Ne1Eew) }),
                (0, E.jsx)(n0.$, {
                    fullWidth: !0,
                    onClick: this.handleCloseVoicePanelIntroduction,
                    text: G.intl.string(G.t.shaBeH),
                    focusProps: o0,
                }),
            ],
        });
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, E.jsx)(n9.Y, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: "top",
                  align: "center",
                  animation: n9.Y.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, E.jsxs)("div", {
                          ref: this.ref,
                          className: or.kL,
                          children: [
                              (0, E.jsxs)(sl.A, {
                                  className: or.FI,
                                  align: sl.A.Align.CENTER,
                                  children: [
                                      (0, E.jsx)("div", { className: or.vW, children: this.renderConnectionStatus() }),
                                      (0, E.jsxs)(sl.A, {
                                          grow: 0,
                                          shrink: 0,
                                          className: or.nL,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, E.jsx)(ox, { channel: e }),
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
function o7(e) {
    var t;
    let i,
        r,
        a,
        l,
        s,
        o,
        { popoutProps: d, isShown: c, noiseCancellationActive: u, ref: _ } = e,
        { parentAnalyticsLocation: A } = (0, nQ.Ay)(),
        {
            play: h,
            Component: m,
            events: I,
        } = ((t = u ? "disable" : "enable"),
        (i = p.useRef(null)),
        ((r = p.useRef(t)).current = t),
        (a = p.useMemo(
            () => () => {
                null != i.current && i.current.play(t);
            },
            [t],
        )),
        (l = p.useCallback(() => {
            if (null == i.current) return;
            let e = "enable" === t ? "hover_disabled" : "hover_enabled";
            i.current.play(e);
        }, [t])),
        (s = p.useCallback(() => {
            if (null == i.current) return;
            let e = "enable" === t ? "hover_disabled" : "hover_enabled";
            i.current.stopIfPlaying(e);
        }, [t])),
        (o = p.useCallback(
            (e) =>
                (0, E.jsx)(sN.P, {
                    ...e,
                    src: () => n.e("24596").then(n.t.bind(n, 941983, 19)),
                    ref: i,
                    initialAnimation: r.current,
                    markers: sS,
                }),
            [],
        )),
        {
            events: { onClick: a, onMouseEnter: l, onMouseLeave: s },
            play: a,
            getDuration: p.useCallback(() => i.current?.getDuration(), []),
            getCurrentFrame: p.useCallback(() => i.current?.getCurrentFrame() ?? null, []),
            Component: o,
        });
    return (
        p.useEffect(() => () => h(), [u, h]),
        (0, E.jsx)(sc.A, {
            ...d,
            ref: _,
            onClick: (e) => {
                (0, sH.X)(A, sH.O.KRISP, !u), d.onClick(e);
            },
            onMouseEnter: () => {
                d.onMouseEnter?.(), I.onMouseEnter();
            },
            onMouseLeave: () => {
                I.onMouseLeave();
            },
            tooltipText: c ? null : G.intl.string(G.t.vFiCSx),
            icon: (0, E.jsx)(m, { size: "refresh_sm" }),
        })
    );
}
let o9 = (0, ae.A)(function (e) {
    let t = (0, s$.A)(),
        n = (0, C.bG)([sY.default], () => sY.default.getAwaitingRemoteSessionInfo()),
        i = (0, C.bG)([i_.default], () => i_.default.getCurrentUser()),
        { channelId: r, ...a } = (0, C.cf)([e3.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: D.bFR.FINE,
                      rtcConnectionState: D.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: e3.A.getChannelId(),
                      rtcConnectionQuality: e3.A.getQuality(),
                      rtcConnectionState: e3.A.getState(),
                      rtcConnectionLastPing: e3.A.getLastPing(),
                  },
        ),
        l = (0, C.bG)([i7.A], () => i7.A.getChannel(r), [r]),
        s = l?.getGuildId(),
        o = (0, C.bG)([rU.A], () => rU.A.getGuild(s), [s]),
        d = (0, C.cf)([eS.Ay], () => ({
            noiseCancellationSupported: eS.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, s5.A)(eS.Ay.getNoiseCancellation(), eS.Ay.getSystemMicrophoneMode()),
            noiseCancellationError: eS.Ay.isNoiseCancellationError(),
            canGoLive: (0, sJ.A)(eS.Ay),
        })),
        c = (0, C.bG)(
            [eS.Ay, s2.A],
            () =>
                s2.A.hasHotspot(oQ._.VOICE_PANEL_INTRODUCTION) &&
                (0, rn.mv)(i) &&
                !eS.Ay.isInteractionRequired() &&
                !l?.isGuildStageVoice(),
        ),
        u = (0, C.bG)([rF.A], () => null != r && rF.A.hasVideo(r), [r]),
        _ = (0, C.bG)([oN.A], () => oN.A.getCurrentUserActiveStream()),
        A = (0, C.bG)([t5.A], () => t5.A.hasLayers()),
        h = (0, C.bG)([nP.A], () => nP.A.isViewingRoles(s)),
        m = (0, C.bG)([rk.A], () => h && !rk.A.can(D.xBc.VIEW_CHANNEL, l), [h, l]),
        I = oA.vL.useSetting(),
        [g, f, T] = (0, C.yK)(
            [oS.Ay, ol.A],
            () =>
                l?.isGuildStageVoice()
                    ? [ol.A.getMutableParticipants(l.id, os.ip.SPEAKER), ol.A.getParticipantsVersion(l.id), null]
                    : [null, null, null != l ? oS.Ay.getVoiceStatesForChannel(l) : null],
            [l],
        ),
        N = p.useMemo(
            () =>
                g?.map((e) => {
                    let { user: t, userNick: n, voiceState: i } = e;
                    return { user: t, nick: n, voiceState: i };
                }) ??
                T ??
                [],
            [g, f, T],
        ),
        [S, L] = p.useState(!1);
    p.useEffect(() => {
        (h || m) && L(!1);
    }, [h, m, L]);
    let { analyticsLocations: O } = (0, nQ.Ay)(eg.A.RTC_PANEL),
        y = (0, sw.A)(s ?? D.dJq, l?.id),
        b = (0, sG.A)(l?.id);
    return (0, E.jsx)(nQ.f5, {
        value: O,
        children: (0, E.jsxs)("div", {
            className: or.iE,
            children: [
                null != t || null != n ? (0, E.jsx)(sQ, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, E.jsx)(o8, {
                    ...e,
                    ...d,
                    ...a,
                    enableActivities: y,
                    remoteVoiceState: t,
                    guild: o,
                    channel: l,
                    hasVideo: u,
                    selfStream: _,
                    hasLayers: A,
                    voiceStates: N,
                    showVoiceStates: I,
                    shouldShowVoicePanelIntroduction: c,
                    isPrivateChannelWithEnabledActivities: b,
                    analyticsLocations: O,
                }),
                !S && h && null != s
                    ? (0, E.jsxs)("div", {
                          className: or.BT,
                          children: [
                              (0, E.jsx)(nu.E, {
                                  variant: "text-sm/normal",
                                  className: or.u0,
                                  children: m ? G.intl.string(G.t.efjuQJ) : G.intl.string(G.t.br8H2N),
                              }),
                              (0, E.jsx)(n0.$, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  text: G.intl.string(G.t.WAI6xu),
                                  focusProps: o0,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
var de = n(28082),
    dt = n(111113);
function dn(e) {
    let { analyticsLocations: t } = (0, nQ.Ay)(eg.A.ACTIVITY_PANEL),
        n = (0, lW.A)((e) => {
            let { guildId: t } = e;
            return t;
        });
    return (0, E.jsx)(nQ.f5, { value: t, children: (0, E.jsx)(sn.A, { ...e, guildId: n }) });
}
let di = p.memo(function () {
    let e = p.useRef(null);
    (0, l9.i4)(
        e,
        (e) => {
            let { height: t } = e;
            document.body.style.setProperty("--custom-app-panels-height", `${t}px`);
        },
        [],
    );
    let { isSorting: t } = (0, se.A)();
    return (0, E.jsx)("section", {
        ref: e,
        className: tn()(dt.C3, { [dt.aB]: t }),
        "aria-label": G.intl.string(G.t.vTl6Lk),
        children: (0, E.jsxs)(iD.xp, {
            containerRef: e,
            children: [
                (0, E.jsx)(l7, {}),
                (0, E.jsx)(de.A, {}),
                (0, E.jsx)(sI, {}),
                (0, E.jsx)(nZ.A, { section: D.JJy.ACTIVITY_PANEL, children: (0, E.jsx)(dn, { className: dt.iz }) }),
                (0, E.jsx)(nZ.A, { section: D.JJy.RTC_CONNECTION_PANEL, children: (0, E.jsx)(o9, {}) }),
                (0, E.jsx)(nZ.A, { section: D.JJy.ACCOUNT_PANEL, children: (0, E.jsx)(st.A, {}) }),
            ],
        }),
    });
});
var dr = n(746080),
    da = n(758836),
    dl = n(539916),
    ds = n(613057),
    dd = n(355097);
n(964623);
let dc = (0, g.Fe)({ createPromise: () => Promise.resolve().then(n.bind(n, 201313)), webpackId: 201313 }),
    du = () => (0, E.jsx)("div", { className: dt.wG, children: (0, E.jsx)(tl.y, {}) }),
    d_ = (0, g.Fe)({
        createPromise: () =>
            Promise.all([n.e("60161"), n.e("73644"), n.e("2529"), n.e("81505")]).then(n.bind(n, 276523)),
        webpackId: 276523,
        name: "NotificationsInboxSidebar",
        renderLoader: du,
    }),
    dA = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("52286"),
                n.e("86674"),
                n.e("4009"),
                n.e("80093"),
                n.e("41706"),
                n.e("78870"),
            ]).then(n.bind(n, 480178)),
        webpackId: 480178,
        name: "GuildShopPage",
        renderLoader: t_.uW,
    }),
    dh = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("34983"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("14078"),
            ]).then(n.bind(n, 148980)),
        webpackId: 148980,
        name: "SocialLayerStorefront",
        renderLoader: du,
    }),
    dE = (0, g.Fe)({
        createPromise: () => n.e("8497").then(n.bind(n, 254316)),
        webpackId: 254316,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: du,
    }),
    dp = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("75349"),
                n.e("73644"),
                n.e("54490"),
                n.e("63078"),
                n.e("96694"),
                n.e("53267"),
                n.e("60744"),
                n.e("66319"),
                n.e("33957"),
            ]).then(n.bind(n, 578839)),
        webpackId: 578839,
        name: "GuildHomePage",
        renderLoader: t_.tV,
    }),
    dm = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("49681"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("29594"),
                n.e("52286"),
                n.e("28136"),
                n.e("86674"),
                n.e("4009"),
                n.e("15373"),
                n.e("46411"),
                n.e("13848"),
                n.e("62890"),
                n.e("41068"),
                n.e("99583"),
            ]).then(n.bind(n, 28988)),
        webpackId: 28988,
        name: "MemberSafetyPage",
        renderLoader: t_.NU,
    }),
    dI = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("96382"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("60989"),
                n.e("75349"),
                n.e("73644"),
                n.e("54490"),
                n.e("63078"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("32347"),
                n.e("96694"),
                n.e("53267"),
                n.e("36320"),
                n.e("66319"),
                n.e("72165"),
            ]).then(n.bind(n, 807780)),
        webpackId: 807780,
        name: "ChannelsAndRolesPage",
        renderLoader: t_.n,
    }),
    dg = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("96382"),
                n.e("8555"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("36320"),
                n.e("39579"),
            ]).then(n.bind(n, 123071)),
        webpackId: 123071,
        name: "GuildOnboardingPage",
        renderLoader: du,
    }),
    dC = (0, g.Fe)({
        createPromise: () =>
            Promise.all([n.e("42749"), n.e("97763"), n.e("35016"), n.e("88615")]).then(n.bind(n, 242269)),
        webpackId: 242269,
        name: "GuildPowerupsPage",
        renderLoader: t_.Ru,
    }),
    df = (0, g.Fe)({
        createPromise: () => Promise.all([n.e("63562"), n.e("19750")]).then(n.bind(n, 717959)),
        webpackId: 717959,
        name: "GameServerPage",
        renderLoader: t_.Ub,
    }),
    dT = (0, g.Fe)({
        createPromise: () => Promise.all([n.e("31538"), n.e("40976"), n.e("72970")]).then(n.bind(n, 590114)),
        webpackId: 590114,
        name: "ApplicationLibraryPage",
        renderLoader: t_.cL,
    }),
    dN = (0, g.qT)({
        createPromise: () =>
            Promise.all([
                n.e("74968"),
                n.e("95752"),
                n.e("98954"),
                n.e("52286"),
                n.e("4009"),
                n.e("60989"),
                n.e("86300"),
                n.e("31742"),
                n.e("26223"),
                n.e("92539"),
                n.e("2529"),
                n.e("97763"),
                n.e("7521"),
                n.e("99510"),
                n.e("83373"),
            ]).then(n.bind(n, 622168)),
        webpackId: 622168,
        name: "GuildSidebar",
        renderLoader: t_.L,
    }),
    dS = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("44647"),
                n.e("83438"),
                n.e("22701"),
                n.e("21595"),
                n.e("34735"),
                n.e("41343"),
                n.e("51357"),
            ]).then(n.bind(n, 285321)),
        webpackId: 285321,
        name: "PrivateChannels",
        renderLoader: t_.bM,
    }),
    dL = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("40142"),
                n.e("58946"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("52286"),
                n.e("52803"),
                n.e("53275"),
                n.e("85384"),
                n.e("96975"),
                n.e("30003"),
                n.e("67607"),
                n.e("5769"),
                n.e("14289"),
            ]).then(n.bind(n, 942262)),
        webpackId: 942262,
        name: "GlobalDiscovery",
        renderLoader: t_.Bj,
    }),
    dO = (0, g.Fe)({
        createPromise: () =>
            Promise.all([n.e("28367"), n.e("33098"), n.e("39967"), n.e("25252")]).then(n.bind(n, 767060)),
        webpackId: 767060,
        name: "FamilyCenterRouter",
        renderLoader: t_.c5,
    }),
    dy = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("28367"),
                n.e("58946"),
                n.e("52803"),
                n.e("53275"),
                n.e("96975"),
                n.e("30003"),
                n.e("5769"),
                n.e("5468"),
            ]).then(n.bind(n, 133276)),
        webpackId: 133276,
        name: "QuestHomePage",
        renderLoader: t_.g4,
    }),
    db = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("52286"),
                n.e("86674"),
                n.e("4009"),
                n.e("38652"),
            ]).then(n.bind(n, 461007)),
        webpackId: 461007,
        name: "ICYMIPage",
        renderLoader: t_.so,
    }),
    dv = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("75349"),
                n.e("54490"),
                n.e("63078"),
                n.e("96694"),
                n.e("53267"),
                n.e("11015"),
            ]).then(n.bind(n, 515766)),
        webpackId: 515766,
        name: "MessageRequestPage",
        renderLoader: t_.rt,
    }),
    dR = (0, g.qT)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("80093"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("75349"),
                n.e("73644"),
                n.e("54490"),
                n.e("63078"),
                n.e("41706"),
                n.e("53275"),
                n.e("96694"),
                n.e("7121"),
                n.e("2059"),
                n.e("53267"),
                n.e("94989"),
                n.e("10247"),
                n.e("51743"),
                n.e("60744"),
                n.e("7521"),
                n.e("45013"),
                n.e("92461"),
            ]).then(n.bind(n, 878431)),
        webpackId: 878431,
        name: "Channel",
        renderLoader: t_.l3,
    }),
    dP = (0, g.Fe)({
        createPromise: () => n.e("22270").then(n.bind(n, 816015)),
        webpackId: 816015,
        name: "ChannelStoreListing",
        renderLoader: du,
    }),
    dD = (0, g.Fe)({
        createPromise: () => n.e("49212").then(n.bind(n, 575429)),
        webpackId: 575429,
        name: "DeepLinkLaunchActivityInDM",
        renderLoader: du,
    }),
    dx = (0, g.Fe)({
        createPromise: () => n.e("97544").then(n.bind(n, 667429)),
        webpackId: 667429,
        name: "EmptyNotificationsPage",
        renderLoader: du,
    }),
    dw = (0, g.Fe)({
        createPromise: () => n.e("86105").then(n.bind(n, 995198)),
        webpackId: 995198,
        name: "GuildMemberVerificationPreviewDisabled",
        renderLoader: du,
    }),
    dM = (0, g.Fe)({
        createPromise: () => n.e("56485").then(n.bind(n, 140354)),
        webpackId: 140354,
        name: "GuildOnboardingBlockedPage",
        renderLoader: du,
    }),
    dU = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("52286"),
                n.e("86674"),
                n.e("4009"),
                n.e("80093"),
                n.e("41706"),
                n.e("45127"),
            ]).then(n.bind(n, 726561)),
        webpackId: 726561,
        name: "GuildRoleSubscriptionsOverviewPageWithContext",
        renderLoader: du,
    }),
    dG = (e) => {
        let { match: t } = e,
            n = (0, tE.o)(),
            i = (0, C.bG)([i7.A, ee.A], () => {
                let e = ee.A.getChannelId();
                return i7.A.getChannel(e);
            }),
            { guildId: r, channelId: a, messageId: l, threadId: s } = t.params,
            o = a ?? void 0;
        null == o && null != t.params.gameShopPageIndex && (o = dr.VV.GAME_SHOP);
        let d = (0, C.bG)([rU.A], () => rU.A.getGuild(r)),
            c = (0, C.bG)([l0.Ay], () => (null == r ? null : l0.Ay.getSelfMember(r))),
            u = (0, lB.C$)(r, "ChannelRenderer"),
            _ = (0, lY.N)("ChannelRenderer"),
            A = d?.features.has(D.GuildFeatures.GAME_SERVERS) ?? !1,
            h = (0, C.bG)([nP.A], () => {
                if (null == r) return;
                let e = nP.A.getData(r);
                if (e?.type === nD._.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return tR.B.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return tR.B.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            m = (0, C.bG)([tD.A], () => (0, l$.C$)(o) && (0, l$.C$)(s), [o, s]);
        p.useEffect(() => {
            m || (null != d && (0, aO.pX)(D.BVt.CHANNEL(d.id, (0, lz.A)(d))), (0, nx.E)());
        }, [m, d]);
        let g = null != d,
            f = p.useRef(null);
        p.useEffect(() => {
            g ||
                null == r ||
                f.current === r ||
                ((f.current = r), L.A.joinGuild(r, { lurker: !0, autoNavigate: !1 }).catch(() => {}));
        }, [g, r]);
        let T = (0, nb.$)(r);
        if (null != r && null != o && (0, dr.jq)(o))
            switch (o) {
                case dr.VV.ROLE_SUBSCRIPTIONS:
                    return T
                        ? (0, E.jsx)(dA, { guildId: r, initialTab: tR.B.GUILD_ROLE_SUBSCRIPTIONS })
                        : (0, E.jsx)(dU, { guildId: r });
                case dr.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, E.jsx)(dE, { guildId: r });
                case dr.VV.GAME_SHOP:
                    return (0, E.jsx)(dh, { ...e });
                case dr.VV.GUILD_SHOP:
                    return (0, E.jsx)(dA, { guildId: r, productId: l, initialTab: h });
                case dr.VV.MEMBER_APPLICATIONS:
                    return (0, E.jsx)(I.rd, { to: D.BVt.CHANNEL(r, dr.VV.MEMBER_SAFETY) });
                case dr.VV.GUILD_HOME:
                    return (0, E.jsx)(dp, { guildId: r });
                case dr.VV.CHANNEL_BROWSER:
                    return (0, E.jsx)(dI, { guildId: r, selectedSection: dl.qC.BROWSE });
                case dr.VV.GUILD_ONBOARDING:
                    return (0, E.jsx)(dg, { guildId: r });
                case dr.VV.CUSTOMIZE_COMMUNITY:
                    return (0, E.jsx)(dI, { guildId: r, selectedSection: dl.qC.CUSTOMIZE });
                case dr.VV.MEMBER_SAFETY:
                    return (0, E.jsx)(dm, { guildId: r });
                case dr.VV.GUILD_BOOSTS:
                    return (0, E.jsx)(dC, {
                        guildId: r,
                        powerupListingId: n.get("powerupId") ?? n.get("powerupSkuId"),
                    });
                case dr.VV.GAME_SERVERS:
                    if (!u || (!A && !_)) return (0, E.jsx)(I.rd, { to: D.BVt.CHANNEL(r) });
                    return (0, E.jsx)(df, { guildId: r });
                case dr.VV.REPORT_TO_MOD:
                    return (0, E.jsx)(dR, {});
                default:
                    (0, rt.xb)(o);
            }
        if ((0, ny.$Y)(d, c)) return (0, E.jsx)(dM, { guildId: r, channelId: o });
        if (i?.type === D.rbe.GUILD_STORE) {
            let e = l2.default.cast(t.params.messageId);
            return (0, E.jsx)(dP, { channel: i, inputSkuId: e }, i.id);
        }
        return (0, E.jsx)(dR, {});
    },
    dj = p.memo(function () {
        let { guildId: e, channelId: t } = (0, lW.A)(),
            { notificationCenterVariant: n } = (0, nk.X8)({ location: "Sidebar" }),
            i = (0, C.bG)([ee.A], () => t ?? ee.A.getChannelId(e));
        return window.location.pathname.startsWith(D.BVt.CHANNEL(D.gNP))
            ? ("sidebar" !== n && (0, aO.bG)(lJ.A.defaultRoute), (0, E.jsx)(d_, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(D.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(D.BVt.GUILD_DISCOVERY) ||
                (0, is.r$)()
              ? (0, E.jsx)(nL, {})
              : null != e
                ? (0, E.jsx)(dN, { selectedChannelId: i, guildId: e }, e)
                : (0, E.jsx)(dS, {});
    }),
    dk = (e) => (0, E.jsx)(dG, { ...e }),
    dV = () => (0, E.jsx)(dL, {}),
    dF = (e) => (0, E.jsx)(dH, { ...e }),
    dH = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (p.useEffect(() => {
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
            ? (0, E.jsx)(dx, {})
            : dk(e);
    },
    dB = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, E.jsx)(dw, { guildId: t.params.guildId }) : null;
    },
    dY = (e) => {
        let { match: t } = e;
        return (0, aO.pX)(D.BVt.ME), (0, nR.A)(t.params.inviteCode), null;
    },
    d$ = () => (0, E.jsx)(dT, {}),
    dz = () => (0, E.jsx)(tA, {}),
    dW = () =>
        function (e) {
            let { tab: t } = (0, m.parse)(e.location.search);
            return Object.values(da.G2).includes(t) ? (0, E.jsx)(ty, { tab: t, ...e }) : (0, E.jsx)(ty, { ...e });
        };
function dK() {
    return (0, E.jsx)(dy, { topLevelRoute: !0 });
}
let dq = (e) => (0, E.jsx)(dD, { ...e }),
    dX = () => (0, E.jsx)(lH, {}),
    dZ = () => (0, E.jsx)(db, {}),
    dQ = () => (0, E.jsx)(dv, {}),
    dJ = () => (0, E.jsx)(dO, {}),
    d0 = (e) => {
        let t = e.location.pathname;
        return (0, E.jsx)(w, {
            deepLinkType: ds.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, E.jsx)(lH, { initialSection: D.m3P.ONLINE });
                    case "addFriends":
                        return (0, E.jsx)(lH, { initialSection: D.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, E.jsx)(lH, { initialSection: D.m3P.PENDING });
                    case "sessionManagement":
                        return (0, E.jsx)(I.rd, { to: (0, lQ.settingsPathToRoute)(dd.od.SESSIONS) });
                    case "connections":
                        return (0, E.jsx)(I.rd, {
                            to: { pathname: (0, lQ.settingsPathToRoute)(dd.od.CONNECTIONS), search: e.location.search },
                        });
                    case "family-center":
                        return (0, E.jsx)(I.rd, { to: D.BVt.FAMILY_CENTER });
                    case "account-standing":
                        return (0, E.jsx)(I.rd, { to: (0, lQ.settingsPathToRoute)(dd.od.ACCOUNT_ACCOUNT_STANDING) });
                    case "authorized-apps":
                        return (0, E.jsx)(I.rd, { to: (0, lQ.settingsPathToRoute)(dd.od.AUTHORIZED_APPS) });
                    case "open-shop":
                        let { tab: n } = (0, m.parse)(e.location.search);
                        if (Object.values(da.G2).includes(n))
                            return (0, E.jsx)(I.rd, { to: D.BVt.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, E.jsx)(I.rd, { to: D.BVt.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, E.jsx)(I.rd, {
                            to: { pathname: (0, lQ.settingsPathToRoute)(dd.od.PROFILE_CUSTOMIZATION) },
                        });
                    case "gift":
                    case "store":
                        return (0, E.jsx)(I.rd, { to: { pathname: D.BVt.NITRO_HOME } });
                    case "connected-games":
                        return (0, E.jsx)(I.rd, {
                            to: (0, lQ.settingsPathToRoute)(dd.od.CONTENT_AND_SOCIAL_CONNECTED_GAMES),
                        });
                    case "boost":
                        let i = t.params.guildId;
                        return (0, E.jsx)(I.rd, { to: D.BVt.POWERUP_STORE(i) });
                    case "boost-settings":
                        return (0, E.jsx)(I.rd, { to: (0, lQ.settingsPathToRoute)(dd.od.GUILD_BOOSTING) });
                    default:
                        return (0, E.jsx)(I.rd, { to: D.BVt.ME });
                }
            })(e),
        });
    };
function d1(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", `${e}px`);
}
function d2(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: i, hideChannelList: r, isSidebarOpen: a } = e,
        l = (0, C.bG)([tI.A], () => tI.A.isFullscreenInContext()),
        s = (0, tv.useAppSidebarState)((e) => !e.isOpen) && !1;
    p.useLayoutEffect(() => {}, [!1]),
        p.useLayoutEffect(() => {
            if (s) d1(76);
            else {
                let e = parseInt(ta.w.get(tc.o) ?? "");
                Number.isNaN(e) && (e = 375), d1(e);
            }
        }, [s]);
    let o = p.useRef(null),
        d = p.useCallback(
            (e, t) => {
                d1(e);
                t <= 264 ? document.body.classList.add(dt._A) : document.body.classList.remove(dt._A),
                    t >= 432 ? document.body.classList.add(dt.uN) : document.body.classList.remove(dt.uN);
                let n = t - e;
                o.current?.style.setProperty("--custom-overdrag", `${1 + Math.min(Math.abs(n / 76), 0.25)}`);
            },
            [!1],
        ),
        c = p.useCallback(() => {
            document.body.classList.add(dt.cB);
        }, []),
        u = p.useCallback((e) => {
            document.body.classList.remove(dt.cB),
                document.body.classList.remove(dt._A),
                document.body.classList.remove(dt.uN),
                document.body.classList.remove(dt.l4),
                o.current?.style.setProperty("--custom-overdrag", "0px"),
                ta.w.set(tc.o, e),
                ec.default.track(D.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        _ = (0, th.A)({
            minDimension: 264,
            maxDimension: 432,
            resizableDomNodeRef: o,
            onElementResize: d,
            onElementResizeStart: c,
            onElementResizeEnd: u,
            orientation: th.R.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        A = p.useCallback(() => {
            tv.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (p.useLayoutEffect(() => {
            s && d1(76);
        }, [s]),
        i)
    )
        return null;
    let h = { className: tn()(dt.th, { [dt.Qd]: !t }) };
    return (0, E.jsx)(ts.N, {
        theme: n,
        children: (e) =>
            (0, E.jsxs)("div", {
                ref: o,
                "data-collapsed": s,
                className: tn()(dt.pz, e, { [dt.Ij]: b.Fr, [dt.R]: l, [dt.WG]: r }),
                children: [
                    a && (0, E.jsx)(nv.A, { className: dt.Pl, themeOverride: n }),
                    !r &&
                        (0, E.jsxs)(E.Fragment, {
                            children: [
                                (0, E.jsx)("div", { ...h, children: (0, E.jsx)(dj, {}) }),
                                (0, E.jsx)(to.D, {
                                    onClick: A,
                                    "aria-label": "Resize Sidebar",
                                    className: dt.tq,
                                    onMouseDown: _,
                                }),
                                (0, E.jsx)(di, {}),
                            ],
                        }),
                ],
            }),
    });
}
function d6() {
    let e,
        t = (0, C.bG)([l1.Ay], () => l1.Ay.hasNotice()),
        n = (0, lZ.NC)(),
        i = (function () {
            let [e, t] = p.useState(() => window.location.pathname.startsWith(D.BVt.GUILD_MEMBER_VERIFICATION("")));
            return (
                p.useEffect(
                    () =>
                        lK.A.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(D.BVt.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        r = ((e = (0, I.zy)()), (0, lX.B)(e.pathname, D.BVt.GUILD_BOOSTING_MARKETING(lq.pv.guildId()))?.isExact === !0),
        a = (0, C.bG)([nG], () => nG.getIsOpen()),
        { notificationCenterVariant: l } = (0, nk.X8)({ location: "Sidebar" }),
        s = (0, tP.f)("AppView"),
        o = (0, I.W5)([
            D.BVt.CHANNEL(D.ME, lq.pv.channelId()),
            D.BVt.CHANNEL(lq.pv.guildId(), lq.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        d = o?.params?.channelId === dr.VV.GUILD_ONBOARDING,
        c = p.useCallback(() => nw.openSidebar(), []),
        u = ((0, tv.useAppSidebarState)((e) => !e.isOpen), (0, C.bG)([tI.A], () => tI.A.isFullscreenInContext())),
        _ = (0, C.bG)([tx.A], () => tx.A.isFrameActive());
    return (
        p.useEffect(() => {
            (0, tr.O)(() => {
                dR.preload(), dN.preload();
            });
        }, []),
        (0, E.jsx)("div", {
            className: dt.kL,
            children: (0, E.jsx)(nO.A.Provider, {
                value: o?.params.guildId === D.ME ? void 0 : o?.params.guildId,
                children: (0, E.jsxs)("div", {
                    className: dt.E3,
                    "data-fullscreen": u,
                    children: [
                        !u && (0, E.jsx)(dc, {}),
                        b.Fr ? null : (0, E.jsx)(nj.A, {}),
                        (0, E.jsxs)("div", {
                            className: dt.Qs,
                            children: [
                                (0, E.jsx)(tL, {}),
                                (0, E.jsx)(d2, {
                                    isSidebarOpen: a,
                                    hasNotice: t,
                                    sidebarTheme: n,
                                    hideChannelList: i || r || d,
                                    hideSidebar: !a,
                                }),
                                (0, E.jsx)("div", {
                                    className: dt.MY,
                                    "data-collapsed": !1,
                                    children: (0, E.jsxs)(tp.A.Provider, {
                                        value: c,
                                        children: [
                                            (0, E.jsxs)(I.dO, {
                                                children: [
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, E.jsx)(I.rd, { to: D.BVt.ME }),
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                        render: dq,
                                                        impressionName: ti.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { match: t } = e;
                                                            return { application_id: t?.params.applicationId };
                                                        },
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.APPLICATION_LIBRARY,
                                                        render: d$,
                                                        impressionName: ti.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.APPLICATION_STORE,
                                                        render: dz,
                                                        impressionName: ti.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                        render: dW(),
                                                        disableTrack: !0,
                                                    }),
                                                    s &&
                                                        (0, E.jsx)(tm.A, {
                                                            path: D.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
                                                            render: function (e) {
                                                                let { match: t, ...n } = e,
                                                                    { layoutId: i } = t.params;
                                                                return null == i || "" === i
                                                                    ? (0, E.jsx)(ty, { ...n })
                                                                    : (0, E.jsx)(tb, { layoutId: i, ...n });
                                                            },
                                                            disableTrack: !0,
                                                        }),
                                                    s &&
                                                        (0, E.jsx)(tm.A, {
                                                            path: D.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(
                                                                ":collectionId",
                                                            ),
                                                            render: function (e) {
                                                                let { match: t, ...n } = e,
                                                                    { collectionId: i } = t.params;
                                                                return null == i || "" === i
                                                                    ? (0, E.jsx)(ty, { ...n })
                                                                    : (0, E.jsx)(tO, { collectionId: i, ...n });
                                                            },
                                                            disableTrack: !0,
                                                        }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.COLLECTIBLES_SHOP,
                                                        render: dW(),
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                        render: dW(),
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.ICYMI,
                                                        render: dZ,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.MESSAGE_REQUESTS,
                                                        render: dQ,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.FAMILY_CENTER,
                                                        render: dJ,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.ME,
                                                        exact: !0,
                                                        render: dX,
                                                        impressionName: ti.ImpressionNames.FRIENDS,
                                                        disableTrack: !0,
                                                    }),
                                                    l === nk.U5.SIDEBAR &&
                                                        (0, E.jsx)(tm.A, {
                                                            path: D.BVt.CHANNEL(
                                                                D.gNP,
                                                                lq.pv.channelId({ optional: !0 }),
                                                                ":messageId?",
                                                            ),
                                                            render: dF,
                                                            disableTrack: !0,
                                                        }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: [
                                                            D.BVt.CHANNEL_THREAD_VIEW(
                                                                lq.pv.guildId(),
                                                                lq.pv.channelId(),
                                                                ":threadId",
                                                                ":messageId?",
                                                            ),
                                                            D.BVt.CHANNELS_GAME_SHOP(
                                                                lq.pv.guildId(),
                                                                ":gameShopPageIndex",
                                                                ":gameShopSkuId?",
                                                                ":gameShopSlug?",
                                                            ),
                                                            D.BVt.CHANNEL(D.ME, lq.pv.channelId()),
                                                            D.BVt.CHANNEL(
                                                                lq.pv.guildId(),
                                                                lq.pv.channelId({ optional: !0 }),
                                                                ":messageId?",
                                                            ),
                                                        ],
                                                        render: dk,
                                                        impressionName: ti.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GLOBAL_DISCOVERY,
                                                        render: dV,
                                                        impressionName: ti.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                        render: dV,
                                                        impressionName: ti.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GLOBAL_DISCOVERY_APPS,
                                                        render: dV,
                                                        impressionName: ti.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.QUEST_HOME_DEPRECATED,
                                                        render: dV,
                                                        impressionName: ti.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.QUEST_HOME,
                                                        render: dK,
                                                        impressionName: ti.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GUILD_DISCOVERY,
                                                        render: dV,
                                                        impressionName: ti.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GUILD_MEMBER_VERIFICATION(lq.pv.guildId()),
                                                        render: dB,
                                                        impressionName: ti.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                            lq.pv.guildId(),
                                                            ":inviteCode?",
                                                        ),
                                                        render: dY,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GUILD_FEATURE(":feature", lq.pv.guildId()),
                                                        exact: !0,
                                                        render: d0,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.FEATURE(":feature"),
                                                        exact: !0,
                                                        render: d0,
                                                        disableTrack: !0,
                                                    }),
                                                ],
                                            }),
                                            _ && (0, E.jsx)(nl, {}),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
var d5 = n(575486);
n(938796);
var d3 = n(665260),
    d4 = n(56562),
    d8 = n(77729),
    d7 = n(237774),
    d9 = n(885437),
    ce = n(973854),
    ct = n(862927),
    cn = n(815706),
    ci = n(134047),
    cr = n(626584),
    ca = n(181079),
    cl = n(668267),
    cs = n(379587),
    co = n(5180),
    cd = n(953384),
    cc = n(973522),
    cu = n(366853),
    c_ = n(136722),
    cA = n(808728),
    ch = n(698441),
    cE = n(960755),
    cp = n(222823),
    cm = n(380335),
    cI = n(211753),
    cg = n(41984),
    cC = n(833551),
    cf = n(515183),
    cT = n(871633),
    cN = n(446600),
    cS = n(760751),
    cL = n(232835),
    cO = n(543465),
    cy = n(619921),
    cb = n(256415),
    cv = n(474090),
    cR = n(705751);
async function cP(e) {
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
            voiceChannelGuildId: c,
        } = e,
        [u, _] = await Promise.all([
            (0, cf.E1)(t.pid),
            eT.Ay.canCollectExecutableFingerprintsForRunningGames()
                ? eJ.Ay.getExecutableFingerprintForProcess(t.pid)
                : Promise.resolve(null),
        ]),
        { gameName: A, gameId: h, exe: E, distributor: p, rawExePath: m } = (0, cc.wH)(t),
        I = r.enabledLegacy || r.enabledOOP,
        g = cI.x.legacyEnabled || cI.x.oopEnabled,
        C = r.source;
    ec.default.track(D.HAw.LAUNCH_GAME, {
        game: A,
        game_id: h,
        verified: null != n && (0, cc.PQ)(m, n?.executables),
        elevated: t.elevated,
        is_launcher: t?.isLauncher ?? !1,
        game_platform: D.yTV.DESKTOP,
        detection_method: i,
        distributor: p,
        is_overlay_enabled: g,
        is_overlay_game_enabled: I,
        is_overlay_game_source: C,
        fullscreen_type: null != u ? d4.aI[u] : d4.aI.UNKNOWN.toString(),
        hardware_display_count: (await d8.A?.hardware?.getDisplayCount?.()) ?? null,
        overlay_method: cg.Ue[a] ?? (__OVERLAY__ ? cg.Ue[cg.Ue.Hook] : null),
        activity_status_enabled: oA.tz.getSetting(),
        activity_status_shared_guilds: l,
        current_user_status: rV.A.getStatus(),
        game_detection_enabled: (0, eT.Xr)(t),
        executable_path: E,
        voice_channel_id: s,
        voice_channel_type: o,
        voice_channel_bitrate: d,
        voice_channel_guild_id: c,
        distributor_game_id: t.sku,
        hidden_by_distributor: t.hidden,
        game_metadata: (0, cT.MT)(t),
        executable_fingerprint: _ ?? t.executableFingerprint,
    }),
        null != E && eT.Ay.addExecutableTrackedByAnalytics(E);
}
async function cD(e) {
    let {
            runningNonGame: t,
            nonGameApplication: n,
            voiceChannelId: i,
            voiceChannelType: r,
            voiceChannelBitrate: a,
            voiceChannelGuildId: l,
        } = e,
        s = eT.Ay.canCollectExecutableFingerprintsForRunningGames()
            ? await eJ.Ay.getExecutableFingerprintForProcess(t.pid)
            : null;
    ec.default.track(D.HAw.LAUNCH_NON_GAME_APPLICATION, {
        name: n.name,
        application_id: n.id,
        application_type: cR.S7.NON_GAME_DETECTABLE,
        elevated: t.elevated,
        game_platform: D.yTV.DESKTOP,
        distributor: t.distributor,
        detection_method: "verified_non_game_application",
        current_user_status: rV.A.getStatus(),
        executable_path: (0, cc.Ic)(t.exePath),
        voice_channel_id: i,
        voice_channel_type: r,
        voice_channel_bitrate: a,
        voice_channel_guild_id: l,
        executable_fingerprint: s ?? t.executableFingerprint,
    });
}
class cx extends p.PureComponent {
    isMessageRequestsInitialized = !1;
    debouncedRobloxAnalytics = eU().debounce(cP, 5e3);
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
            selectedChannelId: c,
            selectedGuildId: u,
            connected: _,
        } = this.props;
        if (e.voiceChannelId !== t && null != e.voiceChannelId) {
            let t = eT.Ay.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                i = cN.A.getStageInstanceByChannel(e.voiceChannelId),
                r = ch.Ay.getActiveEventByChannel(e.voiceChannelId),
                a = e3.A.getLastRTCConnectionState();
            a?.channelId !== e.voiceChannelId && (a = null),
                ec.default.track(D.HAw.LEAVE_VOICE_CHANNEL, {
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
                    ...(0, tY.JK)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    ...a?.voiceStateAnalytics?.getStats(),
                    ...tI.A.getSelectedParticipantStats(e.voiceChannelId),
                });
        }
        if (e.voiceChannelId !== t && null != t) {
            let e = eT.Ay.getCurrentGameForAnalytics(),
                l = null != e ? e.name : "",
                s = cN.A.getStageInstanceByChannel(t),
                o = ch.Ay.getActiveEventByChannel(t);
            (0, tY.zV)(D.HAw.CHANNEL_OPENED, { ...(0, tY.qL)(t) }), (0, ce.A)({ channelId: t });
            let d = null,
                c = cb.default.getFocusedPID();
            null != c &&
                cC.default.getOverlayMethod(c) !== cg.Ue.Disabled &&
                (cb.default.isInstanceLocked()
                    ? (d = D.Xmn.OVERLAY_LOCKED_ACTIVATED)
                    : cb.default.isInstanceLocked() ||
                      (d = cb.default.isPinned(D.uss.TEXT) ? D.Xmn.OVERLAY_UNLOCKED_PINNED : D.Xmn.OVERLAY_UNLOCKED)),
                ec.default.track(D.HAw.JOIN_VOICE_CHANNEL, {
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
                    ...(0, tY.dL)(n, t),
                    ...(0, tY.JK)(n, t, a),
                });
        }
        let A =
                s?.distributor === e.runningGame?.distributor &&
                s?.sku === e.runningGame?.sku &&
                s?.name === e.runningGame?.name,
            h = null != e.runningGame && null != s && e.runningGame.isLauncher !== s.isLauncher;
        if (e.runningGame !== s && null != s && !s.isLauncher && (!A || h)) {
            let { gameId: e } = (0, cc.wH)(s),
                a = void 0 !== e ? cS.A.getDetectableGame(e) : null,
                l = eT.Ay.getOverrideForGame(s),
                d = rU.A.getGuildIds(),
                c = oA.JG.getSetting(),
                u = d.filter((e) => !c.includes(e)).slice(0, 200),
                _ = null;
            _ = null != l ? "custom_override" : null != a ? "verified_game" : "launcher";
            let A = cC.default.getTrackedGameByPid(s.pid),
                h = (0, eT.hw)(s),
                E = {
                    enabledOOP: A?.oopEnabled ?? h.enabledOOP,
                    enabledLegacy: A?.legacyEnabled ?? h.enabledLegacy,
                    overlayMethod: A?.overlayMethod ?? h.overlayMethod,
                    source: A?.source ?? h.source,
                    reason: "ChatAutoAnalytics",
                },
                p = cC.default.getOverlayMethod(s.pid) ?? E.overlayMethod;
            if (
                (setTimeout(() => {
                    (s.distributor === D.d3x.ROBLOX ? this.debouncedRobloxAnalytics : cP)({
                        runningGame: s,
                        game: a,
                        detectionMethod: _,
                        overlayStatus: E,
                        overlayMethod: p,
                        sharedGuildIds: u,
                        voiceChannelId: t,
                        voiceChannelType: i,
                        voiceChannelBitrate: r,
                        voiceChannelGuildId: n,
                    });
                }, 1e4),
                null != s.name && null != o && cS.A.shouldReport(s))
            ) {
                let e = s.name;
                rb.Ay.identifyGame(o, e)
                    .then((e) => rb.Ay.reportUnverifiedGame(e))
                    .catch((e) => new cr.A("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if (e.runningNonGame !== d && d?.id != null && e.runningNonGame?.id !== d.id) {
            let e = cd.A.getById(d.id);
            null != e &&
                cD({
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
                n = [l ? "screen" : null, a ? "camera" : null].filter(rt.Vq),
                i = null;
            l ? ((e = "screen"), (i = (0, cn.p)())) : a && (e = "camera"),
                ec.default.track(D.HAw.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                    enabled_inputs: n,
                    preview_enabled: oA.bm.getSetting(),
                    ...i,
                    ...this.getGameMetadata(),
                    ...(0, tY.QS)(t),
                });
        }
        if (_ && null != c && (!e.connected || c !== e.selectedChannelId || u !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = i7.A.getChannel(t),
                i = rU.A.getGuild(n?.getGuildId());
            if (null != t && null != n && null != i && i.publicUpdatesChannelId === t) {
                let e = cL.A.getMessages(t),
                    r = e
                        .toArray()
                        .reverse()
                        .find(
                            (e) =>
                                (0, d3.Lt)(e.flags, D.pr7.IS_CROSSPOST) &&
                                e.messageReference?.guild_id === "667560445975986187",
                        );
                ec.default.track(D.HAw.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: r?.id,
                    last_message_reference_message_id: r?.messageReference?.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, tY.dI)(n),
                    ...(0, tY.H$)(i.id),
                });
            }
            e.isTextInVoice &&
                !this.props.isTextInVoice &&
                ci.M.getConfig({ location: "ChatAutoAnalytics" }).collectAnalytics &&
                ec.default.track(D.HAw.TEXT_IN_VOICE_CLOSED, {
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
function cw() {
    let e,
        [t, n] = (0, C.yK)([ee.A], () => [ee.A.getVoiceChannelId(), ee.A.getChannelId()], []),
        i = (0, C.bG)([i7.A], () => i7.A.getChannel(n), [n]),
        r = (0, C.bG)([tI.A], () => i?.id != null && tI.A.getChatOpen(i.id), [i]),
        a = i?.nsfw,
        l = (0, C.bG)([i7.A], () => i7.A.getChannel(t), [t]),
        s = (0, C.bG)([et.A], () => et.A.getGuildId(), []),
        o = (0, C.bG)([rU.A], () => rU.A.getGuild(s), [s]),
        d = (0, C.bG)([i_.default], () => i_.default.getCurrentUser(), []),
        c = (0, C.bG)([l0.Ay], () => null != d && null != s && (l0.Ay.getMember(s, d.id)?.isPending ?? !1), [d, s]),
        u = (0, C.bG)([ac.Ay], () => ac.Ay.getState().section, []),
        _ = (0, C.bG)([cy.A], () => cy.A.getHomeLink(), []),
        A = (0, C.bG)([cu.A], () => cu.A.isConnected(), []),
        [h, m] = (0, C.yK)([eS.Ay], () => [eS.Ay.isVideoEnabled(), eS.Ay.isScreenSharing()], []),
        I = (0, C.bG)([rV.A], () => rV.A.getPrimaryActivity(), []),
        { currentGame: g, currentNonGame: f } = (0, C.cf)(
            [eT.Ay],
            () => ({
                currentGame: eT.Ay.getCurrentGameForAnalytics(),
                currentNonGame: eT.Ay.getCurrentNonGameForAnalytics(),
            }),
            [],
        ),
        T =
            0 === (e = (0, C.bG)([cA.Ay], () => cA.Ay.getChannels(s)[cA.I6] ?? [], [s])).length
                ? 0
                : e.filter((e) => {
                      let { channel: t } = e;
                      return rk.A.can(c_.kg(D.xBc.SEND_MESSAGES, D.xBc.VIEW_CHANNEL), t);
                  }).length,
        N = (0, C.bG)([cm.A], () => cm.A.getMessageRequestsCount(), []),
        S = {
            selectedChannelId: n,
            isNSFWChannel: a,
            selectedGuildId: s,
            friendsTabSection: u,
            homeLink: _,
            connected: A,
            videoEnabled: h,
            isScreenSharing: m,
            voiceChannelId: l?.id,
            voiceChannelGuildId: l?.getGuildId(),
            voiceChannelType: l?.type,
            voiceChannelBitrate: l?.bitrate,
            runningGame: g,
            runningGamePid: null != g ? g.pid : null,
            runningNonGame: f,
            gamePlatform: (0, r0.A)(I),
            gameName: null != I ? I.name : null,
            gameId: null != I ? I.application_id : null,
            gameExeName: null != g ? g.exeName : null,
            hasPreviewEnabled: o?.features.has(D.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: c,
            postableChannelCount: T,
            isTextInVoice: r,
            numMessageRequests: N,
        };
    return (
        !(function (e) {
            let t = p.useRef(e);
            p.useEffect(() => {
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
            p.useEffect(() => {
                n &&
                    null != l &&
                    ((0, tY.zV)(D.HAw.CHANNEL_OPENED, { ...(0, d9.p)(l), ...(0, tY.qL)(l), selected_guild_id: s }),
                    (0, ce.A)({ channelId: l }),
                    t.current.isTextInVoice &&
                        (0, tY.zV)(D.HAw.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: t.current.isNSFWChannel }));
            }, [n, l, s]),
                p.useEffect(() => {
                    n &&
                        null == s &&
                        r === D.BVt.FRIENDS &&
                        (function (e) {
                            let { tab_opened: t, source: n } = e,
                                i = (0, ct.A)();
                            ec.default.track(D.HAw.FRIENDS_LIST_VIEWED, { tab_opened: t, source: n, ...i }),
                                (0, d7.k)(D.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
                                    tab_opened: t ?? "tabless",
                                    num_friends: i.num_friends ?? 0,
                                    now_playing_visible: i.now_playing_visible ?? !1,
                                    now_playing_num_cards: i.now_playing_num_cards ?? 0,
                                });
                        })({ tab_opened: i });
                }, [n, i, r, s]),
                p.useEffect(() => {
                    if (n && null != s) {
                        let e = a ? { is_pending: a, preview_enabled: t.current.hasPreviewEnabled } : {},
                            n = rU.A.getGuild(et.A.getGuildId()),
                            i = (function (e) {
                                let { guildChannels: t } = cE.A.getGuildWithoutChangingGuildActionRows(e),
                                    n = new Set(),
                                    i = [];
                                return (
                                    t.forEachShownChannel(
                                        (e) => {
                                            !n.has(e.id) &&
                                                cp.Ay.hasUnread(e.id) &&
                                                !D.kvI.GUILD_VOCAL.has(e.type) &&
                                                i.push(e.id),
                                                n.add(e.id);
                                        },
                                        { ignoreRecents: !0 },
                                    ),
                                    i
                                );
                            })(s),
                            r = {
                                ...e,
                                postable_channels: t.current.postableChannelCount,
                                premium_progress_bar_enabled: n?.premiumProgressBarEnabled ?? !1,
                                viewing_all_channels: !cO.Ay.isOptInEnabled(s),
                                num_recent_channels: cE.A.recentsChannelCount(s),
                                num_unread_channels: i.length,
                                unread_channel_ids: i,
                            };
                        if (
                            ((0, tY.zV)(D.HAw.GUILD_VIEWED, r),
                            (0, d7.k)(D.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: s }),
                            (0, co.ai)(s))
                        ) {
                            let e = cs.o.getConfig({ location: "ChatAutoAnalytics" }).enabled,
                                t = cv.Ay.isPremiumExactly(i_.default.getCurrentUser(), a4.PremiumTypes.TIER_2),
                                n = (0, cl.Kg)();
                            (0, cl.U5)(n, ca.A.getFavoritesCount(), e, t);
                        }
                    }
                }, [n, s, a]);
            let o = p.useRef(!1);
            p.useEffect(() => {
                n &&
                    null == s &&
                    r === D.BVt.MESSAGE_REQUESTS &&
                    !o.current &&
                    ((o.current = !0),
                    ec.default.track(D.HAw.MESSAGE_REQUESTS_INITIALIZED, {
                        num_message_requests: t.current.numMessageRequests,
                    }));
            }, [n, s, r]);
        })(S),
        (0, E.jsx)(cx, { ...S })
    );
}
var cM = n(844222),
    cU = n(398590),
    cG = n(390435),
    cj = n(361158),
    ck = n(783775);
let cV = (0, tu.Fe)({
        createPromise: () => Promise.resolve().then(n.bind(n, 944771)),
        webpackId: 944771,
        name: "ComponentPlayground",
    }),
    cF = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("88342"),
                n.e("8018"),
                n.e("28136"),
                n.e("22547"),
                n.e("77602"),
                n.e("68587"),
                n.e("15373"),
                n.e("46291"),
                n.e("78888"),
            ]).then(n.bind(n, 608087)),
        webpackId: 608087,
        name: "ChannelSettings",
    }),
    cH = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("34983"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("62597"),
                n.e("72822"),
                n.e("52803"),
                n.e("29890"),
                n.e("37440"),
                n.e("34735"),
                n.e("54350"),
                n.e("59275"),
            ]).then(n.bind(n, 507013)),
        webpackId: 507013,
        name: "CollectiblesShop",
    }),
    cB = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("49681"),
                n.e("96382"),
                n.e("20044"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("28136"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("49862"),
                n.e("80093"),
                n.e("22547"),
                n.e("60989"),
                n.e("82486"),
                n.e("77602"),
                n.e("68587"),
                n.e("86546"),
                n.e("15373"),
                n.e("42749"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("46411"),
                n.e("25961"),
                n.e("44935"),
                n.e("13848"),
                n.e("62890"),
                n.e("46291"),
                n.e("41068"),
                n.e("32347"),
                n.e("8458"),
                n.e("15666"),
                n.e("11810"),
                n.e("95765"),
                n.e("31742"),
                n.e("49036"),
                n.e("98700"),
            ]).then(n.bind(n, 422559)),
        webpackId: 422559,
        name: "GuildSettings",
    }),
    cY = {
        [D.zgK.CHANNEL_SETTINGS]: () => (0, E.jsx)(cF, {}),
        [D.zgK.GUILD_SETTINGS]: () => (0, E.jsx)(cB, {}),
        [D.zgK.COLLECTIBLES_SHOP]: () => (0, E.jsx)(cH, {}),
        [D.zgK.COMPONENT_PLAYGROUND]: () => (0, E.jsx)(cV, {}),
    },
    c$ = "SHOWN",
    cz = "HIDDEN",
    cW = { friction: 10, tension: 100 };
function cK() {
    return p.useEffect(() => (eH.A.enable(), eH.A.enableTemp(cG.w), () => eH.A.disableTemp()), []), null;
}
class cq extends p.PureComponent {
    containerRef = p.createRef();
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.mode ? { animating: !0, mode: e.mode } : null;
    }
    static defaultProps = { baseLayer: !1 };
    static contextType = cM.C;
    constructor(e) {
        super(e);
        let t = 1,
            n = 1;
        e.mode === cz && ((t = 0.93), (n = 0)),
            (this.state = { animating: !1, scale: new a9.A.Value(t), opacity: new a9.A.Value(n), mode: e.mode });
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        if (t !== n) {
            if (t === c$ && n === cz) return this.animateIn();
            if (t === cz && n === c$) return this.animateUnder();
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
        C.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        a9.A.parallel([a9.A.spring(t, { toValue: 1, ...cW }), a9.A.spring(n, { toValue: 1, ...cW })]).start(() =>
            this.animateComplete(e),
        );
    }
    animateOut(e) {
        C.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        a9.A.parallel([a9.A.spring(t, { toValue: 0, ...cW }), a9.A.spring(n, { toValue: 1.1, ...cW })]).start(() => {
            e(), tJ._.dispatch(D.jej.LAYER_POP_COMPLETE);
        });
    }
    animateUnder() {
        C.Ay.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        a9.A.parallel([a9.A.spring(e, { toValue: 0, ...cW }), a9.A.spring(t, { toValue: 0.93, ...cW })]).start(() =>
            this.animateComplete(),
        );
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let { animating: e } = this.state,
            { name: t, mode: n, children: i, baseLayer: r, ...a } = this.props,
            l = n === cz,
            s = e || l ? this.getAnimatedStyle() : null,
            o = !l && !r,
            d = (0, E.jsx)(a9.A.div, {
                ref: (e) => (this.containerRef.current = null != e ? e.componentRef : void 0),
                "data-layer": t ?? "base",
                "aria-hidden": l,
                "aria-modal": o,
                "aria-label": o
                    ? (function (e) {
                          switch (e) {
                              case D.zgK.CHANNEL_SETTINGS:
                                  return G.intl.string(G.t.XPDhcc);
                              case D.zgK.COLLECTIBLES_SHOP:
                                  return G.intl.string(G.t.pWG4ze);
                              case D.zgK.COMPONENT_PLAYGROUND:
                                  return "Component Playground";
                              default:
                                  return "";
                          }
                      })(t)
                    : void 0,
                role: o ? "dialog" : void 0,
                className: tn()(ck.qd, { [ck.n3]: r, [ck.bW]: e, "stop-animations": n === cz }),
                style: s,
                ...a,
                children: i,
            });
        return r ? d : (0, E.jsx)(sL.O, { containerRef: this.containerRef, children: d });
    }
    getAnimatedStyle() {
        let { baseLayer: e } = this.props,
            { opacity: t, scale: n } = this.state,
            { reducedMotion: i } = this.context;
        return { opacity: t, transform: i.enabled || e ? void 0 : [{ scale: n }, { translateZ: 0 }] };
    }
}
class cX extends p.PureComponent {
    componentDidMount() {
        tJ._.subscribe(D.jej.LAYER_POP_ESCAPE_KEY, cU.jH);
    }
    componentWillUnmount() {
        tJ._.unsubscribe(D.jej.LAYER_POP_ESCAPE_KEY, cU.jH);
    }
    renderLayers() {
        let { children: e, layers: t, hasFullScreenLayer: n } = this.props,
            { length: i } = t,
            r = [];
        return (
            r.push((0, E.jsx)(cq, { mode: 0 !== i || n ? cz : c$, baseLayer: !0, children: e }, "layer-base")),
            t.forEach((e, t) => r.push(this.renderComponent(e, t, i))),
            r
        );
    }
    renderComponent(e, t, n) {
        let i;
        return (
            (i = "string" == typeof e ? cY[e]() : (0, E.jsx)(e, {})),
            (0, E.jsxs)(
                cq,
                {
                    name: "string" == typeof e ? e : void 0,
                    mode: t === n - 1 ? c$ : cz,
                    children: [(0, E.jsx)(cK, {}), i],
                },
                `layer-${t}`,
            )
        );
    }
    renderArtisanalHack() {
        return (0, E.jsx)(ts.N, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, E.jsx)("div", { className: tn()(ck.bg, e) }),
        });
    }
    render() {
        return (0, E.jsxs)(E.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, E.jsx)(lN.F, {
                    component: "div",
                    className: tn()(ck.ZF, this.props.className),
                    children: this.renderLayers(),
                }),
            ],
        });
    }
}
function cZ(e) {
    let t = (0, lZ.NC)(),
        n = (0, C.bG)([t5.A], () => t5.A.getLayers()),
        i = (0, cj.xr)(
            (e) => e.fullScreenLayers.length > 0 && !e.fullScreenLayers.some((e) => e.options.showAppUnderLayer),
        );
    return (0, E.jsx)(cX, { ...e, sidebarTheme: t, layers: n, hasFullScreenLayer: i });
}
var cQ = n(107715);
let cJ = p.memo(function () {
    let e,
        t,
        n = (0, eV.A)(),
        i = p.useRef(null),
        r = p.useCallback((e) => {
            let { duration: t, intensity: n } = e;
            if (H.A.useReducedMotion || !eL.A.isFocused()) return;
            let { current: r } = i;
            ew()(null != r, "Shakeable is shaken when not mounted"), r.shake(t, n);
        }, []);
    return (
        p.useEffect(() => (eH.A.setLayout(eF.Ay), eH.A.enable(), () => eH.A.disable()), []),
        p.useEffect(
            () => (
                tJ._.subscribe(D.jej.SHAKE_APP, r),
                () => {
                    tJ._.unsubscribe(D.jej.SHAKE_APP, r);
                }
            ),
            [r],
        ),
        (e = (0, C.bG)([eQ.A], () => eQ.A.hasIncomingCalls())),
        (t = (0, C.bG)([eq.default, eZ.A, eX.A, eW.A], () => {
            let e = eq.default.getTotalMentionCount(),
                t = (0, eK.dH)([eZ.A, eW.A]),
                n = eq.default.hasAnyUnread(),
                i = eX.A.getDisableUnreadBadge(),
                r = e + t;
            return 0 === r && n && !i && (r = -1), r;
        })),
        p.useEffect(() => {
            if (!e) return;
            let t = eJ.Ay.bounceDock("critical"),
                n = (0, e0.iA)({ messages: [G.intl.string(G.t["fk1/bX"])], count: 50 });
            return () => {
                t?.(), n();
            };
        }, [e]),
        p.useEffect(() => {
            e2(t);
        }, [t]),
        p.useEffect(() => () => e2(0), []),
        (0, E.jsxs)(eG, {
            ref: i,
            className: cQ.y,
            children: [
                (0, E.jsx)(cZ, { className: cQ.Z, children: (0, E.jsx)(d6, {}) }),
                (0, E.jsx)(te, {}),
                (0, E.jsx)(ek.A, {}),
                (0, E.jsx)(cw, {}),
                (0, E.jsx)(d5.A, {}),
                !n && (0, E.jsx)(ej.S, {}),
            ],
        })
    );
});
var c0 = n(148803),
    c1 = n(154323),
    c2 = n(536194),
    c6 = n(693477),
    c5 = n(892035);
let c3 = "CollectiblesMarketingManager",
    c4 = "CollectiblesAnnouncementModal",
    c8 = new cr.A(c3);
class c7 extends X.A {
    didOpenAnnouncementModal = !1;
    _initialize() {
        q.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen),
            q.h.subscribe("LOGOUT", this.handleLogout);
    }
    _terminate() {
        q.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen),
            q.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    handleLogout = () => {
        this.didOpenAnnouncementModal = !1;
    };
    handlePostConnectionOpen = () => {
        let e = c1.A.get("shop_include_unpublished");
        (0, c6.LX)({ release: e ? c0.P.BETA : c0.P.PROD }), this.maybeOpenAnnouncementModal();
    };
    maybeOpenAnnouncementModal = async () => {
        if (this.didOpenAnnouncementModal || c2.P.isDisallowPopupsSet() || (0, f.hasModalOpen)(c4)) return;
        let e = i_.default.getCurrentUser();
        if (
            !(null == e || !e.verified || (0, iX.k8)(nq.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT)) &&
            (0, c5.ix)(c3).isAnnouncementEligible
        ) {
            this.didOpenAnnouncementModal = !0;
            try {
                await (0, f.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("13328").then(n.bind(n, 24851));
                        return (t) => (0, E.jsx)(e, { ...t });
                    },
                    { modalKey: c4 },
                );
            } catch (e) {
                (this.didOpenAnnouncementModal = !1), c8.error("Failed to open announcement modal", e);
            }
        }
    };
}
let c9 = new c7();
var ue = n(347481),
    ut = n(617617),
    un = n(792205);
let ui = { ignoredDevices: {} },
    ur = ui,
    ua = !1,
    ul = {},
    us = {},
    uo = {},
    ud = { id: null, justChanged: !1 },
    uc = { id: null, justChanged: !1 },
    uu = /\((.+)\)\s*$/;
function u_(e) {
    if ((0, U.getPlatform)() === U.PlatformTypes.WINDOWS) {
        let t = e.name.match(uu);
        if (null != t) return t[1];
    }
    return e.name;
}
function uA(e, t, n) {
    return null == e || e.displayName !== t
        ? { displayName: t, type: n }
        : (e.type === un.E.INPUT && n === un.E.OUTPUT) || (e.type === un.E.OUTPUT && n === un.E.INPUT)
          ? { displayName: t, type: un.E.INPUT_AND_OUTPUT }
          : e;
}
class uh extends C.Ay.DeviceSettingsStore {
    static displayName = "ConnectedDeviceStore";
    static persistKey = "ConnectedDeviceStore";
    static migrations = [(e) => (null == e.ignoredDevices ? { ...e, ignoredDevices: {} } : e)];
    initialize(e) {
        this.waitFor(eS.Ay, ut.A), (ur = e ?? ui);
    }
    getUserAgnosticState() {
        return ur;
    }
    get initialized() {
        return ua;
    }
    get lastDeviceConnected() {
        return uo;
    }
    get inputDevices() {
        return ul;
    }
    get lastInputSystemDevice() {
        return ud;
    }
    get outputDevices() {
        return us;
    }
    get lastOutputSystemDevice() {
        return uc;
    }
}
let uE = new uh(q.h, {
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n } = e,
                i = {};
            (ud.justChanged = !1),
                t.forEach((e) => {
                    if (((i[u_(e)] = e.id), e.id === eO.dx)) {
                        let t = e.originalId ?? e.originalName;
                        t !== ud.id && (ud.justChanged = !0), (ud.id = t);
                    }
                });
            let r = {};
            if (
                ((uc.justChanged = !1),
                n.forEach((e) => {
                    if (((r[u_(e)] = e.id), e.id === eO.dx)) {
                        let t = e.originalId ?? e.originalName;
                        t !== uc.id && (uc.justChanged = !0), (uc.id = t);
                    }
                }),
                !ua)
            ) {
                (ul = i), (us = r), (ua = !0);
                return;
            }
            let a = Object.keys(ul),
                l = Object.keys(i),
                s = Object.keys(us),
                o = Object.keys(r),
                d = eU().difference(a, l),
                c = eU().difference(s, o);
            return (
                d.length > 0 || c.length > 0
                    ? (uo = {})
                    : (eU()
                          .difference(l, a)
                          .forEach((e) => {
                              uo[e] = uA(uo[e], e, un.E.INPUT);
                          }),
                      eU()
                          .difference(o, s)
                          .forEach((e) => {
                              uo[e] = uA(uo[e], e, un.E.OUTPUT);
                          })),
                !(eU().isEqual(a, l) && eU().isEqual(s, o)) && ((ul = i), (us = r), !0)
            );
        },
        CONNECTED_DEVICE_SWITCH: function (e) {
            let { displayName: t, connectedDevicePreference: n, location: i } = e;
            if (n === un.f.INPUT || n === un.f.INPUT_AND_OUTPUT) {
                let e = ul[t];
                null != e && q.h.wait(() => ef.A.setInputDevice(e, { location: i }));
            }
            if (n === un.f.OUTPUT || n === un.f.INPUT_AND_OUTPUT) {
                let e = us[t];
                q.h.wait(() => ef.A.setOutputDevice(e, { location: i }));
            }
            delete uo[t];
        },
        CONNECTED_DEVICE_DONT_SWITCH: function (e) {
            let { displayName: t } = e;
            delete uo[t];
        },
        CONNECTED_DEVICE_IGNORE: function (e) {
            let { displayName: t } = e;
            (ur.ignoredDevices[t] = !0), delete uo[t];
        },
        CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
            (uo = {}), (ur.neverShowModal = !0);
        },
    }),
    up = new Set(["DisplayPort"]),
    um = "connected-device-modal";
function uI() {
    let e;
    if ((0, f.hasModalOpen)(um)) return;
    let t = eS.Ay.getInputDeviceId(),
        i = eS.Ay.getOutputDeviceId();
    if (uE.getState().neverShowModal || eU().isEmpty(uE.lastDeviceConnected)) return;
    let r = u_(eS.Ay.getInputDevices()[t]),
        a = u_(eS.Ay.getOutputDevices()[i]);
    if (eU().some(uE.lastDeviceConnected, (e) => up.has(e.displayName) || e.displayName === r || e.displayName === a))
        return;
    let l = eU().some(
        uE.lastDeviceConnected,
        (e) => ue.A.isCertified(uE.inputDevices[e.displayName]) || ue.A.isCertified(uE.outputDevices[e.displayName]),
    );
    if (
        ((t === eO.dx && uE.lastInputSystemDevice.justChanged) ||
            (i === eO.dx && uE.lastOutputSystemDevice.justChanged)) &&
        !l
    )
        return;
    let s = eU().first(Object.keys(uE.lastDeviceConnected)),
        o = null != s && "" !== s ? uE.lastDeviceConnected[s] : null;
    null == o ||
        uE.getState().ignoredDevices[o.displayName] ||
        (uE.initialized &&
            null != s &&
            (ue.A.isCertified(uE.inputDevices[s])
                ? (e = ue.A.getCertifiedDevice(uE.inputDevices[s]))
                : ue.A.isCertified(uE.outputDevices[s]) && (e = ue.A.getCertifiedDevice(uE.outputDevices[s]))),
        (0, f.openModalLazy)(
            async () => {
                let { default: t } = await n.e("65573").then(n.bind(n, 442468));
                return (n) => {
                    let { transitionState: i, onClose: r } = n;
                    return (0, E.jsx)(t, { device: o, certifiedDeviceMetadata: e, transitionState: i, onClose: r });
                };
            },
            { modalKey: um },
        ));
}
let ug = {
        init() {
            uE.addChangeListener(uI);
        },
    },
    uC = "CONNECTIONS_GRID_MODAL_KEY";
class uf extends X.A {
    _initialize() {
        q.h.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow),
            q.h.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide);
    }
    _terminate() {
        q.h.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow),
            q.h.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide);
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
        (0, f.hasModalOpen)(uC) ||
            (0, f.openModalLazy)(async () => {
                let { default: e } = await n.e("95198").then(n.bind(n, 58829));
                return (n) =>
                    (0, E.jsx)(e, {
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
        (0, f.closeModal)(uC);
    }
}
let uT = new uf();
var uN = n(480900),
    uS = n(293260);
class uL extends X.A {
    _initialize() {
        q.h.subscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow);
    }
    _terminate() {
        q.h.unsubscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow);
    }
    handleShow(e) {
        let { role: t, guildId: n } = e;
        (0, f.hasModalOpen)("GUILD_ROLE_CONNECTIONS_MODAL_KEY") ||
            (null != t && t.tags?.guild_connections === null ? (0, uN.b)(t, n) : (0, uS.c0)(n));
    }
}
let uO = new uL();
var uy = n(793943),
    ub = n(746793),
    uv = n(272613);
class uR extends X.A {
    _initialize() {
        q.h.subscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            q.h.subscribe("BILLING_STANDALONE_INITIALIZED", this._maybeStartDevSession),
            q.h.subscribe("LOGOUT", this._maybeStopDevSession);
    }
    _terminate() {
        q.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            q.h.unsubscribe("BILLING_STANDALONE_INITIALIZED", this._maybeStartDevSession),
            q.h.unsubscribe("LOGOUT", this._maybeStopDevSession);
    }
    _maybeStartDevSession() {
        if (null == window.DiscordDevSession || !0 !== window.__METICULOUS_ENABLED) return;
        let e = "production" === window.GLOBAL_ENV.PROJECT_ENV,
            t = i_.default.getCurrentUser();
        t?.email == null ||
            (e && t.isStaff()) ||
            (t.username.startsWith("mtcls") || !e ? window.DiscordDevSession.start() : window.DiscordDevSession.stop());
    }
    _maybeStopDevSession() {
        null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop();
    }
}
let uP = new uR();
var uD = n(963169),
    ux = n(422258);
function uw(e) {
    let {
        channel: { id: t },
    } = e;
    (0, ux.i_)(t, { trackAnalytics: !1 });
}
class uM extends X.A {
    _initialize() {
        q.h.subscribe("CHANNEL_DELETE", uw);
    }
    _terminate() {
        q.h.unsubscribe("CHANNEL_DELETE", uw);
    }
}
let uU = new uM();
var uG = n(367727),
    uj = n(853742);
class uk extends X.A {
    _initialize() {
        q.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect);
    }
    _terminate() {
        q.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect);
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
            ((t = rU.A.getGuild(s)),
            (i = !!t?.features.has(D.GuildFeatures.COMMUNITY)),
            (r = rk.A.can(D.xBc.MANAGE_CHANNELS, t)),
            (a = (0, iX.k8)(nq.M.FORUM_CHANNEL_UPSELL_MODAL)),
            (l = rM.A.getMemberCount(s) ?? 0),
            !i || !r || a || !(l >= 200))
        )
            return;
        (0, uj.zd)(), (0, uG.Vh)(nq.M.FORUM_CHANNEL_UPSELL_MODAL);
        let o = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT.i.DISMISS;
            (0, iX.Dr)(nq.M.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: e });
        };
        (0, f.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("90052"), n.e("43051")]).then(n.bind(n, 653682));
                return (t) =>
                    (0, E.jsx)(e, {
                        ...t,
                        onClose: (e) => {
                            o(e), t.onClose();
                        },
                        guildId: s,
                        shouldUpsellCreation: !0,
                    });
            },
            {
                onCloseCallback: () => (0, iX.Dr)(nq.M.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: tT.i.DISMISS }),
                onCloseRequest: D.FXj,
            },
        );
    }
}
let uV = new uk();
var uF = n(208207);
class uH extends X.A {
    _initialize() {
        q.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        q.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen = () => {
        let e = eW.A.getGameRelationships(),
            t = new Set();
        e.values().forEach((e) => {
            e.type === D.eA$.PENDING_INCOMING && t.add(e.applicationId);
        }),
            iY.Ay.fetchApplications(Array.from(t));
    };
    destroy() {
        q.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
}
let uB = new uH(),
    uY = {};
function u$(e) {
    let { name: t, hash: n, missingData: i } = e;
    for (let e of (cS.A.markGameReported(t), i))
        if ("icon" === e) {
            let e = uY[t];
            null != e && rb.Ay.uploadIcon(t, n, e);
            return;
        } else new cr.A("GameStoreIconManager").log(`Could not find missing data key: ${e}`);
}
function uz(e) {
    let { gameName: t, icon: n } = e;
    uY[t] = n;
}
let uW = {
    initialize() {
        q.h.subscribe("UNVERIFIED_GAME_UPDATE", u$), q.h.subscribe("GAME_ICON_UPDATE", uz);
    },
};
var uK = n(738533);
function uq(e) {
    let t,
        n,
        { gameId: i } = e;
    (t = rD.A.launchableGames[i]),
        (null != (n = i$.A.getApplication(i)) ? uK.A.isLaunchable(n) : uK.A.isGameLaunchable(i)).then((e) => {
            e !== t && q.h.dispatch({ type: "GAME_LAUNCHABLE_UPDATE", gameId: i, isLaunchable: e });
        });
}
let uX = {
    initialize() {
        q.h.subscribe("CHECK_LAUNCHABLE_GAME", uq);
    },
};
var uZ = n(147964);
let uQ = {
    init() {
        rG.A.whenInitialized(() => {
            null != uZ.A.testModeApplicationId && (0, y.q1)(uZ.A.testModeApplicationId, uZ.A.testModeOriginURL);
        });
    },
};
var uJ = n(92077);
function u0() {
    if (!(0, rY.S)()) return;
    let e = P.default.getToken(),
        t = P.default.getId();
    if (null == e) throw Error("missing user token");
    uJ.Ts(e, t);
}
function u1() {
    uJ.zr();
}
let u2 = {
    init() {
        q.h.subscribe("CONNECTION_OPEN", u0), q.h.subscribe("LOGOUT", u1);
    },
};
var u6 = n(507263),
    u5 = n(376728),
    u3 = n(970163);
async function u4(e) {
    let { code: t } = e,
        i = (await (0, u3.A)(t)).invite;
    if (null == i || null == i.guild) return;
    let r = i.guild.id,
        a = l0.Ay.getMember(r, P.default.getId()),
        l = !1;
    if (null != a && null != i.roles && i.roles.length > 0) {
        let e = new Set(a.roles ?? []);
        l = i.roles.some((t) => !e.has(t.id));
    }
    if (null == a || l) return void q.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: i, code: t, context: D.BRT.APP });
    let { default: s } = await Promise.resolve().then(n.bind(n, 608401));
    await s({ guildId: r }), u5.Ay.transitionToInvite(i, void 0, !0);
}
var u8 = n(997509),
    u7 = n(268313),
    u9 = n(567249),
    _e = n(998740);
function _t(e) {
    return `haven:${e}`;
}
function _n() {
    let e = i;
    if (null == e) return !1;
    let t = _t(e);
    if (!t3.A.isOpen(t)) return !1;
    let n = t3.A.pipHavenWindow;
    if (null == n || n.id !== t) return (i = null), !1;
    q.h.wait(() => tQ.VN(t)), (i = null);
}
function _i() {
    return t5.A.hasLayers();
}
function _r() {
    let e,
        t,
        n = e3.A.getChannelId(),
        r = null != n ? i7.A.getChannel(n) : null;
    if (
        ((e = e3.A.getChannelId()),
        (t = ee.A.getChannelId()),
        null == e || !_e.A.isUserConnected(e) || e === t || u9.A.getWindowOpen(D.MLl.CHANNEL_CALL_POPOUT) || 0)
    )
        return _n();
    if (null != r && _e.A.isUserConnected(r.id)) {
        if (i !== r.id) {
            let e = _t(r.id);
            if (t3.A.isOpen(e)) return !1;
            if (null != i) {
                let e = i;
                q.h.wait(() => tQ.VN(e));
            }
            return (
                q.h.wait(() => {
                    tQ.ho(e, D.o1q.HAVEN, { channel: r }), _i() && tQ.jD(e);
                }),
                (i = r.id),
                !0
            );
        }
        return !1;
    }
    return _n();
}
function _a() {
    if (_i()) {
        let e = void 0 ?? i;
        if (null == e) return;
        let t = _t(e);
        t3.A.isOpen(t) && q.h.wait(() => tQ.jD(t));
        return;
    }
    let e = void 0 ?? i;
    if (null == e) return;
    let t = _t(e);
    t3.A.isOpen(t) && q.h.wait(() => tQ.WU(t));
}
class _l extends X.A {
    _initialize() {
        ee.A.addChangeListener(_r),
            et.A.addChangeListener(_r),
            e3.A.addChangeListener(_r),
            rF.A.addChangeListener(_r),
            t5.A.addChangeListener(_a),
            _e.A.addChangeListener(_r),
            u9.A.addChangeListener(_r);
    }
    _terminate() {
        ee.A.removeChangeListener(_r),
            et.A.removeChangeListener(_r),
            e3.A.removeChangeListener(_r),
            rF.A.removeChangeListener(_r),
            t5.A.removeChangeListener(_a),
            _e.A.removeChangeListener(_r),
            u9.A.removeChangeListener(_r);
    }
}
let _s = new _l(),
    _o = {
        init() {
            q.h.subscribe("VOICE_CHANNEL_SELECT", (e) => {
                let { channelId: t } = e;
                null == t && s1.sF(oQ._.VOICE_PANEL_INTRODUCTION);
            });
        },
    };
var _d = n(4106),
    _c = n(875448);
let _u = null;
class __ extends X.A {
    _initialize() {
        q.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        q.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        (0, _c.HF)("ICYMIManager") &&
            (!(function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                _d.A.fetchDehydrated({ isInitialLoad: t }),
                    null != _u && clearTimeout(_u),
                    (_u = setTimeout(() => e(), 15 * eu.A.Millis.MINUTE));
            })(!0),
            _d.A.getGuildChannelScores(),
            _d.A.getRecommendedGuilds());
    }
}
let _A = new __();
var _h = n(684013),
    _E = n(55619),
    _p = n(734066),
    _m = n(572164),
    _I = n(399925),
    _g = n(652896),
    _C = n(299855),
    _f = n.n(_C),
    _T = n(157257),
    _N = n(997630),
    _S = n(905552),
    _L = n(325278),
    _O = n(140175),
    _y = n(528772),
    _b = n(944775),
    _v = n(351906),
    _R = n(532624),
    _P = n(773371),
    _D = n(427603);
let _x = new Map();
function _w(e, t, n, i) {
    if (!e3.A.isConnected()) return;
    let r = i.context ?? eO.x.DEFAULT,
        a = _x.get(r);
    null == a && ((a = { held: new Set(), priorityHeld: new Set() }), _x.set(r, a)),
        n || (e ? a.held.add(i.id) : a.held.delete(i.id)),
        t && (e ? a.priorityHeld.add(i.id) : a.priorityHeld.delete(i.id));
    let l = a.held.size > 0,
        s = a.priorityHeld.size > 0;
    (0, _O.N)(l, s);
}
let _M = {
    [D.hCu.TOGGLE_PRIORITY_SPEAKER]: { onTrigger() {}, keyEvents: {} },
    [D.hCu.UNASSIGNED]: { onTrigger() {}, keyEvents: {} },
    [D.hCu.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            eS.Ay.getMode(t.context) === D.TBI.PUSH_TO_TALK &&
                ((_M[D.hCu.PUSH_TO_TALK].isPressed = e), _w(e, !1, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [D.hCu.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e, t) {
            eS.Ay.getMode() === D.TBI.PUSH_TO_TALK &&
                ((_M[D.hCu.PUSH_TO_TALK_PRIORITY].isPressed = e), _w(e, !0, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [D.hCu.VAD_PRIORITY]: {
        onTrigger(e, t) {
            eS.Ay.getMode() === D.TBI.VOICE_ACTIVITY && ((_M[D.hCu.VAD_PRIORITY].isPressed = e), _w(e, !0, !0, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [D.hCu.PUSH_TO_MUTE]: {
        onTrigger(e) {
            eS.Ay.getMode() === D.TBI.VOICE_ACTIVITY &&
                ((_M[D.hCu.PUSH_TO_MUTE].isPressed = e), ef.A.setTemporarySelfMute(e));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [D.hCu.TOGGLE_MUTE]: {
        onTrigger: () => ef.A.toggleSelfMute({ usedKeybind: !0, location: "Custom Keybind" }),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.TOGGLE_DEAFEN]: {
        onTrigger: () => ef.A.toggleSelfDeaf({ usedKeybind: !0, location: "Custom Keybind" }),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.TOGGLE_CAMERA]: {
        onTrigger: () =>
            (function () {
                let e = eS.Ay.isVideoEnabled(),
                    t = Object.values(eS.Ay.getVideoDevices())[0],
                    n = t?.disabled ?? !0,
                    i = eS.Ay.supportsInApp(eO.O5.VIDEO) && eS.Ay.supportsInApp(eO.O5.DESKTOP_CAPTURE),
                    r = i7.A.getChannel(e3.A.getChannelId()),
                    a = i_.default.getCurrentUser()?.id;
                if (null == r || null == a) return;
                let { reachedLimit: l } = (0, oE.M)(r);
                if (!l) {
                    if (r.isGuildStageVoice()) {
                        let e = ol.A.getMutableParticipants(r.id, os.ip.SPEAKER),
                            t = e?.find((e) => {
                                let { user: t } = e;
                                return t.id === a;
                            });
                        if (!(0, oo.Bw)(r.guild_id) || !i || null == t || t.voiceState.suppress) return;
                    }
                    return (
                        e
                            ? ef.A.setVideoEnabled(!1)
                            : !1 === n
                              ? (0, of.A)(
                                    () => {
                                        ef.A.setVideoEnabled(!0);
                                    },
                                    D.BRT.APP,
                                    !0,
                                )
                              : (0, oI.A)(),
                        !1
                    );
                }
            })(),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = eS.Ay.getMode() === D.TBI.PUSH_TO_TALK ? D.TBI.VOICE_ACTIVITY : D.TBI.PUSH_TO_TALK;
            ef.A.setMode(e);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.TOGGLE_OVERLAY]: { onTrigger() {}, keyEvents: { keyup: !0, keydown: !1 } },
    [D.hCu.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger(e, t) {
            if (!(0, _R.DV)(t.shortcut)) return;
            let n = (0, _D.A)();
            null != n && _h.A.setInputLocked(!cb.default.isLocked(n), n);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = _P.default.getFocusedPID(),
                t = null != e;
            null != e &&
                t &&
                cb.default.isPinned(D.uss.TEXT) &&
                cb.default.isLocked(e) &&
                _P.default.isReady(e) &&
                _h.A.activateRegion(D.ajI.TEXT_WIDGET);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = oN.A.getCurrentUserActiveStream();
            if (null != e) return (0, iE.vN)((0, _g._z)(e));
            !(function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                if (!(0, sJ.A)(eS.Ay) || null != oN.A.getCurrentUserActiveStream()) return;
                let n = ee.A.getVoiceChannelId(),
                    i = i7.A.getChannel(n);
                if (null == i) return;
                let r = i.getGuildId();
                if ((0, i0.vz)(i, rU.A, rk.A, !1))
                    if (eS.Ay.getUseSystemScreensharePicker())
                        (0, U.isMac)() && _f().satisfies(d8.A?.os.release, _L.WZ) ? (0, _N.a)() : (0, _N.a)("window");
                    else {
                        let n = (0, _S.A)(eT.Ay, _T.A);
                        if (null == n || (n.isLauncher && !e)) return;
                        (0, iE.XI)(r, i.id, { pid: n.pid, analyticsLocations: t });
                    }
            })(!0, [eg.A.GO_LIVE_KEYBIND]);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            _E.A.setEnabled(!_v.A.enabled);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.NAVIGATE_BACK]: {
        onTrigger: () => (0, uD.OE)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [D.hCu.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, uD.Qb)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [D.hCu.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, _D.A)();
            if (null != e)
                if (_y.A.enabled) (0, _b.Lk)(e);
                else {
                    if (!(0, s4.lI)()) return;
                    (0, _b.hK)(!0, e);
                }
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, _D.A)();
            if (null != t) {
                if (e) {
                    if (!(0, s4.lI)()) return;
                    (0, _b.hK)(!1, t);
                } else (0, _b.Lk)(t);
                return;
            }
        },
        keyEvents: { keyup: !0, keydown: !0 },
    },
    [D.hCu.SAVE_CLIP]: {
        onTrigger: () => {
            (0, _m.TD)() && (ec.default.track(D.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _I.l0)());
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [D.hCu.SAVE_SCREENSHOT]: {
        onTrigger: () => {
            !(0, _m.TD)() || ((0, _p.cx)() && (ec.default.track(D.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _I.yT)()));
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [D.hCu.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: { channelId: n },
            } = t;
            null != n && O.default.selectVoiceChannel(n);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
    [D.hCu.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            O.default.selectVoiceChannel(null);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
};
function _U() {
    _x.clear(), (0, _O.N)(!1, !1);
}
class _G extends X.A {
    _initialize() {
        q.h.wait(() => q.h.dispatch({ type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS", keybinds: _M })),
            q.h.subscribe("AUDIO_SET_MODE", _U),
            q.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    _terminate() {
        q.h.unsubscribe("AUDIO_SET_MODE", _U), q.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    handleVoiceChannelSelect(e) {
        let { currentVoiceChannelId: t, channelId: n } = e;
        t !== n && _U();
    }
}
let _j = new _G();
var _k = n(913765),
    _V = n(942614),
    _F = n(315982),
    _H = n(202384),
    _B = n(709977),
    _Y = n(14509),
    _$ = n(894778),
    _z = n(225315),
    _W = n(684407),
    _K = n(919638),
    _q = n(426620),
    _X = n(771016),
    _Z = n(994277);
n(436317);
var _Q = n(315290);
function _J() {
    null != r && (0, f.closeModal)(r);
}
class _0 extends X.A {
    _initialize() {
        q.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), q.h.subscribe("LOGOUT", _J);
    }
    _terminate() {
        q.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), q.h.unsubscribe("LOGOUT", _J);
    }
    handleConnectionOpen() {
        var e;
        let t,
            i = _q.A.getType();
        if (null == i) return;
        switch (i) {
            case _X.zY.INVITE_UNCLAIMED:
                _$.A.flowStart(_Q.do.INVITE, _Q.ju.NUF_STARTED);
                break;
            case _X.zY.ORGANIC_REGISTERED:
                _$.A.flowStart(_Q.do.ORGANIC, _Q.ju.NUF_STARTED);
                break;
            case _X.zY.MARKETING_UNCLAIMED:
                _$.A.flowStart(_Q.do.ORGANIC_MARKETING, _Q.ju.NUF_STARTED);
        }
        let a = !1,
            l = et.A.getGuildId();
        if (i === _X.zY.INVITE_UNCLAIMED) {
            let e = rU.A.getGuild(l);
            null != e && (0, _B.Qd)(e) && ((a = !0), (0, _z.Fy)(e.id));
        }
        let s = () => 0 === _K.A.totalGuilds && !U.isPlatformEmbedded,
            o = en.xq();
        (e = [
            {
                key: "Unified NUF Modal",
                open: async function (e) {
                    let { default: t } = await n.e("74082").then(n.bind(n, 491380));
                    if (t.getConfig({ location: "nuf_manager" }).enabled) {
                        r = await (0, f.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e("46881"), n.e("19183"), n.e("41879")]).then(
                                    n.bind(n, 923314),
                                );
                                return (t) => (0, E.jsx)(e, { ...t });
                            },
                            { onCloseRequest: D.tEg, onCloseCallback: e, modalKey: r },
                        );
                        return;
                    }
                    let i = (e) => {
                        switch (e) {
                            case _Z.i.AGE_GATE:
                                _$.A.flowStep(_Q.do.ANY, _Q.ju.AGE_GATE);
                                break;
                            case _Z.i.CHOOSE_TEMPLATE:
                                _$.A.flowStep(_Q.do.ANY, _Q.jC.GUILD_TEMPLATES);
                                break;
                            case _Z.i.CUSTOMIZE_GUILD:
                                _$.A.flowStep(_Q.do.ANY, _Q.jC.GUILD_CREATE);
                                break;
                            case _Z.i.CHANNEL_PROMPT:
                                _$.A.flowStep(_Q.do.ANY, _Q.jC.CHANNEL_PROMPT);
                                break;
                            case _Z.i.JOIN_GUILD:
                                _$.A.flowStep(_Q.do.ANY, _Q.jC.JOIN_GUILD);
                                break;
                            case _Z.i.CREATION_INTENT:
                                _$.A.flowStep(_Q.do.ANY, _Q.jC.CREATION_INTENT);
                                break;
                            case _Z.i.COMPLETE:
                                _$.A.flowStep(_Q.do.ANY, _Q.jC.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                rt.xb(e);
                        }
                    };
                    r = await (0, f.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("28367"), n.e("46881"), n.e("39539")]).then(
                                n.bind(n, 111185),
                            );
                            return (t) => (0, E.jsx)(e, { ...t, onSlideChange: i });
                        },
                        { onCloseRequest: D.tEg, onCloseCallback: e, modalKey: r },
                    );
                },
                predicate: () => s() && !0,
            },
            { key: "New User Age Gate", open: _F.v, predicate: () => o && !s() && !0 },
            {
                key: "Claim Account Modal",
                open: (e) => _F.R(U.isPlatformEmbedded, e),
                predicate: () =>
                    !a &&
                    null != i_.default.getCurrentUser() &&
                    !i_.default.getCurrentUser()?.isClaimed() &&
                    !(0, _Y._9)(),
            },
            {
                key: "Verification Gate with Claim Account",
                open: (e) => (0, _H.Ze)(l, e ?? void 0),
                predicate: () => a && !i_.default.getCurrentUser()?.isClaimed() && !0,
            },
            {
                key: "Guild Welcome Modal",
                open: (e) =>
                    (0, f.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("10585").then(n.bind(n, 954784));
                            return (t) => (0, E.jsx)(e, { ...t, guildId: l });
                        },
                        { onCloseCallback: e },
                    ),
                predicate: () => null != l && null != _W.A.get(l) && _W.A.get(l) !== _W.E,
            },
        ]),
            (t = () => {
                _V.D(), _$.A.flowStep(_Q.do.ANY, _Q.ju.NUF_COMPLETE, !0);
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
let _1 = new _0();
var _2 = n(682492),
    _6 = n(414736),
    _5 = n(874486),
    _3 = n(927018),
    _4 = n(3137),
    _8 = n(559908);
let _7 = new Set();
class _9 extends X.A {
    _initialize() {
        q.h.subscribe("MESSAGE_CREATE", this.handleMessageCreate),
            q.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate);
    }
    _terminate() {
        q.h.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate),
            q.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate);
    }
    handleSettingsUpdate = (e) => {
        let { settings: t } = e;
        t.enabled ? (0, _6._)(_3.sn.ENABLE_POGGERMODE) : !1 === t.enabled && (0, _6._)(_3.sn.DISABLE_POGGERMODE),
            Object.keys(t).some((e) => e.startsWith("confetti")) && (0, _6._)(_3.sn.CUSTOMIZE_CONFETTI);
    };
    handleMessageCreate = (e) => {
        let {
            channelId: t,
            message: { author: n, nonce: i, mentions: r },
        } = e;
        if (!_4.A.isEnabled()) return !1;
        let a = P.default.getId();
        if (
            (r?.find((e) => e.id === a) != null
                ? (0, _6._)(_3.sn.PING_ME)
                : (r?.length ?? 0) > 0 && n?.id === a && (0, _6._)(_3.sn.PING_SOMEONE),
            !(0, _8.gN)(n?.id, a, i, _7))
        )
            return !1;
        let { combo: l } = _8.Ay.getMostRecentMessageCombo(t) ?? {};
        if (null == l) return !1;
        Object.values(_3.sn).forEach((e) => {
            if (null != _5.A.getUnlocked(e)) return;
            let t = (0, _3.vM)(e),
                n = t?.checkUnlock;
            null == n || (!1 !== n(l) && (0, _6._)(e));
        });
    };
}
let Ae = new _9();
var At = n(64585),
    An = n(139033);
class Ai extends X.A {
    _initialize() {
        q.h.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        q.h.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, An.A)({ title: G.intl.string(G.t.wDQgnX), subtitle: G.intl.string(G.t.OJklbS) });
    }
}
let Ar = new Ai();
var Aa = n(958005),
    Al = n(574172);
n(41604);
let As = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("74968"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("75349"),
                n.e("54490"),
                n.e("40393"),
                n.e("77602"),
                n.e("33773"),
                n.e("63078"),
                n.e("88808"),
                n.e("86300"),
                n.e("53275"),
                n.e("96694"),
                n.e("84114"),
                n.e("53267"),
                n.e("26223"),
                n.e("1009"),
                n.e("92539"),
                n.e("10247"),
                n.e("92030"),
                n.e("93117"),
                n.e("85352"),
                n.e("71138"),
            ]).then(n.bind(n, 140539)),
        webpackId: 140539,
        name: "PopoutWindowChannelCall",
    }),
    Ao = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("98765"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("40393"),
                n.e("33773"),
                n.e("88808"),
                n.e("84114"),
                n.e("36133"),
            ]).then(n.bind(n, 418838)),
        webpackId: 418838,
        name: "PopoutWindowCallTile",
    }),
    Ad = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("75349"),
                n.e("54490"),
                n.e("40393"),
                n.e("33773"),
                n.e("63078"),
                n.e("88808"),
                n.e("96694"),
                n.e("84114"),
                n.e("1009"),
                n.e("10247"),
                n.e("92030"),
                n.e("28220"),
                n.e("36308"),
            ]).then(n.bind(n, 911315)),
        webpackId: 911315,
        name: "PopoutWindowStageChannelCall",
    }),
    Ac = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("74968"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("75349"),
                n.e("54490"),
                n.e("40393"),
                n.e("77602"),
                n.e("33773"),
                n.e("63078"),
                n.e("88808"),
                n.e("86300"),
                n.e("53275"),
                n.e("96694"),
                n.e("84114"),
                n.e("53267"),
                n.e("26223"),
                n.e("1009"),
                n.e("92539"),
                n.e("10247"),
                n.e("92030"),
                n.e("93117"),
                n.e("85352"),
                n.e("71138"),
            ]).then(n.bind(n, 767675)),
        webpackId: 767675,
        name: "PopoutWindowRTCDebug",
    }),
    Au = (0, tu.Fe)({
        createPromise: () => Promise.all([n.e("93103"), n.e("13492")]).then(n.bind(n, 481477)),
        webpackId: 481477,
        name: "PopoutWindowActivity",
    });
class A_ extends X.A {
    _observer = null;
    _initialize() {
        q.h.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            q.h.subscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            q.h.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            q.h.subscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.initializeStyleSheetObserver();
    }
    _terminate() {
        q.h.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            q.h.unsubscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            q.h.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            q.h.unsubscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.terminateStyleSheetObserver();
    }
    handleOpenChannelCallPopout(e) {
        let { channel: t } = e;
        Al.open(
            D.MLl.CHANNEL_CALL_POPOUT,
            (e) =>
                t.isGuildStageVoice()
                    ? (0, E.jsx)(Ad, { windowKey: e, channelId: t.id })
                    : (0, E.jsx)(As, { windowKey: e, channelId: t.id }),
            { defaultWidth: 854, defaultHeight: 480 },
        );
    }
    handleOpenCallTilePopout = (e) => {
        let { channelId: t, participantId: n } = e,
            i = (0, Aa.A)(t, n);
        Al.open(i, (e) => (0, E.jsx)(Ao, { windowKey: e, channelId: t, participantId: n }), {
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
                            Al.addStylesheet(t, n);
                        }
                }
        })),
            this._observer.observe(document.head, { childList: !0 });
    }
    terminateStyleSheetObserver() {
        null != this._observer && (this._observer.disconnect(), (this._observer = null));
    }
    handleOpenRTCDebugPopout() {
        Al.open(D.MLl.RTC_DEBUG_POPOUT, (e) => (0, E.jsx)(Ac, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    }
    handleOpenActivityPopout() {
        Al.open(D.MLl.ACTIVITY_POPOUT, (e) => (0, E.jsx)(Au, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    }
}
let AA = new A_();
var Ah = n(123924);
class AE extends X.A {
    _initialize() {
        eN.A.addChangeListener(this.handlePopoutWindowChange),
            q.h.subscribe("WINDOW_FOCUS", this.handleMainWindowFocus);
    }
    _terminate() {
        eN.A.removeChangeListener(this.handlePopoutWindowChange),
            q.h.unsubscribe("WINDOW_FOCUS", this.handleMainWindowFocus),
            this.injectWindowAnimationFrame(window);
    }
    handleMainWindowFocus = (e) => {
        e.focused && e.windowId === window.__DISCORD_WINDOW_ID && this.injectWindowAnimationFrame(window);
    };
    handlePopoutWindowChange = () => {
        let e = eN.A.getWindowKeys().find((e) => eN.A.getWindowFocused(e));
        if (null == e) return this.injectWindowAnimationFrame(window);
        let t = eN.A.getWindow(e);
        if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
        this.injectWindowAnimationFrame(t);
    };
    injectWindowAnimationFrame(e) {
        let t = (t) => e.requestAnimationFrame(t),
            n = (t) => e.cancelAnimationFrame(t);
        a9.A.inject.RequestAnimationFrame(t), a9.A.inject.CancelAnimationFrame(n), Ah.Globals.frameLoop?.setRAF(t, n);
    }
}
let Ap = new AE();
var Am = n(877624),
    AI = n(835095),
    Ag = n(354670),
    AC = n(40185),
    Af = n(881489),
    AT = n(374200),
    AN = n(852218),
    AS = n(231265),
    AL = n(635980);
let AO = "PremiumServerDriveAnnouncementModal";
class Ay extends X.A {
    _initialize() {
        q.h.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            q.h.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            q.h.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            q.h.subscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess),
            q.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
    }
    _terminate() {
        q.h.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            q.h.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            q.h.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            q.h.unsubscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess),
            q.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
    }
    maybeShowAnnouncementModalFromPromotions = (e) => {
        for (let t of e)
            if (null != t.marketingComponents) {
                if (null != t.trialId) {
                    let e = Ag.A.getUserTrialOffer(t.trialId);
                    if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) continue;
                }
                for (let e of t.marketingComponents)
                    if (e.component_type === Am.C.ANNOUNCEMENT_MODAL)
                        return void this.maybeOpenServerDriveAnnouncementModal(e.id, e.promotion_id, e.properties, !1);
            }
        (0, Af.al)(), (0, Af.QM)();
    };
    handleActivePromotionsFetchSuccess = (e) => {
        let { promotions: t } = e;
        this.maybeShowAnnouncementModalFromPromotions(t.map((e) => AI.A.createFromServer(e)));
    };
    handleUserOfferFetchSuccess = (e) => {
        let { userTrialOffer: t } = e;
        null != t &&
            this.maybeShowAnnouncementModalFromPromotions(Object.values(AT.A.promotionsByType[AN.pt.MARKETING_MOMENT]));
    };
    handleEntitlementCreate = (e) => {
        let { entitlement: t } = e;
        c2.P.isDisallowPopupsSet() || t.source_type !== D.GD.REVERSE_TRIAL || (0, Af.al)();
    };
    maybeOpenServerDriveAnnouncementModal = async (e, t, i, r) => {
        if ((0, f.hasModalOpen)(AO)) return !1;
        let a = (0, AL.H)({ promotionId: t, content: i, isPreview: r });
        if (null != a)
            return (
                (!1 !== r || a?.contentIdentifier !== "summer_bogo_content" || !!(await (0, AS.C)())) &&
                ((0, f.openModalLazy)(
                    async () => {
                        let { default: i } = await Promise.resolve().then(n.bind(n, 635980));
                        return (n) =>
                            (0, E.jsx)(i, { renderModalProps: n, componentId: e, promotionId: t, properties: a });
                    },
                    { modalKey: AO },
                ),
                !0)
            );
    };
    handlePreview = (e) => {
        let { data: t } = e;
        this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, !0);
    };
    mayShowAnnouncementModal = async () => {
        if ((await (0, AC.hb)(), c2.P.isDisallowPopupsSet())) return;
        let e = i_.default.getCurrentUser();
        if (null != e && !e.verified) return;
    };
}
let Ab = new Ay();
var Av = n(499454),
    AR = n(17159),
    AP = n(688796),
    AD = n(207803),
    Ax = n(84540),
    Aw = n(927578),
    AM = n(919395),
    AU = n(339984);
class AG extends X.A {
    _initialize() {
        q.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        q.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === AU.HL.AVATAR
            ? ((e) => {
                  let { image: t, file: n, guildId: i, isTryItOut: r } = e;
                  if (r) return void (0, AD.e$)(t);
                  let a = i_.default.getCurrentUser();
                  if (Aw.Ay.canUseAnimatedAvatar(a) || "image/gif" !== n.type) {
                      (0, Ax.p)({ guildId: i, avatar: t }), (0, AM.WU)("set");
                      return;
                  }
                  null != a && (0, AP.G)({ uploadType: AU.HL.AVATAR });
              })(e)
            : e.uploadType === AU.HL.BANNER
              ? ((e) => {
                    let { image: t, guildId: n, isTryItOut: i } = e,
                        r = t.imageUri;
                    if (i) return void (0, AD.xe)(r);
                    let a = i_.default.getCurrentUser(),
                        l = Aw.Ay.canUsePremiumProfileCustomization(a);
                    Aw.Ay.canUsePremiumProfileCustomization(a)
                        ? (0, Ax.p)({ guildId: n, banner: r })
                        : null == a || l || (0, AP.G)({ uploadType: AU.HL.BANNER });
                })(e)
              : void 0;
    }
}
let Aj = new AG();
var Ak = n(453314),
    AV = n(302495),
    AF = n(901123);
let AH = new Set([
    AF.BV.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode"),
    AF.BV.APP_WITH_GIFT_CODE(":giftCode"),
    AF.BV.APP,
    AF.BV.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
    AF.BV.SETTINGS(":section", ":subsection?"),
    AF.BV.USER_GUILD_NOTIFICATION_SETTINGS(AV.p.guildId()),
    AF.BV.APPLICATION_LIBRARY_INVENTORY,
    AF.BV.WELCOME(AV.p.guildId({ optional: !0 }), AV.p.channelId({ optional: !0 })),
    AF.BV.GUILD_EVENT_DETAILS(AV.p.guildId({ optional: !0 }), ":guildEventId"),
    AF.BV.GUILD_SETTINGS(AV.p.guildId(), ":section?", ":subsection?"),
    AF.BV.CHANNEL_THREAD_VIEW(AV.p.guildId(), AV.p.channelId(), ":threadId", ":messageId?"),
    AF.BV.CHANNEL(AV.p.guildId(), AV.p.channelId({ optional: !0 }), ":messageId?"),
    AF.BV.ACTIVITY,
    AF.BV.ACTIVITIES,
    AF.BV.ACTIVITIES_HAPPENING_NOW,
    AF.BV.ACTIVITY_DETAILS(":applicationId"),
    AF.BV.APPLICATION_LIBRARY,
    AF.BV.APPLICATION_STORE,
    AF.BV.MESSAGE_REQUESTS,
    AF.BV.COLLECTIBLES_SHOP,
    AF.BV.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
    AF.BV.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
    AF.BV.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
    AF.BV.GUILD_DISCOVERY,
    AF.BV.QUEST_HOME_DEPRECATED,
    AF.BV.QUEST_HOME,
    AF.BV.ICYMI,
    AF.BV.GLOBAL_DISCOVERY,
    AF.BV.GUILD_MEMBER_VERIFICATION(AV.p.guildId()),
    AF.BV.GUILD_MEMBER_VERIFICATION_FOR_HUB(AV.p.guildId(), ":inviteCode?"),
    AF.BV.GUILD_BOOSTING_MARKETING(AV.p.guildId()),
    AF.BV.GUILD_FEATURE(":feature", AV.p.guildId()),
    AF.BV.FEATURE(":feature"),
    AF.BV.FAMILY_CENTER,
    AF.BV.APPLICATION_DIRECTORY,
    AF.BV.GAME_SHOP(AV.p.guildId(), ":shopSkuId?", ":shopSlug?"),
]);
var AB = n(655087),
    AY =
        (((c = {})[(c.UNHANDLED = -1)] = "UNHANDLED"),
        (c[(c.NOMINAL = 0)] = "NOMINAL"),
        (c[(c.FAIR = 1)] = "FAIR"),
        (c[(c.SERIOUS = 2)] = "SERIOUS"),
        (c[(c.CRITICAL = 3)] = "CRITICAL"),
        c);
function A$() {
    var e = AB.A.getRawThermalState();
    if (null == e) return -1;
    if ((0, U.isIOS)()) return e;
    if (!(0, U.isAndroid)()) return -1;
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
var Az = n(792620),
    AW = n(290863),
    AK = n(90924),
    Aq = n(969151),
    AX = n(562153),
    AZ = n(639621);
function AQ() {
    let e = rv.Ay.getCurrentEmbeddedActivity();
    if (null == e) return { participants: [] };
    let t = (0, Aq.D)(e.location),
        n = (0, Aq.H)(e.location);
    return {
        participants: Array.from(e.userIds, (e) => {
            let i = i_.default.getUser(e);
            if (null == i) return;
            let r = (0, AX.tJ)(t, n, i);
            return { ...(0, AZ.A)(i), nickname: r ?? void 0 };
        }).filter(rt.Vq),
    };
}
let AJ = { [ds.sm.ANY]: [ds.VH] };
var A0 = n(360469),
    A1 = n(179771),
    A2 = n(818348);
let A6 = {
        [A2.e$.INITIATE_IMAGE_UPLOAD]: { request: void 0, response: (e) => ({ image_url: e.string().required() }) },
        [A2.e$.OPEN_SHARE_MOMENT_DIALOG]: {
            response: void 0,
            request: (e) => ({ mediaUrl: e.string().required().max(1024) }),
        },
        [A2.e$.AUTHENTICATE]: {
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
                    .items(e.string().valid(...Object.values(A1.F)))
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
        [A2.e$.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
            request: void 0,
            response: (e) => ({
                participants: e
                    .array()
                    .items(
                        A3(e)
                            .keys({ nickname: e.string().description("Server nickname. Not unique.") })
                            .required(),
                    )
                    .required(),
            }),
        },
        [A2.e$.SHARE_INTERACTION]: {
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
                components: e.array().items(A4(e)),
                pid: e.number(),
            }),
            response: (e) => ({ success: e.boolean().required() }),
        },
        [A2.e$.SHARE_LINK]: {
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
        [A2.e$.GET_RELATIONSHIPS]: {
            request: void 0,
            response: (e) => ({
                relationships: e
                    .array()
                    .required()
                    .items(
                        e.object({
                            type: e.number().required(),
                            user: A3(e).required(),
                            presence: e.object({ status: e.string().required(), activity: A5(e).allow(null) }),
                        }),
                    ),
            }),
        },
        [A2.e$.INVITE_USER_EMBEDDED]: {
            request: (e) => ({ user_id: e.string().required(), content: e.string().min(0).max(1024) }),
            response: void 0,
        },
        [A2.e$.GET_USER]: {
            request: (e) => ({ id: e.string().max(64).required() }),
            response: (e) => A3(e).allow(null),
        },
        [A2.e$.GET_QUEST_ENROLLMENT_STATUS]: {
            request: (e) => ({ quest_id: e.string().required() }),
            response: (e) => ({
                quest_id: e.string().required(),
                is_enrolled: e.boolean().required(),
                enrolled_at: e.string().allow(null).optional(),
            }),
        },
        [A2.e$.QUEST_START_TIMER]: {
            request: (e) => ({ quest_id: e.string().required() }),
            response: (e) => ({ success: e.boolean().required() }),
        },
        [A2.e$.GET_QUESTS]: {
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
        [A2.e$.REQUEST_PROXY_TICKET_REFRESH]: { request: void 0, response: (e) => ({ ticket: e.string().required() }) },
    },
    A5 = (e) =>
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
    A3 = (e) =>
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
    A4 = (e) => e.object({ type: e.number().valid(1).required(), components: e.array().max(5).items(A8(e)) }),
    A8 = (e) =>
        e.object({
            type: e.number().valid(2).required(),
            style: e.number().min(1).max(5).required(),
            label: e.string().max(80).description("Text that appears on the button"),
            custom_id: e
                .string()
                .max(100)
                .description("Developer-defined identifier for the button; max 100 characters"),
        });
function A7(e, t) {
    let { scope: n, handler: i } = t,
        r = { scope: n, handler: i },
        a = A6[e]?.request,
        l = null;
    return (
        null != a &&
            (r.validation = function (e) {
                return null == l && (l = e.object(a(e)).required().unknown(!0)), l;
            }),
        r
    );
}
var A9 = n(20015),
    he = n(636401);
function ht() {
    let e = rv.Ay.getConnectedActivityChannelId();
    return i7.A.getChannel(e);
}
let hn = {
    [D.e$_.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: A7(D.e$_.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
        scope: AJ,
        handler(e) {
            let { socket: t } = e;
            return (0, AK.lG)(t.transport), AQ();
        },
    }),
    [D.e$_.REQUEST_PROXY_TICKET_REFRESH]: A7(D.e$_.REQUEST_PROXY_TICKET_REFRESH, {
        scope: AJ,
        async handler(e) {
            let { socket: t } = e;
            (0, AK.lG)(t.transport);
            let n = (0, AK.D2)(t.application);
            if (!(0, A9.n)(t.application, D.gfo.EMBEDDED))
                throw new he.A(
                    { errorCode: D.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                    "This application cannot access this API",
                );
            let i = ht();
            try {
                return { ticket: await (0, tV.D2)(n, i?.id) };
            } catch (e) {
                throw new he.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, "Failed to create proxy ticket");
            }
        },
    }),
};
var hi = n(636537),
    hr = n(458664),
    ha = n(977445);
function hl(e) {
    return e.object().unknown(!0);
}
let hs = {
        [D.e$_.SEND_ANALYTICS_EVENT]: {
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({ event_name: e.string().required(), event_properties: hl(e).required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { event_name: n, event_properties: i },
                } = e;
                (0, AK.lG)(t.transport), (0, AK.D2)(t.application);
                let r = t.application.id,
                    a = ht(),
                    l = a?.getGuildId(),
                    s = i$.A.getApplication(r);
                if (!(0, A9.n)(s, D.gfo.EMBEDDED_FIRST_PARTY))
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "This application cannot access this API");
                let o = (0, hr.D)(r),
                    d = {
                        activity_application_id: r,
                        activity_channel_type: a?.type,
                        activity_guild_id: l,
                        activity_user_session_id: o?.activityUserSessionId,
                    };
                ec.default.track(n, { ...d, ...i });
            },
        },
        [D.e$_.GET_APPLICATION_TICKET]: {
            scope: ds.hj,
            handler(e) {
                let { socket: t } = e,
                    n = t.application.id;
                if (null == n) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                return hi.Bo.post({
                    url: D.Rsh.APPLICATION_TICKET(n),
                    body: { test_mode: (0, ha.F)(n) },
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
    ho = {
        [D.e$_.SET_CERTIFIED_DEVICES]: {
            scope: { [ds.sm.ANY]: [A1.F.RPC, ds.hj] },
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({
                        devices: e.array().items(
                            hl(e).keys({
                                type: e
                                    .string()
                                    .required()
                                    .valid([eO.oh.AUDIO_INPUT, eO.oh.AUDIO_OUTPUT, eO.oh.VIDEO_INPUT]),
                                id: e.string().required().min(1),
                                vendor: hl(e)
                                    .required()
                                    .keys({ name: e.string().min(1), url: e.string().min(1) }),
                                model: hl(e)
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
                if (null == i.application.id) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
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
                    q.h.dispatch({ type: "CERTIFIED_DEVICES_SET", applicationId: t, devices: n });
            },
        },
    };
var hd = n(95701),
    hc = n(147036);
let hu = {
        [D.e$_.GET_CHANNEL]: {
            scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.GUILDS, A1.F.GUILDS_CHANNELS_READ] },
            handler(e) {
                let {
                        args: { channel_id: t },
                        socket: n,
                    } = e,
                    i = i7.A.getChannel(t);
                if (null == i) throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
                if (i.isPrivate()) {
                    let e = n.authorization.scopes;
                    if (!e.includes(A1.F.RPC) && !e.includes(A1.F.DM_CHANNELS_READ))
                        throw new he.A({ errorCode: D.Lw6.INVALID_PERMISSIONS }, "Invalid scope");
                }
                return (0, AK.SN)(i, (0, AK.B_)(i, n.application.id, n.authorization.scopes));
            },
        },
        [D.e$_.GET_CHANNELS]: {
            scope: A1.F.RPC,
            handler(e) {
                let {
                        args: { guild_id: t },
                    } = e,
                    n = eU().values(i7.A.loadAllGuildAndPrivateChannelsFromDisk());
                if (t) {
                    let e = rU.A.getGuild(t);
                    if (null == e) throw new he.A({ errorCode: D.Lw6.INVALID_GUILD }, `Invalid guild id: ${t}`);
                    n = n.filter((t) => {
                        let { guild_id: n } = t;
                        return n === e.id;
                    });
                }
                return {
                    channels: n
                        .filter((e) => rk.A.can(D.xBc.VIEW_CHANNEL, e))
                        .map((e) => {
                            let { id: t, name: n, type: i } = e;
                            return { id: t, name: n, type: i };
                        }),
                };
            },
        },
        [D.e$_.GET_CHANNEL_PERMISSIONS]: {
            scope: { [ds.sm.ANY]: [A1.F.GUILDS_MEMBERS_READ, A1.F.GUILDS_CHANNELS_READ] },
            handler(e) {
                let t = ht();
                if (null == t) throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "Invalid channel");
                return { permissions: rk.A.computePermissions(t) };
            },
        },
        [D.e$_.SELECT_VOICE_CHANNEL]: {
            scope: A1.F.RPC,
            validation: (e) =>
                hl(e)
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
                if (!i) return O.default.selectVoiceChannel(null), null;
                let s = ee.A.getVoiceChannelId();
                if (null != s && s !== i && !1 === a)
                    throw new he.A(
                        { errorCode: D.Lw6.SELECT_VOICE_FORCE_REQUIRED },
                        "User is already joined to a voice channel.",
                    );
                return t
                    .storeWait(n, () => i7.A.getChannel(i), r)
                    .catch(() => {
                        throw new he.A(
                            { errorCode: D.Lw6.SELECT_CHANNEL_TIMED_OUT },
                            "Request to select voice channel timed out.",
                        );
                    })
                    .then((e) => {
                        if (null == e) throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${i}`);
                        if (!(0, hd.gV)(e.type))
                            throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "Channel is not a voice channel");
                        return Promise.all([
                            Promise.resolve(e),
                            (0, AK.SN)(e, (0, AK.B_)(e, n.application.id, n.authorization.scopes)),
                        ]);
                    })
                    .then((e) => {
                        let [t, n] = e;
                        if (n.guild_id) {
                            if ((0, hc.Pd)(t, rF.A, rU.A))
                                throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "Channel is full");
                            if (!rk.A.can(D.xBc.CONNECT, t))
                                throw new he.A(
                                    { errorCode: D.Lw6.INVALID_PERMISSIONS },
                                    "Connect permission required to join channel",
                                );
                        }
                        return O.default.selectVoiceChannel(t.id), l && (0, aO.bG)(D.BVt.CHANNEL(t.guild_id, t.id)), n;
                    });
            },
        },
        [D.e$_.GET_SELECTED_VOICE_CHANNEL]: {
            scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.RPC_VOICE_READ] },
            handler(e) {
                let { socket: t } = e,
                    n = ee.A.getVoiceChannelId(),
                    i = null != n ? i7.A.getChannel(n) : null;
                return null != i ? (0, AK.SN)(i, (0, AK.B_)(i, t.application.id, t.authorization.scopes)) : null;
            },
        },
        [D.e$_.SELECT_TEXT_CHANNEL]: {
            scope: A1.F.RPC,
            validation: (e) =>
                hl(e)
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
                          .storeWait(n, () => i7.A.getChannel(i), r)
                          .catch(() => {
                              throw new he.A(
                                  { errorCode: D.Lw6.SELECT_CHANNEL_TIMED_OUT },
                                  "Request to select text channel timed out.",
                              );
                          })
                          .then((e) => {
                              if (null == e)
                                  throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${i}`);
                              if (!(0, hd.pQ)(e.type))
                                  throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "Channel is not a text channel");
                              return Promise.all([
                                  Promise.resolve(e),
                                  (0, AK.SN)(e, (0, AK.B_)(e, n.application.id, n.authorization.scopes)),
                              ]);
                          })
                          .then((e) => {
                              let [t, n] = e;
                              if (n.guild_id && !rk.A.can(D.xBc.VIEW_CHANNEL, t))
                                  throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "No permission to see channel");
                              return (
                                  n.guild_id
                                      ? (0, aO.bG)(D.BVt.CHANNEL(n.guild_id, t.id))
                                      : O.default.selectPrivateChannel(t.id),
                                  n
                              );
                          })
                    : ((0, aO.pX)(D.BVt.ME), null);
            },
        },
        [D.e$_.CREATE_CHANNEL_INVITE]: {
            scope: A1.F.RPC,
            handler(e) {
                let {
                    args: { channel_id: t, ...n },
                } = e;
                return u5.Ay.createInvite(t, n, "RPC").catch(() => {
                    throw new he.A(
                        { errorCode: D.Lw6.INVALID_PERMISSIONS },
                        `Unable to generate an invite for ${t}. Does this user have permissions?`,
                    );
                });
            },
        },
    },
    h_ = {
        [D.e$_.SET_CONFIG]: {
            scope: ds.VH,
            validation: (e) => hl(e).required().keys({ use_interactive_pip: e.boolean() }),
            handler(e) {
                let {
                    socket: t,
                    args: { use_interactive_pip: n },
                } = e;
                if (t.transport !== ds.z4.POST_MESSAGE)
                    throw new he.A(
                        { errorCode: D.Lw6.INVALID_COMMAND },
                        `command not available from "${t.transport} transport`,
                    );
                if (null == t.application.id)
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "invalid application");
                return (
                    q.h.dispatch({
                        type: "EMBEDDED_ACTIVITY_SET_CONFIG",
                        applicationId: t.application.id,
                        config: { useInteractivePIP: n },
                    }),
                    Promise.resolve({ use_interactive_pip: n })
                );
            },
        },
    },
    hA = {
        [D.e$_.GET_GUILD]: {
            scope: A1.F.RPC,
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({ guild_id: e.string(), timeout: e.number().min(0).max(60) }),
            handler(e) {
                let {
                    socket: t,
                    server: n,
                    args: { guild_id: i, timeout: r = 0 },
                } = e;
                return n
                    .storeWait(t, () => rU.A.getGuild(i), r)
                    .catch(() => {
                        throw new he.A({ errorCode: D.Lw6.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
                    })
                    .then((e) => {
                        if (null == e) throw new he.A({ errorCode: D.Lw6.INVALID_GUILD }, `Invalid guild id: ${i}`);
                        return {
                            id: e.id,
                            name: e.name,
                            icon_url: (0, J.Iv)(e, 128) ?? null,
                            members: [],
                            vanity_url_code: e.vanityURLCode,
                        };
                    });
            },
        },
        [D.e$_.GET_GUILDS]: {
            scope: A1.F.RPC,
            handler: () => ({
                guilds: rU.A.getGuildsArray().map((e) => ({
                    id: e.id,
                    name: e.name,
                    icon_url: (0, J.Iv)(e, 128) ?? null,
                })),
            }),
        },
    };
var hh = n(486020),
    hE = n(515718);
let hp = {
    [D.e$_.GET_IMAGE]: {
        scope: ds.hj,
        validation: (e) =>
            hl(e)
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
                let e = i_.default.getUser(i);
                if (null != e) {
                    t = hh.Ay.getUserAvatarURL(e, !1, a, r);
                    let n = window.GLOBAL_ENV.CDN_HOST;
                    null != n && -1 !== t.indexOf(n) && (t += "&_=");
                } else throw new he.A({ errorCode: D.Lw6.INVALID_USER }, `Invalid user id: ${i}`);
            }
            if (null == t) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No valid type.");
            return fetch(t)
                .then((e) => e.blob())
                .then((e) => (0, hE.We)(e))
                .then((e) => ({ data_url: e }));
        },
    },
};
var hm = n(119966),
    hI = n(478437),
    hg = n(344351),
    hC = n(855687);
function hf() {
    let e = tx.A.getConnectedFrame();
    if (null != e) return { frame: e, channel: void 0, guild: void 0 };
    let t = ht();
    if (null == t) throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "Invalid channel");
    let n = rU.A.getGuild(t.getGuildId());
    if (null == n) throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid guild ${t.getGuildId()}`);
    if (!(0, hC.K)(rk.A, n, t))
        throw new he.A({ errorCode: D.Lw6.INVALID_PERMISSIONS }, `No invite permissions for ${t.id}`);
    return { frame: void 0, channel: t, guild: n };
}
let hT = {
    [A2.e$.INVITE_USER_EMBEDDED]: A7(A2.e$.INVITE_USER_EMBEDDED, {
        scope: { [ds.sm.ANY]: [A1.F.DM_CHANNELS_MESSAGES_WRITE, A1.F.ACTIVITIES_INVITES_WRITE] },
        async handler(e) {
            let t,
                {
                    socket: n,
                    args: { user_id: i, content: r },
                } = e,
                a = n.application.id;
            if (null == a) throw new hm.G({ errorCode: A2.Lw.INVALID_COMMAND }, "No application.");
            let l = rv.Ay.getConnectedActivityLocation();
            if (null == l)
                throw new hm.G(
                    { errorCode: A2.Lw.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure an activity was set using setActivity.",
                );
            switch (l.kind) {
                case hg.T.GUILD_CHANNEL:
                case hg.T.GUILD_CHANNEL_MESSAGE:
                    t = hf().channel;
                    break;
                case hg.T.PRIVATE_CHANNEL:
                case hg.T.PRIVATE_CHANNEL_MESSAGE:
                    let s = i7.A.getChannel(l.channel_id);
                    if (null == s) throw new hm.G({ errorCode: A2.Lw.INVALID_CHANNEL }, "Invalid channel");
                    if (s.type === hI.r.DM)
                        throw new hm.G({ errorCode: A2.Lw.INVALID_CHANNEL }, "Cannot send invite to a DM");
                    t = s;
                    break;
                default:
                    throw new hm.G({ errorCode: A2.Lw.NO_ELIGIBLE_ACTIVITY }, "Unsupported activity location");
            }
            try {
                await (0, tV.Ue)({
                    channelId: t.id,
                    applicationId: a,
                    userId: i,
                    prefixedContent: r,
                    location: "RPC_ACTIVITY_INVITE_USER",
                    inviteAnalyticsMetadata: { source: D.PE1.ACTIVITY_INVITE },
                });
            } catch {
                throw new hm.G({ errorCode: A2.Lw.UNKNOWN_ERROR }, "Failed to invite user");
            }
        },
    }),
};
var hN = n(975807),
    hS = n(646865),
    hL = n(231723),
    hO = n(851907);
async function hy(e, t) {
    if (void 0 === e) return !1;
    try {
        let { body: n } = await hi.Bo.get({
            url: D.Rsh.ACTIVITIES_TRUSTED_LINKS(e),
            rejectWithError: !1,
            query: { url: t },
            timeout: 500,
        });
        return !!n.trusted;
    } catch {
        return !1;
    }
}
var hb = n(353835),
    hv = n(76843);
let hR = new Set([A0.AM, A0.eK]),
    hP = {
        [D.e$_.OPEN_EXTERNAL_LINK]: {
            scope: { [ds.sm.ANY]: [ds.VH, ds.W_] },
            validation: (e) => hl(e).required().keys({ url: e.string().required() }),
            async handler(e) {
                let {
                    socket: t,
                    args: { url: n },
                } = e;
                (0, AK.lG)(t.transport);
                let i = rv.Ay.getCurrentEmbeddedActivity();
                try {
                    let e = new URL(n).toString();
                    if (U.isPlatformEmbedded) {
                        let e = (0, hS.f)() ? D.MLl.ACTIVITY_POPOUT : null;
                        hb.A.focus(e, !0);
                    }
                    let r = i$.A.getApplication(t.application?.id),
                        a = (0, Aq.H)(i?.location);
                    if (await hy(r?.id, e))
                        return (
                            (0, hN.A)(e),
                            ec.default.track(D.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                application_id: t.application?.id,
                                url: e,
                                opened: !0,
                            }),
                            Promise.resolve({ opened: !0 })
                        );
                    return new Promise((n) =>
                        (0, hv.h)(
                            {
                                href: e,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    (0, hN.A)(e),
                                        ec.default.track(D.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                            application_id: t.application?.id,
                                            url: e,
                                            opened: !0,
                                        }),
                                        n({ opened: !0 });
                                },
                                onCancel: () => {
                                    ec.default.track(D.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
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
                                return null != (0, hO.Ay)({ application: t, channelId: n }) ? hL.KX : hL.SY;
                            })({ application: r, channelId: a }),
                        ),
                    );
                } catch (e) {
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, `Invalid URL: ${n}`);
                }
            },
        },
        [D.e$_.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => hl(e),
            scope: { [ds.sm.ANY]: [ds.VH] },
            handler(e) {
                let { socket: t } = e;
                (0, AK.lG)(t.transport);
                let i = (0, AK.D2)(t.application);
                if (!hR.has(i))
                    throw new he.A(
                        { errorCode: D.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                {
                    let { openUserSettings: e } = n(858897);
                    e(e6.X.CONNECTIONS_PANEL);
                }
            },
        },
        [D.e$_.SHARE_LINK]: A7(D.e$_.SHARE_LINK, {
            scope: { [ds.sm.ANY]: [ds.VH] },
            handler(e) {
                let {
                    socket: t,
                    args: { custom_id: i, message: r, link_id: a },
                } = e;
                (0, AK.lG)(t.transport);
                let l = (0, AK.D2)(t.application);
                if (null == l) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                if (!(0, A9.n)(t.application, D.gfo.EMBEDDED))
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "This application cannot access this API");
                return new Promise((e) => {
                    !(function (e) {
                        let { applicationId: t, customId: i, linkId: r, message: a, onShare: l } = e,
                            s = i$.A.getApplication(t);
                        if (null == s) return l(!1, !1);
                        let o = null != (0, hO.LU)({ applicationId: s.id }) ? hL.KX : hL.SY,
                            d = !1;
                        function c(e) {
                            l(e, d);
                        }
                        function u() {
                            d = !0;
                        }
                        (0, f.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("19666").then(n.bind(n, 803977));
                                return (n) =>
                                    (0, E.jsx)(e, {
                                        applicationId: t,
                                        customId: i,
                                        linkId: r,
                                        message: a,
                                        onCopyLink: u,
                                        onShare: c,
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
    hD = new cr.A(D.meB),
    hx = {
        [D.e$_.CAPTURE_LOG]: {
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({ level: e.string().max(10).required(), message: e.string().max(1e3).required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { level: n, message: i },
                } = e;
                (0, AK.lG)(t.transport);
                let r = t.application.id,
                    a = `${r} - ${i}`;
                switch (n) {
                    case "log":
                        hD.log(a);
                        break;
                    case "warn":
                        hD.warn(a);
                        break;
                    case "debug":
                        hD.verbose(a);
                        break;
                    case "info":
                        hD.info(a);
                        break;
                    case "error":
                        hD.error(a);
                }
            },
        },
    },
    hw = {
        [D.e$_.GET_NETWORKING_CONFIG]: {
            scope: ds.hj,
            handler: () =>
                Promise.all([
                    hi.Bo.get({
                        url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
                        retries: 3,
                        rejectWithError: !1,
                    }).then((e) => {
                        let {
                            body: { address: t },
                        } = e;
                        return t;
                    }),
                    hi.Bo.post({
                        url: D.Rsh.NETWORKING_TOKEN,
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
        [D.e$_.NETWORKING_SYSTEM_METRICS]: {
            scope: ds.hj,
            handler(e) {
                let { socket: t, args: n } = e;
                (n.application_id = t.application.id), ec.default.track(D.HAw.NETWORKING_SYSTEM_METRICS, n);
            },
        },
        [D.e$_.NETWORKING_PEER_METRICS]: {
            scope: ds.hj,
            handler(e) {
                let { socket: t, args: n } = e;
                (n.application_id = t.application.id), ec.default.track(D.HAw.NETWORKING_PEER_METRICS, n);
            },
        },
        [D.e$_.NETWORKING_CREATE_TOKEN]: {
            scope: ds.hj,
            handler: () =>
                hi.Bo.post({ url: D.Rsh.NETWORKING_TOKEN, retries: 1, oldFormErrors: !0, rejectWithError: !1 }).then(
                    (e) => e.body,
                ),
        },
    },
    hM = { [A2.e$.GET_PLATFORM_BEHAVIORS]: { handler: () => ({ iosKeyboardResizesView: !0 }) } };
var hU = n(77468),
    hG = n(773952);
let hj = new Set([A0.AM, A0.eK]),
    hk = {
        [A2.e$.GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [ds.sm.ANY]: [ds.VH] },
            validation: (e) =>
                hl(e).required().keys({ provider: e.string().required(), connection_redirect: e.string() }),
            handler: (e) => {
                let {
                    socket: t,
                    args: { provider: n, connection_redirect: i },
                } = e;
                (0, AK.lG)(t.transport);
                let r = (0, AK.D2)(t.application),
                    a = iM.A.get(n);
                if (null == a)
                    throw new he.A({ errorCode: A2.Lw.INVALID_PROVIDER }, `Platform not found for provider "${n}"`);
                if (n === D.fg2.AMAZON_MUSIC) {
                    if (!hj.has(r))
                        throw new he.A(
                            { errorCode: A2.Lw.UNAUTHORIZED_FOR_APPLICATION },
                            "Command not available for this application",
                        );
                } else
                    throw new he.A(
                        { errorCode: A2.Lw.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                return new Promise(async (e, t) => {
                    let r = rx.A.getAccount(null, n);
                    if (null == r) {
                        function l(t) {
                            if (null == a) return;
                            let n = (t.accounts ?? []).find((e) => e.type === a.type);
                            null != n && (e({ access_token: n.access_token }), o());
                        }
                        function s() {
                            t(new he.A({ errorCode: A2.Lw.OAUTH2_ERROR }, `OAuth2 setup for "${n}" failed`)), o();
                        }
                        function o() {
                            q.h.unsubscribe("USER_CONNECTIONS_UPDATE", l),
                                tJ._.unsubscribe(D.jej.CONNECTIONS_CALLBACK_ERROR, s);
                        }
                        q.h.subscribe("USER_CONNECTIONS_UPDATE", l),
                            tJ._.subscribe(D.jej.CONNECTIONS_CALLBACK_ERROR, s),
                            (0, hG.A)({ platformType: a.type, location: D.ThZ.ACTIVITY_RPC, successRedirect: i });
                    } else
                        try {
                            let t = await hU.A.refreshAccessToken(a.type, r.id);
                            if (null == t)
                                throw new he.A(
                                    { errorCode: A2.Lw.OAUTH2_ERROR },
                                    "Refreshing access token did not return a new access token",
                                );
                            e({ access_token: t });
                        } catch (e) {
                            t(e);
                        }
                });
            },
        },
        [A2.e$.MAYBE_GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [ds.sm.ANY]: [ds.VH] },
            validation: (e) => hl(e).required().keys({ provider: e.string().required() }),
            handler: async (e) => {
                let {
                    socket: t,
                    args: { provider: n },
                } = e;
                (0, AK.lG)(t.transport);
                let i = (0, AK.D2)(t.application),
                    r = iM.A.get(n);
                if (null == r)
                    throw new he.A({ errorCode: A2.Lw.INVALID_PROVIDER }, `Platform not found for provider "${n}"`);
                if (n === D.fg2.AMAZON_MUSIC) {
                    if (!hj.has(i))
                        throw new he.A(
                            { errorCode: A2.Lw.UNAUTHORIZED_FOR_APPLICATION },
                            "Command not available for this application",
                        );
                } else
                    throw new he.A(
                        { errorCode: A2.Lw.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                let a = rx.A.getAccount(null, n);
                if (null == a) throw new he.A({ errorCode: A2.Lw.NO_CONNECTION_FOUND }, "No connection found");
                let l = await hU.A.refreshAccessToken(r.type, a.id);
                if (null == l)
                    throw new he.A(
                        { errorCode: A2.Lw.OAUTH2_ERROR },
                        "Refreshing access token did not return a new access token",
                    );
                return { access_token: l };
            },
        },
    },
    hV = {
        [D.e$_.GET_QUEST_ENROLLMENT_STATUS]: {
            scope: A1.F.IDENTIFY,
            handler(e) {
                let {
                    socket: t,
                    args: { quest_id: n },
                } = e;
                (0, AK.lG)(t.transport);
                let i = (0, AK.D2)(t.application),
                    r = it.A.getQuest(n),
                    a = (0, Az.TP)(r);
                if (null == r || null == a || a !== i)
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, `Quest not found: ${n}`);
                return {
                    quest_id: n,
                    is_enrolled: r.userStatus?.enrolledAt != null,
                    enrolled_at: r.userStatus?.enrolledAt ?? null,
                };
            },
        },
        [D.e$_.QUEST_START_TIMER]: {
            scope: A1.F.IDENTIFY,
            handler(e) {
                let {
                    socket: t,
                    args: { quest_id: n },
                } = e;
                (0, AK.lG)(t.transport);
                let i = (0, AK.D2)(t.application),
                    r = it.A.getQuest(n),
                    a = (0, Az.vS)(r);
                if (null == r || null == a || a !== i)
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, `Quest not found: ${n}`);
                if (r.userStatus?.enrolledAt == null)
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "User is not enrolled in quest");
                return (
                    ec.default.track(D.HAw.RPC_QUEST_START_TIMER_CALLED, { application_id: i, quest_id: n }),
                    q.h.dispatch({ type: "QUEST_APPLICATION_START_TIMER", questId: n, applicationId: i }),
                    { success: !0 }
                );
            },
        },
        [D.e$_.GET_QUESTS]: {
            scope: A1.F.IDENTIFY,
            handler(e) {
                let { socket: t } = e;
                (0, AK.lG)(t.transport);
                let n = (0, AK.D2)(t.application);
                return {
                    quests: (0, io.jm)(it.A.quests, n, !0)
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
    hF = {
        [D.e$_.GET_RELATIONSHIPS]: A7(D.e$_.GET_RELATIONSHIPS, {
            scope: { [ds.sm.ANY]: [A1.F.RELATIONSHIPS_READ] },
            handler(e) {
                if (c_.zy(c_.iu(e.socket.application.flags ?? 0), c_.iu(D.gfo.DISABLE_RELATIONSHIPS_ACCESS)))
                    throw new he.A({ errorCode: D.Lw6.INVALID_PERMISSIONS }, "Missing Permissions");
                let t = [];
                for (let [n, i] of eZ.A.getMutableRelationships().entries()) {
                    if (i === D.eA$.NONE) continue;
                    let r = i_.default.getUser(n);
                    if (null == r) continue;
                    let a = (0, AK.Gc)(i, r);
                    t.push((0, AK.LP)(a, e.socket.application.id));
                }
                return { relationships: t };
            },
        }),
    };
var hH = n(599026),
    hB = n(182892),
    hY = n(375802);
let h$ = ["1402418171662569542"],
    hz = {
        [D.e$_.SET_ACTIVITY]: {
            scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.RPC_ACTIVITIES_WRITE, ds.hj] },
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({
                        pid: e.number().min(0),
                        activity: hl(e)
                            .keys({
                                name: e.string().min(1).max(128),
                                state: e.string().min(2).max(128),
                                state_url: e.string().uri().min(1).max(256),
                                details: e.string().min(2).max(128),
                                details_url: e.string().uri().min(1).max(256),
                                timestamps: hl(e).keys({ start: e.number().min(1), end: e.number().min(1) }),
                                assets: hl(e).keys({
                                    large_image: e.string().min(1).max(300),
                                    large_text: e.string().min(2).max(128),
                                    large_url: e.string().uri().min(1).max(256),
                                    small_image: e.string().min(1).max(300),
                                    small_text: e.string().min(2).max(128),
                                    small_url: e.string().uri().min(1).max(256),
                                    invite_cover_image: e.string().min(1).max(300),
                                }),
                                party: hl(e).keys({
                                    id: e.string().min(2).max(128),
                                    size: e.array().items(e.number().min(0)).length(2),
                                    privacy: e.number().default(D.KIY.PRIVATE).valid([D.KIY.PRIVATE, D.KIY.PUBLIC]),
                                }),
                                secrets: hl(e).keys({
                                    match: e.string().min(2).max(128),
                                    join: e.string().min(2).max(128),
                                    spectate: e.string().min(2).max(128),
                                }),
                                buttons: e
                                    .array()
                                    .items(
                                        hl(e).keys({
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
                                    .default(D.$pd.PLAYING)
                                    .valid(D.$pd.PLAYING, D.$pd.LISTENING, D.$pd.WATCHING, D.$pd.COMPETING),
                                status_display_type: e.number().optional().valid(hH.A.NAME, hH.A.STATE, hH.A.DETAILS),
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
                if (![ds.z4.IPC, ds.z4.WEBSOCKET, ds.z4.POST_MESSAGE].includes(n.transport))
                    throw new he.A(
                        { errorCode: D.Lw6.INVALID_COMMAND },
                        `command not available from "${n.transport}" transport`,
                    );
                if (null == i && ds.z4.IPC === n.transport)
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "nonzero pid required");
                if (null == r)
                    return (
                        q.h.dispatch({ type: "LOCAL_ACTIVITY_UPDATE", socketId: n.id, pid: i, activity: r }),
                        Promise.resolve(r)
                    );
                let l = {};
                r.name || (r.name = n.application.name);
                let s = n.application.id;
                r.application_id = s;
                let o = n.transport === ds.z4.POST_MESSAGE;
                r.platform = o ? D.yTV.EMBEDDED : D.yTV.DESKTOP;
                let d = i$.A.getApplication(s ?? void 0),
                    c = r.instance ?? !1,
                    u = r.party?.privacy;
                delete r.instance, delete r.party?.privacy;
                let _ = (0, hB.E)(r, c, o, null != d && (0, hY.x)(d) && o, u);
                _ > 0 && (r.flags = _);
                let { assets: A, party: h, secrets: E, timestamps: p, buttons: m, type: I } = r;
                if ((null == I && (r.type = D.$pd.PLAYING), null != E)) {
                    let e = eU()
                        .values(E)
                        .filter((e) => !!e);
                    if (null != h && eU().intersection(e, [h.id]).length > 0 && !h$.includes(n.application.id))
                        throw new he.A(
                            { errorCode: D.Lw6.INVALID_ACTIVITY_SECRET },
                            "secrets cannot match the party id",
                        );
                    if (eU().uniq(e).length < e.length)
                        throw new he.A({ errorCode: D.Lw6.INVALID_ACTIVITY_SECRET }, "secrets must be unique");
                    if (null != m)
                        throw new he.A(
                            { errorCode: D.Lw6.INVALID_ACTIVITY_SECRET },
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
                            (p[e] = Math.floor(p[e] * eu.A.Millis.SECOND));
                if (null == A) t = Promise.resolve([]);
                else {
                    if (null == n.application || null == n.application.id) throw Error();
                    t = (0, iN.RG)(n.application.id, [A.large_image, A.small_image, A.invite_cover_image]);
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
                    q.h.dispatch({
                        type: "LOCAL_ACTIVITY_UPDATE",
                        socketId: n.id,
                        pid: i,
                        activity: r,
                        partyPrivacy: u,
                    });
                    let { secrets: o, party: d } = r,
                        c = {
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
                        null != o && ((c.has_match_secret = !!o.match), (c.has_join_secret = !!o.join)),
                        null != A && (c.has_images = !!(A.large_image || A.small_image || A.invite_cover_image)),
                        null != d &&
                            ((c.party_max = null != d.size && d.size[1] > 0 ? d.size[1] : void 0), (c.party_id = d.id)),
                        ec.default.track(D.HAw.ACTIVITY_UPDATED, c),
                        r
                    );
                });
            },
        },
    },
    hW = {
        [A2.e$.SET_ORIENTATION_LOCK_STATE]: {
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({
                        lock_state: e.number().valid(A0.N7.UNLOCKED, A0.N7.PORTRAIT, A0.N7.LANDSCAPE).required(),
                        picture_in_picture_lock_state: e
                            .number()
                            .valid(A0.N7.UNLOCKED, A0.N7.PORTRAIT, A0.N7.LANDSCAPE)
                            .allow(null)
                            .optional(),
                        grid_lock_state: e
                            .number()
                            .valid(A0.N7.UNLOCKED, A0.N7.PORTRAIT, A0.N7.LANDSCAPE)
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
                    q.h.dispatch({
                        type: "FRAME_SET_ORIENTATION_LOCK_STATE",
                        applicationId: a,
                        lockState: n,
                        pictureInPictureLockState: i,
                    }),
                        q.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
                            applicationId: a,
                            lockState: n,
                            pictureInPictureLockState: i,
                            gridLockState: r,
                        });
                else throw new he.A({ errorCode: A2.Lw.INVALID_COMMAND }, "No application.");
            },
        },
    };
var hK = n(796774),
    hq = n(209932),
    hX = n(807348),
    hZ = n(693806);
let hQ = {
    [A2.e$.GET_SOUNDBOARD_SOUNDS]: {
        scope: { [ds.sm.ANY]: [A1.F.RPC, ds.hj] },
        async handler() {
            await (0, hK.E7)();
            let e = hq.A.getSounds(),
                t = [];
            return e.forEach((e) => e.forEach((e) => t.push((0, hX.A2)(e)))), t;
        },
    },
    [A2.e$.PLAY_SOUNDBOARD_SOUND]: {
        scope: { [ds.sm.ALL]: [A1.F.RPC, A1.F.RPC_VOICE_WRITE] },
        validation: (e) => hl(e).required().keys({ guild_id: e.string(), sound_id: e.string() }),
        async handler(e) {
            let {
                args: { guild_id: t, sound_id: n },
            } = e;
            await (0, hK.E7)();
            let i = i_.default.getCurrentUser(),
                r = hq.A.getSound(t, n),
                a = (0, hZ.A)(),
                l = null != r && null != i && (0, ot.Ir)(i, r, a);
            if (null == a) throw new he.A({ errorCode: A2.Lw.INVALID_CHANNEL }, "Invalid Channel.");
            if (l)
                if ((0, s4.Ay)(a)) null != r && (0, ot.Ak)(r, a.id, [eg.A.RPC]);
                else throw new he.A({ errorCode: A2.Lw.INVALID_PERMISSIONS }, "Invalid Permissions.");
            else throw new he.A({ errorCode: A2.Lw.INVALID_SOUND }, "Invalid Sound.");
        },
    },
};
var hJ = n(339048),
    h0 = n(830382),
    h1 = n(800342),
    h2 = n(143582);
function h6(e) {
    if (ds.z4.IPC !== e && ds.z4.POST_MESSAGE !== e)
        throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Invalid transport.");
}
async function h5(e, t) {
    let n = t.filter((e) => e.type === D.Puh.SUBSCRIPTION_GROUP),
        i = await Promise.all(n.map(async (t) => await (0, h2.vz)(e, t.id))),
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
                        price: { amount: r, currency: D.Yri.USD },
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
async function h3(e) {
    let { socket: t } = e;
    h6(t.transport);
    let n = t.application.id;
    if (null == n) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
    if ((0, ha.F)(n)) {
        let e = await h0.O1(n, !1),
            t = await h5(n, e);
        return [...e.filter((e) => null != e.price), ...t];
    }
    let i = await h1.JI(n);
    return [
        ...i
            .filter((e) => e.sku.type !== D.Puh.SUBSCRIPTION_GROUP)
            .map((e) => e.sku)
            .filter((e) => null != e.price),
        ...(await h5(
            n,
            i.map((e) => e.sku),
        )),
    ];
}
function h4(e) {
    let { socket: t } = e;
    h6(t.transport);
    let n = t.application.id;
    if (null == n) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
    return hJ.LM(n);
}
let h8 = {
    [D.e$_.GET_SKUS]: { [ds.sm.ANY]: [ds.VH, ds.hj], handler: h3 },
    [D.e$_.GET_ENTITLEMENTS]: { [ds.sm.ANY]: [ds.VH, ds.hj], handler: h4 },
    [D.e$_.GET_SKUS_EMBEDDED]: { [ds.sm.ANY]: [ds.VH, ds.hj], handler: async (e) => ({ skus: await h3(e) }) },
    [D.e$_.GET_ENTITLEMENTS_EMBEDDED]: {
        [ds.sm.ANY]: [ds.VH, ds.hj],
        handler: async (e) => ({ entitlements: await h4(e) }),
    },
};
n(142703);
var h7 = n(722306);
let h9 = {
    [D.e$_.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: i, args: r } = e,
                a = t.events[i];
            if (null == a) throw new he.A({ errorCode: D.Lw6.INVALID_EVENT }, `Invalid event: ${i}`);
            if (!(0, h7.A)(n.authorization.scopes, a.scope))
                throw new he.A({ errorCode: D.Lw6.INVALID_PERMISSIONS }, "Not authenticated or invalid scope");
            if (
                (ec.default.track(D.HAw.RPC_SUBSCRIPTION_REQUESTED, {
                    event: i,
                    scope: "object" == typeof a.scope ? JSON.stringify(a.scope) : a.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString(),
                }),
                null != a.validation)
            ) {
                let e = await t.getJoi();
                if (null != e.validate(r, a.validation(e), { convert: !1 }).error)
                    throw new he.A({ errorCode: D.Lw6.INVALID_PAYLOAD }, "Invalid subscription parameters provided");
            }
            let l = a.handler({ args: r, socket: n }),
                s = (function (e, t, n) {
                    switch (t) {
                        case D.ZE4.ACTIVITY_PIP_MODE_UPDATE: {
                            let t = e.application?.id,
                                n = null != t ? rv.Ay.getLayoutModeForApp(t) : null;
                            return null != n ? { is_pip_mode: n !== A0.bN.FOCUSED } : null;
                        }
                        case D.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE: {
                            let t = e.application?.id,
                                n = null != t ? rv.Ay.getLayoutModeForApp(t) : null;
                            return null != n ? { layout_mode: n } : null;
                        }
                        case D.ZE4.FRAME_LAYOUT_MODE_UPDATE: {
                            let t = null != e.application?.id ? tx.A.getConnectedFrame()?.layoutMode : null;
                            return null != t ? { layout_mode: t } : null;
                        }
                        case D.ZE4.THERMAL_STATE_UPDATE: {
                            let e = A$();
                            if (e === AY.UNHANDLED) return null;
                            return { thermal_state: e };
                        }
                        case D.ZE4.ORIENTATION_UPDATE:
                            return null;
                        case D.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
                            return AQ();
                        case D.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE: {
                            let { quest_id: t } = n;
                            if (!t) return null;
                            let i = it.A.getQuest(t),
                                r = (0, Az.TP)(i);
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
    [D.e$_.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: i, args: r } = e;
            if (null == t.events[i]) throw new he.A({ errorCode: D.Lw6.INVALID_EVENT }, `Invalid event: ${i}`);
            return t.removeSubscription(n, i, r), { evt: i };
        },
    },
};
var Ee = n(773669);
let Et = { [D.e$_.USER_SETTINGS_GET_LOCALE]: { scope: A1.F.IDENTIFY, handler: () => ({ locale: Ee.default.locale }) } },
    En = {
        [D.e$_.GET_USER]: A7(D.e$_.GET_USER, {
            scope: { [ds.sm.ANY]: [ds.W_, ds.hj] },
            handler(e) {
                let {
                        args: { id: t },
                    } = e,
                    n = i_.default.getUser(t);
                return null == n ? null : (0, AZ.A)(n);
            },
        }),
    },
    Ei = {
        ...hs,
        ...ho,
        ...hu,
        ...h_,
        ...hA,
        ...hp,
        ...hT,
        ...hP,
        ...hx,
        ...hw,
        ...hk,
        ...hF,
        ...hz,
        ...hW,
        ...h8,
        ...h9,
        ...En,
        ...Et,
        ...hM,
        ...hQ,
        ...hn,
        ...hV,
    };
var Er = n(52133),
    Ea = n(821956);
let El = (e) => hl(e).required().keys({ channel_id: e.string().required() });
function Es(e) {
    let {
            args: { channel_id: t },
            socket: n,
        } = e,
        i = i7.A.getChannel(t);
    if (null == i || !(0, AK.B_)(i, n.application.id, n.authorization.scopes))
        throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
    if ((0, en.$v)(i)) throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid nsfw channel id: ${i.id}`);
}
let Eo = (e) => hl(e).keys({ channel_id: e.string().allow(null) });
function Ed(e) {
    let {
        args: { channel_id: t },
    } = e;
    if (null != t && null == i7.A.getChannel(t))
        throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
}
let Ec = {
    [D.ZE4.GUILD_STATUS]: {
        scope: A1.F.RPC,
        validation: (e) => hl(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            if (null == rU.A.getGuild(t)) throw new he.A({ errorCode: D.Lw6.INVALID_GUILD }, `Invalid guild id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = rU.A.getGuild(t);
                if (null == r) return;
                let a = { guild: { id: r.id, name: r.name, icon_url: (0, J.Iv)(r, 128) ?? null }, online: 0 };
                return eU().isEqual(n, a) || i(a), a;
            };
        },
    },
    [D.ZE4.VOICE_STATE_CREATE]: {
        scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.RPC_VOICE_READ] },
        validation: (e) => hl(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == i7.A.getChannel(t))
                throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = i7.A.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    l = Object.values(rF.A.getVoiceStatesForChannel(r.id));
                return (
                    n &&
                        eU()
                            .differenceBy(l, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => i((0, AK.qG)(a, r.id, e))),
                    l
                );
            };
        },
    },
    [D.ZE4.VOICE_STATE_DELETE]: {
        scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.RPC_VOICE_READ] },
        validation: (e) => hl(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == i7.A.getChannel(t))
                throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = i7.A.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    l = Object.values(rF.A.getVoiceStatesForChannel(r.id));
                return (
                    eU()
                        .differenceBy(n, l, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => i((0, AK.qG)(a, r.id, e))),
                    l
                );
            };
        },
    },
    [D.ZE4.VOICE_STATE_UPDATE]: {
        scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.RPC_VOICE_READ] },
        validation: (e) => hl(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == i7.A.getChannel(t))
                throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = i7.A.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    l = Object.values(rF.A.getVoiceStatesForChannel(r.id)).map((e) => (0, AK.qG)(a, r.id, e));
                return (
                    eU()
                        .differenceWith(l, n, eU().isEqual)
                        .forEach((e) => i(e)),
                    l
                );
            };
        },
    },
    [D.ZE4.VOICE_CONNECTION_STATUS]: {
        scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.RPC_VOICE_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = {
                    state: (0, AK.SK)(e3.A.getState()),
                    hostname: e3.A.getHostname(),
                    pings: e3.A.getPings(),
                    average_ping: e3.A.getAveragePing(),
                    last_ping: e3.A.getLastPing(),
                };
            return eU().isEqual(i, t) || n(i), i;
        },
    },
    [D.ZE4.MESSAGE_CREATE]: { scope: A1.F.RPC, validation: El, handler: Es },
    [D.ZE4.MESSAGE_UPDATE]: { scope: A1.F.RPC, validation: El, handler: Es },
    [D.ZE4.MESSAGE_DELETE]: { scope: A1.F.RPC, validation: El, handler: Es },
    [D.ZE4.SPEAKING_START]: {
        scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.RPC_VOICE_READ, ds.hj] },
        validation: Eo,
        handler: Ed,
    },
    [D.ZE4.SPEAKING_STOP]: {
        scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.RPC_VOICE_READ, ds.hj] },
        validation: Eo,
        handler: Ed,
    },
    [D.ZE4.GUILD_CREATE]: { scope: A1.F.RPC, handler() {} },
    [D.ZE4.CHANNEL_CREATE]: { scope: A1.F.RPC, handler() {} },
    [D.ZE4.GAME_JOIN]: { scope: { [ds.sm.ANY]: [A1.F.RPC, ds.hj] }, handler() {} },
    [D.ZE4.GAME_SPECTATE]: { scope: { [ds.sm.ANY]: [A1.F.RPC, ds.hj] }, handler() {} },
    [D.ZE4.ACTIVITY_JOIN]: { scope: { [ds.sm.ANY]: [A1.F.RPC, ds.VH, ds.hj] }, handler() {} },
    [D.ZE4.ACTIVITY_JOIN_REQUEST]: { scope: { [ds.sm.ANY]: [A1.F.RPC, ds.hj] }, handler() {} },
    [D.ZE4.ACTIVITY_SPECTATE]: { scope: { [ds.sm.ANY]: [A1.F.RPC, ds.VH, ds.hj] }, handler() {} },
    [D.ZE4.ACTIVITY_INVITE]: { scope: { [ds.sm.ANY]: [A1.F.RPC, ds.hj] }, handler() {} },
    [D.ZE4.ACTIVITY_PIP_MODE_UPDATE]: { scope: void 0, handler() {} },
    [D.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE]: { scope: void 0, handler() {} },
    [D.ZE4.FRAME_LAYOUT_MODE_UPDATE]: { scope: void 0, handler() {} },
    [D.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        scope: AJ,
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = AQ();
            return eU().isEqual(i, t) || n(i), i;
        },
    },
    [D.ZE4.THERMAL_STATE_UPDATE]: { scope: { [ds.sm.ANY]: [ds.VH] }, handler() {} },
    [D.ZE4.ORIENTATION_UPDATE]: { scope: { [ds.sm.ANY]: [ds.VH] }, handler() {} },
    [D.ZE4.VOICE_CHANNEL_SELECT]: { scope: A1.F.RPC, handler() {} },
    [D.ZE4.NOTIFICATION_CREATE]: { scope: { [ds.sm.ALL]: [A1.F.RPC, A1.F.RPC_NOTIFICATIONS_READ] }, handler() {} },
    [D.ZE4.RELATIONSHIP_UPDATE]: {
        scope: A1.F.RELATIONSHIPS_READ,
        handler(e) {
            let { socket: t } = e;
            if (c_.zy(c_.iu(t.application.flags ?? 0), c_.iu(D.gfo.DISABLE_RELATIONSHIPS_ACCESS)))
                throw new he.A({ errorCode: D.Lw6.INVALID_PERMISSIONS }, "Missing Permissions");
        },
    },
    [D.ZE4.CURRENT_USER_UPDATE]: {
        scope: { [ds.sm.ANY]: [ds.hj, A1.F.IDENTIFY] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { currentUser: i_.default.getCurrentUser() };
            return null == i.currentUser || (null != t && (0, Er.A)(i, t)) || n((0, AZ.A)(i.currentUser)), i;
        },
    },
    [D.ZE4.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: { [ds.sm.ALL]: [A1.F.IDENTIFY, A1.F.GUILDS_MEMBERS_READ] },
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = { currentGuildMember: l0.Ay.getSelfMember(t) };
                return (
                    null == r.currentGuildMember ||
                        (null != n && (0, Er.A)(r, n)) ||
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
                                    avatar_decoration_data: (0, Ea.Xq)(a),
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
    [D.ZE4.ENTITLEMENT_CREATE]: { scope: { [ds.sm.ANY]: [ds.hj, ds.VH] }, handler() {} },
    [D.ZE4.ENTITLEMENT_DELETE]: { scope: { [ds.sm.ANY]: [ds.hj, ds.VH] }, handler() {} },
    [D.ZE4.SCREENSHARE_STATE_UPDATE]: {
        scope: { [ds.sm.ALL]: [ds.hj, A1.F.RPC_SCREENSHARE_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = oN.A.getStreamerActiveStreamMetadata(),
                r = i?.pid != null ? eT.Ay.getGameForPID(i.pid) : null,
                a = r?.id != null ? i$.A.getApplication(r.id) : null,
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
            return eU().isEqual(o, t) || n(o), o;
        },
    },
    [D.ZE4.VIDEO_STATE_UPDATE]: {
        scope: { [ds.sm.ALL]: [ds.hj, A1.F.RPC_VIDEO_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { active: eS.Ay.isVideoEnabled() };
            return eU().isEqual(i, t) || n(i), i;
        },
    },
    [D.ZE4.AUTHORIZE_REQUEST]: { scope: void 0, handler() {} },
};
var Eu = n(289919);
let E_ = {
        [D.ZE4.OVERLAY_UPDATE]: {
            scope: ds.hj,
            handler(e) {
                let {
                    args: { pid: t },
                    socket: n,
                } = e;
                if ("number" != typeof t || t < 10) throw new he.A({ errorCode: D.Lw6.INVALID_EVENT }, "Invalid pid");
                return (e) => {
                    let { prevState: i, dispatch: r } = e,
                        a = _P.default.enabled,
                        l = !0,
                        s = n.application.id;
                    if (null != s) {
                        let e = rG.A.getActiveLibraryApplication(s);
                        null != e && (a = a && e.isOverlayEnabled()), (l = cb.default.isLocked(t));
                    }
                    let o = { enabled: a, locked: l };
                    return eU().isEqual(o, i) || r(o), o;
                };
            },
        },
    },
    EA = {
        [D.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE]: {
            scope: A1.F.IDENTIFY,
            validation: (e) => hl(e).required().keys({ quest_id: e.string().required() }),
            handler: function (e) {
                let {
                        args: { quest_id: t },
                        socket: n,
                    } = e,
                    i = it.A.getQuest(t),
                    r = (0, Az.TP)(i);
                if (null == i || null == r || r !== n.application.id)
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, `Quest not found: ${t}`);
            },
        },
    };
var Eh = n(546983);
let EE =
    ((u = Eh.l6),
    (_ = Eh.Au),
    {
        [D.ZE4.VOICE_SETTINGS_UPDATE]: {
            scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.RPC_VOICE_READ] },
            handler: () => (e) => {
                let { prevState: t, dispatch: n } = e,
                    i = u();
                return eU().isEqual(i, t) || n(i), i;
            },
        },
        [D.ZE4.VOICE_SETTINGS_UPDATE_2]: {
            scope: ds.hj,
            handler(e) {
                let { socket: t } = e;
                return (e) => {
                    let { prevState: n, dispatch: i } = e;
                    if (null == t.application.id) return n;
                    let r = _(t.application.id);
                    return eU().isEqual(r, n) || i(r), r;
                };
            },
        },
    });
var Ep = n(298990),
    Em = n(334738),
    EI = n(181658);
function Eg(e, t) {
    return null != e.application_id && null == t.getApplicationActivity(e.application_id, !1);
}
var EC = n(293588),
    Ef = n(383233),
    ET = n(998218),
    EN = n(475815);
async function ES(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        a = rj.A.getApplicationActivity(t);
    if (null == a || null == a.secrets || !(0, AK.px)(i, a.party, a.secrets))
        throw new he.A(
            { errorCode: D.Lw6.NO_ELIGIBLE_ACTIVITY },
            "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
        );
    let l = Eg(a, rV.A);
    if (l) {
        let { lock: t } = (0, Eh.d5)(e);
        return (0, Ep.qf)(a, l).then(() => {
            throw (
                (t(),
                new he.A(
                    { errorCode: D.Lw6.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure user does have have privacy enabled.",
                ))
            );
        });
    }
    await ry.A.sendActivityInviteUser({ userId: n, type: i, activity: a, content: r, location: "In-Game Invite" });
}
let EL = {
    [D.e$_.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: { [ds.sm.ANY]: [A1.F.RPC, ds.hj] },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: i },
                } = e,
                r = t.application.id;
            if (null == r) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            return ES(i, r, n, D.xL.JOIN);
        },
    },
    [D.e$_.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: { [ds.sm.ANY]: [A1.F.RPC, ds.hj] },
        handler(e) {
            let {
                    args: { user_id: t },
                } = e,
                n = i7.A.getDMFromUserId(t);
            null != n &&
                (0, Em.ack)(
                    n,
                    {
                        section: D.JJy.CLOSE_ACTIVITY_JOIN_REQUEST_RPC_COMMAND,
                        object: D.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                        objectType: D.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                );
        },
    },
    [D.e$_.ACTIVITY_INVITE_USER]: {
        scope: { [ds.sm.ANY]: [A1.F.RPC, ds.hj] },
        validation: (e) =>
            hl(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([D.xL.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, content: r, pid: a },
                } = e,
                l = t.application.id;
            if (null == l) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            return ES(a, l, i, n, r);
        },
    },
    [D.e$_.ACCEPT_ACTIVITY_INVITE]: {
        scope: { [ds.sm.ANY]: [A1.F.RPC, ds.hj] },
        validation: (e) =>
            hl(e)
                .required()
                .keys({
                    type: e.number().required().valid([D.xL.JOIN]),
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
                o = t.transport === ds.z4.IPC ? (s ?? t.application.id) : t.application.id;
            if (null == o) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            let d = Promise.resolve(!1);
            return (
                n === D.xL.JOIN &&
                    (d = rb.Ay.join({ userId: i, sessionId: r, applicationId: o, channelId: a, messageId: l })),
                d.then((e) => {
                    if (!e) throw new he.A({ errorCode: D.Lw6.INVALID_INVITE }, "Invite is expired or invalid.");
                })
            );
        },
    },
    [D.e$_.OPEN_INVITE_DIALOG]: {
        scope: { [ds.sm.ANY]: [A1.F.RPC, ds.hj, ds.VH] },
        handler(e) {
            let { socket: t } = e,
                i = t.application;
            if (null == i.id) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            let { channel: r, guild: a, frame: l } = hf(),
                s = (0, hO.Ay)({ application: t.application, channelId: r?.id }),
                o = null != s ? eN.A.getWindow(s) : void 0;
            o?.closed && (o = void 0);
            let d = null != o ? D.BRT.POPOUT : D.BRT.APP;
            if (((0, EN.sP)({}, o?.document), null != l)) {
                if (l.applicationId !== i.id)
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Application is not currently mounted.");
                let e = rj.A.getApplicationActivity(i.id);
                if (null != e) (0, Ep.qf)(e, !1, d);
                else
                    throw new he.A(
                        { errorCode: D.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity was set using setActivity.",
                    );
            } else
                (0, f.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("28136"), n.e("22547"), n.e("50441")]).then(
                            n.bind(n, 1310),
                        );
                        return (t) =>
                            (0, E.jsx)(e, {
                                ...t,
                                guild: a,
                                channel: r,
                                applicationId: i.id,
                                analyticsLocation: D.ThZ.ACTIVITY_RPC,
                                source: D.PE1.ACTIVITY_INVITE,
                            });
                    },
                    { contextKey: d === D.BRT.POPOUT ? hL.KX : hL.SY },
                );
        },
    },
    [D.e$_.INITIATE_IMAGE_UPLOAD]: A7(D.e$_.INITIATE_IMAGE_UPLOAD, {
        scope: { [ds.sm.ANY]: [A1.F.RPC, ds.hj, ds.VH] },
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            let i = ht()?.id;
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n;
                    if ((0, hS.f)()) n = eN.A.getWindow(D.MLl.ACTIVITY_POPOUT);
                    else {
                        let e = eL.A.getLastFocusedWindowId();
                        n = null == e ? null : (0, s6.Iy)(e)?.renderWindow;
                    }
                    if (null == n) throw new he.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, "No valid window found");
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
                        (0, rt.Vq)(i.files) && e(i.files[0]), r();
                    }),
                        i.addEventListener("cancel", () => {
                            r();
                        }),
                        n.document.body.addEventListener("focus", r, !0),
                        n.document.body.appendChild(i),
                        i.click();
                })(
                    async (r) => {
                        let a = await (0, tV.CS)(n, i, r);
                        (0, rt.Vq)(a) && (0, rt.Vq)(a.url) && !(a instanceof EI.A) ? e({ image_url: a.url }) : t(a);
                    },
                    () => t(Error("Upload canceled")),
                );
            }).catch((e) => {
                throw new he.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, e?.message ?? "Failed to upload image");
            });
        },
    }),
    [D.e$_.OPEN_SHARE_MOMENT_DIALOG]: A7(D.e$_.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [ds.sm.ANY]: [ds.VH] },
        handler(e) {
            let {
                socket: t,
                args: { mediaUrl: i },
            } = e;
            (0, AK.lG)(t.transport);
            let r = t.application.id;
            if (null == r) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            if (!(0, A9.n)(t.application, D.gfo.EMBEDDED))
                throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let a = ht();
            if (!ET.A.isDiscordCdnUrl(i))
                throw new he.A({ errorCode: D.Lw6.INVALID_PAYLOAD }, "mediaUrl must be a Discord CDN url");
            !(function (e) {
                let { applicationId: t, channelId: i, mediaUrl: r } = e,
                    a = i$.A.getApplication(t),
                    l = null != (0, hO.Ay)({ application: a, channelId: i }) ? hL.KX : hL.SY;
                (0, f.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("96758"), n.e("27797")]).then(n.bind(n, 190930));
                        return (n) => (0, E.jsx)(e, { applicationId: t, mediaUrl: r, ...n });
                    },
                    { modalKey: "activity-share-moment-modal", contextKey: l },
                );
            })({ applicationId: r, channelId: a?.id, mediaUrl: i });
        },
    }),
    [D.e$_.SHARE_INTERACTION]: A7(D.e$_.SHARE_INTERACTION, {
        scope: { [ds.sm.ANY]: [ds.VH, ds.hj] },
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
                c = n.application.id;
            if (null == c) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            if (!A0.mO.includes(c)) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Unsupported application.");
            if (!(0, A9.n)(n.application, D.gfo.EMBEDDED))
                throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let u = ht();
            if (null == u && l) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No channel found");
            if (null !== r || null !== a || null !== s) {
                let e = [];
                void 0 !== r &&
                    (e = [
                        {
                            id: l2.default.cast(l2.default.fromTimestamp(Date.now())),
                            size: 0,
                            proxy_url: r.url,
                            filename: "preview",
                            url: r.url,
                            height: r.height,
                            width: r.width,
                        },
                    ]),
                    (t = new Ef.Ay({
                        id: l2.default.cast(l2.default.fromTimestamp(Date.now())),
                        applicationId: c,
                        content: s,
                        components: a,
                        attachments: e,
                    }));
            }
            return new Promise((e) => {
                let n = !1,
                    r = (0, Eh.d5)(d),
                    a = hL.SY;
                (eN.A.getWindowOpen(D.MLl.ACTIVITY_POPOUT) || r.context === D.BRT.POPOUT) && (a = hL.KX),
                    (0, EC.m)({
                        applicationId: c,
                        channel: u,
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
var EO = n(469778);
let Ey = 10 * eu.A.Millis.SECOND,
    Eb = {
        [D.e$_.VALIDATE_APPLICATION]: {
            scope: ds.hj,
            handler(e) {
                let { socket: t } = e,
                    i = t.application.id;
                try {
                    var r;
                    let e;
                    if (null == i) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                    let t = i$.A.getApplication(i);
                    if (null == t) throw new he.A({ errorCode: D.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    let n = t.primarySkuId;
                    if (null == n) throw new he.A({ errorCode: D.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    return Promise.race([
                        ((r = t.id),
                        (e = EO.A.isEntitledToSku(i_.default.getCurrentUser(), n, r)),
                        null != e
                            ? Promise.resolve(e)
                            : (0, hJ.LM)(r).then(
                                  () => !0 === EO.A.isEntitledToSku(i_.default.getCurrentUser(), n, r),
                              )).then((e) => {
                            if (!e)
                                throw new he.A(
                                    { errorCode: D.Lw6.INVALID_ENTITLEMENT },
                                    "User does not have entitlement.",
                                );
                        }),
                        (0, ed.BK)(Ey).then(() => {
                            throw new he.A({ errorCode: D.Lw6.INVALID_ENTITLEMENT }, "Timed out fetching entitlement.");
                        }),
                    ]);
                } catch (e) {
                    throw (
                        (e.code === D.Lw6.INVALID_ENTITLEMENT &&
                            (eJ.Ay.focus(null, !0),
                            (0, f.openModalLazy)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, E.jsx)(e, { ...t, applicationId: i });
                            })),
                        e)
                    );
                }
            },
        },
        [D.e$_.GET_ENTITLEMENT_TICKET]: {
            scope: ds.hj,
            handler(e) {
                let { socket: t } = e,
                    i = t.application.id;
                if (null == i) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                return hi.Bo.post({
                    url: D.Rsh.ENTITLEMENT_TICKET(i),
                    body: { test_mode: (0, ha.F)(i) },
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
                            (eJ.Ay.focus(null, !0),
                            (0, f.openModalLazy)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, E.jsx)(e, { ...t, applicationId: i });
                            }),
                            e)
                        );
                    });
            },
        },
    };
var Ev = n(200330),
    ER = n(321987),
    EP = n(595244),
    ED = n(488428),
    Ex = n(485845),
    Ew = n(898467),
    EM = n(224750),
    EU = n(716965),
    EG = n(671523),
    Ej = n(337095),
    Ek = n(395671),
    EV = n(488926);
let EF = "CachedTokens",
    EH = { "1273616940451102832": new Ew.A(2, +eu.A.Millis.MINUTE) };
async function EB(e, t, n) {
    let i,
        r,
        a,
        l,
        s,
        {
            client_id: o,
            response_type: d = "code",
            redirect_uri: c,
            code_challenge: u,
            code_challenge_method: _,
            state: A,
            nonce: h,
            scope: E,
            permissions: p,
            guild_id: m,
            channel_id: I,
            prompt: g,
            disable_guild_select: C,
            integration_type: f,
            pid: T,
            signal: N,
            isSocketRpcPrivateScope: S,
        } = e;
    if (N?.aborted) throw new he.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, "Request aborted");
    if (null == o) throw new he.A({ errorCode: D.Lw6.OAUTH2_ERROR }, "No Client ID provided");
    if (!S && null != c)
        throw new he.A(
            { errorCode: D.Lw6.OAUTH2_ERROR },
            "Redirect URI cannot be used in the RPC OAuth2 Authorization flow",
        );
    let L = [];
    if (
        ("string" == typeof E ? (L = E.split(" ").filter((e) => e.length > 0)) : Array.isArray(E) && (L = E),
        null == i_.default.getCurrentUser())
    )
        throw new he.A({ errorCode: D.Lw6.OAUTH2_ERROR }, "Client is not logged in");
    if (null != f) r = Number(f);
    else {
        let e = (e) => (0, A9.n)(e, D.gfo.EMBEDDED) && e?.integrationTypesConfig?.[Ex.b.USER_INSTALL] != null,
            t = i$.A.getApplication(o);
        r = e(t) || e((t = Ek.Ay.createFromServer(await (0, Ej.TA)(o, N)))) ? Ex.b.USER_INSTALL : Ex.b.GUILD_INSTALL;
    }
    try {
        [a, { disclosures: l, allAcked: s }] = await Promise.all([
            (0, EU.qY)({
                clientId: o,
                scopes: L,
                responseType: d,
                redirectUri: c,
                codeChallenge: u,
                codeChallengeMethod: _,
                state: A,
                integrationType: r,
                signal: N,
            }),
            (0, EM.vG)(o),
        ]);
    } catch (t) {
        let { body: e } = t;
        throw new he.A(
            { errorCode: D.Lw6.OAUTH2_ERROR },
            `OAuth2 Authorization Error: ${e?.message || "Unknown Error"}`,
        );
    }
    if (g === EG.l.NONE && null != a && a.authorized && s)
        try {
            return (
                await (0, EU.Gq)({
                    authorize: !0,
                    clientId: o,
                    scopes: L,
                    responseType: d,
                    redirectUri: c,
                    codeChallenge: u,
                    codeChallengeMethod: _,
                    state: A,
                    nonce: h,
                    integrationType: r,
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new he.A(
                { errorCode: D.Lw6.OAUTH2_ERROR },
                `OAuth2 Authorize Error: ${e?.message || "Unknown Error"}`,
            );
        }
    n?.(a.application, I, T);
    let O = EV.x3;
    try {
        O = c_.iu(p ?? 0);
    } catch (e) {}
    if (
        (null != a.integration_type &&
            Object.values(Ex.b).includes(a.integration_type) &&
            (i = new Map()).set(a.integration_type, a),
        null != EH[a.application.id] && (await EH[a.application.id].process(), N?.aborted))
    )
        throw new he.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, "Request aborted");
    return t({
        clientId: o,
        authorizations: i,
        scopes: L,
        parsedPermissions: O,
        responseType: d,
        redirectUri: c,
        codeChallenge: u,
        codeChallengeMethod: _,
        state: A,
        guildId: m,
        channelId: I,
        prompt: g,
        disableGuildSelect: C,
        disclosures: l,
        integrationType: r,
        pid: T,
        signal: N,
    });
}
function EY(e, t) {
    if (e.authorization.accessToken) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Already authenticated");
    if (e.authorization.authing) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Already authenticating");
    return (
        (e.authorization.authing = !0),
        hi.Bo.get({
            url: D.Rsh.OAUTH2_CURRENT_AUTH,
            headers: { Authorization: `Bearer ${t}` },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(
                (n) => {
                    e.authorization.authing = !1;
                    let { application: i, user: r, scopes: a, expires: l } = n.body;
                    if (e.application.id !== i.id)
                        throw new he.A(
                            { errorCode: D.Lw6.INVALID_CLIENTID },
                            "Application does not match the connection's",
                        );
                    let s = i_.default.getCurrentUser();
                    if (null == s || !r || s.id !== r.id)
                        throw new he.A({ errorCode: D.Lw6.INVALID_TOKEN }, "Token does not match current user");
                    return (
                        (e.authorization.scopes = [...e.authorization.scopes, ...a, ds.VH]),
                        (e.authorization.accessToken = t),
                        (e.authorization.expires = new Date(l)),
                        q.h.dispatch({ type: "RPC_APP_AUTHENTICATED", socketId: e.id, application: e.application }),
                        { ...n.body, access_token: t }
                    );
                },
                () => {
                    throw new he.A({ errorCode: D.Lw6.INVALID_TOKEN }, `Invalid access token: ${t}`);
                },
            )
            .catch((t) => {
                throw ((e.authorization.authing = !1), t);
            })
    );
}
let E$ =
    ((A = (e) => {
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
                guildId: c,
                channelId: u,
                prompt: _,
                disableGuildSelect: A,
                disclosures: h,
                integrationType: p,
                pid: m,
                signal: I,
            } = e,
            g = `OAuth2Authorize_${t}_${c}_${u}`,
            C = null != p ? n?.get(p) : void 0,
            T = C?.application ?? i$.A.getApplication(t);
        return new Promise((e, C) => {
            let N = (0, Eh.d5)(m),
                S = hL.SY;
            null != T && null != (0, hO.Ay)({ application: T, channelId: u })
                ? (S = hL.KX)
                : N.context === D.BRT.POPOUT && (S = hL.KX);
            let L = !1,
                O = (n) => {
                    let { clientId: i, location: r } = n;
                    if (null == i || i === t) {
                        if (((L = !0), null == r)) {
                            C(new he.A({ errorCode: D.Lw6.OAUTH2_ERROR }, "OAuth2 Error: No location provided")),
                                N.lock();
                            return;
                        }
                        (e(r), null == l || null == T)
                            ? N.lock()
                            : null == new URL(r).searchParams.get("error")
                              ? (0, f.openModal)(
                                    (e) => (0, E.jsx)(EP.Sm, { application: T, ...e }),
                                    {
                                        onCloseCallback: () => {
                                            N.lock();
                                        },
                                    },
                                    S,
                                )
                              : (0, f.openModal)(
                                    (e) => (0, E.jsx)(EP.xb, { ...e }),
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
                                (0, E.jsx)(ER.f, {
                                    ...e,
                                    title: G.intl.string(G.t.j2d6Km),
                                    subtitle: G.intl.string(G.t["4LKmN5"]),
                                    actions: [{ text: G.intl.string(G.t.cpT0Cq), onClick: e.onClose }],
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
                    (0, E.jsx)(Ev.OAuth2AuthorizeModal, {
                        ...e,
                        authorizations: n,
                        clientId: t,
                        scopes: i ?? [],
                        disclosures: h ?? [],
                        callback: O,
                        responseType: a,
                        redirectUri: l,
                        codeChallenge: s,
                        codeChallengeMethod: o,
                        state: d,
                        permissions: r,
                        guildId: c,
                        channelId: u,
                        prompt: _,
                        disableGuildSelect: "boolean" == typeof A ? A : "true" === A,
                        integrationType: p,
                        cancelCompletesFlow: !0,
                    }),
                {
                    modalKey: g,
                    onCloseCallback: () => {
                        y(),
                            L ||
                                (C(new he.A({ errorCode: D.Lw6.OAUTH2_ERROR }, "User cancelled authorization")),
                                N.lock());
                    },
                },
                S,
            );
        });
    }),
    (h = function (e, t, n) {
        if ((0, Eh.kS)(n) || !U.isPlatformEmbedded) return;
        let i = (0, hO.Ay)({ application: e, channelId: t });
        (0, U.isWindows)() ? eJ.Ay.minimize(i) : eJ.Ay.restore(i), eJ.Ay.focus(i);
    }),
    {
        [D.e$_.AUTHENTICATE]: A7(D.e$_.AUTHENTICATE, {
            handler(e) {
                let {
                    socket: t,
                    signal: n,
                    args: { access_token: i },
                } = e;
                if (null == i && t.transport === ds.z4.IPC) {
                    let e = t.application.id;
                    if (null == e) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                    let r = A1.F.IDENTIFY,
                        a = () =>
                            EB(
                                {
                                    client_id: e,
                                    scope: r,
                                    response_type: "token",
                                    signal: n,
                                    isSocketRpcPrivateScope: !1,
                                },
                                A,
                                h,
                            ).then((n) => {
                                var i, r, a;
                                let l;
                                if (null == n)
                                    throw new he.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, "Unknown error occurred");
                                let s = n.split(/#|\?/),
                                    o = ED.parse(s[s.length - 1]);
                                if (null != o.error)
                                    throw new he.A(
                                        { errorCode: D.Lw6.OAUTH2_ERROR },
                                        `OAuth2 Error: ${o.error}: ${o.error_description ?? "unknown error"}`,
                                    );
                                return (
                                    (i = o.access_token),
                                    (r = o.scope),
                                    (a = o.expires_in),
                                    ((l = ta.w.get(EF) ?? {})[e] = {
                                        accessToken: i,
                                        scope: r,
                                        expires: Date.now() + a,
                                    }),
                                    ta.w.set(EF, l),
                                    EY(t, o.access_token)
                                );
                            });
                    return null !=
                        (i = (function (e, t) {
                            let n = ta.w.get(EF);
                            if (null != n && null != n[e]) {
                                let i = n[e];
                                if (!(i.scope !== t || i.expires <= Date.now())) return i.accessToken;
                                delete n[e], ta.w.set(EF, n);
                            }
                        })(e, r))
                        ? EY(t, i).catch(() => {
                              let t;
                              return (t = ta.w.get(EF) ?? {}), delete t[e], ta.w.set(EF, t), a();
                          })
                        : a();
                }
                if (null == i) throw new he.A({ errorCode: D.Lw6.INVALID_TOKEN }, "No access token provided");
                return EY(t, i);
            },
        }),
        [D.e$_.AUTHORIZE]: {
            handler(e) {
                let { socket: t, signal: n, args: i } = e,
                    r = i.client_id;
                if (!r) throw new he.A({ errorCode: D.Lw6.INVALID_CLIENTID }, "No client id provided");
                if (null != t.authorization.accessToken)
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Already authenticated");
                if (t.authorization.authing) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Already authing");
                if (((t.authorization.authing = !0), "token" === i.response_type))
                    throw (
                        ((t.authorization.authing = !1),
                        new he.A(
                            { errorCode: D.Lw6.INVALID_COMMAND },
                            'Authorization response_type "token" is not supported',
                        ))
                    );
                let a = t.authorization.scopes.includes(ds.LQ);
                if (!a && t.application.id !== r)
                    throw (
                        ((t.authorization.authing = !1),
                        new he.A({ errorCode: D.Lw6.INVALID_CLIENTID }, "Application does not match the connection's"))
                    );
                let l = i.scopes || i.scope;
                return (
                    delete i.scopes,
                    EB({ ...i, scope: l, signal: n, isSocketRpcPrivateScope: a }, A, h)
                        .then((e) => {
                            if (((t.authorization.authing = !1), null == e))
                                throw new he.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, "Unknown error occurred");
                            let n = new URL(e),
                                i = n.searchParams.get("code");
                            if (a) return { code: i, location: e };
                            let r = n.searchParams.get("error");
                            if (null != r && "" !== r) {
                                let e = n.searchParams.get("error_description") ?? "unknown error";
                                throw new he.A({ errorCode: D.Lw6.OAUTH2_ERROR }, `OAuth2 Error: ${r}: ${e}`);
                            }
                            if (null == i)
                                throw new he.A(
                                    { errorCode: D.Lw6.OAUTH2_ERROR },
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
var Ez = n(845187);
let EW = "activity-hardware-acceleration-modal",
    EK = {
        [D.e$_.ENCOURAGE_HW_ACCELERATION]: {
            validation: (e) => hl(e),
            handler(e) {
                let { socket: t } = e;
                (0, AK.lG)(t.transport);
                let i = t.application.id;
                if (null != i)
                    return (
                        tW.Ay.disableActivityHardwareAccelerationPrompt ||
                            !U.isPlatformEmbedded ||
                            eJ.Ay.getEnableHardwareAcceleration() ||
                            (0, f.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.resolve().then(n.bind(n, 845187));
                                    return (t) => (0, E.jsx)(e, { applicationId: i, ...t });
                                },
                                {
                                    modalKey: EW,
                                    onCloseRequest: () => {
                                        ec.default.track(D.HAw.MODAL_DISMISSED, { type: Ez.a }), (0, f.closeModal)(EW);
                                    },
                                },
                            ),
                        { enabled: eJ.Ay.getEnableHardwareAcceleration() }
                    );
            },
        },
    };
var Eq = n(43203);
let EX = {
        [D.e$_.OPEN_MESSAGE]: {
            scope: ds.hj,
            handler(e) {
                let {
                    args: { guild_id: t, channel_id: n, message_id: i, pid: r },
                } = e;
                (0, Eh.d5)(r).context === D.BRT.OVERLAY
                    ? q.h.dispatch({ type: "OVERLAY_OPEN_MESSAGE", guildId: t, channelId: n, messageId: i })
                    : ((0, aO.bG)({ pathname: D.BVt.CHANNEL(t, n, i) }), eJ.Ay.focus());
            },
        },
    },
    EZ = new cr.A("RPCCommandsOverlay"),
    EQ = {
        [D.e$_.SET_OVERLAY_LOCKED]: {
            scope: ds.hj,
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({ locked: e.boolean().required(), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                    args: { locked: t, pid: n },
                    socket: { application: i },
                } = e;
                if ((EZ.verbose("RPCCommands.SET_OVERLAY_LOCKED", { locked: t, pid: n }), null == i.id))
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                _h.A.setInputLocked(t, n);
            },
        },
        [D.e$_.OPEN_OVERLAY_ACTIVITY_INVITE]: {
            scope: ds.hj,
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({ type: e.number().required().valid([D.xL.JOIN]), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        socket: t,
                        args: { type: n, pid: i },
                    } = e,
                    r = t.application.id;
                if (null == r) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                let a = rj.A.getApplicationActivity(r);
                if (null == a || null == a.secrets || !(0, AK.px)(n, a.party, a.secrets))
                    throw new he.A(
                        { errorCode: D.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
                    );
                let { lock: l, context: s } = (0, Eh.d5)(i),
                    o = Eg(a, rV.A);
                return (0, Ep.qf)(a, o, s).then(() => {
                    if ((l(), o))
                        throw new he.A(
                            { errorCode: D.Lw6.NO_ELIGIBLE_ACTIVITY },
                            "No eligible activity for application. Ensure user does have have privacy enabled.",
                        );
                });
            },
        },
        [D.e$_.OPEN_OVERLAY_GUILD_INVITE]: {
            scope: ds.hj,
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({ code: e.string().required(), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                    args: { code: t, pid: n },
                    socket: i,
                } = e;
                if (null == i.application.id) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                return u5.Ay.resolveInvite(t, "Game SDK").then((e) => {
                    let { invite: t, code: i } = e;
                    if (null == t) throw new he.A({ errorCode: D.Lw6.INVALID_INVITE }, `Invalid invite id: ${i}`);
                    let { context: r, lock: a } = (0, Eh.d5)(n);
                    return new Promise((e) => {
                        q.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: i, context: r, resolve: e });
                    }).then(a);
                });
            },
        },
        [D.e$_.OPEN_OVERLAY_VOICE_SETTINGS]: {
            scope: ds.hj,
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({ pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        args: { pid: t },
                        socket: i,
                    } = e,
                    r = i.application.id;
                if (null == r) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: a, context: l } = (0, Eh.d5)(t);
                return new Promise((e) => {
                    (0, f.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("28367"), n.e("58847")]).then(
                                n.bind(n, 880510),
                            );
                            return (t) =>
                                (0, E.jsx)(e, { ...t, mediaEngineContext: r, subtitle: i.application.name ?? void 0 });
                        },
                        {
                            contextKey: l === D.BRT.POPOUT ? hL.KX : hL.SY,
                            onCloseCallback: () => {
                                a(), e();
                            },
                        },
                    );
                });
            },
        },
    };
var EJ = n(132500),
    E0 = n(80703),
    E1 = n(6981),
    E2 = n(956549),
    E6 = n(257269),
    E5 = n(323082),
    E3 = n(121623),
    E4 = n(708281);
function E8(e, t) {
    let { fingerprint: n, installationId: i } = e;
    (null != n || null != i) &&
        ec.default.track(D.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: null != n ? (0, E0.d)(n) : null,
            received_installation_id: i,
            link_type: t,
        });
}
let E7 = {
        [D.e$_.INVITE_BROWSER]: {
            scope: ds.LQ,
            async handler(e) {
                let {
                    args: { code: t, ...n },
                } = e;
                return await (0, Eq.$)(t, "Desktop Modal", n);
            },
        },
        [D.e$_.GUILD_TEMPLATE_BROWSER]: {
            scope: ds.LQ,
            async handler(e) {
                let {
                    args: { code: t },
                } = e;
                if (null == i_.default.getCurrentUser()) return;
                let { guildTemplate: i } = await E3.A.resolveGuildTemplate(t);
                if (null == i)
                    throw new he.A({ errorCode: D.Lw6.INVALID_GUILD_TEMPLATE }, `Invalid guild template id: ${t}`);
                return (
                    eJ.Ay.focus(),
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("82486"), n.e("16198"), n.e("85226")]).then(
                            n.bind(n, 72715),
                        );
                        return (t) => (0, E.jsx)(e, { ...t, guildTemplate: i });
                    }),
                    { guildTemplate: i, code: t }
                );
            },
        },
        [D.e$_.GIFT_CODE_BROWSER]: {
            scope: ds.LQ,
            handler(e) {
                let {
                    args: { code: t },
                } = e;
                return new Promise((e, i) => {
                    q.h.wait(() => {
                        S.A.resolveGiftCode(t, !0, !0)
                            .then((i) => {
                                let { giftCode: r } = i;
                                eJ.Ay.focus(),
                                    ec.default.track(D.HAw.OPEN_MODAL, { type: "gift_accept", location: D.$OG }),
                                    (0, f.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("7200"), n.e("68156")]).then(
                                            n.bind(n, 361845),
                                        );
                                        return (n) => (0, E.jsx)(e, { code: t, ...n });
                                    }),
                                    e({ giftCode: r });
                            })
                            .catch(() =>
                                i(new he.A({ errorCode: D.Lw6.INVALID_GIFT_CODE }, `Invalid gift code: ${t}`)),
                            );
                    });
                });
            },
        },
        [D.e$_.DEEP_LINK]: {
            scope: { [ds.sm.ANY]: [ds.LQ, ds.hj] },
            handler(e) {
                let {
                    args: { type: t, params: i },
                } = e;
                switch ((eJ.Ay.focus(), t)) {
                    case ds.XK.USER_SETTINGS:
                        null != i &&
                            (0, u6.B)(() => {
                                let e = D.BVt.SETTINGS(i.section, i.subsection),
                                    n = (0, lQ.parseSettingsUrl)({ path: e, search: i.search });
                                (0, lQ.trackParseSettingsUrl)(n, "deeplink"),
                                    (0, e5.openUserSettings)(n.target, { path: n.path, searchParams: n.params }),
                                    E8(i, (0, ds.OE)(t));
                            });
                        break;
                    case ds.XK.CHANGELOG:
                        null != i &&
                            ((0, aO.pX)(ET.A.formatPathWithQuery(D.BVt.CHANGELOGS(i.date), i.query)),
                            E8(i, (0, ds.OE)(t)));
                        break;
                    case ds.XK.LIBRARY:
                        (0, aO.pX)(D.BVt.APPLICATION_LIBRARY), null != i && E8(i, (0, ds.OE)(t));
                        break;
                    case ds.XK.STORE_HOME:
                        (0, aO.pX)(D.BVt.APPLICATION_STORE), null != i && E8(i, (0, ds.OE)(t));
                        break;
                    case ds.XK.STORE_LISTING:
                        null != i &&
                            ((0, aO.pX)(D.BVt.APPLICATION_STORE_LISTING_SKU(i.skuId, i.slug)), E8(i, (0, ds.OE)(t)));
                        break;
                    case ds.XK.PICK_GUILD_SETTINGS:
                        null != i &&
                            ((0, aO.pX)(D.BVt.PICK_GUILD_SETTINGS(i.section, i.subsection), { search: i.search }),
                            E8(i, (0, ds.OE)(t)));
                        break;
                    case ds.XK.CHANNEL:
                        null != i &&
                            ((0, aO.pX)(D.BVt.CHANNEL(i.guildId, i.channelId, i.messageId), { search: i.search }),
                            E8(i, (0, ds.OE)(t)));
                        break;
                    case ds.XK.GAME_SHOP:
                        null != i &&
                            ((0, aO.pX)(D.BVt.CHANNELS_GAME_SHOP(i.guildId, i.pageIndex, i.skuId, i.slug)),
                            E8(i, (0, ds.OE)(t)));
                        break;
                    case ds.XK.QUEST_HOME:
                        if (null != i) {
                            let e = new URLSearchParams();
                            null != i.sort && e.set(il.L1.SORT, i.sort),
                                null != i.filter && e.set(il.L1.FILTER, i.filter),
                                null != i.tab && e.set(il.L1.TAB, i.tab),
                                (0, aO.pX)(D.BVt.QUEST_HOME, { hash: i.questId, search: `?${e.toString()}` }),
                                E8(i, (0, ds.OE)(t));
                        } else (0, aO.pX)(D.BVt.QUEST_HOME);
                        break;
                    case ds.XK.QUEST_PREVIEW_TOOL:
                        if (null != i) {
                            let e = new URLSearchParams();
                            e.set(il.L1.TAB, il.NC.PREVIEW_TOOL),
                                null != i.questId && e.set(il.L1.QUEST_ID, i.questId),
                                (0, aO.pX)(D.BVt.QUEST_HOME, { search: `?${e.toString()}` }),
                                E8(i, (0, ds.OE)(t));
                        }
                        break;
                    case ds.XK.DISCOVERY_GAME_RESULTS:
                        null != i &&
                            ((0, aO.pX)(D.BVt.GLOBAL_DISCOVERY_SERVERS, { search: `?game=${i.gameId}` }),
                            E8(i, (0, ds.OE)(t)));
                        break;
                    case ds.XK.OAUTH2:
                        let r = new URL(D.BVt.OAUTH2_AUTHORIZE, window.location.origin);
                        r.search = i.search;
                        let a = (0, Ev.getOAuth2AuthorizeProps)(r.toString());
                        if (null != a) return (0, Ev.openOAuth2ModalWithCreateGuildModal)(a), !0;
                        return !1;
                    case ds.XK.ONE_TIME_LOGIN:
                        if (null != i) return (0, E4.N)({ token: i.token }), E8(i, (0, ds.OE)(t)), !0;
                        return !1;
                    case ds.XK.SHOP:
                        null != i && ((0, aO.pX)(D.BVt.COLLECTIBLES_SHOP, { search: i.search }), E8(i, (0, ds.OE)(t)));
                        break;
                    case ds.XK.FEATURES:
                        i?.path != null && ((0, aO.pX)(i.path), E8(i, (0, ds.OE)(t)));
                        break;
                    case ds.XK.ACTIVITIES:
                        if (null != i) {
                            let e = i.attemptId || (0, EJ.A)();
                            return (
                                (async function (e, t, n) {
                                    try {
                                        let i = rv.Ay.getCurrentEmbeddedActivity();
                                        if (i?.applicationId === e)
                                            return void ec.default.track(D.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                                application_id: e,
                                                success: !1,
                                                failure_reason: "activity_already_running",
                                                attempt_id: n,
                                            });
                                        let r = await iY.Ay.fetchApplication(e),
                                            a = r?.bot?.id;
                                        if (null == a)
                                            return void ec.default.track(D.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                                application_id: e,
                                                success: !1,
                                                failure_reason: "no_bot_user",
                                                attempt_id: n,
                                            });
                                        let l = await rJ.A.openPrivateChannel({ recipientIds: a }),
                                            s = new URL(t),
                                            o = s.searchParams.get("referrer_id") ?? void 0,
                                            { customId: d } = await (0, E6.d9)(
                                                e,
                                                s.searchParams.get("link_id"),
                                                s.searchParams.get("custom_id"),
                                            );
                                        await (0, E2.A)({
                                            targetApplicationId: e,
                                            channelId: l,
                                            analyticsLocations: [eg.A.DEEPLINK],
                                            customId: d,
                                            referrerId: o,
                                        }),
                                            ec.default.track(D.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                                application_id: e,
                                                success: !0,
                                                failure_reason: null,
                                                attempt_id: n,
                                            });
                                    } catch (t) {
                                        ec.default.track(D.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "launch_failed",
                                            attempt_id: n,
                                        });
                                    }
                                })(i.applicationId, i.url, e),
                                E8(i, (0, ds.OE)(t)),
                                !0
                            );
                        }
                        return !1;
                    case ds.XK.PLAYGROUND:
                        if (null != i) {
                            let { openPlayground: e } = n(965042);
                            e(i.collection, i.story), E8(i, (0, ds.OE)(t));
                        }
                }
            },
        },
        [D.e$_.BROWSER_HANDOFF]: {
            scope: ds.kw,
            handler(e) {
                let {
                    args: { handoffToken: t, fingerprint: n },
                } = e;
                eJ.Ay.focus(null, !0), (0, E1.mZ)(t, n);
            },
        },
        [D.e$_.CONNECTIONS_CALLBACK]: {
            scope: ds.LQ,
            handler: async (e) => {
                let {
                    args: { providerType: t, code: n, openid_params: i, iss: r, state: a },
                } = e;
                if (!rx.A.hasPendingAuthorizedState(a))
                    throw new he.A(
                        { errorCode: D.Lw6.INVALID_CONNECTION_CALLBACK_STATE },
                        "Provider authorization did not originate from this discord client",
                    );
                try {
                    return (
                        rx.A.deletePendingAuthorizedState(a),
                        await hU.A.callback(t, { code: n, openid_params: i, iss: r, state: a })
                    );
                } catch (e) {
                    if (e?.status === 400)
                        throw new he.A({ errorCode: D.Lw6.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                    throw (tJ._.dispatch(D.jej.CONNECTIONS_CALLBACK_ERROR), e);
                }
            },
        },
        [D.e$_.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
            scope: ds.LQ,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i },
                } = e;
                return (0, E5.re)({ paymentSourceType: D.hes.PAYPAL, state: t, path: n, query: i });
            },
        },
        [D.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
            scope: ds.LQ,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i, payment_source_type: r },
                } = e;
                return (0, E5.re)({ paymentSourceType: r, state: t, path: n, query: i });
            },
        },
    },
    E9 = {
        [D.e$_.SET_SUPPRESS_NOTIFICATIONS]: {
            scope: ds.hj,
            handler(e) {
                let {
                    socket: t,
                    args: { suppress_notifications: n, target_user_id: i },
                } = e;
                q.h.dispatch({
                    type: "SET_RPC_NOTIFICATION_SETTINGS",
                    socketId: t.id,
                    suppressNotifications: n,
                    targetUserId: i,
                });
            },
        },
    },
    pe = [eg.A.RPC];
function pt(e, t) {
    let n = { subscriptionTier: a4.pe.TIER_2, analyticsLocations: pe, analyticsObject: t };
    switch (e) {
        case D.BRT.APP:
            return AR.A.openPremiumPaymentModalInApp(n);
        case D.BRT.OVERLAY:
            return AR.A.openPremiumPaymentModalInOverlay(n);
        default:
            throw Error(`Unexpected app context: ${e}`);
    }
}
let pn = {
        [D.e$_.START_PURCHASE]: {
            [ds.sm.ANY]: [ds.VH, ds.hj],
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({ sku_id: e.string().required(), pid: e.number().min(0) }),
            handler(e) {
                let {
                    socket: t,
                    args: { sku_id: i, pid: r },
                } = e;
                h6(t.transport);
                let a = t.application.id;
                if (null == a) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: l, context: s } = (0, Eh.d5)(t.transport !== ds.z4.POST_MESSAGE ? r : null);
                if (null == ht()) throw new he.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "Invalid channel");
                let o = { page: D.liQ.IN_APP };
                return (async () => {
                    try {
                        let { openIAPPurchaseModal: e } = await Promise.all([
                                n.e("32292"),
                                n.e("28367"),
                                n.e("45174"),
                                n.e("85519"),
                                n.e("11871"),
                                n.e("37266"),
                                n.e("55057"),
                                n.e("14976"),
                                n.e("63229"),
                                n.e("31988"),
                                n.e("55343"),
                                n.e("90161"),
                                n.e("99717"),
                                n.e("6698"),
                                n.e("90184"),
                                n.e("48672"),
                            ]).then(n.bind(n, 4630)),
                            t = await e({
                                applicationId: a,
                                skuId: i,
                                openPremiumPaymentModal: () => pt(s, o),
                                analyticsLocations: pe,
                                analyticsLocationObject: o,
                                context: s,
                            });
                        return l(), t;
                    } catch (e) {
                        if ((l(), null != e)) {
                            let t = "";
                            throw (
                                ((t =
                                    "object" == typeof e && "message" in e && "string" == typeof e.message
                                        ? e.message
                                        : "string" == typeof e
                                          ? e
                                          : JSON.stringify(e)),
                                new he.A({ errorCode: D.Lw6.PURCHASE_ERROR }, t))
                            );
                        }
                        throw new he.A({ errorCode: D.Lw6.PURCHASE_CANCELED }, "Purchase was canceled by the user.");
                    }
                })();
            },
        },
        [D.e$_.START_PREMIUM_PURCHASE]: {
            [ds.sm.ANY]: [ds.VH, ds.hj],
            validation: (e) => hl(e).keys({ pid: e.number().min(0) }),
            handler(e) {
                let {
                    socket: t,
                    args: { pid: n },
                } = e;
                if ((h6(t.transport), null == t.application.id))
                    throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: i, context: r } = (0, Eh.d5)(t.transport !== ds.z4.POST_MESSAGE ? n : null);
                return pt(r, { page: D.liQ.IN_APP }).then(
                    () => {
                        i();
                    },
                    (e) => {
                        if ((i(), null != e)) throw new he.A({ errorCode: D.Lw6.PURCHASE_ERROR }, e);
                        throw new he.A({ errorCode: D.Lw6.PURCHASE_CANCELED }, "Purchase was canceled by the user.");
                    },
                );
            },
        },
    },
    pi = {
        [D.e$_.SEND_GENERIC_EVENT]: {
            handler(e) {
                throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, `Deprecated command: ${e.cmd}`);
            },
        },
    },
    pr = {
        [D.e$_.TOGGLE_VIDEO]: {
            scope: { [ds.sm.ALL]: [A1.F.RPC, A1.F.RPC_VIDEO_WRITE] },
            handler() {
                let e = eS.Ay.isVideoEnabled();
                null != (0, hZ.A)() &&
                    (e ? ef.A.setVideoEnabled(!1) : (0, of.A)(() => ef.A.setVideoEnabled(!0), D.BRT.APP));
            },
        },
        [D.e$_.TOGGLE_SCREENSHARE]: {
            scope: { [ds.sm.ALL]: [A1.F.RPC, A1.F.RPC_SCREENSHARE_WRITE] },
            validation: (e) =>
                hl(e)
                    .optional()
                    .keys({ pid: e.number().optional().min(0) }),
            handler(e) {
                let {
                        args: { pid: t },
                    } = e,
                    i = oN.A.getCurrentUserActiveStream(),
                    r = oN.A.getStreamerActiveStreamMetadata(),
                    a = (0, _S.A)(eT.Ay, _T.A),
                    l = (0, hZ.A)();
                null != l &&
                    (null != t && null != r && r.pid !== t && (0, U.isWindows)()
                        ? (0, iE.XI)(l.guild_id, l.id, { pid: t })
                        : null != i
                          ? (0, iE.nO)(!1)
                          : null != t && (0, U.isWindows)()
                            ? (0, iE.XI)(l.guild_id, l.id, { pid: t })
                            : null != a
                              ? (0, iE.XI)(l.guild_id, l.id, { pid: a.pid })
                              : (0, f.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([n.e("27713"), n.e("29463")]).then(
                                        n.bind(n, 301400),
                                    );
                                    return (t) => (0, E.jsx)(e, { ...t, analyticsLocations: [eg.A.RPC] });
                                }));
            },
        },
    };
var pa = n(350535);
function pl(e) {
    let t = e.application.id;
    if (null == t) throw new he.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
    return t;
}
let ps = {
        [D.e$_.SET_VOICE_SETTINGS_2]: {
            scope: ds.hj,
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({
                        input_mode: hl(e).keys({
                            type: e.string().valid(Object.keys(D.TBI)),
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
                    a = pl(t);
                null != n && ef.A.setMode(n.type, { shortcut: (0, pa.OH)(n.shortcut) }, a),
                    null != i && i !== eS.Ay.isSelfMute(a) && ef.A.toggleSelfMute({ context: a }),
                    null != r && r !== eS.Ay.isSelfDeaf(a) && ef.A.toggleSelfDeaf({ context: a });
            },
        },
        [D.e$_.SET_USER_VOICE_SETTINGS_2]: {
            scope: ds.hj,
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({ user_id: e.string().required(), volume: e.number().min(0).max(200), mute: e.boolean() }),
            handler(e) {
                let {
                        socket: t,
                        args: { user_id: n, mute: i, volume: r },
                    } = e,
                    a = pl(t);
                null != i && i !== eS.Ay.isLocalMute(n, a) && ef.A.toggleLocalMute(n, a),
                    null != r && ef.A.setLocalVolume(n, r, a);
            },
        },
        [D.e$_.PUSH_TO_TALK]: {
            scope: { [ds.sm.ALL]: [A1.F.RPC, A1.F.RPC_VOICE_WRITE] },
            validation: (e) => hl(e).required().keys({ active: e.boolean() }),
            handler(e) {
                let {
                    args: { active: t },
                } = e;
                eS.Ay.getMode(eO.x.DEFAULT) === D.TBI.PUSH_TO_TALK && (0, _O.N)(t);
            },
        },
    },
    po = {
        [D.e$_.SET_USER_VOICE_SETTINGS]: {
            scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.RPC_VOICE_WRITE] },
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({
                        user_id: e.string().required(),
                        pan: hl(e).keys({
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
                    a = i_.default.getCurrentUser();
                if (null == i_.default.getUser(t) || a?.id === t)
                    throw new he.A({ errorCode: D.Lw6.INVALID_USER }, `Invalid user id: ${t}`);
                if (
                    (null != n && ef.A.setLocalPan(t, n.left, n.right),
                    null != i && ef.A.setLocalVolume(t, i),
                    null != r)
                ) {
                    let e = eS.Ay.isLocalMute(t);
                    ((e && !r) || (!e && r)) && ef.A.toggleLocalMute(t);
                }
                return {
                    user_id: t,
                    pan: eS.Ay.getLocalPan(t),
                    volume: eS.Ay.getLocalVolume(t),
                    mute: eS.Ay.isLocalMute(t),
                };
            },
        },
        [D.e$_.GET_VOICE_SETTINGS]: {
            scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.RPC_VOICE_READ] },
            handler: () => (0, Eh.l6)(),
        },
        [D.e$_.SET_VOICE_SETTINGS]: {
            scope: { [ds.sm.ANY]: [A1.F.RPC, A1.F.RPC_VOICE_WRITE] },
            validation: (e) =>
                hl(e)
                    .required()
                    .keys({
                        input: hl(e).keys({
                            device_id: e.string().valid(Object.keys(eS.Ay.getInputDevices())),
                            volume: e.number().min(0).max(100),
                        }),
                        output: hl(e).keys({
                            device_id: e.string().valid(Object.keys(eS.Ay.getOutputDevices())),
                            volume: e.number().min(0).max(200),
                        }),
                        mode: hl(e).keys({
                            type: e.string().valid(Object.keys(D.TBI)),
                            auto_threshold: e.boolean(),
                            threshold: e.number().min(-100).max(0),
                            shortcut: e
                                .array()
                                .items(
                                    hl(e).keys({
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
                        mute: c,
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
                    let e = eS.Ay.getMode(),
                        t = eS.Ay.getModeOptions();
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
                    let e = eS.Ay.isSelfDeaf();
                    ((e && !d) || (!e && d)) && ef.A.toggleSelfDeaf();
                }
                if (null != c) {
                    let e = eS.Ay.isSelfMute();
                    ((e && !c) || (!e && c)) && ef.A.toggleSelfMute();
                }
                return (0, Eh.l6)();
            },
        },
    };
var pd = n(111162),
    pc = n(861621),
    pu = n(143236),
    p_ = n(440454);
let pA = 10 * eu.A.Millis.SECOND,
    ph = new Map(),
    pE = new Set(),
    pp = (e, t, n) => {
        n([p_.A.CLOSE, t], e);
    };
class pm extends pu.EventEmitter {
    validateSocketClient;
    logger;
    createPostMessageProxySocket;
    onFrameHandled;
    handshakeFailureTimeoutId;
    constructor(e, t, n, i) {
        super(),
            tJ._.subscribe(D.jej.IFRAME_MOUNT, this.handleIFrameMount),
            tJ._.subscribe(D.jej.IFRAME_UNMOUNT, this.handleIFrameUnmount),
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
            let [r] = Array.from(ph.entries()).find((e) => {
                let [n, i] = e;
                return i === t;
            }) ?? [null, null];
            null != r && ph.delete(r);
        };
    })();
    handleIFrameMount = (e) => {
        let { id: t } = e;
        pE.add(t),
            (this.handshakeFailureTimeoutId = setTimeout(() => {
                Array.from(rv.Ay.getSelfEmbeddedActivities().entries()).forEach((e) => {
                    let [t, n] = e;
                    ec.default.track(D.HAw.ACTIVITY_HANDSHAKE_TIMED_OUT, {
                        application_id: t,
                        channel_id: (0, Aq.H)(n.location),
                        guild_id: (0, Aq.D)(n.location),
                        timeout_ms: pA,
                    });
                });
            }, pA));
    };
    handleIFrameUnmount = (e) => {
        let { id: t } = e;
        pE.delete(t);
        let [n, i] = Array.from(ph.entries()).find((e) => {
            let [n, i] = e;
            return i.frameId === t;
        }) ?? [null, null];
        null != i &&
            null != n &&
            (this.disconnectSocket(i, { code: D.YI$.CLOSE_NORMAL, message: "iFrame gone" }, !0), ph.delete(n));
    };
    handleMessage = (e, t, n) => {
        let i = ph.get(t);
        try {
            this.routeEvent(i, t, e, n);
        } catch (e) {
            if (e instanceof he.A && e.errorCode === D.Lw6.INVALID_PAYLOAD) throw e;
            null != i
                ? this.disconnectSocket(i, { code: e.code, message: e.message }, !0)
                : pp(t, { code: e.code, message: e.message }, n);
        }
    };
    routeEvent(e, t, n, i) {
        if (!Array.isArray(n))
            return void console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
        let [r, a] = n;
        switch (r) {
            case p_.A.HANDSHAKE:
                if (null != e) throw new he.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, "Already connected");
                return this.handleHandshake(t, a, i);
            case p_.A.FRAME:
                if (null == e) throw new he.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, "Not connected");
                return this.handleFrame(t, e, a);
            case p_.A.CLOSE:
                if (null == e) throw new he.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, "Not connected");
                return this.handleClose(e, a);
            default:
                throw new he.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, "Invalid opcode");
        }
    }
    handleFrame = (e, t, n) => {
        let i;
        if (e !== t.origin) throw new he.A({ closeCode: D.YI$.INVALID_ORIGIN }, "Origin has changed");
        try {
            i = "string" == typeof n ? JSON.parse(n) : n;
        } catch (e) {
            throw new he.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, "Payload not recognized encoding");
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
                hl(a)
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
            throw new he.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, e.message);
        }
        let l = t.frame_id;
        if (!pE.has(l))
            throw (
                (this.logger.error(`Unrecognized frame ID ${l}`),
                new he.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, `Unrecognized frame ID ${l}`))
            );
        null != t.sdk_version &&
            ec.default.track(D.HAw.ACTIVITY_HANDSHAKE, { application_id: t.client_id, sdk_version: t.sdk_version });
        try {
            r = this.createPostMessageProxySocket({
                origin: e,
                postMessageToRPCClient: i,
                frameId: l,
                version: Number(t.v),
                logger: this.logger,
                postClose: pp,
                encoding: t.encoding ?? "json",
            });
        } catch (e) {
            throw (this.logger.error(`Error opening window socket ${e}`), e);
        }
        this.logger.info(`Socket Opened: ${r.id}`);
        try {
            if ((await this.validateSocketClient(r, e, t.client_id), !pE.has(l)))
                throw (
                    (this.logger.error(`Frame ID ${l} no longer exists`),
                    new he.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, `Unrecognized frame ID ${l}`))
                );
            ph.set(e, r),
                pE.delete(l),
                r.authorization.scopes.push(ds.W_),
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
                hl(i)
                    .required()
                    .keys({ code: i.number().valid(Object.values(D.YI$)).required(), message: i.string().optional() }),
            );
        } catch (e) {
            throw new he.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, e.message);
        }
        this.disconnectSocket(e, t);
    };
}
var pI = n(313731);
class pg extends pI.A {
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
        if ((super(ds.z4.POST_MESSAGE, i, r), -1 === ["etf", "json"].indexOf(r)))
            throw new he.A({ closeCode: D.YI$.INVALID_ENCODING }, `Invalid Encoding: ${r}`);
        if ("etf" === r) throw new he.A({ closeCode: D.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        (this.origin = e),
            (this.postMessageToRPCClient = t),
            (this.frameId = n),
            (this.logger = a),
            (this.postClose = l),
            (this.onSendingToRPCClient = s),
            (this.closed = !1);
    }
    send(e) {
        this.onSendingToRPCClient?.(e, this.id), this.postMessageToRPCClient([p_.A.FRAME, e], this.origin);
    }
    close(e, t) {
        this.closed || this.postClose(this.origin, { code: e, message: t }, this.postMessageToRPCClient),
            (this.closed = !0);
    }
}
let pC = new cr.A("RPCServer:PostMessage"),
    pf =
        ((l = new pm(
            Eh.j7,
            pC,
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
                return new pg({
                    origin: t,
                    postMessageToRPCClient: n,
                    frameId: i,
                    version: r,
                    encoding: a,
                    logger: l,
                    postClose: s,
                    onSendingToRPCClient: (e, t) => {
                        (pd.default.isLoggingOverlayEvents || (e.cmd !== D.e$_.OVERLAY && e.evt !== D.ZE4.OVERLAY)) &&
                            l.info(`Socket Emit: ${t}`, (0, pc.A)(e));
                    },
                });
            },
            (e, t, n) => {
                (pd.default.isLoggingOverlayEvents || e.cmd !== D.e$_.OVERLAY) &&
                    t.info(`Socket Message: ${n.id}`, (0, pc.A)(e));
            },
        )),
        window.addEventListener("message", (e) => {
            if (window === e.source) return;
            if (null == e.source || null == e.source.postMessage) return void pC.error("Unknown event source");
            let t = e.source,
                n = e.data,
                i = e.origin;
            l.handleMessage(n, i, (e, n) => {
                !(function (e) {
                    try {
                        return e.closed;
                    } catch {
                        return !1;
                    }
                })(t) && t.postMessage(e, n);
            });
        }),
        l),
    pT = { ...Ei, ...EL, ...Eb, ...EK, ...EX, ...Eq.A, ...EQ, ...E7, ...E9, ...pn, ...pr, ...po, ...ps, ...E$, ...pi },
    pN = { ...Ec, ...E_, ...EA, ...EE },
    pS = {
        server: Eu.A,
        commands: pT,
        events: pN,
        stores: [cb.default],
        transports: [pf],
        registerTransportsForEmbeddedPlatform: function () {
            eJ.Ay.ensureModule("discord_rpc").then(() => {
                for (let e of [n(33006).A, n(998921).A]) Eu.A.registerTransport(e);
            });
        },
    },
    pL = new (class {
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
            for (let e of (U.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports))
                this.rpcServer.registerTransport(e);
            for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
            for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
        }
        init() {
            (this.rpcServer.getCurrentUser = () => i_.default.getCurrentUser()),
                (this.rpcServer.onConnect = (e) => {
                    q.h.dispatch({ type: "RPC_APP_CONNECTED", socketId: e.id, application: e.application }),
                        ec.default.track(D.HAw.AUTHORIZED_APP_CONNECTED, {
                            app_id: e.application.id,
                            transport: e.transport,
                        });
                }),
                (this.rpcServer.onDisconnect = (e, t) => {
                    q.h.dispatch({
                        type: "RPC_APP_DISCONNECTED",
                        socketId: e.id,
                        application: e.application,
                        reason: t,
                    });
                });
            let e = [i7.A, l0.Ay, AW.A, rF.A, eS.Ay, e3.A];
            new C.ru(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"),
                q.h.subscribe("MESSAGE_CREATE", this.handleMessage),
                q.h.subscribe("MESSAGE_UPDATE", this.handleMessage),
                q.h.subscribe("MESSAGE_DELETE", this.handleMessage),
                q.h.subscribe("SPEAKING", this.handleSpeaking),
                q.h.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
                q.h.subscribe("GUILD_CREATE", this.handleGuildCreate),
                q.h.subscribe("CHANNEL_CREATE", this.handleChannelCreate),
                q.h.subscribe("LOGOUT", this.handleLogout),
                q.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
                q.h.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
                q.h.subscribe("ACTIVITY_JOIN", this.handleActivityJoin),
                q.h.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
                q.h.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
                q.h.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
                q.h.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
                q.h.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
                q.h.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
                q.h.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
                q.h.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
                q.h.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
                q.h.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
                q.h.subscribe("USER_UPDATE", this.handleUserUpdate),
                q.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
                q.h.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
                q.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
        }
        terminate() {
            q.h.unsubscribe("MESSAGE_CREATE", this.handleMessage),
                q.h.unsubscribe("MESSAGE_UPDATE", this.handleMessage),
                q.h.unsubscribe("MESSAGE_DELETE", this.handleMessage),
                q.h.unsubscribe("SPEAKING", this.handleSpeaking),
                q.h.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
                q.h.unsubscribe("GUILD_CREATE", this.handleGuildCreate),
                q.h.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate),
                q.h.unsubscribe("LOGOUT", this.handleLogout),
                q.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
                q.h.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
                q.h.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin),
                q.h.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
                q.h.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
                q.h.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
                q.h.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
                q.h.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
                q.h.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
                q.h.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
                q.h.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
                q.h.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
                q.h.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
                q.h.unsubscribe("USER_UPDATE", this.handleUserUpdate),
                q.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
                q.h.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
                q.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
        }
        handleMessage = (e) => {
            let t, n, i;
            if (0 === this.rpcServer.subscriptions.length) return;
            "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
            let r = null;
            switch (e.type) {
                case "MESSAGE_CREATE":
                    if ("SENDING" === e.message.state) return;
                    (t = D.ZE4.MESSAGE_CREATE), (n = e.channelId), (i = e.message), (r = `${t}${e.message.id}`);
                    break;
                case "MESSAGE_UPDATE":
                    (t = D.ZE4.MESSAGE_UPDATE), (n = e.message.channel_id), (i = e.message);
                    break;
                case "MESSAGE_DELETE":
                    (t = D.ZE4.MESSAGE_DELETE), (n = e.channelId), (i = { id: e.id }), (r = `${t}${e.id}`);
                    break;
                default:
                    return (0, rt.xb)(e);
            }
            null != n &&
                this.rpcServer.dispatchToSubscriptions(
                    t,
                    { channel_id: n },
                    { channel_id: n, message: (0, AK.Yj)(i) },
                    r,
                );
        };
        handleSpeaking = (e) => {
            if (0 === this.rpcServer.subscriptions.length) return;
            let t = 0 !== e.speakingFlags ? D.ZE4.SPEAKING_START : D.ZE4.SPEAKING_STOP;
            if (e.context === eO.x.DEFAULT) {
                let n = ee.A.getVoiceChannelId();
                if (null != n) {
                    let i = i7.A.getChannel(n);
                    if (null == i) return;
                    let r = rF.A.getVoiceState(i.getGuildId(), e.userId);
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
                this.rpcServer.dispatchToSubscriptions(D.ZE4.VOICE_CHANNEL_SELECT, {}, { channel_id: n, guild_id: t });
        };
        handleNotificationCreate = (e) => {
            let { channelId: t, message: n, icon: i, title: r, body: a } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.NOTIFICATION_CREATE,
                    {},
                    {
                        channel_id: t,
                        message: (0, AK.Yj)(n),
                        icon_url: null != i ? (0, AK.hk)(i) : null,
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
                    D.ZE4.ACTIVITY_JOIN,
                    (e) => e.socket.application.id === t || (null != n && e.socket.application.parentId === n),
                    l,
                ),
                this.rpcServer.dispatchToSubscriptions(D.ZE4.GAME_JOIN, (e) => e.socket.application.id === t, l);
        };
        handleActivityLayoutModeUpdate = (e) => {
            let { applicationId: t, layoutMode: n } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = n !== A0.bN.FOCUSED;
            this.rpcServer.dispatchToSubscriptions(
                D.ZE4.ACTIVITY_PIP_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                { is_pip_mode: i },
            );
            let r = { layout_mode: n };
            this.rpcServer.dispatchToSubscriptions(
                D.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                r,
            ),
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    r,
                );
        };
        handleFrameUpdateLayoutMode = (e) => {
            let { applicationId: t, layoutMode: n } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = n === t0.y.PIP ? A0.bN.PIP : A0.bN.FOCUSED,
                r = i !== A0.bN.FOCUSED;
            this.rpcServer.dispatchToSubscriptions(
                D.ZE4.ACTIVITY_PIP_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                { is_pip_mode: r },
            );
            let a = { layout_mode: i };
            this.rpcServer.dispatchToSubscriptions(
                D.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                a,
            ),
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    a,
                );
        };
        handleThermalStateChange = (e) => {
            let { applicationId: t } = e;
            if (0 === this.rpcServer.subscriptions.length || null == t) return;
            let n = { thermal_state: A$() };
            this.rpcServer.dispatchToSubscriptions(D.ZE4.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, n);
        };
        handleScreenOrientationUpdate = (e) => {
            let { screenOrientation: t } = e;
            0 === this.rpcServer.subscriptions.length ||
                this.rpcServer.dispatchToSubscriptions(D.ZE4.ORIENTATION_UPDATE, {}, { screen_orientation: t });
        };
        handleEmbeddedActivityUpdate = () => {
            if (0 === this.rpcServer.subscriptions.length) return;
            let e = AQ();
            this.rpcServer.dispatchToSubscriptions(D.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
        };
        handleActivityMessage = (e) => {
            let { channelId: t, message: n } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let { application: i, activity: r } = n;
            if (null == i || null == r || null == r.party_id) return;
            let a = i_.default.getUser(n.author?.id);
            if (null == a) return;
            let l = i_.default.getCurrentUser();
            if (null == l || a.id === l.id) return;
            let s =
                r.type === D.xL.JOIN_REQUEST
                    ? AW.A.getApplicationActivity(l.id, i.id)
                    : AW.A.getApplicationActivity(a.id, i.id);
            if (null == s || null == s.party || s.party.id !== r.party_id) return;
            let o = s.application_id;
            switch (r.type) {
                case D.xL.JOIN:
                    this.rpcServer.dispatchToSubscriptions(
                        D.ZE4.ACTIVITY_INVITE,
                        (e) => e.socket.application.id === o,
                        { user: (0, AZ.A)(a), activity: s, type: r.type, channel_id: t, message_id: n.id },
                    );
                    break;
                case D.xL.JOIN_REQUEST:
                    this.rpcServer.dispatchToSubscriptions(
                        D.ZE4.ACTIVITY_JOIN_REQUEST,
                        (e) => e.socket.application.id === o,
                        { user: (0, AZ.A)(a), activity: s, type: r.type, channel_id: t, message_id: n.id },
                    );
            }
        };
        handleOAuth2TokenRevoke = (e) => {
            let { accessToken: t } = e;
            this.rpcServer.sockets.forEach((e) => {
                e.authorization.accessToken === t && e.close(D.YI$.TOKEN_REVOKED, "Token revoked");
            });
        };
        handleGuildCreate = (e) => {
            let {
                    guild: { id: t },
                } = e,
                n = rU.A.getGuild(t);
            0 !== this.rpcServer.subscriptions.length &&
                null != n &&
                this.rpcServer.dispatchToSubscriptions(D.ZE4.GUILD_CREATE, {}, { id: t, name: n.name });
        };
        handleChannelCreate = (e) => {
            let {
                channel: { id: t, name: n, type: i },
            } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(D.ZE4.CHANNEL_CREATE, {}, { id: t, name: n, type: i });
        };
        handleLogout = () => {
            this.rpcServer.sockets.forEach((e) => e.close(D.YI$.CLOSE_NORMAL, "User logout"));
        };
        handleRelationshipAdd = (e) => {
            let {
                relationship: { id: t, type: n },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = i_.default.getUser(t);
            if (null == i) return;
            let r = (0, AK.Gc)(n, i);
            this.rpcServer.dispatchToSubscriptions(D.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, AK.LP)(r, e.socket.application.id),
            );
        };
        handleRelationshipUpdate = (e) => {
            let {
                relationship: { id: t, type: n },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = i_.default.getUser(t);
            if (null == i) return;
            let r = (0, AK.Gc)(n, i);
            this.rpcServer.dispatchToSubscriptions(D.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, AK.LP)(r, e.socket.application.id),
            );
        };
        handleRelationshipRemove = (e) => {
            let {
                relationship: { id: t },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let n = i_.default.getUser(t);
            if (null == n) return;
            let i = (0, AK.Gc)(D.eA$.NONE, n);
            this.rpcServer.dispatchToSubscriptions(D.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, AK.LP)(i, e.socket.application.id),
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
                    let t = eZ.A.getRelationshipType(e);
                    if (t === D.eA$.NONE) continue;
                    let n = i_.default.getUser(e);
                    if (null == n) continue;
                    let i = (0, AK.Gc)(t, n);
                    this.rpcServer.dispatchToSubscriptions(D.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                        (0, AK.LP)(i, e.socket.application.id),
                    );
                }
        };
        handlePresencesReplace = () => {
            if (0 !== this.rpcServer.subscriptions.length)
                for (let [e, t] of eZ.A.getMutableRelationships().entries()) {
                    if (t === D.eA$.NONE) continue;
                    let n = i_.default.getUser(e);
                    if (null == n) continue;
                    let i = (0, AK.Gc)(t, n);
                    this.rpcServer.dispatchToSubscriptions(D.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                        (0, AK.LP)(i, e.socket.application.id),
                    );
                }
        };
        handleUserUpdate = (e) => {
            let {
                user: { id: t },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let n = eZ.A.getRelationshipType(t);
            if (n === D.eA$.NONE) return;
            let i = i_.default.getUser(t);
            if (null == i) return;
            let r = (0, AK.Gc)(n, i);
            this.rpcServer.dispatchToSubscriptions(D.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, AK.LP)(r, e.socket.application.id),
            );
        };
        handleEntitlementCreate = (e) => {
            let { entitlement: t } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.ENTITLEMENT_CREATE,
                    (e) => e.socket.application.id === t.application_id,
                    { entitlement: t },
                );
        };
        handleEntitlementDelete = (e) => {
            let { entitlement: t } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.ENTITLEMENT_DELETE,
                    (e) => e.socket.application.id === t.application_id,
                    { entitlement: t },
                );
        };
        handleQuestEnrollSuccess = (e) => {
            let { enrolledQuestUserStatus: t } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let n = t.questId,
                i = it.A.getQuest(n);
            if (null == i) return;
            let r = (0, Az.TP)(i);
            null != r &&
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE,
                    (e) => e.socket.application.id === r && e.args?.quest_id === n,
                    { quest_id: n, is_enrolled: null != t.enrolledAt, enrolled_at: t.enrolledAt },
                );
        };
    })(pS);
var pO = n(138298),
    py = n(940382),
    pb = n(450510),
    pv = n(594061);
class pR extends X.A {
    _initialize() {
        __OVERLAY__ ||
            (q.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived),
            q.h.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally),
            q.h.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect),
            q.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened));
    }
    _terminate() {
        __OVERLAY__ ||
            (q.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived),
            q.h.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally),
            q.h.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect),
            q.h.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened));
    }
    _playSound = function (e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            arguments.length > 2 && arguments[2],
            arguments.length > 3 && arguments[3];
    };
    _stopAndClearSounds = () => {};
    _handleToggleSelfDeafened = () => {
        eS.Ay.isDeaf() && this._stopAndClearSounds();
    };
    _handleSoundboardSoundReceived = (e) => {
        let { soundId: t, soundVolume: n, userId: i, channelId: r } = e;
        if (null != t && i !== P.default.getId()) return this._playSound(t, n, i, r);
    };
    _handleSoundboardSoundPlayLocally = (e) => {
        let { sound: t, channelId: n } = e,
            i = P.default.getId();
        return this._playSound(t.soundId, t.volume, i, n);
    };
    _handleVoiceChannelSelect = () => {
        this._stopAndClearSounds();
    };
}
var pP = n(102597),
    pD = n(904054),
    px = n(205693),
    pw = n(602674),
    pM = n(76788),
    pU = n(738011),
    pG = n(536184);
let pj = new Map();
async function pk(e) {
    let t = pj.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        i = (0, pw.v)(),
        r = await i?.decodeAudioData(n);
    return null != r && pj.set(e, r), r;
}
let pV = new cr.A("SoundboardManager");
class pF extends pR {
    playingSoundsWeb = new Map();
    _initialize() {
        super._initialize(),
            __OVERLAY__ ||
                (q.h.subscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                ),
                q.h.subscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState));
    }
    _terminate() {
        super._terminate(),
            __OVERLAY__ ||
                (q.h.unsubscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                ),
                q.h.unsubscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState));
    }
    _stopAndClearSounds = () => {
        eS.Ay.supports(eO.O5.SAMPLE_PLAYBACK) &&
            eS.Ay.getMediaEngine().eachConnection((e) => {
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
                a = null != r && ee.A.getVoiceChannelId() === r;
            if ((null == r || a) && !eS.Ay.isDeaf() && !hq.A.isLocalSoundboardMuted(i))
                try {
                    let r = {
                        soundKey: `${i}-${t}`,
                        soundURL: (0, pP.A)(t),
                        soundVolume: (0, pD.A)(n),
                        reportSoundStartedPlaying: () => (0, hK.dZ)(t, i),
                    };
                    eS.Ay.supports(eO.O5.SAMPLE_PLAYBACK)
                        ? await (function (e) {
                              let { soundKey: t, soundURL: n, soundVolume: i, reportSoundStartedPlaying: r } = e;
                              return new Promise(async (e, a) => {
                                  let l = await pk(n);
                                  null == l && e(),
                                      eS.Ay.getMediaEngine().eachConnection((n) => {
                                          n.context === px.x.DEFAULT &&
                                              (r(),
                                              ew()(null != l, "audioBuffer cannot be null here"),
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
                                  let l = new (await (0, pG.A)(i))();
                                  (l.src = i),
                                      (l.volume = (0, pD.A)(r)),
                                      l.addEventListener(
                                          l instanceof pM.A.OGVPlayer ? "loadedmetadata" : "canplaythrough",
                                          () => {
                                              a(),
                                                  t.set(n, l),
                                                  l.play()?.catch((i) => {
                                                      if ((0, pU.u)(i)) {
                                                          e_.A.captureException(i, {
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
                    pV.warn(`Error playing soundboard sound: ${e.message}`);
                } finally {
                    (0, hK.g0)(t, i);
                }
        };
    })();
    _handleRTCConnectionState = (e) => {
        let { state: t } = e;
        t === D.S7L.RTC_CONNECTED && (pv.bW.loadIfNecessary(), (0, hK.E7)({ disableAnalytics: !0 }));
    };
    _handleOverlaySoundboardSoundsFetchRequest = () => {
        (0, hK.E7)();
    };
    _handleOpenEducationModal = (e, t) => {
        if (null == e) return;
        let i = i7.A.getChannel(t),
            r = _R.Ay.getKeybindForAction(D.hCu.SOUNDBOARD_HOLD);
        null != i &&
            (0, s4.Ay)(i) &&
            null != r &&
            s2.A.hasHotspot(pb._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
            (0, f.openModalLazy)(async () => {
                let { default: t } = await n.e("51143").then(n.bind(n, 888762));
                return (n) => (0, E.jsx)(t, { ...n, guildId: e, keybind: r, channel: i });
            });
    };
}
let pH = new pF();
class pB extends X.A {
    _initialize() {
        q.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        q.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e,
            n = P.default.getId();
        t.forEach((e) => {
            e.userId === n &&
                i7.A.getChannel(e.channelId)?.isGuildStageVoice() &&
                (0, o_.eY)(e) !== o_.zF.ON_STAGE &&
                (this.handleStopStream(e), this.handleStopUserVideo());
        });
    };
    handleStopStream = (e) => {
        let t = oN.A.getActiveStreamForUser(e.userId, e.guildId);
        null != t && (0, iE.vN)((0, _g._z)(t), !1);
    };
    handleStopUserVideo = () => {
        eS.Ay.isVideoEnabled() && ef.A.setVideoEnabled(!1);
    };
}
let pY = new pB(),
    p$ = "STAGE_INVITED_TO_SPEAK_MODAL";
class pz extends X.A {
    _initialize() {
        q.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        q.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e,
            i = P.default.getId(),
            r = sz.A.getSession()?.sessionId,
            a = t.find((e) => e.userId === i && e.sessionId === r);
        if (null == a) return;
        let l = a.channelId;
        if (null == l) {
            (0, f.hasModalOpen)(p$) && (0, f.closeModal)(p$);
            return;
        }
        let s = i7.A.getChannel(l);
        if (!s?.isGuildStageVoice()) return;
        let o = (0, o_.eY)(a) === o_.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        if (null != s && o) {
            if ((0, f.hasModalOpen)(p$)) return;
            (0, f.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("90037").then(n.bind(n, 427412));
                    return (t) => (0, E.jsx)(e, { ...t, channel: s });
                },
                { modalKey: p$, onCloseRequest: D.FXj },
            );
        }
    };
}
let pW = new pz();
var pK = n(863922),
    pq = n(353202);
n(667532);
var pX = n(989349),
    pZ = n.n(pX),
    pQ = n(724066),
    pJ = n(100767),
    p0 = n(379418),
    p1 = n(9842),
    p2 = n(761640),
    p6 = n(317525),
    p5 = n(54570),
    p3 = n(8880);
n(75804);
let p4 = [],
    p8 = null,
    p7 = null,
    p9 = null,
    me = /\|\|([\s\S]+?)\|\|/g;
function mt(e, t, n, i) {
    let r = rU.A.getGuild(n),
        a = e
            .replace(me, G.intl.string(G.t["F+x38C"]))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                let i = i_.default.getUser(t);
                return null == i ? G.intl.string(G.t.sKdZ6U) : (l0.Ay.getNick(n, i.id) ?? rn.Ay.getName(i));
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != r ? p6.A.getRole(r.id, t) : null;
                return null != n && null != n.name ? n.name : G.intl.string(G.t["YV4F/n"]);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = i7.A.getChannel(t);
                return null == n ? G.intl.string(G.t.J90oLW) : (0, iz.m1)(n, i_.default, eZ.A);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => `${G.intl.string(G.t.sMOuuS)} ${t}`)
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => `/${t}`)
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let i = p0.kx[n],
                    r = 1e3 * parseInt(t, 10),
                    a = pZ()(r);
                return null != i ? i(a) : a.format();
            });
    return null == i
        ? G.intl.formatToPlainString(G.t["uIj77/"], { username: t, body: a })
        : G.intl.formatToPlainString(G.t["Ix4H+j"], { username: t, body: a, replyUsername: i });
}
function mn() {
    if (!pJ.$j) return !1;
    let e = Ee.default.locale;
    null == p9 && (p9 = window.speechSynthesis?.getVoices());
    let t = p9.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    p7 = t.length > 0 ? t[0] : null;
}
async function mi(e, t, n, i, r) {
    let a = pJ.aW(e, n);
    null !== a &&
        (null == p7 && mn(),
        t ? await (0, p5.pr)() : p8?.removeEventListener("end", p5.pr),
        a.addEventListener("end", p5.pr),
        null != i && a.addEventListener("start", i),
        null != r && a.addEventListener("end", r),
        (p8 = a),
        pJ.wz(a, p7));
}
function mr(e, t, n, i, r) {
    mi(e, t, r, () => {
        (0, p5.kC)(n, i);
    });
}
function ma(e) {
    let { text: t, interrupt: n, maxLength: i, onStart: r, onEnd: a } = e;
    mi(t, n, i, r, a);
}
function ml() {
    return null !== p8 && p8.removeEventListener("end", p5.pr), pJ._X(), (p8 = null), !0;
}
function ms(e) {
    let { message: t, channel: n } = e,
        i = t.type === D.lAJ.REPLY ? p1.A.getMessageByReference(t.messageReference) : null,
        r = i?.state === p1.a.LOADED ? i?.message?.author : null,
        a = null != r ? (l0.Ay.getNick(n.guild_id, r?.id) ?? rn.Ay.getName(r)) : null,
        l = n.getGuildId(),
        s = l0.Ay.getNick(l, t.author.id) ?? rn.Ay.getName(t.author);
    return mr(mt(t.content, s, l, a), !0, n.id, t.id), !0;
}
function mo(e) {
    let { channelId: t, message: n, optimistic: i } = e;
    if (i || eS.Ay.isSelfDeaf()) return !1;
    let r = i7.A.getChannel(t);
    if (null == r) return !1;
    let a = ee.A.getChannelId(),
        l = p2.Ay.getCurrentSidebarChannelId(a),
        s = t === a || t === l,
        o = oA.on.getSetting() && n.tts && s,
        d = eX.A.getTTSType(),
        c = n.author?.id !== P.default.getId() && (d === D.aVn.ALL_CHANNELS || (d === D.aVn.SELECTED_CHANNEL && s));
    if ((o || c) && !eZ.A.isBlockedOrIgnoredForMessage(n)) {
        if (p4.indexOf(n.id) >= 0) return !1;
        p4.unshift(n.id) > 10 && p4.pop();
        let e = r.getGuildId();
        if (null != e && cO.Ay.getMutedChannels(e).has(t)) return !1;
        let i = l0.Ay.getNick(e, n.author?.id) ?? rn.Ay.getName(n.author) ?? "",
            a = n.type === D.lAJ.REPLY ? n.referenced_message?.author : null,
            l = null != a ? (l0.Ay.getNick(e, a?.id) ?? rn.Ay.getName(a)) : null;
        mr(mt(n.content, i, e, l), !1, r.id, n.id, 200);
    }
    return !1;
}
function md(e) {
    let { id: t, channelId: n } = e,
        i = p3.A.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, p5.pr)(), !0);
}
function mc() {
    eS.Ay.isSelfDeaf() && pJ._X();
}
function mu(e) {
    let { channelId: t } = e,
        n = p3.A.currentMessage;
    null != n && n.channelId !== t && (0, p5.pr)();
}
let m_ = {
    init() {
        q.h.subscribe("SPEAK_TEXT", ma),
            q.h.subscribe("SPEAK_MESSAGE", ms),
            q.h.subscribe("STOP_SPEAKING", ml),
            q.h.subscribe("MESSAGE_CREATE", mo),
            q.h.subscribe("MESSAGE_DELETE", md),
            q.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", mc),
            q.h.subscribe("CHANNEL_SELECT", mu),
            q.h.subscribe("USER_SETTINGS_PROTO_UPDATE", mn),
            (0, pQ.I)(mn);
    },
};
var mA = n(403777),
    mh = n(80556);
let mE = (0, n(250105).Ay)({
    name: "2026-04-safety-flows",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var mp = n(907135),
    mm = n(446868),
    mI = n(665095),
    mg = n(639719),
    mC = n(53516),
    mf = n(87404);
let mT = {
    init() {
        q.h.subscribe("CONNECTION_OPEN", this.handleRequiredAction),
            q.h.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction),
            q.h.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate),
            P.default.addChangeListener(this.handleAuthenticationStoreChanged);
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        !c2.P.isDisallowPopupsSet() &&
            null != i_.default.getCurrentUser() &&
            (t === D.a3B.REQUIRE_CAPTCHA ||
            t === D.a3B.REQUIRE_VERIFIED_EMAIL ||
            t === D.a3B.REQUIRE_VERIFIED_PHONE ||
            t === D.a3B.REQUIRE_REVERIFIED_PHONE ||
            t === D.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE ||
            t === D.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            t === D.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            mm.A.isEmailReverification(t)
                ? (function (e) {
                      let { location: t } = e;
                      return mE.getConfig({ location: t }).enabled;
                  })({ location: "verification-legacy" })
                    ? (0, cj.B8)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, E.jsx)(mp.A, { onClose: t });
                          },
                          { layerKey: mf._s, Layer: mh.Ay },
                      )
                    : (0, cj.B8)(() => (0, E.jsx)(mI.A, {}), { layerKey: mf._s, Layer: mh.Ay })
                : t === D.a3B.AGREEMENTS
                  ? (0, f.openModal)((e) => (0, E.jsx)(mg.default, { ...e }), {
                        modalKey: mf.i$,
                        onCloseRequest: A2.FX,
                        dismissable: !1,
                    })
                  : t === D.a3B.REQUIRE_SAFETY_FLOWS
                    ? (0, cj.B8)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, E.jsx)(mp.A, { onClose: t });
                          },
                          { layerKey: mf._s, Layer: mh.Ay },
                      )
                    : null == t && ((0, cj.dF)(mf._s), (0, f.hasModalOpen)(mf.i$) && (0, f.closeModal)(mf.i$)));
    },
    handleAuthenticationStoreChanged() {
        null == P.default.getId() &&
            ((0, cj.dF)(mf._s),
            (0, f.closeModal)(mf.i$),
            (0, f.closeModal)(mf.Pr),
            (0, f.closeModal)(mf.H1),
            (0, f.closeModal)(mC.V));
    },
    handleCurrentUserUpdate(e) {
        let { user: t } = e;
        t.verified && (0, f.closeModal)(mf.H1);
    },
};
var mN = n(803805),
    mS = n(761821);
let mL = "selectedChannelGuildFrecency";
function mO(e) {
    let { state: t } = C.Ay.PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", [
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
              let r = mN.tC.create();
              return (
                  (r.format = "IMAGE" === n.format ? mN.TL.IMAGE : "VIDEO" === n.format ? mN.TL.VIDEO : mN.TL.NONE),
                  (r.src = n.src),
                  (r.width = n.width),
                  (r.height = n.height),
                  (r.order = t.favorites.length - i + e),
                  { url: n.url, favorite: r }
              );
          });
}
let my = [
    {
        version: 2,
        run(e) {
            let t = mO(1);
            if (0 === t.length) return !1;
            for (let { url: n, favorite: i } of (null == e.favoriteGifs && (e.favoriteGifs = mN.uz.create()),
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
            let { state: n } = C.Ay.PersistedStore.migrateAndReadStoreState("StickersPersistedStore", [
                (e) => (null == e || 0 === Object.keys(e).length ? t() : e),
                (e) =>
                    null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e),
            ]);
            if (null == n) return !1;
            let i = !1;
            return (
                n.favorites.length > 0 &&
                    ((e.favoriteStickers = mN.tQ.create()),
                    (e.favoriteStickers.stickerIds = eU().uniq(n.favorites).slice(0, 250)),
                    (i = !0)),
                eU().size(n.usageHistory) > 0 &&
                    ((e.stickerFrecency = mN.Do.create()),
                    (e.stickerFrecency.stickers = (0, mS.Mr)(n.usageHistory, 100)),
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
            let { state: t } = C.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ usageHistory: ta.w.get("EmojiUsageHistory") || {} }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.favorites &&
                    t.favorites.length > 0 &&
                    ((e.favoriteEmojis = mN.gW.create()),
                    (e.favoriteEmojis.emojis = eU().uniq(t.favorites).slice(0, 250)),
                    (n = !0)),
                eU().size(t.usageHistory) > 0 &&
                    ((e.emojiFrecency = mN.Q8.create()),
                    (e.emojiFrecency.emojis = (0, mS.Mr)(t.usageHistory, 100)),
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
            null == e.favoriteGifs && (e.favoriteGifs = mN.uz.create()),
                null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
            let t = mO(1);
            if (0 === t.length) return !1;
            eU()(e.favoriteGifs.gifs)
                .values()
                .sortBy("order")
                .forEach((e, n) => (e.order = t.length + 1 + n));
            let n = mN.uz.toBinary(e.favoriteGifs).length,
                i = 0;
            for (let { url: r, favorite: a } of t) {
                if (((a.order = t.length - i), i++, r in e.favoriteGifs.gifs)) {
                    e.favoriteGifs.gifs[r].order = a.order;
                    continue;
                }
                let l = mN.tC.toBinary(a).length + r.length + 7;
                n + l > 762880 || ((n += l), (e.favoriteGifs.gifs[r] = a));
            }
            for (n = mN.uz.toBinary(e.favoriteGifs).length; n > 762880; ) {
                let t = 0;
                for (let n in e.favoriteGifs.gifs) if ((delete e.favoriteGifs.gifs[n], ++t >= 10)) break;
                n = mN.uz.toBinary(e.favoriteGifs).length;
            }
            return !0;
        },
        cleanup() {},
    },
    {
        version: 7,
        run(e) {
            let { state: t } = C.Ay.PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []);
            if (null == t) return !1;
            let n = !1;
            return (
                eU().size(t.usageHistory) > 0 &&
                    ((e.applicationCommandFrecency = mN.Zc.create()),
                    (e.applicationCommandFrecency.applicationCommands = (0, mS.Mr)(t.usageHistory, 500)),
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
            let { state: t } = C.Ay.PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []);
            if (null == t) return !1;
            let n = !1;
            return (
                eU().size(t.favoriteSounds) > 0 &&
                    ((e.favoriteSoundboardSounds = mN.Qn.create()),
                    l2.default.keys(t.favoriteSounds).forEach((n) => {
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
            let t = ta.w.get(mL);
            if (null == t) return !1;
            for (let e in t) D.Ut1.test(e) || delete t[e];
            return (
                (e.guildAndChannelFrecency = mN.F1.create()),
                (e.guildAndChannelFrecency.guildAndChannels = (0, mS.Mr)(t, 100)),
                !0
            );
        },
        cleanup() {
            ta.w.remove(mL);
        },
    },
    {
        version: 10,
        run(e) {
            if (null == e.emojiFrecency) return !1;
            let t = e.emojiFrecency.emojis ?? {},
                n = !1;
            if (eU().size(t) > 0) {
                let t = mN.Q8.create();
                mN.Q8.mergePartial(t, e.emojiFrecency),
                    null != e.emojiReactionFrecency && mN.Q8.mergePartial(t, e.emojiReactionFrecency),
                    (e.emojiReactionFrecency = t),
                    (n = !0);
            }
            return n;
        },
        cleanup() {},
    },
];
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var mb = n(873298),
    mv = n(406935),
    mR = n(168186),
    mP = n(460288),
    mD = n(573879);
function mx(e, t) {
    let n = !1;
    return (
        null == e.userContent &&
            (e.userContent = {
                dismissedContents: new Uint8Array(),
                lastReceivedChangelogId: "0",
                recurringDismissibleContentStates: {},
            }),
        null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array()),
        (0, mP.c0)(e.userContent.dismissedContents, t) ||
            ((e.userContent.dismissedContents = (0, mP.Vf)(e.userContent.dismissedContents, t)), (n = !0)),
        n
    );
}
function mw(e, t, n) {
    return !!pb.HP.hasHiddenHotspot(t) && mx(e, n);
}
let mM = [
    {
        version: 2,
        run(e) {
            if (null != e.inbox) return !1;
            let t = !1,
                n = mb.Q0.create();
            (e.inbox = n), ta.w.get("seenInboxTutorial", !1) && ((n.viewedTutorial = !0), (t = !0));
            let i = ta.w.get("recentsButtonTab2");
            null != i && ((n.currentTab = "Recent Mentions" === i ? mb.Y2.MENTIONS : mb.Y2.UNREADS), (t = !0));
            let r = ta.w.get("unread-messages-collapsed-channels") ?? {};
            for (let n in r) {
                if (!r[n]) continue;
                let i = i7.A.getChannel(n);
                null != i &&
                    ((t = !0),
                    (0, mS.gc)(e, i.guild_id ?? "0", i.id, (e) => {
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
            let { state: t } = C.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ diversitySurrogate: ta.w.get("EmojiDiversitySurrogate") || "" }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.diversitySurrogate &&
                    "" !== t.diversitySurrogate &&
                    (null == e.textAndImages && (e.textAndImages = mb.oJ.create()),
                    null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = mv.hU.create()),
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
                    pb.HP.hasHiddenHotspot(pb._2.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) &&
                    (t = mx(e, nq.M.HUB_WAITLIST_UPSELL)),
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
            (e.textAndImages = e.textAndImages ?? mb.oJ.create()),
                (e.notifications = e.notifications ?? mb.TY.create()),
                (e.privacy = e.privacy ?? mb.E.create()),
                (e.voiceAndVideo = e.voiceAndVideo ?? mb.GY.create()),
                (e.gameLibrary = e.gameLibrary ?? mb.F1.create()),
                (e.debug = e.debug ?? mb.X9.create());
            let n = ta.w.get("UserSettingsStore") ?? {};
            return (
                "boolean" == typeof n.useRichChatTextBox &&
                    ((e.textAndImages.useRichChatInput = mv._t.create({ value: n.useRichChatTextBox })), (t = !0)),
                "string" == typeof n.renderSpoilers &&
                    ((e.textAndImages.renderSpoilers = mv.hU.create({ value: n.renderSpoilers })), (t = !0)),
                "boolean" == typeof n.useThreadSidebar &&
                    ((e.textAndImages.useThreadSidebar = mv._t.create({ value: n.useThreadSidebar })), (t = !0)),
                "boolean" == typeof n.showInAppNotifications &&
                    ((e.notifications.showInAppNotifications = mv._t.create({ value: n.showInAppNotifications })),
                    (t = !0)),
                n.emojiPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.emojiPickerCollapsedSections = n.emojiPickerCollapsedSections), (t = !0)),
                n.stickerPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.stickerPickerCollapsedSections = n.stickerPickerCollapsedSections), (t = !0)),
                "boolean" == typeof n.viewImageDescriptions &&
                    ((e.textAndImages.viewImageDescriptions = mv._t.create({ value: n.viewImageDescriptions })),
                    (t = !0)),
                "boolean" == typeof n.showCommandSuggestions &&
                    ((e.textAndImages.showCommandSuggestions = mv._t.create({ value: n.showCommandSuggestions })),
                    (t = !0)),
                "boolean" == typeof n.alwaysPreviewVideo &&
                    ((e.voiceAndVideo.alwaysPreviewVideo = mv._t.create({ value: n.alwaysPreviewVideo })), (t = !0)),
                "boolean" == typeof n.notifyFriendsOnGoLive &&
                    ((e.notifications.notifyFriendsOnGoLive = mv._t.create({ value: n.notifyFriendsOnGoLive })),
                    (t = !0)),
                "boolean" == typeof n.installShortcutDesktop &&
                    ((e.gameLibrary.installShortcutDesktop = mv._t.create({ value: n.installShortcutDesktop })),
                    (t = !0)),
                "boolean" == typeof n.installShortcutStartMenu &&
                    ((e.gameLibrary.installShortcutStartMenu = mv._t.create({ value: n.installShortcutStartMenu })),
                    (t = !0)),
                "boolean" == typeof n.allowActivityPartyPrivacyFriends &&
                    ((e.privacy.allowActivityPartyPrivacyFriends = mv._t.create({
                        value: n.allowActivityPartyPrivacyFriends,
                    })),
                    (t = !0)),
                "boolean" == typeof n.allowActivityPartyPrivacyVoiceChannel &&
                    ((e.privacy.allowActivityPartyPrivacyVoiceChannel = mv._t.create({
                        value: n.allowActivityPartyPrivacyVoiceChannel,
                    })),
                    (t = !0)),
                "boolean" == typeof n.rtcPanelShowVoiceStates &&
                    ((e.debug.rtcPanelShowVoiceStates = mv._t.create({ value: n.rtcPanelShowVoiceStates })), (t = !0)),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 7,
        run: (e) => mw(e, pb._2.APPLICATION_COMMAND_TOOLTIP, nq.M.APPLICATION_COMMAND_TOOLTIP),
        cleanup() {},
    },
    {
        version: 8,
        run: (e) => mw(e, pb._2.CHANNEL_BANNER_MEMBER_LIST_NOTICE, nq.M.CHANNELINFO_CHANNELBANNER_NOTICE),
        cleanup() {},
    },
    {
        version: 9,
        run: (e) => (
            pb.HP.hasHiddenHotspot(pb._2.MULTI_ACCOUNT_TOOLTIP) && ta.w.set(mD.JE, "true"),
            mw(e, pb._2.MULTI_ACCOUNT_TOOLTIP, nq.M.ACCOUNT_MULTIACCOUNT_TOOLTIP)
        ),
        cleanup() {},
    },
    {
        version: 10,
        run(e) {
            let t = mw(e, pb._2.HUB_LINK_CHANNEL_NOTICE, nq.M.CHANNEL_NOTICE_HUBLINK),
                n = ta.w.get("channelNotices") ?? {};
            return (
                !1 === n[D.n5X.INVITE] && mx(e, nq.M.CHANNEL_NOTICE_INVITE) && (t = !0),
                !1 === n[D.n5X.QUICKSWITCHER] && mx(e, nq.M.CHANNEL_NOTICE_QUICKSWITCHER) && (t = !0),
                !1 === n[D.n5X.GUILD_BOOSTING] && mx(e, nq.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (t = !0),
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
                mw(e, pb._2.GUILD_EVENT_UPSELL, nq.M.GUILD_HEADER_EVENT_UPSELL) && (t = !0),
                mw(e, pb._2.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, nq.M.GUILD_HEADER_ANIMATED_GUILD_BANNER) &&
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
                ta.w.get("hideNag") && mx(e, nq.M.NAGBAR_NOTICE_DOWNLOAD) && (t = !0),
                ta.w.get("hideConnectSpotify") && mx(e, nq.M.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0),
                ta.w.get("hideConnectPlayStation") && mx(e, nq.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0),
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
                ta.w.get("hidePremiumPromo") && mx(e, nq.M.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0),
                ta.w.get("hidePremiumTier2TrialEnding") &&
                    mx(e, nq.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (t = !0),
                ta.w.get("hidePremiumReactivateNotice") && mx(e, nq.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0),
                t
            );
        },
        cleanup() {
            ta.w.remove("hidePremiumPromo"),
                ta.w.remove("hidePremiumTier2TrialEnding"),
                ta.w.remove("hidePremiumReactivateNotice");
        },
    },
    { version: 14, run: (e) => mw(e, pb._2.ACTIVITY_BEB_TUTORIAL, nq.M.ACTIVITIES_TUTORIAL_COACH_MARK), cleanup() {} },
    { version: 15, run: (e) => mw(e, pb._2.NOW_PLAYING_CONSENT_CARD, nq.M.NOW_PLAYING_CONSENT_CARD), cleanup() {} },
    {
        version: 16,
        run(e) {
            let t = ta.w.get("PromotionsPersistedStore");
            if (null == t) return !1;
            let n = t._state.lastDismissedOutboundPromotionStartDate;
            return (
                null != n &&
                (null == e.userContent && (e.userContent = mb.YW.create()),
                null == e.userContent.lastDismissedOutboundPromotionStartDate) &&
                ((e.userContent.lastDismissedOutboundPromotionStartDate = mv.hU.create({ value: n })), !0)
            );
        },
        cleanup() {},
    },
    {
        version: 17,
        run(e) {
            let { state: t } = C.Ay.PersistedStore.migrateAndReadStoreState(
                "ExpressionSuggestionsPersistedStore",
                null,
            );
            if (null == t) return !1;
            let n = t.expressionSuggestionsEnabled;
            return (
                null != n &&
                (null == e.textAndImages && (e.textAndImages = mb.oJ.create()),
                null == e.textAndImages.expressionSuggestionsEnabled) &&
                ((e.textAndImages.expressionSuggestionsEnabled = mv._t.create({ value: n })), !0)
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
                mw(e, pb._2.GUILD_DELETE_FEEDBACK, nq.M.GUILD_DELETE_FEEDBACK) && (t = !0),
                mw(e, pb._2.GUILD_LEAVE_FEEDBACK, nq.M.GUILD_LEAVE_FEEDBACK) && (t = !0),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 19,
        run(e) {
            let t = !1;
            return ta.w.get("forumHelperCardStorageKey") && (t = mx(e, nq.M.FORUM_CHANNEL_HELPER_CARD)), t;
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
            if (!(0, mR.hT)(t)) return ta.w.remove("lastChangeLogId"), !1;
            if (null == e.userContent) e.userContent = mb.YW.create();
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
        run: (e) => e.appearance?.uiDensity === mb.NS.COMPACT && ((e.appearance.uiDensity = mb.NS.DEFAULT), !0),
        cleanup() {},
    },
];
var mU = n(405892);
let mG = {
    init() {
        (mU.A[dd.oD.PRELOADED_USER_SETTINGS] = mM),
            (mU.A[dd.oD.FRECENCY_AND_FAVORITES_SETTINGS] = my),
            q.h.subscribe("CONNECTION_OPEN", mj),
            q.h.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", mk),
            q.h.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", mV),
            q.h.subscribe("APP_STATE_UPDATE", mF);
    },
};
function mj() {
    let e = ut.A.getFullState(),
        t = e[dd.oD.PRELOADED_USER_SETTINGS];
    t.editInfo.triggeredMigrations && pv.wc.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs),
        eU().forEach(pv.Df, (t, n) => {
            let i = e[Number(n)];
            null != i.editInfo.offlineEditDataVersion &&
                null != i.editInfo.protoToSave &&
                t.scheduleSaveFromOfflineEdit();
        });
}
function mk(e) {
    let {
        settings: { proto: t, type: n },
        delaySeconds: i,
        jitter: r,
    } = e;
    pv.Df[n].markDirty(t, { delaySeconds: i, jitter: r });
}
function mV(e) {
    let { settingsType: t } = e;
    pv.Df[t].loadIfNecessary();
}
function mF(e) {
    let { state: t } = e;
    ("inactive" === t || "background" === t) &&
        eU().forEach(pv.Df, (e, t) => {
            null != ut.A.getFullState()[Number(t)].editInfo.timeout &&
                (e.logger.log("Triggering persistChanges due to AppStateUpdate"), e.persistChanges());
        });
}
function mH() {
    let e = a;
    if (null == e || !t3.A.isOpen(e)) return !1;
    q.h.wait(() => tQ.VN(e)), e3.A.getRTCConnection()?.setPipOpen(!1), (a = null);
}
function mB() {
    let e = e3.A.getChannelId(),
        t = a === e;
    if (
        (function () {
            let e = e3.A.getChannelId(),
                t = ee.A.getChannelId();
            if (!eS.Ay.supports(eO.O5.VIDEO) || eN.A.getWindowOpen(D.MLl.CHANNEL_CALL_POPOUT)) return !0;
            let n = null != e && oN.A.getAllActiveStreams().some((t) => !tI.A.isParticipantPoppedOut(e, (0, _g._z)(t)));
            if (
                !(
                    (null != e &&
                        Object.values(rF.A.getVideoVoiceStatesForChannel(e)).some((t) => {
                            let { userId: n } = t;
                            return !eS.Ay.isLocalVideoDisabled(n) && !tI.A.isParticipantPoppedOut(e, n);
                        })) ||
                    n
                )
            )
                return !0;
            let i = t5.A.hasLayers();
            return !(i && t5.A.getLayers().includes(D.zgK.RTC_DEBUG)) && (!!i || e === t);
        })()
    )
        return mH();
    if ((t || mH(), null == e)) return !1;
    let n = i7.A.getChannel(e);
    return (
        !(null == n || t3.A.isOpen(e)) &&
        (q.h.wait(() => tQ.ho(n.id, D.o1q.VIDEO, { channel: n })),
        e3.A.getRTCConnection()?.setPipOpen(!0),
        void (a = e))
    );
}
class mY extends X.A {
    _initialize() {
        ee.A.addChangeListener(mB),
            et.A.addChangeListener(mB),
            e3.A.addChangeListener(mB),
            rF.A.addChangeListener(mB),
            t5.A.addChangeListener(mB),
            oN.A.addChangeListener(mB),
            eN.A.addChangeListener(mB),
            eS.Ay.addChangeListener(mB),
            rv.Ay.addChangeListener(mB),
            tI.A.addChangeListener(mB);
    }
    _terminate() {
        ee.A.removeChangeListener(mB),
            et.A.removeChangeListener(mB),
            e3.A.removeChangeListener(mB),
            rF.A.removeChangeListener(mB),
            t5.A.removeChangeListener(mB),
            oN.A.removeChangeListener(mB),
            eN.A.removeChangeListener(mB),
            eS.Ay.removeChangeListener(mB),
            rv.Ay.removeChangeListener(mB),
            tI.A.removeChangeListener(mB);
    }
}
let m$ = new mY();
var mz = n(885576);
let mW = new ed.Ep(),
    mK = new ed.Ep();
class mq extends X.A {
    _initialize() {
        q.h.subscribe("IDLE", this.handleIdleUpdate);
    }
    _terminate() {
        mW.stop(), mK.stop(), q.h.unsubscribe("IDLE", this.handleIdleUpdate);
    }
    handleIdleUpdate() {
        let e = mz.A.getIdleSince();
        if (!U.isPlatformEmbedded) return;
        for (let e of (mW.stop(), mK.stop(), oN.A.getAllActiveStreams())) if (e.state !== D.XYD.ENDED) return;
        if (null == e) return;
        let t = e3.A.getChannelId();
        if (null == t) return;
        mK.start(18e6, () => {
            O.default.selectVoiceChannel(null);
        });
        let n = rU.A.getGuild(e3.A.getGuildId());
        if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
        let i = i7.A.getChannel(t);
        null == i ||
            i.isGuildStageVoice() ||
            mW.start(e + n.afkTimeout * eu.A.Millis.SECOND - Date.now(), () => {
                null != (n = rU.A.getGuild(e3.A.getGuildId())) &&
                    null != n.afkChannelId &&
                    O.default.selectVoiceChannel(n.afkChannelId, !1, !1, { bypassIdleUpdate: !0 });
            });
    }
}
let mX = new mq();
var mZ = n(565058);
let mQ = !1,
    mJ = null,
    m0 = {
        init() {
            q.h.subscribe("CONNECTION_OPEN", (e) => {
                let { pendingPayments: t } = e;
                if (null != t && t.length > 0) {
                    var i;
                    if (mJ === t[0] || null == (mJ = t[0])) return;
                    (i = mJ),
                        mQ ||
                            ((mQ = !0),
                            (0, f.openModalLazy)(async () => {
                                let { default: e } = await n.e("56999").then(n.bind(n, 302810));
                                return (t) => {
                                    let { transitionState: n, onClose: r } = t;
                                    return (0, E.jsx)(e, {
                                        pendingPayment: i,
                                        transitionState: n,
                                        onClose: () => ((mQ = !1), r()),
                                    });
                                };
                            }));
                }
            });
        },
    };
var m1 = n(612181);
n(115036), n(131319), n(794383), n(530789), n(712687), n(328968), n(67480), n(116956), n(304296), n(628965);
let m2 = D.XlH.CLOSED,
    m6 = {},
    m5 = null;
function m3() {
    let e = i_.default.getCurrentUser();
    if (null == e) return m4();
    (m2 = D.XlH.OPEN),
        (m6 = {}),
        (m5 = {
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
function m4() {
    (m2 = D.XlH.CLOSED), (m5 = null), (m6 = {});
}
function m8() {
    (m2 = D.XlH.OPEN), (m6 = {});
}
class m7 extends C.Ay.Store {
    static displayName = "UserSettingsAccountStore";
    initialize() {
        this.waitFor(i_.default);
    }
    getErrors() {
        return m6;
    }
    getSubmitting() {
        return m2 === D.XlH.SUBMITTING;
    }
    getSettings() {
        return m5;
    }
}
new m7(q.h, {
    USER_SETTINGS_MODAL_OPEN: function () {
        m3();
    },
    USER_SETTINGS_MODAL_INIT: m3,
    USER_SETTINGS_MODAL_CLOSE: m4,
    LOGOUT: m4,
    USER_SETTINGS_MODAL_SUBMIT: function () {
        m2 = D.XlH.SUBMITTING;
    },
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: function (e) {
        if (m2 !== D.XlH.SUBMITTING) return !1;
        (m2 = D.XlH.OPEN), (m6 = e.errors ?? {});
    },
    USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function (e) {
        let { settings: t } = e;
        null == m5 && (m5 = {}), (m5 = { ...m5, ...t });
    },
    USER_SETTINGS_MODAL_SUBMIT_COMPLETE: m8,
    USER_SETTINGS_MODAL_RESET: function () {
        let e = i_.default.getCurrentUser();
        m8(),
            null != e &&
                (m5 = {
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
let m9 = !1;
(0, eI.as)(), C.Ay.initialize(), pL.loadServer();
let Ie = (0, g.Fe)({
        createPromise: () => n.e("11415").then(n.bind(n, 844358)),
        webpackId: 844358,
        name: "UnauthenticatedDeepLinkActivity",
        renderLoader: du,
    }),
    It = (0, g.Fe)({
        createPromise: () => n.e("15243").then(n.bind(n, 190662)),
        webpackId: 190662,
        name: "ApplicationDirectoryRoutes",
        renderLoader: du,
    });
U.isPlatformEmbedded &&
    (eJ.Ay.on("USER_SETTINGS_OPEN", (e, t) => {
        (0, e5.openUserSettings)();
    }),
    eJ.Ay.on("LAUNCH_APPLICATION", async (e, t) => {
        let i = rG.A.getActiveLibraryApplication(t);
        (await Promise.resolve().then(n.bind(n, 715671))).playApplication(t, i, {
            analyticsParams: { location: { page: D.liQ.DIRECT, object: D.ZSU.WEB_URL } },
        });
    }));
let In = F((e) => {
        let { location: t } = e;
        return (
            (0, u6.B)(() => {
                let e = R.A.getHighestState();
                if (e === D.fAW.OPEN || e === D.fAW.OPENING) return;
                let n = (0, lQ.parseSettingsUrl)({ path: t.pathname, search: t.search });
                (0, lQ.trackParseSettingsUrl)(n, "deeplink"),
                    (0, e5.openUserSettings)(n.target, { path: n.path, searchParams: n.params });
            }),
            (0, E.jsx)(w, {
                deepLinkType: ds.XK.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, search: i, installationId: r } = e,
                        [, , a, l] = t.split("/");
                    return { path: t, section: a, subsection: l, fingerprint: n, installationId: r, search: i };
                },
                children: (0, E.jsx)(I.rd, { to: lJ.A.defaultRoute }),
            })
        );
    }),
    Ii = F((e) => {
        let { location: t } = e,
            i = (0, _2.parsePlaygroundUrl)(t.pathname);
        return (
            (0, u6.B)(() => {
                let { openPlaygroundFromParsedUrl: e } = n(965042);
                e({ match: i });
            }),
            (0, E.jsx)(w, {
                deepLinkType: ds.XK.PLAYGROUND,
                path: t.pathname,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, installationId: i } = e,
                        { collection: r, story: a } = (0, _2.parsePlaygroundUrl)(t);
                    return { path: t, collection: r, story: a, fingerprint: n, installationId: i };
                },
                children: (0, E.jsx)(I.rd, { to: lJ.A.defaultRoute }),
            })
        );
    }),
    Ir = C.Ay.connectStores([cu.A, lJ.A, P.default], () => ({
        isConnected: cu.A.isConnected(),
        defaultRoute: lJ.A.defaultRoute,
        defaultRouteFallback: lJ.A.fallbackRoute,
        token: P.default.getToken(),
    }))(
        class extends p.Component {
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, E.jsx)(I.rd, { to: D.BVt.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = Ic(t);
                    return null == e ||
                        ((e.params.guildId === D.ME || null != rU.A.getGuild(e.params.guildId)) &&
                            null != i7.A.getChannel(e.params.channelId))
                        ? (0, E.jsx)(I.rd, { to: t })
                        : (0, E.jsx)(I.rd, { to: i });
                }
                return null;
            }
        },
    ),
    Ia = F((0, eC.C)(cJ, null, { passProps: !1 })),
    Il = (0, eC.C)(It, null, { passProps: !1 }),
    Is = [
        D.BVt.GUILD_BOOSTING_MARKETING(lq.pv.guildId()),
        ...Array.from(dr.qW).map((e) => D.BVt.CHANNEL(lq.pv.guildId(), e)),
    ];
function Io(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: r = null } = e.params;
    return { guildId: t ?? D.ME, channelId: n, messageId: i, threadId: r };
}
let Id = [
    {
        path: [D.BVt.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, m1.wR)() || P.default.getLoginStatus() === D.aUe.LOGGING_IN || !P.default.allowLogoutRedirect()
                ? Ia(e)
                : (0, E.jsx)(Ie, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [D.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render: function (e) {
            let { match: t } = e,
                { inviteCode: n } = t.params;
            return (
                (0, u6.B)(() => {
                    u4({ code: n });
                }),
                (0, E.jsx)(I.rd, { to: lJ.A.defaultRoute })
            );
        },
    },
    {
        path: [D.BVt.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, u6.B)(() => {
                    (0, S.G)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, Av.h)({ processedCode: t.code });
                    });
                }),
                (0, E.jsx)(I.rd, { to: lJ.A.defaultRoute })
            );
        },
    },
    { path: [D.BVt.APP], render: () => (0, E.jsx)(Ir, {}) },
    {
        path: [D.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, u6.B)(() =>
                    (0, rW.openUserProfileModal)({ userId: n, sourceAnalyticsLocations: [eg.A.URI_SCHEME] }),
                ),
                (0, E.jsx)(I.rd, { to: lJ.A.defaultRoute })
            );
        },
    },
    {
        path: [D.BVt.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: i, action: r } = t.params;
            return (
                rB.A.whenInitialized(() => {
                    rG.A.whenInitialized(() => {
                        switch (r) {
                            case "launch": {
                                let e = rG.A.getActiveLibraryApplication(i);
                                if (null == e) return;
                                Promise.resolve()
                                    .then(n.bind(n, 715671))
                                    .then((t) => {
                                        t.playApplication(e.id, e, {
                                            analyticsParams: {
                                                location: { page: D.liQ.DIRECT, object: D.ZSU.WEB_URL },
                                            },
                                        });
                                    });
                                break;
                            }
                            case "test-mode":
                                uZ.A.whenInitialized(() => y.q1(i));
                                break;
                            case "uninstall": {
                                let e = rG.A.getActiveLibraryApplication(i);
                                if (null == e) return;
                                (0, N.z)(e.id, e.branchId, D.ThZ.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, E.jsx)(I.rd, { to: D.BVt.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [D.BVt.GUILD_CREATE],
        render: function () {
            return (
                (0, u6.B)(() => uv.A.openCreateGuildModal({ location: "External link" })),
                (0, E.jsx)(I.rd, { to: lJ.A.defaultRoute })
            );
        },
    },
    {
        path: [D.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: i, subsection: r } = t.params,
                a = (0, m.parse)(location.search).feature;
            return (
                (0, u6.B)(() => {
                    var e;
                    return (
                        (e = { section: (0, u7.A)(D.BEX, i), subsection: (0, u7.A)(D.nd0, r), feature: a }),
                        void (0, f.openModalLazy)(
                            async () => {
                                let { default: t } = await n.e("66460").then(n.bind(n, 980791));
                                return (n) => (0, E.jsx)(t, { ...n, ...e });
                            },
                            { modalKey: "Guild Settings Picker Modal" },
                        )
                    );
                }),
                (0, E.jsx)(I.rd, { to: lJ.A.defaultRoute })
            );
        },
    },
    {
        path: [D.BVt.DEVELOPER_ACTIVATE_APPLICATION_TEST_MODE],
        render: function (e) {
            let { location: t } = e,
                n = (0, m.parse)(t.search),
                i = "string" == typeof n.applicationId ? n.applicationId : null,
                r = "true" === n.openGameProfile;
            return (
                (0, u6.B)(() => {
                    null != i &&
                        y.q1(i).then((e) => {
                            null != e &&
                                (0, uy.nf)(uy.HP.APPLICATION_TEST_MODE_DEBUG, { shouldAutoOpenGameProfile: r });
                        });
                }),
                (0, E.jsx)(I.rd, { to: lJ.A.defaultRoute })
            );
        },
    },
    { path: [D.BVt.SETTINGS(":section", ":subsection?")], render: In },
    { path: [D.BVt.PLAYGROUND(":collection?", ":story?")], render: Ii },
    {
        path: [D.BVt.USER_GUILD_NOTIFICATION_SETTINGS(lq.pv.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, u6.B)(() => {
                    (0, f.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("28367"),
                            n.e("8555"),
                            n.e("30282"),
                            n.e("41268"),
                        ]).then(n.bind(n, 893605));
                        return (t) => (0, E.jsx)(e, { ...t, guildId: i });
                    });
                }),
                (0, E.jsx)(I.rd, { to: D.BVt.CHANNEL(i) })
            );
        },
    },
    {
        path: [D.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, u6.B)(() => (0, e5.openUserSettings)(e6.X.GIFT_PANEL)), (0, E.jsx)(I.rd, { to: lJ.A.defaultRoute })
            );
        },
    },
    {
        path: [D.BVt.WELCOME(lq.pv.guildId({ optional: !0 }), lq.pv.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, _V.C)(_X.zY.MARKETING_UNCLAIMED);
            let r = D.BVt.CHANNEL(n, i);
            return (0, E.jsx)(I.rd, { to: r });
        },
    },
    {
        path: [D.BVt.GUILD_EVENT_DETAILS(lq.pv.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, u6.B)(() => {
                    (0, oO.uR)({ eventId: i });
                }),
                (0, E.jsx)(I.rd, { to: D.BVt.CHANNEL(n) })
            );
        },
    },
    {
        path: [D.BVt.GUILD_SETTINGS(lq.pv.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: r } = t.params;
            return (
                (0, u6.B)(() => {
                    u8.A.open(n, (0, u7.A)(D.BEX, i), void 0, (0, u7.A)(D.nd0, r));
                }),
                (0, E.jsx)(I.rd, { to: D.BVt.CHANNEL(n) })
            );
        },
        isChatRoute: !0,
    },
    {
        path: [
            D.BVt.CHANNEL_THREAD_VIEW(lq.pv.guildId(), lq.pv.channelId(), ":threadId", ":messageId?"),
            D.BVt.CHANNEL(lq.pv.guildId(), lq.pv.channelId({ optional: !0 }), ":messageId?"),
            D.BVt.ACTIVITY,
            D.BVt.ACTIVITIES,
            D.BVt.ACTIVITIES_HAPPENING_NOW,
            D.BVt.APPLICATION_LIBRARY,
            D.BVt.APPLICATION_STORE,
            D.BVt.MESSAGE_REQUESTS,
            D.BVt.COLLECTIBLES_SHOP,
            D.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
            D.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            D.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
            D.BVt.GUILD_DISCOVERY,
            D.BVt.QUEST_HOME_DEPRECATED,
            D.BVt.QUEST_HOME,
            D.BVt.ICYMI,
            D.BVt.GLOBAL_DISCOVERY,
            D.BVt.GUILD_MEMBER_VERIFICATION(lq.pv.guildId()),
            D.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(lq.pv.guildId(), ":inviteCode?"),
            D.BVt.GUILD_BOOSTING_MARKETING(lq.pv.guildId()),
            D.BVt.GUILD_FEATURE(":feature", lq.pv.guildId()),
            D.BVt.FEATURE(":feature"),
            D.BVt.FAMILY_CENTER,
        ],
        render: Ia,
        isChatRoute: !0,
    },
    { path: [D.BVt.APPLICATION_DIRECTORY], render: Il },
    {
        path: [D.BVt.GAME_SHOP(lq.pv.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: i, shopSlug: r } = t.params;
            return (0, E.jsx)(I.rd, { to: D.BVt.CHANNELS_GAME_SHOP(n, 0, i, r) });
        },
    },
];
function Ic(e) {
    for (let { path: t, isChatRoute: n } of Id) {
        if (!n) continue;
        let i = (0, lX.B)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function Iu(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!cu.A.isConnected()) return;
    let { location: r } = (0, aO.JK)();
    r.pathname === i && (null == i7.A.getChannel(t) ? (0, aO.bG)(D.BVt.CHANNEL(n)) : (0, aO.bG)(i));
}
class I_ extends p.PureComponent {
    historyUnlisten = () => {};
    rewriterUnlisten = () => {};
    componentDidMount() {
        eJ.Ay.setZoomFactor(H.A.zoom),
            pL.init(),
            eD.initialize(),
            Ap.initialize(),
            uW.initialize(),
            mX.initialize(),
            uX.initialize(),
            AR.A.initialize(),
            uP.initialize(),
            _j.initialize(),
            B.A.init(),
            u2.init(),
            uQ.init(),
            _1.initialize(),
            eo.initialize(),
            uV.initialize(),
            Aj.initialize(),
            W.Ay.initialize(),
            nt.initialize(),
            m$.initialize(),
            _s.initialize(),
            AA.initialize(),
            z.A.initialize(),
            _o.init(),
            ug.init(),
            m0.init(),
            $.A.initialize(),
            m_.init(),
            mZ.A.init(),
            mT.init(),
            pY.initialize(),
            pW.initialize(),
            mA.A.initialize(),
            mG.init(),
            uU.initialize(),
            Y.A.initialize(),
            pH.initialize(),
            At.A.initialize(),
            Ae.initialize(),
            Ar.initialize(),
            uT.initialize(),
            uO.initialize(),
            uB.initialize(),
            _A.initialize(),
            _k.A.initialize(),
            Ak.A.initialize(),
            Ab.initialize(),
            c9.initialize(),
            em.initialize(),
            (this.rewriterUnlisten = lK.A.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = lK.A.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        pL.terminate(),
            mX.terminate(),
            AR.A.terminate(),
            Ap.terminate(),
            eD.terminate(),
            W.Ay.terminate(),
            nt.terminate(),
            m$.terminate(),
            z.A.terminate(),
            Aj.terminate(),
            AA.terminate(),
            mA.A.terminate(),
            $.A.terminate(),
            uU.terminate(),
            _k.A.terminate(),
            Y.A.terminate(),
            Ak.A.terminate(),
            pH.terminate(),
            At.A.terminate(),
            Ae.terminate(),
            Ar.terminate(),
            uT.terminate(),
            uO.terminate(),
            Ab.terminate(),
            uF.A.terminate(),
            c9.terminate(),
            em.terminate(),
            uB.terminate(),
            _A.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (cu.A.isConnected() || cu.A.isTryingToConnect()) return;
            let t = P.default.getToken();
            null == t ||
                ((function (e) {
                    for (let t of AH) if (null != (0, lX.B)(e, { path: t })) return !0;
                    return !1;
                })(e) &&
                    T.A.startSession(t));
        })(t),
            (function (e, t) {
                let n = Ic(e);
                if (null == n) return;
                let { guildId: i, channelId: r, messageId: a, threadId: l } = Io(n),
                    s = (0, lq.nn)(i),
                    o = (0, lq.ts)(r),
                    d = (0, lq.ts)(l),
                    c = et.A.getGuildId(),
                    u = c !== i;
                if ((s && u && L.A.selectGuild(i), s && o)) {
                    let n = ee.A.getChannelId(c),
                        s = n !== r,
                        o = null != p2.Ay.getGuildSidebarState(i);
                    if (!m9 || u || s || null != a) {
                        (m9 = !0), O.default.selectChannel({ guildId: i, channelId: r, messageId: a });
                        let { summaryId: e } = (0, m.parse)(t);
                        null != e && pK.Ay.setSelectedSummary(r, e);
                    }
                    if (
                        (o &&
                            s &&
                            null != r &&
                            null != p2.Ay.getCurrentSidebarChannelId(r) &&
                            pO.A.closeChannelSidebar(r),
                        null != l && d)
                    ) {
                        let e = p2.Ay.getCurrentSidebarChannelId(n),
                            t = e !== l;
                        if (null != r && null != l && t)
                            if (o) (0, aO.bG)(D.BVt.CHANNEL(i, l, a));
                            else {
                                let e = { type: py.LU.THREAD };
                                null != a && (e.initialMessageId = a),
                                    pO.A.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: r,
                                        channelId: l,
                                        details: e,
                                    });
                            }
                        else o && null != e && null != r && pO.A.closeChannelSidebar(r);
                    } else null == r || s || pO.A.closeChannelSidebar(r);
                    let _ = nG.getIsOpen();
                    if (r === dr.VV.ROLE_SUBSCRIPTIONS) nw.closeSidebar();
                    else if (u && _) {
                        let t = null == c && i === D.ME,
                            n = e === D.BVt.GUILD_DISCOVERY;
                        t || n ? nw.closeSidebar() : nw.openSidebar();
                    } else ((s && _) || (!u && !s)) && nw.closeSidebar();
                } else Is.some((t) => (0, lX.B)(e, t)?.isExact === !0) || (0, aO.bG)(lJ.A.fallbackRoute);
            })(t, n),
            (0, uD.MS)();
    }
    ensureChannelMatchesGuild(e) {
        if (!cu.A.isConnected()) return null;
        let { pathname: t } = e,
            n = Ic(t);
        if (null == n) return null;
        let { guildId: i, channelId: r, threadId: a } = Io(n),
            l = (0, lq.nn)(i) && i !== D.ME && i !== D.YYv;
        if (null != r && (0, lq.ts)(r) && !(0, dr.jq)(r) && l) {
            let n = i7.A.getChannel(r);
            if (null == n) pq.A.loadThread(r).then(() => Iu({ channelId: r, guildId: i, pathname: t }));
            else if (n.guild_id !== i && i !== D.gNP) return { path: D.BVt.CHANNEL(i), state: e.state };
            if (null != a) {
                if (!((0, lq.ts)(a) && !(0, dr.jq)(r))) return null;
                let n = i7.A.getChannel(a);
                if (null == n) pq.A.loadThread(a).then(() => Iu({ channelId: a, guildId: i, pathname: t }));
                else if (n?.parent_id !== r)
                    return pO.A.closeChannelSidebar(r), { path: D.BVt.CHANNEL(i, r), state: e.state };
            }
        }
        return null;
    }
    render() {
        return (0, E.jsxs)(p.Fragment, {
            children: [
                (0, E.jsxs)(I.dO, {
                    children: [
                        (0, E.jsx)(I.rd, { exact: !0, from: "/channels", to: "/" }),
                        Id.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, E.jsx)(I.qh, { path: t, render: n }, t[0]);
                        }),
                        (0, E.jsx)(I.rd, { to: "/" }),
                    ],
                }),
                (0, E.jsx)(ub.A, {}),
            ],
        });
    }
}
let IA = I_;
