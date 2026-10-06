l.d(n, { A: () => p, j: () => g });
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
    E = l(642639),
    h = l(834981),
    f = l(975571),
    A = l(166532),
    N = l(652215),
    C = l(375708);
function g(e) {
    let { planError: n } = e,
        { paymentError: l } = (0, d.o)(),
        { dropdownCurrencies: s } = (0, m.Jn)(),
        { purchaseError: g, purchasePreviewError: p } = (0, E.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        _ = null;
    null != p ? (_ = p) : null != l && null == (0, A.ou)(l) ? (_ = l) : null != g ? (_ = g) : null != n && (_ = n);
    let j = (0, h.vx)(),
        x = r.useCallback(() => {
            ((0, i.closeAllModals)(), a.A.openPrivateChannel({ recipientIds: j }));
        }, [j]),
        y = s.length > 1,
        v = null != _ ? _.message : "";
    if (
        null != _ &&
        _ instanceof o.Ey &&
        (_.code === c.tG.CARD_DECLINED && y && (v += ` ${C.intl.string(C.t.iWvwQS)}`),
        _.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (v = C.intl.string(C.t.ypuSd8)),
        _.code === N.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (v = C.intl.string(C.t.mXMmWE)),
        _.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (v = C.intl.string(C.t.mC1Fjz)),
        (_.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || _.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (v = C.intl.format(C.t["mv/fF2"], {
                guardianHook: (e, n) =>
                    j.length > 0
                        ? (0, t.jsx)(u.Anchor, { onClick: x, children: e }, n)
                        : (0, t.jsx)(r.Fragment, { children: e }, n),
            })),
        _.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = C.intl.format(C.t.BPDKoA, {
            helpdeskArticle: f.A.getArticleURL(N.MVz.BILLING).concat(N.bNI.INVALID_BILLING_ADDRESS),
        });
        v = (0, t.jsxs)(t.Fragment, { children: [C.intl.string(C.t["yVIm/G"]), " ", e] });
    }
    return { error: _, errorMessage: v };
}
function p(e) {
    let { planError: n, purchaseErrorBlockRef: l, className: r } = e,
        { error: i, errorMessage: u } = g({ planError: n });
    return null == i
        ? null
        : (0, t.jsx)("div", { ref: l, className: r, children: (0, t.jsx)(s.w, { type: "critical", children: u }) });
}
