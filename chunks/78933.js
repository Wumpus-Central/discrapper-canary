n.d(t, { Z: () => el }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(873546),
    o = n(442837),
    s = n(257465),
    l = n(481060),
    c = n(393238),
    u = n(727637),
    d = n(100527),
    f = n(906732),
    _ = n(368326),
    p = n(429467),
    h = n(440051),
    m = n(734934),
    g = n(300284),
    E = n(680295),
    b = n(785717),
    y = n(461133),
    O = n(209698),
    v = n(687158),
    I = n(892001),
    T = n(899007),
    S = n(648052),
    A = n(867176),
    C = n(537006),
    N = n(483424),
    R = n(681837),
    P = n(638970),
    w = n(502762),
    D = n(530),
    x = n(309494),
    L = n(4517),
    j = n(252748),
    M = n(420654),
    k = n(785184),
    U = n(695346),
    G = n(158776),
    B = n(246946),
    Z = n(572004),
    F = n(5192),
    V = n(74538),
    H = n(7093),
    Y = n(474376),
    W = n(431282),
    K = n(213928),
    z = n(587243),
    q = n(383832),
    X = n(981631),
    Q = n(228168),
    J = n(671955),
    $ = n(388032),
    ee = n(54482),
    et = n(116649);
function en(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                en(e, t, n[t]);
            });
    }
    return e;
}
function ei(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ea(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ei(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eo(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = es(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function es(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function el(e) {
    let { currentUser: t, onClose: n, setPopoutRef: en, highlightBadge: ei, openedAt: es } = e,
        el = __OVERLAY__,
        ec = (0, v.ZP)(t.id),
        { analyticsLocations: eu } = (0, f.ZP)(d.Z.USER_PROFILE_ACCOUNT_POPOUT),
        ed = (0, b.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
        }),
        { ref: ef } = (0, c.ZP)(),
        e_ = (0, u.Z)(ef);
    i.useEffect(() => {
        null == en || en(ef.current);
    }, [ef, en]),
        i.useEffect(() => (H.Z.setState({ isOpen: !0 }), () => H.Z.setState({ isOpen: !1 })), []);
    let ep = (0, o.e7)([G.Z], () => G.Z.getStatus(t.id)),
        eh = U.Cr.useSetting(),
        em = (0, z.F)(eh),
        { expiringStatusProfileFeedback: eg } = h.Y.useExperiment(
            { location: "UserProfileAccountPopout" },
            { autoTrackExposure: !1 },
        ),
        eE = (0, o.e7)([B.Z], () => B.Z.hidePersonalInformation),
        eb = (0, m.p)(),
        ey = U.Sb.useSetting(),
        eO = (0, z.I)(ep),
        ev = (0, Y.g)(n),
        eI = (0, g.Z)({ analyticsLocations: eu }),
        eT = (0, V.I5)(t),
        eS = (0, _.p)({ location: "UserProfileAccountPopout" }),
        eA = (0, O.b)({ location: "UserProfileAccountPopout" }),
        eC = i.useRef(null),
        eN = i.useRef((0, H.Z)((e) => e.shouldRenderTenureLevelUp)),
        eR = i.useMemo(() => (0, p.Z)(), []),
        [eP, ew] = i.useState(!0);
    i.useEffect(() => {
        setTimeout(() => {
            ew(!1);
        }, 500);
    }, []);
    let eD = (e) => {
            null == n || n(),
                (0, I.openUserProfileModal)(
                    er(
                        {
                            customStatusPrompt: eR,
                            sourceAnalyticsLocations: eu,
                        },
                        ed,
                        e,
                    ),
                );
        },
        ex = (0, y.P)({ location: "UserProfileAccountPopout" }),
        eL = (null == ec ? void 0 : ec.widgets) != null && ec.widgets.length > 0,
        ej = ex && eL;
    return (0, r.jsx)(f.Gt, {
        value: eu,
        children: (0, r.jsx)(b.Mt, {
            value: ed,
            openedAt: es,
            fetchStartedAt: null == ec ? void 0 : ec.fetchStartedAt,
            fetchEndedAt: null == ec ? void 0 : ec.fetchEndedAt,
            isLoaded: null == ec ? void 0 : ec.isLoaded,
            children: (0, r.jsxs)(l.VqE, {
                ref: ef,
                "aria-label": t.username,
                children: [
                    (0, r.jsxs)(w.Z, {
                        className: ee.themeContainer,
                        user: t,
                        displayProfile: ec,
                        themeType: J.l.POPOUT,
                        children: [
                            (0, r.jsxs)("div", {
                                className: et.header,
                                children: [
                                    (0, r.jsx)(A.Z, {
                                        user: t,
                                        displayProfile: ec,
                                        themeType: J.l.POPOUT,
                                    }),
                                    (0, r.jsx)(T.Z, {
                                        user: t,
                                        displayProfile: ec,
                                        themeType: J.l.POPOUT,
                                        onOpenProfile: el ? void 0 : eD,
                                    }),
                                    (0, r.jsx)(L.Z, {
                                        ref: eC,
                                        user: t,
                                        themeType: J.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eS ? eR : null,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(l.Ttm, {
                                className: ee.body,
                                style: { pointerEvents: eP ? "none" : void 0 },
                                children: [
                                    (0, r.jsx)(D.Z, {
                                        user: t,
                                        className: ee.username,
                                        nickname: F.ZP.getName(null, null, t),
                                        onOpenProfile: el ? void 0 : eD,
                                        pronouns: null == ec ? void 0 : ec.pronouns,
                                        tags: (0, r.jsx)(S.Z, {
                                            displayProfile: ec,
                                            themeType: J.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != ei ? (e) => e === ei : void 0,
                                            shouldGlowTenureBadge: eN.current,
                                        }),
                                        nicknameIcons: (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(R.Z, { userId: t.id }),
                                                (0, r.jsx)(x.Z, {
                                                    user: t,
                                                    isHovering: e_,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(M.Z, {
                                        user: t,
                                        bio: null == ec ? void 0 : ec.bio,
                                        hidePersonalInformation: eE,
                                        onClose: n,
                                    }),
                                    ej &&
                                        (0, r.jsx)(j.Z, {
                                            widgets: ec.gameWidgets,
                                            onClick: () => {
                                                n(), eD({ section: Q.oh.WIDGETS });
                                            },
                                        }),
                                    (0, r.jsx)(C.Z, {
                                        isPremiumUser: eT,
                                        onInteraction: n,
                                    }),
                                    eA
                                        ? (0, r.jsx)(P.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: eD,
                                              onClose: n,
                                          })
                                        : (0, r.jsx)(N.Z, {
                                              user: t,
                                              currentUser: t,
                                              onClose: n,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: ee.menus,
                                        children: [
                                            (0, r.jsx)(w.Z.Overlay, {
                                                className: ee.menuOverlay,
                                                children: (0, r.jsxs)(W.XE, {
                                                    children: [
                                                        (0, r.jsx)(W.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: $.intl.string($.t.s5vZlZ),
                                                            icon: l.vdY,
                                                            onClick: () => {
                                                                eI(), n();
                                                            },
                                                        }),
                                                        (0, r.jsx)(W.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, r.jsx)(K.Z, {}),
                                                            sublabel: eg && null != em && em,
                                                            icon: () =>
                                                                (0, r.jsx)(l.qbd, {
                                                                    status: ep,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (eb || ep === X.Skl.DND) &&
                                                                (0, r.jsx)(l.owu, { size: "xxs" }),
                                                            renderSubmenu: a.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, r.jsx)(W.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: ee.statusPickerModalMenu,
                                                                          "aria-label": $.intl.string($.t.E13trK),
                                                                          onClose: t,
                                                                          children: eO,
                                                                      });
                                                                  },
                                                            onClick: a.tq
                                                                ? () => {
                                                                      n(),
                                                                          (0, l.ZDy)(
                                                                              () =>
                                                                                  new Promise((e) =>
                                                                                      e((e) => {
                                                                                          var { onClose: t } = e,
                                                                                              n = eo(e, ["onClose"]);
                                                                                          return (0, r.jsx)(
                                                                                              s.I,
                                                                                              ea(
                                                                                                  er({ onClose: t }, n),
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          $.intl.string(
                                                                                                              $.t[
                                                                                                                  "3Uj+2t"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      r.jsx)(l.v2r, {
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              $.intl.string(
                                                                                                                  $.t
                                                                                                                      .E13trK,
                                                                                                              ),
                                                                                                          className:
                                                                                                              ee.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: t,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: eO,
                                                                                                      }),
                                                                                                  },
                                                                                              ),
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
                                            (0, r.jsx)(w.Z.Overlay, {
                                                className: ee.menuOverlay,
                                                children: (0, r.jsxs)(W.XE, {
                                                    children: [
                                                        (0, r.jsx)(W.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: l.lMe,
                                                            label: $.intl.string($.t.oMNyYG),
                                                            onClick: () => {
                                                                n(), (0, q.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, r.jsx)(W.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": $.intl.string($.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: ev,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            Z.wS &&
                                                            ey &&
                                                            (0, r.jsx)(W.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: l.VuL,
                                                                label: $.intl.string($.t["/AXYnJ"]),
                                                                onClick: () => {
                                                                    (0, Z.JG)(t.id), n();
                                                                },
                                                            }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (null == ec ? void 0 : ec.profileEffect) != null &&
                                !eN.current &&
                                (0, r.jsx)(E.Z, {
                                    profileEffectId: ec.profileEffect.id,
                                    isHovering: e_,
                                }),
                        ],
                    }),
                    (0, r.jsx)(k.Z, {}),
                ],
            }),
        }),
    });
}
