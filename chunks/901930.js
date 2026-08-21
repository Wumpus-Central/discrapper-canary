n.d(t, { A: () => f, j: () => S });
var r = n(477900),
    l = n(582128),
    i = n(192308),
    o = n(349288),
    u = n(683071),
    s = n(308528),
    a = n(913122),
    c = n(136857),
    d = n(211083),
    E = n(655857),
    C = n(87725),
    _ = n(834981),
    h = n(975571),
    A = n(166532),
    p = n(652215),
    I = n(375708);
function S(e) {
    let { planError: t } = e,
        { paymentError: n } = (0, d.o)(),
        { dropdownCurrencies: u } = (0, E.Jn)(),
        { purchaseError: S, purchasePreviewError: f } = (0, C.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        N = null;
    null != f ? (N = f) : null != n && null == (0, A.ou)(n) ? (N = n) : null != S ? (N = S) : null != t && (N = t);
    let T = (0, _.vx)(),
        g = l.useCallback(() => {
            (0, i.closeAllModals)(), s.A.openPrivateChannel({ recipientIds: T });
        }, [T]),
        m = u.length > 1,
        R = null != N ? N.message : "";
    if (
        null != N &&
        N instanceof a.Ey &&
        (N.code === c.tG.CARD_DECLINED && m && (R += ` ${I.intl.string(I.t.iWvwQS)}`),
        N.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (R = I.intl.string(I.t.ypuSd8)),
        N.code === p.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (R = I.intl.string(I.t.mXMmWE)),
        N.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (R = I.intl.string(I.t.mC1Fjz)),
        (N.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || N.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (R = I.intl.format(I.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    T.length > 0
                        ? (0, r.jsx)(o.Anchor, { onClick: g, children: e }, t)
                        : (0, r.jsx)(l.Fragment, { children: e }, t),
            })),
        N.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = I.intl.format(I.t.BPDKoA, {
            helpdeskArticle: h.A.getArticleURL(p.MVz.BILLING).concat(p.bNI.INVALID_BILLING_ADDRESS),
        });
        R = (0, r.jsxs)(r.Fragment, { children: [I.intl.string(I.t["yVIm/G"]), " ", e] });
    }
    return { error: N, errorMessage: R };
}
function f(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: l } = e,
        { error: i, errorMessage: o } = S({ planError: t });
    return null == i
        ? null
        : (0, r.jsx)("div", { ref: n, className: l, children: (0, r.jsx)(u.w, { type: "critical", children: o }) });
}
