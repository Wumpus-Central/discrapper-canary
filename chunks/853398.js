n.d(t, { A: () => d });
var r = n(64700),
    a = n(17928),
    i = n(97352),
    o = n(83617),
    l = n(788868),
    s = n(818348);
function d(e) {
    let {
        activeSubscription: t,
        skuIDs: n,
        paymentSourceId: d,
        isGift: u,
        excludeSubscriptionPlansBySKU: c,
        checkoutInvoicePreview: _,
    } = e;
    n = n.filter((e) => e !== l.pe.NONE);
    let p = (0, a.bG)([i.A], () => {
            let e = i.A.getPlanIdsForSkus(n).filter((e) => !u || l.JM.has(e));
            return e.length > 0 ? i.A.get(e[0]) : null;
        }),
        C = null == p ? [] : (0, o._w)(p.id, d, u),
        h = C.find((e) => e === t?.currency) ?? C[0] ?? s.Yr.USD,
        E = (0, o.Yk)({
            initialCurrency: h,
            subscriptionPlanId: p?.id,
            paymentSourceId: d,
            isGift: u,
            skuIDs: n,
            excludeSubscriptionPlansBySKU: c,
        }),
        { allowedCurrencies: m, invoiceCurrency: A } = r.useMemo(
            () =>
                null == _
                    ? { allowedCurrencies: [], invoiceCurrency: void 0 }
                    : { allowedCurrencies: _.checkoutContext?.allowed_currencies ?? [], invoiceCurrency: _.currency },
            [_],
        ),
        I = m.length > 0 ? m : C,
        T = E.priceOptions.currency,
        y = r.useMemo(() => (null != T ? T : null != A ? A : I.length > 0 ? I[0] : void 0), [T, A, I]);
    return { ...E, currencies: I, displayCurrency: y };
}
