n.d(t, {
    Ay: () => eU,
    DA: () => ef,
    F1: () => eO,
    G6: () => ep,
    Gj: () => ey,
    Gk: () => eR,
    PP: () => eh,
    VQ: () => eM,
    fE: () => ej,
    nR: () => eN,
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
    A = n(397927),
    x = n(544420),
    p = n(97260),
    h = n(391973),
    f = n(684013),
    T = n(117178),
    E = n(56562),
    S = n(964486),
    b = n(793574),
    C = n(587895),
    N = n(429913),
    v = n(15285),
    I = n(286237),
    j = n(843402),
    y = n(769015),
    O = n(496885),
    R = n(810412),
    L = n(93465),
    P = n(206885),
    D = n(41984),
    M = n(589051),
    G = n(833551),
    k = n(515183),
    U = n(592598),
    w = n(395011),
    V = n(663677),
    B = n(682763),
    F = n(237984),
    H = n(897720),
    z = n(393172),
    Y = n(968898),
    X = n(847521),
    W = n(942405),
    K = n(824189),
    Z = n(95701),
    q = n(427157),
    J = n(288737),
    Q = n(760751),
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
    eA = n(202942);
let ex = eT(null),
    ep = 1,
    eh = 25,
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
        text_notifications_mode: U.A.isNotificationDisabled(e_.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, eo.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eo.dI)(s.shortcut) : null,
        text_opacity_slider: es.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? ei.default.enabled,
    };
}
function eE(e) {
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
        className: a()(eA.HS, m),
        children: [
            (0, i.jsxs)(A.sqX, {
                "aria-label": u,
                onClick: c,
                children: [
                    null != t && (0, i.jsx)("div", { className: eA.x_, children: t }),
                    (0, i.jsxs)("div", {
                        className: eA.rN,
                        children: [
                            null != n && (0, i.jsx)("div", { className: eA.$t, children: n }),
                            (0, i.jsxs)("div", {
                                className: eA.c8,
                                children: [
                                    (0, i.jsx)(A.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: eA.SZ,
                                        children: s,
                                    }),
                                    null != l &&
                                        (0, i.jsx)(A.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: l,
                                        }),
                                    null != o &&
                                        (0, i.jsx)(A.Text, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: o,
                                        }),
                                ],
                            }),
                            (0, i.jsx)("div", { className: eA.a$, children: r }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: eA.Om, children: d }),
        ],
    });
}
function eS(e) {
    let { children: t, className: n, onExpand: l, ...r } = e,
        [o, d] = s.useState(!1);
    return (0, i.jsx)(A.Nt8, {
        className: eA.uR,
        collapsibleContent: (0, i.jsx)("div", { className: eA.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(eE, {
                ...r,
                onClick: (e) => {
                    var n;
                    d((n = !o)), l?.(n), t?.(e);
                },
                className: a()(eA.AC, n),
                action: (0, i.jsxs)("div", {
                    className: eA.rc,
                    children: [
                        r.action,
                        o
                            ? (0, i.jsx)(A.abt, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, i.jsx)(A._BQ, {
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
function eN() {
    let { runningGame: e, runningGameApplication: t } = (0, I.A)(),
        n = e?.pid,
        l = (0, _.bG)(
            [G.default],
            () => (null == e || null == n ? null : G.default.getTrackedGameByPid(n)),
            [e, n],
            o(),
        ),
        { enabledLegacy: a, enabledOOP: r } = (0, _.cf)(
            [Q.A, ee.A],
            () =>
                null == e && null == l
                    ? { enabledLegacy: !1, enabledOOP: !1 }
                    : null == e
                      ? { enabledLegacy: l?.legacyEnabled ?? !1, enabledOOP: l?.oopEnabled ?? !1 }
                      : (0, v.hw)(e, !1, [Q.A, ee.A]),
            [e, l],
        ),
        d = (0, _.bG)([v.Ay, Q.A, ee.A], () => (null == e ? null : (0, v.xU)(e, v.Ay, Q.A, ee.A)), [e], o()),
        [c, u] = s.useState(r),
        [m, p] = s.useState(a),
        [h, T] = s.useState(!1);
    s.useEffect(() => {
        u(r), p(a);
    }, [r, a]);
    let b = !(0, ed.supportsLegacy)(),
        C = !(0, ed.supportsOutOfProcess)(),
        { legacyEnabled: N, oopEnabled: j } = (0, _.cf)([G.default], () => G.default.getGlobalEnabledStatus()),
        L = (t, n) => {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case R.OverlayToggledClientSettingType.LEGACY_GAME:
                    p(t), x.A.toggleOverlay(e, t, c), (i = !t && m);
                    break;
                case R.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), x.A.toggleOverlay(e, m, t), (s = !t && c);
                    break;
                case R.OverlayToggledClientSettingType.LEGACY:
                    f.A.setEnabled(t, j), (0, R.Q3)(t, R.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case R.OverlayToggledClientSettingType.OOP:
                    f.A.setEnabled(N, t), (0, R.Q3)(t, R.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (i || s) &&
                (0, V.L)(
                    i ? R.OverlayToggledClientSettingType.LEGACY_GAME : R.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        },
        P = b && C,
        M = !N && !j,
        k = !c && !N && m && !b,
        U = !m && !j && c && !C,
        w = l?.overlayMethod === D.Ue.Disabled,
        B = l?.state === D.AR.OVERLAY_RENDERING && !w,
        F = l?.state != null && eb.has(l.state) && !w,
        H = l?.overlayMethod === D.Ue.OutOfProcess,
        z = l?.overlayMethod === D.Ue.OutOfProcessLimitedInteraction,
        Y = l?.overlayMethod === D.Ue.Hook,
        X = l?.state === D.AR.OVERLAY_CRASHED || l?.state === D.AR.OVERLAY_CRASHED_DISABLED,
        W = !c && !m,
        [Z, q] = (() => {
            switch (!0) {
                case B && H:
                    return [
                        eg.intl.format(eg.t.hFVBIg, {
                            overlayMethod: eg.intl.string(eg.t.a3eXSw),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    A.Text,
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
                                    A.Text,
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
                                    A.Text,
                                    { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                    t,
                                );
                            },
                        }),
                        (function () {
                            switch (!0) {
                                case l?.fullscreenType !== E.aI.BORDERLESS_FULLSCREEN:
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
                case M:
                    return [eg.intl.string(eg.t["9DUS5l"]), null];
                case W:
                    return [eg.intl.string(eg.t.nQ9EdJ), null];
                case k:
                case U:
                    return [eg.intl.string(eg.t.VWUn0a), null];
                case F:
                    if (H) return [eg.intl.string(eg.t["s8+CFq"]), null];
                    if (Y) return [eg.intl.string(eg.t.JEEdqt), null];
                    if (z) return [eg.intl.string(eg.t.pzBMwY), null];
                    return [eg.intl.string(eg.t["2Xhy9k"]), null];
                case null == l:
                    return [eg.intl.string(eg.t.vwHPRi), null];
                case w: {
                    let e = l?.fullscreenType === E.aI.FULLSCREEN ? eg.intl.string(eg.t.mJmbeC) : null;
                    return [eg.intl.string(eg.t.VPW4XY), e];
                }
                default:
                    return [eg.intl.string(eg.t.ONovP5), null];
            }
        })();
    (0, S.Ay)(() => {
        x.A.getDetectableGames();
    });
    let [J, $] = s.useMemo(
        () =>
            F
                ? ["text-muted", A.LU0.colors.TEXT_MUTED.css]
                : B && z
                  ? ["text-feedback-warning", A.LU0.colors.TEXT_FEEDBACK_WARNING.css]
                  : B && H
                    ? ["text-feedback-positive", A.LU0.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : B && Y
                      ? ["text-strong", A.LU0.colors.TEXT_STRONG.css]
                      : ["interactive-text-default", A.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css],
        [F, B, z, H, Y],
    );
    return null == e
        ? null
        : (0, i.jsxs)(eS, {
              onExpand: T,
              className: h ? eA.tx : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      t?.name ?? d?.name ?? e?.gameName ?? "",
                      null != d && d.verified
                          ? (0, i.jsx)(g.m, {
                                text: eg.intl.string(eg.t["4PJP5p"]),
                                children: (0, i.jsx)(O.A, {
                                    size: 16,
                                    color: A.LU0.colors.BACKGROUND_BRAND.css,
                                    children: (0, i.jsx)(A.Uzd, {
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                        color: A.LU0.colors.WHITE.css,
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
                      B || F ? (0, i.jsx)(A.kN9, { size: "xxs", color: $ }) : (0, i.jsx)("div", { className: eA.W4 }),
                      (0, i.jsx)(A.Text, {
                          variant: "text-xs/semibold",
                          color: J,
                          children: eg.intl.string(eg.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, i.jsx)(y.A, { game: t, pid: e?.pid, size: y.M.MEDIUM }),
              "aria-label": eg.intl.string(eg.t["87O5GC"]),
              action: (0, i.jsx)(A.DUT, {
                  onClick: (e) => eC(e),
                  children: (0, i.jsx)(A.dOG, {
                      checked: (c && j) || (m && N),
                      disabled: P,
                      onChange: (t) => {
                          ((t, n) => {
                              if (null == e) return;
                              let i = !1,
                                  s = !1;
                              switch (n) {
                                  case "game":
                                      x.A.toggleOverlay(e, t, t), p(t), u(t), (i = !t && m), (s = !t && c);
                                      break;
                                  case "global":
                                      f.A.setEnabled(t, t), (i = !t && N), (s = !t && j);
                                      break;
                                  case "both":
                                      f.A.setEnabled(t, t),
                                          x.A.toggleOverlay(e, t, t),
                                          p(t),
                                          u(t),
                                          (i = (!t && N) || (!t && m)),
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
                                      s = !N && m,
                                      l = !c && j,
                                      a = !m && N;
                                  switch (!0) {
                                      case n && (i || s) && (l || a):
                                          return "both";
                                      case n && (i || s):
                                          return "global";
                                      default:
                                          return "game";
                                  }
                              })(t, (c && j) || (m && N)),
                          );
                      },
                  }),
              }),
              warning: (0, i.jsx)(K.A, { className: eA.Hh, game: e }),
              children: [
                  (0, i.jsx)(eE, {
                      title: eg.intl.string(eg.t["7BlVIs"]),
                      description: eg.intl.string(eg.t.ndgADE),
                      hint: j ? void 0 : eg.intl.string(eg.t.cAFVsL),
                      "aria-label": eg.intl.string(eg.t["7BlVIs"]),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(A.dOG, {
                                  checked: c && j,
                                  disabled: C,
                                  onChange: (e) => {
                                      e && !j
                                          ? L(e, R.OverlayToggledClientSettingType.OOP)
                                          : L(e, R.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: eA.Kz }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(eE, {
                      title: eg.intl.string(eg.t.BfFpW1),
                      description: eg.intl.string(eg.t.OzInYk),
                      hint: N ? void 0 : eg.intl.string(eg.t["3sYHXm"]),
                      "aria-label": eg.intl.string(eg.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(A.dOG, {
                                  checked: m && N,
                                  disabled: b,
                                  onChange: (e) => {
                                      e && !N
                                          ? L(e, R.OverlayToggledClientSettingType.LEGACY)
                                          : L(e, R.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: eA.Kz }),
                          ],
                      }),
                  }),
              ],
          });
}
function ev(e) {
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
        c = (0, _.cf)([v.Ay, Q.A, ee.A], () => (0, v.xU)(t, v.Ay, Q.A, ee.A)),
        u = (0, _.cf)([Q.A, ee.A], () => (0, v.hw)(t, !1, [Q.A, ee.A]), [t]),
        m = a(u),
        [g, x] = s.useState(m);
    return (
        s.useEffect(() => {
            x(m);
        }, [m]),
        (0, i.jsx)(eE, {
            title: t.name,
            icon: (0, i.jsx)(ev, { game: c, gameApplication: n }),
            "aria-label": d,
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(A.dOG, {
                        checked: g,
                        disabled: l,
                        onChange: (e) => {
                            let n;
                            return (n = !e && g), void (x(e), r(e, c, u), n && (0, V.L)(o, c.id ?? t?.id ?? null));
                        },
                    }),
                    (0, i.jsx)("div", { className: eA.Kz }),
                ],
            }),
        })
    );
}
function ej() {
    let [e, t] = s.useState(!1),
        { legacyEnabled: n, oopEnabled: l } = (0, _.cf)([G.default], () => G.default.getGlobalEnabledStatus()),
        a = (0, _.yK)([v.Ay], () => v.Ay.getGamesSeen(!0)).filter((e) => !(0, X.n1)(e)),
        r = (0, N.A)(a.map((e) => e.id)),
        o = !(0, ed.supportsLegacy)(),
        d = (e) => {
            f.A.setEnabled(e, l);
            let t = v.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, R.Q3)(e, R.OverlayToggledClientSettingType.LEGACY, t),
                !e && n && (0, V.L)(R.OverlayToggledClientSettingType.LEGACY, t);
        },
        c = (e, t, n) => {
            let { enabledOOP: i } = n;
            x.A.toggleOverlay(t, e, i);
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
        ? (0, i.jsx)(eE, {
              title: eg.intl.string(eg.t.BfFpW1),
              description: u,
              "aria-label": eg.intl.string(eg.t.BfFpW1),
              className: eA.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(A.dOG, { checked: n, disabled: o, onChange: (e) => d(e) }),
                      P.O && (0, i.jsx)("div", { className: eA.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(eS, {
              onExpand: t,
              className: e ? eA.tx : void 0,
              title: eg.intl.string(eg.t.BfFpW1),
              description: u,
              "aria-label": eg.intl.string(eg.t.BfFpW1),
              action: (0, i.jsx)(A.DUT, {
                  onClick: (e) => eC(e),
                  children: (0, i.jsx)(A.dOG, { checked: n, disabled: o, onChange: (e) => d(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: eA.SC,
                      children: (0, i.jsx)(A.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eg.intl.string(eg.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(A.IpV, {
                      className: eA.XG,
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
        { oopEnabled: n, legacyEnabled: l } = (0, _.cf)([G.default], () => G.default.getGlobalEnabledStatus()),
        a = !(0, ed.supportsOutOfProcess)(),
        r = (0, _.yK)([v.Ay], () => v.Ay.getGamesSeen(!0)).filter((e) => !(0, X.n1)(e)),
        o = (0, N.A)(r.map((e) => e.id)),
        d = (e) => {
            let t = !e && n;
            f.A.setEnabled(l, e);
            let i = v.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, R.Q3)(e, R.OverlayToggledClientSettingType.OOP, i),
                t && (0, V.L)(R.OverlayToggledClientSettingType.OOP, i);
        },
        c = (e, t, n) => {
            let { enabledLegacy: i } = n;
            x.A.toggleOverlay(t, e, i);
        },
        u = s.useMemo(
            () => (P.O ? (a ? eg.intl.string(eg.t.C7bLTQ) : eg.intl.string(eg.t.ndgADE)) : eg.intl.string(eg.t.m7X4az)),
            [a],
        );
    return 0 === r.length
        ? (0, i.jsx)(eE, {
              title: eg.intl.string(eg.t["7BlVIs"]),
              description: u,
              "aria-label": eg.intl.string(eg.t["7BlVIs"]),
              className: eA.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(A.dOG, { checked: n, disabled: a, onChange: (e) => d(e) }),
                      P.O && (0, i.jsx)("div", { className: eA.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(eS, {
              onExpand: t,
              className: e ? eA.tx : void 0,
              title: eg.intl.string(eg.t["7BlVIs"]),
              description: u,
              "aria-label": eg.intl.string(eg.t["7BlVIs"]),
              action: (0, i.jsx)(A.DUT, {
                  onClick: (e) => eC(e),
                  children: (0, i.jsx)(A.dOG, { checked: n, disabled: a, onChange: (e) => d(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: eA.SC,
                      children: (0, i.jsx)(A.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eg.intl.string(eg.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(A.IpV, {
                      className: eA.XG,
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
    return (0, M.X4)(b.A.USER_SETTINGS)
        ? (0, i.jsx)(eE, {
              title: eg.intl.string(eg.t["z4/l+V"]),
              description: eg.intl.string(eg.t["3aZq/0"]),
              action: (0, i.jsx)(A.Button, {
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
        [a, r] = (0, _.yK)([v.Ay], () => [v.Ay.canShowAdminWarning, v.Ay.getVisibleGame()], []),
        o = (0, W.NP)(),
        d = null != r && r.elevated && a && !o,
        u = !(0, en.DV)(n?.shortcut ?? []);
    return (0, i.jsx)("div", {
        className: eA.hc,
        children: (0, i.jsxs)("div", {
            className: eA.eH,
            children: [
                (0, i.jsxs)("div", {
                    className: eA.Bu,
                    children: [
                        (0, i.jsx)(A.Text, {
                            variant: t ? "text-md/semibold" : "text-md/medium",
                            color: "text-strong",
                            children: eg.intl.string(eg.t.VsAZcC),
                        }),
                        d &&
                            (0, i.jsx)(A.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eA.y7,
                                children: eg.intl.string(eg.t.NsowVa),
                            }),
                        u &&
                            (0, i.jsx)(A.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: eA.y7,
                                children: eg.intl.string(eg.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: eA.IH,
                    children: (0, i.jsx)(T.A, {
                        disabled: s && l,
                        defaultValue: null != n ? n.shortcut : [],
                        onChange: function (e) {
                            c()(null != n, "Keybind should never be undefined"), p.A.setKeybind({ ...n, shortcut: e });
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
                let { showNowPlayingForDifferentGames: e } = (0, M.M8)(
                        "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                    ),
                    t = (0, _.bG)([U.A], () => U.A.isNotificationDisabledBySetting(L.M.NOW_PLAYING));
                return !!e && !t;
            },
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
}
function eP() {
    let { showNowPlayingForDifferentGames: e } = (0, M.M8)("OverlayV3NowPlayingDifferentGamesNotificationSetting"),
        t = (0, _.bG)([U.A], () => U.A.getDisabledNotifications()),
        n = eL(e && !t.has(L.M.NOW_PLAYING));
    return (0, i.jsxs)("div", {
        className: eA.AO,
        children: [
            (0, i.jsx)(A.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: eg.intl.string(eg.t.xOE5bA),
            }),
            n.map((e) => {
                let n;
                return (0, i.jsxs)(
                    "div",
                    {
                        className: eA.vx,
                        children: [
                            (0, i.jsxs)("div", {
                                className: eA.LS,
                                children: [
                                    (0, i.jsx)(A.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: eg.intl.string(e.title),
                                    }),
                                    (0, i.jsx)(A.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eg.intl.string(e.description),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(A.dOG, {
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
        voiceState: new J.A({
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
function eM(e) {
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
        x = [new Map(g.map((e) => [e.user.id, e])), g.map((e) => e.user.id)],
        p = (0, i.jsx)(A.NPJ, {
            theme: em.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: a()(eA.Y5, e),
                    children: [
                        (0, i.jsx)("div", {
                            className: eA.kJ,
                            children: (0, i.jsx)(z.DH, {
                                id: "voice-widget",
                                title: eg.intl.string(eg.t.KNJ6Vq),
                                channel: (0, Z.createChannelRecord)({
                                    id: "123",
                                    name: "Test Channel",
                                    type: em.rbe.GUILD_VOICE,
                                    guild_id: "456",
                                }),
                                overlayVoiceStates: x,
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
                            className: eA.R$,
                            children: [
                                (0, i.jsx)(Y.Pl, { children: eg.intl.string(eg.t.KNJ6Vq) }),
                                (0, i.jsx)(Y.CS, {}),
                                (0, i.jsx)(Y.O0, { id: u?.id ?? "voice-widget", pinned: u?.pinned ?? !1 }),
                            ],
                        }),
                    ],
                }),
        });
    return n ? p : (0, i.jsx)("div", { className: eA.F9, children: p });
}
function eG() {
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
        className: eA.ri,
        children: [
            (0, i.jsx)(A.l6P, {
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
            (0, i.jsx)(A.l6P, {
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
            (0, i.jsx)(eM, { isLegacySettings: !0 }),
            (0, i.jsx)(A.l6P, {
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
                className: eA.xJ,
                children: (0, i.jsx)(A.Apm, {
                    label: eg.intl.string(eg.t["X/Uyzc"]),
                    initialValue: l,
                    onValueRender: (e) => (e < ep ? eg.intl.string(eg.t.nrUzFL) : `${Math.floor(e)}`),
                    minValue: ep - 1,
                    maxValue: eh,
                    onValueChange: function (e) {
                        null != s &&
                            (e < ep
                                ? (0, h.cC)(s.id, { voiceStatesMaxShown: -1 })
                                : (0, h.cC)(s.id, { voiceStatesMaxShown: Math.floor(e) }));
                    },
                    markers: ef,
                    barStyles: { background: A.LU0.colors.BACKGROUND_MOD_STRONG.css },
                    fillStyles: { background: A.LU0.colors.BACKGROUND_BRAND.css },
                    onMarkerRender: (e) => (e < ep ? eg.intl.string(eg.t.nrUzFL) : `${Math.floor(e)}`),
                }),
            }),
        ],
    });
}
function ek(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        l = n?.id,
        a = (0, _.bG)([U.A], () => U.A.isLimitedInteractionOverrideEnabled(l), [l]),
        r = s.useMemo(() => null != t && (0, k.qJ)(t.pid), [t]),
        o = (0, _.bG)([es.default], () => es.default.disableClickableRegions);
    return (0, i.jsxs)("div", {
        className: eA.U$,
        children: [
            (0, i.jsx)(eR, { isLegacySettings: !0 }),
            null != l &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: eA.yB,
                            children: [
                                (0, i.jsx)(A.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: eg.intl.string(eg.t.wgVQND),
                                }),
                                (0, i.jsx)(A.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: eg.intl.string(eg.t["5SsyF5"]),
                                }),
                            ],
                        }),
                        (0, i.jsx)(A.dOG, {
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
                        className: eA.yB,
                        children: [
                            (0, i.jsx)(A.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: eg.intl.string(eg.t["+eFXxq"]),
                            }),
                            (0, i.jsx)(A.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eg.intl.string(eg.t.kivMAp),
                            }),
                        ],
                    }),
                    (0, i.jsx)(A.dOG, {
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
function eU() {
    let e,
        { runningGame: t, runningGameApplication: n } = (0, I.A)(),
        s = (0, _.bG)([et.default], () => et.default.getCurrentUser());
    return (
        (0, S.Ay)(() => {
            if (er.isPlatformEmbedded) return (0, j.a2)(), j.e0;
        }),
        ((e = eT(ex)),
        m().isEqual(e, ex) || (el.default.track(em.HAw.OVERLAY_SETTINGS_UPDATED, e), (ex = e)),
        null == s)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(eu.A, {
                          title: eg.intl.string(eg.t["9cb1Uz"]),
                          children: [
                              (0, i.jsxs)("div", {
                                  className: eA.U$,
                                  children: [
                                      (0, i.jsx)(eN, {}),
                                      (0, i.jsx)(ey, {}),
                                      (0, i.jsx)(ej, {}),
                                      (0, i.jsx)(eO, {}),
                                  ],
                              }),
                              (0, i.jsx)("div", { className: eA.Ri }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(ek, { runningGame: t, runningGameApplication: n }),
                              (0, i.jsx)("div", { className: eA.Ri }),
                          ],
                      }),
                      (0, i.jsxs)(A.D0$, {
                          label: eg.intl.string(eg.t.r1TZfh),
                          children: [(0, i.jsx)(eG, {}), (0, i.jsx)("div", { className: eA.Ri })],
                      }),
                      (0, i.jsx)(eP, {}),
                  ],
              })
    );
}
