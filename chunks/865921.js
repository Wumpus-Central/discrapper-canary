n.d(t, { v: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(399606),
    a = n(89057),
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
        { isGift: v } = (0, l.wD)(),
        [O, I] = i.useState(!0),
        [S, T] = (0, o.Wu)([s.Z], () => [s.Z.isFetchingCategories, s.Z.error]);
    return (i.useEffect(() => {
        let e = null != E;
        h && g && e && I(S);
    }, [h, g, E, S]),
    i.useEffect(() => {
        if (O || p || null == y) return;
        let e = b[y];
        return v && (null == e ? void 0 : e.productLine) === _.POd.COLLECTIBLES ? void t(u.h8.GIFT_CUSTOMIZATION) : 0 === Object.keys(m).length ? void t(u.h8.ADD_PAYMENT_STEPS) : void t(u.h8.REVIEW);
    }, [O, p, t, m, v, b, y]),
    O)
        ? (0, r.jsx)(f.Z, {})
        : p
          ? (0, r.jsx)(a.Vq, { onClose: n })
          : null != T
            ? (0, r.jsx)(d.Z, { onClose: n })
            : null;
}
