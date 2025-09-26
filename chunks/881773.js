n.d(t, { Z: () => x }), n(781311), n(388685);
var r = n(951288),
    o = n(647438),
    a = n(120356),
    l = n.n(a),
    i = n(786920),
    s = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(481060),
    f = n(607070),
    p = n(509212),
    m = n(184299),
    v = n(902749),
    g = n(957099),
    _ = n(312729),
    C = n(223418),
    E = n(604162),
    S = n(388032),
    b = n(430799);
let O = "-:--",
    h = {
        [C.rq.PLAYING]: {
            icon: d.fpf,
            label: S.intl.string(S.t.ZcgDJS),
        },
        [C.rq.PAUSED]: {
            icon: d.o1U,
            label: S.intl.string(S.t.RscU7O),
        },
        [C.rq.ENDED]: {
            icon: d.Oe7,
            label: S.intl.string(S.t.hsvh0t),
        },
    };
function y(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, E.yv)(t) : O,
        a = null != n ? (0, E.yv)(n) : O;
    return (
        (o = o.padStart(a.length, "0")),
        (0, r.jsxs)("div", {
            className: l()(b.durationTimeWrapper, b.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    className: b.durationTimeDisplay,
                    children: o,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    className: b.durationTimeSeparator,
                    children: "/",
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    className: b.durationTimeDisplay,
                    children: a,
                }),
            ],
        })
    );
}
let j = o.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: o,
            visible: a,
            ariaLabel: s,
            active: u,
            disabled: f,
            tooltipLabel: p,
            tooltipDelayMs: m = 1500,
            shortcut: v,
            onClick: g,
        } = e,
        _ = (e) => {
            var p, m;
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
                (m = m =
                    {
                        onClick: !0 === f ? void 0 : g,
                        className: l()(b.videoControlsBtnCont, { [b.videoControlsBtnContDisabled]: f }),
                        "aria-label": s,
                        "aria-disabled": f,
                        innerRef: t,
                        children: (0, r.jsx)(i.animated.div, {
                            className: b.videoControlsBtnCont,
                            style: {
                                opacity: (0, i.to)(
                                    [
                                        o.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(a ? e : Math.pow(e, 8)),
                                ),
                            },
                            children: (0, r.jsx)(n, {
                                color: !0 !== f ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                                className: l()(b.controlsBarItem, {
                                    [b.controlsBarItemActive]: u,
                                    [b.videoControlsBtn]: !f,
                                }),
                            }),
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(m))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(m)).forEach(function (e) {
                          Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(m, e));
                      }),
                p),
            );
        };
    if (null == p || !a) return _();
    {
        let e = (0, r.jsxs)(r.Fragment, {
            children: [
                p,
                "" !== (null != v ? v : "").trim() &&
                    (0, r.jsx)(d.M2$, {
                        shortcut: null != v ? v : "",
                        className: b.videoControlsBtnTooltipKeyCombo,
                    }),
            ],
        });
        return (0, r.jsx)(d.ua7, {
            text: e,
            "aria-label": p,
            tooltipContentClassName: b.videoControlsBtnTooltip,
            delay: m,
            children: (e) => _(e),
        });
    }
});
function x(e) {
    var t, n;
    let {
            videoRef: a,
            playerState: E,
            animSpring: O,
            visible: x,
            seekForwardEnabled: T,
            hideCaptionBtn: D,
            hideTranscriptBtn: P,
            videoTask: I,
            handlePlaybackBtnClick: R,
            handleTranscriptBtnClick: k,
            handleCaptionBtnClick: N,
            handleFullScreenBtnClick: A,
            handleSeekBackBtnClick: w,
            handleSeekForwardBtnClick: L,
            handleControlBarPendingInteraction: M,
            onVolumeChange: B,
        } = e,
        V = (0, m.km)((e) => e.volume),
        F = (0, m.km)((e) => e.setVolume),
        Z = (0, m.km)((e) => e.muted),
        q = (0, m.km)((e) => e.setMuted),
        U = (0, m.km)((e) => e.transcriptEnabled),
        H = (0, m.km)((e) => e.captionEnabled),
        G = (0, m.km)((e) => e.fullScreenEnabled),
        Q = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        Y = (0, s.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        [W, z] = o.useState(Z ? 0 : V),
        [K, X] = o.useState(!1),
        [$, J] = o.useState(!1),
        [{ volumeAnimSpring: ee }, et] = (0, d.q_F)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0,
            },
        })),
        en = o.useRef(null),
        er = (0, p.ZS)(I),
        eo = o.useCallback(
            (e) => {
                null != a.current && (e !== a.current.volume && (a.current.volume = e), e !== W && z(e));
            },
            [a, W],
        ),
        ea = o.useCallback(() => {
            null != a.current && (0 === W ? (eo(V), q(!1), B(V)) : (F(W), eo(0), q(!0), B(0)));
        }, [a, W, eo, V, q, F, B]),
        el = () => {
            X(!0);
        },
        ei = () => {
            X(!1);
        },
        es = o.useCallback(
            (e) => {
                switch (e.key) {
                    case C.Y1.PLAYBACK:
                        R();
                        break;
                    case C.Y1.SPACE:
                        Y || (e.preventDefault(), R());
                        break;
                    case C.Y1.SEEK_BACK:
                        w();
                        break;
                    case C.Y1.SEEK_FORWARD:
                        L();
                        break;
                    case C.Y1.CAPTION:
                        N();
                        break;
                    case C.Y1.FULLSCREEN:
                        A();
                        break;
                    case C.Y1.MUTE:
                        ea();
                }
            },
            [N, A, R, w, L, ea, Y],
        );
    o.useEffect(() => {
        null != en.current && en.current.focus();
    }, []),
        o.useEffect(
            () => (
                et({
                    volumeAnimSpring: $ || K ? 1 : 0,
                    immediate: Q,
                }),
                () => {
                    ee.stop();
                }
            ),
            [$, K, et, Q, ee],
        ),
        o.useEffect(
            () => (
                window.addEventListener("keydown", es),
                () => {
                    window.removeEventListener("keydown", es);
                }
            ),
            [es],
        );
    let ec = 0 === W ? d.OyP : W < 0.5 ? d.X2j : d.gj8,
        { icon: eu, label: ed } = h[E];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: b.videoControlsGroup,
                children: [
                    (0, r.jsx)(j, {
                        iconComponent: eu,
                        animationTime: O,
                        visible: x,
                        ariaLabel: ed,
                        tooltipLabel: ed,
                        shortcut: C.Y1.PLAYBACK,
                        onClick: R,
                        ref: en,
                    }),
                    "portrait" !== er &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j, {
                                    iconComponent: g.d,
                                    animationTime: O,
                                    visible: x,
                                    onClick: w,
                                    ariaLabel: S.intl.string(S.t.r9s3Ul),
                                    tooltipLabel: S.intl.string(S.t.r9s3Ul),
                                    shortcut: C.Y1.SEEK_BACK,
                                }),
                                (0, r.jsx)(j, {
                                    iconComponent: _.o,
                                    animationTime: O,
                                    visible: x,
                                    onClick: L,
                                    disabled: !T,
                                    ariaLabel: T ? S.intl.string(S.t.zWDcND) : S.intl.string(S.t.xXh3y8),
                                    tooltipLabel: T ? S.intl.string(S.t.zWDcND) : S.intl.string(S.t.xXh3y8),
                                    tooltipDelayMs: 1500 * !!T,
                                    shortcut: C.Y1.SEEK_FORWARD,
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(i.animated.div, {
                className: l()(b.videoControlsGroup, b.videoControlsGroupMid),
                style: {
                    opacity: (0, i.to)(
                        [
                            O.to({
                                range: [0, 1],
                                output: [0, 1],
                            }),
                        ],
                        (e) => "".concat(x ? e : Math.pow(e, 8)),
                    ),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: el,
                        onMouseLeave: ei,
                        onFocus: el,
                        onBlur: ei,
                        className: b.volumeControlGroup,
                        children: [
                            (0, r.jsx)(j, {
                                iconComponent: ec,
                                animationTime: O,
                                visible: x,
                                onClick: ea,
                                ariaLabel: S.intl.string(S.t["eIl+AA"]),
                                tooltipLabel: S.intl.string(S.t["eIl+AA"]),
                                shortcut: C.Y1.MUTE,
                            }),
                            (0, r.jsx)(i.animated.div, {
                                className: b.volumeSlider,
                                style: {
                                    opacity: (0, i.to)(
                                        [
                                            ee.to({
                                                range: [0, 1],
                                                output: [0, 1],
                                            }),
                                        ],
                                        (e) => "".concat(x ? e : Math.pow(e, 8)),
                                    ),
                                    width: (0, i.to)(
                                        [
                                            ee.to({
                                                range: [0, 1],
                                                output: [0, 100],
                                            }),
                                        ],
                                        (e) => "".concat(e, "px"),
                                    ),
                                },
                                children: (0, r.jsx)(u.i, {
                                    mini: !0,
                                    initialValue: W,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        eo(e), F(e), B(e), $ && (J(!1), M(!1)), Z && e > 0 && q(!1);
                                    },
                                    asValueChanges: (e) => {
                                        eo(e), $ || (J(!0), M(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": S.intl.string(S.t["eIl+AA"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(y, {
                        current: null == a || null == (t = a.current) ? void 0 : t.currentTime,
                        duration: null == a || null == (n = a.current) ? void 0 : n.duration,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: l()(b.videoControlsGroup, b.videoControlsGroupEnd),
                children: [
                    !P &&
                        (0, r.jsx)(j, {
                            iconComponent: d.hH0,
                            animationTime: O,
                            visible: x,
                            onClick: k,
                            active: U && E !== C.rq.ENDED,
                            disabled: E === C.rq.ENDED,
                            ariaLabel: S.intl.string(S.t.KCzjTk),
                            tooltipLabel: S.intl.string(S.t.KCzjTk),
                        }),
                    !D &&
                        (0, r.jsx)(j, {
                            iconComponent: v.c,
                            animationTime: O,
                            visible: x,
                            active: H,
                            onClick: N,
                            ariaLabel: S.intl.string(S.t.bDSZOz),
                            tooltipLabel: S.intl.string(S.t.bDSZOz),
                            shortcut: C.Y1.CAPTION,
                        }),
                    (0, r.jsx)(j, {
                        iconComponent: G ? d.wvt : d.NpZ,
                        animationTime: O,
                        visible: x,
                        onClick: A,
                        ariaLabel: S.intl.string(S.t.vKZT5u),
                        tooltipLabel: S.intl.string(S.t.vKZT5u),
                        shortcut: C.Y1.FULLSCREEN,
                    }),
                ],
            }),
        ],
    });
}
