(n.d(t, { Z: () => _ }), n(781311), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(264738),
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
    let { videoRef: o, playerState: E, animSpring: h, visible: _, seekForwardEnabled: x, hideCaptionBtn: D, handlePlaybackBtnClick: T, handleTranscriptBtnClick: P, handleCaptionBtnClick: N, handleFullScreenBtnClick: k, handleSeekBackBtnClick: I, handleSeekForwardBtnClick: w, handleControlBarPendingInteraction: A, onVolumeChange: L } = e,
        R = (0, f.km)((e) => e.volume),
        M = (0, f.km)((e) => e.setVolume),
        V = (0, f.km)((e) => e.muted),
        B = (0, f.km)((e) => e.setMuted),
        F = (0, f.km)((e) => e.transcriptEnabled),
        Z = (0, f.km)((e) => e.captionEnabled),
        q = (0, f.km)((e) => e.fullScreenEnabled),
        U = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        Q = (0, s.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [G, Y] = l.useState(V ? 0 : R),
        [z, H] = l.useState(!1),
        [K, X] = l.useState(!1),
        [{ volumeAnimSpring: W }, $] = (0, d.q_F)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        J = l.useRef(null),
        ee = l.useCallback(
            (e) => {
                null != o.current && (e !== o.current.volume && (o.current.volume = e), e !== G && Y(e));
            },
            [o, G]
        ),
        et = l.useCallback(() => {
            null != o.current && (0 === G ? (ee(R), B(!1), L(R)) : (M(G), ee(0), B(!0), L(0)));
        }, [o, G, ee, R, B, M, L]),
        en = () => {
            H(!0);
        },
        er = () => {
            H(!1);
        },
        el = l.useCallback(
            (e) => {
                switch (e.key) {
                    case b.Y1.PLAYBACK:
                        T();
                        break;
                    case b.Y1.SPACE:
                        Q || (e.preventDefault(), T());
                        break;
                    case b.Y1.SEEK_BACK:
                        I();
                        break;
                    case b.Y1.SEEK_FORWARD:
                        w();
                        break;
                    case b.Y1.CAPTION:
                        N();
                        break;
                    case b.Y1.FULLSCREEN:
                        k();
                        break;
                    case b.Y1.MUTE:
                        et();
                }
            },
            [N, k, T, I, w, et, Q]
        );
    (l.useEffect(() => {
        null != J.current && J.current.focus();
    }, []),
        l.useEffect(
            () => (
                $({
                    volumeAnimSpring: K || z ? 1 : 0,
                    immediate: U
                }),
                () => {
                    W.stop();
                }
            ),
            [K, z, $, U, W]
        ),
        l.useEffect(
            () => (
                window.addEventListener('keydown', el),
                () => {
                    window.removeEventListener('keydown', el);
                }
            ),
            [el]
        ));
    let eo = 0 === G ? d.OyP : G < 0.5 ? d.X2j : d.gj8,
        { icon: ei, label: ea } = S[E];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: C.videoControlsGroup,
                children: [
                    (0, r.jsx)(y, {
                        iconComponent: ei,
                        animationTime: h,
                        visible: _,
                        ariaLabel: ea,
                        tooltipLabel: ea,
                        shortcut: b.Y1.PLAYBACK,
                        onClick: T,
                        ref: J
                    }),
                    (0, r.jsx)(y, {
                        iconComponent: v.d,
                        animationTime: h,
                        visible: _,
                        onClick: I,
                        ariaLabel: O.intl.string(O.t.r9s3Ul),
                        tooltipLabel: O.intl.string(O.t.r9s3Ul),
                        shortcut: b.Y1.SEEK_BACK
                    }),
                    (0, r.jsx)(y, {
                        iconComponent: g.o,
                        animationTime: h,
                        visible: _,
                        onClick: w,
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
                        onMouseEnter: en,
                        onMouseLeave: er,
                        onFocus: en,
                        onBlur: er,
                        className: C.volumeControlGroup,
                        children: [
                            (0, r.jsx)(y, {
                                iconComponent: eo,
                                animationTime: h,
                                visible: _,
                                onClick: et,
                                ariaLabel: O.intl.string(O.t['eIl+AA']),
                                tooltipLabel: O.intl.string(O.t['eIl+AA']),
                                shortcut: b.Y1.MUTE
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: C.volumeSlider,
                                style: {
                                    opacity: (0, a.to)(
                                        [
                                            W.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(_ ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, a.to)(
                                        [
                                            W.to({
                                                range: [0, 1],
                                                output: [0, 100]
                                            })
                                        ],
                                        (e) => ''.concat(e, 'px')
                                    )
                                },
                                children: (0, r.jsx)(u.i, {
                                    mini: !0,
                                    initialValue: G,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        (ee(e), M(e), L(e), K && (X(!1), A(!1)), V && e > 0 && B(!1));
                                    },
                                    asValueChanges: (e) => {
                                        (ee(e), K || (X(!0), A(!0)));
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
                    (0, r.jsx)(y, {
                        iconComponent: d.hH0,
                        animationTime: h,
                        visible: _,
                        onClick: P,
                        active: F && E !== b.rq.ENDED,
                        disabled: E === b.rq.ENDED,
                        ariaLabel: O.intl.string(O.t.KCzjTk),
                        tooltipLabel: O.intl.string(O.t.KCzjTk)
                    }),
                    !D &&
                        (0, r.jsx)(y, {
                            iconComponent: p.c,
                            animationTime: h,
                            visible: _,
                            active: Z,
                            onClick: N,
                            ariaLabel: O.intl.string(O.t.bDSZOz),
                            tooltipLabel: O.intl.string(O.t.bDSZOz),
                            shortcut: b.Y1.CAPTION
                        }),
                    (0, r.jsx)(y, {
                        iconComponent: q ? d.wvt : d.NpZ,
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
