t.d(n, { A: () => C, j: () => g });
var l = t(477900),
    r = t(582128),
    i = t(192308),
    a = t(28863),
    s = t(683071),
    u = t(308528),
    c = t(913122),
    o = t(136857),
    d = t(211083),
    m = t(655857),
    h = t(642639),
    E = t(834981),
    f = t(975571),
    A = t(166532),
    p = t(652215),
    N = t(660183);
function g(e) {
    let { planError: n, hasSelectedPaymentElementSourceType: t } = e,
        { paymentError: s } = (0, d.o)(),
        { dropdownCurrencies: g } = (0, m.Jn)(),
        { purchaseError: C, purchasePreviewError: x } = (0, h.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        y = null;
    null != x ? (y = x) : null != s && (0, A.h5)(s, t) ? (y = s) : null != C ? (y = C) : null != n && (y = n);
    let j = (0, E.vx)(),
        v = r.useCallback(() => {
            ((0, i.closeAllModals)(), u.A.openPrivateChannel({ recipientIds: j }));
        }, [j]),
        _ = g.length > 1,
        I = null != y ? y.message : "";
    if (
        null != y &&
        y instanceof c.Ey &&
        (y.code === o.tG.CARD_DECLINED && _ && (I += ` ${N.intl.string(N.t.iWvwQS)}`),
        y.code === o.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (I = N.intl.string(N.t.ypuSd8)),
        y.code === p.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (I = N.intl.string(N.t.mXMmWE)),
        y.code === o.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (I = N.intl.string(N.t.mC1Fjz)),
        (y.code === o.tG.BILLING_SPENDING_LIMIT_REACHED || y.code === o.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (I = N.intl.format(N.t["mv/fF2"], {
                guardianHook: (e, n) =>
                    j.length > 0
                        ? (0, l.jsx)(a.Anchor, { onClick: v, children: e }, n)
                        : (0, l.jsx)(r.Fragment, { children: e }, n),
            })),
        y.code === o.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = N.intl.format(N.t.BPDKoA, {
            helpdeskArticle: f.A.getArticleURL(p.MVz.BILLING).concat(p.bNI.INVALID_BILLING_ADDRESS),
        });
        I = (0, l.jsxs)(l.Fragment, { children: [N.intl.string(N.t["yVIm/G"]), " ", e] });
    }
    return { error: y, errorMessage: I };
}
function C(e) {
    let { planError: n, purchaseErrorBlockRef: t, hasSelectedPaymentElementSourceType: r, className: i } = e,
        { error: a, errorMessage: u } = g({ planError: n, hasSelectedPaymentElementSourceType: r });
    return null == a
        ? null
        : (0, l.jsx)("div", { ref: t, className: i, children: (0, l.jsx)(s.w, { type: "critical", children: u }) });
}
