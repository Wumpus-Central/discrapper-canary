n.d(t, { Z: () => el }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(873546),
    l = n(442837),
    s = n(704215),
    o = n(257465),
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
    v = n(300284),
    j = n(680295),
    _ = n(785717),
    y = n(461133),
    C = n(209698),
    E = n(687158),
    N = n(892001),
    T = n(899007),
    S = n(648052),
    O = n(867176),
    P = n(537006),
    I = n(483424),
    k = n(681837),
    w = n(638970),
    R = n(502762),
    A = n(530),
    Z = n(309494),
    D = n(4517),
    L = n(252748),
    M = n(420654),
    U = n(785184),
    F = n(695346),
    B = n(158776),
    G = n(246946),
    z = n(572004),
    V = n(5192),
    H = n(74538),
    W = n(7093),
    q = n(474376),
    K = n(431282),
    Y = n(213928),
    X = n(587243),
    J = n(383832),
    $ = n(981631),
    Q = n(921944),
    ee = n(228168),
    et = n(671955),
    en = n(388032),
    ea = n(54482),
    er = n(116649);
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
    let { currentUser: t, onClose: n, setPopoutRef: el, highlightBadge: es, openedAt: eo } = e,
        ec = __OVERLAY__,
        ed = (0, E.ZP)(t.id),
        { analyticsLocations: eu } = (0, p.ZP)(m.Z.USER_PROFILE_ACCOUNT_POPOUT),
        em = (0, _.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
        }),
        { ref: ep } = (0, d.ZP)(),
        eh = (0, u.Z)(ep);
    r.useEffect(() => {
        null == el || el(ep.current);
    }, [ep, el]),
        r.useEffect(() => (W.Z.setState({ isOpen: !0 }), () => W.Z.setState({ isOpen: !1 })), []);
    let ex = (0, l.e7)([B.Z], () => B.Z.getStatus(t.id)),
        ef = F.Cr.useSetting(),
        eb = (0, X.F)(ef),
        { expiringStatusProfileFeedback: eg } = b.Y.useExperiment(
            { location: "UserProfileAccountPopout" },
            { autoTrackExposure: !1 },
        ),
        ev = (0, l.e7)([G.Z], () => G.Z.hidePersonalInformation),
        ej = (0, g.p)(),
        e_ = F.Sb.useSetting(),
        ey = (0, X.I)(ex),
        eC = (0, q.g)(n),
        eE = (0, v.Z)({ analyticsLocations: eu }),
        eN = (0, H.I5)(t),
        eT = (0, h.p)({ location: "UserProfileAccountPopout" }),
        eS = (0, C.b)({ location: "UserProfileAccountPopout" }),
        eO = r.useRef(null),
        eP = r.useRef((0, W.Z)((e) => e.shouldRenderTenureLevelUp)),
        eI = r.useMemo(() => (0, x.Z)(), []),
        [ek, ew] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            ew(!1);
        }, 500);
    }, []);
    let eR = (e) => {
            null == n || n(),
                (0, N.openUserProfileModal)(
                    ei(
                        {
                            customStatusPrompt: eI,
                            sourceAnalyticsLocations: eu,
                        },
                        em,
                        e,
                    ),
                );
        },
        eA = (0, y.P)({ location: "UserProfileAccountPopout" }),
        eZ = (null == ed ? void 0 : ed.widgets) != null && ed.widgets.length > 0,
        eD = eZ ? [] : [s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eL, eM] = (0, f.US)(eD),
        eU = eL === s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE;
    return (0, a.jsx)(p.Gt, {
        value: eu,
        children: (0, a.jsx)(_.Mt, {
            value: em,
            openedAt: eo,
            fetchStartedAt: null == ed ? void 0 : ed.fetchStartedAt,
            fetchEndedAt: null == ed ? void 0 : ed.fetchEndedAt,
            isLoaded: null == ed ? void 0 : ed.isLoaded,
            children: (0, a.jsxs)(c.VqE, {
                ref: ep,
                "aria-label": t.username,
                children: [
                    (0, a.jsxs)(R.Z, {
                        className: ea.themeContainer,
                        user: t,
                        displayProfile: ed,
                        themeType: et.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: er.header,
                                children: [
                                    (0, a.jsx)(O.Z, {
                                        user: t,
                                        displayProfile: ed,
                                        themeType: et.l.POPOUT,
                                    }),
                                    (0, a.jsx)(T.Z, {
                                        user: t,
                                        displayProfile: ed,
                                        themeType: et.l.POPOUT,
                                        onOpenProfile: ec ? void 0 : eR,
                                    }),
                                    (0, a.jsx)(D.Z, {
                                        ref: eO,
                                        user: t,
                                        themeType: et.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eT ? eI : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: ea.body,
                                style: { pointerEvents: ek ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(A.Z, {
                                        user: t,
                                        className: ea.username,
                                        nickname: V.ZP.getName(null, null, t),
                                        onOpenProfile: ec ? void 0 : eR,
                                        pronouns: null == ed ? void 0 : ed.pronouns,
                                        tags: (0, a.jsx)(S.Z, {
                                            displayProfile: ed,
                                            themeType: et.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != es ? (e) => e === es : void 0,
                                            shouldGlowTenureBadge: eP.current,
                                        }),
                                        nicknameIcons: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(k.Z, { userId: t.id }),
                                                (0, a.jsx)(Z.Z, {
                                                    user: t,
                                                    isHovering: eh,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, a.jsx)(M.Z, {
                                        user: t,
                                        bio: null == ed ? void 0 : ed.bio,
                                        hidePersonalInformation: ev,
                                        onClose: n,
                                    }),
                                    eA &&
                                        eZ &&
                                        (0, a.jsx)(L.Z, {
                                            widgets: ed.gameWidgets,
                                            onClick: () => {
                                                n(), eR({ section: ee.oh.WIDGETS });
                                            },
                                        }),
                                    (0, a.jsx)(P.Z, {
                                        isPremiumUser: eN,
                                        onInteraction: n,
                                    }),
                                    eS
                                        ? (0, a.jsx)(w.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: eR,
                                              onClose: n,
                                          })
                                        : (0, a.jsx)(I.Z, {
                                              user: t,
                                              currentUser: t,
                                              onClose: n,
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: ea.menus,
                                        children: [
                                            (0, a.jsx)(R.Z.Overlay, {
                                                className: ea.menuOverlay,
                                                children: (0, a.jsxs)(K.XE, {
                                                    children: [
                                                        (0, a.jsx)(K.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: en.intl.string(en.t.s5vZlZ),
                                                            icon: c.vdY,
                                                            onClick: () => {
                                                                eM(Q.L.USER_DISMISS), eE(), n();
                                                            },
                                                            trailing: eU
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: en.intl.string(en.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                        }),
                                                        (0, a.jsx)(K.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(Y.Z, {}),
                                                            sublabel: eg && null != eb && eb,
                                                            icon: () =>
                                                                (0, a.jsx)(c.qbd, {
                                                                    status: ex,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (ej || ex === $.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: i.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(K.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: ea.statusPickerModalMenu,
                                                                          "aria-label": en.intl.string(en.t.E13trK),
                                                                          onClose: t,
                                                                          children: ey,
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
                                                                                              o.IX,
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
                                                                                                                  "3Uj+2t"
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
                                                                                                                      .E13trK,
                                                                                                              ),
                                                                                                          className:
                                                                                                              ea.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: r,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: ey,
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
                                                children: (0, a.jsxs)(K.XE, {
                                                    children: [
                                                        (0, a.jsx)(K.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: en.intl.string(en.t.oMNyYG),
                                                            onClick: () => {
                                                                n(), (0, J.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(K.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": en.intl.string(en.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: eC,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            z.wS &&
                                                            e_ &&
                                                            (0, a.jsx)(K.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: en.intl.string(en.t["/AXYnJ"]),
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
                            (null == ed ? void 0 : ed.profileEffect) != null &&
                                !eP.current &&
                                (0, a.jsx)(j.Z, {
                                    profileEffectId: ed.profileEffect.id,
                                    isHovering: eh,
                                }),
                        ],
                    }),
                    (0, a.jsx)(U.Z, {}),
                ],
            }),
        }),
    });
}
