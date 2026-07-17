n.d(t, { A: () => p, j: () => f });
var l = n(627968),
    r = n(64700),
    i = n(192308),
    o = n(349288),
    s = n(683071),
    a = n(308528),
    u = n(913122),
    c = n(136857),
    d = n(211083),
    E = n(655857),
    C = n(316915),
    h = n(834981),
    _ = n(975571),
    S = n(166532),
    m = n(652215),
    I = n(375708);
function f(e) {
    let { planError: t } = e,
        { paymentError: n } = (0, d.o)(),
        { dropdownCurrencies: s } = (0, E.Jn)(),
        { purchaseError: f, purchasePreviewError: p } = (0, C.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        A = null;
    null != p ? (A = p) : null != n && null == (0, S.ou)(n) ? (A = n) : null != f ? (A = f) : null != t && (A = t);
    let N = (0, h.vx)(),
        g = r.useCallback(() => {
            (0, i.closeAllModals)(), a.A.openPrivateChannel({ recipientIds: N });
        }, [N]),
        T = s.length > 1,
        y = null != A ? A.message : "";
    if (
        null != A &&
        A instanceof u.Ey &&
        (A.code === c.tG.CARD_DECLINED && T && (y += ` ${I.intl.string(I.t.iWvwQS)}`),
        A.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (y = I.intl.string(I.t.ypuSd8)),
        A.code === m.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (y = I.intl.string(I.t.mXMmWE)),
        A.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (y = I.intl.string(I.t.mC1Fjz)),
        (A.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || A.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (y = I.intl.format(I.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    N.length > 0
                        ? (0, l.jsx)(o.Anchor, { onClick: g, children: e }, t)
                        : (0, l.jsx)(r.Fragment, { children: e }, t),
            })),
        A.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = I.intl.format(I.t.BPDKoA, {
            helpdeskArticle: _.A.getArticleURL(m.MVz.BILLING).concat(m.bNI.INVALID_BILLING_ADDRESS),
        });
        y = (0, l.jsxs)(l.Fragment, { children: [I.intl.string(I.t["yVIm/G"]), " ", e] });
    }
    return { error: A, errorMessage: y };
}
function p(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: r } = e,
        { error: i, errorMessage: o } = f({ planError: t });
    return null == i
        ? null
        : (0, l.jsx)("div", { ref: n, className: r, children: (0, l.jsx)(s.w, { type: "critical", children: o }) });
}
