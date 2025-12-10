n.d(t, { Z: () => S }), n(388685);
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
    p = n(518596),
    _ = n(78839),
    m = n(74538),
    h = n(543241),
    g = n(981631),
    E = n(474936),
    b = n(388032),
    y = n(503922);
let O = "premiumRetentionEmojiPickerNotice",
    v = l.K.get(O),
    S = (e) => {
        let { closePopout: t, channel: n } = e,
            [a, S] = i.useState(!1),
            { subscription: I, hasFetchedSubscriptions: T } = (0, s.cj)([_.Z], () => ({
                subscription: _.Z.getPremiumSubscription(),
                hasFetchedSubscriptions: _.Z.hasFetchedSubscriptions(),
            }));
        if (
            (i.useEffect(() => {
                T || (0, u.jg)();
            }, [T]),
            null == I || !(0, m.zV)(I.status) || a)
        )
            return null;
        let C = I.status === g.O0b.PAST_DUE ? (0, m.lY)(I).expiresDate : o()(I.currentPeriodStart).add(E.gh),
            A = "".concat(I.id, ":").concat(C.toISOString());
        if (v === A) return null;
        let N =
            m.ZP.getPremiumType(I.planId) === E.PremiumTypes.TIER_0
                ? d.JX.PREMIUM_TIER_0
                : m.ZP.getPremiumType(I.planId) === E.PremiumTypes.TIER_1
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
                                planName: m.ZP.getTierDisplayNameByPlanId(I.planId),
                                endsAt: C.toDate(),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(c.Anchor, {
                                onClick: () => {
                                    (0, h.A3)(n),
                                        t(),
                                        (0, p.openUserSettings)(f.n.NITRO_PANEL, { section: g.oAB.PREMIUM });
                                },
                                children: b.intl.string(b.t.W3aavh),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(c.P3F, {
                    onClick: () => {
                        l.K.set(O, A), (v = A), S(!0);
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
