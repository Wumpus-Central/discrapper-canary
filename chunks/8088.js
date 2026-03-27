"use strict";
let n;
i.d(t, { A: () => ep }), i(321073);
var s = i(627968),
    a = i(64700),
    l = i(503698),
    r = i.n(l),
    o = i(695497),
    d = i.n(o),
    c = i(111956),
    u = i.n(c),
    h = i(33851),
    _ = i.n(h),
    p = i(311907),
    f = i(397927),
    m = i(442433),
    g = i(684013),
    A = i(684136),
    x = i(34968),
    v = i(775121),
    y = i(836753),
    E = i(793574),
    I = i(688810),
    S = i(235986);
i(607470);
var C = i(15285),
    N = i(880144),
    b = i(905552),
    T = i(768841),
    O = i(265367),
    L = i(616356),
    j = i(734057),
    w = i(71393),
    D = i(555528),
    R = i(430452),
    k = i(309010),
    M = i(70142),
    P = i(157257),
    G = i(712687),
    V = i(532624),
    U = i(242286),
    z = i(899699),
    H = i(256415),
    W = i(531685),
    B = i(927813),
    F = i(723702),
    K = i(837921),
    Y = i(316501),
    Z = i(350535),
    X = i(9302),
    J = i(41984),
    Q = i(589051),
    q = i(223251),
    $ = i(227308),
    ee = i(409110),
    et = i(160162),
    ei = i(755029),
    en = i(592598),
    es = i(672396);
i(644434);
var ea = i(652215),
    el = i(985018),
    er = i(62220);
(p.Ay.PersistedStore.disableWrites = __OVERLAY__), p.Ay.initialize();
let eo = null;
function ed(e) {
    e.preventDefault();
}
function ec(e) {
    (0, m.L3)(e, async () => {
        let { default: e } = await i.e("92843").then(i.bind(i, 254790));
        return (t) => (0, s.jsx)(e, { ...t, version: 0 });
    });
}
F.isPlatformEmbedded;
let eu = (e) => {
        let { keybind: t, onClick: i, isPreviewingInGame: n, locked: a } = e,
            l = a ? f.DUT : "div";
        return (0, s.jsx)(l, {
            className: r()(er.LK, { [er.Zo]: !a, [er.vZ]: a, [er.Az]: !a && n }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: n, button: s } = e;
                s === ea.hE4.PRIMARY && t === n && i();
            },
            onContextMenu: ec,
            children: a
                ? null
                : (0, s.jsx)("div", {
                      className: er.G3,
                      children: (0, s.jsx)(A.A, { variant: A.A.Variants.BOLD, keybind: t, closeAction: i }),
                  }),
        });
    },
    eh = (e) => {
        let { keyCode: t, shiftKey: i, metaKey: n, altKey: s, ctrlKey: a } = e;
        return { keyCode: t, shiftKey: i, metaKey: n, altKey: s, ctrlKey: a };
    };
class e_ extends a.Component {
    didUpdate = !1;
    constructor(e) {
        super(e);
        const t = e.locked && H.default.isPinned(ea.uss.TEXT);
        v.A.setLayout(t ? x.dY : x.CJ), t && v.A.enable();
    }
    handleLock() {
        (0, f.ueM)() || G.A.isOpen() || g.A.setInputLocked(!0, (0, X.getPID)());
    }
    handleDeactivate() {
        g.A.deactivateAllRegions();
    }
    debouncedForceUpdate = u()(() => {
        this.forceUpdate();
    }, 500);
    handleWindowResize = () => {
        U.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate();
    };
    componentDidMount() {
        g.A.startSession(), T.A.initialize(), y.A.initialize(), O.A.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", ed, !1), null != eo)) {
                    let e = Date.now() - eo;
                    g.A.track(ea.HAw.OVERLAY_LOCKED, { unlocked_duration: e }), (eo = null);
                }
                v.A.disable(),
                    (this.activeKeyEventShapes = []),
                    H.default.isPinned(ea.uss.TEXT) && (v.A.setLayout(x.dY), v.A.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", ed, !1),
                    null == eo && ((eo = Date.now()), g.A.track(ea.HAw.OVERLAY_UNLOCKED)),
                    v.A.disable(),
                    (this.activeKeyEventShapes = []),
                    v.A.setLayout(x.CJ),
                    v.A.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, Z.pi)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let e,
            {
                connectedToVoice: t,
                locked: n,
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
            unpinned_widget_types: D.A.getAllUnpinnedPinnedWidgets(X.OVERLAY_LAYOUT_ID),
        });
        let c = a && !l && null != d,
            u = t && null != r && null != o,
            h = en.A.isNotificationDisabled(es.KS.WelcomeNudge),
            _ = en.A.isNotificationDisabled(es.KS.GoLiveNudge);
        if (
            (h || (e = { type: es.Jr.WELCOME }),
            c && u && !_
                ? (e = { type: es.Jr.GO_LIVE_VOICE, game: d, voiceChannelId: o, voiceGuild: r })
                : c && !_ && (e = { type: es.Jr.GO_LIVE_NON_VOICE, game: d }),
            setTimeout(async () => {
                await (0, Y.pF)(), null != e ? g.A.overlayMounted(e) : g.A.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            n && window.addEventListener("contextmenu", ed, !1),
            F.isPlatformEmbedded)
        ) {
            let e = (0, z.m)();
            if (null == e) return;
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    g.A.track(ea.HAw.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand?.({ message: "set_perf_report_interval", interval: 15 * B.A.Millis.MINUTE })),
                K.Ay.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                    H.default.getDisableExternalLinkAlert() || t === M.A.getLastURL()
                        ? K.Ay.send("OPEN_EXTERNAL_URL", t)
                        : (0, f.mMO)(async () => {
                              let { default: e } = await i.e("30582").then(i.bind(i, 613429));
                              return (i) => (0, s.jsx)(e, { ...i, url: t });
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
            T.A.terminate(),
            y.A.terminate(),
            O.A.terminate();
    }
    activeKeyEventShapes = [];
    lockEventShape = (0, Z.pi)(this.props.keybindKeyCodes);
    getActiveKeyEventIndex = (e) => this.activeKeyEventShapes.findIndex((t) => _()(t, e));
    onKeyDownGlobal = (e) => {
        let t = eh(e),
            i = this.getActiveKeyEventIndex(t) > -1,
            n = [16, 17, 18, 91].includes(e.keyCode);
        i || n || this.activeKeyEventShapes.push(t),
            this.activeKeyEventShapes.length === this.lockEventShape.length &&
                this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => _()(e, t))) &&
                (e.preventDefault(), e.stopPropagation());
        let { locked: s, activeRegions: a } = this.props;
        t.keyCode === d().codes.esc && s && a.has(ea.ajI.TEXT_WIDGET) && g.A.deactivateAllRegions();
    };
    onKeyUpGlobal = (e) => {
        let t = eh(e),
            i = this.getActiveKeyEventIndex(t);
        i > -1 && this.activeKeyEventShapes.splice(i, 1);
    };
    renderInvalidSizeMessage() {
        return (0, s.jsx)(S.A, {
            justify: S.A.Justify.CENTER,
            align: S.A.Align.CENTER,
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
                incompatibleApp: i,
                initialized: a,
                isPreviewingInGame: l,
                activeRegions: o,
                windowSize: d,
            } = this.props,
            { width: c, height: u } = d;
        if (0 === c || 0 === u || i || !a) return null;
        let h = e || l;
        return (0, s.jsxs)("div", {
            className: er.Lw,
            children: [
                (0, s.jsx)(et.A, {}),
                l && (0, s.jsx)("header", { className: er.tk, children: el.intl.string(el.t.iOq96m) }),
                n,
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
                (0, s.jsx)(ei.A, {}),
                (0, s.jsx)($.A, { locked: h, keybind: t }),
                (0, s.jsx)(q.A, {}),
                (0, s.jsx)("div", { className: er._C }),
            ],
        });
    }
}
function ep() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: i,
            activeRegions: n,
            isPreviewingInGame: l,
        } = (0, p.cf)([H.default], () => ({
            locked: H.default.isLocked((0, X.getPID)()),
            initialized: H.default.initialized,
            incompatibleApp: H.default.incompatibleApp,
            activeRegions: H.default.getActiveRegions(),
            isPreviewingInGame: H.default.isPreviewingInGame(),
        })),
        r = (0, p.bG)([W.A], () => W.A.windowSize()),
        o = (0, p.bG)([V.Ay], () => V.Ay.getOverlayKeybind()),
        d = (0, p.bG)([k.A], () => k.A.getVoiceChannelId()),
        c = (0, p.bG)([j.A], () => j.A.getChannel(d)),
        u = (0, p.bG)([w.A], () => (null != c ? w.A.getGuild(c.guild_id) : null)),
        h = (0, p.bG)([C.Ay, P.A], () => (0, b.A)(C.Ay, P.A)),
        _ = (0, p.bG)([R.Ay], () => (0, N.A)(R.Ay)),
        f = (0, p.bG)([L.A], () => null != L.A.getCurrentUserActiveStream()),
        { analyticsLocations: m } = (0, I.Ay)(E.A.OVERLAY);
    return (
        a.useEffect(() => {
            t && (0, Q.E)();
        }, [t]),
        (0, s.jsx)(I.f5, {
            value: m,
            children: (0, s.jsx)(e_, {
                locked: e,
                initialized: t,
                incompatibleApp: i,
                activeRegions: n,
                isPreviewingInGame: l,
                windowSize: r,
                keybind: null != o ? (0, Z.dI)(o.shortcut, !0) : "???",
                keybindKeyCodes: null != o ? o.shortcut : [],
                connectedToVoice: null != d,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: u,
                game: h,
                canGoLive: _,
                isStreaming: f,
            }),
        })
    );
}
