n.d(t, { Z: () => M }), n(388685);
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
    m = n(687158),
    g = n(510659),
    b = n(892001),
    _ = n(899007),
    y = n(867176),
    C = n(451834),
    x = n(502762),
    v = n(952124),
    O = n(544989),
    j = n(481932),
    E = n(664794),
    S = n(4517),
    I = n(252748),
    P = n(277117),
    Z = n(52639),
    T = n(228168),
    N = n(671955),
    A = n(388032),
    w = n(231688);
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
function M(e) {
    var t;
    let { user: n, currentUser: f, channel: A } = e,
        M = __OVERLAY__,
        L = (0, m.ZP)(n.id),
        k = (0, c.ZP)(),
        U = i.useRef(Date.now()),
        { analyticsLocations: B } = (0, d.ZP)(u.Z.USER_PROFILE_SIDEBAR),
        F = (0, h.ZB)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: A.id,
        }),
        G = i.useRef(null),
        H = (0, s.Z)(G),
        V = (0, g.$m)(),
        z = (0, o.q_F)({
            opacity: +(null != V.interactionType),
            config: { duration: 150 },
        }),
        W = (e) => {
            (0, b.openUserProfileModal)(
                R(
                    {
                        sourceAnalyticsLocations: B,
                        hideRestrictedProfile: !0,
                    },
                    F,
                    e,
                ),
            );
        },
        q = (null == L ? void 0 : L.widgets) != null && L.widgets.length > 0;
    return (0, r.jsx)(d.Gt, {
        value: B,
        children: (0, r.jsx)(h.Mt, {
            value: F,
            openedAt: U.current,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, r.jsx)(g.NJ, {
                value: V,
                children: (0, r.jsxs)(x.Z, {
                    ref: G,
                    user: n,
                    displayProfile: L,
                    themeType: N.l.SIDEBAR,
                    themeOverride: k,
                    children: [
                        null != V.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: z,
                                className: w.backdrop,
                            }),
                        (0, r.jsxs)(a.u2, {
                            children: [
                                (0, r.jsxs)(O.Z, {
                                    children: [
                                        (0, r.jsx)(j.Z, {
                                            user: n,
                                            themeType: N.l.SIDEBAR,
                                            shouldShowTooltip: null === V.interactionType,
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
                                    className: w.header,
                                    children: [
                                        (0, r.jsx)(y.Z, {
                                            user: n,
                                            displayProfile: L,
                                            themeType: N.l.SIDEBAR,
                                            animateOnHover: !H,
                                            className: w.banner,
                                        }),
                                        (0, r.jsx)(C.Z, {
                                            userId: n.id,
                                            className: w.toast,
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            user: n,
                                            displayProfile: L,
                                            channelId: A.id,
                                            themeType: N.l.SIDEBAR,
                                            onOpenProfile: M ? void 0 : W,
                                        }),
                                        (0, r.jsx)(S.Z, {
                                            user: n,
                                            channelId: A.id,
                                            themeType: N.l.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(P.Z, {
                                    user: n,
                                    currentUser: f,
                                    displayProfile: L,
                                    channel: A,
                                    isHovering: null == V.interactionType && H,
                                    onOpenProfile: M ? void 0 : W,
                                }),
                                q &&
                                    (0, r.jsx)("div", {
                                        className: w.widgetBreadcrumb,
                                        children: (0, r.jsx)(I.Z, {
                                            widgets: L.widgets,
                                            onClick: () => {
                                                null == W || W({ section: T.oh.WIDGETS });
                                            },
                                        }),
                                    }),
                                (0, r.jsx)(Z.Z, {
                                    user: n,
                                    channelId: A.id,
                                }),
                            ],
                        }),
                        !M &&
                            (0, r.jsx)(D, {
                                handleOpenProfile: W,
                                analyticsLocations: B,
                                context: F,
                            }),
                        (null == L ? void 0 : L.profileEffect) != null &&
                            (0, r.jsx)(p.Z, {
                                profileEffectId: null == L || null == (t = L.profileEffect) ? void 0 : t.id,
                                isHovering: H,
                                urlQueryString: "dmView",
                            }),
                    ],
                }),
            }),
        }),
    });
}
let D = (e) => {
    let { handleOpenProfile: t, analyticsLocations: n, context: l } = e,
        [a, s] = i.useState("interactive-normal");
    return (0, r.jsx)("div", {
        className: w.footer,
        children: (0, r.jsx)(o.P3F, {
            onMouseEnter: () => s("interactive-hover"),
            onMouseLeave: () => s("interactive-normal"),
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
            className: w.footerButton,
            children: (0, r.jsx)(o.Text, {
                color: a,
                variant: "text-sm/normal",
                children: A.intl.string(A.t["+Xp3ho"]),
            }),
        }),
    });
};
