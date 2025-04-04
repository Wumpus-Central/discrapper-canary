n.d(t, { Z: () => R });
var r = n(200651),
    i = n(442837),
    o = n(481060),
    a = n(372460),
    s = n(320582),
    l = n(189156),
    c = n(699516),
    u = n(246946),
    d = n(5192),
    f = n(74538),
    _ = n(648052),
    p = n(537006),
    h = n(483424),
    m = n(681837),
    g = n(91433),
    E = n(944043),
    b = n(502762),
    y = n(530),
    v = n(827313),
    O = n(420654),
    I = n(116854),
    S = n(166584),
    T = n(915014),
    N = n(228168),
    A = n(981631),
    C = n(200669);
function R(e) {
    let { user: t, currentUser: n, displayProfile: R, guild: P, isHovering: w, onOpenProfile: D, channelId: L, onClose: x } = e,
        M = d.ZP.useName(null == P ? void 0 : P.id, L, t),
        { relationshipType: k, originApplicationId: j } = (0, i.cj)([c.Z], () => ({
            relationshipType: c.Z.getRelationshipType(t.id),
            originApplicationId: c.Z.getOriginApplicationId(t.id)
        })),
        U = (0, s.vh)(t.id),
        G = (0, a.wn)({ location: 'UserProfilePopoutBody' }),
        B = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        F = t.id === n.id,
        V = (0, f.I5)(n);
    return (0, r.jsxs)(o.Ttm, {
        fade: !0,
        className: C.body,
        children: [
            (0, r.jsx)(y.Z, {
                user: t,
                profileType: N.y0.BITE_SIZE,
                onOpenProfile: D,
                usernameIcon:
                    t.hasAvatarForGuild(null == P ? void 0 : P.id) &&
                    (0, r.jsx)(I.Z, {
                        user: t,
                        nickname: M
                    }),
                nickname: M,
                pronouns: null == R ? void 0 : R.pronouns,
                tags: (0, r.jsx)(_.Z, {
                    displayProfile: R,
                    profileType: N.y0.BITE_SIZE,
                    onClose: x
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(m.Z, { userId: t.id }),
                        !B &&
                            (0, r.jsx)(v.Z, {
                                userId: t.id,
                                isHovering: w,
                                onOpenProfile: D
                            })
                    ]
                })
            }),
            k === A.OGo.PENDING_INCOMING &&
                (0, r.jsx)(b.Z.Overlay, {
                    children: (0, r.jsx)(g.Z, {
                        user: t,
                        guildId: null == P ? void 0 : P.id,
                        channelId: L,
                        applicationId: G ? j : void 0
                    })
                }),
            G &&
                U.map((e) =>
                    (0, r.jsx)(
                        b.Z.Overlay,
                        {
                            children: (0, r.jsx)(g.Z, {
                                user: t,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                channelId: L
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, r.jsx)(E.Z, {
                user: t,
                source: E.t.POPOUT
            }),
            !F &&
                (0, r.jsx)(T.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == D ? void 0 : D({ section: e }))
                }),
            t.isProvisional
                ? (0, r.jsx)(l.wQ, {
                      userId: t.id,
                      headingColor: 'header-primary'
                  })
                : (0, r.jsx)(O.Z, {
                      user: t,
                      bio: null == R ? void 0 : R.bio,
                      hidePersonalInformation: B,
                      onClose: x
                  }),
            F &&
                (0, r.jsx)(p.Z, {
                    isPremiumUser: V,
                    onInteraction: x,
                    className: C.upsell
                }),
            (0, r.jsx)(h.Z, {
                user: t,
                currentUser: n,
                displayProfile: R,
                guildId: null == P ? void 0 : P.id,
                onClose: x,
                className: C.activity
            }),
            null != P &&
                (0, r.jsx)(S.Z, {
                    user: t,
                    currentUser: n,
                    guild: P
                })
        ]
    });
}
