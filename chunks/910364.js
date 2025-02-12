t.d(n, { Z: () => B }), t(47120);
var i = t(200651),
    l = t(192379),
    o = t(642128),
    s = t(442837),
    r = t(481060),
    a = t(727637),
    d = t(616780),
    c = t(100527),
    u = t(906732),
    I = t(680295),
    f = t(699516),
    p = t(5192),
    x = t(785717),
    h = t(221292),
    m = t(687158),
    _ = t(326094),
    Z = t(510659),
    v = t(113557),
    g = t(867176),
    j = t(451834),
    E = t(502762),
    y = t(544989),
    N = t(705556),
    T = t(481932),
    b = t(195387),
    P = t(272510),
    S = t(4517),
    L = t(171368),
    C = t(62154),
    A = t(412317),
    O = t(228168),
    R = t(981631),
    M = t(388032),
    U = t(757672);
function B(e) {
    let { user: n, currentUser: t, guildId: B, channelId: F, messageId: D, roleId: w, sessionId: G, friendToken: k, initialSection: V, initialSubsection: W, transitionState: Y, onClose: K, showGuildProfile: J = !0, sourceAnalyticsLocations: X = [] } = e,
        { analyticsLocations: q } = (0, u.ZP)([...X, c.Z.SIMPLIFIED_PROFILE_MODAL]),
        z = (0, _.Z)({
            user: n,
            currentUser: t,
            location: R.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        H = (0, x.ZB)({
            layout: z ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: G,
            guildId: B,
            channelId: F,
            messageId: D,
            roleId: w,
            showGuildProfile: J
        }),
        Q = (0, Z.$m)(),
        $ = (0, r.q_F)({
            opacity: null != Q.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        ee = (0, m.ZP)(n.id, J ? B : void 0),
        en = (0, m.ZP)(n.id, B),
        et = (0, s.e7)([f.Z], () => f.Z.getRelationshipType(n.id)),
        ei = n.id === t.id,
        el = l.useMemo(() => (null != B ? { [B]: [n.id] } : {}), [B, n.id]);
    (0, d.$)(el);
    let eo = l.createRef(),
        es = (0, a.Z)(eo);
    return (0, i.jsx)(u.Gt, {
        value: q,
        children: (0, i.jsx)(x.Mt, {
            value: H,
            children: (0, i.jsx)(Z.NJ, {
                value: Q,
                children: (0, i.jsxs)(r.Y0X, {
                    transitionState: Y,
                    className: U.root,
                    hideShadow: !0,
                    'aria-label': M.intl.string(M.t['3N/J2t']),
                    children: [
                        (0, i.jsxs)(E.Z, {
                            user: n,
                            displayProfile: ee,
                            profileType: O.y0.FULL_SIZE,
                            ref: eo,
                            children: [
                                (0, i.jsxs)(y.Z, {
                                    profileType: O.y0.FULL_SIZE,
                                    children: [
                                        (0, i.jsx)(b.Z, {
                                            shouldShowTooltip: null === Q.interactionType,
                                            user: n,
                                            guildId: B,
                                            channelId: F,
                                            onClose: K
                                        }),
                                        (0, i.jsx)(T.Z, {
                                            shouldShowTooltip: null === Q.interactionType,
                                            profileType: O.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: k
                                        }),
                                        (0, i.jsx)(P.Z, {
                                            user: n,
                                            guildId: B,
                                            viewProfileItem:
                                                (null == en ? void 0 : en.guildId) == null
                                                    ? null
                                                    : (null == ee ? void 0 : ee.guildId) != null
                                                      ? (0, i.jsx)(r.sNh, {
                                                            id: 'view-main-profile',
                                                            label: M.intl.string(M.t.GISTtb),
                                                            subtext: M.intl.formatToPlainString(M.t['mn/nW1'], { displayName: p.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                K(),
                                                                    (0, L.openUserProfileModal)({
                                                                        ...H,
                                                                        showGuildProfile: !1,
                                                                        friendToken: k,
                                                                        sourceAnalyticsLocations: X
                                                                    }),
                                                                    (0, h.pQ)({
                                                                        action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                        analyticsLocations: q,
                                                                        ...H
                                                                    });
                                                            }
                                                        })
                                                      : (0, i.jsx)(r.sNh, {
                                                            id: 'view-server-profile',
                                                            label: M.intl.string(M.t.DisZzM),
                                                            subtext: M.intl.formatToPlainString(M.t['mn/nW1'], { displayName: p.ZP.getName(B, F, n) }),
                                                            action: () => {
                                                                K(),
                                                                    (0, L.openUserProfileModal)({
                                                                        ...H,
                                                                        showGuildProfile: !0,
                                                                        friendToken: k,
                                                                        sourceAnalyticsLocations: X
                                                                    }),
                                                                    (0, h.pQ)({
                                                                        action: 'PRESS_VIEW_SERVER_PROFILE',
                                                                        analyticsLocations: q,
                                                                        ...H
                                                                    });
                                                            }
                                                        })
                                        })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    children: [
                                        (0, i.jsx)(g.Z, {
                                            user: n,
                                            displayProfile: ee,
                                            profileType: O.y0.FULL_SIZE
                                        }),
                                        (0, i.jsx)(j.Z, {
                                            userId: n.id,
                                            onClose: K,
                                            className: U.toast
                                        }),
                                        null != Q.interactionType &&
                                            (0, i.jsx)(o.animated.div, {
                                                style: $,
                                                className: U.backdrop
                                            }),
                                        (0, i.jsxs)('div', {
                                            className: U.headerInner,
                                            children: [
                                                (0, i.jsx)(v.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: ee,
                                                    guildId: B,
                                                    channelId: F,
                                                    profileType: O.y0.FULL_SIZE
                                                }),
                                                (0, i.jsx)(S.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: B,
                                                    channelId: F,
                                                    profileType: O.y0.FULL_SIZE,
                                                    hasEntered: Y === r.Dvm.ENTERED,
                                                    onCloseProfile: K
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: U.headerButtons,
                                                    children: [
                                                        (0, i.jsx)(A.Z, {
                                                            isCurrentUser: ei,
                                                            user: n,
                                                            relationshipType: et,
                                                            friendToken: k,
                                                            onClose: K
                                                        }),
                                                        (0, i.jsx)(N.Z, {
                                                            user: n,
                                                            guildId: B,
                                                            onClose: K
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(C.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: B,
                                    channelId: F,
                                    displayProfile: ee,
                                    initialSection: V,
                                    initialSubsection: W,
                                    friendToken: k,
                                    onClose: K
                                })
                            ]
                        }),
                        (null == ee ? void 0 : ee.profileEffectId) != null &&
                            (0, i.jsx)(I.Z, {
                                profileEffectId: null == ee ? void 0 : ee.profileEffectId,
                                isHovering: es
                            })
                    ]
                })
            })
        })
    });
}
