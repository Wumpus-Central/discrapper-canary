n.d(t, { Z: () => L }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(401393),
    a = n(793030),
    s = n(481060),
    o = n(727637),
    c = n(410030),
    d = n(100527),
    u = n(906732),
    p = n(680295),
    h = n(785717),
    f = n(221292),
    g = n(461133),
    m = n(687158),
    b = n(510659),
    y = n(892001),
    _ = n(899007),
    O = n(867176),
    j = n(451834),
    v = n(502762),
    x = n(952124),
    C = n(544989),
    I = n(481932),
    E = n(664794),
    S = n(4517),
    Z = n(252748),
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
        k = (0, m.ZP)(n.id),
        U = (0, c.ZP)(),
        G = i.useRef(Date.now()),
        { analyticsLocations: H } = (0, u.ZP)(d.Z.USER_PROFILE_SIDEBAR),
        F = (0, h.ZB)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: w.id,
        }),
        B = i.useRef(null),
        z = (0, o.Z)(B),
        V = (0, b.$m)(),
        W = (0, s.q_F)({
            opacity: +(null != V.interactionType),
            config: { duration: 150 },
        }),
        Y = (e) => {
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
        q = (0, g.P)({ location: "UserProfileSidebar" }),
        K = (null == k ? void 0 : k.widgets) != null && k.widgets.length > 0;
    return (0, r.jsx)(u.Gt, {
        value: H,
        children: (0, r.jsx)(h.Mt, {
            value: F,
            openedAt: G.current,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, r.jsx)(b.NJ, {
                value: V,
                children: (0, r.jsxs)(v.Z, {
                    ref: B,
                    user: n,
                    displayProfile: k,
                    themeType: R.l.SIDEBAR,
                    themeOverride: U,
                    children: [
                        null != V.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: W,
                                className: A.backdrop,
                            }),
                        (0, r.jsxs)(a.u2D, {
                            children: [
                                (0, r.jsxs)(C.Z, {
                                    children: [
                                        (0, r.jsx)(I.Z, {
                                            user: n,
                                            themeType: R.l.SIDEBAR,
                                            shouldShowTooltip: null === V.interactionType,
                                        }),
                                        n.bot
                                            ? (0, r.jsx)(x.Z, { user: n })
                                            : (0, r.jsx)(E.Z, {
                                                  type: "banner",
                                                  user: n,
                                              }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: A.header,
                                    children: [
                                        (0, r.jsx)(O.Z, {
                                            user: n,
                                            displayProfile: k,
                                            themeType: R.l.SIDEBAR,
                                            animateOnHover: !z,
                                            className: A.banner,
                                        }),
                                        (0, r.jsx)(j.Z, {
                                            userId: n.id,
                                            className: A.toast,
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            user: n,
                                            displayProfile: k,
                                            channelId: w.id,
                                            themeType: R.l.SIDEBAR,
                                            onOpenProfile: L ? void 0 : Y,
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
                                    isHovering: null == V.interactionType && z,
                                    onOpenProfile: L ? void 0 : Y,
                                }),
                                q &&
                                    K &&
                                    (0, r.jsx)("div", {
                                        className: A.widgetBreadcrumb,
                                        children: (0, r.jsx)(Z.Z, {
                                            widgets: k.gameWidgets,
                                            onClick: () => {
                                                null == Y || Y({ section: N.oh.WIDGETS });
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
                                handleOpenProfile: Y,
                                analyticsLocations: H,
                                context: F,
                            }),
                        (null == k ? void 0 : k.profileEffect) != null &&
                            (0, r.jsx)(p.Z, {
                                profileEffectId: null == k || null == (t = k.profileEffect) ? void 0 : t.id,
                                isHovering: z,
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
