n.d(t, { Z: () => T }), n(781311), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(120356),
    i = n.n(l),
    a = n(509442),
    s = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(481060),
    m = n(607070),
    p = n(509212),
    f = n(184299),
    v = n(902749),
    g = n(957099),
    E = n(312729),
    O = n(223418),
    b = n(604162),
    h = n(388032),
    S = n(946232);
let C = "-:--",
    y = {
        [O.rq.PLAYING]: {
            icon: d.fpf,
            label: h.intl.string(h.t.ZcgDJX),
        },
        [O.rq.PAUSED]: {
            icon: d.o1U,
            label: h.intl.string(h.t.RscU7I),
        },
        [O.rq.ENDED]: {
            icon: d.Oe7,
            label: h.intl.string(h.t.hsvh0i),
        },
    },
    _ = {
        [O._H.MD]: O.Cq.MD,
        [O._H.LG]: O.Cq.LG,
    },
    x = {
        [O.Cq.MD]: "md",
        [O.Cq.LG]: "lg",
    };
function j(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, b.yv)(t) : C,
        l = null != n ? (0, b.yv)(n) : C;
    return (
        (o = o.padStart(l.length, "0")),
        (0, r.jsxs)("div", {
            className: i()(S.durationTimeWrapper, S.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    className: S.durationTimeDisplay,
                    children: o,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    className: S.durationTimeSeparator,
                    children: "/",
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    className: S.durationTimeDisplay,
                    children: l,
                }),
            ],
        })
    );
}
let D = o.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: o,
            visible: l,
            ariaLabel: s,
            active: u,
            disabled: m,
            tooltipLabel: p,
            tooltipDelayMs: f = 1500,
            shortcut: v,
            onClick: g,
            buttonSize: E = O.Cq.MD,
        } = e,
        b = (e) => {
            var p, f;
            return (0, r.jsx)(
                d.P3F,
                ((p = (function (e) {
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
                        onClick: !0 === m ? void 0 : g,
                        className: i()(S.videoControlsBtnCont, { [S.videoControlsBtnContDisabled]: m }),
                        "aria-label": s,
                        "aria-disabled": m,
                        innerRef: t,
                        children: (0, r.jsx)(a.animated.div, {
                            className: S.videoControlsBtnCont,
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
                                    [O.Cq.LG]: "32px",
                                    [O.Cq.MD]: "24px",
                                }[E],
                            },
                            children: (0, r.jsx)(n, {
                                size: x[E],
                                color: !0 !== m ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                                className: i()(S.controlsBarItem, {
                                    [S.controlsBarItemActive]: u,
                                    [S.videoControlsBtn]: !m,
                                }),
                            }),
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(f))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(f)).forEach(function (e) {
                          Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(f, e));
                      }),
                p),
            );
        };
    if (null == p || !l) return b();
    {
        let e = (0, r.jsxs)(r.Fragment, {
            children: [
                p,
                "" !== (null != v ? v : "").trim() &&
                    (0, r.jsx)(d.M2$, {
                        shortcut: null != v ? v : "",
                        className: S.videoControlsBtnTooltipKeyCombo,
                    }),
            ],
        });
        return (0, r.jsx)(d.aML, {
            text: e,
            "aria-label": p,
            tooltipContentClassName: S.videoControlsBtnTooltip,
            delay: f,
            children: (e) => b(e),
        });
    }
});
function T(e) {
    var t, n;
    let {
            videoRef: l,
            playerState: b,
            animSpring: C,
            visible: x,
            seekForwardEnabled: T,
            hideCaptionBtn: P,
            hideTranscriptBtn: R,
            videoTask: I,
            size: N,
            handlePlaybackBtnClick: w,
            handleTranscriptBtnClick: A,
            handleCaptionBtnClick: k,
            handleFullScreenBtnClick: M,
            handleSeekBackBtnClick: L,
            handleSeekForwardBtnClick: V,
            handleControlBarPendingInteraction: Z,
            onVolumeChange: F,
        } = e,
        B = (0, f.km)((e) => e.volume),
        H = (0, f.km)((e) => e.setVolume),
        U = (0, f.km)((e) => e.muted),
        q = (0, f.km)((e) => e.setMuted),
        Y = (0, f.km)((e) => e.transcriptEnabled),
        G = (0, f.km)((e) => e.captionEnabled),
        Q = (0, f.km)((e) => e.fullScreenEnabled),
        W = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        K = (0, s.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [z, X] = o.useState(U ? 0 : B),
        [J, $] = o.useState(!1),
        [ee, et] = o.useState(!1),
        [{ volumeAnimSpring: en }, er] = (0, d.q_F)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0,
            },
        })),
        eo = o.useRef(null),
        el = (0, p.ZS)(I),
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
                    case O.Y1.PLAYBACK:
                        w();
                        break;
                    case O.Y1.SPACE:
                        K || (e.preventDefault(), w());
                        break;
                    case O.Y1.SEEK_BACK:
                        L();
                        break;
                    case O.Y1.SEEK_FORWARD:
                        V();
                        break;
                    case O.Y1.CAPTION:
                        k();
                        break;
                    case O.Y1.FULLSCREEN:
                        M();
                        break;
                    case O.Y1.MUTE:
                        ea();
                }
            },
            [k, M, w, L, V, ea, K],
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
    let ed = 0 === z ? d.OyP : z < 0.5 ? d.X2j : d.gj8,
        { icon: em, label: ep } = y[b];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.videoControlsGroup,
                children: [
                    (0, r.jsx)(D, {
                        iconComponent: em,
                        animationTime: C,
                        visible: x,
                        ariaLabel: ep,
                        tooltipLabel: ep,
                        shortcut: O.Y1.PLAYBACK,
                        onClick: w,
                        ref: eo,
                        buttonSize: _[N],
                    }),
                    "portrait" !== el &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(D, {
                                    iconComponent: g.d,
                                    animationTime: C,
                                    visible: x,
                                    onClick: L,
                                    ariaLabel: h.intl.string(h.t.r9s3Uv),
                                    tooltipLabel: h.intl.string(h.t.r9s3Uv),
                                    shortcut: O.Y1.SEEK_BACK,
                                    buttonSize: _[N],
                                }),
                                (0, r.jsx)(D, {
                                    iconComponent: E.o,
                                    animationTime: C,
                                    visible: x,
                                    onClick: V,
                                    disabled: !T,
                                    ariaLabel: T ? h.intl.string(h.t.zWDcNP) : h.intl.string(h.t.xXh3yw),
                                    tooltipLabel: T ? h.intl.string(h.t.zWDcNP) : h.intl.string(h.t.xXh3yw),
                                    tooltipDelayMs: 1500 * !!T,
                                    shortcut: O.Y1.SEEK_FORWARD,
                                    buttonSize: _[N],
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(a.animated.div, {
                className: i()(S.videoControlsGroup, S.videoControlsGroupMid),
                style: {
                    opacity: (0, a.to)(
                        [
                            C.to({
                                range: [0, 1],
                                output: [0, 1],
                            }),
                        ],
                        (e) => "".concat(x ? e : Math.pow(e, 8)),
                    ),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: es,
                        onMouseLeave: ec,
                        onFocus: es,
                        onBlur: ec,
                        className: S.volumeControlGroup,
                        children: [
                            (0, r.jsx)(D, {
                                iconComponent: ed,
                                animationTime: C,
                                visible: x,
                                onClick: ea,
                                ariaLabel: h.intl.string(h.t["eIl+AK"]),
                                tooltipLabel: h.intl.string(h.t["eIl+AK"]),
                                shortcut: O.Y1.MUTE,
                                buttonSize: _[N],
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: S.volumeSlider,
                                style: {
                                    opacity: (0, a.to)(
                                        [
                                            en.to({
                                                range: [0, 1],
                                                output: [0, 1],
                                            }),
                                        ],
                                        (e) => "".concat(x ? e : Math.pow(e, 8)),
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
                                    "aria-label": h.intl.string(h.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(j, {
                        current: null == l || null == (t = l.current) ? void 0 : t.currentTime,
                        duration: null == l || null == (n = l.current) ? void 0 : n.duration,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(S.videoControlsGroup, S.videoControlsGroupEnd),
                children: [
                    !R &&
                        (0, r.jsx)(D, {
                            iconComponent: d.hH0,
                            animationTime: C,
                            visible: x,
                            onClick: A,
                            active: Y && b !== O.rq.ENDED,
                            disabled: b === O.rq.ENDED,
                            ariaLabel: h.intl.string(h.t.KCzjTi),
                            tooltipLabel: h.intl.string(h.t.KCzjTi),
                            buttonSize: _[N],
                        }),
                    !P &&
                        (0, r.jsx)(D, {
                            iconComponent: v.c,
                            animationTime: C,
                            visible: x,
                            active: G,
                            onClick: k,
                            ariaLabel: h.intl.string(h.t.bDSZO1),
                            tooltipLabel: h.intl.string(h.t.bDSZO1),
                            shortcut: O.Y1.CAPTION,
                            buttonSize: _[N],
                        }),
                    (0, r.jsx)(D, {
                        iconComponent: Q ? d.wvt : d.NpZ,
                        animationTime: C,
                        visible: x,
                        onClick: M,
                        ariaLabel: h.intl.string(h.t.vKZT5t),
                        tooltipLabel: h.intl.string(h.t.vKZT5t),
                        shortcut: O.Y1.FULLSCREEN,
                        buttonSize: _[N],
                    }),
                ],
            }),
        ],
    });
}
