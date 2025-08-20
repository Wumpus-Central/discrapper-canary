n.d(t, { Z: () => x }), n(781311), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(120356),
    a = n.n(l),
    i = n(803948),
    s = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(481060),
    f = n(607070),
    m = n(509212),
    p = n(184299),
    v = n(902749),
    C = n(957099),
    E = n(312729),
    _ = n(223418),
    g = n(604162),
    S = n(388032),
    O = n(430799);
let b = "-:--",
    h = {
        [_.rq.PLAYING]: {
            icon: d.fpf,
            label: S.intl.string(S.t.ZcgDJS),
        },
        [_.rq.PAUSED]: {
            icon: d.o1U,
            label: S.intl.string(S.t.RscU7O),
        },
        [_.rq.ENDED]: {
            icon: d.Oe7,
            label: S.intl.string(S.t.hsvh0t),
        },
    };
function y(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, g.yv)(t) : b,
        l = null != n ? (0, g.yv)(n) : b;
    return (
        (o = o.padStart(l.length, "0")),
        (0, r.jsxs)("div", {
            className: a()(O.durationTimeWrapper, O.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    className: O.durationTimeDisplay,
                    children: o,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    className: O.durationTimeSeparator,
                    children: "/",
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    className: O.durationTimeDisplay,
                    children: l,
                }),
            ],
        })
    );
}
let j = o.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: o,
            visible: l,
            ariaLabel: s,
            active: u,
            disabled: f,
            tooltipLabel: m,
            tooltipDelayMs: p = 1500,
            shortcut: v,
            onClick: C,
        } = e,
        E = (e) => {
            var m, p;
            return (0, r.jsx)(
                d.P3F,
                ((m = (function (e) {
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
                        onClick: !0 === f ? void 0 : C,
                        className: a()(O.videoControlsBtnCont, { [O.videoControlsBtnContDisabled]: f }),
                        "aria-label": s,
                        "aria-disabled": f,
                        innerRef: t,
                        children: (0, r.jsx)(i.animated.div, {
                            className: O.videoControlsBtnCont,
                            style: {
                                opacity: (0, i.to)(
                                    [
                                        o.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(l ? e : Math.pow(e, 8)),
                                ),
                            },
                            children: (0, r.jsx)(n, {
                                color: !0 !== f ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                                className: a()(O.controlsBarItem, {
                                    [O.controlsBarItemActive]: u,
                                    [O.videoControlsBtn]: !f,
                                }),
                            }),
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(p))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(p)).forEach(function (e) {
                          Object.defineProperty(m, e, Object.getOwnPropertyDescriptor(p, e));
                      }),
                m),
            );
        };
    if (null == m || !l) return E();
    {
        let e = (0, r.jsxs)(r.Fragment, {
            children: [
                m,
                "" !== (null != v ? v : "").trim() &&
                    (0, r.jsx)(d.M2$, {
                        shortcut: null != v ? v : "",
                        className: O.videoControlsBtnTooltipKeyCombo,
                    }),
            ],
        });
        return (0, r.jsx)(d.ua7, {
            text: e,
            "aria-label": m,
            tooltipContentClassName: O.videoControlsBtnTooltip,
            delay: p,
            children: (e) => E(e),
        });
    }
});
function x(e) {
    var t, n;
    let {
            videoRef: l,
            playerState: g,
            animSpring: b,
            visible: x,
            seekForwardEnabled: T,
            hideCaptionBtn: P,
            hideTranscriptBtn: D,
            videoTask: R,
            handlePlaybackBtnClick: I,
            handleTranscriptBtnClick: N,
            handleCaptionBtnClick: k,
            handleFullScreenBtnClick: A,
            handleSeekBackBtnClick: L,
            handleSeekForwardBtnClick: w,
            handleControlBarPendingInteraction: M,
            onVolumeChange: B,
        } = e,
        V = (0, p.km)((e) => e.volume),
        F = (0, p.km)((e) => e.setVolume),
        Z = (0, p.km)((e) => e.muted),
        U = (0, p.km)((e) => e.setMuted),
        q = (0, p.km)((e) => e.transcriptEnabled),
        H = (0, p.km)((e) => e.captionEnabled),
        Y = (0, p.km)((e) => e.fullScreenEnabled),
        G = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        Q = (0, s.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        [z, K] = o.useState(Z ? 0 : V),
        [W, X] = o.useState(!1),
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
        er = (0, m.ZS)(R),
        eo = o.useCallback(
            (e) => {
                null != l.current && (e !== l.current.volume && (l.current.volume = e), e !== z && K(e));
            },
            [l, z],
        ),
        el = o.useCallback(() => {
            null != l.current && (0 === z ? (eo(V), U(!1), B(V)) : (F(z), eo(0), U(!0), B(0)));
        }, [l, z, eo, V, U, F, B]),
        ea = () => {
            X(!0);
        },
        ei = () => {
            X(!1);
        },
        es = o.useCallback(
            (e) => {
                switch (e.key) {
                    case _.Y1.PLAYBACK:
                        I();
                        break;
                    case _.Y1.SPACE:
                        Q || (e.preventDefault(), I());
                        break;
                    case _.Y1.SEEK_BACK:
                        L();
                        break;
                    case _.Y1.SEEK_FORWARD:
                        w();
                        break;
                    case _.Y1.CAPTION:
                        k();
                        break;
                    case _.Y1.FULLSCREEN:
                        A();
                        break;
                    case _.Y1.MUTE:
                        el();
                }
            },
            [k, A, I, L, w, el, Q],
        );
    o.useEffect(() => {
        null != en.current && en.current.focus();
    }, []),
        o.useEffect(
            () => (
                et({
                    volumeAnimSpring: $ || W ? 1 : 0,
                    immediate: G,
                }),
                () => {
                    ee.stop();
                }
            ),
            [$, W, et, G, ee],
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
    let ec = 0 === z ? d.OyP : z < 0.5 ? d.X2j : d.gj8,
        { icon: eu, label: ed } = h[g];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: O.videoControlsGroup,
                children: [
                    (0, r.jsx)(j, {
                        iconComponent: eu,
                        animationTime: b,
                        visible: x,
                        ariaLabel: ed,
                        tooltipLabel: ed,
                        shortcut: _.Y1.PLAYBACK,
                        onClick: I,
                        ref: en,
                    }),
                    "portrait" !== er &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j, {
                                    iconComponent: C.d,
                                    animationTime: b,
                                    visible: x,
                                    onClick: L,
                                    ariaLabel: S.intl.string(S.t.r9s3Ul),
                                    tooltipLabel: S.intl.string(S.t.r9s3Ul),
                                    shortcut: _.Y1.SEEK_BACK,
                                }),
                                (0, r.jsx)(j, {
                                    iconComponent: E.o,
                                    animationTime: b,
                                    visible: x,
                                    onClick: w,
                                    disabled: !T,
                                    ariaLabel: T ? S.intl.string(S.t.zWDcND) : S.intl.string(S.t.xXh3y8),
                                    tooltipLabel: T ? S.intl.string(S.t.zWDcND) : S.intl.string(S.t.xXh3y8),
                                    tooltipDelayMs: 1500 * !!T,
                                    shortcut: _.Y1.SEEK_FORWARD,
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(i.animated.div, {
                className: a()(O.videoControlsGroup, O.videoControlsGroupMid),
                style: {
                    opacity: (0, i.to)(
                        [
                            b.to({
                                range: [0, 1],
                                output: [0, 1],
                            }),
                        ],
                        (e) => "".concat(x ? e : Math.pow(e, 8)),
                    ),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: ea,
                        onMouseLeave: ei,
                        onFocus: ea,
                        onBlur: ei,
                        className: O.volumeControlGroup,
                        children: [
                            (0, r.jsx)(j, {
                                iconComponent: ec,
                                animationTime: b,
                                visible: x,
                                onClick: el,
                                ariaLabel: S.intl.string(S.t["eIl+AA"]),
                                tooltipLabel: S.intl.string(S.t["eIl+AA"]),
                                shortcut: _.Y1.MUTE,
                            }),
                            (0, r.jsx)(i.animated.div, {
                                className: O.volumeSlider,
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
                                    initialValue: z,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        eo(e), F(e), B(e), $ && (J(!1), M(!1)), Z && e > 0 && U(!1);
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
                        current: null == l || null == (t = l.current) ? void 0 : t.currentTime,
                        duration: null == l || null == (n = l.current) ? void 0 : n.duration,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()(O.videoControlsGroup, O.videoControlsGroupEnd),
                children: [
                    !D &&
                        (0, r.jsx)(j, {
                            iconComponent: d.hH0,
                            animationTime: b,
                            visible: x,
                            onClick: N,
                            active: q && g !== _.rq.ENDED,
                            disabled: g === _.rq.ENDED,
                            ariaLabel: S.intl.string(S.t.KCzjTk),
                            tooltipLabel: S.intl.string(S.t.KCzjTk),
                        }),
                    !P &&
                        (0, r.jsx)(j, {
                            iconComponent: v.c,
                            animationTime: b,
                            visible: x,
                            active: H,
                            onClick: k,
                            ariaLabel: S.intl.string(S.t.bDSZOz),
                            tooltipLabel: S.intl.string(S.t.bDSZOz),
                            shortcut: _.Y1.CAPTION,
                        }),
                    (0, r.jsx)(j, {
                        iconComponent: Y ? d.wvt : d.NpZ,
                        animationTime: b,
                        visible: x,
                        onClick: A,
                        ariaLabel: S.intl.string(S.t.vKZT5u),
                        tooltipLabel: S.intl.string(S.t.vKZT5u),
                        shortcut: _.Y1.FULLSCREEN,
                    }),
                ],
            }),
        ],
    });
}
