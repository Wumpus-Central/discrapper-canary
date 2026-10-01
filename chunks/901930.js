l.d(n, { A: () => j, j: () => p });
var t = l(477900),
    r = l(582128),
    i = l(192308),
    u = l(28863),
    s = l(683071),
    a = l(308528),
    o = l(913122),
    c = l(136857),
    d = l(211083),
    m = l(655857),
    E = l(263532),
    h = l(834981),
    f = l(975571),
    N = l(166532),
    A = l(652215),
    C = l(375708);
function p(e) {
    let { planError: n } = e,
        { paymentError: l } = (0, d.o)(),
        { dropdownCurrencies: s } = (0, m.Jn)(),
        { purchaseError: p, purchasePreviewError: j } = (0, E.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        x = null;
    null != j ? (x = j) : null != l && null == (0, N.ou)(l) ? (x = l) : null != p ? (x = p) : null != n && (x = n);
    let _ = (0, h.vx)(),
        g = r.useCallback(() => {
            ((0, i.closeAllModals)(), a.A.openPrivateChannel({ recipientIds: _ }));
        }, [_]),
        y = s.length > 1,
        v = null != x ? x.message : "";
    if (
        null != x &&
        x instanceof o.Ey &&
        (x.code === c.tG.CARD_DECLINED && y && (v += ` ${C.intl.string(C.t.iWvwQS)}`),
        x.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (v = C.intl.string(C.t.ypuSd8)),
        x.code === A.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (v = C.intl.string(C.t.mXMmWE)),
        x.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (v = C.intl.string(C.t.mC1Fjz)),
        (x.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || x.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (v = C.intl.format(C.t["mv/fF2"], {
                guardianHook: (e, n) =>
                    _.length > 0
                        ? (0, t.jsx)(u.Anchor, { onClick: g, children: e }, n)
                        : (0, t.jsx)(r.Fragment, { children: e }, n),
            })),
        x.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = C.intl.format(C.t.BPDKoA, {
            helpdeskArticle: f.A.getArticleURL(A.MVz.BILLING).concat(A.bNI.INVALID_BILLING_ADDRESS),
        });
        v = (0, t.jsxs)(t.Fragment, { children: [C.intl.string(C.t["yVIm/G"]), " ", e] });
    }
    return { error: x, errorMessage: v };
}
function j(e) {
    let { planError: n, purchaseErrorBlockRef: l, className: r } = e,
        { error: i, errorMessage: u } = p({ planError: n });
    return null == i
        ? null
        : (0, t.jsx)("div", { ref: l, className: r, children: (0, t.jsx)(s.w, { type: "critical", children: u }) });
}
