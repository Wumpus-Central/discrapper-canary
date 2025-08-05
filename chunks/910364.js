(t.d(n, { Z: () => S }), t(388685));
var o = t(255367),
    c = t(73800),
    i = t(66546),
    a = t(442837),
    r = t(481060),
    d = t(727637),
    l = t(616780),
    s = t(100527),
    u = t(906732),
    p = t(313201),
    f = t(368326),
    _ = t(429467),
    m = t(680295),
    I = t(699516),
    h = t(5192),
    x = t(785717),
    y = t(687158),
    b = t(510659),
    v = t(113557),
    j = t(867176),
    Z = t(451834),
    A = t(502762),
    g = t(4517),
    O = t(314386),
    N = t(62154),
    C = t(277094),
    P = t(228168),
    T = t(388032),
    E = t(405666);
function S(e) {
    let { user: n, currentUser: t, guildId: S, channelId: M, messageId: w, roleId: L, sessionId: D, initialSection: B, initialSubsection: R, transitionState: k, customStatusPrompt: G, openedAt: F, onClose: U, showGuildProfile: V = !0, sourceAnalyticsLocations: Y = [] } = e,
        { analyticsLocations: W } = (0, u.ZP)([...Y, s.Z.USER_PROFILE_MODAL]),
        q = (0, x.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: D,
            guildId: S,
            channelId: M,
            messageId: w,
            roleId: L,
            showGuildProfile: V
        }),
        K = (0, b.$m)(),
        H = (0, r.q_F)({
            opacity: +(null != K.interactionType),
            config: { duration: 150 }
        }),
        z = (0, y.ZP)(n.id, V ? S : void 0),
        X = h.ZP.getName(null == z ? void 0 : z.guildId, M, n),
        J = (0, p.Dt)(),
        Q = (0, a.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
        $ = n.id === t.id,
        ee = (0, f.p)({ location: 'UserProfileModal' }),
        en = c.useMemo(() => (null != G ? G : (0, _.Z)()), [G]),
        et = c.useMemo(() => (null != S ? { [S]: [n.id] } : {}), [S, n.id]);
    (0, l.$)(et);
    let eo = c.useRef(null),
        ec = (0, d.Z)(eo);
    return (0, o.jsx)(u.Gt, {
        value: W,
        children: (0, o.jsx)(x.Mt, {
            value: q,
            openedAt: F,
            fetchStartedAt: null == z ? void 0 : z.fetchStartedAt,
            fetchEndedAt: null == z ? void 0 : z.fetchEndedAt,
            isLoaded: null == z ? void 0 : z.isLoaded,
            children: (0, o.jsx)(b.NJ, {
                value: K,
                children: (0, o.jsxs)(r.Y0X, {
                    transitionState: k,
                    className: E.root,
                    hideShadow: !0,
                    'aria-labelledby': J,
                    parentComponent: 'UserProfileModal',
                    children: [
                        (0, o.jsx)(r.y5t, {
                            component: (0, o.jsx)(r.nn4, {
                                children: (0, o.jsx)(r.H, {
                                    id: J,
                                    children: T.intl.format(T.t.KRe1Fh, { name: X })
                                })
                            }),
                            children: (0, o.jsxs)(A.Z, {
                                user: n,
                                displayProfile: z,
                                themeType: P.lY.MODAL,
                                ref: (null == z ? void 0 : z.profileEffectId) != null ? eo : void 0,
                                children: [
                                    (0, o.jsx)(O.Z, {
                                        user: n,
                                        guildId: S,
                                        channelId: M,
                                        displayProfile: z,
                                        onClose: U
                                    }),
                                    (0, o.jsxs)('div', {
                                        children: [
                                            (0, o.jsx)(j.Z, {
                                                user: n,
                                                displayProfile: z,
                                                themeType: P.lY.MODAL
                                            }),
                                            (0, o.jsx)(Z.Z, {
                                                userId: n.id,
                                                onClose: U,
                                                className: E.toast
                                            }),
                                            null != K.interactionType &&
                                                (0, o.jsx)(i.animated.div, {
                                                    style: H,
                                                    className: E.backdrop
                                                }),
                                            (0, o.jsxs)('div', {
                                                className: E.headerInner,
                                                children: [
                                                    (0, o.jsx)(v.Z, {
                                                        location: 'UserProfileModal',
                                                        user: n,
                                                        displayProfile: z,
                                                        guildId: S,
                                                        channelId: M,
                                                        themeType: P.lY.MODAL
                                                    }),
                                                    (0, o.jsx)(g.Z, {
                                                        location: 'UserProfileModal',
                                                        user: n,
                                                        guildId: S,
                                                        channelId: M,
                                                        themeType: P.lY.MODAL,
                                                        hasEntered: k === r.Dvm.ENTERED,
                                                        prompt: ee && $ ? en : null
                                                    }),
                                                    (0, o.jsx)('div', {
                                                        className: E.headerButtons,
                                                        children: (0, o.jsx)(C.Z, {
                                                            user: n,
                                                            currentUser: t,
                                                            guildId: S,
                                                            relationshipType: Q,
                                                            onClose: U
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, o.jsx)(N.Z, {
                                        user: n,
                                        currentUser: t,
                                        guildId: S,
                                        channelId: M,
                                        displayProfile: z,
                                        initialSection: B,
                                        initialSubsection: R,
                                        onClose: U
                                    })
                                ]
                            })
                        }),
                        (null == z ? void 0 : z.profileEffectId) != null &&
                            (0, o.jsx)(m.Z, {
                                profileEffectId: null == z ? void 0 : z.profileEffectId,
                                isHovering: ec
                            })
                    ]
                })
            })
        })
    });
}
