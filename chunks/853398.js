"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(97352),
    s = n(83617),
    a = n(788868),
    o = n(818348);
function l(e) {
    let { activeSubscription: t, skuIDs: n, paymentSourceId: l, isGift: u, excludeSubscriptionPlansBySKU: c } = e;
    n = n.filter((e) => e !== a.pe.NONE);
    let d = (0, r.bG)([i.A], () => {
            let e = i.A.getPlanIdsForSkus(n).filter((e) => !u || a.JM.has(e));
            return e.length > 0 ? i.A.get(e[0]) : null;
        }),
        _ = null == d ? [] : (0, s._w)(d.id, l, u),
        f = _.find((e) => e === t?.currency) ?? _[0] ?? o.Yr.USD;
    return {
        ...(0, s.Yk)({
            initialCurrency: f,
            subscriptionPlanId: d?.id,
            paymentSourceId: l,
            isGift: u,
            skuIDs: n,
            excludeSubscriptionPlansBySKU: c,
        }),
        currencies: _,
    };
}
