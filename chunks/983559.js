n.d(t, { Z: () => w }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(717976),
    a = n(597312),
    s = n(481060),
    o = n(727637),
    c = n(410030),
    u = n(100527),
    d = n(906732),
    h = n(680295),
    p = n(785717),
    f = n(221292),
    g = n(687158),
    m = n(510659),
    b = n(892001),
    y = n(113557),
    x = n(867176),
    j = n(451834),
    _ = n(502762),
    O = n(952124),
    v = n(544989),
    C = n(481932),
    E = n(664794),
    S = n(4517),
    I = n(277117),
    Z = n(52639),
    P = n(228168),
    T = n(388032),
    N = n(231688);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function w(e) {
    let { user: t, currentUser: n, channel: f } = e,
        T = __OVERLAY__,
        w = (0, g.ZP)(t.id),
        D = (0, c.ZP)(),
        k = i.useRef(Date.now()),
        { analyticsLocations: L } = (0, d.ZP)(u.Z.USER_PROFILE_SIDEBAR),
        M = (0, p.ZB)({
            layout: "SIDEBAR",
            userId: t.id,
            channelId: f.id,
        }),
        U = i.useRef(null),
        F = (0, o.Z)(U),
        H = (0, m.$m)(),
        G = (0, s.q_F)({
            opacity: +(null != H.interactionType),
            config: { duration: 150 },
        }),
        B = (e) => {
            (0, b.openUserProfileModal)(
                R(
                    {
                        sourceAnalyticsLocations: L,
                        hideRestrictedProfile: !0,
                    },
                    M,
                    e,
                ),
            );
        };
    return (0, r.jsx)(d.Gt, {
        value: L,
        children: (0, r.jsx)(p.Mt, {
            value: M,
            openedAt: k.current,
            fetchStartedAt: null == w ? void 0 : w.fetchStartedAt,
            fetchEndedAt: null == w ? void 0 : w.fetchEndedAt,
            isLoaded: null == w ? void 0 : w.isLoaded,
            children: (0, r.jsx)(m.NJ, {
                value: H,
                children: (0, r.jsxs)(_.Z, {
                    ref: U,
                    user: t,
                    displayProfile: w,
                    themeType: P.lY.SIDEBAR,
                    themeOverride: D,
                    children: [
                        null != H.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: G,
                                className: N.backdrop,
                            }),
                        (0, r.jsxs)(a.u2, {
                            children: [
                                (0, r.jsxs)(v.Z, {
                                    children: [
                                        (0, r.jsx)(C.Z, {
                                            user: t,
                                            themeType: P.lY.SIDEBAR,
                                            shouldShowTooltip: null === H.interactionType,
                                        }),
                                        t.bot
                                            ? (0, r.jsx)(O.Z, { user: t })
                                            : (0, r.jsx)(E.Z, {
                                                  type: "banner",
                                                  user: t,
                                              }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: N.header,
                                    children: [
                                        (0, r.jsx)(x.Z, {
                                            user: t,
                                            displayProfile: w,
                                            themeType: P.lY.SIDEBAR,
                                            animateOnHover: !F,
                                            className: N.banner,
                                        }),
                                        (0, r.jsx)(j.Z, {
                                            userId: t.id,
                                            className: N.toast,
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            location: "UserProfileSidebar",
                                            user: t,
                                            displayProfile: w,
                                            channelId: f.id,
                                            themeType: P.lY.SIDEBAR,
                                            onOpenProfile: T ? void 0 : B,
                                        }),
                                        (0, r.jsx)(S.Z, {
                                            location: "UserProfileSidebar",
                                            user: t,
                                            channelId: f.id,
                                            themeType: P.lY.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(I.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: w,
                                    channel: f,
                                    isHovering: null == H.interactionType && F,
                                    onOpenProfile: T ? void 0 : B,
                                }),
                                (0, r.jsx)(Z.Z, {
                                    user: t,
                                    channelId: f.id,
                                }),
                            ],
                        }),
                        !T &&
                            (0, r.jsx)(A, {
                                handleOpenProfile: B,
                                analyticsLocations: L,
                                context: M,
                            }),
                        (null == w ? void 0 : w.profileEffectId) != null &&
                            (0, r.jsx)(h.Z, {
                                profileEffectId: null == w ? void 0 : w.profileEffectId,
                                isHovering: F,
                                urlQueryString: "dmView",
                            }),
                    ],
                }),
            }),
        }),
    });
}
let A = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: l } = e,
        [a, o] = i.useState("interactive-normal");
    return (0, r.jsx)("div", {
        className: N.footer,
        children: (0, r.jsx)(s.P3F, {
            onMouseEnter: () => o("interactive-hover"),
            onMouseLeave: () => o("interactive-normal"),
            onClick: () => {
                t(),
                    (0, f.pQ)(
                        R(
                            {
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: n,
                            },
                            l,
                        ),
                    );
            },
            className: N.footerButton,
            children: (0, r.jsx)(s.Text, {
                color: a,
                variant: "text-sm/normal",
                children: T.intl.string(T.t["+Xp3ho"]),
            }),
        }),
    });
};
