n.d(t, { Z: () => x });
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
    p = n(648052),
    _ = n(537006),
    h = n(407699),
    m = n(91433),
    g = n(944043),
    E = n(678738),
    b = n(638970),
    y = n(675893),
    O = n(502762),
    v = n(530),
    S = n(827313),
    I = n(420654),
    T = n(116854),
    C = n(166584),
    A = n(915014),
    N = n(512832),
    P = n(981631),
    w = n(671955),
    R = n(388032),
    D = n(155493);
function x(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: x,
            guild: L,
            isHoveringOrFocusing: j,
            onOpenProfile: M,
            channelId: k,
            onClose: U,
        } = e,
        G = u.ZP.useName(null == L ? void 0 : L.id, k, t),
        { relationshipType: Z, originApplicationId: F } = (0, i.cj)([l.Z], () => ({
            relationshipType: l.Z.getRelationshipType(t.id),
            originApplicationId: l.Z.getOriginApplicationId(t.id),
        })),
        B = (0, o.vh)(t.id),
        V = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        { enabled: H } = (0, f.E)({ location: "UserProfilePopoutBody" }),
        Y = t.id === n.id,
        W = (null == x ? void 0 : x.widgets) != null && x.widgets.length > 0,
        K = (0, d.I5)(n);
    return (0, r.jsxs)(a.Ttm, {
        fade: !0,
        className: D.body,
        children: [
            (0, r.jsx)(h.Z, { userId: t.id }),
            (0, r.jsx)(v.Z, {
                user: t,
                guildId: null == L ? void 0 : L.id,
                onOpenProfile: M,
                onClose: U,
                usernameIcon:
                    t.hasAvatarForGuild(null == L ? void 0 : L.id) &&
                    (0, r.jsx)(T.Z, {
                        user: t,
                        nickname: G,
                    }),
                nickname: G,
                pronouns: null == x ? void 0 : x.pronouns,
                tags: (0, r.jsx)(p.Z, {
                    displayProfile: x,
                    themeType: w.l.POPOUT,
                    onClose: U,
                }),
                nicknameIcons: V
                    ? null
                    : (0, r.jsx)(S.Z, {
                          userId: t.id,
                          isVisible: j,
                          onOpenProfile: M,
                      }),
            }),
            Z === P.OGo.PENDING_INCOMING &&
                (0, r.jsx)(O.Z.Overlay, {
                    children: (0, r.jsx)(m.Z, {
                        user: t,
                        guildId: null == L ? void 0 : L.id,
                        channelId: k,
                        applicationId: F,
                    }),
                }),
            B.map((e) =>
                (0, r.jsx)(
                    O.Z.Overlay,
                    {
                        children: (0, r.jsx)(m.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: k,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(g.Z, { user: t }),
            !Y &&
                (0, r.jsx)(A.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == M ? void 0 : M({ tabSection: e })),
                }),
            t.isProvisional
                ? (0, r.jsx)(O.Z.Overlay, {
                      className: D.card,
                      children: (0, r.jsx)(E.Z, {
                          heading: R.intl.string(R.t.Iyka0U),
                          headingIcon: (0, r.jsx)(a.Mgn, {
                              size: "xxs",
                              color: a.TVs.colors.TEXT_STRONG,
                          }),
                          headingColor: "text-strong",
                          children: (0, r.jsx)(s.n, { userId: t.id }),
                      }),
                  })
                : (0, r.jsx)(I.Z, {
                      user: t,
                      bio: null == x ? void 0 : x.bio,
                      hidePersonalInformation: V,
                      onClose: U,
                  }),
            W &&
                (0, r.jsx)(y.Z, {
                    user: t,
                    widgets: null == x ? void 0 : x.widgets,
                    onOpenUserProfileModal: M,
                }),
            Y &&
                (0, r.jsx)(_.Z, {
                    isPremiumUser: K,
                    onInteraction: U,
                }),
            (0, r.jsx)(b.Z, {
                user: t,
                currentUser: n,
                guildId: null == L ? void 0 : L.id,
                onOpenUserProfileModal: M,
                onClose: U,
            }),
            H &&
                !Y &&
                (0, r.jsx)(N.Z, {
                    user: t,
                    onOpenProfile: M,
                }),
            null != L &&
                (0, r.jsx)(C.Z, {
                    userId: t.id,
                    guild: L,
                }),
        ],
    });
}
