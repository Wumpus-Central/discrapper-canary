n.d(t, { Z: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(433517),
    c = n(481060),
    u = n(355467),
    d = n(436774),
    f = n(313789),
    _ = n(518596),
    p = n(78839),
    h = n(74538),
    m = n(543241),
    g = n(981631),
    E = n(474936),
    b = n(388032),
    y = n(503922);
let O = "premiumRetentionEmojiPickerNotice",
    v = l.K.get(O),
    I = (e) => {
        let { closePopout: t, channel: n } = e,
            [a, I] = i.useState(!1),
            { subscription: T, hasFetchedSubscriptions: S } = (0, s.cj)([p.Z], () => ({
                subscription: p.Z.getPremiumSubscription(),
                hasFetchedSubscriptions: p.Z.hasFetchedSubscriptions(),
            }));
        if (
            (i.useEffect(() => {
                S || (0, u.jg)();
            }, [S]),
            null == T || !(0, h.zV)(T.status) || a)
        )
            return null;
        let A = T.status === g.O0b.PAST_DUE ? (0, h.lY)(T).expiresDate : o()(T.currentPeriodStart).add(E.gh),
            C = "".concat(T.id, ":").concat(A.toISOString());
        if (v === C) return null;
        let N =
            h.ZP.getPremiumType(T.planId) === E.PremiumTypes.TIER_0
                ? d.JX.PREMIUM_TIER_0
                : h.ZP.getPremiumType(T.planId) === E.PremiumTypes.TIER_1
                  ? d.JX.PREMIUM_TIER_1
                  : d.JX.PREMIUM_TIER_2;
        return (0, r.jsxs)("div", {
            className: y.premiumRetentionNotice,
            children: [
                (0, r.jsx)(c.SrA, {
                    size: "md",
                    className: y.premiumRetentionNoticeIcon,
                    color: N,
                }),
                (0, r.jsxs)("div", {
                    className: y.premiumRetentionNoticeContent,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            children: b.intl.format(b.t.bTMjiO, {
                                planName: h.ZP.getTierDisplayNameByPlanId(T.planId),
                                endsAt: A.toDate(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(c.Anchor, {
                                onClick: () => {
                                    (0, m.A3)(n),
                                        t(),
                                        (0, _.openUserSettings)(f.n.NITRO_PANEL, { section: g.oAB.PREMIUM });
                                },
                                children: b.intl.string(b.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(c.P3F, {
                    onClick: () => {
                        l.K.set(O, C), (v = C), I(!0);
                    },
                    children: (0, r.jsx)(c.Dio, {
                        size: "md",
                        color: "currentColor",
                        className: y.premiumRetentionNoticeClose,
                    }),
                }),
            ],
        });
    };
