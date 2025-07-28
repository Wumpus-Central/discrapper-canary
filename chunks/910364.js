(t.d(n, { Z: () => E }), t(388685));
var o = t(255367),
    c = t(73800),
    i = t(652141),
    a = t(442837),
    r = t(481060),
    d = t(727637),
    l = t(616780),
    s = t(100527),
    u = t(906732),
    _ = t(313201),
    f = t(368326),
    p = t(429467),
    m = t(680295),
    I = t(699516),
    h = t(5192),
    x = t(785717),
    b = t(687158),
    y = t(510659),
    v = t(113557),
    j = t(867176),
    Z = t(451834),
    g = t(502762),
    A = t(4517),
    O = t(314386),
    N = t(62154),
    C = t(277094),
    P = t(228168),
    T = t(388032),
    w = t(405666);
function E(e) {
    let { user: n, currentUser: t, guildId: E, channelId: S, messageId: M, roleId: L, sessionId: D, initialSection: R, initialSubsection: B, transitionState: G, customStatusPrompt: k, openedAt: F, onClose: U, showGuildProfile: V = !0, sourceAnalyticsLocations: Y = [] } = e,
        { analyticsLocations: W } = (0, u.ZP)([...Y, s.Z.USER_PROFILE_MODAL]),
        q = (0, x.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: D,
            guildId: E,
            channelId: S,
            messageId: M,
            roleId: L,
            showGuildProfile: V
        }),
        K = (0, y.$m)(),
        H = (0, r.q_F)({
            opacity: +(null != K.interactionType),
            config: { duration: 150 }
        }),
        z = (0, b.ZP)(n.id, V ? E : void 0),
        X = h.ZP.getName(null == z ? void 0 : z.guildId, S, n),
        Q = (0, _.Dt)(),
        J = (0, a.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
        $ = n.id === t.id,
        ee = (0, f.p)({ location: 'UserProfileModal' }),
        en = c.useMemo(() => (null != k ? k : (0, p.Z)()), [k]),
        et = c.useMemo(() => (null != E ? { [E]: [n.id] } : {}), [E, n.id]);
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
            children: (0, o.jsx)(y.NJ, {
                value: K,
                children: (0, o.jsxs)(r.Y0X, {
                    transitionState: G,
                    className: w.root,
                    hideShadow: !0,
                    'aria-labelledby': Q,
                    parentComponent: 'UserProfileModal',
                    children: [
                        (0, o.jsx)(r.y5t, {
                            component: (0, o.jsx)(r.nn4, {
                                children: (0, o.jsx)(r.H, {
                                    id: Q,
                                    children: T.intl.format(T.t.KRe1Fh, { name: X })
                                })
                            }),
                            children: (0, o.jsxs)(g.Z, {
                                user: n,
                                displayProfile: z,
                                themeType: P.lY.MODAL,
                                ref: (null == z ? void 0 : z.profileEffectId) != null ? eo : void 0,
                                children: [
                                    (0, o.jsx)(O.Z, {
                                        user: n,
                                        guildId: E,
                                        channelId: S,
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
                                                    (0, o.jsx)(v.Z, {
                                                        location: 'UserProfileModal',
                                                        user: n,
                                                        displayProfile: z,
                                                        guildId: E,
                                                        channelId: S,
                                                        themeType: P.lY.MODAL
                                                    }),
                                                    (0, o.jsx)(A.Z, {
                                                        location: 'UserProfileModal',
                                                        user: n,
                                                        guildId: E,
                                                        channelId: S,
                                                        themeType: P.lY.MODAL,
                                                        hasEntered: G === r.Dvm.ENTERED,
                                                        prompt: ee && $ ? en : null
                                                    }),
                                                    (0, o.jsx)('div', {
                                                        className: w.headerButtons,
                                                        children: (0, o.jsx)(C.Z, {
                                                            user: n,
                                                            currentUser: t,
                                                            guildId: E,
                                                            relationshipType: J,
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
                                        guildId: E,
                                        channelId: S,
                                        displayProfile: z,
                                        initialSection: R,
                                        initialSubsection: B,
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
