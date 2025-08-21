n.d(t, { Z: () => ez }), n(953529), n(388685);
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
    V = n(243487),
    F = n(430561),
    H = n(509003),
    Y = n(131704),
    W = n(598077),
    K = n(189786),
    z = n(77498),
    q = n(355863),
    X = n(283595),
    Q = n(594174),
    J = n(556296),
    $ = n(808506),
    ee = n(237997),
    et = n(626135),
    en = n(823379),
    er = n(358085),
    ei = n(13140),
    ea = n(145597),
    eo = n(981631),
    es = n(921944),
    el = n(987650),
    ec = n(501787),
    eu = n(388032),
    ed = n(607547),
    ef = n(131970),
    e_ = n(730462);
function ep(e, t, n) {
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
function eh(e) {
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
                ep(e, t, n[t]);
            });
    }
    return e;
}
function em(e, t) {
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
function eg(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : em(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eE(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eb(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eb(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let ey = eN(null),
    eO = 20,
    ev = 16,
    eI = 1,
    eT = "voice-widget-display-users",
    eS = 25,
    eA = [0, 5, 10, 15, 20, 25];
function eC() {
    let e = eN(ey);
    f().isEqual(e, ey) || (et.default.track(eo.rMx.OVERLAY_SETTINGS_UPDATED, e), (ey = e));
}
function eN(e) {
    var t;
    let n = ee.default.getNotificationPositionMode(),
        r = n !== eo._vf.DISABLED,
        i = J.ZP.getOverlayKeybind(),
        a = J.ZP.getOverlayChatKeybind();
    return {
        enabled: $.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: U.Z.isNotificationDisabled(D.OverlayNotificationDisabledSetting.TEXT_CHAT)
            ? "DISABLED"
            : "ENABLED",
        hotkey: null != i ? (0, ei.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, ei.BB)(a.shortcut) : null,
        text_opacity_slider: ee.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : $.default.enabled,
    };
}
function eR(e) {
    let { children: t, title: n, className: i, titleId: a } = e;
    return (0, r.jsxs)(h.xJW, {
        children: [
            null != n &&
                (0, r.jsx)(h.Text, {
                    variant: "text-sm/medium",
                    color: "text-muted",
                    className: ed.formItemTitle,
                    id: a,
                    children: n,
                }),
            (0, r.jsx)("div", {
                className: o()(ed.rowContainer, i),
                children: t,
            }),
        ],
    });
}
function eP(e) {
    let {
        header: t,
        icon: n,
        title: i,
        description: a,
        action: s,
        hint: l,
        onClick: c,
        "aria-label": u,
        className: d,
    } = e;
    return (0, r.jsxs)(h.kL8, {
        "aria-label": u,
        onClick: c,
        className: o()(ed.groupContainer, d),
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: ed.groupHeader,
                    children: t,
                }),
            (0, r.jsxs)("div", {
                className: ed.groupContent,
                children: [
                    null != n &&
                        (0, r.jsx)("div", {
                            className: ed.groupIcon,
                            children: n,
                        }),
                    (0, r.jsxs)("div", {
                        className: ed.groupMainContent,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                className: ed.groupTitle,
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
                        className: ed.groupAction,
                        children: s,
                    }),
                ],
            }),
        ],
    });
}
function ew(e) {
    var { children: t, className: n, onExpand: a } = e,
        s = eE(e, ["children", "className", "onExpand"]);
    let [l, c] = i.useState(!1),
        u = (e) => {
            c(e), null == a || a(e);
        };
    return (0, r.jsx)(h.zF9, {
        className: ed.collapseable,
        collapsibleContent: (0, r.jsx)("div", {
            className: ed.groupCollapsedContainer,
            children: t,
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                eP,
                eg(eh({}, s), {
                    onClick: (e) => {
                        u(!l), null == t || t(e);
                    },
                    className: o()(ed.mainCollapseableContainer, n),
                    action: (0, r.jsxs)("div", {
                        className: ed.groupCollapsedAction,
                        children: [
                            s.action,
                            l
                                ? (0, r.jsx)(h.CJ0, {
                                      size: "custom",
                                      width: eO,
                                      height: eO,
                                      color: "var(--interactive-active)",
                                  })
                                : (0, r.jsx)(h.Fbu, {
                                      size: "custom",
                                      width: eO,
                                      height: eO,
                                      color: "var(--interactive-active)",
                                  }),
                        ],
                    }),
                }),
            );
        },
    });
}
let eD = new Set([
        x.mM.INITIALIZING,
        x.mM.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        x.mM.WAITING_FOR_MODULE_TRACKING,
        x.mM.WAITING_FOR_OVERLAY_OPEN,
    ]),
    ex = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eL(e) {
    var t, n, a;
    let { runningGame: o, runningGameApplication: s } = e,
        c = null == o ? void 0 : o.pid,
        u = (0, _.e7)(
            [M.default],
            () => (null == o || null == c ? null : M.default.getTrackedGameByPid(c)),
            [o, c],
            l(),
        ),
        { enabledLegacy: d, enabledOOP: f } = (0, _.cj)([z.Z, X.Z], () => {
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
            return (0, A.b6)(o, !1, [z.Z, X.Z]);
        }, [o, u]),
        p = (0, _.e7)([A.ZP, z.Z, X.Z], () => (null == o ? null : (0, A.FZ)(o, A.ZP, z.Z, X.Z)), [o], l()),
        [g, E] = i.useState(f),
        [y, I] = i.useState(d),
        [T, S] = i.useState(!1);
    i.useEffect(() => {
        E(f), I(d);
    }, [f, d]);
    let C = !(0, ea.supportsLegacy)(),
        N = !(0, ea.supportsOutOfProcess)(),
        { legacyEnabled: D, oopEnabled: L } = (0, _.cj)([M.default], () => M.default.getGlobalEnabledStatus()),
        j = (e, t, n) => {
            var r, i, a;
            if ((ex(n), null == o)) return;
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
            if ((ex(n), null == o)) return;
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
        V = !g && !D && y && !C,
        F = !y && !L && g && !N,
        H = (null == u ? void 0 : u.overlayMethod) === x.gl.Disabled,
        Y = (null == u ? void 0 : u.state) === x.mM.OVERLAY_RENDERING && !H,
        W = (null == u ? void 0 : u.state) != null && eD.has(u.state) && !H,
        K = (null == u ? void 0 : u.overlayMethod) === x.gl.OutOfProcess,
        q = (null == u ? void 0 : u.overlayMethod) === x.gl.OutOfProcessLimitedInteraction,
        Q = (null == u ? void 0 : u.overlayMethod) === x.gl.Hook,
        J =
            (null == u ? void 0 : u.state) === x.mM.OVERLAY_CRASHED ||
            (null == u ? void 0 : u.state) === x.mM.OVERLAY_CRASHED_DISABLED,
        $ = !g && !y,
        [ee, et] = (() => {
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
                        eu.intl.format(eu.t.hFVBIi, {
                            overlayMethod: eu.intl.string(eu.t.a3eXS0),
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
                        eu.intl.format(eu.t.hFVBIi, {
                            overlayMethod: eu.intl.string(eu.t["506AbW"]),
                            overlayMethodHook: t,
                        }),
                        null,
                    ];
                case Y && Q:
                    function n() {
                        var e, t;
                        switch (!0) {
                            case (null == u ? void 0 : u.fullscreenType) !== O.Jx.BORDERLESS_FULLSCREEN:
                                return eu.intl.string(eu.t.mJmbeH);
                            case N:
                                return eu.intl.string(eu.t.C7bLTU);
                            case !(null != (e = null == u ? void 0 : u.oopEnabled) && e):
                                return eu.intl.string(eu.t.WiY24u);
                            case !L:
                                return eu.intl.string(eu.t.cAFVsL);
                            case !(null != (t = null == u ? void 0 : u.supportsOutOfProcess) && t):
                                return eu.intl.string(eu.t.XcGEcn);
                            default:
                                return eu.intl.string(eu.t.bJXH2t);
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
                        eu.intl.format(eu.t.hFVBIi, {
                            overlayMethod: eu.intl.string(eu.t.bvlpDQ),
                            overlayMethodHook: i,
                        }),
                        n(),
                    ];
                case J:
                    return [eu.intl.string(eu.t.OFC2a2), null];
                case G:
                    return [eu.intl.string(eu.t.m7X4a2), null];
                case Z:
                    return [eu.intl.string(eu.t["9DUS5u"]), null];
                case $:
                    return [eu.intl.string(eu.t.nQ9EdH), null];
                case V:
                case F:
                    return [eu.intl.string(eu.t.VWUn0d), null];
                case W:
                    if (K) return [eu.intl.string(eu.t["s8+CFh"]), null];
                    if (Q) return [eu.intl.string(eu.t.JEEdqq), null];
                    if (q) return [eu.intl.string(eu.t.pzBMwc), null];
                    return [eu.intl.string(eu.t["2Xhy9v"]), null];
                case null == u:
                    return [eu.intl.string(eu.t.vwHPRk), null];
                default:
                    return [eu.intl.string(eu.t.ONovPz), null];
            }
        })();
    (0, v.ZP)(() => {
        m.Z.getDetectableGames();
    });
    let [en, er] = i.useMemo(
        () =>
            W
                ? ["text-muted", h.TVs.colors.TEXT_MUTED.css]
                : Y && q
                  ? ["text-feedback-warning", h.TVs.colors.TEXT_FEEDBACK_WARNING.css]
                  : Y && K
                    ? ["text-feedback-positive", h.TVs.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : Y && Q
                      ? ["text-primary", h.TVs.colors.TEXT_PRIMARY.css]
                      : ["interactive-normal", h.TVs.colors.INTERACTIVE_NORMAL.css],
        [W, Y, q, K, Q],
    );
    return null == o
        ? null
        : (0, r.jsxs)(ew, {
              onExpand: S,
              className: T ? ed.expandedContainer : void 0,
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
                                text: eu.intl.string(eu.t["4PJP5u"]),
                                children: (e) =>
                                    (0, r.jsx)(
                                        P.Z,
                                        eg(
                                            eh(
                                                {
                                                    size: ev,
                                                    color: h.TVs.colors.BG_BRAND.css,
                                                },
                                                e,
                                            ),
                                            {
                                                children: (0, r.jsx)(h.kmB, {
                                                    size: "custom",
                                                    width: ev,
                                                    height: ev,
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
              hint: null != et ? et : void 0,
              header: (0, r.jsxs)(r.Fragment, {
                  children: [
                      Y || W
                          ? (0, r.jsx)(h.pzj, {
                                size: "xxs",
                                color: er,
                            })
                          : (0, r.jsx)("div", { className: ed.playingDot }),
                      (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: en,
                          children: eu.intl.string(eu.t.CDOx39),
                      }),
                  ],
              }),
              icon: (0, r.jsx)(R.Z, {
                  game: s,
                  pid: null == o ? void 0 : o.pid,
                  size: R.Z.Sizes.MEDIUM,
              }),
              "aria-label": eu.intl.string(eu.t["87O5GB"]),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => ex(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: (g && L) || (y && D),
                      disabled: G,
                      onChange: (e, t) => {
                          U(e, k(e, (g && L) || (y && D)), t);
                      },
                  }),
              }),
              children: [
                  (0, r.jsx)(eP, {
                      title: eu.intl.string(eu.t["7BlVIi"]),
                      description: eu.intl.string(eu.t.ndgADA),
                      hint: L ? void 0 : eu.intl.string(eu.t.cAFVsL),
                      "aria-label": eu.intl.string(eu.t["7BlVIi"]),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: g && L,
                                  disabled: N,
                                  onChange: (e, t) => {
                                      e && !L ? j(e, w.AE.OOP, t) : j(e, w.AE.OOP_GAME, t);
                                  },
                              }),
                              (0, r.jsx)("div", { className: ed.emptySpacer }),
                          ],
                      }),
                  }),
                  (0, r.jsx)(eP, {
                      title: eu.intl.string(eu.t.BfFpW1),
                      description: eu.intl.string(eu.t.OzInYm),
                      hint: D ? void 0 : eu.intl.string(eu.t["3sYHXl"]),
                      "aria-label": eu.intl.string(eu.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.rsf, {
                                  checked: y && D,
                                  disabled: C,
                                  onChange: (e, t) => {
                                      e && !D ? j(e, w.AE.LEGACY, t) : j(e, w.AE.LEGACY_GAME, t);
                                  },
                              }),
                              (0, r.jsx)("div", { className: ed.emptySpacer }),
                          ],
                      }),
                  }),
              ],
          });
}
function ej(e) {
    let { game: t, gameApplication: n } = e,
        a = i.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        o = (0, _.e7)([I.Z], () => (null != n ? n : I.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(R.Z, {
        game: o,
        pid: a,
        size: R.Z.Sizes.SMALL,
    });
}
function eM(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: a,
            getEnabledFromStatus: o,
            onChange: s,
            clientSettingType: l,
            ariaLabel: c,
        } = e,
        u = (0, _.cj)([A.ZP, z.Z, X.Z], () => (0, A.FZ)(t, A.ZP, z.Z, X.Z)),
        d = (0, _.cj)([z.Z, X.Z], () => (0, A.b6)(t, !1, [z.Z, X.Z]), [t]),
        f = o(d),
        [p, m] = i.useState(f);
    i.useEffect(() => {
        m(f);
    }, [f]);
    let g = (e, n) => {
        let r = !e && p;
        if ((ex(n), m(e), s(e, u, d), r)) {
            var i, a;
            (0, B.l)(l, null != (a = null != (i = u.id) ? i : null == t ? void 0 : t.id) ? a : null);
        }
    };
    return (0, r.jsx)(eP, {
        title: t.name,
        icon: (0, r.jsx)(ej, {
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
                (0, r.jsx)("div", { className: ed.emptySpacer }),
            ],
        }),
    });
}
function ek() {
    let [e, t] = i.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, _.cj)([M.default], () => M.default.getGlobalEnabledStatus()),
        o = (0, _.Wu)([A.ZP], () => A.ZP.getGamesSeen(!0)).filter((e) => !(0, H.le)(e)),
        s = (0, T.Z)(o.map((e) => e.id)),
        l = !(0, ea.supportsLegacy)(),
        c = (e, t) => {
            var r, i;
            ex(t), b.Z.setEnabled(e, a);
            let o = null != (i = null == (r = A.ZP.getCurrentGameForAnalytics()) ? void 0 : r.id) ? i : null;
            (0, w.ou)(e, w.AE.LEGACY, o), !e && n && (0, B.l)(w.AE.LEGACY, o);
        },
        u = (e, t, n) => {
            let { enabledOOP: r } = n;
            m.Z.toggleOverlay(t, e, r);
        },
        d = i.useMemo(
            () =>
                (0, ea.supportsLegacy)()
                    ? l
                        ? eu.intl.string(eu.t.r9jEV1)
                        : eu.intl.string(eu.t.OzInYm)
                    : eu.intl.string(eu.t["8Ox6/P"]),
            [l],
        );
    return 0 === o.length
        ? (0, r.jsx)(eP, {
              title: eu.intl.string(eu.t.BfFpW1),
              description: d,
              "aria-label": eu.intl.string(eu.t.BfFpW1),
              className: ed.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: l,
                          onChange: (e, t) => c(e, t),
                      }),
                      el.iP && (0, r.jsx)("div", { className: ed.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ew, {
              onExpand: t,
              className: e ? ed.expandedContainer : void 0,
              title: eu.intl.string(eu.t.BfFpW1),
              description: d,
              "aria-label": eu.intl.string(eu.t.BfFpW1),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => ex(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: l,
                      onChange: (e, t) => c(e, t),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: ed.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eu.intl.string(eu.t.FzoWRk),
                      }),
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: ed.scroller,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              eM,
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
                                  ariaLabel: eu.intl.format(eu.t.hvPYsL, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eU() {
    let [e, t] = i.useState(!1),
        { oopEnabled: n, legacyEnabled: a } = (0, _.cj)([M.default], () => M.default.getGlobalEnabledStatus()),
        o = !(0, ea.supportsOutOfProcess)(),
        s = (0, _.Wu)([A.ZP], () => A.ZP.getGamesSeen(!0)).filter((e) => !(0, H.le)(e)),
        l = (0, T.Z)(s.map((e) => e.id)),
        c = (e, t) => {
            var r, i;
            ex(t);
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
                el.iP ? (o ? eu.intl.string(eu.t.C7bLTU) : eu.intl.string(eu.t.ndgADA)) : eu.intl.string(eu.t.m7X4a2),
            [o],
        );
    return 0 === s.length
        ? (0, r.jsx)(eP, {
              title: eu.intl.string(eu.t["7BlVIi"]),
              description: d,
              "aria-label": eu.intl.string(eu.t["7BlVIi"]),
              className: ed.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(h.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e, t) => c(e, t),
                      }),
                      el.iP && (0, r.jsx)("div", { className: ed.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ew, {
              onExpand: t,
              className: e ? ed.expandedContainer : void 0,
              title: eu.intl.string(eu.t["7BlVIi"]),
              description: d,
              "aria-label": eu.intl.string(eu.t["7BlVIi"]),
              action: (0, r.jsx)(h.P3F, {
                  onClick: (e) => ex(e),
                  children: (0, r.jsx)(h.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e, t) => c(e, t),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: ed.subtitleContainer,
                      children: (0, r.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eu.intl.string(eu.t.FzoWRk),
                      }),
                  }),
                  (0, r.jsx)(h.zJl, {
                      className: ed.scroller,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              eM,
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
                                  ariaLabel: eu.intl.format(eu.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eG() {
    var e;
    let t = (0, _.e7)([J.ZP], () => J.ZP.getOverlayKeybind()),
        n = !(0, ea.supportsLegacy)(),
        i = !(0, ea.supportsOutOfProcess)(),
        [a, o] = (0, _.Wu)([A.ZP], () => [A.ZP.canShowAdminWarning, A.ZP.getVisibleGame()], []),
        s = null != o && o.elevated && a,
        l = !(0, J.I1)(null != (e = null == t ? void 0 : t.shortcut) ? e : []);
    function c(e) {
        u()(null != t, "Keybind should never be undefined"), g.Z.setKeybind(eg(eh({}, t), { shortcut: e }));
    }
    return (0, r.jsx)(eR, {
        children: (0, r.jsx)("div", {
            className: ed.keybindMainContainer,
            children: (0, r.jsxs)("div", {
                className: ed.keybindContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: ed.keybindHeaderContainer,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: eu.intl.string(eu.t.VsAZcH),
                            }),
                            s &&
                                (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: ed.keybindAdminWarning,
                                    children: eu.intl.string(eu.t.NsowVV),
                                }),
                            l &&
                                (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: ed.keybindAdminWarning,
                                    children: eu.intl.string(eu.t.UNoTw8),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: ed.keybindRecorderContainer,
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
let eB = (e, t) =>
    [
        {
            title: eu.t.eVE4LS,
            description: eu.t["72WNqq"],
            disabledSetting: D.OverlayNotificationDisabledSetting.TEXT_CHAT,
        },
        {
            title: eu.t.hqsZJS,
            description: eu.t.kHjdqa,
            disabledSetting: D.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE,
        },
        e && {
            title: eu.t.sop3rq,
            description: eu.t.pjgffX,
            disabledSetting: D.OverlayNotificationDisabledSetting.GAME_ACTIVITY,
        },
        t && {
            title: eu.t["2QVhbW"],
            description: eu.t.wQ4ilJ,
            disabledSetting: D.OverlayNotificationDisabledSetting.NOW_PLAYING,
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function eZ() {
    let { allowActivityWidget: e, allowNowPlaying: t } = (0, L.o4)("user_settings"),
        n = eB(e, t),
        i = (e) => (t) => {
            b.Z.setNotificationDisabledSetting(e, !t);
        },
        a = (0, _.e7)([U.Z], () => U.Z.getDisabledNotifications());
    return (0, r.jsxs)("div", {
        className: ed.notificationSettingsContainer,
        children: [
            (0, r.jsx)(h.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: eu.intl.string(eu.t.xOE5bG),
            }),
            n.map((e) =>
                (0, r.jsxs)(
                    eR,
                    {
                        className: ed.notificationItem,
                        children: [
                            (0, r.jsxs)("div", {
                                className: ed.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-sm/semibold",
                                        color: "header-primary",
                                        children: eu.intl.string(e.title),
                                    }),
                                    (0, r.jsx)(h.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eu.intl.string(e.description),
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
    let t = eF(e.username);
    return (t.user = e), t;
}
function eF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = "456" + Math.floor(1000000 * Math.random());
    return {
        voiceState: new K.Z({
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
        user: new W.Z({
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
function eH() {
    return (0, Y.kt)({
        id: "123",
        name: "Test Channel",
        type: eo.d4z.GUILD_VOICE,
        guild_id: "456",
    });
}
function eY() {
    var e, t;
    let {
            avatarSizeMode: n,
            displayNameMode: a,
            displayUserMode: s,
        } = (0, _.cj)([ee.default], () => ({
            avatarSizeMode: ee.default.getAvatarSizeMode(),
            displayNameMode: ee.default.getDisplayNameMode(),
            displayUserMode: ee.default.getDisplayUserMode(),
        })),
        l = (0, _.e7)([Q.default], () => Q.default.getCurrentUser()),
        [c] = i.useState(() => [
            eF(eu.intl.string(eu.t.C0ZDvr), !0, !1),
            eF(eu.intl.string(eu.t.iOtj8P), !1, !1, !0),
            eF(eu.intl.string(eu.t["0oqNgI"]), !1, !0),
        ]),
        u = (0, _.e7)([G.ZP, q.Z], () => {
            let e = G.ZP.getWidgetByType(eo.Odu.VOICE_V3);
            if (null == e) return null;
            let t = q.Z.getWidget(e.id);
            return null != t && (0, Z.Aw)(t) ? t : null;
        }),
        d = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : ec.At,
        f = [null != l ? eV(l) : null, ...c].filter(en.lm),
        p = [new Map(f.map((e) => [e.user.id, e])), f.map((e) => e.user.id)];
    function m(e) {
        null != u &&
            (e < eI
                ? (0, E.zG)(u.id, { voiceStatesMaxShown: ec.Og })
                : (0, E.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    let g = eo.BRd.MIDNIGHT;
    return (0, r.jsxs)("div", {
        className: ed.voiceSettingsContainer,
        children: [
            (0, r.jsx)(eR, {
                title: eu.intl.string(eu.t.dnvZSk),
                children: (0, r.jsx)(h.q4e, {
                    options: [
                        {
                            label: eu.intl.string(eu.t.YcOxtr),
                            value: eo.ipw.LARGE,
                        },
                        {
                            label: eu.intl.string(eu.t.BKIKq6),
                            value: eo.ipw.SMALL,
                        },
                    ],
                    className: ed.select,
                    onChange: (e) => b.Z.setAvatarSizeMode(e),
                    value: n,
                }),
            }),
            (0, r.jsx)(eR, {
                title: eu.intl.string(eu.t.J0dpcH),
                children: (0, r.jsx)(h.q4e, {
                    options: [
                        {
                            label: eu.intl.string(eu.t.nBmDra),
                            value: eo.wC$.ALWAYS,
                        },
                        {
                            label: eu.intl.string(eu.t["2OvIZW"]),
                            value: eo.wC$.ONLY_WHILE_SPEAKING,
                        },
                        {
                            label: eu.intl.string(eu.t.ekjlPD),
                            value: eo.wC$.NEVER,
                        },
                    ],
                    className: ed.select,
                    onChange: (e) => b.Z.setDisplayNameMode(e),
                    value: a,
                }),
            }),
            (0, r.jsx)(h.f6W, {
                theme: g,
                children: (e) => {
                    var t, i;
                    return (0, r.jsxs)("div", {
                        className: o()(ed.widgetContainer, e),
                        children: [
                            (0, r.jsx)("div", {
                                className: ed.voiceWidgetContainer,
                                children: (0, r.jsx)(V.kI, {
                                    id: "voice-widget",
                                    title: eu.intl.string(eu.t.KNJ6Vl),
                                    channel: eH(),
                                    overlayVoiceStates: p,
                                    displayNameMode: a,
                                    displayUserMode: s,
                                    avatarSizeMode: n,
                                    widget: eo.Odu.VOICE,
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
                                className: ed.widgetHeaderContainer,
                                children: [
                                    (0, r.jsx)(F.PI, { children: eu.intl.string(eu.t.KNJ6Vl) }),
                                    (0, r.jsx)(F.ls, {}),
                                    (0, r.jsx)(F.RT, {
                                        id: null != (t = null == u ? void 0 : u.id) ? t : "voice-widget",
                                        pinned: null != (i = null == u ? void 0 : u.pinned) && i,
                                    }),
                                ],
                            }),
                        ],
                    });
                },
            }),
            (0, r.jsx)(eR, {
                title: eu.intl.string(eu.t.swsWWF),
                children: (0, r.jsx)(h.q4e, {
                    options: [
                        {
                            label: eu.intl.string(eu.t.nBmDra),
                            value: eo.OYC.ALWAYS,
                        },
                        {
                            label: eu.intl.string(eu.t["2OvIZW"]),
                            value: eo.OYC.ONLY_WHILE_SPEAKING,
                        },
                    ],
                    className: ed.select,
                    onChange: (e) => b.Z.setDisplayUserMode(e),
                    value: s,
                }),
            }),
            (0, r.jsx)(eR, {
                title: eu.intl.string(eu.t["X/Uyzc"]),
                titleId: eT,
                children: (0, r.jsx)("div", {
                    className: ed.sliderContainer,
                    children: (0, r.jsx)(h.iRW, {
                        initialValue: d,
                        onValueRender: (e) => (e < eI ? eu.intl.string(eu.t.nrUzFB) : "".concat(Math.floor(e))),
                        minValue: eI - 1,
                        maxValue: eS,
                        onValueChange: m,
                        markers: eA,
                        barStyles: { background: h.TVs.colors.BACKGROUND_MOD_STRONG.css },
                        fillStyles: { background: h.TVs.colors.BG_BRAND.css },
                        "aria-labelledby": eT,
                        onMarkerRender: (e) => (e < eI ? eu.intl.string(eu.t.nrUzFB) : "".concat(Math.floor(e))),
                    }),
                }),
            }),
        ],
    });
}
function eW() {
    let [e, t] = (0, S.US)([p.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(es.L.DISMISS);
        };
    return ((0, v.ZP)(() => () => {
        t(es.L.AUTO_DISMISS);
    }),
    e !== p.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)("div", {
              className: ed.overlaySettingsNux,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: ef.Z,
                          alt: eu.intl.string(eu.t.mdXZh4),
                          className: ed.nuxFirstImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: ed.mainTitleContainer,
                          children: [
                              (0, r.jsx)(h.X6q, {
                                  variant: "heading-xl/medium",
                                  color: "header-primary",
                                  children: eu.intl.string(eu.t.jzjJQk),
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: eu.intl.string(eu.t["5dOfxc"]),
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: e_.Z,
                          alt: eu.intl.string(eu.t.mdXZh4),
                          className: ed.nuxUserSettingsImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: ed.closeCircleButton,
                      children: (0, r.jsx)(h.zxk, {
                          variant: "primary",
                          text: eu.intl.string(eu.t.Q26diI),
                          onClick: () => n(),
                      }),
                  }),
                  (0, r.jsx)("div", { className: ed.nuxDivider }),
              ],
          });
}
function eK(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        a = null == n ? void 0 : n.id,
        o = (0, _.e7)([U.Z], () => U.Z.isLimitedInteractionOverrideEnabled(a), [a]),
        s = i.useMemo(() => null != t && (0, k.H8)(t.pid), [t]),
        l = (0, j.Z)({ location: "overlay_user_settings" }),
        { disableClickableRegions: c, shouldShowKeybindIndicators: u } = (0, _.cj)([ee.default], () => ({
            disableClickableRegions: ee.default.disableClickableRegions,
            shouldShowKeybindIndicators: ee.default.showKeybindIndicators,
        }));
    function d() {
        b.Z.setDisableClickableRegions(!c);
    }
    function f(e) {
        null != n && b.Z.setLimitedInteractionOverride(n.id, e);
    }
    return (0, r.jsxs)("div", {
        className: ed.overlayEnabledSettingsContainer,
        children: [
            (0, r.jsx)(eG, {}),
            l &&
                (0, r.jsx)(eR, {
                    children: (0, r.jsx)(h.j7V, {
                        value: u,
                        onChange: (e) => b.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: eu.intl.string(eu.t.XZTl9v),
                    }),
                }),
            null != a &&
                (0, r.jsxs)(eR, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: ed.limitedInteractionOverrideContainer,
                            children: [
                                (0, r.jsx)(h.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: eu.intl.string(eu.t.wgVQND),
                                }),
                                (0, r.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: eu.intl.string(eu.t["5SsyFx"]),
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
            (0, r.jsxs)(eR, {
                children: [
                    (0, r.jsxs)("div", {
                        className: ed.limitedInteractionOverrideContainer,
                        children: [
                            (0, r.jsx)(h.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: eu.intl.string(eu.t["+eFXxs"]),
                            }),
                            (0, r.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eu.intl.string(eu.t.kivMAg),
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
function ez(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: i, runningGameApplication: a } = (0, C.Z)(),
        o = (0, L.o4)("user_settings").overlayV3UI,
        s = (0, _.e7)([Q.default], () => Q.default.getCurrentUser());
    return ((0, v.ZP)(() => {
        if (er.isPlatformEmbedded) return (0, N.Ky)(), N.P7;
    }),
    eC(),
    null == s)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(h.hjN, {
                      tag: h.RB0.H1,
                      title: eu.intl.string(eu.t["9cb1U1"]),
                      children: [
                          o ? (0, r.jsx)(eW, {}) : null,
                          (0, r.jsxs)("div", {
                              className: ed.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eL, {
                                      runningGame: i,
                                      runningGameApplication: a,
                                  }),
                                  (0, r.jsx)(eU, {}),
                                  (0, r.jsx)(ek, {}),
                              ],
                          }),
                          (0, r.jsx)("div", { className: ed.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(h.hjN, {
                      children: [
                          (0, r.jsx)(eK, {
                              runningGame: i,
                              runningGameApplication: a,
                          }),
                          (0, r.jsx)("div", { className: ed.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(h.hjN, {
                      title: eu.intl.string(eu.t.r1TZfn),
                      children: [(0, r.jsx)(eY, {}), (0, r.jsx)("div", { className: ed.settingsDivider })],
                  }),
                  (0, r.jsx)(h.hjN, { children: (0, r.jsx)(eZ, {}) }),
              ],
          });
}
