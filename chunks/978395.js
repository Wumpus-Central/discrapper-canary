n.d(t, { Z: () => L });
var r = n(54381),
    i = n(442837),
    a = n(481060),
    o = n(320582),
    s = n(189156),
    l = n(699516),
    c = n(246946),
    u = n(5192),
    d = n(74538),
    f = n(896010),
    p = n(612600),
    _ = n(648052),
    m = n(537006),
    h = n(407699),
    g = n(91433),
    E = n(944043),
    b = n(678738),
    y = n(638970),
    O = n(675893),
    v = n(502762),
    S = n(530),
    I = n(827313),
    T = n(420654),
    C = n(116854),
    A = n(166584),
    N = n(915014),
    P = n(512832),
    R = n(981631),
    w = n(671955),
    D = n(388032),
    x = n(155493);
function L(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: L,
            guild: j,
            isHoveringOrFocusing: M,
            onOpenProfile: k,
            channelId: U,
            onClose: G,
        } = e,
        Z = u.ZP.useName(null == j ? void 0 : j.id, U, t),
        { relationshipType: F, originApplicationId: B } = (0, i.cj)([l.Z], () => ({
            relationshipType: l.Z.getRelationshipType(t.id),
            originApplicationId: l.Z.getOriginApplicationId(t.id),
        })),
        V = (0, o.vh)(t.id),
        H = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        { enabled: Y } = (0, f.E)({ location: "UserProfilePopoutBody" }),
        W = t.id === n.id,
        K = (0, p.Z)({ location: "UserProfilePopoutBody" }),
        z = (null == L ? void 0 : L.widgets) != null && L.widgets.length > 0,
        q = K && z,
        Q = (0, d.I5)(n);
    return (0, r.jsxs)(a.Ttm, {
        fade: !0,
        className: x.body,
        children: [
            (0, r.jsx)(h.Z, { userId: t.id }),
            (0, r.jsx)(S.Z, {
                user: t,
                guildId: null == j ? void 0 : j.id,
                onOpenProfile: k,
                onClose: G,
                usernameIcon:
                    t.hasAvatarForGuild(null == j ? void 0 : j.id) &&
                    (0, r.jsx)(C.Z, {
                        user: t,
                        nickname: Z,
                    }),
                nickname: Z,
                pronouns: null == L ? void 0 : L.pronouns,
                tags: (0, r.jsx)(_.Z, {
                    displayProfile: L,
                    themeType: w.l.POPOUT,
                    onClose: G,
                }),
                nicknameIcons: H
                    ? null
                    : (0, r.jsx)(I.Z, {
                          userId: t.id,
                          isVisible: M,
                          onOpenProfile: k,
                      }),
            }),
            F === R.OGo.PENDING_INCOMING &&
                (0, r.jsx)(v.Z.Overlay, {
                    children: (0, r.jsx)(g.Z, {
                        user: t,
                        guildId: null == j ? void 0 : j.id,
                        channelId: U,
                        applicationId: B,
                    }),
                }),
            V.map((e) =>
                (0, r.jsx)(
                    v.Z.Overlay,
                    {
                        children: (0, r.jsx)(g.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: U,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(E.Z, { user: t }),
            !W &&
                (0, r.jsx)(N.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == k ? void 0 : k({ tabSection: e })),
                }),
            t.isProvisional
                ? (0, r.jsx)(v.Z.Overlay, {
                      className: x.card,
                      children: (0, r.jsx)(b.Z, {
                          heading: D.intl.string(D.t.Iyka0U),
                          headingIcon: (0, r.jsx)(a.Mgn, {
                              size: "xxs",
                              color: a.TVs.colors.TEXT_STRONG,
                          }),
                          headingColor: "text-strong",
                          children: (0, r.jsx)(s.n, { userId: t.id }),
                      }),
                  })
                : (0, r.jsx)(T.Z, {
                      user: t,
                      bio: null == L ? void 0 : L.bio,
                      hidePersonalInformation: H,
                      onClose: G,
                  }),
            q &&
                (0, r.jsx)(O.Z, {
                    user: t,
                    widgets: null == L ? void 0 : L.widgets,
                    onOpenUserProfileModal: k,
                }),
            W &&
                (0, r.jsx)(m.Z, {
                    isPremiumUser: Q,
                    onInteraction: G,
                }),
            (0, r.jsx)(y.Z, {
                user: t,
                currentUser: n,
                guildId: null == j ? void 0 : j.id,
                onOpenUserProfileModal: k,
                onClose: G,
            }),
            Y &&
                !W &&
                (0, r.jsx)(P.Z, {
                    user: t,
                    onOpenProfile: k,
                }),
            null != j &&
                (0, r.jsx)(A.Z, {
                    userId: t.id,
                    guild: j,
                }),
        ],
    });
}
