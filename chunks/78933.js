(n.d(t, { Z: () => ea }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(873546),
    a = n(442837),
    l = n(704215),
    o = n(257465),
    c = n(481060),
    d = n(393238),
    u = n(727637),
    m = n(100527),
    p = n(906732),
    g = n(359588),
    h = n(368326),
    f = n(429467),
    b = n(526031),
    x = n(243778),
    _ = n(440051),
    j = n(734934),
    E = n(300284),
    O = n(680295),
    C = n(785717),
    v = n(209698),
    S = n(687158),
    T = n(892001),
    N = n(899007),
    I = n(648052),
    y = n(867176),
    A = n(537006),
    P = n(483517),
    R = n(483424),
    D = n(681837),
    Z = n(638970),
    w = n(502762),
    k = n(530),
    L = n(309494),
    B = n(4517),
    M = n(420654),
    U = n(785184),
    V = n(695346),
    G = n(622562),
    F = n(158776),
    H = n(246946),
    z = n(572004),
    W = n(5192),
    Y = n(74538),
    K = n(7093),
    q = n(474376),
    X = n(431282),
    J = n(213928),
    Q = n(587243),
    $ = n(383832),
    ee = n(981631),
    et = n(228168),
    en = n(388032),
    ei = n(404255),
    er = n(200669);
function es(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function ea(e) {
    let { currentUser: t, onClose: n, setPopoutRef: ea, highlightBadge: el, openedAt: eo } = e,
        ec = __OVERLAY__,
        ed = (0, S.ZP)(t.id),
        { analyticsLocations: eu } = (0, p.ZP)(m.Z.USER_PROFILE_ACCOUNT_POPOUT),
        em = (0, C.ZB)({
            layout: 'ACCOUNT_POPOUT',
            userId: t.id
        }),
        { ref: ep } = (0, d.ZP)(),
        eg = (0, u.Z)(ep);
    (r.useEffect(() => {
        null == ea || ea(ep.current);
    }, [ep, ea]),
        r.useEffect(() => (K.Z.setState({ isOpen: !0 }), () => K.Z.setState({ isOpen: !1 })), []));
    let eh = (0, a.e7)([F.Z], () => F.Z.getStatus(t.id)),
        ef = V.Cr.useSetting(),
        eb = (0, Q.F)(ef),
        { expiringStatusProfileFeedback: ex } = _.Y.useExperiment({ location: 'UserProfileAccountPopout' }, { autoTrackExposure: !1 }),
        e_ = (0, a.e7)([H.Z], () => H.Z.hidePersonalInformation),
        ej = (0, j.p)(),
        eE = V.Sb.useSetting(),
        eO = (0, Q.I)(eh),
        eC = (0, q.g)(n),
        ev = (0, E.Z)({ analyticsLocations: eu }),
        eS = (0, Y.I5)(t),
        eT = (0, h.p)({ location: 'UserProfileAccountPopout' }),
        eN = (0, v.b)({ location: 'UserProfileAccountPopout' }),
        eI = (0, g.Z)({ location: 'UserProfileAccountPopout' }),
        ey = r.useRef(null),
        [eA, eP] = r.useState(String(Date.now()));
    (0, G.fu)({
        targetElementRef: ey,
        onGetElementDimensionsAndBoundingRect: (e) => {
            let { hasElementPositionChanged: t } = e;
            t && eP(String(Date.now()));
        }
    });
    let [eR, eD] = (0, x.US)(eI ? [l.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []),
        eZ = eR === l.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        ew = r.useRef((0, K.Z)((e) => e.shouldRenderTenureLevelUp)),
        ek = r.useMemo(() => (0, f.Z)(), []),
        [eL, eB] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            eB(!1);
        }, 500);
    }, []);
    let eM = (e) => {
            (null == n || n(),
                (0, T.openUserProfileModal)(
                    es(
                        {
                            customStatusPrompt: ek,
                            sourceAnalyticsLocations: eu
                        },
                        em,
                        e
                    )
                ));
        },
        eU = (null == ed ? void 0 : ed.profileEffectId) != null && !ew.current;
    return (0, i.jsx)(p.Gt, {
        value: eu,
        children: (0, i.jsx)(C.Mt, {
            value: em,
            openedAt: eo,
            fetchStartedAt: null == ed ? void 0 : ed.fetchStartedAt,
            fetchEndedAt: null == ed ? void 0 : ed.fetchEndedAt,
            isLoaded: null == ed ? void 0 : ed.isLoaded,
            children: (0, i.jsxs)(c.VqE, {
                ref: ep,
                'aria-label': t.username,
                children: [
                    (0, i.jsxs)(w.Z, {
                        className: ei.themeContainer,
                        user: t,
                        displayProfile: ed,
                        themeType: et.lY.POPOUT,
                        children: [
                            (0, i.jsxs)('header', {
                                className: er.header,
                                children: [
                                    (0, i.jsx)(y.Z, {
                                        user: t,
                                        displayProfile: ed,
                                        themeType: et.lY.POPOUT
                                    }),
                                    (0, i.jsx)(N.Z, {
                                        user: t,
                                        displayProfile: ed,
                                        themeType: et.lY.POPOUT,
                                        onOpenProfile: ec ? void 0 : eM
                                    }),
                                    eZ
                                        ? (0, i.jsx)(b.Z, {
                                              positionKey: eA,
                                              onTryFeature: n,
                                              targetElementRef: ey,
                                              markAsDismissed: eD,
                                              children: () =>
                                                  (0, i.jsx)(B.Z, {
                                                      ref: ey,
                                                      location: 'UserProfileAccountPopout',
                                                      user: t,
                                                      themeType: et.lY.POPOUT,
                                                      onCloseProfile: n,
                                                      prompt: ek
                                                  })
                                          })
                                        : (0, i.jsx)(B.Z, {
                                              location: 'UserProfileAccountPopout',
                                              user: t,
                                              themeType: et.lY.POPOUT,
                                              onCloseProfile: n,
                                              prompt: eT ? ek : null
                                          })
                                ]
                            }),
                            (0, i.jsxs)(c.Ttm, {
                                className: ei.body,
                                style: { pointerEvents: eL ? 'none' : void 0 },
                                children: [
                                    (0, i.jsx)(k.Z, {
                                        user: t,
                                        className: ei.username,
                                        nickname: W.ZP.getName(null, null, t),
                                        onOpenProfile: ec ? void 0 : eM,
                                        pronouns: null == ed ? void 0 : ed.pronouns,
                                        tags: (0, i.jsx)(I.Z, {
                                            displayProfile: ed,
                                            themeType: et.lY.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != el ? (e) => e === el : void 0,
                                            shouldGlowTenureBadge: ew.current
                                        }),
                                        nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(D.Z, { userId: t.id }),
                                                (0, i.jsx)(L.Z, {
                                                    user: t,
                                                    isHovering: eg
                                                })
                                            ]
                                        })
                                    }),
                                    (0, i.jsx)(M.Z, {
                                        user: t,
                                        bio: null == ed ? void 0 : ed.bio,
                                        hidePersonalInformation: e_,
                                        onClose: n
                                    }),
                                    (0, i.jsx)(A.Z, {
                                        isPremiumUser: eS,
                                        onInteraction: n
                                    }),
                                    eN
                                        ? (0, i.jsx)(Z.Z, {
                                              user: t,
                                              currentUser: t,
                                              displayProfile: ed,
                                              onOpenUserProfileModal: eM,
                                              onClose: n
                                          })
                                        : (0, i.jsx)(R.Z, {
                                              user: t,
                                              currentUser: t,
                                              displayProfile: ed,
                                              onClose: n
                                          }),
                                    (0, i.jsxs)('div', {
                                        className: ei.menus,
                                        children: [
                                            (0, i.jsx)(w.Z.Overlay, {
                                                className: ei.menuOverlay,
                                                children: (0, i.jsxs)(X.XE, {
                                                    id: 'profile-'.concat(t.id),
                                                    children: [
                                                        (0, i.jsx)(X.V4, {
                                                            id: 'edit-profile',
                                                            action: 'EDIT_PROFILE',
                                                            label: en.intl.string(en.t.s5vZlZ),
                                                            icon: c.vdY,
                                                            onClick: () => {
                                                                (ev(), n());
                                                            }
                                                        }),
                                                        (0, i.jsx)(P.Z, { className: ei.menuDivider }),
                                                        (0, i.jsx)(X.V4, {
                                                            id: 'set-status',
                                                            action: 'PRESS_SET_STATUS',
                                                            label: (0, i.jsx)(J.Z, {}),
                                                            sublabel:
                                                                ex &&
                                                                null != eb &&
                                                                (0, i.jsx)(c.Text, {
                                                                    color: 'currentColor',
                                                                    variant: 'text-xs/medium',
                                                                    children: eb
                                                                }),
                                                            icon: () =>
                                                                (0, i.jsx)(c.qbd, {
                                                                    status: eh,
                                                                    size: 12
                                                                }),
                                                            hint: (ej || eh === ee.Skl.DND) && (0, i.jsx)(c.owu, { size: 'xxs' }),
                                                            renderSubmenu: s.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, i.jsx)(X.gp, {
                                                                          navId: 'set-status-submenu',
                                                                          className: ei.statusPickerModalMenu,
                                                                          'aria-label': en.intl.string(en.t.E13trK),
                                                                          onClose: t,
                                                                          children: eO
                                                                      });
                                                                  },
                                                            onClick: s.tq
                                                                ? () => {
                                                                      (n(),
                                                                          (0, c.ZDy)(
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
                                                                                                          for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                                                                                          return r;
                                                                                                      })(e, t);
                                                                                                  if (Object.getOwnPropertySymbols) {
                                                                                                      var s = Object.getOwnPropertySymbols(e);
                                                                                                      for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                                                                                                  }
                                                                                                  return r;
                                                                                              })(e, ['onClose']);
                                                                                          return (0, i.jsx)(
                                                                                              o.IX,
                                                                                              ((t = es({ onClose: r }, s)),
                                                                                              (n = n =
                                                                                                  {
                                                                                                      size: 'sm',
                                                                                                      'aria-label': en.intl.string(en.t['3Uj+2t']),
                                                                                                      children: (0, i.jsx)(c.v2r, {
                                                                                                          navId: 'set-status-submenu-mobile-web',
                                                                                                          variant: 'fixed',
                                                                                                          'aria-label': en.intl.string(en.t.E13trK),
                                                                                                          className: ei.statusPickerModal,
                                                                                                          hideScroller: !0,
                                                                                                          onClose: r,
                                                                                                          onSelect: void 0,
                                                                                                          children: eO
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
                                                                          ));
                                                                  }
                                                                : void 0
                                                        })
                                                    ]
                                                })
                                            }),
                                            (0, i.jsx)(w.Z.Overlay, {
                                                className: ei.menuOverlay,
                                                children: (0, i.jsxs)(X.XE, {
                                                    id: 'account-'.concat(t.id),
                                                    children: [
                                                        (0, i.jsx)(X.V4, {
                                                            id: 'switch-accounts',
                                                            action: 'PRESS_SWITCH_ACCOUNTS',
                                                            icon: c.lMe,
                                                            label: en.intl.string(en.t.oMNyYG),
                                                            onClick: () => {
                                                                (n(), (0, $.Z)());
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, i.jsx)(X.gp, {
                                                                    navId: 'switch-accounts-submenu',
                                                                    'aria-label': en.intl.string(en.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: eC
                                                                });
                                                            }
                                                        }),
                                                        !__OVERLAY__ &&
                                                            z.wS &&
                                                            eE &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(P.Z, { className: ei.menuDivider }),
                                                                    (0, i.jsx)(X.V4, {
                                                                        id: 'copy-user-id',
                                                                        action: 'COPY_USER_ID',
                                                                        icon: c.VuL,
                                                                        label: en.intl.string(en.t['/AXYnJ']),
                                                                        onClick: () => {
                                                                            ((0, z.JG)(t.id), n());
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
                            }),
                            eU &&
                                (0, i.jsx)(O.Z, {
                                    profileEffectId: null == ed ? void 0 : ed.profileEffectId,
                                    isHovering: eg
                                })
                        ]
                    }),
                    (0, i.jsx)(U.Z, {})
                ]
            })
        })
    });
}
