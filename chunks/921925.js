"use strict";
r.d(t, { A: () => p, e: () => _ });
var i = r(627968);
r(64700);
var a = r(683071),
    n = r(845584),
    s = r(136857),
    l = r(975571),
    o = r(156312),
    c = r(166532),
    d = r(652215),
    u = r(985018);
let _ = (e) => {
    let { planError: t } = e,
        { currencies: r, paymentError: a, purchaseError: _, purchasePreviewError: p } = (0, o.P5)(),
        f = null;
    null != p ? (f = p) : null != a && null == (0, c.ou)(a) ? (f = a) : null != _ ? (f = _) : null != t && (f = t);
    let m = r.length > 1,
        h = null != f ? f.message : "";
    if (
        null != f &&
        f instanceof n.Ey &&
        (f.code === s.tG.CARD_DECLINED && m && (h += ` ${u.intl.string(u.t.iWvwQS)}`),
        f.code === s.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (h = u.intl.string(u.t.ypuSd8)),
        f.code === d.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (h = u.intl.string(u.t.mXMmWE)),
        f.code === s.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (h = u.intl.string(u.t.mC1Fjz)),
        f.code === s.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = u.intl.format(u.t.BPDKoA, {
            helpdeskArticle: l.A.getArticleURL(d.MVz.BILLING).concat(d.bNI.INVALID_BILLING_ADDRESS),
        });
        h = (0, i.jsxs)(i.Fragment, { children: [u.intl.string(u.t["yVIm/G"]), " ", e] });
    }
    return { error: f, errorMessage: h };
};
function p(e) {
    let { planError: t, purchaseErrorBlockRef: r, className: n } = e,
        { error: s, errorMessage: l } = _({ planError: t });
    return null == s
        ? null
        : (0, i.jsx)("div", { ref: r, className: n, children: (0, i.jsx)(a.w, { type: "critical", children: l }) });
}
