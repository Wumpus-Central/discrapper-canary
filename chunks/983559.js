n.d(t, { Z: () => A });
var r = n(255367),
    i = n(73800),
    l = n(66546),
    a = n(597312),
    s = n(755721),
    o = n(481060),
    c = n(727637),
    u = n(410030),
    d = n(100527),
    h = n(906732),
    p = n(680295),
    f = n(785717),
    g = n(221292),
    m = n(687158),
    b = n(510659),
    y = n(892001),
    x = n(113557),
    j = n(867176),
    _ = n(451834),
    O = n(502762),
    v = n(952124),
    C = n(544989),
    E = n(481932),
    S = n(664794),
    Z = n(4517),
    I = n(277117),
    P = n(52639),
    T = n(228168),
    N = n(388032),
    R = n(638414);
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
function A(e) {
    let { user: t, currentUser: n, channel: A } = e,
        D = __OVERLAY__,
        L = (0, m.ZP)(t.id),
        k = (0, u.ZP)(),
        M = i.useRef(Date.now()),
        { analyticsLocations: U } = (0, h.ZP)(d.Z.USER_PROFILE_SIDEBAR),
        H = (0, f.ZB)({
            layout: 'SIDEBAR',
            userId: t.id,
            channelId: A.id
        }),
        G = i.useRef(null),
        F = (0, c.Z)(G),
        B = (0, b.$m)(),
        z = (0, o.q_F)({
            opacity: +(null != B.interactionType),
            config: { duration: 150 }
        }),
        W = (e) => {
            (0, y.openUserProfileModal)(
                w(
                    {
                        sourceAnalyticsLocations: U,
                        hideRestrictedProfile: !0
                    },
                    H,
                    e
                )
            );
        };
    return (0, r.jsx)(h.Gt, {
        value: U,
        children: (0, r.jsx)(f.Mt, {
            value: H,
            openedAt: M.current,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, r.jsx)(b.NJ, {
                value: B,
                children: (0, r.jsxs)(O.Z, {
                    ref: G,
                    user: t,
                    displayProfile: L,
                    themeType: T.lY.SIDEBAR,
                    themeOverride: k,
                    children: [
                        null != B.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: z,
                                className: R.backdrop
                            }),
                        (0, r.jsxs)(a.u2, {
                            children: [
                                (0, r.jsxs)(C.Z, {
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            user: t,
                                            themeType: T.lY.SIDEBAR,
                                            shouldShowTooltip: null === B.interactionType
                                        }),
                                        t.bot
                                            ? (0, r.jsx)(v.Z, { user: t })
                                            : (0, r.jsx)(S.Z, {
                                                  type: 'banner',
                                                  user: t
                                              })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: R.header,
                                    children: [
                                        (0, r.jsx)(j.Z, {
                                            user: t,
                                            displayProfile: L,
                                            themeType: T.lY.SIDEBAR,
                                            animateOnHover: !F,
                                            className: R.banner
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            userId: t.id,
                                            className: R.toast
                                        }),
                                        (0, r.jsx)(x.Z, {
                                            location: 'UserProfileSidebar',
                                            user: t,
                                            displayProfile: L,
                                            channelId: A.id,
                                            themeType: T.lY.SIDEBAR,
                                            onOpenProfile: D ? void 0 : W
                                        }),
                                        (0, r.jsx)(Z.Z, {
                                            location: 'UserProfileSidebar',
                                            user: t,
                                            channelId: A.id,
                                            themeType: T.lY.SIDEBAR,
                                            disableToolbar: t.bot
                                        })
                                    ]
                                }),
                                (0, r.jsx)(I.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: L,
                                    channel: A,
                                    isHovering: null == B.interactionType && F,
                                    onOpenProfile: D ? void 0 : W
                                }),
                                (0, r.jsx)(P.Z, {
                                    user: t,
                                    channelId: A.id
                                })
                            ]
                        }),
                        !D &&
                            (0, r.jsx)('div', {
                                className: R.footer,
                                children: (0, r.jsx)(s.zx, {
                                    fullWidth: !0,
                                    size: s.zx.Sizes.LARGE,
                                    look: s.zx.Looks.BLANK,
                                    color: R.footerButtonColor,
                                    onClick: () => {
                                        (W(),
                                            (0, g.pQ)(
                                                w(
                                                    {
                                                        action: 'PRESS_VIEW_PROFILE',
                                                        analyticsLocations: U
                                                    },
                                                    H
                                                )
                                            ));
                                    },
                                    children: N.intl.string(N.t['+Xp3ho'])
                                })
                            }),
                        (null == L ? void 0 : L.profileEffectId) != null &&
                            (0, r.jsx)(p.Z, {
                                profileEffectId: null == L ? void 0 : L.profileEffectId,
                                isHovering: F,
                                urlQueryString: 'dmView'
                            })
                    ]
                })
            })
        })
    });
}
