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
    _ = n(113557),
    y = n(867176),
    C = n(451834),
    x = n(502762),
    v = n(952124),
    O = n(544989),
    j = n(481932),
    E = n(664794),
    S = n(4517),
    I = n(277117),
    P = n(52639),
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
    var t;
    let { user: n, currentUser: f, channel: T } = e,
        w = __OVERLAY__,
        M = (0, m.ZP)(n.id),
        D = (0, c.ZP)(),
        L = i.useRef(Date.now()),
        { analyticsLocations: k } = (0, d.ZP)(u.Z.USER_PROFILE_SIDEBAR),
        U = (0, h.ZB)({
            layout: "SIDEBAR",
            userId: n.id,
            channelId: T.id,
        }),
        B = i.useRef(null),
        F = (0, s.Z)(B),
        G = (0, g.$m)(),
        H = (0, o.q_F)({
            opacity: +(null != G.interactionType),
            config: { duration: 150 },
        }),
        V = (e) => {
            (0, b.openUserProfileModal)(
                A(
                    {
                        sourceAnalyticsLocations: k,
                        hideRestrictedProfile: !0,
                    },
                    U,
                    e,
                ),
            );
        };
    return (0, r.jsx)(d.Gt, {
        value: k,
        children: (0, r.jsx)(h.Mt, {
            value: U,
            openedAt: L.current,
            fetchStartedAt: null == M ? void 0 : M.fetchStartedAt,
            fetchEndedAt: null == M ? void 0 : M.fetchEndedAt,
            isLoaded: null == M ? void 0 : M.isLoaded,
            children: (0, r.jsx)(g.NJ, {
                value: G,
                children: (0, r.jsxs)(x.Z, {
                    ref: B,
                    user: n,
                    displayProfile: M,
                    themeType: Z.l.SIDEBAR,
                    themeOverride: D,
                    children: [
                        null != G.interactionType &&
                            (0, r.jsx)(l.animated.div, {
                                style: H,
                                className: N.backdrop,
                            }),
                        (0, r.jsxs)(a.u2, {
                            children: [
                                (0, r.jsxs)(O.Z, {
                                    children: [
                                        (0, r.jsx)(j.Z, {
                                            user: n,
                                            themeType: Z.l.SIDEBAR,
                                            shouldShowTooltip: null === G.interactionType,
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
                                    className: N.header,
                                    children: [
                                        (0, r.jsx)(y.Z, {
                                            user: n,
                                            displayProfile: M,
                                            themeType: Z.l.SIDEBAR,
                                            animateOnHover: !F,
                                            className: N.banner,
                                        }),
                                        (0, r.jsx)(C.Z, {
                                            userId: n.id,
                                            className: N.toast,
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            location: "UserProfileSidebar",
                                            user: n,
                                            displayProfile: M,
                                            channelId: T.id,
                                            themeType: Z.l.SIDEBAR,
                                            onOpenProfile: w ? void 0 : V,
                                        }),
                                        (0, r.jsx)(S.Z, {
                                            location: "UserProfileSidebar",
                                            user: n,
                                            channelId: T.id,
                                            themeType: Z.l.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(I.Z, {
                                    user: n,
                                    currentUser: f,
                                    displayProfile: M,
                                    channel: T,
                                    isHovering: null == G.interactionType && F,
                                    onOpenProfile: w ? void 0 : V,
                                }),
                                (0, r.jsx)(P.Z, {
                                    user: n,
                                    channelId: T.id,
                                }),
                            ],
                        }),
                        !w &&
                            (0, r.jsx)(R, {
                                handleOpenProfile: V,
                                analyticsLocations: k,
                                context: U,
                            }),
                        (null == M ? void 0 : M.profileEffect) != null &&
                            (0, r.jsx)(p.Z, {
                                profileEffectId: null == M || null == (t = M.profileEffect) ? void 0 : t.id,
                                isHovering: F,
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
