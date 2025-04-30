n.d(t, { Z: () => $ });
var i = n(200651),
    r = n(192379),
    s = n(873546),
    l = n(442837),
    a = n(481060),
    o = n(393238),
    c = n(727637),
    d = n(100527),
    u = n(906732),
    m = n(368326),
    p = n(429467),
    g = n(440051),
    h = n(734934),
    f = n(300284),
    b = n(680295),
    _ = n(785717),
    x = n(209698),
    E = n(687158),
    j = n(892001),
    C = n(899007),
    O = n(648052),
    S = n(867176),
    v = n(537006),
    T = n(483517),
    N = n(483424),
    I = n(681837),
    y = n(638970),
    A = n(502762),
    P = n(530),
    R = n(309494),
    D = n(4517),
    Z = n(420654),
    w = n(695346),
    k = n(158776),
    L = n(246946),
    M = n(572004),
    B = n(5192),
    U = n(74538),
    V = n(7093),
    G = n(474376),
    F = n(431282),
    H = n(213928),
    z = n(587243),
    W = n(383832),
    Y = n(981631),
    K = n(228168),
    q = n(388032),
    X = n(404255),
    Q = n(200669);
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function $(e) {
    let { currentUser: t, onClose: n, setPopoutRef: $, highlightBadge: ee, openedAt: et } = e,
        en = __OVERLAY__,
        ei = (0, E.ZP)(t.id),
        { analyticsLocations: er } = (0, u.ZP)(d.Z.USER_PROFILE_ACCOUNT_POPOUT),
        es = (0, _.ZB)({
            layout: 'ACCOUNT_POPOUT',
            userId: t.id
        }),
        { ref: el } = (0, o.ZP)(),
        ea = (0, c.Z)(el);
    r.useEffect(() => {
        null == $ || $(el.current);
    }, [el, $]),
        r.useEffect(() => (V.Z.setState({ isOpen: !0 }), () => V.Z.setState({ isOpen: !1 })), []);
    let eo = (0, l.e7)([k.Z], () => k.Z.getStatus(t.id)),
        ec = w.Cr.useSetting(),
        ed = (0, z.F)(ec),
        { expiringStatusProfileFeedback: eu } = g.Y.useExperiment({ location: 'UserProfileAccountPopout' }, { autoTrackExposure: !1 }),
        em = (0, l.e7)([L.Z], () => L.Z.hidePersonalInformation),
        ep = (0, h.p)(),
        eg = w.Sb.useSetting(),
        eh = (0, z.I)(eo),
        ef = (0, G.g)(n),
        eb = (0, f.Z)({ analyticsLocations: er }),
        e_ = (0, U.I5)(t),
        ex = (0, m.p)({ location: 'UserProfileAccountPopout' }),
        eE = (0, x.b)({ location: 'UserProfileAccountPopout' }),
        ej = r.useMemo(() => (0, p.Z)(), []),
        eC = (e) => {
            null == n || n(),
                (0, j.openUserProfileModal)(
                    J(
                        {
                            customStatusPrompt: ej,
                            sourceAnalyticsLocations: er
                        },
                        es,
                        e
                    )
                );
        };
    return (0, i.jsx)(u.Gt, {
        value: er,
        children: (0, i.jsx)(_.Mt, {
            value: es,
            openedAt: et,
            fetchStartedAt: null == ei ? void 0 : ei.fetchStartedAt,
            fetchEndedAt: null == ei ? void 0 : ei.fetchEndedAt,
            isLoaded: null == ei ? void 0 : ei.isLoaded,
            children: (0, i.jsx)(a.VqE, {
                ref: el,
                'aria-label': t.username,
                children: (0, i.jsxs)(A.Z, {
                    className: X.themeContainer,
                    user: t,
                    displayProfile: ei,
                    themeType: K.lY.POPOUT,
                    children: [
                        (0, i.jsxs)('header', {
                            className: Q.header,
                            children: [
                                (0, i.jsx)(S.Z, {
                                    user: t,
                                    displayProfile: ei,
                                    themeType: K.lY.POPOUT
                                }),
                                (0, i.jsx)(C.Z, {
                                    user: t,
                                    displayProfile: ei,
                                    themeType: K.lY.POPOUT,
                                    onOpenProfile: en ? void 0 : eC
                                }),
                                (0, i.jsx)(D.Z, {
                                    location: 'UserProfileAccountPopout',
                                    user: t,
                                    themeType: K.lY.POPOUT,
                                    onCloseProfile: n,
                                    prompt: ex ? ej : null
                                })
                            ]
                        }),
                        (null == ei ? void 0 : ei.profileEffectId) != null &&
                            (0, i.jsx)(b.Z, {
                                profileEffectId: null == ei ? void 0 : ei.profileEffectId,
                                isHovering: ea
                            }),
                        (0, i.jsxs)(a.Ttm, {
                            className: X.body,
                            children: [
                                (0, i.jsx)(P.Z, {
                                    user: t,
                                    className: X.username,
                                    nickname: B.ZP.getName(null, null, t),
                                    onOpenProfile: en ? void 0 : eC,
                                    pronouns: null == ei ? void 0 : ei.pronouns,
                                    tags: (0, i.jsx)(O.Z, {
                                        displayProfile: ei,
                                        themeType: K.lY.POPOUT,
                                        onClose: n,
                                        shouldOpenBadgeTooltip: null != ee ? (e) => e === ee : void 0
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(I.Z, { userId: t.id }),
                                            (0, i.jsx)(R.Z, {
                                                user: t,
                                                isHovering: ea
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(Z.Z, {
                                    user: t,
                                    bio: null == ei ? void 0 : ei.bio,
                                    hidePersonalInformation: em,
                                    onClose: n
                                }),
                                (0, i.jsx)(v.Z, {
                                    isPremiumUser: e_,
                                    onInteraction: n
                                }),
                                eE
                                    ? (0, i.jsx)(y.Z, {
                                          user: t,
                                          currentUser: t,
                                          displayProfile: ei,
                                          onOpenUserProfileModal: eC
                                      })
                                    : (0, i.jsx)(N.Z, {
                                          user: t,
                                          currentUser: t,
                                          displayProfile: ei,
                                          onClose: n
                                      }),
                                (0, i.jsxs)('div', {
                                    className: X.menus,
                                    children: [
                                        (0, i.jsx)(A.Z.Overlay, {
                                            className: X.menuOverlay,
                                            children: (0, i.jsxs)(F.XE, {
                                                id: 'profile-'.concat(t.id),
                                                children: [
                                                    (0, i.jsx)(F.V4, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: q.intl.string(q.t.s5vZlZ),
                                                        icon: a.vdY,
                                                        onClick: () => {
                                                            eb(), n();
                                                        }
                                                    }),
                                                    (0, i.jsx)(T.Z, { className: X.menuDivider }),
                                                    (0, i.jsx)(F.V4, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: (0, i.jsx)(H.Z, {}),
                                                        sublabel:
                                                            eu &&
                                                            null != ed &&
                                                            (0, i.jsx)(a.Text, {
                                                                color: 'currentColor',
                                                                variant: 'text-xs/medium',
                                                                children: ed
                                                            }),
                                                        icon: () =>
                                                            (0, i.jsx)(a.qbd, {
                                                                status: eo,
                                                                size: 12
                                                            }),
                                                        hint: (ep || eo === Y.Skl.DND) && (0, i.jsx)(a.owu, { size: 'xxs' }),
                                                        renderSubmenu: s.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)(F.gp, {
                                                                      navId: 'set-status-submenu',
                                                                      className: X.statusPickerModalMenu,
                                                                      'aria-label': q.intl.string(q.t.E13trK),
                                                                      onClose: t,
                                                                      children: eh
                                                                  });
                                                              },
                                                        onClick: s.tq
                                                            ? () => {
                                                                  n(),
                                                                      (0, a.ZDy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      var t,
                                                                                          n,
                                                                                          { onClose: r } = e,
                                                                                          s = (function (e, t) {
                                                                                              if (null == e) return {};
                                                                                              var n,
                                                                                                  i,
                                                                                                  r = (function (e, t) {
                                                                                                      if (null == e) return {};
                                                                                                      var n,
                                                                                                          i,
                                                                                                          r = {},
                                                                                                          s = Object.keys(e);
                                                                                                      for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                                                                      return r;
                                                                                                  })(e, t);
                                                                                              if (Object.getOwnPropertySymbols) {
                                                                                                  var s = Object.getOwnPropertySymbols(e);
                                                                                                  for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                                                                                              }
                                                                                              return r;
                                                                                          })(e, ['onClose']);
                                                                                      return (0, i.jsx)(
                                                                                          a.Y0X,
                                                                                          ((t = J({}, s)),
                                                                                          (n = n =
                                                                                              {
                                                                                                  size: a.CgR.SMALL,
                                                                                                  'aria-label': q.intl.string(q.t['3Uj+2t']),
                                                                                                  className: X.statusPickerModal,
                                                                                                  children: (0, i.jsx)(a.v2r, {
                                                                                                      navId: 'set-status-submenu-mobile-web',
                                                                                                      variant: 'fixed',
                                                                                                      'aria-label': q.intl.string(q.t.E13trK),
                                                                                                      className: X.statusPickerModalMenu,
                                                                                                      hideScroller: !0,
                                                                                                      onClose: r,
                                                                                                      onSelect: void 0,
                                                                                                      children: eh
                                                                                                  })
                                                                                              }),
                                                                                          Object.getOwnPropertyDescriptors
                                                                                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                                                              : (function (e, t) {
                                                                                                    var n = Object.keys(e);
                                                                                                    if (Object.getOwnPropertySymbols) {
                                                                                                        var i = Object.getOwnPropertySymbols(e);
                                                                                                        n.push.apply(n, i);
                                                                                                    }
                                                                                                    return n;
                                                                                                })(Object(n)).forEach(function (e) {
                                                                                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                                                                }),
                                                                                          t)
                                                                                      );
                                                                                  })
                                                                              )
                                                                      );
                                                              }
                                                            : void 0
                                                    })
                                                ]
                                            })
                                        }),
                                        (0, i.jsx)(A.Z.Overlay, {
                                            className: X.menuOverlay,
                                            children: (0, i.jsxs)(F.XE, {
                                                id: 'account-'.concat(t.id),
                                                children: [
                                                    (0, i.jsx)(F.V4, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: a.lMe,
                                                        label: q.intl.string(q.t.oMNyYG),
                                                        onClick: () => {
                                                            n(), (0, W.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)(F.gp, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': q.intl.string(q.t.wFhVqK),
                                                                onClose: t,
                                                                children: ef
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        M.wS &&
                                                        eg &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)(T.Z, { className: X.menuDivider }),
                                                                (0, i.jsx)(F.V4, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: a.VuL,
                                                                    label: q.intl.string(q.t['/AXYnJ']),
                                                                    onClick: () => {
                                                                        (0, M.JG)(t.id), n();
                                                                    }
                                                                })
                                                            ]
                                                        })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
