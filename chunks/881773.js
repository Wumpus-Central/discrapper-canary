(n.d(t, { Z: () => _ }), n(781311), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(855659),
    s = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(481060),
    m = n(607070),
    f = n(184299),
    p = n(902749),
    v = n(957099),
    g = n(312729),
    b = n(223418),
    E = n(604162),
    O = n(388032),
    C = n(844136);
let h = '-:--',
    S = {
        [b.rq.PLAYING]: {
            icon: d.fpf,
            label: O.intl.string(O.t.ZcgDJS)
        },
        [b.rq.PAUSED]: {
            icon: d.o1U,
            label: O.intl.string(O.t.RscU7O)
        },
        [b.rq.ENDED]: {
            icon: d.Oe7,
            label: O.intl.string(O.t.hsvh0t)
        }
    };
function j(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, E.yv)(t) : h,
        o = null != n ? (0, E.yv)(n) : h;
    return (
        (l = l.padStart(o.length, '0')),
        (0, r.jsxs)('div', {
            className: i()(C.durationTimeWrapper, C.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: C.durationTimeDisplay,
                    children: l
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: C.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: C.durationTimeDisplay,
                    children: o
                })
            ]
        })
    );
}
let y = l.forwardRef(function (e, t) {
    let { iconComponent: n, animationTime: l, visible: o, ariaLabel: s, active: u, disabled: m, tooltipLabel: f, tooltipDelayMs: p = 1500, shortcut: v, onClick: g } = e,
        b = (e) => {
            var f, p;
            return (0, r.jsx)(
                d.P3F,
                ((f = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, e)),
                (p = p =
                    {
                        onClick: !0 === m ? void 0 : g,
                        className: i()(C.videoControlsBtnCont, { [C.videoControlsBtnContDisabled]: m }),
                        'aria-label': s,
                        'aria-disabled': m,
                        innerRef: t,
                        children: (0, r.jsx)(a.animated.div, {
                            className: C.videoControlsBtnCont,
                            style: {
                                opacity: (0, a.to)(
                                    [
                                        l.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        })
                                    ],
                                    (e) => ''.concat(o ? e : Math.pow(e, 8))
                                )
                            },
                            children: (0, r.jsx)(n, {
                                color: !0 !== m ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                                className: i()(C.controlsBarItem, {
                                    [C.controlsBarItemActive]: u,
                                    [C.videoControlsBtn]: !m
                                })
                            })
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(p))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(p)).forEach(function (e) {
                          Object.defineProperty(f, e, Object.getOwnPropertyDescriptor(p, e));
                      }),
                f)
            );
        };
    if (null == f || !o) return b();
    {
        let e = (0, r.jsxs)(r.Fragment, {
            children: [
                f,
                '' !== (null != v ? v : '').trim() &&
                    (0, r.jsx)(d.M2$, {
                        shortcut: null != v ? v : '',
                        className: C.videoControlsBtnTooltipKeyCombo
                    })
            ]
        });
        return (0, r.jsx)(d.ua7, {
            text: e,
            'aria-label': f,
            tooltipContentClassName: C.videoControlsBtnTooltip,
            delay: p,
            children: (e) => b(e)
        });
    }
});
function _(e) {
    var t, n;
    let { videoRef: o, playerState: E, animSpring: h, visible: _, seekForwardEnabled: x, hideCaptionBtn: D, hideTranscriptBtn: T, handlePlaybackBtnClick: P, handleTranscriptBtnClick: N, handleCaptionBtnClick: I, handleFullScreenBtnClick: k, handleSeekBackBtnClick: w, handleSeekForwardBtnClick: A, handleControlBarPendingInteraction: L, onVolumeChange: R } = e,
        M = (0, f.km)((e) => e.volume),
        V = (0, f.km)((e) => e.setVolume),
        B = (0, f.km)((e) => e.muted),
        F = (0, f.km)((e) => e.setMuted),
        Z = (0, f.km)((e) => e.transcriptEnabled),
        q = (0, f.km)((e) => e.captionEnabled),
        U = (0, f.km)((e) => e.fullScreenEnabled),
        Q = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        G = (0, s.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [Y, z] = l.useState(B ? 0 : M),
        [H, X] = l.useState(!1),
        [W, K] = l.useState(!1),
        [{ volumeAnimSpring: $ }, J] = (0, d.q_F)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        ee = l.useRef(null),
        et = l.useCallback(
            (e) => {
                null != o.current && (e !== o.current.volume && (o.current.volume = e), e !== Y && z(e));
            },
            [o, Y]
        ),
        en = l.useCallback(() => {
            null != o.current && (0 === Y ? (et(M), F(!1), R(M)) : (V(Y), et(0), F(!0), R(0)));
        }, [o, Y, et, M, F, V, R]),
        er = () => {
            X(!0);
        },
        el = () => {
            X(!1);
        },
        eo = l.useCallback(
            (e) => {
                switch (e.key) {
                    case b.Y1.PLAYBACK:
                        P();
                        break;
                    case b.Y1.SPACE:
                        G || (e.preventDefault(), P());
                        break;
                    case b.Y1.SEEK_BACK:
                        w();
                        break;
                    case b.Y1.SEEK_FORWARD:
                        A();
                        break;
                    case b.Y1.CAPTION:
                        I();
                        break;
                    case b.Y1.FULLSCREEN:
                        k();
                        break;
                    case b.Y1.MUTE:
                        en();
                }
            },
            [I, k, P, w, A, en, G]
        );
    (l.useEffect(() => {
        null != ee.current && ee.current.focus();
    }, []),
        l.useEffect(
            () => (
                J({
                    volumeAnimSpring: W || H ? 1 : 0,
                    immediate: Q
                }),
                () => {
                    $.stop();
                }
            ),
            [W, H, J, Q, $]
        ),
        l.useEffect(
            () => (
                window.addEventListener('keydown', eo),
                () => {
                    window.removeEventListener('keydown', eo);
                }
            ),
            [eo]
        ));
    let ei = 0 === Y ? d.OyP : Y < 0.5 ? d.X2j : d.gj8,
        { icon: ea, label: es } = S[E];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: C.videoControlsGroup,
                children: [
                    (0, r.jsx)(y, {
                        iconComponent: ea,
                        animationTime: h,
                        visible: _,
                        ariaLabel: es,
                        tooltipLabel: es,
                        shortcut: b.Y1.PLAYBACK,
                        onClick: P,
                        ref: ee
                    }),
                    (0, r.jsx)(y, {
                        iconComponent: v.d,
                        animationTime: h,
                        visible: _,
                        onClick: w,
                        ariaLabel: O.intl.string(O.t.r9s3Ul),
                        tooltipLabel: O.intl.string(O.t.r9s3Ul),
                        shortcut: b.Y1.SEEK_BACK
                    }),
                    (0, r.jsx)(y, {
                        iconComponent: g.o,
                        animationTime: h,
                        visible: _,
                        onClick: A,
                        disabled: !x,
                        ariaLabel: x ? O.intl.string(O.t.zWDcND) : O.intl.string(O.t.xXh3y8),
                        tooltipLabel: x ? O.intl.string(O.t.zWDcND) : O.intl.string(O.t.xXh3y8),
                        tooltipDelayMs: 1500 * !!x,
                        shortcut: b.Y1.SEEK_FORWARD
                    })
                ]
            }),
            (0, r.jsxs)(a.animated.div, {
                className: i()(C.videoControlsGroup, C.videoControlsGroupMid),
                style: {
                    opacity: (0, a.to)(
                        [
                            h.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(_ ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: er,
                        onMouseLeave: el,
                        onFocus: er,
                        onBlur: el,
                        className: C.volumeControlGroup,
                        children: [
                            (0, r.jsx)(y, {
                                iconComponent: ei,
                                animationTime: h,
                                visible: _,
                                onClick: en,
                                ariaLabel: O.intl.string(O.t['eIl+AA']),
                                tooltipLabel: O.intl.string(O.t['eIl+AA']),
                                shortcut: b.Y1.MUTE
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: C.volumeSlider,
                                style: {
                                    opacity: (0, a.to)(
                                        [
                                            $.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(_ ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, a.to)(
                                        [
                                            $.to({
                                                range: [0, 1],
                                                output: [0, 100]
                                            })
                                        ],
                                        (e) => ''.concat(e, 'px')
                                    )
                                },
                                children: (0, r.jsx)(u.i, {
                                    mini: !0,
                                    initialValue: Y,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        (et(e), V(e), R(e), W && (K(!1), L(!1)), B && e > 0 && F(!1));
                                    },
                                    asValueChanges: (e) => {
                                        (et(e), W || (K(!0), L(!0)));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': O.intl.string(O.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(j, {
                        current: null == o || null == (t = o.current) ? void 0 : t.currentTime,
                        duration: null == o || null == (n = o.current) ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: i()(C.videoControlsGroup, C.videoControlsGroupEnd),
                children: [
                    !T &&
                        (0, r.jsx)(y, {
                            iconComponent: d.hH0,
                            animationTime: h,
                            visible: _,
                            onClick: N,
                            active: Z && E !== b.rq.ENDED,
                            disabled: E === b.rq.ENDED,
                            ariaLabel: O.intl.string(O.t.KCzjTk),
                            tooltipLabel: O.intl.string(O.t.KCzjTk)
                        }),
                    !D &&
                        (0, r.jsx)(y, {
                            iconComponent: p.c,
                            animationTime: h,
                            visible: _,
                            active: q,
                            onClick: I,
                            ariaLabel: O.intl.string(O.t.bDSZOz),
                            tooltipLabel: O.intl.string(O.t.bDSZOz),
                            shortcut: b.Y1.CAPTION
                        }),
                    (0, r.jsx)(y, {
                        iconComponent: U ? d.wvt : d.NpZ,
                        animationTime: h,
                        visible: _,
                        onClick: k,
                        ariaLabel: O.intl.string(O.t.vKZT5u),
                        tooltipLabel: O.intl.string(O.t.vKZT5u),
                        shortcut: b.Y1.FULLSCREEN
                    })
                ]
            })
        ]
    });
}
