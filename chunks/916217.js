t.d(n, { A: () => O });
var i = t(627968),
    s = t(64700),
    l = t(397927),
    r = t(793574),
    a = t(688810),
    o = t(351966),
    d = t(915089),
    c = t(713517),
    u = t(562153),
    A = t(183555),
    _ = t(950191),
    x = t(718019),
    p = t(31432),
    m = t(915614),
    I = t(389996),
    f = t(743987),
    g = t(900179),
    h = t(946356),
    b = t(810396),
    j = t(35241),
    C = t(587168),
    E = t(518477),
    N = t(652215),
    v = t(996988),
    T = t(985018),
    y = t(853293),
    L = t(47049),
    P = t(613761);
function O(e) {
    let {
            user: n,
            guildId: t,
            channelId: O,
            messageId: S,
            roleId: R,
            sessionId: M,
            transitionState: B,
            onClose: k,
            sourceAnalyticsLocations: D = [],
        } = e,
        G = t === N.ME ? void 0 : t,
        U = (0, _.Ay)(n.id, G),
        V = u.Ay.getName(G, O, n),
        F = (0, d.GV)(),
        { analyticsLocations: w } = (0, a.Ay)([...D, r.A.USER_PROFILE_MODAL]),
        H = (0, A.pb)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: M,
            guildId: G,
            channelId: O,
            messageId: S,
            roleId: R,
        }),
        z = s.useRef(null),
        W = (0, c.M)(z);
    return (0, i.jsx)(a.f5, {
        value: w,
        children: (0, i.jsx)(A.of, {
            value: H,
            isLoaded: U?.isLoaded,
            children: (0, i.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: B,
                className: y.zr,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, i.jsx)(l.Fmo, {
                        component: (0, i.jsx)(l.AC4, {
                            children: (0, i.jsx)(l.H, { id: F, children: T.intl.format(T.t.KRe1Fk, { name: V }) }),
                        }),
                        children: (0, i.jsxs)(h.A, {
                            user: n,
                            displayProfile: U,
                            themeType: v.d.MODAL,
                            ref: U?.profileEffect != null ? z : void 0,
                            children: [
                                (0, i.jsx)(C.A, { children: (0, i.jsx)(j.A, { user: n }) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(m.A, { user: n, displayProfile: U, themeType: v.d.MODAL }),
                                        (0, i.jsx)("div", {
                                            className: y.El,
                                            children: (0, i.jsx)(x.A, {
                                                user: n,
                                                displayProfile: U,
                                                guildId: G,
                                                channelId: O,
                                                themeType: v.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: y.rf,
                                    children: [
                                        (0, i.jsx)(b.A, {
                                            className: y.Xh,
                                            user: n,
                                            guildId: G,
                                            nickname: V,
                                            pronouns: U?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, i.jsx)(p.A, {
                                                displayProfile: U,
                                                themeType: v.d.MODAL,
                                                onClose: k,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: P.kL,
                                            children: [
                                                (0, i.jsx)(l.VQ0, {
                                                    className: P.$H,
                                                    type: "top",
                                                    selectedItem: E.RP.BOT_INFO,
                                                    onItemSelect: N.tEg,
                                                    children: (0, i.jsx)(
                                                        l.VQ0.Item,
                                                        {
                                                            className: P.YU,
                                                            id: E.RP.BOT_INFO,
                                                            "aria-label": T.intl.string(T.t.ZzAR2Y),
                                                            children: (0, i.jsx)(l.Text, {
                                                                variant: "text-sm/normal",
                                                                children: T.intl.string(T.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        E.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, i.jsxs)(l.IpV, {
                                                    fade: !0,
                                                    className: L.XG,
                                                    children: [
                                                        (0, i.jsx)(I.E, {
                                                            userId: n.id,
                                                            userBio: U?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, i.jsx)(g.A, {
                                                            heading: T.intl.string(T.t["A//N4k"]),
                                                            children: (0, i.jsx)(f.A, {
                                                                userId: n.id,
                                                                guildId: G,
                                                                tooltipDelay: E.In,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    U?.profileEffect != null && (0, i.jsx)(o.A, { skuId: U?.profileEffect?.skuId, isHovering: W }),
                ],
            }),
        }),
    });
}
