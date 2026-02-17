"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(311907),
    u = n(827734),
    c = n(106236),
    d = n(397927),
    _ = n(775602),
    f = n(892358),
    h = n(406385),
    p = n(405670),
    g = n(261331),
    E = n(985018),
    A = n(681636);
function I(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: I,
            seekForwardEnabled: T,
            hideCaptionBtn: y,
            hideTranscriptBtn: S,
            orientation: v,
            size: C,
            handlePlaybackBtnClick: b,
            handleTranscriptBtnClick: N,
            handleCaptionBtnClick: R,
            handleFullScreenBtnClick: O,
            handleSeekBackBtnClick: D,
            handleSeekForwardBtnClick: L,
            handleControlBarPendingInteraction: w,
            onVolumeChange: x,
        } = e,
        P = (0, p.Kr)((e) => e.volume),
        M = (0, p.Kr)((e) => e.setVolume),
        k = (0, p.Kr)((e) => e.muted),
        U = (0, p.Kr)((e) => e.setMuted),
        G = (0, p.Kr)((e) => e.transcriptEnabled),
        F = (0, p.Kr)((e) => e.captionEnabled),
        V = (0, p.Kr)((e) => e.fullScreenEnabled),
        B = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        j = (0, l.bG)([_.A], () => _.A.keyboardModeEnabled),
        [H, Y] = i.useState(k ? 0 : P),
        [W, K] = i.useState(!1),
        [$, z] = i.useState(!1),
        [{ volumeAnimSpring: q }, X] = (0, d.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        Z = i.useRef(null),
        Q = "portrait" === v,
        J = i.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== H && Y(e));
            },
            [t, H],
        ),
        ee = (e) => {
            J(e), $ || (z(!0), w(!0));
        },
        et = (e) => {
            J(e), M(e), x(e), $ && (z(!1), w(!1)), k && e > 0 && U(!1);
        },
        en = i.useCallback(() => {
            null != t.current && (0 === H ? (J(P), U(!1), x(P)) : (M(H), J(0), U(!0), x(0)));
        }, [t, H, J, P, U, M, x]),
        er = () => {
            K(!0);
        },
        ei = () => {
            K(!1);
        },
        ea = i.useCallback(
            (e) => {
                switch (e.key) {
                    case g.TJ.PLAYBACK:
                        b();
                        break;
                    case g.TJ.SPACE:
                        j || (e.preventDefault(), b());
                        break;
                    case g.TJ.SEEK_BACK:
                        D();
                        break;
                    case g.TJ.SEEK_FORWARD:
                        L();
                        break;
                    case g.TJ.CAPTION:
                        R();
                        break;
                    case g.TJ.FULLSCREEN:
                        O();
                        break;
                    case g.TJ.MUTE:
                        en();
                }
            },
            [R, O, b, D, L, en, j],
        );
    i.useEffect(() => {
        null != Z.current && Z.current.focus();
    }, []),
        i.useEffect(
            () => (
                X({ volumeAnimSpring: $ || W ? 1 : 0, immediate: B }),
                () => {
                    q.stop();
                }
            ),
            [$, W, X, B, q],
        ),
        i.useEffect(
            () => (
                window.addEventListener("keydown", ea),
                () => {
                    window.removeEventListener("keydown", ea);
                }
            ),
            [ea],
        );
    let es = 0 === H ? d._RO : H < 0.5 ? d.S24 : d.HKD,
        { icon: eo, label: el } = h.eC[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: A.X3,
                children: [
                    (0, r.jsx)(h.Ey, {
                        iconComponent: eo,
                        animationTime: a,
                        visible: I,
                        ariaLabel: el,
                        tooltipLabel: el,
                        shortcut: g.TJ.PLAYBACK,
                        onClick: b,
                        ref: Z,
                        buttonSize: h.AU[C],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !Q &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(h.Ey, {
                                    iconComponent: f.qN,
                                    animationTime: a,
                                    visible: I,
                                    onClick: D,
                                    ariaLabel: E.intl.string(E.t.r9s3Uv),
                                    tooltipLabel: E.intl.string(E.t.r9s3Uv),
                                    shortcut: g.TJ.SEEK_BACK,
                                    buttonSize: h.AU[C],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(h.Ey, {
                                    iconComponent: f.i7,
                                    animationTime: a,
                                    visible: I,
                                    onClick: L,
                                    disabled: !T,
                                    ariaLabel: T ? E.intl.string(E.t.zWDcNP) : E.intl.string(E.t.xXh3yw),
                                    tooltipLabel: T ? E.intl.string(E.t.zWDcNP) : E.intl.string(E.t.xXh3yw),
                                    tooltipDelayMs: T ? h.do : 0,
                                    shortcut: g.TJ.SEEK_FORWARD,
                                    buttonSize: h.AU[C],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(o.animated.div, {
                className: s()(A.X3, A.L1),
                style: {
                    opacity: (0, o.to)([a.to({ range: [0, 1], output: [0, 1] })], (e) => `${I ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: er,
                        onMouseLeave: ei,
                        onFocus: er,
                        onBlur: ei,
                        className: A.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(h.Ey, {
                                iconComponent: es,
                                animationTime: a,
                                visible: I,
                                onClick: en,
                                ariaLabel: E.intl.string(E.t["eIl+AK"]),
                                tooltipLabel: E.intl.string(E.t["eIl+AK"]),
                                shortcut: g.TJ.MUTE,
                                buttonSize: h.AU[C],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: A.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, o.to)(
                                        [q.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${I ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, o.to)([q.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(c.A, {
                                    mini: !0,
                                    initialValue: H,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: et,
                                    asValueChanges: ee,
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": E.intl.string(E.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.QF, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s()(A.X3, A.ST),
                children: [
                    !S &&
                        (0, r.jsx)(h.Ey, {
                            iconComponent: d.ueQ,
                            animationTime: a,
                            visible: I,
                            onClick: N,
                            active: G && n !== g.Q6.ENDED,
                            disabled: n === g.Q6.ENDED,
                            ariaLabel: E.intl.string(E.t.KCzjTi),
                            tooltipLabel: E.intl.string(E.t.KCzjTi),
                            buttonSize: h.AU[C],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !y &&
                        (0, r.jsx)(h.Ey, {
                            iconComponent: f.IT,
                            animationTime: a,
                            visible: I,
                            active: F,
                            onClick: R,
                            ariaLabel: E.intl.string(E.t.bDSZO1),
                            tooltipLabel: E.intl.string(E.t.bDSZO1),
                            shortcut: g.TJ.CAPTION,
                            buttonSize: h.AU[C],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    (0, r.jsx)(h.Ey, {
                        iconComponent: V ? d.z7w : d.TM1,
                        animationTime: a,
                        visible: I,
                        onClick: O,
                        ariaLabel: E.intl.string(E.t.vKZT5t),
                        tooltipLabel: E.intl.string(E.t.vKZT5t),
                        shortcut: g.TJ.FULLSCREEN,
                        buttonSize: h.AU[C],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
