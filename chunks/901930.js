n.d(t, { A: () => I, j: () => S });
var l = n(477900),
    r = n(582128),
    i = n(192308),
    o = n(28863),
    u = n(683071),
    s = n(308528),
    a = n(913122),
    c = n(136857),
    d = n(211083),
    C = n(655857),
    E = n(206441),
    h = n(834981),
    _ = n(975571),
    A = n(166532),
    p = n(652215),
    f = n(375708);
function S(e) {
    let { planError: t } = e,
        { paymentError: n } = (0, d.o)(),
        { dropdownCurrencies: u } = (0, C.Jn)(),
        { purchaseError: S, purchasePreviewError: I } = (0, E.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        g = null;
    null != I ? (g = I) : null != n && null == (0, A.ou)(n) ? (g = n) : null != S ? (g = S) : null != t && (g = t);
    let N = (0, h.vx)(),
        T = r.useCallback(() => {
            (0, i.closeAllModals)(), s.A.openPrivateChannel({ recipientIds: N });
        }, [N]),
        m = u.length > 1,
        R = null != g ? g.message : "";
    if (
        null != g &&
        g instanceof a.Ey &&
        (g.code === c.tG.CARD_DECLINED && m && (R += ` ${f.intl.string(f.t.iWvwQS)}`),
        g.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (R = f.intl.string(f.t.ypuSd8)),
        g.code === p.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (R = f.intl.string(f.t.mXMmWE)),
        g.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (R = f.intl.string(f.t.mC1Fjz)),
        (g.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || g.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (R = f.intl.format(f.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    N.length > 0
                        ? (0, l.jsx)(o.Anchor, { onClick: T, children: e }, t)
                        : (0, l.jsx)(r.Fragment, { children: e }, t),
            })),
        g.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = f.intl.format(f.t.BPDKoA, {
            helpdeskArticle: _.A.getArticleURL(p.MVz.BILLING).concat(p.bNI.INVALID_BILLING_ADDRESS),
        });
        R = (0, l.jsxs)(l.Fragment, { children: [f.intl.string(f.t["yVIm/G"]), " ", e] });
    }
    return { error: g, errorMessage: R };
}
function I(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: r } = e,
        { error: i, errorMessage: o } = S({ planError: t });
    return null == i
        ? null
        : (0, l.jsx)("div", { ref: n, className: r, children: (0, l.jsx)(u.w, { type: "critical", children: o }) });
}
