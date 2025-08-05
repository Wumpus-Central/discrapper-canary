n.d(t, { Z: () => A });
var r = n(255367),
    i = n(73800),
    l = n(66546),
    a = n(597312),
    s = n(755721),
    o = n(481060),
    c = n(727637),
    d = n(410030),
    u = n(100527),
    h = n(906732),
    p = n(680295),
    f = n(785717),
    g = n(221292),
    m = n(687158),
    b = n(510659),
    _ = n(892001),
    y = n(113557),
    j = n(867176),
    O = n(451834),
    x = n(502762),
    v = n(952124),
    C = n(544989),
    E = n(481932),
    Z = n(664794),
    I = n(4517),
    S = n(277117),
    P = n(52639),
    T = n(228168),
    N = n(388032),
    w = n(638414);
function R(e) {
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
function A(e) {
    let { user: t, currentUser: n, channel: A } = e,
        D = __OVERLAY__,
        L = (0, m.ZP)(t.id),
        M = (0, d.ZP)(),
        k = i.useRef(Date.now()),
        { analyticsLocations: U } = (0, h.ZP)(u.Z.USER_PROFILE_SIDEBAR),
        G = (0, f.ZB)({
            layout: 'SIDEBAR',
            userId: t.id,
            channelId: A.id
        }),
        F = i.useRef(null),
        B = (0, c.Z)(F),
        H = (0, b.$m)(),
        z = (0, o.q_F)({
            opacity: +(null != H.interactionType),
            config: { duration: 150 }
        }),
        V = (e) => {
            (0, _.openUserProfileModal)(
                R(
                    {
                        sourceAnalyticsLocations: U,
                        hideRestrictedProfile: !0
                    },
                    G,
                    e
                )
            );
        };
    return (0, r.jsx)(h.Gt, {
        value: U,
        children: (0, r.jsx)(f.Mt, {
            value: G,
            openedAt: k.current,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, r.jsx)(b.NJ, {
                value: H,
                children: (0, r.jsxs)(x.Z, {
                    ref: F,
                    user: t,
                    displayProfile: L,
                    themeType: T.lY.SIDEBAR,
                    themeOverride: M,
                    children: [
                        null != H.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: z,
                                className: w.backdrop
                            }),
                        (0, r.jsxs)(a.u2, {
                            children: [
                                (0, r.jsxs)(C.Z, {
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            user: t,
                                            themeType: T.lY.SIDEBAR,
                                            shouldShowTooltip: null === H.interactionType
                                        }),
                                        t.bot
                                            ? (0, r.jsx)(v.Z, { user: t })
                                            : (0, r.jsx)(Z.Z, {
                                                  type: 'banner',
                                                  user: t
                                              })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: w.header,
                                    children: [
                                        (0, r.jsx)(j.Z, {
                                            user: t,
                                            displayProfile: L,
                                            themeType: T.lY.SIDEBAR,
                                            animateOnHover: !B,
                                            className: w.banner
                                        }),
                                        (0, r.jsx)(O.Z, {
                                            userId: t.id,
                                            className: w.toast
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            location: 'UserProfileSidebar',
                                            user: t,
                                            displayProfile: L,
                                            channelId: A.id,
                                            themeType: T.lY.SIDEBAR,
                                            onOpenProfile: D ? void 0 : V
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            location: 'UserProfileSidebar',
                                            user: t,
                                            channelId: A.id,
                                            themeType: T.lY.SIDEBAR,
                                            disableToolbar: t.bot
                                        })
                                    ]
                                }),
                                (0, r.jsx)(S.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: L,
                                    channel: A,
                                    isHovering: null == H.interactionType && B,
                                    onOpenProfile: D ? void 0 : V
                                }),
                                (0, r.jsx)(P.Z, {
                                    user: t,
                                    channelId: A.id
                                })
                            ]
                        }),
                        !D &&
                            (0, r.jsx)('div', {
                                className: w.footer,
                                children: (0, r.jsx)(s.zx, {
                                    fullWidth: !0,
                                    size: s.zx.Sizes.LARGE,
                                    look: s.zx.Looks.BLANK,
                                    color: w.footerButtonColor,
                                    onClick: () => {
                                        (V(),
                                            (0, g.pQ)(
                                                R(
                                                    {
                                                        action: 'PRESS_VIEW_PROFILE',
                                                        analyticsLocations: U
                                                    },
                                                    G
                                                )
                                            ));
                                    },
                                    children: N.intl.string(N.t['+Xp3ho'])
                                })
                            }),
                        (null == L ? void 0 : L.profileEffectId) != null &&
                            (0, r.jsx)(p.Z, {
                                profileEffectId: null == L ? void 0 : L.profileEffectId,
                                isHovering: B,
                                urlQueryString: 'dmView'
                            })
                    ]
                })
            })
        })
    });
}
