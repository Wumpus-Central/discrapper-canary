d.r(s), d.d(s, { default: () => N });
var i = d(627968),
    t = d(64700),
    a = d(17928),
    l = d(305866),
    r = d(534514),
    n = d(834730),
    c = d(331322),
    h = d(793574),
    u = d(688810),
    O = d(994500),
    A = d(562153),
    o = d(183555),
    f = d(47675),
    E = d(999291),
    x = d(249790),
    j = d(946356),
    I = d(254828),
    P = d(783123),
    _ = d(996988),
    m = d(375708),
    p = d(706171);
function N(e) {
    let {
            user: s,
            guildId: d,
            setPopoutRef: N,
            channelId: L,
            messageId: k,
            roleId: v,
            openedAt: R,
            onHide: b,
            newAnalyticsLocations: g = [],
            disableAutoFocus: D = !1,
            onClickContainer: C,
        } = e,
        y = (0, a.bG)([O.A], () => O.A.isBlocked(s.id)),
        { analyticsLocations: F } = (0, u.Ay)([...g, y ? h.A.BLOCKED_PROFILE_POPOUT : h.A.IGNORED_PROFILE_POPOUT]),
        T = (0, o.pb)({ layout: "POPOUT", userId: s.id, guildId: d, channelId: L, messageId: k, roleId: v }),
        W = t.useRef(null),
        B = (0, E.Ay)(s.id, d);
    t.useEffect(() => {
        N?.(W?.current);
    }, [W, N]);
    let G = y ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        U = D ? "div" : l.l;
    return (0, i.jsx)(u.f5, {
        value: F,
        children: (0, i.jsx)(o.of, {
            value: T,
            openedAt: R,
            fetchStartedAt: B?.fetchStartedAt,
            fetchEndedAt: B?.fetchEndedAt,
            isLoaded: B?.isLoaded,
            children: (0, i.jsx)(U, {
                ref: W,
                "aria-label": s.username,
                onClick: C,
                children: (0, i.jsx)(j.A, {
                    user: s,
                    displayProfile: B,
                    themeType: _.d.POPOUT,
                    children: (0, i.jsxs)("div", {
                        className: p.kL,
                        children: [
                            (0, i.jsx)("img", {
                                alt: "",
                                src: "/assets/d720df17e0798bd9.svg",
                                className: p.VH,
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: p.rf,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: p.N1,
                                        children: [
                                            (0, i.jsx)(x.A, { user: s, guildId: d }),
                                            (0, i.jsx)(r.D, {
                                                variant: "heading-lg/bold",
                                                children: m.intl.string(m.t.b33pLD),
                                            }),
                                            (0, i.jsx)(n.E, {
                                                variant: "text-sm/medium",
                                                children: m.intl.format(y ? m.t["8F+WNz"] : m.t["/cZp5s"], {
                                                    username: A.Ay.getName(d, L, s),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(c.B, {
                                        align: "center",
                                        children: [
                                            (0, i.jsx)(P.A, {
                                                isBlocked: y,
                                                onClick: () => {
                                                    b(), (0, f.Wn)({ action: G, analyticsLocations: F, ...T });
                                                },
                                            }),
                                            (0, i.jsx)(I.A, {
                                                userId: s.id,
                                                onClick: () => {
                                                    b(),
                                                        (0, f.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: F,
                                                            ...T,
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
