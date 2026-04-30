n.d(t, { A: () => s });
var o = n(64700),
    r = n(17928),
    a = n(97352),
    i = n(83617),
    l = n(788868),
    u = n(818348);
function s(e) {
    let {
        activeSubscription: t,
        skuIDs: n,
        paymentSourceId: s,
        isGift: _,
        excludeSubscriptionPlansBySKU: d,
        checkoutInvoicePreview: C,
    } = e;
    n = n.filter((e) => e !== l.pe.NONE);
    let E = (0, r.bG)([a.A], () => {
            let e = a.A.getPlanIdsForSkus(n).filter((e) => !_ || l.JM.has(e));
            return e.length > 0 ? a.A.get(e[0]) : null;
        }),
        p = null == E ? [] : (0, i._w)(E.id, s, _),
        h = p.find((e) => e === t?.currency) ?? p[0] ?? u.Yr.USD,
        c = (0, i.Yk)({
            initialCurrency: h,
            subscriptionPlanId: E?.id,
            paymentSourceId: s,
            isGift: _,
            skuIDs: n,
            excludeSubscriptionPlansBySKU: d,
        }),
        { allowedCurrencies: A, invoiceCurrency: y } = o.useMemo(
            () =>
                null == C
                    ? { allowedCurrencies: [], invoiceCurrency: void 0 }
                    : { allowedCurrencies: C.checkoutContext?.allowed_currencies ?? [], invoiceCurrency: C.currency },
            [C],
        ),
        I = A.length > 0 ? A : p,
        m = c.priceOptions.currency,
        T = o.useMemo(() => (null != m ? m : null != y ? y : I.length > 0 ? I[0] : void 0), [m, y, I]);
    return { ...c, currencies: I, displayCurrency: T };
}
