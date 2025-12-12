n.d(t, { Z: () => e1 }), n(953529), n(388685);
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
    h = n(28664),
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
    R = n(137920),
    w = n(320724),
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
    et = n(77498),
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
    ep = n(273313),
    e_ = n(981631),
    em = n(921944),
    eh = n(987650),
    eg = n(501787),
    eE = n(388032),
    eb = n(677677),
    ey = n(704437),
    eO = n(494139);
function ev(e, t, n) {
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
function eS(e) {
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
                ev(e, t, n[t]);
            });
    }
    return e;
}
function eI(e, t) {
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
function eT(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eI(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eC(e, t) {
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
let eN = ej(null),
    eP = 20,
    eR = 16,
    ew = 1,
    eD = 25,
    ex = [0, 5, 10, 15, 20, 25];
function eL() {
    let e = ej(eN);
    f().isEqual(e, eN) || (el.default.track(e_.rMx.OVERLAY_SETTINGS_UPDATED, e), (eN = e));
}
function ej(e) {
    var t;
    let n = es.default.getNotificationPositionMode(),
        r = n !== e_._vf.DISABLED,
        i = ea.ZP.getOverlayKeybind(),
        a = ea.ZP.getOverlayChatKeybind();
    return {
        enabled: eo.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: F.Z.isNotificationDisabled(eh.n0.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ed.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, ed.BB)(a.shortcut) : null,
        text_opacity_slider: es.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : eo.default.enabled,
    };
}
function eM(e) {
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
        className: o()(eb.groupContainer, f),
        children: [
            (0, r.jsxs)(g.kL8, {
                "aria-label": d,
                onClick: u,
                children: [
                    null != t &&
                        (0, r.jsx)("div", {
                            className: eb.groupHeader,
                            children: t,
                        }),
                    (0, r.jsxs)("div", {
                        className: eb.groupContent,
                        children: [
                            null != n &&
                                (0, r.jsx)("div", {
                                    className: eb.groupIcon,
                                    children: n,
                                }),
                            (0, r.jsxs)("div", {
                                className: eb.groupMainContent,
                                children: [
                                    (0, r.jsx)(g.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: eb.groupTitle,
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
                                className: eb.groupAction,
                                children: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: eb.groupWarning,
                children: c,
            }),
        ],
    });
}
function ek(e) {
    var { children: t, className: n, onExpand: a } = e,
        s = eC(e, ["children", "className", "onExpand"]);
    let [l, c] = i.useState(!1),
        u = (e) => {
            c(e), null == a || a(e);
        };
    return (0, r.jsx)(g.zF9, {
        className: eb.collapseable,
        collapsibleContent: (0, r.jsx)("div", {
            className: eb.groupCollapsedContainer,
            children: t,
        }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(
                eM,
                eT(eS({}, s), {
                    onClick: (e) => {
                        u(!l), null == t || t(e);
                    },
                    className: o()(eb.mainCollapseableContainer, n),
                    action: (0, r.jsxs)("div", {
                        className: eb.groupCollapsedAction,
                        children: [
                            s.action,
                            l
                                ? (0, r.jsx)(g.CJ0, {
                                      size: "custom",
                                      width: eP,
                                      height: eP,
                                      color: "var(--interactive-text-active)",
                                  })
                                : (0, r.jsx)(g.Fbu, {
                                      size: "custom",
                                      width: eP,
                                      height: eP,
                                      color: "var(--interactive-text-active)",
                                  }),
                        ],
                    }),
                }),
            );
        },
    });
}
let eU = new Set([
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
    eG = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eZ(e) {
    var t, n, a;
    let { runningGame: o, runningGameApplication: s } = e,
        c = null == o ? void 0 : o.pid,
        u = (0, p.e7)(
            [G.default],
            () => (null == o || null == c ? null : G.default.getTrackedGameByPid(c)),
            [o, c],
            l(),
        ),
        { enabledLegacy: d, enabledOOP: f } = (0, p.cj)([et.Z, er.Z], () => {
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
            return (0, P.b6)(o, !1, [et.Z, er.Z]);
        }, [o, u]),
        _ = (0, p.e7)([P.ZP, et.Z, er.Z], () => (null == o ? null : (0, P.FZ)(o, P.ZP, et.Z, er.Z)), [o], l()),
        [m, b] = i.useState(f),
        [y, v] = i.useState(d),
        [T, C] = i.useState(!1);
    i.useEffect(() => {
        b(f), v(d);
    }, [f, d]);
    let A = !(0, ef.supportsLegacy)(),
        N = !(0, ef.supportsOutOfProcess)(),
        { legacyEnabled: R, oopEnabled: w } = (0, p.cj)([G.default], () => G.default.getGlobalEnabledStatus()),
        j = (e, t) => {
            var n, r, i;
            if (null == o) return;
            let a = !1,
                s = !1;
            switch (t) {
                case L.OverlayToggledClientSettingType.LEGACY_GAME:
                    v(e), E.Z.toggleOverlay(o, e, m), (a = !e && y);
                    break;
                case L.OverlayToggledClientSettingType.OOP_GAME:
                    b(e), E.Z.toggleOverlay(o, y, e), (s = !e && m);
                    break;
                case L.OverlayToggledClientSettingType.LEGACY:
                    O.Z.setEnabled(e, w),
                        (0, L.ou)(e, L.OverlayToggledClientSettingType.LEGACY, null != (n = o.id) ? n : null);
                    break;
                case L.OverlayToggledClientSettingType.OOP:
                    O.Z.setEnabled(R, e),
                        (0, L.ou)(e, L.OverlayToggledClientSettingType.OOP, null != (r = o.id) ? r : null);
            }
            (a || s) &&
                (0, V.l)(
                    a ? L.OverlayToggledClientSettingType.LEGACY_GAME : L.OverlayToggledClientSettingType.OOP_GAME,
                    null != (i = o.id) ? i : null,
                );
        },
        k = (e, t) => {
            let n = !t && e,
                r = !w && m,
                i = !R && y,
                a = !m && w,
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
                    E.Z.toggleOverlay(o, e, e), v(e), b(e), (n = !e && y), (r = !e && m);
                    break;
                case "global":
                    O.Z.setEnabled(e, e), (n = !e && R), (r = !e && w);
                    break;
                case "both":
                    O.Z.setEnabled(e, e),
                        E.Z.toggleOverlay(o, e, e),
                        v(e),
                        b(e),
                        (n = (!e && R) || (!e && y)),
                        (r = (!e && w) || (!e && m));
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
                var a;
                (0, V.l)(i, null != (a = o.id) ? a : null);
            }
        },
        Z = A && N,
        F = !R && !w,
        B = !m && !R && y && !A,
        H = !y && !w && m && !N,
        Y = (null == u ? void 0 : u.overlayMethod) === M.gl.Disabled,
        W = (null == u ? void 0 : u.state) === M.mM.OVERLAY_RENDERING && !Y,
        K = (null == u ? void 0 : u.state) != null && eU.has(u.state) && !Y,
        z = (null == u ? void 0 : u.overlayMethod) === M.gl.OutOfProcess,
        q = (null == u ? void 0 : u.overlayMethod) === M.gl.OutOfProcessLimitedInteraction,
        Q = (null == u ? void 0 : u.overlayMethod) === M.gl.Hook,
        J =
            (null == u ? void 0 : u.state) === M.mM.OVERLAY_CRASHED ||
            (null == u ? void 0 : u.state) === M.mM.OVERLAY_CRASHED_DISABLED,
        $ = !m && !y,
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
                        eE.intl.format(eE.t.hFVBIg, {
                            overlayMethod: eE.intl.string(eE.t.a3eXSw),
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
                        eE.intl.format(eE.t.hFVBIg, {
                            overlayMethod: eE.intl.string(eE.t["506Aba"]),
                            overlayMethodHook: t,
                        }),
                        null,
                    ];
                case W && Q:
                    function n() {
                        var e, t;
                        switch (!0) {
                            case (null == u ? void 0 : u.fullscreenType) !== S.Jx.BORDERLESS_FULLSCREEN:
                                return eE.intl.string(eE.t.mJmbeC);
                            case N:
                                return eE.intl.string(eE.t.C7bLTQ);
                            case !(null != (e = null == u ? void 0 : u.oopEnabled) && e):
                                return eE.intl.string(eE.t.WiY24u);
                            case !w:
                                return eE.intl.string(eE.t.cAFVsL);
                            case !(null != (t = null == u ? void 0 : u.supportsOutOfProcess) && t):
                                return eE.intl.string(eE.t.XcGEcs);
                            default:
                                return eE.intl.string(eE.t.bJXH2v);
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
                        eE.intl.format(eE.t.hFVBIg, {
                            overlayMethod: eE.intl.string(eE.t.bvlpDR),
                            overlayMethodHook: i,
                        }),
                        n(),
                    ];
                case J:
                    return [eE.intl.string(eE.t.OFC2aw), null];
                case Z:
                    return [eE.intl.string(eE.t.m7X4az), null];
                case F:
                    return [eE.intl.string(eE.t["9DUS5l"]), null];
                case $:
                    return [eE.intl.string(eE.t.nQ9EdJ), null];
                case B:
                case H:
                    return [eE.intl.string(eE.t.VWUn0a), null];
                case K:
                    if (z) return [eE.intl.string(eE.t["s8+CFq"]), null];
                    if (Q) return [eE.intl.string(eE.t.JEEdqt), null];
                    if (q) return [eE.intl.string(eE.t.pzBMwY), null];
                    return [eE.intl.string(eE.t["2Xhy9k"]), null];
                case null == u:
                    return [eE.intl.string(eE.t.vwHPRi), null];
                case Y: {
                    let e =
                        (null == u ? void 0 : u.fullscreenType) === S.Jx.FULLSCREEN
                            ? eE.intl.string(eE.t.mJmbeC)
                            : null;
                    return [eE.intl.string(eE.t.VPW4XY), e];
                }
                default:
                    return [eE.intl.string(eE.t.ONovP5), null];
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
    return null == o
        ? null
        : (0, r.jsxs)(ek, {
              onExpand: C,
              className: T ? eb.expandedContainer : void 0,
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
                          ? (0, r.jsx)(h.u, {
                                text: eE.intl.string(eE.t["4PJP5p"]),
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
                          : (0, r.jsx)("div", { className: eb.playingDot }),
                      (0, r.jsx)(g.Text, {
                          variant: "text-xs/semibold",
                          color: ei,
                          children: eE.intl.string(eE.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, r.jsx)(D.Z, {
                  game: s,
                  pid: null == o ? void 0 : o.pid,
                  size: D.A.MEDIUM,
              }),
              "aria-label": eE.intl.string(eE.t["87O5GC"]),
              action: (0, r.jsx)(g.P3F, {
                  onClick: (e) => eG(e),
                  children: (0, r.jsx)(g.rsf, {
                      checked: (m && w) || (y && R),
                      disabled: Z,
                      onChange: (e) => {
                          U(e, k(e, (m && w) || (y && R)));
                      },
                  }),
              }),
              warning: (0, r.jsx)(X.Z, {
                  className: eb.systemServiceWarning,
                  game: o,
              }),
              children: [
                  (0, r.jsx)(eM, {
                      title: eE.intl.string(eE.t["7BlVIs"]),
                      description: eE.intl.string(eE.t.ndgADE),
                      hint: w ? void 0 : eE.intl.string(eE.t.cAFVsL),
                      "aria-label": eE.intl.string(eE.t["7BlVIs"]),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.rsf, {
                                  checked: m && w,
                                  disabled: N,
                                  onChange: (e) => {
                                      e && !w
                                          ? j(e, L.OverlayToggledClientSettingType.OOP)
                                          : j(e, L.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: eb.emptySpacer }),
                          ],
                      }),
                  }),
                  (0, r.jsx)(eM, {
                      title: eE.intl.string(eE.t.BfFpW1),
                      description: eE.intl.string(eE.t.OzInYk),
                      hint: R ? void 0 : eE.intl.string(eE.t["3sYHXm"]),
                      "aria-label": eE.intl.string(eE.t.BfFpW1),
                      action: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.rsf, {
                                  checked: y && R,
                                  disabled: A,
                                  onChange: (e) => {
                                      e && !R
                                          ? j(e, L.OverlayToggledClientSettingType.LEGACY)
                                          : j(e, L.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, r.jsx)("div", { className: eb.emptySpacer }),
                          ],
                      }),
                  }),
              ],
          });
}
function eF(e) {
    let { game: t, gameApplication: n } = e,
        a = i.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        o = (0, p.e7)([C.Z], () => (null != n ? n : C.Z.getApplication(null == t ? void 0 : t.id)), [n, t]);
    return (0, r.jsx)(D.Z, {
        game: o,
        pid: a,
        size: D.A.SMALL,
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
        u = (0, p.cj)([P.ZP, et.Z, er.Z], () => (0, P.FZ)(t, P.ZP, et.Z, er.Z)),
        d = (0, p.cj)([et.Z, er.Z], () => (0, P.b6)(t, !1, [et.Z, er.Z]), [t]),
        f = o(d),
        [_, m] = i.useState(f);
    i.useEffect(() => {
        m(f);
    }, [f]);
    let h = (e) => {
        let n = !e && _;
        if ((m(e), s(e, u, d), n)) {
            var r, i;
            (0, V.l)(l, null != (i = null != (r = u.id) ? r : null == t ? void 0 : t.id) ? i : null);
        }
    };
    return (0, r.jsx)(eM, {
        title: t.name,
        icon: (0, r.jsx)(eF, {
            game: u,
            gameApplication: n,
        }),
        "aria-label": c,
        action: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(g.rsf, {
                    checked: _,
                    disabled: a,
                    onChange: (e) => h(e),
                }),
                (0, r.jsx)("div", { className: eb.emptySpacer }),
            ],
        }),
    });
}
function eV() {
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
                        ? eE.intl.string(eE.t.r9jEVw)
                        : eE.intl.string(eE.t.OzInYk)
                    : eE.intl.string(eE.t["8Ox6/E"]),
            [l],
        );
    return 0 === o.length
        ? (0, r.jsx)(eM, {
              title: eE.intl.string(eE.t.BfFpW1),
              description: d,
              "aria-label": eE.intl.string(eE.t.BfFpW1),
              className: eb.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(g.rsf, {
                          checked: n,
                          disabled: l,
                          onChange: (e) => c(e),
                      }),
                      eh.iP && (0, r.jsx)("div", { className: eb.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ek, {
              onExpand: t,
              className: e ? eb.expandedContainer : void 0,
              title: eE.intl.string(eE.t.BfFpW1),
              description: d,
              "aria-label": eE.intl.string(eE.t.BfFpW1),
              action: (0, r.jsx)(g.P3F, {
                  onClick: (e) => eG(e),
                  children: (0, r.jsx)(g.rsf, {
                      checked: n,
                      disabled: l,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: eb.subtitleContainer,
                      children: (0, r.jsx)(g.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eE.intl.string(eE.t.FzoWRo),
                      }),
                  }),
                  (0, r.jsx)(g.zJl, {
                      className: eb.scroller,
                      children: o.map((e, t) =>
                          (0, r.jsx)(
                              eB,
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
                                  ariaLabel: eE.intl.format(eE.t.hvPYsF, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eH() {
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
                eh.iP ? (o ? eE.intl.string(eE.t.C7bLTQ) : eE.intl.string(eE.t.ndgADE)) : eE.intl.string(eE.t.m7X4az),
            [o],
        );
    return 0 === s.length
        ? (0, r.jsx)(eM, {
              title: eE.intl.string(eE.t["7BlVIs"]),
              description: d,
              "aria-label": eE.intl.string(eE.t["7BlVIs"]),
              className: eb.standaloneContainer,
              action: (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(g.rsf, {
                          checked: n,
                          disabled: o,
                          onChange: (e) => c(e),
                      }),
                      eh.iP && (0, r.jsx)("div", { className: eb.emptySpacer }),
                  ],
              }),
          })
        : (0, r.jsxs)(ek, {
              onExpand: t,
              className: e ? eb.expandedContainer : void 0,
              title: eE.intl.string(eE.t["7BlVIs"]),
              description: d,
              "aria-label": eE.intl.string(eE.t["7BlVIs"]),
              action: (0, r.jsx)(g.P3F, {
                  onClick: (e) => eG(e),
                  children: (0, r.jsx)(g.rsf, {
                      checked: n,
                      disabled: o,
                      onChange: (e) => c(e),
                  }),
              }),
              children: [
                  (0, r.jsx)("div", {
                      className: eb.subtitleContainer,
                      children: (0, r.jsx)(g.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eE.intl.string(eE.t.FzoWRo),
                      }),
                  }),
                  (0, r.jsx)(g.zJl, {
                      className: eb.scroller,
                      children: s.map((e, t) =>
                          (0, r.jsx)(
                              eB,
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
                                  ariaLabel: eE.intl.format(eE.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eY() {
    return (0, k.T_)(T.Z.USER_SETTINGS)
        ? (0, r.jsx)(eM, {
              title: eE.intl.string(eE.t["z4/l+V"]),
              description: eE.intl.string(eE.t["3aZq/0"]),
              action: (0, r.jsx)(g.Button, {
                  variant: "primary",
                  text: eE.intl.string(eE.t.s2nVhG),
                  onClick: () => {
                      (0, Y.N)(T.Z.USER_SETTINGS, e_.IlC.APP);
                  },
              }),
              "aria-label": eE.intl.string(eE.t["z4/l+V"]),
          })
        : null;
}
function eW() {
    var e;
    let t = (0, p.e7)([ea.ZP], () => ea.ZP.getOverlayKeybind()),
        n = !(0, ef.supportsLegacy)(),
        i = !(0, ef.supportsOutOfProcess)(),
        [a, o] = (0, p.Wu)([P.ZP], () => [P.ZP.canShowAdminWarning, P.ZP.getVisibleGame()], []),
        s = (0, Q.hi)(),
        l = null != o && o.elevated && a && !s,
        c = !(0, ea.I1)(null != (e = null == t ? void 0 : t.shortcut) ? e : []);
    function d(e) {
        u()(null != t, "Keybind should never be undefined"), b.Z.setKeybind(eT(eS({}, t), { shortcut: e }));
    }
    return (0, r.jsx)("div", {
        className: eb.keybindMainContainer,
        children: (0, r.jsxs)("div", {
            className: eb.keybindContainer,
            children: [
                (0, r.jsxs)("div", {
                    className: eb.keybindHeaderContainer,
                    children: [
                        (0, r.jsx)(g.Text, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            children: eE.intl.string(eE.t.VsAZcC),
                        }),
                        l &&
                            (0, r.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eb.keybindAdminWarning,
                                children: eE.intl.string(eE.t.NsowVa),
                            }),
                        c &&
                            (0, r.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eb.keybindAdminWarning,
                                children: eE.intl.string(eE.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: eb.keybindRecorderContainer,
                    children: (0, r.jsx)(v.Z, {
                        disabled: n && i,
                        defaultValue: null != t ? t.shortcut : [],
                        onChange: d,
                    }),
                }),
            ],
        }),
    });
}
let eK = (e) =>
    [
        {
            title: eE.t.eVE4LX,
            description: eE.t["72WNqk"],
            disabledSetting: j.i.TEXT_CHAT,
        },
        {
            title: eE.t.oifnSh,
            description: eE.t.bgU5r0,
            disabledSetting: j.i.WELCOME_GENERAL,
        },
        {
            title: eE.t.hqsZJW,
            description: eE.t.kHjdqc,
            disabledSetting: j.i.GO_LIVE_NUDGE,
        },
        {
            title: eE.t.sop3rn,
            description: eE.t.pjgffc,
            disabledSetting: j.i.GAME_ACTIVITY,
        },
        {
            title: eE.t["2QVhbb"],
            description: eE.t.wQ4ilB,
            disabledSetting: j.i.NOW_PLAYING,
        },
        e && {
            title: eE.t["5/21FT"],
            description: eE.t.EIzwfA,
            disabledSetting: j.i.FRIEND_STREAM_WATCH_NUDGE,
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
function ez() {
    let { enabled: e } = (0, k.aq)("OverlayV3StreamWatchNudge"),
        t = eK(e),
        n = (e) => (t) => {
            O.Z.setNotificationDisabledSetting(e, !t);
        },
        i = (0, p.e7)([F.Z], () => F.Z.getDisabledNotifications());
    return (0, r.jsxs)("div", {
        className: eb.notificationSettingsContainer,
        children: [
            (0, r.jsx)(g.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: eE.intl.string(eE.t.xOE5bA),
            }),
            t.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: eb.notificationItem,
                        children: [
                            (0, r.jsxs)("div", {
                                className: eb.notificationDescriptionContainer,
                                children: [
                                    (0, r.jsx)(g.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: eE.intl.string(e.title),
                                    }),
                                    (0, r.jsx)(g.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eE.intl.string(e.description),
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
function eq(e) {
    let t = eQ(e.username);
    return (t.user = e), t;
}
function eQ(e) {
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
function eX() {
    return (0, J.createChannelRecord)({
        id: "123",
        name: "Test Channel",
        type: e_.d4z.GUILD_VOICE,
        guild_id: "456",
    });
}
function eJ() {
    var e, t;
    let {
            avatarSizeMode: n,
            displayNameMode: a,
            displayUserMode: s,
        } = (0, p.cj)([es.default], () => ({
            avatarSizeMode: es.default.getAvatarSizeMode(),
            displayNameMode: es.default.getDisplayNameMode(),
            displayUserMode: es.default.getDisplayUserMode(),
        })),
        l = (0, p.e7)([ei.default], () => ei.default.getCurrentUser()),
        [c] = i.useState(() => [
            eQ(eE.intl.string(eE.t.C0ZDvo), !0, !1),
            eQ(eE.intl.string(eE.t.iOtj8E), !1, !1, !0),
            eQ(eE.intl.string(eE.t["0oqNgL"]), !1, !0),
        ]),
        u = (0, p.e7)([B.Z, en.Z], () => {
            let e = B.Z.getWidgetByType(e_.Odu.VOICE_V3);
            if (null == e) return null;
            let t = en.Z.getWidget(e.id);
            return null != t && (0, W.Aw)(t) ? t : null;
        }),
        d = null != (t = null == u || null == (e = u.meta) ? void 0 : e.voiceStatesMaxShown) ? t : eg.At,
        f = [null != l ? eq(l) : null, ...c].filter(ec.lm),
        _ = [new Map(f.map((e) => [e.user.id, e])), f.map((e) => e.user.id)];
    function h(e) {
        null != u &&
            (e < ew
                ? (0, y.zG)(u.id, { voiceStatesMaxShown: eg.Og })
                : (0, y.zG)(u.id, { voiceStatesMaxShown: Math.floor(e) }));
    }
    let E = e_.BRd.MIDNIGHT;
    return (0, r.jsxs)("div", {
        className: eb.voiceSettingsContainer,
        children: [
            (0, r.jsx)(m.y6, {
                label: eE.intl.string(eE.t.dnvZSg),
                options: [
                    {
                        label: eE.intl.string(eE.t.YcOxtr),
                        value: e_.ipw.LARGE,
                    },
                    {
                        label: eE.intl.string(eE.t.BKIKqx),
                        value: e_.ipw.SMALL,
                    },
                ],
                className: eb.select,
                onChange: (e) => O.Z.setAvatarSizeMode(e),
                value: n,
            }),
            (0, r.jsx)(m.y6, {
                label: eE.intl.string(eE.t.J0dpcB),
                options: [
                    {
                        label: eE.intl.string(eE.t.nBmDrT),
                        value: e_.wC$.ALWAYS,
                    },
                    {
                        label: eE.intl.string(eE.t["2OvIZY"]),
                        value: e_.wC$.ONLY_WHILE_SPEAKING,
                    },
                    {
                        label: eE.intl.string(eE.t.ekjlPL),
                        value: e_.wC$.NEVER,
                    },
                ],
                className: eb.select,
                onChange: (e) => O.Z.setDisplayNameMode(e),
                value: a,
            }),
            (0, r.jsx)(g.f6W, {
                theme: E,
                children: (e) => {
                    var t, i;
                    return (0, r.jsxs)("div", {
                        className: o()(eb.widgetContainer, e),
                        children: [
                            (0, r.jsx)("div", {
                                className: eb.voiceWidgetContainer,
                                children: (0, r.jsx)(K.kI, {
                                    id: "voice-widget",
                                    title: eE.intl.string(eE.t.KNJ6Vq),
                                    channel: eX(),
                                    overlayVoiceStates: _,
                                    displayNameMode: a,
                                    displayUserMode: s,
                                    avatarSizeMode: n,
                                    widget: e_.Odu.VOICE,
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
                                className: eb.widgetHeaderContainer,
                                children: [
                                    (0, r.jsx)(z.PI, { children: eE.intl.string(eE.t.KNJ6Vq) }),
                                    (0, r.jsx)(z.ls, {}),
                                    (0, r.jsx)(z.RT, {
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
                label: eE.intl.string(eE.t.swsWWC),
                options: [
                    {
                        label: eE.intl.string(eE.t.nBmDrT),
                        value: e_.OYC.ALWAYS,
                    },
                    {
                        label: eE.intl.string(eE.t["2OvIZY"]),
                        value: e_.OYC.ONLY_WHILE_SPEAKING,
                    },
                ],
                className: eb.select,
                onChange: (e) => O.Z.setDisplayUserMode(e),
                value: s,
            }),
            (0, r.jsx)("div", {
                className: eb.sliderContainer,
                children: (0, r.jsx)(g.iRW, {
                    label: eE.intl.string(eE.t["X/Uyzc"]),
                    initialValue: d,
                    onValueRender: (e) => (e < ew ? eE.intl.string(eE.t.nrUzFL) : "".concat(Math.floor(e))),
                    minValue: ew - 1,
                    maxValue: eD,
                    onValueChange: h,
                    markers: ex,
                    barStyles: { background: g.TVs.colors.BACKGROUND_MOD_STRONG.css },
                    fillStyles: { background: g.TVs.colors.BACKGROUND_BRAND.css },
                    onMarkerRender: (e) => (e < ew ? eE.intl.string(eE.t.nrUzFL) : "".concat(Math.floor(e))),
                }),
            }),
        ],
    });
}
function e$() {
    let [e, t] = (0, N.US)([_.z.OVERLAY_OOP_SETTINGS_NUX], void 0, !0),
        n = () => {
            t(em.L.DISMISS);
        };
    return ((0, I.ZP)(() => () => {
        t(em.L.AUTO_DISMISS);
    }),
    e !== _.z.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, r.jsxs)("div", {
              className: eb.overlaySettingsNux,
              children: [
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: ey.Z,
                          alt: eE.intl.string(eE.t.mdXZh1),
                          className: eb.nuxFirstImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsxs)("div", {
                          className: eb.mainTitleContainer,
                          children: [
                              (0, r.jsx)(g.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: eE.intl.string(eE.t.jzjJQg),
                              }),
                              (0, r.jsx)(g.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: eE.intl.string(eE.t["5dOfxb"]),
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                          src: eO.Z,
                          alt: eE.intl.string(eE.t.mdXZh1),
                          className: eb.nuxUserSettingsImage,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: eb.closeCircleButton,
                      children: (0, r.jsx)(g.Button, {
                          variant: "primary",
                          text: eE.intl.string(eE.t.Q26diF),
                          onClick: () => n(),
                      }),
                  }),
                  (0, r.jsx)("div", { className: eb.nuxDivider }),
              ],
          });
}
function e0(e) {
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
        className: eb.overlayEnabledSettingsContainer,
        children: [
            (0, r.jsx)(eW, {}),
            l &&
                (0, r.jsx)(g.rsf, {
                    label: eE.intl.string(eE.t.XZTl9r),
                    checked: u,
                    onChange: (e) => O.Z.setShowKeybindIndicators(e),
                }),
            null != a &&
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eb.limitedInteractionOverrideContainer,
                            children: [
                                (0, r.jsx)(g.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: eE.intl.string(eE.t.wgVQND),
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: eE.intl.string(eE.t["5SsyF5"]),
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
                        className: eb.limitedInteractionOverrideContainer,
                        children: [
                            (0, r.jsx)(g.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: eE.intl.string(eE.t["+eFXxq"]),
                            }),
                            (0, r.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eE.intl.string(eE.t.kivMAp),
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
function e1(e) {
    let { className: t, showHeader: n } = e,
        { runningGame: i, runningGameApplication: a } = (0, R.Z)(),
        o = !0,
        s = (0, p.e7)([ei.default], () => ei.default.getCurrentUser());
    return ((0, I.ZP)(() => {
        if (eu.isPlatformEmbedded) return (0, w.Ky)(), w.P7;
    }),
    eL(),
    null == s)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(ep.Z, {
                      title: eE.intl.string(eE.t["9cb1Uz"]),
                      children: [
                          o ? (0, r.jsx)(e$, {}) : null,
                          (0, r.jsxs)("div", {
                              className: eb.overlayEnabledSettingsContainer,
                              children: [
                                  (0, r.jsx)(eZ, {
                                      runningGame: i,
                                      runningGameApplication: a,
                                  }),
                                  (0, r.jsx)(eH, {}),
                                  (0, r.jsx)(eV, {}),
                                  (0, r.jsx)(eY, {}),
                              ],
                          }),
                          (0, r.jsx)("div", { className: eb.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(e0, {
                              runningGame: i,
                              runningGameApplication: a,
                          }),
                          (0, r.jsx)("div", { className: eb.settingsDivider }),
                      ],
                  }),
                  (0, r.jsxs)(g.gNt, {
                      label: eE.intl.string(eE.t.r1TZfh),
                      children: [(0, r.jsx)(eJ, {}), (0, r.jsx)("div", { className: eb.settingsDivider })],
                  }),
                  (0, r.jsx)(ez, {}),
              ],
          });
}
