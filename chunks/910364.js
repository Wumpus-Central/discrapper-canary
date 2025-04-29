t.d(n, { Z: () => D }), t(388685);
var o = t(200651),
    i = t(192379),
    c = t(272573),
    r = t(442837),
    a = t(481060),
    l = t(727637),
    d = t(616780),
    s = t(100527),
    u = t(906732),
    f = t(368326),
    p = t(429467),
    _ = t(680295),
    b = t(699516),
    m = t(5192),
    I = t(785717),
    h = t(221292),
    y = t(687158),
    x = t(510659),
    g = t(892001),
    v = t(113557),
    j = t(867176),
    A = t(451834),
    Z = t(502762),
    O = t(544989),
    N = t(481932),
    P = t(195387),
    C = t(664794),
    T = t(4517),
    w = t(62154),
    S = t(277094),
    M = t(228168),
    E = t(388032),
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
    let { user: n, currentUser: t, guildId: D, channelId: G, messageId: L, roleId: U, sessionId: V, friendToken: F, initialSection: W, initialSubsection: Y, transitionState: q, customStatusPrompt: H, openedAt: J, onClose: z, showGuildProfile: Q = !0, sourceAnalyticsLocations: $ = [] } = e,
        { analyticsLocations: K } = (0, u.ZP)([...$, s.Z.USER_PROFILE_MODAL]),
        X = (0, I.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: V,
            guildId: D,
            channelId: G,
            messageId: L,
            roleId: U,
            showGuildProfile: Q
        }),
        ee = (0, x.$m)(),
        en = (0, a.q_F)({
            opacity: +(null != ee.interactionType),
            config: { duration: 150 }
        }),
        et = (0, y.ZP)(n.id, Q ? D : void 0),
        eo = (0, y.ZP)(n.id, D),
        ei = (0, r.e7)([b.Z], () => b.Z.getRelationshipType(n.id)),
        ec = n.id === t.id,
        er = (0, f.p)({ location: 'UserProfileModal' }),
        ea = i.useMemo(() => (null != H ? H : (0, p.Z)()), [H]),
        el = i.useMemo(() => (null != D ? { [D]: [n.id] } : {}), [D, n.id]);
    (0, d.$)(el);
    let ed = i.createRef(),
        es = (0, l.Z)(ed);
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
                    'aria-label': E.intl.string(E.t['3N/J2t']),
                    children: [
                        (0, o.jsxs)(Z.Z, {
                            user: n,
                            displayProfile: et,
                            themeType: M.lY.MODAL,
                            ref: ed,
                            children: [
                                (0, o.jsxs)(O.Z, {
                                    children: [
                                        (0, o.jsx)(P.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            user: n,
                                            guildId: D,
                                            channelId: G,
                                            onClose: z
                                        }),
                                        (0, o.jsx)(N.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            themeType: M.lY.MODAL,
                                            user: n,
                                            friendToken: F
                                        }),
                                        (0, o.jsx)(C.Z, {
                                            type: 'banner',
                                            user: n,
                                            guildId: D,
                                            viewProfileItem:
                                                (null == eo ? void 0 : eo.guildId) == null
                                                    ? null
                                                    : (null == et ? void 0 : et.guildId) != null
                                                      ? (0, o.jsx)(a.sNh, {
                                                            id: 'view-main-profile',
                                                            label: E.intl.string(E.t.GISTtb),
                                                            subtext: E.intl.formatToPlainString(E.t['mn/nW1'], { displayName: m.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                z(),
                                                                    (0, g.openUserProfileModal)(
                                                                        B(R({}, X), {
                                                                            showGuildProfile: !1,
                                                                            friendToken: F,
                                                                            sourceAnalyticsLocations: $
                                                                        })
                                                                    ),
                                                                    (0, h.pQ)(
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
                                                            label: E.intl.string(E.t.DisZzM),
                                                            subtext: E.intl.formatToPlainString(E.t['mn/nW1'], { displayName: m.ZP.getName(D, G, n) }),
                                                            action: () => {
                                                                z(),
                                                                    (0, g.openUserProfileModal)(
                                                                        B(R({}, X), {
                                                                            showGuildProfile: !0,
                                                                            friendToken: F,
                                                                            sourceAnalyticsLocations: $
                                                                        })
                                                                    ),
                                                                    (0, h.pQ)(
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
                                        (0, o.jsx)(j.Z, {
                                            user: n,
                                            displayProfile: et,
                                            themeType: M.lY.MODAL
                                        }),
                                        (0, o.jsx)(A.Z, {
                                            userId: n.id,
                                            onClose: z,
                                            className: k.toast
                                        }),
                                        null != ee.interactionType &&
                                            (0, o.jsx)(c.animated.div, {
                                                style: en,
                                                className: k.backdrop
                                            }),
                                        (0, o.jsxs)('div', {
                                            className: k.headerInner,
                                            children: [
                                                (0, o.jsx)(v.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: et,
                                                    guildId: D,
                                                    channelId: G,
                                                    themeType: M.lY.MODAL
                                                }),
                                                (0, o.jsx)(T.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: D,
                                                    channelId: G,
                                                    themeType: M.lY.MODAL,
                                                    hasEntered: q === a.Dvm.ENTERED,
                                                    onCloseProfile: z,
                                                    prompt: er && ec ? ea : null
                                                }),
                                                (0, o.jsx)('div', {
                                                    className: k.headerButtons,
                                                    children: (0, o.jsx)(S.Z, {
                                                        user: n,
                                                        currentUser: t,
                                                        guildId: D,
                                                        relationshipType: ei,
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
                                    guildId: D,
                                    channelId: G,
                                    displayProfile: et,
                                    initialSection: W,
                                    initialSubsection: Y,
                                    friendToken: F,
                                    onClose: z
                                })
                            ]
                        }),
                        (null == et ? void 0 : et.profileEffectId) != null &&
                            (0, o.jsx)(_.Z, {
                                profileEffectId: null == et ? void 0 : et.profileEffectId,
                                isHovering: es
                            })
                    ]
                })
            })
        })
    });
}
