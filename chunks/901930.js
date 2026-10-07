l.d(n, { A: () => x, j: () => g });
var t = l(477900),
    r = l(582128),
    i = l(192308),
    a = l(28863),
    s = l(683071),
    u = l(308528),
    c = l(913122),
    o = l(136857),
    d = l(211083),
    m = l(655857),
    h = l(642639),
    f = l(834981),
    E = l(975571),
    A = l(166532),
    N = l(652215),
    p = l(660183);
function g(e) {
    let { planError: n } = e,
        { paymentError: l } = (0, d.o)(),
        { dropdownCurrencies: s } = (0, m.Jn)(),
        { purchaseError: g, purchasePreviewError: x } = (0, h.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        C = null;
    null != x ? (C = x) : null != l && null == (0, A.ou)(l) ? (C = l) : null != g ? (C = g) : null != n && (C = n);
    let j = (0, f.vx)(),
        v = r.useCallback(() => {
            ((0, i.closeAllModals)(), u.A.openPrivateChannel({ recipientIds: j }));
        }, [j]),
        _ = s.length > 1,
        y = null != C ? C.message : "";
    if (
        null != C &&
        C instanceof c.Ey &&
        (C.code === o.tG.CARD_DECLINED && _ && (y += ` ${p.intl.string(p.t.iWvwQS)}`),
        C.code === o.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (y = p.intl.string(p.t.ypuSd8)),
        C.code === N.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (y = p.intl.string(p.t.mXMmWE)),
        C.code === o.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (y = p.intl.string(p.t.mC1Fjz)),
        (C.code === o.tG.BILLING_SPENDING_LIMIT_REACHED || C.code === o.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (y = p.intl.format(p.t["mv/fF2"], {
                guardianHook: (e, n) =>
                    j.length > 0
                        ? (0, t.jsx)(a.Anchor, { onClick: v, children: e }, n)
                        : (0, t.jsx)(r.Fragment, { children: e }, n),
            })),
        C.code === o.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = p.intl.format(p.t.BPDKoA, {
            helpdeskArticle: E.A.getArticleURL(N.MVz.BILLING).concat(N.bNI.INVALID_BILLING_ADDRESS),
        });
        y = (0, t.jsxs)(t.Fragment, { children: [p.intl.string(p.t["yVIm/G"]), " ", e] });
    }
    return { error: C, errorMessage: y };
}
function x(e) {
    let { planError: n, purchaseErrorBlockRef: l, className: r } = e,
        { error: i, errorMessage: a } = g({ planError: n });
    return null == i
        ? null
        : (0, t.jsx)("div", { ref: l, className: r, children: (0, t.jsx)(s.w, { type: "critical", children: a }) });
}
