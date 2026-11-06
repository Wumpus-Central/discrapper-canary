var l = n(477900),
    i = n(582128),
    r = n(192308),
    a = n(858899),
    s = n(28863),
    o = n(683071),
    u = n(627784),
    c = n(136857),
    d = n(211083),
    m = n(655857),
    p = n(516106),
    C = n(834981),
    h = n(327919),
    f = n(975571),
    E = n(166532),
    S = n(652215),
    I = n(792996),
    g = n(665956);
function y(e) {
    let { planError: t, hasSelectedPaymentElementSourceType: n } = e,
        { paymentError: o } = (0, d.o)(),
        { dropdownCurrencies: y } = (0, m.Jn)(),
        { purchaseError: A, purchasePreviewError: P } = (0, p.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        v = null;
    null != P ? (v = P) : null != o && (0, E.h5)(o, n) ? (v = o) : null != A ? (v = A) : null != t && (v = t);
    let x = (0, C.vx)(),
        _ = i.useCallback(() => {
            (0, h.A)(x, r.s7, () =>
                (0, a.P0)({
                    text: I.intl.formatToPlainString(g.default.D1BwNC, { count: x.length }),
                    variant: "critical",
                }),
            );
        }, [x]),
        T = y.length > 1,
        b = null != v ? v.message : "";
    return (
        null != v &&
            v instanceof u.Ey &&
            (v.code === c.tG.CARD_DECLINED && T && (b = `${v.message} ${I.intl.string(I.t.iWvwQS)}`),
            v.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (b = I.intl.string(I.t.ypuSd8)),
            v.code === S.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (b = I.intl.string(I.t.mXMmWE)),
            v.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (b = I.intl.string(I.t.mC1Fjz)),
            (v.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || v.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
                (b = I.intl.format(I.t["mv/fF2"], {
                    guardianHook: (e, t) =>
                        x.length > 0
                            ? (0, l.jsx)(s.Anchor, { onClick: _, children: e }, t)
                            : (0, l.jsx)(i.Fragment, { children: e }, t),
                })),
            v.code === c.tG.INVALID_BILLING_ADDRESS &&
                (b = I.intl.format(I.t.KXodvL, {
                    helpdeskArticle: f.A.getArticleURL(S.MVz.BILLING).concat(S.bNI.INVALID_BILLING_ADDRESS),
                }))),
        { error: v, errorMessage: b }
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { planError: t, purchaseErrorBlockRef: n, hasSelectedPaymentElementSourceType: i, className: r } = e,
                { error: a, errorMessage: s } = y({ planError: t, hasSelectedPaymentElementSourceType: i });
            return null == a
                ? null
                : (0, l.jsx)("div", {
                      ref: n,
                      className: r,
                      children: (0, l.jsx)(o.w, { type: "critical", message: s, role: "alert" }),
                  });
        },
        j: y,
    },
);
