n.d(t, { Z: () => M });
var i = n(200651),
    l = n(192379),
    a = n(597312),
    r = n(481060),
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
    _ = n(687158),
    C = n(899007),
    x = n(648052),
    v = n(867176),
    E = n(280885),
    I = n(900927),
    b = n(678738),
    Z = n(502762),
    N = n(530),
    T = n(679332),
    S = n(544989),
    j = n(171368),
    y = n(228168),
    A = n(388032),
    P = n(747918),
    R = n(866669);
function M(e) {
    let { user: t, channel: n } = e,
        M = __OVERLAY__ || !(0, u.Z)(t.id),
        L = (0, _.ZP)(t.id),
        k = (0, o.ZP)(),
        { analyticsLocations: O } = (0, d.ZP)(c.Z.PROFILE_PANEL),
        D = (0, f.ZB)({
            layout: 'SIMPLIFIED_DM_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        w = l.useRef(null),
        U = (0, s.Z)(w),
        B = (e) => {
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
                profileType: y.y0.PANEL,
                themeOverride: k,
                children: [
                    (0, i.jsxs)(a.u2, {
                        children: [
                            (0, i.jsx)(S.Z, {
                                profileType: y.y0.PANEL,
                                children: (0, i.jsx)(T.Z, { user: t })
                            }),
                            (0, i.jsxs)('header', {
                                className: P.header,
                                children: [
                                    (0, i.jsx)(v.Z, {
                                        user: t,
                                        displayProfile: L,
                                        profileType: y.y0.PANEL,
                                        animateOnHover: !U
                                    }),
                                    (0, i.jsx)(C.Z, {
                                        user: t,
                                        displayProfile: L,
                                        channelId: n.id,
                                        profileType: y.y0.PANEL,
                                        onOpenProfile: M ? void 0 : B
                                    }),
                                    t.isClyde() && (0, i.jsx)(h.Z, { className: P.headerTag })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: R.body,
                                children: [
                                    (0, i.jsx)(N.Z, {
                                        user: t,
                                        profileType: y.y0.PANEL,
                                        nickname: m.ZP.getName(null, n.id, t),
                                        pronouns: null == L ? void 0 : L.pronouns,
                                        onOpenProfile: M ? void 0 : B,
                                        tags: (0, i.jsx)(x.Z, {
                                            displayProfile: L,
                                            profileType: y.y0.PANEL
                                        })
                                    }),
                                    (0, i.jsxs)(Z.Z.Overlay, {
                                        className: R.overlay,
                                        children: [
                                            (0, i.jsx)(b.Z, {
                                                heading: A.intl.string(A.t['61W33d']),
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(E.Z, {
                                                    userBio: null == L ? void 0 : L.bio,
                                                    userId: t.id,
                                                    animateOnHover: !0,
                                                    isHovering: U
                                                })
                                            }),
                                            (0, i.jsx)(b.Z, {
                                                heading: A.intl.string(A.t['A//N4u']),
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(I.Z, { userId: t.id })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !M &&
                        (0, i.jsx)('footer', {
                            className: P.footer,
                            children: (0, i.jsx)(r.zxk, {
                                fullWidth: !0,
                                size: r.zxk.Sizes.LARGE,
                                look: r.zxk.Looks.BLANK,
                                color: P.footerButtonColor,
                                onClick: () => {
                                    B(),
                                        (0, g.pQ)({
                                            action: 'PRESS_VIEW_PROFILE',
                                            analyticsLocations: O,
                                            ...D
                                        });
                                },
                                children: A.intl.string(A.t['+Xp3ho'])
                            })
                        }),
                    (null == L ? void 0 : L.profileEffectId) != null &&
                        (0, i.jsx)(p.Z, {
                            profileEffectId: null == L ? void 0 : L.profileEffectId,
                            isHovering: U
                        })
                ]
            })
        })
    });
}
