n.d(t, { Z: () => v }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(913527),
    a = n.n(o),
    s = n(442837),
    l = n(433517),
    c = n(481060),
    u = n(355467),
    d = n(230711),
    f = n(436774),
    _ = n(78839),
    p = n(74538),
    h = n(543241),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    b = n(400641);
let y = 'premiumRetentionEmojiPickerNotice',
    O = l.K.get(y),
    v = (e) => {
        let { closePopout: t, channel: n } = e,
            [o, v] = i.useState(!1),
            { subscription: I, hasFetchedSubscriptions: S } = (0, s.cj)([_.ZP], () => ({
                subscription: _.ZP.getPremiumSubscription(),
                hasFetchedSubscriptions: _.ZP.hasFetchedSubscriptions()
            }));
        if (
            (i.useEffect(() => {
                S || (0, u.jg)();
            }, [S]),
            null == I || !(0, p.zV)(I.status) || o)
        )
            return null;
        let T = I.status === m.O0b.PAST_DUE ? (0, p.lY)(I).expiresDate : a()(I.currentPeriodStart).add(g.gh),
            A = ''.concat(I.id, ':').concat(T.toISOString());
        if (O === A) return null;
        let N = p.ZP.getPremiumType(I.planId) === g.p9.TIER_0 ? f.JX.PREMIUM_TIER_0 : p.ZP.getPremiumType(I.planId) === g.p9.TIER_1 ? f.JX.PREMIUM_TIER_1 : f.JX.PREMIUM_TIER_2;
        return (0, r.jsxs)('div', {
            className: b.premiumRetentionNotice,
            children: [
                (0, r.jsx)(c.SrA, {
                    size: 'md',
                    className: b.premiumRetentionNoticeIcon,
                    color: N
                }),
                (0, r.jsxs)('div', {
                    className: b.premiumRetentionNoticeContent,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            children: E.intl.format(E.t.bTMjiI, {
                                planName: p.ZP.getDisplayPremiumType(I.planId),
                                endsAt: T.toDate()
                            })
                        }),
                        (0, r.jsx)('div', {
                            children: (0, r.jsx)(c.eee, {
                                onClick: () => {
                                    (0, h.A3)(n), t(), d.Z.open(m.oAB.PREMIUM);
                                },
                                children: E.intl.string(E.t.W3aavr)
                            })
                        })
                    ]
                }),
                (0, r.jsx)(c.P3F, {
                    onClick: () => {
                        l.K.set(y, A), (O = A), v(!0);
                    },
                    children: (0, r.jsx)(c.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: b.premiumRetentionNoticeClose
                    })
                })
            ]
        });
    };
