n.d(t, { Z: () => w });
var r = n(255367),
    i = n(73800),
    l = n(524979),
    a = n(597312),
    o = n(481060),
    s = n(727637),
    c = n(410030),
    u = n(100527),
    d = n(906732),
    p = n(680295),
    h = n(785717),
    f = n(221292),
    m = n(687158),
    g = n(510659),
    b = n(892001),
    _ = n(113557),
    y = n(867176),
    C = n(451834),
    x = n(502762),
    v = n(952124),
    j = n(544989),
    O = n(481932),
    E = n(664794),
    I = n(4517),
    P = n(277117),
    S = n(52639),
    Z = n(228168),
    N = n(388032),
    T = n(638414);
function A(e) {
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
function w(e) {
    let { user: t, currentUser: n, channel: w } = e,
        R = __OVERLAY__,
        M = (0, m.ZP)(t.id),
        k = (0, c.ZP)(),
        L = i.useRef(Date.now()),
        { analyticsLocations: D } = (0, d.ZP)(u.Z.USER_PROFILE_SIDEBAR),
        U = (0, h.ZB)({
            layout: 'SIDEBAR',
            userId: t.id,
            channelId: w.id
        }),
        B = i.useRef(null),
        F = (0, s.Z)(B),
        G = (0, g.$m)(),
        H = (0, o.q_F)({
            opacity: +(null != G.interactionType),
            config: { duration: 150 }
        }),
        V = (e) => {
            (0, b.openUserProfileModal)(
                A(
                    {
                        sourceAnalyticsLocations: D,
                        hideRestrictedProfile: !0
                    },
                    U,
                    e
                )
            );
        };
    return (0, r.jsx)(d.Gt, {
        value: D,
        children: (0, r.jsx)(h.Mt, {
            value: U,
            openedAt: L.current,
            fetchStartedAt: null == M ? void 0 : M.fetchStartedAt,
            fetchEndedAt: null == M ? void 0 : M.fetchEndedAt,
            isLoaded: null == M ? void 0 : M.isLoaded,
            children: (0, r.jsx)(g.NJ, {
                value: G,
                children: (0, r.jsxs)(x.Z, {
                    ref: B,
                    user: t,
                    displayProfile: M,
                    themeType: Z.lY.SIDEBAR,
                    themeOverride: k,
                    children: [
                        null != G.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: H,
                                className: T.backdrop
                            }),
                        (0, r.jsxs)(a.u2, {
                            children: [
                                (0, r.jsxs)(j.Z, {
                                    children: [
                                        (0, r.jsx)(O.Z, {
                                            user: t,
                                            themeType: Z.lY.SIDEBAR,
                                            shouldShowTooltip: null === G.interactionType
                                        }),
                                        t.bot
                                            ? (0, r.jsx)(v.Z, { user: t })
                                            : (0, r.jsx)(E.Z, {
                                                  type: 'banner',
                                                  user: t
                                              })
                                    ]
                                }),
                                (0, r.jsxs)('header', {
                                    className: T.header,
                                    children: [
                                        (0, r.jsx)(y.Z, {
                                            user: t,
                                            displayProfile: M,
                                            themeType: Z.lY.SIDEBAR,
                                            animateOnHover: !F,
                                            className: T.banner
                                        }),
                                        (0, r.jsx)(C.Z, {
                                            userId: t.id,
                                            className: T.toast
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            location: 'UserProfileSiebar',
                                            user: t,
                                            displayProfile: M,
                                            channelId: w.id,
                                            themeType: Z.lY.SIDEBAR,
                                            onOpenProfile: R ? void 0 : V
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            location: 'UserProfileSiebar',
                                            user: t,
                                            channelId: w.id,
                                            themeType: Z.lY.SIDEBAR,
                                            disableToolbar: t.bot
                                        })
                                    ]
                                }),
                                (0, r.jsx)(P.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: M,
                                    channel: w,
                                    isHovering: null == G.interactionType && F,
                                    onOpenProfile: R ? void 0 : V
                                }),
                                (0, r.jsx)(S.Z, {
                                    user: t,
                                    channelId: w.id
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
                                        V(),
                                            (0, f.pQ)(
                                                A(
                                                    {
                                                        action: 'PRESS_VIEW_PROFILE',
                                                        analyticsLocations: D
                                                    },
                                                    U
                                                )
                                            );
                                    },
                                    children: N.intl.string(N.t['+Xp3ho'])
                                })
                            }),
                        (null == M ? void 0 : M.profileEffectId) != null &&
                            (0, r.jsx)(p.Z, {
                                profileEffectId: null == M ? void 0 : M.profileEffectId,
                                isHovering: F,
                                urlQueryString: 'dmView'
                            })
                    ]
                })
            })
        })
    });
}
