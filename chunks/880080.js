n.d(t, { A: () => I });
var r = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    a = n(563495),
    o = n(311907),
    u = n(827734),
    c = n(106236),
    d = n(435371),
    m = n(397927),
    E = n(775602),
    f = n(405670),
    p = n(753386),
    v = n(237575),
    h = n(937721),
    _ = n(378465),
    C = n(261331),
    g = n(894307),
    S = n(985018),
    A = n(438655);
let x = "-:--",
    T = {
        [C.Q6.PLAYING]: { icon: m.E$n, label: S.intl.string(S.t.ZcgDJX) },
        [C.Q6.PAUSED]: { icon: m.udU, label: S.intl.string(S.t.RscU7I) },
        [C.Q6.ENDED]: { icon: m.mqY, label: S.intl.string(S.t.hsvh0i) },
    },
    b = { [C.oA.MD]: C.n4.MD, [C.oA.LG]: C.n4.LG },
    D = { [C.n4.MD]: "md", [C.n4.LG]: "lg" };
function N(e) {
    let { current: t, duration: n } = e,
        s = null != t ? (0, g.rB)(t) : x,
        i = null != n ? (0, g.rB)(n) : x;
    return (0, r.jsxs)("div", {
        className: l()(A.d$, A.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [
            (0, r.jsx)(m.Text, { variant: "text-xs/normal", className: A.Ue, children: s }),
            (0, r.jsx)(m.Text, { variant: "text-xs/normal", className: A.zO, children: "/" }),
            (0, r.jsx)(m.Text, { variant: "text-xs/normal", className: A.Ue, children: i }),
        ],
    });
}
let y = s.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: s,
            visible: i,
            ariaLabel: o,
            active: c,
            disabled: E,
            tooltipLabel: f,
            tooltipDelayMs: p = 1500,
            shortcut: v,
            onClick: h,
            buttonSize: _ = C.n4.MD,
            "data-testid": g,
        } = e,
        S = (e) =>
            (0, r.jsx)(m.DUT, {
                ...e,
                onClick: !0 === E ? void 0 : h,
                className: l()(A.K5, { [A.Iy]: E }),
                "aria-label": o,
                "aria-disabled": E,
                "data-testid": g,
                innerRef: t,
                children: (0, r.jsx)(a.animated.div, {
                    className: A.K5,
                    style: {
                        opacity: (0, a.to)(
                            [s.to({ range: [0, 1], output: [0, 1] })],
                            (e) => `${i ? e : Math.pow(e, 8)}`,
                        ),
                        height: { [C.n4.LG]: "32px", [C.n4.MD]: "24px" }[_],
                    },
                    children: (0, r.jsx)(n, {
                        size: D[_],
                        color: !0 !== E ? u.A.colors.WHITE : u.A.colors.TEXT_MUTED,
                        className: l()(A.jk, { [A.x2]: c, [A.Wr]: !E }),
                    }),
                }),
            });
    return null != f && i
        ? (0, r.jsx)(d.m_, { text: f, keyboardShortcut: "" !== (v ?? "").trim() ? v : void 0, delay: p, children: S() })
        : S();
});
function I(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: i,
            visible: d,
            seekForwardEnabled: g,
            hideCaptionBtn: x,
            hideTranscriptBtn: D,
            videoTask: I,
            size: L,
            handlePlaybackBtnClick: R,
            handleTranscriptBtnClick: M,
            handleCaptionBtnClick: j,
            handleFullScreenBtnClick: O,
            handleSeekBackBtnClick: k,
            handleSeekForwardBtnClick: w,
            handleControlBarPendingInteraction: V,
            onVolumeChange: P,
        } = e,
        Q = (0, f.Kr)((e) => e.volume),
        U = (0, f.Kr)((e) => e.setVolume),
        F = (0, f.Kr)((e) => e.muted),
        B = (0, f.Kr)((e) => e.setMuted),
        G = (0, f.Kr)((e) => e.transcriptEnabled),
        H = (0, f.Kr)((e) => e.captionEnabled),
        Y = (0, f.Kr)((e) => e.fullScreenEnabled),
        $ = (0, o.bG)([E.A], () => E.A.useReducedMotion),
        K = (0, o.bG)([E.A], () => E.A.keyboardModeEnabled),
        [W, q] = s.useState(F ? 0 : Q),
        [z, X] = s.useState(!1),
        [Z, J] = s.useState(!1),
        [{ volumeAnimSpring: ee }, et] = (0, m.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        en = s.useRef(null),
        er = (0, p.eG)(I),
        es = s.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== W && q(e));
            },
            [t, W],
        ),
        ei = s.useCallback(() => {
            null != t.current && (0 === W ? (es(Q), B(!1), P(Q)) : (U(W), es(0), B(!0), P(0)));
        }, [t, W, es, Q, B, U, P]),
        el = () => {
            X(!0);
        },
        ea = () => {
            X(!1);
        },
        eo = s.useCallback(
            (e) => {
                switch (e.key) {
                    case C.TJ.PLAYBACK:
                        R();
                        break;
                    case C.TJ.SPACE:
                        K || (e.preventDefault(), R());
                        break;
                    case C.TJ.SEEK_BACK:
                        k();
                        break;
                    case C.TJ.SEEK_FORWARD:
                        w();
                        break;
                    case C.TJ.CAPTION:
                        j();
                        break;
                    case C.TJ.FULLSCREEN:
                        O();
                        break;
                    case C.TJ.MUTE:
                        ei();
                }
            },
            [j, O, R, k, w, ei, K],
        );
    s.useEffect(() => {
        null != en.current && en.current.focus();
    }, []),
        s.useEffect(
            () => (
                et({ volumeAnimSpring: Z || z ? 1 : 0, immediate: $ }),
                () => {
                    ee.stop();
                }
            ),
            [Z, z, et, $, ee],
        ),
        s.useEffect(
            () => (
                window.addEventListener("keydown", eo),
                () => {
                    window.removeEventListener("keydown", eo);
                }
            ),
            [eo],
        );
    let eu = 0 === W ? m._RO : W < 0.5 ? m.S24 : m.HKD,
        { icon: ec, label: ed } = T[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: A.X3,
                children: [
                    (0, r.jsx)(y, {
                        iconComponent: ec,
                        animationTime: i,
                        visible: d,
                        ariaLabel: ed,
                        tooltipLabel: ed,
                        shortcut: C.TJ.PLAYBACK,
                        onClick: R,
                        ref: en,
                        buttonSize: b[L],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    "portrait" !== er &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(y, {
                                    iconComponent: h.h,
                                    animationTime: i,
                                    visible: d,
                                    onClick: k,
                                    ariaLabel: S.intl.string(S.t.r9s3Uv),
                                    tooltipLabel: S.intl.string(S.t.r9s3Uv),
                                    shortcut: C.TJ.SEEK_BACK,
                                    buttonSize: b[L],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(y, {
                                    iconComponent: _.X,
                                    animationTime: i,
                                    visible: d,
                                    onClick: w,
                                    disabled: !g,
                                    ariaLabel: g ? S.intl.string(S.t.zWDcNP) : S.intl.string(S.t.xXh3yw),
                                    tooltipLabel: g ? S.intl.string(S.t.zWDcNP) : S.intl.string(S.t.xXh3yw),
                                    tooltipDelayMs: 1500 * !!g,
                                    shortcut: C.TJ.SEEK_FORWARD,
                                    buttonSize: b[L],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(a.animated.div, {
                className: l()(A.X3, A.L1),
                style: {
                    opacity: (0, a.to)([i.to({ range: [0, 1], output: [0, 1] })], (e) => `${d ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: el,
                        onMouseLeave: ea,
                        onFocus: el,
                        onBlur: ea,
                        className: A.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(y, {
                                iconComponent: eu,
                                animationTime: i,
                                visible: d,
                                onClick: ei,
                                ariaLabel: S.intl.string(S.t["eIl+AK"]),
                                tooltipLabel: S.intl.string(S.t["eIl+AK"]),
                                shortcut: C.TJ.MUTE,
                                buttonSize: b[L],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: A.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, a.to)(
                                        [ee.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${d ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, a.to)([ee.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(c.A, {
                                    mini: !0,
                                    initialValue: W,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        es(e), U(e), P(e), Z && (J(!1), V(!1)), F && e > 0 && B(!1);
                                    },
                                    asValueChanges: (e) => {
                                        es(e), Z || (J(!0), V(!0));
                                    },
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": S.intl.string(S.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(N, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: l()(A.X3, A.ST),
                children: [
                    !D &&
                        (0, r.jsx)(y, {
                            iconComponent: m.ueQ,
                            animationTime: i,
                            visible: d,
                            onClick: M,
                            active: G && n !== C.Q6.ENDED,
                            disabled: n === C.Q6.ENDED,
                            ariaLabel: S.intl.string(S.t.KCzjTi),
                            tooltipLabel: S.intl.string(S.t.KCzjTi),
                            buttonSize: b[L],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !x &&
                        (0, r.jsx)(y, {
                            iconComponent: v.n,
                            animationTime: i,
                            visible: d,
                            active: H,
                            onClick: j,
                            ariaLabel: S.intl.string(S.t.bDSZO1),
                            tooltipLabel: S.intl.string(S.t.bDSZO1),
                            shortcut: C.TJ.CAPTION,
                            buttonSize: b[L],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    (0, r.jsx)(y, {
                        iconComponent: Y ? m.z7w : m.TM1,
                        animationTime: i,
                        visible: d,
                        onClick: O,
                        ariaLabel: S.intl.string(S.t.vKZT5t),
                        tooltipLabel: S.intl.string(S.t.vKZT5t),
                        shortcut: C.TJ.FULLSCREEN,
                        buttonSize: b[L],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
