n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(913527),
    s = n.n(a),
    o = n(442837),
    l = n(433517),
    u = n(481060),
    c = n(355467),
    d = n(230711),
    f = n(436774),
    _ = n(78839),
    p = n(74538),
    h = n(543241),
    m = n(981631),
    g = n(474936),
    E = n(388032),
    v = n(353972);
let y = 'premiumRetentionEmojiPickerNotice',
    I = l.K.get(y),
    T = (e) => {
        let { closePopout: t, channel: n } = e,
            [a, T] = r.useState(!1),
            { subscription: b, hasFetchedSubscriptions: S } = (0, o.cj)([_.ZP], () => ({
                subscription: _.ZP.getPremiumSubscription(),
                hasFetchedSubscriptions: _.ZP.hasFetchedSubscriptions()
            }));
        if (
            (r.useEffect(() => {
                S || (0, c.jg)();
            }, [S]),
            null == b || !(0, p.zV)(b.status) || a)
        )
            return null;
        let A = b.status === m.O0b.PAST_DUE ? (0, p.lY)(b).expiresDate : s()(b.currentPeriodStart).add(g.gh),
            N = ''.concat(b.id, ':').concat(A.toISOString());
        if (I === N) return null;
        let C = p.ZP.getPremiumType(b.planId) === g.p9.TIER_0 ? f.JX.PREMIUM_TIER_0 : p.ZP.getPremiumType(b.planId) === g.p9.TIER_1 ? f.JX.PREMIUM_TIER_1 : f.JX.PREMIUM_TIER_2;
        return (0, i.jsxs)('div', {
            className: v.premiumRetentionNotice,
            children: [
                (0, i.jsx)(u.SrA, {
                    size: 'md',
                    className: v.premiumRetentionNoticeIcon,
                    color: C
                }),
                (0, i.jsxs)('div', {
                    className: v.premiumRetentionNoticeContent,
                    children: [
                        (0, i.jsx)(u.Text, {
                            variant: 'text-xs/normal',
                            children: E.intl.format(E.t.bTMjiI, {
                                planName: p.ZP.getDisplayPremiumType(b.planId),
                                endsAt: A.toDate()
                            })
                        }),
                        (0, i.jsx)('div', {
                            children: (0, i.jsx)(u.eee, {
                                onClick: () => {
                                    (0, h.A3)(n), t(), d.Z.open(m.oAB.PREMIUM);
                                },
                                children: E.intl.string(E.t.W3aavr)
                            })
                        })
                    ]
                }),
                (0, i.jsx)(u.P3F, {
                    onClick: () => {
                        l.K.set(y, N), (I = N), T(!0);
                    },
                    children: (0, i.jsx)(u.Dio, {
                        size: 'md',
                        color: 'currentColor',
                        className: v.premiumRetentionNoticeClose
                    })
                })
            ]
        });
    };
