"use strict";
let i;
n.d(t, { A: () => ef }), n(321073);
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
    _ = n(311907),
    A = n(397927),
    f = n(442433),
    g = n(684013),
    m = n(684136),
    x = n(34968),
    E = n(775121),
    y = n(836753),
    S = n(793574),
    v = n(688810),
    C = n(235986);
n(607470);
var I = n(15285),
    N = n(880144),
    T = n(905552),
    b = n(768841),
    O = n(265367),
    D = n(616356),
    j = n(734057),
    w = n(71393),
    R = n(555528),
    L = n(430452),
    k = n(309010),
    M = n(70142),
    P = n(157257),
    G = n(712687),
    U = n(532624),
    V = n(242286),
    z = n(899699),
    H = n(256415),
    W = n(531685),
    K = n(927813),
    B = n(723702),
    Y = n(837921),
    F = n(316501),
    Z = n(350535),
    X = n(9302),
    J = n(641376),
    Q = n(41984),
    q = n(589051),
    $ = n(223251),
    ee = n(764559),
    et = n(227308),
    en = n(409110),
    ei = n(160162),
    es = n(755029),
    el = n(592598),
    ea = n(672396);
n(644434);
var er = n(652215),
    eo = n(985018),
    ed = n(675490);
(_.Ay.PersistedStore.disableWrites = __OVERLAY__), _.Ay.initialize();
let ec = null;
function eu(e) {
    e.preventDefault();
}
function eh(e) {
    (0, f.L3)(e, async () => {
        let { default: e } = await n.e("92843").then(n.bind(n, 254790));
        return (t) => (0, s.jsx)(e, { ...t, version: 0 });
    });
}
B.isPlatformEmbedded;
let ep = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: l } = e,
            a = l ? A.DUT : "div";
        return (0, s.jsx)(a, {
            className: r()(ed.LK, { [ed.Zo]: !l, [ed.vZ]: l, [ed.Az]: !l && i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: s } = e;
                s === er.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: eh,
            children: l
                ? null
                : (0, s.jsx)("div", {
                      className: ed.G3,
                      children: (0, s.jsx)(m.A, { variant: m.A.Variants.BOLD, keybind: t, closeAction: n }),
                  }),
        });
    },
    e_ = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l } = e;
        return { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l };
    };
class eA extends l.Component {
    didUpdate = !1;
    constructor(e) {
        super(e);
        const t = e.locked && H.default.isPinned(er.uss.TEXT);
        E.A.setLayout(t ? x.dY : x.CJ), t && E.A.enable();
    }
    handleLock() {
        (0, A.ueM)() || G.A.isOpen() || g.A.setInputLocked(!0, (0, X.getPID)());
    }
    handleDeactivate() {
        g.A.deactivateAllRegions();
    }
    debouncedForceUpdate = u()(() => {
        this.forceUpdate();
    }, 500);
    handleWindowResize = () => {
        V.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate();
    };
    componentDidMount() {
        g.A.startSession(), b.A.initialize(), y.A.initialize(), O.A.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", eu, !1), null != ec)) {
                    let e = Date.now() - ec;
                    g.A.track(er.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (ec = null);
                }
                E.A.disable(),
                    (this.activeKeyEventShapes = []),
                    H.default.isPinned(er.uss.TEXT) && (E.A.setLayout(x.dY), E.A.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", eu, !1),
                    null == ec && ((ec = Date.now()), g.A.track(er.HAw.OVERLAY_UNLOCKED)),
                    E.A.disable(),
                    (this.activeKeyEventShapes = []),
                    E.A.setLayout(x.CJ),
                    E.A.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, Z.pi)(this.props.keybindKeyCodes));
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
        g.A.track(er.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: H.default.isPinned(er.uss.TEXT),
            overlay_render_method: Q.Ue[Q.Ue.Hook],
            unpinned_widget_types: R.A.getAllUnpinnedPinnedWidgets(X.OVERLAY_LAYOUT_ID),
        }),
            J.A.trackExposure({ location: "Overlay" });
        let h = l && !a && null != d,
            p = t && null != r && null != o,
            _ = el.A.isNotificationDisabled(ea.KS.WelcomeNudge),
            f = el.A.isNotificationDisabled(ea.KS.GoLiveNudge);
        if (
            (_ || (e = { type: ea.Jr.WELCOME }),
            c && !_
                ? (e = { type: ea.Jr.KEYBIND_INDICATORS, markAsDismissed: u })
                : h && p && !f
                  ? (e = { type: ea.Jr.GO_LIVE_VOICE, game: d, voiceChannelId: o, voiceGuild: r })
                  : h && !f && (e = { type: ea.Jr.GO_LIVE_NON_VOICE, game: d }),
            setTimeout(async () => {
                await (0, F.pF)(), null != e ? g.A.overlayMounted(e) : g.A.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            i && window.addEventListener("contextmenu", eu, !1),
            B.isPlatformEmbedded)
        ) {
            let e = (0, z.m)();
            if (null == e) return;
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    g.A.track(er.HAw.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand?.({ message: "set_perf_report_interval", interval: 15 * K.A.Millis.MINUTE })),
                Y.Ay.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                    H.default.getDisableExternalLinkAlert() || t === M.A.getLastURL()
                        ? Y.Ay.send("OPEN_EXTERNAL_URL", t)
                        : (0, A.mMO)(async () => {
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
            this.props.locked && window.removeEventListener("contextmenu", eu, !1),
            b.A.terminate(),
            y.A.terminate(),
            O.A.terminate();
    }
    activeKeyEventShapes = [];
    lockEventShape = (0, Z.pi)(this.props.keybindKeyCodes);
    getActiveKeyEventIndex = (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e));
    onKeyDownGlobal = (e) => {
        let t = e_(e),
            n = this.getActiveKeyEventIndex(t) > -1,
            i = [16, 17, 18, 91].includes(e.keyCode);
        n || i || this.activeKeyEventShapes.push(t),
            this.activeKeyEventShapes.length === this.lockEventShape.length &&
                this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) &&
                (e.preventDefault(), e.stopPropagation());
        let { locked: s, activeRegions: l } = this.props;
        t.keyCode === d().codes.esc && s && l.has(er.ajI.TEXT_WIDGET) && g.A.deactivateAllRegions();
    };
    onKeyUpGlobal = (e) => {
        let t = e_(e),
            n = this.getActiveKeyEventIndex(t);
        n > -1 && this.activeKeyEventShapes.splice(n, 1);
    };
    renderInvalidSizeMessage() {
        return (0, s.jsx)(C.A, {
            justify: C.A.Justify.CENTER,
            align: C.A.Align.CENTER,
            className: ed.rU,
            children: (0, s.jsx)("div", {
                className: ed.JV,
                children: eo.intl.format(eo.t.ketnW0, X.OVERLAY_MIN_RESOLUTION),
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
            } = this.props,
            { width: c, height: u } = d;
        if (0 === c || 0 === u || n || !l) return null;
        let h = e || a;
        return (0, s.jsxs)("div", {
            className: ed.Lw,
            children: [
                (0, s.jsx)(ei.A, {}),
                a && (0, s.jsx)("header", { className: ed.tk, children: eo.intl.string(eo.t.iOq96m) }),
                i,
                (!e || o.has(er.ajI.TEXT_WIDGET)) &&
                    (0, s.jsx)(ep, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a,
                    }),
                (0, X.validResolution)(d)
                    ? (0, s.jsx)(en.A, { className: r()({ [ed.ZK]: e, [ed.al]: !e }) })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, s.jsx)(es.A, {}),
                (0, s.jsx)(et.A, { locked: h, keybind: t }),
                (0, s.jsx)($.A, {}),
                (0, s.jsx)("div", { className: ed._C }),
            ],
        });
    }
}
function ef() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: a,
        } = (0, _.cf)([H.default], () => ({
            locked: H.default.isLocked((0, X.getPID)()),
            initialized: H.default.initialized,
            incompatibleApp: H.default.incompatibleApp,
            activeRegions: H.default.getActiveRegions(),
            isPreviewingInGame: H.default.isPreviewingInGame(),
        })),
        r = (0, _.bG)([W.A], () => W.A.windowSize()),
        o = (0, _.bG)([U.Ay], () => U.Ay.getOverlayKeybind()),
        d = (0, _.bG)([k.A], () => k.A.getVoiceChannelId()),
        c = (0, _.bG)([j.A], () => j.A.getChannel(d)),
        u = (0, _.bG)([w.A], () => (null != c ? w.A.getGuild(c.guild_id) : null)),
        h = (0, _.bG)([I.Ay, P.A], () => (0, T.A)(I.Ay, P.A)),
        p = (0, _.bG)([L.Ay], () => (0, N.A)(L.Ay)),
        A = (0, _.bG)([D.A], () => null != D.A.getCurrentUserActiveStream()),
        { analyticsLocations: f } = (0, v.Ay)(S.A.OVERLAY),
        { showKeybindIndicators: g, dismissKeybindNotification: m } = (0, ee.B)();
    return (
        l.useEffect(() => {
            t && (0, q.E)();
        }, [t]),
        (0, s.jsx)(v.f5, {
            value: f,
            children: (0, s.jsx)(eA, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: a,
                windowSize: r,
                keybind: null != o ? (0, Z.dI)(o.shortcut, !0) : "???",
                keybindKeyCodes: null != o ? o.shortcut : [],
                connectedToVoice: null != d,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: u,
                game: h,
                canGoLive: p,
                isStreaming: A,
                showKeybindNotification: g,
                dismissKeybindNotification: m,
            }),
        })
    );
}
