n.d(t, { Z: () => ec }), n(388685);
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
    C = n(880421),
    E = n(209698),
    S = n(687158),
    N = n(612600),
    T = n(892001),
    O = n(899007),
    P = n(648052),
    I = n(867176),
    k = n(537006),
    w = n(483424),
    R = n(681837),
    A = n(638970),
    Z = n(502762),
    D = n(530),
    L = n(309494),
    M = n(4517),
    U = n(350207),
    F = n(420654),
    G = n(695346),
    B = n(158776),
    z = n(246946),
    V = n(572004),
    H = n(5192),
    W = n(74538),
    K = n(7093),
    q = n(175015),
    Y = n(474376),
    X = n(905953),
    J = n(431282),
    Q = n(213928),
    $ = n(587243),
    ee = n(383832),
    et = n(981631),
    en = n(921944),
    ea = n(228168),
    er = n(671955),
    ei = n(388032),
    el = n(54482),
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
        { analyticsLocations: ef } = (0, p.ZP)(m.Z.USER_PROFILE_ACCOUNT_POPOUT),
        eb = (0, y.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: em,
        }),
        { ref: eg } = (0, d.ZP)(),
        ev = (0, u.Z)(eg);
    r.useEffect(() => {
        null == ec || ec(eg.current);
    }, [eg, ec]),
        r.useEffect(() => (K.Z.setState({ isOpen: !0 }), () => K.Z.setState({ isOpen: !1 })), []);
    let ej = (0, s.e7)([B.Z], () => B.Z.getStatus(t.id)),
        e_ = G.Cr.useSetting(),
        ey = (0, $.F)(e_),
        { expiringStatusProfileFeedback: eC } = b.Y.useExperiment(
            { location: "UserProfileAccountPopout" },
            { autoTrackExposure: !1 },
        ),
        eE = (0, s.e7)([z.Z], () => z.Z.hidePersonalInformation),
        eS = (0, g.p)(),
        eN = G.Sb.useSetting(),
        eT = (0, $.I)(ej),
        eO = (0, Y.g)(n),
        eP = (0, j.Z)({ analyticsLocations: ef }),
        eI = (0, W.I5)(t),
        ek = (0, h.p)({ location: "UserProfileAccountPopout" }),
        ew = (0, E.b)({ location: "UserProfileAccountPopout" }),
        eR = r.useRef(null),
        eA = r.useRef(null),
        eZ = r.useRef((0, K.Z)((e) => e.shouldRenderTenureLevelUp)),
        eD = r.useMemo(() => (0, x.Z)(), []),
        [eL, eM] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            eM(!1);
        }, 500);
    }, []);
    let eU = (e) => {
            null == n || n(),
                (0, T.openUserProfileModal)(
                    eo(
                        {
                            customStatusPrompt: eD,
                            sourceAnalyticsLocations: ef,
                        },
                        eb,
                        e,
                    ),
                );
        },
        eF = (0, N.Z)({ location: "UserProfileAccountPopout" }),
        eG = (null == ex ? void 0 : ex.widgets) != null && ex.widgets.length > 0,
        eB = eG ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [ez, eV] = (0, f.US)(eB),
        eH = ez === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eW = r.useCallback(() => {
            eV(en.L.USER_DISMISS), n();
        }, [eV, n]),
        eK = r.useCallback(() => {
            (ep && null != em) || (eP(), eW());
        }, [eP, eW, ep, em]),
        eq = ep && null != em,
        eY = (0, q.K)(em, ef, eH, n, eW),
        eX = (0, C.k)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(p.Gt, {
        value: ef,
        children: (0, a.jsx)(y.Mt, {
            value: eb,
            openedAt: eu,
            fetchStartedAt: null == ex ? void 0 : ex.fetchStartedAt,
            fetchEndedAt: null == ex ? void 0 : ex.fetchEndedAt,
            isLoaded: null == ex ? void 0 : ex.isLoaded,
            children: (0, a.jsxs)(c.VqE, {
                ref: eg,
                "aria-label": t.username,
                "data-layer": "base",
                children: [
                    (0, a.jsxs)(Z.Z, {
                        className: el.themeContainer,
                        user: t,
                        displayProfile: ex,
                        themeType: er.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: es.header,
                                children: [
                                    (0, a.jsx)(I.Z, {
                                        user: t,
                                        displayProfile: ex,
                                        themeType: er.l.POPOUT,
                                    }),
                                    (0, a.jsx)(O.Z, {
                                        user: t,
                                        displayProfile: ex,
                                        themeType: er.l.POPOUT,
                                        onOpenProfile: eh ? void 0 : eU,
                                    }),
                                    (0, a.jsx)(M.Z, {
                                        ref: eR,
                                        user: t,
                                        themeType: er.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: ek ? eD : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: el.body,
                                style: { pointerEvents: eL ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(D.Z, {
                                        user: t,
                                        className: el.username,
                                        nickname: H.ZP.getName(em, null, t),
                                        onOpenProfile: eh ? void 0 : eU,
                                        pronouns: null == ex ? void 0 : ex.pronouns,
                                        tags: (0, a.jsx)(P.Z, {
                                            displayProfile: ex,
                                            themeType: er.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != ed ? (e) => e === ed : void 0,
                                            shouldGlowTenureBadge: eZ.current,
                                        }),
                                        nicknameIcons: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(R.Z, { userId: t.id }),
                                                (0, a.jsx)(L.Z, {
                                                    user: t,
                                                    isHovering: ev,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, a.jsx)(F.Z, {
                                        user: t,
                                        bio: null == ex ? void 0 : ex.bio,
                                        hidePersonalInformation: eE,
                                        onClose: n,
                                    }),
                                    eF &&
                                        eG &&
                                        (0, a.jsx)(U.Z, {
                                            widgets: ex.widgets,
                                            onClick: () => {
                                                n(), eU({ section: ea.oh.WIDGETS });
                                            },
                                        }),
                                    (0, a.jsx)(k.Z, {
                                        isPremiumUser: eI,
                                        onInteraction: n,
                                    }),
                                    ew
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
                                        className: el.menus,
                                        children: [
                                            (0, a.jsx)(Z.Z.Overlay, {
                                                className: el.menuOverlay,
                                                children: (0, a.jsxs)(J.XE, {
                                                    children: [
                                                        (0, a.jsx)(J.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: ep
                                                                ? ei.intl.string(ei.t.Ip9nBQ)
                                                                : ei.intl.string(ei.t.s5vZlZ),
                                                            icon: c.vdY,
                                                            onClick: eK,
                                                            renderSubmenu: eq
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(J.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": ei.intl.string(ei.t.szTA8P),
                                                                          onClose: t,
                                                                          children: eY,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: eH
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: ei.intl.string(ei.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: eA,
                                                        }),
                                                        (0, a.jsx)(J.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(Q.Z, {}),
                                                            sublabel: eC && null != ey && ey,
                                                            icon: () =>
                                                                (0, a.jsx)(c.qbd, {
                                                                    status: ej,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (eS || ej === et.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: i.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(J.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: el.statusPickerModalMenu,
                                                                          "aria-label": ei.intl.string(ei.t.E13trK),
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
                                                                                                                  "3Uj+2t"
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
                                                                                                                      .E13trK,
                                                                                                              ),
                                                                                                          className:
                                                                                                              el.statusPickerModal,
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
                                            (0, a.jsx)(Z.Z.Overlay, {
                                                className: el.menuOverlay,
                                                children: (0, a.jsxs)(J.XE, {
                                                    children: [
                                                        (0, a.jsx)(J.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: ei.intl.string(ei.t.oMNyYG),
                                                            onClick: () => {
                                                                n(), (0, ee.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(J.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": ei.intl.string(ei.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: eO,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            V.wS &&
                                                            eN &&
                                                            (0, a.jsx)(J.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: ei.intl.string(ei.t["/AXYnJ"]),
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
                            (null == ex ? void 0 : ex.profileEffect) != null &&
                                !eZ.current &&
                                (0, a.jsx)(_.Z, {
                                    skuId: ex.profileEffect.skuId,
                                    isHovering: ev,
                                }),
                            !eq && eX
                                ? (0, a.jsx)(X.Z, {
                                      targetElementRef: eA,
                                      onClose: n,
                                  })
                                : null,
                        ],
                    }),
                    (0, a.jsx)(v.Z, {}),
                ],
            }),
        }),
    });
}
