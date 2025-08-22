n.d(t, { Z: () => ed }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(873546),
    o = n(442837),
    s = n(704215),
    l = n(257465),
    c = n(481060),
    u = n(393238),
    d = n(727637),
    f = n(100527),
    _ = n(906732),
    p = n(359588),
    h = n(368326),
    m = n(429467),
    g = n(526031),
    E = n(243778),
    b = n(440051),
    y = n(734934),
    O = n(300284),
    v = n(680295),
    I = n(785717),
    T = n(209698),
    S = n(687158),
    A = n(892001),
    C = n(899007),
    N = n(648052),
    R = n(867176),
    P = n(537006),
    w = n(483517),
    D = n(483424),
    x = n(681837),
    L = n(638970),
    j = n(502762),
    M = n(530),
    k = n(309494),
    U = n(4517),
    G = n(420654),
    B = n(785184),
    Z = n(695346),
    V = n(622562),
    F = n(158776),
    H = n(246946),
    Y = n(572004),
    W = n(5192),
    K = n(74538),
    z = n(7093),
    q = n(474376),
    X = n(431282),
    Q = n(213928),
    J = n(587243),
    $ = n(383832),
    ee = n(981631),
    et = n(671955),
    en = n(388032),
    er = n(54482),
    ei = n(116649);
function ea(e, t, n) {
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
function eo(e) {
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
                ea(e, t, n[t]);
            });
    }
    return e;
}
function es(e, t) {
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
function el(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : es(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ec(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eu(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eu(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function ed(e) {
    let { currentUser: t, onClose: n, setPopoutRef: ea, highlightBadge: es, openedAt: eu } = e,
        ed = __OVERLAY__,
        ef = (0, S.ZP)(t.id),
        { analyticsLocations: e_ } = (0, _.ZP)(f.Z.USER_PROFILE_ACCOUNT_POPOUT),
        ep = (0, I.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
        }),
        { ref: eh } = (0, u.ZP)(),
        em = (0, d.Z)(eh);
    i.useEffect(() => {
        null == ea || ea(eh.current);
    }, [eh, ea]),
        i.useEffect(() => (z.Z.setState({ isOpen: !0 }), () => z.Z.setState({ isOpen: !1 })), []);
    let eg = (0, o.e7)([F.Z], () => F.Z.getStatus(t.id)),
        eE = Z.Cr.useSetting(),
        eb = (0, J.F)(eE),
        { expiringStatusProfileFeedback: ey } = b.Y.useExperiment(
            { location: "UserProfileAccountPopout" },
            { autoTrackExposure: !1 },
        ),
        eO = (0, o.e7)([H.Z], () => H.Z.hidePersonalInformation),
        ev = (0, y.p)(),
        eI = Z.Sb.useSetting(),
        eT = (0, J.I)(eg),
        eS = (0, q.g)(n),
        eA = (0, O.Z)({ analyticsLocations: e_ }),
        eC = (0, K.I5)(t),
        eN = (0, h.p)({ location: "UserProfileAccountPopout" }),
        eR = (0, T.b)({ location: "UserProfileAccountPopout" }),
        eP = (0, p.Z)({ location: "UserProfileAccountPopout" }),
        ew = i.useRef(null),
        [eD, ex] = i.useState(String(Date.now()));
    (0, V.fu)({
        targetElementRef: ew,
        onGetElementDimensionsAndBoundingRect: (e) => {
            let { hasElementPositionChanged: t } = e;
            t && ex(String(Date.now()));
        },
    });
    let [eL, ej] = (0, E.US)(eP ? [s.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []),
        eM = eL === s.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        ek = i.useRef((0, z.Z)((e) => e.shouldRenderTenureLevelUp)),
        eU = i.useMemo(() => (0, m.Z)(), []),
        [eG, eB] = i.useState(!0);
    i.useEffect(() => {
        setTimeout(() => {
            eB(!1);
        }, 500);
    }, []);
    let eZ = (e) => {
        null == n || n(),
            (0, A.openUserProfileModal)(
                eo(
                    {
                        customStatusPrompt: eU,
                        sourceAnalyticsLocations: e_,
                    },
                    ep,
                    e,
                ),
            );
    };
    return (0, r.jsx)(_.Gt, {
        value: e_,
        children: (0, r.jsx)(I.Mt, {
            value: ep,
            openedAt: eu,
            fetchStartedAt: null == ef ? void 0 : ef.fetchStartedAt,
            fetchEndedAt: null == ef ? void 0 : ef.fetchEndedAt,
            isLoaded: null == ef ? void 0 : ef.isLoaded,
            children: (0, r.jsxs)(c.VqE, {
                ref: eh,
                "aria-label": t.username,
                children: [
                    (0, r.jsxs)(j.Z, {
                        className: er.themeContainer,
                        user: t,
                        displayProfile: ef,
                        themeType: et.l.POPOUT,
                        children: [
                            (0, r.jsxs)("div", {
                                className: ei.header,
                                children: [
                                    (0, r.jsx)(R.Z, {
                                        user: t,
                                        displayProfile: ef,
                                        themeType: et.l.POPOUT,
                                    }),
                                    (0, r.jsx)(C.Z, {
                                        user: t,
                                        displayProfile: ef,
                                        themeType: et.l.POPOUT,
                                        onOpenProfile: ed ? void 0 : eZ,
                                    }),
                                    eM
                                        ? (0, r.jsx)(g.Z, {
                                              positionKey: eD,
                                              onTryFeature: n,
                                              targetElementRef: ew,
                                              markAsDismissed: ej,
                                              children: () =>
                                                  (0, r.jsx)(U.Z, {
                                                      ref: ew,
                                                      location: "UserProfileAccountPopout",
                                                      user: t,
                                                      themeType: et.l.POPOUT,
                                                      onCloseProfile: n,
                                                      prompt: eU,
                                                  }),
                                          })
                                        : (0, r.jsx)(U.Z, {
                                              location: "UserProfileAccountPopout",
                                              user: t,
                                              themeType: et.l.POPOUT,
                                              onCloseProfile: n,
                                              prompt: eN ? eU : null,
                                          }),
                                ],
                            }),
                            (0, r.jsxs)(c.Ttm, {
                                className: er.body,
                                style: { pointerEvents: eG ? "none" : void 0 },
                                children: [
                                    (0, r.jsx)(M.Z, {
                                        user: t,
                                        className: er.username,
                                        nickname: W.ZP.getName(null, null, t),
                                        onOpenProfile: ed ? void 0 : eZ,
                                        pronouns: null == ef ? void 0 : ef.pronouns,
                                        tags: (0, r.jsx)(N.Z, {
                                            displayProfile: ef,
                                            themeType: et.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != es ? (e) => e === es : void 0,
                                            shouldGlowTenureBadge: ek.current,
                                        }),
                                        nicknameIcons: (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(x.Z, { userId: t.id }),
                                                (0, r.jsx)(k.Z, {
                                                    user: t,
                                                    isHovering: em,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(G.Z, {
                                        user: t,
                                        bio: null == ef ? void 0 : ef.bio,
                                        hidePersonalInformation: eO,
                                        onClose: n,
                                    }),
                                    (0, r.jsx)(P.Z, {
                                        isPremiumUser: eC,
                                        onInteraction: n,
                                    }),
                                    eR
                                        ? (0, r.jsx)(L.Z, {
                                              user: t,
                                              currentUser: t,
                                              displayProfile: ef,
                                              onOpenUserProfileModal: eZ,
                                              onClose: n,
                                          })
                                        : (0, r.jsx)(D.Z, {
                                              user: t,
                                              currentUser: t,
                                              displayProfile: ef,
                                              onClose: n,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: er.menus,
                                        children: [
                                            (0, r.jsx)(j.Z.Overlay, {
                                                className: er.menuOverlay,
                                                children: (0, r.jsxs)(X.XE, {
                                                    id: "profile-".concat(t.id),
                                                    children: [
                                                        (0, r.jsx)(X.V4, {
                                                            id: "edit-profile",
                                                            action: "EDIT_PROFILE",
                                                            label: en.intl.string(en.t.s5vZlZ),
                                                            icon: c.vdY,
                                                            onClick: () => {
                                                                eA(), n();
                                                            },
                                                        }),
                                                        (0, r.jsx)(w.Z, { className: er.menuDivider }),
                                                        (0, r.jsx)(X.V4, {
                                                            id: "set-status",
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, r.jsx)(Q.Z, {}),
                                                            sublabel:
                                                                ey &&
                                                                null != eb &&
                                                                (0, r.jsx)(c.Text, {
                                                                    color: "currentColor",
                                                                    variant: "text-xs/medium",
                                                                    children: eb,
                                                                }),
                                                            icon: () =>
                                                                (0, r.jsx)(c.qbd, {
                                                                    status: eg,
                                                                    size: 12,
                                                                }),
                                                            hint:
                                                                (ev || eg === ee.Skl.DND) &&
                                                                (0, r.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: a.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, r.jsx)(X.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: er.statusPickerModalMenu,
                                                                          "aria-label": en.intl.string(en.t.E13trK),
                                                                          onClose: t,
                                                                          children: eT,
                                                                      });
                                                                  },
                                                            onClick: a.tq
                                                                ? () => {
                                                                      n(),
                                                                          (0, c.ZDy)(
                                                                              () =>
                                                                                  new Promise((e) =>
                                                                                      e((e) => {
                                                                                          var { onClose: t } = e,
                                                                                              n = ec(e, ["onClose"]);
                                                                                          return (0, r.jsx)(
                                                                                              l.I,
                                                                                              el(
                                                                                                  eo({ onClose: t }, n),
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          en.intl.string(
                                                                                                              en.t[
                                                                                                                  "3Uj+2t"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      r.jsx)(c.v2r, {
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              en.intl.string(
                                                                                                                  en.t
                                                                                                                      .E13trK,
                                                                                                              ),
                                                                                                          className:
                                                                                                              er.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: t,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: eT,
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
                                            (0, r.jsx)(j.Z.Overlay, {
                                                className: er.menuOverlay,
                                                children: (0, r.jsxs)(X.XE, {
                                                    id: "account-".concat(t.id),
                                                    children: [
                                                        (0, r.jsx)(X.V4, {
                                                            id: "switch-accounts",
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: en.intl.string(en.t.oMNyYG),
                                                            onClick: () => {
                                                                n(), (0, $.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, r.jsx)(X.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": en.intl.string(en.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: eS,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            Y.wS &&
                                                            eI &&
                                                            (0, r.jsxs)(r.Fragment, {
                                                                children: [
                                                                    (0, r.jsx)(w.Z, { className: er.menuDivider }),
                                                                    (0, r.jsx)(X.V4, {
                                                                        id: "copy-user-id",
                                                                        action: "COPY_USER_ID",
                                                                        icon: c.VuL,
                                                                        label: en.intl.string(en.t["/AXYnJ"]),
                                                                        onClick: () => {
                                                                            (0, Y.JG)(t.id), n();
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
                            (null == ef ? void 0 : ef.profileEffect) != null &&
                                !ek.current &&
                                (0, r.jsx)(v.Z, {
                                    profileEffectId: ef.profileEffect.id,
                                    isHovering: em,
                                }),
                        ],
                    }),
                    (0, r.jsx)(B.Z, {}),
                ],
            }),
        }),
    });
}
