t.d(l, { A: () => C }), t(896048);
var n = t(627968),
    i = t(64700),
    r = t(397927),
    s = t(793574),
    a = t(688810),
    o = t(915089),
    d = t(713517),
    c = t(182592),
    u = t(562153),
    f = t(183555),
    p = t(950191),
    m = t(718019),
    x = t(31432),
    A = t(915614),
    j = t(389996),
    h = t(743987),
    g = t(900179),
    v = t(946356),
    b = t(810396),
    I = t(35241),
    y = t(587168),
    O = t(518477),
    N = t(652215),
    E = t(996988),
    _ = t(985018),
    T = t(763563),
    P = t(195723),
    S = t(368519);
function C(e) {
    var l;
    let {
            user: t,
            guildId: C,
            channelId: L,
            messageId: D,
            roleId: R,
            sessionId: w,
            transitionState: G,
            openedAt: M,
            onClose: U,
            sourceAnalyticsLocations: k = [],
        } = e,
        F = C === N.ME ? void 0 : C,
        V = (0, p.Ay)(t.id, F),
        B = u.Ay.getName(F, L, t),
        W = (0, o.GV)(),
        { analyticsLocations: K } = (0, a.Ay)([...k, s.A.USER_PROFILE_MODAL]),
        z = (0, f.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: w,
            guildId: F,
            channelId: L,
            messageId: D,
            roleId: R,
        }),
        H = i.useRef(null),
        Y = (0, d.M)(H);
    return (0, n.jsx)(a.f5, {
        value: K,
        children: (0, n.jsx)(f.of, {
            value: z,
            openedAt: M,
            fetchStartedAt: null == V ? void 0 : V.fetchStartedAt,
            fetchEndedAt: null == V ? void 0 : V.fetchEndedAt,
            isLoaded: null == V ? void 0 : V.isLoaded,
            children: (0, n.jsxs)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: G,
                className: T.zr,
                hideShadow: !0,
                "aria-labelledby": W,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, n.jsx)(r.Fmo, {
                        component: (0, n.jsx)(r.AC4, {
                            children: (0, n.jsx)(r.H, {
                                id: W,
                                children: _.intl.format(_.t.KRe1Fk, { name: B }),
                            }),
                        }),
                        children: (0, n.jsxs)(v.A, {
                            user: t,
                            displayProfile: V,
                            themeType: E.d.MODAL,
                            ref: (null == V ? void 0 : V.profileEffect) != null ? H : void 0,
                            children: [
                                (0, n.jsx)(y.A, { children: (0, n.jsx)(I.A, { user: t }) }),
                                (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(A.A, {
                                            user: t,
                                            displayProfile: V,
                                            themeType: E.d.MODAL,
                                        }),
                                        (0, n.jsx)("div", {
                                            className: T.El,
                                            children: (0, n.jsx)(m.A, {
                                                user: t,
                                                displayProfile: V,
                                                guildId: F,
                                                channelId: L,
                                                themeType: E.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: T.rf,
                                    children: [
                                        (0, n.jsx)(b.A, {
                                            className: T.Xh,
                                            user: t,
                                            guildId: F,
                                            nickname: B,
                                            pronouns: null == V ? void 0 : V.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, n.jsx)(x.A, {
                                                displayProfile: V,
                                                themeType: E.d.MODAL,
                                                onClose: U,
                                            }),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: S.kL,
                                            children: [
                                                (0, n.jsx)(r.VQ0, {
                                                    className: S.$H,
                                                    type: "top",
                                                    selectedItem: O.RP.BOT_INFO,
                                                    onItemSelect: N.tEg,
                                                    children: (0, n.jsx)(
                                                        r.VQ0.Item,
                                                        {
                                                            className: S.YU,
                                                            id: O.RP.BOT_INFO,
                                                            "aria-label": _.intl.string(_.t.jGoPJT),
                                                            children: (0, n.jsx)(r.Text, {
                                                                variant: "text-sm/normal",
                                                                children: _.intl.string(_.t.jGoPJT),
                                                            }),
                                                        },
                                                        O.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, n.jsxs)(r.IpV, {
                                                    fade: !0,
                                                    className: P.XG,
                                                    children: [
                                                        (0, n.jsx)(j.A, {
                                                            userId: t.id,
                                                            userBio: null == V ? void 0 : V.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, n.jsx)(g.A, {
                                                            heading: _.intl.string(_.t["A//N4k"]),
                                                            children: (0, n.jsx)(h.A, {
                                                                userId: t.id,
                                                                guildId: F,
                                                                tooltipDelay: O.In,
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
                    (null == V ? void 0 : V.profileEffect) != null &&
                        (0, n.jsx)(c.A, {
                            skuId: null == V || null == (l = V.profileEffect) ? void 0 : l.skuId,
                            isHovering: Y,
                        }),
                ],
            }),
        }),
    });
}
