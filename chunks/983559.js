n.d(t, { Z: () => w }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(803948),
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
    y = n(113557),
    _ = n(867176),
    C = n(451834),
    x = n(502762),
    v = n(952124),
    j = n(544989),
    O = n(481932),
    E = n(664794),
    S = n(4517),
    P = n(277117),
    I = n(52639),
    Z = n(671955),
    T = n(388032),
    N = n(231688);
function A(e) {
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
        w = (0, m.ZP)(t.id),
        M = (0, c.ZP)(),
        k = i.useRef(Date.now()),
        { analyticsLocations: D } = (0, d.ZP)(u.Z.USER_PROFILE_SIDEBAR),
        L = (0, h.ZB)({
            layout: "SIDEBAR",
            userId: t.id,
            channelId: f.id,
        }),
        U = i.useRef(null),
        B = (0, s.Z)(U),
        F = (0, g.$m)(),
        H = (0, o.q_F)({
            opacity: +(null != F.interactionType),
            config: { duration: 150 },
        }),
        G = (e) => {
            (0, b.openUserProfileModal)(
                A(
                    {
                        sourceAnalyticsLocations: D,
                        hideRestrictedProfile: !0,
                    },
                    L,
                    e,
                ),
            );
        };
    return (0, r.jsx)(d.Gt, {
        value: D,
        children: (0, r.jsx)(h.Mt, {
            value: L,
            openedAt: k.current,
            fetchStartedAt: null == w ? void 0 : w.fetchStartedAt,
            fetchEndedAt: null == w ? void 0 : w.fetchEndedAt,
            isLoaded: null == w ? void 0 : w.isLoaded,
            children: (0, r.jsx)(g.NJ, {
                value: F,
                children: (0, r.jsxs)(x.Z, {
                    ref: U,
                    user: t,
                    displayProfile: w,
                    themeType: Z.l.SIDEBAR,
                    themeOverride: M,
                    children: [
                        null != F.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: H,
                                className: N.backdrop,
                            }),
                        (0, r.jsxs)(a.u2, {
                            children: [
                                (0, r.jsxs)(j.Z, {
                                    children: [
                                        (0, r.jsx)(O.Z, {
                                            user: t,
                                            themeType: Z.l.SIDEBAR,
                                            shouldShowTooltip: null === F.interactionType,
                                        }),
                                        t.bot
                                            ? (0, r.jsx)(v.Z, { user: t })
                                            : (0, r.jsx)(E.Z, {
                                                  type: "banner",
                                                  user: t,
                                              }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: N.header,
                                    children: [
                                        (0, r.jsx)(_.Z, {
                                            user: t,
                                            displayProfile: w,
                                            themeType: Z.l.SIDEBAR,
                                            animateOnHover: !B,
                                            className: N.banner,
                                        }),
                                        (0, r.jsx)(C.Z, {
                                            userId: t.id,
                                            className: N.toast,
                                        }),
                                        (0, r.jsx)(y.Z, {
                                            location: "UserProfileSidebar",
                                            user: t,
                                            displayProfile: w,
                                            channelId: f.id,
                                            themeType: Z.l.SIDEBAR,
                                            onOpenProfile: T ? void 0 : G,
                                        }),
                                        (0, r.jsx)(S.Z, {
                                            location: "UserProfileSidebar",
                                            user: t,
                                            channelId: f.id,
                                            themeType: Z.l.SIDEBAR,
                                            disableToolbar: t.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(P.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: w,
                                    channel: f,
                                    isHovering: null == F.interactionType && B,
                                    onOpenProfile: T ? void 0 : G,
                                }),
                                (0, r.jsx)(I.Z, {
                                    user: t,
                                    channelId: f.id,
                                }),
                            ],
                        }),
                        !T &&
                            (0, r.jsx)(R, {
                                handleOpenProfile: G,
                                analyticsLocations: D,
                                context: L,
                            }),
                        (null == w ? void 0 : w.profileEffectId) != null &&
                            (0, r.jsx)(p.Z, {
                                profileEffectId: null == w ? void 0 : w.profileEffectId,
                                isHovering: B,
                                urlQueryString: "dmView",
                            }),
                    ],
                }),
            }),
        }),
    });
}
let R = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: l } = e,
        [a, s] = i.useState("interactive-normal");
    return (0, r.jsx)("div", {
        className: N.footer,
        children: (0, r.jsx)(o.P3F, {
            onMouseEnter: () => s("interactive-hover"),
            onMouseLeave: () => s("interactive-normal"),
            onClick: () => {
                t(),
                    (0, f.pQ)(
                        A(
                            {
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: n,
                            },
                            l,
                        ),
                    );
            },
            className: N.footerButton,
            children: (0, r.jsx)(o.Text, {
                color: a,
                variant: "text-sm/normal",
                children: T.intl.string(T.t["+Xp3ho"]),
            }),
        }),
    });
};
