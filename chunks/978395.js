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
    _ = n(612600),
    p = n(648052),
    h = n(537006),
    m = n(483424),
    g = n(681837),
    E = n(91433),
    b = n(944043),
    y = n(678738),
    O = n(638970),
    v = n(502762),
    I = n(530),
    T = n(827313),
    S = n(350207),
    A = n(420654),
    C = n(116854),
    N = n(166584),
    R = n(915014),
    P = n(228168),
    D = n(981631),
    w = n(671955),
    x = n(388032),
    L = n(116649);
function M(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: M,
            guild: k,
            isHoveringOrFocusing: j,
            onOpenProfile: U,
            channelId: G,
            onClose: B,
            onRoleClick: Z,
        } = e,
        F = u.ZP.useName(null == k ? void 0 : k.id, G, t),
        { relationshipType: V, originApplicationId: H } = (0, i.cj)([l.Z], () => ({
            relationshipType: l.Z.getRelationshipType(t.id),
            originApplicationId: l.Z.getOriginApplicationId(t.id),
        })),
        Y = (0, o.vh)(t.id),
        W = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        K = (0, f.b)({ location: "UserProfilePopoutBody" }),
        z = t.id === n.id,
        q = (0, _.Z)({ location: "UserProfilePopoutBody" }),
        X = (null == M ? void 0 : M.widgets) != null && M.widgets.length > 0,
        Q = q && X,
        J = (0, d.I5)(n);
    return (0, r.jsxs)(a.Ttm, {
        fade: !0,
        className: L.body,
        children: [
            (0, r.jsx)(I.Z, {
                user: t,
                guildId: null == k ? void 0 : k.id,
                onOpenProfile: U,
                onClose: B,
                usernameIcon:
                    t.hasAvatarForGuild(null == k ? void 0 : k.id) &&
                    (0, r.jsx)(C.Z, {
                        user: t,
                        nickname: F,
                    }),
                nickname: F,
                pronouns: null == M ? void 0 : M.pronouns,
                tags: (0, r.jsx)(p.Z, {
                    displayProfile: M,
                    themeType: w.l.POPOUT,
                    onClose: B,
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.Z, { userId: t.id }),
                        !W &&
                            (0, r.jsx)(T.Z, {
                                userId: t.id,
                                isVisible: j,
                                onOpenProfile: U,
                            }),
                    ],
                }),
            }),
            V === D.OGo.PENDING_INCOMING &&
                (0, r.jsx)(v.Z.Overlay, {
                    children: (0, r.jsx)(E.Z, {
                        user: t,
                        guildId: null == k ? void 0 : k.id,
                        channelId: G,
                        applicationId: H,
                    }),
                }),
            Y.map((e) =>
                (0, r.jsx)(
                    v.Z.Overlay,
                    {
                        children: (0, r.jsx)(E.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: G,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, r.jsx)(b.Z, { user: t }),
            !z &&
                (0, r.jsx)(R.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == U ? void 0 : U({ section: e })),
                }),
            t.isProvisional
                ? (0, r.jsx)(v.Z.Overlay, {
                      className: L.card,
                      children: (0, r.jsx)(y.Z, {
                          heading: x.intl.string(x.t.Iyka0U),
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
            Q &&
                (0, r.jsx)(S.Z, {
                    widgets: null == M ? void 0 : M.widgets,
                    onClick: () => {
                        null == U || U({ section: P.oh.WIDGETS });
                    },
                }),
            z &&
                (0, r.jsx)(h.Z, {
                    isPremiumUser: J,
                    onInteraction: B,
                }),
            K
                ? (0, r.jsx)(O.Z, {
                      user: t,
                      currentUser: n,
                      guildId: null == k ? void 0 : k.id,
                      onOpenUserProfileModal: U,
                      onClose: B,
                  })
                : (0, r.jsx)(m.Z, {
                      user: t,
                      currentUser: n,
                      guildId: null == k ? void 0 : k.id,
                      onClose: B,
                  }),
            null != k &&
                (0, r.jsx)(N.Z, {
                    user: t,
                    currentUser: n,
                    guild: k,
                    onRoleClick: Z,
                }),
        ],
    });
}
