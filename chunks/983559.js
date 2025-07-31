n.d(t, { Z: () => R });
var r = n(255367),
    i = n(73800),
    l = n(66546),
    a = n(597312),
    o = n(755721),
    s = n(481060),
    c = n(727637),
    u = n(410030),
    d = n(100527),
    p = n(906732),
    h = n(680295),
    f = n(785717),
    m = n(221292),
    g = n(687158),
    b = n(510659),
    _ = n(892001),
    y = n(113557),
    C = n(867176),
    x = n(451834),
    v = n(502762),
    j = n(952124),
    O = n(544989),
    E = n(481932),
    S = n(664794),
    P = n(4517),
    I = n(277117),
    Z = n(52639),
    T = n(228168),
    N = n(388032),
    A = n(638414);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function R(e) {
    let { user: t, currentUser: n, channel: R } = e,
        M = __OVERLAY__,
        D = (0, g.ZP)(t.id),
        k = (0, u.ZP)(),
        L = i.useRef(Date.now()),
        { analyticsLocations: U } = (0, p.ZP)(d.Z.USER_PROFILE_SIDEBAR),
        B = (0, f.ZB)({
            layout: 'SIDEBAR',
            userId: t.id,
            channelId: R.id
        }),
        F = i.useRef(null),
        H = (0, c.Z)(F),
        G = (0, b.$m)(),
        V = (0, s.q_F)({
            opacity: +(null != G.interactionType),
            config: { duration: 150 }
        }),
        z = (e) => {
            (0, _.openUserProfileModal)(
                w(
                    {
                        sourceAnalyticsLocations: U,
                        hideRestrictedProfile: !0
                    },
                    B,
                    e
                )
            );
        };
    return (0, r.jsx)(p.Gt, {
        value: U,
        children: (0, r.jsx)(f.Mt, {
            value: B,
            openedAt: L.current,
            fetchStartedAt: null == D ? void 0 : D.fetchStartedAt,
            fetchEndedAt: null == D ? void 0 : D.fetchEndedAt,
            isLoaded: null == D ? void 0 : D.isLoaded,
            children: (0, r.jsx)(b.NJ, {
                value: G,
                children: (0, r.jsxs)(v.Z, {
                    ref: F,
                    user: t,
                    displayProfile: D,
                    themeType: T.lY.SIDEBAR,
                    themeOverride: k,
                    children: [
                        null != G.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: V,
                                className: A.backdrop
                            }),
                        (0, r.jsxs)(a.u2, {
                            children: [
                                (0, r.jsxs)(O.Z, {
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            user: t,
                                            themeType: T.lY.SIDEBAR,
                                            shouldShowTooltip: null === G.interactionType
                                        }),
                                        t.bot
                                            ? (0, r.jsx)(j.Z, { user: t })
                                            : (0, r.jsx)(S.Z, {
                                                  type: 'banner',
                                                  user: t
                                              })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: A.header,
                                    children: [
                                        (0, r.jsx)(C.Z, {
                                            user: t,
                                            displayProfile: D,
                                            themeType: T.lY.SIDEBAR,
                                            animateOnHover: !H,
                                            className: A.banner
                                        }),
                                        (0, r.jsx)(x.Z, {
                                            userId: t.id,
                                            className: A.toast
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            location: 'UserProfileSidebar',
                                            user: t,
                                            displayProfile: D,
                                            channelId: R.id,
                                            themeType: T.lY.SIDEBAR,
                                            onOpenProfile: M ? void 0 : z
                                        }),
                                        (0, r.jsx)(P.Z, {
                                            location: 'UserProfileSidebar',
                                            user: t,
                                            channelId: R.id,
                                            themeType: T.lY.SIDEBAR,
                                            disableToolbar: t.bot
                                        })
                                    ]
                                }),
                                (0, r.jsx)(I.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: D,
                                    channel: R,
                                    isHovering: null == G.interactionType && H,
                                    onOpenProfile: M ? void 0 : z
                                }),
                                (0, r.jsx)(Z.Z, {
                                    user: t,
                                    channelId: R.id
                                })
                            ]
                        }),
                        !M &&
                            (0, r.jsx)('div', {
                                className: A.footer,
                                children: (0, r.jsx)(o.zx, {
                                    fullWidth: !0,
                                    size: o.zx.Sizes.LARGE,
                                    look: o.zx.Looks.BLANK,
                                    color: A.footerButtonColor,
                                    onClick: () => {
                                        (z(),
                                            (0, m.pQ)(
                                                w(
                                                    {
                                                        action: 'PRESS_VIEW_PROFILE',
                                                        analyticsLocations: U
                                                    },
                                                    B
                                                )
                                            ));
                                    },
                                    children: N.intl.string(N.t['+Xp3ho'])
                                })
                            }),
                        (null == D ? void 0 : D.profileEffectId) != null &&
                            (0, r.jsx)(h.Z, {
                                profileEffectId: null == D ? void 0 : D.profileEffectId,
                                isHovering: H,
                                urlQueryString: 'dmView'
                            })
                    ]
                })
            })
        })
    });
}
