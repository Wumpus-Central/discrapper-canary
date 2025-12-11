n.d(t, { Z: () => eo }), n(388685);
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
    C = n(880421),
    _ = n(209698),
    S = n(687158),
    E = n(612600),
    O = n(892001),
    T = n(899007),
    N = n(648052),
    P = n(867176),
    w = n(537006),
    I = n(483424),
    k = n(681837),
    R = n(638970),
    A = n(675893),
    D = n(502762),
    Z = n(530),
    L = n(309494),
    M = n(4517),
    U = n(420654),
    B = n(695346),
    F = n(158776),
    G = n(246946),
    V = n(572004),
    H = n(5192),
    W = n(74538),
    z = n(7093),
    q = n(175015),
    K = n(474376),
    Q = n(905953),
    Y = n(431282),
    X = n(213928),
    J = n(480898),
    $ = n(587243),
    ee = n(383832),
    et = n(981631),
    en = n(921944),
    ea = n(671955),
    er = n(388032),
    ei = n(787224),
    el = n(155493);
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
        { analyticsLocations: ef } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT),
        ex = (0, y.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: eu,
        }),
        { ref: eb, height: eg } = (0, d.ZP)(),
        { isHoveringOrFocusing: ev, isHovering: ej } = (0, p.Z)(eb);
    r.useEffect(() => {
        null == eo || eo(eb.current);
    }, [eb, eo]),
        r.useEffect(() => (z.Z.setState({ isOpen: !0 }), () => z.Z.setState({ isOpen: !1 })), []);
    let ey = (0, s.e7)([F.Z], () => F.Z.getStatus(t.id)),
        eC = B.Cr.useSetting(),
        e_ = (0, $.F)(eC),
        eS = (0, s.e7)([G.Z], () => G.Z.hidePersonalInformation),
        eE = (0, b.p)(),
        eO = B.Sb.useSetting(),
        eT = (0, $.I)(ey),
        eN = (0, K.g)(n),
        eP = (0, v.Z)({ analyticsLocations: ef }),
        ew = (0, W.I5)(t),
        eI = (0, h.p)({ location: "UserProfileAccountPopout" }),
        ek = (0, _.b)({ location: "UserProfileAccountPopout" }),
        eR = r.useRef(null),
        eA = r.useRef(null),
        eD = r.useRef((0, z.Z)((e) => e.shouldRenderTenureLevelUp)),
        eZ = r.useMemo(() => (0, f.Z)(), []),
        [eL, eM] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            eM(!1);
        }, 500);
    }, []);
    let eU = (e) => {
            null == n || n(),
                (0, O.openUserProfileModal)(
                    es(
                        {
                            customStatusPrompt: eZ,
                            sourceAnalyticsLocations: ef,
                        },
                        ex,
                        e,
                    ),
                );
        },
        eB = (0, E.Z)({ location: "UserProfileAccountPopout" }),
        eF = (null == eh ? void 0 : eh.widgets) != null && eh.widgets.length > 0,
        eG = eF ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eV, eH] = (0, x.US)(eG),
        eW = eV === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        ez = r.useCallback(() => {
            eH(en.L.USER_DISMISS), n();
        }, [eH, n]),
        eq = r.useCallback(() => {
            (em && null != eu) || (eP(), ez());
        }, [eP, ez, em, eu]),
        eK = em && null != eu,
        eQ = (0, q.K)(eu, ef, eW, n, ez),
        eY = (0, C.k)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(m.Gt, {
        value: ef,
        children: (0, a.jsx)(y.Mt, {
            value: ex,
            openedAt: ed,
            fetchStartedAt: null == eh ? void 0 : eh.fetchStartedAt,
            fetchEndedAt: null == eh ? void 0 : eh.fetchEndedAt,
            isLoaded: null == eh ? void 0 : eh.isLoaded,
            children: (0, a.jsxs)(c.VqE, {
                ref: eb,
                "aria-label": t.username,
                className: ei.popoutContainer,
                "data-layer": "base",
                children: [
                    (0, a.jsx)(J.Z, {
                        displayProfile: eh,
                        handleOpenUserProfileModal: eU,
                        height: eg,
                    }),
                    (0, a.jsxs)(D.Z, {
                        className: ei.themeContainer,
                        user: t,
                        displayProfile: eh,
                        themeType: ea.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: el.header,
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
                                        ref: eR,
                                        user: t,
                                        themeType: ea.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eI ? eZ : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: ei.body,
                                style: { pointerEvents: eL ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(Z.Z, {
                                        user: t,
                                        className: ei.username,
                                        nickname: H.ZP.getName(eu, null, t),
                                        onOpenProfile: ep ? void 0 : eU,
                                        pronouns: null == eh ? void 0 : eh.pronouns,
                                        tags: (0, a.jsx)(N.Z, {
                                            displayProfile: eh,
                                            themeType: ea.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != ec ? (e) => e === ec : void 0,
                                            shouldGlowTenureBadge: eD.current,
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
                                        (0, a.jsx)(A.Z, {
                                            user: t,
                                            widgets: null == eh ? void 0 : eh.widgets,
                                            onOpenUserProfileModal: eU,
                                        }),
                                    (0, a.jsx)(w.Z, {
                                        isPremiumUser: ew,
                                        onInteraction: n,
                                    }),
                                    ek
                                        ? (0, a.jsx)(R.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: eU,
                                              onClose: n,
                                          })
                                        : (0, a.jsx)(I.Z, {
                                              user: t,
                                              currentUser: t,
                                              onClose: n,
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: ei.menus,
                                        children: [
                                            (0, a.jsx)(D.Z.Overlay, {
                                                className: ei.menuOverlay,
                                                children: (0, a.jsxs)(Y.XE, {
                                                    children: [
                                                        (0, a.jsx)(Y.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: em
                                                                ? er.intl.string(er.t.Ip9nBS)
                                                                : er.intl.string(er.t.s5vZlQ),
                                                            icon: c.vdY,
                                                            onClick: eq,
                                                            renderSubmenu: eK
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(Y.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": er.intl.string(er.t.szTA8E),
                                                                          onClose: t,
                                                                          children: eQ,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: eW
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: er.intl.string(er.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: eA,
                                                        }),
                                                        (0, a.jsx)(Y.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(X.Z, {}),
                                                            sublabel: null != e_ && e_,
                                                            icon: () =>
                                                                (0, a.jsx)(c.qbd, {
                                                                    status: ey,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (eE || ey === et.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: i.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(Y.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: ei.statusPickerModalMenu,
                                                                          "aria-label": er.intl.string(er.t.E13trI),
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
                                                                                              ((t = es(
                                                                                                  { onClose: r },
                                                                                                  i,
                                                                                              )),
                                                                                              (n = n =
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          er.intl.string(
                                                                                                              er.t[
                                                                                                                  "3Uj+2p"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      a.jsx)(c.v2r, {
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              er.intl.string(
                                                                                                                  er.t
                                                                                                                      .E13trI,
                                                                                                              ),
                                                                                                          className:
                                                                                                              ei.statusPickerModal,
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
                                            (0, a.jsx)(D.Z.Overlay, {
                                                className: ei.menuOverlay,
                                                children: (0, a.jsxs)(Y.XE, {
                                                    children: [
                                                        (0, a.jsx)(Y.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: er.intl.string(er.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, ee.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(Y.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": er.intl.string(er.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: eN,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            V.wS &&
                                                            eO &&
                                                            (0, a.jsx)(Y.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: er.intl.string(er.t["/AXYnE"]),
                                                                onClick: () => {
                                                                    (0, V.JG)(t.id), n();
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
                                !eD.current &&
                                (0, a.jsx)(j.Z, {
                                    skuId: eh.profileEffect.skuId,
                                    isHovering: ej,
                                }),
                        ],
                    }),
                    !eK && eY
                        ? (0, a.jsx)(Q.Z, {
                              targetElementRef: eA,
                              onClose: n,
                          })
                        : null,
                    (0, a.jsx)(g.Z, {}),
                ],
            }),
        }),
    });
}
