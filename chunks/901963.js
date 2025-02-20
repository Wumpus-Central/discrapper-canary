n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(913527),
    a = n.n(o),
    s = n(442837),
    l = n(433517),
    c = n(481060),
    u = n(355467),
    d = n(230711),
    f = n(436774),
    p = n(78839),
    _ = n(74538),
    h = n(543241),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    v = n(662961);
let b = 'premiumRetentionEmojiPickerNotice',
    y = l.K.get(b),
    O = (e) => {
        let { closePopout: t, channel: n } = e,
            [o, O] = i.useState(!1),
            { subscription: S, hasFetchedSubscriptions: I } = (0, s.cj)([p.ZP], () => ({
                subscription: p.ZP.getPremiumSubscription(),
                hasFetchedSubscriptions: p.ZP.hasFetchedSubscriptions()
            }));
        if (
            (i.useEffect(() => {
                I || (0, u.jg)();
            }, [I]),
            null == S || !(0, _.zV)(S.status) || o)
        )
            return null;
        let T = S.status === m.O0b.PAST_DUE ? (0, _.lY)(S).expiresDate : a()(S.currentPeriodStart).add(g.gh),
            N = ''.concat(S.id, ':').concat(T.toISOString());
        if (y === N) return null;
        let A = _.ZP.getPremiumType(S.planId) === g.p9.TIER_0 ? f.JX.PREMIUM_TIER_0 : _.ZP.getPremiumType(S.planId) === g.p9.TIER_1 ? f.JX.PREMIUM_TIER_1 : f.JX.PREMIUM_TIER_2;
        return (0, r.jsxs)('div', {
            className: v.premiumRetentionNotice,
            children: [
                (0, r.jsx)(c.SrA, {
                    size: 'md',
                    className: v.premiumRetentionNoticeIcon,
                    color: A
                }),
                (0, r.jsxs)('div', {
                    className: v.premiumRetentionNoticeContent,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            children: E.NW.format(E.t.bTMjiI, {
                                planName: _.ZP.getDisplayPremiumType(S.planId),
                                endsAt: T.toDate()
                            })
                        }),
                        (0, r.jsx)('div', {
                            children: (0, r.jsx)(c.eee, {
                                onClick: () => {
                                    (0, h.A3)(n), t(), d.Z.open(m.oAB.PREMIUM);
                                },
                                children: E.NW.string(E.t.W3aavr)
                            })
                        })
                    ]
                }),
                (0, r.jsx)(c.P3F, {
                    onClick: () => {
                        l.K.set(b, N), (y = N), O(!0);
                    },
                    children: (0, r.jsx)(c.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: v.premiumRetentionNoticeClose
                    })
                })
            ]
        });
    };
