t.d(n, { A: () => S });
var i = t(627968),
    a = t(64700),
    s = t(397927),
    l = t(793574),
    r = t(688810),
    o = t(351966),
    d = t(915089),
    c = t(713517),
    u = t(562153),
    _ = t(183555),
    A = t(950191),
    x = t(718019),
    p = t(31432),
    g = t(915614),
    I = t(389996),
    m = t(743987),
    f = t(900179),
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
    O = t(843796);
function S(e) {
    let {
            user: n,
            guildId: t,
            channelId: S,
            messageId: P,
            roleId: k,
            sessionId: R,
            transitionState: B,
            onClose: M,
            sourceAnalyticsLocations: G = [],
        } = e,
        D = t === N.ME ? void 0 : t,
        U = (0, A.Ay)(n.id, D),
        V = u.Ay.getName(D, S, n),
        F = (0, d.GV)(),
        { analyticsLocations: W } = (0, r.Ay)([...G, l.A.USER_PROFILE_MODAL]),
        H = (0, _.pb)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: R,
            guildId: D,
            channelId: S,
            messageId: P,
            roleId: k,
        }),
        z = a.useRef(null),
        w = (0, c.M)(z);
    return (0, i.jsx)(r.f5, {
        value: W,
        children: (0, i.jsx)(_.of, {
            value: H,
            isLoaded: U?.isLoaded,
            children: (0, i.jsxs)(s.EOs, {
                "data-migration-pending": !0,
                transitionState: B,
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
                                        (0, i.jsx)(g.A, { user: n, displayProfile: U, themeType: y.d.MODAL }),
                                        (0, i.jsx)("div", {
                                            className: T.El,
                                            children: (0, i.jsx)(x.A, {
                                                user: n,
                                                displayProfile: U,
                                                guildId: D,
                                                channelId: S,
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
                                            guildId: D,
                                            nickname: V,
                                            pronouns: U?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, i.jsx)(p.A, {
                                                displayProfile: U,
                                                themeType: y.d.MODAL,
                                                onClose: M,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: O.kL,
                                            children: [
                                                (0, i.jsx)(s.VQ0, {
                                                    className: O.$H,
                                                    type: "top",
                                                    selectedItem: C.RP.BOT_INFO,
                                                    onItemSelect: N.tEg,
                                                    children: (0, i.jsx)(
                                                        s.VQ0.Item,
                                                        {
                                                            className: O.YU,
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
                                                        (0, i.jsx)(I.E, {
                                                            userId: n.id,
                                                            userBio: U?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, i.jsx)(f.A, {
                                                            heading: E.intl.string(E.t["A//N4k"]),
                                                            children: (0, i.jsx)(m.A, {
                                                                userId: n.id,
                                                                guildId: D,
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
                    U?.profileEffect != null && (0, i.jsx)(o.A, { skuId: U?.profileEffect?.skuId, isHovering: w }),
                ],
            }),
        }),
    });
}
