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
    I = n(100527),
    T = n(812206),
    S = n(835473),
    A = n(243778),
    C = n(594190),
    N = n(137920),
    R = n(320724),
    P = n(925329),
    D = n(297700),
    w = n(444295),
    L = n(486016),
    x = n(837268),
    M = n(32300),
    k = n(809357),
    j = n(371651),
    U = n(829907),
    G = n(624864),
    B = n(610394),
    Z = n(957148),
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
    e_ = n(921944),
    ep = n(987650),
    eh = n(501787),
    em = n(388032),
    eg = n(289726),
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
function eI(e, t) {
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
function eT(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eS(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eS(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let eA = eL(null),
    eC = 20,
    eN = 16,
    eR = 1,
    eP = 25,
    eD = [0, 5, 10, 15, 20, 25];
function ew() {
    let e = eL(eA);
    f().isEqual(e, eA) || (eo.default.track(ef.rMx.OVERLAY_SETTINGS_UPDATED, e), (eA = e));
}
function eL(e) {
    var t;
    let n = ea.default.getNotificationPositionMode(),
        r = n !== ef._vf.DISABLED,
        i = er.ZP.getOverlayKeybind(),
        a = er.ZP.getOverlayChatKeybind();
    return {
        enabled: ei.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: G.Z.isNotificationDisabled(ep.n0.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ec.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, ec.BB)(a.shortcut) : null,
        text_opacity_slider: ea.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : ei.default.enabled,
    };
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
        className: o()(eg.groupContainer, f),
        children: [
            (0, r.jsxs)(h.kL8, {
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
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        className: eg.groupTitle,
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
function eM(e) {
    var { children: t, className: n, onExpand: a } = e,
        s = eT(e, ["children", "className", "onExpand"]);
    let [l, c] = i.useState(!1),
        u = (e) => {
            c(e), null == a || a(e);
        };
    return (0, r.jsx)(h.zF9, {
        className: eg.collapseable,
        collapsibleContent: (0, r.jsx)("div", {
            className: eg.groupCollapsedContainer,
            children: t,
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                ex,
                eI(eO({}, s), {
                    onClick: (e) => {
                        u(!l), null == t || t(e);
                    },
                    className: o()(eg.mainCollapseableContainer, n),
                    action: (0, r.jsxs)("div", {
                        className: eg.groupCollapsedAction,
                        children: [
                            s.action,
                            l
                                ? (0, r.jsx)(h.CJ0, {
                                      size: "custom",
                                      width: eC,
                                      height: eC,
                                      color: "var(--interactive-active)",
                                  })
                                : (0, r.jsx)(h.Fbu, {
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
let ek = new Set([
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
    ej = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eU(e) {
    var t, n, a;
    let { runningGame: o, runningGameApplication: s } = e,
        c = null == o ? void 0 : o.pid,
        u = (0, _.e7)(
            [j.default],
            () => (null == o || null == c ? null : j.default.getTrackedGameByPid(c)),
            [o, c],
            l(),
        ),
        { enabledLegacy: d, enabledOOP: f } = (0, _.cj)([$.Z, et.Z], () => {
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
        p = (0, _.e7)([C.ZP, $.Z, et.Z], () => (null == o ? null : (0, C.FZ)(o, C.ZP, $.Z, et.Z)), [o], l()),
        [g, E] = i.useState(f),
        [y, I] = i.useState(d),
        [T, S] = i.useState(!1);
    i.useEffect(() => {
        E(f), I(d);
    }, [f, d]);
    let A = !(0, eu.supportsLegacy)(),
        N = !(0, eu.supportsOutOfProcess)(),
        { legacyEnabled: R, oopEnabled: L } = (0, _.cj)([j.default], () => j.default.getGlobalEnabledStatus()),
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
                    b.Z.setEnabled(R, e),
                        (0, w.ou)(e, w.OverlayToggledClientSettingType.OOP, null != (r = o.id) ? r : null);
            }
            (a || s) &&
                (0, Z.l)(
                    a ? w.OverlayToggledClientSettingType.LEGACY_GAME : w.OverlayToggledClientSettingType.OOP_GAME,
                    null != (i = o.id) ? i : null,
                );
        },
        k = (e, t) => {
            let n = !t && e,
                r = !L && g,
                i = !R && y,
                a = !g && L,
                o = !y && R;
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
                    b.Z.setEnabled(e, e), (n = !e && R), (r = !e && L);
                    break;
                case "both":
                    b.Z.setEnabled(e, e),
                        m.Z.toggleOverlay(o, e, e),
                        I(e),
                        E(e),
                        (n = (!e && R) || (!e && y)),
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
                (0, Z.l)(i, null != (a = o.id) ? a : null);
            }
        },
        G = A && N,
        B = !R && !L,
        F = !g && !R && y && !A,
        V = !y && !L && g && !N,
        H = (null == u ? void 0 : u.overlayMethod) === x.gl.Disabled,
        Y = (null == u ? void 0 : u.state) === x.mM.OVERLAY_RENDERING && !H,
        W = (null == u ? void 0 : u.state) != null && ek.has(u.state) && !H,
        K = (null == u ? void 0 : u.overlayMethod) === x.gl.OutOfProcess,
        z = (null == u ? void 0 : u.overlayMethod) === x.gl.OutOfProcessLimitedInteraction,
        X = (null == u ? void 0 : u.overlayMethod) === x.gl.Hook,
        Q =
            (null == u ? void 0 : u.state) === x.mM.OVERLAY_CRASHED ||
            (null == u ? void 0 : u.state) === x.mM.OVERLAY_CRASHED_DISABLED,
        J = !g && !y,
        [ee, en] = (() => {
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
                        em.intl.format(em.t.hFVBIg, {
                            overlayMethod: em.intl.string(em.t.a3eXSw),
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
                        em.intl.format(em.t.hFVBIg, {
                            overlayMethod: em.intl.string(em.t["506Aba"]),
                            overlayMethodHook: t,
                        }),
                        null,
                    ];
                case Y && X:
                    function n() {
                        var e, t;
                        switch (!0) {
                            case (null == u ? void 0 : u.fullscreenType) !== O.Jx.BORDERLESS_FULLSCREEN:
                                return em.intl.string(em.t.mJmbeC);
                            case N:
                                return em.intl.string(em.t.C7bLTQ);
                            case !(null != (e = null == u ? void 0 : u.oopEnabled) && e):
                                return em.intl.string(em.t.WiY24u);
                            case !L:
                                return em.intl.string(em.t.cAFVsL);
                            case !(null != (t = null == u ? void 0 : u.supportsOutOfProcess) && t):
                                return em.intl.string(em.t.XcGEcs);
                            default:
                                return em.intl.string(em.t.bJXH2v);
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
                        em.intl.format(em.t.hFVBIg, {
                            overlayMethod: em.intl.string(em.t.bvlpDR),
                            overlayMethodHook: i,
                        }),
                        n(),
                    ];
                case Q:
                    return [em.intl.string(em.t.OFC2aw), null];
                case G:
                    return [em.intl.string(em.t.m7X4az), null];
                case B:
                    return [em.intl.string(em.t["9DUS5l"]), null];
                case J:
                    return [em.intl.string(em.t.nQ9EdJ), null];
                case F:
                case V:
                    return [em.intl.string(em.t.VWUn0a), null];
                case W:
                    if (K) return [em.intl.string(em.t["s8+CFq"]), null];
                    if (X) return [em.intl.string(em.t.JEEdqt), null];
                    if (z) return [em.intl.string(em.t.pzBMwY), null];
                    return [em.intl.string(em.t["2Xhy9k"]), null];
                case null == u:
                    return [em.intl.string(em.t.vwHPRi), null];
                case H: {
                    let e =
                        (null == u ? void 0 : u.fullscreenType) === O.Jx.FULLSCREEN
                            ? em.intl.string(em.t.mJmbeC)
                            : null;
                    return [em.intl.string(em.t.VPW4XY), e];
                }
                default:
                    return [em.intl.string(em.t.ONovP5), null];
            }
        })();
    (0, v.ZP)(() => {
        m.Z.getDetectableGames();
    });
    let [er, ei] = i.useMemo(
        () =>
            W
                ? ["text-muted", h.TVs.colors.TEXT_MUTED.css]
                : Y && z
                  ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css]
                  : Y && K
                    ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : Y && X
                      ? ["text-primary", h.TVs.colors.TEXT_PRIMARY.css]
                      : ["interactive-normal", h.TVs.colors.INTERACTIVE_NORMAL.css],
        [W, Y, z, K, X],
    );
    return null == o
        ? null
        : (0, r.jsxs)(eM, {
              onExpand: S,
              className: T ? eg.expandedContainer : void 0,
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
                                text: em.intl.string(em.t["4PJP5p"]),
                                children: (e) =>
                                    (0, r.jsx)(
                                        D.Z,
                                        eI(
                                            eO(
                                                {
                                                    size: eN,
                                                    color: h.TVs.colors.BG_BRAND.css,
                                                },
                                                e,
                                            ),
                                            {
                                                children: (0, r.jsx)(h.kmB, {
                                                    size: "custom",
                                                    width: eN,
                                                    height: eN,
                                                    color: h.TVs.colors.WHITE.css,
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
                          ? (0, r.jsx)(h.pzj, {
                                size: "xxs",
                                color: ei,
                            })
                          : (0, r.jsx)("div", { className: eg.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: er,
                          children: em.intl.string(em.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, r.jsx)(P.Z, {
                  game: s,
                  pid: null == o ? void 0 : o.pid,
                  size: P.A.MEDIUM,
              }),
              "aria-label": em.intl.string(em.t["87O5GC"]),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => ej(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: (g && L) || (y && R),
                      disabled: G,
                      onChange: (e) => {
                          U(e, k(e, (g && L) || (y && R)));
                      },
                  }),
              }),
              warning: (0, r.jsx)(q.Z, {
                  className: eg.systemServiceWarning,
                  game: o,
              }),
              children: [
                  (0, r.jsx)(ex, {
                      title: em.intl.string(em.t["7BlVIs"]),
                      description: em.intl.string(em.t.ndgADE),
                      hint: L ? void 0 : em.intl.string(em.t.cAFVsL),
                      "aria-label": em.intl.string(em.t["7BlVIs"]),
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
                              (0, r.jsx)("div", { className: eg.emptySpacer }),
                          ],
                      }),
                  }),
                  (0, r.jsx)(ex, {
                      title: em.intl.string(em.t.BfFpW1),
                      description: em.intl.string(em.t.OzInYk),
                      hint: R ? void 0 : em.intl.string(em.t["3sYHXm"]),
                      "aria-label": em.intl.string(em.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: y && R,
                                  disabled: A,
                                  onChange: (e) => {
                                      e && !R
                                          ? M(e, w.OverlayToggledClientSettingType.LEGACY)
                                          : M(e, w.OverlayToggledClientSettingType.LEGACY_GAME);
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
        u = (0, _.cj)([C.ZP, $.Z, et.Z], () => (0, C.FZ)(t, C.ZP, $.Z, et.Z)),
        d = (0, _.cj)([$.Z, et.Z], () => (0, C.b6)(t, !1, [$.Z, et.Z]), [t]),
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
                (0, r.jsx)(h.rsf, {
                    checked: p,
                    disabled: a,
                    onChange: (e) => g(e),
                }),
                (0, r.jsx)("div", { className: eg.emptySpacer }),
            ],
        }),
    });
}
function eZ() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, _.cj)([j.default], () => j.default.getGlobalEnabledStatus()),
        o = (0, _.Wu)([C.ZP], () => C.ZP.getGamesSeen(!0)).filter((e) => !(0, K.le)(e)),
        s = (0, S.Z)(o.map((e) => e.id)),
        l = !(0, eu.supportsLegacy)(),
        c = (e) => {
            var t, r;
            b.Z.setEnabled(e, a);
            let i = null != (r = null == (t = C.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, w.ou)(e, w.OverlayToggledClientSettingType.LEGACY, i),
                !e && n && (0, Z.l)(w.OverlayToggledClientSettingType.LEGACY, i);
        },
        u = (e, t, n) => {
            let { enabledOOP: r } = n;
            m.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                (0, eu.supportsLegacy)()
                    ? l
                        ? em.intl.string(em.t.r9jEVw)
                        : em.intl.string(em.t.OzInYk)
                    : em.intl.string(em.t["8Ox6/E"]),
            [l],
        );
    return 0 === o.length
        ? (0, r.jsx)(ex, {
              title: em.intl.string(em.t.BfFpW1),
              description: d,
              "aria-label": em.intl.string(em.t.BfFpW1),
              className: eg.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: l,
                          onChange: (e) => c(e),
                      }),
                      ep.iP && (0, r.jsx)("div", { className: eg.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(eM, {
              onExpand: t,
              className: e ? eg.expandedContainer : void 0,
              title: em.intl.string(em.t.BfFpW1),
              description: d,
              "aria-label": em.intl.string(em.t.BfFpW1),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => ej(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: l,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: eg.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: em.intl.string(em.t.FzoWRo),
                      }),
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: eg.scroller,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              eB,
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
                                  ariaLabel: em.intl.format(em.t.hvPYsF, { gameName: e.name }).toString(),
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
        { oopEnabled: n, legacyEnabled: a } = (0, _.cj)([j.default], () => j.default.getGlobalEnabledStatus()),
        o = !(0, eu.supportsOutOfProcess)(),
        s = (0, _.Wu)([C.ZP], () => C.ZP.getGamesSeen(!0)).filter((e) => !(0, K.le)(e)),
        l = (0, S.Z)(s.map((e) => e.id)),
        c = (e) => {
            var t, r;
            let i = !e && n;
            b.Z.setEnabled(a, e);
            let o = null != (r = null == (t = C.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? r : null;
            (0, w.ou)(e, w.OverlayToggledClientSettingType.OOP, o),
                i && (0, Z.l)(w.OverlayToggledClientSettingType.OOP, o);
        },
        u = (e, t, n) => {
            let { enabledLegacy: r } = n;
            m.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                ep.iP ? (o ? em.intl.string(em.t.C7bLTQ) : em.intl.string(em.t.ndgADE)) : em.intl.string(em.t.m7X4az),
            [o],
        );
    return 0 === s.length
        ? (0, r.jsx)(ex, {
              title: em.intl.string(em.t["7BlVIs"]),
              description: d,
              "aria-label": em.intl.string(em.t["7BlVIs"]),
              className: eg.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e) => c(e),
                      }),
                      ep.iP && (0, r.jsx)("div", { className: eg.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(eM, {
              onExpand: t,
              className: e ? eg.expandedContainer : void 0,
              title: em.intl.string(em.t["7BlVIs"]),
              description: d,
              "aria-label": em.intl.string(em.t["7BlVIs"]),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => ej(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: eg.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: em.intl.string(em.t.FzoWRo),
                      }),
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: eg.scroller,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              eB,
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
                                  ariaLabel: em.intl.format(em.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eV() {
    return (0, M.T_)(I.Z.USER_SETTINGS)
        ? (0, r.jsx)(ex, {
              title: em.intl.string(em.t["z4/l+V"]),
              description: em.intl.string(em.t["3aZq/0"]),
              action: (0, r.jsx)(h.Button, {
                  variant: "secondary",
                  text: em.intl.string(em.t.s2nVhG),
                  onClick: () => {
                      (0, V.N)(I.Z.USER_SETTINGS, ef.IlC.APP);
                  },
              }),
              "aria-label": em.intl.string(em.t["z4/l+V"]),
          })
        : null;
}
function eH() {
    var e;
    let t = (0, _.e7)([er.ZP], () => er.ZP.getOverlayKeybind()),
        n = !(0, eu.supportsLegacy)(),
        i = !(0, eu.supportsOutOfProcess)(),
        [a, o] = (0, _.Wu)([C.ZP], () => [C.ZP.canShowAdminWarning, C.ZP.getVisibleGame()], []),
        s = (0, z.hi)(),
        l = null != o && o.elevated && a && !s,
        c = !(0, er.I1)(null != (e = null == t ? void 0 : t.shortcut) ? e : []);
    function d(e) {
        u()(null != t, "Keybind should never be undefined"), g.Z.setKeybind(eI(eO({}, t), { shortcut: e }));
    }
    return (0, r.jsx)("div", {
        className: eg.keybindMainContainer,
        children: (0, r.jsxs)("div", {
            className: eg.keybindContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: eg.keybindHeaderContainer,
                    children: [
                        (0, r.jsx)(h.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: em.intl.string(em.t.VsAZcC),
                        }),
                        l &&
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eg.keybindAdminWarning,
                                children: em.intl.string(em.t.NsowVa),
                            }),
                        c &&
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eg.keybindAdminWarning,
                                children: em.intl.string(em.t["UNoTw/"]),
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
let eY = (e, t, n) =>
    [
        {
            title: em.t.eVE4LX,
            description: em.t["72WNqk"],
            disabledSetting: L.i.TEXT_CHAT,
        },
        {
            title: em.t.oifnSh,
            description: em.t.bgU5r0,
            disabledSetting: L.i.WELCOME_GENERAL,
        },
        {
            title: em.t.hqsZJW,
            description: em.t.kHjdqc,
            disabledSetting: L.i.GO_LIVE_NUDGE,
        },
        e && {
            title: em.t.sop3rn,
            description: em.t.pjgffc,
            disabledSetting: L.i.GAME_ACTIVITY,
        },
        t && {
            title: em.t["2QVhbb"],
            description: em.t.wQ4ilB,
            disabledSetting: L.i.NOW_PLAYING,
        },
        n && {
            title: em.t["5/21FT"],
            description: em.t.EIzwfA,
            disabledSetting: L.i.FRIEND_STREAM_WATCH_NUDGE,
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function eW() {
    let { allowActivityWidget: e, allowNowPlaying: t } = (0, M.o4)("user_settings"),
        { enabled: n } = (0, M.aq)("OverlayV3StreamWatchNudge"),
        i = eY(e, t, n),
        a = (e) => (t) => {
            b.Z.setNotificationDisabledSetting(e, !t);
        },
        o = (0, _.e7)([G.Z], () => G.Z.getDisabledNotifications());
    return (0, r.jsxs)("div", {
        className: eg.notificationSettingsContainer,
        children: [
            (0, r.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: em.intl.string(em.t.xOE5bA),
            }),
            i.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: eg.notificationItem,
                        children: [
                            (0, r.jsxs)("div", {
                                className: eg.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: em.intl.string(e.title),
                                    }),
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: em.intl.string(e.description),
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
        } = (0, _.cj)([ea.default], () => ({
            avatarSizeMode: ea.default.getAvatarSizeMode(),
            displayNameMode: ea.default.getDisplayNameMode(),
            displayUserMode: ea.default.getDisplayUserMode(),
        })),
        l = (0, _.e7)([en.default], () => en.default.getCurrentUser()),
        [c] = i.useState(() => [
            ez(em.intl.string(em.t.C0ZDvo), !0, !1),
            ez(em.intl.string(em.t.iOtj8E), !1, !1, !0),
            ez(em.intl.string(em.t["0oqNgL"]), !1, !0),
        ]),
        u = (0, _.e7)([B.Z, ee.Z], () => {
            let e = B.Z.getWidgetByType(ef.Odu.VOICE_V3);
            if (null == e) return null;
            let t = ee.Z.getWidget(e.id);
            return null != t && (0, H.Aw)(t) ? t : null;
        }),
        d = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : eh.At,
        f = [null != l ? eK(l) : null, ...c].filter(es.lm),
        p = [new Map(f.map((e) => [e.user.id, e])), f.map((e) => e.user.id)];
    function m(e) {
        null != u &&
            (e < eR
                ? (0, E.zG)(u.id, { voiceStatesMaxShown: eh.Og })
                : (0, E.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    let g = ef.BRd.MIDNIGHT;
    return (0, r.jsxs)("div", {
        className: eg.voiceSettingsContainer,
        children: [
            (0, r.jsx)(h.q4e, {
                label: em.intl.string(em.t.dnvZSg),
                options: [
                    {
                        label: em.intl.string(em.t.YcOxtr),
                        value: ef.ipw.LARGE,
                    },
                    {
                        label: em.intl.string(em.t.BKIKqx),
                        value: ef.ipw.SMALL,
                    },
                ],
                className: eg.select,
                onChange: (e) => b.Z.setAvatarSizeMode(e),
                value: n,
            }),
            (0, r.jsx)(h.q4e, {
                label: em.intl.string(em.t.J0dpcB),
                options: [
                    {
                        label: em.intl.string(em.t.nBmDrT),
                        value: ef.wC$.ALWAYS,
                    },
                    {
                        label: em.intl.string(em.t["2OvIZY"]),
                        value: ef.wC$.ONLY_WHILE_SPEAKING,
                    },
                    {
                        label: em.intl.string(em.t.ekjlPL),
                        value: ef.wC$.NEVER,
                    },
                ],
                className: eg.select,
                onChange: (e) => b.Z.setDisplayNameMode(e),
                value: a,
            }),
            (0, r.jsx)(h.f6W, {
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
                                    title: em.intl.string(em.t.KNJ6Vq),
                                    channel: eq(),
                                    overlayVoiceStates: p,
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
                                    (0, r.jsx)(W.PI, { children: em.intl.string(em.t.KNJ6Vq) }),
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
            (0, r.jsx)(h.q4e, {
                label: em.intl.string(em.t.swsWWC),
                options: [
                    {
                        label: em.intl.string(em.t.nBmDrT),
                        value: ef.OYC.ALWAYS,
                    },
                    {
                        label: em.intl.string(em.t["2OvIZY"]),
                        value: ef.OYC.ONLY_WHILE_SPEAKING,
                    },
                ],
                className: eg.select,
                onChange: (e) => b.Z.setDisplayUserMode(e),
                value: s,
            }),
            (0, r.jsx)("div", {
                className: eg.sliderContainer,
                children: (0, r.jsx)(h.iRW, {
                    label: em.intl.string(em.t["X/Uyzc"]),
                    initialValue: d,
                    onValueRender: (e) => (e < eR ? em.intl.string(em.t.nrUzFL) : "".concat(Math.floor(e))),
                    minValue: eR - 1,
                    maxValue: eP,
                    onValueChange: m,
                    markers: eD,
                    barStyles: { background: h.TVs.colors.BACKGROUND_MOD_STRONG.css },
                    fillStyles: { background: h.TVs.colors.BG_BRAND.css },
                    onMarkerRender: (e) => (e < eR ? em.intl.string(em.t.nrUzFL) : "".concat(Math.floor(e))),
                }),
            }),
        ],
    });
}
function eQ() {
    let [e, t] = (0, A.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(e_.L.DISMISS);
        };
    return ((0, v.ZP)(() => () => {
        t(e_.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)("div", {
              className: eg.overlaySettingsNux,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: eE.Z,
                          alt: em.intl.string(em.t.mdXZh1),
                          className: eg.nuxFirstImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: eg.mainTitleContainer,
                          children: [
                              (0, r.jsx)(h.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "header-primary",
                                  children: em.intl.string(em.t.jzjJQg),
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: em.intl.string(em.t["5dOfxb"]),
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: eb.Z,
                          alt: em.intl.string(em.t.mdXZh1),
                          className: eg.nuxUserSettingsImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: eg.closeCircleButton,
                      children: (0, r.jsx)(h.Button, {
                          variant: "primary",
                          text: em.intl.string(em.t.Q26diF),
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
        o = (0, _.e7)([G.Z], () => G.Z.isLimitedInteractionOverrideEnabled(a), [a]),
        s = i.useMemo(() => null != t && (0, U.H8)(t.pid), [t]),
        l = (0, k.Z)({ location: "overlay_user_settings" }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: u } = (0, _.cj)([ea.default], () => ({
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
                (0, r.jsx)(h.rsf, {
                    label: em.intl.string(em.t.XZTl9r),
                    checked: u,
                    onChange: (e) => b.Z.setShowKeybindIndicators(e),
                }),
            null != a &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eg.limitedInteractionOverrideContainer,
                            children: [
                                (0, r.jsx)(h.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: em.intl.string(em.t.wgVQND),
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: em.intl.string(em.t["5SsyF5"]),
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
                        className: eg.limitedInteractionOverrideContainer,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: em.intl.string(em.t["+eFXxq"]),
                            }),
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: em.intl.string(em.t.kivMAp),
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
function e$(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: i, runningGameApplication: a } = (0, N.Z)(),
        o = (0, M.o4)("user_settings").overlayV3UI,
        s = (0, _.e7)([en.default], () => en.default.getCurrentUser());
    return ((0, v.ZP)(() => {
        if (el.isPlatformEmbedded) return (0, R.Ky)(), R.P7;
    }),
    ew(),
    null == s)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(ed.Z, {
                      title: em.intl.string(em.t["9cb1Uz"]),
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
                                  (0, r.jsx)(eZ, {}),
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
                  (0, r.jsxs)(h.gNt, {
                      label: em.intl.string(em.t.r1TZfh),
                      children: [(0, r.jsx)(eX, {}), (0, r.jsx)("div", { className: eg.settingsDivider })],
                  }),
                  (0, r.jsx)(eW, {}),
              ],
          });
}
