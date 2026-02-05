n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(793574),
    r = n(688810),
    d = n(915089),
    o = n(713517),
    c = n(182592),
    u = n(562153),
    A = n(183555),
    x = n(950191),
    m = n(718019),
    p = n(31432),
    h = n(915614),
    f = n(389996),
    g = n(743987),
    I = n(900179),
    j = n(946356),
    _ = n(810396),
    N = n(35241),
    v = n(587168),
    b = n(518477),
    T = n(652215),
    E = n(996988),
    y = n(985018),
    C = n(763563),
    P = n(195723),
    L = n(368519);
function S(e) {
    let {
            user: t,
            guildId: n,
            channelId: S,
            messageId: O,
            roleId: R,
            sessionId: D,
            transitionState: M,
            openedAt: G,
            onClose: U,
            sourceAnalyticsLocations: k = [],
        } = e,
        F = n === T.ME ? void 0 : n,
        V = (0, x.Ay)(t.id, F),
        B = u.Ay.getName(F, S, t),
        w = (0, d.GV)(),
        { analyticsLocations: W } = (0, r.Ay)([...k, a.A.USER_PROFILE_MODAL]),
        z = (0, A.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: D,
            guildId: F,
            channelId: S,
            messageId: O,
            roleId: R,
        }),
        H = s.useRef(null),
        K = (0, o.M)(H);
    return (0, i.jsx)(r.f5, {
        value: W,
        children: (0, i.jsx)(A.of, {
            value: z,
            openedAt: G,
            fetchStartedAt: V?.fetchStartedAt,
            fetchEndedAt: V?.fetchEndedAt,
            isLoaded: V?.isLoaded,
            children: (0, i.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: M,
                className: C.zr,
                hideShadow: !0,
                "aria-labelledby": w,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, i.jsx)(l.Fmo, {
                        component: (0, i.jsx)(l.AC4, {
                            children: (0, i.jsx)(l.H, { id: w, children: y.intl.format(y.t.KRe1Fk, { name: B }) }),
                        }),
                        children: (0, i.jsxs)(j.A, {
                            user: t,
                            displayProfile: V,
                            themeType: E.d.MODAL,
                            ref: V?.profileEffect != null ? H : void 0,
                            children: [
                                (0, i.jsx)(v.A, { children: (0, i.jsx)(N.A, { user: t }) }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(h.A, { user: t, displayProfile: V, themeType: E.d.MODAL }),
                                        (0, i.jsx)("div", {
                                            className: C.El,
                                            children: (0, i.jsx)(m.A, {
                                                user: t,
                                                displayProfile: V,
                                                guildId: F,
                                                channelId: S,
                                                themeType: E.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)("div", {
                                    className: C.rf,
                                    children: [
                                        (0, i.jsx)(_.A, {
                                            className: C.Xh,
                                            user: t,
                                            guildId: F,
                                            nickname: B,
                                            pronouns: V?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, i.jsx)(p.A, {
                                                displayProfile: V,
                                                themeType: E.d.MODAL,
                                                onClose: U,
                                            }),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: L.kL,
                                            children: [
                                                (0, i.jsx)(l.VQ0, {
                                                    className: L.$H,
                                                    type: "top",
                                                    selectedItem: b.RP.BOT_INFO,
                                                    onItemSelect: T.tEg,
                                                    children: (0, i.jsx)(
                                                        l.VQ0.Item,
                                                        {
                                                            className: L.YU,
                                                            id: b.RP.BOT_INFO,
                                                            "aria-label": y.intl.string(y.t.jGoPJT),
                                                            children: (0, i.jsx)(l.Text, {
                                                                variant: "text-sm/normal",
                                                                children: y.intl.string(y.t.jGoPJT),
                                                            }),
                                                        },
                                                        b.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, i.jsxs)(l.IpV, {
                                                    fade: !0,
                                                    className: P.XG,
                                                    children: [
                                                        (0, i.jsx)(f.A, {
                                                            userId: t.id,
                                                            userBio: V?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, i.jsx)(I.A, {
                                                            heading: y.intl.string(y.t["A//N4k"]),
                                                            children: (0, i.jsx)(g.A, {
                                                                userId: t.id,
                                                                guildId: F,
                                                                tooltipDelay: b.In,
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
                    V?.profileEffect != null && (0, i.jsx)(c.A, { skuId: V?.profileEffect?.skuId, isHovering: K }),
                ],
            }),
        }),
    });
}
