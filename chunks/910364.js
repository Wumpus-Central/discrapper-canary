t.d(n, { Z: () => B }), t(388685);
var i = t(200651),
    o = t(192379),
    l = t(272573),
    r = t(442837),
    s = t(481060),
    a = t(727637),
    c = t(616780),
    d = t(100527),
    u = t(906732),
    f = t(368326),
    p = t(429467),
    m = t(680295),
    h = t(699516),
    x = t(5192),
    I = t(785717),
    j = t(221292),
    v = t(687158),
    b = t(510659),
    _ = t(892001),
    g = t(113557),
    Z = t(867176),
    y = t(451834),
    N = t(502762),
    A = t(544989),
    T = t(481932),
    O = t(195387),
    C = t(664794),
    E = t(4517),
    P = t(62154),
    S = t(277094),
    L = t(228168),
    M = t(388032),
    w = t(405666);
function D(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function U(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, i);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function B(e) {
    let { user: n, currentUser: t, guildId: B, channelId: G, messageId: R, roleId: k, sessionId: F, friendToken: Y, initialSection: V, initialSubsection: W, transitionState: z, customStatusPrompt: J, openedAt: K, onClose: q, showGuildProfile: H = !0, sourceAnalyticsLocations: X = [] } = e,
        { analyticsLocations: Q } = (0, u.ZP)([...X, d.Z.USER_PROFILE_MODAL]),
        $ = (0, I.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: F,
            guildId: B,
            channelId: G,
            messageId: R,
            roleId: k,
            showGuildProfile: H
        }),
        ee = (0, b.$m)(),
        en = (0, s.q_F)({
            opacity: +(null != ee.interactionType),
            config: { duration: 150 }
        }),
        et = (0, v.ZP)(n.id, H ? B : void 0),
        ei = (0, v.ZP)(n.id, B),
        eo = (0, r.e7)([h.Z], () => h.Z.getRelationshipType(n.id)),
        el = n.id === t.id,
        er = (0, f.p)({ location: 'UserProfileModal' }),
        es = o.useMemo(() => (null != J ? J : (0, p.Z)()), [J]),
        ea = o.useMemo(() => (null != B ? { [B]: [n.id] } : {}), [B, n.id]);
    (0, c.$)(ea);
    let ec = o.createRef(),
        ed = (0, a.Z)(ec);
    return (0, i.jsx)(u.Gt, {
        value: Q,
        children: (0, i.jsx)(I.Mt, {
            value: $,
            openedAt: K,
            fetchStartedAt: null == et ? void 0 : et.fetchStartedAt,
            fetchEndedAt: null == et ? void 0 : et.fetchEndedAt,
            isLoaded: null == et ? void 0 : et.isLoaded,
            children: (0, i.jsx)(b.NJ, {
                value: ee,
                children: (0, i.jsxs)(s.Y0X, {
                    transitionState: z,
                    className: w.root,
                    hideShadow: !0,
                    'aria-label': M.intl.string(M.t['3N/J2t']),
                    children: [
                        (0, i.jsxs)(N.Z, {
                            user: n,
                            displayProfile: et,
                            themeType: L.lY.MODAL,
                            ref: ec,
                            children: [
                                (0, i.jsxs)(A.Z, {
                                    children: [
                                        (0, i.jsx)(O.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            user: n,
                                            guildId: B,
                                            channelId: G,
                                            onClose: q
                                        }),
                                        (0, i.jsx)(T.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            themeType: L.lY.MODAL,
                                            user: n,
                                            friendToken: Y
                                        }),
                                        (0, i.jsx)(C.Z, {
                                            type: 'banner',
                                            user: n,
                                            guildId: B,
                                            viewProfileItem:
                                                (null == ei ? void 0 : ei.guildId) == null
                                                    ? null
                                                    : (null == et ? void 0 : et.guildId) != null
                                                      ? (0, i.jsx)(s.sNh, {
                                                            id: 'view-main-profile',
                                                            label: M.intl.string(M.t.GISTtb),
                                                            subtext: M.intl.formatToPlainString(M.t['mn/nW1'], { displayName: x.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                q(),
                                                                    (0, _.openUserProfileModal)(
                                                                        U(D({}, $), {
                                                                            showGuildProfile: !1,
                                                                            friendToken: Y,
                                                                            sourceAnalyticsLocations: X
                                                                        })
                                                                    ),
                                                                    (0, j.pQ)(
                                                                        D(
                                                                            {
                                                                                action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                                analyticsLocations: Q
                                                                            },
                                                                            $
                                                                        )
                                                                    );
                                                            }
                                                        })
                                                      : (0, i.jsx)(s.sNh, {
                                                            id: 'view-server-profile',
                                                            label: M.intl.string(M.t.DisZzM),
                                                            subtext: M.intl.formatToPlainString(M.t['mn/nW1'], { displayName: x.ZP.getName(B, G, n) }),
                                                            action: () => {
                                                                q(),
                                                                    (0, _.openUserProfileModal)(
                                                                        U(D({}, $), {
                                                                            showGuildProfile: !0,
                                                                            friendToken: Y,
                                                                            sourceAnalyticsLocations: X
                                                                        })
                                                                    ),
                                                                    (0, j.pQ)(
                                                                        D(
                                                                            {
                                                                                action: 'PRESS_VIEW_SERVER_PROFILE',
                                                                                analyticsLocations: Q
                                                                            },
                                                                            $
                                                                        )
                                                                    );
                                                            }
                                                        })
                                        })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    children: [
                                        (0, i.jsx)(Z.Z, {
                                            user: n,
                                            displayProfile: et,
                                            themeType: L.lY.MODAL
                                        }),
                                        (0, i.jsx)(y.Z, {
                                            userId: n.id,
                                            onClose: q,
                                            className: w.toast
                                        }),
                                        null != ee.interactionType &&
                                            (0, i.jsx)(l.animated.div, {
                                                style: en,
                                                className: w.backdrop
                                            }),
                                        (0, i.jsxs)('div', {
                                            className: w.headerInner,
                                            children: [
                                                (0, i.jsx)(g.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: et,
                                                    guildId: B,
                                                    channelId: G,
                                                    themeType: L.lY.MODAL
                                                }),
                                                (0, i.jsx)(E.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: B,
                                                    channelId: G,
                                                    themeType: L.lY.MODAL,
                                                    hasEntered: z === s.Dvm.ENTERED,
                                                    onCloseProfile: q,
                                                    prompt: er && el ? es : null
                                                }),
                                                (0, i.jsx)('div', {
                                                    className: w.headerButtons,
                                                    children: (0, i.jsx)(S.Z, {
                                                        user: n,
                                                        currentUser: t,
                                                        guildId: B,
                                                        relationshipType: eo,
                                                        friendToken: Y,
                                                        onClose: q
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(P.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: B,
                                    channelId: G,
                                    displayProfile: et,
                                    initialSection: V,
                                    initialSubsection: W,
                                    friendToken: Y,
                                    onClose: q
                                })
                            ]
                        }),
                        (null == et ? void 0 : et.profileEffectId) != null &&
                            (0, i.jsx)(m.Z, {
                                profileEffectId: null == et ? void 0 : et.profileEffectId,
                                isHovering: ed
                            })
                    ]
                })
            })
        })
    });
}
