n.d(t, { Z: () => ec }), n(388685);
var a = n(951288),
    i = n(647438),
    r = n(873546),
    l = n(793030),
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
    T = n(892001),
    N = n(899007),
    O = n(648052),
    P = n(867176),
    I = n(537006),
    w = n(483424),
    k = n(681837),
    R = n(638970),
    A = n(502762),
    Z = n(530),
    D = n(309494),
    L = n(4517),
    M = n(350207),
    U = n(420654),
    F = n(695346),
    B = n(158776),
    G = n(246946),
    z = n(572004),
    V = n(5192),
    H = n(74538),
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
    ei = n(671955),
    er = n(388032),
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
        { analyticsLocations: eg } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT),
        ef = (0, _.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: em,
        }),
        { ref: eb, height: ev } = (0, d.ZP)(),
        { isHoveringOrFocusing: ej, isHovering: e_ } = (0, p.Z)(eb);
    i.useEffect(() => {
        null == ec || ec(eb.current);
    }, [eb, ec]),
        i.useEffect(() => (W.Z.setState({ isOpen: !0 }), () => W.Z.setState({ isOpen: !1 })), []);
    let ey = (0, s.e7)([B.Z], () => B.Z.getStatus(t.id)),
        eC = F.Cr.useSetting(),
        eS = (0, $.F)(eC),
        eE = (0, s.e7)([G.Z], () => G.Z.hidePersonalInformation),
        eT = (0, f.p)(),
        eN = F.Sb.useSetting(),
        eO = (0, $.I)(ey),
        eP = (0, q.g)(n),
        eI = (0, v.Z)({ analyticsLocations: eg }),
        ew = (0, H.I5)(t),
        ek = (0, h.p)({ location: "UserProfileAccountPopout" }),
        eR = (0, C.b)({ location: "UserProfileAccountPopout" }),
        eA = i.useRef(null),
        eZ = i.useRef(null),
        eD = i.useRef((0, W.Z)((e) => e.shouldRenderTenureLevelUp)),
        eL = i.useMemo(() => (0, x.Z)(), []),
        [eM, eU] = i.useState(!0);
    i.useEffect(() => {
        setTimeout(() => {
            eU(!1);
        }, 500);
    }, []);
    let eF = (e) => {
            null == n || n(),
                (0, T.openUserProfileModal)(
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
        eB = (0, E.Z)({ location: "UserProfileAccountPopout" }),
        eG = (null == ex ? void 0 : ex.widgets) != null && ex.widgets.length > 0,
        ez = eG ? [] : [o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eV, eH] = (0, g.US)(ez),
        eW = eV === o.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eK = i.useCallback(() => {
            eH(en.L.USER_DISMISS), n();
        }, [eH, n]),
        eq = i.useCallback(() => {
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
                className: el.popoutContainer,
                "data-layer": "base",
                children: [
                    (0, a.jsx)(Q.Z, {
                        displayProfile: ex,
                        handleOpenUserProfileModal: eF,
                        height: ev,
                    }),
                    (0, a.jsxs)(A.Z, {
                        className: el.themeContainer,
                        user: t,
                        displayProfile: ex,
                        themeType: ei.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: es.header,
                                children: [
                                    (0, a.jsx)(P.Z, {
                                        user: t,
                                        displayProfile: ex,
                                        themeType: ei.l.POPOUT,
                                    }),
                                    (0, a.jsx)(N.Z, {
                                        user: t,
                                        displayProfile: ex,
                                        themeType: ei.l.POPOUT,
                                        onOpenProfile: eh ? void 0 : eF,
                                    }),
                                    (0, a.jsx)(L.Z, {
                                        ref: eA,
                                        user: t,
                                        themeType: ei.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: ek ? eL : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: el.body,
                                style: { pointerEvents: eM ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(Z.Z, {
                                        user: t,
                                        className: el.username,
                                        nickname: V.ZP.getName(em, null, t),
                                        onOpenProfile: eh ? void 0 : eF,
                                        pronouns: null == ex ? void 0 : ex.pronouns,
                                        tags: (0, a.jsx)(O.Z, {
                                            displayProfile: ex,
                                            themeType: ei.l.POPOUT,
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
                                    eB &&
                                        eG &&
                                        (0, a.jsx)(M.Z, {
                                            widgets: ex.widgets,
                                            onClick: () => {
                                                n(), eF({ section: ea.oh.WIDGETS });
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
                                              onOpenUserProfileModal: eF,
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
                                            (0, a.jsx)(A.Z.Overlay, {
                                                className: el.menuOverlay,
                                                children: (0, a.jsxs)(J.XE, {
                                                    children: [
                                                        (0, a.jsx)(J.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: ep
                                                                ? er.intl.string(er.t.Ip9nBS)
                                                                : er.intl.string(er.t.s5vZlQ),
                                                            icon: c.vdY,
                                                            onClick: eq,
                                                            renderSubmenu: eY
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(J.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": er.intl.string(er.t.szTA8E),
                                                                          onClose: t,
                                                                          children: eJ,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: eW
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: er.intl.string(er.t.y2b7CA),
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
                                                                (eT || ey === et.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: r.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(J.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: el.statusPickerModalMenu,
                                                                          "aria-label": er.intl.string(er.t.E13trI),
                                                                          onClose: t,
                                                                          children: eO,
                                                                      });
                                                                  },
                                                            onClick: r.tq
                                                                ? () => {
                                                                      n(),
                                                                          (0, c.ZDy)(
                                                                              () =>
                                                                                  new Promise((e) =>
                                                                                      e((e) => {
                                                                                          var t,
                                                                                              n,
                                                                                              { onClose: i } = e,
                                                                                              r = (function (e, t) {
                                                                                                  if (null == e)
                                                                                                      return {};
                                                                                                  var n,
                                                                                                      a,
                                                                                                      i = (function (
                                                                                                          e,
                                                                                                          t,
                                                                                                      ) {
                                                                                                          if (null == e)
                                                                                                              return {};
                                                                                                          var n,
                                                                                                              a,
                                                                                                              i = {},
                                                                                                              r =
                                                                                                                  Object.keys(
                                                                                                                      e,
                                                                                                                  );
                                                                                                          for (
                                                                                                              a = 0;
                                                                                                              a <
                                                                                                              r.length;
                                                                                                              a++
                                                                                                          )
                                                                                                              (n =
                                                                                                                  r[a]),
                                                                                                                  t.indexOf(
                                                                                                                      n,
                                                                                                                  ) >=
                                                                                                                      0 ||
                                                                                                                      (i[
                                                                                                                          n
                                                                                                                      ] =
                                                                                                                          e[
                                                                                                                              n
                                                                                                                          ]);
                                                                                                          return i;
                                                                                                      })(e, t);
                                                                                                  if (
                                                                                                      Object.getOwnPropertySymbols
                                                                                                  ) {
                                                                                                      var r =
                                                                                                          Object.getOwnPropertySymbols(
                                                                                                              e,
                                                                                                          );
                                                                                                      for (
                                                                                                          a = 0;
                                                                                                          a < r.length;
                                                                                                          a++
                                                                                                      )
                                                                                                          (n = r[a]),
                                                                                                              !(
                                                                                                                  t.indexOf(
                                                                                                                      n,
                                                                                                                  ) >= 0
                                                                                                              ) &&
                                                                                                                  Object.prototype.propertyIsEnumerable.call(
                                                                                                                      e,
                                                                                                                      n,
                                                                                                                  ) &&
                                                                                                                  (i[
                                                                                                                      n
                                                                                                                  ] =
                                                                                                                      e[
                                                                                                                          n
                                                                                                                      ]);
                                                                                                  }
                                                                                                  return i;
                                                                                              })(e, ["onClose"]);
                                                                                          return (0, a.jsx)(
                                                                                              l.IX,
                                                                                              ((t = eo(
                                                                                                  { onClose: i },
                                                                                                  r,
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
                                                                                                              el.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: i,
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
                                            (0, a.jsx)(A.Z.Overlay, {
                                                className: el.menuOverlay,
                                                children: (0, a.jsxs)(J.XE, {
                                                    children: [
                                                        (0, a.jsx)(J.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: er.intl.string(er.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, ee.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(J.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": er.intl.string(er.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: eP,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            z.wS &&
                                                            eN &&
                                                            (0, a.jsx)(J.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: er.intl.string(er.t["/AXYnE"]),
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
