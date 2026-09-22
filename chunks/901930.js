r.d(n, { A: () => N, j: () => A });
var t = r(477900),
    l = r(582128),
    i = r(192308),
    s = r(28863),
    o = r(683071),
    a = r(308528),
    c = r(913122),
    u = r(136857),
    d = r(211083),
    h = r(655857),
    m = r(263532),
    x = r(834981),
    E = r(975571),
    f = r(166532),
    g = r(652215),
    p = r(375708);
function A(e) {
    let { planError: n } = e,
        { paymentError: r } = (0, d.o)(),
        { dropdownCurrencies: o } = (0, h.Jn)(),
        { purchaseError: A, purchasePreviewError: N } = (0, m.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        j = null;
    null != N ? (j = N) : null != r && null == (0, f.ou)(r) ? (j = r) : null != A ? (j = A) : null != n && (j = n);
    let C = (0, x.vx)(),
        v = l.useCallback(() => {
            ((0, i.closeAllModals)(), a.A.openPrivateChannel({ recipientIds: C }));
        }, [C]),
        I = o.length > 1,
        y = null != j ? j.message : "";
    if (
        null != j &&
        j instanceof c.Ey &&
        (j.code === u.tG.CARD_DECLINED && I && (y += ` ${p.intl.string(p.t.iWvwQS)}`),
        j.code === u.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (y = p.intl.string(p.t.ypuSd8)),
        j.code === g.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (y = p.intl.string(p.t.mXMmWE)),
        j.code === u.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (y = p.intl.string(p.t.mC1Fjz)),
        (j.code === u.tG.BILLING_SPENDING_LIMIT_REACHED || j.code === u.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (y = p.intl.format(p.t["mv/fF2"], {
                guardianHook: (e, n) =>
                    C.length > 0
                        ? (0, t.jsx)(s.Anchor, { onClick: v, children: e }, n)
                        : (0, t.jsx)(l.Fragment, { children: e }, n),
            })),
        j.code === u.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = p.intl.format(p.t.BPDKoA, {
            helpdeskArticle: E.A.getArticleURL(g.MVz.BILLING).concat(g.bNI.INVALID_BILLING_ADDRESS),
        });
        y = (0, t.jsxs)(t.Fragment, { children: [p.intl.string(p.t["yVIm/G"]), " ", e] });
    }
    return { error: j, errorMessage: y };
}
function N(e) {
    let { planError: n, purchaseErrorBlockRef: r, className: l } = e,
        { error: i, errorMessage: s } = A({ planError: n });
    return null == i
        ? null
        : (0, t.jsx)("div", { ref: r, className: l, children: (0, t.jsx)(o.w, { type: "critical", children: s }) });
}
