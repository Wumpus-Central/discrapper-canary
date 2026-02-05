"use strict";
n.d(t, { B: () => p });
var r = n(627968),
    i = n(64700),
    a = n(417597),
    s = n(459793),
    o = n(590180),
    l = n(937008),
    u = n(156312),
    c = n(166532),
    d = n(49420),
    _ = n(534479),
    f = n(652215);
function p(e) {
    let { handleStepChange: t, handleClose: n } = e,
        {
            blockedPayments: p,
            hasFetchedSkus: h,
            paymentSources: m,
            hasFetchedPaymentSources: g,
            application: E,
            skusById: A,
            selectedSkuId: I,
        } = (0, u.P5)(),
        { isGift: T } = (0, l.Pv)(),
        [y, S] = i.useState(!0),
        [v, C] = (0, a.yK)([o.A], () => [o.A.isFetchingCategories, o.A.error]);
    return (i.useEffect(() => {
        let e = null != E;
        h && g && e && S(v);
    }, [h, g, E, v]),
    i.useEffect(() => {
        if (y || p || null == I) return;
        let e = A[I];
        T &&
        (e?.productLine === f.EZt.COLLECTIBLES ||
            e?.productLine === f.EZt.APPLICATION ||
            e?.productLine === f.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(c.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(m).length
              ? t(c.pn.ADD_PAYMENT_STEPS)
              : t(c.pn.REVIEW);
    }, [y, p, t, m, T, A, I]),
    y)
        ? (0, r.jsx)(_.A, {})
        : p
          ? (0, r.jsx)(s.oO, { onClose: n })
          : null != C
            ? (0, r.jsx)(d.A, { onClose: n })
            : null;
}
