n.d(t, { Z: () => U }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(620389),
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
    y = n(612600),
    v = n(510659),
    O = n(892001),
    j = n(899007),
    x = n(867176),
    C = n(451834),
    E = n(675893),
    S = n(502762),
    _ = n(952124),
    I = n(544989),
    P = n(481932),
    Z = n(664794),
    N = n(4517),
    T = n(277117),
    A = n(52639),
    w = n(874139),
    R = n(228168),
    D = n(671955),
    M = n(388032),
    k = n(960077);
function L(e) {
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
function U(e) {
    var t;
    let { user: n, currentUser: m, channel: M } = e,
        U = __OVERLAY__,
        B = (0, b.ZP)(n.id),
        F = (0, s.ZP)(),
        H = i.useRef(Date.now()),
        { analyticsLocations: V } = (0, u.ZP)(c.Z.USER_PROFILE_SIDEBAR),
        z = (0, g.ZB)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: M.id,
        }),
        W = i.useRef(null),
        { isHoveringOrFocusing: K, isHovering: Y } = (0, d.Z)(W),
        q = (0, v.$m)(),
        X = (0, o.q_F)({
            opacity: +(null != q.interactionType),
            config: { duration: 150 },
        }),
        Q = (e) => {
            (0, O.openUserProfileModal)(
                L(
                    {
                        sourceAnalyticsLocations: V,
                        hideRestrictedProfile: !0,
                    },
                    z,
                    e,
                ),
            );
        },
        J = (0, y.Z)({ location: "UserProfileSidebar" }),
        $ = (null == B ? void 0 : B.widgets) != null && B.widgets.length > 0,
        {
            displayedWishlistItems: ee,
            defaultWishlistId: et,
            title: en,
        } = (0, h.QX)({
            user: n,
            numItems: h.fA,
            source: f.bd.DM_SIDE_PANEL,
            location: "UserProfileSidebar",
        }),
        er = null != ee && ee.length > 0;
    return (0, r.jsx)(u.Gt, {
        value: V,
        children: (0, r.jsx)(g.Mt, {
            value: z,
            openedAt: H.current,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsx)(v.NJ, {
                value: q,
                children: (0, r.jsxs)(S.Z, {
                    ref: W,
                    user: n,
                    displayProfile: B,
                    themeType: D.l.SIDEBAR,
                    themeOverride: F,
                    children: [
                        null != q.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: X,
                                className: k.backdrop,
                            }),
                        (0, r.jsxs)(a.u2D, {
                            children: [
                                (0, r.jsxs)(I.Z, {
                                    children: [
                                        (0, r.jsx)(P.Z, {
                                            user: n,
                                            themeType: D.l.SIDEBAR,
                                        }),
                                        n.bot ? (0, r.jsx)(_.Z, { user: n }) : (0, r.jsx)(Z.Cn, { user: n }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: k.header,
                                    children: [
                                        (0, r.jsx)(x.Z, {
                                            user: n,
                                            displayProfile: B,
                                            themeType: D.l.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !K,
                                            className: k.banner,
                                        }),
                                        (0, r.jsx)(C.Z, {
                                            userId: n.id,
                                            className: k.toast,
                                        }),
                                        (0, r.jsx)(j.Z, {
                                            user: n,
                                            displayProfile: B,
                                            channelId: M.id,
                                            themeType: D.l.SIDEBAR,
                                            onOpenProfile: U ? void 0 : Q,
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            user: n,
                                            channelId: M.id,
                                            themeType: D.l.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(T.Z, {
                                    user: n,
                                    currentUser: m,
                                    displayProfile: B,
                                    channel: M,
                                    isHoveringOrFocusing: null == q.interactionType && K,
                                    onOpenProfile: U ? void 0 : Q,
                                }),
                                J &&
                                    $ &&
                                    (0, r.jsx)("div", {
                                        className: k.widgetPreviews,
                                        children: (0, r.jsx)(E.Z, {
                                            user: n,
                                            widgets: B.widgets,
                                            onOpenUserProfileModal: Q,
                                        }),
                                    }),
                                er &&
                                    (0, r.jsx)("div", {
                                        className: k.wishlistBreadcrumb,
                                        children: (0, r.jsx)(w.Z, {
                                            profileOwner: n,
                                            wishlistItems: ee,
                                            wishlistId: et,
                                            title: en,
                                            onClick: () => {
                                                null == Q || Q({ tabSection: R.oh.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, r.jsx)(A.Z, {
                                    user: n,
                                    channelId: M.id,
                                }),
                            ],
                        }),
                        !U &&
                            (0, r.jsx)(G, {
                                handleOpenProfile: Q,
                                analyticsLocations: V,
                                context: z,
                            }),
                        (null == B ? void 0 : B.profileEffect) != null &&
                            (0, r.jsx)(p.Z, {
                                skuId: null == B || null == (t = B.profileEffect) ? void 0 : t.skuId,
                                isHovering: Y,
                            }),
                    ],
                }),
            }),
        }),
    });
}
let G = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: l } = e,
        [a, s] = i.useState("interactive-text-default");
    return (0, r.jsx)("div", {
        className: k.footer,
        children: (0, r.jsx)(o.P3F, {
            onMouseEnter: () => s("interactive-text-hover"),
            onMouseLeave: () => s("interactive-text-default"),
            onClick: () => {
                t(),
                    (0, m.pQ)(
                        L(
                            {
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: n,
                            },
                            l,
                        ),
                    );
            },
            className: k.footerButton,
            children: (0, r.jsx)(o.Text, {
                color: a,
                variant: "text-sm/normal",
                children: M.intl.string(M.t["+Xp3hq"]),
            }),
        }),
    });
};
