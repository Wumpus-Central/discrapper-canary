t.d(n, { A: () => O });
var i = t(627968),
    a = t(64700),
    s = t(397927),
    r = t(793574),
    l = t(688810),
    o = t(351966),
    d = t(915089),
    c = t(713517),
    u = t(562153),
    _ = t(183555),
    p = t(950191),
    x = t(718019),
    A = t(31432),
    f = t(915614),
    m = t(389996),
    g = t(743987),
    I = t(900179),
    h = t(946356),
    b = t(810396),
    j = t(35241),
    v = t(587168),
    C = t(518477),
    N = t(652215),
    y = t(996988),
    E = t(985018),
    T = t(669924),
    L = t(824860),
    P = t(843796);
function O(e) {
    let {
            user: n,
            guildId: t,
            channelId: O,
            messageId: S,
            roleId: R,
            sessionId: k,
            transitionState: M,
            onClose: B,
            sourceAnalyticsLocations: D = [],
        } = e,
        G = t === N.ME ? void 0 : t,
        U = (0, p.Ay)(n.id, G),
        V = u.Ay.getName(G, O, n),
        F = (0, d.GV)(),
        { analyticsLocations: w } = (0, l.Ay)([...D, r.A.USER_PROFILE_MODAL]),
        W = (0, _.pb)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: k,
            guildId: G,
            channelId: O,
            messageId: S,
            roleId: R,
        }),
        z = a.useRef(null),
        H = (0, c.M)(z);
    return (0, i.jsx)(l.f5, {
        value: w,
        children: (0, i.jsx)(_.of, {
            value: W,
            isLoaded: U?.isLoaded,
            children: (0, i.jsxs)(s.EOs, {
                "data-migration-pending": !0,
                transitionState: M,
                className: T.zr,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, i.jsx)(s.Fmo, {
                        component: (0, i.jsx)(s.AC4, {
                            children: (0, i.jsx)(s.H, { id: F, children: E.intl.format(E.t.KRe1Fk, { name: V }) }),
                        }),
                        children: (0, i.jsxs)(h.A, {
                            user: n,
                            displayProfile: U,
                            themeType: y.d.MODAL,
                            ref: U?.profileEffect != null ? z : void 0,
                            children: [
                                (0, i.jsx)(v.A, { children: (0, i.jsx)(j.A, { user: n }) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(f.A, { user: n, displayProfile: U, themeType: y.d.MODAL }),
                                        (0, i.jsx)("div", {
                                            className: T.El,
                                            children: (0, i.jsx)(x.A, {
                                                user: n,
                                                displayProfile: U,
                                                guildId: G,
                                                channelId: O,
                                                themeType: y.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: T.rf,
                                    children: [
                                        (0, i.jsx)(b.A, {
                                            className: T.Xh,
                                            user: n,
                                            guildId: G,
                                            nickname: V,
                                            pronouns: U?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, i.jsx)(A.A, {
                                                displayProfile: U,
                                                themeType: y.d.MODAL,
                                                onClose: B,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: P.kL,
                                            children: [
                                                (0, i.jsx)(s.VQ0, {
                                                    className: P.$H,
                                                    type: "top",
                                                    selectedItem: C.RP.BOT_INFO,
                                                    onItemSelect: N.tEg,
                                                    children: (0, i.jsx)(
                                                        s.VQ0.Item,
                                                        {
                                                            className: P.YU,
                                                            id: C.RP.BOT_INFO,
                                                            "aria-label": E.intl.string(E.t.ZzAR2Y),
                                                            children: (0, i.jsx)(s.Text, {
                                                                variant: "text-sm/normal",
                                                                children: E.intl.string(E.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        C.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, i.jsxs)(s.IpV, {
                                                    fade: !0,
                                                    className: L.XG,
                                                    children: [
                                                        (0, i.jsx)(m.E, {
                                                            userId: n.id,
                                                            userBio: U?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, i.jsx)(I.A, {
                                                            heading: E.intl.string(E.t["A//N4k"]),
                                                            children: (0, i.jsx)(g.A, {
                                                                userId: n.id,
                                                                guildId: G,
                                                                tooltipDelay: C.In,
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
                    U?.profileEffect != null && (0, i.jsx)(o.A, { skuId: U?.profileEffect?.skuId, isHovering: H }),
                ],
            }),
        }),
    });
}
