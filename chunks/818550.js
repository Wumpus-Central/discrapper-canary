d.r(s), d.d(s, { default: () => v });
var i = d(627968),
    r = d(64700),
    t = d(17928),
    a = d(305866),
    l = d(534514),
    n = d(834730),
    c = d(331322),
    u = d(793574),
    h = d(688810),
    o = d(994500),
    O = d(562153),
    f = d(183555),
    A = d(47675),
    E = d(628779),
    P = d(999291),
    p = d(249790),
    x = d(946356),
    j = d(254828),
    m = d(783123),
    I = d(996988),
    _ = d(375708),
    N = d(706171);
function v(e) {
    let {
            user: s,
            guildId: d,
            setPopoutRef: v,
            channelId: L,
            messageId: k,
            roleId: R,
            openedAt: b,
            onHide: g,
            newAnalyticsLocations: D = [],
            disableAutoFocus: C = !1,
            onClickContainer: y,
        } = e,
        F = (0, t.bG)([o.A], () => o.A.isBlocked(s.id)),
        { analyticsLocations: T } = (0, h.Ay)([...D, F ? u.A.BLOCKED_PROFILE_POPOUT : u.A.IGNORED_PROFILE_POPOUT]),
        W = (0, f.pb)({ layout: "POPOUT", userId: s.id, guildId: d, channelId: L, messageId: k, roleId: R }),
        B = r.useRef(null),
        G = (0, P.Ay)(s.id, d),
        U = (0, E.$)("RestrictedUserProfilePopout");
    r.useEffect(() => {
        v?.(B?.current);
    }, [B, v]);
    let S = F ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        V = C ? "div" : a.l;
    return (0, i.jsx)(h.f5, {
        value: T,
        children: (0, i.jsx)(f.of, {
            value: W,
            openedAt: b,
            fetchStartedAt: G?.fetchStartedAt,
            fetchEndedAt: G?.fetchEndedAt,
            isLoaded: G?.isLoaded,
            children: (0, i.jsx)(V, {
                ref: B,
                "aria-label": s.username,
                onClick: y,
                children: (0, i.jsx)(x.A, {
                    user: s,
                    displayProfile: G,
                    themeType: I.d.POPOUT,
                    className: U ? "user-profile-sidebar-redesign" : void 0,
                    children: (0, i.jsxs)("div", {
                        className: N.kL,
                        children: [
                            (0, i.jsx)("img", {
                                alt: "",
                                src: "/assets/d720df17e0798bd9.svg",
                                className: N.VH,
                                "aria-hidden": !0,
                            }),
                            (0, i.jsxs)("div", {
                                className: N.rf,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: N.N1,
                                        children: [
                                            (0, i.jsx)(p.A, { user: s, guildId: d }),
                                            (0, i.jsx)(l.D, {
                                                variant: "heading-lg/bold",
                                                children: _.intl.string(_.t.b33pLD),
                                            }),
                                            (0, i.jsx)(n.E, {
                                                variant: "text-sm/medium",
                                                children: _.intl.format(F ? _.t["8F+WNz"] : _.t["/cZp5s"], {
                                                    username: O.Ay.getName(d, L, s),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(c.B, {
                                        align: "center",
                                        children: [
                                            (0, i.jsx)(m.A, {
                                                isBlocked: F,
                                                onClick: () => {
                                                    g(), (0, A.Wn)({ action: S, analyticsLocations: T, ...W });
                                                },
                                            }),
                                            (0, i.jsx)(j.A, {
                                                userId: s.id,
                                                onClick: () => {
                                                    g(),
                                                        (0, A.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: T,
                                                            ...W,
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
