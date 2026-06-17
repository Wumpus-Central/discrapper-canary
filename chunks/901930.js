"use strict";
n.d(t, { A: () => p, j: () => f });
var i = n(627968);
n(64700);
var r = n(683071),
    s = n(913122),
    a = n(136857),
    o = n(211083),
    l = n(655857),
    u = n(211159),
    c = n(975571),
    d = n(166532),
    _ = n(652215),
    h = n(375708);
let f = (e) => {
    let { planError: t } = e,
        { paymentError: n } = (0, o.o)(),
        { dropdownCurrencies: r } = (0, l.Jn)(),
        { purchaseError: f, purchasePreviewError: p } = (0, u.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        E = null;
    null != p ? (E = p) : null != n && null == (0, d.ou)(n) ? (E = n) : null != f ? (E = f) : null != t && (E = t);
    let m = r.length > 1,
        g = null != E ? E.message : "";
    if (
        null != E &&
        E instanceof s.Ey &&
        (E.code === a.tG.CARD_DECLINED && m && (g += ` ${h.intl.string(h.t.iWvwQS)}`),
        E.code === a.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (g = h.intl.string(h.t.ypuSd8)),
        E.code === _.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (g = h.intl.string(h.t.mXMmWE)),
        E.code === a.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (g = h.intl.string(h.t.mC1Fjz)),
        E.code === a.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = h.intl.format(h.t.BPDKoA, {
            helpdeskArticle: c.A.getArticleURL(_.MVz.BILLING).concat(_.bNI.INVALID_BILLING_ADDRESS),
        });
        g = (0, i.jsxs)(i.Fragment, { children: [h.intl.string(h.t["yVIm/G"]), " ", e] });
    }
    return { error: E, errorMessage: g };
};
function p(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: s } = e,
        { error: a, errorMessage: o } = f({ planError: t });
    return null == a
        ? null
        : (0, i.jsx)("div", { ref: n, className: s, children: (0, i.jsx)(r.w, { type: "critical", children: o }) });
}
