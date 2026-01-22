n.d(t, { A: () => D }), n(733351), n(896048);
var r = n(627968),
    l = n(64700),
    o = n(503698),
    i = n.n(o),
    s = n(432022),
    a = n(311907),
    c = n(827734),
    u = n(106236),
    d = n(435371),
    f = n(397927),
    m = n(775602),
    p = n(405670),
    v = n(753386),
    E = n(237575),
    g = n(937721),
    h = n(378465),
    b = n(261331),
    y = n(457775),
    O = n(985018),
    S = n(438655);
let _ = "-:--",
    C = {
        [b.Q6.PLAYING]: {
            icon: f.E$n,
            label: O.intl.string(O.t.ZcgDJX),
        },
        [b.Q6.PAUSED]: {
            icon: f.udU,
            label: O.intl.string(O.t.RscU7I),
        },
        [b.Q6.ENDED]: {
            icon: f.mqY,
            label: O.intl.string(O.t.hsvh0i),
        },
    },
    x = {
        [b.oA.MD]: b.n4.MD,
        [b.oA.LG]: b.n4.LG,
    },
    A = {
        [b.n4.MD]: "md",
        [b.n4.LG]: "lg",
    };
function j(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, y.rB)(t) : _,
        o = null != n ? (0, y.rB)(n) : _;
    return (0, r.jsxs)("div", {
        className: i()(S.d$, S.jk),
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-xs/normal",
                className: S.Ue,
                children: l,
            }),
            (0, r.jsx)(f.Text, {
                variant: "text-xs/normal",
                className: S.zO,
                children: "/",
            }),
            (0, r.jsx)(f.Text, {
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
            disabled: m,
            tooltipLabel: p,
            tooltipDelayMs: v = 1500,
            shortcut: E,
            onClick: g,
            buttonSize: h = b.n4.MD,
        } = e,
        y = (e) => {
            var d, p;
            return (0, r.jsx)(
                f.DUT,
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
                (p = p =
                    {
                        onClick: !0 === m ? void 0 : g,
                        className: i()(S.K5, { [S.Iy]: m }),
                        "aria-label": a,
                        "aria-disabled": m,
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
                                    [b.n4.LG]: "32px",
                                    [b.n4.MD]: "24px",
                                }[h],
                            },
                            children: (0, r.jsx)(n, {
                                size: A[h],
                                color: !0 !== m ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                                className: i()(S.jk, {
                                    [S.x2]: u,
                                    [S.Wr]: !m,
                                }),
                            }),
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(p))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(p)).forEach(function (e) {
                          Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(p, e));
                      }),
                d),
            );
        };
    return null != p && o
        ? (0, r.jsx)(d.m_, {
              text: p,
              keyboardShortcut: "" !== (null != E ? E : "").trim() ? E : void 0,
              delay: v,
              children: y(),
          })
        : y();
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
        F = (0, p.Kr)((e) => e.volume),
        B = (0, p.Kr)((e) => e.setVolume),
        K = (0, p.Kr)((e) => e.muted),
        G = (0, p.Kr)((e) => e.setMuted),
        H = (0, p.Kr)((e) => e.transcriptEnabled),
        Y = (0, p.Kr)((e) => e.captionEnabled),
        W = (0, p.Kr)((e) => e.fullScreenEnabled),
        q = (0, a.bG)([m.A], () => m.A.useReducedMotion),
        z = (0, a.bG)([m.A], () => m.A.keyboardModeEnabled),
        [Z, X] = l.useState(K ? 0 : F),
        [J, $] = l.useState(!1),
        [ee, et] = l.useState(!1),
        [{ volumeAnimSpring: en }, er] = (0, f.zhh)(() => ({
            from: { volumeAnimSpring: 0 },
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
                null != o.current && (e !== o.current.volume && (o.current.volume = e), e !== Z && X(e));
            },
            [o, Z],
        ),
        es = l.useCallback(() => {
            null != o.current && (0 === Z ? (ei(F), G(!1), U(F)) : (B(Z), ei(0), G(!0), U(0)));
        }, [o, Z, ei, F, G, B, U]),
        ea = () => {
            $(!0);
        },
        ec = () => {
            $(!1);
        },
        eu = l.useCallback(
            (e) => {
                switch (e.key) {
                    case b.TJ.PLAYBACK:
                        I();
                        break;
                    case b.TJ.SPACE:
                        z || (e.preventDefault(), I());
                        break;
                    case b.TJ.SEEK_BACK:
                        M();
                        break;
                    case b.TJ.SEEK_FORWARD:
                        V();
                        break;
                    case b.TJ.CAPTION:
                        R();
                        break;
                    case b.TJ.FULLSCREEN:
                        k();
                        break;
                    case b.TJ.MUTE:
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
    let ed = 0 === Z ? f._RO : Z < 0.5 ? f.S24 : f.HKD,
        { icon: ef, label: em } = C[d];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.X3,
                children: [
                    (0, r.jsx)(T, {
                        iconComponent: ef,
                        animationTime: y,
                        visible: _,
                        ariaLabel: em,
                        tooltipLabel: em,
                        shortcut: b.TJ.PLAYBACK,
                        onClick: I,
                        ref: el,
                        buttonSize: x[P],
                    }),
                    "portrait" !== eo &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(T, {
                                    iconComponent: g.h,
                                    animationTime: y,
                                    visible: _,
                                    onClick: M,
                                    ariaLabel: O.intl.string(O.t.r9s3Uv),
                                    tooltipLabel: O.intl.string(O.t.r9s3Uv),
                                    shortcut: b.TJ.SEEK_BACK,
                                    buttonSize: x[P],
                                }),
                                (0, r.jsx)(T, {
                                    iconComponent: h.X,
                                    animationTime: y,
                                    visible: _,
                                    onClick: V,
                                    disabled: !A,
                                    ariaLabel: A ? O.intl.string(O.t.zWDcNP) : O.intl.string(O.t.xXh3yw),
                                    tooltipLabel: A ? O.intl.string(O.t.zWDcNP) : O.intl.string(O.t.xXh3yw),
                                    tooltipDelayMs: 1500 * !!A,
                                    shortcut: b.TJ.SEEK_FORWARD,
                                    buttonSize: x[P],
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
                        children: [
                            (0, r.jsx)(T, {
                                iconComponent: ed,
                                animationTime: y,
                                visible: _,
                                onClick: es,
                                ariaLabel: O.intl.string(O.t["eIl+AK"]),
                                tooltipLabel: O.intl.string(O.t["eIl+AK"]),
                                shortcut: b.TJ.MUTE,
                                buttonSize: x[P],
                            }),
                            (0, r.jsx)(s.animated.div, {
                                className: S.MQ,
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
                                    initialValue: Z,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        ei(e), B(e), U(e), ee && (et(!1), Q(!1)), K && e > 0 && G(!1);
                                    },
                                    asValueChanges: (e) => {
                                        ei(e), ee || (et(!0), Q(!0));
                                    },
                                    fillStyles: { backgroundColor: c.A.colors.WHITE.css },
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
                            iconComponent: f.ueQ,
                            animationTime: y,
                            visible: _,
                            onClick: L,
                            active: H && d !== b.Q6.ENDED,
                            disabled: d === b.Q6.ENDED,
                            ariaLabel: O.intl.string(O.t.KCzjTi),
                            tooltipLabel: O.intl.string(O.t.KCzjTi),
                            buttonSize: x[P],
                        }),
                    !D &&
                        (0, r.jsx)(T, {
                            iconComponent: E.n,
                            animationTime: y,
                            visible: _,
                            active: Y,
                            onClick: R,
                            ariaLabel: O.intl.string(O.t.bDSZO1),
                            tooltipLabel: O.intl.string(O.t.bDSZO1),
                            shortcut: b.TJ.CAPTION,
                            buttonSize: x[P],
                        }),
                    (0, r.jsx)(T, {
                        iconComponent: W ? f.z7w : f.TM1,
                        animationTime: y,
                        visible: _,
                        onClick: k,
                        ariaLabel: O.intl.string(O.t.vKZT5t),
                        tooltipLabel: O.intl.string(O.t.vKZT5t),
                        shortcut: b.TJ.FULLSCREEN,
                        buttonSize: x[P],
                    }),
                ],
            }),
        ],
    });
}
