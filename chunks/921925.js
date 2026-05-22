n.d(t, { A: () => C, e: () => h });
var l = n(627968);
n(64700);
var a = n(683071),
    i = n(913122),
    r = n(136857),
    s = n(655857),
    o = n(671744),
    u = n(975571),
    c = n(834252),
    d = n(166532),
    p = n(652215),
    m = n(375708);
let h = (e) => {
    let { planError: t } = e,
        { paymentError: n, purchasePreviewError: a } = (0, c.P5)(),
        { dropdownCurrencies: h } = (0, s.Jn)(),
        C = (0, o.t4)((e) => e.purchaseError),
        A = null;
    null != a ? (A = a) : null != n && null == (0, d.ou)(n) ? (A = n) : null != C ? (A = C) : null != t && (A = t);
    let y = h.length > 1,
        E = null != A ? A.message : "";
    if (
        null != A &&
        A instanceof i.Ey &&
        (A.code === r.tG.CARD_DECLINED && y && (E += ` ${m.intl.string(m.t.iWvwQS)}`),
        A.code === r.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (E = m.intl.string(m.t.ypuSd8)),
        A.code === p.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (E = m.intl.string(m.t.mXMmWE)),
        A.code === r.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (E = m.intl.string(m.t.mC1Fjz)),
        A.code === r.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = m.intl.format(m.t.BPDKoA, {
            helpdeskArticle: u.A.getArticleURL(p.MVz.BILLING).concat(p.bNI.INVALID_BILLING_ADDRESS),
        });
        E = (0, l.jsxs)(l.Fragment, { children: [m.intl.string(m.t["yVIm/G"]), " ", e] });
    }
    return { error: A, errorMessage: E };
};
function C(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: i } = e,
        { error: r, errorMessage: s } = h({ planError: t });
    return null == r
        ? null
        : (0, l.jsx)("div", { ref: n, className: i, children: (0, l.jsx)(a.w, { type: "critical", children: s }) });
}
