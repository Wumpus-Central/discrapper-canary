n.d(t, { A: () => u });
var o = n(64700),
    r = n(17928),
    i = n(97352),
    a = n(83617),
    l = n(788868),
    s = n(818348);
function u(e) {
    let {
        activeSubscription: t,
        skuIDs: n,
        paymentSourceId: u,
        isGift: _,
        excludeSubscriptionPlansBySKU: d,
        checkoutInvoicePreview: C,
    } = e;
    n = n.filter((e) => e !== l.pe.NONE);
    let E = (0, r.bG)([i.A], () => {
            let e = i.A.getPlanIdsForSkus(n).filter((e) => !_ || l.JM.has(e));
            return e.length > 0 ? i.A.get(e[0]) : null;
        }),
        p = null == E ? [] : (0, a._w)(E.id, u, _),
        h = p.find((e) => e === t?.currency) ?? p[0] ?? s.Yr.USD,
        c = (0, a.Yk)({
            initialCurrency: h,
            subscriptionPlanId: E?.id,
            paymentSourceId: u,
            isGift: _,
            skuIDs: n,
            excludeSubscriptionPlansBySKU: d,
        }),
        { allowedCurrencies: A, invoiceCurrency: I } = o.useMemo(
            () =>
                null == C
                    ? { allowedCurrencies: [], invoiceCurrency: void 0 }
                    : { allowedCurrencies: C.checkoutContext?.allowed_currencies ?? [], invoiceCurrency: C.currency },
            [C],
        ),
        y = A.length > 0 ? A : p,
        m = c.priceOptions.currency,
        T = o.useMemo(() => (null != m ? m : null != I ? I : y.length > 0 ? y[0] : void 0), [m, I, y]);
    return { ...c, currencies: y, displayCurrency: T };
}
