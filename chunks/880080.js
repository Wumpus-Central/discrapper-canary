"use strict";
n.d(t, { A: () => L });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    l = n(311907),
    u = n(827734),
    c = n(106236),
    d = n(435371),
    _ = n(397927),
    f = n(775602),
    h = n(405670),
    p = n(753386),
    g = n(237575),
    E = n(937721),
    A = n(378465),
    I = n(261331),
    T = n(894307),
    y = n(985018),
    S = n(438655);
let v = "-:--",
    C = 1500,
    b = {
        [I.Q6.PLAYING]: { icon: _.E$n, label: y.intl.string(y.t.ZcgDJX) },
        [I.Q6.PAUSED]: { icon: _.udU, label: y.intl.string(y.t.RscU7I) },
        [I.Q6.ENDED]: { icon: _.mqY, label: y.intl.string(y.t.hsvh0i) },
    },
    N = { [I.oA.MD]: I.n4.MD, [I.oA.LG]: I.n4.LG },
    R = { [I.n4.MD]: "md", [I.n4.LG]: "lg" };
function O(e) {
    let { current: t, duration: n } = e,
        i = null != t ? (0, T.rB)(t) : v,
        a = null != n ? (0, T.rB)(n) : v;
    return (0, r.jsxs)("div", {
        className: s()(S.d$, S.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [
            (0, r.jsx)(_.Text, { variant: "text-xs/normal", className: S.Ue, children: i }),
            (0, r.jsx)(_.Text, { variant: "text-xs/normal", className: S.zO, children: "/" }),
            (0, r.jsx)(_.Text, { variant: "text-xs/normal", className: S.Ue, children: a }),
        ],
    });
}
let D = i.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: i,
            visible: a,
            ariaLabel: l,
            active: c,
            disabled: f,
            tooltipLabel: h,
            tooltipDelayMs: p = C,
            shortcut: g,
            onClick: E,
            buttonSize: A = I.n4.MD,
            "data-testid": T,
        } = e,
        y = (e) =>
            (0, r.jsx)(_.DUT, {
                ...e,
                onClick: !0 === f ? void 0 : E,
                className: s()(S.K5, { [S.Iy]: f }),
                "aria-label": l,
                "aria-disabled": f,
                "data-testid": T,
                innerRef: t,
                children: (0, r.jsx)(o.animated.div, {
                    className: S.K5,
                    style: {
                        opacity: (0, o.to)(
                            [i.to({ range: [0, 1], output: [0, 1] })],
                            (e) => `${a ? e : Math.pow(e, 8)}`,
                        ),
                        height: { [I.n4.LG]: "32px", [I.n4.MD]: "24px" }[A],
                    },
                    children: (0, r.jsx)(n, {
                        size: R[A],
                        color: !0 !== f ? u.A.colors.WHITE : u.A.colors.TEXT_MUTED,
                        className: s()(S.jk, { [S.x2]: c, [S.Wr]: !f }),
                    }),
                }),
            });
    return null != h && a
        ? (0, r.jsx)(d.m_, { text: h, keyboardShortcut: "" !== (g ?? "").trim() ? g : void 0, delay: p, children: y() })
        : y();
});
function L(e) {
    let {
            videoRef: t,
            playerState: n,
            animSpring: a,
            visible: d,
            seekForwardEnabled: T,
            hideCaptionBtn: v,
            hideTranscriptBtn: R,
            videoTask: L,
            size: w,
            handlePlaybackBtnClick: x,
            handleTranscriptBtnClick: P,
            handleCaptionBtnClick: M,
            handleFullScreenBtnClick: k,
            handleSeekBackBtnClick: U,
            handleSeekForwardBtnClick: G,
            handleControlBarPendingInteraction: F,
            onVolumeChange: V,
        } = e,
        B = (0, h.Kr)((e) => e.volume),
        j = (0, h.Kr)((e) => e.setVolume),
        H = (0, h.Kr)((e) => e.muted),
        Y = (0, h.Kr)((e) => e.setMuted),
        W = (0, h.Kr)((e) => e.transcriptEnabled),
        K = (0, h.Kr)((e) => e.captionEnabled),
        $ = (0, h.Kr)((e) => e.fullScreenEnabled),
        z = (0, l.bG)([f.A], () => f.A.useReducedMotion),
        q = (0, l.bG)([f.A], () => f.A.keyboardModeEnabled),
        [X, Z] = i.useState(H ? 0 : B),
        [Q, J] = i.useState(!1),
        [ee, et] = i.useState(!1),
        [{ volumeAnimSpring: en }, er] = (0, _.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
            config: { tension: 100, friction: 3, clamp: !0 },
        })),
        ei = i.useRef(null),
        ea = "portrait" === (0, p.eG)(L),
        es = i.useCallback(
            (e) => {
                null != t.current && (e !== t.current.volume && (t.current.volume = e), e !== X && Z(e));
            },
            [t, X],
        ),
        eo = (e) => {
            es(e), ee || (et(!0), F(!0));
        },
        el = (e) => {
            es(e), j(e), V(e), ee && (et(!1), F(!1)), H && e > 0 && Y(!1);
        },
        eu = i.useCallback(() => {
            null != t.current && (0 === X ? (es(B), Y(!1), V(B)) : (j(X), es(0), Y(!0), V(0)));
        }, [t, X, es, B, Y, j, V]),
        ec = () => {
            J(!0);
        },
        ed = () => {
            J(!1);
        },
        e_ = i.useCallback(
            (e) => {
                switch (e.key) {
                    case I.TJ.PLAYBACK:
                        x();
                        break;
                    case I.TJ.SPACE:
                        q || (e.preventDefault(), x());
                        break;
                    case I.TJ.SEEK_BACK:
                        U();
                        break;
                    case I.TJ.SEEK_FORWARD:
                        G();
                        break;
                    case I.TJ.CAPTION:
                        M();
                        break;
                    case I.TJ.FULLSCREEN:
                        k();
                        break;
                    case I.TJ.MUTE:
                        eu();
                }
            },
            [M, k, x, U, G, eu, q],
        );
    i.useEffect(() => {
        null != ei.current && ei.current.focus();
    }, []),
        i.useEffect(
            () => (
                er({ volumeAnimSpring: ee || Q ? 1 : 0, immediate: z }),
                () => {
                    en.stop();
                }
            ),
            [ee, Q, er, z, en],
        ),
        i.useEffect(
            () => (
                window.addEventListener("keydown", e_),
                () => {
                    window.removeEventListener("keydown", e_);
                }
            ),
            [e_],
        );
    let ef = 0 === X ? _._RO : X < 0.5 ? _.S24 : _.HKD,
        { icon: eh, label: ep } = b[n];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.X3,
                children: [
                    (0, r.jsx)(D, {
                        iconComponent: eh,
                        animationTime: a,
                        visible: d,
                        ariaLabel: ep,
                        tooltipLabel: ep,
                        shortcut: I.TJ.PLAYBACK,
                        onClick: x,
                        ref: ei,
                        buttonSize: N[w],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    !ea &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(D, {
                                    iconComponent: E.h,
                                    animationTime: a,
                                    visible: d,
                                    onClick: U,
                                    ariaLabel: y.intl.string(y.t.r9s3Uv),
                                    tooltipLabel: y.intl.string(y.t.r9s3Uv),
                                    shortcut: I.TJ.SEEK_BACK,
                                    buttonSize: N[w],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(D, {
                                    iconComponent: A.X,
                                    animationTime: a,
                                    visible: d,
                                    onClick: G,
                                    disabled: !T,
                                    ariaLabel: T ? y.intl.string(y.t.zWDcNP) : y.intl.string(y.t.xXh3yw),
                                    tooltipLabel: T ? y.intl.string(y.t.zWDcNP) : y.intl.string(y.t.xXh3yw),
                                    tooltipDelayMs: T ? C : 0,
                                    shortcut: I.TJ.SEEK_FORWARD,
                                    buttonSize: N[w],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(o.animated.div, {
                className: s()(S.X3, S.L1),
                style: {
                    opacity: (0, o.to)([a.to({ range: [0, 1], output: [0, 1] })], (e) => `${d ? e : Math.pow(e, 8)}`),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: ec,
                        onMouseLeave: ed,
                        onFocus: ec,
                        onBlur: ed,
                        className: S.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(D, {
                                iconComponent: ef,
                                animationTime: a,
                                visible: d,
                                onClick: eu,
                                ariaLabel: y.intl.string(y.t["eIl+AK"]),
                                tooltipLabel: y.intl.string(y.t["eIl+AK"]),
                                shortcut: I.TJ.MUTE,
                                buttonSize: N[w],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(o.animated.div, {
                                className: S.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, o.to)(
                                        [en.to({ range: [0, 1], output: [0, 1] })],
                                        (e) => `${d ? e : Math.pow(e, 8)}`,
                                    ),
                                    width: (0, o.to)([en.to({ range: [0, 1], output: [0, 100] })], (e) => `${e}px`),
                                },
                                children: (0, r.jsx)(c.A, {
                                    mini: !0,
                                    initialValue: X,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: el,
                                    asValueChanges: eo,
                                    fillStyles: { backgroundColor: u.A.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": y.intl.string(y.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(O, { current: t?.current?.currentTime, duration: t?.current?.duration }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: s()(S.X3, S.ST),
                children: [
                    !R &&
                        (0, r.jsx)(D, {
                            iconComponent: _.ueQ,
                            animationTime: a,
                            visible: d,
                            onClick: P,
                            active: W && n !== I.Q6.ENDED,
                            disabled: n === I.Q6.ENDED,
                            ariaLabel: y.intl.string(y.t.KCzjTi),
                            tooltipLabel: y.intl.string(y.t.KCzjTi),
                            buttonSize: N[w],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !v &&
                        (0, r.jsx)(D, {
                            iconComponent: g.n,
                            animationTime: a,
                            visible: d,
                            active: K,
                            onClick: M,
                            ariaLabel: y.intl.string(y.t.bDSZO1),
                            tooltipLabel: y.intl.string(y.t.bDSZO1),
                            shortcut: I.TJ.CAPTION,
                            buttonSize: N[w],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    (0, r.jsx)(D, {
                        iconComponent: $ ? _.z7w : _.TM1,
                        animationTime: a,
                        visible: d,
                        onClick: k,
                        ariaLabel: y.intl.string(y.t.vKZT5t),
                        tooltipLabel: y.intl.string(y.t.vKZT5t),
                        shortcut: I.TJ.FULLSCREEN,
                        buttonSize: N[w],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
