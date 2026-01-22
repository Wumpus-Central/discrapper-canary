n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(198982),
    o = n(136857),
    l = n(975571),
    c = n(156312),
    u = n(166532),
    d = n(652215),
    f = n(985018);

function p(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: p } = e,
        {
            currencies: _,
            paymentError: h,
            purchaseError: m,
            purchasePreviewError: g,
            setSelectedPlanNotification: E,
        } = (0, c.P5)(),
        b = null;
    null != g ? (b = g) : null != h && null == (0, u.ou)(h) ? (b = h) : null != m ? (b = m) : null != t && (b = t);
    let y = _.length > 1,
        O = null != b ? b.message : "";
    if (
        null != b &&
        b instanceof s.Ey &&
        (b.code === o.tG.CARD_DECLINED && y && (O += " ".concat(f.intl.string(f.t.iWvwQS))),
        b.code === o.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (O = f.intl.string(f.t.ypuSd8)),
        b.code === d.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (O = f.intl.string(f.t.mXMmWE)),
        b.code === o.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (O = f.intl.string(f.t.mC1Fjz)),
        b.code === o.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = f.intl.format(f.t.BPDKoA, {
            helpdeskArticle: l.A.getArticleURL(d.MVz.BILLING).concat(d.bNI.INVALID_BILLING_ADDRESS),
        });
        O = (0, r.jsxs)(r.Fragment, {
            children: [f.intl.string(f.t["yVIm/G"]), " ", e],
        });
    }
    return (i.useEffect(() => {
        null != b && E(null);
    }, [b, E]),
    null == b)
        ? null
        : (0, r.jsx)("div", {
              ref: n,
              className: p,
              children: (0, r.jsx)(a.wx6, {
                  type: "critical",
                  children: O,
              }),
          });
}
