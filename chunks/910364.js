t.d(n, { Z: () => D }), t(388685);
var o = t(255367),
    c = t(73800),
    i = t(950035),
    r = t(442837),
    a = t(481060),
    d = t(727637),
    l = t(616780),
    s = t(100527),
    u = t(906732),
    f = t(368326),
    _ = t(429467),
    p = t(680295),
    b = t(699516),
    m = t(5192),
    I = t(785717),
    y = t(221292),
    h = t(687158),
    x = t(510659),
    g = t(892001),
    j = t(113557),
    O = t(867176),
    v = t(451834),
    A = t(502762),
    Z = t(544989),
    N = t(481932),
    P = t(195387),
    C = t(664794),
    T = t(4517),
    w = t(62154),
    S = t(277094),
    E = t(228168),
    M = t(388032),
    R = t(405666);
function G(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            o.forEach(function (n) {
                var o;
                (o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = o);
            });
    }
    return e;
}
function B(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, o);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function D(e) {
    let { user: n, currentUser: t, guildId: D, channelId: L, messageId: k, roleId: U, sessionId: V, initialSection: F, initialSubsection: Y, transitionState: W, customStatusPrompt: q, openedAt: H, onClose: J, showGuildProfile: z = !0, sourceAnalyticsLocations: Q = [] } = e,
        { analyticsLocations: $ } = (0, u.ZP)([...Q, s.Z.USER_PROFILE_MODAL]),
        K = (0, I.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: V,
            guildId: D,
            channelId: L,
            messageId: k,
            roleId: U,
            showGuildProfile: z
        }),
        X = (0, x.$m)(),
        ee = (0, a.q_F)({
            opacity: +(null != X.interactionType),
            config: { duration: 150 }
        }),
        en = (0, h.ZP)(n.id, z ? D : void 0),
        et = (0, h.ZP)(n.id, D),
        eo = (0, r.e7)([b.Z], () => b.Z.getRelationshipType(n.id)),
        ec = n.id === t.id,
        ei = (0, f.p)({ location: 'UserProfileModal' }),
        er = c.useMemo(() => (null != q ? q : (0, _.Z)()), [q]),
        ea = c.useMemo(() => (null != D ? { [D]: [n.id] } : {}), [D, n.id]);
    (0, l.$)(ea);
    let ed = c.useRef(null),
        el = (0, d.Z)(ed);
    return (0, o.jsx)(u.Gt, {
        value: $,
        children: (0, o.jsx)(I.Mt, {
            value: K,
            openedAt: H,
            fetchStartedAt: null == en ? void 0 : en.fetchStartedAt,
            fetchEndedAt: null == en ? void 0 : en.fetchEndedAt,
            isLoaded: null == en ? void 0 : en.isLoaded,
            children: (0, o.jsx)(x.NJ, {
                value: X,
                children: (0, o.jsxs)(a.Y0X, {
                    transitionState: W,
                    className: R.root,
                    hideShadow: !0,
                    'aria-label': M.intl.string(M.t['3N/J2t']),
                    children: [
                        (0, o.jsxs)(A.Z, {
                            user: n,
                            displayProfile: en,
                            themeType: E.lY.MODAL,
                            ref: ed,
                            children: [
                                (0, o.jsxs)(Z.Z, {
                                    children: [
                                        (0, o.jsx)(P.Z, {
                                            shouldShowTooltip: null === X.interactionType,
                                            user: n,
                                            guildId: D,
                                            channelId: L,
                                            onClose: J
                                        }),
                                        (0, o.jsx)(N.Z, {
                                            shouldShowTooltip: null === X.interactionType,
                                            themeType: E.lY.MODAL,
                                            user: n
                                        }),
                                        (0, o.jsx)(C.Z, {
                                            type: 'banner',
                                            user: n,
                                            guildId: D,
                                            viewProfileItem:
                                                (null == et ? void 0 : et.guildId) == null
                                                    ? null
                                                    : (null == en ? void 0 : en.guildId) != null
                                                      ? (0, o.jsx)(a.sNh, {
                                                            id: 'view-main-profile',
                                                            label: M.intl.string(M.t.GISTtb),
                                                            subtext: M.intl.formatToPlainString(M.t['mn/nW1'], { displayName: m.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                J(),
                                                                    (0, g.openUserProfileModal)(
                                                                        B(G({}, K), {
                                                                            showGuildProfile: !1,
                                                                            sourceAnalyticsLocations: Q
                                                                        })
                                                                    ),
                                                                    (0, y.pQ)(
                                                                        G(
                                                                            {
                                                                                action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                                analyticsLocations: $
                                                                            },
                                                                            K
                                                                        )
                                                                    );
                                                            }
                                                        })
                                                      : (0, o.jsx)(a.sNh, {
                                                            id: 'view-server-profile',
                                                            label: M.intl.string(M.t.DisZzM),
                                                            subtext: M.intl.formatToPlainString(M.t['mn/nW1'], { displayName: m.ZP.getName(D, L, n) }),
                                                            action: () => {
                                                                J(),
                                                                    (0, g.openUserProfileModal)(
                                                                        B(G({}, K), {
                                                                            showGuildProfile: !0,
                                                                            sourceAnalyticsLocations: Q
                                                                        })
                                                                    ),
                                                                    (0, y.pQ)(
                                                                        G(
                                                                            {
                                                                                action: 'PRESS_VIEW_SERVER_PROFILE',
                                                                                analyticsLocations: $
                                                                            },
                                                                            K
                                                                        )
                                                                    );
                                                            }
                                                        })
                                        })
                                    ]
                                }),
                                (0, o.jsxs)('header', {
                                    children: [
                                        (0, o.jsx)(O.Z, {
                                            user: n,
                                            displayProfile: en,
                                            themeType: E.lY.MODAL
                                        }),
                                        (0, o.jsx)(v.Z, {
                                            userId: n.id,
                                            onClose: J,
                                            className: R.toast
                                        }),
                                        null != X.interactionType &&
                                            (0, o.jsx)(i.animated.div, {
                                                style: ee,
                                                className: R.backdrop
                                            }),
                                        (0, o.jsxs)('div', {
                                            className: R.headerInner,
                                            children: [
                                                (0, o.jsx)(j.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: en,
                                                    guildId: D,
                                                    channelId: L,
                                                    themeType: E.lY.MODAL
                                                }),
                                                (0, o.jsx)(T.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: D,
                                                    channelId: L,
                                                    themeType: E.lY.MODAL,
                                                    hasEntered: W === a.Dvm.ENTERED,
                                                    onCloseProfile: J,
                                                    prompt: ei && ec ? er : null
                                                }),
                                                (0, o.jsx)('div', {
                                                    className: R.headerButtons,
                                                    children: (0, o.jsx)(S.Z, {
                                                        user: n,
                                                        currentUser: t,
                                                        guildId: D,
                                                        relationshipType: eo,
                                                        onClose: J
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, o.jsx)(w.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: D,
                                    channelId: L,
                                    displayProfile: en,
                                    initialSection: F,
                                    initialSubsection: Y,
                                    onClose: J
                                })
                            ]
                        }),
                        (null == en ? void 0 : en.profileEffectId) != null &&
                            (0, o.jsx)(p.Z, {
                                profileEffectId: null == en ? void 0 : en.profileEffectId,
                                isHovering: el
                            })
                    ]
                })
            })
        })
    });
}
