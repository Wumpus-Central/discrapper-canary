n.d(t, { Z: () => D });
var i = n(200651),
    r = n(442837),
    a = n(481060),
    s = n(372460),
    o = n(91896),
    l = n(189156),
    u = n(699516),
    c = n(246946),
    d = n(5192),
    f = n(74538),
    _ = n(816988),
    p = n(648052),
    h = n(537006),
    m = n(483424),
    g = n(681837),
    E = n(91433),
    v = n(944043),
    y = n(502762),
    I = n(530),
    b = n(827313),
    T = n(420654),
    S = n(116854),
    A = n(166584),
    N = n(915014),
    C = n(228168),
    R = n(981631),
    O = n(591156);
function D(e) {
    let { user: t, currentUser: n, displayProfile: D, guild: x, isHovering: L, onOpenProfile: P, channelId: w, onClose: M } = e,
        k = d.ZP.useName(null == x ? void 0 : x.id, w, t),
        { relationshipType: U, originApplicationId: G } = (0, r.cj)([u.Z], () => ({
            relationshipType: u.Z.getRelationshipType(t.id),
            originApplicationId: u.Z.getOriginApplicationId(t.id)
        })),
        B = (0, r.Wu)([o.Z], () => o.Z.getGameRelationshipsForUserOfType(t.id, R.OGo.PENDING_INCOMING)),
        Z = (0, s.wn)({ location: 'UserProfilePopoutBody' }),
        F = (0, r.e7)([c.Z], () => c.Z.hidePersonalInformation),
        V = t.id === n.id,
        { dimissibleUpsellsEnabled: j } = (0, _.u)({ location: 'UserProfilePopoutBody' }),
        H = (0, f.I5)(n);
    return (0, i.jsxs)(a.Ttm, {
        fade: !0,
        className: O.body,
        children: [
            (0, i.jsx)(I.Z, {
                user: t,
                profileType: C.y0.BITE_SIZE,
                onOpenProfile: P,
                usernameIcon:
                    t.hasAvatarForGuild(null == x ? void 0 : x.id) &&
                    (0, i.jsx)(S.Z, {
                        user: t,
                        nickname: k
                    }),
                nickname: k,
                pronouns: null == D ? void 0 : D.pronouns,
                tags: (0, i.jsx)(p.Z, {
                    displayProfile: D,
                    profileType: C.y0.BITE_SIZE,
                    onClose: M
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(g.Z, { userId: t.id }),
                        !F &&
                            (0, i.jsx)(b.Z, {
                                userId: t.id,
                                isHovering: L,
                                onOpenProfile: P
                            })
                    ]
                })
            }),
            U === R.OGo.PENDING_INCOMING &&
                (0, i.jsx)(y.Z.Overlay, {
                    children: (0, i.jsx)(E.Z, {
                        user: t,
                        guildId: null == x ? void 0 : x.id,
                        channelId: w,
                        applicationId: Z ? G : void 0
                    })
                }),
            Z &&
                B.map((e) =>
                    (0, i.jsx)(
                        y.Z.Overlay,
                        {
                            children: (0, i.jsx)(E.Z, {
                                user: t,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                channelId: w
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, i.jsx)(v.Z, {
                user: t,
                source: v.t.POPOUT
            }),
            !V &&
                (0, i.jsx)(N.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == P ? void 0 : P({ section: e }))
                }),
            t.isProvisional
                ? (0, i.jsx)(l.Z, {
                      look: 'profile',
                      userId: t.id
                  })
                : (0, i.jsx)(T.Z, {
                      user: t,
                      bio: null == D ? void 0 : D.bio,
                      hidePersonalInformation: F,
                      onClose: M
                  }),
            j &&
                V &&
                (0, i.jsx)(h.Z, {
                    isPremiumUser: H,
                    onInteraction: M,
                    className: O.upsell
                }),
            (0, i.jsx)(m.Z, {
                user: t,
                currentUser: n,
                displayProfile: D,
                guildId: null == x ? void 0 : x.id,
                onClose: M,
                className: O.activity
            }),
            null != x &&
                (0, i.jsx)(A.Z, {
                    user: t,
                    currentUser: n,
                    guild: x
                })
        ]
    });
}
