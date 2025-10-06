n.d(t, { Z: () => es }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(873546),
    l = n(793030),
    s = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(393238),
    u = n(727637),
    m = n(100527),
    p = n(906732),
    h = n(368326),
    x = n(429467),
    f = n(243778),
    b = n(440051),
    g = n(734934),
    v = n(480173),
    j = n(300284),
    _ = n(680295),
    y = n(785717),
    C = n(209698),
    E = n(687158),
    S = n(612600),
    N = n(892001),
    T = n(899007),
    O = n(648052),
    P = n(867176),
    k = n(537006),
    I = n(483424),
    w = n(681837),
    R = n(638970),
    A = n(502762),
    Z = n(530),
    D = n(309494),
    L = n(4517),
    M = n(350207),
    U = n(420654),
    F = n(695346),
    G = n(158776),
    B = n(246946),
    z = n(572004),
    V = n(5192),
    H = n(74538),
    W = n(7093),
    K = n(175015),
    q = n(474376),
    Y = n(431282),
    X = n(213928),
    J = n(587243),
    Q = n(383832),
    $ = n(981631),
    ee = n(921944),
    et = n(228168),
    en = n(671955),
    ea = n(388032),
    er = n(54482),
    ei = n(116649);
function el(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function es(e) {
    let {
            currentUser: t,
            onClose: n,
            setPopoutRef: es,
            highlightBadge: eo,
            openedAt: ec,
            guildId: ed,
            guildProfileEnabled: eu,
        } = e,
        em = __OVERLAY__,
        ep = (0, E.ZP)(t.id, ed),
        { analyticsLocations: eh } = (0, p.ZP)(m.Z.USER_PROFILE_ACCOUNT_POPOUT),
        ex = (0, y.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: ed,
        }),
        { ref: ef } = (0, d.ZP)(),
        eb = (0, u.Z)(ef);
    r.useEffect(() => {
        null == es || es(ef.current);
    }, [ef, es]),
        r.useEffect(() => (W.Z.setState({ isOpen: !0 }), () => W.Z.setState({ isOpen: !1 })), []);
    let eg = (0, s.e7)([G.Z], () => G.Z.getStatus(t.id)),
        ev = F.Cr.useSetting(),
        ej = (0, J.F)(ev),
        { expiringStatusProfileFeedback: e_ } = b.Y.useExperiment(
            { location: "UserProfileAccountPopout" },
            { autoTrackExposure: !1 },
        ),
        ey = (0, s.e7)([B.Z], () => B.Z.hidePersonalInformation),
        eC = (0, g.p)(),
        eE = F.Sb.useSetting(),
        eS = (0, J.I)(eg),
        eN = (0, q.g)(n),
        eT = (0, j.Z)({ analyticsLocations: eh }),
        eO = (0, H.I5)(t),
        eP = (0, h.p)({ location: "UserProfileAccountPopout" }),
        ek = (0, C.b)({ location: "UserProfileAccountPopout" }),
        eI = r.useRef(null),
        ew = r.useRef((0, W.Z)((e) => e.shouldRenderTenureLevelUp)),
        eR = r.useMemo(() => (0, x.Z)(), []),
        [eA, eZ] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            eZ(!1);
        }, 500);
    }, []);
    let eD = (e) => {
            null == n || n(),
                (0, N.openUserProfileModal)(
                    el(
                        {
                            customStatusPrompt: eR,
                            sourceAnalyticsLocations: eh,
                        },
                        ex,
                        e,
                    ),
                );
        },
        eL = (0, S.Z)({ location: "UserProfileAccountPopout" }),
        eM = (null == ep ? void 0 : ep.widgets) != null && ep.widgets.length > 0,
        eU = eM ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eF, eG] = (0, f.US)(eU),
        eB = eF === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        ez = r.useCallback(() => {
            eG(ee.L.USER_DISMISS), n();
        }, [eG, n]),
        eV = r.useCallback(() => {
            (eu && null != ed) || (eT(), ez());
        }, [eT, ez, eu, ed]),
        eH = eu && null != ed,
        eW = (0, K.K)(ed, eh, eB, n, ez);
    return (0, a.jsx)(p.Gt, {
        value: eh,
        children: (0, a.jsx)(y.Mt, {
            value: ex,
            openedAt: ec,
            fetchStartedAt: null == ep ? void 0 : ep.fetchStartedAt,
            fetchEndedAt: null == ep ? void 0 : ep.fetchEndedAt,
            isLoaded: null == ep ? void 0 : ep.isLoaded,
            children: (0, a.jsxs)(c.VqE, {
                ref: ef,
                "aria-label": t.username,
                children: [
                    (0, a.jsxs)(A.Z, {
                        className: er.themeContainer,
                        user: t,
                        displayProfile: ep,
                        themeType: en.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ei.header,
                                children: [
                                    (0, a.jsx)(P.Z, {
                                        user: t,
                                        displayProfile: ep,
                                        themeType: en.l.POPOUT,
                                    }),
                                    (0, a.jsx)(T.Z, {
                                        user: t,
                                        displayProfile: ep,
                                        themeType: en.l.POPOUT,
                                        onOpenProfile: em ? void 0 : eD,
                                    }),
                                    (0, a.jsx)(L.Z, {
                                        ref: eI,
                                        user: t,
                                        themeType: en.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eP ? eR : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: er.body,
                                style: { pointerEvents: eA ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(Z.Z, {
                                        user: t,
                                        className: er.username,
                                        nickname: V.ZP.getName(ed, null, t),
                                        onOpenProfile: em ? void 0 : eD,
                                        pronouns: null == ep ? void 0 : ep.pronouns,
                                        tags: (0, a.jsx)(O.Z, {
                                            displayProfile: ep,
                                            themeType: en.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != eo ? (e) => e === eo : void 0,
                                            shouldGlowTenureBadge: ew.current,
                                        }),
                                        nicknameIcons: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(w.Z, { userId: t.id }),
                                                (0, a.jsx)(D.Z, {
                                                    user: t,
                                                    isHovering: eb,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, a.jsx)(U.Z, {
                                        user: t,
                                        bio: null == ep ? void 0 : ep.bio,
                                        hidePersonalInformation: ey,
                                        onClose: n,
                                    }),
                                    eL &&
                                        eM &&
                                        (0, a.jsx)(M.Z, {
                                            widgets: ep.widgets,
                                            onClick: () => {
                                                n(), eD({ section: et.oh.WIDGETS });
                                            },
                                        }),
                                    (0, a.jsx)(k.Z, {
                                        isPremiumUser: eO,
                                        onInteraction: n,
                                    }),
                                    ek
                                        ? (0, a.jsx)(R.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: eD,
                                              onClose: n,
                                          })
                                        : (0, a.jsx)(I.Z, {
                                              user: t,
                                              currentUser: t,
                                              onClose: n,
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: er.menus,
                                        children: [
                                            (0, a.jsx)(A.Z.Overlay, {
                                                className: er.menuOverlay,
                                                children: (0, a.jsxs)(Y.XE, {
                                                    children: [
                                                        (0, a.jsx)(Y.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: eu
                                                                ? ea.intl.string(ea.t.Ip9nBQ)
                                                                : ea.intl.string(ea.t.s5vZlZ),
                                                            icon: c.vdY,
                                                            onClick: eV,
                                                            renderSubmenu: eH
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(Y.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": ea.intl.string(ea.t.szTA8P),
                                                                          onClose: t,
                                                                          children: eW,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: eB
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: ea.intl.string(ea.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                        }),
                                                        (0, a.jsx)(Y.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(X.Z, {}),
                                                            sublabel: e_ && null != ej && ej,
                                                            icon: () =>
                                                                (0, a.jsx)(c.qbd, {
                                                                    status: eg,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (eC || eg === $.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: i.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(Y.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: er.statusPickerModalMenu,
                                                                          "aria-label": ea.intl.string(ea.t.E13trK),
                                                                          onClose: t,
                                                                          children: eS,
                                                                      });
                                                                  },
                                                            onClick: i.tq
                                                                ? () => {
                                                                      n(),
                                                                          (0, c.ZDy)(
                                                                              () =>
                                                                                  new Promise((e) =>
                                                                                      e((e) => {
                                                                                          var t,
                                                                                              n,
                                                                                              { onClose: r } = e,
                                                                                              i = (function (e, t) {
                                                                                                  if (null == e)
                                                                                                      return {};
                                                                                                  var n,
                                                                                                      a,
                                                                                                      r = (function (
                                                                                                          e,
                                                                                                          t,
                                                                                                      ) {
                                                                                                          if (null == e)
                                                                                                              return {};
                                                                                                          var n,
                                                                                                              a,
                                                                                                              r = {},
                                                                                                              i =
                                                                                                                  Object.keys(
                                                                                                                      e,
                                                                                                                  );
                                                                                                          for (
                                                                                                              a = 0;
                                                                                                              a <
                                                                                                              i.length;
                                                                                                              a++
                                                                                                          )
                                                                                                              (n =
                                                                                                                  i[a]),
                                                                                                                  t.indexOf(
                                                                                                                      n,
                                                                                                                  ) >=
                                                                                                                      0 ||
                                                                                                                      (r[
                                                                                                                          n
                                                                                                                      ] =
                                                                                                                          e[
                                                                                                                              n
                                                                                                                          ]);
                                                                                                          return r;
                                                                                                      })(e, t);
                                                                                                  if (
                                                                                                      Object.getOwnPropertySymbols
                                                                                                  ) {
                                                                                                      var i =
                                                                                                          Object.getOwnPropertySymbols(
                                                                                                              e,
                                                                                                          );
                                                                                                      for (
                                                                                                          a = 0;
                                                                                                          a < i.length;
                                                                                                          a++
                                                                                                      )
                                                                                                          (n = i[a]),
                                                                                                              !(
                                                                                                                  t.indexOf(
                                                                                                                      n,
                                                                                                                  ) >= 0
                                                                                                              ) &&
                                                                                                                  Object.prototype.propertyIsEnumerable.call(
                                                                                                                      e,
                                                                                                                      n,
                                                                                                                  ) &&
                                                                                                                  (r[
                                                                                                                      n
                                                                                                                  ] =
                                                                                                                      e[
                                                                                                                          n
                                                                                                                      ]);
                                                                                                  }
                                                                                                  return r;
                                                                                              })(e, ["onClose"]);
                                                                                          return (0, a.jsx)(
                                                                                              l.IX,
                                                                                              ((t = el(
                                                                                                  { onClose: r },
                                                                                                  i,
                                                                                              )),
                                                                                              (n = n =
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          ea.intl.string(
                                                                                                              ea.t[
                                                                                                                  "3Uj+2t"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      a.jsx)(c.v2r, {
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              ea.intl.string(
                                                                                                                  ea.t
                                                                                                                      .E13trK,
                                                                                                              ),
                                                                                                          className:
                                                                                                              er.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: r,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: eS,
                                                                                                      }),
                                                                                                  }),
                                                                                              Object.getOwnPropertyDescriptors
                                                                                                  ? Object.defineProperties(
                                                                                                        t,
                                                                                                        Object.getOwnPropertyDescriptors(
                                                                                                            n,
                                                                                                        ),
                                                                                                    )
                                                                                                  : (function (e, t) {
                                                                                                        var n =
                                                                                                            Object.keys(
                                                                                                                e,
                                                                                                            );
                                                                                                        if (
                                                                                                            Object.getOwnPropertySymbols
                                                                                                        ) {
                                                                                                            var a =
                                                                                                                Object.getOwnPropertySymbols(
                                                                                                                    e,
                                                                                                                );
                                                                                                            n.push.apply(
                                                                                                                n,
                                                                                                                a,
                                                                                                            );
                                                                                                        }
                                                                                                        return n;
                                                                                                    })(
                                                                                                        Object(n),
                                                                                                    ).forEach(
                                                                                                        function (e) {
                                                                                                            Object.defineProperty(
                                                                                                                t,
                                                                                                                e,
                                                                                                                Object.getOwnPropertyDescriptor(
                                                                                                                    n,
                                                                                                                    e,
                                                                                                                ),
                                                                                                            );
                                                                                                        },
                                                                                                    ),
                                                                                              t),
                                                                                          );
                                                                                      }),
                                                                                  ),
                                                                          );
                                                                  }
                                                                : void 0,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, a.jsx)(A.Z.Overlay, {
                                                className: er.menuOverlay,
                                                children: (0, a.jsxs)(Y.XE, {
                                                    children: [
                                                        (0, a.jsx)(Y.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: ea.intl.string(ea.t.oMNyYG),
                                                            onClick: () => {
                                                                n(), (0, Q.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(Y.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": ea.intl.string(ea.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: eN,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            z.wS &&
                                                            eE &&
                                                            (0, a.jsx)(Y.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: ea.intl.string(ea.t["/AXYnJ"]),
                                                                onClick: () => {
                                                                    (0, z.JG)(t.id), n();
                                                                },
                                                            }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (null == ep ? void 0 : ep.profileEffect) != null &&
                                !ew.current &&
                                (0, a.jsx)(_.Z, {
                                    skuId: ep.profileEffect.skuId,
                                    isHovering: eb,
                                }),
                        ],
                    }),
                    (0, a.jsx)(v.Z, {}),
                ],
            }),
        }),
    });
}
