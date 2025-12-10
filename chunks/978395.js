n.d(t, { Z: () => M });
var r = n(54381),
    i = n(442837),
    a = n(481060),
    o = n(320582),
    s = n(189156),
    l = n(699516),
    c = n(246946),
    u = n(5192),
    d = n(74538),
    f = n(209698),
    p = n(896010),
    _ = n(612600),
    m = n(648052),
    h = n(537006),
    g = n(483424),
    E = n(681837),
    b = n(91433),
    y = n(944043),
    O = n(678738),
    v = n(638970),
    S = n(675893),
    I = n(502762),
    T = n(530),
    C = n(827313),
    A = n(420654),
    N = n(116854),
    P = n(166584),
    R = n(915014),
    w = n(512832),
    D = n(981631),
    x = n(671955),
    L = n(388032),
    j = n(116649);
function M(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: M,
            guild: k,
            isHoveringOrFocusing: U,
            onOpenProfile: G,
            channelId: Z,
            onClose: B,
        } = e,
        F = u.ZP.useName(null == k ? void 0 : k.id, Z, t),
        { relationshipType: V, originApplicationId: H } = (0, i.cj)([l.Z], () => ({
            relationshipType: l.Z.getRelationshipType(t.id),
            originApplicationId: l.Z.getOriginApplicationId(t.id),
        })),
        Y = (0, o.vh)(t.id),
        W = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        K = (0, f.b)({ location: "UserProfilePopoutBody" }),
        z = (0, p.E)({ location: "UserProfilePopoutBody" }),
        q = t.id === n.id,
        Q = (0, _.Z)({ location: "UserProfilePopoutBody" }),
        X = (null == M ? void 0 : M.widgets) != null && M.widgets.length > 0,
        J = Q && X,
        $ = (0, d.I5)(n);
    return (0, r.jsxs)(a.Ttm, {
        fade: !0,
        className: j.body,
        children: [
            (0, r.jsx)(T.Z, {
                user: t,
                guildId: null == k ? void 0 : k.id,
                onOpenProfile: G,
                onClose: B,
                usernameIcon:
                    t.hasAvatarForGuild(null == k ? void 0 : k.id) &&
                    (0, r.jsx)(N.Z, {
                        user: t,
                        nickname: F,
                    }),
                nickname: F,
                pronouns: null == M ? void 0 : M.pronouns,
                tags: (0, r.jsx)(m.Z, {
                    displayProfile: M,
                    themeType: x.l.POPOUT,
                    onClose: B,
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(E.Z, { userId: t.id }),
                        !W &&
                            (0, r.jsx)(C.Z, {
                                userId: t.id,
                                isVisible: U,
                                onOpenProfile: G,
                            }),
                    ],
                }),
            }),
            V === D.OGo.PENDING_INCOMING &&
                (0, r.jsx)(I.Z.Overlay, {
                    children: (0, r.jsx)(b.Z, {
                        user: t,
                        guildId: null == k ? void 0 : k.id,
                        channelId: Z,
                        applicationId: H,
                    }),
                }),
            Y.map((e) =>
                (0, r.jsx)(
                    I.Z.Overlay,
                    {
                        children: (0, r.jsx)(b.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: Z,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(y.Z, { user: t }),
            !q &&
                (0, r.jsx)(R.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == G ? void 0 : G({ section: e })),
                }),
            t.isProvisional
                ? (0, r.jsx)(I.Z.Overlay, {
                      className: j.card,
                      children: (0, r.jsx)(O.Z, {
                          heading: L.intl.string(L.t.Iyka0U),
                          headingIcon: (0, r.jsx)(a.Mgn, {
                              size: "xxs",
                              color: a.TVs.colors.HEADER_PRIMARY,
                          }),
                          headingColor: "header-primary",
                          children: (0, r.jsx)(s.n, { userId: t.id }),
                      }),
                  })
                : (0, r.jsx)(A.Z, {
                      user: t,
                      bio: null == M ? void 0 : M.bio,
                      hidePersonalInformation: W,
                      onClose: B,
                  }),
            J &&
                (0, r.jsx)(S.Z, {
                    user: t,
                    widgets: null == M ? void 0 : M.widgets,
                    onOpenUserProfileModal: G,
                }),
            q &&
                (0, r.jsx)(h.Z, {
                    isPremiumUser: $,
                    onInteraction: B,
                }),
            K
                ? (0, r.jsx)(v.Z, {
                      user: t,
                      currentUser: n,
                      guildId: null == k ? void 0 : k.id,
                      onOpenUserProfileModal: G,
                      onClose: B,
                  })
                : (0, r.jsx)(g.Z, {
                      user: t,
                      currentUser: n,
                      guildId: null == k ? void 0 : k.id,
                      onClose: B,
                  }),
            z &&
                !q &&
                (0, r.jsx)(w.Z, {
                    user: t,
                    onOpenProfile: G,
                }),
            null != k &&
                (0, r.jsx)(P.Z, {
                    user: t,
                    currentUser: n,
                    guild: k,
                }),
        ],
    });
}
