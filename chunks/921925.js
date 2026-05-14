n.d(t, { A: () => h, e: () => m });
var l = n(627968);
n(64700);
var a = n(683071),
    i = n(913122),
    r = n(136857),
    s = n(94420),
    o = n(975571),
    u = n(834252),
    c = n(166532),
    d = n(652215),
    p = n(375708);
let m = (e) => {
    let { planError: t } = e,
        { currencies: n, paymentError: a, purchasePreviewError: m } = (0, u.P5)(),
        h = (0, s.t4)((e) => e.purchaseError),
        C = null;
    null != m ? (C = m) : null != a && null == (0, c.ou)(a) ? (C = a) : null != h ? (C = h) : null != t && (C = t);
    let A = n.length > 1,
        E = null != C ? C.message : "";
    if (
        null != C &&
        C instanceof i.Ey &&
        (C.code === r.tG.CARD_DECLINED && A && (E += ` ${p.intl.string(p.t.iWvwQS)}`),
        C.code === r.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (E = p.intl.string(p.t.ypuSd8)),
        C.code === d.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (E = p.intl.string(p.t.mXMmWE)),
        C.code === r.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (E = p.intl.string(p.t.mC1Fjz)),
        C.code === r.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = p.intl.format(p.t.BPDKoA, {
            helpdeskArticle: o.A.getArticleURL(d.MVz.BILLING).concat(d.bNI.INVALID_BILLING_ADDRESS),
        });
        E = (0, l.jsxs)(l.Fragment, { children: [p.intl.string(p.t["yVIm/G"]), " ", e] });
    }
    return { error: C, errorMessage: E };
};
function h(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: i } = e,
        { error: r, errorMessage: s } = m({ planError: t });
    return null == r
        ? null
        : (0, l.jsx)("div", { ref: n, className: i, children: (0, l.jsx)(a.w, { type: "critical", children: s }) });
}
