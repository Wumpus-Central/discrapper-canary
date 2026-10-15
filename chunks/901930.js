t.d(a, { A: () => _, j: () => f });
var l = t(477900),
    n = t(582128),
    r = t(192308),
    i = t(28863),
    s = t(683071),
    u = t(308528),
    o = t(913122),
    c = t(136857),
    h = t(211083),
    d = t(655857),
    m = t(123816),
    A = t(834981),
    E = t(975571),
    p = t(166532),
    C = t(652215),
    y = t(660183);
function f(e) {
    let { planError: a, hasSelectedPaymentElementSourceType: t } = e,
        { paymentError: s } = (0, h.o)(),
        { dropdownCurrencies: f } = (0, d.Jn)(),
        { purchaseError: _, purchasePreviewError: g } = (0, m.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        x = null;
    null != g ? (x = g) : null != s && (0, p.h5)(s, t) ? (x = s) : null != _ ? (x = _) : null != a && (x = a);
    let P = (0, A.vx)(),
        T = n.useCallback(() => {
            ((0, r.closeAllModals)(), u.A.openPrivateChannel({ recipientIds: P }));
        }, [P]),
        I = f.length > 1,
        M = null != x ? x.message : "";
    if (
        null != x &&
        x instanceof o.Ey &&
        (x.code === c.tG.CARD_DECLINED && I && (M += ` ${y.intl.string(y.t.iWvwQS)}`),
        x.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (M = y.intl.string(y.t.ypuSd8)),
        x.code === C.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (M = y.intl.string(y.t.mXMmWE)),
        x.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (M = y.intl.string(y.t.mC1Fjz)),
        (x.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || x.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (M = y.intl.format(y.t["mv/fF2"], {
                guardianHook: (e, a) =>
                    P.length > 0
                        ? (0, l.jsx)(i.Anchor, { onClick: T, children: e }, a)
                        : (0, l.jsx)(n.Fragment, { children: e }, a),
            })),
        x.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = y.intl.format(y.t.BPDKoA, {
            helpdeskArticle: E.A.getArticleURL(C.MVz.BILLING).concat(C.bNI.INVALID_BILLING_ADDRESS),
        });
        M = (0, l.jsxs)(l.Fragment, { children: [y.intl.string(y.t["yVIm/G"]), " ", e] });
    }
    return { error: x, errorMessage: M };
}
function _(e) {
    let { planError: a, purchaseErrorBlockRef: t, hasSelectedPaymentElementSourceType: n, className: r } = e,
        { error: i, errorMessage: u } = f({ planError: a, hasSelectedPaymentElementSourceType: n });
    return null == i
        ? null
        : (0, l.jsx)("div", { ref: t, className: r, children: (0, l.jsx)(s.w, { type: "critical", children: u }) });
}
