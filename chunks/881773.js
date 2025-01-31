n.d(t, { Z: () => A }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(642128),
    a = n(442837),
    u = n(692547),
    c = n(561779),
    d = n(481060),
    m = n(607070),
    v = n(540059),
    E = n(617136),
    C = n(184299),
    p = n(902749),
    S = n(957099),
    f = n(312729),
    g = n(223418),
    x = n(604162),
    h = n(981631),
    _ = n(388032),
    T = n(451680);
let N = '-:--',
    D = {
        [g.rq.PLAYING]: {
            icon: d.fpf,
            label: _.intl.string(_.t.ZcgDJS)
        },
        [g.rq.PAUSED]: {
            icon: d.o1U,
            label: _.intl.string(_.t.RscU7O)
        },
        [g.rq.ENDED]: {
            icon: d.Oe7,
            label: _.intl.string(_.t.hsvh0t)
        }
    };
function j(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, x.yv)(t) : N,
        i = null != n ? (0, x.yv)(n) : N;
    return (
        (l = l.padStart(i.length, '0')),
        (0, r.jsxs)('div', {
            className: s()(T.durationTimeWrapper, T.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: T.durationTimeDisplay,
                    children: l
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: T.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: T.durationTimeDisplay,
                    children: i
                })
            ]
        })
    );
}
let I = l.forwardRef(function (e, t) {
    let { iconComponent: n, animationTime: l, visible: i, ariaLabel: a, active: c, disabled: m, tooltipLabel: v, tooltipDelayMs: E = 1500, shortcut: C, onClick: p } = e,
        S = (e) =>
            (0, r.jsx)(d.P3F, {
                ...e,
                onClick: !0 === m ? void 0 : p,
                className: s()(T.videoControlsBtnCont, { [T.videoControlsBtnContDisabled]: m }),
                'aria-label': a,
                'aria-disabled': m,
                innerRef: t,
                children: (0, r.jsx)(o.animated.div, {
                    className: s()(T.videoControlsBtnCont),
                    style: {
                        opacity: (0, o.to)(
                            [
                                l.to({
                                    range: [0, 1],
                                    output: [0, 1]
                                })
                            ],
                            (e) => ''.concat(i ? e : Math.pow(e, 8))
                        )
                    },
                    children: (0, r.jsx)(n, {
                        color: !0 !== m ? u.Z.colors.WHITE : u.Z.colors.TEXT_MUTED,
                        className: s()(T.controlsBarItem, {
                            [T.controlsBarItemActive]: c,
                            [T.videoControlsBtn]: !m
                        })
                    })
                })
            });
    if (null == v) return S();
    {
        let e = (0, r.jsxs)(r.Fragment, {
            children: [
                v,
                '' !== (null != C ? C : '').trim() &&
                    (0, r.jsx)(d.M2$, {
                        shortcut: null != C ? C : '',
                        className: T.videoControlsBtnTooltipKeyCombo
                    })
            ]
        });
        return (0, r.jsx)(d.ua7, {
            text: e,
            'aria-label': v,
            tooltipContentClassName: T.videoControlsBtnTooltip,
            delay: E,
            children: (e) => S(e)
        });
    }
});
function A(e) {
    var t, n;
    let { videoRef: i, quest: x, playerState: N, animSpring: A, visible: b, seekForwardEnabled: L, hideCaptionBtn: O, handlePlaybackBtnClick: R, handleTranscriptBtnClick: k, handleCaptionBtnClick: M, handleFullScreenBtnClick: P, handleSeekBackBtnClick: q, handleSeekForwardBtnClick: y, handleControlBarPendingInteraction: w } = e,
        F = (0, v.Q3)('ListSectionItem'),
        B = (0, C.km)((e) => e.volume),
        U = (0, C.km)((e) => e.setVolume),
        Z = (0, C.km)((e) => e.muted),
        V = (0, C.km)((e) => e.setMuted),
        Y = (0, C.km)((e) => e.transcriptEnabled),
        z = (0, C.km)((e) => e.captionEnabled),
        G = (0, C.km)((e) => e.fullScreenEnabled),
        H = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
        K = (0, a.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [X, Q] = l.useState(Z ? 0 : B),
        [W, $] = l.useState(!1),
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
        el = (0, E._F)(),
        ei = l.useCallback(
            (e) => {
                null != i.current && (e !== i.current.volume && (i.current.volume = e), e !== X && Q(e));
            },
            [i, X]
        ),
        es = l.useCallback(
            (e, t) => {
                el({
                    questId: e,
                    event: h.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                    properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
                });
            },
            [el]
        ),
        eo = l.useCallback(() => {
            null != i.current && (0 === X ? (ei(B), V(!1), es(x.id, B)) : (U(X), ei(0), V(!0), es(x.id, 0)));
        }, [i, X, ei, B, V, es, x.id, U]),
        ea = () => {
            $(!0);
        },
        eu = () => {
            $(!1);
        },
        ec = l.useCallback(
            (e) => {
                switch (e.key) {
                    case g.Y1.PLAYBACK:
                        R();
                        break;
                    case g.Y1.SPACE:
                        K || (e.preventDefault(), R());
                        break;
                    case g.Y1.SEEK_BACK:
                        q();
                        break;
                    case g.Y1.SEEK_FORWARD:
                        y();
                        break;
                    case g.Y1.CAPTION:
                        M();
                        break;
                    case g.Y1.FULLSCREEN:
                        P();
                        break;
                    case g.Y1.MUTE:
                        eo();
                }
            },
            [M, P, R, q, y, eo, K]
        );
    l.useEffect(() => {
        null != er.current && er.current.focus();
    }, []),
        l.useEffect(
            () => (
                en({
                    volumeAnimSpring: J || W ? 1 : 0,
                    immediate: H
                }),
                () => {
                    et.stop();
                }
            ),
            [J, W, en, H, et]
        ),
        l.useEffect(
            () => (
                window.addEventListener('keydown', ec),
                () => {
                    window.removeEventListener('keydown', ec);
                }
            ),
            [ec]
        );
    let ed = 0 === X ? d.OyP : X < 0.5 ? d.X2j : d.gj8,
        { icon: em, label: ev } = D[N];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: T.videoControlsGroup,
                children: [
                    (0, r.jsx)(I, {
                        iconComponent: em,
                        animationTime: A,
                        visible: b,
                        ariaLabel: ev,
                        tooltipLabel: ev,
                        shortcut: g.Y1.PLAYBACK,
                        onClick: R,
                        ref: er
                    }),
                    (0, r.jsx)(I, {
                        iconComponent: S.d,
                        animationTime: A,
                        visible: b,
                        onClick: q,
                        ariaLabel: _.intl.string(_.t.r9s3Ul),
                        tooltipLabel: _.intl.string(_.t.r9s3Ul),
                        shortcut: g.Y1.SEEK_BACK
                    }),
                    (0, r.jsx)(I, {
                        iconComponent: f.o,
                        animationTime: A,
                        visible: b,
                        onClick: y,
                        disabled: !L,
                        ariaLabel: L ? _.intl.string(_.t.zWDcND) : _.intl.string(_.t.xXh3y8),
                        tooltipLabel: L ? _.intl.string(_.t.zWDcND) : _.intl.string(_.t.xXh3y8),
                        tooltipDelayMs: L ? 1500 : 0,
                        shortcut: g.Y1.SEEK_FORWARD
                    })
                ]
            }),
            (0, r.jsxs)(o.animated.div, {
                className: s()(T.videoControlsGroup, T.videoControlsGroupMid),
                style: {
                    opacity: (0, o.to)(
                        [
                            A.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(b ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: ea,
                        onMouseLeave: eu,
                        onFocus: ea,
                        onBlur: eu,
                        className: T.volumeControlGroup,
                        children: [
                            (0, r.jsx)(I, {
                                iconComponent: ed,
                                animationTime: A,
                                visible: b,
                                onClick: eo,
                                ariaLabel: _.intl.string(_.t['eIl+AA']),
                                tooltipLabel: _.intl.string(_.t['eIl+AA']),
                                shortcut: g.Y1.MUTE
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: T.volumeSlider,
                                style: {
                                    opacity: (0, o.to)(
                                        [
                                            et.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(b ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, o.to)(
                                        [
                                            et.to({
                                                range: [0, 1],
                                                output: [0, 100]
                                            })
                                        ],
                                        (e) => ''.concat(e, 'px')
                                    )
                                },
                                children: (0, r.jsx)(c.i, {
                                    mini: !0,
                                    ...(F
                                        ? {}
                                        : {
                                              barStyles: {
                                                  height: '5px',
                                                  top: '10px'
                                              },
                                              grabberStyles: {
                                                  marginTop: '-5px',
                                                  backgroundColor: u.Z.colors.WHITE.css,
                                                  cursor: 'pointer'
                                              },
                                              fillStyles: { backgroundColor: u.Z.colors.WHITE.css }
                                          }),
                                    initialValue: X,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        ei(e), U(e), es(x.id, e), J && (ee(!1), w(!1)), Z && e > 0 && V(!1);
                                    },
                                    asValueChanges: (e) => {
                                        ei(e), J || (ee(!0), w(!0));
                                    },
                                    fillStyles: { backgroundColor: u.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': _.intl.string(_.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(j, {
                        current: null == i ? void 0 : null === (t = i.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == i ? void 0 : null === (n = i.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: s()(T.videoControlsGroup, T.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(I, {
                        iconComponent: d.hH0,
                        animationTime: A,
                        visible: b,
                        onClick: k,
                        active: Y && N !== g.rq.ENDED,
                        disabled: N === g.rq.ENDED,
                        ariaLabel: _.intl.string(_.t.KCzjTk),
                        tooltipLabel: _.intl.string(_.t.KCzjTk)
                    }),
                    !O &&
                        (0, r.jsx)(I, {
                            iconComponent: p.c,
                            animationTime: A,
                            visible: b,
                            active: z,
                            onClick: M,
                            ariaLabel: _.intl.string(_.t.bDSZOz),
                            tooltipLabel: _.intl.string(_.t.bDSZOz),
                            shortcut: g.Y1.CAPTION
                        }),
                    (0, r.jsx)(I, {
                        iconComponent: G ? d.wvt : d.NpZ,
                        animationTime: A,
                        visible: b,
                        onClick: P,
                        ariaLabel: _.intl.string(_.t.vKZT5u),
                        tooltipLabel: _.intl.string(_.t.vKZT5u),
                        shortcut: g.Y1.FULLSCREEN
                    })
                ]
            })
        ]
    });
}
