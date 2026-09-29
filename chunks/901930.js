n.d(t, { A: () => S, j: () => f });
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
    C = n(263532),
    p = n(834981),
    m = n(975571),
    E = n(166532),
    A = n(652215),
    y = n(375708);
function f(e) {
    let { planError: t } = e,
        { paymentError: n } = (0, d.o)(),
        { dropdownCurrencies: a } = (0, h.Jn)(),
        { purchaseError: f, purchasePreviewError: S } = (0, C.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        _ = null;
    null != S ? (_ = S) : null != n && null == (0, E.ou)(n) ? (_ = n) : null != f ? (_ = f) : null != t && (_ = t);
    let g = (0, p.vx)(),
        T = l.useCallback(() => {
            ((0, o.closeAllModals)(), s.A.openPrivateChannel({ recipientIds: g }));
        }, [g]),
        P = a.length > 1,
        I = null != _ ? _.message : "";
    if (
        null != _ &&
        _ instanceof u.Ey &&
        (_.code === c.tG.CARD_DECLINED && P && (I += ` ${y.intl.string(y.t.iWvwQS)}`),
        _.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (I = y.intl.string(y.t.ypuSd8)),
        _.code === A.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (I = y.intl.string(y.t.mXMmWE)),
        _.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (I = y.intl.string(y.t.mC1Fjz)),
        (_.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || _.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (I = y.intl.format(y.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    g.length > 0
                        ? (0, r.jsx)(i.Anchor, { onClick: T, children: e }, t)
                        : (0, r.jsx)(l.Fragment, { children: e }, t),
            })),
        _.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = y.intl.format(y.t.BPDKoA, {
            helpdeskArticle: m.A.getArticleURL(A.MVz.BILLING).concat(A.bNI.INVALID_BILLING_ADDRESS),
        });
        I = (0, r.jsxs)(r.Fragment, { children: [y.intl.string(y.t["yVIm/G"]), " ", e] });
    }
    return { error: _, errorMessage: I };
}
function S(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: l } = e,
        { error: o, errorMessage: i } = f({ planError: t });
    return null == o
        ? null
        : (0, r.jsx)("div", { ref: n, className: l, children: (0, r.jsx)(a.w, { type: "critical", children: i }) });
}
