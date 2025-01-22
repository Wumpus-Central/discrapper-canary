var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(913527),
    l = r.n(s),
    u = r(442837),
    c = r(433517),
    d = r(481060),
    f = r(355467),
    p = r(230711),
    h = r(436774),
    _ = r(78839),
    m = r(74538),
    g = r(543241),
    E = r(981631),
    v = r(474936),
    y = r(388032),
    b = r(888084);
let I = 'premiumRetentionEmojiPickerNotice',
    T = c.K.get(I),
    S = (e) => {
        let { closePopout: n, channel: r } = e,
            [i, s] = o.useState(!1),
            { subscription: S, hasFetchedSubscriptions: A } = (0, u.cj)([_.ZP], () => ({
                subscription: _.ZP.getPremiumSubscription(),
                hasFetchedSubscriptions: _.ZP.hasFetchedSubscriptions()
            }));
        if (
            (o.useEffect(() => {
                !A && (0, f.jg)();
            }, [A]),
            null == S || !(0, m.zV)(S.status) || i)
        )
            return null;
        let C = S.status === E.O0b.PAST_DUE ? (0, m.lY)(S).expiresDate : l()(S.currentPeriodStart).add(v.gh),
            N = ''.concat(S.id, ':').concat(C.toISOString());
        if (T === N) return null;
        let R = m.ZP.getPremiumType(S.planId) === v.p9.TIER_0 ? h.JX.PREMIUM_TIER_0 : m.ZP.getPremiumType(S.planId) === v.p9.TIER_1 ? h.JX.PREMIUM_TIER_1 : h.JX.PREMIUM_TIER_2;
        return (0, a.jsxs)('div', {
            className: b.premiumRetentionNotice,
            children: [
                (0, a.jsx)(d.NitroWheelIcon, {
                    size: 'md',
                    className: b.premiumRetentionNoticeIcon,
                    color: R
                }),
                (0, a.jsxs)('div', {
                    className: b.premiumRetentionNoticeContent,
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: 'text-xs/normal',
                            children: y.intl.format(y.t.bTMjiI, {
                                planName: m.ZP.getDisplayPremiumType(S.planId),
                                endsAt: C.toDate()
                            })
                        }),
                        (0, a.jsx)('div', {
                            children: (0, a.jsx)(d.Anchor, {
                                onClick: () => {
                                    (0, g.A3)(r), n(), p.Z.open(E.oAB.PREMIUM);
                                },
                                children: y.intl.string(y.t.W3aavr)
                            })
                        })
                    ]
                }),
                (0, a.jsx)(d.Clickable, {
                    onClick: () => {
                        c.K.set(I, N), (T = N), s(!0);
                    },
                    children: (0, a.jsx)(d.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: b.premiumRetentionNoticeClose
                    })
                })
            ]
        });
    };
n.Z = S;
