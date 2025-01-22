r.d(n, {
    Z: function () {
        return O;
    }
});
var i = r(200651),
    a = r(442837),
    o = r(481060),
    s = r(189156),
    l = r(699516),
    u = r(246946),
    c = r(5192),
    d = r(74538),
    f = r(816988),
    p = r(648052),
    h = r(537006),
    _ = r(483424),
    m = r(681837),
    g = r(91433),
    E = r(944043),
    v = r(502762),
    y = r(530),
    b = r(827313),
    I = r(420654),
    T = r(116854),
    S = r(166584),
    A = r(915014),
    C = r(228168),
    N = r(981631),
    R = r(591156);
function O(e) {
    let { user: n, currentUser: r, displayProfile: O, guild: D, isHovering: x, onOpenProfile: L, channelId: w, onClose: P } = e,
        M = c.ZP.useName(null == D ? void 0 : D.id, w, n),
        k = (0, a.e7)([l.Z], () => l.Z.getRelationshipType(n.id)),
        U = (0, a.e7)([u.Z], () => u.Z.hidePersonalInformation),
        B = n.id === r.id,
        { dimissibleUpsellsEnabled: G } = (0, f.u)({ location: 'UserProfilePopoutBody' }),
        Z = (0, d.I5)(r);
    return (0, i.jsxs)(o.Scroller, {
        fade: !0,
        className: R.body,
        children: [
            (0, i.jsx)(y.Z, {
                user: n,
                profileType: C.y0.BITE_SIZE,
                onOpenProfile: L,
                usernameIcon:
                    n.hasAvatarForGuild(null == D ? void 0 : D.id) &&
                    (0, i.jsx)(T.Z, {
                        user: n,
                        nickname: M
                    }),
                nickname: M,
                pronouns: null == O ? void 0 : O.pronouns,
                tags: (0, i.jsx)(p.Z, {
                    displayProfile: O,
                    profileType: C.y0.BITE_SIZE,
                    onClose: P
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m.Z, { userId: n.id }),
                        !U &&
                            (0, i.jsx)(b.Z, {
                                userId: n.id,
                                isHovering: x,
                                onOpenProfile: L
                            })
                    ]
                })
            }),
            k === N.OGo.PENDING_INCOMING &&
                (0, i.jsx)(v.Z.Overlay, {
                    children: (0, i.jsx)(g.Z, {
                        user: n,
                        guildId: null == D ? void 0 : D.id,
                        channelId: w
                    })
                }),
            (0, i.jsx)(E.Z, {
                user: n,
                source: E.t.POPOUT
            }),
            !B &&
                (0, i.jsx)(A.Z, {
                    user: n,
                    onOpenProfile: (e) => (null == L ? void 0 : L({ section: e }))
                }),
            n.isProvisional
                ? (0, i.jsx)(s.Z, { look: 'profile' })
                : (0, i.jsx)(I.Z, {
                      user: n,
                      bio: null == O ? void 0 : O.bio,
                      hidePersonalInformation: U,
                      onClose: P
                  }),
            G &&
                B &&
                (0, i.jsx)(h.Z, {
                    isPremiumUser: Z,
                    onInteraction: P,
                    className: R.upsell
                }),
            (0, i.jsx)(_.Z, {
                user: n,
                currentUser: r,
                profileGuildId: null == O ? void 0 : O.guildId,
                onClose: P,
                className: R.activity
            }),
            null != D &&
                (0, i.jsx)(S.Z, {
                    user: n,
                    currentUser: r,
                    guild: D
                })
        ]
    });
}
