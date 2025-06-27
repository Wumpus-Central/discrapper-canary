n.d(t, { Z: () => es }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(873546),
    l = n(442837),
    a = n(704215),
    o = n(481060),
    c = n(393238),
    d = n(727637),
    u = n(100527),
    m = n(906732),
    g = n(359588),
    p = n(368326),
    h = n(429467),
    f = n(526031),
    b = n(243778),
    _ = n(440051),
    x = n(734934),
    E = n(300284),
    j = n(680295),
    C = n(785717),
    O = n(209698),
    S = n(687158),
    v = n(892001),
    T = n(899007),
    I = n(648052),
    N = n(867176),
    y = n(537006),
    A = n(483517),
    P = n(483424),
    R = n(681837),
    D = n(638970),
    Z = n(502762),
    w = n(530),
    k = n(309494),
    L = n(4517),
    B = n(420654),
    M = n(785184),
    U = n(695346),
    V = n(622562),
    G = n(158776),
    F = n(246946),
    H = n(572004),
    z = n(5192),
    Y = n(74538),
    W = n(7093),
    K = n(474376),
    q = n(431282),
    X = n(213928),
    Q = n(587243),
    J = n(383832),
    $ = n(981631),
    ee = n(228168),
    et = n(388032),
    en = n(404255),
    ei = n(200669);
function er(e) {
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
function es(e) {
    let { currentUser: t, onClose: n, setPopoutRef: es, highlightBadge: el, openedAt: ea } = e,
        eo = __OVERLAY__,
        ec = (0, S.ZP)(t.id),
        { analyticsLocations: ed } = (0, m.ZP)(u.Z.USER_PROFILE_ACCOUNT_POPOUT),
        eu = (0, C.ZB)({
            layout: 'ACCOUNT_POPOUT',
            userId: t.id
        }),
        { ref: em } = (0, c.ZP)(),
        eg = (0, d.Z)(em);
    r.useEffect(() => {
        null == es || es(em.current);
    }, [em, es]),
        r.useEffect(() => (W.Z.setState({ isOpen: !0 }), () => W.Z.setState({ isOpen: !1 })), []);
    let ep = (0, l.e7)([G.Z], () => G.Z.getStatus(t.id)),
        eh = U.Cr.useSetting(),
        ef = (0, Q.F)(eh),
        { expiringStatusProfileFeedback: eb } = _.Y.useExperiment({ location: 'UserProfileAccountPopout' }, { autoTrackExposure: !1 }),
        e_ = (0, l.e7)([F.Z], () => F.Z.hidePersonalInformation),
        ex = (0, x.p)(),
        eE = U.Sb.useSetting(),
        ej = (0, Q.I)(ep),
        eC = (0, K.g)(n),
        eO = (0, E.Z)({ analyticsLocations: ed }),
        eS = (0, Y.I5)(t),
        ev = (0, p.p)({ location: 'UserProfileAccountPopout' }),
        eT = (0, O.b)({ location: 'UserProfileAccountPopout' }),
        eI = (0, g.Z)({ location: 'UserProfileAccountPopout' }),
        eN = r.useRef(null),
        [ey, eA] = r.useState(String(Date.now()));
    (0, V.fu)({
        targetElementRef: eN,
        onGetElementDimensionsAndBoundingRect: (e) => {
            let { hasElementPositionChanged: t } = e;
            t && eA(String(Date.now()));
        }
    });
    let [eP, eR] = (0, b.US)(eI ? [a.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []),
        eD = eP === a.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
        eZ = r.useRef((0, W.Z)((e) => e.shouldRenderTenureLevelUp)),
        ew = r.useMemo(() => (0, h.Z)(), []),
        [ek, eL] = r.useState(!0);
    r.useEffect(() => {
        setTimeout(() => {
            eL(!1);
        }, 500);
    }, []);
    let eB = (e) => {
            null == n || n(),
                (0, v.openUserProfileModal)(
                    er(
                        {
                            customStatusPrompt: ew,
                            sourceAnalyticsLocations: ed
                        },
                        eu,
                        e
                    )
                );
        },
        eM = (null == ec ? void 0 : ec.profileEffectId) != null && !eZ.current;
    return (0, i.jsx)(m.Gt, {
        value: ed,
        children: (0, i.jsx)(C.Mt, {
            value: eu,
            openedAt: ea,
            fetchStartedAt: null == ec ? void 0 : ec.fetchStartedAt,
            fetchEndedAt: null == ec ? void 0 : ec.fetchEndedAt,
            isLoaded: null == ec ? void 0 : ec.isLoaded,
            children: (0, i.jsxs)(o.VqE, {
                ref: em,
                'aria-label': t.username,
                children: [
                    (0, i.jsxs)(Z.Z, {
                        className: en.themeContainer,
                        user: t,
                        displayProfile: ec,
                        themeType: ee.lY.POPOUT,
                        children: [
                            (0, i.jsxs)('header', {
                                className: ei.header,
                                children: [
                                    (0, i.jsx)(N.Z, {
                                        user: t,
                                        displayProfile: ec,
                                        themeType: ee.lY.POPOUT
                                    }),
                                    (0, i.jsx)(T.Z, {
                                        user: t,
                                        displayProfile: ec,
                                        themeType: ee.lY.POPOUT,
                                        onOpenProfile: eo ? void 0 : eB
                                    }),
                                    eD
                                        ? (0, i.jsx)(f.Z, {
                                              positionKey: ey,
                                              onTryFeature: n,
                                              targetElementRef: eN,
                                              markAsDismissed: eR,
                                              children: () =>
                                                  (0, i.jsx)(L.Z, {
                                                      ref: eN,
                                                      location: 'UserProfileAccountPopout',
                                                      user: t,
                                                      themeType: ee.lY.POPOUT,
                                                      onCloseProfile: n,
                                                      prompt: ew
                                                  })
                                          })
                                        : (0, i.jsx)(L.Z, {
                                              location: 'UserProfileAccountPopout',
                                              user: t,
                                              themeType: ee.lY.POPOUT,
                                              onCloseProfile: n,
                                              prompt: ev ? ew : null
                                          })
                                ]
                            }),
                            (0, i.jsxs)(o.Ttm, {
                                className: en.body,
                                style: { pointerEvents: ek ? 'none' : void 0 },
                                children: [
                                    (0, i.jsx)(w.Z, {
                                        user: t,
                                        className: en.username,
                                        nickname: z.ZP.getName(null, null, t),
                                        onOpenProfile: eo ? void 0 : eB,
                                        pronouns: null == ec ? void 0 : ec.pronouns,
                                        tags: (0, i.jsx)(I.Z, {
                                            displayProfile: ec,
                                            themeType: ee.lY.POPOUT,
                                            onClose: n,
                                            shouldOpenBadgeTooltip: null != el ? (e) => e === el : void 0,
                                            shouldGlowTenureBadge: eZ.current
                                        }),
                                        nicknameIcons: (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(R.Z, { userId: t.id }),
                                                (0, i.jsx)(k.Z, {
                                                    user: t,
                                                    isHovering: eg
                                                })
                                            ]
                                        })
                                    }),
                                    (0, i.jsx)(B.Z, {
                                        user: t,
                                        bio: null == ec ? void 0 : ec.bio,
                                        hidePersonalInformation: e_,
                                        onClose: n
                                    }),
                                    (0, i.jsx)(y.Z, {
                                        isPremiumUser: eS,
                                        onInteraction: n
                                    }),
                                    eT
                                        ? (0, i.jsx)(D.Z, {
                                              user: t,
                                              currentUser: t,
                                              displayProfile: ec,
                                              onOpenUserProfileModal: eB,
                                              onClose: n
                                          })
                                        : (0, i.jsx)(P.Z, {
                                              user: t,
                                              currentUser: t,
                                              displayProfile: ec,
                                              onClose: n
                                          }),
                                    (0, i.jsxs)('div', {
                                        className: en.menus,
                                        children: [
                                            (0, i.jsx)(Z.Z.Overlay, {
                                                className: en.menuOverlay,
                                                children: (0, i.jsxs)(q.XE, {
                                                    id: 'profile-'.concat(t.id),
                                                    children: [
                                                        (0, i.jsx)(q.V4, {
                                                            id: 'edit-profile',
                                                            action: 'EDIT_PROFILE',
                                                            label: et.intl.string(et.t.s5vZlZ),
                                                            icon: o.vdY,
                                                            onClick: () => {
                                                                eO(), n();
                                                            }
                                                        }),
                                                        (0, i.jsx)(A.Z, { className: en.menuDivider }),
                                                        (0, i.jsx)(q.V4, {
                                                            id: 'set-status',
                                                            action: 'PRESS_SET_STATUS',
                                                            label: (0, i.jsx)(X.Z, {}),
                                                            sublabel:
                                                                eb &&
                                                                null != ef &&
                                                                (0, i.jsx)(o.Text, {
                                                                    color: 'currentColor',
                                                                    variant: 'text-xs/medium',
                                                                    children: ef
                                                                }),
                                                            icon: () =>
                                                                (0, i.jsx)(o.qbd, {
                                                                    status: ep,
                                                                    size: 12
                                                                }),
                                                            hint: (ex || ep === $.Skl.DND) && (0, i.jsx)(o.owu, { size: 'xxs' }),
                                                            renderSubmenu: s.tq
                                                                ? void 0
                                                                : (e) => {
                                                                      let { closePopout: t } = e;
                                                                      return (0, i.jsx)(q.gp, {
                                                                          navId: 'set-status-submenu',
                                                                          className: en.statusPickerModalMenu,
                                                                          'aria-label': et.intl.string(et.t.E13trK),
                                                                          onClose: t,
                                                                          children: ej
                                                                      });
                                                                  },
                                                            onClick: s.tq
                                                                ? () => {
                                                                      n(),
                                                                          (0, o.ZDy)(
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
                                                                                              o.Y0X,
                                                                                              ((t = er({}, s)),
                                                                                              (n = n =
                                                                                                  {
                                                                                                      size: o.CgR.SMALL,
                                                                                                      'aria-label': et.intl.string(et.t['3Uj+2t']),
                                                                                                      className: en.statusPickerModal,
                                                                                                      parentComponent: 'UserProfileAccountPopout',
                                                                                                      children: (0, i.jsx)(o.v2r, {
                                                                                                          navId: 'set-status-submenu-mobile-web',
                                                                                                          variant: 'fixed',
                                                                                                          'aria-label': et.intl.string(et.t.E13trK),
                                                                                                          className: en.statusPickerModalMenu,
                                                                                                          hideScroller: !0,
                                                                                                          onClose: r,
                                                                                                          onSelect: void 0,
                                                                                                          children: ej
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
                                            (0, i.jsx)(Z.Z.Overlay, {
                                                className: en.menuOverlay,
                                                children: (0, i.jsxs)(q.XE, {
                                                    id: 'account-'.concat(t.id),
                                                    children: [
                                                        (0, i.jsx)(q.V4, {
                                                            id: 'switch-accounts',
                                                            action: 'PRESS_SWITCH_ACCOUNTS',
                                                            icon: o.lMe,
                                                            label: et.intl.string(et.t.oMNyYG),
                                                            onClick: () => {
                                                                n(), (0, J.Z)();
                                                            },
                                                            renderSubmenu: (e) => {
                                                                let { closePopout: t } = e;
                                                                return (0, i.jsx)(q.gp, {
                                                                    navId: 'switch-accounts-submenu',
                                                                    'aria-label': et.intl.string(et.t.wFhVqK),
                                                                    onClose: t,
                                                                    children: eC
                                                                });
                                                            }
                                                        }),
                                                        !__OVERLAY__ &&
                                                            H.wS &&
                                                            eE &&
                                                            (0, i.jsxs)(i.Fragment, {
                                                                children: [
                                                                    (0, i.jsx)(A.Z, { className: en.menuDivider }),
                                                                    (0, i.jsx)(q.V4, {
                                                                        id: 'copy-user-id',
                                                                        action: 'COPY_USER_ID',
                                                                        icon: o.VuL,
                                                                        label: et.intl.string(et.t['/AXYnJ']),
                                                                        onClick: () => {
                                                                            (0, H.JG)(t.id), n();
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
                            eM &&
                                (0, i.jsx)(j.Z, {
                                    profileEffectId: null == ec ? void 0 : ec.profileEffectId,
                                    isHovering: eg
                                })
                        ]
                    }),
                    (0, i.jsx)(M.Z, {})
                ]
            })
        })
    });
}
