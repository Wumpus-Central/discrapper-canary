n.d(t, {
    Ay: () => ek,
    DA: () => eE,
    F1: () => eR,
    G6: () => ex,
    Gj: () => eO,
    Gk: () => ey,
    PP: () => ep,
    VQ: () => eM,
    fE: () => ev,
    nR: () => eN,
    ze: () => eP,
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(812729),
    o = n.n(r),
    c = n(284009),
    d = n.n(c),
    u = n(735438),
    _ = n.n(u),
    m = n(311907),
    A = n(990078),
    g = n(397927),
    h = n(544420),
    x = n(97260),
    p = n(391973),
    E = n(684013),
    C = n(117178),
    T = n(56562),
    S = n(964486),
    I = n(793574),
    f = n(587895),
    N = n(429913),
    b = n(15285),
    j = n(286237),
    v = n(843402),
    O = n(769015),
    R = n(496885),
    y = n(810412),
    P = n(93465),
    L = n(206885),
    D = n(41984),
    M = n(589051),
    G = n(833551),
    U = n(515183),
    k = n(592598),
    V = n(395011),
    w = n(663677),
    H = n(682763),
    B = n(237984),
    Y = n(897720),
    F = n(393172),
    z = n(968898),
    W = n(847521),
    K = n(942405),
    Z = n(824189),
    q = n(95701),
    X = n(427157),
    Q = n(288737),
    J = n(760751),
    $ = n(555528),
    ee = n(189081),
    et = n(287809),
    en = n(532624),
    ei = n(242286),
    es = n(256415),
    ea = n(954571),
    el = n(403362),
    er = n(723702),
    eo = n(350535),
    ec = n(9302),
    ed = n(780964),
    eu = n(790174),
    e_ = n(652215),
    em = n(672396);
n(392164);
var eA = n(985018),
    eg = n(202942);
let eh = eC(null),
    ex = 1,
    ep = 25,
    eE = [0, 5, 10, 15, 20, 25];
function eC(e) {
    let t = es.default.getNotificationPositionMode(),
        n = t !== e_.G6Q.DISABLED,
        i = en.Ay.getOverlayKeybind(),
        s = en.Ay.getOverlayChatKeybind();
    return {
        enabled: ei.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: k.A.isNotificationDisabled(em.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, eo.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eo.dI)(s.shortcut) : null,
        text_opacity_slider: es.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? ei.default.enabled,
    };
}
function eT(e) {
    let {
        header: t,
        icon: n,
        title: s,
        description: a,
        action: r,
        hint: o,
        warning: c,
        onClick: d,
        "aria-label": u,
        className: _,
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(eg.HS, _),
        children: [
            (0, i.jsxs)(g.sqX, {
                "aria-label": u,
                onClick: d,
                children: [
                    null != t && (0, i.jsx)("div", { className: eg.x_, children: t }),
                    (0, i.jsxs)("div", {
                        className: eg.rN,
                        children: [
                            null != n && (0, i.jsx)("div", { className: eg.$t, children: n }),
                            (0, i.jsxs)("div", {
                                className: eg.c8,
                                children: [
                                    (0, i.jsx)(g.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: eg.SZ,
                                        children: s,
                                    }),
                                    null != a &&
                                        (0, i.jsx)(g.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: a,
                                        }),
                                    null != o &&
                                        (0, i.jsx)(g.Text, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", { className: eg.a$, children: r }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: eg.Om, children: c }),
        ],
    });
}
function eS(e) {
    let { children: t, className: n, onExpand: a, ...r } = e,
        [o, c] = s.useState(!1);
    return (0, i.jsx)(g.Nt8, {
        className: eg.uR,
        collapsibleContent: (0, i.jsx)("div", { className: eg.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(eT, {
                ...r,
                onClick: (e) => {
                    var n;
                    c((n = !o)), a?.(n), t?.(e);
                },
                className: l()(eg.AC, n),
                action: (0, i.jsxs)("div", {
                    className: eg.rc,
                    children: [
                        r.action,
                        o
                            ? (0, i.jsx)(g.abt, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, i.jsx)(g._BQ, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              }),
                    ],
                }),
            });
        },
    });
}
let eI = new Set([
        D.AR.INITIALIZING,
        D.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        D.AR.WAITING_FOR_MODULE_TRACKING,
        D.AR.WAITING_FOR_OVERLAY_OPEN,
        D.AR.WAITING_FOR_POPOUT_OPEN,
        D.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
        D.AR.WAITING_FOR_REACT_INITIALIZATION,
        D.AR.WAITING_FOR_PID_FOCUS,
        D.AR.WAITING_FOR_SUCCESSFUL_SHOW,
    ]),
    ef = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eN() {
    let { runningGame: e, runningGameApplication: t } = (0, j.A)(),
        n = e?.pid,
        a = (0, m.bG)(
            [G.default],
            () => (null == e || null == n ? null : G.default.getTrackedGameByPid(n)),
            [e, n],
            o(),
        ),
        { enabledLegacy: l, enabledOOP: r } = (0, m.cf)(
            [J.A, ee.A],
            () =>
                null == e && null == a
                    ? { enabledLegacy: !1, enabledOOP: !1 }
                    : null == e
                      ? { enabledLegacy: a?.legacyEnabled ?? !1, enabledOOP: a?.oopEnabled ?? !1 }
                      : (0, b.hw)(e, !1, [J.A, ee.A]),
            [e, a],
        ),
        c = (0, m.bG)([b.Ay, J.A, ee.A], () => (null == e ? null : (0, b.xU)(e, b.Ay, J.A, ee.A)), [e], o()),
        [d, u] = s.useState(r),
        [_, x] = s.useState(l),
        [p, C] = s.useState(!1);
    s.useEffect(() => {
        u(r), x(l);
    }, [r, l]);
    let I = !(0, ec.supportsLegacy)(),
        f = !(0, ec.supportsOutOfProcess)(),
        { legacyEnabled: N, oopEnabled: v } = (0, m.cf)([G.default], () => G.default.getGlobalEnabledStatus()),
        P = (t, n) => {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case y.OverlayToggledClientSettingType.LEGACY_GAME:
                    x(t), h.A.toggleOverlay(e, t, d), (i = !t && _);
                    break;
                case y.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), h.A.toggleOverlay(e, _, t), (s = !t && d);
                    break;
                case y.OverlayToggledClientSettingType.LEGACY:
                    E.A.setEnabled(t, v), (0, y.Q3)(t, y.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case y.OverlayToggledClientSettingType.OOP:
                    E.A.setEnabled(N, t), (0, y.Q3)(t, y.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (i || s) &&
                (0, w.L)(
                    i ? y.OverlayToggledClientSettingType.LEGACY_GAME : y.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        },
        L = I && f,
        M = !N && !v,
        U = !d && !N && _ && !I,
        k = !_ && !v && d && !f,
        V = a?.overlayMethod === D.Ue.Disabled,
        H = a?.state === D.AR.OVERLAY_RENDERING && !V,
        B = a?.state != null && eI.has(a.state) && !V,
        Y = a?.overlayMethod === D.Ue.OutOfProcess,
        F = a?.overlayMethod === D.Ue.OutOfProcessLimitedInteraction,
        z = a?.overlayMethod === D.Ue.Hook,
        W = a?.state === D.AR.OVERLAY_CRASHED || a?.state === D.AR.OVERLAY_CRASHED_DISABLED,
        K = !d && !_,
        [q, X] = (() => {
            switch (!0) {
                case H && Y:
                    return [
                        eA.intl.format(eA.t.hFVBIg, {
                            overlayMethod: eA.intl.string(eA.t.a3eXSw),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    g.Text,
                                    {
                                        tag: "span",
                                        variant: "text-sm/medium",
                                        color: "text-feedback-positive",
                                        children: e,
                                    },
                                    t,
                                );
                            },
                        }),
                        null,
                    ];
                case H && F:
                    return [
                        eA.intl.format(eA.t.hFVBIg, {
                            overlayMethod: eA.intl.string(eA.t["506Aba"]),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    g.Text,
                                    {
                                        tag: "span",
                                        variant: "text-sm/medium",
                                        color: "text-feedback-warning",
                                        children: e,
                                    },
                                    t,
                                );
                            },
                        }),
                        null,
                    ];
                case H && z:
                    return [
                        eA.intl.format(eA.t.hFVBIg, {
                            overlayMethod: eA.intl.string(eA.t.bvlpDR),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    g.Text,
                                    { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                    t,
                                );
                            },
                        }),
                        (function () {
                            switch (!0) {
                                case a?.fullscreenType !== T.aI.BORDERLESS_FULLSCREEN:
                                    return eA.intl.string(eA.t.mJmbeC);
                                case f:
                                    return eA.intl.string(eA.t.C7bLTQ);
                                case !a?.oopEnabled:
                                    return eA.intl.string(eA.t.WiY24u);
                                case !v:
                                    return eA.intl.string(eA.t.cAFVsL);
                                case !a?.supportsOutOfProcess:
                                    return eA.intl.string(eA.t.XcGEcs);
                                default:
                                    return eA.intl.string(eA.t.bJXH2v);
                            }
                        })(),
                    ];
                case W:
                    return [eA.intl.string(eA.t.OFC2aw), null];
                case L:
                    return [eA.intl.string(eA.t.m7X4az), null];
                case M:
                    return [eA.intl.string(eA.t["9DUS5l"]), null];
                case K:
                    return [eA.intl.string(eA.t.nQ9EdJ), null];
                case U:
                case k:
                    return [eA.intl.string(eA.t.VWUn0a), null];
                case B:
                    if (Y) return [eA.intl.string(eA.t["s8+CFq"]), null];
                    if (z) return [eA.intl.string(eA.t.JEEdqt), null];
                    if (F) return [eA.intl.string(eA.t.pzBMwY), null];
                    return [eA.intl.string(eA.t["2Xhy9k"]), null];
                case null == a:
                    return [eA.intl.string(eA.t.vwHPRi), null];
                case V: {
                    let e = a?.fullscreenType === T.aI.FULLSCREEN ? eA.intl.string(eA.t.mJmbeC) : null;
                    return [eA.intl.string(eA.t.VPW4XY), e];
                }
                default:
                    return [eA.intl.string(eA.t.ONovP5), null];
            }
        })();
    (0, S.Ay)(() => {
        h.A.getDetectableGames();
    });
    let [Q, $] = s.useMemo(
        () =>
            B
                ? ["text-muted", g.LU0.colors.TEXT_MUTED.css]
                : H && F
                  ? ["text-feedback-warning", g.LU0.colors.TEXT_FEEDBACK_WARNING.css]
                  : H && Y
                    ? ["text-feedback-positive", g.LU0.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : H && z
                      ? ["text-strong", g.LU0.colors.TEXT_STRONG.css]
                      : ["interactive-text-default", g.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css],
        [B, H, F, Y, z],
    );
    return null == e
        ? null
        : (0, i.jsxs)(eS, {
              onExpand: C,
              className: p ? eg.tx : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      t?.name ?? c?.name ?? e?.gameName ?? "",
                      null != c && c.verified
                          ? (0, i.jsx)(A.m, {
                                text: eA.intl.string(eA.t["4PJP5p"]),
                                children: (0, i.jsx)(R.A, {
                                    size: 16,
                                    color: g.LU0.colors.BACKGROUND_BRAND.css,
                                    children: (0, i.jsx)(g.Uzd, {
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                        color: g.LU0.colors.WHITE.css,
                                    }),
                                }),
                            })
                          : null,
                  ],
              }),
              description: q,
              hint: null != X ? X : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      H || B ? (0, i.jsx)(g.kN9, { size: "xxs", color: $ }) : (0, i.jsx)("div", { className: eg.W4 }),
                      (0, i.jsx)(g.Text, {
                          variant: "text-xs/semibold",
                          color: Q,
                          children: eA.intl.string(eA.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, i.jsx)(O.A, { game: t, pid: e?.pid, size: O.M.MEDIUM }),
              "aria-label": eA.intl.string(eA.t["87O5GC"]),
              action: (0, i.jsx)(g.DUT, {
                  onClick: (e) => ef(e),
                  children: (0, i.jsx)(g.dOG, {
                      checked: (d && v) || (_ && N),
                      disabled: L,
                      onChange: (t) => {
                          ((t, n) => {
                              if (null == e) return;
                              let i = !1,
                                  s = !1;
                              switch (n) {
                                  case "game":
                                      h.A.toggleOverlay(e, t, t), x(t), u(t), (i = !t && _), (s = !t && d);
                                      break;
                                  case "global":
                                      E.A.setEnabled(t, t), (i = !t && N), (s = !t && v);
                                      break;
                                  case "both":
                                      E.A.setEnabled(t, t),
                                          h.A.toggleOverlay(e, t, t),
                                          x(t),
                                          u(t),
                                          (i = (!t && N) || (!t && _)),
                                          (s = (!t && v) || (!t && d));
                              }
                              let a = null;
                              i
                                  ? (a =
                                        "game" === n
                                            ? y.OverlayToggledClientSettingType.LEGACY_GAME
                                            : y.OverlayToggledClientSettingType.LEGACY)
                                  : s &&
                                    (a =
                                        "game" === n
                                            ? y.OverlayToggledClientSettingType.OOP_GAME
                                            : y.OverlayToggledClientSettingType.OOP),
                                  null != a && (0, w.L)(a, e.id ?? null);
                          })(
                              t,
                              ((e, t) => {
                                  let n = !t && e,
                                      i = !v && d,
                                      s = !N && _,
                                      a = !d && v,
                                      l = !_ && N;
                                  switch (!0) {
                                      case n && (i || s) && (a || l):
                                          return "both";
                                      case n && (i || s):
                                          return "global";
                                      default:
                                          return "game";
                                  }
                              })(t, (d && v) || (_ && N)),
                          );
                      },
                  }),
              }),
              warning: (0, i.jsx)(Z.A, { className: eg.Hh, game: e }),
              children: [
                  (0, i.jsx)(eT, {
                      title: eA.intl.string(eA.t["7BlVIs"]),
                      description: eA.intl.string(eA.t.ndgADE),
                      hint: v ? void 0 : eA.intl.string(eA.t.cAFVsL),
                      "aria-label": eA.intl.string(eA.t["7BlVIs"]),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.dOG, {
                                  checked: d && v,
                                  disabled: f,
                                  onChange: (e) => {
                                      e && !v
                                          ? P(e, y.OverlayToggledClientSettingType.OOP)
                                          : P(e, y.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: eg.Kz }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(eT, {
                      title: eA.intl.string(eA.t.BfFpW1),
                      description: eA.intl.string(eA.t.OzInYk),
                      hint: N ? void 0 : eA.intl.string(eA.t["3sYHXm"]),
                      "aria-label": eA.intl.string(eA.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.dOG, {
                                  checked: _ && N,
                                  disabled: I,
                                  onChange: (e) => {
                                      e && !N
                                          ? P(e, y.OverlayToggledClientSettingType.LEGACY)
                                          : P(e, y.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: eg.Kz }),
                          ],
                      }),
                  }),
              ],
          });
}
function eb(e) {
    let { game: t, gameApplication: n } = e,
        a = s.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, m.bG)([f.A], () => (null != n ? n : f.A.getApplication(t?.id)), [n, t]);
    return (0, i.jsx)(O.A, { game: l, pid: a, size: O.M.SMALL });
}
function ej(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: a,
            getEnabledFromStatus: l,
            onChange: r,
            clientSettingType: o,
            ariaLabel: c,
        } = e,
        d = (0, m.cf)([b.Ay, J.A, ee.A], () => (0, b.xU)(t, b.Ay, J.A, ee.A)),
        u = (0, m.cf)([J.A, ee.A], () => (0, b.hw)(t, !1, [J.A, ee.A]), [t]),
        _ = l(u),
        [A, h] = s.useState(_);
    return (
        s.useEffect(() => {
            h(_);
        }, [_]),
        (0, i.jsx)(eT, {
            title: t.name,
            icon: (0, i.jsx)(eb, { game: d, gameApplication: n }),
            "aria-label": c,
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(g.dOG, {
                        checked: A,
                        disabled: a,
                        onChange: (e) => {
                            let n;
                            return (n = !e && A), void (h(e), r(e, d, u), n && (0, w.L)(o, d.id ?? t?.id ?? null));
                        },
                    }),
                    (0, i.jsx)("div", { className: eg.Kz }),
                ],
            }),
        })
    );
}
function ev() {
    let [e, t] = s.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, m.cf)([G.default], () => G.default.getGlobalEnabledStatus()),
        l = (0, m.yK)([b.Ay], () => b.Ay.getGamesSeen(!0)).filter((e) => !(0, W.n1)(e)),
        r = (0, N.A)(l.map((e) => e.id)),
        o = !(0, ec.supportsLegacy)(),
        c = (e) => {
            E.A.setEnabled(e, a);
            let t = b.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, y.Q3)(e, y.OverlayToggledClientSettingType.LEGACY, t),
                !e && n && (0, w.L)(y.OverlayToggledClientSettingType.LEGACY, t);
        },
        d = (e, t, n) => {
            let { enabledOOP: i } = n;
            h.A.toggleOverlay(t, e, i);
        },
        u = s.useMemo(
            () =>
                (0, ec.supportsLegacy)()
                    ? o
                        ? eA.intl.string(eA.t.r9jEVw)
                        : eA.intl.string(eA.t.OzInYk)
                    : eA.intl.string(eA.t["8Ox6/E"]),
            [o],
        );
    return 0 === l.length
        ? (0, i.jsx)(eT, {
              title: eA.intl.string(eA.t.BfFpW1),
              description: u,
              "aria-label": eA.intl.string(eA.t.BfFpW1),
              className: eg.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.dOG, { checked: n, disabled: o, onChange: (e) => c(e) }),
                      L.O && (0, i.jsx)("div", { className: eg.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(eS, {
              onExpand: t,
              className: e ? eg.tx : void 0,
              title: eA.intl.string(eA.t.BfFpW1),
              description: u,
              "aria-label": eA.intl.string(eA.t.BfFpW1),
              action: (0, i.jsx)(g.DUT, {
                  onClick: (e) => ef(e),
                  children: (0, i.jsx)(g.dOG, { checked: n, disabled: o, onChange: (e) => c(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: eg.SC,
                      children: (0, i.jsx)(g.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eA.intl.string(eA.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(g.IpV, {
                      className: eg.XG,
                      children: l.map((e, t) =>
                          (0, i.jsx)(
                              ej,
                              {
                                  rawGame: e,
                                  clientSettingType: y.OverlayToggledClientSettingType.LEGACY_GAME,
                                  supportDisabled: o,
                                  gameApplication: r[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: eA.intl.format(eA.t.hvPYsF, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eO() {
    let [e, t] = s.useState(!1),
        { oopEnabled: n, legacyEnabled: a } = (0, m.cf)([G.default], () => G.default.getGlobalEnabledStatus()),
        l = !(0, ec.supportsOutOfProcess)(),
        r = (0, m.yK)([b.Ay], () => b.Ay.getGamesSeen(!0)).filter((e) => !(0, W.n1)(e)),
        o = (0, N.A)(r.map((e) => e.id)),
        c = (e) => {
            let t = !e && n;
            E.A.setEnabled(a, e);
            let i = b.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, y.Q3)(e, y.OverlayToggledClientSettingType.OOP, i),
                t && (0, w.L)(y.OverlayToggledClientSettingType.OOP, i);
        },
        d = (e, t, n) => {
            let { enabledLegacy: i } = n;
            h.A.toggleOverlay(t, e, i);
        },
        u = s.useMemo(
            () => (L.O ? (l ? eA.intl.string(eA.t.C7bLTQ) : eA.intl.string(eA.t.ndgADE)) : eA.intl.string(eA.t.m7X4az)),
            [l],
        );
    return 0 === r.length
        ? (0, i.jsx)(eT, {
              title: eA.intl.string(eA.t["7BlVIs"]),
              description: u,
              "aria-label": eA.intl.string(eA.t["7BlVIs"]),
              className: eg.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.dOG, { checked: n, disabled: l, onChange: (e) => c(e) }),
                      L.O && (0, i.jsx)("div", { className: eg.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(eS, {
              onExpand: t,
              className: e ? eg.tx : void 0,
              title: eA.intl.string(eA.t["7BlVIs"]),
              description: u,
              "aria-label": eA.intl.string(eA.t["7BlVIs"]),
              action: (0, i.jsx)(g.DUT, {
                  onClick: (e) => ef(e),
                  children: (0, i.jsx)(g.dOG, { checked: n, disabled: l, onChange: (e) => c(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: eg.SC,
                      children: (0, i.jsx)(g.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eA.intl.string(eA.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(g.IpV, {
                      className: eg.XG,
                      children: r.map((e, t) =>
                          (0, i.jsx)(
                              ej,
                              {
                                  rawGame: e,
                                  clientSettingType: y.OverlayToggledClientSettingType.OOP_GAME,
                                  gameApplication: o[t],
                                  supportDisabled: l,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: eA.intl.format(eA.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eR() {
    return (0, M.X4)(I.A.USER_SETTINGS)
        ? (0, i.jsx)(eT, {
              title: eA.intl.string(eA.t["z4/l+V"]),
              description: eA.intl.string(eA.t["3aZq/0"]),
              action: (0, i.jsx)(g.Button, {
                  variant: "primary",
                  text: eA.intl.string(eA.t.s2nVhG),
                  onClick: () => {
                      (0, B.b)(I.A.USER_SETTINGS, e_.BRT.APP);
                  },
              }),
              "aria-label": eA.intl.string(eA.t["z4/l+V"]),
          })
        : null;
}
function ey(e) {
    let { isLegacySettings: t = !1 } = e,
        n = (0, m.bG)([en.Ay], () => en.Ay.getOverlayKeybind()),
        s = !(0, ec.supportsLegacy)(),
        a = !(0, ec.supportsOutOfProcess)(),
        [l, r] = (0, m.yK)([b.Ay], () => [b.Ay.canShowAdminWarning, b.Ay.getVisibleGame()], []),
        o = (0, K.NP)(),
        c = null != r && r.elevated && l && !o,
        u = !(0, en.DV)(n?.shortcut ?? []);
    return (0, i.jsx)("div", {
        className: eg.hc,
        children: (0, i.jsxs)("div", {
            className: eg.eH,
            children: [
                (0, i.jsxs)("div", {
                    className: eg.Bu,
                    children: [
                        (0, i.jsx)(g.Text, {
                            variant: t ? "text-md/semibold" : "text-md/medium",
                            color: "text-strong",
                            children: eA.intl.string(eA.t.VsAZcC),
                        }),
                        c &&
                            (0, i.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eg.y7,
                                children: eA.intl.string(eA.t.NsowVa),
                            }),
                        u &&
                            (0, i.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eg.y7,
                                children: eA.intl.string(eA.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eg.IH,
                    children: (0, i.jsx)(C.A, {
                        disabled: s && a,
                        defaultValue: null != n ? n.shortcut : [],
                        onChange: function (e) {
                            d()(null != n, "Keybind should never be undefined"), x.A.setKeybind({ ...n, shortcut: e });
                        },
                    }),
                }),
            ],
        }),
    });
}
function eP(e, t) {
    return [
        {
            title: eA.t.eVE4LX,
            description: eA.t["72WNqk"],
            disabledSetting: P.M.TEXT_CHAT,
            key: ed.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
        },
        {
            title: eA.t.oifnSh,
            description: eA.t.bgU5r0,
            disabledSetting: P.M.WELCOME_GENERAL,
            key: ed.X.OVERLAY_NOTIFICATIONS_WELCOME,
        },
        {
            title: eA.t.hqsZJW,
            description: eA.t.kHjdqc,
            disabledSetting: P.M.GO_LIVE_NUDGE,
            key: ed.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
        },
        {
            title: eA.t.sop3rn,
            description: eA.t.pjgffc,
            disabledSetting: P.M.GAME_ACTIVITY,
            key: ed.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
        },
        {
            title: eA.t["2QVhbb"],
            description: eA.t.wQ4ilB,
            disabledSetting: P.M.NOW_PLAYING,
            key: ed.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
        },
        t && {
            title: eA.t.giM9fA,
            description: eA.t.EhAfWj,
            disabledSetting: P.M.NOW_PLAYING_DIFFERENT_GAMES,
            key: ed.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
            usePredicate: () => {
                let { showNowPlayingForDifferentGames: e } = (0, M.M8)(
                        "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                    ),
                    t = (0, m.bG)([k.A], () => k.A.isNotificationDisabledBySetting(P.M.NOW_PLAYING));
                return !!e && !t;
            },
        },
        e && {
            title: eA.t["5/21FT"],
            description: eA.t.EIzwfA,
            disabledSetting: P.M.FRIEND_STREAM_WATCH_NUDGE,
            key: ed.X.OVERLAY_NOTIFICATIONS_FRIEND_STREAM_WATCH,
            usePredicate: () => {
                let { enabled: e } = (0, M.QC)("OverlayV3StreamWatchNudge");
                return e;
            },
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
}
function eL() {
    let { enabled: e } = (0, M.QC)("OverlayV3StreamWatchNudge"),
        { showNowPlayingForDifferentGames: t } = (0, M.M8)("OverlayV3NowPlayingDifferentGamesNotificationSetting"),
        n = (0, m.bG)([k.A], () => k.A.getDisabledNotifications()),
        s = eP(e, t && !n.has(P.M.NOW_PLAYING));
    return (0, i.jsxs)("div", {
        className: eg.AO,
        children: [
            (0, i.jsx)(g.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: eA.intl.string(eA.t.xOE5bA),
            }),
            s.map((e) => {
                let t;
                return (0, i.jsxs)(
                    "div",
                    {
                        className: eg.vx,
                        children: [
                            (0, i.jsxs)("div", {
                                className: eg.LS,
                                children: [
                                    (0, i.jsx)(g.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: eA.intl.string(e.title),
                                    }),
                                    (0, i.jsx)(g.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eA.intl.string(e.description),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(g.dOG, {
                                checked: !n.has(e.disabledSetting),
                                onChange:
                                    ((t = e.disabledSetting),
                                    (e) => {
                                        E.A.setNotificationDisabledSetting(t, !e);
                                    }),
                            }),
                        ],
                    },
                    e.disabledSetting,
                );
            }),
        ],
    });
}
function eD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new Q.A({
            channelId: "123",
            userId: s,
            sessionId: "789",
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i,
        }),
        user: new X.A({ id: s, username: e }),
        member: {
            nick: e,
            userId: s,
            guildId: "890",
            roles: [],
            hoistRoleId: null,
            premiumSince: null,
            joinedAt: new Date().toISOString(),
            colorString: "#000000",
            colorStrings: { primaryColor: "#000000", secondaryColor: null, tertiaryColor: null },
        },
        nick: e,
        comparator: e,
        _isPlaceholder: !0,
    };
}
function eM(e) {
    let t,
        { isLegacySettings: n = !1 } = e,
        a = (0, m.bG)([et.default], () => et.default.getCurrentUser()),
        {
            avatarSizeMode: r,
            displayNameMode: o,
            displayUserMode: c,
        } = (0, m.cf)([es.default], () => ({
            avatarSizeMode: es.default.getAvatarSizeMode(),
            displayNameMode: es.default.getDisplayNameMode(),
            displayUserMode: es.default.getDisplayUserMode(),
        })),
        [d] = s.useState(() => [
            eD(eA.intl.string(eA.t.C0ZDvo), !0, !1),
            eD(eA.intl.string(eA.t.iOtj8E), !1, !1, !0),
            eD(eA.intl.string(eA.t["0oqNgL"]), !1, !0),
        ]),
        u = (0, m.bG)([V.A, $.A], () => {
            let e = V.A.getWidgetByType(e_.uss.VOICE_V3);
            if (null == e) return null;
            let t = $.A.getWidget(e.id);
            return null != t && (0, Y.ZO)(t) ? t : null;
        }),
        _ = u?.meta?.voiceStatesMaxShown ?? 8,
        A = [null != a ? (((t = eD(a.username)).user = a), t) : null, ...d].filter(el.Vq),
        h = [new Map(A.map((e) => [e.user.id, e])), A.map((e) => e.user.id)],
        x = (0, i.jsx)(g.NPJ, {
            theme: e_.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: l()(eg.Y5, e),
                    children: [
                        (0, i.jsx)("div", {
                            className: eg.kJ,
                            children: (0, i.jsx)(F.DH, {
                                id: "voice-widget",
                                title: eA.intl.string(eA.t.KNJ6Vq),
                                channel: (0, q.createChannelRecord)({
                                    id: "123",
                                    name: "Test Channel",
                                    type: e_.rbe.GUILD_VOICE,
                                    guild_id: "456",
                                }),
                                overlayVoiceStates: h,
                                displayNameMode: o,
                                displayUserMode: c,
                                avatarSizeMode: r,
                                widget: e_.uss.VOICE,
                                anchorLeft: !0,
                                application: null,
                                stream: null,
                                streamApplication: null,
                                streamMetadata: null,
                                locked: !1,
                                pinned: !1,
                                isSettingsPreview: !0,
                                isPreviewingInGame: !1,
                                maxDisplayedVoiceStates: _,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: eg.R$,
                            children: [
                                (0, i.jsx)(z.Pl, { children: eA.intl.string(eA.t.KNJ6Vq) }),
                                (0, i.jsx)(z.CS, {}),
                                (0, i.jsx)(z.O0, { id: u?.id ?? "voice-widget", pinned: u?.pinned ?? !1 }),
                            ],
                        }),
                    ],
                }),
        });
    return n ? x : (0, i.jsx)("div", { className: eg.F9, children: x });
}
function eG() {
    let {
            avatarSizeMode: e,
            displayNameMode: t,
            displayUserMode: n,
        } = (0, m.cf)([es.default], () => ({
            avatarSizeMode: es.default.getAvatarSizeMode(),
            displayNameMode: es.default.getDisplayNameMode(),
            displayUserMode: es.default.getDisplayUserMode(),
        })),
        s = (0, m.bG)([V.A, $.A], () => {
            let e = V.A.getWidgetByType(e_.uss.VOICE_V3);
            if (null == e) return null;
            let t = $.A.getWidget(e.id);
            return null != t && (0, Y.ZO)(t) ? t : null;
        }),
        a = s?.meta?.voiceStatesMaxShown ?? 8;
    return (0, i.jsxs)("div", {
        className: eg.ri,
        children: [
            (0, i.jsx)(g.l6P, {
                label: eA.intl.string(eA.t.dnvZSg),
                options: [
                    { id: "large", label: eA.intl.string(eA.t.YcOxtr), value: e_.OSZ.LARGE },
                    { id: "small", label: eA.intl.string(eA.t.BKIKqx), value: e_.OSZ.SMALL },
                ],
                onSelectionChange: E.A.setAvatarSizeMode,
                value: e,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)(g.l6P, {
                label: eA.intl.string(eA.t.J0dpcB),
                options: [
                    { id: "always", label: eA.intl.string(eA.t.nBmDrT), value: e_.pwA.ALWAYS },
                    {
                        id: "only-while-speaking",
                        label: eA.intl.string(eA.t["2OvIZY"]),
                        value: e_.pwA.ONLY_WHILE_SPEAKING,
                    },
                    { id: "never", label: eA.intl.string(eA.t.ekjlPL), value: e_.pwA.NEVER },
                ],
                onSelectionChange: E.A.setDisplayNameMode,
                value: t,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)(eM, { isLegacySettings: !0 }),
            (0, i.jsx)(g.l6P, {
                label: eA.intl.string(eA.t.swsWWC),
                options: [
                    { id: "always", label: eA.intl.string(eA.t.nBmDrT), value: e_.f5z.ALWAYS },
                    {
                        id: "only-while-speaking",
                        label: eA.intl.string(eA.t["2OvIZY"]),
                        value: e_.f5z.ONLY_WHILE_SPEAKING,
                    },
                ],
                onSelectionChange: E.A.setDisplayUserMode,
                value: n,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)("div", {
                className: eg.xJ,
                children: (0, i.jsx)(g.Apm, {
                    label: eA.intl.string(eA.t["X/Uyzc"]),
                    initialValue: a,
                    onValueRender: (e) => (e < ex ? eA.intl.string(eA.t.nrUzFL) : `${Math.floor(e)}`),
                    minValue: ex - 1,
                    maxValue: ep,
                    onValueChange: function (e) {
                        null != s &&
                            (e < ex
                                ? (0, p.cC)(s.id, { voiceStatesMaxShown: -1 })
                                : (0, p.cC)(s.id, { voiceStatesMaxShown: Math.floor(e) }));
                    },
                    markers: eE,
                    barStyles: { background: g.LU0.colors.BACKGROUND_MOD_STRONG.css },
                    fillStyles: { background: g.LU0.colors.BACKGROUND_BRAND.css },
                    onMarkerRender: (e) => (e < ex ? eA.intl.string(eA.t.nrUzFL) : `${Math.floor(e)}`),
                }),
            }),
        ],
    });
}
function eU(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        a = n?.id,
        l = (0, m.bG)([k.A], () => k.A.isLimitedInteractionOverrideEnabled(a), [a]),
        r = s.useMemo(() => null != t && (0, U.qJ)(t.pid), [t]),
        o = (0, m.bG)([es.default], () => es.default.disableClickableRegions);
    return (0, i.jsxs)("div", {
        className: eg.U$,
        children: [
            (0, i.jsx)(ey, { isLegacySettings: !0 }),
            null != a &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: eg.yB,
                            children: [
                                (0, i.jsx)(g.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: eA.intl.string(eA.t.wgVQND),
                                }),
                                (0, i.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: eA.intl.string(eA.t["5SsyF5"]),
                                }),
                            ],
                        }),
                        (0, i.jsx)(g.dOG, {
                            checked: l || r,
                            disabled: r,
                            onChange: (e) => {
                                null != n && (0, H.x8)(n.id, e);
                            },
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        className: eg.yB,
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: eA.intl.string(eA.t["+eFXxq"]),
                            }),
                            (0, i.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eA.intl.string(eA.t.kivMAp),
                            }),
                        ],
                    }),
                    (0, i.jsx)(g.dOG, {
                        checked: !o,
                        onChange: function () {
                            E.A.setDisableClickableRegions(!o);
                        },
                    }),
                ],
            }),
        ],
    });
}
function ek() {
    let e,
        { runningGame: t, runningGameApplication: n } = (0, j.A)(),
        s = (0, m.bG)([et.default], () => et.default.getCurrentUser());
    return (
        (0, S.Ay)(() => {
            if (er.isPlatformEmbedded) return (0, v.a2)(), v.e0;
        }),
        ((e = eC(eh)),
        _().isEqual(e, eh) || (ea.default.track(e_.HAw.OVERLAY_SETTINGS_UPDATED, e), (eh = e)),
        null == s)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(eu.A, {
                          title: eA.intl.string(eA.t["9cb1Uz"]),
                          children: [
                              (0, i.jsxs)("div", {
                                  className: eg.U$,
                                  children: [
                                      (0, i.jsx)(eN, {}),
                                      (0, i.jsx)(eO, {}),
                                      (0, i.jsx)(ev, {}),
                                      (0, i.jsx)(eR, {}),
                                  ],
                              }),
                              (0, i.jsx)("div", { className: eg.Ri }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(eU, { runningGame: t, runningGameApplication: n }),
                              (0, i.jsx)("div", { className: eg.Ri }),
                          ],
                      }),
                      (0, i.jsxs)(g.D0$, {
                          label: eA.intl.string(eA.t.r1TZfh),
                          children: [(0, i.jsx)(eG, {}), (0, i.jsx)("div", { className: eg.Ri })],
                      }),
                      (0, i.jsx)(eL, {}),
                  ],
              })
    );
}
