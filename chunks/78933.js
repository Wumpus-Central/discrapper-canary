n.d(t, { Z: () => ec }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(873546),
    i = n(793030),
    o = n(442837),
    s = n(704215),
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
    T = n(892001),
    O = n(899007),
    N = n(648052),
    P = n(867176),
    I = n(537006),
    w = n(483424),
    k = n(681837),
    R = n(638970),
    A = n(502762),
    D = n(530),
    Z = n(309494),
    L = n(4517),
    M = n(350207),
    U = n(420654),
    B = n(695346),
    F = n(158776),
    G = n(246946),
    H = n(572004),
    z = n(5192),
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
    er = n(671955),
    el = n(388032),
    ei = n(138005),
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
        ex = (0, S.ZP)(t.id, em),
        { analyticsLocations: eg } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT),
        ef = (0, _.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: em,
        }),
        { ref: eb, height: ev } = (0, d.ZP)(),
        { isHoveringOrFocusing: ej, isHovering: e_ } = (0, p.Z)(eb);
    r.useEffect(() => {
        null == ec || ec(eb.current);
    }, [eb, ec]),
        r.useEffect(() => (W.Z.setState({ isOpen: !0 }), () => W.Z.setState({ isOpen: !1 })), []);
    let ey = (0, o.e7)([F.Z], () => F.Z.getStatus(t.id)),
        eC = B.Cr.useSetting(),
        eS = (0, $.F)(eC),
        eE = (0, o.e7)([G.Z], () => G.Z.hidePersonalInformation),
        eT = (0, f.p)(),
        eO = B.Sb.useSetting(),
        eN = (0, $.I)(ey),
        eP = (0, q.g)(n),
        eI = (0, v.Z)({ analyticsLocations: eg }),
        ew = (0, V.I5)(t),
        ek = (0, h.p)({ location: "UserProfileAccountPopout" }),
        eR = (0, C.b)({ location: "UserProfileAccountPopout" }),
        eA = r.useRef(null),
        eD = r.useRef(null),
        eZ = r.useRef((0, W.Z)((e) => e.shouldRenderTenureLevelUp)),
        eL = r.useMemo(() => (0, x.Z)(), []),
        [eM, eU] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            eU(!1);
        }, 500);
    }, []);
    let eB = (e) => {
            null == n || n(),
                (0, T.openUserProfileModal)(
                    es(
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
        eH = eG ? [] : [s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [ez, eV] = (0, g.US)(eH),
        eW = ez === s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eK = r.useCallback(() => {
            eV(en.L.USER_DISMISS), n();
        }, [eV, n]),
        eq = r.useCallback(() => {
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
                className: ei.popoutContainer,
                "data-layer": "base",
                children: [
                    (0, a.jsx)(Q.Z, {
                        displayProfile: ex,
                        handleOpenUserProfileModal: eB,
                        height: ev,
                    }),
                    (0, a.jsxs)(A.Z, {
                        className: ei.themeContainer,
                        user: t,
                        displayProfile: ex,
                        themeType: er.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: eo.header,
                                children: [
                                    (0, a.jsx)(P.Z, {
                                        user: t,
                                        displayProfile: ex,
                                        themeType: er.l.POPOUT,
                                    }),
                                    (0, a.jsx)(O.Z, {
                                        user: t,
                                        displayProfile: ex,
                                        themeType: er.l.POPOUT,
                                        onOpenProfile: eh ? void 0 : eB,
                                    }),
                                    (0, a.jsx)(L.Z, {
                                        ref: eA,
                                        user: t,
                                        themeType: er.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: ek ? eL : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: ei.body,
                                style: { pointerEvents: eM ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(D.Z, {
                                        user: t,
                                        className: ei.username,
                                        nickname: z.ZP.getName(em, null, t),
                                        onOpenProfile: eh ? void 0 : eB,
                                        pronouns: null == ex ? void 0 : ex.pronouns,
                                        tags: (0, a.jsx)(N.Z, {
                                            displayProfile: ex,
                                            themeType: er.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != ed ? (e) => e === ed : void 0,
                                            shouldGlowTenureBadge: eZ.current,
                                        }),
                                        nicknameIcons: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(k.Z, { userId: t.id }),
                                                (0, a.jsx)(Z.Z, {
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
                                    eR
                                        ? (0, a.jsx)(R.Z, {
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
                                        className: ei.menus,
                                        children: [
                                            (0, a.jsx)(A.Z.Overlay, {
                                                className: ei.menuOverlay,
                                                children: (0, a.jsxs)(J.XE, {
                                                    children: [
                                                        (0, a.jsx)(J.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: ep
                                                                ? el.intl.string(el.t.Ip9nBS)
                                                                : el.intl.string(el.t.s5vZlQ),
                                                            icon: c.vdY,
                                                            onClick: eq,
                                                            renderSubmenu: eY
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(J.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": el.intl.string(el.t.szTA8E),
                                                                          onClose: t,
                                                                          children: eJ,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: eW
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: el.intl.string(el.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: eD,
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
                                                                (eT || ey === et.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: l.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(J.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: ei.statusPickerModalMenu,
                                                                          "aria-label": el.intl.string(el.t.E13trI),
                                                                          onClose: t,
                                                                          children: eN,
                                                                      });
                                                                  },
                                                            onClick: l.tq
                                                                ? () => {
                                                                      n(),
                                                                          (0, c.ZDy)(
                                                                              () =>
                                                                                  new Promise((e) =>
                                                                                      e((e) => {
                                                                                          var t,
                                                                                              n,
                                                                                              { onClose: r } = e,
                                                                                              l = (function (e, t) {
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
                                                                                                              l =
                                                                                                                  Object.keys(
                                                                                                                      e,
                                                                                                                  );
                                                                                                          for (
                                                                                                              a = 0;
                                                                                                              a <
                                                                                                              l.length;
                                                                                                              a++
                                                                                                          )
                                                                                                              (n =
                                                                                                                  l[a]),
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
                                                                                                      var l =
                                                                                                          Object.getOwnPropertySymbols(
                                                                                                              e,
                                                                                                          );
                                                                                                      for (
                                                                                                          a = 0;
                                                                                                          a < l.length;
                                                                                                          a++
                                                                                                      )
                                                                                                          (n = l[a]),
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
                                                                                              i.IX,
                                                                                              ((t = es(
                                                                                                  { onClose: r },
                                                                                                  l,
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
                                            (0, a.jsx)(A.Z.Overlay, {
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
                                                                    children: eP,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            H.wS &&
                                                            eO &&
                                                            (0, a.jsx)(J.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: el.intl.string(el.t["/AXYnE"]),
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
                            (null == ex ? void 0 : ex.profileEffect) != null &&
                                !eZ.current &&
                                (0, a.jsx)(j.Z, {
                                    skuId: ex.profileEffect.skuId,
                                    isHovering: e_,
                                }),
                            !eY && eX
                                ? (0, a.jsx)(Y.Z, {
                                      targetElementRef: eD,
                                      onClose: n,
                                  })
                                : null,
                        ],
                    }),
                    (0, a.jsx)(b.Z, {}),
                ],
            }),
        }),
    });
}
