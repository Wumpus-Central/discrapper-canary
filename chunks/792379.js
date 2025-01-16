n.d(t, {
    Z: function () {
        return R;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(597312),
    a = n(481060),
    s = n(727637),
    o = n(410030),
    c = n(100527),
    d = n(906732),
    u = n(580552),
    h = n(688465),
    p = n(680295),
    m = n(5192),
    f = n(785717),
    g = n(221292),
    C = n(687158),
    x = n(899007),
    v = n(648052),
    _ = n(867176),
    I = n(280885),
    E = n(900927),
    b = n(678738),
    Z = n(502762),
    N = n(530),
    S = n(679332),
    T = n(544989),
    j = n(171368),
    A = n(228168),
    y = n(388032),
    P = n(747918),
    M = n(866669);
function R(e) {
    let { user: t, channel: n } = e,
        R = __OVERLAY__ || !(0, u.Z)(t.id),
        L = (0, C.ZP)(t.id),
        k = (0, o.ZP)(),
        { analyticsLocations: O } = (0, d.ZP)(c.Z.PROFILE_PANEL),
        D = (0, f.ZB)({
            layout: 'SIMPLIFIED_DM_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        w = l.useRef(null),
        B = (0, s.Z)(w),
        U = (e) => {
            (0, j.openUserProfileModal)({
                sourceAnalyticsLocations: O,
                ...D,
                ...e
            });
        };
    return (0, i.jsx)(d.Gt, {
        value: O,
        children: (0, i.jsx)(f.Mt, {
            value: D,
            children: (0, i.jsxs)(Z.Z, {
                ref: w,
                user: t,
                displayProfile: L,
                profileType: A.y0.PANEL,
                themeOverride: k,
                children: [
                    (0, i.jsxs)(r.u2, {
                        children: [
                            (0, i.jsx)(T.Z, {
                                profileType: A.y0.PANEL,
                                children: (0, i.jsx)(S.Z, { user: t })
                            }),
                            (0, i.jsxs)('header', {
                                className: P.header,
                                children: [
                                    (0, i.jsx)(_.Z, {
                                        user: t,
                                        displayProfile: L,
                                        profileType: A.y0.PANEL,
                                        animateOnHover: !B
                                    }),
                                    (0, i.jsx)(x.Z, {
                                        user: t,
                                        displayProfile: L,
                                        channelId: n.id,
                                        profileType: A.y0.PANEL,
                                        onOpenProfile: R ? void 0 : U
                                    }),
                                    t.isClyde() && (0, i.jsx)(h.Z, { className: P.headerTag })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: M.body,
                                children: [
                                    (0, i.jsx)(N.Z, {
                                        user: t,
                                        profileType: A.y0.PANEL,
                                        nickname: m.ZP.getName(null, n.id, t),
                                        pronouns: null == L ? void 0 : L.pronouns,
                                        onOpenProfile: R ? void 0 : U,
                                        tags: (0, i.jsx)(v.Z, {
                                            displayProfile: L,
                                            profileType: A.y0.PANEL
                                        })
                                    }),
                                    (0, i.jsxs)(Z.Z.Overlay, {
                                        className: M.overlay,
                                        children: [
                                            (0, i.jsx)(b.Z, {
                                                heading: y.intl.string(y.t['61W33d']),
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(I.Z, {
                                                    userBio: null == L ? void 0 : L.bio,
                                                    userId: t.id,
                                                    animateOnHover: !0,
                                                    isHovering: B
                                                })
                                            }),
                                            (0, i.jsx)(b.Z, {
                                                heading: y.intl.string(y.t['A//N4u']),
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(E.Z, { userId: t.id })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !R &&
                        (0, i.jsx)('footer', {
                            className: P.footer,
                            children: (0, i.jsx)(a.Button, {
                                fullWidth: !0,
                                size: a.Button.Sizes.LARGE,
                                look: a.Button.Looks.BLANK,
                                color: P.footerButtonColor,
                                onClick: () => {
                                    U(),
                                        (0, g.pQ)({
                                            action: 'PRESS_VIEW_PROFILE',
                                            analyticsLocations: O,
                                            ...D
                                        });
                                },
                                children: y.intl.string(y.t['+Xp3ho'])
                            })
                        }),
                    (null == L ? void 0 : L.profileEffectId) != null &&
                        (0, i.jsx)(p.Z, {
                            profileEffectId: null == L ? void 0 : L.profileEffectId,
                            isHovering: B
                        })
                ]
            })
        })
    });
}
