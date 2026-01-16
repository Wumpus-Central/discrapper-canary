n.d(t, { Z: () => ei }), n(388685);
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
    S = n(892001),
    E = n(899007),
    T = n(648052),
    O = n(867176),
    N = n(537006),
    P = n(407699),
    w = n(638970),
    I = n(675893),
    k = n(502762),
    R = n(530),
    A = n(309494),
    D = n(4517),
    Z = n(420654),
    L = n(695346),
    M = n(158776),
    U = n(246946),
    B = n(572004),
    F = n(5192),
    G = n(74538),
    V = n(7093),
    z = n(175015),
    H = n(474376),
    W = n(905953),
    K = n(431282),
    q = n(213928),
    Y = n(480898),
    Q = n(587243),
    X = n(383832),
    J = n(981631),
    $ = n(921944),
    ee = n(671955),
    et = n(388032),
    en = n(787224),
    ea = n(155493);
function er(e) {
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
function ei(e) {
    let {
            currentUser: t,
            onClose: n,
            setPopoutRef: ei,
            highlightBadge: el,
            openedAt: es,
            guildId: eo,
            guildProfileEnabled: ec,
        } = e,
        ed = __OVERLAY__,
        eu = (0, _.ZP)(t.id, eo),
        { analyticsLocations: em } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT),
        ep = (0, C.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: eo,
        }),
        { ref: eh, height: ef } = (0, d.ZP)(),
        { isHoveringOrFocusing: ex, isHovering: eb } = (0, h.Z)(eh);
    r.useEffect(() => {
        null == ei || ei(eh.current);
    }, [eh, ei]),
        r.useEffect(() => (V.Z.setState({ isOpen: !0 }), () => V.Z.setState({ isOpen: !1 })), []);
    let eg = (0, s.e7)([M.Z], () => M.Z.getStatus(t.id)),
        ev = L.Cr.useSetting(),
        ej = (0, Q.F)(ev),
        ey = (0, s.e7)([U.Z], () => U.Z.hidePersonalInformation),
        eC = (0, g.p)(),
        e_ = L.Sb.useSetting(),
        eS = (0, Q.I)(eg),
        eE = (0, H.g)(n),
        eT = (0, j.Z)({ analyticsLocations: em }),
        eO = (0, G.I5)(t),
        eN = (0, f.p)({ location: "UserProfileAccountPopout" }),
        eP = r.useRef(null),
        ew = r.useRef(null),
        eI = r.useRef((0, V.Z)((e) => e.shouldRenderTenureLevelUp)),
        ek = r.useMemo(() => (0, x.Z)(), []),
        [eR, eA] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            eA(!1);
        }, 500);
    }, []);
    let eD = (e) => {
            null == n || n(),
                (0, S.openUserProfileModal)(
                    er(
                        {
                            customStatusPrompt: ek,
                            sourceAnalyticsLocations: em,
                        },
                        ep,
                        e,
                    ),
                );
        },
        eZ = (null == eu ? void 0 : eu.widgets) != null && eu.widgets.length > 0,
        eL = eZ ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eM, eU] = (0, b.US)(eL),
        eB = eM === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eF = r.useCallback(() => {
            eU($.L.USER_DISMISS), n();
        }, [eU, n]),
        eG = r.useCallback(() => {
            (ec && null != eo) || (eT(), eF());
        }, [eT, eF, ec, eo]),
        eV = ec && null != eo,
        ez = (0, z.K)(eo, em, eB, n, eF),
        eH = (0, p.q5)({ location: "UserProfileAccountPopout" }),
        eW = (0, p.hX)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(m.Gt, {
        value: em,
        children: (0, a.jsx)(C.Mt, {
            value: ep,
            openedAt: es,
            fetchStartedAt: null == eu ? void 0 : eu.fetchStartedAt,
            fetchEndedAt: null == eu ? void 0 : eu.fetchEndedAt,
            isLoaded: null == eu ? void 0 : eu.isLoaded,
            children: (0, a.jsxs)(c.VqE, {
                ref: eh,
                "aria-label": t.username,
                className: en.popoutContainer,
                "data-layer": "base",
                children: [
                    (0, a.jsx)(Y.Z, {
                        displayProfile: eu,
                        handleOpenUserProfileModal: eD,
                        height: ef,
                    }),
                    (0, a.jsxs)(k.Z, {
                        className: en.themeContainer,
                        user: t,
                        displayProfile: eu,
                        themeType: ee.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ea.header,
                                children: [
                                    (0, a.jsx)(O.Z, {
                                        user: t,
                                        displayProfile: eu,
                                        themeType: ee.l.POPOUT,
                                    }),
                                    (0, a.jsx)(E.Z, {
                                        user: t,
                                        displayProfile: eu,
                                        themeType: ee.l.POPOUT,
                                        onOpenProfile: ed ? void 0 : eD,
                                    }),
                                    (0, a.jsx)(D.Z, {
                                        ref: eP,
                                        user: t,
                                        themeType: ee.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eN ? ek : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: en.body,
                                style: { pointerEvents: eR ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(P.Z, { userId: t.id }),
                                    (0, a.jsx)(R.Z, {
                                        user: t,
                                        className: en.username,
                                        nickname: F.ZP.getName(eo, null, t),
                                        onOpenProfile: ed ? void 0 : eD,
                                        pronouns: null == eu ? void 0 : eu.pronouns,
                                        tags: (0, a.jsx)(T.Z, {
                                            displayProfile: eu,
                                            themeType: ee.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != el ? (e) => e === el : void 0,
                                            shouldGlowTenureBadge: eI.current,
                                        }),
                                        nicknameIcons: (0, a.jsx)(A.Z, {
                                            user: t,
                                            isVisible: ex,
                                        }),
                                    }),
                                    (0, a.jsx)(Z.Z, {
                                        user: t,
                                        bio: null == eu ? void 0 : eu.bio,
                                        hidePersonalInformation: ey,
                                        onClose: n,
                                    }),
                                    eZ &&
                                        (0, a.jsx)(I.Z, {
                                            user: t,
                                            widgets: null == eu ? void 0 : eu.widgets,
                                            onOpenUserProfileModal: eD,
                                        }),
                                    (0, a.jsx)(N.Z, {
                                        isPremiumUser: eO,
                                        onInteraction: n,
                                    }),
                                    (0, a.jsx)(w.Z, {
                                        user: t,
                                        currentUser: t,
                                        onOpenUserProfileModal: eD,
                                        onClose: n,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: en.menus,
                                        children: [
                                            (0, a.jsx)(k.Z.Overlay, {
                                                className: en.menuOverlay,
                                                children: (0, a.jsxs)(K.XE, {
                                                    children: [
                                                        (0, a.jsx)(K.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: ec
                                                                ? et.intl.string(et.t.Ip9nBS)
                                                                : et.intl.string(et.t.s5vZlQ),
                                                            icon: c.vdY,
                                                            onClick: eG,
                                                            renderSubmenu: eV
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(K.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": et.intl.string(et.t.szTA8E),
                                                                          onClose: t,
                                                                          children: ez,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: eB
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: et.intl.string(et.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: ew,
                                                        }),
                                                        (0, a.jsx)(K.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(q.Z, {}),
                                                            sublabel: null != ej && ej,
                                                            icon: () =>
                                                                (0, a.jsx)(c.qbd, {
                                                                    status: eg,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (eC || eg === J.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: i.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(K.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: en.statusPickerModalMenu,
                                                                          "aria-label": et.intl.string(et.t.E13trI),
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
                                                                                              ((t = er(
                                                                                                  { onClose: r },
                                                                                                  i,
                                                                                              )),
                                                                                              (n = n =
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          et.intl.string(
                                                                                                              et.t[
                                                                                                                  "3Uj+2p"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      a.jsx)(c.v2r, {
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              et.intl.string(
                                                                                                                  et.t
                                                                                                                      .E13trI,
                                                                                                              ),
                                                                                                          className:
                                                                                                              en.statusPickerModal,
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
                                            (0, a.jsx)(k.Z.Overlay, {
                                                className: en.menuOverlay,
                                                children: (0, a.jsxs)(K.XE, {
                                                    children: [
                                                        (0, a.jsx)(K.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: et.intl.string(et.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, X.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(K.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": et.intl.string(et.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: eE,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            B.wS &&
                                                            e_ &&
                                                            (0, a.jsx)(K.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: et.intl.string(et.t["/AXYnE"]),
                                                                onClick: () => {
                                                                    (0, B.JG)(t.id), n();
                                                                },
                                                            }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (null == eu ? void 0 : eu.profileEffect) != null &&
                                !eI.current &&
                                (0, a.jsx)(y.Z, {
                                    skuId: eu.profileEffect.skuId,
                                    isHovering: eb,
                                }),
                        ],
                    }),
                    !eV && eH && eW
                        ? (0, a.jsx)(W.Z, {
                              targetElementRef: ew,
                              onClose: n,
                          })
                        : null,
                    (0, a.jsx)(v.Z, {}),
                ],
            }),
        }),
    });
}
