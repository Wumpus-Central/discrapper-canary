n.d(t, { Z: () => T }), n(781311), n(388685);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(636606),
    s = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(681715),
    m = n(481060),
    p = n(607070),
    f = n(509212),
    v = n(184299),
    E = n(157160),
    g = n(295029),
    O = n(954633),
    b = n(325916),
    h = n(939389),
    S = n(388032),
    C = n(273339);
let y = "-:--",
    _ = {
        [b.rq.PLAYING]: {
            icon: m.fpf,
            label: S.intl.string(S.t.ZcgDJX),
        },
        [b.rq.PAUSED]: {
            icon: m.o1U,
            label: S.intl.string(S.t.RscU7I),
        },
        [b.rq.ENDED]: {
            icon: m.Oe7,
            label: S.intl.string(S.t.hsvh0i),
        },
    },
    x = {
        [b._H.MD]: b.Cq.MD,
        [b._H.LG]: b.Cq.LG,
    },
    j = {
        [b.Cq.MD]: "md",
        [b.Cq.LG]: "lg",
    };
function D(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, h.yv)(t) : y,
        l = null != n ? (0, h.yv)(n) : y;
    return (
        (o = o.padStart(l.length, "0")),
        (0, r.jsxs)("div", {
            className: i()(C.durationTimeWrapper, C.controlsBarItem),
            children: [
                (0, r.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    className: C.durationTimeDisplay,
                    children: o,
                }),
                (0, r.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    className: C.durationTimeSeparator,
                    children: "/",
                }),
                (0, r.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    className: C.durationTimeDisplay,
                    children: l,
                }),
            ],
        })
    );
}
let P = o.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: o,
            visible: l,
            ariaLabel: s,
            active: u,
            disabled: p,
            tooltipLabel: f,
            tooltipDelayMs: v = 1500,
            shortcut: E,
            onClick: g,
            buttonSize: O = b.Cq.MD,
        } = e,
        h = (e) => {
            var d, f;
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
                (f = f =
                    {
                        onClick: !0 === p ? void 0 : g,
                        className: i()(C.videoControlsBtnCont, { [C.videoControlsBtnContDisabled]: p }),
                        "aria-label": s,
                        "aria-disabled": p,
                        innerRef: t,
                        children: (0, r.jsx)(a.animated.div, {
                            className: C.videoControlsBtnCont,
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
                                    [b.Cq.LG]: "32px",
                                    [b.Cq.MD]: "24px",
                                }[O],
                            },
                            children: (0, r.jsx)(n, {
                                size: j[O],
                                color: !0 !== p ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                                className: i()(C.controlsBarItem, {
                                    [C.controlsBarItemActive]: u,
                                    [C.videoControlsBtn]: !p,
                                }),
                            }),
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(f))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(f)).forEach(function (e) {
                          Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(f, e));
                      }),
                d),
            );
        };
    return null != f && l
        ? (0, r.jsx)(d.u, {
              text: f,
              keyboardShortcut: "" !== (null != E ? E : "").trim() ? E : void 0,
              delay: v,
              children: h(),
          })
        : h();
});
function T(e) {
    var t, n;
    let {
            videoRef: l,
            playerState: d,
            animSpring: h,
            visible: y,
            seekForwardEnabled: j,
            hideCaptionBtn: T,
            hideTranscriptBtn: R,
            videoTask: I,
            size: N,
            handlePlaybackBtnClick: A,
            handleTranscriptBtnClick: w,
            handleCaptionBtnClick: k,
            handleFullScreenBtnClick: M,
            handleSeekBackBtnClick: L,
            handleSeekForwardBtnClick: V,
            handleControlBarPendingInteraction: Z,
            onVolumeChange: F,
        } = e,
        B = (0, v.km)((e) => e.volume),
        H = (0, v.km)((e) => e.setVolume),
        U = (0, v.km)((e) => e.muted),
        q = (0, v.km)((e) => e.setMuted),
        Y = (0, v.km)((e) => e.transcriptEnabled),
        G = (0, v.km)((e) => e.captionEnabled),
        Q = (0, v.km)((e) => e.fullScreenEnabled),
        W = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        K = (0, s.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        [z, X] = o.useState(U ? 0 : B),
        [J, $] = o.useState(!1),
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
        el = (0, f.ZS)(I),
        ei = o.useCallback(
            (e) => {
                null != l.current && (e !== l.current.volume && (l.current.volume = e), e !== z && X(e));
            },
            [l, z],
        ),
        ea = o.useCallback(() => {
            null != l.current && (0 === z ? (ei(B), q(!1), F(B)) : (H(z), ei(0), q(!0), F(0)));
        }, [l, z, ei, B, q, H, F]),
        es = () => {
            $(!0);
        },
        ec = () => {
            $(!1);
        },
        eu = o.useCallback(
            (e) => {
                switch (e.key) {
                    case b.Y1.PLAYBACK:
                        A();
                        break;
                    case b.Y1.SPACE:
                        K || (e.preventDefault(), A());
                        break;
                    case b.Y1.SEEK_BACK:
                        L();
                        break;
                    case b.Y1.SEEK_FORWARD:
                        V();
                        break;
                    case b.Y1.CAPTION:
                        k();
                        break;
                    case b.Y1.FULLSCREEN:
                        M();
                        break;
                    case b.Y1.MUTE:
                        ea();
                }
            },
            [k, M, A, L, V, ea, K],
        );
    o.useEffect(() => {
        null != eo.current && eo.current.focus();
    }, []),
        o.useEffect(
            () => (
                er({
                    volumeAnimSpring: ee || J ? 1 : 0,
                    immediate: W,
                }),
                () => {
                    en.stop();
                }
            ),
            [ee, J, er, W, en],
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
        { icon: em, label: ep } = _[d];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: C.videoControlsGroup,
                children: [
                    (0, r.jsx)(P, {
                        iconComponent: em,
                        animationTime: h,
                        visible: y,
                        ariaLabel: ep,
                        tooltipLabel: ep,
                        shortcut: b.Y1.PLAYBACK,
                        onClick: A,
                        ref: eo,
                        buttonSize: x[N],
                    }),
                    "portrait" !== el &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(P, {
                                    iconComponent: g.F,
                                    animationTime: h,
                                    visible: y,
                                    onClick: L,
                                    ariaLabel: S.intl.string(S.t.r9s3Uv),
                                    tooltipLabel: S.intl.string(S.t.r9s3Uv),
                                    shortcut: b.Y1.SEEK_BACK,
                                    buttonSize: x[N],
                                }),
                                (0, r.jsx)(P, {
                                    iconComponent: O.j,
                                    animationTime: h,
                                    visible: y,
                                    onClick: V,
                                    disabled: !j,
                                    ariaLabel: j ? S.intl.string(S.t.zWDcNP) : S.intl.string(S.t.xXh3yw),
                                    tooltipLabel: j ? S.intl.string(S.t.zWDcNP) : S.intl.string(S.t.xXh3yw),
                                    tooltipDelayMs: 1500 * !!j,
                                    shortcut: b.Y1.SEEK_FORWARD,
                                    buttonSize: x[N],
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(a.animated.div, {
                className: i()(C.videoControlsGroup, C.videoControlsGroupMid),
                style: {
                    opacity: (0, a.to)(
                        [
                            h.to({
                                range: [0, 1],
                                output: [0, 1],
                            }),
                        ],
                        (e) => "".concat(y ? e : Math.pow(e, 8)),
                    ),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: es,
                        onMouseLeave: ec,
                        onFocus: es,
                        onBlur: ec,
                        className: C.volumeControlGroup,
                        children: [
                            (0, r.jsx)(P, {
                                iconComponent: ed,
                                animationTime: h,
                                visible: y,
                                onClick: ea,
                                ariaLabel: S.intl.string(S.t["eIl+AK"]),
                                tooltipLabel: S.intl.string(S.t["eIl+AK"]),
                                shortcut: b.Y1.MUTE,
                                buttonSize: x[N],
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: C.volumeSlider,
                                style: {
                                    opacity: (0, a.to)(
                                        [
                                            en.to({
                                                range: [0, 1],
                                                output: [0, 1],
                                            }),
                                        ],
                                        (e) => "".concat(y ? e : Math.pow(e, 8)),
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
                                        ei(e), H(e), F(e), ee && (et(!1), Z(!1)), U && e > 0 && q(!1);
                                    },
                                    asValueChanges: (e) => {
                                        ei(e), ee || (et(!0), Z(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": S.intl.string(S.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(D, {
                        current: null == l || null == (t = l.current) ? void 0 : t.currentTime,
                        duration: null == l || null == (n = l.current) ? void 0 : n.duration,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(C.videoControlsGroup, C.videoControlsGroupEnd),
                children: [
                    !R &&
                        (0, r.jsx)(P, {
                            iconComponent: m.hH0,
                            animationTime: h,
                            visible: y,
                            onClick: w,
                            active: Y && d !== b.rq.ENDED,
                            disabled: d === b.rq.ENDED,
                            ariaLabel: S.intl.string(S.t.KCzjTi),
                            tooltipLabel: S.intl.string(S.t.KCzjTi),
                            buttonSize: x[N],
                        }),
                    !T &&
                        (0, r.jsx)(P, {
                            iconComponent: E.c,
                            animationTime: h,
                            visible: y,
                            active: G,
                            onClick: k,
                            ariaLabel: S.intl.string(S.t.bDSZO1),
                            tooltipLabel: S.intl.string(S.t.bDSZO1),
                            shortcut: b.Y1.CAPTION,
                            buttonSize: x[N],
                        }),
                    (0, r.jsx)(P, {
                        iconComponent: Q ? m.wvt : m.NpZ,
                        animationTime: h,
                        visible: y,
                        onClick: M,
                        ariaLabel: S.intl.string(S.t.vKZT5t),
                        tooltipLabel: S.intl.string(S.t.vKZT5t),
                        shortcut: b.Y1.FULLSCREEN,
                        buttonSize: x[N],
                    }),
                ],
            }),
        ],
    });
}
