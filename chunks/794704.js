n.d(t, { Z: () => e0 }), n(953529), n(388685);
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
    m = n(199849),
    h = n(481060),
    g = n(224706),
    E = n(660216),
    b = n(765250),
    y = n(13245),
    O = n(825209),
    v = n(593472),
    S = n(493773),
    I = n(100527),
    T = n(812206),
    A = n(835473),
    C = n(243778),
    N = n(594190),
    P = n(137920),
    R = n(320724),
    w = n(925329),
    D = n(297700),
    x = n(444295),
    L = n(486016),
    j = n(837268),
    M = n(32300),
    k = n(809357),
    U = n(371651),
    G = n(829907),
    Z = n(624864),
    B = n(610394),
    F = n(957148),
    V = n(932404),
    H = n(398269),
    Y = n(340101),
    W = n(243487),
    K = n(430561),
    z = n(509003),
    q = n(865066),
    Q = n(894300),
    X = n(131704),
    J = n(598077),
    $ = n(189786),
    ee = n(77498),
    et = n(355863),
    en = n(283595),
    er = n(594174),
    ei = n(556296),
    ea = n(808506),
    eo = n(237997),
    es = n(626135),
    el = n(823379),
    ec = n(358085),
    eu = n(13140),
    ed = n(145597),
    ef = n(273313),
    ep = n(981631),
    e_ = n(921944),
    em = n(987650),
    eh = n(501787),
    eg = n(388032),
    eE = n(607547),
    eb = n(131970),
    ey = n(730462);
function eO(e, t, n) {
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
function ev(e) {
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
                eO(e, t, n[t]);
            });
    }
    return e;
}
function eS(e, t) {
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
function eI(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eS(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eT(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eA(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eA(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let eC = eL(null),
    eN = 20,
    eP = 16,
    eR = 1,
    ew = 25,
    eD = [0, 5, 10, 15, 20, 25];
function ex() {
    let e = eL(eC);
    f().isEqual(e, eC) || (es.default.track(ep.rMx.OVERLAY_SETTINGS_UPDATED, e), (eC = e));
}
function eL(e) {
    var t;
    let n = eo.default.getNotificationPositionMode(),
        r = n !== ep._vf.DISABLED,
        i = ei.ZP.getOverlayKeybind(),
        a = ei.ZP.getOverlayChatKeybind();
    return {
        enabled: ea.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: Z.Z.isNotificationDisabled(em.n0.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, eu.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, eu.BB)(a.shortcut) : null,
        text_opacity_slider: eo.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : ea.default.enabled,
    };
}
function ej(e) {
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
        className: o()(eE.groupContainer, f),
        children: [
            (0, r.jsxs)(h.kL8, {
                "aria-label": d,
                onClick: u,
                children: [
                    null != t &&
                        (0, r.jsx)("div", {
                            className: eE.groupHeader,
                            children: t,
                        }),
                    (0, r.jsxs)("div", {
                        className: eE.groupContent,
                        children: [
                            null != n &&
                                (0, r.jsx)("div", {
                                    className: eE.groupIcon,
                                    children: n,
                                }),
                            (0, r.jsxs)("div", {
                                className: eE.groupMainContent,
                                children: [
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        className: eE.groupTitle,
                                        children: i,
                                    }),
                                    null != a &&
                                        (0, r.jsx)(h.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: a,
                                        }),
                                    null != l &&
                                        (0, r.jsx)(h.Text, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: l,
                                        }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: eE.groupAction,
                                children: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: eE.groupWarning,
                children: c,
            }),
        ],
    });
}
function eM(e) {
    var { children: t, className: n, onExpand: a } = e,
        s = eT(e, ["children", "className", "onExpand"]);
    let [l, c] = i.useState(!1),
        u = (e) => {
            c(e), null == a || a(e);
        };
    return (0, r.jsx)(h.zF9, {
        className: eE.collapseable,
        collapsibleContent: (0, r.jsx)("div", {
            className: eE.groupCollapsedContainer,
            children: t,
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                ej,
                eI(ev({}, s), {
                    onClick: (e) => {
                        u(!l), null == t || t(e);
                    },
                    className: o()(eE.mainCollapseableContainer, n),
                    action: (0, r.jsxs)("div", {
                        className: eE.groupCollapsedAction,
                        children: [
                            s.action,
                            l
                                ? (0, r.jsx)(h.CJ0, {
                                      size: "custom",
                                      width: eN,
                                      height: eN,
                                      color: "var(--interactive-active)",
                                  })
                                : (0, r.jsx)(h.Fbu, {
                                      size: "custom",
                                      width: eN,
                                      height: eN,
                                      color: "var(--interactive-active)",
                                  }),
                        ],
                    }),
                }),
            );
        },
    });
}
let ek = new Set([
        j.mM.INITIALIZING,
        j.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        j.mM.WAITING_FOR_MODULE_TRACKING,
        j.mM.WAITING_FOR_OVERLAY_OPEN,
        j.mM.WAITING_FOR_POPOUT_OPEN,
        j.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE,
        j.mM.WAITING_FOR_REACT_INITIALIZATION,
        j.mM.WAITING_FOR_PID_FOCUS,
        j.mM.WAITING_FOR_SUCCESSFUL_SHOW,
    ]),
    eU = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eG(e) {
    var t, n, a;
    let { runningGame: o, runningGameApplication: s } = e,
        c = null == o ? void 0 : o.pid,
        u = (0, p.e7)(
            [U.default],
            () => (null == o || null == c ? null : U.default.getTrackedGameByPid(c)),
            [o, c],
            l(),
        ),
        { enabledLegacy: d, enabledOOP: f } = (0, p.cj)([ee.Z, en.Z], () => {
            if (null == o && null == u)
                return {
                    enabledLegacy: !1,
                    enabledOOP: !1,
                };
            if (null == o) {
                var e, t;
                return {
                    enabledLegacy: null != (e = null == u ? void 0 : u.legacyEnabled) && e,
                    enabledOOP: null != (t = null == u ? void 0 : u.oopEnabled) && t,
                };
            }
            return (0, N.b6)(o, !1, [ee.Z, en.Z]);
        }, [o, u]),
        _ = (0, p.e7)([N.ZP, ee.Z, en.Z], () => (null == o ? null : (0, N.FZ)(o, N.ZP, ee.Z, en.Z)), [o], l()),
        [m, E] = i.useState(f),
        [b, O] = i.useState(d),
        [I, T] = i.useState(!1);
    i.useEffect(() => {
        E(f), O(d);
    }, [f, d]);
    let A = !(0, ed.supportsLegacy)(),
        C = !(0, ed.supportsOutOfProcess)(),
        { legacyEnabled: P, oopEnabled: R } = (0, p.cj)([U.default], () => U.default.getGlobalEnabledStatus()),
        L = (e, t) => {
            var n, r, i;
            if (null == o) return;
            let a = !1,
                s = !1;
            switch (t) {
                case x.OverlayToggledClientSettingType.LEGACY_GAME:
                    O(e), g.Z.toggleOverlay(o, e, m), (a = !e && b);
                    break;
                case x.OverlayToggledClientSettingType.OOP_GAME:
                    E(e), g.Z.toggleOverlay(o, b, e), (s = !e && m);
                    break;
                case x.OverlayToggledClientSettingType.LEGACY:
                    y.Z.setEnabled(e, R),
                        (0, x.ou)(e, x.OverlayToggledClientSettingType.LEGACY, null != (n = o.id) ? n : null);
                    break;
                case x.OverlayToggledClientSettingType.OOP:
                    y.Z.setEnabled(P, e),
                        (0, x.ou)(e, x.OverlayToggledClientSettingType.OOP, null != (r = o.id) ? r : null);
            }
            (a || s) &&
                (0, F.l)(
                    a ? x.OverlayToggledClientSettingType.LEGACY_GAME : x.OverlayToggledClientSettingType.OOP_GAME,
                    null != (i = o.id) ? i : null,
                );
        },
        M = (e, t) => {
            let n = !t && e,
                r = !R && m,
                i = !P && b,
                a = !m && R,
                o = !b && P;
            switch (!0) {
                case n && (r || i) && (a || o):
                    return "both";
                case n && (r || i):
                    return "global";
                default:
                    return "game";
            }
        },
        k = (e, t) => {
            if (null == o) return;
            let n = !1,
                r = !1;
            switch (t) {
                case "game":
                    g.Z.toggleOverlay(o, e, e), O(e), E(e), (n = !e && b), (r = !e && m);
                    break;
                case "global":
                    y.Z.setEnabled(e, e), (n = !e && P), (r = !e && R);
                    break;
                case "both":
                    y.Z.setEnabled(e, e),
                        g.Z.toggleOverlay(o, e, e),
                        O(e),
                        E(e),
                        (n = (!e && P) || (!e && b)),
                        (r = (!e && R) || (!e && m));
            }
            let i = null;
            if (
                (n
                    ? (i =
                          "game" === t
                              ? x.OverlayToggledClientSettingType.LEGACY_GAME
                              : x.OverlayToggledClientSettingType.LEGACY)
                    : r &&
                      (i =
                          "game" === t
                              ? x.OverlayToggledClientSettingType.OOP_GAME
                              : x.OverlayToggledClientSettingType.OOP),
                null != i)
            ) {
                var a;
                (0, F.l)(i, null != (a = o.id) ? a : null);
            }
        },
        G = A && C,
        Z = !P && !R,
        B = !m && !P && b && !A,
        V = !b && !R && m && !C,
        H = (null == u ? void 0 : u.overlayMethod) === j.gl.Disabled,
        Y = (null == u ? void 0 : u.state) === j.mM.OVERLAY_RENDERING && !H,
        W = (null == u ? void 0 : u.state) != null && ek.has(u.state) && !H,
        K = (null == u ? void 0 : u.overlayMethod) === j.gl.OutOfProcess,
        z = (null == u ? void 0 : u.overlayMethod) === j.gl.OutOfProcessLimitedInteraction,
        q = (null == u ? void 0 : u.overlayMethod) === j.gl.Hook,
        X =
            (null == u ? void 0 : u.state) === j.mM.OVERLAY_CRASHED ||
            (null == u ? void 0 : u.state) === j.mM.OVERLAY_CRASHED_DISABLED,
        J = !m && !b,
        [$, et] = (() => {
            switch (!0) {
                case Y && K:
                    function e(e, t) {
                        return (0, r.jsx)(
                            h.Text,
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
                        eg.intl.format(eg.t.hFVBIg, {
                            overlayMethod: eg.intl.string(eg.t.a3eXSw),
                            overlayMethodHook: e,
                        }),
                        null,
                    ];
                case Y && z:
                    function t(e, t) {
                        return (0, r.jsx)(
                            h.Text,
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
                        eg.intl.format(eg.t.hFVBIg, {
                            overlayMethod: eg.intl.string(eg.t["506Aba"]),
                            overlayMethodHook: t,
                        }),
                        null,
                    ];
                case Y && q:
                    function n() {
                        var e, t;
                        switch (!0) {
                            case (null == u ? void 0 : u.fullscreenType) !== v.Jx.BORDERLESS_FULLSCREEN:
                                return eg.intl.string(eg.t.mJmbeC);
                            case C:
                                return eg.intl.string(eg.t.C7bLTQ);
                            case !(null != (e = null == u ? void 0 : u.oopEnabled) && e):
                                return eg.intl.string(eg.t.WiY24u);
                            case !R:
                                return eg.intl.string(eg.t.cAFVsL);
                            case !(null != (t = null == u ? void 0 : u.supportsOutOfProcess) && t):
                                return eg.intl.string(eg.t.XcGEcs);
                            default:
                                return eg.intl.string(eg.t.bJXH2v);
                        }
                    }
                    function i(e, t) {
                        return (0, r.jsx)(
                            h.Text,
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
                        eg.intl.format(eg.t.hFVBIg, {
                            overlayMethod: eg.intl.string(eg.t.bvlpDR),
                            overlayMethodHook: i,
                        }),
                        n(),
                    ];
                case X:
                    return [eg.intl.string(eg.t.OFC2aw), null];
                case G:
                    return [eg.intl.string(eg.t.m7X4az), null];
                case Z:
                    return [eg.intl.string(eg.t["9DUS5l"]), null];
                case J:
                    return [eg.intl.string(eg.t.nQ9EdJ), null];
                case B:
                case V:
                    return [eg.intl.string(eg.t.VWUn0a), null];
                case W:
                    if (K) return [eg.intl.string(eg.t["s8+CFq"]), null];
                    if (q) return [eg.intl.string(eg.t.JEEdqt), null];
                    if (z) return [eg.intl.string(eg.t.pzBMwY), null];
                    return [eg.intl.string(eg.t["2Xhy9k"]), null];
                case null == u:
                    return [eg.intl.string(eg.t.vwHPRi), null];
                case H: {
                    let e =
                        (null == u ? void 0 : u.fullscreenType) === v.Jx.FULLSCREEN
                            ? eg.intl.string(eg.t.mJmbeC)
                            : null;
                    return [eg.intl.string(eg.t.VPW4XY), e];
                }
                default:
                    return [eg.intl.string(eg.t.ONovP5), null];
            }
        })();
    (0, S.ZP)(() => {
        g.Z.getDetectableGames();
    });
    let [er, ei] = i.useMemo(
        () =>
            W
                ? ["text-muted", h.TVs.colors.TEXT_MUTED.css]
                : Y && z
                  ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css]
                  : Y && K
                    ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : Y && q
                      ? ["text-strong", h.TVs.colors.TEXT_STRONG.css]
                      : ["interactive-normal", h.TVs.colors.INTERACTIVE_NORMAL.css],
        [W, Y, z, K, q],
    );
    return null == o
        ? null
        : (0, r.jsxs)(eM, {
              onExpand: T,
              className: I ? eE.expandedContainer : void 0,
              title: (0, r.jsxs)(r.Fragment, {
                  children: [
                      null !=
                      (a =
                          null != (n = null != (t = null == s ? void 0 : s.name) ? t : null == _ ? void 0 : _.name)
                              ? n
                              : null == o
                                ? void 0
                                : o.gameName)
                          ? a
                          : "",
                      null != _ && _.verified
                          ? (0, r.jsx)(h.aML, {
                                "data-migration-pending": !0,
                                text: eg.intl.string(eg.t["4PJP5p"]),
                                children: (e) =>
                                    (0, r.jsx)(
                                        D.Z,
                                        eI(
                                            ev(
                                                {
                                                    size: eP,
                                                    color: h.TVs.colors.BG_BRAND.css,
                                                },
                                                e,
                                            ),
                                            {
                                                children: (0, r.jsx)(h.kmB, {
                                                    size: "custom",
                                                    width: eP,
                                                    height: eP,
                                                    color: h.TVs.colors.WHITE.css,
                                                }),
                                            },
                                        ),
                                    ),
                            })
                          : null,
                  ],
              }),
              description: $,
              hint: null != et ? et : void 0,
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      Y || W
                          ? (0, r.jsx)(h.pzj, {
                                size: "xxs",
                                color: ei,
                            })
                          : (0, r.jsx)("div", { className: eE.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: er,
                          children: eg.intl.string(eg.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, r.jsx)(w.Z, {
                  game: s,
                  pid: null == o ? void 0 : o.pid,
                  size: w.A.MEDIUM,
              }),
              "aria-label": eg.intl.string(eg.t["87O5GC"]),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eU(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: (m && R) || (b && P),
                      disabled: G,
                      onChange: (e) => {
                          k(e, M(e, (m && R) || (b && P)));
                      },
                  }),
              }),
              warning: (0, r.jsx)(Q.Z, {
                  className: eE.systemServiceWarning,
                  game: o,
              }),
              children: [
                  (0, r.jsx)(ej, {
                      title: eg.intl.string(eg.t["7BlVIs"]),
                      description: eg.intl.string(eg.t.ndgADE),
                      hint: R ? void 0 : eg.intl.string(eg.t.cAFVsL),
                      "aria-label": eg.intl.string(eg.t["7BlVIs"]),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: m && R,
                                  disabled: C,
                                  onChange: (e) => {
                                      e && !R
                                          ? L(e, x.OverlayToggledClientSettingType.OOP)
                                          : L(e, x.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: eE.emptySpacer }),
                          ],
                      }),
                  }),
                  (0, r.jsx)(ej, {
                      title: eg.intl.string(eg.t.BfFpW1),
                      description: eg.intl.string(eg.t.OzInYk),
                      hint: P ? void 0 : eg.intl.string(eg.t["3sYHXm"]),
                      "aria-label": eg.intl.string(eg.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: b && P,
                                  disabled: A,
                                  onChange: (e) => {
                                      e && !P
                                          ? L(e, x.OverlayToggledClientSettingType.LEGACY)
                                          : L(e, x.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: eE.emptySpacer }),
                          ],
                      }),
                  }),
              ],
          });
}
function eZ(e) {
    let { game: t, gameApplication: n } = e,
        a = i.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        o = (0, p.e7)([T.Z], () => (null != n ? n : T.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(w.Z, {
        game: o,
        pid: a,
        size: w.A.SMALL,
    });
}
function eB(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: a,
            getEnabledFromStatus: o,
            onChange: s,
            clientSettingType: l,
            ariaLabel: c,
        } = e,
        u = (0, p.cj)([N.ZP, ee.Z, en.Z], () => (0, N.FZ)(t, N.ZP, ee.Z, en.Z)),
        d = (0, p.cj)([ee.Z, en.Z], () => (0, N.b6)(t, !1, [ee.Z, en.Z]), [t]),
        f = o(d),
        [_, m] = i.useState(f);
    i.useEffect(() => {
        m(f);
    }, [f]);
    let g = (e) => {
        let n = !e && _;
        if ((m(e), s(e, u, d), n)) {
            var r, i;
            (0, F.l)(l, null != (i = null != (r = u.id) ? r : null == t ? void 0 : t.id) ? i : null);
        }
    };
    return (0, r.jsx)(ej, {
        title: t.name,
        icon: (0, r.jsx)(eZ, {
            game: u,
            gameApplication: n,
        }),
        "aria-label": c,
        action: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.rsf, {
                    checked: _,
                    disabled: a,
                    onChange: (e) => g(e),
                }),
                (0, r.jsx)("div", { className: eE.emptySpacer }),
            ],
        }),
    });
}
function eF() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, p.cj)([U.default], () => U.default.getGlobalEnabledStatus()),
        o = (0, p.Wu)([N.ZP], () => N.ZP.getGamesSeen(!0)).filter((e) => !(0, z.le)(e)),
        s = (0, A.Z)(o.map((e) => e.id)),
        l = !(0, ed.supportsLegacy)(),
        c = (e) => {
            var t, r;
            y.Z.setEnabled(e, a);
            let i = null != (r = null == (t = N.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, x.ou)(e, x.OverlayToggledClientSettingType.LEGACY, i),
                !e && n && (0, F.l)(x.OverlayToggledClientSettingType.LEGACY, i);
        },
        u = (e, t, n) => {
            let { enabledOOP: r } = n;
            g.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                (0, ed.supportsLegacy)()
                    ? l
                        ? eg.intl.string(eg.t.r9jEVw)
                        : eg.intl.string(eg.t.OzInYk)
                    : eg.intl.string(eg.t["8Ox6/E"]),
            [l],
        );
    return 0 === o.length
        ? (0, r.jsx)(ej, {
              title: eg.intl.string(eg.t.BfFpW1),
              description: d,
              "aria-label": eg.intl.string(eg.t.BfFpW1),
              className: eE.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: l,
                          onChange: (e) => c(e),
                      }),
                      em.iP && (0, r.jsx)("div", { className: eE.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(eM, {
              onExpand: t,
              className: e ? eE.expandedContainer : void 0,
              title: eg.intl.string(eg.t.BfFpW1),
              description: d,
              "aria-label": eg.intl.string(eg.t.BfFpW1),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eU(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: l,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: eE.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eg.intl.string(eg.t.FzoWRo),
                      }),
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: eE.scroller,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              eB,
                              {
                                  rawGame: e,
                                  clientSettingType: x.OverlayToggledClientSettingType.LEGACY_GAME,
                                  supportDisabled: l,
                                  gameApplication: s[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: u,
                                  ariaLabel: eg.intl.format(eg.t.hvPYsF, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eV() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: a } = (0, p.cj)([U.default], () => U.default.getGlobalEnabledStatus()),
        o = !(0, ed.supportsOutOfProcess)(),
        s = (0, p.Wu)([N.ZP], () => N.ZP.getGamesSeen(!0)).filter((e) => !(0, z.le)(e)),
        l = (0, A.Z)(s.map((e) => e.id)),
        c = (e) => {
            var t, r;
            let i = !e && n;
            y.Z.setEnabled(a, e);
            let o = null != (r = null == (t = N.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, x.ou)(e, x.OverlayToggledClientSettingType.OOP, o),
                i && (0, F.l)(x.OverlayToggledClientSettingType.OOP, o);
        },
        u = (e, t, n) => {
            let { enabledLegacy: r } = n;
            g.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                em.iP ? (o ? eg.intl.string(eg.t.C7bLTQ) : eg.intl.string(eg.t.ndgADE)) : eg.intl.string(eg.t.m7X4az),
            [o],
        );
    return 0 === s.length
        ? (0, r.jsx)(ej, {
              title: eg.intl.string(eg.t["7BlVIs"]),
              description: d,
              "aria-label": eg.intl.string(eg.t["7BlVIs"]),
              className: eE.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e) => c(e),
                      }),
                      em.iP && (0, r.jsx)("div", { className: eE.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(eM, {
              onExpand: t,
              className: e ? eE.expandedContainer : void 0,
              title: eg.intl.string(eg.t["7BlVIs"]),
              description: d,
              "aria-label": eg.intl.string(eg.t["7BlVIs"]),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eU(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: eE.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eg.intl.string(eg.t.FzoWRo),
                      }),
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: eE.scroller,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              eB,
                              {
                                  rawGame: e,
                                  clientSettingType: x.OverlayToggledClientSettingType.OOP_GAME,
                                  gameApplication: l[t],
                                  supportDisabled: o,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: u,
                                  ariaLabel: eg.intl.format(eg.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eH() {
    return (0, M.T_)(I.Z.USER_SETTINGS)
        ? (0, r.jsx)(ej, {
              title: eg.intl.string(eg.t["z4/l+V"]),
              description: eg.intl.string(eg.t["3aZq/0"]),
              action: (0, r.jsx)(h.Button, {
                  variant: "primary",
                  text: eg.intl.string(eg.t.s2nVhG),
                  onClick: () => {
                      (0, H.N)(I.Z.USER_SETTINGS, ep.IlC.APP);
                  },
              }),
              "aria-label": eg.intl.string(eg.t["z4/l+V"]),
          })
        : null;
}
function eY() {
    var e;
    let t = (0, p.e7)([ei.ZP], () => ei.ZP.getOverlayKeybind()),
        n = !(0, ed.supportsLegacy)(),
        i = !(0, ed.supportsOutOfProcess)(),
        [a, o] = (0, p.Wu)([N.ZP], () => [N.ZP.canShowAdminWarning, N.ZP.getVisibleGame()], []),
        s = (0, q.hi)(),
        l = null != o && o.elevated && a && !s,
        c = !(0, ei.I1)(null != (e = null == t ? void 0 : t.shortcut) ? e : []);
    function d(e) {
        u()(null != t, "Keybind should never be undefined"), E.Z.setKeybind(eI(ev({}, t), { shortcut: e }));
    }
    return (0, r.jsx)("div", {
        className: eE.keybindMainContainer,
        children: (0, r.jsxs)("div", {
            className: eE.keybindContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: eE.keybindHeaderContainer,
                    children: [
                        (0, r.jsx)(h.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: eg.intl.string(eg.t.VsAZcC),
                        }),
                        l &&
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eE.keybindAdminWarning,
                                children: eg.intl.string(eg.t.NsowVa),
                            }),
                        c &&
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eE.keybindAdminWarning,
                                children: eg.intl.string(eg.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: eE.keybindRecorderContainer,
                    children: (0, r.jsx)(O.Z, {
                        disabled: n && i,
                        defaultValue: null != t ? t.shortcut : [],
                        onChange: d,
                    }),
                }),
            ],
        }),
    });
}
let eW = (e) =>
    [
        {
            title: eg.t.eVE4LX,
            description: eg.t["72WNqk"],
            disabledSetting: L.i.TEXT_CHAT,
        },
        {
            title: eg.t.oifnSh,
            description: eg.t.bgU5r0,
            disabledSetting: L.i.WELCOME_GENERAL,
        },
        {
            title: eg.t.hqsZJW,
            description: eg.t.kHjdqc,
            disabledSetting: L.i.GO_LIVE_NUDGE,
        },
        {
            title: eg.t.sop3rn,
            description: eg.t.pjgffc,
            disabledSetting: L.i.GAME_ACTIVITY,
        },
        {
            title: eg.t["2QVhbb"],
            description: eg.t.wQ4ilB,
            disabledSetting: L.i.NOW_PLAYING,
        },
        e && {
            title: eg.t["5/21FT"],
            description: eg.t.EIzwfA,
            disabledSetting: L.i.FRIEND_STREAM_WATCH_NUDGE,
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function eK() {
    let { enabled: e } = (0, M.aq)("OverlayV3StreamWatchNudge"),
        t = eW(e),
        n = (e) => (t) => {
            y.Z.setNotificationDisabledSetting(e, !t);
        },
        i = (0, p.e7)([Z.Z], () => Z.Z.getDisabledNotifications());
    return (0, r.jsxs)("div", {
        className: eE.notificationSettingsContainer,
        children: [
            (0, r.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: eg.intl.string(eg.t.xOE5bA),
            }),
            t.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: eE.notificationItem,
                        children: [
                            (0, r.jsxs)("div", {
                                className: eE.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: eg.intl.string(e.title),
                                    }),
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eg.intl.string(e.description),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(h.rsf, {
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
function ez(e) {
    let t = eq(e.username);
    return (t.user = e), t;
}
function eq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = "456" + Math.floor(1000000 * Math.random());
    return {
        voiceState: new $.Z({
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
        user: new J.Z({
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
function eQ() {
    return (0, X.createChannelRecord)({
        id: "123",
        name: "Test Channel",
        type: ep.d4z.GUILD_VOICE,
        guild_id: "456",
    });
}
function eX() {
    var e, t;
    let {
            avatarSizeMode: n,
            displayNameMode: a,
            displayUserMode: s,
        } = (0, p.cj)([eo.default], () => ({
            avatarSizeMode: eo.default.getAvatarSizeMode(),
            displayNameMode: eo.default.getDisplayNameMode(),
            displayUserMode: eo.default.getDisplayUserMode(),
        })),
        l = (0, p.e7)([er.default], () => er.default.getCurrentUser()),
        [c] = i.useState(() => [
            eq(eg.intl.string(eg.t.C0ZDvo), !0, !1),
            eq(eg.intl.string(eg.t.iOtj8E), !1, !1, !0),
            eq(eg.intl.string(eg.t["0oqNgL"]), !1, !0),
        ]),
        u = (0, p.e7)([B.Z, et.Z], () => {
            let e = B.Z.getWidgetByType(ep.Odu.VOICE_V3);
            if (null == e) return null;
            let t = et.Z.getWidget(e.id);
            return null != t && (0, Y.Aw)(t) ? t : null;
        }),
        d = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : eh.At,
        f = [null != l ? ez(l) : null, ...c].filter(el.lm),
        _ = [new Map(f.map((e) => [e.user.id, e])), f.map((e) => e.user.id)];
    function g(e) {
        null != u &&
            (e < eR
                ? (0, b.zG)(u.id, { voiceStatesMaxShown: eh.Og })
                : (0, b.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    let E = ep.BRd.MIDNIGHT;
    return (0, r.jsxs)("div", {
        className: eE.voiceSettingsContainer,
        children: [
            (0, r.jsx)(m.y6, {
                label: eg.intl.string(eg.t.dnvZSg),
                options: [
                    {
                        label: eg.intl.string(eg.t.YcOxtr),
                        value: ep.ipw.LARGE,
                    },
                    {
                        label: eg.intl.string(eg.t.BKIKqx),
                        value: ep.ipw.SMALL,
                    },
                ],
                className: eE.select,
                onChange: (e) => y.Z.setAvatarSizeMode(e),
                value: n,
            }),
            (0, r.jsx)(m.y6, {
                label: eg.intl.string(eg.t.J0dpcB),
                options: [
                    {
                        label: eg.intl.string(eg.t.nBmDrT),
                        value: ep.wC$.ALWAYS,
                    },
                    {
                        label: eg.intl.string(eg.t["2OvIZY"]),
                        value: ep.wC$.ONLY_WHILE_SPEAKING,
                    },
                    {
                        label: eg.intl.string(eg.t.ekjlPL),
                        value: ep.wC$.NEVER,
                    },
                ],
                className: eE.select,
                onChange: (e) => y.Z.setDisplayNameMode(e),
                value: a,
            }),
            (0, r.jsx)(h.f6W, {
                theme: E,
                children: (e) => {
                    var t, i;
                    return (0, r.jsxs)("div", {
                        className: o()(eE.widgetContainer, e),
                        children: [
                            (0, r.jsx)("div", {
                                className: eE.voiceWidgetContainer,
                                children: (0, r.jsx)(W.kI, {
                                    id: "voice-widget",
                                    title: eg.intl.string(eg.t.KNJ6Vq),
                                    channel: eQ(),
                                    overlayVoiceStates: _,
                                    displayNameMode: a,
                                    displayUserMode: s,
                                    avatarSizeMode: n,
                                    widget: ep.Odu.VOICE,
                                    anchorLeft: !0,
                                    application: null,
                                    stream: null,
                                    streamApplication: null,
                                    streamMetadata: null,
                                    locked: !1,
                                    pinned: !1,
                                    isSettingsPreview: !0,
                                    isPreviewingInGame: !1,
                                    maxDisplayedVoiceStates: d,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: eE.widgetHeaderContainer,
                                children: [
                                    (0, r.jsx)(K.PI, { children: eg.intl.string(eg.t.KNJ6Vq) }),
                                    (0, r.jsx)(K.ls, {}),
                                    (0, r.jsx)(K.RT, {
                                        id: null != (t = null == u ? void 0 : u.id) ? t : "voice-widget",
                                        pinned: null != (i = null == u ? void 0 : u.pinned) && i,
                                    }),
                                ],
                            }),
                        ],
                    });
                },
            }),
            (0, r.jsx)(m.y6, {
                label: eg.intl.string(eg.t.swsWWC),
                options: [
                    {
                        label: eg.intl.string(eg.t.nBmDrT),
                        value: ep.OYC.ALWAYS,
                    },
                    {
                        label: eg.intl.string(eg.t["2OvIZY"]),
                        value: ep.OYC.ONLY_WHILE_SPEAKING,
                    },
                ],
                className: eE.select,
                onChange: (e) => y.Z.setDisplayUserMode(e),
                value: s,
            }),
            (0, r.jsx)("div", {
                className: eE.sliderContainer,
                children: (0, r.jsx)(h.iRW, {
                    label: eg.intl.string(eg.t["X/Uyzc"]),
                    initialValue: d,
                    onValueRender: (e) => (e < eR ? eg.intl.string(eg.t.nrUzFL) : "".concat(Math.floor(e))),
                    minValue: eR - 1,
                    maxValue: ew,
                    onValueChange: g,
                    markers: eD,
                    barStyles: { background: h.TVs.colors.BACKGROUND_MOD_STRONG.css },
                    fillStyles: { background: h.TVs.colors.BG_BRAND.css },
                    onMarkerRender: (e) => (e < eR ? eg.intl.string(eg.t.nrUzFL) : "".concat(Math.floor(e))),
                }),
            }),
        ],
    });
}
function eJ() {
    let [e, t] = (0, C.US)([_.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(e_.L.DISMISS);
        };
    return ((0, S.ZP)(() => () => {
        t(e_.L.AUTO_DISMISS);
    }),
    e !== _.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)("div", {
              className: eE.overlaySettingsNux,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: eb.Z,
                          alt: eg.intl.string(eg.t.mdXZh1),
                          className: eE.nuxFirstImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: eE.mainTitleContainer,
                          children: [
                              (0, r.jsx)(h.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "header-primary",
                                  children: eg.intl.string(eg.t.jzjJQg),
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: eg.intl.string(eg.t["5dOfxb"]),
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: ey.Z,
                          alt: eg.intl.string(eg.t.mdXZh1),
                          className: eE.nuxUserSettingsImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: eE.closeCircleButton,
                      children: (0, r.jsx)(h.Button, {
                          variant: "primary",
                          text: eg.intl.string(eg.t.Q26diF),
                          onClick: () => n(),
                      }),
                  }),
                  (0, r.jsx)("div", { className: eE.nuxDivider }),
              ],
          });
}
function e$(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        a = null == n ? void 0 : n.id,
        o = (0, p.e7)([Z.Z], () => Z.Z.isLimitedInteractionOverrideEnabled(a), [a]),
        s = i.useMemo(() => null != t && (0, G.H8)(t.pid), [t]),
        l = (0, k.Z)({ location: "overlay_user_settings" }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: u } = (0, p.cj)([eo.default], () => ({
            disableClickableRegions: eo.default.disableClickableRegions,
            shouldShowKeybindIndicators: eo.default.showKeybindIndicators,
        }));
    function d() {
        y.Z.setDisableClickableRegions(!c);
    }
    function f(e) {
        null != n && (0, V.rI)(n.id, e);
    }
    return (0, r.jsxs)("div", {
        className: eE.overlayEnabledSettingsContainer,
        children: [
            (0, r.jsx)(eY, {}),
            l &&
                (0, r.jsx)(h.rsf, {
                    label: eg.intl.string(eg.t.XZTl9r),
                    checked: u,
                    onChange: (e) => y.Z.setShowKeybindIndicators(e),
                }),
            null != a &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eE.limitedInteractionOverrideContainer,
                            children: [
                                (0, r.jsx)(h.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: eg.intl.string(eg.t.wgVQND),
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: eg.intl.string(eg.t["5SsyF5"]),
                                }),
                            ],
                        }),
                        (0, r.jsx)(h.rsf, {
                            checked: o || s,
                            disabled: s,
                            onChange: (e) => f(e),
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: eE.limitedInteractionOverrideContainer,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: eg.intl.string(eg.t["+eFXxq"]),
                            }),
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eg.intl.string(eg.t.kivMAp),
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.rsf, {
                        checked: !c,
                        onChange: d,
                    }),
                ],
            }),
        ],
    });
}
function e0(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: i, runningGameApplication: a } = (0, P.Z)(),
        o = !0,
        s = (0, p.e7)([er.default], () => er.default.getCurrentUser());
    return ((0, S.ZP)(() => {
        if (ec.isPlatformEmbedded) return (0, R.Ky)(), R.P7;
    }),
    ex(),
    null == s)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(ef.Z, {
                      title: eg.intl.string(eg.t["9cb1Uz"]),
                      children: [
                          o ? (0, r.jsx)(eJ, {}) : null,
                          (0, r.jsxs)("div", {
                              className: eE.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eG, {
                                      runningGame: i,
                                      runningGameApplication: a,
                                  }),
                                  (0, r.jsx)(eV, {}),
                                  (0, r.jsx)(eF, {}),
                                  (0, r.jsx)(eH, {}),
                              ],
                          }),
                          (0, r.jsx)("div", { className: eE.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(e$, {
                              runningGame: i,
                              runningGameApplication: a,
                          }),
                          (0, r.jsx)("div", { className: eE.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(h.gNt, {
                      label: eg.intl.string(eg.t.r1TZfh),
                      children: [(0, r.jsx)(eX, {}), (0, r.jsx)("div", { className: eE.settingsDivider })],
                  }),
                  (0, r.jsx)(eK, {}),
              ],
          });
}
