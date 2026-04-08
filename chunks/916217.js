t.d(n, { A: () => L });
var i = t(627968),
    a = t(64700),
    l = t(397927),
    r = t(793574),
    s = t(688810),
    d = t(351966),
    o = t(915089),
    c = t(713517),
    u = t(562153),
    _ = t(183555),
    p = t(950191),
    A = t(718019),
    g = t(31432),
    I = t(915614),
    m = t(389996),
    f = t(743987),
    x = t(900179),
    h = t(946356),
    v = t(810396),
    E = t(35241),
    b = t(587168),
    y = t(518477),
    j = t(652215),
    T = t(996988),
    N = t(985018),
    S = t(853293),
    C = t(47049),
    R = t(613761);
function L(e) {
    let {
            user: n,
            guildId: t,
            channelId: L,
            messageId: P,
            roleId: O,
            sessionId: D,
            transitionState: U,
            onClose: k,
            sourceAnalyticsLocations: B = [],
        } = e,
        G = t === j.ME ? void 0 : t,
        M = (0, p.Ay)(n.id, G),
        F = u.Ay.getName(G, L, n),
        V = (0, o.GV)(),
        { analyticsLocations: w } = (0, s.Ay)([...B, r.A.USER_PROFILE_MODAL]),
        H = (0, _.pb)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: D,
            guildId: G,
            channelId: L,
            messageId: P,
            roleId: O,
        }),
        W = a.useRef(null),
        z = (0, c.M)(W);
    return (0, i.jsx)(s.f5, {
        value: w,
        children: (0, i.jsx)(_.of, {
            value: H,
            isLoaded: M?.isLoaded,
            children: (0, i.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: U,
                className: S.zr,
                hideShadow: !0,
                "aria-labelledby": V,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, i.jsx)(l.Fmo, {
                        component: (0, i.jsx)(l.AC4, {
                            children: (0, i.jsx)(l.H, { id: V, children: N.intl.format(N.t.KRe1Fk, { name: F }) }),
                        }),
                        children: (0, i.jsxs)(h.A, {
                            user: n,
                            displayProfile: M,
                            themeType: T.d.MODAL,
                            ref: M?.profileEffect != null ? W : void 0,
                            children: [
                                (0, i.jsx)(b.A, { children: (0, i.jsx)(E.A, { user: n }) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(I.A, { user: n, displayProfile: M, themeType: T.d.MODAL }),
                                        (0, i.jsx)("div", {
                                            className: S.El,
                                            children: (0, i.jsx)(A.A, {
                                                user: n,
                                                displayProfile: M,
                                                guildId: G,
                                                channelId: L,
                                                themeType: T.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: S.rf,
                                    children: [
                                        (0, i.jsx)(v.A, {
                                            className: S.Xh,
                                            user: n,
                                            guildId: G,
                                            nickname: F,
                                            pronouns: M?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, i.jsx)(g.A, {
                                                displayProfile: M,
                                                themeType: T.d.MODAL,
                                                onClose: k,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: R.kL,
                                            children: [
                                                (0, i.jsx)(l.VQ0, {
                                                    className: R.$H,
                                                    type: "top",
                                                    selectedItem: y.RP.BOT_INFO,
                                                    onItemSelect: j.tEg,
                                                    children: (0, i.jsx)(
                                                        l.VQ0.Item,
                                                        {
                                                            className: R.YU,
                                                            id: y.RP.BOT_INFO,
                                                            "aria-label": N.intl.string(N.t.ZzAR2Y),
                                                            children: (0, i.jsx)(l.Text, {
                                                                variant: "text-sm/normal",
                                                                children: N.intl.string(N.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        y.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, i.jsxs)(l.IpV, {
                                                    fade: !0,
                                                    className: C.XG,
                                                    children: [
                                                        (0, i.jsx)(m.E, {
                                                            userId: n.id,
                                                            userBio: M?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, i.jsx)(x.A, {
                                                            heading: N.intl.string(N.t["A//N4k"]),
                                                            children: (0, i.jsx)(f.A, {
                                                                userId: n.id,
                                                                guildId: G,
                                                                tooltipDelay: y.In,
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
                    M?.profileEffect != null && (0, i.jsx)(d.A, { skuId: M?.profileEffect?.skuId, isHovering: z }),
                ],
            }),
        }),
    });
}
