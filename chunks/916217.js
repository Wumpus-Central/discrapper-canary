t.d(n, { A: () => P });
var i = t(627968),
    a = t(64700),
    l = t(397927),
    r = t(793574),
    d = t(688810),
    s = t(351966),
    o = t(915089),
    c = t(713517),
    u = t(562153),
    _ = t(183555),
    p = t(950191),
    A = t(718019),
    g = t(31432),
    f = t(915614),
    h = t(389996),
    m = t(743987),
    x = t(900179),
    I = t(946356),
    b = t(810396),
    v = t(35241),
    E = t(587168),
    j = t(518477),
    y = t(652215),
    T = t(996988),
    S = t(985018),
    N = t(669924),
    C = t(824860),
    R = t(843796);
function P(e) {
    let {
            user: n,
            guildId: t,
            channelId: P,
            messageId: L,
            roleId: O,
            sessionId: D,
            transitionState: k,
            openedAt: B,
            onClose: U,
            sourceAnalyticsLocations: M = [],
        } = e,
        G = t === y.ME ? void 0 : t,
        F = (0, p.Ay)(n.id, G),
        w = u.Ay.getName(G, P, n),
        V = (0, o.GV)(),
        { analyticsLocations: H } = (0, d.Ay)([...M, r.A.USER_PROFILE_MODAL]),
        W = (0, _.pb)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: D,
            guildId: G,
            channelId: P,
            messageId: L,
            roleId: O,
        }),
        z = a.useRef(null),
        Y = (0, c.M)(z);
    return (0, i.jsx)(d.f5, {
        value: H,
        children: (0, i.jsx)(_.of, {
            value: W,
            openedAt: B,
            fetchStartedAt: F?.fetchStartedAt,
            fetchEndedAt: F?.fetchEndedAt,
            isLoaded: F?.isLoaded,
            children: (0, i.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: k,
                className: N.zr,
                hideShadow: !0,
                "aria-labelledby": V,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, i.jsx)(l.Fmo, {
                        component: (0, i.jsx)(l.AC4, {
                            children: (0, i.jsx)(l.H, { id: V, children: S.intl.format(S.t.KRe1Fk, { name: w }) }),
                        }),
                        children: (0, i.jsxs)(I.A, {
                            user: n,
                            displayProfile: F,
                            themeType: T.d.MODAL,
                            ref: F?.profileEffect != null ? z : void 0,
                            children: [
                                (0, i.jsx)(E.A, { children: (0, i.jsx)(v.A, { user: n }) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(f.A, { user: n, displayProfile: F, themeType: T.d.MODAL }),
                                        (0, i.jsx)("div", {
                                            className: N.El,
                                            children: (0, i.jsx)(A.A, {
                                                user: n,
                                                displayProfile: F,
                                                guildId: G,
                                                channelId: P,
                                                themeType: T.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: N.rf,
                                    children: [
                                        (0, i.jsx)(b.A, {
                                            className: N.Xh,
                                            user: n,
                                            guildId: G,
                                            nickname: w,
                                            pronouns: F?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, i.jsx)(g.A, {
                                                displayProfile: F,
                                                themeType: T.d.MODAL,
                                                onClose: U,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: R.kL,
                                            children: [
                                                (0, i.jsx)(l.VQ0, {
                                                    className: R.$H,
                                                    type: "top",
                                                    selectedItem: j.RP.BOT_INFO,
                                                    onItemSelect: y.tEg,
                                                    children: (0, i.jsx)(
                                                        l.VQ0.Item,
                                                        {
                                                            className: R.YU,
                                                            id: j.RP.BOT_INFO,
                                                            "aria-label": S.intl.string(S.t.ZzAR2Y),
                                                            children: (0, i.jsx)(l.Text, {
                                                                variant: "text-sm/normal",
                                                                children: S.intl.string(S.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        j.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, i.jsxs)(l.IpV, {
                                                    fade: !0,
                                                    className: C.XG,
                                                    children: [
                                                        (0, i.jsx)(h.E, {
                                                            userId: n.id,
                                                            userBio: F?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, i.jsx)(x.A, {
                                                            heading: S.intl.string(S.t["A//N4k"]),
                                                            children: (0, i.jsx)(m.A, {
                                                                userId: n.id,
                                                                guildId: G,
                                                                tooltipDelay: j.In,
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
                    F?.profileEffect != null && (0, i.jsx)(s.A, { skuId: F?.profileEffect?.skuId, isHovering: Y }),
                ],
            }),
        }),
    });
}
