t.d(n, { Z: () => G }), t(388685);
var l = t(200651),
    r = t(192379),
    i = t(272573),
    o = t(442837),
    s = t(481060),
    u = t(727637),
    a = t(616780),
    c = t(100527),
    d = t(906732),
    f = t(368326),
    p = t(429467),
    g = t(680295),
    b = t(699516),
    v = t(5192),
    h = t(785717),
    j = t(221292),
    m = t(687158),
    O = t(510659),
    y = t(892001),
    Z = t(113557),
    I = t(867176),
    x = t(451834),
    P = t(502762),
    E = t(544989),
    T = t(705556),
    N = t(481932),
    S = t(195387),
    C = t(272510),
    w = t(4517),
    A = t(62154),
    R = t(412317),
    _ = t(228168),
    M = t(388032),
    U = t(405666);
function D(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function L(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function G(e) {
    let { user: n, currentUser: t, guildId: G, channelId: k, messageId: B, roleId: V, sessionId: Y, friendToken: F, initialSection: W, initialSubsection: z, transitionState: K, customStatusPrompt: H, openedAt: X, onClose: J, showGuildProfile: q = !0, sourceAnalyticsLocations: Q = [] } = e,
        { analyticsLocations: $ } = (0, d.ZP)([...Q, c.Z.USER_PROFILE_MODAL]),
        ee = (0, h.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: Y,
            guildId: G,
            channelId: k,
            messageId: B,
            roleId: V,
            showGuildProfile: q
        }),
        en = (0, O.$m)(),
        et = (0, s.q_F)({
            opacity: +(null != en.interactionType),
            config: { duration: 150 }
        }),
        el = (0, m.ZP)(n.id, q ? G : void 0),
        er = (0, m.ZP)(n.id, G),
        ei = (0, o.e7)([b.Z], () => b.Z.getRelationshipType(n.id)),
        eo = n.id === t.id,
        es = (0, f.p)({ location: 'UserProfileModal' }),
        eu = r.useMemo(() => (null != H ? H : (0, p.Z)()), [H]),
        ea = r.useMemo(() => (null != G ? { [G]: [n.id] } : {}), [G, n.id]);
    (0, a.$)(ea);
    let ec = r.createRef(),
        ed = (0, u.Z)(ec);
    return (0, l.jsx)(d.Gt, {
        value: $,
        children: (0, l.jsx)(h.Mt, {
            value: ee,
            openedAt: X,
            fetchStartedAt: null == el ? void 0 : el.fetchStartedAt,
            fetchEndedAt: null == el ? void 0 : el.fetchEndedAt,
            isLoaded: null == el ? void 0 : el.isLoaded,
            children: (0, l.jsx)(O.NJ, {
                value: en,
                children: (0, l.jsxs)(s.Y0X, {
                    transitionState: K,
                    className: U.root,
                    hideShadow: !0,
                    'aria-label': M.intl.string(M.t['3N/J2t']),
                    children: [
                        (0, l.jsxs)(P.Z, {
                            user: n,
                            displayProfile: el,
                            themeType: _.lY.MODAL,
                            ref: ec,
                            children: [
                                (0, l.jsxs)(E.Z, {
                                    children: [
                                        (0, l.jsx)(S.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            user: n,
                                            guildId: G,
                                            channelId: k,
                                            onClose: J
                                        }),
                                        (0, l.jsx)(N.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            themeType: _.lY.MODAL,
                                            user: n,
                                            friendToken: F
                                        }),
                                        (0, l.jsx)(C.Z, {
                                            user: n,
                                            guildId: G,
                                            viewProfileItem:
                                                (null == er ? void 0 : er.guildId) == null
                                                    ? null
                                                    : (null == el ? void 0 : el.guildId) != null
                                                      ? (0, l.jsx)(s.sNh, {
                                                            id: 'view-main-profile',
                                                            label: M.intl.string(M.t.GISTtb),
                                                            subtext: M.intl.formatToPlainString(M.t['mn/nW1'], { displayName: v.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                J(),
                                                                    (0, y.openUserProfileModal)(
                                                                        L(D({}, ee), {
                                                                            showGuildProfile: !1,
                                                                            friendToken: F,
                                                                            sourceAnalyticsLocations: Q
                                                                        })
                                                                    ),
                                                                    (0, j.pQ)(
                                                                        D(
                                                                            {
                                                                                action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                                analyticsLocations: $
                                                                            },
                                                                            ee
                                                                        )
                                                                    );
                                                            }
                                                        })
                                                      : (0, l.jsx)(s.sNh, {
                                                            id: 'view-server-profile',
                                                            label: M.intl.string(M.t.DisZzM),
                                                            subtext: M.intl.formatToPlainString(M.t['mn/nW1'], { displayName: v.ZP.getName(G, k, n) }),
                                                            action: () => {
                                                                J(),
                                                                    (0, y.openUserProfileModal)(
                                                                        L(D({}, ee), {
                                                                            showGuildProfile: !0,
                                                                            friendToken: F,
                                                                            sourceAnalyticsLocations: Q
                                                                        })
                                                                    ),
                                                                    (0, j.pQ)(
                                                                        D(
                                                                            {
                                                                                action: 'PRESS_VIEW_SERVER_PROFILE',
                                                                                analyticsLocations: $
                                                                            },
                                                                            ee
                                                                        )
                                                                    );
                                                            }
                                                        })
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('header', {
                                    children: [
                                        (0, l.jsx)(I.Z, {
                                            user: n,
                                            displayProfile: el,
                                            themeType: _.lY.MODAL
                                        }),
                                        (0, l.jsx)(x.Z, {
                                            userId: n.id,
                                            onClose: J,
                                            className: U.toast
                                        }),
                                        null != en.interactionType &&
                                            (0, l.jsx)(i.animated.div, {
                                                style: et,
                                                className: U.backdrop
                                            }),
                                        (0, l.jsxs)('div', {
                                            className: U.headerInner,
                                            children: [
                                                (0, l.jsx)(Z.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: el,
                                                    guildId: G,
                                                    channelId: k,
                                                    themeType: _.lY.MODAL
                                                }),
                                                (0, l.jsx)(w.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: G,
                                                    channelId: k,
                                                    themeType: _.lY.MODAL,
                                                    hasEntered: K === s.Dvm.ENTERED,
                                                    onCloseProfile: J,
                                                    prompt: es && eo ? eu : null
                                                }),
                                                (0, l.jsxs)('div', {
                                                    className: U.headerButtons,
                                                    children: [
                                                        (0, l.jsx)(R.Z, {
                                                            isCurrentUser: eo,
                                                            user: n,
                                                            relationshipType: ei,
                                                            friendToken: F,
                                                            onClose: J
                                                        }),
                                                        (0, l.jsx)(T.Z, {
                                                            user: n,
                                                            guildId: G,
                                                            onClose: J
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, l.jsx)(A.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: G,
                                    channelId: k,
                                    displayProfile: el,
                                    initialSection: W,
                                    initialSubsection: z,
                                    friendToken: F,
                                    onClose: J
                                })
                            ]
                        }),
                        (null == el ? void 0 : el.profileEffectId) != null &&
                            (0, l.jsx)(g.Z, {
                                profileEffectId: null == el ? void 0 : el.profileEffectId,
                                isHovering: ed
                            })
                    ]
                })
            })
        })
    });
}
