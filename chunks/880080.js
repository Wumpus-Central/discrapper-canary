n.d(t, { A: () => S });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(523436),
    o = n(311907),
    u = n(827734),
    c = n(106236),
    d = n(397927),
    m = n(775602),
    p = n(892358),
    f = n(406385),
    E = n(405670),
    h = n(717415),
    v = n(261331),
    x = n(985018),
    g = n(681636);
function S(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: i,
            visible: S,
            seekForwardEnabled: A,
            hideCaptionBtn: C,
            hideTranscriptBtn: _,
            orientation: b,
            size: y,
            handlePlaybackBtnClick: T,
            handleTranscriptBtnClick: N,
            handleCaptionBtnClick: D,
            handleFullScreenBtnClick: R,
            handleSeekBackBtnClick: L,
            handleSeekForwardBtnClick: I,
            handleControlBarPendingInteraction: M,
            onVolumeChange: j,
        } = e,
        { isFullscreenEnabled: w } = l.useContext(h.VideoQuestModalContext),
        k = (0, E.Kr)((e) => e.volume),
        O = (0, E.Kr)((e) => e.setVolume),
        P = (0, E.Kr)((e) => e.muted),
        Q = (0, E.Kr)((e) => e.setMuted),
        V = (0, E.Kr)((e) => e.transcriptEnabled),
        U = (0, E.Kr)((e) => e.captionEnabled),
        B = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        F = (0, o.bG)([m.A], () => m.A.keyboardModeEnabled),
        [G, $] = l.useState(P ? 0 : k),
        [Y, K] = l.useState(!1),
        [H, W] = l.useState(!1),
        [{ volumeAnimSpring: q }, z] = (0, d.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        X = l.useRef(null),
        J = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== G && $(e));
            },
            [t, G],
        ),
        Z = l.useCallback(() => {
            null != t.current &&
                (0 === G ? (Q(!1), 0 === k ? (O(p.$J), J(p.$J), j(p.$J)) : (J(k), j(k))) : (O(G), J(0), Q(!0), j(0)));
        }, [t, G, J, k, Q, O, j]),
        ee = () => {
            K(!0);
        },
        et = () => {
            K(!1);
        },
        en = l.useCallback(
            (e) => {
                switch (e.key) {
                    case v.TJ.PLAYBACK:
                        T();
                        break;
                    case v.TJ.SPACE:
                        F || (e.preventDefault(), T());
                        break;
                    case v.TJ.SEEK_BACK:
                        L();
                        break;
                    case v.TJ.SEEK_FORWARD:
                        I();
                        break;
                    case v.TJ.CAPTION:
                        D();
                        break;
                    case v.TJ.FULLSCREEN:
                        R();
                        break;
                    case v.TJ.MUTE:
                        Z();
                }
            },
            [D, R, T, L, I, Z, F],
        );
    l.useEffect(() => {
        null != X.current && X.current.focus();
    }, []),
        l.useEffect(
            () => (
                z({ volumeAnimSpring: H || Y ? 1 : 0, immediate: B }),
                () => {
                    q.stop();
                }
            ),
            [H, Y, z, B, q],
        ),
        l.useEffect(
            () => (
                window.addEventListener("keydown", en),
                () => {
                    window.removeEventListener("keydown", en);
                }
            ),
            [en],
        );
    let er = 0 === G ? d._RO : G < 0.5 ? d.S24 : d.HKD,
        { icon: el, label: ei } = f.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: g.X3,
                children: [
                    (0, r.jsx)(f.Ey, {
                        iconComponent: el,
                        animationTime: i,
                        visible: S,
                        ariaLabel: ei,
                        tooltipLabel: ei,
                        shortcut: v.TJ.PLAYBACK,
                        onClick: T,
                        ref: X,
                        buttonSize: f.AU[y],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    "portrait" !== b &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(f.Ey, {
                                    iconComponent: p.qN,
                                    animationTime: i,
                                    visible: S,
                                    onClick: L,
                                    ariaLabel: x.intl.string(x.t.r9s3Uv),
                                    tooltipLabel: x.intl.string(x.t.r9s3Uv),
                                    shortcut: v.TJ.SEEK_BACK,
                                    buttonSize: f.AU[y],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(f.Ey, {
                                    iconComponent: p.i7,
                                    animationTime: i,
                                    visible: S,
                                    onClick: I,
                                    disabled: !A,
                                    ariaLabel: A ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                                    tooltipLabel: A ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                                    tooltipDelayMs: A ? f.do : 0,
                                    shortcut: v.TJ.SEEK_FORWARD,
                                    buttonSize: f.AU[y],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(a.animated.div, {
                className: s()(g.X3, g.L1),
                style: {
                    opacity: (0, a.to)([i.to({ range: [0, 1], output: [0, 1] })], (e) => `${S ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: ee,
                        onMouseLeave: et,
                        onFocus: ee,
                        onBlur: et,
                        className: g.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(f.Ey, {
                                iconComponent: er,
                                animationTime: i,
                                visible: S,
                                onClick: Z,
                                ariaLabel: x.intl.string(x.t["eIl+AK"]),
                                tooltipLabel: x.intl.string(x.t["eIl+AK"]),
                                shortcut: v.TJ.MUTE,
                                buttonSize: f.AU[y],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: g.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, a.to)(
                                        [q.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${S ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, a.to)([q.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(c.A, {
                                    mini: !0,
                                    value: G,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        J(e),
                                            O(e),
                                            j(e),
                                            H && (W(!1), M(!1)),
                                            P && e > 0 ? Q(!1) : P || 0 !== e || Q(!0);
                                    },
                                    asValueChanges: (e) => {
                                        J(e), H || (W(!0), M(!0));
                                    },
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": x.intl.string(x.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.QF, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s()(g.X3, g.ST),
                children: [
                    !_ &&
                        (0, r.jsx)(f.Ey, {
                            iconComponent: d.ueQ,
                            animationTime: i,
                            visible: S,
                            onClick: N,
                            active: V && n !== v.Q6.ENDED,
                            disabled: n === v.Q6.ENDED,
                            ariaLabel: x.intl.string(x.t.KCzjTi),
                            tooltipLabel: x.intl.string(x.t.KCzjTi),
                            buttonSize: f.AU[y],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !C &&
                        (0, r.jsx)(f.Ey, {
                            iconComponent: p.IT,
                            animationTime: i,
                            visible: S,
                            active: U,
                            onClick: D,
                            ariaLabel: x.intl.string(x.t.bDSZO1),
                            tooltipLabel: x.intl.string(x.t.bDSZO1),
                            shortcut: v.TJ.CAPTION,
                            buttonSize: f.AU[y],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    (0, r.jsx)(f.Ey, {
                        iconComponent: w ? d.z7w : d.TM1,
                        animationTime: i,
                        visible: S,
                        onClick: R,
                        ariaLabel: x.intl.string(x.t.vKZT5t),
                        tooltipLabel: x.intl.string(x.t.vKZT5t),
                        shortcut: v.TJ.FULLSCREEN,
                        buttonSize: f.AU[y],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
