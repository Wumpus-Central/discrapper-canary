"use strict";
n.d(t, { A: () => h, e: () => f });
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
let f = (e) => {
    let { planError: t } = e,
        {
            currencies: n,
            paymentError: a,
            purchaseError: f,
            purchasePreviewError: h,
            setSelectedPlanNotification: p,
        } = (0, u.P5)(),
        g = null;
    null != h ? (g = h) : null != a && null == (0, c.ou)(a) ? (g = a) : null != f ? (g = f) : null != t && (g = t);
    let E = n.length > 1,
        A = null != g ? g.message : "";
    if (
        null != g &&
        g instanceof s.Ey &&
        (g.code === o.tG.CARD_DECLINED && E && (A += ` ${_.intl.string(_.t.iWvwQS)}`),
        g.code === o.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (A = _.intl.string(_.t.ypuSd8)),
        g.code === d.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (A = _.intl.string(_.t.mXMmWE)),
        g.code === o.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (A = _.intl.string(_.t.mC1Fjz)),
        g.code === o.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = _.intl.format(_.t.BPDKoA, {
            helpdeskArticle: l.A.getArticleURL(d.MVz.BILLING).concat(d.bNI.INVALID_BILLING_ADDRESS),
        });
        A = (0, r.jsxs)(r.Fragment, { children: [_.intl.string(_.t["yVIm/G"]), " ", e] });
    }
    return (
        i.useEffect(() => {
            null != g && p(null);
        }, [g, p]),
        { error: g, errorMessage: A }
    );
};
function h(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: i } = e,
        { error: s, errorMessage: o } = f({ planError: t });
    return null == s
        ? null
        : (0, r.jsx)("div", { ref: n, className: i, children: (0, r.jsx)(a.wx6, { type: "critical", children: o }) });
}
