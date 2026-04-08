t.d(n, { A: () => L });
var i = t(627968),
    a = t(64700),
    r = t(397927),
    l = t(793574),
    s = t(688810),
    o = t(351966),
    d = t(915089),
    c = t(713517),
    u = t(562153),
    _ = t(183555),
    p = t(950191),
    A = t(718019),
    g = t(31432),
    m = t(915614),
    I = t(389996),
    f = t(743987),
    h = t(900179),
    x = t(946356),
    v = t(810396),
    E = t(35241),
    b = t(587168),
    C = t(518477),
    y = t(652215),
    T = t(996988),
    j = t(985018),
    S = t(669924),
    N = t(824860),
    R = t(843796);
function L(e) {
    let {
            user: n,
            guildId: t,
            channelId: L,
            messageId: P,
            roleId: O,
            sessionId: U,
            transitionState: k,
            onClose: D,
            sourceAnalyticsLocations: B = [],
        } = e,
        M = t === y.ME ? void 0 : t,
        G = (0, p.Ay)(n.id, M),
        F = u.Ay.getName(M, L, n),
        V = (0, d.GV)(),
        { analyticsLocations: w } = (0, s.Ay)([...B, l.A.USER_PROFILE_MODAL]),
        H = (0, _.pb)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: U,
            guildId: M,
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
            isLoaded: G?.isLoaded,
            children: (0, i.jsxs)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: k,
                className: S.zr,
                hideShadow: !0,
                "aria-labelledby": V,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, i.jsx)(r.Fmo, {
                        component: (0, i.jsx)(r.AC4, {
                            children: (0, i.jsx)(r.H, { id: V, children: j.intl.format(j.t.KRe1Fk, { name: F }) }),
                        }),
                        children: (0, i.jsxs)(x.A, {
                            user: n,
                            displayProfile: G,
                            themeType: T.d.MODAL,
                            ref: G?.profileEffect != null ? W : void 0,
                            children: [
                                (0, i.jsx)(b.A, { children: (0, i.jsx)(E.A, { user: n }) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(m.A, { user: n, displayProfile: G, themeType: T.d.MODAL }),
                                        (0, i.jsx)("div", {
                                            className: S.El,
                                            children: (0, i.jsx)(A.A, {
                                                user: n,
                                                displayProfile: G,
                                                guildId: M,
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
                                            guildId: M,
                                            nickname: F,
                                            pronouns: G?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, i.jsx)(g.A, {
                                                displayProfile: G,
                                                themeType: T.d.MODAL,
                                                onClose: D,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: R.kL,
                                            children: [
                                                (0, i.jsx)(r.VQ0, {
                                                    className: R.$H,
                                                    type: "top",
                                                    selectedItem: C.RP.BOT_INFO,
                                                    onItemSelect: y.tEg,
                                                    children: (0, i.jsx)(
                                                        r.VQ0.Item,
                                                        {
                                                            className: R.YU,
                                                            id: C.RP.BOT_INFO,
                                                            "aria-label": j.intl.string(j.t.ZzAR2Y),
                                                            children: (0, i.jsx)(r.Text, {
                                                                variant: "text-sm/normal",
                                                                children: j.intl.string(j.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        C.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, i.jsxs)(r.IpV, {
                                                    fade: !0,
                                                    className: N.XG,
                                                    children: [
                                                        (0, i.jsx)(I.E, {
                                                            userId: n.id,
                                                            userBio: G?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, i.jsx)(h.A, {
                                                            heading: j.intl.string(j.t["A//N4k"]),
                                                            children: (0, i.jsx)(f.A, {
                                                                userId: n.id,
                                                                guildId: M,
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
                    G?.profileEffect != null && (0, i.jsx)(o.A, { skuId: G?.profileEffect?.skuId, isHovering: z }),
                ],
            }),
        }),
    });
}
