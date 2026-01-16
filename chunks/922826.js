n.d(t, { Z: () => T }), n(781311), n(388685);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(81239),
    s = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(681715),
    m = n(481060),
    f = n(607070),
    p = n(184299),
    v = n(542347),
    E = n(157160),
    g = n(295029),
    h = n(954633),
    C = n(325916),
    S = n(939389),
    b = n(388032),
    O = n(209668);
let _ = "-:--",
    x = {
        [C.rq.PLAYING]: {
            icon: m.fpf,
            label: b.intl.string(b.t.ZcgDJX),
        },
        [C.rq.PAUSED]: {
            icon: m.o1U,
            label: b.intl.string(b.t.RscU7I),
        },
        [C.rq.ENDED]: {
            icon: m.Oe7,
            label: b.intl.string(b.t.hsvh0i),
        },
    },
    y = {
        [C._H.MD]: C.Cq.MD,
        [C._H.LG]: C.Cq.LG,
    },
    j = {
        [C.Cq.MD]: "md",
        [C.Cq.LG]: "lg",
    };
function P(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, S.yv)(t) : _,
        l = null != n ? (0, S.yv)(n) : _;
    return (0, r.jsxs)("div", {
        className: i()(O.durationTimeWrapper, O.controlsBarItem),
        children: [
            (0, r.jsx)(m.Text, {
                variant: "text-xs/normal",
                className: O.durationTimeDisplay,
                children: o,
            }),
            (0, r.jsx)(m.Text, {
                variant: "text-xs/normal",
                className: O.durationTimeSeparator,
                children: "/",
            }),
            (0, r.jsx)(m.Text, {
                variant: "text-xs/normal",
                className: O.durationTimeDisplay,
                children: l,
            }),
        ],
    });
}
let D = o.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: o,
            visible: l,
            ariaLabel: s,
            active: u,
            disabled: f,
            tooltipLabel: p,
            tooltipDelayMs: v = 1500,
            shortcut: E,
            onClick: g,
            buttonSize: h = C.Cq.MD,
        } = e,
        S = (e) => {
            var d, p;
            return (0, r.jsx)(
                m.P3F,
                ((d = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (p = p =
                    {
                        onClick: !0 === f ? void 0 : g,
                        className: i()(O.videoControlsBtnCont, { [O.videoControlsBtnContDisabled]: f }),
                        "aria-label": s,
                        "aria-disabled": f,
                        innerRef: t,
                        children: (0, r.jsx)(a.animated.div, {
                            className: O.videoControlsBtnCont,
                            style: {
                                opacity: (0, a.to)(
                                    [
                                        o.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(l ? e : Math.pow(e, 8)),
                                ),
                                height: {
                                    [C.Cq.LG]: "32px",
                                    [C.Cq.MD]: "24px",
                                }[h],
                            },
                            children: (0, r.jsx)(n, {
                                size: j[h],
                                color: !0 !== f ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                                className: i()(O.controlsBarItem, {
                                    [O.controlsBarItemActive]: u,
                                    [O.videoControlsBtn]: !f,
                                }),
                            }),
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(p))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(p)).forEach(function (e) {
                          Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(p, e));
                      }),
                d),
            );
        };
    return null != p && l
        ? (0, r.jsx)(d.u, {
              text: p,
              keyboardShortcut: "" !== (null != E ? E : "").trim() ? E : void 0,
              delay: v,
              children: S(),
          })
        : S();
});
function T(e) {
    var t, n;
    let {
            videoRef: l,
            playerState: d,
            animSpring: S,
            visible: _,
            seekForwardEnabled: j,
            hideCaptionBtn: T,
            hideTranscriptBtn: R,
            videoTask: N,
            size: I,
            handlePlaybackBtnClick: A,
            handleTranscriptBtnClick: w,
            handleCaptionBtnClick: L,
            handleFullScreenBtnClick: k,
            handleSeekBackBtnClick: M,
            handleSeekForwardBtnClick: V,
            handleControlBarPendingInteraction: Z,
            onVolumeChange: F,
        } = e,
        B = (0, p.km)((e) => e.volume),
        U = (0, p.km)((e) => e.setVolume),
        q = (0, p.km)((e) => e.muted),
        Y = (0, p.km)((e) => e.setMuted),
        H = (0, p.km)((e) => e.transcriptEnabled),
        Q = (0, p.km)((e) => e.captionEnabled),
        G = (0, p.km)((e) => e.fullScreenEnabled),
        K = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        W = (0, s.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        [z, X] = o.useState(q ? 0 : B),
        [$, J] = o.useState(!1),
        [ee, et] = o.useState(!1),
        [{ volumeAnimSpring: en }, er] = (0, m.q_F)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0,
            },
        })),
        eo = o.useRef(null),
        el = (0, v.ZS)(N),
        ei = o.useCallback(
            (e) => {
                null != l.current && (e !== l.current.volume && (l.current.volume = e), e !== z && X(e));
            },
            [l, z],
        ),
        ea = o.useCallback(() => {
            null != l.current && (0 === z ? (ei(B), Y(!1), F(B)) : (U(z), ei(0), Y(!0), F(0)));
        }, [l, z, ei, B, Y, U, F]),
        es = () => {
            J(!0);
        },
        ec = () => {
            J(!1);
        },
        eu = o.useCallback(
            (e) => {
                switch (e.key) {
                    case C.Y1.PLAYBACK:
                        A();
                        break;
                    case C.Y1.SPACE:
                        W || (e.preventDefault(), A());
                        break;
                    case C.Y1.SEEK_BACK:
                        M();
                        break;
                    case C.Y1.SEEK_FORWARD:
                        V();
                        break;
                    case C.Y1.CAPTION:
                        L();
                        break;
                    case C.Y1.FULLSCREEN:
                        k();
                        break;
                    case C.Y1.MUTE:
                        ea();
                }
            },
            [L, k, A, M, V, ea, W],
        );
    o.useEffect(() => {
        null != eo.current && eo.current.focus();
    }, []),
        o.useEffect(
            () => (
                er({
                    volumeAnimSpring: ee || $ ? 1 : 0,
                    immediate: K,
                }),
                () => {
                    en.stop();
                }
            ),
            [ee, $, er, K, en],
        ),
        o.useEffect(
            () => (
                window.addEventListener("keydown", eu),
                () => {
                    window.removeEventListener("keydown", eu);
                }
            ),
            [eu],
        );
    let ed = 0 === z ? m.OyP : z < 0.5 ? m.X2j : m.gj8,
        { icon: em, label: ef } = x[d];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: O.videoControlsGroup,
                children: [
                    (0, r.jsx)(D, {
                        iconComponent: em,
                        animationTime: S,
                        visible: _,
                        ariaLabel: ef,
                        tooltipLabel: ef,
                        shortcut: C.Y1.PLAYBACK,
                        onClick: A,
                        ref: eo,
                        buttonSize: y[I],
                    }),
                    "portrait" !== el &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(D, {
                                    iconComponent: g.F,
                                    animationTime: S,
                                    visible: _,
                                    onClick: M,
                                    ariaLabel: b.intl.string(b.t.r9s3Uv),
                                    tooltipLabel: b.intl.string(b.t.r9s3Uv),
                                    shortcut: C.Y1.SEEK_BACK,
                                    buttonSize: y[I],
                                }),
                                (0, r.jsx)(D, {
                                    iconComponent: h.j,
                                    animationTime: S,
                                    visible: _,
                                    onClick: V,
                                    disabled: !j,
                                    ariaLabel: j ? b.intl.string(b.t.zWDcNP) : b.intl.string(b.t.xXh3yw),
                                    tooltipLabel: j ? b.intl.string(b.t.zWDcNP) : b.intl.string(b.t.xXh3yw),
                                    tooltipDelayMs: 1500 * !!j,
                                    shortcut: C.Y1.SEEK_FORWARD,
                                    buttonSize: y[I],
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(a.animated.div, {
                className: i()(O.videoControlsGroup, O.videoControlsGroupMid),
                style: {
                    opacity: (0, a.to)(
                        [
                            S.to({
                                range: [0, 1],
                                output: [0, 1],
                            }),
                        ],
                        (e) => "".concat(_ ? e : Math.pow(e, 8)),
                    ),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: es,
                        onMouseLeave: ec,
                        onFocus: es,
                        onBlur: ec,
                        className: O.volumeControlGroup,
                        children: [
                            (0, r.jsx)(D, {
                                iconComponent: ed,
                                animationTime: S,
                                visible: _,
                                onClick: ea,
                                ariaLabel: b.intl.string(b.t["eIl+AK"]),
                                tooltipLabel: b.intl.string(b.t["eIl+AK"]),
                                shortcut: C.Y1.MUTE,
                                buttonSize: y[I],
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: O.volumeSlider,
                                style: {
                                    opacity: (0, a.to)(
                                        [
                                            en.to({
                                                range: [0, 1],
                                                output: [0, 1],
                                            }),
                                        ],
                                        (e) => "".concat(_ ? e : Math.pow(e, 8)),
                                    ),
                                    width: (0, a.to)(
                                        [
                                            en.to({
                                                range: [0, 1],
                                                output: [0, 100],
                                            }),
                                        ],
                                        (e) => "".concat(e, "px"),
                                    ),
                                },
                                children: (0, r.jsx)(u.i, {
                                    mini: !0,
                                    initialValue: z,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        ei(e), U(e), F(e), ee && (et(!1), Z(!1)), q && e > 0 && Y(!1);
                                    },
                                    asValueChanges: (e) => {
                                        ei(e), ee || (et(!0), Z(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": b.intl.string(b.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(P, {
                        current: null == l || null == (t = l.current) ? void 0 : t.currentTime,
                        duration: null == l || null == (n = l.current) ? void 0 : n.duration,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(O.videoControlsGroup, O.videoControlsGroupEnd),
                children: [
                    !R &&
                        (0, r.jsx)(D, {
                            iconComponent: m.hH0,
                            animationTime: S,
                            visible: _,
                            onClick: w,
                            active: H && d !== C.rq.ENDED,
                            disabled: d === C.rq.ENDED,
                            ariaLabel: b.intl.string(b.t.KCzjTi),
                            tooltipLabel: b.intl.string(b.t.KCzjTi),
                            buttonSize: y[I],
                        }),
                    !T &&
                        (0, r.jsx)(D, {
                            iconComponent: E.c,
                            animationTime: S,
                            visible: _,
                            active: Q,
                            onClick: L,
                            ariaLabel: b.intl.string(b.t.bDSZO1),
                            tooltipLabel: b.intl.string(b.t.bDSZO1),
                            shortcut: C.Y1.CAPTION,
                            buttonSize: y[I],
                        }),
                    (0, r.jsx)(D, {
                        iconComponent: G ? m.wvt : m.NpZ,
                        animationTime: S,
                        visible: _,
                        onClick: k,
                        ariaLabel: b.intl.string(b.t.vKZT5t),
                        tooltipLabel: b.intl.string(b.t.vKZT5t),
                        shortcut: C.Y1.FULLSCREEN,
                        buttonSize: y[I],
                    }),
                ],
            }),
        ],
    });
}
