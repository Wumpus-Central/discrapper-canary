n.d(t, { Z: () => eo }), n(388685);
var a = n(54381),
    l = n(473749),
    i = n(873546),
    r = n(793030),
    s = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(393238),
    u = n(100527),
    m = n(906732),
    p = n(104505),
    h = n(368326),
    x = n(429467),
    g = n(243778),
    f = n(734934),
    b = n(480173),
    v = n(300284),
    j = n(680295),
    _ = n(785717),
    y = n(880421),
    C = n(209698),
    S = n(687158),
    E = n(612600),
    N = n(892001),
    T = n(899007),
    O = n(648052),
    P = n(867176),
    I = n(537006),
    w = n(483424),
    k = n(681837),
    A = n(638970),
    R = n(675893),
    Z = n(502762),
    D = n(530),
    L = n(309494),
    M = n(4517),
    U = n(420654),
    B = n(695346),
    F = n(158776),
    G = n(246946),
    z = n(572004),
    H = n(5192),
    V = n(74538),
    W = n(7093),
    K = n(175015),
    q = n(474376),
    Y = n(905953),
    J = n(431282),
    X = n(213928),
    Q = n(480898),
    $ = n(587243),
    ee = n(383832),
    et = n(981631),
    en = n(921944),
    ea = n(671955),
    el = n(388032),
    ei = n(54482),
    er = n(116649);
function es(e) {
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
function eo(e) {
    let {
            currentUser: t,
            onClose: n,
            setPopoutRef: eo,
            highlightBadge: ec,
            openedAt: ed,
            guildId: eu,
            guildProfileEnabled: em,
        } = e,
        ep = __OVERLAY__,
        eh = (0, S.ZP)(t.id, eu),
        { analyticsLocations: ex } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT),
        eg = (0, _.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: eu,
        }),
        { ref: ef, height: eb } = (0, d.ZP)(),
        { isHoveringOrFocusing: ev, isHovering: ej } = (0, p.Z)(ef);
    l.useEffect(() => {
        null == eo || eo(ef.current);
    }, [ef, eo]),
        l.useEffect(() => (W.Z.setState({ isOpen: !0 }), () => W.Z.setState({ isOpen: !1 })), []);
    let e_ = (0, s.e7)([F.Z], () => F.Z.getStatus(t.id)),
        ey = B.Cr.useSetting(),
        eC = (0, $.F)(ey),
        eS = (0, s.e7)([G.Z], () => G.Z.hidePersonalInformation),
        eE = (0, f.p)(),
        eN = B.Sb.useSetting(),
        eT = (0, $.I)(e_),
        eO = (0, q.g)(n),
        eP = (0, v.Z)({ analyticsLocations: ex }),
        eI = (0, V.I5)(t),
        ew = (0, h.p)({ location: "UserProfileAccountPopout" }),
        ek = (0, C.b)({ location: "UserProfileAccountPopout" }),
        eA = l.useRef(null),
        eR = l.useRef(null),
        eZ = l.useRef((0, W.Z)((e) => e.shouldRenderTenureLevelUp)),
        eD = l.useMemo(() => (0, x.Z)(), []),
        [eL, eM] = l.useState(!0);
    l.useEffect(() => {
        setTimeout(() => {
            eM(!1);
        }, 500);
    }, []);
    let eU = (e) => {
            null == n || n(),
                (0, N.openUserProfileModal)(
                    es(
                        {
                            customStatusPrompt: eD,
                            sourceAnalyticsLocations: ex,
                        },
                        eg,
                        e,
                    ),
                );
        },
        eB = (0, E.Z)({ location: "UserProfileAccountPopout" }),
        eF = (null == eh ? void 0 : eh.widgets) != null && eh.widgets.length > 0,
        eG = eF ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [ez, eH] = (0, g.US)(eG),
        eV = ez === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eW = l.useCallback(() => {
            eH(en.L.USER_DISMISS), n();
        }, [eH, n]),
        eK = l.useCallback(() => {
            (em && null != eu) || (eP(), eW());
        }, [eP, eW, em, eu]),
        eq = em && null != eu,
        eY = (0, K.K)(eu, ex, eV, n, eW),
        eJ = (0, y.k)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(m.Gt, {
        value: ex,
        children: (0, a.jsx)(_.Mt, {
            value: eg,
            openedAt: ed,
            fetchStartedAt: null == eh ? void 0 : eh.fetchStartedAt,
            fetchEndedAt: null == eh ? void 0 : eh.fetchEndedAt,
            isLoaded: null == eh ? void 0 : eh.isLoaded,
            children: (0, a.jsxs)(c.VqE, {
                ref: ef,
                "aria-label": t.username,
                className: ei.popoutContainer,
                "data-layer": "base",
                children: [
                    (0, a.jsx)(Q.Z, {
                        displayProfile: eh,
                        handleOpenUserProfileModal: eU,
                        height: eb,
                    }),
                    (0, a.jsxs)(Z.Z, {
                        className: ei.themeContainer,
                        user: t,
                        displayProfile: eh,
                        themeType: ea.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: er.header,
                                children: [
                                    (0, a.jsx)(P.Z, {
                                        user: t,
                                        displayProfile: eh,
                                        themeType: ea.l.POPOUT,
                                    }),
                                    (0, a.jsx)(T.Z, {
                                        user: t,
                                        displayProfile: eh,
                                        themeType: ea.l.POPOUT,
                                        onOpenProfile: ep ? void 0 : eU,
                                    }),
                                    (0, a.jsx)(M.Z, {
                                        ref: eA,
                                        user: t,
                                        themeType: ea.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: ew ? eD : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: ei.body,
                                style: { pointerEvents: eL ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(D.Z, {
                                        user: t,
                                        className: ei.username,
                                        nickname: H.ZP.getName(eu, null, t),
                                        onOpenProfile: ep ? void 0 : eU,
                                        pronouns: null == eh ? void 0 : eh.pronouns,
                                        tags: (0, a.jsx)(O.Z, {
                                            displayProfile: eh,
                                            themeType: ea.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != ec ? (e) => e === ec : void 0,
                                            shouldGlowTenureBadge: eZ.current,
                                        }),
                                        nicknameIcons: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(k.Z, { userId: t.id }),
                                                (0, a.jsx)(L.Z, {
                                                    user: t,
                                                    isVisible: ev,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, a.jsx)(U.Z, {
                                        user: t,
                                        bio: null == eh ? void 0 : eh.bio,
                                        hidePersonalInformation: eS,
                                        onClose: n,
                                    }),
                                    eB &&
                                        eF &&
                                        (0, a.jsx)(R.Z, {
                                            user: t,
                                            widgets: null == eh ? void 0 : eh.widgets,
                                            onOpenUserProfileModal: eU,
                                        }),
                                    (0, a.jsx)(I.Z, {
                                        isPremiumUser: eI,
                                        onInteraction: n,
                                    }),
                                    ek
                                        ? (0, a.jsx)(A.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: eU,
                                              onClose: n,
                                          })
                                        : (0, a.jsx)(w.Z, {
                                              user: t,
                                              currentUser: t,
                                              onClose: n,
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: ei.menus,
                                        children: [
                                            (0, a.jsx)(Z.Z.Overlay, {
                                                className: ei.menuOverlay,
                                                children: (0, a.jsxs)(J.XE, {
                                                    children: [
                                                        (0, a.jsx)(J.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: em
                                                                ? el.intl.string(el.t.Ip9nBS)
                                                                : el.intl.string(el.t.s5vZlQ),
                                                            icon: c.vdY,
                                                            onClick: eK,
                                                            renderSubmenu: eq
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(J.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": el.intl.string(el.t.szTA8E),
                                                                          onClose: t,
                                                                          children: eY,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: eV
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: el.intl.string(el.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: eR,
                                                        }),
                                                        (0, a.jsx)(J.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(X.Z, {}),
                                                            sublabel: null != eC && eC,
                                                            icon: () =>
                                                                (0, a.jsx)(c.qbd, {
                                                                    status: e_,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (eE || e_ === et.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: i.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(J.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: ei.statusPickerModalMenu,
                                                                          "aria-label": el.intl.string(el.t.E13trI),
                                                                          onClose: t,
                                                                          children: eT,
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
                                                                                              { onClose: l } = e,
                                                                                              i = (function (e, t) {
                                                                                                  if (null == e)
                                                                                                      return {};
                                                                                                  var n,
                                                                                                      a,
                                                                                                      l = (function (
                                                                                                          e,
                                                                                                          t,
                                                                                                      ) {
                                                                                                          if (null == e)
                                                                                                              return {};
                                                                                                          var n,
                                                                                                              a,
                                                                                                              l = {},
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
                                                                                                                      (l[
                                                                                                                          n
                                                                                                                      ] =
                                                                                                                          e[
                                                                                                                              n
                                                                                                                          ]);
                                                                                                          return l;
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
                                                                                                                  (l[
                                                                                                                      n
                                                                                                                  ] =
                                                                                                                      e[
                                                                                                                          n
                                                                                                                      ]);
                                                                                                  }
                                                                                                  return l;
                                                                                              })(e, ["onClose"]);
                                                                                          return (0, a.jsx)(
                                                                                              r.IX,
                                                                                              ((t = es(
                                                                                                  { onClose: l },
                                                                                                  i,
                                                                                              )),
                                                                                              (n = n =
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          el.intl.string(
                                                                                                              el.t[
                                                                                                                  "3Uj+2p"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      a.jsx)(c.v2r, {
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              el.intl.string(
                                                                                                                  el.t
                                                                                                                      .E13trI,
                                                                                                              ),
                                                                                                          className:
                                                                                                              ei.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: l,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: eT,
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
                                            (0, a.jsx)(Z.Z.Overlay, {
                                                className: ei.menuOverlay,
                                                children: (0, a.jsxs)(J.XE, {
                                                    children: [
                                                        (0, a.jsx)(J.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: el.intl.string(el.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, ee.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(J.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": el.intl.string(el.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: eO,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            z.wS &&
                                                            eN &&
                                                            (0, a.jsx)(J.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: el.intl.string(el.t["/AXYnE"]),
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
                            (null == eh ? void 0 : eh.profileEffect) != null &&
                                !eZ.current &&
                                (0, a.jsx)(j.Z, {
                                    skuId: eh.profileEffect.skuId,
                                    isHovering: ej,
                                }),
                        ],
                    }),
                    !eq && eJ
                        ? (0, a.jsx)(Y.Z, {
                              targetElementRef: eR,
                              onClose: n,
                          })
                        : null,
                    (0, a.jsx)(b.Z, {}),
                ],
            }),
        }),
    });
}
