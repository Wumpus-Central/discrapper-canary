"use strict";
let i;
n.d(t, { A: () => em }), n(321073);
var s = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(695497),
    d = n.n(o),
    c = n(111956),
    u = n.n(c),
    h = n(33851),
    p = n.n(h),
    A = n(311907),
    f = n(397927),
    g = n(442433),
    _ = n(684013),
    m = n(684136),
    E = n(34968),
    x = n(775121),
    y = n(836753),
    v = n(793574),
    S = n(688810),
    I = n(235986);
n(607470);
var C = n(15285),
    N = n(880144),
    T = n(905552),
    O = n(768841),
    b = n(265367),
    D = n(616356),
    j = n(961350),
    R = n(734057),
    w = n(71393),
    L = n(555528),
    k = n(430452),
    M = n(309010),
    P = n(70142),
    G = n(157257),
    U = n(712687),
    V = n(532624),
    z = n(242286),
    H = n(899699),
    W = n(256415),
    K = n(531685),
    B = n(927813),
    Y = n(723702),
    F = n(837921),
    Z = n(316501),
    J = n(350535),
    X = n(9302),
    Q = n(641376),
    q = n(41984),
    $ = n(589051),
    ee = n(223251),
    et = n(764559),
    en = n(227308),
    ei = n(409110),
    es = n(160162),
    el = n(395809),
    ea = n(755029),
    er = n(592598),
    eo = n(672396);
n(644434);
var ed = n(652215),
    ec = n(985018),
    eu = n(675490);
(A.Ay.PersistedStore.disableWrites = __OVERLAY__), A.Ay.initialize();
let eh = null;
function ep(e) {
    e.preventDefault();
}
function eA(e) {
    (0, g.L3)(e, async () => {
        let { default: e } = await n.e("92843").then(n.bind(n, 254790));
        return (t) => (0, s.jsx)(e, { ...t, version: 0 });
    });
}
Y.isPlatformEmbedded;
let ef = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: l } = e,
            a = l ? f.DUT : "div";
        return (0, s.jsx)(a, {
            className: r()(eu.LK, { [eu.Zo]: !l, [eu.vZ]: l, [eu.Az]: !l && i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: s } = e;
                s === ed.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: eA,
            children: l
                ? null
                : (0, s.jsx)("div", {
                      className: eu.G3,
                      children: (0, s.jsx)(m.A, { variant: m.A.Variants.BOLD, keybind: t, closeAction: n }),
                  }),
        });
    },
    eg = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l } = e;
        return { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l };
    };
class e_ extends l.Component {
    didUpdate = !1;
    constructor(e) {
        super(e);
        const t = e.locked && W.default.isPinned(ed.uss.TEXT);
        x.A.setLayout(t ? E.dY : E.CJ), t && x.A.enable();
    }
    handleLock() {
        (0, f.ueM)() || U.A.isOpen() || _.A.setInputLocked(!0, (0, X.getPID)());
    }
    handleDeactivate() {
        _.A.deactivateAllRegions();
    }
    debouncedForceUpdate = u()(() => {
        this.forceUpdate();
    }, 500);
    handleWindowResize = () => {
        z.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate();
    };
    componentDidMount() {
        _.A.startSession(), O.A.initialize(), y.A.initialize(), b.A.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", ep, !1), null != eh)) {
                    let e = Date.now() - eh;
                    _.A.track(ed.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (eh = null);
                }
                x.A.disable(),
                    (this.activeKeyEventShapes = []),
                    W.default.isPinned(ed.uss.TEXT) && (x.A.setLayout(E.dY), x.A.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", ep, !1),
                    null == eh && ((eh = Date.now()), _.A.track(ed.HAw.OVERLAY_UNLOCKED)),
                    x.A.disable(),
                    (this.activeKeyEventShapes = []),
                    x.A.setLayout(E.CJ),
                    x.A.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, J.pi)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let e,
            {
                connectedToVoice: t,
                locked: i,
                canGoLive: l,
                isStreaming: a,
                voiceGuild: r,
                voiceChannelId: o,
                game: d,
                showKeybindNotification: c,
                dismissKeybindNotification: u,
            } = this.props;
        _.A.track(ed.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: W.default.isPinned(ed.uss.TEXT),
            overlay_render_method: q.Ue[q.Ue.Hook],
            unpinned_widget_types: L.A.getAllUnpinnedPinnedWidgets(X.OVERLAY_LAYOUT_ID),
        }),
            Q.A.trackExposure({ location: "Overlay" });
        let h = l && !a && null != d,
            p = t && null != r && null != o,
            A = er.A.isNotificationDisabled(eo.KS.WelcomeNudge),
            g = er.A.isNotificationDisabled(eo.KS.GoLiveNudge);
        if (
            (A || (e = { type: eo.Jr.WELCOME }),
            c && !A
                ? (e = { type: eo.Jr.KEYBIND_INDICATORS, markAsDismissed: u })
                : h && p && !g
                  ? (e = { type: eo.Jr.GO_LIVE_VOICE, game: d, voiceChannelId: o, voiceGuild: r })
                  : h && !g && (e = { type: eo.Jr.GO_LIVE_NON_VOICE, game: d }),
            setTimeout(async () => {
                await (0, Z.pF)(), null != e ? _.A.overlayMounted(e) : _.A.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            i && window.addEventListener("contextmenu", ep, !1),
            Y.isPlatformEmbedded)
        ) {
            let e = (0, H.m)();
            if (null == e) return;
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    _.A.track(ed.HAw.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand?.({ message: "set_perf_report_interval", interval: 15 * B.A.Millis.MINUTE })),
                F.Ay.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                    W.default.getDisableExternalLinkAlert() || t === P.A.getLastURL()
                        ? F.Ay.send("OPEN_EXTERNAL_URL", t)
                        : (0, f.mMO)(async () => {
                              let { default: e } = await n.e("30582").then(n.bind(n, 613429));
                              return (n) => (0, s.jsx)(e, { ...n, url: t });
                          });
                });
        }
        window.addEventListener("keydown", this.onKeyDownGlobal, !0),
            window.addEventListener("keyup", this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize),
            window.removeEventListener("keydown", this.onKeyDownGlobal, !0),
            window.removeEventListener("keyup", this.onKeyUpGlobal, !0),
            this.props.locked && window.removeEventListener("contextmenu", ep, !1),
            O.A.terminate(),
            y.A.terminate(),
            b.A.terminate();
    }
    activeKeyEventShapes = [];
    lockEventShape = (0, J.pi)(this.props.keybindKeyCodes);
    getActiveKeyEventIndex = (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e));
    onKeyDownGlobal = (e) => {
        let t = eg(e),
            n = this.getActiveKeyEventIndex(t) > -1,
            i = [16, 17, 18, 91].includes(e.keyCode);
        n || i || this.activeKeyEventShapes.push(t),
            this.activeKeyEventShapes.length === this.lockEventShape.length &&
                this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) &&
                (e.preventDefault(), e.stopPropagation());
        let { locked: s, activeRegions: l } = this.props;
        t.keyCode === d().codes.esc && s && l.has(ed.ajI.TEXT_WIDGET) && _.A.deactivateAllRegions();
    };
    onKeyUpGlobal = (e) => {
        let t = eg(e),
            n = this.getActiveKeyEventIndex(t);
        n > -1 && this.activeKeyEventShapes.splice(n, 1);
    };
    renderInvalidSizeMessage() {
        return (0, s.jsx)(I.A, {
            justify: I.A.Justify.CENTER,
            align: I.A.Align.CENTER,
            className: eu.rU,
            children: (0, s.jsx)("div", {
                className: eu.JV,
                children: ec.intl.format(ec.t.ketnW0, X.OVERLAY_MIN_RESOLUTION),
            }),
        });
    }
    render() {
        let {
                locked: e,
                keybind: t,
                incompatibleApp: n,
                initialized: l,
                isPreviewingInGame: a,
                activeRegions: o,
                windowSize: d,
                voiceGuild: c,
                voiceChannelId: u,
            } = this.props,
            { width: h, height: p } = d;
        if (0 === h || 0 === p || n || !l) return null;
        let A = e || a,
            f = j.default.getId();
        return (0, s.jsxs)("div", {
            className: eu.Lw,
            children: [
                (0, s.jsx)(es.A, {}),
                a && (0, s.jsx)("header", { className: eu.tk, children: ec.intl.string(ec.t.iOq96m) }),
                i,
                (!e || o.has(ed.ajI.TEXT_WIDGET)) &&
                    (0, s.jsx)(ef, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a,
                    }),
                (0, X.validResolution)(d)
                    ? (0, s.jsx)(ei.A, { className: r()({ [eu.ZK]: e, [eu.al]: !e }) })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, s.jsx)(ea.A, {}),
                null != c && null != u && (0, s.jsx)(el.A, { streamerId: f, guildId: c.id, channelId: u }),
                (0, s.jsx)(en.A, { locked: A, keybind: t }),
                (0, s.jsx)(ee.A, {}),
                (0, s.jsx)("div", { className: eu._C }),
            ],
        });
    }
}
function em() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: a,
        } = (0, A.cf)([W.default], () => ({
            locked: W.default.isLocked((0, X.getPID)()),
            initialized: W.default.initialized,
            incompatibleApp: W.default.incompatibleApp,
            activeRegions: W.default.getActiveRegions(),
            isPreviewingInGame: W.default.isPreviewingInGame(),
        })),
        r = (0, A.bG)([K.A], () => K.A.windowSize()),
        o = (0, A.bG)([V.Ay], () => V.Ay.getOverlayKeybind()),
        d = (0, A.bG)([M.A], () => M.A.getVoiceChannelId()),
        c = (0, A.bG)([R.A], () => R.A.getChannel(d)),
        u = (0, A.bG)([w.A], () => (null != c ? w.A.getGuild(c.guild_id) : null)),
        h = (0, A.bG)([C.Ay, G.A], () => (0, T.A)(C.Ay, G.A)),
        p = (0, A.bG)([k.A], () => (0, N.A)(k.A)),
        f = (0, A.bG)([D.A], () => null != D.A.getCurrentUserActiveStream()),
        { analyticsLocations: g } = (0, S.Ay)(v.A.OVERLAY),
        { showKeybindIndicators: _, dismissKeybindNotification: m } = (0, et.B)();
    return (
        l.useEffect(() => {
            t && (0, $.E)();
        }, [t]),
        (0, s.jsx)(S.f5, {
            value: g,
            children: (0, s.jsx)(e_, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: a,
                windowSize: r,
                keybind: null != o ? (0, J.dI)(o.shortcut, !0) : "???",
                keybindKeyCodes: null != o ? o.shortcut : [],
                connectedToVoice: null != d,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: u,
                game: h,
                canGoLive: p,
                isStreaming: f,
                showKeybindNotification: _,
                dismissKeybindNotification: m,
            }),
        })
    );
}
