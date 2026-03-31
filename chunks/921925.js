"use strict";
n.d(t, { A: () => f, e: () => _ });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(198982),
    a = n(136857),
    o = n(975571),
    l = n(156312),
    u = n(166532),
    c = n(652215),
    d = n(985018);
let _ = (e) => {
    let { planError: t } = e,
        { currencies: n, paymentError: i, purchaseError: _, purchasePreviewError: f } = (0, l.P5)(),
        p = null;
    null != f ? (p = f) : null != i && null == (0, u.ou)(i) ? (p = i) : null != _ ? (p = _) : null != t && (p = t);
    let h = n.length > 1,
        m = null != p ? p.message : "";
    if (
        null != p &&
        p instanceof s.Ey &&
        (p.code === a.tG.CARD_DECLINED && h && (m += ` ${d.intl.string(d.t.iWvwQS)}`),
        p.code === a.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (m = d.intl.string(d.t.ypuSd8)),
        p.code === c.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (m = d.intl.string(d.t.mXMmWE)),
        p.code === a.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (m = d.intl.string(d.t.mC1Fjz)),
        p.code === a.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = d.intl.format(d.t.BPDKoA, {
            helpdeskArticle: o.A.getArticleURL(c.MVz.BILLING).concat(c.bNI.INVALID_BILLING_ADDRESS),
        });
        m = (0, r.jsxs)(r.Fragment, { children: [d.intl.string(d.t["yVIm/G"]), " ", e] });
    }
    return { error: p, errorMessage: m };
};
function f(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: s } = e,
        { error: a, errorMessage: o } = _({ planError: t });
    return null == a
        ? null
        : (0, r.jsx)("div", { ref: n, className: s, children: (0, r.jsx)(i.wx6, { type: "critical", children: o }) });
}
