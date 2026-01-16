n.d(t, { Z: () => L }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(81239),
    a = n(793030),
    o = n(481060),
    s = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(104505),
    p = n(680295),
    f = n(602733),
    h = n(176879),
    g = n(785717),
    m = n(221292),
    b = n(687158),
    y = n(510659),
    v = n(892001),
    O = n(899007),
    j = n(867176),
    x = n(451834),
    C = n(675893),
    E = n(502762),
    S = n(952124),
    _ = n(544989),
    I = n(481932),
    P = n(664794),
    Z = n(4517),
    N = n(277117),
    T = n(52639),
    A = n(874139),
    w = n(228168),
    R = n(671955),
    D = n(388032),
    M = n(960077);
function k(e) {
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
function L(e) {
    var t;
    let { user: n, currentUser: m, channel: D } = e,
        L = __OVERLAY__,
        G = (0, b.ZP)(n.id),
        B = (0, s.ZP)(),
        F = i.useRef(Date.now()),
        { analyticsLocations: H } = (0, u.ZP)(c.Z.USER_PROFILE_SIDEBAR),
        V = (0, g.ZB)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: D.id,
        }),
        z = i.useRef(null),
        { isHoveringOrFocusing: W, isHovering: K } = (0, d.Z)(z),
        Y = (0, y.$m)(),
        q = (0, o.q_F)({
            opacity: +(null != Y.interactionType),
            config: { duration: 150 },
        }),
        X = (e) => {
            (0, v.openUserProfileModal)(
                k(
                    {
                        sourceAnalyticsLocations: H,
                        hideRestrictedProfile: !0,
                    },
                    V,
                    e,
                ),
            );
        },
        Q = (null == G ? void 0 : G.widgets) != null && G.widgets.length > 0,
        {
            displayedWishlistItems: J,
            defaultWishlistId: $,
            title: ee,
        } = (0, h.QX)({
            user: n,
            numItems: h.fA,
            source: f.bd.DM_SIDE_PANEL,
            location: "UserProfileSidebar",
        }),
        et = null != J && J.length > 0;
    return (0, r.jsx)(u.Gt, {
        value: H,
        children: (0, r.jsx)(g.Mt, {
            value: V,
            openedAt: F.current,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, r.jsx)(y.NJ, {
                value: Y,
                children: (0, r.jsxs)(E.Z, {
                    ref: z,
                    user: n,
                    displayProfile: G,
                    themeType: R.l.SIDEBAR,
                    themeOverride: B,
                    children: [
                        null != Y.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: q,
                                className: M.backdrop,
                            }),
                        (0, r.jsxs)(a.u2D, {
                            children: [
                                (0, r.jsxs)(_.Z, {
                                    children: [
                                        (0, r.jsx)(I.Z, {
                                            user: n,
                                            themeType: R.l.SIDEBAR,
                                        }),
                                        n.bot ? (0, r.jsx)(S.Z, { user: n }) : (0, r.jsx)(P.Cn, { user: n }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: M.header,
                                    children: [
                                        (0, r.jsx)(j.Z, {
                                            user: n,
                                            displayProfile: G,
                                            themeType: R.l.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !W,
                                            className: M.banner,
                                        }),
                                        (0, r.jsx)(x.Z, {
                                            userId: n.id,
                                            className: M.toast,
                                        }),
                                        (0, r.jsx)(O.Z, {
                                            user: n,
                                            displayProfile: G,
                                            channelId: D.id,
                                            themeType: R.l.SIDEBAR,
                                            onOpenProfile: L ? void 0 : X,
                                        }),
                                        (0, r.jsx)(Z.Z, {
                                            user: n,
                                            channelId: D.id,
                                            themeType: R.l.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(N.Z, {
                                    user: n,
                                    currentUser: m,
                                    displayProfile: G,
                                    channel: D,
                                    isHoveringOrFocusing: null == Y.interactionType && W,
                                    onOpenProfile: L ? void 0 : X,
                                }),
                                Q &&
                                    (0, r.jsx)("div", {
                                        className: M.widgetPreviews,
                                        children: (0, r.jsx)(C.Z, {
                                            user: n,
                                            widgets: G.widgets,
                                            onOpenUserProfileModal: X,
                                        }),
                                    }),
                                et &&
                                    (0, r.jsx)("div", {
                                        className: M.wishlistBreadcrumb,
                                        children: (0, r.jsx)(A.Z, {
                                            profileOwner: n,
                                            wishlistItems: J,
                                            wishlistId: $,
                                            title: ee,
                                            onClick: () => {
                                                null == X || X({ tabSection: w.oh.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, r.jsx)(T.Z, {
                                    user: n,
                                    channelId: D.id,
                                }),
                            ],
                        }),
                        !L &&
                            (0, r.jsx)(U, {
                                handleOpenProfile: X,
                                analyticsLocations: H,
                                context: V,
                            }),
                        (null == G ? void 0 : G.profileEffect) != null &&
                            (0, r.jsx)(p.Z, {
                                skuId: null == G || null == (t = G.profileEffect) ? void 0 : t.skuId,
                                isHovering: K,
                            }),
                    ],
                }),
            }),
        }),
    });
}
let U = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: l } = e,
        [a, s] = i.useState("interactive-text-default");
    return (0, r.jsx)("div", {
        className: M.footer,
        children: (0, r.jsx)(o.P3F, {
            onMouseEnter: () => s("interactive-text-hover"),
            onMouseLeave: () => s("interactive-text-default"),
            onClick: () => {
                t(),
                    (0, m.pQ)(
                        k(
                            {
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: n,
                            },
                            l,
                        ),
                    );
            },
            className: M.footerButton,
            children: (0, r.jsx)(o.Text, {
                color: a,
                variant: "text-sm/normal",
                children: D.intl.string(D.t["+Xp3hq"]),
            }),
        }),
    });
};
