var l = n(477900);
n(582128);
var i = n(683071),
    r = n(627784),
    a = n(136857),
    s = n(211083),
    o = n(655857),
    u = n(682689),
    c = n(975571),
    d = n(166532),
    m = n(43420),
    p = n(652215),
    C = n(792996);
function h(e) {
    let { planError: t, hasSelectedPaymentElementSourceType: n } = e,
        { paymentError: l } = (0, s.o)(),
        { dropdownCurrencies: i } = (0, o.Jn)(),
        { purchaseError: h, purchasePreviewError: f } = (0, u.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        E = null;
    null != f ? (E = f) : null != l && (0, d.h5)(l, n) ? (E = l) : null != h ? (E = h) : null != t && (E = t);
    let S = (0, m.s)(),
        I = i.length > 1,
        g = null != E ? E.message : "";
    return (
        null != E &&
            E instanceof r.Ey &&
            (E.code === a.tG.CARD_DECLINED && I && (g = `${E.message} ${C.intl.string(C.t.iWvwQS)}`),
            E.code === a.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (g = C.intl.string(C.t.ypuSd8)),
            E.code === p.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (g = C.intl.string(C.t.mXMmWE)),
            E.code === a.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (g = C.intl.string(C.t.mC1Fjz)),
            (E.code === a.tG.BILLING_SPENDING_LIMIT_REACHED || E.code === a.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
                (g = S),
            E.code === a.tG.INVALID_BILLING_ADDRESS &&
                (g = C.intl.format(C.t.KXodvL, {
                    helpdeskArticle: c.A.getArticleURL(p.MVz.BILLING).concat(p.bNI.INVALID_BILLING_ADDRESS),
                }))),
        { error: E, errorMessage: g }
    );
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { planError: t, purchaseErrorBlockRef: n, hasSelectedPaymentElementSourceType: r, className: a } = e,
                { error: s, errorMessage: o } = h({ planError: t, hasSelectedPaymentElementSourceType: r });
            return null == s
                ? null
                : (0, l.jsx)("div", {
                      ref: n,
                      className: a,
                      children: (0, l.jsx)(i.w, { type: "critical", message: o, role: "alert" }),
                  });
        },
        j: h,
    },
);
