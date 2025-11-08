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
    h = n(481060),
    m = n(224706),
    g = n(660216),
    E = n(765250),
    b = n(13245),
    y = n(825209),
    O = n(593472),
    v = n(493773),
    I = n(812206),
    S = n(835473),
    T = n(243778),
    A = n(594190),
    C = n(137920),
    N = n(320724),
    R = n(925329),
    P = n(297700),
    w = n(444295),
    D = n(486016),
    x = n(837268),
    L = n(32300),
    M = n(809357),
    j = n(371651),
    k = n(829907),
    U = n(624864),
    G = n(610394),
    B = n(957148),
    Z = n(932404),
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
let eS = ew(null),
    eT = 20,
    eA = 16,
    eC = 1,
    eN = 25,
    eR = [0, 5, 10, 15, 20, 25];
function eP() {
    let e = ew(eS);
    f().isEqual(e, eS) || (ei.default.track(eu.rMx.OVERLAY_SETTINGS_UPDATED, e), (eS = e));
}
function ew(e) {
    var t;
    let n = er.default.getNotificationPositionMode(),
        r = n !== eu._vf.DISABLED,
        i = et.ZP.getOverlayKeybind(),
        a = et.ZP.getOverlayChatKeybind();
    return {
        enabled: en.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: U.Z.isNotificationDisabled(ef.n0.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, es.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, es.BB)(a.shortcut) : null,
        text_opacity_slider: er.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : en.default.enabled,
    };
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
        className: o()(eh.groupContainer, f),
        children: [
            (0, r.jsxs)(h.kL8, {
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
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        className: eh.groupTitle,
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
function ex(e) {
    var { children: t, className: n, onExpand: a } = e,
        s = ev(e, ["children", "className", "onExpand"]);
    let [l, c] = i.useState(!1),
        u = (e) => {
            c(e), null == a || a(e);
        };
    return (0, r.jsx)(h.zF9, {
        className: eh.collapseable,
        collapsibleContent: (0, r.jsx)("div", {
            className: eh.groupCollapsedContainer,
            children: t,
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                eD,
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
let eL = new Set([
        x.mM.INITIALIZING,
        x.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        x.mM.WAITING_FOR_MODULE_TRACKING,
        x.mM.WAITING_FOR_OVERLAY_OPEN,
        x.mM.WAITING_FOR_POPOUT_OPEN,
        x.mM.WAITING_FOR_MODULE_POPOUT_CAPTURE,
        x.mM.WAITING_FOR_REACT_INITIALIZATION,
        x.mM.WAITING_FOR_PID_FOCUS,
        x.mM.WAITING_FOR_SUCCESSFUL_SHOW,
    ]),
    eM = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function ej(e) {
    var t, n, a;
    let { runningGame: o, runningGameApplication: s } = e,
        c = null == o ? void 0 : o.pid,
        u = (0, _.e7)(
            [j.default],
            () => (null == o || null == c ? null : j.default.getTrackedGameByPid(c)),
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
            return (0, A.b6)(o, !1, [Q.Z, $.Z]);
        }, [o, u]),
        p = (0, _.e7)([A.ZP, Q.Z, $.Z], () => (null == o ? null : (0, A.FZ)(o, A.ZP, Q.Z, $.Z)), [o], l()),
        [g, E] = i.useState(f),
        [y, I] = i.useState(d),
        [S, T] = i.useState(!1);
    i.useEffect(() => {
        E(f), I(d);
    }, [f, d]);
    let C = !(0, el.supportsLegacy)(),
        N = !(0, el.supportsOutOfProcess)(),
        { legacyEnabled: D, oopEnabled: L } = (0, _.cj)([j.default], () => j.default.getGlobalEnabledStatus()),
        M = (e, t) => {
            var n, r, i;
            if (null == o) return;
            let a = !1,
                s = !1;
            switch (t) {
                case w.OverlayToggledClientSettingType.LEGACY_GAME:
                    I(e), m.Z.toggleOverlay(o, e, g), (a = !e && y);
                    break;
                case w.OverlayToggledClientSettingType.OOP_GAME:
                    E(e), m.Z.toggleOverlay(o, y, e), (s = !e && g);
                    break;
                case w.OverlayToggledClientSettingType.LEGACY:
                    b.Z.setEnabled(e, L),
                        (0, w.ou)(e, w.OverlayToggledClientSettingType.LEGACY, null != (n = o.id) ? n : null);
                    break;
                case w.OverlayToggledClientSettingType.OOP:
                    b.Z.setEnabled(D, e),
                        (0, w.ou)(e, w.OverlayToggledClientSettingType.OOP, null != (r = o.id) ? r : null);
            }
            (a || s) &&
                (0, B.l)(
                    a ? w.OverlayToggledClientSettingType.LEGACY_GAME : w.OverlayToggledClientSettingType.OOP_GAME,
                    null != (i = o.id) ? i : null,
                );
        },
        k = (e, t) => {
            let n = !t && e,
                r = !L && g,
                i = !D && y,
                a = !g && L,
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
                    b.Z.setEnabled(e, e), (n = !e && D), (r = !e && L);
                    break;
                case "both":
                    b.Z.setEnabled(e, e),
                        m.Z.toggleOverlay(o, e, e),
                        I(e),
                        E(e),
                        (n = (!e && D) || (!e && y)),
                        (r = (!e && L) || (!e && g));
            }
            let i = null;
            if (
                (n
                    ? (i =
                          "game" === t
                              ? w.OverlayToggledClientSettingType.LEGACY_GAME
                              : w.OverlayToggledClientSettingType.LEGACY)
                    : r &&
                      (i =
                          "game" === t
                              ? w.OverlayToggledClientSettingType.OOP_GAME
                              : w.OverlayToggledClientSettingType.OOP),
                null != i)
            ) {
                var a;
                (0, B.l)(i, null != (a = o.id) ? a : null);
            }
        },
        G = C && N,
        Z = !D && !L,
        F = !g && !D && y && !C,
        V = !y && !L && g && !N,
        H = (null == u ? void 0 : u.overlayMethod) === x.gl.Disabled,
        Y = (null == u ? void 0 : u.state) === x.mM.OVERLAY_RENDERING && !H,
        W = (null == u ? void 0 : u.state) != null && eL.has(u.state) && !H,
        z = (null == u ? void 0 : u.overlayMethod) === x.gl.OutOfProcess,
        q = (null == u ? void 0 : u.overlayMethod) === x.gl.OutOfProcessLimitedInteraction,
        X = (null == u ? void 0 : u.overlayMethod) === x.gl.Hook,
        J =
            (null == u ? void 0 : u.state) === x.mM.OVERLAY_CRASHED ||
            (null == u ? void 0 : u.state) === x.mM.OVERLAY_CRASHED_DISABLED,
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
                        ep.intl.format(ep.t.hFVBIg, {
                            overlayMethod: ep.intl.string(ep.t.a3eXSw),
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
                        ep.intl.format(ep.t.hFVBIg, {
                            overlayMethod: ep.intl.string(ep.t["506Aba"]),
                            overlayMethodHook: t,
                        }),
                        null,
                    ];
                case Y && X:
                    function n() {
                        var e, t;
                        switch (!0) {
                            case (null == u ? void 0 : u.fullscreenType) !== O.Jx.BORDERLESS_FULLSCREEN:
                                return ep.intl.string(ep.t.mJmbeC);
                            case N:
                                return ep.intl.string(ep.t.C7bLTQ);
                            case !(null != (e = null == u ? void 0 : u.oopEnabled) && e):
                                return ep.intl.string(ep.t.WiY24u);
                            case !L:
                                return ep.intl.string(ep.t.cAFVsL);
                            case !(null != (t = null == u ? void 0 : u.supportsOutOfProcess) && t):
                                return ep.intl.string(ep.t.XcGEcs);
                            default:
                                return ep.intl.string(ep.t.bJXH2v);
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
                        ep.intl.format(ep.t.hFVBIg, {
                            overlayMethod: ep.intl.string(ep.t.bvlpDR),
                            overlayMethodHook: i,
                        }),
                        n(),
                    ];
                case J:
                    return [ep.intl.string(ep.t.OFC2aw), null];
                case G:
                    return [ep.intl.string(ep.t.m7X4az), null];
                case Z:
                    return [ep.intl.string(ep.t["9DUS5l"]), null];
                case ee:
                    return [ep.intl.string(ep.t.nQ9EdJ), null];
                case F:
                case V:
                    return [ep.intl.string(ep.t.VWUn0a), null];
                case W:
                    if (z) return [ep.intl.string(ep.t["s8+CFq"]), null];
                    if (X) return [ep.intl.string(ep.t.JEEdqt), null];
                    if (q) return [ep.intl.string(ep.t.pzBMwY), null];
                    return [ep.intl.string(ep.t["2Xhy9k"]), null];
                case null == u:
                    return [ep.intl.string(ep.t.vwHPRi), null];
                case H: {
                    let e =
                        (null == u ? void 0 : u.fullscreenType) === O.Jx.FULLSCREEN
                            ? ep.intl.string(ep.t.mJmbeC)
                            : null;
                    return [ep.intl.string(ep.t.VPW4XY), e];
                }
                default:
                    return [ep.intl.string(ep.t.ONovP5), null];
            }
        })();
    (0, v.ZP)(() => {
        m.Z.getDetectableGames();
    });
    let [er, ei] = i.useMemo(
        () =>
            W
                ? ["text-muted", h.TVs.colors.TEXT_MUTED.css]
                : Y && q
                  ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css]
                  : Y && z
                    ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : Y && X
                      ? ["text-primary", h.TVs.colors.TEXT_PRIMARY.css]
                      : ["interactive-normal", h.TVs.colors.INTERACTIVE_NORMAL.css],
        [W, Y, q, z, X],
    );
    return null == o
        ? null
        : (0, r.jsxs)(ex, {
              onExpand: T,
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
                          ? (0, r.jsx)(h.aML, {
                                "data-migration-pending": !0,
                                text: ep.intl.string(ep.t["4PJP5p"]),
                                children: (e) =>
                                    (0, r.jsx)(
                                        P.Z,
                                        eO(
                                            eb(
                                                {
                                                    size: eA,
                                                    color: h.TVs.colors.BG_BRAND.css,
                                                },
                                                e,
                                            ),
                                            {
                                                children: (0, r.jsx)(h.kmB, {
                                                    size: "custom",
                                                    width: eA,
                                                    height: eA,
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
                      Y || W
                          ? (0, r.jsx)(h.pzj, {
                                size: "xxs",
                                color: ei,
                            })
                          : (0, r.jsx)("div", { className: eh.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: er,
                          children: ep.intl.string(ep.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, r.jsx)(R.Z, {
                  game: s,
                  pid: null == o ? void 0 : o.pid,
                  size: R.A.MEDIUM,
              }),
              "aria-label": ep.intl.string(ep.t["87O5GC"]),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eM(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: (g && L) || (y && D),
                      disabled: G,
                      onChange: (e) => {
                          U(e, k(e, (g && L) || (y && D)));
                      },
                  }),
              }),
              warning: (0, r.jsx)(K.Z, {
                  className: eh.systemServiceWarning,
                  game: o,
              }),
              children: [
                  (0, r.jsx)(eD, {
                      title: ep.intl.string(ep.t["7BlVIs"]),
                      description: ep.intl.string(ep.t.ndgADE),
                      hint: L ? void 0 : ep.intl.string(ep.t.cAFVsL),
                      "aria-label": ep.intl.string(ep.t["7BlVIs"]),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: g && L,
                                  disabled: N,
                                  onChange: (e) => {
                                      e && !L
                                          ? M(e, w.OverlayToggledClientSettingType.OOP)
                                          : M(e, w.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: eh.emptySpacer }),
                          ],
                      }),
                  }),
                  (0, r.jsx)(eD, {
                      title: ep.intl.string(ep.t.BfFpW1),
                      description: ep.intl.string(ep.t.OzInYk),
                      hint: D ? void 0 : ep.intl.string(ep.t["3sYHXm"]),
                      "aria-label": ep.intl.string(ep.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: y && D,
                                  disabled: C,
                                  onChange: (e) => {
                                      e && !D
                                          ? M(e, w.OverlayToggledClientSettingType.LEGACY)
                                          : M(e, w.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: eh.emptySpacer }),
                          ],
                      }),
                  }),
              ],
          });
}
function ek(e) {
    let { game: t, gameApplication: n } = e,
        a = i.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        o = (0, _.e7)([I.Z], () => (null != n ? n : I.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(R.Z, {
        game: o,
        pid: a,
        size: R.A.SMALL,
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
        u = (0, _.cj)([A.ZP, Q.Z, $.Z], () => (0, A.FZ)(t, A.ZP, Q.Z, $.Z)),
        d = (0, _.cj)([Q.Z, $.Z], () => (0, A.b6)(t, !1, [Q.Z, $.Z]), [t]),
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
    return (0, r.jsx)(eD, {
        title: t.name,
        icon: (0, r.jsx)(ek, {
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
                (0, r.jsx)("div", { className: eh.emptySpacer }),
            ],
        }),
    });
}
function eG() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, _.cj)([j.default], () => j.default.getGlobalEnabledStatus()),
        o = (0, _.Wu)([A.ZP], () => A.ZP.getGamesSeen(!0)).filter((e) => !(0, Y.le)(e)),
        s = (0, S.Z)(o.map((e) => e.id)),
        l = !(0, el.supportsLegacy)(),
        c = (e) => {
            var t, r;
            b.Z.setEnabled(e, a);
            let i = null != (r = null == (t = A.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, w.ou)(e, w.OverlayToggledClientSettingType.LEGACY, i),
                !e && n && (0, B.l)(w.OverlayToggledClientSettingType.LEGACY, i);
        },
        u = (e, t, n) => {
            let { enabledOOP: r } = n;
            m.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                (0, el.supportsLegacy)()
                    ? l
                        ? ep.intl.string(ep.t.r9jEVw)
                        : ep.intl.string(ep.t.OzInYk)
                    : ep.intl.string(ep.t["8Ox6/E"]),
            [l],
        );
    return 0 === o.length
        ? (0, r.jsx)(eD, {
              title: ep.intl.string(ep.t.BfFpW1),
              description: d,
              "aria-label": ep.intl.string(ep.t.BfFpW1),
              className: eh.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: l,
                          onChange: (e) => c(e),
                      }),
                      ef.iP && (0, r.jsx)("div", { className: eh.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ex, {
              onExpand: t,
              className: e ? eh.expandedContainer : void 0,
              title: ep.intl.string(ep.t.BfFpW1),
              description: d,
              "aria-label": ep.intl.string(ep.t.BfFpW1),
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
                      className: eh.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: ep.intl.string(ep.t.FzoWRo),
                      }),
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: eh.scroller,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              eU,
                              {
                                  rawGame: e,
                                  clientSettingType: w.OverlayToggledClientSettingType.LEGACY_GAME,
                                  supportDisabled: l,
                                  gameApplication: s[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: u,
                                  ariaLabel: ep.intl.format(ep.t.hvPYsF, { gameName: e.name }).toString(),
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
        { oopEnabled: n, legacyEnabled: a } = (0, _.cj)([j.default], () => j.default.getGlobalEnabledStatus()),
        o = !(0, el.supportsOutOfProcess)(),
        s = (0, _.Wu)([A.ZP], () => A.ZP.getGamesSeen(!0)).filter((e) => !(0, Y.le)(e)),
        l = (0, S.Z)(s.map((e) => e.id)),
        c = (e) => {
            var t, r;
            let i = !e && n;
            b.Z.setEnabled(a, e);
            let o = null != (r = null == (t = A.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, w.ou)(e, w.OverlayToggledClientSettingType.OOP, o),
                i && (0, B.l)(w.OverlayToggledClientSettingType.OOP, o);
        },
        u = (e, t, n) => {
            let { enabledLegacy: r } = n;
            m.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                ef.iP ? (o ? ep.intl.string(ep.t.C7bLTQ) : ep.intl.string(ep.t.ndgADE)) : ep.intl.string(ep.t.m7X4az),
            [o],
        );
    return 0 === s.length
        ? (0, r.jsx)(eD, {
              title: ep.intl.string(ep.t["7BlVIs"]),
              description: d,
              "aria-label": ep.intl.string(ep.t["7BlVIs"]),
              className: eh.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e) => c(e),
                      }),
                      ef.iP && (0, r.jsx)("div", { className: eh.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ex, {
              onExpand: t,
              className: e ? eh.expandedContainer : void 0,
              title: ep.intl.string(ep.t["7BlVIs"]),
              description: d,
              "aria-label": ep.intl.string(ep.t["7BlVIs"]),
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
                      className: eh.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: ep.intl.string(ep.t.FzoWRo),
                      }),
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: eh.scroller,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              eU,
                              {
                                  rawGame: e,
                                  clientSettingType: w.OverlayToggledClientSettingType.OOP_GAME,
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
function eZ() {
    var e;
    let t = (0, _.e7)([et.ZP], () => et.ZP.getOverlayKeybind()),
        n = !(0, el.supportsLegacy)(),
        i = !(0, el.supportsOutOfProcess)(),
        [a, o] = (0, _.Wu)([A.ZP], () => [A.ZP.canShowAdminWarning, A.ZP.getVisibleGame()], []),
        s = (0, W.hi)(),
        l = null != o && o.elevated && a && !s,
        c = !(0, et.I1)(null != (e = null == t ? void 0 : t.shortcut) ? e : []);
    function d(e) {
        u()(null != t, "Keybind should never be undefined"), g.Z.setKeybind(eO(eb({}, t), { shortcut: e }));
    }
    return (0, r.jsx)("div", {
        className: eh.keybindMainContainer,
        children: (0, r.jsxs)("div", {
            className: eh.keybindContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: eh.keybindHeaderContainer,
                    children: [
                        (0, r.jsx)(h.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: ep.intl.string(ep.t.VsAZcC),
                        }),
                        l &&
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eh.keybindAdminWarning,
                                children: ep.intl.string(ep.t.NsowVa),
                            }),
                        c &&
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eh.keybindAdminWarning,
                                children: ep.intl.string(ep.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: eh.keybindRecorderContainer,
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
let eF = (e, t, n) =>
    [
        {
            title: ep.t.eVE4LX,
            description: ep.t["72WNqk"],
            disabledSetting: D.i.TEXT_CHAT,
        },
        {
            title: ep.t.oifnSh,
            description: ep.t.bgU5r0,
            disabledSetting: D.i.WELCOME_GENERAL,
        },
        {
            title: ep.t.hqsZJW,
            description: ep.t.kHjdqc,
            disabledSetting: D.i.GO_LIVE_NUDGE,
        },
        e && {
            title: ep.t.sop3rn,
            description: ep.t.pjgffc,
            disabledSetting: D.i.GAME_ACTIVITY,
        },
        t && {
            title: ep.t["2QVhbb"],
            description: ep.t.wQ4ilB,
            disabledSetting: D.i.NOW_PLAYING,
        },
        n && {
            title: ep.t["5/21FT"],
            description: ep.t.EIzwfA,
            disabledSetting: D.i.FRIEND_STREAM_WATCH_NUDGE,
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function eV() {
    let { allowActivityWidget: e, allowNowPlaying: t } = (0, L.o4)("user_settings"),
        { enabled: n } = (0, L.aq)("OverlayV3StreamWatchNudge"),
        i = eF(e, t, n),
        a = (e) => (t) => {
            b.Z.setNotificationDisabledSetting(e, !t);
        },
        o = (0, _.e7)([U.Z], () => U.Z.getDisabledNotifications());
    return (0, r.jsxs)("div", {
        className: eh.notificationSettingsContainer,
        children: [
            (0, r.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: ep.intl.string(ep.t.xOE5bA),
            }),
            i.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: eh.notificationItem,
                        children: [
                            (0, r.jsxs)("div", {
                                className: eh.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: ep.intl.string(e.title),
                                    }),
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ep.intl.string(e.description),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(h.rsf, {
                                checked: !o.has(e.disabledSetting),
                                onChange: a(e.disabledSetting),
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
function eW() {
    return (0, z.createChannelRecord)({
        id: "123",
        name: "Test Channel",
        type: eu.d4z.GUILD_VOICE,
        guild_id: "456",
    });
}
function eK() {
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
            eY(ep.intl.string(ep.t.C0ZDvo), !0, !1),
            eY(ep.intl.string(ep.t.iOtj8E), !1, !1, !0),
            eY(ep.intl.string(ep.t["0oqNgL"]), !1, !0),
        ]),
        u = (0, _.e7)([G.Z, J.Z], () => {
            let e = G.Z.getWidgetByType(eu.Odu.VOICE_V3);
            if (null == e) return null;
            let t = J.Z.getWidget(e.id);
            return null != t && (0, F.Aw)(t) ? t : null;
        }),
        d = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : e_.At,
        f = [null != l ? eH(l) : null, ...c].filter(ea.lm),
        p = [new Map(f.map((e) => [e.user.id, e])), f.map((e) => e.user.id)];
    function m(e) {
        null != u &&
            (e < eC
                ? (0, E.zG)(u.id, { voiceStatesMaxShown: e_.Og })
                : (0, E.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    let g = eu.BRd.MIDNIGHT;
    return (0, r.jsxs)("div", {
        className: eh.voiceSettingsContainer,
        children: [
            (0, r.jsx)(h.q4e, {
                label: ep.intl.string(ep.t.dnvZSg),
                options: [
                    {
                        label: ep.intl.string(ep.t.YcOxtr),
                        value: eu.ipw.LARGE,
                    },
                    {
                        label: ep.intl.string(ep.t.BKIKqx),
                        value: eu.ipw.SMALL,
                    },
                ],
                className: eh.select,
                onChange: (e) => b.Z.setAvatarSizeMode(e),
                value: n,
            }),
            (0, r.jsx)(h.q4e, {
                label: ep.intl.string(ep.t.J0dpcB),
                options: [
                    {
                        label: ep.intl.string(ep.t.nBmDrT),
                        value: eu.wC$.ALWAYS,
                    },
                    {
                        label: ep.intl.string(ep.t["2OvIZY"]),
                        value: eu.wC$.ONLY_WHILE_SPEAKING,
                    },
                    {
                        label: ep.intl.string(ep.t.ekjlPL),
                        value: eu.wC$.NEVER,
                    },
                ],
                className: eh.select,
                onChange: (e) => b.Z.setDisplayNameMode(e),
                value: a,
            }),
            (0, r.jsx)(h.f6W, {
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
                                    title: ep.intl.string(ep.t.KNJ6Vq),
                                    channel: eW(),
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
                                    (0, r.jsx)(H.PI, { children: ep.intl.string(ep.t.KNJ6Vq) }),
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
            (0, r.jsx)(h.q4e, {
                label: ep.intl.string(ep.t.swsWWC),
                options: [
                    {
                        label: ep.intl.string(ep.t.nBmDrT),
                        value: eu.OYC.ALWAYS,
                    },
                    {
                        label: ep.intl.string(ep.t["2OvIZY"]),
                        value: eu.OYC.ONLY_WHILE_SPEAKING,
                    },
                ],
                className: eh.select,
                onChange: (e) => b.Z.setDisplayUserMode(e),
                value: s,
            }),
            (0, r.jsx)("div", {
                className: eh.sliderContainer,
                children: (0, r.jsx)(h.iRW, {
                    label: ep.intl.string(ep.t["X/Uyzc"]),
                    initialValue: d,
                    onValueRender: (e) => (e < eC ? ep.intl.string(ep.t.nrUzFL) : "".concat(Math.floor(e))),
                    minValue: eC - 1,
                    maxValue: eN,
                    onValueChange: m,
                    markers: eR,
                    barStyles: { background: h.TVs.colors.BACKGROUND_MOD_STRONG.css },
                    fillStyles: { background: h.TVs.colors.BG_BRAND.css },
                    onMarkerRender: (e) => (e < eC ? ep.intl.string(ep.t.nrUzFL) : "".concat(Math.floor(e))),
                }),
            }),
        ],
    });
}
function ez() {
    let [e, t] = (0, T.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(ed.L.DISMISS);
        };
    return ((0, v.ZP)(() => () => {
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
                          alt: ep.intl.string(ep.t.mdXZh1),
                          className: eh.nuxFirstImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: eh.mainTitleContainer,
                          children: [
                              (0, r.jsx)(h.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "header-primary",
                                  children: ep.intl.string(ep.t.jzjJQg),
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ep.intl.string(ep.t["5dOfxb"]),
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: eg.Z,
                          alt: ep.intl.string(ep.t.mdXZh1),
                          className: eh.nuxUserSettingsImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: eh.closeCircleButton,
                      children: (0, r.jsx)(h.Button, {
                          variant: "primary",
                          text: ep.intl.string(ep.t.Q26diF),
                          onClick: () => n(),
                      }),
                  }),
                  (0, r.jsx)("div", { className: eh.nuxDivider }),
              ],
          });
}
function eq(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        a = null == n ? void 0 : n.id,
        o = (0, _.e7)([U.Z], () => U.Z.isLimitedInteractionOverrideEnabled(a), [a]),
        s = i.useMemo(() => null != t && (0, k.H8)(t.pid), [t]),
        l = (0, M.Z)({ location: "overlay_user_settings" }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: u } = (0, _.cj)([er.default], () => ({
            disableClickableRegions: er.default.disableClickableRegions,
            shouldShowKeybindIndicators: er.default.showKeybindIndicators,
        }));
    function d() {
        b.Z.setDisableClickableRegions(!c);
    }
    function f(e) {
        null != n && (0, Z.rI)(n.id, e);
    }
    return (0, r.jsxs)("div", {
        className: eh.overlayEnabledSettingsContainer,
        children: [
            (0, r.jsx)(eZ, {}),
            l &&
                (0, r.jsx)(h.rsf, {
                    label: ep.intl.string(ep.t.XZTl9r),
                    checked: u,
                    onChange: (e) => b.Z.setShowKeybindIndicators(e),
                }),
            null != a &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eh.limitedInteractionOverrideContainer,
                            children: [
                                (0, r.jsx)(h.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: ep.intl.string(ep.t.wgVQND),
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: ep.intl.string(ep.t["5SsyF5"]),
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
                        className: eh.limitedInteractionOverrideContainer,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: ep.intl.string(ep.t["+eFXxq"]),
                            }),
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ep.intl.string(ep.t.kivMAp),
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
function eX(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: i, runningGameApplication: a } = (0, C.Z)(),
        o = (0, L.o4)("user_settings").overlayV3UI,
        s = (0, _.e7)([ee.default], () => ee.default.getCurrentUser());
    return ((0, v.ZP)(() => {
        if (eo.isPlatformEmbedded) return (0, N.Ky)(), N.P7;
    }),
    eP(),
    null == s)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(ec.Z, {
                      title: ep.intl.string(ep.t["9cb1Uz"]),
                      children: [
                          o ? (0, r.jsx)(ez, {}) : null,
                          (0, r.jsxs)("div", {
                              className: eh.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(ej, {
                                      runningGame: i,
                                      runningGameApplication: a,
                                  }),
                                  (0, r.jsx)(eB, {}),
                                  (0, r.jsx)(eG, {}),
                              ],
                          }),
                          (0, r.jsx)("div", { className: eh.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(eq, {
                              runningGame: i,
                              runningGameApplication: a,
                          }),
                          (0, r.jsx)("div", { className: eh.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(h.gNt, {
                      label: ep.intl.string(ep.t.r1TZfh),
                      children: [(0, r.jsx)(eK, {}), (0, r.jsx)("div", { className: eh.settingsDivider })],
                  }),
                  (0, r.jsx)(eV, {}),
              ],
          });
}
