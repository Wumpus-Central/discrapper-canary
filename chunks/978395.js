n.d(t, { Z: () => D });
var r = n(255367),
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
    b = n(678738),
    y = n(638970),
    O = n(502762),
    v = n(530),
    I = n(827313),
    S = n(420654),
    T = n(116854),
    A = n(166584),
    N = n(915014),
    C = n(228168),
    P = n(981631),
    R = n(388032),
    w = n(165957);
function D(e) {
    let { user: t, currentUser: n, displayProfile: D, guild: L, isHovering: x, onOpenProfile: k, channelId: M, onClose: j } = e,
        U = u.ZP.useName(null == L ? void 0 : L.id, M, t),
        { relationshipType: G, originApplicationId: B } = (0, i.cj)([l.Z], () => ({
            relationshipType: l.Z.getRelationshipType(t.id),
            originApplicationId: l.Z.getOriginApplicationId(t.id)
        })),
        F = (0, a.vh)(t.id),
        V = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        Z = (0, f.b)({ location: 'UserProfilePopoutBody' }),
        H = t.id === n.id,
        Y = (0, d.I5)(n);
    return (0, r.jsxs)(o.Ttm, {
        fade: !0,
        className: w.body,
        children: [
            (0, r.jsx)(v.Z, {
                user: t,
                onOpenProfile: k,
                onClose: j,
                usernameIcon:
                    t.hasAvatarForGuild(null == L ? void 0 : L.id) &&
                    (0, r.jsx)(T.Z, {
                        user: t,
                        nickname: U
                    }),
                nickname: U,
                pronouns: null == D ? void 0 : D.pronouns,
                tags: (0, r.jsx)(_.Z, {
                    displayProfile: D,
                    themeType: C.lY.POPOUT,
                    onClose: j
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(m.Z, { userId: t.id }),
                        !V &&
                            (0, r.jsx)(I.Z, {
                                userId: t.id,
                                isHovering: x,
                                onOpenProfile: k
                            })
                    ]
                })
            }),
            G === P.OGo.PENDING_INCOMING &&
                (0, r.jsx)(O.Z.Overlay, {
                    children: (0, r.jsx)(g.Z, {
                        user: t,
                        guildId: null == L ? void 0 : L.id,
                        channelId: M,
                        applicationId: B
                    })
                }),
            F.map((e) =>
                (0, r.jsx)(
                    O.Z.Overlay,
                    {
                        children: (0, r.jsx)(g.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: M
                        })
                    },
                    e.applicationId
                )
            ),
            (0, r.jsx)(E.Z, { user: t }),
            !H &&
                (0, r.jsx)(N.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == k ? void 0 : k({ section: e }))
                }),
            t.isProvisional
                ? (0, r.jsx)(O.Z.Overlay, {
                      className: w.card,
                      children: (0, r.jsx)(b.Z, {
                          heading: R.intl.string(R.t.Iyka0d),
                          headingIcon: (0, r.jsx)(o.P4T, {
                              size: 'xxs',
                              color: o.TVs.colors.HEADER_PRIMARY
                          }),
                          headingColor: 'header-primary',
                          children: (0, r.jsx)(s.n, { userId: t.id })
                      })
                  })
                : (0, r.jsx)(S.Z, {
                      user: t,
                      bio: null == D ? void 0 : D.bio,
                      hidePersonalInformation: V,
                      onClose: j
                  }),
            H &&
                (0, r.jsx)(p.Z, {
                    isPremiumUser: Y,
                    onInteraction: j
                }),
            Z
                ? (0, r.jsx)(y.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: D,
                      guildId: null == L ? void 0 : L.id,
                      onOpenUserProfileModal: k,
                      onClose: j
                  })
                : (0, r.jsx)(h.Z, {
                      user: t,
                      currentUser: n,
                      displayProfile: D,
                      guildId: null == L ? void 0 : L.id,
                      onClose: j
                  }),
            null != L &&
                (0, r.jsx)(A.Z, {
                    user: t,
                    currentUser: n,
                    guild: L
                })
        ]
    });
}
