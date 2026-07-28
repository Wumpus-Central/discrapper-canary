n.d(t, { A: () => f, j: () => A });
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
    C = n(316915),
    h = n(834981),
    S = n(975571),
    _ = n(166532),
    I = n(652215),
    p = n(375708);
function A(e) {
    let { planError: t } = e,
        { paymentError: n } = (0, d.o)(),
        { dropdownCurrencies: u } = (0, E.Jn)(),
        { purchaseError: A, purchasePreviewError: f } = (0, C.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        m = null;
    null != f ? (m = f) : null != n && null == (0, _.ou)(n) ? (m = n) : null != A ? (m = A) : null != t && (m = t);
    let g = (0, h.vx)(),
        N = l.useCallback(() => {
            (0, i.closeAllModals)(), s.A.openPrivateChannel({ recipientIds: g });
        }, [g]),
        T = u.length > 1,
        P = null != m ? m.message : "";
    if (
        null != m &&
        m instanceof a.Ey &&
        (m.code === c.tG.CARD_DECLINED && T && (P += ` ${p.intl.string(p.t.iWvwQS)}`),
        m.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (P = p.intl.string(p.t.ypuSd8)),
        m.code === I.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (P = p.intl.string(p.t.mXMmWE)),
        m.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (P = p.intl.string(p.t.mC1Fjz)),
        (m.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || m.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (P = p.intl.format(p.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    g.length > 0
                        ? (0, r.jsx)(o.Anchor, { onClick: N, children: e }, t)
                        : (0, r.jsx)(l.Fragment, { children: e }, t),
            })),
        m.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = p.intl.format(p.t.BPDKoA, {
            helpdeskArticle: S.A.getArticleURL(I.MVz.BILLING).concat(I.bNI.INVALID_BILLING_ADDRESS),
        });
        P = (0, r.jsxs)(r.Fragment, { children: [p.intl.string(p.t["yVIm/G"]), " ", e] });
    }
    return { error: m, errorMessage: P };
}
function f(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: l } = e,
        { error: i, errorMessage: o } = A({ planError: t });
    return null == i
        ? null
        : (0, r.jsx)("div", { ref: n, className: l, children: (0, r.jsx)(u.w, { type: "critical", children: o }) });
}
