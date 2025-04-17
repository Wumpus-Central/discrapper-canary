t.d(n, { Z: () => B }), t(388685);
var o = t(200651),
    r = t(192379),
    i = t(200100),
    l = t(442837),
    s = t(481060),
    c = t(727637),
    a = t(616780),
    d = t(100527),
    u = t(906732),
    f = t(368326),
    p = t(429467),
    b = t(680295),
    m = t(699516),
    I = t(5192),
    h = t(785717),
    g = t(221292),
    y = t(687158),
    j = t(510659),
    v = t(113557),
    x = t(867176),
    _ = t(451834),
    Z = t(502762),
    O = t(544989),
    N = t(705556),
    E = t(481932),
    P = t(195387),
    S = t(272510),
    T = t(4517),
    C = t(171368),
    A = t(62154),
    L = t(412317),
    w = t(228168),
    R = t(388032),
    M = t(405666);
function U(e) {
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
function D(e, n) {
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
    let { user: n, currentUser: t, guildId: B, channelId: W, messageId: F, roleId: k, sessionId: G, friendToken: V, initialSection: Y, initialSubsection: z, transitionState: K, customStatusPrompt: J, openedAt: H, onClose: X, showGuildProfile: q = !0, sourceAnalyticsLocations: Q = [] } = e,
        { analyticsLocations: $ } = (0, u.ZP)([...Q, d.Z.SIMPLIFIED_PROFILE_MODAL]),
        ee = (0, h.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: G,
            guildId: B,
            channelId: W,
            messageId: F,
            roleId: k,
            showGuildProfile: q
        }),
        en = (0, j.$m)(),
        et = (0, s.q_F)({
            opacity: +(null != en.interactionType),
            config: { duration: 150 }
        }),
        eo = (0, y.ZP)(n.id, q ? B : void 0),
        er = (0, y.ZP)(n.id, B),
        ei = (0, l.e7)([m.Z], () => m.Z.getRelationshipType(n.id)),
        el = n.id === t.id,
        es = (0, f.p)({ location: 'UserProfileModal' }),
        ec = r.useMemo(() => (null != J ? J : (0, p.Z)()), [J]),
        ea = r.useMemo(() => (null != B ? { [B]: [n.id] } : {}), [B, n.id]);
    (0, a.$)(ea);
    let ed = r.createRef(),
        eu = (0, c.Z)(ed);
    return (0, o.jsx)(u.Gt, {
        value: $,
        children: (0, o.jsx)(h.Mt, {
            value: ee,
            openedAt: H,
            fetchStartedAt: null == eo ? void 0 : eo.fetchStartedAt,
            fetchEndedAt: null == eo ? void 0 : eo.fetchEndedAt,
            isLoaded: null == eo ? void 0 : eo.isLoaded,
            children: (0, o.jsx)(j.NJ, {
                value: en,
                children: (0, o.jsxs)(s.Y0X, {
                    transitionState: K,
                    className: M.root,
                    hideShadow: !0,
                    'aria-label': R.NW.string(R.t['3N/J2t']),
                    children: [
                        (0, o.jsxs)(Z.Z, {
                            user: n,
                            displayProfile: eo,
                            profileType: w.y0.FULL_SIZE,
                            ref: ed,
                            children: [
                                (0, o.jsxs)(O.Z, {
                                    profileType: w.y0.FULL_SIZE,
                                    children: [
                                        (0, o.jsx)(P.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            user: n,
                                            guildId: B,
                                            channelId: W,
                                            onClose: X
                                        }),
                                        (0, o.jsx)(E.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            profileType: w.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: V
                                        }),
                                        (0, o.jsx)(S.Z, {
                                            user: n,
                                            guildId: B,
                                            viewProfileItem:
                                                (null == er ? void 0 : er.guildId) == null
                                                    ? null
                                                    : (null == eo ? void 0 : eo.guildId) != null
                                                      ? (0, o.jsx)(s.sNh, {
                                                            id: 'view-main-profile',
                                                            label: R.NW.string(R.t.GISTtb),
                                                            subtext: R.NW.formatToPlainString(R.t['mn/nW1'], { displayName: I.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                X(),
                                                                    (0, C.openUserProfileModal)(
                                                                        D(U({}, ee), {
                                                                            showGuildProfile: !1,
                                                                            friendToken: V,
                                                                            sourceAnalyticsLocations: Q
                                                                        })
                                                                    ),
                                                                    (0, g.pQ)(
                                                                        U(
                                                                            {
                                                                                action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                                analyticsLocations: $
                                                                            },
                                                                            ee
                                                                        )
                                                                    );
                                                            }
                                                        })
                                                      : (0, o.jsx)(s.sNh, {
                                                            id: 'view-server-profile',
                                                            label: R.NW.string(R.t.DisZzM),
                                                            subtext: R.NW.formatToPlainString(R.t['mn/nW1'], { displayName: I.ZP.getName(B, W, n) }),
                                                            action: () => {
                                                                X(),
                                                                    (0, C.openUserProfileModal)(
                                                                        D(U({}, ee), {
                                                                            showGuildProfile: !0,
                                                                            friendToken: V,
                                                                            sourceAnalyticsLocations: Q
                                                                        })
                                                                    ),
                                                                    (0, g.pQ)(
                                                                        U(
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
                                (0, o.jsxs)('header', {
                                    children: [
                                        (0, o.jsx)(x.Z, {
                                            user: n,
                                            displayProfile: eo,
                                            profileType: w.y0.FULL_SIZE
                                        }),
                                        (0, o.jsx)(_.Z, {
                                            userId: n.id,
                                            onClose: X,
                                            className: M.toast
                                        }),
                                        null != en.interactionType &&
                                            (0, o.jsx)(i.animated.div, {
                                                style: et,
                                                className: M.backdrop
                                            }),
                                        (0, o.jsxs)('div', {
                                            className: M.headerInner,
                                            children: [
                                                (0, o.jsx)(v.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: eo,
                                                    guildId: B,
                                                    channelId: W,
                                                    profileType: w.y0.FULL_SIZE
                                                }),
                                                (0, o.jsx)(T.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: B,
                                                    channelId: W,
                                                    profileType: w.y0.FULL_SIZE,
                                                    hasEntered: K === s.Dvm.ENTERED,
                                                    onCloseProfile: X,
                                                    prompt: es && el ? ec : null
                                                }),
                                                (0, o.jsxs)('div', {
                                                    className: M.headerButtons,
                                                    children: [
                                                        (0, o.jsx)(L.Z, {
                                                            isCurrentUser: el,
                                                            user: n,
                                                            relationshipType: ei,
                                                            friendToken: V,
                                                            onClose: X
                                                        }),
                                                        (0, o.jsx)(N.Z, {
                                                            user: n,
                                                            guildId: B,
                                                            onClose: X
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, o.jsx)(A.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: B,
                                    channelId: W,
                                    displayProfile: eo,
                                    initialSection: Y,
                                    initialSubsection: z,
                                    friendToken: V,
                                    onClose: X
                                })
                            ]
                        }),
                        (null == eo ? void 0 : eo.profileEffectId) != null &&
                            (0, o.jsx)(b.Z, {
                                profileEffectId: null == eo ? void 0 : eo.profileEffectId,
                                isHovering: eu
                            })
                    ]
                })
            })
        })
    });
}
