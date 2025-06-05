t.d(n, { Z: () => S }), t(388685);
var o = t(255367),
    c = t(73800),
    i = t(386230),
    a = t(442837),
    r = t(481060),
    d = t(727637),
    l = t(616780),
    s = t(100527),
    u = t(906732),
    f = t(368326),
    _ = t(429467),
    p = t(680295),
    m = t(706454),
    I = t(699516),
    h = t(5192),
    b = t(785717),
    x = t(687158),
    y = t(510659),
    g = t(113557),
    Z = t(867176),
    v = t(451834),
    j = t(502762),
    A = t(4517),
    N = t(314386),
    O = t(62154),
    C = t(277094),
    P = t(228168),
    T = t(388032),
    w = t(405666);
function S(e) {
    let { user: n, currentUser: t, guildId: S, channelId: E, messageId: M, roleId: L, sessionId: D, initialSection: R, initialSubsection: B, transitionState: G, customStatusPrompt: k, openedAt: F, onClose: U, showGuildProfile: V = !0, sourceAnalyticsLocations: Y = [] } = e,
        { analyticsLocations: W } = (0, u.ZP)([...Y, s.Z.USER_PROFILE_MODAL]),
        q = (0, b.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: D,
            guildId: S,
            channelId: E,
            messageId: M,
            roleId: L,
            showGuildProfile: V
        }),
        K = (0, y.$m)(),
        H = (0, r.q_F)({
            opacity: +(null != K.interactionType),
            config: { duration: 150 }
        }),
        z = (0, x.ZP)(n.id, V ? S : void 0),
        J = h.ZP.getName(null == z ? void 0 : z.guildId, E, n),
        X = (0, a.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
        Q = n.id === t.id,
        $ = (0, f.p)({ location: 'UserProfileModal' }),
        ee = c.useMemo(() => (null != k ? k : (0, _.Z)()), [k]),
        en = c.useMemo(() => (null != S ? { [S]: [n.id] } : {}), [S, n.id]);
    (0, l.$)(en);
    let et = c.useRef(null),
        eo = (0, d.Z)(et),
        ec = (0, a.e7)([m.default], () => ['en-US', 'en-GB'].includes(m.default.locale)) ? T.intl.formatToPlainString(T.t.KRe1Fh, { name: J }) : T.intl.string(T.t['3N/J2t']);
    return (0, o.jsx)(u.Gt, {
        value: W,
        children: (0, o.jsx)(b.Mt, {
            value: q,
            openedAt: F,
            fetchStartedAt: null == z ? void 0 : z.fetchStartedAt,
            fetchEndedAt: null == z ? void 0 : z.fetchEndedAt,
            isLoaded: null == z ? void 0 : z.isLoaded,
            children: (0, o.jsx)(y.NJ, {
                value: K,
                children: (0, o.jsxs)(r.Y0X, {
                    transitionState: G,
                    className: w.root,
                    hideShadow: !0,
                    'aria-label': ec,
                    parentComponent: 'UserProfileModal',
                    children: [
                        (0, o.jsxs)(j.Z, {
                            user: n,
                            displayProfile: z,
                            themeType: P.lY.MODAL,
                            ref: et,
                            children: [
                                (0, o.jsx)(N.Z, {
                                    user: n,
                                    guildId: S,
                                    channelId: E,
                                    displayProfile: z,
                                    onClose: U
                                }),
                                (0, o.jsxs)('header', {
                                    children: [
                                        (0, o.jsx)(Z.Z, {
                                            user: n,
                                            displayProfile: z,
                                            themeType: P.lY.MODAL
                                        }),
                                        (0, o.jsx)(v.Z, {
                                            userId: n.id,
                                            onClose: U,
                                            className: w.toast
                                        }),
                                        null != K.interactionType &&
                                            (0, o.jsx)(i.animated.div, {
                                                style: H,
                                                className: w.backdrop
                                            }),
                                        (0, o.jsxs)('div', {
                                            className: w.headerInner,
                                            children: [
                                                (0, o.jsx)(g.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: z,
                                                    guildId: S,
                                                    channelId: E,
                                                    themeType: P.lY.MODAL
                                                }),
                                                (0, o.jsx)(A.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: S,
                                                    channelId: E,
                                                    themeType: P.lY.MODAL,
                                                    hasEntered: G === r.Dvm.ENTERED,
                                                    prompt: $ && Q ? ee : null
                                                }),
                                                (0, o.jsx)('div', {
                                                    className: w.headerButtons,
                                                    children: (0, o.jsx)(C.Z, {
                                                        user: n,
                                                        currentUser: t,
                                                        guildId: S,
                                                        relationshipType: X,
                                                        onClose: U
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, o.jsx)(O.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: S,
                                    channelId: E,
                                    displayProfile: z,
                                    initialSection: R,
                                    initialSubsection: B,
                                    onClose: U
                                })
                            ]
                        }),
                        (null == z ? void 0 : z.profileEffectId) != null &&
                            (0, o.jsx)(p.Z, {
                                profileEffectId: null == z ? void 0 : z.profileEffectId,
                                isHovering: eo
                            })
                    ]
                })
            })
        })
    });
}
