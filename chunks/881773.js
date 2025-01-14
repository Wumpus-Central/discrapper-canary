n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(476183),
    a = n(442837),
    u = n(692547),
    c = n(561779),
    d = n(481060),
    m = n(607070),
    v = n(540059),
    E = n(617136),
    p = n(184299),
    C = n(902749),
    f = n(957099),
    S = n(312729),
    g = n(223418),
    x = n(604162),
    h = n(981631),
    _ = n(388032),
    T = n(451680);
let N = '-:--',
    D = {
        [g.rq.PLAYING]: {
            icon: d.PauseIcon,
            label: _.intl.string(_.t.ZcgDJS)
        },
        [g.rq.PAUSED]: {
            icon: d.PlayIcon,
            label: _.intl.string(_.t.RscU7O)
        },
        [g.rq.ENDED]: {
            icon: d.RetryIcon,
            label: _.intl.string(_.t.hsvh0t)
        }
    };
function I(e) {
    let { current: t, duration: n } = e,
        i = null != t ? (0, x.yv)(t) : N,
        l = null != n ? (0, x.yv)(n) : N;
    return (
        (i = i.padStart(l.length, '0')),
        (0, r.jsxs)('div', {
            className: o()(T.durationTimeWrapper, T.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: T.durationTimeDisplay,
                    children: i
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: T.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: T.durationTimeDisplay,
                    children: l
                })
            ]
        })
    );
}
let A = i.forwardRef(function (e, t) {
    let { iconComponent: n, animationTime: i, visible: l, ariaLabel: a, active: c, disabled: m, tooltipLabel: v, tooltipDelayMs: E = 1500, shortcut: p, onClick: C } = e,
        f = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: !0 === m ? void 0 : C,
                className: o()(T.videoControlsBtnCont, { [T.videoControlsBtnContDisabled]: m }),
                'aria-label': a,
                'aria-disabled': m,
                innerRef: t,
                children: (0, r.jsx)(s.animated.div, {
                    className: o()(T.videoControlsBtnCont),
                    style: {
                        opacity: (0, s.to)(
                            [
                                i.to({
                                    range: [0, 1],
                                    output: [0, 1]
                                })
                            ],
                            (e) => ''.concat(l ? e : Math.pow(e, 8))
                        )
                    },
                    children: (0, r.jsx)(n, {
                        color: !0 !== m ? u.Z.colors.WHITE : u.Z.colors.TEXT_MUTED,
                        className: o()(T.controlsBarItem, {
                            [T.controlsBarItemActive]: c,
                            [T.videoControlsBtn]: !m
                        })
                    })
                })
            });
    if (null == v) return f();
    {
        let e = (0, r.jsxs)(r.Fragment, {
            children: [
                v,
                '' !== (null != p ? p : '').trim() &&
                    (0, r.jsx)(d.KeyCombo, {
                        shortcut: null != p ? p : '',
                        className: T.videoControlsBtnTooltipKeyCombo
                    })
            ]
        });
        return (0, r.jsx)(d.Tooltip, {
            text: e,
            'aria-label': v,
            tooltipContentClassName: T.videoControlsBtnTooltip,
            delay: E,
            children: (e) => f(e)
        });
    }
});
function j(e) {
    var t, n;
    let { videoRef: l, quest: x, playerState: N, animSpring: j, visible: b, seekForwardEnabled: R, hideCaptionBtn: L, handlePlaybackBtnClick: O, handleTranscriptBtnClick: k, handleCaptionBtnClick: M, handleFullScreenBtnClick: P, handleSeekBackBtnClick: y, handleSeekForwardBtnClick: q, handleControlBarPendingInteraction: w } = e,
        B = (0, v.Q3)('ListSectionItem'),
        U = (0, p.km)((e) => e.volume),
        F = (0, p.km)((e) => e.setVolume),
        Z = (0, p.km)((e) => e.muted),
        V = (0, p.km)((e) => e.setMuted),
        Y = (0, p.km)((e) => e.transcriptEnabled),
        G = (0, p.km)((e) => e.captionEnabled),
        z = (0, p.km)((e) => e.fullScreenEnabled),
        H = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
        K = (0, a.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [Q, W] = i.useState(Z ? 0 : U),
        [X, J] = i.useState(!1),
        [$, ee] = i.useState(!1),
        [{ volumeAnimSpring: et }, en] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        er = i.useRef(null),
        ei = (0, E._F)(),
        el = i.useCallback(
            (e) => {
                if (null != l.current) e !== l.current.volume && (l.current.volume = e), e !== Q && W(e);
            },
            [l, Q]
        ),
        eo = i.useCallback(
            (e, t) => {
                ei({
                    questId: e,
                    event: h.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                    properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
                });
            },
            [ei]
        ),
        es = i.useCallback(() => {
            if (null != l.current) 0 === Q ? (el(U), V(!1), eo(x.id, U)) : (F(Q), el(0), V(!0), eo(x.id, 0));
        }, [l, Q, el, U, V, eo, x.id, F]),
        ea = () => {
            J(!0);
        },
        eu = () => {
            J(!1);
        },
        ec = i.useCallback(
            (e) => {
                switch (e.key) {
                    case g.Y1.PLAYBACK:
                        O();
                        break;
                    case g.Y1.SPACE:
                        !K && (e.preventDefault(), O());
                        break;
                    case g.Y1.SEEK_BACK:
                        y();
                        break;
                    case g.Y1.SEEK_FORWARD:
                        q();
                        break;
                    case g.Y1.CAPTION:
                        M();
                        break;
                    case g.Y1.FULLSCREEN:
                        P();
                        break;
                    case g.Y1.MUTE:
                        es();
                }
            },
            [M, P, O, y, q, es, K]
        );
    i.useEffect(() => {
        null != er.current && er.current.focus();
    }, []),
        i.useEffect(
            () => (
                en({
                    volumeAnimSpring: $ || X ? 1 : 0,
                    immediate: H
                }),
                () => {
                    et.stop();
                }
            ),
            [$, X, en, H, et]
        ),
        i.useEffect(
            () => (
                window.addEventListener('keydown', ec),
                () => {
                    window.removeEventListener('keydown', ec);
                }
            ),
            [ec]
        );
    let ed = 0 === Q ? d.VoiceXIcon : Q < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        { icon: em, label: ev } = D[N];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: T.videoControlsGroup,
                children: [
                    (0, r.jsx)(A, {
                        iconComponent: em,
                        animationTime: j,
                        visible: b,
                        ariaLabel: ev,
                        tooltipLabel: ev,
                        shortcut: g.Y1.PLAYBACK,
                        onClick: O,
                        ref: er
                    }),
                    (0, r.jsx)(A, {
                        iconComponent: f.d,
                        animationTime: j,
                        visible: b,
                        onClick: y,
                        ariaLabel: _.intl.string(_.t.r9s3Ul),
                        tooltipLabel: _.intl.string(_.t.r9s3Ul),
                        shortcut: g.Y1.SEEK_BACK
                    }),
                    (0, r.jsx)(A, {
                        iconComponent: S.o,
                        animationTime: j,
                        visible: b,
                        onClick: q,
                        disabled: !R,
                        ariaLabel: R ? _.intl.string(_.t.zWDcND) : _.intl.string(_.t.xXh3y8),
                        tooltipLabel: R ? _.intl.string(_.t.zWDcND) : _.intl.string(_.t.xXh3y8),
                        tooltipDelayMs: R ? 1500 : 0,
                        shortcut: g.Y1.SEEK_FORWARD
                    })
                ]
            }),
            (0, r.jsxs)(s.animated.div, {
                className: o()(T.videoControlsGroup, T.videoControlsGroupMid),
                style: {
                    opacity: (0, s.to)(
                        [
                            j.to({
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
                            (0, r.jsx)(A, {
                                iconComponent: ed,
                                animationTime: j,
                                visible: b,
                                onClick: es,
                                ariaLabel: _.intl.string(_.t['eIl+AA']),
                                tooltipLabel: _.intl.string(_.t['eIl+AA']),
                                shortcut: g.Y1.MUTE
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: T.volumeSlider,
                                style: {
                                    opacity: (0, s.to)(
                                        [
                                            et.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(b ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, s.to)(
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
                                    ...(B
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
                                    initialValue: Q,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        el(e), F(e), eo(x.id, e), $ && (ee(!1), w(!1)), Z && e > 0 && V(!1);
                                    },
                                    asValueChanges: (e) => {
                                        el(e), !$ && (ee(!0), w(!0));
                                    },
                                    fillStyles: { backgroundColor: u.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': _.intl.string(_.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(I, {
                        current: null == l ? void 0 : null === (t = l.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == l ? void 0 : null === (n = l.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: o()(T.videoControlsGroup, T.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(A, {
                        iconComponent: d.PaperIcon,
                        animationTime: j,
                        visible: b,
                        onClick: k,
                        active: Y && N !== g.rq.ENDED,
                        disabled: N === g.rq.ENDED,
                        ariaLabel: _.intl.string(_.t.KCzjTk),
                        tooltipLabel: _.intl.string(_.t.KCzjTk)
                    }),
                    !L &&
                        (0, r.jsx)(A, {
                            iconComponent: C.c,
                            animationTime: j,
                            visible: b,
                            active: G,
                            onClick: M,
                            ariaLabel: _.intl.string(_.t.bDSZOz),
                            tooltipLabel: _.intl.string(_.t.bDSZOz),
                            shortcut: g.Y1.CAPTION
                        }),
                    (0, r.jsx)(A, {
                        iconComponent: z ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: j,
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
