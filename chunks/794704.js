n.d(t, { Z: () => e$ }), n(953529), n(388685);
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
    m = n(481060),
    h = n(224706),
    g = n(660216),
    E = n(765250),
    b = n(13245),
    y = n(825209),
    O = n(593472),
    v = n(493773),
    S = n(100527),
    I = n(812206),
    T = n(835473),
    A = n(243778),
    C = n(594190),
    N = n(137920),
    P = n(320724),
    R = n(925329),
    w = n(297700),
    D = n(444295),
    x = n(486016),
    L = n(837268),
    j = n(32300),
    M = n(809357),
    k = n(371651),
    U = n(829907),
    G = n(624864),
    Z = n(610394),
    B = n(957148),
    F = n(932404),
    V = n(398269),
    H = n(340101),
    Y = n(243487),
    W = n(430561),
    K = n(509003),
    z = n(865066),
    q = n(894300),
    X = n(131704),
    Q = n(598077),
    J = n(189786),
    $ = n(77498),
    ee = n(355863),
    et = n(283595),
    en = n(594174),
    er = n(556296),
    ei = n(808506),
    ea = n(237997),
    eo = n(626135),
    es = n(823379),
    el = n(358085),
    ec = n(13140),
    eu = n(145597),
    ed = n(273313),
    ef = n(981631),
    ep = n(921944),
    e_ = n(987650),
    em = n(501787),
    eh = n(388032),
    eg = n(607547),
    eE = n(131970),
    eb = n(730462);
function ey(e, t, n) {
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
function eO(e) {
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
                ey(e, t, n[t]);
            });
    }
    return e;
}
function ev(e, t) {
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
function eS(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ev(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eI(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eT(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eT(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let eA = ex(null),
    eC = 20,
    eN = 16,
    eP = 1,
    eR = 25,
    ew = [0, 5, 10, 15, 20, 25];
function eD() {
    let e = ex(eA);
    f().isEqual(e, eA) || (eo.default.track(ef.rMx.OVERLAY_SETTINGS_UPDATED, e), (eA = e));
}
function ex(e) {
    var t;
    let n = ea.default.getNotificationPositionMode(),
        r = n !== ef._vf.DISABLED,
        i = er.ZP.getOverlayKeybind(),
        a = er.ZP.getOverlayChatKeybind();
    return {
        enabled: ei.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: G.Z.isNotificationDisabled(e_.n0.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ec.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, ec.BB)(a.shortcut) : null,
        text_opacity_slider: ea.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : ei.default.enabled,
    };
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
        className: o()(eg.groupContainer, f),
        children: [
            (0, r.jsxs)(m.kL8, {
                "aria-label": d,
                onClick: u,
                children: [
                    null != t &&
                        (0, r.jsx)("div", {
                            className: eg.groupHeader,
                            children: t,
                        }),
                    (0, r.jsxs)("div", {
                        className: eg.groupContent,
                        children: [
                            null != n &&
                                (0, r.jsx)("div", {
                                    className: eg.groupIcon,
                                    children: n,
                                }),
                            (0, r.jsxs)("div", {
                                className: eg.groupMainContent,
                                children: [
                                    (0, r.jsx)(m.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        className: eg.groupTitle,
                                        children: i,
                                    }),
                                    null != a &&
                                        (0, r.jsx)(m.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
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
                                className: eg.groupAction,
                                children: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: eg.groupWarning,
                children: c,
            }),
        ],
    });
}
function ej(e) {
    var { children: t, className: n, onExpand: a } = e,
        s = eI(e, ["children", "className", "onExpand"]);
    let [l, c] = i.useState(!1),
        u = (e) => {
            c(e), null == a || a(e);
        };
    return (0, r.jsx)(m.zF9, {
        className: eg.collapseable,
        collapsibleContent: (0, r.jsx)("div", {
            className: eg.groupCollapsedContainer,
            children: t,
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                eL,
                eS(eO({}, s), {
                    onClick: (e) => {
                        u(!l), null == t || t(e);
                    },
                    className: o()(eg.mainCollapseableContainer, n),
                    action: (0, r.jsxs)("div", {
                        className: eg.groupCollapsedAction,
                        children: [
                            s.action,
                            l
                                ? (0, r.jsx)(m.CJ0, {
                                      size: "custom",
                                      width: eC,
                                      height: eC,
                                      color: "var(--interactive-active)",
                                  })
                                : (0, r.jsx)(m.Fbu, {
                                      size: "custom",
                                      width: eC,
                                      height: eC,
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
        L.mM.INITIALIZING,
        L.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        L.mM.WAITING_FOR_MODULE_TRACKING,
        L.mM.WAITING_FOR_OVERLAY_OPEN,
        L.mM.WAITING_FOR_POPOUT_OPEN,
        L.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE,
        L.mM.WAITING_FOR_REACT_INITIALIZATION,
        L.mM.WAITING_FOR_PID_FOCUS,
        L.mM.WAITING_FOR_SUCCESSFUL_SHOW,
    ]),
    ek = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eU(e) {
    var t, n, a;
    let { runningGame: o, runningGameApplication: s } = e,
        c = null == o ? void 0 : o.pid,
        u = (0, p.e7)(
            [k.default],
            () => (null == o || null == c ? null : k.default.getTrackedGameByPid(c)),
            [o, c],
            l(),
        ),
        { enabledLegacy: d, enabledOOP: f } = (0, p.cj)([$.Z, et.Z], () => {
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
            return (0, C.b6)(o, !1, [$.Z, et.Z]);
        }, [o, u]),
        _ = (0, p.e7)([C.ZP, $.Z, et.Z], () => (null == o ? null : (0, C.FZ)(o, C.ZP, $.Z, et.Z)), [o], l()),
        [g, E] = i.useState(f),
        [y, S] = i.useState(d),
        [I, T] = i.useState(!1);
    i.useEffect(() => {
        E(f), S(d);
    }, [f, d]);
    let A = !(0, eu.supportsLegacy)(),
        N = !(0, eu.supportsOutOfProcess)(),
        { legacyEnabled: P, oopEnabled: x } = (0, p.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        j = (e, t) => {
            var n, r, i;
            if (null == o) return;
            let a = !1,
                s = !1;
            switch (t) {
                case D.OverlayToggledClientSettingType.LEGACY_GAME:
                    S(e), h.Z.toggleOverlay(o, e, g), (a = !e && y);
                    break;
                case D.OverlayToggledClientSettingType.OOP_GAME:
                    E(e), h.Z.toggleOverlay(o, y, e), (s = !e && g);
                    break;
                case D.OverlayToggledClientSettingType.LEGACY:
                    b.Z.setEnabled(e, x),
                        (0, D.ou)(e, D.OverlayToggledClientSettingType.LEGACY, null != (n = o.id) ? n : null);
                    break;
                case D.OverlayToggledClientSettingType.OOP:
                    b.Z.setEnabled(P, e),
                        (0, D.ou)(e, D.OverlayToggledClientSettingType.OOP, null != (r = o.id) ? r : null);
            }
            (a || s) &&
                (0, B.l)(
                    a ? D.OverlayToggledClientSettingType.LEGACY_GAME : D.OverlayToggledClientSettingType.OOP_GAME,
                    null != (i = o.id) ? i : null,
                );
        },
        M = (e, t) => {
            let n = !t && e,
                r = !x && g,
                i = !P && y,
                a = !g && x,
                o = !y && P;
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
                    h.Z.toggleOverlay(o, e, e), S(e), E(e), (n = !e && y), (r = !e && g);
                    break;
                case "global":
                    b.Z.setEnabled(e, e), (n = !e && P), (r = !e && x);
                    break;
                case "both":
                    b.Z.setEnabled(e, e),
                        h.Z.toggleOverlay(o, e, e),
                        S(e),
                        E(e),
                        (n = (!e && P) || (!e && y)),
                        (r = (!e && x) || (!e && g));
            }
            let i = null;
            if (
                (n
                    ? (i =
                          "game" === t
                              ? D.OverlayToggledClientSettingType.LEGACY_GAME
                              : D.OverlayToggledClientSettingType.LEGACY)
                    : r &&
                      (i =
                          "game" === t
                              ? D.OverlayToggledClientSettingType.OOP_GAME
                              : D.OverlayToggledClientSettingType.OOP),
                null != i)
            ) {
                var a;
                (0, B.l)(i, null != (a = o.id) ? a : null);
            }
        },
        G = A && N,
        Z = !P && !x,
        F = !g && !P && y && !A,
        V = !y && !x && g && !N,
        H = (null == u ? void 0 : u.overlayMethod) === L.gl.Disabled,
        Y = (null == u ? void 0 : u.state) === L.mM.OVERLAY_RENDERING && !H,
        W = (null == u ? void 0 : u.state) != null && eM.has(u.state) && !H,
        K = (null == u ? void 0 : u.overlayMethod) === L.gl.OutOfProcess,
        z = (null == u ? void 0 : u.overlayMethod) === L.gl.OutOfProcessLimitedInteraction,
        X = (null == u ? void 0 : u.overlayMethod) === L.gl.Hook,
        Q =
            (null == u ? void 0 : u.state) === L.mM.OVERLAY_CRASHED ||
            (null == u ? void 0 : u.state) === L.mM.OVERLAY_CRASHED_DISABLED,
        J = !g && !y,
        [ee, en] = (() => {
            switch (!0) {
                case Y && K:
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
                        eh.intl.format(eh.t.hFVBIg, {
                            overlayMethod: eh.intl.string(eh.t.a3eXSw),
                            overlayMethodHook: e,
                        }),
                        null,
                    ];
                case Y && z:
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
                        eh.intl.format(eh.t.hFVBIg, {
                            overlayMethod: eh.intl.string(eh.t["506Aba"]),
                            overlayMethodHook: t,
                        }),
                        null,
                    ];
                case Y && X:
                    function n() {
                        var e, t;
                        switch (!0) {
                            case (null == u ? void 0 : u.fullscreenType) !== O.Jx.BORDERLESS_FULLSCREEN:
                                return eh.intl.string(eh.t.mJmbeC);
                            case N:
                                return eh.intl.string(eh.t.C7bLTQ);
                            case !(null != (e = null == u ? void 0 : u.oopEnabled) && e):
                                return eh.intl.string(eh.t.WiY24u);
                            case !x:
                                return eh.intl.string(eh.t.cAFVsL);
                            case !(null != (t = null == u ? void 0 : u.supportsOutOfProcess) && t):
                                return eh.intl.string(eh.t.XcGEcs);
                            default:
                                return eh.intl.string(eh.t.bJXH2v);
                        }
                    }
                    function i(e, t) {
                        return (0, r.jsx)(
                            m.Text,
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
                        eh.intl.format(eh.t.hFVBIg, {
                            overlayMethod: eh.intl.string(eh.t.bvlpDR),
                            overlayMethodHook: i,
                        }),
                        n(),
                    ];
                case Q:
                    return [eh.intl.string(eh.t.OFC2aw), null];
                case G:
                    return [eh.intl.string(eh.t.m7X4az), null];
                case Z:
                    return [eh.intl.string(eh.t["9DUS5l"]), null];
                case J:
                    return [eh.intl.string(eh.t.nQ9EdJ), null];
                case F:
                case V:
                    return [eh.intl.string(eh.t.VWUn0a), null];
                case W:
                    if (K) return [eh.intl.string(eh.t["s8+CFq"]), null];
                    if (X) return [eh.intl.string(eh.t.JEEdqt), null];
                    if (z) return [eh.intl.string(eh.t.pzBMwY), null];
                    return [eh.intl.string(eh.t["2Xhy9k"]), null];
                case null == u:
                    return [eh.intl.string(eh.t.vwHPRi), null];
                case H: {
                    let e =
                        (null == u ? void 0 : u.fullscreenType) === O.Jx.FULLSCREEN
                            ? eh.intl.string(eh.t.mJmbeC)
                            : null;
                    return [eh.intl.string(eh.t.VPW4XY), e];
                }
                default:
                    return [eh.intl.string(eh.t.ONovP5), null];
            }
        })();
    (0, v.ZP)(() => {
        h.Z.getDetectableGames();
    });
    let [er, ei] = i.useMemo(
        () =>
            W
                ? ["text-muted", m.TVs.colors.TEXT_MUTED.css]
                : Y && z
                  ? ["text-feedback-warning", m.TVs.colors.TEXT_FEEDBACK_WARNING.css]
                  : Y && K
                    ? ["text-feedback-positive", m.TVs.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : Y && X
                      ? ["text-strong", m.TVs.colors.TEXT_STRONG.css]
                      : ["interactive-normal", m.TVs.colors.INTERACTIVE_NORMAL.css],
        [W, Y, z, K, X],
    );
    return null == o
        ? null
        : (0, r.jsxs)(ej, {
              onExpand: T,
              className: I ? eg.expandedContainer : void 0,
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
                          ? (0, r.jsx)(m.aML, {
                                "data-migration-pending": !0,
                                text: eh.intl.string(eh.t["4PJP5p"]),
                                children: (e) =>
                                    (0, r.jsx)(
                                        w.Z,
                                        eS(
                                            eO(
                                                {
                                                    size: eN,
                                                    color: m.TVs.colors.BG_BRAND.css,
                                                },
                                                e,
                                            ),
                                            {
                                                children: (0, r.jsx)(m.kmB, {
                                                    size: "custom",
                                                    width: eN,
                                                    height: eN,
                                                    color: m.TVs.colors.WHITE.css,
                                                }),
                                            },
                                        ),
                                    ),
                            })
                          : null,
                  ],
              }),
              description: ee,
              hint: null != en ? en : void 0,
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      Y || W
                          ? (0, r.jsx)(m.pzj, {
                                size: "xxs",
                                color: ei,
                            })
                          : (0, r.jsx)("div", { className: eg.playingDot }),
                      (0, r.jsx)(m.Text, {
                          variant: "text-xs/semibold",
                          color: er,
                          children: eh.intl.string(eh.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, r.jsx)(R.Z, {
                  game: s,
                  pid: null == o ? void 0 : o.pid,
                  size: R.A.MEDIUM,
              }),
              "aria-label": eh.intl.string(eh.t["87O5GC"]),
              action: (0, r.jsx)(m.P3F, {
                  onClick: (e) => ek(e),
                  children: (0, r.jsx)(m.rsf, {
                      checked: (g && x) || (y && P),
                      disabled: G,
                      onChange: (e) => {
                          U(e, M(e, (g && x) || (y && P)));
                      },
                  }),
              }),
              warning: (0, r.jsx)(q.Z, {
                  className: eg.systemServiceWarning,
                  game: o,
              }),
              children: [
                  (0, r.jsx)(eL, {
                      title: eh.intl.string(eh.t["7BlVIs"]),
                      description: eh.intl.string(eh.t.ndgADE),
                      hint: x ? void 0 : eh.intl.string(eh.t.cAFVsL),
                      "aria-label": eh.intl.string(eh.t["7BlVIs"]),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.rsf, {
                                  checked: g && x,
                                  disabled: N,
                                  onChange: (e) => {
                                      e && !x
                                          ? j(e, D.OverlayToggledClientSettingType.OOP)
                                          : j(e, D.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: eg.emptySpacer }),
                          ],
                      }),
                  }),
                  (0, r.jsx)(eL, {
                      title: eh.intl.string(eh.t.BfFpW1),
                      description: eh.intl.string(eh.t.OzInYk),
                      hint: P ? void 0 : eh.intl.string(eh.t["3sYHXm"]),
                      "aria-label": eh.intl.string(eh.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.rsf, {
                                  checked: y && P,
                                  disabled: A,
                                  onChange: (e) => {
                                      e && !P
                                          ? j(e, D.OverlayToggledClientSettingType.LEGACY)
                                          : j(e, D.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: eg.emptySpacer }),
                          ],
                      }),
                  }),
              ],
          });
}
function eG(e) {
    let { game: t, gameApplication: n } = e,
        a = i.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        o = (0, p.e7)([I.Z], () => (null != n ? n : I.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(R.Z, {
        game: o,
        pid: a,
        size: R.A.SMALL,
    });
}
function eZ(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: a,
            getEnabledFromStatus: o,
            onChange: s,
            clientSettingType: l,
            ariaLabel: c,
        } = e,
        u = (0, p.cj)([C.ZP, $.Z, et.Z], () => (0, C.FZ)(t, C.ZP, $.Z, et.Z)),
        d = (0, p.cj)([$.Z, et.Z], () => (0, C.b6)(t, !1, [$.Z, et.Z]), [t]),
        f = o(d),
        [_, h] = i.useState(f);
    i.useEffect(() => {
        h(f);
    }, [f]);
    let g = (e) => {
        let n = !e && _;
        if ((h(e), s(e, u, d), n)) {
            var r, i;
            (0, B.l)(l, null != (i = null != (r = u.id) ? r : null == t ? void 0 : t.id) ? i : null);
        }
    };
    return (0, r.jsx)(eL, {
        title: t.name,
        icon: (0, r.jsx)(eG, {
            game: u,
            gameApplication: n,
        }),
        "aria-label": c,
        action: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(m.rsf, {
                    checked: _,
                    disabled: a,
                    onChange: (e) => g(e),
                }),
                (0, r.jsx)("div", { className: eg.emptySpacer }),
            ],
        }),
    });
}
function eB() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, p.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        o = (0, p.Wu)([C.ZP], () => C.ZP.getGamesSeen(!0)).filter((e) => !(0, K.le)(e)),
        s = (0, T.Z)(o.map((e) => e.id)),
        l = !(0, eu.supportsLegacy)(),
        c = (e) => {
            var t, r;
            b.Z.setEnabled(e, a);
            let i = null != (r = null == (t = C.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, D.ou)(e, D.OverlayToggledClientSettingType.LEGACY, i),
                !e && n && (0, B.l)(D.OverlayToggledClientSettingType.LEGACY, i);
        },
        u = (e, t, n) => {
            let { enabledOOP: r } = n;
            h.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                (0, eu.supportsLegacy)()
                    ? l
                        ? eh.intl.string(eh.t.r9jEVw)
                        : eh.intl.string(eh.t.OzInYk)
                    : eh.intl.string(eh.t["8Ox6/E"]),
            [l],
        );
    return 0 === o.length
        ? (0, r.jsx)(eL, {
              title: eh.intl.string(eh.t.BfFpW1),
              description: d,
              "aria-label": eh.intl.string(eh.t.BfFpW1),
              className: eg.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(m.rsf, {
                          checked: n,
                          disabled: l,
                          onChange: (e) => c(e),
                      }),
                      e_.iP && (0, r.jsx)("div", { className: eg.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ej, {
              onExpand: t,
              className: e ? eg.expandedContainer : void 0,
              title: eh.intl.string(eh.t.BfFpW1),
              description: d,
              "aria-label": eh.intl.string(eh.t.BfFpW1),
              action: (0, r.jsx)(m.P3F, {
                  onClick: (e) => ek(e),
                  children: (0, r.jsx)(m.rsf, {
                      checked: n,
                      disabled: l,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: eg.subtitleContainer,
                      children: (0, r.jsx)(m.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eh.intl.string(eh.t.FzoWRo),
                      }),
                  }),
                  (0, r.jsx)(m.zJl, {
                      className: eg.scroller,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              eZ,
                              {
                                  rawGame: e,
                                  clientSettingType: D.OverlayToggledClientSettingType.LEGACY_GAME,
                                  supportDisabled: l,
                                  gameApplication: s[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: u,
                                  ariaLabel: eh.intl.format(eh.t.hvPYsF, { gameName: e.name }).toString(),
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
        { oopEnabled: n, legacyEnabled: a } = (0, p.cj)([k.default], () => k.default.getGlobalEnabledStatus()),
        o = !(0, eu.supportsOutOfProcess)(),
        s = (0, p.Wu)([C.ZP], () => C.ZP.getGamesSeen(!0)).filter((e) => !(0, K.le)(e)),
        l = (0, T.Z)(s.map((e) => e.id)),
        c = (e) => {
            var t, r;
            let i = !e && n;
            b.Z.setEnabled(a, e);
            let o = null != (r = null == (t = C.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, D.ou)(e, D.OverlayToggledClientSettingType.OOP, o),
                i && (0, B.l)(D.OverlayToggledClientSettingType.OOP, o);
        },
        u = (e, t, n) => {
            let { enabledLegacy: r } = n;
            h.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                e_.iP ? (o ? eh.intl.string(eh.t.C7bLTQ) : eh.intl.string(eh.t.ndgADE)) : eh.intl.string(eh.t.m7X4az),
            [o],
        );
    return 0 === s.length
        ? (0, r.jsx)(eL, {
              title: eh.intl.string(eh.t["7BlVIs"]),
              description: d,
              "aria-label": eh.intl.string(eh.t["7BlVIs"]),
              className: eg.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(m.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e) => c(e),
                      }),
                      e_.iP && (0, r.jsx)("div", { className: eg.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ej, {
              onExpand: t,
              className: e ? eg.expandedContainer : void 0,
              title: eh.intl.string(eh.t["7BlVIs"]),
              description: d,
              "aria-label": eh.intl.string(eh.t["7BlVIs"]),
              action: (0, r.jsx)(m.P3F, {
                  onClick: (e) => ek(e),
                  children: (0, r.jsx)(m.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: eg.subtitleContainer,
                      children: (0, r.jsx)(m.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eh.intl.string(eh.t.FzoWRo),
                      }),
                  }),
                  (0, r.jsx)(m.zJl, {
                      className: eg.scroller,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              eZ,
                              {
                                  rawGame: e,
                                  clientSettingType: D.OverlayToggledClientSettingType.OOP_GAME,
                                  gameApplication: l[t],
                                  supportDisabled: o,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: u,
                                  ariaLabel: eh.intl.format(eh.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eV() {
    return (0, j.T_)(S.Z.USER_SETTINGS)
        ? (0, r.jsx)(eL, {
              title: eh.intl.string(eh.t["z4/l+V"]),
              description: eh.intl.string(eh.t["3aZq/0"]),
              action: (0, r.jsx)(m.Button, {
                  variant: "primary",
                  text: eh.intl.string(eh.t.s2nVhG),
                  onClick: () => {
                      (0, V.N)(S.Z.USER_SETTINGS, ef.IlC.APP);
                  },
              }),
              "aria-label": eh.intl.string(eh.t["z4/l+V"]),
          })
        : null;
}
function eH() {
    var e;
    let t = (0, p.e7)([er.ZP], () => er.ZP.getOverlayKeybind()),
        n = !(0, eu.supportsLegacy)(),
        i = !(0, eu.supportsOutOfProcess)(),
        [a, o] = (0, p.Wu)([C.ZP], () => [C.ZP.canShowAdminWarning, C.ZP.getVisibleGame()], []),
        s = (0, z.hi)(),
        l = null != o && o.elevated && a && !s,
        c = !(0, er.I1)(null != (e = null == t ? void 0 : t.shortcut) ? e : []);
    function d(e) {
        u()(null != t, "Keybind should never be undefined"), g.Z.setKeybind(eS(eO({}, t), { shortcut: e }));
    }
    return (0, r.jsx)("div", {
        className: eg.keybindMainContainer,
        children: (0, r.jsxs)("div", {
            className: eg.keybindContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: eg.keybindHeaderContainer,
                    children: [
                        (0, r.jsx)(m.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: eh.intl.string(eh.t.VsAZcC),
                        }),
                        l &&
                            (0, r.jsx)(m.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eg.keybindAdminWarning,
                                children: eh.intl.string(eh.t.NsowVa),
                            }),
                        c &&
                            (0, r.jsx)(m.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eg.keybindAdminWarning,
                                children: eh.intl.string(eh.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: eg.keybindRecorderContainer,
                    children: (0, r.jsx)(y.Z, {
                        disabled: n && i,
                        defaultValue: null != t ? t.shortcut : [],
                        onChange: d,
                    }),
                }),
            ],
        }),
    });
}
let eY = (e) =>
    [
        {
            title: eh.t.eVE4LX,
            description: eh.t["72WNqk"],
            disabledSetting: x.i.TEXT_CHAT,
        },
        {
            title: eh.t.oifnSh,
            description: eh.t.bgU5r0,
            disabledSetting: x.i.WELCOME_GENERAL,
        },
        {
            title: eh.t.hqsZJW,
            description: eh.t.kHjdqc,
            disabledSetting: x.i.GO_LIVE_NUDGE,
        },
        {
            title: eh.t.sop3rn,
            description: eh.t.pjgffc,
            disabledSetting: x.i.GAME_ACTIVITY,
        },
        {
            title: eh.t["2QVhbb"],
            description: eh.t.wQ4ilB,
            disabledSetting: x.i.NOW_PLAYING,
        },
        e && {
            title: eh.t["5/21FT"],
            description: eh.t.EIzwfA,
            disabledSetting: x.i.FRIEND_STREAM_WATCH_NUDGE,
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function eW() {
    let { enabled: e } = (0, j.aq)("OverlayV3StreamWatchNudge"),
        t = eY(e),
        n = (e) => (t) => {
            b.Z.setNotificationDisabledSetting(e, !t);
        },
        i = (0, p.e7)([G.Z], () => G.Z.getDisabledNotifications());
    return (0, r.jsxs)("div", {
        className: eg.notificationSettingsContainer,
        children: [
            (0, r.jsx)(m.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: eh.intl.string(eh.t.xOE5bA),
            }),
            t.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: eg.notificationItem,
                        children: [
                            (0, r.jsxs)("div", {
                                className: eg.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(m.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: eh.intl.string(e.title),
                                    }),
                                    (0, r.jsx)(m.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eh.intl.string(e.description),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(m.rsf, {
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
function eK(e) {
    let t = ez(e.username);
    return (t.user = e), t;
}
function ez(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = "456" + Math.floor(1000000 * Math.random());
    return {
        voiceState: new J.Z({
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
        user: new Q.Z({
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
function eq() {
    return (0, X.createChannelRecord)({
        id: "123",
        name: "Test Channel",
        type: ef.d4z.GUILD_VOICE,
        guild_id: "456",
    });
}
function eX() {
    var e, t;
    let {
            avatarSizeMode: n,
            displayNameMode: a,
            displayUserMode: s,
        } = (0, p.cj)([ea.default], () => ({
            avatarSizeMode: ea.default.getAvatarSizeMode(),
            displayNameMode: ea.default.getDisplayNameMode(),
            displayUserMode: ea.default.getDisplayUserMode(),
        })),
        l = (0, p.e7)([en.default], () => en.default.getCurrentUser()),
        [c] = i.useState(() => [
            ez(eh.intl.string(eh.t.C0ZDvo), !0, !1),
            ez(eh.intl.string(eh.t.iOtj8E), !1, !1, !0),
            ez(eh.intl.string(eh.t["0oqNgL"]), !1, !0),
        ]),
        u = (0, p.e7)([Z.Z, ee.Z], () => {
            let e = Z.Z.getWidgetByType(ef.Odu.VOICE_V3);
            if (null == e) return null;
            let t = ee.Z.getWidget(e.id);
            return null != t && (0, H.Aw)(t) ? t : null;
        }),
        d = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : em.At,
        f = [null != l ? eK(l) : null, ...c].filter(es.lm),
        _ = [new Map(f.map((e) => [e.user.id, e])), f.map((e) => e.user.id)];
    function h(e) {
        null != u &&
            (e < eP
                ? (0, E.zG)(u.id, { voiceStatesMaxShown: em.Og })
                : (0, E.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    let g = ef.BRd.MIDNIGHT;
    return (0, r.jsxs)("div", {
        className: eg.voiceSettingsContainer,
        children: [
            (0, r.jsx)(m.q4e, {
                label: eh.intl.string(eh.t.dnvZSg),
                options: [
                    {
                        label: eh.intl.string(eh.t.YcOxtr),
                        value: ef.ipw.LARGE,
                    },
                    {
                        label: eh.intl.string(eh.t.BKIKqx),
                        value: ef.ipw.SMALL,
                    },
                ],
                className: eg.select,
                onChange: (e) => b.Z.setAvatarSizeMode(e),
                value: n,
            }),
            (0, r.jsx)(m.q4e, {
                label: eh.intl.string(eh.t.J0dpcB),
                options: [
                    {
                        label: eh.intl.string(eh.t.nBmDrT),
                        value: ef.wC$.ALWAYS,
                    },
                    {
                        label: eh.intl.string(eh.t["2OvIZY"]),
                        value: ef.wC$.ONLY_WHILE_SPEAKING,
                    },
                    {
                        label: eh.intl.string(eh.t.ekjlPL),
                        value: ef.wC$.NEVER,
                    },
                ],
                className: eg.select,
                onChange: (e) => b.Z.setDisplayNameMode(e),
                value: a,
            }),
            (0, r.jsx)(m.f6W, {
                theme: g,
                children: (e) => {
                    var t, i;
                    return (0, r.jsxs)("div", {
                        className: o()(eg.widgetContainer, e),
                        children: [
                            (0, r.jsx)("div", {
                                className: eg.voiceWidgetContainer,
                                children: (0, r.jsx)(Y.kI, {
                                    id: "voice-widget",
                                    title: eh.intl.string(eh.t.KNJ6Vq),
                                    channel: eq(),
                                    overlayVoiceStates: _,
                                    displayNameMode: a,
                                    displayUserMode: s,
                                    avatarSizeMode: n,
                                    widget: ef.Odu.VOICE,
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
                                className: eg.widgetHeaderContainer,
                                children: [
                                    (0, r.jsx)(W.PI, { children: eh.intl.string(eh.t.KNJ6Vq) }),
                                    (0, r.jsx)(W.ls, {}),
                                    (0, r.jsx)(W.RT, {
                                        id: null != (t = null == u ? void 0 : u.id) ? t : "voice-widget",
                                        pinned: null != (i = null == u ? void 0 : u.pinned) && i,
                                    }),
                                ],
                            }),
                        ],
                    });
                },
            }),
            (0, r.jsx)(m.q4e, {
                label: eh.intl.string(eh.t.swsWWC),
                options: [
                    {
                        label: eh.intl.string(eh.t.nBmDrT),
                        value: ef.OYC.ALWAYS,
                    },
                    {
                        label: eh.intl.string(eh.t["2OvIZY"]),
                        value: ef.OYC.ONLY_WHILE_SPEAKING,
                    },
                ],
                className: eg.select,
                onChange: (e) => b.Z.setDisplayUserMode(e),
                value: s,
            }),
            (0, r.jsx)("div", {
                className: eg.sliderContainer,
                children: (0, r.jsx)(m.iRW, {
                    label: eh.intl.string(eh.t["X/Uyzc"]),
                    initialValue: d,
                    onValueRender: (e) => (e < eP ? eh.intl.string(eh.t.nrUzFL) : "".concat(Math.floor(e))),
                    minValue: eP - 1,
                    maxValue: eR,
                    onValueChange: h,
                    markers: ew,
                    barStyles: { background: m.TVs.colors.BACKGROUND_MOD_STRONG.css },
                    fillStyles: { background: m.TVs.colors.BG_BRAND.css },
                    onMarkerRender: (e) => (e < eP ? eh.intl.string(eh.t.nrUzFL) : "".concat(Math.floor(e))),
                }),
            }),
        ],
    });
}
function eQ() {
    let [e, t] = (0, A.US)([_.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(ep.L.DISMISS);
        };
    return ((0, v.ZP)(() => () => {
        t(ep.L.AUTO_DISMISS);
    }),
    e !== _.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)("div", {
              className: eg.overlaySettingsNux,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: eE.Z,
                          alt: eh.intl.string(eh.t.mdXZh1),
                          className: eg.nuxFirstImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: eg.mainTitleContainer,
                          children: [
                              (0, r.jsx)(m.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "header-primary",
                                  children: eh.intl.string(eh.t.jzjJQg),
                              }),
                              (0, r.jsx)(m.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: eh.intl.string(eh.t["5dOfxb"]),
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: eb.Z,
                          alt: eh.intl.string(eh.t.mdXZh1),
                          className: eg.nuxUserSettingsImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: eg.closeCircleButton,
                      children: (0, r.jsx)(m.Button, {
                          variant: "primary",
                          text: eh.intl.string(eh.t.Q26diF),
                          onClick: () => n(),
                      }),
                  }),
                  (0, r.jsx)("div", { className: eg.nuxDivider }),
              ],
          });
}
function eJ(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        a = null == n ? void 0 : n.id,
        o = (0, p.e7)([G.Z], () => G.Z.isLimitedInteractionOverrideEnabled(a), [a]),
        s = i.useMemo(() => null != t && (0, U.H8)(t.pid), [t]),
        l = (0, M.Z)({ location: "overlay_user_settings" }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: u } = (0, p.cj)([ea.default], () => ({
            disableClickableRegions: ea.default.disableClickableRegions,
            shouldShowKeybindIndicators: ea.default.showKeybindIndicators,
        }));
    function d() {
        b.Z.setDisableClickableRegions(!c);
    }
    function f(e) {
        null != n && (0, F.rI)(n.id, e);
    }
    return (0, r.jsxs)("div", {
        className: eg.overlayEnabledSettingsContainer,
        children: [
            (0, r.jsx)(eH, {}),
            l &&
                (0, r.jsx)(m.rsf, {
                    label: eh.intl.string(eh.t.XZTl9r),
                    checked: u,
                    onChange: (e) => b.Z.setShowKeybindIndicators(e),
                }),
            null != a &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eg.limitedInteractionOverrideContainer,
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: eh.intl.string(eh.t.wgVQND),
                                }),
                                (0, r.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: eh.intl.string(eh.t["5SsyF5"]),
                                }),
                            ],
                        }),
                        (0, r.jsx)(m.rsf, {
                            checked: o || s,
                            disabled: s,
                            onChange: (e) => f(e),
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: eg.limitedInteractionOverrideContainer,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: eh.intl.string(eh.t["+eFXxq"]),
                            }),
                            (0, r.jsx)(m.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eh.intl.string(eh.t.kivMAp),
                            }),
                        ],
                    }),
                    (0, r.jsx)(m.rsf, {
                        checked: !c,
                        onChange: d,
                    }),
                ],
            }),
        ],
    });
}
function e$(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: i, runningGameApplication: a } = (0, N.Z)(),
        o = !0,
        s = (0, p.e7)([en.default], () => en.default.getCurrentUser());
    return ((0, v.ZP)(() => {
        if (el.isPlatformEmbedded) return (0, P.Ky)(), P.P7;
    }),
    eD(),
    null == s)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(ed.Z, {
                      title: eh.intl.string(eh.t["9cb1Uz"]),
                      children: [
                          o ? (0, r.jsx)(eQ, {}) : null,
                          (0, r.jsxs)("div", {
                              className: eg.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eU, {
                                      runningGame: i,
                                      runningGameApplication: a,
                                  }),
                                  (0, r.jsx)(eF, {}),
                                  (0, r.jsx)(eB, {}),
                                  (0, r.jsx)(eV, {}),
                              ],
                          }),
                          (0, r.jsx)("div", { className: eg.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(eJ, {
                              runningGame: i,
                              runningGameApplication: a,
                          }),
                          (0, r.jsx)("div", { className: eg.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(m.gNt, {
                      label: eh.intl.string(eh.t.r1TZfh),
                      children: [(0, r.jsx)(eX, {}), (0, r.jsx)("div", { className: eg.settingsDivider })],
                  }),
                  (0, r.jsx)(eW, {}),
              ],
          });
}
