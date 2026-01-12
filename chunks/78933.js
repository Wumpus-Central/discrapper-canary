n.d(t, { Z: () => el }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(873546),
    l = n(793030),
    s = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(393238),
    u = n(100527),
    m = n(906732),
    p = n(251296),
    h = n(104505),
    f = n(368326),
    x = n(429467),
    b = n(243778),
    g = n(734934),
    v = n(480173),
    j = n(300284),
    y = n(680295),
    C = n(785717),
    _ = n(687158),
    S = n(612600),
    E = n(892001),
    T = n(899007),
    O = n(648052),
    N = n(867176),
    P = n(537006),
    w = n(407699),
    I = n(638970),
    k = n(675893),
    R = n(502762),
    A = n(530),
    Z = n(309494),
    D = n(4517),
    L = n(420654),
    M = n(695346),
    U = n(158776),
    B = n(246946),
    F = n(572004),
    G = n(5192),
    V = n(74538),
    z = n(7093),
    H = n(175015),
    W = n(474376),
    K = n(905953),
    q = n(431282),
    Y = n(213928),
    Q = n(480898),
    X = n(587243),
    J = n(383832),
    $ = n(981631),
    ee = n(921944),
    et = n(671955),
    en = n(388032),
    ea = n(787224),
    er = n(155493);
function ei(e) {
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
function el(e) {
    let {
            currentUser: t,
            onClose: n,
            setPopoutRef: el,
            highlightBadge: es,
            openedAt: eo,
            guildId: ec,
            guildProfileEnabled: ed,
        } = e,
        eu = __OVERLAY__,
        em = (0, _.ZP)(t.id, ec),
        { analyticsLocations: ep } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT),
        eh = (0, C.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: ec,
        }),
        { ref: ef, height: ex } = (0, d.ZP)(),
        { isHoveringOrFocusing: eb, isHovering: eg } = (0, h.Z)(ef);
    r.useEffect(() => {
        null == el || el(ef.current);
    }, [ef, el]),
        r.useEffect(() => (z.Z.setState({ isOpen: !0 }), () => z.Z.setState({ isOpen: !1 })), []);
    let ev = (0, s.e7)([U.Z], () => U.Z.getStatus(t.id)),
        ej = M.Cr.useSetting(),
        ey = (0, X.F)(ej),
        eC = (0, s.e7)([B.Z], () => B.Z.hidePersonalInformation),
        e_ = (0, g.p)(),
        eS = M.Sb.useSetting(),
        eE = (0, X.I)(ev),
        eT = (0, W.g)(n),
        eO = (0, j.Z)({ analyticsLocations: ep }),
        eN = (0, V.I5)(t),
        eP = (0, f.p)({ location: "UserProfileAccountPopout" }),
        ew = r.useRef(null),
        eI = r.useRef(null),
        ek = r.useRef((0, z.Z)((e) => e.shouldRenderTenureLevelUp)),
        eR = r.useMemo(() => (0, x.Z)(), []),
        [eA, eZ] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            eZ(!1);
        }, 500);
    }, []);
    let eD = (e) => {
            null == n || n(),
                (0, E.openUserProfileModal)(
                    ei(
                        {
                            customStatusPrompt: eR,
                            sourceAnalyticsLocations: ep,
                        },
                        eh,
                        e,
                    ),
                );
        },
        eL = (0, S.Z)({ location: "UserProfileAccountPopout" }),
        eM = (null == em ? void 0 : em.widgets) != null && em.widgets.length > 0,
        eU = eM ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eB, eF] = (0, b.US)(eU),
        eG = eB === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eV = r.useCallback(() => {
            eF(ee.L.USER_DISMISS), n();
        }, [eF, n]),
        ez = r.useCallback(() => {
            (ed && null != ec) || (eO(), eV());
        }, [eO, eV, ed, ec]),
        eH = ed && null != ec,
        eW = (0, H.K)(ec, ep, eG, n, eV),
        eK = (0, p.q5)({ location: "UserProfileAccountPopout" }),
        eq = (0, p.hX)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(m.Gt, {
        value: ep,
        children: (0, a.jsx)(C.Mt, {
            value: eh,
            openedAt: eo,
            fetchStartedAt: null == em ? void 0 : em.fetchStartedAt,
            fetchEndedAt: null == em ? void 0 : em.fetchEndedAt,
            isLoaded: null == em ? void 0 : em.isLoaded,
            children: (0, a.jsxs)(c.VqE, {
                ref: ef,
                "aria-label": t.username,
                className: ea.popoutContainer,
                "data-layer": "base",
                children: [
                    (0, a.jsx)(Q.Z, {
                        displayProfile: em,
                        handleOpenUserProfileModal: eD,
                        height: ex,
                    }),
                    (0, a.jsxs)(R.Z, {
                        className: ea.themeContainer,
                        user: t,
                        displayProfile: em,
                        themeType: et.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: er.header,
                                children: [
                                    (0, a.jsx)(N.Z, {
                                        user: t,
                                        displayProfile: em,
                                        themeType: et.l.POPOUT,
                                    }),
                                    (0, a.jsx)(T.Z, {
                                        user: t,
                                        displayProfile: em,
                                        themeType: et.l.POPOUT,
                                        onOpenProfile: eu ? void 0 : eD,
                                    }),
                                    (0, a.jsx)(D.Z, {
                                        ref: ew,
                                        user: t,
                                        themeType: et.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eP ? eR : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: ea.body,
                                style: { pointerEvents: eA ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(w.Z, { userId: t.id }),
                                    (0, a.jsx)(A.Z, {
                                        user: t,
                                        className: ea.username,
                                        nickname: G.ZP.getName(ec, null, t),
                                        onOpenProfile: eu ? void 0 : eD,
                                        pronouns: null == em ? void 0 : em.pronouns,
                                        tags: (0, a.jsx)(O.Z, {
                                            displayProfile: em,
                                            themeType: et.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != es ? (e) => e === es : void 0,
                                            shouldGlowTenureBadge: ek.current,
                                        }),
                                        nicknameIcons: (0, a.jsx)(Z.Z, {
                                            user: t,
                                            isVisible: eb,
                                        }),
                                    }),
                                    (0, a.jsx)(L.Z, {
                                        user: t,
                                        bio: null == em ? void 0 : em.bio,
                                        hidePersonalInformation: eC,
                                        onClose: n,
                                    }),
                                    eL &&
                                        eM &&
                                        (0, a.jsx)(k.Z, {
                                            user: t,
                                            widgets: null == em ? void 0 : em.widgets,
                                            onOpenUserProfileModal: eD,
                                        }),
                                    (0, a.jsx)(P.Z, {
                                        isPremiumUser: eN,
                                        onInteraction: n,
                                    }),
                                    (0, a.jsx)(I.Z, {
                                        user: t,
                                        currentUser: t,
                                        onOpenUserProfileModal: eD,
                                        onClose: n,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: ea.menus,
                                        children: [
                                            (0, a.jsx)(R.Z.Overlay, {
                                                className: ea.menuOverlay,
                                                children: (0, a.jsxs)(q.XE, {
                                                    children: [
                                                        (0, a.jsx)(q.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: ed
                                                                ? en.intl.string(en.t.Ip9nBS)
                                                                : en.intl.string(en.t.s5vZlQ),
                                                            icon: c.vdY,
                                                            onClick: ez,
                                                            renderSubmenu: eH
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(q.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": en.intl.string(en.t.szTA8E),
                                                                          onClose: t,
                                                                          children: eW,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: eG
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: en.intl.string(en.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: eI,
                                                        }),
                                                        (0, a.jsx)(q.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(Y.Z, {}),
                                                            sublabel: null != ey && ey,
                                                            icon: () =>
                                                                (0, a.jsx)(c.qbd, {
                                                                    status: ev,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (e_ || ev === $.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: i.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(q.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: ea.statusPickerModalMenu,
                                                                          "aria-label": en.intl.string(en.t.E13trI),
                                                                          onClose: t,
                                                                          children: eE,
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
                                                                                              ((t = ei(
                                                                                                  { onClose: r },
                                                                                                  i,
                                                                                              )),
                                                                                              (n = n =
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          en.intl.string(
                                                                                                              en.t[
                                                                                                                  "3Uj+2p"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      a.jsx)(c.v2r, {
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              en.intl.string(
                                                                                                                  en.t
                                                                                                                      .E13trI,
                                                                                                              ),
                                                                                                          className:
                                                                                                              ea.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: r,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: eE,
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
                                            (0, a.jsx)(R.Z.Overlay, {
                                                className: ea.menuOverlay,
                                                children: (0, a.jsxs)(q.XE, {
                                                    children: [
                                                        (0, a.jsx)(q.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: en.intl.string(en.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, J.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(q.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": en.intl.string(en.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: eT,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            F.wS &&
                                                            eS &&
                                                            (0, a.jsx)(q.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: en.intl.string(en.t["/AXYnE"]),
                                                                onClick: () => {
                                                                    (0, F.JG)(t.id), n();
                                                                },
                                                            }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (null == em ? void 0 : em.profileEffect) != null &&
                                !ek.current &&
                                (0, a.jsx)(y.Z, {
                                    skuId: em.profileEffect.skuId,
                                    isHovering: eg,
                                }),
                        ],
                    }),
                    !eH && eK && eq
                        ? (0, a.jsx)(K.Z, {
                              targetElementRef: eI,
                              onClose: n,
                          })
                        : null,
                    (0, a.jsx)(v.Z, {}),
                ],
            }),
        }),
    });
}
