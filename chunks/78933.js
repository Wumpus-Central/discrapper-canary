n.d(t, { Z: () => ed }), n(388685);
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
    $ = n(480898),
    ee = n(587243),
    et = n(383832),
    en = n(981631),
    ea = n(921944),
    er = n(228168),
    ei = n(671955),
    el = n(388032),
    eo = n(54482),
    es = n(116649);
function ec(e) {
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
function ed(e) {
    let {
            currentUser: t,
            onClose: n,
            setPopoutRef: ed,
            highlightBadge: eu,
            openedAt: em,
            guildId: ep,
            guildProfileEnabled: eh,
        } = e,
        ex = __OVERLAY__,
        ef = (0, E.ZP)(t.id, ep),
        { analyticsLocations: eg } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT),
        eb = (0, y.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
            guildId: ep,
        }),
        { ref: ev, height: ej } = (0, d.ZP)(),
        { isHoveringOrFocusing: e_, isHovering: ey } = (0, p.Z)(ev);
    r.useEffect(() => {
        null == ed || ed(ev.current);
    }, [ev, ed]),
        r.useEffect(() => (K.Z.setState({ isOpen: !0 }), () => K.Z.setState({ isOpen: !1 })), []);
    let eC = (0, o.e7)([G.Z], () => G.Z.getStatus(t.id)),
        eS = B.Cr.useSetting(),
        eE = (0, ee.F)(eS),
        { expiringStatusProfileFeedback: eT } = g.Y.useExperiment(
            { location: "UserProfileAccountPopout" },
            { autoTrackExposure: !1 },
        ),
        eO = (0, o.e7)([z.Z], () => z.Z.hidePersonalInformation),
        eN = (0, b.p)(),
        eP = B.Sb.useSetting(),
        eI = (0, ee.I)(eC),
        ew = (0, Y.g)(n),
        ek = (0, j.Z)({ analyticsLocations: eg }),
        eR = (0, W.I5)(t),
        eA = (0, h.p)({ location: "UserProfileAccountPopout" }),
        eD = (0, S.b)({ location: "UserProfileAccountPopout" }),
        eZ = r.useRef(null),
        eM = r.useRef(null),
        eL = r.useRef((0, K.Z)((e) => e.shouldRenderTenureLevelUp)),
        eU = r.useMemo(() => (0, x.Z)(), []),
        [eF, eB] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            eB(!1);
        }, 500);
    }, []);
    let eG = (e) => {
            null == n || n(),
                (0, O.openUserProfileModal)(
                    ec(
                        {
                            customStatusPrompt: eU,
                            sourceAnalyticsLocations: eg,
                        },
                        eb,
                        e,
                    ),
                );
        },
        ez = (0, T.Z)({ location: "UserProfileAccountPopout" }),
        eV = (null == ef ? void 0 : ef.widgets) != null && ef.widgets.length > 0,
        eH = eV ? [] : [s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eW, eK] = (0, f.US)(eH),
        eq = eW === s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE,
        eY = r.useCallback(() => {
            eK(ea.L.USER_DISMISS), n();
        }, [eK, n]),
        eJ = r.useCallback(() => {
            (eh && null != ep) || (ek(), eY());
        }, [ek, eY, eh, ep]),
        eX = eh && null != ep,
        eQ = (0, q.K)(ep, eg, eq, n, eY),
        e$ = (0, C.k)({ location: "UserProfileAccountPopout" });
    return (0, a.jsx)(m.Gt, {
        value: eg,
        children: (0, a.jsx)(y.Mt, {
            value: eb,
            openedAt: em,
            fetchStartedAt: null == ef ? void 0 : ef.fetchStartedAt,
            fetchEndedAt: null == ef ? void 0 : ef.fetchEndedAt,
            isLoaded: null == ef ? void 0 : ef.isLoaded,
            children: (0, a.jsxs)(c.VqE, {
                ref: ev,
                "aria-label": t.username,
                className: eo.popoutContainer,
                "data-layer": "base",
                children: [
                    (0, a.jsx)($.Z, {
                        displayProfile: ef,
                        handleOpenUserProfileModal: eG,
                        height: ej,
                    }),
                    (0, a.jsxs)(D.Z, {
                        className: eo.themeContainer,
                        user: t,
                        displayProfile: ef,
                        themeType: ei.l.POPOUT,
                        children: [
                            (0, a.jsxs)("div", {
                                className: es.header,
                                children: [
                                    (0, a.jsx)(I.Z, {
                                        user: t,
                                        displayProfile: ef,
                                        themeType: ei.l.POPOUT,
                                    }),
                                    (0, a.jsx)(N.Z, {
                                        user: t,
                                        displayProfile: ef,
                                        themeType: ei.l.POPOUT,
                                        onOpenProfile: ex ? void 0 : eG,
                                    }),
                                    (0, a.jsx)(L.Z, {
                                        ref: eZ,
                                        user: t,
                                        themeType: ei.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eA ? eU : null,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Ttm, {
                                className: eo.body,
                                style: { pointerEvents: eF ? "none" : void 0 },
                                children: [
                                    (0, a.jsx)(Z.Z, {
                                        user: t,
                                        className: eo.username,
                                        nickname: H.ZP.getName(ep, null, t),
                                        onOpenProfile: ex ? void 0 : eG,
                                        pronouns: null == ef ? void 0 : ef.pronouns,
                                        tags: (0, a.jsx)(P.Z, {
                                            displayProfile: ef,
                                            themeType: ei.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != eu ? (e) => e === eu : void 0,
                                            shouldGlowTenureBadge: eL.current,
                                        }),
                                        nicknameIcons: (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(R.Z, { userId: t.id }),
                                                (0, a.jsx)(M.Z, {
                                                    user: t,
                                                    isVisible: e_,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, a.jsx)(F.Z, {
                                        user: t,
                                        bio: null == ef ? void 0 : ef.bio,
                                        hidePersonalInformation: eO,
                                        onClose: n,
                                    }),
                                    ez &&
                                        eV &&
                                        (0, a.jsx)(U.Z, {
                                            widgets: ef.widgets,
                                            onClick: () => {
                                                n(), eG({ section: er.oh.WIDGETS });
                                            },
                                        }),
                                    (0, a.jsx)(w.Z, {
                                        isPremiumUser: eR,
                                        onInteraction: n,
                                    }),
                                    eD
                                        ? (0, a.jsx)(A.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: eG,
                                              onClose: n,
                                          })
                                        : (0, a.jsx)(k.Z, {
                                              user: t,
                                              currentUser: t,
                                              onClose: n,
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: eo.menus,
                                        children: [
                                            (0, a.jsx)(D.Z.Overlay, {
                                                className: eo.menuOverlay,
                                                children: (0, a.jsxs)(X.XE, {
                                                    children: [
                                                        (0, a.jsx)(X.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: eh
                                                                ? el.intl.string(el.t.Ip9nBS)
                                                                : el.intl.string(el.t.s5vZlQ),
                                                            icon: c.vdY,
                                                            onClick: eJ,
                                                            renderSubmenu: eX
                                                                ? (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(X.gp, {
                                                                          navId: "edit-profile-submenu",
                                                                          "aria-label": el.intl.string(el.t.szTA8E),
                                                                          onClose: t,
                                                                          children: eQ,
                                                                      });
                                                                  }
                                                                : void 0,
                                                            trailing: eq
                                                                ? (0, a.jsx)(c.IGR, {
                                                                      text: el.intl.string(el.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                            ref: eM,
                                                        }),
                                                        (0, a.jsx)(X.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, a.jsx)(Q.Z, {}),
                                                            sublabel: eT && null != eE && eE,
                                                            icon: () =>
                                                                (0, a.jsx)(c.qbd, {
                                                                    status: eC,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (eN || eC === en.Skl.DND) &&
                                                                (0, a.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: i.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, a.jsx)(X.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: eo.statusPickerModalMenu,
                                                                          "aria-label": el.intl.string(el.t.E13trI),
                                                                          onClose: t,
                                                                          children: eI,
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
                                                                                              ((t = ec(
                                                                                                  { onClose: r },
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
                                                                                                              eo.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: r,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: eI,
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
                                                className: eo.menuOverlay,
                                                children: (0, a.jsxs)(X.XE, {
                                                    children: [
                                                        (0, a.jsx)(X.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: el.intl.string(el.t.oMNyYN),
                                                            onClick: () => {
                                                                n(), (0, et.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, a.jsx)(X.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": el.intl.string(el.t.wFhVqL),
                                                                    onClose: t,
                                                                    children: ew,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            V.wS &&
                                                            eP &&
                                                            (0, a.jsx)(X.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: el.intl.string(el.t["/AXYnE"]),
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
                            (null == ef ? void 0 : ef.profileEffect) != null &&
                                !eL.current &&
                                (0, a.jsx)(_.Z, {
                                    skuId: ef.profileEffect.skuId,
                                    isHovering: ey,
                                }),
                            !eX && e$
                                ? (0, a.jsx)(J.Z, {
                                      targetElementRef: eM,
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
