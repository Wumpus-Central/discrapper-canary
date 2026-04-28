l.d(e, { A: () => N, e: () => m });
var n = l(627968);
l(64700);
var r = l(683071),
    i = l(845584),
    s = l(136857),
    a = l(975571),
    c = l(156312),
    o = l(166532),
    u = l(652215),
    d = l(985018);
let m = (t) => {
    let { planError: e } = t,
        { currencies: l, paymentError: r, purchaseError: m, purchasePreviewError: N } = (0, c.P5)(),
        x = null;
    null != N ? (x = N) : null != r && null == (0, o.ou)(r) ? (x = r) : null != m ? (x = m) : null != e && (x = e);
    let h = l.length > 1,
        C = null != x ? x.message : "";
    if (
        null != x &&
        x instanceof i.Ey &&
        (x.code === s.tG.CARD_DECLINED && h && (C += ` ${d.intl.string(d.t.iWvwQS)}`),
        x.code === s.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (C = d.intl.string(d.t.ypuSd8)),
        x.code === u.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (C = d.intl.string(d.t.mXMmWE)),
        x.code === s.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (C = d.intl.string(d.t.mC1Fjz)),
        x.code === s.tG.INVALID_BILLING_ADDRESS)
    ) {
        let t = d.intl.format(d.t.BPDKoA, {
            helpdeskArticle: a.A.getArticleURL(u.MVz.BILLING).concat(u.bNI.INVALID_BILLING_ADDRESS),
        });
        C = (0, n.jsxs)(n.Fragment, { children: [d.intl.string(d.t["yVIm/G"]), " ", t] });
    }
    return { error: x, errorMessage: C };
};
function N(t) {
    let { planError: e, purchaseErrorBlockRef: l, className: i } = t,
        { error: s, errorMessage: a } = m({ planError: e });
    return null == s
        ? null
        : (0, n.jsx)("div", { ref: l, className: i, children: (0, n.jsx)(r.w, { type: "critical", children: a }) });
}
