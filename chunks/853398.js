"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(311907),
    s = n(97352),
    a = n(83617),
    o = n(788868),
    l = n(818348);
function u(e) {
    let {
        activeSubscription: t,
        skuIDs: n,
        paymentSourceId: u,
        isGift: c,
        excludeSubscriptionPlansBySKU: d,
        checkoutInvoicePreview: _,
    } = e;
    n = n.filter((e) => e !== o.pe.NONE);
    let f = (0, i.bG)([s.A], () => {
            let e = s.A.getPlanIdsForSkus(n).filter((e) => !c || o.JM.has(e));
            return e.length > 0 ? s.A.get(e[0]) : null;
        }),
        p = null == f ? [] : (0, a._w)(f.id, u, c),
        h = p.find((e) => e === t?.currency) ?? p[0] ?? l.Yr.USD,
        E = (0, a.Yk)({
            initialCurrency: h,
            subscriptionPlanId: f?.id,
            paymentSourceId: u,
            isGift: c,
            skuIDs: n,
            excludeSubscriptionPlansBySKU: d,
        }),
        { allowedCurrencies: m, invoiceCurrency: g } = r.useMemo(
            () =>
                null == _
                    ? { allowedCurrencies: [], invoiceCurrency: void 0 }
                    : { allowedCurrencies: _.checkoutContext?.allowed_currencies ?? [], invoiceCurrency: _.currency },
            [_],
        ),
        A = m.length > 0 ? m : p,
        I = E.priceOptions.currency,
        T = r.useMemo(() => (null != I ? I : null != g ? g : A.length > 0 ? A[0] : void 0), [I, g, A]);
    return { ...E, currencies: A, displayCurrency: T };
}
