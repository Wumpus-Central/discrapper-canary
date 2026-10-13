t.d(a, { A: () => _, j: () => y });
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
    m = t(504560),
    A = t(834981),
    E = t(975571),
    p = t(166532),
    C = t(652215),
    g = t(660183);
function y(e) {
    let { planError: a, hasSelectedPaymentElementSourceType: t } = e,
        { paymentError: s } = (0, h.o)(),
        { dropdownCurrencies: y } = (0, d.Jn)(),
        { purchaseError: _, purchasePreviewError: P } = (0, m.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        x = null;
    null != P ? (x = P) : null != s && (0, p.h5)(s, t) ? (x = s) : null != _ ? (x = _) : null != a && (x = a);
    let T = (0, A.vx)(),
        f = n.useCallback(() => {
            ((0, r.closeAllModals)(), u.A.openPrivateChannel({ recipientIds: T }));
        }, [T]),
        M = y.length > 1,
        I = null != x ? x.message : "";
    if (
        null != x &&
        x instanceof o.Ey &&
        (x.code === c.tG.CARD_DECLINED && M && (I += ` ${g.intl.string(g.t.iWvwQS)}`),
        x.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (I = g.intl.string(g.t.ypuSd8)),
        x.code === C.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (I = g.intl.string(g.t.mXMmWE)),
        x.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (I = g.intl.string(g.t.mC1Fjz)),
        (x.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || x.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (I = g.intl.format(g.t["mv/fF2"], {
                guardianHook: (e, a) =>
                    T.length > 0
                        ? (0, l.jsx)(i.Anchor, { onClick: f, children: e }, a)
                        : (0, l.jsx)(n.Fragment, { children: e }, a),
            })),
        x.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = g.intl.format(g.t.BPDKoA, {
            helpdeskArticle: E.A.getArticleURL(C.MVz.BILLING).concat(C.bNI.INVALID_BILLING_ADDRESS),
        });
        I = (0, l.jsxs)(l.Fragment, { children: [g.intl.string(g.t["yVIm/G"]), " ", e] });
    }
    return { error: x, errorMessage: I };
}
function _(e) {
    let { planError: a, purchaseErrorBlockRef: t, hasSelectedPaymentElementSourceType: n, className: r } = e,
        { error: i, errorMessage: u } = y({ planError: a, hasSelectedPaymentElementSourceType: n });
    return null == i
        ? null
        : (0, l.jsx)("div", { ref: t, className: r, children: (0, l.jsx)(s.w, { type: "critical", children: u }) });
}
