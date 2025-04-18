n.d(t, { Z: () => Q });
var r = n(200651),
    i = n(192379),
    s = n(873546),
    a = n(442837),
    l = n(481060),
    o = n(393238),
    c = n(727637),
    d = n(100527),
    u = n(906732),
    m = n(368326),
    g = n(429467),
    p = n(440051),
    h = n(734934),
    f = n(300284),
    b = n(680295),
    _ = n(785717),
    N = n(687158),
    x = n(899007),
    E = n(648052),
    j = n(867176),
    C = n(537006),
    O = n(483517),
    S = n(483424),
    v = n(681837),
    T = n(502762),
    I = n(530),
    y = n(309494),
    A = n(4517),
    P = n(171368),
    R = n(420654),
    D = n(695346),
    Z = n(158776),
    w = n(246946),
    k = n(572004),
    W = n(5192),
    L = n(74538),
    B = n(7093),
    M = n(474376),
    U = n(431282),
    V = n(213928),
    G = n(587243),
    F = n(383832),
    H = n(981631),
    z = n(228168),
    Y = n(388032),
    K = n(992973),
    q = n(165957);
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function Q(e) {
    let { currentUser: t, onClose: n, setPopoutRef: Q, highlightBadge: J, openedAt: $ } = e,
        ee = __OVERLAY__,
        et = (0, N.ZP)(t.id),
        { analyticsLocations: en } = (0, u.ZP)(d.Z.ACCOUNT_PROFILE_POPOUT),
        er = (0, _.ZB)({
            layout: 'SIMPLIFIED_ACCOUNT_POPOUT',
            userId: t.id
        }),
        { ref: ei } = (0, o.ZP)(),
        es = (0, c.Z)(ei);
    i.useEffect(() => {
        null == Q || Q(ei.current);
    }, [ei, Q]),
        i.useEffect(() => (B.Z.setState({ isOpen: !0 }), () => B.Z.setState({ isOpen: !1 })), []);
    let ea = (0, a.e7)([Z.Z], () => Z.Z.getStatus(t.id)),
        el = D.Cr.useSetting(),
        eo = (0, G.F)(el),
        { expiringStatusProfileFeedback: ec } = p.Y.useExperiment({ location: 'UserProfileAccountPopout' }, { autoTrackExposure: !1 }),
        ed = (0, a.e7)([w.Z], () => w.Z.hidePersonalInformation),
        eu = (0, h.p)(),
        em = D.Sb.useSetting(),
        eg = (0, G.I)(ea),
        ep = (0, M.g)(n),
        eh = (0, f.Z)({ analyticsLocations: en }),
        ef = (0, L.I5)(t),
        eb = (0, m.p)({ location: 'UserProfileAccountPopout' }),
        e_ = i.useMemo(() => (0, g.Z)(), []),
        eN = (e) => {
            null == n || n(),
                (0, P.openUserProfileModal)(
                    X(
                        {
                            customStatusPrompt: e_,
                            sourceAnalyticsLocations: en
                        },
                        er,
                        e
                    )
                );
        };
    return (0, r.jsx)(u.Gt, {
        value: en,
        children: (0, r.jsx)(_.Mt, {
            value: er,
            openedAt: $,
            fetchStartedAt: null == et ? void 0 : et.fetchStartedAt,
            fetchEndedAt: null == et ? void 0 : et.fetchEndedAt,
            isLoaded: null == et ? void 0 : et.isLoaded,
            children: (0, r.jsx)(l.VqE, {
                ref: ei,
                'aria-label': t.username,
                children: (0, r.jsxs)(T.Z, {
                    className: K.themeContainer,
                    user: t,
                    displayProfile: et,
                    profileType: z.y0.BITE_SIZE,
                    children: [
                        (0, r.jsxs)('header', {
                            className: q.header,
                            children: [
                                (0, r.jsx)(j.Z, {
                                    user: t,
                                    displayProfile: et,
                                    profileType: z.y0.BITE_SIZE
                                }),
                                (0, r.jsx)(x.Z, {
                                    user: t,
                                    displayProfile: et,
                                    profileType: z.y0.BITE_SIZE,
                                    onOpenProfile: ee ? void 0 : eN
                                }),
                                (0, r.jsx)(A.Z, {
                                    location: 'UserProfileAccountPopout',
                                    user: t,
                                    profileType: z.y0.BITE_SIZE,
                                    onCloseProfile: n,
                                    prompt: eb ? e_ : null
                                })
                            ]
                        }),
                        (null == et ? void 0 : et.profileEffectId) != null &&
                            (0, r.jsx)(b.Z, {
                                profileEffectId: null == et ? void 0 : et.profileEffectId,
                                isHovering: es
                            }),
                        (0, r.jsxs)(l.Ttm, {
                            className: K.body,
                            children: [
                                (0, r.jsx)(I.Z, {
                                    user: t,
                                    className: K.username,
                                    profileType: z.y0.BITE_SIZE,
                                    nickname: W.ZP.getName(null, null, t),
                                    onOpenProfile: ee ? void 0 : eN,
                                    pronouns: null == et ? void 0 : et.pronouns,
                                    tags: (0, r.jsx)(E.Z, {
                                        displayProfile: et,
                                        profileType: z.y0.BITE_SIZE,
                                        onClose: n,
                                        shouldOpenBadgeTooltip: null != J ? (e) => e === J : void 0
                                    }),
                                    nicknameIcons: (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(v.Z, { userId: t.id }),
                                            (0, r.jsx)(y.Z, {
                                                user: t,
                                                isHovering: es
                                            })
                                        ]
                                    })
                                }),
                                (0, r.jsx)(R.Z, {
                                    user: t,
                                    bio: null == et ? void 0 : et.bio,
                                    hidePersonalInformation: ed,
                                    onClose: n
                                }),
                                (0, r.jsx)(C.Z, {
                                    isPremiumUser: ef,
                                    onInteraction: n
                                }),
                                (0, r.jsx)(S.Z, {
                                    user: t,
                                    currentUser: t,
                                    displayProfile: et,
                                    onClose: n
                                }),
                                (0, r.jsxs)('div', {
                                    className: K.menus,
                                    children: [
                                        (0, r.jsx)(T.Z.Overlay, {
                                            className: K.menuOverlay,
                                            children: (0, r.jsxs)(U.XE, {
                                                id: 'profile-'.concat(t.id),
                                                children: [
                                                    (0, r.jsx)(U.V4, {
                                                        id: 'edit-profile',
                                                        action: 'EDIT_PROFILE',
                                                        label: Y.NW.string(Y.t.s5vZlZ),
                                                        icon: l.vdY,
                                                        onClick: () => {
                                                            eh(), n();
                                                        }
                                                    }),
                                                    (0, r.jsx)(O.Z, { className: K.menuDivider }),
                                                    (0, r.jsx)(U.V4, {
                                                        id: 'set-status',
                                                        action: 'PRESS_SET_STATUS',
                                                        label: (0, r.jsx)(V.Z, {}),
                                                        sublabel:
                                                            ec &&
                                                            null != eo &&
                                                            (0, r.jsx)(l.Text, {
                                                                color: 'currentColor',
                                                                variant: 'text-xs/medium',
                                                                children: eo
                                                            }),
                                                        icon: () =>
                                                            (0, r.jsx)(l.qbd, {
                                                                status: ea,
                                                                size: 12
                                                            }),
                                                        hint: (eu || ea === H.Skl.DND) && (0, r.jsx)(l.owu, { size: 'xxs' }),
                                                        renderSubmenu: s.tq
                                                            ? void 0
                                                            : (e) => {
                                                                  let { closePopout: t } = e;
                                                                  return (0, r.jsx)(U.gp, {
                                                                      navId: 'set-status-submenu',
                                                                      className: K.statusPickerModalMenu,
                                                                      'aria-label': Y.NW.string(Y.t.E13trK),
                                                                      onClose: t,
                                                                      children: eg
                                                                  });
                                                              },
                                                        onClick: s.tq
                                                            ? () => {
                                                                  n(),
                                                                      (0, l.ZDy)(
                                                                          () =>
                                                                              new Promise((e) =>
                                                                                  e((e) => {
                                                                                      var t,
                                                                                          n,
                                                                                          { onClose: i } = e,
                                                                                          s = (function (e, t) {
                                                                                              if (null == e) return {};
                                                                                              var n,
                                                                                                  r,
                                                                                                  i = (function (e, t) {
                                                                                                      if (null == e) return {};
                                                                                                      var n,
                                                                                                          r,
                                                                                                          i = {},
                                                                                                          s = Object.keys(e);
                                                                                                      for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                                                                      return i;
                                                                                                  })(e, t);
                                                                                              if (Object.getOwnPropertySymbols) {
                                                                                                  var s = Object.getOwnPropertySymbols(e);
                                                                                                  for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                                                                              }
                                                                                              return i;
                                                                                          })(e, ['onClose']);
                                                                                      return (0, r.jsx)(
                                                                                          l.Y0X,
                                                                                          ((t = X({}, s)),
                                                                                          (n = n =
                                                                                              {
                                                                                                  size: l.CgR.SMALL,
                                                                                                  'aria-label': Y.NW.string(Y.t['3Uj+2t']),
                                                                                                  className: K.statusPickerModal,
                                                                                                  children: (0, r.jsx)(l.v2r, {
                                                                                                      navId: 'set-status-submenu-mobile-web',
                                                                                                      variant: 'fixed',
                                                                                                      'aria-label': Y.NW.string(Y.t.E13trK),
                                                                                                      className: K.statusPickerModalMenu,
                                                                                                      hideScroller: !0,
                                                                                                      onClose: i,
                                                                                                      onSelect: void 0,
                                                                                                      children: eg
                                                                                                  })
                                                                                              }),
                                                                                          Object.getOwnPropertyDescriptors
                                                                                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                                                              : (function (e, t) {
                                                                                                    var n = Object.keys(e);
                                                                                                    if (Object.getOwnPropertySymbols) {
                                                                                                        var r = Object.getOwnPropertySymbols(e);
                                                                                                        n.push.apply(n, r);
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
                                        (0, r.jsx)(T.Z.Overlay, {
                                            className: K.menuOverlay,
                                            children: (0, r.jsxs)(U.XE, {
                                                id: 'account-'.concat(t.id),
                                                children: [
                                                    (0, r.jsx)(U.V4, {
                                                        id: 'switch-accounts',
                                                        action: 'PRESS_SWITCH_ACCOUNTS',
                                                        icon: l.lMe,
                                                        label: Y.NW.string(Y.t.oMNyYG),
                                                        onClick: () => {
                                                            n(), (0, F.Z)();
                                                        },
                                                        renderSubmenu: (e) => {
                                                            let { closePopout: t } = e;
                                                            return (0, r.jsx)(U.gp, {
                                                                navId: 'switch-accounts-submenu',
                                                                'aria-label': Y.NW.string(Y.t.wFhVqK),
                                                                onClose: t,
                                                                children: ep
                                                            });
                                                        }
                                                    }),
                                                    !__OVERLAY__ &&
                                                        k.wS &&
                                                        em &&
                                                        (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                (0, r.jsx)(O.Z, { className: K.menuDivider }),
                                                                (0, r.jsx)(U.V4, {
                                                                    id: 'copy-user-id',
                                                                    action: 'COPY_USER_ID',
                                                                    icon: l.VuL,
                                                                    label: Y.NW.string(Y.t['/AXYnJ']),
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
