n.d(t, { A: () => S });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(522160),
    o = n(311907),
    u = n(827734),
    c = n(106236),
    d = n(397927),
    m = n(775602),
    p = n(892358),
    E = n(406385),
    f = n(405670),
    v = n(261331),
    h = n(985018),
    g = n(681636);
function S(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: i,
            visible: S,
            seekForwardEnabled: C,
            hideCaptionBtn: A,
            hideTranscriptBtn: x,
            orientation: _,
            size: b,
            handlePlaybackBtnClick: T,
            handleTranscriptBtnClick: y,
            handleCaptionBtnClick: N,
            handleFullScreenBtnClick: D,
            handleSeekBackBtnClick: L,
            handleSeekForwardBtnClick: I,
            handleControlBarPendingInteraction: j,
            onVolumeChange: R,
        } = e,
        k = (0, f.Kr)((e) => e.volume),
        w = (0, f.Kr)((e) => e.setVolume),
        M = (0, f.Kr)((e) => e.muted),
        O = (0, f.Kr)((e) => e.setMuted),
        P = (0, f.Kr)((e) => e.transcriptEnabled),
        V = (0, f.Kr)((e) => e.captionEnabled),
        Q = (0, f.Kr)((e) => e.fullScreenEnabled),
        U = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        B = (0, o.bG)([m.A], () => m.A.keyboardModeEnabled),
        [F, G] = l.useState(M ? 0 : k),
        [$, Y] = l.useState(!1),
        [K, H] = l.useState(!1),
        [{ volumeAnimSpring: z }, W] = (0, d.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        q = l.useRef(null),
        X = l.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== F && G(e));
            },
            [t, F],
        ),
        J = l.useCallback(() => {
            null != t.current && (0 === F ? (X(k), O(!1), R(k)) : (w(F), X(0), O(!0), R(0)));
        }, [t, F, X, k, O, w, R]),
        Z = () => {
            Y(!0);
        },
        ee = () => {
            Y(!1);
        },
        et = l.useCallback(
            (e) => {
                switch (e.key) {
                    case v.TJ.PLAYBACK:
                        T();
                        break;
                    case v.TJ.SPACE:
                        B || (e.preventDefault(), T());
                        break;
                    case v.TJ.SEEK_BACK:
                        L();
                        break;
                    case v.TJ.SEEK_FORWARD:
                        I();
                        break;
                    case v.TJ.CAPTION:
                        N();
                        break;
                    case v.TJ.FULLSCREEN:
                        D();
                        break;
                    case v.TJ.MUTE:
                        J();
                }
            },
            [N, D, T, L, I, J, B],
        );
    l.useEffect(() => {
        null != q.current && q.current.focus();
    }, []),
        l.useEffect(
            () => (
                W({ volumeAnimSpring: K || $ ? 1 : 0, immediate: U }),
                () => {
                    z.stop();
                }
            ),
            [K, $, W, U, z],
        ),
        l.useEffect(
            () => (
                window.addEventListener("keydown", et),
                () => {
                    window.removeEventListener("keydown", et);
                }
            ),
            [et],
        );
    let en = 0 === F ? d._RO : F < 0.5 ? d.S24 : d.HKD,
        { icon: er, label: el } = E.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: g.X3,
                children: [
                    (0, r.jsx)(E.Ey, {
                        iconComponent: er,
                        animationTime: i,
                        visible: S,
                        ariaLabel: el,
                        tooltipLabel: el,
                        shortcut: v.TJ.PLAYBACK,
                        onClick: T,
                        ref: q,
                        buttonSize: E.AU[b],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    "portrait" !== _ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(E.Ey, {
                                    iconComponent: p.qN,
                                    animationTime: i,
                                    visible: S,
                                    onClick: L,
                                    ariaLabel: h.intl.string(h.t.r9s3Uv),
                                    tooltipLabel: h.intl.string(h.t.r9s3Uv),
                                    shortcut: v.TJ.SEEK_BACK,
                                    buttonSize: E.AU[b],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(E.Ey, {
                                    iconComponent: p.i7,
                                    animationTime: i,
                                    visible: S,
                                    onClick: I,
                                    disabled: !C,
                                    ariaLabel: C ? h.intl.string(h.t.zWDcNP) : h.intl.string(h.t.xXh3yw),
                                    tooltipLabel: C ? h.intl.string(h.t.zWDcNP) : h.intl.string(h.t.xXh3yw),
                                    tooltipDelayMs: C ? E.do : 0,
                                    shortcut: v.TJ.SEEK_FORWARD,
                                    buttonSize: E.AU[b],
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
                        onMouseEnter: Z,
                        onMouseLeave: ee,
                        onFocus: Z,
                        onBlur: ee,
                        className: g.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(E.Ey, {
                                iconComponent: en,
                                animationTime: i,
                                visible: S,
                                onClick: J,
                                ariaLabel: h.intl.string(h.t["eIl+AK"]),
                                tooltipLabel: h.intl.string(h.t["eIl+AK"]),
                                shortcut: v.TJ.MUTE,
                                buttonSize: E.AU[b],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: g.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, a.to)(
                                        [z.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${S ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, a.to)([z.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(c.A, {
                                    mini: !0,
                                    initialValue: F,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        X(e), w(e), R(e), K && (H(!1), j(!1)), M && e > 0 && O(!1);
                                    },
                                    asValueChanges: (e) => {
                                        X(e), K || (H(!0), j(!0));
                                    },
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": h.intl.string(h.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(E.QF, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s()(g.X3, g.ST),
                children: [
                    !x &&
                        (0, r.jsx)(E.Ey, {
                            iconComponent: d.ueQ,
                            animationTime: i,
                            visible: S,
                            onClick: y,
                            active: P && n !== v.Q6.ENDED,
                            disabled: n === v.Q6.ENDED,
                            ariaLabel: h.intl.string(h.t.KCzjTi),
                            tooltipLabel: h.intl.string(h.t.KCzjTi),
                            buttonSize: E.AU[b],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !A &&
                        (0, r.jsx)(E.Ey, {
                            iconComponent: p.IT,
                            animationTime: i,
                            visible: S,
                            active: V,
                            onClick: N,
                            ariaLabel: h.intl.string(h.t.bDSZO1),
                            tooltipLabel: h.intl.string(h.t.bDSZO1),
                            shortcut: v.TJ.CAPTION,
                            buttonSize: E.AU[b],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    (0, r.jsx)(E.Ey, {
                        iconComponent: Q ? d.z7w : d.TM1,
                        animationTime: i,
                        visible: S,
                        onClick: D,
                        ariaLabel: h.intl.string(h.t.vKZT5t),
                        tooltipLabel: h.intl.string(h.t.vKZT5t),
                        shortcut: v.TJ.FULLSCREEN,
                        buttonSize: E.AU[b],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
