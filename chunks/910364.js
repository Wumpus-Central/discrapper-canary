i.d(n, { Z: () => w }), i(47120);
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
    h = i(816988),
    v = i(687158),
    g = i(326094),
    Z = i(510659),
    _ = i(113557),
    j = i(867176),
    E = i(451834),
    N = i(502762),
    y = i(544989),
    T = i(705556),
    P = i(481932),
    b = i(195387),
    S = i(272510),
    L = i(748283),
    C = i(902423),
    A = i(4517),
    M = i(171368),
    O = i(62154),
    R = i(412317),
    U = i(228168),
    B = i(981631),
    F = i(388032),
    D = i(171865);
function w(e) {
    let { user: n, currentUser: i, guildId: w, channelId: G, messageId: k, roleId: V, sessionId: W, friendToken: z, initialSection: K, initialSubsection: Y, transitionState: X, onClose: J, showGuildProfile: q = !0, sourceAnalyticsLocations: H = [] } = e,
        { analyticsLocations: Q } = (0, u.ZP)([...H, c.Z.SIMPLIFIED_PROFILE_MODAL]),
        $ = (0, g.Z)({
            user: n,
            currentUser: i,
            location: B.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        ee = (0, f.ZB)({
            layout: $ ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: W,
            guildId: w,
            channelId: G,
            messageId: k,
            roleId: V,
            showGuildProfile: q
        }),
        en = (0, Z.$m)(),
        ei = (0, r.q_F)({
            opacity: null != en.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        et = (0, v.ZP)(n.id, q ? w : void 0),
        el = (0, v.ZP)(n.id, w),
        eo = (0, s.e7)([x.Z], () => x.Z.getRelationshipType(n.id)),
        es = n.id === i.id,
        er = l.useMemo(() => (null != w ? { [w]: [n.id] } : {}), [w, n.id]);
    (0, d.$)(er);
    let ea = l.createRef(),
        ed = (0, a.Z)(ea),
        { permanentEntryPointsEnabled: ec } = (0, h.u)({ location: 'UserProfileModal' });
    return (0, t.jsx)(u.Gt, {
        value: Q,
        children: (0, t.jsx)(f.Mt, {
            value: ee,
            children: (0, t.jsx)(Z.NJ, {
                value: en,
                children: (0, t.jsxs)(r.Y0X, {
                    transitionState: X,
                    className: D.root,
                    hideShadow: !0,
                    'aria-label': F.intl.string(F.t['3N/J2t']),
                    children: [
                        (0, t.jsxs)(N.Z, {
                            user: n,
                            displayProfile: et,
                            profileType: U.y0.FULL_SIZE,
                            ref: ea,
                            children: [
                                (0, t.jsxs)(y.Z, {
                                    profileType: U.y0.FULL_SIZE,
                                    children: [
                                        ec &&
                                            es &&
                                            (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(C.Z, { onClose: J }),
                                                    (0, t.jsx)(L.Z, {
                                                        currentUser: i,
                                                        onClose: J
                                                    })
                                                ]
                                            }),
                                        (0, t.jsx)(b.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            user: n,
                                            guildId: w,
                                            channelId: G,
                                            onClose: J
                                        }),
                                        (0, t.jsx)(P.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            profileType: U.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: z
                                        }),
                                        (0, t.jsx)(S.Z, {
                                            user: n,
                                            guildId: w,
                                            viewProfileItem:
                                                (null == el ? void 0 : el.guildId) == null
                                                    ? null
                                                    : (null == et ? void 0 : et.guildId) != null
                                                      ? (0, t.jsx)(r.sNh, {
                                                            id: 'view-main-profile',
                                                            label: F.intl.string(F.t.GISTtb),
                                                            subtext: F.intl.formatToPlainString(F.t['mn/nW1'], { displayName: p.ZP.getName(void 0, void 0, n) }),
                                                            action: () => {
                                                                J(),
                                                                    (0, M.openUserProfileModal)({
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
                                                      : (0, t.jsx)(r.sNh, {
                                                            id: 'view-server-profile',
                                                            label: F.intl.string(F.t.DisZzM),
                                                            subtext: F.intl.formatToPlainString(F.t['mn/nW1'], { displayName: p.ZP.getName(w, G, n) }),
                                                            action: () => {
                                                                J(),
                                                                    (0, M.openUserProfileModal)({
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
                                (0, t.jsxs)('header', {
                                    children: [
                                        (0, t.jsx)(j.Z, {
                                            user: n,
                                            displayProfile: et,
                                            profileType: U.y0.FULL_SIZE
                                        }),
                                        (0, t.jsx)(E.Z, {
                                            userId: n.id,
                                            onClose: J,
                                            className: D.toast
                                        }),
                                        null != en.interactionType &&
                                            (0, t.jsx)(o.animated.div, {
                                                style: ei,
                                                className: D.backdrop
                                            }),
                                        (0, t.jsxs)('div', {
                                            className: D.headerInner,
                                            children: [
                                                (0, t.jsx)(_.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: et,
                                                    guildId: w,
                                                    channelId: G,
                                                    profileType: U.y0.FULL_SIZE
                                                }),
                                                (0, t.jsx)(A.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: w,
                                                    channelId: G,
                                                    profileType: U.y0.FULL_SIZE,
                                                    hasEntered: X === r.Dvm.ENTERED,
                                                    onCloseProfile: J
                                                }),
                                                (0, t.jsxs)('div', {
                                                    className: D.headerButtons,
                                                    children: [
                                                        (0, t.jsx)(R.Z, {
                                                            isCurrentUser: es,
                                                            user: n,
                                                            relationshipType: eo,
                                                            friendToken: z,
                                                            onClose: J
                                                        }),
                                                        (0, t.jsx)(T.Z, {
                                                            user: n,
                                                            guildId: w,
                                                            onClose: J
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, t.jsx)(O.Z, {
                                    user: n,
                                    currentUser: i,
                                    guildId: w,
                                    channelId: G,
                                    displayProfile: et,
                                    initialSection: K,
                                    initialSubsection: Y,
                                    friendToken: z,
                                    onClose: J
                                })
                            ]
                        }),
                        (null == et ? void 0 : et.profileEffectId) != null &&
                            (0, t.jsx)(m.Z, {
                                profileEffectId: null == et ? void 0 : et.profileEffectId,
                                isHovering: ed
                            })
                    ]
                })
            })
        })
    });
}
