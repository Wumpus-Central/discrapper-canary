n.d(t, { Z: () => ep }), n(388685);
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
    T = n(461133),
    S = n(209698),
    A = n(687158),
    C = n(892001),
    N = n(899007),
    R = n(648052),
    P = n(867176),
    w = n(537006),
    D = n(483517),
    x = n(483424),
    L = n(681837),
    j = n(638970),
    M = n(502762),
    k = n(530),
    U = n(309494),
    G = n(4517),
    B = n(252748),
    Z = n(420654),
    F = n(785184),
    V = n(695346),
    H = n(622562),
    Y = n(158776),
    W = n(246946),
    K = n(572004),
    z = n(5192),
    q = n(74538),
    X = n(7093),
    Q = n(474376),
    J = n(431282),
    $ = n(213928),
    ee = n(587243),
    et = n(383832),
    en = n(981631),
    er = n(228168),
    ei = n(671955),
    ea = n(388032),
    eo = n(54482),
    es = n(116649);
function el(e, t, n) {
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
function ec(e) {
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
                el(e, t, n[t]);
            });
    }
    return e;
}
function eu(e, t) {
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
function ed(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eu(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ef(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = e_(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function e_(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function ep(e) {
    let { currentUser: t, onClose: n, setPopoutRef: el, highlightBadge: eu, openedAt: e_ } = e,
        ep = __OVERLAY__,
        eh = (0, A.ZP)(t.id),
        { analyticsLocations: em } = (0, _.ZP)(f.Z.USER_PROFILE_ACCOUNT_POPOUT),
        eg = (0, I.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
        }),
        { ref: eE } = (0, u.ZP)(),
        eb = (0, d.Z)(eE);
    i.useEffect(() => {
        null == el || el(eE.current);
    }, [eE, el]),
        i.useEffect(() => (X.Z.setState({ isOpen: !0 }), () => X.Z.setState({ isOpen: !1 })), []);
    let ey = (0, o.e7)([Y.Z], () => Y.Z.getStatus(t.id)),
        eO = V.Cr.useSetting(),
        ev = (0, ee.F)(eO),
        { expiringStatusProfileFeedback: eI } = b.Y.useExperiment(
            { location: "UserProfileAccountPopout" },
            { autoTrackExposure: !1 },
        ),
        eT = (0, o.e7)([W.Z], () => W.Z.hidePersonalInformation),
        eS = (0, y.p)(),
        eA = V.Sb.useSetting(),
        eC = (0, ee.I)(ey),
        eN = (0, Q.g)(n),
        eR = (0, O.Z)({ analyticsLocations: em }),
        eP = (0, q.I5)(t),
        ew = (0, h.p)({ location: "UserProfileAccountPopout" }),
        eD = (0, S.b)({ location: "UserProfileAccountPopout" }),
        ex = (0, p.Z)({ location: "UserProfileAccountPopout" }),
        eL = i.useRef(null),
        [ej, eM] = i.useState(String(Date.now()));
    (0, H.fu)({
        targetElementRef: eL,
        onGetElementDimensionsAndBoundingRect: (e) => {
            let { hasElementPositionChanged: t } = e;
            t && eM(String(Date.now()));
        },
    });
    let [ek, eU] = (0, E.US)(ex ? [s.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []),
        eG = ek === s.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        eB = i.useRef((0, X.Z)((e) => e.shouldRenderTenureLevelUp)),
        eZ = i.useMemo(() => (0, m.Z)(), []),
        [eF, eV] = i.useState(!0);
    i.useEffect(() => {
        setTimeout(() => {
            eV(!1);
        }, 500);
    }, []);
    let eH = (e) => {
            null == n || n(),
                (0, C.openUserProfileModal)(
                    ec(
                        {
                            customStatusPrompt: eZ,
                            sourceAnalyticsLocations: em,
                        },
                        eg,
                        e,
                    ),
                );
        },
        eY = (0, T.P)({ location: "UserProfileAccountPopout" }),
        eW = (null == eh ? void 0 : eh.widgets) != null && eh.widgets.length > 0,
        eK = eY && eW;
    return (0, r.jsx)(_.Gt, {
        value: em,
        children: (0, r.jsx)(I.Mt, {
            value: eg,
            openedAt: e_,
            fetchStartedAt: null == eh ? void 0 : eh.fetchStartedAt,
            fetchEndedAt: null == eh ? void 0 : eh.fetchEndedAt,
            isLoaded: null == eh ? void 0 : eh.isLoaded,
            children: (0, r.jsxs)(c.VqE, {
                ref: eE,
                "aria-label": t.username,
                children: [
                    (0, r.jsxs)(M.Z, {
                        className: eo.themeContainer,
                        user: t,
                        displayProfile: eh,
                        themeType: ei.l.POPOUT,
                        children: [
                            (0, r.jsxs)("div", {
                                className: es.header,
                                children: [
                                    (0, r.jsx)(P.Z, {
                                        user: t,
                                        displayProfile: eh,
                                        themeType: ei.l.POPOUT,
                                    }),
                                    (0, r.jsx)(N.Z, {
                                        user: t,
                                        displayProfile: eh,
                                        themeType: ei.l.POPOUT,
                                        onOpenProfile: ep ? void 0 : eH,
                                    }),
                                    eG
                                        ? (0, r.jsx)(g.Z, {
                                              positionKey: ej,
                                              onTryFeature: n,
                                              targetElementRef: eL,
                                              markAsDismissed: eU,
                                              children: () =>
                                                  (0, r.jsx)(G.Z, {
                                                      ref: eL,
                                                      user: t,
                                                      themeType: ei.l.POPOUT,
                                                      onCloseProfile: n,
                                                      prompt: eZ,
                                                  }),
                                          })
                                        : (0, r.jsx)(G.Z, {
                                              user: t,
                                              themeType: ei.l.POPOUT,
                                              onCloseProfile: n,
                                              prompt: ew ? eZ : null,
                                          }),
                                ],
                            }),
                            (0, r.jsxs)(c.Ttm, {
                                className: eo.body,
                                style: { pointerEvents: eF ? "none" : void 0 },
                                children: [
                                    (0, r.jsx)(k.Z, {
                                        user: t,
                                        className: eo.username,
                                        nickname: z.ZP.getName(null, null, t),
                                        onOpenProfile: ep ? void 0 : eH,
                                        pronouns: null == eh ? void 0 : eh.pronouns,
                                        tags: (0, r.jsx)(R.Z, {
                                            displayProfile: eh,
                                            themeType: ei.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != eu ? (e) => e === eu : void 0,
                                            shouldGlowTenureBadge: eB.current,
                                        }),
                                        nicknameIcons: (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(L.Z, { userId: t.id }),
                                                (0, r.jsx)(U.Z, {
                                                    user: t,
                                                    isHovering: eb,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(Z.Z, {
                                        user: t,
                                        bio: null == eh ? void 0 : eh.bio,
                                        hidePersonalInformation: eT,
                                        onClose: n,
                                    }),
                                    eK &&
                                        (0, r.jsx)(B.Z, {
                                            widgets: eh.widgets,
                                            onClick: () => {
                                                n(), eH({ section: er.oh.WIDGETS });
                                            },
                                        }),
                                    (0, r.jsx)(w.Z, {
                                        isPremiumUser: eP,
                                        onInteraction: n,
                                    }),
                                    eD
                                        ? (0, r.jsx)(j.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: eH,
                                              onClose: n,
                                          })
                                        : (0, r.jsx)(x.Z, {
                                              user: t,
                                              currentUser: t,
                                              onClose: n,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: eo.menus,
                                        children: [
                                            (0, r.jsx)(M.Z.Overlay, {
                                                className: eo.menuOverlay,
                                                children: (0, r.jsxs)(J.XE, {
                                                    id: "profile-".concat(t.id),
                                                    children: [
                                                        (0, r.jsx)(J.V4, {
                                                            id: "edit-profile",
                                                            action: "EDIT_PROFILE",
                                                            label: ea.intl.string(ea.t.s5vZlZ),
                                                            icon: c.vdY,
                                                            onClick: () => {
                                                                eR(), n();
                                                            },
                                                        }),
                                                        (0, r.jsx)(D.Z, { className: eo.menuDivider }),
                                                        (0, r.jsx)(J.V4, {
                                                            id: "set-status",
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, r.jsx)($.Z, {}),
                                                            sublabel:
                                                                eI &&
                                                                null != ev &&
                                                                (0, r.jsx)(c.Text, {
                                                                    color: "currentColor",
                                                                    variant: "text-xs/medium",
                                                                    children: ev,
                                                                }),
                                                            icon: () =>
                                                                (0, r.jsx)(c.qbd, {
                                                                    status: ey,
                                                                    size: 12,
                                                                }),
                                                            hint:
                                                                (eS || ey === en.Skl.DND) &&
                                                                (0, r.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: a.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, r.jsx)(J.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: eo.statusPickerModalMenu,
                                                                          "aria-label": ea.intl.string(ea.t.E13trK),
                                                                          onClose: t,
                                                                          children: eC,
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
                                                                                              n = ef(e, ["onClose"]);
                                                                                          return (0, r.jsx)(
                                                                                              l.I,
                                                                                              ed(
                                                                                                  ec({ onClose: t }, n),
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          ea.intl.string(
                                                                                                              ea.t[
                                                                                                                  "3Uj+2t"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      r.jsx)(c.v2r, {
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              ea.intl.string(
                                                                                                                  ea.t
                                                                                                                      .E13trK,
                                                                                                              ),
                                                                                                          className:
                                                                                                              eo.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: t,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: eC,
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
                                            (0, r.jsx)(M.Z.Overlay, {
                                                className: eo.menuOverlay,
                                                children: (0, r.jsxs)(J.XE, {
                                                    id: "account-".concat(t.id),
                                                    children: [
                                                        (0, r.jsx)(J.V4, {
                                                            id: "switch-accounts",
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: ea.intl.string(ea.t.oMNyYG),
                                                            onClick: () => {
                                                                n(), (0, et.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, r.jsx)(J.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": ea.intl.string(ea.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: eN,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            K.wS &&
                                                            eA &&
                                                            (0, r.jsxs)(r.Fragment, {
                                                                children: [
                                                                    (0, r.jsx)(D.Z, { className: eo.menuDivider }),
                                                                    (0, r.jsx)(J.V4, {
                                                                        id: "copy-user-id",
                                                                        action: "COPY_USER_ID",
                                                                        icon: c.VuL,
                                                                        label: ea.intl.string(ea.t["/AXYnJ"]),
                                                                        onClick: () => {
                                                                            (0, K.JG)(t.id), n();
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
                            (null == eh ? void 0 : eh.profileEffect) != null &&
                                !eB.current &&
                                (0, r.jsx)(v.Z, {
                                    profileEffectId: eh.profileEffect.id,
                                    isHovering: eb,
                                }),
                        ],
                    }),
                    (0, r.jsx)(F.Z, {}),
                ],
            }),
        }),
    });
}
