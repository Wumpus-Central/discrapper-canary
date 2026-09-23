n.d(t, { A: () => g, j: () => y });
var r = n(477900),
    l = n(582128),
    i = n(192308),
    o = n(28863),
    a = n(683071),
    s = n(308528),
    u = n(913122),
    c = n(136857),
    d = n(211083),
    h = n(655857),
    C = n(263532),
    p = n(834981),
    m = n(975571),
    E = n(166532),
    A = n(652215),
    f = n(375708);
function y(e) {
    let { planError: t } = e,
        { paymentError: n } = (0, d.o)(),
        { dropdownCurrencies: a } = (0, h.Jn)(),
        { purchaseError: y, purchasePreviewError: g } = (0, C.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        S = null;
    null != g ? (S = g) : null != n && null == (0, E.ou)(n) ? (S = n) : null != y ? (S = y) : null != t && (S = t);
    let _ = (0, p.vx)(),
        P = l.useCallback(() => {
            ((0, i.closeAllModals)(), s.A.openPrivateChannel({ recipientIds: _ }));
        }, [_]),
        I = a.length > 1,
        T = null != S ? S.message : "";
    if (
        null != S &&
        S instanceof u.Ey &&
        (S.code === c.tG.CARD_DECLINED && I && (T += ` ${f.intl.string(f.t.iWvwQS)}`),
        S.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (T = f.intl.string(f.t.ypuSd8)),
        S.code === A.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (T = f.intl.string(f.t.mXMmWE)),
        S.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (T = f.intl.string(f.t.mC1Fjz)),
        (S.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || S.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (T = f.intl.format(f.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    _.length > 0
                        ? (0, r.jsx)(o.Anchor, { onClick: P, children: e }, t)
                        : (0, r.jsx)(l.Fragment, { children: e }, t),
            })),
        S.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = f.intl.format(f.t.BPDKoA, {
            helpdeskArticle: m.A.getArticleURL(A.MVz.BILLING).concat(A.bNI.INVALID_BILLING_ADDRESS),
        });
        T = (0, r.jsxs)(r.Fragment, { children: [f.intl.string(f.t["yVIm/G"]), " ", e] });
    }
    return { error: S, errorMessage: T };
}
function g(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: l } = e,
        { error: i, errorMessage: o } = y({ planError: t });
    return null == i
        ? null
        : (0, r.jsx)("div", { ref: n, className: l, children: (0, r.jsx)(a.w, { type: "critical", children: o }) });
}
