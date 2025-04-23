t.d(n, { Z: () => G }), t(388685);
var r = t(200651),
    o = t(192379),
    i = t(272573),
    l = t(442837),
    s = t(481060),
    c = t(727637),
    a = t(616780),
    d = t(100527),
    u = t(906732),
    f = t(368326),
    p = t(429467),
    m = t(680295),
    b = t(699516),
    h = t(5192),
    g = t(785717),
    j = t(221292),
    v = t(687158),
    x = t(510659),
    y = t(113557),
    I = t(867176),
    O = t(451834),
    Z = t(502762),
    _ = t(544989),
    P = t(705556),
    E = t(481932),
    N = t(195387),
    A = t(272510),
    T = t(4517),
    C = t(171368),
    S = t(62154),
    w = t(412317),
    M = t(228168),
    R = t(388032),
    L = t(405666);
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
function B(e, n) {
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
function G(e) {
    let { user: n, currentUser: t, guildId: G, channelId: U, messageId: k, roleId: V, sessionId: Y, friendToken: F, initialSection: W, initialSubsection: z, transitionState: J, customStatusPrompt: K, openedAt: H, onClose: X, showGuildProfile: q = !0, sourceAnalyticsLocations: Q = [] } = e,
        { analyticsLocations: $ } = (0, u.ZP)([...Q, d.Z.USER_PROFILE_MODAL]),
        ee = (0, g.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: Y,
            guildId: G,
            channelId: U,
            messageId: k,
            roleId: V,
            showGuildProfile: q
        }),
        en = (0, x.$m)(),
        et = (0, s.q_F)({
            opacity: +(null != en.interactionType),
            config: { duration: 150 }
        }),
        er = (0, v.ZP)(n.id, q ? G : void 0),
        eo = (0, v.ZP)(n.id, G),
        ei = (0, l.e7)([b.Z], () => b.Z.getRelationshipType(n.id)),
        el = n.id === t.id,
        es = (0, f.p)({ location: 'UserProfileModal' }),
        ec = o.useMemo(() => (null != K ? K : (0, p.Z)()), [K]),
        ea = o.useMemo(() => (null != G ? { [G]: [n.id] } : {}), [G, n.id]);
    (0, a.$)(ea);
    let ed = o.createRef(),
        eu = (0, c.Z)(ed);
    return (0, r.jsx)(u.Gt, {
        value: $,
        children: (0, r.jsx)(g.Mt, {
            value: ee,
            openedAt: H,
            fetchStartedAt: null == er ? void 0 : er.fetchStartedAt,
            fetchEndedAt: null == er ? void 0 : er.fetchEndedAt,
            isLoaded: null == er ? void 0 : er.isLoaded,
            children: (0, r.jsx)(x.NJ, {
                value: en,
                children: (0, r.jsxs)(s.Y0X, {
                    transitionState: J,
                    className: L.root,
                    hideShadow: !0,
                    'aria-label': R.intl.string(R.t['3N/J2t']),
                    children: [
                        (0, r.jsxs)(Z.Z, {
                            user: n,
                            displayProfile: er,
                            themeType: M.lY.MODAL,
                            ref: ed,
                            children: [
                                (0, r.jsxs)(_.Z, {
                                    children: [
                                        (0, r.jsx)(N.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            user: n,
                                            guildId: G,
                                            channelId: U,
                                            onClose: X
                                        }),
                                        (0, r.jsx)(E.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            themeType: M.lY.MODAL,
                                            user: n,
                                            friendToken: F
                                        }),
                                        (0, r.jsx)(A.Z, {
                                            user: n,
                                            guildId: G,
                                            viewProfileItem:
                                                (null == eo ? void 0 : eo.guildId) == null
                                                    ? null
                                                    : (null == er ? void 0 : er.guildId) != null
                                                      ? (0, r.jsx)(s.sNh, {
                                                            id: 'view-main-profile',
                                                            label: R.intl.string(R.t.GISTtb),
                                                            subtext: R.intl.formatToPlainString(R.t['mn/nW1'], { displayName: h.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                X(),
                                                                    (0, C.openUserProfileModal)(
                                                                        B(D({}, ee), {
                                                                            showGuildProfile: !1,
                                                                            friendToken: F,
                                                                            sourceAnalyticsLocations: Q
                                                                        })
                                                                    ),
                                                                    (0, j.pQ)(
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
                                                      : (0, r.jsx)(s.sNh, {
                                                            id: 'view-server-profile',
                                                            label: R.intl.string(R.t.DisZzM),
                                                            subtext: R.intl.formatToPlainString(R.t['mn/nW1'], { displayName: h.ZP.getName(G, U, n) }),
                                                            action: () => {
                                                                X(),
                                                                    (0, C.openUserProfileModal)(
                                                                        B(D({}, ee), {
                                                                            showGuildProfile: !0,
                                                                            friendToken: F,
                                                                            sourceAnalyticsLocations: Q
                                                                        })
                                                                    ),
                                                                    (0, j.pQ)(
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
                                (0, r.jsxs)('header', {
                                    children: [
                                        (0, r.jsx)(I.Z, {
                                            user: n,
                                            displayProfile: er,
                                            themeType: M.lY.MODAL
                                        }),
                                        (0, r.jsx)(O.Z, {
                                            userId: n.id,
                                            onClose: X,
                                            className: L.toast
                                        }),
                                        null != en.interactionType &&
                                            (0, r.jsx)(i.animated.div, {
                                                style: et,
                                                className: L.backdrop
                                            }),
                                        (0, r.jsxs)('div', {
                                            className: L.headerInner,
                                            children: [
                                                (0, r.jsx)(y.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: er,
                                                    guildId: G,
                                                    channelId: U,
                                                    themeType: M.lY.MODAL
                                                }),
                                                (0, r.jsx)(T.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: G,
                                                    channelId: U,
                                                    themeType: M.lY.MODAL,
                                                    hasEntered: J === s.Dvm.ENTERED,
                                                    onCloseProfile: X,
                                                    prompt: es && el ? ec : null
                                                }),
                                                (0, r.jsxs)('div', {
                                                    className: L.headerButtons,
                                                    children: [
                                                        (0, r.jsx)(w.Z, {
                                                            isCurrentUser: el,
                                                            user: n,
                                                            relationshipType: ei,
                                                            friendToken: F,
                                                            onClose: X
                                                        }),
                                                        (0, r.jsx)(P.Z, {
                                                            user: n,
                                                            guildId: G,
                                                            onClose: X
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)(S.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: G,
                                    channelId: U,
                                    displayProfile: er,
                                    initialSection: W,
                                    initialSubsection: z,
                                    friendToken: F,
                                    onClose: X
                                })
                            ]
                        }),
                        (null == er ? void 0 : er.profileEffectId) != null &&
                            (0, r.jsx)(m.Z, {
                                profileEffectId: null == er ? void 0 : er.profileEffectId,
                                isHovering: eu
                            })
                    ]
                })
            })
        })
    });
}
