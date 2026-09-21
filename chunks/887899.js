n.d(e, { A: () => tg });
var s = n(477900),
    i = n(821609),
    o = n(866157),
    r = n(608935),
    a = n(801365),
    l = n(662940),
    u = n(201805),
    c = n(79545),
    C = n(412703),
    d = n(590202),
    E = n(792620),
    x = n(814793),
    A = n(753386),
    I = n(617986),
    T = n(190107),
    f = n(375708);
function O(t, e) {
    return C.o.VIDEO.has(t) ? d.Cy.WATCH_VIDEO : (0, x.vA)(e) ? d.Cy.START_QUEST : d.Cy.ACCEPT_QUEST;
}
function _(t, e, n, s) {
    let { launchInGameActivity: i } = (0, o.zW)(t);
    return (0, E.K$)(t)
        ? () => {
              (0, I.Fy)(t);
          }
        : (0, E.IO)(t)
          ? () => {
                (0, I.d5)({ quest: t, questContent: e, sourceQuestContent: n, sourceQuestContentCTA: s });
            }
          : (0, x.vA)(t)
            ? () => {
                  i();
              }
            : null;
}
let L = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: a,
                size: u,
                surface: C,
                isQuestAccessSuspended: d = !1,
            } = t,
            L = (0, o.fc)(e),
            y = _(e, r, a, O(n, e)),
            N = C === c.V3.QUEST_HOME_TILE_V2_FOOTER,
            g = N ? (0, I.Q_)(e).icon : (0, I.Oz)(e),
            S = N
                ? (0, l.C0)(e)
                : (function (t, e) {
                      if ((0, E.K$)(t)) return f.intl.string(f.t["/cXIc6"]);
                      if ((0, E.IO)(t)) return (0, A.WM)(e);
                      if ((0, x.vA)(t))
                          return (0, E.Ov)(t)
                              ? f.intl.string(f.t.CkUzLd)
                              : (0, E.vl)(t)
                                ? t.config.features.includes(T.Li.CLOUD_GAMING_ACTIVITY)
                                    ? f.intl.string(f.t["+qoymD"])
                                    : f.intl.string(f.t.E4kW5O)
                                : f.intl.string(f.t.l7E81v);
                      return f.intl.string(f.t["9KoPyB"]);
                  })(e, L);
        return null == y
            ? (0, s.jsx)(i.$, { size: u, variant: "secondary", disabled: !0, text: S, fullWidth: !0 })
            : (0, s.jsx)(i.$, {
                  size: u,
                  variant: (0, c.wX)(C),
                  onClick: d ? I.FS : y,
                  text: S,
                  icon: g,
                  fullWidth: !0,
                  "aria-disabled": d || void 0,
              });
    },
    y = function (t) {
        let {
                quest: e,
                taskType: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
                size: E,
                surface: x,
            } = t,
            A = x === c.V3.QUEST_HOME_TILE_V2_FOOTER,
            I = (0, a.r7)(e.config) ? f.intl.string(f.t.bAGFz3) : f.intl.string(f.t.vTgCWx),
            T = (0, u.ix)({
                quest: e,
                questContent: o,
                questContentPosition: C,
                questContentRowIndex: d,
                sourceQuestContent: r,
            }),
            L = (0, l.vj)(e),
            y = _(e, o, r, O(n, e));
        return (0, s.jsx)(i.$, { variant: (0, c.wX)(x), fullWidth: !0, size: E, onClick: A ? y : T, text: A ? L : I });
    };
var N = n(17928),
    g = n(859703),
    S = n(630037);
let m = function (t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
            size: l,
            surface: u,
            isQuestAccessSuspended: C = !1,
        } = t,
        d = e.id,
        { isClaiming: E } = (0, N.cf)(
            [g.A],
            () => ({ isClaiming: g.A.isClaimingReward(d) || g.A.isFetchingRewardCode(d) }),
            [d],
        ),
        x = null != u && (0, c.P0)(u),
        A = (0, S.D)({
            quest: e,
            questContent: n,
            sourceQuestContent: o,
            questContentPosition: r,
            questContentRowIndex: a,
            shouldRedirectToQuestHome: x,
        });
    return (0, s.jsx)(i.$, {
        variant: (0, c.wX)(u),
        fullWidth: !0,
        size: l,
        loading: E,
        onClick: C ? I.FS : A,
        text: f.intl.string(f.t.cfY4PE),
        "aria-disabled": C || void 0,
    });
};
var Q = n(582128),
    R = n(323889),
    P = n(141628),
    D = n(509434),
    p = n(274670),
    v = n(144779),
    h = n(738822),
    U = n(104886),
    j = n(18437),
    M = n(971649),
    q = n(651892),
    b = n(901406),
    w = n(862611),
    k = n(284846),
    W = n(862482),
    X = n(663417),
    z = n(775602),
    V = n(248489);
function F(t) {
    let {
            quest: e,
            analyticsCtxQuestContent: n,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            animateRefreshIcon: c = !0,
            isQuestAccessSuspended: C = !1,
        } = t,
        E = (0, j.Ut)(),
        x = (0, M.wW)(),
        A = (0, N.bG)([z.Ay], () => z.Ay.useReducedMotion),
        T = (0, u.Xf)({ useReducedMotion: A }),
        [O, _] = Q.useState(!1),
        { startingConsoleQuest: L, startConsoleQuest: y } = (0, o.Wj)({
            questId: e.id,
            beforeRequest: () => {
                (c ? T.startAnimation() : _(!0),
                    (0, U.E5)(U.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                        ? (0, p.r)({
                              type: v.F.CLICK_INTERNAL,
                              adCreativeType: R.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: d.Cy.DEFIBRILLATOR,
                              surfaceId: n,
                              sourceQuestContent: r,
                              impressionId: x(),
                              questContentPosition: a,
                              questContentRowIndex: l,
                          })
                        : E({
                              questId: e.id,
                              questContent: n,
                              questContentCTA: d.Cy.DEFIBRILLATOR,
                              questContentPosition: a,
                              questContentRowIndex: l,
                              sourceQuestContent: r,
                          }));
            },
            afterRequest: () => {
                c ? T.stopAnimation() : _(!1);
            },
        }),
        g = C ? I.FS : y;
    return c
        ? (0, s.jsx)(W.$n, {
              "data-migration-pending": !0,
              color: W.XD.PRIMARY,
              onClick: g,
              disabled: L,
              "aria-disabled": C || void 0,
              className: V.x,
              children: (0, s.jsxs)("div", { className: V.t, children: [T?.render(), f.intl.string(f.t.nPThNb)] }),
          })
        : (0, s.jsx)(i.$, {
              variant: "secondary",
              onClick: g,
              disabled: L,
              "aria-disabled": C || void 0,
              loading: O,
              fullWidth: !0,
              text: f.intl.string(f.t.cdd1iy),
              icon: X.RefreshIcon,
              iconPosition: "start",
          });
}
var K = n(935399),
    B = n(847374),
    Y = n(922016),
    G = n(980707),
    $ = n(477782),
    H = n(834730),
    J = n(820081),
    Z = n(900797),
    tt = n(178540),
    te = n(988436),
    tn = n(614972),
    ts = n(661531),
    ti = n(200192),
    to = n(653766),
    tr = n(928264),
    ta = n(802516),
    tl = n(22363),
    tu = n(403362),
    tc = n(652215);
function tC(t) {
    let {
            quest: e,
            supportedQuestConsoles: n,
            surface: r,
            size: a,
            analyticsCtxQuestContent: l,
            analyticsCtxSourceQuestContent: u,
            analyticsCtxQuestContentPosition: C,
            analyticsCtxQuestContentRowIndex: E,
            isQuestAccessSuspended: x = !1,
        } = t,
        { xboxAccounts: A, playstationAccounts: O } = (0, o.Du)(),
        _ = Q.useMemo(() => {
            let t = new Set();
            return (A.length > 0 && t.add(tc.fg2.XBOX), O.length > 0 && t.add(tc.fg2.PLAYSTATION), t);
        }, [A.length, O.length]),
        L = Q.useContext(tn.q),
        [y, N] = (0, o.tZ)(e.id),
        [g, S] = Q.useState(null),
        [m, R] = Q.useState(L?.getAutoOpen() ?? !1),
        [P, p] = Q.useState(null),
        v = Q.useRef(null),
        h = (0, M.go)(),
        U = (0, tt.O)((t) => t.errorHintsByQuestId.get(e.id));
    (0, K.u5)(() => {
        m && L?.onMenuOpen();
    });
    let j = Q.useCallback(
            (t) => {
                if (y === T.fO.CONSOLE && g === t && _.has(t))
                    return U?.some((t) => (0, b.$J)(t) === g) ? "error" : "connected";
            },
            [y, g, U, _],
        ),
        q = Q.useCallback(
            (t) => {
                if (t === T.fO.DESKTOP) {
                    (S(null),
                        N(T.fO.DESKTOP),
                        (0, b.pu)(e, {
                            content: l,
                            ctaContent: d.Cy.OPEN_GAME_LINK,
                            impressionId: h,
                            sourceQuestContent: u,
                        }));
                    return;
                }
                (_.has(t) ||
                    (0, b.Ps)(
                        { quest: e },
                        {
                            content: l,
                            ctaContent: d.Cy.CONNECT_CONSOLE,
                            position: C,
                            rowIndex: E,
                            impressionId: h,
                            sourceQuestContent: u,
                        },
                        t,
                    ),
                    S(t),
                    N(T.fO.CONSOLE));
            },
            [_, N, e, l, C, E, u, h],
        ),
        w = Q.useCallback(
            (t) => (t === T.fO.DESKTOP ? y === T.fO.DESKTOP : y === T.fO.CONSOLE && g === t && _.has(t)),
            [y, g, _],
        ),
        k = [
            ...n.map((t) => ({
                value: t,
                get label() {
                    return _.has(t)
                        ? f.intl.formatToPlainString(f.t.LEgD7t, {
                              platform: f.intl.string(t === tc.fg2.XBOX ? f.t.CoT7ML : f.t.fFl4jo),
                          })
                        : f.intl.formatToPlainString(f.t.XWSHTb, {
                              platform: f.intl.string(t === tc.fg2.XBOX ? f.t.CoT7ML : f.t.ikuLkv),
                          });
                },
            })),
            {
                value: T.fO.DESKTOP,
                get label() {
                    return f.intl.formatToPlainString(f.t.LEgD7t, { platform: f.intl.string(f.t.g6Dr44) });
                },
            },
        ],
        W = {
            buttonRef: v,
            size: a,
            fullWidth: !0,
            variant: (0, c.wX)(r, "primary"),
            text: f.intl.string(f.t.U7cCLU),
            iconPosition: "end",
        };
    return x
        ? (0, s.jsx)(i.$, { ...W, icon: B.a, onClick: I.FS, "aria-disabled": !0 })
        : (0, s.jsx)(Y.Y, {
              targetElementRef: v,
              position: "bottom",
              shouldShow: m,
              onRequestOpen: () => {
                  (L?.onMenuOpen(), R(!0));
              },
              onRequestClose: () => {
                  (L?.onMenuClose(), R(!1), p(null));
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, s.jsx)("div", {
                      style: { minWidth: v.current?.offsetWidth },
                      onMouseLeave: () => p(null),
                      children: (0, s.jsxs)(G.W, {
                          "data-menu-migrated": !0,
                          navId: `play-quest-platform-select-${e.id}`,
                          "aria-label": f.intl.string(f.t["TWSB/5"]),
                          onClose: n,
                          onSelect: void 0,
                          children: [
                              (0, s.jsx)($.rX, {
                                  children: k.map((t) => {
                                      let e = w(t.value),
                                          n = t.value === T.fO.DESKTOP && P === t.value,
                                          i = (function (t, e) {
                                              if ("connected" === e)
                                                  return { icon: ti.Q, color: ts.A.colors.ICON_FEEDBACK_POSITIVE.css };
                                              if ("error" === e)
                                                  return { icon: to.e, color: ts.A.colors.ICON_FEEDBACK_CRITICAL.css };
                                              switch (t) {
                                                  case T.fO.DESKTOP:
                                                      return { icon: tr.I, color: "currentColor" };
                                                  case tc.fg2.XBOX:
                                                      return { icon: ta.Y, color: "currentColor" };
                                                  case tc.fg2.PLAYSTATION:
                                                      return { icon: tl.X, color: "currentColor" };
                                                  default:
                                                      return (0, tu.xb)(t);
                                              }
                                          })(t.value, j(t.value)),
                                          o = (function (t) {
                                              switch (t) {
                                                  case T.fO.DESKTOP:
                                                      return f.intl.string(f.t["QXc01+"]);
                                                  case tc.fg2.XBOX:
                                                      return f.intl.string(f.t.CoT7ML);
                                                  case tc.fg2.PLAYSTATION:
                                                      return f.intl.string(f.t.fFl4jo);
                                                  default:
                                                      return (0, tu.xb)(t);
                                              }
                                          })(t.value);
                                      return (0, s.jsx)(
                                          $.Dr,
                                          {
                                              id: o,
                                              void_label: (0, s.jsx)(H.E, {
                                                  variant: "text-md/normal",
                                                  children: t.label,
                                              }),
                                              action: () => q(t.value),
                                              onFocus: () => p(t.value),
                                              leadingAccessory: { type: "icon", icon: i.icon, color: i.color },
                                              trailingIndicator: n
                                                  ? {
                                                        type: "icon",
                                                        icon: D.I,
                                                        size: "refresh_sm",
                                                        color: "currentColor",
                                                    }
                                                  : e
                                                    ? {
                                                          type: "icon",
                                                          icon: J.B,
                                                          size: "refresh_sm",
                                                          color: "currentColor",
                                                      }
                                                    : void 0,
                                          },
                                          o,
                                      );
                                  }),
                              }),
                              y === T.fO.CONSOLE &&
                                  null != g &&
                                  _.has(g) &&
                                  (0, s.jsx)($.rX, {
                                      children: (0, s.jsx)($.Dr, {
                                          id: "play-quest-platform-select-check-connection",
                                          void_label: (0, s.jsx)(H.E, {
                                              variant: "text-md/normal",
                                              children: f.intl.string(f.t.cdd1iy),
                                          }),
                                          onFocus: () => p(null),
                                          action: () => {
                                              (0, te.i)({ quest: e, sourceQuestContent: u, refreshOnOpen: !0 });
                                          },
                                          leadingAccessory: {
                                              type: "icon",
                                              icon: X.RefreshIcon,
                                              color: "currentColor",
                                          },
                                      }),
                                  }),
                          ],
                      }),
                  });
              },
              children: (t) => (0, s.jsx)(i.$, { ...W, ...t, icon: m ? Z.t : B.a }),
          });
}
function td(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: u,
            size: C,
            isQuestAccessSuspended: E,
        } = t,
        x = (0, o.RR)({ quest: e }),
        A = (0, M.wW)(),
        T = (0, o.Vn)(e),
        O = (0, o.fc)(e),
        [_, L, y] = (0, o.Qo)(e, O);
    return T || _ === h.X0.DESKTOP
        ? (0, s.jsx)(i.$, {
              variant: "secondary",
              size: C,
              disabled: !0,
              text: f.intl.string(f.t["9KoPyB"]),
              fullWidth: !0,
          })
        : x && n === c.V3.QUEST_HOME_TILE_FOOTER
          ? (0, s.jsx)(i.$, {
                size: C,
                variant: "secondary",
                onClick: () => {
                    E
                        ? (0, I.FS)()
                        : (0, b.se)(
                              { quest: e },
                              {
                                  content: r,
                                  ctaContent: d.Cy.CONNECT_CONSOLE,
                                  position: l,
                                  rowIndex: u,
                                  impressionId: A(),
                                  sourceQuestContent: a,
                              },
                          );
                },
                text: f.intl.string(f.t.Cfye4v),
                fullWidth: !0,
                "aria-disabled": E || void 0,
            })
          : (0, s.jsx)(F, {
                quest: e,
                analyticsCtxQuestContent: r,
                analyticsCtxSourceQuestContent: a,
                analyticsCtxQuestContentPosition: l,
                analyticsCtxQuestContentRowIndex: u,
                isQuestAccessSuspended: E,
            });
}
function tE(t) {
    let {
            quest: e,
            surface: n,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            size: u,
            isQuestAccessSuspended: C,
        } = t,
        { hasAlreadyLinked: E } = (0, k.U)(e),
        x = (0, M.wW)(),
        A = (0, j.Ut)();
    if (!0 === E)
        return n === c.V3.QUEST_BAR_FOOTER
            ? (0, s.jsx)(i.$, {
                  size: u,
                  fullWidth: !0,
                  variant: "secondary",
                  text: (0, q.wr)(e),
                  onClick: () => {
                      C
                          ? (0, I.FS)()
                          : (0, b.pu)(e, {
                                content: o,
                                ctaContent: d.Cy.OPEN_GAME_LINK,
                                position: a,
                                impressionId: x(),
                                sourceQuestContent: r,
                            });
                  },
                  "aria-disabled": C || void 0,
              })
            : (0, s.jsx)(i.$, {
                  size: u,
                  fullWidth: !0,
                  variant: (0, c.wX)(n),
                  text: f.intl.string(f.t.SHZo2x),
                  onClick: () => {
                      C ? (0, I.FS)() : (0, I._x)({ quest: e, sourceQuestContent: r });
                  },
                  "aria-disabled": C || void 0,
              });
    let T = n === c.V3.QUEST_HOME_TILE_V2_FOOTER;
    return (0, s.jsx)(i.$, {
        size: u,
        fullWidth: !0,
        variant: (0, c.wX)(n),
        icon: T ? void 0 : P.A,
        text: T ? f.intl.string(f.t.SHZo2x) : f.intl.string(f.t.sbdnpw),
        "aria-disabled": C || void 0,
        onClick: () => {
            C
                ? (0, I.FS)()
                : ((0, U.E5)(U.kI.STEP_2_CLICKED_INTERNAL, "quest_primary_cta_enrolled_play_quest")
                      ? (0, p.r)({
                            type: v.F.CLICK_INTERNAL,
                            adCreativeType: R.p.QUEST,
                            adCreativeId: e.id,
                            questContentCTA: d.Cy.OPEN_ACCOUNT_LINK_MODAL,
                            surfaceId: o,
                            sourceQuestContent: r,
                            impressionId: x(),
                            questContentPosition: a,
                            questContentRowIndex: l,
                        })
                      : A({
                            questId: e.id,
                            questContent: o,
                            questContentCTA: d.Cy.OPEN_ACCOUNT_LINK_MODAL,
                            questContentPosition: a,
                            questContentRowIndex: l,
                            sourceQuestContent: r,
                        }),
                  (0, I._x)({ quest: e, sourceQuestContent: r }));
        },
    });
}
function tx(t) {
    let { quest: e, analyticsCtxSourceQuestContent: n, size: r, parentContainerRef: a, isQuestAccessSuspended: l } = t,
        { applications: u } = (0, o.fc)(e),
        c = { variant: "secondary", fullWidth: !0, size: r, text: f.intl.string(f.t["93PTEs"]) };
    return l
        ? (0, s.jsx)(i.$, { ...c, onClick: I.FS, "aria-disabled": !0 })
        : (0, s.jsx)(w.A, {
              quest: e,
              sourceQuestContent: n,
              applications: u ?? [],
              targetElementRef: a,
              children: (t) => (0, s.jsx)(i.$, { ...c, ...t }),
          });
}
function tA(t) {
    let {
            quest: e,
            surface: n,
            size: o,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: u,
            isQuestAccessSuspended: C,
        } = t,
        E = (0, b.bg)(e),
        x = (0, M.wW)();
    return 0 === E.length
        ? (0, s.jsx)(i.$, {
              size: o,
              fullWidth: !0,
              variant: (0, c.wX)(n, "primary"),
              text: f.intl.string(f.t.U7cCLU),
              icon: D.I,
              iconPosition: "end",
              onClick: () => {
                  C
                      ? (0, I.FS)()
                      : (0, b.pu)(e, {
                            content: r,
                            ctaContent: d.Cy.OPEN_GAME_LINK,
                            position: l,
                            impressionId: x(),
                            sourceQuestContent: a,
                        });
              },
              "aria-disabled": C || void 0,
          })
        : (0, s.jsx)(tC, {
              quest: e,
              supportedQuestConsoles: E,
              surface: n,
              size: o,
              analyticsCtxQuestContent: r,
              analyticsCtxSourceQuestContent: a,
              analyticsCtxQuestContentPosition: l,
              analyticsCtxQuestContentRowIndex: u,
              isQuestAccessSuspended: C,
          });
}
let tI = function (t) {
        let {
                quest: e,
                surface: n,
                analyticsCtxQuestContent: o,
                analyticsCtxSourceQuestContent: r,
                analyticsCtxQuestContentPosition: a,
                analyticsCtxQuestContentRowIndex: l,
                size: u,
                isQuestAccessSuspended: C = !1,
            } = t,
            d = Q.useRef(null);
        return (0, E.I6)(e)
            ? (0, s.jsx)(tE, {
                  quest: e,
                  surface: n,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: a,
                  analyticsCtxQuestContentRowIndex: l,
                  size: u,
                  isQuestAccessSuspended: C,
              })
            : (0, E.g5)(e) && n === c.V3.QUEST_HOME_TILE_FOOTER
              ? (0, s.jsx)(td, {
                    quest: e,
                    surface: n,
                    size: u,
                    analyticsCtxQuestContent: o,
                    analyticsCtxSourceQuestContent: r,
                    analyticsCtxQuestContentPosition: a,
                    analyticsCtxQuestContentRowIndex: l,
                    isQuestAccessSuspended: C,
                })
              : (0, x.ui)(e) && n === c.V3.QUEST_BAR_FOOTER
                ? (0, s.jsx)("div", {
                      ref: d,
                      children: (0, s.jsx)(tx, {
                          quest: e,
                          analyticsCtxSourceQuestContent: r,
                          size: u,
                          parentContainerRef: d,
                          isQuestAccessSuspended: C,
                      }),
                  })
                : n === c.V3.QUEST_HOME_TILE_V2_FOOTER
                  ? (0, s.jsx)(tA, {
                        quest: e,
                        surface: n,
                        size: u,
                        analyticsCtxQuestContent: o,
                        analyticsCtxSourceQuestContent: r,
                        analyticsCtxQuestContentPosition: a,
                        analyticsCtxQuestContentRowIndex: l,
                        isQuestAccessSuspended: C,
                    })
                  : (0, s.jsx)(i.$, {
                        size: u,
                        variant: "secondary",
                        disabled: !0,
                        text: f.intl.string(f.t["9KoPyB"]),
                        fullWidth: !0,
                    });
    },
    tT = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: i,
            analyticsCtxQuestContent: o,
            analyticsCtxSourceQuestContent: r,
            analyticsCtxQuestContentPosition: a,
            analyticsCtxQuestContentRowIndex: l,
            size: u,
            isQuestAccessSuspended: c = !1,
        } = t;
        return (0, E.GL)(e)
            ? (0, s.jsx)(tI, {
                  quest: e,
                  surface: i,
                  size: u,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  analyticsCtxQuestContentPosition: a,
                  analyticsCtxQuestContentRowIndex: l,
                  isQuestAccessSuspended: c,
              })
            : (0, s.jsx)(L, {
                  quest: e,
                  taskType: n,
                  size: u,
                  surface: i,
                  analyticsCtxQuestContent: o,
                  analyticsCtxSourceQuestContent: r,
                  isQuestAccessSuspended: c,
              });
    },
    tf = function (t) {
        let { quest: e, size: n } = t,
            r = (0, o.S5)(e.config.expiresAt, { month: "numeric", day: "numeric" });
        return (0, s.jsx)(i.$, {
            variant: "secondary",
            disabled: !0,
            fullWidth: !0,
            size: n,
            text: f.intl.format(f.t["6p8BZx"], { expiryDate: r }),
        });
    },
    tO = function (t) {
        let {
            quest: e,
            taskType: n,
            analyticsCtxQuestContent: i,
            analyticsCtxSourceQuestContent: o,
            analyticsCtxQuestContentPosition: r,
            analyticsCtxQuestContentRowIndex: a,
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
                  analyticsCtxSourceQuestContent: o,
                  analyticsCtxQuestContentPosition: r,
                  analyticsCtxQuestContentRowIndex: a,
              })
            : (0, s.jsx)(tf, { quest: e, size: l });
    },
    t_ = function (t) {
        let {
            quest: e,
            taskType: n,
            surface: o,
            analyticsCtxQuestContent: r,
            analyticsCtxSourceQuestContent: a,
            analyticsCtxQuestContentPosition: l,
            analyticsCtxQuestContentRowIndex: u,
            size: C,
            isQuestAccessSuspended: d = !1,
        } = t;
        return ((0, E.t)({ quest: e }) || (0, E.g5)(e)) && o === c.V3.QUEST_BAR_FOOTER && (0, x.ui)(e)
            ? (0, s.jsx)(i.$, {
                  size: C,
                  variant: "secondary",
                  disabled: !0,
                  text: f.intl.string(f.t["9KoPyB"]),
                  fullWidth: !0,
              })
            : (0, s.jsx)(tT, {
                  quest: e,
                  taskType: n,
                  surface: o,
                  analyticsCtxQuestContent: r,
                  analyticsCtxSourceQuestContent: a,
                  analyticsCtxQuestContentPosition: l,
                  analyticsCtxQuestContentRowIndex: u,
                  size: C,
                  isQuestAccessSuspended: d,
              });
    };
var tL = n(396813);
function ty(t) {
    switch (t) {
        case C.n.ACHIEVEMENT_IN_ACTIVITY:
        case C.n.PLAY_ACTIVITY:
        case C.n.WATCH_VIDEO:
            return d.Cy.START_QUEST;
        default:
            return d.Cy.ACCEPT_QUEST;
    }
}
let tN = function (t) {
        var e;
        let {
                quest: n,
                taskType: r,
                size: a = "sm",
                surface: u,
                preClickCallback: x,
                isQuestAccessSuspended: O = !1,
                analyticsCtxQuestContent: _,
                analyticsCtxSourceQuestContent: L,
                analyticsCtxQuestContentPosition: y,
                analyticsCtxQuestContentRowIndex: S,
            } = t,
            m = {
                questContent: _,
                questContentCTA: ty(r),
                sourceQuestContent: L,
                questContentPosition: y,
                questContentRowIndex: S,
            },
            R = n.id,
            P = u === c.V3.QUEST_HOME_TILE_V2_FOOTER,
            { isEnrolling: D } = (0, N.cf)([g.A], () => ({ isEnrolling: g.A.isEnrolling(R) }), [R]),
            { icon: p, iconPosition: v } = P ? (0, I.Q_)(n) : { icon: (0, I.Oz)(n) },
            h = (0, j.Ut)(),
            U = (function (t, e, n, s, i) {
                let { launchInGameActivity: r } = (0, o.zW)(e),
                    a = (0, M.wW)(),
                    l = Q.useContext(tn.q),
                    u = i === c.V3.QUEST_HOME_TILE_V2_FOOTER;
                if ((0, E.K$)(e))
                    return () => {
                        (0, I.Fy)(e);
                    };
                if (u && !(0, E.I6)(e) && (0, b.bg)(e).length > 0)
                    return () => {
                        l?.setAutoOpen(!0);
                    };
                switch (t) {
                    case C.n.ACHIEVEMENT_IN_ACTIVITY:
                    case C.n.PLAY_ACTIVITY:
                        return () => {
                            r();
                        };
                    case C.n.ACHIEVEMENT_IN_GAME:
                        return u
                            ? () => {
                                  (0, I._x)({ quest: e, sourceQuestContent: s });
                              }
                            : null;
                    case C.n.PLAY_ON_DESKTOP:
                        return u && (0, E.no)(e)
                            ? () => {
                                  (0, b.pu)(e, {
                                      content: n,
                                      ctaContent: d.Cy.OPEN_GAME_LINK,
                                      impressionId: a(),
                                      sourceQuestContent: s,
                                  });
                              }
                            : null;
                    case C.n.PLAY_ON_XBOX:
                    case C.n.PLAY_ON_PLAYSTATION:
                    default:
                        return null;
                }
            })(r, n, _, L, u),
            q = P
                ? (0, l.C0)(n)
                : (function (t, e) {
                      let { features: n } = e.config;
                      switch (t) {
                          case C.n.WATCH_VIDEO:
                          case C.n.WATCH_VIDEO_ON_MOBILE:
                              return (0, A.WM)((0, E.Yh)(e));
                          case C.n.ACHIEVEMENT_IN_ACTIVITY:
                              return f.intl.string(f.t.CkUzLd);
                          case C.n.PLAY_ACTIVITY:
                              if (n.includes(T.Li.CLOUD_GAMING_ACTIVITY)) return f.intl.string(f.t["+qoymD"]);
                              return f.intl.string(f.t.E4kW5O);
                          default:
                              return f.intl.string(f.t.kUQLMJ);
                      }
                  })(r, n),
            w =
                ((e = U ?? void 0),
                r === C.n.WATCH_VIDEO
                    ? async () => {
                          await (0, I.e0)(n, {
                              questContent: m.questContent,
                              questContentCTA: m.questContentCTA,
                              sourceQuestContent: m.sourceQuestContent,
                              sourceQuestContentCTA: ty(r),
                              questContentPosition: m.questContentPosition,
                              questContentRowIndex: m.questContentRowIndex,
                          });
                      }
                    : async () => {
                          (
                              await (0, tL.Oy)(n.id, {
                                  questContent: m.questContent,
                                  questContentCTA: m.questContentCTA,
                                  sourceQuestContent: m.sourceQuestContent,
                                  questContentPosition: m.questContentPosition,
                                  questContentRowIndex: m.questContentRowIndex,
                              })
                          ).type === tL.WM.SUCCESS && e?.();
                      });
        return (0, s.jsx)(i.$, {
            size: a,
            loading: D,
            variant: (0, c.wX)(u, "primary"),
            onClick: () => {
                if (O) {
                    (h({
                        questId: R,
                        questContent: _,
                        questContentCTA: d.Cy.QUEST_ACCESS_SUSPENDED,
                        questContentPosition: y,
                        questContentRowIndex: S,
                        sourceQuestContent: L,
                    }),
                        (0, I.FS)());
                    return;
                }
                (x?.(), w());
            },
            text: q,
            icon: p,
            iconPosition: v,
            fullWidth: !0,
            "aria-disabled": O || void 0,
        });
    },
    tg = function (t) {
        let {
                quest: e,
                surface: n,
                preClickCallback: a,
                analyticsCtxQuestContent: l,
                analyticsCtxSourceQuestContent: u,
                analyticsCtxQuestContentPosition: C,
                analyticsCtxQuestContentRowIndex: d,
                size: E = "md",
            } = t,
            x = (0, c.Pd)(e),
            A = (0, o.Hv)();
        if (0 === Object.keys(e.config.taskConfigV2.tasks).length)
            return (0, s.jsx)(i.$, { variant: "primary", fullWidth: !0, size: "sm", text: f.intl.string(f.t.P84bAD) });
        let I = Object.values(e.config.taskConfigV2.tasks)[0],
            T = (function () {
                switch (x) {
                    case c.UA.UNENROLLED:
                        return (0, s.jsx)(tN, {
                            quest: e,
                            taskType: I.type,
                            size: E,
                            surface: n,
                            preClickCallback: a,
                            isQuestAccessSuspended: A,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                        });
                    case c.UA.ENROLLED:
                        return (0, s.jsx)(tT, {
                            quest: e,
                            taskType: I.type,
                            size: E,
                            isQuestAccessSuspended: A,
                            analyticsCtxQuestContent: l,
                            analyticsCtxSourceQuestContent: u,
                            analyticsCtxQuestContentPosition: C,
                            analyticsCtxQuestContentRowIndex: d,
                            surface: n,
                        });
                    case c.UA.INCOMPLETE:
                        return (0, s.jsx)(t_, {
                            quest: e,
                            taskType: I.type,
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
                        return (0, s.jsx)(tO, {
                            quest: e,
                            taskType: I.type,
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
                            taskType: I.type,
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
                            text: f.intl.string(f.t.P84bAD),
                        });
                }
            })();
        return A && x !== c.UA.CLAIMED && x !== c.UA.EXPIRED && x !== c.UA.EXPIRED_CLAIMED
            ? (0, s.jsx)(r.A, { children: T })
            : T;
    };
