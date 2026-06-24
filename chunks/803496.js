"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(655857),
    s = n(83617),
    a = n(788868),
    o = n(818348);
function l(e) {
    let { activeSubscription: t, skuIDs: n, paymentSourceId: l, isGift: u } = e,
        c = n.filter((e) => e !== a.pe.NONE),
        {
            currenciesFromSubscriptionPlan: d,
            subscriptionPlanIdForCurrency: _,
            hasFetchedRelatedSubscriptionPlans: h,
        } = (0, r.ow)({ skuIDs: c, paymentSourceId: l, isGift: u }),
        { priceOptions: f } = (function (e) {
            let {
                    initialCurrency: t,
                    subscriptionPlanId: n,
                    paymentSourceId: r,
                    isGift: a,
                    skuIDs: o,
                    hasFetchedRelatedSubscriptionPlans: l,
                } = e,
                [u, c] = i.useReducer(
                    (e, t) => ({ ...e, ...t }),
                    null != r ? { paymentSourceId: r, currency: t, loaded: !1 } : { currency: t, loaded: !1 },
                ),
                d = JSON.stringify(o),
                _ = i.useRef(o);
            return (
                i.useEffect(() => {
                    _.current = o;
                }),
                i.useEffect(() => {
                    !(async function () {
                        let { current: e } = _;
                        try {
                            e.length > 0 && (await (0, s.c_)(r, e));
                        } catch (e) {
                            if (e.code !== s.oy) throw e;
                        }
                        c({ paymentSourceId: r, currency: void 0, loaded: !0 });
                    })();
                }, [r, d, n, a, l]),
                { priceOptions: u }
            );
        })({
            initialCurrency: d.find((e) => e === t?.currency) ?? d[0] ?? o.Yr.USD,
            subscriptionPlanId: _,
            hasFetchedRelatedSubscriptionPlans: h,
            paymentSourceId: l,
            isGift: u,
            skuIDs: c,
        });
    return { priceOptions: f };
}
