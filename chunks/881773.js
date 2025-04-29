n.d(t, { Z: () => P }), n(781311), n(388685);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(481752),
    s = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(481060),
    m = n(607070),
    p = n(540059),
    f = n(184299),
    v = n(902749),
    g = n(957099),
    b = n(312729),
    E = n(223418),
    O = n(604162),
    h = n(388032),
    S = n(844136);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = '-:--',
    _ = {
        [E.rq.PLAYING]: {
            icon: d.fpf,
            label: h.intl.string(h.t.ZcgDJS)
        },
        [E.rq.PAUSED]: {
            icon: d.o1U,
            label: h.intl.string(h.t.RscU7O)
        },
        [E.rq.ENDED]: {
            icon: d.Oe7,
            label: h.intl.string(h.t.hsvh0t)
        }
    };
function x(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, O.yv)(t) : y,
        o = null != n ? (0, O.yv)(n) : y;
    return (
        (l = l.padStart(o.length, '0')),
        (0, r.jsxs)('div', {
            className: i()(S.durationTimeWrapper, S.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: S.durationTimeDisplay,
                    children: l
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: S.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: S.durationTimeDisplay,
                    children: o
                })
            ]
        })
    );
}
let D = l.forwardRef(function (e, t) {
    let { iconComponent: n, animationTime: l, visible: o, ariaLabel: s, active: u, disabled: m, tooltipLabel: p, tooltipDelayMs: f = 1500, shortcut: v, onClick: g } = e,
        b = (e) =>
            (0, r.jsx)(
                d.P3F,
                j(C({}, e), {
                    onClick: !0 === m ? void 0 : g,
                    className: i()(S.videoControlsBtnCont, { [S.videoControlsBtnContDisabled]: m }),
                    'aria-label': s,
                    'aria-disabled': m,
                    innerRef: t,
                    children: (0, r.jsx)(a.animated.div, {
                        className: S.videoControlsBtnCont,
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
                            className: i()(S.controlsBarItem, {
                                [S.controlsBarItemActive]: u,
                                [S.videoControlsBtn]: !m
                            })
                        })
                    })
                })
            );
    if (null == p) return b();
    {
        let e = (0, r.jsxs)(r.Fragment, {
            children: [
                p,
                '' !== (null != v ? v : '').trim() &&
                    (0, r.jsx)(d.M2$, {
                        shortcut: null != v ? v : '',
                        className: S.videoControlsBtnTooltipKeyCombo
                    })
            ]
        });
        return (0, r.jsx)(d.ua7, {
            text: e,
            'aria-label': p,
            tooltipContentClassName: S.videoControlsBtnTooltip,
            delay: f,
            children: (e) => b(e)
        });
    }
});
function P(e) {
    var t, n;
    let { videoRef: o, playerState: O, animSpring: y, visible: P, seekForwardEnabled: T, hideCaptionBtn: N, handlePlaybackBtnClick: k, handleTranscriptBtnClick: w, handleCaptionBtnClick: A, handleFullScreenBtnClick: I, handleSeekBackBtnClick: L, handleSeekForwardBtnClick: R, handleControlBarPendingInteraction: M, onVolumeChange: V } = e,
        B = (0, p.Q3)('ListSectionItem'),
        F = (0, f.km)((e) => e.volume),
        Z = (0, f.km)((e) => e.setVolume),
        U = (0, f.km)((e) => e.muted),
        q = (0, f.km)((e) => e.setMuted),
        Y = (0, f.km)((e) => e.transcriptEnabled),
        Q = (0, f.km)((e) => e.captionEnabled),
        G = (0, f.km)((e) => e.fullScreenEnabled),
        z = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        H = (0, s.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [K, W] = l.useState(U ? 0 : F),
        [X, $] = l.useState(!1),
        [J, ee] = l.useState(!1),
        [{ volumeAnimSpring: et }, en] = (0, d.q_F)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        er = l.useRef(null),
        el = l.useCallback(
            (e) => {
                null != o.current && (e !== o.current.volume && (o.current.volume = e), e !== K && W(e));
            },
            [o, K]
        ),
        eo = l.useCallback(() => {
            null != o.current && (0 === K ? (el(F), q(!1), V(F)) : (Z(K), el(0), q(!0), V(0)));
        }, [o, K, el, F, q, Z, V]),
        ei = () => {
            $(!0);
        },
        ea = () => {
            $(!1);
        },
        es = l.useCallback(
            (e) => {
                switch (e.key) {
                    case E.Y1.PLAYBACK:
                        k();
                        break;
                    case E.Y1.SPACE:
                        H || (e.preventDefault(), k());
                        break;
                    case E.Y1.SEEK_BACK:
                        L();
                        break;
                    case E.Y1.SEEK_FORWARD:
                        R();
                        break;
                    case E.Y1.CAPTION:
                        A();
                        break;
                    case E.Y1.FULLSCREEN:
                        I();
                        break;
                    case E.Y1.MUTE:
                        eo();
                }
            },
            [A, I, k, L, R, eo, H]
        );
    l.useEffect(() => {
        null != er.current && er.current.focus();
    }, []),
        l.useEffect(
            () => (
                en({
                    volumeAnimSpring: J || X ? 1 : 0,
                    immediate: z
                }),
                () => {
                    et.stop();
                }
            ),
            [J, X, en, z, et]
        ),
        l.useEffect(
            () => (
                window.addEventListener('keydown', es),
                () => {
                    window.removeEventListener('keydown', es);
                }
            ),
            [es]
        );
    let ec = 0 === K ? d.OyP : K < 0.5 ? d.X2j : d.gj8,
        { icon: eu, label: ed } = _[O];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: S.videoControlsGroup,
                children: [
                    (0, r.jsx)(D, {
                        iconComponent: eu,
                        animationTime: y,
                        visible: P,
                        ariaLabel: ed,
                        tooltipLabel: ed,
                        shortcut: E.Y1.PLAYBACK,
                        onClick: k,
                        ref: er
                    }),
                    (0, r.jsx)(D, {
                        iconComponent: g.d,
                        animationTime: y,
                        visible: P,
                        onClick: L,
                        ariaLabel: h.intl.string(h.t.r9s3Ul),
                        tooltipLabel: h.intl.string(h.t.r9s3Ul),
                        shortcut: E.Y1.SEEK_BACK
                    }),
                    (0, r.jsx)(D, {
                        iconComponent: b.o,
                        animationTime: y,
                        visible: P,
                        onClick: R,
                        disabled: !T,
                        ariaLabel: T ? h.intl.string(h.t.zWDcND) : h.intl.string(h.t.xXh3y8),
                        tooltipLabel: T ? h.intl.string(h.t.zWDcND) : h.intl.string(h.t.xXh3y8),
                        tooltipDelayMs: 1500 * !!T,
                        shortcut: E.Y1.SEEK_FORWARD
                    })
                ]
            }),
            (0, r.jsxs)(a.animated.div, {
                className: i()(S.videoControlsGroup, S.videoControlsGroupMid),
                style: {
                    opacity: (0, a.to)(
                        [
                            y.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(P ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: ei,
                        onMouseLeave: ea,
                        onFocus: ei,
                        onBlur: ea,
                        className: S.volumeControlGroup,
                        children: [
                            (0, r.jsx)(D, {
                                iconComponent: ec,
                                animationTime: y,
                                visible: P,
                                onClick: eo,
                                ariaLabel: h.intl.string(h.t['eIl+AA']),
                                tooltipLabel: h.intl.string(h.t['eIl+AA']),
                                shortcut: E.Y1.MUTE
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: S.volumeSlider,
                                style: {
                                    opacity: (0, a.to)(
                                        [
                                            et.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(P ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, a.to)(
                                        [
                                            et.to({
                                                range: [0, 1],
                                                output: [0, 100]
                                            })
                                        ],
                                        (e) => ''.concat(e, 'px')
                                    )
                                },
                                children: (0, r.jsx)(
                                    u.i,
                                    j(
                                        C(
                                            { mini: !0 },
                                            B
                                                ? {}
                                                : {
                                                      barStyles: {
                                                          height: '5px',
                                                          top: '10px'
                                                      },
                                                      grabberStyles: {
                                                          marginTop: '-5px',
                                                          backgroundColor: c.Z.colors.WHITE.css,
                                                          cursor: 'pointer'
                                                      },
                                                      fillStyles: { backgroundColor: c.Z.colors.WHITE.css }
                                                  }
                                        ),
                                        {
                                            initialValue: K,
                                            keyboardStep: 0.1,
                                            minValue: 0,
                                            maxValue: 1,
                                            onValueChange: (e) => {
                                                el(e), Z(e), V(e), J && (ee(!1), M(!1)), U && e > 0 && q(!1);
                                            },
                                            asValueChanges: (e) => {
                                                el(e), J || (ee(!0), M(!0));
                                            },
                                            fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                            orientation: 'horizontal',
                                            'aria-label': h.intl.string(h.t['eIl+AA'])
                                        }
                                    )
                                )
                            })
                        ]
                    }),
                    (0, r.jsx)(x, {
                        current: null == o || null == (t = o.current) ? void 0 : t.currentTime,
                        duration: null == o || null == (n = o.current) ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: i()(S.videoControlsGroup, S.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(D, {
                        iconComponent: d.hH0,
                        animationTime: y,
                        visible: P,
                        onClick: w,
                        active: Y && O !== E.rq.ENDED,
                        disabled: O === E.rq.ENDED,
                        ariaLabel: h.intl.string(h.t.KCzjTk),
                        tooltipLabel: h.intl.string(h.t.KCzjTk)
                    }),
                    !N &&
                        (0, r.jsx)(D, {
                            iconComponent: v.c,
                            animationTime: y,
                            visible: P,
                            active: Q,
                            onClick: A,
                            ariaLabel: h.intl.string(h.t.bDSZOz),
                            tooltipLabel: h.intl.string(h.t.bDSZOz),
                            shortcut: E.Y1.CAPTION
                        }),
                    (0, r.jsx)(D, {
                        iconComponent: G ? d.wvt : d.NpZ,
                        animationTime: y,
                        visible: P,
                        onClick: I,
                        ariaLabel: h.intl.string(h.t.vKZT5u),
                        tooltipLabel: h.intl.string(h.t.vKZT5u),
                        shortcut: E.Y1.FULLSCREEN
                    })
                ]
            })
        ]
    });
}
