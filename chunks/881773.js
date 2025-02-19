n.d(t, { Z: () => T }), n(566702), n(47120);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(642128),
    a = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(481060),
    m = n(607070),
    p = n(540059),
    f = n(617136),
    v = n(184299),
    E = n(902749),
    g = n(957099),
    b = n(312729),
    O = n(223418),
    S = n(604162),
    j = n(981631),
    C = n(388032),
    h = n(677488);
function y(e) {
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
function x(e, t) {
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
let _ = '-:--',
    N = {
        [O.rq.PLAYING]: {
            icon: d.fpf,
            label: C.NW.string(C.t.ZcgDJS)
        },
        [O.rq.PAUSED]: {
            icon: d.o1U,
            label: C.NW.string(C.t.RscU7O)
        },
        [O.rq.ENDED]: {
            icon: d.Oe7,
            label: C.NW.string(C.t.hsvh0t)
        }
    };
function D(e) {
    let { current: t, duration: n } = e,
        o = null != t ? (0, S.yv)(t) : _,
        i = null != n ? (0, S.yv)(n) : _;
    return (
        (o = o.padStart(i.length, '0')),
        (0, r.jsxs)('div', {
            className: l()(h.durationTimeWrapper, h.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: h.durationTimeDisplay,
                    children: o
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: h.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: h.durationTimeDisplay,
                    children: i
                })
            ]
        })
    );
}
let P = o.forwardRef(function (e, t) {
    let { iconComponent: n, animationTime: o, visible: i, ariaLabel: a, active: u, disabled: m, tooltipLabel: p, tooltipDelayMs: f = 1500, shortcut: v, onClick: E } = e,
        g = (e) =>
            (0, r.jsx)(
                d.P3F,
                x(y({}, e), {
                    onClick: !0 === m ? void 0 : E,
                    className: l()(h.videoControlsBtnCont, { [h.videoControlsBtnContDisabled]: m }),
                    'aria-label': a,
                    'aria-disabled': m,
                    innerRef: t,
                    children: (0, r.jsx)(s.animated.div, {
                        className: l()(h.videoControlsBtnCont),
                        style: {
                            opacity: (0, s.to)(
                                [
                                    o.to({
                                        range: [0, 1],
                                        output: [0, 1]
                                    })
                                ],
                                (e) => ''.concat(i ? e : Math.pow(e, 8))
                            )
                        },
                        children: (0, r.jsx)(n, {
                            color: !0 !== m ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                            className: l()(h.controlsBarItem, {
                                [h.controlsBarItemActive]: u,
                                [h.videoControlsBtn]: !m
                            })
                        })
                    })
                })
            );
    if (null == p) return g();
    {
        let e = (0, r.jsxs)(r.Fragment, {
            children: [
                p,
                '' !== (null != v ? v : '').trim() &&
                    (0, r.jsx)(d.M2$, {
                        shortcut: null != v ? v : '',
                        className: h.videoControlsBtnTooltipKeyCombo
                    })
            ]
        });
        return (0, r.jsx)(d.ua7, {
            text: e,
            'aria-label': p,
            tooltipContentClassName: h.videoControlsBtnTooltip,
            delay: f,
            children: (e) => g(e)
        });
    }
});
function T(e) {
    var t, n;
    let { videoRef: i, quest: S, playerState: _, animSpring: T, visible: I, seekForwardEnabled: A, hideCaptionBtn: w, handlePlaybackBtnClick: L, handleTranscriptBtnClick: k, handleCaptionBtnClick: R, handleFullScreenBtnClick: M, handleSeekBackBtnClick: q, handleSeekForwardBtnClick: F, handleControlBarPendingInteraction: B } = e,
        U = (0, p.Q3)('ListSectionItem'),
        Z = (0, v.km)((e) => e.volume),
        V = (0, v.km)((e) => e.setVolume),
        Y = (0, v.km)((e) => e.muted),
        W = (0, v.km)((e) => e.setMuted),
        z = (0, v.km)((e) => e.transcriptEnabled),
        G = (0, v.km)((e) => e.captionEnabled),
        H = (0, v.km)((e) => e.fullScreenEnabled),
        K = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
        Q = (0, a.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [X, $] = o.useState(Y ? 0 : Z),
        [J, ee] = o.useState(!1),
        [et, en] = o.useState(!1),
        [{ volumeAnimSpring: er }, eo] = (0, d.q_F)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        ei = o.useRef(null),
        el = (0, f._F)(),
        es = o.useCallback(
            (e) => {
                null != i.current && (e !== i.current.volume && (i.current.volume = e), e !== X && $(e));
            },
            [i, X]
        ),
        ea = o.useCallback(
            (e, t) => {
                el({
                    questId: e,
                    event: j.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                    properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
                });
            },
            [el]
        ),
        ec = o.useCallback(() => {
            null != i.current && (0 === X ? (es(Z), W(!1), ea(S.id, Z)) : (V(X), es(0), W(!0), ea(S.id, 0)));
        }, [i, X, es, Z, W, ea, S.id, V]),
        eu = () => {
            ee(!0);
        },
        ed = () => {
            ee(!1);
        },
        em = o.useCallback(
            (e) => {
                switch (e.key) {
                    case O.Y1.PLAYBACK:
                        L();
                        break;
                    case O.Y1.SPACE:
                        Q || (e.preventDefault(), L());
                        break;
                    case O.Y1.SEEK_BACK:
                        q();
                        break;
                    case O.Y1.SEEK_FORWARD:
                        F();
                        break;
                    case O.Y1.CAPTION:
                        R();
                        break;
                    case O.Y1.FULLSCREEN:
                        M();
                        break;
                    case O.Y1.MUTE:
                        ec();
                }
            },
            [R, M, L, q, F, ec, Q]
        );
    o.useEffect(() => {
        null != ei.current && ei.current.focus();
    }, []),
        o.useEffect(
            () => (
                eo({
                    volumeAnimSpring: et || J ? 1 : 0,
                    immediate: K
                }),
                () => {
                    er.stop();
                }
            ),
            [et, J, eo, K, er]
        ),
        o.useEffect(
            () => (
                window.addEventListener('keydown', em),
                () => {
                    window.removeEventListener('keydown', em);
                }
            ),
            [em]
        );
    let ep = 0 === X ? d.OyP : X < 0.5 ? d.X2j : d.gj8,
        { icon: ef, label: ev } = N[_];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: h.videoControlsGroup,
                children: [
                    (0, r.jsx)(P, {
                        iconComponent: ef,
                        animationTime: T,
                        visible: I,
                        ariaLabel: ev,
                        tooltipLabel: ev,
                        shortcut: O.Y1.PLAYBACK,
                        onClick: L,
                        ref: ei
                    }),
                    (0, r.jsx)(P, {
                        iconComponent: g.d,
                        animationTime: T,
                        visible: I,
                        onClick: q,
                        ariaLabel: C.NW.string(C.t.r9s3Ul),
                        tooltipLabel: C.NW.string(C.t.r9s3Ul),
                        shortcut: O.Y1.SEEK_BACK
                    }),
                    (0, r.jsx)(P, {
                        iconComponent: b.o,
                        animationTime: T,
                        visible: I,
                        onClick: F,
                        disabled: !A,
                        ariaLabel: A ? C.NW.string(C.t.zWDcND) : C.NW.string(C.t.xXh3y8),
                        tooltipLabel: A ? C.NW.string(C.t.zWDcND) : C.NW.string(C.t.xXh3y8),
                        tooltipDelayMs: 1500 * !!A,
                        shortcut: O.Y1.SEEK_FORWARD
                    })
                ]
            }),
            (0, r.jsxs)(s.animated.div, {
                className: l()(h.videoControlsGroup, h.videoControlsGroupMid),
                style: {
                    opacity: (0, s.to)(
                        [
                            T.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(I ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: eu,
                        onMouseLeave: ed,
                        onFocus: eu,
                        onBlur: ed,
                        className: h.volumeControlGroup,
                        children: [
                            (0, r.jsx)(P, {
                                iconComponent: ep,
                                animationTime: T,
                                visible: I,
                                onClick: ec,
                                ariaLabel: C.NW.string(C.t['eIl+AA']),
                                tooltipLabel: C.NW.string(C.t['eIl+AA']),
                                shortcut: O.Y1.MUTE
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: h.volumeSlider,
                                style: {
                                    opacity: (0, s.to)(
                                        [
                                            er.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(I ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, s.to)(
                                        [
                                            er.to({
                                                range: [0, 1],
                                                output: [0, 100]
                                            })
                                        ],
                                        (e) => ''.concat(e, 'px')
                                    )
                                },
                                children: (0, r.jsx)(
                                    u.i,
                                    x(
                                        y(
                                            { mini: !0 },
                                            U
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
                                            initialValue: X,
                                            keyboardStep: 0.1,
                                            minValue: 0,
                                            maxValue: 1,
                                            onValueChange: (e) => {
                                                es(e), V(e), ea(S.id, e), et && (en(!1), B(!1)), Y && e > 0 && W(!1);
                                            },
                                            asValueChanges: (e) => {
                                                es(e), et || (en(!0), B(!0));
                                            },
                                            fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                            orientation: 'horizontal',
                                            'aria-label': C.NW.string(C.t['eIl+AA'])
                                        }
                                    )
                                )
                            })
                        ]
                    }),
                    (0, r.jsx)(D, {
                        current: null == i ? void 0 : null === (t = i.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == i ? void 0 : null === (n = i.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: l()(h.videoControlsGroup, h.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(P, {
                        iconComponent: d.hH0,
                        animationTime: T,
                        visible: I,
                        onClick: k,
                        active: z && _ !== O.rq.ENDED,
                        disabled: _ === O.rq.ENDED,
                        ariaLabel: C.NW.string(C.t.KCzjTk),
                        tooltipLabel: C.NW.string(C.t.KCzjTk)
                    }),
                    !w &&
                        (0, r.jsx)(P, {
                            iconComponent: E.c,
                            animationTime: T,
                            visible: I,
                            active: G,
                            onClick: R,
                            ariaLabel: C.NW.string(C.t.bDSZOz),
                            tooltipLabel: C.NW.string(C.t.bDSZOz),
                            shortcut: O.Y1.CAPTION
                        }),
                    (0, r.jsx)(P, {
                        iconComponent: H ? d.wvt : d.NpZ,
                        animationTime: T,
                        visible: I,
                        onClick: M,
                        ariaLabel: C.NW.string(C.t.vKZT5u),
                        tooltipLabel: C.NW.string(C.t.vKZT5u),
                        shortcut: O.Y1.FULLSCREEN
                    })
                ]
            })
        ]
    });
}
