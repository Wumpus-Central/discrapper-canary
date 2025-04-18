t.d(n, { Z: () => B }), t(388685);
var r = t(200651),
    o = t(192379),
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
    h = t(5192),
    I = t(785717),
    g = t(221292),
    y = t(687158),
    j = t(510659),
    v = t(113557),
    x = t(867176),
    _ = t(451834),
    Z = t(502762),
    O = t(544989),
    N = t(705556),
    P = t(481932),
    E = t(195387),
    S = t(272510),
    T = t(4517),
    A = t(171368),
    C = t(62154),
    L = t(412317),
    w = t(228168),
    R = t(388032),
    M = t(405666);
function U(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function B(e) {
    let { user: n, currentUser: t, guildId: B, channelId: W, messageId: G, roleId: F, sessionId: k, friendToken: V, initialSection: Y, initialSubsection: z, transitionState: K, customStatusPrompt: J, openedAt: H, onClose: X, showGuildProfile: q = !0, sourceAnalyticsLocations: Q = [] } = e,
        { analyticsLocations: $ } = (0, u.ZP)([...Q, d.Z.SIMPLIFIED_PROFILE_MODAL]),
        ee = (0, I.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: k,
            guildId: B,
            channelId: W,
            messageId: G,
            roleId: F,
            showGuildProfile: q
        }),
        en = (0, j.$m)(),
        et = (0, s.q_F)({
            opacity: +(null != en.interactionType),
            config: { duration: 150 }
        }),
        er = (0, y.ZP)(n.id, q ? B : void 0),
        eo = (0, y.ZP)(n.id, B),
        ei = (0, l.e7)([m.Z], () => m.Z.getRelationshipType(n.id)),
        el = n.id === t.id,
        es = (0, f.p)({ location: 'UserProfileModal' }),
        ec = o.useMemo(() => (null != J ? J : (0, p.Z)()), [J]),
        ea = o.useMemo(() => (null != B ? { [B]: [n.id] } : {}), [B, n.id]);
    (0, a.$)(ea);
    let ed = o.createRef(),
        eu = (0, c.Z)(ed);
    return (0, r.jsx)(u.Gt, {
        value: $,
        children: (0, r.jsx)(I.Mt, {
            value: ee,
            openedAt: H,
            fetchStartedAt: null == er ? void 0 : er.fetchStartedAt,
            fetchEndedAt: null == er ? void 0 : er.fetchEndedAt,
            isLoaded: null == er ? void 0 : er.isLoaded,
            children: (0, r.jsx)(j.NJ, {
                value: en,
                children: (0, r.jsxs)(s.Y0X, {
                    transitionState: K,
                    className: M.root,
                    hideShadow: !0,
                    'aria-label': R.NW.string(R.t['3N/J2t']),
                    children: [
                        (0, r.jsxs)(Z.Z, {
                            user: n,
                            displayProfile: er,
                            profileType: w.y0.FULL_SIZE,
                            ref: ed,
                            children: [
                                (0, r.jsxs)(O.Z, {
                                    profileType: w.y0.FULL_SIZE,
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            user: n,
                                            guildId: B,
                                            channelId: W,
                                            onClose: X
                                        }),
                                        (0, r.jsx)(P.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            profileType: w.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: V
                                        }),
                                        (0, r.jsx)(S.Z, {
                                            user: n,
                                            guildId: B,
                                            viewProfileItem:
                                                (null == eo ? void 0 : eo.guildId) == null
                                                    ? null
                                                    : (null == er ? void 0 : er.guildId) != null
                                                      ? (0, r.jsx)(s.sNh, {
                                                            id: 'view-main-profile',
                                                            label: R.NW.string(R.t.GISTtb),
                                                            subtext: R.NW.formatToPlainString(R.t['mn/nW1'], { displayName: h.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                X(),
                                                                    (0, A.openUserProfileModal)(
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
                                                      : (0, r.jsx)(s.sNh, {
                                                            id: 'view-server-profile',
                                                            label: R.NW.string(R.t.DisZzM),
                                                            subtext: R.NW.formatToPlainString(R.t['mn/nW1'], { displayName: h.ZP.getName(B, W, n) }),
                                                            action: () => {
                                                                X(),
                                                                    (0, A.openUserProfileModal)(
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
                                (0, r.jsxs)('header', {
                                    children: [
                                        (0, r.jsx)(x.Z, {
                                            user: n,
                                            displayProfile: er,
                                            profileType: w.y0.FULL_SIZE
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            userId: n.id,
                                            onClose: X,
                                            className: M.toast
                                        }),
                                        null != en.interactionType &&
                                            (0, r.jsx)(i.animated.div, {
                                                style: et,
                                                className: M.backdrop
                                            }),
                                        (0, r.jsxs)('div', {
                                            className: M.headerInner,
                                            children: [
                                                (0, r.jsx)(v.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: er,
                                                    guildId: B,
                                                    channelId: W,
                                                    profileType: w.y0.FULL_SIZE
                                                }),
                                                (0, r.jsx)(T.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: B,
                                                    channelId: W,
                                                    profileType: w.y0.FULL_SIZE,
                                                    hasEntered: K === s.Dvm.ENTERED,
                                                    onCloseProfile: X,
                                                    prompt: es && el ? ec : null
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: M.headerButtons,
                                                    children: [
                                                        (0, r.jsx)(L.Z, {
                                                            isCurrentUser: el,
                                                            user: n,
                                                            relationshipType: ei,
                                                            friendToken: V,
                                                            onClose: X
                                                        }),
                                                        (0, r.jsx)(N.Z, {
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
                                (0, r.jsx)(C.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: B,
                                    channelId: W,
                                    displayProfile: er,
                                    initialSection: Y,
                                    initialSubsection: z,
                                    friendToken: V,
                                    onClose: X
                                })
                            ]
                        }),
                        (null == er ? void 0 : er.profileEffectId) != null &&
                            (0, r.jsx)(b.Z, {
                                profileEffectId: null == er ? void 0 : er.profileEffectId,
                                isHovering: eu
                            })
                    ]
                })
            })
        })
    });
}
