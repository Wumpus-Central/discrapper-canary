n.d(t, { Z: () => eq }), n(953529), n(388685);
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
    x = n(837268),
    L = n(32300),
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
    Y = n(894300),
    W = n(131704),
    K = n(598077),
    z = n(189786),
    q = n(77498),
    X = n(355863),
    Q = n(283595),
    J = n(594174),
    $ = n(556296),
    ee = n(808506),
    et = n(237997),
    en = n(626135),
    er = n(823379),
    ei = n(358085),
    ea = n(13140),
    eo = n(145597),
    es = n(981631),
    el = n(921944),
    ec = n(987650),
    eu = n(501787),
    ed = n(388032),
    ef = n(607547),
    e_ = n(131970),
    ep = n(730462);
function eh(e, t, n) {
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
function em(e) {
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
                eh(e, t, n[t]);
            });
    }
    return e;
}
function eg(e, t) {
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
function eE(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eg(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eb(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ey(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ey(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let eO = eR(null),
    ev = 20,
    eI = 16,
    eT = 1,
    eS = "voice-widget-display-users",
    eA = 25,
    eC = [0, 5, 10, 15, 20, 25];
function eN() {
    let e = eR(eO);
    f().isEqual(e, eO) || (en.default.track(es.rMx.OVERLAY_SETTINGS_UPDATED, e), (eO = e));
}
function eR(e) {
    var t;
    let n = et.default.getNotificationPositionMode(),
        r = n !== es._vf.DISABLED,
        i = $.ZP.getOverlayKeybind(),
        a = $.ZP.getOverlayChatKeybind();
    return {
        enabled: ee.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: U.Z.isNotificationDisabled(D.OverlayNotificationDisabledSetting.TEXT_CHAT)
            ? "DISABLED"
            : "ENABLED",
        hotkey: null != i ? (0, ea.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, ea.BB)(a.shortcut) : null,
        text_opacity_slider: et.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : ee.default.enabled,
    };
}
function eP(e) {
    let { children: t, title: n, className: i, titleId: a } = e;
    return (0, r.jsxs)(h.xJW, {
        children: [
            null != n &&
                (0, r.jsx)(h.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: ef.formItemTitle,
                    id: a,
                    children: n,
                }),
            (0, r.jsx)("div", {
                className: o()(ef.rowContainer, i),
                children: t,
            }),
        ],
    });
}
function ew(e) {
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
        className: o()(ef.groupContainer, f),
        children: [
            (0, r.jsxs)(h.kL8, {
                "aria-label": d,
                onClick: u,
                children: [
                    null != t &&
                        (0, r.jsx)("div", {
                            className: ef.groupHeader,
                            children: t,
                        }),
                    (0, r.jsxs)("div", {
                        className: ef.groupContent,
                        children: [
                            null != n &&
                                (0, r.jsx)("div", {
                                    className: ef.groupIcon,
                                    children: n,
                                }),
                            (0, r.jsxs)("div", {
                                className: ef.groupMainContent,
                                children: [
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-md/medium",
                                        color: "header-primary",
                                        className: ef.groupTitle,
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
                                className: ef.groupAction,
                                children: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: ef.groupWarning,
                children: c,
            }),
        ],
    });
}
function eD(e) {
    var { children: t, className: n, onExpand: a } = e,
        s = eb(e, ["children", "className", "onExpand"]);
    let [l, c] = i.useState(!1),
        u = (e) => {
            c(e), null == a || a(e);
        };
    return (0, r.jsx)(h.zF9, {
        className: ef.collapseable,
        collapsibleContent: (0, r.jsx)("div", {
            className: ef.groupCollapsedContainer,
            children: t,
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                ew,
                eE(em({}, s), {
                    onClick: (e) => {
                        u(!l), null == t || t(e);
                    },
                    className: o()(ef.mainCollapseableContainer, n),
                    action: (0, r.jsxs)("div", {
                        className: ef.groupCollapsedAction,
                        children: [
                            s.action,
                            l
                                ? (0, r.jsx)(h.CJ0, {
                                      size: "custom",
                                      width: ev,
                                      height: ev,
                                      color: "var(--interactive-active)",
                                  })
                                : (0, r.jsx)(h.Fbu, {
                                      size: "custom",
                                      width: ev,
                                      height: ev,
                                      color: "var(--interactive-active)",
                                  }),
                        ],
                    }),
                }),
            );
        },
    });
}
let ex = new Set([
        x.mM.INITIALIZING,
        x.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        x.mM.WAITING_FOR_MODULE_TRACKING,
        x.mM.WAITING_FOR_OVERLAY_OPEN,
    ]),
    eL = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function ej(e) {
    var t, n, a;
    let { runningGame: o, runningGameApplication: s } = e,
        c = null == o ? void 0 : o.pid,
        u = (0, _.e7)(
            [M.default],
            () => (null == o || null == c ? null : M.default.getTrackedGameByPid(c)),
            [o, c],
            l(),
        ),
        { enabledLegacy: d, enabledOOP: f } = (0, _.cj)([q.Z, Q.Z], () => {
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
            return (0, A.b6)(o, !1, [q.Z, Q.Z]);
        }, [o, u]),
        p = (0, _.e7)([A.ZP, q.Z, Q.Z], () => (null == o ? null : (0, A.FZ)(o, A.ZP, q.Z, Q.Z)), [o], l()),
        [g, E] = i.useState(f),
        [y, I] = i.useState(d),
        [T, S] = i.useState(!1);
    i.useEffect(() => {
        E(f), I(d);
    }, [f, d]);
    let C = !(0, eo.supportsLegacy)(),
        N = !(0, eo.supportsOutOfProcess)(),
        { legacyEnabled: D, oopEnabled: L } = (0, _.cj)([M.default], () => M.default.getGlobalEnabledStatus()),
        j = (e, t, n) => {
            var r, i, a;
            if ((eL(n), null == o)) return;
            let s = !1,
                l = !1;
            switch (t) {
                case w.AE.LEGACY_GAME:
                    I(e), m.Z.toggleOverlay(o, e, g), (s = !e && y);
                    break;
                case w.AE.OOP_GAME:
                    E(e), m.Z.toggleOverlay(o, y, e), (l = !e && g);
                    break;
                case w.AE.LEGACY:
                    b.Z.setEnabled(e, L), (0, w.ou)(e, w.AE.LEGACY, null != (r = o.id) ? r : null);
                    break;
                case w.AE.OOP:
                    b.Z.setEnabled(D, e), (0, w.ou)(e, w.AE.OOP, null != (i = o.id) ? i : null);
            }
            (s || l) && (0, B.l)(s ? w.AE.LEGACY_GAME : w.AE.OOP_GAME, null != (a = o.id) ? a : null);
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
        U = (e, t, n) => {
            if ((eL(n), null == o)) return;
            let r = !1,
                i = !1;
            switch (t) {
                case "game":
                    m.Z.toggleOverlay(o, e, e), I(e), E(e), (r = !e && y), (i = !e && g);
                    break;
                case "global":
                    b.Z.setEnabled(e, e), (r = !e && D), (i = !e && L);
                    break;
                case "both":
                    b.Z.setEnabled(e, e),
                        m.Z.toggleOverlay(o, e, e),
                        I(e),
                        E(e),
                        (r = (!e && D) || (!e && y)),
                        (i = (!e && L) || (!e && g));
            }
            let a = null;
            if (
                (r
                    ? (a = "game" === t ? w.AE.LEGACY_GAME : w.AE.LEGACY)
                    : i && (a = "game" === t ? w.AE.OOP_GAME : w.AE.OOP),
                null != a)
            ) {
                var s;
                (0, B.l)(a, null != (s = o.id) ? s : null);
            }
        },
        G = C && N,
        Z = !D && !L,
        F = !g && !D && y && !C,
        V = !y && !L && g && !N,
        H = (null == u ? void 0 : u.overlayMethod) === x.gl.Disabled,
        W = (null == u ? void 0 : u.state) === x.mM.OVERLAY_RENDERING && !H,
        K = (null == u ? void 0 : u.state) != null && ex.has(u.state) && !H,
        z = (null == u ? void 0 : u.overlayMethod) === x.gl.OutOfProcess,
        X = (null == u ? void 0 : u.overlayMethod) === x.gl.OutOfProcessLimitedInteraction,
        J = (null == u ? void 0 : u.overlayMethod) === x.gl.Hook,
        $ =
            (null == u ? void 0 : u.state) === x.mM.OVERLAY_CRASHED ||
            (null == u ? void 0 : u.state) === x.mM.OVERLAY_CRASHED_DISABLED,
        ee = !g && !y,
        [et, en] = (() => {
            switch (!0) {
                case W && z:
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
                        ed.intl.format(ed.t.hFVBIi, {
                            overlayMethod: ed.intl.string(ed.t.a3eXS0),
                            overlayMethodHook: e,
                        }),
                        null,
                    ];
                case W && X:
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
                        ed.intl.format(ed.t.hFVBIi, {
                            overlayMethod: ed.intl.string(ed.t["506AbW"]),
                            overlayMethodHook: t,
                        }),
                        null,
                    ];
                case W && J:
                    function n() {
                        var e, t;
                        switch (!0) {
                            case (null == u ? void 0 : u.fullscreenType) !== O.Jx.BORDERLESS_FULLSCREEN:
                                return ed.intl.string(ed.t.mJmbeH);
                            case N:
                                return ed.intl.string(ed.t.C7bLTU);
                            case !(null != (e = null == u ? void 0 : u.oopEnabled) && e):
                                return ed.intl.string(ed.t.WiY24u);
                            case !L:
                                return ed.intl.string(ed.t.cAFVsL);
                            case !(null != (t = null == u ? void 0 : u.supportsOutOfProcess) && t):
                                return ed.intl.string(ed.t.XcGEcn);
                            default:
                                return ed.intl.string(ed.t.bJXH2t);
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
                        ed.intl.format(ed.t.hFVBIi, {
                            overlayMethod: ed.intl.string(ed.t.bvlpDQ),
                            overlayMethodHook: i,
                        }),
                        n(),
                    ];
                case $:
                    return [ed.intl.string(ed.t.OFC2a2), null];
                case G:
                    return [ed.intl.string(ed.t.m7X4a2), null];
                case Z:
                    return [ed.intl.string(ed.t["9DUS5u"]), null];
                case ee:
                    return [ed.intl.string(ed.t.nQ9EdH), null];
                case F:
                case V:
                    return [ed.intl.string(ed.t.VWUn0d), null];
                case K:
                    if (z) return [ed.intl.string(ed.t["s8+CFh"]), null];
                    if (J) return [ed.intl.string(ed.t.JEEdqq), null];
                    if (X) return [ed.intl.string(ed.t.pzBMwc), null];
                    return [ed.intl.string(ed.t["2Xhy9v"]), null];
                case null == u:
                    return [ed.intl.string(ed.t.vwHPRk), null];
                default:
                    return [ed.intl.string(ed.t.ONovPz), null];
            }
        })();
    (0, v.ZP)(() => {
        m.Z.getDetectableGames();
    });
    let [er, ei] = i.useMemo(
        () =>
            K
                ? ["text-muted", h.TVs.colors.TEXT_MUTED.css]
                : W && X
                  ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css]
                  : W && z
                    ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : W && J
                      ? ["text-primary", h.TVs.colors.TEXT_PRIMARY.css]
                      : ["interactive-normal", h.TVs.colors.INTERACTIVE_NORMAL.css],
        [K, W, X, z, J],
    );
    return null == o
        ? null
        : (0, r.jsxs)(eD, {
              onExpand: S,
              className: T ? ef.expandedContainer : void 0,
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
                                text: ed.intl.string(ed.t["4PJP5u"]),
                                children: (e) =>
                                    (0, r.jsx)(
                                        P.Z,
                                        eE(
                                            em(
                                                {
                                                    size: eI,
                                                    color: h.TVs.colors.BG_BRAND.css,
                                                },
                                                e,
                                            ),
                                            {
                                                children: (0, r.jsx)(h.kmB, {
                                                    size: "custom",
                                                    width: eI,
                                                    height: eI,
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
                      W || K
                          ? (0, r.jsx)(h.pzj, {
                                size: "xxs",
                                color: ei,
                            })
                          : (0, r.jsx)("div", { className: ef.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: er,
                          children: ed.intl.string(ed.t.CDOx39),
                      }),
                  ],
              }),
              icon: (0, r.jsx)(R.Z, {
                  game: s,
                  pid: null == o ? void 0 : o.pid,
                  size: R.A.MEDIUM,
              }),
              "aria-label": ed.intl.string(ed.t["87O5GB"]),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eL(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: (g && L) || (y && D),
                      disabled: G,
                      onChange: (e, t) => {
                          U(e, k(e, (g && L) || (y && D)), t);
                      },
                  }),
              }),
              warning: (0, r.jsx)(Y.Z, {
                  className: ef.systemServiceWarning,
                  game: o,
              }),
              children: [
                  (0, r.jsx)(ew, {
                      title: ed.intl.string(ed.t["7BlVIi"]),
                      description: ed.intl.string(ed.t.ndgADA),
                      hint: L ? void 0 : ed.intl.string(ed.t.cAFVsL),
                      "aria-label": ed.intl.string(ed.t["7BlVIi"]),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: g && L,
                                  disabled: N,
                                  onChange: (e, t) => {
                                      e && !L ? j(e, w.AE.OOP, t) : j(e, w.AE.OOP_GAME, t);
                                  },
                              }),
                              (0, r.jsx)("div", { className: ef.emptySpacer }),
                          ],
                      }),
                  }),
                  (0, r.jsx)(ew, {
                      title: ed.intl.string(ed.t.BfFpW1),
                      description: ed.intl.string(ed.t.OzInYm),
                      hint: D ? void 0 : ed.intl.string(ed.t["3sYHXl"]),
                      "aria-label": ed.intl.string(ed.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: y && D,
                                  disabled: C,
                                  onChange: (e, t) => {
                                      e && !D ? j(e, w.AE.LEGACY, t) : j(e, w.AE.LEGACY_GAME, t);
                                  },
                              }),
                              (0, r.jsx)("div", { className: ef.emptySpacer }),
                          ],
                      }),
                  }),
              ],
          });
}
function eM(e) {
    let { game: t, gameApplication: n } = e,
        a = i.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        o = (0, _.e7)([I.Z], () => (null != n ? n : I.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(R.Z, {
        game: o,
        pid: a,
        size: R.A.SMALL,
    });
}
function ek(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: a,
            getEnabledFromStatus: o,
            onChange: s,
            clientSettingType: l,
            ariaLabel: c,
        } = e,
        u = (0, _.cj)([A.ZP, q.Z, Q.Z], () => (0, A.FZ)(t, A.ZP, q.Z, Q.Z)),
        d = (0, _.cj)([q.Z, Q.Z], () => (0, A.b6)(t, !1, [q.Z, Q.Z]), [t]),
        f = o(d),
        [p, m] = i.useState(f);
    i.useEffect(() => {
        m(f);
    }, [f]);
    let g = (e, n) => {
        let r = !e && p;
        if ((eL(n), m(e), s(e, u, d), r)) {
            var i, a;
            (0, B.l)(l, null != (a = null != (i = u.id) ? i : null == t ? void 0 : t.id) ? a : null);
        }
    };
    return (0, r.jsx)(ew, {
        title: t.name,
        icon: (0, r.jsx)(eM, {
            game: u,
            gameApplication: n,
        }),
        "aria-label": c,
        action: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.rsf, {
                    checked: p,
                    disabled: a,
                    onChange: (e, t) => g(e, t),
                }),
                (0, r.jsx)("div", { className: ef.emptySpacer }),
            ],
        }),
    });
}
function eU() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, _.cj)([M.default], () => M.default.getGlobalEnabledStatus()),
        o = (0, _.Wu)([A.ZP], () => A.ZP.getGamesSeen(!0)).filter((e) => !(0, H.le)(e)),
        s = (0, T.Z)(o.map((e) => e.id)),
        l = !(0, eo.supportsLegacy)(),
        c = (e, t) => {
            var r, i;
            eL(t), b.Z.setEnabled(e, a);
            let o = null != (i = null == (r = A.ZP.getCurrentGameForAnalytics()) ? void 0 : r.id) ? i : null;
            (0, w.ou)(e, w.AE.LEGACY, o), !e && n && (0, B.l)(w.AE.LEGACY, o);
        },
        u = (e, t, n) => {
            let { enabledOOP: r } = n;
            m.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                (0, eo.supportsLegacy)()
                    ? l
                        ? ed.intl.string(ed.t.r9jEV1)
                        : ed.intl.string(ed.t.OzInYm)
                    : ed.intl.string(ed.t["8Ox6/P"]),
            [l],
        );
    return 0 === o.length
        ? (0, r.jsx)(ew, {
              title: ed.intl.string(ed.t.BfFpW1),
              description: d,
              "aria-label": ed.intl.string(ed.t.BfFpW1),
              className: ef.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: l,
                          onChange: (e, t) => c(e, t),
                      }),
                      ec.iP && (0, r.jsx)("div", { className: ef.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(eD, {
              onExpand: t,
              className: e ? ef.expandedContainer : void 0,
              title: ed.intl.string(ed.t.BfFpW1),
              description: d,
              "aria-label": ed.intl.string(ed.t.BfFpW1),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eL(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: l,
                      onChange: (e, t) => c(e, t),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: ef.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: ed.intl.string(ed.t.FzoWRk),
                      }),
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: ef.scroller,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              ek,
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
                                  ariaLabel: ed.intl.format(ed.t.hvPYsL, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eG() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: a } = (0, _.cj)([M.default], () => M.default.getGlobalEnabledStatus()),
        o = !(0, eo.supportsOutOfProcess)(),
        s = (0, _.Wu)([A.ZP], () => A.ZP.getGamesSeen(!0)).filter((e) => !(0, H.le)(e)),
        l = (0, T.Z)(s.map((e) => e.id)),
        c = (e, t) => {
            var r, i;
            eL(t);
            let o = !e && n;
            b.Z.setEnabled(a, e);
            let s = null != (i = null == (r = A.ZP.getCurrentGameForAnalytics()) ? void 0 : r.id) ? i : null;
            (0, w.ou)(e, w.AE.OOP, s), o && (0, B.l)(w.AE.OOP, s);
        },
        u = (e, t, n) => {
            let { enabledLegacy: r } = n;
            m.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                ec.iP ? (o ? ed.intl.string(ed.t.C7bLTU) : ed.intl.string(ed.t.ndgADA)) : ed.intl.string(ed.t.m7X4a2),
            [o],
        );
    return 0 === s.length
        ? (0, r.jsx)(ew, {
              title: ed.intl.string(ed.t["7BlVIi"]),
              description: d,
              "aria-label": ed.intl.string(ed.t["7BlVIi"]),
              className: ef.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e, t) => c(e, t),
                      }),
                      ec.iP && (0, r.jsx)("div", { className: ef.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(eD, {
              onExpand: t,
              className: e ? ef.expandedContainer : void 0,
              title: ed.intl.string(ed.t["7BlVIi"]),
              description: d,
              "aria-label": ed.intl.string(ed.t["7BlVIi"]),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => eL(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e, t) => c(e, t),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: ef.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: ed.intl.string(ed.t.FzoWRk),
                      }),
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: ef.scroller,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              ek,
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
                                  ariaLabel: ed.intl.format(ed.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eB() {
    var e;
    let t = (0, _.e7)([$.ZP], () => $.ZP.getOverlayKeybind()),
        n = !(0, eo.supportsLegacy)(),
        i = !(0, eo.supportsOutOfProcess)(),
        [a, o] = (0, _.Wu)([A.ZP], () => [A.ZP.canShowAdminWarning, A.ZP.getVisibleGame()], []),
        s = null != o && o.elevated && a,
        l = !(0, $.I1)(null != (e = null == t ? void 0 : t.shortcut) ? e : []);
    function c(e) {
        u()(null != t, "Keybind should never be undefined"), g.Z.setKeybind(eE(em({}, t), { shortcut: e }));
    }
    return (0, r.jsx)(eP, {
        children: (0, r.jsx)("div", {
            className: ef.keybindMainContainer,
            children: (0, r.jsxs)("div", {
                className: ef.keybindContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: ef.keybindHeaderContainer,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: ed.intl.string(ed.t.VsAZcH),
                            }),
                            s &&
                                (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: ef.keybindAdminWarning,
                                    children: ed.intl.string(ed.t.NsowVV),
                                }),
                            l &&
                                (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: ef.keybindAdminWarning,
                                    children: ed.intl.string(ed.t.UNoTw8),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: ef.keybindRecorderContainer,
                        children: (0, r.jsx)(y.Z, {
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
let eZ = (e, t) =>
    [
        {
            title: ed.t.eVE4LS,
            description: ed.t["72WNqq"],
            disabledSetting: D.OverlayNotificationDisabledSetting.TEXT_CHAT,
        },
        {
            title: ed.t.hqsZJS,
            description: ed.t.kHjdqa,
            disabledSetting: D.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE,
        },
        e && {
            title: ed.t.sop3rq,
            description: ed.t.pjgffX,
            disabledSetting: D.OverlayNotificationDisabledSetting.GAME_ACTIVITY,
        },
        t && {
            title: ed.t["2QVhbW"],
            description: ed.t.wQ4ilJ,
            disabledSetting: D.OverlayNotificationDisabledSetting.NOW_PLAYING,
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function eF() {
    let { allowActivityWidget: e, allowNowPlaying: t } = (0, L.o4)("user_settings"),
        n = eZ(e, t),
        i = (e) => (t) => {
            b.Z.setNotificationDisabledSetting(e, !t);
        },
        a = (0, _.e7)([U.Z], () => U.Z.getDisabledNotifications());
    return (0, r.jsxs)("div", {
        className: ef.notificationSettingsContainer,
        children: [
            (0, r.jsx)(h.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: ed.intl.string(ed.t.xOE5bG),
            }),
            n.map((e) =>
                (0, r.jsxs)(
                    eP,
                    {
                        className: ef.notificationItem,
                        children: [
                            (0, r.jsxs)("div", {
                                className: ef.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: ed.intl.string(e.title),
                                    }),
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ed.intl.string(e.description),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(h.j7V, {
                                value: !a.has(e.disabledSetting),
                                onChange: i(e.disabledSetting),
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
function eV(e) {
    let t = eH(e.username);
    return (t.user = e), t;
}
function eH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = "456" + Math.floor(1000000 * Math.random());
    return {
        voiceState: new z.Z({
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
        user: new K.Z({
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
function eY() {
    return (0, W.kt)({
        id: "123",
        name: "Test Channel",
        type: es.d4z.GUILD_VOICE,
        guild_id: "456",
    });
}
function eW() {
    var e, t;
    let {
            avatarSizeMode: n,
            displayNameMode: a,
            displayUserMode: s,
        } = (0, _.cj)([et.default], () => ({
            avatarSizeMode: et.default.getAvatarSizeMode(),
            displayNameMode: et.default.getDisplayNameMode(),
            displayUserMode: et.default.getDisplayUserMode(),
        })),
        l = (0, _.e7)([J.default], () => J.default.getCurrentUser()),
        [c] = i.useState(() => [
            eH(ed.intl.string(ed.t.C0ZDvr), !0, !1),
            eH(ed.intl.string(ed.t.iOtj8P), !1, !1, !0),
            eH(ed.intl.string(ed.t["0oqNgI"]), !1, !0),
        ]),
        u = (0, _.e7)([G.ZP, X.Z], () => {
            let e = G.ZP.getWidgetByType(es.Odu.VOICE_V3);
            if (null == e) return null;
            let t = X.Z.getWidget(e.id);
            return null != t && (0, Z.Aw)(t) ? t : null;
        }),
        d = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : eu.At,
        f = [null != l ? eV(l) : null, ...c].filter(er.lm),
        p = [new Map(f.map((e) => [e.user.id, e])), f.map((e) => e.user.id)];
    function m(e) {
        null != u &&
            (e < eT
                ? (0, E.zG)(u.id, { voiceStatesMaxShown: eu.Og })
                : (0, E.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    let g = es.BRd.MIDNIGHT;
    return (0, r.jsxs)("div", {
        className: ef.voiceSettingsContainer,
        children: [
            (0, r.jsx)(eP, {
                title: ed.intl.string(ed.t.dnvZSk),
                children: (0, r.jsx)(h.q4e, {
                    options: [
                        {
                            label: ed.intl.string(ed.t.YcOxtr),
                            value: es.ipw.LARGE,
                        },
                        {
                            label: ed.intl.string(ed.t.BKIKq6),
                            value: es.ipw.SMALL,
                        },
                    ],
                    className: ef.select,
                    onChange: (e) => b.Z.setAvatarSizeMode(e),
                    value: n,
                }),
            }),
            (0, r.jsx)(eP, {
                title: ed.intl.string(ed.t.J0dpcH),
                children: (0, r.jsx)(h.q4e, {
                    options: [
                        {
                            label: ed.intl.string(ed.t.nBmDra),
                            value: es.wC$.ALWAYS,
                        },
                        {
                            label: ed.intl.string(ed.t["2OvIZW"]),
                            value: es.wC$.ONLY_WHILE_SPEAKING,
                        },
                        {
                            label: ed.intl.string(ed.t.ekjlPD),
                            value: es.wC$.NEVER,
                        },
                    ],
                    className: ef.select,
                    onChange: (e) => b.Z.setDisplayNameMode(e),
                    value: a,
                }),
            }),
            (0, r.jsx)(h.f6W, {
                theme: g,
                children: (e) => {
                    var t, i;
                    return (0, r.jsxs)("div", {
                        className: o()(ef.widgetContainer, e),
                        children: [
                            (0, r.jsx)("div", {
                                className: ef.voiceWidgetContainer,
                                children: (0, r.jsx)(F.kI, {
                                    id: "voice-widget",
                                    title: ed.intl.string(ed.t.KNJ6Vl),
                                    channel: eY(),
                                    overlayVoiceStates: p,
                                    displayNameMode: a,
                                    displayUserMode: s,
                                    avatarSizeMode: n,
                                    widget: es.Odu.VOICE,
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
                                className: ef.widgetHeaderContainer,
                                children: [
                                    (0, r.jsx)(V.PI, { children: ed.intl.string(ed.t.KNJ6Vl) }),
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
            (0, r.jsx)(eP, {
                title: ed.intl.string(ed.t.swsWWF),
                children: (0, r.jsx)(h.q4e, {
                    options: [
                        {
                            label: ed.intl.string(ed.t.nBmDra),
                            value: es.OYC.ALWAYS,
                        },
                        {
                            label: ed.intl.string(ed.t["2OvIZW"]),
                            value: es.OYC.ONLY_WHILE_SPEAKING,
                        },
                    ],
                    className: ef.select,
                    onChange: (e) => b.Z.setDisplayUserMode(e),
                    value: s,
                }),
            }),
            (0, r.jsx)(eP, {
                title: ed.intl.string(ed.t["X/Uyzc"]),
                titleId: eS,
                children: (0, r.jsx)("div", {
                    className: ef.sliderContainer,
                    children: (0, r.jsx)(h.iRW, {
                        initialValue: d,
                        onValueRender: (e) => (e < eT ? ed.intl.string(ed.t.nrUzFB) : "".concat(Math.floor(e))),
                        minValue: eT - 1,
                        maxValue: eA,
                        onValueChange: m,
                        markers: eC,
                        barStyles: { background: h.TVs.colors.BACKGROUND_MOD_STRONG.css },
                        fillStyles: { background: h.TVs.colors.BG_BRAND.css },
                        "aria-labelledby": eS,
                        onMarkerRender: (e) => (e < eT ? ed.intl.string(ed.t.nrUzFB) : "".concat(Math.floor(e))),
                    }),
                }),
            }),
        ],
    });
}
function eK() {
    let [e, t] = (0, S.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(el.L.DISMISS);
        };
    return ((0, v.ZP)(() => () => {
        t(el.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)("div", {
              className: ef.overlaySettingsNux,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: e_.Z,
                          alt: ed.intl.string(ed.t.mdXZh4),
                          className: ef.nuxFirstImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: ef.mainTitleContainer,
                          children: [
                              (0, r.jsx)(h.X6q, {
                                  variant: "heading-xl/medium",
                                  color: "header-primary",
                                  children: ed.intl.string(ed.t.jzjJQk),
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ed.intl.string(ed.t["5dOfxc"]),
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: ep.Z,
                          alt: ed.intl.string(ed.t.mdXZh4),
                          className: ef.nuxUserSettingsImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: ef.closeCircleButton,
                      children: (0, r.jsx)(h.zxk, {
                          variant: "primary",
                          text: ed.intl.string(ed.t.Q26diI),
                          onClick: () => n(),
                      }),
                  }),
                  (0, r.jsx)("div", { className: ef.nuxDivider }),
              ],
          });
}
function ez(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        a = null == n ? void 0 : n.id,
        o = (0, _.e7)([U.Z], () => U.Z.isLimitedInteractionOverrideEnabled(a), [a]),
        s = i.useMemo(() => null != t && (0, k.H8)(t.pid), [t]),
        l = (0, j.Z)({ location: "overlay_user_settings" }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: u } = (0, _.cj)([et.default], () => ({
            disableClickableRegions: et.default.disableClickableRegions,
            shouldShowKeybindIndicators: et.default.showKeybindIndicators,
        }));
    function d() {
        b.Z.setDisableClickableRegions(!c);
    }
    function f(e) {
        null != n && b.Z.setLimitedInteractionOverride(n.id, e);
    }
    return (0, r.jsxs)("div", {
        className: ef.overlayEnabledSettingsContainer,
        children: [
            (0, r.jsx)(eB, {}),
            l &&
                (0, r.jsx)(eP, {
                    children: (0, r.jsx)(h.j7V, {
                        value: u,
                        onChange: (e) => b.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: ed.intl.string(ed.t.XZTl9v),
                    }),
                }),
            null != a &&
                (0, r.jsxs)(eP, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: ef.limitedInteractionOverrideContainer,
                            children: [
                                (0, r.jsx)(h.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: ed.intl.string(ed.t.wgVQND),
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: ed.intl.string(ed.t["5SsyFx"]),
                                }),
                            ],
                        }),
                        (0, r.jsx)(h.j7V, {
                            value: o || s,
                            disabled: s,
                            onChange: (e) => f(e),
                            hideBorder: !0,
                        }),
                    ],
                }),
            (0, r.jsxs)(eP, {
                children: [
                    (0, r.jsxs)("div", {
                        className: ef.limitedInteractionOverrideContainer,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: ed.intl.string(ed.t["+eFXxs"]),
                            }),
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ed.intl.string(ed.t.kivMAg),
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.j7V, {
                        value: !c,
                        onChange: d,
                        hideBorder: !0,
                    }),
                ],
            }),
        ],
    });
}
function eq(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: i, runningGameApplication: a } = (0, C.Z)(),
        o = (0, L.o4)("user_settings").overlayV3UI,
        s = (0, _.e7)([J.default], () => J.default.getCurrentUser());
    return ((0, v.ZP)(() => {
        if (ei.isPlatformEmbedded) return (0, N.Ky)(), N.P7;
    }),
    eN(),
    null == s)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(h.hjN, {
                      tag: h.RB0.H1,
                      title: ed.intl.string(ed.t["9cb1U1"]),
                      children: [
                          o ? (0, r.jsx)(eK, {}) : null,
                          (0, r.jsxs)("div", {
                              className: ef.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(ej, {
                                      runningGame: i,
                                      runningGameApplication: a,
                                  }),
                                  (0, r.jsx)(eG, {}),
                                  (0, r.jsx)(eU, {}),
                              ],
                          }),
                          (0, r.jsx)("div", { className: ef.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(h.hjN, {
                      children: [
                          (0, r.jsx)(ez, {
                              runningGame: i,
                              runningGameApplication: a,
                          }),
                          (0, r.jsx)("div", { className: ef.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(h.hjN, {
                      title: ed.intl.string(ed.t.r1TZfn),
                      children: [(0, r.jsx)(eW, {}), (0, r.jsx)("div", { className: ef.settingsDivider })],
                  }),
                  (0, r.jsx)(h.hjN, { children: (0, r.jsx)(eF, {}) }),
              ],
          });
}
