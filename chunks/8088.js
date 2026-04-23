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
    A = n(311907),
    f = n(939249),
    _ = n(192308),
    g = n(442433),
    m = n(684013),
    E = n(684136),
    x = n(34968),
    y = n(775121),
    v = n(836753),
    S = n(793574),
    C = n(688810),
    I = n(235986);
n(607470);
var N = n(15285),
    T = n(880144),
    b = n(905552),
    O = n(768841),
    D = n(265367),
    j = n(616356),
    L = n(734057),
    R = n(71393),
    w = n(555528),
    k = n(430452),
    M = n(309010),
    P = n(70142),
    G = n(157257),
    V = n(712687),
    U = n(532624),
    z = n(242286),
    H = n(899699),
    W = n(256415),
    K = n(531685),
    B = n(927813),
    F = n(723702),
    Y = n(837921),
    Z = n(316501),
    X = n(350535),
    J = n(9302),
    Q = n(41984),
    q = n(589051),
    $ = n(223251),
    ee = n(227308),
    et = n(409110),
    en = n(160162),
    ei = n(755029),
    es = n(592598),
    el = n(672396);
n(644434);
var ea = n(652215),
    er = n(985018),
    eo = n(610291);
(A.Ay.PersistedStore.disableWrites = __OVERLAY__), A.Ay.initialize();
let ed = null;
function ec(e) {
    e.preventDefault();
}
function eu(e) {
    (0, g.L3)(e, async () => {
        let { default: e } = await n.e("92843").then(n.bind(n, 254790));
        return (t) => (0, s.jsx)(e, { ...t, version: 0 });
    });
}
F.isPlatformEmbedded;
let eh = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: l } = e,
            a = l ? f.D : "div";
        return (0, s.jsx)(a, {
            className: r()(eo.LK, { [eo.Zo]: !l, [eo.vZ]: l, [eo.Az]: !l && i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: s } = e;
                s === ea.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: eu,
            children: l
                ? null
                : (0, s.jsx)("div", {
                      className: eo.G3,
                      children: (0, s.jsx)(E.A, { variant: E.A.Variants.BOLD, keybind: t, closeAction: n }),
                  }),
        });
    },
    ep = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l } = e;
        return { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l };
    };
class eA extends l.Component {
    didUpdate = !1;
    constructor(e) {
        super(e);
        const t = e.locked && W.default.isPinned(ea.uss.TEXT);
        y.A.setLayout(t ? x.dY : x.CJ), t && y.A.enable();
    }
    handleLock() {
        (0, _.hasAnyModalOpen)() || V.A.isOpen() || m.A.setInputLocked(!0, (0, J.getPID)());
    }
    handleDeactivate() {
        m.A.deactivateAllRegions();
    }
    debouncedForceUpdate = u()(() => {
        this.forceUpdate();
    }, 500);
    handleWindowResize = () => {
        z.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate();
    };
    componentDidMount() {
        m.A.startSession(), O.A.initialize(), v.A.initialize(), D.A.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (!this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", ec, !1), null != ed)) {
                    let e = Date.now() - ed;
                    m.A.track(ea.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (ed = null);
                }
                y.A.disable(),
                    (this.activeKeyEventShapes = []),
                    W.default.isPinned(ea.uss.TEXT) && (y.A.setLayout(x.dY), y.A.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", ec, !1),
                    null == ed && ((ed = Date.now()), m.A.track(ea.HAw.OVERLAY_UNLOCKED)),
                    y.A.disable(),
                    (this.activeKeyEventShapes = []),
                    y.A.setLayout(x.CJ),
                    y.A.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, X.pi)(this.props.keybindKeyCodes));
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
            } = this.props;
        m.A.track(ea.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: W.default.isPinned(ea.uss.TEXT),
            overlay_render_method: Q.Ue[Q.Ue.Hook],
            unpinned_widget_types: w.A.getAllUnpinnedPinnedWidgets(J.OVERLAY_LAYOUT_ID),
        });
        let c = l && !a && null != d,
            u = t && null != r && null != o,
            h = es.A.isNotificationDisabled(el.KS.WelcomeNudge),
            p = es.A.isNotificationDisabled(el.KS.GoLiveNudge);
        if (
            (h || (e = { type: el.Jr.WELCOME }),
            c && u && !p
                ? (e = { type: el.Jr.GO_LIVE_VOICE, game: d, voiceChannelId: o, voiceGuild: r })
                : c && !p && (e = { type: el.Jr.GO_LIVE_NON_VOICE, game: d }),
            setTimeout(async () => {
                await (0, Z.pF)(), null != e ? m.A.overlayMounted(e) : m.A.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            i && window.addEventListener("contextmenu", ec, !1),
            F.isPlatformEmbedded)
        ) {
            let e = (0, H.m)();
            if (null == e) return;
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    m.A.track(ea.HAw.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand?.({ message: "set_perf_report_interval", interval: 15 * B.A.Millis.MINUTE })),
                Y.Ay.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                    W.default.getDisableExternalLinkAlert() || t === P.A.getLastURL()
                        ? Y.Ay.send("OPEN_EXTERNAL_URL", t)
                        : (0, _.openModalLazy)(async () => {
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
            this.props.locked && window.removeEventListener("contextmenu", ec, !1),
            O.A.terminate(),
            v.A.terminate(),
            D.A.terminate();
    }
    activeKeyEventShapes = [];
    lockEventShape = (0, X.pi)(this.props.keybindKeyCodes);
    getActiveKeyEventIndex = (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e));
    onKeyDownGlobal = (e) => {
        let t = ep(e),
            n = this.getActiveKeyEventIndex(t) > -1,
            i = [16, 17, 18, 91].includes(e.keyCode);
        n || i || this.activeKeyEventShapes.push(t),
            this.activeKeyEventShapes.length === this.lockEventShape.length &&
                this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) &&
                (e.preventDefault(), e.stopPropagation());
        let { locked: s, activeRegions: l } = this.props;
        t.keyCode === d().codes.esc && s && l.has(ea.ajI.TEXT_WIDGET) && m.A.deactivateAllRegions();
    };
    onKeyUpGlobal = (e) => {
        let t = ep(e),
            n = this.getActiveKeyEventIndex(t);
        n > -1 && this.activeKeyEventShapes.splice(n, 1);
    };
    renderInvalidSizeMessage() {
        return (0, s.jsx)(I.A, {
            justify: I.A.Justify.CENTER,
            align: I.A.Align.CENTER,
            className: eo.rU,
            children: (0, s.jsx)("div", {
                className: eo.JV,
                children: er.intl.format(er.t.ketnW0, J.OVERLAY_MIN_RESOLUTION),
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
            className: eo.Lw,
            children: [
                (0, s.jsx)(en.A, {}),
                a && (0, s.jsx)("header", { className: eo.tk, children: er.intl.string(er.t.iOq96m) }),
                i,
                (!e || o.has(ea.ajI.TEXT_WIDGET)) &&
                    (0, s.jsx)(eh, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a,
                    }),
                (0, J.validResolution)(d)
                    ? (0, s.jsx)(et.A, { className: r()({ [eo.ZK]: e, [eo.al]: !e }) })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, s.jsx)(ei.A, {}),
                (0, s.jsx)(ee.A, { locked: h, keybind: t }),
                (0, s.jsx)($.A, {}),
                (0, s.jsx)("div", { className: eo._C }),
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
        } = (0, A.cf)([W.default], () => ({
            locked: W.default.isLocked((0, J.getPID)()),
            initialized: W.default.initialized,
            incompatibleApp: W.default.incompatibleApp,
            activeRegions: W.default.getActiveRegions(),
            isPreviewingInGame: W.default.isPreviewingInGame(),
        })),
        r = (0, A.bG)([K.A], () => K.A.windowSize()),
        o = (0, A.bG)([U.Ay], () => U.Ay.getOverlayKeybind()),
        d = (0, A.bG)([M.A], () => M.A.getVoiceChannelId()),
        c = (0, A.bG)([L.A], () => L.A.getChannel(d)),
        u = (0, A.bG)([R.A], () => (null != c ? R.A.getGuild(c.guild_id) : null)),
        h = (0, A.bG)([N.Ay, G.A], () => (0, b.A)(N.Ay, G.A)),
        p = (0, A.bG)([k.Ay], () => (0, T.A)(k.Ay)),
        f = (0, A.bG)([j.A], () => null != j.A.getCurrentUserActiveStream()),
        { analyticsLocations: _ } = (0, C.Ay)(S.A.OVERLAY);
    return (
        l.useEffect(() => {
            t && (0, q.E)();
        }, [t]),
        (0, s.jsx)(C.f5, {
            value: _,
            children: (0, s.jsx)(eA, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: a,
                windowSize: r,
                keybind: null != o ? (0, X.dI)(o.shortcut, !0) : "???",
                keybindKeyCodes: null != o ? o.shortcut : [],
                connectedToVoice: null != d,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: u,
                game: h,
                canGoLive: p,
                isStreaming: f,
            }),
        })
    );
}
