n.d(t, { A: () => m, e: () => p });
var l = n(627968);
n(64700);
var i = n(683071),
    a = n(198982),
    r = n(136857),
    s = n(975571),
    o = n(156312),
    u = n(166532),
    c = n(652215),
    d = n(985018);
let p = (e) => {
    let { planError: t } = e,
        { currencies: n, paymentError: i, purchaseError: p, purchasePreviewError: m } = (0, o.P5)(),
        h = null;
    null != m ? (h = m) : null != i && null == (0, u.ou)(i) ? (h = i) : null != p ? (h = p) : null != t && (h = t);
    let A = n.length > 1,
        _ = null != h ? h.message : "";
    if (
        null != h &&
        h instanceof a.Ey &&
        (h.code === r.tG.CARD_DECLINED && A && (_ += ` ${d.intl.string(d.t.iWvwQS)}`),
        h.code === r.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (_ = d.intl.string(d.t.ypuSd8)),
        h.code === c.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (_ = d.intl.string(d.t.mXMmWE)),
        h.code === r.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (_ = d.intl.string(d.t.mC1Fjz)),
        h.code === r.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = d.intl.format(d.t.BPDKoA, {
            helpdeskArticle: s.A.getArticleURL(c.MVz.BILLING).concat(c.bNI.INVALID_BILLING_ADDRESS),
        });
        _ = (0, l.jsxs)(l.Fragment, { children: [d.intl.string(d.t["yVIm/G"]), " ", e] });
    }
    return { error: h, errorMessage: _ };
};
function m(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: a } = e,
        { error: r, errorMessage: s } = p({ planError: t });
    return null == r
        ? null
        : (0, l.jsx)("div", { ref: n, className: a, children: (0, l.jsx)(i.w, { type: "critical", children: s }) });
}
