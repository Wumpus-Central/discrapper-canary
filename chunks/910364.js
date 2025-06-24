t.d(n, { Z: () => w }), t(388685);
var o = t(255367),
    c = t(73800),
    i = t(524979),
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
    I = t(5192),
    h = t(785717),
    b = t(687158),
    x = t(510659),
    y = t(113557),
    v = t(867176),
    Z = t(451834),
    g = t(502762),
    j = t(4517),
    A = t(314386),
    O = t(62154),
    N = t(277094),
    C = t(228168),
    P = t(388032),
    T = t(405666);
function w(e) {
    let { user: n, currentUser: t, guildId: w, channelId: S, messageId: E, roleId: M, sessionId: L, initialSection: D, initialSubsection: R, transitionState: B, customStatusPrompt: G, openedAt: k, onClose: F, showGuildProfile: U = !0, sourceAnalyticsLocations: V = [] } = e,
        { analyticsLocations: Y } = (0, u.ZP)([...V, s.Z.USER_PROFILE_MODAL]),
        W = (0, h.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: L,
            guildId: w,
            channelId: S,
            messageId: E,
            roleId: M,
            showGuildProfile: U
        }),
        q = (0, x.$m)(),
        K = (0, r.q_F)({
            opacity: +(null != q.interactionType),
            config: { duration: 150 }
        }),
        H = (0, b.ZP)(n.id, U ? w : void 0),
        z = I.ZP.getName(null == H ? void 0 : H.guildId, S, n),
        X = P.intl.formatToPlainString(P.t.KRe1Fh, { name: z }),
        Q = (0, a.e7)([m.Z], () => m.Z.getRelationshipType(n.id)),
        J = n.id === t.id,
        $ = (0, _.p)({ location: 'UserProfileModal' }),
        ee = c.useMemo(() => (null != G ? G : (0, f.Z)()), [G]),
        en = c.useMemo(() => (null != w ? { [w]: [n.id] } : {}), [w, n.id]);
    (0, l.$)(en);
    let et = c.useRef(null),
        eo = (0, d.Z)(et);
    return (0, o.jsx)(u.Gt, {
        value: Y,
        children: (0, o.jsx)(h.Mt, {
            value: W,
            openedAt: k,
            fetchStartedAt: null == H ? void 0 : H.fetchStartedAt,
            fetchEndedAt: null == H ? void 0 : H.fetchEndedAt,
            isLoaded: null == H ? void 0 : H.isLoaded,
            children: (0, o.jsx)(x.NJ, {
                value: q,
                children: (0, o.jsxs)(r.Y0X, {
                    transitionState: B,
                    className: T.root,
                    hideShadow: !0,
                    'aria-label': X,
                    parentComponent: 'UserProfileModal',
                    children: [
                        (0, o.jsxs)(g.Z, {
                            user: n,
                            displayProfile: H,
                            themeType: C.lY.MODAL,
                            ref: (null == H ? void 0 : H.profileEffectId) != null ? et : void 0,
                            children: [
                                (0, o.jsx)(A.Z, {
                                    user: n,
                                    guildId: w,
                                    channelId: S,
                                    displayProfile: H,
                                    onClose: F
                                }),
                                (0, o.jsxs)('header', {
                                    children: [
                                        (0, o.jsx)(v.Z, {
                                            user: n,
                                            displayProfile: H,
                                            themeType: C.lY.MODAL
                                        }),
                                        (0, o.jsx)(Z.Z, {
                                            userId: n.id,
                                            onClose: F,
                                            className: T.toast
                                        }),
                                        null != q.interactionType &&
                                            (0, o.jsx)(i.animated.div, {
                                                style: K,
                                                className: T.backdrop
                                            }),
                                        (0, o.jsxs)('div', {
                                            className: T.headerInner,
                                            children: [
                                                (0, o.jsx)(y.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: H,
                                                    guildId: w,
                                                    channelId: S,
                                                    themeType: C.lY.MODAL
                                                }),
                                                (0, o.jsx)(j.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: w,
                                                    channelId: S,
                                                    themeType: C.lY.MODAL,
                                                    hasEntered: B === r.Dvm.ENTERED,
                                                    prompt: $ && J ? ee : null
                                                }),
                                                (0, o.jsx)('div', {
                                                    className: T.headerButtons,
                                                    children: (0, o.jsx)(N.Z, {
                                                        user: n,
                                                        currentUser: t,
                                                        guildId: w,
                                                        relationshipType: Q,
                                                        onClose: F
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, o.jsx)(O.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: w,
                                    channelId: S,
                                    displayProfile: H,
                                    initialSection: D,
                                    initialSubsection: R,
                                    onClose: F
                                })
                            ]
                        }),
                        (null == H ? void 0 : H.profileEffectId) != null &&
                            (0, o.jsx)(p.Z, {
                                profileEffectId: null == H ? void 0 : H.profileEffectId,
                                isHovering: eo
                            })
                    ]
                })
            })
        })
    });
}
