n.d(t, {
    B: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(417597),
    s = n(459793),
    o = n(590180),
    l = n(937008),
    c = n(156312),
    u = n(166532),
    d = n(49420),
    f = n(534479),
    p = n(652215);

function _(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            blockedPayments: _,
            hasFetchedSkus: h,
            paymentSources: m,
            hasFetchedPaymentSources: g,
            application: E,
            skusById: b,
            selectedSkuId: y,
        } = (0, c.P5)(),
        { isGift: O } = (0, l.Pv)(),
        [A, v] = i.useState(!0),
        [S, I] = (0, a.yK)([o.A], () => [o.A.isFetchingCategories, o.A.error]);
    return (i.useEffect(() => {
        let e = null != E;
        h && g && e && v(S);
    }, [h, g, E, S]),
    i.useEffect(() => {
        if (A || _ || null == y) return;
        let e = b[y];
        O &&
        ((null == e ? void 0 : e.productLine) === p.EZt.COLLECTIBLES ||
            (null == e ? void 0 : e.productLine) === p.EZt.APPLICATION ||
            (null == e ? void 0 : e.productLine) === p.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(u.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(m).length
              ? t(u.pn.ADD_PAYMENT_STEPS)
              : t(u.pn.REVIEW);
    }, [A, _, t, m, O, b, y]),
    A)
        ? (0, r.jsx)(f.A, {})
        : _
          ? (0, r.jsx)(s.oO, {
                onClose: n,
            })
          : null != I
            ? (0, r.jsx)(d.A, {
                  onClose: n,
              })
            : null;
}
