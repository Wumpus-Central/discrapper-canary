n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(475539),
    o = n(311907),
    u = n(827734),
    c = n(106236),
    d = n(397927),
    m = n(775602),
    p = n(892358),
    E = n(406385),
    f = n(405670),
    v = n(717415),
    h = n(261331),
    x = n(985018),
    g = n(681636);
function S(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: s,
            visible: S,
            seekForwardEnabled: C,
            hideCaptionBtn: A,
            hideTranscriptBtn: _,
            orientation: b,
            size: T,
            handlePlaybackBtnClick: y,
            handleTranscriptBtnClick: N,
            handleCaptionBtnClick: D,
            handleFullScreenBtnClick: L,
            handleSeekBackBtnClick: j,
            handleSeekForwardBtnClick: I,
            handleControlBarPendingInteraction: M,
            onVolumeChange: k,
        } = e,
        { isFullscreenEnabled: R } = i.useContext(v.VideoQuestModalContext),
        w = (0, f.Kr)((e) => e.volume),
        O = (0, f.Kr)((e) => e.setVolume),
        P = (0, f.Kr)((e) => e.muted),
        V = (0, f.Kr)((e) => e.setMuted),
        Q = (0, f.Kr)((e) => e.transcriptEnabled),
        U = (0, f.Kr)((e) => e.captionEnabled),
        B = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        F = (0, o.bG)([m.A], () => m.A.keyboardModeEnabled),
        [G, $] = i.useState(P ? 0 : w),
        [K, Y] = i.useState(!1),
        [H, z] = i.useState(!1),
        [{ volumeAnimSpring: W }, q] = (0, d.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        X = i.useRef(null),
        J = i.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== G && $(e));
            },
            [t, G],
        ),
        Z = i.useCallback(() => {
            null != t.current && (0 === G ? (J(w), V(!1), k(w)) : (O(G), J(0), V(!0), k(0)));
        }, [t, G, J, w, V, O, k]),
        ee = () => {
            Y(!0);
        },
        et = () => {
            Y(!1);
        },
        en = i.useCallback(
            (e) => {
                switch (e.key) {
                    case h.TJ.PLAYBACK:
                        y();
                        break;
                    case h.TJ.SPACE:
                        F || (e.preventDefault(), y());
                        break;
                    case h.TJ.SEEK_BACK:
                        j();
                        break;
                    case h.TJ.SEEK_FORWARD:
                        I();
                        break;
                    case h.TJ.CAPTION:
                        D();
                        break;
                    case h.TJ.FULLSCREEN:
                        L();
                        break;
                    case h.TJ.MUTE:
                        Z();
                }
            },
            [D, L, y, j, I, Z, F],
        );
    i.useEffect(() => {
        null != X.current && X.current.focus();
    }, []),
        i.useEffect(
            () => (
                q({ volumeAnimSpring: H || K ? 1 : 0, immediate: B }),
                () => {
                    W.stop();
                }
            ),
            [H, K, q, B, W],
        ),
        i.useEffect(
            () => (
                window.addEventListener("keydown", en),
                () => {
                    window.removeEventListener("keydown", en);
                }
            ),
            [en],
        );
    let er = 0 === G ? d._RO : G < 0.5 ? d.S24 : d.HKD,
        { icon: ei, label: es } = E.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: g.X3,
                children: [
                    (0, r.jsx)(E.Ey, {
                        iconComponent: ei,
                        animationTime: s,
                        visible: S,
                        ariaLabel: es,
                        tooltipLabel: es,
                        shortcut: h.TJ.PLAYBACK,
                        onClick: y,
                        ref: X,
                        buttonSize: E.AU[T],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    "portrait" !== b &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(E.Ey, {
                                    iconComponent: p.qN,
                                    animationTime: s,
                                    visible: S,
                                    onClick: j,
                                    ariaLabel: x.intl.string(x.t.r9s3Uv),
                                    tooltipLabel: x.intl.string(x.t.r9s3Uv),
                                    shortcut: h.TJ.SEEK_BACK,
                                    buttonSize: E.AU[T],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(E.Ey, {
                                    iconComponent: p.i7,
                                    animationTime: s,
                                    visible: S,
                                    onClick: I,
                                    disabled: !C,
                                    ariaLabel: C ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                                    tooltipLabel: C ? x.intl.string(x.t.zWDcNP) : x.intl.string(x.t.xXh3yw),
                                    tooltipDelayMs: C ? E.do : 0,
                                    shortcut: h.TJ.SEEK_FORWARD,
                                    buttonSize: E.AU[T],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(a.animated.div, {
                className: l()(g.X3, g.L1),
                style: {
                    opacity: (0, a.to)([s.to({ range: [0, 1], output: [0, 1] })], (e) => `${S ? e : Math.pow(e, 8)}`),
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
                            (0, r.jsx)(E.Ey, {
                                iconComponent: er,
                                animationTime: s,
                                visible: S,
                                onClick: Z,
                                ariaLabel: x.intl.string(x.t["eIl+AK"]),
                                tooltipLabel: x.intl.string(x.t["eIl+AK"]),
                                shortcut: h.TJ.MUTE,
                                buttonSize: E.AU[T],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: g.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, a.to)(
                                        [W.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${S ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, a.to)([W.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(c.A, {
                                    mini: !0,
                                    initialValue: G,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        J(e), O(e), k(e), H && (z(!1), M(!1)), P && e > 0 && V(!1);
                                    },
                                    asValueChanges: (e) => {
                                        J(e), H || (z(!0), M(!0));
                                    },
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": x.intl.string(x.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(E.QF, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: l()(g.X3, g.ST),
                children: [
                    !_ &&
                        (0, r.jsx)(E.Ey, {
                            iconComponent: d.ueQ,
                            animationTime: s,
                            visible: S,
                            onClick: N,
                            active: Q && n !== h.Q6.ENDED,
                            disabled: n === h.Q6.ENDED,
                            ariaLabel: x.intl.string(x.t.KCzjTi),
                            tooltipLabel: x.intl.string(x.t.KCzjTi),
                            buttonSize: E.AU[T],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !A &&
                        (0, r.jsx)(E.Ey, {
                            iconComponent: p.IT,
                            animationTime: s,
                            visible: S,
                            active: U,
                            onClick: D,
                            ariaLabel: x.intl.string(x.t.bDSZO1),
                            tooltipLabel: x.intl.string(x.t.bDSZO1),
                            shortcut: h.TJ.CAPTION,
                            buttonSize: E.AU[T],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    (0, r.jsx)(E.Ey, {
                        iconComponent: R ? d.z7w : d.TM1,
                        animationTime: s,
                        visible: S,
                        onClick: L,
                        ariaLabel: x.intl.string(x.t.vKZT5t),
                        tooltipLabel: x.intl.string(x.t.vKZT5t),
                        shortcut: h.TJ.FULLSCREEN,
                        buttonSize: E.AU[T],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
