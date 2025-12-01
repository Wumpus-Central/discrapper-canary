n.d(t, { v: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(399606),
    o = n(89057),
    s = n(597688),
    l = n(987209),
    c = n(563132),
    u = n(409813),
    d = n(48931),
    f = n(456251),
    p = n(981631);
function _(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            blockedPayments: _,
            hasFetchedSkus: m,
            paymentSources: h,
            hasFetchedPaymentSources: g,
            application: E,
            skusById: b,
            selectedSkuId: y,
        } = (0, c.JL)(),
        { isGift: O } = (0, l.wD)(),
        [v, S] = i.useState(!0),
        [I, T] = (0, a.Wu)([s.Z], () => [s.Z.isFetchingCategories, s.Z.error]);
    return (i.useEffect(() => {
        let e = null != E;
        m && g && e && S(I);
    }, [m, g, E, I]),
    i.useEffect(() => {
        if (v || _ || null == y) return;
        let e = b[y];
        return O &&
            ((null == e ? void 0 : e.productLine) === p.POd.COLLECTIBLES ||
                (null == e ? void 0 : e.productLine) === p.POd.APPLICATION ||
                (null == e ? void 0 : e.productLine) === p.POd.SOCIAL_LAYER_GAME_ITEM)
            ? void t(u.h8.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(h).length
              ? void t(u.h8.ADD_PAYMENT_STEPS)
              : void t(u.h8.REVIEW);
    }, [v, _, t, h, O, b, y]),
    v)
        ? (0, r.jsx)(f.Z, {})
        : _
          ? (0, r.jsx)(o.Vq, { onClose: n })
          : null != T
            ? (0, r.jsx)(d.Z, { onClose: n })
            : null;
}
