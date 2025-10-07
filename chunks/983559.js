n.d(t, { Z: () => L }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(137317),
    a = n(793030),
    s = n(481060),
    o = n(410030),
    c = n(100527),
    d = n(906732),
    u = n(104505),
    p = n(680295),
    h = n(785717),
    f = n(221292),
    g = n(687158),
    m = n(612600),
    b = n(510659),
    y = n(892001),
    _ = n(899007),
    j = n(867176),
    O = n(451834),
    x = n(502762),
    v = n(952124),
    C = n(544989),
    I = n(481932),
    E = n(664794),
    S = n(4517),
    Z = n(350207),
    T = n(277117),
    P = n(52639),
    N = n(228168),
    R = n(671955),
    w = n(388032),
    A = n(231688);
function D(e) {
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
    let { user: n, currentUser: f, channel: w } = e,
        L = __OVERLAY__,
        k = (0, g.ZP)(n.id),
        U = (0, o.ZP)(),
        G = i.useRef(Date.now()),
        { analyticsLocations: H } = (0, d.ZP)(c.Z.USER_PROFILE_SIDEBAR),
        F = (0, h.ZB)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: w.id,
        }),
        B = i.useRef(null),
        { isHoveringOrFocusing: z, isHovering: V } = (0, u.Z)(B),
        W = (0, b.$m)(),
        Y = (0, s.q_F)({
            opacity: +(null != W.interactionType),
            config: { duration: 150 },
        }),
        q = (e) => {
            (0, y.openUserProfileModal)(
                D(
                    {
                        sourceAnalyticsLocations: H,
                        hideRestrictedProfile: !0,
                    },
                    F,
                    e,
                ),
            );
        },
        K = (0, m.Z)({ location: "UserProfileSidebar" }),
        Q = (null == k ? void 0 : k.widgets) != null && k.widgets.length > 0;
    return (0, r.jsx)(d.Gt, {
        value: H,
        children: (0, r.jsx)(h.Mt, {
            value: F,
            openedAt: G.current,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, r.jsx)(b.NJ, {
                value: W,
                children: (0, r.jsxs)(x.Z, {
                    ref: B,
                    user: n,
                    displayProfile: k,
                    themeType: R.l.SIDEBAR,
                    themeOverride: U,
                    children: [
                        null != W.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: Y,
                                className: A.backdrop,
                            }),
                        (0, r.jsxs)(a.u2D, {
                            children: [
                                (0, r.jsxs)(C.Z, {
                                    children: [
                                        (0, r.jsx)(I.Z, {
                                            user: n,
                                            themeType: R.l.SIDEBAR,
                                            shouldShowTooltip: null === W.interactionType,
                                        }),
                                        n.bot
                                            ? (0, r.jsx)(v.Z, { user: n })
                                            : (0, r.jsx)(E.Z, {
                                                  type: "banner",
                                                  user: n,
                                              }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: A.header,
                                    children: [
                                        (0, r.jsx)(j.Z, {
                                            user: n,
                                            displayProfile: k,
                                            themeType: R.l.SIDEBAR,
                                            animateOnHoverOrFocusOnly: !z,
                                            className: A.banner,
                                        }),
                                        (0, r.jsx)(O.Z, {
                                            userId: n.id,
                                            className: A.toast,
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            user: n,
                                            displayProfile: k,
                                            channelId: w.id,
                                            themeType: R.l.SIDEBAR,
                                            onOpenProfile: L ? void 0 : q,
                                        }),
                                        (0, r.jsx)(S.Z, {
                                            user: n,
                                            channelId: w.id,
                                            themeType: R.l.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(T.Z, {
                                    user: n,
                                    currentUser: f,
                                    displayProfile: k,
                                    channel: w,
                                    isHoveringOrFocusing: null == W.interactionType && z,
                                    onOpenProfile: L ? void 0 : q,
                                }),
                                K &&
                                    Q &&
                                    (0, r.jsx)("div", {
                                        className: A.widgetBreadcrumb,
                                        children: (0, r.jsx)(Z.Z, {
                                            widgets: k.widgets,
                                            onClick: () => {
                                                null == q || q({ section: N.oh.WIDGETS });
                                            },
                                        }),
                                    }),
                                (0, r.jsx)(P.Z, {
                                    user: n,
                                    channelId: w.id,
                                }),
                            ],
                        }),
                        !L &&
                            (0, r.jsx)(M, {
                                handleOpenProfile: q,
                                analyticsLocations: H,
                                context: F,
                            }),
                        (null == k ? void 0 : k.profileEffect) != null &&
                            (0, r.jsx)(p.Z, {
                                skuId: null == k || null == (t = k.profileEffect) ? void 0 : t.skuId,
                                isHovering: V,
                                urlQueryString: "dmView",
                            }),
                    ],
                }),
            }),
        }),
    });
}
let M = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: l } = e,
        [a, o] = i.useState("interactive-normal");
    return (0, r.jsx)("div", {
        className: A.footer,
        children: (0, r.jsx)(s.P3F, {
            onMouseEnter: () => o("interactive-hover"),
            onMouseLeave: () => o("interactive-normal"),
            onClick: () => {
                t(),
                    (0, f.pQ)(
                        D(
                            {
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: n,
                            },
                            l,
                        ),
                    );
            },
            className: A.footerButton,
            children: (0, r.jsx)(s.Text, {
                color: a,
                variant: "text-sm/normal",
                children: w.intl.string(w.t["+Xp3ho"]),
            }),
        }),
    });
};
