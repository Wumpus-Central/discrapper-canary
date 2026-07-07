n.d(t, { A: () => f, j: () => I });
var l = n(627968),
    r = n(64700),
    i = n(192308),
    a = n(349288),
    o = n(683071),
    s = n(308528),
    u = n(913122),
    c = n(136857),
    d = n(211083),
    m = n(655857),
    E = n(6938),
    C = n(834981),
    p = n(975571),
    _ = n(166532),
    h = n(652215),
    N = n(375708);
function I(e) {
    let { planError: t } = e,
        { paymentError: n } = (0, d.o)(),
        { dropdownCurrencies: o } = (0, m.Jn)(),
        { purchaseError: I, purchasePreviewError: f } = (0, E.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        A = null;
    null != f ? (A = f) : null != n && null == (0, _.ou)(n) ? (A = n) : null != I ? (A = I) : null != t && (A = t);
    let S = (0, C.vx)(),
        T = r.useCallback(() => {
            (0, i.closeAllModals)(), s.A.openPrivateChannel({ recipientIds: S });
        }, [S]),
        g = o.length > 1,
        y = null != A ? A.message : "";
    if (
        null != A &&
        A instanceof u.Ey &&
        (A.code === c.tG.CARD_DECLINED && g && (y += ` ${N.intl.string(N.t.iWvwQS)}`),
        A.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (y = N.intl.string(N.t.ypuSd8)),
        A.code === h.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (y = N.intl.string(N.t.mXMmWE)),
        A.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (y = N.intl.string(N.t.mC1Fjz)),
        (A.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || A.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (y = N.intl.format(N.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    S.length > 0
                        ? (0, l.jsx)(a.Anchor, { onClick: T, children: e }, t)
                        : (0, l.jsx)(r.Fragment, { children: e }, t),
            })),
        A.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = N.intl.format(N.t.BPDKoA, {
            helpdeskArticle: p.A.getArticleURL(h.MVz.BILLING).concat(h.bNI.INVALID_BILLING_ADDRESS),
        });
        y = (0, l.jsxs)(l.Fragment, { children: [N.intl.string(N.t["yVIm/G"]), " ", e] });
    }
    return { error: A, errorMessage: y };
}
function f(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: r } = e,
        { error: i, errorMessage: a } = I({ planError: t });
    return null == i
        ? null
        : (0, l.jsx)("div", { ref: n, className: r, children: (0, l.jsx)(o.w, { type: "critical", children: a }) });
}
