n.d(t, {
    $4: () => e$,
    BP: () => eW,
    Hm: () => e1,
    IM: () => ex,
    NN: () => eF,
    SP: () => eK,
    Wb: () => ez,
    Wn: () => eY,
    ZP: () => e2,
    o3: () => eD,
    oo: () => eL,
    sI: () => eH,
}),
    n(953529),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(348327),
    l = n.n(s),
    c = n(512722),
    u = n.n(c),
    d = n(392711),
    f = n.n(d),
    p = n(442837),
    _ = n(704215),
    h = n(199849),
    m = n(28664),
    g = n(481060),
    E = n(224706),
    b = n(660216),
    y = n(765250),
    O = n(13245),
    v = n(825209),
    S = n(593472),
    I = n(493773),
    T = n(100527),
    C = n(812206),
    A = n(835473),
    N = n(243778),
    P = n(594190),
    w = n(137920),
    R = n(320724),
    D = n(925329),
    x = n(297700),
    L = n(444295),
    j = n(486016),
    M = n(837268),
    k = n(32300),
    U = n(809357),
    G = n(371651),
    Z = n(829907),
    F = n(624864),
    B = n(610394),
    V = n(957148),
    H = n(932404),
    Y = n(398269),
    W = n(340101),
    K = n(243487),
    z = n(430561),
    q = n(509003),
    Q = n(865066),
    X = n(894300),
    J = n(131704),
    $ = n(598077),
    ee = n(189786),
    et = n(404577),
    en = n(355863),
    er = n(283595),
    ei = n(594174),
    ea = n(556296),
    eo = n(808506),
    es = n(237997),
    el = n(626135),
    ec = n(823379),
    eu = n(358085),
    ed = n(13140),
    ef = n(145597),
    ep = n(313789),
    e_ = n(273313),
    eh = n(981631),
    em = n(921944),
    eg = n(987650),
    eE = n(501787),
    eb = n(388032),
    ey = n(677677),
    eO = n(704437),
    ev = n(494139);
function eS(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eI(e) {
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
                eS(e, t, n[t]);
            });
    }
    return e;
}
function eT(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eC(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eT(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eA(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eN(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eN(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let eP = eM(null),
    ew = 20,
    eR = 16,
    eD = 1,
    ex = 25,
    eL = [0, 5, 10, 15, 20, 25];
function ej() {
    let e = eM(eP);
    f().isEqual(e, eP) || (el.default.track(eh.rMx.OVERLAY_SETTINGS_UPDATED, e), (eP = e));
}
function eM(e) {
    var t;
    let n = es.default.getNotificationPositionMode(),
        r = n !== eh._vf.DISABLED,
        i = ea.ZP.getOverlayKeybind(),
        a = ea.ZP.getOverlayChatKeybind();
    return {
        enabled: eo.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: F.Z.isNotificationDisabled(eg.n0.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ed.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, ed.BB)(a.shortcut) : null,
        text_opacity_slider: es.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : eo.default.enabled,
    };
}
function ek(e) {
    let {
        header: t,
        icon: n,
        title: i,
        description: a,
        action: s,
        hint: l,
        warning: c,
        onClick: u,
        "aria-label": d,
        className: f,
    } = e;
    return (0, r.jsxs)("div", {
        className: o()(ey.groupContainer, f),
        children: [
            (0, r.jsxs)(g.kL8, {
                "aria-label": d,
                onClick: u,
                children: [
                    null != t &&
                        (0, r.jsx)("div", {
                            className: ey.groupHeader,
                            children: t,
                        }),
                    (0, r.jsxs)("div", {
                        className: ey.groupContent,
                        children: [
                            null != n &&
                                (0, r.jsx)("div", {
                                    className: ey.groupIcon,
                                    children: n,
                                }),
                            (0, r.jsxs)("div", {
                                className: ey.groupMainContent,
                                children: [
                                    (0, r.jsx)(g.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: ey.groupTitle,
                                        children: i,
                                    }),
                                    null != a &&
                                        (0, r.jsx)(g.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: a,
                                        }),
                                    null != l &&
                                        (0, r.jsx)(g.Text, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: l,
                                        }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: ey.groupAction,
                                children: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: ey.groupWarning,
                children: c,
            }),
        ],
    });
}
function eU(e) {
    var { children: t, className: n, onExpand: a } = e,
        s = eA(e, ["children", "className", "onExpand"]);
    let [l, c] = i.useState(!1),
        u = (e) => {
            c(e), null == a || a(e);
        };
    return (0, r.jsx)(g.zF9, {
        className: ey.collapseable,
        collapsibleContent: (0, r.jsx)("div", {
            className: ey.groupCollapsedContainer,
            children: t,
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                ek,
                eC(eI({}, s), {
                    onClick: (e) => {
                        u(!l), null == t || t(e);
                    },
                    className: o()(ey.mainCollapseableContainer, n),
                    action: (0, r.jsxs)("div", {
                        className: ey.groupCollapsedAction,
                        children: [
                            s.action,
                            l
                                ? (0, r.jsx)(g.CJ0, {
                                      size: "custom",
                                      width: ew,
                                      height: ew,
                                      color: "var(--interactive-text-active)",
                                  })
                                : (0, r.jsx)(g.Fbu, {
                                      size: "custom",
                                      width: ew,
                                      height: ew,
                                      color: "var(--interactive-text-active)",
                                  }),
                        ],
                    }),
                }),
            );
        },
    });
}
let eG = new Set([
        M.mM.INITIALIZING,
        M.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        M.mM.WAITING_FOR_MODULE_TRACKING,
        M.mM.WAITING_FOR_OVERLAY_OPEN,
        M.mM.WAITING_FOR_POPOUT_OPEN,
        M.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE,
        M.mM.WAITING_FOR_REACT_INITIALIZATION,
        M.mM.WAITING_FOR_PID_FOCUS,
        M.mM.WAITING_FOR_SUCCESSFUL_SHOW,
    ]),
    eZ = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eF() {
    var e, t, n;
    let { runningGame: a, runningGameApplication: o } = (0, w.Z)(),
        s = null == a ? void 0 : a.pid,
        c = (0, p.e7)(
            [G.default],
            () => (null == a || null == s ? null : G.default.getTrackedGameByPid(s)),
            [a, s],
            l(),
        ),
        { enabledLegacy: u, enabledOOP: d } = (0, p.cj)([et.Z, er.Z], () => {
            if (null == a && null == c)
                return {
                    enabledLegacy: !1,
                    enabledOOP: !1,
                };
            if (null == a) {
                var e, t;
                return {
                    enabledLegacy: null != (e = null == c ? void 0 : c.legacyEnabled) && e,
                    enabledOOP: null != (t = null == c ? void 0 : c.oopEnabled) && t,
                };
            }
            return (0, P.b6)(a, !1, [et.Z, er.Z]);
        }, [a, c]),
        f = (0, p.e7)([P.ZP, et.Z, er.Z], () => (null == a ? null : (0, P.FZ)(a, P.ZP, et.Z, er.Z)), [a], l()),
        [_, h] = i.useState(d),
        [b, y] = i.useState(u),
        [v, T] = i.useState(!1);
    i.useEffect(() => {
        h(d), y(u);
    }, [d, u]);
    let C = !(0, ef.supportsLegacy)(),
        A = !(0, ef.supportsOutOfProcess)(),
        { legacyEnabled: N, oopEnabled: R } = (0, p.cj)([G.default], () => G.default.getGlobalEnabledStatus()),
        j = (e, t) => {
            var n, r, i;
            if (null == a) return;
            let o = !1,
                s = !1;
            switch (t) {
                case L.OverlayToggledClientSettingType.LEGACY_GAME:
                    y(e), E.Z.toggleOverlay(a, e, _), (o = !e && b);
                    break;
                case L.OverlayToggledClientSettingType.OOP_GAME:
                    h(e), E.Z.toggleOverlay(a, b, e), (s = !e && _);
                    break;
                case L.OverlayToggledClientSettingType.LEGACY:
                    O.Z.setEnabled(e, R),
                        (0, L.ou)(e, L.OverlayToggledClientSettingType.LEGACY, null != (n = a.id) ? n : null);
                    break;
                case L.OverlayToggledClientSettingType.OOP:
                    O.Z.setEnabled(N, e),
                        (0, L.ou)(e, L.OverlayToggledClientSettingType.OOP, null != (r = a.id) ? r : null);
            }
            (o || s) &&
                (0, V.l)(
                    o ? L.OverlayToggledClientSettingType.LEGACY_GAME : L.OverlayToggledClientSettingType.OOP_GAME,
                    null != (i = a.id) ? i : null,
                );
        },
        k = (e, t) => {
            let n = !t && e,
                r = !R && _,
                i = !N && b,
                a = !_ && R,
                o = !b && N;
            switch (!0) {
                case n && (r || i) && (a || o):
                    return "both";
                case n && (r || i):
                    return "global";
                default:
                    return "game";
            }
        },
        U = (e, t) => {
            if (null == a) return;
            let n = !1,
                r = !1;
            switch (t) {
                case "game":
                    E.Z.toggleOverlay(a, e, e), y(e), h(e), (n = !e && b), (r = !e && _);
                    break;
                case "global":
                    O.Z.setEnabled(e, e), (n = !e && N), (r = !e && R);
                    break;
                case "both":
                    O.Z.setEnabled(e, e),
                        E.Z.toggleOverlay(a, e, e),
                        y(e),
                        h(e),
                        (n = (!e && N) || (!e && b)),
                        (r = (!e && R) || (!e && _));
            }
            let i = null;
            if (
                (n
                    ? (i =
                          "game" === t
                              ? L.OverlayToggledClientSettingType.LEGACY_GAME
                              : L.OverlayToggledClientSettingType.LEGACY)
                    : r &&
                      (i =
                          "game" === t
                              ? L.OverlayToggledClientSettingType.OOP_GAME
                              : L.OverlayToggledClientSettingType.OOP),
                null != i)
            ) {
                var o;
                (0, V.l)(i, null != (o = a.id) ? o : null);
            }
        },
        Z = C && A,
        F = !N && !R,
        B = !_ && !N && b && !C,
        H = !b && !R && _ && !A,
        Y = (null == c ? void 0 : c.overlayMethod) === M.gl.Disabled,
        W = (null == c ? void 0 : c.state) === M.mM.OVERLAY_RENDERING && !Y,
        K = (null == c ? void 0 : c.state) != null && eG.has(c.state) && !Y,
        z = (null == c ? void 0 : c.overlayMethod) === M.gl.OutOfProcess,
        q = (null == c ? void 0 : c.overlayMethod) === M.gl.OutOfProcessLimitedInteraction,
        Q = (null == c ? void 0 : c.overlayMethod) === M.gl.Hook,
        J =
            (null == c ? void 0 : c.state) === M.mM.OVERLAY_CRASHED ||
            (null == c ? void 0 : c.state) === M.mM.OVERLAY_CRASHED_DISABLED,
        $ = !_ && !b,
        [ee, en] = (() => {
            switch (!0) {
                case W && z:
                    function e(e, t) {
                        return (0, r.jsx)(
                            g.Text,
                            {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-feedback-positive",
                                children: e,
                            },
                            t,
                        );
                    }
                    return [
                        eb.intl.format(eb.t.hFVBIg, {
                            overlayMethod: eb.intl.string(eb.t.a3eXSw),
                            overlayMethodHook: e,
                        }),
                        null,
                    ];
                case W && q:
                    function t(e, t) {
                        return (0, r.jsx)(
                            g.Text,
                            {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-feedback-warning",
                                children: e,
                            },
                            t,
                        );
                    }
                    return [
                        eb.intl.format(eb.t.hFVBIg, {
                            overlayMethod: eb.intl.string(eb.t["506Aba"]),
                            overlayMethodHook: t,
                        }),
                        null,
                    ];
                case W && Q:
                    function n() {
                        var e, t;
                        switch (!0) {
                            case (null == c ? void 0 : c.fullscreenType) !== S.Jx.BORDERLESS_FULLSCREEN:
                                return eb.intl.string(eb.t.mJmbeC);
                            case A:
                                return eb.intl.string(eb.t.C7bLTQ);
                            case !(null != (e = null == c ? void 0 : c.oopEnabled) && e):
                                return eb.intl.string(eb.t.WiY24u);
                            case !R:
                                return eb.intl.string(eb.t.cAFVsL);
                            case !(null != (t = null == c ? void 0 : c.supportsOutOfProcess) && t):
                                return eb.intl.string(eb.t.XcGEcs);
                            default:
                                return eb.intl.string(eb.t.bJXH2v);
                        }
                    }
                    function i(e, t) {
                        return (0, r.jsx)(
                            g.Text,
                            {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: e,
                            },
                            t,
                        );
                    }
                    return [
                        eb.intl.format(eb.t.hFVBIg, {
                            overlayMethod: eb.intl.string(eb.t.bvlpDR),
                            overlayMethodHook: i,
                        }),
                        n(),
                    ];
                case J:
                    return [eb.intl.string(eb.t.OFC2aw), null];
                case Z:
                    return [eb.intl.string(eb.t.m7X4az), null];
                case F:
                    return [eb.intl.string(eb.t["9DUS5l"]), null];
                case $:
                    return [eb.intl.string(eb.t.nQ9EdJ), null];
                case B:
                case H:
                    return [eb.intl.string(eb.t.VWUn0a), null];
                case K:
                    if (z) return [eb.intl.string(eb.t["s8+CFq"]), null];
                    if (Q) return [eb.intl.string(eb.t.JEEdqt), null];
                    if (q) return [eb.intl.string(eb.t.pzBMwY), null];
                    return [eb.intl.string(eb.t["2Xhy9k"]), null];
                case null == c:
                    return [eb.intl.string(eb.t.vwHPRi), null];
                case Y: {
                    let e =
                        (null == c ? void 0 : c.fullscreenType) === S.Jx.FULLSCREEN
                            ? eb.intl.string(eb.t.mJmbeC)
                            : null;
                    return [eb.intl.string(eb.t.VPW4XY), e];
                }
                default:
                    return [eb.intl.string(eb.t.ONovP5), null];
            }
        })();
    (0, I.ZP)(() => {
        E.Z.getDetectableGames();
    });
    let [ei, ea] = i.useMemo(
        () =>
            K
                ? ["text-muted", g.TVs.colors.TEXT_MUTED.css]
                : W && q
                  ? ["text-feedback-warning", g.TVs.colors.TEXT_FEEDBACK_WARNING.css]
                  : W && z
                    ? ["text-feedback-positive", g.TVs.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : W && Q
                      ? ["text-strong", g.TVs.colors.TEXT_STRONG.css]
                      : ["interactive-text-default", g.TVs.colors.INTERACTIVE_TEXT_DEFAULT.css],
        [K, W, q, z, Q],
    );
    return null == a
        ? null
        : (0, r.jsxs)(eU, {
              onExpand: T,
              className: v ? ey.expandedContainer : void 0,
              title: (0, r.jsxs)(r.Fragment, {
                  children: [
                      null !=
                      (n =
                          null != (t = null != (e = null == o ? void 0 : o.name) ? e : null == f ? void 0 : f.name)
                              ? t
                              : null == a
                                ? void 0
                                : a.gameName)
                          ? n
                          : "",
                      null != f && f.verified
                          ? (0, r.jsx)(m.u, {
                                text: eb.intl.string(eb.t["4PJP5p"]),
                                children: (0, r.jsx)(x.Z, {
                                    size: eR,
                                    color: g.TVs.colors.BACKGROUND_BRAND.css,
                                    children: (0, r.jsx)(g.kmB, {
                                        size: "custom",
                                        width: eR,
                                        height: eR,
                                        color: g.TVs.colors.WHITE.css,
                                    }),
                                }),
                            })
                          : null,
                  ],
              }),
              description: ee,
              hint: null != en ? en : void 0,
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      W || K
                          ? (0, r.jsx)(g.pzj, {
                                size: "xxs",
                                color: ea,
                            })
                          : (0, r.jsx)("div", { className: ey.playingDot }),
                      (0, r.jsx)(g.Text, {
                          variant: "text-xs/semibold",
                          color: ei,
                          children: eb.intl.string(eb.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, r.jsx)(D.Z, {
                  game: o,
                  pid: null == a ? void 0 : a.pid,
                  size: D.A.MEDIUM,
              }),
              "aria-label": eb.intl.string(eb.t["87O5GC"]),
              action: (0, r.jsx)(g.P3F, {
                  onClick: (e) => eZ(e),
                  children: (0, r.jsx)(g.rsf, {
                      checked: (_ && R) || (b && N),
                      disabled: Z,
                      onChange: (e) => {
                          U(e, k(e, (_ && R) || (b && N)));
                      },
                  }),
              }),
              warning: (0, r.jsx)(X.Z, {
                  className: ey.systemServiceWarning,
                  game: a,
              }),
              children: [
                  (0, r.jsx)(ek, {
                      title: eb.intl.string(eb.t["7BlVIs"]),
                      description: eb.intl.string(eb.t.ndgADE),
                      hint: R ? void 0 : eb.intl.string(eb.t.cAFVsL),
                      "aria-label": eb.intl.string(eb.t["7BlVIs"]),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.rsf, {
                                  checked: _ && R,
                                  disabled: A,
                                  onChange: (e) => {
                                      e && !R
                                          ? j(e, L.OverlayToggledClientSettingType.OOP)
                                          : j(e, L.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: ey.emptySpacer }),
                          ],
                      }),
                  }),
                  (0, r.jsx)(ek, {
                      title: eb.intl.string(eb.t.BfFpW1),
                      description: eb.intl.string(eb.t.OzInYk),
                      hint: N ? void 0 : eb.intl.string(eb.t["3sYHXm"]),
                      "aria-label": eb.intl.string(eb.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.rsf, {
                                  checked: b && N,
                                  disabled: C,
                                  onChange: (e) => {
                                      e && !N
                                          ? j(e, L.OverlayToggledClientSettingType.LEGACY)
                                          : j(e, L.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: ey.emptySpacer }),
                          ],
                      }),
                  }),
              ],
          });
}
function eB(e) {
    let { game: t, gameApplication: n } = e,
        a = i.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        o = (0, p.e7)([C.Z], () => (null != n ? n : C.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(D.Z, {
        game: o,
        pid: a,
        size: D.A.SMALL,
    });
}
function eV(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: a,
            getEnabledFromStatus: o,
            onChange: s,
            clientSettingType: l,
            ariaLabel: c,
        } = e,
        u = (0, p.cj)([P.ZP, et.Z, er.Z], () => (0, P.FZ)(t, P.ZP, et.Z, er.Z)),
        d = (0, p.cj)([et.Z, er.Z], () => (0, P.b6)(t, !1, [et.Z, er.Z]), [t]),
        f = o(d),
        [_, h] = i.useState(f);
    i.useEffect(() => {
        h(f);
    }, [f]);
    let m = (e) => {
        let n = !e && _;
        if ((h(e), s(e, u, d), n)) {
            var r, i;
            (0, V.l)(l, null != (i = null != (r = u.id) ? r : null == t ? void 0 : t.id) ? i : null);
        }
    };
    return (0, r.jsx)(ek, {
        title: t.name,
        icon: (0, r.jsx)(eB, {
            game: u,
            gameApplication: n,
        }),
        "aria-label": c,
        action: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(g.rsf, {
                    checked: _,
                    disabled: a,
                    onChange: (e) => m(e),
                }),
                (0, r.jsx)("div", { className: ey.emptySpacer }),
            ],
        }),
    });
}
function eH() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, p.cj)([G.default], () => G.default.getGlobalEnabledStatus()),
        o = (0, p.Wu)([P.ZP], () => P.ZP.getGamesSeen(!0)).filter((e) => !(0, q.le)(e)),
        s = (0, A.Z)(o.map((e) => e.id)),
        l = !(0, ef.supportsLegacy)(),
        c = (e) => {
            var t, r;
            O.Z.setEnabled(e, a);
            let i = null != (r = null == (t = P.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, L.ou)(e, L.OverlayToggledClientSettingType.LEGACY, i),
                !e && n && (0, V.l)(L.OverlayToggledClientSettingType.LEGACY, i);
        },
        u = (e, t, n) => {
            let { enabledOOP: r } = n;
            E.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                (0, ef.supportsLegacy)()
                    ? l
                        ? eb.intl.string(eb.t.r9jEVw)
                        : eb.intl.string(eb.t.OzInYk)
                    : eb.intl.string(eb.t["8Ox6/E"]),
            [l],
        );
    return 0 === o.length
        ? (0, r.jsx)(ek, {
              title: eb.intl.string(eb.t.BfFpW1),
              description: d,
              "aria-label": eb.intl.string(eb.t.BfFpW1),
              className: ey.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(g.rsf, {
                          checked: n,
                          disabled: l,
                          onChange: (e) => c(e),
                      }),
                      eg.iP && (0, r.jsx)("div", { className: ey.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(eU, {
              onExpand: t,
              className: e ? ey.expandedContainer : void 0,
              title: eb.intl.string(eb.t.BfFpW1),
              description: d,
              "aria-label": eb.intl.string(eb.t.BfFpW1),
              action: (0, r.jsx)(g.P3F, {
                  onClick: (e) => eZ(e),
                  children: (0, r.jsx)(g.rsf, {
                      checked: n,
                      disabled: l,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: ey.subtitleContainer,
                      children: (0, r.jsx)(g.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eb.intl.string(eb.t.FzoWRo),
                      }),
                  }),
                  (0, r.jsx)(g.zJl, {
                      className: ey.scroller,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              eV,
                              {
                                  rawGame: e,
                                  clientSettingType: L.OverlayToggledClientSettingType.LEGACY_GAME,
                                  supportDisabled: l,
                                  gameApplication: s[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: u,
                                  ariaLabel: eb.intl.format(eb.t.hvPYsF, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eY() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: a } = (0, p.cj)([G.default], () => G.default.getGlobalEnabledStatus()),
        o = !(0, ef.supportsOutOfProcess)(),
        s = (0, p.Wu)([P.ZP], () => P.ZP.getGamesSeen(!0)).filter((e) => !(0, q.le)(e)),
        l = (0, A.Z)(s.map((e) => e.id)),
        c = (e) => {
            var t, r;
            let i = !e && n;
            O.Z.setEnabled(a, e);
            let o = null != (r = null == (t = P.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, L.ou)(e, L.OverlayToggledClientSettingType.OOP, o),
                i && (0, V.l)(L.OverlayToggledClientSettingType.OOP, o);
        },
        u = (e, t, n) => {
            let { enabledLegacy: r } = n;
            E.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                eg.iP ? (o ? eb.intl.string(eb.t.C7bLTQ) : eb.intl.string(eb.t.ndgADE)) : eb.intl.string(eb.t.m7X4az),
            [o],
        );
    return 0 === s.length
        ? (0, r.jsx)(ek, {
              title: eb.intl.string(eb.t["7BlVIs"]),
              description: d,
              "aria-label": eb.intl.string(eb.t["7BlVIs"]),
              className: ey.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(g.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e) => c(e),
                      }),
                      eg.iP && (0, r.jsx)("div", { className: ey.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(eU, {
              onExpand: t,
              className: e ? ey.expandedContainer : void 0,
              title: eb.intl.string(eb.t["7BlVIs"]),
              description: d,
              "aria-label": eb.intl.string(eb.t["7BlVIs"]),
              action: (0, r.jsx)(g.P3F, {
                  onClick: (e) => eZ(e),
                  children: (0, r.jsx)(g.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: ey.subtitleContainer,
                      children: (0, r.jsx)(g.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eb.intl.string(eb.t.FzoWRo),
                      }),
                  }),
                  (0, r.jsx)(g.zJl, {
                      className: ey.scroller,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              eV,
                              {
                                  rawGame: e,
                                  clientSettingType: L.OverlayToggledClientSettingType.OOP_GAME,
                                  gameApplication: l[t],
                                  supportDisabled: o,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: u,
                                  ariaLabel: eb.intl.format(eb.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eW() {
    return (0, k.T_)(T.Z.USER_SETTINGS)
        ? (0, r.jsx)(ek, {
              title: eb.intl.string(eb.t["z4/l+V"]),
              description: eb.intl.string(eb.t["3aZq/0"]),
              action: (0, r.jsx)(g.Button, {
                  variant: "primary",
                  text: eb.intl.string(eb.t.s2nVhG),
                  onClick: () => {
                      (0, Y.N)(T.Z.USER_SETTINGS, eh.IlC.APP);
                  },
              }),
              "aria-label": eb.intl.string(eb.t["z4/l+V"]),
          })
        : null;
}
function eK(e) {
    var t;
    let { isLegacySettings: n = !1 } = e,
        i = (0, p.e7)([ea.ZP], () => ea.ZP.getOverlayKeybind()),
        a = !(0, ef.supportsLegacy)(),
        o = !(0, ef.supportsOutOfProcess)(),
        [s, l] = (0, p.Wu)([P.ZP], () => [P.ZP.canShowAdminWarning, P.ZP.getVisibleGame()], []),
        c = (0, Q.hi)(),
        d = null != l && l.elevated && s && !c,
        f = !(0, ea.I1)(null != (t = null == i ? void 0 : i.shortcut) ? t : []);
    function _(e) {
        u()(null != i, "Keybind should never be undefined"), b.Z.setKeybind(eC(eI({}, i), { shortcut: e }));
    }
    return (0, r.jsx)("div", {
        className: ey.keybindMainContainer,
        children: (0, r.jsxs)("div", {
            className: ey.keybindContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: ey.keybindHeaderContainer,
                    children: [
                        (0, r.jsx)(g.Text, {
                            variant: n ? "text-md/semibold" : "text-md/medium",
                            color: "text-strong",
                            children: eb.intl.string(eb.t.VsAZcC),
                        }),
                        d &&
                            (0, r.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: ey.keybindAdminWarning,
                                children: eb.intl.string(eb.t.NsowVa),
                            }),
                        f &&
                            (0, r.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: ey.keybindAdminWarning,
                                children: eb.intl.string(eb.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: ey.keybindRecorderContainer,
                    children: (0, r.jsx)(v.Z, {
                        disabled: a && o,
                        defaultValue: null != i ? i.shortcut : [],
                        onChange: _,
                    }),
                }),
            ],
        }),
    });
}
function ez(e) {
    return [
        {
            title: eb.t.eVE4LX,
            description: eb.t["72WNqk"],
            disabledSetting: j.i.TEXT_CHAT,
            key: ep.n.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
        },
        {
            title: eb.t.oifnSh,
            description: eb.t.bgU5r0,
            disabledSetting: j.i.WELCOME_GENERAL,
            key: ep.n.OVERLAY_NOTIFICATIONS_WELCOME,
        },
        {
            title: eb.t.hqsZJW,
            description: eb.t.kHjdqc,
            disabledSetting: j.i.GO_LIVE_NUDGE,
            key: ep.n.OVERLAY_NOTIFICATIONS_GO_LIVE,
        },
        {
            title: eb.t.sop3rn,
            description: eb.t.pjgffc,
            disabledSetting: j.i.GAME_ACTIVITY,
            key: ep.n.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
        },
        {
            title: eb.t["2QVhbb"],
            description: eb.t.wQ4ilB,
            disabledSetting: j.i.NOW_PLAYING,
            key: ep.n.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
        },
        e && {
            title: eb.t["5/21FT"],
            description: eb.t.EIzwfA,
            disabledSetting: j.i.FRIEND_STREAM_WATCH_NUDGE,
            key: ep.n.OVERLAY_NOTIFICATIONS_FRIEND_STREAM_WATCH,
            usePredicate: () => {
                let { enabled: e } = (0, k.aq)("OverlayV3StreamWatchNudge");
                return e;
            },
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
}
function eq() {
    let { enabled: e } = (0, k.aq)("OverlayV3StreamWatchNudge"),
        t = ez(e),
        n = (e) => (t) => {
            O.Z.setNotificationDisabledSetting(e, !t);
        },
        i = (0, p.e7)([F.Z], () => F.Z.getDisabledNotifications());
    return (0, r.jsxs)("div", {
        className: ey.notificationSettingsContainer,
        children: [
            (0, r.jsx)(g.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: eb.intl.string(eb.t.xOE5bA),
            }),
            t.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: ey.notificationItem,
                        children: [
                            (0, r.jsxs)("div", {
                                className: ey.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(g.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: eb.intl.string(e.title),
                                    }),
                                    (0, r.jsx)(g.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eb.intl.string(e.description),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(g.rsf, {
                                checked: !i.has(e.disabledSetting),
                                onChange: n(e.disabledSetting),
                            }),
                        ],
                    },
                    e.disabledSetting,
                ),
            ),
        ],
    });
}
function eQ(e) {
    let t = eX(e.username);
    return (t.user = e), t;
}
function eX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = "456" + Math.floor(1000000 * Math.random());
    return {
        voiceState: new ee.Z({
            channelId: "123",
            userId: i,
            sessionId: "789",
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: r,
        }),
        user: new $.Z({
            id: i,
            username: e,
        }),
        member: {
            nick: e,
            userId: i,
            guildId: "890",
            roles: [],
            hoistRoleId: null,
            premiumSince: null,
            joinedAt: new Date().toISOString(),
            colorString: "#000000",
            colorStrings: {
                primaryColor: "#000000",
                secondaryColor: null,
                tertiaryColor: null,
            },
        },
        nick: e,
        comparator: e,
        _isPlaceholder: !0,
    };
}
function eJ() {
    return (0, J.createChannelRecord)({
        id: "123",
        name: "Test Channel",
        type: eh.d4z.GUILD_VOICE,
        guild_id: "456",
    });
}
function e$(e) {
    var t, n;
    let { isLegacySettings: a = !1 } = e,
        s = (0, p.e7)([ei.default], () => ei.default.getCurrentUser()),
        {
            avatarSizeMode: l,
            displayNameMode: c,
            displayUserMode: u,
        } = (0, p.cj)([es.default], () => ({
            avatarSizeMode: es.default.getAvatarSizeMode(),
            displayNameMode: es.default.getDisplayNameMode(),
            displayUserMode: es.default.getDisplayUserMode(),
        })),
        [d] = i.useState(() => [
            eX(eb.intl.string(eb.t.C0ZDvo), !0, !1),
            eX(eb.intl.string(eb.t.iOtj8E), !1, !1, !0),
            eX(eb.intl.string(eb.t["0oqNgL"]), !1, !0),
        ]),
        f = (0, p.e7)([B.Z, en.Z], () => {
            let e = B.Z.getWidgetByType(eh.Odu.VOICE_V3);
            if (null == e) return null;
            let t = en.Z.getWidget(e.id);
            return null != t && (0, W.Aw)(t) ? t : null;
        }),
        _ = null != (n = null == f || null == (t = f.meta) ? void 0 : t.voiceStatesMaxShown) ? n : eE.At,
        h = [null != s ? eQ(s) : null, ...d].filter(ec.lm),
        m = [new Map(h.map((e) => [e.user.id, e])), h.map((e) => e.user.id)],
        E = (0, r.jsx)(g.f6W, {
            theme: eh.BRd.MIDNIGHT,
            children: (e) => {
                var t, n;
                return (0, r.jsxs)("div", {
                    className: o()(ey.widgetContainer, e),
                    children: [
                        (0, r.jsx)("div", {
                            className: ey.voiceWidgetContainer,
                            children: (0, r.jsx)(K.kI, {
                                id: "voice-widget",
                                title: eb.intl.string(eb.t.KNJ6Vq),
                                channel: eJ(),
                                overlayVoiceStates: m,
                                displayNameMode: c,
                                displayUserMode: u,
                                avatarSizeMode: l,
                                widget: eh.Odu.VOICE,
                                anchorLeft: !0,
                                application: null,
                                stream: null,
                                streamApplication: null,
                                streamMetadata: null,
                                locked: !1,
                                pinned: !1,
                                isSettingsPreview: !0,
                                isPreviewingInGame: !1,
                                maxDisplayedVoiceStates: _,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: ey.widgetHeaderContainer,
                            children: [
                                (0, r.jsx)(z.PI, { children: eb.intl.string(eb.t.KNJ6Vq) }),
                                (0, r.jsx)(z.ls, {}),
                                (0, r.jsx)(z.RT, {
                                    id: null != (t = null == f ? void 0 : f.id) ? t : "voice-widget",
                                    pinned: null != (n = null == f ? void 0 : f.pinned) && n,
                                }),
                            ],
                        }),
                    ],
                });
            },
        });
    return a
        ? E
        : (0, r.jsx)("div", {
              className: ey.widgetSettingsContainer,
              children: E,
          });
}
function e0() {
    var e, t;
    let {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: a,
        } = (0, p.cj)([es.default], () => ({
            avatarSizeMode: es.default.getAvatarSizeMode(),
            displayNameMode: es.default.getDisplayNameMode(),
            displayUserMode: es.default.getDisplayUserMode(),
        })),
        o = (0, p.e7)([B.Z, en.Z], () => {
            let e = B.Z.getWidgetByType(eh.Odu.VOICE_V3);
            if (null == e) return null;
            let t = en.Z.getWidget(e.id);
            return null != t && (0, W.Aw)(t) ? t : null;
        }),
        s = null != (t = null == o || null == (e = o.meta) ? void 0 : e.voiceStatesMaxShown) ? t : eE.At;
    function l(e) {
        null != o &&
            (e < eD
                ? (0, y.zG)(o.id, { voiceStatesMaxShown: eE.Og })
                : (0, y.zG)(o.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    return (0, r.jsxs)("div", {
        className: ey.voiceSettingsContainer,
        children: [
            (0, r.jsx)(h.y6, {
                label: eb.intl.string(eb.t.dnvZSg),
                options: [
                    {
                        label: eb.intl.string(eb.t.YcOxtr),
                        value: eh.ipw.LARGE,
                    },
                    {
                        label: eb.intl.string(eb.t.BKIKqx),
                        value: eh.ipw.SMALL,
                    },
                ],
                className: ey.select,
                onChange: (e) => O.Z.setAvatarSizeMode(e),
                value: n,
            }),
            (0, r.jsx)(h.y6, {
                label: eb.intl.string(eb.t.J0dpcB),
                options: [
                    {
                        label: eb.intl.string(eb.t.nBmDrT),
                        value: eh.wC$.ALWAYS,
                    },
                    {
                        label: eb.intl.string(eb.t["2OvIZY"]),
                        value: eh.wC$.ONLY_WHILE_SPEAKING,
                    },
                    {
                        label: eb.intl.string(eb.t.ekjlPL),
                        value: eh.wC$.NEVER,
                    },
                ],
                className: ey.select,
                onChange: (e) => O.Z.setDisplayNameMode(e),
                value: i,
            }),
            (0, r.jsx)(e$, { isLegacySettings: !0 }),
            (0, r.jsx)(h.y6, {
                label: eb.intl.string(eb.t.swsWWC),
                options: [
                    {
                        label: eb.intl.string(eb.t.nBmDrT),
                        value: eh.OYC.ALWAYS,
                    },
                    {
                        label: eb.intl.string(eb.t["2OvIZY"]),
                        value: eh.OYC.ONLY_WHILE_SPEAKING,
                    },
                ],
                className: ey.select,
                onChange: (e) => O.Z.setDisplayUserMode(e),
                value: a,
            }),
            (0, r.jsx)("div", {
                className: ey.sliderContainer,
                children: (0, r.jsx)(g.iRW, {
                    label: eb.intl.string(eb.t["X/Uyzc"]),
                    initialValue: s,
                    onValueRender: (e) => (e < eD ? eb.intl.string(eb.t.nrUzFL) : "".concat(Math.floor(e))),
                    minValue: eD - 1,
                    maxValue: ex,
                    onValueChange: l,
                    markers: eL,
                    barStyles: { background: g.TVs.colors.BACKGROUND_MOD_STRONG.css },
                    fillStyles: { background: g.TVs.colors.BACKGROUND_BRAND.css },
                    onMarkerRender: (e) => (e < eD ? eb.intl.string(eb.t.nrUzFL) : "".concat(Math.floor(e))),
                }),
            }),
        ],
    });
}
function e1(e) {
    let { showDivider: t = !1 } = e,
        [n, i] = (0, N.US)([_.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        a = () => {
            i(em.L.DISMISS);
        };
    return ((0, I.ZP)(() => () => {
        i(em.L.AUTO_DISMISS);
    }),
    n !== _.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)("div", {
              className: ey.overlaySettingsNux,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: eO.Z,
                          alt: eb.intl.string(eb.t.mdXZh1),
                          className: ey.nuxFirstImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: ey.mainTitleContainer,
                          children: [
                              (0, r.jsx)(g.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: eb.intl.string(eb.t.jzjJQg),
                              }),
                              (0, r.jsx)(g.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: eb.intl.string(eb.t["5dOfxb"]),
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: ev.Z,
                          alt: eb.intl.string(eb.t.mdXZh1),
                          className: ey.nuxUserSettingsImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: ey.closeCircleButton,
                      children: (0, r.jsx)(g.Button, {
                          variant: "primary",
                          text: eb.intl.string(eb.t.Q26diF),
                          onClick: () => a(),
                      }),
                  }),
                  t ? (0, r.jsx)("div", { className: ey.nuxDivider }) : null,
              ],
          });
}
function e3(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        a = null == n ? void 0 : n.id,
        o = (0, p.e7)([F.Z], () => F.Z.isLimitedInteractionOverrideEnabled(a), [a]),
        s = i.useMemo(() => null != t && (0, Z.H8)(t.pid), [t]),
        l = (0, U.Z)({ location: "overlay_user_settings" }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: u } = (0, p.cj)([es.default], () => ({
            disableClickableRegions: es.default.disableClickableRegions,
            shouldShowKeybindIndicators: es.default.showKeybindIndicators,
        }));
    function d() {
        O.Z.setDisableClickableRegions(!c);
    }
    function f(e) {
        null != n && (0, H.rI)(n.id, e);
    }
    return (0, r.jsxs)("div", {
        className: ey.overlayEnabledSettingsContainer,
        children: [
            (0, r.jsx)(eK, { isLegacySettings: !0 }),
            l &&
                (0, r.jsx)(g.rsf, {
                    label: eb.intl.string(eb.t.XZTl9r),
                    checked: u,
                    onChange: (e) => O.Z.setShowKeybindIndicators(e),
                }),
            null != a &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: ey.limitedInteractionOverrideContainer,
                            children: [
                                (0, r.jsx)(g.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: eb.intl.string(eb.t.wgVQND),
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: eb.intl.string(eb.t["5SsyF5"]),
                                }),
                            ],
                        }),
                        (0, r.jsx)(g.rsf, {
                            checked: o || s,
                            disabled: s,
                            onChange: (e) => f(e),
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: ey.limitedInteractionOverrideContainer,
                        children: [
                            (0, r.jsx)(g.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: eb.intl.string(eb.t["+eFXxq"]),
                            }),
                            (0, r.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eb.intl.string(eb.t.kivMAp),
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.rsf, {
                        checked: !c,
                        onChange: d,
                    }),
                ],
            }),
        ],
    });
}
function e2() {
    let { runningGame: e, runningGameApplication: t } = (0, w.Z)(),
        n = (0, p.e7)([ei.default], () => ei.default.getCurrentUser());
    return ((0, I.ZP)(() => {
        if (eu.isPlatformEmbedded) return (0, R.Ky)(), R.P7;
    }),
    ej(),
    null == n)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(e_.Z, {
                      title: eb.intl.string(eb.t["9cb1Uz"]),
                      children: [
                          (0, r.jsx)(e1, { showDivider: !0 }),
                          (0, r.jsxs)("div", {
                              className: ey.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eF, {}),
                                  (0, r.jsx)(eY, {}),
                                  (0, r.jsx)(eH, {}),
                                  (0, r.jsx)(eW, {}),
                              ],
                          }),
                          (0, r.jsx)("div", { className: ey.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(e3, {
                              runningGame: e,
                              runningGameApplication: t,
                          }),
                          (0, r.jsx)("div", { className: ey.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(g.gNt, {
                      label: eb.intl.string(eb.t.r1TZfh),
                      children: [(0, r.jsx)(e0, {}), (0, r.jsx)("div", { className: ey.settingsDivider })],
                  }),
                  (0, r.jsx)(eq, {}),
              ],
          });
}
