n.d(t, { Z: () => ee });
var i = n(255367),
    r = n(73800),
    s = n(873546),
    l = n(442837),
    a = n(481060),
    o = n(393238),
    c = n(727637),
    d = n(100527),
    u = n(906732),
    g = n(368326),
    m = n(429467),
    p = n(440051),
    h = n(734934),
    f = n(300284),
    b = n(680295),
    _ = n(785717),
    x = n(209698),
    E = n(687158),
    C = n(892001),
    j = n(899007),
    O = n(648052),
    S = n(867176),
    v = n(537006),
    T = n(483517),
    I = n(483424),
    N = n(681837),
    y = n(638970),
    A = n(502762),
    P = n(530),
    R = n(309494),
    D = n(4517),
    Z = n(420654),
    w = n(537428),
    k = n(695346),
    L = n(158776),
    B = n(246946),
    M = n(572004),
    U = n(5192),
    V = n(74538),
    G = n(7093),
    F = n(474376),
    H = n(431282),
    z = n(213928),
    W = n(587243),
    Y = n(383832),
    K = n(981631),
    q = n(228168),
    X = n(388032),
    Q = n(404255),
    J = n(200669);
function $(e) {
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
function ee(e) {
    let { currentUser: t, onClose: n, setPopoutRef: ee, highlightBadge: et, openedAt: en } = e,
        ei = __OVERLAY__,
        er = (0, E.ZP)(t.id),
        { analyticsLocations: es } = (0, u.ZP)(d.Z.USER_PROFILE_ACCOUNT_POPOUT),
        el = (0, _.ZB)({
            layout: 'ACCOUNT_POPOUT',
            userId: t.id
        }),
        { ref: ea } = (0, o.ZP)(),
        eo = (0, c.Z)(ea);
    r.useEffect(() => {
        null == ee || ee(ea.current);
    }, [ea, ee]),
        r.useEffect(() => (G.Z.setState({ isOpen: !0 }), () => G.Z.setState({ isOpen: !1 })), []);
    let ec = (0, l.e7)([L.Z], () => L.Z.getStatus(t.id)),
        ed = k.Cr.useSetting(),
        eu = (0, W.F)(ed),
        { expiringStatusProfileFeedback: eg } = p.Y.useExperiment({ location: 'UserProfileAccountPopout' }, { autoTrackExposure: !1 }),
        em = (0, l.e7)([B.Z], () => B.Z.hidePersonalInformation),
        ep = (0, h.p)(),
        eh = k.Sb.useSetting(),
        ef = (0, W.I)(ec),
        eb = (0, F.g)(n),
        e_ = (0, f.Z)({ analyticsLocations: es }),
        ex = (0, V.I5)(t),
        eE = (0, g.p)({ location: 'UserProfileAccountPopout' }),
        eC = (0, x.b)({ location: 'UserProfileAccountPopout' }),
        ej = r.useRef((0, G.Z)((e) => e.shouldRenderTenureLevelUp)),
        eO = r.useMemo(() => (0, m.Z)(), []),
        eS = (e) => {
            null == n || n(),
                (0, C.openUserProfileModal)(
                    $(
                        {
                            customStatusPrompt: eO,
                            sourceAnalyticsLocations: es
                        },
                        el,
                        e
                    )
                );
        };
    return (0, i.jsx)(u.Gt, {
        value: es,
        children: (0, i.jsx)(_.Mt, {
            value: el,
            openedAt: en,
            fetchStartedAt: null == er ? void 0 : er.fetchStartedAt,
            fetchEndedAt: null == er ? void 0 : er.fetchEndedAt,
            isLoaded: null == er ? void 0 : er.isLoaded,
            children: (0, i.jsxs)(a.VqE, {
                ref: ea,
                'aria-label': t.username,
                children: [
                    (0, i.jsxs)(A.Z, {
                        className: Q.themeContainer,
                        user: t,
                        displayProfile: er,
                        themeType: q.lY.POPOUT,
                        children: [
                            (0, i.jsxs)('header', {
                                className: J.header,
                                children: [
                                    (0, i.jsx)(S.Z, {
                                        user: t,
                                        displayProfile: er,
                                        themeType: q.lY.POPOUT
                                    }),
                                    (0, i.jsx)(j.Z, {
                                        user: t,
                                        displayProfile: er,
                                        themeType: q.lY.POPOUT,
                                        onOpenProfile: ei ? void 0 : eS
                                    }),
                                    (0, i.jsx)(D.Z, {
                                        location: 'UserProfileAccountPopout',
                                        user: t,
                                        themeType: q.lY.POPOUT,
                                        onCloseProfile: n,
                                        prompt: eE ? eO : null
                                    })
                                ]
                            }),
                            (null == er ? void 0 : er.profileEffectId) != null &&
                                (0, i.jsx)(b.Z, {
                                    profileEffectId: null == er ? void 0 : er.profileEffectId,
                                    isHovering: eo
                                }),
                            (0, i.jsxs)(a.Ttm, {
                                className: Q.body,
                                children: [
                                    (0, i.jsx)(P.Z, {
                                        user: t,
                                        className: Q.username,
                                        nickname: U.ZP.getName(null, null, t),
                                        onOpenProfile: ei ? void 0 : eS,
                                        pronouns: null == er ? void 0 : er.pronouns,
                                        tags: (0, i.jsx)(O.Z, {
                                            displayProfile: er,
                                            themeType: q.lY.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != et ? (e) => e === et : void 0,
                                            shouldGlowTenureBadge: ej.current
                                        }),
                                        nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(N.Z, { userId: t.id }),
                                                (0, i.jsx)(R.Z, {
                                                    user: t,
                                                    isHovering: eo
                                                })
                                            ]
                                        })
                                    }),
                                    (0, i.jsx)(Z.Z, {
                                        user: t,
                                        bio: null == er ? void 0 : er.bio,
                                        hidePersonalInformation: em,
                                        onClose: n
                                    }),
                                    (0, i.jsx)(v.Z, {
                                        isPremiumUser: ex,
                                        onInteraction: n
                                    }),
                                    eC
                                        ? (0, i.jsx)(y.Z, {
                                              user: t,
                                              currentUser: t,
                                              displayProfile: er,
                                              onOpenUserProfileModal: eS
                                          })
                                        : (0, i.jsx)(I.Z, {
                                              user: t,
                                              currentUser: t,
                                              displayProfile: er,
                                              onClose: n
                                          }),
                                    (0, i.jsxs)('div', {
                                        className: Q.menus,
                                        children: [
                                            (0, i.jsx)(A.Z.Overlay, {
                                                className: Q.menuOverlay,
                                                children: (0, i.jsxs)(H.XE, {
                                                    id: 'profile-'.concat(t.id),
                                                    children: [
                                                        (0, i.jsx)(H.V4, {
                                                            id: 'edit-profile',
                                                            action: 'EDIT_PROFILE',
                                                            label: X.intl.string(X.t.s5vZlZ),
                                                            icon: a.vdY,
                                                            onClick: () => {
                                                                e_(), n();
                                                            }
                                                        }),
                                                        (0, i.jsx)(T.Z, { className: Q.menuDivider }),
                                                        (0, i.jsx)(H.V4, {
                                                            id: 'set-status',
                                                            action: 'PRESS_SET_STATUS',
                                                            label: (0, i.jsx)(z.Z, {}),
                                                            sublabel:
                                                                eg &&
                                                                null != eu &&
                                                                (0, i.jsx)(a.Text, {
                                                                    color: 'currentColor',
                                                                    variant: 'text-xs/medium',
                                                                    children: eu
                                                                }),
                                                            icon: () =>
                                                                (0, i.jsx)(a.qbd, {
                                                                    status: ec,
                                                                    size: 12
                                                                }),
                                                            hint: (ep || ec === K.Skl.DND) && (0, i.jsx)(a.owu, { size: 'xxs' }),
                                                            renderSubmenu: s.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, i.jsx)(H.gp, {
                                                                          navId: 'set-status-submenu',
                                                                          className: Q.statusPickerModalMenu,
                                                                          'aria-label': X.intl.string(X.t.E13trK),
                                                                          onClose: t,
                                                                          children: ef
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
                                                                                              ((t = $({}, s)),
                                                                                              (n = n =
                                                                                                  {
                                                                                                      size: a.CgR.SMALL,
                                                                                                      'aria-label': X.intl.string(X.t['3Uj+2t']),
                                                                                                      className: Q.statusPickerModal,
                                                                                                      children: (0, i.jsx)(a.v2r, {
                                                                                                          navId: 'set-status-submenu-mobile-web',
                                                                                                          variant: 'fixed',
                                                                                                          'aria-label': X.intl.string(X.t.E13trK),
                                                                                                          className: Q.statusPickerModalMenu,
                                                                                                          hideScroller: !0,
                                                                                                          onClose: r,
                                                                                                          onSelect: void 0,
                                                                                                          children: ef
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
                                                className: Q.menuOverlay,
                                                children: (0, i.jsxs)(H.XE, {
                                                    id: 'account-'.concat(t.id),
                                                    children: [
                                                        (0, i.jsx)(H.V4, {
                                                            id: 'switch-accounts',
                                                            action: 'PRESS_SWITCH_ACCOUNTS',
                                                            icon: a.lMe,
                                                            label: X.intl.string(X.t.oMNyYG),
                                                            onClick: () => {
                                                                n(), (0, Y.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, i.jsx)(H.gp, {
                                                                    navId: 'switch-accounts-submenu',
                                                                    'aria-label': X.intl.string(X.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: eb
                                                                });
                                                            }
                                                        }),
                                                        !__OVERLAY__ &&
                                                            M.wS &&
                                                            eh &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(T.Z, { className: Q.menuDivider }),
                                                                    (0, i.jsx)(H.V4, {
                                                                        id: 'copy-user-id',
                                                                        action: 'COPY_USER_ID',
                                                                        icon: a.VuL,
                                                                        label: X.intl.string(X.t['/AXYnJ']),
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
                    }),
                    (0, i.jsx)(w.Z, {})
                ]
            })
        })
    });
}
