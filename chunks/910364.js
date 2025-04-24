t.d(n, { Z: () => U }), t(388685);
var i = t(200651),
    o = t(192379),
    l = t(272573),
    r = t(442837),
    s = t(481060),
    c = t(727637),
    a = t(616780),
    d = t(100527),
    u = t(906732),
    f = t(368326),
    p = t(429467),
    m = t(680295),
    h = t(699516),
    I = t(5192),
    x = t(785717),
    b = t(221292),
    _ = t(687158),
    j = t(510659),
    v = t(892001),
    g = t(113557),
    Z = t(867176),
    y = t(451834),
    A = t(502762),
    T = t(544989),
    O = t(705556),
    N = t(481932),
    E = t(195387),
    C = t(272510),
    P = t(4517),
    S = t(62154),
    M = t(412317),
    w = t(228168),
    L = t(388032),
    R = t(405666);
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
function B(e, n) {
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
function U(e) {
    let { user: n, currentUser: t, guildId: U, channelId: G, messageId: k, roleId: V, sessionId: Y, friendToken: F, initialSection: W, initialSubsection: J, transitionState: H, customStatusPrompt: K, openedAt: q, onClose: z, showGuildProfile: X = !0, sourceAnalyticsLocations: Q = [] } = e,
        { analyticsLocations: $ } = (0, u.ZP)([...Q, d.Z.USER_PROFILE_MODAL]),
        ee = (0, x.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: Y,
            guildId: U,
            channelId: G,
            messageId: k,
            roleId: V,
            showGuildProfile: X
        }),
        en = (0, j.$m)(),
        et = (0, s.q_F)({
            opacity: +(null != en.interactionType),
            config: { duration: 150 }
        }),
        ei = (0, _.ZP)(n.id, X ? U : void 0),
        eo = (0, _.ZP)(n.id, U),
        el = (0, r.e7)([h.Z], () => h.Z.getRelationshipType(n.id)),
        er = n.id === t.id,
        es = (0, f.p)({ location: 'UserProfileModal' }),
        ec = o.useMemo(() => (null != K ? K : (0, p.Z)()), [K]),
        ea = o.useMemo(() => (null != U ? { [U]: [n.id] } : {}), [U, n.id]);
    (0, a.$)(ea);
    let ed = o.createRef(),
        eu = (0, c.Z)(ed);
    return (0, i.jsx)(u.Gt, {
        value: $,
        children: (0, i.jsx)(x.Mt, {
            value: ee,
            openedAt: q,
            fetchStartedAt: null == ei ? void 0 : ei.fetchStartedAt,
            fetchEndedAt: null == ei ? void 0 : ei.fetchEndedAt,
            isLoaded: null == ei ? void 0 : ei.isLoaded,
            children: (0, i.jsx)(j.NJ, {
                value: en,
                children: (0, i.jsxs)(s.Y0X, {
                    transitionState: H,
                    className: R.root,
                    hideShadow: !0,
                    'aria-label': L.intl.string(L.t['3N/J2t']),
                    children: [
                        (0, i.jsxs)(A.Z, {
                            user: n,
                            displayProfile: ei,
                            themeType: w.lY.MODAL,
                            ref: ed,
                            children: [
                                (0, i.jsxs)(T.Z, {
                                    children: [
                                        (0, i.jsx)(E.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            user: n,
                                            guildId: U,
                                            channelId: G,
                                            onClose: z
                                        }),
                                        (0, i.jsx)(N.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            themeType: w.lY.MODAL,
                                            user: n,
                                            friendToken: F
                                        }),
                                        (0, i.jsx)(C.Z, {
                                            user: n,
                                            guildId: U,
                                            viewProfileItem:
                                                (null == eo ? void 0 : eo.guildId) == null
                                                    ? null
                                                    : (null == ei ? void 0 : ei.guildId) != null
                                                      ? (0, i.jsx)(s.sNh, {
                                                            id: 'view-main-profile',
                                                            label: L.intl.string(L.t.GISTtb),
                                                            subtext: L.intl.formatToPlainString(L.t['mn/nW1'], { displayName: I.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                z(),
                                                                    (0, v.openUserProfileModal)(
                                                                        B(D({}, ee), {
                                                                            showGuildProfile: !1,
                                                                            friendToken: F,
                                                                            sourceAnalyticsLocations: Q
                                                                        })
                                                                    ),
                                                                    (0, b.pQ)(
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
                                                      : (0, i.jsx)(s.sNh, {
                                                            id: 'view-server-profile',
                                                            label: L.intl.string(L.t.DisZzM),
                                                            subtext: L.intl.formatToPlainString(L.t['mn/nW1'], { displayName: I.ZP.getName(U, G, n) }),
                                                            action: () => {
                                                                z(),
                                                                    (0, v.openUserProfileModal)(
                                                                        B(D({}, ee), {
                                                                            showGuildProfile: !0,
                                                                            friendToken: F,
                                                                            sourceAnalyticsLocations: Q
                                                                        })
                                                                    ),
                                                                    (0, b.pQ)(
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
                                (0, i.jsxs)('header', {
                                    children: [
                                        (0, i.jsx)(Z.Z, {
                                            user: n,
                                            displayProfile: ei,
                                            themeType: w.lY.MODAL
                                        }),
                                        (0, i.jsx)(y.Z, {
                                            userId: n.id,
                                            onClose: z,
                                            className: R.toast
                                        }),
                                        null != en.interactionType &&
                                            (0, i.jsx)(l.animated.div, {
                                                style: et,
                                                className: R.backdrop
                                            }),
                                        (0, i.jsxs)('div', {
                                            className: R.headerInner,
                                            children: [
                                                (0, i.jsx)(g.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: ei,
                                                    guildId: U,
                                                    channelId: G,
                                                    themeType: w.lY.MODAL
                                                }),
                                                (0, i.jsx)(P.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: U,
                                                    channelId: G,
                                                    themeType: w.lY.MODAL,
                                                    hasEntered: H === s.Dvm.ENTERED,
                                                    onCloseProfile: z,
                                                    prompt: es && er ? ec : null
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: R.headerButtons,
                                                    children: [
                                                        (0, i.jsx)(M.Z, {
                                                            isCurrentUser: er,
                                                            user: n,
                                                            relationshipType: el,
                                                            friendToken: F,
                                                            onClose: z
                                                        }),
                                                        (0, i.jsx)(O.Z, {
                                                            user: n,
                                                            guildId: U,
                                                            onClose: z
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(S.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: U,
                                    channelId: G,
                                    displayProfile: ei,
                                    initialSection: W,
                                    initialSubsection: J,
                                    friendToken: F,
                                    onClose: z
                                })
                            ]
                        }),
                        (null == ei ? void 0 : ei.profileEffectId) != null &&
                            (0, i.jsx)(m.Z, {
                                profileEffectId: null == ei ? void 0 : ei.profileEffectId,
                                isHovering: eu
                            })
                    ]
                })
            })
        })
    });
}
