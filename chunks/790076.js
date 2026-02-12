n.d(t, {
    Ay: () => eY,
    DA: () => eI,
    F: () => ew,
    F1: () => eD,
    G6: () => eT,
    Gj: () => eL,
    Gk: () => eM,
    PP: () => eS,
    VQ: () => eV,
    fE: () => eP,
    nR: () => eO,
    ze: () => eG,
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
    A = n(554146),
    g = n(990078),
    h = n(397927),
    x = n(544420),
    p = n(97260),
    E = n(391973),
    C = n(684013),
    T = n(117178),
    S = n(56562),
    I = n(964486),
    f = n(793574),
    N = n(587895),
    b = n(429913),
    j = n(379848),
    v = n(15285),
    O = n(286237),
    R = n(843402),
    y = n(769015),
    P = n(496885),
    L = n(810412),
    D = n(93465),
    M = n(41984),
    G = n(589051),
    U = n(833551),
    k = n(515183),
    V = n(592598),
    H = n(395011),
    w = n(663677),
    B = n(682763),
    Y = n(237984),
    F = n(897720),
    z = n(393172),
    W = n(968898),
    K = n(847521),
    Z = n(942405),
    q = n(824189),
    X = n(95701),
    J = n(427157),
    Q = n(288737),
    $ = n(760751),
    ee = n(555528),
    et = n(189081),
    en = n(287809),
    ei = n(532624),
    es = n(242286),
    ea = n(256415),
    el = n(954571),
    er = n(403362),
    eo = n(723702),
    ec = n(350535),
    ed = n(9302),
    eu = n(780964),
    e_ = n(790174),
    em = n(652215),
    eA = n(49999),
    eg = n(672396);
n(392164);
var eh = n(985018),
    ex = n(202942),
    ep = n(130324),
    eE = n(966040);
let eC = ef(null),
    eT = 1,
    eS = 25,
    eI = [0, 5, 10, 15, 20, 25];
function ef(e) {
    let t = ea.default.getNotificationPositionMode(),
        n = t !== em.G6Q.DISABLED,
        i = ei.Ay.getOverlayKeybind(),
        s = ei.Ay.getOverlayChatKeybind();
    return {
        enabled: es.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: V.A.isNotificationDisabled(eg.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ec.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, ec.dI)(s.shortcut) : null,
        text_opacity_slider: ea.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? es.default.enabled,
    };
}
function eN(e) {
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
        className: l()(ex.HS, _),
        children: [
            (0, i.jsxs)(h.sqX, {
                "aria-label": u,
                onClick: d,
                children: [
                    null != t && (0, i.jsx)("div", { className: ex.x_, children: t }),
                    (0, i.jsxs)("div", {
                        className: ex.rN,
                        children: [
                            null != n && (0, i.jsx)("div", { className: ex.$t, children: n }),
                            (0, i.jsxs)("div", {
                                className: ex.c8,
                                children: [
                                    (0, i.jsx)(h.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: ex.SZ,
                                        children: s,
                                    }),
                                    null != a &&
                                        (0, i.jsx)(h.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: a,
                                        }),
                                    null != o &&
                                        (0, i.jsx)(h.Text, {
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
            (0, i.jsx)("div", { className: ex.Om, children: c }),
        ],
    });
}
function eb(e) {
    let { children: t, className: n, onExpand: a, ...r } = e,
        [o, c] = s.useState(!1);
    return (0, i.jsx)(h.Nt8, {
        className: ex.uR,
        collapsibleContent: (0, i.jsx)("div", { className: ex.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(eN, {
                ...r,
                onClick: (e) => {
                    var n;
                    c((n = !o)), a?.(n), t?.(e);
                },
                className: l()(ex.AC, n),
                action: (0, i.jsxs)("div", {
                    className: ex.rc,
                    children: [
                        r.action,
                        o
                            ? (0, i.jsx)(h.abt, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, i.jsx)(h._BQ, {
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
let ej = new Set([
        M.AR.INITIALIZING,
        M.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        M.AR.WAITING_FOR_MODULE_TRACKING,
        M.AR.WAITING_FOR_OVERLAY_OPEN,
        M.AR.WAITING_FOR_POPOUT_OPEN,
        M.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
        M.AR.WAITING_FOR_REACT_INITIALIZATION,
        M.AR.WAITING_FOR_PID_FOCUS,
        M.AR.WAITING_FOR_SUCCESSFUL_SHOW,
    ]),
    ev = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eO() {
    let { runningGame: e, runningGameApplication: t } = (0, O.A)(),
        n = e?.pid,
        a = (0, m.bG)(
            [U.default],
            () => (null == e || null == n ? null : U.default.getTrackedGameByPid(n)),
            [e, n],
            o(),
        ),
        { enabledLegacy: l, enabledOOP: r } = (0, m.cf)(
            [$.A, et.A],
            () =>
                null == e && null == a
                    ? { enabledLegacy: !1, enabledOOP: !1 }
                    : null == e
                      ? { enabledLegacy: a?.legacyEnabled ?? !1, enabledOOP: a?.oopEnabled ?? !1 }
                      : (0, v.hw)(e, !1, [$.A, et.A]),
            [e, a],
        ),
        c = (0, m.bG)([v.Ay, $.A, et.A], () => (null == e ? null : (0, v.xU)(e, v.Ay, $.A, et.A)), [e], o()),
        [d, u] = s.useState(r),
        [_, A] = s.useState(l),
        [p, E] = s.useState(!1);
    s.useEffect(() => {
        u(r), A(l);
    }, [r, l]);
    let T = !(0, ed.supportsLegacy)(),
        f = !(0, ed.supportsOutOfProcess)(),
        { legacyEnabled: N, oopEnabled: b } = (0, m.cf)([U.default], () => U.default.getGlobalEnabledStatus()),
        j = (t, n) => {
            if (null == e) return;
            let i = !1,
                s = !1;
            switch (n) {
                case L.OverlayToggledClientSettingType.LEGACY_GAME:
                    A(t), x.A.toggleOverlay(e, t, d), (i = !t && _);
                    break;
                case L.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), x.A.toggleOverlay(e, _, t), (s = !t && d);
                    break;
                case L.OverlayToggledClientSettingType.LEGACY:
                    C.A.setEnabled(t, b), (0, L.Q3)(t, L.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case L.OverlayToggledClientSettingType.OOP:
                    C.A.setEnabled(N, t), (0, L.Q3)(t, L.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (i || s) &&
                (0, w.L)(
                    i ? L.OverlayToggledClientSettingType.LEGACY_GAME : L.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        },
        R = T && f,
        D = !N && !b,
        G = !d && !N && _ && !T,
        k = !_ && !b && d && !f,
        V = a?.overlayMethod === M.Ue.Disabled,
        H = a?.state === M.AR.OVERLAY_RENDERING && !V,
        B = a?.state != null && ej.has(a.state) && !V,
        Y = a?.overlayMethod === M.Ue.OutOfProcess,
        F = a?.overlayMethod === M.Ue.OutOfProcessLimitedInteraction,
        z = a?.overlayMethod === M.Ue.Hook,
        W = a?.state === M.AR.OVERLAY_CRASHED || a?.state === M.AR.OVERLAY_CRASHED_DISABLED,
        K = !d && !_,
        [Z, X] = (() => {
            switch (!0) {
                case H && Y:
                    return [
                        eh.intl.format(eh.t.hFVBIg, {
                            overlayMethod: eh.intl.string(eh.t.a3eXSw),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    h.Text,
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
                        eh.intl.format(eh.t.hFVBIg, {
                            overlayMethod: eh.intl.string(eh.t["506Aba"]),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    h.Text,
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
                        eh.intl.format(eh.t.hFVBIg, {
                            overlayMethod: eh.intl.string(eh.t.bvlpDR),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    h.Text,
                                    { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                    t,
                                );
                            },
                        }),
                        (function () {
                            switch (!0) {
                                case a?.fullscreenType !== S.aI.BORDERLESS_FULLSCREEN:
                                    return eh.intl.string(eh.t.mJmbeC);
                                case f:
                                    return eh.intl.string(eh.t.C7bLTQ);
                                case !a?.oopEnabled:
                                    return eh.intl.string(eh.t.WiY24u);
                                case !b:
                                    return eh.intl.string(eh.t.cAFVsL);
                                case !a?.supportsOutOfProcess:
                                    return eh.intl.string(eh.t.XcGEcs);
                                default:
                                    return eh.intl.string(eh.t.bJXH2v);
                            }
                        })(),
                    ];
                case W:
                    return [eh.intl.string(eh.t.OFC2aw), null];
                case R:
                    return [eh.intl.string(eh.t.m7X4az), null];
                case D:
                    return [eh.intl.string(eh.t["9DUS5l"]), null];
                case K:
                    return [eh.intl.string(eh.t.nQ9EdJ), null];
                case G:
                case k:
                    return [eh.intl.string(eh.t.VWUn0a), null];
                case B:
                    if (Y) return [eh.intl.string(eh.t["s8+CFq"]), null];
                    if (z) return [eh.intl.string(eh.t.JEEdqt), null];
                    if (F) return [eh.intl.string(eh.t.pzBMwY), null];
                    return [eh.intl.string(eh.t["2Xhy9k"]), null];
                case null == a:
                    return [eh.intl.string(eh.t.vwHPRi), null];
                case V: {
                    let e = a?.fullscreenType === S.aI.FULLSCREEN ? eh.intl.string(eh.t.mJmbeC) : null;
                    return [eh.intl.string(eh.t.VPW4XY), e];
                }
                default:
                    return [eh.intl.string(eh.t.ONovP5), null];
            }
        })();
    (0, I.Ay)(() => {
        x.A.getDetectableGames();
    });
    let [J, Q] = s.useMemo(
        () =>
            B
                ? ["text-muted", h.LU0.colors.TEXT_MUTED.css]
                : H && F
                  ? ["text-feedback-warning", h.LU0.colors.TEXT_FEEDBACK_WARNING.css]
                  : H && Y
                    ? ["text-feedback-positive", h.LU0.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : H && z
                      ? ["text-strong", h.LU0.colors.TEXT_STRONG.css]
                      : ["interactive-text-default", h.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css],
        [B, H, F, Y, z],
    );
    return null == e
        ? null
        : (0, i.jsxs)(eb, {
              onExpand: E,
              className: p ? ex.tx : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      t?.name ?? c?.name ?? e?.gameName ?? "",
                      null != c && c.verified
                          ? (0, i.jsx)(g.m, {
                                text: eh.intl.string(eh.t["4PJP5p"]),
                                children: (0, i.jsx)(P.A, {
                                    size: 16,
                                    color: h.LU0.colors.BACKGROUND_BRAND.css,
                                    children: (0, i.jsx)(h.Uzd, {
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                        color: h.LU0.colors.WHITE.css,
                                    }),
                                }),
                            })
                          : null,
                  ],
              }),
              description: Z,
              hint: null != X ? X : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      H || B ? (0, i.jsx)(h.kN9, { size: "xxs", color: Q }) : (0, i.jsx)("div", { className: ex.W4 }),
                      (0, i.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: J,
                          children: eh.intl.string(eh.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, i.jsx)(y.A, { game: t, pid: e?.pid, size: y.M.MEDIUM }),
              "aria-label": eh.intl.string(eh.t["87O5GC"]),
              action: (0, i.jsx)(h.DUT, {
                  onClick: (e) => ev(e),
                  children: (0, i.jsx)(h.dOG, {
                      checked: (d && b) || (_ && N),
                      disabled: R,
                      onChange: (t) => {
                          ((t, n) => {
                              if (null == e) return;
                              let i = !1,
                                  s = !1;
                              switch (n) {
                                  case "game":
                                      x.A.toggleOverlay(e, t, t), A(t), u(t), (i = !t && _), (s = !t && d);
                                      break;
                                  case "global":
                                      C.A.setEnabled(t, t), (i = !t && N), (s = !t && b);
                                      break;
                                  case "both":
                                      C.A.setEnabled(t, t),
                                          x.A.toggleOverlay(e, t, t),
                                          A(t),
                                          u(t),
                                          (i = (!t && N) || (!t && _)),
                                          (s = (!t && b) || (!t && d));
                              }
                              let a = null;
                              i
                                  ? (a =
                                        "game" === n
                                            ? L.OverlayToggledClientSettingType.LEGACY_GAME
                                            : L.OverlayToggledClientSettingType.LEGACY)
                                  : s &&
                                    (a =
                                        "game" === n
                                            ? L.OverlayToggledClientSettingType.OOP_GAME
                                            : L.OverlayToggledClientSettingType.OOP),
                                  null != a && (0, w.L)(a, e.id ?? null);
                          })(
                              t,
                              ((e, t) => {
                                  let n = !t && e,
                                      i = !b && d,
                                      s = !N && _,
                                      a = !d && b,
                                      l = !_ && N;
                                  switch (!0) {
                                      case n && (i || s) && (a || l):
                                          return "both";
                                      case n && (i || s):
                                          return "global";
                                      default:
                                          return "game";
                                  }
                              })(t, (d && b) || (_ && N)),
                          );
                      },
                  }),
              }),
              warning: (0, i.jsx)(q.A, { className: ex.Hh, game: e }),
              children: [
                  (0, i.jsx)(eN, {
                      title: eh.intl.string(eh.t["7BlVIs"]),
                      description: eh.intl.string(eh.t.ndgADE),
                      hint: b ? void 0 : eh.intl.string(eh.t.cAFVsL),
                      "aria-label": eh.intl.string(eh.t["7BlVIs"]),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(h.dOG, {
                                  checked: d && b,
                                  disabled: f,
                                  onChange: (e) => {
                                      e && !b
                                          ? j(e, L.OverlayToggledClientSettingType.OOP)
                                          : j(e, L.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: ex.Kz }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(eN, {
                      title: eh.intl.string(eh.t.BfFpW1),
                      description: eh.intl.string(eh.t.OzInYk),
                      hint: N ? void 0 : eh.intl.string(eh.t["3sYHXm"]),
                      "aria-label": eh.intl.string(eh.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(h.dOG, {
                                  checked: _ && N,
                                  disabled: T,
                                  onChange: (e) => {
                                      e && !N
                                          ? j(e, L.OverlayToggledClientSettingType.LEGACY)
                                          : j(e, L.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: ex.Kz }),
                          ],
                      }),
                  }),
              ],
          });
}
function eR(e) {
    let { game: t, gameApplication: n } = e,
        a = s.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, m.bG)([N.A], () => (null != n ? n : N.A.getApplication(t?.id)), [n, t]);
    return (0, i.jsx)(y.A, { game: l, pid: a, size: y.M.SMALL });
}
function ey(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: a,
            getEnabledFromStatus: l,
            onChange: r,
            clientSettingType: o,
            ariaLabel: c,
        } = e,
        d = (0, m.cf)([v.Ay, $.A, et.A], () => (0, v.xU)(t, v.Ay, $.A, et.A)),
        u = (0, m.cf)([$.A, et.A], () => (0, v.hw)(t, !1, [$.A, et.A]), [t]),
        _ = l(u),
        [A, g] = s.useState(_);
    return (
        s.useEffect(() => {
            g(_);
        }, [_]),
        (0, i.jsx)(eN, {
            title: t.name,
            icon: (0, i.jsx)(eR, { game: d, gameApplication: n }),
            "aria-label": c,
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(h.dOG, {
                        checked: A,
                        disabled: a,
                        onChange: (e) => {
                            let n;
                            return (n = !e && A), void (g(e), r(e, d, u), n && (0, w.L)(o, d.id ?? t?.id ?? null));
                        },
                    }),
                    (0, i.jsx)("div", { className: ex.Kz }),
                ],
            }),
        })
    );
}
function eP() {
    let [e, t] = s.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, m.cf)([U.default], () => U.default.getGlobalEnabledStatus()),
        l = (0, m.yK)([v.Ay], () => v.Ay.getGamesSeen(!0)).filter((e) => !(0, K.n1)(e)),
        r = (0, b.A)(l.map((e) => e.id)),
        o = !(0, ed.supportsLegacy)(),
        c = (e) => {
            C.A.setEnabled(e, a);
            let t = v.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, L.Q3)(e, L.OverlayToggledClientSettingType.LEGACY, t),
                !e && n && (0, w.L)(L.OverlayToggledClientSettingType.LEGACY, t);
        },
        d = (e, t, n) => {
            let { enabledOOP: i } = n;
            x.A.toggleOverlay(t, e, i);
        },
        u = s.useMemo(
            () =>
                (0, ed.supportsLegacy)()
                    ? o
                        ? eh.intl.string(eh.t.r9jEVw)
                        : eh.intl.string(eh.t.OzInYk)
                    : eh.intl.string(eh.t["8Ox6/E"]),
            [o],
        );
    return 0 === l.length
        ? (0, i.jsx)(eN, {
              title: eh.intl.string(eh.t.BfFpW1),
              description: u,
              "aria-label": eh.intl.string(eh.t.BfFpW1),
              className: ex.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(h.dOG, { checked: n, disabled: o, onChange: (e) => c(e) }),
                      eg.OX && (0, i.jsx)("div", { className: ex.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(eb, {
              onExpand: t,
              className: e ? ex.tx : void 0,
              title: eh.intl.string(eh.t.BfFpW1),
              description: u,
              "aria-label": eh.intl.string(eh.t.BfFpW1),
              action: (0, i.jsx)(h.DUT, {
                  onClick: (e) => ev(e),
                  children: (0, i.jsx)(h.dOG, { checked: n, disabled: o, onChange: (e) => c(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: ex.SC,
                      children: (0, i.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eh.intl.string(eh.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(h.IpV, {
                      className: ex.XG,
                      children: l.map((e, t) =>
                          (0, i.jsx)(
                              ey,
                              {
                                  rawGame: e,
                                  clientSettingType: L.OverlayToggledClientSettingType.LEGACY_GAME,
                                  supportDisabled: o,
                                  gameApplication: r[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: eh.intl.format(eh.t.hvPYsF, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eL() {
    let [e, t] = s.useState(!1),
        { oopEnabled: n, legacyEnabled: a } = (0, m.cf)([U.default], () => U.default.getGlobalEnabledStatus()),
        l = !(0, ed.supportsOutOfProcess)(),
        r = (0, m.yK)([v.Ay], () => v.Ay.getGamesSeen(!0)).filter((e) => !(0, K.n1)(e)),
        o = (0, b.A)(r.map((e) => e.id)),
        c = (e) => {
            let t = !e && n;
            C.A.setEnabled(a, e);
            let i = v.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, L.Q3)(e, L.OverlayToggledClientSettingType.OOP, i),
                t && (0, w.L)(L.OverlayToggledClientSettingType.OOP, i);
        },
        d = (e, t, n) => {
            let { enabledLegacy: i } = n;
            x.A.toggleOverlay(t, e, i);
        },
        u = s.useMemo(
            () =>
                eg.OX ? (l ? eh.intl.string(eh.t.C7bLTQ) : eh.intl.string(eh.t.ndgADE)) : eh.intl.string(eh.t.m7X4az),
            [l],
        );
    return 0 === r.length
        ? (0, i.jsx)(eN, {
              title: eh.intl.string(eh.t["7BlVIs"]),
              description: u,
              "aria-label": eh.intl.string(eh.t["7BlVIs"]),
              className: ex.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(h.dOG, { checked: n, disabled: l, onChange: (e) => c(e) }),
                      eg.OX && (0, i.jsx)("div", { className: ex.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(eb, {
              onExpand: t,
              className: e ? ex.tx : void 0,
              title: eh.intl.string(eh.t["7BlVIs"]),
              description: u,
              "aria-label": eh.intl.string(eh.t["7BlVIs"]),
              action: (0, i.jsx)(h.DUT, {
                  onClick: (e) => ev(e),
                  children: (0, i.jsx)(h.dOG, { checked: n, disabled: l, onChange: (e) => c(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: ex.SC,
                      children: (0, i.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: eh.intl.string(eh.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(h.IpV, {
                      className: ex.XG,
                      children: r.map((e, t) =>
                          (0, i.jsx)(
                              ey,
                              {
                                  rawGame: e,
                                  clientSettingType: L.OverlayToggledClientSettingType.OOP_GAME,
                                  gameApplication: o[t],
                                  supportDisabled: l,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: d,
                                  ariaLabel: eh.intl.format(eh.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eD() {
    return (0, G.X4)(f.A.USER_SETTINGS)
        ? (0, i.jsx)(eN, {
              title: eh.intl.string(eh.t["z4/l+V"]),
              description: eh.intl.string(eh.t["3aZq/0"]),
              action: (0, i.jsx)(h.Button, {
                  variant: "primary",
                  text: eh.intl.string(eh.t.s2nVhG),
                  onClick: () => {
                      (0, Y.b)(f.A.USER_SETTINGS, em.BRT.APP);
                  },
              }),
              "aria-label": eh.intl.string(eh.t["z4/l+V"]),
          })
        : null;
}
function eM(e) {
    let { isLegacySettings: t = !1 } = e,
        n = (0, m.bG)([ei.Ay], () => ei.Ay.getOverlayKeybind()),
        s = !(0, ed.supportsLegacy)(),
        a = !(0, ed.supportsOutOfProcess)(),
        [l, r] = (0, m.yK)([v.Ay], () => [v.Ay.canShowAdminWarning, v.Ay.getVisibleGame()], []),
        o = (0, Z.NP)(),
        c = null != r && r.elevated && l && !o,
        u = !(0, ei.DV)(n?.shortcut ?? []);
    return (0, i.jsx)("div", {
        className: ex.hc,
        children: (0, i.jsxs)("div", {
            className: ex.eH,
            children: [
                (0, i.jsxs)("div", {
                    className: ex.Bu,
                    children: [
                        (0, i.jsx)(h.Text, {
                            variant: t ? "text-md/semibold" : "text-md/medium",
                            color: "text-strong",
                            children: eh.intl.string(eh.t.VsAZcC),
                        }),
                        c &&
                            (0, i.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: ex.y7,
                                children: eh.intl.string(eh.t.NsowVa),
                            }),
                        u &&
                            (0, i.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: ex.y7,
                                children: eh.intl.string(eh.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: ex.IH,
                    children: (0, i.jsx)(T.A, {
                        disabled: s && a,
                        defaultValue: null != n ? n.shortcut : [],
                        onChange: function (e) {
                            d()(null != n, "Keybind should never be undefined"), p.A.setKeybind({ ...n, shortcut: e });
                        },
                    }),
                }),
            ],
        }),
    });
}
function eG(e) {
    return [
        {
            title: eh.t.eVE4LX,
            description: eh.t["72WNqk"],
            disabledSetting: D.M.TEXT_CHAT,
            key: eu.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
        },
        {
            title: eh.t.oifnSh,
            description: eh.t.bgU5r0,
            disabledSetting: D.M.WELCOME_GENERAL,
            key: eu.X.OVERLAY_NOTIFICATIONS_WELCOME,
        },
        {
            title: eh.t.hqsZJW,
            description: eh.t.kHjdqc,
            disabledSetting: D.M.GO_LIVE_NUDGE,
            key: eu.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
        },
        {
            title: eh.t.sop3rn,
            description: eh.t.pjgffc,
            disabledSetting: D.M.GAME_ACTIVITY,
            key: eu.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
        },
        {
            title: eh.t["2QVhbb"],
            description: eh.t.wQ4ilB,
            disabledSetting: D.M.NOW_PLAYING,
            key: eu.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
        },
        e && {
            title: eh.t["5/21FT"],
            description: eh.t.EIzwfA,
            disabledSetting: D.M.FRIEND_STREAM_WATCH_NUDGE,
            key: eu.X.OVERLAY_NOTIFICATIONS_FRIEND_STREAM_WATCH,
            usePredicate: () => {
                let { enabled: e } = (0, G.QC)("OverlayV3StreamWatchNudge");
                return e;
            },
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
}
function eU() {
    let { enabled: e } = (0, G.QC)("OverlayV3StreamWatchNudge"),
        t = eG(e),
        n = (0, m.bG)([V.A], () => V.A.getDisabledNotifications());
    return (0, i.jsxs)("div", {
        className: ex.AO,
        children: [
            (0, i.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: eh.intl.string(eh.t.xOE5bA),
            }),
            t.map((e) => {
                let t;
                return (0, i.jsxs)(
                    "div",
                    {
                        className: ex.vx,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ex.LS,
                                children: [
                                    (0, i.jsx)(h.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: eh.intl.string(e.title),
                                    }),
                                    (0, i.jsx)(h.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eh.intl.string(e.description),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(h.dOG, {
                                checked: !n.has(e.disabledSetting),
                                onChange:
                                    ((t = e.disabledSetting),
                                    (e) => {
                                        C.A.setNotificationDisabledSetting(t, !e);
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
function ek(e) {
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
        user: new J.A({ id: s, username: e }),
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
function eV(e) {
    let t,
        { isLegacySettings: n = !1 } = e,
        a = (0, m.bG)([en.default], () => en.default.getCurrentUser()),
        {
            avatarSizeMode: r,
            displayNameMode: o,
            displayUserMode: c,
        } = (0, m.cf)([ea.default], () => ({
            avatarSizeMode: ea.default.getAvatarSizeMode(),
            displayNameMode: ea.default.getDisplayNameMode(),
            displayUserMode: ea.default.getDisplayUserMode(),
        })),
        [d] = s.useState(() => [
            ek(eh.intl.string(eh.t.C0ZDvo), !0, !1),
            ek(eh.intl.string(eh.t.iOtj8E), !1, !1, !0),
            ek(eh.intl.string(eh.t["0oqNgL"]), !1, !0),
        ]),
        u = (0, m.bG)([H.A, ee.A], () => {
            let e = H.A.getWidgetByType(em.uss.VOICE_V3);
            if (null == e) return null;
            let t = ee.A.getWidget(e.id);
            return null != t && (0, F.ZO)(t) ? t : null;
        }),
        _ = u?.meta?.voiceStatesMaxShown ?? 8,
        A = [null != a ? (((t = ek(a.username)).user = a), t) : null, ...d].filter(er.Vq),
        g = [new Map(A.map((e) => [e.user.id, e])), A.map((e) => e.user.id)],
        x = (0, i.jsx)(h.NPJ, {
            theme: em.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: l()(ex.Y5, e),
                    children: [
                        (0, i.jsx)("div", {
                            className: ex.kJ,
                            children: (0, i.jsx)(z.DH, {
                                id: "voice-widget",
                                title: eh.intl.string(eh.t.KNJ6Vq),
                                channel: (0, X.createChannelRecord)({
                                    id: "123",
                                    name: "Test Channel",
                                    type: em.rbe.GUILD_VOICE,
                                    guild_id: "456",
                                }),
                                overlayVoiceStates: g,
                                displayNameMode: o,
                                displayUserMode: c,
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
                                maxDisplayedVoiceStates: _,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: ex.R$,
                            children: [
                                (0, i.jsx)(W.Pl, { children: eh.intl.string(eh.t.KNJ6Vq) }),
                                (0, i.jsx)(W.CS, {}),
                                (0, i.jsx)(W.O0, { id: u?.id ?? "voice-widget", pinned: u?.pinned ?? !1 }),
                            ],
                        }),
                    ],
                }),
        });
    return n ? x : (0, i.jsx)("div", { className: ex.F9, children: x });
}
function eH() {
    let {
            avatarSizeMode: e,
            displayNameMode: t,
            displayUserMode: n,
        } = (0, m.cf)([ea.default], () => ({
            avatarSizeMode: ea.default.getAvatarSizeMode(),
            displayNameMode: ea.default.getDisplayNameMode(),
            displayUserMode: ea.default.getDisplayUserMode(),
        })),
        s = (0, m.bG)([H.A, ee.A], () => {
            let e = H.A.getWidgetByType(em.uss.VOICE_V3);
            if (null == e) return null;
            let t = ee.A.getWidget(e.id);
            return null != t && (0, F.ZO)(t) ? t : null;
        }),
        a = s?.meta?.voiceStatesMaxShown ?? 8;
    return (0, i.jsxs)("div", {
        className: ex.ri,
        children: [
            (0, i.jsx)(h.l6P, {
                label: eh.intl.string(eh.t.dnvZSg),
                options: [
                    { id: "large", label: eh.intl.string(eh.t.YcOxtr), value: em.OSZ.LARGE },
                    { id: "small", label: eh.intl.string(eh.t.BKIKqx), value: em.OSZ.SMALL },
                ],
                onSelectionChange: C.A.setAvatarSizeMode,
                value: e,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)(h.l6P, {
                label: eh.intl.string(eh.t.J0dpcB),
                options: [
                    { id: "always", label: eh.intl.string(eh.t.nBmDrT), value: em.pwA.ALWAYS },
                    {
                        id: "only-while-speaking",
                        label: eh.intl.string(eh.t["2OvIZY"]),
                        value: em.pwA.ONLY_WHILE_SPEAKING,
                    },
                    { id: "never", label: eh.intl.string(eh.t.ekjlPL), value: em.pwA.NEVER },
                ],
                onSelectionChange: C.A.setDisplayNameMode,
                value: t,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)(eV, { isLegacySettings: !0 }),
            (0, i.jsx)(h.l6P, {
                label: eh.intl.string(eh.t.swsWWC),
                options: [
                    { id: "always", label: eh.intl.string(eh.t.nBmDrT), value: em.f5z.ALWAYS },
                    {
                        id: "only-while-speaking",
                        label: eh.intl.string(eh.t["2OvIZY"]),
                        value: em.f5z.ONLY_WHILE_SPEAKING,
                    },
                ],
                onSelectionChange: C.A.setDisplayUserMode,
                value: n,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)("div", {
                className: ex.xJ,
                children: (0, i.jsx)(h.Apm, {
                    label: eh.intl.string(eh.t["X/Uyzc"]),
                    initialValue: a,
                    onValueRender: (e) => (e < eT ? eh.intl.string(eh.t.nrUzFL) : `${Math.floor(e)}`),
                    minValue: eT - 1,
                    maxValue: eS,
                    onValueChange: function (e) {
                        null != s &&
                            (e < eT
                                ? (0, E.cC)(s.id, { voiceStatesMaxShown: -1 })
                                : (0, E.cC)(s.id, { voiceStatesMaxShown: Math.floor(e) }));
                    },
                    markers: eI,
                    barStyles: { background: h.LU0.colors.BACKGROUND_MOD_STRONG.css },
                    fillStyles: { background: h.LU0.colors.BACKGROUND_BRAND.css },
                    onMarkerRender: (e) => (e < eT ? eh.intl.string(eh.t.nrUzFL) : `${Math.floor(e)}`),
                }),
            }),
        ],
    });
}
function ew(e) {
    let { showDivider: t = !1 } = e,
        [n, s] = (0, j.kn)([A.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, I.Ay)(() => () => {
        s(eA.i.AUTO_DISMISS);
    }),
    n !== A.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, i.jsxs)("div", {
              className: ex.xC,
              children: [
                  (0, i.jsx)("div", {
                      children: (0, i.jsx)("img", { src: ep.A, alt: eh.intl.string(eh.t.mdXZh1), className: ex.tl }),
                  }),
                  (0, i.jsx)("div", {
                      children: (0, i.jsxs)("div", {
                          className: ex.vJ,
                          children: [
                              (0, i.jsx)(h.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: eh.intl.string(eh.t.jzjJQg),
                              }),
                              (0, i.jsx)(h.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: eh.intl.string(eh.t["5dOfxb"]),
                              }),
                          ],
                      }),
                  }),
                  (0, i.jsx)("div", {
                      children: (0, i.jsx)("img", { src: eE.A, alt: eh.intl.string(eh.t.mdXZh1), className: ex.lh }),
                  }),
                  (0, i.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: ex.VV,
                      children: (0, i.jsx)(h.Button, {
                          variant: "primary",
                          text: eh.intl.string(eh.t.Q26diF),
                          onClick: () => void s(eA.i.DISMISS),
                      }),
                  }),
                  t ? (0, i.jsx)("div", { className: ex.$x }) : null,
              ],
          });
}
function eB(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        a = n?.id,
        l = (0, m.bG)([V.A], () => V.A.isLimitedInteractionOverrideEnabled(a), [a]),
        r = s.useMemo(() => null != t && (0, k.qJ)(t.pid), [t]),
        o = (0, m.bG)([ea.default], () => ea.default.disableClickableRegions);
    return (0, i.jsxs)("div", {
        className: ex.U$,
        children: [
            (0, i.jsx)(eM, { isLegacySettings: !0 }),
            null != a &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: ex.yB,
                            children: [
                                (0, i.jsx)(h.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: eh.intl.string(eh.t.wgVQND),
                                }),
                                (0, i.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: eh.intl.string(eh.t["5SsyF5"]),
                                }),
                            ],
                        }),
                        (0, i.jsx)(h.dOG, {
                            checked: l || r,
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
                            (0, i.jsx)(h.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: eh.intl.string(eh.t["+eFXxq"]),
                            }),
                            (0, i.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eh.intl.string(eh.t.kivMAp),
                            }),
                        ],
                    }),
                    (0, i.jsx)(h.dOG, {
                        checked: !o,
                        onChange: function () {
                            C.A.setDisableClickableRegions(!o);
                        },
                    }),
                ],
            }),
        ],
    });
}
function eY() {
    let e,
        { runningGame: t, runningGameApplication: n } = (0, O.A)(),
        s = (0, m.bG)([en.default], () => en.default.getCurrentUser());
    return (
        (0, I.Ay)(() => {
            if (eo.isPlatformEmbedded) return (0, R.a2)(), R.e0;
        }),
        ((e = ef(eC)),
        _().isEqual(e, eC) || (el.default.track(em.HAw.OVERLAY_SETTINGS_UPDATED, e), (eC = e)),
        null == s)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(e_.A, {
                          title: eh.intl.string(eh.t["9cb1Uz"]),
                          children: [
                              (0, i.jsx)(ew, { showDivider: !0 }),
                              (0, i.jsxs)("div", {
                                  className: ex.U$,
                                  children: [
                                      (0, i.jsx)(eO, {}),
                                      (0, i.jsx)(eL, {}),
                                      (0, i.jsx)(eP, {}),
                                      (0, i.jsx)(eD, {}),
                                  ],
                              }),
                              (0, i.jsx)("div", { className: ex.Ri }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(eB, { runningGame: t, runningGameApplication: n }),
                              (0, i.jsx)("div", { className: ex.Ri }),
                          ],
                      }),
                      (0, i.jsxs)(h.D0$, {
                          label: eh.intl.string(eh.t.r1TZfh),
                          children: [(0, i.jsx)(eH, {}), (0, i.jsx)("div", { className: ex.Ri })],
                      }),
                      (0, i.jsx)(eU, {}),
                  ],
              })
    );
}
