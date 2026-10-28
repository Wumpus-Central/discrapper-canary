n.d(e, { A: () => tN });
var s = n(477900),
    i = n(821609),
    r = n(77870),
    a = n(608935),
    o = n(801365),
    l = n(662940),
    u = n(201805),
    c = n(79545),
    C = n(412703),
    d = n(590202),
    E = n(792620),
    x = n(814793),
    A = n(753386),
    f = n(617986),
    I = n(190107),
    T = n(105292);
function O(t, e) {
    return C.o.VIDEO.has(t) ? d.Cy.WATCH_VIDEO : (0, x.vA)(e) ? d.Cy.START_QUEST : d.Cy.ACCEPT_QUEST;
}
function L(t, e, n, s) {
    let { launchInGameActivity: i } = (0, r.zW)(t);
    return (0, E.K$)(t)
        ? () => {
              (0, f.Fy)(t);
          }
        : (0, E.IO)(t)
          ? () => {
                (0, f.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
            }
          : (0, x.vA)(t)
            ? () => {
                  i();
              }
            : null;
}
let g = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: o,
                size: u,
                surface: C,
                isQuestAccessSuspended: d = !1,
            } = t,
            g = (0, r.fc)(e),
            y = L(e, a, o, O(n, e)),
            N = C === c.V3.QUEST_HOME_TILE_V2_FOOTER,
            _ = N ? (0, f.Q_)(e).icon : (0, f.Oz)(e),
            S = N
                ? (0, l.C0)(e)
                : (function (t, e) {
                      if ((0, E.K$)(t)) return T.intl.string(T.t["/cXIc6"]);
                      if ((0, E.IO)(t)) return (0, A.WM)(e);
                      if ((0, x.vA)(t))
                          return (0, E.Ov)(t)
                              ? T.intl.string(T.t.CkUzLd)
                              : (0, E.vl)(t)
                                ? t.config.features.includes(I.Li.CLOUD_GAMING_ACTIVITY)
                                    ? T.intl.string(T.t["+qoymD"])
                                    : T.intl.string(T.t.E4kW5O)
                                : T.intl.string(T.t.l7E81v);
                      return T.intl.string(T.t["9KoPyB"]);
                  })(e, g);
        return null == y
            ? (0, s.jsx)(i.$, { size: u, variant: "secondary", disabled: !0, text: S, fullWidth: !0 })
            : (0, s.jsx)(i.$, {
                  size: u,
                  variant: (0, c.wX)(C),
                  onClick: d ? f.FS : y,
                  text: S,
                  icon: _,
                  fullWidth: !0,
                  "aria-disabled": d || void 0,
              });
    },
    y = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
                size: E,
                surface: x,
            } = t,
            A = x === c.V3.QUEST_HOME_TILE_V2_FOOTER,
            f = (0, o.r7)(e.config) ? T.intl.string(T.t.bAGFz3) : T.intl.string(T.t.vTgCWx),
            I = (0, u.ix)({
                quest: e,
                questContent: r,
                questContentPosition: C,
                questContentRowIndex: d,
                sourceQuestContent: a,
            }),
            g = (0, l.vj)(e),
            y = L(e, r, a, O(n, e));
        return (0, s.jsx)(i.$, { variant: (0, c.wX)(x), fullWidth: !0, size: E, onClick: A ? y : I, text: A ? g : f });
    };
var N = n(17928),
    _ = n(859703),
    S = n(630037);
let m = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: o,
            size: l,
            surface: u,
            isQuestAccessSuspended: C = !1,
        } = t,
        d = e.id,
        { isClaiming: E } = (0, N.cf)(
            [_.A],
            () => ({ isClaiming: _.A.isClaimingReward(d) || _.A.isFetchingRewardCode(d) }),
            [d],
        ),
        x = null != u && (0, c.P0)(u),
        A = (0, S.D)({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
            questContentPosition: a,
            questContentRowIndex: o,
            shouldRedirectToQuestHome: x,
        });
    return (0, s.jsx)(i.$, {
        variant: (0, c.wX)(u),
        fullWidth: !0,
        size: l,
        loading: E,
        onClick: C ? f.FS : A,
        text: T.intl.string(T.t.cfY4PE),
        "aria-disabled": C || void 0,
    });
};
var Q = n(582128),
    R = n(323889),
    v = n(141628),
    P = n(509434),
    h = n(507395),
    D = n(144779),
    p = n(738822),
    j = n(971649),
    U = n(651892),
    M = n(620954),
    b = n(194267),
    q = n(284846),
    w = n(862482),
    W = n(663417),
    X = n(775602),
    k = n(248489);
function z(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: l,
            animateRefreshIcon: c = !0,
            isQuestAccessSuspended: C = !1,
        } = t,
        E = (0, j.wW)(),
        x = (0, N.bG)([X.Ay], () => X.Ay.useReducedMotion),
        A = (0, u.Xf)({ useReducedMotion: x }),
        [I, O] = Q.useState(!1),
        { startingConsoleQuest: L, startConsoleQuest: g } = (0, r.Wj)({
            questId: e.id,
            beforeRequest: () => {
                (c ? A.startAnimation() : O(!0),
                    (0, h.r)({
                        type: D.F.CLICK_INTERNAL,
                        adCreativeType: R.p.QUEST,
                        adCreativeId: e.id,
                        questContentCTA: d.Cy.DEFIBRILLATOR,
                        surfaceId: n,
                        sourceQuestContent: a,
                        impressionId: E(),
                        questContentPosition: o,
                        questContentRowIndex: l,
                    }));
            },
            afterRequest: () => {
                c ? A.stopAnimation() : O(!1);
            },
        }),
        y = C ? f.FS : g;
    return c
        ? (0, s.jsx)(w.$n, {
              "data-migration-pending": !0,
              color: w.XD.PRIMARY,
              onClick: y,
              disabled: L,
              "aria-disabled": C || void 0,
              className: k.x,
              children: (0, s.jsxs)("div", { className: k.t, children: [A?.render(), T.intl.string(T.t.nPThNb)] }),
          })
        : (0, s.jsx)(i.$, {
              variant: "secondary",
              onClick: y,
              disabled: L,
              "aria-disabled": C || void 0,
              loading: I,
              fullWidth: !0,
              text: T.intl.string(T.t.cdd1iy),
              icon: W.RefreshIcon,
              iconPosition: "start",
          });
}
var V = n(935399),
    F = n(847374),
    K = n(265872),
    Y = n(980707),
    B = n(477782),
    G = n(834730),
    $ = n(820081),
    H = n(900797),
    J = n(178540),
    Z = n(988436),
    tt = n(614972),
    te = n(661531),
    tn = n(200192),
    ts = n(653766),
    ti = n(928264),
    tr = n(802516),
    ta = n(22363),
    to = n(403362),
    tl = n(652215);
function tu(t) {
    let {
            quest: e,
            supportedQuestConsoles: n,
            surface: a,
            size: o,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: C,
            analyticsCtxQuestContentRowIndex: E,
            isQuestAccessSuspended: x = !1,
        } = t,
        { xboxAccounts: A, playstationAccounts: O } = (0, r.Du)(),
        L = Q.useMemo(() => {
            let t = new Set();
            return (A.length > 0 && t.add(tl.fg2.XBOX), O.length > 0 && t.add(tl.fg2.PLAYSTATION), t);
        }, [A.length, O.length]),
        g = Q.useContext(tt.q),
        [y, N] = (0, r.tZ)(e.id),
        [_, S] = Q.useState(null),
        [m, R] = Q.useState(g?.getAutoOpen() ?? !1),
        [v, h] = Q.useState(null),
        D = Q.useRef(null),
        p = (0, j.go)(),
        U = (0, J.O)((t) => t.errorHintsByQuestId.get(e.id));
    (0, V.u5)(() => {
        m && g?.onMenuOpen();
    });
    let b = Q.useCallback(
            (t) => {
                if (y === I.fO.CONSOLE && _ === t && L.has(t))
                    return U?.some((t) => (0, M.$J)(t) === _) ? "error" : "connected";
            },
            [y, _, U, L],
        ),
        q = Q.useCallback(
            (t) => {
                if (t === I.fO.DESKTOP) {
                    (S(null),
                        N(I.fO.DESKTOP),
                        (0, M.pu)(e, {
                            content: l,
                            ctaContent: d.Cy.OPEN_GAME_LINK,
                            impressionId: p,
                            sourceQuestContent: u,
                        }));
                    return;
                }
                (L.has(t) ||
                    (0, M.Ps)(
                        { quest: e },
                        {
                            content: l,
                            ctaContent: d.Cy.CONNECT_CONSOLE,
                            position: C,
                            rowIndex: E,
                            impressionId: p,
                            sourceQuestContent: u,
                        },
                        t,
                    ),
                    S(t),
                    N(I.fO.CONSOLE));
            },
            [L, N, e, l, C, E, u, p],
        ),
        w = Q.useCallback(
            (t) => (t === I.fO.DESKTOP ? y === I.fO.DESKTOP : y === I.fO.CONSOLE && _ === t && L.has(t)),
            [y, _, L],
        ),
        X = [
            ...n.map((t) => ({
                value: t,
                get label() {
                    return L.has(t)
                        ? T.intl.formatToPlainString(T.t.LEgD7t, {
                              platform: T.intl.string(t === tl.fg2.XBOX ? T.t.CoT7ML : T.t.fFl4jo),
                          })
                        : T.intl.formatToPlainString(T.t.XWSHTb, {
                              platform: T.intl.string(t === tl.fg2.XBOX ? T.t.CoT7ML : T.t.ikuLkv),
                          });
                },
            })),
            {
                value: I.fO.DESKTOP,
                get label() {
                    return T.intl.formatToPlainString(T.t.LEgD7t, { platform: T.intl.string(T.t.g6Dr44) });
                },
            },
        ],
        k = {
            buttonRef: D,
            size: o,
            fullWidth: !0,
            variant: (0, c.wX)(a, "primary"),
            text: T.intl.string(T.t.U7cCLU),
            iconPosition: "end",
        };
    return x
        ? (0, s.jsx)(i.$, { ...k, icon: F.a, onClick: f.FS, "aria-disabled": !0 })
        : (0, s.jsx)(K.Y, {
              targetElementRef: D,
              position: "bottom",
              shouldShow: m,
              onRequestOpen: () => {
                  (g?.onMenuOpen(), R(!0));
              },
              onRequestClose: () => {
                  (g?.onMenuClose(), R(!1), h(null));
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, s.jsx)("div", {
                      style: { minWidth: D.current?.offsetWidth },
                      onMouseLeave: () => h(null),
                      children: (0, s.jsxs)(Y.W, {
                          "data-menu-migrated": !0,
                          navId: `play-quest-platform-select-${e.id}`,
                          "aria-label": T.intl.string(T.t["TWSB/5"]),
                          onClose: n,
                          onSelect: void 0,
                          children: [
                              (0, s.jsx)(B.rX, {
                                  children: X.map((t) => {
                                      let e = w(t.value),
                                          n = t.value === I.fO.DESKTOP && v === t.value,
                                          i = (function (t, e) {
                                              if ("connected" === e)
                                                  return { icon: tn.Q, color: te.A.colors.ICON_FEEDBACK_POSITIVE.css };
                                              if ("error" === e)
                                                  return { icon: ts.e, color: te.A.colors.ICON_FEEDBACK_CRITICAL.css };
                                              switch (t) {
                                                  case I.fO.DESKTOP:
                                                      return { icon: ti.I, color: "currentColor" };
                                                  case tl.fg2.XBOX:
                                                      return { icon: tr.Y, color: "currentColor" };
                                                  case tl.fg2.PLAYSTATION:
                                                      return { icon: ta.X, color: "currentColor" };
                                                  default:
                                                      return (0, to.xb)(t);
                                              }
                                          })(t.value, b(t.value)),
                                          r = (function (t) {
                                              switch (t) {
                                                  case I.fO.DESKTOP:
                                                      return T.intl.string(T.t["QXc01+"]);
                                                  case tl.fg2.XBOX:
                                                      return T.intl.string(T.t.CoT7ML);
                                                  case tl.fg2.PLAYSTATION:
                                                      return T.intl.string(T.t.fFl4jo);
                                                  default:
                                                      return (0, to.xb)(t);
                                              }
                                          })(t.value);
                                      return (0, s.jsx)(
                                          B.Dr,
                                          {
                                              id: r,
                                              void_label: (0, s.jsx)(G.E, {
                                                  variant: "text-md/normal",
                                                  children: t.label,
                                              }),
                                              action: () => q(t.value),
                                              onFocus: () => h(t.value),
                                              leadingAccessory: { type: "icon", icon: i.icon, color: i.color },
                                              trailingIndicator: n
                                                  ? {
                                                        type: "icon",
                                                        icon: P.I,
                                                        size: "refresh_sm",
                                                        color: "currentColor",
                                                    }
                                                  : e
                                                    ? {
                                                          type: "icon",
                                                          icon: $.B,
                                                          size: "refresh_sm",
                                                          color: "currentColor",
                                                      }
                                                    : void 0,
                                          },
                                          r,
                                      );
                                  }),
                              }),
                              y === I.fO.CONSOLE &&
                                  null != _ &&
                                  L.has(_) &&
                                  (0, s.jsx)(B.rX, {
                                      children: (0, s.jsx)(B.Dr, {
                                          id: "play-quest-platform-select-check-connection",
                                          void_label: (0, s.jsx)(G.E, {
                                              variant: "text-md/normal",
                                              children: T.intl.string(T.t.cdd1iy),
                                          }),
                                          onFocus: () => h(null),
                                          action: () => {
                                              (0, Z.i)({ quest: e, sourceQuestContent: u, refreshOnOpen: !0 });
                                          },
                                          leadingAccessory: {
                                              type: "icon",
                                              icon: W.RefreshIcon,
                                              color: "currentColor",
                                          },
                                      }),
                                  }),
                          ],
                      }),
                  });
              },
              children: (t) => (0, s.jsx)(i.$, { ...k, ...t, icon: m ? H.t : F.a }),
          });
}
function tc(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: u,
            size: C,
            isQuestAccessSuspended: E,
        } = t,
        x = (0, r.RR)({ quest: e }),
        A = (0, j.wW)(),
        I = (0, r.Vn)(e),
        O = (0, r.fc)(e),
        [L, g, y] = (0, r.Qo)(e, O);
    return I || L === p.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: C,
              disabled: !0,
              text: T.intl.string(T.t["9KoPyB"]),
              fullWidth: !0,
          })
        : x && n === c.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: C,
                variant: "secondary",
                onClick: () => {
                    E
                        ? (0, f.FS)()
                        : (0, M.se)(
                              { quest: e },
                              {
                                  content: a,
                                  ctaContent: d.Cy.CONNECT_CONSOLE,
                                  position: l,
                                  rowIndex: u,
                                  impressionId: A(),
                                  sourceQuestContent: o,
                              },
                          );
                },
                text: T.intl.string(T.t.Cfye4v),
                fullWidth: !0,
                "aria-disabled": E || void 0,
            })
          : (0, s.jsx)(z, {
                quest: e,
                analyticsCtxQuestContent: a,
                analyticsCtxSourceQuestContent: o,
                analyticsCtxQuestContentPosition: l,
                analyticsCtxQuestContentRowIndex: u,
                isQuestAccessSuspended: E,
            });
}
function tC(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: l,
            size: u,
            isQuestAccessSuspended: C,
        } = t,
        { hasAlreadyLinked: E } = (0, q.U)(e),
        x = (0, j.wW)();
    if (!0 === E)
        return n === c.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: u,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, U.wr)(e),
                  onClick: () => {
                      C
                          ? (0, f.FS)()
                          : (0, M.pu)(e, {
                                content: r,
                                ctaContent: d.Cy.OPEN_GAME_LINK,
                                position: o,
                                impressionId: x(),
                                sourceQuestContent: a,
                            });
                  },
                  "aria-disabled": C || void 0,
              })
            : (0, s.jsx)(i.$, {
                  size: u,
                  fullWidth: !0,
                  variant: (0, c.wX)(n),
                  text: T.intl.string(T.t.SHZo2x),
                  onClick: () => {
                      C ? (0, f.FS)() : (0, f._x)({ quest: e, sourceQuestContent: a });
                  },
                  "aria-disabled": C || void 0,
              });
    let A = n === c.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, s.jsx)(i.$, {
        size: u,
        fullWidth: !0,
        variant: (0, c.wX)(n),
        icon: A ? void 0 : v.A,
        text: A ? T.intl.string(T.t.SHZo2x) : T.intl.string(T.t.sbdnpw),
        "aria-disabled": C || void 0,
        onClick: () => {
            C
                ? (0, f.FS)()
                : ((0, h.r)({
                      type: D.F.CLICK_INTERNAL,
                      adCreativeType: R.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: d.Cy.OPEN_ACCOUNT_LINK_MODAL,
                      surfaceId: r,
                      sourceQuestContent: a,
                      impressionId: x(),
                      questContentPosition: o,
                      questContentRowIndex: l,
                  }),
                  (0, f._x)({ quest: e, sourceQuestContent: a }));
        },
    });
}
function td(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: a, parentContainerRef: o, isQuestAccessSuspended: l } = t,
        { applications: u } = (0, r.fc)(e),
        c = { variant: "secondary", fullWidth: !0, size: a, text: T.intl.string(T.t["93PTEs"]) };
    return l
        ? (0, s.jsx)(i.$, { ...c, onClick: f.FS, "aria-disabled": !0 })
        : (0, s.jsx)(b.A, {
              quest: e,
              sourceQuestContent: n,
              applications: u ?? [],
              targetElementRef: o,
              children: (t) => (0, s.jsx)(i.$, { ...c, ...t }),
          });
}
function tE(t) {
    let {
            quest: e,
            surface: n,
            size: r,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: u,
            isQuestAccessSuspended: C,
        } = t,
        E = (0, M.bg)(e),
        x = (0, j.wW)();
    return 0 === E.length
        ? (0, s.jsx)(i.$, {
              size: r,
              fullWidth: !0,
              variant: (0, c.wX)(n, "primary"),
              text: T.intl.string(T.t.U7cCLU),
              icon: P.I,
              iconPosition: "end",
              onClick: () => {
                  C
                      ? (0, f.FS)()
                      : (0, M.pu)(e, {
                            content: a,
                            ctaContent: d.Cy.OPEN_GAME_LINK,
                            position: l,
                            impressionId: x(),
                            sourceQuestContent: o,
                        });
              },
              "aria-disabled": C || void 0,
          })
        : (0, s.jsx)(tu, {
              quest: e,
              supportedQuestConsoles: E,
              surface: n,
              size: r,
              analyticsCtxQuestContent: a,
              analyticsCtxSourceQuestContent: o,
              analyticsCtxQuestContentPosition: l,
              analyticsCtxQuestContentRowIndex: u,
              isQuestAccessSuspended: C,
          });
}
let tx = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: o,
                analyticsCtxQuestContentRowIndex: l,
                size: u,
                isQuestAccessSuspended: C = !1,
            } = t,
            d = Q.useRef(null);
        return (0, E.I6)(e)
            ? (0, s.jsx)(tC, {
                  quest: e,
                  surface: n,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: a,
                  analyticsCtxQuestContentPosition: o,
                  analyticsCtxQuestContentRowIndex: l,
                  size: u,
                  isQuestAccessSuspended: C,
              })
            : (0, E.g5)(e) && n === c.V3.QUEST_HOME_TILE_FOOTER
              ? (0, s.jsx)(tc, {
                    quest: e,
                    surface: n,
                    size: u,
                    analyticsCtxQuestContent: r,
                    analyticsCtxSourceQuestContent: a,
                    analyticsCtxQuestContentPosition: o,
                    analyticsCtxQuestContentRowIndex: l,
                    isQuestAccessSuspended: C,
                })
              : (0, x.ui)(e) && n === c.V3.QUEST_BAR_FOOTER
                ? (0, s.jsx)("div", {
                      ref: d,
                      children: (0, s.jsx)(td, {
                          quest: e,
                          analyticsCtxSourceQuestContent: a,
                          size: u,
                          parentContainerRef: d,
                          isQuestAccessSuspended: C,
                      }),
                  })
                : n === c.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, s.jsx)(tE, {
                        quest: e,
                        surface: n,
                        size: u,
                        analyticsCtxQuestContent: r,
                        analyticsCtxSourceQuestContent: a,
                        analyticsCtxQuestContentPosition: o,
                        analyticsCtxQuestContentRowIndex: l,
                        isQuestAccessSuspended: C,
                    })
                  : (0, s.jsx)(i.$, {
                        size: u,
                        variant: "secondary",
                        disabled: !0,
                        text: T.intl.string(T.t["9KoPyB"]),
                        fullWidth: !0,
                    });
    },
    tA = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: i,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: o,
            analyticsCtxQuestContentRowIndex: l,
            size: u,
            isQuestAccessSuspended: c = !1,
        } = t;
        return (0, E.GL)(e)
            ? (0, s.jsx)(tx, {
                  quest: e,
                  surface: i,
                  size: u,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: a,
                  analyticsCtxQuestContentPosition: o,
                  analyticsCtxQuestContentRowIndex: l,
                  isQuestAccessSuspended: c,
              })
            : (0, s.jsx)(g, {
                  quest: e,
                  taskType: n,
                  size: u,
                  surface: i,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: a,
                  isQuestAccessSuspended: c,
              });
    },
    tf = function (t) {
        let { quest: e, size: n } = t,
            a = (0, r.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" });
        return (0, s.jsx)(i.$, {
            variant: "secondary",
            disabled: !0,
            fullWidth: !0,
            size: n,
            text: T.intl.format(T.t["6p8BZx"], { expiryDate: a }),
        });
    },
    tI = function (t) {
        let {
            quest: e,
            taskType: n,
            analyticsCtxQuestContent: i,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: o,
            size: l,
            surface: u,
        } = t;
        return u === c.V3.QUEST_HOME_TILE_FOOTER
            ? (0, s.jsx)(y, {
                  quest: e,
                  taskType: n,
                  size: l,
                  surface: u,
                  analyticsCtxQuestContent: i,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: a,
                  analyticsCtxQuestContentRowIndex: o,
              })
            : (0, s.jsx)(tf, { quest: e, size: l });
    },
    tT = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: r,
            analyticsCtxQuestContent: a,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: u,
            size: C,
            isQuestAccessSuspended: d = !1,
        } = t;
        return ((0, E.t)({ quest: e }) || (0, E.g5)(e)) && r === c.V3.QUEST_BAR_FOOTER && (0, x.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: C,
                  variant: "secondary",
                  disabled: !0,
                  text: T.intl.string(T.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(tA, {
                  quest: e,
                  taskType: n,
                  surface: r,
                  analyticsCtxQuestContent: a,
                  analyticsCtxSourceQuestContent: o,
                  analyticsCtxQuestContentPosition: l,
                  analyticsCtxQuestContentRowIndex: u,
                  size: C,
                  isQuestAccessSuspended: d,
              });
    };
var tO = n(427495),
    tL = n(18437);
function tg(t) {
    switch (t) {
        case C.n.ACHIEVEMENT_IN_ACTIVITY:
        case C.n.PLAY_ACTIVITY:
        case C.n.WATCH_VIDEO:
            return d.Cy.START_QUEST;
        default:
            return d.Cy.ACCEPT_QUEST;
    }
}
let ty = function (t) {
        var e;
        let {
                quest: n,
                taskType: a,
                size: o = "sm",
                surface: u,
                preClickCallback: x,
                isQuestAccessSuspended: O = !1,
                analyticsCtxQuestContent: L,
                analyticsCtxSourceQuestContent: g,
                analyticsCtxQuestContentPosition: y,
                analyticsCtxQuestContentRowIndex: S,
            } = t,
            m = {
                questContent: L,
                questContentCTA: tg(a),
                sourceQuestContent: g,
                questContentPosition: y,
                questContentRowIndex: S,
            },
            R = n.id,
            v = u === c.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: P } = (0, N.cf)([_.A], () => ({ isEnrolling: _.A.isEnrolling(R) }), [R]),
            { icon: h, iconPosition: D } = v ? (0, f.Q_)(n) : { icon: (0, f.Oz)(n) },
            p = (0, tL.Ut)(),
            U = (function (t, e, n, s, i) {
                let { launchInGameActivity: a } = (0, r.zW)(e),
                    o = (0, j.wW)(),
                    l = Q.useContext(tt.q),
                    u = i === c.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, E.K$)(e))
                    return () => {
                        (0, f.Fy)(e);
                    };
                if (u && !(0, E.I6)(e) && (0, M.bg)(e).length > 0)
                    return () => {
                        l?.setAutoOpen(!0);
                    };
                switch (t) {
                    case C.n.ACHIEVEMENT_IN_ACTIVITY:
                    case C.n.PLAY_ACTIVITY:
                        return () => {
                            a();
                        };
                    case C.n.ACHIEVEMENT_IN_GAME:
                        return u
                            ? () => {
                                  (0, f._x)({ quest: e, sourceQuestContent: s });
                              }
                            : null;
                    case C.n.PLAY_ON_DESKTOP:
                        return u && (0, E.no)(e)
                            ? () => {
                                  (0, M.pu)(e, {
                                      content: n,
                                      ctaContent: d.Cy.OPEN_GAME_LINK,
                                      impressionId: o(),
                                      sourceQuestContent: s,
                                  });
                              }
                            : null;
                    case C.n.PLAY_ON_XBOX:
                    case C.n.PLAY_ON_PLAYSTATION:
                    default:
                        return null;
                }
            })(a, n, L, g, u),
            b = v
                ? (0, l.C0)(n)
                : (function (t, e) {
                      let { features: n } = e.config;
                      switch (t) {
                          case C.n.WATCH_VIDEO:
                          case C.n.WATCH_VIDEO_ON_MOBILE:
                              return (0, A.WM)((0, E.Yh)(e));
                          case C.n.ACHIEVEMENT_IN_ACTIVITY:
                              return T.intl.string(T.t.CkUzLd);
                          case C.n.PLAY_ACTIVITY:
                              if (n.includes(I.Li.CLOUD_GAMING_ACTIVITY)) return T.intl.string(T.t["+qoymD"]);
                              return T.intl.string(T.t.E4kW5O);
                          default:
                              return T.intl.string(T.t.kUQLMJ);
                      }
                  })(a, n),
            q =
                ((e = U ?? void 0),
                a === C.n.WATCH_VIDEO
                    ? async () => {
                          await (0, f.e0)(n, {
                              questContent: m.questContent,
                              questContentCTA: m.questContentCTA,
                              sourceQuestContent: m.sourceQuestContent,
                              sourceQuestContentCTA: tg(a),
                              questContentPosition: m.questContentPosition,
                              questContentRowIndex: m.questContentRowIndex,
                          });
                      }
                    : async () => {
                          (
                              await (0, tO.Oy)(n.id, {
                                  questContent: m.questContent,
                                  questContentCTA: m.questContentCTA,
                                  sourceQuestContent: m.sourceQuestContent,
                                  questContentPosition: m.questContentPosition,
                                  questContentRowIndex: m.questContentRowIndex,
                              })
                          ).type === tO.WM.SUCCESS && e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: o,
            loading: P,
            variant: (0, c.wX)(u, "primary"),
            onClick: () => {
                if (O) {
                    (p({
                        questId: R,
                        questContent: L,
                        questContentCTA: d.Cy.QUEST_ACCESS_SUSPENDED,
                        questContentPosition: y,
                        questContentRowIndex: S,
                        sourceQuestContent: g,
                    }),
                        (0, f.FS)());
                    return;
                }
                (x?.(), q());
            },
            text: b,
            icon: h,
            iconPosition: D,
            fullWidth: !0,
            "aria-disabled": O || void 0,
        });
    },
    tN = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: o,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
                size: E = "md",
            } = t,
            x = (0, c.Pd)(e),
            A = (0, r.Hv)();
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: T.intl.string(T.t.P84bAD) });
        let f = (0, c.cc)(e),
            I = (function () {
                switch (x) {
                    case c.UA.UNENROLLED:
                        return (0, s.jsx)(ty, {
                            quest: e,
                            taskType: f,
                            size: E,
                            surface: n,
                            preClickCallback: o,
                            isQuestAccessSuspended: A,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case c.UA.ENROLLED:
                        return (0, s.jsx)(tA, {
                            quest: e,
                            taskType: f,
                            size: E,
                            isQuestAccessSuspended: A,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                            surface: n,
                        });
                    case c.UA.INCOMPLETE:
                        return (0, s.jsx)(tT, {
                            quest: e,
                            taskType: f,
                            size: E,
                            isQuestAccessSuspended: A,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                            surface: n,
                        });
                    case c.UA.EXPIRED_CLAIMABLE:
                    case c.UA.COMPLETED:
                        return (0, s.jsx)(m, {
                            quest: e,
                            size: E,
                            surface: n,
                            isQuestAccessSuspended: A,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case c.UA.EXPIRED_CLAIMED:
                        return (0, s.jsx)(tI, {
                            quest: e,
                            taskType: f,
                            size: E,
                            surface: n,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case c.UA.CLAIMED:
                        return (0, s.jsx)(y, {
                            quest: e,
                            taskType: f,
                            size: E,
                            surface: n,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case c.UA.EXPIRED:
                        return (0, s.jsx)(tf, { quest: e, size: E });
                    default:
                        return (0, s.jsx)(i.$, {
                            variant: "primary",
                            fullWidth: !0,
                            size: E,
                            text: T.intl.string(T.t.P84bAD),
                        });
                }
            })();
        return A && x !== c.UA.CLAIMED && x !== c.UA.EXPIRED && x !== c.UA.EXPIRED_CLAIMED
            ? (0, s.jsx)(a.A, { children: I })
            : I;
    };
