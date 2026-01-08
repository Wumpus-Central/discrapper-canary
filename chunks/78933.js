n.d(t, { Z: () => es }), n(388685);
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
    _ = n(659158),
    S = n(687158),
    E = n(612600),
    T = n(892001),
    O = n(899007),
    N = n(648052),
    P = n(867176),
    w = n(537006),
    I = n(407699),
    k = n(638970),
    R = n(675893),
    A = n(502762),
    Z = n(530),
    D = n(309494),
    L = n(4517),
    M = n(420654),
    U = n(695346),
    B = n(158776),
    F = n(246946),
    G = n(572004),
    V = n(5192),
    z = n(74538),
    H = n(7093),
    W = n(175015),
    q = n(474376),
    K = n(905953),
    Q = n(431282),
    Y = n(213928),
    X = n(480898),
    J = n(587243),
    $ = n(383832),
    ee = n(981631),
    et = n(921944),
    en = n(671955),
    ea = n(388032),
    er = n(787224),
    ei = n(155493);
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
        ep = (0, S.ZP)(t.id, ed),
        { analyticsLocations: eh } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT),
        ef = (0, C.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: ed,
        }),
        { ref: ex, height: eb } = (0, d.ZP)(),
        { isHoveringOrFocusing: eg, isHovering: ev } = (0, h.Z)(ex);
    r.useEffect(() => {
        null == es || es(ex.current);
    }, [ex, es]),
        r.useEffect(() => (H.Z.setState({ isOpen: !0 }), () => H.Z.setState({ isOpen: !1 })), []);
    let ej = (0, s.e7)([B.Z], () => B.Z.getStatus(t.id)),
        ey = U.Cr.useSetting(),
        eC = (0, J.F)(ey),
        e_ = (0, s.e7)([F.Z], () => F.Z.hidePersonalInformation),
        eS = (0, g.p)(),
        eE = U.Sb.useSetting(),
        eT = (0, J.I)(ej),
        eO = (0, q.g)(n),
        eN = (0, j.Z)({ analyticsLocations: eh }),
        eP = (0, z.I5)(t),
        ew = (0, f.p)({ location: "UserProfileAccountPopout" }),
        eI = r.useRef(null),
        ek = r.useRef(null),
        eR = r.useRef((0, H.Z)((e) => e.shouldRenderTenureLevelUp)),
        eA = r.useMemo(() => (0, x.Z)(), []),
        [eZ, eD] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            eD(!1);
        }, 500);
    }, []);
    let eL = (e) => {
            null == n || n(),
                (0, T.openUserProfileModal)(
                    el(
                        {
                            customStatusPrompt: eA,
                            sourceAnalyticsLocations: eh,
                        },
                        ef,
                        e,
                    ),
                );
        },
        eM = (0, E.Z)({ location: "UserProfileAccountPopout" }),
        eU = (null == ep ? void 0 : ep.widgets) != null && ep.widgets.length > 0,
        eB = eU ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eF, eG] = (0, b.US)(eB),
        eV = eF === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        ez = r.useCallback(() => {
            eG(et.L.USER_DISMISS), n();
        }, [eG, n]),
        eH = r.useCallback(() => {
            (eu && null != ed) || (eN(), ez());
        }, [eN, ez, eu, ed]),
        eW = eu && null != ed,
        eq = (0, W.K)(ed, eh, eV, n, ez),
        eK = (0, p.q5)({ location: "UserProfileAccountPopout" }),
        eQ = (0, _.S)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(m.Gt, {
        value: eh,
        children: (0, a.jsx)(C.Mt, {
            value: ef,
            openedAt: ec,
            fetchStartedAt: null == ep ? void 0 : ep.fetchStartedAt,
            fetchEndedAt: null == ep ? void 0 : ep.fetchEndedAt,
            isLoaded: null == ep ? void 0 : ep.isLoaded,
            children: (0, a.jsxs)(c.VqE, {
                ref: ex,
                "aria-label": t.username,
                className: er.popoutContainer,
                "data-layer": "base",
                children: [
                    (0, a.jsx)(X.Z, {
                        displayProfile: ep,
                        handleOpenUserProfileModal: eL,
                        height: eb,
                    }),
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
                                    (0, a.jsx)(O.Z, {
                                        user: t,
                                        displayProfile: ep,
                                        themeType: en.l.POPOUT,
                                        onOpenProfile: em ? void 0 : eL,
                                    }),
                                    (0, a.jsx)(L.Z, {
                                        ref: eI,
                                        user: t,
                                        themeType: en.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: ew ? eA : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: er.body,
                                style: { pointerEvents: eZ ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(I.Z, { userId: t.id }),
                                    (0, a.jsx)(Z.Z, {
                                        user: t,
                                        className: er.username,
                                        nickname: V.ZP.getName(ed, null, t),
                                        onOpenProfile: em ? void 0 : eL,
                                        pronouns: null == ep ? void 0 : ep.pronouns,
                                        tags: (0, a.jsx)(N.Z, {
                                            displayProfile: ep,
                                            themeType: en.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != eo ? (e) => e === eo : void 0,
                                            shouldGlowTenureBadge: eR.current,
                                        }),
                                        nicknameIcons: (0, a.jsx)(D.Z, {
                                            user: t,
                                            isVisible: eg,
                                        }),
                                    }),
                                    (0, a.jsx)(M.Z, {
                                        user: t,
                                        bio: null == ep ? void 0 : ep.bio,
                                        hidePersonalInformation: e_,
                                        onClose: n,
                                    }),
                                    eM &&
                                        eU &&
                                        (0, a.jsx)(R.Z, {
                                            user: t,
                                            widgets: null == ep ? void 0 : ep.widgets,
                                            onOpenUserProfileModal: eL,
                                        }),
                                    (0, a.jsx)(w.Z, {
                                        isPremiumUser: eP,
                                        onInteraction: n,
                                    }),
                                    (0, a.jsx)(k.Z, {
                                        user: t,
                                        currentUser: t,
                                        onOpenUserProfileModal: eL,
                                        onClose: n,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: er.menus,
                                        children: [
                                            (0, a.jsx)(A.Z.Overlay, {
                                                className: er.menuOverlay,
                                                children: (0, a.jsxs)(Q.XE, {
                                                    children: [
                                                        (0, a.jsx)(Q.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: eu
                                                                ? ea.intl.string(ea.t.Ip9nBS)
                                                                : ea.intl.string(ea.t.s5vZlQ),
                                                            icon: c.vdY,
                                                            onClick: eH,
                                                            renderSubmenu: eW
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(Q.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": ea.intl.string(ea.t.szTA8E),
                                                                          onClose: t,
                                                                          children: eq,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: eV
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: ea.intl.string(ea.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: ek,
                                                        }),
                                                        (0, a.jsx)(Q.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(Y.Z, {}),
                                                            sublabel: null != eC && eC,
                                                            icon: () =>
                                                                (0, a.jsx)(c.qbd, {
                                                                    status: ej,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (eS || ej === ee.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: i.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(Q.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: er.statusPickerModalMenu,
                                                                          "aria-label": ea.intl.string(ea.t.E13trI),
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
                                                                                                                  "3Uj+2p"
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
                                                                                                                      .E13trI,
                                                                                                              ),
                                                                                                          className:
                                                                                                              er.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: r,
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
                                            (0, a.jsx)(A.Z.Overlay, {
                                                className: er.menuOverlay,
                                                children: (0, a.jsxs)(Q.XE, {
                                                    children: [
                                                        (0, a.jsx)(Q.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: ea.intl.string(ea.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, $.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(Q.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": ea.intl.string(ea.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: eO,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            G.wS &&
                                                            eE &&
                                                            (0, a.jsx)(Q.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: ea.intl.string(ea.t["/AXYnE"]),
                                                                onClick: () => {
                                                                    (0, G.JG)(t.id), n();
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
                                !eR.current &&
                                (0, a.jsx)(y.Z, {
                                    skuId: ep.profileEffect.skuId,
                                    isHovering: ev,
                                }),
                        ],
                    }),
                    !eW && eK && eQ
                        ? (0, a.jsx)(K.Z, {
                              targetElementRef: ek,
                              onClose: n,
                          })
                        : null,
                    (0, a.jsx)(v.Z, {}),
                ],
            }),
        }),
    });
}
