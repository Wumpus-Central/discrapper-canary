n.d(t, { Z: () => x }), n(781311), n(388685);
var r = n(951288),
    l = n(647438),
    o = n(120356),
    i = n.n(o),
    a = n(599273),
    s = n(442837),
    c = n(692547),
    u = n(561779),
    d = n(481060),
    m = n(607070),
    p = n(509212),
    f = n(184299),
    v = n(902749),
    E = n(957099),
    g = n(312729),
    O = n(223418),
    b = n(604162),
    h = n(388032),
    S = n(430799);
let C = "-:--",
    _ = {
        [O.rq.PLAYING]: {
            icon: d.fpf,
            label: h.intl.string(h.t.ZcgDJS),
        },
        [O.rq.PAUSED]: {
            icon: d.o1U,
            label: h.intl.string(h.t.RscU7O),
        },
        [O.rq.ENDED]: {
            icon: d.Oe7,
            label: h.intl.string(h.t.hsvh0t),
        },
    };
function y(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, b.yv)(t) : C,
        o = null != n ? (0, b.yv)(n) : C;
    return (
        (l = l.padStart(o.length, "0")),
        (0, r.jsxs)("div", {
            className: i()(S.durationTimeWrapper, S.controlsBarItem),
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    className: S.durationTimeDisplay,
                    children: l,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    className: S.durationTimeSeparator,
                    children: "/",
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    className: S.durationTimeDisplay,
                    children: o,
                }),
            ],
        })
    );
}
let j = l.forwardRef(function (e, t) {
    let {
            iconComponent: n,
            animationTime: l,
            visible: o,
            ariaLabel: s,
            active: u,
            disabled: m,
            tooltipLabel: p,
            tooltipDelayMs: f = 1500,
            shortcut: v,
            onClick: E,
        } = e,
        g = (e) => {
            var p, f;
            return (0, r.jsx)(
                d.P3F,
                ((p = (function (e) {
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
                (f = f =
                    {
                        onClick: !0 === m ? void 0 : E,
                        className: i()(S.videoControlsBtnCont, { [S.videoControlsBtnContDisabled]: m }),
                        "aria-label": s,
                        "aria-disabled": m,
                        innerRef: t,
                        children: (0, r.jsx)(a.animated.div, {
                            className: S.videoControlsBtnCont,
                            style: {
                                opacity: (0, a.to)(
                                    [
                                        l.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                    ],
                                    (e) => "".concat(o ? e : Math.pow(e, 8)),
                                ),
                            },
                            children: (0, r.jsx)(n, {
                                color: !0 !== m ? c.Z.colors.WHITE : c.Z.colors.TEXT_MUTED,
                                className: i()(S.controlsBarItem, {
                                    [S.controlsBarItemActive]: u,
                                    [S.videoControlsBtn]: !m,
                                }),
                            }),
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(f))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(f)).forEach(function (e) {
                          Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(f, e));
                      }),
                p),
            );
        };
    if (null == p || !o) return g();
    {
        let e = (0, r.jsxs)(r.Fragment, {
            children: [
                p,
                "" !== (null != v ? v : "").trim() &&
                    (0, r.jsx)(d.M2$, {
                        shortcut: null != v ? v : "",
                        className: S.videoControlsBtnTooltipKeyCombo,
                    }),
            ],
        });
        return (0, r.jsx)(d.aML, {
            text: e,
            "aria-label": p,
            tooltipContentClassName: S.videoControlsBtnTooltip,
            delay: f,
            children: (e) => g(e),
        });
    }
});
function x(e) {
    var t, n;
    let {
            videoRef: o,
            playerState: b,
            animSpring: C,
            visible: x,
            seekForwardEnabled: T,
            hideCaptionBtn: D,
            hideTranscriptBtn: R,
            videoTask: P,
            handlePlaybackBtnClick: I,
            handleTranscriptBtnClick: N,
            handleCaptionBtnClick: k,
            handleFullScreenBtnClick: w,
            handleSeekBackBtnClick: A,
            handleSeekForwardBtnClick: L,
            handleControlBarPendingInteraction: M,
            onVolumeChange: V,
        } = e,
        Z = (0, f.km)((e) => e.volume),
        B = (0, f.km)((e) => e.setVolume),
        F = (0, f.km)((e) => e.muted),
        U = (0, f.km)((e) => e.setMuted),
        q = (0, f.km)((e) => e.transcriptEnabled),
        H = (0, f.km)((e) => e.captionEnabled),
        Y = (0, f.km)((e) => e.fullScreenEnabled),
        Q = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        G = (0, s.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [W, z] = l.useState(F ? 0 : Z),
        [K, X] = l.useState(!1),
        [$, J] = l.useState(!1),
        [{ volumeAnimSpring: ee }, et] = (0, d.q_F)(() => ({
            from: { volumeAnimSpring: 0 },
            config: {
                tension: 100,
                friction: 3,
                clamp: !0,
            },
        })),
        en = l.useRef(null),
        er = (0, p.ZS)(P),
        el = l.useCallback(
            (e) => {
                null != o.current && (e !== o.current.volume && (o.current.volume = e), e !== W && z(e));
            },
            [o, W],
        ),
        eo = l.useCallback(() => {
            null != o.current && (0 === W ? (el(Z), U(!1), V(Z)) : (B(W), el(0), U(!0), V(0)));
        }, [o, W, el, Z, U, B, V]),
        ei = () => {
            X(!0);
        },
        ea = () => {
            X(!1);
        },
        es = l.useCallback(
            (e) => {
                switch (e.key) {
                    case O.Y1.PLAYBACK:
                        I();
                        break;
                    case O.Y1.SPACE:
                        G || (e.preventDefault(), I());
                        break;
                    case O.Y1.SEEK_BACK:
                        A();
                        break;
                    case O.Y1.SEEK_FORWARD:
                        L();
                        break;
                    case O.Y1.CAPTION:
                        k();
                        break;
                    case O.Y1.FULLSCREEN:
                        w();
                        break;
                    case O.Y1.MUTE:
                        eo();
                }
            },
            [k, w, I, A, L, eo, G],
        );
    l.useEffect(() => {
        null != en.current && en.current.focus();
    }, []),
        l.useEffect(
            () => (
                et({
                    volumeAnimSpring: $ || K ? 1 : 0,
                    immediate: Q,
                }),
                () => {
                    ee.stop();
                }
            ),
            [$, K, et, Q, ee],
        ),
        l.useEffect(
            () => (
                window.addEventListener("keydown", es),
                () => {
                    window.removeEventListener("keydown", es);
                }
            ),
            [es],
        );
    let ec = 0 === W ? d.OyP : W < 0.5 ? d.X2j : d.gj8,
        { icon: eu, label: ed } = _[b];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.videoControlsGroup,
                children: [
                    (0, r.jsx)(j, {
                        iconComponent: eu,
                        animationTime: C,
                        visible: x,
                        ariaLabel: ed,
                        tooltipLabel: ed,
                        shortcut: O.Y1.PLAYBACK,
                        onClick: I,
                        ref: en,
                    }),
                    "portrait" !== er &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j, {
                                    iconComponent: E.d,
                                    animationTime: C,
                                    visible: x,
                                    onClick: A,
                                    ariaLabel: h.intl.string(h.t.r9s3Ul),
                                    tooltipLabel: h.intl.string(h.t.r9s3Ul),
                                    shortcut: O.Y1.SEEK_BACK,
                                }),
                                (0, r.jsx)(j, {
                                    iconComponent: g.o,
                                    animationTime: C,
                                    visible: x,
                                    onClick: L,
                                    disabled: !T,
                                    ariaLabel: T ? h.intl.string(h.t.zWDcND) : h.intl.string(h.t.xXh3y8),
                                    tooltipLabel: T ? h.intl.string(h.t.zWDcND) : h.intl.string(h.t.xXh3y8),
                                    tooltipDelayMs: 1500 * !!T,
                                    shortcut: O.Y1.SEEK_FORWARD,
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsxs)(a.animated.div, {
                className: i()(S.videoControlsGroup, S.videoControlsGroupMid),
                style: {
                    opacity: (0, a.to)(
                        [
                            C.to({
                                range: [0, 1],
                                output: [0, 1],
                            }),
                        ],
                        (e) => "".concat(x ? e : Math.pow(e, 8)),
                    ),
                },
                children: [
                    (0, r.jsxs)("div", {
                        onMouseEnter: ei,
                        onMouseLeave: ea,
                        onFocus: ei,
                        onBlur: ea,
                        className: S.volumeControlGroup,
                        children: [
                            (0, r.jsx)(j, {
                                iconComponent: ec,
                                animationTime: C,
                                visible: x,
                                onClick: eo,
                                ariaLabel: h.intl.string(h.t["eIl+AA"]),
                                tooltipLabel: h.intl.string(h.t["eIl+AA"]),
                                shortcut: O.Y1.MUTE,
                            }),
                            (0, r.jsx)(a.animated.div, {
                                className: S.volumeSlider,
                                style: {
                                    opacity: (0, a.to)(
                                        [
                                            ee.to({
                                                range: [0, 1],
                                                output: [0, 1],
                                            }),
                                        ],
                                        (e) => "".concat(x ? e : Math.pow(e, 8)),
                                    ),
                                    width: (0, a.to)(
                                        [
                                            ee.to({
                                                range: [0, 1],
                                                output: [0, 100],
                                            }),
                                        ],
                                        (e) => "".concat(e, "px"),
                                    ),
                                },
                                children: (0, r.jsx)(u.i, {
                                    mini: !0,
                                    initialValue: W,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        el(e), B(e), V(e), $ && (J(!1), M(!1)), F && e > 0 && U(!1);
                                    },
                                    asValueChanges: (e) => {
                                        el(e), $ || (J(!0), M(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": h.intl.string(h.t["eIl+AA"]),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(y, {
                        current: null == o || null == (t = o.current) ? void 0 : t.currentTime,
                        duration: null == o || null == (n = o.current) ? void 0 : n.duration,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: i()(S.videoControlsGroup, S.videoControlsGroupEnd),
                children: [
                    !R &&
                        (0, r.jsx)(j, {
                            iconComponent: d.hH0,
                            animationTime: C,
                            visible: x,
                            onClick: N,
                            active: q && b !== O.rq.ENDED,
                            disabled: b === O.rq.ENDED,
                            ariaLabel: h.intl.string(h.t.KCzjTk),
                            tooltipLabel: h.intl.string(h.t.KCzjTk),
                        }),
                    !D &&
                        (0, r.jsx)(j, {
                            iconComponent: v.c,
                            animationTime: C,
                            visible: x,
                            active: H,
                            onClick: k,
                            ariaLabel: h.intl.string(h.t.bDSZOz),
                            tooltipLabel: h.intl.string(h.t.bDSZOz),
                            shortcut: O.Y1.CAPTION,
                        }),
                    (0, r.jsx)(j, {
                        iconComponent: Y ? d.wvt : d.NpZ,
                        animationTime: C,
                        visible: x,
                        onClick: w,
                        ariaLabel: h.intl.string(h.t.vKZT5u),
                        tooltipLabel: h.intl.string(h.t.vKZT5u),
                        shortcut: O.Y1.FULLSCREEN,
                    }),
                ],
            }),
        ],
    });
}
