var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(913527),
    l = r.n(o),
    u = r(442837),
    c = r(433517),
    d = r(481060),
    f = r(355467),
    _ = r(230711),
    h = r(436774),
    p = r(78839),
    m = r(74538),
    g = r(543241),
    E = r(981631),
    v = r(474936),
    I = r(388032),
    T = r(888084);
let b = 'premiumRetentionEmojiPickerNotice',
    y = c.K.get(b),
    S = (e) => {
        let { closePopout: n, channel: r } = e,
            [i, o] = s.useState(!1),
            { subscription: S, hasFetchedSubscriptions: A } = (0, u.cj)([p.ZP], () => ({
                subscription: p.ZP.getPremiumSubscription(),
                hasFetchedSubscriptions: p.ZP.hasFetchedSubscriptions()
            }));
        if (
            (s.useEffect(() => {
                !A && (0, f.jg)();
            }, [A]),
            null == S || !(0, m.zV)(S.status) || i)
        )
            return null;
        let N = S.status === E.O0b.PAST_DUE ? (0, m.lY)(S).expiresDate : l()(S.currentPeriodStart).add(v.gh),
            C = ''.concat(S.id, ':').concat(N.toISOString());
        if (y === C) return null;
        let R = m.ZP.getPremiumType(S.planId) === v.p9.TIER_0 ? h.JX.PREMIUM_TIER_0 : m.ZP.getPremiumType(S.planId) === v.p9.TIER_1 ? h.JX.PREMIUM_TIER_1 : h.JX.PREMIUM_TIER_2;
        return (0, a.jsxs)('div', {
            className: T.premiumRetentionNotice,
            children: [
                (0, a.jsx)(d.NitroWheelIcon, {
                    size: 'md',
                    className: T.premiumRetentionNoticeIcon,
                    color: R
                }),
                (0, a.jsxs)('div', {
                    className: T.premiumRetentionNoticeContent,
                    children: [
                        (0, a.jsx)(d.Text, {
                            variant: 'text-xs/normal',
                            children: I.intl.format(I.t.bTMjiI, {
                                planName: m.ZP.getDisplayPremiumType(S.planId),
                                endsAt: N.toDate()
                            })
                        }),
                        (0, a.jsx)('div', {
                            children: (0, a.jsx)(d.Anchor, {
                                onClick: () => {
                                    (0, g.A3)(r), n(), _.Z.open(E.oAB.PREMIUM);
                                },
                                children: I.intl.string(I.t.W3aavr)
                            })
                        })
                    ]
                }),
                (0, a.jsx)(d.Clickable, {
                    onClick: () => {
                        c.K.set(b, C), (y = C), o(!0);
                    },
                    children: (0, a.jsx)(d.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: T.premiumRetentionNoticeClose
                    })
                })
            ]
        });
    };
n.Z = S;
