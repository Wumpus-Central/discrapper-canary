n.d(t, { Z: () => P });
var r = n(200651),
    i = n(442837),
    o = n(481060),
    a = n(320582),
    s = n(189156),
    l = n(699516),
    c = n(246946),
    u = n(5192),
    d = n(74538),
    f = n(209698),
    _ = n(648052),
    p = n(537006),
    h = n(483424),
    m = n(681837),
    g = n(91433),
    E = n(944043),
    b = n(638970),
    y = n(502762),
    O = n(530),
    v = n(827313),
    I = n(420654),
    S = n(116854),
    T = n(166584),
    A = n(915014),
    N = n(228168),
    C = n(981631),
    R = n(200669);
function P(e) {
    let { user: t, currentUser: n, displayProfile: P, guild: w, isHovering: D, onOpenProfile: L, channelId: x, onClose: M } = e,
        k = u.ZP.useName(null == w ? void 0 : w.id, x, t),
        { relationshipType: j, originApplicationId: U } = (0, i.cj)([l.Z], () => ({
            relationshipType: l.Z.getRelationshipType(t.id),
            originApplicationId: l.Z.getOriginApplicationId(t.id)
        })),
        G = (0, a.vh)(t.id),
        B = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        V = (0, f.b)({ location: 'UserProfilePopoutBody' }),
        F = t.id === n.id,
        Z = (0, d.I5)(n);
    return (0, r.jsxs)(o.Ttm, {
        fade: !0,
        className: R.body,
        children: [
            (0, r.jsx)(O.Z, {
                user: t,
                onOpenProfile: L,
                onClose: M,
                usernameIcon:
                    t.hasAvatarForGuild(null == w ? void 0 : w.id) &&
                    (0, r.jsx)(S.Z, {
                        user: t,
                        nickname: k
                    }),
                nickname: k,
                pronouns: null == P ? void 0 : P.pronouns,
                tags: (0, r.jsx)(_.Z, {
                    displayProfile: P,
                    themeType: N.lY.POPOUT,
                    onClose: M
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(m.Z, { userId: t.id }),
                        !B &&
                            (0, r.jsx)(v.Z, {
                                userId: t.id,
                                isHovering: D,
                                onOpenProfile: L
                            })
                    ]
                })
            }),
            j === C.OGo.PENDING_INCOMING &&
                (0, r.jsx)(y.Z.Overlay, {
                    children: (0, r.jsx)(g.Z, {
                        user: t,
                        guildId: null == w ? void 0 : w.id,
                        channelId: x,
                        applicationId: U
                    })
                }),
            G.map((e) =>
                (0, r.jsx)(
                    y.Z.Overlay,
                    {
                        children: (0, r.jsx)(g.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: x
                        })
                    },
                    e.applicationId
                )
            ),
            (0, r.jsx)(E.Z, { user: t }),
            !F &&
                (0, r.jsx)(A.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == L ? void 0 : L({ section: e }))
                }),
            t.isProvisional
                ? (0, r.jsx)(s.wQ, {
                      userId: t.id,
                      headingColor: 'header-primary'
                  })
                : (0, r.jsx)(I.Z, {
                      user: t,
                      bio: null == P ? void 0 : P.bio,
                      hidePersonalInformation: B,
                      onClose: M
                  }),
            F &&
                (0, r.jsx)(p.Z, {
                    isPremiumUser: Z,
                    onInteraction: M
                }),
            V
                ? (0, r.jsx)(b.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: P,
                      guildId: null == w ? void 0 : w.id,
                      onOpenUserProfileModal: L,
                      onClose: M
                  })
                : (0, r.jsx)(h.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: P,
                      guildId: null == w ? void 0 : w.id,
                      onClose: M
                  }),
            null != w &&
                (0, r.jsx)(T.Z, {
                    user: t,
                    currentUser: n,
                    guild: w
                })
        ]
    });
}
