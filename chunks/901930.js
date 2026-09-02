n.d(t, { A: () => N, j: () => S });
var r = n(477900),
    l = n(582128),
    i = n(192308),
    s = n(28863),
    u = n(683071),
    o = n(308528),
    a = n(913122),
    c = n(136857),
    d = n(211083),
    E = n(655857),
    h = n(206441),
    A = n(834981),
    f = n(975571),
    g = n(166532),
    _ = n(652215),
    C = n(375708);
function S(e) {
    let { planError: t } = e,
        { paymentError: n } = (0, d.o)(),
        { dropdownCurrencies: u } = (0, E.Jn)(),
        { purchaseError: S, purchasePreviewError: N } = (0, h.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        p = null;
    null != N ? (p = N) : null != n && null == (0, g.ou)(n) ? (p = n) : null != S ? (p = S) : null != t && (p = t);
    let I = (0, A.vx)(),
        m = l.useCallback(() => {
            (0, i.closeAllModals)(), o.A.openPrivateChannel({ recipientIds: I });
        }, [I]),
        L = u.length > 1,
        x = null != p ? p.message : "";
    if (
        null != p &&
        p instanceof a.Ey &&
        (p.code === c.tG.CARD_DECLINED && L && (x += ` ${C.intl.string(C.t.iWvwQS)}`),
        p.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (x = C.intl.string(C.t.ypuSd8)),
        p.code === _.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (x = C.intl.string(C.t.mXMmWE)),
        p.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (x = C.intl.string(C.t.mC1Fjz)),
        (p.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || p.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (x = C.intl.format(C.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    I.length > 0
                        ? (0, r.jsx)(s.Anchor, { onClick: m, children: e }, t)
                        : (0, r.jsx)(l.Fragment, { children: e }, t),
            })),
        p.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = C.intl.format(C.t.BPDKoA, {
            helpdeskArticle: f.A.getArticleURL(_.MVz.BILLING).concat(_.bNI.INVALID_BILLING_ADDRESS),
        });
        x = (0, r.jsxs)(r.Fragment, { children: [C.intl.string(C.t["yVIm/G"]), " ", e] });
    }
    return { error: p, errorMessage: x };
}
function N(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: l } = e,
        { error: i, errorMessage: s } = S({ planError: t });
    return null == i
        ? null
        : (0, r.jsx)("div", { ref: n, className: l, children: (0, r.jsx)(u.w, { type: "critical", children: s }) });
}
