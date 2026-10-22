n.d(t, { A: () => A, j: () => y });
var l = n(477900),
    o = n(582128),
    r = n(192308),
    i = n(28863),
    a = n(683071),
    u = n(308528),
    s = n(913122),
    c = n(136857),
    d = n(211083),
    C = n(655857),
    h = n(123816),
    p = n(834981),
    m = n(975571),
    E = n(166532),
    _ = n(652215),
    f = n(105292);
function y(e) {
    let { planError: t, hasSelectedPaymentElementSourceType: n } = e,
        { paymentError: a } = (0, d.o)(),
        { dropdownCurrencies: y } = (0, C.Jn)(),
        { purchaseError: A, purchasePreviewError: g } = (0, h.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        N = null;
    null != g ? (N = g) : null != a && (0, E.h5)(a, n) ? (N = a) : null != A ? (N = A) : null != t && (N = t);
    let S = (0, p.vx)(),
        I = o.useCallback(() => {
            ((0, r.closeAllModals)(), u.A.openPrivateChannel({ recipientIds: S }));
        }, [S]),
        T = y.length > 1,
        O = null != N ? N.message : "";
    if (
        null != N &&
        N instanceof s.Ey &&
        (N.code === c.tG.CARD_DECLINED && T && (O += ` ${f.intl.string(f.t.iWvwQS)}`),
        N.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (O = f.intl.string(f.t.ypuSd8)),
        N.code === _.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (O = f.intl.string(f.t.mXMmWE)),
        N.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (O = f.intl.string(f.t.mC1Fjz)),
        (N.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || N.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (O = f.intl.format(f.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    S.length > 0
                        ? (0, l.jsx)(i.Anchor, { onClick: I, children: e }, t)
                        : (0, l.jsx)(o.Fragment, { children: e }, t),
            })),
        N.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = f.intl.format(f.t.BPDKoA, {
            helpdeskArticle: m.A.getArticleURL(_.MVz.BILLING).concat(_.bNI.INVALID_BILLING_ADDRESS),
        });
        O = (0, l.jsxs)(l.Fragment, { children: [f.intl.string(f.t["yVIm/G"]), " ", e] });
    }
    return { error: N, errorMessage: O };
}
function A(e) {
    let { planError: t, purchaseErrorBlockRef: n, hasSelectedPaymentElementSourceType: o, className: r } = e,
        { error: i, errorMessage: u } = y({ planError: t, hasSelectedPaymentElementSourceType: o });
    return null == i
        ? null
        : (0, l.jsx)("div", { ref: n, className: r, children: (0, l.jsx)(a.w, { type: "critical", children: u }) });
}
