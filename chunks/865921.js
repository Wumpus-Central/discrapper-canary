n.d(t, { v: () => p }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(399606),
    s = n(89057),
    o = n(597688),
    l = n(987209),
    u = n(563132),
    c = n(409813),
    d = n(48931),
    f = n(456251),
    _ = n(981631);
function p(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { blockedPayments: p, hasFetchedSkus: h, paymentSources: m, hasFetchedPaymentSources: g, application: E, skusById: v, selectedSkuId: y } = (0, u.JL)(),
        { isGift: I } = (0, l.wD)(),
        [b, T] = r.useState(!0),
        [S, A] = (0, a.Wu)([o.Z], () => [o.Z.isFetchingCategories, o.Z.error]);
    return (r.useEffect(() => {
        let e = null != E;
        h && g && e && T(S);
    }, [h, g, E, S]),
    r.useEffect(() => {
        if (b || p || null == y) return;
        let e = v[y];
        if (I && (null == e ? void 0 : e.productLine) === _.POd.COLLECTIBLES) {
            t(c.h8.GIFT_CUSTOMIZATION);
            return;
        }
        if (0 === Object.keys(m).length) {
            t(c.h8.ADD_PAYMENT_STEPS);
            return;
        }
        t(c.h8.REVIEW);
    }, [b, p, t, m, I, v, y]),
    b)
        ? (0, i.jsx)(f.Z, {})
        : p
          ? (0, i.jsx)(s.Vq, { onClose: n })
          : null != A
            ? (0, i.jsx)(d.Z, { onClose: n })
            : null;
}
