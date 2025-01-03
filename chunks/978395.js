r.d(n, {
    Z: function () {
        return O;
    }
});
var i = r(200651),
    a = r(442837),
    s = r(481060),
    o = r(189156),
    l = r(699516),
    u = r(246946),
    c = r(5192),
    d = r(74538),
    f = r(816988),
    _ = r(648052),
    h = r(537006),
    p = r(483424),
    m = r(681837),
    g = r(91433),
    E = r(944043),
    v = r(502762),
    I = r(530),
    T = r(827313),
    b = r(420654),
    y = r(116854),
    S = r(166584),
    A = r(915014),
    N = r(228168),
    C = r(981631),
    R = r(591156);
function O(e) {
    let { user: n, currentUser: r, displayProfile: O, guild: D, isHovering: L, onOpenProfile: x, channelId: w, onClose: P } = e,
        M = c.ZP.useName(null == D ? void 0 : D.id, w, n),
        k = (0, a.e7)([l.Z], () => l.Z.getRelationshipType(n.id)),
        U = (0, a.e7)([u.Z], () => u.Z.hidePersonalInformation),
        B = n.id === r.id,
        { dimissibleUpsellsEnabled: G } = (0, f.u)({ location: 'UserProfilePopoutBody' }),
        Z = (0, d.I5)(r);
    return (0, i.jsxs)(s.Scroller, {
        fade: !0,
        className: R.body,
        children: [
            (0, i.jsx)(I.Z, {
                user: n,
                profileType: N.y0.BITE_SIZE,
                onOpenProfile: x,
                usernameIcon:
                    n.hasAvatarForGuild(null == D ? void 0 : D.id) &&
                    (0, i.jsx)(y.Z, {
                        user: n,
                        nickname: M
                    }),
                nickname: M,
                pronouns: null == O ? void 0 : O.pronouns,
                tags: (0, i.jsx)(_.Z, {
                    displayProfile: O,
                    profileType: N.y0.BITE_SIZE,
                    onClose: P
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m.Z, { userId: n.id }),
                        !U &&
                            (0, i.jsx)(T.Z, {
                                userId: n.id,
                                isHovering: L,
                                onOpenProfile: x
                            })
                    ]
                })
            }),
            k === C.OGo.PENDING_INCOMING &&
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
                    onOpenProfile: (e) => (null == x ? void 0 : x({ section: e }))
                }),
            n.isProvisional
                ? (0, i.jsx)(o.Z, { look: 'profile' })
                : (0, i.jsx)(b.Z, {
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
            (0, i.jsx)(p.Z, {
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
