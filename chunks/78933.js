n.d(t, { Z: () => ec }), n(388685);
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
    R = n(502762),
    Z = n(530),
    D = n(309494),
    L = n(4517),
    M = n(350207),
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
    ea = n(228168),
    el = n(671955),
    ei = n(388032),
    er = n(54482),
    es = n(116649);
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
        ex = (0, S.ZP)(t.id, em),
        { analyticsLocations: eg } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT),
        ef = (0, _.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: em,
        }),
        { ref: eb, height: ev } = (0, d.ZP)(),
        { isHoveringOrFocusing: ej, isHovering: e_ } = (0, p.Z)(eb);
    l.useEffect(() => {
        null == ec || ec(eb.current);
    }, [eb, ec]),
        l.useEffect(() => (W.Z.setState({ isOpen: !0 }), () => W.Z.setState({ isOpen: !1 })), []);
    let ey = (0, s.e7)([F.Z], () => F.Z.getStatus(t.id)),
        eC = B.Cr.useSetting(),
        eS = (0, $.F)(eC),
        eE = (0, s.e7)([G.Z], () => G.Z.hidePersonalInformation),
        eN = (0, f.p)(),
        eT = B.Sb.useSetting(),
        eO = (0, $.I)(ey),
        eP = (0, q.g)(n),
        eI = (0, v.Z)({ analyticsLocations: eg }),
        ew = (0, V.I5)(t),
        ek = (0, h.p)({ location: "UserProfileAccountPopout" }),
        eA = (0, C.b)({ location: "UserProfileAccountPopout" }),
        eR = l.useRef(null),
        eZ = l.useRef(null),
        eD = l.useRef((0, W.Z)((e) => e.shouldRenderTenureLevelUp)),
        eL = l.useMemo(() => (0, x.Z)(), []),
        [eM, eU] = l.useState(!0);
    l.useEffect(() => {
        setTimeout(() => {
            eU(!1);
        }, 500);
    }, []);
    let eB = (e) => {
            null == n || n(),
                (0, N.openUserProfileModal)(
                    eo(
                        {
                            customStatusPrompt: eL,
                            sourceAnalyticsLocations: eg,
                        },
                        ef,
                        e,
                    ),
                );
        },
        eF = (0, E.Z)({ location: "UserProfileAccountPopout" }),
        eG = (null == ex ? void 0 : ex.widgets) != null && ex.widgets.length > 0,
        ez = eG ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eH, eV] = (0, g.US)(ez),
        eW = eH === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eK = l.useCallback(() => {
            eV(en.L.USER_DISMISS), n();
        }, [eV, n]),
        eq = l.useCallback(() => {
            (ep && null != em) || (eI(), eK());
        }, [eI, eK, ep, em]),
        eY = ep && null != em,
        eJ = (0, K.K)(em, eg, eW, n, eK),
        eX = (0, y.k)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(m.Gt, {
        value: eg,
        children: (0, a.jsx)(_.Mt, {
            value: ef,
            openedAt: eu,
            fetchStartedAt: null == ex ? void 0 : ex.fetchStartedAt,
            fetchEndedAt: null == ex ? void 0 : ex.fetchEndedAt,
            isLoaded: null == ex ? void 0 : ex.isLoaded,
            children: (0, a.jsxs)(c.VqE, {
                ref: eb,
                "aria-label": t.username,
                className: er.popoutContainer,
                "data-layer": "base",
                children: [
                    (0, a.jsx)(Q.Z, {
                        displayProfile: ex,
                        handleOpenUserProfileModal: eB,
                        height: ev,
                    }),
                    (0, a.jsxs)(R.Z, {
                        className: er.themeContainer,
                        user: t,
                        displayProfile: ex,
                        themeType: el.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: es.header,
                                children: [
                                    (0, a.jsx)(P.Z, {
                                        user: t,
                                        displayProfile: ex,
                                        themeType: el.l.POPOUT,
                                    }),
                                    (0, a.jsx)(T.Z, {
                                        user: t,
                                        displayProfile: ex,
                                        themeType: el.l.POPOUT,
                                        onOpenProfile: eh ? void 0 : eB,
                                    }),
                                    (0, a.jsx)(L.Z, {
                                        ref: eR,
                                        user: t,
                                        themeType: el.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: ek ? eL : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: er.body,
                                style: { pointerEvents: eM ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(Z.Z, {
                                        user: t,
                                        className: er.username,
                                        nickname: H.ZP.getName(em, null, t),
                                        onOpenProfile: eh ? void 0 : eB,
                                        pronouns: null == ex ? void 0 : ex.pronouns,
                                        tags: (0, a.jsx)(O.Z, {
                                            displayProfile: ex,
                                            themeType: el.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != ed ? (e) => e === ed : void 0,
                                            shouldGlowTenureBadge: eD.current,
                                        }),
                                        nicknameIcons: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(k.Z, { userId: t.id }),
                                                (0, a.jsx)(D.Z, {
                                                    user: t,
                                                    isVisible: ej,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, a.jsx)(U.Z, {
                                        user: t,
                                        bio: null == ex ? void 0 : ex.bio,
                                        hidePersonalInformation: eE,
                                        onClose: n,
                                    }),
                                    eF &&
                                        eG &&
                                        (0, a.jsx)(M.Z, {
                                            widgets: ex.widgets,
                                            onClick: () => {
                                                n(), eB({ section: ea.oh.WIDGETS });
                                            },
                                        }),
                                    (0, a.jsx)(I.Z, {
                                        isPremiumUser: ew,
                                        onInteraction: n,
                                    }),
                                    eA
                                        ? (0, a.jsx)(A.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: eB,
                                              onClose: n,
                                          })
                                        : (0, a.jsx)(w.Z, {
                                              user: t,
                                              currentUser: t,
                                              onClose: n,
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: er.menus,
                                        children: [
                                            (0, a.jsx)(R.Z.Overlay, {
                                                className: er.menuOverlay,
                                                children: (0, a.jsxs)(J.XE, {
                                                    children: [
                                                        (0, a.jsx)(J.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: ep
                                                                ? ei.intl.string(ei.t.Ip9nBS)
                                                                : ei.intl.string(ei.t.s5vZlQ),
                                                            icon: c.vdY,
                                                            onClick: eq,
                                                            renderSubmenu: eY
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(J.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": ei.intl.string(ei.t.szTA8E),
                                                                          onClose: t,
                                                                          children: eJ,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: eW
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: ei.intl.string(ei.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: eZ,
                                                        }),
                                                        (0, a.jsx)(J.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(X.Z, {}),
                                                            sublabel: null != eS && eS,
                                                            icon: () =>
                                                                (0, a.jsx)(c.qbd, {
                                                                    status: ey,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (eN || ey === et.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: i.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(J.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: er.statusPickerModalMenu,
                                                                          "aria-label": ei.intl.string(ei.t.E13trI),
                                                                          onClose: t,
                                                                          children: eO,
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
                                                                                              ((t = eo(
                                                                                                  { onClose: l },
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
                                                                                                              er.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: l,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: eO,
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
                                                className: er.menuOverlay,
                                                children: (0, a.jsxs)(J.XE, {
                                                    children: [
                                                        (0, a.jsx)(J.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: ei.intl.string(ei.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, ee.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(J.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": ei.intl.string(ei.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: eP,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            z.wS &&
                                                            eT &&
                                                            (0, a.jsx)(J.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: ei.intl.string(ei.t["/AXYnE"]),
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
                            (null == ex ? void 0 : ex.profileEffect) != null &&
                                !eD.current &&
                                (0, a.jsx)(j.Z, {
                                    skuId: ex.profileEffect.skuId,
                                    isHovering: e_,
                                }),
                        ],
                    }),
                    !eY && eX
                        ? (0, a.jsx)(Y.Z, {
                              targetElementRef: eZ,
                              onClose: n,
                          })
                        : null,
                    (0, a.jsx)(b.Z, {}),
                ],
            }),
        }),
    });
}
