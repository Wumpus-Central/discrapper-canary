n.d(t, { Z: () => ec }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(873546),
    l = n(793030),
    o = n(442837),
    s = n(704215),
    c = n(481060),
    d = n(393238),
    u = n(100527),
    m = n(906732),
    p = n(104505),
    h = n(368326),
    x = n(429467),
    f = n(243778),
    g = n(440051),
    b = n(734934),
    v = n(480173),
    j = n(300284),
    _ = n(680295),
    y = n(785717),
    C = n(880421),
    S = n(209698),
    E = n(687158),
    T = n(612600),
    O = n(892001),
    N = n(899007),
    P = n(648052),
    I = n(867176),
    w = n(537006),
    k = n(483424),
    R = n(681837),
    A = n(638970),
    D = n(502762),
    Z = n(530),
    M = n(309494),
    L = n(4517),
    U = n(350207),
    F = n(420654),
    B = n(695346),
    G = n(158776),
    z = n(246946),
    V = n(572004),
    H = n(5192),
    W = n(74538),
    K = n(7093),
    q = n(175015),
    Y = n(474376),
    J = n(905953),
    X = n(431282),
    Q = n(213928),
    $ = n(587243),
    ee = n(383832),
    et = n(981631),
    en = n(921944),
    ea = n(228168),
    er = n(671955),
    ei = n(388032),
    el = n(138005),
    eo = n(593540);
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
        ex = (0, E.ZP)(t.id, em),
        { analyticsLocations: ef } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT),
        eg = (0, y.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: em,
        }),
        { ref: eb } = (0, d.ZP)(),
        { isHoveringOrFocusing: ev, isHovering: ej } = (0, p.Z)(eb);
    r.useEffect(() => {
        null == ec || ec(eb.current);
    }, [eb, ec]),
        r.useEffect(() => (K.Z.setState({ isOpen: !0 }), () => K.Z.setState({ isOpen: !1 })), []);
    let e_ = (0, o.e7)([G.Z], () => G.Z.getStatus(t.id)),
        ey = B.Cr.useSetting(),
        eC = (0, $.F)(ey),
        { expiringStatusProfileFeedback: eS } = g.Y.useExperiment(
            { location: "UserProfileAccountPopout" },
            { autoTrackExposure: !1 },
        ),
        eE = (0, o.e7)([z.Z], () => z.Z.hidePersonalInformation),
        eT = (0, b.p)(),
        eO = B.Sb.useSetting(),
        eN = (0, $.I)(e_),
        eP = (0, Y.g)(n),
        eI = (0, j.Z)({ analyticsLocations: ef }),
        ew = (0, W.I5)(t),
        ek = (0, h.p)({ location: "UserProfileAccountPopout" }),
        eR = (0, S.b)({ location: "UserProfileAccountPopout" }),
        eA = r.useRef(null),
        eD = r.useRef(null),
        eZ = r.useRef((0, K.Z)((e) => e.shouldRenderTenureLevelUp)),
        eM = r.useMemo(() => (0, x.Z)(), []),
        [eL, eU] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            eU(!1);
        }, 500);
    }, []);
    let eF = (e) => {
            null == n || n(),
                (0, O.openUserProfileModal)(
                    es(
                        {
                            customStatusPrompt: eM,
                            sourceAnalyticsLocations: ef,
                        },
                        eg,
                        e,
                    ),
                );
        },
        eB = (0, T.Z)({ location: "UserProfileAccountPopout" }),
        eG = (null == ex ? void 0 : ex.widgets) != null && ex.widgets.length > 0,
        ez = eG ? [] : [s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eV, eH] = (0, f.US)(ez),
        eW = eV === s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eK = r.useCallback(() => {
            eH(en.L.USER_DISMISS), n();
        }, [eH, n]),
        eq = r.useCallback(() => {
            (ep && null != em) || (eI(), eK());
        }, [eI, eK, ep, em]),
        eY = ep && null != em,
        eJ = (0, q.K)(em, ef, eW, n, eK),
        eX = (0, C.k)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(m.Gt, {
        value: ef,
        children: (0, a.jsx)(y.Mt, {
            value: eg,
            openedAt: eu,
            fetchStartedAt: null == ex ? void 0 : ex.fetchStartedAt,
            fetchEndedAt: null == ex ? void 0 : ex.fetchEndedAt,
            isLoaded: null == ex ? void 0 : ex.isLoaded,
            children: (0, a.jsxs)(c.VqE, {
                ref: eb,
                "aria-label": t.username,
                "data-layer": "base",
                children: [
                    (0, a.jsxs)(D.Z, {
                        className: el.themeContainer,
                        user: t,
                        displayProfile: ex,
                        themeType: er.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: eo.header,
                                children: [
                                    (0, a.jsx)(I.Z, {
                                        user: t,
                                        displayProfile: ex,
                                        themeType: er.l.POPOUT,
                                    }),
                                    (0, a.jsx)(N.Z, {
                                        user: t,
                                        displayProfile: ex,
                                        themeType: er.l.POPOUT,
                                        onOpenProfile: eh ? void 0 : eF,
                                    }),
                                    (0, a.jsx)(L.Z, {
                                        ref: eA,
                                        user: t,
                                        themeType: er.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: ek ? eM : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: el.body,
                                style: { pointerEvents: eL ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(Z.Z, {
                                        user: t,
                                        className: el.username,
                                        nickname: H.ZP.getName(em, null, t),
                                        onOpenProfile: eh ? void 0 : eF,
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
                                                (0, a.jsx)(M.Z, {
                                                    user: t,
                                                    isVisible: ev,
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
                                    eB &&
                                        eG &&
                                        (0, a.jsx)(U.Z, {
                                            widgets: ex.widgets,
                                            onClick: () => {
                                                n(), eF({ section: ea.oh.WIDGETS });
                                            },
                                        }),
                                    (0, a.jsx)(w.Z, {
                                        isPremiumUser: ew,
                                        onInteraction: n,
                                    }),
                                    eR
                                        ? (0, a.jsx)(A.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: eF,
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
                                            (0, a.jsx)(D.Z.Overlay, {
                                                className: el.menuOverlay,
                                                children: (0, a.jsxs)(X.XE, {
                                                    children: [
                                                        (0, a.jsx)(X.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: ep
                                                                ? ei.intl.string(ei.t.Ip9nBQ)
                                                                : ei.intl.string(ei.t.s5vZlZ),
                                                            icon: c.vdY,
                                                            onClick: eq,
                                                            renderSubmenu: eY
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(X.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": ei.intl.string(ei.t.szTA8P),
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
                                                            ref: eD,
                                                        }),
                                                        (0, a.jsx)(X.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(Q.Z, {}),
                                                            sublabel: eS && null != eC && eC,
                                                            icon: () =>
                                                                (0, a.jsx)(c.qbd, {
                                                                    status: e_,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (eT || e_ === et.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: i.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(X.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: el.statusPickerModalMenu,
                                                                          "aria-label": ei.intl.string(ei.t.E13trK),
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
                                                                                              ((t = es(
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
                                            (0, a.jsx)(D.Z.Overlay, {
                                                className: el.menuOverlay,
                                                children: (0, a.jsxs)(X.XE, {
                                                    children: [
                                                        (0, a.jsx)(X.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: ei.intl.string(ei.t.oMNyYG),
                                                            onClick: () => {
                                                                n(), (0, ee.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(X.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": ei.intl.string(ei.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: eP,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            V.wS &&
                                                            eO &&
                                                            (0, a.jsx)(X.V4, {
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
                                    isHovering: ej,
                                }),
                            !eY && eX
                                ? (0, a.jsx)(J.Z, {
                                      targetElementRef: eD,
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
