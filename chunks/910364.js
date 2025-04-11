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
    I = t(5192),
    g = t(785717),
    y = t(221292),
    j = t(687158),
    h = t(510659),
    v = t(113557),
    x = t(867176),
    _ = t(451834),
    O = t(502762),
    Z = t(544989),
    N = t(705556),
    P = t(481932),
    E = t(195387),
    S = t(272510),
    T = t(4517),
    C = t(171368),
    A = t(62154),
    w = t(412317),
    L = t(228168),
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
    let { user: n, currentUser: t, guildId: B, channelId: W, messageId: F, roleId: k, sessionId: G, friendToken: V, initialSection: Y, initialSubsection: z, transitionState: K, customStatusPrompt: J, onClose: H, showGuildProfile: X = !0, sourceAnalyticsLocations: q = [] } = e,
        { analyticsLocations: Q } = (0, u.ZP)([...q, d.Z.SIMPLIFIED_PROFILE_MODAL]),
        $ = (0, g.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: G,
            guildId: B,
            channelId: W,
            messageId: F,
            roleId: k,
            showGuildProfile: X
        }),
        ee = (0, h.$m)(),
        en = (0, s.q_F)({
            opacity: +(null != ee.interactionType),
            config: { duration: 150 }
        }),
        et = (0, j.ZP)(n.id, X ? B : void 0),
        er = (0, j.ZP)(n.id, B),
        eo = (0, l.e7)([m.Z], () => m.Z.getRelationshipType(n.id)),
        ei = n.id === t.id,
        el = (0, f.p)({ location: 'UserProfileModal' }),
        es = o.useMemo(() => (null != J ? J : (0, p.Z)()), [J]),
        ec = o.useMemo(() => (null != B ? { [B]: [n.id] } : {}), [B, n.id]);
    (0, a.$)(ec);
    let ea = o.createRef(),
        ed = (0, c.Z)(ea);
    return (0, r.jsx)(u.Gt, {
        value: Q,
        children: (0, r.jsx)(g.Mt, {
            value: $,
            children: (0, r.jsx)(h.NJ, {
                value: ee,
                children: (0, r.jsxs)(s.Y0X, {
                    transitionState: K,
                    className: M.root,
                    hideShadow: !0,
                    'aria-label': R.NW.string(R.t['3N/J2t']),
                    children: [
                        (0, r.jsxs)(O.Z, {
                            user: n,
                            displayProfile: et,
                            profileType: L.y0.FULL_SIZE,
                            ref: ea,
                            children: [
                                (0, r.jsxs)(Z.Z, {
                                    profileType: L.y0.FULL_SIZE,
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            user: n,
                                            guildId: B,
                                            channelId: W,
                                            onClose: H
                                        }),
                                        (0, r.jsx)(P.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            profileType: L.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: V
                                        }),
                                        (0, r.jsx)(S.Z, {
                                            user: n,
                                            guildId: B,
                                            viewProfileItem:
                                                (null == er ? void 0 : er.guildId) == null
                                                    ? null
                                                    : (null == et ? void 0 : et.guildId) != null
                                                      ? (0, r.jsx)(s.sNh, {
                                                            id: 'view-main-profile',
                                                            label: R.NW.string(R.t.GISTtb),
                                                            subtext: R.NW.formatToPlainString(R.t['mn/nW1'], { displayName: I.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                H(),
                                                                    (0, C.openUserProfileModal)(
                                                                        D(U({}, $), {
                                                                            showGuildProfile: !1,
                                                                            friendToken: V,
                                                                            sourceAnalyticsLocations: q
                                                                        })
                                                                    ),
                                                                    (0, y.pQ)(
                                                                        U(
                                                                            {
                                                                                action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                                analyticsLocations: Q
                                                                            },
                                                                            $
                                                                        )
                                                                    );
                                                            }
                                                        })
                                                      : (0, r.jsx)(s.sNh, {
                                                            id: 'view-server-profile',
                                                            label: R.NW.string(R.t.DisZzM),
                                                            subtext: R.NW.formatToPlainString(R.t['mn/nW1'], { displayName: I.ZP.getName(B, W, n) }),
                                                            action: () => {
                                                                H(),
                                                                    (0, C.openUserProfileModal)(
                                                                        D(U({}, $), {
                                                                            showGuildProfile: !0,
                                                                            friendToken: V,
                                                                            sourceAnalyticsLocations: q
                                                                        })
                                                                    ),
                                                                    (0, y.pQ)(
                                                                        U(
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
                                (0, r.jsxs)('header', {
                                    children: [
                                        (0, r.jsx)(x.Z, {
                                            user: n,
                                            displayProfile: et,
                                            profileType: L.y0.FULL_SIZE
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            userId: n.id,
                                            onClose: H,
                                            className: M.toast
                                        }),
                                        null != ee.interactionType &&
                                            (0, r.jsx)(i.animated.div, {
                                                style: en,
                                                className: M.backdrop
                                            }),
                                        (0, r.jsxs)('div', {
                                            className: M.headerInner,
                                            children: [
                                                (0, r.jsx)(v.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: et,
                                                    guildId: B,
                                                    channelId: W,
                                                    profileType: L.y0.FULL_SIZE
                                                }),
                                                (0, r.jsx)(T.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: B,
                                                    channelId: W,
                                                    profileType: L.y0.FULL_SIZE,
                                                    hasEntered: K === s.Dvm.ENTERED,
                                                    onCloseProfile: H,
                                                    prompt: el && ei ? es : null
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: M.headerButtons,
                                                    children: [
                                                        (0, r.jsx)(w.Z, {
                                                            isCurrentUser: ei,
                                                            user: n,
                                                            relationshipType: eo,
                                                            friendToken: V,
                                                            onClose: H
                                                        }),
                                                        (0, r.jsx)(N.Z, {
                                                            user: n,
                                                            guildId: B,
                                                            onClose: H
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(A.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: B,
                                    channelId: W,
                                    displayProfile: et,
                                    initialSection: Y,
                                    initialSubsection: z,
                                    friendToken: V,
                                    onClose: H
                                })
                            ]
                        }),
                        (null == et ? void 0 : et.profileEffectId) != null &&
                            (0, r.jsx)(b.Z, {
                                profileEffectId: null == et ? void 0 : et.profileEffectId,
                                isHovering: ed
                            })
                    ]
                })
            })
        })
    });
}
