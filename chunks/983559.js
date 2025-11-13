n.d(t, { Z: () => H }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(509442),
    a = n(793030),
    s = n(442837),
    o = n(481060),
    c = n(410030),
    d = n(100527),
    u = n(906732),
    p = n(104505),
    h = n(680295),
    f = n(602733),
    g = n(785717),
    m = n(221292),
    b = n(621853),
    _ = n(787309),
    y = n(687158),
    x = n(612600),
    O = n(510659),
    j = n(892001),
    v = n(899007),
    C = n(867176),
    I = n(451834),
    S = n(502762),
    E = n(952124),
    Z = n(544989),
    P = n(481932),
    T = n(664794),
    N = n(4517),
    R = n(350207),
    w = n(277117),
    A = n(52639),
    D = n(874139),
    L = n(228168),
    M = n(671955),
    k = n(388032),
    U = n(231688);
function G(e) {
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
function H(e) {
    var t;
    let { user: n, currentUser: m, channel: k } = e,
        H = __OVERLAY__,
        B = (0, y.ZP)(n.id),
        V = (0, c.ZP)(),
        z = i.useRef(Date.now()),
        { analyticsLocations: W } = (0, u.ZP)(d.Z.USER_PROFILE_SIDEBAR),
        Y = (0, g.ZB)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: k.id,
        }),
        q = i.useRef(null),
        { isHoveringOrFocusing: K, isHovering: Q } = (0, p.Z)(q),
        X = (0, O.$m)(),
        J = (0, o.q_F)({
            opacity: +(null != X.interactionType),
            config: { duration: 150 },
        }),
        $ = (e) => {
            (0, j.openUserProfileModal)(
                G(
                    {
                        sourceAnalyticsLocations: W,
                        hideRestrictedProfile: !0,
                    },
                    Y,
                    e,
                ),
            );
        },
        ee = (0, x.Z)({ location: "UserProfileSidebar" }),
        et = (null == B ? void 0 : B.widgets) != null && B.widgets.length > 0,
        en = (0, _.g)({ location: "UserProfileSidebar" }),
        { defaultWishlistId: er } = (0, s.cj)([b.Z], () => ({ defaultWishlistId: b.Z.getFirstWishlistId(n.id) })),
        { wishlist: ei } = (0, f.kZ)(er, n.id),
        el = en && null != ei && ei.items.length > 0;
    return (0, r.jsx)(u.Gt, {
        value: W,
        children: (0, r.jsx)(g.Mt, {
            value: Y,
            openedAt: z.current,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsx)(O.NJ, {
                value: X,
                children: (0, r.jsxs)(S.Z, {
                    ref: q,
                    user: n,
                    displayProfile: B,
                    themeType: M.l.SIDEBAR,
                    themeOverride: V,
                    children: [
                        null != X.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: J,
                                className: U.backdrop,
                            }),
                        (0, r.jsxs)(a.u2D, {
                            children: [
                                (0, r.jsxs)(Z.Z, {
                                    children: [
                                        (0, r.jsx)(P.Z, {
                                            user: n,
                                            themeType: M.l.SIDEBAR,
                                        }),
                                        n.bot ? (0, r.jsx)(E.Z, { user: n }) : (0, r.jsx)(T.Cn, { user: n }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: U.header,
                                    children: [
                                        (0, r.jsx)(C.Z, {
                                            user: n,
                                            displayProfile: B,
                                            themeType: M.l.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !K,
                                            className: U.banner,
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            userId: n.id,
                                            className: U.toast,
                                        }),
                                        (0, r.jsx)(v.Z, {
                                            user: n,
                                            displayProfile: B,
                                            channelId: k.id,
                                            themeType: M.l.SIDEBAR,
                                            onOpenProfile: H ? void 0 : $,
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            user: n,
                                            channelId: k.id,
                                            themeType: M.l.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(w.Z, {
                                    user: n,
                                    currentUser: m,
                                    displayProfile: B,
                                    channel: k,
                                    isHoveringOrFocusing: null == X.interactionType && K,
                                    onOpenProfile: H ? void 0 : $,
                                }),
                                ee &&
                                    et &&
                                    (0, r.jsx)("div", {
                                        className: U.widgetBreadcrumb,
                                        children: (0, r.jsx)(R.Z, {
                                            widgets: B.widgets,
                                            onClick: () => {
                                                null == $ || $({ section: L.oh.WIDGETS });
                                            },
                                        }),
                                    }),
                                el &&
                                    (0, r.jsx)("div", {
                                        className: U.wishlistBreadcrumb,
                                        children: (0, r.jsx)(D.Z, {
                                            profileOwner: n,
                                            wishlistItems: ei.items,
                                            wishlistId: er,
                                            onClick: () => {
                                                null == $ || $({ section: L.oh.WISHLIST });
                                            },
                                        }),
                                    }),
                                (0, r.jsx)(A.Z, {
                                    user: n,
                                    channelId: k.id,
                                }),
                            ],
                        }),
                        !H &&
                            (0, r.jsx)(F, {
                                handleOpenProfile: $,
                                analyticsLocations: W,
                                context: Y,
                            }),
                        (null == B ? void 0 : B.profileEffect) != null &&
                            (0, r.jsx)(h.Z, {
                                skuId: null == B || null == (t = B.profileEffect) ? void 0 : t.skuId,
                                isHovering: Q,
                                urlQueryString: "dmView",
                            }),
                    ],
                }),
            }),
        }),
    });
}
let F = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: l } = e,
        [a, s] = i.useState("interactive-normal");
    return (0, r.jsx)("div", {
        className: U.footer,
        children: (0, r.jsx)(o.P3F, {
            onMouseEnter: () => s("interactive-hover"),
            onMouseLeave: () => s("interactive-normal"),
            onClick: () => {
                t(),
                    (0, m.pQ)(
                        G(
                            {
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: n,
                            },
                            l,
                        ),
                    );
            },
            className: U.footerButton,
            children: (0, r.jsx)(o.Text, {
                color: a,
                variant: "text-sm/normal",
                children: k.intl.string(k.t["+Xp3hq"]),
            }),
        }),
    });
};
