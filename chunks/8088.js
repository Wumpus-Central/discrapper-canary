"use strict";
let i;
n.d(t, { A: () => ef }), n(321073);
var s = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(695497),
    d = n.n(o),
    c = n(111956),
    u = n.n(c),
    h = n(33851),
    p = n.n(h),
    f = n(311907),
    A = n(397927),
    _ = n(442433),
    g = n(684013),
    m = n(684136),
    x = n(34968),
    E = n(775121),
    y = n(836753),
    v = n(793574),
    S = n(688810),
    C = n(235986);
n(607470);
var I = n(15285),
    N = n(880144),
    T = n(905552),
    b = n(768841),
    O = n(265367),
    j = n(616356),
    D = n(734057),
    R = n(71393),
    L = n(555528),
    w = n(430452),
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
    F = n(837921),
    Y = n(316501),
    Z = n(350535),
    X = n(9302),
    J = n(41984),
    Q = n(589051),
    q = n(223251),
    $ = n(227308),
    ee = n(409110),
    et = n(160162),
    en = n(755029),
    ei = n(592598),
    es = n(672396);
n(644434);
var ea = n(652215),
    el = n(985018),
    er = n(62220);
(f.Ay.PersistedStore.disableWrites = __OVERLAY__), f.Ay.initialize();
let eo = null;
function ed(e) {
    e.preventDefault();
}
function ec(e) {
    (0, _.L3)(e, async () => {
        let { default: e } = await n.e("92843").then(n.bind(n, 254790));
        return (t) => (0, s.jsx)(e, { ...t, version: 0 });
    });
}
B.isPlatformEmbedded;
let eu = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: a } = e,
            l = a ? A.DUT : "div";
        return (0, s.jsx)(l, {
            className: r()(er.LK, { [er.Zo]: !a, [er.vZ]: a, [er.Az]: !a && i }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: s } = e;
                s === ea.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: ec,
            children: a
                ? null
                : (0, s.jsx)("div", {
                      className: er.G3,
                      children: (0, s.jsx)(m.A, { variant: m.A.Variants.BOLD, keybind: t, closeAction: n }),
                  }),
        });
    },
    eh = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: a } = e;
        return { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: a };
    };
class ep extends a.Component {
    didUpdate = !1;
    constructor(e) {
        super(e);
        const t = e.locked && H.default.isPinned(ea.uss.TEXT);
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
            if (!this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", ed, !1), null != eo)) {
                    let e = Date.now() - eo;
                    g.A.track(ea.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (eo = null);
                }
                E.A.disable(),
                    (this.activeKeyEventShapes = []),
                    H.default.isPinned(ea.uss.TEXT) && (E.A.setLayout(x.dY), E.A.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", ed, !1),
                    null == eo && ((eo = Date.now()), g.A.track(ea.HAw.OVERLAY_UNLOCKED)),
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
                canGoLive: a,
                isStreaming: l,
                voiceGuild: r,
                voiceChannelId: o,
                game: d,
            } = this.props;
        g.A.track(ea.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: H.default.isPinned(ea.uss.TEXT),
            overlay_render_method: J.Ue[J.Ue.Hook],
            unpinned_widget_types: L.A.getAllUnpinnedPinnedWidgets(X.OVERLAY_LAYOUT_ID),
        });
        let c = a && !l && null != d,
            u = t && null != r && null != o,
            h = ei.A.isNotificationDisabled(es.KS.WelcomeNudge),
            p = ei.A.isNotificationDisabled(es.KS.GoLiveNudge);
        if (
            (h || (e = { type: es.Jr.WELCOME }),
            c && u && !p
                ? (e = { type: es.Jr.GO_LIVE_VOICE, game: d, voiceChannelId: o, voiceGuild: r })
                : c && !p && (e = { type: es.Jr.GO_LIVE_NON_VOICE, game: d }),
            setTimeout(async () => {
                await (0, Y.pF)(), null != e ? g.A.overlayMounted(e) : g.A.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            i && window.addEventListener("contextmenu", ed, !1),
            B.isPlatformEmbedded)
        ) {
            let e = (0, z.m)();
            if (null == e) return;
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    g.A.track(ea.HAw.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand?.({ message: "set_perf_report_interval", interval: 15 * K.A.Millis.MINUTE })),
                F.Ay.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                    H.default.getDisableExternalLinkAlert() || t === M.A.getLastURL()
                        ? F.Ay.send("OPEN_EXTERNAL_URL", t)
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
            this.props.locked && window.removeEventListener("contextmenu", ed, !1),
            b.A.terminate(),
            y.A.terminate(),
            O.A.terminate();
    }
    activeKeyEventShapes = [];
    lockEventShape = (0, Z.pi)(this.props.keybindKeyCodes);
    getActiveKeyEventIndex = (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e));
    onKeyDownGlobal = (e) => {
        let t = eh(e),
            n = this.getActiveKeyEventIndex(t) > -1,
            i = [16, 17, 18, 91].includes(e.keyCode);
        n || i || this.activeKeyEventShapes.push(t),
            this.activeKeyEventShapes.length === this.lockEventShape.length &&
                this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) &&
                (e.preventDefault(), e.stopPropagation());
        let { locked: s, activeRegions: a } = this.props;
        t.keyCode === d().codes.esc && s && a.has(ea.ajI.TEXT_WIDGET) && g.A.deactivateAllRegions();
    };
    onKeyUpGlobal = (e) => {
        let t = eh(e),
            n = this.getActiveKeyEventIndex(t);
        n > -1 && this.activeKeyEventShapes.splice(n, 1);
    };
    renderInvalidSizeMessage() {
        return (0, s.jsx)(C.A, {
            justify: C.A.Justify.CENTER,
            align: C.A.Align.CENTER,
            className: er.rU,
            children: (0, s.jsx)("div", {
                className: er.JV,
                children: el.intl.format(el.t.ketnW0, X.OVERLAY_MIN_RESOLUTION),
            }),
        });
    }
    render() {
        let {
                locked: e,
                keybind: t,
                incompatibleApp: n,
                initialized: a,
                isPreviewingInGame: l,
                activeRegions: o,
                windowSize: d,
            } = this.props,
            { width: c, height: u } = d;
        if (0 === c || 0 === u || n || !a) return null;
        let h = e || l;
        return (0, s.jsxs)("div", {
            className: er.Lw,
            children: [
                (0, s.jsx)(et.A, {}),
                l && (0, s.jsx)("header", { className: er.tk, children: el.intl.string(el.t.iOq96m) }),
                i,
                (!e || o.has(ea.ajI.TEXT_WIDGET)) &&
                    (0, s.jsx)(eu, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: l,
                    }),
                (0, X.validResolution)(d)
                    ? (0, s.jsx)(ee.A, { className: r()({ [er.ZK]: e, [er.al]: !e }) })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, s.jsx)(en.A, {}),
                (0, s.jsx)($.A, { locked: h, keybind: t }),
                (0, s.jsx)(q.A, {}),
                (0, s.jsx)("div", { className: er._C }),
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
            isPreviewingInGame: l,
        } = (0, f.cf)([H.default], () => ({
            locked: H.default.isLocked((0, X.getPID)()),
            initialized: H.default.initialized,
            incompatibleApp: H.default.incompatibleApp,
            activeRegions: H.default.getActiveRegions(),
            isPreviewingInGame: H.default.isPreviewingInGame(),
        })),
        r = (0, f.bG)([W.A], () => W.A.windowSize()),
        o = (0, f.bG)([U.Ay], () => U.Ay.getOverlayKeybind()),
        d = (0, f.bG)([k.A], () => k.A.getVoiceChannelId()),
        c = (0, f.bG)([D.A], () => D.A.getChannel(d)),
        u = (0, f.bG)([R.A], () => (null != c ? R.A.getGuild(c.guild_id) : null)),
        h = (0, f.bG)([I.Ay, P.A], () => (0, T.A)(I.Ay, P.A)),
        p = (0, f.bG)([w.Ay], () => (0, N.A)(w.Ay)),
        A = (0, f.bG)([j.A], () => null != j.A.getCurrentUserActiveStream()),
        { analyticsLocations: _ } = (0, S.Ay)(v.A.OVERLAY);
    return (
        a.useEffect(() => {
            t && (0, Q.E)();
        }, [t]),
        (0, s.jsx)(S.f5, {
            value: _,
            children: (0, s.jsx)(ep, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: l,
                windowSize: r,
                keybind: null != o ? (0, Z.dI)(o.shortcut, !0) : "???",
                keybindKeyCodes: null != o ? o.shortcut : [],
                connectedToVoice: null != d,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: u,
                game: h,
                canGoLive: p,
                isStreaming: A,
            }),
        })
    );
}
