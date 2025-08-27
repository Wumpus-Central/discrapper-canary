n.d(t, { Z: () => D }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(202841),
    a = n(597312),
    o = n(481060),
    s = n(727637),
    c = n(410030),
    u = n(100527),
    d = n(906732),
    p = n(680295),
    h = n(785717),
    f = n(221292),
    m = n(461133),
    g = n(687158),
    b = n(510659),
    y = n(892001),
    _ = n(899007),
    C = n(867176),
    v = n(451834),
    x = n(502762),
    O = n(952124),
    j = n(544989),
    E = n(481932),
    S = n(664794),
    I = n(4517),
    P = n(252748),
    Z = n(277117),
    T = n(52639),
    N = n(228168),
    A = n(671955),
    w = n(388032),
    R = n(231688);
function M(e) {
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
function D(e) {
    var t;
    let { user: n, currentUser: f, channel: w } = e,
        D = __OVERLAY__,
        k = (0, g.ZP)(n.id),
        U = (0, c.ZP)(),
        B = i.useRef(Date.now()),
        { analyticsLocations: F } = (0, d.ZP)(u.Z.USER_PROFILE_SIDEBAR),
        H = (0, h.ZB)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: w.id,
        }),
        G = i.useRef(null),
        V = (0, s.Z)(G),
        z = (0, b.$m)(),
        W = (0, o.q_F)({
            opacity: +(null != z.interactionType),
            config: { duration: 150 },
        }),
        q = (e) => {
            (0, y.openUserProfileModal)(
                M(
                    {
                        sourceAnalyticsLocations: F,
                        hideRestrictedProfile: !0,
                    },
                    H,
                    e,
                ),
            );
        },
        Y = (0, m.P)({ location: "UserProfileSidebar" }),
        K = (null == k ? void 0 : k.widgets) != null && k.widgets.length > 0;
    return (0, r.jsx)(d.Gt, {
        value: F,
        children: (0, r.jsx)(h.Mt, {
            value: H,
            openedAt: B.current,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, r.jsx)(b.NJ, {
                value: z,
                children: (0, r.jsxs)(x.Z, {
                    ref: G,
                    user: n,
                    displayProfile: k,
                    themeType: A.l.SIDEBAR,
                    themeOverride: U,
                    children: [
                        null != z.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: W,
                                className: R.backdrop,
                            }),
                        (0, r.jsxs)(a.u2, {
                            children: [
                                (0, r.jsxs)(j.Z, {
                                    children: [
                                        (0, r.jsx)(E.Z, {
                                            user: n,
                                            themeType: A.l.SIDEBAR,
                                            shouldShowTooltip: null === z.interactionType,
                                        }),
                                        n.bot
                                            ? (0, r.jsx)(O.Z, { user: n })
                                            : (0, r.jsx)(S.Z, {
                                                  type: "banner",
                                                  user: n,
                                              }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: R.header,
                                    children: [
                                        (0, r.jsx)(C.Z, {
                                            user: n,
                                            displayProfile: k,
                                            themeType: A.l.SIDEBAR,
                                            animateOnHover: !V,
                                            className: R.banner,
                                        }),
                                        (0, r.jsx)(v.Z, {
                                            userId: n.id,
                                            className: R.toast,
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            user: n,
                                            displayProfile: k,
                                            channelId: w.id,
                                            themeType: A.l.SIDEBAR,
                                            onOpenProfile: D ? void 0 : q,
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            user: n,
                                            channelId: w.id,
                                            themeType: A.l.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(Z.Z, {
                                    user: n,
                                    currentUser: f,
                                    displayProfile: k,
                                    channel: w,
                                    isHovering: null == z.interactionType && V,
                                    onOpenProfile: D ? void 0 : q,
                                }),
                                Y &&
                                    K &&
                                    (0, r.jsx)("div", {
                                        className: R.widgetBreadcrumb,
                                        children: (0, r.jsx)(P.Z, {
                                            widgets: k.widgets,
                                            onClick: () => {
                                                null == q || q({ section: N.oh.WIDGETS });
                                            },
                                        }),
                                    }),
                                (0, r.jsx)(T.Z, {
                                    user: n,
                                    channelId: w.id,
                                }),
                            ],
                        }),
                        !D &&
                            (0, r.jsx)(L, {
                                handleOpenProfile: q,
                                analyticsLocations: F,
                                context: H,
                            }),
                        (null == k ? void 0 : k.profileEffect) != null &&
                            (0, r.jsx)(p.Z, {
                                profileEffectId: null == k || null == (t = k.profileEffect) ? void 0 : t.id,
                                isHovering: V,
                                urlQueryString: "dmView",
                            }),
                    ],
                }),
            }),
        }),
    });
}
let L = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: l } = e,
        [a, s] = i.useState("interactive-normal");
    return (0, r.jsx)("div", {
        className: R.footer,
        children: (0, r.jsx)(o.P3F, {
            onMouseEnter: () => s("interactive-hover"),
            onMouseLeave: () => s("interactive-normal"),
            onClick: () => {
                t(),
                    (0, f.pQ)(
                        M(
                            {
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: n,
                            },
                            l,
                        ),
                    );
            },
            className: R.footerButton,
            children: (0, r.jsx)(o.Text, {
                color: a,
                variant: "text-sm/normal",
                children: w.intl.string(w.t["+Xp3ho"]),
            }),
        }),
    });
};
