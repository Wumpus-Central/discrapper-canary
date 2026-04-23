n.d(t, { A: () => p, e: () => _ });
var r = n(627968);
n(64700);
var a = n(683071),
    i = n(845584),
    o = n(136857),
    l = n(975571),
    s = n(156312),
    d = n(166532),
    u = n(652215),
    c = n(985018);
let _ = (e) => {
    let { planError: t } = e,
        { currencies: n, paymentError: a, purchaseError: _, purchasePreviewError: p } = (0, s.P5)(),
        C = null;
    null != p ? (C = p) : null != a && null == (0, d.ou)(a) ? (C = a) : null != _ ? (C = _) : null != t && (C = t);
    let h = n.length > 1,
        E = null != C ? C.message : "";
    if (
        null != C &&
        C instanceof i.Ey &&
        (C.code === o.tG.CARD_DECLINED && h && (E += ` ${c.intl.string(c.t.iWvwQS)}`),
        C.code === o.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (E = c.intl.string(c.t.ypuSd8)),
        C.code === u.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (E = c.intl.string(c.t.mXMmWE)),
        C.code === o.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (E = c.intl.string(c.t.mC1Fjz)),
        C.code === o.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = c.intl.format(c.t.BPDKoA, {
            helpdeskArticle: l.A.getArticleURL(u.MVz.BILLING).concat(u.bNI.INVALID_BILLING_ADDRESS),
        });
        E = (0, r.jsxs)(r.Fragment, { children: [c.intl.string(c.t["yVIm/G"]), " ", e] });
    }
    return { error: C, errorMessage: E };
};
function p(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: i } = e,
        { error: o, errorMessage: l } = _({ planError: t });
    return null == o
        ? null
        : (0, r.jsx)("div", { ref: n, className: i, children: (0, r.jsx)(a.w, { type: "critical", children: l }) });
}
