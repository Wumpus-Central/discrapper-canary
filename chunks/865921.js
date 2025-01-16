n.d(t, {
    v: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    a = n(399606),
    r = n(89057),
    c = n(597688),
    d = n(987209),
    s = n(563132),
    l = n(409813),
    f = n(48931),
    u = n(456251),
    p = n(981631);
function _(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { blockedPayments: _, hasFetchedSkus: b, paymentSources: x, hasFetchedPaymentSources: g, application: m, skusById: h, selectedSkuId: C } = (0, s.usePaymentContext)(),
        { isGift: S } = (0, d.wD)(),
        [B, k] = o.useState(!0),
        [v, T] = (0, a.Wu)([c.Z], () => [c.Z.isFetchingCategories, c.Z.error]);
    if (
        (o.useEffect(() => {
            let e = null != m;
            if (!!b && !!g && !!e) k(v);
        }, [b, g, m, v]),
        o.useEffect(() => {
            if (B || _ || null == C) return;
            let e = h[C];
            if (S && (null == e ? void 0 : e.productLine) === p.POd.COLLECTIBLES) {
                t(l.h8.GIFT_CUSTOMIZATION);
                return;
            }
            if (0 === Object.keys(x).length) {
                t(l.h8.ADD_PAYMENT_STEPS);
                return;
            }
            t(l.h8.REVIEW);
        }, [B, _, t, x, S, h, C]),
        B)
    )
        return (0, i.jsx)(u.Z, {});
    if (_) return (0, i.jsx)(r.Vq, { onClose: n });
    if (null != T) return (0, i.jsx)(f.Z, { onClose: n });
    return null;
}
