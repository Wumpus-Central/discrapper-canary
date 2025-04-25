n.d(t, { Z: () => Q });
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
    x = n(687158),
    E = n(892001),
    j = n(899007),
    C = n(648052),
    O = n(867176),
    S = n(537006),
    v = n(483517),
    T = n(483424),
    I = n(681837),
    N = n(502762),
    y = n(530),
    A = n(309494),
    P = n(4517),
    R = n(420654),
    D = n(695346),
    Z = n(158776),
    w = n(246946),
    k = n(572004),
    L = n(5192),
    B = n(74538),
    M = n(7093),
    U = n(474376),
    V = n(431282),
    G = n(213928),
    F = n(587243),
    H = n(383832),
    z = n(981631),
    W = n(228168),
    Y = n(388032),
    K = n(404255),
    q = n(200669);
function X(e) {
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
function Q(e) {
    let { currentUser: t, onClose: n, setPopoutRef: Q, highlightBadge: J, openedAt: $ } = e,
        ee = __OVERLAY__,
        et = (0, x.ZP)(t.id),
        { analyticsLocations: en } = (0, u.ZP)(d.Z.USER_PROFILE_ACCOUNT_POPOUT),
        ei = (0, _.ZB)({
            layout: 'ACCOUNT_POPOUT',
            userId: t.id
        }),
        { ref: er } = (0, o.ZP)(),
        es = (0, c.Z)(er);
    r.useEffect(() => {
        null == Q || Q(er.current);
    }, [er, Q]),
        r.useEffect(() => (M.Z.setState({ isOpen: !0 }), () => M.Z.setState({ isOpen: !1 })), []);
    let el = (0, l.e7)([Z.Z], () => Z.Z.getStatus(t.id)),
        ea = D.Cr.useSetting(),
        eo = (0, F.F)(ea),
        { expiringStatusProfileFeedback: ec } = g.Y.useExperiment({ location: 'UserProfileAccountPopout' }, { autoTrackExposure: !1 }),
        ed = (0, l.e7)([w.Z], () => w.Z.hidePersonalInformation),
        eu = (0, h.p)(),
        em = D.Sb.useSetting(),
        ep = (0, F.I)(el),
        eg = (0, U.g)(n),
        eh = (0, f.Z)({ analyticsLocations: en }),
        ef = (0, B.I5)(t),
        eb = (0, m.p)({ location: 'UserProfileAccountPopout' }),
        e_ = r.useMemo(() => (0, p.Z)(), []),
        ex = (e) => {
            null == n || n(),
                (0, E.openUserProfileModal)(
                    X(
                        {
                            customStatusPrompt: e_,
                            sourceAnalyticsLocations: en
                        },
                        ei,
                        e
                    )
                );
        };
    return (0, i.jsx)(u.Gt, {
        value: en,
        children: (0, i.jsx)(_.Mt, {
            value: ei,
            openedAt: $,
            fetchStartedAt: null == et ? void 0 : et.fetchStartedAt,
            fetchEndedAt: null == et ? void 0 : et.fetchEndedAt,
            isLoaded: null == et ? void 0 : et.isLoaded,
            children: (0, i.jsx)(a.VqE, {
                ref: er,
                'aria-label': t.username,
                children: (0, i.jsxs)(N.Z, {
                    className: K.themeContainer,
                    user: t,
                    displayProfile: et,
                    themeType: W.lY.POPOUT,
                    children: [
                        (0, i.jsxs)('header', {
                            className: q.header,
                            children: [
                                (0, i.jsx)(O.Z, {
                                    user: t,
                                    displayProfile: et,
                                    themeType: W.lY.POPOUT
                                }),
                                (0, i.jsx)(j.Z, {
                                    user: t,
                                    displayProfile: et,
                                    themeType: W.lY.POPOUT,
                                    onOpenProfile: ee ? void 0 : ex
                                }),
                                (0, i.jsx)(P.Z, {
                                    location: 'UserProfileAccountPopout',
                                    user: t,
                                    themeType: W.lY.POPOUT,
                                    onCloseProfile: n,
                                    prompt: eb ? e_ : null
                                })
                            ]
                        }),
                        (null == et ? void 0 : et.profileEffectId) != null &&
                            (0, i.jsx)(b.Z, {
                                profileEffectId: null == et ? void 0 : et.profileEffectId,
                                isHovering: es
                            }),
                        (0, i.jsxs)(a.Ttm, {
                            className: K.body,
                            children: [
                                (0, i.jsx)(y.Z, {
                                    user: t,
                                    className: K.username,
                                    nickname: L.ZP.getName(null, null, t),
                                    onOpenProfile: ee ? void 0 : ex,
                                    pronouns: null == et ? void 0 : et.pronouns,
                                    tags: (0, i.jsx)(C.Z, {
                                        displayProfile: et,
                                        themeType: W.lY.POPOUT,
                                        onClose: n,
                                        shouldOpenBadgeTooltip: null != J ? (e) => e === J : void 0
                                    }),
                                    nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(I.Z, { userId: t.id }),
                                            (0, i.jsx)(A.Z, {
                                                user: t,
                                                isHovering: es
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)(R.Z, {
                                    user: t,
                                    bio: null == et ? void 0 : et.bio,
                                    hidePersonalInformation: ed,
                                    onClose: n
                                }),
                                (0, i.jsx)(S.Z, {
                                    isPremiumUser: ef,
                                    onInteraction: n
                                }),
                                (0, i.jsx)(T.Z, {
                                    user: t,
                                    currentUser: t,
                                    displayProfile: et,
                                    onClose: n
                                }),
                                (0, i.jsxs)('div', {
                                    className: K.menus,
                                    children: [
                                        (0, i.jsx)(N.Z.Overlay, {
                                            className: K.menuOverlay,
                                            children: (0, i.jsxs)(V.XE, {
                                                id: 'profile-'.concat(t.id),
                                                children: [
                                                    (0, i.jsx)(V.V4, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: Y.intl.string(Y.t.s5vZlZ),
                                                        icon: a.vdY,
                                                        onClick: () => {
                                                            eh(), n();
                                                        }
                                                    }),
                                                    (0, i.jsx)(v.Z, { className: K.menuDivider }),
                                                    (0, i.jsx)(V.V4, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: (0, i.jsx)(G.Z, {}),
                                                        sublabel:
                                                            ec &&
                                                            null != eo &&
                                                            (0, i.jsx)(a.Text, {
                                                                color: 'currentColor',
                                                                variant: 'text-xs/medium',
                                                                children: eo
                                                            }),
                                                        icon: () =>
                                                            (0, i.jsx)(a.qbd, {
                                                                status: el,
                                                                size: 12
                                                            }),
                                                        hint: (eu || el === z.Skl.DND) && (0, i.jsx)(a.owu, { size: 'xxs' }),
                                                        renderSubmenu: s.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, i.jsx)(V.gp, {
                                                                      navId: 'set-status-submenu',
                                                                      className: K.statusPickerModalMenu,
                                                                      'aria-label': Y.intl.string(Y.t.E13trK),
                                                                      onClose: t,
                                                                      children: ep
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
                                                                                          ((t = X({}, s)),
                                                                                          (n = n =
                                                                                              {
                                                                                                  size: a.CgR.SMALL,
                                                                                                  'aria-label': Y.intl.string(Y.t['3Uj+2t']),
                                                                                                  className: K.statusPickerModal,
                                                                                                  children: (0, i.jsx)(a.v2r, {
                                                                                                      navId: 'set-status-submenu-mobile-web',
                                                                                                      variant: 'fixed',
                                                                                                      'aria-label': Y.intl.string(Y.t.E13trK),
                                                                                                      className: K.statusPickerModalMenu,
                                                                                                      hideScroller: !0,
                                                                                                      onClose: r,
                                                                                                      onSelect: void 0,
                                                                                                      children: ep
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
                                        (0, i.jsx)(N.Z.Overlay, {
                                            className: K.menuOverlay,
                                            children: (0, i.jsxs)(V.XE, {
                                                id: 'account-'.concat(t.id),
                                                children: [
                                                    (0, i.jsx)(V.V4, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: a.lMe,
                                                        label: Y.intl.string(Y.t.oMNyYG),
                                                        onClick: () => {
                                                            n(), (0, H.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, i.jsx)(V.gp, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': Y.intl.string(Y.t.wFhVqK),
                                                                onClose: t,
                                                                children: eg
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        k.wS &&
                                                        em &&
                                                        (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                (0, i.jsx)(v.Z, { className: K.menuDivider }),
                                                                (0, i.jsx)(V.V4, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: a.VuL,
                                                                    label: Y.intl.string(Y.t['/AXYnJ']),
                                                                    onClick: () => {
                                                                        (0, k.JG)(t.id), n();
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
