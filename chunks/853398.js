"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(97352),
    s = n(83617),
    a = n(305114),
    o = n(788868),
    l = n(818348);
function u(e) {
    let { activeSubscription: t, skuIDs: n, paymentSourceId: u, isGift: c, excludeSubscriptionPlansBySKU: d } = e;
    n = n.filter((e) => e !== o.pe.NONE);
    let _ = (0, r.bG)([i.A], () => {
            let e = i.A.getPlanIdsForSkus(n).filter((e) => !c || o.JM.has(e));
            return e.length > 0 ? i.A.get(e[0]) : null;
        }),
        f = null == _ ? [] : (0, s._w)(_.id, u, c),
        p = f.find((e) => e === t?.currency) ?? f[0] ?? l.Yr.USD,
        h = (0, s.Yk)({
            initialCurrency: p,
            subscriptionPlanId: _?.id,
            paymentSourceId: u,
            isGift: c,
            skuIDs: n,
            excludeSubscriptionPlansBySKU: d,
        }),
        m = (0, r.yK)([a.A], () => a.A.getSubscriptionPreviewAllowedCurrencies(u), [u]),
        E = m.length > 0 ? m : f,
        g = h.priceOptions.currency ?? E[0];
    return { ...h, currencies: E, displayCurrency: g };
}
