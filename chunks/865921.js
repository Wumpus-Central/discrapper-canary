r.d(n, {
    v: function () {
        return m;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(399606),
    l = r(89057),
    u = r(597688),
    c = r(987209),
    d = r(563132),
    f = r(409813),
    p = r(48931),
    h = r(456251),
    _ = r(981631);
function m(e) {
    let { handleStepChange: n, handleClose: r } = e,
        { blockedPayments: i, hasFetchedSkus: m, paymentSources: g, hasFetchedPaymentSources: E, application: v, skusById: y, selectedSkuId: b } = (0, d.usePaymentContext)(),
        { isGift: I } = (0, c.wD)(),
        [T, S] = o.useState(!0),
        [A, C] = (0, s.Wu)([u.Z], () => [u.Z.isFetchingCategories, u.Z.error]);
    if (
        (o.useEffect(() => {
            let e = null != v;
            if (!!m && !!E && !!e) S(A);
        }, [m, E, v, A]),
        o.useEffect(() => {
            if (T || i || null == b) return;
            let e = y[b];
            if (I && (null == e ? void 0 : e.productLine) === _.POd.COLLECTIBLES) {
                n(f.h8.GIFT_CUSTOMIZATION);
                return;
            }
            if (0 === Object.keys(g).length) {
                n(f.h8.ADD_PAYMENT_STEPS);
                return;
            }
            n(f.h8.REVIEW);
        }, [T, i, n, g, I, y, b]),
        T)
    )
        return (0, a.jsx)(h.Z, {});
    if (i) return (0, a.jsx)(l.Vq, { onClose: r });
    if (null != C) return (0, a.jsx)(p.Z, { onClose: r });
    return null;
}
