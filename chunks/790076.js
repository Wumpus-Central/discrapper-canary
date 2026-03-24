n.d(t, {
    Ay: () => ek,
    DA: () => ef,
    F1: () => eO,
    G6: () => eh,
    Gj: () => ey,
    Gk: () => eR,
    PP: () => ep,
    VQ: () => eG,
    fE: () => ej,
    nR: () => ev,
    ze: () => eL,
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(812729),
    o = n.n(r),
    d = n(284009),
    c = n.n(d),
    u = n(735438),
    m = n.n(u),
    _ = n(311907),
    g = n(990078),
    x = n(397927),
    A = n(544420),
    h = n(97260),
    p = n(391973),
    f = n(684013),
    T = n(117178),
    S = n(56562),
    E = n(964486),
    b = n(793574),
    C = n(587895),
    v = n(429913),
    N = n(15285),
    I = n(286237),
    j = n(843402),
    y = n(769015),
    O = n(496885),
    R = n(810412),
    L = n(93465),
    P = n(206885),
    D = n(41984),
    G = n(589051),
    M = n(833551),
    U = n(515183),
    k = n(592598),
    w = n(395011),
    V = n(663677),
    B = n(682763),
    F = n(237984),
    H = n(897720),
    z = n(393172),
    Y = n(968898),
    X = n(847521),
    K = n(942405),
    W = n(824189),
    Z = n(95701),
    q = n(427157),
    Q = n(288737),
    J = n(760751),
    $ = n(555528),
    ee = n(189081),
    et = n(287809),
    en = n(532624),
    ei = n(242286),
    es = n(256415),
    el = n(954571),
    ea = n(403362),
    er = n(723702),
    eo = n(350535),
    ed = n(9302),
    ec = n(780964),
    eu = n(790174),
    em = n(652215),
    e_ = n(672396);
n(392164);
var eg = n(985018),
    ex = n(202942);
let eA = eT(null),
    eh = 1,
    ep = 25,
    ef = [0, 5, 10, 15, 20, 25];
function eT(e) {
    let t = es.default.getNotificationPositionMode(),
        n = t !== em.G6Q.DISABLED,
        i = en.Ay.getOverlayKeybind(),
        s = en.Ay.getOverlayChatKeybind();
    return {
        enabled: ei.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: k.A.isNotificationDisabled(e_.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, eo.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eo.dI)(s.shortcut) : null,
        text_opacity_slider: es.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? ei.default.enabled,
    };
}
function eS(e) {
    let {
        header: t,
        icon: n,
        title: s,
        description: l,
        action: r,
        hint: o,
        warning: d,
        onClick: c,
        "aria-label": u,
        className: m,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(ex.HS, m),
        children: [
            (0, i.jsxs)(x.sqX, {
                "aria-label": u,
                onClick: c,
                children: [
                    null != t && (0, i.jsx)("div", { className: ex.x_, children: t }),
                    (0, i.jsxs)("div", {
                        className: ex.rN,
                        children: [
                            null != n && (0, i.jsx)("div", { className: ex.$t, children: n }),
                            (0, i.jsxs)("div", {
                                className: ex.c8,
                                children: [
                                    (0, i.jsx)(x.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: ex.SZ,
                                        children: s,
                                    }),
                                    null != l &&
                                        (0, i.jsx)(x.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != o &&
                                        (0, i.jsx)(x.Text, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", { className: ex.a$, children: r }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: ex.Om, children: d }),
        ],
    });
}
function eE(e) {
    let { children: t, className: n, onExpand: l, ...r } = e,
        [o, d] = s.useState(!1);
    return (0, i.jsx)(x.Nt8, {
        className: ex.uR,
        collapsibleContent: (0, i.jsx)("div", { className: ex.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(eS, {
                ...r,
                onClick: (e) => {
                    var n;
                    d((n = !o)), l?.(n), t?.(e);
                },
                className: a()(ex.AC, n),
                action: (0, i.jsxs)("div", {
                    className: ex.rc,
                    children: [
                        r.action,
                        o
                            ? (0, i.jsx)(x.abt, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, i.jsx)(x._BQ, {
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
let eb = new Set([
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
    eC = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function ev() {
    let { runningGame: e, runningGameApplication: t } = (0, I.A)(),
        n = e?.pid,
        l = (0, _.bG)(
            [M.default],
            () => (null == e || null == n ? null : M.default.getTrackedGameByPid(n)),
            [e, n],
            o(),
        ),
        { enabledLegacy: a, enabledOOP: r } = (0, _.cf)(
            [J.A, ee.A],
            () =>
                null == e && null == l
                    ? { enabledLegacy: !1, enabledOOP: !1 }
                    : null == e
                      ? { enabledLegacy: l?.legacyEnabled ?? !1, enabledOOP: l?.oopEnabled ?? !1 }
                      : (0, N.hw)(e, !1, [J.A, ee.A]),
            [e, l],
        ),
        d = (0, _.bG)([N.Ay, J.A, ee.A], () => (null == e ? null : (0, N.xU)(e, N.Ay, J.A, ee.A)), [e], o()),
        [c, u] = s.useState(r),
        [m, h] = s.useState(a),
        [p, T] = s.useState(!1);
    s.useEffect(() => {
        u(r), h(a);
    }, [r, a]);
    let b = !(0, ed.supportsLegacy)(),
        C = !(0, ed.supportsOutOfProcess)(),
        { legacyEnabled: v, oopEnabled: j } = (0, _.cf)([M.default], () => M.default.getGlobalEnabledStatus()),
        L = (t, n) => {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case R.OverlayToggledClientSettingType.LEGACY_GAME:
                    h(t), A.A.toggleOverlay(e, t, c), (i = !t && m);
                    break;
                case R.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), A.A.toggleOverlay(e, m, t), (s = !t && c);
                    break;
                case R.OverlayToggledClientSettingType.LEGACY:
                    f.A.setEnabled(t, j), (0, R.Q3)(t, R.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case R.OverlayToggledClientSettingType.OOP:
                    f.A.setEnabled(v, t), (0, R.Q3)(t, R.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (i || s) &&
                (0, V.L)(
                    i ? R.OverlayToggledClientSettingType.LEGACY_GAME : R.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        },
        P = b && C,
        G = !v && !j,
        U = !c && !v && m && !b,
        k = !m && !j && c && !C,
        w = l?.overlayMethod === D.Ue.Disabled,
        B = l?.state === D.AR.OVERLAY_RENDERING && !w,
        F = l?.state != null && eb.has(l.state) && !w,
        H = l?.overlayMethod === D.Ue.OutOfProcess,
        z = l?.overlayMethod === D.Ue.OutOfProcessLimitedInteraction,
        Y = l?.overlayMethod === D.Ue.Hook,
        X = l?.state === D.AR.OVERLAY_CRASHED || l?.state === D.AR.OVERLAY_CRASHED_DISABLED,
        K = !c && !m,
        [Z, q] = (() => {
            switch (!0) {
                case B && H:
                    return [
                        eg.intl.format(eg.t.hFVBIg, {
                            overlayMethod: eg.intl.string(eg.t.a3eXSw),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    x.Text,
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
                case B && z:
                    return [
                        eg.intl.format(eg.t.hFVBIg, {
                            overlayMethod: eg.intl.string(eg.t["506Aba"]),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    x.Text,
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
                case B && Y:
                    return [
                        eg.intl.format(eg.t.hFVBIg, {
                            overlayMethod: eg.intl.string(eg.t.bvlpDR),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    x.Text,
                                    { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                    t,
                                );
                            },
                        }),
                        (function () {
                            switch (!0) {
                                case l?.fullscreenType !== S.aI.BORDERLESS_FULLSCREEN:
                                    return eg.intl.string(eg.t.mJmbeC);
                                case C:
                                    return eg.intl.string(eg.t.C7bLTQ);
                                case !l?.oopEnabled:
                                    return eg.intl.string(eg.t.WiY24u);
                                case !j:
                                    return eg.intl.string(eg.t.cAFVsL);
                                case !l?.supportsOutOfProcess:
                                    return eg.intl.string(eg.t.XcGEcs);
                                default:
                                    return eg.intl.string(eg.t.bJXH2v);
                            }
                        })(),
                    ];
                case X:
                    return [eg.intl.string(eg.t.OFC2aw), null];
                case P:
                    return [eg.intl.string(eg.t.m7X4az), null];
                case G:
                    return [eg.intl.string(eg.t["9DUS5l"]), null];
                case K:
                    return [eg.intl.string(eg.t.nQ9EdJ), null];
                case U:
                case k:
                    return [eg.intl.string(eg.t.VWUn0a), null];
                case F:
                    if (H) return [eg.intl.string(eg.t["s8+CFq"]), null];
                    if (Y) return [eg.intl.string(eg.t.JEEdqt), null];
                    if (z) return [eg.intl.string(eg.t.pzBMwY), null];
                    return [eg.intl.string(eg.t["2Xhy9k"]), null];
                case null == l:
                    return [eg.intl.string(eg.t.vwHPRi), null];
                case w: {
                    let e = l?.fullscreenType === S.aI.FULLSCREEN ? eg.intl.string(eg.t.mJmbeC) : null;
                    return [eg.intl.string(eg.t.VPW4XY), e];
                }
                default:
                    return [eg.intl.string(eg.t.ONovP5), null];
            }
        })();
    (0, E.Ay)(() => {
        A.A.getDetectableGames();
    });
    let [Q, $] = s.useMemo(
        () =>
            F
                ? ["text-muted", x.LU0.colors.TEXT_MUTED.css]
                : B && z
                  ? ["text-feedback-warning", x.LU0.colors.TEXT_FEEDBACK_WARNING.css]
                  : B && H
                    ? ["text-feedback-positive", x.LU0.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : B && Y
                      ? ["text-strong", x.LU0.colors.TEXT_STRONG.css]
                      : ["interactive-text-default", x.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css],
        [F, B, z, H, Y],
    );
    return null == e
        ? null
        : (0, i.jsxs)(eE, {
              onExpand: T,
              className: p ? ex.tx : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      t?.name ?? d?.name ?? e?.gameName ?? "",
                      null != d && d.verified
                          ? (0, i.jsx)(g.m, {
                                text: eg.intl.string(eg.t["4PJP5p"]),
                                children: (0, i.jsx)(O.A, {
                                    size: 16,
                                    color: x.LU0.colors.BACKGROUND_BRAND.css,
                                    children: (0, i.jsx)(x.Uzd, {
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                        color: x.LU0.colors.WHITE.css,
                                    }),
                                }),
                            })
                          : null,
                  ],
              }),
              description: Z,
              hint: null != q ? q : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      B || F ? (0, i.jsx)(x.kN9, { size: "xxs", color: $ }) : (0, i.jsx)("div", { className: ex.W4 }),
                      (0, i.jsx)(x.Text, {
                          variant: "text-xs/semibold",
                          color: Q,
                          children: eg.intl.string(eg.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, i.jsx)(y.A, { game: t, pid: e?.pid, size: y.M.MEDIUM }),
              "aria-label": eg.intl.string(eg.t["87O5GC"]),
              action: (0, i.jsx)(x.DUT, {
                  onClick: (e) => eC(e),
                  children: (0, i.jsx)(x.dOG, {
                      checked: (c && j) || (m && v),
                      disabled: P,
                      onChange: (t) => {
                          ((t, n) => {
                              if (null == e) return;
                              let i = !1,
                                  s = !1;
                              switch (n) {
                                  case "game":
                                      A.A.toggleOverlay(e, t, t), h(t), u(t), (i = !t && m), (s = !t && c);
                                      break;
                                  case "global":
                                      f.A.setEnabled(t, t), (i = !t && v), (s = !t && j);
                                      break;
                                  case "both":
                                      f.A.setEnabled(t, t),
                                          A.A.toggleOverlay(e, t, t),
                                          h(t),
                                          u(t),
                                          (i = (!t && v) || (!t && m)),
                                          (s = (!t && j) || (!t && c));
                              }
                              let l = null;
                              i
                                  ? (l =
                                        "game" === n
                                            ? R.OverlayToggledClientSettingType.LEGACY_GAME
                                            : R.OverlayToggledClientSettingType.LEGACY)
                                  : s &&
                                    (l =
                                        "game" === n
                                            ? R.OverlayToggledClientSettingType.OOP_GAME
                                            : R.OverlayToggledClientSettingType.OOP),
                                  null != l && (0, V.L)(l, e.id ?? null);
                          })(
                              t,
                              ((e, t) => {
                                  let n = !t && e,
                                      i = !j && c,
                                      s = !v && m,
                                      l = !c && j,
                                      a = !m && v;
                                  switch (!0) {
                                      case n && (i || s) && (l || a):
                                          return "both";
                                      case n && (i || s):
                                          return "global";
                                      default:
                                          return "game";
                                  }
                              })(t, (c && j) || (m && v)),
                          );
                      },
                  }),
              }),
              warning: (0, i.jsx)(W.A, { className: ex.Hh, game: e }),
              children: [
                  (0, i.jsx)(eS, {
                      title: eg.intl.string(eg.t["7BlVIs"]),
                      description: eg.intl.string(eg.t.ndgADE),
                      hint: j ? void 0 : eg.intl.string(eg.t.cAFVsL),
                      "aria-label": eg.intl.string(eg.t["7BlVIs"]),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.dOG, {
                                  checked: c && j,
                                  disabled: C,
                                  onChange: (e) => {
                                      e && !j
                                          ? L(e, R.OverlayToggledClientSettingType.OOP)
                                          : L(e, R.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: ex.Kz }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(eS, {
                      title: eg.intl.string(eg.t.BfFpW1),
                      description: eg.intl.string(eg.t.OzInYk),
                      hint: v ? void 0 : eg.intl.string(eg.t["3sYHXm"]),
                      "aria-label": eg.intl.string(eg.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.dOG, {
                                  checked: m && v,
                                  disabled: b,
                                  onChange: (e) => {
                                      e && !v
                                          ? L(e, R.OverlayToggledClientSettingType.LEGACY)
                                          : L(e, R.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: ex.Kz }),
                          ],
                      }),
                  }),
              ],
          });
}
function eN(e) {
    let { game: t, gameApplication: n } = e,
        l = s.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        a = (0, _.bG)([C.A], () => (null != n ? n : C.A.getApplication(t?.id)), [n, t]);
    return (0, i.jsx)(y.A, { game: a, pid: l, size: y.M.SMALL });
}
function eI(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: l,
            getEnabledFromStatus: a,
            onChange: r,
            clientSettingType: o,
            ariaLabel: d,
        } = e,
        c = (0, _.cf)([N.Ay, J.A, ee.A], () => (0, N.xU)(t, N.Ay, J.A, ee.A)),
        u = (0, _.cf)([J.A, ee.A], () => (0, N.hw)(t, !1, [J.A, ee.A]), [t]),
        m = a(u),
        [g, A] = s.useState(m);
    return (
        s.useEffect(() => {
            A(m);
        }, [m]),
        (0, i.jsx)(eS, {
            title: t.name,
            icon: (0, i.jsx)(eN, { game: c, gameApplication: n }),
            "aria-label": d,
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(x.dOG, {
                        checked: g,
                        disabled: l,
                        onChange: (e) => {
                            let n;
                            return (n = !e && g), void (A(e), r(e, c, u), n && (0, V.L)(o, c.id ?? t?.id ?? null));
                        },
                    }),
                    (0, i.jsx)("div", { className: ex.Kz }),
                ],
            }),
        })
    );
}
function ej() {
    let [e, t] = s.useState(!1),
        { legacyEnabled: n, oopEnabled: l } = (0, _.cf)([M.default], () => M.default.getGlobalEnabledStatus()),
        a = (0, _.yK)([N.Ay], () => N.Ay.getGamesSeen(!0)).filter((e) => !(0, X.n1)(e)),
        r = (0, v.A)(a.map((e) => e.id)),
        o = !(0, ed.supportsLegacy)(),
        d = (e) => {
            f.A.setEnabled(e, l);
            let t = N.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, R.Q3)(e, R.OverlayToggledClientSettingType.LEGACY, t),
                !e && n && (0, V.L)(R.OverlayToggledClientSettingType.LEGACY, t);
        },
        c = (e, t, n) => {
            let { enabledOOP: i } = n;
            A.A.toggleOverlay(t, e, i);
        },
        u = s.useMemo(
            () =>
                (0, ed.supportsLegacy)()
                    ? o
                        ? eg.intl.string(eg.t.r9jEVw)
                        : eg.intl.string(eg.t.OzInYk)
                    : eg.intl.string(eg.t["8Ox6/E"]),
            [o],
        );
    return 0 === a.length
        ? (0, i.jsx)(eS, {
              title: eg.intl.string(eg.t.BfFpW1),
              description: u,
              "aria-label": eg.intl.string(eg.t.BfFpW1),
              className: ex.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.dOG, { checked: n, disabled: o, onChange: (e) => d(e) }),
                      P.O && (0, i.jsx)("div", { className: ex.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(eE, {
              onExpand: t,
              className: e ? ex.tx : void 0,
              title: eg.intl.string(eg.t.BfFpW1),
              description: u,
              "aria-label": eg.intl.string(eg.t.BfFpW1),
              action: (0, i.jsx)(x.DUT, {
                  onClick: (e) => eC(e),
                  children: (0, i.jsx)(x.dOG, { checked: n, disabled: o, onChange: (e) => d(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: ex.SC,
                      children: (0, i.jsx)(x.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eg.intl.string(eg.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(x.IpV, {
                      className: ex.XG,
                      children: a.map((e, t) =>
                          (0, i.jsx)(
                              eI,
                              {
                                  rawGame: e,
                                  clientSettingType: R.OverlayToggledClientSettingType.LEGACY_GAME,
                                  supportDisabled: o,
                                  gameApplication: r[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: c,
                                  ariaLabel: eg.intl.format(eg.t.hvPYsF, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function ey() {
    let [e, t] = s.useState(!1),
        { oopEnabled: n, legacyEnabled: l } = (0, _.cf)([M.default], () => M.default.getGlobalEnabledStatus()),
        a = !(0, ed.supportsOutOfProcess)(),
        r = (0, _.yK)([N.Ay], () => N.Ay.getGamesSeen(!0)).filter((e) => !(0, X.n1)(e)),
        o = (0, v.A)(r.map((e) => e.id)),
        d = (e) => {
            let t = !e && n;
            f.A.setEnabled(l, e);
            let i = N.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, R.Q3)(e, R.OverlayToggledClientSettingType.OOP, i),
                t && (0, V.L)(R.OverlayToggledClientSettingType.OOP, i);
        },
        c = (e, t, n) => {
            let { enabledLegacy: i } = n;
            A.A.toggleOverlay(t, e, i);
        },
        u = s.useMemo(
            () => (P.O ? (a ? eg.intl.string(eg.t.C7bLTQ) : eg.intl.string(eg.t.ndgADE)) : eg.intl.string(eg.t.m7X4az)),
            [a],
        );
    return 0 === r.length
        ? (0, i.jsx)(eS, {
              title: eg.intl.string(eg.t["7BlVIs"]),
              description: u,
              "aria-label": eg.intl.string(eg.t["7BlVIs"]),
              className: ex.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x.dOG, { checked: n, disabled: a, onChange: (e) => d(e) }),
                      P.O && (0, i.jsx)("div", { className: ex.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(eE, {
              onExpand: t,
              className: e ? ex.tx : void 0,
              title: eg.intl.string(eg.t["7BlVIs"]),
              description: u,
              "aria-label": eg.intl.string(eg.t["7BlVIs"]),
              action: (0, i.jsx)(x.DUT, {
                  onClick: (e) => eC(e),
                  children: (0, i.jsx)(x.dOG, { checked: n, disabled: a, onChange: (e) => d(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: ex.SC,
                      children: (0, i.jsx)(x.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eg.intl.string(eg.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(x.IpV, {
                      className: ex.XG,
                      children: r.map((e, t) =>
                          (0, i.jsx)(
                              eI,
                              {
                                  rawGame: e,
                                  clientSettingType: R.OverlayToggledClientSettingType.OOP_GAME,
                                  gameApplication: o[t],
                                  supportDisabled: a,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: c,
                                  ariaLabel: eg.intl.format(eg.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eO() {
    return (0, G.X4)(b.A.USER_SETTINGS)
        ? (0, i.jsx)(eS, {
              title: eg.intl.string(eg.t["z4/l+V"]),
              description: eg.intl.string(eg.t["3aZq/0"]),
              action: (0, i.jsx)(x.Button, {
                  variant: "primary",
                  text: eg.intl.string(eg.t.s2nVhG),
                  onClick: () => {
                      (0, F.b)(b.A.USER_SETTINGS, em.BRT.APP);
                  },
              }),
              "aria-label": eg.intl.string(eg.t["z4/l+V"]),
          })
        : null;
}
function eR(e) {
    let { isLegacySettings: t = !1 } = e,
        n = (0, _.bG)([en.Ay], () => en.Ay.getOverlayKeybind()),
        s = !(0, ed.supportsLegacy)(),
        l = !(0, ed.supportsOutOfProcess)(),
        [a, r] = (0, _.yK)([N.Ay], () => [N.Ay.canShowAdminWarning, N.Ay.getVisibleGame()], []),
        o = (0, K.NP)(),
        d = null != r && r.elevated && a && !o,
        u = !(0, en.DV)(n?.shortcut ?? []);
    return (0, i.jsx)("div", {
        className: ex.hc,
        children: (0, i.jsxs)("div", {
            className: ex.eH,
            children: [
                (0, i.jsxs)("div", {
                    className: ex.Bu,
                    children: [
                        (0, i.jsx)(x.Text, {
                            variant: t ? "text-md/semibold" : "text-md/medium",
                            color: "text-strong",
                            children: eg.intl.string(eg.t.VsAZcC),
                        }),
                        d &&
                            (0, i.jsx)(x.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: ex.y7,
                                children: eg.intl.string(eg.t.NsowVa),
                            }),
                        u &&
                            (0, i.jsx)(x.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: ex.y7,
                                children: eg.intl.string(eg.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: ex.IH,
                    children: (0, i.jsx)(T.A, {
                        disabled: s && l,
                        defaultValue: null != n ? n.shortcut : [],
                        onChange: function (e) {
                            c()(null != n, "Keybind should never be undefined"), h.A.setKeybind({ ...n, shortcut: e });
                        },
                    }),
                }),
            ],
        }),
    });
}
function eL(e) {
    return [
        {
            title: eg.t.eVE4LX,
            description: eg.t["72WNqk"],
            disabledSetting: L.M.TEXT_CHAT,
            key: ec.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
        },
        {
            title: eg.t.oifnSh,
            description: eg.t.bgU5r0,
            disabledSetting: L.M.WELCOME_GENERAL,
            key: ec.X.OVERLAY_NOTIFICATIONS_WELCOME,
        },
        {
            title: eg.t.hqsZJW,
            description: eg.t.kHjdqc,
            disabledSetting: L.M.GO_LIVE_NUDGE,
            key: ec.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
        },
        {
            title: eg.t.sop3rn,
            description: eg.t.pjgffc,
            disabledSetting: L.M.GAME_ACTIVITY,
            key: ec.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
        },
        {
            title: eg.t["2QVhbb"],
            description: eg.t.wQ4ilB,
            disabledSetting: L.M.NOW_PLAYING,
            key: ec.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
        },
        e && {
            title: eg.t.giM9fA,
            description: eg.t.EhAfWj,
            disabledSetting: L.M.NOW_PLAYING_DIFFERENT_GAMES,
            key: ec.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
            usePredicate: () => {
                let { showNowPlayingForDifferentGames: e } = (0, G.M8)(
                        "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                    ),
                    t = (0, _.bG)([k.A], () => k.A.isNotificationDisabledBySetting(L.M.NOW_PLAYING));
                return !!e && !t;
            },
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
}
function eP() {
    let { showNowPlayingForDifferentGames: e } = (0, G.M8)("OverlayV3NowPlayingDifferentGamesNotificationSetting"),
        t = (0, _.bG)([k.A], () => k.A.getDisabledNotifications()),
        n = eL(e && !t.has(L.M.NOW_PLAYING));
    return (0, i.jsxs)("div", {
        className: ex.AO,
        children: [
            (0, i.jsx)(x.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: eg.intl.string(eg.t.xOE5bA),
            }),
            n.map((e) => {
                let n;
                return (0, i.jsxs)(
                    "div",
                    {
                        className: ex.vx,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ex.LS,
                                children: [
                                    (0, i.jsx)(x.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: eg.intl.string(e.title),
                                    }),
                                    (0, i.jsx)(x.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eg.intl.string(e.description),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(x.dOG, {
                                checked: !t.has(e.disabledSetting),
                                onChange:
                                    ((n = e.disabledSetting),
                                    (e) => {
                                        f.A.setNotificationDisabledSetting(n, !e);
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
        user: new q.A({ id: s, username: e }),
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
function eG(e) {
    let t,
        { isLegacySettings: n = !1 } = e,
        l = (0, _.bG)([et.default], () => et.default.getCurrentUser()),
        {
            avatarSizeMode: r,
            displayNameMode: o,
            displayUserMode: d,
        } = (0, _.cf)([es.default], () => ({
            avatarSizeMode: es.default.getAvatarSizeMode(),
            displayNameMode: es.default.getDisplayNameMode(),
            displayUserMode: es.default.getDisplayUserMode(),
        })),
        [c] = s.useState(() => [
            eD(eg.intl.string(eg.t.C0ZDvo), !0, !1),
            eD(eg.intl.string(eg.t.iOtj8E), !1, !1, !0),
            eD(eg.intl.string(eg.t["0oqNgL"]), !1, !0),
        ]),
        u = (0, _.bG)([w.A, $.A], () => {
            let e = w.A.getWidgetByType(em.uss.VOICE_V3);
            if (null == e) return null;
            let t = $.A.getWidget(e.id);
            return null != t && (0, H.ZO)(t) ? t : null;
        }),
        m = u?.meta?.voiceStatesMaxShown ?? 8,
        g = [null != l ? (((t = eD(l.username)).user = l), t) : null, ...c].filter(ea.Vq),
        A = [new Map(g.map((e) => [e.user.id, e])), g.map((e) => e.user.id)],
        h = (0, i.jsx)(x.NPJ, {
            theme: em.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: a()(ex.Y5, e),
                    children: [
                        (0, i.jsx)("div", {
                            className: ex.kJ,
                            children: (0, i.jsx)(z.DH, {
                                id: "voice-widget",
                                title: eg.intl.string(eg.t.KNJ6Vq),
                                channel: (0, Z.createChannelRecord)({
                                    id: "123",
                                    name: "Test Channel",
                                    type: em.rbe.GUILD_VOICE,
                                    guild_id: "456",
                                }),
                                overlayVoiceStates: A,
                                displayNameMode: o,
                                displayUserMode: d,
                                avatarSizeMode: r,
                                widget: em.uss.VOICE,
                                anchorLeft: !0,
                                application: null,
                                stream: null,
                                streamApplication: null,
                                streamMetadata: null,
                                locked: !1,
                                pinned: !1,
                                isSettingsPreview: !0,
                                isPreviewingInGame: !1,
                                maxDisplayedVoiceStates: m,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: ex.R$,
                            children: [
                                (0, i.jsx)(Y.Pl, { children: eg.intl.string(eg.t.KNJ6Vq) }),
                                (0, i.jsx)(Y.CS, {}),
                                (0, i.jsx)(Y.O0, { id: u?.id ?? "voice-widget", pinned: u?.pinned ?? !1 }),
                            ],
                        }),
                    ],
                }),
        });
    return n ? h : (0, i.jsx)("div", { className: ex.F9, children: h });
}
function eM() {
    let {
            avatarSizeMode: e,
            displayNameMode: t,
            displayUserMode: n,
        } = (0, _.cf)([es.default], () => ({
            avatarSizeMode: es.default.getAvatarSizeMode(),
            displayNameMode: es.default.getDisplayNameMode(),
            displayUserMode: es.default.getDisplayUserMode(),
        })),
        s = (0, _.bG)([w.A, $.A], () => {
            let e = w.A.getWidgetByType(em.uss.VOICE_V3);
            if (null == e) return null;
            let t = $.A.getWidget(e.id);
            return null != t && (0, H.ZO)(t) ? t : null;
        }),
        l = s?.meta?.voiceStatesMaxShown ?? 8;
    return (0, i.jsxs)("div", {
        className: ex.ri,
        children: [
            (0, i.jsx)(x.l6P, {
                label: eg.intl.string(eg.t.dnvZSg),
                options: [
                    { id: "large", label: eg.intl.string(eg.t.YcOxtr), value: em.OSZ.LARGE },
                    { id: "small", label: eg.intl.string(eg.t.BKIKqx), value: em.OSZ.SMALL },
                ],
                onSelectionChange: f.A.setAvatarSizeMode,
                value: e,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)(x.l6P, {
                label: eg.intl.string(eg.t.J0dpcB),
                options: [
                    { id: "always", label: eg.intl.string(eg.t.nBmDrT), value: em.pwA.ALWAYS },
                    {
                        id: "only-while-speaking",
                        label: eg.intl.string(eg.t["2OvIZY"]),
                        value: em.pwA.ONLY_WHILE_SPEAKING,
                    },
                    { id: "never", label: eg.intl.string(eg.t.ekjlPL), value: em.pwA.NEVER },
                ],
                onSelectionChange: f.A.setDisplayNameMode,
                value: t,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)(eG, { isLegacySettings: !0 }),
            (0, i.jsx)(x.l6P, {
                label: eg.intl.string(eg.t.swsWWC),
                options: [
                    { id: "always", label: eg.intl.string(eg.t.nBmDrT), value: em.f5z.ALWAYS },
                    {
                        id: "only-while-speaking",
                        label: eg.intl.string(eg.t["2OvIZY"]),
                        value: em.f5z.ONLY_WHILE_SPEAKING,
                    },
                ],
                onSelectionChange: f.A.setDisplayUserMode,
                value: n,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)("div", {
                className: ex.xJ,
                children: (0, i.jsx)(x.Apm, {
                    label: eg.intl.string(eg.t["X/Uyzc"]),
                    initialValue: l,
                    onValueRender: (e) => (e < eh ? eg.intl.string(eg.t.nrUzFL) : `${Math.floor(e)}`),
                    minValue: eh - 1,
                    maxValue: ep,
                    onValueChange: function (e) {
                        null != s &&
                            (e < eh
                                ? (0, p.cC)(s.id, { voiceStatesMaxShown: -1 })
                                : (0, p.cC)(s.id, { voiceStatesMaxShown: Math.floor(e) }));
                    },
                    markers: ef,
                    barStyles: { background: x.LU0.colors.BACKGROUND_MOD_STRONG.css },
                    fillStyles: { background: x.LU0.colors.BACKGROUND_BRAND.css },
                    onMarkerRender: (e) => (e < eh ? eg.intl.string(eg.t.nrUzFL) : `${Math.floor(e)}`),
                }),
            }),
        ],
    });
}
function eU(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        l = n?.id,
        a = (0, _.bG)([k.A], () => k.A.isLimitedInteractionOverrideEnabled(l), [l]),
        r = s.useMemo(() => null != t && (0, U.qJ)(t.pid), [t]),
        o = (0, _.bG)([es.default], () => es.default.disableClickableRegions);
    return (0, i.jsxs)("div", {
        className: ex.U$,
        children: [
            (0, i.jsx)(eR, { isLegacySettings: !0 }),
            null != l &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: ex.yB,
                            children: [
                                (0, i.jsx)(x.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: eg.intl.string(eg.t.wgVQND),
                                }),
                                (0, i.jsx)(x.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: eg.intl.string(eg.t["5SsyF5"]),
                                }),
                            ],
                        }),
                        (0, i.jsx)(x.dOG, {
                            checked: a || r,
                            disabled: r,
                            onChange: (e) => {
                                null != n && (0, B.x8)(n.id, e);
                            },
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        className: ex.yB,
                        children: [
                            (0, i.jsx)(x.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: eg.intl.string(eg.t["+eFXxq"]),
                            }),
                            (0, i.jsx)(x.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eg.intl.string(eg.t.kivMAp),
                            }),
                        ],
                    }),
                    (0, i.jsx)(x.dOG, {
                        checked: !o,
                        onChange: function () {
                            f.A.setDisableClickableRegions(!o);
                        },
                    }),
                ],
            }),
        ],
    });
}
function ek() {
    let e,
        { runningGame: t, runningGameApplication: n } = (0, I.A)(),
        s = (0, _.bG)([et.default], () => et.default.getCurrentUser());
    return (
        (0, E.Ay)(() => {
            if (er.isPlatformEmbedded) return (0, j.a2)(), j.e0;
        }),
        ((e = eT(eA)),
        m().isEqual(e, eA) || (el.default.track(em.HAw.OVERLAY_SETTINGS_UPDATED, e), (eA = e)),
        null == s)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(eu.A, {
                          children: [
                              (0, i.jsxs)("div", {
                                  className: ex.U$,
                                  children: [
                                      (0, i.jsx)(ev, {}),
                                      (0, i.jsx)(ey, {}),
                                      (0, i.jsx)(ej, {}),
                                      (0, i.jsx)(eO, {}),
                                  ],
                              }),
                              (0, i.jsx)("div", { className: ex.Ri }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(eU, { runningGame: t, runningGameApplication: n }),
                              (0, i.jsx)("div", { className: ex.Ri }),
                          ],
                      }),
                      (0, i.jsxs)(x.D0$, {
                          label: eg.intl.string(eg.t.r1TZfh),
                          children: [(0, i.jsx)(eM, {}), (0, i.jsx)("div", { className: ex.Ri })],
                      }),
                      (0, i.jsx)(eP, {}),
                  ],
              })
    );
}
