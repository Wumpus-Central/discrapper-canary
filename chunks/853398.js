"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(17928),
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
    let f = (0, r.bG)([s.A], () => {
            let e = s.A.getPlanIdsForSkus(n).filter((e) => !c || o.JM.has(e));
            return e.length > 0 ? s.A.get(e[0]) : null;
        }),
        h = null == f ? [] : (0, a._w)(f.id, u, c),
        p = h.find((e) => e === t?.currency) ?? h[0] ?? l.Yr.USD,
        E = (0, a.Yk)({
            initialCurrency: p,
            subscriptionPlanId: f?.id,
            paymentSourceId: u,
            isGift: c,
            skuIDs: n,
            excludeSubscriptionPlansBySKU: d,
        }),
        { allowedCurrencies: m, invoiceCurrency: g } = i.useMemo(
            () =>
                null == _
                    ? { allowedCurrencies: [], invoiceCurrency: void 0 }
                    : { allowedCurrencies: _.checkoutContext?.allowed_currencies ?? [], invoiceCurrency: _.currency },
            [_],
        ),
        A = m.length > 0 ? m : h,
        I = E.priceOptions.currency,
        T = i.useMemo(() => (null != I ? I : null != g ? g : A.length > 0 ? A[0] : void 0), [I, g, A]);
    return { ...E, currencies: A, displayCurrency: T };
}
