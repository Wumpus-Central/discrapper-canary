n.d(t, { Z: () => x }), n(781311), n(388685);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(717976),
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
    C = n(388032),
    S = n(430799);
let h = "-:--",
    _ = {
        [O.rq.PLAYING]: {
            icon: d.fpf,
            label: C.intl.string(C.t.ZcgDJS),
        },
        [O.rq.PAUSED]: {
            icon: d.o1U,
            label: C.intl.string(C.t.RscU7O),
        },
        [O.rq.ENDED]: {
            icon: d.Oe7,
            label: C.intl.string(C.t.hsvh0t),
        },
    };
function j(e) {
    let { current: t, duration: n } = e,
        l = null != t ? (0, b.yv)(t) : h,
        o = null != n ? (0, b.yv)(n) : h;
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
let y = l.forwardRef(function (e, t) {
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
        return (0, r.jsx)(d.ua7, {
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
            animSpring: h,
            visible: x,
            seekForwardEnabled: T,
            hideCaptionBtn: D,
            hideTranscriptBtn: R,
            videoTask: P,
            handlePlaybackBtnClick: N,
            handleTranscriptBtnClick: I,
            handleCaptionBtnClick: k,
            handleFullScreenBtnClick: A,
            handleSeekBackBtnClick: w,
            handleSeekForwardBtnClick: L,
            handleControlBarPendingInteraction: M,
            onVolumeChange: V,
        } = e,
        B = (0, f.km)((e) => e.volume),
        Z = (0, f.km)((e) => e.setVolume),
        F = (0, f.km)((e) => e.muted),
        U = (0, f.km)((e) => e.setMuted),
        q = (0, f.km)((e) => e.transcriptEnabled),
        Y = (0, f.km)((e) => e.captionEnabled),
        H = (0, f.km)((e) => e.fullScreenEnabled),
        Q = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        z = (0, s.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        [G, K] = l.useState(F ? 0 : B),
        [W, X] = l.useState(!1),
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
                null != o.current && (e !== o.current.volume && (o.current.volume = e), e !== G && K(e));
            },
            [o, G],
        ),
        eo = l.useCallback(() => {
            null != o.current && (0 === G ? (el(B), U(!1), V(B)) : (Z(G), el(0), U(!0), V(0)));
        }, [o, G, el, B, U, Z, V]),
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
                        N();
                        break;
                    case O.Y1.SPACE:
                        z || (e.preventDefault(), N());
                        break;
                    case O.Y1.SEEK_BACK:
                        w();
                        break;
                    case O.Y1.SEEK_FORWARD:
                        L();
                        break;
                    case O.Y1.CAPTION:
                        k();
                        break;
                    case O.Y1.FULLSCREEN:
                        A();
                        break;
                    case O.Y1.MUTE:
                        eo();
                }
            },
            [k, A, N, w, L, eo, z],
        );
    l.useEffect(() => {
        null != en.current && en.current.focus();
    }, []),
        l.useEffect(
            () => (
                et({
                    volumeAnimSpring: $ || W ? 1 : 0,
                    immediate: Q,
                }),
                () => {
                    ee.stop();
                }
            ),
            [$, W, et, Q, ee],
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
    let ec = 0 === G ? d.OyP : G < 0.5 ? d.X2j : d.gj8,
        { icon: eu, label: ed } = _[b];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.videoControlsGroup,
                children: [
                    (0, r.jsx)(y, {
                        iconComponent: eu,
                        animationTime: h,
                        visible: x,
                        ariaLabel: ed,
                        tooltipLabel: ed,
                        shortcut: O.Y1.PLAYBACK,
                        onClick: N,
                        ref: en,
                    }),
                    "portrait" !== er &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(y, {
                                    iconComponent: E.d,
                                    animationTime: h,
                                    visible: x,
                                    onClick: w,
                                    ariaLabel: C.intl.string(C.t.r9s3Ul),
                                    tooltipLabel: C.intl.string(C.t.r9s3Ul),
                                    shortcut: O.Y1.SEEK_BACK,
                                }),
                                (0, r.jsx)(y, {
                                    iconComponent: g.o,
                                    animationTime: h,
                                    visible: x,
                                    onClick: L,
                                    disabled: !T,
                                    ariaLabel: T ? C.intl.string(C.t.zWDcND) : C.intl.string(C.t.xXh3y8),
                                    tooltipLabel: T ? C.intl.string(C.t.zWDcND) : C.intl.string(C.t.xXh3y8),
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
                            h.to({
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
                            (0, r.jsx)(y, {
                                iconComponent: ec,
                                animationTime: h,
                                visible: x,
                                onClick: eo,
                                ariaLabel: C.intl.string(C.t["eIl+AA"]),
                                tooltipLabel: C.intl.string(C.t["eIl+AA"]),
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
                                    initialValue: G,
                                    keyboardStep: 0.1,
                                    minValue: 0,
                                    maxValue: 1,
                                    onValueChange: (e) => {
                                        el(e), Z(e), V(e), $ && (J(!1), M(!1)), F && e > 0 && U(!1);
                                    },
                                    asValueChanges: (e) => {
                                        el(e), $ || (J(!0), M(!0));
                                    },
                                    fillStyles: { backgroundColor: c.Z.colors.WHITE.css },
                                    orientation: "horizontal",
                                    "aria-label": C.intl.string(C.t["eIl+AA"]),
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
                className: i()(S.videoControlsGroup, S.videoControlsGroupEnd),
                children: [
                    !R &&
                        (0, r.jsx)(y, {
                            iconComponent: d.hH0,
                            animationTime: h,
                            visible: x,
                            onClick: I,
                            active: q && b !== O.rq.ENDED,
                            disabled: b === O.rq.ENDED,
                            ariaLabel: C.intl.string(C.t.KCzjTk),
                            tooltipLabel: C.intl.string(C.t.KCzjTk),
                        }),
                    !D &&
                        (0, r.jsx)(y, {
                            iconComponent: v.c,
                            animationTime: h,
                            visible: x,
                            active: Y,
                            onClick: k,
                            ariaLabel: C.intl.string(C.t.bDSZOz),
                            tooltipLabel: C.intl.string(C.t.bDSZOz),
                            shortcut: O.Y1.CAPTION,
                        }),
                    (0, r.jsx)(y, {
                        iconComponent: H ? d.wvt : d.NpZ,
                        animationTime: h,
                        visible: x,
                        onClick: A,
                        ariaLabel: C.intl.string(C.t.vKZT5u),
                        tooltipLabel: C.intl.string(C.t.vKZT5u),
                        shortcut: O.Y1.FULLSCREEN,
                    }),
                ],
            }),
        ],
    });
}
