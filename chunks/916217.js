n.d(t, { A: () => O });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    l = n(793574),
    a = n(688810),
    o = n(915089),
    d = n(713517),
    c = n(182592),
    u = n(562153),
    m = n(183555),
    A = n(950191),
    x = n(718019),
    _ = n(31432),
    p = n(915614),
    f = n(389996),
    h = n(743987),
    g = n(900179),
    I = n(946356),
    j = n(810396),
    b = n(35241),
    v = n(587168),
    N = n(518477),
    C = n(652215),
    y = n(996988),
    T = n(985018),
    E = n(200445),
    L = n(199385),
    P = n(735633);
function O(e) {
    let {
            user: t,
            guildId: n,
            channelId: O,
            messageId: R,
            roleId: S,
            sessionId: M,
            transitionState: G,
            onClose: k,
            sourceAnalyticsLocations: U = [],
        } = e,
        w = n === C.ME ? void 0 : n,
        B = (0, A.Ay)(t.id, w),
        D = u.Ay.getName(w, O, t),
        F = (0, o.GV)(),
        { analyticsLocations: V } = (0, a.Ay)([...U, l.A.USER_PROFILE_MODAL]),
        z = (0, m.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: M,
            guildId: w,
            channelId: O,
            messageId: R,
            roleId: S,
        }),
        W = s.useRef(null),
        H = (0, d.M)(W);
    return (0, i.jsx)(a.f5, {
        value: V,
        children: (0, i.jsx)(m.of, {
            value: z,
            isLoaded: B?.isLoaded,
            children: (0, i.jsxs)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: G,
                className: E.zr,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, i.jsx)(r.Fmo, {
                        component: (0, i.jsx)(r.AC4, {
                            children: (0, i.jsx)(r.H, { id: F, children: T.intl.format(T.t.KRe1Fk, { name: D }) }),
                        }),
                        children: (0, i.jsxs)(I.A, {
                            user: t,
                            displayProfile: B,
                            themeType: y.d.MODAL,
                            ref: B?.profileEffect != null ? W : void 0,
                            children: [
                                (0, i.jsx)(v.A, { children: (0, i.jsx)(b.A, { user: t }) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(p.A, { user: t, displayProfile: B, themeType: y.d.MODAL }),
                                        (0, i.jsx)("div", {
                                            className: E.El,
                                            children: (0, i.jsx)(x.A, {
                                                user: t,
                                                displayProfile: B,
                                                guildId: w,
                                                channelId: O,
                                                themeType: y.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: E.rf,
                                    children: [
                                        (0, i.jsx)(j.A, {
                                            className: E.Xh,
                                            user: t,
                                            guildId: w,
                                            nickname: D,
                                            pronouns: B?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, i.jsx)(_.A, {
                                                displayProfile: B,
                                                themeType: y.d.MODAL,
                                                onClose: k,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: P.kL,
                                            children: [
                                                (0, i.jsx)(r.VQ0, {
                                                    className: P.$H,
                                                    type: "top",
                                                    selectedItem: N.RP.BOT_INFO,
                                                    onItemSelect: C.tEg,
                                                    children: (0, i.jsx)(
                                                        r.VQ0.Item,
                                                        {
                                                            className: P.YU,
                                                            id: N.RP.BOT_INFO,
                                                            "aria-label": T.intl.string(T.t.ZzAR2Y),
                                                            children: (0, i.jsx)(r.Text, {
                                                                variant: "text-sm/normal",
                                                                children: T.intl.string(T.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        N.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, i.jsxs)(r.IpV, {
                                                    fade: !0,
                                                    className: L.XG,
                                                    children: [
                                                        (0, i.jsx)(f.A, {
                                                            userId: t.id,
                                                            userBio: B?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, i.jsx)(g.A, {
                                                            heading: T.intl.string(T.t["A//N4k"]),
                                                            children: (0, i.jsx)(h.A, {
                                                                userId: t.id,
                                                                guildId: w,
                                                                tooltipDelay: N.In,
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
                    B?.profileEffect != null && (0, i.jsx)(c.A, { skuId: B?.profileEffect?.skuId, isHovering: H }),
                ],
            }),
        }),
    });
}
