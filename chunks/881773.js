(n.d(t, { Z: () => y }), n(781311), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(66546),
    s = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(481060),
    m = n(607070),
    f = n(184299),
    p = n(902749),
    v = n(957099),
    E = n(312729),
    g = n(223418),
    O = n(604162),
    b = n(388032),
    C = n(844136);
let S = '-:--',
    h = {
        [g.rq.PLAYING]: {
            icon: d.fpf,
            label: b.intl.string(b.t.ZcgDJS)
        },
        [g.rq.PAUSED]: {
            icon: d.o1U,
            label: b.intl.string(b.t.RscU7O)
        },
        [g.rq.ENDED]: {
            icon: d.Oe7,
            label: b.intl.string(b.t.hsvh0t)
        }
    };
function _(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, O.yv)(t) : S,
        o = null != n ? (0, O.yv)(n) : S;
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
let j = l.forwardRef(function (e, t) {
    let { iconComponent: n, animationTime: l, visible: o, ariaLabel: s, active: u, disabled: m, tooltipLabel: f, tooltipDelayMs: p = 1500, shortcut: v, onClick: E } = e,
        g = (e) => {
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
                        onClick: !0 === m ? void 0 : E,
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
    if (null == f || !o) return g();
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
            children: (e) => g(e)
        });
    }
});
function y(e) {
    var t, n;
    let { videoRef: o, playerState: O, animSpring: S, visible: y, seekForwardEnabled: x, hideCaptionBtn: D, hideTranscriptBtn: T, handlePlaybackBtnClick: P, handleTranscriptBtnClick: R, handleCaptionBtnClick: N, handleFullScreenBtnClick: I, handleSeekBackBtnClick: k, handleSeekForwardBtnClick: A, handleControlBarPendingInteraction: w, onVolumeChange: L } = e,
        M = (0, f.km)((e) => e.volume),
        V = (0, f.km)((e) => e.setVolume),
        B = (0, f.km)((e) => e.muted),
        F = (0, f.km)((e) => e.setMuted),
        Z = (0, f.km)((e) => e.transcriptEnabled),
        U = (0, f.km)((e) => e.captionEnabled),
        q = (0, f.km)((e) => e.fullScreenEnabled),
        Y = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        H = (0, s.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [Q, z] = l.useState(B ? 0 : M),
        [G, K] = l.useState(!1),
        [X, W] = l.useState(!1),
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
                null != o.current && (e !== o.current.volume && (o.current.volume = e), e !== Q && z(e));
            },
            [o, Q]
        ),
        en = l.useCallback(() => {
            null != o.current && (0 === Q ? (et(M), F(!1), L(M)) : (V(Q), et(0), F(!0), L(0)));
        }, [o, Q, et, M, F, V, L]),
        er = () => {
            K(!0);
        },
        el = () => {
            K(!1);
        },
        eo = l.useCallback(
            (e) => {
                switch (e.key) {
                    case g.Y1.PLAYBACK:
                        P();
                        break;
                    case g.Y1.SPACE:
                        H || (e.preventDefault(), P());
                        break;
                    case g.Y1.SEEK_BACK:
                        k();
                        break;
                    case g.Y1.SEEK_FORWARD:
                        A();
                        break;
                    case g.Y1.CAPTION:
                        N();
                        break;
                    case g.Y1.FULLSCREEN:
                        I();
                        break;
                    case g.Y1.MUTE:
                        en();
                }
            },
            [N, I, P, k, A, en, H]
        );
    (l.useEffect(() => {
        null != ee.current && ee.current.focus();
    }, []),
        l.useEffect(
            () => (
                J({
                    volumeAnimSpring: X || G ? 1 : 0,
                    immediate: Y
                }),
                () => {
                    $.stop();
                }
            ),
            [X, G, J, Y, $]
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
    let ei = 0 === Q ? d.OyP : Q < 0.5 ? d.X2j : d.gj8,
        { icon: ea, label: es } = h[O];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: C.videoControlsGroup,
                children: [
                    (0, r.jsx)(j, {
                        iconComponent: ea,
                        animationTime: S,
                        visible: y,
                        ariaLabel: es,
                        tooltipLabel: es,
                        shortcut: g.Y1.PLAYBACK,
                        onClick: P,
                        ref: ee
                    }),
                    (0, r.jsx)(j, {
                        iconComponent: v.d,
                        animationTime: S,
                        visible: y,
                        onClick: k,
                        ariaLabel: b.intl.string(b.t.r9s3Ul),
                        tooltipLabel: b.intl.string(b.t.r9s3Ul),
                        shortcut: g.Y1.SEEK_BACK
                    }),
                    (0, r.jsx)(j, {
                        iconComponent: E.o,
                        animationTime: S,
                        visible: y,
                        onClick: A,
                        disabled: !x,
                        ariaLabel: x ? b.intl.string(b.t.zWDcND) : b.intl.string(b.t.xXh3y8),
                        tooltipLabel: x ? b.intl.string(b.t.zWDcND) : b.intl.string(b.t.xXh3y8),
                        tooltipDelayMs: 1500 * !!x,
                        shortcut: g.Y1.SEEK_FORWARD
                    })
                ]
            }),
            (0, r.jsxs)(a.animated.div, {
                className: i()(C.videoControlsGroup, C.videoControlsGroupMid),
                style: {
                    opacity: (0, a.to)(
                        [
                            S.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(y ? e : Math.pow(e, 8))
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
                            (0, r.jsx)(j, {
                                iconComponent: ei,
                                animationTime: S,
                                visible: y,
                                onClick: en,
                                ariaLabel: b.intl.string(b.t['eIl+AA']),
                                tooltipLabel: b.intl.string(b.t['eIl+AA']),
                                shortcut: g.Y1.MUTE
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
                                        (e) => ''.concat(y ? e : Math.pow(e, 8))
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
                                    initialValue: Q,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        (et(e), V(e), L(e), X && (W(!1), w(!1)), B && e > 0 && F(!1));
                                    },
                                    asValueChanges: (e) => {
                                        (et(e), X || (W(!0), w(!0)));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': b.intl.string(b.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(_, {
                        current: null == o || null == (t = o.current) ? void 0 : t.currentTime,
                        duration: null == o || null == (n = o.current) ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: i()(C.videoControlsGroup, C.videoControlsGroupEnd),
                children: [
                    !T &&
                        (0, r.jsx)(j, {
                            iconComponent: d.hH0,
                            animationTime: S,
                            visible: y,
                            onClick: R,
                            active: Z && O !== g.rq.ENDED,
                            disabled: O === g.rq.ENDED,
                            ariaLabel: b.intl.string(b.t.KCzjTk),
                            tooltipLabel: b.intl.string(b.t.KCzjTk)
                        }),
                    !D &&
                        (0, r.jsx)(j, {
                            iconComponent: p.c,
                            animationTime: S,
                            visible: y,
                            active: U,
                            onClick: N,
                            ariaLabel: b.intl.string(b.t.bDSZOz),
                            tooltipLabel: b.intl.string(b.t.bDSZOz),
                            shortcut: g.Y1.CAPTION
                        }),
                    (0, r.jsx)(j, {
                        iconComponent: q ? d.wvt : d.NpZ,
                        animationTime: S,
                        visible: y,
                        onClick: I,
                        ariaLabel: b.intl.string(b.t.vKZT5u),
                        tooltipLabel: b.intl.string(b.t.vKZT5u),
                        shortcut: g.Y1.FULLSCREEN
                    })
                ]
            })
        ]
    });
}
