n.d(t, { A: () => A, j: () => S });
var r = n(477900),
    l = n(582128),
    i = n(192308),
    o = n(28863),
    a = n(683071),
    s = n(308528),
    u = n(913122),
    c = n(136857),
    d = n(211083),
    C = n(655857),
    h = n(206441),
    E = n(834981),
    m = n(975571),
    p = n(166532),
    _ = n(652215),
    f = n(375708);
function S(e) {
    let { planError: t } = e,
        { paymentError: n } = (0, d.o)(),
        { dropdownCurrencies: a } = (0, C.Jn)(),
        { purchaseError: S, purchasePreviewError: A } = (0, h.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        I = null;
    null != A ? (I = A) : null != n && null == (0, p.ou)(n) ? (I = n) : null != S ? (I = S) : null != t && (I = t);
    let g = (0, E.vx)(),
        N = l.useCallback(() => {
            (0, i.closeAllModals)(), s.A.openPrivateChannel({ recipientIds: g });
        }, [g]),
        T = a.length > 1,
        y = null != I ? I.message : "";
    if (
        null != I &&
        I instanceof u.Ey &&
        (I.code === c.tG.CARD_DECLINED && T && (y += ` ${f.intl.string(f.t.iWvwQS)}`),
        I.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (y = f.intl.string(f.t.ypuSd8)),
        I.code === _.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (y = f.intl.string(f.t.mXMmWE)),
        I.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (y = f.intl.string(f.t.mC1Fjz)),
        (I.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || I.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (y = f.intl.format(f.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    g.length > 0
                        ? (0, r.jsx)(o.Anchor, { onClick: N, children: e }, t)
                        : (0, r.jsx)(l.Fragment, { children: e }, t),
            })),
        I.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = f.intl.format(f.t.BPDKoA, {
            helpdeskArticle: m.A.getArticleURL(_.MVz.BILLING).concat(_.bNI.INVALID_BILLING_ADDRESS),
        });
        y = (0, r.jsxs)(r.Fragment, { children: [f.intl.string(f.t["yVIm/G"]), " ", e] });
    }
    return { error: I, errorMessage: y };
}
function A(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: l } = e,
        { error: i, errorMessage: o } = S({ planError: t });
    return null == i
        ? null
        : (0, r.jsx)("div", { ref: n, className: l, children: (0, r.jsx)(a.w, { type: "critical", children: o }) });
}
