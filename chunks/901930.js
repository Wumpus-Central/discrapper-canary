"use strict";
n.d(t, { A: () => I, j: () => A });
var i = n(627968),
    r = n(64700),
    s = n(192308),
    a = n(349288),
    o = n(683071),
    l = n(308528),
    u = n(913122),
    c = n(136857),
    d = n(211083),
    _ = n(655857),
    h = n(211159),
    f = n(834981),
    p = n(975571),
    E = n(166532),
    m = n(652215),
    g = n(375708);
function A(e) {
    let { planError: t } = e,
        { paymentError: n } = (0, d.o)(),
        { dropdownCurrencies: o } = (0, _.Jn)(),
        { purchaseError: A, purchasePreviewError: I } = (0, h.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        T = null;
    null != I ? (T = I) : null != n && null == (0, E.ou)(n) ? (T = n) : null != A ? (T = A) : null != t && (T = t);
    let S = (0, f.vx)(),
        y = r.useCallback(() => {
            (0, s.closeAllModals)(), l.A.openPrivateChannel({ recipientIds: S });
        }, [S]),
        C = o.length > 1,
        N = null != T ? T.message : "";
    if (
        null != T &&
        T instanceof u.Ey &&
        (T.code === c.tG.CARD_DECLINED && C && (N += ` ${g.intl.string(g.t.iWvwQS)}`),
        T.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (N = g.intl.string(g.t.ypuSd8)),
        T.code === m.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (N = g.intl.string(g.t.mXMmWE)),
        T.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (N = g.intl.string(g.t.mC1Fjz)),
        (T.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || T.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
            (N = g.intl.format(g.t["mv/fF2"], {
                guardianHook: (e, t) =>
                    S.length > 0
                        ? (0, i.jsx)(a.Anchor, { onClick: y, children: e }, t)
                        : (0, i.jsx)(r.Fragment, { children: e }, t),
            })),
        T.code === c.tG.INVALID_BILLING_ADDRESS)
    ) {
        let e = g.intl.format(g.t.BPDKoA, {
            helpdeskArticle: p.A.getArticleURL(m.MVz.BILLING).concat(m.bNI.INVALID_BILLING_ADDRESS),
        });
        N = (0, i.jsxs)(i.Fragment, { children: [g.intl.string(g.t["yVIm/G"]), " ", e] });
    }
    return { error: T, errorMessage: N };
}
function I(e) {
    let { planError: t, purchaseErrorBlockRef: n, className: r } = e,
        { error: s, errorMessage: a } = A({ planError: t });
    return null == s
        ? null
        : (0, i.jsx)("div", { ref: n, className: r, children: (0, i.jsx)(o.w, { type: "critical", children: a }) });
}
