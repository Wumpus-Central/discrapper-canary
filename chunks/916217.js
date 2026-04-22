a.d(t, { A: () => D });
var n = a(627968),
    i = a(64700),
    l = a(935462),
    r = a(707554),
    d = a(140735),
    o = a(761508),
    s = a(834730),
    c = a(573613),
    _ = a(793574),
    u = a(688810),
    m = a(351966),
    p = a(915089),
    g = a(713517),
    b = a(562153),
    f = a(183555),
    x = a(950191),
    h = a(718019),
    A = a(31432),
    v = a(915614),
    I = a(389996),
    y = a(743987),
    C = a(900179),
    j = a(946356),
    N = a(810396),
    E = a(35241),
    S = a(587168),
    T = a(518477),
    w = a(652215),
    P = a(996988),
    k = a(985018),
    M = a(978036),
    L = a(26988),
    R = a(837604);
function D(e) {
    let {
            user: t,
            guildId: a,
            channelId: D,
            messageId: B,
            roleId: O,
            sessionId: G,
            transitionState: U,
            openedAt: F,
            onClose: H,
            sourceAnalyticsLocations: W = [],
        } = e,
        V = a === w.ME ? void 0 : a,
        z = (0, x.Ay)(t.id, V),
        X = b.Ay.getName(V, D, t),
        Z = (0, p.GV)(),
        { analyticsLocations: Y } = (0, u.Ay)([...W, _.A.USER_PROFILE_MODAL]),
        q = (0, f.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: G,
            guildId: V,
            channelId: D,
            messageId: B,
            roleId: O,
        }),
        Q = i.useRef(null),
        K = (0, g.M)(Q);
    return (0, n.jsx)(u.f5, {
        value: Y,
        children: (0, n.jsx)(f.of, {
            value: q,
            openedAt: F,
            fetchStartedAt: z?.fetchStartedAt,
            fetchEndedAt: z?.fetchEndedAt,
            isLoaded: z?.isLoaded,
            children: (0, n.jsxs)(l.EO, {
                "data-migration-pending": !0,
                transitionState: U,
                className: M.zr,
                hideShadow: !0,
                "aria-labelledby": Z,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, n.jsx)(r.F, {
                        component: (0, n.jsx)(d.A, {
                            children: (0, n.jsx)(r.H, { id: Z, children: k.intl.format(k.t.KRe1Fk, { name: X }) }),
                        }),
                        children: (0, n.jsxs)(j.A, {
                            user: t,
                            displayProfile: z,
                            themeType: P.d.MODAL,
                            ref: z?.profileEffect != null ? Q : void 0,
                            children: [
                                (0, n.jsx)(S.A, { children: (0, n.jsx)(E.A, { user: t }) }),
                                (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(v.A, { user: t, displayProfile: z, themeType: P.d.MODAL }),
                                        (0, n.jsx)("div", {
                                            className: M.El,
                                            children: (0, n.jsx)(h.A, {
                                                user: t,
                                                displayProfile: z,
                                                guildId: V,
                                                channelId: D,
                                                themeType: P.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: M.rf,
                                    children: [
                                        (0, n.jsx)(N.A, {
                                            className: M.Xh,
                                            user: t,
                                            guildId: V,
                                            nickname: X,
                                            pronouns: z?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, n.jsx)(A.A, {
                                                displayProfile: z,
                                                themeType: P.d.MODAL,
                                                onClose: H,
                                            }),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: R.kL,
                                            children: [
                                                (0, n.jsx)(o.V, {
                                                    className: R.$H,
                                                    type: "top",
                                                    selectedItem: T.RP.BOT_INFO,
                                                    onItemSelect: w.tEg,
                                                    children: (0, n.jsx)(
                                                        o.V.Item,
                                                        {
                                                            className: R.YU,
                                                            id: T.RP.BOT_INFO,
                                                            "aria-label": k.intl.string(k.t.ZzAR2Y),
                                                            children: (0, n.jsx)(s.E, {
                                                                variant: "text-sm/normal",
                                                                children: k.intl.string(k.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        T.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, n.jsxs)(c.Ip, {
                                                    fade: !0,
                                                    className: L.XG,
                                                    children: [
                                                        (0, n.jsx)(I.E, {
                                                            userId: t.id,
                                                            userBio: z?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, n.jsx)(C.A, {
                                                            heading: k.intl.string(k.t["A//N4k"]),
                                                            children: (0, n.jsx)(y.A, {
                                                                userId: t.id,
                                                                guildId: V,
                                                                tooltipDelay: T.In,
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
                    z?.profileEffect != null && (0, n.jsx)(m.A, { skuId: z?.profileEffect?.skuId, isHovering: K }),
                ],
            }),
        }),
    });
}
