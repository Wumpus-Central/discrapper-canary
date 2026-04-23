s.r(t), s.d(t, { default: () => L });
var i = s(627968),
    a = s(64700),
    r = s(17928),
    d = s(305866),
    n = s(534514),
    l = s(834730),
    c = s(331322),
    o = s(793574),
    u = s(688810),
    _ = s(994500),
    h = s(562153),
    m = s(183555),
    x = s(47675),
    A = s(999291),
    v = s(249790),
    I = s(946356),
    E = s(254828),
    f = s(783123),
    O = s(996988),
    j = s(985018),
    p = s(706171);
function L(e) {
    let {
            user: t,
            guildId: s,
            setPopoutRef: L,
            channelId: N,
            messageId: g,
            roleId: b,
            openedAt: R,
            onHide: k,
            newAnalyticsLocations: P = [],
            disableAutoFocus: C = !1,
            onClickContainer: y,
        } = e,
        D = (0, r.bG)([_.A], () => _.A.isBlocked(t.id)),
        { analyticsLocations: F } = (0, u.Ay)([...P, D ? o.A.BLOCKED_PROFILE_POPOUT : o.A.IGNORED_PROFILE_POPOUT]),
        w = (0, m.pb)({ layout: "POPOUT", userId: t.id, guildId: s, channelId: N, messageId: g, roleId: b }),
        G = a.useRef(null),
        T = (0, A.Ay)(t.id, s);
    a.useEffect(() => {
        L?.(G?.current);
    }, [G, L]);
    let W = D ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        B = C ? "div" : d.l;
    return (0, i.jsx)(u.f5, {
        value: F,
        children: (0, i.jsx)(m.of, {
            value: w,
            openedAt: R,
            fetchStartedAt: T?.fetchStartedAt,
            fetchEndedAt: T?.fetchEndedAt,
            isLoaded: T?.isLoaded,
            children: (0, i.jsx)(B, {
                ref: G,
                "aria-label": t.username,
                onClick: y,
                children: (0, i.jsx)(I.A, {
                    user: t,
                    displayProfile: T,
                    themeType: O.d.POPOUT,
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
                                            (0, i.jsx)(v.A, { user: t, guildId: s }),
                                            (0, i.jsx)(n.D, {
                                                variant: "heading-lg/bold",
                                                children: j.intl.string(j.t.b33pLD),
                                            }),
                                            (0, i.jsx)(l.E, {
                                                variant: "text-sm/medium",
                                                children: j.intl.format(D ? j.t["8F+WNz"] : j.t["/cZp5s"], {
                                                    username: h.Ay.getName(s, N, t),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(c.B, {
                                        align: "center",
                                        children: [
                                            (0, i.jsx)(f.A, {
                                                isBlocked: D,
                                                onClick: () => {
                                                    k(), (0, x.Wn)({ action: W, analyticsLocations: F, ...w });
                                                },
                                            }),
                                            (0, i.jsx)(E.A, {
                                                userId: t.id,
                                                onClick: () => {
                                                    k(),
                                                        (0, x.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: F,
                                                            ...w,
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
