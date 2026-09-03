n.d(t, { A: () => o });
var i = n(582128),
    r = n(655857),
    a = n(83617),
    s = n(202541),
    l = n(818348);
function o(e) {
    let { activeSubscription: t, skuIDs: n, paymentSourceId: o, isGift: d } = e,
        c = n.filter((e) => e !== s.pe.NONE),
        {
            currenciesFromSubscriptionPlan: u,
            subscriptionPlanIdForCurrency: _,
            hasFetchedRelatedSubscriptionPlans: E,
        } = (0, r.ow)({ skuIDs: c, paymentSourceId: o, isGift: d }),
        { priceOptions: A } = (function (e) {
            let {
                    initialCurrency: t,
                    subscriptionPlanId: n,
                    paymentSourceId: r,
                    isGift: s,
                    skuIDs: l,
                    hasFetchedRelatedSubscriptionPlans: o,
                } = e,
                [d, c] = i.useReducer(
                    (e, t) => ({ ...e, ...t }),
                    null != r ? { paymentSourceId: r, currency: t, loaded: !1 } : { currency: t, loaded: !1 },
                ),
                u = JSON.stringify(l),
                _ = i.useRef(l);
            return (
                i.useEffect(() => {
                    _.current = l;
                }),
                i.useEffect(() => {
                    !(async function () {
                        let { current: e } = _;
                        try {
                            e.length > 0 && (await (0, a.c_)(r, e));
                        } catch (e) {
                            if (e.code !== a.oy) throw e;
                        }
                        c({ paymentSourceId: r, currency: void 0, loaded: !0 });
                    })();
                }, [r, u, n, s, o]),
                { priceOptions: d }
            );
        })({
            initialCurrency: u.find((e) => e === t?.currency) ?? u[0] ?? l.Yr.USD,
            subscriptionPlanId: _,
            hasFetchedRelatedSubscriptionPlans: E,
            paymentSourceId: o,
            isGift: d,
            skuIDs: c,
        });
    return { priceOptions: A };
}
