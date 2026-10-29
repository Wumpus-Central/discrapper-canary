n.d(t, { A: () => N, j: () => A });
var l = n(477900),
    o = n(582128),
    r = n(192308),
    i = n(858899),
    a = n(28863),
    u = n(683071),
    s = n(913122),
    c = n(136857),
    d = n(211083),
    C = n(655857),
    h = n(912195),
    p = n(834981),
    m = n(327919),
    E = n(975571),
    f = n(166532),
    _ = n(652215),
    g = n(105292),
    y = n(513687);
function A(e) {
    let { planError: t, hasSelectedPaymentElementSourceType: n } = e,
        { paymentError: u } = (0, d.o)(),
        { dropdownCurrencies: A } = (0, C.Jn)(),
        { purchaseError: N, purchasePreviewError: S } = (0, h.t4)((e) => ({
            purchaseError: e.purchaseError,
            purchasePreviewError: e.purchasePreviewError,
        })),
        T = null;
    null != S ? (T = S) : null != u && (0, f.h5)(u, n) ? (T = u) : null != N ? (T = N) : null != t && (T = t);
    let I = (0, p.vx)(),
        O = o.useCallback(() => {
            (0, m.A)(I, r.closeAllModals, () =>
                (0, i.P0)({
                    text: g.intl.formatToPlainString(y.default.D1BwNC, { count: I.length }),
                    variant: "critical",
                }),
            );
        }, [I]),
        k = A.length > 1,
        x = null != T ? T.message : "";
    return (
        null != T &&
            T instanceof s.Ey &&
            (T.code === c.tG.CARD_DECLINED && k && (x = `${T.message} ${g.intl.string(g.t.iWvwQS)}`),
            T.code === c.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (x = g.intl.string(g.t.ypuSd8)),
            T.code === _.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (x = g.intl.string(g.t.mXMmWE)),
            T.code === c.tG.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (x = g.intl.string(g.t.mC1Fjz)),
            (T.code === c.tG.BILLING_SPENDING_LIMIT_REACHED || T.code === c.tG.BILLING_SPENDING_LIMIT_WILL_EXCEED) &&
                (x = g.intl.format(g.t["mv/fF2"], {
                    guardianHook: (e, t) =>
                        I.length > 0
                            ? (0, l.jsx)(a.Anchor, { onClick: O, children: e }, t)
                            : (0, l.jsx)(o.Fragment, { children: e }, t),
                })),
            T.code === c.tG.INVALID_BILLING_ADDRESS &&
                (x = g.intl.format(g.t.KXodvL, {
                    helpdeskArticle: E.A.getArticleURL(_.MVz.BILLING).concat(_.bNI.INVALID_BILLING_ADDRESS),
                }))),
        { error: T, errorMessage: x }
    );
}
function N(e) {
    let { planError: t, purchaseErrorBlockRef: n, hasSelectedPaymentElementSourceType: o, className: r } = e,
        { error: i, errorMessage: a } = A({ planError: t, hasSelectedPaymentElementSourceType: o });
    return null == i
        ? null
        : (0, l.jsx)("div", {
              ref: n,
              className: r,
              children: (0, l.jsx)(u.w, { type: "critical", message: a, role: "alert" }),
          });
}
