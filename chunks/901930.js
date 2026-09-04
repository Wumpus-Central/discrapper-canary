n.d(t, { A: () => y, j: () => S });
var r = n(477900),
    l = n(582128),
    o = n(192308),
    i = n(28863),
    a = n(683071),
    s = n(308528),
    u = n(913122),
    c = n(136857),
    d = n(211083),
    h = n(655857),
    C = n(721836),
    m = n(834981),
    p = n(975571),
    f = n(166532),
    g = n(652215),
    E = n(375708);
function S(e) {
    let { planError: t } = e,
        { paymentError: n } = (0, d.o)(),
        { dropdownCurrencies: a } = (0, h.Jn)(),
        { purchaseError: S, purchasePreviewError: y } = (0, C.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        x = null;
    null != y ? (x = y) : null != n && null == (0, f.ou)(n) ? (x = n) : null != S ? (x = S) : null != t && (x = t);
    let _ = (0, m.vx)(),
        I = l.useCallback(() => {
            (0, o.closeAllModals)(), s.A.openPrivateChannel({ recipientIds: _ });
        }, [_]),
        A = a.length > 1,
        k = null != x ? x.message : "";
    if (
        null != x &&
        x instanceof u.Ey &&
        (x.code === c.tG.CARD_DECLINED && A && (k += ` ${E.intl.string(E.t.iWvwQS)}`),
        x.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (k = E.intl.string(E.t.ypuSd8)),
        x.code === g.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (k = E.intl.string(E.t.mXMmWE)),
        x.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (k = E.intl.string(E.t.mC1Fjz)),
        (x.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || x.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (k = E.intl.format(E.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    _.length > 0
                        ? (0, r.jsx)(i.Anchor, { onClick: I, children: e }, t)
                        : (0, r.jsx)(l.Fragment, { children: e }, t),
            })),
        x.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = E.intl.format(E.t.BPDKoA, {
            helpdeskArticle: p.A.getArticleURL(g.MVz.BILLING).concat(g.bNI.INVALID_BILLING_ADDRESS),
        });
        k = (0, r.jsxs)(r.Fragment, { children: [E.intl.string(E.t["yVIm/G"]), " ", e] });
    }
    return { error: x, errorMessage: k };
}
function y(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: l } = e,
        { error: o, errorMessage: i } = S({ planError: t });
    return null == o
        ? null
        : (0, r.jsx)("div", { ref: n, className: l, children: (0, r.jsx)(a.w, { type: "critical", children: i }) });
}
