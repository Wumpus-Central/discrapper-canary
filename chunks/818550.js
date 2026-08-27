d.r(s), d.d(s, { default: () => k });
var i = d(477900),
    t = d(582128),
    a = d(17928),
    l = d(305866),
    r = d(297264),
    n = d(834730),
    c = d(331322),
    h = d(793574),
    u = d(688810),
    O = d(397562),
    A = d(994500),
    o = d(562153),
    f = d(183555),
    E = d(47675),
    P = d(999291),
    x = d(249790),
    j = d(946356),
    I = d(254828),
    _ = d(783123),
    m = d(518477),
    p = d(996988),
    N = d(375708),
    L = d(483558);
function k(e) {
    let {
            user: s,
            guildId: d,
            setPopoutRef: k,
            channelId: v,
            messageId: R,
            roleId: b,
            openedAt: g,
            onHide: D,
            newAnalyticsLocations: C = [],
            disableAutoFocus: T = !1,
            onClickContainer: y,
        } = e,
        F = (0, a.bG)([A.A], () => A.A.isBlocked(s.id)),
        { analyticsLocations: W } = (0, u.Ay)([...C, F ? h.A.BLOCKED_PROFILE_POPOUT : h.A.IGNORED_PROFILE_POPOUT]),
        B = (0, f.pb)({ layout: "POPOUT", userId: s.id, guildId: d, channelId: v, messageId: R, roleId: b }),
        G = t.useRef(null),
        U = (0, P.Ay)(s.id, d);
    (0, O.A)(W, U, m.R7.POPOUT),
        t.useEffect(() => {
            k?.(G?.current);
        }, [G, k]);
    let S = F ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        V = T ? "div" : l.l;
    return (0, i.jsx)(u.f5, {
        value: W,
        children: (0, i.jsx)(f.of, {
            value: B,
            openedAt: g,
            fetchStartedAt: U?.fetchStartedAt,
            fetchEndedAt: U?.fetchEndedAt,
            isLoaded: U?.isLoaded,
            children: (0, i.jsx)(V, {
                ref: G,
                "aria-label": s.username,
                onClick: y,
                children: (0, i.jsx)(j.A, {
                    user: s,
                    displayProfile: U,
                    themeType: p.d.POPOUT,
                    children: (0, i.jsxs)("div", {
                        className: L.kL,
                        children: [
                            (0, i.jsx)("img", {
                                alt: "",
                                src: "/assets/d720df17e0798bd9.svg",
                                className: L.VH,
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: L.rf,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: L.N1,
                                        children: [
                                            (0, i.jsx)(x.A, { user: s, guildId: d }),
                                            (0, i.jsx)(r.D, {
                                                variant: "heading-lg/bold",
                                                children: N.intl.string(N.t.b33pLD),
                                            }),
                                            (0, i.jsx)(n.E, {
                                                variant: "text-sm/medium",
                                                children: N.intl.format(F ? N.t["8F+WNz"] : N.t["/cZp5s"], {
                                                    username: o.Ay.getName(d, v, s),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(c.B, {
                                        align: "center",
                                        children: [
                                            (0, i.jsx)(_.A, {
                                                isBlocked: F,
                                                onClick: () => {
                                                    D(), (0, E.Wn)({ action: S, analyticsLocations: W, ...B });
                                                },
                                            }),
                                            (0, i.jsx)(I.A, {
                                                userId: s.id,
                                                onClick: () => {
                                                    D(),
                                                        (0, E.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: W,
                                                            ...B,
                                                        });
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
