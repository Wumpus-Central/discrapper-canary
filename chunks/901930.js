t.d(n, { A: () => g, j: () => N });
var r = t(477900),
    l = t(582128),
    i = t(192308),
    s = t(28863),
    o = t(683071),
    a = t(308528),
    u = t(913122),
    c = t(136857),
    d = t(211083),
    h = t(655857),
    E = t(721836),
    m = t(834981),
    C = t(975571),
    f = t(166532),
    A = t(652215),
    x = t(375708);
function N(e) {
    let { planError: n } = e,
        { paymentError: t } = (0, d.o)(),
        { dropdownCurrencies: o } = (0, h.Jn)(),
        { purchaseError: N, purchasePreviewError: g } = (0, E.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        p = null;
    null != g ? (p = g) : null != t && null == (0, f.ou)(t) ? (p = t) : null != N ? (p = N) : null != n && (p = n);
    let j = (0, m.vx)(),
        v = l.useCallback(() => {
            ((0, i.closeAllModals)(), a.A.openPrivateChannel({ recipientIds: j }));
        }, [j]),
        I = o.length > 1,
        _ = null != p ? p.message : "";
    if (
        null != p &&
        p instanceof u.Ey &&
        (p.code === c.tG.CARD_DECLINED && I && (_ += ` ${x.intl.string(x.t.iWvwQS)}`),
        p.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (_ = x.intl.string(x.t.ypuSd8)),
        p.code === A.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (_ = x.intl.string(x.t.mXMmWE)),
        p.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (_ = x.intl.string(x.t.mC1Fjz)),
        (p.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || p.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (_ = x.intl.format(x.t["mv/fF2"], {
                guardianHook: (e, n) =>
                    j.length > 0
                        ? (0, r.jsx)(s.Anchor, { onClick: v, children: e }, n)
                        : (0, r.jsx)(l.Fragment, { children: e }, n),
            })),
        p.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = x.intl.format(x.t.BPDKoA, {
            helpdeskArticle: C.A.getArticleURL(A.MVz.BILLING).concat(A.bNI.INVALID_BILLING_ADDRESS),
        });
        _ = (0, r.jsxs)(r.Fragment, { children: [x.intl.string(x.t["yVIm/G"]), " ", e] });
    }
    return { error: p, errorMessage: _ };
}
function g(e) {
    let { planError: n, purchaseErrorBlockRef: t, className: l } = e,
        { error: i, errorMessage: s } = N({ planError: n });
    return null == i
        ? null
        : (0, r.jsx)("div", { ref: t, className: l, children: (0, r.jsx)(o.w, { type: "critical", children: s }) });
}
