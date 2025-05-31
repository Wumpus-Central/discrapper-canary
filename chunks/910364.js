t.d(n, { Z: () => P }), t(388685);
var o = t(255367),
    c = t(73800),
    i = t(240894),
    a = t(442837),
    r = t(481060),
    d = t(727637),
    l = t(616780),
    s = t(100527),
    u = t(906732),
    _ = t(368326),
    f = t(429467),
    p = t(680295),
    m = t(699516),
    I = t(785717),
    h = t(687158),
    b = t(510659),
    x = t(113557),
    y = t(867176),
    Z = t(451834),
    j = t(502762),
    g = t(4517),
    v = t(314386),
    A = t(62154),
    N = t(277094),
    O = t(228168),
    C = t(388032),
    T = t(405666);
function P(e) {
    let { user: n, currentUser: t, guildId: P, channelId: w, messageId: E, roleId: S, sessionId: M, initialSection: L, initialSubsection: D, transitionState: B, customStatusPrompt: R, openedAt: G, onClose: k, showGuildProfile: F = !0, sourceAnalyticsLocations: V = [] } = e,
        { analyticsLocations: U } = (0, u.ZP)([...V, s.Z.USER_PROFILE_MODAL]),
        Y = (0, I.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: M,
            guildId: P,
            channelId: w,
            messageId: E,
            roleId: S,
            showGuildProfile: F
        }),
        W = (0, b.$m)(),
        q = (0, r.q_F)({
            opacity: +(null != W.interactionType),
            config: { duration: 150 }
        }),
        H = (0, h.ZP)(n.id, F ? P : void 0),
        K = (0, a.e7)([m.Z], () => m.Z.getRelationshipType(n.id)),
        z = n.id === t.id,
        J = (0, _.p)({ location: 'UserProfileModal' }),
        X = c.useMemo(() => (null != R ? R : (0, f.Z)()), [R]),
        Q = c.useMemo(() => (null != P ? { [P]: [n.id] } : {}), [P, n.id]);
    (0, l.$)(Q);
    let $ = c.useRef(null),
        ee = (0, d.Z)($);
    return (0, o.jsx)(u.Gt, {
        value: U,
        children: (0, o.jsx)(I.Mt, {
            value: Y,
            openedAt: G,
            fetchStartedAt: null == H ? void 0 : H.fetchStartedAt,
            fetchEndedAt: null == H ? void 0 : H.fetchEndedAt,
            isLoaded: null == H ? void 0 : H.isLoaded,
            children: (0, o.jsx)(b.NJ, {
                value: W,
                children: (0, o.jsxs)(r.Y0X, {
                    transitionState: B,
                    className: T.root,
                    hideShadow: !0,
                    'aria-label': C.intl.string(C.t['3N/J2t']),
                    children: [
                        (0, o.jsxs)(j.Z, {
                            user: n,
                            displayProfile: H,
                            themeType: O.lY.MODAL,
                            ref: $,
                            children: [
                                (0, o.jsx)(v.Z, {
                                    user: n,
                                    guildId: P,
                                    channelId: w,
                                    displayProfile: H,
                                    onClose: k
                                }),
                                (0, o.jsxs)('header', {
                                    children: [
                                        (0, o.jsx)(y.Z, {
                                            user: n,
                                            displayProfile: H,
                                            themeType: O.lY.MODAL
                                        }),
                                        (0, o.jsx)(Z.Z, {
                                            userId: n.id,
                                            onClose: k,
                                            className: T.toast
                                        }),
                                        null != W.interactionType &&
                                            (0, o.jsx)(i.animated.div, {
                                                style: q,
                                                className: T.backdrop
                                            }),
                                        (0, o.jsxs)('div', {
                                            className: T.headerInner,
                                            children: [
                                                (0, o.jsx)(x.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: H,
                                                    guildId: P,
                                                    channelId: w,
                                                    themeType: O.lY.MODAL
                                                }),
                                                (0, o.jsx)(g.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: P,
                                                    channelId: w,
                                                    themeType: O.lY.MODAL,
                                                    hasEntered: B === r.Dvm.ENTERED,
                                                    prompt: J && z ? X : null
                                                }),
                                                (0, o.jsx)('div', {
                                                    className: T.headerButtons,
                                                    children: (0, o.jsx)(N.Z, {
                                                        user: n,
                                                        currentUser: t,
                                                        guildId: P,
                                                        relationshipType: K,
                                                        onClose: k
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, o.jsx)(A.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: P,
                                    channelId: w,
                                    displayProfile: H,
                                    initialSection: L,
                                    initialSubsection: D,
                                    onClose: k
                                })
                            ]
                        }),
                        (null == H ? void 0 : H.profileEffectId) != null &&
                            (0, o.jsx)(p.Z, {
                                profileEffectId: null == H ? void 0 : H.profileEffectId,
                                isHovering: ee
                            })
                    ]
                })
            })
        })
    });
}
