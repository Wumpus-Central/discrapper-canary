t.d(n, { Z: () => G }), t(47120);
var i = t(200651),
    l = t(192379),
    o = t(642128),
    s = t(442837),
    r = t(481060),
    a = t(727637),
    c = t(616780),
    d = t(100527),
    u = t(906732),
    m = t(680295),
    x = t(699516),
    p = t(5192),
    f = t(785717),
    I = t(221292),
    h = t(816988),
    v = t(687158),
    Z = t(326094),
    _ = t(510659),
    g = t(113557),
    j = t(867176),
    E = t(451834),
    N = t(502762),
    y = t(544989),
    T = t(705556),
    P = t(481932),
    b = t(195387),
    S = t(272510),
    L = t(748283),
    C = t(902423),
    A = t(4517),
    O = t(171368),
    M = t(62154),
    R = t(412317),
    U = t(228168),
    B = t(981631),
    F = t(388032),
    D = t(171865);
function G(e) {
    let { user: n, currentUser: t, guildId: G, channelId: w, messageId: k, roleId: V, sessionId: W, friendToken: z, initialSection: K, initialSubsection: Y, transitionState: X, onClose: J, showGuildProfile: q = !0, sourceAnalyticsLocations: H = [] } = e,
        { analyticsLocations: Q } = (0, u.ZP)([...H, d.Z.SIMPLIFIED_PROFILE_MODAL]),
        $ = (0, Z.Z)({
            user: n,
            currentUser: t,
            location: B.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        ee = (0, f.ZB)({
            layout: $ ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: W,
            guildId: G,
            channelId: w,
            messageId: k,
            roleId: V,
            showGuildProfile: q
        }),
        en = (0, _.$m)(),
        et = (0, r.q_F)({
            opacity: null != en.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        ei = (0, v.ZP)(n.id, q ? G : void 0),
        el = (0, v.ZP)(n.id, G),
        eo = (0, s.e7)([x.Z], () => x.Z.getRelationshipType(n.id)),
        es = n.id === t.id,
        er = l.useMemo(() => (null != G ? { [G]: [n.id] } : {}), [G, n.id]);
    (0, c.$)(er);
    let ea = l.createRef(),
        ec = (0, a.Z)(ea),
        { permanentEntryPointsEnabled: ed } = (0, h.u)({ location: 'UserProfileModal' });
    return (0, i.jsx)(u.Gt, {
        value: Q,
        children: (0, i.jsx)(f.Mt, {
            value: ee,
            children: (0, i.jsx)(_.NJ, {
                value: en,
                children: (0, i.jsxs)(r.Y0X, {
                    transitionState: X,
                    className: D.root,
                    hideShadow: !0,
                    'aria-label': F.intl.string(F.t['3N/J2t']),
                    children: [
                        (0, i.jsxs)(N.Z, {
                            user: n,
                            displayProfile: ei,
                            profileType: U.y0.FULL_SIZE,
                            ref: ea,
                            children: [
                                (0, i.jsxs)(y.Z, {
                                    profileType: U.y0.FULL_SIZE,
                                    children: [
                                        ed &&
                                            es &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(C.Z, { onClose: J }),
                                                    (0, i.jsx)(L.Z, {
                                                        currentUser: t,
                                                        onClose: J
                                                    })
                                                ]
                                            }),
                                        (0, i.jsx)(b.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            user: n,
                                            guildId: G,
                                            channelId: w,
                                            onClose: J
                                        }),
                                        (0, i.jsx)(P.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            profileType: U.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: z
                                        }),
                                        (0, i.jsx)(S.Z, {
                                            user: n,
                                            guildId: G,
                                            viewProfileItem:
                                                (null == el ? void 0 : el.guildId) == null
                                                    ? null
                                                    : (null == ei ? void 0 : ei.guildId) != null
                                                      ? (0, i.jsx)(r.sNh, {
                                                            id: 'view-main-profile',
                                                            label: F.intl.string(F.t.GISTtb),
                                                            subtext: F.intl.formatToPlainString(F.t['mn/nW1'], { displayName: p.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                J(),
                                                                    (0, O.openUserProfileModal)({
                                                                        ...ee,
                                                                        showGuildProfile: !1,
                                                                        friendToken: z,
                                                                        sourceAnalyticsLocations: H
                                                                    }),
                                                                    (0, I.pQ)({
                                                                        action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                        analyticsLocations: Q,
                                                                        ...ee
                                                                    });
                                                            }
                                                        })
                                                      : (0, i.jsx)(r.sNh, {
                                                            id: 'view-server-profile',
                                                            label: F.intl.string(F.t.DisZzM),
                                                            subtext: F.intl.formatToPlainString(F.t['mn/nW1'], { displayName: p.ZP.getName(G, w, n) }),
                                                            action: () => {
                                                                J(),
                                                                    (0, O.openUserProfileModal)({
                                                                        ...ee,
                                                                        showGuildProfile: !0,
                                                                        friendToken: z,
                                                                        sourceAnalyticsLocations: H
                                                                    }),
                                                                    (0, I.pQ)({
                                                                        action: 'PRESS_VIEW_SERVER_PROFILE',
                                                                        analyticsLocations: Q,
                                                                        ...ee
                                                                    });
                                                            }
                                                        })
                                        })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    children: [
                                        (0, i.jsx)(j.Z, {
                                            user: n,
                                            displayProfile: ei,
                                            profileType: U.y0.FULL_SIZE
                                        }),
                                        (0, i.jsx)(E.Z, {
                                            userId: n.id,
                                            onClose: J,
                                            className: D.toast
                                        }),
                                        null != en.interactionType &&
                                            (0, i.jsx)(o.animated.div, {
                                                style: et,
                                                className: D.backdrop
                                            }),
                                        (0, i.jsxs)('div', {
                                            className: D.headerInner,
                                            children: [
                                                (0, i.jsx)(g.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: ei,
                                                    guildId: G,
                                                    channelId: w,
                                                    profileType: U.y0.FULL_SIZE
                                                }),
                                                (0, i.jsx)(A.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: G,
                                                    channelId: w,
                                                    profileType: U.y0.FULL_SIZE,
                                                    hasEntered: X === r.Dvm.ENTERED,
                                                    onCloseProfile: J
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: D.headerButtons,
                                                    children: [
                                                        (0, i.jsx)(R.Z, {
                                                            isCurrentUser: es,
                                                            user: n,
                                                            relationshipType: eo,
                                                            friendToken: z,
                                                            onClose: J
                                                        }),
                                                        (0, i.jsx)(T.Z, {
                                                            user: n,
                                                            guildId: G,
                                                            onClose: J
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(M.Z, {
                                    user: n,
                                    currentUser: t,
                                    channelId: w,
                                    displayProfile: ei,
                                    initialSection: K,
                                    initialSubsection: Y,
                                    friendToken: z,
                                    onClose: J
                                })
                            ]
                        }),
                        (null == ei ? void 0 : ei.profileEffectId) != null &&
                            (0, i.jsx)(m.Z, {
                                profileEffectId: null == ei ? void 0 : ei.profileEffectId,
                                isHovering: ec
                            })
                    ]
                })
            })
        })
    });
}
