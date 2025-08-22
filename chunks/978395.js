n.d(t, { Z: () => L });
var r = n(951288),
    i = n(442837),
    a = n(481060),
    o = n(320582),
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
    T = n(252748),
    S = n(420654),
    A = n(116854),
    C = n(166584),
    N = n(915014),
    R = n(228168),
    P = n(981631),
    w = n(671955),
    D = n(388032),
    x = n(116649);
function L(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: L,
            guild: j,
            isHovering: M,
            onOpenProfile: k,
            channelId: U,
            onClose: G,
        } = e,
        B = u.ZP.useName(null == j ? void 0 : j.id, U, t),
        { relationshipType: Z, originApplicationId: V } = (0, i.cj)([l.Z], () => ({
            relationshipType: l.Z.getRelationshipType(t.id),
            originApplicationId: l.Z.getOriginApplicationId(t.id),
        })),
        F = (0, o.vh)(t.id),
        H = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        Y = (0, f.b)({ location: "UserProfilePopoutBody" }),
        W = t.id === n.id,
        K = (null == L ? void 0 : L.widgets) != null && L.widgets.length > 0,
        z = (0, d.I5)(n);
    return (0, r.jsxs)(a.Ttm, {
        fade: !0,
        className: x.body,
        children: [
            (0, r.jsx)(v.Z, {
                user: t,
                onOpenProfile: k,
                onClose: G,
                usernameIcon:
                    t.hasAvatarForGuild(null == j ? void 0 : j.id) &&
                    (0, r.jsx)(A.Z, {
                        user: t,
                        nickname: B,
                    }),
                nickname: B,
                pronouns: null == L ? void 0 : L.pronouns,
                tags: (0, r.jsx)(_.Z, {
                    displayProfile: L,
                    themeType: w.l.POPOUT,
                    onClose: G,
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(m.Z, { userId: t.id }),
                        !H &&
                            (0, r.jsx)(I.Z, {
                                userId: t.id,
                                isHovering: M,
                                onOpenProfile: k,
                            }),
                    ],
                }),
            }),
            Z === P.OGo.PENDING_INCOMING &&
                (0, r.jsx)(O.Z.Overlay, {
                    children: (0, r.jsx)(g.Z, {
                        user: t,
                        guildId: null == j ? void 0 : j.id,
                        channelId: U,
                        applicationId: V,
                    }),
                }),
            F.map((e) =>
                (0, r.jsx)(
                    O.Z.Overlay,
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
                    onOpenProfile: (e) => (null == k ? void 0 : k({ section: e })),
                }),
            t.isProvisional
                ? (0, r.jsx)(O.Z.Overlay, {
                      className: x.card,
                      children: (0, r.jsx)(b.Z, {
                          heading: D.intl.string(D.t.Iyka0d),
                          headingIcon: (0, r.jsx)(a.Mgn, {
                              size: "xxs",
                              color: a.TVs.colors.HEADER_PRIMARY,
                          }),
                          headingColor: "header-primary",
                          children: (0, r.jsx)(s.n, { userId: t.id }),
                      }),
                  })
                : (0, r.jsx)(S.Z, {
                      user: t,
                      bio: null == L ? void 0 : L.bio,
                      hidePersonalInformation: H,
                      onClose: G,
                  }),
            K &&
                (0, r.jsx)(T.Z, {
                    widgets: null == L ? void 0 : L.widgets,
                    onClick: () => {
                        null == k || k({ section: R.oh.WIDGETS });
                    },
                }),
            W &&
                (0, r.jsx)(p.Z, {
                    isPremiumUser: z,
                    onInteraction: G,
                }),
            Y
                ? (0, r.jsx)(y.Z, {
                      user: t,
                      currentUser: n,
                      guildId: null == j ? void 0 : j.id,
                      onOpenUserProfileModal: k,
                      onClose: G,
                  })
                : (0, r.jsx)(h.Z, {
                      user: t,
                      currentUser: n,
                      guildId: null == j ? void 0 : j.id,
                      onClose: G,
                  }),
            null != j &&
                (0, r.jsx)(C.Z, {
                    user: t,
                    currentUser: n,
                    guild: j,
                }),
        ],
    });
}
