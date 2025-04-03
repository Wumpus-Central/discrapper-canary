n.d(t, { Z: () => R });
var r = n(200651),
    i = n(192379),
    l = n(597312),
    o = n(481060),
    a = n(727637),
    s = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(580552),
    p = n(688465),
    h = n(680295),
    f = n(5192),
    m = n(785717),
    g = n(221292),
    b = n(687158),
    _ = n(899007),
    C = n(648052),
    y = n(867176),
    x = n(280885),
    v = n(900927),
    j = n(678738),
    O = n(502762),
    E = n(530),
    N = n(679332),
    I = n(544989),
    P = n(171368),
    S = n(228168),
    Z = n(388032),
    T = n(204340),
    A = n(969627);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function R(e) {
    let { user: t, channel: n } = e,
        R = __OVERLAY__ || !(0, d.Z)(t.id),
        M = (0, b.ZP)(t.id),
        k = (0, s.ZP)(),
        { analyticsLocations: L } = (0, u.ZP)(c.Z.PROFILE_PANEL),
        D = (0, m.ZB)({
            layout: 'SIMPLIFIED_DM_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        W = i.useRef(null),
        U = (0, a.Z)(W),
        B = (e) => {
            (0, P.openUserProfileModal)(w({ sourceAnalyticsLocations: L }, D, e));
        };
    return (0, r.jsx)(u.Gt, {
        value: L,
        children: (0, r.jsx)(m.Mt, {
            value: D,
            children: (0, r.jsxs)(O.Z, {
                ref: W,
                user: t,
                displayProfile: M,
                profileType: S.y0.PANEL,
                themeOverride: k,
                children: [
                    (0, r.jsxs)(l.u2, {
                        children: [
                            (0, r.jsx)(I.Z, {
                                profileType: S.y0.PANEL,
                                children: (0, r.jsx)(N.Z, { user: t })
                            }),
                            (0, r.jsxs)('header', {
                                className: T.header,
                                children: [
                                    (0, r.jsx)(y.Z, {
                                        user: t,
                                        displayProfile: M,
                                        profileType: S.y0.PANEL,
                                        animateOnHover: !U
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        user: t,
                                        displayProfile: M,
                                        channelId: n.id,
                                        profileType: S.y0.PANEL,
                                        onOpenProfile: R ? void 0 : B
                                    }),
                                    t.isClyde() && (0, r.jsx)(p.Z, { className: T.headerTag })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: A.body,
                                children: [
                                    (0, r.jsx)(E.Z, {
                                        user: t,
                                        profileType: S.y0.PANEL,
                                        nickname: f.ZP.getName(null, n.id, t),
                                        pronouns: null == M ? void 0 : M.pronouns,
                                        onOpenProfile: R ? void 0 : B,
                                        tags: (0, r.jsx)(C.Z, {
                                            displayProfile: M,
                                            profileType: S.y0.PANEL
                                        })
                                    }),
                                    (0, r.jsxs)(O.Z.Overlay, {
                                        className: A.overlay,
                                        children: [
                                            (0, r.jsx)(j.Z, {
                                                heading: Z.NW.string(Z.t['61W33d']),
                                                headingColor: 'header-primary',
                                                children: (0, r.jsx)(x.Z, {
                                                    userBio: null == M ? void 0 : M.bio,
                                                    userId: t.id,
                                                    animateOnHover: !0,
                                                    isHovering: U
                                                })
                                            }),
                                            (0, r.jsx)(j.Z, {
                                                heading: Z.NW.string(Z.t['A//N4u']),
                                                headingColor: 'header-primary',
                                                children: (0, r.jsx)(v.Z, { userId: t.id })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !R &&
                        (0, r.jsx)('footer', {
                            className: T.footer,
                            children: (0, r.jsx)(o.zxk, {
                                fullWidth: !0,
                                size: o.zxk.Sizes.LARGE,
                                look: o.zxk.Looks.BLANK,
                                color: T.footerButtonColor,
                                onClick: () => {
                                    B(),
                                        (0, g.pQ)(
                                            w(
                                                {
                                                    action: 'PRESS_VIEW_PROFILE',
                                                    analyticsLocations: L
                                                },
                                                D
                                            )
                                        );
                                },
                                children: Z.NW.string(Z.t['+Xp3ho'])
                            })
                        }),
                    (null == M ? void 0 : M.profileEffectId) != null &&
                        (0, r.jsx)(h.Z, {
                            profileEffectId: null == M ? void 0 : M.profileEffectId,
                            isHovering: U
                        })
                ]
            })
        })
    });
}
