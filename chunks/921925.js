n.d(t, { A: () => A, e: () => h });
var l = n(627968);
n(64700);
var r = n(683071),
    i = n(913122),
    a = n(136857),
    s = n(211083),
    o = n(655857),
    u = n(722847),
    c = n(975571),
    d = n(166532),
    p = n(652215),
    m = n(375708);
let h = (e) => {
    let { planError: t } = e,
        { paymentError: n } = (0, s.o)(),
        { dropdownCurrencies: r } = (0, o.Jn)(),
        { purchaseError: h, purchasePreviewError: A } = (0, u.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        C = null;
    null != A ? (C = A) : null != n && null == (0, d.ou)(n) ? (C = n) : null != h ? (C = h) : null != t && (C = t);
    let E = r.length > 1,
        y = null != C ? C.message : "";
    if (
        null != C &&
        C instanceof i.Ey &&
        (C.code === a.tG.CARD_DECLINED && E && (y += ` ${m.intl.string(m.t.iWvwQS)}`),
        C.code === a.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (y = m.intl.string(m.t.ypuSd8)),
        C.code === p.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (y = m.intl.string(m.t.mXMmWE)),
        C.code === a.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (y = m.intl.string(m.t.mC1Fjz)),
        C.code === a.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = m.intl.format(m.t.BPDKoA, {
            helpdeskArticle: c.A.getArticleURL(p.MVz.BILLING).concat(p.bNI.INVALID_BILLING_ADDRESS),
        });
        y = (0, l.jsxs)(l.Fragment, { children: [m.intl.string(m.t["yVIm/G"]), " ", e] });
    }
    return { error: C, errorMessage: y };
};
function A(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: i } = e,
        { error: a, errorMessage: s } = h({ planError: t });
    return null == a
        ? null
        : (0, l.jsx)("div", { ref: n, className: i, children: (0, l.jsx)(r.w, { type: "critical", children: s }) });
}
