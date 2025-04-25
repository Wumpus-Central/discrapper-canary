t.d(n, { Z: () => R }), t(388685);
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
    m = t(429467),
    p = t(680295),
    h = t(699516),
    x = t(5192),
    I = t(785717),
    v = t(221292),
    b = t(687158),
    j = t(510659),
    _ = t(892001),
    g = t(113557),
    Z = t(867176),
    y = t(451834),
    N = t(502762),
    A = t(544989),
    T = t(705556),
    O = t(481932),
    C = t(195387),
    E = t(272510),
    P = t(4517),
    S = t(62154),
    M = t(412317),
    L = t(228168),
    w = t(388032),
    B = t(405666);
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
function R(e) {
    let { user: n, currentUser: t, guildId: R, channelId: k, messageId: G, roleId: Y, sessionId: F, friendToken: V, initialSection: W, initialSubsection: z, transitionState: J, customStatusPrompt: q, openedAt: K, onClose: H, showGuildProfile: X = !0, sourceAnalyticsLocations: Q = [] } = e,
        { analyticsLocations: $ } = (0, u.ZP)([...Q, d.Z.USER_PROFILE_MODAL]),
        ee = (0, I.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: F,
            guildId: R,
            channelId: k,
            messageId: G,
            roleId: Y,
            showGuildProfile: X
        }),
        en = (0, j.$m)(),
        et = (0, s.q_F)({
            opacity: +(null != en.interactionType),
            config: { duration: 150 }
        }),
        ei = (0, b.ZP)(n.id, X ? R : void 0),
        eo = (0, b.ZP)(n.id, R),
        el = (0, r.e7)([h.Z], () => h.Z.getRelationshipType(n.id)),
        er = n.id === t.id,
        es = (0, f.p)({ location: 'UserProfileModal' }),
        ea = o.useMemo(() => (null != q ? q : (0, m.Z)()), [q]),
        ec = o.useMemo(() => (null != R ? { [R]: [n.id] } : {}), [R, n.id]);
    (0, c.$)(ec);
    let ed = o.createRef(),
        eu = (0, a.Z)(ed);
    return (0, i.jsx)(u.Gt, {
        value: $,
        children: (0, i.jsx)(I.Mt, {
            value: ee,
            openedAt: K,
            fetchStartedAt: null == ei ? void 0 : ei.fetchStartedAt,
            fetchEndedAt: null == ei ? void 0 : ei.fetchEndedAt,
            isLoaded: null == ei ? void 0 : ei.isLoaded,
            children: (0, i.jsx)(j.NJ, {
                value: en,
                children: (0, i.jsxs)(s.Y0X, {
                    transitionState: J,
                    className: B.root,
                    hideShadow: !0,
                    'aria-label': w.intl.string(w.t['3N/J2t']),
                    children: [
                        (0, i.jsxs)(N.Z, {
                            user: n,
                            displayProfile: ei,
                            themeType: L.lY.MODAL,
                            ref: ed,
                            children: [
                                (0, i.jsxs)(A.Z, {
                                    children: [
                                        (0, i.jsx)(C.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            user: n,
                                            guildId: R,
                                            channelId: k,
                                            onClose: H
                                        }),
                                        (0, i.jsx)(O.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            themeType: L.lY.MODAL,
                                            user: n,
                                            friendToken: V
                                        }),
                                        (0, i.jsx)(E.Z, {
                                            user: n,
                                            guildId: R,
                                            viewProfileItem:
                                                (null == eo ? void 0 : eo.guildId) == null
                                                    ? null
                                                    : (null == ei ? void 0 : ei.guildId) != null
                                                      ? (0, i.jsx)(s.sNh, {
                                                            id: 'view-main-profile',
                                                            label: w.intl.string(w.t.GISTtb),
                                                            subtext: w.intl.formatToPlainString(w.t['mn/nW1'], { displayName: x.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                H(),
                                                                    (0, _.openUserProfileModal)(
                                                                        U(D({}, ee), {
                                                                            showGuildProfile: !1,
                                                                            friendToken: V,
                                                                            sourceAnalyticsLocations: Q
                                                                        })
                                                                    ),
                                                                    (0, v.pQ)(
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
                                                            label: w.intl.string(w.t.DisZzM),
                                                            subtext: w.intl.formatToPlainString(w.t['mn/nW1'], { displayName: x.ZP.getName(R, k, n) }),
                                                            action: () => {
                                                                H(),
                                                                    (0, _.openUserProfileModal)(
                                                                        U(D({}, ee), {
                                                                            showGuildProfile: !0,
                                                                            friendToken: V,
                                                                            sourceAnalyticsLocations: Q
                                                                        })
                                                                    ),
                                                                    (0, v.pQ)(
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
                                            themeType: L.lY.MODAL
                                        }),
                                        (0, i.jsx)(y.Z, {
                                            userId: n.id,
                                            onClose: H,
                                            className: B.toast
                                        }),
                                        null != en.interactionType &&
                                            (0, i.jsx)(l.animated.div, {
                                                style: et,
                                                className: B.backdrop
                                            }),
                                        (0, i.jsxs)('div', {
                                            className: B.headerInner,
                                            children: [
                                                (0, i.jsx)(g.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: ei,
                                                    guildId: R,
                                                    channelId: k,
                                                    themeType: L.lY.MODAL
                                                }),
                                                (0, i.jsx)(P.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: R,
                                                    channelId: k,
                                                    themeType: L.lY.MODAL,
                                                    hasEntered: J === s.Dvm.ENTERED,
                                                    onCloseProfile: H,
                                                    prompt: es && er ? ea : null
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: B.headerButtons,
                                                    children: [
                                                        (0, i.jsx)(M.Z, {
                                                            isCurrentUser: er,
                                                            user: n,
                                                            relationshipType: el,
                                                            friendToken: V,
                                                            onClose: H
                                                        }),
                                                        (0, i.jsx)(T.Z, {
                                                            user: n,
                                                            guildId: R,
                                                            onClose: H
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
                                    guildId: R,
                                    channelId: k,
                                    displayProfile: ei,
                                    initialSection: W,
                                    initialSubsection: z,
                                    friendToken: V,
                                    onClose: H
                                })
                            ]
                        }),
                        (null == ei ? void 0 : ei.profileEffectId) != null &&
                            (0, i.jsx)(p.Z, {
                                profileEffectId: null == ei ? void 0 : ei.profileEffectId,
                                isHovering: eu
                            })
                    ]
                })
            })
        })
    });
}
