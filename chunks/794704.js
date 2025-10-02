n.d(t, { Z: () => eQ }), n(953529), n(388685);
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
    h = n(481060),
    m = n(224706),
    g = n(660216),
    E = n(765250),
    b = n(13245),
    y = n(825209),
    O = n(593472),
    v = n(493773),
    I = n(812206),
    T = n(835473),
    S = n(243778),
    A = n(594190),
    C = n(137920),
    N = n(320724),
    R = n(925329),
    P = n(297700),
    w = n(444295),
    D = n(486016),
    L = n(837268),
    x = n(32300),
    j = n(809357),
    M = n(371651),
    k = n(829907),
    U = n(624864),
    G = n(610394),
    B = n(957148),
    Z = n(340101),
    F = n(243487),
    V = n(430561),
    H = n(509003),
    Y = n(865066),
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
    el = n(273313),
    ec = n(981631),
    eu = n(921944),
    ed = n(987650),
    ef = n(501787),
    e_ = n(388032),
    ep = n(289726),
    eh = n(131970),
    em = n(730462);
function eg(e, t, n) {
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
function eE(e) {
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
                eg(e, t, n[t]);
            });
    }
    return e;
}
function eb(e, t) {
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
function ey(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eb(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eO(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ev(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ev(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let eI = ew(null),
    eT = 20,
    eS = 16,
    eA = 1,
    eC = "voice-widget-display-users",
    eN = 25,
    eR = [0, 5, 10, 15, 20, 25];
function eP() {
    let e = ew(eI);
    f().isEqual(e, eI) || (er.default.track(ec.rMx.OVERLAY_SETTINGS_UPDATED, e), (eI = e));
}
function ew(e) {
    var t;
    let n = en.default.getNotificationPositionMode(),
        r = n !== ec._vf.DISABLED,
        i = ee.ZP.getOverlayKeybind(),
        a = ee.ZP.getOverlayChatKeybind();
    return {
        enabled: et.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: U.Z.isNotificationDisabled(D.OverlayNotificationDisabledSetting.TEXT_CHAT)
            ? "DISABLED"
            : "ENABLED",
        hotkey: null != i ? (0, eo.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, eo.BB)(a.shortcut) : null,
        text_opacity_slider: en.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : et.default.enabled,
    };
}
function eD(e) {
    let { children: t, title: n, className: i, titleId: a } = e;
    return (0, r.jsxs)(h.xJW, {
        children: [
            null != n &&
                (0, r.jsx)(h.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: ep.formItemTitle,
                    id: a,
                    children: n,
                }),
            (0, r.jsx)("div", {
                className: o()(ep.rowContainer, i),
                children: t,
            }),
        ],
    });
}
function eL(e) {
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
        className: o()(ep.groupContainer, f),
        children: [
            (0, r.jsxs)(h.kL8, {
                "aria-label": d,
                onClick: u,
                children: [
                    null != t &&
                        (0, r.jsx)("div", {
                            className: ep.groupHeader,
                            children: t,
                        }),
                    (0, r.jsxs)("div", {
                        className: ep.groupContent,
                        children: [
                            null != n &&
                                (0, r.jsx)("div", {
                                    className: ep.groupIcon,
                                    children: n,
                                }),
                            (0, r.jsxs)("div", {
                                className: ep.groupMainContent,
                                children: [
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        className: ep.groupTitle,
                                        children: i,
                                    }),
                                    null != a &&
                                        (0, r.jsx)(h.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-secondary",
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
                                className: ep.groupAction,
                                children: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: ep.groupWarning,
                children: c,
            }),
        ],
    });
}
function ex(e) {
    var { children: t, className: n, onExpand: a } = e,
        s = eO(e, ["children", "className", "onExpand"]);
    let [l, c] = i.useState(!1),
        u = (e) => {
            c(e), null == a || a(e);
        };
    return (0, r.jsx)(h.zF9, {
        className: ep.collapseable,
        collapsibleContent: (0, r.jsx)("div", {
            className: ep.groupCollapsedContainer,
            children: t,
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                eL,
                ey(eE({}, s), {
                    onClick: (e) => {
                        u(!l), null == t || t(e);
                    },
                    className: o()(ep.mainCollapseableContainer, n),
                    action: (0, r.jsxs)("div", {
                        className: ep.groupCollapsedAction,
                        children: [
                            s.action,
                            l
                                ? (0, r.jsx)(h.CJ0, {
                                      size: "custom",
                                      width: eT,
                                      height: eT,
                                      color: "var(--interactive-active)",
                                  })
                                : (0, r.jsx)(h.Fbu, {
                                      size: "custom",
                                      width: eT,
                                      height: eT,
                                      color: "var(--interactive-active)",
                                  }),
                        ],
                    }),
                }),
            );
        },
    });
}
let ej = new Set([
        L.mM.INITIALIZING,
        L.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        L.mM.WAITING_FOR_MODULE_TRACKING,
        L.mM.WAITING_FOR_OVERLAY_OPEN,
        L.mM.WAITING_FOR_POPOUT_OPEN,
        L.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE,
        L.mM.WAITING_FOR_REACT_INITIALIZATION,
        L.mM.WAITING_FOR_PID_FOCUS,
    ]),
    eM = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function ek(e) {
    var t, n, a;
    let { runningGame: o, runningGameApplication: s } = e,
        c = null == o ? void 0 : o.pid,
        u = (0, _.e7)(
            [M.default],
            () => (null == o || null == c ? null : M.default.getTrackedGameByPid(c)),
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
            return (0, A.b6)(o, !1, [X.Z, J.Z]);
        }, [o, u]),
        p = (0, _.e7)([A.ZP, X.Z, J.Z], () => (null == o ? null : (0, A.FZ)(o, A.ZP, X.Z, J.Z)), [o], l()),
        [g, E] = i.useState(f),
        [y, I] = i.useState(d),
        [T, S] = i.useState(!1);
    i.useEffect(() => {
        E(f), I(d);
    }, [f, d]);
    let C = !(0, es.supportsLegacy)(),
        N = !(0, es.supportsOutOfProcess)(),
        { legacyEnabled: D, oopEnabled: x } = (0, _.cj)([M.default], () => M.default.getGlobalEnabledStatus()),
        j = (e, t) => {
            var n, r, i;
            if (null == o) return;
            let a = !1,
                s = !1;
            switch (t) {
                case w.AE.LEGACY_GAME:
                    I(e), m.Z.toggleOverlay(o, e, g), (a = !e && y);
                    break;
                case w.AE.OOP_GAME:
                    E(e), m.Z.toggleOverlay(o, y, e), (s = !e && g);
                    break;
                case w.AE.LEGACY:
                    b.Z.setEnabled(e, x), (0, w.ou)(e, w.AE.LEGACY, null != (n = o.id) ? n : null);
                    break;
                case w.AE.OOP:
                    b.Z.setEnabled(D, e), (0, w.ou)(e, w.AE.OOP, null != (r = o.id) ? r : null);
            }
            (a || s) && (0, B.l)(a ? w.AE.LEGACY_GAME : w.AE.OOP_GAME, null != (i = o.id) ? i : null);
        },
        k = (e, t) => {
            let n = !t && e,
                r = !x && g,
                i = !D && y,
                a = !g && x,
                o = !y && D;
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
            if (null == o) return;
            let n = !1,
                r = !1;
            switch (t) {
                case "game":
                    m.Z.toggleOverlay(o, e, e), I(e), E(e), (n = !e && y), (r = !e && g);
                    break;
                case "global":
                    b.Z.setEnabled(e, e), (n = !e && D), (r = !e && x);
                    break;
                case "both":
                    b.Z.setEnabled(e, e),
                        m.Z.toggleOverlay(o, e, e),
                        I(e),
                        E(e),
                        (n = (!e && D) || (!e && y)),
                        (r = (!e && x) || (!e && g));
            }
            let i = null;
            if (
                (n
                    ? (i = "game" === t ? w.AE.LEGACY_GAME : w.AE.LEGACY)
                    : r && (i = "game" === t ? w.AE.OOP_GAME : w.AE.OOP),
                null != i)
            ) {
                var a;
                (0, B.l)(i, null != (a = o.id) ? a : null);
            }
        },
        G = C && N,
        Z = !D && !x,
        F = !g && !D && y && !C,
        V = !y && !x && g && !N,
        H = (null == u ? void 0 : u.overlayMethod) === L.gl.Disabled,
        Y = (null == u ? void 0 : u.state) === L.mM.OVERLAY_RENDERING && !H,
        K = (null == u ? void 0 : u.state) != null && ej.has(u.state) && !H,
        z = (null == u ? void 0 : u.overlayMethod) === L.gl.OutOfProcess,
        q = (null == u ? void 0 : u.overlayMethod) === L.gl.OutOfProcessLimitedInteraction,
        Q = (null == u ? void 0 : u.overlayMethod) === L.gl.Hook,
        $ =
            (null == u ? void 0 : u.state) === L.mM.OVERLAY_CRASHED ||
            (null == u ? void 0 : u.state) === L.mM.OVERLAY_CRASHED_DISABLED,
        ee = !g && !y,
        [et, en] = (() => {
            switch (!0) {
                case Y && z:
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
                        e_.intl.format(e_.t.hFVBIi, {
                            overlayMethod: e_.intl.string(e_.t.a3eXS0),
                            overlayMethodHook: e,
                        }),
                        null,
                    ];
                case Y && q:
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
                        e_.intl.format(e_.t.hFVBIi, {
                            overlayMethod: e_.intl.string(e_.t["506AbW"]),
                            overlayMethodHook: t,
                        }),
                        null,
                    ];
                case Y && Q:
                    function n() {
                        var e, t;
                        switch (!0) {
                            case (null == u ? void 0 : u.fullscreenType) !== O.Jx.BORDERLESS_FULLSCREEN:
                                return e_.intl.string(e_.t.mJmbeH);
                            case N:
                                return e_.intl.string(e_.t.C7bLTU);
                            case !(null != (e = null == u ? void 0 : u.oopEnabled) && e):
                                return e_.intl.string(e_.t.WiY24u);
                            case !x:
                                return e_.intl.string(e_.t.cAFVsL);
                            case !(null != (t = null == u ? void 0 : u.supportsOutOfProcess) && t):
                                return e_.intl.string(e_.t.XcGEcn);
                            default:
                                return e_.intl.string(e_.t.bJXH2t);
                        }
                    }
                    function i(e, t) {
                        return (0, r.jsx)(
                            h.Text,
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
                        e_.intl.format(e_.t.hFVBIi, {
                            overlayMethod: e_.intl.string(e_.t.bvlpDQ),
                            overlayMethodHook: i,
                        }),
                        n(),
                    ];
                case $:
                    return [e_.intl.string(e_.t.OFC2a2), null];
                case G:
                    return [e_.intl.string(e_.t.m7X4a2), null];
                case Z:
                    return [e_.intl.string(e_.t["9DUS5u"]), null];
                case ee:
                    return [e_.intl.string(e_.t.nQ9EdH), null];
                case F:
                case V:
                    return [e_.intl.string(e_.t.VWUn0d), null];
                case K:
                    if (z) return [e_.intl.string(e_.t["s8+CFh"]), null];
                    if (Q) return [e_.intl.string(e_.t.JEEdqq), null];
                    if (q) return [e_.intl.string(e_.t.pzBMwc), null];
                    return [e_.intl.string(e_.t["2Xhy9v"]), null];
                case null == u:
                    return [e_.intl.string(e_.t.vwHPRk), null];
                default:
                    return [e_.intl.string(e_.t.ONovPz), null];
            }
        })();
    (0, v.ZP)(() => {
        m.Z.getDetectableGames();
    });
    let [er, ei] = i.useMemo(
        () =>
            K
                ? ["text-muted", h.TVs.colors.TEXT_MUTED.css]
                : Y && q
                  ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css]
                  : Y && z
                    ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : Y && Q
                      ? ["text-primary", h.TVs.colors.TEXT_PRIMARY.css]
                      : ["interactive-normal", h.TVs.colors.INTERACTIVE_NORMAL.css],
        [K, Y, q, z, Q],
    );
    return null == o
        ? null
        : (0, r.jsxs)(ex, {
              onExpand: S,
              className: T ? ep.expandedContainer : void 0,
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
                          ? (0, r.jsx)(h.ua7, {
                                text: e_.intl.string(e_.t["4PJP5u"]),
                                children: (e) =>
                                    (0, r.jsx)(
                                        P.Z,
                                        ey(
                                            eE(
                                                {
                                                    size: eS,
                                                    color: h.TVs.colors.BG_BRAND.css,
                                                },
                                                e,
                                            ),
                                            {
                                                children: (0, r.jsx)(h.kmB, {
                                                    size: "custom",
                                                    width: eS,
                                                    height: eS,
                                                    color: h.TVs.colors.WHITE.css,
                                                }),
                                            },
                                        ),
                                    ),
                            })
                          : null,
                  ],
              }),
              description: et,
              hint: null != en ? en : void 0,
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      Y || K
                          ? (0, r.jsx)(h.pzj, {
                                size: "xxs",
                                color: ei,
                            })
                          : (0, r.jsx)("div", { className: ep.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: er,
                          children: e_.intl.string(e_.t.CDOx39),
                      }),
                  ],
              }),
              icon: (0, r.jsx)(R.Z, {
                  game: s,
                  pid: null == o ? void 0 : o.pid,
                  size: R.A.MEDIUM,
              }),
              "aria-label": e_.intl.string(e_.t["87O5GB"]),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eM(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: (g && x) || (y && D),
                      disabled: G,
                      onChange: (e) => {
                          U(e, k(e, (g && x) || (y && D)));
                      },
                  }),
              }),
              warning: (0, r.jsx)(W.Z, {
                  className: ep.systemServiceWarning,
                  game: o,
              }),
              children: [
                  (0, r.jsx)(eL, {
                      title: e_.intl.string(e_.t["7BlVIi"]),
                      description: e_.intl.string(e_.t.ndgADA),
                      hint: x ? void 0 : e_.intl.string(e_.t.cAFVsL),
                      "aria-label": e_.intl.string(e_.t["7BlVIi"]),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: g && x,
                                  disabled: N,
                                  onChange: (e) => {
                                      e && !x ? j(e, w.AE.OOP) : j(e, w.AE.OOP_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: ep.emptySpacer }),
                          ],
                      }),
                  }),
                  (0, r.jsx)(eL, {
                      title: e_.intl.string(e_.t.BfFpW1),
                      description: e_.intl.string(e_.t.OzInYm),
                      hint: D ? void 0 : e_.intl.string(e_.t["3sYHXl"]),
                      "aria-label": e_.intl.string(e_.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: y && D,
                                  disabled: C,
                                  onChange: (e) => {
                                      e && !D ? j(e, w.AE.LEGACY) : j(e, w.AE.LEGACY_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: ep.emptySpacer }),
                          ],
                      }),
                  }),
              ],
          });
}
function eU(e) {
    let { game: t, gameApplication: n } = e,
        a = i.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        o = (0, _.e7)([I.Z], () => (null != n ? n : I.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(R.Z, {
        game: o,
        pid: a,
        size: R.A.SMALL,
    });
}
function eG(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: a,
            getEnabledFromStatus: o,
            onChange: s,
            clientSettingType: l,
            ariaLabel: c,
        } = e,
        u = (0, _.cj)([A.ZP, X.Z, J.Z], () => (0, A.FZ)(t, A.ZP, X.Z, J.Z)),
        d = (0, _.cj)([X.Z, J.Z], () => (0, A.b6)(t, !1, [X.Z, J.Z]), [t]),
        f = o(d),
        [p, m] = i.useState(f);
    i.useEffect(() => {
        m(f);
    }, [f]);
    let g = (e) => {
        let n = !e && p;
        if ((m(e), s(e, u, d), n)) {
            var r, i;
            (0, B.l)(l, null != (i = null != (r = u.id) ? r : null == t ? void 0 : t.id) ? i : null);
        }
    };
    return (0, r.jsx)(eL, {
        title: t.name,
        icon: (0, r.jsx)(eU, {
            game: u,
            gameApplication: n,
        }),
        "aria-label": c,
        action: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.rsf, {
                    checked: p,
                    disabled: a,
                    onChange: (e) => g(e),
                }),
                (0, r.jsx)("div", { className: ep.emptySpacer }),
            ],
        }),
    });
}
function eB() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, _.cj)([M.default], () => M.default.getGlobalEnabledStatus()),
        o = (0, _.Wu)([A.ZP], () => A.ZP.getGamesSeen(!0)).filter((e) => !(0, H.le)(e)),
        s = (0, T.Z)(o.map((e) => e.id)),
        l = !(0, es.supportsLegacy)(),
        c = (e) => {
            var t, r;
            b.Z.setEnabled(e, a);
            let i = null != (r = null == (t = A.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, w.ou)(e, w.AE.LEGACY, i), !e && n && (0, B.l)(w.AE.LEGACY, i);
        },
        u = (e, t, n) => {
            let { enabledOOP: r } = n;
            m.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                (0, es.supportsLegacy)()
                    ? l
                        ? e_.intl.string(e_.t.r9jEV1)
                        : e_.intl.string(e_.t.OzInYm)
                    : e_.intl.string(e_.t["8Ox6/P"]),
            [l],
        );
    return 0 === o.length
        ? (0, r.jsx)(eL, {
              title: e_.intl.string(e_.t.BfFpW1),
              description: d,
              "aria-label": e_.intl.string(e_.t.BfFpW1),
              className: ep.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: l,
                          onChange: (e) => c(e),
                      }),
                      ed.iP && (0, r.jsx)("div", { className: ep.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ex, {
              onExpand: t,
              className: e ? ep.expandedContainer : void 0,
              title: e_.intl.string(e_.t.BfFpW1),
              description: d,
              "aria-label": e_.intl.string(e_.t.BfFpW1),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eM(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: l,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: ep.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: e_.intl.string(e_.t.FzoWRk),
                      }),
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: ep.scroller,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              eG,
                              {
                                  rawGame: e,
                                  clientSettingType: w.AE.LEGACY_GAME,
                                  supportDisabled: l,
                                  gameApplication: s[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: u,
                                  ariaLabel: e_.intl.format(e_.t.hvPYsL, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eZ() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: a } = (0, _.cj)([M.default], () => M.default.getGlobalEnabledStatus()),
        o = !(0, es.supportsOutOfProcess)(),
        s = (0, _.Wu)([A.ZP], () => A.ZP.getGamesSeen(!0)).filter((e) => !(0, H.le)(e)),
        l = (0, T.Z)(s.map((e) => e.id)),
        c = (e) => {
            var t, r;
            let i = !e && n;
            b.Z.setEnabled(a, e);
            let o = null != (r = null == (t = A.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, w.ou)(e, w.AE.OOP, o), i && (0, B.l)(w.AE.OOP, o);
        },
        u = (e, t, n) => {
            let { enabledLegacy: r } = n;
            m.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                ed.iP ? (o ? e_.intl.string(e_.t.C7bLTU) : e_.intl.string(e_.t.ndgADA)) : e_.intl.string(e_.t.m7X4a2),
            [o],
        );
    return 0 === s.length
        ? (0, r.jsx)(eL, {
              title: e_.intl.string(e_.t["7BlVIi"]),
              description: d,
              "aria-label": e_.intl.string(e_.t["7BlVIi"]),
              className: ep.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e) => c(e),
                      }),
                      ed.iP && (0, r.jsx)("div", { className: ep.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ex, {
              onExpand: t,
              className: e ? ep.expandedContainer : void 0,
              title: e_.intl.string(e_.t["7BlVIi"]),
              description: d,
              "aria-label": e_.intl.string(e_.t["7BlVIi"]),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eM(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: ep.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: e_.intl.string(e_.t.FzoWRk),
                      }),
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: ep.scroller,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              eG,
                              {
                                  rawGame: e,
                                  clientSettingType: w.AE.OOP_GAME,
                                  gameApplication: l[t],
                                  supportDisabled: o,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: u,
                                  ariaLabel: e_.intl.format(e_.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eF() {
    var e;
    let t = (0, _.e7)([ee.ZP], () => ee.ZP.getOverlayKeybind()),
        n = !(0, es.supportsLegacy)(),
        i = !(0, es.supportsOutOfProcess)(),
        [a, o] = (0, _.Wu)([A.ZP], () => [A.ZP.canShowAdminWarning, A.ZP.getVisibleGame()], []),
        s = (0, Y.hi)(),
        l = null != o && o.elevated && a && !s,
        c = !(0, ee.I1)(null != (e = null == t ? void 0 : t.shortcut) ? e : []);
    function d(e) {
        u()(null != t, "Keybind should never be undefined"), g.Z.setKeybind(ey(eE({}, t), { shortcut: e }));
    }
    return (0, r.jsx)(eD, {
        children: (0, r.jsx)("div", {
            className: ep.keybindMainContainer,
            children: (0, r.jsxs)("div", {
                className: ep.keybindContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: ep.keybindHeaderContainer,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: e_.intl.string(e_.t.VsAZcH),
                            }),
                            l &&
                                (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: ep.keybindAdminWarning,
                                    children: e_.intl.string(e_.t.NsowVV),
                                }),
                            c &&
                                (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: ep.keybindAdminWarning,
                                    children: e_.intl.string(e_.t.UNoTw8),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: ep.keybindRecorderContainer,
                        children: (0, r.jsx)(y.Z, {
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
let eV = (e, t, n, r) =>
    [
        {
            title: e_.t.eVE4LS,
            description: e_.t["72WNqq"],
            disabledSetting: D.OverlayNotificationDisabledSetting.TEXT_CHAT,
        },
        r && {
            title: e_.t.oifnSk,
            description: e_.t.bgU5r6,
            disabledSetting: D.OverlayNotificationDisabledSetting.WELCOME_GENERAL,
        },
        {
            title: e_.t.hqsZJS,
            description: e_.t.kHjdqa,
            disabledSetting: D.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE,
        },
        e && {
            title: e_.t.sop3rq,
            description: e_.t.pjgffX,
            disabledSetting: D.OverlayNotificationDisabledSetting.GAME_ACTIVITY,
        },
        t && {
            title: e_.t["2QVhbW"],
            description: e_.t.wQ4ilJ,
            disabledSetting: D.OverlayNotificationDisabledSetting.NOW_PLAYING,
        },
        n && {
            title: e_.t["5/21FR"],
            description: e_.t.EIzwfH,
            disabledSetting: D.OverlayNotificationDisabledSetting.FRIEND_STREAM_WATCH_NUDGE,
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function eH() {
    let { allowActivityWidget: e, allowNowPlaying: t } = (0, x.o4)("user_settings"),
        { enabled: n } = (0, x.aq)("OverlayV3StreamWatchNudge"),
        { disableWelcomeNotification: i } = x.aZ.useConfig({ location: "OverlayNotificationSettings" }),
        a = eV(e, t, n, i),
        o = (e) => (t) => {
            b.Z.setNotificationDisabledSetting(e, !t);
        },
        s = (0, _.e7)([U.Z], () => U.Z.getDisabledNotifications());
    return (0, r.jsxs)("div", {
        className: ep.notificationSettingsContainer,
        children: [
            (0, r.jsx)(h.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: e_.intl.string(e_.t.xOE5bG),
            }),
            a.map((e) =>
                (0, r.jsxs)(
                    eD,
                    {
                        className: ep.notificationItem,
                        children: [
                            (0, r.jsxs)("div", {
                                className: ep.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: e_.intl.string(e.title),
                                    }),
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: e_.intl.string(e.description),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(h.rsf, {
                                checked: !s.has(e.disabledSetting),
                                onChange: o(e.disabledSetting),
                            }),
                        ],
                    },
                    e.disabledSetting,
                ),
            ),
        ],
    });
}
function eY(e) {
    let t = eW(e.username);
    return (t.user = e), t;
}
function eW(e) {
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
function eK() {
    return (0, K.kt)({
        id: "123",
        name: "Test Channel",
        type: ec.d4z.GUILD_VOICE,
        guild_id: "456",
    });
}
function ez() {
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
            eW(e_.intl.string(e_.t.C0ZDvr), !0, !1),
            eW(e_.intl.string(e_.t.iOtj8P), !1, !1, !0),
            eW(e_.intl.string(e_.t["0oqNgI"]), !1, !0),
        ]),
        u = (0, _.e7)([G.ZP, Q.Z], () => {
            let e = G.ZP.getWidgetByType(ec.Odu.VOICE_V3);
            if (null == e) return null;
            let t = Q.Z.getWidget(e.id);
            return null != t && (0, Z.Aw)(t) ? t : null;
        }),
        d = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : ef.At,
        f = [null != l ? eY(l) : null, ...c].filter(ei.lm),
        p = [new Map(f.map((e) => [e.user.id, e])), f.map((e) => e.user.id)];
    function m(e) {
        null != u &&
            (e < eA
                ? (0, E.zG)(u.id, { voiceStatesMaxShown: ef.Og })
                : (0, E.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    let g = ec.BRd.MIDNIGHT;
    return (0, r.jsxs)("div", {
        className: ep.voiceSettingsContainer,
        children: [
            (0, r.jsx)(eD, {
                title: e_.intl.string(e_.t.dnvZSk),
                children: (0, r.jsx)(h.q4e, {
                    options: [
                        {
                            label: e_.intl.string(e_.t.YcOxtr),
                            value: ec.ipw.LARGE,
                        },
                        {
                            label: e_.intl.string(e_.t.BKIKq6),
                            value: ec.ipw.SMALL,
                        },
                    ],
                    className: ep.select,
                    onChange: (e) => b.Z.setAvatarSizeMode(e),
                    value: n,
                }),
            }),
            (0, r.jsx)(eD, {
                title: e_.intl.string(e_.t.J0dpcH),
                children: (0, r.jsx)(h.q4e, {
                    options: [
                        {
                            label: e_.intl.string(e_.t.nBmDra),
                            value: ec.wC$.ALWAYS,
                        },
                        {
                            label: e_.intl.string(e_.t["2OvIZW"]),
                            value: ec.wC$.ONLY_WHILE_SPEAKING,
                        },
                        {
                            label: e_.intl.string(e_.t.ekjlPD),
                            value: ec.wC$.NEVER,
                        },
                    ],
                    className: ep.select,
                    onChange: (e) => b.Z.setDisplayNameMode(e),
                    value: a,
                }),
            }),
            (0, r.jsx)(h.f6W, {
                theme: g,
                children: (e) => {
                    var t, i;
                    return (0, r.jsxs)("div", {
                        className: o()(ep.widgetContainer, e),
                        children: [
                            (0, r.jsx)("div", {
                                className: ep.voiceWidgetContainer,
                                children: (0, r.jsx)(F.kI, {
                                    id: "voice-widget",
                                    title: e_.intl.string(e_.t.KNJ6Vl),
                                    channel: eK(),
                                    overlayVoiceStates: p,
                                    displayNameMode: a,
                                    displayUserMode: s,
                                    avatarSizeMode: n,
                                    widget: ec.Odu.VOICE,
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
                                className: ep.widgetHeaderContainer,
                                children: [
                                    (0, r.jsx)(V.PI, { children: e_.intl.string(e_.t.KNJ6Vl) }),
                                    (0, r.jsx)(V.ls, {}),
                                    (0, r.jsx)(V.RT, {
                                        id: null != (t = null == u ? void 0 : u.id) ? t : "voice-widget",
                                        pinned: null != (i = null == u ? void 0 : u.pinned) && i,
                                    }),
                                ],
                            }),
                        ],
                    });
                },
            }),
            (0, r.jsx)(eD, {
                title: e_.intl.string(e_.t.swsWWF),
                children: (0, r.jsx)(h.q4e, {
                    options: [
                        {
                            label: e_.intl.string(e_.t.nBmDra),
                            value: ec.OYC.ALWAYS,
                        },
                        {
                            label: e_.intl.string(e_.t["2OvIZW"]),
                            value: ec.OYC.ONLY_WHILE_SPEAKING,
                        },
                    ],
                    className: ep.select,
                    onChange: (e) => b.Z.setDisplayUserMode(e),
                    value: s,
                }),
            }),
            (0, r.jsx)(eD, {
                title: e_.intl.string(e_.t["X/Uyzc"]),
                titleId: eC,
                children: (0, r.jsx)("div", {
                    className: ep.sliderContainer,
                    children: (0, r.jsx)(h.iRW, {
                        initialValue: d,
                        onValueRender: (e) => (e < eA ? e_.intl.string(e_.t.nrUzFB) : "".concat(Math.floor(e))),
                        minValue: eA - 1,
                        maxValue: eN,
                        onValueChange: m,
                        markers: eR,
                        barStyles: { background: h.TVs.colors.BACKGROUND_MOD_STRONG.css },
                        fillStyles: { background: h.TVs.colors.BG_BRAND.css },
                        "aria-labelledby": eC,
                        onMarkerRender: (e) => (e < eA ? e_.intl.string(e_.t.nrUzFB) : "".concat(Math.floor(e))),
                    }),
                }),
            }),
        ],
    });
}
function eq() {
    let [e, t] = (0, S.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(eu.L.DISMISS);
        };
    return ((0, v.ZP)(() => () => {
        t(eu.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)("div", {
              className: ep.overlaySettingsNux,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: eh.Z,
                          alt: e_.intl.string(e_.t.mdXZh4),
                          className: ep.nuxFirstImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: ep.mainTitleContainer,
                          children: [
                              (0, r.jsx)(h.X6q, {
                                  variant: "heading-xl/medium",
                                  color: "header-primary",
                                  children: e_.intl.string(e_.t.jzjJQk),
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: e_.intl.string(e_.t["5dOfxc"]),
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: em.Z,
                          alt: e_.intl.string(e_.t.mdXZh4),
                          className: ep.nuxUserSettingsImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: ep.closeCircleButton,
                      children: (0, r.jsx)(h.zxk, {
                          variant: "primary",
                          text: e_.intl.string(e_.t.Q26diI),
                          onClick: () => n(),
                      }),
                  }),
                  (0, r.jsx)("div", { className: ep.nuxDivider }),
              ],
          });
}
function eX(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        a = null == n ? void 0 : n.id,
        o = (0, _.e7)([U.Z], () => U.Z.isLimitedInteractionOverrideEnabled(a), [a]),
        s = i.useMemo(() => null != t && (0, k.H8)(t.pid), [t]),
        l = (0, j.Z)({ location: "overlay_user_settings" }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: u } = (0, _.cj)([en.default], () => ({
            disableClickableRegions: en.default.disableClickableRegions,
            shouldShowKeybindIndicators: en.default.showKeybindIndicators,
        }));
    function d() {
        b.Z.setDisableClickableRegions(!c);
    }
    function f(e) {
        null != n && b.Z.setLimitedInteractionOverride(n.id, e);
    }
    return (0, r.jsxs)("div", {
        className: ep.overlayEnabledSettingsContainer,
        children: [
            (0, r.jsx)(eF, {}),
            l &&
                (0, r.jsx)(eD, {
                    children: (0, r.jsx)(h.rsf, {
                        label: e_.intl.string(e_.t.XZTl9v),
                        checked: u,
                        onChange: (e) => b.Z.setShowKeybindIndicators(e),
                    }),
                }),
            null != a &&
                (0, r.jsxs)(eD, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: ep.limitedInteractionOverrideContainer,
                            children: [
                                (0, r.jsx)(h.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: e_.intl.string(e_.t.wgVQND),
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: e_.intl.string(e_.t["5SsyFx"]),
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
            (0, r.jsxs)(eD, {
                children: [
                    (0, r.jsxs)("div", {
                        className: ep.limitedInteractionOverrideContainer,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: e_.intl.string(e_.t["+eFXxs"]),
                            }),
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: e_.intl.string(e_.t.kivMAg),
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
function eQ(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: i, runningGameApplication: a } = (0, C.Z)(),
        o = (0, x.o4)("user_settings").overlayV3UI,
        s = (0, _.e7)([$.default], () => $.default.getCurrentUser());
    return ((0, v.ZP)(() => {
        if (ea.isPlatformEmbedded) return (0, N.Ky)(), N.P7;
    }),
    eP(),
    null == s)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(el.Z, {
                      title: e_.intl.string(e_.t["9cb1U1"]),
                      children: [
                          o ? (0, r.jsx)(eq, {}) : null,
                          (0, r.jsxs)("div", {
                              className: ep.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(ek, {
                                      runningGame: i,
                                      runningGameApplication: a,
                                  }),
                                  (0, r.jsx)(eZ, {}),
                                  (0, r.jsx)(eB, {}),
                              ],
                          }),
                          (0, r.jsx)("div", { className: ep.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(h.hjN, {
                      children: [
                          (0, r.jsx)(eX, {
                              runningGame: i,
                              runningGameApplication: a,
                          }),
                          (0, r.jsx)("div", { className: ep.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(h.hjN, {
                      title: e_.intl.string(e_.t.r1TZfn),
                      children: [(0, r.jsx)(ez, {}), (0, r.jsx)("div", { className: ep.settingsDivider })],
                  }),
                  (0, r.jsx)(h.hjN, { children: (0, r.jsx)(eH, {}) }),
              ],
          });
}
