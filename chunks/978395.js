n.d(t, { Z: () => O });
var i = n(200651),
    r = n(442837),
    a = n(481060),
    s = n(372460),
    o = n(320582),
    l = n(189156),
    u = n(699516),
    c = n(246946),
    d = n(5192),
    f = n(74538),
    _ = n(648052),
    p = n(537006),
    h = n(483424),
    m = n(681837),
    g = n(91433),
    E = n(944043),
    v = n(502762),
    y = n(530),
    I = n(827313),
    T = n(420654),
    b = n(116854),
    S = n(166584),
    A = n(915014),
    N = n(228168),
    C = n(981631),
    R = n(593401);
function O(e) {
    let { user: t, currentUser: n, displayProfile: O, guild: D, isHovering: L, onOpenProfile: x, channelId: P, onClose: w } = e,
        M = d.ZP.useName(null == D ? void 0 : D.id, P, t),
        { relationshipType: k, originApplicationId: U } = (0, r.cj)([u.Z], () => ({
            relationshipType: u.Z.getRelationshipType(t.id),
            originApplicationId: u.Z.getOriginApplicationId(t.id)
        })),
        G = (0, o.vh)(t.id),
        B = (0, s.wn)({ location: 'UserProfilePopoutBody' }),
        Z = (0, r.e7)([c.Z], () => c.Z.hidePersonalInformation),
        F = t.id === n.id,
        V = (0, f.I5)(n);
    return (0, i.jsxs)(a.Ttm, {
        fade: !0,
        className: R.body,
        children: [
            (0, i.jsx)(y.Z, {
                user: t,
                profileType: N.y0.BITE_SIZE,
                onOpenProfile: x,
                usernameIcon:
                    t.hasAvatarForGuild(null == D ? void 0 : D.id) &&
                    (0, i.jsx)(b.Z, {
                        user: t,
                        nickname: M
                    }),
                nickname: M,
                pronouns: null == O ? void 0 : O.pronouns,
                tags: (0, i.jsx)(_.Z, {
                    displayProfile: O,
                    profileType: N.y0.BITE_SIZE,
                    onClose: w
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m.Z, { userId: t.id }),
                        !Z &&
                            (0, i.jsx)(I.Z, {
                                userId: t.id,
                                isHovering: L,
                                onOpenProfile: x
                            })
                    ]
                })
            }),
            k === C.OGo.PENDING_INCOMING &&
                (0, i.jsx)(v.Z.Overlay, {
                    children: (0, i.jsx)(g.Z, {
                        user: t,
                        guildId: null == D ? void 0 : D.id,
                        channelId: P,
                        applicationId: B ? U : void 0
                    })
                }),
            B &&
                G.map((e) =>
                    (0, i.jsx)(
                        v.Z.Overlay,
                        {
                            children: (0, i.jsx)(g.Z, {
                                user: t,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                channelId: P
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, i.jsx)(E.Z, {
                user: t,
                source: E.t.POPOUT
            }),
            !F &&
                (0, i.jsx)(A.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == x ? void 0 : x({ section: e }))
                }),
            t.isProvisional
                ? (0, i.jsx)(l.wQ, {
                      userId: t.id,
                      headingColor: 'header-primary'
                  })
                : (0, i.jsx)(T.Z, {
                      user: t,
                      bio: null == O ? void 0 : O.bio,
                      hidePersonalInformation: Z,
                      onClose: w
                  }),
            F &&
                (0, i.jsx)(p.Z, {
                    isPremiumUser: V,
                    onInteraction: w,
                    className: R.upsell
                }),
            (0, i.jsx)(h.Z, {
                user: t,
                currentUser: n,
                displayProfile: O,
                guildId: null == D ? void 0 : D.id,
                onClose: w,
                className: R.activity
            }),
            null != D &&
                (0, i.jsx)(S.Z, {
                    user: t,
                    currentUser: n,
                    guild: D
                })
        ]
    });
}
