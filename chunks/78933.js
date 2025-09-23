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
    p = n(368326),
    h = n(429467),
    m = n(243778),
    g = n(440051),
    E = n(734934),
    b = n(300284),
    y = n(680295),
    O = n(785717),
    v = n(461133),
    I = n(209698),
    T = n(687158),
    S = n(892001),
    A = n(899007),
    C = n(648052),
    N = n(867176),
    R = n(537006),
    P = n(483424),
    w = n(681837),
    D = n(638970),
    x = n(502762),
    L = n(530),
    j = n(309494),
    M = n(4517),
    k = n(252748),
    U = n(420654),
    G = n(785184),
    B = n(695346),
    Z = n(158776),
    F = n(246946),
    V = n(572004),
    H = n(5192),
    Y = n(74538),
    W = n(7093),
    K = n(474376),
    z = n(431282),
    q = n(213928),
    X = n(587243),
    Q = n(383832),
    J = n(981631),
    $ = n(921944),
    ee = n(228168),
    et = n(671955),
    en = n(388032),
    er = n(138005),
    ei = n(593540);
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
        ef = (0, T.ZP)(t.id),
        { analyticsLocations: e_ } = (0, _.ZP)(f.Z.USER_PROFILE_ACCOUNT_POPOUT),
        ep = (0, O.ZB)({
            layout: "ACCOUNT_POPOUT",
            userId: t.id,
        }),
        { ref: eh } = (0, u.ZP)(),
        em = (0, d.Z)(eh);
    i.useEffect(() => {
        null == ea || ea(eh.current);
    }, [eh, ea]),
        i.useEffect(() => (W.Z.setState({ isOpen: !0 }), () => W.Z.setState({ isOpen: !1 })), []);
    let eg = (0, o.e7)([Z.Z], () => Z.Z.getStatus(t.id)),
        eE = B.Cr.useSetting(),
        eb = (0, X.F)(eE),
        { expiringStatusProfileFeedback: ey } = g.Y.useExperiment(
            { location: "UserProfileAccountPopout" },
            { autoTrackExposure: !1 },
        ),
        eO = (0, o.e7)([F.Z], () => F.Z.hidePersonalInformation),
        ev = (0, E.p)(),
        eI = B.Sb.useSetting(),
        eT = (0, X.I)(eg),
        eS = (0, K.g)(n),
        eA = (0, b.Z)({ analyticsLocations: e_ }),
        eC = (0, Y.I5)(t),
        eN = (0, p.p)({ location: "UserProfileAccountPopout" }),
        eR = (0, I.b)({ location: "UserProfileAccountPopout" }),
        eP = i.useRef(null),
        ew = i.useRef((0, W.Z)((e) => e.shouldRenderTenureLevelUp)),
        eD = i.useMemo(() => (0, h.Z)(), []),
        [ex, eL] = i.useState(!0);
    i.useEffect(() => {
        setTimeout(() => {
            eL(!1);
        }, 500);
    }, []);
    let ej = (e) => {
            null == n || n(),
                (0, S.openUserProfileModal)(
                    eo(
                        {
                            customStatusPrompt: eD,
                            sourceAnalyticsLocations: e_,
                        },
                        ep,
                        e,
                    ),
                );
        },
        eM = (0, v.P)({ location: "UserProfileAccountPopout" }),
        ek = (null == ef ? void 0 : ef.widgets) != null && ef.widgets.length > 0,
        eU = eM && ek,
        eG = ek ? [] : [s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE],
        [eB, eZ] = (0, m.US)(eG),
        eF = eB === s.z.WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_NEW_BADGE;
    return (0, r.jsx)(_.Gt, {
        value: e_,
        children: (0, r.jsx)(O.Mt, {
            value: ep,
            openedAt: eu,
            fetchStartedAt: null == ef ? void 0 : ef.fetchStartedAt,
            fetchEndedAt: null == ef ? void 0 : ef.fetchEndedAt,
            isLoaded: null == ef ? void 0 : ef.isLoaded,
            children: (0, r.jsxs)(c.VqE, {
                ref: eh,
                "aria-label": t.username,
                children: [
                    (0, r.jsxs)(x.Z, {
                        className: er.themeContainer,
                        user: t,
                        displayProfile: ef,
                        themeType: et.l.POPOUT,
                        children: [
                            (0, r.jsxs)("div", {
                                className: ei.header,
                                children: [
                                    (0, r.jsx)(N.Z, {
                                        user: t,
                                        displayProfile: ef,
                                        themeType: et.l.POPOUT,
                                    }),
                                    (0, r.jsx)(A.Z, {
                                        user: t,
                                        displayProfile: ef,
                                        themeType: et.l.POPOUT,
                                        onOpenProfile: ed ? void 0 : ej,
                                    }),
                                    (0, r.jsx)(M.Z, {
                                        ref: eP,
                                        user: t,
                                        themeType: et.l.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eN ? eD : null,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(c.Ttm, {
                                className: er.body,
                                style: { pointerEvents: ex ? "none" : void 0 },
                                children: [
                                    (0, r.jsx)(L.Z, {
                                        user: t,
                                        className: er.username,
                                        nickname: H.ZP.getName(null, null, t),
                                        onOpenProfile: ed ? void 0 : ej,
                                        pronouns: null == ef ? void 0 : ef.pronouns,
                                        tags: (0, r.jsx)(C.Z, {
                                            displayProfile: ef,
                                            themeType: et.l.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != es ? (e) => e === es : void 0,
                                            shouldGlowTenureBadge: ew.current,
                                        }),
                                        nicknameIcons: (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(w.Z, { userId: t.id }),
                                                (0, r.jsx)(j.Z, {
                                                    user: t,
                                                    isHovering: em,
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(U.Z, {
                                        user: t,
                                        bio: null == ef ? void 0 : ef.bio,
                                        hidePersonalInformation: eO,
                                        onClose: n,
                                    }),
                                    eU &&
                                        (0, r.jsx)(k.Z, {
                                            widgets: ef.gameWidgets,
                                            onClick: () => {
                                                n(), ej({ section: ee.oh.WIDGETS });
                                            },
                                        }),
                                    (0, r.jsx)(R.Z, {
                                        isPremiumUser: eC,
                                        onInteraction: n,
                                    }),
                                    eR
                                        ? (0, r.jsx)(D.Z, {
                                              user: t,
                                              currentUser: t,
                                              onOpenUserProfileModal: ej,
                                              onClose: n,
                                          })
                                        : (0, r.jsx)(P.Z, {
                                              user: t,
                                              currentUser: t,
                                              onClose: n,
                                          }),
                                    (0, r.jsxs)("div", {
                                        className: er.menus,
                                        children: [
                                            (0, r.jsx)(x.Z.Overlay, {
                                                className: er.menuOverlay,
                                                children: (0, r.jsxs)(z.XE, {
                                                    children: [
                                                        (0, r.jsx)(z.V4, {
                                                            action: "EDIT_PROFILE",
                                                            label: en.intl.string(en.t.s5vZlZ),
                                                            icon: c.vdY,
                                                            onClick: () => {
                                                                eZ($.L.USER_DISMISS), eA(), n();
                                                            },
                                                            trailing: eF
                                                                ? (0, r.jsx)(c.IGR, {
                                                                      text: en.intl.string(en.t.y2b7CA),
                                                                  })
                                                                : void 0,
                                                        }),
                                                        (0, r.jsx)(z.V4, {
                                                            action: "PRESS_SET_STATUS",
                                                            label: (0, r.jsx)(q.Z, {}),
                                                            sublabel: ey && null != eb && eb,
                                                            icon: () =>
                                                                (0, r.jsx)(c.qbd, {
                                                                    status: eg,
                                                                    size: 12,
                                                                }),
                                                            trailing:
                                                                (ev || eg === J.Skl.DND) &&
                                                                (0, r.jsx)(c.owu, { size: "xxs" }),
                                                            renderSubmenu: a.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, r.jsx)(z.gp, {
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
                                                                                              l.IX,
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
                                            (0, r.jsx)(x.Z.Overlay, {
                                                className: er.menuOverlay,
                                                children: (0, r.jsxs)(z.XE, {
                                                    children: [
                                                        (0, r.jsx)(z.V4, {
                                                            action: "PRESS_SWITCH_ACCOUNTS",
                                                            icon: c.lMe,
                                                            label: en.intl.string(en.t.oMNyYG),
                                                            onClick: () => {
                                                                n(), (0, Q.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, r.jsx)(z.gp, {
                                                                    navId: "switch-accounts-submenu",
                                                                    "aria-label": en.intl.string(en.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: eS,
                                                                });
                                                            },
                                                        }),
                                                        !__OVERLAY__ &&
                                                            V.wS &&
                                                            eI &&
                                                            (0, r.jsx)(z.V4, {
                                                                action: "COPY_USER_ID",
                                                                icon: c.VuL,
                                                                label: en.intl.string(en.t["/AXYnJ"]),
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
                                !ew.current &&
                                (0, r.jsx)(y.Z, {
                                    profileEffectId: ef.profileEffect.id,
                                    isHovering: em,
                                }),
                        ],
                    }),
                    (0, r.jsx)(G.Z, {}),
                ],
            }),
        }),
    });
}
