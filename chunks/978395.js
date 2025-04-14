n.d(t, { Z: () => C });
var r = n(200651),
    i = n(442837),
    o = n(481060),
    a = n(320582),
    s = n(189156),
    l = n(699516),
    c = n(246946),
    u = n(5192),
    d = n(74538),
    f = n(648052),
    _ = n(537006),
    p = n(483424),
    h = n(681837),
    m = n(91433),
    g = n(944043),
    E = n(502762),
    b = n(530),
    y = n(827313),
    v = n(420654),
    O = n(116854),
    I = n(166584),
    S = n(915014),
    T = n(228168),
    N = n(981631),
    A = n(200669);
function C(e) {
    let { user: t, currentUser: n, displayProfile: C, guild: R, isHovering: P, onOpenProfile: w, channelId: D, onClose: L } = e,
        x = u.ZP.useName(null == R ? void 0 : R.id, D, t),
        { relationshipType: M, originApplicationId: k } = (0, i.cj)([l.Z], () => ({
            relationshipType: l.Z.getRelationshipType(t.id),
            originApplicationId: l.Z.getOriginApplicationId(t.id)
        })),
        j = (0, a.vh)(t.id),
        U = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        G = t.id === n.id,
        B = (0, d.I5)(n);
    return (0, r.jsxs)(o.Ttm, {
        fade: !0,
        className: A.body,
        children: [
            (0, r.jsx)(b.Z, {
                user: t,
                profileType: T.y0.BITE_SIZE,
                onOpenProfile: w,
                usernameIcon:
                    t.hasAvatarForGuild(null == R ? void 0 : R.id) &&
                    (0, r.jsx)(O.Z, {
                        user: t,
                        nickname: x
                    }),
                nickname: x,
                pronouns: null == C ? void 0 : C.pronouns,
                tags: (0, r.jsx)(f.Z, {
                    displayProfile: C,
                    profileType: T.y0.BITE_SIZE,
                    onClose: L
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.Z, { userId: t.id }),
                        !U &&
                            (0, r.jsx)(y.Z, {
                                userId: t.id,
                                isHovering: P,
                                onOpenProfile: w
                            })
                    ]
                })
            }),
            M === N.OGo.PENDING_INCOMING &&
                (0, r.jsx)(E.Z.Overlay, {
                    children: (0, r.jsx)(m.Z, {
                        user: t,
                        guildId: null == R ? void 0 : R.id,
                        channelId: D,
                        applicationId: k
                    })
                }),
            j.map((e) =>
                (0, r.jsx)(
                    E.Z.Overlay,
                    {
                        children: (0, r.jsx)(m.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: D
                        })
                    },
                    e.applicationId
                )
            ),
            (0, r.jsx)(g.Z, { user: t }),
            !G &&
                (0, r.jsx)(S.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == w ? void 0 : w({ section: e }))
                }),
            t.isProvisional
                ? (0, r.jsx)(s.wQ, {
                      userId: t.id,
                      headingColor: 'header-primary'
                  })
                : (0, r.jsx)(v.Z, {
                      user: t,
                      bio: null == C ? void 0 : C.bio,
                      hidePersonalInformation: U,
                      onClose: L
                  }),
            G &&
                (0, r.jsx)(_.Z, {
                    isPremiumUser: B,
                    onInteraction: L
                }),
            (0, r.jsx)(p.Z, {
                user: t,
                currentUser: n,
                displayProfile: C,
                guildId: null == R ? void 0 : R.id,
                onClose: L
            }),
            null != R &&
                (0, r.jsx)(I.Z, {
                    user: t,
                    currentUser: n,
                    guild: R
                })
        ]
    });
}
