n.d(t, { Z: () => e_ }), n(388685);
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
    G = n(252748),
    B = n(420654),
    Z = n(785184),
    V = n(695346),
    F = n(622562),
    H = n(158776),
    Y = n(246946),
    W = n(572004),
    K = n(5192),
    z = n(74538),
    q = n(7093),
    X = n(474376),
    Q = n(431282),
    J = n(213928),
    $ = n(587243),
    ee = n(383832),
    et = n(981631),
    en = n(228168),
    er = n(671955),
    ei = n(388032),
    ea = n(54482),
    eo = n(116649);
function es(e, t, n) {
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
function el(e) {
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
                es(e, t, n[t]);
            });
    }
    return e;
}
function ec(e, t) {
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
function eu(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ec(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ed(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ef(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ef(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function e_(e) {
    let { currentUser: t, onClose: n, setPopoutRef: es, highlightBadge: ec, openedAt: ef } = e,
        e_ = __OVERLAY__,
        ep = (0, S.ZP)(t.id),
        { analyticsLocations: eh } = (0, _.ZP)(f.Z.USER_PROFILE_ACCOUNT_POPOUT),
        em = (0, I.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
        }),
        { ref: eg } = (0, u.ZP)(),
        eE = (0, d.Z)(eg);
    i.useEffect(() => {
        null == es || es(eg.current);
    }, [eg, es]),
        i.useEffect(() => (q.Z.setState({ isOpen: !0 }), () => q.Z.setState({ isOpen: !1 })), []);
    let eb = (0, o.e7)([H.Z], () => H.Z.getStatus(t.id)),
        ey = V.Cr.useSetting(),
        eO = (0, $.F)(ey),
        { expiringStatusProfileFeedback: ev } = b.Y.useExperiment(
            { location: "UserProfileAccountPopout" },
            { autoTrackExposure: !1 },
        ),
        eI = (0, o.e7)([Y.Z], () => Y.Z.hidePersonalInformation),
        eT = (0, y.p)(),
        eS = V.Sb.useSetting(),
        eA = (0, $.I)(eb),
        eC = (0, X.g)(n),
        eN = (0, O.Z)({ analyticsLocations: eh }),
        eR = (0, z.I5)(t),
        eP = (0, h.p)({ location: "UserProfileAccountPopout" }),
        ew = (0, T.b)({ location: "UserProfileAccountPopout" }),
        eD = (0, p.Z)({ location: "UserProfileAccountPopout" }),
        ex = i.useRef(null),
        [eL, ej] = i.useState(String(Date.now()));
    (0, F.fu)({
        targetElementRef: ex,
        onGetElementDimensionsAndBoundingRect: (e) => {
            let { hasElementPositionChanged: t } = e;
            t && ej(String(Date.now()));
        },
    });
    let [eM, ek] = (0, E.US)(eD ? [s.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []),
        eU = eM === s.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        eG = i.useRef((0, q.Z)((e) => e.shouldRenderTenureLevelUp)),
        eB = i.useMemo(() => (0, m.Z)(), []),
        [eZ, eV] = i.useState(!0);
    i.useEffect(() => {
        setTimeout(() => {
            eV(!1);
        }, 500);
    }, []);
    let eF = (e) => {
            null == n || n(),
                (0, A.openUserProfileModal)(
                    el(
                        {
                            customStatusPrompt: eB,
                            sourceAnalyticsLocations: eh,
                        },
                        em,
                        e,
                    ),
                );
        },
        eH = (null == ep ? void 0 : ep.widgets) != null && ep.widgets.length > 0;
    return (0, r.jsx)(_.Gt, {
        value: eh,
        children: (0, r.jsx)(I.Mt, {
            value: em,
            openedAt: ef,
            fetchStartedAt: null == ep ? void 0 : ep.fetchStartedAt,
            fetchEndedAt: null == ep ? void 0 : ep.fetchEndedAt,
            isLoaded: null == ep ? void 0 : ep.isLoaded,
            children: (0, r.jsxs)(c.VqE, {
                ref: eg,
                "aria-label": t.username,
                children: [
                    (0, r.jsxs)(j.Z, {
                        className: ea.themeContainer,
                        user: t,
                        displayProfile: ep,
                        themeType: er.l.POPOUT,
                        children: [
                            (0, r.jsxs)("div", {
                                className: eo.header,
                                children: [
                                    (0, r.jsx)(R.Z, {
                                        user: t,
                                        displayProfile: ep,
                                        themeType: er.l.POPOUT,
                                    }),
                                    (0, r.jsx)(C.Z, {
                                        user: t,
                                        displayProfile: ep,
                                        themeType: er.l.POPOUT,
                                        onOpenProfile: e_ ? void 0 : eF,
                                    }),
                                    eU
                                        ? (0, r.jsx)(g.Z, {
                                              positionKey: eL,
                                              onTryFeature: n,
                                              targetElementRef: ex,
                                              markAsDismissed: ek,
                                              children: () =>
                                                  (0, r.jsx)(U.Z, {
                                                      ref: ex,
                                                      user: t,
                                                      themeType: er.l.POPOUT,
                                                      onCloseProfile: n,
                                                      prompt: eB,
                                                  }),
                                          })
                                        : (0, r.jsx)(U.Z, {
                                              user: t,
                                              themeType: er.l.POPOUT,
                                              onCloseProfile: n,
                                              prompt: eP ? eB : null,
                                          }),
                                ],
                            }),
                            (0, r.jsxs)(c.Ttm, {
                                className: ea.body,
                                style: { pointerEvents: eZ ? "none" : void 0 },
                                children: [
                                    (0, r.jsx)(M.Z, {
                                        user: t,
                                        className: ea.username,
                                        nickname: K.ZP.getName(null, null, t),
                                        onOpenProfile: e_ ? void 0 : eF,
                                        pronouns: null == ep ? void 0 : ep.pronouns,
                                        tags: (0, r.jsx)(N.Z, {
                                            displayProfile: ep,
                                            themeType: er.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != ec ? (e) => e === ec : void 0,
                                            shouldGlowTenureBadge: eG.current,
                                        }),
                                        nicknameIcons: (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(x.Z, { userId: t.id }),
                                                (0, r.jsx)(k.Z, {
                                                    user: t,
                                                    isHovering: eE,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(B.Z, {
                                        user: t,
                                        bio: null == ep ? void 0 : ep.bio,
                                        hidePersonalInformation: eI,
                                        onClose: n,
                                    }),
                                    eH &&
                                        (0, r.jsx)(G.Z, {
                                            widgets: ep.widgets,
                                            onClick: () => {
                                                n(), eF({ section: en.oh.WIDGETS });
                                            },
                                        }),
                                    (0, r.jsx)(P.Z, {
                                        isPremiumUser: eR,
                                        onInteraction: n,
                                    }),
                                    ew
                                        ? (0, r.jsx)(L.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: eF,
                                              onClose: n,
                                          })
                                        : (0, r.jsx)(D.Z, {
                                              user: t,
                                              currentUser: t,
                                              onClose: n,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: ea.menus,
                                        children: [
                                            (0, r.jsx)(j.Z.Overlay, {
                                                className: ea.menuOverlay,
                                                children: (0, r.jsxs)(Q.XE, {
                                                    id: "profile-".concat(t.id),
                                                    children: [
                                                        (0, r.jsx)(Q.V4, {
                                                            id: "edit-profile",
                                                            action: "EDIT_PROFILE",
                                                            label: ei.intl.string(ei.t.s5vZlZ),
                                                            icon: c.vdY,
                                                            onClick: () => {
                                                                eN(), n();
                                                            },
                                                        }),
                                                        (0, r.jsx)(w.Z, { className: ea.menuDivider }),
                                                        (0, r.jsx)(Q.V4, {
                                                            id: "set-status",
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, r.jsx)(J.Z, {}),
                                                            sublabel:
                                                                ev &&
                                                                null != eO &&
                                                                (0, r.jsx)(c.Text, {
                                                                    color: "currentColor",
                                                                    variant: "text-xs/medium",
                                                                    children: eO,
                                                                }),
                                                            icon: () =>
                                                                (0, r.jsx)(c.qbd, {
                                                                    status: eb,
                                                                    size: 12,
                                                                }),
                                                            hint:
                                                                (eT || eb === et.Skl.DND) &&
                                                                (0, r.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: a.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, r.jsx)(Q.gp, {
                                                                          navId: "set-status-submenu",
                                                                          className: ea.statusPickerModalMenu,
                                                                          "aria-label": ei.intl.string(ei.t.E13trK),
                                                                          onClose: t,
                                                                          children: eA,
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
                                                                                              n = ed(e, ["onClose"]);
                                                                                          return (0, r.jsx)(
                                                                                              l.I,
                                                                                              eu(
                                                                                                  el({ onClose: t }, n),
                                                                                                  {
                                                                                                      size: "sm",
                                                                                                      "aria-label":
                                                                                                          ei.intl.string(
                                                                                                              ei.t[
                                                                                                                  "3Uj+2t"
                                                                                                              ],
                                                                                                          ),
                                                                                                      children: (0,
                                                                                                      r.jsx)(c.v2r, {
                                                                                                          navId: "set-status-submenu-mobile-web",
                                                                                                          variant:
                                                                                                              "fixed",
                                                                                                          "aria-label":
                                                                                                              ei.intl.string(
                                                                                                                  ei.t
                                                                                                                      .E13trK,
                                                                                                              ),
                                                                                                          className:
                                                                                                              ea.statusPickerModal,
                                                                                                          hideScroller:
                                                                                                              !0,
                                                                                                          onClose: t,
                                                                                                          onSelect:
                                                                                                              void 0,
                                                                                                          children: eA,
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
                                                className: ea.menuOverlay,
                                                children: (0, r.jsxs)(Q.XE, {
                                                    id: "account-".concat(t.id),
                                                    children: [
                                                        (0, r.jsx)(Q.V4, {
                                                            id: "switch-accounts",
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: ei.intl.string(ei.t.oMNyYG),
                                                            onClick: () => {
                                                                n(), (0, ee.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, r.jsx)(Q.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": ei.intl.string(ei.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: eC,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            W.wS &&
                                                            eS &&
                                                            (0, r.jsxs)(r.Fragment, {
                                                                children: [
                                                                    (0, r.jsx)(w.Z, { className: ea.menuDivider }),
                                                                    (0, r.jsx)(Q.V4, {
                                                                        id: "copy-user-id",
                                                                        action: "COPY_USER_ID",
                                                                        icon: c.VuL,
                                                                        label: ei.intl.string(ei.t["/AXYnJ"]),
                                                                        onClick: () => {
                                                                            (0, W.JG)(t.id), n();
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
                            (null == ep ? void 0 : ep.profileEffect) != null &&
                                !eG.current &&
                                (0, r.jsx)(v.Z, {
                                    profileEffectId: ep.profileEffect.id,
                                    isHovering: eE,
                                }),
                        ],
                    }),
                    (0, r.jsx)(Z.Z, {}),
                ],
            }),
        }),
    });
}
