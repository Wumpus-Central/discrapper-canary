"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(198982),
    o = n(136857),
    l = n(975571),
    u = n(156312),
    c = n(166532),
    d = n(652215),
    _ = n(985018);
function f(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: f } = e,
        {
            currencies: p,
            paymentError: h,
            purchaseError: m,
            purchasePreviewError: g,
            setSelectedPlanNotification: E,
        } = (0, u.P5)(),
        A = null;
    null != g ? (A = g) : null != h && null == (0, c.ou)(h) ? (A = h) : null != m ? (A = m) : null != t && (A = t);
    let I = p.length > 1,
        T = null != A ? A.message : "";
    if (
        null != A &&
        A instanceof s.Ey &&
        (A.code === o.tG.CARD_DECLINED && I && (T += ` ${_.intl.string(_.t.iWvwQS)}`),
        A.code === o.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (T = _.intl.string(_.t.ypuSd8)),
        A.code === d.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (T = _.intl.string(_.t.mXMmWE)),
        A.code === o.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (T = _.intl.string(_.t.mC1Fjz)),
        A.code === o.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = _.intl.format(_.t.BPDKoA, {
            helpdeskArticle: l.A.getArticleURL(d.MVz.BILLING).concat(d.bNI.INVALID_BILLING_ADDRESS),
        });
        T = (0, r.jsxs)(r.Fragment, { children: [_.intl.string(_.t["yVIm/G"]), " ", e] });
    }
    return (i.useEffect(() => {
        null != A && E(null);
    }, [A, E]),
    null == A)
        ? null
        : (0, r.jsx)("div", { ref: n, className: f, children: (0, r.jsx)(a.wx6, { type: "critical", children: T }) });
}
