n.d(t, {
    A: () => D,
}),
    n(733351),
    n(896048);
var r = n(627968),
    l = n(64700),
    o = n(503698),
    i = n.n(o),
    s = n(92674),
    a = n(311907),
    c = n(827734),
    u = n(106236),
    d = n(435371),
    p = n(397927),
    f = n(775602),
    m = n(405670),
    v = n(753386),
    b = n(237575),
    E = n(937721),
    g = n(378465),
    h = n(261331),
    y = n(894307),
    O = n(985018),
    S = n(438655);
let _ = "-:--",
    C = {
        [h.Q6.PLAYING]: {
            icon: p.E$n,
            label: O.intl.string(O.t.ZcgDJX),
        },
        [h.Q6.PAUSED]: {
            icon: p.udU,
            label: O.intl.string(O.t.RscU7I),
        },
        [h.Q6.ENDED]: {
            icon: p.mqY,
            label: O.intl.string(O.t.hsvh0i),
        },
    },
    x = {
        [h.oA.MD]: h.n4.MD,
        [h.oA.LG]: h.n4.LG,
    },
    A = {
        [h.n4.MD]: "md",
        [h.n4.LG]: "lg",
    };

function j(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, y.rB)(t) : _,
        o = null != n ? (0, y.rB)(n) : _;
    return (0, r.jsxs)("div", {
        className: i()(S.d$, S.jk),
        "data-testid": "discord-web-video-player-duration",
        children: [
            (0, r.jsx)(p.Text, {
                variant: "text-xs/normal",
                className: S.Ue,
                children: l,
            }),
            (0, r.jsx)(p.Text, {
                variant: "text-xs/normal",
                className: S.zO,
                children: "/",
            }),
            (0, r.jsx)(p.Text, {
                variant: "text-xs/normal",
                className: S.Ue,
                children: o,
            }),
        ],
    });
}
let T = l.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: l,
            visible: o,
            ariaLabel: a,
            active: u,
            disabled: f,
            tooltipLabel: m,
            tooltipDelayMs: v = 1500,
            shortcut: b,
            onClick: E,
            buttonSize: g = h.n4.MD,
            "data-testid": y,
        } = e,
        O = (e) => {
            var d, m;
            return (0, r.jsx)(
                p.DUT,
                ((d = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (m = m =
                    {
                        onClick: !0 === f ? void 0 : E,
                        className: i()(S.K5, {
                            [S.Iy]: f,
                        }),
                        "aria-label": a,
                        "aria-disabled": f,
                        "data-testid": y,
                        innerRef: t,
                        children: (0, r.jsx)(s.animated.div, {
                            className: S.K5,
                            style: {
                                opacity: (0, s.to)(
                                    [
                                        l.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(o ? e : Math.pow(e, 8)),
                                ),
                                height: {
                                    [h.n4.LG]: "32px",
                                    [h.n4.MD]: "24px",
                                }[g],
                            },
                            children: (0, r.jsx)(n, {
                                size: A[g],
                                color: !0 !== f ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                                className: i()(S.jk, {
                                    [S.x2]: u,
                                    [S.Wr]: !f,
                                }),
                            }),
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(m))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(m)).forEach(function (e) {
                          Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(m, e));
                      }),
                d),
            );
        };
    return null != m && o
        ? (0, r.jsx)(d.m_, {
              text: m,
              keyboardShortcut: "" !== (null != b ? b : "").trim() ? b : void 0,
              delay: v,
              children: O(),
          })
        : O();
});

function D(e) {
    var t, n;
    let {
            videoRef: o,
            playerState: d,
            animSpring: y,
            visible: _,
            seekForwardEnabled: A,
            hideCaptionBtn: D,
            hideTranscriptBtn: w,
            videoTask: N,
            size: P,
            handlePlaybackBtnClick: I,
            handleTranscriptBtnClick: L,
            handleCaptionBtnClick: R,
            handleFullScreenBtnClick: k,
            handleSeekBackBtnClick: M,
            handleSeekForwardBtnClick: V,
            handleControlBarPendingInteraction: Q,
            onVolumeChange: U,
        } = e,
        F = (0, m.Kr)((e) => e.volume),
        B = (0, m.Kr)((e) => e.setVolume),
        K = (0, m.Kr)((e) => e.muted),
        G = (0, m.Kr)((e) => e.setMuted),
        H = (0, m.Kr)((e) => e.transcriptEnabled),
        Y = (0, m.Kr)((e) => e.captionEnabled),
        W = (0, m.Kr)((e) => e.fullScreenEnabled),
        q = (0, a.bG)([f.A], () => f.A.useReducedMotion),
        z = (0, a.bG)([f.A], () => f.A.keyboardModeEnabled),
        [X, Z] = l.useState(K ? 0 : F),
        [J, $] = l.useState(!1),
        [ee, et] = l.useState(!1),
        [{ volumeAnimSpring: en }, er] = (0, p.zhh)(() => ({
            from: {
                volumeAnimSpring: 0,
            },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0,
            },
        })),
        el = l.useRef(null),
        eo = (0, v.eG)(N),
        ei = l.useCallback(
            (e) => {
                null != o.current && (e !== o.current.volume && (o.current.volume = e), e !== X && Z(e));
            },
            [o, X],
        ),
        es = l.useCallback(() => {
            null != o.current && (0 === X ? (ei(F), G(!1), U(F)) : (B(X), ei(0), G(!0), U(0)));
        }, [o, X, ei, F, G, B, U]),
        ea = () => {
            $(!0);
        },
        ec = () => {
            $(!1);
        },
        eu = l.useCallback(
            (e) => {
                switch (e.key) {
                    case h.TJ.PLAYBACK:
                        I();
                        break;
                    case h.TJ.SPACE:
                        z || (e.preventDefault(), I());
                        break;
                    case h.TJ.SEEK_BACK:
                        M();
                        break;
                    case h.TJ.SEEK_FORWARD:
                        V();
                        break;
                    case h.TJ.CAPTION:
                        R();
                        break;
                    case h.TJ.FULLSCREEN:
                        k();
                        break;
                    case h.TJ.MUTE:
                        es();
                }
            },
            [R, k, I, M, V, es, z],
        );
    l.useEffect(() => {
        null != el.current && el.current.focus();
    }, []),
        l.useEffect(
            () => (
                er({
                    volumeAnimSpring: ee || J ? 1 : 0,
                    immediate: q,
                }),
                () => {
                    en.stop();
                }
            ),
            [ee, J, er, q, en],
        ),
        l.useEffect(
            () => (
                window.addEventListener("keydown", eu),
                () => {
                    window.removeEventListener("keydown", eu);
                }
            ),
            [eu],
        );
    let ed = 0 === X ? p._RO : X < 0.5 ? p.S24 : p.HKD,
        { icon: ep, label: ef } = C[d];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.X3,
                children: [
                    (0, r.jsx)(T, {
                        iconComponent: ep,
                        animationTime: y,
                        visible: _,
                        ariaLabel: ef,
                        tooltipLabel: ef,
                        shortcut: h.TJ.PLAYBACK,
                        onClick: I,
                        ref: el,
                        buttonSize: x[P],
                        "data-testid": "discord-web-video-player-play-pause-btn",
                    }),
                    "portrait" !== eo &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(T, {
                                    iconComponent: E.h,
                                    animationTime: y,
                                    visible: _,
                                    onClick: M,
                                    ariaLabel: O.intl.string(O.t.r9s3Uv),
                                    tooltipLabel: O.intl.string(O.t.r9s3Uv),
                                    shortcut: h.TJ.SEEK_BACK,
                                    buttonSize: x[P],
                                    "data-testid": "discord-web-video-player-seek-backward-btn",
                                }),
                                (0, r.jsx)(T, {
                                    iconComponent: g.X,
                                    animationTime: y,
                                    visible: _,
                                    onClick: V,
                                    disabled: !A,
                                    ariaLabel: A ? O.intl.string(O.t.zWDcNP) : O.intl.string(O.t.xXh3yw),
                                    tooltipLabel: A ? O.intl.string(O.t.zWDcNP) : O.intl.string(O.t.xXh3yw),
                                    tooltipDelayMs: 1500 * !!A,
                                    shortcut: h.TJ.SEEK_FORWARD,
                                    buttonSize: x[P],
                                    "data-testid": "discord-web-video-player-seek-forward-btn",
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(s.animated.div, {
                className: i()(S.X3, S.L1),
                style: {
                    opacity: (0, s.to)(
                        [
                            y.to({
                                range: [0, 1],
                                output: [0, 1],
                            }),
                        ],
                        (e) => "".concat(_ ? e : Math.pow(e, 8)),
                    ),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: ea,
                        onMouseLeave: ec,
                        onFocus: ea,
                        onBlur: ec,
                        className: S.RD,
                        "data-testid": "discord-web-video-player-volume-control",
                        children: [
                            (0, r.jsx)(T, {
                                iconComponent: ed,
                                animationTime: y,
                                visible: _,
                                onClick: es,
                                ariaLabel: O.intl.string(O.t["eIl+AK"]),
                                tooltipLabel: O.intl.string(O.t["eIl+AK"]),
                                shortcut: h.TJ.MUTE,
                                buttonSize: x[P],
                                "data-testid": "discord-web-video-player-volume-btn",
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: S.MQ,
                                "data-testid": "discord-web-video-player-volume-slider",
                                style: {
                                    opacity: (0, s.to)(
                                        [
                                            en.to({
                                                range: [0, 1],
                                                output: [0, 1],
                                            }),
                                        ],
                                        (e) => "".concat(_ ? e : Math.pow(e, 8)),
                                    ),
                                    width: (0, s.to)(
                                        [
                                            en.to({
                                                range: [0, 1],
                                                output: [0, 100],
                                            }),
                                        ],
                                        (e) => "".concat(e, "px"),
                                    ),
                                },
                                children: (0, r.jsx)(u.A, {
                                    mini: !0,
                                    initialValue: X,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        ei(e), B(e), U(e), ee && (et(!1), Q(!1)), K && e > 0 && G(!1);
                                    },
                                    asValueChanges: (e) => {
                                        ei(e), ee || (et(!0), Q(!0));
                                    },
                                    fillStyles: {
                                        backgroundColor: c.A.colors.WHITE.css,
                                    },
                                    orientation: "horizontal",
                                    "aria-label": O.intl.string(O.t["eIl+AK"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(j, {
                        current: null == o || null == (t = o.current) ? void 0 : t.currentTime,
                        duration: null == o || null == (n = o.current) ? void 0 : n.duration,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(S.X3, S.ST),
                children: [
                    !w &&
                        (0, r.jsx)(T, {
                            iconComponent: p.ueQ,
                            animationTime: y,
                            visible: _,
                            onClick: L,
                            active: H && d !== h.Q6.ENDED,
                            disabled: d === h.Q6.ENDED,
                            ariaLabel: O.intl.string(O.t.KCzjTi),
                            tooltipLabel: O.intl.string(O.t.KCzjTi),
                            buttonSize: x[P],
                            "data-testid": "discord-web-video-player-transcript-btn",
                        }),
                    !D &&
                        (0, r.jsx)(T, {
                            iconComponent: b.n,
                            animationTime: y,
                            visible: _,
                            active: Y,
                            onClick: R,
                            ariaLabel: O.intl.string(O.t.bDSZO1),
                            tooltipLabel: O.intl.string(O.t.bDSZO1),
                            shortcut: h.TJ.CAPTION,
                            buttonSize: x[P],
                            "data-testid": "discord-web-video-player-captions-btn",
                        }),
                    (0, r.jsx)(T, {
                        iconComponent: W ? p.z7w : p.TM1,
                        animationTime: y,
                        visible: _,
                        onClick: k,
                        ariaLabel: O.intl.string(O.t.vKZT5t),
                        tooltipLabel: O.intl.string(O.t.vKZT5t),
                        shortcut: h.TJ.FULLSCREEN,
                        buttonSize: x[P],
                        "data-testid": "discord-web-video-player-fullscreen-btn",
                    }),
                ],
            }),
        ],
    });
}
