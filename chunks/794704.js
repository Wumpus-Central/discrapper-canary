n.d(t, { Z: () => eX }), n(953529), n(388685);
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
    x = n(486016),
    L = n(837268),
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
    W = n(894300),
    K = n(131704),
    z = n(598077),
    q = n(189786),
    X = n(77498),
    Q = n(355863),
    J = n(283595),
    $ = n(594174),
    ee = n(556296),
    et = n(808506),
    en = n(237997),
    er = n(626135),
    ei = n(823379),
    ea = n(358085),
    eo = n(13140),
    es = n(145597),
    el = n(981631),
    ec = n(921944),
    eu = n(987650),
    ed = n(501787),
    ef = n(388032),
    e_ = n(607547),
    ep = n(704437),
    eh = n(494139);
function em(e, t, n) {
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
function eg(e) {
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
                em(e, t, n[t]);
            });
    }
    return e;
}
function eE(e, t) {
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
function eb(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eE(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ey(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eO(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eO(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let ev = eP(null),
    eI = 20,
    eT = 16,
    eS = 1,
    eA = "voice-widget-display-users",
    eC = 25,
    eN = [0, 5, 10, 15, 20, 25];
function eR() {
    let e = eP(ev);
    f().isEqual(e, ev) || (er.default.track(el.rMx.OVERLAY_SETTINGS_UPDATED, e), (ev = e));
}
function eP(e) {
    var t;
    let n = en.default.getNotificationPositionMode(),
        r = n !== el._vf.DISABLED,
        i = ee.ZP.getOverlayKeybind(),
        a = ee.ZP.getOverlayChatKeybind();
    return {
        enabled: et.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: G.Z.isNotificationDisabled(x.OverlayNotificationDisabledSetting.TEXT_CHAT)
            ? "DISABLED"
            : "ENABLED",
        hotkey: null != i ? (0, eo.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, eo.BB)(a.shortcut) : null,
        text_opacity_slider: en.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : et.default.enabled,
    };
}
function ew(e) {
    let { children: t, title: n, className: i, titleId: a } = e;
    return (0, r.jsxs)(m.xJW, {
        children: [
            null != n &&
                (0, r.jsx)(m.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: e_.formItemTitle,
                    id: a,
                    children: n,
                }),
            (0, r.jsx)("div", {
                className: o()(e_.rowContainer, i),
                children: t,
            }),
        ],
    });
}
function eD(e) {
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
        className: o()(e_.groupContainer, f),
        children: [
            (0, r.jsxs)(m.kL8, {
                "aria-label": d,
                onClick: u,
                children: [
                    null != t &&
                        (0, r.jsx)("div", {
                            className: e_.groupHeader,
                            children: t,
                        }),
                    (0, r.jsxs)("div", {
                        className: e_.groupContent,
                        children: [
                            null != n &&
                                (0, r.jsx)("div", {
                                    className: e_.groupIcon,
                                    children: n,
                                }),
                            (0, r.jsxs)("div", {
                                className: e_.groupMainContent,
                                children: [
                                    (0, r.jsx)(m.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        className: e_.groupTitle,
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
                                className: e_.groupAction,
                                children: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: e_.groupWarning,
                children: c,
            }),
        ],
    });
}
function ex(e) {
    var { children: t, className: n, onExpand: a } = e,
        s = ey(e, ["children", "className", "onExpand"]);
    let [l, c] = i.useState(!1),
        u = (e) => {
            c(e), null == a || a(e);
        };
    return (0, r.jsx)(m.zF9, {
        className: e_.collapseable,
        collapsibleContent: (0, r.jsx)("div", {
            className: e_.groupCollapsedContainer,
            children: t,
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                eD,
                eb(eg({}, s), {
                    onClick: (e) => {
                        u(!l), null == t || t(e);
                    },
                    className: o()(e_.mainCollapseableContainer, n),
                    action: (0, r.jsxs)("div", {
                        className: e_.groupCollapsedAction,
                        children: [
                            s.action,
                            l
                                ? (0, r.jsx)(m.CJ0, {
                                      size: "custom",
                                      width: eI,
                                      height: eI,
                                      color: "var(--interactive-active)",
                                  })
                                : (0, r.jsx)(m.Fbu, {
                                      size: "custom",
                                      width: eI,
                                      height: eI,
                                      color: "var(--interactive-active)",
                                  }),
                        ],
                    }),
                }),
            );
        },
    });
}
let eL = new Set([
        L.mM.INITIALIZING,
        L.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        L.mM.WAITING_FOR_MODULE_TRACKING,
        L.mM.WAITING_FOR_OVERLAY_OPEN,
        L.mM.WAITING_FOR_POPOUT_OPEN,
        L.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE,
        L.mM.WAITING_FOR_REACT_INITIALIZATION,
        L.mM.WAITING_FOR_PID_FOCUS,
    ]),
    ej = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eM(e) {
    var t, n, a;
    let { runningGame: o, runningGameApplication: s } = e,
        c = null == o ? void 0 : o.pid,
        u = (0, _.e7)(
            [k.default],
            () => (null == o || null == c ? null : k.default.getTrackedGameByPid(c)),
            [o, c],
            l(),
        ),
        { enabledLegacy: d, enabledOOP: f } = (0, _.cj)([X.Z, J.Z], () => {
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
            return (0, C.b6)(o, !1, [X.Z, J.Z]);
        }, [o, u]),
        p = (0, _.e7)([C.ZP, X.Z, J.Z], () => (null == o ? null : (0, C.FZ)(o, C.ZP, X.Z, J.Z)), [o], l()),
        [E, b] = i.useState(f),
        [O, T] = i.useState(d),
        [S, A] = i.useState(!1);
    i.useEffect(() => {
        b(f), T(d);
    }, [f, d]);
    let N = !(0, es.supportsLegacy)(),
        R = !(0, es.supportsOutOfProcess)(),
        { legacyEnabled: x, oopEnabled: j } = (0, _.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        M = (e, t, n) => {
            var r, i, a;
            if ((ej(n), null == o)) return;
            let s = !1,
                l = !1;
            switch (t) {
                case D.AE.LEGACY_GAME:
                    T(e), g.Z.toggleOverlay(o, e, E), (s = !e && O);
                    break;
                case D.AE.OOP_GAME:
                    b(e), g.Z.toggleOverlay(o, O, e), (l = !e && E);
                    break;
                case D.AE.LEGACY:
                    y.Z.setEnabled(e, j), (0, D.ou)(e, D.AE.LEGACY, null != (r = o.id) ? r : null);
                    break;
                case D.AE.OOP:
                    y.Z.setEnabled(x, e), (0, D.ou)(e, D.AE.OOP, null != (i = o.id) ? i : null);
            }
            (s || l) && (0, Z.l)(s ? D.AE.LEGACY_GAME : D.AE.OOP_GAME, null != (a = o.id) ? a : null);
        },
        U = (e, t) => {
            let n = !t && e,
                r = !j && E,
                i = !x && O,
                a = !E && j,
                o = !O && x;
            switch (!0) {
                case n && (r || i) && (a || o):
                    return "both";
                case n && (r || i):
                    return "global";
                default:
                    return "game";
            }
        },
        G = (e, t, n) => {
            if ((ej(n), null == o)) return;
            let r = !1,
                i = !1;
            switch (t) {
                case "game":
                    g.Z.toggleOverlay(o, e, e), T(e), b(e), (r = !e && O), (i = !e && E);
                    break;
                case "global":
                    y.Z.setEnabled(e, e), (r = !e && x), (i = !e && j);
                    break;
                case "both":
                    y.Z.setEnabled(e, e),
                        g.Z.toggleOverlay(o, e, e),
                        T(e),
                        b(e),
                        (r = (!e && x) || (!e && O)),
                        (i = (!e && j) || (!e && E));
            }
            let a = null;
            if (
                (r
                    ? (a = "game" === t ? D.AE.LEGACY_GAME : D.AE.LEGACY)
                    : i && (a = "game" === t ? D.AE.OOP_GAME : D.AE.OOP),
                null != a)
            ) {
                var s;
                (0, Z.l)(a, null != (s = o.id) ? s : null);
            }
        },
        B = N && R,
        F = !x && !j,
        V = !E && !x && O && !N,
        H = !O && !j && E && !R,
        Y = (null == u ? void 0 : u.overlayMethod) === L.gl.Disabled,
        K = (null == u ? void 0 : u.state) === L.mM.OVERLAY_RENDERING && !Y,
        z = (null == u ? void 0 : u.state) != null && eL.has(u.state) && !Y,
        q = (null == u ? void 0 : u.overlayMethod) === L.gl.OutOfProcess,
        Q = (null == u ? void 0 : u.overlayMethod) === L.gl.OutOfProcessLimitedInteraction,
        $ = (null == u ? void 0 : u.overlayMethod) === L.gl.Hook,
        ee =
            (null == u ? void 0 : u.state) === L.mM.OVERLAY_CRASHED ||
            (null == u ? void 0 : u.state) === L.mM.OVERLAY_CRASHED_DISABLED,
        et = !E && !O,
        [en, er] = (() => {
            switch (!0) {
                case K && q:
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
                        ef.intl.format(ef.t.hFVBIi, {
                            overlayMethod: ef.intl.string(ef.t.a3eXS0),
                            overlayMethodHook: e,
                        }),
                        null,
                    ];
                case K && Q:
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
                        ef.intl.format(ef.t.hFVBIi, {
                            overlayMethod: ef.intl.string(ef.t["506AbW"]),
                            overlayMethodHook: t,
                        }),
                        null,
                    ];
                case K && $:
                    function n() {
                        var e, t;
                        switch (!0) {
                            case (null == u ? void 0 : u.fullscreenType) !== v.Jx.BORDERLESS_FULLSCREEN:
                                return ef.intl.string(ef.t.mJmbeH);
                            case R:
                                return ef.intl.string(ef.t.C7bLTU);
                            case !(null != (e = null == u ? void 0 : u.oopEnabled) && e):
                                return ef.intl.string(ef.t.WiY24u);
                            case !j:
                                return ef.intl.string(ef.t.cAFVsL);
                            case !(null != (t = null == u ? void 0 : u.supportsOutOfProcess) && t):
                                return ef.intl.string(ef.t.XcGEcn);
                            default:
                                return ef.intl.string(ef.t.bJXH2t);
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
                        ef.intl.format(ef.t.hFVBIi, {
                            overlayMethod: ef.intl.string(ef.t.bvlpDQ),
                            overlayMethodHook: i,
                        }),
                        n(),
                    ];
                case ee:
                    return [ef.intl.string(ef.t.OFC2a2), null];
                case B:
                    return [ef.intl.string(ef.t.m7X4a2), null];
                case F:
                    return [ef.intl.string(ef.t["9DUS5u"]), null];
                case et:
                    return [ef.intl.string(ef.t.nQ9EdH), null];
                case V:
                case H:
                    return [ef.intl.string(ef.t.VWUn0d), null];
                case z:
                    if (q) return [ef.intl.string(ef.t["s8+CFh"]), null];
                    if ($) return [ef.intl.string(ef.t.JEEdqq), null];
                    if (Q) return [ef.intl.string(ef.t.pzBMwc), null];
                    return [ef.intl.string(ef.t["2Xhy9v"]), null];
                case null == u:
                    return [ef.intl.string(ef.t.vwHPRk), null];
                default:
                    return [ef.intl.string(ef.t.ONovPz), null];
            }
        })();
    (0, I.ZP)(() => {
        g.Z.getDetectableGames();
    });
    let [ei, ea] = i.useMemo(
        () =>
            z
                ? ["text-muted", m.TVs.colors.TEXT_MUTED.css]
                : K && Q
                  ? ["text-feedback-warning", m.TVs.colors.TEXT_FEEDBACK_WARNING.css]
                  : K && q
                    ? ["text-feedback-positive", m.TVs.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : K && $
                      ? ["text-primary", m.TVs.colors.TEXT_PRIMARY.css]
                      : ["interactive-normal", m.TVs.colors.INTERACTIVE_NORMAL.css],
        [z, K, Q, q, $],
    );
    return null == o
        ? null
        : (0, r.jsxs)(ex, {
              onExpand: A,
              className: S ? e_.expandedContainer : void 0,
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
                                text: ef.intl.string(ef.t["4PJP5u"]),
                                children: (e) =>
                                    (0, r.jsx)(
                                        w.Z,
                                        eb(
                                            eg(
                                                {
                                                    size: eT,
                                                    color: m.TVs.colors.BG_BRAND.css,
                                                },
                                                e,
                                            ),
                                            {
                                                children: (0, r.jsx)(m.kmB, {
                                                    size: "custom",
                                                    width: eT,
                                                    height: eT,
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
                      K || z
                          ? (0, r.jsx)(m.pzj, {
                                size: "xxs",
                                color: ea,
                            })
                          : (0, r.jsx)("div", { className: e_.playingDot }),
                      (0, r.jsx)(m.Text, {
                          variant: "text-xs/semibold",
                          color: ei,
                          children: ef.intl.string(ef.t.CDOx39),
                      }),
                  ],
              }),
              icon: (0, r.jsx)(P.Z, {
                  game: s,
                  pid: null == o ? void 0 : o.pid,
                  size: P.A.MEDIUM,
              }),
              "aria-label": ef.intl.string(ef.t["87O5GB"]),
              action: (0, r.jsx)(m.P3F, {
                  onClick: (e) => ej(e),
                  children: (0, r.jsx)(h.T2, {
                      checked: (E && j) || (O && x),
                      disabled: B,
                      onChange: (e, t) => {
                          G(e, U(e, (E && j) || (O && x)), t);
                      },
                  }),
              }),
              warning: (0, r.jsx)(W.Z, {
                  className: e_.systemServiceWarning,
                  game: o,
              }),
              children: [
                  (0, r.jsx)(eD, {
                      title: ef.intl.string(ef.t["7BlVIi"]),
                      description: ef.intl.string(ef.t.ndgADA),
                      hint: j ? void 0 : ef.intl.string(ef.t.cAFVsL),
                      "aria-label": ef.intl.string(ef.t["7BlVIi"]),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.T2, {
                                  checked: E && j,
                                  disabled: R,
                                  onChange: (e, t) => {
                                      e && !j ? M(e, D.AE.OOP, t) : M(e, D.AE.OOP_GAME, t);
                                  },
                              }),
                              (0, r.jsx)("div", { className: e_.emptySpacer }),
                          ],
                      }),
                  }),
                  (0, r.jsx)(eD, {
                      title: ef.intl.string(ef.t.BfFpW1),
                      description: ef.intl.string(ef.t.OzInYm),
                      hint: x ? void 0 : ef.intl.string(ef.t["3sYHXl"]),
                      "aria-label": ef.intl.string(ef.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.T2, {
                                  checked: O && x,
                                  disabled: N,
                                  onChange: (e, t) => {
                                      e && !x ? M(e, D.AE.LEGACY, t) : M(e, D.AE.LEGACY_GAME, t);
                                  },
                              }),
                              (0, r.jsx)("div", { className: e_.emptySpacer }),
                          ],
                      }),
                  }),
              ],
          });
}
function ek(e) {
    let { game: t, gameApplication: n } = e,
        a = i.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        o = (0, _.e7)([T.Z], () => (null != n ? n : T.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(P.Z, {
        game: o,
        pid: a,
        size: P.A.SMALL,
    });
}
function eU(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: a,
            getEnabledFromStatus: o,
            onChange: s,
            clientSettingType: l,
            ariaLabel: c,
        } = e,
        u = (0, _.cj)([C.ZP, X.Z, J.Z], () => (0, C.FZ)(t, C.ZP, X.Z, J.Z)),
        d = (0, _.cj)([X.Z, J.Z], () => (0, C.b6)(t, !1, [X.Z, J.Z]), [t]),
        f = o(d),
        [p, m] = i.useState(f);
    i.useEffect(() => {
        m(f);
    }, [f]);
    let g = (e, n) => {
        let r = !e && p;
        if ((ej(n), m(e), s(e, u, d), r)) {
            var i, a;
            (0, Z.l)(l, null != (a = null != (i = u.id) ? i : null == t ? void 0 : t.id) ? a : null);
        }
    };
    return (0, r.jsx)(eD, {
        title: t.name,
        icon: (0, r.jsx)(ek, {
            game: u,
            gameApplication: n,
        }),
        "aria-label": c,
        action: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.T2, {
                    checked: p,
                    disabled: a,
                    onChange: (e, t) => g(e, t),
                }),
                (0, r.jsx)("div", { className: e_.emptySpacer }),
            ],
        }),
    });
}
function eG() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, _.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        o = (0, _.Wu)([C.ZP], () => C.ZP.getGamesSeen(!0)).filter((e) => !(0, Y.le)(e)),
        s = (0, S.Z)(o.map((e) => e.id)),
        l = !(0, es.supportsLegacy)(),
        c = (e, t) => {
            var r, i;
            ej(t), y.Z.setEnabled(e, a);
            let o = null != (i = null == (r = C.ZP.getCurrentGameForAnalytics()) ? void 0 : r.id) ? i : null;
            (0, D.ou)(e, D.AE.LEGACY, o), !e && n && (0, Z.l)(D.AE.LEGACY, o);
        },
        u = (e, t, n) => {
            let { enabledOOP: r } = n;
            g.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                (0, es.supportsLegacy)()
                    ? l
                        ? ef.intl.string(ef.t.r9jEV1)
                        : ef.intl.string(ef.t.OzInYm)
                    : ef.intl.string(ef.t["8Ox6/P"]),
            [l],
        );
    return 0 === o.length
        ? (0, r.jsx)(eD, {
              title: ef.intl.string(ef.t.BfFpW1),
              description: d,
              "aria-label": ef.intl.string(ef.t.BfFpW1),
              className: e_.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.T2, {
                          checked: n,
                          disabled: l,
                          onChange: (e, t) => c(e, t),
                      }),
                      eu.iP && (0, r.jsx)("div", { className: e_.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ex, {
              onExpand: t,
              className: e ? e_.expandedContainer : void 0,
              title: ef.intl.string(ef.t.BfFpW1),
              description: d,
              "aria-label": ef.intl.string(ef.t.BfFpW1),
              action: (0, r.jsx)(m.P3F, {
                  onClick: (e) => ej(e),
                  children: (0, r.jsx)(h.T2, {
                      checked: n,
                      disabled: l,
                      onChange: (e, t) => c(e, t),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: e_.subtitleContainer,
                      children: (0, r.jsx)(m.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: ef.intl.string(ef.t.FzoWRk),
                      }),
                  }),
                  (0, r.jsx)(m.zJl, {
                      className: e_.scroller,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              eU,
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
                                  ariaLabel: ef.intl.format(ef.t.hvPYsL, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eB() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: a } = (0, _.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        o = !(0, es.supportsOutOfProcess)(),
        s = (0, _.Wu)([C.ZP], () => C.ZP.getGamesSeen(!0)).filter((e) => !(0, Y.le)(e)),
        l = (0, S.Z)(s.map((e) => e.id)),
        c = (e, t) => {
            var r, i;
            ej(t);
            let o = !e && n;
            y.Z.setEnabled(a, e);
            let s = null != (i = null == (r = C.ZP.getCurrentGameForAnalytics()) ? void 0 : r.id) ? i : null;
            (0, D.ou)(e, D.AE.OOP, s), o && (0, Z.l)(D.AE.OOP, s);
        },
        u = (e, t, n) => {
            let { enabledLegacy: r } = n;
            g.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                eu.iP ? (o ? ef.intl.string(ef.t.C7bLTU) : ef.intl.string(ef.t.ndgADA)) : ef.intl.string(ef.t.m7X4a2),
            [o],
        );
    return 0 === s.length
        ? (0, r.jsx)(eD, {
              title: ef.intl.string(ef.t["7BlVIi"]),
              description: d,
              "aria-label": ef.intl.string(ef.t["7BlVIi"]),
              className: e_.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.T2, {
                          checked: n,
                          disabled: o,
                          onChange: (e, t) => c(e, t),
                      }),
                      eu.iP && (0, r.jsx)("div", { className: e_.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ex, {
              onExpand: t,
              className: e ? e_.expandedContainer : void 0,
              title: ef.intl.string(ef.t["7BlVIi"]),
              description: d,
              "aria-label": ef.intl.string(ef.t["7BlVIi"]),
              action: (0, r.jsx)(m.P3F, {
                  onClick: (e) => ej(e),
                  children: (0, r.jsx)(h.T2, {
                      checked: n,
                      disabled: o,
                      onChange: (e, t) => c(e, t),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: e_.subtitleContainer,
                      children: (0, r.jsx)(m.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: ef.intl.string(ef.t.FzoWRk),
                      }),
                  }),
                  (0, r.jsx)(m.zJl, {
                      className: e_.scroller,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              eU,
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
                                  ariaLabel: ef.intl.format(ef.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eZ() {
    var e;
    let t = (0, _.e7)([ee.ZP], () => ee.ZP.getOverlayKeybind()),
        n = !(0, es.supportsLegacy)(),
        i = !(0, es.supportsOutOfProcess)(),
        [a, o] = (0, _.Wu)([C.ZP], () => [C.ZP.canShowAdminWarning, C.ZP.getVisibleGame()], []),
        s = null != o && o.elevated && a,
        l = !(0, ee.I1)(null != (e = null == t ? void 0 : t.shortcut) ? e : []);
    function c(e) {
        u()(null != t, "Keybind should never be undefined"), E.Z.setKeybind(eb(eg({}, t), { shortcut: e }));
    }
    return (0, r.jsx)(ew, {
        children: (0, r.jsx)("div", {
            className: e_.keybindMainContainer,
            children: (0, r.jsxs)("div", {
                className: e_.keybindContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: e_.keybindHeaderContainer,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: ef.intl.string(ef.t.VsAZcH),
                            }),
                            s &&
                                (0, r.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: e_.keybindAdminWarning,
                                    children: ef.intl.string(ef.t.NsowVV),
                                }),
                            l &&
                                (0, r.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: e_.keybindAdminWarning,
                                    children: ef.intl.string(ef.t.UNoTw8),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: e_.keybindRecorderContainer,
                        children: (0, r.jsx)(O.Z, {
                            disabled: n && i,
                            defaultValue: null != t ? t.shortcut : [],
                            onChange: c,
                        }),
                    }),
                ],
            }),
        }),
    });
}
let eF = (e, t, n) =>
    [
        {
            title: ef.t.eVE4LS,
            description: ef.t["72WNqq"],
            disabledSetting: x.OverlayNotificationDisabledSetting.TEXT_CHAT,
        },
        {
            title: ef.t.hqsZJS,
            description: ef.t.kHjdqa,
            disabledSetting: x.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE,
        },
        e && {
            title: ef.t.sop3rq,
            description: ef.t.pjgffX,
            disabledSetting: x.OverlayNotificationDisabledSetting.GAME_ACTIVITY,
        },
        t && {
            title: ef.t["2QVhbW"],
            description: ef.t.wQ4ilJ,
            disabledSetting: x.OverlayNotificationDisabledSetting.NOW_PLAYING,
        },
        n && {
            title: ef.t["5/21FR"],
            description: ef.t.EIzwfH,
            disabledSetting: x.OverlayNotificationDisabledSetting.FRIEND_STREAM_WATCH_NUDGE,
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function eV() {
    let { allowActivityWidget: e, allowNowPlaying: t } = (0, j.o4)("user_settings"),
        { enabled: n } = (0, j.aq)("OverlayV3StreamWatchNudge"),
        i = eF(e, t, n),
        a = (e) => (t) => {
            y.Z.setNotificationDisabledSetting(e, !t);
        },
        o = (0, _.e7)([G.Z], () => G.Z.getDisabledNotifications());
    return (0, r.jsxs)("div", {
        className: e_.notificationSettingsContainer,
        children: [
            (0, r.jsx)(m.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: ef.intl.string(ef.t.xOE5bG),
            }),
            i.map((e) =>
                (0, r.jsxs)(
                    ew,
                    {
                        className: e_.notificationItem,
                        children: [
                            (0, r.jsxs)("div", {
                                className: e_.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(m.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: ef.intl.string(e.title),
                                    }),
                                    (0, r.jsx)(m.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ef.intl.string(e.description),
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
function eH(e) {
    let t = eY(e.username);
    return (t.user = e), t;
}
function eY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = "456" + Math.floor(1000000 * Math.random());
    return {
        voiceState: new q.Z({
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
        user: new z.Z({
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
function eW() {
    return (0, K.kt)({
        id: "123",
        name: "Test Channel",
        type: el.d4z.GUILD_VOICE,
        guild_id: "456",
    });
}
function eK() {
    var e, t;
    let {
            avatarSizeMode: n,
            displayNameMode: a,
            displayUserMode: s,
        } = (0, _.cj)([en.default], () => ({
            avatarSizeMode: en.default.getAvatarSizeMode(),
            displayNameMode: en.default.getDisplayNameMode(),
            displayUserMode: en.default.getDisplayUserMode(),
        })),
        l = (0, _.e7)([$.default], () => $.default.getCurrentUser()),
        [c] = i.useState(() => [
            eY(ef.intl.string(ef.t.C0ZDvr), !0, !1),
            eY(ef.intl.string(ef.t.iOtj8P), !1, !1, !0),
            eY(ef.intl.string(ef.t["0oqNgI"]), !1, !0),
        ]),
        u = (0, _.e7)([B.ZP, Q.Z], () => {
            let e = B.ZP.getWidgetByType(el.Odu.VOICE_V3);
            if (null == e) return null;
            let t = Q.Z.getWidget(e.id);
            return null != t && (0, F.Aw)(t) ? t : null;
        }),
        d = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : ed.At,
        f = [null != l ? eH(l) : null, ...c].filter(ei.lm),
        p = [new Map(f.map((e) => [e.user.id, e])), f.map((e) => e.user.id)];
    function h(e) {
        null != u &&
            (e < eS
                ? (0, b.zG)(u.id, { voiceStatesMaxShown: ed.Og })
                : (0, b.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    let g = el.BRd.MIDNIGHT;
    return (0, r.jsxs)("div", {
        className: e_.voiceSettingsContainer,
        children: [
            (0, r.jsx)(ew, {
                title: ef.intl.string(ef.t.dnvZSk),
                children: (0, r.jsx)(m.q4e, {
                    options: [
                        {
                            label: ef.intl.string(ef.t.YcOxtr),
                            value: el.ipw.LARGE,
                        },
                        {
                            label: ef.intl.string(ef.t.BKIKq6),
                            value: el.ipw.SMALL,
                        },
                    ],
                    className: e_.select,
                    onChange: (e) => y.Z.setAvatarSizeMode(e),
                    value: n,
                }),
            }),
            (0, r.jsx)(ew, {
                title: ef.intl.string(ef.t.J0dpcH),
                children: (0, r.jsx)(m.q4e, {
                    options: [
                        {
                            label: ef.intl.string(ef.t.nBmDra),
                            value: el.wC$.ALWAYS,
                        },
                        {
                            label: ef.intl.string(ef.t["2OvIZW"]),
                            value: el.wC$.ONLY_WHILE_SPEAKING,
                        },
                        {
                            label: ef.intl.string(ef.t.ekjlPD),
                            value: el.wC$.NEVER,
                        },
                    ],
                    className: e_.select,
                    onChange: (e) => y.Z.setDisplayNameMode(e),
                    value: a,
                }),
            }),
            (0, r.jsx)(m.f6W, {
                theme: g,
                children: (e) => {
                    var t, i;
                    return (0, r.jsxs)("div", {
                        className: o()(e_.widgetContainer, e),
                        children: [
                            (0, r.jsx)("div", {
                                className: e_.voiceWidgetContainer,
                                children: (0, r.jsx)(V.kI, {
                                    id: "voice-widget",
                                    title: ef.intl.string(ef.t.KNJ6Vl),
                                    channel: eW(),
                                    overlayVoiceStates: p,
                                    displayNameMode: a,
                                    displayUserMode: s,
                                    avatarSizeMode: n,
                                    widget: el.Odu.VOICE,
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
                                className: e_.widgetHeaderContainer,
                                children: [
                                    (0, r.jsx)(H.PI, { children: ef.intl.string(ef.t.KNJ6Vl) }),
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
            (0, r.jsx)(ew, {
                title: ef.intl.string(ef.t.swsWWF),
                children: (0, r.jsx)(m.q4e, {
                    options: [
                        {
                            label: ef.intl.string(ef.t.nBmDra),
                            value: el.OYC.ALWAYS,
                        },
                        {
                            label: ef.intl.string(ef.t["2OvIZW"]),
                            value: el.OYC.ONLY_WHILE_SPEAKING,
                        },
                    ],
                    className: e_.select,
                    onChange: (e) => y.Z.setDisplayUserMode(e),
                    value: s,
                }),
            }),
            (0, r.jsx)(ew, {
                title: ef.intl.string(ef.t["X/Uyzc"]),
                titleId: eA,
                children: (0, r.jsx)("div", {
                    className: e_.sliderContainer,
                    children: (0, r.jsx)(m.iRW, {
                        initialValue: d,
                        onValueRender: (e) => (e < eS ? ef.intl.string(ef.t.nrUzFB) : "".concat(Math.floor(e))),
                        minValue: eS - 1,
                        maxValue: eC,
                        onValueChange: h,
                        markers: eN,
                        barStyles: { background: m.TVs.colors.BACKGROUND_MOD_STRONG.css },
                        fillStyles: { background: m.TVs.colors.BG_BRAND.css },
                        "aria-labelledby": eA,
                        onMarkerRender: (e) => (e < eS ? ef.intl.string(ef.t.nrUzFB) : "".concat(Math.floor(e))),
                    }),
                }),
            }),
        ],
    });
}
function ez() {
    let [e, t] = (0, A.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(ec.L.DISMISS);
        };
    return ((0, I.ZP)(() => () => {
        t(ec.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)("div", {
              className: e_.overlaySettingsNux,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: ep.Z,
                          alt: ef.intl.string(ef.t.mdXZh4),
                          className: e_.nuxFirstImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: e_.mainTitleContainer,
                          children: [
                              (0, r.jsx)(m.X6q, {
                                  variant: "heading-xl/medium",
                                  color: "header-primary",
                                  children: ef.intl.string(ef.t.jzjJQk),
                              }),
                              (0, r.jsx)(m.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ef.intl.string(ef.t["5dOfxc"]),
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: eh.Z,
                          alt: ef.intl.string(ef.t.mdXZh4),
                          className: e_.nuxUserSettingsImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: e_.closeCircleButton,
                      children: (0, r.jsx)(m.zxk, {
                          variant: "primary",
                          text: ef.intl.string(ef.t.Q26diI),
                          onClick: () => n(),
                      }),
                  }),
                  (0, r.jsx)("div", { className: e_.nuxDivider }),
              ],
          });
}
function eq(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        a = null == n ? void 0 : n.id,
        o = (0, _.e7)([G.Z], () => G.Z.isLimitedInteractionOverrideEnabled(a), [a]),
        s = i.useMemo(() => null != t && (0, U.H8)(t.pid), [t]),
        l = (0, M.Z)({ location: "overlay_user_settings" }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: u } = (0, _.cj)([en.default], () => ({
            disableClickableRegions: en.default.disableClickableRegions,
            shouldShowKeybindIndicators: en.default.showKeybindIndicators,
        }));
    function d() {
        y.Z.setDisableClickableRegions(!c);
    }
    function f(e) {
        null != n && y.Z.setLimitedInteractionOverride(n.id, e);
    }
    return (0, r.jsxs)("div", {
        className: e_.overlayEnabledSettingsContainer,
        children: [
            (0, r.jsx)(eZ, {}),
            l &&
                (0, r.jsx)(ew, {
                    children: (0, r.jsx)(m.j7V, {
                        value: u,
                        onChange: (e) => y.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: ef.intl.string(ef.t.XZTl9v),
                    }),
                }),
            null != a &&
                (0, r.jsxs)(ew, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: e_.limitedInteractionOverrideContainer,
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: ef.intl.string(ef.t.wgVQND),
                                }),
                                (0, r.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: ef.intl.string(ef.t["5SsyFx"]),
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
            (0, r.jsxs)(ew, {
                children: [
                    (0, r.jsxs)("div", {
                        className: e_.limitedInteractionOverrideContainer,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: ef.intl.string(ef.t["+eFXxs"]),
                            }),
                            (0, r.jsx)(m.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ef.intl.string(ef.t.kivMAg),
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
function eX(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: i, runningGameApplication: a } = (0, N.Z)(),
        o = (0, j.o4)("user_settings").overlayV3UI,
        s = (0, _.e7)([$.default], () => $.default.getCurrentUser());
    return ((0, I.ZP)(() => {
        if (ea.isPlatformEmbedded) return (0, R.Ky)(), R.P7;
    }),
    eR(),
    null == s)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(m.hjN, {
                      tag: m.RB0.H1,
                      title: ef.intl.string(ef.t["9cb1U1"]),
                      children: [
                          o ? (0, r.jsx)(ez, {}) : null,
                          (0, r.jsxs)("div", {
                              className: e_.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eM, {
                                      runningGame: i,
                                      runningGameApplication: a,
                                  }),
                                  (0, r.jsx)(eB, {}),
                                  (0, r.jsx)(eG, {}),
                              ],
                          }),
                          (0, r.jsx)("div", { className: e_.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(m.hjN, {
                      children: [
                          (0, r.jsx)(eq, {
                              runningGame: i,
                              runningGameApplication: a,
                          }),
                          (0, r.jsx)("div", { className: e_.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(m.hjN, {
                      title: ef.intl.string(ef.t.r1TZfn),
                      children: [(0, r.jsx)(eK, {}), (0, r.jsx)("div", { className: e_.settingsDivider })],
                  }),
                  (0, r.jsx)(m.hjN, { children: (0, r.jsx)(eV, {}) }),
              ],
          });
}
