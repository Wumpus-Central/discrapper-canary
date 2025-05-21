t.d(n, { Z: () => G }), t(388685);
var o = t(255367),
    c = t(73800),
    i = t(366594),
    r = t(442837),
    a = t(481060),
    l = t(727637),
    d = t(616780),
    s = t(100527),
    u = t(906732),
    f = t(368326),
    p = t(429467),
    _ = t(680295),
    m = t(699516),
    b = t(5192),
    I = t(785717),
    h = t(221292),
    y = t(687158),
    x = t(510659),
    j = t(892001),
    g = t(113557),
    O = t(867176),
    v = t(451834),
    Z = t(502762),
    A = t(544989),
    N = t(481932),
    P = t(195387),
    C = t(664794),
    w = t(4517),
    T = t(62154),
    S = t(277094),
    E = t(228168),
    M = t(388032),
    L = t(405666);
function D(e) {
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
function R(e, n) {
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
function G(e) {
    let { user: n, currentUser: t, guildId: G, channelId: B, messageId: k, roleId: F, sessionId: V, initialSection: U, initialSubsection: W, transitionState: Y, customStatusPrompt: q, openedAt: H, onClose: K, showGuildProfile: Q = !0, sourceAnalyticsLocations: z = [] } = e,
        { analyticsLocations: J } = (0, u.ZP)([...z, s.Z.USER_PROFILE_MODAL]),
        X = (0, I.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: V,
            guildId: G,
            channelId: B,
            messageId: k,
            roleId: F,
            showGuildProfile: Q
        }),
        $ = (0, x.$m)(),
        ee = (0, a.q_F)({
            opacity: +(null != $.interactionType),
            config: { duration: 150 }
        }),
        en = (0, y.ZP)(n.id, Q ? G : void 0),
        et = (0, y.ZP)(n.id, G),
        eo = (0, r.e7)([m.Z], () => m.Z.getRelationshipType(n.id)),
        ec = n.id === t.id,
        ei = (0, f.p)({ location: 'UserProfileModal' }),
        er = c.useMemo(() => (null != q ? q : (0, p.Z)()), [q]),
        ea = c.useMemo(() => (null != G ? { [G]: [n.id] } : {}), [G, n.id]);
    (0, d.$)(ea);
    let el = c.useRef(null),
        ed = (0, l.Z)(el);
    return (0, o.jsx)(u.Gt, {
        value: J,
        children: (0, o.jsx)(I.Mt, {
            value: X,
            openedAt: H,
            fetchStartedAt: null == en ? void 0 : en.fetchStartedAt,
            fetchEndedAt: null == en ? void 0 : en.fetchEndedAt,
            isLoaded: null == en ? void 0 : en.isLoaded,
            children: (0, o.jsx)(x.NJ, {
                value: $,
                children: (0, o.jsxs)(a.Y0X, {
                    transitionState: Y,
                    className: L.root,
                    hideShadow: !0,
                    'aria-label': M.intl.string(M.t['3N/J2t']),
                    children: [
                        (0, o.jsxs)(Z.Z, {
                            user: n,
                            displayProfile: en,
                            themeType: E.lY.MODAL,
                            ref: el,
                            children: [
                                (0, o.jsxs)(A.Z, {
                                    children: [
                                        (0, o.jsx)(P.Z, {
                                            shouldShowTooltip: null === $.interactionType,
                                            user: n,
                                            guildId: G,
                                            channelId: B,
                                            onClose: K
                                        }),
                                        (0, o.jsx)(N.Z, {
                                            shouldShowTooltip: null === $.interactionType,
                                            themeType: E.lY.MODAL,
                                            user: n
                                        }),
                                        (0, o.jsx)(C.Z, {
                                            type: 'banner',
                                            user: n,
                                            guildId: G,
                                            viewProfileItem:
                                                (null == et ? void 0 : et.guildId) == null
                                                    ? null
                                                    : (null == en ? void 0 : en.guildId) != null
                                                      ? (0, o.jsx)(a.sNh, {
                                                            id: 'view-main-profile',
                                                            label: M.intl.string(M.t.GISTtb),
                                                            subtext: M.intl.formatToPlainString(M.t['mn/nW1'], { displayName: b.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                K(),
                                                                    (0, j.openUserProfileModal)(
                                                                        R(D({}, X), {
                                                                            showGuildProfile: !1,
                                                                            sourceAnalyticsLocations: z
                                                                        })
                                                                    ),
                                                                    (0, h.pQ)(
                                                                        D(
                                                                            {
                                                                                action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                                analyticsLocations: J
                                                                            },
                                                                            X
                                                                        )
                                                                    );
                                                            }
                                                        })
                                                      : (0, o.jsx)(a.sNh, {
                                                            id: 'view-server-profile',
                                                            label: M.intl.string(M.t.DisZzM),
                                                            subtext: M.intl.formatToPlainString(M.t['mn/nW1'], { displayName: b.ZP.getName(G, B, n) }),
                                                            action: () => {
                                                                K(),
                                                                    (0, j.openUserProfileModal)(
                                                                        R(D({}, X), {
                                                                            showGuildProfile: !0,
                                                                            sourceAnalyticsLocations: z
                                                                        })
                                                                    ),
                                                                    (0, h.pQ)(
                                                                        D(
                                                                            {
                                                                                action: 'PRESS_VIEW_SERVER_PROFILE',
                                                                                analyticsLocations: J
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
                                            displayProfile: en,
                                            themeType: E.lY.MODAL
                                        }),
                                        (0, o.jsx)(v.Z, {
                                            userId: n.id,
                                            onClose: K,
                                            className: L.toast
                                        }),
                                        null != $.interactionType &&
                                            (0, o.jsx)(i.animated.div, {
                                                style: ee,
                                                className: L.backdrop
                                            }),
                                        (0, o.jsxs)('div', {
                                            className: L.headerInner,
                                            children: [
                                                (0, o.jsx)(g.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: en,
                                                    guildId: G,
                                                    channelId: B,
                                                    themeType: E.lY.MODAL
                                                }),
                                                (0, o.jsx)(w.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: G,
                                                    channelId: B,
                                                    themeType: E.lY.MODAL,
                                                    hasEntered: Y === a.Dvm.ENTERED,
                                                    onCloseProfile: K,
                                                    prompt: ei && ec ? er : null
                                                }),
                                                (0, o.jsx)('div', {
                                                    className: L.headerButtons,
                                                    children: (0, o.jsx)(S.Z, {
                                                        user: n,
                                                        currentUser: t,
                                                        guildId: G,
                                                        relationshipType: eo,
                                                        onClose: K
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, o.jsx)(T.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: G,
                                    channelId: B,
                                    displayProfile: en,
                                    initialSection: U,
                                    initialSubsection: W,
                                    onClose: K
                                })
                            ]
                        }),
                        (null == en ? void 0 : en.profileEffectId) != null &&
                            (0, o.jsx)(_.Z, {
                                profileEffectId: null == en ? void 0 : en.profileEffectId,
                                isHovering: ed
                            })
                    ]
                })
            })
        })
    });
}
