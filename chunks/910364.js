i.d(n, { Z: () => F }), i(47120);
var t = i(200651),
    l = i(192379),
    o = i(642128),
    s = i(442837),
    r = i(481060),
    a = i(727637),
    d = i(616780),
    c = i(100527),
    u = i(906732),
    m = i(680295),
    x = i(699516),
    p = i(5192),
    f = i(785717),
    I = i(221292),
    h = i(687158),
    v = i(326094),
    Z = i(510659),
    g = i(113557),
    _ = i(867176),
    j = i(451834),
    E = i(502762),
    N = i(544989),
    y = i(705556),
    T = i(481932),
    b = i(195387),
    S = i(272510),
    P = i(4517),
    L = i(171368),
    C = i(62154),
    A = i(412317),
    O = i(228168),
    M = i(981631),
    R = i(388032),
    U = i(171865);
function F(e) {
    let { user: n, currentUser: i, guildId: F, channelId: B, messageId: D, roleId: w, sessionId: G, friendToken: k, initialSection: V, initialSubsection: W, transitionState: K, onClose: Y, showGuildProfile: z = !0, sourceAnalyticsLocations: q = [] } = e,
        { analyticsLocations: J } = (0, u.ZP)([...q, c.Z.SIMPLIFIED_PROFILE_MODAL]),
        X = (0, v.Z)({
            user: n,
            currentUser: i,
            location: M.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        H = (0, f.ZB)({
            layout: X ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: G,
            guildId: F,
            channelId: B,
            messageId: D,
            roleId: w,
            showGuildProfile: z
        }),
        Q = (0, Z.$m)(),
        $ = (0, r.q_F)({
            opacity: null != Q.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        ee = (0, h.ZP)(n.id, z ? F : void 0),
        en = (0, h.ZP)(n.id, F),
        ei = (0, s.e7)([x.Z], () => x.Z.getRelationshipType(n.id)),
        et = n.id === i.id,
        el = l.useMemo(() => (null != F ? { [F]: [n.id] } : {}), [F, n.id]);
    (0, d.$)(el);
    let eo = l.createRef(),
        es = (0, a.Z)(eo);
    return (0, t.jsx)(u.Gt, {
        value: J,
        children: (0, t.jsx)(f.Mt, {
            value: H,
            children: (0, t.jsx)(Z.NJ, {
                value: Q,
                children: (0, t.jsxs)(r.Y0X, {
                    transitionState: K,
                    className: U.root,
                    hideShadow: !0,
                    'aria-label': R.intl.string(R.t['3N/J2t']),
                    children: [
                        (0, t.jsxs)(E.Z, {
                            user: n,
                            displayProfile: ee,
                            profileType: O.y0.FULL_SIZE,
                            ref: eo,
                            children: [
                                (0, t.jsxs)(N.Z, {
                                    profileType: O.y0.FULL_SIZE,
                                    children: [
                                        (0, t.jsx)(b.Z, {
                                            shouldShowTooltip: null === Q.interactionType,
                                            user: n,
                                            guildId: F,
                                            channelId: B,
                                            onClose: Y
                                        }),
                                        (0, t.jsx)(T.Z, {
                                            shouldShowTooltip: null === Q.interactionType,
                                            profileType: O.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: k
                                        }),
                                        (0, t.jsx)(S.Z, {
                                            user: n,
                                            guildId: F,
                                            viewProfileItem:
                                                (null == en ? void 0 : en.guildId) == null
                                                    ? null
                                                    : (null == ee ? void 0 : ee.guildId) != null
                                                      ? (0, t.jsx)(r.sNh, {
                                                            id: 'view-main-profile',
                                                            label: R.intl.string(R.t.GISTtb),
                                                            subtext: R.intl.formatToPlainString(R.t['mn/nW1'], { displayName: p.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                Y(),
                                                                    (0, L.openUserProfileModal)({
                                                                        ...H,
                                                                        showGuildProfile: !1,
                                                                        friendToken: k,
                                                                        sourceAnalyticsLocations: q
                                                                    }),
                                                                    (0, I.pQ)({
                                                                        action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                        analyticsLocations: J,
                                                                        ...H
                                                                    });
                                                            }
                                                        })
                                                      : (0, t.jsx)(r.sNh, {
                                                            id: 'view-server-profile',
                                                            label: R.intl.string(R.t.DisZzM),
                                                            subtext: R.intl.formatToPlainString(R.t['mn/nW1'], { displayName: p.ZP.getName(F, B, n) }),
                                                            action: () => {
                                                                Y(),
                                                                    (0, L.openUserProfileModal)({
                                                                        ...H,
                                                                        showGuildProfile: !0,
                                                                        friendToken: k,
                                                                        sourceAnalyticsLocations: q
                                                                    }),
                                                                    (0, I.pQ)({
                                                                        action: 'PRESS_VIEW_SERVER_PROFILE',
                                                                        analyticsLocations: J,
                                                                        ...H
                                                                    });
                                                            }
                                                        })
                                        })
                                    ]
                                }),
                                (0, t.jsxs)('header', {
                                    children: [
                                        (0, t.jsx)(_.Z, {
                                            user: n,
                                            displayProfile: ee,
                                            profileType: O.y0.FULL_SIZE
                                        }),
                                        (0, t.jsx)(j.Z, {
                                            userId: n.id,
                                            onClose: Y,
                                            className: U.toast
                                        }),
                                        null != Q.interactionType &&
                                            (0, t.jsx)(o.animated.div, {
                                                style: $,
                                                className: U.backdrop
                                            }),
                                        (0, t.jsxs)('div', {
                                            className: U.headerInner,
                                            children: [
                                                (0, t.jsx)(g.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: ee,
                                                    guildId: F,
                                                    channelId: B,
                                                    profileType: O.y0.FULL_SIZE
                                                }),
                                                (0, t.jsx)(P.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: F,
                                                    channelId: B,
                                                    profileType: O.y0.FULL_SIZE,
                                                    hasEntered: K === r.Dvm.ENTERED,
                                                    onCloseProfile: Y
                                                }),
                                                (0, t.jsxs)('div', {
                                                    className: U.headerButtons,
                                                    children: [
                                                        (0, t.jsx)(A.Z, {
                                                            isCurrentUser: et,
                                                            user: n,
                                                            relationshipType: ei,
                                                            friendToken: k,
                                                            onClose: Y
                                                        }),
                                                        (0, t.jsx)(y.Z, {
                                                            user: n,
                                                            guildId: F,
                                                            onClose: Y
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, t.jsx)(C.Z, {
                                    user: n,
                                    currentUser: i,
                                    guildId: F,
                                    channelId: B,
                                    displayProfile: ee,
                                    initialSection: V,
                                    initialSubsection: W,
                                    friendToken: k,
                                    onClose: Y
                                })
                            ]
                        }),
                        (null == ee ? void 0 : ee.profileEffectId) != null &&
                            (0, t.jsx)(m.Z, {
                                profileEffectId: null == ee ? void 0 : ee.profileEffectId,
                                isHovering: es
                            })
                    ]
                })
            })
        })
    });
}
