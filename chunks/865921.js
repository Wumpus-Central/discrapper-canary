n.d(t, { v: () => p }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(399606),
    o = n(89057),
    s = n(597688),
    l = n(987209),
    c = n(563132),
    u = n(409813),
    d = n(48931),
    f = n(456251),
    _ = n(981631);
function p(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { blockedPayments: p, hasFetchedSkus: h, paymentSources: m, hasFetchedPaymentSources: g, application: E, skusById: b, selectedSkuId: y } = (0, c.JL)(),
        { isGift: O } = (0, l.wD)(),
        [v, I] = i.useState(!0),
        [S, T] = (0, a.Wu)([s.Z], () => [s.Z.isFetchingCategories, s.Z.error]);
    return (i.useEffect(() => {
        let e = null != E;
        h && g && e && I(S);
    }, [h, g, E, S]),
    i.useEffect(() => {
        if (v || p || null == y) return;
        let e = b[y];
        return O && (null == e ? void 0 : e.productLine) === _.POd.COLLECTIBLES ? void t(u.h8.GIFT_CUSTOMIZATION) : 0 === Object.keys(m).length ? void t(u.h8.ADD_PAYMENT_STEPS) : void t(u.h8.REVIEW);
    }, [v, p, t, m, O, b, y]),
    v)
        ? (0, r.jsx)(f.Z, {})
        : p
          ? (0, r.jsx)(o.Vq, { onClose: n })
          : null != T
            ? (0, r.jsx)(d.Z, { onClose: n })
            : null;
}
