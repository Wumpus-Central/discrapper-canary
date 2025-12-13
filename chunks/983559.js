n.d(t, { Z: () => G }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(467721),
    a = n(793030),
    s = n(481060),
    o = n(410030),
    c = n(100527),
    d = n(906732),
    u = n(104505),
    p = n(680295),
    h = n(602733),
    f = n(176879),
    g = n(785717),
    m = n(221292),
    b = n(787309),
    y = n(687158),
    O = n(612600),
    x = n(510659),
    j = n(892001),
    v = n(899007),
    C = n(867176),
    I = n(451834),
    _ = n(675893),
    S = n(502762),
    E = n(952124),
    Z = n(544989),
    P = n(481932),
    T = n(664794),
    N = n(4517),
    R = n(277117),
    w = n(52639),
    A = n(874139),
    D = n(228168),
    L = n(671955),
    M = n(388032),
    k = n(960077);
function U(e) {
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
function G(e) {
    var t;
    let { user: n, currentUser: m, channel: M } = e,
        G = __OVERLAY__,
        F = (0, y.ZP)(n.id),
        B = (0, o.ZP)(),
        V = i.useRef(Date.now()),
        { analyticsLocations: z } = (0, d.ZP)(c.Z.USER_PROFILE_SIDEBAR),
        W = (0, g.ZB)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: M.id,
        }),
        Y = i.useRef(null),
        { isHoveringOrFocusing: q, isHovering: K } = (0, u.Z)(Y),
        Q = (0, x.$m)(),
        X = (0, s.q_F)({
            opacity: +(null != Q.interactionType),
            config: { duration: 150 },
        }),
        J = (e) => {
            (0, j.openUserProfileModal)(
                U(
                    {
                        sourceAnalyticsLocations: z,
                        hideRestrictedProfile: !0,
                    },
                    W,
                    e,
                ),
            );
        },
        $ = (0, O.Z)({ location: "UserProfileSidebar" }),
        ee = (null == F ? void 0 : F.widgets) != null && F.widgets.length > 0,
        et = (0, b.g)({ location: "UserProfileSidebar" }),
        {
            displayedWishlistItems: en,
            defaultWishlistId: er,
            title: ei,
        } = (0, f.QX)({
            user: n,
            numItems: f.fA,
            source: h.bd.DM_SIDE_PANEL,
            location: "UserProfileSidebar",
        }),
        el = et && null != en && en.length > 0;
    return (0, r.jsx)(d.Gt, {
        value: z,
        children: (0, r.jsx)(g.Mt, {
            value: W,
            openedAt: V.current,
            fetchStartedAt: null == F ? void 0 : F.fetchStartedAt,
            fetchEndedAt: null == F ? void 0 : F.fetchEndedAt,
            isLoaded: null == F ? void 0 : F.isLoaded,
            children: (0, r.jsx)(x.NJ, {
                value: Q,
                children: (0, r.jsxs)(S.Z, {
                    ref: Y,
                    user: n,
                    displayProfile: F,
                    themeType: L.l.SIDEBAR,
                    themeOverride: B,
                    children: [
                        null != Q.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: X,
                                className: k.backdrop,
                            }),
                        (0, r.jsxs)(a.u2D, {
                            children: [
                                (0, r.jsxs)(Z.Z, {
                                    children: [
                                        (0, r.jsx)(P.Z, {
                                            user: n,
                                            themeType: L.l.SIDEBAR,
                                        }),
                                        n.bot ? (0, r.jsx)(E.Z, { user: n }) : (0, r.jsx)(T.Cn, { user: n }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: k.header,
                                    children: [
                                        (0, r.jsx)(C.Z, {
                                            user: n,
                                            displayProfile: F,
                                            themeType: L.l.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !q,
                                            className: k.banner,
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            userId: n.id,
                                            className: k.toast,
                                        }),
                                        (0, r.jsx)(v.Z, {
                                            user: n,
                                            displayProfile: F,
                                            channelId: M.id,
                                            themeType: L.l.SIDEBAR,
                                            onOpenProfile: G ? void 0 : J,
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            user: n,
                                            channelId: M.id,
                                            themeType: L.l.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(R.Z, {
                                    user: n,
                                    currentUser: m,
                                    displayProfile: F,
                                    channel: M,
                                    isHoveringOrFocusing: null == Q.interactionType && q,
                                    onOpenProfile: G ? void 0 : J,
                                }),
                                $ &&
                                    ee &&
                                    (0, r.jsx)("div", {
                                        className: k.widgetPreviews,
                                        children: (0, r.jsx)(_.Z, {
                                            user: n,
                                            widgets: F.widgets,
                                            onOpenUserProfileModal: J,
                                        }),
                                    }),
                                el &&
                                    (0, r.jsx)("div", {
                                        className: k.wishlistBreadcrumb,
                                        children: (0, r.jsx)(A.Z, {
                                            profileOwner: n,
                                            wishlistItems: en,
                                            wishlistId: er,
                                            title: ei,
                                            onClick: () => {
                                                null == J || J({ tabSection: D.oh.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, r.jsx)(w.Z, {
                                    user: n,
                                    channelId: M.id,
                                }),
                            ],
                        }),
                        !G &&
                            (0, r.jsx)(H, {
                                handleOpenProfile: J,
                                analyticsLocations: z,
                                context: W,
                            }),
                        (null == F ? void 0 : F.profileEffect) != null &&
                            (0, r.jsx)(p.Z, {
                                skuId: null == F || null == (t = F.profileEffect) ? void 0 : t.skuId,
                                isHovering: K,
                            }),
                    ],
                }),
            }),
        }),
    });
}
let H = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: l } = e,
        [a, o] = i.useState("interactive-text-default");
    return (0, r.jsx)("div", {
        className: k.footer,
        children: (0, r.jsx)(s.P3F, {
            onMouseEnter: () => o("interactive-text-hover"),
            onMouseLeave: () => o("interactive-text-default"),
            onClick: () => {
                t(),
                    (0, m.pQ)(
                        U(
                            {
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: n,
                            },
                            l,
                        ),
                    );
            },
            className: k.footerButton,
            children: (0, r.jsx)(s.Text, {
                color: a,
                variant: "text-sm/normal",
                children: M.intl.string(M.t["+Xp3hq"]),
            }),
        }),
    });
};
