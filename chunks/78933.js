n.d(t, { Z: () => ec }), n(388685);
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
    N = n(483517),
    R = n(483424),
    P = n(681837),
    w = n(638970),
    D = n(502762),
    x = n(530),
    L = n(309494),
    j = n(4517),
    k = n(252748),
    M = n(420654),
    U = n(785184),
    G = n(695346),
    B = n(158776),
    Z = n(246946),
    F = n(572004),
    V = n(5192),
    H = n(74538),
    Y = n(7093),
    W = n(474376),
    K = n(431282),
    z = n(213928),
    q = n(587243),
    X = n(383832),
    Q = n(981631),
    J = n(228168),
    $ = n(671955),
    ee = n(388032),
    et = n(54482),
    en = n(116649);
function er(e, t, n) {
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
function ei(e) {
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
                er(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
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
function eo(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ea(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function es(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = el(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function el(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function ec(e) {
    let { currentUser: t, onClose: n, setPopoutRef: er, highlightBadge: ea, openedAt: el } = e,
        ec = __OVERLAY__,
        eu = (0, v.ZP)(t.id),
        { analyticsLocations: ed } = (0, f.ZP)(d.Z.USER_PROFILE_ACCOUNT_POPOUT),
        ef = (0, b.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
        }),
        { ref: e_ } = (0, c.ZP)(),
        ep = (0, u.Z)(e_);
    i.useEffect(() => {
        null == er || er(e_.current);
    }, [e_, er]),
        i.useEffect(() => (Y.Z.setState({ isOpen: !0 }), () => Y.Z.setState({ isOpen: !1 })), []);
    let eh = (0, o.e7)([B.Z], () => B.Z.getStatus(t.id)),
        em = G.Cr.useSetting(),
        eg = (0, q.F)(em),
        { expiringStatusProfileFeedback: eE } = h.Y.useExperiment(
            { location: "UserProfileAccountPopout" },
            { autoTrackExposure: !1 },
        ),
        eb = (0, o.e7)([Z.Z], () => Z.Z.hidePersonalInformation),
        ey = (0, m.p)(),
        eO = G.Sb.useSetting(),
        ev = (0, q.I)(eh),
        eI = (0, W.g)(n),
        eT = (0, g.Z)({ analyticsLocations: ed }),
        eS = (0, H.I5)(t),
        eA = (0, _.p)({ location: "UserProfileAccountPopout" }),
        eC = (0, O.b)({ location: "UserProfileAccountPopout" }),
        eN = i.useRef(null),
        eR = i.useRef((0, Y.Z)((e) => e.shouldRenderTenureLevelUp)),
        eP = i.useMemo(() => (0, p.Z)(), []),
        [ew, eD] = i.useState(!0);
    i.useEffect(() => {
        setTimeout(() => {
            eD(!1);
        }, 500);
    }, []);
    let ex = (e) => {
            null == n || n(),
                (0, I.openUserProfileModal)(
                    ei(
                        {
                            customStatusPrompt: eP,
                            sourceAnalyticsLocations: ed,
                        },
                        ef,
                        e,
                    ),
                );
        },
        eL = (0, y.P)({ location: "UserProfileAccountPopout" }),
        ej = (null == eu ? void 0 : eu.widgets) != null && eu.widgets.length > 0,
        ek = eL && ej;
    return (0, r.jsx)(f.Gt, {
        value: ed,
        children: (0, r.jsx)(b.Mt, {
            value: ef,
            openedAt: el,
            fetchStartedAt: null == eu ? void 0 : eu.fetchStartedAt,
            fetchEndedAt: null == eu ? void 0 : eu.fetchEndedAt,
            isLoaded: null == eu ? void 0 : eu.isLoaded,
            children: (0, r.jsxs)(l.VqE, {
                ref: e_,
                "aria-label": t.username,
                children: [
                    (0, r.jsxs)(D.Z, {
                        className: et.themeContainer,
                        user: t,
                        displayProfile: eu,
                        themeType: $.l.POPOUT,
                        children: [
                            (0, r.jsxs)("div", {
                                className: en.header,
                                children: [
                                    (0, r.jsx)(A.Z, {
                                        user: t,
                                        displayProfile: eu,
                                        themeType: $.l.POPOUT,
                                    }),
                                    (0, r.jsx)(T.Z, {
                                        user: t,
                                        displayProfile: eu,
                                        themeType: $.l.POPOUT,
                                        onOpenProfile: ec ? void 0 : ex,
                                    }),
                                    (0, r.jsx)(j.Z, {
                                        ref: eN,
                                        user: t,
                                        themeType: $.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eA ? eP : null,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(l.Ttm, {
                                className: et.body,
                                style: { pointerEvents: ew ? "none" : void 0 },
                                children: [
                                    (0, r.jsx)(x.Z, {
                                        user: t,
                                        className: et.username,
                                        nickname: V.ZP.getName(null, null, t),
                                        onOpenProfile: ec ? void 0 : ex,
                                        pronouns: null == eu ? void 0 : eu.pronouns,
                                        tags: (0, r.jsx)(S.Z, {
                                            displayProfile: eu,
                                            themeType: $.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != ea ? (e) => e === ea : void 0,
                                            shouldGlowTenureBadge: eR.current,
                                        }),
                                        nicknameIcons: (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(P.Z, { userId: t.id }),
                                                (0, r.jsx)(L.Z, {
                                                    user: t,
                                                    isHovering: ep,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(M.Z, {
                                        user: t,
                                        bio: null == eu ? void 0 : eu.bio,
                                        hidePersonalInformation: eb,
                                        onClose: n,
                                    }),
                                    ek &&
                                        (0, r.jsx)(k.Z, {
                                            widgets: eu.widgets,
                                            onClick: () => {
                                                n(), ex({ section: J.oh.WIDGETS });
                                            },
                                        }),
                                    (0, r.jsx)(C.Z, {
                                        isPremiumUser: eS,
                                        onInteraction: n,
                                    }),
                                    eC
                                        ? (0, r.jsx)(w.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: ex,
                                              onClose: n,
                                          })
                                        : (0, r.jsx)(R.Z, {
                                              user: t,
                                              currentUser: t,
                                              onClose: n,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: et.menus,
                                        children: [
                                            (0, r.jsx)(D.Z.Overlay, {
                                                className: et.menuOverlay,
                                                children: (0, r.jsxs)(K.XE, {
                                                    id: "profile-".concat(t.id),
                                                    children: [
                                                        (0, r.jsx)(K.V4, {
                                                            id: "edit-profile",
                                                            action: "EDIT_PROFILE",
                                                            label: ee.intl.string(ee.t.s5vZlZ),
                                                            icon: l.vdY,
                                                            onClick: () => {
                                                                eT(), n();
                                                            },
                                                        }),
                                                        (0, r.jsx)(N.Z, { className: et.menuDivider }),
                                                        (0, r.jsx)(K.V4, {
                                                            id: "set-status",
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, r.jsx)(z.Z, {}),
                                                            sublabel:
                                                                eE &&
                                                                null != eg &&
                                                                (0, r.jsx)(l.Text, {
                                                                    color: "currentColor",
                                                                    variant: "text-xs/medium",
                                                                    children: eg,
                                                                }),
                                                            icon: () =>
                                                                (0, r.jsx)(l.qbd, {
                                                                    status: eh,
                                                                    size: 12,
                                                                }),
                                                            hint:
                                                                (ey || eh === Q.Skl.DND) &&
                                                                (0, r.jsx)(l.owu, { size: "xxs" }),
                                                            renderSubmenu: a.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, r.jsx)(K.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: et.statusPickerModalMenu,
                                                                          "aria-label": ee.intl.string(ee.t.E13trK),
                                                                          onClose: t,
                                                                          children: ev,
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
                                                                                              n = es(e, ["onClose"]);
                                                                                          return (0, r.jsx)(
                                                                                              s.I,
                                                                                              eo(
                                                                                                  ei({ onClose: t }, n),
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          ee.intl.string(
                                                                                                              ee.t[
                                                                                                                  "3Uj+2t"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      r.jsx)(l.v2r, {
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              ee.intl.string(
                                                                                                                  ee.t
                                                                                                                      .E13trK,
                                                                                                              ),
                                                                                                          className:
                                                                                                              et.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: t,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: ev,
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
                                            (0, r.jsx)(D.Z.Overlay, {
                                                className: et.menuOverlay,
                                                children: (0, r.jsxs)(K.XE, {
                                                    id: "account-".concat(t.id),
                                                    children: [
                                                        (0, r.jsx)(K.V4, {
                                                            id: "switch-accounts",
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: l.lMe,
                                                            label: ee.intl.string(ee.t.oMNyYG),
                                                            onClick: () => {
                                                                n(), (0, X.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, r.jsx)(K.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": ee.intl.string(ee.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: eI,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            F.wS &&
                                                            eO &&
                                                            (0, r.jsxs)(r.Fragment, {
                                                                children: [
                                                                    (0, r.jsx)(N.Z, { className: et.menuDivider }),
                                                                    (0, r.jsx)(K.V4, {
                                                                        id: "copy-user-id",
                                                                        action: "COPY_USER_ID",
                                                                        icon: l.VuL,
                                                                        label: ee.intl.string(ee.t["/AXYnJ"]),
                                                                        onClick: () => {
                                                                            (0, F.JG)(t.id), n();
                                                                        },
                                                                    }),
                                                                ],
                                                            }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (null == eu ? void 0 : eu.profileEffect) != null &&
                                !eR.current &&
                                (0, r.jsx)(E.Z, {
                                    profileEffectId: eu.profileEffect.id,
                                    isHovering: ep,
                                }),
                        ],
                    }),
                    (0, r.jsx)(U.Z, {}),
                ],
            }),
        }),
    });
}
