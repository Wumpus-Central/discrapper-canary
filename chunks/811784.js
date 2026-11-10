n(321073);
var i = n(160517),
    r = n(856793),
    a = n(792673),
    s = n(804638),
    l = n(822571),
    o = n(365977),
    d = n(474090),
    c = n(767589),
    u = n(682901);
n.d(
    t,
    {},
    {
        resolveCampaignComponents: function (e, t, n, _, E) {
            let A = i.j.DESKTOP,
                f = e.filter(
                    (e) =>
                        e.platform === A &&
                        !(function (e) {
                            return (0, c.ii)(s.m, e.properties).isDefaultBase;
                        })(e),
                ),
                h = new Map();
            for (let e of f) {
                let t = e.component_type,
                    n = h.get(t) ?? [];
                (n.push(e), h.set(t, n));
            }
            return Array.from(h.values()).flatMap((e) => {
                let i = e.filter((e) =>
                    (function (e, t, n) {
                        if (null == e.premium_type) return !1;
                        let i = 0 === e.premium_type ? !(0, d.ki)(t) : (0, d.YE)(t, e.premium_type),
                            s = void 0 === n ? i : e.premium_type === (n ?? 0),
                            l = (function (e, t) {
                                if (void 0 === t) return e.premiumState;
                                if (null === t) return { premiumSource: r.f.NONE, premiumSubscriptionType: a.j.NONE };
                                let n = {
                                    [u.PremiumTypes.TIER_0]: a.j.TIER_0,
                                    [u.PremiumTypes.TIER_1]: a.j.TIER_1,
                                    [u.PremiumTypes.TIER_2]: a.j.TIER_2,
                                };
                                return { premiumSource: r.f.SUBSCRIPTION, premiumSubscriptionType: n[t] };
                            })(t, n);
                        return (
                            s &&
                            (l?.premiumSource == null || e.premium_source === l.premiumSource) &&
                            (l?.premiumSubscriptionType == null ||
                                e.premium_subscription_type === l.premiumSubscriptionType)
                        );
                    })(e, t, E),
                );
                return (
                    i.length > 0
                        ? i
                        : e.filter(
                              (e) =>
                                  null == e.premium_type &&
                                  null == e.premium_source &&
                                  null == e.premium_subscription_type,
                          )
                ).map((e) => {
                    var t, i, r;
                    let a, d;
                    return (
                        (t = e),
                        (i = n),
                        (r = _),
                        (a = (0, o.v)((0, c.ii)(s.m, t.properties), i)),
                        (d = (function (e) {
                            if (null == e) return null;
                            let t = Date.parse(e);
                            return Number.isNaN(t) ? null : t;
                        })(r)),
                        new l.A({
                            id: t.id,
                            componentType: t.component_type,
                            properties: a,
                            promotionId: t.promotion_id,
                            startDate: null,
                            endDate: null,
                            effectiveStartDate: null,
                            effectiveEndDate: null,
                            promotionEndDate: null == d ? null : new Date(d),
                            promotionPriority: 0,
                        })
                    );
                });
            });
        },
    },
);
