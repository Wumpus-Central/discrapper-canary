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
    s = n(666912),
    a = n(442837),
    u = n(692547),
    c = n(561779),
    d = n(481060),
    m = n(607070),
    v = n(617136),
    E = n(184299),
    p = n(902749),
    f = n(957099),
    C = n(312729),
    S = n(223418),
    g = n(604162),
    x = n(981631),
    h = n(388032),
    _ = n(451680);
let T = '-:--',
    D = {
        [S.rq.PLAYING]: {
            icon: d.PauseIcon,
            label: h.intl.string(h.t.ZcgDJS)
        },
        [S.rq.PAUSED]: {
            icon: d.PlayIcon,
            label: h.intl.string(h.t.RscU7O)
        },
        [S.rq.ENDED]: {
            icon: d.RetryIcon,
            label: h.intl.string(h.t.hsvh0t)
        }
    },
    N = (e, t) => {
        (0, v.dA)({
            questId: e,
            event: x.rMx.QUEST_VIDEO_VOLUME_CHANGED,
            properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
        });
    };
function I(e) {
    let { current: t, duration: n } = e,
        i = null != t ? (0, g.yv)(t) : T,
        l = null != n ? (0, g.yv)(n) : T;
    return (
        (i = i.padStart(l.length, '0')),
        (0, r.jsxs)('div', {
            className: o()(_.durationTimeWrapper, _.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: _.durationTimeDisplay,
                    children: i
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: _.durationTimeSeparator,
                    children: '/'
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: _.durationTimeDisplay,
                    children: l
                })
            ]
        })
    );
}
let A = i.forwardRef(function (e, t) {
    let { iconComponent: n, animationTime: i, visible: l, ariaLabel: a, active: c, disabled: m, tooltipLabel: v, tooltipDelayMs: E = 1500, shortcut: p, onClick: f } = e,
        C = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: !0 === m ? void 0 : f,
                className: o()(_.videoControlsBtnCont, { [_.videoControlsBtnContDisabled]: m }),
                'aria-label': a,
                'aria-disabled': m,
                innerRef: t,
                children: (0, r.jsx)(s.animated.div, {
                    className: o()(_.videoControlsBtnCont),
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
                        className: o()(_.controlsBarItem, {
                            [_.controlsBarItemActive]: c,
                            [_.videoControlsBtn]: !m
                        })
                    })
                })
            });
    if (null == v) return C();
    {
        let e = (0, r.jsxs)(r.Fragment, {
            children: [
                v,
                '' !== (null != p ? p : '').trim() &&
                    (0, r.jsx)(d.KeyCombo, {
                        shortcut: null != p ? p : '',
                        className: _.videoControlsBtnTooltipKeyCombo
                    })
            ]
        });
        return (0, r.jsx)(d.Tooltip, {
            text: e,
            'aria-label': v,
            tooltipContentClassName: _.videoControlsBtnTooltip,
            delay: E,
            children: (e) => C(e)
        });
    }
});
function j(e) {
    var t, n;
    let { videoRef: l, quest: v, playerState: g, animSpring: x, visible: T, seekForwardEnabled: j, hideCaptionBtn: b, handlePlaybackBtnClick: L, handleTranscriptBtnClick: R, handleCaptionBtnClick: O, handleFullScreenBtnClick: k, handleSeekBackBtnClick: M, handleSeekForwardBtnClick: P, handleControlBarPendingInteraction: y } = e,
        q = (0, E.km)((e) => e.volume),
        w = (0, E.km)((e) => e.setVolume),
        B = (0, E.km)((e) => e.muted),
        U = (0, E.km)((e) => e.setMuted),
        F = (0, E.km)((e) => e.transcriptEnabled),
        Z = (0, E.km)((e) => e.captionEnabled),
        V = (0, E.km)((e) => e.fullScreenEnabled),
        Y = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
        G = (0, a.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [z, H] = i.useState(B ? 0 : q),
        [K, Q] = i.useState(!1),
        [W, X] = i.useState(!1),
        [{ volumeAnimSpring: J }, $] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        ee = i.useRef(null),
        et = i.useCallback(
            (e) => {
                if (null != l.current) e !== l.current.volume && (l.current.volume = e), e !== z && H(e);
            },
            [l, z]
        ),
        en = i.useCallback(() => {
            if (null != l.current) 0 === z ? (et(q), U(!1), N(v.id, q)) : (w(z), et(0), U(!0), N(v.id, 0));
        }, [l, z, q, U, w, et, v.id]),
        er = () => {
            Q(!0);
        },
        ei = () => {
            Q(!1);
        },
        el = i.useCallback(
            (e) => {
                switch (e.key) {
                    case S.Y1.PLAYBACK:
                        L();
                        break;
                    case S.Y1.SPACE:
                        !G && (e.preventDefault(), L());
                        break;
                    case S.Y1.SEEK_BACK:
                        M();
                        break;
                    case S.Y1.SEEK_FORWARD:
                        P();
                        break;
                    case S.Y1.CAPTION:
                        O();
                        break;
                    case S.Y1.FULLSCREEN:
                        k();
                        break;
                    case S.Y1.MUTE:
                        en();
                }
            },
            [O, k, L, M, P, en, G]
        );
    i.useEffect(() => {
        null != ee.current && ee.current.focus();
    }, []),
        i.useEffect(
            () => (
                $({
                    volumeAnimSpring: W || K ? 1 : 0,
                    immediate: Y
                }),
                () => {
                    J.stop();
                }
            ),
            [W, K, $, Y, J]
        ),
        i.useEffect(
            () => (
                window.addEventListener('keydown', el),
                () => {
                    window.removeEventListener('keydown', el);
                }
            ),
            [el]
        );
    let eo = 0 === z ? d.VoiceXIcon : z < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        { icon: es, label: ea } = D[g];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: _.videoControlsGroup,
                children: [
                    (0, r.jsx)(A, {
                        iconComponent: es,
                        animationTime: x,
                        visible: T,
                        ariaLabel: ea,
                        tooltipLabel: ea,
                        shortcut: S.Y1.PLAYBACK,
                        onClick: L,
                        ref: ee
                    }),
                    (0, r.jsx)(A, {
                        iconComponent: f.d,
                        animationTime: x,
                        visible: T,
                        onClick: M,
                        ariaLabel: h.intl.string(h.t.r9s3Ul),
                        tooltipLabel: h.intl.string(h.t.r9s3Ul),
                        shortcut: S.Y1.SEEK_BACK
                    }),
                    (0, r.jsx)(A, {
                        iconComponent: C.o,
                        animationTime: x,
                        visible: T,
                        onClick: P,
                        disabled: !j,
                        ariaLabel: j ? h.intl.string(h.t.zWDcND) : h.intl.string(h.t.xXh3y8),
                        tooltipLabel: j ? h.intl.string(h.t.zWDcND) : h.intl.string(h.t.xXh3y8),
                        tooltipDelayMs: j ? 1500 : 0,
                        shortcut: S.Y1.SEEK_FORWARD
                    })
                ]
            }),
            (0, r.jsxs)(s.animated.div, {
                className: o()(_.videoControlsGroup, _.videoControlsGroupMid),
                style: {
                    opacity: (0, s.to)(
                        [
                            x.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(T ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: er,
                        onMouseLeave: ei,
                        onFocus: er,
                        onBlur: ei,
                        className: _.volumeControlGroup,
                        children: [
                            (0, r.jsx)(A, {
                                iconComponent: eo,
                                animationTime: x,
                                visible: T,
                                onClick: en,
                                ariaLabel: h.intl.string(h.t['eIl+AA']),
                                tooltipLabel: h.intl.string(h.t['eIl+AA']),
                                shortcut: S.Y1.MUTE
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: _.volumeSlider,
                                style: {
                                    opacity: (0, s.to)(
                                        [
                                            J.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(T ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, s.to)(
                                        [
                                            J.to({
                                                range: [0, 1],
                                                output: [0, 100]
                                            })
                                        ],
                                        (e) => ''.concat(e, 'px')
                                    )
                                },
                                children: (0, r.jsx)(c.i, {
                                    mini: !0,
                                    barStyles: {
                                        height: '5px',
                                        top: '10px'
                                    },
                                    grabberStyles: {
                                        marginTop: '-5px',
                                        backgroundColor: u.Z.colors.WHITE.css,
                                        cursor: 'pointer'
                                    },
                                    initialValue: z,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        et(e), w(e), N(v.id, e), W && (X(!1), y(!1)), B && e > 0 && U(!1);
                                    },
                                    asValueChanges: (e) => {
                                        et(e), !W && (X(!0), y(!0));
                                    },
                                    fillStyles: { backgroundColor: u.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': h.intl.string(h.t['eIl+AA'])
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
                className: o()(_.videoControlsGroup, _.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(A, {
                        iconComponent: d.PaperIcon,
                        animationTime: x,
                        visible: T,
                        onClick: R,
                        active: F && g !== S.rq.ENDED,
                        disabled: g === S.rq.ENDED,
                        ariaLabel: h.intl.string(h.t.KCzjTk),
                        tooltipLabel: h.intl.string(h.t.KCzjTk)
                    }),
                    !b &&
                        (0, r.jsx)(A, {
                            iconComponent: p.c,
                            animationTime: x,
                            visible: T,
                            active: Z,
                            onClick: O,
                            ariaLabel: h.intl.string(h.t.bDSZOz),
                            tooltipLabel: h.intl.string(h.t.bDSZOz),
                            shortcut: S.Y1.CAPTION
                        }),
                    (0, r.jsx)(A, {
                        iconComponent: V ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: x,
                        visible: T,
                        onClick: k,
                        ariaLabel: h.intl.string(h.t.vKZT5u),
                        tooltipLabel: h.intl.string(h.t.vKZT5u),
                        shortcut: S.Y1.FULLSCREEN
                    })
                ]
            })
        ]
    });
}
