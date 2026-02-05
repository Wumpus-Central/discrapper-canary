"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(97352),
    a = n(83617),
    s = n(788868),
    o = n(818348);
function l(e) {
    let { activeSubscription: t, skuIDs: n, paymentSourceId: l, isGift: u, excludeSubscriptionPlansBySKU: c } = e;
    n = n.filter((e) => e !== s.pe.NONE);
    let d = (0, r.bG)([i.A], () => {
            let e = i.A.getPlanIdsForSkus(n).filter((e) => !u || s.JM.has(e));
            return e.length > 0 ? i.A.get(e[0]) : null;
        }),
        _ = null == d ? [] : (0, a._w)(d.id, l, u),
        f = _.find((e) => e === t?.currency) ?? _[0] ?? o.Yr.USD;
    return {
        ...(0, a.Yk)({
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
