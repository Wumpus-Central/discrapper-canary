t.d(n, { A: () => L });
var i = t(627968),
    a = t(64700),
    r = t(397927),
    l = t(793574),
    o = t(688810),
    s = t(351966),
    d = t(915089),
    c = t(713517),
    _ = t(562153),
    u = t(183555),
    p = t(950191),
    A = t(718019),
    g = t(31432),
    m = t(915614),
    f = t(389996),
    h = t(743987),
    x = t(900179),
    I = t(946356),
    b = t(810396),
    v = t(35241),
    E = t(587168),
    j = t(518477),
    y = t(652215),
    C = t(996988),
    T = t(985018),
    S = t(669924),
    N = t(824860),
    R = t(843796);
function L(e) {
    let {
            user: n,
            guildId: t,
            channelId: L,
            messageId: P,
            roleId: D,
            sessionId: O,
            transitionState: k,
            onClose: B,
            sourceAnalyticsLocations: U = [],
        } = e,
        M = t === y.ME ? void 0 : t,
        G = (0, p.Ay)(n.id, M),
        F = _.Ay.getName(M, L, n),
        w = (0, d.GV)(),
        { analyticsLocations: V } = (0, o.Ay)([...U, l.A.USER_PROFILE_MODAL]),
        H = (0, u.pb)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: O,
            guildId: M,
            channelId: L,
            messageId: P,
            roleId: D,
        }),
        W = a.useRef(null),
        z = (0, c.M)(W);
    return (0, i.jsx)(o.f5, {
        value: V,
        children: (0, i.jsx)(u.of, {
            value: H,
            isLoaded: G?.isLoaded,
            children: (0, i.jsxs)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: k,
                className: S.zr,
                hideShadow: !0,
                "aria-labelledby": w,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, i.jsx)(r.Fmo, {
                        component: (0, i.jsx)(r.AC4, {
                            children: (0, i.jsx)(r.H, { id: w, children: T.intl.format(T.t.KRe1Fk, { name: F }) }),
                        }),
                        children: (0, i.jsxs)(I.A, {
                            user: n,
                            displayProfile: G,
                            themeType: C.d.MODAL,
                            ref: G?.profileEffect != null ? W : void 0,
                            children: [
                                (0, i.jsx)(E.A, { children: (0, i.jsx)(v.A, { user: n }) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(m.A, { user: n, displayProfile: G, themeType: C.d.MODAL }),
                                        (0, i.jsx)("div", {
                                            className: S.El,
                                            children: (0, i.jsx)(A.A, {
                                                user: n,
                                                displayProfile: G,
                                                guildId: M,
                                                channelId: L,
                                                themeType: C.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: S.rf,
                                    children: [
                                        (0, i.jsx)(b.A, {
                                            className: S.Xh,
                                            user: n,
                                            guildId: M,
                                            nickname: F,
                                            pronouns: G?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, i.jsx)(g.A, {
                                                displayProfile: G,
                                                themeType: C.d.MODAL,
                                                onClose: B,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: R.kL,
                                            children: [
                                                (0, i.jsx)(r.VQ0, {
                                                    className: R.$H,
                                                    type: "top",
                                                    selectedItem: j.RP.BOT_INFO,
                                                    onItemSelect: y.tEg,
                                                    children: (0, i.jsx)(
                                                        r.VQ0.Item,
                                                        {
                                                            className: R.YU,
                                                            id: j.RP.BOT_INFO,
                                                            "aria-label": T.intl.string(T.t.ZzAR2Y),
                                                            children: (0, i.jsx)(r.Text, {
                                                                variant: "text-sm/normal",
                                                                children: T.intl.string(T.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        j.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, i.jsxs)(r.IpV, {
                                                    fade: !0,
                                                    className: N.XG,
                                                    children: [
                                                        (0, i.jsx)(f.E, {
                                                            userId: n.id,
                                                            userBio: G?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, i.jsx)(x.A, {
                                                            heading: T.intl.string(T.t["A//N4k"]),
                                                            children: (0, i.jsx)(h.A, {
                                                                userId: n.id,
                                                                guildId: M,
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
                    G?.profileEffect != null && (0, i.jsx)(s.A, { skuId: G?.profileEffect?.skuId, isHovering: z }),
                ],
            }),
        }),
    });
}
