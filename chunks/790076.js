n.d(t, {
    Ay: () => eF,
    DA: () => ef,
    F: () => eB,
    F1: () => eM,
    G6: () => eS,
    Gj: () => eD,
    Gk: () => eG,
    PP: () => eI,
    VQ: () => eH,
    fE: () => eL,
    nR: () => eR,
    ze: () => eU,
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
    M = n(206885),
    G = n(41984),
    U = n(589051),
    k = n(833551),
    V = n(515183),
    H = n(592598),
    w = n(395011),
    B = n(663677),
    Y = n(682763),
    F = n(237984),
    z = n(897720),
    W = n(393172),
    K = n(968898),
    Z = n(847521),
    q = n(942405),
    X = n(824189),
    J = n(95701),
    Q = n(427157),
    $ = n(288737),
    ee = n(760751),
    et = n(555528),
    en = n(189081),
    ei = n(287809),
    es = n(532624),
    ea = n(242286),
    el = n(256415),
    er = n(954571),
    eo = n(403362),
    ec = n(723702),
    ed = n(350535),
    eu = n(9302),
    e_ = n(780964),
    em = n(790174),
    eA = n(652215),
    eg = n(49999),
    eh = n(672396);
n(392164);
var ex = n(985018),
    ep = n(202942),
    eE = n(130324),
    eC = n(966040);
let eT = eN(null),
    eS = 1,
    eI = 25,
    ef = [0, 5, 10, 15, 20, 25];
function eN(e) {
    let t = el.default.getNotificationPositionMode(),
        n = t !== eA.G6Q.DISABLED,
        i = es.Ay.getOverlayKeybind(),
        s = es.Ay.getOverlayChatKeybind();
    return {
        enabled: ea.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: H.A.isNotificationDisabled(eh.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ed.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, ed.dI)(s.shortcut) : null,
        text_opacity_slider: el.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? ea.default.enabled,
    };
}
function eb(e) {
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
        className: l()(ep.HS, _),
        children: [
            (0, i.jsxs)(h.sqX, {
                "aria-label": u,
                onClick: d,
                children: [
                    null != t && (0, i.jsx)("div", { className: ep.x_, children: t }),
                    (0, i.jsxs)("div", {
                        className: ep.rN,
                        children: [
                            null != n && (0, i.jsx)("div", { className: ep.$t, children: n }),
                            (0, i.jsxs)("div", {
                                className: ep.c8,
                                children: [
                                    (0, i.jsx)(h.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: ep.SZ,
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
                            (0, i.jsx)("div", { className: ep.a$, children: r }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: ep.Om, children: c }),
        ],
    });
}
function ej(e) {
    let { children: t, className: n, onExpand: a, ...r } = e,
        [o, c] = s.useState(!1);
    return (0, i.jsx)(h.Nt8, {
        className: ep.uR,
        collapsibleContent: (0, i.jsx)("div", { className: ep.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(eb, {
                ...r,
                onClick: (e) => {
                    var n;
                    c((n = !o)), a?.(n), t?.(e);
                },
                className: l()(ep.AC, n),
                action: (0, i.jsxs)("div", {
                    className: ep.rc,
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
let ev = new Set([
        G.AR.INITIALIZING,
        G.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
        G.AR.WAITING_FOR_MODULE_TRACKING,
        G.AR.WAITING_FOR_OVERLAY_OPEN,
        G.AR.WAITING_FOR_POPOUT_OPEN,
        G.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
        G.AR.WAITING_FOR_REACT_INITIALIZATION,
        G.AR.WAITING_FOR_PID_FOCUS,
        G.AR.WAITING_FOR_SUCCESSFUL_SHOW,
    ]),
    eO = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eR() {
    let { runningGame: e, runningGameApplication: t } = (0, O.A)(),
        n = e?.pid,
        a = (0, m.bG)(
            [k.default],
            () => (null == e || null == n ? null : k.default.getTrackedGameByPid(n)),
            [e, n],
            o(),
        ),
        { enabledLegacy: l, enabledOOP: r } = (0, m.cf)(
            [ee.A, en.A],
            () =>
                null == e && null == a
                    ? { enabledLegacy: !1, enabledOOP: !1 }
                    : null == e
                      ? { enabledLegacy: a?.legacyEnabled ?? !1, enabledOOP: a?.oopEnabled ?? !1 }
                      : (0, v.hw)(e, !1, [ee.A, en.A]),
            [e, a],
        ),
        c = (0, m.bG)([v.Ay, ee.A, en.A], () => (null == e ? null : (0, v.xU)(e, v.Ay, ee.A, en.A)), [e], o()),
        [d, u] = s.useState(r),
        [_, A] = s.useState(l),
        [p, E] = s.useState(!1);
    s.useEffect(() => {
        u(r), A(l);
    }, [r, l]);
    let T = !(0, eu.supportsLegacy)(),
        f = !(0, eu.supportsOutOfProcess)(),
        { legacyEnabled: N, oopEnabled: b } = (0, m.cf)([k.default], () => k.default.getGlobalEnabledStatus()),
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
                (0, B.L)(
                    i ? L.OverlayToggledClientSettingType.LEGACY_GAME : L.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        },
        R = T && f,
        D = !N && !b,
        M = !d && !N && _ && !T,
        U = !_ && !b && d && !f,
        V = a?.overlayMethod === G.Ue.Disabled,
        H = a?.state === G.AR.OVERLAY_RENDERING && !V,
        w = a?.state != null && ev.has(a.state) && !V,
        Y = a?.overlayMethod === G.Ue.OutOfProcess,
        F = a?.overlayMethod === G.Ue.OutOfProcessLimitedInteraction,
        z = a?.overlayMethod === G.Ue.Hook,
        W = a?.state === G.AR.OVERLAY_CRASHED || a?.state === G.AR.OVERLAY_CRASHED_DISABLED,
        K = !d && !_,
        [Z, q] = (() => {
            switch (!0) {
                case H && Y:
                    return [
                        ex.intl.format(ex.t.hFVBIg, {
                            overlayMethod: ex.intl.string(ex.t.a3eXSw),
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
                        ex.intl.format(ex.t.hFVBIg, {
                            overlayMethod: ex.intl.string(ex.t["506Aba"]),
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
                        ex.intl.format(ex.t.hFVBIg, {
                            overlayMethod: ex.intl.string(ex.t.bvlpDR),
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
                                    return ex.intl.string(ex.t.mJmbeC);
                                case f:
                                    return ex.intl.string(ex.t.C7bLTQ);
                                case !a?.oopEnabled:
                                    return ex.intl.string(ex.t.WiY24u);
                                case !b:
                                    return ex.intl.string(ex.t.cAFVsL);
                                case !a?.supportsOutOfProcess:
                                    return ex.intl.string(ex.t.XcGEcs);
                                default:
                                    return ex.intl.string(ex.t.bJXH2v);
                            }
                        })(),
                    ];
                case W:
                    return [ex.intl.string(ex.t.OFC2aw), null];
                case R:
                    return [ex.intl.string(ex.t.m7X4az), null];
                case D:
                    return [ex.intl.string(ex.t["9DUS5l"]), null];
                case K:
                    return [ex.intl.string(ex.t.nQ9EdJ), null];
                case M:
                case U:
                    return [ex.intl.string(ex.t.VWUn0a), null];
                case w:
                    if (Y) return [ex.intl.string(ex.t["s8+CFq"]), null];
                    if (z) return [ex.intl.string(ex.t.JEEdqt), null];
                    if (F) return [ex.intl.string(ex.t.pzBMwY), null];
                    return [ex.intl.string(ex.t["2Xhy9k"]), null];
                case null == a:
                    return [ex.intl.string(ex.t.vwHPRi), null];
                case V: {
                    let e = a?.fullscreenType === S.aI.FULLSCREEN ? ex.intl.string(ex.t.mJmbeC) : null;
                    return [ex.intl.string(ex.t.VPW4XY), e];
                }
                default:
                    return [ex.intl.string(ex.t.ONovP5), null];
            }
        })();
    (0, I.Ay)(() => {
        x.A.getDetectableGames();
    });
    let [J, Q] = s.useMemo(
        () =>
            w
                ? ["text-muted", h.LU0.colors.TEXT_MUTED.css]
                : H && F
                  ? ["text-feedback-warning", h.LU0.colors.TEXT_FEEDBACK_WARNING.css]
                  : H && Y
                    ? ["text-feedback-positive", h.LU0.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : H && z
                      ? ["text-strong", h.LU0.colors.TEXT_STRONG.css]
                      : ["interactive-text-default", h.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css],
        [w, H, F, Y, z],
    );
    return null == e
        ? null
        : (0, i.jsxs)(ej, {
              onExpand: E,
              className: p ? ep.tx : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      t?.name ?? c?.name ?? e?.gameName ?? "",
                      null != c && c.verified
                          ? (0, i.jsx)(g.m, {
                                text: ex.intl.string(ex.t["4PJP5p"]),
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
              hint: null != q ? q : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      H || w ? (0, i.jsx)(h.kN9, { size: "xxs", color: Q }) : (0, i.jsx)("div", { className: ep.W4 }),
                      (0, i.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: J,
                          children: ex.intl.string(ex.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, i.jsx)(y.A, { game: t, pid: e?.pid, size: y.M.MEDIUM }),
              "aria-label": ex.intl.string(ex.t["87O5GC"]),
              action: (0, i.jsx)(h.DUT, {
                  onClick: (e) => eO(e),
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
                                  null != a && (0, B.L)(a, e.id ?? null);
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
              warning: (0, i.jsx)(X.A, { className: ep.Hh, game: e }),
              children: [
                  (0, i.jsx)(eb, {
                      title: ex.intl.string(ex.t["7BlVIs"]),
                      description: ex.intl.string(ex.t.ndgADE),
                      hint: b ? void 0 : ex.intl.string(ex.t.cAFVsL),
                      "aria-label": ex.intl.string(ex.t["7BlVIs"]),
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
                              (0, i.jsx)("div", { className: ep.Kz }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(eb, {
                      title: ex.intl.string(ex.t.BfFpW1),
                      description: ex.intl.string(ex.t.OzInYk),
                      hint: N ? void 0 : ex.intl.string(ex.t["3sYHXm"]),
                      "aria-label": ex.intl.string(ex.t.BfFpW1),
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
                              (0, i.jsx)("div", { className: ep.Kz }),
                          ],
                      }),
                  }),
              ],
          });
}
function ey(e) {
    let { game: t, gameApplication: n } = e,
        a = s.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        l = (0, m.bG)([N.A], () => (null != n ? n : N.A.getApplication(t?.id)), [n, t]);
    return (0, i.jsx)(y.A, { game: l, pid: a, size: y.M.SMALL });
}
function eP(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: a,
            getEnabledFromStatus: l,
            onChange: r,
            clientSettingType: o,
            ariaLabel: c,
        } = e,
        d = (0, m.cf)([v.Ay, ee.A, en.A], () => (0, v.xU)(t, v.Ay, ee.A, en.A)),
        u = (0, m.cf)([ee.A, en.A], () => (0, v.hw)(t, !1, [ee.A, en.A]), [t]),
        _ = l(u),
        [A, g] = s.useState(_);
    return (
        s.useEffect(() => {
            g(_);
        }, [_]),
        (0, i.jsx)(eb, {
            title: t.name,
            icon: (0, i.jsx)(ey, { game: d, gameApplication: n }),
            "aria-label": c,
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(h.dOG, {
                        checked: A,
                        disabled: a,
                        onChange: (e) => {
                            let n;
                            return (n = !e && A), void (g(e), r(e, d, u), n && (0, B.L)(o, d.id ?? t?.id ?? null));
                        },
                    }),
                    (0, i.jsx)("div", { className: ep.Kz }),
                ],
            }),
        })
    );
}
function eL() {
    let [e, t] = s.useState(!1),
        { legacyEnabled: n, oopEnabled: a } = (0, m.cf)([k.default], () => k.default.getGlobalEnabledStatus()),
        l = (0, m.yK)([v.Ay], () => v.Ay.getGamesSeen(!0)).filter((e) => !(0, Z.n1)(e)),
        r = (0, b.A)(l.map((e) => e.id)),
        o = !(0, eu.supportsLegacy)(),
        c = (e) => {
            C.A.setEnabled(e, a);
            let t = v.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, L.Q3)(e, L.OverlayToggledClientSettingType.LEGACY, t),
                !e && n && (0, B.L)(L.OverlayToggledClientSettingType.LEGACY, t);
        },
        d = (e, t, n) => {
            let { enabledOOP: i } = n;
            x.A.toggleOverlay(t, e, i);
        },
        u = s.useMemo(
            () =>
                (0, eu.supportsLegacy)()
                    ? o
                        ? ex.intl.string(ex.t.r9jEVw)
                        : ex.intl.string(ex.t.OzInYk)
                    : ex.intl.string(ex.t["8Ox6/E"]),
            [o],
        );
    return 0 === l.length
        ? (0, i.jsx)(eb, {
              title: ex.intl.string(ex.t.BfFpW1),
              description: u,
              "aria-label": ex.intl.string(ex.t.BfFpW1),
              className: ep.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(h.dOG, { checked: n, disabled: o, onChange: (e) => c(e) }),
                      M.O && (0, i.jsx)("div", { className: ep.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(ej, {
              onExpand: t,
              className: e ? ep.tx : void 0,
              title: ex.intl.string(ex.t.BfFpW1),
              description: u,
              "aria-label": ex.intl.string(ex.t.BfFpW1),
              action: (0, i.jsx)(h.DUT, {
                  onClick: (e) => eO(e),
                  children: (0, i.jsx)(h.dOG, { checked: n, disabled: o, onChange: (e) => c(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: ep.SC,
                      children: (0, i.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: ex.intl.string(ex.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(h.IpV, {
                      className: ep.XG,
                      children: l.map((e, t) =>
                          (0, i.jsx)(
                              eP,
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
                                  ariaLabel: ex.intl.format(ex.t.hvPYsF, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eD() {
    let [e, t] = s.useState(!1),
        { oopEnabled: n, legacyEnabled: a } = (0, m.cf)([k.default], () => k.default.getGlobalEnabledStatus()),
        l = !(0, eu.supportsOutOfProcess)(),
        r = (0, m.yK)([v.Ay], () => v.Ay.getGamesSeen(!0)).filter((e) => !(0, Z.n1)(e)),
        o = (0, b.A)(r.map((e) => e.id)),
        c = (e) => {
            let t = !e && n;
            C.A.setEnabled(a, e);
            let i = v.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, L.Q3)(e, L.OverlayToggledClientSettingType.OOP, i),
                t && (0, B.L)(L.OverlayToggledClientSettingType.OOP, i);
        },
        d = (e, t, n) => {
            let { enabledLegacy: i } = n;
            x.A.toggleOverlay(t, e, i);
        },
        u = s.useMemo(
            () => (M.O ? (l ? ex.intl.string(ex.t.C7bLTQ) : ex.intl.string(ex.t.ndgADE)) : ex.intl.string(ex.t.m7X4az)),
            [l],
        );
    return 0 === r.length
        ? (0, i.jsx)(eb, {
              title: ex.intl.string(ex.t["7BlVIs"]),
              description: u,
              "aria-label": ex.intl.string(ex.t["7BlVIs"]),
              className: ep.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(h.dOG, { checked: n, disabled: l, onChange: (e) => c(e) }),
                      M.O && (0, i.jsx)("div", { className: ep.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(ej, {
              onExpand: t,
              className: e ? ep.tx : void 0,
              title: ex.intl.string(ex.t["7BlVIs"]),
              description: u,
              "aria-label": ex.intl.string(ex.t["7BlVIs"]),
              action: (0, i.jsx)(h.DUT, {
                  onClick: (e) => eO(e),
                  children: (0, i.jsx)(h.dOG, { checked: n, disabled: l, onChange: (e) => c(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: ep.SC,
                      children: (0, i.jsx)(h.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: ex.intl.string(ex.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(h.IpV, {
                      className: ep.XG,
                      children: r.map((e, t) =>
                          (0, i.jsx)(
                              eP,
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
                                  ariaLabel: ex.intl.format(ex.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eM() {
    return (0, U.X4)(f.A.USER_SETTINGS)
        ? (0, i.jsx)(eb, {
              title: ex.intl.string(ex.t["z4/l+V"]),
              description: ex.intl.string(ex.t["3aZq/0"]),
              action: (0, i.jsx)(h.Button, {
                  variant: "primary",
                  text: ex.intl.string(ex.t.s2nVhG),
                  onClick: () => {
                      (0, F.b)(f.A.USER_SETTINGS, eA.BRT.APP);
                  },
              }),
              "aria-label": ex.intl.string(ex.t["z4/l+V"]),
          })
        : null;
}
function eG(e) {
    let { isLegacySettings: t = !1 } = e,
        n = (0, m.bG)([es.Ay], () => es.Ay.getOverlayKeybind()),
        s = !(0, eu.supportsLegacy)(),
        a = !(0, eu.supportsOutOfProcess)(),
        [l, r] = (0, m.yK)([v.Ay], () => [v.Ay.canShowAdminWarning, v.Ay.getVisibleGame()], []),
        o = (0, q.NP)(),
        c = null != r && r.elevated && l && !o,
        u = !(0, es.DV)(n?.shortcut ?? []);
    return (0, i.jsx)("div", {
        className: ep.hc,
        children: (0, i.jsxs)("div", {
            className: ep.eH,
            children: [
                (0, i.jsxs)("div", {
                    className: ep.Bu,
                    children: [
                        (0, i.jsx)(h.Text, {
                            variant: t ? "text-md/semibold" : "text-md/medium",
                            color: "text-strong",
                            children: ex.intl.string(ex.t.VsAZcC),
                        }),
                        c &&
                            (0, i.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: ep.y7,
                                children: ex.intl.string(ex.t.NsowVa),
                            }),
                        u &&
                            (0, i.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: ep.y7,
                                children: ex.intl.string(ex.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: ep.IH,
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
function eU(e, t) {
    return [
        {
            title: ex.t.eVE4LX,
            description: ex.t["72WNqk"],
            disabledSetting: D.M.TEXT_CHAT,
            key: e_.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
        },
        {
            title: ex.t.oifnSh,
            description: ex.t.bgU5r0,
            disabledSetting: D.M.WELCOME_GENERAL,
            key: e_.X.OVERLAY_NOTIFICATIONS_WELCOME,
        },
        {
            title: ex.t.hqsZJW,
            description: ex.t.kHjdqc,
            disabledSetting: D.M.GO_LIVE_NUDGE,
            key: e_.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
        },
        {
            title: ex.t.sop3rn,
            description: ex.t.pjgffc,
            disabledSetting: D.M.GAME_ACTIVITY,
            key: e_.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
        },
        {
            title: ex.t["2QVhbb"],
            description: ex.t.wQ4ilB,
            disabledSetting: D.M.NOW_PLAYING,
            key: e_.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
        },
        t && {
            title: ex.t.giM9fA,
            description: ex.t.EhAfWj,
            disabledSetting: D.M.NOW_PLAYING_DIFFERENT_GAMES,
            key: e_.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
            usePredicate: () => {
                let { showNowPlayingForDifferentGames: e } = (0, U.M8)(
                        "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                    ),
                    t = (0, m.bG)([H.A], () => H.A.isNotificationDisabledBySetting(D.M.NOW_PLAYING));
                return !!e && !t;
            },
        },
        e && {
            title: ex.t["5/21FT"],
            description: ex.t.EIzwfA,
            disabledSetting: D.M.FRIEND_STREAM_WATCH_NUDGE,
            key: e_.X.OVERLAY_NOTIFICATIONS_FRIEND_STREAM_WATCH,
            usePredicate: () => {
                let { enabled: e } = (0, U.QC)("OverlayV3StreamWatchNudge");
                return e;
            },
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
}
function ek() {
    let { enabled: e } = (0, U.QC)("OverlayV3StreamWatchNudge"),
        { showNowPlayingForDifferentGames: t } = (0, U.M8)("OverlayV3NowPlayingDifferentGamesNotificationSetting"),
        n = (0, m.bG)([H.A], () => H.A.getDisabledNotifications()),
        s = eU(e, t && !n.has(D.M.NOW_PLAYING));
    return (0, i.jsxs)("div", {
        className: ep.AO,
        children: [
            (0, i.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: ex.intl.string(ex.t.xOE5bA),
            }),
            s.map((e) => {
                let t;
                return (0, i.jsxs)(
                    "div",
                    {
                        className: ep.vx,
                        children: [
                            (0, i.jsxs)("div", {
                                className: ep.LS,
                                children: [
                                    (0, i.jsx)(h.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: ex.intl.string(e.title),
                                    }),
                                    (0, i.jsx)(h.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: ex.intl.string(e.description),
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
function eV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new $.A({
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
        user: new Q.A({ id: s, username: e }),
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
function eH(e) {
    let t,
        { isLegacySettings: n = !1 } = e,
        a = (0, m.bG)([ei.default], () => ei.default.getCurrentUser()),
        {
            avatarSizeMode: r,
            displayNameMode: o,
            displayUserMode: c,
        } = (0, m.cf)([el.default], () => ({
            avatarSizeMode: el.default.getAvatarSizeMode(),
            displayNameMode: el.default.getDisplayNameMode(),
            displayUserMode: el.default.getDisplayUserMode(),
        })),
        [d] = s.useState(() => [
            eV(ex.intl.string(ex.t.C0ZDvo), !0, !1),
            eV(ex.intl.string(ex.t.iOtj8E), !1, !1, !0),
            eV(ex.intl.string(ex.t["0oqNgL"]), !1, !0),
        ]),
        u = (0, m.bG)([w.A, et.A], () => {
            let e = w.A.getWidgetByType(eA.uss.VOICE_V3);
            if (null == e) return null;
            let t = et.A.getWidget(e.id);
            return null != t && (0, z.ZO)(t) ? t : null;
        }),
        _ = u?.meta?.voiceStatesMaxShown ?? 8,
        A = [null != a ? (((t = eV(a.username)).user = a), t) : null, ...d].filter(eo.Vq),
        g = [new Map(A.map((e) => [e.user.id, e])), A.map((e) => e.user.id)],
        x = (0, i.jsx)(h.NPJ, {
            theme: eA.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: l()(ep.Y5, e),
                    children: [
                        (0, i.jsx)("div", {
                            className: ep.kJ,
                            children: (0, i.jsx)(W.DH, {
                                id: "voice-widget",
                                title: ex.intl.string(ex.t.KNJ6Vq),
                                channel: (0, J.createChannelRecord)({
                                    id: "123",
                                    name: "Test Channel",
                                    type: eA.rbe.GUILD_VOICE,
                                    guild_id: "456",
                                }),
                                overlayVoiceStates: g,
                                displayNameMode: o,
                                displayUserMode: c,
                                avatarSizeMode: r,
                                widget: eA.uss.VOICE,
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
                            className: ep.R$,
                            children: [
                                (0, i.jsx)(K.Pl, { children: ex.intl.string(ex.t.KNJ6Vq) }),
                                (0, i.jsx)(K.CS, {}),
                                (0, i.jsx)(K.O0, { id: u?.id ?? "voice-widget", pinned: u?.pinned ?? !1 }),
                            ],
                        }),
                    ],
                }),
        });
    return n ? x : (0, i.jsx)("div", { className: ep.F9, children: x });
}
function ew() {
    let {
            avatarSizeMode: e,
            displayNameMode: t,
            displayUserMode: n,
        } = (0, m.cf)([el.default], () => ({
            avatarSizeMode: el.default.getAvatarSizeMode(),
            displayNameMode: el.default.getDisplayNameMode(),
            displayUserMode: el.default.getDisplayUserMode(),
        })),
        s = (0, m.bG)([w.A, et.A], () => {
            let e = w.A.getWidgetByType(eA.uss.VOICE_V3);
            if (null == e) return null;
            let t = et.A.getWidget(e.id);
            return null != t && (0, z.ZO)(t) ? t : null;
        }),
        a = s?.meta?.voiceStatesMaxShown ?? 8;
    return (0, i.jsxs)("div", {
        className: ep.ri,
        children: [
            (0, i.jsx)(h.l6P, {
                label: ex.intl.string(ex.t.dnvZSg),
                options: [
                    { id: "large", label: ex.intl.string(ex.t.YcOxtr), value: eA.OSZ.LARGE },
                    { id: "small", label: ex.intl.string(ex.t.BKIKqx), value: eA.OSZ.SMALL },
                ],
                onSelectionChange: C.A.setAvatarSizeMode,
                value: e,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)(h.l6P, {
                label: ex.intl.string(ex.t.J0dpcB),
                options: [
                    { id: "always", label: ex.intl.string(ex.t.nBmDrT), value: eA.pwA.ALWAYS },
                    {
                        id: "only-while-speaking",
                        label: ex.intl.string(ex.t["2OvIZY"]),
                        value: eA.pwA.ONLY_WHILE_SPEAKING,
                    },
                    { id: "never", label: ex.intl.string(ex.t.ekjlPL), value: eA.pwA.NEVER },
                ],
                onSelectionChange: C.A.setDisplayNameMode,
                value: t,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)(eH, { isLegacySettings: !0 }),
            (0, i.jsx)(h.l6P, {
                label: ex.intl.string(ex.t.swsWWC),
                options: [
                    { id: "always", label: ex.intl.string(ex.t.nBmDrT), value: eA.f5z.ALWAYS },
                    {
                        id: "only-while-speaking",
                        label: ex.intl.string(ex.t["2OvIZY"]),
                        value: eA.f5z.ONLY_WHILE_SPEAKING,
                    },
                ],
                onSelectionChange: C.A.setDisplayUserMode,
                value: n,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)("div", {
                className: ep.xJ,
                children: (0, i.jsx)(h.Apm, {
                    label: ex.intl.string(ex.t["X/Uyzc"]),
                    initialValue: a,
                    onValueRender: (e) => (e < eS ? ex.intl.string(ex.t.nrUzFL) : `${Math.floor(e)}`),
                    minValue: eS - 1,
                    maxValue: eI,
                    onValueChange: function (e) {
                        null != s &&
                            (e < eS
                                ? (0, E.cC)(s.id, { voiceStatesMaxShown: -1 })
                                : (0, E.cC)(s.id, { voiceStatesMaxShown: Math.floor(e) }));
                    },
                    markers: ef,
                    barStyles: { background: h.LU0.colors.BACKGROUND_MOD_STRONG.css },
                    fillStyles: { background: h.LU0.colors.BACKGROUND_BRAND.css },
                    onMarkerRender: (e) => (e < eS ? ex.intl.string(ex.t.nrUzFL) : `${Math.floor(e)}`),
                }),
            }),
        ],
    });
}
function eB(e) {
    let { showDivider: t = !1 } = e,
        [n, s] = (0, j.kn)([A.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, I.Ay)(() => () => {
        s(eg.i.AUTO_DISMISS);
    }),
    n !== A.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, i.jsxs)("div", {
              className: ep.xC,
              children: [
                  (0, i.jsx)("div", {
                      children: (0, i.jsx)("img", { src: eE.A, alt: ex.intl.string(ex.t.mdXZh1), className: ep.tl }),
                  }),
                  (0, i.jsx)("div", {
                      children: (0, i.jsxs)("div", {
                          className: ep.vJ,
                          children: [
                              (0, i.jsx)(h.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: ex.intl.string(ex.t.jzjJQg),
                              }),
                              (0, i.jsx)(h.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: ex.intl.string(ex.t["5dOfxb"]),
                              }),
                          ],
                      }),
                  }),
                  (0, i.jsx)("div", {
                      children: (0, i.jsx)("img", { src: eC.A, alt: ex.intl.string(ex.t.mdXZh1), className: ep.lh }),
                  }),
                  (0, i.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: ep.VV,
                      children: (0, i.jsx)(h.Button, {
                          variant: "primary",
                          text: ex.intl.string(ex.t.Q26diF),
                          onClick: () => void s(eg.i.DISMISS),
                      }),
                  }),
                  t ? (0, i.jsx)("div", { className: ep.$x }) : null,
              ],
          });
}
function eY(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        a = n?.id,
        l = (0, m.bG)([H.A], () => H.A.isLimitedInteractionOverrideEnabled(a), [a]),
        r = s.useMemo(() => null != t && (0, V.qJ)(t.pid), [t]),
        o = (0, m.bG)([el.default], () => el.default.disableClickableRegions);
    return (0, i.jsxs)("div", {
        className: ep.U$,
        children: [
            (0, i.jsx)(eG, { isLegacySettings: !0 }),
            null != a &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: ep.yB,
                            children: [
                                (0, i.jsx)(h.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: ex.intl.string(ex.t.wgVQND),
                                }),
                                (0, i.jsx)(h.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: ex.intl.string(ex.t["5SsyF5"]),
                                }),
                            ],
                        }),
                        (0, i.jsx)(h.dOG, {
                            checked: l || r,
                            disabled: r,
                            onChange: (e) => {
                                null != n && (0, Y.x8)(n.id, e);
                            },
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        className: ep.yB,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: ex.intl.string(ex.t["+eFXxq"]),
                            }),
                            (0, i.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: ex.intl.string(ex.t.kivMAp),
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
function eF() {
    let e,
        { runningGame: t, runningGameApplication: n } = (0, O.A)(),
        s = (0, m.bG)([ei.default], () => ei.default.getCurrentUser());
    return (
        (0, I.Ay)(() => {
            if (ec.isPlatformEmbedded) return (0, R.a2)(), R.e0;
        }),
        ((e = eN(eT)),
        _().isEqual(e, eT) || (er.default.track(eA.HAw.OVERLAY_SETTINGS_UPDATED, e), (eT = e)),
        null == s)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(em.A, {
                          title: ex.intl.string(ex.t["9cb1Uz"]),
                          children: [
                              (0, i.jsx)(eB, { showDivider: !0 }),
                              (0, i.jsxs)("div", {
                                  className: ep.U$,
                                  children: [
                                      (0, i.jsx)(eR, {}),
                                      (0, i.jsx)(eD, {}),
                                      (0, i.jsx)(eL, {}),
                                      (0, i.jsx)(eM, {}),
                                  ],
                              }),
                              (0, i.jsx)("div", { className: ep.Ri }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(eY, { runningGame: t, runningGameApplication: n }),
                              (0, i.jsx)("div", { className: ep.Ri }),
                          ],
                      }),
                      (0, i.jsxs)(h.D0$, {
                          label: ex.intl.string(ex.t.r1TZfh),
                          children: [(0, i.jsx)(ew, {}), (0, i.jsx)("div", { className: ep.Ri })],
                      }),
                      (0, i.jsx)(ek, {}),
                  ],
              })
    );
}
