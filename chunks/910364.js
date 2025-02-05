t.d(n, { Z: () => w }), t(47120);
var i = t(200651),
    l = t(192379),
    o = t(642128),
    s = t(442837),
    r = t(481060),
    a = t(727637),
    d = t(616780),
    c = t(100527),
    u = t(906732),
    m = t(680295),
    x = t(699516),
    p = t(5192),
    I = t(785717),
    f = t(221292),
    h = t(816988),
    v = t(687158),
    Z = t(326094),
    g = t(510659),
    _ = t(113557),
    j = t(867176),
    E = t(451834),
    N = t(502762),
    y = t(544989),
    T = t(705556),
    P = t(481932),
    S = t(195387),
    b = t(272510),
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
function w(e) {
    let { user: n, currentUser: t, guildId: w, channelId: G, messageId: k, roleId: V, sessionId: W, friendToken: z, initialSection: K, initialSubsection: Y, transitionState: X, onClose: q, showGuildProfile: J = !0, sourceAnalyticsLocations: H = [] } = e,
        { analyticsLocations: Q } = (0, u.ZP)([...H, c.Z.SIMPLIFIED_PROFILE_MODAL]),
        $ = (0, Z.Z)({
            user: n,
            currentUser: t,
            location: B.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        ee = (0, I.ZB)({
            layout: $ ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: W,
            guildId: w,
            channelId: G,
            messageId: k,
            roleId: V,
            showGuildProfile: J
        }),
        en = (0, g.$m)(),
        et = (0, r.q_F)({
            opacity: null != en.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        ei = (0, v.ZP)(n.id, J ? w : void 0),
        el = (0, v.ZP)(n.id, w),
        eo = (0, s.e7)([x.Z], () => x.Z.getRelationshipType(n.id)),
        es = n.id === t.id,
        er = l.useMemo(() => (null != w ? { [w]: [n.id] } : {}), [w, n.id]);
    (0, d.$)(er);
    let ea = l.createRef(),
        ed = (0, a.Z)(ea),
        { permanentEntryPointsEnabled: ec } = (0, h.u)({ location: 'UserProfileModal' });
    return (0, i.jsx)(u.Gt, {
        value: Q,
        children: (0, i.jsx)(I.Mt, {
            value: ee,
            children: (0, i.jsx)(g.NJ, {
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
                                        ec &&
                                            es &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(C.Z, { onClose: q }),
                                                    (0, i.jsx)(L.Z, {
                                                        currentUser: t,
                                                        onClose: q
                                                    })
                                                ]
                                            }),
                                        (0, i.jsx)(S.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            user: n,
                                            guildId: w,
                                            channelId: G,
                                            onClose: q
                                        }),
                                        (0, i.jsx)(P.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            profileType: U.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: z
                                        }),
                                        (0, i.jsx)(b.Z, {
                                            user: n,
                                            guildId: w,
                                            viewProfileItem:
                                                (null == el ? void 0 : el.guildId) == null
                                                    ? null
                                                    : (null == ei ? void 0 : ei.guildId) != null
                                                      ? (0, i.jsx)(r.sNh, {
                                                            id: 'view-main-profile',
                                                            label: F.intl.string(F.t.GISTtb),
                                                            subtext: F.intl.formatToPlainString(F.t['mn/nW1'], { displayName: p.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                q(),
                                                                    (0, O.openUserProfileModal)({
                                                                        ...ee,
                                                                        showGuildProfile: !1,
                                                                        friendToken: z,
                                                                        sourceAnalyticsLocations: H
                                                                    }),
                                                                    (0, f.pQ)({
                                                                        action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                        analyticsLocations: Q,
                                                                        ...ee
                                                                    });
                                                            }
                                                        })
                                                      : (0, i.jsx)(r.sNh, {
                                                            id: 'view-server-profile',
                                                            label: F.intl.string(F.t.DisZzM),
                                                            subtext: F.intl.formatToPlainString(F.t['mn/nW1'], { displayName: p.ZP.getName(w, G, n) }),
                                                            action: () => {
                                                                q(),
                                                                    (0, O.openUserProfileModal)({
                                                                        ...ee,
                                                                        showGuildProfile: !0,
                                                                        friendToken: z,
                                                                        sourceAnalyticsLocations: H
                                                                    }),
                                                                    (0, f.pQ)({
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
                                            onClose: q,
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
                                                (0, i.jsx)(_.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: ei,
                                                    guildId: w,
                                                    channelId: G,
                                                    profileType: U.y0.FULL_SIZE
                                                }),
                                                (0, i.jsx)(A.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: w,
                                                    channelId: G,
                                                    profileType: U.y0.FULL_SIZE,
                                                    hasEntered: X === r.Dvm.ENTERED,
                                                    onCloseProfile: q
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: D.headerButtons,
                                                    children: [
                                                        (0, i.jsx)(R.Z, {
                                                            isCurrentUser: es,
                                                            user: n,
                                                            relationshipType: eo,
                                                            friendToken: z,
                                                            onClose: q
                                                        }),
                                                        (0, i.jsx)(T.Z, {
                                                            user: n,
                                                            guildId: w,
                                                            onClose: q
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
                                    guildId: w,
                                    channelId: G,
                                    displayProfile: ei,
                                    initialSection: K,
                                    initialSubsection: Y,
                                    friendToken: z,
                                    onClose: q
                                })
                            ]
                        }),
                        (null == ei ? void 0 : ei.profileEffectId) != null &&
                            (0, i.jsx)(m.Z, {
                                profileEffectId: null == ei ? void 0 : ei.profileEffectId,
                                isHovering: ed
                            })
                    ]
                })
            })
        })
    });
}
