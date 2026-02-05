n.d(t, {
    Ay: () => eY,
    DA: () => eb,
    F: () => eH,
    F1: () => eG,
    G6: () => eI,
    Gj: () => eM,
    Gk: () => eU,
    PP: () => eS,
    VQ: () => eV,
    fE: () => eD,
    nR: () => eR,
    ze: () => eP,
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(812729),
    o = n.n(r),
    d = n(284009),
    c = n.n(d),
    u = n(735438),
    h = n.n(u),
    A = n(311907),
    g = n(554146),
    m = n(990078),
    p = n(397927),
    _ = n(544420),
    x = n(97260),
    f = n(391973),
    E = n(684013),
    C = n(117178),
    I = n(56562),
    S = n(964486),
    b = n(793574),
    N = n(587895),
    T = n(429913),
    j = n(379848),
    v = n(15285),
    y = n(286237),
    R = n(843402),
    O = n(769015),
    L = n(496885),
    D = n(810412),
    M = n(93465),
    G = n(41984),
    U = n(589051),
    P = n(994322),
    k = n(833551),
    w = n(515183),
    V = n(592598),
    B = n(395011),
    H = n(663677),
    F = n(682763),
    Y = n(237984),
    W = n(897720),
    K = n(393172),
    z = n(968898),
    X = n(847521),
    q = n(942405),
    J = n(824189),
    Q = n(95701),
    Z = n(427157),
    $ = n(288737),
    ee = n(760751),
    et = n(555528),
    en = n(189081),
    ei = n(287809),
    el = n(532624),
    es = n(242286),
    ea = n(256415),
    er = n(954571),
    eo = n(403362),
    ed = n(723702),
    ec = n(350535),
    eu = n(9302),
    eh = n(780964),
    eA = n(790174),
    eg = n(652215),
    em = n(49999),
    ep = n(672396);
n(392164);
var e_ = n(985018),
    ex = n(202942),
    ef = n(130324),
    eE = n(966040);
let eC = eN(null),
    eI = 1,
    eS = 25,
    eb = [0, 5, 10, 15, 20, 25];
function eN(e) {
    let t = ea.default.getNotificationPositionMode(),
        n = t !== eg.G6Q.DISABLED,
        i = el.Ay.getOverlayKeybind(),
        l = el.Ay.getOverlayChatKeybind();
    return {
        enabled: es.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: V.A.isNotificationDisabled(ep.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, ec.dI)(i.shortcut) : null,
        text_activation_hotkey: null != l ? (0, ec.dI)(l.shortcut) : null,
        text_opacity_slider: ea.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? es.default.enabled,
    };
}
function eT(e) {
    let {
        header: t,
        icon: n,
        title: l,
        description: s,
        action: r,
        hint: o,
        warning: d,
        onClick: c,
        "aria-label": u,
        className: h,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(ex.HS, h),
        children: [
            (0, i.jsxs)(p.sqX, {
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
                                    (0, i.jsx)(p.Text, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: ex.SZ,
                                        children: l,
                                    }),
                                    null != s &&
                                        (0, i.jsx)(p.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != o &&
                                        (0, i.jsx)(p.Text, {
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
function ej(e) {
    let { children: t, className: n, onExpand: s, ...r } = e,
        [o, d] = l.useState(!1);
    return (0, i.jsx)(p.Nt8, {
        className: ex.uR,
        collapsibleContent: (0, i.jsx)("div", { className: ex.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(eT, {
                ...r,
                onClick: (e) => {
                    var n;
                    d((n = !o)), s?.(n), t?.(e);
                },
                className: a()(ex.AC, n),
                action: (0, i.jsxs)("div", {
                    className: ex.rc,
                    children: [
                        r.action,
                        o
                            ? (0, i.jsx)(p.abt, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, i.jsx)(p._BQ, {
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
    ey = (e) => {
        e.preventDefault(), e.stopPropagation();
    };
function eR() {
    let { runningGame: e, runningGameApplication: t } = (0, y.A)(),
        n = e?.pid,
        s = (0, A.bG)(
            [k.default],
            () => (null == e || null == n ? null : k.default.getTrackedGameByPid(n)),
            [e, n],
            o(),
        ),
        { enabledLegacy: a, enabledOOP: r } = (0, A.cf)(
            [ee.A, en.A],
            () =>
                null == e && null == s
                    ? { enabledLegacy: !1, enabledOOP: !1 }
                    : null == e
                      ? { enabledLegacy: s?.legacyEnabled ?? !1, enabledOOP: s?.oopEnabled ?? !1 }
                      : (0, v.hw)(e, !1, [ee.A, en.A]),
            [e, s],
        ),
        d = (0, A.bG)([v.Ay, ee.A, en.A], () => (null == e ? null : (0, v.xU)(e, v.Ay, ee.A, en.A)), [e], o()),
        [c, u] = l.useState(r),
        [h, g] = l.useState(a),
        [x, f] = l.useState(!1);
    l.useEffect(() => {
        u(r), g(a);
    }, [r, a]);
    let C = !(0, eu.supportsLegacy)(),
        b = !(0, eu.supportsOutOfProcess)(),
        { legacyEnabled: N, oopEnabled: T } = (0, A.cf)([k.default], () => k.default.getGlobalEnabledStatus()),
        j = (t, n) => {
            if (null == e) return;
            let i = !1,
                l = !1;
            switch (n) {
                case D.OverlayToggledClientSettingType.LEGACY_GAME:
                    g(t), _.A.toggleOverlay(e, t, c), (i = !t && h);
                    break;
                case D.OverlayToggledClientSettingType.OOP_GAME:
                    u(t), _.A.toggleOverlay(e, h, t), (l = !t && c);
                    break;
                case D.OverlayToggledClientSettingType.LEGACY:
                    E.A.setEnabled(t, T), (0, D.Q3)(t, D.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                    break;
                case D.OverlayToggledClientSettingType.OOP:
                    E.A.setEnabled(N, t), (0, D.Q3)(t, D.OverlayToggledClientSettingType.OOP, e.id ?? null);
            }
            (i || l) &&
                (0, H.L)(
                    i ? D.OverlayToggledClientSettingType.LEGACY_GAME : D.OverlayToggledClientSettingType.OOP_GAME,
                    e.id ?? null,
                );
        },
        R = C && b,
        M = !N && !T,
        U = !c && !N && h && !C,
        P = !h && !T && c && !b,
        w = s?.overlayMethod === G.Ue.Disabled,
        V = s?.state === G.AR.OVERLAY_RENDERING && !w,
        B = s?.state != null && ev.has(s.state) && !w,
        F = s?.overlayMethod === G.Ue.OutOfProcess,
        Y = s?.overlayMethod === G.Ue.OutOfProcessLimitedInteraction,
        W = s?.overlayMethod === G.Ue.Hook,
        K = s?.state === G.AR.OVERLAY_CRASHED || s?.state === G.AR.OVERLAY_CRASHED_DISABLED,
        z = !c && !h,
        [X, q] = (() => {
            switch (!0) {
                case V && F:
                    return [
                        e_.intl.format(e_.t.hFVBIg, {
                            overlayMethod: e_.intl.string(e_.t.a3eXSw),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    p.Text,
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
                case V && Y:
                    return [
                        e_.intl.format(e_.t.hFVBIg, {
                            overlayMethod: e_.intl.string(e_.t["506Aba"]),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    p.Text,
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
                case V && W:
                    return [
                        e_.intl.format(e_.t.hFVBIg, {
                            overlayMethod: e_.intl.string(e_.t.bvlpDR),
                            overlayMethodHook: function (e, t) {
                                return (0, i.jsx)(
                                    p.Text,
                                    { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                    t,
                                );
                            },
                        }),
                        (function () {
                            switch (!0) {
                                case s?.fullscreenType !== I.aI.BORDERLESS_FULLSCREEN:
                                    return e_.intl.string(e_.t.mJmbeC);
                                case b:
                                    return e_.intl.string(e_.t.C7bLTQ);
                                case !s?.oopEnabled:
                                    return e_.intl.string(e_.t.WiY24u);
                                case !T:
                                    return e_.intl.string(e_.t.cAFVsL);
                                case !s?.supportsOutOfProcess:
                                    return e_.intl.string(e_.t.XcGEcs);
                                default:
                                    return e_.intl.string(e_.t.bJXH2v);
                            }
                        })(),
                    ];
                case K:
                    return [e_.intl.string(e_.t.OFC2aw), null];
                case R:
                    return [e_.intl.string(e_.t.m7X4az), null];
                case M:
                    return [e_.intl.string(e_.t["9DUS5l"]), null];
                case z:
                    return [e_.intl.string(e_.t.nQ9EdJ), null];
                case U:
                case P:
                    return [e_.intl.string(e_.t.VWUn0a), null];
                case B:
                    if (F) return [e_.intl.string(e_.t["s8+CFq"]), null];
                    if (W) return [e_.intl.string(e_.t.JEEdqt), null];
                    if (Y) return [e_.intl.string(e_.t.pzBMwY), null];
                    return [e_.intl.string(e_.t["2Xhy9k"]), null];
                case null == s:
                    return [e_.intl.string(e_.t.vwHPRi), null];
                case w: {
                    let e = s?.fullscreenType === I.aI.FULLSCREEN ? e_.intl.string(e_.t.mJmbeC) : null;
                    return [e_.intl.string(e_.t.VPW4XY), e];
                }
                default:
                    return [e_.intl.string(e_.t.ONovP5), null];
            }
        })();
    (0, S.Ay)(() => {
        _.A.getDetectableGames();
    });
    let [Q, Z] = l.useMemo(
        () =>
            B
                ? ["text-muted", p.LU0.colors.TEXT_MUTED.css]
                : V && Y
                  ? ["text-feedback-warning", p.LU0.colors.TEXT_FEEDBACK_WARNING.css]
                  : V && F
                    ? ["text-feedback-positive", p.LU0.colors.TEXT_FEEDBACK_POSITIVE.css]
                    : V && W
                      ? ["text-strong", p.LU0.colors.TEXT_STRONG.css]
                      : ["interactive-text-default", p.LU0.colors.INTERACTIVE_TEXT_DEFAULT.css],
        [B, V, Y, F, W],
    );
    return null == e
        ? null
        : (0, i.jsxs)(ej, {
              onExpand: f,
              className: x ? ex.tx : void 0,
              title: (0, i.jsxs)(i.Fragment, {
                  children: [
                      t?.name ?? d?.name ?? e?.gameName ?? "",
                      null != d && d.verified
                          ? (0, i.jsx)(m.m, {
                                text: e_.intl.string(e_.t["4PJP5p"]),
                                children: (0, i.jsx)(L.A, {
                                    size: 16,
                                    color: p.LU0.colors.BACKGROUND_BRAND.css,
                                    children: (0, i.jsx)(p.Uzd, {
                                        size: "custom",
                                        width: 16,
                                        height: 16,
                                        color: p.LU0.colors.WHITE.css,
                                    }),
                                }),
                            })
                          : null,
                  ],
              }),
              description: X,
              hint: null != q ? q : void 0,
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      V || B ? (0, i.jsx)(p.kN9, { size: "xxs", color: Z }) : (0, i.jsx)("div", { className: ex.W4 }),
                      (0, i.jsx)(p.Text, {
                          variant: "text-xs/semibold",
                          color: Q,
                          children: e_.intl.string(e_.t.CDOx3w),
                      }),
                  ],
              }),
              icon: (0, i.jsx)(O.A, { game: t, pid: e?.pid, size: O.M.MEDIUM }),
              "aria-label": e_.intl.string(e_.t["87O5GC"]),
              action: (0, i.jsx)(p.DUT, {
                  onClick: (e) => ey(e),
                  children: (0, i.jsx)(p.dOG, {
                      checked: (c && T) || (h && N),
                      disabled: R,
                      onChange: (t) => {
                          ((t, n) => {
                              if (null == e) return;
                              let i = !1,
                                  l = !1;
                              switch (n) {
                                  case "game":
                                      _.A.toggleOverlay(e, t, t), g(t), u(t), (i = !t && h), (l = !t && c);
                                      break;
                                  case "global":
                                      E.A.setEnabled(t, t), (i = !t && N), (l = !t && T);
                                      break;
                                  case "both":
                                      E.A.setEnabled(t, t),
                                          _.A.toggleOverlay(e, t, t),
                                          g(t),
                                          u(t),
                                          (i = (!t && N) || (!t && h)),
                                          (l = (!t && T) || (!t && c));
                              }
                              let s = null;
                              i
                                  ? (s =
                                        "game" === n
                                            ? D.OverlayToggledClientSettingType.LEGACY_GAME
                                            : D.OverlayToggledClientSettingType.LEGACY)
                                  : l &&
                                    (s =
                                        "game" === n
                                            ? D.OverlayToggledClientSettingType.OOP_GAME
                                            : D.OverlayToggledClientSettingType.OOP),
                                  null != s && (0, H.L)(s, e.id ?? null);
                          })(
                              t,
                              ((e, t) => {
                                  let n = !t && e,
                                      i = !T && c,
                                      l = !N && h,
                                      s = !c && T,
                                      a = !h && N;
                                  switch (!0) {
                                      case n && (i || l) && (s || a):
                                          return "both";
                                      case n && (i || l):
                                          return "global";
                                      default:
                                          return "game";
                                  }
                              })(t, (c && T) || (h && N)),
                          );
                      },
                  }),
              }),
              warning: (0, i.jsx)(J.A, { className: ex.Hh, game: e }),
              children: [
                  (0, i.jsx)(eT, {
                      title: e_.intl.string(e_.t["7BlVIs"]),
                      description: e_.intl.string(e_.t.ndgADE),
                      hint: T ? void 0 : e_.intl.string(e_.t.cAFVsL),
                      "aria-label": e_.intl.string(e_.t["7BlVIs"]),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(p.dOG, {
                                  checked: c && T,
                                  disabled: b,
                                  onChange: (e) => {
                                      e && !T
                                          ? j(e, D.OverlayToggledClientSettingType.OOP)
                                          : j(e, D.OverlayToggledClientSettingType.OOP_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: ex.Kz }),
                          ],
                      }),
                  }),
                  (0, i.jsx)(eT, {
                      title: e_.intl.string(e_.t.BfFpW1),
                      description: e_.intl.string(e_.t.OzInYk),
                      hint: N ? void 0 : e_.intl.string(e_.t["3sYHXm"]),
                      "aria-label": e_.intl.string(e_.t.BfFpW1),
                      action: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(p.dOG, {
                                  checked: h && N,
                                  disabled: C,
                                  onChange: (e) => {
                                      e && !N
                                          ? j(e, D.OverlayToggledClientSettingType.LEGACY)
                                          : j(e, D.OverlayToggledClientSettingType.LEGACY_GAME);
                                  },
                              }),
                              (0, i.jsx)("div", { className: ex.Kz }),
                          ],
                      }),
                  }),
              ],
          });
}
function eO(e) {
    let { game: t, gameApplication: n } = e,
        s = l.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        a = (0, A.bG)([N.A], () => (null != n ? n : N.A.getApplication(t?.id)), [n, t]);
    return (0, i.jsx)(O.A, { game: a, pid: s, size: O.M.SMALL });
}
function eL(e) {
    let {
            rawGame: t,
            gameApplication: n,
            supportDisabled: s,
            getEnabledFromStatus: a,
            onChange: r,
            clientSettingType: o,
            ariaLabel: d,
        } = e,
        c = (0, A.cf)([v.Ay, ee.A, en.A], () => (0, v.xU)(t, v.Ay, ee.A, en.A)),
        u = (0, A.cf)([ee.A, en.A], () => (0, v.hw)(t, !1, [ee.A, en.A]), [t]),
        h = a(u),
        [g, m] = l.useState(h);
    return (
        l.useEffect(() => {
            m(h);
        }, [h]),
        (0, i.jsx)(eT, {
            title: t.name,
            icon: (0, i.jsx)(eO, { game: c, gameApplication: n }),
            "aria-label": d,
            action: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.dOG, {
                        checked: g,
                        disabled: s,
                        onChange: (e) => {
                            let n;
                            return (n = !e && g), void (m(e), r(e, c, u), n && (0, H.L)(o, c.id ?? t?.id ?? null));
                        },
                    }),
                    (0, i.jsx)("div", { className: ex.Kz }),
                ],
            }),
        })
    );
}
function eD() {
    let [e, t] = l.useState(!1),
        { legacyEnabled: n, oopEnabled: s } = (0, A.cf)([k.default], () => k.default.getGlobalEnabledStatus()),
        a = (0, A.yK)([v.Ay], () => v.Ay.getGamesSeen(!0)).filter((e) => !(0, X.n1)(e)),
        r = (0, T.A)(a.map((e) => e.id)),
        o = !(0, eu.supportsLegacy)(),
        d = (e) => {
            E.A.setEnabled(e, s);
            let t = v.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, D.Q3)(e, D.OverlayToggledClientSettingType.LEGACY, t),
                !e && n && (0, H.L)(D.OverlayToggledClientSettingType.LEGACY, t);
        },
        c = (e, t, n) => {
            let { enabledOOP: i } = n;
            _.A.toggleOverlay(t, e, i);
        },
        u = l.useMemo(
            () =>
                (0, eu.supportsLegacy)()
                    ? o
                        ? e_.intl.string(e_.t.r9jEVw)
                        : e_.intl.string(e_.t.OzInYk)
                    : e_.intl.string(e_.t["8Ox6/E"]),
            [o],
        );
    return 0 === a.length
        ? (0, i.jsx)(eT, {
              title: e_.intl.string(e_.t.BfFpW1),
              description: u,
              "aria-label": e_.intl.string(e_.t.BfFpW1),
              className: ex.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(p.dOG, { checked: n, disabled: o, onChange: (e) => d(e) }),
                      ep.OX && (0, i.jsx)("div", { className: ex.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(ej, {
              onExpand: t,
              className: e ? ex.tx : void 0,
              title: e_.intl.string(e_.t.BfFpW1),
              description: u,
              "aria-label": e_.intl.string(e_.t.BfFpW1),
              action: (0, i.jsx)(p.DUT, {
                  onClick: (e) => ey(e),
                  children: (0, i.jsx)(p.dOG, { checked: n, disabled: o, onChange: (e) => d(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: ex.SC,
                      children: (0, i.jsx)(p.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: e_.intl.string(e_.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(p.IpV, {
                      className: ex.XG,
                      children: a.map((e, t) =>
                          (0, i.jsx)(
                              eL,
                              {
                                  rawGame: e,
                                  clientSettingType: D.OverlayToggledClientSettingType.LEGACY_GAME,
                                  supportDisabled: o,
                                  gameApplication: r[t],
                                  getEnabledFromStatus: (e) => {
                                      let { enabledLegacy: t } = e;
                                      return t;
                                  },
                                  onChange: c,
                                  ariaLabel: e_.intl.format(e_.t.hvPYsF, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eM() {
    let [e, t] = l.useState(!1),
        { oopEnabled: n, legacyEnabled: s } = (0, A.cf)([k.default], () => k.default.getGlobalEnabledStatus()),
        a = !(0, eu.supportsOutOfProcess)(),
        r = (0, A.yK)([v.Ay], () => v.Ay.getGamesSeen(!0)).filter((e) => !(0, X.n1)(e)),
        o = (0, T.A)(r.map((e) => e.id)),
        d = (e) => {
            let t = !e && n;
            E.A.setEnabled(s, e);
            let i = v.Ay.getCurrentGameForAnalytics()?.id ?? null;
            (0, D.Q3)(e, D.OverlayToggledClientSettingType.OOP, i),
                t && (0, H.L)(D.OverlayToggledClientSettingType.OOP, i);
        },
        c = (e, t, n) => {
            let { enabledLegacy: i } = n;
            _.A.toggleOverlay(t, e, i);
        },
        u = l.useMemo(
            () =>
                ep.OX ? (a ? e_.intl.string(e_.t.C7bLTQ) : e_.intl.string(e_.t.ndgADE)) : e_.intl.string(e_.t.m7X4az),
            [a],
        );
    return 0 === r.length
        ? (0, i.jsx)(eT, {
              title: e_.intl.string(e_.t["7BlVIs"]),
              description: u,
              "aria-label": e_.intl.string(e_.t["7BlVIs"]),
              className: ex.dA,
              action: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(p.dOG, { checked: n, disabled: a, onChange: (e) => d(e) }),
                      ep.OX && (0, i.jsx)("div", { className: ex.Kz }),
                  ],
              }),
          })
        : (0, i.jsxs)(ej, {
              onExpand: t,
              className: e ? ex.tx : void 0,
              title: e_.intl.string(e_.t["7BlVIs"]),
              description: u,
              "aria-label": e_.intl.string(e_.t["7BlVIs"]),
              action: (0, i.jsx)(p.DUT, {
                  onClick: (e) => ey(e),
                  children: (0, i.jsx)(p.dOG, { checked: n, disabled: a, onChange: (e) => d(e) }),
              }),
              children: [
                  (0, i.jsx)("div", {
                      className: ex.SC,
                      children: (0, i.jsx)(p.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          children: e_.intl.string(e_.t.FzoWRo),
                      }),
                  }),
                  (0, i.jsx)(p.IpV, {
                      className: ex.XG,
                      children: r.map((e, t) =>
                          (0, i.jsx)(
                              eL,
                              {
                                  rawGame: e,
                                  clientSettingType: D.OverlayToggledClientSettingType.OOP_GAME,
                                  gameApplication: o[t],
                                  supportDisabled: a,
                                  getEnabledFromStatus: (e) => {
                                      let { enabledOOP: t } = e;
                                      return t;
                                  },
                                  onChange: c,
                                  ariaLabel: e_.intl.format(e_.t.nByTd3, { gameName: e.name }).toString(),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
function eG() {
    return (0, U.X4)(b.A.USER_SETTINGS)
        ? (0, i.jsx)(eT, {
              title: e_.intl.string(e_.t["z4/l+V"]),
              description: e_.intl.string(e_.t["3aZq/0"]),
              action: (0, i.jsx)(p.Button, {
                  variant: "primary",
                  text: e_.intl.string(e_.t.s2nVhG),
                  onClick: () => {
                      (0, Y.b)(b.A.USER_SETTINGS, eg.BRT.APP);
                  },
              }),
              "aria-label": e_.intl.string(e_.t["z4/l+V"]),
          })
        : null;
}
function eU(e) {
    let { isLegacySettings: t = !1 } = e,
        n = (0, A.bG)([el.Ay], () => el.Ay.getOverlayKeybind()),
        l = !(0, eu.supportsLegacy)(),
        s = !(0, eu.supportsOutOfProcess)(),
        [a, r] = (0, A.yK)([v.Ay], () => [v.Ay.canShowAdminWarning, v.Ay.getVisibleGame()], []),
        o = (0, q.NP)(),
        d = null != r && r.elevated && a && !o,
        u = !(0, el.DV)(n?.shortcut ?? []);
    return (0, i.jsx)("div", {
        className: ex.hc,
        children: (0, i.jsxs)("div", {
            className: ex.eH,
            children: [
                (0, i.jsxs)("div", {
                    className: ex.Bu,
                    children: [
                        (0, i.jsx)(p.Text, {
                            variant: t ? "text-md/semibold" : "text-md/medium",
                            color: "text-strong",
                            children: e_.intl.string(e_.t.VsAZcC),
                        }),
                        d &&
                            (0, i.jsx)(p.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: ex.y7,
                                children: e_.intl.string(e_.t.NsowVa),
                            }),
                        u &&
                            (0, i.jsx)(p.Text, {
                                variant: "text-xs/normal",
                                color: "text-feedback-warning",
                                className: ex.y7,
                                children: e_.intl.string(e_.t["UNoTw/"]),
                            }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: ex.IH,
                    children: (0, i.jsx)(C.A, {
                        disabled: l && s,
                        defaultValue: null != n ? n.shortcut : [],
                        onChange: function (e) {
                            c()(null != n, "Keybind should never be undefined"), x.A.setKeybind({ ...n, shortcut: e });
                        },
                    }),
                }),
            ],
        }),
    });
}
function eP(e) {
    return [
        {
            title: e_.t.eVE4LX,
            description: e_.t["72WNqk"],
            disabledSetting: M.M.TEXT_CHAT,
            key: eh.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
        },
        {
            title: e_.t.oifnSh,
            description: e_.t.bgU5r0,
            disabledSetting: M.M.WELCOME_GENERAL,
            key: eh.X.OVERLAY_NOTIFICATIONS_WELCOME,
        },
        {
            title: e_.t.hqsZJW,
            description: e_.t.kHjdqc,
            disabledSetting: M.M.GO_LIVE_NUDGE,
            key: eh.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
        },
        {
            title: e_.t.sop3rn,
            description: e_.t.pjgffc,
            disabledSetting: M.M.GAME_ACTIVITY,
            key: eh.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
        },
        {
            title: e_.t["2QVhbb"],
            description: e_.t.wQ4ilB,
            disabledSetting: M.M.NOW_PLAYING,
            key: eh.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
        },
        e && {
            title: e_.t["5/21FT"],
            description: e_.t.EIzwfA,
            disabledSetting: M.M.FRIEND_STREAM_WATCH_NUDGE,
            key: eh.X.OVERLAY_NOTIFICATIONS_FRIEND_STREAM_WATCH,
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
        t = eP(e),
        n = (0, A.bG)([V.A], () => V.A.getDisabledNotifications());
    return (0, i.jsxs)("div", {
        className: ex.AO,
        children: [
            (0, i.jsx)(p.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: e_.intl.string(e_.t.xOE5bA),
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
                                    (0, i.jsx)(p.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-strong",
                                        children: e_.intl.string(e.title),
                                    }),
                                    (0, i.jsx)(p.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: e_.intl.string(e.description),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(p.dOG, {
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
function ew(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new $.A({
            channelId: "123",
            userId: l,
            sessionId: "789",
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i,
        }),
        user: new Z.A({ id: l, username: e }),
        member: {
            nick: e,
            userId: l,
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
        s = (0, A.bG)([ei.default], () => ei.default.getCurrentUser()),
        {
            avatarSizeMode: r,
            displayNameMode: o,
            displayUserMode: d,
        } = (0, A.cf)([ea.default], () => ({
            avatarSizeMode: ea.default.getAvatarSizeMode(),
            displayNameMode: ea.default.getDisplayNameMode(),
            displayUserMode: ea.default.getDisplayUserMode(),
        })),
        [c] = l.useState(() => [
            ew(e_.intl.string(e_.t.C0ZDvo), !0, !1),
            ew(e_.intl.string(e_.t.iOtj8E), !1, !1, !0),
            ew(e_.intl.string(e_.t["0oqNgL"]), !1, !0),
        ]),
        u = (0, A.bG)([B.A, et.A], () => {
            let e = B.A.getWidgetByType(eg.uss.VOICE_V3);
            if (null == e) return null;
            let t = et.A.getWidget(e.id);
            return null != t && (0, W.ZO)(t) ? t : null;
        }),
        h = u?.meta?.voiceStatesMaxShown ?? 8,
        g = [null != s ? (((t = ew(s.username)).user = s), t) : null, ...c].filter(eo.Vq),
        m = [new Map(g.map((e) => [e.user.id, e])), g.map((e) => e.user.id)],
        _ = (0, i.jsx)(p.NPJ, {
            theme: eg.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: a()(ex.Y5, e),
                    children: [
                        (0, i.jsx)("div", {
                            className: ex.kJ,
                            children: (0, i.jsx)(K.DH, {
                                id: "voice-widget",
                                title: e_.intl.string(e_.t.KNJ6Vq),
                                channel: (0, Q.createChannelRecord)({
                                    id: "123",
                                    name: "Test Channel",
                                    type: eg.rbe.GUILD_VOICE,
                                    guild_id: "456",
                                }),
                                overlayVoiceStates: m,
                                displayNameMode: o,
                                displayUserMode: d,
                                avatarSizeMode: r,
                                widget: eg.uss.VOICE,
                                anchorLeft: !0,
                                application: null,
                                stream: null,
                                streamApplication: null,
                                streamMetadata: null,
                                locked: !1,
                                pinned: !1,
                                isSettingsPreview: !0,
                                isPreviewingInGame: !1,
                                maxDisplayedVoiceStates: h,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: ex.R$,
                            children: [
                                (0, i.jsx)(z.Pl, { children: e_.intl.string(e_.t.KNJ6Vq) }),
                                (0, i.jsx)(z.CS, {}),
                                (0, i.jsx)(z.O0, { id: u?.id ?? "voice-widget", pinned: u?.pinned ?? !1 }),
                            ],
                        }),
                    ],
                }),
        });
    return n ? _ : (0, i.jsx)("div", { className: ex.F9, children: _ });
}
function eB() {
    let {
            avatarSizeMode: e,
            displayNameMode: t,
            displayUserMode: n,
        } = (0, A.cf)([ea.default], () => ({
            avatarSizeMode: ea.default.getAvatarSizeMode(),
            displayNameMode: ea.default.getDisplayNameMode(),
            displayUserMode: ea.default.getDisplayUserMode(),
        })),
        l = (0, A.bG)([B.A, et.A], () => {
            let e = B.A.getWidgetByType(eg.uss.VOICE_V3);
            if (null == e) return null;
            let t = et.A.getWidget(e.id);
            return null != t && (0, W.ZO)(t) ? t : null;
        }),
        s = l?.meta?.voiceStatesMaxShown ?? 8;
    return (0, i.jsxs)("div", {
        className: ex.ri,
        children: [
            (0, i.jsx)(p.l6P, {
                label: e_.intl.string(e_.t.dnvZSg),
                options: [
                    { id: "large", label: e_.intl.string(e_.t.YcOxtr), value: eg.OSZ.LARGE },
                    { id: "small", label: e_.intl.string(e_.t.BKIKqx), value: eg.OSZ.SMALL },
                ],
                onSelectionChange: E.A.setAvatarSizeMode,
                value: e,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)(p.l6P, {
                label: e_.intl.string(e_.t.J0dpcB),
                options: [
                    { id: "always", label: e_.intl.string(e_.t.nBmDrT), value: eg.pwA.ALWAYS },
                    {
                        id: "only-while-speaking",
                        label: e_.intl.string(e_.t["2OvIZY"]),
                        value: eg.pwA.ONLY_WHILE_SPEAKING,
                    },
                    { id: "never", label: e_.intl.string(e_.t.ekjlPL), value: eg.pwA.NEVER },
                ],
                onSelectionChange: E.A.setDisplayNameMode,
                value: t,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)(eV, { isLegacySettings: !0 }),
            (0, i.jsx)(p.l6P, {
                label: e_.intl.string(e_.t.swsWWC),
                options: [
                    { id: "always", label: e_.intl.string(e_.t.nBmDrT), value: eg.f5z.ALWAYS },
                    {
                        id: "only-while-speaking",
                        label: e_.intl.string(e_.t["2OvIZY"]),
                        value: eg.f5z.ONLY_WHILE_SPEAKING,
                    },
                ],
                onSelectionChange: E.A.setDisplayUserMode,
                value: n,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, i.jsx)("div", {
                className: ex.xJ,
                children: (0, i.jsx)(p.Apm, {
                    label: e_.intl.string(e_.t["X/Uyzc"]),
                    initialValue: s,
                    onValueRender: (e) => (e < eI ? e_.intl.string(e_.t.nrUzFL) : `${Math.floor(e)}`),
                    minValue: eI - 1,
                    maxValue: eS,
                    onValueChange: function (e) {
                        null != l &&
                            (e < eI
                                ? (0, f.cC)(l.id, { voiceStatesMaxShown: -1 })
                                : (0, f.cC)(l.id, { voiceStatesMaxShown: Math.floor(e) }));
                    },
                    markers: eb,
                    barStyles: { background: p.LU0.colors.BACKGROUND_MOD_STRONG.css },
                    fillStyles: { background: p.LU0.colors.BACKGROUND_BRAND.css },
                    onMarkerRender: (e) => (e < eI ? e_.intl.string(e_.t.nrUzFL) : `${Math.floor(e)}`),
                }),
            }),
        ],
    });
}
function eH(e) {
    let { showDivider: t = !1 } = e,
        [n, l] = (0, j.kn)([g.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, S.Ay)(() => () => {
        l(em.i.AUTO_DISMISS);
    }),
    n !== g.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, i.jsxs)("div", {
              className: ex.xC,
              children: [
                  (0, i.jsx)("div", {
                      children: (0, i.jsx)("img", { src: ef.A, alt: e_.intl.string(e_.t.mdXZh1), className: ex.tl }),
                  }),
                  (0, i.jsx)("div", {
                      children: (0, i.jsxs)("div", {
                          className: ex.vJ,
                          children: [
                              (0, i.jsx)(p.Heading, {
                                  variant: "heading-xl/medium",
                                  color: "text-strong",
                                  children: e_.intl.string(e_.t.jzjJQg),
                              }),
                              (0, i.jsx)(p.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: e_.intl.string(e_.t["5dOfxb"]),
                              }),
                          ],
                      }),
                  }),
                  (0, i.jsx)("div", {
                      children: (0, i.jsx)("img", { src: eE.A, alt: e_.intl.string(e_.t.mdXZh1), className: ex.lh }),
                  }),
                  (0, i.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: ex.VV,
                      children: (0, i.jsx)(p.Button, {
                          variant: "primary",
                          text: e_.intl.string(e_.t.Q26diF),
                          onClick: () => void l(em.i.DISMISS),
                      }),
                  }),
                  t ? (0, i.jsx)("div", { className: ex.$x }) : null,
              ],
          });
}
function eF(e) {
    let { runningGame: t, runningGameApplication: n } = e,
        s = n?.id,
        a = (0, A.bG)([V.A], () => V.A.isLimitedInteractionOverrideEnabled(s), [s]),
        r = l.useMemo(() => null != t && (0, w.qJ)(t.pid), [t]),
        o = (0, P.A)({ location: "overlay_user_settings" }),
        { disableClickableRegions: d, shouldShowKeybindIndicators: c } = (0, A.cf)([ea.default], () => ({
            disableClickableRegions: ea.default.disableClickableRegions,
            shouldShowKeybindIndicators: ea.default.showKeybindIndicators,
        }));
    return (0, i.jsxs)("div", {
        className: ex.U$,
        children: [
            (0, i.jsx)(eU, { isLegacySettings: !0 }),
            o &&
                (0, i.jsx)(p.dOG, {
                    label: e_.intl.string(e_.t.XZTl9r),
                    checked: c,
                    onChange: (e) => E.A.setShowKeybindIndicators(e),
                }),
            null != s &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: ex.yB,
                            children: [
                                (0, i.jsx)(p.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: e_.intl.string(e_.t.wgVQND),
                                }),
                                (0, i.jsx)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: e_.intl.string(e_.t["5SsyF5"]),
                                }),
                            ],
                        }),
                        (0, i.jsx)(p.dOG, {
                            checked: a || r,
                            disabled: r,
                            onChange: (e) => {
                                null != n && (0, F.x8)(n.id, e);
                            },
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsxs)("div", {
                        className: ex.yB,
                        children: [
                            (0, i.jsx)(p.Text, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                children: e_.intl.string(e_.t["+eFXxq"]),
                            }),
                            (0, i.jsx)(p.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: e_.intl.string(e_.t.kivMAp),
                            }),
                        ],
                    }),
                    (0, i.jsx)(p.dOG, {
                        checked: !d,
                        onChange: function () {
                            E.A.setDisableClickableRegions(!d);
                        },
                    }),
                ],
            }),
        ],
    });
}
function eY() {
    let e,
        { runningGame: t, runningGameApplication: n } = (0, y.A)(),
        l = (0, A.bG)([ei.default], () => ei.default.getCurrentUser());
    return (
        (0, S.Ay)(() => {
            if (ed.isPlatformEmbedded) return (0, R.a2)(), R.e0;
        }),
        ((e = eN(eC)),
        h().isEqual(e, eC) || (er.default.track(eg.HAw.OVERLAY_SETTINGS_UPDATED, e), (eC = e)),
        null == l)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(eA.A, {
                          title: e_.intl.string(e_.t["9cb1Uz"]),
                          children: [
                              (0, i.jsx)(eH, { showDivider: !0 }),
                              (0, i.jsxs)("div", {
                                  className: ex.U$,
                                  children: [
                                      (0, i.jsx)(eR, {}),
                                      (0, i.jsx)(eM, {}),
                                      (0, i.jsx)(eD, {}),
                                      (0, i.jsx)(eG, {}),
                                  ],
                              }),
                              (0, i.jsx)("div", { className: ex.Ri }),
                          ],
                      }),
                      (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(eF, { runningGame: t, runningGameApplication: n }),
                              (0, i.jsx)("div", { className: ex.Ri }),
                          ],
                      }),
                      (0, i.jsxs)(p.D0$, {
                          label: e_.intl.string(e_.t.r1TZfh),
                          children: [(0, i.jsx)(eB, {}), (0, i.jsx)("div", { className: ex.Ri })],
                      }),
                      (0, i.jsx)(ek, {}),
                  ],
              })
    );
}
