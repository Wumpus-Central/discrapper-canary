t.d(n, { Z: () => B }), t(47120);
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
    I = t(221292),
    g = t(687158),
    y = t(326094),
    v = t(510659),
    j = t(113557),
    h = t(867176),
    x = t(451834),
    O = t(502762),
    _ = t(544989),
    Z = t(705556),
    N = t(481932),
    P = t(195387),
    E = t(272510),
    S = t(4517),
    T = t(171368),
    C = t(62154),
    L = t(412317),
    w = t(228168),
    A = t(981631),
    R = t(388032),
    M = t(608685);
function D(e) {
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
function B(e) {
    let { user: n, currentUser: t, guildId: B, channelId: W, messageId: F, roleId: G, sessionId: k, friendToken: V, initialSection: Y, initialSubsection: K, transitionState: J, onClose: X, showGuildProfile: q = !0, sourceAnalyticsLocations: z = [] } = e,
        { analyticsLocations: H } = (0, u.ZP)([...z, d.Z.SIMPLIFIED_PROFILE_MODAL]),
        Q = (0, y.Z)({
            user: n,
            currentUser: t,
            location: A.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        $ = (0, b.ZB)({
            layout: Q ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: k,
            guildId: B,
            channelId: W,
            messageId: F,
            roleId: G,
            showGuildProfile: q
        }),
        ee = (0, v.$m)(),
        en = (0, s.q_F)({
            opacity: +(null != ee.interactionType),
            config: { duration: 150 }
        }),
        et = (0, g.ZP)(n.id, q ? B : void 0),
        er = (0, g.ZP)(n.id, B),
        eo = (0, l.e7)([p.Z], () => p.Z.getRelationshipType(n.id)),
        ei = n.id === t.id,
        el = o.useMemo(() => (null != B ? { [B]: [n.id] } : {}), [B, n.id]);
    (0, a.$)(el);
    let es = o.createRef(),
        ec = (0, c.Z)(es);
    return (0, r.jsx)(u.Gt, {
        value: H,
        children: (0, r.jsx)(b.Mt, {
            value: $,
            children: (0, r.jsx)(v.NJ, {
                value: ee,
                children: (0, r.jsxs)(s.Y0X, {
                    transitionState: J,
                    className: M.root,
                    hideShadow: !0,
                    'aria-label': R.NW.string(R.t['3N/J2t']),
                    children: [
                        (0, r.jsxs)(O.Z, {
                            user: n,
                            displayProfile: et,
                            profileType: w.y0.FULL_SIZE,
                            ref: es,
                            children: [
                                (0, r.jsxs)(_.Z, {
                                    profileType: w.y0.FULL_SIZE,
                                    children: [
                                        (0, r.jsx)(P.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            user: n,
                                            guildId: B,
                                            channelId: W,
                                            onClose: X
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            profileType: w.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: V
                                        }),
                                        (0, r.jsx)(E.Z, {
                                            user: n,
                                            guildId: B,
                                            viewProfileItem:
                                                (null == er ? void 0 : er.guildId) == null
                                                    ? null
                                                    : (null == et ? void 0 : et.guildId) != null
                                                      ? (0, r.jsx)(s.sNh, {
                                                            id: 'view-main-profile',
                                                            label: R.NW.string(R.t.GISTtb),
                                                            subtext: R.NW.formatToPlainString(R.t['mn/nW1'], { displayName: m.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                X(),
                                                                    (0, T.openUserProfileModal)(
                                                                        U(D({}, $), {
                                                                            showGuildProfile: !1,
                                                                            friendToken: V,
                                                                            sourceAnalyticsLocations: z
                                                                        })
                                                                    ),
                                                                    (0, I.pQ)(
                                                                        D(
                                                                            {
                                                                                action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                                analyticsLocations: H
                                                                            },
                                                                            $
                                                                        )
                                                                    );
                                                            }
                                                        })
                                                      : (0, r.jsx)(s.sNh, {
                                                            id: 'view-server-profile',
                                                            label: R.NW.string(R.t.DisZzM),
                                                            subtext: R.NW.formatToPlainString(R.t['mn/nW1'], { displayName: m.ZP.getName(B, W, n) }),
                                                            action: () => {
                                                                X(),
                                                                    (0, T.openUserProfileModal)(
                                                                        U(D({}, $), {
                                                                            showGuildProfile: !0,
                                                                            friendToken: V,
                                                                            sourceAnalyticsLocations: z
                                                                        })
                                                                    ),
                                                                    (0, I.pQ)(
                                                                        D(
                                                                            {
                                                                                action: 'PRESS_VIEW_SERVER_PROFILE',
                                                                                analyticsLocations: H
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
                                        (0, r.jsx)(h.Z, {
                                            user: n,
                                            displayProfile: et,
                                            profileType: w.y0.FULL_SIZE
                                        }),
                                        (0, r.jsx)(x.Z, {
                                            userId: n.id,
                                            onClose: X,
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
                                                (0, r.jsx)(j.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: et,
                                                    guildId: B,
                                                    channelId: W,
                                                    profileType: w.y0.FULL_SIZE
                                                }),
                                                (0, r.jsx)(S.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: B,
                                                    channelId: W,
                                                    profileType: w.y0.FULL_SIZE,
                                                    hasEntered: J === s.Dvm.ENTERED,
                                                    onCloseProfile: X
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: M.headerButtons,
                                                    children: [
                                                        (0, r.jsx)(L.Z, {
                                                            isCurrentUser: ei,
                                                            user: n,
                                                            relationshipType: eo,
                                                            friendToken: V,
                                                            onClose: X
                                                        }),
                                                        (0, r.jsx)(Z.Z, {
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
                                    displayProfile: et,
                                    initialSection: Y,
                                    initialSubsection: K,
                                    friendToken: V,
                                    onClose: X
                                })
                            ]
                        }),
                        (null == et ? void 0 : et.profileEffectId) != null &&
                            (0, r.jsx)(f.Z, {
                                profileEffectId: null == et ? void 0 : et.profileEffectId,
                                isHovering: ec
                            })
                    ]
                })
            })
        })
    });
}
