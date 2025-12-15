n.d(t, { Z: () => ec }), n(388685);
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
    p = n(104505),
    h = n(368326),
    f = n(429467),
    x = n(243778),
    b = n(734934),
    g = n(480173),
    v = n(300284),
    j = n(680295),
    y = n(785717),
    C = n(659158),
    _ = n(880421),
    S = n(209698),
    E = n(687158),
    T = n(612600),
    O = n(892001),
    N = n(899007),
    P = n(648052),
    w = n(867176),
    I = n(537006),
    k = n(483424),
    R = n(407699),
    A = n(638970),
    D = n(675893),
    Z = n(502762),
    L = n(530),
    M = n(309494),
    U = n(4517),
    B = n(420654),
    F = n(695346),
    G = n(158776),
    V = n(246946),
    H = n(572004),
    W = n(5192),
    z = n(74538),
    K = n(7093),
    q = n(175015),
    Q = n(474376),
    Y = n(905953),
    X = n(431282),
    J = n(213928),
    $ = n(480898),
    ee = n(587243),
    et = n(383832),
    en = n(981631),
    ea = n(921944),
    er = n(671955),
    ei = n(388032),
    el = n(787224),
    es = n(155493);
function eo(e) {
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
function ec(e) {
    let {
            currentUser: t,
            onClose: n,
            setPopoutRef: ec,
            highlightBadge: ed,
            openedAt: eu,
            guildId: em,
            guildProfileEnabled: ep,
        } = e,
        eh = __OVERLAY__,
        ef = (0, E.ZP)(t.id, em),
        { analyticsLocations: ex } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT),
        eb = (0, y.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: em,
        }),
        { ref: eg, height: ev } = (0, d.ZP)(),
        { isHoveringOrFocusing: ej, isHovering: ey } = (0, p.Z)(eg);
    r.useEffect(() => {
        null == ec || ec(eg.current);
    }, [eg, ec]),
        r.useEffect(() => (K.Z.setState({ isOpen: !0 }), () => K.Z.setState({ isOpen: !1 })), []);
    let eC = (0, s.e7)([G.Z], () => G.Z.getStatus(t.id)),
        e_ = F.Cr.useSetting(),
        eS = (0, ee.F)(e_),
        eE = (0, s.e7)([V.Z], () => V.Z.hidePersonalInformation),
        eT = (0, b.p)(),
        eO = F.Sb.useSetting(),
        eN = (0, ee.I)(eC),
        eP = (0, Q.g)(n),
        ew = (0, v.Z)({ analyticsLocations: ex }),
        eI = (0, z.I5)(t),
        ek = (0, h.p)({ location: "UserProfileAccountPopout" }),
        eR = (0, S.b)({ location: "UserProfileAccountPopout" }),
        eA = r.useRef(null),
        eD = r.useRef(null),
        eZ = r.useRef((0, K.Z)((e) => e.shouldRenderTenureLevelUp)),
        eL = r.useMemo(() => (0, f.Z)(), []),
        [eM, eU] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            eU(!1);
        }, 500);
    }, []);
    let eB = (e) => {
            null == n || n(),
                (0, O.openUserProfileModal)(
                    eo(
                        {
                            customStatusPrompt: eL,
                            sourceAnalyticsLocations: ex,
                        },
                        eb,
                        e,
                    ),
                );
        },
        eF = (0, T.Z)({ location: "UserProfileAccountPopout" }),
        eG = (null == ef ? void 0 : ef.widgets) != null && ef.widgets.length > 0,
        eV = eG ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eH, eW] = (0, x.US)(eV),
        ez = eH === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eK = r.useCallback(() => {
            eW(ea.L.USER_DISMISS), n();
        }, [eW, n]),
        eq = r.useCallback(() => {
            (ep && null != em) || (ew(), eK());
        }, [ew, eK, ep, em]),
        eQ = ep && null != em,
        eY = (0, q.K)(em, ex, ez, n, eK),
        eX = (0, _.k)({ location: "UserProfileAccountPopout" }),
        eJ = (0, C.S)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(m.Gt, {
        value: ex,
        children: (0, a.jsx)(y.Mt, {
            value: eb,
            openedAt: eu,
            fetchStartedAt: null == ef ? void 0 : ef.fetchStartedAt,
            fetchEndedAt: null == ef ? void 0 : ef.fetchEndedAt,
            isLoaded: null == ef ? void 0 : ef.isLoaded,
            children: (0, a.jsxs)(c.VqE, {
                ref: eg,
                "aria-label": t.username,
                className: el.popoutContainer,
                "data-layer": "base",
                children: [
                    (0, a.jsx)($.Z, {
                        displayProfile: ef,
                        handleOpenUserProfileModal: eB,
                        height: ev,
                    }),
                    (0, a.jsxs)(Z.Z, {
                        className: el.themeContainer,
                        user: t,
                        displayProfile: ef,
                        themeType: er.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: es.header,
                                children: [
                                    (0, a.jsx)(w.Z, {
                                        user: t,
                                        displayProfile: ef,
                                        themeType: er.l.POPOUT,
                                    }),
                                    (0, a.jsx)(N.Z, {
                                        user: t,
                                        displayProfile: ef,
                                        themeType: er.l.POPOUT,
                                        onOpenProfile: eh ? void 0 : eB,
                                    }),
                                    (0, a.jsx)(U.Z, {
                                        ref: eA,
                                        user: t,
                                        themeType: er.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: ek ? eL : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: el.body,
                                style: { pointerEvents: eM ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(R.Z, { userId: t.id }),
                                    (0, a.jsx)(L.Z, {
                                        user: t,
                                        className: el.username,
                                        nickname: W.ZP.getName(em, null, t),
                                        onOpenProfile: eh ? void 0 : eB,
                                        pronouns: null == ef ? void 0 : ef.pronouns,
                                        tags: (0, a.jsx)(P.Z, {
                                            displayProfile: ef,
                                            themeType: er.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != ed ? (e) => e === ed : void 0,
                                            shouldGlowTenureBadge: eZ.current,
                                        }),
                                        nicknameIcons: (0, a.jsx)(M.Z, {
                                            user: t,
                                            isVisible: ej,
                                        }),
                                    }),
                                    (0, a.jsx)(B.Z, {
                                        user: t,
                                        bio: null == ef ? void 0 : ef.bio,
                                        hidePersonalInformation: eE,
                                        onClose: n,
                                    }),
                                    eF &&
                                        eG &&
                                        (0, a.jsx)(D.Z, {
                                            user: t,
                                            widgets: null == ef ? void 0 : ef.widgets,
                                            onOpenUserProfileModal: eB,
                                        }),
                                    (0, a.jsx)(I.Z, {
                                        isPremiumUser: eI,
                                        onInteraction: n,
                                    }),
                                    eR
                                        ? (0, a.jsx)(A.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: eB,
                                              onClose: n,
                                          })
                                        : (0, a.jsx)(k.Z, {
                                              user: t,
                                              currentUser: t,
                                              onClose: n,
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: el.menus,
                                        children: [
                                            (0, a.jsx)(Z.Z.Overlay, {
                                                className: el.menuOverlay,
                                                children: (0, a.jsxs)(X.XE, {
                                                    children: [
                                                        (0, a.jsx)(X.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: ep
                                                                ? ei.intl.string(ei.t.Ip9nBS)
                                                                : ei.intl.string(ei.t.s5vZlQ),
                                                            icon: c.vdY,
                                                            onClick: eq,
                                                            renderSubmenu: eQ
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(X.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": ei.intl.string(ei.t.szTA8E),
                                                                          onClose: t,
                                                                          children: eY,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: ez
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: ei.intl.string(ei.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: eD,
                                                        }),
                                                        (0, a.jsx)(X.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(J.Z, {}),
                                                            sublabel: null != eS && eS,
                                                            icon: () =>
                                                                (0, a.jsx)(c.qbd, {
                                                                    status: eC,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (eT || eC === en.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: i.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(X.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: el.statusPickerModalMenu,
                                                                          "aria-label": ei.intl.string(ei.t.E13trI),
                                                                          onClose: t,
                                                                          children: eN,
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
                                                                                              ((t = eo(
                                                                                                  { onClose: r },
                                                                                                  i,
                                                                                              )),
                                                                                              (n = n =
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          ei.intl.string(
                                                                                                              ei.t[
                                                                                                                  "3Uj+2p"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      a.jsx)(c.v2r, {
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              ei.intl.string(
                                                                                                                  ei.t
                                                                                                                      .E13trI,
                                                                                                              ),
                                                                                                          className:
                                                                                                              el.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: r,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: eN,
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
                                                className: el.menuOverlay,
                                                children: (0, a.jsxs)(X.XE, {
                                                    children: [
                                                        (0, a.jsx)(X.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: ei.intl.string(ei.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, et.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(X.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": ei.intl.string(ei.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: eP,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            H.wS &&
                                                            eO &&
                                                            (0, a.jsx)(X.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: ei.intl.string(ei.t["/AXYnE"]),
                                                                onClick: () => {
                                                                    (0, H.JG)(t.id), n();
                                                                },
                                                            }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (null == ef ? void 0 : ef.profileEffect) != null &&
                                !eZ.current &&
                                (0, a.jsx)(j.Z, {
                                    skuId: ef.profileEffect.skuId,
                                    isHovering: ey,
                                }),
                        ],
                    }),
                    !eQ && eX && eJ
                        ? (0, a.jsx)(Y.Z, {
                              targetElementRef: eD,
                              onClose: n,
                          })
                        : null,
                    (0, a.jsx)(g.Z, {}),
                ],
            }),
        }),
    });
}
