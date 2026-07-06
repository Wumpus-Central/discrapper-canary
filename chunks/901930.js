n.d(t, { A: () => y, j: () => S });
var l = n(627968),
    i = n(64700),
    r = n(192308),
    a = n(349288),
    s = n(683071),
    o = n(308528),
    u = n(913122),
    c = n(136857),
    d = n(211083),
    p = n(655857),
    m = n(650170),
    h = n(834981),
    C = n(975571),
    E = n(166532),
    A = n(652215),
    f = n(375708);
function S(e) {
    let { planError: t } = e,
        { paymentError: n } = (0, d.o)(),
        { dropdownCurrencies: s } = (0, p.Jn)(),
        { purchaseError: S, purchasePreviewError: y } = (0, m.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        P = null;
    null != y ? (P = y) : null != n && null == (0, E.ou)(n) ? (P = n) : null != S ? (P = S) : null != t && (P = t);
    let I = (0, h.vx)(),
        T = i.useCallback(() => {
            (0, r.closeAllModals)(), o.A.openPrivateChannel({ recipientIds: I });
        }, [I]),
        _ = s.length > 1,
        g = null != P ? P.message : "";
    if (
        null != P &&
        P instanceof u.Ey &&
        (P.code === c.tG.CARD_DECLINED && _ && (g += ` ${f.intl.string(f.t.iWvwQS)}`),
        P.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (g = f.intl.string(f.t.ypuSd8)),
        P.code === A.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (g = f.intl.string(f.t.mXMmWE)),
        P.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (g = f.intl.string(f.t.mC1Fjz)),
        (P.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || P.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (g = f.intl.format(f.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    I.length > 0
                        ? (0, l.jsx)(a.Anchor, { onClick: T, children: e }, t)
                        : (0, l.jsx)(i.Fragment, { children: e }, t),
            })),
        P.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = f.intl.format(f.t.BPDKoA, {
            helpdeskArticle: C.A.getArticleURL(A.MVz.BILLING).concat(A.bNI.INVALID_BILLING_ADDRESS),
        });
        g = (0, l.jsxs)(l.Fragment, { children: [f.intl.string(f.t["yVIm/G"]), " ", e] });
    }
    return { error: P, errorMessage: g };
}
function y(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: i } = e,
        { error: r, errorMessage: a } = S({ planError: t });
    return null == r
        ? null
        : (0, l.jsx)("div", { ref: n, className: i, children: (0, l.jsx)(s.w, { type: "critical", children: a }) });
}
