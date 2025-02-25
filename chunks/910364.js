t.d(n, { Z: () => R }), t(47120);
var r = t(200651),
    o = t(192379),
    i = t(642128),
    l = t(442837),
    s = t(481060),
    c = t(727637),
    a = t(616780),
    d = t(100527),
    u = t(906732),
    f = t(680295),
    p = t(699516),
    m = t(5192),
    b = t(785717),
    g = t(221292),
    v = t(687158),
    y = t(510659),
    I = t(113557),
    h = t(867176),
    j = t(451834),
    x = t(502762),
    _ = t(544989),
    O = t(705556),
    Z = t(481932),
    N = t(195387),
    P = t(272510),
    E = t(4517),
    S = t(171368),
    T = t(62154),
    C = t(412317),
    L = t(228168),
    A = t(388032),
    w = t(608685);
function M(e) {
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
function U(e, n) {
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
function R(e) {
    let { user: n, currentUser: t, guildId: R, channelId: B, messageId: W, roleId: D, sessionId: F, friendToken: k, initialSection: G, initialSubsection: V, transitionState: Y, onClose: K, showGuildProfile: J = !0, sourceAnalyticsLocations: X = [] } = e,
        { analyticsLocations: q } = (0, u.ZP)([...X, d.Z.SIMPLIFIED_PROFILE_MODAL]),
        z = (0, b.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: F,
            guildId: R,
            channelId: B,
            messageId: W,
            roleId: D,
            showGuildProfile: J
        }),
        H = (0, y.$m)(),
        Q = (0, s.q_F)({
            opacity: +(null != H.interactionType),
            config: { duration: 150 }
        }),
        $ = (0, v.ZP)(n.id, J ? R : void 0),
        ee = (0, v.ZP)(n.id, R),
        en = (0, l.e7)([p.Z], () => p.Z.getRelationshipType(n.id)),
        et = n.id === t.id,
        er = o.useMemo(() => (null != R ? { [R]: [n.id] } : {}), [R, n.id]);
    (0, a.$)(er);
    let eo = o.createRef(),
        ei = (0, c.Z)(eo);
    return (0, r.jsx)(u.Gt, {
        value: q,
        children: (0, r.jsx)(b.Mt, {
            value: z,
            children: (0, r.jsx)(y.NJ, {
                value: H,
                children: (0, r.jsxs)(s.Y0X, {
                    transitionState: Y,
                    className: w.root,
                    hideShadow: !0,
                    'aria-label': A.NW.string(A.t['3N/J2t']),
                    children: [
                        (0, r.jsxs)(x.Z, {
                            user: n,
                            displayProfile: $,
                            profileType: L.y0.FULL_SIZE,
                            ref: eo,
                            children: [
                                (0, r.jsxs)(_.Z, {
                                    profileType: L.y0.FULL_SIZE,
                                    children: [
                                        (0, r.jsx)(N.Z, {
                                            shouldShowTooltip: null === H.interactionType,
                                            user: n,
                                            guildId: R,
                                            channelId: B,
                                            onClose: K
                                        }),
                                        (0, r.jsx)(Z.Z, {
                                            shouldShowTooltip: null === H.interactionType,
                                            profileType: L.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: k
                                        }),
                                        (0, r.jsx)(P.Z, {
                                            user: n,
                                            guildId: R,
                                            viewProfileItem:
                                                (null == ee ? void 0 : ee.guildId) == null
                                                    ? null
                                                    : (null == $ ? void 0 : $.guildId) != null
                                                      ? (0, r.jsx)(s.sNh, {
                                                            id: 'view-main-profile',
                                                            label: A.NW.string(A.t.GISTtb),
                                                            subtext: A.NW.formatToPlainString(A.t['mn/nW1'], { displayName: m.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                K(),
                                                                    (0, S.openUserProfileModal)(
                                                                        U(M({}, z), {
                                                                            showGuildProfile: !1,
                                                                            friendToken: k,
                                                                            sourceAnalyticsLocations: X
                                                                        })
                                                                    ),
                                                                    (0, g.pQ)(
                                                                        M(
                                                                            {
                                                                                action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                                analyticsLocations: q
                                                                            },
                                                                            z
                                                                        )
                                                                    );
                                                            }
                                                        })
                                                      : (0, r.jsx)(s.sNh, {
                                                            id: 'view-server-profile',
                                                            label: A.NW.string(A.t.DisZzM),
                                                            subtext: A.NW.formatToPlainString(A.t['mn/nW1'], { displayName: m.ZP.getName(R, B, n) }),
                                                            action: () => {
                                                                K(),
                                                                    (0, S.openUserProfileModal)(
                                                                        U(M({}, z), {
                                                                            showGuildProfile: !0,
                                                                            friendToken: k,
                                                                            sourceAnalyticsLocations: X
                                                                        })
                                                                    ),
                                                                    (0, g.pQ)(
                                                                        M(
                                                                            {
                                                                                action: 'PRESS_VIEW_SERVER_PROFILE',
                                                                                analyticsLocations: q
                                                                            },
                                                                            z
                                                                        )
                                                                    );
                                                            }
                                                        })
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    children: [
                                        (0, r.jsx)(h.Z, {
                                            user: n,
                                            displayProfile: $,
                                            profileType: L.y0.FULL_SIZE
                                        }),
                                        (0, r.jsx)(j.Z, {
                                            userId: n.id,
                                            onClose: K,
                                            className: w.toast
                                        }),
                                        null != H.interactionType &&
                                            (0, r.jsx)(i.animated.div, {
                                                style: Q,
                                                className: w.backdrop
                                            }),
                                        (0, r.jsxs)('div', {
                                            className: w.headerInner,
                                            children: [
                                                (0, r.jsx)(I.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: $,
                                                    guildId: R,
                                                    channelId: B,
                                                    profileType: L.y0.FULL_SIZE
                                                }),
                                                (0, r.jsx)(E.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: R,
                                                    channelId: B,
                                                    profileType: L.y0.FULL_SIZE,
                                                    hasEntered: Y === s.Dvm.ENTERED,
                                                    onCloseProfile: K
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: w.headerButtons,
                                                    children: [
                                                        (0, r.jsx)(C.Z, {
                                                            isCurrentUser: et,
                                                            user: n,
                                                            relationshipType: en,
                                                            friendToken: k,
                                                            onClose: K
                                                        }),
                                                        (0, r.jsx)(O.Z, {
                                                            user: n,
                                                            guildId: R,
                                                            onClose: K
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(T.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: R,
                                    channelId: B,
                                    displayProfile: $,
                                    initialSection: G,
                                    initialSubsection: V,
                                    friendToken: k,
                                    onClose: K
                                })
                            ]
                        }),
                        (null == $ ? void 0 : $.profileEffectId) != null &&
                            (0, r.jsx)(f.Z, {
                                profileEffectId: null == $ ? void 0 : $.profileEffectId,
                                isHovering: ei
                            })
                    ]
                })
            })
        })
    });
}
