n.d(t, { Z: () => eJ }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(348327),
    l = n.n(s),
    c = n(512722),
    u = n.n(c),
    d = n(392711),
    f = n.n(d),
    _ = n(442837),
    p = n(704215),
    h = n(755721),
    m = n(481060),
    g = n(224706),
    E = n(660216),
    b = n(765250),
    y = n(13245),
    O = n(825209),
    v = n(593472),
    I = n(493773),
    T = n(812206),
    S = n(835473),
    A = n(243778),
    C = n(594190),
    N = n(137920),
    R = n(320724),
    P = n(925329),
    w = n(297700),
    D = n(444295),
    L = n(486016),
    x = n(837268),
    j = n(32300),
    M = n(809357),
    k = n(371651),
    U = n(829907),
    G = n(624864),
    B = n(610394),
    Z = n(957148),
    F = n(340101),
    V = n(243487),
    H = n(430561),
    Y = n(509003),
    W = n(865066),
    K = n(894300),
    z = n(131704),
    q = n(598077),
    X = n(189786),
    Q = n(77498),
    J = n(355863),
    $ = n(283595),
    ee = n(594174),
    et = n(556296),
    en = n(808506),
    er = n(237997),
    ei = n(626135),
    ea = n(823379),
    eo = n(358085),
    es = n(13140),
    el = n(145597),
    ec = n(273313),
    eu = n(981631),
    ed = n(921944),
    ef = n(987650),
    e_ = n(501787),
    ep = n(388032),
    eh = n(607547),
    em = n(131970),
    eg = n(730462);
function eE(e, t, n) {
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
function eb(e) {
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
                eE(e, t, n[t]);
            });
    }
    return e;
}
function ey(e, t) {
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
function eO(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ey(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ev(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eI(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eI(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let eT = eD(null),
    eS = 20,
    eA = 16,
    eC = 1,
    eN = "voice-widget-display-users",
    eR = 25,
    eP = [0, 5, 10, 15, 20, 25];
function ew() {
    let e = eD(eT);
    f().isEqual(e, eT) || (ei.default.track(eu.rMx.OVERLAY_SETTINGS_UPDATED, e), (eT = e));
}
function eD(e) {
    var t;
    let n = er.default.getNotificationPositionMode(),
        r = n !== eu._vf.DISABLED,
        i = et.ZP.getOverlayKeybind(),
        a = et.ZP.getOverlayChatKeybind();
    return {
        enabled: en.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: G.Z.isNotificationDisabled(L.OverlayNotificationDisabledSetting.TEXT_CHAT)
            ? "DISABLED"
            : "ENABLED",
        hotkey: null != i ? (0, es.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, es.BB)(a.shortcut) : null,
        text_opacity_slider: er.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : en.default.enabled,
    };
}
function eL(e) {
    let { children: t, title: n, className: i, titleId: a } = e;
    return (0, r.jsxs)(m.xJW, {
        children: [
            null != n &&
                (0, r.jsx)(m.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: eh.formItemTitle,
                    id: a,
                    children: n,
                }),
            (0, r.jsx)("div", {
                className: o()(eh.rowContainer, i),
                children: t,
            }),
        ],
    });
}
function ex(e) {
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
        className: o()(eh.groupContainer, f),
        children: [
            (0, r.jsxs)(m.kL8, {
                "aria-label": d,
                onClick: u,
                children: [
                    null != t &&
                        (0, r.jsx)("div", {
                            className: eh.groupHeader,
                            children: t,
                        }),
                    (0, r.jsxs)("div", {
                        className: eh.groupContent,
                        children: [
                            null != n &&
                                (0, r.jsx)("div", {
                                    className: eh.groupIcon,
                                    children: n,
                                }),
                            (0, r.jsxs)("div", {
                                className: eh.groupMainContent,
                                children: [
                                    (0, r.jsx)(m.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        className: eh.groupTitle,
                                        children: i,
                                    }),
                                    null != a &&
                                        (0, r.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
                                            children: a,
                                        }),
                                    null != l &&
                                        (0, r.jsx)(m.Text, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: l,
                                        }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: eh.groupAction,
                                children: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: eh.groupWarning,
                children: c,
            }),
        ],
    });
}
function ej(e) {
    var { children: t, className: n, onExpand: a } = e,
        s = ev(e, ["children", "className", "onExpand"]);
    let [l, c] = i.useState(!1),
        u = (e) => {
            c(e), null == a || a(e);
        };
    return (0, r.jsx)(m.zF9, {
        className: eh.collapseable,
        collapsibleContent: (0, r.jsx)("div", {
            className: eh.groupCollapsedContainer,
            children: t,
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                ex,
                eO(eb({}, s), {
                    onClick: (e) => {
                        u(!l), null == t || t(e);
                    },
                    className: o()(eh.mainCollapseableContainer, n),
                    action: (0, r.jsxs)("div", {
                        className: eh.groupCollapsedAction,
                        children: [
                            s.action,
                            l
                                ? (0, r.jsx)(m.CJ0, {
                                      size: "custom",
                                      width: eS,
                                      height: eS,
                                      color: "var(--interactive-active)",
                                  })
                                : (0, r.jsx)(m.Fbu, {
                                      size: "custom",
                                      width: eS,
                                      height: eS,
                                      color: "var(--interactive-active)",
                                  }),
                        ],
                    }),
                }),
            );
        },
    });
}
let eM = new Set([
        x.mM.INITIALIZING,
        x.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        x.mM.WAITING_FOR_MODULE_TRACKING,
        x.mM.WAITING_FOR_OVERLAY_OPEN,
        x.mM.WAITING_FOR_POPOUT_OPEN,
        x.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE,
        x.mM.WAITING_FOR_REACT_INITIALIZATION,
        x.mM.WAITING_FOR_PID_FOCUS,
    ]),
    ek = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eU(e) {
    var t, n, a;
    let { runningGame: o, runningGameApplication: s } = e,
        c = null == o ? void 0 : o.pid,
        u = (0, _.e7)(
            [k.default],
            () => (null == o || null == c ? null : k.default.getTrackedGameByPid(c)),
            [o, c],
            l(),
        ),
        { enabledLegacy: d, enabledOOP: f } = (0, _.cj)([Q.Z, $.Z], () => {
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
            return (0, C.b6)(o, !1, [Q.Z, $.Z]);
        }, [o, u]),
        p = (0, _.e7)([C.ZP, Q.Z, $.Z], () => (null == o ? null : (0, C.FZ)(o, C.ZP, Q.Z, $.Z)), [o], l()),
        [E, b] = i.useState(f),
        [O, T] = i.useState(d),
        [S, A] = i.useState(!1);
    i.useEffect(() => {
        b(f), T(d);
    }, [f, d]);
    let N = !(0, el.supportsLegacy)(),
        R = !(0, el.supportsOutOfProcess)(),
        { legacyEnabled: L, oopEnabled: j } = (0, _.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        M = (e, t) => {
            var n, r, i;
            if (null == o) return;
            let a = !1,
                s = !1;
            switch (t) {
                case D.AE.LEGACY_GAME:
                    T(e), g.Z.toggleOverlay(o, e, E), (a = !e && O);
                    break;
                case D.AE.OOP_GAME:
                    b(e), g.Z.toggleOverlay(o, O, e), (s = !e && E);
                    break;
                case D.AE.LEGACY:
                    y.Z.setEnabled(e, j), (0, D.ou)(e, D.AE.LEGACY, null != (n = o.id) ? n : null);
                    break;
                case D.AE.OOP:
                    y.Z.setEnabled(L, e), (0, D.ou)(e, D.AE.OOP, null != (r = o.id) ? r : null);
            }
            (a || s) && (0, Z.l)(a ? D.AE.LEGACY_GAME : D.AE.OOP_GAME, null != (i = o.id) ? i : null);
        },
        U = (e, t) => {
            let n = !t && e,
                r = !j && E,
                i = !L && O,
                a = !E && j,
                o = !O && L;
            switch (!0) {
                case n && (r || i) && (a || o):
                    return "both";
                case n && (r || i):
                    return "global";
                default:
                    return "game";
            }
        },
        G = (e, t) => {
            if (null == o) return;
            let n = !1,
                r = !1;
            switch (t) {
                case "game":
                    g.Z.toggleOverlay(o, e, e), T(e), b(e), (n = !e && O), (r = !e && E);
                    break;
                case "global":
                    y.Z.setEnabled(e, e), (n = !e && L), (r = !e && j);
                    break;
                case "both":
                    y.Z.setEnabled(e, e),
                        g.Z.toggleOverlay(o, e, e),
                        T(e),
                        b(e),
                        (n = (!e && L) || (!e && O)),
                        (r = (!e && j) || (!e && E));
            }
            let i = null;
            if (
                (n
                    ? (i = "game" === t ? D.AE.LEGACY_GAME : D.AE.LEGACY)
                    : r && (i = "game" === t ? D.AE.OOP_GAME : D.AE.OOP),
                null != i)
            ) {
                var a;
                (0, Z.l)(i, null != (a = o.id) ? a : null);
            }
        },
        B = N && R,
        F = !L && !j,
        V = !E && !L && O && !N,
        H = !O && !j && E && !R,
        Y = (null == u ? void 0 : u.overlayMethod) === x.gl.Disabled,
        W = (null == u ? void 0 : u.state) === x.mM.OVERLAY_RENDERING && !Y,
        z = (null == u ? void 0 : u.state) != null && eM.has(u.state) && !Y,
        q = (null == u ? void 0 : u.overlayMethod) === x.gl.OutOfProcess,
        X = (null == u ? void 0 : u.overlayMethod) === x.gl.OutOfProcessLimitedInteraction,
        J = (null == u ? void 0 : u.overlayMethod) === x.gl.Hook,
        ee =
            (null == u ? void 0 : u.state) === x.mM.OVERLAY_CRASHED ||
            (null == u ? void 0 : u.state) === x.mM.OVERLAY_CRASHED_DISABLED,
        et = !E && !O,
        [en, er] = (() => {
            switch (!0) {
                case W && q:
                    function e(e, t) {
                        return (0, r.jsx)(
                            m.Text,
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
                        ep.intl.format(ep.t.hFVBIi, {
                            overlayMethod: ep.intl.string(ep.t.a3eXS0),
                            overlayMethodHook: e,
                        }),
                        null,
                    ];
                case W && X:
                    function t(e, t) {
                        return (0, r.jsx)(
                            m.Text,
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
                        ep.intl.format(ep.t.hFVBIi, {
                            overlayMethod: ep.intl.string(ep.t["506AbW"]),
                            overlayMethodHook: t,
                        }),
                        null,
                    ];
                case W && J:
                    function n() {
                        var e, t;
                        switch (!0) {
                            case (null == u ? void 0 : u.fullscreenType) !== v.Jx.BORDERLESS_FULLSCREEN:
                                return ep.intl.string(ep.t.mJmbeH);
                            case R:
                                return ep.intl.string(ep.t.C7bLTU);
                            case !(null != (e = null == u ? void 0 : u.oopEnabled) && e):
                                return ep.intl.string(ep.t.WiY24u);
                            case !j:
                                return ep.intl.string(ep.t.cAFVsL);
                            case !(null != (t = null == u ? void 0 : u.supportsOutOfProcess) && t):
                                return ep.intl.string(ep.t.XcGEcn);
                            default:
                                return ep.intl.string(ep.t.bJXH2t);
                        }
                    }
                    function i(e, t) {
                        return (0, r.jsx)(
                            m.Text,
                            {
                                tag: "span",
                                variant: "text-sm/medium",
                                color: "text-primary",
                                children: e,
                            },
                            t,
                        );
                    }
                    return [
                        ep.intl.format(ep.t.hFVBIi, {
                            overlayMethod: ep.intl.string(ep.t.bvlpDQ),
                            overlayMethodHook: i,
                        }),
                        n(),
                    ];
                case ee:
                    return [ep.intl.string(ep.t.OFC2a2), null];
                case B:
                    return [ep.intl.string(ep.t.m7X4a2), null];
                case F:
                    return [ep.intl.string(ep.t["9DUS5u"]), null];
                case et:
                    return [ep.intl.string(ep.t.nQ9EdH), null];
                case V:
                case H:
                    return [ep.intl.string(ep.t.VWUn0d), null];
                case z:
                    if (q) return [ep.intl.string(ep.t["s8+CFh"]), null];
                    if (J) return [ep.intl.string(ep.t.JEEdqq), null];
                    if (X) return [ep.intl.string(ep.t.pzBMwc), null];
                    return [ep.intl.string(ep.t["2Xhy9v"]), null];
                case null == u:
                    return [ep.intl.string(ep.t.vwHPRk), null];
                default:
                    return [ep.intl.string(ep.t.ONovPz), null];
            }
        })();
    (0, I.ZP)(() => {
        g.Z.getDetectableGames();
    });
    let [ei, ea] = i.useMemo(
        () =>
            z
                ? ["text-muted", m.TVs.colors.TEXT_MUTED.css]
                : W && X
                  ? ["text-feedback-warning", m.TVs.colors.TEXT_FEEDBACK_WARNING.css]
                  : W && q
                    ? ["text-feedback-positive", m.TVs.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : W && J
                      ? ["text-primary", m.TVs.colors.TEXT_PRIMARY.css]
                      : ["interactive-normal", m.TVs.colors.INTERACTIVE_NORMAL.css],
        [z, W, X, q, J],
    );
    return null == o
        ? null
        : (0, r.jsxs)(ej, {
              onExpand: A,
              className: S ? eh.expandedContainer : void 0,
              title: (0, r.jsxs)(r.Fragment, {
                  children: [
                      null !=
                      (a =
                          null != (n = null != (t = null == s ? void 0 : s.name) ? t : null == p ? void 0 : p.name)
                              ? n
                              : null == o
                                ? void 0
                                : o.gameName)
                          ? a
                          : "",
                      null != p && p.verified
                          ? (0, r.jsx)(m.ua7, {
                                text: ep.intl.string(ep.t["4PJP5u"]),
                                children: (e) =>
                                    (0, r.jsx)(
                                        w.Z,
                                        eO(
                                            eb(
                                                {
                                                    size: eA,
                                                    color: m.TVs.colors.BG_BRAND.css,
                                                },
                                                e,
                                            ),
                                            {
                                                children: (0, r.jsx)(m.kmB, {
                                                    size: "custom",
                                                    width: eA,
                                                    height: eA,
                                                    color: m.TVs.colors.WHITE.css,
                                                }),
                                            },
                                        ),
                                    ),
                            })
                          : null,
                  ],
              }),
              description: en,
              hint: null != er ? er : void 0,
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      W || z
                          ? (0, r.jsx)(m.pzj, {
                                size: "xxs",
                                color: ea,
                            })
                          : (0, r.jsx)("div", { className: eh.playingDot }),
                      (0, r.jsx)(m.Text, {
                          variant: "text-xs/semibold",
                          color: ei,
                          children: ep.intl.string(ep.t.CDOx39),
                      }),
                  ],
              }),
              icon: (0, r.jsx)(P.Z, {
                  game: s,
                  pid: null == o ? void 0 : o.pid,
                  size: P.A.MEDIUM,
              }),
              "aria-label": ep.intl.string(ep.t["87O5GB"]),
              action: (0, r.jsx)(m.P3F, {
                  onClick: (e) => ek(e),
                  children: (0, r.jsx)(h.T2, {
                      checked: (E && j) || (O && L),
                      disabled: B,
                      onChange: (e) => {
                          G(e, U(e, (E && j) || (O && L)));
                      },
                  }),
              }),
              warning: (0, r.jsx)(K.Z, {
                  className: eh.systemServiceWarning,
                  game: o,
              }),
              children: [
                  (0, r.jsx)(ex, {
                      title: ep.intl.string(ep.t["7BlVIi"]),
                      description: ep.intl.string(ep.t.ndgADA),
                      hint: j ? void 0 : ep.intl.string(ep.t.cAFVsL),
                      "aria-label": ep.intl.string(ep.t["7BlVIi"]),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.T2, {
                                  checked: E && j,
                                  disabled: R,
                                  onChange: (e) => {
                                      e && !j ? M(e, D.AE.OOP) : M(e, D.AE.OOP_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: eh.emptySpacer }),
                          ],
                      }),
                  }),
                  (0, r.jsx)(ex, {
                      title: ep.intl.string(ep.t.BfFpW1),
                      description: ep.intl.string(ep.t.OzInYm),
                      hint: L ? void 0 : ep.intl.string(ep.t["3sYHXl"]),
                      "aria-label": ep.intl.string(ep.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.T2, {
                                  checked: O && L,
                                  disabled: N,
                                  onChange: (e) => {
                                      e && !L ? M(e, D.AE.LEGACY) : M(e, D.AE.LEGACY_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: eh.emptySpacer }),
                          ],
                      }),
                  }),
              ],
          });
}
function eG(e) {
    let { game: t, gameApplication: n } = e,
        a = i.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        o = (0, _.e7)([T.Z], () => (null != n ? n : T.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(P.Z, {
        game: o,
        pid: a,
        size: P.A.SMALL,
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
        u = (0, _.cj)([C.ZP, Q.Z, $.Z], () => (0, C.FZ)(t, C.ZP, Q.Z, $.Z)),
        d = (0, _.cj)([Q.Z, $.Z], () => (0, C.b6)(t, !1, [Q.Z, $.Z]), [t]),
        f = o(d),
        [p, m] = i.useState(f);
    i.useEffect(() => {
        m(f);
    }, [f]);
    let g = (e) => {
        let n = !e && p;
        if ((m(e), s(e, u, d), n)) {
            var r, i;
            (0, Z.l)(l, null != (i = null != (r = u.id) ? r : null == t ? void 0 : t.id) ? i : null);
        }
    };
    return (0, r.jsx)(ex, {
        title: t.name,
        icon: (0, r.jsx)(eG, {
            game: u,
            gameApplication: n,
        }),
        "aria-label": c,
        action: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.T2, {
                    checked: p,
                    disabled: a,
                    onChange: (e) => g(e),
                }),
                (0, r.jsx)("div", { className: eh.emptySpacer }),
            ],
        }),
    });
}
function eZ() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, _.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        o = (0, _.Wu)([C.ZP], () => C.ZP.getGamesSeen(!0)).filter((e) => !(0, Y.le)(e)),
        s = (0, S.Z)(o.map((e) => e.id)),
        l = !(0, el.supportsLegacy)(),
        c = (e) => {
            var t, r;
            y.Z.setEnabled(e, a);
            let i = null != (r = null == (t = C.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, D.ou)(e, D.AE.LEGACY, i), !e && n && (0, Z.l)(D.AE.LEGACY, i);
        },
        u = (e, t, n) => {
            let { enabledOOP: r } = n;
            g.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                (0, el.supportsLegacy)()
                    ? l
                        ? ep.intl.string(ep.t.r9jEV1)
                        : ep.intl.string(ep.t.OzInYm)
                    : ep.intl.string(ep.t["8Ox6/P"]),
            [l],
        );
    return 0 === o.length
        ? (0, r.jsx)(ex, {
              title: ep.intl.string(ep.t.BfFpW1),
              description: d,
              "aria-label": ep.intl.string(ep.t.BfFpW1),
              className: eh.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.T2, {
                          checked: n,
                          disabled: l,
                          onChange: (e) => c(e),
                      }),
                      ef.iP && (0, r.jsx)("div", { className: eh.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ej, {
              onExpand: t,
              className: e ? eh.expandedContainer : void 0,
              title: ep.intl.string(ep.t.BfFpW1),
              description: d,
              "aria-label": ep.intl.string(ep.t.BfFpW1),
              action: (0, r.jsx)(m.P3F, {
                  onClick: (e) => ek(e),
                  children: (0, r.jsx)(h.T2, {
                      checked: n,
                      disabled: l,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: eh.subtitleContainer,
                      children: (0, r.jsx)(m.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: ep.intl.string(ep.t.FzoWRk),
                      }),
                  }),
                  (0, r.jsx)(m.zJl, {
                      className: eh.scroller,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              eB,
                              {
                                  rawGame: e,
                                  clientSettingType: D.AE.LEGACY_GAME,
                                  supportDisabled: l,
                                  gameApplication: s[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: u,
                                  ariaLabel: ep.intl.format(ep.t.hvPYsL, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eF() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: a } = (0, _.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        o = !(0, el.supportsOutOfProcess)(),
        s = (0, _.Wu)([C.ZP], () => C.ZP.getGamesSeen(!0)).filter((e) => !(0, Y.le)(e)),
        l = (0, S.Z)(s.map((e) => e.id)),
        c = (e) => {
            var t, r;
            let i = !e && n;
            y.Z.setEnabled(a, e);
            let o = null != (r = null == (t = C.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, D.ou)(e, D.AE.OOP, o), i && (0, Z.l)(D.AE.OOP, o);
        },
        u = (e, t, n) => {
            let { enabledLegacy: r } = n;
            g.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                ef.iP ? (o ? ep.intl.string(ep.t.C7bLTU) : ep.intl.string(ep.t.ndgADA)) : ep.intl.string(ep.t.m7X4a2),
            [o],
        );
    return 0 === s.length
        ? (0, r.jsx)(ex, {
              title: ep.intl.string(ep.t["7BlVIi"]),
              description: d,
              "aria-label": ep.intl.string(ep.t["7BlVIi"]),
              className: eh.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.T2, {
                          checked: n,
                          disabled: o,
                          onChange: (e) => c(e),
                      }),
                      ef.iP && (0, r.jsx)("div", { className: eh.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ej, {
              onExpand: t,
              className: e ? eh.expandedContainer : void 0,
              title: ep.intl.string(ep.t["7BlVIi"]),
              description: d,
              "aria-label": ep.intl.string(ep.t["7BlVIi"]),
              action: (0, r.jsx)(m.P3F, {
                  onClick: (e) => ek(e),
                  children: (0, r.jsx)(h.T2, {
                      checked: n,
                      disabled: o,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: eh.subtitleContainer,
                      children: (0, r.jsx)(m.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: ep.intl.string(ep.t.FzoWRk),
                      }),
                  }),
                  (0, r.jsx)(m.zJl, {
                      className: eh.scroller,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              eB,
                              {
                                  rawGame: e,
                                  clientSettingType: D.AE.OOP_GAME,
                                  gameApplication: l[t],
                                  supportDisabled: o,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: u,
                                  ariaLabel: ep.intl.format(ep.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eV() {
    var e;
    let t = (0, _.e7)([et.ZP], () => et.ZP.getOverlayKeybind()),
        n = !(0, el.supportsLegacy)(),
        i = !(0, el.supportsOutOfProcess)(),
        [a, o] = (0, _.Wu)([C.ZP], () => [C.ZP.canShowAdminWarning, C.ZP.getVisibleGame()], []),
        s = (0, W.hi)(),
        l = null != o && o.elevated && a && !s,
        c = !(0, et.I1)(null != (e = null == t ? void 0 : t.shortcut) ? e : []);
    function d(e) {
        u()(null != t, "Keybind should never be undefined"), E.Z.setKeybind(eO(eb({}, t), { shortcut: e }));
    }
    return (0, r.jsx)(eL, {
        children: (0, r.jsx)("div", {
            className: eh.keybindMainContainer,
            children: (0, r.jsxs)("div", {
                className: eh.keybindContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: eh.keybindHeaderContainer,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: ep.intl.string(ep.t.VsAZcH),
                            }),
                            l &&
                                (0, r.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: eh.keybindAdminWarning,
                                    children: ep.intl.string(ep.t.NsowVV),
                                }),
                            c &&
                                (0, r.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: eh.keybindAdminWarning,
                                    children: ep.intl.string(ep.t.UNoTw8),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: eh.keybindRecorderContainer,
                        children: (0, r.jsx)(O.Z, {
                            disabled: n && i,
                            defaultValue: null != t ? t.shortcut : [],
                            onChange: d,
                        }),
                    }),
                ],
            }),
        }),
    });
}
let eH = (e, t, n) =>
    [
        {
            title: ep.t.eVE4LS,
            description: ep.t["72WNqq"],
            disabledSetting: L.OverlayNotificationDisabledSetting.TEXT_CHAT,
        },
        {
            title: ep.t.hqsZJS,
            description: ep.t.kHjdqa,
            disabledSetting: L.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE,
        },
        e && {
            title: ep.t.sop3rq,
            description: ep.t.pjgffX,
            disabledSetting: L.OverlayNotificationDisabledSetting.GAME_ACTIVITY,
        },
        t && {
            title: ep.t["2QVhbW"],
            description: ep.t.wQ4ilJ,
            disabledSetting: L.OverlayNotificationDisabledSetting.NOW_PLAYING,
        },
        n && {
            title: ep.t["5/21FR"],
            description: ep.t.EIzwfH,
            disabledSetting: L.OverlayNotificationDisabledSetting.FRIEND_STREAM_WATCH_NUDGE,
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function eY() {
    let { allowActivityWidget: e, allowNowPlaying: t } = (0, j.o4)("user_settings"),
        { enabled: n } = (0, j.aq)("OverlayV3StreamWatchNudge"),
        i = eH(e, t, n),
        a = (e) => (t) => {
            y.Z.setNotificationDisabledSetting(e, !t);
        },
        o = (0, _.e7)([G.Z], () => G.Z.getDisabledNotifications());
    return (0, r.jsxs)("div", {
        className: eh.notificationSettingsContainer,
        children: [
            (0, r.jsx)(m.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: ep.intl.string(ep.t.xOE5bG),
            }),
            i.map((e) =>
                (0, r.jsxs)(
                    eL,
                    {
                        className: eh.notificationItem,
                        children: [
                            (0, r.jsxs)("div", {
                                className: eh.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(m.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: ep.intl.string(e.title),
                                    }),
                                    (0, r.jsx)(m.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ep.intl.string(e.description),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(m.j7V, {
                                value: !o.has(e.disabledSetting),
                                onChange: a(e.disabledSetting),
                                hideBorder: !0,
                            }),
                        ],
                    },
                    e.disabledSetting,
                ),
            ),
        ],
    });
}
function eW(e) {
    let t = eK(e.username);
    return (t.user = e), t;
}
function eK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = "456" + Math.floor(1000000 * Math.random());
    return {
        voiceState: new X.Z({
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
        user: new q.Z({
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
function ez() {
    return (0, z.kt)({
        id: "123",
        name: "Test Channel",
        type: eu.d4z.GUILD_VOICE,
        guild_id: "456",
    });
}
function eq() {
    var e, t;
    let {
            avatarSizeMode: n,
            displayNameMode: a,
            displayUserMode: s,
        } = (0, _.cj)([er.default], () => ({
            avatarSizeMode: er.default.getAvatarSizeMode(),
            displayNameMode: er.default.getDisplayNameMode(),
            displayUserMode: er.default.getDisplayUserMode(),
        })),
        l = (0, _.e7)([ee.default], () => ee.default.getCurrentUser()),
        [c] = i.useState(() => [
            eK(ep.intl.string(ep.t.C0ZDvr), !0, !1),
            eK(ep.intl.string(ep.t.iOtj8P), !1, !1, !0),
            eK(ep.intl.string(ep.t["0oqNgI"]), !1, !0),
        ]),
        u = (0, _.e7)([B.ZP, J.Z], () => {
            let e = B.ZP.getWidgetByType(eu.Odu.VOICE_V3);
            if (null == e) return null;
            let t = J.Z.getWidget(e.id);
            return null != t && (0, F.Aw)(t) ? t : null;
        }),
        d = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : e_.At,
        f = [null != l ? eW(l) : null, ...c].filter(ea.lm),
        p = [new Map(f.map((e) => [e.user.id, e])), f.map((e) => e.user.id)];
    function h(e) {
        null != u &&
            (e < eC
                ? (0, b.zG)(u.id, { voiceStatesMaxShown: e_.Og })
                : (0, b.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    let g = eu.BRd.MIDNIGHT;
    return (0, r.jsxs)("div", {
        className: eh.voiceSettingsContainer,
        children: [
            (0, r.jsx)(eL, {
                title: ep.intl.string(ep.t.dnvZSk),
                children: (0, r.jsx)(m.q4e, {
                    options: [
                        {
                            label: ep.intl.string(ep.t.YcOxtr),
                            value: eu.ipw.LARGE,
                        },
                        {
                            label: ep.intl.string(ep.t.BKIKq6),
                            value: eu.ipw.SMALL,
                        },
                    ],
                    className: eh.select,
                    onChange: (e) => y.Z.setAvatarSizeMode(e),
                    value: n,
                }),
            }),
            (0, r.jsx)(eL, {
                title: ep.intl.string(ep.t.J0dpcH),
                children: (0, r.jsx)(m.q4e, {
                    options: [
                        {
                            label: ep.intl.string(ep.t.nBmDra),
                            value: eu.wC$.ALWAYS,
                        },
                        {
                            label: ep.intl.string(ep.t["2OvIZW"]),
                            value: eu.wC$.ONLY_WHILE_SPEAKING,
                        },
                        {
                            label: ep.intl.string(ep.t.ekjlPD),
                            value: eu.wC$.NEVER,
                        },
                    ],
                    className: eh.select,
                    onChange: (e) => y.Z.setDisplayNameMode(e),
                    value: a,
                }),
            }),
            (0, r.jsx)(m.f6W, {
                theme: g,
                children: (e) => {
                    var t, i;
                    return (0, r.jsxs)("div", {
                        className: o()(eh.widgetContainer, e),
                        children: [
                            (0, r.jsx)("div", {
                                className: eh.voiceWidgetContainer,
                                children: (0, r.jsx)(V.kI, {
                                    id: "voice-widget",
                                    title: ep.intl.string(ep.t.KNJ6Vl),
                                    channel: ez(),
                                    overlayVoiceStates: p,
                                    displayNameMode: a,
                                    displayUserMode: s,
                                    avatarSizeMode: n,
                                    widget: eu.Odu.VOICE,
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
                                className: eh.widgetHeaderContainer,
                                children: [
                                    (0, r.jsx)(H.PI, { children: ep.intl.string(ep.t.KNJ6Vl) }),
                                    (0, r.jsx)(H.ls, {}),
                                    (0, r.jsx)(H.RT, {
                                        id: null != (t = null == u ? void 0 : u.id) ? t : "voice-widget",
                                        pinned: null != (i = null == u ? void 0 : u.pinned) && i,
                                    }),
                                ],
                            }),
                        ],
                    });
                },
            }),
            (0, r.jsx)(eL, {
                title: ep.intl.string(ep.t.swsWWF),
                children: (0, r.jsx)(m.q4e, {
                    options: [
                        {
                            label: ep.intl.string(ep.t.nBmDra),
                            value: eu.OYC.ALWAYS,
                        },
                        {
                            label: ep.intl.string(ep.t["2OvIZW"]),
                            value: eu.OYC.ONLY_WHILE_SPEAKING,
                        },
                    ],
                    className: eh.select,
                    onChange: (e) => y.Z.setDisplayUserMode(e),
                    value: s,
                }),
            }),
            (0, r.jsx)(eL, {
                title: ep.intl.string(ep.t["X/Uyzc"]),
                titleId: eN,
                children: (0, r.jsx)("div", {
                    className: eh.sliderContainer,
                    children: (0, r.jsx)(m.iRW, {
                        initialValue: d,
                        onValueRender: (e) => (e < eC ? ep.intl.string(ep.t.nrUzFB) : "".concat(Math.floor(e))),
                        minValue: eC - 1,
                        maxValue: eR,
                        onValueChange: h,
                        markers: eP,
                        barStyles: { background: m.TVs.colors.BACKGROUND_MOD_STRONG.css },
                        fillStyles: { background: m.TVs.colors.BG_BRAND.css },
                        "aria-labelledby": eN,
                        onMarkerRender: (e) => (e < eC ? ep.intl.string(ep.t.nrUzFB) : "".concat(Math.floor(e))),
                    }),
                }),
            }),
        ],
    });
}
function eX() {
    let [e, t] = (0, A.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(ed.L.DISMISS);
        };
    return ((0, I.ZP)(() => () => {
        t(ed.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)("div", {
              className: eh.overlaySettingsNux,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: em.Z,
                          alt: ep.intl.string(ep.t.mdXZh4),
                          className: eh.nuxFirstImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: eh.mainTitleContainer,
                          children: [
                              (0, r.jsx)(m.X6q, {
                                  variant: "heading-xl/medium",
                                  color: "header-primary",
                                  children: ep.intl.string(ep.t.jzjJQk),
                              }),
                              (0, r.jsx)(m.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ep.intl.string(ep.t["5dOfxc"]),
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: eg.Z,
                          alt: ep.intl.string(ep.t.mdXZh4),
                          className: eh.nuxUserSettingsImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: eh.closeCircleButton,
                      children: (0, r.jsx)(m.zxk, {
                          variant: "primary",
                          text: ep.intl.string(ep.t.Q26diI),
                          onClick: () => n(),
                      }),
                  }),
                  (0, r.jsx)("div", { className: eh.nuxDivider }),
              ],
          });
}
function eQ(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        a = null == n ? void 0 : n.id,
        o = (0, _.e7)([G.Z], () => G.Z.isLimitedInteractionOverrideEnabled(a), [a]),
        s = i.useMemo(() => null != t && (0, U.H8)(t.pid), [t]),
        l = (0, M.Z)({ location: "overlay_user_settings" }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: u } = (0, _.cj)([er.default], () => ({
            disableClickableRegions: er.default.disableClickableRegions,
            shouldShowKeybindIndicators: er.default.showKeybindIndicators,
        }));
    function d() {
        y.Z.setDisableClickableRegions(!c);
    }
    function f(e) {
        null != n && y.Z.setLimitedInteractionOverride(n.id, e);
    }
    return (0, r.jsxs)("div", {
        className: eh.overlayEnabledSettingsContainer,
        children: [
            (0, r.jsx)(eV, {}),
            l &&
                (0, r.jsx)(eL, {
                    children: (0, r.jsx)(m.j7V, {
                        value: u,
                        onChange: (e) => y.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: ep.intl.string(ep.t.XZTl9v),
                    }),
                }),
            null != a &&
                (0, r.jsxs)(eL, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eh.limitedInteractionOverrideContainer,
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: ep.intl.string(ep.t.wgVQND),
                                }),
                                (0, r.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: ep.intl.string(ep.t["5SsyFx"]),
                                }),
                            ],
                        }),
                        (0, r.jsx)(m.j7V, {
                            value: o || s,
                            disabled: s,
                            onChange: (e) => f(e),
                            hideBorder: !0,
                        }),
                    ],
                }),
            (0, r.jsxs)(eL, {
                children: [
                    (0, r.jsxs)("div", {
                        className: eh.limitedInteractionOverrideContainer,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: ep.intl.string(ep.t["+eFXxs"]),
                            }),
                            (0, r.jsx)(m.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ep.intl.string(ep.t.kivMAg),
                            }),
                        ],
                    }),
                    (0, r.jsx)(m.j7V, {
                        value: !c,
                        onChange: d,
                        hideBorder: !0,
                    }),
                ],
            }),
        ],
    });
}
function eJ(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: i, runningGameApplication: a } = (0, N.Z)(),
        o = (0, j.o4)("user_settings").overlayV3UI,
        s = (0, _.e7)([ee.default], () => ee.default.getCurrentUser());
    return ((0, I.ZP)(() => {
        if (eo.isPlatformEmbedded) return (0, R.Ky)(), R.P7;
    }),
    ew(),
    null == s)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(ec.Z, {
                      title: ep.intl.string(ep.t["9cb1U1"]),
                      children: [
                          o ? (0, r.jsx)(eX, {}) : null,
                          (0, r.jsxs)("div", {
                              className: eh.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eU, {
                                      runningGame: i,
                                      runningGameApplication: a,
                                  }),
                                  (0, r.jsx)(eF, {}),
                                  (0, r.jsx)(eZ, {}),
                              ],
                          }),
                          (0, r.jsx)("div", { className: eh.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(m.hjN, {
                      children: [
                          (0, r.jsx)(eQ, {
                              runningGame: i,
                              runningGameApplication: a,
                          }),
                          (0, r.jsx)("div", { className: eh.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(m.hjN, {
                      title: ep.intl.string(ep.t.r1TZfn),
                      children: [(0, r.jsx)(eq, {}), (0, r.jsx)("div", { className: eh.settingsDivider })],
                  }),
                  (0, r.jsx)(m.hjN, { children: (0, r.jsx)(eY, {}) }),
              ],
          });
}
