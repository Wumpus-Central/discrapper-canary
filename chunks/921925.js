n.d(t, { A: () => m, e: () => p });
var l = n(627968);
n(64700);
var a = n(683071),
    i = n(845584),
    r = n(136857),
    s = n(975571),
    o = n(49960),
    u = n(166532),
    c = n(652215),
    d = n(375708);
let p = (e) => {
    let { planError: t } = e,
        { currencies: n, paymentError: a, purchaseError: p, purchasePreviewError: m } = (0, o.P5)(),
        h = null;
    null != m ? (h = m) : null != a && null == (0, u.ou)(a) ? (h = a) : null != p ? (h = p) : null != t && (h = t);
    let C = n.length > 1,
        A = null != h ? h.message : "";
    if (
        null != h &&
        h instanceof i.Ey &&
        (h.code === r.tG.CARD_DECLINED && C && (A += ` ${d.intl.string(d.t.iWvwQS)}`),
        h.code === r.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (A = d.intl.string(d.t.ypuSd8)),
        h.code === c.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (A = d.intl.string(d.t.mXMmWE)),
        h.code === r.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (A = d.intl.string(d.t.mC1Fjz)),
        h.code === r.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = d.intl.format(d.t.BPDKoA, {
            helpdeskArticle: s.A.getArticleURL(c.MVz.BILLING).concat(c.bNI.INVALID_BILLING_ADDRESS),
        });
        A = (0, l.jsxs)(l.Fragment, { children: [d.intl.string(d.t["yVIm/G"]), " ", e] });
    }
    return { error: h, errorMessage: A };
};
function m(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: i } = e,
        { error: r, errorMessage: s } = p({ planError: t });
    return null == r
        ? null
        : (0, l.jsx)("div", { ref: n, className: i, children: (0, l.jsx)(a.w, { type: "critical", children: s }) });
}
