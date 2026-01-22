let i;
n.d(t, {
    A: () => ev,
}),
    n(321073);
var r = n(627968),
    s = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(695497),
    c = n.n(a),
    d = n(111956),
    u = n.n(d),
    h = n(33851),
    p = n.n(h),
    f = n(311907),
    b = n(397927),
    g = n(442433),
    y = n(684013),
    A = n(684136),
    m = n(34968),
    O = n(775121),
    v = n(836753),
    E = n(793574),
    x = n(688810),
    S = n(235986);
n(607470);
var j = n(15285),
    _ = n(880144),
    I = n(905552),
    C = n(768841),
    w = n(265367),
    N = n(616356),
    P = n(961350),
    D = n(734057),
    T = n(71393),
    R = n(555528),
    k = n(430452),
    L = n(309010),
    M = n(70142),
    G = n(157257),
    V = n(712687),
    U = n(532624),
    z = n(242286),
    K = n(899699),
    H = n(256415),
    W = n(531685),
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
    er = n(160162),
    es = n(395809),
    el = n(755029),
    eo = n(592598),
    ea = n(672396);
n(644434);
var ec = n(652215),
    ed = n(985018),
    eu = n(675490);

function eh(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function ep(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                eh(e, t, n[t]);
            });
    }
    return e;
}

function ef(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
(f.Ay.PersistedStore.disableWrites = __OVERLAY__), f.Ay.initialize();
let eb = null;

function eg(e) {
    e.preventDefault();
}

function ey(e) {
    (0, g.L3)(e, async () => {
        let { default: e } = await n.e("92843").then(n.bind(n, 254790));
        return (t) =>
            (0, r.jsx)(
                e,
                ef(ep({}, t), {
                    version: 0,
                }),
            );
    });
}
Y.isPlatformEmbedded;
let eA = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: s } = e,
            l = s ? b.DUT : "div";
        return (0, r.jsx)(l, {
            className: o()(eu.LK, {
                [eu.Zo]: !s,
                [eu.vZ]: s,
                [eu.Az]: !s && i,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === ec.hE4.PRIMARY && t === i && n();
            },
            onContextMenu: ey,
            children: s
                ? null
                : (0, r.jsx)("div", {
                      className: eu.G3,
                      children: (0, r.jsx)(A.A, {
                          variant: A.A.Variants.BOLD,
                          keybind: t,
                          closeAction: n,
                      }),
                  }),
        });
    },
    em = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: s } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: s,
        };
    };
class eO extends s.Component {
    handleLock() {
        (0, b.ueM)() || V.A.isOpen() || y.A.setInputLocked(!0, (0, X.getPID)());
    }
    handleDeactivate() {
        y.A.deactivateAllRegions();
    }
    componentDidMount() {
        y.A.startSession(), C.A.initialize(), v.A.initialize(), w.A.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", eg, !1), null != eb)) {
                    let e = Date.now() - eb;
                    y.A.track(ec.HAw.OVERLAY_LOCKED, {
                        unlocked_duration: e,
                    }),
                        (eb = null);
                }
                O.A.disable(),
                    (this.activeKeyEventShapes = []),
                    H.default.isPinned(ec.uss.TEXT) && (O.A.setLayout(m.dY), O.A.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", eg, !1),
                    null == eb && ((eb = Date.now()), y.A.track(ec.HAw.OVERLAY_UNLOCKED)),
                    O.A.disable(),
                    (this.activeKeyEventShapes = []),
                    O.A.setLayout(m.CJ),
                    O.A.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, J.pi)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let e,
            {
                connectedToVoice: t,
                locked: i,
                canGoLive: s,
                isStreaming: l,
                voiceGuild: o,
                voiceChannelId: a,
                game: c,
                showKeybindNotification: d,
                dismissKeybindNotification: u,
            } = this.props;
        y.A.track(ec.HAw.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: H.default.isPinned(ec.uss.TEXT),
            overlay_render_method: q.Ue[q.Ue.Hook],
            unpinned_widget_types: R.A.getAllUnpinnedPinnedWidgets(X.OVERLAY_LAYOUT_ID),
        }),
            Q.A.trackExposure({
                location: "Overlay",
            });
        let h = s && !l && null != c,
            p = t && null != o && null != a,
            f = eo.A.isNotificationDisabled(ea.KS.WelcomeNudge),
            g = eo.A.isNotificationDisabled(ea.KS.GoLiveNudge);
        if (
            (f ||
                (e = {
                    type: ea.Jr.WELCOME,
                }),
            d && !f
                ? (e = {
                      type: ea.Jr.KEYBIND_INDICATORS,
                      markAsDismissed: u,
                  })
                : h && p && !g
                  ? (e = {
                        type: ea.Jr.GO_LIVE_VOICE,
                        game: c,
                        voiceChannelId: a,
                        voiceGuild: o,
                    })
                  : h &&
                    !g &&
                    (e = {
                        type: ea.Jr.GO_LIVE_NON_VOICE,
                        game: c,
                    }),
            setTimeout(async () => {
                await (0, Z.pF)(), null != e ? y.A.overlayMounted(e) : y.A.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            i && window.addEventListener("contextmenu", eg, !1),
            Y.isPlatformEmbedded)
        ) {
            let e = (0, K.m)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var A;
                e.setPerfInfoCallback((e) => {
                    y.A.track(ec.HAw.OVERLAY_PERF_INFO, e);
                }),
                    null == (A = e.broadcastCommand) ||
                        A.call(e, {
                            message: "set_perf_report_interval",
                            interval: 15 * B.A.Millis.MINUTE,
                        });
            }
            F.Ay.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                H.default.getDisableExternalLinkAlert() || t === M.A.getLastURL()
                    ? F.Ay.send("OPEN_EXTERNAL_URL", t)
                    : (0, b.mMO)(async () => {
                          let { default: e } = await n.e("30582").then(n.bind(n, 613429));
                          return (n) =>
                              (0, r.jsx)(
                                  e,
                                  ef(ep({}, n), {
                                      url: t,
                                  }),
                              );
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
            this.props.locked && window.removeEventListener("contextmenu", eg, !1),
            C.A.terminate(),
            v.A.terminate(),
            w.A.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(S.A, {
            justify: S.A.Justify.CENTER,
            align: S.A.Align.CENTER,
            className: eu.rU,
            children: (0, r.jsx)("div", {
                className: eu.JV,
                children: ed.intl.format(ed.t.ketnW0, X.OVERLAY_MIN_RESOLUTION),
            }),
        });
    }
    render() {
        let {
                locked: e,
                keybind: t,
                incompatibleApp: n,
                initialized: s,
                isPreviewingInGame: l,
                activeRegions: a,
                windowSize: c,
                voiceGuild: d,
                voiceChannelId: u,
            } = this.props,
            { width: h, height: p } = c;
        if (0 === h || 0 === p || n || !s) return null;
        let f = e || l,
            b = P.default.getId();
        return (0, r.jsxs)("div", {
            className: eu.Lw,
            children: [
                (0, r.jsx)(er.A, {}),
                l &&
                    (0, r.jsx)("header", {
                        className: eu.tk,
                        children: ed.intl.string(ed.t.iOq96m),
                    }),
                i,
                (!e || a.has(ec.ajI.TEXT_WIDGET)) &&
                    (0, r.jsx)(eA, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: l,
                    }),
                (0, X.validResolution)(c)
                    ? (0, r.jsx)(ei.A, {
                          className: o()({
                              [eu.ZK]: e,
                              [eu.al]: !e,
                          }),
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(el.A, {}),
                null != d &&
                    null != u &&
                    (0, r.jsx)(es.A, {
                        streamerId: b,
                        guildId: d.id,
                        channelId: u,
                    }),
                (0, r.jsx)(en.A, {
                    locked: f,
                    keybind: t,
                }),
                (0, r.jsx)(ee.A, {}),
                (0, r.jsx)("div", {
                    className: eu._C,
                }),
            ],
        });
    }
    constructor(e) {
        super(e),
            eh(this, "didUpdate", !1),
            eh(
                this,
                "debouncedForceUpdate",
                u()(() => {
                    this.forceUpdate();
                }, 500),
            ),
            eh(this, "handleWindowResize", () => {
                z.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate();
            }),
            eh(this, "activeKeyEventShapes", []),
            eh(this, "lockEventShape", (0, J.pi)(this.props.keybindKeyCodes)),
            eh(this, "getActiveKeyEventIndex", (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            eh(this, "onKeyDownGlobal", (e) => {
                let t = em(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t),
                    this.activeKeyEventShapes.length === this.lockEventShape.length &&
                        this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) &&
                        (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: s } = this.props;
                t.keyCode === c().codes.esc && r && s.has(ec.ajI.TEXT_WIDGET) && y.A.deactivateAllRegions();
            }),
            eh(this, "onKeyUpGlobal", (e) => {
                let t = em(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        const t = e.locked && H.default.isPinned(ec.uss.TEXT);
        O.A.setLayout(t ? m.dY : m.CJ), t && O.A.enable();
    }
}

function ev() {
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
        o = (0, f.bG)([W.A], () => W.A.windowSize()),
        a = (0, f.bG)([U.Ay], () => U.Ay.getOverlayKeybind()),
        c = (0, f.bG)([L.A], () => L.A.getVoiceChannelId()),
        d = (0, f.bG)([D.A], () => D.A.getChannel(c)),
        u = (0, f.bG)([T.A], () => (null != d ? T.A.getGuild(d.guild_id) : null)),
        h = (0, f.bG)([j.Ay, G.A], () => (0, I.A)(j.Ay, G.A)),
        p = (0, f.bG)([k.A], () => (0, _.A)(k.A)),
        b = (0, f.bG)([N.A], () => null != N.A.getCurrentUserActiveStream()),
        { analyticsLocations: g } = (0, x.Ay)(E.A.OVERLAY),
        { showKeybindIndicators: y, dismissKeybindNotification: A } = (0, et.B)();
    return (
        s.useEffect(() => {
            t && (0, $.E)();
        }, [t]),
        (0, r.jsx)(x.f5, {
            value: g,
            children: (0, r.jsx)(eO, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: l,
                windowSize: o,
                keybind: null != a ? (0, J.dI)(a.shortcut, !0) : "???",
                keybindKeyCodes: null != a ? a.shortcut : [],
                connectedToVoice: null != c,
                voiceChannelId: null != d ? d.id : null,
                voiceGuild: u,
                game: h,
                canGoLive: p,
                isStreaming: b,
                showKeybindNotification: y,
                dismissKeybindNotification: A,
            }),
        })
    );
}
