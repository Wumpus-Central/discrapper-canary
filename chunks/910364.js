t.d(n, { Z: () => B }), t(388685);
var o = t(200651),
    c = t(192379),
    i = t(272573),
    r = t(442837),
    a = t(481060),
    d = t(727637),
    s = t(616780),
    l = t(100527),
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
    T = t(664794),
    C = t(4517),
    w = t(62154),
    S = t(277094),
    E = t(228168),
    M = t(388032),
    k = t(405666);
function R(e) {
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
function G(e, n) {
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
function B(e) {
    let { user: n, currentUser: t, guildId: B, channelId: D, messageId: L, roleId: U, sessionId: V, friendToken: F, initialSection: Y, initialSubsection: W, transitionState: q, customStatusPrompt: H, openedAt: J, onClose: z, showGuildProfile: Q = !0, sourceAnalyticsLocations: $ = [] } = e,
        { analyticsLocations: K } = (0, u.ZP)([...$, l.Z.USER_PROFILE_MODAL]),
        X = (0, I.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: V,
            guildId: B,
            channelId: D,
            messageId: L,
            roleId: U,
            showGuildProfile: Q
        }),
        ee = (0, x.$m)(),
        en = (0, a.q_F)({
            opacity: +(null != ee.interactionType),
            config: { duration: 150 }
        }),
        et = (0, h.ZP)(n.id, Q ? B : void 0),
        eo = (0, h.ZP)(n.id, B),
        ec = (0, r.e7)([b.Z], () => b.Z.getRelationshipType(n.id)),
        ei = n.id === t.id,
        er = (0, f.p)({ location: 'UserProfileModal' }),
        ea = c.useMemo(() => (null != H ? H : (0, _.Z)()), [H]),
        ed = c.useMemo(() => (null != B ? { [B]: [n.id] } : {}), [B, n.id]);
    (0, s.$)(ed);
    let es = c.createRef(),
        el = (0, d.Z)(es);
    return (0, o.jsx)(u.Gt, {
        value: K,
        children: (0, o.jsx)(I.Mt, {
            value: X,
            openedAt: J,
            fetchStartedAt: null == et ? void 0 : et.fetchStartedAt,
            fetchEndedAt: null == et ? void 0 : et.fetchEndedAt,
            isLoaded: null == et ? void 0 : et.isLoaded,
            children: (0, o.jsx)(x.NJ, {
                value: ee,
                children: (0, o.jsxs)(a.Y0X, {
                    transitionState: q,
                    className: k.root,
                    hideShadow: !0,
                    'aria-label': M.intl.string(M.t['3N/J2t']),
                    children: [
                        (0, o.jsxs)(A.Z, {
                            user: n,
                            displayProfile: et,
                            themeType: E.lY.MODAL,
                            ref: es,
                            children: [
                                (0, o.jsxs)(Z.Z, {
                                    children: [
                                        (0, o.jsx)(P.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            user: n,
                                            guildId: B,
                                            channelId: D,
                                            onClose: z
                                        }),
                                        (0, o.jsx)(N.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            themeType: E.lY.MODAL,
                                            user: n,
                                            friendToken: F
                                        }),
                                        (0, o.jsx)(T.Z, {
                                            type: 'banner',
                                            user: n,
                                            guildId: B,
                                            viewProfileItem:
                                                (null == eo ? void 0 : eo.guildId) == null
                                                    ? null
                                                    : (null == et ? void 0 : et.guildId) != null
                                                      ? (0, o.jsx)(a.sNh, {
                                                            id: 'view-main-profile',
                                                            label: M.intl.string(M.t.GISTtb),
                                                            subtext: M.intl.formatToPlainString(M.t['mn/nW1'], { displayName: m.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                z(),
                                                                    (0, g.openUserProfileModal)(
                                                                        G(R({}, X), {
                                                                            showGuildProfile: !1,
                                                                            friendToken: F,
                                                                            sourceAnalyticsLocations: $
                                                                        })
                                                                    ),
                                                                    (0, y.pQ)(
                                                                        R(
                                                                            {
                                                                                action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                                analyticsLocations: K
                                                                            },
                                                                            X
                                                                        )
                                                                    );
                                                            }
                                                        })
                                                      : (0, o.jsx)(a.sNh, {
                                                            id: 'view-server-profile',
                                                            label: M.intl.string(M.t.DisZzM),
                                                            subtext: M.intl.formatToPlainString(M.t['mn/nW1'], { displayName: m.ZP.getName(B, D, n) }),
                                                            action: () => {
                                                                z(),
                                                                    (0, g.openUserProfileModal)(
                                                                        G(R({}, X), {
                                                                            showGuildProfile: !0,
                                                                            friendToken: F,
                                                                            sourceAnalyticsLocations: $
                                                                        })
                                                                    ),
                                                                    (0, y.pQ)(
                                                                        R(
                                                                            {
                                                                                action: 'PRESS_VIEW_SERVER_PROFILE',
                                                                                analyticsLocations: K
                                                                            },
                                                                            X
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
                                            displayProfile: et,
                                            themeType: E.lY.MODAL
                                        }),
                                        (0, o.jsx)(v.Z, {
                                            userId: n.id,
                                            onClose: z,
                                            className: k.toast
                                        }),
                                        null != ee.interactionType &&
                                            (0, o.jsx)(i.animated.div, {
                                                style: en,
                                                className: k.backdrop
                                            }),
                                        (0, o.jsxs)('div', {
                                            className: k.headerInner,
                                            children: [
                                                (0, o.jsx)(j.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: et,
                                                    guildId: B,
                                                    channelId: D,
                                                    themeType: E.lY.MODAL
                                                }),
                                                (0, o.jsx)(C.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: B,
                                                    channelId: D,
                                                    themeType: E.lY.MODAL,
                                                    hasEntered: q === a.Dvm.ENTERED,
                                                    onCloseProfile: z,
                                                    prompt: er && ei ? ea : null
                                                }),
                                                (0, o.jsx)('div', {
                                                    className: k.headerButtons,
                                                    children: (0, o.jsx)(S.Z, {
                                                        user: n,
                                                        currentUser: t,
                                                        guildId: B,
                                                        relationshipType: ec,
                                                        friendToken: F,
                                                        onClose: z
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, o.jsx)(w.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: B,
                                    channelId: D,
                                    displayProfile: et,
                                    initialSection: Y,
                                    initialSubsection: W,
                                    friendToken: F,
                                    onClose: z
                                })
                            ]
                        }),
                        (null == et ? void 0 : et.profileEffectId) != null &&
                            (0, o.jsx)(p.Z, {
                                profileEffectId: null == et ? void 0 : et.profileEffectId,
                                isHovering: el
                            })
                    ]
                })
            })
        })
    });
}
