r.d(n, {
    Z: function () {
        return x;
    }
});
var i = r(200651),
    a = r(442837),
    o = r(481060),
    s = r(372460),
    l = r(91896),
    u = r(189156),
    c = r(699516),
    d = r(246946),
    f = r(5192),
    p = r(74538),
    h = r(816988),
    _ = r(648052),
    m = r(537006),
    g = r(483424),
    E = r(681837),
    v = r(91433),
    y = r(944043),
    b = r(502762),
    I = r(530),
    T = r(827313),
    S = r(420654),
    A = r(116854),
    C = r(166584),
    N = r(915014),
    R = r(228168),
    O = r(981631),
    D = r(591156);
function x(e) {
    let { user: n, currentUser: r, displayProfile: x, guild: L, isHovering: w, onOpenProfile: P, channelId: M, onClose: k } = e,
        U = f.ZP.useName(null == L ? void 0 : L.id, M, n),
        B = (0, a.e7)([c.Z], () => c.Z.getRelationshipType(n.id)),
        G = (0, a.Wu)([l.Z], () => l.Z.getGameRelationshipsForUser(n.id, O.OGo.PENDING_INCOMING)),
        Z = (0, s.wn)({ location: 'UserProfilePopoutBody' }),
        F = (0, a.e7)([d.Z], () => d.Z.hidePersonalInformation),
        V = n.id === r.id,
        { dimissibleUpsellsEnabled: j } = (0, h.u)({ location: 'UserProfilePopoutBody' }),
        H = (0, p.I5)(r);
    return (0, i.jsxs)(o.Scroller, {
        fade: !0,
        className: D.body,
        children: [
            (0, i.jsx)(I.Z, {
                user: n,
                profileType: R.y0.BITE_SIZE,
                onOpenProfile: P,
                usernameIcon:
                    n.hasAvatarForGuild(null == L ? void 0 : L.id) &&
                    (0, i.jsx)(A.Z, {
                        user: n,
                        nickname: U
                    }),
                nickname: U,
                pronouns: null == x ? void 0 : x.pronouns,
                tags: (0, i.jsx)(_.Z, {
                    displayProfile: x,
                    profileType: R.y0.BITE_SIZE,
                    onClose: k
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(E.Z, { userId: n.id }),
                        !F &&
                            (0, i.jsx)(T.Z, {
                                userId: n.id,
                                isHovering: w,
                                onOpenProfile: P
                            })
                    ]
                })
            }),
            B === O.OGo.PENDING_INCOMING &&
                (0, i.jsx)(b.Z.Overlay, {
                    children: (0, i.jsx)(v.Z, {
                        user: n,
                        guildId: null == L ? void 0 : L.id,
                        channelId: M
                    })
                }),
            Z &&
                G.map((e) =>
                    (0, i.jsx)(
                        b.Z.Overlay,
                        {
                            children: (0, i.jsx)(v.Z, {
                                user: n,
                                isGameRelationship: !0,
                                applicationId: e.applicationId,
                                channelId: M
                            })
                        },
                        e.applicationId
                    )
                ),
            (0, i.jsx)(y.Z, {
                user: n,
                source: y.t.POPOUT
            }),
            !V &&
                (0, i.jsx)(N.Z, {
                    user: n,
                    onOpenProfile: (e) => (null == P ? void 0 : P({ section: e }))
                }),
            n.isProvisional
                ? (0, i.jsx)(u.Z, { look: 'profile' })
                : (0, i.jsx)(S.Z, {
                      user: n,
                      bio: null == x ? void 0 : x.bio,
                      hidePersonalInformation: F,
                      onClose: k
                  }),
            j &&
                V &&
                (0, i.jsx)(m.Z, {
                    isPremiumUser: H,
                    onInteraction: k,
                    className: D.upsell
                }),
            (0, i.jsx)(g.Z, {
                user: n,
                currentUser: r,
                profileGuildId: null == x ? void 0 : x.guildId,
                onClose: k,
                className: D.activity
            }),
            null != L &&
                (0, i.jsx)(C.Z, {
                    user: n,
                    currentUser: r,
                    guild: L
                })
        ]
    });
}
