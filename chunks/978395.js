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
    f = n(209698),
    _ = n(612600),
    p = n(648052),
    h = n(537006),
    m = n(483424),
    g = n(681837),
    E = n(91433),
    b = n(944043),
    y = n(678738),
    O = n(638970),
    v = n(675893),
    I = n(502762),
    T = n(530),
    S = n(827313),
    A = n(420654),
    C = n(116854),
    N = n(166584),
    R = n(915014),
    P = n(981631),
    D = n(671955),
    w = n(388032),
    L = n(116649);
function x(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: x,
            guild: M,
            isHoveringOrFocusing: j,
            onOpenProfile: k,
            channelId: U,
            onClose: G,
        } = e,
        B = u.ZP.useName(null == M ? void 0 : M.id, U, t),
        { relationshipType: Z, originApplicationId: F } = (0, i.cj)([l.Z], () => ({
            relationshipType: l.Z.getRelationshipType(t.id),
            originApplicationId: l.Z.getOriginApplicationId(t.id),
        })),
        V = (0, o.vh)(t.id),
        H = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        Y = (0, f.b)({ location: "UserProfilePopoutBody" }),
        W = t.id === n.id,
        K = (0, _.Z)({ location: "UserProfilePopoutBody" }),
        z = (null == x ? void 0 : x.widgets) != null && x.widgets.length > 0,
        q = K && z,
        X = (0, d.I5)(n);
    return (0, r.jsxs)(a.Ttm, {
        fade: !0,
        className: L.body,
        children: [
            (0, r.jsx)(T.Z, {
                user: t,
                guildId: null == M ? void 0 : M.id,
                onOpenProfile: k,
                onClose: G,
                usernameIcon:
                    t.hasAvatarForGuild(null == M ? void 0 : M.id) &&
                    (0, r.jsx)(C.Z, {
                        user: t,
                        nickname: B,
                    }),
                nickname: B,
                pronouns: null == x ? void 0 : x.pronouns,
                tags: (0, r.jsx)(p.Z, {
                    displayProfile: x,
                    themeType: D.l.POPOUT,
                    onClose: G,
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.Z, { userId: t.id }),
                        !H &&
                            (0, r.jsx)(S.Z, {
                                userId: t.id,
                                isVisible: j,
                                onOpenProfile: k,
                            }),
                    ],
                }),
            }),
            Z === P.OGo.PENDING_INCOMING &&
                (0, r.jsx)(I.Z.Overlay, {
                    children: (0, r.jsx)(E.Z, {
                        user: t,
                        guildId: null == M ? void 0 : M.id,
                        channelId: U,
                        applicationId: F,
                    }),
                }),
            V.map((e) =>
                (0, r.jsx)(
                    I.Z.Overlay,
                    {
                        children: (0, r.jsx)(E.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: U,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(b.Z, { user: t }),
            !W &&
                (0, r.jsx)(R.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == k ? void 0 : k({ section: e })),
                }),
            t.isProvisional
                ? (0, r.jsx)(I.Z.Overlay, {
                      className: L.card,
                      children: (0, r.jsx)(y.Z, {
                          heading: w.intl.string(w.t.Iyka0U),
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
                      bio: null == x ? void 0 : x.bio,
                      hidePersonalInformation: H,
                      onClose: G,
                  }),
            q &&
                (0, r.jsx)(v.Z, {
                    user: t,
                    widgets: null == x ? void 0 : x.widgets,
                    onOpenUserProfileModal: k,
                }),
            W &&
                (0, r.jsx)(h.Z, {
                    isPremiumUser: X,
                    onInteraction: G,
                }),
            Y
                ? (0, r.jsx)(O.Z, {
                      user: t,
                      currentUser: n,
                      guildId: null == M ? void 0 : M.id,
                      onOpenUserProfileModal: k,
                      onClose: G,
                  })
                : (0, r.jsx)(m.Z, {
                      user: t,
                      currentUser: n,
                      guildId: null == M ? void 0 : M.id,
                      onClose: G,
                  }),
            null != M &&
                (0, r.jsx)(N.Z, {
                    user: t,
                    currentUser: n,
                    guild: M,
                }),
        ],
    });
}
