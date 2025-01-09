n.d(t, {
    Z: function () {
        return A;
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
    C = n(957099),
    f = n(312729),
    S = n(223418),
    g = n(604162),
    x = n(981631),
    h = n(388032),
    _ = n(451680);
let T = '-:--',
    N = {
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
    };
function D(e) {
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
let I = i.forwardRef(function (e, t) {
    let { iconComponent: n, animationTime: i, visible: l, ariaLabel: a, active: c, disabled: m, tooltipLabel: v, tooltipDelayMs: E = 1500, shortcut: p, onClick: C } = e,
        f = (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                onClick: !0 === m ? void 0 : C,
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
    if (null == v) return f();
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
            children: (e) => f(e)
        });
    }
});
function A(e) {
    var t, n;
    let { videoRef: l, quest: g, playerState: T, animSpring: A, visible: j, seekForwardEnabled: b, hideCaptionBtn: R, handlePlaybackBtnClick: L, handleTranscriptBtnClick: O, handleCaptionBtnClick: k, handleFullScreenBtnClick: M, handleSeekBackBtnClick: P, handleSeekForwardBtnClick: y, handleControlBarPendingInteraction: q } = e,
        w = (0, E.km)((e) => e.volume),
        B = (0, E.km)((e) => e.setVolume),
        U = (0, E.km)((e) => e.muted),
        F = (0, E.km)((e) => e.setMuted),
        Z = (0, E.km)((e) => e.transcriptEnabled),
        V = (0, E.km)((e) => e.captionEnabled),
        Y = (0, E.km)((e) => e.fullScreenEnabled),
        G = (0, a.e7)([m.Z], () => m.Z.useReducedMotion),
        z = (0, a.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [H, K] = i.useState(U ? 0 : w),
        [Q, W] = i.useState(!1),
        [X, J] = i.useState(!1),
        [{ volumeAnimSpring: $ }, ee] = (0, d.useSpring)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0
            }
        })),
        et = i.useRef(null),
        en = (0, v._F)(),
        er = i.useCallback(
            (e) => {
                if (null != l.current) e !== l.current.volume && (l.current.volume = e), e !== H && K(e);
            },
            [l, H]
        ),
        ei = i.useCallback(
            (e, t) => {
                en({
                    questId: e,
                    event: x.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                    properties: { volume_threshold: t > 0 && t < 1 ? 0.5 : t }
                });
            },
            [en]
        ),
        el = i.useCallback(() => {
            if (null != l.current) 0 === H ? (er(w), F(!1), ei(g.id, w)) : (B(H), er(0), F(!0), ei(g.id, 0));
        }, [l, H, er, w, F, ei, g.id, B]),
        eo = () => {
            W(!0);
        },
        es = () => {
            W(!1);
        },
        ea = i.useCallback(
            (e) => {
                switch (e.key) {
                    case S.Y1.PLAYBACK:
                        L();
                        break;
                    case S.Y1.SPACE:
                        !z && (e.preventDefault(), L());
                        break;
                    case S.Y1.SEEK_BACK:
                        P();
                        break;
                    case S.Y1.SEEK_FORWARD:
                        y();
                        break;
                    case S.Y1.CAPTION:
                        k();
                        break;
                    case S.Y1.FULLSCREEN:
                        M();
                        break;
                    case S.Y1.MUTE:
                        el();
                }
            },
            [k, M, L, P, y, el, z]
        );
    i.useEffect(() => {
        null != et.current && et.current.focus();
    }, []),
        i.useEffect(
            () => (
                ee({
                    volumeAnimSpring: X || Q ? 1 : 0,
                    immediate: G
                }),
                () => {
                    $.stop();
                }
            ),
            [X, Q, ee, G, $]
        ),
        i.useEffect(
            () => (
                window.addEventListener('keydown', ea),
                () => {
                    window.removeEventListener('keydown', ea);
                }
            ),
            [ea]
        );
    let eu = 0 === H ? d.VoiceXIcon : H < 0.5 ? d.VoiceLowIcon : d.VoiceNormalIcon,
        { icon: ec, label: ed } = N[T];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: _.videoControlsGroup,
                children: [
                    (0, r.jsx)(I, {
                        iconComponent: ec,
                        animationTime: A,
                        visible: j,
                        ariaLabel: ed,
                        tooltipLabel: ed,
                        shortcut: S.Y1.PLAYBACK,
                        onClick: L,
                        ref: et
                    }),
                    (0, r.jsx)(I, {
                        iconComponent: C.d,
                        animationTime: A,
                        visible: j,
                        onClick: P,
                        ariaLabel: h.intl.string(h.t.r9s3Ul),
                        tooltipLabel: h.intl.string(h.t.r9s3Ul),
                        shortcut: S.Y1.SEEK_BACK
                    }),
                    (0, r.jsx)(I, {
                        iconComponent: f.o,
                        animationTime: A,
                        visible: j,
                        onClick: y,
                        disabled: !b,
                        ariaLabel: b ? h.intl.string(h.t.zWDcND) : h.intl.string(h.t.xXh3y8),
                        tooltipLabel: b ? h.intl.string(h.t.zWDcND) : h.intl.string(h.t.xXh3y8),
                        tooltipDelayMs: b ? 1500 : 0,
                        shortcut: S.Y1.SEEK_FORWARD
                    })
                ]
            }),
            (0, r.jsxs)(s.animated.div, {
                className: o()(_.videoControlsGroup, _.videoControlsGroupMid),
                style: {
                    opacity: (0, s.to)(
                        [
                            A.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        ],
                        (e) => ''.concat(j ? e : Math.pow(e, 8))
                    )
                },
                children: [
                    (0, r.jsxs)('div', {
                        onMouseEnter: eo,
                        onMouseLeave: es,
                        onFocus: eo,
                        onBlur: es,
                        className: _.volumeControlGroup,
                        children: [
                            (0, r.jsx)(I, {
                                iconComponent: eu,
                                animationTime: A,
                                visible: j,
                                onClick: el,
                                ariaLabel: h.intl.string(h.t['eIl+AA']),
                                tooltipLabel: h.intl.string(h.t['eIl+AA']),
                                shortcut: S.Y1.MUTE
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: _.volumeSlider,
                                style: {
                                    opacity: (0, s.to)(
                                        [
                                            $.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        ],
                                        (e) => ''.concat(j ? e : Math.pow(e, 8))
                                    ),
                                    width: (0, s.to)(
                                        [
                                            $.to({
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
                                    initialValue: H,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        er(e), B(e), ei(g.id, e), X && (J(!1), q(!1)), U && e > 0 && F(!1);
                                    },
                                    asValueChanges: (e) => {
                                        er(e), !X && (J(!0), q(!0));
                                    },
                                    fillStyles: { backgroundColor: u.Z.colors.WHITE.css },
                                    orientation: 'horizontal',
                                    'aria-label': h.intl.string(h.t['eIl+AA'])
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(D, {
                        current: null == l ? void 0 : null === (t = l.current) || void 0 === t ? void 0 : t.currentTime,
                        duration: null == l ? void 0 : null === (n = l.current) || void 0 === n ? void 0 : n.duration
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: o()(_.videoControlsGroup, _.videoControlsGroupEnd),
                children: [
                    (0, r.jsx)(I, {
                        iconComponent: d.PaperIcon,
                        animationTime: A,
                        visible: j,
                        onClick: O,
                        active: Z && T !== S.rq.ENDED,
                        disabled: T === S.rq.ENDED,
                        ariaLabel: h.intl.string(h.t.KCzjTk),
                        tooltipLabel: h.intl.string(h.t.KCzjTk)
                    }),
                    !R &&
                        (0, r.jsx)(I, {
                            iconComponent: p.c,
                            animationTime: A,
                            visible: j,
                            active: V,
                            onClick: k,
                            ariaLabel: h.intl.string(h.t.bDSZOz),
                            tooltipLabel: h.intl.string(h.t.bDSZOz),
                            shortcut: S.Y1.CAPTION
                        }),
                    (0, r.jsx)(I, {
                        iconComponent: Y ? d.FullscreenExitIcon : d.FullscreenEnterIcon,
                        animationTime: A,
                        visible: j,
                        onClick: M,
                        ariaLabel: h.intl.string(h.t.vKZT5u),
                        tooltipLabel: h.intl.string(h.t.vKZT5u),
                        shortcut: S.Y1.FULLSCREEN
                    })
                ]
            })
        ]
    });
}
