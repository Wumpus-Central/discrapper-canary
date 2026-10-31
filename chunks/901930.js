n.d(t, { A: () => y, j: () => A });
var l = n(477900),
    i = n(582128),
    r = n(192308),
    a = n(858899),
    s = n(28863),
    o = n(683071),
    u = n(913122),
    c = n(136857),
    d = n(211083),
    m = n(655857),
    p = n(281044),
    C = n(834981),
    h = n(327919),
    f = n(975571),
    E = n(166532),
    S = n(652215),
    g = n(105292),
    I = n(83152);
function A(e) {
    let { planError: t, hasSelectedPaymentElementSourceType: n } = e,
        { paymentError: o } = (0, d.o)(),
        { dropdownCurrencies: A } = (0, m.Jn)(),
        { purchaseError: y, purchasePreviewError: x } = (0, p.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        P = null;
    null != x ? (P = x) : null != o && (0, E.h5)(o, n) ? (P = o) : null != y ? (P = y) : null != t && (P = t);
    let v = (0, C.vx)(),
        _ = i.useCallback(() => {
            (0, h.A)(v, r.closeAllModals, () =>
                (0, a.P0)({
                    text: g.intl.formatToPlainString(I.default.D1BwNC, { count: v.length }),
                    variant: "critical",
                }),
            );
        }, [v]),
        T = A.length > 1,
        N = null != P ? P.message : "";
    return (
        null != P &&
            P instanceof u.Ey &&
            (P.code === c.tG.CARD_DECLINED && T && (N = `${P.message} ${g.intl.string(g.t.iWvwQS)}`),
            P.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (N = g.intl.string(g.t.ypuSd8)),
            P.code === S.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (N = g.intl.string(g.t.mXMmWE)),
            P.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (N = g.intl.string(g.t.mC1Fjz)),
            (P.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || P.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
                (N = g.intl.format(g.t["mv/fF2"], {
                    guardianHook: (e, t) =>
                        v.length > 0
                            ? (0, l.jsx)(s.Anchor, { onClick: _, children: e }, t)
                            : (0, l.jsx)(i.Fragment, { children: e }, t),
                })),
            P.code === c.tG.INVALID_BILLING_ADDRESS &&
                (N = g.intl.format(g.t.KXodvL, {
                    helpdeskArticle: f.A.getArticleURL(S.MVz.BILLING).concat(S.bNI.INVALID_BILLING_ADDRESS),
                }))),
        { error: P, errorMessage: N }
    );
}
function y(e) {
    let { planError: t, purchaseErrorBlockRef: n, hasSelectedPaymentElementSourceType: i, className: r } = e,
        { error: a, errorMessage: s } = A({ planError: t, hasSelectedPaymentElementSourceType: i });
    return null == a
        ? null
        : (0, l.jsx)("div", {
              ref: n,
              className: r,
              children: (0, l.jsx)(o.w, { type: "critical", message: s, role: "alert" }),
          });
}
